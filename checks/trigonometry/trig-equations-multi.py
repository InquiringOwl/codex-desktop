# content: 53014b954370
# trig-equations-multi: Equations with Multiple Angles & Identities
from trig import *
import math

def general(sols, per, eq=None, var=x):
    """the page's general solution {s + per*n} equals every solution of eq in [−4π, 4π) (solved on [−5π, 5π) so no endpoint is lost)"""
    L, H = float(-4*pi) - 1e-9, float(4*pi) - 1e-9
    fam = sorted(float(N(s + per * n)) for s in sols for n in range(-40, 41) if L <= float(N(s + per * n)) < H)
    vals = [complex(N(r)) for r in trig_solutions(eq, var, -5*pi, 5*pi)]
    got = sorted(z.real for z in vals if abs(z.imag) < 1e-9 and L <= z.real < H)
    return len(fam) == len(got) and all(abs(a - b) < 1e-7 for a, b in zip(fam, got))

u = symbols('u')
# hero: sin 2x = √3/2 → 2x in [0, 4π) and x in [0, 2π)
same("hero", trig_solutions(Eq(sin(u), sqrt(3)/2), u, 0, 4*pi), [pi/3, 2*pi/3, 7*pi/3, 8*pi/3])
same("hero", trig_solutions(Eq(sin(2*x), sqrt(3)/2), x), [pi/6, pi/3, 7*pi/6, 4*pi/3])
# formal: count 2B for sin Bx = k (|k| < 1) and tan Bx = k, B = 1..4
for B in (1, 2, 3, 4):
    for kv in (Rational(1, 2), Rational(-2, 5)):
        check("formal", len(trig_solutions(Eq(sin(B*x), kv), x)) == 2*B, f"sin {B}x = {kv}: 2B solutions")
    check("formal", len(trig_solutions(Eq(tan(B*x), 3), x)) == 2*B, f"tan {B}x = 3: 2B solutions")
# formal: x = α/B + (2π/B)n
check("formal", general([pi/(3*2), 2*pi/(3*2)], 2*pi/2, eq=Eq(sin(2*x), sqrt(3)/2)), "sin 2x = √3/2 general, period π")
# formal: tan 3x = 1 → six solutions, x = π/12 + (π/3)n
T3 = [pi/12, 5*pi/12, 3*pi/4, 13*pi/12, 17*pi/12, 7*pi/4]
same("formal", trig_solutions(Eq(tan(3*x), 1), x), T3)
# on a wide window use sin 3x − cos 3x = 0: the same equation (where cos 3x = 0, sin 3x = ±1), without poles
TAN3 = Eq(sin(3*x) - cos(3*x), 0)
same("formal", trig_solutions(TAN3, x), T3)
check("formal", general([pi/12], pi/3, eq=TAN3), "tan 3x = 1 general")
# formal: identities quoted
check("formal", identity(sin(2*x), 2*sin(x)*cos(x)), "sin 2x")
check("formal", identity(cos(2*x), cos(x)**2 - sin(x)**2) and identity(cos(2*x), 2*cos(x)**2 - 1) and identity(cos(2*x), 1 - 2*sin(x)**2), "cos 2x three forms")
check("formal", identity(sin(3*x)*cos(x) - cos(3*x)*sin(x), sin(2*x)), "difference collapses to sin 2x")
# formal: 2 sin x = x on [0, 2π): 0 and ≈ 1.8955
r = nsolve(2*sin(x) - x, x, 1.9)
same("formal", round(float(r), 4), 1.8955)
G = [float(t) for t in trig_solutions(Eq(2*sin(x), x), x)]
check("formal", len(G) == 2 and abs(G[0]) < 1e-9 and abs(G[1] - float(r)) < 1e-7, f"graph solutions {G}")

# example: sin 2x = cos x
same("example", expand(2*sin(x)*cos(x) - cos(x) - cos(x)*(2*sin(x) - 1)), 0)
same("example", trig_solutions(Eq(cos(x), 0), x), [pi/2, 3*pi/2])
same("example", trig_solutions(Eq(sin(x), Rational(1, 2)), x), [pi/6, 5*pi/6])
same("example", trig_solutions(Eq(sin(2*x), cos(x)), x), [pi/6, pi/2, 5*pi/6, 3*pi/2])
check("example", general([pi/6, 5*pi/6], 2*pi, eq=Eq(sin(x), Rational(1, 2))) and general([pi/2], pi, eq=Eq(cos(x), 0)), "families")
check("example", general([pi/6, 5*pi/6, pi/2, 3*pi/2], 2*pi, eq=Eq(sin(2*x), cos(x))), "general solution of the whole equation")
# mistakes: dividing by cos x loses π/2, 3π/2; sin 2x ≠ 2 sin x; tan 3x period π/3
same("mistakes", trig_solutions(Eq(2*sin(x), 1), x), [pi/6, 5*pi/6])
check("mistakes", not identity(sin(2*x), 2*sin(x)), "sin 2x ≠ 2 sin x")
check("mistakes", Rational(1, 4) != Rational(1, 2) and trig_solutions(Eq(sin(x), Rational(1, 4)), x, exact_only=False) != trig_solutions(Eq(sin(2*x), Rational(1, 2)), x), "sin x = 1/4 is a different equation")
check("mistakes", not general([pi/12], pi, eq=TAN3), "π/12 + πn misses solutions")

# practice[0]: 2cos 2x + 1 = 0
same("practice[0]", trig_solutions(Eq(cos(u), Rational(-1, 2)), u, 0, 4*pi), [2*pi/3, 4*pi/3, 8*pi/3, 10*pi/3])
same("practice[0]", trig_solutions(Eq(2*cos(2*x) + 1, 0), x), [pi/3, 2*pi/3, 4*pi/3, 5*pi/3])
# practice[1]: tan 3x = 1
same("practice[1]", trig_solutions(Eq(tan(u), 1), u, 0, 6*pi), [pi/4, 5*pi/4, 9*pi/4, 13*pi/4, 17*pi/4, 21*pi/4])
same("practice[1]", trig_solutions(Eq(tan(3*x), 1), x), T3)
# practice[2]: cos 2x + cos x = 0
same("practice[2]", factor(2*u**2 + u - 1), (2*u - 1)*(u + 1))
check("practice[2]", identity(cos(2*x) + cos(x), 2*cos(x)**2 + cos(x) - 1), "rewrite")
same("practice[2]", trig_solutions(Eq(cos(2*x) + cos(x), 0), x), [pi/3, pi, 5*pi/3])
# practice[3]: sin 3x cos x − cos 3x sin x = 1/2
same("practice[3]", trig_solutions(Eq(sin(u), Rational(1, 2)), u, 0, 4*pi), [pi/6, 5*pi/6, 13*pi/6, 17*pi/6])
same("practice[3]", trig_solutions(Eq(sin(3*x)*cos(x) - cos(3*x)*sin(x), Rational(1, 2)), x), [pi/12, 5*pi/12, 13*pi/12, 17*pi/12])
