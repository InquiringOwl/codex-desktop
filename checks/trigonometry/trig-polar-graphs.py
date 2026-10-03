# content: 4b5a2dcbf889
# trig-polar-graphs: Graphs of Polar Equations
from trig import *
import math

th = symbols('th', real=True)

def pts(rf, t1, N=720):
    """Points (x, y) of r = rf(θ), θ in [0, t1], as floats (skips undefined r)."""
    out = []
    for i in range(N):
        t = float(t1) * i / N
        try:
            r = complex(rf(t))
        except (ValueError, ZeroDivisionError):
            continue
        if abs(r.imag) > 1e-12: continue
        out.append((r.real * math.cos(t), r.real * math.sin(t)))
    return out

def tips(rexpr, amp):
    """Petal tips: for each arc between consecutive zeros of r in [0, 2π), the point of largest |r|
    (found by sampling), as a rectangular pair; duplicates (the same point reached twice) removed."""
    zs = [float(z) for z in trig_solutions(Eq(rexpr, 0), th, 0, 2*pi)]
    F = lambdify(th, rexpr, 'math'); out = []
    for i, z0 in enumerate(zs):
        z1 = zs[i + 1] if i + 1 < len(zs) else zs[0] + 2*math.pi
        best = max((z0 + (z1 - z0) * j / 400 for j in range(1, 400)), key=lambda t: abs(F(t)))
        rr = F(best); assert abs(abs(rr) - float(amp)) < 1e-3
        p = (rr * math.cos(best), rr * math.sin(best))
        if not any(math.hypot(p[0] - q[0], p[1] - q[1]) < 1e-6 for q in out): out.append(p)
    return out

def sym_axis(rf, t1):
    """Numerical: the point set is symmetric about the x-axis / y-axis / origin."""
    P = pts(rf, t1, 1440)
    def has(q): return min(math.hypot(q[0] - a, q[1] - b) for a, b in P) < 0.03
    return (all(has((a, -b)) for a, b in P[::7]), all(has((-a, b)) for a, b in P[::7]), all(has((-a, -b)) for a, b in P[::7]))

def maxabs(e, dom=Interval(0, 2*pi)):
    """max |r| = max(max r, −min r)."""
    return Max(maximum(e, th, dom), -minimum(e, th, dom))

def kappa_num(rexpr, t):
    """Sign-deciding numerator of the curvature of a polar curve: r² + 2r'² − r r''."""
    r1, r2 = diff(rexpr, th), diff(rexpr, th, 2)
    return simplify((rexpr**2 + 2*r1**2 - rexpr*r2).subs(th, t))

# hero: r = 4 cos 3θ has 3 petals of length 4
check("hero", len(tips(4*cos(3*th), 4)) == 3, "3 petal tips")
same("hero", maximum(4*cos(3*th), th, Interval(0, 2*pi)), 4)

# formal: graph of r = sin 2θ is symmetric about the polar axis, though θ → −θ fails
check("formal", simplify(sin(2*(-th)) - sin(2*th)) != 0, "θ → −θ test fails for sin 2θ")
check("formal", simplify(-sin(2*(pi - th)) - sin(2*th)) == 0, "(−r, π − θ) test passes for sin 2θ")
check("formal", sym_axis(lambda t: math.sin(2*t), 2*math.pi)[0], "sin 2θ rose is symmetric about the polar axis (numeric)")
check("formal", same_point((1, -pi/5), (-1, pi - pi/5)), "(r, −θ) and (−r, π − θ) name the mirror point")
# formal: circle r = a cos θ has diameter |a| and passes through the pole
a_ = symbols('a_', positive=True)
check("formal", simplify((a_*cos(th)*cos(th) - a_/2)**2 + (a_*cos(th)*sin(th))**2 - (a_/2)**2) == 0, "r = a cos θ: circle centre (a/2, 0), radius a/2")
check("formal", simplify((a_*sin(th)*cos(th))**2 + (a_*sin(th)*sin(th) - a_/2)**2 - (a_/2)**2) == 0, "r = a sin θ: circle centre (0, a/2), radius a/2")
# formal: limaçon classes from a/b (curvature sign at θ = π for r = a + b cos θ; r < 0 somewhere iff a < b)
for (A, B, kind) in [(1, 2, "inner"), (2, 2, "cardioid"), (3, 2, "dimpled"), (4, 2, "convex"), (5, 2, "convex")]:
    r = A + B*cos(th)
    check("formal", (minimum(r, th, Interval(0, 2*pi)) < 0) == (kind == "inner"), f"a={A}, b={B}: r < 0 somewhere iff a/b < 1")
    k0 = kappa_num(r, pi)
    if kind == "dimpled": check("formal", k0 < 0, f"a={A}, b={B}: bends inward at θ = π (dimple)")
    if kind == "convex": check("formal", minimum(simplify(r**2 + 2*diff(r, th)**2 - r*diff(r, th, 2)), th, Interval(0, 2*pi)) >= 0, f"a={A}, b={B}: convex")
    if kind == "cardioid": check("formal", k0 == 0 and r.subs(th, pi) == 0, "cardioid reaches the pole at θ = π")
