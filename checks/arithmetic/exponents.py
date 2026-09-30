# content: 54bafb3cb069
# exponents: Exponents & Powers

# formal
check("formal", 2**3 != 3**2, "2^3 vs 3^2")
same("formal", Integer(2)**(3**2), 512)

# example: 50 bacteria doubling every 20 min for 3 h
same("example", Rational(3 * 60, 20), 9)
same("example", 2**9, 512)
same("example", [2**k for k in range(1, 10)], [2, 4, 8, 16, 32, 64, 128, 256, 512])
same("example", 50 * 2**Rational(180, 20), 25600)

# practice[0]
same("practice[0]", 3**4, 81)
# practice[1]
same("practice[1]", 2**5 * 2**3, 2**8)
same("practice[1]", 2**5 * 2**3, 256)
# practice[2]
same("practice[2]", (-2)**4, 16)
same("practice[2]", -2**4, -16)
# practice[3]
same("practice[3]", (Integer(2)**3)**2, 2**6)
same("practice[3]", (Integer(2)**3)**2 * Integer(2)**-4, 4)
