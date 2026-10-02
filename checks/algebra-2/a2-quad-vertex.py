# content: 91761a53c02b
# a2-quad-vertex: Quadratic Functions in Vertex Form
from algebra import *
R = Rational
from sympy.calculus.util import function_range, minimum, maximum
A, B, Cc = symbols('A B Cc', real=True)

# hero / formal example: 2x² − 12x + 13 = 2(x − 3)² − 5
same("hero", expand(2*(x - 3)**2 - 5), 2*x**2 - 12*x + 13)
same("formal", expand(2*(x**2 - 6*x + 9) + 13 - 18), 2*x**2 - 12*x + 13)
same("formal", ((-12)/R(2*2))**2 * 2, 18)
f0 = 2*x**2 - 12*x + 13
same("formal", minimum(f0, x, S.Reals), -5)
same("formal", function_range(f0, x, S.Reals), Interval(-5, oo))

# formal: general identity h = −b/(2a), k = c − b²/(4a)
hh, kk = -B/(2*A), Cc - B**2/(4*A)
check("formal", equivalent(A*(x - hh)**2 + kk, A*x**2 + B*x + Cc), "a(x − h)² + k = ax² + bx + c")
check("formal", equivalent((A*x**2 + B*x + Cc).subs(x, hh), kk), "k = f(h)")
check("formal", equivalent(A*(x**2 + B/A*x + (B/(2*A))**2) + Cc - A*(B/(2*A))**2, A*x**2 + B*x + Cc), "add inside, subtract a·(b/2a)² outside")
# range for a > 0 / a < 0 (samples)
same("formal", function_range(-(x - 1)**2 + 6, x, S.Reals), Interval(-oo, 6))

# example: 2x² − 6x + 1
f = 2*x**2 - 6*x + 1
same("example", expand(2*(x**2 - 3*x) + 1), f)
same("example", R(-3, 2)**2, R(9, 4))
same("example", expand(2*(x**2 - 3*x + R(9, 4)) + 1 - 2*R(9, 4)), f)
same("example", 2*R(9, 4), R(9, 2))
same("example", 1 - R(9, 2), R(-7, 2))
same("example", expand(2*(x - R(3, 2))**2 - R(7, 2)), f)
same("example", -(-6)/R(2*2), R(3, 2))
same("example", 2*R(9, 4) - 9 + 1, R(-7, 2))
same("example", f.subs(x, R(3, 2)), R(-7, 2))
same("example", solve(diff(f, x), x), [R(3, 2)])
same("example", function_range(f, x, S.Reals), Interval(R(-7, 2), oo))

# fields: projectile h(t) = −½gt² + v₀t + h₀ peaks at t = v₀/g
g_, v0, h0 = symbols('g_ v0 h0', positive=True)
same("fields", solve(diff(-R(1, 2)*g_*t**2 + v0*t + h0, t), t), [v0/g_])

# mistakes
same("mistakes[0]", solve(diff(3*(x + 4)**2 - 1, x), x), [-4])
same("mistakes[1]", 2*R(9, 4), R(9, 2))

# practice[0]: x² + 6x + 5
p0 = x**2 + 6*x + 5
same("practice[0]", (6/R(2))**2, 9)
same("practice[0]", expand((x + 3)**2 - 4), p0)
same("practice[0]", function_range(p0, x, S.Reals), Interval(-4, oo))

# practice[1]: −3x² + 12x − 7
p1 = -3*x**2 + 12*x - 7
same("practice[1]", -R(12)/(2*(-3)), 2)
same("practice[1]", -12 + 24 - 7, 5)
same("practice[1]", p1.subs(x, 2), 5)
same("practice[1]", expand(-3*(x - 2)**2 + 5), p1)
same("practice[1]", maximum(p1, x, S.Reals), 5)
same("practice[1]", function_range(p1, x, S.Reals), Interval(-oo, 5))

# practice[2]: vertex (2, −3) through (4, 5)
aa = symbols('aa')
same("practice[2]", solve(Eq(aa*(4 - 2)**2 - 3, 5), aa), [2])
same("practice[2]", expand(2*(x - 2)**2 - 3), 2*x**2 - 8*x + 5)
same("practice[2]", (2*x**2 - 8*x + 5).subs(x, 4), 5)

# practice[3]: fence 240 m, three sides
Ar = x*(240 - 2*x)
same("practice[3]", expand(Ar), -2*x**2 + 240*x)
same("practice[3]", expand(-2*(x - 60)**2 + 7200), expand(Ar))
same("practice[3]", solve(diff(Ar, x), x), [60])
same("practice[3]", 240 - 2*60, 120)
same("practice[3]", Ar.subs(x, 60), 7200)
