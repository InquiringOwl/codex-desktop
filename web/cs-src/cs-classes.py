# @program points
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
q = Point(3, 4)
p.x = 10
print(p.x, p.y, q.x, q.y)
# @program init
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def dist2(self):
        return self.x ** 2 + self.y ** 2

p = Point(3, 4)
print(p.dist2())
# @program p-classattr
class Dog:
    kind = "canine"
    def __init__(self, name):
        self.name = name

a = Dog("Rex")
b = Dog("Ivy")
a.kind = "wolf"
print(a.kind, b.kind, Dog.kind)
# @program p-alias
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
q = p
q.x = 5
print(p.x, q.x)
# @program p-noself
class Counter:
    def __init__(self, n):
        n = n

c = Counter(3)
print(c.n)
