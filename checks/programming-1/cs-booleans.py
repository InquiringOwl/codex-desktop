# content: c04d1d30a94b
from cs import *
check("traces", traces_current("cs-booleans"))
text("example", run("""
x = 15
in_range = 10 <= x < 20
is_odd = x % 2 == 1
print(in_range, is_odd)
print(in_range and not is_odd)
print(x > 100 or x == 15)
"""), "True True\nFalse\nTrue\n")
text("practice[0]", run('print(5 == 5.0, 5 != 4, "Hi" == "hi")'), "True True False\n")
text("practice[1]", run("""
x = 12
print(0 < x < 10, 10 <= x <= 20)
"""), "False True\n")
text("practice[2]", run('print(bool(0), bool(" "), bool([]), bool(None))'), "False True False False\n")
out, err = run_err("""
d = 0
print(d != 0 and 10 / d)
print("" or "none")
print(10 / d or "none")
""")
text("practice[3]", out + err, "False\nnone\nZeroDivisionError: division by zero")
# formal
for e, want in [("1 == 1.0", "True"), ('"Apple" < "apple"', "True"), ('(ord("A"), ord("a"))', "(65, 97)"), ('"1" == 1', "False"),
                ("3 and 4", "4"), ('0 or "x"', "'x'"), ("None and 1 / 0", "None"), ("not []", "True"), ("not 5", "False"),
                ("True == 1", "True"), ("True + True", "2"), ("isinstance(True, int)", "True"),
                ("[bool(v) for v in (False, None, 0, 0.0, '', [], (), {}, set())]", "[False, False, False, False, False, False, False, False, False]"),
                ("[bool(v) for v in (1, -0.5, 'a', '0', 'False', [0], ' ')]", "[True, True, True, True, True, True, True]"),
                ("not 1 == 2", "True"), ("True or False and False", "True"), ("not True and False", "False"), ("1 + 2 == 3", "True")]:
    check("formal: " + e, value(e) == want)
check("formal: str < int TypeError", run_err('"1" < 2')[1] == "TypeError: '<' not supported between instances of 'str' and 'int'")
text("formal: chain evaluates middle once", run("""
def mid():
    print("mid")
    return 5
print(0 < mid() < 10)
"""), "mid\nTrue\n")
check("formal: chain = and", all((0 < x < 10) == (0 < x and x < 10) for x in range(-5, 15)))
text("formal: and skips right side", run("""
def r():
    print("ran")
    return True
print(False and r())
print(True or r())
print(True and r())
"""), "False\nTrue\nran\nTrue\n")
# plain and mistakes
check("plain: guard", value("x != 0 and 10 / x > 1", "x = 0") == "False")
try:
    compile("if x = 5:\n    pass\n", "<p>", "exec"); syn = False
except SyntaxError:
    syn = True
check("mistakes: if x = 5 is SyntaxError", syn)
check("mistakes: x == 1 or 2 always truthy", all(bool(x == 1 or 2) for x in range(-3, 4)) and value("x == 1 or 2", "x = 7") == "2")
check("mistakes: guard second", (run_err("x = 0\nprint(10 / x > 1 and x != 0)")[1] or "") == "ZeroDivisionError: division by zero")
check("mistakes: bool('False'), bool('0')", value('(bool("False"), bool("0"), bool(""))') == "(True, True, False)")
check("mathWhy: <= includes endpoint", value("(0 < 10 < 10, 0 < 10 <= 10)") == "(False, True)")
