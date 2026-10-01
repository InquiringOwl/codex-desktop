# content: 0462e7a30514
def samev(label, g, e): same(label, tuple(g), tuple(e))
# mech-components: Vector Components & Unit Vectors
d = pi/180
# example
Ax, Ay = 250*cos(35*d), 250*sin(35*d)
Bx, By = 180*cos(120*d), 180*sin(120*d)
near("example", Ax, 204.8); near("example", Ay, 143.4); near("example", Bx, -90.0); near("example", By, 155.9)
Rx, Ry = Ax + Bx, Ay + By
near("example", Rx, 114.8); near("example", Ry, 299.3)
near("example", sqrt(Rx**2 + Ry**2), 321)
near("example", atan2(Ry, Rx)/d, 69.0)
near("example", 90 - atan2(Ry, Rx)/d, 21.0)
near("example", Rx, 115); near("example", Ry, 299)
same("example", Bx, -180*sin(30*d))

# practice[0]
near("practice[0]", 20*cos(30*d), 17.3); near("practice[0]", 20*sin(30*d), 10.0)

# practice[1]
same("practice[1]", sqrt(9 + 16), 5)
near("practice[1]", atan(Rational(4, -3))/d, -53.1)
near("practice[1]", atan2(4, -3)/d, 126.9)

# practice[2]
F = Matrix([6, -8]); same("practice[2]", F.norm(), 10)
samev("practice[2]", F/F.norm(), Matrix([Rational(3, 5), Rational(-4, 5)]))

# practice[3]
D = Matrix([2, -3, 6]); same("practice[3]", D.norm(), 7)
u = D/7
near("practice[3]", u[0], 0.286); near("practice[3]", u[1], -0.429); near("practice[3]", u[2], 0.857)
same("practice[3]", u.norm(), 1)
