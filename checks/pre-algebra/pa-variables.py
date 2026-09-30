# content: d5c1e62f538b
# pa-variables: Variables & Algebraic Expressions
# formal: 4x^2 - x + 7
ex = 4*x**2 - x + 7
same("formal", set(Add.make_args(ex)), {4*x**2, -x, 7})

# example: 15m + 40
cost = 15*m + 40
same("example", cost.coeff(m), 15)
same("example", cost.subs(m, 0), 40)
same("example", 15*12, 180)
same("example", cost.subs(m, 12), 220)
same("example", 40 + 12*15, 220)

# practice[0]
same("practice[0]", (5*n + 3).subs(n, 4), 23)
# practice[1]
same("practice[1]", set(Add.make_args(ex)), {4*x**2, -x, 7})
same("practice[1]", Poly(ex, x).coeff_monomial(x**2), 4)
same("practice[1]", Poly(ex, x).coeff_monomial(x), -1)
same("practice[1]", Poly(ex, x).coeff_monomial(1), 7)
# practice[2]
check("practice[2]", not isinstance(6*y - 2, Rel) and not isinstance(a*b + c, Rel)
      and isinstance(Eq(6*y - 2, 10, evaluate=False), Equality), "classification")
# practice[3]
gym = 30*m + 25
same("practice[3]", 30*8, 240)
same("practice[3]", gym.subs(m, 8), 265)
