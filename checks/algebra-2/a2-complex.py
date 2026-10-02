# content: 54c7b8bcf34f
# a2-complex: Complex Numbers & the Imaginary Unit
from algebra import *

# hero / formal
same("formal", I**2, -1)
same("hero", sqrt(-9), 3*I)
same("hero", cplx(3 + 2*I), (3, 2))
check("formal", all(I**n == [1, I, -1, -I][n % 4] for n in range(0, 200)), "i^n = i^(n mod 4)")
same("formal", sqrt(-4)*sqrt(-9), -6)
same("formal", sqrt((-4)*(-9)), 6)
same("formal", sqrt(-4), 2*I)
same("formal", sqrt(-9), 3*I)
check("formal", all(sqrt(-b) == I*sqrt(b) for b in [1, 2, 5, Rational(9, 4), 72]), "sqrt(-b) = i sqrt(b), b > 0")
same("steps", sqrt(72), 6*sqrt(2))
check("formal", S.Naturals.is_subset(S.Integers) and S.Integers.is_subset(S.Rationals) and S.Rationals.is_subset(S.Reals) and S.Reals.is_subset(S.Complexes), "N in Z in Q in R in C")
same("plain", (3*I)**2, -9)
same("plain", [I**1, I**2, I**3, I**4], [I, -1, -I, 1])

# example: (-6 + sqrt(-72))/3
same("example", sqrt(-72), 6*sqrt(2)*I)
z = (-6 + sqrt(-72))/3
same("example", cplx(z), (-2, 2*sqrt(2)))
same("example", expand(z), -2 + 2*sqrt(2)*I)
near("example", N(2*sqrt(2)), 2.83)

# practice[0]
same("practice[0]", sqrt(-81), 9*I)
same("practice[0]", sqrt(-20), 2*sqrt(5)*I)
# practice[1]
check("practice[1]", 35 == 4*8 + 3, "35 = 4*8 + 3")
same("practice[1]", I**35, -I)
same("practice[1]", I**100, 1)
# practice[2]
same("practice[2]", sqrt(-3)*sqrt(-12), -6)
same("practice[2]", sqrt(3)*sqrt(12), sqrt(36))
# practice[3]
sol = solve([Eq(x + 2*y, 7), Eq(2*x - y, 4)], [x, y], dict=True)
same("practice[3]", sol, [{x: 3, y: 2}])
same("practice[3]", expand((3 + 2*2) + (2*3 - 2)*I), 7 + 4*I)

# mistakes
same("mistakes", sqrt(-8), 2*sqrt(2)*I)
same("mistakes", cplx(3 + 5*I), (3, 5))

# origin: Cardano's 10 = u + v, uv = 40
u = 5 + sqrt(-15); v = 5 - sqrt(-15)
same("origin", expand(u + v), 10)
same("origin", expand(u*v), 40)
