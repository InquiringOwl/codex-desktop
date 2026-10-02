# content: 47ef2374c294
from cs import *
check("traces", traces_current("cs-for"))
text("example", run("""
total = 0
for i in range(1, 6):
    total = total + i
print(total)
print(i)
"""), "15\n5\n")
text("practice[0]", run("""
for i in range(4):
    print(i)
"""), "0\n1\n2\n3\n")
text("practice[1]", run("""
for k in range(10, 0, -3):
    print(k)
"""), "10\n7\n4\n1\n")
text("practice[2]", run("""
total = 0
for n in range(1, 10, 2):
    total += n
print(total)
"""), "25\n")
check("practice[2]: sum of first n odds is n^2", all(sum(range(1, 2 * n, 2)) == n * n for n in range(1, 50)))
text("practice[3]", run("""
count = 0
for x in range(1, 20):
    if x % 3 == 0:
        count += 1
print(count, x)
"""), "6 19\n")
# formal rules
check("formal: rebinding the loop variable does not change the next item", run("for i in range(3):\n    print(i)\n    i = 10\n") == "0\n1\n2\n")
out, err = run_err("for j in range(0):\n    pass\nprint(j)\n")
check("formal: empty range never assigns the variable", err == "NameError: name 'j' is not defined")
check("formal: strings give characters", run("for c in 'abc':\n    print(c)\n") == "a\nb\nc\n")
check("formal: lists give elements", run("for v in [3, 1, 2]:\n    print(v)\n") == "3\n1\n2\n")
check("formal: range(stop) = range(0, stop)", value("list(range(5))") == "[0, 1, 2, 3, 4]")
check("formal: range(2, 11, 3)", value("list(range(2, 11, 3))") == "[2, 5, 8]")
check("formal: range(10, 0, -3)", value("list(range(10, 0, -3))") == "[10, 7, 4, 1]")
check("formal: empty when first value fails", value("list(range(5, 1))") == "[]" and value("list(range(1, 5, -1))") == "[]")
check("formal: stop never included", all(b not in range(a, b, s) for a in range(-5, 6) for b in range(-5, 6) for s in (1, 2, 3, -1, -2)))
check("formal: len(range(a, b)) = b - a", all(len(range(a, b)) == b - a for a in range(-10, 10) for b in range(a, 15)))
out, err = run_err("range(1, 5, 0)")
check("formal: step 0 is ValueError", err is not None and err.startswith("ValueError"))
check("mathWhy: nth term a + (n-1)d", all(range(a, b, d)[n - 1] == a + (n - 1) * d for a, b, d in [(2, 30, 3), (1, 100, 7), (10, -20, -4)] for n in range(1, len(range(a, b, d)) + 1)))
check("mathWhy: sum of range(1, n+1) = n(n+1)/2", all(sum(range(1, n + 1)) == n * (n + 1) // 2 for n in range(0, 200)))
check("mistakes: range(1, 5) excludes 5", value("list(range(1, 5))") == "[1, 2, 3, 4]")
check("mistakes: range(10, 0) is empty", value("list(range(10, 0))") == "[]")
check("mistakes: reset inside loop keeps only last", run("for i in range(1, 4):\n    total = 0\n    total += i\nprint(total)\n") == "3\n")
