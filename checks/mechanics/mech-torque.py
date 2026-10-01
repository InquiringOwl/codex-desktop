# content: 4241992131fb
# mech-torque: Torque
x, y, Fx, Fy = symbols('x y F_x F_y', real=True)
# formal: z-component of r x F
rv = Matrix([x, y, 0]); Fv = Matrix([Fx, Fy, 0])
same("formal", rv.cross(Fv)[2], x*Fy - y*Fx)
same("formal", Fv.cross(rv)[2], -(x*Fy - y*Fx))

# example: 110 N m, r = 0.350 m, 70.0 deg
th = 70*pi/180
near("example", 0.350*sin(th), 0.329)
near("example", 110/(0.350*sin(th)), 334)
near("example", 110/0.350, 314)
near("example", 110/(0.350*sin(th))/9.80, 34, rel=0.02)
# mistake: full distance
near("mistakes", 0.350*334, 117)
near("mistakes", 0.350*334*sin(th), 110)

# practice[0]
near("practice[0]", 0.800*40.0, 32.0)
near("practice[0]", 32.0/0.200, 160)

# practice[1]
near("practice[1]", 0.250*50.0*sin(pi/6), 6.25)
near("practice[1]", 0.250*sin(pi/6), 0.125)
same("practice[1]", sin(0)*0.25*50, 0)

# practice[2]: meter stick, CCW +
tau = lambda px, py, fx, fy: px*fy - py*fx
t1 = tau(-0.400, 0, 0, -10.0); t2 = tau(0.200, 0, 0, -15.0); t3 = tau(0.300, 0, 0, 8.00)
near("practice[2]", t1, 4.00); near("practice[2]", t2, -3.00); near("practice[2]", t3, 2.40)
near("practice[2]", t1 + t2 + t3, 3.40)

# practice[3]
rv = Matrix([Rational(1, 2), Rational(1, 5), 0]); Fv = Matrix([30, 40, 0])
same("practice[3]", rv.cross(Fv)[2], 14); same("practice[3]", rv.cross(Fv)[0]**2 + rv.cross(Fv)[1]**2, 0)
near("practice[3]", rv.norm(), 0.539)
same("practice[3]", Fv.norm(), 50)
near("practice[3]", 14/(rv.norm()*50), 0.520)
near("practice[3]", asin(14/(rv.norm()*50))*180/pi, 31.3)
near("practice[3]", acos(rv.dot(Fv)/(rv.norm()*50))*180/pi, 31.3)   # angle is acute
