# content: 52a7ed504ee8
# eng-subject-predicate: Subject & Predicate
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below with WebFetch; curly quotes and apostrophes normalised, the
# Gutenberg "--" written as an em dash, hard line wraps inside a paragraph read as spaces).
# Subject/predicate tagging, the worked example and the practice answers are compared with an
# independent analysis written here (role codes: s subject, S simple subject, p predicate,
# V simple predicate, - outside the split).
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip()

def tagged(tokens):
    """Every word token (not bare punctuation) as (word, tag or '-')."""
    out = []
    for t in tokens.split():
        if t == '¶' or re.fullmatch(r'[,.;:!?“”‘’—()]+', t):
            continue
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        out.append((m.group(1), m.group(2)) if m else (t, '-'))
    return out

S = page['stories']
SOURCES = [
    # The Adventures of Tom Sawyer, Complete, Project Gutenberg #74, Chapter II (one paragraph in this edition)
    "Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush. He surveyed the fence, and all gladness left him and a deep melancholy settled down upon his spirit. Thirty yards of board fence nine feet high. Life to him seemed hollow, and existence but a burden.",
    # Walden, and On The Duty Of Civil Disobedience, Project Gutenberg #205, Walden, "Economy", first sentence
    "When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only.",
    # Moby Dick; Or, The Whale, Project Gutenberg #2701, Chapter 1 "Loomings" (Gutenberg "--" printed as em dashes)
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    # Jane Eyre: An Autobiography, Project Gutenberg #1260, Chapter I, first sentence
    "There was no possibility of taking a walk that day.",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")
    check(f"story[{i}]", set(S[i]['focus']) <= set(S[i]['tags']), "focus tags are defined")
    check(f"story[{i}]", all(v['c'] == {'s': 'c1', 'p': 'c2', 'ss': 'c3', 'sp': 'c4', 'u': 'c5'}[k] for k, v in S[i]['tags'].items()), "tag colours match the page legend")

# Independent analysis, one code per word (s complete subject, ss simple subject, p predicate,
# sp simple predicate, u displaced subject, - outside any subject/predicate).
TRUTH = [
    # Tom | appeared on the sidewalk with a bucket of whitewash and a long-handled brush.
    "ss sp p p p p p p p p p p p p "
    # He | surveyed the fence, and all gladness | left him and a deep melancholy | settled down upon his spirit.
    "ss sp p p - s ss sp p - s s ss sp p p p p "
    # Thirty yards of board fence nine feet high. (fragment: no predicate)
    "- - - - - - - - "
    # Life | to him seemed hollow, and existence | but a burden.
    "ss p p sp p - ss p p p",
    # When I wrote the following pages, or rather the bulk of them, (fronted adverb clause: predicate)
    "p p p p p p p p p p p p "
    # I | lived alone, in the woods, a mile from any neighbor, in a house which I had built myself,
    "ss sp p p p p p p p p p p p p p p p p p "
    # on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only.
    "p p p p p p p p p p sp p p p p p p p p p",
    # (you) Call me Ishmael.
    "sp p p "
    # Some years ago — never mind how long precisely — (aside left outside)
    "p p p - - - - - "
    # having little or no money in my purse, and nothing particular to interest me on shore,
    "s s s s s s s s s s s s s s s s "
    # I | thought I would sail about a little and see the watery part of the world.
    "ss sp p p p p p p p p p p p p p p",
    # There was no possibility of taking a walk that day.
    "- sp u ss u u u u p p",
]
for i, want in enumerate(TRUTH):
    got = [t for _, t in tagged(S[i]['tokens'])]
    check(f"story[{i}]", got == want.split(), f"tags differ: page {' '.join(got)}")

# Claims in the story notes
t0 = tagged(S[0]['tokens'])
check("story[0]", [w for w, t in t0 if t == 'ss'] == ['Tom', 'He', 'gladness', 'melancholy', 'Life', 'existence'], "six clauses, six simple subjects")
check("story[0]", [w for w, t in t0 if t == 'sp'] == ['appeared', 'surveyed', 'left', 'settled', 'seemed'], "five written verbs: the sixth clause borrows seemed (gapping)")
frag = "Thirty yards of board fence nine feet high"
fi = [w for w, _ in t0].index('Thirty')
check("story[0]", frag in SOURCES[0] and [w for w, _ in t0[fi:fi + 8]] == frag.split() and all(t == '-' for _, t in t0[fi:fi + 8]), "the fragment is uncoloured")
t1 = tagged(S[1]['tokens'])
check("story[1]", [w for w, t in t1 if t in ('s', 'ss')] == ['I'], "complete subject of one word")
check("story[1]", sum(1 for _, t in t1 if t in ('p', 'sp')) == 50, "predicate of fifty words")
check("story[1]", [w for w, t in t1 if t == 'sp'] == ['lived', 'earned'], "compound predicate lived … and earned")
t2 = tagged(S[2]['tokens'])
check("story[2]", not any(t in ('s', 'ss') for _, t in t2[:3]), "Call me Ishmael has no written subject")
words2 = [w for w, _ in t2[3:]]          # second sentence
check("story[2]", words2.index('I') == 24 and t2[3 + 24][1] == 'ss', "24 words before the subject I, the 25th word")
check("story[2]", [w for w, t in t2 if t == 'sp'] == ['Call', 'thought'], "verbs call and thought")
t3 = tagged(S[3]['tokens'])
check("story[3]", t3[0] == ('There', '-') and t3[1] == ('was', 'sp') and t3[3] == ('possibility', 'ss'), "verb before the displaced subject")

# ---- a small independent analyser for the example and practice ----
def parse(code):
    """'The/s fall/S would/V never/p come/V' → list of (word, role)."""
    return [tuple(x.rsplit('/', 1)) for x in code.split()]
def parts(code):
    a = parse(code)
    cs = ' '.join(w for w, r in a if r in 'sS'); cp = ' '.join(w for w, r in a if r in 'pV')
    ss = [w for w, r in a if r == 'S']; sp_ = ' '.join(w for w, r in a if r == 'V')
    return cs, cp, ss, sp_
def contiguous_split(code):
    """In statement order the subject is one block before the predicate."""
    rs = ''.join('s' if r in 'sS' else 'p' for _, r in parse(code))
    return re.fullmatch(r's*p*', rs) is not None
def object_of_preposition(code, word):
    """Is word inside a prepositional phrase of the subject (after of/with/in … within the subject)?"""
    a = [(w, r) for w, r in parse(code) if r in 'sS']
    preps = {'of', 'with', 'in', 'on', 'from', 'across'}
    i = [w for w, _ in a].index(word)
    return any(w in preps for w, _ in a[:i]) and a[i][1] == 's'

# Worked example: Would the fall never come to an end?
Q = "Would/V the/s fall/S never/p come/V to/p an/p end/p"
N = "The/s fall/S would/V never/p come/V to/p an/p end/p"
check("example", sorted(w.lower() for w, _ in parse(Q)) == sorted(w.lower() for w, _ in parse(N)), "statement order uses the same words")
check("example", contiguous_split(N) and not contiguous_split(Q), "the split is one gap only in statement order")
cs, cp, ss, sv = parts(N)
ans = plain(page['example']['answer'])
check("example", f"Complete subject: the fall; simple subject: fall." in ans and ss == ['fall'], "subject")
check("example", f"Complete predicate: {cp}," in ans and cp == "would never come to an end", "complete predicate")
check("example", f"simple predicate: {sv}." in ans and sv == "would come", "simple predicate excludes never")

# Practice
pa = [plain(p['a']) for p in page['practice']]
P0 = "The/s old/s sailor/S with/s the/s wooden/s leg/s was/V mending/V his/p nets/p on/p the/p pier/p"
cs, cp, ss, sv = parts(P0)
check("practice[0]", f"Complete subject: {cs}." in pa[0] and f"Complete predicate: {cp}." in pa[0], "complete subject and predicate")
check("practice[0]", f"Simple subject: {ss[0]}" in pa[0] and f"Simple predicate: {sv}," in pa[0] and object_of_preposition(P0, 'leg'), "sailor; was mending; leg is an object of with")
check("practice[0]", "wasn’t he?" in pa[0], "tag question: past be, singular masculine")

P1a = "Meg/S and/s Jo/S laughed/V and/p ran/V to/p the/p window/p"
cs, cp, ss, sv = parts(P1a)
check("practice[1]", ss == ['Meg', 'Jo'] and sv == 'laughed ran' and f"compound subject, {cs}" in pa[1] and f"compound predicate, {cp}" in pa[1], "(a) compound subject and predicate")
P1b = [("Meg/S laughed/V"), ("Jo/S ran/V to/p the/p window/p")]
check("practice[1]", len(P1b) == 2 and "(b) Neither" in pa[1] and "Meg | laughed" in pa[1] and "Jo | ran to the window" in pa[1], "(b) two clauses: compound sentence")

P2 = {"a": ("Close/V the/p door/p", "you"), "b": ("two/s letters/S are/V on/p the/p desk/p", "letters"),
      "c": ("The/s ship/S has/V left/V", "ship"), "d": ("The/s bus/S comes/V here/p", "bus")}
for k, (code, head) in P2.items():
    cs, cp, ss, sv = parts(code)
    if k == "a":
        check("practice[2]", not ss and "(a) you (understood)" in pa[2], "(a) understood you")
    else:
        check("practice[2]", ss == [head] and f"({k}) {head} (complete subject {cs.lower() if k != 'b' else cs})" in pa[2], f"({k}) simple subject {head}")
check("practice[2]", parts(P2["c"][0])[3] == "has left" and "the simple predicate is has left" in pa[2], "(c) has left")

P3o = "Across/p the/p water/p came/V the/s sound/S of/s the/s bells/s of/s the/s old/s church/s"
P3n = "The/s sound/S of/s the/s bells/s of/s the/s old/s church/s came/V across/p the/p water/p"
check("practice[3]", sorted(w.lower() for w, _ in parse(P3o)) == sorted(w.lower() for w, _ in parse(P3n)), "statement order is a rearrangement")
cs, cp, ss, sv = parts(P3n)
check("practice[3]", contiguous_split(P3n) and not contiguous_split(P3o), "inverted original, one split in statement order")
check("practice[3]", f"Ask what came: {cs.lower()}" in pa[3] and ss == ['sound'] and "Simple subject: sound" in pa[3], "complete and simple subject")
check("practice[3]", object_of_preposition(P3n, 'bells') and object_of_preposition(P3n, 'church'), "bells and church are objects of of")
check("practice[3]", f"Complete predicate: {cp}" in pa[3] and f"Simple predicate: {sv}." in pa[3], "came across the water; came")
check("practice[3]", "didn’t it?" in pa[3], "singular tag pronoun it for sound")
