window.ARITH = window.ARITH || {};

ARITH["g-proofs"] = {
  title: "Two-Column Proofs",
  short: "Statements on the left, a reason for every one on the right",
  grade: "Grade 10 · college-prep Geometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Geometry · logic and proof",
  hero: `<span class="m"><span class="c2">Given</span> ⇒ ⋯ ⇒ <span class="c5">Prove</span></span>`,
  lede: `A two-column proof lists statements in order, from the <span class="c2">given</span> facts to the statement to be <span class="c5">proved</span>, and backs each one with a <span class="c4">reason</span>: a definition, a postulate, a property or a theorem already proved.`,
  plain: `<p>A proof is an argument that leaves no gaps. In geometry the usual layout is a table with two columns. The left column is a list of <b>statements</b>, one fact per line. The right column gives the <b>reason</b> each fact is true. The first lines are usually "Given," the facts you are told. The last line is the statement you set out to prove.</p>
<p>Only certain reasons are allowed: the given information, definitions (what "midpoint" or "supplementary" means), postulates (basic facts accepted without proof, like the Segment Addition Postulate), the properties of equality and congruence from algebra, and theorems that have already been proved. "It looks that way in the picture" is never a reason, although a figure can show which points lie between which.</p>
<p>Each new statement has to follow from lines above it. When you write <span class="m">m∠1 + m∠3 = m∠3 + m∠2</span>, you should be able to point at the two earlier lines it came from. Once a theorem is proved, it becomes a reason you can use in later proofs, which is how geometry grows from a few postulates into a large body of results.</p>`,
  formal: `<p>A <b>two-column proof</b> of a conditional "if <i>Given</i>, then <i>Prove</i>" is a finite sequence of statements, each justified by: given information; a definition; a postulate; a property of equality (Addition, Subtraction, Multiplication, Division, Substitution, Distributive, and the Reflexive <span class="m"><i>a</i> = <i>a</i></span>, Symmetric <span class="m"><i>a</i> = <i>b</i> ⇒ <i>b</i> = <i>a</i></span> and Transitive <span class="m"><i>a</i> = <i>b</i>, <i>b</i> = <i>c</i> ⇒ <i>a</i> = <i>c</i></span> properties); the reflexive, symmetric or transitive property of congruence; or a previously proved theorem. Measures are equal (=); figures are congruent (≅). By definition, <span class="m">∠<i>A</i> ≅ ∠<i>B</i></span> means <span class="m">m∠<i>A</i> = m∠<i>B</i></span> and <span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span></span> means <span class="m"><i>AB</i> = <i>CD</i></span>.</p>
<p><b>Vertical Angles Theorem.</b> Vertical angles are congruent. <i>Given:</i> lines <span class="m"><i>ℓ</i></span> and <span class="m"><i>m</i></span> intersect, forming vertical angles <span class="m">∠1</span> and <span class="m">∠2</span>, and <span class="m">∠3</span> adjacent to both. <i>Prove:</i> <span class="m">∠1 ≅ ∠2</span>.</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr>
<tr><td><span class="c2">∠1 and ∠2 are vertical angles</span></td><td>Given</td></tr>
<tr><td>∠1 and ∠3 form a linear pair; ∠3 and ∠2 form a linear pair</td><td class="c4">Definition of linear pair (the non-shared sides are opposite rays)</td></tr>
<tr><td><span class="m">m∠1 + m∠3 = 180°</span>, <span class="m">m∠3 + m∠2 = 180°</span></td><td class="c4">Linear Pair Postulate</td></tr>
<tr><td><span class="m">m∠1 + m∠3 = m∠3 + m∠2</span></td><td class="c4">Substitution Property of Equality</td></tr>
<tr><td><span class="m">m∠1 = m∠2</span></td><td class="c4">Subtraction Property of Equality</td></tr>
<tr><td><span class="c5">∠1 ≅ ∠2</span></td><td class="c4">Definition of congruent angles</td></tr></table>
<p>The same pattern proves the <b>Congruent Supplements Theorem</b> (angles supplementary to the same angle, or to congruent angles, are congruent), the <b>Congruent Complements Theorem</b>, and the <b>Right Angles Congruence Theorem</b> (all right angles are congruent).</p>`,
  legend: [
    { c: "c2", sym: `Given`, name: "Given", desc: "The hypothesis of the statement being proved. These lines need no other reason." },
    { c: "c1", sym: `⊢`, name: "Current step", desc: "The statement being justified now, built from earlier lines." },
    { c: "c4", sym: `reason`, name: "Reason", desc: "The definition, postulate, property or earlier theorem that makes the step valid." },
    { c: "c5", sym: `∴ Prove`, name: "Proved statement", desc: "The last line: the conclusion of the theorem, now established." }
  ],
  steps: { title: "How to write a two-column proof", items: [
    `Write the <span class="c2">Given</span> and the <span class="c5">Prove</span> statements and mark the given facts on the figure.`,
    `Plan backwards: ask what you would need to know just before the last line, and what would give you that.`,
    `Start the table with the given facts, each with the reason "Given."`,
    `Add one statement per line. For each, write the exact <span class="c4">reason</span>: name the definition, postulate, property or theorem, and use only lines already above it.`,
    `Switch between ≅ and = only with a definition (congruent segments have equal lengths, congruent angles have equal measures).`,
    `End with the Prove statement. Read the reasons back to check that each step is a real if-then fact whose hypothesis is already established.`
  ] },
  example: {
    prompt: `A carpenter marks points <span class="m"><i>A</i>, <i>B</i>, <i>C</i>, <i>D</i></span> in that order along a straight board, with <span class="m"><i>AB</i> = <i>CD</i></span> so that two brackets sit the same distance from each end. Prove that <span class="m"><i>AC</i> = <i>BD</i></span>. Then find both lengths if <span class="m"><i>AB</i> = <i>CD</i> = 14</span> in and <span class="m"><i>BC</i> = 20</span> in.`,
    lines: [
      { math: `<span class="m c2"><i>AB</i> = <i>CD</i></span>`, note: "Given." },
      { math: `<span class="m"><i>AB</i> + <i>BC</i> = <i>BC</i> + <i>CD</i></span>`, note: "Addition Property of Equality: add BC to both sides (and write the right side in the order BC + CD)." },
      { math: `<span class="m"><i>AB</i> + <i>BC</i> = <i>AC</i>, &nbsp;<i>BC</i> + <i>CD</i> = <i>BD</i></span>`, note: "Segment Addition Postulate: B is between A and C, and C is between B and D." },
      { math: `<span class="m c5"><i>AC</i> = <i>BD</i></span>`, note: "Substitution Property of Equality. This is what was to be proved." },
      { math: `<span class="m"><i>AC</i> = 14 + 20 = 34</span>`, note: "Numerical consequence by the Segment Addition Postulate; likewise BD = 20 + 14 = 34." },
      { math: `<span class="m"><i>AD</i> = 48 = 34 + 14 ✓</span>`, note: "Check: AD = 14 + 20 + 14 = 48, and AC + CD = 34 + 14 = 48." }
    ],
    answer: `<span class="m c5"><i>AC</i> = <i>BD</i></span> whenever <span class="m"><i>AB</i> = <i>CD</i></span>. With the given measurements, <span class="m"><i>AC</i> = <i>BD</i> = 34</span> in.`
  },
  why: `<p>A proof is what turns a claim into knowledge. A theorem proved once from the postulates holds for every figure that meets its hypotheses, so you never have to measure again. The two-column format makes the logic visible: every step has a stated reason, and a reader can check each one independently.</p>
<p>The habit carries far beyond geometry. Writing a step, naming its justification and making sure it uses only what is already established is how mathematicians write proofs, how engineers document safety arguments, how auditors trace a figure back to its source, and how programmers reason that code is correct.</p>`,
  careers: [
    { role: "Mathematician", use: "Proves new theorems from definitions and earlier results, with every step justified for peer review." },
    { role: "Software verification engineer", use: "Writes machine-checked proofs, in tools such as Coq or Lean, that a program or protocol meets its specification." },
    { role: "Attorney", use: "Lays out an argument in which each claim rests on a cited statute, precedent or piece of evidence." },
    { role: "Safety engineer", use: "Builds a safety case that links each claim about a system to the test results and standards that support it." },
    { role: "Auditor", use: "Traces each figure in a financial statement back to documented transactions and accounting rules." }
  ],
  life: [
    "Explaining step by step why a budget balances",
    "Justifying a decision by naming the rule or fact behind each point",
    "Checking someone else's argument for a step that has no support",
    "Following an instruction manual where each step depends on the previous one",
    "Writing a clear complaint or appeal that cites the policy that applies"
  ],
  fields: [
    { name: "Mathematics", use: "Every branch of mathematics is built from axioms and definitions by proof." },
    { name: "Computer science", use: "Algorithms are proved correct and their running times are bounded by deductive arguments." },
    { name: "Philosophy", use: "Formal logic studies the structure of valid proofs and what can be proved from given axioms." },
    { name: "Law", use: "Legal briefs connect conclusions to cited authority in the way a proof connects statements to reasons." }
  ],
  prereqWhy: {
    "g-reasoning": "Each line of a proof is an application of the Law of Detachment, and chained theorems use the Law of Syllogism.",
    "g-segments": "The Segment Addition Postulate and the definition of midpoint are among the most used reasons in early proofs.",
    "g-angles": "The Angle Addition Postulate and the definitions of right, straight and congruent angles are needed for proofs about angles."
  },
  unlocksWhy: {
    "g-parallel": "The theorems about angles formed by parallel lines and a transversal are proved in two-column form from the Corresponding Angles Postulate.",
    "g-congruence": "Triangle congruence proofs with SSS, SAS, ASA, AAS, HL and CPCTC are the main use of the two-column format."
  },
  beyond: [
    { field: "Discrete Mathematics", why: "Direct proof, proof by contrapositive, contradiction and induction are the core methods of the course." },
    { field: "Linear Algebra", why: "Upper-level courses prove properties of vector spaces and matrices from axioms with the same step-and-reason discipline." },
    { field: "Real Analysis", why: "Every limit, continuity and convergence result is proved from definitions, one justified step at a time." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m">∠1 = ∠2</span> or <span class="m"><span class="ov"><i>AB</i></span> = <span class="ov"><i>CD</i></span></span>.`, fix: `Figures are congruent and measures are equal: <span class="m">∠1 ≅ ∠2</span>, <span class="m">m∠1 = m∠2</span>, <span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span></span>, <span class="m"><i>AB</i> = <i>CD</i></span>. Move between them with the definition of congruence.` },
    { wrong: `Giving "Vertical Angles Theorem" as the reason for <span class="m">m∠1 + m∠3 = 180°</span>.`, fix: `A reason must match the statement. A linear pair summing to 180° is the Linear Pair Postulate; the Vertical Angles Theorem gives <span class="m">∠1 ≅ ∠2</span>.` },
    { wrong: `Using the statement to be proved as a reason, or using a line before it has been established.`, fix: `Each reason may use only the given facts and lines above it. Assuming the conclusion makes the argument circular.` },
    { wrong: `Reasoning from the look of the figure: "the angles look equal, so they are congruent."`, fix: `Figures show position (which point is between which, which angles are adjacent) but not measure. Equal measures need a reason.` }
  ],
  practice: [
    { q: `Solve <span class="m">2(<i>x</i> − 3) = 8</span> as an algebraic proof, giving a reason for each step.`, a: `<span class="m">2(<i>x</i> − 3) = 8</span>: Given. <span class="m">2<i>x</i> − 6 = 8</span>: Distributive Property. <span class="m">2<i>x</i> = 14</span>: Addition Property of Equality. <span class="m"><i>x</i> = 7</span>: Division Property of Equality. Check: <span class="m">2(7 − 3) = 8</span>.` },
    { q: `<span class="m">∠1</span> and <span class="m">∠3</span> are vertical angles with <span class="m">m∠1 = (4<i>x</i> + 6)°</span> and <span class="m">m∠3 = (6<i>x</i> − 20)°</span>. Find <span class="m"><i>x</i></span> and <span class="m">m∠1</span>, with reasons.`, a: `<span class="m">∠1 ≅ ∠3</span>: Vertical Angles Theorem, so <span class="m">4<i>x</i> + 6 = 6<i>x</i> − 20</span>: definition of congruent angles and Substitution. <span class="m">26 = 2<i>x</i></span>: Subtraction and Addition Properties. <span class="m"><i>x</i> = 13</span>: Division Property. <span class="m">m∠1 = 4(13) + 6 = 58°</span>: Substitution; check <span class="m">6(13) − 20 = 58</span>.` },
    { q: `Points <span class="m"><i>A</i>, <i>B</i>, <i>C</i>, <i>D</i></span> are collinear in that order with <span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span></span>, <span class="m"><i>AB</i> = 3<i>x</i> + 1</span>, <span class="m"><i>CD</i> = 5<i>x</i> − 9</span> and <span class="m"><i>BC</i> = 7</span>. Find <span class="m"><i>AC</i></span> and <span class="m"><i>BD</i></span>.`, a: `Definition of congruent segments: <span class="m">3<i>x</i> + 1 = 5<i>x</i> − 9</span>, so <span class="m"><i>x</i> = 5</span> and <span class="m"><i>AB</i> = <i>CD</i> = 16</span>. Segment Addition Postulate: <span class="m"><i>AC</i> = 16 + 7 = 23</span> and <span class="m"><i>BD</i> = 7 + 16 = 23</span>, as the theorem in the worked example predicts.` },
    { q: `Prove the Congruent Supplements Theorem. Given: <span class="m">∠1</span> and <span class="m">∠2</span> are supplementary; <span class="m">∠3</span> and <span class="m">∠2</span> are supplementary. Prove: <span class="m">∠1 ≅ ∠3</span>.`, a: `<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td>∠1 and ∠2 are supplementary; ∠3 and ∠2 are supplementary</td><td>Given</td></tr><tr><td><span class="m">m∠1 + m∠2 = 180°</span>, <span class="m">m∠3 + m∠2 = 180°</span></td><td>Definition of supplementary angles</td></tr><tr><td><span class="m">m∠1 + m∠2 = m∠3 + m∠2</span></td><td>Substitution Property of Equality</td></tr><tr><td><span class="m">m∠1 = m∠3</span></td><td>Subtraction Property of Equality</td></tr><tr><td>∠1 ≅ ∠3</td><td>Definition of congruent angles</td></tr></table>` }
  ],
  origin: `Greek tradition, reported by Proclus from Eudemus, credits Thales of Miletus (about 600 BCE) with discovering that vertical angles are equal, and says the theorem was first given a scientific demonstration by Euclid, as Proposition 15 of Book I of the <i>Elements</i> (about 300 BCE). The two-column format is much newer: it spread through American school geometry textbooks in the early twentieth century.`
};
