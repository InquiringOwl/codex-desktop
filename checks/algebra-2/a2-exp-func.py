# content: 4c53d92933a7
# a2-exp-func: Exponential Functions & the Number e
from algebra import *

def lim_n(n):
    # (1 + 1/n)^n to 40 digits (the exact rational is too large for n = 10^6)
    return (1 + Float(1, 40) / n) ** n

T = Symbol('T', positive=True)
def at_minus_inf(f):
    # limit as x -> -oo via x = -T, T -> oo (sympy's limit at -oo misbehaves for 2**x here)
    return limit(f.subs(x, -T), T, oo)

def sols(eq):
    return sorted(simplify(v) for v in real_solutions(eq))

# plain: doubling and halving, compounding values
same("plain: 2^0..2^4", [2**i for i in range(5)], [1, 2, 4, 8, 16])
same("plain: 2^-1, 2^-2", (Integer(2)**-1, Integer(2)**-2), (Rational(1, 2), Rational(1, 4)))
check("plain: (1 + 1/12)^12 ≈ 2.613", abs(lim_n(12) - 2.613) < 0.0005)
check("plain: daily ≈ 2.7146", abs(lim_n(365) - 2.7146) < 0.00005)
check("plain: e = 2.71828...", abs(E - 2.71828) < 0.000005)
same("plain: yearly gives 2", (1 + Rational(1, 1))**1, 2)
# plain/formal: b^x passes (0, 1) and (1, b); 1/b reflection
b = Symbol('b', positive=True)
same("formal: b^0, b^1", ((b**x).subs(x, 0), (b**x).subs(x, 1)), (1, b))
check("formal: (1/b)^x = b^-x", equivalent((1/b)**x, b**(-x)))
check("formal: 2^x > 0", ask(Q.positive(2**x)))
same("formal: 2^x -> 0 as x -> -oo", at_minus_inf(2**x), 0)
same("formal: (1/2)^x -> 0 as x -> oo", limit(Rational(1, 2)**x, x, oo), 0)
# formal: table of (1 + 1/n)^n and the limit
check("formal: n = 1", abs(lim_n(1) - 2) < 1e-30)
for n, v in [(12, 2.613035), (365, 2.714567), (10**6, 2.718280)]:
    check(f"formal: n = {n}", abs(lim_n(n) - v) < 5e-7)
same("formal: limit is e", limit((1 + 1/x)**x, x, oo), E)
check("formal: e ≈ 2.718281828", abs(E - Float('2.718281828')) < 1e-9)
# formal: 9^x = 27
same("formal: 9^x = 27", sols(Eq(9**x, 27)), [Rational(3, 2)])
same("formal: 9 = 3^2, 27 = 3^3", (3**2, 3**3), (9, 27))

# example: g(x) = 3*2^(x-1) - 6
g = 3 * 2**(x - 1) - 6
par = [(-1, Rational(1, 2)), (0, 1), (1, 2), (2, 4)]
img = [(xx + 1, 3 * yy - 6) for xx, yy in par]
same("example", img, [(0, Rational(-9, 2)), (1, -3), (2, 0), (3, 6)])
for (xx, yy) in img:
    same("example", g.subs(x, xx), yy)
for (xx, yy) in par:
    same("example", Integer(2)**xx, yy)
same("example", at_minus_inf(g), -6)
check("example", ask(Q.positive(3 * 2**(x - 1))))
same("example", g.subs(x, 0), Rational(-9, 2))
solves("example", Eq(g, 0), x, [2])
solves("example", Eq(2**(x - 1), 2), x, [2])

# practice[0]: (1/3)^x
f0 = Rational(1, 3)**x
same("practice[0]", f0.subs(x, -2), 9)
same("practice[0]", f0.subs(x, 3), Rational(1, 27))
check("practice[0]", diff(f0, x).subs(x, 0) < 0 and simplify(diff(f0, x) / f0) == -log(3))

# practice[1]: 4^(x-1) = 32
same("practice[1]", sols(Eq(4**(x - 1), 32)), [Rational(7, 2)])
same("practice[1]", Integer(4)**Rational(5, 2), 32)
same("practice[1]", 2**5, 32)

# practice[2]: -2*3^(x+1) + 5
g2 = -2 * 3**(x + 1) + 5
same("practice[2]", at_minus_inf(g2), 5)
check("practice[2]", limit(g2, x, oo) == -oo)
check("practice[2]", ask(Q.negative(-2 * 3**(x + 1))))
same("practice[2]", g2.subs(x, 0), -1)

# practice[3]: e^(x^2) = e^(3x + 4)
solves("practice[3]", Eq(exp(x**2), exp(3*x + 4)), x, [-1, 4])
same("practice[3]", factor(x**2 - 3*x - 4), (x - 4)*(x + 1))

# mistakes
same("mistakes: asymptote of 2^x - 3", at_minus_inf(2**x - 3), -3)
check("mistakes: n = 1000 ≈ 2.71692", abs(lim_n(1000) - 2.71692) < 5e-6)
check("mistakes: (-2)^(1/2) not real", not (sqrt(-2)).is_real)
