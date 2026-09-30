# content: 49ce685b89c0
# percents: Percents
same("formal", Rational(250, 100), 2.5)
same("formal", Rational(4, 10)/100, 0.004)
rate = Rational(312, 480)
same("example", rate, 0.65)
same("example", rate*100, 65)
same("example", rate*2000, 1300)
same("example", rate*480, 312)
same("practice[0]", Rational(20, 100)*45, 9)
same("practice[1]", Rational(3, 8), 0.375)
same("practice[1]", Rational(3, 8)*100, 37.5)
same("practice[2]", Rational(18, 72)*100, 25)
same("practice[3]", solve(Eq(Rational(12, 100)*x, 30), x)[0], 250)
