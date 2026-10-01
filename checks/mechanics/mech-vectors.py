# content: a2b913b01ebe
def samev(label, g, e): same(label, tuple(g), tuple(e))
# mech-vectors: Scalars & Vectors: Graphical Addition
# example: 120 m east + 50.0 m north
R = sqrt(120**2 + 50**2)
same("example", R, 130)
near("example", atan2(50, 120)*180/pi, 22.6)
check("example", 120 - 50 <= R <= 120 + 50, "triangle inequality")
Rv = Matrix([120, 50]); samev("example", -Rv, Matrix([-120, -50]))   # home: south-west, same angle

# practice[0]: classification (vocabulary)
skip("practice[0]", "vocabulary question, nothing to compute")

# practice[1]
same("practice[1]", 5 + 3, 8); same("practice[1]", 5 - 3, 2)
th = symbols('th', real=True)
Rm = sqrt((5 + 3*cos(th))**2 + (3*sin(th))**2)
same("practice[1]", simplify(Rm.subs(th, 0)), 8); same("practice[1]", simplify(Rm.subs(th, pi)), 2)

# practice[2]: A = 6 north (0,6), B = 8 east (8,0)
A = Matrix([0, 6]); B = Matrix([8, 0])
same("practice[2]", (A + B).norm(), 10); same("practice[2]", (A - B).norm(), 10)
near("practice[2]", atan2(6, 8)*180/pi, 36.9)            # A+B north of east
D = A - B; check("practice[2]", D[0] < 0 and D[1] > 0, "A-B points north of west")
near("practice[2]", atan2(D[1], -D[0])*180/pi, 36.9)

# practice[3]
v1, v2 = Matrix([3, 0]), Matrix([0, 4]); v3 = -(v1 + v2)
same("practice[3]", v3.norm(), 5)
near("practice[3]", atan2(-v3[1], -v3[0])*180/pi, 53.1)   # angle south of west
check("practice[3]", Abs(5 - 3) > 0, "two unequal vectors cannot cancel")
