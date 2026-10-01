# content: 6628bc4b3c57
# g-volume: Volume & Cavalieri's Principle
from sympy import sqrt as Sqrt
# formal: slice areas of hemisphere and cylinder-minus-cone agree; integrate the slices
y_, r_, h_ = symbols('y_ r_ h_', positive=True)
hemi = pi*(r_**2 - y_**2); cyl_minus_cone = pi*r_**2 - pi*y_**2   # cone radius at height y is y
same("formal", hemi, cyl_minus_cone)
same("formal", integrate(hemi, (y_, 0, r_)), Rational(2, 3)*pi*r_**3)
same("formal", pi*r_**3 - Rational(1, 3)*pi*r_**3, Rational(2, 3)*pi*r_**3)
same("formal", integrate(pi*r_**2*(y_/h_)**2, (y_, 0, h_)), Rational(1, 3)*pi*r_**2*h_)   # cone by slices
# example: silo
same("example", pi*3**2, 9*pi); same("example", 9*pi*12, 108*pi)
same("example", Rational(1, 2)*Rational(4, 3)*pi*3**3, 18*pi)
same("example", 108*pi + 18*pi, 126*pi); near("example", 126*pi, 395.8, rel=0.0002)
near("example", 108*pi, 339.3, rel=0.0002); near("example", 135*pi, 424.1, rel=0.0002)
same("example", 9*pi*(12 + 3), 135*pi)
# practice[0]
same("practice[0]", 8*5*3, 120); same("practice[0]", 8*5*4, 160)
# practice[1]
same("practice[1]", Rational(1, 3)*6**2*10, 120); same("practice[1]", 36*10, 360)
# practice[2]
same("practice[2]", Sqrt(5**2 - 3**2), 4)
same("practice[2]", Rational(1, 3)*pi*9*4, 12*pi); near("practice[2]", 12*pi, 37.7, rel=0.001)
# practice[3]: tennis balls
rr = Rational(13, 4)
balls = 3*Rational(4, 3)*pi*rr**3; can = pi*rr**2*6*rr
same("practice[3]", (can - balls)/can, Rational(1, 3))
same("practice[3]", can - balls, 2*pi*rr**3); same("practice[3]", 2*pi*rr**3, Rational(2197, 32)*pi)
near("practice[3]", Rational(2197, 32)*pi, 215.7, rel=0.0003)
