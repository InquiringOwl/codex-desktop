# content: 398355f72e29
# g-area-polygons: Area of Triangles & Quadrilaterals
from sympy import Point, Polygon, Triangle
R = Rational
area = lambda *pts: abs(Polygon(*[Point(*p) for p in pts]).area)
# formal: the formulas against coordinate (shoelace) areas
same("formal", area((0, 0), (10, 0), (13, 5), (3, 5)), 10*5)                 # parallelogram bh
same("formal", area((0, 0), (14, 0), (4, 9)), R(1, 2)*14*9)                  # triangle ½bh
same("formal", area((0, 0), (15, 0), (11, 8), (2, 8)), R(1, 2)*(15 + 9)*8)   # trapezoid
same("formal", area((0, 0), (3, 2), (0, 7), (-3, 2)), R(1, 2)*6*7)           # kite, diagonals 6 and 7, perpendicular
# shear: same base, same height, any offset t
t_ = symbols('t_', real=True)
same("formal", Polygon(Point(0, 0), Point(10, 0), Point(10 + t_, 5), Point(t_, 5)).area, 50)
# example: right trapezoid lot, bases 80 and 120, height 90
lot = area((0, 0), (120, 0), (80, 90), (0, 90))
same("example", lot, 9000)
same("example", R(1, 2)*(80 + 120)*90, 9000)
same("example", 80*90 + R(1, 2)*40*90, 9000)
same("example", R(9000, 450), 20)
# practice[0]
same("practice[0]", R(1, 2)*14*9, 63)
# parallelogram with sides 10 and 6, height 5 to the 10 side: slanted side 6 gives horizontal offset sqrt(36 - 25)
off = sqrt(6**2 - 5**2)
P0 = Polygon(Point(0, 0), Point(10, 0), Point(10 + off, 5), Point(off, 5))
same("practice[0]", P0.area, 50)
same("practice[0]", Point(0, 0).distance(Point(off, 5)), 6)
check("practice[0]", 10*6 != 50, "base × slanted side is not the area")
# practice[1]
solves("practice[1]", Eq(96, R(1, 2)*(9 + 15)*h), h, {8})
# practice[2]: isosceles trapezoid bases 10 and 22, legs 10
same("practice[2]", R(22 - 10, 2), 6)
hh = sqrt(10**2 - 6**2)
same("practice[2]", hh, 8)
P2 = Polygon(Point(0, 0), Point(22, 0), Point(16, 8), Point(6, 8))
same("practice[2]", P2.area, 128)
same("practice[2]", [Point(0, 0).distance(Point(6, 8)), Point(22, 0).distance(Point(16, 8))], [10, 10])
# practice[3]: rhombus side 5 has area 25 sin(theta), any value in (0, 25]
th = symbols('th', positive=True)
check("practice[3]", maximum(25*sin(th), th, Interval.open(0, pi)) == 25, "largest area is the square, 25")
check("practice[3]", limit(25*sin(th), th, 0, '+') == 0, "area can be made as small as we like")
xh = sqrt(5**2 - 3**2)
same("practice[3]", xh, 4)
rh = Polygon(Point(-3, 0), Point(0, 4), Point(3, 0), Point(0, -4))
same("practice[3]", abs(rh.area), 24)
check("practice[3]", all(rh.sides[i].length == 5 for i in range(4)), "all four sides are 5")
