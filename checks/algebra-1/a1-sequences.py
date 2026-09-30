# content: 2da5614b7469
# a1-sequences: Arithmetic & Geometric Sequences

check("formal", 4 - 1 != 9 - 4 and Rational(4, 1) != Rational(9, 4), "1,4,9,16 neither")

# example: salary offers
aA = lambda n: 45000 + (n - 1)*1800
aB = lambda n: 45000*Rational(104, 100)**(n - 1)
same("example", aA(10), 61200)
check("example", abs(N(aB(10)) - 64049.03) < 0.005, f"a_10 B = {N(aB(10))}")
SA = sum(aA(n) for n in range(1, 11)); SB = sum(aB(n) for n in range(1, 11))
same("example", SA, 531000)
check("example", abs(N(SB) - 540274.82) < 0.005, f"S_10 B = {N(SB)}")
check("example", abs(N(SB - SA) - 9274.82) < 0.005, "difference 9274.82")
check("example", abs(N(aB(10)) - 64049) < 0.5 and abs(N(SB - SA) - 9275) < 0.5, "rounded answers")
check("example", N(aB(12) - aA(12)) > N(aB(10) - aA(10)) > 0, "gap widens")

# practice[0]
same("practice[0]", 7 + 19*4, 83)
same("practice[0]", [7 + 4*k for k in range(4)], [7, 11, 15, 19])
# practice[1]
same("practice[1]", 3*2**7, 384)
same("practice[1]", [3*2**k for k in range(4)], [3, 6, 12, 24])
# practice[2]
same("practice[2]", 2 + 49*3, 149)
same("practice[2]", sum(2 + 3*k for k in range(50)), 3775)
# practice[3]
same("practice[3]", 1 - 3**8, -6560)
same("practice[3]", sum(5*3**k for k in range(8)), 16400)
