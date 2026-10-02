# content: ba81d85c41e7
from cs import *
check("traces", traces_current("cs-io"))
text("example", run("""
name = input("Name? ")
hours = float(input("Hours? "))
rate = 12
pay = hours * rate
print(f"Pay for {name}: {pay:.2f}")
""", inputs=["Ada", "7.5"]), "Name? Ada\nHours? 7.5\nPay for Ada: 90.00\n")
check("example: pay = 90.0", value("7.5 * 12") == "90.0")
text("practice[0]", run('print("3" + "4", 3 + 4)'), "34 7\n")
text("practice[1]", run("""
n = input("n? ")
print(n * 2, int(n) * 2)
""", inputs=["6"]), "n? 6\n66 12\n")
text("practice[2]", run('print(f"{1.75:.1f}", f"{2.25:.1f}", round(0.5), round(1.5))'), "1.8 2.2 0 2\n")
check("practice[2]: 1.75 and 2.25 exact in binary", (1.75).hex() == "0x1.c000000000000p+0" and (2.25).hex() == "0x1.2000000000000p+1")
out, err = run_err("""
age = int(input("Age? "))
print(age + 1)
""", inputs=["twenty"])
text("practice[3]", out + err, "Age? twenty\nValueError: invalid literal for int() with base 10: 'twenty'")
# formal
check("formal: input returns str", run("print(type(input('? ')))", inputs=["42"]) == "? 42\n<class 'str'>\n")
check("formal: int strips whitespace", value('int(" 42 ")') == "42")
check("formal: int('-7')", value('int("-7")') == "-7")
check("formal: int('2.5') ValueError", run_err('int("2.5")')[1] == "ValueError: invalid literal for int() with base 10: '2.5'")
check("formal: float forms", value('(float("7.5"), float("1e3"))') == "(7.5, 1000.0)")
text("formal: print sep end", run('print(1, 2, 3, sep=", ", end=".\\n")\nprint("done")'), "1, 2, 3.\ndone\n")
text("formal: print default", run('print("a", 1, 2.5)'), "a 1 2.5\n")
for e, want in [('f"{1234567.891:,.2f}"', "'1,234,567.89'"), ('f"{42:>5}|"', "'   42|'"), ('f"{3:03d}"', "'003'"),
                ('f"{0.125:.2f}"', "'0.12'"), ('f"{2.675:.2f}"', "'2.67'"), ("(round(2.5), round(3.5))", "(2, 4)"),
                ('f"{7.5:.2f}"', "'7.50'")]:
    check("formal: " + e, value(e) == want)
from decimal import Decimal
check("formal: 2.675 stored below the tie", Decimal(2.675) < Decimal("2.675"))
# plain and mistakes
check("plain: '3' + '4'", value('"3" + "4"') == "'34'")
check("mistakes: int(float('2.5'))", value('int(float("2.5"))') == "2")
check("mistakes: str + number", (run_err('total = 5\nprint("Total:" + total)')[1] or "").startswith("TypeError"))
text("mistakes: print with comma", run('total = 5\nprint("Total:", total)\nprint(f"Total: {total}")'), "Total: 5\nTotal: 5\n")
text("lab: sep and end", run('print("a", "b", sep="")\nprint("x", end=" ")\nprint("y")'), "ab\nx y\n")
