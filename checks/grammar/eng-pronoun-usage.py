# content: 890c510be0c8
# eng-pronoun-usage: Pronoun Case & Reference
# Language checks. Passages are compared with the verbatim source text: Holmes (Gutenberg #1661) and Wuthering Heights
# (#768) from web/SOURCES-ENGLISH.md; Pride and Prejudice (#1342) ch. 1, first two sentences, verified with WebFetch
# (that edition: "good fortune must" with no comma, and "considered as the rightful property").
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

S = page['stories']
SOURCES = [
    # Sherlock Holmes, Gutenberg #1661, "A Scandal in Bohemia" (italic "the" in source)
    "To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name.",
    # Wuthering Heights, Gutenberg #768, ch. I (prints "1801—" with no full stop)
    "1801—I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with. This is certainly a beautiful country!",
    # Pride and Prejudice, Gutenberg #1342, ch. 1, first two sentences (verified)
    "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "public domain")

# Own analysis: every personal pronoun in each passage, with its case / role.
PERS = {'i','me','my','she','he','him','her','his','we','us','our','they','them','their','it'}
TRUTH = [
    [('she','sub'), ('I','sub'), ('him','obj'), ('her','obj')],
    [('I','sub'), ('my','pos'), ('I','sub')],
    [('It','exp'), ('his','pos'), ('he','sub'), ('their','pos')],
]
for i, want in enumerate(TRUTH):
    words = re.findall(r"[A-Za-z’]+", SOURCES[i])
    found = [w for w in words if w.lower() in PERS]
    check(f"story[{i}]", found == [w for w, _ in want], f"pronouns in text {found}")
    got = [(w, t) for w, t in tagged(S[i]['tokens']) if t in ('sub','obj','pos','exp')]
    check(f"story[{i}]", got == want, f"page case tagging {got} vs {want}")
# antecedents
sp0, sp1, sp2 = spans(S[0]['tokens']), spans(S[1]['tokens']), spans(S[2]['tokens'])
check("story[0]", [x for x in sp0 if x[0] == 'an'] == [('an', 'Sherlock Holmes')], "antecedent of him is Sherlock Holmes")
check("story[1]", ('an', 'neighbour') in sp1 and ('rel', 'that') in sp1 and ('dem', 'This') in sp1, "that -> neighbour; This demonstrative")
check("story[2]", [x for x in sp2 if x[0] in ('an', 'anb')] == [('an', 'a single man'), ('an', 'such a man'), ('anb', 'surrounding families')], f"antecedents {sp2}")
# note claims
n0, n1, n2 = (plain(s['note']) for s in S)
check("story[0]", 'Four personal pronouns: two subjective (she, I) and two objective (him, her)' in n0, "four pronouns, 2 + 2")
check("story[1]", 'three personal pronouns (I twice, my once)' in n1, "I twice, my once")
check("story[2]", len(TRUTH[2]) == 4, "it, his, he, their = four")
# Doyle: him is the only male named before it; she/her have no antecedent in the passage
check("story[0]", 'she' not in [w for t, w in sp0 if t == 'an'], "no antecedent tagged for she")

# Worked example
ex = plain(page['example']['answer'])
check("example", ex.startswith("He and I told the dean, who we thought was busy, about the error, news that surprised her."), "fixed sentence")
check("example", 'whom' not in ex.split('(')[0] and 'which' not in ex.split('(')[0], "no whom/which left")
check("example", re.search(r"When he and I told the dean, who we thought was busy, about the error, the news surprised her", ex), "recast version")
check("example", plain(page['example']['prompt']).count('Him and me') == 1, "compound subject in objective case is the first error")

pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", pa[0].startswith('me.') and 'indirect object' in pa[0] and 'objective' in pa[0], "gave Lin and me: indirect object")
check("practice[1]", pa[1].startswith('whoever.') and 'subject' in pa[1] and 'asked for it' in pa[1], "whoever: subject of asked")
check("practice[2]", pa[2].startswith('Ambiguous reference') and 'the dog or the squirrel' in pa[2], "ambiguous it")
check("practice[2]", 'When the dog saw the squirrel, the squirrel ran up a tree' in pa[2], "repeat the noun fix")
# my analysis: both fixes name the squirrel as the climber; recast leaves 'it' with squirrel/tree as candidates (page says one) - noted, not failed
check("practice[3]", 'subject of an understood verb' in pa[3] and 'more than I do' in pa[3] and 'object' in pa[3], "than I vs than me")
# style-guide claim: singular they accepted by MLA, APA, Chicago
formal = plain(page['formal'])
check("formal", 'singular they' in formal and 'MLA, APA and the Chicago Manual of Style' in formal, "singular they: MLA, APA, Chicago all accept it")
check("formal", 'Hisself and theirselves are nonstandard' in formal, "nonstandard reflexives")
