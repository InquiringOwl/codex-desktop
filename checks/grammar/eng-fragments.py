# content: 8e9307e477a7
# eng-fragments: Fragments, Run-ons & Comma Splices
# Passages compared with web/SOURCES-ENGLISH.md (verified against Project Gutenberg). Fragment analysis written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))
wc = lambda s: len(re.findall(r"[A-Za-z0-9’']+", s))

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        out.append((m.group(1), m.group(2)) if m else (t, None))
    return out

S = page['stories']
SOURCES = [
    # Bleak House, Gutenberg #1023, ch. I
    "London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln’s Inn Hall. Implacable November weather.",
    # Alice's Adventures in Wonderland, Gutenberg #11, ch. I ("never" italic in the source)
    "Down, down, down. Would the fall never come to an end?",
    # A Christmas Carol, Gutenberg #46, Stave One
    "“Bah!” said Scrooge, “Humbug!”",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "public domain")

# Own analysis. Finite verbs per unit: none in the three Bleak House pieces (over / sitting are not finite).
def unit_tags(tokens):
    """Tags of the words of each sentence (sentence ends at . ? !, quote marks ignored)."""
    units, cur = [], []
    for w, t in tagged(tokens):
        cur.append((w, t))
        if w in ('.', '?'): units.append(cur); cur = []
    return units
u = unit_tags(S[0]['tokens'])
check("story[0]", len(u) == 3 and all(t == 'frag' for unit in u for w, t in unit if w not in ('and',)), "three sentences, all tagged fragment")
check("story[0]", [w for unit in u for w, t in unit if t == 'cn'] == ['and'], "and is the connector")
words0 = [w for w, t in tagged(S[0]['tokens']) if re.match(r"\w", w)]
check("story[0]", len(words0) == 17 and wc(SOURCES[0]) == 17, "seventeen words (note says so)")
check("story[0]", [sum(1 for w, t in unit if re.match(r'\w', w)) for unit in u] == [1, 13, 3], "sentence lengths 1 / 13 / 3 words")
u = unit_tags(S[1]['tokens'])
check("story[1]", [{t for w, t in unit} for unit in u] == [{'frag'}, {'ic'}], "Down, down, down = fragment; Would the fall… = independent clause")
check("story[1]", [w for w, t in tagged(S[1]['tokens']) if t == 'frag' and re.match(r'\w', w)] == ['Down','down','down'], "three adverbs")
tg = tagged(S[2]['tokens'])
check("story[2]", [(w, t) for w, t in tg if t][:1] == [('Bah', 'frag')] and [w for w, t in tg if t == 'frag'] == ['Bah', 'Humbug'] and [w for w, t in tg if t == 'ic'] == ['said', 'Scrooge'], "Bah and Humbug fragments; said Scrooge clause")

# Worked example
prompt = plain(page['example']['prompt'])
check("example", "Scrooge counted his money, the clerk shivered by a tiny fire. Because the coal box was in Scrooge’s room." in prompt, "prompt has one comma splice and one fragment")
ex = plain(page['example']['answer'])
fixed = "Scrooge counted his money, while the clerk shivered by a tiny fire because the coal box was in Scrooge’s room."
check("example", ex.startswith(fixed), "answer joins into one sentence")
check("example", len(re.findall(r'(?<=[a-z])\.(?= [A-Z])', fixed)) == 0 and 'because' in fixed and ', because' not in fixed, "one sentence, no comma before essential because-clause")
check("example", "Scrooge counted his money; the clerk shivered by a tiny fire because the coal box was in Scrooge’s room." in ex, "semicolon alternative")
check("example", [w for w in re.findall(r"[a-z]+", "Scrooge counted his money the clerk shivered by a tiny fire because the coal box was in Scrooge’s room") if w in ('counted','shivered','was')] == ['counted','shivered','was'], "three finite verbs")

pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", pa[0].startswith("A fragment") and "participle" in pa[0] and "Scrooge sat up, waiting for the ghost to appear." in pa[0], "waiting = participle, no subject")
check("practice[1]", pa[1].startswith("A fused sentence") and "The bell rang. The ghost appeared." in pa[1] and "When the bell rang, the ghost appeared." in pa[1], "fused sentence, two fixes")
check("practice[2]", pa[2].startswith("No.") and "dependent clause" in pa[2], "Although… = dependent: not a splice")
check("practice[3]", pa[3].startswith("Bob Cratchit asked for Christmas off; consequently, Scrooge grumbled about it."), "semicolon + conjunctive adverb + comma")
check("practice[3]", "Scrooge, consequently, grumbled" in pa[3], "adverb movable")
formal = plain(page['formal'])
check("formal", "five standard repairs" in formal and "I came, I saw, I conquered" in formal and "asyndeton" in formal, "formal claims")
