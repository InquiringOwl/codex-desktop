# content: adbcdbbeb6ea
# trig-equations: Solving Trigonometric Equations
from trig import *
import math

def rnd(label, got, page):
    v = float(N(got)); nd = len(str(page).split('.')[1]) if '.' in str(page) else 0
    check(label, round(v, nd) == page, f"computed {v}, page says {page}")

def general(sols, per, eq=None, var=x):
    """the page's general solution {s + per*n} equals every solution of eq in [−4π, 4π) (solved on [−5π, 5π) so no endpoint is lost)"""
    L, H = float(-4*pi) - 1e-9, float(4*pi) - 1e-9
    fam = sorted(float(N(s + per * n)) for s in sols for n in range(-12, 13) if L <= float(N(s + per * n)) < H)
    got = sorted(t for t in (float(N(r)) for r in trig_solutions(eq, var, -5*pi, 5*pi)) if L <= t < H)
    return len(fam) == len(got) and all(abs(a - b) < 1e-7 for a, b in zip(fam, got))

# hero / plain: 2 sin x − 1 = 0 on [0, 2π) and + 2πn
same("formal", trig_solutions(Eq(2*sin(x) - 1, 0), x), [pi/6, 5*pi/6])
check("formal", general([pi/6, 5*pi/6], 2*pi, eq=Eq(2*sin(x), 1)), "general solution of sin x = 1/2")
# formal: general forms for sin, cos, tan (spot values of k)
for kv in (Rational(1, 2), Rational(-3, 10), sqrt(3)/2, Rational(9, 10)):
    check("formal", general([asin(kv) % (2*pi), (pi - asin(kv)) % (2*pi)], 2*pi, eq=Eq(sin(x), kv)), f"sin x = {kv}")
    check("formal", general([acos(kv), (2*pi - acos(kv)) % (2*pi)], 2*pi, eq=Eq(cos(x), kv)), f"cos x = {kv}")
for kv in (Rational(1, 2), -2, 0, sqrt(3)):
    check("formal", general([atan(kv) % pi], pi, eq=Eq(tan(x), kv)), f"tan x = {kv}")
# counts on [0, 2π): none for |k| > 1, one at ±1, two for |k| < 1; tan always two
same("formal", [len(trig_solutions(Eq(sin(x), kv), x)) for kv in (Rational(3, 2), 1, -1, Rational(1, 3))], [0, 1, 1, 2])
same("formal", [len(trig_solutions(Eq(cos(x), kv), x)) for kv in (-2, 1, -1, Rational(-1, 3))], [0, 1, 1, 2])
same("formal", [len(trig_solutions(Eq(tan(x), kv), x)) for kv in (0, 5, -1)], [2, 2, 2])
# formal: tan x = −1 → 3π/4, 7π/4; 3π/4 + πn
same("formal", trig_solutions(Eq(tan(x), -1), x), [3*pi/4, 7*pi/4])
check("formal", general([3*pi/4], pi, eq=Eq(tan(x), -1)), "tan general")
# formal: quadrant placement of the reference angle α (sign of each function)
al = pi/5
same("formal", [sign(sin(t)) for t in (al, pi - al, pi + al, 2*pi - al)], [1, 1, -1, -1])
same("formal", [sin(pi - al) - sin(al), cos(2*pi - al) - cos(al)], [0, 0])

# example: 2cos²x − sin x − 1 = 0
E = 2*cos(x)**2 - sin(x) - 1
same("example", expand(E.subs(cos(x)**2, 1 - sin(x)**2)), expand(-(2*sin(x)**2 + sin(x) - 1)))
u = symbols('u')
same("example", factor(2*u**2 + u - 1), (2*u - 1)*(u + 1))
same("example", trig_solutions(Eq(sin(x), Rational(1, 2)), x), [pi/6, 5*pi/6])
same("example", trig_solutions(Eq(sin(x), -1), x), [3*pi/2])
same("example", trig_solutions(Eq(E, 0), x), [pi/6, 5*pi/6, 3*pi/2])
check("example", general([pi/6, 5*pi/6, 3*pi/2], 2*pi, eq=Eq(E, 0)), "general solution")

# mistakes: tan x sin x = sin x → 0, π/4, π, 5π/4 (dividing loses 0, π); tan x = 1 general π/4 + πn
M = tan(x)*sin(x) - sin(x)
cand = [S(0), pi/4, pi, 5*pi/4]
check("mistakes", all(simplify(M.subs(x, t)) == 0 for t in cand), "all four satisfy the original")
same("mistakes", trig_solutions(Eq(sin(x)*(tan(x) - 1), 0), x), cand)
check("mistakes", general([pi/4], pi, eq=Eq(tan(x), 1)), "tan x = 1: π/4 + πn")

# practice[0]: √2 cos x + 1 = 0
same("practice[0]", trig_solutions(Eq(sqrt(2)*cos(x) + 1, 0), x), [3*pi/4, 5*pi/4])
check("practice[0]", general([3*pi/4, 5*pi/4], 2*pi, eq=Eq(sqrt(2)*cos(x) + 1, 0)), "general")
# practice[1]: 2cos²x − cos x − 1 = 0
same("practice[1]", factor(2*u**2 - u - 1), (2*u + 1)*(u - 1))
same("practice[1]", trig_solutions(Eq(2*cos(x)**2 - cos(x) - 1, 0), x), [0, 2*pi/3, 4*pi/3])
# practice[2]: 5 sin x + 2 = 0, four decimals
r = asin(Rational(2, 5))
rnd("practice[2]", r, 0.4115); rnd("practice[2]", pi + r, 3.5531); rnd("practice[2]", 2*pi - r, 5.8717)
same("practice[2]", [float(N(t)) for t in trig_solutions(Eq(5*sin(x) + 2, 0), x)], [float(N(pi + r)), float(N(2*pi - r))])
# practice[3]: sin x + cos x = 1 by squaring
same("practice[3]", expand((sin(x) + cos(x))**2 - 1).subs(sin(x)**2, 1 - cos(x)**2).expand(), 2*sin(x)*cos(x))
same("practice[3]", trig_solutions(Eq(sin(x)*cos(x), 0), x), [0, pi/2, pi, 3*pi/2])
same("practice[3]", [simplify(sin(t) + cos(t)) for t in (pi, 3*pi/2)], [-1, -1])
same("practice[3]", trig_solutions(Eq(sin(x) + cos(x), 1), x), [0, pi/2])
check("practice[3]", general([S(0), pi/2], 2*pi, eq=Eq(sin(x) + cos(x), 1)), "general")
