# content: af0b2ab6ad82
# trig-vector-apps: Applications of Vectors
from trig import *
import math

def rnd(label, got, page, nd):
    v = float(N(got)); check(label, round(v, nd) == page, f"computed {v}, page says {page}")

def bearing_to_dir(b): return (90 - b) % 360
def dir_to_bearing(t): return (90 - t) % 360

# formal: parallelogram law ‖F1+F2‖² = ‖F1‖² + ‖F2‖² + 2‖F1‖‖F2‖cos φ, and the tip-to-tail form with 180° − φ
m1, m2, ph = symbols('m1 m2 ph', positive=True)
F1 = (m1, 0); F2 = (m2*cos(ph), m2*sin(ph))
same("formal", simplify(vmag((F1[0] + F2[0], F1[1] + F2[1]))**2 - (m1**2 + m2**2 + 2*m1*m2*cos(ph))), 0)
same("formal", simplify(m1**2 + m2**2 - 2*m1*m2*cos(pi - ph) - (m1**2 + m2**2 + 2*m1*m2*cos(ph))), 0)
# formal: incline components of W (straight down) along/into a slope at angle th
W, th = symbols('W th', positive=True)
down_slope = (-cos(th), -sin(th)); into = (sin(th), -cos(th))
same("formal", simplify(vdot((0, -W), down_slope)), W*sin(th))
same("formal", simplify(vdot((0, -W), into)), W*cos(th))
# formal: bearing ↔ direction angle; from 200° blows toward 020°
for b in [0, 45, 90, 120, 200, 270, 315]:
    t = bearing_to_dir(b)
    near("formal", float(N(sin(deg(t))))*1, float(N(cos(deg(b)))))   # north component = cos β
    near("formal", float(N(cos(deg(t)))), float(N(sin(deg(b)))))     # east component = sin β
    same("formal", dir_to_bearing(t), b)
same("formal", (200 + 180) % 360, 20)

# example
same("example", bearing_to_dir(120), 330); same("example", 90 - 120, -30); same("example", bearing_to_dir(20), 70)
a = from_polar_deg(400, 330); w = from_polar_deg(50, 70)
same("example", (simplify(a[0]), simplify(a[1])), (200*sqrt(3), -200))
rnd("example", a[0], 346.41, 2); rnd("example", w[0], 17.10, 2); rnd("example", w[1], 46.98, 2)
g = (a[0] + w[0], a[1] + w[1])
rnd("example", g[0], 363.51, 2); rnd("example", g[1], -153.02, 2)
gs = vmag(g); rnd("example", gs, 394.40, 2); rnd("example", gs, 394, 0)
rnd("example", atan(g[1]/g[0])*180/pi, -22.83, 2)
gd = vdir(g); rnd("example", gd, 337.17, 2)
rnd("example", 90 - gd, -247.17, 2); crs = dir_to_bearing(float(N(gd))); rnd("example", crs, 112.83, 2); rnd("example", crs, 112.8, 1)
rnd("example", 120 - crs, 7.2, 1)
same("example", float(N(vangle(a, w))), 100.0)   # heading 120° and wind toward 020° differ by 100°
same("example", 180 - 100, 80)
rnd("example", sqrt(400**2 + 50**2 - 2*400*50*cos(deg(80))), 394.40, 2)
near("example", sqrt(400**2 + 50**2 - 2*400*50*cos(deg(80))), float(N(gs)))

# mistakes
same("mistakes", 90 - 20, 70); same("mistakes", (90 - 120) % 360, 330)
same("mistakes", 30**2 + 40**2 + 2*30*40*cos(deg(60)), 3700); rnd("mistakes", sqrt(3700), 60.8, 1)
same("mistakes", simplify(30**2 + 40**2 - 2*30*40*cos(deg(120))), 3700)

# practice 1: forces 30 and 40 at 60°
R = (40 + 30*cos(deg(60)), 30*sin(deg(60)))
same("practice[0]", simplify(vmag(R)**2), 3700); rnd("practice[0]", sqrt(3700), 60.8, 1)
rnd("practice[0]", vdir(R), 25.3, 1)
rnd("practice[0]", asin(30*sin(deg(120))/sqrt(3700))*180/pi, 25.3, 1)
# practice 2: incline 12°, 500 lb
rnd("practice[1]", 500*sin(deg(12)), 104.0, 1); rnd("practice[1]", 500*cos(deg(12)), 489.1, 1)
# practice 3: equilibrium, cables at 30° and 45° with the ceiling
T1, T2 = symbols('T1 T2', positive=True)
sol = solve([Eq(-T1*cos(deg(30)) + T2*cos(deg(45)), 0), Eq(T1*sin(deg(30)) + T2*sin(deg(45)) - 200, 0)], [T1, T2], dict=True)[0]
same("practice[2]", simplify(sol[T1] - 200*(sqrt(3) - 1)), 0)
same("practice[2]", simplify(sol[T1] - 200*cos(deg(45))/sin(deg(75))), 0)
same("practice[2]", simplify(sol[T2] - 200*cos(deg(30))/sin(deg(75))), 0)
rnd("practice[2]", sol[T1], 146.4, 1); rnd("practice[2]", sol[T2], 179.3, 1)
# practice 4: river crossing
al = asin(Rational(3, 8)); rnd("practice[3]", al*180/pi, 22.0, 1)
boat = (8*cos(al), 8*sin(al)); same("practice[3]", simplify(boat[1] - 3), 0)   # upstream part cancels current
same("practice[3]", simplify(boat[0]), sqrt(55)); rnd("practice[3]", sqrt(55), 7.42, 2)
rnd("practice[3]", Rational(1, 2)/sqrt(55)*60, 4.0, 1)
