# content: b03f36f15776
# a1-exponents: Integer Exponents & Scientific Notation
R = Rational
same("formal", (R(2, 3))**-2, (R(3, 2))**2)

# example: 1.496e11 m / 3.00e8 m/s
t_ = R(1496, 1000)*10**11 / (3*10**8)
check("example", abs(float(R(1496, 1000)/3) - 0.4987) < 5e-5, "1.496/3 ≈ 0.4987")
same("example", 11 - 8, 3)
check("example", abs(float(t_) - 4.99e2) < 0.5, f"t = {float(t_)} s ≈ 4.99e2")
check("example", abs(499/60 - 8.3) < 0.05, "499/60 ≈ 8.3")
check("example", abs(float(t_)/60 - 8.3) < 0.05 and float(t_)/60 > 8, "a little over 8 min")

# practice[0]
same("practice[0]", R(5)**-2, R(1, 25))
same("practice[0]", (-7)**0, 1)

# practice[1]
xp, yp = symbols('xp yp', positive=True)
e1 = (2*xp**3*yp**-2)**-2
same("practice[1]", e1, R(1, 4)*xp**-6*yp**4)
same("practice[1]", e1, yp**4/(4*xp**6))

# practice[2]
e2 = (3*xp**-2*yp)/(12*xp**3*yp**-4)
same("practice[2]", e2, R(1, 4)*xp**-5*yp**5)
same("practice[2]", e2, yp**5/(4*xp**5))

# practice[3]
same("practice[3]", R(60, 10)*R(45, 10), 27)
same("practice[3]", R(10)**-4*10**9, 10**5)
same("practice[3]", R(6, 10**4)*R(45, 10)*10**9, R(27, 10)*10**6)
