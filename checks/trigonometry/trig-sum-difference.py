# content: 5f556c8eba02
# trig-sum-difference: Sum & Difference Formulas
from trig import *

BETAS = [pi/7, Rational(2, 3), -pi/5]   # β fixed at several values; identity() then checks in x = α
def id2(L, R):
    """identity in two angles a (α) and b (β): symbolic zero, plus identity() in α for several fixed β."""
    sym = simplify(expand_trig(L - R)) == 0
    return sym and all(identity(L.subs({a: x, b: v}), R.subs({a: x, b: v})) for v in BETAS)

# hero / formal: the five formulas
check("hero", id2(cos(a - b), cos(a)*cos(b) + sin(a)*sin(b)), "cos(α − β)")
check("formal", id2(cos(a + b), cos(a)*cos(b) - sin(a)*sin(b)), "cos(α + β)")
check("formal", id2(sin(a + b), sin(a)*cos(b) + cos(a)*sin(b)), "sin(α + β)")
check("formal", id2(sin(a - b), sin(a)*cos(b) - cos(a)*sin(b)), "sin(α − β)")
check("formal", id2(tan(a + b), (tan(a) + tan(b))/(1 - tan(a)*tan(b))), "tan(α + β)")
check("formal", id2(tan(a - b), (tan(a) - tan(b))/(1 + tan(a)*tan(b))), "tan(α − β)")
# proof: the two squared chord lengths
AB2 = (cos(a) - cos(b))**2 + (sin(a) - sin(b))**2
PQ2 = (cos(a - b) - 1)**2 + sin(a - b)**2
check("formal", id2(AB2, 2 - 2*(cos(a)*cos(b) + sin(a)*sin(b))), "AB² expanded")
check("formal", identity(PQ2.subs(a - b, x), 2 - 2*cos(x)), "PQ² expanded")
# rotation by −β keeps the chord: rotate A and B, compare with P and Q
rot = lambda px, py: (px*cos(-b) - py*sin(-b), px*sin(-b) + py*cos(-b))
Pr, Qr = rot(cos(a), sin(a)), rot(cos(b), sin(b))
check("formal", id2(Pr[0], cos(a - b)) and id2(Pr[1], sin(a - b)), "rotation moves A to P(α − β)")
check("formal", simplify(Qr[0] - 1) == 0 and simplify(Qr[1]) == 0, "rotation moves B to (1, 0)")
check("formal", identity(cos(pi/2 - x), sin(x)) and identity(sin(pi/2 - x), cos(x)), "cofunction identities")
check("formal", id2(sin(a + b), cos((pi/2 - a) - b)), "sin(α + β) = cos((π/2 − α) − β)")
s6p2 = (sqrt(6) + sqrt(2))/4; s6m2 = (sqrt(6) - sqrt(2))/4
same("formal", exact('cos', deg(15)), radsimp(s6p2)); same("formal", exact('sin', deg(105)), radsimp(s6p2))
same("formal", exact('tan', 7*pi/12), -2 - sqrt(3))
check("formal", simplify(cos(deg(45))*cos(deg(30)) + sin(deg(45))*sin(deg(30)) - s6p2) == 0, "cos 15° via 45° − 30°")
check("formal", simplify(sin(deg(60))*cos(deg(45)) + cos(deg(60))*sin(deg(45)) - s6p2) == 0, "sin 105° via 60° + 45°")
check("plain", cos(deg(120)) == Rational(-1, 2) and cos(deg(60)) + cos(deg(60)) == 1, "cos 120° vs cos 60° + cos 60°")
check("plain", not id2(cos(a + b), cos(a) + cos(b)), "cosine does not distribute")
# steps: √2/2 · √3/2 = √6/4 and cos 45° ≈ 0.707
same("steps", sqrt(2)/2*sqrt(3)/2, sqrt(6)/4); near("steps", float(cos(pi/4)), 0.707)

