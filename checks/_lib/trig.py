"""Independent trigonometry helpers for check files (Trigonometry onward):  from trig import *
Written with sympy, separately from the lab kit (web/src/kit-trig.js). The check environment already has every sympy
name (sin, cos, pi, sqrt, asin, …) and the real symbols a…z. Angles are radians unless a name says deg.

    deg(150) == 5*pi/6        to_deg(5*pi/6) == 150        dms(35.425) == (35, 25, 30.0)      from_dms(35, 25, 30) == 35.425
    quadrant(5*pi/6) == 2 (0 on an axis)     ref_angle(5*pi/6) == pi/6     coterminal_in(-pi/4) == 7*pi/4 (into [0, 2π))
    exact('sec', 3*pi/4) == -sqrt(2)  (sympy value; zoo for undefined → returns None)
    sixfrom(x, y) == dict(sin, cos, tan, csc, sec, cot) of the angle through (x, y) (None where undefined)
    trig_solutions(Eq(2*sin(x), 1), x, lo=0, hi=2*pi) == [pi/6, 5*pi/6]   (sorted list, half-open [lo, hi))
    identity(lhs, rhs) True when lhs − rhs simplifies to 0 for all x (plus a numeric spot check)
    solve_triangle(a=7, b=10, A=40) == list of dicts (a, b, c, A, B, C in degrees, floats), 0, 1 or 2 of them
    ssa_count(a, b, A_deg)   heron(a, b, c)   tri_area(a, b, C_deg)
    vmag(v)  vdir(v) (degrees in [0, 360))  vdot(u, v)  vangle(u, v) (deg)  vproj(u, v)  vcomp(u, v)  from_polar_deg(m, d)
    to_polar(x, y) == (r, θ in [0, 2π))   to_rect(r, θ)   same_point((r1, t1), (r2, t2))
    polar_form(z) == (r, θ in [0, 2π))   cis(r, t)   nth_roots(z, n) == sorted list of the n roots (exact)
Everything is exact where sympy can make it exact; compare with same()/check(); use near() only for rounded numbers on the page.
"""
import sympy as sp

x = sp.Symbol('x', real=True)
_F = {'sin': sp.sin, 'cos': sp.cos, 'tan': sp.tan, 'csc': sp.csc, 'sec': sp.sec, 'cot': sp.cot}


def deg(d):
    return sp.nsimplify(d) * sp.pi / 180


def to_deg(t):
    return sp.nsimplify(sp.simplify(t * 180 / sp.pi))


def dms(d):
    d = float(d); s = -1 if d < 0 else 1; d = abs(d)
    D = int(d); mf = (d - D) * 60; M = int(mf + 1e-9); S = round((mf - M) * 60, 6)
    if S >= 60: S -= 60; M += 1
    if M >= 60: M -= 60; D += 1
    return (s * D, M, S)


def from_dms(D, M=0, S=0):
    return (-1 if D < 0 else 1) * (abs(D) + M / 60 + S / 3600)


def coterminal_in(t, lo=0, hi=2 * sp.pi):
    t = sp.nsimplify(t); per = hi - lo
    return sp.simplify(t - per * sp.floor((t - lo) / per))


def quadrant(t):
    t = coterminal_in(t)
    if sp.simplify(sp.Mod(t, sp.pi / 2)) == 0: return 0
    return int(sp.floor(t / (sp.pi / 2))) + 1


def ref_angle(t):
    t = coterminal_in(t)
    if t <= sp.pi / 2: return t
    if t <= sp.pi: return sp.pi - t
    if t <= 3 * sp.pi / 2: return t - sp.pi
    return 2 * sp.pi - t


def exact(fn, t):
    v = sp.simplify(_F[fn](sp.nsimplify(t)))
    return None if v in (sp.zoo, sp.oo, -sp.oo, sp.nan) else sp.radsimp(v)


def sixfrom(px, py):
    px, py = sp.nsimplify(px), sp.nsimplify(py); r = sp.sqrt(px**2 + py**2)
    q = lambda n, d: None if d == 0 else sp.radsimp(sp.simplify(n / d))
    return dict(sin=q(py, r), cos=q(px, r), tan=q(py, px), csc=q(r, py), sec=q(r, px), cot=q(px, py))


