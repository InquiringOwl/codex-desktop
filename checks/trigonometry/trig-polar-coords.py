# content: 60389708788d
# trig-polar-coords: Polar Coordinates
from trig import *

# hero: (2, 5π/6) ↔ (−√3, 1)
same("hero", to_rect(2, 5*pi/6), (-sqrt(3), 1))
same("hero", to_polar(-sqrt(3), 1), (2, 5*pi/6))
# plain: (2, π/3), (2, 7π/3), (−2, 4π/3) are one point
check("plain", same_point((2, pi/3), (2, 7*pi/3)) and same_point((2, pi/3), (-2, 4*pi/3)), "three names")
# formal: every name (r, θ + 2πk), (−r, θ + π + 2πk)
for kk in range(-2, 3):
    check("formal", same_point((3, pi/5), (3, pi/5 + 2*pi*kk)) and same_point((3, pi/5), (-3, pi/5 + pi + 2*pi*kk)), f"names k={kk}")
check("formal", same_point((0, pi/7), (0, 2)), "pole (0, θ)")
# negative r lies on the terminal side of θ + π
check("formal", same_point((-2, pi/3), (2, pi/3 + pi)), "negative r opposite ray")
# quadrant rule with reference angle θ' = atan|y/x|
for (px, py, want) in [(1, sqrt(3), pi/3), (-1, sqrt(3), 2*pi/3), (-1, -sqrt(3), 4*pi/3), (1, -sqrt(3), 5*pi/3), (0, 2, pi/2), (0, -2, 3*pi/2)]:
    same("formal", to_polar(px, py)[1], want)
ref = atan(Abs(Rational(-3, 2)))
same("formal", to_polar(-2, 3)[1], pi - ref); same("formal", to_polar(-2, -3)[1], pi + ref); same("formal", to_polar(2, -3)[1], 2*pi - ref)
# formal equations: r = 4 sin θ ↔ x² + (y − 2)² = 4 (every point of the polar curve is on the circle, and back)
th = symbols('th', real=True)
X, Y = 4*sin(th)*cos(th), 4*sin(th)*sin(th)
check("formal", simplify(X**2 + (Y - 2)**2 - 4) == 0, "r = 4 sin θ lies on the circle")
check("formal", simplify(expand(x**2 + y**2 - 4*y - (x**2 + (y - 2)**2 - 4))) == 0, "x² + y² = 4y completes to the circle")
check("formal", (4*sin(0)) == 0, "pole on the curve at θ = 0")
# circle points back: every point (2 sin 2t... ) param of circle: (2 cos s, 2 + 2 sin s) → r = 4 sin θ
for sv in [pi/6, pi/3, 2*pi/3, 5*pi/4, 7*pi/4]:
    r0, t0 = to_polar(2*cos(sv), 2 + 2*sin(sv))
    check("formal", simplify(r0 - 4*sin(t0)) == 0, f"circle point s={sv} satisfies r = 4 sin θ")
check("formal", simplify(3/cos(th)*cos(th) - 3) == 0, "x = 3 ↔ r = 3 sec θ")

# example
same("example", sqrt((-1)**2 + (-sqrt(3))**2), 2)
same("example", (-sqrt(3))/(-1), sqrt(3))
same("example", atan(sqrt(3)), pi/3)
same("example", to_rect(2, pi/3), (1, sqrt(3)))
same("example", to_polar(-1, -sqrt(3)), (2, 4*pi/3))
same("example", to_rect(2, 4*pi/3), (-1, -sqrt(3)))
check("example", same_point((-2, pi/3), (2, 4*pi/3)), "(−2, π/3)")
# mistakes
same("mistakes", to_rect(-2, pi/3), (-1, -sqrt(3)))
same("mistakes", 2*cos(pi/3), 1)

# practice
same("practice[0]", to_rect(4, 2*pi/3), (-2, 2*sqrt(3)))
same("practice[1]", to_rect(-3, pi/4), (-3*sqrt(2)/2, -3*sqrt(2)/2))
check("practice[1]", same_point((-3, pi/4), (3, 5*pi/4)), "(3, 5π/4)")
r3, t3 = to_polar(-5, 12)
same("practice[2]", r3, 13)
near("practice[2]", N(atan(Rational(12, 5))), 1.176)
near("practice[2]", N(t3), 1.966)
near("practice[2]", N(t3*180/pi), 112.62)
check("practice[2]", abs(N(t3 - (pi - atan(Rational(12, 5))))) < 1e-12, "θ = π − tan⁻¹(12/5)")
X6, Y6 = 6*cos(th)*cos(th), 6*cos(th)*sin(th)
check("practice[3]", simplify((X6 - 3)**2 + Y6**2 - 9) == 0, "r = 6 cos θ on (x − 3)² + y² = 9")
check("practice[3]", simplify(expand(x**2 + y**2 - 6*x - ((x - 3)**2 + y**2 - 9))) == 0, "x² + y² = 6x")
check("practice[3]", simplify(-2/sin(th)*sin(th) + 2) == 0, "y = −2 ↔ r = −2 csc θ")
