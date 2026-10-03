# content: 0c8ee04ad25b
# trig-de-moivre: De Moivre's Theorem & Complex Roots
from trig import *
from algebra import *

th = symbols('th', real=True); rr = symbols('rr', positive=True)
# hero / formal: zⁿ = rⁿ cis nθ for n = −4 … 8 (induction checked case by case)
# exact for n = 0 … 4 (symbolic), then at 12 sample (r, θ) pairs for every n in −4 … 8 (symbolic for all n took ~10 s)
for n in range(0, 5):
    check("hero", simplify(expand_trig(expand((rr*(cos(th) + I*sin(th)))**n) - rr**n*(cos(n*th) + I*sin(n*th)))) == 0, f"n = {n}")
for n in range(-4, 9):
    check("hero", all(abs(complex(((r0*(cos(t0) + I*sin(t0)))**n - r0**n*(cos(n*t0) + I*sin(n*t0))).evalf(30))) < 1e-20 for r0, t0 in [(Rational(a, 3), Rational(b, 7)) for a in (2, 5, 7) for b in (1, 4, 9, 13)]), f"n = {n} (samples)")
# induction step uses the product rule
k_ = symbols('k_', integer=True)
check("formal", simplify(expand_trig(expand(rr**k_*(cos(k_*th) + I*sin(k_*th))*rr*(cos(th) + I*sin(th))) - rr**(k_ + 1)*(cos((k_ + 1)*th) + I*sin((k_ + 1)*th)))) == 0, "induction step")
# nth roots: n distinct, w_k^n = c, k = n repeats k = 0, spacing 2π/n
for (c, n) in [(8*I, 3), (-16, 4), (1, 6), (-8, 3), (-64, 6), (32*I, 5), (2 + 2*sqrt(3)*I, 4)]:
    R, T = polar_form(c)
    ws = [cis(root(R, n), (T + 2*pi*kk)/n) for kk in range(n + 1)]
    check("formal", all(simplify(expand(w**n) - c) == 0 or abs(N(w**n - c)) < 1e-10 for w in ws), f"w^n = {c}")
    check("formal", len({(round(float(re(N(w))), 9), round(float(im(N(w))), 9)) for w in ws[:n]}) == n, f"{n} distinct roots of {c}")
    check("formal", abs(N(ws[n] - ws[0])) < 1e-12, "k = n gives w0")
    check("formal", len(nth_roots(c, n)) == n and all(abs(N(a**n - c)) < 1e-9 for a in nth_roots(c, n)), "nth_roots agrees")
# roots of unity sum to 0 for n ≥ 2
for n in range(2, 13):
    check("formal", abs(N(sum(cis(1, 2*pi*kk/n) for kk in range(n)))) < 1e-12, f"sum of {n}th roots of unity")
    w = cis(1, 2*pi/n)
    check("formal", simplify(expand(w**n)) == 1 or abs(N(w**n - 1)) < 1e-12, "ω^n = 1")

# example: z³ = 8i
same("example", polar_form(8*I), (8, pi/2))
same("example", root(8, 3), 2)
args = [(pi/2 + 2*pi*kk)/3 for kk in range(3)]
same("example", args, [pi/6, 5*pi/6, 3*pi/2])
same("example", cplx(cis(2, pi/6)), (sqrt(3), 1))
same("example", cplx(cis(2, 5*pi/6)), (-sqrt(3), 1))
same("example", cplx(cis(2, 3*pi/2)), (0, -2))
sol3 = list(roots(Poly(x**3 - 8*I, x)).keys())
check("example", len(sol3) == 3 and all(any(simplify(expand(u - v)) == 0 for v in sol3) for u in [sqrt(3) + I, -sqrt(3) + I, -2*I]), "solution set of z³ = 8i")
same("example", expand((-2*I)**3), 8*I)
same("example", expand((sqrt(3) + I)**3), 8*I)
same("example", expand((-sqrt(3) + I)**3), 8*I)
# why / mistakes
same("mistakes", expand((1 + I)**8), 16)
same("mistakes", 1**8 + I**8, 2)
same("mistakes", set(complex_solutions(Eq(x**3, 8), x)), {2, -1 + sqrt(3)*I, -1 - sqrt(3)*I})
same("mistakes", root(16, 4), 2)

# practice
same("practice[0]", polar_form(1 + I), (sqrt(2), pi/4))
same("practice[0]", cplx(cis(sqrt(2)**8, 8*pi/4)), (16, 0))
same("practice[0]", expand((1 + I)**8), 16)
same("practice[1]", polar_form(sqrt(3) - I), (2, 11*pi/6))
same("practice[1]", 5*11*pi/6 - 8*pi, 7*pi/6)
same("practice[1]", cplx(cis(32, 7*pi/6)), (-16*sqrt(3), -16))
same("practice[1]", cplx(expand((sqrt(3) - I)**5)), (-16*sqrt(3), -16))
same("practice[2]", polar_form(-16), (16, pi))
same("practice[2]", [(pi + 2*pi*kk)/4 for kk in range(4)], [pi/4, 3*pi/4, 5*pi/4, 7*pi/4])
r4 = [sqrt(2) + sqrt(2)*I, -sqrt(2) + sqrt(2)*I, -sqrt(2) - sqrt(2)*I, sqrt(2) - sqrt(2)*I]
same("practice[2]", [cplx(cis(2, (pi + 2*pi*kk)/4)) for kk in range(4)], [cplx(v) for v in r4])
check("practice[2]", all(expand(v**4) == -16 for v in r4), "each to the 4th is −16")
u6 = [1, Rational(1, 2) + sqrt(3)/2*I, -Rational(1, 2) + sqrt(3)/2*I, -1, -Rational(1, 2) - sqrt(3)/2*I, Rational(1, 2) - sqrt(3)/2*I]
same("practice[3]", [cplx(cis(1, 2*pi*kk/6)) for kk in range(6)], [cplx(v) for v in u6])
check("practice[3]", all(expand(v**6) == 1 for v in u6), "each to the 6th is 1")
same("practice[3]", expand(sum(u6)), 0)
check("practice[3]", all(simplify(cis(1, 2*pi*kk/6) + cis(1, 2*pi*kk/6 + pi)) == 0 for kk in range(6)), "opposite pairs cancel")
