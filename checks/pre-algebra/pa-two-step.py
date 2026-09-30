# content: 90cab76bde5b
# pa-two-step: Two-Step Equations
R = Rational
# formal: ax + b = c -> x = (c - b)/a
same("formal", solve(Eq(a*x + b, c), x)[0], (c - b)/a)

# example: 48h + 65 = 257
same("example", 257 - 65, 192)
same("example", R(192, 48), 4)
solves("example", Eq(48*h + 65, 257), h, {4})
same("example", 48*4 + 65, 257)

solves("practice[0]", Eq(3*x + 7, 22), x, {5}); same("practice[0]", 22 - 7, 15)
solves("practice[1]", Eq(-4*x + 9, -15), x, {6}); same("practice[1]", -15 - 9, -24)
solves("practice[2]", Eq(x/5 - 3, 4), x, {35}); same("practice[2]", 4 + 3, 7)
solves("practice[3]", Eq(R(2, 3)*x + 1, -7), x, {-12})
same("practice[3]", -7 - 1, -8)
same("practice[3]", R(2, 3)*(-12) + 1, -7)
