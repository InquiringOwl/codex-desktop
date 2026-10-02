# content: ff02e7b73e5a
# mus-sound: Sound: Frequency, Pitch & the Harmonic Series
from music import *
c_ = lambda r: 1200 * math.log2(r)
# formal
near("formal", wavelength(440), 0.780); near("formal", freq('C4'), 261.63, rel=5e-5); near("formal", 440 * 2 ** (-9 / 12), 261.63, rel=5e-5)
near("formal", c_(2), 1200); near("formal", c_(2 ** (1 / 12)), 100)
near("formal", c_(Fraction(3, 2)), 701.96, rel=5e-5); near("formal", c_(Fraction(4, 3)), 498.04, rel=5e-5)
near("formal", c_(Fraction(5, 4)), 386.31, rel=5e-5); near("formal", c_(Fraction(6, 5)), 315.64, rel=5e-5)
near("formal", 10 * math.log10(2), 3, rel=0.01)
# example: A2 = 110 Hz
same("example", freq('A2'), 110.0); near("example", period(110) * 1000, 9.09, rel=0.001)
same("example", [110 * n for n in range(1, 9)], [110, 220, 330, 440, 550, 660, 770, 880])
same("example", [nearest(110 * n)[0] for n in (1, 2, 4, 8)], ['A2', 'A3', 'A4', 'A5'])
check("example", all(abs(nearest(110 * n)[1]) < 1e-9 for n in (1, 2, 4, 8)), "octaves are exact")
near("example", freq('E4'), 329.63, rel=5e-5); same("example", nearest(330)[0], 'E4'); near("example", nearest(330)[1], 1.96, rel=0.005)
same("example", nearest(660)[0], 'E5'); near("example", nearest(660)[1], 1.96, rel=0.005); near("example", c_(Fraction(3, 2)) - 700, 1.96, rel=0.005)
near("example", freq('C#5'), 554.37, rel=5e-5); same("example", nearest(550)[0], 'C#5'); near("example", nearest(550)[1], -13.69, rel=0.001)
near("example", freq('G5'), 783.99, rel=5e-5); same("example", nearest(770)[0], 'G5'); near("example", nearest(770)[1], -31.17, rel=0.001)
# practice[0]
near("practice[0]", period(440) * 1000, 2.27); near("practice[0]", wavelength(440), 0.780); near("practice[0]", 1 / 0.005, 200)
# practice[1]
same("practice[1]", 440 / 2 ** 4, 27.5); same("practice[1]", freq('A0'), 27.5); same("practice[1]", 440 * 2 ** 2, 1760); same("practice[1]", freq('A6'), 1760.0)
same("practice[1]", midi('A4') - midi('C4'), 9); near("practice[1]", freq('C4'), 261.63, rel=5e-5)
# practice[2]
f0 = freq('C2'); near("practice[2]", f0, 65.41, rel=1e-4)
pagef = [65.41, 130.81, 196.22, 261.63, 327.03, 392.44, 457.84, 523.25]
for n, pf in enumerate(pagef, 1): near("practice[2]", n * f0, pf, rel=1e-4)
same("practice[2]", [transpose('C2', iv) for iv in ['P1', 'P8', 'P12', 'P15', 'M17', 'P19', 'm21', 'P22']], ['C2', 'C3', 'G3', 'C4', 'E4', 'G4', 'Bb4', 'C5'])
same("practice[2]", [interval('C3', 'C4'), interval('C3', 'G3'), interval('G3', 'C4'), interval('C4', 'E4'), interval('E4', 'G4')], ['P8', 'P5', 'P4', 'M3', 'm3'])
same("practice[2]", [Fraction(n + 1, n) for n in range(1, 6)], [Fraction(2), Fraction(3, 2), Fraction(4, 3), Fraction(5, 4), Fraction(6, 5)])
# practice[3]
h5, h7 = 5 * f0, 7 * f0
near("practice[3]", freq('E4'), 329.63, rel=5e-5); near("practice[3]", freq('Bb4'), 466.16, rel=5e-5)
near("practice[3]", h5 - freq('E4'), -2.60, rel=0.005); near("practice[3]", c_(h5 / freq('E4')), -13.69, rel=0.001)
near("practice[3]", h7 - freq('Bb4'), -8.32, rel=0.005); near("practice[3]", c_(h7 / freq('Bb4')), -31.17, rel=0.001)
check("practice[3]", abs(4 * f0 - freq('C4')) < 1e-9, "harmonic 4 is C4 exactly")
near("practice[3]", c_(Fraction(5, 4)), 386.31, rel=5e-5); near("practice[3]", 400 - c_(Fraction(5, 4)), 13.69, rel=0.001)
