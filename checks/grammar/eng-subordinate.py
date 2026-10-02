# content: c9c08070cf2e
# eng-subordinate: Subordinate Clauses (noun, adjective, adverb)
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
    # Pride and Prejudice, Project Gutenberg #1342, ch. I, first sentence
    "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    # Gettysburg Address, Project Gutenberg #4, first sentence
    "Four score and seven years ago, our fathers brought forth upon this continent a new nation: conceived in liberty, and dedicated to the proposition that all men are created equal.",
    # The Hound of the Baskervilles, Project Gutenberg #2852, ch. 1
    "Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]["tokens"], src)
    check(f"story[{i}]", S[i]["year"] <= 1930, "public domain")
t = [s["tokens"] for s in S]
check("story[0]", W(t[0], "mk") == "that" and W(t[0], "nc") == "a single man in possession of a good fortune must be in want of a wife" and W(t[0], "mc") == "It is a truth universally acknowledged", "noun clause vs main clause")
check("story[1]", W(t[1], "mk") == "that" and W(t[1], "nc") == "all men are created equal", "noun clause in apposition to proposition")
check("story[1]", W(t[1], "mc") == "Four score and seven years ago our fathers brought forth upon this continent a new nation conceived in liberty and dedicated to the proposition", "main clause (the participles are reduced relatives, inside it)")
check("story[2]", W(t[2], "mk") == "who when", "relative pronoun who; relative adverb when")
check("story[2]", W(t[2], "mc") == "Mr. Sherlock Holmes was seated at the breakfast table", "main clause with interrupting relative clause")
check("story[2]", W(t[2], "rc") == "was usually very late in the mornings save upon those not infrequent occasions he was up all night", "relative clauses (the when-clause nested)")
n = len((W(t[2], "mk") + " " + W(t[2], "rc")).split())
check("story[2]", n == 20, f"note says twenty words between subject and verb; counted {n}")
src = detok(t[2])
check("story[2]", ", who was" in src and "occasions when he" in src and "night, was seated" in src, "who-clause set off by commas; when-clause (restrictive) has no comma")

a = plain(page["example"]["answer"])
check("example", a.startswith("[When the fog lifted], Huck saw [that the raft [that they had built] was gone]."), "bracketing")
check("example", "Adverb clause (time)" in a and "noun clause (object of saw)" in a and "relative clause (restrictive, modifying raft)" in a, "three clause types")
pa = [plain(p["a"]) for p in page["practice"]]
check("practice[0]", "relative (adjective) clause modifying book" in pa[0] and "restrictive" in pa[0] and "no commas" in pa[0] and "the book I borrowed" in pa[0], "relative clause, restrictive")
check("practice[1]", pa[1].startswith("My mother, who lives in Ohio, called yesterday.") and "nonrestrictive" in pa[1], "nonrestrictive commas")
check("practice[2]", re.search(r"\(a\).*subject of wins", pa[2]) and re.search(r"\(b\).*direct object of wonder", pa[2]) and re.search(r"\(c\).*object of the preposition about", pa[2]), "noun clause slots")
check("practice[3]", "adverb clause of concession" in pa[3] and "restrictive relative clause modifying report" in pa[3] and re.search(r"Why the plan failed: noun clause, direct object of showed", pa[3]), "three dependent clauses")