# formal: roses r = a cos nθ / a sin nθ: n petals if n odd, 2n if even, length |a|
for n in range(2, 9):
    want = n if n % 2 else 2*n
    same("formal", len(tips(3*cos(n*th), 3)), want)
    same("formal", len(tips(3*sin(n*th), 3)), want)
# formal: max |r| of a + b cos θ is a + b at θ = 0
same("formal", maxabs(2 + 4*cos(th)), 6)
# formal: odd rose retraces after π; r(θ + π) = −r(θ)
for n in [3, 5, 7]:
    check("formal", simplify(cos(n*(th + pi)) + cos(n*th)) == 0, f"n={n}: r(θ+π) = −r(θ)")
check("formal", simplify(cos(4*(th + pi)) - cos(4*th)) == 0, "n even: r(θ+π) = r(θ), a different point")
# spiral r = aθ: each turn adds 2πa
check("formal", simplify(a_*(th + 2*pi) - a_*th - 2*pi*a_) == 0, "spiral spacing 2πa")

# example: r = 2 + 4 cos θ
r = 2 + 4*cos(th)
check("example", simplify(r.subs(th, -th) - r) == 0, "polar-axis symmetry")
same("example", Rational(2, 4), Rational(1, 2))
same("example", trig_solutions(Eq(r, 0), th, 0, 2*pi), [2*pi/3, 4*pi/3])
same("example", [r.subs(th, v) for v in [0, pi/3, pi/2, 2*pi/3, pi]], [6, 4, 2, 0, -2])
check("example", all(r.subs(th, v) < 0 for v in [2*pi/3 + Rational(1, 100), pi, 4*pi/3 - Rational(1, 100)]), "r < 0 between 2π/3 and 4π/3")
check("example", r.subs(th, 2*pi/3 - Rational(1, 100)) > 0 and r.subs(th, 4*pi/3 + Rational(1, 100)) > 0, "r > 0 outside")
check("example", same_point((-2, pi), (2, 0)), "(−2, π) = (2, 0)")
same("example", maxabs(r), 6)
same("example", r.subs(th, 0), 6)

# practice 1: r = 6 sin θ ↔ x² + (y − 3)² = 9
X, Y = 6*sin(th)*cos(th), 6*sin(th)*sin(th)
check("practice[0]", simplify(X**2 + (Y - 3)**2 - 9) == 0, "on the circle")
check("practice[0]", simplify(expand(x**2 + y**2 - 6*y) - expand(x**2 + (y - 3)**2 - 9)) == 0, "completing the square")
check("practice[0]", simplify(6*sin(pi - th) - 6*sin(th)) == 0, "symmetric about θ = π/2")
# practice 2: r = 3 − 3 sin θ
r = 3 - 3*sin(th)
same("practice[1]", trig_solutions(Eq(r, 0), th, 0, 2*pi), [pi/2])
same("practice[1]", maxabs(r), 6)
same("practice[1]", r.subs(th, 3*pi/2), 6)
same("practice[1]", to_rect(6, 3*pi/2), (0, -6))
check("practice[1]", simplify(r.subs(th, pi - th) - r) == 0, "symmetric about θ = π/2")
# practice 3: r = 2 sin 4θ
r = 2*sin(4*th)
same("practice[2]", len(tips(r, 2)), 8)
same("practice[2]", trig_solutions(Eq(r, 0), th, 0, 2*pi), [k*pi/4 for k in range(8)])
same("practice[2]", trig_solutions(Eq(r**2, 4), th, 0, 2*pi), [pi/8 + k*pi/4 for k in range(8)])
# practice 4: r² = 9 cos 2θ
same("practice[3]", trig_solutions(Eq(cos(2*th), 0), th, 0, 2*pi), [pi/4, 3*pi/4, 5*pi/4, 7*pi/4])
for v, ok in [(pi/8, True), (pi/2, False), (pi, True), (3*pi/2, False), (15*pi/8, True), (pi/4, True), (3*pi/4, True)]:
    check("practice[3]", (cos(2*v) >= 0) == ok, f"defined at θ = {v}")
same("practice[3]", maximum(sqrt(9*cos(2*th)), th, Interval(-pi/4, pi/4)), 3)
same("practice[3]", [sqrt(9*cos(2*v)) for v in [0, pi]], [3, 3])
check("practice[3]", simplify(9*cos(2*(-th)) - 9*cos(2*th)) == 0, "θ → −θ")
check("practice[3]", simplify(9*cos(2*(pi - th)) - 9*cos(2*th)) == 0, "(r, π − θ)")
check("practice[3]", simplify((-y)**2 - y**2) == 0, "r → −r leaves r² unchanged")
