window.ARITH = window.ARITH || {};

ARITH["g-reasoning"] = {
  title: "Inductive & Deductive Reasoning",
  short: "Patterns suggest conjectures; logic proves conclusions",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · logic and proof",
  hero: `<span class="m"><span class="c2"><i>p</i> → <i>q</i>, &nbsp;<i>q</i> → <i>r</i></span> &nbsp;∴&nbsp; <span class="c5"><i>p</i> → <i>r</i></span></span>`,
  lede: `Inductive reasoning looks at examples and makes a <span class="c3">conjecture</span>; one <span class="c4">counterexample</span> can sink it. Deductive reasoning starts from accepted <span class="c2">premises</span> and reaches a <span class="c5">conclusion</span> that must be true.`,
  plain: `<p>There are two ways to reach a general statement. <b>Inductive reasoning</b> looks at cases and spots a pattern: 1, 3, 5 and 7 are odd, their running totals 1, 4, 9, 16 are perfect squares, so perhaps the sum of the first <i>n</i> odd numbers is always <span class="m"><i>n</i><sup>2</sup></span>. A guess like that is a <b>conjecture</b>. It might be right, but no number of examples proves it, and a single <b>counterexample</b> proves it wrong.</p>
<p>Patterns can fool you. Put points on a circle and join every pair. With 1, 2, 3, 4 and 5 points the chords cut the disc into 1, 2, 4, 8 and 16 regions. Doubling looks certain, yet 6 points give at most 31 regions, not 32.</p>
<p><b>Deductive reasoning</b> works the other way. It starts from statements you accept (definitions, postulates, theorems already proved, given facts) and applies rules of logic, so the conclusion cannot be false if the premises are true. Two rules do most of the work. The <b>Law of Detachment</b>: if "if <i>p</i>, then <i>q</i>" is true and <i>p</i> happens, then <i>q</i> happens. The <b>Law of Syllogism</b>: "if <i>p</i>, then <i>q</i>" and "if <i>q</i>, then <i>r</i>" chain into "if <i>p</i>, then <i>r</i>." Proofs in geometry are long chains of these two steps.</p>`,
  formal: `<p><b>Inductive reasoning</b> forms a <b>conjecture</b> (an unproved general statement) from observed cases. A <b>counterexample</b> is a single case that satisfies the hypothesis of a conjecture but not its conclusion; one counterexample disproves it. <b>Deductive reasoning</b> derives conclusions from accepted statements using valid argument forms.</p>
<div class="display"><b>Law of Detachment</b> <span class="dim">(modus ponens)</span><br><span class="c2"><i>p</i> → <i>q</i> true, <i>p</i> true</span> &nbsp;⇒&nbsp; <span class="c5"><i>q</i> true</span><br><b>Law of Syllogism</b><br><span class="c2"><i>p</i> → <i>q</i> and <i>q</i> → <i>r</i> true</span> &nbsp;⇒&nbsp; <span class="c5"><i>p</i> → <i>r</i> true</span><br><span class="dim">invalid:</span> <span class="c4"><i>p</i> → <i>q</i>, <i>q</i> ⇏ <i>p</i></span> <span class="dim">(affirming the conclusion)</span><br><span class="dim">invalid:</span> <span class="c4"><i>p</i> → <i>q</i>, ~<i>p</i> ⇏ ~<i>q</i></span> <span class="dim">(denying the hypothesis)</span></div>
<p>An argument is <b>valid</b> when the conclusion is true in every case in which all the premises are true. The two invalid forms are the errors of assuming the converse and the inverse. For <span class="m"><i>n</i></span> points on a circle with no three chords meeting at one interior point, the chords divide the disc into <span class="m"><i>C</i>(<i>n</i>, 4) + <i>C</i>(<i>n</i>, 2) + 1</span> regions: 1, 2, 4, 8, 16, 31, 57, … for <span class="m"><i>n</i> = 1, 2, 3, …</span>, so the conjecture <span class="m">2<sup><i>n</i> − 1</sup></span> fails first at <span class="m"><i>n</i> = 6</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>p</i> → <i>q</i>`, name: "Premises", desc: "Statements accepted as true: given facts, definitions, postulates and theorems already proved." },
    { c: "c3", sym: `2<sup><i>n</i> − 1</sup>?`, name: "Conjecture", desc: "A general statement guessed from a pattern of examples. Unproved until a deductive argument settles it." },
    { c: "c4", sym: `<i>n</i> = 6`, name: "Counterexample", desc: "One case that breaks a conjecture, or an invalid step where the conclusion does not follow." },
    { c: "c5", sym: `∴ <i>r</i>`, name: "Valid conclusion", desc: "A statement forced by the premises through Detachment or Syllogism." },
    { c: "c1", sym: `⊢`, name: "Current step", desc: "The rule being applied right now in the chain." }
  ],
  steps: { title: "How to reason from examples to a proof", items: [
    `Collect cases and organise them in a table. Look for a pattern in the numbers or the shapes.`,
    `State a <span class="c3">conjecture</span> in if-then form. Test it on new cases, especially unusual ones (zero, negatives, large values, special shapes).`,
    `If a case breaks it, that <span class="c4">counterexample</span> disproves the conjecture. Revise it or drop it.`,
    `To prove it, list your <span class="c2">premises</span>: the given facts, definitions, postulates and earlier theorems.`,
    `Apply the Law of Syllogism to chain conditionals, then the Law of Detachment to a given fact. Check each step is not the converse or inverse of a premise.`,
    `State the <span class="c5">conclusion</span>. It now holds in every case, not just the ones you tried.`
  ] },
  example: {
    prompt: `A landscaper builds square patios from 1-foot tiles. Each new size adds an L-shaped border around the last square: 1 tile, then 3, then 5, then 7. Make a conjecture for the total number of tiles after <span class="m"><i>n</i></span> borders, prove it deductively, and find the tiles needed for 12 borders.`,
    lines: [
      { math: `<span class="m">1, &nbsp;4, &nbsp;9, &nbsp;16</span>`, note: "Inductive step: the totals 1, 1 + 3, 1 + 3 + 5 and 1 + 3 + 5 + 7 are 1², 2², 3², 4²." },
      { math: `<span class="m c3">1 + 3 + ⋯ + (2<i>n</i> − 1) = <i>n</i><sup>2</sup> ?</span>`, note: "Conjecture. Four examples suggest it but do not prove it." },
      { math: `<span class="m"><i>n</i><sup>2</sup> − (<i>n</i> − 1)<sup>2</sup> = 2<i>n</i> − 1</span>`, note: "Deductive step: the nth border turns an (n − 1)-square into an n-square, so it has 2n − 1 tiles." },
      { math: `<span class="m">2<i>S</i> = <i>n</i> · 2<i>n</i></span>`, note: "Write the sum S forwards and backwards and add: each of the n pairs 1 + (2n − 1), 3 + (2n − 3), … totals 2n." },
      { math: `<span class="m c5"><i>S</i> = <i>n</i><sup>2</sup></span>`, note: "Divide by 2. The conjecture is now a theorem for every n." },
      { math: `<span class="m">12<sup>2</sup> = 144</span>`, note: "Law of Detachment: n = 12 satisfies the hypothesis, so the conclusion applies. The 12th border has 2(12) − 1 = 23 tiles." },
      { math: `<span class="m">11<sup>2</sup> + 23 = 144 ✓</span>`, note: "Check: the 11-border patio plus the 12th border." }
    ],
    answer: `After <span class="m"><i>n</i></span> borders the patio uses <span class="m c5"><i>n</i><sup>2</sup></span> tiles. For 12 borders that is <span class="m c5">144 tiles</span>, with 23 in the last border.`
  },
  why: `<p>Inductive reasoning is how mathematicians and scientists find what might be true: they compute cases, see a pattern, and conjecture. Deductive reasoning is how they make sure. Geometry is the first course where you are asked to do both on purpose, and to keep them apart: a pattern in a few drawings is a reason to look for a proof, never a substitute for one.</p>
<p>Recognising the invalid forms matters outside mathematics too. "If it rains, the game is cancelled. The game was cancelled. So it rained" sounds reasonable and is wrong. Courts, audits, medical diagnosis and scientific papers all depend on separating what follows from what merely fits.</p>`,
  careers: [
    { role: "Research scientist", use: "Forms hypotheses from experimental patterns (inductive) and derives testable predictions from a model (deductive)." },
    { role: "Software engineer", use: "Generalises a bug's cause from failing test cases, then reasons from the code's logic to show the fix covers every input." },
    { role: "Detective", use: "Narrows suspects by deduction from established facts and knows that a fitting story is not proof." },
    { role: "Data analyst", use: "Spots trends in data and avoids treating a pattern seen in a small sample as a general rule." },
    { role: "Attorney", use: "Builds an argument that applies a legal rule to established facts and points out invalid inferences in the opposing case." },
    { role: "Physician", use: "Moves from symptoms to a likely diagnosis and confirms it with tests, avoiding the error of affirming the conclusion." }
  ],
  life: [
    "Guessing the next number in a pattern on a puzzle or test",
    "Noticing that a habit has worked so far without assuming it always will",
    "Working out what must be true from two rules, such as store hours and a holiday schedule",
    "Spotting a flawed argument in an advertisement or a news story",
    "Planning a route by chaining facts: if the bridge is closed, take the ferry; if you take the ferry, leave by 8"
  ],
  fields: [
    { name: "Science", use: "The scientific method combines inductive generalisation from data with deductive predictions that can be tested." },
    { name: "Computer science", use: "Program verification proves properties of code deductively, while testing samples cases inductively." },
    { name: "Philosophy", use: "Logic distinguishes valid deductive forms from inductive inference and studies how far evidence supports a conclusion." },
    { name: "Law", use: "Legal reasoning applies general rules to particular facts, a deductive structure, and argues from precedent by analogy." }
  ],
  prereqWhy: {
    "g-logic": "Detachment and Syllogism manipulate conditionals, and the invalid forms are exactly assuming a converse or an inverse."
  },
  unlocksWhy: {
    "g-proofs": "A two-column proof is a deductive chain in which each statement follows from earlier ones by Detachment, with a definition, postulate, property or theorem as the reason."
  },
  beyond: [
    { field: "Discrete Mathematics", why: "Proof by mathematical induction turns a pattern like 1 + 3 + ⋯ + (2n − 1) = n² into a theorem for every n." },
    { field: "Number Theory", why: "Many famous conjectures were tested on enormous numbers of cases before being proved, or before a counterexample appeared." },
    { field: "Statistics", why: "Statistical inference is a careful form of inductive reasoning that measures how strongly data support a conclusion." }
  ],
  mistakes: [
    { wrong: `"The pattern held for <span class="m"><i>n</i> = 1</span> to <span class="m">5</span>, so it is proved."`, fix: `Examples only support a conjecture. The circle-regions pattern 1, 2, 4, 8, 16 fails at <span class="m"><i>n</i> = 6</span> with 31 regions. You need a deductive argument.` },
    { wrong: `From "If two angles form a linear pair, then they are supplementary" and "∠1 and ∠2 are supplementary," concluding that they form a linear pair.`, fix: `That is affirming the conclusion, which is invalid. Two separate 90° angles are supplementary without being a linear pair.` },
    { wrong: `Chaining "If <i>p</i>, then <i>q</i>" and "If <i>r</i>, then <i>q</i>" into "If <i>p</i>, then <i>r</i>."`, fix: `The Law of Syllogism needs the conclusion of the first statement to be the hypothesis of the second: <span class="m"><i>p</i> → <i>q</i></span> and <span class="m"><i>q</i> → <i>r</i></span>.` }
  ],
  practice: [
    { q: `Find the next term of 3, 7, 11, 15, … and make a conjecture for the <span class="m"><i>n</i></span>th term. Use it to predict the 10th term.`, a: `Each term is 4 more than the last, so the next term is <span class="m">19</span>. Conjecture: the <span class="m"><i>n</i></span>th term is <span class="m">4<i>n</i> − 1</span>. The 10th term is <span class="m">4(10) − 1 = 39</span>.` },
    { q: `Premises: "If two angles form a linear pair, then they are supplementary." "<span class="m">∠1</span> and <span class="m">∠2</span> are supplementary." Can you conclude that <span class="m">∠1</span> and <span class="m">∠2</span> form a linear pair?`, a: `No. This is affirming the conclusion. Counterexample: two right angles in different places, <span class="m">90° + 90° = 180°</span>, are supplementary but share no side, so they are not a linear pair.` },
    { q: `Use the Law of Syllogism: "If a quadrilateral is a square, then it is a rectangle." "If a quadrilateral is a rectangle, then its diagonals are congruent." Then apply the Law of Detachment to "<span class="m"><i>ABCD</i></span> is a square."`, a: `Syllogism: "If a quadrilateral is a square, then its diagonals are congruent." Detachment: <span class="m"><span class="ov"><i>AC</i></span> ≅ <span class="ov"><i>BD</i></span></span>. For a square of side 5, both diagonals are <span class="m">5√2</span>.` },
    { q: `From the region counts 1, 2, 4, 8, 16 for <span class="m"><i>n</i> = 1</span> to <span class="m">5</span> points on a circle, someone conjectures <span class="m">2<sup><i>n</i> − 1</sup></span> regions. Test <span class="m"><i>n</i> = 6</span> using <span class="m"><i>C</i>(<i>n</i>, 4) + <i>C</i>(<i>n</i>, 2) + 1</span> (points placed so no three chords meet inside).`, a: `<span class="m"><i>C</i>(6, 4) + <i>C</i>(6, 2) + 1 = 15 + 15 + 1 = 31</span>, but <span class="m">2<sup>5</sup> = 32</span>. The case <span class="m"><i>n</i> = 6</span> is a counterexample, so the conjecture is false. (For <span class="m"><i>n</i> = 7</span>: 57 regions, not 64.)` }
  ],
  origin: `The Stoic logician Chrysippus (3rd century BCE) listed modus ponens, today's Law of Detachment, as the first of his basic forms of argument. The circle-regions sequence is often called Moser's circle problem, after Leo Moser, and Richard Guy used it in his 1988 article "The Strong Law of Small Numbers" as a warning about trusting small cases.`
};
