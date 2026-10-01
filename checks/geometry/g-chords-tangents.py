# content: f2ab470f0161
# g-chords-tangents: Chords & Tangents
from sympy import Point, Circle, Line, Segment, Triangle
O = Point(0, 0)
# formal: d^2 + (c/2)^2 = r^2 and the foot of the perpendicular is the chord's midpoint
cir = Circle(O, 13)
ch = Line(Point(-20, 5), Point(20, 5))
P1, P2 = cir.intersection(ch)
foot = ch.projection(O)
check("formal", foot == Segment(P1, P2).midpoint, "foot of the perpendicular is the midpoint")
same("formal", O.distance(foot)**2 + (P1.distance(P2)/2)**2, 13**2)
# example: pipe radius 50, chord 80
pipe = Circle(O, 50)
surf = Line(Point(0, -30), Point(1, -30))
X1, X2 = pipe.intersection(surf)
same("example", X1.distance(X2), 80)
same("example", 50**2 - 40**2, 900); same("example", sqrt(2500 - 1600), 30)
same("example", O.distance(surf.projection(O)), 30)
same("example", 50 - 30, 20)
same("example", 50 + 30, 80)
check("example", 20 < 50, "less than half full")
# practice[0]
same("practice[0]", sqrt(13**2 - 12**2), 5)
c2 = Circle(O, 13); L2 = Line(Point(5, 0), Point(5, 1))
Q1, Q2 = c2.intersection(L2)
same("practice[0]", Q1.distance(Q2), 24)
# practice[1]
P = Point(17, 0); c3 = Circle(O, 8)
tl = c3.tangent_lines(P)
check("practice[1]", len(tl) == 2, "two tangents from an external point")
pts = [c3.intersection(t)[0] for t in tl]
same("practice[1]", [simplify(P.distance(q)) for q in pts], [15, 15])
same("practice[1]", sqrt(17**2 - 8**2), 15)
# practice[2]
solves("practice[2]", Eq(15 - 12, x), x, {3})
sol = solve([Eq(x + y, 10), Eq(y + z, 12), Eq(z + x, 8)], [x, y, z])
same("practice[2]", (sol[x], sol[y], sol[z]), (3, 7, 5))
# confirm with the actual incircle: tangent length from A is s - a
A_ = Point(0, 0); B_ = Point(10, 0)
# C with CA = 8, CB = 12
cx = Rational(10**2 + 8**2 - 12**2, 2*10); cy = sqrt(8**2 - cx**2)
C_ = Point(cx, cy)
same("practice[2]", (A_.distance(B_), B_.distance(C_), C_.distance(A_)), (10, 12, 8))
T = Triangle(A_, B_, C_)
I = T.incenter; r_in = T.inradius
foot_AB = Line(A_, B_).projection(I)
same("practice[2]", simplify(A_.distance(foot_AB)), 3)
same("practice[2]", simplify(B_.distance(foot_AB)), 7)
foot_BC = Line(B_, C_).projection(I)
same("practice[2]", simplify(C_.distance(foot_BC)), 5)
# practice[3]
same("practice[3]", (6**2 + 8**2, 11**2), (100, 121))
check("practice[3]", 6**2 + 8**2 != 11**2 and 11**2 > 6**2 + 8**2, "not right, obtuse")
same("practice[3]", sqrt(6**2 + 8**2), 10)
