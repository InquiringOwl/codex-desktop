# @program swap-temp
a = 3
b = 5
temp = a
a = b
b = temp
print(a, b)
# @program swap-tuple
a = 3
b = 5
a, b = b, a
print(a, b)
# @program rebind
# @heap
x = 5
y = x
print(x is y)
x = 7
print(x is y)
print(x, y)
# @program count
count = 0
count = count + 1
count += 2
print(count)
# @program bad-swap
a = 3
b = 5
a = b
b = a
print(a, b)
# @program alias-math
a = 1
b = a
a = a + 10
print(a, b)
