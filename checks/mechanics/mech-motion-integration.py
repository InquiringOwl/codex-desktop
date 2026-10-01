# content: 0e4a978ffd90
# mech-motion-integration: Finding Velocity & Position by Integration

# example: a = 6.00 - 1.50 t, rest at 0
A = 6 - Rational(3, 2)*t
V = integrate(A, (t, 0, t))
same("example", V, 6*t - Rational(3, 4)*t**2)
same("example", V.subs(t, 4), 12)
X = integrate(V, (t, 0, t))
same("example", X, 3*t**2 - Rational(1, 4)*t**3)
same("example", X.subs(t, 4), 32)
same("example", A.subs(t, 4), 0)
same("example", Rational(1, 2)*4*6, 12)
check("example", V.subs(t, 4) < 6*4, "less than constant 6.00 m/s^2 would give")

# practice[0]: a = 2, v0 = 3, x0 = 0
V0 = 3 + integrate(2, (t, 0, t)); X0 = integrate(V0, (t, 0, t))
same("practice[0]", V0, 3 + 2*t)
same("practice[0]", X0, 3*t + t**2)
same("practice[0]", V0.subs(t, 4), 11)
same("practice[0]", X0.subs(t, 4), 28)

# practice[1]: piecewise a
a1 = Piecewise((4, t < 3), (0, t < 5), (-2, True))
same("practice[1]", integrate(a1, (t, 0, 7)), 8)

# practice[2]: a = -0.5 t, v0 = 4
V2 = 4 + integrate(-Rational(1, 2)*t, (t, 0, t))
same("practice[2]", V2, 4 - t**2/4)
solves("practice[2]", Eq(V2, 0), t, {4}, domain=Interval(0, oo))
X2 = integrate(V2, (t, 0, t))
same("practice[2]", X2, 4*t - t**3/12)
near("practice[2]", X2.subs(t, 4), 10.7)
near("practice[2]", Rational(64, 12), 5.33)

# practice[3]: a = 3 cos 2t
V3 = integrate(3*cos(2*t), (t, 0, t))
same("practice[3]", simplify(V3 - Rational(3, 2)*sin(2*t)), 0)
X3 = integrate(V3, (t, 0, t))
same("practice[3]", simplify(X3 - Rational(3, 4)*(1 - cos(2*t))), 0)
same("practice[3]", maximum(X3, t, Interval(0, 2*pi)), Rational(3, 2))
same("practice[3]", minimum(X3, t, Interval(0, 2*pi)), 0)
same("practice[3]", X3.subs(t, pi/2), Rational(3, 2))
near("practice[3]", float(pi/2), 1.6, rel=0.02)
