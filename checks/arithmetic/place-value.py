# content: 6229d3f9045f
# place-value: Place Value & Base Ten
check("example", [int(ch) for ch in "4306"] == [4, 3, 0, 6], "digits")
same("example", 4*1000 + 3*100 + 0*10 + 6*1, 4306)
check("example", (4306 // 10) % 10 == 0, "tens digit is 0")
check("practice[0]", (3782 // 100) % 10 == 7, "7 is in hundreds place")
same("practice[0]", 7*100, 700)
same("practice[1]", 5*1000 + 0*100 + 4*10 + 9*1, 5049)
check("practice[1]", [int(ch) for ch in "5049"] == [5, 0, 4, 9], "digits of 5049")
same("practice[2]", 3*1000 + 14*100 + 2*10 + 5, 4425)
same("practice[3]", 4560 // 10, 456)
check("practice[3]", 4560 % 10 == 0, "exact number of tens")
