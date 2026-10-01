window.ARITH = window.ARITH || {};

ARITH["g-isosceles"] = {
  title: "Isosceles & Equilateral Triangles",
  short: "Equal sides face equal angles",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · triangles",
  hero: `<span class="m"><span class="c2"><i>AB</i> = <i>AC</i></span> &nbsp;⟺&nbsp; <span class="c1">m∠<i>B</i> = m∠<i>C</i></span></span>`,
  lede: `In a triangle, two sides are equal exactly when the angles opposite them are equal. An isosceles triangle is symmetric about the bisector of its vertex angle, and an equilateral triangle has all three angles equal to 60°.`,
  plain: `<p>An <b>isosceles triangle</b> has two equal sides, called the <b>legs</b>. The third side is the <b>base</b>. The angle where the legs meet is the <b>vertex angle</b>, and the two angles at the ends of the base are the <b>base angles</b>.</p>
<p>Fold an isosceles triangle along the line that splits its vertex angle in half and the two halves match exactly: one leg lands on the other, and one base angle lands on the other. So the base angles are equal. The fold line also hits the base at its midpoint and at a right angle, so it is the perpendicular bisector of the base. It works backward too: if two angles of a triangle are equal, the sides opposite them are equal.</p>
<p>An <b>equilateral triangle</b> has all three sides equal. Any side can serve as the base, so all three angles are equal, and since they add to 180°, each is 60°.</p>`,
  formal: `<p><b>Isosceles Triangle Theorem</b> (Base Angles Theorem). If two sides of a triangle are congruent, then the angles opposite those sides are congruent. <b>Converse.</b> If two angles of a triangle are congruent, then the sides opposite those angles are congruent.</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td><span class="ov"><i>AB</i></span> ≅ <span class="ov"><i>AC</i></span></td><td>Given</td></tr><tr><td>Let ray <i>AD</i> bisect ∠<i>BAC</i>, with <i>D</i> on <span class="ov"><i>BC</i></span></td><td>Every angle has exactly one bisector</td></tr><tr><td>∠<i>BAD</i> ≅ ∠<i>CAD</i></td><td>Definition of angle bisector</td></tr><tr><td><span class="ov"><i>AD</i></span> ≅ <span class="ov"><i>AD</i></span></td><td>Reflexive Property</td></tr><tr><td>△<i>BAD</i> ≅ △<i>CAD</i></td><td>SAS</td></tr><tr><td>∠<i>B</i> ≅ ∠<i>C</i></td><td>CPCTC</td></tr></table>
<p><b>Corollaries.</b> The bisector of the vertex angle of an isosceles triangle is the perpendicular bisector of the base (the same congruence gives <span class="m"><i>BD</i> = <i>CD</i></span> and ∠<i>ADB</i> ≅ ∠<i>ADC</i>, and two congruent angles that form a linear pair are right angles). A triangle is equilateral if and only if it is equiangular, and each angle of an equilateral triangle measures 60°. In an isosceles triangle with vertex angle <span class="m"><i>v</i></span>, each base angle measures <span class="m">(180° − <i>v</i>)/2</span>, so base angles are always acute.</p>`,
  legend: [
    { c: "c2", sym: `<i>AB</i> = <i>AC</i>`, name: "Legs", desc: "The two congruent sides, meeting at the vertex angle ∠<i>A</i>." },
    { c: "c3", sym: `<span class="ov"><i>BC</i></span>`, name: "Base", desc: "The third side, opposite the vertex angle." },
    { c: "c1", sym: `∠<i>B</i>, ∠<i>C</i>`, name: "Base angles", desc: "The angles at the ends of the base, each opposite a leg. They are congruent exactly when the legs are." },
    { c: "c4", sym: `<span class="ov"><i>AD</i></span>`, name: "Axis of symmetry", desc: "The bisector of the vertex angle. In an isosceles triangle it is also the altitude, the median and the perpendicular bisector of the base." }
  ],
  steps: { title: "How to solve an isosceles triangle problem", items: [
    `Find the congruent sides (the legs). The base angles are the angles opposite them, at the two ends of the base.`,
    `Use the Base Angles Theorem to set the base angles equal, or its converse to set the sides opposite two equal angles equal.`,
    `Use the Triangle Angle-Sum Theorem: vertex angle + 2 × base angle = 180°.`,
    `For lengths, draw the axis from the vertex to the midpoint of the base. It splits the triangle into two congruent right triangles; use the Pythagorean Theorem on one of them.`,
    `Check that each base angle is less than 90° and that the angles add to 180°.`
  ] },
  example: {
    prompt: `An A-frame cabin's front wall is an isosceles triangle. The two rafters <span class="m"><i>AB</i></span> and <span class="m"><i>AC</i></span> are each 6.5 m long and the floor span <span class="m"><i>BC</i></span> is 5.0 m. The builder measures the angle between a rafter and the floor as 67.4°. Find the angle at the ridge, where to stand the ridge post, and how tall it is.`,
    lines: [
      { math: `<span class="m"><span class="c1">m∠<i>B</i> = m∠<i>C</i> = 67.4°</span></span>`, note: "Base Angles Theorem: the rafters are congruent, so the floor angles are equal." },
      { math: `<span class="m">m∠<i>A</i> = 180° − 2(67.4°) = 45.2°</span>`, note: "Triangle Angle-Sum Theorem." },
      { math: `<span class="m"><span class="c4"><i>BD</i> = <i>DC</i> = 2.5 m</span></span>`, note: "Corollary: the axis of an isosceles triangle is both the altitude from the vertex and the perpendicular bisector of the base, so the vertical post from the ridge meets the floor at its midpoint." },
      { math: `<span class="m"><i>AD</i> = √<span style="text-decoration:overline">6.5² − 2.5²</span> = √<span style="text-decoration:overline">42.25 − 6.25</span> = √36 = 6 m</span>`, note: "Pythagorean Theorem in right triangle ADB." },
      { math: `<span class="m">2.5 : 6 : 6.5 = 5 : 12 : 13</span>`, note: "Check: the half-triangle is a scaled 5-12-13 right triangle, and its 67.4° floor angle agrees with that shape." }
    ],
    answer: `The ridge angle is 45.2°. The ridge post stands at the midpoint of the floor, 2.5 m from each wall, and is 6 m tall.`
  },
  why: `<p>Symmetric triangles are everywhere in building and design: gable roofs, A-frames, bridge trusses, the two equal wires holding a picture. The Base Angles Theorem and its converse let you trade between equal lengths and equal angles, and the axis of symmetry turns an isosceles triangle into two right triangles you can solve.</p>
<p>The theorem is also a tool inside later proofs. Any two radii of a circle form an isosceles triangle with the chord between them, which is the key step in the Inscribed Angle Theorem, and the 45°-45°-90° and 30°-60°-90° triangles come straight from the isosceles right triangle and half of an equilateral triangle.</p>`,
  careers: [
    { role: "Carpenter", use: "Cuts both rafters of a gable roof to the same length so the pitch angles match and the ridge sits over the centre of the span." },
    { role: "Structural engineer", use: "Designs Warren trusses from repeated equilateral or isosceles triangles so loads split evenly between the diagonals." },
    { role: "Marine navigator", use: "Uses the doubling-the-angle-on-the-bow rule: when the bearing angle to a landmark doubles, the distance run equals the distance to the landmark, by the converse of the Base Angles Theorem." },
    { role: "Surveyor", use: "Lays out a perpendicular by swinging equal tape lengths from two points on a line and joining the apex to the midpoint." },
    { role: "Architect", use: "Designs symmetric gables and pediments whose apex sits on the axis of the facade." },
    { role: "Quilter", use: "Cuts equilateral and isosceles triangle patches with matching angles so they tile without gaps." }
  ],
  life: [
    "Hanging a picture on a wire so the hook sits centred under the nail",
    "Opening a stepladder with two equal legs",
    "Pitching an A-frame tent so the pole stands in the middle",
    "Folding a paper triangle in half to find the middle of its base",
    "Cutting a sandwich corner to corner and checking the halves match"
  ],
  fields: [
    { name: "Architecture", use: "Gables, pediments and A-frames are isosceles triangles with a vertical axis of symmetry." },
    { name: "Structural engineering", use: "Isosceles and equilateral triangles in trusses share loads symmetrically." },
    { name: "Navigation", use: "Bow-angle rules for finding the distance to a landmark rest on isosceles triangles." },
    { name: "Chemistry", use: "Bent molecules such as water have two equal bond lengths, an isosceles arrangement of atoms." }
  ],
  prereqWhy: {
    "g-congruence": "The Base Angles Theorem and its corollaries are proved by splitting the triangle into two congruent triangles with SAS, and the converse with AAS."
  },
  unlocksWhy: {
    "g-circles": "Two radii and a chord form an isosceles triangle, which links central angles, chords and arcs.",
    "g-inscribed": "The proof that an inscribed angle is half its intercepted arc uses the isosceles triangle formed by two radii and its equal base angles.",
    "g-special-right": "The 45°-45°-90° triangle is an isosceles right triangle, and the 30°-60°-90° triangle is half of an equilateral triangle."
  },
  beyond: [
    { field: "Trigonometry", why: "The exact values of sin 30°, cos 30° and tan 45° come from half an equilateral triangle and an isosceles right triangle." },
    { field: "Physics", why: "A load hung from the midpoint of a rope with equal halves gives equal tensions by symmetry, an isosceles force diagram." },
    { field: "Chemistry", why: "Molecular geometry describes bent and trigonal shapes with equal bonds and equal bond angles." }
  ],
  mistakes: [
    { wrong: `In △<i>ABC</i> with <span class="m"><i>AB</i> = <i>AC</i></span>, marking ∠<i>A</i> and ∠<i>B</i> as the congruent angles.`, fix: `The congruent angles are opposite the congruent sides: ∠<i>C</i> is opposite <span class="ov"><i>AB</i></span> and ∠<i>B</i> is opposite <span class="ov"><i>AC</i></span>. So ∠<i>B</i> ≅ ∠<i>C</i>, the angles at the ends of the base.` },
    { wrong: `"One angle of an isosceles triangle is 50°, so the others are 50° and 80°."`, fix: `The 50° angle could be the vertex angle instead, giving 65° and 65°. Both triangles are possible unless you know which angle it is.` },
    { wrong: `Taking any median of an isosceles triangle as its line of symmetry.`, fix: `Only the segment from the vertex angle to the base is the axis. The other medians are axes only when the triangle is equilateral.` },
    { wrong: `Using the converse to conclude that the sides <i>next to</i> two equal angles are equal.`, fix: `Equal angles force the sides <i>opposite</i> them to be equal. If ∠<i>B</i> ≅ ∠<i>C</i>, then <span class="m"><i>AC</i> = <i>AB</i></span>.` }
  ],
  practice: [
    { q: `One angle of an isosceles triangle measures 100°. Find the other two. Then answer the same question for an angle of 50°.`, a: `100° must be the vertex angle, because two base angles of 100° would already exceed 180°. The base angles are <span class="m">(180° − 100°)/2 = 40°</span> each. For 50° there are two answers: 50°, 50°, 80° (50° is a base angle) or 50°, 65°, 65° (50° is the vertex angle).` },
    { q: `In △<i>ABC</i>, <span class="m"><i>AB</i> = <i>AC</i></span>, <span class="m">m∠<i>B</i> = (3<i>x</i> + 12)°</span> and <span class="m">m∠<i>C</i> = (5<i>x</i> − 8)°</span>. Find <span class="m"><i>x</i></span> and all three angles.`, a: `Base Angles Theorem: <span class="m">3<i>x</i> + 12 = 5<i>x</i> − 8</span>, so <span class="m"><i>x</i> = 10</span>. Then <span class="m">m∠<i>B</i> = m∠<i>C</i> = 42°</span> and <span class="m">m∠<i>A</i> = 180° − 84° = 96°</span>.` },
    { q: `In △<i>PQR</i>, <span class="m">m∠<i>P</i> = 50°</span> and <span class="m">m∠<i>Q</i> = 80°</span>. Also <span class="m"><i>PQ</i> = 2<i>y</i> + 3</span> and <span class="m"><i>QR</i> = 5<i>y</i> − 9</span>. Find <span class="m"><i>y</i></span> and <span class="m"><i>PQ</i></span>.`, a: `<span class="m">m∠<i>R</i> = 180° − 50° − 80° = 50°</span>, so ∠<i>P</i> ≅ ∠<i>R</i>. By the converse, the sides opposite them are congruent: <span class="m"><i>QR</i> = <i>PQ</i></span>. <span class="m">5<i>y</i> − 9 = 2<i>y</i> + 3</span> gives <span class="m"><i>y</i> = 4</span>, so <span class="m"><i>PQ</i> = <i>QR</i> = 11</span>.` },
    { q: `Show that an isosceles triangle with one 60° angle is equilateral. Then find the height of an equilateral triangle with side 8.`, a: `If the 60° angle is the vertex angle, each base angle is <span class="m">(180° − 60°)/2 = 60°</span>; if it is a base angle, the other base angle is 60° and the vertex angle is <span class="m">180° − 120° = 60°</span>. Either way the triangle is equiangular, so it is equilateral. The axis meets the base at its midpoint, so the height is <span class="m">√<span style="text-decoration:overline">8² − 4²</span> = √48 = 4√3 ≈ 6.9</span>.` }
  ],
  origin: `The Base Angles Theorem is Proposition I.5 of Euclid's <i>Elements</i> (about 300 BCE), nicknamed the <i>pons asinorum</i>, "bridge of asses", and its converse is I.6. Proclus credits Thales of Miletus with discovering it, and reports a shorter proof by Pappus that compares △<i>ABC</i> with △<i>ACB</i>, the same triangle read in reverse order, by SAS.`
};
