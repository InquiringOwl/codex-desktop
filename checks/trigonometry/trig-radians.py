# content: ece757250f08
# trig-radians: Radian Measure, Arc Length & Sector Area
from trig import *
R = Rational
arc = lambda r, t: r*t
sector = lambda r, t: R(1, 2)*r**2*t
# formal
same("formal", deg(360), 2*pi); same("formal", deg(180), pi)
near("formal", float(pi/180), 0.017453); near("formal", float(180/pi), 57.2958)
same("formal", [deg(v) for v in (30, 45, 60, 90, 135, 270)], [pi/6, pi/4, pi/3, pi/2, 3*pi/4, 3*pi/2])
th, r = symbols('theta r', positive=True)
same("formal", simplify(th/(2*pi)*2*pi*r - r*th), 0)
same("formal", simplify(th/(2*pi)*pi*r**2 - R(1, 2)*r**2*th), 0)
same("formal", simplify(R(1, 2)*r*(r*th) - R(1, 2)*r**2*th), 0)
same("formal", simplify(r*deg(th) - pi*r*th/180), 0); same("formal", simplify(sector(r, deg(th)) - pi*r**2*th/360), 0)
# example
t = deg(135); same("example", t, 3*pi/4); same("example", R(135, 180), R(3, 4))
same("example", arc(12, t), 9*pi); near("example", round(float(9*pi), 1), 28.3); near("example", float(9*pi), 28.274)
same("example", sector(12, t), 54*pi); near("example", round(float(54*pi), 1), 169.6); near("example", float(54*pi), 169.646)
same("example", R(1, 2)*12*9*pi, 54*pi); same("example", t/(2*pi), R(3, 8))
# practice[0]
same("practice[0]", [deg(v) for v in (210, -45, 330, 20)], [7*pi/6, -pi/4, 11*pi/6, pi/9])
# practice[1]
same("practice[1]", [to_deg(5*pi/3), to_deg(-3*pi/4)], [300, -135])
near("practice[1]", round(2.5*180/float(pi), 1), 143.2)
# practice[2]
tt = R(10, 8); same("practice[2]", tt, R(5, 4))
near("practice[2]", round(float(tt*180/pi), 1), 71.6)
same("practice[2]", sector(8, tt), 40); same("practice[2]", R(1, 2)*8*10, 40)
# practice[3]
tq = solve(Eq(sector(6, th), 15*pi), th); same("practice[3]", tq, [5*pi/6])
same("practice[3]", arc(6, 5*pi/6), 5*pi)
near("practice[3]", round(float(12 + 5*pi), 1), 27.7)
# mistakes, life
same("mistakes", arc(5, deg(60)), 5*pi/3); near("mistakes", round(float(5*pi/3), 2), 5.24)
same("mistakes", deg(90), pi/2); same("life", 2*pi/8, pi/4)
same("plain", deg(360)/(2*pi), 1); near("plain", round(float(2*pi), 2), 6.28); check("plain", 57 < float(180/pi) < 58, "a little more than 57 deg")
