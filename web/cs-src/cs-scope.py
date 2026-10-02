# @program shadow
x = 10

def show():
    x = 99
    print("inside:", x)

show()
print("outside:", x)
# @program read-global
rate = 3

def cost(n):
    return n * rate

print(cost(8))
# @program params
def bump(n):
    n = n + 1
    print("in bump:", n)
    return n

count = 5
bump(count)
print("count is still", count)
count = bump(count)
print("now count is", count)
# @program unbound
total = 0

def add_one():
    total = total + 1

add_one()
print(total)
# @program global-fix
total = 0

def add_one():
    global total
    total = total + 1

add_one()
add_one()
print(total)
# @program local-wins
x = 1

def f():
    x = 2
    return x

print(f(), x)
# @program change
def change(n):
    n = 100

n = 7
change(n)
print(n)
# @program tick
count = 0

def tick():
    global count
    count = count + 1

tick()
tick()
print(count)
