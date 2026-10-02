# content: 7b2dafb3b91c
# a2-transformations: Transformations of Functions
from algebra import *

def img(pt, a=1, b=1, h=0, k=0):
    """Image of (x, y) on a*f(b(x-h))+k, found by solving b(X-h) = x for X (independent of the page's rule)."""
    X = Symbol('X')
    Xs = solve(Eq(b*(X - h), pt[0]), X)[0]
    return (Xs, a*pt[1] + k)

# formal: the point rule (x, y) -> (x/b + h, a*y + k) puts the image on g = a f(b(x - h)) + k
B, H, x0 = symbols("B H x0", nonzero=True)
Xi = x0/B + H
check("formal: point rule", simplify(B*(Xi - H) - x0) == 0)
# formal: equivalent changes
r = Symbol('r', nonnegative=True)
same("formal: sqrt(4x) = 2 sqrt(x)", simplify(sqrt(4*r) - 2*sqrt(r)), 0)
same("formal: (-x)^2 = x^2", expand((-x)**2), x**2)
same("formal: f(2x-6) = f(2(x-3))", factor(2*x - 6), 2*(x - 3))

# example: g(x) = 3 - sqrt(8 - 2x)
g = 3 - sqrt(8 - 2*x)
check("example", equivalent(g, transform(sqrt(x), a=-1, b=-2, h=4, k=3)))
same("example", expand(-2*(x - 4)), 8 - 2*x)
for pt, want in [((0, 0), (4, 3)), ((1, 1), (Rational(7, 2), 2)), ((4, 2), (2, 1))]:
    got = img(pt, a=-1, b=-2, h=4, k=3)
    same("example", got, want)
    same("example", g.subs(x, want[0]), want[1])
same("example", Rational(1, -2) + 4, Rational(7, 2))
same("example", ineq(8 - 2*x >= 0), Interval(-oo, 4))
same("example", imageset(Lambda(x, g), Interval(-oo, 4)), Interval(-oo, 3))
same("example", g.subs(x, 2), 1)

# practice[0]: (x - 2)^2 - 5
check("practice[0]", equivalent((x - 2)**2 - 5, transform(x**2, h=2, k=-5)))
same("practice[0]", img((0, 0), h=2, k=-5), (2, -5))

# practice[1]: -3|x + 1| + 4
g1 = -3*Abs(x + 1) + 4
check("practice[1]", equivalent(g1, transform(Abs(x), a=-3, h=-1, k=4)))
same("practice[1]", img((0, 0), a=-3, h=-1, k=4), (-1, 4))
same("practice[1]", g1.subs(x, 0), 1)

# practice[2]
same("practice[2]", img((2, 8), a=3, b=2, k=-1), (1, 23))
same("practice[2]", img((2, 8), h=-5), (-3, 8))

# practice[3]: 3 - 2/(x + 1)
g3 = 3 - 2/(x + 1)
check("practice[3]", equivalent(g3, transform(1/x, a=-2, h=-1, k=3)))
same("practice[3]", vas(g3), [-1])
same("practice[3]", hasym(g3), 3)
same("practice[3]", domain_excluded(g3), [-1])
check("practice[3]", real_solutions(Eq(g3, 3)) in (set(), S.EmptySet))
same("practice[3]", imageset(Lambda(x, g3), Union(Interval.open(-oo, -1), Interval.open(-1, oo))), Union(Interval.open(-oo, 3), Interval.open(3, oo)))
