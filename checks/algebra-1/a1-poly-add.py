# content: 82f4fa072816
# a1-poly-add: Polynomials: Adding & Subtracting

# example
R = -Rational(1, 2)*x**2 + 40*x
Cst = Rational(2, 10)*x**2 + 6*x + 150
P = expand(R - Cst)
same("example", P, -Rational(7, 10)*x**2 + 34*x - 150)
same("example", P.subs(x, 20), 250)
same("example", R.subs(x, 20), 600)
same("example", Cst.subs(x, 20), 350)
same("example", -Rational(7, 10)*400, -280)

# practice[0]
p0 = Poly(5*x**3 - x**7 + 2, x)
same("practice[0]", p0.as_expr(), -x**7 + 5*x**3 + 2)
same("practice[0]", p0.degree(), 7)
same("practice[0]", p0.LC(), -1)
same("practice[0]", len(p0.terms()), 3)   # trinomial

# practice[1]
same("practice[1]", expand((4*x**2 - 3*x + 1) + (-2*x**2 + 5*x - 6)), 2*x**2 + 2*x - 5)

# practice[2]
same("practice[2]", expand((5*y**3 - 2*y + 8) - (3*y**3 + y**2 - 2*y - 1)), 2*y**3 - y**2 + 9)

# practice[3]: subtract A from B = B - A
same("practice[3]", expand((7*a**2 + a*b - 2*b**2) - (3*a**2 - 4*a*b + b**2)), 4*a**2 + 5*a*b - 3*b**2)
