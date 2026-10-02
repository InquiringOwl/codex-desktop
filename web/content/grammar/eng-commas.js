window.ARITH = window.ARITH || {};

ARITH["eng-commas"] = {
  title: "Commas",
  short: "The eight main comma rules, where the style guides disagree, and the four commas that do not belong",
  grade: "College ENGL 1xx · grammar",
  hours: 5,
  voice: "plain",
  eyebrow: "Grammar & Usage · punctuation",
  hero: `When it rained<span class="c2">,</span> Jo<span class="c4">,</span> the eldest<span class="c4">,</span> stayed in.`,
  lede: `A comma separates or sets off parts of a sentence so the reader groups the words correctly. Nearly every correct comma answers to one of eight rules, and nearly every wrong one is one of four habits.`,
  plain: `<p>Commas tell the reader how to group words. Compare <i>Let’s eat, Grandpa</i> with <i>Let’s eat Grandpa</i>: the comma shows that Grandpa is being spoken to, not served. Most commas do one of two jobs. They <b>separate</b> things that come in a row (clauses joined by <i>and</i> or <i>but</i>, items in a list, adjectives in a pile), or they <b>set off</b> something extra from the sentence around it (an opening phrase, a side comment, a name, a quotation).</p>
<p>Something “extra” is a part you could lift out without changing which person or thing you mean. <i>Marley, who had died seven years earlier, had been Scrooge’s partner</i>: we already know who Marley is, so the clause is extra and gets commas on both sides. <i>The man who signed the register was Scrooge</i>: here the clause tells us which man, so it is essential and gets none.</p>
<p>A comma is not a breath mark. Speakers pause in places where commas are wrong, especially between a long subject and its verb (<i>The man who signed the register, was Scrooge</i> is wrong). Ask which rule a comma follows; if none applies, leave it out.</p>`,
  formal: `<p>Handbooks group comma use into a small set of rules. <b>(1)</b> Use a comma before a coordinating conjunction (<i>and, but, or, nor, for, so, yet</i>) that joins independent clauses; it may be omitted when both clauses are short and the meaning is clear. <b>(2)</b> Use a comma after an introductory clause, phrase or word; after a short introductory phrase (about four words or fewer) it is optional unless it prevents misreading. <b>(3)</b> Separate three or more items in a series. <b>(4)</b> Separate <b>coordinate adjectives</b>, which modify the noun equally: they pass the <i>and</i> test (<i>cold and damp fog</i>) and the reversal test (<i>damp, cold fog</i>); <b>cumulative adjectives</b>, where each modifies the whole group after it (<i>old stone bridge</i>), take no comma. <b>(5)</b> Set off <b>nonrestrictive</b> (nonessential) elements: relative clauses, participial phrases and appositives that do not identify the noun; restrictive (essential) elements take no commas. <b>(6)</b> Set off transitional and parenthetical expressions (<i>however, of course</i>), absolute phrases, <i>yes</i> and <i>no</i>, direct address, tag questions and contrasted elements (<i>a face, not a door knocker</i>). <b>(7)</b> Use a comma between a quotation and its speech tag, unless the quotation ends in a question mark or exclamation point. <b>(8)</b> Follow the conventions for dates (<i>July 4, 1776, was …</i>), addresses and places (<i>Talbot County, Maryland, in 1818</i>), numbers (<i>12,500</i>) and titles after names (<i>Jane Smith, PhD, spoke</i>).</p>
<div class="display"><span class="c1">IC, and IC.</span> (rule 1)<br><span class="c2">Intro, IC.</span> (rule 2)<br><span class="c3">A, B, and C</span> · <span class="c3">cold, damp fog</span> (3–4)<br><span class="c4">N, nonrestrictive, V</span> (rule 5)<br><span class="c4">X, however, Y</span> · <span class="c5">Yes, uncle,</span> (6)<br><span class="c5">“Come in,” he said.</span> (rule 7)<br><span class="c5">July 4, 1776, …</span> (rule 8)<br>✗ S, V · ✗ V, O · ✗ and, IC<br>✗ N, restrictive clause</div>
<p>Style guides differ. The <b>serial (Oxford) comma</b>, before the conjunction in a series (<i>Meg, Jo, Beth, and Amy</i>), is required by <i>The Chicago Manual of Style</i>, the <i>MLA Handbook</i> and APA style; the <i>Associated Press Stylebook</i> omits it in a simple series (<i>Meg, Jo, Beth and Amy</i>) but uses it when an item contains a conjunction (<i>tea, toast, and bread and butter</i>) or when the series is complex. Both are correct within their style; the error is mixing them in one document. In American usage commas and periods go inside closing quotation marks (<i>“Come in,” he said</i>); British usage places them inside only if they belong to the quoted matter. In dates, no comma is used in day-month-year form (<i>4 July 1776</i>) or between month and year alone (<i>July 1776</i>). Chicago and AP no longer put a comma before <i>Jr.</i> American style guides generally prefer <i>that</i> for restrictive clauses and <i>which</i> (with commas) for nonrestrictive ones; British writers use restrictive <i>which</i> freely.</p>
<p>The common misuses are commas that separate what belongs together: between a subject and its verb, between a verb and its object, between the two verbs of a compound predicate (<i>Huck slipped out and climbed down</i>), after a coordinating conjunction, around a restrictive clause, between cumulative adjectives, and the comma splice. Punctuation is part of the writing system rather than the grammar, and Huddleston and Pullum’s <i>Cambridge Grammar of the English Language</i> describes it separately; it calls nonrestrictive relative clauses <b>supplementary</b> and restrictive ones <b>integrated</b>, terms that explain the commas: a supplementary element is a separate unit of information, set off in writing as it is set off by intonation in speech.</p>`,
  legend: [
    { c: "c1", sym: `, and`, name: "Rule 1 · compound sentence", desc: "Before <i>and, but, or, nor, for, so, yet</i> joining two independent clauses." },
    { c: "c2", sym: `Intro,`, name: "Rule 2 · introductory", desc: "After an introductory clause, phrase or word." },
    { c: "c3", sym: `A, B, C`, name: "Rules 3–4 · series and coordinate adjectives", desc: "Between items in a series (serial comma by style) and between coordinate adjectives." },
    { c: "c4", sym: `, … ,`, name: "Rules 5–6 · nonrestrictive and parenthetical", desc: "Around nonessential clauses, phrases and appositives, and around transitional and parenthetical expressions." },
    { c: "c5", sym: `“…,” 4, 1776`, name: "Rules 7–8 · conventions", desc: "Quotations, dates, addresses and places, numbers, and direct address." }
  ],
  steps: { title: "How to punctuate a sentence with commas", items: [
    `Find the independent clauses. If two are joined by a coordinating conjunction, put a <span class="c1">comma before the conjunction</span> (rule 1).`,
    `Find anything that comes before the first main subject: an opening clause, phrase or word takes a <span class="c2">comma after it</span> (rule 2).`,
    `Look for lists and adjective pairs: commas between <span class="c3">series items</span> (decide on the serial comma by style) and between <span class="c3">coordinate adjectives</span> that pass the <i>and</i> and reversal tests.`,
    `For each clause, phrase or appositive inside the sentence, ask: does it identify which one? If not, it is <span class="c4">nonrestrictive</span> and gets a pair of commas; transitions and side comments get the same pair.`,
    `Apply the <span class="c5">conventions</span>: quotations, direct address, dates, places, numbers.`,
    `Check every comma that remains against the misuses: none between subject and verb, verb and object, two verbs of one subject, after <i>and</i>/<i>but</i>, or around an essential clause.`
  ] },
  example: {
    prompt: `Add the commas: <i>When the fog lifted Bob Cratchit who had been shivering all morning walked home and Scrooge counted his money.</i>`,
    lines: [
      { math: `<span class="c2">When the fog lifted,</span>`, note: "Introductory adverb clause before the main subject: comma after it (rule 2)." },
      { math: `Bob Cratchit<span class="c4">, who had been <br>shivering all morning,</span>`, note: "Bob is already named, so the who-clause is nonrestrictive: commas on both sides (rule 5)." },
      { math: `walked home<span class="c1">, and</span> Scrooge …`, note: "And joins two independent clauses (Bob walked / Scrooge counted): comma before it (rule 1)." },
      { math: `✗ Bob Cratchit … , walked`, note: "Without the first comma of the pair, the closing comma would sit alone between subject and verb." },
      { math: `Check: lift out the who-clause`, note: "When the fog lifted, Bob Cratchit walked home, and Scrooge counted his money. Still a full sentence with the same Bob." }
    ],
    answer: `<i>When the fog lifted, Bob Cratchit, who had been shivering all morning, walked home, and Scrooge counted his money.</i>`
  },
  why: `<p>Commas change meaning, not just appearance. <i>The students who had read the book passed</i> says only some students passed; <i>The students, who had read the book, passed</i> says all of them did. Misplaced commas in contracts and statutes have decided lawsuits; a missing serial comma in a Maine overtime law led to a 2017 federal appeals ruling (<i>O’Connor v. Oakhurst Dairy</i>) worth millions of dollars to the drivers.</p>
<p>Commas are also the punctuation mark readers notice most when it is wrong. A writer who can name the rule behind each comma can punctuate confidently, follow whichever style guide an editor or instructor requires, and see that many “rules” learned in school (a comma wherever you pause) are not rules at all.</p>`,
  careers: [
    { role: "Copy editor", use: "Applies a house style (Chicago for books, AP for news) to every serial comma, date and nonrestrictive clause in a manuscript." },
    { role: "Journalist", use: "Writes to AP style, which drops the serial comma in simple series and has its own conventions for dates, ages and addresses." },
    { role: "Attorney", use: "Drafts contracts in which a comma can decide whether a condition applies to one item in a list or to all of them." },
    { role: "Technical writer", use: "Punctuates step lists and specifications so that series items and options cannot be misread." },
    { role: "Editorial assistant in academic publishing", use: "Checks manuscripts against Chicago, MLA or APA style, including serial commas and the punctuation of quotations." },
    { role: "UX writer", use: "Writes interface text where a misplaced comma in a short label or error message changes what the user is told to do." }
  ],
  life: [
    "Addressing an envelope or writing a date in a letter uses the conventions of rule 8: Baltimore, Maryland; July 4, 1776.",
    "A text reading 'Let's eat, Grandpa' and one reading 'Let's eat Grandpa' are a classic illustration of direct address.",
    "Forms, résumés and cover letters are judged partly on mechanics; a comma between subject and verb is a common error readers notice.",
    "Knowing the serial-comma split explains why a newspaper and a book can punctuate the same list differently and both be right."
  ],
  fields: [
    { name: "Law", use: "Statutory interpretation sometimes turns on commas, as in the Oakhurst Dairy overtime case over a missing serial comma." },
    { name: "Journalism", use: "AP style governs commas in most American newspapers and wire copy." },
    { name: "Publishing", use: "Book publishers follow Chicago style, which requires the serial comma and sets rules for every comma convention." }
  ],
  prereqWhy: {
    "eng-fragments": "Rule 1 and the comma splice are the same boundary seen from two sides: a comma joins independent clauses only together with a coordinating conjunction.",
    "eng-subordinate": "Rules 2 and 5 depend on clause types: a comma after an introductory adverb clause, and commas around nonrestrictive relative clauses but not restrictive ones."
  },
  unlocksWhy: {
    "eng-punctuation": "Semicolons, colons and dashes take over where commas are too weak: a semicolon joins clauses without a conjunction and separates series items that contain commas, and dashes set off an interruption that already contains commas.",
    "eng-style": "Revising for concision and variety moves phrases and clauses around, and each move changes which comma rules apply."
  },
  beyond: [
    { field: "Composition I", why: "Comma rules are the core of the punctuation unit in first-year writing and a standard editing target." },
    { field: "Composition II", why: "Research writing applies MLA, APA or Chicago style, including the serial comma and the punctuation of quotations." },
    { field: "Introduction to English Linguistics", why: "Linguists relate commas to intonation units and to the integrated-versus-supplementary distinction in syntax." },
    { field: "History of the English Language", why: "Punctuation was rhetorical (marking pauses) before it became grammatical; the modern comma rules are largely nineteenth- and twentieth-century codifications." }
  ],
  mistakes: [
    { wrong: `<i>The man who signed the register, was Scrooge.</i>`, fix: `No comma between a subject and its verb, however long the subject: <i>The man who signed the register was Scrooge.</i>` },
    { wrong: `<i>Scrooge hated Christmas but, his nephew loved it.</i>`, fix: `The comma goes before the conjunction: <i>Scrooge hated Christmas, but his nephew loved it.</i>` },
    { wrong: `<i>Huck slipped out of the window, and climbed down the tree.</i>`, fix: `One subject with two verbs is a compound predicate, not a compound sentence: <i>Huck slipped out of the window and climbed down the tree.</i>` },
    { wrong: `<i>Students, who cheat, will fail.</i>`, fix: `The clause tells which students, so it is restrictive: <i>Students who cheat will fail.</i> With commas the sentence says all students cheat.` },
    { wrong: `<i>a bright, red, barn</i>`, fix: `Never a comma between the last adjective and the noun, and none between cumulative adjectives: <i>a bright red barn</i>.` }
  ],
  practice: [
    { q: `Add the commas: <i>Meg Jo Beth and Amy waited by the fire.</i>`, a: `Chicago, MLA and APA: <i>Meg, Jo, Beth, and Amy waited by the fire.</i> AP: <i>Meg, Jo, Beth and Amy waited by the fire.</i> Both are correct in their own style (rule 3); there is no comma after <i>Amy</i>, which would split subject from verb.` },
    { q: `Coordinate or cumulative? <i>a long cold winter</i> · <i>three old houses</i>`, a: `<i>A long, cold winter</i>: coordinate (<i>long and cold</i>, <i>cold, long winter</i> both work), so a comma (rule 4). <i>Three old houses</i>: cumulative (<i>three and old</i> fails), so no comma.` },
    { q: `Explain the difference: <i>My brother who lives in Ohio is a doctor.</i> / <i>My brother, who lives in Ohio, is a doctor.</i>`, a: `Without commas the clause is restrictive: it picks out one brother among several. With commas it is nonrestrictive: the writer has one brother, and the clause just adds where he lives (rule 5).` },
    { q: `Punctuate: <i>On July 4 1776 in Philadelphia Pennsylvania the delegates said yes we agree.</i>`, a: `<i>On July 4, 1776, in Philadelphia, Pennsylvania, the delegates said, “Yes, we agree.”</i> Rule 8 puts commas around the year and the state; rule 7 puts a comma before the quotation; rule 6 sets off <i>yes</i>. (Turned into indirect speech, it would be <i>the delegates said that they agreed</i>, with no comma.)` }
  ],
  origin: `<p>The word <i>comma</i> comes through Latin from the Greek <i>komma</i>, “a piece cut off”: in classical rhetoric it named a short phrase, not a mark. The Venetian printer Aldus Manutius and his grandson of the same name popularized the modern low, curved comma in the late fifteenth and sixteenth centuries. Into the eighteenth century, English writers placed commas largely by rhetoric (where a reader would pause), which is why Austen’s and Dickens’s commas often differ from the modern rules; the rule-based system taught today was codified in nineteenth- and twentieth-century grammars and style manuals.</p>`,
  stories: [
    { title: "Handsome, Clever, and Rich", book: "Emma", author: "Jane Austen", year: 1815, kind: "Novel", where: "Volume I, Chapter I (first sentence)", scene: "emma-hartfield", focus: ["nr", "ser"],
      tags: { nr: { name: "Rule 5 · nonrestrictive", c: "c4", test: "Sets off a part that could be lifted out." }, ser: { name: "Rule 3 · series", c: "c3" } },
      tokens: `Emma Woodhouse ,_nr#na handsome ,_ser#sa clever ,_ser#sb and rich ,_nr#nb with a comfortable home and happy disposition ,_nr#nc seemed to unite some of the best blessings of existence ; and had lived nearly twenty-one years in the world with very little to distress or vex her .`,
      notes: { na: "Opens the nonrestrictive group: we already know who Emma Woodhouse is, so what follows is extra.", sa: "Separates the first two items of the series handsome, clever, and rich.", sb: "The serial (Oxford) comma before and: Austen uses it, as Chicago and MLA would.", nb: "Closes the adjective group and opens the next nonrestrictive phrase, with a comfortable home ….", nc: "Closes the nonrestrictive phrase, so the verb seemed reconnects to its subject Emma Woodhouse." },
      note: `Five commas in this first sentence, and every one obeys a modern rule. Two separate the series <i>handsome, clever, and rich</i>, including a serial comma. The other three work as rule-5 pairs: they set off the nonessential adjectives and the phrase <i>with a comfortable home and happy disposition</i>, so that lifting both out leaves <i>Emma Woodhouse seemed to unite some of the best blessings of existence</i>. The semicolon before <i>and had lived</i> is older usage: it marks a heavy pause before the second verb of a compound predicate, where a modern editor would put no punctuation at all.` },
    { title: "I Was Born in Tuckahoe", book: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Frederick Douglass", year: 1845, kind: "Autobiography", where: "Chapter I (first sentence)", scene: "tidewater", focus: ["nr", "place"],
      tags: { nr: { name: "Rule 5 · nonrestrictive", c: "c4" }, place: { name: "Rule 8 · places", c: "c5", test: "Separates the parts of a place name." } },
      tokens: `I was born in Tuckahoe ,_nr#da near Hillsborough ,_nr#db and about twelve miles from Easton ,_place#dc in Talbot county ,_place#dd Maryland .`,
      notes: { da: "Opens a nonrestrictive locating phrase: near Hillsborough adds information about Tuckahoe.", db: "Closes the phrase, and the sentence adds a second location with and.", dc: "Separates the town from the larger area that locates it, as an address does.", dd: "County, state: the comma between the parts of a place name (rule 8)." },
      note: `Douglass places his birth with four commas. The first pair sets off <i>near Hillsborough</i> as extra locating information; the second pair works like an address, moving from town to county to state (<i>Easton, in Talbot county, Maryland</i>). Because <i>Maryland</i> ends the sentence, the period replaces the comma that would otherwise follow the state (<i>Talbot County, Maryland, in 1818</i>). The lower-case <i>county</i> is the 1845 printing’s style.` },
    { title: "A Merry Christmas, Uncle!", book: "A Christmas Carol", author: "Charles Dickens", year: 1843, kind: "Novella", where: "Stave One", scene: "counting-house", focus: ["addr", "quo"],
      tags: { addr: { name: "Direct address", c: "c5", test: "The person spoken to, set off by commas." }, quo: { name: "Rule 7 · quotation", c: "c5" } },
      tokens: `“ A merry Christmas ,_addr uncle_addr ! God save you !_quo ” cried a cheerful voice .`,
      notes: { ",": "Sets off the direct address: the speaker greets someone and then names him.", uncle: "The person spoken to (Scrooge, greeted by his nephew Fred): direct address, set off from the greeting.", "!": "The quotation ends with an exclamation point, so no comma is added before the speech tag." },
      note: `Scrooge’s nephew bursts in with a greeting that shows two conventions. A comma sets off <i>uncle</i> as direct address (an exclamation point closes it, since it ends a sentence). And because the quotation itself ends with an exclamation point, no comma comes before <i>cried a cheerful voice</i>: the rule-7 comma is used only when the quoted sentence would otherwise end with a period. The speech tag starts with a lower-case letter because it continues the same sentence.` }
  ]
};
