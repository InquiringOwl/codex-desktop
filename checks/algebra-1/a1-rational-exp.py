# content: 4c0b9bac2464
# a1-rational-exp: Rational Exponents

# formal
same("formal", real_root(-8, 3), -2)
check("formal", not Pow(-16, Rational(1, 4)).is_real, "(-16)^(1/4) not real")

# example: Kleiber B = 70 M^(3/4)
same("example", Integer(81)**Rational(3, 4), 27)
same("example", 70*Integer(81)**Rational(3, 4), 1890)
same("example", Integer(16)**Rational(3, 4), 8)
same("example", 70*Integer(16)**Rational(3, 4), 560)
check("example", abs(81/16 - 5.1) < 0.05, "81/16 ≈ 5.1")
same("example", Rational(1890, 560), 3.375)

# practice[0..3]
same("practice[0]", Integer(27)**Rational(2, 3), 9)
same("practice[1]", Integer(16)**Rational(-3, 4), Rational(1, 8))
xp = Symbol('xp', positive=True); yp = Symbol('yp', positive=True)
same("practice[2]", xp**Rational(1, 2)*xp**Rational(1, 3), xp**Rational(5, 6))
same("practice[2]", root(xp**5, 6), xp**Rational(5, 6))
same("practice[3]", powsimp(expand_power_base((32*xp**10*yp**5)**Rational(3, 5))), 8*xp**6*yp**3)
same("practice[3]", real_root(-8, 3), -2)
check("practice[3]", not Pow(-16, Rational(1, 4)).is_real, "(-16)^(1/4) not real")
