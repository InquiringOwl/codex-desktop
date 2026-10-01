# Tree spec: English

Field map (`DB.subjectMaps.english`, fields in `DB.fields` with `subject: "english"`), 20 fields:
- **Language & Writing**: Grammar & Usage → Composition I → Composition II, Intro to Creative Writing, Intro to Literature; Grammar → Intro to English Linguistics.
- **Literature Surveys** (all ← Intro to Literature): British Lit I (to 1798), British Lit II (1798–now), American Lit I (to 1865), American Lit II (1865–now), World Literature.
- **Upper-Division Core**: Shakespeare ← Brit I; Literary Theory & Criticism ← Intro Lit + Comp II; Advanced Composition & Rhetoric ← Comp II; History of the English Language ← Linguistics + Brit I.
- **Specialisations & Capstone**: Drama ← Shakespeare; Poetry & Poetics ← Brit II + Theory; The Novel ← Theory; Advanced Creative Writing Workshop ← Creative Writing + Rhetoric; Senior Seminar ← Theory + Novel + Rhetoric.

## Grammar & Usage tree (`DB.trees.grammar`)
Written: `eng-parts-of-speech` (col 0). The other 20 nodes are in `DB.trees.grammar.planned` (shown dashed, not openable). To write one, move it from `planned` to `nodes` (keep id, col, row, icon, chips, pre), add its page, lab and check file.
Order: Words (nouns & pronouns; verbs: tense, aspect, mood; adjectives & adverbs; prepositions & conjunctions) → The Simple Sentence (subject & predicate; agreement; complements & sentence patterns; phrases) → Clauses & Sentences (voice; pronoun case & reference; independent & dependent clauses; verbals; sentence types; relative, noun & adverb clauses) → Usage & Mechanics (fragments, run-ons & comma splices; parallelism; modifier placement; commas; semicolons, colons, dashes & apostrophes; concision & sentence variety).

Lab for `eng-parts-of-speech` (`web/labs/eng-1.js`): tag the page's story passages word by word (colour filter per class), "one word, many jobs" (fast, down, that, round), and a quiz over every tagged word. Colour keys as in `DB.posTags`.
