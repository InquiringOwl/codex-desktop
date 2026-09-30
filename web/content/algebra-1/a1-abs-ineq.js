window.ARITH = window.ARITH || {};

ARITH["a1-abs-ineq"] = {
  title: "Absolute Value Inequalities",
  short: "Less than means between; greater than means outside",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Inequalities · distance from a centre",
  hero: `<span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| &lt; <span class="c3"><i>k</i></span> &nbsp;⇔&nbsp; <span class="c1"><i>h</i> − <i>k</i> &lt; <i>x</i> &lt; <i>h</i> + <i>k</i></span></span>`,
  lede: `<span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| &lt; <span class="c3"><i>k</i></span></span> says <span class="m"><i>x</i></span> is within <span class="m c3"><i>k</i></span> of the centre, an interval between two points. <span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| &gt; <span class="c3"><i>k</i></span></span> says it is farther than <span class="m c3"><i>k</i></span> away, the two rays outside.`,
  plain: `<p>Think of absolute value as distance. <span class="m">|<i>x</i> − 10| &lt; 3</span> asks for the numbers less than 3 units from 10. Those are the numbers between 7 and 13. So a "less than" absolute value inequality becomes a single double inequality, <span class="m">7 &lt; <i>x</i> &lt; 13</span>. This is an AND situation.</p>
<p><span class="m">|<i>x</i> − 10| &gt; 3</span> asks for the numbers more than 3 units from 10. Those lie to the left of 7 or to the right of 13, two separate pieces. A "greater than" absolute value inequality becomes an OR: <span class="m"><i>x</i> &lt; 7</span> or <span class="m"><i>x</i> &gt; 13</span>.</p>
<p>A short way to remember it: "less thAND" and "greatOR". As with equations, first get the absolute value alone. If the number on the other side is negative, think about distance: a distance is never less than a negative number, and always greater than one.</p>`,
  formal: `<p>For an expression <span class="m"><i>u</i></span> and a real number <span class="m"><i>k</i> &gt; 0</span>:</p>
<div class="display">|<i>u</i>| &lt; <i>k</i> &nbsp;⇔&nbsp; −<i>k</i> &lt; <i>u</i> &lt; <i>k</i> &nbsp;<span class="dim">(and similarly with ≤)</span><br>|<i>u</i>| &gt; <i>k</i> &nbsp;⇔&nbsp; <i>u</i> &lt; −<i>k</i> &nbsp;or&nbsp; <i>u</i> &gt; <i>k</i> &nbsp;<span class="dim">(and similarly with ≥)</span></div>
<p>In particular <span class="m">|<i>x</i> − <i>h</i>| &lt; <i>k</i></span> has solution set <span class="m">(<i>h</i> − <i>k</i>, <i>h</i> + <i>k</i>)</span>, an interval of <b>radius</b> <span class="m"><i>k</i></span> about the <b>centre</b> <span class="m"><i>h</i></span>, and <span class="m">|<i>x</i> − <i>h</i>| &gt; <i>k</i></span> has solution set <span class="m">(−∞, <i>h</i> − <i>k</i>) ∪ (<i>h</i> + <i>k</i>, ∞)</span>. For <span class="m"><i>k</i> &lt; 0</span>, <span class="m">|<i>u</i>| &lt; <i>k</i></span> has solution set <span class="m">∅</span> and <span class="m">|<i>u</i>| &gt; <i>k</i></span> holds for every <span class="m"><i>x</i></span> in the domain of <span class="m"><i>u</i></span>. For <span class="m"><i>k</i> = 0</span>, <span class="m">|<i>u</i>| &lt; 0</span> has no solution and <span class="m">|<i>u</i>| &gt; 0</span> holds wherever <span class="m"><i>u</i> ≠ 0</span>.</p>`,
  legend: [
    { c: "c4", sym: `<i>h</i>`, name: "Centre", desc: "The target value that distances are measured from." },
    { c: "c3", sym: `<i>k</i>`, name: "Radius", desc: "The allowed or forbidden distance from the centre, also called the tolerance." },
    { c: "c1", sym: `(<i>h</i> − <i>k</i>, <i>h</i> + <i>k</i>)`, name: "Solution set", desc: "The interval between h − k and h + k for 'less than', or the two rays outside it for 'greater than'." }
  ],
  steps: { title: "How to solve an absolute value inequality", items: [
    `Isolate the absolute value on one side. If you multiply or divide by a negative, reverse the inequality.`,
    `Look at the other side. If it is negative or zero, decide the answer by distance reasoning: ∅, all reals, or all reals except one point.`,
    `For <span class="m">|<i>u</i>| &lt; <i>k</i></span> or <span class="m">≤</span>, write the AND form <span class="m">−<i>k</i> &lt; <i>u</i> &lt; <i>k</i></span> and solve all three parts together.`,
    `For <span class="m">|<i>u</i>| &gt; <i>k</i></span> or <span class="m">≥</span>, write the OR form <span class="m"><i>u</i> &lt; −<i>k</i></span> or <span class="m"><i>u</i> &gt; <i>k</i></span> and solve each part.`,
    `Graph the result and write it in interval notation, using brackets for ≤ and ≥.`,
    `Test one number inside and one outside the <span class="c1">solution set</span> in the original inequality.`
  ] },
  example: {
    prompt: `A machine fills bottles labelled 500 mL. A bottle passes inspection if its volume is within 1.5% of the label. Write and solve an absolute value inequality for the acceptable volumes.`,
    lines: [
      { math: `<span class="m">0.015 × 500 = 7.5</span>`, note: "The tolerance is 1.5% of 500 mL, which is 7.5 mL." },
      { math: `<span class="m">|<i>v</i> − <span class="c4">500</span>| ≤ <span class="c3">7.5</span></span>`, note: "The volume v must be at most 7.5 mL from 500 mL." },
      { math: `<span class="m">−7.5 ≤ <i>v</i> − 500 ≤ 7.5</span>`, note: "A 'less than or equal' absolute value becomes a double inequality." },
      { math: `<span class="m c1">492.5 ≤ <i>v</i> ≤ 507.5</span>`, note: "Add 500 to all three parts." },
      { math: `<span class="m">|495 − 500| = 5 ≤ 7.5 ✓, &nbsp; |510 − 500| = 10 &gt; 7.5 ✗</span>`, note: "A 495 mL bottle passes; a 510 mL bottle fails." }
    ],
    answer: `Acceptable volumes are <span class="m">[492.5, 507.5]</span> mL.`
  },
  why: `<p>Whenever something must be close to a target, the condition is an absolute value inequality: a part within tolerance, a measurement within its margin of error, a temperature within a few degrees of a setpoint. The "greater than" version describes what is out of range, such as readings that should trigger an alarm.</p>
<p>These inequalities are also how mathematicians say "close to" precisely. The definitions of limits and continuity in calculus are written as <span class="m">|<i>x</i> − <i>a</i>| &lt; <i>δ</i></span> and <span class="m">|<i>f</i>(<i>x</i>) − <i>L</i>| &lt; <i>ε</i></span>.</p>`,
  careers: [
    { role: "Quality control inspector", use: "Accepts a part only if |measured − nominal| ≤ tolerance, and rejects it otherwise." },
    { role: "Pollster", use: "Reports that the true proportion p satisfies |p − p̂| ≤ margin of error, an interval around the sample estimate." },
    { role: "Process engineer", use: "Sets alarm limits so a sensor triggers when |reading − setpoint| exceeds a threshold." },
    { role: "Clinical lab scientist", use: "Checks that a control sample's result lies within an allowed distance of its known value before running patient samples." },
    { role: "Machinist", use: "Converts a drawing's ±0.002 in tolerance into the interval of acceptable dimensions." }
  ],
  life: [
    "Knowing a room thermostat keeps the temperature within 2 degrees of its setting",
    "Reading a poll result with a margin of error as a range",
    "Checking whether a bag of produce is within the stated weight tolerance",
    "Setting a budget that allows spending within $50 of a target",
    "Deciding whether a guess in a game is close enough to count"
  ],
  fields: [
    { name: "Engineering", use: "Tolerance specifications are absolute value inequalities around nominal dimensions." },
    { name: "Statistics", use: "Confidence intervals have the form |parameter − estimate| ≤ margin of error." },
    { name: "Computer science", use: "Floating-point comparisons test |a − b| < ε instead of exact equality." }
  ],
  prereqWhy: {
    "a1-abs-eq": "The solutions of |u| = k are the boundary points of the inequality, and the idea of absolute value as distance carries over.",
    "a1-compound": "The inequality is rewritten as an AND or an OR compound inequality and the answer is written in interval notation."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "The epsilon-delta definition of a limit uses |x − a| < δ and |f(x) − L| < ε." },
    { field: "Statistics", why: "Confidence intervals and tolerance intervals are stated as absolute value inequalities." },
    { field: "Numerical Analysis", why: "Error bounds such as |approximation − true value| < tolerance decide when an algorithm has converged." }
  ],
  mistakes: [
    { wrong: `Writing a "greater than" as a double inequality: <span class="m">|<i>x</i> − 3| ≥ 2</span> as <span class="m">−2 ≥ <i>x</i> − 3 ≥ 2</span>.`, fix: `"Greater than" means outside, so use OR: <span class="m"><i>x</i> − 3 ≤ −2</span> or <span class="m"><i>x</i> − 3 ≥ 2</span>, giving <span class="m">(−∞, 1] ∪ [5, ∞)</span>.` },
    { wrong: `Forgetting to isolate: from <span class="m">|2<i>x</i> + 1| − 3 &lt; 6</span> writing <span class="m">−6 &lt; 2<i>x</i> + 1 − 3 &lt; 6</span>.`, fix: `Add 3 first: <span class="m">|2<i>x</i> + 1| &lt; 9</span>, then <span class="m">−9 &lt; 2<i>x</i> + 1 &lt; 9</span>.` },
    { wrong: `Answering <span class="m">|<i>x</i> + 2| ≥ −1</span> with ∅ because the right side is negative.`, fix: `An absolute value is always at least 0, which is greater than −1, so every real number works: the solution set is <span class="m">ℝ</span>. It is <span class="m">|<i>x</i> + 2| &lt; −1</span> that has no solution.` }
  ],
  practice: [
    { q: `Solve <span class="m">|<i>x</i>| &lt; 4</span>.`, a: `<span class="m">−4 &lt; <i>x</i> &lt; 4</span>, so the solution set is <span class="m">(−4, 4)</span>.` },
    { q: `Solve <span class="m">|<i>x</i> − 3| ≥ 2</span>.`, a: `<span class="m"><i>x</i> − 3 ≤ −2</span> or <span class="m"><i>x</i> − 3 ≥ 2</span>, so <span class="m"><i>x</i> ≤ 1</span> or <span class="m"><i>x</i> ≥ 5</span>: <span class="m">(−∞, 1] ∪ [5, ∞)</span>.` },
    { q: `Solve <span class="m">|2<i>x</i> + 1| − 3 &lt; 6</span>.`, a: `<span class="m">|2<i>x</i> + 1| &lt; 9</span>, so <span class="m">−9 &lt; 2<i>x</i> + 1 &lt; 9</span>, <span class="m">−10 &lt; 2<i>x</i> &lt; 8</span>, <span class="m">−5 &lt; <i>x</i> &lt; 4</span>. Solution set <span class="m">(−5, 4)</span>.` },
    { q: `Solve (a) <span class="m">|<i>x</i> + 2| &lt; −1</span> and (b) <span class="m">|<i>x</i> + 2| ≥ −1</span>.`, a: `(a) A distance cannot be less than a negative number: <span class="m">∅</span>. (b) A distance is always at least 0, so it is always at least −1: <span class="m">ℝ</span>, or <span class="m">(−∞, ∞)</span>.` }
  ]
};
