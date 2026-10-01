# content: 2189e87c3aa8
# mech-rot-inertia: Moment of Inertia & Rotational Kinetic Energy
M, L, R, x, r = symbols('M L R x r', positive=True)

# formal: table values by integration
same("formal", integrate(x**2*M/L, (x, 0, L)), M*L**2/3)
same("formal", integrate(x**2*M/L, (x, -L/2, L/2)), M*L**2/12)
same("formal", integrate(r**2*(M/(pi*R**2))*2*pi*r, (r, 0, R)), M*R**2/2)
same("formal", M*L**2/12 + M*(L/2)**2, M*L**2/3)
# solid sphere from stacked disks: dI = (1/2)(R^2 - z^2)^2 * rho*pi dz
z = symbols('z', real=True)
rho = M/(Rational(4, 3)*pi*R**3)
same("formal", integrate(Rational(1, 2)*rho*pi*(R**2 - z**2)**2, (z, -R, R)), Rational(2, 5)*M*R**2)

# example: 100 kg, 0.300 m solid cylinder, 6000 rpm
I = Rational(1, 2)*100*Rational(3, 10)**2
same("example", I, Rational(9, 2))
om = 6000*2*pi/60
near("example", om, 628)
K = I*om**2/2
near("example", K, 8.88e5)
near("example", K/3.6e6, 0.247)
near("example", 0.300*om, 188)
near("example", sqrt(2*K/1500), 34.4)
near("example", sqrt(2*K/1500)*3.6, 124)

# practice[0]
same("practice[0]", 2*0 + 1*Rational(1, 2)**2 + 3*1**2, Rational(13, 4))
same("practice[0]", 2*Rational(1, 2)**2 + 0 + 3*Rational(1, 2)**2, Rational(5, 4))

# practice[1]: rod 1.20 m, 0.600 kg
near("practice[1]", 0.600*1.20**2/12, 0.0720)
near("practice[1]", 0.600*1.20**2/3, 0.288)
near("practice[1]", 0.0720 + 0.600*0.600**2, 0.288)

# practice[2]: hoop vs disk, 2.00 kg, 0.250 m, 10.0 rad/s
near("practice[2]", 2*0.25**2, 0.125)
near("practice[2]", 0.5*0.125*100, 6.25)
near("practice[2]", 0.5*2*0.25**2, 0.0625)
near("practice[2]", 0.5*0.0625*100, 3.13)
check("practice[2]", 6.25 == 2*3.125, "hoop has twice the energy")

# practice[3]: lambda = 3x on [0, 2]
Mr = integrate(3*x, (x, 0, 2))
same("practice[3]", Mr, 6)
same("practice[3]", integrate(3*x**3, (x, 0, 2)), 12)
same("practice[3]", Rational(1, 3)*6*2**2, 8)
check("practice[3]", 12 > 8, "tapered rod has larger I")
