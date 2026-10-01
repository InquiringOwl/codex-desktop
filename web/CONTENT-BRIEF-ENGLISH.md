# Content brief: English

English topic pages use the same dossier schema as `CONTENT-BRIEF.md` (read it first), with these differences. Model page: `web/content/grammar/eng-parts-of-speech.js`.

## Level and standard
- College English. Grammar & Usage follows the traditional eight parts of speech used in college handbooks, and notes the modern analysis (Huddleston & Pullum, *Cambridge Grammar of the English Language*, 2002) where it differs. Later fields follow standard ENGL 101/102, 2xx survey and 3xx–4xx course content.
- `voice: "plain"`; `grade` like `"College ENGL 1xx · grammar"`; `eyebrow` like `"Grammar & Usage · word classes"`.
- `formal` gives the college-level definitions; `example` is a worked analysis (a sentence tagged or parsed step by step, ending with a substitution or transformation check); `practice` has 4 questions with full answers.
- Colour keys for word classes (`DB.posTags` in `web/src/data.js`): c1 nouns & pronouns, c2 verbs, c3 adjectives & articles, c4 adverbs, c5 prepositions, conjunctions, interjections.

## Stories (required on English pages)
`stories: [{ title, book, author, year, kind, where, scene, focus, tokens, notes, note }]`, 3–6 per page, rendered as framed panels (art above, passage below).
- **Public domain only**: published before 1931 (US public domain in 2026) and quoted from a Project Gutenberg edition. Never quote copyrighted books (e.g. *The Hobbit*, *To Kill a Mockingbird*, *The Diary of a Young Girl*); `validate.js` warns on recent years. Prefer famous passages; mix fiction and non-fiction.
- `tokens`: the passage, word by word, `word_tag` with tags from `DB.posTags` (n pr v aj ar av p cj ij); bare punctuation; `*` after the tag for italics in the source; `#key` to give a repeated word its own note; `¶` for a paragraph break. Curly quotes and apostrophes.
- `focus`: the tags this story illustrates (coloured in the panel). `notes`: per-word explanations keyed by lower-case word (or `#key`), plain text. `note`: HTML paragraph on what the passage shows.
- `scene`: a key in `DB.scenes` (`web/art/*.js`): an original inline SVG, 480 × 180, drawn for Codex. No book covers, film stills or other illustrators' designs.

## Saved checks (`checks/grammar/<id>.py`)
Every story needs `story[i]` coverage: `quote("story[i]", page['stories'][i]['tokens'], SOURCE)` with the source text verified against Gutenberg (ebook number in a comment), an independent tag list compared word by word, and checks of any counts the note claims. Example and practice answers are checked against an independent analysis (`page` holds the topic's text). Stamp with `python3 tools/mathcheck.py --stamp <id>`.