def _cands(eq, var, lo, hi):
    """exact candidates: solveset over the reals (ImageSets sampled for n = −8…8), kept inside [lo, hi)"""
    out = []
    try:
        S = sp.solveset(eq, var, domain=sp.S.Reals)
    except Exception:
        return out
    parts = S.args if isinstance(S, sp.Union) else [S]
    for P in parts:
        if isinstance(P, sp.FiniteSet):
            out += list(P)
        elif isinstance(P, sp.ImageSet):
            lam = P.lamda
            for n in range(-8, 9):
                out.append(sp.simplify(lam(n)))
    keep = []
    for v in out:
        try:
            fv = complex(sp.N(v))
            if abs(fv.imag) < 1e-12 and float(lo) - 1e-12 <= fv.real < float(hi) - 1e-12: keep.append(v)
        except (TypeError, ValueError):
            pass
    return keep


def trig_solutions(eq, var=x, lo=0, hi=2 * sp.pi, exact_only=False):
    """All solutions in [lo, hi): found numerically on a fine grid (sign changes and touching zeros), each matched to
    an exact value (sympy candidates, then rational multiples of π). sympy's solveset on an interval alone misses roots."""
    import math
    f = (eq.lhs - eq.rhs) if isinstance(eq, sp.Eq) else eq
    F = sp.lambdify(var, f, 'math'); a, b = float(lo), float(hi); N = 20000; roots = []
    def val(t):
        try:
            v = F(t)
            if isinstance(v, complex): v = v.real if abs(v.imag) < 1e-12 else None
            return v if v is not None and math.isfinite(v) else None
        except (ZeroDivisionError, ValueError, OverflowError, TypeError): return None
    xs = [a + (b - a) * i / N for i in range(N + 1)]; vs = [val(t) for t in xs]
    for i in range(N):
        u, v = vs[i], vs[i + 1]
        if u is None or v is None: continue
        if abs(u) < 1e-12: roots.append(xs[i]); continue
        if u * v < 0 and abs(u - v) < 1e3:
            p, q = xs[i], xs[i + 1]
            for _ in range(80):
                m = (p + q) / 2; w = val(m)
                if w is None: break
                if (val(p) or 0) * w <= 0: q = m
                else: p = m
            roots.append((p + q) / 2)
        elif 0 < i and vs[i - 1] is not None and abs(u) < 1e-6 and abs(u) <= abs(vs[i - 1]) and abs(u) <= abs(v):   # touching zero
            try: r = float(sp.nsolve(sp.diff(f, var), var, xs[i])); roots.append(r) if abs(val(r) or 1) < 1e-10 else None
            except Exception: pass
    uniq = []
    for r in sorted(roots):
        if a - 1e-12 <= r < b - 1e-9 and not any(abs(r - u) < 1e-7 for u in uniq): uniq.append(r)
    cands = _cands(eq if isinstance(eq, sp.Eq) else sp.Eq(f, 0), var, lo, hi); out = []
    for r in uniq:
        e = next((c for c in cands if abs(float(c) - r) < 1e-8), None)
        if e is None:
            q = sp.nsimplify(r / math.pi, tolerance=1e-10, rational=True)
            try:
                if sp.denom(q) <= 48 and abs(complex(sp.N(f.subs(var, q * sp.pi)))) < 1e-12: e = q * sp.pi
            except (TypeError, ValueError):
                pass
        if e is None:
            if exact_only: raise ValueError('no exact form for root %.12f' % r)
            e = sp.Float(r, 15)
        out.append(e)
    return out


def identity(lhs, rhs, var=x):
    d = sp.simplify(sp.expand_trig(lhs - rhs))
    if d != 0:
        d = sp.simplify(sp.trigsimp(sp.together(sp.expand_trig(lhs - rhs))))
    if d != 0:
        return False
    for v in (0.37, 1.21, 2.9, -0.8, 4.4):
        L, R = complex(sp.N(lhs.subs(var, v))), complex(sp.N(rhs.subs(var, v)))
        if abs(L - R) > 1e-9: return False
    return True


