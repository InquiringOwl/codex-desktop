# content: 4604697ddd58
# g-circle-equations: Equations of Circles
from sympy import Point, Circle
# formal: general-form coefficients and completed-square radius
H, K, Rr = symbols('H K Rr', real=True)
same("formal", expand((x - H)**2 + (y - K)**2 - Rr**2), x**2 + y**2 - 2*H*x - 2*K*y + H**2 + K**2 - Rr**2)
D_, E_, F_ = symbols('D_ E_ F_', real=True)
same("formal", expand((x + D_/2)**2 + (y + E_/2)**2 - (D_**2 + E_**2 - 4*F_)/4), x**2 + y**2 + D_*x + E_*y + F_)
# example
gen = x**2 + y**2 - 6*x + 4*y - 12
same("example", expand((x - 3)**2 + (y + 2)**2 - 25), gen)
same("example", 12 + 9 + 4, 25)
same("example", (Rational(-6, 2))**2, 9); same("example", (Rational(4, 2))**2, 4)
c = Circle(Point(3, -2), 5)
same("example", (c.center.x, c.center.y, c.radius), (3, -2, 5))
same("example", (6 - 3)**2 + (1 + 2)**2, 18)
check("example", 18 < 25, "inside")
same("example", Point(6, 1).distance(c.center), 3*sqrt(2)); check("example", round(float(3*sqrt(2)), 1) == 4.2, "3√2 ≈ 4.2 to the nearest tenth")
same("example", gen.subs({x: 8, y: -2}), 0)
# practice[0]
same("practice[0]", expand((x + 4)**2 + (y - 1)**2 - 9), x**2 + y**2 + 8*x - 2*y + 8)
# practice[1]
same("practice[1]", Point(5, 1).distance(Point(2, -3))**2, 25)
same("practice[1]", (5 - 2)**2 + (1 + 3)**2, 9 + 16)
# practice[2]
P1, P2 = Point(-1, 4), Point(5, -4)
check("practice[2]", P1.midpoint(P2) == Point(2, 0), "midpoint is (2, 0)")
same("practice[2]", P1.distance(P2), 10)
same("practice[2]", Point(5, -4).distance(Point(2, 0)), 5)
# practice[3]
ga = x**2 + y**2 + 4*x - 10*y + 29
same("practice[3]", expand((x + 2)**2 + (y - 5)**2 - 0), ga)
same("practice[3]", -29 + 4 + 25, 0)
same("practice[3]", set(solve([diff(ga, x), diff(ga, y)], [x, y]).items()), {(x, -2), (y, 5)})
same("practice[3]", ga.subs({x: -2, y: 5}), 0)
gb = x**2 + y**2 - 2*x + 6*y + 15
same("practice[3]", expand((x - 1)**2 + (y + 3)**2 + 5), gb)
same("practice[3]", -15 + 1 + 9, -5)
check("practice[3]", minimum(gb.subs(y, -3), x, S.Reals) == 5, "minimum of the left side is 5 > 0, so no real solutions")
