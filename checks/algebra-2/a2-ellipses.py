# content: 5204d2654705
# a2-ellipses: Ellipses
from algebra import *
R = Rational

# formal: co-vertex distances are a, so c² = a² − b² (check on a sample a = 5, b = 4)
same("formal", sqrt((0 - 3)**2 + (4 - 0)**2), 5)
check("formal", conic(x**2 + y**2 - 4)['type'] == 'circle', "a = b gives a circle")

# example: vertices (−3, 2), (7, 2), foci (−1, 2), (5, 2)
same("example", ((-3 + 7) / S(2), (2 + 2) / S(2)), (2, 2))
same("example", (7 - (-3), 5 - (-1)), (10, 6))
same("example", 25 - 9, 16)
E = (x - 2)**2/25 + (y - 2)**2/16 - 1
c = conic(expand(E * 400))
check("example", c['type'] == 'ellipse' and c['axis'] == 'horizontal', "horizontal")
same("example", set(c['vertices']), {(-3, 2), (7, 2)})
same("example", set(c['foci']), {(-1, 2), (5, 2)})
same("example", c['e'], R(3, 5))
same("example", R(3, 5), R(6, 10))
check("example", E.subs({x: 2, y: 6}) == 0 and E.subs({x: 2, y: -2}) == 0, "co-vertices (2, 6), (2, −2)")
# locus: any point has d1 + d2 = 10
t = symbols('t', real=True)
Px, Py = 2 + 5*cos(t), 2 + 4*sin(t)
d1 = sqrt((Px + 1)**2 + (Py - 2)**2); d2 = sqrt((Px - 5)**2 + (Py - 2)**2)
check("example", all(abs(N((d1 + d2).subs(t, v)) - 10) < 1e-12 for v in [0.3, 1.1, 2.5, 4.0]), "d1 + d2 = 2a")

# practice[0]: x²/36 + y²/20 = 1
c0 = conic(expand((x**2/36 + y**2/20 - 1) * 180))
same("practice[0]", sqrt(20), 2*sqrt(5))
same("practice[0]", (c0['a2'], c0['b2'], c0['c2']), (36, 20, 16))
same("practice[0]", set(c0['vertices']), {(-6, 0), (6, 0)})
same("practice[0]", set(c0['foci']), {(-4, 0), (4, 0)})
same("practice[0]", c0['e'], R(2, 3))
same("practice[0]", R(4, 6), R(2, 3))

# practice[1]: (x + 1)²/9 + (y − 3)²/25 = 1
c1 = conic(expand(((x + 1)**2/9 + (y - 3)**2/25 - 1) * 225))
check("practice[1]", c1['axis'] == 'vertical', "vertical")
same("practice[1]", (c1['h'], c1['k']), (-1, 3))
same("practice[1]", sqrt(25 - 9), 4)
same("practice[1]", set(c1['vertices']), {(-1, -2), (-1, 8)})
same("practice[1]", set(c1['foci']), {(-1, -1), (-1, 7)})

# practice[2]: 9x² + 4y² + 36x − 8y + 4 = 0
G2 = 9*x**2 + 4*y**2 + 36*x - 8*y + 4
same("practice[2]", -4 + 36 + 4, 36)
same("practice[2]", expand(9*(x + 2)**2 + 4*(y - 1)**2 - 36), G2)
check("practice[2]", equivalent((x + 2)**2/4 + (y - 1)**2/9 - 1, G2/36), "standard form")
c2 = conic(G2)
check("practice[2]", c2['axis'] == 'vertical', "vertical")
same("practice[2]", (c2['a2'], c2['b2']), (9, 4))
same("practice[2]", set(c2['foci']), {(-2, 1 - sqrt(5)), (-2, 1 + sqrt(5))})

# practice[3]: whispering gallery 50 ft by 30 ft
same("practice[3]", sqrt(625 - 225), 20)
same("practice[3]", 25 - 20, 5)
