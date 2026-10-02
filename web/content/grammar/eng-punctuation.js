window.ARITH = window.ARITH || {};

ARITH["eng-punctuation"] = {
  title: "Semicolons, Colons, Dashes & Apostrophes",
  short: "The marks stronger than a comma, the three lengths of dash, and the apostrophe for possession and omission",
  grade: "College ENGL 1xx · grammar",
  hours: 4,
  voice: "plain",
  eyebrow: "Grammar & Usage · punctuation",
  hero: `It was late<span class="c1">;</span> Jo<span class="c4">’</span>s lamp<span class="c3">—</span>still lit<span class="c3">—</span>glowed.`,
  lede: `A semicolon joins equals, a colon points ahead, a dash breaks in with emphasis, and an apostrophe marks possession or missing letters. Each has a few firm rules and a few places where style guides differ.`,
  plain: `<p>A <b>semicolon</b> is a strong comma or a soft period. It joins two complete sentences that belong together (<i>The town slept; the river kept moving</i>), and it separates list items that already contain commas. A <b>colon</b> points forward: after a complete sentence, it says “here it comes”, introducing a list, an explanation or a single word (<i>Scrooge loved one thing: money</i>).</p>
<p>The <b>dash</b> (the long one, —) does a colon’s or a pair of commas’ job with more force: <i>Some years ago—never mind how long precisely—</i>. The shorter <b>en dash</b> (–) joins ranges (<i>pages 10–25</i>), and the shortest mark, the <b>hyphen</b> (-), joins words into one unit (<i>a well-known author</i>).</p>
<p>The <b>apostrophe</b> does two jobs. It shows ownership (<i>Jo’s lamp</i>, <i>the girls’ room</i>, <i>the children’s toys</i>), and it marks letters left out of a contraction (<i>won’t</i>, <i>it’s</i> for <i>it is</i>). It does not make ordinary plurals (<i>three apples</i>, not <i>apple’s</i>), and the possessive pronouns <i>its, whose, hers, theirs</i> never take one.</p>`,
  formal: `<p>The <b>semicolon</b> joins two closely related independent clauses without a coordinating conjunction (<i>The town slept; the river kept moving</i>); joins independent clauses linked by a conjunctive adverb or transitional phrase (<i>; however,</i> / <i>; in fact,</i>); and separates items in a series when the items contain internal commas (<i>Boston, Massachusetts; Hartford, Connecticut; and Albany, New York</i>). It does not introduce a list and does not join a clause to a phrase or dependent clause. The <b>colon</b> follows a grammatically complete independent clause and introduces a list, an appositive, an explanation or amplification (which may be an independent clause), or a quotation; it is not used between a verb or preposition and its object (<i>✗ The kit included: a rope</i>). Capitalisation after a colon differs by style: Chicago lowercases the first word unless it is a proper noun or the colon introduces two or more sentences, a quotation or speech; APA and AP capitalise a complete sentence after a colon. Conventional colons appear in ratios (3:1), times (10:30), biblical citations, titles and subtitles, and business-letter salutations.</p>
<div class="display">IC<span class="c1">;</span> IC.<br>IC<span class="c1">;</span> however, IC.<br>A, B<span class="c1">;</span> C, D<span class="c1">;</span> and E, F<br>IC<span class="c2">:</span> list / appositive / IC<br>✗ verb<span class="c2">:</span> object<br>IC<span class="c3">—</span>interruption<span class="c3">—</span>IC<br>10<span class="c3">–</span>25 (en dash, range)<br>well<span class="c5">-</span>known author (hyphen)<br>Jo<span class="c4">’s</span> · girls<span class="c4">’</span> · children<span class="c4">’s</span></div>
<p>The <b>em dash</b> (—) sets off an interruption or an appositive, especially one that contains commas; introduces a summary or an emphatic final element; or marks a break in speech. A pair of dashes is more emphatic than a pair of commas and less quiet than parentheses. American style (Chicago, MLA, APA) closes the em dash up with no spaces; AP puts a space on each side; British publishers usually use a spaced en dash instead. The <b>en dash</b> (–) marks ranges (<i>1861–1865</i>, <i>pages 10–25</i>) and, in Chicago style, joins a compound to an open compound (<i>post–Civil War</i>); AP has no en dash and uses a hyphen. The <b>hyphen</b> joins compound modifiers before a noun (<i>a well-known writer</i>, but <i>the writer is well known</i> in Chicago), some prefixes (<i>ex-wife</i>, <i>anti-American</i>), spelled-out numbers (<i>twenty-one</i>) and words divided at a line break. No hyphen follows an <i>-ly</i> adverb (<i>a highly skilled worker</i>). <b>Parentheses</b> enclose supplementary material more quietly than commas or dashes; punctuation belonging to the sentence goes outside them.</p>
<p>The <b>apostrophe</b> forms possessives: add <i>’s</i> to singular nouns (<i>the dog’s</i>, <i>the boss’s</i>) and to plurals not ending in <i>s</i> (<i>children’s</i>, <i>women’s</i>); add <i>’</i> alone to plurals ending in <i>s</i> (<i>the dogs’</i>, <i>the Joneses’</i>). For singular proper names ending in <i>s</i>, Chicago and MLA add <i>’s</i> (<i>Dickens’s</i>); AP adds only the apostrophe (<i>Dickens’</i>). Joint possession marks the last noun only (<i>Lewis and Clark’s expedition</i>); individual possession marks each (<i>Lewis’s and Clark’s journals</i>); compounds mark the last word (<i>mother-in-law’s</i>). The apostrophe also marks omission in contractions (<i>won’t, it’s, ’tis</i>) and dropped digits (<i>the class of ’98</i>). Personal and relative possessive pronouns (<i>its, whose, ours, theirs</i>) never take one; <i>it’s</i> and <i>who’s</i> are contractions. Plurals of decades (<i>1920s</i>) take no apostrophe; plurals of lowercase letters do (<i>mind your p’s and q’s</i>), and AP also uses one for single capital letters (<i>A’s</i>). Huddleston and Pullum’s <i>Cambridge Grammar</i> analyses possessive <i>’s</i> as a clitic attached to the whole noun phrase, not a case ending on one noun, which is why it goes on the last word of <i>the king of England’s</i> crown and of joint possessives.</p>`,
  legend: [
    { c: "c1", sym: `;`, name: "Semicolon", desc: "Joins two independent clauses as equals, or separates series items that contain commas." },
    { c: "c2", sym: `:`, name: "Colon", desc: "After a complete clause: introduces a list, an appositive, an explanation or a quotation." },
    { c: "c3", sym: `— –`, name: "Dash", desc: "Em dash for emphasis and interruption; en dash for ranges." },
    { c: "c4", sym: `’`, name: "Apostrophe", desc: "Possession (<i>Jo’s, girls’, children’s</i>) and omission in contractions (<i>won’t</i>)." },
    { c: "c5", sym: `- ( )`, name: "Hyphen / other mark", desc: "Hyphen in compound modifiers and some prefixes; parentheses; and the comma and period." }
  ],
  steps: { title: "How to choose the mark", items: [
    `Identify what stands on each side: an independent clause, a dependent clause, a phrase, a single noun phrase or a list.`,
    `Two independent clauses with no conjunction: a period or a <span class="c1">semicolon</span>; a <span class="c2">colon</span> if the second explains the first; a <span class="c3">dash</span> for an informal, abrupt break. Never a comma alone.`,
    `A complete clause followed by a list or a single item it announces: a <span class="c2">colon</span> (formal) or a <span class="c3">dash</span> (emphatic). After a verb or preposition: no mark.`,
    `An interruption in mid-sentence: commas (quiet), parentheses (quieter) or a pair of <span class="c3">dashes</span> (emphatic, and safest if it contains commas).`,
    `Joined words: a <span class="c5">hyphen</span> for a compound before a noun; an <span class="c3">en dash</span> for a range.`,
    `Possession: write the owner’s word (plural first if needed). Ends in <i>s</i> and plural → add <span class="c4">’</span>; otherwise → add <span class="c4">’s</span>. Check pronouns: <i>its, whose</i>, no apostrophe.`
  ] },
  example: {
    prompt: `Punctuate: <i>The Marches had little money they had something better each other Jo wrote plays Meg sewed dresses Beth played the piano and Amy who loved art drew everyone.</i>`,
    lines: [
      { math: `The Marches had little money<span class="c1">;</span>`, note: "Two independent clauses with no conjunction: a semicolon." },
      { math: `they had something better<span class="c2">:</span> <br>each other.`, note: "A complete clause announcing a noun phrase: a colon (a dash would be more emphatic)." },
      { math: `Jo wrote plays<span class="c1">;</span> Meg sewed dresses<span class="c1">;</span>`, note: "The four clauses form a series, and the last item contains commas, so semicolons separate the items." },
      { math: `Beth played the piano<span class="c1">;</span> <br>and Amy, who loved art, drew …`, note: "The commas around who loved art set off a nonrestrictive clause inside the last item." },
      { math: `Check: replace ; with .`, note: "Each semicolon-joined piece can stand as a sentence: The Marches had little money. Jo wrote plays. Amy, who loved art, drew everyone." }
    ],
    answer: `<i>The Marches had little money; they had something better: each other. Jo wrote plays; Meg sewed dresses; Beth played the piano; and Amy, who loved art, drew everyone.</i>`
  },
  why: `<p>These marks let a writer show how ideas relate without adding words. A semicolon says two statements are equal partners; a colon says the second delivers what the first promised; a dash says “notice this”. Choosing among them is a matter of logic and emphasis, and getting it wrong (a colon after a verb, a semicolon before a phrase) shows a reader that the writer has not seen the sentence’s structure.</p>
<p>Apostrophe errors are among the most visible in public writing, from shop signs (<i>apple’s for sale</i>) to the <i>its/it’s</i> confusion. Possessive and plural forms also carry meaning: <i>the student’s grades</i> and <i>the students’ grades</i> describe different records, and contracts depend on whose obligation is whose.</p>`,
  careers: [
    { role: "Copy editor", use: "Enforces house rules on dash spacing, colon capitalisation and possessives of names ending in s, which differ between Chicago and AP." },
    { role: "Journalist", use: "Writes to AP style: spaced em dashes, hyphens for ranges, and Dickens' rather than Dickens's." },
    { role: "Typesetter or production editor", use: "Sets the correct character for each mark (hyphen, en dash, em dash, curly apostrophe) in print and digital editions." },
    { role: "Paralegal", use: "Drafts documents where the semicolons in a list of conditions and the placement of possessives determine who owes what." },
    { role: "Technical writer", use: "Uses colons to introduce procedures and hyphenated compound modifiers to keep specifications unambiguous." },
    { role: "Signage and marketing designer", use: "Checks apostrophes in public text, where an error like 'apple's for sale' is seen by thousands." }
  ],
  life: [
    "Its and it's are the most common apostrophe mix-up in emails and posts; checking whether 'it is' fits settles it.",
    "Holiday cards from a family named Jones are signed 'the Joneses', not 'the Jones's'.",
    "A résumé often uses an en dash for date ranges (2019–2023) and a colon to introduce a list of skills.",
    "Text messages use the dash for asides, and knowing the difference between a dash and a hyphen makes formal writing look finished."
  ],
  fields: [
    { name: "Publishing", use: "Chicago style governs dashes, colons and possessives in most American books." },
    { name: "Typography", use: "Distinguishes the hyphen, en dash and em dash as separate characters with separate uses." },
    { name: "Law", use: "Semicolons in statutory lists separate conditions; their placement has been argued in court." }
  ],
  prereqWhy: {
    "eng-commas": "Semicolons, colons and dashes begin where commas stop working: a comma cannot join two independent clauses alone, cannot separate series items that contain commas, and cannot set off an interruption full of commas without confusion."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Composition I", why: "Semicolons, colons and apostrophes are standard editing targets, and choosing among the marks is part of revising for emphasis." },
    { field: "Poetry & Poetics", why: "Poets use punctuation as rhythm; Dickinson's dashes are the classic case of punctuation as part of a poem's meaning." },
    { field: "History of the English Language", why: "The apostrophe in possessives is a modern spelling convention; the old genitive ending -es lost its vowel, and printers began marking possession with an apostrophe in the seventeenth and eighteenth centuries." },
    { field: "Advanced Composition & Rhetoric", why: "Choosing among the semicolon, colon and dash is a tool of style and emphasis studied in rhetoric." }
  ],
  mistakes: [
    { wrong: `<i>The recipe calls for: flour, eggs and milk.</i>`, fix: `No colon between a verb and its object: <i>The recipe calls for flour, eggs and milk.</i> Or make the clause complete: <i>The recipe calls for three things: flour, eggs and milk.</i>` },
    { wrong: `<i>The ship lost it’s mast.</i>`, fix: `<i>It’s</i> means <i>it is</i>. The possessive pronoun has no apostrophe: <i>The ship lost its mast.</i>` },
    { wrong: `<i>Although it rained; we went out.</i>`, fix: `A semicolon needs an independent clause on both sides; after an introductory dependent clause use a comma: <i>Although it rained, we went out.</i>` },
    { wrong: `<i>Fresh apple’s for sale.</i>`, fix: `Plurals take no apostrophe: <i>Fresh apples for sale.</i>` },
    { wrong: `<i>The childrens’ books</i> / <i>the Jones’s house</i> (meaning the family)`, fix: `<i>Children</i> is already plural: <i>children’s</i>. For the family, make the plural first: <i>the Joneses’ house</i>.` },
    { wrong: `<i>pages 10—25</i>, <i>a well known author</i>`, fix: `A range takes an en dash (Chicago) or a hyphen (AP): <i>pages 10–25</i>. A compound modifier before a noun takes a hyphen: <i>a well-known author</i>.` }
  ],
  practice: [
    { q: `Write the possessive: <i>the girls</i> (plural), <i>the boss</i>, <i>the women</i>.`, a: `<i>The girls’</i> (plural ending in <i>s</i>: apostrophe alone), <i>the boss’s</i> (singular: add <i>’s</i>, in every major style), <i>the women’s</i> (irregular plural without <i>s</i>: add <i>’s</i>).` },
    { q: `Semicolon or colon? <i>The plan had one flaw ___ nobody owned a boat.</i>`, a: `Both are correct. The colon is more precise, because the second clause explains what the flaw was; a semicolon would simply pair the two statements. A dash would also work, with more emphasis and less formality.` },
    { q: `Fix the punctuation: <i>We visited three cities, Boston, Massachusetts, Hartford, Connecticut, and Albany, New York.</i>`, a: `<i>We visited three cities: Boston, Massachusetts; Hartford, Connecticut; and Albany, New York.</i> A colon introduces the list after a complete clause, and semicolons separate items that contain commas.` },
    { q: `Explain the marks in Melville’s <i>Some years ago—never mind how long precisely—having little or no money …</i> Why not commas?`, a: `The paired em dashes set off an interruption, and the interruption is a complete imperative clause (<i>never mind how long precisely</i>). Commas around a full clause inserted into another would read like a comma splice and be easy to misread; dashes mark it clearly as an aside and give it the abrupt, conversational tone Ishmael wants. Parentheses would also be grammatical but quieter.` }
  ],
  origin: `<p>The Venetian printer Aldus Manutius is credited with introducing the semicolon in print, in Pietro Bembo’s <i>De Aetna</i> (1496). The apostrophe came into English printing in the sixteenth century to mark omitted letters, and its use for the possessive grew out of that: the Old and Middle English genitive ending <i>-es</i> lost its vowel, printers were marking the singular possessive with <i>’s</i> by the late seventeenth century, and the plural <i>s’</i> became usual in the eighteenth. The <i>its</i> without an apostrophe settled into standard spelling by the early nineteenth century.</p>`,
  stories: [
    { title: "Marley Was Dead", book: "A Christmas Carol", author: "Charles Dickens", year: 1843, kind: "Novella", where: "Stave One (opening)", scene: "counting-house", focus: ["col"],
      tags: { col: { name: "Colon", c: "c2", test: "Introduces what follows the complete clause." } },
      tokens: `MARLEY was dead :_col to begin with . There is no doubt whatever about that .`,
      notes: { ":": "A colon after the complete clause Marley was dead, introducing the qualification to begin with." },
      note: `The colon follows a complete clause, <i>Marley was dead</i>, as the rule requires, but what it introduces is a short phrase that qualifies rather than explains. That is Dickens’s era showing: nineteenth-century writers often used the colon as a pause heavier than a semicolon and lighter than a period. A modern editor might write <i>Marley was dead, to begin with</i> or use a dash. The effect is the same either way: a flat statement, a beat, then the narrator’s wry aside.` },
    { title: "Never Mind How Long Precisely", book: "Moby-Dick; or, The Whale", author: "Herman Melville", year: 1851, kind: "Novel", where: "Chapter 1, “Loomings”", scene: "whaler", focus: ["dash"],
      tags: { dash: { name: "Em dash", c: "c3", test: "A pair of dashes around an interruption." } },
      tokens: `Call me Ishmael . Some years ago —_dash#da never mind how long precisely —_dash#db having little or no money in my purse , and nothing particular to interest me on shore , I thought I would sail about a little and see the watery part of the world .`,
      notes: { da: "The opening dash of the pair: the sentence breaks off for an aside.", db: "The closing dash: the sentence resumes exactly where it left off, with having little or no money …." },
      note: `A pair of em dashes sets off <i>never mind how long precisely</i>, a complete imperative clause dropped into the middle of another sentence. Lift it out and the sentence still runs: <i>Some years ago, having little or no money …, I thought I would sail about</i>. Dashes suit the aside better than commas because it is a full clause and because the sentence already has commas of its own. Gutenberg’s text prints the dashes as double hyphens; they are shown here as em dashes, closed up in American style.` },
    { title: "He Kindly Stopped for Me", book: "Poems by Emily Dickinson, Series One", author: "Emily Dickinson", year: 1890, kind: "Poem", where: "“Time and Eternity,” XXVII (first stanza)", scene: "dickinson-carriage", focus: ["semi", "oth"],
      tags: { semi: { name: "Semicolon", c: "c1", test: "Between two independent clauses." }, oth: { name: "Other mark", c: "c5" } },
      tokens: `Because I could not stop for Death ,_oth ¶ He kindly stopped for me ;_semi ¶ The carriage held but just ourselves ¶ And Immortality ._oth`,
      notes: { ",": "Ends the introductory dependent clause Because I could not stop for Death.", ";": "Joins two independent clauses: He kindly stopped for me / The carriage held but just ourselves and Immortality.", ".": "The period closes the stanza and the sentence." },
      note: `In this 1890 printing the stanza is one sentence with conventional marks: a comma after the introductory clause, a semicolon joining two independent clauses (the first with its <i>because</i>-clause, the second with its compound object <i>ourselves / And Immortality</i>), and a period. Dickinson’s own manuscripts are famous for dashes; her first editors, Mabel Loomis Todd and Thomas Wentworth Higginson, replaced most of them with standard punctuation. Thomas H. Johnson’s 1955 edition restored the dashes, so modern anthologies print these lines ending in dashes. The punctuation itself is part of the editorial history of the poem.` },
    { title: "Christmas Won’t Be Christmas", book: "Little Women", author: "Louisa May Alcott", year: 1868, kind: "Novel", where: "Chapter One (opening)", scene: "christmas-hearth", focus: ["apos", "oth"],
      tags: { apos: { name: "Apostrophe", c: "c4", test: "Marks the letters left out of a contraction." }, oth: { name: "Other mark", c: "c5" } },
      tokens: `“ Christmas won’t_apos be Christmas without any presents ,_oth ” grumbled Jo , lying on the rug .`,
      notes: { "won’t": "A contraction of will not (from the older form woll not): the apostrophe marks the omitted letters.", ",": "The comma that ends the quoted sentence goes inside the closing quotation mark, in American style." },
      note: `One apostrophe, in <i>won’t</i>, and it marks omission, not possession: <i>will not</i> contracted through the older form <i>woll not</i>, which is why the vowel changes. The comma after <i>presents</i> sits inside the closing quotation mark, as in all American (and most nineteenth-century) printing; it replaces the period that would end Jo’s sentence because the speech tag <i>grumbled Jo</i> follows.` }
  ]
};
