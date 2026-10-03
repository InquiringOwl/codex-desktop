# content: 39cbbd499832
# trig-fundamental-ids: Fundamental Identities
from trig import *

# formal: every identity in the display (identity() = symbolic + numeric)
F = [(csc(x), 1/sin(x)), (sec(x), 1/cos(x)), (cot(x), 1/tan(x)),
     (tan(x), sin(x)/cos(x)), (cot(x), cos(x)/sin(x)),
     (sin(x)**2 + cos(x)**2, Integer(1)), (1 + tan(x)**2, sec(x)**2), (1 + cot(x)**2, csc(x)**2),
     (cos(-x), cos(x)), (sec(-x), sec(x)), (sin(-x), -sin(x)), (csc(-x), -csc(x)), (tan(-x), -tan(x)), (cot(-x), -cot(x)),
     (sin(x + 2*pi), sin(x)), (cos(x + 2*pi), cos(x)), (csc(x + 2*pi), csc(x)), (sec(x + 2*pi), sec(x)),
     (tan(x + pi), tan(x)), (cot(x + pi), cot(x)),
     (sin(pi/2 - x), cos(x)), (cos(pi/2 - x), sin(x)), (tan(pi/2 - x), cot(x)), (cot(pi/2 - x), tan(x)),
     (sec(pi/2 - x), csc(x)), (csc(pi/2 - x), sec(x))]
for L, R in F:
    check("formal", identity(L, R), f"{L} = {R}")
# formal: proofs from x² + y² = r² and the point (x, −y) for −θ, (−x, −y) for θ + π
X, Y = symbols('X Y', real=True, nonzero=True); Rr = sqrt(X**2 + Y**2)
check("formal", simplify((Y/Rr)**2 + (X/Rr)**2 - 1) == 0, "y²/r² + x²/r² = 1")
check("formal", simplify(1 + (Y/X)**2 - (Rr/X)**2) == 0, "1 + tan² = sec² from dividing by x²")
check("formal", simplify(1 + (X/Y)**2 - (Rr/Y)**2) == 0, "1 + cot² = csc² from dividing by y²")
check("formal", simplify((-Y)/(-X) - Y/X) == 0, "(−x, −y) keeps y/x")
# formal: smallest periods 2π (sin, cos, sec, csc) and π (tan, cot): no smaller period among k·π/12
for f, per in [(sin, 2*pi), (cos, 2*pi), (sec, 2*pi), (csc, 2*pi), (tan, pi), (cot, pi)]:
    smaller = [kk for kk in range(1, int(per/(pi/12))) if all(abs(N(f(v + kk*pi/12) - f(v))) < 1e-9 for v in (0.3, 1.1, 2.2))]
    check("formal", smaller == [], f"{f.__name__} has no period smaller than {per}")
# formal: undefined at π/2 for both sides of tan = sin/cos
check("formal", exact('tan', pi/2) is None and cos(pi/2) == 0, "tan π/2 undefined")
# formal: cos = ±√(1 − sin²): the sign matters (QII)
same("formal", -sqrt(1 - sin(2*pi/3)**2), cos(2*pi/3))

# example: each line equivalent to the original, and the result
E0 = (sec(x) - cos(x))/tan(x)
E1 = (1/cos(x) - cos(x))/(sin(x)/cos(x))
E2 = ((1 - cos(x)**2)/cos(x))/(sin(x)/cos(x))
E3 = (sin(x)**2/cos(x))*(cos(x)/sin(x))
E4 = sin(x)
for i, E in enumerate([E1, E2, E3, E4], 1):
    check("example", identity(E0, E), f"line {i}")
check("example", identity(1 - cos(x)**2, sin(x)**2), "1 − cos² = sin²")
# domain: undefined where cos = 0 or sin = 0 (θ = kπ/2)
for v in (0, pi/2, pi, 3*pi/2):
    check("example", E0.subs(x, v).has(zoo, nan) or simplify(E0.subs(x, v)).has(zoo, nan) or tan(v) == 0 or tan(v) == zoo, f"original undefined at {v}")

