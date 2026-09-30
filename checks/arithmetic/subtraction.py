# content: d9414d730e44
# subtraction: Subtraction
check("formal", (5 - 3) != (3 - 5) and (10 - 4) - 3 != 10 - (4 - 3), "not commutative/associative")

# example: 603 - 248
check("example", 5*100 + 9*10 + 13 == 603, "regrouped 5 9 13 = 603")
same("example", 13 - 8, 5); same("example", 9 - 4, 5); same("example", 5 - 2, 3)
same("example", 603 - 248, 355)
same("example", 355 + 248, 603)
# practice[0]
check("practice[0]", 7*10 + 12 == 82, "regroup 82")
same("practice[0]", 12 - 7, 5); same("practice[0]", 7 - 3, 4)
same("practice[0]", 82 - 37, 45); same("practice[0]", 45 + 37, 82)
# practice[1]
check("practice[1]", 6*100 + 9*10 + 10 == 700, "regroup 700")
same("practice[1]", 10 - 4, 6); same("practice[1]", 9 - 6, 3); same("practice[1]", 6 - 2, 4)
same("practice[1]", 700 - 264, 436)
# practice[2]
check("practice[2]", 4*1000 + 9*100 + 9*10 + 13 == 5003, "regroup 5003")
same("practice[2]", 13 - 7, 6); same("practice[2]", 9 - 4, 5); same("practice[2]", 9 - 8, 1); same("practice[2]", 4 - 1, 3)
same("practice[2]", 5003 - 1847, 3156); same("practice[2]", 3156 + 1847, 5003)
# practice[3]
same("practice[3]", 3000 - 1762, 1238); same("practice[3]", 1238 + 1762, 3000)
