# content: 479ac8e69605
# trig-ambiguous: The Ambiguous Case (SSA)
from trig import *
import math

def r1(v): return round(float(v) + 1e-12, 1)
def tris(a, b, A): return sorted(solve_triangle(a=a, b=b, A=A), key=lambda t: t['B'])
def classify(a, b, A):
    """the page's rule: obtuse/right A → 1 if a > b else 0; acute A → compare a with h = b sin A and b"""
    h = b * math.sin(math.radians(A))
    if A >= 90: return 1 if a > b else 0
    if abs(a - h) < 1e-9: return 1
    if a < h: return 0
    return 1 if a >= b else 2

# formal: the classification agrees with the independent solver on a grid of cases (acute and obtuse A)
bad = [(a, b, A) for A in range(10, 171, 10) for b in (5, 8, 10) for a in [x_ / 2 for x_ in range(1, 31)] if classify(a, b, A) != ssa_count(a, b, A)]
check("formal", not bad, f"classification fails at {bad[:5]}")
# formal: a = b with A acute gives one triangle (isosceles), and a = h gives B = 90°
same("formal", ssa_count(7, 7, 50), 1)
same("formal", [r1(t['B']) for t in tris(4, 8, 30)], [90.0])
# formal: when a ≥ b, A + B2 ≥ 180°
for a, b, A in ((12, 9, 35), (7, 7, 50), (10, 6, 70)):
    B1 = math.degrees(math.asin(b * math.sin(math.radians(A)) / a))
    check("formal", A + (180 - B1) >= 180 - 1e-9, f"B2 fails for a={a}, b={b}, A={A}")

# example: A = 40°, a = 7, b = 10
h = 10 * sin(deg(40))
same("example", round(float(h), 2), 6.43)
check("example", float(h) < 7 < 10, "h < a < b")
same("example", round(float(10 * sin(deg(40)) / 7), 4), 0.9183)
T = tris(7, 10, 40)
same("example", ssa_count(7, 10, 40), 2)
same("example", [r1(t['B']) for t in T], [66.7, 113.3])
same("example", [r1(t['C']) for t in T], [73.3, 26.7])
same("example", [r1(t['c']) for t in T], [10.4, 4.9])
check("example", 40 + T[1]['B'] < 180, "B2 kept")

# mistakes: A = 35°, a = 12, b = 9 → one triangle, B ≈ 25.5°, 180 − B ≈ 154.5°
T = tris(12, 9, 35)
same("mistakes", [len(T), r1(T[0]['B']), r1(180 - T[0]['B'])], [1, 25.5, 154.5])
check("mistakes", 35 + 154.5 > 180, "no room for C")
same("mistakes", [round(float(8 * sin(deg(50))), 2), ssa_count(5, 8, 50)], [6.13, 0])

# practice[0]: A = 30°, a = 4, b = 8 → one right triangle, c = 4√3 ≈ 6.9
same("practice[0]", simplify(8 * sin(deg(30))), 4)
T = tris(4, 8, 30)
same("practice[0]", [len(T), r1(T[0]['B']), r1(T[0]['C']), r1(T[0]['c'])], [1, 90.0, 60.0, 6.9])
same("practice[0]", simplify(8 * cos(deg(30)) - 4 * sqrt(3)), 0)
check("practice[0]", abs(T[0]['c'] - float(4 * sqrt(3))) < 1e-6, "c = 4√3 (asin near 1 limits float accuracy)")
# practice[1]: A = 50°, a = 5, b = 8 → none
same("practice[1]", [ssa_count(5, 8, 50), round(float(8 * sin(deg(50)) / 5), 3)], [0, 1.226])
# practice[2]: A = 110°, a = 15, b = 10 → one
T = tris(15, 10, 110)
same("practice[2]", round(float(10 * sin(deg(110)) / 15), 4), 0.6265)
same("practice[2]", [len(T), r1(T[0]['B']), r1(T[0]['C']), r1(T[0]['c'])], [1, 38.8, 31.2, 8.3])
# practice[3]: A = 30°, a = 6, b = 10 → two
same("practice[3]", [simplify(10 * sin(deg(30))), Rational(10, 6) * Rational(1, 2)], [5, Rational(5, 6)])
T = tris(6, 10, 30)
same("practice[3]", [[r1(t['B']), r1(t['C']), r1(t['c'])] for t in T], [[56.4, 93.6, 12.0], [123.6, 26.4, 5.3]])
