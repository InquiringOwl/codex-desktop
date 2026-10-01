window.ARITH = window.ARITH || {};

ARITH["g-parallel"] = {
  title: "Parallel Lines & Transversals",
  short: "Corresponding, alternate and same-side angle pairs",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · parallel lines",
  hero: `<span class="m"><i>ℓ</i> ∥ <i>m</i> &nbsp;⟺&nbsp; <span class="c2">∠1</span> <span class="c1">≅</span> <span class="c3">∠5</span></span>`,
  lede: `When a <span class="c4">transversal</span> crosses two lines it makes eight angles. The lines are parallel exactly when a <span class="c2">corresponding pair</span> is <span class="c1">congruent</span>, and then every alternate pair is congruent and every same-side interior pair is supplementary.`,
  plain: `<p><b>Parallel lines</b> lie in the same plane and never meet. A line that crosses two other lines is a <b>transversal</b>. At each crossing it makes four angles, eight in all, and their positions have names. Angles in the same position at the two crossings (both upper-right, say) are <b>corresponding angles</b>. Angles between the two lines on opposite sides of the transversal are <b>alternate interior angles</b>; outside the two lines on opposite sides, <b>alternate exterior angles</b>. Angles between the lines on the same side are <b>same-side interior angles</b>.</p>
<p>If the two lines are parallel, the transversal crosses them at the same tilt, so the picture at one crossing is a copy of the picture at the other. Corresponding angles match, alternate angles match, and same-side interior angles add to 180°. With only one measured angle you can fill in all eight.</p>
<p>The reverse is just as useful. If a corresponding pair or an alternate pair is equal, the lines are parallel. If you tilt one line even slightly, the pairs stop matching and the two lines meet somewhere, on the side where the same-side interior angles add to less than 180°. That is how surveyors and builders check that rails, walls and road edges really are parallel.</p>`,
  formal: `<p>Coplanar lines that do not intersect are <b>parallel</b> (<span class="m"><i>ℓ</i> ∥ <i>m</i></span>); non-coplanar lines that do not intersect are <b>skew</b>. A <b>transversal</b> is a line that intersects two or more coplanar lines at different points. Number the angles 1 to 4 at the intersection with <span class="m"><i>ℓ</i></span> and 5 to 8 at <span class="m"><i>m</i></span>, each in the order upper-left, upper-right, lower-left, lower-right. Corresponding: 1 and 5, 2 and 6, 3 and 7, 4 and 8. Alternate interior: 3 and 6, 4 and 5. Alternate exterior: 1 and 8, 2 and 7. Same-side interior: 3 and 5, 4 and 6.</p>
<div class="display"><b>Corresponding Angles Postulate</b> &nbsp;<i>ℓ</i> ∥ <i>m</i> ⇒ corresponding angles are congruent<br><b>Alternate Interior / Alternate Exterior Angles Theorems</b> &nbsp;<i>ℓ</i> ∥ <i>m</i> ⇒ alternate pairs are congruent<br><b>Same-Side Interior Angles Theorem</b> &nbsp;<i>ℓ</i> ∥ <i>m</i> ⇒ same-side interior angles are supplementary<br><span class="dim">Each converse also holds, so any one of these angle facts proves</span> <i>ℓ</i> ∥ <i>m</i>.<br><b>Parallel Postulate</b> &nbsp;through a point not on a line there is exactly one line parallel to it</div>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr>
<tr><td><span class="m"><i>ℓ</i> ∥ <i>m</i></span>, cut by transversal <span class="m"><i>t</i></span></td><td>Given</td></tr>
<tr><td><span class="m">∠3 ≅ ∠2</span></td><td>Vertical Angles Theorem</td></tr>
<tr><td><span class="m">∠2 ≅ ∠6</span></td><td>Corresponding Angles Postulate</td></tr>
<tr><td><span class="m">∠3 ≅ ∠6</span></td><td>Transitive Property of Congruence</td></tr></table>
<p>This proves the Alternate Interior Angles Theorem. Also, in a plane: a line perpendicular to one of two parallel lines is perpendicular to the other (Perpendicular Transversal Theorem), two lines perpendicular to the same line are parallel, and two lines parallel to a third line are parallel to each other.</p>`,
  legend: [
    { c: "c4", sym: `<i>t</i>`, name: "Transversal", desc: "The line that crosses both lines and creates the eight angles." },
    { c: "c2", sym: `∠1`, name: "First angle", desc: "The chosen angle of a pair, at one intersection." },
    { c: "c3", sym: `∠5`, name: "Partner angle", desc: "The other angle of the pair, at the other intersection." },
    { c: "c1", sym: `≅ or 180°`, name: "Relationship", desc: "For parallel lines the pair is congruent (corresponding, alternate) or supplementary (same-side interior)." }
  ],
  steps: { title: "How to work with parallel lines and a transversal", items: [
    `Identify the two lines and the <span class="c4">transversal</span>. Mark which angles lie between the lines (interior) and which lie outside (exterior).`,
    `Name the pair: same position at both crossings is corresponding; interior on opposite sides is alternate interior; exterior on opposite sides is alternate exterior; interior on the same side is same-side interior.`,
    `If the lines are known to be parallel, use the matching theorem: congruent for corresponding and alternate pairs, supplementary for same-side interior.`,
    `If you need to prove the lines are parallel, show one pair satisfies the relationship and cite the converse.`,
    `For expressions such as <span class="m">(3<i>x</i> + 10)°</span>, set up the equation from the relationship, solve, and substitute back to get the angle measures.`,
    `Use vertical angles and linear pairs to fill in the rest, and check that each crossing's four angles total 360°.`
  ] },
  example: {
    prompt: `Elm Street and Oak Street are parallel, and Diagonal Avenue crosses both. At Elm Street a surveyor measures the angle between the avenue and Elm Street on the north-east corner (position 2) as <span class="m">58°</span>. Find all eight angles. A third street, Pine Street, crosses the avenue so that the angle in the position corresponding to ∠2 measures <span class="m">57°</span>. Is Pine Street parallel to Elm Street?`,
    lines: [
      { math: `<span class="m c2">m∠2 = 58°</span>`, note: "Given: upper-right angle at Elm Street." },
      { math: `<span class="m">m∠1 = 122°</span>`, note: "Linear Pair Postulate: ∠1 and ∠2 are supplementary, 180° − 58° = 122°." },
      { math: `<span class="m">m∠3 = 58°, &nbsp;m∠4 = 122°</span>`, note: "Vertical Angles Theorem: ∠3 is vertical to ∠2 and ∠4 is vertical to ∠1." },
      { math: `<span class="m"><span class="c3">m∠6 = 58°</span>, &nbsp;m∠5 = 122°</span>`, note: "Corresponding Angles Postulate: ∠6 corresponds to ∠2 and ∠5 to ∠1." },
      { math: `<span class="m">m∠7 = 58°, &nbsp;m∠8 = 122°</span>`, note: "Vertical Angles Theorem at Oak Street." },
      { math: `<span class="m">m∠4 + m∠6 = <span class="c1">180°</span> ✓</span>`, note: "Check with the Same-Side Interior Angles Theorem: 122° + 58° = 180°." },
      { math: `<span class="m">57° ≠ 58° &nbsp;⇒&nbsp; Pine ∦ Elm</span>`, note: "Contrapositive of the Corresponding Angles Postulate: if Pine were parallel to Elm, the corresponding angle would be 58°." }
    ],
    answer: `Angles 2, 3, 6 and 7 measure <span class="m">58°</span>; angles 1, 4, 5 and 8 measure <span class="m">122°</span>. Pine Street is <b>not</b> parallel to Elm Street, because its corresponding angle is 57°, not 58°.`
  },
  why: `<p>Parallel lines are everywhere in construction and design: rails, lane markings, floor joists, shelves, the edges of a sheet of steel. Checking the angle a crossing member makes with each of them is the practical test that they really are parallel, and the theorems let you compute every other angle from one measurement.</p>
<p>In the course itself, these theorems power almost everything that follows. The Triangle Angle Sum Theorem is proved with a parallel line and alternate interior angles; parallelograms, similar triangles and the Side-Splitter Theorem all rely on them. The Parallel Postulate is also where Euclidean geometry differs from the spherical and hyperbolic geometries used for navigation and in relativity.</p>`,
  careers: [
    { role: "Carpenter", use: "Cuts the treads and stringer of a staircase so the treads are parallel, using equal corresponding angles where they meet the stringer." },
    { role: "Civil engineer", use: "Lays out parallel lanes and a skewed crossing road, computing the angles where the crossing meets each lane edge." },
    { role: "Surveyor", use: "Checks that two property lines are parallel by measuring the angles a traverse line makes with each." },
    { role: "Railway track engineer", use: "Keeps rails parallel at a fixed gauge and sets the angles of crossings and switches." },
    { role: "Machinist", use: "Mills parallel faces and angled cuts, checking angles relative to a reference edge." },
    { role: "Graphic designer", use: "Aligns parallel guides and diagonal elements so their angles repeat consistently across a layout." }
  ],
  life: [
    "Hanging a row of picture frames so the edges stay parallel",
    "Painting parking-lot stall lines that all make the same angle with the aisle",
    "Building a fence on a slope with parallel rails and evenly angled posts",
    "Cutting a board at an angle that matches another cut so the pieces line up",
    "Reading a map where a diagonal road crosses a grid of parallel streets"
  ],
  fields: [
    { name: "Architecture", use: "Floor plans and elevations use parallel walls, beams and diagonal members whose angles follow these theorems." },
    { name: "Physics", use: "Parallel light rays meeting a surface and the angles of reflection and refraction are analysed with transversal angle pairs." },
    { name: "Surveying", use: "Traverses and bearings use alternate and corresponding angles to carry directions from one line to another." },
    { name: "Computer graphics", use: "Parallel projection and line-clipping algorithms rely on angle relationships between parallel lines and crossing edges." }
  ],
  prereqWhy: {
    "g-angle-pairs": "Vertical angles and linear pairs fill in the four angles at each crossing, and the algebra of angle expressions solves for unknowns.",
    "g-proofs": "The alternate and same-side angle theorems and their converses are proved in two-column form from the Corresponding Angles Postulate."
  },
  unlocksWhy: {
    "g-triangle-angles": "The proof that a triangle's angles sum to 180° draws the line through one vertex parallel to the opposite side and uses alternate interior angles.",
    "g-quadrilaterals": "A parallelogram has two pairs of parallel sides, so its consecutive angles are same-side interior angles and are supplementary."
  },
  beyond: [
    { field: "Trigonometry", why: "Angles of elevation and depression are congruent as alternate interior angles of a horizontal line and the line of sight." },
    { field: "Linear Algebra", why: "Parallel lines have proportional direction vectors, and the angle between lines is computed from a dot product." },
    { field: "Non-Euclidean Geometry", why: "Replacing the Parallel Postulate gives spherical and hyperbolic geometry, where these angle theorems change." },
    { field: "Physics", why: "Resolving forces on an incline uses alternate interior angles to show the incline angle reappears between the weight and the normal direction." }
  ],
  mistakes: [
    { wrong: `Using "alternate interior angles are congruent" when the lines are not known to be parallel.`, fix: `The angle theorems need the hypothesis <span class="m"><i>ℓ</i> ∥ <i>m</i></span>. For non-parallel lines the pairs are unequal. To prove lines parallel, use a converse instead.` },
    { wrong: `Setting same-side interior angles equal: <span class="m">3<i>x</i> + 10 = 5<i>x</i> − 30</span>.`, fix: `Same-side interior angles are supplementary: <span class="m">(3<i>x</i> + 10) + (5<i>x</i> − 30) = 180</span>, so <span class="m"><i>x</i> = 25</span>.` },
    { wrong: `Calling two angles "corresponding" when they are on opposite sides of the transversal.`, fix: `Corresponding angles are in the same position at each crossing: same side of the transversal and same side of their line.` }
  ],
  practice: [
    { q: `<span class="m"><i>ℓ</i> ∥ <i>m</i></span> and <span class="m">m∠1 = 72°</span> (upper-left at <span class="m"><i>ℓ</i></span>). Find <span class="m">m∠5</span>, <span class="m">m∠8</span> and <span class="m">m∠6</span>.`, a: `<span class="m">m∠5 = 72°</span> (Corresponding Angles Postulate). <span class="m">m∠8 = 72°</span> (Alternate Exterior Angles Theorem). <span class="m">m∠6 = 180° − 72° = 108°</span> (Linear Pair Postulate with ∠5).` },
    { q: `Two parallel lines are cut by a transversal. A pair of alternate interior angles measure <span class="m">(4<i>x</i> − 8)°</span> and <span class="m">(3<i>x</i> + 17)°</span>. Find <span class="m"><i>x</i></span> and the angle measure.`, a: `Alternate Interior Angles Theorem: <span class="m">4<i>x</i> − 8 = 3<i>x</i> + 17</span>, so <span class="m"><i>x</i> = 25</span>. Each angle is <span class="m">4(25) − 8 = 92°</span>; check <span class="m">3(25) + 17 = 92</span>.` },
    { q: `A transversal makes same-side interior angles of <span class="m">112°</span> and <span class="m">68°</span> with two lines. Are the lines parallel? What if the angles are <span class="m">112°</span> and <span class="m">70°</span>?`, a: `<span class="m">112° + 68° = 180°</span>, so the lines are parallel (Same-Side Interior Angles Converse). <span class="m">112° + 70° = 182° ≠ 180°</span>, so those lines are not parallel. They meet on the other side of the transversal, where the interior angles are <span class="m">68°</span> and <span class="m">110°</span>, totalling <span class="m">178° &lt; 180°</span>.` },
    { q: `<span class="m"><i>ℓ</i> ∥ <i>m</i></span>. Point <span class="m"><i>P</i></span> lies between them, to the right of <span class="m"><i>A</i></span> on <span class="m"><i>ℓ</i></span> and <span class="m"><i>B</i></span> on <span class="m"><i>m</i></span>. The angle from <span class="m"><i>ℓ</i></span> (pointing right) to <span class="m"><span class="ov"><i>AP</i></span></span> is <span class="m">40°</span>, and the angle from <span class="m"><i>m</i></span> (pointing right) to <span class="m"><span class="ov"><i>BP</i></span></span> is <span class="m">35°</span>. Find <span class="m">m∠<i>APB</i></span>.`, a: `Draw the line through <span class="m"><i>P</i></span> parallel to <span class="m"><i>ℓ</i></span> (Parallel Postulate); it is also parallel to <span class="m"><i>m</i></span>. It splits <span class="m">∠<i>APB</i></span> into two angles that are alternate interior angles with the <span class="m">40°</span> and <span class="m">35°</span> angles. So <span class="m">m∠<i>APB</i> = 40° + 35° = 75°</span>.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) proves in Book I that equal alternate angles make lines parallel (Proposition 27) and, using his fifth postulate, that parallel lines make equal alternate angles (Proposition 29). John Playfair's 1795 textbook popularised the equivalent form "exactly one parallel through a point." Around 1830 Nikolai Lobachevsky and János Bolyai published geometries in which the parallel postulate fails.`
};
