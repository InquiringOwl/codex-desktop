window.ARITH = window.ARITH || {};
ARITH["a2-quad-form-eq"] = {
  title: "Equations in Quadratic Form",
  short: "Substitute u, solve a quadratic, then turn u back into x",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Quadratic equations · substitution",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup>4</sup> − 5<span class="c2"><i>x</i></span><sup>2</sup> + 4 = 0 &nbsp;<span class="c1"><i>u</i> = <i>x</i><sup>2</sup></span>&nbsp; ⇒ &nbsp;<span class="c1"><i>u</i></span><sup>2</sup> − 5<span class="c1"><i>u</i></span> + 4 = 0</span>`,
  lede: `An equation is in <b>quadratic form</b> when one expression appears both squared and to the first power. Naming that expression <span class="c1"><i>u</i></span> turns the equation into an ordinary quadratic. Solve for <span class="c1"><i>u</i></span>, then solve for <span class="c2"><i>x</i></span>, and <span class="c3">reject</span> any <span class="c1"><i>u</i></span> that no real <span class="c2"><i>x</i></span> can produce.`,
  plain: `<p>The equation <span class="m"><i>x</i><sup>4</sup> − 5<i>x</i><sup>2</sup> + 4 = 0</span> has degree 4, but it has the shape of a quadratic. The term <span class="m"><i>x</i><sup>4</sup></span> is the square of <span class="m"><i>x</i><sup>2</sup></span>, and <span class="m"><i>x</i><sup>2</sup></span> appears again in the middle. Call <span class="m"><i>x</i><sup>2</sup></span> by a new name, <span class="m"><i>u</i></span>, and the equation reads <span class="m"><i>u</i><sup>2</sup> − 5<i>u</i> + 4 = 0</span>. You already know how to solve that.</p>
<p>The same trick works whenever a chunk and its square both appear: <span class="m">(<i>x</i> − 2)</span> and <span class="m">(<i>x</i> − 2)<sup>2</sup></span>, <span class="m">√<span class="ov"><i>x</i></span></span> and <span class="m"><i>x</i></span>, <span class="m"><i>x</i><sup>1/3</sup></span> and <span class="m"><i>x</i><sup>2/3</sup></span>, <span class="m"><i>x</i><sup>−1</sup></span> and <span class="m"><i>x</i><sup>−2</sup></span>.</p>
<p>Solving for <span class="m"><i>u</i></span> is only half the job. Each value of <span class="m"><i>u</i></span> becomes a new equation in <span class="m"><i>x</i></span>, such as <span class="m"><i>x</i><sup>2</sup> = 4</span>. Some of these have no real solution: no real number squares to −1, and a square root is never negative. Those <span class="m"><i>u</i></span>-values are thrown away.</p>`,
  formal: `<p>An equation is in <b>quadratic form</b> if it can be written <span class="m"><i>a</i>[<i>g</i>(<span class="c2"><i>x</i></span>)]<sup>2</sup> + <i>b</i> <i>g</i>(<span class="c2"><i>x</i></span>) + <i>c</i> = 0</span> with <span class="m"><i>a</i> ≠ 0</span>. The substitution <span class="m c1"><i>u</i> = <i>g</i>(<i>x</i>)</span> gives <span class="m"><i>a</i><span class="c1"><i>u</i></span><sup>2</sup> + <i>b</i><span class="c1"><i>u</i></span> + <i>c</i> = 0</span>. Its roots <span class="m"><i>u</i><sub>1</sub>, <i>u</i><sub>2</sub></span> give the solutions of the original equation: every real <span class="m"><i>x</i></span> with <span class="m"><i>g</i>(<i>x</i>) = <i>u</i><sub>1</sub></span> or <span class="m"><i>g</i>(<i>x</i>) = <i>u</i><sub>2</sub></span>.</p>
<div class="display"><i>x</i><sup>4</sup> − 5<i>x</i><sup>2</sup> + 4 = 0, &nbsp;<span class="c1"><i>u</i> = <i>x</i><sup>2</sup></span>: &nbsp;<i>u</i> = 1, 4 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = ±1, ±2</span><br>(<i>x</i> − 2)<sup>2</sup> + 3(<i>x</i> − 2) − 10 = 0, &nbsp;<span class="c1"><i>u</i> = <i>x</i> − 2</span>: &nbsp;<i>u</i> = 2, −5 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = 4, −3</span><br><i>x</i> − 7√<span class="ov"><i>x</i></span> + 10 = 0, &nbsp;<span class="c1"><i>u</i> = √<span class="ov"><i>x</i></span></span>: &nbsp;<i>u</i> = 2, 5 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = 4, 25</span><br><i>x</i><sup>2/3</sup> + <i>x</i><sup>1/3</sup> − 6 = 0, &nbsp;<span class="c1"><i>u</i> = <i>x</i><sup>1/3</sup></span>: &nbsp;<i>u</i> = 2, −3 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = 8, −27</span><br><i>x</i><sup>−2</sup> − <i>x</i><sup>−1</sup> − 6 = 0, &nbsp;<span class="c1"><i>u</i> = <i>x</i><sup>−1</sup></span>: &nbsp;<i>u</i> = 3, −2 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = <span class="fr"><span>1</span><span>3</span></span>, −<span class="fr"><span>1</span><span>2</span></span></span></div>
<p>The range of <span class="m"><i>g</i></span> decides which roots survive. For <span class="m"><i>u</i> = <i>x</i><sup>2</sup></span> or <span class="m"><i>u</i> = √<span class="ov"><i>x</i></span></span>, a root <span class="m"><i>u</i> &lt; 0</span> gives <span class="c3">no real <i>x</i></span>. For <span class="m"><i>u</i> = <i>x</i><sup>−1</sup></span>, the value <span class="m"><i>u</i> = 0</span> is impossible. A cube root takes every real value, so <span class="m"><i>u</i> = <i>x</i><sup>1/3</sup></span> rejects nothing. When the back-substitution squares both sides, check every answer in the original equation.</p>`,
  legend: [
    { c: "c1", sym: `<i>u</i>`, name: "Substitution", desc: "The repeated expression: x², x − h, √x, x<sup>1/3</sup> or x<sup>−1</sup>. In u the equation is a plain quadratic." },
    { c: "c2", sym: `<i>x</i>`, name: "Original variable", desc: "The unknown you actually want. Each u-root becomes an equation in x." },
    { c: "c3", sym: `✕`, name: "Rejected", desc: "A u-root outside the range of the substitution, such as x² = −1 or √x = −2. It gives no real x." }
  ],
  steps: {
    title: "How to solve an equation in quadratic form",
    items: [
      `Spot an expression that appears squared and to the first power, and write the equation in standard form <span class="m">= 0</span>.`,
      `Let <span class="m"><i>u</i></span> be that expression and rewrite the equation as <span class="m"><i>a</i><i>u</i><sup>2</sup> + <i>b</i><i>u</i> + <i>c</i> = 0</span>.`,
      `Solve for <span class="m"><i>u</i></span> by factoring or the quadratic formula.`,
      `Put the expression back for <span class="m"><i>u</i></span> and solve each equation for <span class="m"><i>x</i></span>. Reject a <span class="m"><i>u</i></span>-value that the expression can never equal.`,
      `Check each answer in the original equation, especially after squaring, and write the solution set.`
    ]
  },
  example: {
    prompt: `Solve <span class="m"><span class="c2"><i>x</i></span><sup>4</sup> − 3<span class="c2"><i>x</i></span><sup>2</sup> − 4 = 0</span> over the real numbers.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>u</i> = <i>x</i><sup>2</sup></span>: &nbsp; <span class="c1"><i>u</i></span><sup>2</sup> − 3<span class="c1"><i>u</i></span> − 4 = 0</span>`, note: "x⁴ = (x²)² = u², so the quartic is a quadratic in u." },
      { math: `<span class="m">(<i>u</i> − 4)(<i>u</i> + 1) = 0 &nbsp;⇒&nbsp; <span class="c1"><i>u</i> = 4</span> or <span class="c1"><i>u</i> = −1</span></span>`, note: "Factor: two numbers with product −4 and sum −3." },
      { math: `<span class="m"><i>x</i><sup>2</sup> = 4 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = ±2</span></span>`, note: "Back-substitute the first root. A positive square has two square roots." },
      { math: `<span class="m"><span class="c3"><i>x</i><sup>2</sup> = −1</span>: no real <i>x</i></span>`, note: "Rejected: a real square is never negative. Its solutions ±i are not real." },
      { math: `<span class="m">(±2)<sup>4</sup> − 3(±2)<sup>2</sup> − 4 = 16 − 12 − 4 = 0 ✓</span>`, note: "Check in the original equation." }
    ],
    answer: `The real solution set is <span class="m c2">{−2, 2}</span>. The graph of <span class="m"><i>y</i> = <i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> − 4</span> crosses the x-axis only twice.`
  },
  why: `<p>Many equations look harder than they are because their degree is high or they contain roots and fractional powers. Seeing the quadratic hidden inside, and naming it, reduces them to a method you already trust. The same move appears again and again: <span class="m"><i>e</i><sup>2<i>x</i></sup> − 3<i>e</i><sup><i>x</i></sup> + 2 = 0</span> is quadratic in <span class="m"><i>e</i><sup><i>x</i></sup></span>, and <span class="m">2 sin<sup>2</sup><i>x</i> − sin <i>x</i> − 1 = 0</span> is quadratic in <span class="m">sin <i>x</i></span>.</p>
<p>The second lesson is about ranges. A substitution can only take certain values. Checking that each <span class="m"><i>u</i></span>-root is a value the expression can actually reach is what separates real solutions from false ones.</p>`,
  careers: [
    { role: "Mechanical vibration engineer", use: "Finds the two natural frequencies of a two-mass spring system from an equation quadratic in ω², with u = ω²." },
    { role: "Electrical engineer", use: "Gets the resonant frequencies of two coupled LC circuits from a quartic that is quadratic in ω²." },
    { role: "Solid-state physicist", use: "Solves the dispersion relation of a two-atom crystal chain, quadratic in ω², for its acoustic and optical branches." },
    { role: "Financial analyst", use: "Finds the yield of a two-period bond from a quadratic in the discount factor u = 1/(1 + r)." },
    { role: "Actuary", use: "Computes the rate of return of a two-year cash flow from a quadratic in v = 1/(1 + i), rejecting the negative root." }
  ],
  life: [
    "Solving a puzzle such as 'a number minus 7 times its square root is −10'",
    "Working out the interest rate hidden in a two-payment loan",
    "Naming a repeated chunk of a formula to make it easier to handle",
    "Checking answers that came from squaring, so a false one is not kept"
  ],
  fields: [
    { name: "Physics", use: "Frequencies of coupled oscillators and waves come from equations quadratic in ω²." },
    { name: "Finance", use: "Two-period yields and internal rates of return are quadratics in a discount factor." },
    { name: "Engineering", use: "Characteristic equations of fourth-order systems often contain only even powers." },
    { name: "Computer algebra", use: "Systems detect polynomials in x² or x^k and substitute to lower the degree before solving." }
  ],
  prereqWhy: {
    "a1-quad-factor": "Once the substitution is made, the equation in u is usually solved by factoring a trinomial.",
    "a1-quad-formula": "When the quadratic in u does not factor, the quadratic formula gives its roots, and the discriminant counts them."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Precalculus", why: "Exponential equations such as e^(2x) − 3e^x + 2 = 0 are quadratic in e^x; u = e^x must be positive." },
    { field: "Trigonometry", why: "Equations such as 2 sin²x − sin x − 1 = 0 are quadratic in sin x, and u must lie in [−1, 1]." },
    { field: "Calculus I", why: "u-substitution in integrals is the same idea: rename an inner expression to see a simpler form." }
  ],
  mistakes: [
    { wrong: `Giving the solutions of <span class="m"><i>x</i><sup>4</sup> − 5<i>x</i><sup>2</sup> + 4 = 0</span> as 1 and 4.`, fix: `Those are the values of <span class="m"><i>u</i> = <i>x</i><sup>2</sup></span>. Back-substitute: <span class="m"><i>x</i><sup>2</sup> = 1</span> and <span class="m"><i>x</i><sup>2</sup> = 4</span> give <span class="m">{−2, −1, 1, 2}</span>.` },
    { wrong: `From <span class="m"><i>x</i> − √<span class="ov"><i>x</i></span> − 6 = 0</span>, keeping <span class="m">√<span class="ov"><i>x</i></span> = −2</span> and so <span class="m"><i>x</i> = 4</span>.`, fix: `A principal square root is never negative, so <span class="m"><i>u</i> = −2</span> is rejected. Check: <span class="m">4 − 2 − 6 = −4 ≠ 0</span>. Only <span class="m"><i>x</i> = 9</span> works.` },
    { wrong: `Rejecting <span class="m"><i>u</i> = −3</span> in <span class="m"><i>x</i><sup>2/3</sup> + <i>x</i><sup>1/3</sup> − 6 = 0</span> because it is negative.`, fix: `<span class="m"><i>u</i> = <i>x</i><sup>1/3</sup></span> is a cube root, which can be negative: <span class="m"><i>x</i> = (−3)<sup>3</sup> = −27</span> is a solution.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i><sup>4</sup> − 13<i>x</i><sup>2</sup> + 36 = 0</span>.`,
      a: `<span class="m"><i>u</i> = <i>x</i><sup>2</sup></span>: <span class="m"><i>u</i><sup>2</sup> − 13<i>u</i> + 36 = (<i>u</i> − 4)(<i>u</i> − 9) = 0</span>, so <span class="m"><i>x</i><sup>2</sup> = 4</span> or <span class="m">9</span>. Solution set <span class="m">{−3, −2, 2, 3}</span>.` },
    { q: `Solve <span class="m"><i>x</i> − 3√<span class="ov"><i>x</i></span> − 4 = 0</span>.`,
      a: `<span class="m"><i>u</i> = √<span class="ov"><i>x</i></span></span>: <span class="m"><i>u</i><sup>2</sup> − 3<i>u</i> − 4 = (<i>u</i> − 4)(<i>u</i> + 1) = 0</span>. Reject <span class="m"><i>u</i> = −1</span>. <span class="m">√<span class="ov"><i>x</i></span> = 4</span> gives <span class="m"><i>x</i> = 16</span>; check <span class="m">16 − 12 − 4 = 0</span>. Solution set <span class="m">{16}</span>.` },
    { q: `Solve <span class="m">2<i>x</i><sup>−2</sup> + <i>x</i><sup>−1</sup> − 1 = 0</span>.`,
      a: `<span class="m"><i>u</i> = <i>x</i><sup>−1</sup></span>: <span class="m">2<i>u</i><sup>2</sup> + <i>u</i> − 1 = (2<i>u</i> − 1)(<i>u</i> + 1) = 0</span>, so <span class="m"><i>u</i> = <span class="fr"><span>1</span><span>2</span></span></span> or <span class="m">−1</span>. Then <span class="m"><i>x</i> = 1/<i>u</i></span>: solution set <span class="m">{−1, 2}</span>.` },
    { q: `Solve <span class="m">(<i>x</i><sup>2</sup> − 2<i>x</i>)<sup>2</sup> − 11(<i>x</i><sup>2</sup> − 2<i>x</i>) + 24 = 0</span>.`,
      a: `<span class="m"><i>u</i> = <i>x</i><sup>2</sup> − 2<i>x</i></span>: <span class="m">(<i>u</i> − 3)(<i>u</i> − 8) = 0</span>. <span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 3 = (<i>x</i> − 3)(<i>x</i> + 1) = 0</span> and <span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 8 = (<i>x</i> − 4)(<i>x</i> + 2) = 0</span>. Solution set <span class="m">{−2, −1, 3, 4}</span>.` }
  ]
};
