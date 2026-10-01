# content: 0aae332ee72a
# g-similarity: Similar Polygons & Scale Factor
from sympy import Point, Polygon, sqrt as Sqrt
# formal: a dilation by k scales a polygon's perimeter by k and its area by k^2
kk = Rational(7, 3)
Pg = Polygon(Point(0, 0), Point(5, 0), Point(6, 3), Point(2, 4), Point(-1, 2))
Pk = Polygon(*[Point(kk * v.x, kk * v.y) for v in Pg.vertices])
same("formal", simplify(Pk.perimeter / Pg.perimeter), kk)
same("formal", abs(Pk.area) / abs(Pg.area), kk**2)
# a 2x3 and a 2x6 rectangle: equal angles, ratios differ
check("formal", Rational(2, 2) != Rational(6, 3), "rectangles 2x3, 2x6 not similar")
# example: trapezoid AB=40, CD=20, legs 26, height 24
A, B = Point(0, 0), Point(40, 0); D, Cc = Point(10, 24), Point(30, 24)
same("example", A.distance(D), 26); same("example", B.distance(Cc), 26); same("example", Cc.distance(D), 20)
k_ = Rational(100, 40); same("example", k_, Rational(5, 2))
same("example", k_ * 26, 65); same("example", k_ * 20, 50)
P0 = 40 + 26 + 20 + 26; same("example", P0, 112); same("example", k_ * P0, 280)
T = Polygon(A, B, Cc, D); same("example", abs(T.area), 720)
same("example", k_**2, Rational(25, 4)); same("example", k_**2 * 720, 4500)
T2 = Polygon(*[Point(k_ * v.x, k_ * v.y) for v in T.vertices]); same("example", abs(T2.area), 4500)
same("example", k_ * 24, 60); same("example", Rational(1, 2) * (100 + 50) * 60, 4500)
same("example", Rational(4500, 10000), Rational(45, 100))
# practice[0]
same("practice[0]", [Rational(6, 4), Rational(9, 6)], [Rational(3, 2), Rational(3, 2)])
check("practice[0]", Rational(8, 4) != Rational(10, 6) and Rational(8, 6) != Rational(10, 4), "4x6 vs 8x10 not similar either way")
same("practice[0]", Rational(10, 5), 2); check("practice[0]", 90 != 60, "angles differ")
# practice[1]
same("practice[1]", Rational(9, 6), Rational(3, 2)); same("practice[1]", Rational(3, 2) * 8, 12); same("practice[1]", 1 / Rational(3, 2), Rational(2, 3))
# practice[2]
k2 = Rational(36, 24); same("practice[2]", k2, Rational(3, 2)); same("practice[2]", k2**2 * 30, Rational(135, 2))
# practice[3]: r/1 = 1/(r/2)
r_ = symbols('r_', positive=True)
same("practice[3]", set(solve(Eq(r_ / 1, 1 / (r_ / 2)), r_)), {Sqrt(2)})
check("practice[3]", Sqrt(2) / 2 < 1, "half sheet's long side is 1")
near("practice[3]", 210 * Sqrt(2), 297, rel=0.002)
same("practice[3]", (1 * Sqrt(2)) / ((Sqrt(2) / 2) * 1), 2)
