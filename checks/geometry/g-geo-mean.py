# content: 844693626ac6
# g-geo-mean: Geometric Mean & Altitudes of Right Triangles
from sympy import Point, Line, Triangle, sqrt as Sqrt
# formal: general right triangle C=(0,0), A=(0,b), B=(a,0)
a_, b_ = symbols('a_ b_', positive=True)
C, A, B = Point(0, 0), Point(0, b_), Point(a_, 0)
D = Line(A, B).projection(C)
p_, q_, h_, c_ = D.distance(B), A.distance(D), C.distance(D), A.distance(B)
same("formal", simplify(h_**2 - p_*q_), 0)
same("formal", simplify(a_**2 - p_*c_), 0); same("formal", simplify(b_**2 - q_*c_), 0)
same("formal", simplify(h_**2 - (a_*b_)**2/c_**2), 0)
T0 = Triangle(Point(0, 3), Point(0, 0), Point(4, 0)); D0 = Line(Point(0, 3), Point(4, 0)).projection(Point(0, 0))
check("formal", T0.is_similar(Triangle(Point(0, 3), D0, Point(0, 0))) and T0.is_similar(Triangle(Point(0, 0), D0, Point(4, 0))), "three similar triangles")
# example
p = Rational(36) / Rational(16, 10); same("example", p, Rational(225, 10))
same("example", p + Rational(16, 10), Rational(241, 10))
same("example", [Rational(6)**2 + p**2, Rational(6)**2 + Rational(16, 10)**2], [Rational(54225, 100), Rational(3856, 100)])
same("example", Rational(54225 + 3856, 100), Rational(241, 10)**2)
# practice[0]
same("practice[0]", Sqrt(4*9), 6); same("practice[0]", Sqrt(5*15), 5*Sqrt(3)); near("practice[0]", 5*Sqrt(3), 8.7, rel=0.005)
# practice[1]
same("practice[1]", Sqrt(4*16), 8); same("practice[1]", Sqrt(4*20), 4*Sqrt(5)); same("practice[1]", Sqrt(16*20), 8*Sqrt(5))
near("practice[1]", 4*Sqrt(5), 8.9, rel=0.006); near("practice[1]", 8*Sqrt(5), 17.9, rel=0.003); same("practice[1]", 80 + 320, 20**2)
# practice[2]
pp = Rational(36, 10); same("practice[2]", pp, Rational(36, 10)); same("practice[2]", 10 - pp, Rational(64, 10))
same("practice[2]", Sqrt(pp*(10 - pp)), Rational(48, 10)); same("practice[2]", Sqrt(100 - 36), 8); same("practice[2]", Rational(6*8, 10), Rational(48, 10))
# practice[3]
t_ = symbols('t_')
solves("practice[3]", Eq(t_**2 - 25*t_ + 144, 0), t_, {9, 16})
same("practice[3]", [Sqrt(9*25), Sqrt(16*25)], [15, 20])
same("practice[3]", 20**2 - 4*144, -176)
solves("practice[3]", Eq(t_**2 - 20*t_ + 144, 0), t_, set())
