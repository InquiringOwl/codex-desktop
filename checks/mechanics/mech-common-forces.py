# content: bf7ce37e75c1
# mech-common-forces: Normal, Tension & Spring Forces
G = Rational(98, 10)

# example: 70.0 kg in elevator accelerating up at 2.00 m/s^2
Nn = 70 * (G + 2)
near("example", Nn, 826)
near("example", Nn / G, 84.3)
near("example", 70 * G, 686)
same("example", 70 * (G - G), 0)
near("example", Nn - 70 * G, 140)

# practice[0]: 0.500 kg stretches 4.90 cm; then 1.20 kg
kk = Rational(5, 10) * G / Rational(49, 1000)
near("practice[0]", kk, 100)
near("practice[0]", Rational(12, 10) * G / kk, 0.118)

# practice[1]: 1.50 kg book + 10.0 N down
near("practice[1]", Rational(15, 10) * G + 10, 24.7)

# practice[2]: 20.0 kg sign, two ropes at 30 deg
T2 = 20 * G / (2 * sin(pi / 6))
near("practice[2]", T2, 196)
check("practice[2]", limit(1 / sin(x), x, 0, '+') == oo, "T -> infinity as angle -> 0")

# practice[3]: 15.0 kg lamp, cords at 30 and 60 deg
sol = solve([Eq(a * cos(pi/6), b * cos(pi/3)), Eq(a * sin(pi/6) + b * sin(pi/3), 15 * G)], [a, b])
near("practice[3]", 15 * G, 147)
near("practice[3]", sol[a], 73.5)
near("practice[3]", sol[b], 127)
check("practice[3]", sol[b] > sol[a], "steeper cord carries more")
