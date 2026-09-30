# content: 53a1470441d3
# pa-similar: Similar Figures & Scale Drawings
R = Rational
# formal: area scales by k^2
same("formal", (3*a)*(3*b), 9*(a*b))

# example: person 1.8 m, shadow 2.4 m; tree shadow 14 m
solves("example", Eq(h/14, R(18, 10)/R(24, 10)), h, {R(105, 10)})
same("example", R(18, 10)*14, R(252, 10))
same("example", R(252, 10)/R(24, 10), R(105, 10))
k_ = 14/R(24, 10)
check("example", abs(k_ - R(583, 100)) < R(5, 1000), f"k = {float(k_)}")
check("example", abs(R(18, 10)*R(583, 100) - R(105, 10)) < R(5, 100), "1.8 x 5.83 about 10.5")

# practice[0]: 3-4-5 similar to 9-12-?
check("practice[0]", R(9, 3) == R(12, 4) == 3, "k = 3")
same("practice[0]", 5*R(9, 3), 15)

# practice[1]: 1 in : 8 ft
same("practice[1]", R(25, 10)*8, 20)
same("practice[1]", R(175, 100)*8, 14)

# practice[2]: 1:24 model, 7.5 in
same("practice[2]", R(75, 10)*24, 180)
same("practice[2]", R(75, 10)*24/12, 15)

# practice[3]: k = 3, area 12
same("practice[3]", 3**2, 9)
same("practice[3]", 12*3**2, 108)
