window.ARITH = window.ARITH || {};

ARITH["eng-sentence-types"] = {
  title: "Simple, Compound & Complex Sentences",
  short: "Name a sentence by counting its clauses, punctuate the joins, and tell statements, questions, commands and exclamations apart",
  grade: "College ENGL 1xx · grammar",
  hours: 4,
  voice: "plain",
  eyebrow: "Grammar & Usage · sentence types",
  hero: `<span class="c1">Huck slept</span><span class="c3">, and</span> <span class="c1">Jim kept watch</span><span class="c5">.</span>`,
  lede: `A sentence’s structural type comes from counting two things: its independent clauses and its dependent clauses. Its functional type comes from what it does: state, ask, command or exclaim.`,
  plain: `<p>Count the clauses. One independent clause and nothing else is a <b>simple</b> sentence: <i>Huck slept.</i> Two or more independent clauses, joined by a word like <i>and</i>, <i>but</i> or <i>so</i> or by a semicolon, make a <b>compound</b> sentence: <i>Huck slept, and Jim kept watch.</i> One independent clause with at least one dependent clause is <b>complex</b>: <i>Huck slept while Jim kept watch.</i> Both at once (two independent clauses and a dependent one) is <b>compound-complex</b>: <i>When night fell, Huck slept, and Jim kept watch.</i></p>
<p>Length has nothing to do with it. <i>The old raft drifted past the sleeping town and slid slowly into the thick gray fog</i> is long but simple: one subject, <i>raft</i>, with two verbs. And <i>I knew he lied</i> is short but complex, because <i>he lied</i> is a clause inside it.</p>
<p>Sentences also do different things. A <b>declarative</b> sentence makes a statement and ends with a period. An <b>interrogative</b> asks a question (<i>Did you see the canoe?</i>). An <b>imperative</b> gives a command or request, with an understood <i>you</i> (<i>Tie the raft up.</i>). An <b>exclamatory</b> sentence exclaims (<i>What a long night it was!</i>). Every sentence has one structural type and one functional type.</p>`,
  formal: `<p>Traditional grammar classifies sentences by <b>structure</b> according to the number of independent (main) and dependent (subordinate) clauses they contain. A <b>simple sentence</b> has one independent clause and no dependent clause; its subject, verb or object may be compound (<i>Huck and Jim drifted and fished</i>) without changing the count. A <b>compound sentence</b> has two or more independent clauses and no dependent clause, joined by a coordinating conjunction (<i>and, but, or, nor, for, so, yet</i>), by a semicolon (with or without a conjunctive adverb such as <i>however, therefore, meanwhile</i>) or by a colon. A <b>complex sentence</b> has one independent clause and at least one dependent clause; a <b>compound-complex sentence</b> has at least two independent clauses and at least one dependent clause. Dependent clauses embedded inside other dependent clauses all count.</p>
<div class="display"><span class="c1">simple</span>: 1 IC, 0 DC<br><span class="c1">compound</span>: 2+ IC, 0 DC<br><span class="c2">complex</span>: 1 IC + 1 or more DC<br><span class="c2">compound-complex</span>: 2+ IC + 1 or more DC<br>IC<span class="c3">, and</span> IC. · IC<span class="c3">;</span> IC.<br>IC<span class="c3">; however,</span> IC.<br><span class="c4">When</span> DC, IC. · IC <span class="c4">when</span> DC.<br><span class="c5">declarative .</span> · <span class="c5">interrogative ?</span><br><span class="c5">imperative . or !</span> · <span class="c5">exclamatory !</span></div>
<p>Joining two independent clauses with a comma alone produces a <b>comma splice</b>, and with nothing at all a <b>fused (run-on) sentence</b>; handbooks accept a comma alone only between very short, parallel clauses, mostly in literary prose. A comma before the conjunction in a compound sentence may be omitted when the clauses are short (<i>Huck slept and Jim watched</i>), but there is normally no comma between the two verbs of a compound predicate. By <b>function</b>, a <b>declarative</b> sentence has subject–verb order and makes a statement; an <b>interrogative</b> sentence asks, by subject–auxiliary inversion (<i>Did you see …?</i>), a wh-word (<i>Where did it go?</i>) or rising intonation, and ends with a question mark; an <b>imperative</b> uses the base form of the verb with an understood subject <i>you</i>; an <b>exclamatory</b> sentence begins with <i>what</i> or <i>how</i> and keeps statement order (<i>What a night it was!</i>, <i>How cold it was!</i>). An indirect question inside a statement (<i>I wonder where it went</i>) is declarative and ends with a period.</p>
<p>Form and use can diverge: <i>Could you close the door?</i> is interrogative in form but a request in use, and a declarative can be spoken as a question (<i>You saw it?</i>). Huddleston and Pullum’s <i>Cambridge Grammar of the English Language</i> (2002) keeps the grammatical forms (declarative, closed and open interrogative, exclamative, imperative clause types) separate from the speech acts they perform. It also does not use the four structural labels; it describes sentences as coordinations of clauses and clauses containing subordinate clauses, and because it counts non-finite clauses, a traditionally simple sentence such as <i>I went to the woods to live deliberately</i> contains two clauses in its analysis.</p>`,
  legend: [
    { c: "c1", sym: `[IC]`, name: "Independent clause", desc: "Subject + finite verb, no marker. Count these first: one makes a simple or complex sentence, two or more a compound one." },
    { c: "c2", sym: `[DC]`, name: "Dependent clause", desc: "A clause opened by a subordinator or relative word (or a zero marker). Any number makes the sentence complex." },
    { c: "c3", sym: `and`, name: "Coordinating conjunction", desc: "<i>And, but, or, nor, for, so, yet</i>, or a semicolon: the joiners that link independent clauses as equals." },
    { c: "c4", sym: `when`, name: "Subordinator", desc: "The marker that makes a clause dependent: <i>when, because, although, if, that, who, which</i>." },
    { c: "c5", sym: `. ? !`, name: "End punctuation / function", desc: "Period for statements and most commands, question mark for questions, exclamation point for exclamations." }
  ],
  steps: { title: "How to classify a sentence", items: [
    `Find every finite verb and bracket its clause, as in the Clauses topic. Treat two verbs that share one subject (<i>drifted … and slid</i>) as one clause.`,
    `Mark each clause <span class="c1">independent</span> or <span class="c2">dependent</span>: a <span class="c4">subordinator</span> or relative word at its start (or a zero <i>that</i>/<i>whom</i>) makes it dependent.`,
    `Count the independent clauses. Two or more mean the sentence is compound (or compound-complex); check what joins them: a <span class="c3">coordinating conjunction</span>, a semicolon or a colon.`,
    `Count the dependent clauses, including any nested inside others. One or more makes the sentence complex (or compound-complex).`,
    `Name the structure: 1 + 0 simple, 2+ + 0 compound, 1 + 1+ complex, 2+ + 1+ compound-complex.`,
    `Name the function from word order and the <span class="c5">end mark</span>: statement order and a period (declarative), inversion or a wh-word and a question mark (interrogative), base-form verb with no subject (imperative), <i>What a …</i> / <i>How …</i> with an exclamation point (exclamatory).`
  ] },
  example: {
    prompt: `Classify by structure and function, and check the punctuation: <i>Although the storm had passed, the river was still high, so we waited another day.</i>`,
    lines: [
      { math: `had passed · was · waited`, note: "Three finite verbs, so three clauses." },
      { math: `<span class="c2">[<span class="c4">Although</span> the storm <br>had passed]</span>`, note: "Opened by the subordinator although: a dependent (adverb) clause of concession." },
      { math: `<span class="c1">[the river was still high]</span>`, note: "No marker: an independent clause." },
      { math: `<span class="c3">, so</span> <span class="c1">[we waited <br>another day]</span>`, note: "So is a coordinating conjunction here (it means therefore), joining a second independent clause with a comma before it." },
      { math: `2 IC + 1 DC <br>→ compound-complex`, note: "Two or more independent clauses and at least one dependent clause." },
      { math: `statement order, <span class="c5">.</span> <br>→ declarative`, note: "Subject before verb in each main clause, ending in a period." },
      { math: `The river was still high, <br>so we waited another day.`, note: "Check: remove the dependent clause and the sentence becomes compound; remove the second main clause instead and it becomes complex. The type changes exactly as the counts do." }
    ],
    answer: `<span class="c2">[<span class="c4">Although</span> the storm had passed]</span>, <span class="c1">[the river was still high]</span><span class="c3">, so</span> <span class="c1">[we waited another day]</span><span class="c5">.</span> Compound-complex, declarative. Commas after the introductory clause and before <i>so</i> are both required.`
  },
  why: `<p>Counting clauses is how you punctuate a sentence correctly. A compound sentence needs a joiner strong enough for two independent clauses (a comma plus <i>and</i>, a semicolon, a period); a complex sentence needs a comma only after an introductory dependent clause. Knowing which type you have written is how you avoid comma splices, fused sentences and fragments, the errors instructors mark most often.</p>
<p>Sentence types are also a writer’s tools for emphasis and rhythm. A short simple sentence after several long ones lands hard. Compound sentences treat ideas as equals; complex sentences rank them, putting the main point in the independent clause and the background in a dependent one. Varying structure keeps prose from sounding choppy (all simple) or tangled (all compound-complex), and noticing how a writer uses types is a basic move of literary close reading.</p>`,
  careers: [
    { role: "Writing center tutor", use: "Diagnoses comma splices and choppy prose by having students count independent and dependent clauses in their own sentences." },
    { role: "Speechwriter", use: "Alternates long compound-complex sentences with short simple ones to build and release tension in a speech." },
    { role: "Plain-language specialist", use: "Splits compound-complex sentences in government or medical documents into simpler ones so they meet readability guidelines." },
    { role: "Copy editor", use: "Corrects punctuation at clause joins: commas before coordinating conjunctions, semicolons before conjunctive adverbs, no comma in compound predicates." },
    { role: "English teacher", use: "Teaches sentence combining and variety by having students rewrite a paragraph of simple sentences as compound and complex ones." },
    { role: "Natural-language-processing engineer", use: "Uses sentence complexity measures (clauses per sentence, subordination ratio) in readability scoring and in grading writing automatically." }
  ],
  life: [
    "Rewriting a choppy email of short sentences into a few that show which point matters most.",
    "Punctuating 'I called, but nobody answered' versus 'I called and left a message.'",
    "Ending a reported question with a period: 'She asked whether we were ready.'",
    "Writing clear instructions as imperatives: 'Unplug the router, wait ten seconds, and plug it back in.'"
  ],
  fields: [
    { name: "Education", use: "Writing assessments and readability formulas use sentence length and clause counts to measure syntactic maturity." },
    { name: "Linguistics", use: "Coordination and subordination, and the clause types behind declaratives, interrogatives and imperatives, are core topics in syntax and pragmatics." },
    { name: "Rhetoric and public speaking", use: "Classical figures such as asyndeton (clauses without conjunctions) and periodic sentences are defined by how clauses are joined and ordered." }
  ],
  prereqWhy: {
    "eng-clauses": "Every structural type is defined by a count of independent and dependent clauses, so finding and classifying clauses comes first."
  },
  unlocksWhy: {
    "eng-fragments": "Fragments, comma splices and fused sentences are errors in separating or joining the clauses counted here; the fixes are the joins of compound and complex sentences.",
    "eng-parallelism": "Coordinated independent clauses in a compound sentence, and a series of dependent clauses, read best when they are parallel in form."
  },
  beyond: [
    { field: "Composition I", why: "Sentence variety, combining short sentences, and fixing comma splices and fused sentences are core first-year writing skills." },
    { field: "Advanced Composition & Rhetoric", why: "Periodic and cumulative sentences, coordination versus subordination and rhetorical schemes build on sentence structure." },
    { field: "Introduction to Literature", why: "Close reading of style notices sentence length and type, from Hemingway’s compound sentences to James’s long complex ones." },
    { field: "Introduction to English Linguistics", why: "Clause types and speech acts separate the grammatical form of a sentence from what it is used to do." }
  ],
  mistakes: [
    { wrong: `Calling a sentence complex because it is long, or simple because it is short.`, fix: `Type depends only on the clause count. <i>The old raft drifted past the sleeping town and slid into the fog</i> is simple (one subject, one compound predicate); <i>I knew he lied</i> is complex (a noun clause inside).` },
    { wrong: `<i>She opened the door<b>,</b> and looked outside.</i>`, fix: `One subject with two verbs is a compound predicate in a simple sentence, so no comma: <i>She opened the door and looked outside.</i> Use a comma when a second subject makes a second clause: <i>She opened the door, and she looked outside.</i>` },
    { wrong: `<i>The river rose<b>,</b> we moved the raft to higher ground.</i>`, fix: `Two independent clauses joined by a comma alone: a comma splice. Use a period, a semicolon, a comma plus a coordinating conjunction (<i>The river rose, so we moved …</i>) or subordinate one clause (<i>When the river rose, we moved …</i>).` },
    { wrong: `<i>The river rose<b>, however</b> we stayed.</i>`, fix: `<i>However</i> is a conjunctive adverb, not a coordinating conjunction, so it cannot join clauses with a comma. Write <i>The river rose; however, we stayed.</i>` },
    { wrong: `<i>I wonder whether he will come<b>?</b></i>`, fix: `The question is reported inside a statement (a noun clause), so the sentence is declarative: <i>I wonder whether he will come.</i> Compare the direct question <i>Will he come?</i>` }
  ],
  practice: [
    { q: `Classify: <i>The old raft drifted past the sleeping town and slid into the fog.</i>`, a: `Simple, declarative. There is one subject (<i>raft</i>) with two verbs (<i>drifted</i>, <i>slid</i>): a compound predicate, so only one clause. Length does not matter.` },
    { q: `Classify and explain the comma: <i>I wanted to leave, but the gate was locked.</i>`, a: `Compound, declarative: two independent clauses (<i>I wanted to leave</i>; <i>the gate was locked</i>) joined by the coordinating conjunction <i>but</i>, with a comma before it. <i>To leave</i> is an infinitive, not a clause.` },
    { q: `Classify by structure and function: <i>Tell me when the boat arrives.</i>`, a: `Complex, imperative. The main clause <i>(you) tell me</i> has an understood subject; <i>when the boat arrives</i> is a dependent clause (here a noun clause, the thing to tell). It ends with a period because it is a command, not a question.` },
    { q: `Classify: <i>The students who had finished left, but those who had not stayed until the bell rang.</i>`, a: `Compound-complex, declarative. Independent clauses: <i>The students … left</i> and <i>those … stayed</i>, joined by <i>, but</i>. Dependent clauses: <i>who had finished</i>, <i>who had not</i> (elliptical: <i>who had not finished</i>) and <i>until the bell rang</i>: two independent, three dependent.` }
  ],
  stories: [
    { title: "It Was the Best of Times", book: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, kind: "Novel", where: "Book the First, Chapter I (first sentence)", scene: "two-cities", focus: ["ic", "dc", "sub", "end"],
      tags: { ic: { name: "Independent clause", c: "c1", test: "Fifteen of them, most joined by commas alone." }, dc: { name: "Dependent clause", c: "c2" }, sub: { name: "Subordinator", c: "c4" }, end: { name: "End punctuation", c: "c5" } },
      tokens: `It_ic was_ic the_ic best_ic of_ic times_ic , it_ic was_ic the_ic worst_ic of_ic times_ic , it_ic was_ic the_ic age_ic of_ic wisdom_ic , it_ic was_ic the_ic age_ic of_ic foolishness_ic , it_ic was_ic the_ic epoch_ic of_ic belief_ic , it_ic was_ic the_ic epoch_ic of_ic incredulity_ic , it_ic was_ic the_ic season_ic of_ic Light_ic , it_ic was_ic the_ic season_ic of_ic Darkness_ic , it_ic was_ic the_ic spring_ic of_ic hope_ic , it_ic was_ic the_ic winter_ic of_ic despair_ic , we_ic had_ic everything_ic before_ic us_ic , we_ic had_ic nothing_ic before_ic us_ic , we_ic were_ic all_ic going_ic direct_ic to_ic Heaven_ic , we_ic were_ic all_ic going_ic direct_ic the_ic other_ic way_ic — in_ic short_ic , the_ic period_ic was_ic so_ic far_ic like_ic the_ic present_ic period_ic , that_sub some_dc of_dc its_dc noisiest_dc authorities_dc insisted_dc on_dc its_dc being_dc received_dc , for_dc good_dc or_dc for_dc evil_dc , in_dc the_dc superlative_dc degree_dc of_dc comparison_dc only_dc ._end`,
      notes: { it: "Subject of each of the first ten independent clauses: it was the … of ….", we: "Subject of the last four clauses of the series, which turn from the age to the people in it.", short: "In short opens the summing-up: the fifteenth independent clause, after the dash.", period: "Subject of the last independent clause: the period was so far like the present period.", that: "Marker of the only dependent clause, a result clause completing so far like: so like … that ….", insisted: "Finite verb of the dependent clause; some (of its noisiest authorities) is its subject.", being: "A gerund (its being received), not a finite verb, so no further clause.", ".": "A period: the whole sentence is declarative." },
      note: `Dickens’s opening is one sentence of sixteen clauses: fifteen independent clauses and one dependent clause (<i>that some of its noisiest authorities insisted …</i>), so it is compound-complex. The first fourteen are joined by commas alone, in pairs of opposites. By modern handbook rules those are comma splices, but the device, called asyndeton, is a deliberate literary rhythm, possible because the clauses are short and strictly parallel. A dash then breaks the series, and <i>in short</i> sums it up in a fifteenth main clause that carries the dependent clause.` },
    { title: "It Got Tiresome and Lonesome", book: "Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884, kind: "Novel", where: "Chapter I", scene: "raft-river", focus: ["ic", "cc", "end"],
      tags: { ic: { name: "Independent clause", c: "c1" }, cc: { name: "Coordinating conjunction", c: "c3", test: "Joins two independent clauses, after a comma." }, end: { name: "End punctuation", c: "c5" } },
      tokens: `Miss_ic Watson_ic she_ic kept_ic pecking_ic at_ic me_ic , and_cc it_ic got_ic tiresome_ic and_ic#and2 lonesome_ic ._end`,
      notes: { she: "Miss Watson she is a doubled subject, a feature of Huck’s dialect; standard English would drop she. It is still one subject.", kept: "Finite verb of the first clause. Pecking is a participle completing kept, not a second clause.", and: "A coordinating conjunction joining two independent clauses, with a comma before it: the pattern of a compound sentence.", it: "Subject of the second independent clause; got is its finite verb.", and2: "This and joins two adjectives, tiresome and lonesome, not two clauses.", ".": "A period: a declarative sentence." },
      note: `A textbook compound sentence in a dialect voice: two independent clauses, <i>Miss Watson she kept pecking at me</i> and <i>it got tiresome and lonesome</i>, joined by a comma and the coordinating conjunction <i>and</i>. The second <i>and</i> joins only two adjectives, which shows why you count subjects and finite verbs rather than <i>and</i>s. The doubled subject <i>Miss Watson she</i> is nonstandard but does not change the count.` },
    { title: "It Is Altogether Fitting and Proper", book: "Gettysburg Address", author: "Abraham Lincoln", year: 1863, kind: "Speech", where: "Fifth sentence", scene: "battlefield", focus: ["ic", "dc", "sub", "end"],
      tags: { ic: { name: "Independent clause", c: "c1" }, dc: { name: "Dependent clause", c: "c2", test: "A noun clause: the delayed subject." }, sub: { name: "Subordinator", c: "c4" }, end: { name: "End punctuation", c: "c5" } },
      tokens: `It_ic is_ic altogether_ic fitting_ic and_ic proper_ic that_sub we_dc should_dc do_dc this_dc ._end`,
      notes: { it: "A placeholder subject: what is fitting and proper is that we should do this. The real subject clause has been moved to the end.", that: "The subordinator that opens the noun clause.", we: "Subject of the dependent clause; should do is its finite verb.", ".": "A period: a declarative sentence." },
      note: `A short complex sentence: one independent clause, <i>It is altogether fitting and proper</i>, and one dependent noun clause, <i>that we should do this</i>, which is the real subject (<i>That we should do this is altogether fitting and proper</i>). Eleven words, two clauses: short is not the same as simple. Lincoln uses it as a plain declarative pause between the long sentences around it.` }
  ]
};
