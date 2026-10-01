# content: 7545f1499097
# g-polygons: Polygons & Angle Sums
R = Rational
S = lambda n: (n - 2)*180
# formal: diagonals and regular angles
same("formal", 8*(8 - 3)/R(2), 20)
# example: regular octagon gazebo
same("example", S(8), 1080)
same("example", R(S(8), 8), 135)
same("example", 180 - R(S(8), 8), 45)
same("example", R(360, 8), 45)
same("example", R(45, 2), R(45, 2))
near("example", R(45, 2), 22.5)
same("example", 8*45, 360)
same("example", 2*(90 - R(45, 2)), 135)
# practice[0]: decagon
same("practice[0]", S(10), 1440)
same("practice[0]", R(S(10), 10), 144)
# practice[1]: interior 156 -> n = 15
nsol = solve(Eq(S(n)/n, 156), n)
same("practice[1]", nsol, [15])
same("practice[1]", R(360, 180 - 156), 15)
# practice[2]: 130 is impossible
ext = 180 - 130
same("practice[2]", R(360, ext), R(36, 5))
check("practice[2]", not R(360, ext).is_integer, "360/50 is not a whole number")
check("practice[2]", solve(Eq(S(n)/n, 130), n) == [R(36, 5)], "only solution n = 7.2")
# practice[3]: pentagon x, x+20, ..., x+80
xs = solve(Eq(sum(x + 20*i for i in range(5)), S(5)), x)
same("practice[3]", xs, [68])
angs = [68 + 20*i for i in range(5)]
same("practice[3]", angs, [68, 88, 108, 128, 148])
check("practice[3]", all(0 < a_ < 180 for a_ in angs) and sum(angs) == 540, "all angles convex and total 540")
