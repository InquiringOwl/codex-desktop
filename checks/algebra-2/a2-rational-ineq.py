# content: 788a995f565d
# a2-rational-ineq: Rational Inequalities
from algebra import *

O = Interval.open

# hero / plain
H = (x - 1)/(x + 2)
same("hero", zeros(H), [1]); same("hero", domain_excluded(H), [-2])
same("hero", ineq(H >= 0), Union(O(-oo, -2), Interval(1, oo)))
same("plain", [H.subs(x, v) for v in (-3, 0, 2)], [4, Rational(-1, 2), Rational(1, 4)])

# formal: P/Q > 0 iff P*Q > 0 with Q != 0, on samples; denominator zeros excluded even with >=
for Pp, Qq in [(x - 1, x + 2), (x + 3, (x - 1)*(x + 1)), (5 - x, x - 1)]:
    same("formal", ineq(Pp/Qq > 0), ineq(Pp*Qq > 0) - FiniteSet(*domain_excluded(Pp/Qq)))
    check("formal", all(e not in ineq(Pp/Qq >= 0) for e in domain_excluded(Pp/Qq)), "excluded values never in the set")
# multiplying by Q reverses the inequality where Q < 0 (sample: x - 1 at x = 0)
check("formal", (x - 1).subs(x, 0) < 0, "Q negative on part of the line")

# example
E = (x + 3)/(x - 1)
same("example", simplify(E - 2 - (5 - x)/(x - 1)), 0)
same("example", zeros((5 - x)/(x - 1)), [5]); same("example", domain_excluded((5 - x)/(x - 1)), [1])
R = (5 - x)/(x - 1)
same("example", [R.subs(x, v) for v in (0, 3, 6)], [-5, 1, Rational(-1, 5)])
same("example", R.subs(x, 5), 0)
same("example", ineq(E <= 2), Union(O(-oo, 1), Interval(5, oo)))
# the wrong cross-multiplied answer
same("example", ineq(x + 3 <= 2*(x - 1)), Interval(5, oo))

# mistakes
same("mistakes", ineq((x + 2)/(x - 3) >= 0), Union(Interval(-oo, -2), O(3, oo)))
same("mistakes", ineq(x + 1 > 0), O(-1, oo))
same("mistakes", domain_excluded((x**2 - 1)/(x - 1)), [1])
same("mistakes", holes((x**2 - 1)/(x - 1)), [(1, 2)])
same("mistakes", ineq((x**2 - 1)/(x - 1) > 0), Union(O(-1, 1), O(1, oo)))

# practice
P0 = (x - 4)/(x + 1)
same("practice[0]", [sign(P0.subs(x, v)) for v in (-2, 0, 5)], [1, -1, 1])
same("practice[0]", ineq(P0 < 0), O(-1, 4))
P1 = (x + 2)/(x - 3)
same("practice[1]", [sign(P1.subs(x, v)) for v in (-3, 0, 4)], [1, -1, 1])
same("practice[1]", ineq(P1 >= 0), Union(Interval(-oo, -2), O(3, oo)))
P2 = (6 - 2*x)/(x - 2)
same("practice[2]", simplify(x/(x - 2) - 3 - P2), 0)
same("practice[2]", simplify((x - 3*(x - 2)) - (6 - 2*x)), 0)
same("practice[2]", [P2.subs(x, v) for v in (0, Rational(5, 2), 4)], [-3, 2, -1])
same("practice[2]", ineq(x/(x - 2) > 3), O(2, 3))
P3 = (x + 3)/((x - 1)*(x + 1))
same("practice[3]", simplify(2/(x - 1) - 1/(x + 1) - P3), 0)
same("practice[3]", expand(2*(x + 1) - (x - 1)), x + 3)
same("practice[3]", [sign(P3.subs(x, v)) for v in (-4, -2, 0, 2)], [-1, 1, -1, 1])
same("practice[3]", ineq(2/(x - 1) >= 1/(x + 1)), Union(Interval.Ropen(-3, -1), O(1, oo)))
