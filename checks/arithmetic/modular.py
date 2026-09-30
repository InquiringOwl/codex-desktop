# content: 8d13901135ee
# modular: Remainders & Clock Arithmetic
total = 19 + 58
same("example", total, 77)
check("example", divmod(total, 24) == (3, 5), "77 = 24*3 + 5")
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
check("example", days[(days.index("Fri") + total // 24) % 7] == "Mon", "should arrive Monday")
same("practice[0]", 17 % 5, 2)
check("practice[1]", 8 + 50 == 58 and divmod(58, 24) == (2, 10), "58 = 24*2 + 10")
same("practice[1]", (8 + 50) % 24, 10)
same("practice[2]", Mod(-11, 4), 1)
check("practice[2]", 4*(-3) + 1 == -11, "-11 = 4(-3) + 1")
same("practice[3]", 3**20, 3486784401)
same("practice[3]", 3**20 % 10, 1)
check("practice[3]", [3**k % 10 for k in range(1, 5)] == [3, 9, 7, 1] and 20 % 4 == 0, "cycle 3,9,7,1")
