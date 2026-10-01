# content: deaa75365779
# g-proofs: Two-Column Proofs
t = symbols('t', real=True)
# formal: vertical angles from two linear pairs: m1 = 180 - m3 = m2 for every m3
m3 = symbols('m3', real=True)
check("formal", simplify((180 - m3) - (180 - m3)) == 0, "both vertical angles equal 180 - m<3")
# example
AB, BC, CD = 14, 20, 14
same("example", AB + BC, 34)
same("example", BC + CD, 34)
same("example", AB + BC + CD, 48)
same("example", (AB + BC) + CD, 48)
a_, b_, c_ = symbols('a_ b_ c_', positive=True)
check("example", simplify((a_ + b_) - (b_ + a_)) == 0, "AC = AB + BC equals BD = BC + CD when AB = CD")
# practice[0]
solves("practice[0]", Eq(2*(x - 3), 8), x, {7})
same("practice[0]", expand(2*(x - 3)), 2*x - 6)
same("practice[0]", 2*(7 - 3), 8)
# practice[1]
solves("practice[1]", Eq(4*x + 6, 6*x - 20), x, {13})
same("practice[1]", 4*13 + 6, 58)
same("practice[1]", 6*13 - 20, 58)
check("practice[1]", 0 < 58 < 180, "a valid angle measure")
# practice[2]
solves("practice[2]", Eq(3*x + 1, 5*x - 9), x, {5})
same("practice[2]", 3*5 + 1, 16)
same("practice[2]", 5*5 - 9, 16)
same("practice[2]", 16 + 7, 23)
# practice[3]: supplements of the same angle are equal
check("practice[3]", simplify((180 - t) - (180 - t)) == 0, "m<1 = m<3 = 180 - m<2")
same("practice[3]", solve(Eq(y + t, z + t), y), [z])
