# content: 716c1ded3631
# trig-double-half: Double-Angle, Half-Angle & Power-Reducing Formulas
from trig import *

# hero / formal: double-angle
check("hero", identity(sin(2*x), 2*sin(x)*cos(x)), "sin 2θ")
for e in [cos(x)**2 - sin(x)**2, 2*cos(x)**2 - 1, 1 - 2*sin(x)**2]:
    check("formal", identity(cos(2*x), e), f"cos 2θ = {e}")
check("formal", identity(tan(2*x), 2*tan(x)/(1 - tan(x)**2)), "tan 2θ")
check("formal", identity(sin(x + x), sin(x)*cos(x) + cos(x)*sin(x)), "sum formula with β = α")
# power-reducing
check("formal", identity(sin(x)**2, (1 - cos(2*x))/2), "sin²")
check("formal", identity(cos(x)**2, (1 + cos(2*x))/2), "cos²")
check("formal", identity(tan(x)**2, (1 - cos(2*x))/(1 + cos(2*x))), "tan²")
# half-angle: squares are identities; sign = sign in the quadrant of θ/2 (sampled on a grid of θ)
check("formal", identity(sin(x/2)**2, (1 - cos(x))/2) and identity(cos(x/2)**2, (1 + cos(x))/2), "half-angle squares")
# with θ = 2x (sympy simplifies tan(x/2) poorly)
check("formal", identity(tan(x)**2, (1 - cos(2*x))/(1 + cos(2*x))), "tan² half")
check("formal", identity(tan(x), sin(2*x)/(1 + cos(2*x))) and identity(tan(x), (1 - cos(2*x))/sin(2*x)), "tan half, no sign")
import math
ok = True
for kk in range(1, 720):
    t = kk * math.pi / 180 * 1.0 + 0.001
    h = t / 2; qh = 1 + int((h % (2*math.pi)) // (math.pi/2))
    ssign = 1 if qh in (1, 2) else -1; csign = 1 if qh in (1, 4) else -1
    ok &= abs(math.sin(h) - ssign*math.sqrt((1 - math.cos(t))/2)) < 1e-9 and abs(math.cos(h) - csign*math.sqrt((1 + math.cos(t))/2)) < 1e-9
    ok &= (math.sin(t) * math.tan(h) >= 0)
check("formal", ok, "sign chosen by the quadrant of θ/2; sin θ has the sign of tan(θ/2)")
s225 = sqrt(2 - sqrt(2))/2
same("formal", exact('sin', pi/8), radsimp(s225)); check("formal", simplify(sqrt((1 - cos(pi/4))/2) - s225) == 0, "sin 22.5° via half-angle")
check("formal", identity(sin(pi - 2*x), sin(2*x)), "sin(180° − 2θ) = sin 2θ")
R_ = lambda d: 20**2*math.sin(math.radians(2*d))/9.8
near("formal", R_(45), 40.8); near("formal", R_(30), 35.3); near("formal", R_(60), 35.3)
check("formal", max(range(1, 90), key=R_) == 45, "maximum range at 45°")
# plain
near("plain", float(sin(pi/3)), 0.866); same("plain", 2*sin(pi/6), 1)
check("plain", not identity(sin(2*x), 2*sin(x)), "sin 2x ≠ 2 sin x")

# example: cos θ = −7/25, 180° < θ < 270°
ct = Rational(-7, 25); T = pi + acos(-ct)
check("example", pi < T < 3*pi/2, "θ in QIII")
st = -sqrt(1 - ct**2); same("example", st, Rational(-24, 25)); same("example", sin(T), st)
same("example", 2*st*ct, Rational(336, 625)); same("example", simplify(sin(2*T)), Rational(336, 625))
same("example", 2*ct**2, Rational(98, 625)); same("example", 2*ct**2 - 1, Rational(-527, 625)); same("example", simplify(cos(2*T)), Rational(-527, 625))
check("example", pi/2 < T/2 < 3*pi/4, "θ/2 in (90°, 135°)")
same("example", (1 - ct)/2, Rational(16, 25)); same("example", sqrt((1 - ct)/2), Rational(4, 5)); check("example", abs(float(sin(T/2)) - 0.8) < 1e-12, "sin(θ/2) numerically 4/5")
same("example", (1 + ct)/2, Rational(9, 25)); same("example", -sqrt((1 + ct)/2), Rational(-3, 5)); check("example", abs(float(cos(T/2)) + 0.6) < 1e-12, "cos(θ/2) numerically −3/5")
same("example", Rational(9, 25) - Rational(16, 25), ct)

# mistakes
same("mistakes", sin(pi), 0); same("mistakes", 2*sin(pi/2), 2)
check("mistakes", not identity(sin(x/2), sin(x)/2), "sin(θ/2) ≠ ½ sin θ"); same("mistakes", sin(pi/2), 1); same("mistakes", sin(pi)/2, 0)

# practice
s, cc = Rational(5, 13), sqrt(1 - Rational(25, 169))
same("practice[0]", cc, Rational(12, 13)); same("practice[0]", 2*s*cc, Rational(120, 169)); same("practice[0]", 1 - 2*s**2, Rational(119, 169))
same("practice[1]", radsimp(sqrt((1 - sqrt(2)/2)/2)), radsimp(s225)); same("practice[1]", simplify((1 - sqrt(2)/2)/2 - (2 - sqrt(2))/4), 0)
c165 = -sqrt(2 + sqrt(3))/2
check("practice[2]", simplify(-sqrt((1 + cos(deg(330)))/2) - c165) == 0, "half-angle with −")
check("practice[2]", simplify(cos(deg(165)) - c165) == 0 and simplify(c165 + (sqrt(6) + sqrt(2))/4) == 0, "cos 165°")
for e in [((1 - cos(2*x))/2)**2, (1 - 2*cos(2*x) + cos(2*x)**2)/4, (1 - 2*cos(2*x) + (1 + cos(4*x))/2)/4, (3 - 4*cos(2*x) + cos(4*x))/8]:
    check("practice[3]", identity(sin(x)**4, e), f"sin⁴ x = {e}")

# lab: half-angle cases (θ, wanted value) and the double-angle graph point
for fn, T_, want in [('sin', deg(45), s225), ('cos', deg(330), c165), ('sin', pi + acos(Rational(7, 25)), Rational(4, 5)),
                     ('cos', 2*pi - acos(Rational(1, 8)), Rational(-3, 4)), ('sin', deg(225), sqrt(2 + sqrt(2))/2)]:
    f = sin if fn == 'sin' else cos
    check("lab", abs(float(f(T_/2) - want)) < 1e-12, f"{fn}({T_}/2) = {want}")
same("lab", sqrt((1 + Rational(1, 8))/2), Rational(3, 4))
check("lab", simplify(sqrt((1 + sqrt(2)/2)/2) - sqrt(2 + sqrt(2))/2) == 0, "sin 112.5° simplified")
