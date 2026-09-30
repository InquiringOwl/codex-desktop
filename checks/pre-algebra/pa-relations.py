# content: 15770a7a05b6
# pa-relations: Relations: Tables, Mappings & Graphs
dom = lambda R: {p for p, q in R}
rng = lambda R: {q for p, q in R}

# formal / practice[0]
R0 = {(-2, 3), (0, 3), (4, -1)}
same("formal", dom(R0), {-2, 0, 4})
same("formal", rng(R0), {-1, 3})
same("practice[0]", dom(R0), {-2, 0, 4})
same("practice[0]", rng(R0), {-1, 3})

# example: weather highs
temps = [68, 71, 68, 75, 71]
R = {(i + 1, tt) for i, tt in enumerate(temps)}
same("example", R, {(1, 68), (2, 71), (3, 68), (4, 75), (5, 71)})
same("example", dom(R), {1, 2, 3, 4, 5})
same("example", rng(R), {68, 71, 75})
check("example", {v: sorted(dd for dd, tt in R if tt == v) for v in (68, 71)} == {68: [1, 3], 71: [2, 5]}, "68 from days 1,3; 71 from days 2,5")
check("example", len(R) == 5 and len(dom(R)) == 5, "each day once")

# practice[1]
same("practice[1]", set(zip([1, 2, 3], [2, 4, 6])), {(1, 2), (2, 4), (3, 6)})

# practice[2]
R2 = {(v, v**2) for v in (-2, -1, 0, 1, 2)}
same("practice[2]", R2, {(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)})
same("practice[2]", rng(R2), {0, 1, 4})

# practice[3]
R3 = {(3, 1), (3, -2), (-1, 0)}
same("practice[3]", dom(R3), {-1, 3})
same("practice[3]", rng(R3), {-2, 0, 1})
check("practice[3]", [p for p in dom(R3) if len({q for pp, q in R3 if pp == p}) > 1] == [3], "input 3 has two outputs")
