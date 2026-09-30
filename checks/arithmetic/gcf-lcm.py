# content: f926457d38e5
# gcf-lcm: GCF, LCM & the Euclidean Algorithm

# formal: gcd * lcm = ab; Bezout
check("formal", all(igcd(p, q) * ilcm(p, q) == p * q for p in range(1, 30) for q in range(1, 30)), "gcd·lcm = ab")
_u, _v, _g = gcdex(1071, 462)
check("formal", 1071 * _u + 462 * _v == _g == 21, "Bezout")

# example
same("example", divmod(1071, 462), (2, 147))
same("example", divmod(462, 147), (3, 21))
same("example", divmod(147, 21), (7, 0))
same("example", igcd(1071, 462), 21)
same("example", (21 * 51, 21 * 22), (1071, 462))
same("example", (1071 // 21) * (462 // 21), 1122)
same("example", Rational(1071 * 462, 21**2), 1122)

# practice[0]
same("practice[0]", igcd(12, 18), 6)
same("practice[0]", [dd for dd in divisors(12) if 18 % dd == 0], [1, 2, 3, 6])
# practice[1]
same("practice[1]", ilcm(6, 8), 24)
same("practice[1]", igcd(6, 8), 2)
same("practice[1]", 6 * 8, 48)
# practice[2]: next time both leave together
_m = ilcm(18, 24)
same("practice[2]", _m, 72)
same("practice[2]", igcd(18, 24), 6)
same("practice[2]", 7 * 60 + _m, 8 * 60 + 12)
# practice[3]
same("practice[3]", divmod(252, 198), (1, 54))
same("practice[3]", divmod(198, 54), (3, 36))
same("practice[3]", divmod(54, 36), (1, 18))
same("practice[3]", divmod(36, 18), (2, 0))
same("practice[3]", igcd(252, 198), 18)
same("practice[3]", ilcm(252, 198), 2772)
