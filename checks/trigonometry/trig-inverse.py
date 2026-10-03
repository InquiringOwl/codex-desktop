# content: 0939fcdfd952
# trig-inverse: Inverse Trigonometric Functions
from trig import *
from sympy.calculus.util import function_range
from sympy import is_increasing, is_decreasing, is_strictly_increasing
X = symbols('X', real=True)
def principal(fn, v):
    """the angle in the principal range with fn(angle) = v, found by solving on that range (not with asin/acos/atan)"""
    lo, hi = {'sin': (-pi/2, pi/2), 'cos': (0, pi), 'tan': (-pi/2, pi/2)}[fn]
    f = {'sin': sin, 'cos': cos, 'tan': tan}[fn]
    s = trig_solutions(Eq(f(x), v), x, lo, hi + Rational(1, 10**6))
    s = [r for r in s if lo <= r <= hi]
    assert len(s) == 1, (fn, v, s); return s[0]
# formal: ranges, one-to-one on them, endpoints, asymptotes, cancellations
same("formal", function_range(sin(X), X, Interval(-pi/2, pi/2)), Interval(-1, 1)); same("formal", function_range(diff(sin(X), X), X, Interval.open(-pi/2, pi/2)), Interval.Lopen(0, 1))   # sin' > 0: increasing
same("formal", function_range(cos(X), X, Interval(0, pi)), Interval(-1, 1)); check("formal", is_decreasing(cos(X), Interval(0, pi)))
same("formal", function_range(tan(X), X, Interval.open(-pi/2, pi/2)), S.Reals); check("formal", is_increasing(tan(X), Interval.open(-pi/2, pi/2)))
same("formal", [asin(-1), asin(1), acos(-1), acos(1)], [-pi/2, pi/2, pi, 0])
same("formal", [limit(atan(X), X, oo), limit(atan(X), X, -oo)], [pi/2, -pi/2])
check("formal", identity(asin(-x), -asin(x)))
same("formal", principal('sin', sin(3*pi/4)), pi/4); same("formal", asin(sin(3*pi/4)), pi/4)
same("formal", simplify(cos(atan(X))), 1/sqrt(X**2 + 1))
near("formal", N(asin(Rational(3, 5))), 0.6435)
same("formal", [principal('sin', Rational(1, 2)), sin(pi/6)], [pi/6, Rational(1, 2)])   # hero
for v in (Rational(-1), Rational(-1, 2), 0, Rational(1, 3), 1):
    same("formal", sin(asin(v)), v); same("formal", cos(acos(v)), v)
check("formal", cot(3*pi/4) == -1 and 0 < 3*pi/4 < pi)   # convention cot⁻¹ in (0, π): cot⁻¹(−1) = 3π/4 (sympy's acot uses another range)
same("formal", [acos(Rational(1, 2)), acos(-Rational(1, 2))], [pi/3, 2*pi/3])   # arcsec 2 = π/3, arcsec(−2) = 2π/3 in [0, π]
# example
same("example", principal('cos', -sqrt(3)/2), 5*pi/6); same("example", acos(-sqrt(3)/2), 5*pi/6); same("example", ref_angle(5*pi/6), pi/6)
same("example", sin(5*pi/6), Rational(1, 2)); same("example", principal('sin', Rational(1, 2)), pi/6); same("example", asin(sin(5*pi/6)), pi/6)
t = atan(Rational(-3, 4)); check("example", -pi/2 < t < 0); same("example", sqrt((-3)**2 + 4**2), 5)
same("example", simplify(cos(atan(Rational(-3, 4)))), Rational(4, 5))
# practice
same("practice[0]", [principal('sin', -sqrt(2)/2), principal('tan', -sqrt(3))], [-pi/4, -pi/3])
same("practice[1]", cos(7*pi/6), -sqrt(3)/2); same("practice[1]", principal('cos', cos(7*pi/6)), 5*pi/6); same("practice[1]", acos(cos(7*pi/6)), 5*pi/6)
th = acos(Rational(-5, 13)); check("practice[2]", pi/2 < th < pi); same("practice[2]", sqrt(169 - 25), 12)
same("practice[2]", simplify(tan(th)), Rational(-12, 5))
same("practice[3]", simplify(sin(atan(X))), X/sqrt(X**2 + 1))
for v in (-3, Rational(-1, 2), 0, 2, 7): same("practice[3]", simplify(sin(atan(v)) - v/sqrt(v**2 + 1)), 0)
# mistakes / why
same("mistakes", [principal('sin', sin(2*pi/3)), principal('cos', -Rational(1, 2))], [pi/3, 2*pi/3])
check("mistakes", not Interval(-1, 1).contains(2))
same("why", round(float(N(atan(Rational(1, 12)) * 180 / pi)), 1), 4.8)
