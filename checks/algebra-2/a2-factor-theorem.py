# content: eb907a85a7ce
# a2-factor-theorem: Factor Theorem & Rational Root Theorem
from algebra import *

P = 2*x**3 - 3*x**2 - 11*x + 6
R = Rational
# hero / formal
same("formal", P.subs(x, 3), 0)
same("formal", expand((x - 3)*(2*x**2 + 3*x - 2)), P)
same("formal", candidates(x**2 - 2), [-2, -1, 1, 2])
check("formal", all((x**2 - 2).subs(x, c) != 0 for c in [-2, -1, 1, 2]), "x^2 - 2 has no rational zeros")
# Descartes: sign changes of P(x) and P(-x)
def changes(e):
    cs = [c for c in Poly(e, x).all_coeffs() if c != 0]
    return sum(1 for u, v in zip(cs, cs[1:]) if u*v < 0)
same("formal", expand(P.subs(x, -x)), -2*x**3 - 3*x**2 + 11*x + 6)
same("formal", changes(P), 2)
same("formal", changes(P.subs(x, -x)), 1)
pos = [r for r in real_solutions(Eq(P, 0)) if r > 0]; neg = [r for r in real_solutions(Eq(P, 0)) if r < 0]
check("formal", len(pos) in (2, 0) and len(neg) == 1, f"{len(pos)} positive, {len(neg)} negative")
# careers: box volume equation has the rational root 3
same("careers", (x*(20 - 2*x)*(30 - 2*x)).subs(x, 3), 1008)

# example
same("example", candidates(P), sorted({s*R(p, q) for p in (1, 2, 3, 6) for q in (1, 2) for s in (1, -1)}))
same("example", len(candidates(P)), 12)
same("example", P.subs(x, 1), -6)
same("example", [2, -3, -11, 6], [2, -3, -11, 6])
same("example", synth([2, -3, -11, 6], 3), ([2, 3, -2], 0))
same("example", expand((2*x - 1)*(x + 2)), 2*x**2 + 3*x - 2)
same("example", expand((x - 3)*(2*x - 1)*(x + 2)), P)
same("example", real_solutions(Eq(P, 0)), {3, R(1, 2), -2})
check("example", all(r in candidates(P) for r in (3, R(1, 2), -2)), "zeros are candidates")

# mistakes
same("mistakes", expand(2*(x - 3)*(x - R(1, 2))*(x + 2)), P)
check("mistakes", expand((x - 3)*(x - R(1, 2))*(x + 2)) != P, "monic product differs")

# practice[0]
P0 = x**3 + 3*x**2 - 4
same("practice[0]", P0.subs(x, -2), 0)
same("practice[0]", synth([1, 3, 0, -4], -2), ([1, 1, -2], 0))
same("practice[0]", expand((x + 2)*(x - 1)), x**2 + x - 2)
same("practice[0]", factor(P0), (x - 1)*(x + 2)**2)
# practice[1]
P1 = 3*x**3 + 2*x**2 - 7*x + 2
same("practice[1]", candidates(P1), sorted([1, -1, 2, -2, R(1, 3), R(-1, 3), R(2, 3), R(-2, 3)]))
same("practice[1]", P1.subs(x, 1), 0)
# practice[2]
P2 = 2*x**3 + x**2 - 7*x - 6
same("practice[2]", candidates(P2), candidates(P))
same("practice[2]", P2.subs(x, 2), 0)
same("practice[2]", synth([2, 1, -7, -6], 2), ([2, 5, 3], 0))
same("practice[2]", expand((2*x + 3)*(x + 1)), 2*x**2 + 5*x + 3)
same("practice[2]", expand((x - 2)*(x + 1)*(2*x + 3)), P2)
# practice[3]
P3 = x**4 + x**3 - 7*x**2 - 5*x + 10
same("practice[3]", candidates(P3), [-10, -5, -2, -1, 1, 2, 5, 10])
same("practice[3]", P3.subs(x, 1), 0)
same("practice[3]", synth([1, 1, -7, -5, 10], 1), ([1, 2, -5, -10], 0))
same("practice[3]", synth([1, 2, -5, -10], -2), ([1, 0, -5], 0))
same("practice[3]", expand((x - 1)*(x + 2)*(x**2 - 5)), P3)
same("practice[3]", real_solutions(Eq(P3, 0)), {1, -2, sqrt(5), -sqrt(5)})
