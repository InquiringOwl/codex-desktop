# content: dee7dedfbada
# mech-projectile: Projectile Motion
g = Rational(98, 10)

# example: shot put, 13.0 m/s at 40.0 deg from 2.10 m
v0, th, h0 = 13.0, rad(40), 2.10
vx0, vy0 = v0*cos(th), v0*sin(th)
near("example", vx0, 9.96); near("example", vy0, 8.36)
T = max(solve(Eq(h0 + vy0*t - g/2*t**2, 0), t))
near("example", sqrt(vy0**2 + 2*g*h0), 10.5, rel=0.01)
near("example", T, 1.93)
near("example", vx0*T, 19.2)
near("example", vy0**2/(2*g), 3.56)
near("example", h0 + vy0**2/(2*g), 5.66)
near("example", vy0/g, 0.853)
vyf = vy0 - g*T
near("example", vyf, -10.5, rel=0.01)
near("example", sqrt(vx0**2 + vyf**2), 14.5)
near("example", sqrt(v0**2 + 2*g*h0), 14.5)
check("example", T > 0 and min(solve(Eq(h0 + vy0*t - g/2*t**2, 0), t)) < 0, "other root negative")

# practice[0]: 20.0 m/s at 30.0 deg, level ground
near("practice[0]", 2*20*sin(rad(30))/g, 2.04)
near("practice[0]", (20*sin(rad(30)))**2/(2*g), 5.10)
near("practice[0]", 20**2*sin(rad(60))/g, 35.3)

# practice[1]: off a 1.25 m table at 3.00 m/s
tt = sqrt(2*1.25/g)
near("practice[1]", tt, 0.505)
near("practice[1]", 3*tt, 1.52)
near("practice[1]", g*tt, 4.95)
near("practice[1]", sqrt(3**2 + (g*tt)**2), 5.79)
near("practice[1]", deg(atan(g*tt/3)), 58.8)

# practice[2]: 15.0 m/s, 25 vs 65 deg
R25 = 15**2*sin(rad(50))/g; R65 = 15**2*sin(rad(130))/g
near("practice[2]", R25, 17.6)
same("practice[2]", simplify(R25 - R65), 0)
near("practice[2]", 2*15*sin(rad(65))/g, 2.77)
near("practice[2]", 2*15*sin(rad(25))/g, 1.29)

# practice[3]: hose 25.0 m/s at 50.0 deg, wall 40.0 m away
vx, vy = 25*cos(rad(50)), 25*sin(rad(50))
near("practice[3]", vx, 16.1)
tw = 40/vx
near("practice[3]", tw, 2.49)
near("practice[3]", vy*tw - g/2*tw**2, 17.3)
near("practice[3]", vy - g*tw, -5.24)
check("practice[3]", N(vy - g*tw) < 0, "falling when it hits")
