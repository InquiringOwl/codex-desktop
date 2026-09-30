# content: 67b0ae57c650
# pa-inequalities: Inequalities & Their Graphs

# formal: a < x <= b is (a, b]
same("formal", Intersection(solveset(x > 1, x, Reals), solveset(x <= 4, x, Reals)), Interval.Lopen(1, 4))

# example: t <= -18
solves("example", t <= -18, t, Interval(-oo, -18))
check("example", -20 <= -18, "-20 should be safe")
check("example", not (-15 <= -18), "-15 should be too warm")

# practice
solves("practice[0]", x > -2, x, Interval.open(-2, oo))
solves("practice[1]", a >= 16, a, Interval(16, oo))
same("practice[2]", 3*4 - 5, 7)
check("practice[2]", 3*4 - 5 <= 7, "4 should be a solution")
same("practice[2]", 3*5 - 5, 10)
check("practice[2]", not (3*5 - 5 <= 7), "5 should not be a solution")
solves("practice[2]", 3*x - 5 <= 7, x, Interval(-oo, 4))
same("practice[3]", Intersection(solveset(x > -1, x, Reals), solveset(x <= 5, x, Reals)), Interval.Lopen(-1, 5))
