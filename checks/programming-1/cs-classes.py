# content: 36974352f3f5
from cs import *
check("traces", traces_current("cs-classes"))
text("example", run("""
class Rect:
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

a = Rect(3, 4)
b = Rect(2, 5)
a.w = 6
print(a.area(), b.area())
"""), "24 10\n")
text("practice[0]", run("""
class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Pet("Ivy", 3)
q = Pet("Rex", 5)
p.age += 1
print(p.name, p.age, q.age)
"""), "Ivy 4 5\n")
text("practice[1]", run("""
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
q = p
r = Point(1, 2)
q.x = 5
print(p.x, p is q, p is r)
"""), "5 True False\n")
text("practice[2]", run("""
class Ticket:
    count = 0

    def __init__(self):
        Ticket.count += 1
        self.number = Ticket.count

a = Ticket()
b = Ticket()
print(a.number, b.number, Ticket.count)
"""), "1 2 2\n")
out, err = run_err("""
class Counter:
    def __init__(self):
        self.n = 0

    def add():
        self.n += 1

c = Counter()
c.add()
""")
# Python 3.10+ names the method as Counter.add(); 3.9 and older print just add(). The page shows the current wording.
check("practice[3]", out + err in ("TypeError: Counter.add() takes 0 positional arguments but 1 was given", "TypeError: add() takes 0 positional arguments but 1 was given"), repr(out + err))
# formal
P = "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def dist2(self):\n        return self.x ** 2 + self.y ** 2\np = Point(3, 4)"
check("formal: class statement makes a class object", value("type(Point)", P) == "<class 'type'>")
check("formal: calling makes an instance", value("type(p).__name__", P) == "'Point'")
check("formal: each call a new object", value("Point(1, 2) is Point(1, 2)", P) == "False")
check("formal: p.m() is Class.m(p)", value("p.dist2() == Point.dist2(p) == 25", P) == "True")
check("formal: instance attributes in __dict__", value("p.__dict__", P) == "{'x': 3, 'y': 4}")
check("formal: __init__ must return None", run_err("class A:\n    def __init__(self):\n        return 1\nA()")[1] == "TypeError: __init__() should return None, not 'int'")
D = "class Dog:\n    kind = 'canine'\na = Dog()\nb = Dog()"
check("formal: class attribute shared", value("(a.kind, b.kind)", D) == "('canine', 'canine')")
check("formal: assignment sets on instance", value("(a.kind, b.kind, Dog.kind, 'kind' in a.__dict__)", D + "\na.kind = 'wolf'") == "('wolf', 'canine', 'canine', True)")
check("formal: missing attribute -> AttributeError", run_err(P + "\nprint(p.z)")[1] == "AttributeError: 'Point' object has no attribute 'z'")
check("formal: q = p aliases", value("q is p", P + "\nq = p") == "True")
# mistakes
check("mistakes: x = x stores nothing", run_err("class C:\n    def __init__(self, x):\n        x = x\nprint(C(1).x)")[1] == "AttributeError: 'C' object has no attribute 'x'")
check("mistakes: shared class list", run("class S:\n    marks = []\na = S()\nb = S()\na.marks.append(1)\nprint(b.marks)") == "[1]\n")
