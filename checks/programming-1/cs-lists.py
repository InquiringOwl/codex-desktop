# content: f5df51b1f99b
from cs import *
check("traces", traces_current("cs-lists"))
text("example", run("""
xs = [4, 1]
ys = xs
ys.append(7)
zs = xs + [2]
xs[0] = 9
print(xs, ys, zs)
"""), "[9, 1, 7] [9, 1, 7] [4, 1, 7, 2]\n")
text("practice[0]", run("""
xs = [10, 20, 30, 40]
print(xs[0], xs[-1], len(xs))
print(xs[1:3])
"""), "10 40 4\n[20, 30]\n")
text("practice[1]", run("""
a = [1, 2]
b = a
b.append(3)
print(a)
"""), "[1, 2, 3]\n")
text("practice[2]", run("""
def f(xs):
    xs[0] = 0
    xs = [5, 5]
    xs.append(6)

nums = [1, 2]
f(nums)
print(nums)
"""), "[0, 2]\n")
out, err = run_err("""
xs = [3, 1, 2]
xs = xs.sort()
print(xs[0])
""")
text("practice[3]", out + err, "TypeError: 'NoneType' object is not subscriptable")
text("practice[3]: fixed", run("xs = [3, 1, 2]\nxs.sort()\nprint(xs[0])\n"), "1\n")
# formal
check("formal: negative index", value("xs[-1]", "xs = [1, 2, 3]") == "3")
check("formal: IndexError", run_err("xs = [1, 2, 3]\nxs[3]")[1] == "IndexError: list index out of range")
check("formal: slice is new", value("xs[0:2] is xs[0:2], xs[:] is xs", "xs = [1, 2, 3]") == "(False, False)")
check("formal: item assignment", value("xs", "xs = [1, 2, 3]\nxs[1] = 9") == "[1, 9, 3]")
check("formal: alias", value("(ys is xs, xs)", "xs = [1]\nys = xs\nys.append(2)") == "(True, [1, 2])")
for cp in ["xs[:]", "list(xs)", "xs.copy()"]:
    check("formal: copy " + cp, value("(ys is xs, ys == xs, ys[0] is xs[0])", "xs = [[1], 2]\nys = " + cp) == "(False, True, True)")
for m in ["xs.append(4)", "xs.extend([4])", "xs.insert(0, 4)", "xs.remove(1)", "xs.sort()"]:
    check("formal: returns None " + m, value("r", "xs = [3, 1, 2]\nr = " + m) == "None")
check("formal: pop returns item", value("(r, xs)", "xs = [3, 1, 2]\nr = xs.pop()") == "(2, [3, 1])")
check("formal: + and sorted new", value("(ys, zs, xs)", "xs = [3, 1]\nys = xs + [4]\nzs = sorted(xs)") == "([3, 1, 4], [1, 3], [3, 1])")
check("formal: xs = xs + [4] rebinds", value("(ys, xs)", "xs = [1]\nys = xs\nxs = xs + [4]") == "([1], [1, 4])")
check("formal: xs += [4] mutates", value("(ys, xs is ys)", "xs = [1]\nys = xs\nxs += [4]") == "([1, 4], True)")
check("formal: == vs is", value("(xs == ys, xs is ys)", "xs = [1, 2]\nys = [1, 2]") == "(True, False)")
text("formal: function mutate vs rebind", run("""
def add_append(xs):
    xs.append(4)

def add_plus(xs):
    xs = xs + [4]

a = [1, 2, 3]
add_append(a)
b = [1, 2, 3]
add_plus(b)
print(a)
print(b)
"""), "[1, 2, 3, 4]\n[1, 2, 3]\n")
