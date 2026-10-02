"""Independent music-theory helpers for check files (checks/music-fundamentals/*.py):  from music import *
Written separately from the lab kit (web/src/kit-music.js) so a page is checked against a second implementation.

    midi('C4') == 60          freq('A4') == 440.0        pc('B#3') == 0
    interval('C4', 'Eb4') == 'm3'      semis('C4', 'G4') == 7
    transpose('E4', 'M3') == 'G#4'      major_scale('F#') == ['F#','G#','A#','B','C#','D#','E#']
    key_sig('Bb') == -2 (flats negative)     staff_pos('C4', 'treble') == -2  (0 = bottom line)
    value('quarter', dots=1) == Fraction(3, 8)    meter('6/8') == ('compound', 'duple', Fraction(3, 8))
    cents(Fraction(3, 2)) ≈ 701.955    nearest(330) == ('E4', 1.955…)
Pitch strings use ASCII: C4, F#3, Bb5, Fx4 (double sharp), Ebb2. Use `uni(s)` to turn ♯ ♭ 𝄪 𝄫 into ASCII first.
"""
import math, re
from fractions import Fraction

LETTERS = 'CDEFGAB'
_SEMI = {'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11}


def uni(s):
    return s.replace('𝄪', 'x').replace('𝄫', 'bb').replace('♯', '#').replace('♭', 'b').replace('♮', '')


def split(p):
    m = re.fullmatch(r'([A-G])(bb|b|#|x|##)?(-?\d+)', uni(p).strip())
    if not m:
        raise ValueError(f'not a pitch: {p!r}')
    acc = {'bb': -2, 'b': -1, None: 0, '#': 1, 'x': 2, '##': 2}[m.group(2)]
    return m.group(1), acc, int(m.group(3))


def midi(p):
    L, a, o = split(p)
    return 12 * (o + 1) + _SEMI[L] + a


def pc(p):
    return midi(p) % 12


def freq(p, a4=440.0):
    m = p if isinstance(p, int) else midi(p)
    return a4 * 2 ** ((m - 69) / 12)


def letter_index(p):
    L, _, o = split(p)
    return 7 * o + LETTERS.index(L)


_PERF = {1, 4, 5}
# half steps of the major / perfect interval for each simple size
_BASE = {1: 0, 2: 2, 3: 4, 4: 5, 5: 7, 6: 9, 7: 11}


def semis(p, q):
    return midi(q) - midi(p)


def interval(p, q):
    """Name of the interval from p up to q, e.g. 'M3', 'P5', 'A4', 'm10'."""
    size = letter_index(q) - letter_index(p) + 1
    if size < 1:
        raise ValueError('second pitch is below the first')
    octs, simple = divmod(size - 1, 7)
    simple += 1
    diff = semis(p, q) - (_BASE[simple] + 12 * octs)
    table = {0: 'P', 1: 'A', -1: 'd', 2: 'AA', -2: 'dd'} if simple in _PERF else {0: 'M', -1: 'm', 1: 'A', -2: 'd', 2: 'AA', -3: 'dd'}
    return f'{table[diff]}{size}' if diff in table else f'?{size}'


def transpose(p, iv):
    m = re.fullmatch(r'(AA|dd|P|M|m|A|d)(\d+)', iv)
    qual, size = m.group(1), int(m.group(2))
    for cand_acc in (-2, -1, 0, 1, 2):
        idx = letter_index(p) + size - 1
        L, o = LETTERS[idx % 7], idx // 7
        name = L + {-2: 'bb', -1: 'b', 0: '', 1: '#', 2: 'x'}[cand_acc] + str(o)
        if interval(p, name) == iv:
            return name
    raise ValueError(f'cannot spell {iv} above {p}')


def major_scale(tonic):
    """Letter names (no octave) of the major scale on tonic, e.g. 'Eb' → Eb F G Ab Bb C D."""
    out, cur = [], tonic + '4'
    for step in ['M2', 'M2', 'm2', 'M2', 'M2', 'M2', 'm2']:
        out.append(re.sub(r'-?\d+$', '', cur))
        cur = transpose(cur, step)
    return out


def key_sig(tonic, minor=False):
    """+n sharps / −n flats, counted from the spelled scale (relative major for minor keys)."""
    t = tonic
    if minor:
        t = re.sub(r'-?\d+$', '', transpose(tonic + '4', 'm3'))
    sc = major_scale(t)
    return sum(s.count('#') + 2 * s.count('x') for s in sc) - sum(s.count('b') for s in sc)


_BOTTOM = {'treble': 'E4', 'bass': 'G2', 'alto': 'F3', 'tenor': 'D3'}


def staff_pos(p, clef='treble'):
    """0 = bottom line, 1 = first space … 8 = top line; negative/above 8 need ledger lines."""
    return letter_index(p) - letter_index(_BOTTOM[clef])


def ledger_count(pos):
    return len(range(-2, pos - 1, -2)) if pos <= -2 else len(range(10, pos + 1, 2)) if pos >= 10 else 0


_VAL = {'whole': Fraction(1), 'half': Fraction(1, 2), 'quarter': Fraction(1, 4), 'eighth': Fraction(1, 8), 'sixteenth': Fraction(1, 16), 'thirty-second': Fraction(1, 32)}


def value(kind, dots=0):
    """Duration in whole notes; each dot adds half of the previous addition."""
    v, add = _VAL[kind], _VAL[kind]
    for _ in range(dots):
        add /= 2
        v += add
    return v


def meter(sig):
    """('simple'|'compound'|'asymmetric', 'duple'|'triple'|'quadruple'|…, beat length in whole notes)."""
    top, bottom = map(int, sig.split('/'))
    if top in (6, 9, 12):
        beats = top // 3
        return 'compound', {2: 'duple', 3: 'triple', 4: 'quadruple'}[beats], Fraction(3, bottom)
    if top in (5, 7, 11):
        return 'asymmetric', f'{top} unequal', Fraction(1, bottom)
    return 'simple', {2: 'duple', 3: 'triple', 4: 'quadruple'}.get(top, f'{top}-beat'), Fraction(1, bottom)


def measure_len(sig):
    top, bottom = map(int, sig.split('/'))
    return Fraction(top, bottom)


def cents(ratio):
    return 1200 * math.log2(float(ratio))


def nearest(f):
    """Nearest equal-tempered note (sharp spelling) and the deviation in cents."""
    m = 69 + 12 * math.log2(f / 440)
    r = round(m)
    names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    return names[r % 12] + str(r // 12 - 1), 100 * (m - r)


def period(f):
    return 1 / f


def wavelength(f, v=343.0):
    return v / f
