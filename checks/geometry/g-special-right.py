# content: f9e781c542cc
# g-special-right: Special Right Triangles
from sympy import Point, Triangle, rad
R = Rational
# a page value rounded to the nearest tenth: within 0.05 of the true value
tenth = lambda label, v, page: near(label, v, page, rel=0.0501 / abs(page))
# formal: half a square and half an equilateral triangle (side 2x), with angles
X = symbols('X', positive=True)
same("formal", sqrt(X**2 + X**2), X*sqrt(2))
same("formal", sqrt((2*X)**2 - X**2), X*sqrt(3))
T = Triangle(Point(0, 0), Point(1, 0), Point(0, sqrt(3)))   # short leg 1 opposite 30 deg
same("formal", sorted([deg(v) for v in T.angles.values()]), [30, 60, 90])
T2 = Triangle(Point(0, 0), Point(1, 0), Point(0, 1))
same("formal", sorted([deg(v) for v in T2.angles.values()]), [45, 45, 90])
# example: hex nut, 19 mm across flats
a_ = R(19, 2)
half = a_ / sqrt(3)
same("example", half, 19*sqrt(3)/6)
s_ = 2*half
same("example", s_, 19*sqrt(3)/3)
tenth("example", s_, 11.0); tenth("example", 2*s_, 21.9)
same("example", 2*s_, 38*sqrt(3)/3)
same("example", half**2 + a_**2, s_**2)
same("example", [half**2, a_**2, s_**2], [R(361, 12), R(361, 4), R(361, 3)])
# regular hexagon: across flats = 2 * apothem = s*sqrt(3)
same("example", 2*(s_/2)*sqrt(3), 19)
# practice[0]
same("practice[0]", sqrt(7**2 + 7**2), 7*sqrt(2)); tenth("practice[0]", 7*sqrt(2), 9.9)
leg = 10/sqrt(2)
same("practice[0]", leg, 5*sqrt(2)); tenth("practice[0]", leg, 7.1)
same("practice[0]", leg**2 + leg**2, 100)
# practice[1]
same("practice[1]", R(18, 2), 9); same("practice[1]", sqrt(18**2 - 9**2), 9*sqrt(3)); tenth("practice[1]", 9*sqrt(3), 15.6)
# practice[2]
xs = 12/sqrt(3)
same("practice[2]", xs, 4*sqrt(3)); tenth("practice[2]", xs, 6.9)
same("practice[2]", 2*xs, 8*sqrt(3)); tenth("practice[2]", 2*xs, 13.9)
same("practice[2]", xs**2 + 12**2, (2*xs)**2)
# practice[3]
same("practice[3]", sqrt(36 + 108), 12)
T3 = Triangle(Point(0, 0), Point(6, 0), Point(0, 6*sqrt(3)))
ang = {deg(v) for v in T3.angles.values()}
same("practice[3]", ang, {30, 60, 90})
check("practice[3]", deg(atan(R(6, 1)/(6*sqrt(3)))) == 30, "angle opposite 6 is 30 degrees")
same("practice[3]", sqrt(6**2 + 10**2), 2*sqrt(34))
check("practice[3]", R(10, 6) != sqrt(3) and R(10, 6) == R(5, 3), "10/6 = 5/3 is not sqrt 3")
check("practice[3]", deg(atan(R(10, 6))) != 60, "legs 6 and 10 do not give 60 degrees")
