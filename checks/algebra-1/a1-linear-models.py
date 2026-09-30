# content: 99e85b6bbce0
# a1-linear-models: Linear Models & Regression
R = Rational
def fit(pts):
    n_ = len(pts); xb = R(sum(p[0] for p in pts), n_); yb = R(sum(p[1] for p in pts), n_)
    sxy = sum((p[0] - xb)*(p[1] - yb) for p in pts)
    sxx = sum((p[0] - xb)**2 for p in pts); syy = sum((p[1] - yb)**2 for p in pts)
    m_ = sxy/sxx
    return xb, yb, sxy, sxx, syy, m_, yb - m_*xb, sxy/sqrt(sxx*syy)

# example
pts = [(60, 40), (65, 48), (70, 55), (75, 61), (80, 71)]
xb, yb, sxy, sxx, syy, m_, b_, r_ = fit(pts)
same("example", xb, 70); same("example", sum(p[1] for p in pts), 275); same("example", yb, 55)
same("example", [p[0] - xb for p in pts], [-10, -5, 0, 5, 10])
same("example", [p[1] - yb for p in pts], [-15, -7, 0, 6, 16])
same("example", [(p[0] - xb)*(p[1] - yb) for p in pts], [150, 35, 0, 30, 160])
same("example", sxy, 375); same("example", sxx, 250)
same("example", m_, 1.5); same("example", b_, -50)
yhat = lambda xx: m_*xx + b_
same("example", yhat(85), 77.5); same("example", m_*85, 127.5)
check("example", round(float(yhat(85))) == 78 or abs(float(yhat(85)) - 78) <= 0.5, "about 78")
same("example", yhat(75), 62.5)
same("example", 61 - yhat(75), -1.5)
check("example", abs(float(r_) - 0.997) < 0.0005, f"r = {float(r_)}")

# practice[0]
same("practice[0]", R(5, 2)*8 + 10, 30)
# practice[1]
yh = -1200*x + 18000
same("practice[1]", yh.subs(x, 0), 18000)
same("practice[1]", -1200*5, -6000)
same("practice[1]", yh.subs(x, 5), 12000)
same("practice[1]", 13500 - yh.subs(x, 5), 1500)
# practice[2]
m2 = R(250 - 150, 6 - 2)
same("practice[2]", m2, 25)
same("practice[2]", expand(m2*(x - 2) + 150), 25*x + 100)
same("practice[2]", (25*x + 100).subs(x, R(9, 2)), 212.5)
# practice[3]
xb, yb, sxy, sxx, syy, m_, b_, r_ = fit([(1, 2), (2, 3), (3, 5), (4, 6)])
same("practice[3]", xb, 2.5); same("practice[3]", yb, 4)
same("practice[3]", [(p - xb)*(q - yb) for p, q in [(1, 2), (2, 3), (3, 5), (4, 6)]], [3, 0.5, 0.5, 3])
same("practice[3]", sxy, 7); same("practice[3]", sxx, 5); same("practice[3]", syy, 10)
same("practice[3]", m_, 1.4); same("practice[3]", b_, 0.5)
same("practice[3]", r_, 7/sqrt(50))
check("practice[3]", abs(float(r_) - 0.990) < 0.0005, f"r = {float(r_)}")
