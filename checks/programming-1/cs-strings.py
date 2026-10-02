# content: dd8c71575831
from cs import *
check("traces", traces_current("cs-strings"))
text("example", run("""
s = "python"
a = s[0]
b = s[-1]
c = s[1:4]
d = s[::-1]
e = s[2:100]
print(a, b, c, d, e)
"""), "p n yth nohtyp thon\n")
text("practice[0]", run("""
s = "computer"
print(s[0], s[3], s[-2])
"""), "c p e\n")
text("practice[1]", run("""
s = "computer"
print(s[2:5])
print(s[:3])
print(s[5:])
"""), "mpu\ncom\nter\n")
check("practice[1]: s[:k] + s[k:] == s", all("computer"[:k] + "computer"[k:] == "computer" for k in range(-12, 12)))
text("practice[2]", run("""
name = "  Ada Lovelace "
clean = name.strip()
print(clean.upper())
print(clean.replace("a", "@"))
print(len(name), len(clean))
"""), "ADA LOVELACE\nAd@ Lovel@ce\n15 12\n")
out, err = run_err("""
word = "level"
print(word == word[::-1])
s = "abc"
s[0] = "x"
""")
text("practice[3]", out + err, "True\nTypeError: 'str' object does not support item assignment")
# formal rules
S = "python"
check("formal: negative index i means len(s)+i", all(S[i] == S[len(S) + i] for i in range(-len(S), 0)))
out, err = run_err("s = 'abc'\ns[3]\n")
check("formal: IndexError message", err == "IndexError: string index out of range")
check("formal: a character is a string of length 1", all(isinstance(c, str) and len(c) == 1 for c in S))
check("formal: slices never raise and clip", value("'python'[2:100]") == "'thon'" and value("'python'[-100:2]") == "'py'" and value("'python'[10:20]") == "''")
check("formal: len(s[a:b]) == b - a", all(len(S[a:b]) == b - a for a in range(len(S) + 1) for b in range(a, len(S) + 1)))
check("formal: slice stops before b", all(S[a:b] == "".join(S[i] for i in range(a, b)) for a in range(7) for b in range(7)))
check("formal: negative step with missing ends reverses", value("'python'[::-1]") == "'nohtyp'" and value("'python'[::2]") == "'pto'")
out, err = run_err("s = 'cat'\ns[0] = 'b'\n")
check("formal: item assignment TypeError", err == "TypeError: 'str' object does not support item assignment")
check("formal: methods return new strings", run("s = 'hello'\nt = s.upper()\nprint(s, t)\n") == "hello HELLO\n" and run("s = 'hello'\ns.upper()\nprint(s)\n") == "hello\n")
check("formal: find returns -1 if absent", value("'python'.find('th')") == "2" and value("'python'.find('z')") == "-1")
check("formal: + * in", value("'ab' + 'cd'") == "'abcd'" and value("'ab' * 3") == "'ababab'" and value("'yth' in 'python'") == "True")
check("formal: for visits characters", run("for ch in 'abc':\n    print(ch)\n") == "a\nb\nc\n")
check("lab: vowels in banana", run("word = 'banana'\ncount = 0\nfor ch in word:\n    if ch in 'aeiou':\n        count += 1\nprint(count)\n") == "3\n")
check("mistakes: s[len(s)] IndexError", run_err("s = 'abc'\nprint(s[len(s)])\n")[1].startswith("IndexError"))
check("mistakes: rebuild string", value("'C' + 'cat'[1:]") == "'Cat'")
check("unlocksWhy: lists allow item assignment", run("xs = [1, 2]\nxs[0] = 5\nprint(xs)\n") == "[5, 2]\n")
