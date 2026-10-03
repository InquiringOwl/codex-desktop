# content: 769b9fba0f94
# trig-six-ratios: The Six Trigonometric Ratios & Special Angles
from trig import *

D = lambda dd: deg(dd)
th = Symbol('th', positive=True)

# formal: reciprocal, quotient and cofunction identities (acute θ, in radians)
check("formal", identity(csc(x), 1/sin(x)), "csc = 1/sin")
check("formal", identity(sec(x), 1/cos(x)), "sec = 1/cos")
check("formal", identity(cot(x), 1/tan(x)), "cot = 1/tan")
check("formal", identity(tan(x), sin(x)/cos(x)), "tan = sin/cos")
check("formal", identity(cot(x), cos(x)/sin(x)), "cot = cos/sin")
for f, g in [(sin, cos), (cos, sin), (tan, cot), (cot, tan), (sec, csc), (csc, sec)]:
    check("formal", identity(f(x), g(pi/2 - x)), f"{f.__name__} θ = {g.__name__}(90° − θ)")
# formal: ranges for acute angles (spot check across (0°, 90°))
check("formal", all(0 < N(sin(D(t))) < 1 and 0 < N(cos(D(t))) < 1 and N(sec(D(t))) > 1 and N(csc(D(t))) > 1 for t in range(1, 90)), "0<sin,cos<1, sec,csc>1")
# formal: exact table from the triangles 1, √3, 2 and 1, 1, √2
check("formal", 1**2 + sqrt(3)**2 == 2**2 and 1 + 1 == sqrt(2)**2, "special triangles are right")
T = {30: dict(sin=Rational(1, 2), cos=sqrt(3)/2, tan=sqrt(3)/3, csc=2, sec=2*sqrt(3)/3, cot=sqrt(3)),
     45: dict(sin=sqrt(2)/2, cos=sqrt(2)/2, tan=1, csc=sqrt(2), sec=sqrt(2), cot=1),
     60: dict(sin=sqrt(3)/2, cos=Rational(1, 2), tan=sqrt(3), csc=2*sqrt(3)/3, sec=2, cot=sqrt(3)/3)}
for dd, row in T.items():
    for fn, v in row.items():
        same(f"formal", exact(fn, D(dd)), v)
# from side ratios of the special triangles (opp, adj, hyp)
S = {30: (Integer(1), sqrt(3), Integer(2)), 45: (Integer(1), Integer(1), sqrt(2)), 60: (sqrt(3), Integer(1), Integer(2))}
for dd, (o, a_, hh) in S.items():
    same(f"formal", radsimp(o/hh), T[dd]['sin']); same(f"formal", radsimp(hh/a_), T[dd]['sec']); same(f"formal", radsimp(a_/o), T[dd]['cot'])
same("formal", [deg(30), deg(45), deg(60)], [pi/6, pi/4, pi/3])
check("formal", all(T[60][f] == T[30][g] for f, g in [('sin', 'cos'), ('cos', 'sin'), ('tan', 'cot'), ('cot', 'tan'), ('sec', 'csc'), ('csc', 'sec')]), "60° row = 30° row with cofunctions")

# example: tower, elevations 30° and 60°, 40 m apart
h, X = symbols('h X', positive=True)
sol = solve([Eq(X, h*cot(D(60))), Eq(X + 40, h*cot(D(30)))], [h, X], dict=True)[0]
same("example", sol[h], 20*sqrt(3))
same("example", sol[X], 20)
same("example", exact('cot', D(60)), sqrt(3)/3)
same("example", exact('cot', D(30)), sqrt(3))
same("example", simplify(sqrt(3)*h - sqrt(3)/3*h), 2*sqrt(3)/3*h)
same("example", radsimp(60/sqrt(3)), 20*sqrt(3))
same("example", radsimp(40*3/(2*sqrt(3))), 20*sqrt(3))
same("example", 20*sqrt(3)/20, exact('tan', D(60)))
same("example", radsimp(20*sqrt(3)/60), exact('tan', D(30)))
near("example", N(20*sqrt(3)), 34.6)

# practice[0]: legs 8, 15, hyp 17
check("practice[0]", 8**2 + 15**2 == 17**2, "8-15-17 right")
six = sixfrom(15, 8)   # angle at the origin with adjacent 15, opposite 8
same("practice[0]", six['csc'], Rational(17, 8))
same("practice[0]", six['sec'], Rational(17, 15))
same("practice[0]", six['cot'], Rational(15, 8))

# practice[1]
same("practice[1]", simplify(sec(D(60)) + cot(D(30))**2 - csc(D(45))**2), 3)

# practice[2]: sec(2θ + 10°) = csc(θ + 20°), acute θ
s2 = solve(Eq((2*th + 10) + (th + 20), 90), th)
same("practice[2]", s2, [20])
same("practice[2]", simplify(sec(D(50)) - csc(D(40))), 0)

# practice[3]: sec θ = 7/4
six3 = sixfrom(4, sqrt(33))
same("practice[3]", sqrt(7**2 - 4**2), sqrt(33))
same("practice[3]", six3['sec'], Rational(7, 4))
same("practice[3]", six3['sin'], sqrt(33)/7)
same("practice[3]", six3['cos'], Rational(4, 7))
same("practice[3]", six3['tan'], sqrt(33)/4)
same("practice[3]", six3['csc'], 7*sqrt(33)/33)
same("practice[3]", radsimp(7/sqrt(33)), 7*sqrt(33)/33)
same("practice[3]", six3['cot'], 4*sqrt(33)/33)
same("practice[3]", radsimp(4/sqrt(33)), 4*sqrt(33)/33)

# mistakes and life
same("mistakes", exact('sec', D(60)), 2)
same("mistakes", acos(Rational(1, 2)), D(60))
same("mistakes", exact('tan', D(30)), exact('cot', D(60)))
same("mistakes", radsimp(2/sqrt(2)), sqrt(2))
near("life", N(cot(D(5))), 11.4)
same("life", exact('tan', D(45)), 1)
