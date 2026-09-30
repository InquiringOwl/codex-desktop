# content: 89b608f545e7
# pa-evaluate: Evaluating Expressions

# formal: x^2 - 3x at x = -2 is 10; -x^2 at x = -3 is -9; 5/(x-1) undefined at 1
same("formal", (x**2 - 3*x).subs(x, -2), 10)
same("formal", (-x**2).subs(x, -3), -9)
check("formal", (5/(x - 1)).subs(x, 1) in (zoo, nan), "5/(x-1) should be undefined at x = 1")

# example: F = 9/5 C + 32 at C = -15
F_ = Rational(9, 5)*(-15) + 32
same("example", Rational(9, 5)*(-15), -27)
same("example", F_, 5)
same("example", Rational(5, 9)*(F_ - 32), -15)

# practice
same("practice[0]", (4*a + 7).subs(a, 3), 19)
same("practice[1]", (x**2 - 5*x + 6).subs(x, -1), 12)
same("practice[2]", (2*x - y).subs({x: 4, y: -2}), 10)
same("practice[2]", (x + y).subs({x: 4, y: -2}), 2)
same("practice[2]", ((2*x - y)/(x + y)).subs({x: 4, y: -2}), 5)
same("practice[3]", (-x**2).subs(x, -3), -9)
same("practice[3]", (3*x*y).subs({x: -3, y: 2}), -18)
same("practice[3]", (-x**2 + 3*x*y).subs({x: -3, y: 2}), -27)
