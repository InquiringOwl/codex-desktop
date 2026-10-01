window.ARITH = window.ARITH || {};

ARITH["g-logic"] = {
  title: "Conditional Statements & Logic",
  short: "If-then statements, converses and contrapositives",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · logic and proof",
  hero: `<span class="m"><span class="c2"><i>p</i></span> → <span class="c3"><i>q</i></span> &nbsp;≡&nbsp; ~<span class="c3"><i>q</i></span> → ~<span class="c2"><i>p</i></span></span>`,
  lede: `A conditional statement says that whenever the <span class="c2">hypothesis</span> holds, the <span class="c3">conclusion</span> holds too. Its contrapositive always has the same <span class="c1">truth value</span>; its converse may not, and one <span class="c4">counterexample</span> is enough to prove a statement false.`,
  plain: `<p>Geometry is built from sentences of the form "if this, then that." "If two angles are vertical angles, then they are congruent." The part after "if" is the <b>hypothesis</b>; the part after "then" is the <b>conclusion</b>. The sentence makes a promise: every time the hypothesis is true, the conclusion is true as well.</p>
<p>You can rearrange the parts. Swap them and you get the <b>converse</b>: "If two angles are congruent, then they are vertical angles." That one is false. Two 40° angles drawn in different corners of the page are congruent but are not vertical angles. A single example like that, where the hypothesis is true and the conclusion is false, is a <b>counterexample</b>, and it is all you need to show a statement is false.</p>
<p>Negate both parts and you get the <b>inverse</b>. Swap and negate and you get the <b>contrapositive</b>: "If two angles are not congruent, then they are not vertical angles." The contrapositive always agrees with the original statement, and the inverse always agrees with the converse. When a statement and its converse are both true, you can join them with "if and only if." Every good definition works that way.</p>`,
  formal: `<p>Let <span class="m c2"><i>p</i></span> and <span class="m c3"><i>q</i></span> be statements. The <b>conditional</b> <span class="m"><i>p</i> → <i>q</i></span> ("if <i>p</i>, then <i>q</i>") is false only when <span class="m"><i>p</i></span> is true and <span class="m"><i>q</i></span> is false; in every other case it is true. The <b>negation</b> <span class="m">~<i>p</i></span> has the opposite truth value of <span class="m"><i>p</i></span>.</p>
<div class="display">conditional &nbsp;<span class="c2"><i>p</i></span> → <span class="c3"><i>q</i></span> &nbsp;&nbsp;&nbsp; converse &nbsp;<span class="c3"><i>q</i></span> → <span class="c2"><i>p</i></span><br>inverse &nbsp;~<span class="c2"><i>p</i></span> → ~<span class="c3"><i>q</i></span> &nbsp;&nbsp;&nbsp; contrapositive &nbsp;~<span class="c3"><i>q</i></span> → ~<span class="c2"><i>p</i></span><br><span class="dim">equivalent pairs:</span> <i>p</i> → <i>q</i> ≡ ~<i>q</i> → ~<i>p</i> &nbsp;&nbsp; <i>q</i> → <i>p</i> ≡ ~<i>p</i> → ~<i>q</i></div>
<p>Statements with identical truth tables are <b>logically equivalent</b> (≡). The <b>biconditional</b> <span class="m"><i>p</i> ↔ <i>q</i></span> ("<i>p</i> if and only if <i>q</i>") means <span class="m">(<i>p</i> → <i>q</i>) ∧ (<i>q</i> → <i>p</i>)</span> and is true exactly when <span class="m"><i>p</i></span> and <span class="m"><i>q</i></span> have the same truth value. A <b>counterexample</b> to <span class="m"><i>p</i> → <i>q</i></span> is a case in which <span class="m"><i>p</i></span> is true and <span class="m"><i>q</i></span> is false. The <b>conjunction</b> <span class="m"><i>p</i> ∧ <i>q</i></span> (and) is true only when both parts are true; the <b>disjunction</b> <span class="m"><i>p</i> ∨ <i>q</i></span> (or) is true when at least one is. In terms of sets, <span class="m"><i>p</i> → <i>q</i></span> is true for every case exactly when the set where <span class="m"><i>p</i></span> holds is a subset of the set where <span class="m"><i>q</i></span> holds.</p>`,
  legend: [
    { c: "c2", sym: `<i>p</i>`, name: "Hypothesis", desc: "The \"if\" part. In an Euler diagram it is the inner region: every case where it holds." },
    { c: "c3", sym: `<i>q</i>`, name: "Conclusion", desc: "The \"then\" part. A true conditional puts the whole hypothesis region inside this one." },
    { c: "c1", sym: `T / F`, name: "Truth value", desc: "Whether a statement is true or false. A conditional and its contrapositive always share it; so do the converse and the inverse." },
    { c: "c4", sym: `<i>p</i> ∧ ~<i>q</i>`, name: "Counterexample", desc: "A case where the hypothesis is true and the conclusion is false. One of these makes the conditional false." }
  ],
  steps: { title: "How to analyse a conditional statement", items: [
    `Rewrite the sentence in if-then form and mark the hypothesis <span class="m c2"><i>p</i></span> and the conclusion <span class="m c3"><i>q</i></span>. "All squares are rectangles" becomes "If a figure is a square, then it is a rectangle."`,
    `Decide whether <span class="m"><i>p</i> → <i>q</i></span> is true. To call it false, find a counterexample: a case with <span class="m"><i>p</i></span> true and <span class="m"><i>q</i></span> false.`,
    `Write the converse <span class="m"><i>q</i> → <i>p</i></span>, the inverse <span class="m">~<i>p</i> → ~<i>q</i></span> and the contrapositive <span class="m">~<i>q</i> → ~<i>p</i></span>.`,
    `Give the contrapositive the same truth value as the original. Decide the converse separately, then give the inverse the converse's truth value.`,
    `If the conditional and its converse are both true, write the biconditional "<i>p</i> if and only if <i>q</i>."`
  ] },
  example: {
    prompt: `A town's building rule reads: "If a deck is more than 30 inches above the ground, then it must have a guardrail." An inspector visits a 24-inch-high deck that has a guardrail and a 36-inch-high deck that does not. Write the converse, inverse and contrapositive, say which of them the rule guarantees, and decide which deck breaks the rule.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>p</i></span>: <i>h</i> &gt; 30 in &nbsp;&nbsp; <span class="c3"><i>q</i></span>: guardrail</span>`, note: "Hypothesis (the deck height h is more than 30 inches) and conclusion (it has a guardrail) of the rule p → q." },
      { math: `<span class="m">converse &nbsp;<span class="c3"><i>q</i></span> → <span class="c2"><i>p</i></span></span>`, note: "“If a deck has a guardrail, then it is more than 30 in high.” Not guaranteed: the 24-inch deck with a guardrail has q true and p false." },
      { math: `<span class="m">inverse &nbsp;~<span class="c2"><i>p</i></span> → ~<span class="c3"><i>q</i></span></span>`, note: "“If a deck is at most 30 in high, then it has no guardrail.” Not guaranteed either; the same 24-inch deck shows it. The inverse always matches the converse." },
      { math: `<span class="m">contrapositive &nbsp;~<span class="c3"><i>q</i></span> → ~<span class="c2"><i>p</i></span></span>`, note: "“If a deck has no guardrail, then it is at most 30 in high.” Guaranteed: it is logically equivalent to the rule." },
      { math: `<span class="m">36 &gt; 30, no rail: &nbsp;<span class="c4"><i>p</i> ∧ ~<i>q</i></span></span>`, note: "The 36-inch deck without a guardrail makes p true and q false, the one case in which p → q is false." },
      { math: `<span class="m">24 &gt; 30 is false ✓</span>`, note: "Check: with a false hypothesis the rule makes no promise, so the 24-inch deck does not break it." }
    ],
    answer: `Only the contrapositive is guaranteed by the rule. The <span class="m c4">36-inch deck without a guardrail</span> breaks the rule; the 24-inch deck with a guardrail does not, and it shows that the converse and inverse are not part of the rule.`
  },
  why: `<p>Every theorem in geometry is a conditional, and every proof is a chain of them. Knowing that a converse needs its own proof stops you from using "if the lines are parallel, the angles are equal" when you really need "if the angles are equal, the lines are parallel." Knowing that the contrapositive is free lets you prove a statement by showing that the conclusion failing would force the hypothesis to fail.</p>
<p>The same logic runs contracts, building codes, medical guidelines and software. An if-statement in a program is a conditional, a test case that breaks a claim is a counterexample, and a database query that combines conditions with AND and OR is a conjunction or disjunction.</p>`,
  careers: [
    { role: "Software developer", use: "Writes if-then branches and boolean conditions, and simplifies them with equivalences such as the contrapositive and De Morgan's laws." },
    { role: "Lawyer", use: "Reads statutes and contract clauses as conditionals and argues whether the facts of a case satisfy the hypothesis." },
    { role: "Building inspector", use: "Applies code provisions written as if-then rules, such as guard requirements above a stated height, to each structure inspected." },
    { role: "Quality assurance tester", use: "Designs test inputs that make a requirement's condition true to look for a counterexample where the required behaviour fails." },
    { role: "Digital circuit designer", use: "Builds AND, OR and NOT gates and verifies circuits with truth tables." },
    { role: "Physician", use: "Follows clinical decision rules of the form \"if these findings are present, then order this test,\" and knows the converse does not follow." }
  ],
  life: [
    "Reading the conditions on a coupon or warranty before relying on it",
    "Spotting that \"all cats are mammals\" does not mean all mammals are cats",
    "Checking a rule such as \"if you are under 13, you need a parent's permission\" against a real case",
    "Testing a general claim by looking for a single case that breaks it",
    "Setting up spreadsheet IF formulas and filters with AND and OR"
  ],
  fields: [
    { name: "Computer science", use: "Boolean logic, conditionals and truth tables are the basis of programming languages and digital hardware." },
    { name: "Philosophy", use: "Formal logic studies valid argument forms built from conditionals, negations and quantifiers." },
    { name: "Law", use: "Legal reasoning applies conditional rules to facts and distinguishes necessary from sufficient conditions." },
    { name: "Mathematics", use: "Every theorem is a conditional or biconditional, and proofs by contrapositive and counterexample are standard tools." }
  ],
  prereqWhy: {
    "a1-compound": "The AND and OR of compound inequalities are conjunction and disjunction, and solution sets in interval notation supply number counterexamples such as x = −4 for \"if x² > 9, then x > 3.\""
  },
  unlocksWhy: {
    "g-reasoning": "The Laws of Detachment and Syllogism chain conditionals together, and the invalid forms are exactly the mistakes of assuming a converse or an inverse."
  },
  beyond: [
    { field: "Discrete Mathematics", why: "Propositional logic, truth tables, quantifiers and proof by contrapositive are the opening chapters of every course." },
    { field: "Real Analysis", why: "Definitions and theorems are stated as if-then and if-and-only-if statements, and counterexamples are used constantly to show hypotheses are needed." },
    { field: "Computer Science", why: "Boolean expressions, program correctness and circuit design all rest on the truth-functional conditional." }
  ],
  mistakes: [
    { wrong: `Assuming the converse is true because the statement is: "If a figure is a square, then it has four right angles, so a figure with four right angles is a square."`, fix: `The converse is a different statement. A 2 × 5 rectangle has four right angles and is not a square, so the converse is false.` },
    { wrong: `Writing the contrapositive of <span class="m"><i>p</i> → <i>q</i></span> as <span class="m">~<i>p</i> → ~<i>q</i></span>.`, fix: `That is the inverse. The contrapositive both negates and swaps: <span class="m">~<i>q</i> → ~<i>p</i></span>.` },
    { wrong: `Calling "If <span class="m"><i>x</i> &gt; 3</span>, then <span class="m"><i>x</i><sup>2</sup> &gt; 9</span>" false because <span class="m"><i>x</i> = −4</span> gives <span class="m"><i>x</i><sup>2</sup> = 16 &gt; 9</span>.`, fix: `A counterexample must make the hypothesis true and the conclusion false. For <span class="m"><i>x</i> = −4</span> the hypothesis is false, so it says nothing about this statement (it is a counterexample to the converse).` },
    { wrong: `Thinking a conditional with a false hypothesis is false.`, fix: `A conditional is false only when the hypothesis is true and the conclusion is false. With a false hypothesis the promise was never tested, and the conditional counts as true.` }
  ],
  practice: [
    { q: `Is "If <span class="m"><i>x</i><sup>2</sup> = 25</span>, then <span class="m"><i>x</i> = 5</span>" true? Is its converse true?`, a: `The statement is false. Counterexample: <span class="m"><i>x</i> = −5</span>, since <span class="m">(−5)<sup>2</sup> = 25</span> but <span class="m">−5 ≠ 5</span>. The converse "If <span class="m"><i>x</i> = 5</span>, then <span class="m"><i>x</i><sup>2</sup> = 25</span>" is true.` },
    { q: `Write the converse, inverse and contrapositive of "If <span class="m">m∠<i>A</i> = 30°</span>, then <span class="m">∠<i>A</i></span> is acute," and give each truth value.`, a: `Statement: true. Converse: "If <span class="m">∠<i>A</i></span> is acute, then <span class="m">m∠<i>A</i> = 30°</span>": false, counterexample <span class="m">m∠<i>A</i> = 50°</span>. Inverse: "If <span class="m">m∠<i>A</i> ≠ 30°</span>, then <span class="m">∠<i>A</i></span> is not acute": false, same counterexample. Contrapositive: "If <span class="m">∠<i>A</i></span> is not acute, then <span class="m">m∠<i>A</i> ≠ 30°</span>": true.` },
    { q: `Use a truth table to show that <span class="m"><i>p</i> → <i>q</i></span> and <span class="m">~<i>q</i> → ~<i>p</i></span> are equivalent, and that <span class="m"><i>p</i> → <i>q</i></span> and <span class="m"><i>q</i> → <i>p</i></span> are not.`, a: `Rows (<i>p</i>, <i>q</i>) = TT, TF, FT, FF give <span class="m"><i>p</i> → <i>q</i></span>: T, F, T, T and <span class="m">~<i>q</i> → ~<i>p</i></span>: T, F, T, T, identical columns. The converse <span class="m"><i>q</i> → <i>p</i></span> gives T, T, F, T, which differs in rows TF and FT.` },
    { q: `For "If <span class="m"><i>x</i> &gt; 3</span>, then <span class="m"><i>x</i><sup>2</sup> &gt; 9</span>," give the truth value of the statement, its converse, inverse and contrapositive, with a counterexample for each false one.`, a: `The solution set of <span class="m"><i>x</i><sup>2</sup> &gt; 9</span> is <span class="m">(−∞, −3) ∪ (3, ∞)</span>, which contains <span class="m">(3, ∞)</span>, so the statement is true and so is the contrapositive "If <span class="m"><i>x</i><sup>2</sup> ≤ 9</span>, then <span class="m"><i>x</i> ≤ 3</span>." The converse "If <span class="m"><i>x</i><sup>2</sup> &gt; 9</span>, then <span class="m"><i>x</i> &gt; 3</span>" is false: <span class="m"><i>x</i> = −4</span> gives <span class="m">16 &gt; 9</span> but <span class="m">−4 ≤ 3</span>. The inverse "If <span class="m"><i>x</i> ≤ 3</span>, then <span class="m"><i>x</i><sup>2</sup> ≤ 9</span>" is false by the same <span class="m"><i>x</i> = −4</span>.` }
  ],
  origin: `Aristotle's <i>Prior Analytics</i> (4th century BCE) is the first systematic study of valid deductive arguments. The Greek logician Philo of Megara (about 300 BCE) held that a conditional is false only when it leads from a truth to a falsehood, which is the modern truth-table definition. Truth tables in their modern form appeared around 1921 in work by Emil Post and Ludwig Wittgenstein.`
};
