window.ARITH = window.ARITH || {};

ARITH["g-chords-tangents"] = {
  title: "Chords & Tangents",
  short: "Perpendiculars from the centre and right-angle tangents",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · circles",
  hero: `<span class="m"><span class="c4"><i>d</i></span><sup>2</sup> + (½<span class="c3"><i>c</i></span>)<sup>2</sup> = <span class="c2"><i>r</i></span><sup>2</sup> &nbsp;·&nbsp; <span class="c1">tangent</span> ⊥ <span class="c2">radius</span></span>`,
  lede: `The perpendicular from a circle's centre to a chord cuts the chord in half and makes a right triangle with a radius. A tangent line meets the circle at one point, at a right angle to the radius there.`,
  plain: `<p>A <b>chord</b> is a straight cut across a circle. Drop a perpendicular from the centre onto it and something tidy happens: the foot lands exactly at the chord's midpoint. The centre, that midpoint and one end of the chord form a right triangle whose hypotenuse is a radius. So if you know any two of the radius, the half-chord and the distance from the centre, the Pythagorean Theorem gives the third. Chords the same distance from the centre are the same length, and chords closer to the centre are longer, up to the diameter.</p>
<p>A <b>tangent</b> is a line that just touches the circle at one point. Where it touches, it is perpendicular to the radius, like a road under a wheel and the spoke pointing straight down at it. From a point outside the circle you can draw exactly two tangents, and the two tangent segments from that point to the circle have equal length.</p>`,
  formal: `<p>A <b>secant</b> is a line that meets a circle in two points. A <b>tangent</b> is a line in the plane of the circle that meets it in exactly one point, the <b>point of tangency</b>; a <b>tangent segment</b> joins an external point to a point of tangency. The <b>distance</b> from the centre to a chord is the length of the perpendicular segment from the centre to the chord.</p>
<div class="display">A line through the centre perpendicular to a chord bisects the chord and its arc.<br>The perpendicular bisector of a chord passes through the centre.<br>In the same circle or congruent circles, chords are congruent if and only if they are equidistant from the centre.<br><span class="c4"><i>d</i></span><sup>2</sup> + (½<span class="c3"><i>c</i></span>)<sup>2</sup> = <span class="c2"><i>r</i></span><sup>2</sup> &nbsp;<span class="dim">chord of length <i>c</i> at distance <i>d</i></span><br><b>Tangent Theorem.</b> A line tangent to a circle is perpendicular to the radius at the point of tangency; conversely, a line in the plane perpendicular to a radius at its endpoint on the circle is tangent.<br>The two tangent segments from an external point are congruent, and <span class="m"><i>PA</i><sup>2</sup> = <i>PO</i><sup>2</sup> − <i>r</i><sup>2</sup></span>.</div>
<p>Proof of the last theorem, with tangents from <i>P</i> touching circle <i>O</i> at <i>A</i> and <i>B</i>:</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td><span class="ov"><i>PA</i></span> ⊥ <span class="ov"><i>OA</i></span>, <span class="ov"><i>PB</i></span> ⊥ <span class="ov"><i>OB</i></span></td><td>Tangent Theorem</td></tr><tr><td>△<i>OAP</i> and △<i>OBP</i> are right triangles</td><td>Perpendicular lines form right angles</td></tr><tr><td><span class="ov"><i>OA</i></span> ≅ <span class="ov"><i>OB</i></span></td><td>Radii of a circle are congruent</td></tr><tr><td><span class="ov"><i>OP</i></span> ≅ <span class="ov"><i>OP</i></span></td><td>Reflexive Property</td></tr><tr><td>△<i>OAP</i> ≅ △<i>OBP</i></td><td>HL</td></tr><tr><td><span class="ov"><i>PA</i></span> ≅ <span class="ov"><i>PB</i></span></td><td>CPCTC</td></tr></table>`,
  legend: [
    { c: "c2", sym: `<i>r</i>`, name: "Radius", desc: "The hypotenuse of the chord's right triangle, and the leg that meets a tangent at a right angle." },
    { c: "c3", sym: `<i>c</i>`, name: "Chord", desc: "A segment with both endpoints on the circle. The perpendicular from the centre splits it into two halves of ½c." },
    { c: "c1", sym: `<i>PA</i>`, name: "Tangent", desc: "A line touching the circle at one point A, perpendicular to radius OA there. From an outside point P the two tangent segments are equal." },
    { c: "c4", sym: `<i>d</i>`, name: "Distance from the centre", desc: "The length of the perpendicular from O to a chord. Equal chords have equal distances; d = 0 for a diameter." }
  ],
  steps: { title: "How to solve chord and tangent problems", items: [
    `Draw the radius to each point that matters: a chord's endpoint or a point of tangency.`,
    `For a chord, draw the perpendicular from the centre. It bisects the chord, giving a right triangle with legs <span class="m"><i>d</i></span> and <span class="m">½<i>c</i></span> and hypotenuse <span class="m"><i>r</i></span>.`,
    `For a tangent, mark the right angle between the tangent and the radius at the point of tangency.`,
    `Apply the Pythagorean Theorem to the right triangle you have made.`,
    `Use equal tangent segments from each external point when a circle touches several lines, and equal distances for equal chords.`,
    `To test whether a line through a point of the circle is tangent, check for the right angle with the converse of the Pythagorean Theorem.`
  ] },
  example: {
    prompt: `A horizontal water main has an inner diameter of 100 cm. It is less than half full, and the water surface across the pipe is 80 cm wide. How deep is the water at its deepest point?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>r</i> = 50</span>, &nbsp;<span class="c3"><i>c</i> = 80</span></span>`, note: "The radius is half the diameter; the water surface is a chord of the pipe's cross-section." },
      { math: `<span class="m c3">½<i>c</i> = 40</span>`, note: "The perpendicular from the centre to the chord bisects it." },
      { math: `<span class="m"><span class="c4"><i>d</i></span><sup>2</sup> + 40<sup>2</sup> = 50<sup>2</sup></span>`, note: "Pythagorean Theorem in the right triangle formed by the centre, the chord's midpoint and one end of the chord." },
      { math: `<span class="m c4"><i>d</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">2500 − 1600</span> = 30</span>`, note: "The water surface is 30 cm below the centre." },
      { math: `<span class="m">depth = 50 − 30 = 20 cm</span>`, note: "The same perpendicular, continued, reaches the lowest point of the pipe, a radius below the centre. The pipe is less than half full, so the surface lies below the centre." },
      { math: `<span class="m">30<sup>2</sup> + 40<sup>2</sup> = 50<sup>2</sup> ✓</span>`, note: "Check: 900 + 1600 = 2500, and 20 cm is less than the 50 cm radius, as a less-than-half-full pipe requires." }
    ],
    answer: `The water is <span class="m">20</span> cm deep. (If the pipe were more than half full, the same chord would give a depth of <span class="m">50 + 30 = 80</span> cm.)`
  },
  why: `<p>These two right angles, between a chord and the perpendicular from the centre and between a tangent and the radius, turn circle problems into right-triangle problems. Engineers use them to find the depth of liquid in a pipe or tank, to lay out road curves between straight tangents, to run belts between pulleys, and to find how far the horizon is from a height.</p>
<p>The perpendicular bisector of a chord always passes through the centre, so two chords locate the centre of any circular object, from a broken plate to a curved wall. The tangent to a circle is also the model for calculus, which defines the tangent line to any curve as a limit of secant lines and measures its slope with the derivative.</p>`,
  careers: [
    { role: "Civil engineer", use: "Joins two straight road tangents with a circular curve; the curve meets each tangent at a right angle to its radius, and the two tangent lengths from their intersection are equal." },
    { role: "Hydraulic engineer", use: "Computes the depth and wetted area of flow in a partly full circular pipe from the chord across the water surface." },
    { role: "Mechanical designer", use: "Routes a belt between two pulleys along their common tangents, which are perpendicular to the radii at the contact points." },
    { role: "CNC programmer", use: "Blends a tool path from a straight line into an arc by placing the arc's centre on the perpendicular to the line at the join." },
    { role: "Archaeologist", use: "Estimates the original diameter of a broken pot from a rim sherd by finding where the perpendicular bisectors of two chords meet." },
    { role: "Geodesist", use: "Computes the distance to the horizon as a tangent from the observer's eye to the Earth, using PT² = PO² − r²." }
  ],
  life: [
    "Finding the centre of a round lid by folding or drawing two chords and their perpendicular bisectors",
    "Seeing that a bicycle chain leaves each sprocket along a tangent",
    "Estimating how far out to sea you can see from a cliff",
    "Checking how full a cylindrical tank on its side is from the width of the liquid surface"
  ],
  fields: [
    { name: "Civil engineering", use: "Horizontal road and rail curves are circular arcs set between tangent lines." },
    { name: "Mechanical engineering", use: "Belt drives, cams and gear profiles depend on tangents perpendicular to radii." },
    { name: "Hydraulics", use: "Flow in partly full circular conduits is computed from chord geometry." },
    { name: "Optics", use: "The normal to a spherical mirror or lens surface runs along the radius through its centre of curvature." }
  ],
  prereqWhy: {
    "g-circles": "Chords, radii and the theorem that congruent chords cut off congruent arcs come from the basic circle definitions.",
    "g-pythagorean": "The radius, half-chord and distance from the centre form a right triangle, and so do a radius, a tangent segment and the line to the external point.",
    "g-congruence": "The perpendicular from the centre bisects a chord by HL, and two tangent segments from one point are congruent by HL and CPCTC."
  },
  unlocksWhy: {
    "g-circle-segments": "The tangent length PT² = PO² − r² found here is the power of the point, and the tangent–secant theorem extends it to every line through P."
  },
  beyond: [
    { field: "Calculus I", why: "The tangent line to a curve is the limit of secant lines, and for a circle it is the line perpendicular to the radius." },
    { field: "Physics", why: "In uniform circular motion the velocity is tangent to the path, perpendicular to the radius and to the centripetal acceleration." },
    { field: "Computer-aided design", why: "Fillets and blends place arcs tangent to lines and to other arcs by putting centres on the right perpendiculars." }
  ],
  mistakes: [
    { wrong: `Assuming any segment from the centre to a chord bisects it.`, fix: `Only the perpendicular from the centre bisects the chord. A slanted segment from the centre meets the chord off its midpoint.` },
    { wrong: `<span class="m"><i>d</i> + ½<i>c</i> = <i>r</i></span>, so <span class="m"><i>d</i> = 50 − 40 = 10</span>.`, fix: `The three lengths form a right triangle, so square them: <span class="m"><i>d</i><sup>2</sup> = 50<sup>2</sup> − 40<sup>2</sup> = 900</span> and <span class="m"><i>d</i> = 30</span>.` },
    { wrong: `Taking the distance from an external point to the circle as <span class="m"><i>PO</i> = <i>r</i> + <i>PA</i></span>.`, fix: `The tangent segment and the radius are the legs of a right triangle: <span class="m"><i>PO</i><sup>2</sup> = <i>r</i><sup>2</sup> + <i>PA</i><sup>2</sup></span>.` },
    { wrong: `Calling a line tangent because in the drawing it seems to touch the circle once.`, fix: `A line through a point of the circle is tangent only if it is perpendicular to the radius there. Check the right angle with the converse of the Pythagorean Theorem.` }
  ],
  practice: [
    { q: `A circle has radius 13. How far from the centre is a chord of length 24? How long is another chord that is 5 units from the centre?`, a: `<span class="m"><i>d</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">13<sup>2</sup> − 12<sup>2</sup></span> = √25 = 5</span>. A chord 5 units from the centre is equidistant with the first, so it is congruent: length 24.` },
    { q: `<i>P</i> is 17 cm from the centre of a circle of radius 8 cm. Tangents from <i>P</i> touch the circle at <i>A</i> and <i>B</i>. Find <span class="m"><i>PA</i></span> and <span class="m"><i>PB</i></span>.`, a: `<span class="ov"><i>OA</i></span> ⊥ <span class="ov"><i>PA</i></span>, so <span class="m"><i>PA</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">17<sup>2</sup> − 8<sup>2</sup></span> = √225 = 15</span> cm. Tangent segments from one point are congruent, so <span class="m"><i>PB</i> = 15</span> cm.` },
    { q: `A circle is inscribed in △<i>ABC</i> with <span class="m"><i>AB</i> = 10</span>, <span class="m"><i>BC</i> = 12</span> and <span class="m"><i>CA</i> = 8</span>. Find the tangent lengths from each vertex to the points where the circle touches the sides.`, a: `Let the tangent lengths from <i>A</i>, <i>B</i>, <i>C</i> be <span class="m"><i>x</i>, <i>y</i>, <i>z</i></span> (two equal tangent segments from each vertex). Then <span class="m"><i>x</i> + <i>y</i> = 10</span>, <span class="m"><i>y</i> + <i>z</i> = 12</span>, <span class="m"><i>z</i> + <i>x</i> = 8</span>. Adding, <span class="m"><i>x</i> + <i>y</i> + <i>z</i> = 15</span>, so <span class="m"><i>x</i> = 3</span>, <span class="m"><i>y</i> = 7</span>, <span class="m"><i>z</i> = 5</span>.` },
    { q: `Circle <i>O</i> has radius 6, and <i>A</i> is on the circle. A point <i>P</i> has <span class="m"><i>PA</i> = 8</span> and <span class="m"><i>PO</i> = 11</span>. Is line <i>PA</i> tangent to the circle? What would <span class="m"><i>PO</i></span> have to be?`, a: `No. <span class="m">6<sup>2</sup> + 8<sup>2</sup> = 100 ≠ 121 = 11<sup>2</sup></span>, so by the converse of the Pythagorean Theorem ∠<i>OAP</i> is not a right angle (it is obtuse, since 121 &gt; 100), and line <i>PA</i> is a secant. It would be tangent if <span class="m"><i>PO</i> = 10</span>.` }
  ],
  origin: `Book III of Euclid's <i>Elements</i> (about 300 BCE) contains most of these results: finding the centre of a circle from the perpendicular bisector of a chord (III.1), a line through the centre bisects a chord exactly when it is perpendicular to it (III.3), equal chords are equally distant from the centre (III.14), the line perpendicular to a diameter at its end touches the circle and a tangent is perpendicular to the radius at the point of contact (III.16 and III.18), and how to draw a tangent from an outside point (III.17).`
};
