# @program word-count
words = ["to", "be", "or", "not", "to", "be"]
counts = {}
for w in words:
    if w in counts:
        counts[w] += 1
    else:
        counts[w] = 1
print(counts)
print(counts.get("is", 0))
# @program set-ops
a = {1, 2, 3, 3, 2}
b = {3, 4, 5}
print(a, len(a))
print(a | b)
print(a & b)
print(a - b)
nums = [4, 1, 4, 2, 1]
print(sorted(set(nums)))
# @program tuple-assign
t = (1, 2, 3)
x, y, z = t
print(x + z)
t[0] = 9
print(t)
# @program key-lookup
ages = {"ana": 20, "ben": 19}
print(ages.get("cy"))
print(ages["cy"])
# @program list-key
d = {(1, 2): "point"}
print(d[(1, 2)])
d[[3, 4]] = "list"
print(d)
