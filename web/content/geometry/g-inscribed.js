window.ARITH = window.ARITH || {};

ARITH["g-inscribed"] = {
  title: "Inscribed Angles & Cyclic Quadrilaterals",
  short: "An angle on the circle is half its arc",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · circles",
  hero: `<span class="m"><span class="c1">m∠<i>ABC</i></span> = <span class="fr"><span>1</span><span>2</span></span> <span class="c3">m⌢<i>AC</i></span></span>`,
  lede: `An angle with its vertex on a circle and chords for sides is an inscribed angle. Wherever the vertex sits on the circle, the angle measures half the arc it cuts off, which is half the central angle on that arc.`,
  plain: `<p>Put two pins <i>A</i> and <i>C</i> on a circle and stand at a third point <i>B</i> on the circle. The angle you see between the pins is an <b>inscribed angle</b>. The arc between the pins on the far side from you is the <b>intercepted arc</b>. The surprise is that walking around the circle does not change what you see: as long as you stay on the same side of the pins, the angle stays the same, and it is exactly half the arc.</p>
<p>The angle at the centre on the same arc, the <b>central angle</b>, is twice as big. A special case is a diameter: its arc is a semicircle of 180°, so any angle inscribed in a semicircle is 90°. A carpenter uses this to find the centre of a round table with a square corner.</p>
<p>A four-sided figure with all four corners on a circle is a <b>cyclic quadrilateral</b>. Opposite corners look at the two arcs that together make the whole circle, so their angles add to half of 360°, which is 180°.</p>`,
  formal: `<p>An <b>inscribed angle</b> is an angle whose vertex is on a circle and whose sides contain chords of the circle. Its <b>intercepted arc</b> is the arc in the interior of the angle, with endpoints on its sides. A polygon is <b>inscribed</b> in a circle when all its vertices lie on the circle; an inscribed quadrilateral is called <b>cyclic</b>.</p>
<div class="display"><b>Inscribed Angle Theorem.</b> &nbsp;<span class="c1">m∠<i>ABC</i></span> = ½ <span class="c3">m⌢<i>AC</i></span> = ½ <span class="c2">m∠<i>AOC</i></span><br>Inscribed angles that intercept the same arc are congruent.<br>An angle inscribed in a semicircle is a right angle, and an inscribed right angle intercepts a semicircle.<br>A quadrilateral can be inscribed in a circle if and only if its opposite angles are supplementary.<br>A tangent and a chord meeting at the point of tangency form an angle of ½ its intercepted arc.</div>
<p>Proof of the case with the centre <i>O</i> on side <span class="ov"><i>BC</i></span>:</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td>Draw radius <span class="ov"><i>OA</i></span>; <span class="m"><i>OA</i> = <i>OB</i></span></td><td>Two points determine a line; radii of a circle are congruent</td></tr><tr><td><span class="m">m∠<i>OAB</i> = m∠<i>OBA</i></span></td><td>Base Angles Theorem</td></tr><tr><td><span class="m">m∠<i>AOC</i> = m∠<i>OAB</i> + m∠<i>OBA</i> = 2 m∠<i>ABC</i></span></td><td>Exterior Angle Theorem; substitution</td></tr><tr><td><span class="m">m⌢<i>AC</i> = m∠<i>AOC</i></span></td><td>Definition of arc measure</td></tr><tr><td><span class="m">m∠<i>ABC</i> = ½ m⌢<i>AC</i></span></td><td>Substitution; Division Property of Equality</td></tr></table>
<p>When <i>O</i> is inside or outside the angle, draw the diameter through <i>B</i> and add or subtract two such cases with the Angle Addition and Arc Addition Postulates.</p>`,
  legend: [
    { c: "c1", sym: `∠<i>ABC</i>`, name: "Inscribed angle", desc: "Vertex B on the circle, sides along chords BA and BC. It measures half its intercepted arc." },
    { c: "c2", sym: `∠<i>AOC</i>`, name: "Central angle", desc: "The angle at the centre on the same arc, twice the inscribed angle when the arc is a minor arc." },
    { c: "c3", sym: `⌢<i>AC</i>`, name: "Intercepted arc", desc: "The arc inside the inscribed angle, on the far side of the circle from its vertex." },
    { c: "c4", sym: `<i>ABCD</i>`, name: "Cyclic quadrilateral", desc: "A quadrilateral with all four vertices on one circle. Its opposite angles are supplementary." }
  ],
  steps: { title: "How to use inscribed angles", items: [
    `Find the vertex on the circle and the two chords that form the angle.`,
    `Identify the intercepted arc: the arc inside the angle, which does not contain the vertex.`,
    `Halve the arc to get the angle, or double the angle to get the arc.`,
    `Use the corollaries: inscribed angles on the same arc are congruent, and an angle inscribed in a semicircle is 90°.`,
    `In a cyclic quadrilateral, set opposite angles to sum to 180°. For a tangent meeting a chord, the angle is half the arc between them.`
  ] },
  example: {
    prompt: `A designer wants every seat in a curved front row to see a screen <span class="ov"><i>AB</i></span> at the same angle. She puts the seats on a circle through <i>A</i> and <i>B</i>, centre <i>O</i>, with <span class="m">m∠<i>AOB</i> = 70°</span>, all on the major arc. Find the viewing angle from a seat <i>S</i>, and the arcs from the middle seat <i>M</i> (with <span class="m"><i>MA</i> = <i>MB</i></span>) to each end of the screen.`,
    lines: [
      { math: `<span class="m c3">m⌢<i>AB</i> = 70°</span>`, note: "A minor arc measures the same as its central angle ∠AOB." },
      { math: `<span class="m c1">m∠<i>ASB</i> = ½ · 70° = 35°</span>`, note: "Inscribed Angle Theorem: S is on the major arc, so the angle intercepts the minor arc AB." },
      { math: `<span class="m c1">m∠<i>AMB</i> = 35°</span>`, note: "Every seat on the major arc intercepts the same arc, so all the viewing angles are congruent." },
      { math: `<span class="m">m∠<i>MAB</i> = m∠<i>MBA</i> = 72.5°</span>`, note: "MA = MB, so the Base Angles Theorem applies: (180° − 35°) ÷ 2 = 72.5°." },
      { math: `<span class="m c3">m⌢<i>AM</i> = 2 · 72.5° = 145°</span>`, note: "∠MBA is inscribed and intercepts arc AM, so the arc is twice the angle. Likewise arc MB = 145°." },
      { math: `<span class="m">70° + 145° + 145° = 360° ✓</span>`, note: "Check with the Arc Addition Postulate: the three arcs make the whole circle." }
    ],
    answer: `Every seat on the arc sees the screen at <span class="m">35°</span>, and the middle seat is <span class="m">145°</span> of arc from each end of the screen. On the audience side of the screen, points inside the circle see a wider angle and points outside it a narrower one.`
  },
  why: `<p>The Inscribed Angle Theorem says that the angle a segment subtends is the same from every point of an arc. That is why a photographer can move along a circle and keep a building filling the same angle of view, why a navigator can fix a position on a circle from the angle between two lighthouses, and why a square corner placed on a round tabletop always lands its edges on the ends of a diameter.</p>
<p>In the course it is the key to the rest of circle geometry. The angle formulas for chords, secants and tangents, the products of segment lengths, and the Law of Sines (each side divided by the sine of the opposite angle is the diameter of the circumscribed circle) are all proved from inscribed angles.</p>`,
  careers: [
    { role: "Woodworker", use: "Finds the centre of a round tabletop by setting a framing square's corner on the rim: the edges meet the rim at the ends of a diameter." },
    { role: "Ship's navigator", use: "Uses a horizontal danger angle between two charted marks to keep the ship outside the circle of points that see them at that angle." },
    { role: "Surveyor", use: "Locates an instrument by resection: each measured angle between two known points puts it on a circle through those points." },
    { role: "Photographer", use: "Keeps a subject at the same angle of view by moving along a circle through the subject's ends rather than straight back." },
    { role: "Theatre architect", use: "Lays out curved seating so that rows see the stage opening at similar angles." },
    { role: "Computational geometer", use: "Tests whether a mesh edge should be flipped by checking whether the two angles opposite it add to more than 180°, the Delaunay criterion." }
  ],
  life: [
    "Finding the middle of a round plate by tracing the corner of a sheet of paper",
    "Choosing seats in a curved row that all see the screen equally wide",
    "Lining up a group photo along an arc so everyone fits the frame",
    "Judging the best spot to shoot at a goal from the side of the pitch"
  ],
  fields: [
    { name: "Trigonometry", use: "The Law of Sines states a/sin A = 2R, which comes from an inscribed angle on side a." },
    { name: "Navigation", use: "Coastal fixes and danger angles rely on the circle of points that see two marks at one angle." },
    { name: "Surveying", use: "Resection from angles to three known points intersects two such circles." },
    { name: "Computer graphics", use: "Delaunay triangulation of a mesh uses the cyclic-quadrilateral angle test for each edge." }
  ],
  prereqWhy: {
    "g-circles": "An inscribed angle is measured by its intercepted arc, and arc measure is defined by the central angle.",
    "g-isosceles": "The proof draws a radius to form an isosceles triangle, whose equal base angles together make the central angle."
  },
  unlocksWhy: {
    "g-circle-segments": "The products PA·PB = PC·PD come from similar triangles whose angles are congruent inscribed angles on the same arc, and the angle formulas at P add or subtract inscribed angles."
  },
  beyond: [
    { field: "Trigonometry", why: "The extended Law of Sines a/sin A = 2R and Ptolemy's theorem on cyclic quadrilaterals both rest on inscribed angles." },
    { field: "Computational geometry", why: "Delaunay triangulations, used for meshes and terrain models, are defined by the empty-circumcircle test, an inscribed-angle condition." },
    { field: "Complex analysis", why: "Four points lie on one circle or line exactly when their cross-ratio is real, the algebraic form of the cyclic-quadrilateral theorem." }
  ],
  mistakes: [
    { wrong: `Setting an inscribed angle equal to its arc: <span class="m">m⌢<i>AC</i> = 110°</span>, so <span class="m">m∠<i>ABC</i> = 110°</span>.`, fix: `Only a central angle equals its arc. The inscribed angle is half: <span class="m">55°</span>.` },
    { wrong: `Using the arc that contains the vertex.`, fix: `The intercepted arc lies inside the angle, on the far side from the vertex. With <span class="m">m⌢<i>AC</i> = 110°</span> and <i>D</i> on that arc, ∠<i>ADC</i> intercepts the other arc: <span class="m">½ · 250° = 125°</span>.` },
    { wrong: `"Opposite angles of a cyclic quadrilateral are congruent."`, fix: `They are supplementary. They are congruent only when both are 90°, as in a rectangle.` },
    { wrong: `Taking the angle between a tangent and a chord as the whole arc.`, fix: `It is half the intercepted arc, like an inscribed angle: a 130° arc gives a 65° angle.` }
  ],
  practice: [
    { q: `In a circle, <span class="m">m⌢<i>AC</i> = 110°</span>. <i>B</i> is on the major arc and <i>D</i> is on <span class="m">⌢<i>AC</i></span>. Find <span class="m">m∠<i>ABC</i></span> and <span class="m">m∠<i>ADC</i></span>.`, a: `<span class="m">m∠<i>ABC</i> = ½ · 110° = 55°</span>. ∠<i>ADC</i> intercepts the major arc of <span class="m">360° − 110° = 250°</span>, so <span class="m">m∠<i>ADC</i> = 125°</span>. Check: <i>ABCD</i> is cyclic and <span class="m">55° + 125° = 180°</span> ✓.` },
    { q: `<i>ABCD</i> is inscribed in a circle, with <span class="m">m∠<i>A</i> = (2<i>x</i> + 10)°</span>, <span class="m">m∠<i>B</i> = (3<i>x</i> − 5)°</span> and <span class="m">m∠<i>C</i> = (4<i>x</i> − 10)°</span>. Find all four angles.`, a: `Opposite angles are supplementary: <span class="m">(2<i>x</i> + 10) + (4<i>x</i> − 10) = 180</span>, so <span class="m"><i>x</i> = 30</span>. Then <span class="m">m∠<i>A</i> = 70°</span>, <span class="m">m∠<i>C</i> = 110°</span>, <span class="m">m∠<i>B</i> = 85°</span> and <span class="m">m∠<i>D</i> = 180° − 85° = 95°</span>. Check: the four angles total 360° ✓.` },
    { q: `A woodworker sets the corner of a framing square on the rim of a round tabletop. The square's edges cross the rim 60 cm and 80 cm from the corner. Find the diameter of the table, and explain how to locate its centre.`, a: `The corner is a 90° inscribed angle, so it intercepts a semicircle and the chord joining the two crossing points is a diameter. By the Pythagorean Theorem it is <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">60<sup>2</sup> + 80<sup>2</sup></span> = 100</span> cm. Draw that diameter, repeat with the square elsewhere, and the two diameters cross at the centre.` },
    { q: `Which of these can be inscribed in a circle? (a) a parallelogram with a 70° angle; (b) an isosceles trapezoid with base angles of 70°; (c) a kite with angles 90°, 120°, 90°, 60° in order.`, a: `(a) No: its angles in order are 70°, 110°, 70°, 110°, so opposite angles sum to 140° and 220°, not 180°. (b) Yes: its angles in order are 70°, 70°, 110°, 110°, and each opposite pair sums to <span class="m">70° + 110° = 180°</span>. (c) Yes: <span class="m">90° + 90° = 180°</span> and <span class="m">120° + 60° = 180°</span>.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) proves that the angle at the centre is double the angle at the circumference on the same arc (III.20), that angles in the same segment are equal (III.21), that opposite angles of a quadrilateral in a circle total two right angles (III.22), that the angle in a semicircle is right (III.31) and the tangent–chord case (III.32). Later Greek writers credited the semicircle theorem to Thales of Miletus (about 600 BCE), so it is called Thales' theorem.`
};
