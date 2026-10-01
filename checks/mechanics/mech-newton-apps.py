# content: eba5be9e8e83
# mech-newton-apps: Inclines & Connected Objects
G = Rational(98, 10)
deg = pi / 180
T = Symbol("T", real=True)

# example: 5.00 kg on 30 deg ramp, 4.00 kg hanging, mu_s 0.300, mu_k 0.200
th = 30 * deg
w2, par, perp = 4 * G, 5 * G * sin(th), 5 * G * cos(th)
near("example", w2, 39.2)
near("example", par, 24.5)
near("example", perp, 42.4)
near("example", w2 - par, 14.7)
near("example", Rational(3, 10) * perp, 12.7)
check("example", w2 - par > Rational(3, 10) * perp, "system starts to move")
fk = Rational(2, 10) * perp
near("example", fk, 8.49)
sol = solve([Eq(w2 - T, 4*a), Eq(T - par - fk, 5*a)], [a, T])
near("example", sol[a], 0.690)
near("example", sol[T], 36.4)
check("example", sol[T] < w2, "tension below hanging weight")

# practice[0]: frictionless 20 deg
near("practice[0]", G * sin(20 * deg), 3.35)
same("practice[0]", G * sin(0), 0)
same("practice[0]", G * sin(90 * deg), G)

# practice[1]: Atwood 3.00 and 5.00 kg
s = solve([Eq(5*G - T, 5*a), Eq(T - 3*G, 3*a)], [a, T])
near("practice[1]", s[a], 2.45)
near("practice[1]", s[T], 36.8)
near("practice[1]", 3 * G, 29.4)
near("practice[1]", 5 * G, 49.0)

# practice[2]: 35 deg, mu_k 0.250, 4.00 m from rest
acc = G * (sin(35 * deg) - Rational(1, 4) * cos(35 * deg))
near("practice[2]", sin(35 * deg), 0.574)
near("practice[2]", Rational(1, 4) * cos(35 * deg), 0.205)
near("practice[2]", acc, 3.61)
near("practice[2]", sqrt(8 / acc), 1.49)

# practice[3]: 6.00 kg on table mu_k 0.100, 2.00 kg hanging
s = solve([Eq(2*G - T, 2*a), Eq(T - Rational(1, 10)*6*G, 6*a)], [a, T])
near("practice[3]", 2 * G, 19.6)
near("practice[3]", 6 * G, 58.8)
near("practice[3]", Rational(1, 10) * 6 * G, 5.88)
near("practice[3]", s[a], 1.72)
near("practice[3]", s[T], 16.2)
