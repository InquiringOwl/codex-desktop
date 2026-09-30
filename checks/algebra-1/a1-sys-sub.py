# content: 5ce7075cf0a3
# a1-sys-sub: Solving Systems by Substitution

# example: tickets
sol = solve([Eq(a + c, 200), Eq(12*a + 7*c, 1925)], [a, c])
same("example", (sol[a], sol[c]), (105, 95))
same("example", expand(12*(200 - c) + 7*c), 2400 - 5*c)
same("example", (12*105, 7*95), (1260, 665))

# practice[0]
sol = solve([Eq(y, 3*x), Eq(x + y, 20)], [x, y])
same("practice[0]", (sol[x], sol[y]), (5, 15))
# practice[1]
sol = solve([Eq(2*x + y, 7), Eq(3*x - 2*y, 0)], [x, y])
same("practice[1]", (sol[x], sol[y]), (2, 3))
# practice[2]
same("practice[2]", expand(4*x - 2*(2*x + 1)), -2)
same("practice[2]", linsolve([y - 2*x - 1, 4*x - 2*y - 6], [x, y]), S.EmptySet)
# practice[3]
sol = solve([Eq(x/2 + y/3, 4), Eq(x - y, 3)], [x, y])
same("practice[3]", (sol[x], sol[y]), (6, 3))
