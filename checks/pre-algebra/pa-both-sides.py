# content: ed5811aab33c
# pa-both-sides: Equations with Variables on Both Sides
solves("formal", Eq(2*x + 1, 2*x + 1), x, S.Reals)
solves("formal", Eq(2*x + 1, 2*x + 3), x, S.EmptySet)

# example: gyms
m_ = symbols('m_', real=True)
solves("example", Eq(40 + 25*m_, 100 + 15*m_), m_, {6})
same("example", expand(40 + 25*m_ - 15*m_), 40 + 10*m_)
solves("example", Eq(10*m_, 60), m_, {6})
same("example", 40 + 25*6, 190); same("example", 100 + 15*6, 190)
check("example", all(100 + 15*k < 40 + 25*k for k in range(7, 50)), "Gym B cheaper after 6 months")
# practice[0]
solves("practice[0]", Eq(5*x - 3, 2*x + 12), x, {5})
solves("practice[0]", Eq(3*x - 3, 12), x, {5})
same("practice[0]", 5*5 - 3, 22); same("practice[0]", 2*5 + 12, 22)
# practice[1]
same("practice[1]", expand(7 - 2*(x - 3)), 13 - 2*x)
solves("practice[1]", Eq(7 - 2*(x - 3), 3*x - 2), x, {3})
same("practice[1]", 7 - 2*(3 - 3), 7); same("practice[1]", 3*3 - 2, 7)
# practice[2]
same("practice[2]", expand(3*(x + 2)), 3*x + 6)
solves("practice[2]", Eq(3*(x + 2), 3*x + 5), x, S.EmptySet)
# practice[3]
same("practice[3]", expand(2*(3*x - 4) + 1), 6*x - 7)
solves("practice[3]", Eq(2*(3*x - 4) + 1, 6*x - 7), x, S.Reals)
