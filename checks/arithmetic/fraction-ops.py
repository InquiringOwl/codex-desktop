# content: ea8c4ae5e5ac
# fraction-ops: Operations with Fractions
R = Rational

# example
same("example", ilcm(3, 4), 12)
same("example", (R(2, 3), R(3, 4)), (R(8, 12), R(9, 12)))
_used = R(2, 3) + R(3, 4)
same("example", _used, R(17, 12))
same("example", _used, 1 + R(5, 12))
same("example", 2 + R(1, 2), R(30, 12))
_left = 2 + R(1, 2) - _used
same("example", _left, R(13, 12))
same("example", _left, 1 + R(1, 12))

# practice[0]
same("practice[0]", R(1, 4) + R(3, 8), R(5, 8))
# practice[1]
same("practice[1]", ilcm(6, 4), 12)
same("practice[1]", R(5, 6) - R(3, 4), R(1, 12))
# practice[2]
same("practice[2]", R(4, 9) * R(3, 8), R(1, 6))
same("practice[2]", R(1, 3) * R(1, 2), R(1, 6))
same("practice[2]", R(12, 72), R(1, 6))
# practice[3]
same("practice[3]", 2 + R(1, 4), R(9, 4))
same("practice[3]", (2 + R(1, 4)) / R(3, 8), 6)
same("practice[3]", R(72, 12), 6)
