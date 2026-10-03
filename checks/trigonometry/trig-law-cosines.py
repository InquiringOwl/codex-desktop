# content: 49a1515a26fa
# trig-law-cosines: The Law of Cosines
from trig import *
import math

D = lambda dd: deg(dd)

def rnd(label, got, page, nd=None):
    """rounded value on the page: the computed value rounds to exactly the page's digits"""
    v = float(N(got)); nd = nd if nd is not None else (len(str(page).split('.')[1]) if '.' in str(page) else 0)
    near(label, v, page, rel=max(0.005, 0.5 * 10**-nd / abs(page) * 1.0001))
    check(label, round(v, nd) == page, f"computed {v}, page says {page}")
a_, b_, C_ = symbols('a_ b_ C_', positive=True)

# formal: coordinate proof  c² = (b cos C − a)² + (b sin C)² = a² + b² − 2ab cos C
same("formal", simplify(expand((b_*cos(C_) - a_)**2 + (b_*sin(C_))**2) - (a_**2 + b_**2 - 2*a_*b_*cos(C_))), 0)
# solved for cos C
cc = solve(Eq(Symbol('c2'), a_**2 + b_**2 - 2*a_*b_*Symbol('cC')), Symbol('cC'))[0]
same("formal", simplify(cc - (a_**2 + b_**2 - Symbol('c2'))/(2*a_*b_)), 0)
# C = 90° → Pythagorean
same("formal", (a_**2 + b_**2 - 2*a_*b_*cos(D(90))), a_**2 + b_**2)
# sign of cos C: acute / right / obtuse
check("formal", N(cos(D(60))) > 0 and cos(D(90)) == 0 and N(cos(D(120))) < 0, "cos sign")
# against the independent solver for many triangles (acute, obtuse)
for (p, q, g) in [(3, 4, 40), (5, 7, 120), (8, 2, 150), (6, 6, 90)]:
    t = solve_triangle(a=p, b=q, C=g)[0]
    check("formal", abs(t['c']**2 - (p*p + q*q - 2*p*q*math.cos(math.radians(g)))) < 1e-9, "law of cosines matches solver")
# claim: only the largest angle can be obtuse; asin returns ≤ 90°
check("formal", all(sum(1 for k in 'ABC' if t[k] >= 90) <= 1 for t in [solve_triangle(a=7, b=9, c=14)[0], solve_triangle(a=4, b=5, c=6)[0]]), "at most one obtuse")
check("formal", N(asin(sin(D(121)))) < N(pi/2) and abs(N(acos(cos(D(121)))) - N(D(121))) < 1e-12, "acos keeps obtuse, asin does not")

# example: 15 kn on 050°, 20 kn on 160°, 2 hours
same("example", [15*2, 20*2, 160 - 50], [30, 40, 110])
# independent: positions (east, north)
P1 = (30*math.sin(math.radians(50)), 30*math.cos(math.radians(50))); P2 = (40*math.sin(math.radians(160)), 40*math.cos(math.radians(160)))
dist = math.hypot(P1[0] - P2[0], P1[1] - P2[1])
rnd("example", -2400*cos(D(110)), 820.85)
rnd("example", 2500 - 2400*cos(D(110)), 3320.85)
rnd("example", dist, 57.6)
t = solve_triangle(a=30, b=40, C=110)[0]
rnd("example", t['c'], 57.6)
rnd("example", 30*sin(D(110))/t['c'], 0.4892)
rnd("example", t['A'], 29.3); rnd("example", t['B'], 40.7)
# angle at the 20-knot ship (A) from coordinates: between vectors A→port and A→B
vA0 = (-P2[0], -P2[1]); vAB = (P1[0] - P2[0], P1[1] - P2[1])
angA = math.degrees(math.acos((vA0[0]*vAB[0] + vA0[1]*vAB[1]) / (math.hypot(*vA0) * math.hypot(*vAB))))
rnd("example", angA, 29.3)

# practice[0]
same("practice[0]", 25 + 49 - 2*5*7*cos(D(60)), 39)
rnd("practice[0]", sqrt(39), 6.2)
rnd("practice[0]", solve_triangle(a=5, b=7, C=60)[0]['c'], 6.2)

# practice[1]: SSS 4, 5, 6
same("practice[1]", Rational(16 + 25 - 36, 40), Rational(1, 8))
same("practice[1]", Rational(25 + 36 - 16, 60), Rational(3, 4))
t = solve_triangle(a=4, b=5, c=6)[0]
rnd("practice[1]", t['C'], 82.8); rnd("practice[1]", t['A'], 41.4); rnd("practice[1]", t['B'], 55.8)
rnd("practice[1]", to_deg(acos(Rational(1, 8))), 82.8)

# practice[2]: lake SAS 412, 538, 72.4°
v = 412**2 + 538**2 - 2*412*538*math.cos(math.radians(72.4))
rnd("practice[2]", v, 325143.8)
rnd("practice[2]", math.sqrt(v), 570.2)
rnd("practice[2]", solve_triangle(a=412, b=538, C=72.4)[0]['c'], 570.2)

# practice[3]: 7, 9, 14
same("practice[3]", Rational(49 + 81 - 196, 126), Rational(-11, 21))
same("practice[3]", Rational(81 + 196 - 49, 252), Rational(19, 21))
t = solve_triangle(a=7, b=9, c=14)[0]
rnd("practice[3]", t['C'], 121.6); rnd("practice[3]", t['A'], 25.2); rnd("practice[3]", t['B'], 33.2)
check("practice[3]", t['C'] > 90, "largest angle obtuse")
