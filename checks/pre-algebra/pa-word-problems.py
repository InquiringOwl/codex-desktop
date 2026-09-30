# content: 74b15e5498c9
# pa-word-problems: Linear Equation Word Problems
# example: 300 tickets, $8 adult, $5 student, $1950
sol = solve([Eq(a + s, 300), Eq(8*a + 5*s, 1950)], [a, s])
same("example", sol[a], 150)
same("example", sol[s], 150)
same("example", expand(8*a + 5*(300 - a)), 3*a + 1500)
same("example", 1950 - 1500, 450)
same("example", 8*150 + 5*150, 1950)

# practice[0]
solves("practice[0]", Eq(2*n + 7, 31), n, {12})
# practice[1]: three consecutive odd integers sum to 81
nv = solve(Eq(n + (n + 2) + (n + 4), 81), n)[0]
same("practice[1]", nv, 25)
check("practice[1]", nv % 2 == 1, "should be odd")
same("practice[1]", [nv, nv + 2, nv + 4], [25, 27, 29])
# practice[2]: perimeter 54, length = 2w + 3
wv = solve(Eq(2*(2*w + 3) + 2*w, 54), w)[0]
same("practice[2]", wv, 8)
same("practice[2]", 2*wv + 3, 19)
same("practice[2]", 2*19 + 2*8, 54)
# practice[3]: opposite directions, 3 h, 285 mi, differ by 15 mph
rv = solve(Eq(3*r + 3*(r + 15), 285), r)[0]
same("practice[3]", rv, 40)
same("practice[3]", rv + 15, 55)
same("practice[3]", 3*40 + 3*55, 285)
