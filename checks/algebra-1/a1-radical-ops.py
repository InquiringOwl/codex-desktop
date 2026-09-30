# content: 719bf8442997
# a1-radical-ops: Operations with Radicals

# formal: no sum rule
check("formal", sqrt(9 + 16) != sqrt(9) + sqrt(16), "sqrt(a+b) != sqrt a + sqrt b")
same("formal", expand((p + sqrt(7))*(p - sqrt(7))), p**2 - 7)

# example: sides sqrt18, sqrt32, sqrt50
same("example", 18 + 32, 50)
same("example", sqrt(18), 3*sqrt(2))
same("example", sqrt(32), 4*sqrt(2))
same("example", sqrt(50), 5*sqrt(2))
P = sqrt(18) + sqrt(32) + sqrt(50)
same("example", P, 12*sqrt(2))
check("example", abs(N(P) - 16.97) < 0.005, f"perimeter {N(P)} ~ 16.97")
check("example", ceiling(N(P)) == 17, "buy 17 m")
same("example", Rational(1, 2)*sqrt(18)*sqrt(32), 12)

# practice[0]
same("practice[0]", 5*sqrt(3) + 2*sqrt(3) - sqrt(3), 6*sqrt(3))

# practice[1]
same("practice[1]", sqrt(12), 2*sqrt(3))
same("practice[1]", sqrt(75), 5*sqrt(3))
same("practice[1]", sqrt(27), 3*sqrt(3))
same("practice[1]", sqrt(12) + sqrt(75) - sqrt(27), 4*sqrt(3))

# practice[2]
same("practice[2]", expand((2 + sqrt(5))*(3 - sqrt(5))), 1 + sqrt(5))
same("practice[2]", sqrt(6)*sqrt(15), 3*sqrt(10))
same("practice[2]", 6*15, 90)

# practice[3]
same("practice[3]", 6/(3 - sqrt(5)), (9 + 3*sqrt(5))/2)
same("practice[3]", 9 - 5, 4)
same("practice[3]", (18 + 6*sqrt(5))/4, (9 + 3*sqrt(5))/2)
same("practice[3]", radsimp(6/(3 - sqrt(5))), Rational(9, 2) + Rational(3, 2)*sqrt(5))