# example: sin α = 3/5 (QII), cos β = −5/13 (QIII)
sa, cb = Rational(3, 5), Rational(-5, 13)
ca, sb = -sqrt(1 - sa**2), -sqrt(1 - cb**2)
same("example", ca, Rational(-4, 5)); same("example", sb, Rational(-12, 13))
A_ = pi - asin(sa); B_ = pi + acos(-cb)          # actual angles in QII and QIII
same("example", cos(A_), ca); same("example", sin(B_), sb)
S = sa*cb + ca*sb; Cc = ca*cb - sa*sb
same("example", sa*cb, Rational(-15, 65)); same("example", ca*sb, Rational(48, 65))
same("example", S, Rational(33, 65)); same("example", ca*cb, Rational(20, 65)); same("example", -sa*sb, Rational(36, 65))
same("example", Cc, Rational(56, 65)); same("example", S/Cc, Rational(33, 56))
same("example", simplify(sin(A_ + B_)), Rational(33, 65)); same("example", simplify(cos(A_ + B_)), Rational(56, 65))
same("example", S**2 + Cc**2, 1)
tot = float(A_ + B_) * 180 / float(pi)
check("example", 360 < tot < 450, f"α + β ≈ {tot:.2f}° is between 360° and 450°")

# mistakes
near("mistakes", float(cos(pi/4) + cos(pi/6)), 1.57); near("mistakes", float(cos(deg(75))), 0.259)
check("mistakes", not id2(cos(a - b), cos(a)*cos(b) - sin(a)*sin(b)), "wrong sign fails")
check("mistakes", not id2(tan(a + b), (tan(a) + tan(b))/(1 + tan(a)*tan(b))), "wrong tan denominator fails")

# practice
same("practice[0]", radsimp(sqrt(2)/2*sqrt(3)/2 - sqrt(2)/2*Rational(1, 2)), radsimp(s6m2)); same("practice[0]", exact('cos', deg(75)), radsimp(s6m2))
P1 = sin(deg(40))*cos(deg(10)) - cos(deg(40))*sin(deg(10))
check("practice[1]", id2(sin(a)*cos(b) - cos(a)*sin(b), sin(a - b)), "difference formula")
same("practice[1]", sin(deg(40) - deg(10)), Rational(1, 2)); near("practice[1]", float(P1), 0.5)
t = (sqrt(3) + 1)/(1 - sqrt(3))
same("practice[2]", expand((sqrt(3) + 1)*(1 + sqrt(3))), 4 + 2*sqrt(3)); same("practice[2]", expand((1 - sqrt(3))*(1 + sqrt(3))), -2)
same("practice[2]", radsimp(t), -2 - sqrt(3)); same("practice[2]", exact('tan', 7*pi/12), -2 - sqrt(3))
lhs = cos(a + b)*cos(a - b)
check("practice[3]", id2(lhs, (cos(a)*cos(b))**2 - (sin(a)*sin(b))**2), "difference of squares")
check("practice[3]", id2(lhs, cos(a)**2*(1 - sin(b)**2) - (1 - cos(a)**2)*sin(b)**2), "Pythagorean")
check("practice[3]", id2(lhs, cos(a)**2 - sin(b)**2), "identity")

# lab: exact cases and given-value problems
for fn, ang, want in [('cos', 75, s6m2), ('sin', 15, s6m2), ('sin', 105, s6p2), ('cos', 15, s6p2)]:
    same("lab", exact(fn, deg(ang)), radsimp(want))
for (fa, va, qa), (fb, vb, qb), op, ws, wc in [
        (('sin', Rational(3, 5), 2), ('cos', Rational(-5, 13), 3), 1, Rational(33, 65), Rational(56, 65)),
        (('cos', Rational(8, 17), 4), ('sin', Rational(3, 5), 1), -1, Rational(-84, 85), Rational(-13, 85)),
        (('sin', Rational(7, 25), 2), ('cos', Rational(8, 17), 4), 1, Rational(416, 425), Rational(-87, 425))]:
    def ang(f, v, q):
        base = asin(v) if f == 'sin' else acos(v)
        cands = [base, pi - base, -base, 2*pi - base, pi + base]
        for t in cands:
            tt = float(t) % (2*float(pi))
            if 1 + int(tt // (float(pi)/2)) == q and abs(float((sin if f == 'sin' else cos)(t) - v)) < 1e-12: return t
    A1, B1 = ang(fa, va, qa), ang(fb, vb, qb)
    check("lab", A1 is not None and B1 is not None, f"angles found for {fa}={va}, {fb}={vb}")
    same("lab", simplify(sin(A1 + op*B1)), ws); same("lab", simplify(cos(A1 + op*B1)), wc)
