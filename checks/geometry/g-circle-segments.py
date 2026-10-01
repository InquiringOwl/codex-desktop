# content: 9fa051293e26
# g-circle-segments: Secants, Tangents & Segment Lengths
from sympy import Point, Circle, Line, rad, deg
O = Point(0, 0)
def on(t, r=1):
    return Point(r*cos(rad(t)), r*sin(rad(t)))
def ang(V, P, Q):
    v, w = P - V, Q - V
    return deg(acos((v.x*w.x + v.y*w.y) / (sqrt(v.x**2 + v.y**2)*sqrt(w.x**2 + w.y**2)))).evalf(30)
# formal: power of a point is the same for every line through P
cir = Circle(O, 5)
for P in (Point(1, 2), Point(7, 1)):
    pw = abs(P.distance(O)**2 - 25)
    for q in (Point(-3, 4), Point(4, -3), Point(0, 5)):
        X = cir.intersection(Line(P, q))
        prod = P.distance(X[0])*P.distance(X[1]) if len(X) == 2 else P.distance(X[0])**2   # tangent case PT^2
        same("formal", simplify(prod), pw)
same("formal", Point(7, 1).distance(O)**2 - 25, 25)
# angle inside: arcs AC = 100, BD = 40 with A, C, B, D positioned so chords AB and CD cross
A_, C_ = on(0), on(100); B_, D_ = on(200), on(240)  # order A, C, B, D: arcs AC = 100, BD = 40, chords cross
Pin = Line(A_, B_).intersection(Line(C_, D_))[0]
check("formal", Pin.distance(O) < 1, "the chords cross inside")
near("formal", ang(Pin, A_, C_), 70, rel=1e-12)
# example: chord 120, rise 20
same("example", 60*60, 3600); solves("example", Eq(60*60, 20*x), x, {180})
same("example", (20 + 180, (20 + 180)/2), (200, 100))
cir2 = Circle(Point(0, 0), 100)
ch = Line(Point(0, 80), Point(1, 80))
X1, X2 = cir2.intersection(ch)
same("example", X1.distance(X2), 120); same("example", 100 - 80, 20)
same("example", 80**2 + 60**2, 100**2)
# practice[0]
solves("practice[0]", Eq(4*9, 6*x), x, {6})
same("practice[0]", (4 + 9, 6 + 6), (13, 12))
# practice[1]
solves("practice[1]", Eq(5*12, 4*x), x, {15})
same("practice[1]", 15 - 4, 11)
same("practice[1]", sqrt(60), 2*sqrt(15)); near("practice[1]", 2*sqrt(15), 7.7, rel=0.01)
# geometric realisation: circle and point with power 60 give these secants
c3 = Circle(O, 4); Pp = Point(sqrt(76), 0)
same("practice[1]", Pp.distance(O)**2 - 16, 60)
# practice[2]
same("practice[2]", Rational(100 + 40, 2), 70)
same("practice[2]", Rational(130 - 50, 2), 40)
same("practice[2]", Rational((360 - 140) - 140, 2), 40)
same("practice[2]", 360 - 180 - 140, 40)
# (b) realised: near arc A1C1 = 50 (from -25 to 25), far arc B1D1 = 130 (from 115 to 245)
A1, C1, B1, D1 = on(25), on(-25), on(115), on(-115)
Pout = Line(A1, B1).intersection(Line(C1, D1))[0]
check("practice[2]", Pout.distance(O) > 1, "the secants meet outside the circle")
near("practice[2]", ang(Pout, A1, C1), 40, rel=1e-12)
# (c) two tangents with minor arc 140
T1, T2 = on(70, 1), on(-70, 1)
L1 = Line(T1, T1 + Point(-T1.y, T1.x)); L2 = Line(T2, T2 + Point(-T2.y, T2.x))
Pt = L1.intersection(L2)[0]
near("practice[2]", ang(Pt, T1, T2), 40, rel=1e-12)
# practice[3]
same("practice[3]", Rational(5, 100)*(Rational(5, 100) + 2*6371), Rational(6371025, 10000))
near("practice[3]", sqrt(Rational(6371025, 10000)), 25.2, rel=0.003)
R_ = 6371; h_ = Rational(1, 20)
same("practice[3]", (R_ + h_)**2 - R_**2, h_*(h_ + 2*R_))
