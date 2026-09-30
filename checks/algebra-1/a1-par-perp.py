# content: 736a09a81f54
# a1-par-perp: Parallel & Perpendicular Lines
R = Rational
slope = lambda eq: solve(eq, y)[0].coeff(x)
# example
m_ = R(3, 4)
road = m_*(x - 12) + 3
same("example", road, R(3, 4)*x - 6)
same("example", R(3, 4)*(-12), -9)
mp = -1/m_
same("example", mp, -R(4, 3))
path = mp*(x - 12) + 3
same("example", path, -R(4, 3)*x + 19)
same("example", -R(4, 3)*(-12), 16)
same("example", m_*mp, -1)
same("example", path.subs(x, 12), 3)
same("example", 3*x - 4*road, 24)
same("example", 4*x + 3*path, 57)
# practice[0]
same("practice[0]", slope(Eq(y, -5*x + 1)), -5)
same("practice[0]", -1/R(-5), R(1, 5))
# practice[1]
s1, s2 = slope(Eq(2*x + 3*y, 6)), slope(Eq(3*x - 2*y, 4))
same("practice[1]", [s1, s2], [-R(2, 3), R(3, 2)])
same("practice[1]", s1*s2, -1)
# practice[2]
same("practice[2]", slope(Eq(4*x - 2*y, 7)), 2)
same("practice[2]", 2*(x + 2) + 5, 2*x + 9)
check("practice[2]", (2*x + 9).subs(x, -2) == 5, "passes (-2,5)")
same("practice[2]", solve(Eq(y, -1), y)[0], -1)  # horizontal line through (3, -1): y equals its y-coordinate
# practice[3]
g = slope(Eq(3*x - 5*y, 10))
same("practice[3]", g, R(3, 5))
same("practice[3]", -1/g, -R(5, 3))
l3 = -R(5, 3)*(x + 3) + 4
same("practice[3]", l3, -R(5, 3)*x - 1)
same("practice[3]", 5*x + 3*l3, -3)
same("practice[3]", 5*(-3) + 3*4, -3)
