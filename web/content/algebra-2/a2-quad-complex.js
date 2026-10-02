window.ARITH = window.ARITH || {};

ARITH["a2-quad-complex"] = {
  title: "Quadratics with Complex Solutions",
  short: "A negative discriminant gives a conjugate pair p ± qi",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Complex numbers · quadratic equations",
  hero: `<span class="m"><span class="c1"><i>x</i><sup>2</sup> − 4<i>x</i> + 13</span> = 0 &nbsp;·&nbsp; <span class="c3">Δ = −36</span> &nbsp;⇒&nbsp; <span class="c2"><i>x</i> = 2 ± 3<i>i</i></span></span>`,
  lede: `When the <span class="c3">discriminant</span> <span class="m"><span class="c3"><i>b</i><sup>2</sup> − 4<i>ac</i></span></span> is negative, a quadratic has no real solutions but two complex ones, <span class="m"><span class="c2"><i>p</i> ± <i>qi</i></span></span>. They are conjugates, and their real part <span class="m"><i>p</i></span> sits on the parabola's <span class="c4">axis of symmetry</span>.`,
  plain: `<p>The quadratic formula has <span class="m">√<span class="ov"><i>b</i><sup>2</sup> − 4<i>ac</i></span></span> in it. In Algebra I a negative number under that root meant "no real solution". With <span class="m"><i>i</i></span> the root exists, so the formula keeps going and gives two complex solutions.</p>
<p>The ± in the formula now adds and subtracts an imaginary amount. The two solutions have the same real part and opposite imaginary parts, so they are a <b>conjugate pair</b>, like <span class="m">2 + 3<i>i</i></span> and <span class="m">2 − 3<i>i</i></span>.</p>
<p>The graph tells the same story. The real solutions of <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> are the <span class="m"><i>x</i></span>-intercepts of <span class="m"><i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span>. When the parabola never reaches the <span class="m"><i>x</i></span>-axis there are no intercepts, and the solutions are non-real. Their real part is still the <span class="m"><i>x</i></span>-coordinate of the vertex.</p>
<p>You can also go backward. If you know one complex solution of a quadratic with real coefficients, the other is its conjugate, and you can multiply the two factors to rebuild the equation.</p>`,
  formal: `<p>For <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with real coefficients and <span class="m"><i>a</i> ≠ 0</span>, let <span class="m"><span class="c3">Δ = <i>b</i><sup>2</sup> − 4<i>ac</i></span></span>. If <span class="m">Δ &gt; 0</span> there are two real solutions, if <span class="m">Δ = 0</span> one repeated real solution (multiplicity 2), and if <span class="m">Δ &lt; 0</span> two non-real complex conjugate solutions:</p>
<div class="display"><span class="c2"><i>x</i> = <i>p</i> ± <i>qi</i></span>, &nbsp; <span class="c4"><i>p</i> = <span class="fr"><span>−<i>b</i></span><span>2<i>a</i></span></span></span>, &nbsp; <i>q</i> = <span class="fr"><span>√<span class="ov">−Δ</span></span><span>2|<i>a</i>|</span></span><br>vertex <span class="m">(<span class="c4"><i>p</i></span>, <i>k</i>)</span>, &nbsp; <i>k</i> = −<span class="fr"><span>Δ</span><span>4<i>a</i></span></span><br>(<i>x</i> − (<i>p</i> + <i>qi</i>))(<i>x</i> − (<i>p</i> − <i>qi</i>)) = (<i>x</i> − <i>p</i>)<sup>2</sup> + <i>q</i><sup>2</sup> = <i>x</i><sup>2</sup> − 2<i>px</i> + (<i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>)</div>
<p>When <span class="m">Δ &lt; 0</span>, <span class="m"><i>k</i></span> has the same sign as <span class="m"><i>a</i></span>, so the vertex and the whole parabola lie on one side of the <span class="m"><i>x</i></span>-axis. The solutions satisfy <span class="m"><i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = 2<i>p</i> = −<span class="fr"><span><i>b</i></span><span><i>a</i></span></span></span> and <span class="m"><i>x</i><sub>1</sub><i>x</i><sub>2</sub> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> = <span class="fr"><span><i>c</i></span><span><i>a</i></span></span></span>, a quick check. In the hero, <span class="m">Δ = 16 − 52 = −36</span>, <span class="m">√<span class="ov">−36</span> = 6<i>i</i></span> and <span class="m"><i>x</i> = (4 ± 6<i>i</i>)/2 = 2 ± 3<i>i</i></span>; the vertex is <span class="m">(2, 9)</span>, above the axis.</p>`,
  legend: [
    { c: "c1", sym: `<i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>`, name: "Parabola", desc: "Its x-intercepts are the real solutions, when there are any." },
    { c: "c2", sym: `<i>p</i> ± <i>qi</i>`, name: "Roots", desc: "The two solutions; a conjugate pair when the discriminant is negative." },
    { c: "c3", sym: `Δ`, name: "Discriminant", desc: "Δ = b² − 4ac: positive, zero or negative decides the kind of solutions." },
    { c: "c4", sym: `<i>x</i> = <i>p</i>`, name: "Axis of symmetry", desc: "x = −b/(2a), the real part shared by both roots." }
  ],
  steps: {
    title: "How to solve a quadratic with complex solutions",
    items: [
      `Write the equation in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> and compute <span class="m"><span class="c3">Δ = <i>b</i><sup>2</sup> − 4<i>ac</i></span></span>.`,
      `If <span class="m">Δ &lt; 0</span>, write <span class="m">√<span class="ov">Δ</span> = <i>i</i>√<span class="ov">−Δ</span></span> and simplify the radical.`,
      `Substitute into <span class="m"><i>x</i> = (−<i>b</i> ± √<span class="ov">Δ</span>)/(2<i>a</i>)</span> and divide both terms by <span class="m">2<i>a</i></span> to get <span class="m"><span class="c2"><i>p</i> ± <i>qi</i></span></span>.`,
      `Or complete the square: <span class="m">(<i>x</i> − <i>p</i>)<sup>2</sup> = −<i>q</i><sup>2</sup></span>, so <span class="m"><i>x</i> − <i>p</i> = ±<i>qi</i></span>.`,
      `Check: the sum should be <span class="m">−<i>b</i>/<i>a</i></span> and the product <span class="m"><i>c</i>/<i>a</i></span>, or substitute one root into the equation.`
    ]
  },
  example: {
    prompt: `Solve <span class="m"><span class="c1">2<i>x</i><sup>2</sup> + 4<i>x</i> + 5</span> = 0</span> and describe the graph of <span class="m"><i>y</i> = 2<i>x</i><sup>2</sup> + 4<i>x</i> + 5</span>.`,
    lines: [
      { math: `<span class="m"><span class="c3">Δ = 4<sup>2</sup> − 4(2)(5) = 16 − 40 = −24</span></span>`, note: "a = 2, b = 4, c = 5. The discriminant is negative, so expect two non-real conjugate solutions." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>−4 ± √<span class="ov">−24</span></span><span>4</span></span></span>`, note: "Quadratic formula with 2a = 4." },
      { math: `<span class="m">√<span class="ov">−24</span> = <i>i</i>√<span class="ov">24</span> = 2√<span class="ov">6</span> <i>i</i></span>`, note: "Rewrite with i, then take out the square factor 4." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>−4 ± 2√<span class="ov">6</span> <i>i</i></span><span>4</span></span> = <span class="c2">−1 ± <span class="fr"><span>√<span class="ov">6</span></span><span>2</span></span><i>i</i></span></span>`, note: "Divide both terms by 4." },
      { math: `<span class="m">sum = −2 = −<span class="fr"><span>4</span><span>2</span></span>, &nbsp; product = 1 + <span class="fr"><span>6</span><span>4</span></span> = <span class="fr"><span>5</span><span>2</span></span></span>`, note: "Check: sum −b/a and product c/a, using p² + q² for the product." },
      { math: `<span class="m">vertex (<span class="c4">−1</span>, 3)</span>`, note: "x = −b/(2a) = −1 and y = 2 − 4 + 5 = 3. The vertex is above the axis and the parabola opens up." }
    ],
    answer: `<span class="m c2"><i>x</i> = −1 ± <span class="fr"><span>√<span class="ov">6</span></span><span>2</span></span><i>i</i></span>; the parabola has vertex <span class="m">(−1, 3)</span>, opens up and has no <span class="m"><i>x</i></span>-intercepts.`
  },
  why: `<p>Quadratics with negative discriminants are not a curiosity. A spring with a damper, a swinging door closer, a car's suspension and an electric circuit with a resistor, inductor and capacitor are all described by a quadratic characteristic equation. Real roots mean the motion dies away smoothly. Complex roots <span class="m"><i>p</i> ± <i>qi</i></span> mean it oscillates: <span class="m"><i>q</i></span> sets how fast it swings and <span class="m"><i>p</i></span> sets how fast the swings fade.</p>
<p>This topic also makes the solution count tidy. Every quadratic has exactly two complex solutions counted with multiplicity, which is the first case of the Fundamental Theorem of Algebra.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Solves mr² + cr + k = 0 for a spring and damper; complex roots mean the part vibrates, which matters for machines and car suspensions." },
    { role: "Electrical engineer", use: "Checks R² − 4L/C, the discriminant of an RLC circuit's characteristic equation, to see whether the circuit rings." },
    { role: "Control systems engineer", use: "Tunes a controller so its characteristic roots are a conjugate pair with a chosen real part, for a fast response with limited overshoot." },
    { role: "Audio filter designer", use: "Places conjugate pairs of poles to shape the resonance of an equalizer or synthesizer filter." },
    { role: "Structural engineer", use: "Estimates how a tall building sways and how quickly the sway dies out from a damped oscillator model." }
  ],
  life: [
    "A screen door with a closer that swings back and forth before latching has complex roots",
    "Car shock absorbers are tuned so the bounce after a bump fades quickly",
    "A guitar string's note rings and fades because its motion follows a damped oscillation",
    "Bathroom scales and analog needles settle after wobbling, another conjugate-pair motion"
  ],
  fields: [
    { name: "Physics", use: "Damped harmonic oscillators: underdamped motion comes from complex roots." },
    { name: "Electrical engineering", use: "RLC circuits ring when their characteristic equation has a negative discriminant." },
    { name: "Control theory", use: "The location of conjugate root pairs decides stability and response speed." },
    { name: "Mathematics", use: "Quadratics are the first case of the Fundamental Theorem of Algebra." }
  ],
  prereqWhy: {
    "a2-complex-ops": "Simplifying √−24 = 2√6 i, splitting the result into p ± qi and checking a root by substitution all use complex arithmetic.",
    "a1-quad-formula": "The quadratic formula and the discriminant come from Algebra I; the only new case here is a negative discriminant."
  },
  unlocksWhy: {
    "a2-fta": "Every quadratic has exactly two complex solutions; the Fundamental Theorem extends this to degree n, and the conjugate pair becomes the complex conjugate root theorem."
  },
  beyond: [
    { field: "Calculus II", why: "Differential equations such as y″ + by′ + cy = 0 are solved by finding the roots of a quadratic; complex roots give sine and cosine solutions." },
    { field: "Physics", why: "Damped oscillations and resonance are read off the conjugate roots of a quadratic." },
    { field: "Precalculus", why: "Complex roots of higher-degree polynomials and their factoring over the reals build on conjugate pairs." }
  ],
  mistakes: [
    { wrong: `Reporting "no solution" for <span class="m"><i>x</i><sup>2</sup> − 4<i>x</i> + 13 = 0</span> when complex solutions are asked for.`, fix: `There is no real solution, but in <span class="m">ℂ</span> the formula gives <span class="m"><i>x</i> = 2 ± 3<i>i</i></span>.` },
    { wrong: `<span class="m"><span class="fr"><span>−4 ± 2√<span class="ov">6</span> <i>i</i></span><span>4</span></span> = −1 ± 2√<span class="ov">6</span> <i>i</i></span>`, fix: `Divide both terms by 4: <span class="m">−1 ± <span class="fr"><span>√<span class="ov">6</span></span><span>2</span></span><i>i</i></span>.` },
    { wrong: `Giving only one solution, <span class="m">2 + 3<i>i</i></span>.`, fix: `With real coefficients the non-real solutions come as a conjugate pair: <span class="m">2 + 3<i>i</i></span> and <span class="m">2 − 3<i>i</i></span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> + 25 = 0</span>.`, a: `<span class="m"><i>x</i><sup>2</sup> = −25</span>, so <span class="m"><i>x</i> = ±√<span class="ov">−25</span> = ±5<i>i</i></span>.` },
    { q: `Use the discriminant to classify the solutions of <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> + 9 = 0</span> and <span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> + 4 = 0</span>.`, a: `<span class="m">Δ = 36 − 36 = 0</span>: one repeated real solution, <span class="m"><i>x</i> = 3</span>. <span class="m">Δ = 4 − 48 = −44 &lt; 0</span>: two non-real conjugate solutions.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> + 6<i>x</i> + 13 = 0</span> by completing the square.`, a: `<span class="m"><i>x</i><sup>2</sup> + 6<i>x</i> + 9 = −13 + 9</span>, so <span class="m">(<i>x</i> + 3)<sup>2</sup> = −4</span>, <span class="m"><i>x</i> + 3 = ±2<i>i</i></span> and <span class="m"><i>x</i> = −3 ± 2<i>i</i></span>.` },
    { q: `Write a quadratic equation with integer coefficients that has <span class="m">3 − 2<i>i</i></span> as a solution.`, a: `The other solution is <span class="m">3 + 2<i>i</i></span>. <span class="m">(<i>x</i> − 3 + 2<i>i</i>)(<i>x</i> − 3 − 2<i>i</i>) = (<i>x</i> − 3)<sup>2</sup> + 4 = <i>x</i><sup>2</sup> − 6<i>x</i> + 13</span>, so <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> + 13 = 0</span>.` }
  ],
  origin: `In his <i>Ars Magna</i> (1545), Gerolamo Cardano asked for two numbers with sum 10 and product 40, which leads to <span class="m"><i>x</i><sup>2</sup> − 10<i>x</i> + 40 = 0</span> with discriminant <span class="m">−60</span>. He wrote the answers as <span class="m">5 + √<span class="ov">−15</span></span> and <span class="m">5 − √<span class="ov">−15</span></span> and checked that their product is <span class="m">25 + 15 = 40</span>, the first recorded calculation with a conjugate pair.`
};
