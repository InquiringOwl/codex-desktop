# content: 175428b8d8df
# a1-abs-eq: Absolute Value Equations
R = Rational
# formal: |u| = negative has no solution
solves("formal", Eq(Abs(x), -1), x, S.EmptySet)

# example: |L - 25.00| = 0.04
solves("example", Eq(Abs(l - 25), R(4, 100)), l, {R(2504, 100), R(2496, 100)})

solves("practice[0]", Eq(Abs(x + 3), 5), x, {-8, 2})
solves("practice[1]", Eq(2*Abs(3*x - 1) + 4, 18), x, {-2, R(8, 3)})
same("practice[1]", R(18 - 4, 2), 7)
solves("practice[2]", Eq(Abs(x - 4) + 9, 2), x, S.EmptySet)
same("practice[2]", 2 - 9, -7)
solves("practice[3]", Eq(Abs(2*x - 1), Abs(x + 5)), x, {6, -R(4, 3)})
same("practice[3]", 2*6 - 1, 11)
same("practice[3]", 2*(-R(4, 3)) - 1, -R(11, 3))
same("practice[3]", -R(4, 3) + 5, R(11, 3))
