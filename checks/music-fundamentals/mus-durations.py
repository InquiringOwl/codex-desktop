# content: b24524fdab51
# mus-durations: Note Values & Rests
from music import *
F = Fraction
# formal: halving chain, flag formula, dot multipliers 3/2, 7/4, 15/8
same("formal", [value(k) for k in ('whole', 'half', 'quarter', 'eighth', 'sixteenth', 'thirty-second')], [F(1), F(1, 2), F(1, 4), F(1, 8), F(1, 16), F(1, 32)])
same("formal", [value(k) for k in ('quarter', 'eighth', 'sixteenth', 'thirty-second')], [F(1, 2**(f + 2)) for f in range(4)])
for kind in ('whole', 'half', 'quarter', 'eighth'):
    same("formal", [value(kind, n) / value(kind) for n in (1, 2, 3)], [F(3, 2), F(7, 4), F(15, 8)])
    same("formal", [value(kind, n) for n in range(4)], [value(kind) * F(2**(n + 1) - 1, 2**n) for n in range(4)])
same("formal", [1 / value('half'), 1 / value('quarter'), 1 / value('eighth'), 1 / value('sixteenth')], [2, 4, 8, 16])
# example: dotted half tied to eighth, double-dotted quarter, sixteenth rest
tied = value('half', 1) + value('eighth')
same("example", value('half', 1), F(3, 4)); same("example", tied, F(7, 8))
same("example", value('quarter', 2), F(7, 16))
tot = tied + value('quarter', 2) + value('sixteenth')
same("example", tot, F(22, 16)); same("example", tot, F(11, 8))
same("example", tot / value('quarter'), F(11, 2))
# practice[0]
same("practice[0]", [value('half', 1), value('eighth', 1), value('half', 2), value('sixteenth')], [F(3, 4), F(3, 16), F(7, 8), F(1, 16)])
# practice[1]
same("practice[1]", [value('quarter', 1) / value('sixteenth'), value('half', 2) / value('eighth'), value('eighth', 1) / value('thirty-second')], [6, 7, 6])
# practice[2]: single-value equivalents
def single(d):
    return [(k, n) for k in ('whole', 'half', 'quarter', 'eighth', 'sixteenth', 'thirty-second') for n in range(4) if value(k, n) == d]
a, b, c = value('quarter') + value('eighth'), value('half') + value('quarter') + value('eighth'), value('quarter') + value('sixteenth')
same("practice[2]", [a, b, c], [F(3, 8), F(7, 8), F(5, 16)])
same("practice[2]", single(a), [('quarter', 1)]); same("practice[2]", single(b), [('half', 2)]); same("practice[2]", single(c), [])
# practice[3]: half, dotted quarter, eighth, quarter rest, two sixteenths, eighth
r = [value('half'), value('quarter', 1), value('eighth'), value('quarter'), value('sixteenth'), value('sixteenth'), value('eighth')]
same("practice[3]", [x * 16 for x in r], [8, 6, 2, 4, 1, 1, 2])
same("practice[3]", sum(r), F(3, 2)); same("practice[3]", sum(r) / value('quarter'), 6)
same("practice[3]", 2 - sum(r), value('half'))
