/* ============ English: Vocabulary & Word Study ============
   A college vocabulary / word-study course: meaning from context and the dictionary, word parts, sound and history,
   shades of meaning, academic vocabulary. Spec: web/TREE-SPEC-VOCAB.md. Pages: web/content/vocabulary/,
   checks: checks/vocabulary/. Each written node also adds its featured words to web/glossary/english.js.
   Every node is listed once below. `planned: true` = not written yet (shown dashed). A writer finishing a node deletes
   ", planned: true" from that node's line only (one-line edit, so parallel writers don't collide). */
(function(){
const DB = window.DB;
DB.fields["vocabulary"] = { subject: "english", name: "Vocabulary & Word Study", icon: "Lex", level: "College ENGL 1xx · college vocabulary", col: 1, row: 6, pre: ["grammar"], status: "charted",
  blurb: "How to work out, judge and use words: context clues and the dictionary entry, Latin and Greek word parts, pronunciation and stress, where words come from, connotation and nuance, and the academic vocabulary of college reading.",
  topics: [] };
const g = DB.subjectMaps.english.groups.find(x => x.name === "Language & Writing");
if (g && !g.ids.includes("vocabulary")) g.ids.splice(g.ids.indexOf("grammar") + 1, 0, "vocabulary");

const T = DB.trees["vocabulary"] = {
  eras: [
    { name: "Meaning & the Dictionary", from: 0, to: 1 },
    { name: "Word Parts", from: 2, to: 3 },
    { name: "Sound & History", from: 4, to: 5 },
    { name: "Shades of Meaning", from: 6, to: 7 },
    { name: "Academic Vocabulary", from: 8, to: 9 }
  ],
  nodes: [
    { id: "voc-context-clues", label: "Context Clues", col: 0, row: 2, icon: "?…", chips: ["definition","contrast","example"], pre: ["eng-parts-of-speech"], planned: true },
    { id: "voc-dictionary-entry", label: "Reading a Dictionary Entry", col: 0, row: 5, icon: "Aa", chips: ["sense","label","usage"], pre: ["eng-parts-of-speech"], planned: true },
    { id: "voc-morphemes", label: "Morphemes: Roots, Bases & Affixes", col: 1, row: 3, icon: "√+", chips: ["root","affix","base"], pre: ["voc-context-clues","voc-dictionary-entry"], planned: true },
    { id: "voc-prefixes", label: "Prefixes", col: 2, row: 1, icon: "pre-", chips: ["un-","sub-","trans-"], pre: ["voc-morphemes"], planned: true },
    { id: "voc-suffixes", label: "Suffixes & Word Class", col: 2, row: 4, icon: "-tion", chips: ["-ize","-ous","-ity"], pre: ["voc-morphemes"], planned: true },
    { id: "voc-word-formation", label: "Compounding & Other Word Formation", col: 2, row: 6, icon: "A+B", chips: ["compound","blend","clip"], pre: ["voc-morphemes"], planned: true },
    { id: "voc-latin-roots", label: "Latin Roots", col: 3, row: 1, icon: "dict", chips: ["port","spec","duct"], pre: ["voc-prefixes","voc-suffixes"], planned: true },
    { id: "voc-greek-roots", label: "Greek Roots & Combining Forms", col: 3, row: 3, icon: "-logy", chips: ["bio","graph","chron"], pre: ["voc-prefixes","voc-suffixes"], planned: true },
    { id: "voc-etymology", label: "Etymology & Borrowed Words", col: 4, row: 2, icon: "⟵", chips: ["Latin","French","Norse"], pre: ["voc-latin-roots","voc-greek-roots","voc-word-formation"], planned: true },
    { id: "voc-pronunciation", label: "Pronunciation, IPA & Respelling", col: 4, row: 5, icon: "/ə/", chips: ["IPA","schwa"], pre: ["voc-dictionary-entry","voc-suffixes"], planned: true },
    { id: "voc-semantic-change", label: "How Meanings Change", col: 5, row: 2, icon: "→", chips: ["broaden","narrow","shift"], pre: ["voc-etymology"], planned: true },
    { id: "voc-stress", label: "Word Stress & Syllables", col: 5, row: 5, icon: "ˈ ˌ", chips: ["PREsent","preSENT"], pre: ["voc-pronunciation"], planned: true },
    { id: "voc-polysemy", label: "Multiple Meanings & Homonyms", col: 6, row: 1, icon: "1→n", chips: ["polysemy","homonym"], pre: ["voc-semantic-change","voc-context-clues"], planned: true },
    { id: "voc-connotation", label: "Denotation & Connotation", col: 6, row: 3, icon: "+/−", chips: ["denotation","connotation"], pre: ["voc-semantic-change"], planned: true },
    { id: "voc-figurative", label: "Idiom & Figurative Meaning", col: 6, row: 5, icon: "≀", chips: ["idiom","metaphor"], pre: ["voc-semantic-change"], planned: true },
    { id: "voc-synonyms", label: "Synonyms, Antonyms & Nuance", col: 7, row: 2, icon: "≈", chips: ["synonym","antonym","nuance"], pre: ["voc-polysemy","voc-connotation"], planned: true },
    { id: "voc-register", label: "Register & Diction", col: 8, row: 1, icon: "Reg", chips: ["formal","plain"], pre: ["voc-synonyms"], planned: true },
    { id: "voc-confusables", label: "Commonly Confused Words", col: 8, row: 4, icon: "≠", chips: ["affect","effect"], pre: ["voc-synonyms"], planned: true },
    { id: "voc-academic-words", label: "The Academic Word List", col: 9, row: 2, icon: "AWL", chips: ["analyze","derive"], pre: ["voc-register","voc-latin-roots","voc-greek-roots"], planned: true },
    { id: "voc-discipline-terms", label: "Discipline-Specific Vocabulary", col: 9, row: 4, icon: "∑ ¶ ♪", chips: ["general","technical"], pre: ["voc-register","voc-confusables"], planned: true }
  ]
};
T.planned = T.nodes.filter(n => n.planned);
T.nodes = T.nodes.filter(n => !n.planned);
T.planned.forEach(n => { delete n.planned; });
const sub = DB.subjects.find(s => s.id === "english");
if (sub) sub.note = "21 fields · Grammar & Usage charted, Vocabulary mapped";
})();
