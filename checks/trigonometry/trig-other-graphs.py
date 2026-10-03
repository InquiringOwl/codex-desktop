# content: 4cf5279dd0c6
# trig-other-graphs: Graphs of Tangent, Cotangent, Secant & Cosecant
from trig import *
from sympy.calculus.util import function_range, periodicity, maximum, minimum
from sympy import is_increasing, is_decreasing
X = symbols('X', real=True)
n = symbols('n', integer=True)
# formal: periods, parity, asymptotes, zeros, ranges
same("formal", [periodicity(tan(X), X), periodicity(cot(X), X), periodicity(sec(X), X), periodicity(csc(X), X)], [pi, pi, 2*pi, 2*pi])
check("formal", identity(tan(-x), -tan(x))); check("formal", identity(cot(-x), -cot(x)))
check("formal", identity(sec(-x), sec(x))); check("formal", identity(csc(-x), -csc(x)))
same("formal", trig_solutions(Eq(cos(x), 0), x, 0, 2*pi), [pi/2, 3*pi/2])   # tan, sec asymptotes
same("formal", trig_solutions(Eq(sin(x), 0), x, 0, 2*pi), [0, pi])          # cot, csc asymptotes
same("formal", trig_solutions(Eq(tan(x), 0), x, 0, 2*pi), [0, pi])
same("formal", trig_solutions(Eq(cot(x), 0), x, 0, 2*pi), [pi/2, 3*pi/2])
check("formal", limit(tan(X), X, pi/2, '-') == oo and limit(tan(X), X, pi/2, '+') == -oo)
same("formal", function_range(sec(X), X, Interval.Ropen(0, 2*pi) - FiniteSet(pi/2, 3*pi/2)), Union(Interval(-oo, -1), Interval(1, oo)))
same("formal", function_range(csc(X), X, Interval.open(0, 2*pi) - FiniteSet(pi)), Union(Interval(-oo, -1), Interval(1, oo)))
same("formal", function_range(tan(X), X, Interval.open(-pi/2, pi/2)), S.Reals)
check("formal", is_increasing(tan(X), Interval.open(-pi/2, pi/2)))
check("formal", is_decreasing(cot(X), Interval.open(0, pi)))
same("formal", [sec(0), sec(pi), csc(pi/2), csc(3*pi/2)], [1, -1, 1, -1])
# formal: transformed periods / range of A sec(B(x − C)) + D, spacing of asymptotes π/|B|
A_, B_, D_ = 3, 2, 1
same("formal", periodicity(A_*tan(B_*X) + D_, X), pi/B_); same("formal", periodicity(A_*sec(B_*X) + D_, X), 2*pi/B_)
same("formal", function_range(-2*sec(3*X) + 5, X, Interval.Ropen(0, 2*pi/3) - FiniteSet(pi/6, pi/2)), Union(Interval(-oo, 5 - 2), Interval(5 + 2, oo)))
asy = trig_solutions(Eq(cos(3*x), 0), x, 0, 2*pi/3 + pi/3); same("formal", [asy[1] - asy[0], asy[2] - asy[1]], [pi/3, pi/3])
# example y = 2 tan(2(x − π/4)) + 1
f = 2*tan(2*(X - pi/4)) + 1
same("example", periodicity(f, X), pi/2)
same("example", [solve(Eq(2*(X - pi/4), -pi/2), X), solve(Eq(2*(X - pi/4), pi/2), X)], [[0], [pi/2]])
same("example", trig_solutions(Eq(cos(2*(x - pi/4)), 0), x, -3*pi/4, pi), [-pi/2, 0, pi/2])
same("example", [f.subs(X, pi/8), f.subs(X, pi/4), f.subs(X, 3*pi/8)], [-1, 1, 3])
same("example", function_range(f, X, Interval.open(0, pi/2)), S.Reals)
check("example", is_increasing(f, Interval.open(0, pi/2)))
# practice[0] y = tan 3x
same("practice[0]", periodicity(tan(3*X), X), pi/3)
same("practice[0]", trig_solutions(Eq(cos(3*x), 0), x, 0, pi), [pi/6, pi/2, 5*pi/6])
same("practice[0]", [pi/6 + k*pi/3 for k in range(3)], [pi/6, pi/2, 5*pi/6])
# practice[1] y = 3 sec x − 1
g = 3*sec(X) - 1
same("practice[1]", periodicity(g, X), 2*pi)
same("practice[1]", function_range(g, X, Interval.Ropen(0, 2*pi) - FiniteSet(pi/2, 3*pi/2)), Union(Interval(-oo, -4), Interval(2, oo)))
same("practice[1]", [g.subs(X, 0), g.subs(X, pi)], [2, -4])
same("practice[1]", trig_solutions(Eq(diff(3/cos(x) - 1, x), 0), x, 0, 2*pi), [0, pi])
# practice[2] y = −csc 2x
h = -csc(2*X)
same("practice[2]", periodicity(h, X), pi)
same("practice[2]", trig_solutions(Eq(sin(2*x), 0), x, 0, pi + Rational(1, 100)), [0, pi/2, pi])
same("practice[2]", [h.subs(X, pi/4), h.subs(X, 3*pi/4)], [-1, 1])
same("practice[2]", maximum(h, X, Interval.open(0, pi/2)), -1); same("practice[2]", minimum(h, X, Interval.open(pi/2, pi)), 1)
# practice[3] asymptotes ±π/4, through (π/8, 3) → y = 3 tan 2x
B3 = pi/(pi/4 - (-pi/4)); same("practice[3]", B3, 2)
A3 = solve(Eq(symbols('A')*tan(B3*pi/8), 3), symbols('A')); same("practice[3]", A3, [3])
y3 = 3*tan(2*X); same("practice[3]", [y3.subs(X, 0), y3.subs(X, pi/8)], [0, 3])
same("practice[3]", trig_solutions(Eq(cos(2*x), 0), x, -pi/2 + Rational(1, 100), pi/2), [-pi/4, pi/4])
