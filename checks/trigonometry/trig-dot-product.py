# content: b091ba7c2154
# trig-dot-product: The Dot Product & Projections
from trig import *

def rnd(label, got, page, nd):
    v = float(N(got)); check(label, round(v, nd) == page, f"computed {v}, page says {page}")

u1, u2, v1, v2, w1_, w2_, c_ = symbols('u1 u2 v1 v2 w1_ w2_ c_', real=True)
U, V, Wv = (u1, u2), (v1, v2), (w1_, w2_)
# formal: properties
same("formal", vdot(U, V) - vdot(V, U), 0)
same("formal", expand(vdot(U, (v1 + w1_, v2 + w2_)) - vdot(U, V) - vdot(U, Wv)), 0)
same("formal", expand(vdot((c_*u1, c_*u2), V) - c_*vdot(U, V)), 0)
same("formal", vdot((0, 0), V), 0); same("formal", simplify(vdot(V, V) - vmag(V)**2), 0)
# formal: law-of-cosines proof: expanding ‖u − v‖² in components
same("formal", expand(vmag((u1 - v1, u2 - v2))**2 - (vmag(U)**2 + vmag(V)**2 - 2*vdot(U, V))), 0)
# formal: u·v = ‖u‖‖v‖cos θ for vectors given by magnitude and direction
a_, b_, s_, t_ = symbols('a_ b_ s_ t_', positive=True)
same("formal", simplify(vdot((a_*cos(s_), a_*sin(s_)), (b_*cos(t_), b_*sin(t_))) - a_*b_*cos(s_ - t_)), 0)
# formal: proj is parallel to v, w2 ⟂ v, sum is u
p = vproj(U, V); same("formal", simplify(p[0]*v2 - p[1]*v1), 0)
same("formal", simplify(vdot((u1 - p[0], u2 - p[1]), V)), 0)
# formal: sign of u·v vs acute/right/obtuse
for (x, y, kind) in [((1, 0), (1, 1), "acute"), ((1, 0), (0, 3), "right"), ((1, 0), (-2, 1), "obtuse")]:
    d = vdot(x, y); ang = float(N(vangle(x, y)))
    check("formal", (d > 0 and ang < 90) if kind == "acute" else (d == 0 and abs(ang - 90) < 1e-9) if kind == "right" else (d < 0 and ang > 90), kind)

# example
u, v = (4, 3), (1, 2)
same("example", vdot(u, v), 10); same("example", vmag(u), 5); same("example", vmag(v), sqrt(5))
same("example", simplify(10/(5*sqrt(5)) - 2/sqrt(5)), 0)
rnd("example", vangle(u, v), 26.57, 2)
same("example", vproj(u, v), (2, 4)); same("example", vdot(v, v), 5)
w2 = (u[0] - 2, u[1] - 4); same("example", w2, (2, -1)); same("example", vdot(w2, v), 0)

# mistakes
same("mistakes", vdot((2, 3), (4, -1)), 5)
same("mistakes", vproj(v, u), (Rational(8, 5), Rational(6, 5))); same("mistakes", vdot(u, u), 25)

# practice
same("practice[0]", vdot((-2, 5), (3, 4)), 14); same("practice[0]", vdot((2, -1), (1, 2)), 0)
u, v = (-3, 1), (2, 4)
same("practice[1]", vdot(u, v), -2); same("practice[1]", vmag(u), sqrt(10)); same("practice[1]", vmag(v), 2*sqrt(5))
same("practice[1]", simplify(vdot(u, v)/(vmag(u)*vmag(v)) + sqrt(2)/10), 0)
same("practice[1]", simplify(sqrt(10)*2*sqrt(5) - sqrt(200)), 0)
rnd("practice[1]", vangle(u, v), 98.13, 2)
kk = symbols('kk'); same("practice[2]", solve(Eq(vdot((kk, 3), (2, -6)), 0), kk), [9])
same("practice[2]", vdot((5, 0), (3, 4)), 15); same("practice[2]", vproj((5, 0), (3, 4)), (Rational(9, 5), Rational(12, 5)))
F = from_polar_deg(60, 35); d = (25, 0)
rnd("practice[3]", vdot(F, d), 1228.7, 1)
same("practice[3]", vdot((3, 4), (7 - 1, 2 - 0)), 26)
