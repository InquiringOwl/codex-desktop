# @program inputs
# @input 3
# @input 4
a = input("a? ")
b = input("b? ")
print(a + b)
print(type(a))
x = int(a)
y = int(b)
print(x + y)
# @program fstrings
price = 2.5
qty = 3
total = price * qty
print(f"Total: {total:.2f}")
print(f"{qty} items at {price}")
print("a", "b", "c", sep="-")
print("no newline", end="")
print("!")
print(f"{0.125:.2f} {2.675:.2f}")
# @program join
# @input 5
n = input("n? ")
print(n * 3)
print(int(n) * 3)
# @program format
print(f"{7 / 3:.2f}", round(2.5), round(3.5))
# @program sepend
print(1, 2, 3, sep=", ", end=".\n")
print("done")
# @program bad-int
# @input 2.5
x = int(input("x? "))
print(x)
