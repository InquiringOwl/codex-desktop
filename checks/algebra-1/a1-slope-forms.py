# content: 20345e309e47
# a1-slope-forms: Slope & Slope-Intercept Form

# example: seedling 11 cm on day 4, 20 cm on day 10
m_ = Rational(20 - 11, 10 - 4)
same("example", m_, 1.5)                       # page: m = 9/6 = 1.5
b_ = 11 - m_ * 4
same("example", b_, 5)                         # page: b = 5
h = lambda dd: m_ * dd + b_
same("example", h(10), 20)                     # check line
same("example", h(16), 29)                     # page answer: 29 cm on day 16

# practice[0]: slope through (2, −1) and (6, 7)
same("practice[0]", Rational(7 - (-1), 6 - 2), 2)

# practice[1]: 3x + 2y = 8 → y = −3/2 x + 4
sol = solve(Eq(3*x + 2*y, 8), y)[0]
same("practice[1]", sol, -Rational(3, 2)*x + 4)
same("practice[1]", sol.coeff(x), -Rational(3, 2))
same("practice[1]", sol.subs(x, 0), 4)

# practice[2]: through (−3, 4) and (3, 0) → y = −2/3 x + 2
line = -Rational(2, 3)*x + 2
check("practice[2]", line.subs(x, -3) == 4 and line.subs(x, 3) == 0, "line misses a given point")

# practice[3]: (4, −2) and (4, 5): run is 0, vertical line x = 4
check("practice[3]", 4 - 4 == 0, "run should be zero (undefined slope)")
