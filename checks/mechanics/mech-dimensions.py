# content: df3d49d73ee1
def samev(label, g, e): same(label, tuple(g), tuple(e))
# mech-dimensions: Dimensional Analysis & Estimation
# dimensions as exponent vectors (L, M, T)
def dim(L=0, M=0, T=0): return Matrix([L, M, T])
length, mass, time = dim(L=1), dim(M=1), dim(T=1)
vel, acc = dim(L=1, T=-1), dim(L=1, T=-2)

# example: T = C L^a m^b g^c
sol = solve(list(a*length + b*mass + c*acc - time), [a, b, c])
same("example", sol[a], Rational(1, 2)); same("example", sol[b], 0); same("example", sol[c], Rational(-1, 2))
near("example", sqrt(1.00/9.80), 0.319)
near("example", 2*pi*sqrt(1.00/9.80), 2.01)

# practice[0]
F = mass + acc; K = mass + 2*vel
samev("practice[0]", F, dim(1, 1, -2)); samev("practice[0]", K, dim(2, 1, -2)); samev("practice[0]", F + length, K)

# practice[1]
check("practice[1]", vel + 2*time != length, "x = v t^2 inconsistent")
samev("practice[1]", vel + 2*time, dim(L=1, T=1))
samev("practice[1]", vel + time, length); samev("practice[1]", acc + 2*time, length)

# practice[2]
sol = solve(list(a*length + b*mass + c*acc - time), [a, b, c])
same("practice[2]", (sol[a], sol[b], sol[c]), (Rational(1, 2), 0, Rational(-1, 2)))
near("practice[2]", sqrt(2*20.0/9.80), 2.02)

# practice[3]: heartbeats, order of magnitude 1e9
n = 70*60*24*365*80
check("practice[3]", 2.5e9 < n < 3.5e9, "about 3e9")
check("practice[3]", 2e9 < 60*60*24*365*70 and 80*60*24*365*90 < 4e9, "range 2e9..4e9")
