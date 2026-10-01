# content: 9c69929a4799
# mech-newton-1: Newton's First Law & Inertia
g = Rational(98, 10)

# example: 200 N sign, cables at 30.0 and 45.0 deg
T1, T2 = symbols('T1 T2')
sol = solve([Eq(-T1*cos(rad(30)) + T2*cos(rad(45)), 0), Eq(T1*sin(rad(30)) + T2*sin(rad(45)) - 200, 0)], [T1, T2])
same("example", sol[T1], 200*cos(rad(45))/sin(rad(75)))
same("example", sol[T2], 200*cos(rad(30))/sin(rad(75)))
near("example", sol[T1], 146); near("example", sol[T2], 179)
near("example", sol[T1]*sin(rad(30)), 73.2); near("example", sol[T2]*sin(rad(45)), 126.8)
check("example", N(sol[T1] + sol[T2]) > 200, "tensions sum to more than the weight")

# practice[0]
same("practice[0]", Rational(5)*10, 50)

# practice[1]
near("practice[1]", 70*g, 686)

# practice[2]
near("practice[2]", sqrt(10**2 + 10**2), 14.1)
same("practice[2]", deg(atan2(-10, -10)), -135)   # southwest

# practice[3]: 30.0 kg, 150 N at 20.0 deg below horizontal
near("practice[3]", 150*cos(rad(20)), 141)
near("practice[3]", 30*g, 294)
near("practice[3]", 150*sin(rad(20)), 51.3)
near("practice[3]", 30*g + 150*sin(rad(20)), 345)
