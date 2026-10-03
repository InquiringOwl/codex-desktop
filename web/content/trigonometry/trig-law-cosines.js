window.ARITH = window.ARITH || {};
ARITH["trig-law-cosines"] = {
  title: "The Law of Cosines",
  short: "c² = a² + b² − 2ab cos C: solving SAS and SSS triangles",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Trigonometry · oblique triangles",
  hero: `<span class="m"><span class="c5"><i>c</i></span><sup>2</sup> = <span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> <span class="c4">− 2<i>ab</i> cos <span class="c1"><i>C</i></span></span></span>`,
  lede: `The law of cosines is the Pythagorean Theorem with a correction term for angles that are not 90°. It solves the two cases the law of sines cannot start: two sides and the included angle (<b>SAS</b>) and three sides (<b>SSS</b>).`,
  plain: `<p>In a right triangle the square of the hypotenuse is the sum of the squares of the legs. Open the right angle wider and the third side gets longer than the Pythagorean Theorem predicts; close it and the third side gets shorter. The law of cosines measures that difference exactly.</p>
<p>The correction is <span class="m">−2<i>ab</i> cos <i>C</i></span>. At 90° the cosine is 0, so the correction vanishes and you are back to <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>. For an acute angle the cosine is positive and the correction subtracts. For an obtuse angle the cosine is negative and the correction adds.</p>
<p>Read forwards, the law turns two sides and the angle between them into the third side. Read backwards, it turns three sides into an angle: solve for <span class="m">cos <i>C</i></span> and take the inverse cosine. Because <span class="m">cos⁻¹</span> returns angles from 0° to 180°, it reports an obtuse angle correctly, which the inverse sine cannot do.</p>`,
  formal: `<p><b>Law of Cosines.</b> In any triangle <span class="m"><i>ABC</i></span> with sides <span class="m"><span class="c2"><i>a</i></span>, <span class="c3"><i>b</i></span>, <span class="c5"><i>c</i></span></span> opposite <span class="m"><i>A</i>, <i>B</i>, <span class="c1"><i>C</i></span></span>,</p>
<div class="display"><span class="c5"><i>c</i></span><sup>2</sup> = <span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> <span class="c4">− 2<i>ab</i> cos <span class="c1"><i>C</i></span></span><br><i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i> &nbsp; &nbsp; <i>b</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>ac</i> cos <i>B</i><br>cos <span class="c1"><i>C</i></span> = <span class="fr"><span><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup></span><span>2<i>ab</i></span></span></div>
<p><b>Proof (coordinates).</b> Place <span class="m"><span class="c1"><i>C</i></span></span> at the origin and <span class="m"><i>B</i></span> on the positive <span class="m"><i>x</i></span>-axis, so <span class="m"><i>B</i> = (<span class="c2"><i>a</i></span>, 0)</span>. Side <span class="m c3"><i>b</i></span> makes angle <span class="m c1"><i>C</i></span> with the axis, so by the definition of sine and cosine for any angle, <span class="m"><i>A</i> = (<span class="c3"><i>b</i></span> cos <span class="c1"><i>C</i></span>, <span class="c3"><i>b</i></span> sin <span class="c1"><i>C</i></span>)</span>, whether <span class="m c1"><i>C</i></span> is acute, right or obtuse. By the distance formula,</p>
<div class="display"><span class="c5"><i>c</i></span><sup>2</sup> = (<i>b</i> cos <i>C</i> − <i>a</i>)<sup>2</sup> + (<i>b</i> sin <i>C</i>)<sup>2</sup> = <i>b</i><sup>2</sup>(cos<sup>2</sup> <i>C</i> + sin<sup>2</sup> <i>C</i>) − 2<i>ab</i> cos <i>C</i> + <i>a</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> <span class="c4">− 2<i>ab</i> cos <i>C</i></span></div>
<p>The other two forms follow by relabelling. When <span class="m"><span class="c1"><i>C</i></span> = 90°</span>, <span class="m">cos <i>C</i> = 0</span> and the law is the Pythagorean Theorem. Since <span class="m">cos <i>C</i></span> is positive, zero or negative as <span class="m"><i>C</i></span> is acute, right or obtuse, <span class="m"><i>c</i><sup>2</sup></span> is less than, equal to or greater than <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>.</p>
<p><b>Solving.</b> <b>SAS</b>: find the third side from the law of cosines, then the angle opposite the shorter given side (it must be acute) with the law of sines, then the last angle from the 180° sum. <b>SSS</b>: first find the <b>largest angle</b>, opposite the longest side, with the law of cosines. Only that angle can be obtuse, and <span class="m">cos⁻¹</span> gives it correctly; the other two are then acute, so the law of sines is safe for the next one. <b>Which law:</b> AAS and ASA use the law of sines; SSA uses the law of sines with a check for 0, 1 or 2 triangles; SAS and SSS start with the law of cosines; AAA fixes only the shape. Sides are rounded to the nearest tenth and angles to the nearest tenth of a degree, at the end only.</p>`,
  legend: [
    { c: "c1", sym: "<i>C</i>", name: "Angle C", desc: "The angle between sides a and b, opposite the side c being found." },
    { c: "c2", sym: "<i>a</i>", name: "Side a", desc: "One side next to angle C (from C to B)." },
    { c: "c3", sym: "<i>b</i>", name: "Side b", desc: "The other side next to angle C (from C to A)." },
    { c: "c5", sym: "<i>c</i>", name: "Side c", desc: "The side opposite C, the result of the law." },
    { c: "c4", sym: "−2<i>ab</i> cos <i>C</i>", name: "Correction term", desc: "What the Pythagorean Theorem is missing: negative for an acute C, zero at 90°, positive for an obtuse C." }
  ],
  steps: {
    title: "How to solve SAS and SSS triangles",
    items: [
      "Name the case. Two sides with the angle between them is SAS; three sides is SSS. (Check SSS with the triangle inequality: each side shorter than the sum of the other two.)",
      "SAS: substitute into <span class=\"m\"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i></span>, using the given angle, and take the square root.",
      "SSS: find the angle opposite the longest side first, from <span class=\"m\">cos <i>C</i> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>)/(2<i>ab</i>)</span> and <span class=\"m\">cos⁻¹</span>.",
      "Find one more angle: the law of sines is safe for an angle that cannot be obtuse (opposite a shorter side); the law of cosines works for any angle.",
      "Get the last angle from <span class=\"m\"><i>A</i> + <i>B</i> + <i>C</i> = 180°</span>, then round and check that the largest angle is across from the longest side."
    ]
  },
  example: {
    prompt: `Two ships leave port at the same time. One sails at 15 knots on bearing 050°, the other at 20 knots on bearing 160° (bearings measured clockwise from north). After 2 hours, how far apart are they, and what are the angles of the triangle at the two ships? Round the distance to the nearest tenth of a nautical mile and angles to the nearest tenth of a degree.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i></span> = 15 · 2 = 30, &nbsp; <span class="c3"><i>b</i></span> = 20 · 2 = 40, &nbsp; <span class="c1"><i>C</i></span> = 160° − 50° = 110°</span>`, note: "A knot is one nautical mile per hour. Call the port C, the 15-knot ship B and the 20-knot ship A. The angle at the port is the difference of the two bearings. This is SAS." },
      { math: `<span class="m"><span class="c5"><i>c</i></span><sup>2</sup> = 30<sup>2</sup> + 40<sup>2</sup> <span class="c4">− 2(30)(40) cos 110°</span></span>`, note: "The law of cosines with the included angle C at the port." },
      { math: `<span class="m"><span class="c5"><i>c</i></span><sup>2</sup> = 2500 <span class="c4">− 2400 cos 110°</span> ≈ 2500 + 820.85 = 3320.85</span>`, note: "cos 110° is negative, so the correction adds: the ships are farther apart than a right angle would give." },
      { math: `<span class="m"><span class="c5"><i>c</i></span> ≈ 57.6</span> nautical miles`, note: "Take the positive square root; keep the unrounded value for the next step." },
      { math: `<span class="m">sin <i>A</i> = <span class="fr"><span>30 sin 110°</span><span><i>c</i></span></span> ≈ 0.4892, &nbsp; <i>A</i> ≈ 29.3°</span>`, note: "A is opposite the shorter given side, so it is acute and the inverse sine is safe." },
      { math: `<span class="m"><i>B</i> = 180° − 110° − <i>A</i> ≈ 40.7°</span>`, note: "The last angle from the angle sum. The largest angle, 110°, is across from the longest side." }
    ],
    answer: `The ships are about <span class="m c5">57.6</span> nautical miles apart. The triangle's angle is <span class="m">29.3°</span> at the 20-knot ship and <span class="m">40.7°</span> at the 15-knot ship.`
  },
  why: `<p>The law of cosines completes the toolkit for triangles: with it and the law of sines, any three parts that determine a triangle can be solved. It also generalises the most famous theorem in geometry. The Pythagorean Theorem is the special case C = 90°, and the correction term says precisely how far a non-right triangle departs from it.</p>
<p>The same expression returns in vectors. The length of the difference of two vectors is given by the law of cosines, and rewriting it gives the dot product formula u · v = |u||v| cos θ. Whenever an angle has to be computed from lengths alone, as in GPS, robotics or molecular geometry, this is the formula that does it.</p>`,
  careers: [
    { role: "Navigator", use: "Finds the distance between two vessels or a course made good from two legs and the turn between them." },
    { role: "Robotics engineer", use: "Computes the elbow angle of a two-link arm from the link lengths and the distance to the target (inverse kinematics)." },
    { role: "Land surveyor", use: "Finds the distance across a lake or a building from two measured sides and the angle between them." },
    { role: "Structural engineer", use: "Gets the angles of a truss from the three member lengths before computing the forces in it." },
    { role: "Chemist", use: "Finds the distance between two atoms bonded to a third from the bond lengths and the bond angle." },
    { role: "Air traffic controller", use: "Separation between two aircraft from their distances and bearings on radar." }
  ],
  life: [
    "Two hikers leaving a trailhead on different trails can work out how far apart they are after an hour",
    "A golfer who knows the distance to the pin and the angle of a miss can find how far the ball is from the hole",
    "The length of a diagonal brace for a shelf bracket that is not square",
    "How far apart the tips of a clock's hands are at a given time",
    "The distance between two cities from their distances to a third and the angle between the roads"
  ],
  fields: [
    { name: "Navigation", use: "Distances between ships or aircraft from two legs and the angle between them." },
    { name: "Robotics", use: "Joint angles of arms and legs from link lengths (inverse kinematics)." },
    { name: "Chemistry", use: "Atom-to-atom distances from bond lengths and bond angles." },
    { name: "Physics", use: "Magnitude of the resultant of two forces or velocities at an angle." }
  ],
  prereqWhy: {
    "trig-law-sines": "SAS and SSS are exactly the cases the law of sines cannot start, and after the first step the law of sines finishes the triangle.",
    "g-pythagorean": "The law of cosines is the Pythagorean Theorem plus a correction term, and the coordinate proof uses the distance formula that comes from it."
  },
  unlocksWhy: {
    "trig-triangle-area": "Heron's formula is proved from the law of cosines, and an SSS area problem can also be done by finding one angle with it first.",
    "trig-vector-apps": "The magnitude of a resultant of two forces or velocities at an angle is the third side of a triangle, found by the law of cosines.",
    "trig-dot-product": "Writing the law of cosines for the triangle formed by u, v and u − v gives the dot product formula u · v = |u||v| cos θ."
  },
  beyond: [
    { field: "Precalculus", why: "Resultants of forces and velocities, and the dot product of vectors, rest on the law of cosines." },
    { field: "Linear Algebra", why: "The angle between vectors in any dimension is defined by the same formula, cos θ = u · v / (|u||v|)." },
    { field: "Physics (Mechanics)", why: "Adding two forces or velocities at an angle; relative velocity between two moving objects." },
    { field: "Computer graphics", why: "Joint angles in skeletal animation and distances in 3D scenes from known sides and angles." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>c</i><sup>2</sup> = (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i>) cos <i>C</i></span>`, fix: `Only the term <span class="m">2<i>ab</i></span> is multiplied by <span class="m">cos <i>C</i></span>. Compute <span class="m">2<i>ab</i> cos <i>C</i></span> first, then subtract it from <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>.` },
    { wrong: `Finding a smaller angle first in an SSS problem, then using sin⁻¹ for the largest one`, fix: `<span class="m">sin⁻¹</span> only returns angles up to 90°, so it cannot report an obtuse largest angle. Find the largest angle first with the law of cosines.` },
    { wrong: `Dropping the minus sign of cos <i>C</i> for an obtuse angle`, fix: `For <span class="m"><i>C</i> &gt; 90°</span>, <span class="m">cos <i>C</i> &lt; 0</span>, so <span class="m">−2<i>ab</i> cos <i>C</i></span> is positive and <span class="m"><i>c</i><sup>2</sup> &gt; <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>.` },
    { wrong: `Using an angle that is not between the two given sides`, fix: `In <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i></span> the angle is the one formed by <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>, opposite the side you want.` }
  ],
  practice: [
    { q: `In triangle <span class="m"><i>ABC</i></span>, <span class="m"><i>a</i> = 5</span>, <span class="m"><i>b</i> = 7</span> and <span class="m"><i>C</i> = 60°</span>. Find <span class="m"><i>c</i></span> exactly and to the nearest tenth.`, a: `<span class="m"><i>c</i><sup>2</sup> = 25 + 49 − 2(5)(7)(1/2) = 39</span>, so <span class="m"><i>c</i> = √39 ≈ 6.2</span>.` },
    { q: `Solve the triangle with sides <span class="m"><i>a</i> = 4</span>, <span class="m"><i>b</i> = 5</span>, <span class="m"><i>c</i> = 6</span>. Round angles to the nearest tenth of a degree.`, a: `Largest angle first: <span class="m">cos <i>C</i> = (16 + 25 − 36)/40 = 1/8</span>, <span class="m"><i>C</i> ≈ 82.8°</span>. Then <span class="m">cos <i>A</i> = (25 + 36 − 16)/60 = 3/4</span>, <span class="m"><i>A</i> ≈ 41.4°</span>, and <span class="m"><i>B</i> ≈ 180° − 82.8° − 41.4° ≈ 55.8°</span>.` },
    { q: `To find the distance across a lake from <span class="m"><i>A</i></span> to <span class="m"><i>B</i></span>, a surveyor stands at <span class="m"><i>C</i></span> and measures <span class="m"><i>CA</i> = 412</span> m, <span class="m"><i>CB</i> = 538</span> m and <span class="m">∠<i>ACB</i> = 72.4°</span>. Find <span class="m"><i>AB</i></span> to the nearest tenth of a metre.`, a: `SAS. <span class="m"><i>AB</i><sup>2</sup> = 412<sup>2</sup> + 538<sup>2</sup> − 2(412)(538) cos 72.4° ≈ 325143.8</span>, so <span class="m"><i>AB</i> ≈ 570.2</span> m.` },
    { q: `A triangle has sides 7, 9 and 14. Find its largest angle, explain why it is found first, then find the other two angles. Round to the nearest tenth of a degree.`, a: `The largest angle is opposite 14: <span class="m">cos <i>C</i> = (49 + 81 − 196)/126 = −11/21</span>, <span class="m"><i>C</i> ≈ 121.6°</span>. It is obtuse, which sin⁻¹ could never report, so it comes first. Then <span class="m">cos <i>A</i> = (81 + 196 − 49)/252 = 19/21</span>, <span class="m"><i>A</i> ≈ 25.2°</span> (opposite 7), and <span class="m"><i>B</i> ≈ 33.2°</span>.` }
  ],
  origin: `Euclid's Elements (about 300 BCE) states the result in geometric form, without cosines: Proposition II.12 says that in an obtuse triangle the square on the side opposite the obtuse angle exceeds the squares on the other two sides by twice a rectangle formed from one side and the projection of the other, and II.13 gives the matching deficit for an acute angle. Jamshid al-Kashi of Samarkand (15th century) stated it in trigonometric form suited to computation, and in France it is sometimes still called the theorem of al-Kashi. François Viète restated it in the 16th century.`
};
