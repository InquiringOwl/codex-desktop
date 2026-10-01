# content: 7fa69b73b1aa
# mech-free-fall: Free Fall

g = 9.80
# example: v0 = 15.0 up from 20.0 m
y0, v0 = 20.0, 15.0
near("example", v0/g, 1.53)
near("example", v0**2/(2*g), 11.5)
near("example", y0 + v0**2/(2*g), 31.5)
near("example", v0**2 + 4*4.90*y0, 617)
near("example", 4*4.90*y0, 392)
roots = solve(Eq(y0 + v0*t - Rational(49, 10)*t**2, 0), t)
near("example", max(roots), 4.07)
near("example", min(roots), -1.00)
near("example", sqrt(617), 24.8)
tl = float(max(roots))
near("example", v0 - g*tl, -24.8)
near("example", v0 - g*4.065, -24.8)
near("example", sqrt(v0**2 + 2*g*y0), 24.8)

# practice[0]: drop 45.0 m
near("practice[0]", sqrt(2*45.0/g), 3.03)
near("practice[0]", g*sqrt(2*45.0/g), 29.7)
near("practice[0]", sqrt(2*g*45.0), 29.7)

# practice[1]: 12.0 m/s up
near("practice[1]", 2*12.0/g, 2.45)
check("practice[1]", True, "conceptual: v = 0 and a = g downward at the top; returns at 12.0 m/s downward by symmetry")

# practice[2]: ruler 18.0 cm
near("practice[2]", 2*0.180/g, 0.0367)
near("practice[2]", sqrt(2*0.180/g), 0.192)

# practice[3]: 10.0 m/s from ground
near("practice[3]", 10.0**2/(2*g), 5.10)
near("practice[3]", 100 - 4*4.90*6.00, -17.6)
check("practice[3]", 100 - 4*4.90*6.00 < 0, "never reaches 6.00 m")
near("practice[3]", 100 - 4*4.90*4.00, 21.6)
r = solve(Eq(Rational(49, 10)*t**2 - 10*t + 4, 0), t)
near("practice[3]", min(r), 0.546)
near("practice[3]", max(r), 1.49)
