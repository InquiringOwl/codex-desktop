window.ARITH = window.ARITH || {};

ARITH["g-circle-segments"] = {
  title: "Secants, Tangents & Segment Lengths",
  short: "Power of a point: PA · PB is the same for every line",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · circles",
  hero: `<span class="m"><span class="c1"><i>P</i></span>: &nbsp;<span class="c2"><i>PA</i> · <i>PB</i></span> = <span class="c3"><i>PC</i> · <i>PD</i></span></span>`,
  lede: `Draw any two lines through a point P that cut a circle. The two pieces on one line multiply to the same number as the two pieces on the other. The angle between the lines is half the sum or half the difference of the arcs they cut off.`,
  plain: `<p>Pick a point <i>P</i> and draw a line through it that crosses a circle at <i>A</i> and <i>B</i>. Multiply the two distances <span class="m"><i>PA</i> · <i>PB</i></span>. Now swing the line to any other position through <i>P</i>, crossing at <i>C</i> and <i>D</i>. The product <span class="m"><i>PC</i> · <i>PD</i></span> comes out the same. That fixed number is called the <b>power</b> of <i>P</i>.</p>
<p>When <i>P</i> is inside the circle the lines are two chords crossing, and each product is the two pieces of a chord. When <i>P</i> is outside, each line is a <b>secant</b>, and the product is the outside piece times the whole secant. If one line just touches the circle, it is a tangent, both crossing points merge into one, and the product becomes the tangent length squared.</p>
<p>The angle between the two lines follows the same split. Inside, it averages the two arcs it and its vertical angle cut off. Outside, it is half the difference between the far arc and the near arc.</p>`,
  formal: `<p>Let two lines through <span class="m c1"><i>P</i></span> meet a circle with centre <i>O</i> and radius <i>r</i> at <span class="m c2"><i>A</i>, <i>B</i></span> and at <span class="m c3"><i>C</i>, <i>D</i></span>, with <i>A</i> and <i>C</i> the nearer points when <i>P</i> is outside.</p>
<div class="display"><b>Intersecting Chords Theorem</b> (<i>P</i> inside): <span class="c2"><i>PA</i> · <i>PB</i></span> = <span class="c3"><i>PC</i> · <i>PD</i></span><br><b>Secant–Secant Theorem</b> (<i>P</i> outside): <span class="c2"><i>PA</i> · <i>PB</i></span> = <span class="c3"><i>PC</i> · <i>PD</i></span> <span class="dim">outside part × whole secant</span><br><b>Tangent–Secant Theorem</b>: <i>PT</i><sup>2</sup> = <span class="c2"><i>PA</i> · <i>PB</i></span> <span class="dim">for a tangent segment <span class="ov"><i>PT</i></span></span><br>Each product equals |<i>PO</i><sup>2</sup> − <i>r</i><sup>2</sup>|, the absolute value of the <b>power of the point</b>.<br><i>P</i> inside: m∠<i>APC</i> = ½(<span class="c4">m⌢<i>AC</i> + m⌢<i>BD</i></span>)<br><i>P</i> outside (two secants, a secant and a tangent, or two tangents): m∠<i>P</i> = ½(<span class="c4">far arc − near arc</span>)</div>
<p>Proof of the Intersecting Chords Theorem, chords <span class="ov"><i>AB</i></span> and <span class="ov"><i>CD</i></span> meeting at <i>P</i>:</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td>Draw <span class="ov"><i>AC</i></span> and <span class="ov"><i>DB</i></span></td><td>Two points determine a line</td></tr><tr><td>∠<i>CAB</i> ≅ ∠<i>CDB</i></td><td>Inscribed angles intercepting the same arc ⌢<i>CB</i> are congruent</td></tr><tr><td>∠<i>APC</i> ≅ ∠<i>DPB</i></td><td>Vertical Angles Theorem</td></tr><tr><td>△<i>APC</i> ∼ △<i>DPB</i></td><td>AA Similarity</td></tr><tr><td><span class="m"><i>PA</i>/<i>PD</i> = <i>PC</i>/<i>PB</i></span></td><td>Corresponding sides of similar triangles are proportional</td></tr><tr><td><span class="m"><i>PA</i> · <i>PB</i> = <i>PC</i> · <i>PD</i></span></td><td>Cross-multiplication (Means-Extremes Property)</td></tr></table>`,
  legend: [
    { c: "c1", sym: `<i>P</i>`, name: "The point", desc: "Where the two lines cross: inside, on or outside the circle. Its power PO² − r² is negative inside, zero on the circle and positive outside." },
    { c: "c2", sym: `<i>PA</i>, <i>PB</i>`, name: "First line", desc: "The distances from P to the two points where the first line meets the circle." },
    { c: "c3", sym: `<i>PC</i>, <i>PD</i>`, name: "Second line", desc: "The distances along the second line. Their product matches PA · PB." },
    { c: "c4", sym: `⌢<i>AC</i>, ⌢<i>BD</i>`, name: "Intercepted arcs", desc: "The arcs cut off by the angle at P and by its vertical angle (inside), or the near and far arcs (outside)." }
  ],
  steps: { title: "How to find segment lengths and angles", items: [
    `Decide where the lines meet: inside the circle (two chords), outside (secants and tangents), or on the circle (inscribed or tangent–chord angle).`,
    `Inside: multiply the two pieces of each chord and set the products equal.`,
    `Outside: for each secant multiply the outside piece by the whole secant (outside plus inside piece); a tangent contributes its length squared.`,
    `Solve the resulting equation; a length must be positive, so reject a negative root.`,
    `For the angle at <i>P</i>: inside, take half the sum of the two intercepted arcs; outside, take half of the far arc minus the near arc.`
  ] },
  example: {
    prompt: `A mason is rebuilding a circular stone arch from a surviving fragment. A straight chord across the fragment measures 120 cm, and the arc rises 20 cm above the chord's midpoint. What radius should the new arch have?`,
    lines: [
      { math: `<span class="m c2">½ · 120 = 60</span>`, note: "The rise is measured on the perpendicular bisector of the chord, which passes through the centre. So it lies along a diameter, and that diameter cuts the chord into two 60 cm halves." },
      { math: `<span class="m"><span class="c2">60 · 60</span> = <span class="c3">20 · <i>x</i></span></span>`, note: "Intersecting Chords Theorem for the chord and the diameter; x is the rest of the diameter beyond the chord." },
      { math: `<span class="m c3"><i>x</i> = 3600 ÷ 20 = 180</span>`, note: "Solve for the remaining piece of the diameter." },
      { math: `<span class="m">2<i>r</i> = 20 + 180 = 200, &nbsp;<i>r</i> = 100</span>`, note: "The two pieces make the whole diameter." },
      { math: `<span class="m">80<sup>2</sup> + 60<sup>2</sup> = 100<sup>2</sup> ✓</span>`, note: "Check with the chord's right triangle: the centre is 100 − 20 = 80 cm from the chord, and 6400 + 3600 = 10000." }
    ],
    answer: `The arch has radius <span class="m">100</span> cm (diameter 2 m).`
  },
  why: `<p>The power of a point turns a measurement you can make into one you cannot. Measuring a chord and the rise of an arc gives the radius of a lens, a pipe, an arch or a broken plate without ever finding the centre. The tangent case gives the distance to the horizon from a height, which sets the range of lighthouses, radar and radio towers.</p>
<p>Within geometry these theorems close the study of the circle: every angle formed by chords, secants and tangents, wherever its vertex sits, is measured by arcs. The power of a point <span class="m"><i>PO</i><sup>2</sup> − <i>r</i><sup>2</sup></span> is also what you get by substituting the coordinates of <i>P</i> into the circle's equation, which leads to radical axes and inversion in later geometry.</p>`,
  careers: [
    { role: "Stonemason", use: "Recovers the radius of an arch or a curved wall from a chord and its rise before cutting replacement stones." },
    { role: "Machinist", use: "Finds the radius of a curved part from a measured chord c and sagitta s, using r = (c²/4 + s²)/(2s)." },
    { role: "Optician", use: "Relates a lens surface's radius of curvature to its sag depth over a given diameter when grinding or checking lenses." },
    { role: "Radio engineer", use: "Estimates an antenna's line-of-sight range as a tangent to the Earth from the antenna's height, then corrects for refraction." },
    { role: "Marine navigator", use: "Uses a light's geographic range, the tangent distance from its height and from the observer's eye, to know when it should appear." }
  ],
  life: [
    "Working out the size of a round table from a broken piece of its edge",
    "Estimating how far you can see from the top of a tall building",
    "Making a template for an arched window from its width and height",
    "Checking whether a curved garden edge is a true circle"
  ],
  fields: [
    { name: "Optics", use: "The sagitta formula links a lens or mirror's radius of curvature to its diameter and depth." },
    { name: "Telecommunications", use: "Radio and microwave links are planned with the tangent-line distance to the horizon." },
    { name: "Manufacturing metrology", use: "Radius gauges and chord-and-sag measurements check curved parts." },
    { name: "Architecture", use: "Segmental arches are specified by span and rise, which fix the radius by the chord theorem." }
  ],
  prereqWhy: {
    "g-chords-tangents": "The tangent segment, its right angle with the radius and PT² = PO² − r² are the tangent cases of the products here.",
    "g-inscribed": "The product theorems use congruent inscribed angles on a common arc, and the angle formulas at P are built from inscribed angles.",
    "g-similar-triangles": "Each product theorem comes from a pair of triangles similar by AA, whose proportional sides cross-multiply to PA · PB = PC · PD."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Substituting a point into (x − h)² + (y − k)² − r² gives its power, and the points of equal power to two circles form a line, the radical axis." },
    { field: "College geometry", why: "Inversion in a circle sends P to the point P′ on ray OP with OP · OP′ = r², a transformation built on the power of a point." },
    { field: "Physics", why: "Lens and mirror equations use radii of curvature, which are measured from a surface's sag over a chord." }
  ],
  mistakes: [
    { wrong: `For secants from an outside point, writing <span class="m"><i>PA</i> · <i>AB</i> = <i>PC</i> · <i>CD</i></span>.`, fix: `Multiply the outside piece by the whole secant: <span class="m"><i>PA</i> · <i>PB</i> = <i>PC</i> · <i>PD</i></span>, where <span class="m"><i>PB</i> = <i>PA</i> + <i>AB</i></span>.` },
    { wrong: `<span class="m"><i>PT</i> = <i>PA</i> · <i>PB</i></span> for a tangent and a secant.`, fix: `The tangent appears twice, as both pieces: <span class="m"><i>PT</i><sup>2</sup> = <i>PA</i> · <i>PB</i></span>.` },
    { wrong: `Adding the arcs for an angle formed outside the circle.`, fix: `Outside, take half the difference: arcs of 130° and 50° give <span class="m">½(130° − 50°) = 40°</span>. Half the sum is for a vertex inside.` },
    { wrong: `Taking half of a single arc when two chords cross inside the circle.`, fix: `Half of one arc is for a vertex on the circle. Inside, average both intercepted arcs: <span class="m">½(100° + 40°) = 70°</span>.` }
  ],
  practice: [
    { q: `Chords <span class="ov"><i>AB</i></span> and <span class="ov"><i>CD</i></span> meet at <i>P</i>, with <span class="m"><i>PA</i> = 4</span>, <span class="m"><i>PB</i> = 9</span> and <span class="m"><i>PC</i> = 6</span>. Find <span class="m"><i>PD</i></span> and the length of each chord.`, a: `<span class="m">4 · 9 = 6 · <i>PD</i></span>, so <span class="m"><i>PD</i> = 6</span>. Then <span class="m"><i>AB</i> = 13</span> and <span class="m"><i>CD</i> = 12</span>.` },
    { q: `From an outside point <i>P</i>, one secant meets the circle at <i>A</i> and then <i>B</i> with <span class="m"><i>PA</i> = 5</span> and <span class="m"><i>AB</i> = 7</span>. A second secant meets it at <i>C</i> then <i>D</i> with <span class="m"><i>PC</i> = 4</span>. Find <span class="m"><i>CD</i></span>, and the length of a tangent segment from <i>P</i>.`, a: `Secant–Secant: <span class="m">5 · 12 = 4 · <i>PD</i></span>, so <span class="m"><i>PD</i> = 15</span> and <span class="m"><i>CD</i> = 15 − 4 = 11</span>. Tangent–Secant: <span class="m"><i>PT</i><sup>2</sup> = 60</span>, so <span class="m"><i>PT</i> = 2√15 ≈ 7.7</span>.` },
    { q: `Find the angle at <i>P</i>. (a) Two chords cross at <i>P</i> and intercept arcs of 100° and 40°. (b) Two secants from <i>P</i> intercept a far arc of 130° and a near arc of 50°. (c) Two tangents from <i>P</i> touch the circle at the ends of a 140° minor arc.`, a: `(a) <span class="m">½(100° + 40°) = 70°</span>. (b) <span class="m">½(130° − 50°) = 40°</span>. (c) The far arc is the major arc, <span class="m">360° − 140° = 220°</span>, so <span class="m">½(220° − 140°) = 40°</span>. Check: in quadrilateral <i>PAOB</i> the two right angles at the points of tangency leave <span class="m">360° − 180° − 140° = 40°</span> ✓.` },
    { q: `A lighthouse lamp is 50 m above sea level. Taking the Earth as a sphere of radius 6371 km and ignoring refraction, how far is it from the lamp to the horizon? Give the answer to the nearest tenth of a kilometre.`, a: `The line of sight to the horizon is a tangent, and the line from the lamp through the Earth's centre is a secant with outside part 0.05 km and whole length <span class="m">0.05 + 12742 = 12742.05</span> km. Tangent–Secant: <span class="m"><i>PT</i><sup>2</sup> = 0.05 · 12742.05 = 637.1025</span>, so <span class="m"><i>PT</i> ≈ 25.2</span> km.` }
  ],
  origin: `Euclid proves the Intersecting Chords Theorem as Proposition III.35 of the <i>Elements</i> (about 300 BCE) and the Tangent–Secant Theorem as III.36, stated as equal rectangles rather than products of numbers. The name "power of a point" (German <i>Potenz</i>) was introduced by Jakob Steiner in 1826.`
};
