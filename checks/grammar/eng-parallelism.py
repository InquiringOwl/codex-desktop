# content: f867a49f61e4
# eng-parallelism: Parallelism
# Passages compared with web/SOURCES-ENGLISH.md (verified against Project Gutenberg). Analysis (members, frames,
# word counts) written independently here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1).replace('~', ' '), m.group(2)))
    return out

def spans(tokens):
    out, prev = [], None
    for tok in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', tok)
        if not m: prev = None; continue
        w, t = m.group(1), m.group(2)
        if prev == t: out[-1] = (t, out[-1][1] + ' ' + w)
        else: out.append((t, w))
        prev = t
    return out

wc = lambda s: len(re.findall(r"[A-Za-z0-9’']+", s))

S = page['stories']
SOURCES = [
    # Gettysburg Address, Gutenberg #4
    "The world will little note, nor long remember, what we say here, but it can never forget what they did here.",
    # A Tale of Two Cities, Gutenberg #98, Book the First, ch. I
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, …",
    # Second Inaugural Address, Gutenberg #8, final paragraph
    "With malice toward none; with charity for all; with firmness in the right, as God gives us to see the right, let us strive on to finish the work we are in; to bind up the nation’s wounds; to care for him who shall have borne the battle, and for his widow, and his orphan—to do all which may achieve and cherish a just and lasting peace among ourselves, and with all nations.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "public domain")

# Story 0: Gettysburg
sp = spans(S[0]['tokens'])
check("story[0]", sp == [('vp','little note'),('cj','nor'),('vp','long remember'),('fr','what'),('ma','we say'),('fr','here'),('cj','but'),('fr','what'),('mb','they did'),('fr','here')], f"spans {sp}")
c1, c2 = "what we say here", "what they did here"
check("story[0]", wc(c1) == wc(c2) == 4, "both clauses four words (note says so)")
check("story[0]", c1.split()[0] == c2.split()[0] and c1.split()[-1] == c2.split()[-1] and c1.split()[1:3] != c2.split()[1:3], "same frame what…here, only the middle changes (epistrophe on here)")
check("story[0]", 'we' in c1.split() and 'they' in c2.split(), "we / they contrast")

# Story 1: Dickens
body = SOURCES[1].split('—in short')[0]
clauses = [c.strip() for c in body.split(',')]
check("story[1]", len(clauses) == 14, f"fourteen clauses (got {len(clauses)})")
check("story[1]", all(wc(c) == 6 for c in clauses[:10]), f"first ten clauses six words: {[wc(c) for c in clauses]}")
check("story[1]", sum(c.lower().startswith('it was the') for c in clauses) == 10 and sum(c.startswith('we had') for c in clauses) == 2 and sum(c.startswith('we were all going direct') for c in clauses) == 2, "frame counts 10/2/2")
pos = [w for w, t in tagged(S[1]['tokens']) if t == 'pos']
neg = [w for w, t in tagged(S[1]['tokens']) if t == 'neg']
check("story[1]", pos == ['best','wisdom','belief','Light','spring','hope','everything','Heaven'], f"pos {pos}")
check("story[1]", neg == ['worst','foolishness','incredulity','Darkness','winter','despair','nothing','the','other','way'], f"neg {neg}")
pairs = [('best','worst'),('wisdom','foolishness'),('belief','incredulity'),('Light','Darkness'),('hope','despair'),('everything','nothing'),('Heaven','the other way')]
check("story[1]", len(pairs) == 7, "seven antithetical pairs (note says seven)")
fr = [w for w, t in tagged(S[1]['tokens']) if t == 'rep']
check("story[1]", fr.count('It') + fr.count('it') == 10 and fr.count('we') == 4, "rep frame words: it ×10, we ×4")

# Story 2: Second Inaugural
sp = spans(S[2]['tokens'])
check("story[2]", [x for x in sp if x[0] == 'wp'] == [('wp','malice'),('wp','charity'),('wp','firmness')], "three with-phrase members")
check("story[2]", [x for x in sp if x[0] == 'inf'] == [('inf','finish'),('inf','bind up'),('inf','care for'),('inf','do')], "four infinitives: finish, bind up, care for, do")
check("story[2]", [x[1] for x in sp if x[0] == 'rep'] == ['With','with','with','to','to','to','to'], "With ×3, to ×4")
tri = ["with malice toward none", "with charity for all", "with firmness in the right"]
check("story[2]", [wc(t) for t in tri] == [4, 4, 5], "lengths 4, 4, 5: third longest, charity same length as malice (notes)")

# Worked example
ex = plain(page['example']['answer'])
check("example", ex.startswith("The new manager is known for her honesty, her long hours, and her patience with complaints."), "three noun phrases after known for")
check("example", "being honest, working long hours, and listening to complaints" in ex, "all-gerund alternative is parallel")
# all three items after the frame "known for" must be the same form (NP) in the answer
items = re.search(r"known for (.*?)\. \(", ex).group(1).replace(', and ', ', ').split(', ')
check("example", len(items) == 3 and all(x.startswith('her ') for x in items), f"items {items}")

pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", pa[0].startswith("The app is fast, reliable, and cheap.") and 'adjective' in pa[0], "fast, reliable, cheap: adjectives")
check("practice[1]", pa[1].startswith("The storm closed not only the roads but also the schools."), "correlative fixed: both halves noun phrases")
check("practice[2]", 'that' in pa[2] and 'parallel objects of found' in pa[2], "repeat that")
check("practice[3]", pa[3].startswith("Antithesis") and 'anaphora' in pa[3] and 'not isocolon' in pa[3], "devices")
# my analysis for P3: first pair 'not to bury the past but to build the future' = 11 words; second 'not to divide but to unite' = 7: unequal
a, b = "not to bury the past but to build the future", "not to divide but to unite"
check("practice[3]", wc(a) == 10 and wc(b) == 6 and wc(a) != wc(b), "second pair shorter than first (so no isocolon)")
formal = plain(page['formal'])
check("formal", "epistrophe repeats the closing words (of the people, by the people, for the people" in formal and "a tricolon is a series of three (I came, I saw, I conquered)" in formal, "tricolon / epistrophe examples")
check("formal", "(not She not only plays the piano but also the violin, which pairs a verb phrase with a noun phrase)" in formal, "correlative misplacement")
