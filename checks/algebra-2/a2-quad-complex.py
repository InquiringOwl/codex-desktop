# content: 225384491ac6
# a2-quad-complex: Quadratics with Complex Solutions
from algebra import *

A, B, Cc = symbols('A B Cc', real=True)

# hero
same("hero", discriminant(x**2 - 4*x + 13, x), -36)
same("hero", complex_solutions(x**2 - 4*x + 13), {2 + 3*I, 2 - 3*I})
same("formal", sqrt(-36), 6*I)
same("formal", 16 - 52, -36)
same("formal", [expand((4 + 6*I)/2), expand((4 - 6*I)/2)], [2 + 3*I, 2 - 3*I])
same("formal", (x**2 - 4*x + 13).subs(x, 2), 9)

# formal identities
f = A*x**2 + B*x + Cc
Dl = B**2 - 4*A*Cc
p = -B/(2*A)
check("formal", simplify(f.subs(x, p) - (-Dl/(4*A))) == 0, "vertex k = -Delta/(4a)")
pp, qq = symbols('pp qq', real=True)
check("formal", equivalent(expand((x - (pp + qq*I))*(x - (pp - qq*I))), x**2 - 2*pp*x + pp**2 + qq**2), "conjugate pair product")
check("formal", equivalent((x - pp)**2 + qq**2, x**2 - 2*pp*x + pp**2 + qq**2), "(x-p)^2 + q^2")
# for Delta < 0 the roots are p +- q i with q = sqrt(-Delta)/(2|a|), and k has the sign of a
for (a_, b_, c_) in [(1, -4, 13), (2, 4, 5), (-3, 2, -1), (Rational(1, 2), 0, 3), (-1, 6, -12)]:
    d_ = b_**2 - 4*a_*c_
    check("formal", d_ < 0, f"Delta<0 for {a_},{b_},{c_}")
    pv, qv = Rational(-b_, 1)/(2*a_), sqrt(-d_)/(2*abs(a_))
    same("formal", complex_solutions(a_*x**2 + b_*x + c_), {simplify(pv + qv*I), simplify(pv - qv*I)})
    kv = -Rational(d_)/(4*a_)
    check("formal", sign(kv) == sign(a_), "k has the sign of a")
    check("formal", simplify(2*pv + Rational(b_)/a_) == 0 and simplify(pv**2 + qv**2 - Rational(c_)/a_) == 0, "sum and product")
# discriminant cases
same("formal", len(real_solutions(Eq(x**2 - 5*x + 6, 0))), 2)
same("formal", len(real_solutions(Eq(x**2 - 4*x + 4, 0))), 1)
same("formal", real_solutions(Eq(x**2 + 1, 0)), S.EmptySet)

# example: 2x^2 + 4x + 5 = 0
same("example", discriminant(2*x**2 + 4*x + 5, x), -24)
same("example", 16 - 40, -24)
same("example", sqrt(-24), 2*sqrt(6)*I)
r1, r2 = -1 + sqrt(6)/2*I, -1 - sqrt(6)/2*I
same("example", complex_solutions(2*x**2 + 4*x + 5), {r1, r2})
same("example", expand((-4 + 2*sqrt(6)*I)/4), r1)
same("example", expand(r1 + r2), -2)
same("example", Rational(-4, 2), -2)
same("example", expand(r1*r2), Rational(5, 2))
same("example", 1 + Rational(6, 4), Rational(5, 2))
same("example", Rational(-4, 2*2), -1)
same("example", (2*x**2 + 4*x + 5).subs(x, -1), 3)
same("example", real_solutions(Eq(2*x**2 + 4*x + 5, 0)), S.EmptySet)

# practice
same("practice[0]", complex_solutions(x**2 + 25), {5*I, -5*I})
same("practice[1]", discriminant(x**2 - 6*x + 9, x), 0)
same("practice[1]", real_solutions(Eq(x**2 - 6*x + 9, 0)), {3})
same("practice[1]", discriminant(3*x**2 - 2*x + 4, x), -44)
same("practice[2]", expand((x + 3)**2 + 4), x**2 + 6*x + 13)
same("practice[2]", complex_solutions(x**2 + 6*x + 13), {-3 + 2*I, -3 - 2*I})
same("practice[3]", expand((x - 3 + 2*I)*(x - 3 - 2*I)), x**2 - 6*x + 13)
same("practice[3]", expand((x**2 - 6*x + 13).subs(x, 3 - 2*I)), 0)

# mistakes
same("mistakes", expand((-4 + 2*sqrt(6)*I)/4), -1 + sqrt(6)*I/2)

# origin: Cardano
same("origin", discriminant(x**2 - 10*x + 40, x), -60)
same("origin", complex_solutions(x**2 - 10*x + 40), {5 + sqrt(15)*I, 5 - sqrt(15)*I})
same("origin", expand((5 + sqrt(-15))*(5 - sqrt(-15))), 40)
