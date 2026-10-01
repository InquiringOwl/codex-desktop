# content: 2a5c4646d11d
# mech-rolling: Rolling Motion
G = Rational(98, 10)

# formal: rolling-incline results from the two Newton equations
M_, R_, th, beta, acm, f = symbols('M_ R_ th beta acm f', positive=True)
sol = solve([M_*G*sin(th) - f - M_*acm, f*R_ - beta*M_*R_**2*(acm/R_)], [acm, f], dict=True)[0]
same("formal", simplify(sol[acm] - G*sin(th)/(1 + beta)), 0)
same("formal", simplify(sol[f] - beta/(1 + beta)*M_*G*sin(th)), 0)

# example: 7.00 kg solid sphere, R = 0.109 m, h = 0.800 m
M = 7; Rb = Rational(109, 1000); h = Rational(8, 10); b = Rational(2, 5)
v = sqrt(2*G*h/(1 + b))
same("example", simplify(v - sqrt(10*G*h/7)), 0)
near("example", v, 3.35)
near("example", v / Rb, 30.7)
near("example", v / Rb / (2*pi), 4.9, rel=0.01)
near("example", M*G*h, 54.9)
near("example", Rational(1, 2)*M*v**2, 39.2)
near("example", Rational(1, 2)*b*M*Rb**2*(v/Rb)**2, 15.7)
same("example", simplify(Rational(1, 2)*M*v**2 - Rational(5, 7)*M*G*h), 0)
near("example", sqrt(2*G*h), 3.96)
check("example", v < sqrt(2*G*h), "rolling slower than frictionless sliding")

# practice[0]: order sphere, disk, hoop
acc = {k: G/(1 + bb) for k, bb in {'sphere': Rational(2, 5), 'disk': Rational(1, 2), 'hoop': 1}.items()}
check("practice[0]", acc['sphere'] > acc['disk'] > acc['hoop'], "sphere > disk > hoop")

# practice[1]: R = 0.300 m, v = 15.0 m/s
near("practice[1]", Rational(15) / Rational(3, 10), 50.0)
near("practice[1]", 2*15, 30.0)
same("practice[1]", 15 - Rational(3, 10)*50, 0)

# practice[2]: solid cylinder, 30 degrees
near("practice[2]", G*sin(pi/6)/(1 + Rational(1, 2)), 3.27)
near("practice[2]", Rational(1, 2)*tan(pi/6)/(1 + Rational(1, 2)), 0.192)

# practice[3]: thin shell, 4.00 m/s, 20 degrees
hh = (1 + Rational(2, 3))*16/(2*G)
near("practice[3]", hh, 1.36)
near("practice[3]", hh/sin(20*pi/180), 3.98)
near("practice[3]", 16/(2*G), 0.816)
