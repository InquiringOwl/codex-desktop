window.ARITH = window.ARITH || {};

ARITH["pa-inequalities"] = {
  title: "Inequalities & Their Graphs",
  short: "Solution sets on the number line and in interval notation",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Inequalities · graphs and interval notation",
  hero: `<span class="m"><i>x</i> ≤ <span class="c1">3</span> &nbsp;⇔&nbsp; <span class="c2">(−∞, <span class="c1">3</span>]</span></span>`,
  lede: `An inequality has many solutions, usually infinitely many. On a number line they form a shaded <span class="m c2">solution set</span> that starts at a <span class="m c1">boundary point</span>.`,
  plain: `<p>A sign on a ride says "You must be at least 48 inches tall." That rule is an <b>inequality</b>: height ≥ 48. A child who is 48 inches can ride, so can one who is 50 or 52.5. There is no single answer. The answer is every number from 48 upward.</p>
<p>We draw that on a number line. Put a dot at the <b>boundary</b>, 48, and shade everything to the right. The dot is <b>filled in</b> (closed) because 48 itself counts. If the rule were "taller than 48", 48 would not count, and we would draw an <b>open</b> circle.</p>
<p>The four symbols are: <span class="m">&lt;</span> less than, <span class="m">&gt;</span> greater than, <span class="m">≤</span> less than or equal to, <span class="m">≥</span> greater than or equal to. The pointy end always points to the smaller number.</p>`,
  formal: `<p>An <b>inequality</b> is a statement that two expressions are related by <span class="m">&lt;</span>, <span class="m">&gt;</span>, <span class="m">≤</span> or <span class="m">≥</span>. Its <b>solution set</b> is the set of all values that make it true. For a linear inequality in one variable, the solution set is usually an interval such as the ones below, described in three equivalent ways:</p>
<div class="display"><i>x</i> &gt; <i>a</i> &nbsp; {<i>x</i> | <i>x</i> &gt; <i>a</i>} &nbsp; (<i>a</i>, ∞) &nbsp;<span class="dim">open circle at <i>a</i>, shade right</span><br><i>x</i> ≥ <i>a</i> &nbsp; {<i>x</i> | <i>x</i> ≥ <i>a</i>} &nbsp; [<i>a</i>, ∞) &nbsp;<span class="dim">closed circle at <i>a</i>, shade right</span><br><i>x</i> &lt; <i>a</i> &nbsp; {<i>x</i> | <i>x</i> &lt; <i>a</i>} &nbsp; (−∞, <i>a</i>) &nbsp;<span class="dim">open circle, shade left</span><br><i>x</i> ≤ <i>a</i> &nbsp; {<i>x</i> | <i>x</i> ≤ <i>a</i>} &nbsp; (−∞, <i>a</i>] &nbsp;<span class="dim">closed circle, shade left</span></div>
<p>In <b>interval notation</b>, a parenthesis means the endpoint is excluded and a bracket means it is included. The symbols ∞ and −∞ are not real numbers, so they always take a parenthesis. The statement <span class="m"><i>a</i> &lt; <i>x</i></span> is equivalent to <span class="m"><i>x</i> &gt; <i>a</i></span>, and the double inequality <span class="m"><i>a</i> &lt; <i>x</i> ≤ <i>b</i></span> describes the bounded interval <span class="m">(<i>a</i>, <i>b</i>]</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Boundary point", desc: "Where the solution set starts. Closed circle if included (≤, ≥), open circle if not (&lt;, &gt;)." },
    { c: "c2", sym: `(−∞, <i>a</i>]`, name: "Solution set", desc: "Every number that makes the inequality true, shaded on the number line." },
    { c: "c3", sym: `<i>t</i>`, name: "Test point", desc: "Any single value you substitute to check whether it lies in the solution set." }
  ],
  steps: { title: "How to graph an inequality and write its interval", items: [
    `If the variable is on the right, rewrite so it is on the left, turning the symbol around: <span class="m">5 &gt; <i>x</i></span> becomes <span class="m"><i>x</i> &lt; 5</span>.`,
    `Mark the <span class="c1">boundary point</span> on the number line.`,
    `Use a closed circle for ≤ or ≥ and an open circle for &lt; or &gt;.`,
    `Shade right for &gt; or ≥, left for &lt; or ≤.`,
    `Write the interval from left to right, with a bracket for an included endpoint, a parenthesis for an excluded one, and always a parenthesis at ±∞.`,
    `Check with a <span class="c3">test point</span> in the shaded region and one outside it.`
  ] },
  example: {
    prompt: `Food safety guidance says a freezer should stay at or below −18 °C. Write this as an inequality, graph it, give the interval, and decide whether readings of −20 °C and −15 °C are safe.`,
    lines: [
      { math: `<span class="m"><i>t</i> ≤ <span class="c1">−18</span></span>`, note: "\"At or below\" means less than or equal to." },
      { math: `<span class="m">closed circle at <span class="c1">−18</span>, shade left</span>`, note: "−18 itself is allowed, and colder means further left." },
      { math: `<span class="m c2">(−∞, −18]</span>`, note: "Bracket at −18 because it is included; parenthesis at −∞." },
      { math: `<span class="m"><span class="c3">−20</span> ≤ −18</span>`, note: "True: −20 is to the left of −18, so −20 °C is safe." },
      { math: `<span class="m"><span class="c3">−15</span> ≤ −18</span>`, note: "False: −15 is to the right of −18, so −15 °C is too warm." }
    ],
    answer: `The rule is <span class="m"><i>t</i> ≤ −18</span>, or <span class="m">(−∞, −18]</span>. −20 °C is safe and −15 °C is not.`
  },
  why: `<p>Many real rules are limits, not exact values: a speed limit, a weight limit on a bridge, a minimum age, a budget ceiling, a safe temperature range. Inequalities state those rules precisely, and their graphs show at a glance which values are allowed.</p>
<p>Interval notation is the standard language for sets of real numbers. It is used to state domains and ranges of functions, answers to inequalities, and where a graph is increasing or decreasing in later courses.</p>`,
  careers: [
    { role: "Food safety inspector", use: "Checks that cold-holding temperatures satisfy t ≤ 5 °C (41 °F) and hot-holding temperatures satisfy t ≥ 57 °C (135 °F)." },
    { role: "Civil engineer", use: "Designs so that the load on a member stays at or below its rated capacity." },
    { role: "Pharmacist", use: "Confirms that a dose falls within the safe range between a minimum effective and a maximum safe amount." },
    { role: "Quality-control technician", use: "Accepts a part only if its measurement lies in a tolerance interval such as [9.95, 10.05] mm." },
    { role: "Financial planner", use: "Sets spending so that monthly expenses stay at or below net income." }
  ],
  life: [
    "Reading a speed limit as speed ≤ 65",
    "Checking a minimum age such as at least 18 to vote",
    "Keeping luggage within an airline weight limit",
    "Staying under a monthly data or spending cap"
  ],
  fields: [
    { name: "Engineering", use: "Safety factors and tolerances are expressed as inequalities that designs must satisfy." },
    { name: "Economics", use: "Budget constraints are inequalities limiting what a consumer can buy." },
    { name: "Computer science", use: "Conditions in code such as if (x <= limit) are inequalities that control program flow." }
  ],
  prereqWhy: {
    "pa-equations": "An inequality's solution set extends the idea of an equation's solution set, and both are checked by substitution.",
    "number-line": "Solution sets are graphed on the number line, and deciding which of two numbers is smaller is ordering on that line."
  },
  unlocksWhy: {
    "pa-solve-ineq": "Solving linear inequalities produces solution sets that are graphed and written in the interval notation learned here."
  },
  beyond: [
    { field: "Algebra I", why: "Compound, absolute-value and two-variable inequalities all describe their solutions with intervals and shaded regions." },
    { field: "Precalculus", why: "Domains, ranges and intervals of increase or decrease are written in interval notation." },
    { field: "Calculus I", why: "Limits are defined with inequalities, and intervals are where functions are continuous or differentiable." },
    { field: "Economics", why: "Linear programming maximises profit subject to a system of inequality constraints." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m">5 &gt; <i>x</i></span> as "x is greater than 5".`, fix: `Read it from <span class="m"><i>x</i></span>'s side: <span class="m"><i>x</i> &lt; 5</span>, "x is less than 5".` },
    { wrong: `Writing <span class="m">[3, ∞]</span>.`, fix: `∞ is not a number and is never included: <span class="m">[3, ∞)</span>.` },
    { wrong: `Using a closed circle for <span class="m"><i>x</i> &gt; −2</span>.`, fix: `&gt; excludes the boundary, so the circle at −2 is open and the interval is <span class="m">(−2, ∞)</span>.` },
    { wrong: `Translating "at most 40" as <span class="m"><i>x</i> ≥ 40</span>.`, fix: `"At most" means no more than: <span class="m"><i>x</i> ≤ 40</span>. "At least" means <span class="m">≥</span>.` }
  ],
  practice: [
    { q: `Write <span class="m"><i>x</i> &gt; −2</span> in interval notation and describe its graph.`, a: `<span class="m">(−2, ∞)</span>: open circle at −2, shaded to the right.` },
    { q: `A driver must be at least 16 years old. Write an inequality for the age <span class="m"><i>a</i></span> and its interval.`, a: `<span class="m"><i>a</i> ≥ 16</span>, <span class="m">[16, ∞)</span>.` },
    { q: `Is <span class="m"><i>x</i> = 4</span> a solution of <span class="m">3<i>x</i> − 5 ≤ 7</span>? Is <span class="m"><i>x</i> = 5</span>?`, a: `<span class="m">3(4) − 5 = 7</span> and <span class="m">7 ≤ 7</span> is true, so 4 is a solution. <span class="m">3(5) − 5 = 10</span> and <span class="m">10 ≤ 7</span> is false, so 5 is not.` },
    { q: `Write "all numbers greater than −1 and at most 5" as a double inequality, in interval notation and in set-builder notation.`, a: `<span class="m">−1 &lt; <i>x</i> ≤ 5</span>, <span class="m">(−1, 5]</span>, <span class="m">{<i>x</i> | −1 &lt; <i>x</i> ≤ 5}</span>.` }
  ],
  origin: `The symbols &lt; and &gt; first appeared in print in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631, ten years after his death. The symbols for "less than or equal to" and "greater than or equal to", in the form ≦ and ≧, are usually credited to the French mathematician Pierre Bouguer (1734).`
};
