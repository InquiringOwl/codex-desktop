# content: 6a63be4b859a
# g-transformations: Rigid Motions
from sympy import Point, Matrix, Line, sqrt as Sqrt
eqp = lambda l, a, b: check(l, Point(a) == Point(b), f"{a} vs {b}")
rot = {90: lambda P: Point(-P.y, P.x), 180: lambda P: Point(-P.x, -P.y), 270: lambda P: Point(P.y, -P.x)}
refl = {"x": lambda P: Point(P.x, -P.y), "y": lambda P: Point(-P.x, P.y), "y=x": lambda P: Point(P.y, P.x), "y=-x": lambda P: Point(-P.y, -P.x)}
# formal: coordinate rules agree with the geometric definitions (rotation matrices, reflection lines)
Rm = lambda deg: Matrix([[cos(deg*pi/180), -sin(deg*pi/180)], [sin(deg*pi/180), cos(deg*pi/180)]])
Q = Point(7, -3)
for d, f in rot.items():
    v = Rm(d) * Matrix([Q.x, Q.y]); eqp("formal", f(Q), Point(v[0], v[1]))
for name, L in {"x": Line((0, 0), (1, 0)), "y": Line((0, 0), (0, 1)), "y=x": Line((0, 0), (1, 1)), "y=-x": Line((0, 0), (1, -1))}.items():
    eqp("formal", refl[name](Q), Q.reflect(L))
# example
A, B, C = Point(1, 1), Point(5, 1), Point(1, 4)
A2, B2, C2 = [rot[90](P) for P in (A, B, C)]
same("example", [A2, B2, C2], [Point(-1, 1), Point(-1, 5), Point(-4, 1)])
same("example", [A.distance(B), A2.distance(B2)], [4, 4])
same("example", [B.distance(C), B2.distance(C2)], [5, 5])
same("example", [C.distance(A), C2.distance(A2)], [3, 3])
eqp("example", B2 - C2, Point(3, 4)); eqp("example", C2 - B2, Point(-3, -4))
same("example", [A.distance(Point(0, 0)), A2.distance(Point(0, 0))], [Sqrt(2), Sqrt(2)])
same("example", A.x*A2.x + A.y*A2.y, 0)
# practice[0]
v = Point(4, -3)
same("practice[0]", [P + v for P in (Point(-1, 2), Point(3, 2), Point(0, -1))], [Point(3, -1), Point(7, -1), Point(4, -4)])
# practice[1]
P = Point(2, 5)
same("practice[1]", [refl[n](P) for n in ("x", "y", "y=x", "y=-x")], [Point(2, -5), Point(-2, 5), Point(5, 2), Point(-5, -2)])
# practice[2]
A, B, C = Point(0, 0), Point(3, 0), Point(0, 4)
Ia = [rot[90](P) for P in (A, B, C)]
same("practice[2]", Ia, [Point(0, 0), Point(0, 3), Point(-4, 0)])
sides = lambda T: sorted([T[0].distance(T[1]), T[1].distance(T[2]), T[2].distance(T[0])])
same("practice[2]", sides(Ia), [3, 4, 5]); same("practice[2]", sides([A, B, C]), [3, 4, 5])
Ib = [Point(P.x, 2*P.y) for P in (A, B, C)]
eqp("practice[2]", Ib[2], Point(0, 8)); same("practice[2]", Ib[0].distance(Ib[2]), 8)
check("practice[2]", Ib[0].distance(Ib[2]) != A.distance(C), "(x, 2y) changes a length")
# practice[3]
A, A2 = Point(1, 3), Point(5, -1)
M = A.midpoint(A2); eqp("practice[3]", M, Point(3, 1))
same("practice[3]", (A2.y - A.y)/(A2.x - A.x), -1)
mirror = Line(Point(0, -2), slope=1)
check("practice[3]", Line(A, A2).is_perpendicular(mirror) and mirror.contains(M), "y = x - 2 is the perpendicular bisector")
eqp("practice[3]", A.reflect(mirror), A2)
same("practice[3]", [A.distance(M), A2.distance(M)], [2*Sqrt(2), 2*Sqrt(2)])
