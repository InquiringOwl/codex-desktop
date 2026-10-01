# content: ac35c5cff028
# mech-rot-kinematics: Rotational Variables & Kinematics

# formal: constant-alpha equations follow from integrating alpha
al, w0, th0 = symbols('alpha omega0 theta0')
th = th0 + w0*t + al*t**2/2
same("formal", diff(th, t), w0 + al*t)
same("formal", expand((w0 + al*t)**2), expand(w0**2 + 2*al*(th - th0)))
same("formal", expand(th - th0), expand((w0 + (w0 + al*t))*t/2))

# example: 0 -> 7200 rpm in 4.00 s, r = 4.50 cm
om = 7200*2*pi/60
near("example", om, 754)
near("example", om/4, 188)
near("example", om*4/2, 1.51e3)
near("example", om*4/2, 1508)
same("example", simplify(om*4/2/(2*pi)), 240)
near("example", 0.0450*om, 33.9)
same("example", Rational(7200, 60)/2*4, 240)

# practice[0]: 33 1/3 rpm, r = 0.150 m
w = Rational(100, 3)*2*pi/60
near("practice[0]", w, 3.49)
near("practice[0]", 0.150*w, 0.524)

# practice[1]: 12.0 rad/s, alpha = -2.00 rad/s^2
same("practice[1]", Rational(0 - 12, -2), 6)
same("practice[1]", Rational(0 - 144, 2*(-2)), 36)
near("practice[1]", 36/(2*pi), 5.73)

# practice[2]: 0.500 rev/s, r = 1.00 and 2.00 m
w = 2*pi*Rational(1, 2)
near("practice[2]", w, 3.14)
near("practice[2]", 1*w, 3.14); near("practice[2]", 2*w, 6.28)
near("practice[2]", 1*w**2, 9.87); near("practice[2]", 2*w**2, 19.7)

# practice[3]: theta = 2t^3 - 6t
th = 2*t**3 - 6*t
wt = diff(th, t); at = diff(th, t, 2)
same("practice[3]", wt, 6*t**2 - 6)
same("practice[3]", at, 12*t)
check("practice[3]", set(solve(Eq(wt, 0), t)) & {1} == {1} and all(s <= 0 or s == 1 for s in solve(Eq(wt, 0), t)), "omega = 0 at t = 1 s (only positive root)")
same("practice[3]", wt.subs(t, 2), 18)
same("practice[3]", at.subs(t, 2), 24)
near("practice[3]", 0.5*wt.subs(t, 2)**2, 162)
# mistakes
near("mistakes", 0.0450*7200, 324)
near("mistakes", 2.0*pi/2, 3.1, rel=0.02)
