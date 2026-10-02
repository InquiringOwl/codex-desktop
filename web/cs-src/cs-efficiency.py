# @program lin4
xs = [7, 3, 9, 4]
target = 5
comps = 0
for i in range(len(xs)):
    comps += 1
    if xs[i] == target:
        break
print("n =", len(xs), "comparisons:", comps)
# @program lin8
xs = [7, 3, 9, 4, 8, 1, 6, 2]
target = 5
comps = 0
for i in range(len(xs)):
    comps += 1
    if xs[i] == target:
        break
print("n =", len(xs), "comparisons:", comps)
# @program lin16
xs = [7, 3, 9, 4, 8, 1, 6, 2, 9, 3, 7, 1, 8, 4, 6, 2]
target = 5
comps = 0
for i in range(len(xs)):
    comps += 1
    if xs[i] == target:
        break
print("n =", len(xs), "comparisons:", comps)
# @program pairs
n = 4
steps = 0
for i in range(n):
    for j in range(n):
        steps += 1
print(n, "items:", steps, "pairs")
# @program half
n = 4
steps = 0
for i in range(n):
    for j in range(i + 1, n):
        steps += 1
print(n, "items:", steps, "pairs")
# @program p-count
count = 0
for i in range(5):
    for j in range(5):
        count += 1
print(count)
# @program p-half
count = 0
for i in range(5):
    for j in range(i + 1, 5):
        count += 1
print(count)
# @program p-grow
for n in [10, 20]:
    print(n ** 2, 2 ** n)
