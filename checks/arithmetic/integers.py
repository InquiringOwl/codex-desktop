# content: ae7f568d00c2
# integers: Integers & Negative Numbers
same("formal", -3 - 5, -3 + (-5))
same("formal", (-3)*(-4), 12)
check("formal", Rational(1, 2).is_integer is False, "1/2 should not be an integer")
# example: -8 +15 -11
noon = -8 + 15
same("example", noon, 7)
same("example", noon - 11, -4)
same("practice[0]", -5 + 9, 4)
same("practice[1]", 3 - 10, -7)
same("practice[2]", -6 - (-14), 8)
same("practice[3]", (-4)*(-7), 28)
same("practice[3]", (-3)*5, -15)
same("practice[3]", (-4)*(-7) - (-3)*5, 43)
