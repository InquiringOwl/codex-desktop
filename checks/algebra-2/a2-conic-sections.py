# content: 91248bc6fbed
# a2-conic-sections: Conic Sections & the General Equation
from algebra import *
R = Rational

# formal: classification by A and C (sample nondegenerate cases) and the degenerate cases
check("formal", conic(2*x**2 + 2*y**2 - 8)['type'] == 'circle', "A = C circle")
check("formal", conic(x**2 + 3*y**2 - 3)['type'] == 'ellipse', "AC > 0 ellipse")
check("formal", conic(x**2 - 3*y**2 - 3)['type'] == 'hyperbola', "AC < 0 hyperbola")
check("formal", conic(y**2 - 4*x)['type'] == 'parabola', "AC = 0 parabola")
check("formal", conic(x**2 + y**2)['type'] == 'degenerate', "sum of squares = 0: point")
check("formal", conic(x**2 + y**2 + 1)['type'] == 'empty', "sum of squares negative: empty")
same("formal", set(factor_list(x**2 - 4*y**2)[1]), {(x - 2*y, 1), (x + 2*y, 1)})   # two lines y = ±x/2

# example: 4x² + 9y² − 16x + 18y − 11 = 0
G = 4*x**2 + 9*y**2 - 16*x + 18*y - 11
check("example", 4*9 == 36 and 36 > 0, "AC = 36")
same("example", expand(4*(x**2 - 4*x) + 9*(y**2 + 2*y) - 11), G)
same("example", 11 + 4*4 + 9*1, 36)
same("example", expand(4*(x - 2)**2 + 9*(y + 1)**2 - 36), G)
check("example", equivalent((x - 2)**2/9 + (y + 1)**2/4 - 1, G/36), "divide by 36")
c = conic(G)
check("example", c['type'] == 'ellipse' and c['axis'] == 'horizontal', "horizontal ellipse")
same("example", (c['h'], c['k']), (2, -1))
same("example", (c['a2'], c['b2']), (9, 4))
same("example", set(c['vertices']), {(-1, -1), (5, -1)})

# practice[0]: x² + y² + 8x − 2y + 8 = 0
G0 = x**2 + y**2 + 8*x - 2*y + 8
same("practice[0]", -8 + 16 + 1, 9)
same("practice[0]", expand((x + 4)**2 + (y - 1)**2 - 9), G0)
c0 = conic(G0)
check("practice[0]", c0['type'] == 'circle', "circle")
same("practice[0]", (c0['h'], c0['k'], c0['r2']), (-4, 1, 9))

# practice[1]: classify
same("practice[1]", 2*(-5), -10)
check("practice[1]", conic(2*x**2 - 5*y**2 + 4*x - 7)['type'] == 'hyperbola', "(a)")
check("practice[1]", conic(y**2 - 6*x + 2*y)['type'] == 'parabola', "(b)")
check("practice[1]", conic(5*x**2 + y**2 - 10)['type'] == 'ellipse', "(c)")

# practice[2]: 9x² − 4y² − 54x − 16y + 29 = 0
G2 = 9*x**2 - 4*y**2 - 54*x - 16*y + 29
same("practice[2]", -29 + 81 - 16, 36)
same("practice[2]", expand(9*(x - 3)**2 - 4*(y + 2)**2 - 36), G2)
check("practice[2]", equivalent((x - 3)**2/4 - (y + 2)**2/9 - 1, G2/36), "standard form")
c2 = conic(G2)
check("practice[2]", c2['type'] == 'hyperbola' and c2['axis'] == 'horizontal', "opens left/right")
same("practice[2]", (c2['h'], c2['k']), (3, -2))

# practice[3]: x² + 4y² − 2x + 8y + 5 = 0 is the point (1, −1)
G3 = x**2 + 4*y**2 - 2*x + 8*y + 5
same("practice[3]", 1*4, 4)
same("practice[3]", -5 + 1 + 4, 0)
same("practice[3]", expand((x - 1)**2 + 4*(y + 1)**2), G3)
c3 = conic(G3)
check("practice[3]", c3['type'] == 'degenerate', "degenerate")
same("practice[3]", (c3['h'], c3['k']), (1, -1))
sol = solve([G3.diff(x), G3.diff(y)], [x, y])
check("practice[3]", sol[x] == 1 and sol[y] == -1, "only critical point (1, −1)")
same("practice[3]", G3.subs({x: 1, y: -1}), 0)
