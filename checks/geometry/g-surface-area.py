# content: b518f83ef4c5
# g-surface-area: Surface Area of Solids
from sympy import sqrt as Sqrt
# formal: cone sector area and angle from its net; sphere = lateral area of enclosing cylinder
r_, l_ = symbols('r_ l_', positive=True)
same("formal", Rational(1, 2)*l_*(2*pi*r_), pi*r_*l_)
same("formal", 360*(2*pi*r_)/(2*pi*l_), 360*r_/l_)
same("formal", 2*pi*r_*(2*r_), 4*pi*r_**2)
# example: square pyramid tent, base 8, height 6
a_ = Rational(8, 2); same("example", a_, 4)
ell = Sqrt(6**2 + a_**2); same("example", ell, 2*Sqrt(13)); near("example", ell, 7.21, rel=0.001)
p_ = 4*8; L = Rational(1, 2)*p_*ell; same("example", L, 32*Sqrt(13)); near("example", L, 115.38, rel=0.0005); near("example", L, 115.4, rel=0.001)
B = 8**2; same("example", B, 64)
T = L + B; same("example", T, 64 + 32*Sqrt(13)); near("example", T, 179.4, rel=0.0005)
same("example", 4*(Rational(1, 2)*8*ell), L); near("example", Rational(1, 2)*8*ell, 28.8, rel=0.002)
# practice[0]
same("practice[0]", 2*(10 + 6)*4, 128); same("practice[0]", 128 + 2*60, 248); same("practice[0]", 2*(10*6 + 10*4 + 6*4), 248)
# practice[1]
same("practice[1]", 2*pi*3*10, 60*pi); near("practice[1]", 60*pi, 188.5, rel=0.0005)
same("practice[1]", 60*pi + 2*pi*9, 78*pi); near("practice[1]", 78*pi, 245.0, rel=0.0005)
# practice[2]
same("practice[2]", Sqrt(12**2 + 5**2), 13)
same("practice[2]", pi*5*13, 65*pi); near("practice[2]", 65*pi, 204.2, rel=0.0005)
same("practice[2]", 65*pi + pi*25, 90*pi); near("practice[2]", 90*pi, 282.7, rel=0.0005)
# practice[3]: capsule
same("practice[3]", 4*pi*2**2 + 2*pi*2*6, 40*pi); near("practice[3]", 40*pi, 125.7, rel=0.0005)
