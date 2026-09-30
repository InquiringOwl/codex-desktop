# content: 7e8505b9573d
# pa-functions: Introduction to Functions

def is_function(pairs):
    d = {}
    for p, q in pairs:
        d.setdefault(p, set()).add(q)
    return all(len(v) == 1 for v in d.values())

# formal
check("formal", is_function({(1, 5), (2, 5), (3, 7)}), "should be a function")
check("formal", not is_function({(4, 2), (4, -2), (9, 3)}), "should not be a function")
solves("formal", Eq(y**2, 4), y, {2, -2})

# example: P = 18h
P = lambda hh: 18*hh
same("example", [(hh, P(hh)) for hh in (0, 10, 20, 40)], [(0, 0), (10, 180), (20, 360), (40, 720)])
same("example", P(Rational(65, 2)), 585)
same("example", 18*32 + 18*Rational(1, 2), 585)
same("example", 18*32, 576)

# practice
check("practice[0]", is_function({(1, 3), (2, 5), (3, 5)}), "should be a function")
check("practice[1]", not is_function({(4, 2), (4, -2), (9, 3)}), "should not be a function")
check("practice[2]", len(solveset(Eq(y, x**2).subs(x, 4), y)) == 1, "y = x^2 gives one y")
solves("practice[2]", Eq(y**2, 4), y, {2, -2})
f3 = lambda t: 3*t - 4
same("practice[3]", [(t, f3(t)) for t in (-2, 0, 5)], [(-2, -10), (0, -4), (5, 11)])
check("practice[3]", [t for t in (-2, 0, 5) if f3(t) == 11] == [5], "only input 5 gives 11")
