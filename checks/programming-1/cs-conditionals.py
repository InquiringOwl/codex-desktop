# content: e32fb154ea21
from cs import *
check("traces", traces_current("cs-conditionals"))
GRADE = """
score = int(input("score? "))
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print("grade", grade)
"""
text("example", run(GRADE, inputs=["85"]), "score? 85\ngrade B\n")
check("lab: 92 gives A", run(GRADE, inputs=["92"]) == "score? 92\ngrade A\n")
check("lab: 59 gives F", run(GRADE, inputs=["59"]) == "score? 59\ngrade F\n")
text("practice[0]", run("""
x = -4
if x < 0:
    print("negative")
else:
    print("not negative")
print("end")
"""), "negative\nend\n")
text("practice[1]", run("""
score = 95
if score >= 70:
    print("C")
elif score >= 80:
    print("B")
elif score >= 90:
    print("A")
"""), "C\n")
text("practice[2]", run("""
t = 30
if t > 25:
    print("hot")
if t > 15:
    print("warm")
else:
    print("cold")
"""), "hot\nwarm\n")
LEAP = """
year = int(input("year? "))
if year % 4 == 0:
    if year % 100 == 0 and year % 400 != 0:
        print("common year")
    else:
        print("leap year")
else:
    print("common year")
"""
text("practice[3]", run(LEAP, inputs=["1900"]), "year? 1900\ncommon year\n")
check("practice[3]: 2000 is a leap year", run(LEAP, inputs=["2000"]).endswith("leap year\n"))
# formal rules
check("formal: later conditions are not evaluated", run("""
if True:
    print("first")
elif print("tested"):
    pass
""") == "first\n")
check("formal: no else, nothing runs", run("x = 1\nif x > 5:\n    print('big')\n") == "")
check("formal: falsy values", run("""
for v in [0, "", [], None]:
    if v:
        print("truthy")
    else:
        print("falsy")
""") == "falsy\n" * 4)
out, err = run_err("if True:\nprint('x')\n")
check("formal: missing block is IndentationError", err is not None and err.startswith("IndentationError"))
check("formal: conditional expression", value("'a' if 0 else 'b'") == "'b'")
check("mathWhy: abs as conditional expression", all(eval("-x if x < 0 else x", {"x": x}) == abs(x) for x in range(-3, 4)))
out, err = run_err('print("85" >= 90)')
check("prereqWhy: str vs int comparison is TypeError", err is not None and err.startswith("TypeError"))
out, err = run_err("if x = 5:\n    pass\n")
check("mistakes: = in condition is SyntaxError", err is not None and err.startswith("SyntaxError"))
check("mistakes: x == 1 or 2 is always truthy", bool(eval("x == 1 or 2", {"x": 7})))