# practice 1
sn, cs = Rational(4, 5), Rational(-3, 5)
check("practice[0]", sn**2 + cs**2 == 1, "valid pair")
same("practice[0]", sn/cs, Rational(-4, 3)); same("practice[0]", 1/sn, Rational(5, 4))
th0 = pi - asin(sn)  # the QII angle with these values
same("practice[0]", simplify(sin(-th0)), Rational(-4, 5)); same("practice[0]", simplify(cos(-th0)), Rational(-3, 5))
# practice 2: tan = 2 in QIII
th = pi + atan(2)
same("practice[1]", 1 + 2**2, 5)
same("practice[1]", simplify(sec(th)), -sqrt(5))
same("practice[1]", radsimp(simplify(cos(th))), -sqrt(5)/5)
same("practice[1]", radsimp(simplify(sin(th))), -2*sqrt(5)/5)
same("practice[1]", radsimp(2*(-sqrt(5)/5)), -2*sqrt(5)/5)
# practice 3
check("practice[2]", identity((1 - cos(x)**2)*(1 + cot(x)**2), Integer(1)), "= 1")
check("practice[2]", identity(1 + cot(x)**2, 1/sin(x)**2), "csc² = 1/sin²")
# practice 4
same("practice[3]", sin(-17*pi/6), Rational(-1, 2)); same("practice[3]", -sin(5*pi/6), Rational(-1, 2))
same("practice[3]", 17*pi/6 - 2*pi, 5*pi/6)
same("practice[3]", tan(13*pi/4), 1); same("practice[3]", pi/4 + 3*pi, 13*pi/4)
same("practice[3]", cos(-11*pi/3), Rational(1, 2)); same("practice[3]", 11*pi/3 - 4*pi, -pi/3)

# mistakes: each wrong statement is not an identity
check("mistakes", not identity(sin(x)**2, sin(x**2)), "sin² ≠ sin(x²)")
check("mistakes", abs(N(asin(Rational(1, 2))) - N(1/sin(Rational(1, 2)))) > 0.1, "arcsin ≠ 1/sin")
check("mistakes", not identity(cos(x), sqrt(1 - sin(x)**2)), "cos ≠ √(1 − sin²) everywhere")
check("mistakes", not identity(tan(-x), tan(x)), "tan not even")
check("mistakes", identity(tan(-x), -tan(x)), "tan odd")

# lab: the Simplify chains (web/labs/trig-b3.js), each line equal to its expression, and the hole sets
SIMP = [((sec(x) - cos(x))/tan(x), [(1/cos(x) - cos(x))/(sin(x)/cos(x)), ((1 - cos(x)**2)/cos(x))/(sin(x)/cos(x)), (sin(x)**2/cos(x))*(cos(x)/sin(x)), sin(x)]),
        ((1 - cos(x)**2)*(1 + cot(x)**2), [sin(x)**2*csc(x)**2, sin(x)**2*(1/sin(x)**2), Integer(1)]),
        (sin(x) + cos(x)*cot(x), [sin(x) + cos(x)*cos(x)/sin(x), (sin(x)**2 + cos(x)**2)/sin(x), 1/sin(x), csc(x)]),
        (cos(-x)*tan(-x), [cos(x)*(-tan(x)), -cos(x)*sin(x)/cos(x), -sin(x)])]
for j, (e0, chain) in enumerate(SIMP):
    for i, e in enumerate(chain, 1):
        check("lab", identity(e0, e), f"simplify {j + 1} step {i}")
check("lab", all(tan(pi/2*m) in (0, zoo) for m in range(-4, 5)), "problem 1 undefined at kπ/2 (tan 0 or undefined)")
check("lab", all(cot(pi*m) == zoo for m in range(-2, 3)), "problem 2 undefined at kπ")
check("lab", all(tan(pi/2 + pi*m) == zoo for m in range(-2, 2)), "problem 4 undefined at π/2 + kπ")
