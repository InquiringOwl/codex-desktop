# content: 74be5caae235
# g-parallel: Parallel Lines & Transversals
# Model: l horizontal, m with tilt phi, transversal at angle th (degrees, from the positive x-direction).
def angles(th, phi=0):
    a2 = th; a1 = 180 - th; a3 = a2; a4 = a1           # at l: UL, UR, LL, LR -> 1, 2, 3, 4
    a6 = th - phi; a5 = 180 - a6; a7 = a6; a8 = a5      # at m: 5, 6, 7, 8
    return {1: a1, 2: a2, 3: a3, 4: a4, 5: a5, 6: a6, 7: a7, 8: a8}
A = angles(Rational(58))
same("example", A[1], 122)
same("example", [A[3], A[4]], [58, 122])
same("example", [A[6], A[5]], [58, 122])
same("example", [A[7], A[8]], [58, 122])
same("example", A[4] + A[6], 180)
check("example", sum(A[i] for i in (1, 2, 3, 4)) == 360 and sum(A[i] for i in (5, 6, 7, 8)) == 360, "360 at each crossing")
check("example", 57 != A[6], "Pine's corresponding angle differs, so not parallel")
# formal: pairs in the parallel model, and a tilted model breaks them
P_ = angles(Rational(70))
check("formal", all(P_[i] == P_[j] for i, j in [(1,5),(2,6),(3,7),(4,8),(3,6),(4,5),(1,8),(2,7)]), "congruent pairs")
check("formal", P_[3] + P_[5] == 180 and P_[4] + P_[6] == 180, "same-side interior supplementary")
T_ = angles(Rational(70), 5)
check("formal", T_[2] != T_[6] and T_[4] + T_[6] < 180, "tilted: pairs unequal, meet on the side summing < 180")
# practice[0]: m<1 = 72  ->  th = 108
B = angles(Rational(108))
same("practice[0]", B[1], 72)
same("practice[0]", [B[5], B[8], B[6]], [72, 72, 108])
# practice[1]
solves("practice[1]", Eq(4*x - 8, 3*x + 17), x, {25})
same("practice[1]", [4*25 - 8, 3*25 + 17], [92, 92])
# practice[2]
same("practice[2]", 112 + 68, 180)
same("practice[2]", 112 + 70, 182)
same("practice[2]", [180 - 112, 180 - 70], [68, 110])
same("practice[2]", 68 + 110, 178)
# practice[3]: coordinates. A = (0, 0) on l: y = 0; P = (1, -tan40); B = P - (1, tan35) on m.
t40, t35 = tan(rad(40)), tan(rad(35))
Pp = Matrix([1, -t40]); Ap = Matrix([0, 0]); Bp = Pp - Matrix([1, t35])
u, v = Ap - Pp, Bp - Pp
ang = deg(acos((u.dot(v)) / (u.norm() * v.norm())))
near("practice[3]", N(ang, 20), 75)
check("practice[3]", abs(N(ang, 30) - 75) < 1e-20, "angle APB is exactly 75 degrees")
same("practice[3]", 40 + 35, 75)
