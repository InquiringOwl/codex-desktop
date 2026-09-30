# content: e20c692c3698
# real-numbers: The Real Number System
R = Rational
# formal: sqrt(n) rational only for perfect squares (sample)
check("formal", all(sqrt(n).is_rational == (integer_nthroot(n, 2)[1]) for n in range(1, 50)), "sqrt n rational iff square")
check("formal", sqrt(2).is_irrational, "sqrt 2 irrational")

# example: s^2 = 50
solves("example", Eq(s**2, 50), s, {5*sqrt(2)}, domain=Interval(0, oo))
same("example", sqrt(50), 5*sqrt(2))
check("example", sqrt(50).is_irrational, "sqrt 50 irrational")
check("example", 7**2 == 49 and 8**2 == 64 and 49 < 50 < 64, "between 7 and 8")
same("example", R(707, 100)**2, R(499849, 10000))
same("example", R(708, 100)**2, R(501264, 10000))
check("example", R(707, 100) < sqrt(50) < R(708, 100), "between 7.07 and 7.08")
check("example", sqrt(50) - R(707, 100) < R(708, 100) - sqrt(50), "closer to 7.07")
check("example", abs(N(sqrt(50)) - 7.071) < 0.0005, "s ≈ 7.071")
check("example", abs(N(sqrt(50)) - 7.07) < 0.005, "s ≈ 7.07")
same("example", 4*sqrt(50), 20*sqrt(2))
check("example", abs(N(20*sqrt(2)) - 28.28) < 0.005, "≈ 28.28")
check("example", abs(N(20*sqrt(2)) - 28.3) < 0.05, "≈ 28.3")

# practice[0]: -12 in Z, Q, R, not N, not W
v = -12
check("practice[0]", Integer(v) in S.Integers and Integer(v) in S.Rationals and Integer(v) in S.Reals, "in Z, Q, R")
check("practice[0]", Integer(v) not in S.Naturals and Integer(v) not in S.Naturals0, "not natural/whole")
# practice[1]: 0.3636...
xv = R(36, 99)
check("practice[1]", 100*xv - xv == 36, "100x - x = 36")
same("practice[1]", xv, R(4, 11))
same("practice[1]", nsimplify(R(36, 100)/(1 - R(1, 100))), R(4, 11))
# practice[2]: sqrt 45
same("practice[2]", sqrt(45), 3*sqrt(5))
check("practice[2]", sqrt(45).is_irrational, "irrational")
check("practice[2]", 36 < 45 < 49 and 6 < sqrt(45) < 7, "between 6 and 7")
check("practice[2]", abs(N(sqrt(45)) - 6.708) < 0.0005, "≈ 6.708")
# practice[3]: 2.14545... = 2.1 + 0.04545...
truth = R(21, 10) + R(45, 1000)/(1 - R(1, 100))
check("practice[3]", 990*truth == 2124, "990x = 2124")
same("practice[3]", R(2124, 990), R(118, 55))
same("practice[3]", truth, R(118, 55))
