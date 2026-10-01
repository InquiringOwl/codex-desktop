# content: a1d3e423617c
# g-angles: Angles & Angle Measure
R = Rational
def classify(m):
    return 'acute' if 0 < m < 90 else 'right' if m == 90 else 'obtuse' if 90 < m < 180 else 'straight' if m == 180 else 'none'
# example (Protractor Postulate readings)
rA, rB, rC = 25, 70, 140
same("example", abs(rC - rA), 115); check("example", classify(115) == 'obtuse', "obtuse")
same("example", [abs(rB - rA), abs(rC - rB)], [45, 70])
check("example", rA < rB < rC, "B interior")
same("example", 45 + 70, 115)
bis = R(rA + rC, 2)
same("example", bis, R(165, 2))
same("example", [bis - rA, rC - bis], [R(115, 2), R(115, 2)])
same("example", 2*R(115, 2), 115)
same("example", (R(115, 2) - 57)*60, 30)  # 57.5 deg = 57 deg 30 min
# practice[0]
check("practice[0]", [classify(v) for v in (90, 134, 180, R(15, 2))] == ['right', 'obtuse', 'straight', 'acute'], "classes")
same("practice[0]", 360 - 215, 145); check("practice[0]", classify(145) == 'obtuse', "145 obtuse")
# practice[1]
solves("practice[1]", Eq((2*x + 5) + (4*x - 11), 102), x, {18})
same("practice[1]", [2*18 + 5, 4*18 - 11], [41, 61]); same("practice[1]", 41 + 61, 102)
# practice[2]
solves("practice[2]", Eq(5*x - 8, 3*x + 14), x, {11})
same("practice[2]", [5*11 - 8, 3*11 + 14], [47, 47])
same("practice[2]", 2*47, 94); check("practice[2]", classify(94) == 'obtuse', "obtuse")
# practice[3]: rays at protractor readings; B interior vs A interior
OA, OB = 0, 30
OC1 = OB + 50; OC2 = OB - 50  # case 1: C beyond B (B interior); case 2: C back past A (A interior)
same("practice[3]", abs(OC1 - OA), 80)
same("practice[3]", abs(OC2 - OA), 20)
check("practice[3]", OC2 < OA < OB, "case 2: A interior to angle BOC")
