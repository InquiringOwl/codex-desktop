# content: 72b5a97c177a
# g-pythagorean: The Pythagorean Theorem & Its Converse
from sympy import Point, Triangle, sqrt as Sqrt, acos, deg
def angle_opp(a, b, c):  # angle opposite c in degrees
    return deg(acos(Rational(a*a + b*b - c*c, 2*a*b)))
# formal: altitude proof a^2 + b^2 = c(p+q); Euclid's formula
m_, n_ = symbols('m_ n_', positive=True)
same("formal", expand((m_**2 - n_**2)**2 + (2*m_*n_)**2), expand((m_**2 + n_**2)**2))
check("formal", angle_opp(3, 4, 5) == 90 and angle_opp(5, 6, 7) < 90 and angle_opp(3, 4, 6) > 90, "converse and inequalities")
# example
same("example", 12**2 + 16**2, 400); same("example", Sqrt(400), 20)
d = Rational(2025, 100); check("example", 12 + 16 > d, "triangle inequality")
same("example", d**2, Rational(4100625, 10000)); check("example", d**2 > 400, "obtuse")
check("example", angle_opp(12, 16, d).evalf() > 90, "angle opposite the diagonal is obtuse")
same("example", [Rational(12, 4), Rational(16, 4), Rational(20, 4)], [3, 4, 5])
# practice[0]
same("practice[0]", Sqrt(81 + 144), 15); same("practice[0]", Sqrt(169 - 25), 12); same("practice[0]", Sqrt(25 + 49), Sqrt(74)); near("practice[0]", Sqrt(74), 8.6, rel=0.005)
# practice[1]
same("practice[1]", 49 + 576, 625); same("practice[1]", 36 + 49, 85); check("practice[1]", 81 < 85, "acute")
check("practice[1]", 5 + 8 > 11 and 121 > 25 + 64, "obtuse"); check("practice[1]", 2 + 3 < 6, "not a triangle")
check("practice[1]", angle_opp(7, 24, 25) == 90 and angle_opp(6, 7, 9).evalf() < 90 and angle_opp(5, 8, 11).evalf() > 90, "angles")
# practice[2]
t = symbols('t', positive=True)
sol = solve(Eq((16*t)**2 + (9*t)**2, 55**2), t); same("practice[2]", sol, [55/Sqrt(337)])
near("practice[2]", sol[0], 2.996, rel=0.0005); near("practice[2]", 16*sol[0], 47.9, rel=0.002); near("practice[2]", 9*sol[0], 27.0, rel=0.002)
# practice[3]
same("practice[3]", Sqrt(9 + 16), 5); same("practice[3]", Sqrt(25 + 144), 13)
same("practice[3]", Point(0, 0, 0).distance(Point(3, 4, 12)), 13); check("practice[3]", Rational(27, 2) > 13, "13.5 ft pole does not fit")
