# @program countdown
n = 3
while n > 0:
    print(n)
    n = n - 1
print("liftoff", n)
# @program digits
n = 472
total = 0
while n > 0:
    total = total + n % 10
    n = n // 10
print(total)
# @program less
i = 1
while i < 4:
    print(i)
    i = i + 1
# @program less-equal
i = 1
while i <= 4:
    print(i)
    i = i + 1
# @program never
n = 0
while n > 0:
    print(n)
    n = n - 1
print("done", n)
