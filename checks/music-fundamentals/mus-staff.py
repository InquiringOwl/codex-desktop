# content: f8ac8852fbef
# mus-staff: The Staff, Clefs & Ledger Lines
from music import *
LET = 'CDEFGAB'
def d(p):
    L, a, o = split(p); return 7 * o + LET.index(L)
def at(pos, clef):
    """Natural pitch at a staff position, computed from the clef's reference line (not the bottom line)."""
    ref = {'treble': ('G4', 2), 'bass': ('F3', 6), 'alto': ('C4', 4), 'tenor': ('C4', 6)}[clef]
    n = d(ref[0]) + pos - ref[1]; return f'{LET[n % 7]}{n // 7}'
def where(pos):
    if 0 <= pos <= 8: return ('line', pos // 2 + 1) if pos % 2 == 0 else ('space', (pos + 1) // 2)
    return ('ledger' if pos % 2 == 0 else 'outside', ledger_count(pos))
# formal: line and space names of the four clefs, reference lines, ledger rule
same("formal", [at(p, 'treble') for p in range(0, 9, 2)], ['E4', 'G4', 'B4', 'D5', 'F5'])
same("formal", [at(p, 'treble') for p in range(1, 8, 2)], ['F4', 'A4', 'C5', 'E5'])
same("formal", [at(p, 'bass') for p in range(0, 9, 2)], ['G2', 'B2', 'D3', 'F3', 'A3'])
same("formal", [at(p, 'bass') for p in range(1, 8, 2)], ['A2', 'C3', 'E3', 'G3'])
same("formal", [at(p, 'alto') for p in range(0, 9, 2)], ['F3', 'A3', 'C4', 'E4', 'G4'])
same("formal", [at(p, 'alto') for p in range(1, 8, 2)], ['G3', 'B3', 'D4', 'F4'])
same("formal", [at(p, 'tenor') for p in range(0, 9, 2)], ['D3', 'F3', 'A3', 'C4', 'E4'])
same("formal", [at(p, 'tenor') for p in range(1, 8, 2)], ['E3', 'G3', 'B3', 'D4'])
same("formal", [staff_pos('C4', 'treble'), staff_pos('C4', 'bass')], [-2, 10])
same("formal", [ledger_count(-1), ledger_count(9), ledger_count(-2), ledger_count(10)], [0, 0, 1, 1])
same("formal", d('E4'), 30); same("formal", d('G2'), 18)
# example: tenor top line
same("example", at(6, 'tenor'), 'C4'); same("example", at(8, 'tenor'), 'E4')
same("example", d('E4') - d('G2'), 12); same("example", staff_pos('E4', 'bass'), 12); same("example", at(8, 'bass'), 'A3')
same("example", [p for p in range(10, 13, 2)], [10, 12]); same("example", ledger_count(12), 2); same("example", at(10, 'bass'), 'C4')
same("example", staff_pos('E4', 'treble'), 0); same("example", ledger_count(0), 0); same("example", midi('E4'), 64)
# practice[0]
same("practice[0]", [at(p, 'treble') for p in range(0, 9, 2)], ['E4', 'G4', 'B4', 'D5', 'F5'])
same("practice[0]", [at(p, 'bass') for p in range(0, 9, 2)], ['G2', 'B2', 'D3', 'F3', 'A3'])
# practice[1]
same("practice[1]", [at(5, 'treble'), at(2, 'bass'), at(4, 'alto'), at(10, 'bass'), at(0, 'tenor')], ['C5', 'B2', 'C4', 'C4', 'D3'])
# practice[2]
same("practice[2]", [staff_pos('A5', 'treble'), staff_pos('C6', 'treble'), staff_pos('E2', 'bass'), staff_pos('A3', 'treble')], [10, 12, -2, -4])
same("practice[2]", [ledger_count(10), ledger_count(12), ledger_count(-2), ledger_count(-4)], [1, 2, 1, 2])
check("practice[2]", all(p % 2 == 0 for p in [10, 12, -2, -4]), "all four sit on a ledger line")
same("practice[2]", at(-2, 'treble'), 'C4')
# practice[3]
same("practice[3]", [at(p, 'alto') for p in (0, 5, 8, 9)], ['F3', 'D4', 'G4', 'A4'])
same("practice[3]", [staff_pos(p, 'treble') for p in ('F3', 'D4', 'G4', 'A4')], [-6, -1, 2, 3])
same("practice[3]", [ledger_count(-6), ledger_count(-1)], [3, 0]); same("practice[3]", [where(2), where(3)], [('line', 2), ('space', 2)])
same("practice[3]", [staff_pos('C3', 'alto'), ledger_count(staff_pos('C3', 'alto')), staff_pos('C3', 'treble'), ledger_count(staff_pos('C3', 'treble'))], [-3, 1, -9, 4])
