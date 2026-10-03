# content: 5358730673aa
# trig-vectors: Vectors: Magnitude, Direction & Components
from trig import *
import math

def rnd(label, got, page, nd):
    v = float(N(got)); check(label, round(v, nd) == page, f"computed {v}, page says {page}")

def quad_rule(a, b):
    """the page's quadrant rule for the direction angle, in degrees (floats)"""
    if a == 0: return 90.0 if b > 0 else 270.0
    t = math.degrees(math.atan(b / a))
    if a < 0: return t + 180
    return t + 360 if t < 0 else t

# formal: quadrant rule agrees with atan2 in every quadrant and on the axes
for v in [(3, 4), (-4, 3), (-6, -8), (5, -12), (0, 2), (0, -2), (-3, 0), (2, 0)]:
    near("formal", quad_rule(*v), float(N(vdir(v))))
# formal: ‖kv‖ = |k|‖v‖, unit vector has magnitude 1 and equals ⟨cos θ, sin θ⟩
kk, A, B = symbols('kk A B', real=True)
same("formal", simplify(sqrt((kk*A)**2 + (kk*B)**2) - Abs(kk)*sqrt(A**2 + B**2)), 0)
for v in [(-6, -8), (-4, 3), (5, -12), (1, 1)]:
    m = vmag(v); same("formal", simplify((v[0]/m)**2 + (v[1]/m)**2), 1)
    t = vdir(v); same("formal", simplify(v[0]/m - cos(deg(t))), 0); same("formal", simplify(v[1]/m - sin(deg(t))), 0)
# formal: a = ‖v‖cos θ, b = ‖v‖sin θ recovers the vector
for (m, t) in [(10, 233.13010235415598), (5, 143.13010235415598)]:
    x, y = from_polar_deg(m, t); near("formal", float(N(x)) , float(N(m*cos(deg(t)))))

# example
P0, Q0 = (4, 1), (-2, -7)
v = (Q0[0] - P0[0], Q0[1] - P0[1]); same("example", v, (-6, -8))
same("example", vmag(v), 10)
rnd("example", atan(Rational(4, 3))*180/pi, 53.13, 2)
check("example", 180 < float(N(vdir(v))) < 270, "QIII")
check("example", 0 < float(N(atan(Rational(4, 3))*180/pi)) < 90, "calculator angle in QI")
rnd("example", vdir(v), 233.13, 2); rnd("example", vdir(v), 233.1, 1)
same("example", (Rational(v[0], 10), Rational(v[1], 10)), (Rational(-3, 5), Rational(-4, 5)))
same("example", Rational(9, 25) + Rational(16, 25), 1)

# practice 1
w = (4 - 1, 6 - 2); same("practice[0]", w, (3, 4)); same("practice[0]", vmag(w), 5)
# practice 2
u, vv = (3, -2), (-1, 5)
same("practice[1]", (2*u[0] - 3*vv[0], 2*u[1] - 3*vv[1]), (9, -19))
same("practice[1]", vmag((u[0] + vv[0], u[1] + vv[1])), sqrt(13))
# practice 3
x, y = from_polar_deg(20, 210)
same("practice[2]", (simplify(x), simplify(y)), (-10*sqrt(3), -10))
rnd("practice[2]", x, -17.32, 2)
# practice 4
v4 = (-4, 3)
rnd("practice[3]", atan(Rational(3, -4))*180/pi, -36.87, 2)
rnd("practice[3]", vdir(v4), 143.1, 1); same("practice[3]", vmag(v4), 5)
same("practice[3]", (Rational(-4, 5), Rational(3, 5)), (v4[0]/vmag(v4), v4[1]/vmag(v4)))
same("practice[3]", (15*Rational(-4, 5), 15*Rational(3, 5)), (-12, 9))

# mistakes
rnd("mistakes", vdir((-4, 3)), 143.1, 1)
same("mistakes", (4 - 1, 2 - 5), (3, -3)); same("mistakes", vmag((3, -4)), 5)
same("mistakes", (-2*3, -2*-1), (-6, 2))
# plain: 3 east 4 north is 5 away (life)
same("life", vmag((3, 4)), 5)
