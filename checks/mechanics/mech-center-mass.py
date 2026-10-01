# content: d9931d8674a6
# mech-center-mass: Center of Mass
G = Rational(98, 10)

# example: Earth-Moon barycenter
ME, MM, dEM, RE = 5.97e24, 7.35e22, 3.84e8, 6.37e6
near("example", ME + MM, 6.04e24)
xcm = MM * dEM / (ME + MM)
near("example", xcm, 4.67e6)
near("example", RE - xcm, 1.70e6)
near("example", xcm / dEM * 100, 1.2, rel=0.03)
near("example", ME / MM, 81, rel=0.01)
check("example", xcm < RE, "barycenter inside Earth")

# practice[0]
near("practice[0]", Rational(2 * 0 + 3 * 4 + 5 * 6, 10), 4.20)

# practice[1]
near("practice[1]", Rational(2 * 3, 6), 1.00)
near("practice[1]", Rational(3 * 4, 6), 2.00)

# practice[2]: lambda = 3x on [0, 2]
Mr = integrate(3 * x, (x, 0, 2))
same("practice[2]", Mr, 6)
same("practice[2]", integrate(3 * x**2, (x, 0, 2)), 8)
near("practice[2]", integrate(3 * x**2, (x, 0, 2)) / Mr, 1.33)

# practice[3]: 50.0 m/s at 60 deg, split at apex
R = 50**2 * sin(2 * pi / 3) / G
near("practice[3]", R, 221)
near("practice[3]", R / 2, 110.5)
xo = solve(Eq((R / 2 + x) / 2, R), x)[0]
near("practice[3]", xo, 331)
