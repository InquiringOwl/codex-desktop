# content: 5db20d818ab9
# g-circle-measure: Circumference, Arc Length & Area of Circles
R = Rational
tenth = lambda label, v, page: near(label, v, page, rel=0.0501 / abs(page))
# formal: inscribed regular n-gon perimeter/diameter and area tend to pi and pi r^2; A = 1/2 a P
n_ = symbols('n_', positive=True)
r_ = symbols('r_', positive=True)
perim = 2*n_*r_*sin(pi/n_); apo = r_*cos(pi/n_)
same("formal", limit(perim/(2*r_), n_, oo), pi)
same("formal", limit(R(1, 2)*apo*perim, n_, oo), pi*r_**2)
same("formal", simplify(R(1, 2)*apo*perim - n_*r_**2*sin(2*pi/n_)/2), 0)   # = n triangles of area ½r²sin(360°/n)
check("formal", 3 + R(10, 71) < pi < 3 + R(1, 7), "Archimedes' bounds")
near("formal", (96*sin(pi/96))/1, 3.14103, rel=1e-5)   # inscribed 96-gon
same("formal", 2*pi*r_/r_, 2*pi)
# example: sprinkler r = 12 m, 135 degrees
fr = R(135, 360)
same("example", fr, R(3, 8))
A_ = fr*pi*12**2; s_ = fr*2*pi*12
same("example", A_, 54*pi); tenth("example", A_, 169.6)
same("example", s_, 9*pi); tenth("example", s_, 28.3)
same("example", s_/12, 3*pi/4); same("example", (3*pi/4)*180/pi, 135)
# practice[0]
same("practice[0]", pi*10, 10*pi); tenth("practice[0]", 10*pi, 31.4)
same("practice[0]", pi*5**2, 25*pi); tenth("practice[0]", 25*pi, 78.5)
# practice[1]
turn = 26*pi
near("practice[1]", turn, 81.68, rel=1e-4)
near("practice[1]", 63360/turn, 775.7, rel=1e-4)
same("practice[1]", floor(63360/turn), 775); same("practice[1]", round(float(63360/turn)), 776)
# practice[2]: regular hexagon side 8
a_ = sqrt(8**2 - 4**2)
same("practice[2]", a_, 4*sqrt(3))
Ah = R(1, 2)*a_*48
same("practice[2]", Ah, 96*sqrt(3)); tenth("practice[2]", Ah, 166.3)
same("practice[2]", 6*sqrt(3)/4*8**2, 96*sqrt(3))
# practice[3]: r = 6, 60 degree arc
same("practice[3]", R(60, 360)*12*pi, 2*pi); tenth("practice[3]", 2*pi, 6.3)
same("practice[3]", R(60, 360)*36*pi, 6*pi); tenth("practice[3]", 6*pi, 18.8)
from sympy import Point, Triangle
T = Triangle(Point(0, 0), Point(6, 0), Point(3, 3*sqrt(3)))
same("practice[3]", T.area, 9*sqrt(3)); same("practice[3]", sqrt(3)/4*36, 9*sqrt(3))
tenth("practice[3]", 6*pi - 9*sqrt(3), 3.3)
