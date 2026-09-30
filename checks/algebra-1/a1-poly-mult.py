# content: d6364ef444fa
# a1-poly-mult: Multiplying Polynomials & Special Products

# formal
same("formal", expand((3*x - 2*y)**2), 9*x**2 - 12*x*y + 4*y**2)
same("formal", expand((a + b)*(a - b)), a**2 - b**2)

# example: bed 12 x 8, path width x all around
A = expand((12 + 2*x)*(8 + 2*x))
same("example", A, 4*x**2 + 40*x + 96)
same("example", A.subs(x, Rational(3, 2)), 165)
same("example", (12 + 3)*(8 + 3), 165)
same("example", A.subs(x, Rational(3, 2)) - 12*8, 69)

# practice[0]
same("practice[0]", expand(3*x**2*(2*x - 5)), 6*x**3 - 15*x**2)

# practice[1]
same("practice[1]", expand((2*x + 3)*(x - 4)), 2*x**2 - 5*x - 12)

# practice[2]
same("practice[2]", expand((3*x - 2*y)**2), 9*x**2 - 12*x*y + 4*y**2)
same("practice[2]", expand((5*a + 4)*(5*a - 4)), 25*a**2 - 16)

# practice[3]
pr = expand((x + 2)*(x**2 - 3*x + 5))
same("practice[3]", pr, x**3 - x**2 - x + 10)
same("practice[3]", pr.subs(x, 1), 9)
