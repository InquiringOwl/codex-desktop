# content: b4ec5724e609
from cs import *
import os, sys, tempfile
check("traces", traces_current("cs-modules"))
text("example", run("""
import math
import random

random.seed(3)
roll = random.randint(1, 6)
print(math.sqrt(49), math.floor(3.99))
print(roll, math.pi > 3)
"""), "7.0 3\n2 True\n")
text("practice[0]", run("""
from math import sqrt, pi
print(sqrt(25), round(pi, 3))
"""), "5.0 3.142\n")
text("practice[1]", run("""
import math as m
print(m.ceil(2.1), m.floor(-0.5), m.ceil(-0.5))
"""), "3 -1 0\n")
out, err = run_err("""
import math
print(math.sqrt(16))
print(sqrt(16))
"""); text("practice[2]", out + err, "4.0\nNameError: name 'sqrt' is not defined")
text("practice[3]", run("""
import random

random.seed(7)
first = [random.randint(1, 10) for _ in range(4)]
random.seed(7)
again = [random.randint(1, 10) for _ in range(4)]
print(first)
print(first == again)
"""), "[6, 3, 7, 1]\nTrue\n")
d = tempfile.mkdtemp()
open(os.path.join(d, "cxhelper.py"), "w").write('print("loading", __name__)\nX = 7\n')
sys.path.insert(0, d)
text("formal: import runs once, __name__ is module name", run("import cxhelper\nimport cxhelper\nprint(cxhelper.X)\n"), "loading cxhelper\n7\n")
check("formal: __name__ is __main__ when run", run("print(__name__)\n") == "__main__\n")
check("formal: import stores in sys.modules", value("sys.modules['math'] is math", "import math, sys") == "True")
check("formal: as binds alias only", "NameError" in (run_err("import math as k\nprint(k.pi)\nprint(math.pi)\n")[1] or ""))
check("formal: from import does not bind module", "NameError" in (run_err("from math import sqrt\nprint(math.pi)\n")[1] or ""))
check("formal: sqrt float, floor/ceil int", value("(type(math.sqrt(16)).__name__, math.floor(-2.7), math.ceil(-0.5), type(math.floor(2.7)).__name__)", "import math") == "('float', -3, 0, 'int')")
check("formal: randint inclusive", value("sorted(set(random.randint(1, 3) for _ in range(500)))", "import random\nrandom.seed(0)") == "[1, 2, 3]")
check("formal: same seed same sequence", value("a == b", "import random\nrandom.seed(5)\na = [random.random() for _ in range(5)]\nrandom.seed(5)\nb = [random.random() for _ in range(5)]") == "True")
check("lab: seed(1) randint gives 2 5 2", run("import random\nrandom.seed(1)\na = random.randint(1, 6)\nb = random.randint(1, 6)\nrandom.seed(1)\nprint(a, b, random.randint(1, 6))\n") == "2 5 2\n")
check("mistake: int(-2.7) toward zero", value("int(-2.7)") == "-2")
