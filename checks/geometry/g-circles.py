# content: 38c5282c9eeb
# g-circles: Circles, Arcs & Central Angles
from sympy import Point, Circle, Triangle, rad, deg, pi as PI
O = Point(0, 0)
def on(theta_deg, r=1):
    return Point(r*cos(rad(theta_deg)), r*sin(rad(theta_deg)))
def central(P, Q):
    # angle POQ in degrees (0..180)
    v, w = P - O, Q - O
    return deg(acos(simplify((v.x*w.x + v.y*w.y) / (sqrt(v.x**2 + v.y**2)*sqrt(w.x**2 + w.y**2)))))
# example: 20 gondolas, A at 0 deg, B 3 places on, D 7 places on
step = Rational(360, 20)
same("example", step, 18)
A, B, D = on(0, 10), on(3*step, 10), on(7*step, 10)
same("example", 3*step, 54); same("example", 4*step, 72)
same("example", simplify(central(A, B) + central(B, D)), 126)
same("example", simplify(central(A, D)), 126)
same("example", 360 - 126, 234)
T = Triangle(O, A, D)
near("example", deg(T.angles[A]).evalf(30), 27, rel=1e-12)
near("example", deg(T.angles[D]).evalf(30), 27, rel=1e-12)
same("example", 27 + 27 + 126, 180)
# practice[0]
same("practice[0]", simplify(central(on(10), on(82))), 72)
same("practice[0]", 360 - 72, 288)
# practice[1]
solves("practice[1]", Eq((3*x + 12) + (5*x - 8), 180), x, {22})
same("practice[1]", (3*22 + 12, 5*22 - 8), (78, 102))
same("practice[1]", 78 + 102, 180)
# practice[2]
same("practice[2]", Rational(54, 240)*360, 81)
same("practice[2]", Rational(90, 360)*240, 60)
# practice[3]: chord of a 60 degree arc equals the radius (2 r sin 30 = r)
for r_, ch in ((3, 3), (5, 5)):
    P1, P2 = on(0, r_), on(60, r_)
    same("practice[3]", simplify(P1.distance(P2)), ch)
    same("practice[3]", simplify(deg(Triangle(O, P1, P2).angles[P1])), 60)
check("practice[3]", Circle(O, 3) != Circle(O, 5), "circles with radii 3 and 5 are not congruent")
