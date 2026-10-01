window.ARITH = window.ARITH || {};

ARITH["g-proportionality"] = {
  title: "Triangle Proportionality & the Angle Bisector Theorem",
  short: "Parallel lines and angle bisectors split sides in proportion",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · similarity",
  hero: `<span class="m"><span class="ov c2"><i>DE</i></span> ∥ <span class="ov"><i>BC</i></span> &nbsp;⇒&nbsp; <span class="fr"><span class="c3"><i>AD</i></span><span class="c4"><i>DB</i></span></span> = <span class="fr"><span class="c3"><i>AE</i></span><span class="c4"><i>EC</i></span></span></span>`,
  lede: `A line parallel to one side of a triangle cuts the other two sides into pieces with the same ratio. Parallel lines crossing any two transversals do the same, and an angle bisector splits the opposite side in the ratio of the two sides beside it.`,
  plain: `<p>Draw a triangle and slide a ruler across it, always keeping the ruler parallel to the bottom side. Wherever the ruler sits, it cuts the left side and the right side at the same fraction of the way down. If it is one third of the way down the left side, it is one third of the way down the right side too. That is the <b>Triangle Proportionality Theorem</b>, often called the <b>Side-Splitter Theorem</b>. It works the other way as well: if a segment cuts two sides in the same ratio, it is parallel to the third side.</p>
<p>The halfway position is special. The segment joining the midpoints of two sides is the <b>midsegment</b>; it is parallel to the third side and exactly half as long.</p>
<p>Parallel lines do this to any pair of crossing lines, not only inside a triangle. Property lines that run parallel between two streets cut both streets into frontages in the same ratio. And an <b>angle bisector</b> of a triangle splits the opposite side into two pieces whose ratio matches the two sides that form the angle: the longer neighbouring side gets the longer piece.</p>`,
  formal: `<div class="display"><b>Triangle Proportionality Theorem.</b> If a line parallel to one side of a triangle intersects the other two sides, it divides those sides proportionally: in △<i>ABC</i>, <span class="ov"><i>DE</i></span> ∥ <span class="ov"><i>BC</i></span> ⇒ <i>AD</i>/<i>DB</i> = <i>AE</i>/<i>EC</i>.<br><b>Converse.</b> If a line divides two sides of a triangle proportionally, it is parallel to the third side.<br><b>Triangle Midsegment Theorem.</b> The segment joining the midpoints of two sides is parallel to the third side and half its length.<br><b>Corollary.</b> If three parallel lines intersect two transversals, they divide the transversals proportionally.<br><b>Triangle Angle-Bisector Theorem.</b> If a ray bisects an angle of a triangle, it divides the opposite side into segments proportional to the other two sides: ray <i>AD</i> bisects ∠<i>A</i> ⇒ <i>BD</i>/<i>DC</i> = <i>AB</i>/<i>AC</i>.</div>
<p>Proof of the first: <span class="m">∠<i>A</i></span> is shared and <span class="m">∠<i>ADE</i> ≅ ∠<i>ABC</i></span> (corresponding angles), so <span class="m">△<i>ADE</i> ∼ △<i>ABC</i></span> by AA and <span class="m"><i>AB</i>/<i>AD</i> = <i>AC</i>/<i>AE</i></span>. Write <span class="m"><i>AB</i> = <i>AD</i> + <i>DB</i></span> and <span class="m"><i>AC</i> = <i>AE</i> + <i>EC</i></span> and subtract 1 from both sides: <span class="m"><i>DB</i>/<i>AD</i> = <i>EC</i>/<i>AE</i></span>. Note that the parallel segment itself satisfies <span class="m"><i>DE</i>/<i>BC</i> = <i>AD</i>/<i>AB</i></span>, a ratio to the whole side, not <span class="m"><i>AD</i>/<i>DB</i></span>. The Angle-Bisector Theorem follows by drawing the line through <span class="m"><i>C</i></span> parallel to ray <span class="m"><i>AD</i></span> and extending line <span class="m"><i>BA</i></span> to meet it at <span class="m"><i>F</i></span>: the angles at <span class="m"><i>C</i></span> and <span class="m"><i>F</i></span> of △<i>ACF</i> are congruent to the two halves of ∠<i>A</i>, so <span class="m"><i>AF</i> = <i>AC</i></span>, and the first theorem in △<i>BCF</i> gives <span class="m"><i>BD</i>/<i>DC</i> = <i>BA</i>/<i>AF</i> = <i>AB</i>/<i>AC</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<span class="ov"><i>DE</i></span>`, name: "Parallel segment", desc: "The segment parallel to the third side <span class=\"m\"><span class=\"ov\"><i>BC</i></span></span>, with endpoints on the other two sides." },
    { c: "c3", sym: `<i>AD</i>, <i>AE</i>`, name: "Upper parts", desc: "The pieces of the two sides between the vertex <i>A</i> and the parallel segment." },
    { c: "c4", sym: `<i>DB</i>, <i>EC</i>`, name: "Lower parts", desc: "The pieces between the parallel segment and the third side." },
    { c: "c1", sym: `<i>AD</i> : <i>DB</i>`, name: "Ratio", desc: "The common ratio upper ÷ lower, the same on both sides. It equals 1 exactly for the midsegment." }
  ],
  steps: { title: "How to use the proportionality theorems", items: [
    `Identify the situation: a segment parallel to a side of a triangle, three or more parallel lines across two transversals, or an angle bisector of a triangle.`,
    `Pair the pieces correctly: upper with upper and lower with lower on the two sides; or, for a bisector, each piece of the opposite side with the side of the triangle next to it.`,
    `Write the proportion, for example <span class="m"><i>AD</i>/<i>DB</i> = <i>AE</i>/<i>EC</i></span> or <span class="m"><i>BD</i>/<i>DC</i> = <i>AB</i>/<i>AC</i></span>.`,
    `For the length of the parallel segment itself, use the similar triangles instead: <span class="m"><i>DE</i>/<i>BC</i> = <i>AD</i>/<i>AB</i></span>.`,
    `Cross-multiply, solve, and check that both ratios now agree. To prove two segments parallel, show the ratios are equal and cite the converse.`
  ] },
  example: {
    prompt: `In a triangular roof truss <span class="m">△<i>ABC</i></span> the bottom chord <span class="m"><span class="ov"><i>BC</i></span></span> is 8.0 m long. A horizontal collar tie <span class="m"><span class="ov"><i>DE</i></span></span>, parallel to <span class="m"><span class="ov"><i>BC</i></span></span>, joins the rafters at <span class="m"><i>D</i></span> on <span class="m"><span class="ov"><i>AB</i></span></span> and <span class="m"><i>E</i></span> on <span class="m"><span class="ov"><i>AC</i></span></span>. If <span class="m"><i>AD</i> = 1.8</span> m, <span class="m"><i>DB</i> = 2.7</span> m and <span class="m"><i>AE</i> = 2.0</span> m, find <span class="m"><i>EC</i></span> and the length of the collar tie.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c3"><i>AD</i></span><span class="c4"><i>DB</i></span></span> = <span class="fr"><span class="c3"><i>AE</i></span><span class="c4"><i>EC</i></span></span></span>`, note: "Triangle Proportionality Theorem, since DE ∥ BC." },
      { math: `<span class="m"><span class="fr"><span>1.8</span><span>2.7</span></span> = <span class="fr"><span>2.0</span><span><i>EC</i></span></span></span>`, note: "Substitute the measured lengths. The ratio is 1.8 : 2.7 = 2 : 3." },
      { math: `<span class="m c4"><i>EC</i> = 3.0 m</span>`, note: "Cross-multiply: EC = 2.0 × 2.7 ÷ 1.8 = 3.0." },
      { math: `<span class="m">△<i>ADE</i> ∼ △<i>ABC</i></span>`, note: "AA: the angle at A is shared, and ∠ADE ≅ ∠ABC as corresponding angles." },
      { math: `<span class="m"><span class="c2"><i>DE</i></span> = 8.0 · <span class="fr"><span>1.8</span><span>4.5</span></span> = 3.2 m</span>`, note: "Corresponding sides: DE/BC = AD/AB, with AB = 1.8 + 2.7 = 4.5." },
      { math: `<span class="m"><span class="fr"><span>2.0</span><span>5.0</span></span> = <span class="fr"><span>3.2</span><span>8.0</span></span> = <span class="c1">0.4</span> ✓</span>`, note: "Check: AE/AC, DE/BC and AD/AB = 1.8/4.5 all equal 0.4, the scale factor of the small triangle." }
    ],
    answer: `<span class="m"><i>EC</i> = 3.0</span> m and the collar tie is <span class="m">3.2</span> m long.`
  },
  why: `<p>These theorems turn a parallel line into a ratio you can measure. Builders use them to place braces and shelves in triangular frames, surveyors to divide land between parallel boundaries, and artists to place evenly spaced objects in perspective. The midsegment gives quick halfway measurements, and the converse is a practical test for whether two edges are truly parallel.</p>
<p>They also show that parallel lines preserve ratios along a line, an idea that becomes the section formula for dividing a segment in coordinates, the basis of perspective projection in graphics, and a standard step in olympiad and college geometry. The Angle-Bisector Theorem reappears in the formula for the incentre of a triangle.</p>`,
  careers: [
    { role: "Carpenter", use: "Places a level brace or shelf inside a triangular frame and cuts it to length using the ratio along the sloped sides." },
    { role: "Land surveyor", use: "Divides frontage between lots whose side lines run parallel, in the same ratio on each street." },
    { role: "Graphic designer", use: "Divides a slanted line into equal or proportional parts by projecting marks from a ruler along parallel lines." },
    { role: "Drafter", use: "Uses the parallel-line method to split a segment into any number of equal parts without measuring it." },
    { role: "Structural engineer", use: "Locates panel points along the sloped members of a truss from the horizontal spacing below them." },
    { role: "Cartographer", use: "Interpolates positions between parallel grid lines along a road that crosses them at an angle." }
  ],
  life: [
    "Fitting a horizontal shelf inside an A-frame or a triangular nook",
    "Dividing a board into equal strips by angling a ruler across it",
    "Splitting a lot between two parallel streets fairly",
    "Placing evenly spaced rungs on a ladder that tapers"
  ],
  fields: [
    { name: "Construction", use: "Collar ties, braces and roof framing are sized with the side-splitter ratios." },
    { name: "Technical drawing", use: "The classic construction that divides a segment into n equal parts is the corollary on parallel lines." },
    { name: "Computer graphics", use: "Interpolation along edges in rasterising and texture mapping keeps ratios fixed between parallel scan lines." },
    { name: "Surveying", use: "Proportional division of boundaries between parallel lines is a standard land-partition method." }
  ],
  prereqWhy: {
    "g-similar-triangles": "Every theorem here is proved from the AA Similarity Postulate: a parallel line cuts off a triangle similar to the whole."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Precalculus", why: "The point that divides a segment from A to B in the ratio m : n, used in vectors and coordinate geometry, comes from this theorem." },
    { field: "Calculus I", why: "Related-rates problems with a moving shadow or a level falling in a cone use the same proportions between parallel cross-sections." },
    { field: "Projective Geometry", why: "Central projection preserves ratios along lines that are parallel to the picture plane, which is how perspective drawings are measured." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>DE</i>/<i>BC</i> = <i>AD</i>/<i>DB</i></span> for the length of the parallel segment.`, fix: `The parallel segment compares with the whole sides: <span class="m"><i>DE</i>/<i>BC</i> = <i>AD</i>/<i>AB</i></span>. In the truss, <span class="m">1.8/4.5 = 0.4</span>, not <span class="m">1.8/2.7</span>.` },
    { wrong: `Pairing an upper piece with a lower piece: <span class="m"><i>AD</i>/<i>DB</i> = <i>EC</i>/<i>AE</i></span>.`, fix: `Keep the same order on both sides, upper over lower: <span class="m"><i>AD</i>/<i>DB</i> = <i>AE</i>/<i>EC</i></span>.` },
    { wrong: `For the Angle-Bisector Theorem, matching <span class="m"><i>BD</i></span> with <span class="m"><i>AC</i></span>.`, fix: `Each piece goes with the side it touches: <span class="m"><i>BD</i></span> is next to <span class="m"><i>AB</i></span>, so <span class="m"><i>BD</i>/<i>DC</i> = <i>AB</i>/<i>AC</i></span>.` },
    { wrong: `Assuming a segment across a triangle is parallel to the base because it looks parallel.`, fix: `Use the converse: compute both ratios. Unequal ratios prove the segment is not parallel.` }
  ],
  practice: [
    { q: `In △<i>PQR</i>, <span class="m"><i>M</i></span> and <span class="m"><i>N</i></span> are the midpoints of <span class="m"><span class="ov"><i>PQ</i></span></span> and <span class="m"><span class="ov"><i>PR</i></span></span>. If <span class="m"><i>MN</i> = 3<i>x</i> + 1</span> and <span class="m"><i>QR</i> = 8<i>x</i> − 6</span>, find <span class="m"><i>x</i></span>, <span class="m"><i>MN</i></span> and <span class="m"><i>QR</i></span>.`, a: `Triangle Midsegment Theorem: <span class="m"><i>QR</i> = 2 · <i>MN</i></span>, so <span class="m">8<i>x</i> − 6 = 6<i>x</i> + 2</span> and <span class="m"><i>x</i> = 4</span>. Then <span class="m"><i>MN</i> = 13</span> and <span class="m"><i>QR</i> = 26</span>.` },
    { q: `Three parallel property lines run from Elm Street to Oak Street. Along Elm Street the two lots between them have frontages of 32 m and 48 m. Their total frontage on Oak Street is 95 m. Find each lot's frontage on Oak Street.`, a: `Parallel lines divide the transversals proportionally, so the Oak frontages are in the ratio <span class="m">32 : 48 = 2 : 3</span>. They are <span class="m">95 · 2/5 = 38</span> m and <span class="m">95 · 3/5 = 57</span> m. Check: <span class="m">38/57 = 2/3</span>.` },
    { q: `In △<i>ABC</i>, <span class="m"><i>AB</i> = 10</span>, <span class="m"><i>AC</i> = 6</span> and <span class="m"><i>BC</i> = 12</span>. The bisector of ∠<i>A</i> meets <span class="m"><span class="ov"><i>BC</i></span></span> at <span class="m"><i>D</i></span>. Find <span class="m"><i>BD</i></span> and <span class="m"><i>DC</i></span>.`, a: `Triangle Angle-Bisector Theorem: <span class="m"><i>BD</i>/<i>DC</i> = <i>AB</i>/<i>AC</i> = 10/6 = 5/3</span>. So <span class="m"><i>BD</i> = 12 · 5/8 = 7.5</span> and <span class="m"><i>DC</i> = 12 · 3/8 = 4.5</span>.` },
    { q: `In △<i>ABC</i>, <span class="m"><i>D</i></span> is on <span class="m"><span class="ov"><i>AB</i></span></span> and <span class="m"><i>E</i></span> is on <span class="m"><span class="ov"><i>AC</i></span></span> with <span class="m"><i>AD</i> = 4</span>, <span class="m"><i>DB</i> = 6</span>, <span class="m"><i>AE</i> = 5</span> and <span class="m"><i>EC</i> = 8</span>. Is <span class="m"><span class="ov"><i>DE</i></span> ∥ <span class="ov"><i>BC</i></span></span>? What length of <span class="m"><span class="ov"><i>EC</i></span></span> would make it parallel?`, a: `<span class="m"><i>AD</i>/<i>DB</i> = 4/6 = 2/3</span> but <span class="m"><i>AE</i>/<i>EC</i> = 5/8</span>. The ratios differ, so <span class="m"><span class="ov"><i>DE</i></span></span> is not parallel to <span class="m"><span class="ov"><i>BC</i></span></span> (if it were, the theorem would force equal ratios). With <span class="m"><i>EC</i> = 7.5</span>, <span class="m">5/7.5 = 2/3</span>, and the converse proves <span class="m"><span class="ov"><i>DE</i></span> ∥ <span class="ov"><i>BC</i></span></span>.` }
  ],
  origin: `Euclid proves the Triangle Proportionality Theorem and its converse as Proposition VI.2 of the <i>Elements</i> (about 300 BCE), and the Angle-Bisector Theorem with its converse as VI.3. In France and some other countries the first result is taught as Thales' theorem, after a tradition crediting Thales of Miletus with measurements by similar triangles, though no proof of his survives.`
};
