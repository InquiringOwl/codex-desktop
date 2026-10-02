# content: d8751abe5638
from cs import *
check("traces", traces_current("cs-functions"))
text("example", run("""
def area(w, h):
    a = w * h
    return a

result = area(3, 4)
print(result)
print(area(2, 5) + 1)
"""), "12\n11\n")
text("practice[0]", run("""
def hello():
    print("hi")

hello()
hello()
"""), "hi\nhi\n")
text("practice[1]", run("""
def triple(n):
    return 3 * n

print(triple(4) + triple(1))
"""), "15\n")
text("practice[2]", run("""
def show(n):
    print(n * 2)

x = show(5)
print(x)
"""), "10\nNone\n")
text("practice[3]", run("""
def sign(n):
    if n < 0:
        return "negative"
    return "not negative"
    print("done")

print(sign(-3))
print(sign(0))
"""), "negative\nnot negative\n")
text("formal: def runs nothing", run("""
def f():
    print("body")
"""), "")
text("formal: def binds a function object", run("""
def f():
    pass
print(type(f).__name__)
"""), "function\n")
text("formal: call before def is NameError", run_err("""
g()
def g():
    pass
""")[1], "NameError: name 'g' is not defined")
check("formal: wrong argument count is TypeError", (run_err("""
def f(a, b):
    return a
f(1)
""")[1] or "").startswith("TypeError"))
text("formal: parameter bound to the argument's object", run("""
def same(p, q):
    return p is q
x = [1, 2]
print(same(x, x))
"""), "True\n")
text("formal: no return and bare return give None", run("""
def a():
    pass
def b():
    return
print(a(), b())
"""), "None None\n")
text("formal: return ends the call", run("""
def f():
    for i in range(10):
        return i
    print("never")
print(f())
"""), "0\n")
text("plain: square(4) + 1", run("""
def square(x):
    return x * x
print(square(4) + 1)
"""), "17\n")
text("mathWhy: f(x) = 2x + 1", run("""
def f(x): return 2 * x + 1
print(f(3))
"""), "7\n")
