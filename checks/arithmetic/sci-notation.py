# content: cdf05fd7ed33
# sci-notation: Scientific Notation
R = Rational
def sci(v):
    v = nsimplify(v)
    n = floor(log(abs(v), 10))
    return v / Integer(10)**n, n

# example
t_ = R(1496, 1000) * 10**11 / (R(300, 100) * 10**8)
check("example", abs(N(R(1496, 1000)/3) - 0.4987) < 0.00005, "1.496/3 ≈ 0.4987")
same("example", 11 - 8, 3)
c_, n_ = sci(t_)
same("example", n_, 2)
check("example", abs(N(c_) - 4.99) < 0.005, "coefficient ≈ 4.99 (3 s.f.)")
check("example", abs(N(t_/60) - 8.3) < 0.05, "≈ 8.3 min")
check("example", abs(499/60 - 8.3) < 0.05, "499/60 ≈ 8.3")
check("example", 8 < t_/60 < 9, "a little over 8 minutes")

# practice[0]
same("practice[0]", sci(45000000), (R(45, 10), 7))
# practice[1]
same("practice[1]", sci(R(32, 100000)), (R(32, 10), -4))
# practice[2]
p = 3*Integer(10)**5 * 4*Integer(10)**-2
same("practice[2]", p, 12*10**3)
same("practice[2]", sci(p), (R(12, 10), 4))
# practice[3]
q = R(63, 10)*Integer(10)**8 / (9*Integer(10)**3)
same("practice[3]", q, R(7, 10)*10**5)
same("practice[3]", sci(q), (7, 4))
