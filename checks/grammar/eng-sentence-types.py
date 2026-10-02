# content: 1192e2ad2a98
# eng-sentence-types: Sentence Types
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
    # A Tale of Two Cities, Project Gutenberg #98, Book the First ch. I (first sentence; "--" normalised to an em dash)
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
    # Adventures of Huckleberry Finn, Project Gutenberg #76, ch. I
    "Miss Watson she kept pecking at me, and it got tiresome and lonesome.",
    # Gettysburg Address, Project Gutenberg #4, fifth sentence
    "It is altogether fitting and proper that we should do this.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]["tokens"], src)
    check(f"story[{i}]", S[i]["year"] <= 1930, "public domain")
t = [s["tokens"] for s in S]
# Dickens: subjects it x10, we x4, the period x1 = 15 independent clauses; one that-clause
ic = W(t[0], "ic").split()
check("story[0]", ic.count("It") + ic.count("it") == 10 and ic.count("we") == 4 and "period" in ic, "ten it-clauses, four we-clauses, then the period")
check("story[0]", W(t[0], "sub") == "that" and W(t[0], "dc") == "some of its noisiest authorities insisted on its being received for good or for evil in the superlative degree of comparison only", "one dependent clause, opened by that")
check("story[0]", 10 + 4 + 1 == 15 and 15 + 1 == 16, "fifteen independent + one dependent = sixteen clauses: compound-complex")
check("story[0]", W(t[0], "end") == "." and detok(t[0]).count("—") == 1, "declarative; one dash")
check("story[0]", " ".join(ic[:6]) == "It was the best of times" and ic[-9:] == "the period was so far like the present period".split(), "series start and final main clause")
# Huck: two clauses, joined by , and ; second 'and' joins adjectives
check("story[1]", W(t[1], "cc") == "and" and W(t[1], "ic") == "Miss Watson she kept pecking at me it got tiresome and lonesome" and W(t[1], "end") == ".", "compound: two independent clauses")
check("story[1]", detok(t[1]).count(", and it") == 1 and W(t[1], "ic").split().count("and") == 1, "comma + and before the second clause; the other and joins adjectives")
# Lincoln
check("story[2]", W(t[2], "ic") == "It is altogether fitting and proper" and W(t[2], "sub") == "that" and W(t[2], "dc") == "we should do this" and W(t[2], "end") == ".", "complex declarative")
check("story[2]", len(detok(t[2]).replace(".", "").split()) == 11, "eleven words")

a = plain(page["example"]["answer"])
check("example", "Compound-complex, declarative" in a and "before so" in a, "type: 2 IC + 1 DC; commas")
check("example", "[Although the storm had passed], [the river was still high], so [we waited another day]." in a, "bracketing")
pa = [plain(p["a"]) for p in page["practice"]]
check("practice[0]", pa[0].startswith("Simple, declarative.") and "compound predicate" in pa[0], "one subject, two verbs")
check("practice[1]", pa[1].startswith("Compound, declarative") and "an infinitive, not a clause" in pa[1], "two ICs joined by , but")
check("practice[2]", pa[2].startswith("Complex, imperative.") and "understood subject" in pa[2], "complex imperative")
check("practice[3]", pa[3].startswith("Compound-complex, declarative.") and "two independent, three dependent" in pa[3], "2 IC + 3 DC")