def _r(d): return float(d) * float(sp.pi) / 180
def _sinD(d): return float(sp.sin(_r(d)))
def _cosD(d): return float(sp.cos(_r(d)))
def _deg(rad): return float(rad) * 180 / float(sp.pi)


def solve_triangle(a=None, b=None, c=None, A=None, B=None, C=None):
    """Independent solver (degrees). Returns a list of solved triangles (dicts)."""
    import math
    g = dict(a=a, b=b, c=c, A=A, B=B, C=C)
    sides = [k for k in 'abc' if g[k] is not None]; angs = [k for k in 'ABC' if g[k] is not None]
    ok = lambda t: all(t[k] is not None and t[k] > 1e-9 for k in 'abcABC') and abs(t['A'] + t['B'] + t['C'] - 180) < 1e-6
    if len(angs) >= 2:
        t = dict(g); miss = [k for k in 'ABC' if t[k] is None]
        if miss: t[miss[0]] = 180 - sum(t[k] for k in 'ABC' if k != miss[0])
        s0 = sides[0]; k = t[s0] / math.sin(math.radians(t[s0.upper()]))
        for s in 'abc':
            if t[s] is None: t[s] = k * math.sin(math.radians(t[s.upper()]))
        return [t] if ok(t) else []
    if len(sides) == 3:
        if a + b <= c or a + c <= b or b + c <= a: return []
        t = dict(g); t['A'] = math.degrees(math.acos((b*b + c*c - a*a) / (2*b*c))); t['B'] = math.degrees(math.acos((a*a + c*c - b*b) / (2*a*c))); t['C'] = 180 - t['A'] - t['B']
        return [t]
    X = angs[0]; xs = X.lower()
    if g[xs] is None:   # SAS
        p, q = sides; t = dict(g); t[xs] = math.sqrt(t[p]**2 + t[q]**2 - 2*t[p]*t[q]*math.cos(math.radians(t[X])))
        t[p.upper()] = math.degrees(math.acos((t[q]**2 + t[xs]**2 - t[p]**2) / (2*t[q]*t[xs]))); t[q.upper()] = 180 - t[X] - t[p.upper()]
        return [t]
    ys = [s for s in sides if s != xs][0]; zs = [s for s in 'abc' if s not in (xs, ys)][0]
    sY = g[ys] * math.sin(math.radians(g[X])) / g[xs]; out = []
    if sY <= 1 + 1e-12:
        Y1 = math.degrees(math.asin(min(1.0, sY)))
        for Y in ([Y1] if abs(sY - 1) < 1e-12 else [Y1, 180 - Y1]):
            t = dict(g); t[ys.upper()] = Y; t[zs.upper()] = 180 - g[X] - Y; t[zs] = g[xs] * math.sin(math.radians(t[zs.upper()])) / math.sin(math.radians(g[X]))
            if ok(t): out.append(t)
    return out


def ssa_count(a, b, A):
    return len(solve_triangle(a=a, b=b, A=A))


def heron(a, b, c):
    a, b, c = map(sp.nsimplify, (a, b, c)); s = (a + b + c) / 2
    return sp.sqrt(s * (s - a) * (s - b) * (s - c))


def tri_area(a, b, Cdeg):
    return sp.nsimplify(a) * sp.nsimplify(b) * sp.sin(deg(Cdeg)) / 2


def vmag(v): return sp.sqrt(sp.nsimplify(v[0])**2 + sp.nsimplify(v[1])**2)
def vdot(u, v): return sp.nsimplify(u[0]) * sp.nsimplify(v[0]) + sp.nsimplify(u[1]) * sp.nsimplify(v[1])
def vdir(v):
    t = sp.atan2(sp.nsimplify(v[1]), sp.nsimplify(v[0])) * 180 / sp.pi
    return sp.simplify(t % 360)
def vangle(u, v): return sp.simplify(sp.acos(vdot(u, v) / (vmag(u) * vmag(v))) * 180 / sp.pi)
def vproj(u, v): k = vdot(u, v) / vdot(v, v); return (sp.simplify(k * v[0]), sp.simplify(k * v[1]))
def vcomp(u, v): return sp.simplify(vdot(u, v) / vmag(v))
def from_polar_deg(m, d): return (sp.nsimplify(m) * sp.cos(deg(d)), sp.nsimplify(m) * sp.sin(deg(d)))


