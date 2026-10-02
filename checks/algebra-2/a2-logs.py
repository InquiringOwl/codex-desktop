# content: f5ed45bad889
# a2-logs: Logarithmic Functions
from algebra import *

def lg(bb, v):
    return log_exact(bb, v)

def sols(eq):
    return sorted(simplify(v) for v in real_solutions(eq))

# hero / plain
same("hero: log2 8", lg(2, 8), 3)
same("hero: 2^3", 2**3, 8)
same("plain: log10 1000", lg(10, 1000), 3)
same("plain: log3 1/9", lg(3, Rational(1, 9)), -2)
same("plain: 3^-2", Integer(3)**-2, Rational(1, 9))
same("plain: log4 8", lg(4, 8), Rational(3, 2))
same("plain: 4^(3/2)", Integer(4)**Rational(3, 2), 8)
check("plain: log 0 undefined", log(0) == zoo or not log(0).is_finite)
check("plain: log(-5) not real", not log(-5).is_real)
b = Symbol('b', positive=True)
# formal: inverse properties and graph facts
same("formal: log_b 1", simplify(log(1, b)), 0)
same("formal: log_b b", simplify(log(b, b)), 1)
same("formal: log_b b^x", simplify(expand_log(log(b**x, b), force=True)), x)
xp = Symbol('xp', positive=True)
same("formal: b^(log_b x)", simplify(b**log(xp, b)), xp)
same("formal: ln = log_e", log(E**2), 2)
same("formal: log2 is inverse of 2^x", simplify(compose(log(x, 2), 2**x)), x)
same("formal: domain of log", ineq(x > 0), Interval.open(0, oo))
same("formal: x-intercept (1, 0)", log(1, 2), 0)
check("formal: asymptote x = 0", limit(log(x, 2), x, 0, '+') == -oo)
check("formal: increasing for b > 1", simplify(diff(log(x, 2), x)) == 1/(x*log(2)))
check("formal: decreasing for 0 < b < 1", (diff(log(x, Rational(1, 2)), x).subs(x, 1)) < 0)
h = Symbol('h', real=True)
same("formal: domain of a log_b(x - h) + k", ineq(x - 3 > 0), Interval.open(3, oo))

# example: f(x) = log2(x + 4) - 1
f = log(x + 4, 2) - 1
same("example", ineq(x + 4 > 0), Interval.open(-4, oo))
par = [(Rational(1, 2), -1), (1, 0), (2, 1), (4, 2)]
for xx, yy in par:
    same("example", lg(2, xx), yy)
img = [(xx - 4, yy - 1) for xx, yy in par]
same("example", img, [(Rational(-7, 2), -2), (-3, -1), (-2, 0), (0, 1)])
for xx, yy in img:
    same("example", simplify(f.subs(x, xx)), yy)
same("example", sols(Eq(f, 0)), [-2])
same("example", simplify(f.subs(x, 0)), 1)
same("example", lg(2, 4), 2)
finv = 2**(x + 1) - 4
check("example", inverse_ok(f, finv, [0, 1, 4, 12, Rational(-7, 2)]))
check("example", limit(f, x, -4, '+') == -oo)
T = Symbol('T', positive=True)
same("example", limit(finv.subs(x, -T), T, oo), -4)   # f⁻¹ has asymptote y = −4 (x → −∞ via x = −T)

# practice[0]
same("practice[0]", lg(5, 125), 3)
same("practice[0]", 5**3, 125)
same("practice[0]", lg(4, Rational(1, 16)), -2)
same("practice[0]", Integer(4)**-2, Rational(1, 16))

# practice[1]
same("practice[1]", lg(3, 81), 4)
same("practice[1]", lg(10, Rational(1, 100)), -2)
same("practice[1]", log(exp(-3)), -3)
same("practice[1]", lg(8, 4), Rational(2, 3))
same("practice[1]", (3**4, Integer(10)**-2), (81, Rational(1, 100)))

# practice[2]
same("practice[2]", sols(Eq(log(2*x + 1, 5), 2)), [12])
same("practice[2]", 2*12 + 1, 25)
same("practice[2]", sols(Eq(x**2, 49)), [-7, 7])
same("practice[2]", [v for v in sols(Eq(x**2, 49)) if v > 0 and v != 1], [7])   # a base must be positive, not 1
same("practice[2]", lg(7, 49), 2)

# practice[3]: -log3(x - 2) + 1
f3 = -log(x - 2, 3) + 1
same("practice[3]", ineq(x - 2 > 0), Interval.open(2, oo))
check("practice[3]", limit(f3, x, 2, '+') == oo)
check("practice[3]", limit(f3, x, oo) == -oo)
same("practice[3]", sols(Eq(f3, 0)), [5])
check("practice[3]", simplify(diff(f3, x)) == -1/((x - 2)*log(3)))

# mistakes
same("mistakes: log2 8", lg(2, 8), 3)
same("mistakes: domain of log(x - 3)", ineq(x - 3 > 0), Interval.open(3, oo))
same("mistakes: log 100", lg(10, 100), 2)
check("mistakes: ln 100 ≈ 4.605", abs(N(log(100)) - 4.605) < 0.0005)
same("mistakes: log 0.01", lg(10, Rational(1, 100)), -2)
check("mistakes: log(-100) not real", not log(-100).is_real)
# why: decibels and pH, binary search
same("why: million times = 60 dB", 10 * lg(10, 10**6), 60)
same("why: pH 14", -lg(10, Rational(1, 10**14)), 14)
check("careers: log2 10^6 ≈ 20", abs(N(log(10**6, 2)) - 20) < 0.1)
