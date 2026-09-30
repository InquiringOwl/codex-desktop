# content: 7026977f1e28
# pa-equations: Equations & Their Solutions
R = Rational
solves("formal", Eq(2*x + 3, 11), x, {4})
solves("formal", Eq(x + x, 2*x), x, S.Reals)
solves("formal", Eq(x + 1, x + 2), x, S.EmptySet)

# example: 120 + 85h = 417.50
bill = R(41750, 100)
same("example", 120 + 85*3, 375)
check("example", 120 + 85*3 != bill, "3 not a solution")
same("example", 85*R(7, 2), R(29750, 100))
same("example", 120 + 85*R(7, 2), bill)
solves("example", Eq(120 + 85*h, bill), h, {R(7, 2)})
same("example", 85*R(1, 2), R(4250, 100)); same("example", bill - 375, R(4250, 100))
# practice[0]
check("practice[0]", 3*5 - 4 == 11, "x=5 solves")
# practice[1]
same("practice[1]", (-2)**2 + (-2), 2)
check("practice[1]", (-2)**2 + (-2) != 6, "y=-2 not a solution")
# practice[2]
same("practice[2]", 9 - 3 - 6, 0); same("practice[2]", 4 + 2 - 6, 0)
same("practice[2]", {v for v in (-3, 0, 2) if v**2 + v - 6 == 0}, {-3, 2})
# practice[3]
solves("practice[3]", Eq(3*(x + 2), 3*x + 6), x, S.Reals)
solves("practice[3]", Eq(2*(x + 1), 2*x + 5), x, S.EmptySet)
same("practice[3]", expand(2*(x + 1)), 2*x + 2)
