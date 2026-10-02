# @program linear
xs = [7, 3, 9, 4, 6]
target = 4
comps = 0
found = -1
for i in range(len(xs)):
    comps += 1
    if xs[i] == target:
        found = i
        break
print(found, comps)
# @program selection
xs = [5, 2, 8, 1, 4]
comps = 0
for i in range(len(xs) - 1):
    m = i
    for j in range(i + 1, len(xs)):
        comps += 1
        if xs[j] < xs[m]:
            m = j
    xs[i], xs[m] = xs[m], xs[i]
print(xs, comps)
# @program insertion
xs = [5, 2, 8, 1, 4]
comps = 0
for i in range(1, len(xs)):
    key = xs[i]
    j = i - 1
    while j >= 0:
        comps += 1
        if xs[j] <= key:
            break
        xs[j + 1] = xs[j]
        j -= 1
    xs[j + 1] = key
print(xs, comps)
