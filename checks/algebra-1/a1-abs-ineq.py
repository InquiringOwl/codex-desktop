# content: 09c91a88072c
# a1-abs-ineq: Absolute Value Inequalities
R = Rational
# formal: |x - h| > k -> two rays
solves("formal", Abs(x - 1) > 2, x, Union(Interval.open(-oo, -1), Interval.open(3, oo)))

# example: within 1.5% of 500 mL
same("example", R(15, 1000)*500, R(75, 10))
solves("example", Abs(v - 500) <= R(75, 10), v, Interval(R(4925, 10), R(5075, 10)))
same("example", Abs(495 - 500), 5)
check("example", Abs(495 - 500) <= R(75, 10) and Abs(510 - 500) > R(75, 10), "495 passes, 510 fails")

solves("practice[0]", Abs(x) < 4, x, Interval.open(-4, 4))
solves("practice[1]", Abs(x - 3) >= 2, x, Union(Interval(-oo, 1), Interval(5, oo)))
solves("practice[2]", Abs(2*x + 1) - 3 < 6, x, Interval.open(-5, 4))
solves("practice[3]", Abs(x + 2) < -1, x, S.EmptySet)
solves("practice[3]", Abs(x + 2) >= -1, x, S.Reals)
