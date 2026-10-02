# content: cb468b7b0992
# a2-complex-ops: Complex Arithmetic & Conjugates
from algebra import *

A, B, Cc, D = symbols('A B Cc D', real=True)
z = A + B*I; w = Cc + D*I

# hero
same("hero", cplx((3 + 2*I)*(1 - 4*I)), (11, -10))
# plain
same("plain", cplx((3 + 2*I) + (1 + 4*I)), (4, 6))
# formal identities
check("formal", equivalent(z + w, (A + Cc) + (B + D)*I), "sum")
check("formal", equivalent(z - w, (A - Cc) + (B - D)*I), "difference")
check("formal", equivalent(expand(z*w), (A*Cc - B*D) + (A*D + B*Cc)*I), "product")
check("formal", equivalent(expand(z*conjugate(z)), A**2 + B**2), "z zbar = a^2 + b^2")
check("formal", equivalent(Abs(z)**2, A**2 + B**2), "|z|^2 = a^2 + b^2")
quot = ((A*Cc + B*D) + (B*Cc - A*D)*I)/(Cc**2 + D**2)
check("formal", simplify(quot*w - z) == 0, "division formula")
check("formal", all(simplify(Abs(p*q) - Abs(p)*Abs(q)) == 0 for p in [3 + 2*I, -1 + 5*I, 2] for q in [1 - 4*I, I, -3 - 3*I]), "|zw| = |z||w|")
same("formal", Abs(3 + 2*I), sqrt(13))
same("formal", Abs(1 - 4*I), sqrt(17))
same("formal", Abs(11 - 10*I), sqrt(221))
same("formal", sqrt(13)*sqrt(17), sqrt(221))

# example: (7 + 4i)/(2 - i)
same("example", conjugate(2 - I), 2 + I)
same("example", expand((7 + 4*I)*(2 + I)), 10 + 15*I)
same("example", 14 + 4*(-1), 10)
same("example", expand((2 - I)*(2 + I)), 5)
same("example", 2**2 + 1**2, 5)
same("example", cplx((7 + 4*I)/(2 - I)), (2, 3))
same("example", expand((2 + 3*I)*(2 - I)), 7 + 4*I)

# practice
same("practice[0]", expand((5 - 3*I) - (-2 + 4*I)), 7 - 7*I)
same("practice[1]", expand((4 + I)*(3 - 2*I)), 14 - 5*I)
zz = -3 + 4*I
same("practice[2]", conjugate(zz), -3 - 4*I)
same("practice[2]", expand(zz*conjugate(zz)), 25)
same("practice[2]", Abs(zz), 5)
same("practice[3]", expand((1 + 5*I)*(3 - 2*I)), 13 + 13*I)
same("practice[3]", expand((3 + 2*I)*(3 - 2*I)), 13)
same("practice[3]", cplx((1 + 5*I)/(3 + 2*I)), (1, 1))
same("practice[3]", expand((1 + I)*(3 + 2*I)), 1 + 5*I)

# mistakes
same("mistakes", expand((2 + 3*I)**2), -5 + 12*I)
same("mistakes", conjugate(3 - 2*I), 3 + 2*I)

# origin: Hamilton's pair product equals FOIL
check("origin", equivalent(expand(z*w), (A*Cc - B*D) + (A*D + B*Cc)*I), "pair product")
