# content: 961d49321d0c
# a2-sys-three: Linear Systems in Three Variables
from algebra import *
R = Rational
X, Y, Z = symbols('X Y Z')

def sol(eqs, vs=(X, Y, Z)):
    return linsolve(eqs, list(vs))

E1, E2, E3 = X + Y + Z - 6, 2*X - Y + Z - 3, X + 2*Y - Z - 2
# hero / example
same("example", sol([E1, E2, E3]), FiniteSet((1, 2, 3)))
same("example", expand(2*E1 - E2), 3*Y + Z - 9)
same("example", expand(E3 - E1), Y - 2*Z + 4)
E4, E5 = 3*Y + Z - 9, Y - 2*Z + 4
same("example", expand(E4 - 3*E5), 7*Z - 21)
same("example", solve(3*Y + 3 - 9, Y), [2])
same("example", solve(X + 2 + 3 - 6, X), [1])
same("example", (2 - 2 + 3, 1 + 4 - 3), (3, 2))

# formal: dependent and inconsistent examples
F1, F2, F3 = X + Y + Z - 2, X + 2*Y + 3*Z - 4, 2*X + 3*Y + 4*Z - 6
same("formal", expand(F1 + F2 - F3), 0)
t_ = symbols('t_')
check("formal", all(simplify(f.subs({X: t_, Y: 2 - 2*t_, Z: t_})) == 0 for f in (F1, F2, F3)), "(t, 2 − 2t, t) solves all three")
same("formal", sol([F1, F2, F3]), FiniteSet((Z, 2 - 2*Z, Z)))
G3 = 2*X + 3*Y + 4*Z - 9
same("formal", expand(F1 + F2 - G3), 3)   # 0 = −3 after moving constants: (1)+(2)−(3) gives 0·x = 6 − 9
same("formal", 2 + 4 - 9, -3)
same("formal", sol([F1, F2, G3]), EmptySet)

# practice[0]
P = [X + Y + Z - 4, X - Y + Z - 2, X + Y - Z]
same("practice[0]", expand(P[0] - P[1]), 2*Y - 2)
same("practice[0]", expand(P[0] - P[2]), 2*Z - 4)
same("practice[0]", sol(P), FiniteSet((1, 1, 2)))

# practice[1]
Pd = [X + Y - Z - 1, 2*X + Y + Z - 4, 3*X + 2*Y - 5]
same("practice[1]", expand(Pd[0] + Pd[1] - Pd[2]), 0)
same("practice[1]", expand(Pd[1] - Pd[0]), X + 2*Z - 3)
check("practice[1]", all(simplify(f.subs({X: 3 - 2*t_, Y: 3*t_ - 2, Z: t_})) == 0 for f in Pd), "(3 − 2t, 3t − 2, t)")
same("practice[1]", sol(Pd), FiniteSet((3 - 2*Z, 3*Z - 2, Z)))

# practice[2]: tickets
A_, S_, C_ = symbols('A_ S_ C_')
T = [A_ + S_ + C_ - 500, 12*A_ + 8*S_ + 5*C_ - 4500, A_ - 2*C_]
same("practice[2]", sol(T, (A_, S_, C_)), FiniteSet((200, 200, 100)))
same("practice[2]", expand(12*2*C_ + 8*(500 - 3*C_) + 5*C_), 5*C_ + 4000)

# practice[3]: parabola through (−1, 6), (1, 2), (2, 3)
pa, pb, pc = symbols('pa pb pc')
Pp = [pa*xx**2 + pb*xx + pc - yy for xx, yy in ((-1, 6), (1, 2), (2, 3))]
same("practice[3]", sol(Pp, (pa, pb, pc)), FiniteSet((1, -2, 3)))
same("practice[3]", [expand(xx**2 - 2*xx + 3) for xx in (-1, 1, 2)], [6, 2, 3])

# origin: Nine Chapters, Fangcheng problem 1
same("origin", sol([3*X + 2*Y + Z - 39, 2*X + 3*Y + Z - 34, X + 2*Y + 3*Z - 26]), FiniteSet((R(37, 4), R(17, 4), R(11, 4))))

# lab: Cases mode presets
same("lab", sol([X + Y + Z - 2, X + Y + Z - 5, X - Y + Z - 1]), EmptySet)
same("lab", expand((X + Y + Z - 5) - (X + Y + Z - 2)), -3)
