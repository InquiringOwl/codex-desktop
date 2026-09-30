# content: 970b55a0ec80
# averages: Mean, Median & Mode
from statistics import median as _med, multimode as _modes

# formal: deviations from the mean sum to zero
_d = [22, 25, 34, 28, 25, 90, 31]
_m = Rational(sum(_d), len(_d))
same("formal", sum(v - _m for v in _d), 0)

# example
same("example", sorted(_d), [22, 25, 25, 28, 31, 34, 90])
same("example", len(_d), 7)
same("example", sum(_d), 255)
check("example", abs(float(_m) - 36.4) < 0.05, f"mean {float(_m)} should round to 36.4")
same("example", sorted(_d)[3], 28)
same("example", Rational(_med(_d)), 28)
same("example", _modes(_d), [25])
check("example", sum(1 for v in _d if v < _m) == 6, "mean should exceed six of seven values")

# practice[0]
same("practice[0]", 4 + 8 + 9 + 11, 32)
same("practice[0]", Rational(4 + 8 + 9 + 11, 4), 8)

# practice[1]
_p = [13, 7, 21, 9, 15, 4]
same("practice[1]", sorted(_p), [4, 7, 9, 13, 15, 21])
same("practice[1]", Rational(_med(_p)), 11)

# practice[2]
_q = [3, 5, 5, 6, 8, 8, 8, 10]
same("practice[2]", _modes(_q), [8])
same("practice[2]", _q.count(8), 3)

# practice[3]: solve (82+90+76+88+s)/5 = 85
same("practice[3]", 85 * 5, 425)
same("practice[3]", 82 + 90 + 76 + 88, 336)
solves("practice[3]", Eq((82 + 90 + 76 + 88 + s) / 5, 85), s, {89})
