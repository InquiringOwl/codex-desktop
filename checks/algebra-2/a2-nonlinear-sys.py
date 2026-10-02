# content: 6f029ac42896
# a2-nonlinear-sys: Nonlinear Systems of Equations
from algebra import *
R = Rational

def sols(*eqs):
    """Real solutions of a polynomial system in x, y as a set of (x, y)."""
    out = set()
    for s in solve(list(eqs), [x, y], dict=True):
        X, Y = s[x], s[y]
        if X.is_real and Y.is_real:
            out.add((simplify(X), simplify(Y)))
    return out

def all_sols(*eqs):
    xc, yc = symbols('xc yc')
    return solve([e.subs({x: xc, y: yc}) for e in eqs], [xc, yc], dict=True)

# hero / example: x² + y² = 4, y = x² − 2
E1, E2 = x**2 + y**2 - 4, y - (x**2 - 2)
same("example", sols(E1, E2), {(-sqrt(3), 1), (sqrt(3), 1), (0, -2)})
same("example", expand((y + 2) + y**2 - 4), y**2 + y - 2)
same("example", factor(y**2 + y - 2), (y - 1)*(y + 2))
same("example", real_solutions(Eq(y**2 + y - 2, 0), y), {1, -2})
same("example", real_solutions(Eq(x**2, 1 + 2), x), {-sqrt(3), sqrt(3)})
same("example", real_solutions(Eq(x**2, -2 + 2), x), {0})
same("example", sqrt(3)**2 + 1**2, 4)
same("example", 0**2 + (-2)**2, 4)
same("example", len(sols(E1, E2)), 3)

# formal: elimination example (±3, ±2) and the no-solution line
F1, F2 = x**2 + y**2 - 13, x**2 - y**2 - 5
same("formal", expand(F1 + F2), 2*x**2 - 18)
same("formal", sols(F1, F2), {(3, 2), (3, -2), (-3, 2), (-3, -2)})
G1, G2 = x**2 + y**2 - 1, y - (x + 3)
same("formal", expand(G1.subs(y, x + 3)), 2*x**2 + 6*x + 8)
same("formal", 6**2 - 4*2*8, -28)
same("formal", sols(G1, G2), set())
check("formal", len(all_sols(G1, G2)) == 2, "two complex solutions")
# a line meets a conic in at most 2 points: substitution gives degree ≤ 2 (general circle and line)
m_, b_, r_ = symbols('m_ b_ r_', real=True)
check("formal", degree(expand((x**2 + y**2 - r_**2).subs(y, m_*x + b_)), x) == 2, "line into circle: degree 2")
# tangent case: discriminant 0 gives one point (y = 2x and y = x² + 1)
same("formal", sols(y - 2*x, y - x**2 - 1), {(1, 2)})

# practice[0]: y = 2x − 3, y = x² − 6
same("practice[0]", expand((x**2 - 6) - (2*x - 3)), x**2 - 2*x - 3)
same("practice[0]", factor(x**2 - 2*x - 3), (x - 3)*(x + 1))
same("practice[0]", sols(y - (2*x - 3), y - (x**2 - 6)), {(3, 3), (-1, -5)})

# practice[1]: x² + y² = 13, x² − y² = 5
same("practice[1]", 13 - 9, 4)
same("practice[1]", sols(F1, F2), {(3, 2), (3, -2), (-3, 2), (-3, -2)})

# practice[2]: y = x + 4 and x² + y² = 4
H = expand((x**2 + y**2 - 4).subs(y, x + 4))
same("practice[2]", H, 2*x**2 + 8*x + 12)
same("practice[2]", expand(H/2), x**2 + 4*x + 6)
same("practice[2]", 4**2 - 4*1*6, -8)
same("practice[2]", sols(y - (x + 4), x**2 + y**2 - 4), set())
same("practice[2]", complex_solutions(x**2 + 4*x + 6), {-2 - sqrt(2)*I, -2 + sqrt(2)*I})

# practice[3]: area 24, perimeter 22
same("practice[3]", expand(x*(11 - x) - 24), -(x**2 - 11*x + 24))
same("practice[3]", factor(x**2 - 11*x + 24), (x - 3)*(x - 8))
same("practice[3]", sols(x*y - 24, 2*x + 2*y - 22), {(3, 8), (8, 3)})

# lab presets (Solve mode): counts and points
same("lab", sols(x**2 + y**2 - 25, y - (x + 1)), {(3, 4), (-4, -3)})
same("lab", sols(x**2 + y**2 - 9, y - (x**2 - 3)), {(sqrt(5), 2), (-sqrt(5), 2), (0, -3)})
same("lab", sols(x**2 + y**2 - 10, x**2 - y**2 - 8), {(3, 1), (3, -1), (-3, 1), (-3, -1)})
same("lab", sols(y - x**2 - 1, y - 2*x), {(1, 2)})
same("lab", sols(x**2 + y**2 - 1, y - x - 3), set())
same("lab", complex_solutions(x**2 + 3*x + 4), {R(-3, 2) - sqrt(7)*I/2, R(-3, 2) + sqrt(7)*I/2})
same("lab", sols(x**2 + y**2 - 4, y - x**2 - 2), {(0, 2)})
