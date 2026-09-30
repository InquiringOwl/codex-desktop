# content: 4f05da64cedf
# pa-pythagorean: The Pythagorean Theorem

# formal: 3,4,5 and 5,12,13 are triples
check("formal", 3**2 + 4**2 == 5**2 and 5**2 + 12**2 == 13**2, "triples")

# example: ladder 20, foot 5
bb = symbols('bb', positive=True)
same("example", 20**2 - 5**2, 375)
solves("example", Eq(5**2 + bb**2, 20**2), bb, {5*sqrt(15)}, domain=Interval(0, oo))
same("example", sqrt(375), 5*sqrt(15))
check("example", abs(float(sqrt(375)) - 19.4) < 0.05, f"{float(sqrt(375))}")
check("example", abs(float(sqrt(375)) - 19.36) < 0.005, f"{float(sqrt(375))}")
check("example", abs(19.36**2 - 374.8) < 0.05, f"{19.36**2}")

# practice
same("practice[0]", sqrt(9**2 + 12**2), 15)
same("practice[0]", 9**2 + 12**2, 225)
same("practice[1]", sqrt(13**2 - 5**2), 12)
same("practice[1]", 13**2 - 5**2, 144)
same("practice[2]", 8**2 + 15**2, 289)
check("practice[2]", 8**2 + 15**2 == 17**2, "8,15,17 right")
same("practice[2]", 6**2 + 7**2, 85)
same("practice[2]", 9**2, 81)
check("practice[2]", 6**2 + 7**2 > 9**2, "6,7,9 acute")
same("practice[3]", 100**2 + 64**2, 14096)
check("practice[3]", abs(float(sqrt(14096)) - 118.7) < 0.05, f"{float(sqrt(14096))}")
