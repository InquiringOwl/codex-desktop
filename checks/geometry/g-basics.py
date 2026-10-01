# content: 541cd3b6336b
# g-basics: Points, Lines & Planes
R = Rational
def slope(P, Q): return R(Q[1] - P[1], Q[0] - P[0])
def collinear(P, Q, S): return (Q[0]-P[0])*(S[1]-P[1]) - (S[0]-P[0])*(Q[1]-P[1]) == 0
# example
A, B, C, D = (2, 1), (6, 4), (14, 10), (10, 8)
same("example", slope(A, B), R(3, 4))
same("example", slope(B, C), R(3, 4))
same("example", slope(B, D), 1)
check("example", collinear(A, B, C), "A, B, C collinear")
check("example", not collinear(A, B, D), "D off line AB")
fence = R(3, 4)*(x - 2) + 1
same("example", fence, R(3, 4)*x - R(1, 2))
same("example", fence.subs(x, 14), 10)
same("example", fence.subs(x, 10), 7)
same("example", D[1] - fence.subs(x, 10), 1)
# practice[0]
same("practice[0]", binomial(6, 2), 15)
same("practice[0]", 6*5/2, 15)
# practice[1]
A, B, C = (-1, 4), (2, -2), (5, -8)
same("practice[1]", [slope(A, B), slope(B, C)], [-2, -2])
check("practice[1]", collinear(A, B, C), "collinear")
ln = -2*x + 2
check("practice[1]", all(ln.subs(x, P[0]) == P[1] for P in (A, B, C)), "all on y=-2x+2")
# practice[2]
J, K, L = (1, 1), (3, 4), (7, 10)
same("practice[2]", [slope(J, K), slope(K, L)], [R(3, 2), R(3, 2)])
check("practice[2]", collinear(J, K, L), "J, K, L collinear, so no unique plane")
# practice[3]: four noncoplanar points, e.g. a tetrahedron
pts = [Matrix([0, 0, 0]), Matrix([1, 0, 0]), Matrix([0, 1, 0]), Matrix([0, 0, 1])]
check("practice[3]", Matrix.hstack(pts[1]-pts[0], pts[2]-pts[0], pts[3]-pts[0]).det() != 0, "noncoplanar")
same("practice[3]", binomial(4, 2), 6)
same("practice[3]", binomial(4, 3), 4)
from itertools import combinations
planes = set()
for tri in combinations(range(4), 3):
    P0, P1, P2 = [pts[i] for i in tri]
    n = (P1 - P0).cross(P2 - P0); check("practice[3]", n != zeros(3, 1), "triple noncollinear")
    g = n.dot(P0); v = list(n) + [g]; c0 = next(t for t in v if t != 0); planes.add(tuple(t / c0 for t in v))
same("practice[3]", len(planes), 4)
