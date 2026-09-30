# content: e8484a637343
# a1-rational-eq: Rational Equations & Applications

# example: 1/6 + 1/t = 1/4
solves("example", Eq(Rational(1, 6) + 1/t, Rational(1, 4)), t, {12})
same("example", expand(12*t*(Rational(1, 6) + 1/t)), 2*t + 12)
same("example", Rational(1, 6) + Rational(1, 12), Rational(1, 4))

# practice[0]
solves("practice[0]", Eq(5/x + Rational(1, 3), 2), x, {3})

# practice[1]
solves("practice[1]", Eq((x + 1)/4, 6/(x - 1)), x, {-5, 5})
same("practice[1]", Rational(-4, 4), Rational(6, -6))

# practice[2]: no solution
solves("practice[2]", Eq(x/(x - 2) + 1, 2/(x - 2)), x, S.EmptySet)
solves("practice[2]", Eq(x + x - 2, 2), x, {2})   # cleared equation root (extraneous)

# practice[3]
solves("practice[3]", Eq(x/(x - 2), 4/(x**2 - 2*x)), x, {-2})
solves("practice[3]", Eq(x**2, 4), x, {-2, 2})
same("practice[3]", Rational(-2, -4), Rational(4, 8))
