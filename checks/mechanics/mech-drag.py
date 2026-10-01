# content: dad538b0b8f0
# mech-drag: Drag Force & Terminal Speed
G = Rational(98, 10)

# example: 85.0 kg skydiver, A = 0.700 m^2, C = 1.00, rho = 1.21 kg/m^3
m, A, C, rho = 85, Rational(7, 10), 1, Rational(121, 100)
w = m * G
near("example", w, 833)
vT = sqrt(2 * w / (rho * C * A))
near("example", vT, 44.4)
near("example", atanh(Rational(9, 10)), 1.47)
tt = atanh(Rational(9, 10)) * vT / G
near("example", tt, 6.66)
near("example", vT * Rational(36, 10), 160)
near("example", G * tt, 65, rel=0.01)   # no-drag speed after 6.66 s
# v(t) = vT tanh(g t / vT) solves m dv/dt = mg - (1/2) C rho A v^2
cq = rho * C * A / 2
vq = vT * tanh(G * t / vT)
check("example", simplify(m * diff(vq, t) - (m * G - cq * vq**2)) == 0, "tanh solution satisfies the ODE")

# practice[0]: at half terminal speed, drag = 0.25 mg, a = 0.75 g
near("practice[0]", Rational(1, 2)**2, 0.250)
near("practice[0]", G * (1 - Rational(1, 4)), 7.35)

# practice[1]: car C = 0.300, A = 2.20, v = 30.0 and 15.0 m/s
FD = Rational(1, 2) * Rational(3, 10) * rho * Rational(22, 10) * 30**2
near("practice[1]", FD, 359)
near("practice[1]", Rational(1, 2) * Rational(3, 10) * rho * Rational(22, 10) * 15**2, 89.8)

# practice[2]: linear drag m = 0.200 kg, b = 0.500 kg/s
mb, b = Rational(2, 10), Rational(1, 2)
vTl = mb * G / b
near("practice[2]", vTl, 3.92)
near("practice[2]", mb / b, 0.400)
near("practice[2]", vTl * (1 - exp(-Rational(1, 1) / (mb / b))), 3.60)

# practice[3]: derive v(t) and 99 % time
vl = vTl * (1 - exp(-t / (mb / b)))
check("practice[3]", simplify(mb * diff(vl, t) - (mb * G - b * vl)) == 0, "exponential solves linear-drag ODE")
check("practice[3]", vl.subs(t, 0) == 0, "starts from rest")
check("practice[3]", limit(vl, t, oo) == vTl, "limit is terminal speed")
near("practice[3]", log(100), 4.605)
near("practice[3]", (mb / b) * log(100), 1.84)
