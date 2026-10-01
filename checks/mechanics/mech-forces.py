# content: ade59115c24f
# mech-forces: Forces & Free-Body Diagrams
g = Rational(98, 10)

# example: tugs 4.00e4 N at 20 N of E, 3.00e4 N at 35 S of E
T1 = (4e4*cos(rad(20)), 4e4*sin(rad(20)))
T2 = (3e4*cos(rad(35)), -3e4*sin(rad(35)))
near("example", T1[0], 3.759e4); near("example", T1[1], 1.368e4)
near("example", T2[0], 2.457e4); near("example", T2[1], -1.721e4)
Sx, Sy = T1[0] + T2[0], T1[1] + T2[1]
near("example", Sx, 6.216e4); near("example", Sy, -0.353e4)
near("example", sqrt(Sx**2 + Sy**2), 6.23e4)
near("example", deg(atan2(Sy, Sx)), -3.25)
check("example", N(sqrt(Sx**2 + Sy**2)) < 7e4, "less than sum of magnitudes")

# practice[0]
near("practice[0]", Rational(15, 10)*g, 14.7)

# practice[1]
F = Matrix([3, 4]) + Matrix([-5, 2]) + Matrix([1, -9])
same("practice[1]", tuple(F), (-1, -3))
near("practice[1]", F.norm(), 3.16)
near("practice[1]", deg(atan(3)), 71.6)
near("practice[1]", 180 + deg(atan(3)), 252)

# practice[2]: 20.0 kg, 80.0 N at 25.0 deg
near("practice[2]", 20*g, 196)
near("practice[2]", 80*sin(rad(25)), 33.8)
near("practice[2]", 20*g - 80*sin(rad(25)), 162)
near("practice[2]", 80*cos(rad(25)), 72.5)

# practice[3]
near("practice[3]", Rational(2, 10)*g, 1.96)
