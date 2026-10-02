# content: 0dff32c22e88
# eng-patterns: Complements & Sentence Patterns
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below with WebFetch, sentence by sentence; straight quotes and
# apostrophes normalised to curly ones). Gutenberg's #46 prints the first word of Stave One in capitals
# ("MARLEY"), kept here. In "upon 'Change" the apostrophe marks the elided Ex- of Exchange; the token
# string joins it to "upon" with "~" so the tokenizer does not glue it to the previous word.
# Tagging (clause functions of the main clauses) and the example and practice answers are compared
# with an independent analysis written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1).replace('~', ' '), m.group(2)))
    return out

def spans(tokens):
    """Consecutive words with the same tag, joined: [(tag, 'phrase'), ...]. A span ends at any untagged
    token (punctuation, a paragraph mark or an untagged word), so two functions in different sentences
    are never merged even when they carry the same tag."""
    out, prev = [], None
    for tok in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', tok)
        if not m:
            prev = None
            continue
        w, t = m.group(1).replace('~', ' '), m.group(2)
        if prev == t: out[-1] = (t, out[-1][1] + ' ' + w)
        else: out.append((t, w))
        prev = t
    return out

S = page['stories']
SOURCES = [
    # A Christmas Carol, Project Gutenberg #46, Stave One, first paragraph (first five sentences, consecutive)
    "MARLEY was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it: and Scrooge’s name was good upon ’Change, for anything he chose to put his hand to. Old Marley was as dead as a door-nail.",
    # Moby-Dick, Project Gutenberg #2701, ch. 1 "Loomings" (Gutenberg "--" written as an em dash)
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    # Frankenstein, Project Gutenberg #84 (1818 text), Chapter 5, first two sentences (consecutive)
    "It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.",
    # The Great Gatsby, Project Gutenberg #64317, ch. I, first two paragraphs (US public domain since 2021)
    "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.\n“Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")
    check(f"story[{i}]", all(t in S[i]['tags'] for _, t in tagged(S[i]['tokens'])), "every tag is defined in the story's tag set")
    check(f"story[{i}]", all(f in S[i]['tags'] for f in S[i]['focus']), "focus tags are defined")

# Colours follow the page legend: c1 subject, c2 verb, c3 DO, c4 IO, c5 SC/OC.
COL = {'s': 'c1', 'v': 'c2', 'lv': 'c2', 'do': 'c3', 'io': 'c4', 'sc': 'c5', 'oc': 'c5'}
for i, st in enumerate(S):
    check(f"story[{i}]", all(COL[k] == v['c'] for k, v in st['tags'].items()), "tag colours match the legend")

# Independent analysis: the clause functions of each main clause (and the clauses noted), as spans.
TRUTH = [
    [('s', 'MARLEY'), ('lv', 'was'), ('sc', 'dead'), ('v', 'is'), ('s', 'no doubt whatever about that'),
     ('s', 'The register of his burial'), ('v', 'was signed'), ('s', 'Scrooge'), ('v', 'signed'), ('do', 'it'),
     ('s', 'Scrooge’s name'), ('lv', 'was'), ('sc', 'good'), ('s', 'Old Marley'), ('lv', 'was'), ('sc', 'as dead as a door-nail')],
    [('v', 'Call'), ('do', 'me'), ('oc', 'Ishmael'), ('v', 'mind'), ('do', 'how long precisely'),
     ('s', 'I'), ('v', 'thought'), ('do', 'I would sail about a little and see the watery part of the world')],
    [('s', 'I'), ('v', 'beheld'), ('do', 'the accomplishment of my toils'), ('s', 'I'), ('v', 'collected'), ('do', 'the instruments of life'),
     ('s', 'I'), ('v', 'might infuse'), ('do', 'a spark of being'), ('s', 'that'), ('v', 'lay')],
    [('s', 'my father'), ('v', 'gave'), ('io', 'me'), ('do', 'some advice that I’ve been turning over in my mind ever since'),
     ('do', 'Whenever you feel like criticizing anyone'), ('s', 'he'), ('v', 'told'), ('io', 'me'),
     ('do', 'just remember that all the people in this world haven’t had the advantages that you’ve had')],
]
for i, want in enumerate(TRUTH):
    got = spans(S[i]['tokens'])
    check(f"story[{i}]", got == want, f"spans differ: page {got}")

