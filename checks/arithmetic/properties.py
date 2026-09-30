# content: 471a7d63cd08
# properties: Laws of Arithmetic
same("formal", a*(b + c), a*b + a*c)
same("example", 8*(50 - 1), 8*50 - 8*1)
same("example", 8*50 - 8, 392)
same("example", 8*49, 392)
check("practice[0]", 5 + (3 + 9) == (5 + 3) + 9, "associative example holds")
skip("practice[0]", "naming the law (associative) is vocabulary; numeric identity checked above")
same("practice[1]", 6*10 + 6*4, 84); same("practice[1]", 6*14, 84)
same("practice[2]", (25*4)*17, 1700); same("practice[2]", 25*17*4, 1700)
same("practice[3]", 8*100 - 8*3, 776); same("practice[3]", 8*97, 776)
