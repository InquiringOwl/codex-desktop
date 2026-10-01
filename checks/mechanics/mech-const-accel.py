# content: 21d8d2d6df47
# mech-const-accel: Motion with Constant Acceleration

g = 9.80
# example: 26.0 m/s, reaction 0.500 s, a = -7.00
v0, a, tr = 26.0, -7.00, 0.500
x1 = v0*tr
near("example", x1, 13.0)
dx = (0 - v0**2) / (2*a)
near("example", dx, 48.3)
tb = (0 - v0) / a
near("example", tb, 3.71)
near("example", (v0 + 0)/2 * tb, 48.3)
near("example", (v0 + 0)/2 * 3.714, 48.3)
near("example", x1 + dx, 61.3)
check("example", 13 < (x1 + dx)/4.5 < 15, "about 14 car lengths of 4.5 m")

# practice[0]
near("practice[0]", (25.0 - 10.0)/6.00, 2.50)
near("practice[0]", (25.0 + 10.0)/2 * 6.00, 105)

# practice[1]: rest to 70.0 at 2.40
near("practice[1]", 70.0**2 / (2*2.40), 1.02e3)
near("practice[1]", 70.0/2.40, 29.2)

# practice[2]: 60 = 4t + 0.25 t^2
sol = solve(Eq(60, 4*t + Rational(1, 4)*t**2), t)
same("practice[2]", expand(4*(Rational(1, 4)*t**2 + 4*t - 60)), t**2 + 16*t - 240)
same("practice[2]", 16**2 + 4*240, 1216)
near("practice[2]", max(sol), 9.44)
near("practice[2]", min(sol), -25.4)

# practice[3]: 1.5 t^2 = 30 t
solves("practice[3]", Eq(Rational(3, 2)*t**2, 30*t), t, {0, 20})
same("practice[3]", 30*20, 600)
same("practice[3]", 3*20, 60)
same("practice[3]", Rational(600, 20), 30)
