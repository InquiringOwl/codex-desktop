# content: e3162aadcde2
# a1-factor-special: Special Factoring Patterns
same("formal", expand((a + b)*(a**2 - a*b + b**2)), a**3 + b**3)
same("formal", expand((a - b)*(a**2 + a*b + b**2)), a**3 - b**3)
same("formal", factor(x**2 + 9, extension=None), x**2 + 9)

# example: x^2 - 16
same("example", x**2 - 4**2, x**2 - 16)
same("example", factor(x**2 - 16), (x + 4)*(x - 4))
same("example", [(14 + 4), (14 - 4), 18*10], [18, 10, 180])
same("example", (x**2 - 16).subs(x, 14), 180)
same("example", 14**2, 196)

# practice[0]
same("practice[0]", factor(x**2 - 49), (x + 7)*(x - 7))
# practice[1]
same("practice[1]", 2*(3*x)*5, 30*x)
same("practice[1]", factor(9*x**2 - 30*x + 25), (3*x - 5)**2)
# practice[2]
same("practice[2]", factor(8*x**3 + 27), (2*x + 3)*(4*x**2 - 6*x + 9))
# practice[3]
p = 2*x**4 - 32
same("practice[3]", expand(2*(x**2 + 4)*(x**2 - 4)), p)
same("practice[3]", factor(p), 2*(x**2 + 4)*(x + 2)*(x - 2))
check("practice[3]", solveset(x**2 + 4, x, S.Reals) == S.EmptySet, "x^2+4 has no real roots")
