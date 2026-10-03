# content: 5f49425ac2e1
# trig-sin-cos-graphs: Graphs of Sine & Cosine
from trig import *
X = symbols('X', real=True)
# formal: period, range, amplitude, zeros / extrema, parity, shift, key points
same("formal", periodicity(sin(X), X), 2*pi); same("formal", periodicity(cos(X), X), 2*pi)
same("formal", [maximum(sin(X), X, Interval(0, 2*pi)), minimum(sin(X), X, Interval(0, 2*pi))], [1, -1])
same("formal", R2 := Rational(1 - (-1), 2), 1)
same("formal", trig_solutions(Eq(sin(x), 0), x, 0, 2*pi), [0, pi])
same("formal", trig_solutions(Eq(cos(x), 0), x, 0, 2*pi), [pi/2, 3*pi/2])
same("formal", trig_solutions(Eq(sin(x), 1), x, 0, 2*pi), [pi/2]); same("formal", trig_solutions(Eq(sin(x), -1), x, 0, 2*pi), [3*pi/2])
same("formal", trig_solutions(Eq(cos(x), 1), x, 0, 2*pi), [0]); same("formal", trig_solutions(Eq(cos(x), -1), x, 0, 2*pi), [pi])
check("formal", identity(sin(-x), -sin(x))); check("formal", identity(cos(-x), cos(x))); check("formal", identity(cos(x), sin(x + pi/2)))
ks = [0, pi/2, pi, 3*pi/2, 2*pi]
same("formal", [sin(v) for v in ks], [0, 1, 0, -1, 0]); same("formal", [cos(v) for v in ks], [1, 0, -1, 0, 1])
# example
same("example", [cos(v) for v in ks], [1, 0, -1, 0, 1])
z = trig_solutions(Eq(cos(x), 0), x, -2*pi, 2*pi); same("example", z, [-3*pi/2, -pi/2, pi/2, 3*pi/2])
same("example", [pi/2 + k*pi for k in (-2, -1, 0, 1)], z)
mx = trig_solutions(Eq(cos(x), 1), x, -2*pi, 2*pi) + [2*pi]; same("example", mx, [-2*pi, 0, 2*pi])
check("example", is_decreasing(cos(X), Interval(0, pi), X)); check("example", minimum(diff(cos(X), X), X, Interval(pi, 2*pi)) >= 0)   # derivative −sin x ≥ 0 there
# practice[0]
same("practice[0]", [sin(5*pi/2), sin(pi/2), cos(3*pi), cos(pi)], [1, 1, -1, -1])
# practice[1]
same("practice[1]", [sin(-pi/2), -sin(pi/2), cos(-pi), cos(pi)], [-1, -1, -1, -1])
# practice[2] closed interval [0, 4π]: half-open finder plus the right end
s1 = trig_solutions(Eq(sin(x), 1), x, 0, 4*pi) + ([4*pi] if sin(4*pi) == 1 else []); same("practice[2]", s1, [pi/2, 5*pi/2])
s0 = trig_solutions(Eq(sin(x), 0), x, 0, 4*pi) + ([4*pi] if sin(4*pi) == 0 else []); same("practice[2]", s0, [0, pi, 2*pi, 3*pi, 4*pi])
# practice[3]
check("practice[3]", is_decreasing(sin(X), Interval(pi/2, 3*pi/2), X)); check("practice[3]", is_decreasing(cos(X), Interval(0, pi), X))
check("practice[3]", not is_decreasing(sin(X), Interval(0, pi/2 + Rational(1, 10)), X)); check("practice[3]", not is_decreasing(cos(X), Interval(pi - Rational(1, 10), 3*pi/2), X))
same("practice[3]", Interval(pi/2, 3*pi/2).intersect(Interval(0, pi)), Interval(pi/2, pi))
# mistakes: sin 90 (radians)
near("mistakes", round(float(sin(90)), 3), 0.894); near("mistakes", round(float(pi/2), 2), 1.57)
