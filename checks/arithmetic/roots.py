# content: 3893bb518cb5
# roots: Square Roots & Perfect Squares
R = Rational
check("formal", sqrt(2*3) == sqrt(2)*sqrt(3) and sqrt(x**2) == Abs(x), "root rules")

# example: area 200
check("example", 14**2 == 196 and 15**2 == 225 and 196 < 200 < 225, "between 14 and 15")
bab = lambda A, g: (g + A/g)/2
x1 = bab(200, R(14))
check("example", abs(N(R(200, 14)) - 14.2857) < 0.00005, "200/14 ≈ 14.2857")
check("example", abs(N(x1) - 14.1429) < 0.00005, "x1 ≈ 14.1429")
x2 = bab(200, R(141429, 10000))
check("example", abs(N(x2) - 14.1421) < 0.00005, "x2 ≈ 14.1421")
same("example", sqrt(200), 10*sqrt(2))
check("example", abs(N(sqrt(200)) - 14.142) < 0.0005, "≈ 14.142")
check("example", abs(N(sqrt(200)) - 14.14) < 0.005, "≈ 14.14")
check("example", abs(4*14.142 - 56.57) < 0.005, "4 × 14.142 ≈ 56.57")
check("example", abs(N(40*sqrt(2)) - 56.6) < 0.05, "perimeter ≈ 56.6")

# practice[0]
same("practice[0]", sqrt(144), 12)
# practice[1]
check("practice[1]", 7 < sqrt(50) < 8 and 49 < 50 < 64, "between 7 and 8")
check("practice[1]", sqrt(50) - 7 < 8 - sqrt(50), "closer to 7")
check("practice[1]", abs(N(sqrt(50)) - 7.07) < 0.005, "≈ 7.07")
# practice[2]
same("practice[2]", sqrt(72), 6*sqrt(2))
same("practice[2]", 36*2, 72)
# practice[3]
same("practice[3]", bab(10, R(3)), R(19, 6))
check("practice[3]", abs(N(R(19, 6)) - 3.1667) < 0.00005, "≈ 3.1667")
check("practice[3]", abs(N(sqrt(10)) - 3.1623) < 0.00005, "√10 ≈ 3.1623")
