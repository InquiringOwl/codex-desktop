window.ARITH = window.ARITH || {};

ARITH["a1-compound"] = {
  title: "Compound Inequalities & Interval Notation",
  short: "AND means overlap, OR means either, in interval notation",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Inequalities · intersections and unions",
  hero: `<span class="m"><span class="c2">−1 ≤ 2<i>x</i> + 3</span> <span class="c3">&lt; 9</span> &nbsp;⇔&nbsp; <span class="c1"><i>x</i> ∈ [−2, 3)</span></span>`,
  lede: `A compound inequality joins two inequalities with AND or OR. AND keeps only the numbers that satisfy both; OR keeps the numbers that satisfy at least one.`,
  plain: `<p>Many real limits come in pairs. A parcel must weigh more than 0 and at most 30 kg. A thermostat keeps a room between 68 and 72 °F. Each of these is really two inequalities at once, joined by AND. The numbers that work are the ones in the overlap, usually a stretch between two endpoints.</p>
<p>Other conditions are joined by OR. A discount might apply if you are under 12 or 65 or older. Here a number works if it satisfies either condition, so the solution is two separate pieces of the number line.</p>
<p><b>Interval notation</b> is a short way to write these sets. A square bracket means the endpoint is included, a parenthesis means it is not, and <span class="m">∞</span> always gets a parenthesis because it is not a number you can reach. So "at least −2 and less than 3" is <span class="m">[−2, 3)</span>. The symbol <span class="m">∪</span> ("union") joins pieces for OR.</p>`,
  formal: `<p>For inequalities with solution sets <span class="m"><i>S</i><sub>1</sub></span> and <span class="m"><i>S</i><sub>2</sub></span>, the <b>conjunction</b> "<span class="m"><i>P</i></span> and <span class="m"><i>Q</i></span>" has solution set <span class="m"><i>S</i><sub>1</sub> ∩ <i>S</i><sub>2</sub></span> (the <b>intersection</b>), and the <b>disjunction</b> "<span class="m"><i>P</i></span> or <span class="m"><i>Q</i></span>" has solution set <span class="m"><i>S</i><sub>1</sub> ∪ <i>S</i><sub>2</sub></span> (the <b>union</b>). The double inequality <span class="m"><i>a</i> &lt; <i>x</i> &lt; <i>b</i></span> means <span class="m"><i>a</i> &lt; <i>x</i></span> and <span class="m"><i>x</i> &lt; <i>b</i></span>.</p>
<div class="display">[<i>a</i>, <i>b</i>] = {<i>x</i> | <i>a</i> ≤ <i>x</i> ≤ <i>b</i>} &nbsp;&nbsp; (<i>a</i>, <i>b</i>) = {<i>x</i> | <i>a</i> &lt; <i>x</i> &lt; <i>b</i>}<br>[<i>a</i>, <i>b</i>) = {<i>x</i> | <i>a</i> ≤ <i>x</i> &lt; <i>b</i>} &nbsp;&nbsp; (−∞, <i>b</i>] = {<i>x</i> | <i>x</i> ≤ <i>b</i>} &nbsp;&nbsp; (<i>a</i>, ∞) = {<i>x</i> | <i>x</i> &gt; <i>a</i>}</div>
<p>A double inequality is solved by applying each operation to all three parts. Multiplying or dividing by a negative number reverses both inequality signs. An intersection can be empty, as in <span class="m"><i>x</i> &gt; 3</span> and <span class="m"><i>x</i> &lt; 2</span>, whose solution set is <span class="m">∅</span>; a union can be all of <span class="m">ℝ</span>, as in <span class="m"><i>x</i> &lt; 5</span> or <span class="m"><i>x</i> &gt; 1</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>S</i><sub>1</sub>`, name: "First inequality", desc: "The solution set of the first condition, shaded on the top number line." },
    { c: "c3", sym: `<i>S</i><sub>2</sub>`, name: "Second inequality", desc: "The solution set of the second condition, shaded on the middle number line." },
    { c: "c1", sym: `∩, ∪`, name: "Result", desc: "The overlap for AND, or everything shaded on either line for OR, written in interval notation." }
  ],
  steps: { title: "How to solve a compound inequality", items: [
    `Decide whether the conditions are joined by AND (both must hold) or OR (at least one must hold).`,
    `For a double inequality <span class="m"><i>a</i> &lt; <i>expression</i> &lt; <i>b</i></span>, do the same operation to all three parts until <span class="m"><i>x</i></span> is alone in the middle.`,
    `For two separate inequalities, solve each one on its own.`,
    `Whenever you multiply or divide by a negative number, reverse every inequality sign involved.`,
    `Graph <span class="c2">each solution set</span> on a number line, with a closed dot for ≤ or ≥ and an open dot for &lt; or &gt;.`,
    `Take the overlap for AND or the combined shading for OR, and write the <span class="c1">result</span> in interval notation. Check one number from the result in the original.`
  ] },
  example: {
    prompt: `Your test scores so far are 72, 85 and 79. A B in the course needs a four-test average of at least 80 and below 90. The final test is scored out of 100. What final scores give you a B?`,
    lines: [
      { math: `<span class="m">80 ≤ <span class="fr"><span>72 + 85 + 79 + <i>x</i></span><span>4</span></span> &lt; 90</span>`, note: "Let x be the final score. The average must be at least 80 and less than 90." },
      { math: `<span class="m">320 ≤ 236 + <i>x</i> &lt; 360</span>`, note: "Multiply all three parts by 4 and add the known scores." },
      { math: `<span class="m"><span class="c2">84 ≤ <i>x</i></span> <span class="c3">&lt; 124</span></span>`, note: "Subtract 236 from all three parts." },
      { math: `<span class="m">0 ≤ <i>x</i> ≤ 100</span>`, note: "A score must also be between 0 and 100." },
      { math: `<span class="m c1">[84, 124) ∩ [0, 100] = [84, 100]</span>`, note: "Both conditions must hold, so intersect the sets." },
      { math: `<span class="m">(236 + 84) ÷ 4 = 80 ✓</span>`, note: "Check the lowest score: it gives an average of exactly 80." }
    ],
    answer: `You need a final score in <span class="m">[84, 100]</span>, that is, at least 84.`
  },
  why: `<p>Specifications, safe ranges and eligibility rules are compound inequalities. Normal lab values, speed limits with minimums, tolerance bands in manufacturing, tax brackets and age-based pricing all describe a set of acceptable numbers that is an interval or a union of intervals.</p>
<p>Interval notation is the standard way to write domains, ranges and solution sets from here through calculus. The AND/OR logic of intersections and unions is also exactly the logic used in probability, databases and programming conditions.</p>`,
  careers: [
    { role: "Quality control technician", use: "Accepts parts only when a measurement lies inside a tolerance band such as 9.95 ≤ d ≤ 10.05 mm." },
    { role: "Nurse", use: "Flags lab values that fall outside a reference range, for example a fasting blood glucose outside 70 to 99 mg/dL." },
    { role: "Software developer", use: "Writes conditions with && and || that are compound inequalities, such as accepting an age only if it is at least 0 and under 130." },
    { role: "HVAC technician", use: "Sets a thermostat's comfort band and alarm thresholds as an interval of allowed temperatures." },
    { role: "Insurance underwriter", use: "Applies rate tables whose categories are intervals of age or risk score." },
    { role: "Pharmacist", use: "Checks that a drug's blood level lies within its therapeutic window, above the effective level and below the toxic level." }
  ],
  life: [
    "Working out what score you need on a final to land in a grade range",
    "Checking whether a suitcase is within an airline's weight limit",
    "Setting an oven or thermostat to stay within a temperature band",
    "Deciding who qualifies for a child or senior ticket price",
    "Reading the normal range printed next to a lab result"
  ],
  fields: [
    { name: "Engineering", use: "Tolerances and safe operating ranges are stated as intervals." },
    { name: "Medicine", use: "Reference ranges for tests and therapeutic windows for drugs are intervals of acceptable values." },
    { name: "Computer science", use: "Boolean conditions combining comparisons with AND and OR describe intersections and unions." },
    { name: "Statistics", use: "Confidence intervals are written in interval notation, such as (48.2, 53.8)." }
  ],
  prereqWhy: {
    "a1-multi-step": "Each part of a compound inequality is simplified with the same distribute-and-collect steps used for equations.",
    "pa-solve-ineq": "You need to solve a single linear inequality, including reversing the sign for a negative multiplier, before combining two."
  },
  unlocksWhy: {
    "a1-abs-ineq": "An absolute value inequality becomes a compound inequality: |x| &lt; k becomes an AND, and |x| &gt; k becomes an OR.",
    "a1-sys-ineq": "A system of inequalities in two variables is the two-dimensional version of AND, the region where both hold.",
    "g-logic": "AND and OR statements and their truth values are the start of conditional statements, negations and counterexamples.",
    "g-tri-inequality": "The possible third side of a triangle is the compound inequality |a − b| &lt; c &lt; a + b."
  },
  beyond: [
    { field: "Precalculus", why: "Domains, ranges and the solutions of polynomial and rational inequalities are written as unions of intervals." },
    { field: "Calculus I", why: "Intervals of increase, decrease and concavity, and the epsilon-delta definition of a limit, are stated with compound inequalities." },
    { field: "Statistics", why: "Confidence intervals and probabilities like P(a < X < b) are built on interval notation." }
  ],
  mistakes: [
    { wrong: `Flipping only one sign: from <span class="m">−7 &lt; 3 − 2<i>x</i> ≤ 5</span> writing <span class="m">5 &gt; <i>x</i> ≤ −1</span>.`, fix: `Dividing all three parts by −2 reverses both signs: <span class="m">5 &gt; <i>x</i> ≥ −1</span>, which is <span class="m">−1 ≤ <i>x</i> &lt; 5</span>, or <span class="m">[−1, 5)</span>.` },
    { wrong: `Writing an OR solution as a double inequality: "<span class="m"><i>x</i> &lt; −1</span> or <span class="m"><i>x</i> ≥ 4</span>" as <span class="m">4 ≤ <i>x</i> &lt; −1</span>.`, fix: `A double inequality means AND and must read in order from smaller to larger. Write the OR solution as <span class="m">(−∞, −1) ∪ [4, ∞)</span>.` },
    { wrong: `Putting a bracket on infinity: <span class="m">[3, ∞]</span>.`, fix: `Infinity is not a number that is included, so it always takes a parenthesis: <span class="m">[3, ∞)</span>.` }
  ],
  practice: [
    { q: `Write "<span class="m"><i>x</i> &gt; −2</span> and <span class="m"><i>x</i> ≤ 5</span>" in interval notation.`, a: `The overlap is <span class="m">−2 &lt; <i>x</i> ≤ 5</span>, which is <span class="m">(−2, 5]</span>.` },
    { q: `Solve <span class="m">2<i>x</i> + 1 &lt; −1</span> or <span class="m">3<i>x</i> ≥ 12</span>.`, a: `<span class="m"><i>x</i> &lt; −1</span> or <span class="m"><i>x</i> ≥ 4</span>, so the solution set is <span class="m">(−∞, −1) ∪ [4, ∞)</span>.` },
    { q: `Solve <span class="m">−7 &lt; 3 − 2<i>x</i> ≤ 5</span>.`, a: `Subtract 3: <span class="m">−10 &lt; −2<i>x</i> ≤ 2</span>. Divide by −2 and reverse both signs: <span class="m">5 &gt; <i>x</i> ≥ −1</span>. The solution set is <span class="m">[−1, 5)</span>.` },
    { q: `Solve <span class="m">2<i>x</i> + 1 &gt; 7</span> and <span class="m">3<i>x</i> − 4 &lt; 2</span>.`, a: `The first gives <span class="m"><i>x</i> &gt; 3</span> and the second gives <span class="m"><i>x</i> &lt; 2</span>. No number is both greater than 3 and less than 2, so the solution set is <span class="m">∅</span>.` }
  ],
  origin: `The symbols &lt; and &gt; first appeared in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published after his death in 1631. The symbols ≤ and ≥ were introduced by the French mathematician Pierre Bouguer in 1734.`
};
