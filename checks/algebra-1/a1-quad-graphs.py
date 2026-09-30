# content: b37536986394
# a1-quad-graphs: Graphing Quadratic Functions
from sympy.calculus.util import function_range

# example: h = -0.5x^2 + 4x + 1
H = -Rational(1, 2)*x**2 + 4*x + 1
xv = -Rational(4) / (2*Rational(-1, 2))
same("example", xv, 4)
same("example", solve(diff(H, x), x)[0], 4)
same("example", H.subs(x, 4), 9)
same("example", H.subs(x, 0), 1)
same("example", expand(-2*H), x**2 - 8*x - 2)
solves("example", Eq(H, 0), x, {4 + 3*sqrt(2), 4 - 3*sqrt(2)})
same("example", discriminant(x**2 - 8*x - 2, x), 72)
same("example", (8 + sqrt(72))/2, 4 + 3*sqrt(2))
check("example", abs(N(4 + 3*sqrt(2)) - 8.24) < 0.005, "landing ~ 8.24")
check("example", N(4 - 3*sqrt(2)) < 0, "other root is behind nozzle")

# practice[0]
f0 = 2*(x - 3)**2 - 5
same("practice[0]", solve(diff(f0, x), x)[0], 3)
same("practice[0]", f0.subs(x, 3), -5)
check("practice[0]", Poly(f0, x).LC() > 0, "opens up")
same("practice[0]", function_range(f0, x, S.Reals), Interval(-5, oo))

# practice[1]
f1 = x**2 - 6*x + 5
same("practice[1]", solve(diff(f1, x), x)[0], 3)
same("practice[1]", f1.subs(x, 3), -4)
same("practice[1]", f1.subs(x, 0), 5)
same("practice[1]", factor(f1), (x - 1)*(x - 5))
solves("practice[1]", Eq(f1, 0), x, {1, 5})

# practice[2]
f2 = x**2 + 4*x + 7
same("practice[2]", expand((x + 2)**2 + 3), f2)
same("practice[2]", minimum(f2, x, S.Reals), 3)
same("practice[2]", discriminant(f2, x), -12)
solves("practice[2]", Eq(f2, 0), x, S.EmptySet)

# practice[3]: vertex (1,-8), through (3,0)
av = solve(Eq(a*(3 - 1)**2 - 8, 0), a)
same("practice[3]", av, [2])
same("practice[3]", expand(2*(x - 1)**2 - 8), 2*x**2 - 4*x - 6)
