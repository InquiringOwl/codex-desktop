# content: 196bfad87312
# trig-angular-speed: Linear & Angular Speed
from trig import *
R = Rational
rpm_to_rad_s = lambda n: n*2*pi/60          # one revolution = 2π rad, one minute = 60 s
# formal / hero
same("formal", rpm_to_rad_s(60), 2*pi)
nn = symbols('n', positive=True); same("formal", simplify(rpm_to_rad_s(nn) - pi*nn/30), 0)
th, r, tt = symbols('theta r t_', positive=True); same("formal", simplify((r*th)/tt - r*(th/tt)), 0)
w_earth = 2*pi/24; same("formal", w_earth, pi/12); same("formal", 3960*w_earth, 330*pi); near("formal", round(float(330*pi)), 1037)
# example: pedal 60 rpm, sprockets 10 cm and 4 cm, wheel 33 cm
wp = rpm_to_rad_s(60); same("example", 60*2*pi, 120*pi); same("example", wp, 2*pi)
vc = 10*wp; same("example", vc, 20*pi)
wr = vc/4; same("example", wr, 5*pi)
vb = 33*wr; same("example", vb, 165*pi)
near("example", round(float(vb), 1), 518.4); near("example", round(float(vb)/100, 2), 5.18)
near("example", round(float(vb)/100, 4), 5.1836); near("example", round(float(vb)/100*3.6, 1), 18.7)
# practice[0]
same("practice[0]", R(12, 4), 3); same("practice[0]", R(1, 2)*3, R(3, 2))
# practice[1]
same("practice[1]", 45*2*pi, 90*pi); same("practice[1]", rpm_to_rad_s(45), 3*pi/2)
same("practice[1]", 15*rpm_to_rad_s(45), 45*pi/2); near("practice[1]", round(float(45*pi/2), 1), 70.7)
# practice[2]
w1 = rpm_to_rad_s(300); same("practice[2]", w1, 10*pi); v = 6*w1; same("practice[2]", v, 60*pi)
near("practice[2]", round(float(v), 1), 188.5)
w2 = v/15; same("practice[2]", w2, 4*pi); same("practice[2]", w2*60/(2*pi), 120)
# belt rule independently: equal rim speed ⇒ rpm ratio = inverse radius ratio
same("practice[2]", 300*R(6, 15), 120)
# practice[3]
vin = R(60*63360, 60); same("practice[3]", vin, 63360)
w = vin/14; rpm = w/(2*pi); same("practice[3]", simplify(rpm - R(63360, 28)/pi), 0); same("practice[3]", simplify(rpm - R(15840, 7)/pi), 0)
near("practice[3]", round(float(rpm), 1), 720.3)
