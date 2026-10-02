# content: 90a9cc52ae9a
# a2-zeros-mult: Zeros, Multiplicity & Graphing Polynomials
from algebra import *

def crosses(f, c, eps=Rational(1, 1000)):
    """Graph crosses the axis at c: f changes sign there."""
    return sign(f.subs(x, c - eps)) * sign(f.subs(x, c + eps)) < 0

# hero / plain
Hh = (x + 2)**2*(x - 1)
check("hero", dict(roots_mult(Hh)) == {-2: 2, 1: 1}, "zeros with multiplicity")
check("hero", not crosses(Hh, -2) and crosses(Hh, 1), "touches at -2, crosses at 1")
# formal: IVT example
G = x**3 - 2*x - 5
same("formal", G.subs(x, 2), -1); same("formal", G.subs(x, 3), 16)
r = [s for s in real_solutions(Eq(G, 0))]
check("formal", len(r) == 1 and 2 < r[0] < 3, "one real zero, between 2 and 3")
near("formal", r[0], 2.09)

# example
F = -(x - 1)**2*(x + 2)**3
check("example", dict(roots_mult(F)) == {1: 2, -2: 3}, "zeros with multiplicity")
same("example", (Poly(F, x).degree(), Poly(F, x).LC()), (5, -1))
same("example", ends(F), (oo, -oo))
same("example", yint(F), -8)
check("example", crosses(F, -2) and not crosses(F, 1), "crosses at -2, touches at 1")
same("example", [F.subs(x, v) for v in (-3, 0, 2)], [16, -8, -64])
check("example", diff(F, x).subs(x, -2) == 0 and diff(F, x, 2).subs(x, -2) == 0, "flattens at -2 (m = 3)")

# mistakes
same("mistakes", zeros(x + 3), [-3])
X2 = x*(x - 2)**2
check("mistakes", not crosses(X2, 2) and X2.subs(x, 1) > 0 and X2.subs(x, 3) > 0, "touches at 2, positive both sides")
same("mistakes", ((x + 1)*(x - 3)).subs(x, 0), -3)
same("mistakes", solve(Eq(-3*a, 6), a), [-2])
same("mistakes", [(x**2 - 1).subs(x, v) for v in (-2, 2)], [3, 3])
same("mistakes", real_solutions(Eq(x**2 - 1, 0)), {-1, 1})

# practice[0]
P0 = x**2*(x - 4)**3*(x + 1)
check("practice[0]", dict(roots_mult(P0)) == {0: 2, 4: 3, -1: 1}, "zeros with multiplicity")
check("practice[0]", not crosses(P0, 0) and crosses(P0, 4) and crosses(P0, -1), "touch, cross, cross")
same("practice[0]", Poly(P0, x).degree(), 6)
# practice[1]
P1 = -2*(x - 1)*(x + 3)**2
same("practice[1]", yint(P1), 18)
same("practice[1]", (Poly(P1, x).degree(), Poly(P1, x).LC()), (3, -2))
same("practice[1]", ends(P1), (oo, -oo))
# practice[2]
sol = solve(Eq((a*(x + 1)**2*(x - 3)).subs(x, 0), 6), a)
same("practice[2]", sol, [-2])
P2 = -2*(x + 1)**2*(x - 3)
same("practice[2]", expand(P2), -2*x**3 + 2*x**2 + 10*x + 6)
check("practice[2]", dict(roots_mult(P2)) == {-1: 2, 3: 1}, "zeros with multiplicity")
check("practice[2]", not crosses(P2, -1) and crosses(P2, 3), "touches at -1, crosses at 3")
same("practice[2]", yint(P2), 6)
# practice[3]
P3 = x**4 - 3*x - 1
same("practice[3]", [P3.subs(x, v) for v in (1, 2, -1, 0)], [-3, 9, 3, -1])
rs = sorted(N(s) for s in Poly(P3, x).nroots() if abs(im(s)) < 1e-12)
check("practice[3]", any(1 < v < 2 for v in rs) and any(-1 < v < 0 for v in rs), f"real zeros {rs}")
