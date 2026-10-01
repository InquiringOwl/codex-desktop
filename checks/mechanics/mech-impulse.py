# content: 85b3876b55ff
# mech-impulse: Momentum & Impulse
G = Rational(98, 10)

# example: 0.145 kg baseball, -40.0 -> +50.0 m/s, contact 0.700 ms, triangular pulse
m = Rational(145, 1000)
dp = m * (50 - (-40))
same("example", dp, Rational(1305, 100))
near("example", dp, 13.1)
dt = Rational(7, 10000)
near("example", dp / dt, 1.86e4)
near("example", 2 * dp / dt, 3.73e4)
near("example", m * G, 1.42)
near("example", (dp / dt) / (m * G), 1.3e4, rel=0.02)
# triangle area check: 1/2 * Fmax * dt = J
same("example", Rational(1, 2) * (2 * dp / dt) * dt, dp)
# mistakes: 13.05/0.700 = 18.6 (wrong units)
near("example", Rational(1305, 100) / Rational(7, 10), 18.6)

# practice[0]: car and bullet momentum
near("practice[0]", 1500 * 25, 3.75e4)
near("practice[0]", Rational(1, 100) * 400, 4.00)

# practice[1]: egg 0.0600 kg at 4.00 m/s
J = Rational(6, 100) * 4
near("practice[1]", J, 0.240)
near("practice[1]", J / Rational(2, 1000), 120)
near("practice[1]", J / Rational(1, 10), 2.40)
same("practice[1]", Rational(1, 10) / Rational(2, 1000), 50)

# practice[2]: F(t) = 1.2e6 t - 4e8 t^2 on [0, 3 ms], m = 0.0580 kg
Ft = Rational(12, 10) * 10**6 * t - 4 * 10**8 * t**2
T = Rational(3, 1000)
same("practice[2]", Ft.subs(t, T), 0)
Jt = integrate(Ft, (t, 0, T))
near("practice[2]", Jt, 1.80)
near("practice[2]", (Rational(6, 10) * 10**6 * t**2).subs(t, T), 5.40)
near("practice[2]", (Rational(4, 3) * 10**8 * t**3).subs(t, T), 3.60)
tp = solve(diff(Ft, t), t)[0]
near("practice[2]", tp, 1.50e-3)
near("practice[2]", Ft.subs(t, tp), 900)
near("practice[2]", Jt / Rational(58, 1000), 31.0)

# practice[3]: 0.400 kg, 20.0 m/s at 30 deg to normal, elastic bounce, 10.0 ms
dpn = 2 * Rational(4, 10) * 20 * cos(pi / 6)
near("practice[3]", dpn, 13.9)
near("practice[3]", dpn / Rational(1, 100), 1.39e3)
check("practice[3]", True, "parallel component unchanged, so impulse is along the normal")
