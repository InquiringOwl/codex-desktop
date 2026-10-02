# content: b75fa23185e9
from cs import *
check("traces", traces_current("cs-efficiency"))
text("example", run("""
def linear_search(xs, target):
    comps = 0
    for i in range(len(xs)):
        comps += 1
        if xs[i] == target:
            return i, comps
    return -1, comps

print(linear_search([4, 8, 1, 6, 3], 1))
print(linear_search([4, 8, 1, 6, 3], 9))
"""), "(2, 3)\n(-1, 5)\n")
text("practice[0]", run("""
steps = 0
for i in range(10):
    steps += 1
print(steps)
"""), "10\n")
text("practice[1]", run("""
for n in [3, 6]:
    count = 0
    for i in range(n):
        for j in range(i + 1, n):
            count += 1
    print(n, count)
"""), "3 3\n6 15\n")
text("practice[2]", run("""
n = 64
steps = 0
while n > 1:
    n = n // 2
    steps += 1
print(steps)
"""), "6\n")
text("practice[3]", run("""
calls = 0

def fib(n):
    global calls
    calls += 1
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

for n in [5, 10, 20]:
    calls = 0
    fib(n)
    print(n, calls)
"""), "5 15\n10 177\n20 21891\n")
def lin(n):
    xs, comps = list(range(n)), 0
    for x in xs:
        comps += 1
        if x == -1:
            break
    return comps
def allpairs(n):
    return sum(1 for i in range(n) for j in range(n))
def halfpairs(n):
    return sum(1 for i in range(n) for j in range(i + 1, n))
def halvings(n):
    s = 0
    while n > 1:
        n //= 2; s += 1
    return s
check("formal: linear search worst case n", all(lin(n) == n for n in (4, 8, 16, 100)))
check("formal: nested range(n) is n*n", all(allpairs(n) == n * n for n in range(1, 30)))
check("formal: range(i+1, n) is n(n-1)/2", all(halfpairs(n) == n * (n - 1) // 2 for n in range(1, 30)))
check("formal: halving 64 takes 6", halvings(64) == 6)
check("plain: pairs 4 -> 16, 8 -> 64", (allpairs(4), allpairs(8)) == (16, 64))
check("mathWhy: n^2 vs 2^n", run("for n in [10, 20]:\n    print(n ** 2, 2 ** n)\n") == "100 1024\n400 1048576\n")
