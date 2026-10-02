# content: 6bff302d1dba
from cs import *
check("traces", traces_current("cs-programs"))
out, err = run_err("""
print("start")
total = 10
print(total)
print(totl)
print("never printed")
""")
text("example", out + err, "start\n10\nNameError: name 'totl' is not defined")
text("practice[0]", run("""
print("Hello, world!")
print(2 + 3)
"""), "Hello, world!\n5\n")
text("practice[1]", run("""
print("first")
# print("second")
print("third")
print(1 + 1)
"""), "first\nthird\n2\n")
text("practice[2]", run("""
print("2 + 3")
print(2 + 3)
"""), "2 + 3\n5\n")
out, err = run_err("""
print("A")
print(B)
print("C")
""")
text("practice[3]", out + err, "A\nNameError: name 'B' is not defined")
text("formal: string literal prints without quotes", run('print("Hi")'), "Hi\n")
text("formal: NameError message", run_err('print(Hi)')[1], "NameError: name 'Hi' is not defined")
out, err = run_err('print("never")\nprint("x"')
check("formal: syntax error means nothing runs", out == "" and err is not None and err.startswith("SyntaxError"))
