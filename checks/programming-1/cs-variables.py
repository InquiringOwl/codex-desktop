# content: 82a37c8f6299
from cs import *
check("traces", traces_current("cs-variables"))
text("example", run("""
a = 3
b = 5
a, b = b, a
c = a + b
a = a * 2
print(a, b, c)
"""), "10 3 8\n")
text("practice[0]", run("""
x = 4
x = x + 3
x += 1
print(x)
"""), "8\n")
text("practice[1]", run("""
x = 5
y = x
x = 7
print(x, y)
"""), "7 5\n")
text("practice[2]", run("""
a = 3
b = 5
a = b
b = a
print(a, b)
"""), "5 5\n")
text("practice[2]: fixed swap", run("a = 3\nb = 5\na, b = b, a\nprint(a, b)\n"), "5 3\n")
out, err = run_err("""
price = 4
qty = 3
cost = price * qty
print(Cost)
""")
text("practice[3]", out + err, "NameError: name 'Cost' is not defined")
check("practice[3]: cost bound to 12", value("cost", "price = 4\nqty = 3\ncost = price * qty") == "12")
# formal
text("formal: rebinding", run("x = 5\ny = x\nx = 7\nprint(x, y)\n"), "7 5\n")
text("formal: y = x shares the object", run("x = 5\ny = x\nprint(x is y)\nx = 7\nprint(x is y)\n"), "True\nFalse\n")
check("formal: x += 2", value("x", "x = 3\nx += 2") == "5")
check("formal: str +=", value("s", "s = 'ab'\ns += 'c'") == "'abc'")
check("formal: a = b = 0", value("(a, b)", "a = b = 0") == "(0, 0)")
check("formal: tuple swap", value("(a, b)", "a = 3\nb = 5\na, b = b, a") == "(5, 3)")
check("formal: case-sensitive", value("(cost, Cost)", "cost = 1\nCost = 2") == "(1, 2)")
for bad in ["1x = 3", "3 = x", "class = 3", "x + 1 = y"]:
    try:
        compile(bad, "<page>", "exec"); ok = False
    except SyntaxError:
        ok = True
    check("formal: SyntaxError " + bad, ok)
check("formal: unbound name", (run_err("print(totl)")[1] or "").startswith("NameError"))
check("formal: underscore names", value("_count2", "_count2 = 1") == "1")
check("mathWhy: 2a + b", value("2 * a + b", "a = 5\nb = 3") == "13")
