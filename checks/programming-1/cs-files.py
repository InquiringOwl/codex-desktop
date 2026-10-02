# content: 8392ac4aaf99
from cs import *
import os, tempfile, contextlib
check("traces", traces_current("cs-files"))

@contextlib.contextmanager
def folder(files):
    """A temp folder holding the given files {name: text}; the page's code runs inside it."""
    old = os.getcwd()
    with tempfile.TemporaryDirectory() as d:
        for name, body in files.items():
            with open(os.path.join(d, name), "w") as f:
                f.write(body)
        os.chdir(d)
        try:
            yield d
        finally:
            os.chdir(old)

with folder({"temps.txt": "18\n21\n24\n"}):
    text("example", run("""
total = 0
count = 0
with open("temps.txt") as f:
    for line in f:
        total += int(line)
        count += 1
print(count, total / count)
"""), "3 21.0\n")
    check("example: first line keeps newline", run("with open('temps.txt') as f:\n    print(repr(next(iter(f))))") == "'18\\n'\n")

with folder({"names.txt": "Ann\nBo\n"}):
    text("practice[0]", run("""
with open("names.txt") as f:
    for line in f:
        print(line)
"""), "Ann\n\nBo\n\n")
    text("mistakes: print(line, end='')", run("with open('names.txt') as f:\n    for line in f:\n        print(line, end='')"), "Ann\nBo\n")

text("practice[1]", run("""
for s in ["4", "x", "6"]:
    try:
        n = int(s)
    except ValueError:
        print("bad", s)
    else:
        print("ok", n * 2)
    finally:
        print("next")
"""), "ok 8\nnext\nbad x\nnext\nok 12\nnext\n")

with folder({}):
    text("practice[2]", run("""
with open("log.txt", "w") as f:
    f.write("start\\n")
with open("log.txt", "w") as f:
    f.write("again\\n")
with open("log.txt", "a") as f:
    f.write("end\\n")
with open("log.txt") as f:
    print(f.read(), end="")
"""), "again\nend\n")

with folder({"scores.txt": "90\n85\n77\n"}):
    text("practice[3]", run("""
def read_total(name):
    try:
        with open(name) as f:
            total = 0
            for line in f:
                total += int(line)
            return total
    except FileNotFoundError:
        return 0

print(read_total("scores.txt"), read_total("nope.txt"))
"""), "252 0\n")

# formal
with folder({"a.txt": "x\ny"}):
    check("formal: missing file in r mode -> FileNotFoundError", run_err("open('nope.txt')")[1].startswith("FileNotFoundError"))
    check("formal: default mode is r", run("print(open('a.txt').mode)") == "r\n")
    check("formal: last line has no newline if file does not end with one", run("with open('a.txt') as f:\n    print(list(f))") == "['x\\n', 'y']\n")
    check("formal: read returns the whole file", run("with open('a.txt') as f:\n    print(repr(f.read()))") == "'x\\ny'\n")
    check("formal: w empties", run("open('a.txt', 'w').close()\nprint(repr(open('a.txt').read()))") == "''\n")
    check("formal: w creates", run("with open('new.txt', 'w') as f:\n    print(f.write('hi'))\nprint(repr(open('new.txt').read()))") == "2\n'hi'\n")
    check("formal: a appends", run("with open('new.txt', 'a') as f:\n    f.write('!')\nprint(open('new.txt').read())") == "hi!\n")
    check("formal: with closes even after exception", run("try:\n    with open('new.txt') as f:\n        int('z')\nexcept ValueError:\n    pass\nprint(f.closed)") == "True\n")
    check("mistakes: write needs str", run_err("with open('n.txt', 'w') as f:\n    f.write(5)")[1].startswith("TypeError"))
check("formal: int ignores whitespace", value('int(" 90\\n")') == "90")
check("formal: int on non-literal -> ValueError", run_err("int('oops\\n')")[1].startswith("ValueError: invalid literal for int()"))
check("formal: try/except/else/finally order", run("try:\n    x = int('7')\nexcept ValueError:\n    print('bad')\nelse:\n    print('ok', x)\nfinally:\n    print('done')") == "ok 7\ndone\n")
check("formal: rest of try block skipped", run("try:\n    int('q')\n    print('no')\nexcept ValueError:\n    print('yes')") == "yes\n")
check("formal: as e binds the exception", run("try:\n    int('q')\nexcept ValueError as e:\n    print(type(e).__name__)") == "ValueError\n")
out, err = run_err("try:\n    1 / 0\nexcept ValueError:\n    print('no')\nfinally:\n    print('cleanup')")
check("formal: unmatched propagates after finally", out == "cleanup\n" and err.startswith("ZeroDivisionError"))
