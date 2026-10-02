# content: 01ad935b50a6
# eng-style: Concision & Sentence Variety
# Passages compared with web/SOURCES-ENGLISH.md (verified against Project Gutenberg); counts and tagging analysed here.
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
NUM = {'six':6,'seven':7,'eight':8,'nine':9,'ten':10,'eleven':11}

S = page['stories']
SOURCES = [
    # Walden, Gutenberg #205, "Economy"
    "The mass of men lead lives of quiet desperation.",
    # Gettysburg Address, Gutenberg #4 (SOURCES-ENGLISH.md)
    "We are met on a great battlefield of that war. We have come to dedicate a portion of that field as a final resting place for those who here gave their lives that this nation might live. It is altogether fitting and proper that we should do this.",
    # A Christmas Carol, Gutenberg #46, Stave One
    "MARLEY was dead: to begin with. There is no doubt whatever about that.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "public domain")

n = [plain(s['note']) for s in S]

# Story 0: Walden
sp = spans(S[0]['tokens'])
check("story[0]", sp == [('ac','The mass of men'),('vb','lead'),('end','quiet desperation')], f"spans {sp}")
claimed = NUM[re.match(r'(\w+) words', n[0]).group(1).lower()]
check("story[0]", wc(SOURCES[0]) == claimed, f"note says {claimed} words; the sentence has {wc(SOURCES[0])}")
check("story[0]", SOURCES[0].rstrip('.').split()[-2:] == ['quiet','desperation'], "key idea last")

# Story 1: Gettysburg
sents = re.split(r'(?<=\.) ', SOURCES[1])
counts = [wc(s) for s in sents]
check("story[1]", counts == [10, 27, 11] and 'Three sentences of 10, 27 and 11 words' in n[1], f"counts {counts}")
sp = spans(S[1]['tokens'])
check("story[1]", sp == [('ac','We'),('ac','We'),('vb','have come'),('end','this nation might live'),('exp','It is')], f"spans {sp}")
check("story[1]", sents[1].endswith('might live.'), "long sentence ends on 'might live'")
# In the full address this passage is sentences 3-5 (1 Four score…; 2 Now we are engaged…; 3 We are met…)
check("story[1]", S[1]['where'].lower().startswith('third to fifth'), f"where says '{S[1]['where']}'; passage is the third to fifth sentences")

# Story 2: Marley
sp = spans(S[2]['tokens'])
check("story[2]", sp == [('ac','MARLEY'),('end','dead'),('exp','There is')], f"spans {sp}")
check("story[2]", [wc(s) for s in re.split(r'(?<=\.) ', SOURCES[2])] == [6, 7] and 'A six-word sentence and a seven-word one' in n[2], "6 and 7 words")

# Worked example
prompt = "There were several factors that had an impact on the decision of the committee to make a change to the schedule."
check("example", wc(prompt) == 21 and plain(page['example']['prompt']).endswith(prompt), "prompt is 21 words")
ex = plain(page['example']['answer'])
rev = "Several factors led the committee to change the schedule."
check("example", ex.startswith(rev) and wc(rev) == 9, "revision is 9 words")
check("example", any('21 words → 9 words' in plain(l['math']) for l in page['example']['lines']), "page's count line")
check("example", wc("Low attendance and a room conflict led the committee to change the schedule.") == 13 and 'Low attendance and a room conflict led the committee to change the schedule.' in ex, "name-the-factors version")

pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", pa[0].startswith("The two companies will merge and combine their resources.") and "The two companies will merge." in pa[0], "merge together / joint resources redundancy")
check("practice[1]", "approved the budget" in pa[1] and "hired more people" in pa[1] and "hiring increased" in pa[1] and 'Approval and increase' in pa[1], "approval/increase -> verbs")
check("practice[2]", "Every applicant must submit two references." in pa[2] and "subjunctive submit" in pa[2], "expletive + subjunctive: 'important that every applicant submit' is subjunctive")
r = "When the rain stopped, we went outside into flooded streets. Everything smelled of wet earth."
check("practice[3]", r in pa[3] and r.rstrip('.').endswith('wet earth'), "variety: long then short, end focus on wet earth")
check("practice[3]", [wc(s) for s in re.split(r'(?<=\.) ', r)] == [10, 5], "sentence lengths differ")
formal = plain(page['formal'])
check("formal", "in order to = to" in formal and "in the event that = if" in formal, "empty phrase fixes")
check("formal", "(There are many students who struggle → Many students struggle)" in formal, "expletive example")
