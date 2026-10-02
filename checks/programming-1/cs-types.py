# content: 339c23b11452
from cs import *
check("traces", traces_current("cs-types"))
text("example", run("""
a = 7 / 2
b = 7 // 2
c = 7 % 2
d = -7 // 2
e = 2 ** 10
f = 0.1 + 0.2
print(a, b, c, d, e)
print(type(a), type(b))
print(f, f == 0.3)
print(type("7"), type(True))
"""), "3.5 3 1 -4 1024\n<class 'float'> <class 'int'>\n0.30000000000000004 False\n<class 'str'> <class 'bool'>\n")
text("practice[0]", run('print(2 + 3 * 4 ** 2)'), "50\n")
text("practice[1]", run("""
print(17 // 5, 17 % 5, 17 / 5)
print(type(10 / 5))
"""), "3 2 3.4\n<class 'float'>\n")
check("practice[1]: 10 / 5 is 2.0", value('10 / 5') == "2.0")
text("practice[2]", run("""
print(-7 // 2, -7 % 2)
print(-2 ** 2, (-2) ** 2)
"""), "-4 1\n-4 4\n")
out, err = run_err("""
x = 3 + 4.0
s = "3" + "4"
r = "ab" * 3
print(x, s, r)
n = 3 + "4"
""")
text("practice[3]", out + err, "7.0 34 ababab\nTypeError: unsupported operand type(s) for +: 'int' and 'str'")
# formal
for e, want in [("7 / 2", "3.5"), ("7 // 2", "3"), ("-7 // 2", "-4"), ("-7 % 2", "1"), ("2 ** 10", "1024"), ("0.1 + 0.2", "0.30000000000000004"),
                ("-2 ** 2", "-4"), ("2 ** 3 ** 2", "512"), ("type(6 / 3).__name__", "'float'"), ("type(2 + 1.0).__name__", "'float'"),
                ("type(7 % 2).__name__", "'int'"), ("7 % -2", "-1"), ("'ab' + 'cd'", "'abcd'"), ("'ab' * 3", "'ababab'"),
                ("2 ** 100", str(2 ** 100)), ("int(-7 / 2)", "-3"), ("'Total: ' + str(5)", "'Total: 5'"), ("0.1 + 0.2 == 0.3", "False")]:
    check("formal: " + e, value(e) == want)
check("formal: a = b*(a//b) + a%b", all(a == b * (a // b) + a % b for a in range(-20, 21) for b in (-3, -2, 2, 3, 5)))
check("formal: % has sign of b", all((a % b == 0) or ((a % b > 0) == (b > 0)) for a in range(-20, 21) for b in (-3, 2, 5)))
check("formal: 10 - 4 - 3 groups left", value("10 - 4 - 3") == "3")
check("mistakes: str + int", run_err('"Total: " + 5')[1].startswith("TypeError"))
