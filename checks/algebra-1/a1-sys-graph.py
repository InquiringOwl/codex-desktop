# content: 7bb8a1f69d5e
# a1-sys-graph: Systems of Equations by Graphing

# example: gyms
sol = solve([Eq(y, 20*x + 100), Eq(y, 45*x)], [x, y])
same("example", (sol[x], sol[y]), (4, 180))
same("example", (20*2 + 100, 45*2), (140, 90))
check("example", 20*3 + 100 > 45*3 and 20*5 + 100 < 45*5, "B cheaper before, A cheaper after")

# practice[0]
check("practice[0]", 2 + (-1) == 1 and 2*2 - (-1) == 5, "(2,-1) satisfies both")
# practice[1]
sol = solve([Eq(y, 2*x - 3), Eq(y, -x + 3)], [x, y])
same("practice[1]", (sol[x], sol[y]), (2, 1))
# practice[2]
same("practice[2]", solve(Eq(6*x - 2*y, 8), y)[0], 3*x - 4)
same("practice[2]", linsolve([y - 3*x - 2, 6*x - 2*y - 8], [x, y]), S.EmptySet)
# practice[3]
same("practice[3]", solve(Eq(2*x - 4*y, 8), y)[0], x/2 - 2)
same("practice[3]", solve(Eq(x, 2*y + 4), y)[0], x/2 - 2)
same("practice[3]", linsolve([2*x - 4*y - 8, x - 2*y - 4], [x, y]), linsolve([x - 2*y - 4], [x, y]))
