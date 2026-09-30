# content: 7a5398a9098d
# a1-functions: Functions, Domain & Range
from sympy.calculus.util import continuous_domain
same("formal", continuous_domain(1/(x - 4), x, S.Reals), Union(Interval.open(-oo, 4), Interval.open(4, oo)))
same("formal", continuous_domain(sqrt(x + 3), x, S.Reals), Interval(-3, oo))

# example: V(t) = 60 - 4t
V = 60 - 4*t
same("example", V.subs(t, 6), 36)
solves("example", Eq(V, 20), t, {10})
solves("example", Eq(V, 0), t, {15})
D = Interval(0, 15)
same("example", D, Interval(0, 15))
same("example", imageset(Lambda(t, V), D), Interval(0, 60))

# practice[0]
same("practice[0]", (2*x**2 - 3*x + 1).subs(x, -2), 15)
same("practice[0]", [2*(-2)**2, -3*(-2)], [8, 6])
# practice[1]
same("practice[1]", continuous_domain(1/(x - 4), x, S.Reals), Union(Interval.open(-oo, 4), Interval.open(4, oo)))
same("practice[1]", Complement(S.Reals, FiniteSet(4)), Union(Interval.open(-oo, 4), Interval.open(4, oo)))
# practice[2]
same("practice[2]", continuous_domain(sqrt(x + 3), x, S.Reals), Interval(-3, oo))
same("practice[2]", imageset(Lambda(x, sqrt(x + 3)), Interval(-3, oo)), Interval(0, oo))
# practice[3]
hh = 5 - 2*x
same("practice[3]", [hh.subs(x, -1), hh.subs(x, 4)], [7, -3])
same("practice[3]", imageset(Lambda(x, hh), Interval(-1, 4)), Interval(-3, 7))
solves("practice[3]", Eq(hh, 0), x, {2.5})
check("practice[3]", Interval(-1, 4).contains(Rational(5, 2)) == True, "2.5 in domain")
