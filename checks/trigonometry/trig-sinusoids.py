# content: 68a66f9fdf26
# trig-sinusoids: Amplitude, Period, Phase Shift & Midline
from trig import *
from algebra import *
X = symbols('X', real=True)
def feats(f):
    """amplitude, period, midline, range of f(X) found from the function itself (not from A, B, C, D)"""
    P = periodicity(f, X); I = Interval(0, P)
    hi, lo = maximum(f, X, I), minimum(f, X, I)
    return dict(amp=(hi - lo)/2, per=P, mid=(hi + lo)/2, rng=Interval(lo, hi))
# formal: one cycle from C to C + 2π/B; Bx − c = B(x − c/B); key points of sine
A_, B_, C_, D_ = symbols('A_ B_ C_ D_', positive=True)
same("formal", simplify(B_*((C_ + 2*pi/B_) - C_)), 2*pi)
c_ = symbols('c_'); same("formal", expand(B_*(x - c_/B_)), expand(B_*x - c_))
P_ = 2*pi/B_; same("formal", [simplify(sin(B_*(C_ + k*P_/4 - C_))) for k in range(5)], [0, 1, 0, -1, 0])
check("formal", identity(sin(-x), -sin(x))); check("formal", identity(cos(-x), cos(x)))
# example y = 3 sin(2(x − π/4)) + 1
f = 3*sin(2*(X - pi/4)) + 1; F = feats(f)
same("example", [F['amp'], F['per'], F['mid'], F['rng']], [3, pi, 1, Interval(-2, 4)])
kx = [pi/4 + k*pi/4 for k in range(5)]; same("example", kx, [pi/4, pi/2, 3*pi/4, pi, 5*pi/4])
same("example", [f.subs(X, v) for v in kx], [1, 4, 1, -2, 1])
same("example", maximum(f, X, Interval(pi/4, 5*pi/4)), 4); same("example", f.subs(X, pi/2), 4)
# practice[0] y = −2 cos(x/2) + 3
F = feats(-2*cos(X/2) + 3); same("practice[0]", [F['amp'], F['per'], F['mid'], F['rng']], [2, 4*pi, 3, Interval(1, 5)])
# practice[1] y = 4 sin(3x − π)
g = 4*sin(3*X - pi); F = feats(g); same("practice[1]", [F['amp'], F['per']], [4, 2*pi/3])
check("practice[1]", identity((4*sin(3*x - pi)), 4*sin(3*(x - pi/3))))
same("practice[1]", g.subs(X, pi/3), 0); check("practice[1]", diff(g, X).subs(X, pi/3) > 0)   # rising midline start, like sin at 0
# practice[2] y = 2 cos(πx) − 1
h = 2*cos(pi*X) - 1; F = feats(h); same("practice[2]", [F['per'], F['rng']], [2, Interval(-3, 1)])
same("practice[2]", [(v, h.subs(X, v)) for v in (0, Rational(1, 2), 1, Rational(3, 2), 2)],
     [(0, 1), (Rational(1, 2), -1), (1, -3), (Rational(3, 2), -1), (2, 1)])
# practice[3] max 7 at π/6, next min −1 at 2π/3
same("practice[3]", [Rational(7 - (-1), 2), Rational(7 + (-1), 2)], [4, 3])
same("practice[3]", 2*pi/3 - pi/6, pi/2); same("practice[3]", 2*pi/pi, 2); same("practice[3]", pi/6 - pi/4, -pi/12)
yc = 4*cos(2*(x - pi/6)) + 3; ys = 4*sin(2*(x + pi/12)) + 3
check("practice[3]", identity(yc, ys))
same("practice[3]", [yc.subs(x, pi/6), yc.subs(x, 2*pi/3)], [7, -1])
crit = trig_solutions(Eq(diff(yc, x), 0), x, 0, pi); same("practice[3]", crit, [pi/6, 2*pi/3])
same("practice[3]", [maximum(yc, x, Interval(0, pi)), minimum(yc, x, Interval(0, pi))], [7, -1])
# mistakes
check("mistakes", identity(sin(2*x - pi), sin(2*(x - pi/2)))); same("mistakes", feats(sin(3*X))['per'], 2*pi/3)
same("mistakes", feats(-4*cos(X))['amp'], 4); same("mistakes", feats(2*sin(X) + 5)['rng'], Interval(3, 7))
