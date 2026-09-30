# content: 526372ce6d03
# pa-translate: Translating Words into Algebra
R = Rational
# formal: twice the sum vs twice x plus 3 differ
check("formal", expand(2*(x + 3)) != 2*x + 3, "should differ")

# example: 65 + 90h at h = 2.5
bill = 65 + 90*h
same("example", 90*R(5, 2), 225)
same("example", bill.subs(h, R(5, 2)), 290)
same("example", 2*90 + R(1, 2)*90 + 65, 290)

# practice[0]: the sum of a number and 8
same("practice[0]", Add(x, 8), x + 8)
check("practice[0]", (x + 8).subs(x, 2) == 10, "sum of 2 and 8 is 10")
# practice[1]: 7 less than three times a number -> 3x - 7
check("practice[1]", (3*x - 7).subs(x, 5) == 3*5 - 7 == 8, "7 less than 15 is 8")
# practice[2]: product of 4 and (x - 2)
same("practice[2]", Mul(4, x - 2), 4*(x - 2))
check("practice[2]", (4*(x - 2)).subs(x, 5) == 12, "4*(5-2)=12")
# practice[3]: 2x - 5 = 17, x = 11
same("practice[3]", 2*11 - 5, 17)
solves("practice[3]", Eq(2*x - 5, 17), x, {11})
