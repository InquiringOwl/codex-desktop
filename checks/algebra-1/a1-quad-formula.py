# content: dcd1afd4688e
# a1-quad-formula: The Quadratic Formula & Discriminant

# formal: completed-square derivation identity
check("formal", simplify((x + b/(2*a))**2 - (b**2 - 4*a*c)/(4*a**2) - (x**2 + b/a*x + c/a)) == 0, "completing the square")

# example: (8+2x)(10+2x) = 140
same("example", expand((8 + 2*x)*(10 + 2*x) - 140), 4*x**2 + 36*x - 60)
same("example", discriminant(x**2 + 9*x - 15, x), 141)
solves("example", Eq((8 + 2*x)*(10 + 2*x), 140), x, {(-9 + sqrt(141))/2, (-9 - sqrt(141))/2})
r = (-9 + sqrt(141))/2
check("example", abs(N(r) - 1.44) < 0.005, f"positive root {N(r)} rounds to 1.44")
check("example", abs(N((-9 - sqrt(141))/2) + 10.44) < 0.005, "negative root ~ -10.44")
check("example", abs(N(sqrt(141)) - 11.874) < 0.0005, "sqrt(141) ~ 11.874")
check("example", abs(N(r) - 1.437) < 0.0005, "x ~ 1.437")
check("example", abs(N((8 + 2*r)*(10 + 2*r)) - 140) < 1e-9, "area check")

# practice[0]
same("practice[0]", discriminant(x**2 + 5*x + 6, x), 1)
solves("practice[0]", Eq(x**2 + 5*x + 6, 0), x, {-2, -3})

# practice[1]
same("practice[1]", discriminant(2*x**2 - 4*x - 3, x), 40)
solves("practice[1]", Eq(2*x**2 - 4*x - 3, 0), x, {(2 + sqrt(10))/2, (2 - sqrt(10))/2})
same("practice[1]", sqrt(40), 2*sqrt(10))
check("practice[1]", abs(N((2 + sqrt(10))/2) - 2.58) < 0.005 and abs(N((2 - sqrt(10))/2) + 0.58) < 0.005, "rounding 2.58, -0.58")

# practice[2]
same("practice[2]", discriminant(x**2 + 2*x + 5, x), -16)
solves("practice[2]", Eq(x**2 + 2*x + 5, 0), x, S.EmptySet)
same("practice[2]", discriminant(9*x**2 - 12*x + 4, x), 0)
solves("practice[2]", Eq(9*x**2 - 12*x + 4, 0), x, {Rational(2, 3)})
same("practice[2]", discriminant(2*x**2 + 3*x - 1, x), 17)
sol = solveset(2*x**2 + 3*x - 1, x, S.Reals)
check("practice[2]", len(sol) == 2 and all(not v.is_rational for v in sol), "two irrational solutions")

# practice[3]
same("practice[3]", discriminant(3*x**2 - 2*x - 7, x), 88)
solves("practice[3]", Eq(3*x**2, 2*x + 7), x, {(1 + sqrt(22))/3, (1 - sqrt(22))/3})
same("practice[3]", sqrt(88), 2*sqrt(22))
check("practice[3]", abs(N((1 + sqrt(22))/3) - 1.90) < 0.005 and abs(N((1 - sqrt(22))/3) + 1.23) < 0.005, "rounding 1.90, -1.23")
