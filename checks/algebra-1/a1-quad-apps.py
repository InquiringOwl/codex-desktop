# content: d9b7bcf88047
# a1-quad-apps: Applications of Quadratics

# example: thrown up at 48 ft/s from 64 ft
H = -16*t**2 + 48*t + 64
tv = solve(diff(H, t), t)[0]
same("example", tv, 1.5)
same("example", H.subs(t, tv), 100)
same("example", expand(H / -16), t**2 - 3*t - 4)
same("example", factor(t**2 - 3*t - 4), (t - 4)*(t + 1))
solves("example", Eq(H, 0), t, {4}, domain=Interval(0, oo))
solves("example", Eq(H, 0), t, {4, -1})

# practice[0]: dropped from 144 ft
solves("practice[0]", Eq(-16*t**2 + 144, 0), t, {3}, domain=Interval(0, oo))

# practice[1]: 120 ft fence, three sides
A = x*(120 - 2*x)
xv = solve(diff(A, x), x)[0]
same("practice[1]", xv, 30)
same("practice[1]", 120 - 2*xv, 60)
same("practice[1]", A.subs(x, xv), 1800)
same("practice[1]", maximum(A, x, Interval(0, 60)), 1800)

# practice[2]: h = -4.9 t^2 + 14.7 t
h2 = -Rational(49, 10)*t**2 + Rational(147, 10)*t
tv = solve(diff(h2, t), t)[0]
same("practice[2]", tv, 1.5)
same("practice[2]", h2.subs(t, tv), 11.025)
same("practice[2]", Rational(-49, 10)*Rational(9, 4), -11.025)
same("practice[2]", Rational(147, 10)*Rational(3, 2), 22.05)
same("practice[2]", discriminant(h2 - 12, t), -19.11)
same("practice[2]", Rational(147, 10)**2, 216.09)
same("practice[2]", 4*Rational(49, 10)*12, 235.2)
solves("practice[2]", Eq(h2, 12), t, S.EmptySet)

# practice[3]: R = p(800 - 20p)
R = p*(800 - 20*p)
pv = solve(diff(R, p), p)[0]
same("practice[3]", pv, 20)
same("practice[3]", 800 - 20*pv, 400)
same("practice[3]", R.subs(p, pv), 8000)