def to_polar(px, py):
    px, py = sp.nsimplify(px), sp.nsimplify(py)
    return (sp.sqrt(px**2 + py**2), coterminal_in(sp.atan2(py, px)))


def to_rect(r, t):
    return (sp.simplify(r * sp.cos(t)), sp.simplify(r * sp.sin(t)))


def same_point(p, q):
    a, b = to_rect(*p), to_rect(*q)
    return sp.simplify(a[0] - b[0]) == 0 and sp.simplify(a[1] - b[1]) == 0


def polar_form(z):
    z = sp.nsimplify(z)
    return (sp.simplify(sp.Abs(z)), coterminal_in(sp.arg(z)))


def cis(r, t):
    return sp.simplify(r * (sp.cos(t) + sp.I * sp.sin(t)))


def nth_roots(z, n):
    r, t = polar_form(z)
    return [sp.simplify(sp.root(r, n) * (sp.cos((t + 2 * sp.pi * k) / n) + sp.I * sp.sin((t + 2 * sp.pi * k) / n))) for k in range(n)]


__all__ = [n for n in dir() if not n.startswith('_') and n not in ('sp', 'x')]


if __name__ == '__main__':      # self-test: python3 checks/_lib/trig.py
    pi, sqrt, Eq, sin, cos = sp.pi, sp.sqrt, sp.Eq, sp.sin, sp.cos
    assert deg(150) == 5 * pi / 6 and to_deg(5 * pi / 6) == 150 and dms(35.425) == (35, 25, 30.0)
    assert quadrant(5 * pi / 6) == 2 and quadrant(pi) == 0 and quadrant(-pi / 4) == 4
    assert ref_angle(5 * pi / 6) == pi / 6 and ref_angle(4 * pi / 3) == pi / 3 and coterminal_in(-pi / 4) == 7 * pi / 4
    assert exact('sec', 3 * pi / 4) == -sqrt(2) and exact('tan', pi / 2) is None and sp.simplify(exact('sin', pi / 12) - (sqrt(6) - sqrt(2)) / 4) == 0
    s6 = sixfrom(-3, 4); assert s6['sin'] == sp.Rational(4, 5) and s6['cot'] == sp.Rational(-3, 4)
    assert trig_solutions(Eq(2 * sin(x), 1)) == [pi / 6, 5 * pi / 6]
    assert trig_solutions(Eq(2 * cos(x)**2 - cos(x) - 1, 0)) == [0, 2 * pi / 3, 4 * pi / 3]
    assert identity(sin(2 * x), 2 * sin(x) * cos(x)) and identity(1 + sp.tan(x)**2, sp.sec(x)**2) and not identity(sin(2 * x), 2 * sin(x))
    T = solve_triangle(a=7, b=10, A=40); assert len(T) == 2 and abs(T[0]['B'] - 66.67) < .01
    assert ssa_count(5, 10, 30) == 1 and ssa_count(4, 10, 30) == 0 and ssa_count(12, 10, 40) == 1
    assert heron(13, 14, 15) == 84 and tri_area(3, 4, 90) == 6
    assert vmag((3, -4)) == 5 and vdir((-1, 1)) == 135 and vangle((1, 0), (1, 1)) == 45 and vproj((3, 4), (1, 0)) == (3, 0)
    assert to_polar(-1, sqrt(3)) == (2, 2 * pi / 3) and same_point((3, pi / 6), (-3, 7 * pi / 6))
    assert polar_form(1 + sp.I) == (sqrt(2), pi / 4) and sp.expand((1 + sp.I)**8) == 16
    R = nth_roots(-8, 3); assert all(sp.simplify(r**3 + 8) == 0 for r in R) and len(set(R)) == 3
    assert trig_solutions(Eq(sp.tan(3 * x), 1), x, -4 * pi, 4 * pi)[0] == -47 * pi / 12 and len(trig_solutions(Eq(sp.tan(3 * x), 1), x, -4 * pi, 4 * pi)) == 24
    assert trig_solutions(Eq(sin(x), 0), x, -5 * pi, 5 * pi)[0] == -5 * pi
    print('trig.py self-test: ok')
