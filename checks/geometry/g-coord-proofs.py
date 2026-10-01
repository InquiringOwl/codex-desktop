# content: f14daf4efc5b
# g-coord-proofs: Coordinate Geometry & Coordinate Proofs
R = Rational
part = lambda A, B, m_, n_: Point((n_*A.x + m_*B.x)/R(m_ + n_), (n_*A.y + m_*B.y)/R(m_ + n_))
# formal: midsegment theorem with A(0,0), B(2a,0), C(2b,2c)
A, B, C = Point(0, 0), Point(2*a, 0), Point(2*b, 2*c)
Mm, Nn = Segment(A, C).midpoint, Segment(B, C).midpoint
same("formal", (Mm.x, Mm.y, Nn.x, Nn.y), (b, c, a + b, c))
same("formal", Nn.y - Mm.y, 0)
same("formal", Nn.x - Mm.x, a)
# example: rhombus, not a square
A, B, C, D = Point(1, 1), Point(9, 3), Point(11, 11), Point(3, 9)
check("example", Segment(A, C).midpoint == Point(6, 6), "same point")
check("example", Segment(B, D).midpoint == Point(6, 6), "same point")
same("example", A.distance(B), 2*sqrt(17))
same("example", A.distance(D), 2*sqrt(17))
same("example", [A.distance(B), B.distance(C), C.distance(D), D.distance(A)], [2*sqrt(17)]*4)
same("example", (Line(A, C).slope, Line(B, D).slope), (1, -1))
same("example", A.distance(C), 10*sqrt(2))
same("example", B.distance(D), 6*sqrt(2))
same("example", Line(A, B).slope*Line(A, D).slope, 1)
near("example", 2*sqrt(17), 8.2, 0.01)
near("example", 10*sqrt(2), 14.1, 0.01)
near("example", 6*sqrt(2), 8.5, 0.01)
# practice[0]
P = part(Point(-2, 1), Point(10, 7), 1, 2)
check("practice[0]", P == Point(2, 3), "same point")
same("practice[0]", Point(-2, 1).distance(P)/P.distance(Point(10, 7)), R(1, 2))
# practice[1]
A, B, C = Point(1, 2), Point(5, 4), Point(3, 8)
same("practice[1]", (Line(A, B).slope, Line(B, C).slope), (R(1, 2), -2))
same("practice[1]", Line(A, B).slope*Line(B, C).slope, -1)
same("practice[1]", (A.distance(B), B.distance(C)), (2*sqrt(5), sqrt(20)))
same("practice[1]", A.distance(C)**2, 40)
check("practice[1]", Triangle(A, B, C).is_right() and Triangle(A, B, C).is_isosceles(), "right isosceles")
# practice[2]
A, B, C, D = Point(0, 0), Point(6, 0), Point(4, 3), Point(1, 3)
same("practice[2]", (Line(A, B).slope, Line(D, C).slope), (0, 0))
same("practice[2]", (Line(A, D).slope, Line(B, C).slope), (3, -R(3, 2)))
check("practice[2]", not Line(A, D).is_parallel(Line(B, C)), "legs not parallel")
same("practice[2]", (A.distance(D), B.distance(C)), (sqrt(10), sqrt(13)))
# practice[3]: Varignon
A, B, C, D = Point(0, 0), Point(2*a, 0), Point(2*b, 2*c), Point(2*d, 2*e)
P, Q, Rr, S_ = Segment(A, B).midpoint, Segment(B, C).midpoint, Segment(C, D).midpoint, Segment(D, A).midpoint
same("practice[3]", (P.x, P.y, Q.x, Q.y, Rr.x, Rr.y, S_.x, S_.y), (a, 0, a + b, c, b + d, c + e, d, e))
m1 = ((P.x + Rr.x)/2, (P.y + Rr.y)/2); m2 = ((Q.x + S_.x)/2, (Q.y + S_.y)/2)
same("practice[3]", simplify(m1[0] - m2[0]), 0)
same("practice[3]", simplify(m1[1] - m2[1]), 0)
same("practice[3]", m1[0], (a + b + d)/2)
same("practice[3]", m1[1], (c + e)/2)
