# content: 1e6fa54214c3
# g-logic: Conditional Statements & Logic
from itertools import product
imp = lambda a, b: (not a) or b
rows = list(product([True, False], repeat=2))   # (p, q): TT, TF, FT, FF
col = lambda f: [f(P, Q) for P, Q in rows]
# formal: equivalences and the single false row
check("formal", col(lambda P, Q: imp(P, Q)) == col(lambda P, Q: imp(not Q, not P)), "conditional == contrapositive")
check("formal", col(lambda P, Q: imp(Q, P)) == col(lambda P, Q: imp(not P, not Q)), "converse == inverse")
check("formal", [r for r in rows if not imp(*r)] == [(True, False)], "false only when p true, q false")
check("formal", col(lambda P, Q: imp(P, Q) and imp(Q, P)) == col(lambda P, Q: P == Q), "biconditional")
# example: p = height > 30, q = has guardrail
decks = {"24 in, rail": (24, True), "36 in, no rail": (36, False)}
pq = {k: (h > 30, rail) for k, (h, rail) in decks.items()}
check("example", pq["36 in, no rail"] == (True, False), "36-inch deck is the false row of p -> q")
check("example", not imp(*pq["36 in, no rail"]), "36-inch deck breaks the rule")
check("example", imp(*pq["24 in, rail"]), "24-inch deck does not break the rule")
P24, Q24 = pq["24 in, rail"]
check("example", not imp(Q24, P24), "24-inch deck is a counterexample to the converse")
check("example", not imp(not P24, not Q24), "and to the inverse")
check("example", imp(not Q24, not P24) and imp(not pq["36 in, no rail"][1], not pq["36 in, no rail"][0]) is False, "contrapositive fails exactly where the rule fails")
# practice[0]: x^2 = 25 -> x = 5
same("practice[0]", solveset(Eq(x**2, 25), x, S.Reals), FiniteSet(-5, 5))
check("practice[0]", (-5)**2 == 25 and -5 != 5, "x = -5 is a counterexample")
check("practice[0]", 5**2 == 25, "converse true")
# practice[1]: m<A = 30 -> acute (0 < m < 90)
acute = lambda m: 0 < m < 90
check("practice[1]", acute(30), "statement true")
check("practice[1]", acute(50) and 50 != 30, "50 is a counterexample to converse and inverse")
# practice[2]: truth table columns as stated
TF = lambda L: ["T" if v else "F" for v in L]
same("practice[2]", TF(col(lambda P, Q: imp(P, Q))), ["T", "F", "T", "T"])
same("practice[2]", TF(col(lambda P, Q: imp(not Q, not P))), ["T", "F", "T", "T"])
same("practice[2]", TF(col(lambda P, Q: imp(Q, P))), ["T", "T", "F", "T"])
# practice[3]: x > 3 -> x^2 > 9
sq = solveset(x**2 > 9, x, S.Reals)
same("practice[3]", sq, Union(Interval.open(-oo, -3), Interval.open(3, oo)))
check("practice[3]", Interval.open(3, oo).is_subset(sq), "statement true")
check("practice[3]", solveset(x**2 <= 9, x, S.Reals).is_subset(Interval(-oo, 3)), "contrapositive true")
check("practice[3]", (-4)**2 > 9 and not (-4 > 3), "x = -4 breaks the converse")
check("practice[3]", (-4) <= 3 and not ((-4)**2 <= 9), "x = -4 breaks the inverse")
