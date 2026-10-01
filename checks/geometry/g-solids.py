# content: fba250060776
# g-solids: Solids, Nets & Cross-Sections
from sympy import Point3D, Plane, Segment3D, sqrt as Sqrt
from itertools import product, combinations
# formal: prism and pyramid counts satisfy Euler for every n, and the five Platonic solids
nn = symbols('nn', positive=True, integer=True)
same("formal", 2*nn - 3*nn + (nn + 2), 2)
same("formal", (nn + 1) - 2*nn + (nn + 1), 2)
for V_, E_, F_ in [(4, 6, 4), (8, 12, 6), (6, 12, 8), (20, 30, 12), (12, 30, 20)]:
    same("formal", V_ - E_ + F_, 2)
# example: hexagonal prism, side 5, height 8
n_ = 6
F_, E_, V_ = n_ + 2, 3*n_, 2*n_
same("example", [F_, E_, V_], [8, 18, 12]); same("example", V_ - E_ + F_, 2)
same("example", 6*5, 30)
tri_h = Sqrt(5**2 - Rational(5, 2)**2)
same("example", tri_h, 5*Sqrt(3)/2); same("example", 2*tri_h, 5*Sqrt(3)); near("example", 5*Sqrt(3), 8.66, rel=0.001)
same("example", 8 + 2*(2*tri_h), 8 + 10*Sqrt(3)); near("example", 8 + 10*Sqrt(3), 25.3, rel=0.002)
# hexagon on its hinge side (length 5) spans 10 corner to corner, overhang 2.5 per side; middle rectangle (3rd: 10..15) keeps 7.5..17.5 inside 0..30
check("example", 10 - 2.5 >= 0 and 15 + 2.5 <= 30, "hexagon overhang stays within the 30 cm strip")
# practice[0]: hexagonal pyramid
V0, E0, F0 = 6 + 1, 2*6, 6 + 1
same("practice[0]", [V0, E0, F0], [7, 12, 7]); same("practice[0]", V0 - E0 + F0, 2)
# practice[1]
same("practice[1]", 2 - 12 + 30, 20); same("practice[1]", 20*3/2, 30)
# cube cross-sections: intersect plane with the 12 edges of [0,6]^3
cube = [Point3D(*p) for p in product((0, 6), repeat=3)]
edges = [Segment3D(p, q) for p, q in combinations(cube, 2) if p.distance(q) == 6]
def section(pl):
    pts = []
    for s in edges:
        for r in pl.intersection(s):
            if isinstance(r, Point3D) and r not in pts: pts.append(r)
            elif isinstance(r, Segment3D):
                for q in r.points:
                    if q not in pts: pts.append(q)
    return pts
def area(pts, normal):
    # order around centroid in the plane, then vector area
    import math
    c = Point3D(sum(p.x for p in pts)/len(pts), sum(p.y for p in pts)/len(pts), sum(p.z for p in pts)/len(pts))
    nvec = Matrix(normal); u = Matrix(pts[0] - c); w = nvec.cross(u)
    ang = lambda p: math.atan2(float(Matrix(p - c).dot(w)), float(Matrix(p - c).dot(u)))
    pts = sorted(pts, key=ang); tot = Matrix([0, 0, 0])
    for i in range(len(pts)):
        tot += Matrix(pts[i]).cross(Matrix(pts[(i + 1) % len(pts)]))
    return simplify(tot.norm()/2), pts
# practice[2]: plane through edge (0,0,0)-(6,0,0) and opposite edge (0,6,6)-(6,6,6)
pl = Plane(Point3D(0, 0, 0), Point3D(6, 0, 0), Point3D(0, 6, 6))
pts = section(pl); A2, ordered = area(pts, pl.normal_vector)
same("practice[2]", len(pts), 4)
sides = sorted([ordered[i].distance(ordered[(i + 1) % 4]) for i in range(4)], key=lambda v: float(v))
same("practice[2]", sides, [6, 6, 6*Sqrt(2), 6*Sqrt(2)])
same("practice[2]", A2, 36*Sqrt(2)); near("practice[2]", 36*Sqrt(2), 50.9, rel=0.002)
# practice[3](a): plane through the three neighbours of the origin corner
pl = Plane(Point3D(6, 0, 0), Point3D(0, 6, 0), Point3D(0, 0, 6))
pts = section(pl); A3, ordered = area(pts, pl.normal_vector)
same("practice[3]", len(pts), 3)
same("practice[3]", [ordered[i].distance(ordered[(i + 1) % 3]) for i in range(3)], [6*Sqrt(2)]*3)
same("practice[3]", A3, 18*Sqrt(3)); same("practice[3]", Sqrt(3)/4*(6*Sqrt(2))**2, 18*Sqrt(3)); near("practice[3]", 18*Sqrt(3), 31.2, rel=0.002)
# (b): plane through the centre perpendicular to the space diagonal
pl = Plane(Point3D(3, 3, 3), normal_vector=(1, 1, 1))
pts = section(pl); A4, ordered = area(pts, pl.normal_vector)
same("practice[3]", len(pts), 6)
same("practice[3]", [ordered[i].distance(ordered[(i + 1) % 6]) for i in range(6)], [3*Sqrt(2)]*6)
same("practice[3]", A4, 27*Sqrt(3)); same("practice[3]", 3*Sqrt(3)/2*(3*Sqrt(2))**2, 27*Sqrt(3)); near("practice[3]", 27*Sqrt(3), 46.8, rel=0.002)
check("practice[3]", all(p.distance(Point3D(3, 3, 3)) == 3*Sqrt(2) for p in pts), "hexagon vertices are edge midpoints, equidistant from centre")
# (c): at most one side per face, 6 faces
check("practice[3]", 6 < 7, "a cube has six faces, so no heptagon")
