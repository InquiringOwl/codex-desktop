window.ARITH = window.ARITH || {};

ARITH["a1-quad-formula"] = {
  title: "The Quadratic Formula & Discriminant",
  short: "Solve any ax² + bx + c = 0; b² − 4ac counts the roots",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Quadratic equations · the general solution",
  hero: `<span class="m"><span class="c1"><i>x</i></span> = <span class="fr"><span>−<span class="c2"><i>b</i></span> ± √<span style="text-decoration:overline"><span class="c4"><i>b</i><sup>2</sup> − 4<i>ac</i></span></span></span><span>2<span class="c2"><i>a</i></span></span></span></span>`,
  lede: `The quadratic formula solves every quadratic equation <span class="m"><span class="c2"><i>a</i></span><i>x</i><sup>2</sup> + <span class="c2"><i>b</i></span><i>x</i> + <span class="c2"><i>c</i></span> = 0</span>. The <span class="c4">discriminant</span> <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span> tells you in advance how many real <span class="c1">roots</span> there are.`,
  plain: `<p>Factoring is quick when it works, and completing the square always works but takes several steps. The quadratic formula is completing the square done once and for all on the general equation. You read off <span class="m"><i>a</i></span>, <span class="m"><i>b</i></span> and <span class="m"><i>c</i></span>, substitute, and simplify. It works for every quadratic, including ones with messy decimals.</p>
<p>The part under the square root, <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span>, is called the <b>discriminant</b>. If it is positive, the ± gives two different real solutions, and the parabola crosses the <span class="m"><i>x</i></span>-axis twice. If it is zero, the ± adds and subtracts nothing, so there is one solution, and the parabola just touches the axis. If it is negative, there is no real square root, so there are no real solutions, and the parabola misses the axis.</p>
<p>Before you start, make sure the equation is in standard form with 0 on one side, and pay attention to signs. If <span class="m"><i>b</i> = −4</span>, then <span class="m">−<i>b</i> = 4</span> and <span class="m"><i>b</i><sup>2</sup> = 16</span>.</p>`,
  formal: `<p><b>Quadratic formula</b>: for <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with real coefficients and <span class="m"><i>a</i> ≠ 0</span>,</p>
<div class="display"><i>x</i> = <span class="fr"><span>−<i>b</i> ± √<span style="text-decoration:overline"><i>b</i><sup>2</sup> − 4<i>ac</i></span></span><span>2<i>a</i></span></span><br><span class="dim">derivation:</span> <i>x</i><sup>2</sup> + <span class="fr"><span><i>b</i></span><span><i>a</i></span></span><i>x</i> + <span class="fr"><span><i>b</i><sup>2</sup></span><span>4<i>a</i><sup>2</sup></span></span> = <span class="fr"><span><i>b</i><sup>2</sup></span><span>4<i>a</i><sup>2</sup></span></span> − <span class="fr"><span><i>c</i></span><span><i>a</i></span></span> &nbsp;⇒&nbsp; (<i>x</i> + <span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>)<sup>2</sup> = <span class="fr"><span><i>b</i><sup>2</sup> − 4<i>ac</i></span><span>4<i>a</i><sup>2</sup></span></span></div>
<p>The <b>discriminant</b> <span class="m"><i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i></span> determines the nature of the solutions: <span class="m"><i>D</i> &gt; 0</span> gives two distinct real solutions (rational if <span class="m"><i>D</i></span> is a perfect square and the coefficients are integers, irrational otherwise); <span class="m"><i>D</i> = 0</span> gives one real solution <span class="m">−<i>b</i>/(2<i>a</i>)</span>, a double root; <span class="m"><i>D</i> &lt; 0</span> gives no real solutions (two complex solutions, studied in Algebra II).</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>, <i>b</i>, <i>c</i>`, name: "Coefficients", desc: "The numbers in standard form ax² + bx + c = 0, including their signs. The coefficient a cannot be 0." },
    { c: "c4", sym: `<i>b</i><sup>2</sup> − 4<i>ac</i>`, name: "Discriminant", desc: "Positive: two real roots. Zero: one double root. Negative: no real roots." },
    { c: "c1", sym: `<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>`, name: "Roots", desc: "The solutions given by the + and − choices. They are the x-intercepts of the parabola y = ax² + bx + c." }
  ],
  steps: { title: "How to use the quadratic formula", items: [
    `Write the equation in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span>. Clear fractions or decimals if that makes the numbers easier.`,
    `Identify <span class="m c2"><i>a</i></span>, <span class="m c2"><i>b</i></span> and <span class="m c2"><i>c</i></span>, with their signs.`,
    `Compute the <span class="c4">discriminant</span> <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span>. If it is negative, stop: there is no real solution.`,
    `Substitute into <span class="m"><i>x</i> = (−<i>b</i> ± √<i>D</i>)/(2<i>a</i>)</span>, using parentheses around negative values.`,
    `Simplify the square root, then divide out any common factor of all terms in the numerator and the denominator.`,
    `Write both <span class="c1">roots</span>, and a decimal approximation if the problem needs one. Check in the original equation.`
  ] },
  example: {
    prompt: `An 8 in by 10 in photo gets a frame of uniform width. The framed picture must cover a total area of 140 in². How wide should the frame be, to the nearest hundredth of an inch?`,
    lines: [
      { math: `<span class="m">(8 + 2<i>x</i>)(10 + 2<i>x</i>) = 140</span>`, note: "Let x be the frame width. It adds 2x to each dimension." },
      { math: `<span class="m">4<i>x</i><sup>2</sup> + 36<i>x</i> − 60 = 0 &nbsp;⇒&nbsp; <i>x</i><sup>2</sup> + 9<i>x</i> − 15 = 0</span>`, note: "Expand, subtract 140, and divide by 4." },
      { math: `<span class="m"><span class="c2"><i>a</i> = 1, <i>b</i> = 9, <i>c</i> = −15</span>; &nbsp; <span class="c4"><i>D</i> = 81 + 60 = 141</span></span>`, note: "The discriminant is positive and not a perfect square: two irrational roots." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>−9 ± √141</span><span>2</span></span></span>`, note: "Substitute into the formula." },
      { math: `<span class="m"><span class="c1"><i>x</i> ≈ 1.44</span> &nbsp;or&nbsp; <i>x</i> ≈ −10.44</span>`, note: "√141 ≈ 11.874. A width cannot be negative, so reject the second root." },
      { math: `<span class="m">(8 + 2.874)(10 + 2.874) ≈ 10.874 × 12.874 ≈ 140.0 ✓</span>`, note: "Check the area with x ≈ 1.437." }
    ],
    answer: `The frame should be <span class="m"><span class="fr"><span>−9 + √141</span><span>2</span></span> ≈ 1.44</span> inches wide.`
  },
  why: `<p>Quadratic equations from measurement, physics and finance rarely factor. The quadratic formula solves all of them with one procedure, which is why it is built into calculators, spreadsheets and engineering software. The discriminant answers a practical yes-or-no question before any solving: will the ball reach that height, can a fence of this length enclose that area, does the design have a solution at all?</p>
<p>A negative discriminant is also where the complex numbers of Algebra II begin. The formula itself, derived by completing the square, is a model of how a general method is built from a specific technique.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Solves quadratic equations for stopping distance or time in motion problems with constant acceleration." },
    { role: "Electrical engineer", use: "Uses the discriminant of the characteristic equation of an RLC circuit to tell whether it is overdamped, critically damped or underdamped." },
    { role: "Financial analyst", use: "Solves quadratic equations for a two-period interest rate, such as P(1 + r)² = A with extra cash flows." },
    { role: "Ballistics analyst", use: "Applies the quadratic formula to the height equation to find when a projectile reaches a target height." },
    { role: "Game developer", use: "Tests whether a ray hits a sphere by checking the sign of the discriminant of the intersection equation." },
    { role: "Architect", use: "Solves for dimensions that give a required floor area when one side depends on the other." }
  ],
  life: [
    "Working out how wide a border or frame can be for a given total area",
    "Finding when a thrown ball will be at a certain height",
    "Checking whether a fixed length of fencing can enclose a given area",
    "Estimating the speed at which a car's stopping distance reaches a limit"
  ],
  fields: [
    { name: "Physics", use: "Kinematics equations with acceleration are quadratic in time and solved with the formula." },
    { name: "Engineering", use: "Characteristic equations of second-order systems are solved and classified by the discriminant." },
    { name: "Computer graphics", use: "Ray-sphere intersection and collision detection use the discriminant to test for hits." },
    { name: "Economics", use: "Break-even and optimal output in quadratic cost and revenue models come from the formula." }
  ],
  prereqWhy: {
    "a1-quad-sqrt": "The formula is derived by completing the square on ax² + bx + c = 0, and it relies on the square root property with ±."
  },
  unlocksWhy: {
    "a2-quad-form-eq": "When the quadratic in <i>u</i> does not factor, the quadratic formula gives its roots and the discriminant counts them.",
    "a2-quad-complex": "A negative discriminant in the quadratic formula gives a conjugate pair of complex solutions <span class=\"m\"><i>p</i> ± <i>q</i>i</span>.",
    "a1-quad-graphs": "The formula gives the x-intercepts of a parabola, and the discriminant says whether there are two, one or none."
  },
  beyond: [
    { field: "Algebra II", why: "Negative discriminants lead to complex solutions a ± bi, and the formula solves equations in quadratic form such as x⁴ − 5x² + 4 = 0." },
    { field: "Precalculus", why: "Polynomial and rational inequalities, and intersections of conic sections, are solved with the formula." },
    { field: "Differential Equations", why: "The characteristic equation of a second-order linear equation is a quadratic whose discriminant decides the form of the solution." },
    { field: "Physics", why: "Time of flight and collision problems with constant acceleration are solved with the quadratic formula." }
  ],
  mistakes: [
    { wrong: `Using the equation before it is in standard form: for <span class="m">3<i>x</i><sup>2</sup> = 2<i>x</i> + 7</span> taking <span class="m"><i>b</i> = 2</span>, <span class="m"><i>c</i> = 7</span>.`, fix: `Move everything to one side first: <span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> − 7 = 0</span>, so <span class="m"><i>a</i> = 3</span>, <span class="m"><i>b</i> = −2</span>, <span class="m"><i>c</i> = −7</span>.` },
    { wrong: `Squaring a negative <span class="m"><i>b</i></span> without parentheses: for <span class="m"><i>b</i> = −4</span> writing <span class="m"><i>b</i><sup>2</sup> = −16</span>.`, fix: `<span class="m"><i>b</i><sup>2</sup> = (−4)<sup>2</sup> = 16</span>. The discriminant is always computed with <span class="m"><i>b</i></span> in parentheses.` },
    { wrong: `Dividing only part of the numerator by <span class="m">2<i>a</i></span>: <span class="m"><i>x</i> = −<i>b</i> ± √<i>D</i>/(2<i>a</i>)</span>.`, fix: `The fraction bar covers the whole numerator: <span class="m">(−<i>b</i> ± √<i>D</i>)/(2<i>a</i>)</span>. When reducing, divide every term in the numerator by the common factor.` }
  ],
  practice: [
    { q: `Use the quadratic formula to solve <span class="m"><i>x</i><sup>2</sup> + 5<i>x</i> + 6 = 0</span>.`, a: `<span class="m"><i>D</i> = 25 − 24 = 1</span>, so <span class="m"><i>x</i> = <span class="fr"><span>−5 ± 1</span><span>2</span></span></span>: <span class="m"><i>x</i> = −2</span> or <span class="m"><i>x</i> = −3</span>.` },
    { q: `Solve <span class="m">2<i>x</i><sup>2</sup> − 4<i>x</i> − 3 = 0</span>.`, a: `<span class="m"><i>D</i> = 16 + 24 = 40</span>, <span class="m"><i>x</i> = <span class="fr"><span>4 ± √40</span><span>4</span></span> = <span class="fr"><span>4 ± 2√10</span><span>4</span></span> = <span class="fr"><span>2 ± √10</span><span>2</span></span></span>, about <span class="m">2.58</span> and <span class="m">−0.58</span>.` },
    { q: `Use the discriminant to find the number of real solutions of (a) <span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 5 = 0</span>, (b) <span class="m">9<i>x</i><sup>2</sup> − 12<i>x</i> + 4 = 0</span>, (c) <span class="m">2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0</span>.`, a: `(a) <span class="m">4 − 20 = −16 &lt; 0</span>: no real solution. (b) <span class="m">144 − 144 = 0</span>: one real solution, <span class="m"><i>x</i> = <span class="fr"><span>2</span><span>3</span></span></span>. (c) <span class="m">9 + 8 = 17 &gt; 0</span>: two irrational solutions.` },
    { q: `Solve <span class="m">3<i>x</i><sup>2</sup> = 2<i>x</i> + 7</span>.`, a: `<span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> − 7 = 0</span>, <span class="m"><i>D</i> = 4 + 84 = 88</span>, <span class="m"><i>x</i> = <span class="fr"><span>2 ± √88</span><span>6</span></span> = <span class="fr"><span>2 ± 2√22</span><span>6</span></span> = <span class="fr"><span>1 ± √22</span><span>3</span></span></span>, about <span class="m">1.90</span> and <span class="m">−1.23</span>.` }
  ],
  origin: `The Indian mathematician Brahmagupta, in his <i>Brāhmasphuṭasiddhānta</i> of 628 CE, stated in words a rule equivalent to the quadratic formula for one root of <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> = <i>c</i></span>.`
};
