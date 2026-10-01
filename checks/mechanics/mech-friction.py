# content: ed01498673fb
# mech-friction: Friction
G = Rational(98, 10)
deg = pi / 180

# example: 30.0 kg crate, mu_s 0.500, mu_k 0.300, pushes 120 N and 160 N
Nn = 30 * G
near("example", Nn, 294)
fsmax = Rational(1, 2) * Nn
near("example", fsmax, 147)
check("example", 120 < fsmax and 160 > fsmax, "120 N holds, 160 N slides")
fk = Rational(3, 10) * Nn
near("example", fk, 88.2)
near("example", (160 - fk) / 30, 2.39)

# practice[0]: 5.00 kg, mu_s 0.400, pushes 0 and 10.0 N
near("practice[0]", Rational(4, 10) * 5 * G, 19.6)
check("practice[0]", 10 < Rational(4, 10) * 5 * G, "10 N is below the threshold")

# practice[1]: 25.0 m/s skid, mu_k 0.700
acc = Rational(7, 10) * G
near("practice[1]", acc, 6.86)
near("practice[1]", 25**2 / (2 * acc), 45.6)

# practice[2]: 25.0 kg sled, 80.0 N at 30 deg, mu_k 0.150
Ns = 25 * G - 80 * sin(30 * deg)
near("practice[2]", Ns, 205)
near("practice[2]", Rational(15, 100) * Ns, 30.8)
near("practice[2]", 80 * cos(30 * deg), 69.3)
near("practice[2]", (80 * cos(30 * deg) - Rational(15, 100) * Ns) / 25, 1.54)

# practice[3]: slips at 31.0 deg, constant speed at 22.0 deg
near("practice[3]", tan(31 * deg), 0.601)
near("practice[3]", tan(22 * deg), 0.404)
same("practice[3]", simplify(m*g*sin(x) / (m*g*cos(x))), tan(x))
