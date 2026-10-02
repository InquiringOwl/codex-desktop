window.ARITH = window.ARITH || {};

ARITH["a2-poly-ineq"] = {
  title: "Polynomial Inequalities",
  short: "Zeros split the line; a sign chart picks the intervals",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomial functions · sign charts",
  hero: `<span class="m"><span class="c1">(<i>x</i> + 2)(<i>x</i> − 3)</span> &gt; 0 &nbsp;⇒&nbsp; <span class="c5">(−∞, <span class="c2">−2</span>) ∪ (<span class="c2">3</span>, ∞)</span></span>`,
  lede: `To solve a polynomial inequality, put 0 on one side and find the <span class="c2">zeros</span> of the <span class="c1">polynomial</span>. They split the number line into intervals, and on each interval the sign is either <span class="c5">positive</span> or <span class="c3">negative</span> all the way across.`,
  plain: `<p>An inequality like <span class="m"><i>x</i><sup>2</sup> − <i>x</i> − 6 &gt; 0</span> asks where a polynomial is positive. Its graph answers at a glance: the solution is every <span class="m"><i>x</i></span> where the curve is above the <span class="m"><i>x</i></span>-axis.</p>
<p>You don't need the whole graph, only the places where it can switch sides. A polynomial can only change sign at a <span class="c2">zero</span>, because its graph is one unbroken curve. Factor: <span class="m"><i>x</i><sup>2</sup> − <i>x</i> − 6 = (<i>x</i> + 2)(<i>x</i> − 3)</span>, with zeros <span class="m c2">−2</span> and <span class="m c2">3</span>. Those two points cut the line into three intervals.</p>
<p>Test one number in each interval. <span class="m"><i>x</i> = −3</span> gives <span class="m">6</span>, <span class="c5">positive</span>. <span class="m"><i>x</i> = 0</span> gives <span class="m">−6</span>, <span class="c3">negative</span>. <span class="m"><i>x</i> = 4</span> gives <span class="m">6</span>, <span class="c5">positive</span>. So the polynomial is positive left of <span class="m">−2</span> and right of <span class="m">3</span>. The zeros themselves give 0, which is not greater than 0, so they stay out.</p>`,
  formal: `<p>A <b>polynomial inequality</b> can be written <span class="m"><i>P</i>(<i>x</i>) &gt; 0</span>, <span class="m">≥ 0</span>, <span class="m">&lt; 0</span> or <span class="m">≤ 0</span>, where <span class="m"><i>P</i></span> is a polynomial. Its real zeros are the <b>boundary points</b> (critical values). Because a polynomial is continuous, it has one constant sign on each open interval between consecutive real zeros (Intermediate Value Theorem). It changes sign at a zero of odd multiplicity and keeps its sign at a zero of even multiplicity. For <span class="m">&gt;</span> and <span class="m">&lt;</span> the boundary points are excluded; for <span class="m">≥</span> and <span class="m">≤</span> they are included.</p>
<p><b>Quadratic inequalities.</b> Let <span class="m"><i>a</i> &gt; 0</span> and let <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> have real zeros <span class="m"><i>r</i><sub>1</sub> &lt; <i>r</i><sub>2</sub></span>. It is negative between the zeros and positive outside them:</p>
<div class="display"><span class="c1"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> <span class="c3">&lt; 0</span> &nbsp;⇔&nbsp; <i>x</i> ∈ (<span class="c2"><i>r</i><sub>1</sub></span>, <span class="c2"><i>r</i><sub>2</sub></span>) &nbsp;&nbsp;&nbsp; <span class="c1"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> <span class="c5">&gt; 0</span> &nbsp;⇔&nbsp; <i>x</i> ∈ (−∞, <span class="c2"><i>r</i><sub>1</sub></span>) ∪ (<span class="c2"><i>r</i><sub>2</sub></span>, ∞)</div>
<p>If <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i> &lt; 0</span> and <span class="m"><i>a</i> &gt; 0</span>, the quadratic is positive for every real <span class="m"><i>x</i></span>. For example <span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 5</span> has discriminant <span class="m">−16</span>, so <span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 5 &gt; 0</span> has solution set <span class="m">(−∞, ∞)</span> and <span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 5 &lt; 0</span> has none, <span class="m">∅</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>(<i>x</i>)`, name: "The polynomial", desc: "Everything moved to one side, so the inequality compares P(x) with 0." },
    { c: "c2", sym: `<i>r</i>`, name: "Boundary point", desc: "A real zero of P. Included for ≥ and ≤, excluded for > and <." },
    { c: "c5", sym: `+`, name: "Positive interval", desc: "P(x) > 0 on the whole interval: the graph is above the x-axis." },
    { c: "c3", sym: `−`, name: "Negative interval", desc: "P(x) < 0 on the whole interval: the graph is below the x-axis." }
  ],
  steps: { title: "How to solve a polynomial inequality", items: [
    `Move every term to one side so the other side is <span class="m">0</span>. Never divide by a variable.`,
    `Factor <span class="m c1"><i>P</i>(<i>x</i>)</span> completely and list its real <span class="c2">zeros</span> with their multiplicities.`,
    `Mark the zeros on a number line. They split it into intervals.`,
    `Pick one test value in each interval and find the sign of <span class="m"><i>P</i></span> there, or read the sign of each factor.`,
    `Keep the intervals with the sign you need: <span class="c5">+</span> for <span class="m">&gt;</span> and <span class="m">≥</span>, <span class="c3">−</span> for <span class="m">&lt;</span> and <span class="m">≤</span>. Add the zeros if the inequality is <span class="m">≥</span> or <span class="m">≤</span>.`,
    `Write the solution set in interval notation and check it against the graph.`
  ] },
  example: {
    prompt: `Solve <span class="m"><i>x</i><sup>3</sup> + 4 ≤ <i>x</i><sup>2</sup> + 4<i>x</i></span>. Write the solution set in interval notation.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> − 4<i>x</i> + 4</span> ≤ 0</span>`, note: "Subtract x² + 4x from both sides so the right side is 0." },
      { math: `<span class="m"><i>x</i><sup>2</sup>(<i>x</i> − 1) − 4(<i>x</i> − 1) = (<i>x</i> − 1)(<i>x</i><sup>2</sup> − 4)</span>`, note: "Factor by grouping." },
      { math: `<span class="m"><span class="c1">(<i>x</i> + 2)(<i>x</i> − 1)(<i>x</i> − 2)</span> ≤ 0</span>`, note: "Difference of squares: x² − 4 = (x + 2)(x − 2)." },
      { math: `<span class="m"><span class="c2">−2</span>, &nbsp;<span class="c2">1</span>, &nbsp;<span class="c2">2</span></span>`, note: "Three boundary points, each of multiplicity 1, so the sign flips at each one." },
      { math: `<span class="m"><i>P</i>(−3) = <span class="c3">−20</span>, &nbsp;<i>P</i>(0) = <span class="c5">4</span>, &nbsp;<i>P</i>(1.5) = <span class="c3">−0.875</span>, &nbsp;<i>P</i>(3) = <span class="c5">10</span></span>`, note: "One test value in each of the four intervals." },
      { math: `<span class="m"><span class="c3">−</span> &nbsp;|&nbsp; <span class="c5">+</span> &nbsp;|&nbsp; <span class="c3">−</span> &nbsp;|&nbsp; <span class="c5">+</span></span>`, note: "We need P(x) ≤ 0: the negative intervals, plus the zeros because of the equal sign." }
    ],
    answer: `<span class="m c5">(−∞, −2] ∪ [1, 2]</span>`
  },
  why: `<p>Many practical questions ask for a range rather than a single value: for which prices is profit positive, for which times is a projectile above a wall, for which loads does a beam stay within its limit. When the quantity is a polynomial, the answer is a union of intervals, and the sign chart finds it exactly from the zeros.</p>
<p>The method also guards against tempting errors. Dividing both sides by <span class="m"><i>x</i></span> or taking a square root of both sides throws solutions away, because the sign of <span class="m"><i>x</i></span> is unknown. Comparing with 0 and testing signs never does. The same idea carries over to rational inequalities, and in calculus to finding where a function increases or bends upward.</p>`,
  careers: [
    { role: "Operations research analyst", use: "Finds the production levels where a polynomial profit model is positive by solving P(x) > 0." },
    { role: "Civil engineer", use: "Solves a quadratic stopping-distance inequality to set the highest speed that stops within a given distance." },
    { role: "Ballistics and sports analyst", use: "Finds the time interval when a projectile's height h(t) exceeds the height of a wall or net." },
    { role: "Quality engineer", use: "Determines the range of a process setting for which a fitted polynomial keeps defects below a limit." },
    { role: "Pharmacokineticist", use: "Finds the time window in which a polynomial approximation of drug concentration stays above the effective level." },
    { role: "Actuary", use: "Solves inequalities in polynomial reserve models to find interest rates at which a fund stays solvent." }
  ],
  life: [
    "Working out the prices at which a small business makes money",
    "Finding when a thrown ball is higher than a fence",
    "Choosing dimensions that keep a garden's area above a target",
    "Checking the range of speeds at which a car can stop in time",
    "Knowing why dividing an inequality by x can lose answers"
  ],
  fields: [
    { name: "Calculus", use: "Sign charts of the derivative show where a function increases or decreases." },
    { name: "Physics", use: "Quadratic inequalities give the times a body is above a height or faster than a speed." },
    { name: "Economics", use: "Break-even analysis finds the outputs where a profit polynomial is positive." },
    { name: "Computer science", use: "Comparing polynomial running times finds the input sizes where one algorithm beats another." }
  ],
  prereqWhy: {
    "a2-zeros-mult": "The boundary points are the real zeros, and their multiplicities decide whether the sign changes there: odd multiplicity crosses, even multiplicity touches.",
    "a1-compound": "Solution sets are unions and intersections of intervals, written in interval notation with brackets and parentheses, as in compound inequalities."
  },
  unlocksWhy: {
    "a2-rational-ineq": "Rational inequalities use the same sign chart, with the zeros of the denominator added as critical values that are always excluded."
  },
  beyond: [
    { field: "Precalculus", why: "Domains of square-root and logarithmic functions come from polynomial inequalities such as 9 − x² ≥ 0." },
    { field: "Calculus I", why: "Increasing and decreasing intervals and concavity are found by sign charts of the first and second derivatives." },
    { field: "Economics", why: "Ranges of profitable output and feasible prices come from inequalities in cost and revenue models." }
  ],
  mistakes: [
    { wrong: `Dividing by <span class="m"><i>x</i></span>: from <span class="m"><i>x</i><sup>2</sup> &gt; 3<i>x</i></span> concluding <span class="m"><i>x</i> &gt; 3</span>.`, fix: `The sign of <span class="m"><i>x</i></span> is unknown. Write <span class="m"><i>x</i><sup>2</sup> − 3<i>x</i> = <i>x</i>(<i>x</i> − 3) &gt; 0</span>; the sign chart gives <span class="m">(−∞, 0) ∪ (3, ∞)</span>. The shortcut lost every negative solution.` },
    { wrong: `Taking square roots: from <span class="m"><i>x</i><sup>2</sup> ≥ 9</span> writing <span class="m"><i>x</i> ≥ ±3</span> or <span class="m"><i>x</i> ≥ 3</span>.`, fix: `<span class="m"><i>x</i><sup>2</sup> − 9 = (<i>x</i> + 3)(<i>x</i> − 3) ≥ 0</span> holds outside the zeros: <span class="m">(−∞, −3] ∪ [3, ∞)</span>.` },
    { wrong: `Assuming the signs always alternate: for <span class="m"><i>x</i>(<i>x</i> − 2)<sup>2</sup> &gt; 0</span> answering <span class="m">(0, 2)</span>.`, fix: `At the double zero 2 the sign does not change. Test values give <span class="m">−</span> on <span class="m">(−∞, 0)</span> and <span class="m">+</span> on both <span class="m">(0, 2)</span> and <span class="m">(2, ∞)</span>, so the solution is <span class="m">(0, 2) ∪ (2, ∞)</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> − <i>x</i> − 12 &lt; 0</span>.`, a: `<span class="m">(<i>x</i> + 3)(<i>x</i> − 4) &lt; 0</span>. Zeros <span class="m">−3</span> and <span class="m">4</span>; the quadratic opens up, so it is negative between them: <span class="m">(−3, 4)</span>.` },
    { q: `Solve <span class="m">2<i>x</i><sup>2</sup> + 5<i>x</i> ≥ 3</span>.`, a: `<span class="m">2<i>x</i><sup>2</sup> + 5<i>x</i> − 3 = (2<i>x</i> − 1)(<i>x</i> + 3) ≥ 0</span>. Zeros <span class="m">−3</span> and <span class="m"><span class="fr"><span>1</span><span>2</span></span></span>; positive outside them, zeros included: <span class="m">(−∞, −3] ∪ [<span class="fr"><span>1</span><span>2</span></span>, ∞)</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> + 4 &gt; 4<i>x</i></span>.`, a: `<span class="m"><i>x</i><sup>2</sup> − 4<i>x</i> + 4 = (<i>x</i> − 2)<sup>2</sup> &gt; 0</span>. A square is positive except where it is 0, at <span class="m"><i>x</i> = 2</span>: <span class="m">(−∞, 2) ∪ (2, ∞)</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>4</sup> − 5<i>x</i><sup>2</sup> + 4 &gt; 0</span>.`, a: `<span class="m">(<i>x</i><sup>2</sup> − 1)(<i>x</i><sup>2</sup> − 4) = (<i>x</i> + 2)(<i>x</i> + 1)(<i>x</i> − 1)(<i>x</i> − 2)</span>. Test values <span class="m">−3, −1.5, 0, 1.5, 3</span> give <span class="m">40, −2.1875, 4, −2.1875, 40</span>, signs <span class="m">+ − + − +</span>: <span class="m">(−∞, −2) ∪ (−1, 1) ∪ (2, ∞)</span>.` }
  ],
  origin: `<p>The sign-chart method rests on a property of continuous functions: a function that is negative at one point and positive at another must be zero somewhere between. Bernard Bolzano gave the first purely analytic proof of this Intermediate Value Theorem in 1817, and Augustin-Louis Cauchy proved it again in his <i>Cours d'analyse</i> of 1821. Solving quadratic inequalities by testing the regions between the roots became standard in algebra textbooks in the twentieth century.</p>`
};
