window.ARITH = window.ARITH || {};

ARITH["a2-exp-log-eq"] = {
  title: "Exponential & Logarithmic Equations",
  short: "Get the unknown out of an exponent, then check the domain",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · solving equations",
  hero: `<span class="m"><span class="c1">3<sup><i>x</i></sup></span> = <span class="c2">20</span> &nbsp;⇒&nbsp; <i>x</i> = <span class="c5"><span class="fr"><span>ln 20</span><span>ln 3</span></span> ≈ 2.727</span></span>`,
  lede: `An exponential equation has the unknown in an exponent; a logarithmic equation has it inside a log. Both are solved by undoing one function with the other, and both end with a check, because a candidate that puts a log of a negative number into the original equation must be <span class="c3">rejected</span>.`,
  plain: `<p>Think of each equation as two graphs, the <span class="c1">left side</span> and the <span class="c2">right side</span>. A <span class="c5">solution</span> is an x where they meet. For <span class="m">2<sup><i>x</i> + 1</sup> = 32</span> you can see the answer by writing 32 as a power of 2: <span class="m">2<sup><i>x</i> + 1</sup> = 2<sup>5</sup></span>, so <span class="m"><i>x</i> + 1 = 5</span> and <span class="m"><i>x</i> = 4</span>.</p>
<p>When 20 is not a neat power of 3, take a logarithm of both sides. The power rule brings the unknown down: <span class="m">ln 3<sup><i>x</i></sup> = ln 20</span> becomes <span class="m"><i>x</i> ln 3 = ln 20</span>, so <span class="m"><i>x</i> = ln 20 / ln 3</span>. That is the exact answer; a calculator gives <span class="m">≈ 2.727</span>.</p>
<p>Log equations run the other way. Condense to one log, then rewrite in exponential form. Squaring and condensing can create candidates that the original equation never allowed, because a log only accepts positive arguments. So every candidate goes back into the original equation, and any that makes an argument zero or negative is thrown out as <span class="c3">extraneous</span>.</p>`,
  formal: `<p>Exponential and logarithmic functions are one-to-one, which gives the two key properties (for <span class="m"><i>b</i> > 0</span>, <span class="m"><i>b</i> ≠ 1</span>):</p>
<div class="display"><i>b</i><sup><i>S</i></sup> = <i>b</i><sup><i>T</i></sup> &nbsp;⇔&nbsp; <i>S</i> = <i>T</i><br>log<sub><i>b</i></sub> <i>S</i> = log<sub><i>b</i></sub> <i>T</i> &nbsp;⇔&nbsp; <i>S</i> = <i>T</i> &nbsp;<span class="dim">(<i>S</i>, <i>T</i> > 0)</span><br>log<sub><i>b</i></sub> <i>S</i> = <i>c</i> &nbsp;⇔&nbsp; <i>S</i> = <i>b</i><sup><i>c</i></sup></div>
<p>For <span class="m"><i>c</i> > 0</span> the equation <span class="m"><i>b</i><sup><i>x</i></sup> = <i>c</i></span> has the single solution <span class="m"><i>x</i> = ln <i>c</i> / ln <i>b</i></span>; for <span class="m"><i>c</i> ≤ 0</span> it has none, since <span class="m"><i>b</i><sup><i>x</i></sup> > 0</span>. An equation that is quadratic in <span class="m"><i>b</i><sup><i>x</i></sup></span>, such as <span class="m"><i>e</i><sup>2<i>x</i></sup> − 3<i>e</i><sup><i>x</i></sup> + 2 = 0</span>, is solved with the substitution <span class="m"><i>u</i> = <i>e</i><sup><i>x</i></sup></span>: <span class="m">(<i>u</i> − 1)(<i>u</i> − 2) = 0</span> gives <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = ln 2</span>. A value obtained by the algebra that is outside the domain of the original equation is an <b>extraneous solution</b>.</p>`,
  legend: [
    { c: "c1", sym: `<i>y</i> = left`, name: "Left side", desc: "The left side of the equation, graphed as a function of x." },
    { c: "c2", sym: `<i>y</i> = right`, name: "Right side", desc: "The right side. Solutions are the x-values where the two graphs meet." },
    { c: "c5", sym: `<i>x</i> = …`, name: "Solution", desc: "A candidate that satisfies the original equation, given exactly and as a decimal." },
    { c: "c3", sym: `<i>x</i> ✗`, name: "Rejected", desc: "An extraneous candidate: it makes some log argument zero or negative." }
  ],
  steps: {
    title: "How to solve an exponential or logarithmic equation",
    items: [
      `Write down the domain: every log argument in the original equation must be positive.`,
      `Exponential, same base: write both sides as powers of one base and set the exponents equal.`,
      `Exponential, different bases: isolate the power, take <span class="m">ln</span> of both sides, and bring the exponent down with the power rule.`,
      `Logarithmic: condense each side to a single log. Then use <span class="m">log<sub><i>b</i></sub> <i>S</i> = log<sub><i>b</i></sub> <i>T</i> ⇒ <i>S</i> = <i>T</i></span>, or rewrite <span class="m">log<sub><i>b</i></sub> <i>S</i> = <i>c</i></span> as <span class="m"><i>S</i> = <i>b</i><sup><i>c</i></sup></span>.`,
      `Quadratic in <span class="m"><i>b</i><sup><i>x</i></sup></span>: substitute <span class="m"><i>u</i> = <i>b</i><sup><i>x</i></sup></span>, solve for <span class="m"><i>u</i></span>, and discard any <span class="m"><i>u</i> ≤ 0</span>.`,
      `Check each candidate in the original equation and reject any outside the domain. Give the exact answer, then a decimal.`
    ]
  },
  example: {
    prompt: `Solve <span class="m"><span class="c1">log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> − 2)</span> = <span class="c2">3</span></span>.`,
    lines: [
      { math: `<span class="m"><i>x</i> > 0 and <i>x</i> − 2 > 0 &nbsp;⇒&nbsp; <i>x</i> > 2</span>`, note: "Domain first: both arguments must be positive." },
      { math: `<span class="m">log<sub>2</sub>[<i>x</i>(<i>x</i> − 2)] = 3</span>`, note: "Product rule: condense the left side to one log." },
      { math: `<span class="m"><i>x</i>(<i>x</i> − 2) = 2<sup>3</sup> = 8</span>`, note: "Rewrite log₂ S = 3 in exponential form." },
      { math: `<span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 8 = 0 &nbsp;⇒&nbsp; (<i>x</i> − 4)(<i>x</i> + 2) = 0</span>`, note: "A quadratic in standard form, factored." },
      { math: `<span class="m"><span class="c5"><i>x</i> = 4</span> &nbsp;or&nbsp; <span class="c3"><i>x</i> = −2</span></span>`, note: "Two candidates from the algebra." },
      { math: `<span class="m">log<sub>2</sub> 4 + log<sub>2</sub> 2 = 2 + 1 = 3</span>`, note: "x = 4 checks. x = −2 gives log₂(−2), which is undefined, so it is extraneous." }
    ],
    answer: `Solution set <span class="m">{4}</span>. The candidate <span class="m"><i>x</i> = −2</span> is rejected because it is outside the domain <span class="m">(2, ∞)</span>.`
  },
  why: `<p>Every "how long until" question about exponential change is an exponential equation. How many years until a deposit reaches a goal, how long until a drug falls to a safe level, how old a fossil is: each one asks for an exponent, and logarithms are the only algebraic way to get it.</p>
<p>The domain check is not a formality. In a model, a rejected candidate is often a time before the process began or a negative concentration, and keeping it gives a wrong answer that looks just as precise as the right one.</p>`,
  careers: [
    { role: "Financial planner", use: "Solves P(1 + r)ᵗ = goal for t to tell a client how many years a savings plan needs." },
    { role: "Pharmacist", use: "Finds when a drug concentration C₀e^(−kt) drops below a threshold to set the dosing interval." },
    { role: "Radiocarbon dating technician", use: "Solves (1/2)^(t/5730) = remaining fraction for the age of an organic sample." },
    { role: "Epidemiologist", use: "Solves an exponential case-growth model for the date a hospital capacity would be reached." },
    { role: "Acoustical engineer", use: "Solves decibel equations such as 10 log(I/I₀) = 85 for the sound intensity I." },
    { role: "Forensic scientist", use: "Solves Newton's law of cooling for the time since death from body temperature readings." }
  ],
  life: [
    "Working out how long until savings reach a target",
    "Estimating when a cup of coffee is cool enough to drink",
    "Reading how long a medication stays above its effective level",
    "Finding how many years a loan or a credit-card balance takes to double",
    "Checking a calculator answer that came out negative where a time was expected"
  ],
  fields: [
    { name: "Finance", use: "Loan terms and investment horizons come from solving compound-interest equations for t." },
    { name: "Chemistry", use: "Reaction half-lives and pH targets are found by solving exponential and log equations." },
    { name: "Biology", use: "Generation times of bacteria come from solving N₀·2^(t/g) = N for g." },
    { name: "Earth science", use: "Radiometric dating solves decay equations for the age of rocks and fossils." }
  ],
  prereqWhy: {
    "a2-log-props": "Condensing logs and the power rule, which brings an unknown down from an exponent, are the two moves every solution here uses."
  },
  unlocksWhy: {
    "a2-exp-models": "Doubling times, half-lives and the time to reach a balance are each found by solving an exponential equation for t."
  },
  beyond: [
    { field: "Calculus I", why: "Solving eᵏᵗ = c for t, and checking domains, appears in every growth and decay differential equation." },
    { field: "Chemistry", why: "Integrated rate laws are logarithmic equations solved for concentration or time." },
    { field: "Economics", why: "Continuous discounting and growth-rate problems are exponential equations in t or r." },
    { field: "Computer science", why: "Solving 2ᵏ = n for k gives the depth of binary trees and the steps of binary search." }
  ],
  mistakes: [
    { wrong: `From <span class="m">3 · 2<sup><i>x</i></sup> = 24</span>, writing <span class="m">6<sup><i>x</i></sup> = 24</span>.`, fix: `The exponent belongs to 2 only. Divide first: <span class="m">2<sup><i>x</i></sup> = 8 = 2<sup>3</sup></span>, so <span class="m"><i>x</i> = 3</span>.` },
    { wrong: `Simplifying <span class="m">ln 20 / ln 3</span> to <span class="m">ln(20/3)</span>.`, fix: `A quotient of logs is not the log of a quotient. <span class="m">ln 20 / ln 3 ≈ 2.727</span>, while <span class="m">ln(20/3) ≈ 1.897</span>.` },
    { wrong: `Keeping <span class="m"><i>x</i> = −2</span> as a solution of <span class="m">log<sub>2</sub> <i>x</i> + log<sub>2</sub>(<i>x</i> − 2) = 3</span>.`, fix: `Check in the original equation: <span class="m">log<sub>2</sub>(−2)</span> is undefined, so <span class="m">−2</span> is extraneous. Only <span class="m"><i>x</i> = 4</span> works.` },
    { wrong: `Solving <span class="m">2<sup><i>x</i></sup> = −2</span> as <span class="m"><i>x</i> = −1</span>.`, fix: `<span class="m">2<sup>−1</sup> = 1/2</span>. A positive base to any power is positive, so <span class="m">2<sup><i>x</i></sup> = −2</span> has no solution.` }
  ],
  practice: [
    { q: `Solve <span class="m">2<sup><i>x</i> + 1</sup> = 32</span> and <span class="m">9<sup><i>x</i></sup> = 27<sup><i>x</i> − 1</sup></span>.`, a: `<span class="m">2<sup><i>x</i> + 1</sup> = 2<sup>5</sup></span>, so <span class="m"><i>x</i> = 4</span>. <span class="m">3<sup>2<i>x</i></sup> = 3<sup>3<i>x</i> − 3</sup></span>, so <span class="m">2<i>x</i> = 3<i>x</i> − 3</span> and <span class="m"><i>x</i> = 3</span>.` },
    { q: `Solve <span class="m">5<sup>2<i>x</i> − 1</sup> = 40</span>. Give the exact answer and a decimal to four places.`, a: `<span class="m">(2<i>x</i> − 1) ln 5 = ln 40</span>, so <span class="m"><i>x</i> = <span class="fr"><span>ln 40 + ln 5</span><span>2 ln 5</span></span> = <span class="fr"><span>ln 200</span><span>ln 25</span></span> ≈ 1.6460</span>.` },
    { q: `Solve <span class="m">2 ln <i>x</i> = ln(<i>x</i> + 6)</span>.`, a: `Domain <span class="m"><i>x</i> > 0</span>. <span class="m">ln <i>x</i><sup>2</sup> = ln(<i>x</i> + 6)</span>, so <span class="m"><i>x</i><sup>2</sup> − <i>x</i> − 6 = 0</span>, <span class="m">(<i>x</i> − 3)(<i>x</i> + 2) = 0</span>. <span class="m"><i>x</i> = −2</span> makes <span class="m">ln <i>x</i></span> undefined, so the solution set is <span class="m">{3}</span>.` },
    { q: `Solve <span class="m">4<sup><i>x</i></sup> − 2<sup><i>x</i> + 1</sup> − 8 = 0</span>.`, a: `With <span class="m"><i>u</i> = 2<sup><i>x</i></sup></span>: <span class="m">4<sup><i>x</i></sup> = <i>u</i><sup>2</sup></span> and <span class="m">2<sup><i>x</i> + 1</sup> = 2<i>u</i></span>, so <span class="m"><i>u</i><sup>2</sup> − 2<i>u</i> − 8 = (<i>u</i> − 4)(<i>u</i> + 2) = 0</span>. <span class="m">2<sup><i>x</i></sup> = 4</span> gives <span class="m"><i>x</i> = 2</span>; <span class="m">2<sup><i>x</i></sup> = −2</span> is impossible. Solution set <span class="m">{2}</span>.` }
  ]
};
