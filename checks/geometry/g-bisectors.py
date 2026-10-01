# content: aac9b8eb407c
# g-bisectors: Bisectors, Medians, Altitudes & Triangle Centres
R = Rational
def circumcentre(A, B, C):
    return Triangle(A, B, C).circumcenter
# example: villages
A, B, C = Point(0, 0), Point(12, 0), Point(4, 8)
O = circumcentre(A, B, C)
same("example", (O.x, O.y), (6, 2))
check("example", Point(2, 4) == Segment(A, C).midpoint, "same point")
same("example", Line(A, C).slope, 2)
same("example", (-R(1, 2)*(x - 2) + 4).subs(x, 6), 2)
same("example", O.distance(A), 2*sqrt(10))
same("example", O.distance(B), sqrt(40))
same("example", O.distance(C), sqrt(40))
near("example", 2*sqrt(10), 6.3, 0.01)
check("example", Triangle(A, B, C).is_scalene() and all(ang < pi/2 for ang in Triangle(A, B, C).angles.values()), "acute triangle, so O is inside")
check("example", Triangle(A, B, C).encloses_point(O), "O inside the triangle")
# practice[0]
same("practice[0]", solve(Eq(3*x + 4, 5*x - 6), x), [5])
same("practice[0]", (3*x + 4).subs(x, 5), 19)
# practice[1]: centroid
A, B, C = Point(0, 0), Point(9, 0), Point(3, 6)
G = Triangle(A, B, C).centroid
same("practice[1]", (G.x, G.y), (4, 2))
M = Segment(B, C).midpoint
same("practice[1]", (M.x, M.y), (6, 3))
same("practice[1]", A.distance(G), 2*sqrt(5))
same("practice[1]", G.distance(M), sqrt(5))
same("practice[1]", A.distance(G)/G.distance(M), 2)
# practice[2]: 6-8-10 right triangle
T = Triangle(Point(0, 0), Point(6, 0), Point(0, 8))
same("practice[2]", T.inradius, 2)
same("practice[2]", T.area/(R(6 + 8 + 10, 2)), 2)
same("practice[2]", T.circumradius, 5)
check("practice[2]", T.circumcenter == Segment(Point(6, 0), Point(0, 8)).midpoint, "same point")
# practice[3]: orthocentre, centroid, circumcentre and Euler line
A, B, C = Point(0, 0), Point(6, 0), Point(2, 4)
T = Triangle(A, B, C)
H, G, O = T.orthocenter, T.centroid, T.circumcenter
same("practice[3]", Line(B, C).slope, -1)
same("practice[3]", (H.x, H.y), (2, 2))
same("practice[3]", (G.x, G.y), (R(8, 3), R(4, 3)))
same("practice[3]", (O.x, O.y), (3, 1))
same("practice[3]", ((-R(1, 2))*(3 - 1) + 2), 1)
same("practice[3]", (G.x - H.x, G.y - H.y), (R(2, 3), -R(2, 3)))
same("practice[3]", (O.x - G.x, O.y - G.y), (R(1, 3), -R(1, 3)))
check("practice[3]", Point.is_collinear(H, G, O), "H, G, O collinear")
same("practice[3]", H.distance(G), 2*G.distance(O))
