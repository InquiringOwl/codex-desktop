# content: 7ad68b188b5f
# a1-factor-gcf: Factoring: GCF & Grouping
same("formal", expand(a*(c + d) + b*(c + d)), expand((a + b)*(c + d)))

# example: 6x^2 + 9x + 4x + 6
P = 6*x**2 + 9*x + 4*x + 6
same("example", gcd(gcd(6, 9), gcd(4, 6)), 1)
same("example", 3*x*(2*x + 3), 6*x**2 + 9*x)
same("example", 2*(2*x + 3), 4*x + 6)
same("example", factor(P), (2*x + 3)*(3*x + 2))
same("example", expand(P), 6*x**2 + 13*x + 6)
same("example", [6*4, 9*2, 4*2, 6], [24, 18, 8, 6])
same("example", P.subs(x, 2), 56)
same("example", [(2*x + 3).subs(x, 2), (3*x + 2).subs(x, 2)], [7, 8])

# practice[0]
same("practice[0]", factor(12*x**3 - 18*x**2), 6*x**2*(2*x - 3))
# practice[1]
p1 = 15*a**2*b - 10*a*b**2 + 5*a*b
same("practice[1]", factor(p1), 5*a*b*(3*a - 2*b + 1))
# practice[2]
same("practice[2]", factor(4*x*(x - 3) + 7*(x - 3)), (x - 3)*(4*x + 7))
# practice[3]
p3 = 6*x**3 + 3*x**2 - 30*x - 15
same("practice[3]", expand(3*(2*x**3 + x**2 - 10*x - 5)), p3)
same("practice[3]", factor(p3), 3*(2*x + 1)*(x**2 - 5))
same("practice[3]", factor(x**2 - 5), x**2 - 5)
