# @program table
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()
print("done")
# @program stars
for row in range(1, 5):
    line = ""
    for col in range(row):
        line = line + "*"
    print(line)
# @program count-grid
count = 0
for i in range(3):
    for j in range(4):
        count = count + 1
print(count)
# @program count-triangle
count = 0
for i in range(4):
    for j in range(i):
        count = count + 1
print(count)
# @program order
for i in range(2):
    for j in range(3):
        print(i, j)
