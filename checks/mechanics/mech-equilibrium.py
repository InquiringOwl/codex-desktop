# content: 75f3c209edb5
# mech-equilibrium: Static Equilibrium
g = Rational(98, 10)
NA, NB, X = symbols('N_A N_B X', real=True)

# example: plank 5.00 m, 30.0 kg; supports at 0 and 4.00 m; painter 70.0 kg at 3.00 m
wp, w = 30*g, 70*g
near("example", wp, 294); near("example", w, 686)
s = solve([Eq(NA + NB, wp + w), Eq(NB*4 - wp*Rational(5, 2) - w*3, 0)], [NA, NB])
near("example", s[NB], 698); near("example", s[NA], 282)
same("example", wp*Rational(5, 2) + w*3, 2793)
same("example", -s[NA]*4 + wp*Rational(3, 2) + w*1, 0)
near("example", s[NA]*4, 1127, rel=0.001)
xt = solve(Eq(w*(X - 4), wp*Rational(3, 2)), X)[0]
near("example", xt, 4.64)
near("example", xt - 4, 0.643)
check("example", xt < 5, "tipping point lies on the plank")

# practice[0]: seesaw
same("practice[0]", Rational(30*16, 10)/40, Rational(12, 10))
near("practice[0]", 70*g, 686)

# practice[1]: 6.00 m, 50.0 kg beam; 100 kg crate at 1.50 m
s = solve([Eq(NA + NB, 50*g + 100*g), Eq(6*NB, 50*g*3 + 100*g*Rational(3, 2))], [NA, NB])
same("practice[1]", 6*s[NB], 2940)
near("practice[1]", s[NB], 490); near("practice[1]", s[NA], 980)

# practice[2]: 4.00 m, 15.0 kg plank, supports at 1.00 and 3.00 m; 60.0 kg person
near("practice[2]", 15*g, 147); near("practice[2]", 60*g, 588)
d = solve(Eq(60*g*X, 15*g*1), X)[0]
same("practice[2]", d, Rational(1, 4))

# practice[3]: hinged beam 3.00 m, 20.0 kg, cable 30.0 deg, 50.0 kg load at end
T = (20*g*Rational(3, 2) + 50*g*3)/(sin(pi/6)*3)
same("practice[3]", 20*g*Rational(3, 2) + 50*g*3, 1764)
near("practice[3]", T, 1.18e3)
Hx = T*cos(pi/6); Hy = 20*g + 50*g - T*sin(pi/6)
near("practice[3]", Hx, 1.02e3)
near("practice[3]", Hy, 98.0)
near("practice[3]", sqrt(Hx**2 + Hy**2), 1.02e3)
