# content: d02738098f2b
# eng-verbals: Verbals
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
    # Hamlet, Project Gutenberg #1524, III.i
    "To be, or not to be, that is the question:\nWhether ’tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles,\nAnd by opposing end them?",
    # Moby-Dick, Project Gutenberg #2701, ch. 1
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    # Jane Eyre, Project Gutenberg #1260, ch. I
    "There was no possibility of taking a walk that day.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]["tokens"], src)
    check(f"story[{i}]", S[i]["year"] <= 1930, "public domain")

t0, t1, t2 = (s["tokens"] for s in S)
# Hamlet: infinitives to be / not to be / to suffer / to take / (to) end; gerund opposing; finite verb: is
check("story[0]", W(t0, "inf") == "To be not to be to suffer to take end", "five infinitives (the last bare, sharing 'to')")
check("story[0]", len(re.findall(r"\bto\b", W(t0, "inf"), re.I)) == 4, "four marked infinitives plus one bare")
check("story[0]", W(t0, "g") == "opposing" and W(t0, "fv") == "is", "one gerund (object of by); finite verb is")
# Moby-Dick: participle having; the phrase runs to 'shore'; adjectival infinitive to interest; finite verbs thought, would sail, see
check("story[1]", W(t1, "pt") == "having" and W(t1, "inf") == "to interest", "participle having; infinitive to interest")
check("story[1]", W(t1, "pt", "ph", "inf") == "having little or no money in my purse and nothing particular to interest me on shore", "participial phrase runs from having to shore")
check("story[1]", W(t1, "fv") == "thought would sail see", "finite verbs")
# Jane Eyre: gerund taking (object of of); phrase taking a walk that day; finite verb was
check("story[2]", W(t2, "g") == "taking" and W(t2, "g", "ph") == "taking a walk that day" and W(t2, "fv") == "was", "gerund phrase and finite verb")

a = plain(page["example"]["answer"])
check("example", a.startswith("Having missed (perfect participle; the phrase modifies Leo), to walk (infinitive as noun, object of decided), walking (gerund, subject of cured; phrase walking in the rain)."), "three verbals with jobs")
check("example", "finite verbs are decided and cured" in a, "two finite verbs")
pa = [plain(p["a"]) for p in page["practice"]]
check("practice[0]", re.search(r"\(a\) Gerund.*subject of relaxes", pa[0]) and re.search(r"\(b\) Present participle.*modifies man", pa[0]) and re.search(r"\(c\) Infinitive.*object of like", pa[0]), "gerund, participle, infinitive")
check("practice[1]", "[to run five laps around the field]" in pa[1] and "object five laps" in pa[1] and "Us is the object of asked" in pa[1], "infinitive phrase, its object, understood subject")
check("practice[2]", re.search(r"\(a\) To talk is an adverbial infinitive of purpose", pa[2]) and re.search(r"\(b\) Talking to him is a gerund phrase, the direct object of stopped", pa[2]), "stop to talk vs stop talking")
check("practice[3]", re.search(r"Being \(tired\): present participle.*modifies she", pa[3]), "Being tired: participle")
check("practice[3]", re.search(r"Dreading: part of the finite verb was dreading.*not a verbal", pa[3]), "was dreading: progressive, not a verbal")
check("practice[3]", re.search(r"Driving \(at night\): gerund, subject of calmed", pa[3]), "driving: gerund")
check("practice[3]", "ordinary noun" in pa[3], "drive is a noun")
