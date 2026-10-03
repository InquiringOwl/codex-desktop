window.ARITH = window.ARITH || {};
ARITH["trig-equations-multi"] = {
  title: "Equations with Multiple Angles & Identities",
  short: "sin 2x = k, tan 3x = k, and equations needing an identity",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Trigonometry · equations",
  hero: `<span class="m">sin <span class="c1">2<i>x</i></span> = √3/2 &nbsp;⇒&nbsp; <span class="c1">2<i>x</i></span> = π/3, 2π/3, 7π/3, 8π/3 &nbsp;⇒&nbsp; <span class="c2"><i>x</i></span> = <span class="c5">π/6</span>, <span class="c5">π/3</span>, <span class="c5">7π/6</span>, <span class="c5">4π/3</span></span>`,
  lede: `When the angle is <span class="m">2<i>x</i></span> or <span class="m">3<i>x</i></span>, the function repeats faster and the equation has more solutions in one turn. When different angles are mixed, an identity brings them to one angle first.`,
  plain: `<p>As <span class="m"><span class="c2"><i>x</i></span></span> goes once around, from <span class="m">0</span> to <span class="m">2π</span>, the angle <span class="m"><span class="c1">2<i>x</i></span></span> goes around twice, from <span class="m">0</span> to <span class="m">4π</span>. So <span class="m">sin <span class="c1">2<i>x</i></span> = √3/2</span> has twice as many solutions as <span class="m">sin <i>x</i> = √3/2</span>: four instead of two.</p>
<p>The safe method is to give the multiple angle its own name, <span class="m"><i>u</i> = <span class="c1">2<i>x</i></span></span>. Solve for <span class="m"><i>u</i></span> over the stretched interval <span class="m">[0, 4π)</span>, then divide every answer by 2 to get back to <span class="m"><span class="c2"><i>x</i></span></span>.</p>
<p>Some equations mix angles, such as <span class="m">sin 2<i>x</i> = cos <i>x</i></span>. A double-angle or sum identity rewrites everything in terms of <span class="m"><i>x</i></span>. Then the usual tools take over: move everything to one side, factor, and solve each factor. If <span class="m"><i>x</i></span> also appears outside a function, as in <span class="m">2 sin <i>x</i> = <i>x</i></span>, no algebra will isolate it, and a graph gives approximate solutions.</p>`,
  formal: `<p><b>Multiple angles.</b> To solve <span class="m">fn(<span class="c1"><i>Bx</i></span>) = <i>k</i></span> on <span class="m">0 ≤ <span class="c2"><i>x</i></span> &lt; 2π</span> with <span class="m"><i>B</i> &gt; 0</span>, let <span class="m"><i>u</i> = <span class="c1"><i>Bx</i></span></span>. Then</p>
<div class="display">0 ≤ <span class="c2"><i>x</i></span> &lt; 2π &nbsp;⇔&nbsp; 0 ≤ <span class="c1"><i>u</i></span> &lt; 2<i>B</i>π, &nbsp;&nbsp; <span class="c2"><i>x</i></span> = <span class="c1"><i>u</i></span>/<i>B</i><br><span class="c1"><i>u</i></span> = α + 2π<i>n</i> &nbsp;⇒&nbsp; <span class="c2"><i>x</i></span> = α/<i>B</i> + (2π/<i>B</i>)<i>n</i> &nbsp;&nbsp; (tangent: <span class="c2"><i>x</i></span> = α/<i>B</i> + (π/<i>B</i>)<i>n</i>)</div>
<p>Each base solution <span class="m">α</span> of <span class="m">fn(<i>u</i>) = <i>k</i></span> is repeated every period (<span class="m">2π</span>, or <span class="m">π</span> for tangent) until <span class="m"><i>u</i></span> reaches <span class="m">2<i>B</i>π</span>. For a whole number <span class="m"><i>B</i></span>, <span class="m">sin <i>Bx</i> = <i>k</i></span> with <span class="m">|<i>k</i>| &lt; 1</span> has <span class="m">2<i>B</i></span> solutions on <span class="m">[0, 2π)</span>, and so does <span class="m">tan <i>Bx</i> = <i>k</i></span>. Example: <span class="m">tan <span class="c1">3<i>x</i></span> = 1</span> gives <span class="m"><span class="c1">3<i>x</i></span> = π/4 + π<i>n</i></span>, so <span class="m"><span class="c2"><i>x</i></span> = π/12 + (π/3)<i>n</i></span>: six solutions <span class="m"><span class="c5">π/12, 5π/12, 3π/4, 13π/12, 17π/12, 7π/4</span></span>.</p>
<p><b>Identities first.</b> When angles are mixed, rewrite with <span class="m">sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i></span> and the form of <span class="m">cos 2<i>x</i> = cos<sup>2</sup> <i>x</i> − sin<sup>2</sup> <i>x</i> = 2 cos<sup>2</sup> <i>x</i> − 1 = 1 − 2 sin<sup>2</sup> <i>x</i></span> that matches the other function in the equation; a difference such as <span class="m">sin 3<i>x</i> cos <i>x</i> − cos 3<i>x</i> sin <i>x</i></span> collapses to <span class="m">sin 2<i>x</i></span> by the sum and difference formulas. Then factor. Never divide both sides by <span class="m">cos <i>x</i></span> or <span class="m">sin <i>x</i></span>: it can be 0, and those solutions would be lost. <b>Graphical solutions.</b> An equation such as <span class="m">2 sin <i>x</i> = <i>x</i></span> is solved by intersecting <span class="m"><i>y</i> = 2 sin <i>x</i></span> with <span class="m"><i>y</i> = <i>x</i></span>: on <span class="m">[0, 2π)</span> the solutions are <span class="m"><span class="c5">0</span></span> and <span class="m"><span class="c5"><i>x</i> ≈ 1.8955</span></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>kx</i>`, name: "Multiple angle", desc: "The angle inside the function, such as 2x or 3x. Call it u and solve for it first." },
    { c: "c2", sym: `<i>x</i>`, name: "The variable", desc: "Found by dividing each value of u by k. It stays in [0, 2π)." },
    { c: "c5", sym: `<i>x</i> = …`, name: "Solutions", desc: "The values of x that make the original equation true." }
  ],
  steps: {
    title: "How to solve an equation with a multiple angle or an identity",
    items: [
      `Look at the angles. If one multiple angle <span class="m"><i>kx</i></span> appears alone, set <span class="m"><i>u</i> = <i>kx</i></span>. If different angles appear, go to step 5.`,
      `Stretch the interval: <span class="m">0 ≤ <i>x</i> &lt; 2π</span> becomes <span class="m">0 ≤ <i>u</i> &lt; 2<i>k</i>π</span>.`,
      `Solve for <span class="m"><i>u</i></span>: find the solutions in <span class="m">[0, 2π)</span>, then keep adding <span class="m">2π</span> (<span class="m">π</span> for tangent) until you pass <span class="m">2<i>k</i>π</span>.`,
      `Divide every <span class="m"><i>u</i></span> by <span class="m"><i>k</i></span>. For the general solution, divide the period too: <span class="m">2π/<i>k</i></span> (or <span class="m">π/<i>k</i></span> for tangent).`,
      `With mixed angles, use a double-angle or sum identity to write everything in one angle. Move all terms to one side and factor. Set each factor equal to 0.`,
      `If <span class="m"><i>x</i></span> also appears outside a function, graph both sides and read the intersections to the accuracy asked.`
    ]
  },
  example: {
    prompt: `Solve <span class="m">sin 2<i>x</i> = cos <i>x</i></span> on <span class="m">[0, 2π)</span>, then give the general solution.`,
    lines: [
      { math: `<span class="m">2 sin <i>x</i> cos <i>x</i> = cos <i>x</i></span>`, note: "The angles 2x and x are mixed. The double-angle formula writes sin 2x in terms of x." },
      { math: `<span class="m">2 sin <i>x</i> cos <i>x</i> − cos <i>x</i> = 0</span>`, note: "Move everything to one side. Do not divide by cos x: it is 0 at π/2 and 3π/2." },
      { math: `<span class="m">cos <i>x</i> (2 sin <i>x</i> − 1) = 0</span>`, note: "Factor out the common factor cos x." },
      { math: `<span class="m">cos <i>x</i> = 0 ⇒ <i>x</i> = <span class="c5">π/2</span>, <span class="c5">3π/2</span></span>`, note: "Cosine is 0 at the top and bottom of the unit circle." },
      { math: `<span class="m">sin <i>x</i> = 1/2 ⇒ <i>x</i> = <span class="c5">π/6</span>, <span class="c5">5π/6</span></span>`, note: "Reference angle π/6; sine is positive in Quadrants I and II." },
      { math: `<span class="m"><i>x</i> = π/6 + 2π<i>n</i>, &nbsp;5π/6 + 2π<i>n</i>, &nbsp;π/2 + π<i>n</i></span>`, note: "π/2 and 3π/2 are half a turn apart, so one family π/2 + πn covers both." }
    ],
    answer: `On <span class="m">[0, 2π)</span>: <span class="m"><span class="c5">π/6</span>, <span class="c5">π/2</span>, <span class="c5">5π/6</span>, <span class="c5">3π/2</span></span>. General solution: <span class="m"><i>x</i> = π/6 + 2π<i>n</i></span>, <span class="m">5π/6 + 2π<i>n</i></span> or <span class="m">π/2 + π<i>n</i></span>.`
  },
  why: `<p>Real signals rarely run at one slow speed. A guitar string vibrates at a fundamental frequency and at 2, 3 and 4 times it; an alternating current runs at 120π radians per second; a rotating part may wobble twice per turn. Each faster repetition is a multiple angle, and asking when it reaches a level means solving an equation like sin 2x = k over a stretched interval. Mixed terms such as sin 2x and cos x appear when two effects combine, and the identities you learned are exactly the tools that untangle them.</p>`,
  careers: [
    { role: "Acoustics engineer", use: "Finds where a harmonic sin(nπx/L) on a string or in a pipe is zero, which places the nodes of the nth mode." },
    { role: "Electrical engineer", use: "Solves for the instants when a 60 Hz voltage sin(120πt) crosses a threshold, a multiple-angle equation in time." },
    { role: "Mechanical engineer", use: "Locates the crank angles where a balancing force with a 2θ term cancels a 1θ term, which needs a double-angle identity." },
    { role: "Antenna engineer", use: "Places the nulls of an array pattern by solving equations of the form sin(Nψ/2) = 0." },
    { role: "Optical engineer", use: "Finds the angles of dark fringes in a diffraction pattern, where sin θ takes evenly spaced values." },
    { role: "Robotics engineer", use: "Solves joint-angle equations that mix θ and 2θ by rewriting them with double-angle formulas and factoring." }
  ],
  life: [
    "A ceiling fan with three blades looks the same three times per turn, so a blade points at you three times",
    "Clock hands overlap 11 times in 12 hours, a problem about two different angular speeds",
    "A guitar string plucked at its middle leaves out the even harmonics, which have a node there",
    "A lighthouse with two lamps back to back sweeps its beam across a ship twice per turn"
  ],
  fields: [
    { name: "Physics", use: "Standing waves, interference and diffraction all lead to equations in multiples of an angle." },
    { name: "Electrical engineering", use: "Harmonics at 2, 3 and more times the base frequency give multiple-angle equations in time." },
    { name: "Music acoustics", use: "Overtones of strings and pipes are multiple angles of the fundamental, with nodes where sin(nx) = 0." },
    { name: "Mechanical engineering", use: "Engine balance and vibration problems mix θ and 2θ terms that are solved with identities." }
  ],
  prereqWhy: {
    "trig-equations": "Every problem here ends in simple equations such as sin u = 1/2, solved with reference angles, quadrants and periods.",
    "trig-double-half": "sin 2x = 2 sin x cos x and the three forms of cos 2x rewrite a mixed equation in a single angle so it can be factored."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "Critical points of functions such as sin 2x + 2 cos x come from equations like 2 cos 2x − 2 sin x = 0." },
    { field: "Physics (Waves)", why: "Nodes and antinodes of the nth harmonic solve sin(nπx/L) = 0 and sin(nπx/L) = ±1." },
    { field: "Differential Equations", why: "Fourier series use sin nx and cos nx, and their zeros and peaks are multiple-angle solutions." }
  ],
  mistakes: [
    { wrong: `Solving <span class="m">sin 2<i>x</i> = √3/2</span> as <span class="m">2<i>x</i> = π/3, 2π/3</span>, so <span class="m"><i>x</i> = π/6, π/3</span> only.`, fix: `When <span class="m"><i>x</i></span> runs over <span class="m">[0, 2π)</span>, <span class="m">2<i>x</i></span> runs over <span class="m">[0, 4π)</span>. Add <span class="m">2π</span> first: <span class="m">7π/3, 8π/3</span>, which give <span class="m">7π/6, 4π/3</span> as well.` },
    { wrong: `Dividing the 2 out of the function: <span class="m">sin 2<i>x</i> = 1/2 ⇒ sin <i>x</i> = 1/4</span>.`, fix: `The 2 is inside the function: <span class="m">sin 2<i>x</i> ≠ 2 sin <i>x</i></span>. Solve for <span class="m">2<i>x</i></span>, or use <span class="m">sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i></span>.` },
    { wrong: `Dividing <span class="m">2 sin <i>x</i> cos <i>x</i> = cos <i>x</i></span> by <span class="m">cos <i>x</i></span>, which leaves only <span class="m">π/6, 5π/6</span>.`, fix: `Factor: <span class="m">cos <i>x</i>(2 sin <i>x</i> − 1) = 0</span>. The factor <span class="m">cos <i>x</i> = 0</span> adds <span class="m">π/2</span> and <span class="m">3π/2</span>.` },
    { wrong: `Writing the general solution of <span class="m">tan 3<i>x</i> = 1</span> as <span class="m"><i>x</i> = π/12 + π<i>n</i></span>.`, fix: `Divide the period as well: <span class="m">3<i>x</i> = π/4 + π<i>n</i></span> gives <span class="m"><i>x</i> = π/12 + (π/3)<i>n</i></span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">2 cos 2<i>x</i> + 1 = 0</span> on <span class="m">[0, 2π)</span>.`, a: `<span class="m">cos 2<i>x</i> = −1/2</span> with <span class="m">2<i>x</i> ∈ [0, 4π)</span>: <span class="m">2<i>x</i> = 2π/3, 4π/3, 8π/3, 10π/3</span>. So <span class="m"><i>x</i> = π/3, 2π/3, 4π/3, 5π/3</span>.` },
    { q: `Solve <span class="m">tan 3<i>x</i> = 1</span> on <span class="m">[0, 2π)</span> and give the general solution.`, a: `<span class="m">3<i>x</i> ∈ [0, 6π)</span>: <span class="m">3<i>x</i> = π/4, 5π/4, 9π/4, 13π/4, 17π/4, 21π/4</span>. So <span class="m"><i>x</i> = π/12, 5π/12, 3π/4, 13π/12, 17π/12, 7π/4</span>; general <span class="m"><i>x</i> = π/12 + (π/3)<i>n</i></span>.` },
    { q: `Solve <span class="m">cos 2<i>x</i> + cos <i>x</i> = 0</span> on <span class="m">[0, 2π)</span>.`, a: `Use <span class="m">cos 2<i>x</i> = 2 cos<sup>2</sup> <i>x</i> − 1</span>: <span class="m">2 cos<sup>2</sup> <i>x</i> + cos <i>x</i> − 1 = (2 cos <i>x</i> − 1)(cos <i>x</i> + 1) = 0</span>. <span class="m">cos <i>x</i> = 1/2</span>: <span class="m">π/3, 5π/3</span>; <span class="m">cos <i>x</i> = −1</span>: <span class="m">π</span>. Solutions <span class="m">π/3, π, 5π/3</span>.` },
    { q: `Solve <span class="m">sin 3<i>x</i> cos <i>x</i> − cos 3<i>x</i> sin <i>x</i> = 1/2</span> on <span class="m">[0, 2π)</span>.`, a: `The left side is <span class="m">sin(3<i>x</i> − <i>x</i>) = sin 2<i>x</i></span>. With <span class="m">2<i>x</i> ∈ [0, 4π)</span>: <span class="m">2<i>x</i> = π/6, 5π/6, 13π/6, 17π/6</span>. So <span class="m"><i>x</i> = π/12, 5π/12, 13π/12, 17π/12</span>.` }
  ]
};
