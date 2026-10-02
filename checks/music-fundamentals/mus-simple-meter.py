# content: 4dcaa456e4f2
# mus-simple-meter: Beat, Meter & Simple Time Signatures
from music import *
F = Fraction
def bar_up(sig, durs):
    """Split durations into measures, cutting (and tying) any note that crosses a bar line."""
    m, out, cur, room = measure_len(sig), [], [], measure_len(sig)
    for d in durs:
        tied = False
        while d > 0:
            p = min(d, room); cur.append((p, tied)); d -= p; room -= p; tied = True
            if room == 0: out.append(cur); cur, room = [], m
    if cur: out.append(cur)
    return out
# formal: the nine simple signatures
for top, grp in ((2, 'duple'), (3, 'triple'), (4, 'quadruple')):
    for bot in (2, 4, 8):
        same("formal", meter(f'{top}/{bot}'), ('simple', grp, F(1, bot)))
        same("formal", measure_len(f'{top}/{bot}'), top * F(1, bot))
# example: 3/4, dotted quarter, eighth, half, half, quarter, dotted half, half
same("example", measure_len('3/4'), 3 * value('quarter')); same("example", meter('3/4')[:2], ('simple', 'triple'))
vals = [value('quarter', 1), value('eighth'), value('half'), value('half'), value('quarter'), value('half', 1), value('half')]
same("example", vals[0] + vals[1], F(1, 2)); same("example", F(1, 2) + vals[2], 1); check("example", 1 > F(3, 4), "over")
bars = bar_up('3/4', vals)
same("example", [[p for p, _ in b] for b in bars], [[F(3, 8), F(1, 8), F(1, 4)], [F(1, 4), F(1, 2)], [F(1, 4), F(1, 2)], [F(1, 4), F(1, 2)]])
same("example", [[t for _, t in b] for b in bars], [[False, False, False], [True, False], [False, False], [True, False]])
same("example", [sum(p for p, _ in b) for b in bars], [F(3, 4)] * 4)
same("example", F(1, 4) + value('half', 1), 1); same("example", value('half', 1), F(1, 2) + F(1, 4))
same("example", 4 * F(3, 4), sum(vals)); same("example", sum(vals), 3)
# practice[0]
same("practice[0]", [meter('2/4'), measure_len('2/4')], [('simple', 'duple', value('quarter')), F(1, 2)])
same("practice[0]", [meter('3/8'), measure_len('3/8')], [('simple', 'triple', value('eighth')), F(3, 8)])
same("practice[0]", [meter('4/2'), measure_len('4/2')], [('simple', 'quadruple', value('half')), 2])
same("practice[0]", [meter('2/2'), measure_len('2/2')], [('simple', 'duple', value('half')), 1])
# practice[1]: 4/4
m = measure_len('4/4'); same("practice[1]", m, 1)
a = value('half') + value('quarter', 1) + value('eighth')
b = value('quarter') + value('quarter', 1) + 2 * value('eighth')
c = value('half', 1) + value('quarter', 1)
same("practice[1]", [a, b, c], [1, F(7, 8), F(9, 8)])
same("practice[1]", [m - b, c - m], [value('eighth'), value('eighth')])
# practice[2]: 2/2 vs 4/4
same("practice[2]", [measure_len('2/2'), measure_len('4/4'), 8 * value('eighth')], [1, 1, 1])
same("practice[2]", [meter('2/2')[1], meter('4/4')[1]], ['duple', 'quadruple'])
same("practice[2]", [meter('4/4')[2] / value('eighth'), meter('2/2')[2] / value('eighth')], [2, 4])
# practice[3]: 2/4, eighth pickup, then dotted quarter, quarter, eighth, quarter, dotted quarter
ml = measure_len('2/4'); same("practice[3]", ml, F(4, 8))
rest = [value('quarter', 1), value('quarter'), value('eighth'), value('quarter'), value('quarter', 1)]
bars = bar_up('2/4', rest)
same("practice[3]", [[p for p, _ in b] for b in bars], [[F(3, 8), F(1, 8)], [F(1, 8), F(1, 8), F(1, 4)], [F(3, 8)]])
same("practice[3]", [[t for _, t in b] for b in bars], [[False, False], [True, False, False], [False]])
same("practice[3]", value('eighth') + sum(p for p, _ in bars[-1]), ml)
