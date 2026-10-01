# content: eddc6434650b
# mech-newton-3: Newton's Third Law
G = Rational(98, 10)

# example: skaters 50.0 and 80.0 kg, 120 N for 0.800 s
aA, aB = Rational(120, 50), Rational(120, 80)
near("example", aA, 2.40)
near("example", aB, 1.50)
vA, vB = aA * Rational(8, 10), aB * Rational(8, 10)
near("example", vA, 1.92)
near("example", vB, 1.20)
same("example", 50 * vA, 80 * vB)
near("example", 50 * vA, 96.0)

# practice[0]: 0.200 kg apple, Earth 5.97e24 kg
w = Rational(2, 10) * G
near("practice[0]", w, 1.96)
near("practice[0]", w / Float(5.97e24), 3.28e-25)

# practice[1]: truck 3.00e3, car 1.00e3, force 2.40e4 N
near("practice[1]", 2.40e4 / 1.00e3, 24.0)
near("practice[1]", 2.40e4 / 3.00e3, 8.00)

# practice[2]: 36.0 N on A (4.00 kg) pushing B (2.00 kg)
sol = solve([Eq(36 - p, 4*a), Eq(p, 2*a)], [a, p])
near("practice[2]", sol[a], 6.00)
near("practice[2]", sol[p], 12.0)

# practice[3]: astronaut 80.0 kg, capsule 400 kg, 40.0 N for 2.00 s
a1, a2 = Rational(40, 80), Rational(40, 400)
near("practice[3]", a1, 0.500)
near("practice[3]", a2, 0.100)
near("practice[3]", a1 * 2, 1.00)
near("practice[3]", a2 * 2, 0.200)
near("practice[3]", Rational(1, 2) * (a1 + a2) * 2**2, 1.20)
