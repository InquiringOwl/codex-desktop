# content: e4415c3db9ce
# a2-func-ops: Function Operations & Composition
from algebra import *

# plain: a $10 coupon before or after an 8% tax gives different totals
p = Symbol('p', positive=True)
check("plain: coupon order matters", simplify((p - 10)*Rational(108, 100) - (p*Rational(108, 100) - 10)) != 0)

# formal: x^2 and x + 1 in both orders
same("formal: f(g(x))", expand(compose(x**2, x + 1)), x**2 + 2*x + 1)
same("formal: g(f(x))", compose(x + 1, x**2), x**2 + 1)
# formal: decomposition
same("formal: decompose", compose(x**5, 3*x - 1), (3*x - 1)**5)

# example: f = sqrt(x - 1), g = x^2 - 4
f = sqrt(x - 1); g = x**2 - 4
same("example", g.subs(x, 3), 5)
same("example", f.subs(x, 5), 2)
same("example", f.subs(x, 3), sqrt(2))
same("example", g.subs(x, sqrt(2)), -2)
fg = compose(f, g); gf = compose(g, f)
same("example", fg.subs(x, 3), 2)
same("example", simplify(gf.subs(x, 3)), -2)
check("example", equivalent(fg, sqrt(x**2 - 5)))
same("example", ineq(x**2 - 5 >= 0), Union(Interval(-oo, -sqrt(5)), Interval(sqrt(5), oo)))
same("example", ineq(x**2 - 4 >= 1), Union(Interval(-oo, -sqrt(5)), Interval(sqrt(5), oo)))
same("example", simplify(gf.subs(x, t**2 + 1)), (t**2 + 1) - 5)
same("example", ineq(x - 1 >= 0), Interval(1, oo))

# practice[0]
f0 = 2*x + 1; g0 = x**2 - 3
same("practice[0]", expand(f0 + g0), x**2 + 2*x - 2)
same("practice[0]", f0.subs(x, 2), 5)
same("practice[0]", g0.subs(x, 2), 1)
same("practice[0]", (f0*g0).subs(x, 2), 5)

# practice[1]: sqrt(x)/(x - 4)
q = sqrt(x)/(x - 4)
same("practice[1]", Intersection(ineq(x >= 0), Complement(S.Reals, FiniteSet(*real_solutions(Eq(x - 4, 0))))), Union(Interval.Ropen(0, 4), Interval.open(4, oo)))
check("practice[1]", domain_excluded(q) == [4])

# practice[2]: f = 1/(x - 2), g = 3x
f2 = 1/(x - 2); g2 = 3*x
check("practice[2]", equivalent(compose(f2, g2), 1/(3*x - 2)))
same("practice[2]", domain_excluded(compose(f2, g2)), [Rational(2, 3)])
check("practice[2]", equivalent(compose(g2, f2), 3/(x - 2)))
same("practice[2]", domain_excluded(compose(g2, f2)), [2])

# practice[3]: f = x^2, f(g(x)) = 4x^2 - 12x + 9, g linear
m, c = symbols('m c')
sols = solve(Poly(expand((m*x + c)**2 - (4*x**2 - 12*x + 9)), x).coeffs(), [m, c], dict=True)
same("practice[3]", {(s[m], s[c]) for s in sols}, {(2, -3), (-2, 3)})
same("practice[3]", factor(4*x**2 - 12*x + 9), (2*x - 3)**2)

# mistakes: f = 2x, g = x + 3 at 0
same("mistakes: f(g(0))", compose(2*x, x + 3).subs(x, 0), 6)
same("mistakes: g(f(0))", compose(x + 3, 2*x).subs(x, 0), 3)
