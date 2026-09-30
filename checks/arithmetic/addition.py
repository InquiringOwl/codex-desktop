# content: 656b6c5077a2
# addition: Addition

# formal: commutativity / associativity / identity
check("formal", simplify((a + b) - (b + a)) == 0 and simplify(((a + b) + c) - (a + (b + c))) == 0 and a + 0 == a, "laws fail")

# example: 478 + 356
same("example", 8 + 6, 14)
same("example", 1 + 7 + 5, 13)
same("example", 1 + 4 + 3, 8)
same("example", 478 + 356, 834)
same("example", 500 + 400, 900)
check("example", round(478, -2) == 500 and round(356, -2) == 400, "rounded addends")

# practice[0]
same("practice[0]", 6 + 7, 13)
same("practice[0]", 1 + 3 + 4, 8)
same("practice[0]", 36 + 47, 83)

# practice[1]
same("practice[1]", 9 + 7, 16)
same("practice[1]", 1 + 0 + 8, 9)
same("practice[1]", 5 + 2, 7)
same("practice[1]", 509 + 287, 796)

# practice[2]
same("practice[2]", 8 + 6, 14)
same("practice[2]", 1 + 4 + 9, 14)
same("practice[2]", 1 + 7 + 3, 11)
same("practice[2]", 1 + 2 + 1, 4)
same("practice[2]", 2748 + 1396, 4144)

# practice[3]
same("practice[3]", 1875 + 2409, 4284)
same("practice[3]", 4284 + 638, 4922)
same("practice[3]", 1875 + 2409 + 638, 4922)
