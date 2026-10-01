# content: f2778442790b
# g-congruence: Triangle Congruence
from sympy import Point, Line, Triangle, sqrt as Sqrt, rad, acos
# formal: SSA case analysis (A acute, c = AB, a = BC opposite A): C on the ray at distance t, t^2 - 2 c cos(A) t + c^2 - a^2 = 0
def ssa_count(A_deg, c_, a_):
    tt = symbols('tt', real=True)
    roots = solveset(tt**2 - 2*c_*cos(rad(A_deg))*tt + c_**2 - a_**2, tt, S.Reals)
    return len([r for r in roots if r > 0])
same("formal", [ssa_count(30, 10, a_) for a_ in (4, 5, 6, 10, 12)], [0, 1, 2, 1, 1])
# example: with any positions, D = 2C - A and E = 2C - B give DE = AB (SAS through vertical angles)
A, B, C = Point(a, b), Point(c, d), Point(e, f)
D, E = 2*C - A, 2*C - B
same("example", D.distance(E)**2, A.distance(B)**2)
same("example", D.distance(C)**2, A.distance(C)**2); same("example", E.distance(C)**2, B.distance(C)**2)
check("example", Point.is_collinear(A, C, D) and Point.is_collinear(B, C, E), "A-C-D and B-C-E are straight")
A0, B0, C0 = Point(0, 0), Point(48, 7), Point(20, -30)
check("example", Line(A0, B0).is_parallel(Line(2*C0 - A0, 2*C0 - B0)), "AB parallel to DE")
same("example", Rational(485, 10), 48.5)
# practice[0]
same("practice[0]", 50 + 60 + 70, 180)   # the AAA triangles exist ...
T1 = Triangle(Point(0, 0), Point(1, 0), Point(0, 1)); T2 = Triangle(Point(0, 0), Point(2, 0), Point(0, 2))
check("practice[0]", T1.is_similar(T2) and T1.area != T2.area, "... but equal angles allow different sizes")
# AAS determines the triangle: law of sines gives one value for each side
same("practice[0]", 180 - 50 - 60, 70)
check("practice[0]", 8*sin(rad(60))/sin(rad(50)) > 0 and 8*sin(rad(70))/sin(rad(50)) > 0, "AAS sides are unique positive numbers")
# practice[1]
same("practice[1]", 180 - 72 - 41, 67)
# practice[2]
same("practice[2]", 10*sin(rad(30)), 5)
tt = symbols('tt', real=True)
r = solveset(tt**2 - 2*10*cos(rad(30))*tt + 100 - 36, tt, S.Reals)
same("practice[2]", set(r), {5*Sqrt(3) + Sqrt(11), 5*Sqrt(3) - Sqrt(11)})
near("practice[2]", 5*Sqrt(3) + Sqrt(11), 12.0, rel=0.005); near("practice[2]", 5*Sqrt(3) - Sqrt(11), 5.3, rel=0.01)
same("practice[2]", ssa_count(30, 10, 6), 2); same("practice[2]", ssa_count(30, 10, 4), 0)
# practice[3]: with A(0, h), B(p, 0), C(q, 0), B != C and AB = AC force p = -q, so D(0, 0) is the midpoint
p_, q_ = symbols('p_ q_', real=True)
sols = solve(Eq(p_**2 + h**2, q_**2 + h**2), q_)
same("practice[3]", set(sols), {p_, -p_})
same("practice[3]", Point(0, 0).distance(Point(p_, 0)), Point(0, 0).distance(Point(-p_, 0)))
