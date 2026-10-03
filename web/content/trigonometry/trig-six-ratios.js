window.ARITH = window.ARITH || {};
ARITH["trig-six-ratios"] = {
  title: "The Six Trigonometric Ratios & Special Angles",
  short: "csc, sec, cot, cofunctions and exact values at 30°, 45°, 60°",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Trigonometry · right-triangle ratios",
  hero: `<span class="m">csc <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c4">hyp</span><span class="c3">opp</span></span> &nbsp; sec <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c4">hyp</span><span class="c2">adj</span></span> &nbsp; cot <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c2">adj</span><span class="c3">opp</span></span></span>`,
  lede: `A right triangle has three sides, so an acute angle <span class="m c1"><i>θ</i></span> gives six ratios of two sides. Sine, cosine and tangent are three of them; their reciprocals are the <b>cosecant</b>, <b>secant</b> and <b>cotangent</b>. The two special right triangles give all six exactly at 30°, 45° and 60°.`,
  plain: `<p>Sine, cosine and tangent each divide one side of a right triangle by another. Turn each fraction upside down and you get three more ratios. Opposite over hypotenuse is sine; hypotenuse over opposite is <b>cosecant</b>, written csc. Adjacent over hypotenuse is cosine; flipped, it is <b>secant</b> (sec). Opposite over adjacent is tangent; flipped, it is <b>cotangent</b> (cot).</p>
<p>The flipped ratios add no new information, since <span class="m">csc <i>θ</i></span> is just <span class="m">1 ÷ sin <i>θ</i></span>. They are still worth having. Formulas in calculus, physics and surveying come out shorter with them, and some problems hand you a secant or cotangent directly.</p>
<p>The two acute angles of a right triangle add to 90°, and the leg opposite one of them is adjacent to the other. So the sine of one angle is the cosine of the other, the tangent of one is the cotangent of the other, and the secant of one is the cosecant of the other. That is where the "co" in each name comes from: the <b>co</b>sine is the sine of the <b>co</b>mplement.</p>
<p>At 30°, 45° and 60° you do not need a calculator. The 30°-60°-90° triangle with sides 1, √3, 2 and the 45°-45°-90° triangle with sides 1, 1, √2 give every ratio as an exact number.</p>`,
  formal: `<p>Let <span class="m c1"><i>θ</i></span> be an acute angle of a right triangle, with <span class="m c3">opp</span> the leg opposite <span class="m"><i>θ</i></span>, <span class="m c2">adj</span> the leg adjacent to it and <span class="m c4">hyp</span> the hypotenuse. The six <b>trigonometric ratios</b> of <span class="m"><i>θ</i></span> are</p>
<div class="display">sin <i>θ</i> = <span class="fr"><span class="c3">opp</span><span class="c4">hyp</span></span> &nbsp; cos <i>θ</i> = <span class="fr"><span class="c2">adj</span><span class="c4">hyp</span></span> &nbsp; tan <i>θ</i> = <span class="fr"><span class="c3">opp</span><span class="c2">adj</span></span><br>csc <i>θ</i> = <span class="fr"><span class="c4">hyp</span><span class="c3">opp</span></span> &nbsp; sec <i>θ</i> = <span class="fr"><span class="c4">hyp</span><span class="c2">adj</span></span> &nbsp; cot <i>θ</i> = <span class="fr"><span class="c2">adj</span><span class="c3">opp</span></span></div>
<p><b>Reciprocal identities:</b> <span class="m">csc <i>θ</i> = 1/sin <i>θ</i></span>, <span class="m">sec <i>θ</i> = 1/cos <i>θ</i></span>, <span class="m">cot <i>θ</i> = 1/tan <i>θ</i></span>. <b>Quotient identities:</b> <span class="m">tan <i>θ</i> = sin <i>θ</i>/cos <i>θ</i></span> and <span class="m">cot <i>θ</i> = cos <i>θ</i>/sin <i>θ</i></span>. Because a leg is shorter than the hypotenuse, <span class="m">0 &lt; sin <i>θ</i>, cos <i>θ</i> &lt; 1</span> and <span class="m">csc <i>θ</i>, sec <i>θ</i> &gt; 1</span> for every acute <span class="m"><i>θ</i></span>. <b>Cofunction identities</b> (the other acute angle is <span class="m">90° − <i>θ</i></span>):</p>
<div class="display">sin <i>θ</i> = cos(90° − <i>θ</i>) &nbsp; tan <i>θ</i> = cot(90° − <i>θ</i>) &nbsp; sec <i>θ</i> = csc(90° − <i>θ</i>)<br>cos <i>θ</i> = sin(90° − <i>θ</i>) &nbsp; cot <i>θ</i> = tan(90° − <i>θ</i>) &nbsp; csc <i>θ</i> = sec(90° − <i>θ</i>)</div>
<p><b>Exact values</b> from the 30°-60°-90° triangle (sides 1, √3, 2) and the 45°-45°-90° triangle (sides 1, 1, √2), with denominators rationalized:</p>
<div class="display"><span class="c1">30°</span>: &nbsp;sin = <span class="fr"><span>1</span><span>2</span></span>, cos = <span class="fr"><span>√3</span><span>2</span></span>, tan = <span class="fr"><span>√3</span><span>3</span></span>, csc = 2, sec = <span class="fr"><span>2√3</span><span>3</span></span>, cot = √3<br><span class="c1">45°</span>: &nbsp;sin = <span class="fr"><span>√2</span><span>2</span></span>, cos = <span class="fr"><span>√2</span><span>2</span></span>, tan = 1, csc = √2, sec = √2, cot = 1<br><span class="c1">60°</span>: &nbsp;sin = <span class="fr"><span>√3</span><span>2</span></span>, cos = <span class="fr"><span>1</span><span>2</span></span>, tan = √3, csc = <span class="fr"><span>2√3</span><span>3</span></span>, sec = 2, cot = <span class="fr"><span>√3</span><span>3</span></span></div>
<p>In radians these angles are <span class="m">π/6</span>, <span class="m">π/4</span> and <span class="m">π/3</span>. The 60° row is the 30° row with each function swapped for its cofunction, as the identities require.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Angle", desc: "The acute angle you stand at. Its complement 90° − θ is the other acute angle." },
    { c: "c2", sym: `adj`, name: "Adjacent leg", desc: "The leg touching θ. It is on top in cos θ and cot θ, on the bottom in sec θ and tan θ." },
    { c: "c3", sym: `opp`, name: "Opposite leg", desc: "The leg across from θ. It is on top in sin θ and tan θ, on the bottom in csc θ and cot θ." },
    { c: "c4", sym: `hyp`, name: "Hypotenuse", desc: "The side across from the right angle, the longest side. It is on the bottom in sin and cos, on top in csc and sec." },
    { c: "c5", sym: `= <span class="fr"><span>√3</span><span>3</span></span>`, name: "Exact value", desc: "A ratio written with whole numbers and radicals, denominator rationalized, such as tan 30° = √3/3." }
  ],
  steps: {
    title: "How to find all six ratios from one",
    items: [
      `Write the given ratio as a fraction of two sides. For <span class="m">sec <i>θ</i> = 7/4</span>, that is <span class="m c4">hyp</span> = 7 over <span class="m c2">adj</span> = 4.`,
      `Sketch a right triangle, mark <span class="m c1"><i>θ</i></span> and label those two sides with the numbers.`,
      `Find the third side with the Pythagorean Theorem: <span class="m"><span class="c3">opp</span><sup>2</sup> + <span class="c2">adj</span><sup>2</sup> = <span class="c4">hyp</span><sup>2</sup></span>. For an acute angle every side is positive.`,
      `Write <span class="m">sin <i>θ</i></span>, <span class="m">cos <i>θ</i></span> and <span class="m">tan <i>θ</i></span> from the three sides.`,
      `Flip each one to get <span class="m">csc <i>θ</i></span>, <span class="m">sec <i>θ</i></span> and <span class="m">cot <i>θ</i></span>, then rationalize any denominator with a radical.`,
      `Check: each reciprocal pair multiplies to 1, and <span class="m">sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = 1</span>.`
    ]
  },
  example: {
    prompt: `From a point on level ground, the angle of elevation to the top of a tower is <span class="m c1">30°</span>. After walking 40 m straight toward the tower, the angle of elevation is <span class="m c1">60°</span>. Find the exact height of the tower, then round to the nearest tenth of a meter.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>h</i></span> = height, &nbsp;<span class="c2"><i>x</i></span> = distance from the second point to the base</span>`, note: "Two right triangles share the vertical leg h. The far one has adjacent leg x + 40, the near one has adjacent leg x." },
      { math: `<span class="m">cot 60° = <span class="fr"><span class="c2"><i>x</i></span><span class="c3"><i>h</i></span></span> &nbsp;⇒&nbsp; <span class="c2"><i>x</i></span> = <i>h</i> cot 60° = <span class="fr"><span>√3</span><span>3</span></span><i>h</i></span>`, note: "Cotangent is adjacent over opposite, so it gives the unknown distance directly from h." },
      { math: `<span class="m">cot 30° = <span class="fr"><span class="c2"><i>x</i> + 40</span><span class="c3"><i>h</i></span></span> &nbsp;⇒&nbsp; <i>x</i> + 40 = √3 <i>h</i></span>`, note: "The same idea in the larger triangle, with cot 30° = √3." },
      { math: `<span class="m">40 = √3 <i>h</i> − <span class="fr"><span>√3</span><span>3</span></span><i>h</i> = <span class="fr"><span>2√3</span><span>3</span></span><i>h</i></span>`, note: "Subtract the first equation from the second; x cancels." },
      { math: `<span class="m"><i>h</i> = 40 · <span class="fr"><span>3</span><span>2√3</span></span> = <span class="fr"><span>60</span><span>√3</span></span> = <span class="c5">20√3</span></span>`, note: "Multiply both sides by 3/(2√3), then rationalize: 60/√3 = 60√3/3." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>√3</span><span>3</span></span> · 20√3 = 20</span>`, note: "Check: the near point is 20 m from the base and the far point 60 m. tan 60° = 20√3/20 = √3 and tan 30° = 20√3/60 = √3/3." },
      { math: `<span class="m"><i>h</i> = 20√3 ≈ 34.6</span>`, note: "Use a calculator only at the end." }
    ],
    answer: `The tower is <span class="m c5">20√3 ≈ 34.6</span> m tall.`
  },
  why: `<p>Secant, cosecant and cotangent are shorthand that the rest of mathematics uses constantly. The derivative of tan <i>x</i> is sec² <i>x</i>, the identity 1 + tan² θ = sec² θ drives many integrals, and the cotangent of an angle is how surveyors and navigators turn a height into a horizontal distance. The exact values at 30°, 45° and 60° are the reference points for every later topic: the unit circle, the graphs, the identities and the equations all come back to these numbers.</p>
<p>The cofunction identities are the first identities you prove from a picture. They also explain why tables printed before calculators needed to run only from 0° to 45°: every other acute value is a cofunction of one already listed.</p>`,
  careers: [
    { role: "Land surveyor", use: "Finds the height of a building or hill from two angles of elevation measured a known distance apart, as in the two-triangle method." },
    { role: "Civil engineer", use: "Uses secant and cosecant to get the length of an inclined member, such as a rafter or a ramp, from its horizontal run or vertical rise." },
    { role: "Physicist", use: "Writes the path length of light through a tilted slab as thickness times sec θ, and the air mass toward a star as sec of its zenith angle." },
    { role: "Machinist", use: "Sets sine-bar angles and computes chamfer and taper dimensions from exact 30°, 45° and 60° values." },
    { role: "Navigator", use: "Converts a measured angle to a known landmark height into a distance offshore with the cotangent." },
    { role: "Solar installer", use: "Computes panel row spacing from the shadow length, which is the panel height times the cotangent of the sun's elevation angle." }
  ],
  life: [
    "A ramp with a 5° slope needs a run of rise × cot 5°, about 11.4 times its rise",
    "Shadow length equals object height times the cotangent of the sun's elevation",
    "A 45° roof pitch means rise and run are equal, since tan 45° = 1",
    "Carpenters cut 30°, 45° and 60° angles from the special triangles without a protractor",
    "A ladder against a wall is the hypotenuse; its length is the wall height times csc of the ground angle"
  ],
  fields: [
    { name: "Surveying", use: "Heights and distances from two angles of elevation along a measured baseline." },
    { name: "Astronomy", use: "Air mass, the amount of atmosphere starlight crosses, is about sec of the zenith angle." },
    { name: "Architecture", use: "Roof pitch, stair angle and rafter length from rise, run and the six ratios." },
    { name: "Optics", use: "Path length through a tilted glass plate is thickness times sec of the refraction angle." }
  ],
  prereqWhy: {
    "g-trig-ratios": "Sine, cosine and tangent of an acute angle, and SOH-CAH-TOA, are defined there; this page flips them to get the other three ratios.",
    "g-special-right": "The 30°-60°-90° (1 : √3 : 2) and 45°-45°-90° (1 : 1 : √2) side patterns are what give the exact values at 30°, 45° and 60°."
  },
  unlocksWhy: {
    "trig-any-angle": "The same six ratios are redefined from a point (x, y) on the terminal side of any angle, and the exact values here become the reference-angle values in every quadrant."
  },
  beyond: [
    { field: "Calculus I", why: "Derivatives of tan, cot, sec and csc are written with sec² x, csc² x, sec x tan x and csc x cot x." },
    { field: "Calculus II", why: "Trigonometric substitution reads sec θ and tan θ off a right triangle, exactly as in the sketch method here." },
    { field: "Physics (Optics)", why: "Refraction through a slab and the air mass of starlight both use the secant of an angle." },
    { field: "Navigation/Surveying", why: "Distances from heights and angles of elevation use the cotangent, often with two sightings." }
  ],
  mistakes: [
    { wrong: `<span class="m">csc <i>θ</i> = <span class="fr"><span>1</span><span>cos <i>θ</i></span></span></span>`, fix: `Each reciprocal pair has exactly one "co": <span class="m">csc <i>θ</i> = 1/sin <i>θ</i></span>, <span class="m">sec <i>θ</i> = 1/cos <i>θ</i></span>, <span class="m">cot <i>θ</i> = 1/tan <i>θ</i></span>.` },
    { wrong: `<span class="m">sec <i>θ</i></span> and <span class="m">cos<sup>−1</sup> <i>θ</i></span> mean the same thing.`, fix: `<span class="m">sec 60° = 1/cos 60° = 2</span> is a reciprocal. <span class="m">cos<sup>−1</sup>(1/2) = 60°</span> is the inverse cosine: it takes a ratio and returns an angle.` },
    { wrong: `<span class="m">tan 30° = cot 30°</span> by the cofunction identity.`, fix: `The cofunction identity pairs complementary angles: <span class="m">tan 30° = cot(90° − 30°) = cot 60° = √3/3</span>, while <span class="m">cot 30° = √3</span>.` },
    { wrong: `<span class="m">csc 45° = <span class="fr"><span>√2</span><span>2</span></span></span>`, fix: `That is sin 45°. Flip it: <span class="m">csc 45° = 2/√2 = √2</span>. A cosecant or secant of an acute angle is always greater than 1.` }
  ],
  practice: [
    { q: `A right triangle has legs 8 and 15 and hypotenuse 17. For the angle <span class="m c1"><i>θ</i></span> opposite the leg 8, find <span class="m">csc <i>θ</i></span>, <span class="m">sec <i>θ</i></span> and <span class="m">cot <i>θ</i></span>.`, a: `Opposite 8, adjacent 15, hypotenuse 17. <span class="m">csc <i>θ</i> = 17/8</span>, <span class="m">sec <i>θ</i> = 17/15</span>, <span class="m">cot <i>θ</i> = 15/8</span>.` },
    { q: `Find the exact value of <span class="m">sec 60° + cot<sup>2</sup> 30° − csc<sup>2</sup> 45°</span>.`, a: `<span class="m">2 + (√3)<sup>2</sup> − (√2)<sup>2</sup> = 2 + 3 − 2 = 3</span>.` },
    { q: `Find the acute angle <span class="m"><i>θ</i></span> with <span class="m">sec(2<i>θ</i> + 10°) = csc(<i>θ</i> + 20°)</span>.`, a: `By the cofunction identity the two angles are complementary: <span class="m">(2<i>θ</i> + 10°) + (<i>θ</i> + 20°) = 90°</span>, so <span class="m">3<i>θ</i> = 60°</span> and <span class="m"><i>θ</i> = 20°</span>. Check: <span class="m">sec 50° = csc 40°</span>.` },
    { q: `<span class="m"><i>θ</i></span> is acute and <span class="m">sec <i>θ</i> = 7/4</span>. Find the other five ratios exactly.`, a: `Hypotenuse 7, adjacent 4, opposite <span class="m">√(49 − 16) = √33</span>. <span class="m">sin <i>θ</i> = √33/7</span>, <span class="m">cos <i>θ</i> = 4/7</span>, <span class="m">tan <i>θ</i> = √33/4</span>, <span class="m">csc <i>θ</i> = 7/√33 = 7√33/33</span>, <span class="m">cot <i>θ</i> = 4/√33 = 4√33/33</span>.` }
  ],
  origin: `Tables of shadows came first. A vertical stick casts a shadow equal to its height times the cotangent of the sun's elevation, and al-Battani (about 900 CE) tabulated such shadow lengths. Abu al-Wafa (10th century, Baghdad) worked with all six functions, including the secant and cosecant as the hypotenuses of shadow triangles. Georg Joachim Rheticus printed the first table of all six ratios defined directly from a right triangle, in his <i>Canon doctrinae triangulorum</i> (1551). The names "tangent" and "secant" are due to Thomas Fincke (1583), and Edmund Gunter introduced "cosine" and "cotangent" in 1620.`
};
