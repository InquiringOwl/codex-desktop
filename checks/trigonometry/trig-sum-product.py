# content: b720d6996b88
# trig-sum-product: Product-to-Sum & Sum-to-Product Formulas
from trig import *

BETAS = [pi/7, Rational(2, 3), -pi/5]
def id2(L, R):
    """identity in two angles a, b: symbolic zero, plus identity() in a = x for several fixed b."""
    sym = simplify(expand_trig(L - R)) == 0
    return sym and all(identity(L.subs({a: x, b: v}), R.subs({a: x, b: v})) for v in BETAS)
h = Rational(1, 2)
# formal: product-to-sum (α = a, β = b)
check("formal", id2(sin(a)*cos(b), h*(sin(a + b) + sin(a - b))), "sin α cos β")
check("formal", id2(cos(a)*sin(b), h*(sin(a + b) - sin(a - b))), "cos α sin β")
check("formal", id2(cos(a)*cos(b), h*(cos(a + b) + cos(a - b))), "cos α cos β")
check("formal", id2(sin(a)*sin(b), h*(cos(a - b) - cos(a + b))), "sin α sin β")
# sum-to-product
P, M = (a + b)/2, (a - b)/2
check("hero", id2(sin(a) + sin(b), 2*sin(P)*cos(M)), "sin a + sin b")
check("formal", id2(sin(a) - sin(b), 2*cos(P)*sin(M)), "sin a − sin b")
check("formal", id2(cos(a) + cos(b), 2*cos(P)*cos(M)), "cos a + cos b")
check("formal", id2(cos(a) - cos(b), -2*sin(P)*sin(M)), "cos a − cos b")
# plain: adding the two sine formulas
check("plain", id2((sin(a)*cos(b) + cos(a)*sin(b)) + (sin(a)*cos(b) - cos(a)*sin(b)), 2*sin(a)*cos(b)), "terms cancel")
check("plain", simplify(((a + b) + (a - b))/2 - a) == 0 and simplify(((a + b) - (a - b))/2 - b) == 0, "renaming")
# beats: sin 2πf1 t + sin 2πf2 t = 2 cos(π(f1 − f2)t) sin(π(f1 + f2)t)
f1, f2 = symbols('f1 f2', positive=True)
check("formal", simplify(expand_trig(sin(2*pi*f1*t) + sin(2*pi*f2*t) - 2*cos(pi*(f1 - f2)*t)*sin(pi*(f1 + f2)*t))) == 0
      or all(abs(float((sin(2*pi*f1*t) + sin(2*pi*f2*t) - 2*cos(pi*(f1 - f2)*t)*sin(pi*(f1 + f2)*t)).subs({f1: p, f2: q, t: s}))) < 1e-9
             for p, q, s in [(440, 444, 0.0123), (10, 11, 0.37), (3.5, 7, 1.9)]), "beats identity")
# |2cos(π·4·t)| has period 1/4 s → 4 beats per second
env = Abs(2*cos(pi*4*t))
check("formal", all(abs(float(env.subs(t, s) - env.subs(t, s + Rational(1, 4)))) < 1e-12 for s in [0.03, 0.11, 0.2]) and abs(float(env.subs(t, Rational(1, 8)))) < 1e-12, "440 and 444 Hz: 4 beats per second")
check("mistakes", abs(float(2*cos(2*pi*2*Rational(1, 8)))) < 1e-12 and abs(float(cos(pi*4*t).subs(t, Rational(1, 2)) - 1)) < 1e-12, "envelope cos(2π·2t) has frequency 2 Hz")
# steps: sin 75° cos 15° ≈ 0.933
near("steps", float(sin(deg(75))*cos(deg(15))), 0.933)

# example: sin 75° + sin 15°
same("example", (75 + 15)/2, 45); same("example", (75 - 15)/2, 30)
same("example", 2*sin(deg(45))*cos(deg(30)), sqrt(6)/2)
check("example", simplify(sin(deg(75)) + sin(deg(15)) - sqrt(6)/2) == 0, "sin 75° + sin 15° = √6/2")
near("example", float(sqrt(6)/2), 1.2247)

# mistakes
check("mistakes", not id2(sin(a) + sin(b), sin(a + b)), "sin a + sin b ≠ sin(a + b)")
same("mistakes", sin(pi/2) + sin(pi/2), 2); same("mistakes", sin(pi), 0)
check("mistakes", not id2(sin(a)*cos(b), sin(a + b) + sin(a - b)), "missing ½ fails")
check("mistakes", not id2(sin(a)*sin(b), h*(cos(a + b) - cos(a - b))), "wrong order fails")
same("mistakes", h*(cos(0) - cos(pi)), 1)

# practice
check("practice[0]", identity(sin(4*x)*cos(2*x), h*(sin(6*x) + sin(2*x))), "sin 4x cos 2x")
same("practice[1]", h*(cos(deg(90)) + cos(deg(60))), Rational(1, 4)); check("practice[1]", simplify(cos(deg(75))*cos(deg(15)) - Rational(1, 4)) == 0, "cos 75° cos 15°")
check("practice[2]", identity(cos(7*x) - cos(3*x), -2*sin(5*x)*sin(2*x)), "cos 7x − cos 3x")
check("practice[3]", identity(sin(3*x) + sin(x), 2*sin(2*x)*cos(x)) and identity(cos(3*x) + cos(x), 2*cos(2*x)*cos(x)), "top and bottom")
check("practice[3]", identity((sin(3*x) + sin(x))/(cos(3*x) + cos(x)), tan(2*x)), "identity")
check("why", identity(sin(3*x)*cos(x), h*(sin(4*x) + sin(2*x))), "sin 3x cos x")

# lab: derive graph (α = 3x, β = x) and the evaluate cases
check("lab", identity(sin(4*x) + sin(2*x), 2*sin(3*x)*cos(x)), "sin 4x + sin 2x = 2 sin 3x cos x")
for e, want in [(sin(deg(75))*cos(deg(15)), (2 + sqrt(3))/4), (cos(deg(75))*cos(deg(15)), Rational(1, 4)),
                (sin(deg(105)) + sin(deg(15)), sqrt(6)/2), (cos(deg(105)) + cos(deg(15)), sqrt(2)/2)]:
    check("lab", simplify(e - want) == 0 and abs(float(e - want)) < 1e-12, f"{e} = {want}")
same("lab", h*(1 + sqrt(3)/2), (2 + sqrt(3))/4); same("lab", 2*sin(deg(60))*cos(deg(45)), sqrt(6)/2); same("lab", 2*cos(deg(60))*cos(deg(45)), sqrt(2)/2)
