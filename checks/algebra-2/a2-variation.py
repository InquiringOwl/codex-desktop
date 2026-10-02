# content: 9a5985e9105f
# a2-variation: Direct, Inverse & Joint Variation
from algebra import *

K, c, n = symbols("K c n", positive=True)

# hero / formal: scaling rule
same("hero: k/x, x doubled", simplify((K/(2*x))/(K/x)), Rational(1, 2))
same("formal: k x^n scaled by c", simplify((K*(c*x)**n)/(K*x**n)), c**n)
same("formal: k/x^n scaled by c", simplify((K/(c*x)**n)/(K/x**n)), c**(-n))
for name, e, want in [("kx", K*x, 2), ("k/x", K/x, Rational(1, 2)), ("kx^2", K*x**2, 4), ("k/x^2", K/x**2, Rational(1, 4))]:
    same(f"formal: doubling {name}", simplify(e.subs(x, 2*x)/e), want)
same("formal: xy = k for inverse", simplify(x*(K/x)), K)
same("formal: direct is a line through the origin", (K*x).subs(x, 0), 0)

# example: I = k/d^2, I(2) = 72
d = Symbol('d', positive=True)
kk = solve(Eq(72, K/2**2), K)[0]
same("example", kk, 288)
same("example", 72*4, 288)
I = kk/d**2
same("example", I.subs(d, 3), 32)
same("example", I.subs(d, 6), 8)
same("example", Rational(288, 9), 32)
same("example", Rational(288, 36), 8)
same("example", 32*Rational(1, 2**2), 8)

# mistake 2: wrong model k/d
k_wrong = solve(Eq(72, K/2), K)[0]
same("mistake 2", k_wrong, 144)
same("mistake 2", k_wrong/6, 24)

# practice[0]
k0 = solve(Eq(12, K*4), K)[0]
same("practice[0]", k0, 3)
same("practice[0]", k0*10, 30)

# practice[1]: Boyle V = k/P
P = Symbol('P', positive=True)
k1 = solve(Eq(6, K/2), K)[0]
same("practice[1]", k1, 12)
same("practice[1]", (k1/P).subs(P, 3), 4)

# practice[2]: z = kxy
k2 = solve(Eq(36, K*3*4), K)[0]
same("practice[2]", k2, 3)
same("practice[2]", k2*5*2, 30)

# practice[3]: F = k m1 m2/d^2, m1 tripled, d doubled
m1, m2 = symbols("m1 m2", positive=True)
F = K*m1*m2/d**2
same("practice[3]", simplify(F.subs({m1: 3*m1, d: 2*d}, simultaneous=True)/F), Rational(3, 4))
