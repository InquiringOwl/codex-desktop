window.ARITH = window.ARITH || {};

ARITH["g-triangle-angles"] = {
  title: "Triangle Angle Sum & Exterior Angles",
  short: "The angles of a triangle add to 180°",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · triangles",
  hero: `<span class="m"><span class="c2">m∠<i>A</i></span> + <span class="c3">m∠<i>B</i></span> + <span class="c4">m∠<i>C</i></span> = 180°</span>`,
  lede: `Draw the line through one vertex parallel to the opposite side and the three angles line up into a straight angle. An <span class="c1">exterior angle</span> equals the sum of the two remote interior angles.`,
  plain: `<p>Tear the three corners off a paper triangle and put their points together. They always fit side by side along a straight edge. The three angles of any triangle add up to 180°, whatever its shape or size.</p>
<p>The proof uses parallel lines. Draw the line through the top vertex <span class="m"><i>C</i></span> that is parallel to the bottom side <span class="m"><span class="ov"><i>AB</i></span></span>. At <span class="m"><i>C</i></span> the parallel line makes two new angles beside <span class="m c4">∠<i>C</i></span>. Each one is an alternate interior angle with a base angle, so one copies <span class="m c2">∠<i>A</i></span> and the other copies <span class="m c3">∠<i>B</i></span>. Together the three angles at <span class="m"><i>C</i></span> form a straight angle: 180°.</p>
<p>Extend one side past a vertex and you get an <b>exterior angle</b>. It forms a straight line with the interior angle beside it, and the other two angles (the <b>remote interior angles</b>) also make up what that interior angle is missing from 180°. So the exterior angle equals the sum of the two remote interior angles. As a result, a triangle can have at most one right or obtuse angle, and the two acute angles of a right triangle add to 90°.</p>`,
  formal: `<p><b>Triangle Angle Sum Theorem.</b> In the Euclidean plane, the measures of the angles of a triangle sum to 180°. <i>Given:</i> <span class="m">△<i>ABC</i></span>. <i>Prove:</i> <span class="m">m∠<i>A</i> + m∠<i>B</i> + m∠<i>ACB</i> = 180°</span>.</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr>
<tr><td><span class="m">△<i>ABC</i></span></td><td>Given</td></tr>
<tr><td>Through <span class="m"><i>C</i></span> there is exactly one line <span class="m"><i>DE</i> ∥ <span class="ov"><i>AB</i></span></span>, with <span class="m"><i>D</i></span> on the side of <span class="m"><i>A</i></span></td><td>Parallel Postulate</td></tr>
<tr><td><span class="m">m∠<i>DCA</i> + m∠<i>ACB</i> + m∠<i>BCE</i> = 180°</span></td><td>Angle Addition Postulate; ∠<i>DCE</i> is a straight angle</td></tr>
<tr><td><span class="m">∠<i>DCA</i> ≅ ∠<i>A</i></span>, <span class="m">∠<i>BCE</i> ≅ ∠<i>B</i></span></td><td>Alternate Interior Angles Theorem</td></tr>
<tr><td><span class="m">m∠<i>DCA</i> = m∠<i>A</i></span>, <span class="m">m∠<i>BCE</i> = m∠<i>B</i></span></td><td>Definition of congruent angles</td></tr>
<tr><td><span class="m">m∠<i>A</i> + m∠<i>ACB</i> + m∠<i>B</i> = 180°</span></td><td>Substitution Property of Equality</td></tr></table>
<div class="display"><b>Exterior Angle Theorem</b> &nbsp;<span class="c1">m∠<i>BCX</i></span> = <span class="c2">m∠<i>A</i></span> + <span class="c3">m∠<i>B</i></span> &nbsp;<span class="dim">(<i>X</i> on ray <i>AC</i> beyond <i>C</i>)</span><br><b>Corollaries</b> &nbsp;the acute angles of a right triangle are complementary; each angle of an equiangular triangle measures 60°; a triangle has at most one right or obtuse angle<br><b>Third Angles Theorem</b> &nbsp;if two angles of one triangle are congruent to two angles of another, the third angles are congruent</div>
<p>The <b>Exterior Angle Inequality</b> follows: an exterior angle is greater than either remote interior angle. Taking one exterior angle at each vertex, the three exterior angles of a triangle sum to 360°.</p>`,
  legend: [
    { c: "c2", sym: `∠<i>A</i>`, name: "Angle at A", desc: "A base angle. The parallel line through C makes an alternate interior angle congruent to it." },
    { c: "c3", sym: `∠<i>B</i>`, name: "Angle at B", desc: "The other base angle, copied at C on the other side." },
    { c: "c4", sym: `∠<i>C</i>`, name: "Angle at C", desc: "The angle at the vertex the parallel line passes through. With the two copies it fills a straight angle." },
    { c: "c1", sym: `∠<i>BCX</i>`, name: "Exterior angle", desc: "Formed by one side and the extension of the adjacent side. It equals the sum of the two remote interior angles." }
  ],
  steps: { title: "How to find unknown angles in a triangle", items: [
    `Mark every known angle, and look for right-angle marks, equal-angle marks and straight lines.`,
    `Use the Triangle Angle Sum Theorem: <span class="m">m∠<i>A</i> + m∠<i>B</i> + m∠<i>C</i> = 180°</span>. Subtract the two known angles to get the third.`,
    `For an exterior angle, use the Exterior Angle Theorem: it equals the sum of the two remote interior angles, not the adjacent one.`,
    `With expressions such as <span class="m">(2<i>x</i> + 10)°</span>, write the equation from the theorem, solve for <span class="m"><i>x</i></span>, then substitute to get each angle.`,
    `Check: each angle is positive, the three add to 180°, and the exterior angle and its adjacent interior angle add to 180°.`
  ] },
  example: {
    prompt: `A surveyor lays out a triangular plot <span class="m">△<i>ABC</i></span>. A pond blocks the view at corner <span class="m"><i>C</i></span>, so she measures only <span class="m">m∠<i>A</i> = 47.5°</span> and <span class="m">m∠<i>B</i> = 68.2°</span>. Find <span class="m">m∠<i>C</i></span> and the exterior angle at <span class="m"><i>C</i></span> between side <span class="m"><span class="ov"><i>CB</i></span></span> and a fence that continues side <span class="m"><span class="ov"><i>AC</i></span></span> past <span class="m"><i>C</i></span>, and classify the triangle by its angles.`,
    lines: [
      { math: `<span class="m"><span class="c2">m∠<i>A</i></span> + <span class="c3">m∠<i>B</i></span> + <span class="c4">m∠<i>C</i></span> = 180°</span>`, note: "Triangle Angle Sum Theorem." },
      { math: `<span class="m c4">m∠<i>C</i> = 180° − 115.7° = 64.3°</span>`, note: "Subtract the two measured angles, 47.5° + 68.2° = 115.7°." },
      { math: `<span class="m c1">m∠<i>BCX</i> = 115.7°</span>`, note: "Linear Pair Postulate: the exterior angle and ∠C are supplementary, 180° − 64.3° = 115.7°." },
      { math: `<span class="m"><span class="c2">47.5°</span> + <span class="c3">68.2°</span> = <span class="c1">115.7°</span> ✓</span>`, note: "Exterior Angle Theorem gives the same value from the two remote interior angles." },
      { math: `<span class="m">47.5°, 68.2°, 64.3° &lt; 90°</span>`, note: "All three angles are acute, so the triangle is acute." },
      { math: `<span class="m">sum = 180.0° ✓</span>`, note: "Check the sum: 47.5° + 68.2° + 64.3° = 180.0°." }
    ],
    answer: `<span class="m c4">m∠<i>C</i> = 64.3°</span>, the exterior angle at <span class="m"><i>C</i></span> is <span class="m c1">115.7°</span>, and the plot is an acute triangle.`
  },
  why: `<p>The 180° rule is the most used fact about triangles. It lets surveyors find an angle they cannot measure directly and check the ones they can, because the measured angles of a closed triangle must total 180°. Roof framers, navigators and engineers use it whenever two angles of a triangular shape are known and the third is needed.</p>
<p>It is also the doorway to the rest of the course. Polygon angle sums come from cutting a polygon into triangles; the AAS congruence criterion and the AA similarity criterion rely on the Third Angles Theorem; and the fact that the sum depends on the Parallel Postulate is where spherical geometry, used for long-distance navigation, parts ways with flat geometry.</p>`,
  careers: [
    { role: "Surveyor", use: "Checks a triangle of measured angles by confirming they total 180°, and computes an angle that cannot be measured directly." },
    { role: "Roof framer", use: "Finds the angle at the ridge of a gable from the roof pitch angle at each eave, since the three angles of the rafter triangle sum to 180°." },
    { role: "Structural engineer", use: "Computes the angles between members of a triangular truss when analysing the forces at each joint." },
    { role: "Navigator", use: "Uses running fixes and bearings that form triangles, where the third angle follows from the other two." },
    { role: "Woodworker", use: "Cuts the corners of triangular frames and brackets so the three miter angles fit together." },
    { role: "Robotics engineer", use: "Solves the triangle formed by two arm links and the line to the target for the joint angles." }
  ],
  life: [
    "Working out the third angle when cutting a triangular shelf or brace",
    "Checking a homemade triangle template by adding its angles",
    "Understanding why a ladder against a wall makes complementary angles with the wall and the ground",
    "Folding paper into triangles for crafts or origami",
    "Estimating the angle of a roof peak from the slope at the eaves"
  ],
  fields: [
    { name: "Surveying", use: "Triangulation networks use the angle sum as a check on measurement error in every triangle." },
    { name: "Architecture", use: "Trusses, gables and triangular bracing are designed from their angle relationships." },
    { name: "Optics", use: "The deviation of a light ray through a prism, δ = i₁ + i₂ − A, is derived from triangle angle sums in the ray diagram." },
    { name: "Engineering mechanics", use: "Free-body diagrams of trusses use triangle angles to resolve member forces." }
  ],
  prereqWhy: {
    "g-parallel": "The proof draws the line through one vertex parallel to the opposite side and uses the Alternate Interior Angles Theorem."
  },
  unlocksWhy: {
    "g-polygons": "Diagonals from one vertex split a convex n-gon into n − 2 triangles, each contributing 180°, so the angles sum to (n − 2)·180°.",
    "g-congruence": "The Third Angles Theorem turns ASA into AAS: if two pairs of angles match, the third pair matches too."
  },
  beyond: [
    { field: "Trigonometry", why: "Solving triangles with the Law of Sines and Law of Cosines starts from finding the third angle as 180° minus the other two." },
    { field: "Non-Euclidean Geometry", why: "On a sphere a triangle's angles sum to more than 180°, and the excess is proportional to its area; in hyperbolic geometry they sum to less." },
    { field: "Physics", why: "Ray diagrams in optics and force triangles in statics rely on the angle sum to find unknown directions." }
  ],
  mistakes: [
    { wrong: `Setting the exterior angle equal to the sum of all three interior angles, or to the adjacent interior angle.`, fix: `The exterior angle equals the sum of the two <b>remote</b> interior angles only. It is supplementary to the adjacent one.` },
    { wrong: `Accepting angles of <span class="m">95°</span> and <span class="m">88°</span> in one triangle.`, fix: `They already total <span class="m">183° &gt; 180°</span>, so no triangle has both. A triangle has at most one right or obtuse angle.` },
    { wrong: `Solving <span class="m"><i>x</i> + (2<i>x</i> + 10) + (3<i>x</i> − 22) = 180</span> and reporting <span class="m"><i>x</i> = 32</span> as the angles.`, fix: `<span class="m"><i>x</i></span> is not an angle. Substitute back: the angles are <span class="m">32°</span>, <span class="m">74°</span> and <span class="m">74°</span>.` }
  ],
  practice: [
    { q: `Two angles of a triangle measure <span class="m">38°</span> and <span class="m">71°</span>. Find the third angle and classify the triangle by its angles.`, a: `<span class="m">180° − 38° − 71° = 71°</span>. All three angles are less than 90°, so the triangle is acute.` },
    { q: `The angles of a triangle measure <span class="m"><i>x</i>°</span>, <span class="m">(2<i>x</i> + 10)°</span> and <span class="m">(3<i>x</i> − 22)°</span>. Find each angle.`, a: `Triangle Angle Sum Theorem: <span class="m">6<i>x</i> − 12 = 180</span>, so <span class="m"><i>x</i> = 32</span>. The angles are <span class="m">32°</span>, <span class="m">74°</span> and <span class="m">74°</span>; check <span class="m">32 + 74 + 74 = 180</span>.` },
    { q: `An exterior angle of a triangle measures <span class="m">(5<i>x</i> − 10)°</span>, and its remote interior angles measure <span class="m">(2<i>x</i> + 15)°</span> and <span class="m">(<i>x</i> + 25)°</span>. Find <span class="m"><i>x</i></span>, all three interior angles and the exterior angle.`, a: `Exterior Angle Theorem: <span class="m">5<i>x</i> − 10 = 3<i>x</i> + 40</span>, so <span class="m"><i>x</i> = 25</span>. The exterior angle is <span class="m">115°</span>; the remote interior angles are <span class="m">65°</span> and <span class="m">50°</span>; the adjacent interior angle is <span class="m">180° − 115° = 65°</span>. Check: <span class="m">65 + 50 + 65 = 180</span>.` },
    { q: `(a) Can a triangle have angles of <span class="m">95°</span> and <span class="m">88°</span>? (b) In a right triangle one acute angle is 3 times the other. Find both acute angles.`, a: `(a) No: <span class="m">95° + 88° = 183°</span>, which would leave <span class="m">−3°</span> for the third angle. (b) The acute angles are complementary: <span class="m"><i>x</i> + 3<i>x</i> = 90</span>, so <span class="m"><i>x</i> = 22.5</span>. The angles are <span class="m">22.5°</span> and <span class="m">67.5°</span>.` }
  ],
  origin: `Eudemus, as reported by Proclus, attributed to the Pythagoreans the discovery that the angles of a triangle equal two right angles. Euclid proves it, together with the Exterior Angle Theorem, as Proposition 32 of Book I of the <i>Elements</i> (about 300 BCE), and the weaker Exterior Angle Inequality earlier, as Proposition 16, without using the parallel postulate.`
};
