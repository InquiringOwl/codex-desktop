# content: 14a0df13ba9e
# a2-arith-series: Arithmetic Series
from algebra import *

k_, i_, n_ = symbols('k i n', integer=True, positive=True)
a1_, d_ = symbols('a1 d')
# hero: 1 + ... + 100
same("formal", summation(k_, (k_, 1, 100)), 5050)
same("formal", Rational(100*(1 + 100), 2), 5050)
same("formal", arith_sum(1, 1, 100), 5050)
# plain: pairs
check("formal", all(j + (101 - j) == 101 for j in range(1, 51)), "each pair adds to 101")
same("formal", 50*101, 5050)
# formal: both closed forms equal the sigma sum (symbolically)
S_sigma = summation(a1_ + (i_ - 1)*d_, (i_, 1, n_))
an = a1_ + (n_ - 1)*d_
same("formal", simplify(S_sigma - n_*(a1_ + an)/2), 0)
same("formal", simplify(S_sigma - n_/2*(2*a1_ + (n_ - 1)*d_)), 0)
same("formal", simplify(summation(k_, (k_, 1, n_)) - n_*(n_ + 1)/2), 0)
same("formal", simplify(summation(2*k_ - 1, (k_, 1, n_)) - n_**2), 0)
same("formal", simplify(n_*(1 + 2*n_ - 1)/2 - n_**2), 0)
check("formal", all(arith_sum(a, dd, m) == Rational(m*(2*a + (m - 1)*dd), 2) for a in range(-3, 6) for dd in range(-3, 4) for m in range(1, 15)), "S_n formula on a grid")

# example: 7 + 11 + ... + 99
same("example", [11 - 7, 15 - 11], [4, 4])
solves("example", Eq(99, 7 + (x - 1)*4), x, {24})
same("example", [99 - 7, 92/4], [92, 23])
same("example", arith_term(7, 4, 24), 99)
same("example", 7 + 99, 106)
same("example", Rational(24*(7 + 99), 2), 1272)
same("example", 12*106, 1272)
same("example", arith_sum(7, 4, 24), 1272)
same("example", sum(range(7, 100, 4)), 1272)
same("example", [2*7, 23*4, 14 + 92], [14, 92, 106])
same("example", Rational(24, 2)*(2*7 + 23*4), 1272)

# why: salary and comparisons
same("why", arith_term(42000, 1500, 10), 55500)
same("why", Rational(10*(42000 + 55500), 2), 487500)
same("why", arith_sum(42000, 1500, 10), 487500)
same("why", simplify(summation(k_, (k_, 1, n_ - 1)) - n_*(n_ - 1)/2), 0)

# mistakes
same("mistakes", Rational(99 - 7, 4), 23)
same("mistakes", Rational(99 - 7, 4) + 1, 24)
same("mistakes", [2 - 1, 4 - 2, 8 - 4, 16 - 8], [1, 2, 4, 8])
same("mistakes", Rational(5*(1 + 16), 2), Rational(85, 2))
same("mistakes", 1 + 2 + 4 + 8 + 16, 31)
same("mistakes", arith_term(16, 2, 20), 54)
same("mistakes", 16 + 19*2, 54)
same("mistakes", Rational(20*(16 + 54), 2), 700)
same("mistakes", arith_sum(16, 2, 20), 700)
same("mistakes", set(solve(Eq(x*(2*x + 3), 702), x)), {18, Rational(-39, 2)})

# practice[0]
same("practice[0]", arith_term(2, 2, 50), 100)
same("practice[0]", arith_sum(2, 2, 50), 2550)
same("practice[0]", Rational(50*(2 + 100), 2), 2550)
same("practice[0]", 25*102, 2550)
# practice[1]
same("practice[1]", [3*1 + 2, 3*20 + 2], [5, 62])
same("practice[1]", summation(3*k_ + 2, (k_, 1, 20)), 670)
same("practice[1]", Rational(20*(5 + 62), 2), 670)
same("practice[1]", 10*67, 670)
# practice[2]
same("practice[2]", arith_term(18, 2, 25), 66)
same("practice[2]", 18 + 24*2, 66)
same("practice[2]", arith_sum(18, 2, 25), 1050)
same("practice[2]", 25*42, 1050)
# practice[3]
same("practice[3]", expand(n_/2*(10 + 4*(n_ - 1))), expand(n_*(2*n_ + 3)))
same("practice[3]", expand(n_*(2*n_ + 3)) - 702, 2*n_**2 + 3*n_ - 702)
same("practice[3]", 3**2 + 4*2*702, 75**2)
same("practice[3]", [Rational(-3 + 75, 4), Rational(-3 - 75, 4)], [18, Rational(-39, 2)])
same("practice[3]", set(real_solutions(2*x**2 + 3*x - 702, x)), {Rational(-39, 2), 18})
same("practice[3]", arith_term(5, 4, 18), 73)
same("practice[3]", Rational(18*(5 + 73), 2), 702)
same("practice[3]", arith_sum(5, 4, 18), 702)
