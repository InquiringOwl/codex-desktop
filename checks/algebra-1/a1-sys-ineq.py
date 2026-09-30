# content: 0f83936be53a
# a1-sys-ineq: Systems of Linear Inequalities
from itertools import combinations

def vertices(bounds, ineqs):
    """intersections of boundary pairs satisfying every inequality"""
    out = set()
    for l1, l2 in combinations(bounds, 2):
        s = solve([l1, l2], [x, y], dict=True)
        if s and len(s[0]) == 2 and all(q.subs(s[0]) for q in ineqs):
            out.add((s[0][x], s[0][y]))
    return out

# example: café/tutoring
ineqs = [12*x + 20*y >= 240, x + y <= 15, x >= 0, y >= 0]
bounds = [Eq(12*x + 20*y, 240), Eq(x + y, 15), Eq(x, 0), Eq(y, 0)]
same("example", solve(Eq(12*x + 20*y, 240).subs(y, 0), x), [20])
same("example", solve(Eq(12*x + 20*y, 240).subs(x, 0), y), [12])
solves("example", Eq(12*x + 20*(15 - x), 240), x, {Rational(15, 2)})
check("example", vertices(bounds, ineqs) == {(0, 12), (0, 15), (Rational(15, 2), Rational(15, 2))},
      f"vertices {vertices(bounds, ineqs)}")
pt = {x: 5, y: 10}
same("example", 12*5 + 20*10, 260)
check("example", all(q.subs(pt) for q in ineqs), "(5,10) feasible")
same("example", 12*10 + 20*5, 220)
check("example", not all(q.subs({x: 10, y: 5}) for q in ineqs), "(10,5) infeasible")
check("example", not (12*0 + 20*0 >= 240) and (0 + 0 <= 15), "origin tests")

# practice[0]
check("practice[0]", 3 > 2*1 and 1 + 3 <= 5, "(1,3) solves")
# practice[1]
sol = solve([Eq(y, -x + 4), Eq(y, x - 2)], [x, y])
same("practice[1]", (sol[x], sol[y]), (3, 1))
check("practice[1]", 0 <= -0 + 4 and 0 > 0 - 2, "origin in set")
check("practice[1]", not (0 <= -5 + 4 and 0 > 5 - 2) and (0 <= -1 + 4 and 0 > 1 - 2), "wedge on the left")
# practice[2]: empty
check("practice[2]", reduce_inequalities([y > 2*x + 3, y < 2*x - 1], [y]) == S.false
      or solve([2*x + 3 < 2*x - 1], x) in ([], S.false, False), "empty region")
check("practice[2]", simplify((2*x + 3) - (2*x - 1)) == 4, "upper line always above lower, never overlap")
# practice[3]
ineqs = [x + y <= 60, y >= 10, Rational(3, 2)*x + 4*y >= 120, x >= 0]
check("practice[3]", all(q.subs({x: 30, y: 20}) for q in ineqs), "(30,20) feasible")
same("practice[3]", Rational(3, 2)*30 + 4*20, 125)
check("practice[3]", all(q.subs({x: 40, y: 15}) for q in ineqs), "(40,15) feasible")
same("practice[3]", Rational(3, 2)*40 + 4*15, 120)
