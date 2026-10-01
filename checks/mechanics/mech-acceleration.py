# content: 2042251133f0
# mech-acceleration: Acceleration

# example: v = 12.0 t - 1.50 t^2
V = 12*t - Rational(3, 2)*t**2
A = diff(V, t)
same("example", A, 12 - 3*t)
same("example", V.subs(t, 2), 18)
same("example", A.subs(t, 2), 6)
check("example", V.subs(t, 2)*A.subs(t, 2) > 0, "speeding up at 2 s")
same("example", V.subs(t, 6), 18)
same("example", A.subs(t, 6), -6)
check("example", V.subs(t, 6)*A.subs(t, 6) < 0, "slowing down at 6 s")
solves("example", Eq(A, 0), t, {4})
same("example", V.subs(t, 4), 24)
same("example", V.subs(t, 8), 0)
same("example", (V.subs(t, 8) - V.subs(t, 0)) / 8, 0)
near("example", 6 / 9.80, 0.61, rel=0.01)
near("example", 24 * 3.6, 86, rel=0.01)
same("example", Max(abs(A.subs(t, 0)), abs(A.subs(t, 8))), 12)

# practice[0]
near("practice[0]", 26.8 / 5.60, 4.79)
near("practice[0]", 26.8 / 5.60 / 9.80, 0.488)

# practice[1]: v = -8.0, a = +3.0
check("practice[1]", (-8.0)*(3.0) < 0, "opposite signs: slowing down")
near("practice[1]", 8.0 / 3.0, 2.7, rel=0.02)

# practice[2]: 70.0 m/s to 0 in 2.00 s
near("practice[2]", (0 - 70.0) / 2.00, -35.0)
near("practice[2]", 35.0 / 9.80, 3.57)

# practice[3]: x = 2t^3 - 9t^2 + 12t
X = 2*t**3 - 9*t**2 + 12*t
Vx, Ax = diff(X, t), diff(X, t, 2)
same("practice[3]", Vx, 6*t**2 - 18*t + 12)
same("practice[3]", Ax, 12*t - 18)
same("practice[3]", Vx.subs(t, Rational(1, 2)), Rational(9, 2))
same("practice[3]", Ax.subs(t, Rational(1, 2)), -12)
check("practice[3]", Vx.subs(t, Rational(1, 2))*Ax.subs(t, Rational(1, 2)) < 0, "slowing down")
solves("practice[3]", Eq(Vx, 0), t, {1, 2})
