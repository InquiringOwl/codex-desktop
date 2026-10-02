# @program define-call
def greet(name):
    print("Hello,", name)

print("start")
greet("Ada")
greet("Alan")
print("end")
# @program return-print
def square_print(x):
    print(x * x)

def square_return(x):
    return x * x

a = square_print(4)
b = square_return(4)
print(a, b)
# @program nested-calls
def square(n):
    return n * n

def sum_squares(a, b):
    return square(a) + square(b)

print(sum_squares(3, 4))
# @program after-return
def double(n):
    return n * 2
    print("never")

print(double(5) + 1)
# @program never-called
def f():
    print("in f")

print("before")
# @program print-not-return
def add(a, b):
    print(a + b)

total = add(2, 3)
print(total)
