# content: 3e54872be4da
from cs import *
check("traces", traces_current("cs-while"))
text("example", run("""
n = 472
total = 0
while n > 0:
    total = total + n % 10
    n = n // 10
print(total)
"""), "13\n")
text("practice[0]", run("""
n = 10
while n > 0:
    print(n)
    n = n - 4
print("after", n)
"""), "10\n6\n2\nafter -2\n")
text("practice[1]", run("""
i = 0
while i <= 3:
    print(i * i)
    i = i + 1
"""), "0\n1\n4\n9\n")
text("practice[2]", run("""
x = 1
steps = 0
while x <= 1000:
    x = x * 2
    steps = steps + 1
print(steps, x)
"""), "10 1024\n")
check("practice[2]: 2**9 = 512 is still <= 1000", 2 ** 9 == 512 and 2 ** 10 == 1024)
text("practice[3]", run("""
age = int(input("age? "))
while age < 0:
    print("must be 0 or more")
    age = int(input("age? "))
print("ok", age)
""", inputs=["-3", "-1", "20"]), "age? -3\nmust be 0 or more\nage? -1\nmust be 0 or more\nage? 20\nok 20\n")
# formal rules
check("formal: false at the start runs zero times", run("n = 0\nwhile n > 0:\n    print(n)\n    n = n - 1\nprint('done', n)\n") == "done 0\n")
check("formal: condition evaluated once more than the body", run("""
tests = 0
def cond(n):
    global tests
    tests += 1
    return n > 0
n = 3
body = 0
while cond(n):
    body += 1
    n -= 1
print(tests, body)
""") == "4 3\n")
check("formal: break ends the loop at once", run("n = 0\nwhile True:\n    n += 1\n    if n == 3:\n        break\n    print(n)\nprint('end', n)\n") == "1\n2\nend 3\n")
check("formal: continue goes back to the test", run("n = 0\nwhile n < 5:\n    n += 1\n    if n % 2 == 0:\n        continue\n    print(n)\n") == "1\n3\n5\n")
check("formal: % 10 and // 10 split the last digit", all(n % 10 == int(str(n)[-1]) and (n // 10 == (int(str(n)[:-1]) if n >= 10 else 0)) for n in range(0, 5000)))
def passes(n):
    c = 0
    while n > 0:
        n //= 10; c += 1
    return c
check("formal: digit loop runs len(str(n)) times", all(passes(n) == len(str(n)) for n in range(1, 10000)))
check("mistakes: n != 0 stepping by 2 from 5 skips 0", 0 not in range(5, -10, -2))
check("mistakes: decrease before print gives 2 1 0", run("n = 3\nwhile n > 0:\n    n = n - 1\n    print(n)\n") == "2\n1\n0\n")
