# content: 1570decb484b
# eng-punctuation: Semicolons, Colons, Dashes & Apostrophes
# Passages compared with web/SOURCES-ENGLISH.md (verified against Project Gutenberg). Mark analysis written here.
import re
plain = lambda h: re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h))
words = lambda s: [w.lower() for w in re.findall(r"[A-Za-z0-9’]+", s)]

def tagged(tokens):
    out = []
    for t in tokens.split():
        m = re.match(r'^(.*?)_([a-z]+)\*?(#[a-z0-9]+)?$', t)
        out.append((m.group(1), m.group(2)) if m else (t, None))
    return out

S = page['stories']
SOURCES = [
    # A Christmas Carol, Gutenberg #46, Stave One (first word in capitals in the file)
    "MARLEY was dead: to begin with. There is no doubt whatever about that.",
    # Moby-Dick, Gutenberg #2701, ch. 1 ("--" written as an em dash)
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    # Poems by Emily Dickinson, Gutenberg #12242, Series One, XXVII, first stanza
    "Because I could not stop for Death,\nHe kindly stopped for me;\nThe carriage held but just ourselves\nAnd Immortality.",
    # Little Women, Gutenberg #514, ch. 1
    "“Christmas won’t be Christmas without any presents,” grumbled Jo, lying on the rug.",
]
check("formal", len(S) == len(SOURCES), "one source per story")
for i, src in enumerate(SOURCES):
    quote(f"story[{i}]", S[i]['tokens'], src)
    check(f"story[{i}]", S[i]['year'] <= 1930, "public domain")

tg = lambda i: [(w, t) for w, t in tagged(S[i]['tokens']) if t]
# Story 0: the only colon is after the complete clause "MARLEY was dead"
check("story[0]", SOURCES[0].count(':') == 1 and tg(0) == [(':', 'col')], f"tags {tg(0)}")
check("story[0]", SOURCES[0].split(':')[0] == "MARLEY was dead", "colon follows a complete clause (subject MARLEY, finite verb was)")
# Story 1: two em dashes, around a complete imperative clause
check("story[1]", SOURCES[1].count('—') == 2 and tg(1) == [('—', 'dash'), ('—', 'dash')], f"tags {tg(1)}")
aside = re.search(r"—(.*?)—", SOURCES[1]).group(1)
check("story[1]", aside == "never mind how long precisely", "dashes enclose the imperative")
lifted = SOURCES[1].replace("—" + aside + "—", ", ")
check("story[1]", "Some years ago, having little or no money in my purse" in lifted, "lifting it out leaves the sentence intact (note)")
# Story 2: comma after the because-clause, one semicolon, final period
check("story[2]", [m for m in re.findall(r"[,;.]", SOURCES[2])] == [',', ';', '.'] and tg(2) == [(',', 'oth'), (';', 'semi'), ('.', 'oth')], f"tags {tg(2)}")
check("story[2]", SOURCES[2].split('\n')[0].startswith('Because') and SOURCES[2].split('\n')[1] == 'He kindly stopped for me;', "semicolon follows the independent clause He kindly stopped for me")
# Story 3: one apostrophe (won't = will not, omission, not possession); comma inside the closing quote mark
check("story[3]", SOURCES[3].count('’') == 1 and tg(3) == [('won’t', 'apos'), (',', 'oth')], f"tags {tg(3)}")
check("story[3]", ',”' in SOURCES[3], "comma inside closing quotation mark")
check("story[3]", plain(S[3]['note']).count('One apostrophe, in won’t') == 1, "note: one apostrophe")

# Worked example
ex = plain(page['example']['answer'])
want = "The Marches had little money; they had something better: each other. Jo wrote plays; Meg sewed dresses; Beth played the piano; and Amy, who loved art, drew everyone."
check("example", ex == want, "semicolons, colon, series with internal commas")
check("example", words(ex) == words(plain(page['example']['prompt']).split(': ', 1)[1]), "same words as prompt")
check("example", ex.count(';') == 4 and ex.count(':') == 1, "marks")

pa = [plain(p['a']) for p in page['practice']]
check("practice[0]", all(x in pa[0] for x in ["girls’ (plural", "boss’s (singular", "women’s (irregular"]), "girls’ / boss’s / women’s")
check("practice[1]", pa[1].startswith("Both are correct.") and "colon is more precise" in pa[1], "colon or semicolon")
a2 = "We visited three cities: Boston, Massachusetts; Hartford, Connecticut; and Albany, New York."
check("practice[2]", pa[2].startswith(a2) and words(a2) == words(plain(page['practice'][2]['q']).split(': ', 1)[1]), "colon + semicolons")
check("practice[3]", "paired em dashes" in pa[3] and "imperative clause" in pa[3] and "never mind how long precisely" in pa[3], "dashes around an imperative clause")
formal = plain(page['formal'])
check("formal", "Chicago and MLA add ’s (Dickens’s); AP adds only the apostrophe (Dickens’)" in formal, "possessives of names ending in s")
check("formal", "AP also uses one for single capital letters (A’s)" in formal and "Plurals of decades (1920s) take no apostrophe" in formal, "plural marks")
check("formal", "Chicago lowercases the first word" in formal and "APA and AP capitalise a complete sentence after a colon" in formal, "capitalisation after colon")
check("formal", "AP puts a space on each side" in formal and "post–Civil War" in formal, "dash styles")
