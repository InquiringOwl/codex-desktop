# content: f85757ddca50
# a1-poly-div: Dividing Polynomials

# formal: remainder theorem on a sample
qq, rr = div(x**3 - 2*x + 7, x - 3, x)
same("formal", rr, (x**3 - 2*x + 7).subs(x, 3))

# example: V / (x + 2)
V = 2*x**3 + 9*x**2 + 7*x - 6
qq, rr = div(V, x + 2, x)
same("example", qq, 2*x**2 + 5*x - 3)
same("example", rr, 0)
same("example", expand(V - 2*x**2*(x + 2)), 5*x**2 + 7*x - 6)   # after first step (5x^2+7x brought down)
same("example", expand(V - 2*x**2*(x + 2) - 5*x*(x + 2)), -3*x - 6)
same("example", V.subs(x, 3), 150)
same("example", qq.subs(x, 3), 30)
same("example", (x + 2).subs(x, 3), 5)
same("example", expand((2*x - 1)*(x + 3)), qq)

# practice[0]
same("practice[0]", cancel((12*x**4 - 8*x**3 + 4*x**2) / (4*x**2)), 3*x**2 - 2*x + 1)

# practice[1]
qq, rr = div(x**2 + 7*x + 10, x + 2, x)
same("practice[1]", qq, x + 5)
same("practice[1]", rr, 0)

# practice[2]
P2 = 2*x**3 - 3*x**2 + 4*x - 5
qq, rr = div(P2, x - 2, x)
same("practice[2]", qq, 2*x**2 + x + 6)
same("practice[2]", rr, 7)
same("practice[2]", P2.subs(x, 2), 7)

# practice[3]
qq, rr = div(4*x**3 - 7*x + 5, 2*x + 3, x)
same("practice[3]", qq, 2*x**2 - 3*x + 1)
same("practice[3]", rr, 2)
same("practice[3]", expand(4*x**3 - 7*x + 5 - 2*x**2*(2*x + 3)), -6*x**2 - 7*x + 5)
same("practice[3]", expand(4*x**3 - 7*x + 5 - (2*x**2 - 3*x)*(2*x + 3)), 2*x + 5)
