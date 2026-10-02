# @program alias
xs = [1, 2, 3]
ys = xs
zs = xs[:]
ys.append(4)
print(xs)
print(zs)
print(xs is ys, xs is zs)
# @program in-function
def add_append(xs):
    xs.append(4)

def add_plus(xs):
    xs = xs + [4]

a = [1, 2, 3]
add_append(a)
b = [1, 2, 3]
add_plus(b)
print(a)
print(b)
# @program append-none
xs = [3, 1, 2]
ys = xs.append(5)
print(xs)
print(ys)
# @program sort-sorted
xs = [3, 1, 2]
ys = sorted(xs)
print(xs, ys)
xs.sort()
print(xs)
# @program shallow
a = [[1], [2]]
b = a[:]
b[0].append(9)
b[1] = [7]
print(a)
print(b)
