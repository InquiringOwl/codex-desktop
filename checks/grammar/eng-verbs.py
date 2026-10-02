# content: d3ddb677cf00
# eng-verbs: Verbs: Tense, Aspect & Mood
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below with WebFetch; curly quotes and apostrophes normalised, the
# Gutenberg "--" written as an em dash, line breaks inside a paragraph read as spaces).
# Verb forms, tense-aspect names and moods in the example and practice are compared with an
# independent analysis written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1), m.group(2)))
    return out

S = page['stories']
SOURCES = [
    # A Tale of Two Cities, Project Gutenberg #98, Book the First, ch. I "The Period", first paragraph
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
    # Lincoln's Gettysburg Address, Project Gutenberg #4 (end of paragraph 2, then paragraph 3)
    "We are met on a great battlefield of that war.\nWe have come to dedicate a portion of that field as a final resting place for those who here gave their lives that this nation might live. It is altogether fitting and proper that we should do this.",
    # A Christmas Carol, Project Gutenberg #46, Stave One
    "“If I could work my will,” said Scrooge indignantly, “every idiot who goes about with ‘Merry Christmas’ on his lips, should be boiled with his own pudding, and buried with a stake of holly through his heart. He should!”",
    # Pride and Prejudice, Project Gutenberg #1342, ch. 1
    "“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”\nMr. Bennet replied that he had not.\n“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”\nMr. Bennet made no answer.\n“Do not you want to know who has taken it?” cried his wife, impatiently.",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")

# Independent tagging: every verb in each passage, in order (lv linking, v main, ax primary auxiliary, md modal).
TRUTH = [
    "was:lv " * 10 + "had:v had:v were:ax going:v were:ax going:v was:lv insisted:v being:ax received:v",
    "are:ax met:v have:ax come:v dedicate:v gave:v might:md live:v is:lv should:md do:v",
    "could:md work:v said:v goes:v should:md be:ax boiled:v buried:v should:md",
    "said:v have:ax heard:v is:ax let:v replied:v had:ax is:ax returned:v has:ax been:v told:v made:v Do:ax want:v know:v has:ax taken:v cried:v",
]
for i, want in enumerate(TRUTH):
    got = [f"{w}:{t}" for w, t in tagged(S[i]['tokens'])]
    check(f"story[{i}]", got == want.split(), f"tags differ: page {' '.join(got)}")

# Claims in the story notes
t0 = tagged(S[0]['tokens'])
check("story[0]", sum(1 for w, t in t0 if w == 'was' and t == 'lv') == 11, "was is a linking verb eleven times")
finite0 = ['was'] * 11 + ['had', 'had', 'were', 'were', 'insisted']
PAST = {'was', 'were', 'had', 'insisted'}
check("story[0]", all(w in PAST for w in finite0), "every finite verb is past tense")
check("story[0]", 'were all going' in S[0]['tokens'].replace('_ax', '').replace('_v', ''), "past progressive were … going")
t1 = tagged(S[1]['tokens'])
check("story[1]", [w for w, t in t1 if t == 'md'] == ['might', 'should'], "two modals: might, should")
check("story[1]", ('are', 'ax') in t1 and ('have', 'ax') in t1, "two perfects: are met (be-perfect), have come")
t2 = tagged(S[2]['tokens'])
check("story[2]", [w for w, t in t2 if t == 'v' and w.endswith('s')] == ['goes'], "the one -s present form is goes")
check("story[2]", [w for w, t in t2 if t == 'md'] == ['could', 'should', 'should'], "modals could, should, should")
t3 = tagged(S[3]['tokens'])
perf = [t3[i + 1][0] for i, (w, t) in enumerate(t3) if t == 'ax' and w in ('have', 'has') and i + 1 < len(t3)]
check("story[3]", perf == ['heard', 'been', 'taken'], "present perfects: have heard, has been, has taken")
check("story[3]", ('told', 'v') in t3, "simple past told")

# ---- independent verb engine for the worked example and practice ----
IRR = {'take': ('took', 'taken'), 'be': ('was', 'been'), 'have': ('had', 'had'), 'write': ('wrote', 'written'), 'leave': ('left', 'left'), 'read': ('read', 'read')}
def five(b):
    s = b + 'es' if re.search(r'(s|x|z|ch|sh)$', b) else (b[:-1] + 'ies' if re.search(r'[^aeiou]y$', b) else b + 's')
    if b in IRR: past, pp = IRR[b]
    elif re.search(r'[^aeiou]y$', b): past = pp = b[:-1] + 'ied'
    elif re.search(r'^[^aeiou]*[aeiou][^aeiouwxy]$', b): past = pp = b + b[-1] + 'ed'
    else: past = pp = b + 'ed'
    if b.endswith('e') and not b.endswith('ee'): ing = b[:-1] + 'ing'
    elif re.search(r'^[^aeiou]*[aeiou][^aeiouwxy]$', b): ing = b + b[-1] + 'ing'
    else: ing = b + 'ing'
    return [b, s, past, pp, ing]
def analyse(vp):
    """Tense (time) and aspect of a verb phrase given as a list of words, with the main verb last."""
    w = vp
    time = 'future' if w[0] in ('will', 'shall') else 'past' if w[0] in ('had', 'was', 'were', 'did') or (len(w) == 1 and w[0].endswith('ed')) else 'present'
    perf = any(a in ('have', 'has', 'had') and i + 1 < len(w) for i, a in enumerate(w))
    prog = any(a in ('be', 'been', 'is', 'am', 'are', 'was', 'were') and w[i + 1].endswith('ing') for i, a in enumerate(w[:-1]))
    asp = 'perfect progressive' if perf and prog else 'perfect' if perf else 'progressive' if prog else None
    return f"{time} {asp}" if asp else f"simple {time}"

# Worked example
ex = page['example']; ans = plain(ex['answer'])
check("example", analyse(['docked']) == 'simple past' and 'docked is simple past' in ans, "docked: simple past")
check("example", analyse(['had', 'been', 'waiting']) == 'past perfect progressive' and 'had been waiting is past perfect progressive' in ans, "had been waiting: past perfect progressive")
check("example", analyse(['have', 'been', 'waiting']) == 'present perfect progressive', "transformation check: only the first verb changes")
check("example", 'began before the ship docked' in ans, "order of events: waiting began before the docking")

# Practice
pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", "stop, stops, stopped, stopped, stopping" in pa[0] and five('stop') == ['stop', 'stops', 'stopped', 'stopped', 'stopping'], "stop")
check("practice[0]", "take, takes, took, taken, taking" in pa[0] and five('take') == ['take', 'takes', 'took', 'taken', 'taking'], "take")
check("practice[0]", "study, studies, studied, studied, studying" in pa[0] and five('study') == ['study', 'studies', 'studied', 'studied', 'studying'], "study")
BE = ['be', 'am', 'is', 'are', 'was', 'were', 'been', 'being']
check("practice[0]", "eight forms" in pa[0] and all(re.search(rf"\b{f}\b", pa[0]) for f in BE), "be has eight forms")
for part, vp, name in [("a", ['had', 'left'], 'past perfect'), ("b", ['will', 'be', 'sailing'], 'future progressive'),
                       ("c", ['have', 'been', 'reading'], 'present perfect progressive'), ("d", ['walks'], 'simple present')]:
    check("practice[1]", analyse(vp) == name and f"({part}) {name}" in pa[1], f"({part}) should be {name}")
check("practice[2]", "(a) pay: present (mandative) subjunctive" in pa[2], "rules require that every member pay: mandative subjunctive, base form")
check("practice[2]", "(b) were: past subjunctive" in pa[2], "if I were you")
check("practice[2]", "(c) Be: imperative" in pa[2], "Be quiet!")
vp = ['might', 'have', 'been', 'written']
check("practice[3]", vp[1] == 'have' and vp[2] == 'been', "modal + base have (perfect) + been (past participle)")
check("practice[3]", not any(x.endswith('ing') for x in vp), "no -ing participle, so not progressive")
check("practice[3]", "main verb is written" in pa[3] and "Might is the finite verb" in pa[3] and "modal + perfect + passive" in pa[3], "analysis of might have been written")
check("practice[3]", five('write')[3] == 'written' and IRR['be'][1] == 'been', "written and been are past participles")
