# content: 7f8ee157597d
# division: Division

# example: 347 eggs, cartons of 12
same("example", divmod(34, 12), (2, 10))
same("example", 2 * 12, 24)
same("example", 10 * 10 + 7, 107)
same("example", divmod(107, 12), (8, 11))
same("example", 8 * 12, 96)
same("example", 9 * 12, 108)
same("example", divmod(347, 12), (28, 11))
same("example", 12 * 28 + 11, 347)
same("example", 12 * 28, 336)

# practice[0]
same("practice[0]", Rational(56, 7), 8)
# practice[1]
same("practice[1]", divmod(97, 4), (24, 1))
same("practice[1]", 4 * 24, 96)
# practice[2]
same("practice[2]", divmod(100, 12), (8, 4))
same("practice[2]", Rational(1008, 12), 84)
same("practice[2]", 12 * 84, 1008)
# practice[3]: vans needed = ceil(500/12)
same("practice[3]", divmod(500, 12), (41, 8))
same("practice[3]", ceiling(Rational(500, 12)), 42)
