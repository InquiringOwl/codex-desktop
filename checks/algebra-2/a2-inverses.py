# content: da38a6a3694f
# a2-inverses: Inverse Functions
from algebra import *

# plain / formal: f = 2x - 3
f = 2*x - 3
finv = inverse(f)
check("plain: inverse of 2x - 3", equivalent(finv, (x + 3)/2))
same("plain: f(4)", f.subs(x, 4), 5)
same("plain: f^-1(5)", finv.subs(x, 5), 4)
same("formal: 1/f(5)", 1/f.subs(x, 5), Rational(1, 7))
same("plain: squaring 3 and -3", (3**2, (-3)**2), (9, 9))
# formal: x^2 on x >= 0 has inverse sqrt(x)
r = Symbol('r', nonnegative=True)
same("formal: sqrt(r^2) = r for r >= 0", sqrt(r**2), r)
same("formal: (sqrt r)^2 = r", sqrt(r)**2, r)

# example: (x + 1)/(x - 2)
fe = (x + 1)/(x - 2)
ge = (2*x + 1)/(x - 1)
check("example", equivalent(inverse(fe), ge))
check("example", inverse_ok(fe, ge, [0, 3, -5, Rational(1, 2), 10]))
same("example", simplify(compose(fe, ge)), x)
same("example", simplify(compose(ge, fe)), x)
same("example", expand((2*x + 1) + (x - 1)), 3*x)
same("example", expand((2*x + 1) - 2*(x - 1)), 3)
same("example", vas(fe), [2]); same("example", hasym(fe), 1)
same("example", vas(ge), [1]); same("example", hasym(ge), 2)
check("example", real_solutions(Eq(fe, 1)) in (set(), S.EmptySet))
check("example", real_solutions(Eq(ge, 2)) in (set(), S.EmptySet))
same("example", fe.subs(x, 3), 4)
same("example", ge.subs(x, 4), 3)
same("example", Rational(9, 3), 3)
# one-to-one check of f via derivative sign
check("example", simplify(diff(fe, x)) == -3/(x - 2)**2)

# practice[0]
same("practice[0]", f.subs(x, 4), 5)
same("practice[0]", ((x + 3)/2).subs(x, 5), 4)

# practice[1]: x^2 - 4
f1 = x**2 - 4
same("practice[1]", (f1.subs(x, -1), f1.subs(x, 1)), (-3, -3))
g1 = sqrt(x + 4)
check("practice[1]", inverse_ok(f1, g1, [0, 1, 5, 12]))
check("practice[1]", simplify(g1.subs(x, r**2 - 4) - r) == 0)
same("practice[1]", ineq(x + 4 >= 0), Interval(-4, oo))
same("practice[1]", imageset(Lambda(x, f1), Interval(0, oo)), Interval(-4, oo))

# practice[2]: cbrt(x - 1) + 2
f2 = real_root(x - 1, 3) + 2
g2 = (x - 2)**3 + 1
check("practice[2]", inverse_ok(f2, g2, [9, 0, 2, -7, 28]))
same("practice[2]", f2.subs(x, 9), 4)
same("practice[2]", g2.subs(x, 4), 9)
same("practice[2]", expand(g2.subs(x, f2)), x)

# practice[3]: sqrt(2x - 6)
f3 = sqrt(2*x - 6)
g3 = (x**2 + 6)/2
same("practice[3]", ineq(2*x - 6 >= 0), Interval(3, oo))
same("practice[3]", imageset(Lambda(x, f3), Interval(3, oo)), Interval(0, oo))
check("practice[3]", simplify(f3.subs(x, g3.subs(x, r)) - r) == 0)
check("practice[3]", inverse_ok(f3, g3, [3, 5, Rational(7, 2), 21]))
same("practice[3]", imageset(Lambda(x, g3), Interval(0, oo)), Interval(3, oo))
# mistakes: sqrt((-3)^2) = 3
same("mistakes: sqrt((-3)^2)", sqrt((-3)**2), 3)
