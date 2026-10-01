# content: 2026a7e61e2c
# g-constructions: Compass & Straightedge Constructions
R = Rational
dist = lambda P, Q: sqrt((Q[0]-P[0])**2 + (Q[1]-P[1])**2)
# example
A, B = (0, 0), (8, 4)
same("example", dist(A, B), sqrt(80)); same("example", dist(A, B), 4*sqrt(5))
same("example", dist(A, B)/2, 2*sqrt(5)); near("example", 2*sqrt(5), 4.5, 0.01)
M = (R(A[0]+B[0], 2), R(A[1]+B[1], 2)); same("example", list(M), [4, 2])
same("example", R(B[1]-A[1], B[0]-A[0]), R(1, 2))
bis = -2*(x - 4) + 2
same("example", bis, -2*x + 10)
same("example", R(1, 2)*(-2), -1)
solves("example", Eq(bis, 0), x, {5})
Sp = (5, 0)
same("example", [dist(Sp, A), dist(Sp, B)], [5, 5])
# the two arc intersections of equal circles about A and B lie on the bisector
r = 6
X_, Y_ = symbols('X_ Y_', real=True)
pts = solve([X_**2 + Y_**2 - r**2, (X_-8)**2 + (Y_-4)**2 - r**2], [X_, Y_], dict=True)
check("example", len(pts) == 2 and all(simplify(p[Y_] - (-2*p[X_] + 10)) == 0 for p in pts), "arc crossings on y=-2x+10")
# practice[0]
X_, Y_ = symbols('X_ Y_', real=True)
def crossings(rr):
    return solve([X_**2 + Y_**2 - rr**2, (X_-10)**2 + Y_**2 - rr**2], [X_, Y_], dict=True)
check("practice[0]", len(crossings(6)) == 2, "r=6: two points")
check("practice[0]", len(crossings(5)) == 1, "r=5: one point (midpoint)")
check("practice[0]", len(crossings(4)) == 0, "r=4: none")
pts = crossings(6)
same("practice[0]", sorted([abs(p[Y_]) for p in pts]), [sqrt(11), sqrt(11)])
same("practice[0]", sqrt(6**2 - 5**2), sqrt(11)); near("practice[0]", sqrt(11), 3.3, 0.01)
# practice[1]
same("practice[1]", Rational(60, 4), 15); same("practice[1]", Rational(90, 2), 45); same("practice[1]", 60 + 15, 75)
c = symbols('c')
same("practice[1]", simplify(8*cos(pi/9)**3 - 6*cos(pi/9) - 1), 0)
check("practice[1]", Poly(8*c**3 - 6*c - 1, c).is_irreducible, "irreducible over Q")
check("practice[1]", all((8*q**3 - 6*q - 1) != 0 for q in [R(s*n, dd) for s in (1, -1) for n in (1,) for dd in (1, 2, 4, 8)]), "no rational roots")
# practice[2]
Cs = solve([X_**2 + Y_**2 - 36, (X_-6)**2 + Y_**2 - 36], [X_, Y_], dict=True)
same("practice[2]", sorted([(p[X_], p[Y_]) for p in Cs], key=lambda t: t[1]), [(3, -3*sqrt(3)), (3, 3*sqrt(3))])
same("practice[2]", dist((0, 0), (3, 3*sqrt(3))), 6); same("practice[2]", dist((6, 0), (3, 3*sqrt(3))), 6)
near("practice[2]", 3*sqrt(3), 5.2, 0.01)
# practice[3]
same("practice[3]", expand((x - 1)**2 + (x - 2 - 7)**2 - 64), 2*(x**2 - 10*x + 9))
solves("practice[3]", Eq(x**2 - 10*x + 9, 0), x, {1, 9})
Xp, Yp = (1, 1 - 2), (9, 9 - 2)
same("practice[3]", [Xp, Yp], [(1, -1), (9, 7)])
P = (1, 7)
same("practice[3]", [dist(P, Xp), dist(P, Yp)], [8, 8])
F = (R(Xp[0]+Yp[0], 2), R(Xp[1]+Yp[1], 2)); same("practice[3]", list(F), [5, 3])
check("practice[3]", F[1] == F[0] - 2, "F on line")
same("practice[3]", R(F[1]-P[1], F[0]-P[0]), -1)
same("practice[3]", dist(P, F), 4*sqrt(2)); near("practice[3]", 4*sqrt(2), 5.7, 0.01)
same("practice[3]", Abs(1 - 7 - 2)/sqrt(2), 4*sqrt(2))
