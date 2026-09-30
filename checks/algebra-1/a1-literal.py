# content: 8470df8cbd85
# a1-literal: Literal Equations & Formulas
R = Rational
F_, C_ = symbols('F C', real=True)
# example
Fs = solve(Eq(C_, R(5, 9)*(F_ - 32)), F_)[0]
same("example", Fs, R(9, 5)*C_ + 32)
same("example", R(9, 5)*180, 324)
same("example", Fs.subs(C_, 180), 356)
same("example", R(5, 9)*(356 - 32), 180)
check("example", 350 <= 356 <= 360, "356 in 350–360")

# practice[0]
same("practice[0]", solve(Eq(d, r*t), t)[0], d/r)
# practice[1]
Pp, L, W = symbols('P l w', real=True)
ws = solve(Eq(Pp, 2*L + 2*W), W)[0]
same("practice[1]", ws, (Pp - 2*L)/2)
same("practice[1]", ws, Pp/2 - L)
# practice[2]
ys = solve(Eq(3*x + 4*y, 12), y)[0]
same("practice[2]", ys, 3 - R(3, 4)*x)
# practice[3]
A_ = symbols('A', real=True)
Ps = solve(Eq(A_, Pp + Pp*r*t), Pp)[0]
same("practice[3]", Ps, A_/(1 + r*t))
same("practice[3]", 1 + R(6, 100)*3, R(118, 100))
same("practice[3]", Ps.subs({A_: 5900, r: R(6, 100), t: 3}), 5000)
