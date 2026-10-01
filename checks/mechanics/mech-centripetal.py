# content: a054d04563aa
# mech-centripetal: Centripetal Force & Circular Dynamics
G = Rational(98, 10)
deg = pi / 180

# example: 1200 kg car, r = 50.0 m, mu_s = 0.800, v = 15.0 m/s
f_need = 1200 * 15**2 / 50
near("example", f_need, 5.40e3)
near("example", 1200 * G, 1.176e4)
fmax = Rational(8, 10) * 1200 * G
near("example", fmax, 9.41e3)
check("example", f_need < fmax, "tyres hold at 15 m/s")
vmax = sqrt(Rational(8, 10) * G * 50)
near("example", vmax, 19.8)
near("example", vmax * Rational(36, 10), 71, rel=0.01)
near("example", (vmax / 15)**2, 1.74)
near("example", fmax / f_need, 1.74)

# practice[0]: 0.250 kg, r 1.20 m, 4.00 m/s
near("practice[0]", Rational(1, 4) * 16 / Rational(12, 10), 3.33)

# practice[1]: banking for 25.0 m/s at r = 120 m
tt = 625 / (120 * G)
near("practice[1]", tt, 0.531)
near("practice[1]", atan(tt) / deg, 28.0)

# practice[2]: loop top r = 10.0 m, 60.0 kg at 14.0 m/s
near("practice[2]", sqrt(G * 10), 9.90)
near("practice[2]", Rational(14)**2 / 10, 19.6)
near("practice[2]", 60 * (Rational(196, 10) - G), 588)
same("practice[2]", 60 * (Rational(196, 10) - G), 60 * G)

# practice[3]: r = 100 m, bank 15.0 deg, mu_s 0.500
th, mu = 15 * deg, Rational(1, 2)
v2 = 100 * G * (sin(th) + mu * cos(th)) / (cos(th) - mu * sin(th))
near("practice[3]", sin(th), 0.2588, rel=0.001)
near("practice[3]", mu * cos(th), 0.4830, rel=0.001)
near("practice[3]", cos(th), 0.9659, rel=0.001)
near("practice[3]", mu * sin(th), 0.1294, rel=0.001)
near("practice[3]", v2, 869)
near("practice[3]", sqrt(v2), 29.5)
near("practice[3]", sqrt(v2) * Rational(36, 10), 106)
near("practice[3]", sqrt(mu * G * 100), 22.1)
# derivation check: N sin + f cos = m v^2/r, N cos - f sin = m g with f = mu N
Nn, V = symbols('Nn V', positive=True)
s1 = solve([Eq(Nn*sin(th) + mu*Nn*cos(th), m*V**2/r), Eq(Nn*cos(th) - mu*Nn*sin(th), m*g)], [Nn, V], dict=True)[0]
same("practice[3]", simplify(s1[V]**2 - r*g*(sin(th) + mu*cos(th))/(cos(th) - mu*sin(th))), 0)
