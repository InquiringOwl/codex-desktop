window.ARITH = window.ARITH || {};

ARITH["g-congruence"] = {
  title: "Triangle Congruence (SSS, SAS, ASA, AAS, HL)",
  short: "Three well-chosen parts fix the whole triangle",
  grade: "Grade 10 · college-prep Geometry",
  hours: 7,
  voice: "plain",
  eyebrow: "Geometry · congruence",
  hero: `<span class="m">△<i>ABC</i> <span class="c1">≅</span> △<i>DEF</i> &nbsp;⇐&nbsp; <span class="c2">S</span><span class="c2">S</span><span class="c2">S</span> · <span class="c2">S</span><span class="c3">A</span><span class="c2">S</span> · <span class="c3">A</span><span class="c2">S</span><span class="c3">A</span> · <span class="c3">AA</span><span class="c2">S</span> · HL</span>`,
  lede: `Two triangles are congruent when one can be moved exactly onto the other. You never need to check all six parts: three sides, or certain combinations of sides and angles, already force the match.`,
  plain: `<p>Cut three sticks and join them at the ends. However you try, you get the same triangle every time, only perhaps moved or flipped. So if two triangles have the same three side lengths, they are copies of each other. That is <b>SSS</b>. Fix two sides and the angle between them and again only one triangle fits (<b>SAS</b>). Fix two angles and the side between them (<b>ASA</b>), or two angles and a side that is not between them (<b>AAS</b>), and the triangle is again locked in. For right triangles, the hypotenuse and one leg are enough (<b>HL</b>).</p>
<p>Two shortcuts do not work. Matching all three angles (AAA) only fixes the shape: a small and a large triangle can have the same angles. Matching two sides and an angle that is not between them (SSA) can allow two different triangles, because the third side can swing into two positions.</p>
<p>Once two triangles are known to be congruent, every remaining pair of matching parts is congruent too. Proofs cite this as <b>CPCTC</b>: corresponding parts of congruent triangles are congruent.</p>`,
  formal: `<p>Two triangles are <b>congruent</b> if there is a correspondence of their vertices under which all three pairs of corresponding sides and all three pairs of corresponding angles are congruent; equivalently, if a sequence of rigid motions maps one onto the other. Writing <span class="m">△<i>ABC</i> ≅ △<i>DEF</i></span> asserts the correspondence <span class="m c1"><i>A</i> ↔ <i>D</i>, <i>B</i> ↔ <i>E</i>, <i>C</i> ↔ <i>F</i></span>.</p>
<div class="display"><b>SSS</b> &nbsp;three sides of one triangle ≅ three sides of the other<br><b>SAS</b> &nbsp;two sides and the <i>included</i> angle<br><b>ASA</b> &nbsp;two angles and the <i>included</i> side<br><b>AAS</b> &nbsp;two angles and a <i>non-included</i> side <span class="dim">(from ASA and the Third Angles Theorem)</span><br><b>HL</b> &nbsp;&nbsp;the hypotenuse and a leg of two <i>right</i> triangles</div>
<p>In Jurgensen's development SSS, SAS and ASA are postulates and AAS and HL are theorems; in the transformational approach all five are proved from rigid motions. <b>SSA</b> is not a congruence test: with ∠<i>A</i> acute, side <span class="m"><i>c</i> = <i>AB</i></span> and side <span class="m"><i>a</i> = <i>BC</i></span> opposite ∠<i>A</i>, there are two triangles when the distance <span class="m"><i>h</i></span> from <span class="m"><i>B</i></span> to the other side of ∠<i>A</i> satisfies <span class="m"><i>h</i> &lt; <i>a</i> &lt; <i>c</i></span>, one when <span class="m"><i>a</i> = <i>h</i></span> or <span class="m"><i>a</i> ≥ <i>c</i></span>, and none when <span class="m"><i>a</i> &lt; <i>h</i></span>. <b>AAA</b> gives similarity, not congruence.</p>`,
  legend: [
    { c: "c2", sym: `S`, name: "Given sides", desc: "Sides known to be congruent, marked with matching tick marks." },
    { c: "c3", sym: `A`, name: "Given angles", desc: "Angles known to be congruent, marked with matching arcs." },
    { c: "c5", sym: `△<i>ABC</i>`, name: "Determined triangle", desc: "The one triangle the given parts allow." },
    { c: "c4", sym: `△<i>AB</i><i>C</i><sub>2</sub>`, name: "Second possible triangle", desc: "A different triangle with the same given parts, which appears in the SSA and AAA cases and shows why they fail." },
    { c: "c1", sym: `<i>A</i> ↔ <i>D</i>`, name: "Correspondence", desc: "Which vertex matches which. The order of letters in △<i>ABC</i> ≅ △<i>DEF</i> records it." }
  ],
  steps: { title: "How to prove two triangles congruent", items: [
    `Mark the given parts on the figure with tick marks and arcs.`,
    `Add the parts the figure gives for free: a shared side (Reflexive Property), vertical angles, right angles from perpendicular lines, alternate interior angles from parallel lines, halves from a midpoint or bisector.`,
    `Match the vertices and write the correspondence in order, for example <span class="m">△<i>ACB</i> ≅ △<i>DCE</i></span>.`,
    `Choose the test that fits exactly three marked parts: SSS, SAS (angle between the sides), ASA (side between the angles), AAS, or HL for right triangles. Reject SSA and AAA.`,
    `State the congruence with its reason, then use CPCTC for any other pair of parts you need.`
  ] },
  example: {
    prompt: `A surveyor needs the width <span class="m"><i>AB</i></span> of a pond. From a point <span class="m"><i>C</i></span> where both ends are visible, she sights <span class="m"><i>A</i></span> through <span class="m"><i>C</i></span> and pegs <span class="m"><i>D</i></span> with <span class="m"><i>CD</i> = <i>CA</i></span>, then sights <span class="m"><i>B</i></span> through <span class="m"><i>C</i></span> and pegs <span class="m"><i>E</i></span> with <span class="m"><i>CE</i> = <i>CB</i></span>. On dry land she measures <span class="m"><i>DE</i> = 48.5</span> m. Prove <span class="m"><i>AB</i> = <i>DE</i></span> and give the width.`,
    lines: [
      { math: `<span class="m"><span class="c2"><span class="ov"><i>CA</i></span> ≅ <span class="ov"><i>CD</i></span>, &nbsp;<span class="ov"><i>CB</i></span> ≅ <span class="ov"><i>CE</i></span></span></span>`, note: "Given: both were measured off equal (construction)." },
      { math: `<span class="m"><span class="c3">∠<i>ACB</i> ≅ ∠<i>DCE</i></span></span>`, note: "Vertical Angles Theorem: A, C, D and B, C, E are collinear, so the angles at C are vertical." },
      { math: `<span class="m"><span class="c5">△<i>ACB</i> ≅ △<i>DCE</i></span> &nbsp;<span class="c1">(<i>A</i> ↔ <i>D</i>, <i>C</i> ↔ <i>C</i>, <i>B</i> ↔ <i>E</i>)</span></span>`, note: "SAS: the angle at C is included between the two pairs of sides." },
      { math: `<span class="m"><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>DE</i></span></span>`, note: "CPCTC." },
      { math: `<span class="m"><i>AB</i> = <i>DE</i> = 48.5 m</span>`, note: "Congruent segments have equal lengths." },
      { math: `<span class="m">∠<i>CAB</i> ≅ ∠<i>CDE</i> &nbsp;⇒&nbsp; line <i>AB</i> ∥ line <i>DE</i></span>`, note: "Field check from CPCTC and the converse of the Alternate Interior Angles Theorem: the pegged line DE should run parallel to the pond's edge AB." }
    ],
    answer: `<span class="m">△<i>ACB</i> ≅ △<i>DCE</i></span> by SAS, so <span class="m"><i>AB</i> = <i>DE</i></span> by CPCTC. The pond is 48.5 m wide.`
  },
  why: `<p>Congruence tests are the workhorse of Euclidean proof. Nearly every theorem about isosceles triangles, parallelograms, bisectors, circles and tangents is proved by finding two congruent triangles and reading off a matching part. Learning to spot which three parts are known, and which test they fit, is the skill the rest of the course leans on.</p>
<p>In practice, the tests say how much you must measure to pin a shape down. A surveyor who knows two sides and the included angle of a plot, or a fabricator who fixes three side lengths of a triangular frame, knows the whole triangle. That is also why triangles make rigid trusses: SSS means a triangle with fixed sides cannot change shape.</p>`,
  careers: [
    { role: "Surveyor", use: "Fixes a land parcel's corner from two measured distances and the included angle (SAS), then checks closure with the third side." },
    { role: "Structural engineer", use: "Relies on triangulated trusses, which hold their shape because three fixed side lengths determine a triangle (SSS)." },
    { role: "Carpenter", use: "Checks that two roof trusses match by comparing three edge lengths before raising them." },
    { role: "Machinist", use: "Inspects a triangular bracket against its drawing by measuring two sides and the included angle." },
    { role: "Forensic engineer", use: "Locates skid marks and debris at a crash scene from measured distances to two fixed reference points, which fixes each triangle (SSS)." },
    { role: "Navigator", use: "Fixes a landmark's position from a measured baseline and the angles sighted to it from both ends (ASA)." }
  ],
  life: [
    "Bracing a wobbly shelf with a diagonal so it forms triangles",
    "Cutting two matching triangular pieces of fabric or wood from one template",
    "Checking that two gable ends of a shed are the same by measuring their sides",
    "Using a folding ruler or a set square that stays rigid once locked",
    "Matching replacement tiles to a broken triangular tile"
  ],
  fields: [
    { name: "Structural engineering", use: "Trusses are built from triangles because SSS makes them rigid." },
    { name: "Surveying", use: "Triangulation fixes points from measured sides and angles." },
    { name: "Manufacturing", use: "Interchangeable parts are congruent copies checked against tolerances." },
    { name: "Computer graphics", use: "Meshes of triangles keep their shape under rigid motions of the model." }
  ],
  prereqWhy: {
    "g-triangle-angles": "The Triangle Angle-Sum Theorem gives the Third Angles Theorem, which turns AAS into ASA and rules out impossible angle data.",
    "g-transformations": "Congruence is defined by rigid motions, and the SSS, SAS and ASA tests say when such a motion is guaranteed to exist.",
    "g-proofs": "Congruence arguments are written as two-column proofs, with a reason (Given, Reflexive Property, Vertical Angles Theorem, SAS, CPCTC) for every line."
  },
  unlocksWhy: {
    "g-quadrilaterals": "A diagonal splits a parallelogram into two congruent triangles (ASA), which proves its opposite sides and angles are congruent.",
    "g-isosceles": "The Base Angles Theorem is proved by showing that the vertex-angle bisector cuts an isosceles triangle into two congruent triangles (SAS).",
    "g-bisectors": "The Perpendicular Bisector Theorem and the Angle Bisector Theorem are proved with SAS and AAS, and they locate the circumcentre and incentre.",
    "g-tri-inequality": "The Hinge Theorem compares two triangles with two pairs of congruent sides, where SAS is the equal-angle case.",
    "g-similar-triangles": "Proofs of AA, SAS∼ and SSS∼ build a smaller copy inside one triangle and show it is congruent to the other.",
    "g-chords-tangents": "Two tangent segments from an external point are congruent by HL, and the perpendicular from the centre bisects a chord by HL."
  },
  beyond: [
    { field: "Trigonometry", why: "The Law of Sines and Law of Cosines solve exactly the SAS, SSS, ASA and AAS cases, and the SSA case is the ambiguous case." },
    { field: "Structural engineering", why: "Statically determinate trusses are analysed triangle by triangle because a triangle with fixed sides cannot deform." },
    { field: "Linear Algebra", why: "Congruent figures are related by orthogonal transformations plus translations, which preserve every distance." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m">△<i>ACB</i> ≅ △<i>EDC</i></span> when <span class="m"><i>A</i></span> matches <span class="m"><i>D</i></span>.`, fix: `The letter order is the correspondence. With <span class="m"><i>A</i> ↔ <i>D</i></span>, <span class="m"><i>C</i> ↔ <i>C</i></span>, <span class="m"><i>B</i> ↔ <i>E</i></span>, write <span class="m">△<i>ACB</i> ≅ △<i>DCE</i></span>.` },
    { wrong: `Using SAS with an angle that is not between the two sides.`, fix: `That is SSA, which can give two different triangles. The angle in SAS must be formed by the two given sides.` },
    { wrong: `"All three angles match, so the triangles are congruent (AAA)."`, fix: `Equal angles fix only the shape. A 3-4-5 and a 6-8-10 triangle have the same angles and different sizes. AAA proves similarity.` },
    { wrong: `Citing CPCTC to get a part needed for the congruence itself.`, fix: `CPCTC can be used only after the triangles have been proved congruent by SSS, SAS, ASA, AAS or HL.` }
  ],
  practice: [
    { q: `Which test, if any, proves <span class="m">△<i>ABC</i> ≅ △<i>DEF</i></span>? (a) <span class="m"><i>AB</i> = <i>DE</i> = 5</span>, <span class="m"><i>BC</i> = <i>EF</i> = 7</span>, <span class="m">m∠<i>B</i> = m∠<i>E</i> = 40°</span>. (b) <span class="m">m∠<i>A</i> = m∠<i>D</i> = 50°</span>, <span class="m">m∠<i>B</i> = m∠<i>E</i> = 60°</span>, <span class="m"><i>BC</i> = <i>EF</i> = 8</span>. (c) Both triangles have angles 50°, 60° and 70°.`, a: `(a) SAS: ∠<i>B</i> is between <span class="ov"><i>AB</i></span> and <span class="ov"><i>BC</i></span>. (b) AAS: <span class="ov"><i>BC</i></span> is opposite ∠<i>A</i>, not between the two angles. (c) None: AAA fixes the shape but not the size.` },
    { q: `<span class="m">△<i>PQR</i> ≅ △<i>XYZ</i></span>, <span class="m"><i>PQ</i> = 9</span>, <span class="m">m∠<i>Q</i> = 72°</span> and <span class="m">m∠<i>R</i> = 41°</span>. Find <span class="m"><i>XY</i></span> and <span class="m">m∠<i>X</i></span>.`, a: `<span class="m"><i>XY</i> = <i>PQ</i> = 9</span> (CPCTC). <span class="m">m∠<i>X</i> = m∠<i>P</i> = 180° − 72° − 41° = 67°</span> (Triangle Angle-Sum Theorem, then CPCTC).` },
    { q: `SSA: <span class="m">m∠<i>A</i> = 30°</span>, <span class="m"><i>AB</i> = 10</span> and <span class="m"><i>BC</i> = 6</span>. How many triangles <span class="m"><i>ABC</i></span> are possible? What if <span class="m"><i>BC</i> = 4</span>?`, a: `The distance from <span class="m"><i>B</i></span> to the other side of ∠<i>A</i> is <span class="m"><i>h</i> = 5</span> (the right triangle with a 30° angle at <i>A</i> is half of an equilateral triangle with side 10). Since <span class="m">5 &lt; 6 &lt; 10</span>, a circle of radius 6 about <span class="m"><i>B</i></span> meets that side twice: two triangles, with <span class="m"><i>AC</i> = 5√3 ± √11 ≈ 12.0</span> or <span class="m">5.3</span>. With <span class="m"><i>BC</i> = 4 &lt; 5</span> the circle misses: no triangle.` },
    { q: `Given: <span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>AC</i></span>, and <span class="ov"><i>AD</i></span> ⊥ <span class="ov"><i>BC</i></span> with <span class="m"><i>D</i></span> on <span class="ov"><i>BC</i></span>. Prove <span class="ov"><i>BD</i></span> ≅ <span class="ov"><i>CD</i></span>.`, a: `<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>AC</i></span>; <span class="ov"><i>AD</i></span> ⊥ <span class="ov"><i>BC</i></span></td><td>Given</td></tr><tr><td>∠<i>ADB</i> and ∠<i>ADC</i> are right angles</td><td>Perpendicular lines form right angles</td></tr><tr><td><span class="ov"><i>AD</i></span> ≅ <span class="ov"><i>AD</i></span></td><td>Reflexive Property</td></tr><tr><td>△<i>ADB</i> ≅ △<i>ADC</i></td><td>HL</td></tr><tr><td><span class="ov"><i>BD</i></span> ≅ <span class="ov"><i>CD</i></span></td><td>CPCTC</td></tr></table>` }
  ],
  origin: `Euclid proves SAS as Proposition I.4 of the <i>Elements</i> (about 300 BCE) by placing one triangle on the other, SSS as I.8, and ASA and AAS together as I.26. In 1899 David Hilbert's <i>Foundations of Geometry</i> made a form of SAS an axiom, since superposition cannot be justified from Euclid's other postulates.`
};
