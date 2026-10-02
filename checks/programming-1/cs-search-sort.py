# content: 78ea46b3c01b
from cs import *
check("traces", traces_current("cs-search-sort"))
SEL = """
comps = 0
for i in range(len(xs) - 1):
    m = i
    for j in range(i + 1, len(xs)):
        comps += 1
        if xs[j] < xs[m]:
            m = j
    xs[i], xs[m] = xs[m], xs[i]
"""
INS = """
def isort(xs):
    comps = 0
    for i in range(1, len(xs)):
        key = xs[i]
        j = i - 1
        while j >= 0:
            comps += 1
            if xs[j] <= key:
                break
            xs[j + 1] = xs[j]
            j -= 1
        xs[j + 1] = key
    return comps
"""
text("example", run("xs = [3, 1, 2]\n" + SEL + "print(xs, comps)\n"), "[1, 2, 3] 3\n")
text("example: after pass 1", run("""
xs = [3, 1, 2]
for i in range(len(xs) - 1):
    m = i
    for j in range(i + 1, len(xs)):
        if xs[j] < xs[m]:
            m = j
    xs[i], xs[m] = xs[m], xs[i]
    print(xs, m)
"""), "[1, 3, 2] 1\n[1, 2, 3] 2\n")
text("practice[0]", run("""
def find(xs, target):
    for i in range(len(xs)):
        if xs[i] == target:
            return i
    return -1

print(find([5, 8, 8, 2], 8), find([5, 8], 3))
"""), "1 -1\n")
text("practice[1]", run("""
xs = [4, 9, 2, 7]
comps = 0
for x in xs:
    comps += 1
    if x == 5:
        break
print(comps)
"""), "4\n")
text("practice[2]", run("""
xs = [6, 4, 9, 1]
for i in range(len(xs) - 1):
    m = i
    for j in range(i + 1, len(xs)):
        if xs[j] < xs[m]:
            m = j
    xs[i], xs[m] = xs[m], xs[i]
    print(xs)
"""), "[1, 4, 9, 6]\n[1, 4, 9, 6]\n[1, 4, 6, 9]\n")
text("practice[3]", run(INS + "\nprint(isort([1, 2, 3, 4]), isort([4, 3, 2, 1]))\n"), "3 6\n")
# formal
check("formal: in / index", value("(9 in xs, xs.index(9))", "xs = [3, 9, 9]") == "(True, 1)")
check("formal: index ValueError", run_err("[3, 9].index(5)")[1] == "ValueError: 5 is not in list")
import itertools, random
ok_sel = ok_ins = True
for n in range(1, 7):
    for p in itertools.permutations(range(n)):
        g = {"xs": list(p)}; exec(SEL, g)
        ok_sel &= g["xs"] == sorted(p) and g["comps"] == n * (n - 1) // 2
        g2 = {}; exec(INS, g2); ys = list(p); c = g2["isort"](ys)
        ok_ins &= ys == sorted(p) and n - 1 <= c <= n * (n - 1) // 2
    g2 = {}; exec(INS, g2)
    ok_ins &= g2["isort"](list(range(n))) == max(n - 1, 0) and g2["isort"](list(range(n, 0, -1))) == n * (n - 1) // 2
check("formal: selection sort sorts with n(n-1)/2 comparisons", ok_sel)
check("formal: insertion sort sorts, n-1 sorted, n(n-1)/2 reversed", ok_ins)
SELK = SEL.replace("xs[j] < xs[m]", "xs[j][0] < xs[m][0]")
g = {"xs": [(2, "a"), (2, "b"), (1, "c")]}; exec(SELK, g)
check("formal: selection sort not stable", g["xs"] == [(1, "c"), (2, "b"), (2, "a")])
INSK = INS.replace("xs[j] <= key", "xs[j][0] <= key[0]")
g = {}; exec(INSK, g); ys = [(2, "a"), (2, "b"), (1, "c")]; g["isort"](ys)
check("formal: insertion sort stable", ys == [(1, "c"), (2, "a"), (2, "b")])
check("formal: sorted stable", sorted([(2, "a"), (2, "b"), (1, "c")], key=lambda t: t[0]) == [(1, "c"), (2, "a"), (2, "b")])
