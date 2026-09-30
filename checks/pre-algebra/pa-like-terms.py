# content: 4fccf60fb4b8
# pa-like-terms: Like Terms & the Distributive Property

# example: perimeter of x by (x - 3)
Pp = 2*x + 2*(x - 3)
same("example", expand(2*(x - 3)), 2*x - 6)
same("example", expand(Pp), 4*x - 6)
same("example", Pp.subs(x, 10), 34)
same("example", 10 + 7 + 10 + 7, 34)

# practice
same("practice[0]", 7*y + 3 - 2*y + 8, 5*y + 11)
same("practice[1]", expand(4*(3*a - 5)), 12*a - 20)
same("practice[2]", expand(-2*(x - 6)), -2*x + 12)
same("practice[2]", expand(-2*(x - 6) + 5*x), 3*x + 12)
same("practice[3]", expand(3*(2*x**2 - x + 4) - (x**2 - 5*x)), 6*x**2 - 3*x + 12 - x**2 + 5*x)
same("practice[3]", expand(3*(2*x**2 - x + 4) - (x**2 - 5*x) - 7), 5*x**2 + 2*x + 5)