# Claims in the notes
sp0 = spans(S[0]['tokens'])
links = [(sp0[j][1], sp0[j + 1][1]) for j in range(len(sp0) - 1) if sp0[j][0] == 'lv' and sp0[j + 1][0] == 'sc']
check("story[0]", [c for _, c in links] == ['dead', 'good', 'as dead as a door-nail'], "was links a subject to three adjective complements")
check("story[0]", sum(1 for t, _ in sp0 if t == 'do') == 1 and ('do', 'it') in sp0, "one active verb with an object: signed it")
check("story[0]", len(re.findall(r'[.]', SOURCES[0])) == 5, "five sentences")
check("story[1]", spans(S[1]['tokens'])[:3] == [('v', 'Call'), ('do', 'me'), ('oc', 'Ishmael')], "Call me Ishmael: (you)-V-DO-OC, no written subject")
sp2 = spans(S[2]['tokens'])
check("story[2]", [sp2[j - 2][1] for j, (t, _) in enumerate(sp2) if t == 'do'] == ['I', 'I', 'I'], "three transitive clauses, each with subject I")
check("story[2]", sp2[-2:] == [('s', 'that'), ('v', 'lay')] and 'lay' not in [w for w, t in tagged(S[2]['tokens']) if t == 'do'], "lay (past of lie) has no object")
sp3 = spans(S[3]['tokens'])
check("story[3]", [w for t, w in sp3 if t == 'io'] == ['me', 'me'], "both indirect objects are me")
check("story[3]", sp3[3][1].startswith('some advice') and sp3[3][1].endswith('ever since'), "the DO runs from some advice to ever since")

# ---- independent pattern analysis for the example and practice ----
def pattern(roles):
    """roles: list of function labels after the subject, in order (V, LV, DO, IO, SC, OC, A; adjuncts left out)."""
    key = '-'.join(roles)
    return {'V': 'S–V', 'V-A': 'S–V–A', 'LV-SC': 'S–LV–SC', 'V-DO': 'S–V–DO', 'V-IO-DO': 'S–V–IO–DO',
            'V-DO-OC': 'S–V–DO–OC', 'V-DO-A': 'S–V–DO–A'}[key]
# Passivisation: an object can become the passive subject; a subject complement cannot.
PASSIVISES = {'DO': True, 'IO': True, 'SC': False, 'OC': False}
DATIVE = {'give': 'to', 'send': 'to', 'tell': 'to', 'write': 'to', 'buy': 'for', 'make': 'for', 'find': 'for', 'get': 'for', 'call': 'for'}

ex = plain(page['example']['answer'])
check("example", pattern(['V', 'DO', 'OC']) == 'S–V–DO–OC' and "too expensive is S–V–DO–OC" in ex.replace('Considered the proposal ', ''), "considered the proposal too expensive: S-V-DO-OC")
check("example", pattern(['V', 'IO', 'DO']) == 'S–V–IO–DO' and "sent the mayor a letter is S–V–IO–DO" in ex, "sent the mayor a letter: S-V-IO-DO")
check("example", "indirect object the mayor" in ex and "direct object a letter" in ex and "object complement too expensive" in ex, "functions named")
check("example", DATIVE['send'] == 'to' and any('sent a letter to the mayor' in plain(l['math']) for l in page['example']['lines']), "to-test for send")

pa = [plain(p['a']) for p in page['practice']]
for part, roles in [("a", ['V', 'DO']), ("b", ['LV', 'SC']), ("c", ['V']), ("d", ['V', 'DO', 'OC'])]:
    check("practice[0]", f"({part}) {pattern(roles)}" in pa[0], f"grew ({part}) should be {pattern(roles)}")
for part, io, rew in [("a", "her brother", "She sent a postcard to her brother."), ("b", "the twins", "He bought bicycles for the twins."), ("c", "me", "Tell the truth to me.")]:
    check("practice[1]", f"({part}) Indirect object {io}" in pa[1] and rew in pa[1], f"({part}) IO {io}")
check("practice[1]", DATIVE['send'] == 'to' and DATIVE['tell'] == 'to' and DATIVE['buy'] == 'for', "send/tell take to, buy takes for")
for part, fn in [("a", "direct object"), ("b", "subject complement"), ("c", "direct object"), ("d", "subject complement")]:
    check("practice[2]", re.search(rf"\({part}\)[^()]*{fn}", pa[2]) is not None, f"({part}) should be {fn}")
check("practice[2]", PASSIVISES['DO'] and not PASSIVISES['SC'] and "*A lawyer was become by her" in pa[2], "passive test separates DO from SC")
check("practice[3]", pa[3].count("S–V–IO–DO") == 2 and pa[3].count("S–V–DO–OC") == 2, "each sentence: one IO-DO reading, one DO-OC reading")
check("practice[3]", "call a taxi for me" in pa[3] and "found a good lawyer for him" in pa[3] and "She found him to be a good lawyer" in pa[3], "for-test and to-be test given")
