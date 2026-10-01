# content: 6b70f173b519
# mech-kepler: Kepler's Laws
Gc = 6.67e-11; ME = 5.97e24; GM = Gc*ME

# formal: ellipse r(theta) gives r_p and r_a
A, e_ = symbols('A e_', positive=True)
rth = A*(1 - e_**2)/(1 + e_*cos(t))
same("formal", simplify(rth.subs(t, 0) - A*(1 - e_)), 0)
same("formal", simplify(rth.subs(t, pi) - A*(1 + e_)), 0)

# example: Halley, T = 75.3 y, r_p = 0.586 AU
a = Rational(753, 10)**Rational(2, 3)
near("example", a, 17.8)
ra = 2*a - Rational(586, 1000)
near("example", ra, 35.1)
near("example", 1 - Rational(586, 1000)/a, 0.967)
near("example", ra/Rational(586, 1000), 59.9)
check("example", ra > 30, "aphelion beyond Neptune (30 AU)")

# practice[0]: Earth
near("practice[0]", 1.521/1.471, 1.03)
check("practice[0]", 1.521/1.471 - 1 < 0.04, "about 3% faster")

# practice[1]: Mars
near("practice[1]", Rational(152, 100)**Rational(3, 2), 1.87)

# practice[2]: Io
Tio = 1.77*86400
near("practice[2]", Tio, 1.529e5)
MJ = 4*pi**2*(4.22e8)**3/(Gc*Tio**2)
near("practice[2]", MJ, 1.90e27)
near("practice[2]", MJ/ME, 318, rel=0.01)

# practice[3]: perigee 6.67e6, apogee 4.22e7
rp, ra2 = 6.67e6, 4.22e7
a2 = (rp + ra2)/2
near("practice[3]", a2, 2.44e7)
near("practice[3]", (ra2 - rp)/(ra2 + rp), 0.727)
T2 = 2*pi*sqrt(a2**3/GM)
near("practice[3]", T2, 3.80e4)
near("practice[3]", T2/3600, 10.6)
vp = sqrt(GM*(2/rp - 1/a2))
near("practice[3]", vp, 1.02e4)
near("practice[3]", vp*rp/ra2, 1.60e3)
