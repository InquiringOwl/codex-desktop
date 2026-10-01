# content: fe087b5fe676
# g-isosceles: Isosceles & Equilateral Triangles
from sympy import Point, Triangle, sqrt as Sqrt, atan, deg
# formal: base angles of A(0, h), B(-w, 0), C(w, 0) are equal; base angle = (180 - v)/2 < 90
w_, h_ = symbols('w_ h_', positive=True)
ang = lambda V, P, Q: acos(((P - V).dot(Q - V)) / (V.distance(P) * V.distance(Q)))
A_, B_, C_ = Point(0, h_), Point(-w_, 0), Point(w_, 0)
same("formal", ang(B_, A_, C_), ang(C_, A_, B_))
v = symbols('v', positive=True)
check("formal", all((180 - vv)/2 < 90 for vv in (1, 60, 90, 179)), "base angles acute")
Teq = Triangle(Point(0, 0), Point(2, 0), Point(1, Sqrt(3)))
same("formal", [deg(ang(Point(0, 0), Point(2, 0), Point(1, Sqrt(3)))), deg(ang(Point(2, 0), Point(0, 0), Point(1, Sqrt(3))))], [60, 60])
# example
same("example", 180 - 2*Rational(674, 10), Rational(452, 10))
same("example", Rational(50, 10)/2, Rational(25, 10))
same("example", Sqrt(Rational(65, 10)**2 - Rational(25, 10)**2), 6)
same("example", [Rational(25, 10)/Rational(1, 2), 6/Rational(1, 2), Rational(65, 10)/Rational(1, 2)], [5, 12, 13])
near("example", deg(atan(6/Rational(25, 10))), 67.4, rel=0.001)
# practice[0]
check("practice[0]", 2*100 >= 180, "100 cannot be a base angle")
same("practice[0]", (180 - 100)/2, 40)
same("practice[0]", 180 - 2*50, 80); same("practice[0]", Rational(180 - 50, 2), 65)
# practice[1]
solves("practice[1]", Eq(3*x + 12, 5*x - 8), x, {10})
same("practice[1]", [3*10 + 12, 5*10 - 8, 180 - 2*42], [42, 42, 96])
# practice[2]
same("practice[2]", 180 - 50 - 80, 50)
solves("practice[2]", Eq(5*y - 9, 2*y + 3), y, {4})
same("practice[2]", [2*4 + 3, 5*4 - 9], [11, 11])
# practice[3]
same("practice[3]", (180 - 60)/2, 60); same("practice[3]", 180 - 120, 60)
same("practice[3]", Sqrt(8**2 - 4**2), 4*Sqrt(3)); near("practice[3]", 4*Sqrt(3), 6.9, rel=0.01)
same("practice[3]", Triangle(Point(-4, 0), Point(4, 0), Point(0, 4*Sqrt(3))).altitudes[Point(0, 4*Sqrt(3))].length, 4*Sqrt(3))
