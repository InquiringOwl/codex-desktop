# content: 7b993771a872
# rounding: Rounding & Estimation
def rhu(v, u):
    L = (v // u) * u
    return L if v < L + Rational(u, 2) else L + u
def rhe(v, u):
    return int(round(Rational(v, u))) * u   # python round() on Rational: half to even
check("formal", rhe(4350, 100) == 4400 and rhe(4250, 100) == 4200, "banker's examples")
check("formal", all(abs(rhu(v, 100) - v) <= 50 for v in range(0, 2000)), "error ≤ u/2")

# example
same("example", rhu(387, 100), 400)
same("example", rhu(214, 100), 200)
same("example", rhu(529, 100), 500)
same("example", 400 + 200 + 500, 1100)
same("example", 387 + 214 + 529, 1130)
same("example", 1130 - 1100, 30)
# practice
same("practice[0]", rhu(67, 10), 70)
same("practice[1]", rhu(4351, 100), 4400)
same("practice[2]", rhu(2450, 100), 2500)
same("practice[2]", rhe(2450, 100), 2400)
same("practice[3]", rhu(612, 100) + rhu(287, 100) + rhu(405, 100), 1300)
same("practice[3]", 612 + 287 + 405, 1304)
