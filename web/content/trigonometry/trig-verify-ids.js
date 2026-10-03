window.ARITH = window.ARITH || {};
ARITH["trig-verify-ids"] = {
  title: "Verifying Trigonometric Identities",
  short: "Transform one side into the other, one rule at a time",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Identities · verifying",
  hero: `<span class="m"><span class="c1">csc <i>θ</i> − sin <i>θ</i></span> = <span class="c2">cos <i>θ</i> cot <i>θ</i></span></span>`,
  lede: `To verify an identity, start with one side and rewrite it, one known identity or algebra step at a time, until it becomes the other side. Each step must be an equality you already know is true.`,
  plain: `<p>Some equations are true for every value of the variable where both sides are defined, like <span class="m">csc <i>θ</i> − sin <i>θ</i> = cos <i>θ</i> cot <i>θ</i></span>. These are <b>identities</b>. Others are true only for some values, like <span class="m">sin <i>θ</i> = 1/2</span>. These are <b>conditional equations</b>, and you solve them.</p>
<p>An identity is not solved; it is <b>verified</b>, or proved. You take one side, usually the more complicated one, and change its form without changing its value: replace a function using a fundamental identity, combine fractions, factor, cancel. When the expression has turned into the other side, the proof is done. Each step is labelled with the rule that justifies it.</p>
<p>You must not treat the identity like an equation and do the same thing to both sides. Squaring both sides or cross-multiplying already assumes the two sides are equal, which is what you are trying to show. A false statement can turn into a true one that way.</p>
<p>A graph helps you guess. If the graphs of the two sides lie on top of each other, the equation is probably an identity. If they separate anywhere, it is certainly not one. But a picture only shows finitely many points, so it is evidence, not a proof.</p>`,
  formal: `<p>An equation in <span class="m"><i>x</i></span> is an <b>identity</b> if it is true for every value of <span class="m"><i>x</i></span> in the domain of both sides. Otherwise, if it is true for some values only, it is a <b>conditional equation</b>. One value <span class="m"><i>x</i><sub>0</sub></span> where both sides are defined and differ (a <b>counterexample</b>) shows that an equation is not an identity.</p>
<p>To <b>verify</b> <span class="m"><span class="c1"><i>L</i>(<i>x</i>)</span> = <span class="c2"><i>R</i>(<i>x</i>)</span></span>, write a chain</p>
<div class="display"><span class="c1"><i>L</i></span> = <i>E</i><sub>1</sub> = <i>E</i><sub>2</sub> = ⋯ = <span class="c2"><i>R</i></span></div>
<p>in which each equality follows from a known identity or from algebra (common denominators, factoring, cancelling a factor that is not zero on the domain, multiplying by <span class="m"><i>A</i>/<i>A</i> = 1</span>). Equality is transitive, so <span class="m"><i>L</i> = <i>R</i></span>. An equivalent method transforms each side separately into the same expression <span class="m"><i>E</i></span>: from <span class="m"><i>L</i> = <i>E</i></span> and <span class="m"><i>R</i> = <i>E</i></span> it follows that <span class="m"><i>L</i> = <i>R</i></span>.</p>
<p>Operations applied to both sides of the unproved equation are not a valid proof. Squaring is not reversible: <span class="m">sin <i>x</i> = −√<span class="ov">1 − cos<sup>2</sup> <i>x</i></span></span> is false at <span class="m"><i>x</i> = π/2</span> (<span class="m">1 ≠ −1</span>), yet squaring both sides gives the identity <span class="m">sin<sup>2</sup> <i>x</i> = 1 − cos<sup>2</sup> <i>x</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>L</i>`, name: "Left side", desc: "The side being transformed, usually the more complicated one." },
    { c: "c2", sym: `<i>R</i>`, name: "Right side", desc: "The target. It is left alone until the left side has become it." },
    { c: "c4", sym: `rule`, name: "Rule used", desc: "The identity or algebra step that justifies each line: reciprocal, Pythagorean, common denominator, conjugate." },
    { c: "c5", sym: `≡`, name: "Done", desc: "The chain has reached the right side, so the equation holds for every x in its domain." }
  ],
  steps: {
    title: "Strategies for verifying an identity",
    items: [
      `Work on one side only, usually the more complicated one; leave the other side as the goal.`,
      `Rewrite everything in sines and cosines when you see no better move.`,
      `Combine sums of fractions over a common denominator, as with rational expressions.`,
      `Factor, and look for Pythagorean forms: <span class="m">1 − sin<sup>2</sup></span>, <span class="m">1 − cos<sup>2</sup></span>, <span class="m">sec<sup>2</sup> − 1</span>, <span class="m">csc<sup>2</sup> − 1</span>.`,
      `When you see <span class="m">1 ± sin <i>x</i></span> or <span class="m">1 ± cos <i>x</i></span> in a denominator, multiply top and bottom by its conjugate.`,
      `Write the rule beside each line. Stop when the expression matches the other side exactly.`
    ]
  },
  example: {
    prompt: `Verify the identity <span class="m"><span class="fr"><span class="c1">cos <i>θ</i></span><span class="c1">1 − sin <i>θ</i></span></span> = <span class="fr"><span class="c2">1 + sin <i>θ</i></span><span class="c2">cos <i>θ</i></span></span></span>.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c1">cos <i>θ</i></span><span class="c1">1 − sin <i>θ</i></span></span> = <span class="fr"><span>cos <i>θ</i></span><span>1 − sin <i>θ</i></span></span> · <span class="fr"><span>1 + sin <i>θ</i></span><span>1 + sin <i>θ</i></span></span></span>`, note: "Multiply by the conjugate over itself, which is 1. Start from the left side, the one with a binomial denominator." },
      { math: `<span class="m">= <span class="fr"><span>cos <i>θ</i> (1 + sin <i>θ</i>)</span><span>1 − sin<sup>2</sup> <i>θ</i></span></span></span>`, note: "Difference of squares: (1 − sin θ)(1 + sin θ) = 1 − sin²θ." },
      { math: `<span class="m">= <span class="fr"><span>cos <i>θ</i> (1 + sin <i>θ</i>)</span><span>cos<sup>2</sup> <i>θ</i></span></span></span>`, note: "Pythagorean identity: 1 − sin²θ = cos²θ." },
      { math: `<span class="m">= <span class="c5"><span class="fr"><span>1 + sin <i>θ</i></span><span>cos <i>θ</i></span></span></span></span>`, note: "Cancel one factor cos θ, which is not zero where the sides are defined. This is the right side." }
    ],
    answer: `<span class="m"><span class="c1"><span class="fr"><span>cos <i>θ</i></span><span>1 − sin <i>θ</i></span></span></span> = <span class="c2"><span class="fr"><span>1 + sin <i>θ</i></span><span>cos <i>θ</i></span></span></span></span> for every <span class="m"><i>θ</i></span> with <span class="m">cos <i>θ</i> ≠ 0</span>, so the equation is an identity.`
  },
  why: `<p>Verifying identities trains the skill that every later topic uses: seeing that two expressions that look different are the same function. The sum, double-angle and product-to-sum formulas are all proved and applied this way, and calculus problems are often solved by spotting the right rewrite.</p>
<p>It is also practice in writing a proof. A verification is a short chain of equalities, each with a reason, that starts from what you have and ends at what you want, without assuming the conclusion. The same discipline, and the same algebra of fractions and factoring, carries over to proofs in every later math course.</p>`,
  careers: [
    { role: "Mathematics teacher", use: "Writes and grades identity proofs, checking that each line follows from a stated rule and that no step assumes the result." },
    { role: "Signal-processing engineer", use: "Rewrites expressions for filters and modulated signals into equivalent forms that are cheaper to compute." },
    { role: "Physicist", use: "Shows that two forms of a wave or oscillation formula are the same before choosing the one that fits the problem." },
    { role: "Software engineer for computer algebra", use: "Builds simplification routines that transform trigonometric expressions step by step and test candidate identities numerically." },
    { role: "Structural engineer", use: "Checks that a rearranged stress-transformation formula is identical to the textbook one before using it in a design calculation." }
  ],
  life: [
    "Checking that two recipes written differently give the same amounts",
    "Rewriting a long route as a shorter one that ends at the same place",
    "Proving a puzzle answer instead of guessing from a few examples",
    "Spotting that two price formulas from different stores always agree"
  ],
  fields: [
    { name: "Calculus", use: "Integrals and limits are often found by rewriting a trigonometric expression into an identical, easier form." },
    { name: "Physics", use: "Wave and oscillation formulas are converted between equivalent forms to read off amplitude and phase." },
    { name: "Computer science", use: "Computer algebra systems test and apply identities to simplify expressions automatically." },
    { name: "Mathematical proof", use: "A verification is a model of a direct proof: a chain of justified equalities." }
  ],
  prereqWhy: {
    "trig-fundamental-ids": "Every step in a verification uses one of the reciprocal, quotient, Pythagorean, even/odd or periodic identities.",
    "a1-rational-add": "Combining trigonometric fractions over a common denominator works exactly like adding rational expressions."
  },
  unlocksWhy: {
    "trig-sum-difference": "After cos(α − β) is proved, the other sum and difference formulas and the cofunction identities are verified with these same one-side techniques."
  },
  beyond: [
    { field: "Precalculus", why: "Sum, double-angle and power-reducing formulas are proved and used by the same step-by-step rewriting." },
    { field: "Calculus II", why: "Integrals of products and powers of trigonometric functions start by rewriting with identities." },
    { field: "Physics (Waves)", why: "Superposition of waves is analysed by rewriting sums of sines and cosines as products." },
    { field: "Engineering", why: "Signal and control formulas are put into equivalent forms that are easier to compute or measure." }
  ],
  mistakes: [
    { wrong: `Squaring both sides of <span class="m">sin <i>x</i> = −√<span class="ov">1 − cos<sup>2</sup> <i>x</i></span></span> gives <span class="m">sin<sup>2</sup> <i>x</i> = 1 − cos<sup>2</sup> <i>x</i></span>, which is true, so the original is an identity.`, fix: `Squaring both sides assumes what you want to prove and is not reversible. At <span class="m"><i>x</i> = π/2</span> the left side is 1 and the right side is −1. Work on one side only.` },
    { wrong: `<span class="m">(sin <i>x</i> + cos <i>x</i>)<sup>2</sup> = sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1</span>`, fix: `Square a binomial with the middle term: <span class="m">(sin <i>x</i> + cos <i>x</i>)<sup>2</sup> = 1 + 2 sin <i>x</i> cos <i>x</i></span>.` },
    { wrong: `<span class="m">sec <i>x</i> + csc <i>x</i> = <span class="fr"><span>1</span><span>cos <i>x</i> + sin <i>x</i></span></span></span>`, fix: `Add the fractions over a common denominator: <span class="m">1/cos <i>x</i> + 1/sin <i>x</i> = (sin <i>x</i> + cos <i>x</i>)/(sin <i>x</i> cos <i>x</i>)</span>.` },
    { wrong: `<span class="m">sin <i>x</i> + cos <i>x</i> = 1</span> holds at <span class="m"><i>x</i> = 0</span> and <span class="m"><i>x</i> = π/2</span>, so it is an identity.`, fix: `Values that work prove nothing. One counterexample is enough to disprove: at <span class="m"><i>x</i> = π/4</span> the left side is <span class="m">√2</span>.` }
  ],
  practice: [
    { q: `Verify <span class="m">sin <i>x</i> sec <i>x</i> = tan <i>x</i></span>.`,
      a: `<span class="m">sin <i>x</i> sec <i>x</i> = sin <i>x</i> · 1/cos <i>x</i> = sin <i>x</i>/cos <i>x</i> = tan <i>x</i></span> (reciprocal, then quotient identity).` },
    { q: `Verify <span class="m">sec <i>x</i> − cos <i>x</i> = sin <i>x</i> tan <i>x</i></span>.`,
      a: `<span class="m">sec <i>x</i> − cos <i>x</i> = 1/cos <i>x</i> − cos <i>x</i> = (1 − cos<sup>2</sup> <i>x</i>)/cos <i>x</i> = sin<sup>2</sup> <i>x</i>/cos <i>x</i> = sin <i>x</i> · (sin <i>x</i>/cos <i>x</i>) = sin <i>x</i> tan <i>x</i></span>.` },
    { q: `Verify <span class="m">1/(1 − sin <i>x</i>) + 1/(1 + sin <i>x</i>) = 2 sec<sup>2</sup> <i>x</i></span>.`,
      a: `Common denominator: <span class="m">[(1 + sin <i>x</i>) + (1 − sin <i>x</i>)]/(1 − sin<sup>2</sup> <i>x</i>) = 2/(1 − sin<sup>2</sup> <i>x</i>) = 2/cos<sup>2</sup> <i>x</i> = 2 sec<sup>2</sup> <i>x</i></span>.` },
    { q: `Which is an identity? Verify it, and give a counterexample for the other: (a) <span class="m">tan <i>x</i> + cot <i>x</i> = sec <i>x</i> csc <i>x</i></span> &nbsp; (b) <span class="m">sin <i>x</i> + cos <i>x</i> = 1</span>.`,
      a: `(a) <span class="m">sin <i>x</i>/cos <i>x</i> + cos <i>x</i>/sin <i>x</i> = (sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i>)/(sin <i>x</i> cos <i>x</i>) = 1/(sin <i>x</i> cos <i>x</i>) = sec <i>x</i> csc <i>x</i></span>: an identity. (b) At <span class="m"><i>x</i> = π/4</span>, <span class="m">√2/2 + √2/2 = √2 ≠ 1</span>: a conditional equation, true only for <span class="m"><i>x</i> = 2π<i>n</i></span> and <span class="m"><i>x</i> = π/2 + 2π<i>n</i></span>.` }
  ],
  origin: `Ptolemy's <i>Almagest</i> (about 150 CE) proved chord relations equivalent to the sum and difference formulas, using his theorem on quadrilaterals inscribed in a circle, and used them to build his chord table.`
};
