# content: 05f7eeb5c795
# trig-any-angle: Trigonometric Functions of Any Angle
from trig import *

D = deg

# formal: the ratios do not depend on the point (k > 0 scaling) and agree with the unit circle
kk = Symbol('kk', positive=True)
check("formal", all(sixfrom(3, -7)[f] == sixfrom(3*5, -7*5)[f] for f in ('sin', 'cos', 'tan', 'csc', 'sec', 'cot')), "scaling invariance")
for th in [D(150), D(210), D(300), 5*pi/3, D(-45)]:
    p = (cos(th), sin(th))
    s = sixfrom(*p)
    for f in ('sin', 'cos', 'tan', 'csc', 'sec', 'cot'):
        same("formal", s[f], exact(f, th))
# formal: undefined values on the axes
for dd, und in [(90, {'tan', 'sec'}), (270, {'tan', 'sec'}), (0, {'cot', 'csc'}), (180, {'cot', 'csc'})]:
    for f in ('sin', 'cos', 'tan', 'csc', 'sec', 'cot'):
        check("formal", (exact(f, D(dd)) is None) == (f in und), f"{f} {dd}° undefined? {f in und}")
# formal: ASTC signs (sample one angle per quadrant)
pos = {1: {'sin', 'cos', 'tan', 'csc', 'sec', 'cot'}, 2: {'sin', 'csc'}, 3: {'tan', 'cot'}, 4: {'cos', 'sec'}}
for dd in (40, 130, 220, 310, 75, 165, 255, 345):
    q = quadrant(D(dd))
    for f in pos[1]:
        check("formal", (N(exact(f, D(dd))) > 0) == (f in pos[q]), f"sign of {f} {dd}° (Q{q})")
# formal: reference-angle formulas and the two examples
same("formal", ref_angle(D(120)), D(60))
same("formal", ref_angle(D(210)), D(30))
same("formal", ref_angle(D(300)), D(60))
same("formal", ref_angle(5*pi/3), pi/3)
same("formal", exact('cos', D(210)), -sqrt(3)/2)
same("formal", exact('cos', D(210)), -exact('cos', D(30)))
same("formal", exact('tan', 5*pi/3), -sqrt(3))
same("formal", exact('tan', 5*pi/3), -exact('tan', pi/3))
# formal: f(θ) = ±f(θ') for many angles, sign = quadrant sign
for dd in range(15, 360, 15):
    if dd % 90 == 0: continue
    r = ref_angle(D(dd))
    for f in ('sin', 'cos', 'tan', 'csc', 'sec', 'cot'):
        v, w = exact(f, D(dd)), exact(f, r)
        check("formal", simplify(abs(v) - w) == 0, f"|{f}({dd}°)| = {f}(ref)")

# example: tan θ = −2, sin θ > 0 → QII, point (−1, 2)
s = sixfrom(-1, 2)
same("example", s['tan'], -2)
check("example", s['sin'] > 0 and s['tan'] < 0 and s['cos'] < 0, "QII signs")
same("example", sqrt((-1)**2 + 2**2), sqrt(5))
same("example", s['sin'], 2*sqrt(5)/5)
same("example", 2/sqrt(5), 2*sqrt(5)/5)
same("example", s['csc'], sqrt(5)/2)
same("example", s['cos'], -sqrt(5)/5)
same("example", s['sec'], -sqrt(5))
same("example", s['cot'], Rational(-1, 2))
# the only quadrant with tan < 0 and sin > 0
check("example", [q for q in (1, 2, 3, 4) if (q in (2, 4)) and (q in (1, 2))] == [2], "QII only")

# practice 1: (−8, 15)
s = sixfrom(-8, 15)
same("practice[0]", sqrt(64 + 225), 17)
for f, v in dict(sin=Rational(15, 17), cos=Rational(-8, 17), tan=Rational(-15, 8), csc=Rational(17, 15), sec=Rational(-17, 8), cot=Rational(-8, 15)).items():
    same("practice[0]", s[f], v)
# practice 2
same("practice[1]", ref_angle(D(300)), D(60)); same("practice[1]", quadrant(D(300)), 4)
same("practice[1]", exact('sin', D(300)), -sqrt(3)/2)
same("practice[1]", quadrant(5*pi/4), 3); same("practice[1]", ref_angle(5*pi/4), pi/4)
same("practice[1]", exact('cos', 5*pi/4), -sqrt(2)/2)
same("practice[1]", coterminal_in(-pi/6), 11*pi/6)
same("practice[1]", exact('tan', -pi/6), -sqrt(3)/3)
same("practice[1]", coterminal_in(D(495)), D(135)); same("practice[1]", ref_angle(D(495)), D(45))
same("practice[1]", exact('sec', D(495)), -sqrt(2))
# practice 3
check("practice[2]", exact('sec', D(90)) is None, "sec 90 undefined")
check("practice[2]", exact('tan', D(270)) is None, "tan 270 undefined")
check("practice[2]", exact('cot', D(180)) is None, "cot 180 undefined")
same("practice[2]", exact('csc', D(270)), -1)
# practice 4: cos = 2/3, tan < 0 → QIV, (2, −√5), r = 3
s = sixfrom(2, -sqrt(5))
same("practice[3]", sqrt(4 + 5), 3)
same("practice[3]", s['cos'], Rational(2, 3))
for f, v in dict(sin=-sqrt(5)/3, tan=-sqrt(5)/2, csc=-3*sqrt(5)/5, sec=Rational(3, 2), cot=-2*sqrt(5)/5).items():
    same("practice[3]", s[f], v)

# mistakes
same("mistakes", ref_angle(D(120)), D(60))
same("mistakes", exact('cos', D(150)), -sqrt(3)/2)
same("mistakes", sqrt(9 + 16), 5)
check("mistakes", exact('tan', D(90)) is None and exact('cot', D(90)) == 0, "tan 90 undefined, cot 90 = 0")
