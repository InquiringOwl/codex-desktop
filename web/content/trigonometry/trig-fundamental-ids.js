window.ARITH = window.ARITH || {};
ARITH["trig-fundamental-ids"] = {
  title: "Fundamental Identities",
  short: "Reciprocal, quotient, Pythagorean, even/odd and period",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Identities · the fundamental identities",
  hero: `<span class="m"><span class="c3">sin</span><sup>2</sup> <span class="c1"><i>θ</i></span> + <span class="c2">cos</span><sup>2</sup> <span class="c1"><i>θ</i></span> = <span class="c4">1</span> &nbsp;&nbsp; 1 + <span class="c5">tan</span><sup>2</sup> <span class="c1"><i>θ</i></span> = <span class="c4">sec</span><sup>2</sup> <span class="c1"><i>θ</i></span> &nbsp;&nbsp; 1 + <span class="c5">cot</span><sup>2</sup> <span class="c1"><i>θ</i></span> = <span class="c4">csc</span><sup>2</sup> <span class="c1"><i>θ</i></span></span>`,
  lede: `A handful of equations hold for every angle where both sides are defined. They let you trade one trigonometric function for another, find every value from one, and rewrite a tangled expression in sines and cosines until it simplifies.`,
  plain: `<p>An <b>identity</b> is an equation that is true for every value of the variable where both sides make sense. The fundamental identities all come straight from the definitions <span class="m">sin <i>θ</i> = <span class="c3"><i>y</i></span>/<span class="c4"><i>r</i></span></span>, <span class="m">cos <i>θ</i> = <span class="c2"><i>x</i></span>/<span class="c4"><i>r</i></span></span>, <span class="m">tan <i>θ</i> = <span class="c3"><i>y</i></span>/<span class="c2"><i>x</i></span></span>.</p>
<p>Flipping a fraction gives the <b>reciprocal identities</b>: csc, sec and cot are 1 over sin, cos and tan. Dividing <span class="m"><i>y</i>/<i>r</i></span> by <span class="m"><i>x</i>/<i>r</i></span> gives the <b>quotient identity</b> <span class="m">tan <i>θ</i> = sin <i>θ</i>/cos <i>θ</i></span>. The point is at distance <span class="m c4"><i>r</i></span>, so <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>r</i><sup>2</sup></span>; divide by <span class="m"><i>r</i><sup>2</sup></span> and you get <span class="m">sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = 1</span>. Divide by <span class="m"><i>x</i><sup>2</sup></span> or <span class="m"><i>y</i><sup>2</sup></span> instead and you get the other two <b>Pythagorean identities</b>.</p>
<p>Turning the other way, to <span class="m">−<i>θ</i></span>, reflects the point across the <span class="m"><i>x</i></span>-axis: <span class="m c2"><i>x</i></span> stays, <span class="m c3"><i>y</i></span> changes sign. So cosine is <b>even</b>, <span class="m">cos(−<i>θ</i>) = cos <i>θ</i></span>, and sine is <b>odd</b>, <span class="m">sin(−<i>θ</i>) = −sin <i>θ</i></span>. A full turn brings the point back to where it was, so every function repeats after <span class="m">2π</span>; tangent and cotangent already repeat after <span class="m">π</span>.</p>
<p>Each identity holds only where both sides are defined. <span class="m">tan <i>θ</i> = sin <i>θ</i>/cos <i>θ</i></span> says nothing at <span class="m"><i>θ</i> = π/2</span>, where neither side exists.</p>`,
  formal: `<p>For every <span class="m c1"><i>θ</i></span> at which both sides are defined:</p>
<div class="display"><b>Reciprocal</b> &nbsp; csc <i>θ</i> = <span class="fr"><span>1</span><span class="c3">sin <i>θ</i></span></span> &nbsp; sec <i>θ</i> = <span class="fr"><span>1</span><span class="c2">cos <i>θ</i></span></span> &nbsp; cot <i>θ</i> = <span class="fr"><span>1</span><span class="c5">tan <i>θ</i></span></span><br><b>Quotient</b> &nbsp; <span class="c5">tan <i>θ</i></span> = <span class="fr"><span class="c3">sin <i>θ</i></span><span class="c2">cos <i>θ</i></span></span> &nbsp; cot <i>θ</i> = <span class="fr"><span class="c2">cos <i>θ</i></span><span class="c3">sin <i>θ</i></span></span><br><b>Pythagorean</b> &nbsp; <span class="c3">sin</span><sup>2</sup> <i>θ</i> + <span class="c2">cos</span><sup>2</sup> <i>θ</i> = 1 &nbsp; 1 + <span class="c5">tan</span><sup>2</sup> <i>θ</i> = sec<sup>2</sup> <i>θ</i> &nbsp; 1 + cot<sup>2</sup> <i>θ</i> = csc<sup>2</sup> <i>θ</i><br><b>Even/odd</b> &nbsp; cos(−<i>θ</i>) = cos <i>θ</i>, sec(−<i>θ</i>) = sec <i>θ</i>; &nbsp; sin(−<i>θ</i>) = −sin <i>θ</i>, csc(−<i>θ</i>) = −csc <i>θ</i>, tan(−<i>θ</i>) = −tan <i>θ</i>, cot(−<i>θ</i>) = −cot <i>θ</i><br><b>Periodic</b> &nbsp; <i>f</i>(<i>θ</i> + 2π) = <i>f</i>(<i>θ</i>) for sin, cos, csc, sec; &nbsp; tan(<i>θ</i> + π) = tan <i>θ</i>, cot(<i>θ</i> + π) = cot <i>θ</i><br><b>Cofunction</b> &nbsp; sin(π/2 − <i>θ</i>) = cos <i>θ</i>, tan(π/2 − <i>θ</i>) = cot <i>θ</i>, sec(π/2 − <i>θ</i>) = csc <i>θ</i>, and the same with the names swapped</div>
<p>Here <span class="m">sin<sup>2</sup> <i>θ</i></span> means <span class="m">(sin <i>θ</i>)<sup>2</sup></span>. <b>Proofs.</b> With <span class="m">(<i>x</i>, <i>y</i>)</span> on the terminal side and <span class="m"><i>r</i> &gt; 0</span>: dividing <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>r</i><sup>2</sup></span> by <span class="m"><i>r</i><sup>2</sup></span>, <span class="m"><i>x</i><sup>2</sup></span> (when <span class="m"><i>x</i> ≠ 0</span>) or <span class="m"><i>y</i><sup>2</sup></span> (when <span class="m"><i>y</i> ≠ 0</span>) gives the three Pythagorean identities. The terminal side of <span class="m">−<i>θ</i></span> passes through <span class="m">(<i>x</i>, −<i>y</i>)</span>, which gives the even/odd identities. <span class="m"><i>θ</i> + 2π</span> has the same terminal side as <span class="m"><i>θ</i></span>; <span class="m"><i>θ</i> + π</span> passes through <span class="m">(−<i>x</i>, −<i>y</i>)</span>, which leaves <span class="m"><i>y</i>/<i>x</i></span> and <span class="m"><i>x</i>/<i>y</i></span> unchanged. The periods <span class="m">2π</span> and <span class="m">π</span> are the smallest that work.</p>
<p>A Pythagorean identity gives a value only up to sign: <span class="m">cos <i>θ</i> = ±√<span class="ov">1 − sin<sup>2</sup> <i>θ</i></span></span>, with the sign chosen by the quadrant of <span class="m"><i>θ</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Angle", desc: "Any angle in degrees or radians; −θ is its mirror image across the x-axis." },
    { c: "c2", sym: `cos <i>θ</i>`, name: "Cosine", desc: "The x-coordinate on the unit circle. Cosine and secant are even." },
    { c: "c3", sym: `sin <i>θ</i>`, name: "Sine", desc: "The y-coordinate on the unit circle. Sine and cosecant are odd." },
    { c: "c4", sym: `1, sec, csc`, name: "Hypotenuse", desc: "The radius 1 of the unit circle, and sec θ or csc θ after dividing the triangle by cos θ or sin θ." },
    { c: "c5", sym: `tan, cot`, name: "Tangent, result", desc: "tan θ = sin θ / cos θ and its reciprocal cot θ; also the simplified result." }
  ],
  steps: {
    title: "How to simplify a trigonometric expression",
    items: [
      `Rewrite every function in sines and cosines with the reciprocal and quotient identities.`,
      `Use even/odd and periodic identities to remove negative angles and extra full turns.`,
      `Combine fractions over a common denominator; turn a fraction divided by a fraction into a product.`,
      `Look for <span class="m">1 − cos<sup>2</sup></span>, <span class="m">1 − sin<sup>2</sup></span>, <span class="m">sec<sup>2</sup> − 1</span> and similar pieces and replace them with a Pythagorean identity.`,
      `Factor and cancel common factors, then rewrite the result with a single function if possible.`,
      `State where the result is valid: wherever the original expression was defined.`
    ]
  },
  example: {
    prompt: `Simplify <span class="m"><span class="fr"><span>sec <i>θ</i> − cos <i>θ</i></span><span>tan <i>θ</i></span></span></span> to a single trigonometric function.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>sec <i>θ</i> − cos <i>θ</i></span><span>tan <i>θ</i></span></span> = <span class="fr"><span><span class="fr"><span>1</span><span class="c2">cos <i>θ</i></span></span> − <span class="c2">cos <i>θ</i></span></span><span><span class="fr"><span class="c3">sin <i>θ</i></span><span class="c2">cos <i>θ</i></span></span></span></span></span>`, note: "Reciprocal identity for sec, quotient identity for tan: everything in sines and cosines." },
      { math: `<span class="m">= <span class="fr"><span><span class="fr"><span>1 − <span class="c2">cos</span><sup>2</sup> <i>θ</i></span><span class="c2">cos <i>θ</i></span></span></span><span><span class="fr"><span class="c3">sin <i>θ</i></span><span class="c2">cos <i>θ</i></span></span></span></span></span>`, note: "Common denominator cos θ in the numerator." },
      { math: `<span class="m">= <span class="fr"><span><span class="c3">sin</span><sup>2</sup> <i>θ</i></span><span class="c2">cos <i>θ</i></span></span> · <span class="fr"><span class="c2">cos <i>θ</i></span><span class="c3">sin <i>θ</i></span></span></span>`, note: "Pythagorean identity 1 − cos²θ = sin²θ, and dividing by a fraction is multiplying by its reciprocal." },
      { math: `<span class="m">= <span class="c5">sin <i>θ</i></span></span>`, note: "Cancel cos θ and one factor of sin θ." }
    ],
    answer: `<span class="m"><span class="fr"><span>sec <i>θ</i> − cos <i>θ</i></span><span>tan <i>θ</i></span></span> = <span class="c5">sin <i>θ</i></span></span>, valid wherever the left side is defined (<span class="m">cos <i>θ</i> ≠ 0</span> and <span class="m">sin <i>θ</i> ≠ 0</span>, that is <span class="m"><i>θ</i> ≠ <i>k</i>π/2</span>).`
  },
  why: `<p>The fundamental identities are the grammar of trigonometry. Every later formula, from the sum formulas to the double-angle formulas, is checked and used by rewriting with them. Solving an equation such as <span class="m">2 cos<sup>2</sup> <i>x</i> + sin <i>x</i> = 1</span> starts by using <span class="m">cos<sup>2</sup> <i>x</i> = 1 − sin<sup>2</sup> <i>x</i></span> to get a single function.</p>
<p>They also save work. Knowing one value and the quadrant gives all six values without drawing a triangle. Even/odd and periodic identities reduce any angle to one between 0 and <span class="m">π/2</span>. In calculus, integrals like <span class="m">∫ tan<sup>2</sup> <i>x</i> d<i>x</i></span> and the substitution <span class="m"><i>x</i> = sin <i>θ</i></span> depend on the Pythagorean identities.</p>`,
  careers: [
    { role: "Signal-processing engineer", use: "Uses even/odd symmetry of cosine and sine to split a signal into its cosine and sine parts and to predict which coefficients vanish." },
    { role: "Physicist", use: "Uses sin²θ + cos²θ = 1 to show that the energy of a mass on a spring stays constant as it oscillates." },
    { role: "Mechanical engineer", use: "Rewrites stress and strain formulas for a rotated element in sines and cosines and simplifies them with Pythagorean identities." },
    { role: "Computer graphics programmer", use: "Uses cos(−θ) = cos θ and sin(−θ) = −sin θ to undo a rotation without recomputing sines and cosines." },
    { role: "Mathematics teacher", use: "Builds every identity proof in a trigonometry course from the reciprocal, quotient and Pythagorean identities." },
    { role: "Electrical engineer", use: "Simplifies power formulas for alternating current, where sin² and cos² terms combine with the Pythagorean identity." }
  ],
  life: [
    "A swing that takes the same time to come back on each pass, like a periodic function",
    "A mirror image of a clock hand across the horizontal line, as with θ and −θ",
    "Knowing a ramp's slope gives its angle's other ratios too",
    "A ladder against a wall: the squares of the base and the height add up to the square of its length",
    "Seasons and tides repeating every year or every day"
  ],
  fields: [
    { name: "Calculus", use: "Trigonometric integrals and substitutions use the Pythagorean identities to remove square roots." },
    { name: "Physics", use: "Energy conservation in oscillators rests on sin²θ + cos²θ = 1." },
    { name: "Signal processing", use: "Even and odd parts of signals match the cosine and sine parts of a Fourier series." },
    { name: "Computer graphics", use: "Rotation matrices satisfy cos²θ + sin²θ = 1, which keeps lengths unchanged." }
  ],
  prereqWhy: {
    "trig-any-angle": "Every identity here is proved from sin θ = y/r, cos θ = x/r and x² + y² = r², for a point on the terminal side of any angle."
  },
  unlocksWhy: {
    "trig-other-graphs": "The graphs of tan, cot, sec and csc are built from sin and cos with the quotient and reciprocal identities, and their periods come from the periodic identities.",
    "trig-verify-ids": "Verifying an identity means transforming one side into the other, one fundamental identity at a time.",
    "trig-equations": "Equations with two functions, like 2cos²x − sin x − 1 = 0, are turned into one function with a Pythagorean identity before solving."
  },
  beyond: [
    { field: "Calculus II", why: "Trigonometric substitution and integrals of powers of sine, cosine, tangent and secant are worked with these identities." },
    { field: "Physics (Waves)", why: "Even/odd symmetry and periodicity describe standing and travelling waves." },
    { field: "Linear Algebra", why: "A rotation matrix has determinant cos²θ + sin²θ = 1." },
    { field: "Differential Equations", why: "Checking that sin t and cos t solve y″ + y = 0 and that the energy is constant uses the Pythagorean identity." }
  ],
  mistakes: [
    { wrong: `<span class="m">sin<sup>2</sup> <i>θ</i> = sin(<i>θ</i><sup>2</sup>)</span>`, fix: `<span class="m">sin<sup>2</sup> <i>θ</i></span> means <span class="m">(sin <i>θ</i>)<sup>2</sup></span>: take the sine first, then square. <span class="m">sin(<i>θ</i><sup>2</sup>)</span> is a different function.` },
    { wrong: `<span class="m">sin<sup>−1</sup> <i>x</i> = <span class="fr"><span>1</span><span>sin <i>x</i></span></span></span>`, fix: `<span class="m">sin<sup>−1</sup> <i>x</i></span> is the inverse sine (arcsin). The reciprocal of sine is <span class="m">csc <i>x</i> = (sin <i>x</i>)<sup>−1</sup></span>.` },
    { wrong: `<span class="m">cos <i>θ</i> = √<span class="ov">1 − sin<sup>2</sup> <i>θ</i></span></span> for every <span class="m"><i>θ</i></span>.`, fix: `The square root is never negative, but cos is negative in QII and QIII. Write <span class="m">cos <i>θ</i> = ±√<span class="ov">1 − sin<sup>2</sup> <i>θ</i></span></span> and choose the sign from the quadrant.` },
    { wrong: `<span class="m">tan(−<i>θ</i>) = tan <i>θ</i></span>`, fix: `Tangent is odd: <span class="m">tan(−<i>θ</i>) = sin(−<i>θ</i>)/cos(−<i>θ</i>) = −sin <i>θ</i>/cos <i>θ</i> = −tan <i>θ</i></span>. Only cos and sec are even.` }
  ],
  practice: [
    { q: `Given <span class="m">sin <i>θ</i> = 4/5</span> and <span class="m">cos <i>θ</i> = −3/5</span>, find <span class="m">tan <i>θ</i></span>, <span class="m">csc <i>θ</i></span>, <span class="m">sin(−<i>θ</i>)</span> and <span class="m">cos(−<i>θ</i>)</span>.`,
      a: `<span class="m">tan <i>θ</i> = (4/5)/(−3/5) = −4/3</span>, <span class="m">csc <i>θ</i> = 5/4</span>. Sine is odd: <span class="m">sin(−<i>θ</i>) = −4/5</span>. Cosine is even: <span class="m">cos(−<i>θ</i>) = −3/5</span>.` },
    { q: `<span class="m">tan <i>θ</i> = 2</span> and <span class="m"><i>θ</i></span> is in QIII. Use identities to find <span class="m">sec <i>θ</i></span>, <span class="m">cos <i>θ</i></span> and <span class="m">sin <i>θ</i></span>.`,
      a: `<span class="m">sec<sup>2</sup> <i>θ</i> = 1 + tan<sup>2</sup> <i>θ</i> = 5</span>, and sec is negative in QIII, so <span class="m">sec <i>θ</i> = −√5</span>. <span class="m">cos <i>θ</i> = 1/sec <i>θ</i> = −√5/5</span>. <span class="m">sin <i>θ</i> = tan <i>θ</i> cos <i>θ</i> = −2√5/5</span>.` },
    { q: `Simplify <span class="m">(1 − cos<sup>2</sup> <i>x</i>)(1 + cot<sup>2</sup> <i>x</i>)</span>.`,
      a: `<span class="m">1 − cos<sup>2</sup> <i>x</i> = sin<sup>2</sup> <i>x</i></span> and <span class="m">1 + cot<sup>2</sup> <i>x</i> = csc<sup>2</sup> <i>x</i> = 1/sin<sup>2</sup> <i>x</i></span>, so the product is <span class="m">1</span> (for <span class="m"><i>x</i> ≠ <i>k</i>π</span>).` },
    { q: `Use even/odd and periodic identities to find <span class="m">sin(−17π/6)</span>, <span class="m">tan(13π/4)</span> and <span class="m">cos(−11π/3)</span> exactly.`,
      a: `<span class="m">sin(−17π/6) = −sin(17π/6) = −sin(5π/6) = −1/2</span>. Tangent has period π: <span class="m">tan(13π/4) = tan(π/4 + 3π) = tan(π/4) = 1</span>. <span class="m">cos(−11π/3) = cos(11π/3) = cos(11π/3 − 4π) = cos(−π/3) = cos(π/3) = 1/2</span>.` }
  ],
  origin: `Ptolemy's <i>Almagest</i> (about 150 CE) used the rule that the chords of an arc and of its supplement satisfy crd²α + crd²(180° − α) = 120², in a circle of diameter 120; in modern terms this is sin²θ + cos²θ = 1. The names tangent and secant were introduced by Thomas Fincke in <i>Geometria rotundi</i> (1583). Leonhard Euler's writings in the 18th century made the short names sin, cos, tan and the habit of writing these relations as formulas standard.`
};
