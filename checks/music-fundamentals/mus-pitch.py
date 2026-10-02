# content: 17a9571ccdab
# mus-pitch: Pitch, Notes & the Keyboard
from music import *
NAMES = 'C C# D D# E F F# G G# A A# B'.split()
def spell_all(m):
    """Every spelling (accidentals -2..2) of MIDI m, independent of the page."""
    out = []
    for L in 'CDEFGAB':
        for a, s in ((0, ''), (1, '#'), (-1, 'b'), (2, 'x'), (-2, 'bb')):
            for o in range(-1, 10):
                if midi(f'{L}{s}{o}') == m: out.append(f'{L}{s}{o}')
    return out
# formal: key numbers, piano range, accidental values, at most three spellings
same("formal", [midi('C4'), midi('A4')], [60, 69])
same("formal", [midi('A0'), midi('C8'), midi('C8') - midi('A0') + 1], [21, 108, 88])
same("formal", [midi('F#4'), midi('B#3'), midi('Cb4')], [midi('Gb4'), midi('C4'), midi('B3')])
check("formal", max(len(spell_all(m)) for m in range(21, 109)) == 3, "each key has at most three spellings")
check("formal", [semis('E4', 'F4'), semis('B3', 'C4')] == [1, 1] and all(semis(a, b) == 2 for a, b in [('C4','D4'),('D4','E4'),('F4','G4'),('G4','A4'),('A4','B4')]), "white-key steps")
check("formal", interval('E4', 'F4') == 'm2' and interval('F4', 'F#4') == 'A1', "diatonic vs chromatic half step")
# example: Bb3 +H +W +W
m0 = midi('Bb3'); same("example", m0, 58); same("example", m0 % 12, 10); check("example", 'A#3' in spell_all(58), "A#3 enharmonic")
same("example", m0 + 1, 59); check("example", set(spell_all(59)) >= {'B3', 'Cb4'}, "59 = B3 = Cb4"); same("example", 59 % 12, 11)
same("example", 59 + 2, 61); check("example", set(spell_all(61)) == {'C#4', 'Db4'} or set(spell_all(61)) >= {'C#4', 'Db4'}, "61 = C#4 = Db4"); same("example", 61 % 12, 1)
same("example", 61 + 2, 63); check("example", set(spell_all(63)) >= {'D#4', 'Eb4'}, "63 = D#4 = Eb4"); same("example", 63 % 12, 3)
same("example", 1 + 2 + 2, 63 - 58)
# practice[0]
check("practice[0]", [semis('E4','F4'), semis('B4','C5')] == [1, 1], "E-F and B-C are half steps"); same("practice[0]", semis('C4', 'C5'), 12)
same("practice[0]", [sum(1 for m in range(60, 72) if NAMES[m % 12].find('#') < 0), sum(1 for m in range(60, 72) if '#' in NAMES[m % 12])], [7, 5])
# practice[1]
def others(p, o=4):
    m = midi(p + str(o)); return sorted(re.sub(r'-?\d+$', '', s) for s in spell_all(m) if re.sub(r'-?\d+$', '', s) != p)
same("practice[1]", others('F#'), sorted(['Gb', 'Ex'])); same("practice[1]", others('E'), sorted(['Fb', 'Dx']))
same("practice[1]", others('C'), sorted(['B#', 'Dbb'])); same("practice[1]", others('Ab'), ['G#'])
# practice[2]
same("practice[2]", midi('C4') - 1, 59); check("practice[2]", {'B3', 'Cb4'} <= set(spell_all(59)), "below C4")
same("practice[2]", midi('B4') + 2, 73); check("practice[2]", {'C#5', 'Db5'} <= set(spell_all(73)), "above B4")
same("practice[2]", 12 * (4 + 1) + 10, 70); check("practice[2]", {'A#4', 'Bb4'} <= set(spell_all(70)), "MIDI 70")
# practice[3]
m = midi('A3'); same("practice[3]", m, 57); same("practice[3]", m + 3 * 7, 78); check("practice[3]", {'F#5', 'Gb5'} <= set(spell_all(78)), "78"); same("practice[3]", 78 % 12, 6)
same("practice[3]", (12 * 7) % 12, 0); same("practice[3]", (m + 84) % 12, 9); same("practice[3]", 84 // 12, 7)
same("practice[3]", len({(m + 7 * i) % 12 for i in range(12)}), 12); same("practice[3]", gcd(7, 12), 1)
