# content: 7d1103542545
# eng-modifier-placement: Misplaced & Dangling Modifiers
import re
plain = lambda h: re.sub(r"<[^>]+>", "", h)

def tags(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r"^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$", t)
        if m: out.append((m.group(1), m.group(2)))
    return out

def W(tokens, *tg):
    """words carrying any of the given tags, in order, as one string"""
    return " ".join(w for w, t in tags(tokens) if t in tg)

S = page["stories"]

SOURCES = [
    # Treasure Island, Project Gutenberg #120, Part One ch. I (opening sentence, cut at the dash after 17)
    "Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace 17—",
    # Moby-Dick, Project Gutenberg #2701, ch. 1
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    # Emma, Project Gutenberg #158, ch. I
    "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.",
    # Walden, Project Gutenberg #205, Economy, first sentence
    "When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]["tokens"], src)
    check(f"story[{i}]", S[i]["year"] <= 1930, "public domain")
t = [s["tokens"] for s in S]
# Treasure Island: absolute phrase (own subject the gentlemen) ends at 'end'; participial phrase keeping...island; only -> because-clause; I = doer of keeping
check("story[0]", W(t[0], "ab") == "Squire Trelawney Dr. Livesey and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island from the beginning to the end", "absolute phrase span")
check("story[0]", W(t[0], "pt") == "keeping nothing back but the bearings of the island", "participial phrase span")
check("story[0]", W(t[0], "lim") == "only" and W(t[0], "tg") == "because there is still treasure not yet lifted I", "only's target is the because-clause; I is the target of keeping")
check("story[0]", W(t[0], "lim") == "only" and re.search(r"that only because", detok(t[0])) is not None, "only directly before its target")
before_main = detok(t[0]).split(", I take up")[0]
n = len(re.findall(r"[A-Za-z0-9.’-]+", before_main))
check("story[0]", n == 48, f"note says 48 words before the main clause; counted {n}")
# Moby-Dick
check("story[1]", W(t[1], "pt") == "having little or no money in my purse and nothing particular to interest me on shore" and W(t[1], "tg") == "I", "participial phrase and its target I")
check("story[1]", len(W(t[1], "pt").split()) == 16, "note says sixteen words")
# Emma
check("story[2]", W(t[2], "md") == "handsome clever and rich with a comfortable home and happy disposition", "modifier span")
check("story[2]", W(t[2], "tg") == "Emma Woodhouse twenty-one years" and W(t[2], "lim") == "nearly", "targets; nearly limits twenty-one years")
check("story[2]", re.search(r"nearly twenty-one years", detok(t[2])) is not None, "nearly directly before the number")
# Walden
check("story[3]", W(t[3], "tg") == "by the labor of my hands" and W(t[3], "lim") == "only", "only follows its target")

a = plain(page["example"]["answer"])
check("example", a.startswith("Having finished the report, I saved the file to the shared drive."), "fix 1: doer is subject")
check("example", "After I had finished the report, the file was saved to the shared drive." in a, "fix 2: clause with own subject")
pa = [plain(p["a"]) for p in page["practice"]]
check("practice[0]", "Driving to work this morning, I saw a deer" in pa[0] and "while I was driving" in pa[0], "move phrase / clause fix")
check("practice[1]", re.search(r"\(a\) Leo and no one else", pa[1]) and re.search(r"\(c\) He ate the cake and nothing else", pa[1]) and "Ambiguous" in pa[1], "just: a = Leo only, c = cake only, b ambiguous")
check("practice[2]", "dangles" in pa[2] and "you must submit a proposal by June 1" in pa[2] and "If you want to apply for the grant, a proposal must be submitted by June 1" in pa[2], "two fixes")
check("practice[3]", re.search(r"\(a\) Not dangling.*absolute", pa[3]) and re.search(r"\(b\) Acceptable", pa[3]) and re.search(r"\(c\) Dangling", pa[3]) and re.search(r"\(d\) Dangling", pa[3]), "a absolute, b ok, c and d dangle")
