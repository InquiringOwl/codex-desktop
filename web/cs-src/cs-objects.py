# @program account
class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount

a = BankAccount("Ana")
b = BankAccount("Ben")
a.deposit(5)
b.deposit(3)
a.deposit(2)
print(a.balance, b.balance)
# @program call
class BankAccount:
    def __init__(self):
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount
        return self.balance

acct = BankAccount()
x = acct.deposit(5)
y = BankAccount.deposit(acct, 5)
print(x, y)
# @program inherit
class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def month_end(self):
        self.balance -= 1

class Savings(BankAccount):
    def month_end(self):
        self.balance += self.balance // 10
        super().month_end()

c = BankAccount(50)
s = Savings(50)
c.month_end()
s.month_end()
print(c.balance, s.balance)
# @program p-private
class Account:
    def __init__(self):
        self._balance = 0

a = Account()
a._balance = 99
print(a._balance)
# @program p-mro
class A:
    def hi(self):
        return "A"

class B(A):
    def hi(self):
        return "B"

class C(B):
    pass

print(C().hi(), A().hi())
# @program p-shared
class Bag:
    items = []
    def add(self, x):
        self.items.append(x)

a = Bag()
b = Bag()
a.add(1)
b.add(2)
print(a.items, b.items)
