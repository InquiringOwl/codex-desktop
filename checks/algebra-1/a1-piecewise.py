# content: 1401c50d4c5f
# a1-piecewise: Piecewise & Absolute Value Functions
from sympy.calculus.util import function_range

# formal: |x| has range [0, oo), ceiling is least integer >= x
same("formal", function_range(Abs(x), x, S.Reals), Interval(0, oo))
check("formal", ceiling(Rational(7, 2)) == 4 and ceiling(3) == 3, "ceiling definition")

# example: $0.12/kWh first 500, $0.15 above
C = lambda kk: Piecewise((Rational(12, 100)*kk, kk <= 500), (Rational(12, 100)*500 + Rational(15, 100)*(kk - 500), True))
same("example", Rational(12, 100)*500, 60)
same("example", 740 - 500, 240)
same("example", Rational(15, 100)*240, 36)
same("example", C(740), 96)
same("example", Rational(12, 100)*500, 60 + Rational(15, 100)*0)   # continuity at 500

# practice[0]
f = lambda v: Piecewise((2*v + 1, v < 0), (v**2, True))
same("practice[0]", f(-3), -5)
same("practice[0]", f(0), 0)
same("practice[0]", f(4), 16)

# practice[1]: |x-2| piecewise
g = Piecewise((x - 2, x >= 2), (2 - x, True))
check("practice[1]", all(g.subs(x, v) == abs(v - 2) for v in [-5, -1, 0, Rational(3, 2), 2, 3, 10]), "piecewise != |x-2|")
same("practice[1]", piecewise_fold(Abs(x - 2).rewrite(Piecewise)).subs(x, 5), 3)

# practice[2]: h(x) = |x+1| - 3
h = Abs(x + 1) - 3
same("practice[2]", minimum(h, x, S.Reals), -3)
solves("practice[2]", Eq(h, -3), x, {-1})           # vertex x = -1
same("practice[2]", h.subs(x, 0), -2)
solves("practice[2]", Eq(h, 0), x, {2, -4})
same("practice[2]", function_range(h, x, S.Reals), Interval(-3, oo))

# practice[3]: $4 first hour (or part), $2 each additional hour or part
cost = lambda t: 4 + 2*(ceiling(t) - 1)
same("practice[3]", cost(Rational(7, 2)), 10)
same("practice[3]", cost(3), 8)
same("practice[3]", ceiling(Rational(7, 2)), 4)
