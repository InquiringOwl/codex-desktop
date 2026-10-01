# content: 02ce7ae8f88e
# mech-velocity: Average & Instantaneous Velocity

# example: x = 1.80 t^2
X = Rational(18, 10)*t**2
same("example", X.subs(t, 2), Rational(72, 10))
same("example", X.subs(t, 4), Rational(288, 10))
near("example", (X.subs(t, 4) - X.subs(t, 2)) / 2, 10.8)
V = diff(X, t)
same("example", V, Rational(36, 10)*t)
near("example", V.subs(t, 4), 14.4)
same("example", X.subs(t, Rational(39, 10)), Rational(27378, 1000))
near("example", (X.subs(t, 4) - X.subs(t, Rational(39, 10))) / Rational(1, 10), 14.2)
near("example", V.subs(t, 4) * Rational(36, 10), 51.8)

# practice[0]: 12.0 km E in 30 min, 4.0 km W in 10 min
T = Rational(40, 60)  # h
near("practice[0]", T, 0.667)
near("practice[0]", 8 / T, 12.0)
near("practice[0]", (8 / T) / Rational(36, 10), 3.33)
near("practice[0]", 16 / T, 24.0)
near("practice[0]", (16 / T) / Rational(36, 10), 6.67)

# practice[1]: x = 2 + 6t - 1.5t^2
X1 = 2 + 6*t - Rational(3, 2)*t**2
solves("practice[1]", Eq(diff(X1, t), 0), t, {2})
same("practice[1]", X1.subs(t, 2), 8)
check("practice[1]", diff(X1, t, 2) < 0, "maximum position")

# practice[2]: x = 4 + 2t - t^3
X2 = 4 + 2*t - t**3
same("practice[2]", diff(X2, t), 2 - 3*t**2)
same("practice[2]", diff(X2, t).subs(t, 2), -10)

# practice[3]: x = 5 t^2, secant from 1
h = symbols('h', positive=True)
vb = simplify((5*(1 + h)**2 - 5) / h)
same("practice[3]", vb, 10 + 5*h)
same("practice[3]", limit(vb, h, 0), 10)
same("practice[3]", diff(5*t**2, t).subs(t, 1), 10)
