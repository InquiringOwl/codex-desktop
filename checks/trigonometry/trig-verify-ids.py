# content: 5dd232d3268c
# trig-verify-ids: Verifying Trigonometric Identities
from trig import *

# hero
check("hero", identity(csc(x) - sin(x), cos(x)*cot(x)), "csc − sin = cos cot")
# formal: the squaring counterexample
L0, R0 = sin(x), -sqrt(1 - cos(x)**2)
same("formal", L0.subs(x, pi/2), 1); same("formal", R0.subs(x, pi/2), -1)
check("formal", not identity(L0, R0), "sin = −√(1 − cos²) is not an identity")
check("formal", identity(L0**2, R0**2), "but its square is")
check("formal", identity(sin(x)**2, 1 - cos(x)**2), "sin² = 1 − cos²")

# example: each line equals the left side
L = cos(x)/(1 - sin(x)); R = (1 + sin(x))/cos(x)
E = [cos(x)/(1 - sin(x)) * (1 + sin(x))/(1 + sin(x)),
     cos(x)*(1 + sin(x))/(1 - sin(x)**2),
     cos(x)*(1 + sin(x))/cos(x)**2,
     (1 + sin(x))/cos(x)]
for i, e in enumerate(E, 1):
    check("example", identity(L, e), f"line {i}")
check("example", identity(L, R), "L = R")
check("example", expand((1 - sin(x))*(1 + sin(x)) - (1 - sin(x)**2)) == 0, "difference of squares")
# domain: cos θ ≠ 0 (where cos = 0 the right side is undefined; sin = 1 makes the left undefined)
check("example", R.subs(x, pi/2).has(zoo) or simplify(R.subs(x, pi/2)) == zoo, "R undefined at π/2")

# practice 1
for e in [sin(x)*(1/cos(x)), sin(x)/cos(x)]:
    check("practice[0]", identity(sin(x)*sec(x), e), "step")
check("practice[0]", identity(sin(x)*sec(x), tan(x)), "identity")
# practice 2
for e in [1/cos(x) - cos(x), (1 - cos(x)**2)/cos(x), sin(x)**2/cos(x), sin(x)*(sin(x)/cos(x)), sin(x)*tan(x)]:
    check("practice[1]", identity(sec(x) - cos(x), e), "step")
# practice 3
P3 = 1/(1 - sin(x)) + 1/(1 + sin(x))
for e in [((1 + sin(x)) + (1 - sin(x)))/(1 - sin(x)**2), 2/(1 - sin(x)**2), 2/cos(x)**2, 2*sec(x)**2]:
    check("practice[2]", identity(P3, e), "step")
# practice 4
A = tan(x) + cot(x)
for e in [sin(x)/cos(x) + cos(x)/sin(x), (sin(x)**2 + cos(x)**2)/(sin(x)*cos(x)), 1/(sin(x)*cos(x)), sec(x)*csc(x)]:
    check("practice[3]", identity(A, e), "(a) step")
check("practice[3]", not identity(sin(x) + cos(x), Integer(1)), "(b) not an identity")
same("practice[3]", sin(pi/4) + cos(pi/4), sqrt(2))
same("practice[3]", trig_solutions(Eq(sin(x) + cos(x), 1), x, 0, 2*pi), [0, pi/2])

# mistakes: the wrong statements fail identity()
check("mistakes", not identity((sin(x) + cos(x))**2, Integer(1)), "(sin + cos)² ≠ 1")
check("mistakes", identity((sin(x) + cos(x))**2, 1 + 2*sin(x)*cos(x)), "(sin + cos)² = 1 + 2 sin cos")
check("mistakes", not identity(sec(x) + csc(x), 1/(cos(x) + sin(x))), "sec + csc ≠ 1/(cos + sin)")
check("mistakes", identity(sec(x) + csc(x), (sin(x) + cos(x))/(sin(x)*cos(x))), "sec + csc correct")
same("mistakes", sin(0) + cos(0), 1); same("mistakes", sin(pi/2) + cos(pi/2), 1)

# lab: the Verify chains and the graph-test pairs (web/labs/trig-b3.js)
LAB = {
  "A": (csc(x) - sin(x), [1/sin(x) - sin(x), (1 - sin(x)**2)/sin(x), cos(x)**2/sin(x), cos(x)*(cos(x)/sin(x)), cos(x)*cot(x)]),
  "B": (cos(x)/(1 - sin(x)), E[1:]),
  "C": (tan(x) + cot(x), [sin(x)/cos(x) + cos(x)/sin(x), (sin(x)**2 + cos(x)**2)/(sin(x)*cos(x)), 1/(sin(x)*cos(x)), (1/cos(x))*(1/sin(x)), sec(x)*csc(x)]),
  "D": (P3, [((1 + sin(x)) + (1 - sin(x)))/((1 - sin(x))*(1 + sin(x))), 2/(1 - sin(x)**2), 2/cos(x)**2, 2*sec(x)**2]),
  "E": ((sec(x) - 1)*(sec(x) + 1), [sec(x)**2 - 1, tan(x)**2]),
}
for key, (l0, chain) in LAB.items():
    for i, e in enumerate(chain, 1):
        check("lab", identity(l0, e), f"chain {key} step {i}")
for l0, r0 in [((sin(x) + cos(x))**2, Integer(1)), (sin(x), sqrt(1 - cos(x)**2)), (sin(x) + cos(x), Integer(1))]:
    check("lab", not identity(l0, r0), f"graph test non-identity {l0} vs {r0}")
