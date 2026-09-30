# content: ebd0a093cbb2
# a1-radical-eq: Radical Equations

# formal: squaring can introduce roots; cube root has none
solves("formal", Eq(x**2, 9), x, {3, -3})
solves("formal", Eq(real_root(x - 1, 3), -2), x, {-7})

# example: S = sqrt(30 d f), f = 0.75
f_ = Rational(3, 4)
same("example", 30*f_, 22.5)
same("example", 45**2, 2025)
solves("example", Eq(sqrt(30*d*f_), 45), d, {90})
same("example", sqrt(30*f_*90), 45)
S120 = sqrt(30*f_*120)
same("example", 30*f_*120, 2700)
same("example", S120, 30*sqrt(3))
check("example", abs(N(S120) - 52) < 0.5, f"S = {N(S120)} ~ 52")
check("example", N(S120) > 45, "120 ft skid means faster than 45 mph")

# practice[0]
solves("practice[0]", Eq(sqrt(x + 3), 5), x, {22})

# practice[1]
solves("practice[1]", Eq(sqrt(2*x - 1) + 4, 7), x, {5})

# practice[2]
solves("practice[2]", Eq(sqrt(x - 3) + 8, 5), x, S.EmptySet)
solves("practice[2]", Eq(x - 3, 9), x, {12})
check("practice[2]", sqrt(12 - 3) + 8 != 5, "x = 12 fails the check")

# practice[3]
same("practice[3]", expand((x + 1)**2 - (x + 7)), x**2 + x - 6)
solves("practice[3]", Eq(x + 7, (x + 1)**2), x, {-3, 2})
solves("practice[3]", Eq(sqrt(x + 7), x + 1), x, {2})
check("practice[3]", sqrt(-3 + 7) == 2 and -3 + 1 == -2, "x = -3 extraneous")
