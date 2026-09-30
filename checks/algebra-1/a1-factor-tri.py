# content: ba6882efc501
# a1-factor-tri: Factoring Trinomials (ac method)
R = Rational
# example: 6x^2 + 17x + 12
P = 6*x**2 + 17*x + 12
same("example", 6*12, 72)
pairs = [(p_, 72 // p_) for p_ in range(1, 9) if 72 % p_ == 0]
same("example", pairs, [(1, 72), (2, 36), (3, 24), (4, 18), (6, 12), (8, 9)])
same("example", [pq for pq in pairs if sum(pq) == 17], [(8, 9)])
same("example", 2*x*(3*x + 4) + 3*(3*x + 4), P)
same("example", factor(P), (3*x + 4)*(2*x + 3))
same("example", [6*4, 17*2, P.subs(x, 2)], [24, 34, 70])
same("example", [(3*x + 4).subs(x, 2), (2*x + 3).subs(x, 2)], [10, 7])

# practice[0]
same("practice[0]", factor(x**2 + 9*x + 20), (x + 4)*(x + 5))
# practice[1]
same("practice[1]", factor(x**2 - 2*x - 24), (x - 6)*(x + 4))
# practice[2]
same("practice[2]", [6*(-3), -9 + 2, -9*2], [-18, -7, -18])
same("practice[2]", 3*x*(2*x - 3) + 1*(2*x - 3), 6*x**2 - 7*x - 3)
same("practice[2]", factor(6*x**2 - 7*x - 3), (2*x - 3)*(3*x + 1))
# practice[3]
p3 = 4*x**3 - 10*x**2 - 6*x
same("practice[3]", expand(2*x*(2*x**2 - 5*x - 3)), p3)
same("practice[3]", [2*(-3), -6 + 1], [-6, -5])
same("practice[3]", factor(2*x**2 - 5*x - 3), (x - 3)*(2*x + 1))
same("practice[3]", factor(p3), 2*x*(2*x + 1)*(x - 3))
q = x**2 + 3*x + 5
same("practice[3]", discriminant(q, x), -11)
same("practice[3]", factor(q), q)
check("practice[3]", not any(m*(5//m) == 5 and m + 5//m == 3 for m in (1, 5, -1, -5)), "no integer pair")
