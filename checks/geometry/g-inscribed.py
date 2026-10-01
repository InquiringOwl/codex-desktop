# content: f896eecd8e3c
# g-inscribed: Inscribed Angles & Cyclic Quadrilaterals
from sympy import Point, Circle, Triangle, Polygon, rad, deg
O = Point(0, 0)
def on(t, r=1):
    return Point(r*cos(rad(t)), r*sin(rad(t)))
def ang(V, P, Q):
    v, w = P - V, Q - V
    return deg(acos((v.x*w.x + v.y*w.y) / (sqrt(v.x**2 + v.y**2)*sqrt(w.x**2 + w.y**2)))).evalf(30)
# formal: inscribed angle is half the central angle for several vertex positions
A0, C0 = on(-40), on(70)
for t in (120, 180, 250, 300):
    near("formal", ang(on(t), A0, C0), 55, rel=1e-12)
near("formal", ang(on(200), on(0), on(180)), 90, rel=1e-12)   # Thales
# example: A, B with central angle 70; S anywhere on the major arc
A, B = on(-35, 10), on(35, 10)
near("example", ang(O, A, B), 70, rel=1e-12)
for t in (100, 160, 180, 230, 290):
    near("example", ang(on(t, 10), A, B), 35, rel=1e-12)
M = on(180, 10)
check("example", simplify(M.distance(A) - M.distance(B)) == 0, "MA = MB for the middle seat")
near("example", ang(A, M, B), 72.5, rel=1e-12)
same("example", Rational(180 - 35, 2), Rational(145, 2))
near("example", ang(O, A, M), 145, rel=1e-12)    # arc AM = central angle AOM
same("example", 70 + 145 + 145, 360)
# practice[0]
Ap, Cp = on(0), on(110)
near("practice[0]", ang(on(250), Ap, Cp), 55, rel=1e-12)
near("practice[0]", ang(on(50), Ap, Cp), 125, rel=1e-12)
same("practice[0]", 55 + 125, 180)
# practice[1]
solves("practice[1]", Eq((2*x + 10) + (4*x - 10), 180), x, {30})
same("practice[1]", (2*30 + 10, 3*30 - 5, 4*30 - 10, 180 - (3*30 - 5)), (70, 85, 110, 95))
same("practice[1]", 70 + 85 + 110 + 95, 360)
# a cyclic quadrilateral with exactly these angles exists: arcs are twice the opposite... check by construction
# arcs BCD = 140, so with arcs a(AB), b(BC), c(CD), d(DA): b + c = 140, c + d = 170, a + b = 190 (2*95), a + d = 220 (2*110)
a_, b_, c_, d_ = symbols('a_ b_ c_ d_', positive=True)
sol = solve([b_ + c_ - 140, c_ + d_ - 170, a_ + b_ - 190, a_ + b_ + c_ + d_ - 360, b_ - 50], [a_, b_, c_, d_], dict=True)[0]
check("practice[1]", all(v > 0 for v in sol.values()), "positive arcs realise the quadrilateral")
pts = [on(0), on(sol[a_]), on(sol[a_] + sol[b_]), on(sol[a_] + sol[b_] + sol[c_])]
near("practice[1]", ang(pts[0], pts[3], pts[1]), 70, rel=1e-12)
near("practice[1]", ang(pts[1], pts[0], pts[2]), 85, rel=1e-12)
# practice[2]
same("practice[2]", sqrt(60**2 + 80**2), 100)
P = Point(0, 0); X1, X2 = Point(60, 0), Point(0, 80)
c = Circle(P, X1, X2)
same("practice[2]", 2*c.radius, 100)
check("practice[2]", c.center == Point(30, 40), "centre is the midpoint of the chord joining the crossing points")
# practice[3]
same("practice[3]", (70 + 70, 110 + 110), (140, 220))
same("practice[3]", 70 + 110, 180)
same("practice[3]", (90 + 90, 120 + 60, 90 + 120 + 90 + 60), (180, 180, 360))
