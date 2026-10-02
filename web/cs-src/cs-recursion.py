# @program fact
def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)
print(fact(4))
# @program fib
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
print(fib(4))
# @program before
def countdown(n):
    if n == 0:
        return
    print(n)
    countdown(n - 1)
countdown(3)
# @program after
def countup(n):
    if n == 0:
        return
    countup(n - 1)
    print(n)
countup(3)
# @program calls
calls = 0
def fib(n):
    global calls
    calls += 1
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
print(fib(5), calls)
