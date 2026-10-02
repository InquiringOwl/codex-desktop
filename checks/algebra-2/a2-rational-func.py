# content: 1d989c47aa9f
# a2-rational-func: Rational Functions: Domain, Holes & Vertical Asymptotes
from algebra import *

# hero / example: f = (x^2 - 9)/(x^2 - 2x - 3)
f = (x**2 - 9)/(x**2 - 2*x - 3)
same("example", factor(x**2 - 9), (x - 3)*(x + 3))
same("example", factor(x**2 - 2*x - 3), (x - 3)*(x + 1))
same("example", domain_excluded(f), [-1, 3])
dom = Union(Interval.open(-oo, -1), Interval.open(-1, 3), Interval.open(3, oo))
same("example", S.Reals - FiniteSet(*domain_excluded(f)), dom)
same("example", cancel(f), (x + 3)/(x + 1))
same("example", holes(f), [(3, Rational(3, 2))])
same("example", vas(f), [-1])
same("example", ((x + 3)/(x + 1)).subs(x, Rational(-101, 100)), -199)
same("example", ((x + 3)/(x + 1)).subs(x, Rational(-99, 100)), 201)
same("example", side(f, -1), (-oo, oo))
same("example", zeros(f), [-3])
same("example", yint(f), 3)
# hero factors
check("hero", equivalent((x - 3)*(x + 3)/((x - 3)*(x + 1)), f))

# formal: reciprocal parents
same("formal: 1/x VA", vas(1/x), [0])
same("formal: 1/x HA", hasym(1/x), 0)
same("formal: 1/x^2 VA", vas(1/x**2), [0])
same("formal: 1/x^2 HA", hasym(1/x**2), 0)
same("formal: 1/x^2 both sides up", side(1/x**2, 0), (oo, oo))
same("formal: 1/x sides", side(1/x, 0), (-oo, oo))
same("formal: range 1/x", imageset(Lambda(x, 1/x), Union(Interval.open(-oo, 0), Interval.open(0, oo))), Union(Interval.open(-oo, 0), Interval.open(0, oo)))
same("formal: range 1/x^2", imageset(Lambda(x, 1/x**2), Interval.open(0, oo)), Interval.open(0, oo))
A, H, K = symbols("A H K", nonzero=True)
g_t = A/(x - H) + K
same("formal: a/(x-h)+k VA", solve(fraction(together(g_t))[1], x), [H])
same("formal: a/(x-h)+k HA", (limit(g_t, x, oo), limit(g_t, x, -oo)), (K, K))

# mistakes
same("mistake 2", cancel((x - 2)/(x - 2)**2), 1/(x - 2))
same("mistake 2", vas((x - 2)/(x - 2)**2), [2])
same("mistake 2", holes((x - 2)/(x - 2)**2), [])

# practice[0]
f0 = (x + 5)/(x**2 - 16)
same("practice[0]", domain_excluded(f0), [-4, 4])
same("practice[0]", S.Reals - FiniteSet(-4, 4), Union(Interval.open(-oo, -4), Interval.open(-4, 4), Interval.open(4, oo)))

# practice[1]
g = (x**2 + 2*x)/(x**2 - x - 6)
same("practice[1]", factor(x**2 - x - 6), (x - 3)*(x + 2))
same("practice[1]", cancel(g), x/(x - 3))
same("practice[1]", holes(g), [(-2, Rational(2, 5))])
same("practice[1]", Rational(-2, -5), Rational(2, 5))
same("practice[1]", vas(g), [3])

# practice[2]
h = 2/(x + 3) - 1
check("practice[2]", equivalent(h, transform(1/x, a=2, h=-3, k=-1)))
same("practice[2]", vas(h), [-3])
same("practice[2]", hasym(h), -1)
same("practice[2]", domain_excluded(h), [-3])
same("practice[2]", imageset(Lambda(x, h), Union(Interval.open(-oo, -3), Interval.open(-3, oo))), Union(Interval.open(-oo, -1), Interval.open(-1, oo)))

# practice[3]
r = (x - 1)/((x + 2)**2*(x - 4))
same("practice[3]", holes(r), [])
same("practice[3]", vas(r), [-2, 4])
same("practice[3]", ((x - 1)/(x - 4)).subs(x, -2), Rational(1, 2))
same("practice[3]", side(r, -2), (oo, oo))
same("practice[3]", side(r, 4), (-oo, oo))
