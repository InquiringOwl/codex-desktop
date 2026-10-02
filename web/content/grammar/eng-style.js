window.ARITH = window.ARITH || {};
ARITH["eng-style"] = {
  title: "Concision & Sentence Variety",
  short: "Cutting wordiness, turning nouns back into verbs, and varying sentences for rhythm and emphasis",
  grade: "College ENGL 1xx · grammar",
  hours: 5,
  voice: "plain",
  eyebrow: "Grammar & Usage · style",
  hero: `we <span class="c3">made a decision</span> → we <span class="c1">decided</span>`,
  lede: `Concise sentences say what they mean in the fewest words that still carry it; varied sentences keep the reader listening. Both come from revision, not from first drafts.`,
  plain: `<p>Most first drafts are padded. <i>Due to the fact that the meeting ran long, we made a decision to postpone the vote until a later time</i> says, in twenty-one words, <i>Because the meeting ran long, we decided to postpone the vote</i>, which takes eleven. Nothing was lost: the cuts removed words that repeated each other (<i>postpone … until a later time</i>), a long phrase for a short word (<i>due to the fact that</i> = <i>because</i>), and an action hidden inside a noun (<i>made a decision</i> = <i>decided</i>).</p>
<p>A useful habit, from Joseph Williams’s book <i>Style</i>: ask who is doing what. Put the doer in the subject and the action in the verb. <i>The implementation of the plan by the staff was successful</i> hides both; <i>The staff implemented the plan successfully</i> shows them.</p>
<p>Concise does not mean short and choppy. Good prose mixes sentence lengths: a long sentence that gathers detail, then a short one that lands the point. Read your paragraph aloud. If every sentence has the same length and the same opening, the rhythm drones; change a few.</p>`,
  formal: `<p><b>Concision</b> is the elimination of words that add no meaning. Handbooks group wordiness into a few kinds, each with a standard fix:</p>
<div class="display"><span class="c2">redundancy</span>: end result → result<br><span class="c2">redundant pair</span>: each and every → every<br><span class="c4">empty phrase</span>: due to the fact that → because<br><span class="c4">expletive</span>: There are students who → Students<br><span class="c3">nominalisation</span>: make a decision → decide<br><span class="c4">qualifier</span>: basically, very, really → cut</div>
<p><b>Redundancy</b> repeats meaning: redundant modifiers (<i>past history, final outcome, completely unanimous, basic fundamentals</i>), redundant pairs (<i>each and every, first and foremost, free and open</i>), and redundant categories (<i>red in color, large in size</i>). <b>Empty phrases</b> stretch a word into several (<i>at this point in time</i> = <i>now</i>; <i>in order to</i> = <i>to</i>; <i>in the event that</i> = <i>if</i>). <b>Needless qualifiers and intensifiers</b> (<i>very, really, basically, quite, somewhat</i>) weaken more often than they strengthen. <b>Expletive constructions</b>, <i>there is/are</i> and <i>it is</i> with a delayed subject, push the real subject later and often add a relative clause; cut them when the true subject can come first (<i>There are many students who struggle</i> → <i>Many students struggle</i>). They are right, however, for asserting existence (<i>There is no doubt</i>) and for moving a long subject to the end (<i>It is clear that the plan failed</i>). <b>Nominalisations</b> are verbs or adjectives turned into nouns (<i>decide → decision, analyse → analysis, careful → carefulness</i>); paired with a weak verb (<i>make, give, have, conduct, perform</i>), they bury the action: <i>conduct an investigation of</i> → <i>investigate</i>.</p>
<p>Williams’s principles of clarity: make <b>characters</b> (actors) the subjects of verbs, and express their <b>actions</b> as verbs; keep subjects short and close to their verbs; begin with information the reader already knows and end with new or complex information (<b>old before new</b>). These principles also explain the default preference for the <b>active voice</b>: the passive is right when the actor is unknown or unimportant or when it keeps a consistent topic, but in most sentences the actor is the natural subject. <b>Strong verbs</b> (<i>investigate, decide, collapse</i>) carry more than <i>be</i> or <i>have</i> plus a noun.</p>
<div class="display">loose: main clause, then detail<br>periodic: detail, then main clause<br>end focus: key word last<br>variety: length, opening, structure</div>
<p><b>Sentence variety</b> works on three levels. <b>Length</b>: alternate long and short; a short sentence after long ones gains emphasis. <b>Openings</b>: not every sentence should begin with its subject; vary with an adverb, a prepositional or participial phrase, or a dependent clause (avoiding dangling modifiers). <b>Structure</b>: mix simple, compound and complex sentences, and choose between the <b>cumulative</b> (loose) sentence, which states its main clause first and then adds modifiers (<i>The storm hit at midnight, tearing roofs, flooding streets, cutting power for miles</i>), and the <b>periodic</b> sentence, which holds its main clause until the end for suspense or emphasis (<i>Tired, soaked and an hour late, we finally reached the cabin</i>). English places its strongest stress at the end of a clause (<b>end focus</b>), so put the word you want remembered there.</p>
<p>Linguists describe the same facts as <b>information packaging</b>. Huddleston and Pullum’s <i>Cambridge Grammar</i> discusses <b>end weight</b> (long, heavy constituents tend to come last) and <b>end focus</b> (new information comes late), and treats existential <i>there</i>, extraposition with <i>it</i>, clefts and the passive as constructions whose job is to reorder information, not as wordiness. That is why a rule like “never begin with <i>There is</i>” is too strong: the handbook advice is to cut such constructions when they only delay the subject, and keep them when they put the right information at the end.</p>`,
  legend: [
    { c: "c1", sym: "decided", name: "Kept words", desc: "The words that carry the meaning, including any replacement for a cut phrase." },
    { c: "c2", sym: "end result", name: "Redundancy cut", desc: "A repeated meaning: redundant modifiers and pairs (<i>past history, each and every</i>)." },
    { c: "c3", sym: "make a decision", name: "Nominalisation → verb", desc: "An action buried in a noun, restored as the verb (<i>decide</i>)." },
    { c: "c4", sym: "there is", name: "Expletive / empty phrase", desc: "Filler that delays the subject or pads a short idea (<i>due to the fact that, basically</i>)." },
    { c: "c5", sym: "▮▮▮", name: "Sentence-length bars", desc: "Words per sentence, to see the rhythm of a passage." }
  ],
  steps: {
    title: "Revising a sentence for concision and clarity",
    items: [
      `Find the <b>actor</b> and the <b>action</b>. Make the actor the subject and the action the verb.`,
      `Turn <b>nominalisations</b> back into verbs: <i>give consideration to</i> → <i>consider</i>.`,
      `Cut <b>expletives</b> that only delay the subject: <i>There are many who believe</i> → <i>Many believe</i>.`,
      `Delete <b>redundancies</b> and shrink <b>empty phrases</b>: <i>due to the fact that</i> → <i>because</i>.`,
      `Drop qualifiers and intensifiers that add nothing (<i>very, really, basically</i>).`,
      `Read the paragraph aloud and check <b>variety</b>: lengths, openings, and the word at the end of each sentence.`
    ]
  },
  example: {
    prompt: `Revise: <i>There were several factors that had an impact on the decision of the committee to make a change to the schedule.</i>`,
    lines: [
      { math: `<span class="c4">There were</span> several factors <span class="c4">that</span>`, note: "Expletive + that: the real subject is factors." },
      { math: `Several factors <span class="c3">had an impact on</span>`, note: "Weak verb + noun: the action is affect." },
      { math: `the <span class="c3">decision</span> of the committee`, note: "Nominalisation: the committee decided." },
      { math: `to <span class="c3">make a change to</span> the schedule`, note: "Another one: change." },
      { math: `Several factors <span class="c1">led</span> the committee`, note: "Actor + action: factors led the committee." },
      { math: `to <span class="c1">change</span> the schedule.`, note: "Action as a verb." },
      { math: `21 words → 9 words`, note: "Count: the meaning is unchanged." }
    ],
    answer: `<i>Several factors led the committee to change the schedule.</i> Better still, name the factors: <i>Low attendance and a room conflict led the committee to change the schedule.</i>`
  },
  why: `<p>Readers judge writing by how hard it makes them work. Every empty word is something to read and discard, and every action hidden in a noun is a puzzle to unpack. Concise prose is faster to read and easier to trust: it looks as if the writer knows what they mean. In workplaces where people skim (email, reports, grant proposals, legal briefs), concision is the difference between being read and being skipped.</p>
<p>Variety is what makes prose readable for longer than a paragraph. Uniform sentences lull; varied ones guide attention, putting emphasis where the writer wants it. This topic ends the grammar tree because it uses all the others: voice, clauses, verbals, modifiers, parallelism and punctuation become choices of style.</p>`,
  careers: [
    { role: "Editor", use: "Cuts manuscripts for length and clarity, turning nominalisations into verbs and removing redundancy without changing the author’s meaning." },
    { role: "Plain-language specialist", use: "Rewrites government forms and notices to meet plain-language standards such as the US Plain Writing Act of 2010." },
    { role: "Grant writer", use: "Fits a project’s case into strict word limits by trimming every empty phrase." },
    { role: "Journalist", use: "Writes tight news sentences with actors as subjects, then varies length to keep a feature readable." },
    { role: "UX writer", use: "Writes interface text (buttons, error messages) where every word costs screen space and attention." },
    { role: "Lawyer", use: "Drafts briefs under page limits; courts and style guides urge short sentences and active verbs." }
  ],
  life: [
    "Fitting an application essay or abstract under a word limit.",
    "Writing an email that busy people actually read to the end.",
    "Noticing that a speech you admire mixes very short and very long sentences."
  ],
  fields: [
    { name: "Public administration", use: "Plain-language laws and guidelines require agencies to write clearly and concisely for the public." },
    { name: "Science writing", use: "Journals and grant agencies set word limits; clear actor-action sentences make methods and results easy to follow." },
    { name: "Linguistics", use: "Information structure (given before new, end focus, end weight) explains why some word orders read better." }
  ],
  prereqWhy: {
    "eng-parallelism": `Balanced and parallel structures are a main source of rhythm and emphasis; sentence variety often means choosing between a parallel series and a contrasting short sentence.`,
    "eng-modifier-placement": `Varying sentence openings with participial and prepositional phrases is safe only if you can keep modifiers next to what they modify and avoid dangling them.`,
    "eng-commas": `Cumulative sentences and varied openings depend on correct commas after introductory elements and around nonrestrictive modifiers.`
  },
  unlocksWhy: {},
  beyond: [
    { field: "Composition I", why: "Revising drafts for concision, clarity and variety is the core of a first-year writing course." },
    { field: "Composition II", why: "Research writing applies the same principles to longer arguments, with old-before-new information flow across paragraphs." },
    { field: "Advanced Composition & Rhetoric", why: "Style as a rhetorical choice: periodic sentences, emphasis and rhythm studied in depth." },
    { field: "Introduction to Creative Writing", why: "Sentence rhythm and variety are among the first things a fiction or nonfiction workshop listens for." }
  ],
  mistakes: [
    { wrong: `<i>In my personal opinion, I think the results were very unique.</i>`, fix: `<i>The results were <b>unique</b></i> (or say how they were unusual). <i>In my opinion</i> and <i>I think</i> say the same thing; <i>personal</i> repeats <i>my</i>; <i>unique</i> takes no intensifier.` },
    { wrong: `<i>The committee conducted a review of the proposal and made a recommendation of approval.</i>`, fix: `<i>The committee <b>reviewed</b> the proposal and <b>recommended</b> approval.</i> Two nominalisations become two verbs.` },
    { wrong: `Cutting every <i>there is</i>: <i>No doubt exists about that.</i>`, fix: `Keep <i>There is no doubt about that</i>. Existential <i>there</i> is the natural way to assert that something exists or does not; cut it only when it just delays a subject (<i>There are students who…</i>).` },
    { wrong: `<i>The lab was cold. The samples were frozen. The results were late. The team was frustrated.</i>`, fix: `Vary length and structure: <i>The lab was cold, the samples froze, and the results came in late. The team was frustrated.</i> The short final sentence now carries the emphasis.` },
    { wrong: `Cutting meaning instead of padding: <i>The drug reduced symptoms</i> (from <i>The drug reduced symptoms in 40 percent of patients over six weeks</i>).`, fix: `Concision removes words that add nothing, not facts. Keep <i>in 40 percent of patients over six weeks</i>; cut only the empty words around it.` }
  ],
  practice: [
    { q: `Cut the redundancies: <i>The two companies will merge together and combine their joint resources.</i>`, a: `<i>The two companies will <b>merge</b> and <b>combine their resources</b>.</i> <i>Merge</i> already means come together, and <i>combine</i> makes <i>joint</i> unnecessary. Better still, one verb: <i>The two companies will merge.</i>` },
    { q: `Turn the nominalisations into verbs: <i>The board’s approval of the budget led to an increase in hiring.</i>`, a: `<i>Because the board <b>approved</b> the budget, the company <b>hired</b> more people.</i> (Or <i>The board approved the budget, so hiring increased.</i>) <i>Approval</i> and <i>increase</i> were hidden actions; with actors as subjects, each action becomes a verb.` },
    { q: `Is the expletive justified? <i>It is important that every applicant submit two references.</i>`, a: `Partly. Anticipatory <i>it</i> moves the long <i>that</i>-clause to the end (end weight), which reads well, but <i>It is important that</i> is also an empty frame. A direct version is tighter: <i>Every applicant must submit two references.</i> (Note the subjunctive <i>submit</i> in the original, correct after <i>important that</i>.)` },
    { q: `Combine for variety and emphasis: <i>The rain stopped. We went outside. The streets were flooded. Everything smelled of wet earth.</i>`, a: `One possibility: <i>When the rain stopped, we went outside into flooded streets. Everything smelled of wet earth.</i> The first sentence joins three ideas with a dependent clause and a prepositional phrase; the short second sentence keeps the sensory detail at the end, where it gets the stress. Several revisions are acceptable if they vary length and keep the main point in a strong final position.` }
  ],
  origin: `<p>“Omit needless words” is the most famous line of William Strunk Jr.’s <i>The Elements of Style</i> (privately printed 1918; expanded by E. B. White in 1959). George Orwell’s essay “Politics and the English Language” (1946) attacked padded, abstract prose. Joseph M. Williams’s <i>Style: Ten Lessons in Clarity and Grace</i> (1981) reframed the advice in terms of characters, actions and information flow, and is the source of the actor-as-subject principle taught in many composition courses.</p>`,
  stories: [
    { title: "Quiet Desperation", book: "Walden", author: "Henry David Thoreau", year: 1854, kind: "Essay / memoir", where: "“Economy”", scene: "walden-pond", focus: ["ac", "vb", "end"],
      tags: { ac: { name: "Actor as subject", c: "c1" }, vb: { name: "Action as verb", c: "c3" }, end: { name: "End focus", c: "c5" } },
      tokens: `The_ac mass_ac of_ac men_ac lead_vb lives of quiet_end desperation_end .`,
      notes: { mass: "Head of the subject. The verb lead is plural, agreeing with the sense (men), not the grammatical head mass: notional agreement.", men: "The actors: who is doing the leading.", lead: "A plain, strong verb carrying the action. Compare the wordy version: The majority of people exist in a condition of desperation that is quiet.", desperation: "The new, heavy idea at the end of the sentence, where English puts its strongest stress." },
      note: `Nine words, nothing to cut. The <span class="c1">actor</span> is the subject (<i>the mass of men</i>), the <span class="c3">action</span> is a verb (<i>lead</i>), and the surprising phrase, <span class="c5">quiet desperation</span>, sits at the end, where it gets the stress. Try a nominalised version, <i>The existence of the majority of men is one of quiet desperation</i>: it is longer, the verb is a weak <i>is</i>, and the line loses its force.` },
    { title: "We Are Met", book: "Gettysburg Address", author: "Abraham Lincoln", year: 1863, kind: "Speech", where: "Third to fifth sentences", scene: "battlefield", focus: ["ac", "vb", "exp", "end"],
      tags: { ac: { name: "Actor as subject", c: "c1" }, vb: { name: "Action as verb", c: "c3" }, exp: { name: "Anticipatory it", c: "c4" }, end: { name: "End focus", c: "c5" } },
      tokens: `We_ac are met on a great battlefield of that war . We_ac#we2 have_vb come_vb to dedicate a portion of that field as a final resting place for those who here gave their lives that this_end nation_end might_end live_end . It_exp is_exp altogether fitting and proper that we should do this .`,
      notes: { we: "Short subject, the actors: Lincoln and his audience.", we2: "The same actor again: every sentence keeps we at the centre.", have: "Perfect auxiliary of the action verb come.", come: "Action as verb, followed by an infinitive of purpose, to dedicate.", nation: "The long sentence ends on its most important words: that this nation might live.", live: "The final, one-syllable word of the longest sentence: end focus.", it: "Anticipatory it: a placeholder subject for the that-clause at the end. Here the construction earns its place by putting the key words, we should do this, last.", is: "Linking verb of the anticipatory-it frame." },
      note: `Three sentences of <b>10</b>, <b>27</b> and <b>11</b> words: short, long, short (switch the lab to the Rhythm chart to see them as bars). The long middle sentence gathers detail and ends on <span class="c5">that this nation might live</span>; the short ones frame it. <i>Are met</i> is an older form of <i>have met</i> (<i>be</i> + participle with a verb of coming together), not a passive. The third sentence opens with <span class="c4">It is</span>, an expletive a handbook might cut, but here it holds back the point, <i>we should do this</i>, for the end.` },
    { title: "Marley Was Dead", book: "A Christmas Carol", author: "Charles Dickens", year: 1843, kind: "Novella", where: "Stave One, opening", scene: "counting-house", focus: ["ac", "end", "exp"],
      tags: { ac: { name: "Subject first", c: "c1" }, end: { name: "End focus", c: "c5" }, exp: { name: "Existential there", c: "c4" } },
      tokens: `MARLEY_ac was dead_end : to begin with . There_exp is_exp no doubt whatever about that .`,
      notes: { marley: "Printed in capitals in the source. A one-word subject, first: the sentence wastes nothing.", dead: "The key fact, placed last in the main clause before the colon.", there: "Existential there: the natural way to assert that something exists (or does not). Not wordiness here.", is: "Agrees with no doubt, the real subject, which follows." },
      note: `A six-word sentence and a seven-word one. The opening states its fact in three words (<span class="c1">MARLEY</span> was <span class="c5">dead</span>) and then adds an offhand <i>to begin with</i>, an understated joke for a ghost story. The second sentence uses <span class="c4">There is</span>, the expletive handbooks warn against, and uses it correctly: it asserts that a doubt does not exist, and the rewrite (<i>No doubt whatever exists about that</i>) would be stiffer, not tighter. Concision is about cutting what adds nothing, not about obeying a list of banned phrases.` }
  ]
};
