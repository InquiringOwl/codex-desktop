# content: 51eb9603f6de
# a2-parabolas: Parabolas: Focus & Directrix
from algebra import *
R = Rational
p_ = symbols('p_', positive=True)
P_ = symbols('P_', real=True, nonzero=True)

# formal: distance to (0, p) = distance to y = −p  ⇔  x² = 4py (square both sides; both sides ≥ 0)
check("formal", equivalent(expand(x**2 + (y - P_)**2 - (y + P_)**2), x**2 - 4*P_*y), "squared distances differ by x² − 4py")
pts = [(2, R(1, 1)), (-6, R(9, 1)), (1, R(1, 4))]   # on x² = 4y (p = 1)
for X0, Y0 in pts:
    check("formal", sqrt(X0**2 + (Y0 - 1)**2) == abs(Y0 + 1), f"PF = PD at ({X0}, {Y0}) on x² = 4y")
# general vertex forms: focus and directrix
h_, k_ = symbols('h_ k_', real=True)
cv = conic((x - 2)**2 - 4*3*(y - 1))
same("formal", (cv['h'], cv['k'], cv['p']), (2, 1, 3))
same("formal", tuple(cv['focus']), (2, 4))
ch = conic((y - 1)**2 + 4*2*(x - 5))
same("formal", (ch['h'], ch['k'], ch['p']), (5, 1, -2))
same("formal", tuple(ch['focus']), (3, 1))
# latus rectum length |4p|: x² = 4py meets y = p at x = ±2p
same("formal", real_solutions(Eq(x**2, 4*p_*p_), x), {-2*p_, 2*p_})
# y = a(x − h)² + k ⇒ (x − h)² = (1/a)(y − k): 4p = 1/a
a_ = symbols('a_', real=True, nonzero=True)
check("formal", equivalent(((y - k_)/a_).subs(y, a_*(x - h_)**2 + k_), (x - h_)**2), "4p = 1/a")
# reflective property: tangent to x² = 4py at (x0, x0²/(4p)); vertical ray reflects through (0, p)
x0 = symbols('x0', positive=True)
Pt = Matrix([x0, x0**2/(4*p_)])
T = Matrix([1, x0/(2*p_)]); T = T/sqrt(T.dot(T))
din = Matrix([0, -1])
dout = 2*din.dot(T)*T - din
toF = Matrix([0, p_]) - Pt
check("formal", simplify(dout[0]*toF[1] - dout[1]*toF[0]) == 0, "reflected ray is parallel to P→F")
check("formal", simplify(dout.dot(toF)) != 0, "reflected ray points along P→F line")

# example: y² − 4y − 8x + 28 = 0
G = y**2 - 4*y - 8*x + 28
same("example", expand((y**2 - 4*y) - (8*x - 28)), G)
same("example", (R(-4)/2)**2, 4)
same("example", expand((y**2 - 4*y + 4) - (8*x - 24)), G)
same("example", expand((y - 2)**2 - 8*(x - 3)), G)
c = conic(G)
check("example", c['type'] == 'parabola' and c['axis'] == 'horizontal', "horizontal parabola")
same("example", (c['h'], c['k'], c['p']), (3, 2, 2))
same("example", tuple(c['focus']), (5, 2))
same("example", c['directrix'], ('x', 1))
same("example", real_solutions(Eq((y - 2)**2, 8*(5 - 3)), y), {-2, 6})
same("example", G.subs({x: 5, y: 6}), 0)
same("example", sqrt((5 - 5)**2 + (6 - 2)**2), 4)
same("example", abs(5 - 1), 4)

# practice[0]: x² = 12y
c0 = conic(x**2 - 12*y)
same("practice[0]", c0['p'], 3)
same("practice[0]", tuple(c0['focus']), (0, 3))
same("practice[0]", c0['directrix'], ('y', -3))

# practice[1]: focus (2, 1), directrix y = −3
same("practice[1]", (R(1 + (-3), 2)), -1)
same("practice[1]", 1 - (-1), 2)
G1 = (x - 2)**2 - 8*(y + 1)
check("practice[1]", equivalent(expand((x - 2)**2 + (y - 1)**2 - (y + 3)**2), G1), "locus equation")
c1 = conic(expand(G1))
same("practice[1]", tuple(c1['focus']), (2, 1))
same("practice[1]", c1['directrix'], ('y', -3))

# practice[2]: x² + 2x + 6y − 23 = 0
G2 = x**2 + 2*x + 6*y - 23
same("practice[2]", expand((x**2 + 2*x + 1) - (-6*y + 24)), G2)
same("practice[2]", expand((x + 1)**2 + 6*(y - 4)), G2)
c2 = conic(G2)
same("practice[2]", (c2['h'], c2['k'], c2['p']), (-1, 4, R(-3, 2)))
same("practice[2]", tuple(c2['focus']), (-1, R(5, 2)))
same("practice[2]", c2['directrix'], ('y', R(11, 2)))
same("practice[2]", abs(4*c2['p']), 6)

# practice[3]: dish 60 cm across, 10 cm deep
same("practice[3]", solve(Eq(30**2, 4*p_*10), p_), [R(45, 2)])
near("practice[3]", 900/40, 22.5)
