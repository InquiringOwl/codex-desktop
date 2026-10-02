# content: 0f3b075992b4
# a2-log-scales: Logarithmic Scales
from algebra import *
R = Rational
lg = lambda v: log(v, 10)
I0 = R(1, 10**12)
dB = lambda I: 10*lg(I/I0)

# hero: 90 dB vs 60 dB is a factor 1000 in intensity
same("hero", R(10)**(R(90 - 60, 10)), 1000)
same("hero", simplify(I0*10**9 / (I0*10**6)), 1000)

# formal: S2 − S1 = k log(Q2/Q1) ⇔ Q2/Q1 = 10^((S2 − S1)/k)
k_, Q0, Q1, Q2 = symbols('k_ Q0 Q1 Q2', positive=True)
S = lambda Q: k_*log(Q/Q0, 10)
check("formal", simplify(expand_log(S(Q2) - S(Q1) - k_*log(Q2/Q1, 10), force=True)) == 0, "difference of readings = k log(ratio)")
same("formal", simplify(10**((S(Q2) - S(Q1))/k_)), Q2/Q1)
# pH 7 for [H+] = 1e-7; decibel reference
same("formal", -lg(R(1, 10**7)), 7)
same("formal", dB(I0), 0)
# quake energy: log E = 1.5M + 4.8 ⇒ E2/E1 = 10^(1.5ΔM); 31.6 per unit, 1000 per two units
M1, M2 = symbols('M1 M2', real=True)
E = lambda M: 10**(R(3, 2)*M + R(48, 10))
same("formal", simplify(E(M2)/E(M1) - 10**(R(3, 2)*(M2 - M1))), 0)
near("formal", 10**1.5, 31.6)
same("formal", R(10)**(R(3, 2)*2), 1000)

# example: 110 dB vs 60 dB
Ic, It = I0*10**11, I0*10**6
same("example", dB(Ic), 110)
same("example", dB(It), 60)
same("example", Ic/It, 10**5)
same("example", R(10)**(R(110 - 60, 10)), 100000)
same("example", Ic, R(1, 10))

# mistakes: two 60 dB sources ≈ 63.0 dB; magnitude 8 vs 4
near("mistakes", float(dB(2*10**6*I0)), 63.0)
same("mistakes", R(10)**(R(3, 2)*4), 10**6)
same("mistakes", R(10)**(6 - 3), 1000)

# practice[0]: coffee pH 5, lemon pH 2
same("practice[0]", -lg(R(1, 10**5)), 5)
same("practice[0]", R(10)**(-2) / R(10)**(-5), 1000)

# practice[1]: 1e-4 W/m² → 80 dB
same("practice[1]", simplify(dB(R(1, 10**4))), 80)

# practice[2]: doubling intensity adds 10 log 2 ≈ 3.01 dB
I_ = symbols('I_', positive=True)
same("practice[2]", simplify(expand_log(dB(2*I_) - dB(I_), force=True) - 10*lg(2)), 0)
near("practice[2]", float(10*lg(2)), 3.01)

# practice[3]: ΔM = 2.4: amplitude 10^2.4 ≈ 251, energy 10^3.6 ≈ 3981
same("practice[3]", R(91, 10) - R(67, 10), R(24, 10))
near("practice[3]", 10**2.4, 251)
same("practice[3]", R(3, 2)*R(24, 10), R(36, 10))
near("practice[3]", 10**3.6, 3981)

# lab: data-set ratios at the start positions
same("lab", R(10)**(R(110 - 60, 10)), 10**5)
same("lab", R(10)**(7 - 2), 10**5)
