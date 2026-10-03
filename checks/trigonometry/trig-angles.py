# content: 4b51ce54bf22
# trig-angles: Angles in Standard Position
from trig import *
R = Rational
def red(d):
    """coterminal angle in [0, 360) and the k with d + 360k = it"""
    r = R(d) % 360
    return r, (r - R(d)) / 360
def quad(d):
    r = R(d) % 360
    if r % 90 == 0: return 0
    return int(r // 90) + 1
# hero
same("hero", [R(420) - 360, R(-300) + 360], [60, 60])
# formal: DMS example, complement in DMS
same("formal", from_dms(35, 25, 30), 35.425)
same("formal", R(35) + R(25, 60) + R(30, 3600), R(35425, 1000))
same("formal", (90*60 - (52*60 + 17)), 37*60 + 43)
same("formal", [quad(v) for v in (0, 90, 180, 270)], [0, 0, 0, 0])
# example
th = R(-103075, 100)
near("example", float(th/360), -2.86)
r, kk = red(th)
same("example", r, R(4925, 100)); same("example", kk, 3)
same("example", th + 1080, R(4925, 100))
check("example", quad(th) == 1, "QI")
same("example", dms(49.25), (49, 15, 0))
same("example", [r + 360, r - 360], [R(40925, 100), R(-31075, 100)])
check("example", red(R(40925, 100))[0] == r and red(R(-31075, 100))[0] == r, "both coterminal")
# practice[0]
same("practice[0]", [quad(v) for v in (200, -45, 270, 765)], [3, 4, 0, 1])
same("practice[0]", [red(-45)[0], red(765)[0], red(765)[1]], [315, 45, -2])
check("practice[0]", quadrant(deg(270)) == 0 and to_deg(coterminal_in(deg(270))) == 270, "270 on -y axis")
# practice[1]
same("practice[1]", R(72) + R(18, 60) + R(45, 3600), R(723125, 10000))
same("practice[1]", [R(18, 60), R(45, 3600)], [R(3, 10), R(125, 10000)])
same("practice[1]", dms(118.62), (118, 37, 12.0))
same("practice[1]", R(62, 100)*60, R(372, 10)); same("practice[1]", R(2, 10)*60, 12)
# practice[2]
def tosec(d, m, s): return d*3600 + m*60 + s
def fromsec(t): return (t // 3600, (t % 3600) // 60, t % 60)
a = tosec(34, 51, 20)
same("practice[2]", fromsec(90*3600 - a), (55, 8, 40))
same("practice[2]", fromsec(180*3600 - a), (145, 8, 40))
same("practice[2]", tosec(89, 59, 60), 90*3600)
# practice[3]
cot = [-135 + 360*k for k in range(-5, 6) if -720 < -135 + 360*k < 720]
same("practice[3]", cot, [-495, -135, 225, 585])
same("practice[3]", [-135 - 720, -135 + 1080], [-855, 945])
same("practice[3]", red(-135)[0], 225); check("practice[3]", quad(225) == 3, "QIII")
# mistakes
same("mistakes", red(-60)[0], 300); same("mistakes", R(1, 2)*60, 30); same("mistakes", 1000 - 720, 280)
