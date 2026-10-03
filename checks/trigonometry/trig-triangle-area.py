# content: ff8728c14fd1
# trig-triangle-area: Area of a Triangle: SAS & Heron's Formula
from trig import *
import math

D = lambda dd: deg(dd)

def rnd(label, got, page, nd=None):
    """rounded value on the page: the computed value rounds to exactly the page's digits"""
    v = float(N(got)); nd = nd if nd is not None else (len(str(page).split('.')[1]) if '.' in str(page) else 0)
    near(label, v, page, rel=max(0.005, 0.5 * 10**-nd / abs(page) * 1.0001))
    check(label, round(v, nd) == page, f"computed {v}, page says {page}")

def shoelace(P):
    return abs(sum(P[i][0] * P[(i + 1) % 3][1] - P[(i + 1) % 3][0] * P[i][1] for i in range(3))) / 2

a_, b_, c_, C_ = symbols('a_ b_ c_ C_', positive=True)
# formal: K = ½ab sin C equals the coordinate (shoelace) area, acute and obtuse C; three equal forms
for (p, q, g) in [(8, 11, 40), (5, 3, 130), (4, 4, 90)]:
    t = solve_triangle(a=p, b=q, C=g)[0]
    A, B, C0 = (t['b'] * math.cos(math.radians(g)), t['b'] * math.sin(math.radians(g))), (t['a'], 0), (0, 0)
    K = shoelace([A, B, C0])
    check("formal", abs(K - 0.5 * p * q * math.sin(math.radians(g))) < 1e-9, "½ab sin C = coordinate area")
    check("formal", abs(K - 0.5 * t['b'] * t['c'] * math.sin(math.radians(t['A']))) < 1e-9 and abs(K - 0.5 * t['a'] * t['c'] * math.sin(math.radians(t['B']))) < 1e-9, "three forms equal")
    check("formal", abs(K - float(N(heron(t['a'], t['b'], t['c'])))) < 1e-6, "Heron agrees")
same("formal", simplify(sin(pi - C_) - sin(C_)), 0)
check("formal", all(N(sin(D(90))) >= N(sin(D(g))) for g in range(1, 180)), "max at 90°")
# Heron proof sketch: 16K² = 4a²b² − (a²+b²−c²)² = (a+b+c)(−a+b+c)(a−b+c)(a+b−c)
same("formal", expand(4*a_**2*b_**2 - (a_**2 + b_**2 - c_**2)**2 - (a_+b_+c_)*(-a_+b_+c_)*(a_-b_+c_)*(a_+b_-c_)), 0)
s_ = (a_ + b_ + c_) / 2
same("formal", expand(16*s_*(s_-a_)*(s_-b_)*(s_-c_) - (a_+b_+c_)*(-a_+b_+c_)*(a_-b_+c_)*(a_+b_-c_)), 0)
same("formal", expand(16 * Rational(1, 4) * a_**2 * b_**2 * (1 - ((a_**2 + b_**2 - c_**2)/(2*a_*b_))**2)) , expand(4*a_**2*b_**2 - (a_**2 + b_**2 - c_**2)**2))
# AAS one-step: K = c² sin A sin B / (2 sin C)
t = solve_triangle(A=48, B=57, c=12)[0]
check("formal", abs(144*math.sin(math.radians(48))*math.sin(math.radians(57))/(2*math.sin(math.radians(75))) - 0.5*t['a']*12*math.sin(math.radians(57))) < 1e-9, "AAS one-step formula")

# example: 120, 150, 210
same("example", Rational(120 + 150 + 210, 2), 240)
same("example", [240 - 120, 240 - 150, 240 - 210], [120, 90, 30])
same("example", 240*120*90*30, 77760000)
same("example", heron(120, 150, 210), 3600*sqrt(6))
same("example", 3600**2 * 6, 77760000)
rnd("example", 3600*sqrt(6), 8818.2)
same("example", Rational(120**2 + 150**2 - 210**2, 2*120*150), Rational(-1, 5))
same("example", sqrt(1 - Rational(1, 25)), 2*sqrt(6)/5)
same("example", Rational(1, 2)*120*150*2*sqrt(6)/5, 3600*sqrt(6))
t = solve_triangle(a=120, b=150, c=210)[0]
check("example", t['C'] > 90, "obtuse")

# practice[0]
rnd("practice[0]", tri_area(8, 11, 40), 28.3)
# practice[1]
same("practice[1]", heron(5, 6, 7), 6*sqrt(6))
same("practice[1]", sqrt(9*4*3*2), sqrt(216))
rnd("practice[1]", 6*sqrt(6), 14.7)
# practice[2]
t = solve_triangle(A=48, B=57, c=12)[0]
same("practice[2]", t['C'], 75)
rnd("practice[2]", t['a'], 9.23)
rnd("practice[2]", 0.5*t['a']*12*math.sin(math.radians(57)), 46.5)
rnd("practice[2]", tri_area(t['a'], t['c'], 57), 46.5)
# practice[3]
same("practice[3]", [Rational(40+55+60, 2), Rational(60+30+45, 2)], [Rational(155, 2), Rational(135, 2)])
K1, K2 = heron(40, 55, 60), heron(60, 30, 45)
same("practice[3]", K1, sqrt(Rational(155,2)*Rational(75,2)*Rational(45,2)*Rational(35,2)))
same("practice[3]", K2, sqrt(Rational(135,2)*Rational(15,2)*Rational(75,2)*Rational(45,2)))
rnd("practice[3]", K1, 1069.7); rnd("practice[3]", K2, 653.6); rnd("practice[3]", K1 + K2, 1723.3)
