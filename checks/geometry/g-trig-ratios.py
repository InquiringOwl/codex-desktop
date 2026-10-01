# content: 39478af386a7
# g-trig-ratios: Right-Triangle Trigonometry
from sympy import rad
R = Rational
# a page value rounded to the nearest tenth: within 0.05 of the true value
tenth = lambda label, v, page: near(label, v, page, rel=0.0501 / abs(page))
# formal: identities and the special values
th = symbols('th', positive=True)
same("formal", simplify(sin(rad(th))**2 + cos(rad(th))**2), 1)
same("formal", cos(rad(90 - th)) - sin(rad(th)), 0)
same("formal", [sin(rad(30)), cos(rad(60)), sin(rad(45)), cos(rad(45)), sin(rad(60)), cos(rad(30))], [R(1, 2), R(1, 2), sqrt(2)/2, sqrt(2)/2, sqrt(3)/2, sqrt(3)/2])
same("formal", [tan(rad(30)), tan(rad(45)), tan(rad(60))], [sqrt(3)/3, 1, sqrt(3)])
# similar right triangles share ratios: scale k
kk = symbols('kk', positive=True)
same("formal", (kk*3)/(kk*5), R(3, 5))
# example
h_ = 120*tan(rad(R(385, 10)))
near("example", tan(rad(R(385, 10))), 0.79544, rel=1e-5)
check("example", abs(float(h_) - 95.45) < 0.005, "h = 95.45 to the nearest hundredth")
tenth("example", h_ + 5, 100.5)
check("example", abs(float(deg(atan(R(9545, 100)/120))) - 38.5) < 0.05, "inverse tangent gives back 38.5 degrees")
# practice[0]: 5-12-13
same("practice[0]", 5**2 + 12**2, 13**2)
same("practice[0]", [R(5, 13), R(12, 13), R(5, 12)], [R(5, 13), R(12, 13), R(5, 12)])
A_ = atan(R(5, 12))
same("practice[0]", [sin(A_), cos(A_), tan(A_)], [R(5, 13), R(12, 13), R(5, 12)])
B_ = pi/2 - A_
same("practice[0]", cos(B_), R(5, 13))
# practice[1]
o, aj = 20*sin(rad(35)), 20*cos(rad(35))
tenth("practice[1]", o, 11.5); tenth("practice[1]", aj, 16.4)
check("practice[1]", abs(11.47**2 + 16.38**2 - 400) < 0.5, "11.47² + 16.38² ≈ 400")
check("practice[1]", abs(float(o) - 11.47) < 0.005 and abs(float(aj) - 16.38) < 0.005, "legs to hundredths")
# practice[2]
tenth("practice[2]", deg(atan(R(1, 12))), 4.8)
# practice[3]
d_ = 150/tan(rad(12))
tenth("practice[3]", d_, 705.7)
check("practice[3]", R(13, 12) > 1, "13/12 exceeds 1, impossible for a sine of an acute angle")
