# content: 24dc825d6f3b
# g-dilations: Dilations
from sympy import Point, Line, Triangle, sqrt as Sqrt
eqp = lambda l, a, b: check(l, Point(a) == Point(b), f"{a} vs {b}")
D = lambda O, k: (lambda P: Point(O.x + k*(P.x - O.x), O.y + k*(P.y - O.y)))
O = Point(0, 0)
# formal: lengths scale by |k|, lines not through O map to parallel lines, k = -1 is the 180 degree rotation
P_, Q_ = Point(a, b), Point(c, d)
for kk in (Rational(5, 2), -2, Rational(1, 3)):
    f = D(Point(e, g), kk)
    same("formal", f(P_).distance(f(Q_))**2, kk**2 * P_.distance(Q_)**2)
eqp("formal", D(O, -1)(P_), Point(-a, -b))
# example
k = Rational(5, 2)
A, B, C = Point(2, 1), Point(4, 1), Point(2, 4)
A2, B2, C2 = [D(O, k)(P) for P in (A, B, C)]
same("example", [A2, B2, C2], [Point(5, Rational(5, 2)), Point(10, Rational(5, 2)), Point(5, 10)])
same("example", [A.distance(B), A2.distance(B2)], [2, 5]); same("example", [A.distance(C), A2.distance(C2)], [3, Rational(15, 2)])
same("example", B.distance(C), Sqrt(13)); same("example", B2.distance(C2), Rational(5, 2)*Sqrt(13))
same("example", 5**2 + Rational(15, 2)**2, Rational(325, 4)); same("example", Rational(325, 4), Rational(25, 4)*13)
near("example", Rational(5, 2)*Sqrt(13), 9.0, rel=0.005)
same("example", Line(B, C).slope, Rational(-3, 2)); same("example", Line(B2, C2).slope, Rational(-3, 2))
same("example", abs(Triangle(A, B, C).area), 3); same("example", abs(Triangle(A2, B2, C2).area), Rational(75, 4))
same("example", k**2 * 3, Rational(75, 4))
check("example", Line(A2, B2).is_perpendicular(Line(A2, C2)), "right angle at A' kept")
# practice[0]
P = Point(-3, 6)
eqp("practice[0]", D(O, Rational(1, 3))(P), Point(-1, 2)); eqp("practice[0]", D(O, -2)(P), Point(6, -12))
# practice[1]
Cc, P = Point(1, 2), Point(3, 3)
P2 = D(Cc, 3)(P); eqp("practice[1]", P2, Point(7, 5))
same("practice[1]", Cc.distance(P), Sqrt(5)); same("practice[1]", Cc.distance(P2), Sqrt(45)); same("practice[1]", Sqrt(45), 3*Sqrt(5))
# practice[2]: both signs give length 4 from length 10
S1, S2 = Point(0, 1), Point(0, 11)
for kk in (Rational(2, 5), -Rational(2, 5)):
    same("practice[2]", D(O, kk)(S1).distance(D(O, kk)(S2)), 4)
same("practice[2]", Rational(4, 10), Rational(2, 5))
# practice[3]
A, A2, B, B2 = Point(1, 1), Point(4, 7), Point(3, 2), Point(8, 9)
kk = symbols('kk'); Ox, Oy = symbols('Ox Oy')
sol = solve([Ox + kk*(1 - Ox) - 4, Oy + kk*(1 - Oy) - 7, Ox + kk*(3 - Ox) - 8, Oy + kk*(2 - Oy) - 9], [kk, Ox, Oy], dict=True)
same("practice[3]", [(s[kk], s[Ox], s[Oy]) for s in sol], [(2, -2, -5)])
eqp("practice[3]", B2 - A2, Point(4, 2)); eqp("practice[3]", B - A, Point(2, 1))
eqp("practice[3]", D(Point(-2, -5), 2)(B), B2)
