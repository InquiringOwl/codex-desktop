# content: 2aab71eb9278
# trig-law-sines: The Law of Sines
from trig import *
import math

D = lambda dd: deg(dd)

def rnd(label, got, page, nd=None):
    """rounded value on the page: the computed value rounds to exactly the page's digits"""
    v = float(N(got)); nd = nd if nd is not None else (len(str(page).split('.')[1]) if '.' in str(page) else 0)
    near(label, v, page, rel=max(0.005, 0.5 * 10**-nd / abs(page) * 1.0001))
    check(label, round(v, nd) == page, f"computed {v}, page says {page}")
Al, Bt = symbols('Al Bt', positive=True)

# formal: altitude proof, acute and obtuse cases (h = b sin A = a sin B), sin(180° − A) = sin A
same("formal", simplify(sin(pi - Al) - sin(Al)), 0)
for tri in [dict(A=50, B=70, c=9), dict(A=120, B=25, c=7), dict(A=90, B=30, c=5)]:
    t = solve_triangle(**tri)[0]
    # coordinates: A at origin, B at (c, 0), C = (b cos A, b sin A); altitude to line AB is the y-coordinate
    Cx, Cy = t['b'] * math.cos(math.radians(t['A'])), t['b'] * math.sin(math.radians(t['A']))
    check("formal", abs(Cy - t['a'] * math.sin(math.radians(t['B']))) < 1e-9, "h = a sin B")
    check("formal", (Cx < 0) == (t['A'] > 90), "foot outside AB exactly when A is obtuse")
    r = [t[s] / math.sin(math.radians(t[s.upper()])) for s in 'abc']
    check("formal", max(r) - min(r) < 1e-9, "a/sinA = b/sinB = c/sinC")
    # common ratio = 2R (circumradius R = abc / (4K))
    K = 0.5 * t['b'] * t['c'] * math.sin(math.radians(t['A']))
    check("formal", abs(r[0] - 2 * t['a'] * t['b'] * t['c'] / (4 * K)) < 1e-9, "ratio = 2R")
# formal: bearings N 35° E = 035°, S 20° E = 160°, N 70° W = 290°
quad = lambda ns, d, ew: {('N', 'E'): d, ('S', 'E'): 180 - d, ('S', 'W'): 180 + d, ('N', 'W'): 360 - d}[(ns, ew)]
same("formal", [quad('N', 35, 'E'), quad('S', 20, 'E'), quad('N', 70, 'W')], [35, 160, 290])
# formal: AAS/ASA unique; SAS/SSS have no known pair (claim of method, spot check: AAS gives exactly one triangle)
check("formal", len(solve_triangle(A=40, B=60, a=10)) == 1 and len(solve_triangle(A=40, C=60, b=10)) == 1, "AAS, ASA unique")
check("formal", ssa_count(3, 10, 40) == 0 and ssa_count(8, 10, 40) == 2 and ssa_count(12, 10, 40) == 1, "SSA gives 0, 1 or 2")
check("formal", solve_triangle(A=100, B=80, a=5) == [], "angles summing to 180° give no triangle")

# example: towers A, B 10.0 mi apart, B east; fire N 50° E from A, N 30° W from B
A_ = 90 - 50; B_ = 90 - 30
same("example", [A_, B_, 180 - A_ - B_], [40, 60, 80])
# independent: coordinates of F by intersecting the two sight lines
tA, tB = math.radians(90 - 50), math.radians(90 + 30)   # standard-position directions of the sight lines
# A=(0,0), B=(10,0): s*(cos tA, sin tA) = (10,0) + u*(cos tB, sin tB)
s_ = (10 * math.sin(tB)) / (math.cos(tA) * math.sin(tB) - math.sin(tA) * math.cos(tB))
Fx, Fy = s_ * math.cos(tA), s_ * math.sin(tA)
AF, BF = math.hypot(Fx, Fy), math.hypot(Fx - 10, Fy)
t = solve_triangle(A=40, B=60, c=10)[0]
check("example", abs(AF - t['b']) < 1e-9 and abs(BF - t['a']) < 1e-9, "law of sines agrees with coordinates")
rnd("example", 10 * sin(D(60)) / sin(D(80)), 8.8)
rnd("example", 10 * sin(D(40)) / sin(D(80)), 6.5)
rnd("example", AF, 8.8); rnd("example", BF, 6.5)

# practice[0]: AAS A=40, B=60, a=10
t = solve_triangle(A=40, B=60, a=10)[0]
same("practice[0]", t['C'], 80)
rnd("practice[0]", t['b'], 13.5); rnd("practice[0]", t['c'], 15.3)
rnd("practice[0]", 10 * sin(D(60)) / sin(D(40)), 13.5)

# practice[1]: ASA A=28, C=110, b=15
t = solve_triangle(A=28, C=110, b=15)[0]
same("practice[1]", t['B'], 42)
rnd("practice[1]", t['a'], 10.5); rnd("practice[1]", t['c'], 21.1)

# practice[2]: bearings 040° (to L) and 110° (A to B, 8.0 km); from B, L bears 340°
pt = lambda b, dist, o=(0, 0): (o[0] + dist * math.sin(math.radians(b)), o[1] + dist * math.cos(math.radians(b)))  # (east, north)
Bp = pt(110, 8)
# L on ray from A at 040° and ray from B at 340°: solve by intersection
e1 = (math.sin(math.radians(40)), math.cos(math.radians(40))); e2 = (math.sin(math.radians(340)), math.cos(math.radians(340)))
det = e1[0] * (-e2[1]) - e1[1] * (-e2[0])
s1 = (Bp[0] * (-e2[1]) - Bp[1] * (-e2[0])) / det
L = (s1 * e1[0], s1 * e1[1])
BL = math.hypot(L[0] - Bp[0], L[1] - Bp[1])
same("practice[2]", [110 - 40, 340 - (110 + 180), 180 - 70 - 50], [70, 50, 60])
t = solve_triangle(A=70, B=50, c=8)[0]
check("practice[2]", abs(t['a'] - BL) < 1e-9, "law of sines = coordinates")
rnd("practice[2]", BL, 8.7)

# practice[3]: elevations 22° and 35°, 200 m apart
h_, x_ = symbols('h_ x_', positive=True)
t35, t22 = N(tan(D(35)), 30), N(tan(D(22)), 30)   # numeric tangents: solve() with exact tan(7π/36) takes ~15 s
sol = solve([Eq(h_, x_ * t35), Eq(h_, (x_ + 200) * t22)], [h_, x_], dict=True)[0]
same("practice[3]", [180 - 35, 180 - 22 - 145], [145, 13])
BT = 200 * sin(D(22)) / sin(D(13))
rnd("practice[3]", BT, 333.06)
rnd("practice[3]", BT * sin(D(35)), 191.0)
rnd("practice[3]", sol[h_], 191.0)
