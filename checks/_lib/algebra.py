"""Independent algebra helpers for check files (Algebra II onward):  from algebra import *
Written with sympy, separately from the lab kit (web/src/kit-math.js), so pages are checked against a second implementation.
The check environment already has every sympy name and the real symbols a…z (x, y, t, …).

    real_solutions(Eq(x**2, 2))          == {-sqrt(2), sqrt(2)}        (solveset over the reals, as a Python set)
    complex_solutions(x**2 + 4)          == {-2*I, 2*I}
    ineq(x**2 - 4 > 0)                   == Union(Interval.open(-oo, -2), Interval.open(2, oo))
    equivalent(a, b)                     True when a − b simplifies to 0 (expressions or polynomials)
    synth([1, -6, 11, -6], 1)            == ([1, -5, 6], 0)             (coefficients high→low; quotient row, remainder)
    long_div(x**3 - 2*x**2 - 4, x**2 + 1) == (x - 2, -x - 2)
    candidates(2*x**3 - 3*x + 1)         == sorted ±p/q list (Rational Root Theorem)
    roots_mult(expr)                     == {root: multiplicity}        (all complex roots)
    holes(f) [(x0, y0)]   vas(f) [x0]   hasym(f) value or None   slant(f) expression or None   zeros(f) [x0]
    domain_excluded(f) [x0]    yint(f)    ends(f) == (limit at −∞, limit at +∞)    side(f, a) == (left limit, right limit)
    inverse(f) expression g with f(g(x)) = x (one branch; pass branch=i to choose)   inverse_ok(f, g, pts) checks both compositions
    compose(f, g) == f(g(x))       transform(f, a=1, b=1, h=0, k=0) == a·f(b(x − h)) + k
    log_exact(b, v) exact log_b v or None     compound(P, r, n, t)   continuous(P, r, t)
    arith_term(a1, d, n)   arith_sum(a1, d, n)   geom_term(a1, r, n)   geom_sum(a1, r, n)   geom_inf(a1, r) (None if |r| ≥ 1)
    binom_coeff(expr, var, k)  coefficient of var**k after expanding     binom_term(A, B, n, k) = C(n,k)·A^(n−k)·B^k
    conic(expr)  for an expression in x, y equal to 0 (no xy term): dict(type, h, k, a2, b2, c2, r2, p, axis, foci, vertices, focus, directrix, asymptotes)
    cplx(z) == (re, im) after simplification
Everything returns exact sympy values; compare with same()/check(); use near() only for rounded numbers on the page.
"""
import sympy as sp

x, y = sp.Symbol('x', real=True), sp.Symbol('y', real=True)
_X = x


def _sym(f, var):
    return var if var is not None else (sorted(sp.sympify(f).free_symbols, key=str) or [_X])[0]


def real_solutions(eq, var=None):
    var = _sym(eq if not isinstance(eq, sp.Eq) else eq.lhs - eq.rhs, var)
    s = sp.solveset(eq, var, domain=sp.S.Reals)
    if isinstance(s, sp.FiniteSet):
        return set(s)
    return s


def complex_solutions(eq, var=None):
    e = eq.lhs - eq.rhs if isinstance(eq, sp.Eq) else eq
    var = _sym(e, var)
    z = sp.Symbol(str(var) + '_c')           # complex dummy so sympy does not restrict to reals
    s = sp.solveset(e.subs(var, z), z, domain=sp.S.Complexes)
    return {sp.simplify(v) for v in s} if isinstance(s, sp.FiniteSet) else s


def ineq(rel, var=None):
    var = _sym(rel.lhs - rel.rhs, var)
    return sp.solveset(rel, var, domain=sp.S.Reals)


def equivalent(a, b):
    return sp.simplify(sp.sympify(a) - sp.sympify(b)) == 0


def synth(coeffs, r):
    """Synthetic division of coefficients (high→low) by (x − r): (quotient coefficients, remainder)."""
    r = sp.nsimplify(r)
    out = [sp.nsimplify(coeffs[0])]
    for c in coeffs[1:]:
        out.append(sp.nsimplify(c) + out[-1] * r)
    return out[:-1], out[-1]


