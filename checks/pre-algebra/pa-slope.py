# content: 1c3728cae03e
# pa-slope: Slope as Rate of Change
R = Rational
slope = lambda p, q: R(q[1] - p[1], q[0] - p[0])
# formal: order of points doesn't matter
same("formal", slope((1, 2), (4, 11)), slope((4, 11), (1, 2)))

# example: (2, 340), (7, 215)
same("example", 215 - 340, -125)
same("example", 7 - 2, 5)
same("example", slope((2, 340), (7, 215)), -25)
same("example", 340 + (-25)*5, 215)

# practice[0]
same("practice[0]", 11 - 2, 9); same("practice[0]", 4 - 1, 3)
same("practice[0]", slope((1, 2), (4, 11)), 3)

# practice[1]
same("practice[1]", -5 - 5, -10); same("practice[1]", 3 - (-2), 5)
m1 = slope((-2, 5), (3, -5))
same("practice[1]", m1, -2)
check("practice[1]", m1 < 0, "line should fall")

# practice[2]: (3,-1),(3,4) vertical; (-4,6),(2,6) horizontal
same("practice[2]", 3 - 3, 0)
same("practice[2]", 6 - 6, 0)
same("practice[2]", slope((-4, 6), (2, 6)), 0)

# practice[3]: 30/r <= 1/12
solves("practice[3]", R(30)/r <= R(1, 12), r, Interval(360, oo), domain=Interval.open(0, oo))
same("practice[3]", R(360, 12), 30)
