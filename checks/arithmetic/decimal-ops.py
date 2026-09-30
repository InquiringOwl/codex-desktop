# content: 873d5284f493
# decimal-ops: Operations with Decimals
R = Rational

# formal: 1 ÷ 0.3 = 3.333...
same("formal", R(1) / R(3, 10), R(10, 3))

# example
same("example", 275 * 640, 176000)
same("example", R(275, 100) * R(640, 100), R(17600, 1000))
same("example", R(275, 100) * R(640, 100), R(1760, 100))
same("example", 3 * 6, 18)
same("example", 20 - R(275, 100) * R(640, 100), R(240, 100))

# practice[0]
same("practice[0]", R(47, 10) + R(1235, 100), R(1705, 100))
# practice[1]
same("practice[1]", 10 - R(346, 100), R(654, 100))
# practice[2]
same("practice[2]", 6 * 25, 150)
same("practice[2]", R(6, 100) * R(25, 10), R(15, 100))
# practice[3]
same("practice[3]", R(756, 100) / R(36, 100), 21)
same("practice[3]", R(756, 36), 21)
