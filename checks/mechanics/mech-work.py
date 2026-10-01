# content: 2ed8aa52d812
# mech-work: Work
G = Rational(98, 10)

# example: 40.0 kg sled, T = 120 N at 30.0 deg, d = 15.0 m, mu_k = 0.200
m, T, d, mu = 40, 120, 15, Rational(2, 10)
th = pi / 6
WT = T * d * cos(th)
near("example", cos(th), 0.866)
near("example", WT, 1.56e3)
near("example", T * cos(th), 103.9)
N = m * G - T * sin(th)
near("example", m * G, 392)
near("example", T * sin(th), 60.0)
near("example", N, 332)
near("example", mu * N, 66.4)
Wf = -mu * N * d
near("example", Wf, -996)
near("example", WT + Wf, 563)
near("example", (T * cos(th) - mu * N) * d, 563)
near("example", T * d, 1800)   # mistakes line: whole force

# practice[0]: lift 5.00 kg by 1.20 m; carry horizontally
near("practice[0]", 5 * G * Rational(12, 10), 58.8)
check("practice[0]", cos(pi / 2) == 0, "perpendicular force does no work")

# practice[1]: F = (3, -4) N, d = (5, 2) m
Fv, dv = Matrix([3, -4]), Matrix([5, 2])
W1 = Fv.dot(dv)
same("practice[1]", W1, 7)
near("practice[1]", Fv.norm(), 5.00)
near("practice[1]", dv.norm(), 5.39)
near("practice[1]", Fv.norm() * dv.norm(), 26.9)
near("practice[1]", W1 / (Fv.norm() * dv.norm()), 0.260)
near("practice[1]", acos(W1 / (Fv.norm() * dv.norm())) * 180 / pi, 74.9)

# practice[2]: spring k = 400 N/m
k = 400
near("practice[2]", integrate(k * x, (x, 0, Rational(1, 10))), 2.00)
near("practice[2]", integrate(k * x, (x, Rational(1, 10), Rational(2, 10))), 6.00)

# practice[3]: F = 2x + 3x^2 from 1 to 3
same("practice[3]", integrate(2 * x + 3 * x**2, (x, 1, 3)), 34)
