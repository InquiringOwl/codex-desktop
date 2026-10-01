# content: cacfc7e78ace
# mech-rot-dynamics: Newton's Second Law for Rotation
g = Rational(98, 10)
m, I, R, T, a, al, G = symbols('m I R T a alpha g', positive=True)
# formal: pulley system solved
sol = solve([Eq(m*G - T, m*a), Eq(T*R, I*al), Eq(a, R*al)], [T, a, al], dict=True)[0]
same("formal", simplify(sol[a] - m*G/(m + I/R**2)), 0)

# example: bucket 2.00 kg, drum 8.00 kg, R = 0.100 m, h = 3.00 m
Id = Rational(1, 2)*8*Rational(1, 10)**2
same("example", Id, Rational(1, 25))
same("example", Id/Rational(1, 10)**2, 4)
acc = 2*g/(2 + 4)
near("example", acc, 3.27)
near("example", 4*acc, 13.1)
near("example", 2*g, 19.6)
near("example", acc/Rational(1, 10), 32.7)
v = sqrt(2*acc*3)
near("example", v, 4.43)
same("example", 2*g*3, Rational(588, 10))
same("example", Rational(1, 2)*2*v**2, Rational(196, 10))
same("example", Rational(1, 2)*Id*(v/Rational(1, 10))**2, Rational(392, 10))
same("example", Rational(196, 10) + Rational(392, 10), Rational(588, 10))

# practice[0]
same("practice[0]", Rational(25, 10)/Rational(5, 10), 5)
same("practice[0]", 5*4, 20)

# practice[1]
Ip = Rational(1, 2)*4*Rational(2, 10)**2
same("practice[1]", Ip, Rational(8, 100))
same("practice[1]", Rational(2, 10)*10 - Rational(4, 10), Rational(16, 10))
same("practice[1]", Rational(16, 10)/Ip, 20)

# practice[2]: Atwood 3.00 and 5.00 kg, disk 2.00 kg, R = 0.100
m1, m2, Mp, Rp = 3, 5, 2, Rational(1, 10)
A = (m2 - m1)*g/(m1 + m2 + Rational(Mp, 2))
near("practice[2]", A, 2.18)
T1 = m1*(g + A); T2 = m2*(g - A)
near("practice[2]", T1, 35.9); near("practice[2]", T2, 38.1)
same("practice[2]", (T2 - T1)*Rp, Rational(1, 2)*Mp*Rp**2*(A/Rp))
near("practice[2]", (T2 - T1)*Rp, 0.218)
A0 = (m2 - m1)*g/(m1 + m2)
near("practice[2]", A0, 2.45)
same("practice[2]", m1*(g + A0), m2*(g - A0))
near("practice[2]", m1*(g + A0), 36.8)

# practice[3]
alp = Rational(15)/Rational(3, 10)
same("practice[3]", alp, 50)
same("practice[3]", Rational(50)**2/(2*alp), 25)
same("practice[3]", 15*25, 375)
same("practice[3]", Rational(1, 2)*Rational(3, 10)*50**2, 375)
same("practice[3]", 15*50, 750)
