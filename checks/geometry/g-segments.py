# content: c368740e5bea
# g-segments: Segments, Distance & Midpoints
R = Rational
dist = lambda P, Q: sqrt((Q[0]-P[0])**2 + (Q[1]-P[1])**2)
mid = lambda P, Q: (R(P[0]+Q[0], 2), R(P[1]+Q[1], 2))
# example
A, B = (-2, 3), (4, -1)
same("example", [B[0]-A[0], B[1]-A[1]], [6, -4])
same("example", dist(A, B), sqrt(52))
same("example", dist(A, B), 2*sqrt(13))
near("example", dist(A, B), 7.2, 0.01)
M = mid(A, B)
same("example", list(M), [1, 1])
same("example", dist(A, M), sqrt(13)); same("example", dist(M, B), sqrt(13))
same("example", dist(A, M) + dist(M, B), dist(A, B))
# practice[0]
same("practice[0]", abs(5 - (-7)), 12)
same("practice[0]", R(-7 + 5, 2), -1)
# practice[1]
solves("practice[1]", Eq((2*x + 3) + (3*x - 1), 27), x, {5})
same("practice[1]", [2*5 + 3, 3*5 - 1], [13, 14])
same("practice[1]", 13 + 14, 27)
# practice[2]
P, Q = (-1, -4), (5, 8)
same("practice[2]", dist(P, Q), sqrt(180))
same("practice[2]", dist(P, Q), 6*sqrt(5))
near("practice[2]", dist(P, Q), 13.4, 0.005)
same("practice[2]", list(mid(P, Q)), [2, 2])
# practice[3]
A, M = (-1, 5), (3, -2)
B = (2*M[0] - A[0], 2*M[1] - A[1])
same("practice[3]", list(B), [7, -9])
same("practice[3]", list(mid(A, B)), [3, -2])
same("practice[3]", dist(A, B), sqrt(260)); same("practice[3]", dist(A, B), 2*sqrt(65))
near("practice[3]", dist(A, B), 16.1, 0.005)
Pp = (1, 1)
same("practice[3]", dist(A, Pp), 2*sqrt(5)); same("practice[3]", dist(Pp, B), 2*sqrt(34))
check("practice[3]", (2*sqrt(5) + 2*sqrt(34))**2 - 260 > 0, "AP + PB > AB, so P not between")
near("practice[3]", 2*sqrt(5) + 2*sqrt(34), 16.13, 0.0005)
near("practice[3]", 2*sqrt(65), 16.12, 0.0005)
same("practice[3]", [R(Pp[1]-A[1], Pp[0]-A[0]), R(B[1]-A[1], B[0]-A[0])], [-2, -R(7, 4)])
