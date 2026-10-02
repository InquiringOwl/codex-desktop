# content: 0afae5748ab4
# a2-fta: Fundamental Theorem of Algebra & Complex Zeros
from algebra import *

def nzeros(f):
    return sum(roots_mult(f).values())

# hero / plain
H = x**3 - 3*x**2 + x + 5
same("hero", expand((x + 1)*(x - (2 + I))*(x - (2 - I))), H)
check("hero", dict(roots_mult(H)) == {-1: 1, 2 + I: 1, 2 - I: 1}, "zeros with multiplicity")
same("plain", real_solutions(Eq(H, 0)), {-1})
same("plain", expand((x - (2 + I))*(x - (2 - I))), x**2 - 4*x + 5)
same("plain", complex_solutions(x**2 + 1), {I, -I})
# formal: conjugate-pair quadratic identity
same("formal", expand((x - (a + b*I))*(x - (a - b*I))), x**2 - 2*a*x + a**2 + b**2)

# example
F = x**4 - 3*x**3 - x**2 + 13*x - 10
same("example", expand((x - (2 + I))*(x - (2 - I))), x**2 - 4*x + 5)
same("example", expand((x - 2)**2 - I**2), x**2 - 4*x + 5)
same("example", expand((x - 1)*(x + 2)), x**2 + x - 2)
same("example", expand((x**2 + x - 2)*(x**2 - 4*x + 5)), F)
same("example", (-2 - 4 + 5, 8 + 5), (-1, 13))
same("example", F.subs(x, 1), 0)
check("example", dict(roots_mult(F)) == {1: 1, -2: 1, 2 + I: 1, 2 - I: 1}, "zeros with multiplicity")
same("example", nzeros(F), 4)

# mistakes
check("mistakes", any(not c.is_real for c in Poly(expand((x - 3)*(x - 2 - I)), x).all_coeffs()), "non-real coefficient")
same("mistakes", expand((x - 3)*(x**2 - 4*x + 5)), x**3 - 7*x**2 + 17*x - 15)
same("mistakes", complex_solutions(x - I), {I})
check("mistakes", dict(roots_mult(x**2*(x - 1))) == {0: 2, 1: 1}, "zeros with multiplicity")
same("mistakes", nzeros(x**2*(x - 1)), 3)

# practice[0]
P0 = 4*x**5 - x**3 + 2
same("practice[0]", len(Poly(P0, x).nroots()), 5)
same("practice[0]", Poly(P0, x).degree(), 5)
check("practice[0]", len(real_roots(Poly(P0, x))) >= 1, "at least one real zero")
# practice[1]
P1 = x**3 - 7*x**2 + 19*x - 13
same("practice[1]", expand(P1.subs(x, 3 - 2*I)), 0)
same("practice[1]", expand((x - 3)**2 + 4), x**2 - 6*x + 13)
same("practice[1]", div(P1, x**2 - 6*x + 13, x), (x - 1, 0))
same("practice[1]", complex_solutions(P1), {1, 3 + 2*I, 3 - 2*I})
# practice[2]
P2 = x**4 - 16
same("practice[2]", expand((x - 2)*(x + 2)*(x**2 + 4)), P2)
same("practice[2]", expand((x - 2)*(x + 2)*(x - 2*I)*(x + 2*I)), P2)
same("practice[2]", complex_solutions(P2), {2, -2, 2*I, -2*I})
check("practice[2]", real_solutions(Eq(x**2 + 4, 0)) == S.EmptySet, "x^2 + 4 has no real zeros")
# practice[3]
same("practice[3]", expand((x - 1)**2 + 9), x**2 - 2*x + 10)
same("practice[3]", expand((x - (1 - 3*I))*(x - (1 + 3*I))), x**2 - 2*x + 10)
same("practice[3]", ((x - 2)*(x**2 - 2*x + 10)).subs(x, 0), -20)
same("practice[3]", solve(Eq(-20*a, 40), a), [-2])
P3 = -2*(x - 2)*(x**2 - 2*x + 10)
same("practice[3]", expand(P3), -2*x**3 + 8*x**2 - 28*x + 40)
same("practice[3]", P3.subs(x, 0), 40)
same("practice[3]", complex_solutions(P3), {2, 1 - 3*I, 1 + 3*I})
