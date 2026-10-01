window.ARITH = window.ARITH || {};

ARITH["g-quadrilaterals"] = {
  title: "Parallelograms & Special Quadrilaterals",
  short: "Parallelograms, rectangles, rhombi, squares, trapezoids, kites",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · quadrilaterals",
  hero: `<span class="m"><span class="c2"><span class="ov"><i>AB</i></span> ∥ <span class="ov"><i>DC</i></span>, &nbsp;<span class="ov"><i>AD</i></span> ∥ <span class="ov"><i>BC</i></span></span> &nbsp;⟹&nbsp; <span class="c4">diagonals bisect each other</span></span>`,
  lede: `A parallelogram has both pairs of opposite sides parallel, and that one fact forces congruent opposite sides, congruent opposite angles and diagonals that bisect each other. Rectangles, rhombi and squares are parallelograms with extra conditions.`,
  plain: `<p>A <b>parallelogram</b> is a four-sided figure whose opposite sides are parallel, like a rectangle that has been pushed sideways. Because the sides are parallel, a diagonal cuts it into two congruent triangles. So opposite sides have the same length, opposite angles are equal, and neighbouring angles add to 180°. The two diagonals cross at each other's midpoints.</p>
<p>Add one more condition and you get the special parallelograms. A <b>rectangle</b> has four right angles, and its diagonals are the same length. A <b>rhombus</b> has four equal sides, and its diagonals cross at right angles. A <b>square</b> is both, so it has every property.</p>
<p>Two other shapes sit outside the parallelogram family. A <b>trapezoid</b> has exactly one pair of parallel sides, called the bases. If its other two sides (the legs) are equal, it is an <b>isosceles trapezoid</b>, with equal base angles and equal diagonals. A <b>kite</b> has two pairs of equal sides next to each other, and its diagonals are perpendicular.</p>`,
  formal: `<p><b>Definitions.</b> A <b>parallelogram</b> is a quadrilateral with both pairs of opposite sides parallel. A <b>rectangle</b> is a quadrilateral with four right angles, a <b>rhombus</b> one with four congruent sides, a <b>square</b> one with four right angles and four congruent sides. A <b>trapezoid</b> has exactly one pair of parallel sides (some texts use "at least one pair", which makes every parallelogram a trapezoid). A <b>kite</b> has two pairs of consecutive congruent sides and no pair of opposite sides congruent.</p>
<div class="display"><b>Properties of a parallelogram:</b> opposite sides are congruent; opposite angles are congruent; consecutive angles are supplementary; the diagonals bisect each other.<br><b>Tests:</b> a quadrilateral is a parallelogram if both pairs of opposite sides are congruent, or one pair of opposite sides is both congruent and parallel, or both pairs of opposite angles are congruent, or the diagonals bisect each other.<br><b>Special parallelograms:</b> a parallelogram is a rectangle if and only if its diagonals are congruent, and a rhombus if and only if its diagonals are perpendicular (equivalently, each diagonal bisects two angles).<br><b>Trapezoids and kites:</b> the midsegment of a trapezoid is parallel to the bases and has length ½(<i>b</i><sub>1</sub> + <i>b</i><sub>2</sub>); an isosceles trapezoid has congruent base angles in each pair and congruent diagonals; the diagonals of a kite are perpendicular.</div>
<p>Proof that the diagonals of parallelogram <span class="m"><i>ABCD</i></span> bisect each other, where they meet at <span class="m"><i>E</i></span>:</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr>
<tr><td><span class="m"><i>ABCD</i></span> is a parallelogram</td><td>Given</td></tr>
<tr><td><span class="m"><span class="ov"><i>AB</i></span> ∥ <span class="ov"><i>DC</i></span></span></td><td>Definition of parallelogram</td></tr>
<tr><td><span class="m">∠<i>BAE</i> ≅ ∠<i>DCE</i>, ∠<i>ABE</i> ≅ ∠<i>CDE</i></span></td><td>Alternate Interior Angles Theorem</td></tr>
<tr><td><span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>CD</i></span></span></td><td>Opposite sides of a parallelogram are congruent</td></tr>
<tr><td><span class="m">△<i>ABE</i> ≅ △<i>CDE</i></span></td><td>ASA</td></tr>
<tr><td><span class="m"><span class="ov"><i>AE</i></span> ≅ <span class="ov"><i>CE</i></span>, <span class="ov"><i>BE</i></span> ≅ <span class="ov"><i>DE</i></span></span></td><td>CPCTC</td></tr></table>`,
  legend: [
    { c: "c2", sym: `<span class="ov"><i>AB</i></span>, <span class="ov"><i>BC</i></span>, …`, name: "Sides", desc: "Tick marks show congruent sides and arrowheads show parallel sides." },
    { c: "c4", sym: `<span class="ov"><i>AC</i></span>, <span class="ov"><i>BD</i></span>`, name: "Diagonals", desc: "Whether they bisect each other, are perpendicular or are congruent sorts the shape into its class." },
    { c: "c1", sym: `∥ ≅ ⊥`, name: "Properties", desc: "The tests that hold for the current shape: parallel or congruent sides, bisecting, perpendicular or congruent diagonals." },
    { c: "c5", sym: `▱ → □`, name: "Classification", desc: "The most specific name the properties prove, and every broader class it belongs to." }
  ],
  steps: { title: "How to classify a quadrilateral from its properties", items: [
    `Count pairs of parallel opposite sides. Two pairs: parallelogram. Exactly one pair: trapezoid. None: check for a kite (two pairs of consecutive congruent sides) or call it a quadrilateral.`,
    `For a parallelogram, test the diagonals: congruent means rectangle, perpendicular means rhombus, both means square.`,
    `For a trapezoid, compare the legs: congruent legs (with the figure not a parallelogram) make it isosceles.`,
    `Use a test only when its hypothesis is met. Congruent diagonals prove a rectangle only for a parallelogram, and perpendicular diagonals prove a rhombus only for a parallelogram.`,
    `State the most specific name, then remember the broader ones: a square is also a rhombus, a rectangle and a parallelogram.`
  ] },
  example: {
    prompt: `A carpenter builds a frame with sides of 48 in and 30 in, and checks it with a tape: both long sides are 48 in, both short sides are 30 in, and the diagonals measure 56.0 in and 57.2 in. Is the frame a rectangle? What should each diagonal read when it is square?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>AB</i> = <i>CD</i> = 48, &nbsp;<i>BC</i> = <i>DA</i> = 30</span> &nbsp;→&nbsp; <span class="c5">parallelogram</span></span>`, note: "Both pairs of opposite sides are congruent, so the quadrilateral is a parallelogram." },
      { math: `<span class="m c4">56.0 ≠ 57.2</span>`, note: "A parallelogram is a rectangle if and only if its diagonals are congruent, so the frame is not yet a rectangle." },
      { math: `<span class="m"><i>d</i> = √<span style="text-decoration:overline">48² + 30²</span> = √3204</span>`, note: "When the corners are right angles, each diagonal is the hypotenuse of a right triangle with legs 48 and 30 (Pythagorean Theorem)." },
      { math: `<span class="m">√3204 = √<span style="text-decoration:overline">36 · 89</span> = 6√89 ≈ 56.6 in</span>`, note: "Simplify the radical, then round to the nearest tenth." },
      { math: `<span class="m">56.0² + 57.2² ≈ 6408 = 2(48² + 30²) ✓</span>`, note: "Check: in any parallelogram the squares of the diagonals add to twice the squares of two adjacent sides, so the readings are consistent." }
    ],
    answer: `The frame is a parallelogram but not a rectangle. Push it along the longer diagonal until both diagonals read <span class="m">6√89 ≈ 56.6</span> in.`
  },
  why: `<p>Builders square a frame, a deck or a foundation by measuring its diagonals, which is exactly the rectangle test. Parallelogram linkages keep a desk lamp's head level, let a car's scissor jack lift straight up and hold a drafting arm parallel to itself as it moves, all because opposite sides stay parallel and congruent.</p>
<p>The classification is also a model of careful logic. Each special shape inherits every property of the shapes above it, and each test works only when its hypothesis holds. That habit carries into coordinate proofs, area formulas and vector geometry.</p>`,
  careers: [
    { role: "Carpenter", use: "Squares a door frame, deck or wall by adjusting it until its two diagonals measure the same, the rectangle test for a parallelogram." },
    { role: "Mechanical engineer", use: "Designs parallelogram linkages, as in lifts and lamp arms, so a platform stays level while it moves." },
    { role: "Surveyor", use: "Sets out a rectangular building footprint by checking that the corner-to-corner distances match." },
    { role: "Bridge engineer", use: "Analyses rhombus- and trapezoid-shaped panels in trusses and bracing." },
    { role: "Graphic designer", use: "Builds isometric drawings where every face is a rhombus or parallelogram." },
    { role: "Textile designer", use: "Lays out argyle and diamond patterns from rhombus tiles with perpendicular diagonals." }
  ],
  life: [
    "Checking that a picture frame or bookshelf is square by measuring its diagonals",
    "Recognising the parallelogram arms that keep a desk lamp head level",
    "Cutting a kite frame from two crossed sticks at right angles",
    "Seeing trapezoids in the side view of a bucket or a lampshade",
    "Laying out a rectangular garden bed with string and a tape measure"
  ],
  fields: [
    { name: "Physics", use: "The parallelogram rule adds two forces or velocities: the resultant is the diagonal." },
    { name: "Mechanical engineering", use: "Four-bar parallelogram linkages produce motion that keeps a part parallel to itself." },
    { name: "Architecture", use: "Rectangular plans are checked and set out with diagonal measurements." },
    { name: "Crystallography", use: "The unit cells of two-dimensional lattices are parallelograms, rectangles, rhombi and squares." }
  ],
  prereqWhy: {
    "g-polygons": "A quadrilateral's interior angles total 360°, which gives the supplementary consecutive angles of a parallelogram and the angles of trapezoids.",
    "g-congruence": "A diagonal splits a parallelogram into two triangles congruent by ASA, and CPCTC delivers its side, angle and diagonal properties.",
    "g-parallel": "Alternate interior and same-side interior angles along a side of a parallelogram give its congruent and supplementary angles."
  },
  unlocksWhy: {
    "g-coord-proofs": "Coordinate proofs classify a quadrilateral by testing the same properties with slopes, lengths and midpoints.",
    "g-area-polygons": "Area formulas for parallelograms, trapezoids, kites and rhombi come from cutting and rearranging these shapes."
  },
  beyond: [
    { field: "Precalculus", why: "Vectors add by the parallelogram rule, and the parallelogram law relates the diagonals to the sides." },
    { field: "Linear Algebra", why: "A 2 × 2 determinant is the signed area of the parallelogram spanned by two vectors." },
    { field: "Calculus III", why: "Cross products and surface area elements are areas of small parallelograms." },
    { field: "Physics", why: "Forces, velocities and fields are combined with parallelogram diagrams." }
  ],
  mistakes: [
    { wrong: `A quadrilateral with congruent diagonals is a rectangle.`, fix: `Only if it is already a parallelogram. An isosceles trapezoid also has congruent diagonals.` },
    { wrong: `A quadrilateral with perpendicular diagonals is a rhombus.`, fix: `A kite has perpendicular diagonals too. It must also be a parallelogram (diagonals bisecting each other) to be a rhombus.` },
    { wrong: `One pair of parallel sides and the other pair congruent makes a parallelogram.`, fix: `An isosceles trapezoid fits that description. The test needs the <i>same</i> pair of opposite sides to be both parallel and congruent.` },
    { wrong: `A square is not a rectangle because its sides are all equal.`, fix: `A rectangle needs four right angles, and a square has them. Every square is a rectangle and a rhombus.` }
  ],
  practice: [
    { q: `In parallelogram <span class="m"><i>ABCD</i></span>, <span class="m">m∠<i>A</i> = 65°</span>. Find the other three angles.`, a: `Consecutive angles are supplementary and opposite angles congruent: <span class="m">m∠<i>B</i> = m∠<i>D</i> = 115°</span>, <span class="m">m∠<i>C</i> = 65°</span>. Check: <span class="m">65 + 115 + 65 + 115 = 360</span> ✓.` },
    { q: `The diagonals of parallelogram <span class="m"><i>ABCD</i></span> meet at <span class="m"><i>E</i></span>, with <span class="m"><i>AE</i> = 2<i>x</i> + 3</span> and <span class="m"><i>EC</i> = 5<i>x</i> − 9</span>. Find <span class="m"><i>AC</i></span>.`, a: `The diagonals bisect each other: <span class="m">2<i>x</i> + 3 = 5<i>x</i> − 9</span>, so <span class="m"><i>x</i> = 4</span>, <span class="m"><i>AE</i> = <i>EC</i> = 11</span> and <span class="m"><i>AC</i> = 22</span>.` },
    { q: `Quadrilateral <span class="m"><i>ABCD</i></span> has vertices <span class="m"><i>A</i>(0, 3)</span>, <span class="m"><i>B</i>(2, 0)</span>, <span class="m"><i>C</i>(0, −5)</span>, <span class="m"><i>D</i>(−2, 0)</span>. Its diagonals are perpendicular. Is it a rhombus?`, a: `No. The diagonals lie on the axes, so they are perpendicular, but their midpoints are <span class="m">(0, −1)</span> and <span class="m">(0, 0)</span>, so they do not bisect each other and it is not a parallelogram. <span class="m"><i>AB</i> = <i>AD</i> = √13</span> and <span class="m"><i>CB</i> = <i>CD</i> = √29</span>: it is a kite.` },
    { q: `Isosceles trapezoid <span class="m"><i>PQRS</i></span> has bases <span class="m"><i>PQ</i> = 3<i>x</i> + 2</span> and <span class="m"><i>SR</i> = 5<i>x</i> − 4</span>, midsegment 15, and <span class="m">m∠<i>S</i> = 72°</span>. Find <span class="m"><i>x</i></span>, both bases and the other angles.`, a: `Midsegment Theorem: <span class="m">½(8<i>x</i> − 2) = 15</span>, so <span class="m"><i>x</i> = 4</span>, <span class="m"><i>PQ</i> = 14</span>, <span class="m"><i>SR</i> = 16</span>. Base angles are congruent: <span class="m">m∠<i>R</i> = 72°</span>. Same-side interior angles are supplementary: <span class="m">m∠<i>P</i> = m∠<i>Q</i> = 108°</span>.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE), Book I Definition 22, names the square, the oblong (rectangle), the rhombus and the rhomboid, and calls every other quadrilateral a trapezium. Book I Proposition 34 proves that the opposite sides and angles of a parallelogram are equal and that a diagonal bisects its area.`
};
