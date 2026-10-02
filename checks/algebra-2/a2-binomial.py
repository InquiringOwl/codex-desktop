# content: c6fdbeae0c2d
# a2-binomial: The Binomial Theorem
from algebra import *

k_, n_ = symbols('k n', integer=True, nonnegative=True)
A_, B_ = symbols('A B')
# hero and plain
same("formal", expand((A_ + B_)**4), A_**4 + 4*A_**3*B_ + 6*A_**2*B_**2 + 4*A_*B_**3 + B_**4)
same("formal", expand((A_ + B_)**2), A_**2 + 2*A_*B_ + B_**2)
same("formal", expand((A_ + B_)**3), A_**3 + 3*A_**2*B_ + 3*A_*B_**2 + B_**3)
same("formal", expand((x - 2)**3), x**3 - 6*x**2 + 12*x - 8)
same("formal", [binomial(2, j) for j in range(3)], [1, 2, 1])
same("formal", [binomial(3, j) for j in range(4)], [1, 3, 3, 1])
# formal
same("formal", factorial(5)/(factorial(2)*factorial(3)), 10)
same("formal", binomial(5, 2), 10)
check("formal", all(expand((A_ + B_)**m) == expand(sum(binomial(m, j)*A_**(m - j)*B_**j for j in range(m + 1))) for m in range(1, 11)), "binomial theorem n = 1..10")
check("formal", all(len(Poly(expand((A_ + B_)**m), A_, B_).terms()) == m + 1 for m in range(1, 11)), "n + 1 terms")
check("formal", all(binomial(m, j) == binomial(m - 1, j - 1) + binomial(m - 1, j) for m in range(1, 20) for j in range(1, m)), "Pascal's rule")
check("formal", all(binomial(m, j) == binomial(m, m - j) for m in range(20) for j in range(m + 1)), "symmetry")
check("formal", all(sum(binomial(m, j) for j in range(m + 1)) == 2**m for m in range(20)), "row sums 2^n")
same("formal", 1 + 4 + 6 + 4 + 1, 16)
same("formal", [binomial(4, j) for j in range(5)], [1, 4, 6, 4, 1])

# example: (2x - 3)^5
same("example", [binomial(5, j) for j in range(6)], [1, 5, 10, 10, 5, 1])
same("example", [binom_term(2*x, -3, 5, j) for j in range(6)], [32*x**5, -240*x**4, 720*x**3, -1080*x**2, 810*x, -243])
same("example", [(2*x)**4, 5*16*(-3)], [16*x**4, -240])
same("example", [10*8*9, 10*4*(-27), 5*2*81, (-3)**5], [720, -1080, 810, -243])
same("example", expand((2*x - 3)**5), 32*x**5 - 240*x**4 + 720*x**3 - 1080*x**2 + 810*x - 243)
same("example", 32 - 240 + 720 - 1080 + 810 - 243, -1)
same("example", (2 - 3)**5, -1)
same("example", binom_coeff((2*x - 3)**5, x, 3), 720)

# why: 1.01^10
same("why", 1 + 10*Rational(1, 100) + 45*Rational(1, 100)**2, Rational(11045, 10000))
same("why", binomial(10, 2), 45)
near("why", N(Rational(101, 100)**10, 12), 1.10462)
check("why", Rational(101, 100)**10 > Rational(110462, 100000) and Rational(101, 100)**10 < Rational(110463, 100000), "1.01^10 = 1.10462...")

# mistakes
same("mistakes", expand((x + 3)**2), x**2 + 6*x + 9)
same("mistakes", expand((2*x + 1)**3).coeff(x, 3), 8)
same("mistakes", binom_term(x, -2*y, 7, 3), -280*x**4*y**3)
same("mistakes", 3*x*(-2)**2, 12*x)
same("mistakes", expand((x - 2)**3), x**3 - 6*x**2 + 12*x - 8)

# practice[0]
same("practice[0]", binomial(7, 3), 35)
same("practice[0]", Rational(7*6*5, 3*2*1), 35)
same("practice[0]", factorial(7)/(factorial(3)*factorial(4)), 35)
# practice[1]
same("practice[1]", expand((x + 2)**4), x**4 + 8*x**3 + 24*x**2 + 32*x + 16)
same("practice[1]", [4*2, 6*4, 4*8, 2**4], [8, 24, 32, 16])
# practice[2]
same("practice[2]", binom_term(x, -2*y, 7, 3), -280*x**4*y**3)
same("practice[2]", expand((x - 2*y)**7).coeff(x, 4).coeff(y, 3), -280)
same("practice[2]", (-2*y)**3, -8*y**3)
same("practice[2]", 35*(-8), -280)
# practice[3]
gen = expand(binomial(6, k_)*(x**2)**(6 - k_)*(3/x)**k_)
same("practice[3]", powsimp(binom_term(x**2, 3/x, 6, 2)), 135*x**6)
solves("practice[3]", Eq(12 - 3*x, 6), x, {2})
same("practice[3]", binomial(6, 2)*3**2, 135)
same("practice[3]", expand((x**2 + 3/x)**6).coeff(x, 6), 135)
check("practice[3]", all(simplify(binom_term(x**2, 3/x, 6, j) - binomial(6, j)*3**j*x**(12 - 3*j)) == 0 for j in range(7)), "general term C(6,k)3^k x^(12-3k)")
