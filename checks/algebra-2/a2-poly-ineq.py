# content: 127f7358b913
# a2-poly-ineq: Polynomial Inequalities
from algebra import *

O, Cl = Interval.open, Interval
def LO(a, b): return Interval.Lopen(a, b)
def RO(a, b): return Interval.Ropen(a, b)

# hero / plain
H = (x + 2)*(x - 3)
same("hero", expand(H), x**2 - x - 6)
same("hero", ineq(H > 0), Union(O(-oo, -2), O(3, oo)))
same("plain", [H.subs(x, v) for v in (-3, 0, 4)], [6, -6, 6])
same("plain", real_solutions(Eq(H, 0)), {-2, 3})

# formal: quadratic rule (a > 0, two zeros) on a sample, and the D < 0 example
r1, r2 = Rational(-3, 2), 4
G = 2*(x - r1)*(x - r2)
same("formal", ineq(G < 0), O(r1, r2))
same("formal", ineq(G > 0), Union(O(-oo, r1), O(r2, oo)))
D = x**2 + 2*x + 5
same("formal", discriminant(D, x), -16)
same("formal", ineq(D > 0), S.Reals)
same("formal", ineq(D < 0), S.EmptySet)
# formal: odd multiplicity changes sign, even keeps it
check("formal", sign(((x - 1)**3).subs(x, 0)) != sign(((x - 1)**3).subs(x, 2)), "odd multiplicity flips")
check("formal", sign(((x - 1)**2).subs(x, 0)) == sign(((x - 1)**2).subs(x, 2)), "even multiplicity keeps sign")

# example
E = x**3 - x**2 - 4*x + 4
same("example", expand((x**3 + 4) - (x**2 + 4*x)), E)
same("example", expand(x**2*(x - 1) - 4*(x - 1) - E), 0)
same("example", expand((x + 2)*(x - 1)*(x - 2) - E), 0)
same("example", real_solutions(Eq(E, 0)), {-2, 1, 2})
check("example", all(m == 1 for m in roots_mult(E).values()), "all simple zeros")
same("example", [E.subs(x, v) for v in (-3, 0, Rational(3, 2), 3)], [-20, 4, Rational(-7, 8), 10])
near("example", E.subs(x, Rational(3, 2)), -0.875)
same("example", ineq(x**3 + 4 <= x**2 + 4*x), Union(Interval(-oo, -2), Interval(1, 2)))

# mistakes
same("mistakes", ineq(x**2 > 3*x), Union(O(-oo, 0), O(3, oo)))
same("mistakes", ineq(x**2 >= 9), Union(Interval(-oo, -3), Interval(3, oo)))
M3 = x*(x - 2)**2
same("mistakes", [sign(M3.subs(x, v)) for v in (-1, 1, 3)], [-1, 1, 1])
same("mistakes", ineq(M3 > 0), Union(O(0, 2), O(2, oo)))

# practice
same("practice[0]", expand((x + 3)*(x - 4)), x**2 - x - 12)
same("practice[0]", ineq(x**2 - x - 12 < 0), O(-3, 4))
same("practice[1]", expand((2*x - 1)*(x + 3)), 2*x**2 + 5*x - 3)
same("practice[1]", ineq(2*x**2 + 5*x >= 3), Union(Interval(-oo, -3), Interval(Rational(1, 2), oo)))
same("practice[2]", expand((x - 2)**2), x**2 - 4*x + 4)
same("practice[2]", ineq(x**2 + 4 > 4*x), Union(O(-oo, 2), O(2, oo)))
P4 = x**4 - 5*x**2 + 4
same("practice[3]", expand((x + 2)*(x + 1)*(x - 1)*(x - 2) - P4), 0)
same("practice[3]", expand((x**2 - 1)*(x**2 - 4) - P4), 0)
same("practice[3]", [P4.subs(x, v) for v in (-3, Rational(-3, 2), 0, Rational(3, 2), 3)], [40, Rational(-35, 16), 4, Rational(-35, 16), 40])
near("practice[3]", Rational(-35, 16), -2.1875)
same("practice[3]", ineq(P4 > 0), Union(O(-oo, -2), O(-1, 1), O(2, oo)))
