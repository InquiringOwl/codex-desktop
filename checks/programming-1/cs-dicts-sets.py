# content: f32106ebdc81
from cs import *
check("traces", traces_current("cs-dicts-sets"))
text("example", run("""
counts = {}
for w in ["a", "b", "a"]:
    counts[w] = counts.get(w, 0) + 1
print(counts)
print(counts["a"], len(counts))
"""), "{'a': 2, 'b': 1}\n2 2\n")
text("practice[0]", run("""
ages = {"ana": 20, "ben": 19}
ages["cy"] = 21
ages["ana"] = 22
print(ages)
print(len(ages), "ben" in ages, 19 in ages)
"""), "{'ana': 22, 'ben': 19, 'cy': 21}\n3 True False\n")
text("practice[1]", run("""
a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a | b), sorted(a & b), sorted(b - a))
print(len(set([2, 2, 2, 7])))
"""), "[1, 2, 3, 4, 5] [3, 4] [5]\n2\n")
text("practice[2]", run("""
def min_max(xs):
    return min(xs), max(xs)

lo, hi = min_max([4, 9, 1])
print(lo, hi)
print(min_max([4, 9, 1]))
"""), "1 9\n(1, 9)\n")
text("practice[3]", run("""
inv = {}
for k, v in {"a": 1, "b": 2, "c": 1}.items():
    inv[v] = inv.get(v, []) + [k]
print(inv)
"""), "{1: ['a', 'c'], 2: ['b']}\n")
# formal: dicts
check("formal: KeyError", run_err("d = {'a': 1}\nd['b']")[1] == "KeyError: 'b'")
check("formal: get", value("(d.get('b'), d.get('b', 0), d.get('a'))", "d = {'a': 1}") == "(None, 0, 1)")
check("formal: insert or replace", value("d", "d = {'a': 1, 'b': 2}\nd['a'] = 5\nd['c'] = 3") == "{'a': 5, 'b': 2, 'c': 3}")
check("formal: in tests keys", value("('a' in d, 1 in d)", "d = {'a': 1}") == "(True, False)")
check("formal: order", value("(list(d.keys()), list(d.values()), list(d.items()))", "d = {'z': 1, 'a': 2}") == "(['z', 'a'], [1, 2], [('z', 1), ('a', 2)])")
check("formal: tuple key ok", value("d[(1, 2)]", "d = {(1, 2): 'p', 3: 'i', 's': 'x'}") == "'p'")
for bad, ty in [("[1]", "list"), ("{}", "dict"), ("set()", "set")]:
    check("formal: unhashable " + ty, run_err("d = {}\nd[" + bad + "] = 1")[1] == "TypeError: unhashable type: '%s'" % ty)
check("formal: dict alias", value("(d, e is d)", "d = {}\ne = d\ne['k'] = 1") == "({'k': 1}, True)")
check("formal: mistake += KeyError", run_err("c = {}\nc['w'] += 1")[1] == "KeyError: 'w'")
# formal: sets
check("formal: duplicates", value("{1, 2, 2}") == "{1, 2}")
check("formal: {} is dict", value("(type({}).__name__, type(set()).__name__)") == "('dict', 'set')")
check("formal: | & -", value("(sorted(a | b), sorted(a & b), sorted(a - b))", "a = {1, 2, 3}\nb = {3, 4}") == "([1, 2, 3, 4], [3], [1, 2])")
check("formal: add / discard", value("s", "s = {1}\ns.add(2)\ns.add(2)\ns.discard(9)") == "{1, 2}")
check("formal: remove KeyError", run_err("s = {1}\ns.remove(9)")[1] == "KeyError: 9")
check("formal: no indexing", run_err("s = {1}\ns[0]")[1] == "TypeError: 'set' object is not subscriptable")
# formal: tuples
check("formal: (5,)", value("(type((5,)).__name__, type((5)).__name__)") == "('tuple', 'int')")
check("formal: tuple ops", value("(t[1], t[1:], len(t), 3 in t)", "t = (1, 2, 3)") == "(2, (2, 3), 3, True)")
check("formal: tuple immutable", run_err("t = (1, 2, 3)\nt[0] = 9")[1] == "TypeError: 'tuple' object does not support item assignment")
check("formal: unpack", value("(x, y)", "x, y = (1, 2)") == "(1, 2)")
check("unlocksWhy: vars(obj)", value("vars(p)", "class P:\n    def __init__(self):\n        self.x = 1\np = P()") == "{'x': 1}")
