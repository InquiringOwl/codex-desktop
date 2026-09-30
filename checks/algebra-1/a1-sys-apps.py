# content: 3ffaa4b04d2f
# a1-sys-apps: Applications of Systems

# example: acid mixture
sol = solve([Eq(x + y, 60), Eq(Rational(20, 100)*x + Rational(50, 100)*y, Rational(30, 100)*60)], [x, y])
same("example", (sol[x], sol[y]), (40, 20))
same("example", Rational(30, 100)*60, 18)

# practice[0]
sol = solve([Eq(x + y, 52), Eq(x - y, 14)], [x, y])
same("practice[0]", (sol[x], sol[y]), (33, 19))

# practice[1]
sol = solve([Eq(a + s, 500), Eq(12*a + 7*s, 4850)], [a, s])
same("practice[1]", (sol[a], sol[s]), (270, 230))
same("practice[1]", (12*270, 7*230), (3240, 1610))

# practice[2]: boat
sol = solve([Eq((b + c)*2, 36), Eq((b - c)*3, 36)], [b, c])
same("practice[2]", (sol[b], sol[c]), (15, 3))

# practice[3]: break-even
solves("practice[3]", Eq(2400 + 6*x, 14*x), x, {300})
same("practice[3]", 14*300, 4200)
same("practice[3]", 2400 + 6*300, 4200)
