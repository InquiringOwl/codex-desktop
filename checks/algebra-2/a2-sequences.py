# content: 2aac509f1a79
# a2-sequences: Sequences & Sigma Notation
from algebra import *

k_, i_, n_ = symbols('k i n', integer=True, positive=True)
# hero
same("formal", [2*m + 1 for m in range(1, 5)], [3, 5, 7, 9])
same("formal", summation(2*n_ + 1, (n_, 1, 4)), 24)
# plain: n^2 at n = 20, Fibonacci, 5!, sum of k^2
same("formal", 20**2, 400)
fib = [1, 1]
for _ in range(5): fib.append(fib[-1] + fib[-2])
same("formal", fib, [1, 1, 2, 3, 5, 8, 13])
same("formal", factorial(5), 120)
same("formal", summation(k_**2, (k_, 1, 5)), 55)
same("formal", [m**2 for m in range(1, 6)], [1, 4, 9, 16, 25])
# formal: 0! = 1, 8!/6! = 56, n! = n (n-1)!
same("formal", factorial(0), 1)
same("formal", factorial(8)/factorial(6), 56)
same("formal", 8*7, 56)
check("formal", all(factorial(m) == m*factorial(m - 1) for m in range(1, 12)), "n! = n (n-1)!")
check("formal", all(factorial(m) > 3**m for m in range(7, 30)), "factorial outgrows 3^n")
# properties of sums (symbolic check on a sample)
a_, b_ = Function('a'), Function('b')
same("formal", summation(5*k_ + 3*k_**2, (k_, 1, 9)), 5*summation(k_, (k_, 1, 9)) + 3*summation(k_**2, (k_, 1, 9)))
same("formal", summation(7, (k_, 1, 12)), 12*7)
same("formal", 7 - 3 + 1, 5)

# example
same("example", 6 - 1 + 1, 6)
terms = [3*m - 2 for m in range(1, 7)]
same("example", terms, [1, 4, 7, 10, 13, 16])
same("example", [sum(terms[:j]) for j in range(1, 7)], [1, 5, 12, 22, 35, 51])
same("example", summation(3*k_ - 2, (k_, 1, 6)), 51)
same("example", summation(k_, (k_, 1, 6)), 21)
same("example", 3*21 - 6*2, 51)
same("example", [3*21, 6*2], [63, 12])

# mistakes
same("mistakes", 7 - 3 + 1, 5)
same("mistakes", [(-1)**m*m for m in range(1, 5)], [-1, 2, -3, 4])
same("mistakes", [(-1)**(m + 1)*m for m in range(1, 5)], [1, -2, 3, -4])
same("mistakes", summation(i_*i_, (i_, 1, 2)), 5)
same("mistakes", summation(i_, (i_, 1, 2))**2, 9)
same("mistakes", factorial(6), 720)
same("mistakes", 2*factorial(3), 12)

# practice[0]
same("practice[0]", [(-1)**m*(m + 1) for m in range(1, 6)], [-2, 3, -4, 5, -6])
# practice[1]
seq = [4]
for _ in range(4): seq.append(2*seq[-1] - 3)
same("practice[1]", seq, [4, 5, 7, 11, 19])
# practice[2]
an = lambda m: Rational((-1)**m, 2**m)
same("practice[2]", [an(m) for m in range(1, 5)], [Rational(-1, 2), Rational(1, 4), Rational(-1, 8), Rational(1, 16)])
# practice[3]
same("practice[3]", [4*m - 1 for m in range(1, 11)][:3] + [4*10 - 1], [3, 7, 11, 39])
solves("practice[3]", Eq(4*x - 1, 39), x, {10})
same("practice[3]", summation(k_, (k_, 1, 10)), 55)
same("practice[3]", 4*55 - 10, 210)
same("practice[3]", summation(4*k_ - 1, (k_, 1, 10)), 210)
same("practice[3]", sum(range(3, 40, 4)), 210)
