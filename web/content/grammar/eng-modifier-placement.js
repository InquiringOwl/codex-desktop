window.ARITH = window.ARITH || {};
ARITH["eng-modifier-placement"] = {
  title: "Misplaced & Dangling Modifiers",
  short: "Putting modifiers next to what they modify: limiting words like only, misplaced and squinting modifiers, and dangling phrases",
  grade: "College ENGL 1xx · grammar",
  hours: 4,
  voice: "plain",
  eyebrow: "Grammar & Usage · modifier placement",
  hero: `<span class="c1">Walking home</span>, <span class="c3">the rain</span> began.`,
  lede: `Readers attach a modifier to the nearest word it could sensibly describe. Put it next to the wrong word and it is <b>misplaced</b>; give an opening phrase no doer in the main clause and it <b>dangles</b>.`,
  plain: `<p>English has very few word endings to show what goes with what, so it relies on position. A describing word or phrase is read as belonging to whatever it sits beside. <i>She served sandwiches to the children on paper plates</i> puts the children on the plates, because <i>children</i> is the nearest noun. Move the phrase and the problem goes away: <i>She served sandwiches on paper plates to the children.</i></p>
<p>Small words like <i>only, just, almost, even</i> and <i>nearly</i> limit the word right after them, so moving them changes the meaning. <i>Only Ana paid ten dollars</i> (no one else paid), <i>Ana paid only ten dollars</i> (no more than that), <i>Ana paid her only brother</i> (she has one brother).</p>
<p>A modifier that sits between two things it could describe <b>squints</b>: in <i>Students who study often pass</i>, do they study often or pass often?</p>
<p>An opening phrase without its own subject, like <i>Walking home</i> or <i>To get a good seat</i>, borrows the subject of the sentence that follows as its doer. If that subject can’t be the doer, the phrase <b>dangles</b>: <i>Walking home, the rain began</i> says the rain was walking. Fix it by making the doer the subject (<i>Walking home, I felt the rain begin</i>) or by giving the phrase its own subject (<i>While I was walking home, the rain began</i>).</p>`,
  formal: `<p>A <b>modifier</b> is a word, phrase or clause that limits or describes another element. Because English marks most grammatical relations by word order, a modifier is interpreted as attaching to the nearest element it can grammatically and sensibly modify. A <b>misplaced modifier</b> is one positioned so that it attaches, or seems to attach, to the wrong element; it may be a word, a phrase or a clause (<i>I bought a bike from a neighbor <u>that has ten speeds</u></i>). The fix is to move the modifier next to its intended head.</p>
<p><b>Limiting modifiers</b> (<i>only, just, almost, even, nearly, hardly, merely, scarcely, exactly, simply</i>) restrict the meaning of the element that follows them, so their position decides the meaning. Edited prose places them immediately before the word or phrase they limit. In speech, <i>only</i> usually sits before the verb and stress shows its target (<i>She only paid <u>ten</u> dollars</i>); usage guides recognise this as idiomatic, but in writing, where there is no stress, handbooks ask for the explicit position. A <b>squinting modifier</b> stands between two elements and could modify either; move it, or rewrite, so only one reading remains.</p>
<div class="display">Only Ana paid him. (no one else)<br>Ana paid only him. (no one else)<br>Ana paid her only brother. (one brother)<br>Ana paid him only ten dollars. (no more)<br>Students who study often pass. (squints)</div>
<p>A <b>dangling modifier</b> is a phrase or elliptical clause that has no word in the sentence it can logically modify. The typical case is an introductory <b>participial phrase</b> (<i>Having finished the report, …</i>), <b>infinitive phrase</b> (<i>To get a good seat, …</i>), <b>gerund phrase</b> after a preposition (<i>After reading the reviews, …</i>), or <b>elliptical clause</b> (<i>While driving to work, …</i>; <i>When only six, …</i>). Such a phrase has no subject of its own, so its understood subject is taken from the subject of the main clause; when that subject cannot perform the action, the modifier dangles. Danglers are most common before a passive main clause, where the real doer has been removed (<i>Having finished the report, <u>the file was saved</u></i>). There are three fixes: <b>(1)</b> make the doer the subject of the main clause, often by changing it from passive to active (<i>…, I saved the file</i>); <b>(2)</b> turn the phrase into a full clause with its own subject (<i>After I had finished the report, …</i>); <b>(3)</b> rewrite the sentence. An <b>absolute phrase</b> (<i>The rain having stopped, we walked home</i>) names its own subject and so cannot dangle.</p>
<p>Not every unattached phrase is an error. Phrases whose understood subject is the writer or people in general have become fixed sentence modifiers and are standard: <i>Generally speaking, …</i>, <i>Considering the cost, …</i>, <i>Judging by the reviews, …</i>, <i>To be honest, …</i>; several such participles (<i>given, considering, regarding, including</i>) now work as prepositions. Huddleston and Pullum’s <i>Cambridge Grammar of the English Language</i> treats dangling modifiers as non-finite and verbless clauses whose understood subject is not the main-clause subject, and it describes the constraint as one of style and clarity rather than strict grammar: such a sentence is a fault when the reader is led to the wrong subject, especially a comic or confusing one.</p>`,
  legend: [
    { c: "c1", sym: `M`, name: "Modifier", desc: "The word, phrase or clause doing the describing: <i>on paper plates</i>, <i>Walking home</i>." },
    { c: "c2", sym: `→`, name: "Intended target", desc: "The word the writer meant the modifier to describe, or the doer a phrase should attach to." },
    { c: "c3", sym: `✗`, name: "Wrong attachment", desc: "The word the modifier actually attaches to by position: the nearest noun, or the subject of the main clause." },
    { c: "c4", sym: `only`, name: "Limiting word", desc: "<i>Only, just, almost, even, nearly, hardly, merely</i>: they limit the element right after them." },
    { c: "c5", sym: `✓`, name: "Fixed sentence", desc: "The revision: modifier moved beside its target, doer made the subject, or phrase turned into a clause." }
  ],
  steps: { title: "How to check and fix modifier placement", items: [
    `Find each <span class="c1">modifier</span> phrase or clause and ask what it is meant to describe: its <span class="c2">intended target</span>.`,
    `Check what it actually sits beside. If the nearest possible word is a different one, it is <span class="c3">misplaced</span>: move it next to its target.`,
    `For each <span class="c4">limiting word</span> (<i>only, just, almost, even, nearly</i>), say what it limits. Put it immediately before that word or phrase.`,
    `If a modifier sits between two words it could describe, it <b>squints</b>: move it to one side, or rewrite.`,
    `For an introductory phrase with no subject of its own, put the main clause’s subject in front of the phrase’s verb (<i>the rain was walking home</i>). If the result is wrong or absurd, the phrase dangles.`,
    `Fix a dangler by naming the doer as the subject of the main clause (often by making a passive active), or by turning the phrase into a clause with its own subject and finite verb.`,
    `Reread the <span class="c5">fixed sentence</span> to make sure it says only what you mean.`
  ] },
  example: {
    prompt: `Diagnose and fix: <i>Having finished the report, the file was saved to the shared drive.</i>`,
    lines: [
      { math: `<span class="c1">Having finished the report</span>, …`, note: "An introductory perfect participial phrase. It has no subject of its own, so it borrows the main clause’s subject as its doer." },
      { math: `…, <span class="c3">the file</span> was saved …`, note: "The subject of the main clause is the file, and the clause is passive: the person who saved it has disappeared." },
      { math: `Test: the file had finished <br>the report ✗`, note: "Put the main subject in front of the phrase’s verb. Files do not finish reports, so the phrase dangles." },
      { math: `Fix 1: …, <span class="c2">I</span> <span class="c5">saved the file</span> <br><span class="c5">to the shared drive</span>.`, note: "Make the doer the subject: the passive main clause becomes active, and I now follows the phrase directly." },
      { math: `Fix 2: <span class="c5">After I had finished</span> <br><span class="c5">the report</span>, the file …`, note: "Or give the phrase its own subject and finite verb, turning it into an adverb clause. The main clause can stay passive." },
      { math: `Check: I had finished the <br>report ✓`, note: "In fix 1, the main subject can now perform the participle’s action, so the phrase attaches correctly." }
    ],
    answer: `<span class="c5">Having finished the report, I saved the file to the shared drive.</span> (or <span class="c5">After I had finished the report, the file was saved to the shared drive.</span>) The original dangles because its main clause is passive and its subject, <i>the file</i>, cannot be the one who finished the report.`
  },
  why: `<p>Misplaced and dangling modifiers are among the errors readers notice most, because they often say something absurd (<i>Rotting in the fridge, I found the leftovers</i>). Even when the intended meaning is clear, the reader has to stop, reread and repair the sentence, and a careful reader may start to doubt the writer’s care elsewhere. In legal, technical and medical writing, a misplaced <i>only</i> or a squinting adverb can change what a contract requires or what a dose instruction means.</p>
<p>Placement also connects several earlier topics. A dangler is usually a verbal phrase whose understood subject is wrong, and it is most often created by a passive main clause that has removed the doer; the cure is often to switch to the active voice. Knowing how verbals, clauses and voice work lets you fix the sentence instead of just sensing that it sounds odd.</p>`,
  careers: [
    { role: "Contract attorney", use: "Places limiting words and qualifying phrases so a clause binds exactly the parties and acts intended; courts have decided cases on where a modifier attaches." },
    { role: "Copy editor", use: "Catches danglers and misplaced only in news copy and books before publication, where they would draw readers’ ridicule." },
    { role: "Pharmacist or medical writer", use: "Writes dosage instructions with no squinting modifiers (take two tablets daily with food, not take two tablets with food daily if needed)." },
    { role: "Technical writer", use: "Rewrites procedure steps such as After installing the update, the computer must restart so that the user, not the computer, does the installing." },
    { role: "Writing center tutor", use: "Teaches students the subject test for danglers and the active-voice fix in one-on-one draft conferences." },
    { role: "Speechwriter", use: "Uses deliberate placement of only and even for emphasis that survives without vocal stress on the page." }
  ],
  life: [
    "Reading a sign like “For sale: piano by a lady with carved legs” and seeing why it is funny.",
    "Telling a friend “I only have five dollars” and meaning the amount, which speech makes clear by stress.",
    "Writing an email that says “To qualify for the discount, the form must be submitted by Friday” and changing it to “you must submit the form by Friday.”",
    "Noticing in a review that “Covered in sauce, the waiter brought the ribs” puts the sauce on the waiter."
  ],
  fields: [
    { name: "Law", use: "Statutory interpretation uses canons such as the last-antecedent rule to decide which word a qualifying phrase modifies." },
    { name: "Psycholinguistics", use: "Garden-path and attachment studies measure how readers decide where a modifier belongs and how long it takes to recover from a wrong attachment." }
  ],
  prereqWhy: {
    "eng-verbals": "Most danglers are verbal phrases: participial, infinitive and gerund phrases have no subject of their own and borrow the main clause’s subject.",
    "eng-subordinate": "Turning a dangling phrase into an adverb clause (<i>while I was driving</i>) is a standard fix, and misplaced relative clauses must sit beside the noun they modify."
  },
  unlocksWhy: {
    "eng-style": "Style revision moves modifiers for emphasis and clarity, and fixes danglers by naming agents, the same move that cuts vague passives."
  },
  beyond: [
    { field: "Composition I", why: "Editing drafts for misplaced and dangling modifiers is a core part of sentence-level revision." },
    { field: "Advanced Composition & Rhetoric", why: "Placement of modifiers and emphasis words controls focus and rhythm in persuasive and professional prose." },
    { field: "Introduction to English Linguistics", why: "Attachment ambiguity, scope of focus words like only, and the control of non-finite clauses." },
    { field: "Introduction to Creative Writing", why: "Writers use deliberately delayed and fronted modifiers for suspense, and must avoid unintended comic danglers." }
  ],
  mistakes: [
    { wrong: `"<i>Walking into the room, the smell of coffee was wonderful.</i>"`, fix: `The smell was not walking. Name the doer: <i>Walking into the room, <u>I</u> noticed the wonderful smell of coffee</i>, or <i><u>When I walked</u> into the room, the smell of coffee was wonderful.</i>` },
    { wrong: `"Putting a comma after the phrase fixes it: <i>Walking home, the rain began.</i>"`, fix: `The comma is already there; the problem is the missing doer. Punctuation cannot attach a modifier. Change the subject or turn the phrase into a clause.` },
    { wrong: `"<i>She almost drove her kids to school every day.</i>" (meaning most days)`, fix: `<i>Almost</i> limits the next word, so this says she nearly drove them but didn’t. Move it: <i>She drove her kids to school <u>almost every day</u>.</i>` },
    { wrong: `"<i>The patient was referred to a specialist with a rash.</i>"`, fix: `The phrase sits beside <i>specialist</i>. Move it to its target: <i>The patient <u>with a rash</u> was referred to a specialist.</i>` },
    { wrong: `"Every opening -ing phrase is a dangler: <i>Generally speaking, prices rose</i> is wrong."`, fix: `Fixed sentence modifiers whose doer is the writer or people in general (<i>generally speaking, considering, judging by, to be honest</i>) are standard English. The rule targets phrases that point to a wrong, specific subject.` }
  ],
  practice: [
    { q: `Fix the misplaced modifier: <i>I saw a deer driving to work this morning.</i>`,
      a: `As written, <i>driving to work</i> sits beside <i>deer</i> and seems to describe it. Move it or make it a clause: <i><u>Driving to work this morning</u>, I saw a deer</i> or <i>I saw a deer <u>while I was driving</u> to work this morning.</i>` },
    { q: `Explain the difference in meaning: (a) <i>Just Leo ate the cake.</i> (b) <i>Leo just ate the cake.</i> (c) <i>Leo ate just the cake.</i>`,
      a: `(a) Leo and no one else ate it. (b) Ambiguous in writing: Leo ate it a moment ago (<i>just</i> = recently), or ate it and did nothing more to it. (c) He ate the cake and nothing else. The limiting word affects the element right after it.` },
    { q: `Identify the problem and fix it two ways: <i>To apply for the grant, a proposal must be submitted by June 1.</i>`,
      a: `The infinitive phrase <i>to apply for the grant</i> dangles: the subject of the main clause is <i>a proposal</i>, which does not apply for anything, and the passive hides the applicant. (1) Doer as subject: <i>To apply for the grant, <u>you must submit</u> a proposal by June 1.</i> (2) Phrase as clause: <i><u>If you want to apply</u> for the grant, a proposal must be submitted by June 1.</i>` },
    { q: `Which of these dangle? (a) <i>The meeting having ended, everyone left.</i> (b) <i>Considering the weather, the turnout was good.</i> (c) <i>After eating dinner, the dishes were washed.</i> (d) <i>Tired after the climb, the summit hut looked inviting.</i>`,
      a: `(a) Not dangling: an absolute phrase with its own subject, <i>the meeting</i>. (b) Acceptable: <i>considering</i> works as a preposition with the writer as understood subject. (c) Dangling: the dishes did not eat dinner; write <i>After eating dinner, <u>we washed the dishes</u></i>. (d) Dangling: the hut was not tired; write <i>Tired after the climb, <u>we</u> found the summit hut inviting</i>.` }
  ],
  stories: [
    { title: "Squire Trelawney, Dr. Livesey…", book: "Treasure Island", author: "Robert Louis Stevenson", year: 1883, kind: "Novel", where: "Part One, Chapter I, opening sentence", scene: "admiral-benbow", focus: ["ab", "pt", "tg", "lim"],
      tags: { ab: { name: "Absolute phrase", c: "c1", test: "A noun phrase with a participle: it names its own subject and modifies the whole clause." }, pt: { name: "Participial phrase", c: "c1", test: "No subject of its own: it borrows the main clause’s subject." }, tg: { name: "Target", c: "c2", test: "What the modifier attaches to." }, lim: { name: "Limiting word", c: "c4", test: "Only, just, almost…: limits what follows." } },
      tokens: `Squire_ab Trelawney_ab , Dr._ab Livesey_ab , and_ab the_ab rest_ab of_ab these_ab gentlemen_ab having_ab asked_ab me_ab to_ab write_ab down_ab the_ab whole_ab particulars_ab about_ab Treasure_ab Island_ab , from_ab the_ab beginning_ab to_ab the_ab end_ab , keeping_pt nothing_pt back_pt but_pt the_pt bearings_pt of_pt the_pt island_pt , and that only_lim because_tg there_tg is_tg still_tg treasure_tg not_tg yet_tg lifted_tg , I_tg take up my pen in the year of grace 17—`,
      notes: { squire: "The absolute phrase begins with its own subject: Squire Trelawney, Dr. Livesey, and the rest of these gentlemen.", having: "Having asked is the participle of the absolute phrase. Because the phrase supplies its own subject, it does not need to attach to I, and it cannot dangle.", keeping: "Keeping nothing back is an ordinary participial phrase with no subject: it borrows I from the main clause. I keep nothing back, so it attaches correctly.", only: "Only stands right before what it limits, the because-clause: for that reason alone.", because: "The target of only: the one reason the bearings are withheld.", i: "The subject of the main clause, which comes last. It is the understood doer of keeping." },
      note: `Stevenson opens with two different modifiers before the main clause. The first is an <b>absolute phrase</b>: <span class="c1">Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me…</span> names its own subject, so it modifies the whole sentence without borrowing one. The second, <span class="c1">keeping nothing back but the bearings of the island</span>, is a <b>participial phrase</b> with no subject, and it attaches correctly to <span class="c2">I</span>, the narrator, who is the one keeping things back. Inside it, <span class="c4">only</span> sits immediately before its target, <span class="c2">because there is still treasure not yet lifted</span>. Forty-eight words come before the main clause, and every modifier lands on the right word.` },
    { title: "Some Years Ago", book: "Moby-Dick; or, The Whale", author: "Herman Melville", year: 1851, kind: "Novel", where: "Chapter 1, Loomings", scene: "whaler", focus: ["pt", "tg"],
      tags: { pt: { name: "Participial phrase", c: "c1", test: "Borrows the subject of the main clause as its doer." }, tg: { name: "Target (doer)", c: "c2" } },
      tokens: `Call me Ishmael . Some years ago — never mind how long precisely — having_pt little_pt or_pt no_pt money_pt in_pt my_pt purse_pt , and_pt nothing_pt particular_pt to_pt interest_pt me_pt#me2 on_pt shore_pt , I_tg thought I would sail about a little and see the watery part of the world .`,
      notes: { having: "The participle that heads the phrase. Its understood subject must be the subject of the main clause.", money: "Object of having.", nothing: "A second object of having.", i: "The subject of the main clause, and the doer of having: I had little or no money. The phrase attaches correctly." },
      note: `The participial phrase <span class="c1">having little or no money in my purse, and nothing particular to interest me on shore</span> is sixteen words long and comes before the subject it describes. It works because the main clause begins with exactly the right word: <span class="c2">I</span>, the one who has no money. Had Melville written <i>…on shore, the sea seemed the best place to go</i>, the phrase would dangle, attaching to <i>the sea</i>.` },
    { title: "Nearly Twenty-One Years", book: "Emma", author: "Jane Austen", year: 1815, kind: "Novel", where: "Chapter I, first sentence", scene: "emma-hartfield", focus: ["md", "tg", "lim"],
      tags: { md: { name: "Modifier", c: "c1" }, tg: { name: "Target", c: "c2" }, lim: { name: "Limiting word", c: "c4" } },
      tokens: `Emma_tg Woodhouse_tg , handsome_md , clever_md , and_md rich_md , with_md a_md comfortable_md home_md and_md#and2 happy_md disposition_md , seemed to unite some of the best blessings of existence ; and had lived nearly_lim twenty-one_tg#years years_tg#years in the world with very little to distress or vex her .`,
      notes: { emma: "The head the modifiers describe, placed first so they can follow it directly.", handsome: "Three adjectives set off by commas right after the name: they can only describe Emma.", with: "A prepositional phrase that also modifies Emma, kept beside the other modifiers before the verb.", nearly: "A limiting word placed right before the number it limits.", years: "The target of nearly: not quite twenty-one years." },
      note: `Austen packs <span class="c1">handsome, clever, and rich, with a comfortable home and happy disposition</span> between the subject and the verb, right beside <span class="c2">Emma Woodhouse</span>, so there is no doubt what they describe. Later, <span class="c4">nearly</span> stands immediately before <span class="c2">twenty-one years</span>, limiting the number. Put it before the verb (<i>had nearly lived twenty-one years</i>) and it would seem to limit <i>lived</i>, as if she had almost lived.` },
    { title: "By the Labor of My Hands Only", book: "Walden", author: "Henry David Thoreau", year: 1854, kind: "Nonfiction", where: "Economy, first sentence", scene: "walden-pond", focus: ["tg", "lim"],
      tags: { tg: { name: "Target", c: "c2" }, lim: { name: "Limiting word", c: "c4" } },
      tokens: `When I wrote the following pages , or rather the bulk of them , I lived alone , in the woods , a mile from any neighbor , in a house which I had built myself , on the shore of Walden Pond , in Concord , Massachusetts , and earned my living by_tg the_tg labor_tg of_tg my_tg hands_tg only_lim .`,
      notes: { by: "The phrase that only limits: by what means he earned his living.", labor: "Head of the object of by: the labor of my hands.", only: "Placed after the phrase it limits, at the end of the sentence. It limits by the labor of my hands, not earned." },
      note: `Thoreau puts <span class="c4">only</span> last, right after its target, <span class="c2">by the labor of my hands</span>. The position is unusual (most writers would write <i>only by the labor of my hands</i>) but it is unambiguous, because <i>only</i> touches nothing else, and the end position gives it emphasis. Placed before the verb, <i>and only earned my living by the labor of my hands</i> would limit <i>earned</i>, as if earning a living were all he did.` }
  ]
};
