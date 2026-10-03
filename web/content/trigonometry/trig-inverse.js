window.ARITH = window.ARITH || {};
ARITH["trig-inverse"] = {
  title: "Inverse Trigonometric Functions",
  short: "sin⁻¹, cos⁻¹, tan⁻¹: from a value back to an angle",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Graphs & inverses · inverse functions",
  hero: `<span class="m"><span class="c1">sin<sup>−1</sup></span>(1/2) = <span class="c1">π/6</span> &nbsp; because &nbsp; <span class="c3">sin</span>(π/6) = 1/2 &nbsp; and &nbsp; π/6 ∈ [−π/2, π/2]</span>`,
  lede: `Sine, cosine and tangent repeat, so each value comes from infinitely many angles. Restrict each function to one standard piece and it has an inverse that returns a single angle, the <b>principal value</b>.`,
  plain: `<p>If you know <span class="m c3">sin <i>θ</i> = 1/2</span>, the angle could be <span class="m">π/6</span>, <span class="m">5π/6</span>, <span class="m">13π/6</span> and so on. A function must give one answer, so we agree on a window of angles in advance and answer only from that window.</p>
<p>For sine the window is <span class="m">[−π/2, π/2]</span>: the right half of the unit circle, where sine climbs once from <span class="m">−1</span> to <span class="m">1</span> and takes each value exactly once. For cosine it is <span class="m">[0, π]</span>, the top half, where cosine falls once from <span class="m">1</span> to <span class="m">−1</span>. For tangent it is the open interval <span class="m">(−π/2, π/2)</span>, the single branch between two asymptotes.</p>
<p>The inverse functions read those pieces backwards: put in a value, get back the one angle in the window. Their graphs are the restricted pieces reflected in the line <span class="m c4"><i>y</i> = <i>x</i></span>. The <span class="m">−1</span> in <span class="m">sin<sup>−1</sup> <i>x</i></span> means "inverse function". It does not mean <span class="m">1/sin <i>x</i></span>, which is <span class="m">csc <i>x</i></span>.</p>`,
  formal: `<div class="display"><span class="c1"><i>y</i> = sin<sup>−1</sup> <i>x</i></span> (arcsin <i>x</i>) &nbsp;⇔&nbsp; <span class="c3">sin <i>y</i></span> = <i>x</i> and −π/2 ≤ <i>y</i> ≤ π/2, &nbsp; domain [−1, 1]<br><span class="c1"><i>y</i> = cos<sup>−1</sup> <i>x</i></span> (arccos <i>x</i>) &nbsp;⇔&nbsp; <span class="c2">cos <i>y</i></span> = <i>x</i> and 0 ≤ <i>y</i> ≤ π, &nbsp; domain [−1, 1]<br><span class="c1"><i>y</i> = tan<sup>−1</sup> <i>x</i></span> (arctan <i>x</i>) &nbsp;⇔&nbsp; <span class="c5">tan <i>y</i></span> = <i>x</i> and −π/2 &lt; <i>y</i> &lt; π/2, &nbsp; domain ℝ</div>
<p>The ranges <span class="m">[−π/2, π/2]</span>, <span class="m">[0, π]</span> and <span class="m">(−π/2, π/2)</span> are the restricted domains on which sin, cos and tan are one-to-one and still take every value they ever take. The graph of <span class="m">sin<sup>−1</sup></span> runs from <span class="m">(−1, −π/2)</span> to <span class="m">(1, π/2)</span> and is odd; <span class="m">cos<sup>−1</sup></span> falls from <span class="m">(−1, π)</span> to <span class="m">(1, 0)</span>; <span class="m">tan<sup>−1</sup></span> rises through the origin with horizontal asymptotes <span class="m"><i>y</i> = ±π/2</span>.</p>
<div class="display">sin(sin<sup>−1</sup> <i>x</i>) = <i>x</i> for −1 ≤ <i>x</i> ≤ 1, &nbsp; sin<sup>−1</sup>(sin <i>x</i>) = <i>x</i> only for −π/2 ≤ <i>x</i> ≤ π/2<br>cos(cos<sup>−1</sup> <i>x</i>) = <i>x</i> for −1 ≤ <i>x</i> ≤ 1, &nbsp; cos<sup>−1</sup>(cos <i>x</i>) = <i>x</i> only for 0 ≤ <i>x</i> ≤ π<br>tan(tan<sup>−1</sup> <i>x</i>) = <i>x</i> for all <i>x</i>, &nbsp; tan<sup>−1</sup>(tan <i>x</i>) = <i>x</i> only for −π/2 &lt; <i>x</i> &lt; π/2</div>
<p>Outside those intervals the inner and outer functions do not cancel: <span class="m">sin<sup>−1</sup>(sin(3π/4)) = π/4</span>. A composition such as <span class="m">cos(tan<sup>−1</sup> <i>x</i>)</span> is found with a right triangle: if <span class="m"><i>θ</i> = tan<sup>−1</sup> <i>x</i></span>, the sides are <span class="m"><i>x</i></span> opposite and <span class="m">1</span> adjacent, the hypotenuse is <span class="m">√<span class="ov"><i>x</i><sup>2</sup> + 1</span></span>, and <span class="m">cos(tan<sup>−1</sup> <i>x</i>) = 1/√<span class="ov"><i>x</i><sup>2</sup> + 1</span></span>. A calculator in radian mode gives decimals: <span class="m">sin<sup>−1</sup>(0.6) ≈ 0.6435</span>.</p>
<p>The other three inverses exist too, with ranges that depend on the book: a common choice is <span class="m">cot<sup>−1</sup> <i>x</i></span> in <span class="m">(0, π)</span>, <span class="m">sec<sup>−1</sup> <i>x</i></span> in <span class="m">[0, π/2) ∪ (π/2, π]</span> and <span class="m">csc<sup>−1</sup> <i>x</i></span> in <span class="m">[−π/2, 0) ∪ (0, π/2]</span>.</p>`,
  legend: [
    { c: "c3", sym: `sin <i>x</i>`, name: "Sine (restricted)", desc: "One-to-one on [−π/2, π/2]." },
    { c: "c2", sym: `cos <i>x</i>`, name: "Cosine (restricted)", desc: "One-to-one on [0, π]." },
    { c: "c5", sym: `tan <i>x</i>`, name: "Tangent (restricted)", desc: "One-to-one on (−π/2, π/2)." },
    { c: "c1", sym: `sin<sup>−1</sup>, cos<sup>−1</sup>, tan<sup>−1</sup>`, name: "Inverse", desc: "Takes a value back to the one angle in the principal range." },
    { c: "c4", sym: `<i>y</i> = <i>x</i>`, name: "Mirror line", desc: "Each inverse graph is its restricted piece reflected in this line." }
  ],
  steps: {
    title: "How to evaluate sin⁻¹, cos⁻¹ or tan⁻¹ exactly",
    items: [
      `Check the domain: <span class="m">sin<sup>−1</sup></span> and <span class="m">cos<sup>−1</sup></span> need <span class="m">−1 ≤ <i>x</i> ≤ 1</span>. Otherwise there is no value.`,
      `Ignore the sign and find the reference angle with that sine, cosine or tangent (a special angle such as <span class="m">π/6</span>, <span class="m">π/4</span>, <span class="m">π/3</span>).`,
      `Place the angle in the principal range: sin<sup>−1</sup> and tan<sup>−1</sup> use quadrants I and IV (negative values give negative angles); cos<sup>−1</sup> uses quadrants I and II.`,
      `Check: the function of your angle gives the value, and the angle lies in the range.`,
      `For a composition such as <span class="m">cos(sin<sup>−1</sup> <i>a</i>)</span>, draw the angle's right triangle in its quadrant, find the third side by Pythagoras, then read the outer function off the triangle with signs.`
    ]
  },
  example: {
    prompt: `Find the exact values of <span class="m">cos<sup>−1</sup>(−√3/2)</span>, <span class="m">sin<sup>−1</sup>(sin(5π/6))</span> and <span class="m">cos(tan<sup>−1</sup>(−3/4))</span>.`,
    lines: [
      { math: `<span class="m"><span class="c2">cos</span> <i>θ</i> = −√3/2, &nbsp; reference angle π/6</span>`, note: "cos(π/6) = √3/2; the minus sign puts θ in quadrant II." },
      { math: `<span class="m"><span class="c1">cos<sup>−1</sup>(−√3/2)</span> = π − π/6 = <span class="c1">5π/6</span></span>`, note: "5π/6 is in [0, π] and cos(5π/6) = −√3/2." },
      { math: `<span class="m"><span class="c3">sin</span>(5π/6) = 1/2</span>`, note: "Work from the inside out." },
      { math: `<span class="m"><span class="c1">sin<sup>−1</sup>(1/2)</span> = <span class="c1">π/6</span> &nbsp; (not 5π/6)</span>`, note: "5π/6 is outside [−π/2, π/2], so the functions do not cancel." },
      { math: `<span class="m"><i>θ</i> = tan<sup>−1</sup>(−3/4) ∈ (−π/2, 0): &nbsp; opposite −3, adjacent 4</span>`, note: "A negative tangent puts θ in quadrant IV." },
      { math: `<span class="m">hypotenuse √<span class="ov">(−3)<sup>2</sup> + 4<sup>2</sup></span> = 5, &nbsp; <span class="c2">cos</span> <i>θ</i> = 4/5</span>`, note: "Cosine is positive in quadrant IV." }
    ],
    answer: `<span class="m c1">cos<sup>−1</sup>(−√3/2) = 5π/6</span>, <span class="m c1">sin<sup>−1</sup>(sin(5π/6)) = π/6</span>, <span class="m c5">cos(tan<sup>−1</sup>(−3/4)) = 4/5</span>.`
  },
  why: `<p>Most real problems run backwards: you measure a ratio and want the angle. A ramp rises 1 m over 12 m, so its angle is <span class="m">tan<sup>−1</sup>(1/12) ≈ 4.8°</span>. A force has components 3 and 4, so its direction is a tangent inverse. Calculators, programs and the next topics all return principal values, so you need to know which angle they give and how to get the others. Solving <span class="m">sin <i>x</i> = 0.3</span> on <span class="m">[0, 2π)</span>, finding a vector's direction and converting to polar coordinates all start with one inverse function and then adjust for the quadrant.</p>`,
  careers: [
    { role: "Civil engineer", use: "Turns a road's rise over run into a slope angle with arctan, and checks ramp angles against accessibility limits." },
    { role: "Robotics engineer", use: "Computes joint angles of an arm from target coordinates with arccos and atan2 (inverse kinematics)." },
    { role: "Pilot", use: "Finds a wind correction angle from the crosswind and airspeed with an inverse sine." },
    { role: "Game developer", use: "Turns a character to face a target with atan2 of the difference in coordinates." },
    { role: "Surveyor", use: "Recovers angles of elevation and bearings from measured distances." },
    { role: "Physicist", use: "Finds a refraction angle from Snell's law, θ₂ = sin⁻¹(n₁ sin θ₁ / n₂), and spots total internal reflection when the input exceeds 1." }
  ],
  life: [
    "Working out how steep a ramp or a roof pitch is from rise and run",
    "A phone's compass turning the sensor's x and y readings into a heading",
    "Choosing the launch angle of a ball to reach a target",
    "The angle of a ladder leaning against a wall",
    "Aiming a camera or telescope at a point from its coordinates"
  ],
  fields: [
    { name: "Physics", use: "Snell's law, projectile angles and vector directions all end with an inverse sine, cosine or tangent." },
    { name: "Computer graphics", use: "atan2(y, x) extends tan⁻¹ to the full circle to rotate objects toward a point." },
    { name: "Calculus", use: "The derivatives of sin⁻¹ x and tan⁻¹ x are algebraic, which makes them key antiderivatives." },
    { name: "Navigation", use: "Courses and bearings are recovered from north and east displacements with inverse tangent and a quadrant fix." }
  ],
  prereqWhy: {
    "trig-other-graphs": "The tangent branch between −π/2 and π/2, and the shapes of the sine and cosine pieces, are exactly what gets restricted and reflected.",
    "a2-inverses": "One-to-one functions, the horizontal line test, swapping domain and range and reflecting in y = x all carry over unchanged."
  },
  unlocksWhy: {
    "trig-equations": "Solving sin x = k starts with the principal value sin⁻¹ k, then adds the second angle and the period.",
    "trig-vectors": "A vector's direction angle is tan⁻¹(b/a), adjusted for the quadrant the vector points into.",
    "trig-polar-coords": "Converting (x, y) to polar form uses θ = tan⁻¹(y/x) with the quadrant fixed."
  },
  beyond: [
    { field: "Calculus I", why: "The derivatives 1/√(1 − x²) and 1/(1 + x²) of sin⁻¹ x and tan⁻¹ x come from the triangle compositions here." },
    { field: "Calculus II", why: "Trigonometric substitution and integrals such as ∫ dx/(1 + x²) = tan⁻¹ x + C use inverse functions and their ranges." },
    { field: "Physics (Mechanics)", why: "Directions of forces and velocities are found with tan⁻¹ of their components." },
    { field: "Engineering", why: "Inverse kinematics of robot arms solves for joint angles with arccos and atan2." }
  ],
  mistakes: [
    { wrong: `<span class="m">sin<sup>−1</sup> <i>x</i> = 1/sin <i>x</i></span>.`, fix: `The −1 means inverse function. The reciprocal is <span class="m">(sin <i>x</i>)<sup>−1</sup> = csc <i>x</i></span>, a different thing.` },
    { wrong: `<span class="m">sin<sup>−1</sup>(sin(2π/3)) = 2π/3</span>.`, fix: `<span class="m">2π/3</span> is outside <span class="m">[−π/2, π/2]</span>. <span class="m">sin(2π/3) = √3/2</span> and <span class="m">sin<sup>−1</sup>(√3/2) = π/3</span>.` },
    { wrong: `<span class="m">cos<sup>−1</sup>(−1/2) = −π/3</span>.`, fix: `cos<sup>−1</sup> never gives a negative angle; its range is <span class="m">[0, π]</span>. The answer is in quadrant II: <span class="m">2π/3</span>.` },
    { wrong: `<span class="m">sin<sup>−1</sup> 2 ≈ 1.57</span> or some other number.`, fix: `Sine never exceeds 1, so <span class="m">2</span> is outside the domain <span class="m">[−1, 1]</span>: <span class="m">sin<sup>−1</sup> 2</span> is undefined.` }
  ],
  practice: [
    { q: `Evaluate <span class="m">sin<sup>−1</sup>(−√2/2)</span> and <span class="m">tan<sup>−1</sup>(−√3)</span>.`, a: `<span class="m">sin(−π/4) = −√2/2</span> with <span class="m">−π/4</span> in <span class="m">[−π/2, π/2]</span>, so <span class="m">−π/4</span>. <span class="m">tan(−π/3) = −√3</span> with <span class="m">−π/3</span> in <span class="m">(−π/2, π/2)</span>, so <span class="m">−π/3</span>.` },
    { q: `Evaluate <span class="m">cos<sup>−1</sup>(cos(7π/6))</span>.`, a: `<span class="m">cos(7π/6) = −√3/2</span>. The angle in <span class="m">[0, π]</span> with that cosine is <span class="m">5π/6</span>, so the answer is <span class="m">5π/6</span>, not <span class="m">7π/6</span>.` },
    { q: `Find <span class="m">tan(cos<sup>−1</sup>(−5/13))</span>.`, a: `<span class="m"><i>θ</i> = cos<sup>−1</sup>(−5/13)</span> is in quadrant II: adjacent <span class="m">−5</span>, hypotenuse <span class="m">13</span>, opposite <span class="m">√<span class="ov">169 − 25</span> = 12</span>. So <span class="m">tan <i>θ</i> = 12/(−5) = −12/5</span>.` },
    { q: `Write <span class="m">sin(tan<sup>−1</sup> <i>x</i>)</span> as an algebraic expression in <span class="m"><i>x</i></span>.`, a: `Let <span class="m"><i>θ</i> = tan<sup>−1</sup> <i>x</i></span>: opposite <span class="m"><i>x</i></span>, adjacent <span class="m">1</span>, hypotenuse <span class="m">√<span class="ov"><i>x</i><sup>2</sup> + 1</span></span>. So <span class="m">sin(tan<sup>−1</sup> <i>x</i>) = <i>x</i>/√<span class="ov"><i>x</i><sup>2</sup> + 1</span></span> for every real <span class="m"><i>x</i></span>; the sign is right because <span class="m"><i>θ</i></span> and <span class="m"><i>x</i></span> have the same sign.` }
  ],
  origin: `John Herschel introduced the notation sin<sup>−1</sup> <i>x</i> and cos<sup>−1</sup> <i>x</i> in an 1813 paper in the <i>Philosophical Transactions</i>, borrowing the −1 from the notation for inverse functions, and noted that it must not be read as 1/sin <i>x</i>. The "arc" names, such as arcsin, record that on the unit circle the answer is an arc length.`
};
