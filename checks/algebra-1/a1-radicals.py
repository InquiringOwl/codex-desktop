# content: 5f957b5c4165
# a1-radicals: Simplifying Square Roots & Radicals

# formal: cube root claim, sqrt(x^2) = |x|
same("formal", cbrt(54), 3*cbrt(2))
same("formal", sqrt(x**2), Abs(x))
check("formal", sqrt(9 + 16) != sqrt(9) + sqrt(16), "sqrt(a+b) vs sqrt a + sqrt b")

# example: 6 by 12 garden diagonal
d2 = 6**2 + 12**2
same("example", d2, 180)
same("example", sqrt(d2), 6*sqrt(5))
check("example", abs(N(sqrt(d2)) - 13.42) < 0.005, "decimal ≈ 13.42")
check("example", abs(N(sqrt(5)) - 2.2361) < 0.00005, "sqrt5 ≈ 2.2361")
same("example", (6*sqrt(5))**2, 180)

# practice[0]
same("practice[0]", sqrt(48), 4*sqrt(3))

# practice[1]: sqrt(18/49)
same("practice[1]", sqrt(Rational(18, 49)), 3*sqrt(2)/7)

# practice[2]: sqrt(50 x^3 y^4), x >= 0
xp = Symbol('xp', nonnegative=True)
same("practice[2]", sqrt(50*xp**3*y**4), 5*xp*y**2*sqrt(2*xp))
same("practice[2]", expand(25*xp**2*y**4*2*xp), 50*xp**3*y**4)

# practice[3]: sqrt(12 a^2), any real a
same("practice[3]", sqrt(12*a**2), 2*Abs(a)*sqrt(3))
same("practice[3]", sqrt(12*(-1)**2), 2*sqrt(3))
