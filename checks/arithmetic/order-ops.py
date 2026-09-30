# content: bfa5455f7f8f
# order-ops: Order of Operations
same("formal", 2**(3**2), 2**9)
same("formal", Rational(6 + 4, 2), 5)
same("example", 2*12, 24); same("example", 3*7, 21)
same("example", 2*12 + 3*7 - 5, 40)
same("example", ((2*12 + 3)*7) - 5, 184)   # strictly left to right
same("practice[0]", 8 + 2*5, 18)
same("practice[1]", (8 + 2)*5, 50)
same("practice[2]", 20 - Rational(12, 4)*2, 14)
same("practice[3]", Rational(48, 2 + 6)*3 - 5, 13)
same("practice[3]", Rational(48, 8)*3, 18)
