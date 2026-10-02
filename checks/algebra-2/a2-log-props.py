# content: 65eb65cf88eb
# a2-log-props: Properties of Logarithms
from algebra import *

lg = log_exact
def dec(label, expr, val, places):
    """The page's rounded decimal `val` is expr rounded to `places` decimals."""
    check(label, abs(N(expr, 20) - val) <= Rational(1, 2) * Rational(1, 10**places) + Rational(1, 10**12), f'{N(expr, 12)} vs {val}')

M, Nn, b = symbols('M N b', positive=True)
p = Symbol('p', real=True)

# hero / plain
same("hero: log2(8*4)", lg(2, 32), 5)
same("hero: 3 + 2", lg(2, 8) + lg(2, 4), 5)
same("plain: 2^3*2^2", 2**3 * 2**2, 2**5)
same("plain: quotient", lg(2, 4), lg(2, 8) - lg(2, 2))
same("plain: quotient value", lg(2, 4), 2)
same("plain: power", lg(2, 64), 2 * lg(2, 8))
same("plain: 8^2 = 2^6", 8**2, 2**6)
same("plain: log2(4+4)", lg(2, 4 + 4), 3)
same("plain: log2 4 + log2 4", 2 * lg(2, 4), 4)
dec("plain: log7 50", log(50) / log(7), 2.0104, 4)

# formal: the rules, proved symbolically for positive M, N, b
same("formal: product rule", expand_log(log(M * Nn) / log(b), force=False), (log(M) + log(Nn)) / log(b))
check("formal: product rule (base b)", simplify(log(M * Nn, b) - (log(M, b) + log(Nn, b))) == 0)
check("formal: quotient rule", simplify(expand_log(log(M / Nn, b)) - (log(M, b) - log(Nn, b))) == 0)
check("formal: power rule", simplify(expand_log(log(M**p, b), force=True) - p * log(M, b)) == 0)
a_ = Symbol('a_', positive=True)
check("formal: change of base", simplify(log(M, b) - (log(M, a_) / log(b, a_))) == 0)
check("formal: change of base via ln", simplify(log(M, b) - log(M) / log(b)) == 0)
u, v = symbols('u v', real=True)
check("formal: proof b^u b^v", simplify(b**u * b**v - b**(u + v)) == 0)
check("formal: b^u / b^v", simplify(b**u / b**v - b**(u - v)) == 0)
check("formal: (b^u)^p", simplify(powsimp((b**u)**p, force=True) - b**(p * u)) == 0)
check("formal: log_b b^x", simplify(expand_log(log(b**x, b), force=True) - x) == 0)
check("formal: b^(log_b x)", simplify(b**log(M, b) - M) == 0)
same("formal: log_b 1", simplify(log(1, b)), 0)
same("formal: log_b b", simplify(log(b, b)), 1)

# example: log2(8x^3/sqrt(y)) = 3 + 3 log2 x - 1/2 log2 y
X, Y = symbols('X Y', positive=True)
orig = log(8 * X**3 / sqrt(Y), 2)
expd = 3 + 3 * log(X, 2) - Rational(1, 2) * log(Y, 2)
check("example", simplify(expand_log(orig, force=True) - expd) == 0)
check("example", simplify(expand_log(orig - (log(8 * X**3, 2) - log(Y**Rational(1, 2), 2)), force=True)) == 0)
check("example", simplify(expand_log(orig - (log(8, 2) + log(X**3, 2) - log(Y**Rational(1, 2), 2)), force=True)) == 0)
same("example", lg(2, 8), 3)
same("example", (lg(2, 4), lg(2, 16)), (2, 4))
same("example", 3 + 3 * 2 - Rational(1, 2) * 4, 7)
same("example", simplify(expd.subs({X: 4, Y: 16})), 7)
same("example", Rational(8 * 4**3) / sqrt(16), 128)
same("example", Rational(512, 4), 128)
same("example", lg(2, 128), 7)
same("example", simplify(orig.subs({X: 4, Y: 16})), 7)

# mistakes
same("mistakes: log(2+8)", lg(10, 10), 1)
dec("mistakes: log 16", log(16, 10), 1.204, 3)
check("mistakes: log 2 + log 8 = log 16", simplify(log(2, 10) + log(8, 10) - log(16, 10)) == 0)
same("mistakes: log2 8 / log2 2", lg(2, 8) / lg(2, 2), 3)
same("mistakes: log2 8 - log2 2", lg(2, 8) - lg(2, 2), 2)
same("mistakes: (log 10)^2", lg(10, 10)**2, 1)
same("mistakes: 2 log 10", 2 * lg(10, 10), 2)
check("mistakes: ln x^2 = 2 ln|x| at x = -3", simplify(log((-3)**2) - 2 * log(abs(-3))) == 0)
check("mistakes: 2 ln(-3) not real", not (2 * log(-3)).is_real)

# practice[0]
check("practice[0]", simplify(expand_log(log(100 * X**3, 10), force=True) - (2 + 3 * log(X, 10))) == 0)
same("practice[0]", lg(6, 36), 2)
same("practice[0]", 4 * 9, 36)

# practice[1]
Z = Symbol('Z', positive=True)
lhs1 = 3 * log(X, 10) - 2 * log(Y, 10) + Rational(1, 2) * log(Z, 10)
check("practice[1]", simplify(expand_log(log(X**3 * sqrt(Z) / Y**2, 10), force=True) - lhs1) == 0)

# practice[2]
dec("practice[2]", log(50), 3.9120, 4)
dec("practice[2]", log(7), 1.9459, 4)
dec("practice[2]", log(50) / log(7), 2.0104, 4)
dec("practice[2]", Integer(7)**Rational(20104, 10000), 50.0, 1)

# practice[3]
l2, l3 = Rational(3562, 10000), Rational(5646, 10000)
dec("practice[3]", log(2) / log(7), 0.3562, 4)
dec("practice[3]", log(3) / log(7), 0.5646, 4)
same("practice[3]", 2**2 * 3, 12)
same("practice[3]", 2 * l2 + l3, Rational(12770, 10000))
same("practice[3]", l3 - l2, Rational(2084, 10000))
dec("practice[3]", log(12) / log(7), 1.2770, 4)
dec("practice[3]", log(Rational(3, 2)) / log(7), 0.2084, 4)
