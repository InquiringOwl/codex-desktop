# content: ed4650d51e8d
# mixed-numbers: Mixed Numbers & Improper Fractions
amt = 2 + Rational(2, 3)
same("example", amt, Rational(8, 3))
same("example", amt / Rational(1, 3), 8)
check("example", divmod(8, 3) == (2, 2), "8 ÷ 3 should be 2 R 2")
same("practice[0]", 3 + Rational(1, 4), Rational(13, 4))
check("practice[1]", divmod(17, 5) == (3, 2), "17 ÷ 5 should be 3 R 2")
same("practice[1]", Rational(17, 5), 3 + Rational(2, 5))
check("practice[2]", divmod(45, 6) == (7, 3), "45 ÷ 6 should be 7 R 3")
same("practice[2]", Rational(45, 6), 7 + Rational(1, 2))
same("practice[3]", Rational(29, 7), 4 + Rational(1, 7))
check("practice[3]", 4 + Rational(1, 3) > Rational(29, 7), "4 1/3 should be longer")
