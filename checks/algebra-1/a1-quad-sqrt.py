# content: abbf487c9384
# a1-quad-sqrt: Square Root Property & Completing the Square

# formal
same("formal", expand((x + b/2)**2), x**2 + b*x + (b/2)**2)
solves("formal", Eq(x**2, -4), x, S.EmptySet)
solves("formal", Eq(x**2, 0), x, {0})

# example: w(w+4) = 50
check("example", factor_list(w**2 + 4*w - 50)[1] == [(w**2 + 4*w - 50, 1)], "should not factor over integers")
same("example", expand((w + 2)**2 - (w**2 + 4*w + 4)), 0)
same("example", 50 + 4, 54)
same("example", sqrt(54), 3*sqrt(6))
solves("example", Eq(w*(w + 4), 50), w, {-2 + 3*sqrt(6), -2 - 3*sqrt(6)})
solves("example", Eq(w*(w + 4), 50), w, {-2 + 3*sqrt(6)}, domain=Interval.open(0, oo))
wv = -2 + 3*sqrt(6)
check("example", abs(N(wv) - 5.35) < 0.005, f"width {N(wv)} ~ 5.35")
check("example", abs(N(wv) - 5.348) < 0.0005, "width ~ 5.348")
check("example", abs(N(wv + 4) - 9.35) < 0.005, "length ~ 9.35")
check("example", abs(5.348*9.348 - 50) < 0.05, "check product ~ 50.0")

# practice[0]
solves("practice[0]", Eq(x**2, 81), x, {9, -9})

# practice[1]
same("practice[1]", sqrt(20), 2*sqrt(5))
solves("practice[1]", Eq((x - 3)**2, 20), x, {3 + 2*sqrt(5), 3 - 2*sqrt(5)})

# practice[2]
solves("practice[2]", Eq(x**2 + 16, 0), x, S.EmptySet)

# practice[3]
same("practice[3]", expand((x - 3)**2 - 9 + Rational(7, 2)), expand((2*x**2 - 12*x + 7)/2))
same("practice[3]", -Rational(7, 2) + 9, Rational(11, 2))
same("practice[3]", sqrt(Rational(11, 2)), sqrt(22)/2)
solves("practice[3]", Eq(2*x**2 - 12*x + 7, 0), x, {3 + sqrt(22)/2, 3 - sqrt(22)/2})
