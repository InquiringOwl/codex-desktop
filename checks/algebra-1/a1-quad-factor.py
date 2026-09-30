# content: 3ad795cf343a
# a1-quad-factor: Solving Quadratics by Factoring

# formal: double root example and higher degree
solves("formal", Eq((x - 3)**2, 0), x, {3})
solves("formal", Eq(x*(x - 1)*(x + 4), 0), x, {0, 1, -4})

# example: w(w+3) = 108
same("example", expand(w*(w + 3) - 108), w**2 + 3*w - 108)
same("example", factor(w**2 + 3*w - 108), (w + 12)*(w - 9))
solves("example", Eq(w*(w + 3), 108), w, {-12, 9})
solves("example", Eq(w*(w + 3), 108), w, {9}, domain=Interval.open(0, oo))
same("example", 9 + 3, 12)

# practice[0]
solves("practice[0]", Eq((x - 4)*(x + 7), 0), x, {4, -7})

# practice[1]
same("practice[1]", factor(x**2 - 5*x - 14), (x - 7)*(x + 2))
solves("practice[1]", Eq(x**2 - 5*x - 14, 0), x, {7, -2})

# practice[2]
same("practice[2]", factor(3*x**2 - 12*x), 3*x*(x - 4))
solves("practice[2]", Eq(3*x**2, 12*x), x, {0, 4})

# practice[3]
same("practice[3]", expand((2*x - 3)*(3*x + 5)), 6*x**2 + x - 15)
solves("practice[3]", Eq(6*x**2 + x - 15, 0), x, {Rational(3, 2), -Rational(5, 3)})
