# content: bc07d4254d04
# eng-voice: Active & Passive Voice
# Passages checked against Project Gutenberg; tagging compared with an independent analysis.
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
    # Declaration of Independence, Project Gutenberg #1, second paragraph (text deliberately cut at the final ellipsis)
    "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, …",
    # Narrative of the Life of Frederick Douglass, Project Gutenberg #23, ch. I
    "I was born in Tuckahoe, near Hillsborough, and about twelve miles from Easton, in Talbot county, Maryland. I have no accurate knowledge of my age, never having seen any authentic record containing it.",
    # Gettysburg Address, Project Gutenberg #4, first sentence
    "Four score and seven years ago, our fathers brought forth upon this continent a new nation: conceived in liberty, and dedicated to the proposition that all men are created equal.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]["tokens"], src)
    check(f"story[{i}]", S[i]["year"] <= 1930, "public domain")

# Own analysis. Passive = be + past participle (not every participle).
T = [
  dict(ag="We their Creator", vb="hold created endowed", rc="these truths all men they", be="are are", by="by"),
  dict(rc="I", be="was", vb="born have", ag="I"),
  dict(ag="our fathers", vb="brought forth conceived dedicated created", rc="a new nation all men", be="are"),
]
for i, d in enumerate(T):
    for tg, want in d.items():
        check(f"story[{i}]", W(S[i]["tokens"], tg) == want, f"tag {tg}: page '{W(S[i]['tokens'], tg)}' vs '{want}'")
# claims in notes: S0 two passives (one with by-agent); S1 one passive + active have; S2 'one active verb, three passive participles'
check("story[0]", len(W(S[0]["tokens"], "be").split()) == 2 and W(S[0]["tokens"], "by") == "by", "two passives, one by-phrase")
check("story[1]", len(W(S[1]["tokens"], "be").split()) == 1 and "have" in W(S[1]["tokens"], "vb"), "one passive; have is active")
check("story[2]", W(S[2]["tokens"], "vb").split()[:2] == ["brought", "forth"] and len(W(S[2]["tokens"], "vb").split()) - 2 == 3, "one active verb (brought forth) and three passive participles")

# Worked example: The committee has rejected our proposal -> Our proposal has been rejected (by the committee).
a = plain(page["example"]["answer"])
check("example", a.startswith("Our proposal has been rejected (by the committee)"), "passive of present perfect: has been rejected")
check("example", "present perfect" in a and "past participle" in a, "tense named, participle named")

pa = [plain(p["a"]) for p in page["practice"]]
# P0: (a) was built = passive; (b) were building = past progressive active; (c) has collapsed = perfect, active, intransitive
for k, v in zip("abc", ["Passive", "Active", "Active"]):
    check("practice[0]", f"({k}) {v}" in pa[0], f"({k}) is {v}")
check("practice[0]", "intransitive" in pa[0], "collapse is intransitive")
# P1: are taking -> are being taken
check("practice[1]", "Blood samples are being taken" in pa[1] and "plural samples" in pa[1], "are being taken, agreeing with plural samples")
# P2: open rewrite; the agent must be supplied. Check the rewrite is active with 'decided ... to close the clinic' and the verdict.
check("practice[2]", re.search(r"decided .*to close the clinic", pa[2]) and "active is better" in pa[2] and "hides" in pa[2], "active rewrite and verdict")
# P3: offer = ditransitive (2 passives); resemble = middle (none); laugh at = prepositional passive; seem = linking (none)
check("practice[3]", "(a) Two passives" in pa[3] and "Sam was offered the job" in pa[3] and "The job was offered to Sam" in pa[3], "(a) two passives")
check("practice[3]", "(b) None" in pa[3] and "middle verb" in pa[3], "(b) resemble has no passive")
check("practice[3]", "(c) A prepositional passive" in pa[3] and "was laughed at" in pa[3], "(c) laughed at")
check("practice[3]", "(d) None" in pa[3] and "linking" in pa[3], "(d) seem linking")
