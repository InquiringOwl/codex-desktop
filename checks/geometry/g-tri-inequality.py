# content: 32ed4a8319cf
# g-tri-inequality: Triangle Inequalities
R = Rational
tri = lambda p, q, r: p + q > r and q + r > p and p + r > q
# example: bars 7 and 4
cs = [c_ for c_ in range(1, 20) if tri(7, 4, c_)]
same("example", cs, [4, 5, 6, 7, 8, 9, 10])
same("example", (abs(7 - 4), 7 + 4), (3, 11))
check("example", not tri(7, 4, 11), "11 ft is degenerate")
# largest angle opposite the 10 ft side (law of cosines)
cosC = R(7**2 + 4**2 - 10**2, 2*7*4)
cosA = R(4**2 + 10**2 - 7**2, 2*4*10)
cosB = R(7**2 + 10**2 - 4**2, 2*7*10)
check("example", cosC < cosA and cosC < cosB, "angle opposite 10 is the largest")
# practice[0]
check("practice[0]", not tri(4, 6, 11) and 4 + 6 == 10, "4, 6, 11 fails")
check("practice[0]", not tri(5, 7, 12) and 5 + 7 == 12, "5, 7, 12 degenerate")
# practice[1]
same("practice[1]", (15 - 9, 15 + 9), (6, 24))
check("practice[1]", tri(9, 15, 6.01) and not tri(9, 15, 6) and not tri(9, 15, 24) and tri(9, 15, 23.99), "open interval (6, 24)")
# practice[2]: AB = 8 (opp C), BC = 11 (opp A), AC = 6 (opp B)
ang = lambda opp, s1, s2: acos(R(s1**2 + s2**2 - opp**2, 2*s1*s2))
aA, aB, aC = ang(11, 8, 6), ang(6, 8, 11), ang(8, 11, 6)
check("practice[2]", N(aB) < N(aC) < N(aA), "B < C < A")
same("practice[2]", N(aA + aB + aC, 30), N(pi, 30))
# practice[3]: hinge converse
sol = reduce_inequalities([3*x + 10 > 55, 3*x + 10 < 180], x)
check("practice[3]", sol.as_set() == Interval.open(15, R(170, 3)), str(sol))
near("practice[3]", R(170, 3), 56.7, 0.002)
# hinge: third side increases with the included angle
side = lambda t: sqrt(7**2 + 9**2 - 2*7*9*cos(t*pi/180))
check("practice[3]", N(side(56)) > N(side(55)) and N(side(100)) > N(side(56)), "longer third side for larger included angle")
