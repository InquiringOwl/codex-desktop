# content: f3fd596be5eb
# g-triangle-angles: Triangle Angle Sum & Exterior Angles
R = Rational
# formal: angle sum from coordinates of a sample triangle, and the parallel-line copies at C
Ap, Bp, Cp = Matrix([0, 0]), Matrix([7, 0]), Matrix([2, 5])
ang = lambda u, v: acos(u.dot(v) / (u.norm() * v.norm()))
aA, aB, aC = ang(Bp - Ap, Cp - Ap), ang(Ap - Bp, Cp - Bp), ang(Ap - Cp, Bp - Cp)
check("formal", abs(N(aA + aB + aC - pi, 30)) < 1e-25, "sum is pi")
check("formal", abs(N(ang(Ap - Bp, Ap - Cp) - aA, 30)) < 1e-25, "alternate interior copy of A at C")
# example
A_, B_ = R("47.5"), R("68.2")
C_ = 180 - A_ - B_
same("example", C_, R("64.3"))
same("example", 180 - C_, R("115.7"))
same("example", A_ + B_, R("115.7"))
check("example", max(A_, B_, C_) < 90, "acute")
same("example", A_ + B_ + C_, 180)
# practice[0]
same("practice[0]", 180 - 38 - 71, 71)
check("practice[0]", max(38, 71, 71) < 90, "acute")
# practice[1]
solves("practice[1]", Eq(x + (2*x + 10) + (3*x - 22), 180), x, {32})
same("practice[1]", [32, 2*32 + 10, 3*32 - 22], [32, 74, 74])
# practice[2]
solves("practice[2]", Eq(5*x - 10, (2*x + 15) + (x + 25)), x, {25})
same("practice[2]", [5*25 - 10, 2*25 + 15, 25 + 25], [115, 65, 50])
same("practice[2]", 180 - 115, 65)
same("practice[2]", 65 + 50 + 65, 180)
# practice[3]
same("practice[3]", 180 - 95 - 88, -3)
solves("practice[3]", Eq(x + 3*x, 90), x, {R(45, 2)})
same("practice[3]", [R(45, 2), 3*R(45, 2)], [R("22.5"), R("67.5")])
same("example", A_ + B_, R("115.7"))
same("example", 180 - R("115.7"), R("64.3"))
