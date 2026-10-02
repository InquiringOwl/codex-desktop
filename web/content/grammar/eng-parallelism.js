window.ARITH = window.ARITH || {};
ARITH["eng-parallelism"] = {
  title: "Parallelism",
  short: "Matching forms in series, pairs and comparisons, and the rhetoric of repeated structure",
  grade: "College ENGL 1xx · grammar",
  hours: 3,
  voice: "plain",
  eyebrow: "Grammar & Usage · parallel structure",
  hero: `<span class="c4">not only</span> <span class="c2">the piano</span> <span class="c4">but also</span> <span class="c2">the violin</span>`,
  lede: `When a sentence joins two or more items with the same job, they should have the same grammatical form: noun with noun, gerund with gerund, clause with clause.`,
  plain: `<p>Read this aloud: <i>I like hiking, swimming, and to ride my bike.</i> Something trips. The first two items are <i>-ing</i> words and the third suddenly switches to <i>to ride</i>. Make them match, <i>hiking, swimming, and riding</i>, and the sentence runs smoothly. That matching is <b>parallelism</b> (or parallel structure).</p>
<p>The rule applies wherever words are lined up as equals: items in a series joined by <i>and</i> or <i>or</i>, two things joined by <i>but</i>, pairs like <i>either … or</i> and <i>not only … but also</i>, comparisons with <i>than</i> or <i>as</i>, and the items in a list or a set of headings. Each item should be built the same way as its partners.</p>
<p>Parallelism is also one of the oldest tools of style. Repeat a frame and change one word, and the changing word leaps out: <i>It was the best of times, it was the worst of times.</i> Speeches and famous lines are full of it, because a listener can hear the pattern and remember it.</p>`,
  formal: `<p><b>Parallelism</b> is the use of the same grammatical form for elements that are coordinate: equal in rank and joined by a coordinating conjunction (<i>and, but, or, nor, yet</i>), a <b>correlative conjunction</b> pair (<i>both … and, either … or, neither … nor, not only … but also, whether … or</i>), or a comparison (<i>than, as … as, rather than</i>). <b>Faulty parallelism</b> joins unlike forms: a noun phrase with a clause, an infinitive with a gerund, an adjective with a verb phrase.</p>
<div class="display"><span class="c2">noun</span>, <span class="c2">noun</span>, and <span class="c2">noun</span><br><span class="c2">to V</span>, <span class="c2">to V</span>, and <span class="c2">to V</span><br><span class="c2">V-ing</span>, <span class="c2">V-ing</span>, or <span class="c2">V-ing</span><br><span class="c4">either</span> X <span class="c4">or</span> X (same form)<br>X is harder <span class="c4">than</span> X</div>
<p>Four handbook rules. (1) In a <b>series</b>, every item takes the form of the first: <i>patience, attention to detail, and the ability to lift 50 pounds</i>, not <i>…and that you can lift 50 pounds</i>. (2) With <b>correlatives</b>, the words after each half must match; place the first half directly before the element it pairs: <i>She plays not only the piano but also the violin</i> (not <i>She not only plays the piano but also the violin</i>, which pairs a verb phrase with a noun phrase). (3) In <b>comparisons</b>, compare like with like: <i>Writing a novel is harder than writing a short story</i>; <i>Her salary is higher than her manager’s</i> (not <i>than her manager</i>). (4) <b>Lists and headings</b> share one form: all noun phrases, or all imperatives, or all past-tense verbs on a résumé.</p>
<p><b>Repeat function words</b> (prepositions, <i>to</i>, articles, <i>that</i>) when they prevent misreading: <i>The coach said that they had trained hard and that they deserved a rest</i> (without the second <i>that</i>, the second clause can read as the writer’s own claim). A function word may be stated once before a series or repeated before every item, but not dropped from some and kept on others: <i>to lower taxes, improve schools, and fix the roads</i> or <i>to lower…, to improve…, and to fix…</i>.</p>
<div class="display">Rhetorical parallelism<br><span class="c1">anaphora</span>: same opening words<br><span class="c1">epistrophe</span>: same closing words<br><span class="c2">antithesis</span>: opposites in one frame<br>tricolon: three members<br>isocolon: members of equal length</div>
<p><b>Rhetorical parallelism</b> uses the same principle for emphasis and memorability. <b>Anaphora</b> repeats the opening words of successive clauses (<i>with malice…, with charity…, with firmness…</i>); <b>epistrophe</b> repeats the closing words (<i>of the people, by the people, for the people</i>, where <i>the people</i> closes each phrase); <b>antithesis</b> sets contrasting ideas in parallel structures (<i>what we say here … what they did here</i>); a <b>tricolon</b> is a series of three (<i>I came, I saw, I conquered</i>); <b>isocolon</b> makes the members the same length. A tricolon whose members grow longer is sometimes called a tricolon crescens.</p>
<p>Modern grammars frame the rule as a condition on <b>coordination</b>. Huddleston and Pullum note that coordinates need not belong to the same category if each could fill the slot on its own (<i>He is a doctor and very proud of it</i> joins a noun phrase and an adjective phrase as complements of <i>is</i>), so not every mismatch is ungrammatical. The handbook rule is a stylistic standard: in formal writing, matching forms read faster and look deliberate.</p>`,
  legend: [
    { c: "c1", sym: "it was the", name: "Shared frame / repeated word", desc: "Words every member shares or repeats: the frame of the pattern." },
    { c: "c2", sym: "hiking", name: "Item in form A", desc: "A member in the form that sets the pattern (e.g. a gerund phrase)." },
    { c: "c3", sym: "to ride", name: "Item in form B (mismatch)", desc: "A member that breaks the pattern: faulty parallelism." },
    { c: "c4", sym: "either … or", name: "Correlative pair", desc: "<i>both … and, either … or, neither … nor, not only … but also, whether … or</i>." },
    { c: "c5", sym: "riding", name: "Parallel item after fix", desc: "The mismatched member rewritten to match its partners." }
  ],
  steps: {
    title: "Checking a sentence for parallelism",
    items: [
      `Find the <b>joiner</b>: <i>and, or, but, nor</i>, a correlative pair, <i>than/as</i>, or a list.`,
      `Mark the <b>members</b> it joins and the <b>shared frame</b> they all hang from (<i>I like ___</i>).`,
      `Name each member’s <b>form</b>: noun phrase, gerund, infinitive, clause, adjective, verb phrase.`,
      `If one member differs, <b>rewrite it</b> in the form most members already have (or recast the whole series).`,
      `With correlatives, check that the words <b>right after each half</b> match; move the first half if needed.`,
      `Repeat <i>to, that</i> or a preposition if dropping it could make a reader misread; then read the sentence aloud.`
    ]
  },
  example: {
    prompt: `Fix: <i>The new manager is known for her honesty, working long hours, and she listens to complaints.</i>`,
    lines: [
      { math: `known for ___, ___, and ___`, note: "Joiner and; frame: known for." },
      { math: `<span class="c2">her honesty</span>`, note: "Noun phrase (object of for)." },
      { math: `<span class="c3">working long hours</span>`, note: "Gerund phrase: a different form." },
      { math: `<span class="c3">she listens to complaints</span>`, note: "Clause: a third form, and for + clause fails." },
      { math: `<span class="c2">her honesty</span>, <span class="c5">her long hours</span>,`, note: "Rewrite as noun phrases, line 1." },
      { math: `and <span class="c5">her patience with complaints</span>`, note: "Line 2: three noun phrases." },
      { math: `known for her honesty, her long`, note: "Check: each fits the frame alone." },
      { math: `hours, and her patience…`, note: "known for her honesty / for her long hours / for her patience." }
    ],
    answer: `<i>The new manager is known for her honesty, her long hours, and her patience with complaints.</i> (All gerunds also work: <i>known for being honest, working long hours, and listening to complaints.</i>)`
  },
  why: `<p>Parallel structure is how a reader sees that items are equal. When forms match, the reader processes the frame once and then takes in each member quickly; when one breaks the pattern, the reader stalls and has to reparse. In résumés, slide headings, instructions and legal lists, mismatched items look careless and can even blur what is being claimed.</p>
<p>It is also the backbone of memorable prose. Lincoln, Dickens, King James Bible translators and modern speechwriters all lean on repeated frames, because parallelism makes contrast visible and rhythm audible. Learning to hear it improves both your editing and your reading of literature and rhetoric.</p>`,
  careers: [
    { role: "Speechwriter", use: "Builds tricolons, anaphora and antithesis into speeches so key lines are easy to hear and quote." },
    { role: "Résumé writer or career coach", use: "Rewrites bullet points so every one starts with a past-tense action verb." },
    { role: "Technical writer", use: "Keeps numbered steps, headings and table entries in one grammatical form so users can scan them." },
    { role: "Copywriter", use: "Uses parallel taglines and product benefit lists that read in one rhythm." },
    { role: "Legal drafter", use: "Writes statutory lists whose items all complete the same lead-in, so each can be read with it on its own." },
    { role: "Instructional designer", use: "Writes learning objectives in a single verb-first form (identify, compare, explain)." }
  ],
  life: [
    "Writing bullet points on a résumé or slide so they all start the same way.",
    "Hearing why a famous line sticks: it was the best of times, it was the worst of times.",
    "Fixing a to-do list that mixes “buy milk” with “the dentist” and “calling Mom”."
  ],
  fields: [
    { name: "Rhetoric and public speaking", use: "Classical rhetoric names and teaches the figures of parallelism: anaphora, antithesis, isocolon, tricolon." },
    { name: "Biblical and literary studies", use: "Hebrew poetry is built on parallelism of lines, which shaped the King James Bible and later English prose." },
    { name: "Law", use: "Statutes are drafted as lists whose items must each read grammatically with the shared introduction." }
  ],
  prereqWhy: {
    "eng-sentence-types": `Parallelism is a rule about coordination: you need to recognise compound structures and the coordinating and correlative conjunctions that join equal parts.`,
    "eng-verbals": `Most faulty parallelism mixes verbals: an infinitive with a gerund, or a participle with a clause. Naming gerund, infinitive and participial phrases is what lets you see the mismatch.`
  },
  unlocksWhy: {
    "eng-style": `Concision and sentence variety build on parallelism: balanced structures, tricolons and periodic sentences are among the main tools for rhythm and emphasis.`
  },
  beyond: [
    { field: "Composition I", why: "Parallel thesis statements and topic sentences make an essay’s structure visible." },
    { field: "Advanced Composition & Rhetoric", why: "The classical figures of repetition and balance are studied as tools of argument." },
    { field: "Poetry & Poetics", why: "Anaphora and syntactic parallelism organise much free verse, from Whitman onward." },
    { field: "Shakespeare", why: "Antithesis and balanced clauses are everywhere in Shakespeare’s verse and prose." }
  ],
  mistakes: [
    { wrong: `<i>The course teaches students to research, drafting, and how to revise.</i>`, fix: `<i>…teaches students <b>to research, to draft, and to revise</b>.</i> An infinitive, a gerund and a noun clause become three infinitives.` },
    { wrong: `<i>He either will apologise or resign.</i>`, fix: `<i>He will <b>either apologise or resign</b>.</i> Put <i>either</i> directly before the first of the two matching verbs.` },
    { wrong: `<i>The climate in Seattle is wetter than Phoenix.</i>`, fix: `<i>…wetter than <b>Phoenix’s</b></i> (or <i>than that of Phoenix</i>). Compare a climate with a climate, not with a city.` },
    { wrong: `<i>Goals: increase sales; customer retention; we will hire two engineers.</i>`, fix: `<i>Goals: <b>increase sales; improve retention; hire two engineers</b>.</i> List items share one form (here, imperative verbs).` },
    { wrong: `<i>She was praised for her research and for teaching and service.</i>`, fix: `<i>…for her research, for her teaching, and for her service</i>, or <i>for her research, teaching, and service</i>. Repeat the function word before every item or before none.` }
  ],
  practice: [
    { q: `Fix: <i>The app is fast, reliable, and it costs very little.</i>`, a: `<i>The app is <b>fast, reliable, and cheap</b>.</i> The first two members are adjectives (subject complements of <i>is</i>), so the third must be an adjective too; the clause <i>it costs very little</i> breaks the series.` },
    { q: `Fix the correlative: <i>Not only did the storm close the roads but also the schools.</i>`, a: `<i>The storm closed <b>not only the roads but also the schools</b>.</i> In the original, <i>not only</i> is followed by a clause (<i>did the storm close the roads</i>) and <i>but also</i> by a noun phrase. Moving the pair inside the verb phrase makes both halves noun phrases.` },
    { q: `Why add the second <i>that</i>: <i>The report found that costs had risen and (that) the staff had shrunk</i>?`, a: `Without it, <i>the staff had shrunk</i> can be read as a new independent clause stating a fact, rather than a second finding of the report. Repeating <i>that</i> marks the two clauses as parallel objects of <i>found</i>, so both are clearly what the report found.` },
    { q: `Name the devices in <i>We came not to bury the past but to build the future, not to divide but to unite.</i>`, a: `<b>Antithesis</b> (bury/build, past/future, divide/unite set in matching frames), with parallel infinitives after <i>not … but</i> (<i>not to bury … but to build</i>, <i>not to divide … but to unite</i>) and <b>anaphora</b> of <i>not to</i>. The second pair is shorter than the first, so the members are not isocolon; the shortening gives the line its push to the end.` }
  ],
  origin: `<p>The figures of parallelism were named by Greek and Roman rhetoricians (Aristotle discusses antithesis and balanced clauses in the <i>Rhetoric</i>; <i>anaphora</i>, <i>isocolon</i> and <i>tricolon</i> are Greek terms). In English, the King James Bible (1611), with its parallel lines inherited from Hebrew poetry, and the balanced periods of eighteenth-century prose writers such as Samuel Johnson made parallel structure a mark of formal style. The term <i>parallel construction</i> as a rule of usage became standard in school handbooks in the late nineteenth and early twentieth centuries.</p>`,
  stories: [
    { title: "What We Say Here", book: "Gettysburg Address", author: "Abraham Lincoln", year: 1863, kind: "Speech", where: "Middle of the address", scene: "battlefield", focus: ["fr", "ma", "mb", "vp", "cj"],
      tags: { fr: { name: "Repeated frame", c: "c1", test: "Words both members share." }, ma: { name: "First member", c: "c2" }, mb: { name: "Matching member", c: "c5" }, vp: { name: "Paired verb phrase", c: "c2" }, cj: { name: "Coordinator", c: "c4" } },
      tokens: `The world will little_vp note_vp , nor_cj long_vp remember_vp , what_fr we_ma say_ma here_fr , but_cj it can never forget what_fr#what2 they_mb did_mb here_fr#here2 .`,
      notes: { little: "Adverb + verb: little note. Its partner is long remember, the same adverb + verb shape.", remember: "Second verb of the pair, joined by nor; both take the same object, what we say here.", nor: "Coordinator joining the two verb phrases (with will understood: will little note, nor [will] long remember).", what: "Opens the first noun clause; the second clause opens the same way.", we: "We say: subject + present verb. Its partner is they did.", here: "Closes the first clause. The second clause ends with here too: epistrophe.", but: "Coordinator joining the two main clauses and turning the contrast.", they: "They did: subject + past verb, matching we say. We (the living) against they (the dead).", what2: "Same frame as what we say here.", here2: "Same closing word as the first clause." },
      note: `Two layers of parallelism. Inside the first clause, two matching verb phrases (<span class="c2">little note</span>, <span class="c2">long remember</span>) share one object. Across the <span class="c4">but</span>, two noun clauses share a frame, <span class="c1">what</span> ___ <span class="c1">here</span>, and only the middle changes: <span class="c2">we say</span> against <span class="c5">they did</span>, living against dead, present against past, words against deeds. Both clauses are four words long: antithesis in isocolon. (Lincoln was wrong about the world’s memory, which is part of the line’s force.)` },
    { title: "The Best of Times", book: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, kind: "Novel", where: "Book the First, Chapter I, opening", scene: "two-cities", focus: ["rep", "pos", "neg"],
      tags: { rep: { name: "Repeated frame (anaphora)", c: "c1" }, pos: { name: "First term", c: "c2" }, neg: { name: "Its opposite", c: "c5" } },
      tokens: `It_rep was_rep the_rep best_pos of times , it_rep was_rep the_rep worst_neg of times , it_rep was_rep the_rep age of wisdom_pos , it_rep was_rep the_rep age of foolishness_neg , it_rep was_rep the_rep epoch of belief_pos , it_rep was_rep the_rep epoch of incredulity_neg , it_rep was_rep the_rep season of Light_pos , it_rep was_rep the_rep season of Darkness_neg , it_rep was_rep the_rep spring_pos of hope_pos , it_rep was_rep the_rep winter_neg of despair_neg , we_rep had_rep everything_pos before us , we_rep had_rep nothing_neg before us , we_rep were_rep all_rep going_rep direct_rep to Heaven_pos , we_rep were_rep all_rep going_rep direct_rep the_neg other_neg way_neg — in short , …`,
      notes: { it: "It was the: the frame repeated at the start of ten clauses (anaphora).", best: "First term of the first antithesis; its opposite is worst.", worst: "The opposite of best, in an identical frame.", wisdom: "Paired with foolishness.", foolishness: "Opposite of wisdom.", belief: "Paired with incredulity (disbelief).", incredulity: "Opposite of belief.", light: "Capitalised in the source, like Darkness.", darkness: "Opposite of Light.", spring: "Spring of hope against winter of despair: two words change at once.", despair: "Opposite of hope.", we: "The frame changes to we had and then we were all going direct, keeping the anaphora.", everything: "Opposite: nothing.", nothing: "Opposite of everything.", heaven: "Opposite: the other way.", way: "The other way: a comic understatement for hell, breaking the pattern just before in short." },
      note: `Fourteen clauses, seven antithetical pairs. Each pair repeats a frame (<span class="c1">it was the</span> … ten times, <span class="c1">we had</span> twice, <span class="c1">we were all going direct</span> twice) and changes only the key word: <span class="c2">best</span>/<span class="c5">worst</span>, <span class="c2">wisdom</span>/<span class="c5">foolishness</span>, <span class="c2">belief</span>/<span class="c5">incredulity</span>, <span class="c2">Light</span>/<span class="c5">Darkness</span>, <span class="c2">hope</span>/<span class="c5">despair</span>, <span class="c2">everything</span>/<span class="c5">nothing</span>, <span class="c2">Heaven</span>/<span class="c5">the other way</span>. The first ten clauses are each six words long (isocolon). The comma splices are deliberate: the run of equal clauses is the point.` },
    { title: "With Malice Toward None", book: "Second Inaugural Address", author: "Abraham Lincoln", year: 1865, kind: "Speech", where: "Final paragraph", scene: "inaugural", focus: ["rep", "wp", "inf"],
      tags: { rep: { name: "Repeated function word", c: "c1" }, wp: { name: "With-phrase member", c: "c2" }, inf: { name: "Infinitive member", c: "c5" } },
      tokens: `With_rep malice_wp toward none ; with_rep charity_wp for all ; with_rep firmness_wp in the right , as God gives us to see the right , let us strive on to_rep finish_inf the work we are in ; to_rep bind_inf up_inf the nation’s wounds ; to_rep care_inf for_inf him who shall have borne the battle , and for his widow , and his orphan — to_rep do_inf all which may achieve and cherish a just and lasting peace among ourselves , and with all nations .`,
      notes: { with: "With opens each of the three opening phrases: anaphora.", malice: "With malice toward none: preposition + noun + phrase. Its partners have the same shape.", charity: "With charity for all: the same shape as with malice toward none, and the same length (four words).", firmness: "With firmness in the right: the third member, one word longer, extended by an as-clause.", to: "To introduces each infinitive after let us strive on; repeating it marks each as a separate aim.", finish: "First infinitive: to finish the work we are in.", bind: "Second infinitive: to bind up (a phrasal verb) the nation’s wounds.", care: "Third infinitive: to care for (a prepositional verb) him who shall have borne the battle.", do: "Fourth infinitive, after the dash, summing up the others: to do all which may achieve … a just and lasting peace." },
      note: `Two parallel series in one sentence. First a tricolon of prepositional phrases with anaphora: <span class="c1">with</span> <span class="c2">malice</span> toward none; <span class="c1">with</span> <span class="c2">charity</span> for all; <span class="c1">with</span> <span class="c2">firmness</span> in the right (the third member is the longest). Then, after <i>let us strive on</i>, four infinitives, each with its own <span class="c1">to</span>: <span class="c5">to finish</span>, <span class="c5">to bind up</span>, <span class="c5">to care for</span>, and, after the dash, <span class="c5">to do</span>, which gathers the others into one aim. Lincoln repeats <i>to</i> before every item, the function-word rule handbooks teach.` }
  ]
};
