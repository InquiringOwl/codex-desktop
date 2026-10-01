# content: 39a3a544b083
def samev(label, g, e): same(label, tuple(g), tuple(e))
# mech-vector-products: Dot & Cross Products
d = pi/180
# example: sled
near("example", 120*50*cos(25*d), 5.44e3)
Fv = Matrix([120*cos(25*d), 120*sin(25*d)]); dv = Matrix([50, 0])
near("example", Fv[0], 108.8); near("example", Fv[1], 50.7)
near("example", Fv.dot(dv), 5.44e3)
check("example", 0 < N(Fv.dot(dv)) < 6000, "between 0 and F d")

# practice[0]
A = Matrix([3, 4, 0]); B = Matrix([4, -3, 0])
same("practice[0]", A.dot(B), 0)
samev("practice[0]", A.cross(B), Matrix([0, 0, -25]))
same("practice[0]", A.norm()*B.norm(), 25)

# practice[1]
A = Matrix([1, 2, 2]); B = Matrix([3, 0, 4])
same("practice[1]", A.dot(B), 11); same("practice[1]", A.norm(), 3); same("practice[1]", B.norm(), 5)
near("practice[1]", acos(Rational(11, 15))/d, 42.8)

# practice[2]
A = Matrix([1, 2, 3]); B = Matrix([4, 5, 6]); C = A.cross(B)
samev("practice[2]", C, Matrix([-3, 6, -3]))
same("practice[2]", A.dot(C), 0); same("practice[2]", B.dot(C), 0)

# practice[3]
near("practice[3]", 0.250*80.0*sin(60*d), 17.3)
near("practice[3]", 0.250*80.0, 20.0)
r = Matrix([0.25, 0, 0]); samev("practice[3]", r.cross(Matrix([80, 0, 0])), Matrix([0, 0, 0]))
