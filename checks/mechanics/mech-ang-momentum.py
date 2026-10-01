# content: 36ed2b98d456
# mech-ang-momentum: Angular Momentum & Its Conservation
G = Rational(98, 10)

# example: skater 3.60 -> 1.20 kg m^2, 1.50 rev/s
wi = Rational(3, 2)*2*pi
near("example", wi, 9.42)
near("example", Rational(36, 10)*wi, 33.9)
wf = Rational(36, 10)/Rational(12, 10)*wi
near("example", wf/(2*pi), 4.50)
near("example", wf, 28.3)
Ki = Rational(1, 2)*Rational(36, 10)*wi**2
Kf = Rational(1, 2)*Rational(12, 10)*wf**2
near("example", Ki, 160)
near("example", Kf, 480)
near("example", Kf - Ki, 320)
near("example", Rational(12, 10)*wf, 33.9)
same("example", simplify(Kf/Ki), 3)

# practice[0]: m = 2.00 kg, v = 3.00 m/s along y = 4.00
X = symbols('X', real=True)
l = Matrix([X, 4, 0]).cross(Matrix([6, 0, 0]))
check("practice[0]", l == Matrix([0, 0, -24]), "l = -24 k for every x")
near("practice[0]", 4*2*3, 24.0)

# practice[1]: disk 200 kg R 2.00, 1.20 rad/s, child 60.0 kg at rim
Ii = Rational(1, 2)*200*4; If = Ii + 60*4
same("practice[1]", Ii, 400); same("practice[1]", If, 640)
near("practice[1]", Ii*Rational(12, 10)/If, 0.750)
near("practice[1]", Rational(1, 2)*Ii*Rational(144, 100), 288)
near("practice[1]", Rational(1, 2)*If*Rational(3, 4)**2, 180)
near("practice[1]", Rational(1, 2)*Ii*Rational(144, 100) - Rational(1, 2)*If*Rational(3, 4)**2, 108)

# practice[2]: 7.00e5 km -> 10.0 km, 30.0 days
Ti = 30*86400
near("practice[2]", Ti, 2.592e6)
Tf = Ti*(Rational(10)/700000)**2
near("practice[2]", Tf, 5.29e-4)
near("practice[2]", 1/Tf, 1900, rel=0.02)

# practice[3]: projectile from origin, m 0.200, v0 5.00, t 1.50
m, v0 = Rational(1, 5), 5
r = Matrix([v0*t, -G*t**2/2, 0]); p = m*Matrix([v0, -G*t, 0]); Fv = Matrix([0, -m*G, 0])
lz = r.cross(p)[2]
same("practice[3]", simplify(lz + m*G*v0*t**2/2), 0)
near("practice[3]", lz.subs(t, Rational(3, 2)), -11.0)
tz = r.cross(Fv)[2]
near("practice[3]", tz.subs(t, Rational(3, 2)), -14.7)
same("practice[3]", simplify(diff(lz, t) - tz), 0)
