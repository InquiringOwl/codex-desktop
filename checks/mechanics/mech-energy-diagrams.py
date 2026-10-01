# content: 01ad9df5aea6
# mech-energy-diagrams: Potential Energy Diagrams & Equilibrium

# example: U = x^4 - 2x^2, m = 0.500 kg, E = -0.750 J
U = x**4 - 2 * x**2
Fx = -diff(U, x)
same("example", Fx, -4 * x**3 + 4 * x)
solves("example", Eq(Fx, 0), x, {0, 1, -1})
U2 = diff(U, x, 2)
same("example", U2.subs(x, 0), -4)
same("example", U2.subs(x, 1), 8)
same("example", U2.subs(x, -1), 8)
same("example", U.subs(x, 1), -1)
solves("example", Eq(U, Rational(-3, 4)), x, {sqrt(Rational(1, 2)), -sqrt(Rational(1, 2)), sqrt(Rational(3, 2)), -sqrt(Rational(3, 2))})
near("example", sqrt(Rational(1, 2)), 0.707)
near("example", sqrt(Rational(3, 2)), 1.22)
K = Rational(-3, 4) - U.subs(x, 1)
near("example", K, 0.250)
near("example", sqrt(2 * K / Rational(1, 2)), 1.00)
near("example", Fx.subs(x, sqrt(Rational(1, 2))), 1.41)
check("example", Rational(-3, 4) < U.subs(x, 0), "energy below the barrier")

# practice[0]: spring k = 200, E = 4.00
k_ = 200
solves("practice[0]", Eq(Rational(1, 2) * k_ * x**2, 4), x, {Rational(1, 5), Rational(-1, 5)})
near("practice[0]", -diff(Rational(1, 2) * k_ * x**2, x).subs(x, Rational(1, 10)), -20.0)

# practice[1]: slope +3.0 J/m -> F = -3.0 N
near("practice[1]", -3.0, -3.0)
check("practice[1]", True, "max -> unstable, min -> stable (definition)")

# practice[2]: U = 3x^2 - x^3
U = 3 * x**2 - x**3
solves("practice[2]", Eq(diff(U, x), 0), x, {0, 2})
same("practice[2]", diff(U, x, 2).subs(x, 0), 6)
same("practice[2]", diff(U, x, 2).subs(x, 2), -6)
near("practice[2]", U.subs(x, 2), 4.00)

# practice[3]: Lennard-Jones
r, s, eps = symbols('r s eps', positive=True)
ULJ = 4 * eps * ((s / r)**12 - (s / r)**6)
r0 = solve(diff(ULJ, r), r)
same("practice[3]", r0[0], 2**Rational(1, 6) * s)
near("practice[3]", 2**(1 / 6) * 3.40e-10, 3.82e-10)
same("practice[3]", simplify(ULJ.subs(r, 2**Rational(1, 6) * s)), -eps)
same("practice[3]", simplify(diff(ULJ, r, 2).subs(r, 2**Rational(1, 6) * s) * (2**Rational(1, 6) * s)**2 / eps), 72)
same("practice[3]", limit(ULJ, r, oo), 0)
