# content: f5b83e76606d
# a2-rational-asym: Horizontal & Slant Asymptotes; Graphing Rational Functions
from algebra import *

# hero / example
f = (2*x**2 - 2*x - 4)/(x**2 - 9)
same("example", factor(2*x**2 - 2*x - 4), 2*(x - 2)*(x + 1))
same("example", factor(x**2 - 9), (x - 3)*(x + 3))
same("example", holes(f), [])
same("example", domain_excluded(f), [-3, 3])
same("example", vas(f), [-3, 3])
same("example", hasym(f), 2)
same("example", zeros(f), [-1, 2])
same("example", yint(f), Rational(4, 9))
same("example", real_solutions(Eq(f, 2)), {7})
same("example", real_solutions(Eq(-2*x, -14)), {7})
check("example", (f - 2).subs(x, 100) < 0 and ineq(f - 2 < 0).contains(8) and ineq(f - 2 < 0).contains(10**6))
for xv, want in [(-4, Rational(36, 7)), (-2, Rational(-8, 5)), (0, Rational(4, 9)), (Rational(5, 2), Rational(-14, 11)), (4, Rational(20, 7))]:
    same("example", f.subs(x, xv), want)
pos = Union(Interval.open(-oo, -3), Interval.open(-1, 2), Interval.open(3, oo))
neg = Union(Interval.open(-3, -1), Interval.open(2, 3))
same("example", ineq(f > 0), pos)
same("example", ineq(f < 0), neg)
same("example", side(f, -3), (oo, -oo))
same("example", side(f, 3), (-oo, oo))

# formal: degree rule on generic cases
same("formal: n<m", hasym((x + 7)/(x**2 + 1)), 0)
same("formal: n=m", hasym((5*x**2 + x)/(3*x**2 - 2)), Rational(5, 3))
same("formal: n=m+1", slant((x**2 + 1)/(x - 1)), x + 1)
check("formal: n>m+1", hasym((x**3 + 1)/(x - 1)) is None)
check("formal: n>m+1", slant((x**3 + 1)/(x - 1)) is None)

# mistakes
same("mistake 1", hasym((3*x + 1)/(x**2 + 4)), 0)
same("mistake 2", f.subs(x, 7), 2)
same("mistake 3", expand((x - 2)*(x + 5) + 9), x**2 + 3*x - 1)
same("mistake 4", cancel((x**2 - 1)/(x - 1)), x + 1)
same("mistake 4", holes((x**2 - 1)/(x - 1)), [(1, 2)])
same("mistake 4", vas((x**2 - 1)/(x - 1)), [])
same("mistake 4: reduced form is a polynomial", fraction(cancel((x**2 - 1)/(x - 1)))[1], 1)

# practice[0]
p0 = (3*x + 1)/(x**2 + 4)
same("practice[0]", hasym(p0), 0)
same("practice[0]", real_solutions(Eq(p0, 0)), {Rational(-1, 3)})

# practice[1]
same("practice[1]", hasym((6*x**3 - x)/(2*x**3 + 5)), 3)

# practice[2]
p2 = (x**2 + 3*x - 1)/(x - 2)
same("practice[2]", synth([1, 3, -1], 2), ([1, 5], 9))
same("practice[2]", long_div(x**2 + 3*x - 1, x - 2), (x + 5, 9))
same("practice[2]", slant(p2), x + 5)
same("practice[2]", vas(p2), [2])
check("practice[2]", equivalent(p2, x + 5 + 9/(x - 2)))

# practice[3]
p3 = (x**2 - x - 6)/(x - 1)
same("practice[3]", factor(x**2 - x - 6), (x - 3)*(x + 2))
check("practice[3]", equivalent(p3, x - 6/(x - 1)))
same("practice[3]", long_div(x**2 - x - 6, x - 1), (x, -6))
same("practice[3]", vas(p3), [1])
same("practice[3]", slant(p3), x)
check("practice[3]", real_solutions(Eq(p3, x)) in (set(), S.EmptySet))
same("practice[3]", zeros(p3), [-2, 3])
same("practice[3]", yint(p3), 6)
same("practice[3]", ineq(p3 < 0), Union(Interval.open(-oo, -2), Interval.open(1, 3)))
same("practice[3]", ineq(p3 > 0), Union(Interval.open(-2, 1), Interval.open(3, oo)))
