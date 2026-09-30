window.ARITH = window.ARITH || {};

ARITH["pa-solve-ineq"] = {
  title: "Solving Linear Inequalities",
  short: "Solve like an equation, flip for a negative",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Inequalities · solution sets and interval notation",
  hero: `<span class="m">−2<i>x</i> + 5 &lt; 11 &nbsp;⇒&nbsp; −2<i>x</i> &lt; 6 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> <span class="c3">&gt;</span> <span class="c1">−3</span></span></span>`,
  lede: `A linear inequality is solved with the same steps as an equation, with one extra rule: multiplying or dividing both sides by a negative number <span class="m c3">reverses the inequality sign</span>. The answer is a whole <span class="m c2">set of numbers</span> on one side of a <span class="m c1">boundary</span>.`,
  plain: `<p>An equation like <span class="m">3<i>x</i> − 7 = 8</span> has one answer. An inequality like <span class="m">3<i>x</i> − 7 ≤ 8</span> has many: every number up to and including 5. You solve it the same way. Add 7 to both sides, then divide by 3, and you get <span class="m"><i>x</i> ≤ 5</span>.</p>
<p>There is one trap. Start with <span class="m">2 &lt; 5</span>, which is true. Multiply both sides by −1 and you get −2 and −5. But −2 is bigger than −5, so the sign has to turn around: <span class="m">−2 &gt; −5</span>. Whenever you multiply or divide both sides by a negative number, flip the inequality sign.</p>
<p>You show the answer on a number line. The boundary point gets an open circle if it is not included (for <span class="m">&lt;</span> or <span class="m">&gt;</span>) and a filled dot if it is (for <span class="m">≤</span> or <span class="m">≥</span>). Then you shade the side where the numbers work.</p>`,
  formal: `<p>A <b>linear inequality</b> in one variable can be written as <span class="m"><i>ax</i> + <i>b</i> &lt; <i>c</i></span> (or with <span class="m">≤, &gt;, ≥</span>), <span class="m"><i>a</i> ≠ 0</span>. Its <b>solution set</b> is the set of all real numbers that make it true. Equivalent inequalities are produced by these properties, for real <span class="m"><i>A</i>, <i>B</i>, <i>k</i></span>:</p>
<div class="display"><b>Addition/Subtraction:</b> <i>A</i> &lt; <i>B</i> ⇔ <i>A</i> ± <i>k</i> &lt; <i>B</i> ± <i>k</i><br><b>Multiplication/Division, <i>k</i> &gt; 0:</b> <i>A</i> &lt; <i>B</i> ⇔ <i>kA</i> &lt; <i>kB</i> ⇔ <i>A</i>/<i>k</i> &lt; <i>B</i>/<i>k</i><br><b>Multiplication/Division, <i>k</i> &lt; 0:</b> <i>A</i> &lt; <i>B</i> ⇔ <i>kA</i> <span class="c3">&gt;</span> <i>kB</i> ⇔ <i>A</i>/<i>k</i> <span class="c3">&gt;</span> <i>B</i>/<i>k</i></div>
<p>The solution set is written in <b>set-builder notation</b>, such as <span class="m">{<i>x</i> | <i>x</i> &gt; −3}</span>, or in <b>interval notation</b>, such as <span class="m">(−3, ∞)</span>. A parenthesis marks an excluded endpoint and a bracket an included one; <span class="m">∞</span> and <span class="m">−∞</span> always take parentheses. If the variable cancels, the inequality is either true for every real number (solution set <span class="m">ℝ = (−∞, ∞)</span>) or for none (solution set <span class="m">∅</span>).</p>`,
  legend: [
    { c: "c1", sym: `−3`, name: "Boundary point", desc: "The number where the two sides are equal. It is an open circle for &lt; or &gt; and a closed dot for ≤ or ≥." },
    { c: "c2", sym: `<i>x</i> &gt; −3`, name: "Solution set", desc: "All the numbers that make the inequality true, shaded on the number line and written as an interval." },
    { c: "c3", sym: `&lt; → &gt;`, name: "Sign flip", desc: "The inequality reverses when both sides are multiplied or divided by a negative number." }
  ],
  steps: { title: "How to solve a linear inequality", items: [
    `Simplify each side: distribute and combine like terms.`,
    `Collect the variable terms on one side and the constants on the other, using addition and subtraction. The sign does not change.`,
    `Divide both sides by the coefficient of <span class="m"><i>x</i></span>. If that coefficient is negative, <span class="m c3">reverse the inequality sign</span>.`,
    `Graph the solution on a number line: open circle or closed dot at the <span class="m c1">boundary</span>, then shade the <span class="m c2">solution side</span>.`,
    `Write the answer in interval notation, and test one shaded number in the original inequality.`
  ] },
  example: {
    prompt: `A moving truck costs $30 plus $0.75 per mile. Your budget is at most $90. How many miles can you drive?`,
    lines: [
      { math: `<span class="m">Let <i>m</i> = miles driven</span>`, note: "Name the unknown." },
      { math: `<span class="m">30 + 0.75<i>m</i> ≤ 90</span>`, note: "The cost must be less than or equal to the budget." },
      { math: `<span class="m">0.75<i>m</i> ≤ 60</span>`, note: "Subtract 30 from both sides." },
      { math: `<span class="m"><i>m</i> ≤ <span class="c1">80</span></span>`, note: "Divide both sides by 0.75. It is positive, so the sign stays the same." },
      { math: `<span class="m">30 + 0.75(80) = 90, &nbsp;30 + 0.75(40) = 60 ≤ 90 ✓</span>`, note: "Check: the boundary gives exactly 90 dollars and a test value inside the set fits the budget." },
      { math: `<span class="m c2">[0, 80]</span>`, note: "Distance cannot be negative, so in context the answer runs from 0 to 80 miles." }
    ],
    answer: `You can drive up to <span class="m">80</span> miles.`
  },
  why: `<p>Real limits are usually inequalities, not equations. A budget says "at most", a speed limit says "no more than", a passing grade says "at least", and a safe dose says "no more than so many milligrams". Solving the inequality tells you the whole range of choices that stay within the limit.</p>
<p>Inequalities are also the language of later math. Domains of functions, tolerances in engineering, constraints in optimisation and error bounds in calculus are all written as inequalities and intervals.</p>`,
  careers: [
    { role: "Nurse", use: "Checks that a total daily dose stays at or below a maximum, such as 4,000 mg of acetaminophen for an adult, when planning dose times." },
    { role: "Structural engineer", use: "Verifies that the load on a beam is at most its rated capacity divided by a safety factor." },
    { role: "Operations manager", use: "Finds the minimum number of units that must be sold for revenue to be at least total cost." },
    { role: "Truck driver", use: "Keeps gross vehicle weight at or below 80,000 lb on US Interstates by limiting cargo weight." },
    { role: "Pharmacist", use: "Confirms that a compounded concentration falls within an allowed range before dispensing." },
    { role: "Quality control inspector", use: "Accepts a part only if its measurement lies within a tolerance such as 25.00 ± 0.05 mm." }
  ],
  life: [
    "Working out how many items you can buy and stay under a budget",
    "Finding the score you need on a final exam to pass a course",
    "Staying within a phone plan's data limit",
    "Planning how many miles you can drive on the fuel you have",
    "Checking that a suitcase stays under an airline's weight limit"
  ],
  fields: [
    { name: "Economics", use: "Budget constraints and break-even conditions are written as linear inequalities." },
    { name: "Engineering", use: "Design constraints and tolerances state that a quantity must stay above or below a limit." },
    { name: "Operations research", use: "Linear programming optimises a cost subject to a system of linear inequality constraints." },
    { name: "Pharmacology", use: "A therapeutic window is the range of drug concentrations above the effective level and below the toxic level." }
  ],
  prereqWhy: {
    "pa-inequalities": "You need to read inequality symbols, graph a boundary with an open or closed circle, and shade a solution set.",
    "pa-two-step": "Solving ax + b &lt; c uses the same two inverse steps as ax + b = c."
  },
  unlocksWhy: {
    "a1-compound": "Compound inequalities join two linear inequalities with AND or OR, and each part is solved this way."
  },
  beyond: [
    { field: "Algebra I", why: "Systems of linear inequalities, graphed as half-planes, extend one-variable solution sets to two variables." },
    { field: "Precalculus", why: "Polynomial and rational inequalities are solved with sign charts built on the same boundary-and-test idea." },
    { field: "Calculus I", why: "Limits, continuity and error bounds are defined with inequalities such as |x − a| < δ." },
    { field: "Operations research", why: "Linear programming finds the best point in a region defined by many linear inequalities." }
  ],
  mistakes: [
    { wrong: `Forgetting to flip: from <span class="m">−2<i>x</i> &lt; 6</span> writing <span class="m"><i>x</i> &lt; −3</span>.`, fix: `Dividing by −2 reverses the sign: <span class="m"><i>x</i> &gt; −3</span>. Test <span class="m"><i>x</i> = 0</span>: <span class="m">0 &lt; 6</span> is true, and 0 is greater than −3.` },
    { wrong: `Flipping when the constant is negative: from <span class="m">3<i>x</i> &gt; −12</span> writing <span class="m"><i>x</i> &lt; −4</span>.`, fix: `Only the sign of the number you divide by matters. Dividing by 3 (positive) keeps the sign: <span class="m"><i>x</i> &gt; −4</span>.` },
    { wrong: `Writing <span class="m"><i>x</i> ≤ 5</span> as <span class="m">(−∞, 5)</span> or <span class="m">[−∞, 5]</span>.`, fix: `The endpoint 5 is included, so use a bracket, and infinity always gets a parenthesis: <span class="m">(−∞, 5]</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">3<i>x</i> − 7 ≤ 8</span>. Write the answer in interval notation.`, a: `<span class="m">3<i>x</i> ≤ 15</span>, so <span class="m"><i>x</i> ≤ 5</span>. Interval: <span class="m">(−∞, 5]</span>.` },
    { q: `Solve <span class="m">5 − 2<i>x</i> ≥ 11</span>.`, a: `<span class="m">−2<i>x</i> ≥ 6</span>. Divide by −2 and flip: <span class="m"><i>x</i> ≤ −3</span>. Interval: <span class="m">(−∞, −3]</span>. Test <span class="m"><i>x</i> = −4</span>: <span class="m">5 + 8 = 13 ≥ 11</span>.` },
    { q: `Solve <span class="m">2(3 − <i>x</i>) ≥ 4<i>x</i> + 18</span>.`, a: `<span class="m">6 − 2<i>x</i> ≥ 4<i>x</i> + 18</span>. Subtract <span class="m">4<i>x</i></span> and 6: <span class="m">−6<i>x</i> ≥ 12</span>. Divide by −6 and flip: <span class="m"><i>x</i> ≤ −2</span>, so <span class="m">(−∞, −2]</span>.` },
    { q: `Solve <span class="m">3(<i>x</i> + 2) &gt; 3<i>x</i> + 8</span>.`, a: `<span class="m">3<i>x</i> + 6 &gt; 3<i>x</i> + 8</span>. Subtract <span class="m">3<i>x</i></span>: <span class="m">6 &gt; 8</span>, which is false. No real number works; the solution set is <span class="m">∅</span>.` }
  ],
  origin: `The symbols &lt; and &gt; first appeared in print in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631, ten years after his death. The symbols for "less than or equal to" and "greater than or equal to" are usually credited to the French mathematician Pierre Bouguer, who used them in 1734.`
};
