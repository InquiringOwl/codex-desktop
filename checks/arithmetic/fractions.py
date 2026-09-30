# content: 71c40be35198
# fractions: Fractions & Equivalence
R = Rational

# example
same("example", igcd(18, 24), 6)
same("example", R(18, 24), R(3, 4))
same("example", igcd(20, 25), 5)
same("example", R(20, 25), R(4, 5))
same("example", (R(3, 4) * 20, R(4, 5) * 20), (15, 16))
check("example", R(18, 24) < R(20, 25), "second office should have the larger share")

# practice[0]
solves("practice[0]", Eq(R(2, 5), n / 15), n, {6})
# practice[1]
same("practice[1]", igcd(42, 56), 14)
same("practice[1]", R(42, 56), R(3, 4))
# practice[2]
same("practice[2]", (9 * 20, 12 * 15), (180, 180))
check("practice[2]", R(9, 12) == R(15, 20) == R(3, 4), "equivalent, both 3/4")
# practice[3]
same("practice[3]", sorted([R(5, 8), R(2, 3), R(7, 12)]), [R(7, 12), R(5, 8), R(2, 3)])
same("practice[3]", [R(7, 12) * 24, R(5, 8) * 24, R(2, 3) * 24], [14, 15, 16])
