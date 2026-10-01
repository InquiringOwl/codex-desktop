# content: f2128bbc432d
# mech-2d-motion: Motion in Two & Three Dimensions

# example: r(t) = 2.00 t^2 i + (8.00 t - 1.00 t^2) j
X = 2*t**2; Y = 8*t - t**2
vx, vy = diff(X, t), diff(Y, t)
ax, ay = diff(vx, t), diff(vy, t)
same("example", vx, 4*t)
same("example", vy, 8 - 2*t)
same("example", ax, 4); same("example", ay, -2)
near("example", sqrt(ax**2 + ay**2), 4.47)
same("example", X.subs(t, 3), 18); same("example", Y.subs(t, 3), 15)
same("example", vx.subs(t, 3), 12); same("example", vy.subs(t, 3), 2)
near("example", sqrt(12**2 + 2**2), 12.2)
near("example", deg(atan(Rational(2, 12))), 9.46)
same("example", X.subs(t, 3) / 3, 6); same("example", Y.subs(t, 3) / 3, 5)
same("example", (vx.subs(t, 0) + vx.subs(t, 3)) / 2, 6)
same("example", (vy.subs(t, 0) + vy.subs(t, 3)) / 2, 5)

# practice[0]: r1 = (3, -2, 1), r2 = (-1, 4, 5), 2.00 s
d = Matrix([-1, 4, 5]) - Matrix([3, -2, 1])
same("practice[0]", tuple(d), (-4, 6, 4))
near("practice[0]", d.norm(), 8.25)
same("practice[0]", tuple(d / 2), (-2, 3, 2))

# practice[1]: r = 5t i + 2t^3 j at t = 1
vx1, vy1 = diff(5*t, t), diff(2*t**3, t)
same("practice[1]", vy1, 6*t**2)
same("practice[1]", (vx1.subs(t, 1), vy1.subs(t, 1)), (5, 6))
near("practice[1]", sqrt(5**2 + 6**2), 7.81)
same("practice[1]", diff(vy1, t).subs(t, 1), 12)

# practice[2]: v0 = 20 i, a = 5 j, t = 4
same("practice[2]", 5*4, 20)
near("practice[2]", sqrt(20**2 + 20**2), 28.3)
same("practice[2]", deg(atan(Rational(20, 20))), 45)
same("practice[2]", (20*4, Rational(1, 2)*5*4**2), (80, 40))

# practice[3]: v = (4, -3), a = (1.5, 2)
same("practice[3]", 2*(4*Rational(3, 2) + (-3)*2), 0)
same("practice[3]", sqrt(4**2 + 3**2), 5)
same("practice[3]", sqrt(Rational(3, 2)**2 + 2**2), Rational(5, 2))
