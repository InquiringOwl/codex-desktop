# content: 9b58f5b1d8c9
# proportions: Proportions
R = Rational
# formal: cross-product property on a sample
check("formal", (R(3, 5) == R(24, 40)) and 3*40 == 5*24, "cross products")

# example: 9 gal / 252 mi = x / 420
same("example", 9*420, 3780)
solves("example", Eq(R(9, 252), x/420), x, {15})
same("example", R(3780, 252), 15)
same("example", R(252, 9), 28)
same("example", R(420, 15), 28)

# practice[0]: 3/5 = x/40
same("practice[0]", 3*40, 120)
solves("practice[0]", Eq(R(3, 5), x/40), x, {24})
# practice[1]: 7/x = 21/12
same("practice[1]", 7*12, 84)
solves("practice[1]", Eq(7/x, R(21, 12)), x, {4})
# practice[2]: 4 notebooks $10, 14 notebooks
same("practice[2]", 10*14, 140)
solves("practice[2]", Eq(R(10, 4), x/14), x, {35})
# practice[3]: 1 cm : 2.5 km, 18.4 km
solves("practice[3]", Eq(1/R(5, 2), x/R(184, 10)), x, {R(736, 100)})
