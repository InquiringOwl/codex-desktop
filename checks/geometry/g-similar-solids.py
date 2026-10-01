# content: 70d4ae4fea84
# g-similar-solids: Similar Solids
kk, l_, w_, h_ = symbols('kk l_ w_ h_', positive=True)
# formal: box scaling
same("formal", 2*(kk*l_*kk*w_ + kk*l_*kk*h_ + kk*w_*kk*h_), kk**2*2*(l_*w_ + l_*h_ + w_*h_))
same("formal", kk*l_*kk*w_*kk*h_, kk**3*l_*w_*h_)
r_ = symbols('r_', positive=True)
same("formal", (Rational(4, 3)*pi*(kk*r_)**3)/(Rational(4, 3)*pi*r_**3), kk**3)
# example
k_ = Rational(12, 8); same("example", k_, Rational(3, 2))
same("example", [k_**2, k_**3], [Rational(9, 4), Rational(27, 8)])
same("example", 150*k_**2, 337.5); same("example", 340*k_**3, 1147.5)
same("example", Rational(11475, 10)/340, 3.375); same("example", Rational(3375, 10)/150, 2.25)
# practice[0]
k0 = Rational(4, 10); same("practice[0]", k0, Rational(2, 5)); same("practice[0]", [k0**2, k0**3], [Rational(4, 25), Rational(8, 125)])
# practice[1]
same("practice[1]", [cbrt(64), cbrt(343)], [4, 7]); same("practice[1]", 80*Rational(49, 16), 245)
# practice[2]
check("practice[2]", Rational(2, 4) != Rational(5, 8), "ratios differ: not similar")
same("practice[2]", 5*2, 10); VA = pi*2**2*5; same("practice[2]", VA, 20*pi)
same("practice[2]", 8*VA, 160*pi); same("practice[2]", pi*4**2*10, 160*pi); near("practice[2]", 160*pi, 502.7, rel=0.0002)
# practice[3]
same("practice[3]", 150*3**3, 4050); same("practice[3]", Rational(1, 4)*3**2, 2.25)
same("practice[3]", 150/Rational(1, 4), 600); same("practice[3]", 4050/Rational(9, 4), 1800); same("practice[3]", 1800/600, 3)
