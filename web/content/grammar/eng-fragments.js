window.ARITH = window.ARITH || {};

ARITH["eng-fragments"] = {
  title: "Fragments, Run-ons & Comma Splices",
  short: "Spot a piece punctuated as a sentence, or two sentences run together, and fix it five standard ways",
  grade: "College ENGL 1xx · grammar",
  hours: 4,
  voice: "plain",
  eyebrow: "Grammar & Usage · sentence boundaries",
  hero: `<span class="c1">The fog was thick</span><span class="c3">,</span> <span class="c1">the boats stayed in</span>.`,
  lede: `A written sentence needs at least one independent clause, and two independent clauses need a proper joint between them. A <b>fragment</b> has too little; a <b>comma splice</b> or <b>fused sentence</b> has two sentences with too little between them.`,
  plain: `<p>A sentence, in writing, starts with a capital and ends with a period, and in between it needs a subject and a finite verb that are not tucked under a word like <i>because</i>. A <b>fragment</b> is a piece that is punctuated like a sentence but cannot stand on its own: <i>Because the fog was thick.</i> <i>Grumbling about the presents.</i> <i>A man of great fortune.</i> Read any of these aloud by itself and you wait for the rest.</p>
<p>The opposite mistake is putting two complete sentences together with the wrong joint. With nothing at all between them you get a <b>fused</b> (or run-on) sentence: <i>Alice fell slowly she had time to look around.</i> With only a comma you get a <b>comma splice</b>: <i>The fog was thick, the boats stayed in.</i> A comma is not strong enough to hold two sentences together by itself.</p>
<p>The fixes are few and always the same. Make two sentences; join them with a semicolon; join them with a comma and <i>and, but, or, nor, for, so</i> or <i>yet</i>; make one of them depend on the other with <i>because, although, when</i>; or use a semicolon, a word like <i>however</i> and a comma. A fragment is fixed by attaching it to the sentence it belongs to, or by giving it the subject and verb it lacks.</p>`,
  formal: `<p>A <b>sentence fragment</b> is a word group punctuated as a sentence that does not contain an independent clause. The common types are: a <b>dependent clause</b> standing alone (<i>Because the fog was thick.</i>); a <b>phrase</b> with no finite verb, such as a participial, infinitive, prepositional or absolute phrase (<i>Hoping for a letter.</i> <i>The lawyers waiting in the hall.</i>); an <b>appositive</b> or other noun phrase (<i>Jacob Marley, his old partner.</i>); and a <b>predicate without a subject</b>, usually split off from a compound predicate (<i>And climbed down the tree.</i>). The tests: find a finite verb (one that shows tense and can change for <i>yesterday</i>/<i>today</i>; <i>-ing</i> and <i>to</i> forms alone do not count); find its subject; check that no subordinator or relative word makes the clause dependent; and try the piece after <i>I believe that …</i> (an independent clause still makes sense there, a fragment does not). Imperatives (<i>Stop.</i>) have an understood <i>you</i> and are complete.</p>
<div class="display"><span class="c1">IC</span><span class="c3">,</span> <span class="c1">IC</span>. ← comma splice<br><span class="c1">IC</span> <span class="c1">IC</span>. ← fused (run-on)<br><span class="c1">IC</span>. <span class="c2">Because …</span> ← fragment<br>fix 1: <span class="c1">IC</span><span class="c4">.</span> <span class="c1">IC</span>.<br>fix 2: <span class="c1">IC</span><span class="c4">;</span> <span class="c1">IC</span>.<br>fix 3: <span class="c1">IC</span><span class="c4">,</span> <span class="c5">but</span> <span class="c1">IC</span>.<br>fix 4: <span class="c5">Although</span> <span class="c2">DC</span><span class="c4">,</span> <span class="c1">IC</span>.<br>fix 5: <span class="c1">IC</span><span class="c4">;</span> <span class="c5">however</span><span class="c4">,</span> <span class="c1">IC</span>.</div>
<p>A <b>comma splice</b> joins two independent clauses with a comma alone; a <b>fused sentence</b> (also called a run-on) joins them with no punctuation or conjunction. Some handbooks use <i>run-on</i> for both. A long sentence is not a run-on if its clauses are properly joined. The classic splice uses a <b>conjunctive adverb</b> (<i>however, therefore, moreover, consequently, nevertheless, then</i>) as if it were a conjunction: <i>The house was quiet, however, the clock kept ticking.</i> Conjunctive adverbs can move within their clause (<i>the clock, however, kept ticking</i>), which coordinating conjunctions cannot, so they need a semicolon or period before them. The five standard repairs are a period, a semicolon, a comma plus a coordinating conjunction, subordination of one clause, and a semicolon plus conjunctive adverb plus comma. Choose by meaning: subordination states the relation (<i>because</i>, <i>although</i>), a conjunction names it more loosely, and a semicolon or period leaves it to the reader. A colon or dash may also join clauses when the second explains the first.</p>
<p>Fragments and splices are conventions of edited writing, not of grammar itself. Speech is full of verbless answers (<i>Because it was raining.</i>), and fiction, advertising and journalism use deliberate fragments for emphasis or rhythm (<i>Implacable November weather.</i>). Handbooks accept a comma between very short, parallel clauses, mostly in literary style (<i>I came, I saw, I conquered</i>), a figure called asyndeton. Huddleston and Pullum’s <i>Cambridge Grammar of the English Language</i> treats many so-called fragments as ordinary constructions: verbless clauses, elliptical replies, exclamations; and it treats <i>fragment</i> and <i>comma splice</i> as matters of punctuation, a writing-system choice about where a sentence is marked to end, rather than errors of syntax. In academic writing, deliberate fragments are rare and should look deliberate: short, emphatic, and clearly not an accident.</p>`,
  legend: [
    { c: "c1", sym: `[IC]`, name: "Independent clause", desc: "Subject + finite verb, not under a subordinator: the core every written sentence needs." },
    { c: "c2", sym: `[frag]`, name: "Fragment", desc: "A dependent clause, phrase or noun phrase punctuated as if it were a sentence." },
    { c: "c3", sym: `, / ∅`, name: "Splice / fusion point", desc: "Where two independent clauses meet with only a comma (splice) or nothing (fused)." },
    { c: "c4", sym: `. ; ,`, name: "Fix inserted", desc: "The punctuation a repair adds: period, semicolon, or the comma of a conjunction or introductory clause." },
    { c: "c5", sym: `but`, name: "Connector", desc: "The word a repair adds: a coordinating conjunction, a subordinator or a conjunctive adverb." }
  ],
  steps: { title: "How to find and fix boundary errors", items: [
    `Underline every finite verb and find its subject. Each subject–verb pair is a clause.`,
    `Mark each clause <span class="c1">independent</span> or dependent: a subordinator (<i>because, although, when, if</i>) or relative word (<i>who, which, that</i>) at its start makes it dependent.`,
    `Check every piece between a capital and a period: no independent clause means a <span class="c2">fragment</span>. Attach it to the sentence before or after, or give it a subject and finite verb.`,
    `Check every point where two independent clauses meet. A comma alone is a <span class="c3">splice</span>; nothing at all is a <span class="c3">fused sentence</span>.`,
    `Pick the fix that states the right relation: <span class="c4">period</span> or <span class="c4">semicolon</span> (relation left to the reader), <span class="c4">,</span> <span class="c5">and/but/so</span>, a <span class="c5">subordinator</span>, or <span class="c4">;</span> <span class="c5">however</span><span class="c4">,</span>.`,
    `Read the result aloud and recheck: every sentence has an independent clause, and every joint between two of them is a period, a semicolon, a colon, or a comma plus a coordinating conjunction.`
  ] },
  example: {
    prompt: `Find and fix the errors: <i>Scrooge counted his money, the clerk shivered by a tiny fire. Because the coal box was in Scrooge’s room.</i>`,
    lines: [
      { math: `counted · shivered · was`, note: "Three finite verbs, so three clauses." },
      { math: `<span class="c1">Scrooge counted his money</span><span class="c3">,</span>`, note: "Independent clause, then a comma ..." },
      { math: `<span class="c1">the clerk shivered by a tiny fire</span>`, note: "... and a second independent clause: a comma splice." },
      { math: `<span class="c2">Because the coal box was <br>in Scrooge’s room.</span>`, note: "Because makes this clause dependent, and it stands alone: a fragment." },
      { math: `Scrooge counted his money<span class="c4">,</span> <br><span class="c5">while</span> the clerk shivered …`, note: "Fix the splice by subordinating: while marks a contrast here (master counts, clerk freezes), so a comma comes before it. A semicolon would also work." },
      { math: `… by a tiny fire <span class="c5">because</span> <br>the coal box was in Scrooge’s room.`, note: "Fix the fragment by attaching it: an essential closing because-clause takes no comma." },
      { math: `Check: I believe that …`, note: "Each sentence now makes sense after 'I believe that', and the because-piece no longer stands alone." }
    ],
    answer: `<i>Scrooge counted his money, while the clerk shivered by a tiny fire because the coal box was in Scrooge’s room.</i> (Or: <i>Scrooge counted his money; the clerk shivered by a tiny fire because the coal box was in Scrooge’s room.</i>)`
  },
  why: `<p>Sentence boundaries are the first thing a reader’s eye uses to organise meaning. A splice makes two statements blur into one; a fragment makes the reader wait for a main clause that never comes. Comma splices and fragments are among the errors writing instructors mark most often, and they are easy to fix once you can find independent clauses quickly.</p>
<p>Knowing the five fixes also gives you choices. A period gives two equal statements, a semicolon pairs them, <i>but</i> or <i>so</i> names the link, <i>although</i> or <i>because</i> ranks one under the other. Choosing among them is one of the main ways a writer controls emphasis, and knowing the rule is what lets you break it on purpose, as Dickens does.</p>`,
  careers: [
    { role: "Copy editor", use: "Repairs comma splices and accidental fragments in manuscripts while keeping deliberate fragments that serve the author's style." },
    { role: "Writing center tutor", use: "Teaches students to find independent clauses and choose among the standard fixes, the most common sentence-level lesson in first-year writing." },
    { role: "Paralegal", use: "Drafts contract clauses and filings in which a misplaced boundary can attach a condition to the wrong obligation." },
    { role: "Advertising copywriter", use: "Uses short deliberate fragments for punch ('Fresh. Local. Yours.') and knows when a client document needs full sentences instead." },
    { role: "Court reporter", use: "Turns continuous speech into punctuated sentences for the transcript, deciding where each sentence ends." },
    { role: "Technical writer", use: "Writes procedures in which each step is one complete imperative sentence, with no run-together instructions." }
  ],
  life: [
    "A text or email that runs three thoughts together with commas reads as rushed; periods make it easier to answer point by point.",
    "Job application letters are often screened quickly, and comma splices are among the errors readers notice.",
    "Bullet points in a résumé are deliberate fragments ('Managed a team of six'), a convention readers accept in that format.",
    "Captions, headlines and signs use fragments on purpose; knowing the difference helps you choose the right register for each."
  ],
  fields: [
    { name: "Journalism", use: "Style guides set when a fragment is acceptable in features and headlines but not in news copy." },
    { name: "Law", use: "Statutes and contracts depend on clear clause boundaries so that each condition attaches to the right obligation." },
    { name: "Linguistics", use: "Studies non-sentential utterances and how speakers mark clause boundaries with intonation rather than punctuation." }
  ],
  prereqWhy: {
    "eng-sentence-types": "The fixes for a splice are exactly the joins of compound and complex sentences: a semicolon, a comma plus a coordinating conjunction, or a subordinator that makes one clause dependent."
  },
  unlocksWhy: {
    "eng-commas": "Rule 1 of the comma rules (a comma before a coordinating conjunction joining independent clauses) and the warning against comma splices start here, at the boundary between clauses."
  },
  beyond: [
    { field: "Composition I", why: "Proofreading for fragments, comma splices and fused sentences is a standard part of revising every first-year essay." },
    { field: "Introduction to Creative Writing", why: "Deliberate fragments and comma-spliced runs are tools of voice and rhythm, used once the convention is understood." },
    { field: "Introduction to English Linguistics", why: "Linguistics separates grammatical sentences from orthographic ones and studies verbless clauses and ellipsis." },
    { field: "The Novel", why: "Dickens, Woolf and others open scenes with fragments and long spliced runs; reading them well means seeing the choice." }
  ],
  mistakes: [
    { wrong: `<i>I stayed home. Because I was sick.</i>`, fix: `Attach the dependent clause: <i>I stayed home because I was sick.</i> A <i>because</i>-clause cannot stand alone in formal writing.` },
    { wrong: `<i>The test was hard, however, everyone passed.</i>`, fix: `<i>However</i> is a conjunctive adverb, not a conjunction: <i>The test was hard; however, everyone passed.</i>` },
    { wrong: `<i>She left early, she had a train to catch.</i>`, fix: `A comma alone cannot join two independent clauses: <i>She left early; she had a train to catch.</i> or <i>She left early because she had a train to catch.</i>` },
    { wrong: `<i>The committee, which met on Tuesday and approved the budget.</i>`, fix: `The subject has only a relative clause, no main verb: <i>The committee, which met on Tuesday, approved the budget.</i>` },
    { wrong: `Fixing a fused sentence with a comma: <i>It was late, we went home.</i>`, fix: `That trades a fused sentence for a splice. Use a period, a semicolon or <i>, so</i>: <i>It was late, so we went home.</i>` }
  ],
  practice: [
    { q: `Fragment or sentence? <i>Waiting for the ghost to appear.</i>`, a: `A fragment: <i>waiting</i> is a participle, not a finite verb, and there is no subject. Fix: <i>Scrooge sat up, waiting for the ghost to appear.</i>` },
    { q: `Name the error and fix it two ways: <i>The bell rang the ghost appeared.</i>`, a: `A fused sentence (two independent clauses, nothing between them). <i>The bell rang. The ghost appeared.</i> or <i>When the bell rang, the ghost appeared.</i>` },
    { q: `Is this a comma splice? <i>Although the room was cold, Scrooge would not buy more coal.</i>`, a: `No. <i>Although the room was cold</i> is a dependent clause, so the comma follows an introductory clause, which is correct. Only one clause is independent.` },
    { q: `Fix the splice with a conjunctive adverb and explain the punctuation: <i>Bob Cratchit asked for Christmas off, Scrooge grumbled about it.</i>`, a: `<i>Bob Cratchit asked for Christmas off; consequently, Scrooge grumbled about it.</i> The semicolon joins the two independent clauses; the comma after <i>consequently</i> sets off the adverb, which is not a conjunction and could move (<i>Scrooge, consequently, grumbled</i>). <i>Nevertheless</i> would change the meaning, so pick the adverb that states the real relation.` }
  ],
  origin: `<p>Writers have used deliberate fragments and spliced clauses for emphasis since antiquity: the Roman biographer Suetonius records that Julius Caesar displayed the words <i>Veni, vidi, vici</i> (“I came, I saw, I conquered”) in his Pontic triumph, three clauses joined by commas alone. The labels <i>fragment</i>, <i>run-on</i> and <i>comma splice</i> belong to the American composition handbooks that taught edited written English in colleges in the twentieth century, when the sentence, marked by a capital and a period, became the basic unit of correctness in student writing.</p>`,
  stories: [
    { title: "London. Implacable November Weather.", book: "Bleak House", author: "Charles Dickens", year: 1853, kind: "Novel", where: "Chapter I, “In Chancery” (opening)", scene: "bleak-fog", focus: ["frag", "cn"],
      tags: { frag: { name: "Fragment", c: "c2", test: "Punctuated as a sentence, but no finite verb." }, cn: { name: "Connector", c: "c5" } },
      tokens: `London_frag ._frag Michaelmas_frag term_frag lately_frag over_frag ,_frag and_cn the_frag Lord_frag Chancellor_frag sitting_frag in_frag Lincoln’s_frag Inn_frag Hall_frag ._frag Implacable_frag November_frag weather_frag ._frag`,
      notes: { london: "A one-word noun fragment: it sets the place like a stage direction.", over: "Lately over is a past-participle-like adverbial: the term is over, but there is no finite is or was.", and: "And joins two absolute phrases (term lately over / the Lord Chancellor sitting), not two clauses.", sitting: "A present participle, not a finite verb: the Chancellor is sitting, but the sentence never says is.", weather: "Implacable November weather: a noun phrase alone, the third fragment in a row." },
      note: `Dickens opens with three fragments, seventeen words without a single finite verb: a one-word noun (<i>London.</i>), two absolute phrases joined by <i>and</i> (<i>Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln’s Inn Hall.</i>), and a noun phrase (<i>Implacable November weather.</i>). Each could become a sentence by adding <i>is</i> or <i>was</i>; leaving the verbs out makes the scene static and timeless, like notes for a stage set. These are deliberate fragments, and they work because the reader can tell they are deliberate.` },
    { title: "Down, Down, Down", book: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", year: 1865, kind: "Novel", where: "Chapter I, “Down the Rabbit-Hole”", scene: "rabbit-hole", focus: ["frag", "ic"],
      tags: { frag: { name: "Fragment", c: "c2", test: "No subject and no verb: only an adverb, three times." }, ic: { name: "Independent clause", c: "c1" } },
      tokens: `Down_frag ,_frag down_frag ,_frag down_frag ._frag Would_ic the_ic fall_ic never_ic* come_ic to_ic an_ic end_ic ?_ic`,
      notes: { down: "An adverb with no subject or verb: the repetition imitates the long fall.", would: "The auxiliary of the finite verb would come, placed before the subject to make a question.", fall: "Subject of the independent clause: the fall would never come to an end." },
      note: `A three-word fragment, one adverb repeated, followed by a complete interrogative sentence with subject <i>the fall</i> and finite verb <i>would … come</i>. The fragment carries the motion; the full sentence carries Alice’s thought. Notice that the commas inside <i>Down, down, down</i> separate repeated words, not clauses, so there is no splice.` },
    { title: "Bah! Humbug!", book: "A Christmas Carol", author: "Charles Dickens", year: 1843, kind: "Novella", where: "Stave One", scene: "counting-house", focus: ["frag", "ic"],
      tags: { frag: { name: "Fragment (interjection)", c: "c2" }, ic: { name: "Clause (speech tag)", c: "c1" } },
      tokens: `“ Bah_frag ! ” said_ic Scrooge_ic , “ Humbug_frag ! ”`,
      notes: { bah: "An interjection: a complete utterance in speech with no subject or verb of its own.", said: "The speech tag said Scrooge (verb before subject) is the only clause in the sentence.", humbug: "A noun used as an exclamation: nonsense. Like Bah, it stands alone as an utterance." },
      note: `Two one-word exclamations, <i>Bah!</i> and <i>Humbug!</i>, wrapped around a speech tag. Neither has a subject or verb, but quoted speech follows the grammar of talk, where such minor sentences are normal; the tag <i>said Scrooge</i> supplies the only clause. Dialogue is the one place in edited prose where fragments are routine, because they record how people actually speak.` }
  ]
};
