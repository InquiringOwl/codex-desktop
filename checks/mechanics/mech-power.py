# content: 6cc0ac35578d
# mech-power: Power
G = Rational(98, 10)
HP = 746

# example: 1200 kg elevator, 2.50 m/s, 30.0 m, 400 N friction
m, v0, h, f = 1200, Rational(5, 2), 30, 400
T = m * G + f
near("example", T, 1.216e4)
P = T * v0
near("example", P, 3.04e4)
tt = h / v0
near("example", tt, 12.0)
near("example", T * h, 3.65e5)
near("example", T * h / tt, 3.04e4)
near("example", P / HP, 40.8)

# practice[0]: 70.0 kg, 4.00 m, 5.00 s
W = 70 * G * 4
near("practice[0]", W, 2744)
near("practice[0]", W / 5, 549)
near("practice[0]", W / 5 / HP, 0.736)

# practice[1]: 600 N at 30.0 m/s
near("practice[1]", 600 * 30, 1.80e4)
near("practice[1]", Rational(600 * 30, HP), 24.1)

# practice[2]: 60.0 W lamp for 24.0 h
near("practice[2]", Rational(6, 100) * 24, 1.44)
near("practice[2]", 60 * 24 * 3600, 5.18e6)
near("formal", 1000 * 3600, 3.60e6)

# practice[3]: 1500 kg car, a = 2.00 m/s^2 from rest, t = 5.00 s
F = 1500 * 2
near("practice[3]", F, 3.00e3)
vt = 2 * 5
near("practice[3]", vt, 10.0)
near("practice[3]", F * vt, 3.00e4)
Pavg = Rational(1, 2) * 1500 * vt**2 / 5
near("practice[3]", Pavg, 1.50e4)
same("practice[3]", integrate(F * 2 * t, (t, 0, 5)) / 5, Pavg)
