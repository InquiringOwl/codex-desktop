# content: d0a68ba57cd2
# percent-apps: Percent Change, Tax & Interest
P, r_ = 2000, Rational(5, 100)
same("example", P*r_*3, 300)
same("example", P*(1 + r_*3), 2300)
same("example", (1 + r_)**3, 1.157625)
same("example", P*(1 + r_)**3, 2315.25)
same("example", P*(1 + r_)**3 - P*(1 + r_*3), 15.25)
same("practice[0]", Rational(46 - 40, 40), Rational(15, 100))
same("practice[1]", 68*Rational(1075, 1000), 73.10)
same("practice[2]", 1200*Rational(4, 100)*5, 240)
same("practice[2]", 1200 + 1200*Rational(4, 100)*5, 1440)
bal = 5000*(1 + Rational(6, 100)/12)**24
check("practice[3]", abs(bal.evalf() - 5635.80) < 0.005, f"balance {bal.evalf()}")
