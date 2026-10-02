# content: 812eb54ca3e4
# eng-commas: Commas
# Passages compared with web/SOURCES-ENGLISH.md (verified against Project Gutenberg). Comma analysis written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))
nopunct = lambda s: re.findall(r"[A-Za-z0-9’]+", s)

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        out.append((m.group(1), m.group(2)) if m else (t, None))
    return out

S = page['stories']
SOURCES = [
    # Emma, Gutenberg #158, ch. I
    "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.",
    # Narrative of the Life of Frederick Douglass, Gutenberg #23, ch. I
    "I was born in Tuckahoe, near Hillsborough, and about twelve miles from Easton, in Talbot county, Maryland.",
    # A Christmas Carol, Gutenberg #46, Stave One
    "“A merry Christmas, uncle! God save you!” cried a cheerful voice.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "public domain")

def comma_tags(tokens):
    tg = tagged(tokens)
    return [t for w, t in tg if w == ',' ]

# Story 0: Emma. Commas after: Woodhouse (opens non-restrictive), handsome, clever (series), rich, disposition (close).
check("story[0]", SOURCES[0].count(',') == 5 and 'Five commas' in plain(S[0]['note']), "five commas")
check("story[0]", comma_tags(S[0]['tokens']) == ['nr', 'ser', 'ser', 'nr', 'nr'], f"comma roles {comma_tags(S[0]['tokens'])}")
# lifting out the non-restrictive material leaves a complete sentence
core = "Emma Woodhouse seemed to unite some of the best blessings of existence"
rest = re.sub(r', handsome, clever, and rich, with a comfortable home and happy disposition,', '', SOURCES[0]).replace('Woodhouse seemed', 'Woodhouse seemed')
check("story[0]", rest.startswith(core), "lifting out both elements leaves Emma Woodhouse seemed…")
check("story[0]", '; and had lived' in SOURCES[0], "semicolon before 'and had lived' (note)")
# Story 1: Douglass: commas after Tuckahoe, Hillsborough (pair), Easton, county (place sequence)
check("story[1]", SOURCES[1].count(',') == 4, "four commas")
check("story[1]", comma_tags(S[1]['tokens']) == ['nr', 'nr', 'place', 'place'], f"roles {comma_tags(S[1]['tokens'])}")
check("story[1]", 'Talbot county' in SOURCES[1] and 'lower-case county' in plain(S[1]['note']), "lower-case county")
# Story 2: Dickens
tg = tagged(S[2]['tokens'])
check("story[2]", [(w, t) for w, t in tg if t] == [(',', 'addr'), ('uncle', 'addr'), ('!', 'quo')], f"tags {[(w,t) for w,t in tg if t]}")
check("story[2]", '!” cried' in SOURCES[2] and ',” cried' not in SOURCES[2], "exclamation point, so no comma before the speech tag")

# Worked example: with the page's commas removed the answer is the prompt
ex = plain(page['example']['answer'])
want = "When the fog lifted, Bob Cratchit, who had been shivering all morning, walked home, and Scrooge counted his money."
check("example", ex == want, "commas: after intro clause, around who-clause, before and")
check("example", nopunct(ex) == nopunct(plain(page['example']['prompt']).split(': ')[1]), "same words as prompt")
check("example", want.count(',') == 4, "four commas")

pa = [plain(p['a']) for p in page['practice']]
prm = [plain(p['q']) for p in page['practice']]
check("practice[0]", "Meg, Jo, Beth, and Amy waited by the fire." in pa[0] and "AP: Meg, Jo, Beth and Amy waited by the fire." in pa[0], "serial comma: Chicago/MLA/APA yes, AP no")
check("practice[1]", "A long, cold winter: coordinate" in pa[1] and "Three old houses: cumulative" in pa[1], "coordinate vs cumulative")
# my test: reversal/and test
check("practice[1]", 'cold, long winter both work' in pa[1], "reversal")
check("practice[2]", "restrictive" in pa[2] and "one brother among several" in pa[2] and "nonrestrictive: the writer has one brother" in pa[2], "restrictive / nonrestrictive")
a3 = "On July 4, 1776, in Philadelphia, Pennsylvania, the delegates said, “Yes, we agree.”"
check("practice[3]", pa[3].startswith(a3), "punctuated sentence")
check("practice[3]", [x.lower() for x in nopunct(a3)] == [x.lower() for x in nopunct("On July 4 1776 in Philadelphia Pennsylvania the delegates said yes we agree")], "same words as prompt")
formal = plain(page['formal'])
check("formal", "required by The Chicago Manual of Style, the MLA Handbook and APA style" in formal, "Oxford comma: Chicago, MLA, APA (APA 7 requires it)")
check("formal", "the Associated Press Stylebook omits it in a simple series (Meg, Jo, Beth and Amy)" in formal, "AP omits")
check("formal", "(tea, toast, and bread and butter)" in formal, "AP exception: item with a conjunction")
check("formal", "no comma is used in day-month-year form (4 July 1776)" in formal, "date forms")