def long_div(a, b, var=None):
    var = _sym(a, var)
    q, r = sp.div(sp.Poly(a, var), sp.Poly(b, var))
    return q.as_expr(), r.as_expr()


def candidates(p, var=None):
    var = _sym(p, var)
    P = sp.Poly(p, var)
    cs = P.all_coeffs()
    den = sp.ilcm(*[sp.fraction(sp.nsimplify(c))[1] for c in cs])
    ints = [int(sp.nsimplify(c) * den) for c in cs]
    while ints and ints[-1] == 0:
        ints.pop()
    lead, const = abs(ints[0]), abs(ints[-1])
    ps, qs = sp.divisors(const), sp.divisors(lead)
    return sorted({s * sp.Rational(a, b) for a in ps for b in qs for s in (1, -1)})


def roots_mult(p, var=None):
    var = _sym(p, var)
    return sp.roots(sp.Poly(sp.expand(p), var))


def _split(f, var):
    n, d = sp.fraction(sp.together(sp.sympify(f)))
    return sp.expand(n), sp.expand(d)


def domain_excluded(f, var=None):
    var = _sym(f, var)
    _, d = _split(f, var)
    return sorted(sp.solveset(d, var, domain=sp.S.Reals), key=float) if d.has(var) else []


def holes(f, var=None):
    var = _sym(f, var)
    red = sp.cancel(f)
    out = []
    for a in domain_excluded(f, var):
        lim = sp.limit(red, var, a)
        if lim.is_finite:
            out.append((a, sp.simplify(lim)))
    return out


def vas(f, var=None):
    var = _sym(f, var)
    _, d = _split(sp.cancel(f), var)
    return sorted(sp.solveset(d, var, domain=sp.S.Reals), key=float) if d.has(var) else []


def side(f, a, var=None):
    var = _sym(f, var)
    return sp.limit(f, var, a, '-'), sp.limit(f, var, a, '+')


def zeros(f, var=None):
    var = _sym(f, var)
    n, _ = _split(sp.cancel(f), var)
    excl = set(domain_excluded(f, var))
    return sorted([z for z in sp.solveset(n, var, domain=sp.S.Reals) if z not in excl], key=float)


def yint(f, var=None):
    var = _sym(f, var)
    if any(e == 0 for e in domain_excluded(f, var)):
        return None
    return sp.simplify(sp.sympify(f).subs(var, 0))


def ends(f, var=None):
    var = _sym(f, var)
    return sp.limit(f, var, -sp.oo), sp.limit(f, var, sp.oo)


def hasym(f, var=None):
    var = _sym(f, var)
    L, R = ends(f, var)
    return L if L == R and L.is_finite else (None if not (L.is_finite or R.is_finite) else (L, R))


def slant(f, var=None):
    var = _sym(f, var)
    n, d = _split(sp.cancel(f), var)
    if sp.degree(n, var) == sp.degree(d, var) + 1:
        return sp.div(sp.Poly(n, var), sp.Poly(d, var))[0].as_expr()
    return None


def compose(f, g, var=None):
    var = _sym(f, var)
    return sp.simplify(sp.sympify(f).subs(var, g))


def transform(f, a=1, b=1, h=0, k=0, var=None):
    var = _sym(f, var)
    return a * sp.sympify(f).subs(var, b * (var - h)) + k


def inverse(f, var=None, branch=0):
    var = _sym(f, var)
    w = sp.Symbol('w_inv', real=True)
    sols = sp.solve(sp.Eq(w, f), var)
    if not sols:
        return None
    return sp.simplify(sols[branch].subs(w, var))


def inverse_ok(f, g, pts, var=None):
    """True when f(g(t)) = t and g(f(t)) = t at every test point (choose points inside both domains)."""
    var = _sym(f, var)
    F, G = sp.sympify(f), sp.sympify(g)
    for t in pts:
        t = sp.nsimplify(t)
        if sp.simplify(F.subs(var, G.subs(var, t)) - t) != 0 or sp.simplify(G.subs(var, F.subs(var, t)) - t) != 0:
            return False
    return True


