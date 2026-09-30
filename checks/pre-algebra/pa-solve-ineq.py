# content: b2af74a779de
# pa-solve-ineq: Solving Linear Inequalities
R = Rational
# formal: variable cancels -> R or empty
solves("formal", x + 1 < x + 2, x, S.Reals)

# example: 30 + 0.75m <= 90
solves("example", 30 + R(75, 100)*m <= 90, m, Interval(-oo, 80))
same("example", 90 - 30, 60)
same("example", 30 + R(75, 100)*80, 90)
same("example", 30 + R(75, 100)*40, 60)
same("example", Intersection(solveset(30 + R(75, 100)*m <= 90, m, Reals), Interval(0, oo)), Interval(0, 80))

# practice[0]
solves("practice[0]", 3*x - 7 <= 8, x, Interval(-oo, 5))
# practice[1]
solves("practice[1]", 5 - 2*x >= 11, x, Interval(-oo, -3))
same("practice[1]", 5 - 2*(-4), 13)
# practice[2]
same("practice[2]", expand(2*(3 - x)), 6 - 2*x)
solves("practice[2]", 2*(3 - x) >= 4*x + 18, x, Interval(-oo, -2))
# practice[3]
same("practice[3]", expand(3*(x + 2)), 3*x + 6)
solves("practice[3]", 3*(x + 2) > 3*x + 8, x, S.EmptySet)
