# @program bases
n = 13
b = bin(n)
print(b)
m = int("1101", 2)
print(m)
h = hex(255)
print(h)
print(0xFF, 0b11111111)
# @program text
code = ord("A")
print(code, chr(66))
data = "é".encode()
print(data)
print(len("é"), len(data))
print(list(data))
