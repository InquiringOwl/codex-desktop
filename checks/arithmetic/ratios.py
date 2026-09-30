# content: 5b4598a2898d
# ratios: Ratios & Rates
R = Rational
# formal: scaling
check("formal", R(2, 5) == R(2*3, 5*3), "scaling preserves ratio")

# example: 2:5, 21 cups
same("example", 2 + 5, 7)
k_ = R(21, 2 + 5)
same("example", k_, 3)
same("example", 2*k_, 6)
same("example", 5*k_, 15)
check("example", R(6, 15) == R(2, 5) and 6 + 15 == 21, "6:15 = 2:5, total 21")

# practice[0]
same("practice[0]", gcd(18, 24), 6)
same("practice[0]", R(18, 24), R(3, 4))
check("practice[0]", gcd(3, 4) == 1, "simplest form")
# practice[1]
same("practice[1]", 12 + 15, 27)
same("practice[1]", R(12, 27), R(4, 9))
check("practice[1]", gcd(4, 9) == 1, "simplest form")
# practice[2]
same("practice[2]", R(222, 6), 37)
# practice[3]
p1, p2 = R(348, 100)/12, R(540, 100)/20
same("practice[3]", p1, R(29, 100))
same("practice[3]", p2, R(27, 100))
check("practice[3]", p2 < p1, "20 oz box cheaper per ounce")
