# content: 80f796d3b7dc
# pa-proportional: Proportional Relationships (y = kx)

# example: 0.75 lb $8.25, 1.2 lb $13.20
same("example", Rational(825, 100) / Rational(75, 100), 11)
same("example", Rational(1320, 100) / Rational(12, 10), 11)
same("example", 11*Rational(5, 2), 27.50)
same("example", Rational(2750, 100) / Rational(5, 2), 11)

# practice[0]
same("practice[0]", {Rational(yy, xx) for xx, yy in [(2, 6), (5, 15), (8, 24)]}, {3})

# practice[1]
r1 = [Rational(yy, xx) for xx, yy in [(1, 4), (2, 7), (3, 10)]]
same("practice[1]", r1[:2], [4, 3.5])
check("practice[1]", abs(float(r1[2]) - 3.3) < 0.05, f"10/3 = {float(r1[2])}")
check("practice[1]", len(set(r1)) > 1, "ratios should differ")
check("practice[1]", all(3*xx + 1 == yy for xx, yy in [(1, 4), (2, 7), (3, 10)]), "rule y = 3x + 1")

# practice[2]
k2 = Rational(12, 16)
same("practice[2]", k2, 0.75)
same("practice[2]", k2*28, 21)

# practice[3]
k3 = Rational(540, 12)
same("practice[3]", k3, 45)
solves("practice[3]", Eq(k3*t, 1125), t, {25})
