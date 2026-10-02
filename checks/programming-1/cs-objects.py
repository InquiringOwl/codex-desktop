# content: 67b46af79adf
from cs import *
check("traces", traces_current("cs-objects"))
text("example", run("""
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        self.balance -= amount
        return True

acct = BankAccount("Ana", 10)
acct.deposit(5)
ok = acct.withdraw(20)
print(ok, acct.balance)
"""), "False 15\n")
text("practice[0]", run("""
class Counter:
    def __init__(self):
        self.n = 0

    def tick(self):
        self.n += 1
        return self.n

c = Counter()
d = Counter()
c.tick()
c.tick()
print(c.tick(), d.tick())
"""), "3 1\n")
text("practice[1]", run("""
class Greeter:
    def __init__(self, name):
        self.name = name

    def greet(self, other):
        return self.name + " greets " + other

g = Greeter("Ana")
print(g.greet("Ben"))
print(Greeter.greet(g, "Cy"))
"""), "Ana greets Ben\nAna greets Cy\n")
out, err = run_err("""
class Lamp:
    def toggle():
        print("click")

Lamp().toggle()
"""); # Python 3.10+ names the method as Lamp.toggle(); 3.9 and older print just toggle(). The page shows the current wording.
check("practice[2]", out + err in ("TypeError: Lamp.toggle() takes 0 positional arguments but 1 was given", "TypeError: toggle() takes 0 positional arguments but 1 was given"), repr(out + err))
text("practice[3]", run("""
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

    def intro(self):
        return self.name + " says " + self.speak()

class Dog(Animal):
    def __init__(self, name, trick):
        super().__init__(name)
        self.trick = trick

    def speak(self):
        return "woof"

d = Dog("Rex", "sit")
print(Animal("Gen").intro())
print(d.intro(), d.trick)
"""), "Gen says ...\nRex says woof sit\n")
S = """
class Base:
    tag = "base"
    def __init__(self):
        self._hidden = 1
        self.__secret = 2
    def m(self):
        return "Base.m"
    def who(self):
        return self.m()
class Sub(Base):
    def m(self):
        return "Sub+" + super().m()
b = Base()
s = Sub()
"""
check("formal: obj.m() is C.m(obj)", value("s.who() == Sub.who(s)", S) == "True")
check("formal: methods are functions in the class", value("type(Base.__dict__['m']).__name__", S) == "'function'")
check("formal: method without self -> TypeError", "TypeError" in run_err("class L:\n    def f():\n        pass\nL().f()\n")[1])
check("formal: instance attribute shadows class attribute", value("(b.tag, Base.tag)", S + "b.tag = 'own'\n") == "('own', 'base')")
check("formal: class attribute shared", value("s.tag", S) == "'base'")
check("formal: _name not private", value("b._hidden", S) == "1")
check("formal: __name mangled", value("(b._Base__secret, hasattr(b, '__secret'))", S) == "(2, False)")
check("formal: lookup instance class first + super()", value("(s.m(), s.who(), b.who())", S) == "('Sub+Base.m', 'Sub+Base.m', 'Base.m')")
check("formal: mro", value("[c.__name__ for c in Sub.__mro__]", S) == "['Sub', 'Base', 'object']")
check("formal: isinstance subclass", value("(isinstance(s, Base), isinstance(b, Sub))", S) == "(True, False)")
