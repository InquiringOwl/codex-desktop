# content: bb38116083eb
# mech-kinetic: Kinetic Energy & the Work-Energy Theorem
G = Rational(98, 10)

# example: 1200 kg car at 25.0 m/s skids to rest, mu_k = 0.700
m, v0, mu = 1200, 25, Rational(7, 10)
K = Rational(1, 2) * m * v0**2
near("example", K, 3.75e5)
f = mu * m * G
near("example", f, 8.23e3)
dd = K / f
near("example", dd, 45.6)
near("example", v0**2 / (2 * mu * G), 45.6)
near("example", (2 * v0)**2 / (2 * mu * G), 182)
# work-energy theorem in 1-D from F = m dv/dt
vA, vB, mm = symbols("v_A v_B m_m", positive=True)
same("formal", integrate(mm * v, (v, vA, vB)), mm * vB**2 / 2 - mm * vA**2 / 2)

# practice[0]: baseball
Kb = Rational(1, 2) * Rational(145, 1000) * 40**2
near("practice[0]", Kb, 116)
near("practice[0]", Rational(1, 2) * Rational(145, 1000) * 80**2, 464)

# practice[1]: 2.00 kg, 3.00 m/s, 10.0 N over 4.00 m
Ki = Rational(1, 2) * 2 * 3**2
near("practice[1]", Ki, 9.00)
near("practice[1]", 10 * 4, 40.0)
near("practice[1]", sqrt(2 * (Ki + 40) / 2), 7.00)

# practice[2]: bullet 10.0 g at 400 m/s, stops in 5.00 cm
Kbul = Rational(1, 2) * Rational(1, 100) * 400**2
near("practice[2]", Kbul, 800)
near("practice[2]", Kbul / Rational(5, 100), 1.60e4)

# practice[3]: F = 12 - 3x on 2.00 kg from rest, 0 to 4 m
W = integrate(12 - 3 * x, (x, 0, 4))
same("practice[3]", W, 24)
near("practice[3]", sqrt(2 * W / 2), 4.90)
check("practice[3]", all((12 - 3 * x).subs(x, xv) >= 0 for xv in [0, 1, 2, 3, 4]) and (12 - 3 * x).subs(x, 4) == 0, "force non-negative on [0,4], zero at 4")
