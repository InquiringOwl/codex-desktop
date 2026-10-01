# content: c38fc6362cb9
# mech-potential: Potential Energy & Conservative Forces
G = Rational(98, 10)

# example: 70.0 kg hiker, 1500 m -> 2350 m
dy = 2350 - 1500
same("example", dy, 850)
dU = 70 * G * dy
near("example", dU, 5.83e5)
near("example", -dU, -5.83e5)
near("example", dU / 4184, 139)
# formal: spring potential from integrating F = -kx
kk = symbols("kk", positive=True)
same("formal", -integrate(-kk * s, (s, 0, x)), kk * x**2 / 2)
same("formal", -diff(kk * x**2 / 2, x), -kk * x)

# practice[0]: 2.00 kg book, 1.50 m
near("practice[0]", 2 * G * Rational(3, 2), 29.4)
near("practice[0]", 0 - 2 * G * Rational(3, 2), -29.4)

# practice[1]: k = 250 N/m, x = 0.120 and 0.240 m
near("practice[1]", Rational(1, 2) * 250 * Rational(12, 100)**2, 1.80)
near("practice[1]", Rational(1, 2) * 250 * Rational(24, 100)**2, 7.20)

# practice[2]: U = 3x^2 - 2x^3
U = 3 * x**2 - 2 * x**3
Fx = -diff(U, x)
same("practice[2]", Fx, -6 * x + 6 * x**2)
near("practice[2]", Fx.subs(x, 2), 12.0)

# practice[3]: friction on two paths
f = Rational(3, 10) * 5 * G
near("practice[3]", f, 14.7)
same("practice[3]", sqrt(3**2 + 4**2), 5)
near("practice[3]", -f * 5, -73.5)
near("practice[3]", -f * 7, -103)
