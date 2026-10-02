# content: 3188a14b41d1
from cs import *
check("traces", traces_current("cs-scope"))
UNB = ("UnboundLocalError: local variable 'count' referenced before assignment",
       "UnboundLocalError: cannot access local variable 'count' where it is not associated with a value")
text("example", run("""
x = 5

def f(y):
    x = y * 2
    return x

print(f(3))
print(x)
"""), "6\n5\n")
text("practice[0]", run("""
name = "Ada"

def greet():
    print("Hi", name)

greet()
"""), "Hi Ada\n")
out, err = run_err("""
def f():
    z = 1

f()
print(z)
""")
text("practice[1]", out + err, "NameError: name 'z' is not defined")
text("practice[2]", run("""
def reset(n):
    n = 0
    return n

k = 9
reset(k)
print(k)
"""), "9\n")
out, err = run_err("""
count = 0

def inc():
    count = count + 1

inc()
print(count)
""")
check("practice[3]", out == "" and err in UNB)
# formal rules
check("formal: assignment later in body makes name local", run_err("""
x = 1
def f():
    print(x)
    x = 2
f()
""")[1].startswith("UnboundLocalError"))
check("formal: for variable is local", run_err("""
i = 5
def f():
    print(i)
    for i in range(2):
        pass
f()
""")[1].startswith("UnboundLocalError"))
check("formal: += makes name local", run_err("""
n = 0
def f():
    n += 1
f()
""")[1].startswith("UnboundLocalError"))
text("formal: read a global never assigned", run("""
rate = 3
def cost(n):
    return n * rate
print(cost(8))
"""), "24\n")
text("formal: built-ins found last", run("""
def f():
    return len("abc")
print(f())
"""), "3\n")
text("formal: unknown name is NameError", run_err("""
def f():
    return nowhere
f()
""")[1], "NameError: name 'nowhere' is not defined")
text("formal: rebinding a parameter leaves the caller", run("""
def bump(n):
    n = n + 1
    return n
count = 5
bump(count)
print(count)
count = bump(count)
print(count)
"""), "5\n6\n")
text("formal: global statement", run("""
total = 0
def add_one():
    global total
    total = total + 1
add_one()
add_one()
print(total)
"""), "2\n")
text("formal: each call has a new frame", run("""
def f(a):
    b = a * 10
    return b
print(f(1), f(2))
"""), "10 20\n")
