# content: 07813086e059
# g-proportionality: Triangle Proportionality & Angle Bisector Theorem
from sympy import Point, Line, Segment, Triangle
# formal: a parallel through D at fraction t splits both sides in ratio t:(1-t); midsegment half
A, B, C = Point(0, 0), Point(9, 1), Point(3, 7)
t_ = Rational(2, 7)
D, E = A + (B - A) * t_, A + (C - A) * t_
check("formal", Line(D, E).is_parallel(Line(B, C)), "DE parallel BC")
same("formal", simplify(A.distance(D) / D.distance(B) - A.distance(E) / E.distance(C)), 0)
M, N = A + (B - A) / 2, A + (C - A) / 2
same("formal", simplify(M.distance(N) / B.distance(C)), Rational(1, 2))
# example
EC = Rational(20, 10) * Rational(27, 10) / Rational(18, 10)
same("example", EC, 3); same("example", Rational(18, 27), Rational(2, 3))
AB = Rational(18, 10) + Rational(27, 10); same("example", AB, Rational(45, 10))
DE = 8 * Rational(18, 10) / AB; same("example", DE, Rational(32, 10))
same("example", [Rational(2, 5), DE / 8, Rational(18, 10) / AB], [Rational(4, 10)] * 3)
# practice[0]
x_ = symbols('x_')
solves("practice[0]", Eq(8*x_ - 6, 2*(3*x_ + 1)), x_, {4})
same("practice[0]", [3*4 + 1, 8*4 - 6], [13, 26])
# practice[1]
same("practice[1]", [95 * Rational(2, 5), 95 * Rational(3, 5)], [38, 57]); same("practice[1]", Rational(32, 48), Rational(2, 3))
same("practice[1]", Rational(38, 57), Rational(32, 48))
# practice[2]: build the triangle and intersect the bisector
Ap = Point(0, 0); Bp = Point(10, 0)
# C with AC = 6, BC = 12: x^2+y^2=36, (x-10)^2+y^2=144 -> x = -0.4
cx = Rational(36 + 100 - 144, 20); cy = sqrt(36 - cx**2); Cp = Point(cx, cy)
same("practice[2]", Cp.distance(Bp), 12)
u = (Bp - Ap) / 10 + (Cp - Ap) / 6
Dp = Line(Ap, Ap + u).intersection(Line(Bp, Cp))[0]
same("practice[2]", simplify(Bp.distance(Dp)), Rational(15, 2)); same("practice[2]", simplify(Cp.distance(Dp)), Rational(9, 2))
# practice[3]
check("practice[3]", Rational(4, 6) != Rational(5, 8), "ratios differ: not parallel")
same("practice[3]", Rational(5) / Rational(15, 2), Rational(2, 3))
A3, B3, C3 = Point(0, 0), Point(10, 0), Point(4, 12)
D3 = A3 + (B3 - A3) * Rational(4, 10)
E3 = A3 + (C3 - A3) * Rational(5, 13); E3b = A3 + (C3 - A3) * Rational(5, Rational(25, 2))
check("practice[3]", not Line(D3, E3).is_parallel(Line(B3, C3)) and Line(D3, E3b).is_parallel(Line(B3, C3)), "EC=8 not parallel, EC=7.5 parallel")
