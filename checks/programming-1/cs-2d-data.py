# content: e76aebb98878
from cs import *
check("traces", traces_current("cs-2d-data"))
text("example", run("""
grid = [[3, 1, 4], [1, 5, 9]]
for row in grid:
    total = 0
    for x in row:
        total += x
    print(total)
print(grid[1][2], len(grid), len(grid[0]))
"""), "8\n15\n9 2 3\n")
text("practice[0]", run("""
g = [[2, 4], [6, 8], [1, 3]]
print(g[2][0], g[0][1])
print(len(g), len(g[0]))
"""), "1 4\n3 2\n")
text("practice[1]", run("""
g = [[2, 4], [6, 8], [1, 3]]
for c in range(len(g[0])):
    total = 0
    for r in range(len(g)):
        total += g[r][c]
    print(total)
"""), "9\n15\n")
text("practice[2]", run("""
board = [["."] * 3] * 2
board[0][1] = "X"
print(board)
"""), "[['.', 'X', '.'], ['.', 'X', '.']]\n")
text("practice[2]: fix", run("""
board = [["."] * 3 for r in range(2)]
board[0][1] = "X"
print(board)
"""), "[['.', 'X', '.'], ['.', '.', '.']]\n")
text("practice[3]", run("""
m = [[1, 2, 3], [4, 5, 6]]
t = [[m[r][c] for r in range(len(m))] for c in range(len(m[0]))]
print(t)
"""), "[[1, 4], [2, 5], [3, 6]]\n")
# formal
G = "grid = [[3, 1, 4], [1, 5, 9]]"
check("formal: grid[r][c] is (grid[r])[c]", value("grid[1][2] == (grid[1])[2] == 9", G) == "True")
check("formal: len(grid) rows, len(grid[0]) columns", value("(len(grid), len(grid[0]))", G) == "(2, 3)")
check("formal: grid[-1][-1] bottom-right", value("grid[-1][-1]", G) == "9")
check("formal: column out of range -> IndexError", run_err(G + "\nprint(grid[0][3])")[1] == "IndexError: list index out of range")
check("formal: row out of range -> IndexError", run_err(G + "\nprint(grid[2][0])")[1] == "IndexError: list index out of range")
check("formal: row = grid[0] aliases", value("grid", G + "\nrow = grid[0]\nrow[0] = 7") == "[[7, 1, 4], [1, 5, 9]]")
check("formal: for row in grid aliases", value("grid", G + "\nfor row in grid:\n    row.append(0)") == "[[3, 1, 4, 0], [1, 5, 9, 0]]")
check("formal: [[0]*3]*3 shares one row", value("g[0] is g[1] is g[2]", "g = [[0] * 3] * 3") == "True")
check("formal: comprehension makes distinct rows", value("g[0] is g[1]", "g = [[0] * 3 for r in range(3)]") == "False")
# mistakes
check("mistakes: swapped index on non-square table", run_err(G + "\nprint(grid[2][1])")[1].startswith("IndexError"))
