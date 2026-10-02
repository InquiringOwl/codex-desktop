# content: 449823e7337f
# eng-modifiers: Adjectives & Adverbs
# Language checks. Story passages are compared with the verbatim source text (checked against the
# Project Gutenberg editions named below; straight quotes normalised to curly). Tagging, the claims in the
# story notes, the worked example and the practice answers are compared with an independent analysis written here.
import re
plain = lambda h: re.sub(r'<[^>]+>', '', h)

def tags(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        if m: out.append((m.group(1), m.group(2)))
    return out

S = page['stories']
SOURCES = [
    # "A Descent into the Maelstrom", in The Works of Edgar Allan Poe, Raven Edition, Volume 2, Project Gutenberg #2148, opening paragraph
    "We had now reached the summit of the loftiest crag. For some minutes the old man seemed too much exhausted to speak.",
    # The Picture of Dorian Gray, Project Gutenberg #174, Chapter I, first paragraph
    "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.",
    # The Great Gatsby, Project Gutenberg #64317, Chapter I, from Daisy's speech on the porch (US public domain since 2021)
    "I woke up out of the ether with an utterly abandoned feeling, and asked the nurse right away if it was a boy or a girl. She told me it was a girl, and so I turned my head away and wept. ‘All right,’ I said, ‘I’m glad it’s a girl. And I hope she’ll be a fool—that’s the best thing a girl can be in this world, a beautiful little fool.’",
    # Pride and Prejudice, Project Gutenberg #1342, Chapter III ("me" is italic in the source)
    "“Which do you mean?” and turning round, he looked for a moment at Elizabeth, till, catching her eye, he withdrew his own, and coldly said, “She is tolerable: but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men. You had better return to your partner and enjoy her smiles, for you are wasting your time with me.”",
]
check("formal", len(S) == len(SOURCES), "one verified source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "published before 1931: US public domain in 2026")
    check(f"story[{i}]", set(S[i]['focus']) == {'aj', 'av'}, "stories focus on adjectives and adverbs")

# Independent tagging (traditional eight; ar = article). Compared word by word with the page's tokens.
TRUTH = [
    "pr v av v ar n p ar aj n p aj n ar aj n v av av aj v v",
    "ar n v v p ar aj n p n cj cj ar aj n n v p ar n p ar n av v p ar aj n ar aj n p ar n cj ar av aj n p ar aj n",
    "pr v av p p ar n p ar av aj n cj v ar n av av cj pr v ar n cj ar n pr v pr pr v ar n cj av pr v pr n av cj v "
    "av aj pr v pr v aj pr v ar n cj pr v pr v v ar n pr v ar aj n ar n v v p aj n ar aj aj n",
    "pr v pr v cj v av pr v p ar n p n cj v pr n pr v pr aj cj av v pr v aj cj av aj av v v pr "
    "cj pr v p aj n p n v v n p aj n pr v v p aj n pr v av v p pr n cj v pr n cj pr v v pr n p pr",
]
for i, want in enumerate(TRUTH):
    got = [t for _, t in tags(S[i]['tokens'])]
    check(f"story[{i}]", got == want.split(), f"tags differ: page {' '.join(got)}")

words = lambda i, tag: [w for w, t in tags(S[i]['tokens']) if t == tag]
# Poe: the note's adjectives and adverbs; loftiest is the superlative of lofty
check("story[0]", words(0, 'aj') == ['loftiest', 'some', 'old', 'exhausted'], "adjectives as named in the note")
check("story[0]", words(0, 'av') == ['now', 'too', 'much'], "adverbs as named in the note")
check("story[0]", 'lofty'[:-1] + 'iest' == 'loftiest', "lofty → loftiest (y → i + est)")
# Wilde: six attributive adjectives, each directly before its noun (or before a noun + noun), and the only adverb is "there"
ws = tags(S[1]['tokens'])
adjs = [w for w, t in ws if t == 'aj']
check("story[1]", adjs == ['rich', 'light', 'open', 'heavy', 'delicate', 'pink-flowering'], "attributive adjectives as listed")
check("story[1]", all(ws[j + 1][1] == 'n' for j, (w, t) in enumerate(ws) if t == 'aj'), "every adjective is followed by a noun: attributive")
check("story[1]", words(1, 'av') == ['there', 'more'], "adverbs: expletive there and the comparative marker more")
check("story[1]", ('more', 'av') in ws and ws[ws.index(('more', 'av')) + 1] == ('delicate', 'aj'), "more marks the comparative of delicate")
# Gatsby: the note's claims
gw = tags(S[2]['tokens'])
check("story[2]", ('utterly', 'av') in gw and gw[gw.index(('utterly', 'av')) + 1] == ('abandoned', 'aj'), "utterly modifies abandoned")
check("story[2]", gw[[w for w, _ in gw].index('glad') - 1] == ('’m', 'v'), "glad is predicative after ’m")
check("story[2]", [w for w, _ in gw][-3:] == ['beautiful', 'little', 'fool'], "beautiful little fool: opinion before size, no comma")
# Austen: two predicative adjectives after is; enough follows handsome
aw = tags(S[3]['tokens'])
aws = [w for w, _ in aw]
check("story[3]", aws[aws.index('tolerable') - 1] == 'is', "tolerable follows is")
check("story[3]", aws[aws.index('handsome') + 1] == 'enough', "enough follows the adjective it modifies")
check("story[3]", words(3, 'av') == ['round', 'coldly', 'not', 'enough', 'better'], "adverbs")
check("story[3]", words(3, 'aj') == ['own', 'tolerable', 'handsome', 'no', 'young', 'other'], "adjectives; young and other attributive")
check("story[3]", aw[aws.index('coldly') + 1] == ('said', 'v'), "coldly modifies said")

# Worked example: For some minutes the old man seemed too much exhausted to speak.
ans = plain(page['example']['answer'])
for w, target in [("some", "minutes"), ("old", "man"), ("much", "exhausted"), ("too", "much")]:
    check("example", re.search(rf"\b{w} \(.*?modifies {target}\)", ans) is not None, f"{w} should modify {target}")
check("example", "exhausted (predicative, modifies man)" in ans, "exhausted is a predicative adjective on man")
check("example", ans.index("Adjectives:") < ans.index("some") < ans.index("Adverbs:") < ans.index("much ("), "classes as analysed")

# Practice 0: comparison forms, computed independently
FORMS = {"narrow": ("narrower", "narrowest"), "good": ("better", "best"), "beautiful": ("more beautiful", "most beautiful"),
         "big": ("bigger", "biggest"), "badly": ("worse", "worst")}
pa = [plain(p['a']) for p in page['practice']]
for part, w in zip("abcde", FORMS):
    c, s = FORMS[w]
    check("practice[0]", f"({part}) {c}, {s}" in pa[0], f"{w}: {c}, {s}")
# Practice 1: linking verbs take adjectives; well = healthy is an adjective
for part, wd in zip("abcd", ["bad", "badly", "well", "good"]):
    check("practice[1]", f"({part}) {wd}:" in pa[1], f"({part}) should be {wd}")
# Practice 2: order opinion, size, age, shape, colour, origin, material, purpose
ORDER = ["opinion", "size", "age", "shape", "colour", "origin", "material", "purpose"]
CAT = {"wooden": "material", "old": "age", "small": "size", "Italian": "origin", "red": "colour", "beautiful": "opinion"}
for part, group, noun in [("a", ["wooden", "old", "small"], "chest"), ("b", ["Italian", "red", "beautiful"], "car")]:
    phrase = " ".join(sorted(group, key=lambda w: ORDER.index(CAT[w])))
    art = "an" if phrase[0].lower() in "aeiou" else "a"
    check("practice[2]", f"({part}) {art} {phrase} {noun}" in pa[2], f"({part}) {art} {phrase} {noun}")
check("practice[2]", "a cold, dark night" in pa[2] and "coordinate" in pa[2], "coordinate adjectives take a comma")
# Practice 3: what each adverb modifies
for adv, target in [("Unfortunately", "the whole clause"), ("rather", "the adjective nervous"), ("very", "the adverb badly"), ("badly", "the verb landed")]:
    check("practice[3]", re.search(rf"{adv}: an? [a-z ]*?adverb[a-z ]*? modifying {target}", pa[3]) is not None, f"{adv} → {target}")
