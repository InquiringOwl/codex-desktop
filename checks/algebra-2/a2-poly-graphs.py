# content: db98d0be0231
# a2-poly-graphs: Polynomial Functions & End Behavior
from algebra import *
from collections import Counter

def lead(e):
    p = Poly(expand(e), x); return p.degree(), p.LC()

def turning(e):
    """Turning points: real zeros of f' with odd multiplicity (sign change of f')."""
    c = Counter(real_roots(Poly(diff(e, x), x)))
    return sorted(r for r, m in c.items() if m % 2)

def parity(e):
    e = expand(e); m = expand(e.subs(x, -x))
    return "even" if expand(m - e) == 0 else "odd" if expand(m + e) == 0 else "neither"

# hero: -2x^3 + 5x + 1, odd degree, negative leading coefficient
H = -2*x**3 + 5*x + 1
same("hero", ends(H), (oo, -oo))
# plain: x^3 - 12x at x = 100
same("plain", (x**3 - 12*x).subs(x, 100), 998800)
same("plain", Rational(998800, 100**3) * 100, Rational(9988, 100))
# formal: leading coefficient test on power functions, examples of even / odd
same("formal", ends(x**4), (oo, oo)); same("formal", ends(-x**4), (-oo, -oo))
same("formal", ends(x**3), (-oo, oo)); same("formal", ends(-x**3), (oo, -oo))
same("formal", parity(x**4 - 3*x**2 + 1), "even")
same("formal", parity(x**3 - 4*x), "odd")

# example
F = -3*x**2*(x - 1)*(x + 4)
same("example", expand(F), -3*x**4 - 9*x**3 + 12*x**2)
same("example", lead(F), (4, -3))
same("example", ends(F), (-oo, -oo))
check("example", dict(roots_mult(F)) == {0: 2, 1: 1, -4: 1}, "zeros with multiplicity")
same("example", expand(F.subs(x, -x)), -3*x**4 + 9*x**3 + 12*x**2)
same("example", parity(F), "neither")
T = turning(F)
same("example", len(T), 3)
near("example", T[0], -2.93); same("example", T[1], 0); near("example", T[2], 0.68)

# mistakes
same("mistakes", lead(3 + 2*x - x**4), (4, -1))
same("mistakes", len(turning(x**3)), 0); same("mistakes", len(turning(x**3 - 3*x)), 2)
same("mistakes", expand((x**2 + x).subs(x, -x)), x**2 - x)
same("mistakes", parity(x**2 + x), "neither")
same("mistakes", lead((2*x - 1)**2*(x + 3)), (3, 4))

# practice[0]
same("practice[0]", lead(-5*x**3 + 2*x - 7), (3, -5))
same("practice[0]", ends(-5*x**3 + 2*x - 7), (oo, -oo))
# practice[1]
P1 = (2*x - 1)**2*(x + 3)*(x - 4)
same("practice[1]", lead(P1), (4, 4))
same("practice[1]", ends(P1), (oo, oo))
same("practice[1]", expand(P1), 4*x**4 - 8*x**3 - 43*x**2 + 47*x - 12)
# practice[2]
same("practice[2]", parity(2*x**4 - x**2 + 3), "even")
same("practice[2]", expand((x**5 - 3*x**3 + x).subs(x, -x)), -x**5 + 3*x**3 - x)
same("practice[2]", parity(x**5 - 3*x**3 + x), "odd")
same("practice[2]", parity(x**3 + 1), "neither")
# practice[3]: opposite ends -> odd degree; rises left, falls right -> negative; n - 1 >= 4 -> least odd n is 5
same("practice[3]", min(n for n in range(1, 20) if n % 2 == 1 and n - 1 >= 4), 5)
E3 = -x*(x**2 - 1)*(x**2 - 4)
same("practice[3]", expand(E3), -x**5 + 5*x**3 - 4*x)
same("practice[3]", ends(E3), (oo, -oo))
same("practice[3]", len(turning(E3)), 4)
