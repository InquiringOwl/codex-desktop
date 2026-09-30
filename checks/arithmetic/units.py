# content: c70ed3036ca0
# units: Units & Dimensional Analysis
R = Rational
same("formal", R(3048, 10000)**2, R(9290304, 100000000))

# example
kg = 22 / R(22, 10)
same("example", kg, 10)
mg = kg * 15
same("example", mg, 150)
ml = mg * R(5, 160)
same("example", mg*5, 750)
same("example", ml, R(750, 160))
same("example", ml, R(46875, 10000))
check("example", abs(N(ml) - 4.7) < 0.05, "≈ 4.7 mL")
same("example", 22 / R(22, 10) * 15 * R(5, 160), R(46875, 10000))
# practice
same("practice[0]", R(35, 10)*12, 42)
same("practice[1]", R(25, 10)*1000, 2500)
same("practice[2]", 45*1000, 45000)
same("practice[2]", R(45*1000, 3600), R(125, 10))
same("practice[3]", R(3048, 10000)**2, R(9290304, 100000000))
check("practice[3]", abs(N(150*R(3048, 10000)**2) - 13.9) < 0.05, "≈ 13.9 m²")
