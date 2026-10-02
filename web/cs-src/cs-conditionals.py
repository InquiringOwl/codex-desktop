# @program grade-92
# @input 92
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
# @program grade-85
# @input 85
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
# @program grade-59
# @input 59
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
# @program nested
t = 18
if t > 25:
    print("hot")
else:
    if t > 15:
        print("mild")
    else:
        print("cold")
print("done")
# @program elif
t = 18
if t > 25:
    print("hot")
elif t > 15:
    print("mild")
else:
    print("cold")
print("done")
# @program two-ifs
t = 30
if t > 25:
    print("hot")
if t > 15:
    print("mild")
else:
    print("cold")
print("done")
# @program order
x = 85
if x >= 70:
    print("C")
elif x >= 80:
    print("B")
else:
    print("F")
# @program falls
x = 7
if x > 5:
    print("a")
if x > 3:
    print("b")
else:
    print("c")
# @program empty
name = ""
if name:
    print("hello", name)
else:
    print("no name")
