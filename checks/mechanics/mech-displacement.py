# content: d02d343c5ce7
# mech-displacement: Position, Displacement & Distance

# example: train 2.0 -> 7.5 -> -1.5 km
x0, x1, xf = Rational(20, 10), Rational(75, 10), Rational(-15, 10)
same("example", xf - x0, Rational(-35, 10))
same("example", (x1 - x0) + (xf - x1), xf - x0)
same("example", abs(x1 - x0) + abs(xf - x1), Rational(145, 10))
check("example", abs(xf - x0) <= abs(x1 - x0) + abs(xf - x1), "distance >= |displacement|")

# practice[0]
same("practice[0]", -5 - 12, -17)

# practice[1]: +40, -25, +10
same("practice[1]", 40 - 25 + 10, 25)
same("practice[1]", 40 + 25 + 10, 75)

# practice[2]: two laps of 400 m
same("practice[2]", 2*400, 800)
check("practice[2]", True, "conceptual: displacement 0 after returning to the start")

# practice[3]: x = 2t^2 - 8t + 5 on [0, 5]
X = 2*t**2 - 8*t + 5
tt = solve(diff(X, t), t)
same("practice[3]", tt, [2])
same("practice[3]", X.subs(t, 0), 5)
same("practice[3]", X.subs(t, 5), 15)
same("practice[3]", X.subs(t, 2), -3)
same("practice[3]", X.subs(t, 5) - X.subs(t, 0), 10)
same("practice[3]", integrate(Abs(diff(X, t)), (t, 0, 5)), 26)
