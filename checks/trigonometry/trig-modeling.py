# content: 9cb12a3b85a2
# trig-modeling: Sinusoidal Models & Harmonic Motion
from trig import *
from sympy.calculus.util import periodicity, maximum, minimum
T = symbols('T', real=True)
def fit(mx, tmx, mn, per):
    """cosine model from a maximum (value, time), a minimum value and a period"""
    A_, D_ = (mx - mn)/2, (mx + mn)/2
    return A_, D_, 2*pi/per, A_*cos(2*pi/per*(T - tmx)) + D_
# plain: Central Park monthly means (1991–2020 normals, °C) → 12.2 cos(π/6 (t − 7)) + 13.1, RMS error ≈ 1.2 °C
NYC = [0.9, 2.2, 6.0, 12.1, 17.3, 22.2, 25.3, 24.5, 20.7, 14.4, 8.9, 3.9]
A_, D_, B_, m = fit(Rational('25.3'), 7, Rational('0.9'), 12)
same("plain", [A_, D_, B_], [Rational('12.2'), Rational('13.1'), pi/6])
same("plain", [max(NYC), NYC.index(max(NYC)) + 1, min(NYC), NYC.index(min(NYC)) + 1], [25.3, 7, 0.9, 1])
rms = sqrt(sum((m.subs(T, i + 1) - Rational(str(v)))**2 for i, v in enumerate(NYC))/12)
check("plain", 1 < N(rms) < 1.3)   # "off by little more than 1 °C on average"
# formal: A, D from max/min; high to next low is half a period; sin form C is a quarter period before the max
Am, Dm, Bp, Cm = symbols('A_m D_m B_p C_m', positive=True)
g = Am*cos(Bp*(T - Cm)) + Dm
same("formal", [g.subs(T, Cm), g.subs(T, Cm + pi/Bp)], [Am + Dm, Dm - Am])
same("formal", simplify(Am*sin(Bp*(T - (Cm - pi/(2*Bp)))) - g + Dm), 0)
w, a_, c_ = symbols('omega a_ c_', positive=True)
same("formal", periodicity(a_*sin(w*T), T), 2*pi/w); same("formal", 1/(2*pi/w), w/(2*pi))
same("formal", [sin(0), cos(0)], [0, 1])
same("formal", solve(Eq(a_*exp(-c_*T), a_/2), T), [log(2)/c_])
same("formal", trig_solutions(Eq(exp(-x/5)*sin(3*x), 0), x, Rational(1, 100), 2*pi/3 + Rational(1, 100)), [pi/3, 2*pi/3])   # zeros π/ω apart (ω = 3)
# example: Ferris wheel
h = -25*cos(pi/10*T) + 27
same("example", [2*pi/20, h.subs(T, 0), h.subs(T, 10), h.subs(T, 5)], [pi/10, 2, 52, 27])
same("example", periodicity(h, T), 20); same("example", [maximum(h, T, Interval(0, 20)), minimum(h, T, Interval(0, 20))], [52, 2])
near("example", h.subs(T, 8), 47.2); near("example", cos(4*pi/5), -0.809); near("example", -25*cos(4*pi/5), 20.2)
# practice[0]
d0 = 5*sin(4*pi*T); same("practice[0]", [periodicity(d0, T), 1/periodicity(d0, T), maximum(d0, T, Interval(0, 1))], [Rational(1, 2), 2, 5])
# practice[1] daylight
A1, D1, B1, H = fit(Rational('15.0'), 172, Rational('9.3'), 365)
same("practice[1]", [A1, D1, B1], [Rational('2.85'), Rational('12.15'), 2*pi/365])
near("practice[1]", H.subs(T, 80), 12.11, rel=0.0005)
# practice[2] tide
A2, D2, B2, hh = fit(Rational('3.2'), 4, Rational('0.4'), 2*(Rational(51, 5) - 4))
same("practice[2]", [Rational(51, 5) - 4, A2, D2, B2], [Rational('6.2'), Rational('1.4'), Rational('1.8'), 2*pi/Rational('12.4')])
same("practice[2]", [hh.subs(T, 4), hh.subs(T, Rational(51, 5))], [Rational('3.2'), Rational('0.4')])
near("practice[2]", hh.subs(T, 12), 0.94)
# practice[3] damped
same("practice[3]", 2*pi/(2*pi), 1)
sol = solve(Eq(10*exp(-Rational(1, 5)*T), 5), T); check("practice[3]", len(sol) == 1 and simplify(sol[0] - 5*log(2)) == 0)
near("practice[3]", log(2)/Rational('0.2'), 3.47)
# mistakes
same("mistakes", [4*pi/(2*pi), 2*pi/(4*pi)], [2, Rational(1, 2)]); same("mistakes", [(25 - 1)/2, (25 + 1)/2], [12, 13])
same("mistakes", trig_solutions(Eq(sin(2*pi*x), 0), x, 0, 1), [0, Rational(1, 2)])
