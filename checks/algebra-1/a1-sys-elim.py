# content: b9cfa8fe6a0c
# a1-sys-elim: Solving Systems by Elimination

# example: lattes and muffins
L, M = symbols('L M', real=True)
sol = solve([Eq(3*L + 2*M, 19), Eq(2*L + 5*M, Rational(2275, 100))], [L, M])
same("example", (sol[L], sol[M]), (4.5, 2.75))
same("example", -11*M.subs(M, sol[M]), -30.25)
same("example", 2*Rational(2275, 100)*(-3)/2, -68.25)

# practice[0]
sol = solve([Eq(x + y, 10), Eq(x - y, 4)], [x, y])
same("practice[0]", (sol[x], sol[y]), (7, 3))
# practice[1]
sol = solve([Eq(3*x + 2*y, 16), Eq(5*x - 4*y, -10)], [x, y])
same("practice[1]", (sol[x], sol[y]), (2, 5))
# practice[2]: dependent
sol = linsolve([2*x - 3*y - 5, -4*x + 6*y + 10], [x, y])
same("practice[2]", sol, linsolve([2*x - 3*y - 5], [x, y]))
check("practice[2]", len(sol.free_symbols) > 0, "infinitely many solutions")
# practice[3]
sol = solve([Eq(3*x + 4*y, 10), Eq(2*x - 5*y, 22)], [x, y])
same("practice[3]", (sol[x], sol[y]), (6, -2))
