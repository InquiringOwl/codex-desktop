# content: bfdeed72a8e7
# a2-synthetic: Synthetic Division & the Remainder Theorem
from algebra import *

# hero / formal: 2x^3 + 3x^2 - 4x + 7 by x + 2
P0 = 2*x**3 + 3*x**2 - 4*x + 7
same("formal", synth([2, 3, -4, 7], -2), ([2, -1, -2], 11))
same("formal", P0.subs(x, -2), 11)
same("formal", [2*(-8), 3*4, -4*(-2), 7], [-16, 12, 8, 7])
same("formal", expand((x + 2)*(2*x**2 - x - 2) + 11), P0)
# formal: dividing by ax - b via r = b/a, then dividing the quotient by a
qq, rr = div(2*x**3 + x**2 - 5*x + 5, 2*x - 1, x)
qs, rs = synth([2, 1, -5, 5], Rational(1, 2))
same("formal", rr, rs)
same("formal", qq, sum(Rational(c, 1)/2*x**(len(qs) - 1 - i) for i, c in enumerate(qs)))

# example: x^4 - 3x^3 + 5x - 6 by x - 2
P = x**4 - 3*x**3 + 5*x - 6
same("example", synth([1, -3, 0, 5, -6], 2), ([1, -1, -2, 1], -4))
same("example", [1*2, -3 + 2, -1*2, 0 - 2, -2*2, 5 - 4, 1*2, -6 + 2], [2, -1, -2, -2, -4, 1, 2, -4])
same("example", long_div(P, x - 2), (x**3 - x**2 - 2*x + 1, -4))
same("example", P.subs(x, 2), -4)
same("example", [2**4, -3*2**3, 5*2, -6], [16, -24, 10, -6])
same("example", expand((x - 2)*(x**3 - x**2 - 2*x + 1) - 4), P)

# practice[0]
same("practice[0]", synth([1, 2, -5, 1], 1), ([1, 3, -2], -1))
same("practice[0]", long_div(x**3 + 2*x**2 - 5*x + 1, x - 1), (x**2 + 3*x - 2, -1))
# practice[1]
same("practice[1]", synth([1, 0, 0, 0, -16], -2), ([1, -2, 4, -8], 0))
same("practice[1]", long_div(x**4 - 16, x + 2), (x**3 - 2*x**2 + 4*x - 8, 0))
# practice[2]
P2 = 2*x**4 + 5*x**3 - 2*x + 1
same("practice[2]", synth([2, 5, 0, -2, 1], -3), ([2, -1, 3, -11], 34))
same("practice[2]", P2.subs(x, -3), 34)
same("practice[2]", [2*81, 5*(-27), -2*(-3), 1], [162, -135, 6, 1])
# practice[3]
P3 = 2*x**3 + x**2 - 5*x + 5
same("practice[3]", synth([2, 1, -5, 5], Rational(1, 2)), ([2, 2, -4], 3))
same("practice[3]", expand((x - Rational(1, 2))*(2*x**2 + 2*x - 4) + 3), P3)
same("practice[3]", expand((2*x - 1)*(x**2 + x - 2) + 3), P3)
same("practice[3]", long_div(P3, 2*x - 1), (x**2 + x - 2, 3))
