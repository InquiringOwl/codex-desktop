# @program read
# @file scores.txt
# | 90
# |  85
# | 77
total = 0
with open("scores.txt") as f:
    for line in f:
        print(repr(line))
        total += int(line)
print("total", total)
# @program skip
# @file scores.txt
# | 90
# | oops
# | 77
total = 0
with open("scores.txt") as f:
    for line in f:
        try:
            n = int(line)
        except ValueError:
            print("skip", repr(line.strip()))
        else:
            total += n
print("total", total)
# @program missing
try:
    f = open("missing.txt")
    print("opened")
except FileNotFoundError as e:
    print("error:", e)
finally:
    print("done")
# @program p-order
try:
    x = int("7")
except ValueError:
    print("bad")
else:
    print("ok", x)
finally:
    print("done")
# @program p-write
with open("log.txt", "w") as f:
    f.write("a\n")
with open("log.txt", "a") as f:
    f.write("b\n")
with open("log.txt") as f:
    print(f.read().split())
# @program p-len
# @file names.txt
# | Ann
# | Bo
with open("names.txt") as f:
    for line in f:
        print(len(line), len(line.strip()))
