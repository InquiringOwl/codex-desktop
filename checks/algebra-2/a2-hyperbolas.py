# content: 19658efca5de
# a2-hyperbolas: Hyperbolas
from algebra import *
R = Rational

# formal: a = b gives perpendicular asymptotes and e = √2
ch = conic(x**2 - y**2 - 4)
same("formal", ch['e'], sqrt(2))
same("formal", set(ch['asymptotes']), {x, -x})
cv = conic(expand(((y - 1)**2/4 - (x + 2)**2/9 - 1) * 36))
same("formal", set(cv['asymptotes']), {expand(1 + R(2, 3)*(x + 2)), expand(1 - R(2, 3)*(x + 2))})   # vertical: slopes ±a/b

# example: 9x² − 16y² − 36x − 32y − 124 = 0
G = 9*x**2 - 16*y**2 - 36*x - 32*y - 124
same("example", 9*(-16), -144)
same("example", expand(9*(x**2 - 4*x) - 16*(y**2 + 2*y) - 124), G)
same("example", 124 + 36 - 16, 144)
same("example", expand(9*(x - 2)**2 - 16*(y + 1)**2 - 144), G)
check("example", equivalent((x - 2)**2/16 - (y + 1)**2/9 - 1, G/144), "standard form")
c = conic(G)
check("example", c['type'] == 'hyperbola' and c['axis'] == 'horizontal', "opens left/right")
same("example", (c['h'], c['k'], c['a2'], c['b2'], c['c2']), (2, -1, 16, 9, 25))
same("example", set(c['vertices']), {(-2, -1), (6, -1)})
same("example", set(c['foci']), {(-3, -1), (7, -1)})
same("example", set(c['asymptotes']), {expand(-1 + R(3, 4)*(x - 2)), expand(-1 - R(3, 4)*(x - 2))})
same("example", c['e'], R(5, 4))
# locus: |d1 − d2| = 8 on the curve
t = symbols('t', real=True)
Px, Py = 2 + 4*cosh(t), -1 + 3*sinh(t)
d1 = sqrt((Px + 3)**2 + (Py + 1)**2); d2 = sqrt((Px - 7)**2 + (Py + 1)**2)
check("example", all(abs(N((d1 - d2).subs(t, v)) - 8) < 1e-10 for v in [-1.5, 0.2, 0.9, 2.0]), "|d1 − d2| = 2a")

# practice[0]: x²/9 − y²/16 = 1
c0 = conic(expand((x**2/9 - y**2/16 - 1) * 144))
same("practice[0]", sqrt(9 + 16), 5)
same("practice[0]", set(c0['vertices']), {(-3, 0), (3, 0)})
same("practice[0]", set(c0['foci']), {(-5, 0), (5, 0)})
same("practice[0]", set(c0['asymptotes']), {R(4, 3)*x, -R(4, 3)*x})
same("practice[0]", c0['e'], R(5, 3))

# practice[1]: (y − 2)²/4 − (x + 1)²/5 = 1
c1 = conic(expand(((y - 2)**2/4 - (x + 1)**2/5 - 1) * 20))
check("practice[1]", c1['axis'] == 'vertical', "opens up/down")
same("practice[1]", (c1['h'], c1['k'], c1['a2'], c1['b2']), (-1, 2, 4, 5))
same("practice[1]", sqrt(4 + 5), 3)
same("practice[1]", set(c1['vertices']), {(-1, 0), (-1, 4)})
same("practice[1]", set(c1['foci']), {(-1, -1), (-1, 5)})
same("practice[1]", radsimp(2/sqrt(5)), 2*sqrt(5)/5)
same("practice[1]", set(c1['asymptotes']), {expand(2 + 2*sqrt(5)/5*(x + 1)), expand(2 - 2*sqrt(5)/5*(x + 1))})

# practice[2]: foci (±10, 0), vertices (±6, 0)
same("practice[2]", 100 - 36, 64)
c2 = conic(expand((x**2/36 - y**2/64 - 1) * 576))
same("practice[2]", set(c2['foci']), {(-10, 0), (10, 0)})
same("practice[2]", set(c2['vertices']), {(-6, 0), (6, 0)})
same("practice[2]", R(8, 6), R(4, 3))
same("practice[2]", set(c2['asymptotes']), {R(4, 3)*x, -R(4, 3)*x})

# practice[3]: stations A(100, 0), B(−100, 0), 120 km closer to A
same("practice[3]", 10000 - 3600, 6400)
H = x**2/3600 - y**2/6400 - 1
c3 = conic(expand(H * 3600 * 64))
same("practice[3]", set(c3['foci']), {(-100, 0), (100, 0)})
same("practice[3]", 3600*(1 + R(80**2, 6400)), 7200)
solves("practice[3]", Eq(H.subs(y, 80), 0), x, {-60*sqrt(2), 60*sqrt(2)})
near("practice[3]", 60*sqrt(2), 84.9)
X = 60*sqrt(2)
dA = sqrt((X - 100)**2 + 80**2); dB = sqrt((X + 100)**2 + 80**2)
check("practice[3]", abs(N(dB - dA) - 120) < 1e-9, "120 km closer to A")
