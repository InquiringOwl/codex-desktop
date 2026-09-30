# content: c6da5206ec45
# a1-line-forms: Forms of Linear Equations
R = Rational
# example: (120, 87), (200, 107)
m_ = R(107 - 87, 200 - 120)
same("example", [107 - 87, 200 - 120], [20, 80])
same("example", m_, 0.25)
b_ = 87 - m_*120
same("example", b_, 57)
same("example", R(1, 4)*(x - 120) + 87, R(1, 4)*x + 57)
same("example", -R(1, 4)*120, -30)
same("example", expand(4*(m_*x + b_)), x + 228)
lin = m_*x + b_
check("example", simplify((x - 4*lin) - (-228)) == 0, "x - 4y = -228 on the line")
same("example", 200 - 4*107, -228)
same("example", 4*107, 428)
check("example", lin.subs(x, 200) == 107, "passes (200,107)")

# practice[0]
same("practice[0]", 4*(x - 3) - 2, 4*x - 14)
same("practice[0]", 4*(-3), -12)
# practice[1]
yl = -R(2, 3)*x + 5
same("practice[1]", 3*yl, -2*x + 15)
same("practice[1]", 2*x + 3*yl, 15)
# practice[2]
m2 = R(-2 - 6, 3 - (-1))
same("practice[2]", m2, -2)
l2 = m2*(x + 1) + 6
same("practice[2]", l2, -2*x + 4)
same("practice[2]", 2*x + l2, 4)
check("practice[2]", l2.subs(x, 3) == -2, "passes (3,-2)")
# practice[3]
solves("practice[3]", Eq(3*x - 4*0, 12), x, {4})
solves("practice[3]", Eq(3*0 - 4*y, 12), y, {-3})
same("practice[3]", solve(Eq(3*x - 4*y, 12), y)[0].coeff(x), R(3, 4))
same("practice[3]", -R(3)/(-4), R(3, 4))
same("practice[3]", -2 - (-2), 0)
