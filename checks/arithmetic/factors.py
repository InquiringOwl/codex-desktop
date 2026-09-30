# content: 10a4c2b9270f
# factors: Factors, Multiples & Divisibility

# example: 84 chairs, rows of 6..15
same("example", divisors(84), [1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84])
same("example", len(divisors(84)), 12)
same("example", 8 + 4, 12)
check("example", 84 % 5 != 0 and 84 % 8 != 0 and 84 % 9 != 0, "5, 8, 9 should not divide 84")
same("example", (8 * 8, 9 * 9, 10 * 10), (64, 81, 100))
_rows = [dd for dd in divisors(84) if 6 <= dd <= 15]
same("example", _rows, [6, 7, 12, 14])
same("example", [84 // dd for dd in _rows], [14, 12, 7, 6])

# practice[0]
same("practice[0]", divisors(18), [1, 2, 3, 6, 9, 18])
check("practice[0]", 1 * 18 == 2 * 9 == 3 * 6 == 18, "factor pairs")
# practice[1]
same("practice[1]", [7 * k for k in range(1, 6)], [7, 14, 21, 28, 35])
# practice[2]
same("practice[2]", 2 + 3 + 4, 9)
check("practice[2]", 234 % 3 == 0 and 234 % 9 == 0, "234 divisible by 3 and 9")
same("practice[2]", Rational(234, 3), 78)
same("practice[2]", Rational(234, 9), 26)
# practice[3]
check("practice[3]", 16 % 4 == 0 and 7416 % 4 == 0, "divisible by 4")
same("practice[3]", 7 + 4 + 1 + 6, 18)
check("practice[3]", 7416 % 6 == 0 and 7416 % 9 == 0, "divisible by 6 and 9")
same("practice[3]", Rational(7416, 9), 824)
