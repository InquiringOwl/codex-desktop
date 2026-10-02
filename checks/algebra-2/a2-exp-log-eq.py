# content: d671bbcaa755
# a2-exp-log-eq: Exponential & Logarithmic Equations
from algebra import *

def dec(label, expr, val, places):
    """The page's rounded decimal `val` is expr rounded to `places` decimals."""
    check(label, abs(N(expr, 20) - val) <= Rational(1, 2) * Rational(1, 10**places) + Rational(1, 10**12), f'{N(expr, 12)} vs {val}')

def sols(eq):
    s = real_solutions(eq)
    return sorted(simplify(v) for v in s)

# hero
same("hero: 3^x = 20", sols(Eq(3**x, 20)), [simplify(log(20) / log(3))])
dec("hero: decimal", log(20) / log(3), 2.727, 3)

# plain
same("plain: 2^(x+1) = 32", sols(Eq(2**(x + 1), 32)), [4])
same("plain: 32 = 2^5", 2**5, 32)
check("plain: x ln 3 = ln 20", simplify(expand_log(log(3**x), force=True) - x * log(3)) == 0)

# formal
c_ = Symbol('c_', positive=True)
same("formal: b^x = c (c > 0)", [simplify(v) for v in real_solutions(Eq(5**x, c_), x)], [log(c_) / log(5)])
check("formal: b^x = 0 none", real_solutions(Eq(2**x, 0)) in (set(), S.EmptySet))
check("formal: b^x = -3 none", real_solutions(Eq(2**x, -3)) in (set(), S.EmptySet))
same("formal: e^(2x) - 3e^x + 2 = 0", sols(Eq(exp(2 * x) - 3 * exp(x) + 2, 0)), [0, log(2)])
U = Symbol('U')
check("formal: (u-1)(u-2)", expand((U - 1) * (U - 2)) == U**2 - 3 * U + 2)

# example: log2 x + log2(x - 2) = 3
same("example", Intersection(ineq(x > 0), ineq(x - 2 > 0)), Interval.open(2, oo))
check("example", simplify(expand_log(log(x * (x - 2), 2), force=True) - (log(x, 2) + log(x - 2, 2))) == 0)
same("example", 2**3, 8)
check("example", expand(x * (x - 2) - 8) == x**2 - 2 * x - 8)
check("example", expand((x - 4) * (x + 2)) == x**2 - 2 * x - 8)
same("example", sols(Eq(x * (x - 2), 8)), [-2, 4])
same("example", (log_exact(2, 4), log_exact(2, 2)), (2, 1))
same("example", simplify(log(4, 2) + log(4 - 2, 2)), 3)
check("example", not log(-2, 2).is_real)
same("example", sorted(solveset(Eq(x * (x - 2), 8), x, Interval.open(2, oo))), [4])
check("example", abs(nsolve(log(x, 2) + log(x - 2, 2) - 3, x, 5) - 4) < 1e-12)

# mistakes
same("mistakes: 3*2^x = 24", sols(Eq(3 * 2**x, 24)), [3])
check("mistakes: 6^x = 24 differs", sols(Eq(6**x, 24)) != [3])
dec("mistakes: ln20/ln3", log(20) / log(3), 2.727, 3)
dec("mistakes: ln(20/3)", log(Rational(20, 3)), 1.897, 3)
check("mistakes: 2^x = -2", real_solutions(Eq(2**x, -2)) in (set(), S.EmptySet))
same("mistakes: 2^-1", Integer(2)**-1, Rational(1, 2))

# practice[0]
same("practice[0]", sols(Eq(2**(x + 1), 32)), [4])
same("practice[0]", sols(Eq(9**x, 27**(x - 1))), [3])
check("practice[0]", 9 == 3**2 and 27 == 3**3)
same("practice[0]", sols(Eq(2 * x, 3 * x - 3)), [3])

# practice[1]
s1 = sols(Eq(5**(2 * x - 1), 40))
same("practice[1]", len(s1), 1)
check("practice[1]", simplify(s1[0] - (log(40) + log(5)) / (2 * log(5))) == 0)
check("practice[1]", simplify(s1[0] - log(200) / log(25)) == 0)
dec("practice[1]", s1[0], 1.6460, 4)

# practice[2]: 2 ln x = ln(x + 6)
same("practice[2]", sols(Eq(x**2, x + 6)), [-2, 3])
check("practice[2]", expand((x - 3) * (x + 2)) == x**2 - x - 6)
check("practice[2]", not log(-2).is_real)
xp = Symbol('xp', positive=True)
same("practice[2]", sorted(solveset(Eq(x**2, x + 6), x, Interval.open(0, oo))), [3])
check("practice[2]", abs(nsolve(2 * log(x) - log(x + 6), x, 2.5) - 3) < 1e-12)
same("practice[2]", simplify(2 * log(3) - log(9)), 0)

# practice[3]: 4^x - 2^(x+1) - 8 = 0
check("practice[3]", expand(U**2 - 2 * U - 8 - (U - 4) * (U + 2)) == 0)
same("practice[3]", sorted(real_solutions(Eq(U**2 - 2 * U - 8, 0), U)), [-2, 4])
check("practice[3]", simplify((4**x - 2**(x + 1) - 8) - ((2**x)**2 - 2 * 2**x - 8)) == 0)
same("practice[3]", sols(Eq(4**x - 2**(x + 1) - 8, 0)), [2])
