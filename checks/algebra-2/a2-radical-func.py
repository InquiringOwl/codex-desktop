# content: 09e56e06c686
# a2-radical-func: Radical Functions & Their Graphs
from algebra import *

def sols(eq):
    return sorted(simplify(v) for v in real_solutions(eq))

cbrt = lambda v: real_root(v, 3)

# hero: 2 sqrt(x - 3) + 1, domain [3, oo)
same("hero: domain", ineq(x - 3 >= 0), Interval(3, oo))
# plain
same("plain: sqrt of 0, 1, 4, 9", [sqrt(v) for v in (0, 1, 4, 9)], [0, 1, 2, 3])
same("plain: range of sqrt", imageset(Lambda(x, sqrt(x)), Interval(0, oo)), Interval(0, oo))
same("plain: cbrt(-8)", cbrt(-8), -2)
same("plain: (-2)^3", (-2)**3, -8)
r = Symbol('r', nonnegative=True)
same("formal: sqrt inverse of x^2 on x >= 0", sqrt(r**2), r)
check("formal: cbrt inverse of x^3", inverse_ok(x**3, real_root(x, 3), [-8, -1, 0, 2, 27]))
same("formal: x^(1/n)", sqrt(x), x**Rational(1, 2))
# formal: transformed square root a sqrt(x - h) + k, e.g. a = 2, h = 3, k = 1 and a = -1
g = 2*sqrt(x - 3) + 1
same("formal: endpoint", g.subs(x, 3), 1)
same("formal: range a > 0", imageset(Lambda(x, g), Interval(3, oo)), Interval(1, oo))
same("formal: range a < 0", imageset(Lambda(x, -2*sqrt(x - 3) + 1), Interval(3, oo)), Interval(-oo, 1))
# formal: squaring adds -sqrt branch
check("formal: (-sqrt p)^2 = p", expand((-sqrt(x + 3))**2) == x + 3)

# example: f(x) = -sqrt(x + 4) + 2
f = -sqrt(x + 4) + 2
same("example", ineq(x + 4 >= 0), Interval(-4, oo))
same("example", f.subs(x, -4), 2)
par = [(0, 0), (1, 1), (4, 2), (9, 3)]
img = [(xx - 4, -yy + 2) for xx, yy in par]
same("example", img, [(-4, 2), (-3, 1), (0, 0), (5, -1)])
for xx, yy in img:
    same("example", f.subs(x, xx), yy)
same("example", imageset(Lambda(x, f), Interval(-4, oo)), Interval(-oo, 2))
same("example", f.subs(x, 0), 0)
same("example", sols(Eq(f, 0)), [0])
same("example", sols(Eq(sqrt(x + 4), 2)), [0])

# practice[0]
same("practice[0]", ineq(x - 5 >= 0), Interval(5, oo))
same("practice[0]", imageset(Lambda(x, sqrt(x - 5)), Interval(5, oo)), Interval(0, oo))
check("practice[0]", inverse_ok(cbrt(x - 5), x**3 + 5, [-3, 0, 5, 13]))   # one-to-one onto R: domain and range all reals
same("practice[0]", cbrt(-3 - 5), -2)

# practice[1]
f1 = sqrt(6 - 2*x)
same("practice[1]", ineq(6 - 2*x >= 0), Interval(-oo, 3))
same("practice[1]", imageset(Lambda(x, f1), Interval(-oo, 3)), Interval(0, oo))
same("practice[1]", (f1.subs(x, 1), f1.subs(x, -5)), (2, 4))
check("practice[1]", equivalent(f1, sqrt(2) * sqrt(3 - x)))   # sqrt of -(x - 3): reflected in the y-axis, endpoint x = 3
same("practice[1]", f1.subs(x, 3), 0)

# practice[2]: s = sqrt(24 d)
s_ = lambda dd: sqrt(24 * dd)
same("practice[2]", s_(150), 60)
same("practice[2]", 24 * 150, 3600)
same("practice[2]", 72**2, 5184)
same("practice[2]", sols(Eq(s_(x), 72)), [216])

# practice[3]: sqrt(x + 3) = x - 3
same("practice[3]", expand((x - 3)**2), x**2 - 6*x + 9)
same("practice[3]", sols(Eq(x**2 - 7*x + 6, 0)), [1, 6])
same("practice[3]", sols(Eq(sqrt(x + 3), x - 3)), [6])
same("practice[3]", (sqrt(1 + 3), 1 - 3, sqrt(6 + 3), 6 - 3), (2, -2, 3, 3))
same("practice[3]", -sqrt(1 + 3), 1 - 3)

# why: pendulum and skid facts
L_ = Symbol('L', positive=True)
T = 2*pi*sqrt(L_/32)
same("why: T(4L) = 2 T(L)", simplify(T.subs(L_, 4*L_) / T), 2)
v = Symbol('v', positive=True)
same("why: doubling speed quadruples skid", simplify(((2*v)**2/24) / (v**2/24)), 4)
# mistakes
same("mistakes: domain sqrt(x+4)", ineq(x + 4 >= 0), Interval(-4, oo))
same("mistakes: cbrt(-8)", cbrt(-8), -2)
same("mistakes: sqrt((-5)^2)", sqrt((-5)**2), 5)
same("mistakes: sqrt(x^2) = |x|", sqrt(x**2), Abs(x))
