window.ARITH = window.ARITH || {};

ARITH["a2-rational-ineq"] = {
  title: "Rational Inequalities",
  short: "Compare one fraction with 0; denominator zeros stay out",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Rational functions · sign charts",
  hero: `<span class="m"><span class="c2"><span class="fr"><span><i>x</i> − <span class="c1">1</span></span><span><i>x</i> + <span class="c4">2</span></span></span></span> ≥ 0 &nbsp;⇒&nbsp; <span class="c5">(−∞, <span class="c4">−2</span>) ∪ [<span class="c1">1</span>, ∞)</span></span>`,
  lede: `A rational inequality compares a fraction of polynomials with a number. Move everything to one side, write one fraction, and make a sign chart from the <span class="c1">zeros of the numerator</span> and the <span class="c4">zeros of the denominator</span>. The denominator zeros are never solutions.`,
  plain: `<p>Where is <span class="m"><span class="fr"><span><i>x</i> − 1</span><span><i>x</i> + 2</span></span></span> at least 0? A fraction can only change sign where its top or its bottom is 0. The top is 0 at <span class="m c1">1</span>, and there the fraction equals 0. The bottom is 0 at <span class="m c4">−2</span>, and there the fraction is undefined. These two critical values split the line into three intervals.</p>
<p>Test one number in each. At <span class="m"><i>x</i> = −3</span> the fraction is <span class="m">4</span>, <span class="c5">positive</span>. At <span class="m"><i>x</i> = 0</span> it is <span class="m">−<span class="fr"><span>1</span><span>2</span></span></span>, <span class="c3">negative</span>. At <span class="m"><i>x</i> = 2</span> it is <span class="m"><span class="fr"><span>1</span><span>4</span></span></span>, <span class="c5">positive</span>. With the equal sign, <span class="m">1</span> is included because the fraction is 0 there. <span class="m">−2</span> is left out, because a value that is undefined can't be <span class="m">≥ 0</span>.</p>
<p>The tempting shortcut is to multiply both sides by the denominator, as you would in an equation. That only works when the denominator is positive. When it is negative the inequality sign must turn around, and you don't know in advance which case you are in. So compare with 0 and let the sign chart decide.</p>`,
  formal: `<p>A <b>rational inequality</b> can be written <span class="m"><span class="fr"><span><i>P</i>(<i>x</i>)</span><span><i>Q</i>(<i>x</i>)</span></span> &gt; 0</span> (or <span class="m">≥, &lt;, ≤</span>), where <span class="m"><i>P</i></span> and <span class="m"><i>Q</i></span> are polynomials. Its <b>critical values</b> are the real zeros of <span class="m"><i>P</i></span> and of <span class="m"><i>Q</i></span>. On each open interval between consecutive critical values the function <span class="m"><i>R</i> = <i>P</i>/<i>Q</i></span> is continuous and never 0, so it has one constant sign there. Zeros of <span class="m"><i>Q</i></span> are not in the domain, so they are <b>always excluded</b>, even for <span class="m">≥</span> and <span class="m">≤</span>. Zeros of <span class="m"><i>P</i></span> that are not zeros of <span class="m"><i>Q</i></span> are included exactly when the inequality is <span class="m">≥</span> or <span class="m">≤</span>.</p>
<p>Multiplying an inequality by <span class="m"><i>Q</i>(<i>x</i>)</span> keeps its direction only where <span class="m"><i>Q</i>(<i>x</i>) &gt; 0</span> and reverses it where <span class="m"><i>Q</i>(<i>x</i>) &lt; 0</span>. Since <span class="m"><i>Q</i>(<i>x</i>)<sup>2</sup> &gt; 0</span> on the domain, the sign of the quotient is the sign of the product:</p>
<div class="display"><span class="c2"><span class="fr"><span><i>P</i>(<i>x</i>)</span><span><i>Q</i>(<i>x</i>)</span></span></span> <span class="c5">&gt; 0</span> &nbsp;⇔&nbsp; <i>P</i>(<i>x</i>) · <i>Q</i>(<i>x</i>) <span class="c5">&gt; 0</span>, &nbsp;&nbsp;<span class="c4"><i>Q</i>(<i>x</i>) ≠ 0</span></div>`,
  legend: [
    { c: "c2", sym: `<i>R</i>(<i>x</i>)`, name: "The rational function", desc: "Everything on one side as a single fraction P(x)/Q(x), compared with 0." },
    { c: "c1", sym: `<i>P</i> = 0`, name: "Zero of the numerator", desc: "R = 0 there. Included for ≥ and ≤, excluded for > and <." },
    { c: "c4", sym: `<i>Q</i> = 0`, name: "Excluded value", desc: "R is undefined there, usually a vertical asymptote. Never part of the solution set." },
    { c: "c5", sym: `+`, name: "Positive interval", desc: "R(x) > 0 on the whole interval: the graph is above the x-axis." },
    { c: "c3", sym: `−`, name: "Negative interval", desc: "R(x) < 0 on the whole interval: the graph is below the x-axis." }
  ],
  steps: { title: "How to solve a rational inequality", items: [
    `Move every term to one side so the other side is <span class="m">0</span>. Do not multiply by an expression containing <span class="m"><i>x</i></span>.`,
    `Combine into a single fraction over a common denominator.`,
    `Factor the numerator and the denominator. The <span class="c1">numerator zeros</span> and the <span class="c4">denominator zeros</span> are the critical values.`,
    `Mark the critical values on a number line and test one value in each interval, or read the sign of each factor.`,
    `Keep the intervals with the sign you need. For <span class="m">≥</span> or <span class="m">≤</span> add the numerator zeros. Never include a denominator zero.`,
    `Write the solution set in interval notation and check it against the graph.`
  ] },
  example: {
    prompt: `Solve <span class="m"><span class="fr"><span><i>x</i> + 3</span><span><i>x</i> − 1</span></span> ≤ 2</span>. Write the solution set in interval notation.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><i>x</i> + 3</span><span><i>x</i> − 1</span></span> − 2 ≤ 0, &nbsp;&nbsp;<span class="c4"><i>x</i> ≠ 1</span></span>`, note: "Subtract 2 instead of multiplying by x − 1, whose sign is unknown." },
      { math: `<span class="m"><span class="fr"><span><i>x</i> + 3 − 2(<i>x</i> − 1)</span><span><i>x</i> − 1</span></span> = <span class="c2"><span class="fr"><span>5 − <i>x</i></span><span><i>x</i> − 1</span></span></span> ≤ 0</span>`, note: "Write 2 as 2(x − 1)/(x − 1) and combine into one fraction." },
      { math: `<span class="m"><span class="c1">5</span> (numerator), &nbsp;<span class="c4">1</span> (denominator)</span>`, note: "The critical values split the line into three intervals." },
      { math: `<span class="m"><i>R</i>(0) = <span class="c3">−5</span>, &nbsp;<i>R</i>(3) = <span class="c5">1</span>, &nbsp;<i>R</i>(6) = <span class="c3">−<span class="fr"><span>1</span><span>5</span></span></span></span>`, note: "One test value in each interval." },
      { math: `<span class="m"><span class="c3">−</span> &nbsp;|&nbsp; <span class="c5">+</span> &nbsp;|&nbsp; <span class="c3">−</span></span>`, note: "We need R(x) ≤ 0: the two negative intervals." },
      { math: `<span class="m"><span class="c1">5</span> included, &nbsp;<span class="c4">1</span> excluded</span>`, note: "R(5) = 0 satisfies ≤ 0. R(1) is undefined." }
    ],
    answer: `<span class="m c5">(−∞, 1) ∪ [5, ∞)</span>. Multiplying both sides by <span class="m"><i>x</i> − 1</span> would give only <span class="m"><i>x</i> ≥ 5</span> and lose <span class="m">(−∞, 1)</span>.`
  },
  why: `<p>Averages, rates and ratios are fractions with the variable in the denominator, and questions about them are often inequalities. For which production levels is the average cost per item under a target? For which values of a resistor does a circuit stay below a current limit? When does a concentration stay above an effective level? Each is a rational inequality.</p>
<p>The denominator makes these different from polynomial inequalities in two ways. Its zeros are critical values where the function is undefined, so they are always excluded. And you may not clear it by multiplying, because its sign changes from one interval to the next. A sign chart handles both at once.</p>`,
  careers: [
    { role: "Cost accountant", use: "Solves C(x)/x ≤ target to find the production levels at which average cost per unit meets a budget." },
    { role: "Pharmacologist", use: "Finds the time window when a rational concentration model such as 50t/(t² + 4) stays above the effective dose." },
    { role: "Electrical engineer", use: "Solves inequalities in V/(R + r) to choose resistances that keep current within a component's rating." },
    { role: "Optical engineer", use: "Uses the thin-lens relation, a rational expression in the object distance, to find positions that give an image larger than the object." },
    { role: "Traffic engineer", use: "Solves rational inequalities in flow and density models to find when average travel time stays under a limit." },
    { role: "Logistics analyst", use: "Finds the order sizes q for which the yearly inventory cost DS/q + qH/2 stays below a budget." }
  ],
  life: [
    "Working out how many items to make before the cost per item drops below a price",
    "Finding how many people must share a rental for each to pay under a budget",
    "Seeing why a fraction can be positive when both top and bottom are negative",
    "Checking when an average speed stays above a target",
    "Avoiding the cross-multiplying shortcut in an inequality"
  ],
  fields: [
    { name: "Economics", use: "Average cost and average revenue are rational functions compared with prices and targets." },
    { name: "Physics", use: "Inequalities in rational laws such as lens and circuit equations give allowed ranges of distance or resistance." },
    { name: "Pharmacology", use: "Concentration curves modelled by rational functions are compared with therapeutic thresholds." },
    { name: "Calculus", use: "Sign charts of rational derivatives show where a function increases and where it decreases." }
  ],
  prereqWhy: {
    "a2-rational-asym": "Graphing a rational function already uses its zeros, vertical asymptotes and sign on each interval. The solution set is read straight off that graph.",
    "a2-poly-ineq": "The same sign-chart method: critical values split the line, one test value per interval, and brackets or parentheses for the endpoints."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Precalculus", why: "Domains of functions like √((x − 1)/(x + 2)) and of logarithms of quotients come from rational inequalities." },
    { field: "Calculus I", why: "The first and second derivative tests use sign charts of rational expressions, including points where the derivative is undefined." },
    { field: "Economics", why: "Ranges of output with average cost below price are rational inequalities in cost models." }
  ],
  mistakes: [
    { wrong: `Cross-multiplying: from <span class="m"><span class="fr"><span><i>x</i> + 3</span><span><i>x</i> − 1</span></span> ≤ 2</span> writing <span class="m"><i>x</i> + 3 ≤ 2(<i>x</i> − 1)</span>, so <span class="m"><i>x</i> ≥ 5</span>.`, fix: `That step assumes <span class="m"><i>x</i> − 1 &gt; 0</span>. For <span class="m"><i>x</i> &lt; 1</span> the inequality reverses. Subtract 2 and use a sign chart: <span class="m">(−∞, 1) ∪ [5, ∞)</span>.` },
    { wrong: `Including a denominator zero because of the equal sign: for <span class="m"><span class="fr"><span><i>x</i> + 2</span><span><i>x</i> − 3</span></span> ≥ 0</span> answering <span class="m">(−∞, −2] ∪ [3, ∞)</span>.`, fix: `At <span class="m"><i>x</i> = 3</span> the fraction is undefined, not 0. Only the numerator zero gets a bracket: <span class="m">(−∞, −2] ∪ (3, ∞)</span>.` },
    { wrong: `Cancelling a common factor and forgetting it: <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 1</span><span><i>x</i> − 1</span></span> &gt; 0</span> becomes <span class="m"><i>x</i> + 1 &gt; 0</span>, so <span class="m">(−1, ∞)</span>.`, fix: `The original is undefined at <span class="m"><i>x</i> = 1</span>, a hole. Remove it: <span class="m">(−1, 1) ∪ (1, ∞)</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i> − 4</span><span><i>x</i> + 1</span></span> &lt; 0</span>.`, a: `Critical values <span class="m">4</span> (numerator) and <span class="m">−1</span> (denominator). Test values <span class="m">−2, 0, 5</span> give <span class="m">+, −, +</span>. Strict inequality: <span class="m">(−1, 4)</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i> + 2</span><span><i>x</i> − 3</span></span> ≥ 0</span>.`, a: `Critical values <span class="m">−2</span> and <span class="m">3</span>. Signs <span class="m">+, −, +</span>. Include the numerator zero <span class="m">−2</span>, exclude <span class="m">3</span>: <span class="m">(−∞, −2] ∪ (3, ∞)</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span><i>x</i> − 2</span></span> &gt; 3</span>.`, a: `<span class="m"><span class="fr"><span><i>x</i> − 3(<i>x</i> − 2)</span><span><i>x</i> − 2</span></span> = <span class="fr"><span>6 − 2<i>x</i></span><span><i>x</i> − 2</span></span> &gt; 0</span>. Critical values <span class="m">2</span> and <span class="m">3</span>; test values <span class="m">0, 2.5, 4</span> give <span class="m">−3, 2, −1</span>. Solution <span class="m">(2, 3)</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span>2</span><span><i>x</i> − 1</span></span> ≥ <span class="fr"><span>1</span><span><i>x</i> + 1</span></span></span>.`, a: `<span class="m"><span class="fr"><span>2(<i>x</i> + 1) − (<i>x</i> − 1)</span><span>(<i>x</i> − 1)(<i>x</i> + 1)</span></span> = <span class="fr"><span><i>x</i> + 3</span><span>(<i>x</i> − 1)(<i>x</i> + 1)</span></span> ≥ 0</span>. Critical values <span class="m">−3, −1, 1</span>; signs <span class="m">−, +, −, +</span>. Solution <span class="m">[−3, −1) ∪ (1, ∞)</span>.` }
  ]
};
