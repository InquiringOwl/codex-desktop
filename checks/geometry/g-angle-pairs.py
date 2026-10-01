# content: 0913e8885386
# g-angle-pairs: Angle Pair Relationships
# example
solves("example", Eq(3*x + 10, 5*x - 30), x, {20})
same("example", [3*20 + 10, 5*20 - 30], [70, 70])
same("example", 180 - 70, 110)
same("example", 70 + 110 + 70 + 110, 360)
# formal: vertical angles theorem numerically for a sample crossing
t = Rational(37)
same("formal", 180 - (180 - t), t)
# practice[0]
same("practice[0]", [90 - 38, 180 - 38], [52, 142])
check("practice[0]", 90 - 112 < 0, "no complement for 112")
same("practice[0]", 180 - 112, 68)
# practice[1]
solves("practice[1]", Eq((2*x + 8) + (4*x - 2), 90), x, {14})
same("practice[1]", [2*14 + 8, 4*14 - 2], [36, 54]); same("practice[1]", 36 + 54, 90)
# practice[2]
solves("practice[2]", Eq((7*x - 4) + (3*x + 24), 180), x, {16})
same("practice[2]", [7*16 - 4, 3*16 + 24], [108, 72])
same("practice[2]", 180 - 72, 108)
# practice[3]
solves("practice[3]", Eq(180 - x, 4*(90 - x)), x, {60})
same("practice[3]", [180 - 60, 90 - 60], [120, 30]); same("practice[3]", 4*30, 120)
