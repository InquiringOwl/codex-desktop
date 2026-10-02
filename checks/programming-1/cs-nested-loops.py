# content: 14ad1547608f
from cs import *
check("traces", traces_current("cs-nested-loops"))
text("example", run("""
count = 0
for i in range(2):
    for j in range(3):
        count = count + 1
        print(i, j)
print("count:", count)
"""), "0 0\n0 1\n0 2\n1 0\n1 1\n1 2\ncount: 6\n")
text("practice[0]", run("""
for i in range(2):
    for j in range(2):
        print(i, j)
"""), "0 0\n0 1\n1 0\n1 1\n")
text("practice[1]", run("""
n = 0
for i in range(3):
    for j in range(5):
        n = n + 1
print(n)
"""), "15\n")
text("practice[2]", run("""
for i in range(1, 4):
    for j in range(i):
        print(i, end="")
    print()
"""), "1\n22\n333\n")
text("practice[3]", run("""
for i in range(3):
    for j in range(3):
        if j == i:
            break
        print(i, j)
"""), "1 0\n2 0\n2 1\n")
# formal: m x n passes, triangular count m(m-1)/2, inner restarts each pass, after_inner once per outer pass, break inner only
for m in range(0, 6):
    for n in range(0, 6):
        check("formal: m*n passes %d %d" % (m, n), run("c = 0\nfor i in range(%d):\n    for j in range(%d):\n        c += 1\nprint(c)" % (m, n)) == "%d\n" % (m * n))
    check("formal: triangular %d" % m, run("c = 0\nfor i in range(%d):\n    for j in range(i):\n        c += 1\nprint(c)" % m) == "%d\n" % (m * (m - 1) // 2))
text("formal: inner restarts, after_inner once per outer pass", run("""
for i in range(2):
    for j in range(2):
        print("j", j)
    print("after", i)
"""), "j 0\nj 1\nafter 0\nj 0\nj 1\nafter 1\n")
text("formal: break ends only the inner loop", run("""
for i in range(3):
    for j in range(5):
        break
    print(i)
"""), "0\n1\n2\n")
text("mistake: reused loop name", run("""
for i in range(2):
    for i in range(4):
        pass
    print(i)
"""), "3\n3\n")
