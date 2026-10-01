# content: b238c4917abb
# g-similar-triangles: Similar Triangles (AA, SSS~, SAS~)
from sympy import Point, Triangle, rad, cos as Cos, sin as Sin
# formal: AA -> proportional sides (law of sines model)
def tri_from(A_, B_, c_):
    C_ = 180 - A_ - B_
    return [c_ * Sin(rad(A_)) / Sin(rad(C_)), c_ * Sin(rad(B_)) / Sin(rad(C_)), c_]
t1, t2 = tri_from(50, 60, Integer(4)), tri_from(50, 60, Integer(7))
same("formal", [simplify(t2[i] / t1[i]) for i in range(3)], [Rational(7, 4)] * 3)
# example
same("example", 90, 90)
h_ = Rational(15, 10) * Rational(148, 10) / Rational(20, 10)
same("example", Rational(148, 20), Rational(74, 10)); same("example", h_, Rational(111, 10))
same("example", h_ / Rational(148, 10), Rational(3, 4)); same("example", Rational(15, 20), Rational(3, 4))
P, Q, R = Point(0, Rational(3, 2)), Point(0, 0), Point(2, 0)
Tt, U, V = Point(0, h_), Point(0, 0), Point(Rational(148, 10), 0)
check("example", Triangle(P, Q, R).is_similar(Triangle(Tt, U, V)), "pole and tree triangles similar")
# practice[0]
same("practice[0]", 180 - 40 - 75, 65)
same("practice[0]", [Rational(6, 4), Rational(9, 6), Rational(12, 8)], [Rational(3, 2)] * 3)
same("practice[0]", [Rational(10, 5), Rational(14, 7)], [2, 2])
# (d) SSA does not fix the shape: e.g. A = 30, c = 10, a = 6 allows two different triangles
tt = symbols('tt', real=True)
roots = solveset(tt**2 - 2*10*Cos(rad(30))*tt + 100 - 36, tt, S.Reals)
check("practice[0]", len([r_ for r_ in roots if r_ > 0]) == 2, "SSA can allow two different shapes")
# practice[1]
same("practice[1]", Rational(5) * Rational(10, 4), Rational(25, 2))
A0, B0, C0 = Point(0, 0), Point(10, 0), Point(3, 7)
D0, E0 = Point(4, 0), A0 + (C0 - A0) * Rational(4, 10)
check("practice[1]", Triangle(A0, D0, E0).is_similar(Triangle(A0, B0, C0)), "ADE ~ ABC")
same("practice[1]", simplify(B0.distance(C0) / D0.distance(E0)), Rational(10, 4))
# practice[2]
same("practice[2]", [Rational(8, 6), Rational(12, 9), Rational(16, 12)], [Rational(4, 3)] * 3)
# side lengths: PQ=6, QR=9, RP=12 ; YZ=8, ZX=12, XY=16 ; mapping P->Y, Q->Z, R->X
pq = {"PQ": 6, "QR": 9, "RP": 12}; xy = {"XY": 16, "YZ": 8, "ZX": 12}
m = {"P": "Y", "Q": "Z", "R": "X"}
img = lambda s: "".join(m[c] for c in s)
look = lambda s: xy.get(s, xy.get(s[::-1]))
same("practice[2]", [Rational(look(img(s)), v) for s, v in pq.items()], [Rational(4, 3)] * 3)
# practice[3]
same("practice[3]", Rational(16, 10) * 12 / 2, Rational(96, 10))
