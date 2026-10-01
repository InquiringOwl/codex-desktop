# content: cb5ef76afc25
# mech-relative: Relative Motion

# example: airspeed 250, wind 60.0 east, track north
phi = asin(Rational(60, 250))
same("example", sin(phi), Rational(24, 100))
near("example", deg(phi), 13.9)
vg = sqrt(250**2 - 60**2)
same("example", 250*cos(phi), vg)
near("example", vg, 243)
near("example", 500/vg, 2.06)
check("example", vg < 250, "crosswind lowers ground speed")

# practice[0]
same("practice[0]", 1 + Rational(3, 2), Rational(5, 2))
same("practice[0]", -1 + Rational(3, 2), Rational(1, 2))

# practice[1]: 120 m, current 1.20, boat 3.00
same("practice[1]", Rational(120, 3), 40)
same("practice[1]", Rational(12, 10)*40, 48)
near("practice[1]", sqrt(3**2 + Rational(12, 10)**2), 3.23)
near("practice[1]", deg(atan(Rational(12, 30))), 21.8)

# practice[2]: rain 8.00 down, car 20.0
near("practice[2]", sqrt(8**2 + 20**2), 21.5)
near("practice[2]", deg(atan(Rational(20, 8))), 68.2)

# practice[3]: 200 north + 50.0 toward 30 deg east of north
vx, vy = 50*sin(rad(30)), 200 + 50*cos(rad(30))
v = sqrt(vx**2 + vy**2)
same("practice[3]", simplify(v**2 - (200**2 + 50**2 - 2*200*50*cos(rad(150)))), 0)
near("practice[3]", v, 245)
near("practice[3]", v, 244.6)
near("practice[3]", deg(asin(50*sin(rad(150))/v)), 5.87)
near("practice[3]", deg(atan2(vx, vy)), 5.87)