def log_exact(b, v):
    q = sp.nsimplify(sp.simplify(sp.log(sp.nsimplify(v)) / sp.log(sp.nsimplify(b))))
    return q if q.is_Rational else None


def compound(P, r, n, t):
    return sp.nsimplify(P) * (1 + sp.nsimplify(r) / n) ** (n * sp.nsimplify(t))


def continuous(P, r, t):
    return sp.nsimplify(P) * sp.exp(sp.nsimplify(r) * sp.nsimplify(t))


def arith_term(a1, d, n):
    return sp.nsimplify(a1) + (n - 1) * sp.nsimplify(d)


def arith_sum(a1, d, n):
    i = sp.Symbol('i', integer=True)
    return sp.summation(sp.nsimplify(a1) + (i - 1) * sp.nsimplify(d), (i, 1, n))


def geom_term(a1, r, n):
    return sp.nsimplify(a1) * sp.nsimplify(r) ** (n - 1)


def geom_sum(a1, r, n):
    i = sp.Symbol('i', integer=True)
    return sp.simplify(sp.summation(sp.nsimplify(a1) * sp.nsimplify(r) ** (i - 1), (i, 1, n)))


def geom_inf(a1, r):
    r = sp.nsimplify(r)
    return sp.nsimplify(a1) / (1 - r) if abs(r) < 1 else None


def binom_coeff(expr, var, k):
    return sp.expand(expr).coeff(var, k)


def binom_term(A, B, n, k):
    return sp.binomial(n, k) * sp.sympify(A) ** (n - k) * sp.sympify(B) ** k


def cplx(z):
    z = sp.simplify(sp.expand(sp.sympify(z)))
    return sp.re(z), sp.im(z)


def conic(expr):
    """expr in x and y, = 0, with no xy term."""
    P = sp.Poly(sp.expand(expr), x, y)
    A, C = P.coeff_monomial(x**2), P.coeff_monomial(y**2)
    D, E, F = P.coeff_monomial(x), P.coeff_monomial(y), P.coeff_monomial(1)
    if P.coeff_monomial(x * y) != 0:
        raise ValueError('conic(): xy term not supported')
    if A == 0 and C == 0:
        return {'type': 'line'}
    if A == 0 or C == 0:
        vertical = C == 0
        Sq, Lin, Oth = (A, D, E) if vertical else (C, E, D)
        if Oth == 0:
            return {'type': 'degenerate'}
        h = -Lin / (2 * Sq)
        k = (Lin**2 / (4 * Sq) - F) / Oth
        p = -Oth / (4 * Sq)
        vx, vy = (h, k) if vertical else (k, h)
        return {'type': 'parabola', 'axis': 'vertical' if vertical else 'horizontal', 'h': vx, 'k': vy, 'p': p, 'vertex': (vx, vy),
                'focus': (vx, vy + p) if vertical else (vx + p, vy), 'directrix': ('y', vy - p) if vertical else ('x', vx - p)}
    h, k = -D / (2 * A), -E / (2 * C)
    R = A * h**2 + C * k**2 - F
    if R == 0:
        return {'type': 'degenerate', 'h': h, 'k': k}
    X2, Y2 = R / A, R / C
    out = {'h': h, 'k': k, 'X2': X2, 'Y2': Y2}
    if X2 < 0 and Y2 < 0:
        return dict(out, type='empty')
    if X2 > 0 and Y2 > 0:
        if X2 == Y2:
            return dict(out, type='circle', r2=X2)
        horiz = X2 > Y2
        a2, b2 = (X2, Y2) if horiz else (Y2, X2)
        c2 = a2 - b2
        a, b, c = sp.sqrt(a2), sp.sqrt(b2), sp.sqrt(c2)
        return dict(out, type='ellipse', axis='horizontal' if horiz else 'vertical', a2=a2, b2=b2, c2=c2, e=sp.simplify(c / a),
                    vertices=[(h - a, k), (h + a, k)] if horiz else [(h, k - a), (h, k + a)],
                    foci=[(h - c, k), (h + c, k)] if horiz else [(h, k - c), (h, k + c)])
    horiz = X2 > 0
    a2, b2 = (X2, -Y2) if horiz else (Y2, -X2)
    c2 = a2 + b2
    a, b, c = sp.sqrt(a2), sp.sqrt(b2), sp.sqrt(c2)
    m = sp.simplify(b / a if horiz else a / b)
    return dict(out, type='hyperbola', axis='horizontal' if horiz else 'vertical', a2=a2, b2=b2, c2=c2, e=sp.simplify(c / a),
                vertices=[(h - a, k), (h + a, k)] if horiz else [(h, k - a), (h, k + a)],
                foci=[(h - c, k), (h + c, k)] if horiz else [(h, k - c), (h, k + c)],
                asymptotes=[sp.expand(k + m * (x - h)), sp.expand(k - m * (x - h))])


