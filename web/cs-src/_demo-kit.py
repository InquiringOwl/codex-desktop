# @program swap
# @input 3
# @input 5
a = int(input("a? "))
b = int(input("b? "))
a, b = b, a
print(a, b)
# @program alias
xs = [1, 2]
ys = xs
ys.append(3)
zs = xs[:]
zs.append(4)
print(xs, zs)
# @program fact
def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)
print(fact(3))
# @program point
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
p = Point(1, 2)
p.x = 5
# @program file
# @file scores.txt
# | 90
# | 75
total = 0
with open("scores.txt") as f:
    for line in f:
        total += int(line)
print(total)
