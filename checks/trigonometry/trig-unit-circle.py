# content: edf8076f422f
# trig-unit-circle: The Unit Circle
from trig import *
R = Rational
P = lambda t: (cos(t), sin(t))
def eqpt(a, b): return all(simplify(u - v) == 0 for u, v in zip(a, b))
t = symbols('t', real=True)
# formal
same("formal", simplify(sin(t)**2 + cos(t)**2), 1)
check("formal", eqpt(P(0), (1, 0)) and eqpt(P(pi/2), (0, 1)) and eqpt(P(pi), (-1, 0)) and eqpt(P(3*pi/2), (0, -1)), "quadrantal points")
check("formal", eqpt(P(pi/6), (sqrt(3)/2, R(1, 2))) and eqpt(P(pi/4), (sqrt(2)/2, sqrt(2)/2)) and eqpt(P(pi/3), (R(1, 2), sqrt(3)/2)), "special points")
same("formal", [exact('tan', 0), exact('tan', pi)], [0, 0]); check("formal", exact('tan', pi/2) is None and exact('tan', 3*pi/2) is None, "tan undefined")
for a in (pi/6, pi/4, pi/3, R(7, 10)):
    check("formal", eqpt(P(pi - a), (-cos(a), sin(a))) and eqpt(P(pi + a), (-cos(a), -sin(a))) and eqpt(P(2*pi - a), (cos(a), -sin(a))), "reflections")
same("formal", [simplify(cos(t + 2*pi) - cos(t)), simplify(sin(t + 2*pi) - sin(t))], [0, 0])
check("formal", all(cos(pi/2 + k*pi) == 0 for k in range(-3, 4)), "tan undefined at pi/2 + k pi")
same("formal", [minimum(sin(t), t), maximum(sin(t), t), minimum(cos(t), t), maximum(cos(t), t)], [-1, 1, -1, 1])
# example
u = 17*pi/6
same("example", u - 2*pi, 5*pi/6); same("example", coterminal_in(u), 5*pi/6); same("example", quadrant(u), 2)
same("example", pi - 5*pi/6, pi/6)
same("example", [cos(u), sin(u)], [-sqrt(3)/2, R(1, 2)])
same("example", simplify(tan(u) - (-sqrt(3)/3)), 0); same("example", simplify(-1/sqrt(3) + sqrt(3)/3), 0)
same("example", (-sqrt(3)/2)**2 + R(1, 4), 1)
# practice[0]
check("practice[0]", eqpt(P(pi), (-1, 0)) and eqpt(P(3*pi/2), (0, -1)) and eqpt(P(-pi/2), (0, -1)), "points")
same("practice[0]", tan(pi), 0)
# practice[1]
v = 7*pi/4; same("practice[1]", 2*pi - v, pi/4); same("practice[1]", quadrant(v), 4)
same("practice[1]", [cos(v), sin(v), tan(v)], [sqrt(2)/2, -sqrt(2)/2, -1])
# practice[2]
ys = solve(Eq(R(9, 25) + t**2, 1), t); same("practice[2]", sorted(ys), [R(-4, 5), R(4, 5)])
same("practice[2]", R(-4, 5)/R(-3, 5), R(4, 3))
# practice[3]
x0, y0 = R(-5, 13), R(12, 13); same("practice[3]", x0**2 + y0**2, 1)
check("practice[3]", x0 < 0 < y0, "QII")
same("practice[3]", y0/x0, R(-12, 5))
th = atan2(y0, x0)
same("practice[3]", [simplify(expand_trig(cos(th + pi))), simplify(expand_trig(sin(th + pi)))], [R(5, 13), R(-12, 13)])
same("practice[3]", [simplify(expand_trig(cos(pi - th))), simplify(expand_trig(sin(pi - th)))], [R(5, 13), R(12, 13)])
# mistakes
same("mistakes", [sin(pi/6), cos(2*pi/3)], [R(1, 2), R(-1, 2)]); check("mistakes", exact('tan', pi/2) is None, "undefined")
