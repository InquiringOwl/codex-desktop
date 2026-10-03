# Tree spec: Vocabulary & Word Study (English)

Field `vocabulary` (`web/src/data-vocabulary.js`), English map group Language & Writing, col 1 row 6, ← Grammar & Usage.
Standard: a college vocabulary / word-study course (developmental-reading and ENGL 1xx vocabulary courses; word parts as in standard
college vocabulary texts; academic words from Coxhead's Academic Word List, 2000). Order: meaning from context and the dictionary,
then word parts, then sound and history, then shades of meaning, then academic vocabulary.
Every node is listed in the tree with `planned: true` until written (writer deletes the flag on its own line only, as in Algebra II).
The field is `status: "charted"` with all nodes planned, so the dashed tree shows from the start.

Pages follow `web/WRITER-PACK-ENGLISH.md` (story panels from `web/SOURCES-ENGLISH.md`, verified pre-1931 passages; checks in
`checks/vocabulary/<id>.py`). **Each written node also adds its featured words to the glossary** (`web/glossary/english.js`,
`field: "vocabulary"`, `node: "<id>"`; see `web/GLOSSARY-SPEC.md`). Pronunciations use the glossary's IPA convention.

House colour keys (labs and legends; a node may use fewer): c1 root / base · c2 prefix · c3 suffix · c4 meaning (gloss, clue, sense) · c5 sound (stress, syllable) or connotation.

## Era 1 · Meaning & the Dictionary (cols 0–1)
- **voc-context-clues** · Context Clues · pre eng-parts-of-speech. Definition/restatement, synonym, antonym/contrast, example, general sense (inference) clues; signal words (*that is, or, unlike, such as*); limits of context. Lab: passage with an unknown word, tag the clue and its type (c4), guess, then compare with the entry.
- **voc-dictionary-entry** · Reading a Dictionary Entry · pre eng-parts-of-speech. Headword, syllabication, pronunciation, part-of-speech label, inflected forms, numbered senses (historical vs frequency order), usage and register labels, etymology, run-on entries; collegiate vs unabridged vs learner's dictionaries; thesaurus vs dictionary. Lab: an annotated entry, click each part; pick the sense that fits a sentence.
- **voc-morphemes** · Morphemes: Roots, Bases & Affixes · pre voc-context-clues, voc-dictionary-entry. Free vs bound morphemes, root/base, prefix, suffix; inflectional vs derivational affixes; word analysis (*un·break·able*); false analyses (*butterfly*). Lab: morpheme splitter (c1–c3).

## Era 2 · Word Parts (cols 2–3)
- **voc-prefixes** · Prefixes · pre voc-morphemes. Negation (*un-, in-/im-/il-/ir-, non-, dis-, a-*), number (*mono-, bi-, tri-, multi-*), position/time (*pre-, post-, sub-, super-, inter-, intra-, trans-*), assimilation (*in- → il-legal, im-possible*). Lab: prefix + base builder, assimilation shown.
- **voc-suffixes** · Suffixes & Word Class · pre voc-morphemes. Noun (*-tion, -ment, -ness, -ity, -ism*), verb (*-ize, -ify, -ate, -en*), adjective (*-ous, -ive, -able, -al, -ic*), adverb (*-ly*); suffixes change part of speech (link DB.posTags colours); spelling changes at the joint. Lab: word-family table (*analyze, analysis, analytic, analytically*).
- **voc-word-formation** · Compounding & Other Word Formation · pre voc-morphemes. Compounds (open, hyphenated, closed), blends, clipping, acronyms and initialisms, back-formation, conversion (zero derivation), eponyms. Lab: sort new words by process.
- **voc-latin-roots** · Latin Roots · pre voc-prefixes, voc-suffixes. *dic/dict, duc/duct, fac/fec/fic, mit/miss, port, scrib/script, spec/spic, ten/tain, vert/vers, voc/vok, cap/cept, cred, ject, tract*. Lab: root wheel: one root, many words, each split and glossed.
- **voc-greek-roots** · Greek Roots & Combining Forms · pre voc-prefixes, voc-suffixes. *bio, chron, graph/gram, log/logy, phon, path, morph, psych, tele, auto, micro, poly*; combining vowel *-o-*; scientific coinages. Lab: combine forms, read the meaning off the parts.

## Era 3 · Sound & History (cols 4–5)
- **voc-pronunciation** · Pronunciation, IPA & Respelling · pre voc-dictionary-entry, voc-suffixes. Dictionary respelling keys vs the IPA; English consonant and vowel symbols (General American); schwa; silent letters; spelling–sound mismatches. Lab: IPA keyboard: build a transcription, check it; the glossary's IPA convention.
- **voc-etymology** · Etymology & Borrowed Words · pre voc-latin-roots, voc-greek-roots, voc-word-formation. Germanic core, Norse, Norman French, Latin and Greek learned borrowing, later loans; reading the etymology line; doublets (*royal/regal, frail/fragile*); folk etymology. Lab: trace a word's path on a timeline/map.
- **voc-stress** · Word Stress & Syllables · pre voc-pronunciation. Primary/secondary stress marks; noun–verb stress pairs (*PREsent / preSENT, REcord / reCORD*); stress-shifting suffixes (*-tion, -ic, -ity*: *PHOtograph, phoTOgraphy, photoGRAPHic*); stress-neutral suffixes (*-ness, -ment*). Lab: stress mover with c5 syllable highlight and speech if available.
- **voc-semantic-change** · How Meanings Change · pre voc-etymology. Broadening, narrowing, amelioration, pejoration, metaphor and metonymy as sources of new senses (*nice, silly, meat, deer*). Lab: sense timeline.

## Era 4 · Shades of Meaning (cols 6–7)
- **voc-polysemy** · Multiple Meanings & Homonyms · pre voc-semantic-change, voc-context-clues. Polysemy vs homonymy; homographs, homophones; how dictionaries order senses; choosing a sense from context. Lab: one word, many contexts (links the shared glossary: *root, degree, function*).
- **voc-connotation** · Denotation & Connotation · pre voc-semantic-change. Positive/negative/neutral associations; loaded language; euphemism and dysphemism. Lab: connotation slider (*thrifty → frugal → stingy*), c5.
- **voc-figurative** · Idiom & Figurative Meaning · pre voc-semantic-change. Idioms, phrasal verbs, dead metaphors, literal vs figurative senses. Lab: literal/figurative sorter with paraphrase.
- **voc-synonyms** · Synonyms, Antonyms & Nuance · pre voc-polysemy, voc-connotation. Near-synonymy (degree, connotation, register, collocation); gradable vs complementary antonyms; using a thesaurus well. Lab: choose the right synonym for a sentence, with the reason.

## Era 5 · Academic Vocabulary (cols 8–9)
- **voc-register** · Register & Diction · pre voc-synonyms. Formal/neutral/informal, Latinate vs Germanic doublets (*begin/commence*), jargon, clichés, wordiness, precise diction. Lab: register dial rewriting a sentence.
- **voc-confusables** · Commonly Confused Words · pre voc-synonyms. *affect/effect, imply/infer, complement/compliment, principal/principle, discreet/discrete, elicit/illicit, fewer/less, lie/lay*; memory hooks from word parts. Lab: quiz with explanation per pair.
- **voc-academic-words** · The Academic Word List · pre voc-register, voc-latin-roots, voc-greek-roots. General academic vocabulary vs everyday and technical words; AWL word families (*analyze, assess, derive, factor, function, interpret, significant*); collocations (*conduct research*). Lab: word-family explorer.
- **voc-discipline-terms** · Discipline-Specific Vocabulary · pre voc-register, voc-confusables. Everyday words with technical senses across subjects (*work, power, root, degree, function, key*); defining a term before using it. Lab: one word in many subjects, pulled live from the shared glossary.
