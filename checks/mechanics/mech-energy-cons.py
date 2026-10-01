# content: 2fcc4dd2b65f
# mech-energy-cons: Conservation of Energy
G = Rational(98, 10)

# example: 60.0 kg skateboarder from 4.00 m
m = 60
UA = m * G * 4
near("example", UA, 2.35e3)
same("example", UA, Rational(2352))
near("example", sqrt(2 * G * 4), 8.85)
near("example", sqrt(2 * G * Rational(5, 2)), 7.00)
KB = Rational(1, 2) * m * 8**2
near("example", KB, 1.92e3)
near("example", UA - KB, 432)
near("example", (UA - KB) / UA * 100, 18.4)
check("example", 8 < sqrt(2 * G * 4), "measured speed below frictionless speed")

# practice[0]: drop from 20.0 m
near("practice[0]", sqrt(2 * G * 20), 19.8)

# practice[1]: k = 800 N/m, x = 0.0500 m, m = 0.0200 kg
Us = Rational(1, 2) * 800 * Rational(5, 100)**2
near("practice[1]", Us, 1.00)
near("practice[1]", sqrt(2 * Us / Rational(2, 100)), 10.0)
near("practice[1]", Us / (Rational(2, 100) * G), 5.10)

# practice[2]: 1.50 kg block, 1.80 m ramp, mu_k = 0.250
near("practice[2]", sqrt(2 * G * Rational(18, 10)), 5.94)
near("practice[2]", Rational(18, 10) / Rational(1, 4), 7.20)

# practice[3]: loop of radius 10.0 m
R, hh, vt2 = symbols("R hh vt2", positive=True)
sol = solve([Eq(vt2, G * R), Eq(G * hh, G * 2 * R + vt2 / 2)], [vt2, hh], dict=True)[0]
same("practice[3]", sol[hh], Rational(5, 2) * R)
near("practice[3]", sol[hh].subs(R, 10), 25.0)
near("practice[3]", sqrt(2 * G * 25), 22.1)
