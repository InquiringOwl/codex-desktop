# content: 86dc20e615d5
# mech-newton-2: Newton's Second Law, Mass & Weight
G = Rational(98, 10)

# example: 1500 kg car, 0 -> 27.0 m/s in 9.00 s, 450 N resistance
m = 1500
acc = Rational(27) / 9
near("example", acc, 3.00)
near("example", m * acc, 4.50e3)
near("example", m * acc + 450, 4.95e3)
near("example", m * G, 1.47e4)
near("example", acc / G, 0.31, rel=0.02)
check("example", 4950 > 4500, "drive force exceeds net force by the resistance")
# mistakes line: wrong a = 4950/1500
near("example", Rational(4950, 1500), 3.30)

# practice[0]: 65.0 kg on Earth and Moon
near("practice[0]", 65 * G, 637)
near("practice[0]", 65 * Rational(162, 100), 105)

# practice[1]: 24.0 N on 3.00 kg and 6.00 kg
near("practice[1]", Rational(24, 3), 8.00)
near("practice[1]", Rational(24, 6), 4.00)

# practice[2]: 10.0 N east + 6.00 N north on 4.00 kg
Fn = sqrt(10**2 + 6**2)
near("practice[2]", Fn, 11.7)
near("practice[2]", Fn / 4, 2.92)
near("practice[2]", atan(Rational(6, 10)) * 180 / pi, 31.0)

# practice[3]: x = 3t^3 - 4t, m = 2.00 kg, t = 2.00 s
x = 3*t**3 - 4*t
same("practice[3]", diff(x, t), 9*t**2 - 4)
same("practice[3]", diff(x, t, 2), 18*t)
near("practice[3]", diff(x, t, 2).subs(t, 2), 36.0)
near("practice[3]", 2 * diff(x, t, 2).subs(t, 2), 72.0)
