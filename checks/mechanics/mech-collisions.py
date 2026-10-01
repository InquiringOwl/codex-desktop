# content: 87cc5e469884
# mech-collisions: Collisions: Elastic & Inelastic
G = Rational(98, 10)

# example: 1200 kg east 18.0 m/s + 2000 kg north 12.0 m/s, stick
Px, Py, Mt = 1200 * 18, 2000 * 12, 3200
same("example", Px, 21600)
same("example", Py, 24000)
vf = sqrt(Px**2 + Py**2) / Mt
near("example", vf, 10.1)
near("example", atan(Rational(Py, Px)) * 180 / pi, 48.0)
Ki = Rational(1, 2) * 1200 * 18**2 + Rational(1, 2) * 2000 * 12**2
near("example", Rational(1, 2) * 1200 * 18**2, 1.944e5)
near("example", Rational(1, 2) * 2000 * 12**2, 1.440e5)
near("example", Ki, 3.38e5)
Kf = Rational(1, 2) * Mt * vf**2
near("example", Kf, 1.63e5)
near("example", Ki - Kf, 1.76e5)
near("example", (Ki - Kf) / Ki * 100, 51.9)
near("example", sqrt(Px**2 + Py**2), 32300)
check("example", 0 < Ki - Kf < Ki, "energy lost is positive and less than total")
# formal: KE loss formula with e = 0 in 1-D equals direct computation (sample numbers)
mA, mB, uA, uB, e_ = 2, 1, 3, 0, 0
vA_ = (mA*uA + mB*uB - mB*e_*(uA - uB)) / Rational(mA + mB)
vB_ = (mA*uA + mB*uB + mA*e_*(uA - uB)) / Rational(mA + mB)
same("formal", Rational(1,2)*mA*uA**2 + Rational(1,2)*mB*uB**2 - Rational(1,2)*mA*vA_**2 - Rational(1,2)*mB*vB_**2,
     Rational(1,2) * Rational(mA*mB, mA+mB) * (1 - e_**2) * (uA - uB)**2)
# general symbolic check of the loss formula
ma, mb, ua, ub, ee = symbols('ma mb ua ub ee', positive=True)
va = (ma*ua + mb*ub - mb*ee*(ua - ub)) / (ma + mb)
vb = (ma*ua + mb*ub + ma*ee*(ua - ub)) / (ma + mb)
same("formal", simplify(ma*ua**2/2 + mb*ub**2/2 - ma*va**2/2 - mb*vb**2/2 - ma*mb/(ma+mb)*(1-ee**2)*(ua-ub)**2/2), 0)

# practice[0]: 2.00 kg at 3.00 m/s + 1.00 kg at rest, stick
near("practice[0]", Rational(2 * 3, 3), 2.00)
near("practice[0]", Rational(1, 2) * 2 * 9, 9.00)
near("practice[0]", Rational(1, 2) * 3 * 4, 6.00)
near("practice[0]", 9 - 6, 3.00)

# practice[1]: 0.500 kg at 4.00 m/s elastic on 1.50 kg at rest
a1, b1 = symbols('a1 b1')
m1, m2 = Rational(1, 2), Rational(3, 2)
sols = solve([Eq(m1 * 4, m1 * a1 + m2 * b1), Eq(m1 * 16 / 2, m1 * a1**2 / 2 + m2 * b1**2 / 2)], [a1, b1])
real = [s for s in sols if s[0] != 4]
same("practice[1]", real[0][0], -2)
same("practice[1]", real[0][1], 2)
same("practice[1]", m1 * a1**2 / 2 + 0 * b1, m1 * a1**2 / 2)
near("practice[1]", Rational(1, 2) * m1 * 4, 1.00)
near("practice[1]", Rational(1, 2) * m2 * 4, 3.00)

# practice[2]: drop 2.00 m, rebound 1.28 m
e = sqrt(Rational(128, 200))
near("practice[2]", e, 0.800)
near("practice[2]", 1 - e**2, 0.360)

# practice[3]: ballistic pendulum 0.0100 kg into 2.00 kg, rise 0.0800 m
V = sqrt(2 * G * Rational(8, 100))
near("practice[3]", V, 1.25)
near("practice[3]", Rational(201, 100) / Rational(1, 100) * V, 252)
near("practice[3]", Rational(1, 100) / Rational(201, 100) * 100, 0.498)
