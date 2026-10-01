window.ARITH = window.ARITH || {};

ARITH["g-circles"] = {
  title: "Circles, Arcs & Central Angles",
  short: "An arc measures the same as its central angle",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · circles",
  hero: `<span class="m"><span class="c3">m⌢<i>AB</i></span> = <span class="c1">m∠<i>AOB</i></span></span>`,
  lede: `A circle is every point at one fixed distance from a centre. Two radii cut it into two arcs, and the smaller arc is measured in degrees by the angle the radii make at the centre.`,
  plain: `<p>Tie a string to a peg, hold a pencil at the other end and walk around: the pencil traces a <b>circle</b>. The peg is the <b>centre</b>, and the string is a <b>radius</b>. A segment joining two points of the circle is a <b>chord</b>; a chord through the centre is a <b>diameter</b>, twice as long as a radius.</p>
<p>Draw two radii, to points <i>A</i> and <i>B</i>. The angle they make at the centre is a <b>central angle</b>. It cuts the circle into two pieces called <b>arcs</b>. The smaller piece is the <b>minor arc</b> <span class="m">⌢<i>AB</i></span>, and it gets the same number of degrees as the central angle. The larger piece is the <b>major arc</b>; it gets the rest of the full turn, 360° minus the minor arc. If <i>A</i> and <i>B</i> are the ends of a diameter, both pieces are <b>semicircles</b> of 180°.</p>
<p>Arcs that sit side by side add, just as segments and angles do. In one circle, equal central angles cut off equal arcs, and equal arcs have equal chords. Arc measure is a degree count, not a length: a 60° arc of a coin and a 60° arc of a running track have the same measure but very different lengths.</p>`,
  formal: `<p>A <b>circle</b> is the set of all points in a plane at a given distance <span class="m c2"><i>r</i> &gt; 0</span> (the <b>radius</b>) from a given point <span class="m"><i>O</i></span> (the <b>centre</b>). A <b>chord</b> is a segment whose endpoints lie on the circle; a <b>diameter</b> is a chord through the centre, of length <span class="m">2<i>r</i></span>. Circles are <b>congruent</b> if their radii are congruent, and <b>concentric</b> if they share a centre.</p>
<p>A <b>central angle</b> is an angle whose vertex is the centre. If its sides meet the circle at <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span>, the points of the circle in its interior, with <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span>, form the <b>minor arc</b> <span class="m">⌢<i>AB</i></span>; the remaining points, with <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span>, form the <b>major arc</b>, named with a third point on it, <span class="m">⌢<i>ACB</i></span>.</p>
<div class="display"><span class="c3">m⌢<i>AB</i></span> = <span class="c1">m∠<i>AOB</i></span> &nbsp;<span class="dim">minor arc, less than 180°</span><br><span class="c4">m⌢<i>ACB</i></span> = 360° − <span class="c3">m⌢<i>AB</i></span> &nbsp;<span class="dim">major arc</span><br>semicircle: 180° &nbsp;<span class="dim">when <span class="ov"><i>AB</i></span> is a diameter</span></div>
<p><b>Arc Addition Postulate.</b> If <span class="m">⌢<i>AB</i></span> and <span class="m">⌢<i>BC</i></span> are arcs of the same circle with only the point <span class="m"><i>B</i></span> in common, then <span class="m">m⌢<i>ABC</i> = m⌢<i>AB</i> + m⌢<i>BC</i></span>. <b>Congruent arcs</b> are arcs with equal measures in the same circle or in congruent circles. <b>Theorem.</b> In the same circle or in congruent circles, two minor arcs are congruent if and only if their central angles are congruent, and if and only if their chords are congruent. (Proof: the radii make △<i>AOB</i> and △<i>COD</i> isosceles with congruent legs, so SAS gives the chords from the angles and SSS gives the angles from the chords.)</p>`,
  legend: [
    { c: "c2", sym: `<i>r</i> = <i>OA</i>`, name: "Radius", desc: "The fixed distance from the centre O to every point of the circle, and any segment from O to the circle." },
    { c: "c1", sym: `∠<i>AOB</i>`, name: "Central angle", desc: "An angle with its vertex at the centre. Its measure is the measure of the minor arc it cuts off." },
    { c: "c3", sym: `⌢<i>AB</i>`, name: "Minor arc", desc: "The arc inside the central angle, less than 180°. Named by its two endpoints." },
    { c: "c4", sym: `⌢<i>ACB</i>`, name: "Major arc", desc: "The rest of the circle, 360° minus the minor arc. Named with three letters so it is not confused with the minor arc." }
  ],
  steps: { title: "How to find arc and angle measures in a circle", items: [
    `Find the centre and the central angle whose sides pass through the arc's endpoints.`,
    `A minor arc measures the same as its central angle: <span class="m">m⌢<i>AB</i> = m∠<i>AOB</i></span>.`,
    `A major arc is the rest of the circle: <span class="m">360° − m⌢<i>AB</i></span>. Name it with three letters. A semicircle, cut off by a diameter, is 180°.`,
    `Add adjacent arcs with the Arc Addition Postulate; all the arcs around a circle with no overlaps total 360°.`,
    `For angles at a chord, use the isosceles triangle formed by two radii: each base angle is <span class="m">(180° − m∠<i>AOB</i>) ÷ 2</span>.`,
    `Compare arcs only in the same circle or congruent circles: there equal central angles, equal arcs and equal chords go together.`
  ] },
  example: {
    prompt: `A Ferris wheel has 20 gondolas equally spaced around its rim, centre <span class="m"><i>O</i></span>. Going around the wheel, gondola <span class="m"><i>B</i></span> is 3 places past gondola <span class="m"><i>A</i></span>, and gondola <span class="m"><i>D</i></span> is 4 places past <span class="m"><i>B</i></span>; gondola <span class="m"><i>E</i></span> is on the far side. Find <span class="m">m⌢<i>AD</i></span>, the major arc <span class="m">⌢<i>AED</i></span>, the central angle <span class="m">∠<i>AOD</i></span>, and the angle a straight brace <span class="ov"><i>AD</i></span> makes with the spoke <span class="ov"><i>OA</i></span>.`,
    lines: [
      { math: `<span class="m">360° ÷ 20 = 18°</span>`, note: "Twenty equal central angles fill the full turn about O, so each arc between neighbours measures 18°." },
      { math: `<span class="m c3">m⌢<i>AB</i> = 3 · 18° = 54°</span>`, note: "Arc Addition Postulate over three adjacent 18° arcs." },
      { math: `<span class="m c3">m⌢<i>BD</i> = 4 · 18° = 72°</span>`, note: "Four adjacent 18° arcs." },
      { math: `<span class="m c3">m⌢<i>AD</i> = 54° + 72° = 126°</span>`, note: "Arc Addition Postulate. The arc through B is less than 180°, so it is the minor arc AD." },
      { math: `<span class="m c1">m∠<i>AOD</i> = 126°</span>`, note: "A minor arc and its central angle have the same measure." },
      { math: `<span class="m c4">m⌢<i>AED</i> = 360° − 126° = 234°</span>`, note: "The major arc is the rest of the circle." },
      { math: `<span class="m">m∠<i>OAD</i> = (180° − 126°) ÷ 2 = 27°</span>`, note: "OA = OD are radii, so triangle AOD is isosceles: Base Angles Theorem and the Triangle Angle-Sum Theorem." },
      { math: `<span class="m">126° + 234° = 360°, &nbsp;27° + 27° + 126° = 180° ✓</span>`, note: "Check: the two arcs make the whole circle and the triangle's angles total 180°." }
    ],
    answer: `<span class="m">m⌢<i>AD</i> = m∠<i>AOD</i> = 126°</span>, the major arc <span class="m">⌢<i>AED</i></span> measures 234°, and the brace meets the spoke at 27°.`
  },
  why: `<p>Circles are everywhere something turns: wheels, gears, clocks, steering, orbits and rotating machinery. Measuring a piece of a circle by the angle at its centre is the step that makes all of them computable. Bolt holes on a flange, the slices of a pie chart and the hour marks of a clock are all equal central angles of 360° ÷ <i>n</i>.</p>
<p>In the rest of the course, the central angle is the reference for every other angle in a circle. Inscribed angles are half of it, chord and tangent theorems are proved from the isosceles triangles it makes, and arc length and sector area are its fraction of 360°. In trigonometry the same idea becomes radian measure and the unit circle.</p>`,
  careers: [
    { role: "Machinist", use: "Drills n equally spaced holes on a bolt circle by stepping a rotary table 360°/n between holes." },
    { role: "Data analyst", use: "Draws each slice of a pie chart with a central angle equal to its share of the total times 360°." },
    { role: "Civil engineer", use: "Lays out highway curves specified by their central angle and radius, and stakes points by dividing the central angle." },
    { role: "Mechanical engineer", use: "Sets the angular pitch of a gear with N teeth at 360°/N so the teeth mesh evenly." },
    { role: "Astronomer", use: "Measures the separation of two stars as the central angle between their directions, an arc on the celestial sphere in degrees." },
    { role: "Landscape irrigation technician", use: "Sets rotary sprinkler heads to sweep a chosen arc, such as 90° in a corner or 180° along a wall." }
  ],
  life: [
    "Reading an analogue clock, where each minute moves the minute hand 6°",
    "Cutting a round cake or pizza into equal slices",
    "Reading a pie chart in a news article or a bank statement",
    "Turning a steering wheel or a dial a quarter turn (90°)",
    "Setting a garden sprinkler to water only a half circle"
  ],
  fields: [
    { name: "Astronomy", use: "Positions and separations on the sky are arcs measured in degrees, minutes and seconds." },
    { name: "Geography", use: "Latitude and longitude are central angles measured at the centre of the Earth." },
    { name: "Mechanical engineering", use: "Gears, cams, flanges and rotors are designed by dividing the circle into central angles." },
    { name: "Statistics", use: "Pie charts and circular histograms turn proportions into central angles." }
  ],
  prereqWhy: {
    "g-isosceles": "Two radii and a chord form an isosceles triangle, so its base angles are equal and are fixed by the central angle.",
    "g-polygons": "A regular n-gon inscribed in a circle cuts it into n congruent arcs of 360°/n, and the Triangle Angle-Sum Theorem gives the angles at each chord."
  },
  unlocksWhy: {
    "g-circle-equations": "The equation of a circle writes this definition in coordinates: every point at distance r from the centre (h, k).",
    "g-inscribed": "An inscribed angle is measured against the arc it intercepts, which is defined here through its central angle.",
    "g-chords-tangents": "The chord theorems extend the result that congruent central angles, arcs and chords go together, using the isosceles triangle of two radii.",
    "g-circle-measure": "Arc length and sector area are the fraction m⌢AB/360° of the circumference and of the area."
  },
  beyond: [
    { field: "Trigonometry", why: "Angles become rotations on the unit circle, and radian measure is arc length divided by radius." },
    { field: "Precalculus", why: "Polar coordinates locate a point by a radius and a central angle." },
    { field: "Physics", why: "Circular motion is described by angular displacement, angular velocity and the radius of the path." }
  ],
  mistakes: [
    { wrong: `Naming a major arc with two letters, <span class="m">⌢<i>AB</i> = 234°</span>.`, fix: `Two letters always mean the minor arc. Name the major arc with a third point on it: <span class="m">m⌢<i>AEB</i> = 234°</span>.` },
    { wrong: `"Both arcs measure 60°, so they are congruent."`, fix: `Congruent arcs must also be in the same circle or in congruent circles. A 60° arc of a 3 cm circle and a 60° arc of a 5 cm circle have equal measures but are not congruent.` },
    { wrong: `Treating arc measure as a length, as in "the arc is 126° long".`, fix: `Arc measure is in degrees and depends only on the central angle. Arc length is a distance and also depends on the radius.` },
    { wrong: `Adding arcs that overlap, such as <span class="m">m⌢<i>AC</i> + m⌢<i>BD</i></span> when <i>B</i> lies on <span class="m">⌢<i>AC</i></span>.`, fix: `The Arc Addition Postulate adds arcs that share only an endpoint: <span class="m">m⌢<i>AB</i> + m⌢<i>BC</i> = m⌢<i>ABC</i></span>.` }
  ],
  practice: [
    { q: `In circle <span class="m"><i>O</i></span>, <span class="m">m∠<i>AOB</i> = 72°</span> and <span class="m"><i>C</i></span> is a point of the circle outside ∠<i>AOB</i>. Find <span class="m">m⌢<i>AB</i></span> and <span class="m">m⌢<i>ACB</i></span>.`, a: `<span class="m">m⌢<i>AB</i> = 72°</span> (minor arc = central angle) and <span class="m">m⌢<i>ACB</i> = 360° − 72° = 288°</span> (major arc).` },
    { q: `<span class="ov"><i>AC</i></span> is a diameter of circle <span class="m"><i>O</i></span> and <span class="m"><i>B</i></span> is on the circle. <span class="m">m∠<i>AOB</i> = (3<i>x</i> + 12)°</span> and <span class="m">m∠<i>BOC</i> = (5<i>x</i> − 8)°</span>. Find <span class="m">m⌢<i>AB</i></span> and <span class="m">m⌢<i>BC</i></span>.`, a: `<i>A</i>, <i>O</i>, <i>C</i> are collinear, so the angles form a linear pair: <span class="m">(3<i>x</i> + 12) + (5<i>x</i> − 8) = 180</span>, <span class="m">8<i>x</i> + 4 = 180</span>, <span class="m"><i>x</i> = 22</span>. So <span class="m">m⌢<i>AB</i> = 78°</span> and <span class="m">m⌢<i>BC</i> = 102°</span>; check <span class="m">78° + 102° = 180°</span>, a semicircle ✓.` },
    { q: `In a survey of 240 commuters, 54 cycle to work. What central angle does the cycling slice of a pie chart need? How many commuters does a 90° slice represent?`, a: `<span class="m"><span class="fr"><span>54</span><span>240</span></span> · 360° = 81°</span>. A 90° slice is <span class="m"><span class="fr"><span>90</span><span>360</span></span> · 240 = 60</span> commuters.` },
    { q: `Circle <span class="m"><i>P</i></span> has radius 3 cm and circle <span class="m"><i>Q</i></span> has radius 5 cm. Each has a 60° arc, <span class="m">⌢<i>AB</i></span> on <i>P</i> and <span class="m">⌢<i>CD</i></span> on <i>Q</i>. Find the chords <span class="m"><i>AB</i></span> and <span class="m"><i>CD</i></span>. Are the arcs congruent?`, a: `△<i>APB</i> is isosceles with a 60° vertex angle, so each base angle is <span class="m">(180° − 60°) ÷ 2 = 60°</span> and the triangle is equilateral: <span class="m"><i>AB</i> = 3</span> cm. Likewise <span class="m"><i>CD</i> = 5</span> cm. The arcs are not congruent: they have equal measures, but the circles are not congruent.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) defines the circle in Book I and devotes Book III to its chords, arcs and tangents, though it never measures angles in degrees. The 360-degree circle comes from Babylonian astronomy and its base-60 arithmetic; Greek astronomers adopted it, and Ptolemy's <i>Almagest</i> (about 150 CE) measures every arc this way.`
};
