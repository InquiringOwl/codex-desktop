# content: 7414b5317898
# a2-quad-form-eq: Equations in Quadratic Form
from algebra import *
R = Rational
u = symbols('u', real=True)

# hero
same("hero", expand((x**4 - 5*x**2 + 4).subs(x**2, u)), u**2 - 5*u + 4)

# formal display: each equation, its u-roots and the real solution set
same("formal", real_solutions(Eq(u**2 - 5*u + 4, 0), u), {1, 4})
same("formal", real_solutions(Eq(x**4 - 5*x**2 + 4, 0), x), {-2, -1, 1, 2})
same("formal", real_solutions(Eq(u**2 + 3*u - 10, 0), u), {2, -5})
same("formal", real_solutions(Eq((x - 2)**2 + 3*(x - 2) - 10, 0), x), {4, -3})
same("formal", real_solutions(Eq(u**2 - 7*u + 10, 0), u), {2, 5})
same("formal", real_solutions(Eq(x - 7*sqrt(x) + 10, 0), x), {4, 25})
same("formal", real_solutions(Eq(u**2 + u - 6, 0), u), {2, -3})
same("formal", {r**3 for r in (2, -3)}, {8, -27})
# real cube root: x^(1/3) is the real cube root, so x = −27 works
cb = lambda v: real_root(v, 3)
check("formal", all(simplify(cb(v)**2 + cb(v) - 6) == 0 for v in (8, -27)), "8 and −27 solve x^(2/3) + x^(1/3) − 6 = 0")
same("formal", real_solutions(Eq(u**2 - u - 6, 0), u), {3, -2})
same("formal", real_solutions(Eq(x**-2 - x**-1 - 6, 0), x), {R(1, 3), R(-1, 2)})

# example: x⁴ − 3x² − 4 = 0
same("example", factor(u**2 - 3*u - 4), (u - 4)*(u + 1))
same("example", real_solutions(Eq(x**2, 4), x), {-2, 2})
check("example", real_solutions(Eq(x**2, -1), x) == S.EmptySet, "x² = −1 has no real solution")
same("example", complex_solutions(x**2 + 1), {-I, I})
same("example", 16 - 12 - 4, 0)
same("example", real_solutions(Eq(x**4 - 3*x**2 - 4, 0), x), {-2, 2})

# mistakes
same("mistakes", real_solutions(Eq(x - sqrt(x) - 6, 0), x), {9})
same("mistakes", 4 - 2 - 6, -4)
same("mistakes", (-3)**3, -27)

# practice[0]
same("practice[0]", factor(u**2 - 13*u + 36), (u - 4)*(u - 9))
same("practice[0]", real_solutions(Eq(x**4 - 13*x**2 + 36, 0), x), {-3, -2, 2, 3})
# practice[1]
same("practice[1]", factor(u**2 - 3*u - 4), (u - 4)*(u + 1))
same("practice[1]", real_solutions(Eq(x - 3*sqrt(x) - 4, 0), x), {16})
same("practice[1]", 16 - 12 - 4, 0)
# practice[2]
same("practice[2]", factor(2*u**2 + u - 1), (2*u - 1)*(u + 1))
same("practice[2]", real_solutions(Eq(2*x**-2 + x**-1 - 1, 0), x), {-1, 2})
# practice[3]
same("practice[3]", factor(u**2 - 11*u + 24), (u - 3)*(u - 8))
same("practice[3]", factor(x**2 - 2*x - 3), (x - 3)*(x + 1))
same("practice[3]", factor(x**2 - 2*x - 8), (x - 4)*(x + 2))
same("practice[3]", real_solutions(Eq((x**2 - 2*x)**2 - 11*(x**2 - 2*x) + 24, 0), x), {-2, -1, 3, 4})

# lab worked list: every preset's real solution set
same("lab", real_solutions(Eq(2*x**4 - 7*x**2 + 3, 0), x), {-sqrt(3), -sqrt(2)/2, sqrt(2)/2, sqrt(3)})
