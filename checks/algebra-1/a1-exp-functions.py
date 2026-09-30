# content: cac3de38af13
# a1-exp-functions: Exponential Growth & Decay
R = Rational
f_ = lambda xx: 3*2**xx
same("formal", simplify(5*3**(x+1) / (5*3**x)), 3)   # f(x+1) = b f(x)

# example: $24,000 losing 15% per year
b_ = 1 - R(15, 100)
same("example", b_, 0.85)
V = lambda t_: 24000 * b_**t_
check("example", abs(float(b_**5) - 0.443705) < 5e-7, "0.85^5 ≈ 0.443705")
check("example", abs(float(V(5)) - 10648.93) < 0.005, "V(5) ≈ 10648.93")
check("example", abs(float(V(4)) - 12528.15) < 0.005, "V(4) ≈ 12528.15")
check("example", V(4) > 12000 and V(5) < 12000, "drops below half price between years 4 and 5")

# practice[0]: 500(1.04)^x
g_ = 500*R(104, 100)**x
same("practice[0]", g_.subs(x, 0), 500)
check("practice[0]", R(104, 100) > 1, "growth")
same("practice[0]", R(104, 100) - 1, R(4, 100))

# practice[1]
same("practice[1]", f_(3), 24)

# practice[2]: through (0,5), (2,45)
sol = solve([Eq(a*b**0, 5), Eq(a*b**2, 45)], [a, b], dict=True)
pos = [s for s in sol if s[b] > 0]
check("practice[2]", len(pos) == 1 and pos[0][a] == 5 and pos[0][b] == 3, f"positive-base solutions {pos}")

# practice[3]: 80 mg, half-life 4 h, after 10 h
A10 = 80*R(1, 2)**R(10, 4)
same("practice[3]", R(10, 4), 2.5)
check("practice[3]", abs(float(2**-2.5) - 0.17678) < 5e-6, "2^-2.5 ≈ 0.17678")
check("practice[3]", abs(float(A10) - 14.14) < 0.005, f"A(10) = {float(A10)}")