__all__ = [n for n in dir() if not n.startswith('_') and n not in ('sp',)]


if __name__ == '__main__':      # self-test: python3 checks/_lib/algebra.py
    I_ = sp.I
    assert real_solutions(sp.Eq(x**2, 2)) == {-sp.sqrt(2), sp.sqrt(2)}
    assert complex_solutions(x**2 + 4) == {-2 * I_, 2 * I_}
    assert ineq(x**2 - 4 > 0) == sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(2, sp.oo))
    assert synth([1, -6, 11, -6], 1) == ([1, -5, 6], 0)
    assert long_div(x**3 - 2 * x**2 - 4, x**2 + 1) == (x - 2, -x - 2)
    assert candidates(2 * x**3 - 3 * x + 1)[:4] == [-1, sp.Rational(-1, 2), sp.Rational(1, 2), 1]
    assert roots_mult((x - 2)**2 * (x + 1)) == {2: 2, -1: 1}
    f = (x**2 - 4) / (x**2 + x - 6)
    assert holes(f) == [(2, sp.Rational(4, 5))] and vas(f) == [-3] and zeros(f) == [-2] and hasym(f) == 1 and yint(f) == sp.Rational(2, 3)
    assert domain_excluded(f) == [-3, 2] and side(f, -3) == (sp.oo, -sp.oo)
    assert slant((x**2 + 1) / x) == x and vas(1 / x**2) == [0] and holes(x / x**2) == []
    assert ends(-2 * x**3) == (sp.oo, -sp.oo)
    g = inverse(2 * x + 3); assert equivalent(g, (x - 3) / 2) and inverse_ok(2 * x + 3, g, [0, 1, 5])
    assert inverse_ok(x**2, sp.sqrt(x), [0, 1, 4]) and not inverse_ok(x**2, -sp.sqrt(x), [1, 4])
    assert equivalent(transform(x**2, a=2, h=3, k=-1), 2 * (x - 3)**2 - 1)
    assert log_exact(8, 4) == sp.Rational(2, 3) and log_exact(2, 3) is None
    assert arith_sum(3, 4, 10) == 210 and geom_sum(sp.Rational(1, 2), sp.Rational(1, 2), 5) == sp.Rational(31, 32) and geom_inf(1, 2) is None
    assert binom_coeff((2 * x - 1)**3, x, 1) == 6 and binom_term(2, -3, 5, 2) == 720
    c = conic(x**2 + y**2 - 4 * x + 6 * y - 12); assert c['type'] == 'circle' and (c['h'], c['k'], c['r2']) == (2, -3, 25)
    e = conic(9 * x**2 + 4 * y**2 - 36 * x + 8 * y + 4); assert e['type'] == 'ellipse' and (e['a2'], e['b2'], e['c2'], e['axis']) == (9, 4, 5, 'vertical')
    h = conic(x**2 - 4 * y**2 - 16); assert h['type'] == 'hyperbola' and h['asymptotes'] == [x / 2, -x / 2]
    p = conic(x**2 - 4 * x - 8 * y + 12); assert p['type'] == 'parabola' and p['focus'] == (2, 3) and p['directrix'] == ('y', -1)
    assert cplx((3 - 4 * I_) / (1 + 2 * I_)) == (-1, -2)
    print('algebra.py self-test: ok')
