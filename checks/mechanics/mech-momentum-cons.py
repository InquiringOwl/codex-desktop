# content: c9b61f521461
# mech-momentum-cons: Conservation of Linear Momentum

# example: 85.0 kg astronaut throws 1.50 kg bag at +8.00 m/s, 10.0 m away
vA = symbols('vA')
sol = solve(Eq(0, 85 * vA + Rational(3, 2) * 8), vA)[0]
near("example", sol, -0.141)
check("example", sol < 0, "recoil toward the spacecraft")
near("example", 10 / abs(sol), 70.8)
near("example", 8 / Rational(141, 1000), 56.7, rel=0.01)
near("example", Rational(85) / Rational(3, 2), 56.7)
same("example", 85 * sol + Rational(3, 2) * 8, 0)

# practice[0]: skaters 50.0 and 70.0 kg
v = solve(Eq(0, 50 * Rational(14, 10) + 70 * x), x)[0]
near("practice[0]", v, -1.00)

# practice[1]: ball 1.00 kg at 10.0 m/s, Earth 5.97e24 kg
near("practice[1]", 10 / 5.97e24, 1.68e-24)

# practice[2]: 60 kg person on 120 kg raft, 1.50 m/s relative
vp, vr = symbols('vp vr')
s = solve([Eq(60 * vp + 120 * vr, 0), Eq(vp - vr, Rational(3, 2))], [vp, vr])
same("practice[2]", s[vp], 1)
same("practice[2]", s[vr], Rational(-1, 2))

# practice[3]: 3.00 kg at rest; 1.00 kg east 12.0, 0.500 kg north 20.0
p3x, p3y = -(1 * 12), -(Rational(1, 2) * 20)
same("practice[3]", 3 - 1 - Rational(1, 2), Rational(3, 2))
near("practice[3]", sqrt(p3x**2 + p3y**2), 15.6)
near("practice[3]", sqrt(p3x**2 + p3y**2) / Rational(3, 2), 10.4)
near("practice[3]", atan(Rational(10, 12)) * 180 / pi, 39.8)
check("practice[3]", p3x < 0 and p3y < 0, "third piece goes south of west")
