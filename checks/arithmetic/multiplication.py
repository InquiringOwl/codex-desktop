# content: acb1ce33beeb
# multiplication: Multiplication
same("example", 20*40, 800); same("example", 20*7, 140)
same("example", 3*40, 120); same("example", 3*7, 21)
same("example", 800 + 140 + 120 + 21, 1081)
same("example", 23*47, 1081)
same("example", 20*50, 1000)
same("practice[0]", 7*8, 56)
same("practice[1]", 30*5 + 6*5, 180); same("practice[1]", 36*5, 180)
same("practice[2]", 40*20 + 40*5 + 8*20 + 8*5, 1200); same("practice[2]", 48*25, 1200)
check("practice[2]", (40*20, 40*5, 8*20, 8*5) == (800, 200, 160, 40), "partial products")
same("practice[3]", 124*30, 3720); same("practice[3]", 124*7, 868)
same("practice[3]", 124*37, 4588)
