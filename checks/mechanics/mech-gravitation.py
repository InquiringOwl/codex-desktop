# content: 537b6469341a
# mech-gravitation: Newton's Law of Universal Gravitation
Gc = 6.67e-11; ME = 5.97e24; RE = 6.37e6

near("formal", Gc*ME/RE**2, 9.81)

# example: 75.0 kg at 400 km
r = RE + 4.00e5
near("example", r, 6.77e6)
near("example", Gc*ME*75/r**2, 652)
near("example", Gc*ME*75/RE**2, 736)
near("example", (RE/r)**2, 0.885)
near("example", Gc*ME/r**2, 8.69)
near("example", r/RE - 1, 0.06, rel=0.05)
near("example", 1 - (RE/r)**2, 0.12, rel=0.05)

# practice[0]
F0 = Gc*70*70/1.00**2
near("practice[0]", F0, 3.27e-7)
near("practice[0]", 70*9.80, 686)
near("practice[0]", 686/F0, 2e9, rel=0.1)

# practice[1]
F1 = Gc*ME*7.35e22/3.84e8**2
near("practice[1]", F1, 1.98e20)
near("practice[1]", F1/4, 4.96e19)

# practice[2]
near("practice[2]", sqrt(2) - 1, 0.414)
near("practice[2]", (sqrt(2) - 1)*RE, 2.64e6)
same("practice[2]", simplify((1/sqrt(2))**2), Rational(1, 2))

# practice[3]
ratio = sqrt(7.35e22/ME)
near("practice[3]", ratio, 0.111)
x0 = 3.84e8/(1 + ratio)
near("practice[3]", x0, 3.46e8)
check("practice[3]", abs(ME/x0**2 - 7.35e22/(3.84e8 - x0)**2) < 1e-9*ME/x0**2, "the two pulls cancel at x0")
near("practice[3]", x0/3.84e8, 0.90, rel=0.01)
