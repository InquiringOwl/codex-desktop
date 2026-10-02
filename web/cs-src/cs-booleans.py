# @program compare
x = 7
print(x > 3, x == 7, x != 7)
print(0 < x < 10)
print(10 < x < 20)
print("apple" < "banana")
print(1 == 1.0, "1" == 1)
even = x % 2 == 0
print(x > 3 and even)
print(x > 3 or even)
print(not even)
# @program short
x = 0
safe = x != 0 and 10 / x > 1
print(safe)
name = ""
shown = name or "guest"
print(shown)
print(3 and 4, 0 or None)
print(10 / x > 1 and x != 0)
# @program truthy
print(bool(""), bool("0"), bool(0.0), bool([]))
# @program operands
print(0 or "x", 5 and 0)
# @program notop
print(not 0, not "False", True + True)
