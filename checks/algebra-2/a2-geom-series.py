# content: 6e37f1d3c994
# a2-geom-series: Geometric Series
from algebra import *

k_, n_ = symbols('k n', integer=True, positive=True)
a1_, r_ = symbols('a1 r')
h = Rational(1, 2)
# hero
same("formal", geom_inf(h, h), 1)
same("formal", h/(1 - h), 1)
same("formal", summation(h**k_, (k_, 1, oo)), 1)
# plain: unshaded part after n halvings
check("formal", all(1 - geom_sum(h, h, m) == h**m for m in range(1, 30)), "unshaded = 1/2^n")
same("formal", [h, h**2, h**3], [Rational(1, 2), Rational(1, 4), Rational(1, 8)])
# formal: closed form and the subtraction step
Sn = sum(a1_*r_**j for j in range(7))
same("formal", expand((1 - r_)*Sn), expand(a1_ - a1_*r_**7))
check("formal", all(geom_sum(a, rr, m) == Rational(a)*(1 - Rational(rr)**m)/(1 - Rational(rr)) for a in [1, 3, -2] for rr in [Rational(1, 2), Rational(-2, 3), 2, -3, Rational(5, 4)] for m in range(1, 12)), "S_n formula")
same("formal", geom_sum(5, 1, 9), 45)
check("formal", all(simplify(geom_inf(a, rr) - geom_sum(a, rr, m) - geom_inf(a, rr)*Rational(rr)**m) == 0 for a in [1, 24, -3] for rr in [Rational(1, 2), Rational(-1, 2), Rational(2, 3), Rational(-9, 10)] for m in range(1, 15)), "gap = S r^n")
same("formal", limit(Rational(9, 10)**n_, n_, oo), 0)
check("formal", geom_inf(1, 1) is None and geom_inf(1, -1) is None and geom_inf(3, Rational(-3, 2)) is None, "|r| >= 1 diverges")
same("formal", geom_inf(Rational(3, 10), Rational(1, 10)), Rational(1, 3))
same("formal", Rational(3, 10)/(1 - Rational(1, 10)), Rational(1, 3))

# example: 24 - 12 + 6 - 3 + ...
same("example", [Rational(-12, 24), Rational(6, -12), Rational(-3, 6)], [-h, -h, -h])
same("example", (-h)**6, Rational(1, 64))
same("example", 1 - (-h), Rational(3, 2))
same("example", 24*(1 - Rational(1, 64))/Rational(3, 2), 24*Rational(63, 64)*Rational(2, 3))
same("example", geom_sum(24, -h, 6), Rational(63, 4))
same("example", Rational(63, 4), Rational(1575, 100))
same("example", 24 - 12 + 6 - 3 + Rational(15, 10) - Rational(75, 100), Rational(1575, 100))
same("example", geom_inf(24, -h), 16)
same("example", 24/Rational(3, 2), 16)
same("example", 16 - Rational(63, 4), Rational(1, 4))
same("example", 16*Rational(1, 64), Rational(1, 4))
check("example", abs(-h) < 1, "|r| < 1")

# why: annuity, multiplier
A = 100*(Rational(1005, 1000)**24 - 1)/Rational(5, 1000)
same("why", geom_sum(100, Rational(1005, 1000), 24), A)
near("why", A, 2543.20)
same("why", geom_inf(1, Rational(8, 10)), 5)
same("why", 1/(1 - Rational(8, 10)), 5)

# mistakes
same("mistakes", Rational(1, 1 - 2), -1)
check("mistakes", geom_inf(1, 2) is None, "r = 2 diverges")
check("mistakes", all(geom_sum(1, 2, m) == 2**m - 1 for m in range(1, 40)), "partial sums 2^n - 1 grow")
same("mistakes", 1/(1 - h), 2)
same("mistakes", summation(h**k_, (k_, 1, oo)), 1)
same("mistakes", h/(1 - h), 1)
same("mistakes", [Rational(24, 12), Rational(12, 24)], [2, h])

# fields: 1 + 2 + ... + 2^(n-1)
same("fields", simplify(geom_sum(1, 2, n_) - (2**n_ - 1)), 0)

# practice[0]
solves("practice[0]", Eq(3*2**(x - 1), 384), x, {8})
same("practice[0]", 2**7, 128)
same("practice[0]", geom_term(3, 2, 8), 384)
same("practice[0]", geom_sum(3, 2, 8), 765)
same("practice[0]", 3*(1 - 2**8)/(1 - 2), 765)
same("practice[0]", 3*255, 765)
# practice[1]
same("practice[1]", geom_inf(Rational(36, 100), Rational(1, 100)), Rational(4, 11))
same("practice[1]", Rational(36, 100)/Rational(99, 100), Rational(36, 99))
same("practice[1]", Rational(36, 99), Rational(4, 11))
near("practice[1]", N(Rational(4, 11), 10), 0.363636)
# practice[2]
same("practice[2]", 10*Rational(3, 5), 6)
same("practice[2]", 6*Rational(3, 5), Rational(36, 10))
same("practice[2]", geom_inf(6, Rational(3, 5)), 15)
same("practice[2]", 10 + 2*geom_inf(6, Rational(3, 5)), 40)
# practice[3]
same("practice[3]", Rational(6, 100)/12, Rational(5, 1000))
same("practice[3]", geom_sum(100, Rational(1005, 1000), 24), A)
near("practice[3]", A, 2543.20)
near("practice[3]", A - 2400, 143.20)
