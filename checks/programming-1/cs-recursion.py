# content: 4f7fc44513ff
from cs import *
import sys
check("traces", traces_current("cs-recursion"))
FACT = """
def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)
print(fact(4))
"""
text("example", run(FACT), "24\n")
text("practice[0]", run("""
def total(n):
    if n == 0:
        return 0
    return n + total(n - 1)
print(total(4))
"""), "10\n")
text("practice[1]", run("""
def countup(n):
    if n == 0:
        return
    countup(n - 1)
    print(n)
countup(3)
"""), "1\n2\n3\n")
text("practice[2]", run("""
def power(b, e):
    if e == 0:
        return 1
    return b * power(b, e - 1)
print(power(2, 5))
print(power(7, 0))
"""), "32\n1\n")
out, err = run_err("""
def total(n):
    return n + total(n - 1)
print(total(3))
""")
text("practice[3]", out + err, "RecursionError: maximum recursion depth exceeded")
# formal / example claims
check("formal: default recursion limit is 1000", sys.getrecursionlimit() == 1000)
check("formal: each call has its own n (fact values)", run("def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\nprint([fact(k) for k in range(1, 7)])\n") == "[1, 2, 6, 24, 120, 720]\n")
calls = []
def fact(n):
    calls.append(n)
    if n <= 1:
        return 1
    return n * fact(n - 1)
fact(4)
check("example: four calls 4,3,2,1 (stack of five frames with global)", calls == [4, 3, 2, 1])
check("lab: fib(4) = 3", run("def fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\nprint(fib(4))\n") == "3\n")
cnt = {}
def fib(n):
    cnt[n] = cnt.get(n, 0) + 1
    return n if n < 2 else fib(n - 1) + fib(n - 2)
fib(4)
check("lab: fib(4) makes 9 calls, fib(2) x2, fib(1) x3, fib(0) x2", sum(cnt.values()) == 9 and cnt == {4: 1, 3: 1, 2: 2, 1: 3, 0: 2})
cnt.clear(); f5 = fib(5)
check("lab: fib(5) = 5 with 15 calls", f5 == 5 and sum(cnt.values()) == 15)
out, err = run_err("def fact(n):\n    if n <= 1:\n        return 1\n    fact(n - 1)\nprint(fact(3))\n")
check("mistakes: forgetting return gives None", out == "None\n")
check("mathWhy: a_n = n a_(n-1) is n!", all(fact(n) == __import__("math").factorial(n) for n in range(1, 15)))
