# content: b0a986aeee88
# eng-agreement: Subject–Verb Agreement
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below with WebFetch, fetched twice with different prompts; curly quotes
# and apostrophes normalised, line breaks inside a paragraph read as spaces).
# Tagging, the counts claimed in the notes, and the verbs chosen in the example and practice are compared
# with an independent agreement engine written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1), m.group(2)))
    return out
def words(tokens):
    return [re.sub(r'_[a-z]+\*?(#[a-z0-9]+)?$', '', t) for t in tokens.split() if re.search(r'[A-Za-z]', t)]

S = page['stories']
SOURCES = [
    # A Tale of Two Cities, Project Gutenberg #98, Book the First, ch. I "The Period", second paragraph
    "There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.",
    # Lincoln's Gettysburg Address, Project Gutenberg #4, last paragraph, sentences 2-4. This edition has no comma
    # after "struggled here". (The closing "government of the people. . .by the people" is printed with spaced dots
    # that tokens cannot reproduce, so the page uses these sentences instead.)
    "The brave men, living and dead, who struggled here have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember, what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.",
    # The Hound of the Baskervilles, Project Gutenberg #2852, ch. 1 "Mr. Sherlock Holmes", first paragraph, sentences 1-4
    "Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table. I stood upon the hearth-rug and picked up the stick which our visitor had left behind him the night before. It was a fine, thick piece of wood, bulbous-headed, of the sort which is known as a “Penang lawyer.” Just under the head was a broad silver band nearly an inch across.",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")
    check(f"story[{i}]", set(S[i]['tags']) >= set(S[i]['focus']), "focus tags are defined")
# Colours match the page legend (TREE-SPEC: c1 head, c2 verb, c3 intervening words, c4 rule-deciding word,
# c5 agreement result). The legend is not in `page`, so the key is written here from the spec.
LEG = {'c1': 'Head of the subject', 'c2': 'Verb', 'c3': 'Intervening words', 'c4': 'Rule-deciding word'}
for i, s in enumerate(S):
    for k, v in s['tags'].items():
        want = {'h': 'c1', 'v': 'c2', 'x': 'c3', 'r': 'c4'}[k]
        check(f"story[{i}]", v['c'] == want and v['name'] == LEG[want], f"tag {k} should be {want} ({LEG[want]})")

# Independent analysis: each head (h) with the verb (v) it controls, and rule words (r).
HV = [
    [("king", "were"), ("queen", "were"), ("king", "were"), ("queen", "were"), ("it", "was"), ("things", "were")],
    [("men", "have"), ("world", "will"), ("we", "say"), ("it", "can"), ("It", "is"), ("they", "have")],
    [("Holmes", "was"), ("I", "stood"), ("It", "was"), ("which", "is"), ("band", "was")],
]
for i, want in enumerate(HV):
    t = tagged(S[i]['tokens'])
    heads = [w for w, g in t if g == 'h']; verbs = [w for w, g in t if g == 'v']
    check(f"story[{i}]", heads == [h for h, _ in want], f"heads: page {heads}")
    # verbs in order (in story 0 one verb serves each compound subject king … and queen)
    wantv = ['were', 'were', 'was', 'were'] if i == 0 else [v for _, v in want]
    check(f"story[{i}]", verbs == wantv, f"verbs: page {verbs}")
check("story[0]", [w for w, g in tagged(S[0]['tokens']) if g == 'r'] == ['There', 'and', 'there', 'and'], "rule words: there, and, there, and")

# The agreement engine (number of a subject, then the present/past form of be or have).
def form(verb, per, num):
    s3 = per == 3 and num == 'sg'
    if verb == 'be': return 'am' if (per == 1 and num == 'sg') else 'is' if s3 else 'are'
    if verb == 'was': return 'was' if (per != 2 and num == 'sg') else 'were'
    if verb == 'have': return 'has' if s3 else 'have'
    return verb + 's' if s3 else verb
def compound(conj, a, b):
    """a, b = (person, number). Returns the controller's (person, number)."""
    if conj == 'and': return (min(a[0], b[0]), 'pl')
    if conj in ('or', 'nor'): return b
    if conj == 'every': return (3, 'sg')
ALWAYS_SG = {'each', 'either', 'neither', 'one', 'another', 'much', 'everyone', 'everybody', 'everything', 'someone', 'somebody', 'something', 'anyone', 'anybody', 'anything', 'no one', 'nobody', 'nothing'}
ALWAYS_PL = {'both', 'few', 'many', 'several', 'others'}
VARIABLE = {'some', 'any', 'none', 'all', 'most'}
def indefinite(p, of_noun_num=None):
    if p in ALWAYS_SG: return 'sg'
    if p in ALWAYS_PL: return 'pl'
    if p in VARIABLE: return of_noun_num

# Stories: the agreements claimed
check("story[0]", form('was', *compound('and', (3, 'sg'), (3, 'sg'))) == 'were', "there were a king … and a queen: plural")
check("story[0]", form('was', 3, 'pl') == 'were' and form('was', 3, 'sg') == 'was', "things were; it was")
t1 = words(S[1]['tokens'])
check("story[1]", t1.index('have') - t1.index('men') - 1 == 6, "six words between men and have")
check("story[1]", 'six words' in plain(S[1]['note']) and 'six words later' in S[1]['notes']['men'], "note says six words")
check("story[1]", form('have', 3, 'pl') == 'have' and form('say', 1, 'pl') == 'say' and form('say', 3, 'sg') == 'says', "men have; we say (plain form), he says")
check("story[1]", 'only we say carries it' in plain(S[1]['note']), "note: only we say shows agreement in the second sentence")
t2 = words(S[2]['tokens'])
gap = t2.index('was', t2.index('night')) - t2.index('Holmes') - 1
check("story[2]", gap == 20 and '20 words' in plain(S[2]['note']) and '20 words' in S[2]['notes']['was2'], f"words between Holmes and was: {gap}")
check("story[2]", form('be', 3, 'sg') == 'is' and form('was', 3, 'sg') == 'was', "which (sort) is; band was")
t2t = tagged(S[2]['tokens'])
iv = [w for w, _ in t2t].index('Just')
check("story[2]", [w for w, g in t2t[iv:] if g == 'v'] == ['was'] and [w for w, g in t2t[iv:] if g == 'h'] == ['band'] and [w for w, _ in t2t].index('band') > [w for w, _ in t2t].index('was', iv), "inverted: was before its subject band")

# Formal statement
fp = plain(page['formal'])
check("formal", "grammatical concord" in fp.lower() and "notional concord" in fp.lower() and "proximity" in fp.lower(), "Quirk et al.'s three principles")
check("formal", all(w in fp for w in ['both, few, many, several, others', 'some, any, none, all, most']), "indefinite pronoun groups listed")

# Worked example: Each of the reports that [was/were] filed last week [contains/contain] errors.
ans = plain(page['example']['answer'])
rel = form('was', 3, 'pl')                     # that → antecedent reports (plural)
main = 'contains' if indefinite('each') == 'sg' else 'contain'
check("example", rel == 'were' and main == 'contains', "engine: were filed, contains")
check("example", f"that {rel} filed last week {main} errors" in ans, "answer sentence")

# Practice
pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", form('be', 3, 'sg') == 'is' and pa[0].startswith("(a) is"), "box … is")
check("practice[0]", "(b) is" in pa[0], "bread and butter: one dish, singular")
check("practice[0]", form('was', *compound('nor', (3, 'sg'), (3, 'pl'))) == 'were' and "(c) were" in pa[0], "neither coach nor players were")
check("practice[0]", form('was', *compound('or', (3, 'pl'), (3, 'sg'))) == 'was' and "(d) was" in pa[0], "either players or coach was")
check("practice[1]", form('have', 3, indefinite('everyone')) == 'has' and "(a) has" in pa[1], "everyone has")
check("practice[1]", form('was', 3, indefinite('some', 'sg')) == 'was' and "(b) was" in pa[1], "some of the cargo (noncount) was")
check("practice[1]", form('was', 3, indefinite('some', 'pl')) == 'were' and "(c) were" in pa[1], "some of the crates were")
check("practice[1]", indefinite('several') == 'pl' and "(d) need" in pa[1], "several need")
check("practice[2]", "(a) has" in pa[2] and "British English also accepts" in pa[2], "jury has (US); have (UK)")
check("practice[2]", "(b) is" in pa[2] and "(c) is" in pa[2] and "(d) have" in pa[2], "ten dollars is; mathematics is; a number of … have")
check("practice[3]", "(a) sail" in pa[3] and "refers to captains" in pa[3], "one of those captains who sail")
check("practice[3]", "(b) sails" in pa[3] and "refers to one" in pa[3], "the only one … who sails")
check("practice[3]", "(c) is" in pa[3] and form('be', 3, 'sg') == 'is', "linking verb agrees with the subject problem")
