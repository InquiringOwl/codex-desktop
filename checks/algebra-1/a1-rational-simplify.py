# content: b0de0bc28a3c
# a1-rational-simplify: Rational Expressions: Simplify, Multiply & Divide

same("formal", cancel((a - b)/(b - a)), -1)

# example: (2πr^2 + 2πrh)/(πr^2 h)
E = (2*pi*r**2 + 2*pi*r*h)/(pi*r**2*h)
same("example", factor(2*pi*r**2 + 2*pi*r*h), 2*pi*r*(r + h))
same("example", cancel(E), 2*(r + h)/(r*h))
same("example", E.subs({r: 2, h: 5}), 1.4)
same("example", (8*pi + 20*pi)/(20*pi), 1.4)

# practice[0]
e0 = (5*x + 15)/(x**2 - 9)
same("practice[0]", cancel(e0), 5/(x - 3))
check("practice[0]", set(solve(x**2 - 9, x)) == {-3, 3}, "excluded -3, 3")

# practice[1]
e1 = (x**2 - 5*x + 6)/(4 - x**2)
same("practice[1]", cancel(e1), (3 - x)/(x + 2))
check("practice[1]", set(solve(4 - x**2, x)) == {-2, 2}, "excluded -2, 2")

# practice[2]
e2 = (x**2 - 4)/(x**2 + 5*x + 6) * (x + 3)/(x - 2)
same("practice[2]", cancel(e2), 1)
check("practice[2]", set(solve((x**2 + 5*x + 6)*(x - 2), x)) == {-3, -2, 2}, "excluded -3, -2, 2")

# practice[3]
e3 = (x**2 - 25)/(2*x + 6) / ((x - 5)/(x**2 + 6*x + 9))
same("practice[3]", cancel(e3), (x + 5)*(x + 3)/2)
# excluded: zeros of 2x+6, x^2+6x+9, and divisor numerator x-5
excl = set(solve(2*x + 6, x)) | set(solve(x**2 + 6*x + 9, x)) | set(solve(x - 5, x))
check("practice[3]", excl == {-3, 5}, f"excluded values are {excl}")
