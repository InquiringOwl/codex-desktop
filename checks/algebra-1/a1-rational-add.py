# content: daff8cd147c6
# a1-rational-add: Adding & Subtracting Rational Expressions

# example: 60/r + 60/(r+10)
T = 60/r + 60/(r + 10)
same("example", together(T), 120*(r + 5)/(r*(r + 10)))
same("example", expand(60*(r + 10) + 60*r), 120*r + 600)
check("example", gcd(120*(r + 5), r*(r + 10)) == 1, "no common factor")
same("example", T.subs(r, 50), 2.2)
same("example", Rational(6600, 3000), 2.2)
same("example", T.subs(r, 50)*60, 132)   # 2 h 12 min

# practice[0]
same("practice[0]", together(5/(2*x) + 1/(3*x)), Rational(17, 6)/x)

# practice[1]
same("practice[1]", cancel(x/(x - 3) - 3/(x - 3)), 1)
check("practice[1]", denom(together(x/(x - 3))).subs(x, 3) == 0, "x=3 excluded")

# practice[2]
same("practice[2]", 2/(x + 3) - 1/(x - 1), (x - 5)/((x + 3)*(x - 1)))
check("practice[2]", set(solve((x + 3)*(x - 1), x)) == {-3, 1}, "excluded -3, 1")

# practice[3]
e3 = 6/(x**2 - 9) - 1/(x - 3)
same("practice[3]", e3, (3 - x)/((x + 3)*(x - 3)))
same("practice[3]", cancel(e3), -1/(x + 3))
check("practice[3]", set(solve(x**2 - 9, x)) == {-3, 3}, "excluded -3, 3")
