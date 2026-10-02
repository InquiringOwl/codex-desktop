# @program types
a = 7 / 2
b = 7 // 2
c = 7 % 2
d = -7 // 2
e = 2 ** 10
f = 0.1 + 0.2
print(a, b, c, d, e)
print(type(a), type(b))
print(f, f == 0.3)
print(type("7"), type(True))
# @program mixed
x = 3 + 4.0
s = "3" + "4"
r = "ab" * 3
print(x, s, r)
n = 3 + "4"
# @program prec
print(2 + 3 * 4 ** 2)
# @program floor
print(-7 // 2, -7 % 2)
# @program negpow
print(-2 ** 2, (-2) ** 2)
