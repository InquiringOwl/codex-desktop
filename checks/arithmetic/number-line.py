# content: b618233a926d
# number-line: Comparing & the Number Line
check("example", 18 > 11, "18 > 11")
same("example", Abs(18 - 11), 7)
check("practice[0]", 406 < 460, "406 < 460")
same("practice[1]", Abs(91 - 38), 53)
check("practice[2]", sorted([1209, 1092, 1290, 1029]) == [1029, 1092, 1209, 1290], "order")
same("practice[3]", Rational(36 + 84, 2), 60)
check("practice[3]", 60 - 36 == 24 and 84 - 60 == 24, "equal distances 24")
