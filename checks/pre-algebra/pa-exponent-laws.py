# content: b2ee42c5ca6f
# pa-exponent-laws: Exponent Laws with Variables
xp = symbols('xp', positive=True)

# formal: (a+b)^n != a^n + b^n in general
check("formal", expand((a + b)**2) != a**2 + b**2, "(a+b)^2 should differ from a^2+b^2")

# example: cubes of edge 2x and 6x
same("example", expand((2*x)**3), 8*x**3)
same("example", expand((6*x)**3), 216*x**3)
same("example", simplify((6*xp)**3 / (2*xp)**3), 27)
same("example", Rational(3, 2)**3, 3.375)
same("example", 8*Rational(3, 2)**3, 27)
same("example", (2*Rational(3, 2))**3, 27)

# practice
same("practice[0]", x**4 * x**7, x**11)
same("practice[1]", powsimp((y**3)**5), y**15)
same("practice[2]", simplify(12*a**7*b**3 / (4*a**2*b**3)), 3*a**5)
same("practice[3]", expand((2*x**3*y**-2)**2), 4*x**6*y**-4)
same("practice[3]", simplify((2*x**3*y**-2)**2 / (8*x**4*y**-7)), x**2*y**3/2)
