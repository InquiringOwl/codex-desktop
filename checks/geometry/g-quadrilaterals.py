# content: 529a8152b7a7
# g-quadrilaterals: Parallelograms & Special Quadrilaterals
R = Rational
# example: frame 48 x 30
d2 = 48**2 + 30**2
same("example", d2, 3204)
same("example", sqrt(3204), 6*sqrt(89))
near("example", 6*sqrt(89), 56.6, 0.001)
same("example", 2*d2, 6408)
near("example", R(560, 10)**2 + R(572, 10)**2, 6408, 0.001)
check("example", R(560, 10) != R(572, 10), "diagonals differ")
# parallelogram law sanity on a real parallelogram
P_ = [Point(0, 0), Point(48, 0), Point(55, 30), Point(7, 30)]
same("formal", P_[0].distance(P_[2])**2 + P_[1].distance(P_[3])**2, 2*(48**2 + P_[0].distance(P_[3])**2))
# practice[0]
same("practice[0]", 180 - 65, 115)
same("practice[0]", 65 + 115 + 65 + 115, 360)
# practice[1]
same("practice[1]", solve(Eq(2*x + 3, 5*x - 9), x), [4])
same("practice[1]", (2*x + 3).subs(x, 4), 11)
same("practice[1]", 2*(2*x + 3).subs(x, 4), 22)
# practice[2]: kite
A, B, C, D = Point(0, 3), Point(2, 0), Point(0, -5), Point(-2, 0)
check("practice[2]", Line(A, C).is_perpendicular(Line(B, D)), "diagonals perpendicular")
check("practice[2]", Segment(A, C).midpoint == Point(0, -1), "same point")
check("practice[2]", Segment(B, D).midpoint == Point(0, 0), "same point")
check("practice[2]", Segment(A, C).midpoint != Segment(B, D).midpoint, "not a parallelogram")
same("practice[2]", (A.distance(B), A.distance(D)), (sqrt(13), sqrt(13)))
same("practice[2]", (C.distance(B), C.distance(D)), (sqrt(29), sqrt(29)))
# practice[3]: isosceles trapezoid
xs = solve(Eq(R(1, 2)*((3*x + 2) + (5*x - 4)), 15), x)
same("practice[3]", xs, [4])
same("practice[3]", ((3*x + 2).subs(x, 4), (5*x - 4).subs(x, 4)), (14, 16))
same("practice[3]", R(1, 2)*(8*x - 2) - R(1, 2)*((3*x + 2) + (5*x - 4)), 0)
same("practice[3]", 180 - 72, 108)
same("practice[3]", 72 + 72 + 108 + 108, 360)
