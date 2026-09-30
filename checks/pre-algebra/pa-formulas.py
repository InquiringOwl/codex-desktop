# content: 3b67beaf993c
# pa-formulas: Formulas & Geometry Applications

# example: 64 ft fence, length 20
w_ = solve(Eq(2*20 + 2*w, 64), w)
same("example", w_, [12])
same("example", 2*20 + 2*12, 64)
same("example", 20*w_[0], 240)

# practice[0]: circle radius 5
A0 = pi*5**2
same("practice[0]", A0, 25*pi)
check("practice[0]", abs(float(A0) - 78.54) < 0.005, f"25π = {float(A0)}")

# practice[1]: triangle area 36, base 9
solves("practice[1]", Eq(Rational(1, 2)*9*h, 36), h, {8})
same("practice[1]", Rational(1, 2)*9, 4.5)

# practice[2]: tank 30 x 12 x 16, 231 in^3 per gal
V2 = 30*12*16
same("practice[2]", V2, 5760)
check("practice[2]", abs(V2/231 - 24.9) < 0.05, f"{V2/231}")

# practice[3]: cylinder 500 cm^3, r = 4
h3 = solve(Eq(pi*4**2*h, 500), h)
same("practice[3]", h3, [500/(16*pi)])
check("practice[3]", abs(float(h3[0]) - 9.9) < 0.05, f"{float(h3[0])}")
check("practice[3]", abs(float(h3[0]) - 9.947) < 0.0005, f"{float(h3[0])}")
