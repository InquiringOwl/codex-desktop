# content: 4adbc2642c06
# a2-exp-models: Exponential Growth, Decay & Compound Interest
from algebra import *

def dec(label, expr, val, places):
    """The page's rounded decimal `val` is expr rounded to `places` decimals."""
    check(label, abs(N(expr, 20) - val) <= Rational(1, 2) * Rational(1, 10**places) + Rational(1, 10**12), f'{N(expr, 12)} vs {val}')

R = Rational
# hero / plain
dec("hero", compound(1000, R(5, 100), 12, 10), 1647.01, 2)
same("plain: simple interest", 1000 * (1 + R(5, 100) * 10), 1500)
same("plain: $50 a year", 1000 * R(5, 100), 50)
dec("plain: annual compounding", 1000 * R(105, 100)**10, 1628.89, 2)
dec("plain: monthly", compound(1000, R(5, 100), 12, 10), 1647.01, 2)
T_ = Symbol('T_', positive=True)
check("plain: doubling e^(0.05t) = 2", [simplify(v - 20 * log(2)) for v in real_solutions(Eq(exp(R(5, 100) * t), 2), t)] == [0])
dec("plain: ln2/0.05", log(2) / R(5, 100), 13.86, 2)
check("plain: n -> oo gives Pe^(rt)", limit((1 + R(5, 100) / x)**(x * 10), x, oo) == exp(R(1, 2)))

# formal
r_, n_, P_, k_ = symbols('r_ n_ P_ k_', positive=True)
check("formal: continuous limit", simplify(limit((1 + r_ / x)**(x * t), x, oo) - exp(r_ * t)) == 0)
check("formal: APY continuous", simplify(continuous(1, r_, 1) - 1 - (exp(r_) - 1)) == 0)
check("formal: doubling ln2/k", simplify(exp(k_ * (log(2) / k_)) - 2) == 0)
check("formal: half-life k = ln2/T", simplify(exp(-(log(2) / T_) * t) - R(1, 2)**(t / T_)) == 0)
dec("formal: C-14 k", log(2) / 5730, 0.000121, 6)
Ts, T0 = symbols('Ts T0', real=True)
Tc = Ts + (T0 - Ts) * exp(-k_ * t)
same("formal: cooling T(0)", simplify(Tc.subs(t, 0)), T0)
same("formal: cooling asymptote", limit(Tc, t, oo), Ts)
check("formal: exponential passes linear", limit(R(105, 100)**t / (1 + 50 * t), t, oo) == oo)

# example: $5000 at 4.5% monthly for 8 years
i = 1 + R(45, 1000) / 12
same("example", i, R(100375, 100000))
same("example", 12 * 8, 96)
A8 = compound(5000, R(45, 1000), 12, 8)
same("example", A8, 5000 * i**96)
dec("example", A8, 7161.82, 2)
dec("example", i**12 - 1, 0.04594, 5)
dec("example", 100 * (i**12 - 1), 4.594, 3)
t2 = log(2) / (12 * log(i))
check("example", abs(N(5000 * i**(12 * t2), 30) - 10000) < 1e-20)   # t2 solves 5000·i^(12t) = 10000
check("example", diff(i**(12 * t), t).subs(t, 1) > 0)               # i^(12t) is increasing, so t2 is the only solution
dec("example", t2, 15.43, 2)
dec("example", continuous(5000, R(45, 1000), 8), 7166.65, 2)
dec("example", log(2) / R(45, 1000), 15.40, 2)

# mistakes
check("mistakes: r = 5 is huge", compound(1000, 5, 12, 10) > 10**20)
dec("mistakes: r = 0.05", compound(1000, R(5, 100), 12, 10), 1647.01, 2)
same("mistakes: two half-lives", R(1, 2)**2, R(1, 4))
same("mistakes: three half-lives", R(1, 2)**3, R(1, 8))
same("mistakes: 25% age", [simplify(v) for v in real_solutions(Eq(R(1, 2)**(t / 5730), R(1, 4)), t)], [11460])

# practice[0]
same("practice[0]", compound(2000, R(6, 100), 4, 5), 2000 * R(1015, 1000)**20)
dec("practice[0]", compound(2000, R(6, 100), 4, 5), 2693.71, 2)

# practice[1]
same("practice[1]", continuous(2000, R(6, 100), 5), 2000 * exp(R(3, 10)))
dec("practice[1]", continuous(2000, R(6, 100), 5), 2699.72, 2)
dec("practice[1]", 100 * (exp(R(6, 100)) - 1), 6.184, 3)

# practice[2]: carbon-14, 30% left
tc = 5730 * log(R(3, 10)) / log(R(1, 2))
check("practice[2]", simplify(expand_log(log(R(1, 2)**(tc / 5730)), force=True) - log(R(3, 10))) == 0)   # tc solves (1/2)^(t/5730) = 0.3
check("practice[2]", diff(R(1, 2)**(t / 5730), t).subs(t, 1) < 0)   # strictly decreasing: one solution
dec("practice[2]", tc, 9953, 0)

# practice[3]: coffee 90 -> 60 in 10 min, room 20; time to 40
kk = [simplify(v) for v in real_solutions(Eq(20 + 70 * exp(-10 * k), 60), k)]
same("practice[3]", len(kk), 1)
check("practice[3]", simplify(kk[0] - log(R(7, 4)) / 10) == 0)
same("practice[3]", R(60 - 20, 70), R(4, 7))
dec("practice[3]", kk[0], 0.0560, 4)
same("practice[3]", R(40 - 20, 70), R(2, 7))
tt = [simplify(v) for v in real_solutions(Eq(20 + 70 * exp(-kk[0] * t), 40), t)]
same("practice[3]", len(tt), 1)
check("practice[3]", simplify(tt[0] - 10 * log(R(7, 2)) / log(R(7, 4))) == 0)
dec("practice[3]", tt[0], 22.4, 1)
