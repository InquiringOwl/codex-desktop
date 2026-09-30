# content: bafd45b779a6
# counting: Counting & the Natural Numbers

# example: seats 14..22
_seats = list(range(14, 23))
same("example", _seats, [14, 15, 16, 17, 18, 19, 20, 21, 22])
same("example", len(_seats), 9)
same("example", 22 - 14, 8)
same("example", 22 - 14 + 1, 9)
check("example", len(_seats) == 9, "row should have exactly 9 seats for 9 students")

# practice[0]
_fives = list(range(5, 41, 5))
same("practice[0]", _fives, [5, 10, 15, 20, 25, 30, 35, 40])
same("practice[0]", len(_fives), 8)
same("practice[0]", Rational(40, 5), 8)

# practice[1]
same("practice[1]", 99 + 1, 100)
same("practice[1]", 1000 - 1, 999)

# practice[2]
same("practice[2]", len(range(7, 32)), 25)
same("practice[2]", 31 - 7 + 1, 25)

# practice[3]
same("practice[3]", len(range(45, 113)), 68)
same("practice[3]", 112 - 45 + 1, 68)
