# content: 7e51ffb6a62d
# pa-one-step: One-Step Equations

# example: 2/3 b = 4
solves("example", Eq(Rational(2, 3)*b, 4), b, {6})
same("example", Rational(3, 2)*4, 6)
same("example", Rational(2, 3)*6, 4)

# practice
solves("practice[0]", Eq(x - 9, -4), x, {5})
solves("practice[1]", Eq(-6*y, 42), y, {-7})
solves("practice[2]", Eq(-Rational(3, 5)*w, 12), w, {-20})
solves("practice[3]", Eq(Rational(108, 100)*p, Rational(4536, 100)), p, {42})
