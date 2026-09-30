# content: a5a2efe5a090
# pa-linear-graphs: Graphing Linear Equations

# example: h = -2.5t + 30
hh = -Rational(5, 2)*t + 30
same("example", hh.coeff(t), -2.5)
same("example", hh.subs(t, 0), 30)
same("example", hh.subs(t, 4), 20)
solves("example", Eq(hh, 0), t, {12})

# practice[0]: y = 2x - 1
f0 = 2*x - 1
same("practice[0]", [(v, f0.subs(x, v)) for v in (-1, 0, 2)], [(-1, -3), (0, -1), (2, 3)])

# practice[1]: 3x + 4y = 12
solves("practice[1]", Eq(3*x, 12), x, {4})
solves("practice[1]", Eq(4*y, 12), y, {3})

# practice[2]: y = -2/3 x + 4
f2 = -Rational(2, 3)*x + 4
same("practice[2]", f2.subs(x, 0), 4)
same("practice[2]", f2.subs(x, 3), 2)
same("practice[2]", f2.subs(x, 6), 0)
solves("practice[2]", Eq(f2, 0), x, {6})

# practice[3]: 4x - 2y = 8
s3 = solve(Eq(4*x - 2*y, 8), y)[0]
same("practice[3]", s3, 2*x - 4)
same("practice[3]", s3.coeff(x), 2)
same("practice[3]", s3.subs(x, 0), -4)
solves("practice[3]", Eq(s3, 0), x, {2})
solves("practice[3]", Eq(2*y - 6, 0), y, {3})
