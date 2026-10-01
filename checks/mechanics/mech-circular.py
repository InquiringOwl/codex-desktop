# content: d94958e81b8a
# mech-circular: Uniform & Nonuniform Circular Motion
g = Rational(98, 10)

# formal: a = -w^2 r for r = (r cos wt, r sin wt)
w, r = symbols('omega r', positive=True)
same("formal", diff(r*cos(w*t), t, 2), -w**2*r*cos(w*t))
same("formal", simplify(sqrt(diff(r*cos(w*t), t)**2 + diff(r*sin(w*t), t)**2)), r*w)

# example: 12,000 rpm, r = 0.100 m
om = 12000*2*pi/60
near("example", om, 1.26e3); near("example", om, 1256.6)
near("example", 0.100*om, 126)
same("example", 2*pi/om, Rational(1, 200))
near("example", 0.100*om**2, 1.58e5)
near("example", (0.100*om)**2/0.100, 1.58e5)
near("example", 0.100*om**2/g, 1.61e4)

# practice[0]
same("practice[0]", Rational(15)**2/50, Rational(9, 2))

# practice[1]: ISS
R = 6.37e6 + 4.00e5; T = 92.4*60
same("practice[1]", T, 5544)
near("practice[1]", 2*pi*R/T, 7.67e3)
near("practice[1]", (2*pi*R/T)**2/R, 8.70)
near("practice[1]", 6.67e-11*5.97e24/R**2, 8.70)   # equals local g

# practice[2]: r = 200, v = 20, aT = 1.5
same("practice[2]", Rational(400, 200), 2)
same("practice[2]", sqrt(2**2 + Rational(3, 2)**2), Rational(5, 2))
near("practice[2]", deg(atan(Rational(3, 4))), 36.9)

# practice[3]: T = 4.00 s, r = 1 -> 2
near("practice[3]", 2*pi*1/4, 1.57); near("practice[3]", 2*pi*2/4, 3.14)
near("practice[3]", 4*pi**2*1/16, 2.47); near("practice[3]", 4*pi**2*2/16, 4.93)
same("practice[3]", (4*pi**2*2/16)/(4*pi**2*1/16), 2)
