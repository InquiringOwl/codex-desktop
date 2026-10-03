# content: 584013e0521f
# trig-complex-polar: Complex Numbers in Polar Form
from trig import *
from algebra import *

t1, t2 = symbols('t1 t2', real=True)
r1, r2 = symbols('r1 r2', positive=True)
Z1, Z2 = r1*(cos(t1) + I*sin(t1)), r2*(cos(t2) + I*sin(t2))
# hero / formal: product and quotient rules
check("hero", simplify(expand_trig(expand(Z1*Z2) - r1*r2*(cos(t1 + t2) + I*sin(t1 + t2)))) == 0, "product rule")
re_part = r1*r2*(cos(t1)*cos(t2) - sin(t1)*sin(t2)); im_part = r1*r2*(sin(t1)*cos(t2) + cos(t1)*sin(t2))
check("formal", simplify(expand(Z1*Z2) - (re_part + I*im_part)) == 0, "expanded product, i² = −1")
check("formal", simplify(expand_trig(re_part - r1*r2*cos(t1 + t2))) == 0 and simplify(expand_trig(im_part - r1*r2*sin(t1 + t2))) == 0, "sum formulas")
Qt = r1/r2*(cos(t1 - t2) + I*sin(t1 - t2))
check("formal", simplify(expand_trig(expand(Qt*Z2) - Z1)) == 0, "quotient times z2 = z1")
check("formal", simplify(expand_trig(Z1/Z2 - Qt)) == 0, "quotient rule")
check("formal", simplify(expand_trig(1/Z1 - (cos(-t1) + I*sin(-t1))/r1)) == 0, "1/z")
check("formal", simplify(conjugate(Z1) - r1*(cos(-t1) + I*sin(-t1))) == 0, "conjugate")
# formal: [0, 2π) vs (−π, π]: differ by 2π below the real axis
same("formal", polar_form(1 - I)[1], 7*pi/4); same("formal", arg(1 - I), -pi/4)
# plain: multiplying by i rotates a quarter turn
same("plain", polar_form(I), (1, pi/2))
check("plain", simplify(I*(3 + 4*I) - cis(5, polar_form(3 + 4*I)[1] + pi/2)) == 0, "i·z = rotate by π/2")

# example
same("example", polar_form(-1 + sqrt(3)*I), (2, 2*pi/3))
same("example", atan(sqrt(3)), pi/3)
same("example", polar_form(sqrt(3) + I), (2, pi/6))
same("example", 2*pi/3 + pi/6, 5*pi/6)
same("example", cplx(cis(4, 5*pi/6)), (-2*sqrt(3), 2))
same("example", cplx((-1 + sqrt(3)*I)*(sqrt(3) + I)), (-2*sqrt(3), 2))
same("example", cplx((-1 + sqrt(3)*I)/(sqrt(3) + I)), (0, 1))
same("example", 2*pi/3 - pi/6, pi/2)
same("example", cis(1, pi/2), I)
# mistakes
same("mistakes", arg(-1 + sqrt(3)*I), 2*pi/3); same("mistakes", atan(-sqrt(3)), -pi/3)
same("mistakes", cplx(cis(2, pi/3)*cis(3, pi/6)), (0, 6))
same("mistakes", cplx(-2*cis(1, pi/3) - cis(2, 4*pi/3)), (0, 0))
same("mistakes", cplx(cis(4, pi/4)/cis(2, 3*pi/4)), (0, -2))
same("mistakes", cplx(cis(2, 3*pi/2)), (0, -2))

# practice
same("practice[0]", polar_form(3 - 3*I), (3*sqrt(2), 7*pi/4))
same("practice[1]", cplx(cis(6, 4*pi/3)), (-3, -3*sqrt(3)))
same("practice[2]", 3*pi/4 + 5*pi/12, 7*pi/6)
same("practice[2]", cplx(cis(2, 3*pi/4)*cis(5, 5*pi/12)), (-5*sqrt(3), -5))
same("practice[2]", cplx(cis(10, 7*pi/6)), (-5*sqrt(3), -5))
same("practice[3]", polar_form(1 + I), (sqrt(2), pi/4))
same("practice[3]", polar_form(-sqrt(3) + I), (2, 5*pi/6))
same("practice[3]", coterminal_in(pi/4 - 5*pi/6), 17*pi/12)
same("practice[3]", polar_form((1 + I)/(-sqrt(3) + I)), (sqrt(2)/2, 17*pi/12))
same("practice[3]", nsimplify(cos(17*pi/12)), -(sqrt(6) - sqrt(2))/4)
same("practice[3]", nsimplify(sin(17*pi/12)), -(sqrt(6) + sqrt(2))/4)
same("practice[3]", cplx((1 + I)/(-sqrt(3) + I)), ((1 - sqrt(3))/4, -(1 + sqrt(3))/4))
