# content: fa2cc0d2451b
# a1-multi-step: Multi-Step Linear Equations
R = Rational
# example
solves("example", Eq(x/3 + x/4 + 500, x), x, {1200})
same("example", expand(12*(x/3 + x/4 + 500)), 7*x + 6000)
same("example", [1200/R(3), 1200/R(4)], [400, 300])
same("example", 400 + 300 + 500, 1200)
# practice[0]
solves("practice[0]", Eq(3*(x - 4) + 2, 2*x + 5), x, {15})
same("practice[0]", [3*(15 - 4) + 2, 2*15 + 5], [35, 35])
# practice[1]
solves("practice[1]", Eq(x/2 + x/3, 10), x, {12})
same("practice[1]", [R(12, 2), R(12, 3)], [6, 4])
# practice[2]
same("practice[2]", expand(5*(x - 2) + 3), 5*x - 7)
solves("practice[2]", Eq(5*(x - 2) + 3, 5*x - 7), x, S.Reals)
# practice[3]
solves("practice[3]", Eq((x + 1)/4 - (x - 2)/6, 1), x, {5})
same("practice[3]", expand(3*(x + 1) - 2*(x - 2)), x + 7)
same("practice[3]", [R(6, 4), R(3, 6)], [1.5, 0.5])
