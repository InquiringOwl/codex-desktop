# @program trap
grid = [[0] * 3] * 3
grid[0][0] = 5
print(grid)
print(grid[0] is grid[1])
# @program comp
grid = [[0] * 3 for r in range(3)]
grid[0][0] = 5
print(grid)
print(grid[0] is grid[1])
# @program sums
grid = [[3, 1, 4], [1, 5, 9]]
for r in range(len(grid)):
    total = 0
    for c in range(len(grid[0])):
        total += grid[r][c]
    print("row", r, total)
for c in range(len(grid[0])):
    total = 0
    for r in range(len(grid)):
        total += grid[r][c]
    print("col", c, total)
# @program p-trap
t = [[0] * 2] * 2
t[1][0] = 7
print(t)
# @program p-index
g = [[1, 2, 3], [4, 5, 6]]
print(g[1][0], g[0][2], len(g), len(g[0]))
# @program p-row
m = [[1, 2], [3, 4]]
row = m[0]
row.append(9)
print(m)
