window.ARITH = window.ARITH || {};

ARITH["g-angles"] = {
  title: "Angles & Angle Measure",
  short: "Protractor Postulate, Angle Addition, bisectors",
  grade: "Grade 10 · college-prep Geometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Geometry · measuring turn",
  hero: `<span class="m"><span class="c1">m∠<i>AOB</i></span> + <span class="c3">m∠<i>BOC</i></span> = m∠<i>AOC</i></span>`,
  lede: `An angle is two rays from one endpoint, and its measure in degrees says how far one ray is turned from the other. Measures of adjacent angles add, the way lengths of adjacent segments add.`,
  plain: `<p>Draw two rays that start at the same point. The figure is an <b>angle</b>, the rays are its <b>sides</b> and the shared endpoint is its <b>vertex</b>. The angle with sides ray <i>OA</i> and ray <i>OC</i> is written <span class="m">∠<i>AOC</i></span>, with the vertex letter in the middle.</p>
<p>A protractor measures the opening in <b>degrees</b>. A full turn is 360°, so a half turn (a straight line) is 180° and a quarter turn (a square corner) is 90°. Put the centre of the protractor on the vertex, read the number where each side crosses the scale, and subtract. Angles are sorted by size: <b>acute</b> (less than 90°), <b>right</b> (exactly 90°), <b>obtuse</b> (between 90° and 180°) and <b>straight</b> (exactly 180°).</p>
<p>If a third ray <i>OB</i> runs between the sides, it splits the angle into two pieces whose measures add up to the whole. A ray that splits an angle into two equal halves is the angle's <b>bisector</b>. Two rays always make two openings around the vertex; the angle is the smaller one, and the larger opening, 360° minus it, is called a reflex opening.</p>`,
  formal: `<p>An <b>angle</b> is the union of two noncollinear rays with a common endpoint, its vertex (two opposite rays form a <b>straight angle</b>). The <b>interior</b> of ∠<i>AOC</i> is the set of points on the same side of line <i>OA</i> as <i>C</i> and on the same side of line <i>OC</i> as <i>A</i>.</p>
<p><b>Protractor Postulate.</b> Let <i>O</i> be between <i>A</i> and <i>B</i> on line <i>AB</i>. The rays from <i>O</i> on one side of line <i>AB</i>, together with ray <i>OA</i> and ray <i>OB</i>, can be paired one-to-one with the real numbers from 0 to 180 so that ray <i>OA</i> is paired with 0, ray <i>OB</i> with 180, and if ray <i>OP</i> is paired with <span class="m"><i>x</i></span> and ray <i>OQ</i> with <span class="m"><i>y</i></span>, then <span class="m">m∠<i>POQ</i> = |<i>x</i> − <i>y</i>|</span>.</p>
<div class="display">Angle Addition Postulate: if <i>B</i> is in the interior of ∠<i>AOC</i>, then m∠<i>AOB</i> + m∠<i>BOC</i> = m∠<i>AOC</i>.<br>If ∠<i>AOC</i> is a straight angle and <i>B</i> is not on line <i>AC</i>, then m∠<i>AOB</i> + m∠<i>BOC</i> = 180°.</div>
<p>Angles are <b>congruent</b> (<span class="m">∠<i>A</i> ≅ ∠<i>B</i></span>) when their measures are equal (<span class="m">m∠<i>A</i> = m∠<i>B</i></span>). Ray <i>OB</i> <b>bisects</b> ∠<i>AOC</i> if <i>B</i> is in its interior and <span class="m">∠<i>AOB</i> ≅ ∠<i>BOC</i></span>. Every angle other than a straight angle has exactly one bisector. Degrees subdivide sexagesimally: <span class="m">1° = 60′</span> (minutes) and <span class="m">1′ = 60″</span> (seconds).</p>`,
  legend: [
    { c: "c2", sym: `ray <i>OA</i>, ray <i>OC</i>`, name: "Sides", desc: "The two rays that form the angle, both starting at the vertex O." },
    { c: "c1", sym: `m∠<i>AOB</i>`, name: "Measure", desc: "The number of degrees between the sides, from 0 up to 180. With an interior ray, the first of the two parts." },
    { c: "c3", sym: `m∠<i>BOC</i>`, name: "Added angle", desc: "The second part when ray OB is in the interior. The two parts add to the whole angle." },
    { c: "c4", sym: `bisector`, name: "Angle bisector", desc: "The ray from the vertex that splits the angle into two congruent angles, each half the measure." }
  ],
  steps: { title: "How to measure and split an angle", items: [
    `Place the protractor's centre on the vertex and its baseline along one side, so that side reads 0°.`,
    `Read the scale where the other side crosses it, using the scale that starts at 0° on the first side. If both sides fall on the scale away from 0°, subtract the two readings (Protractor Postulate).`,
    `Classify the angle: acute below 90°, right at 90°, obtuse between 90° and 180°, straight at 180°.`,
    `If a ray lies in the interior, use the Angle Addition Postulate: the two parts add to the whole. Set up an equation if the parts are given as expressions.`,
    `For a bisector, each part is half the whole. Set the two parts equal, solve, and check that they sum to the whole.`
  ] },
  example: {
    prompt: `A surveyor's instrument set up at point <i>O</i> reads 25° when aimed at stake <i>A</i>, 70° at stake <i>B</i> and 140° at stake <i>C</i>, all on one side of its 0°–180° baseline. Find and classify <span class="m">m∠<i>AOC</i></span>, check the Angle Addition Postulate with <i>B</i>, and find the reading for a fence line that bisects <span class="m">∠<i>AOC</i></span>.`,
    lines: [
      { math: `<span class="m">m∠<i>AOC</i> = |140° − 25°| = 115°</span>`, note: "Protractor Postulate. Between 90° and 180°, so the angle is obtuse." },
      { math: `<span class="m"><span class="c1">m∠<i>AOB</i> = |70° − 25°| = 45°</span>, &nbsp; <span class="c3">m∠<i>BOC</i> = |140° − 70°| = 70°</span></span>`, note: "Protractor Postulate for each part. The reading 70° lies between 25° and 140°, so B is in the interior." },
      { math: `<span class="m"><span class="c1">45°</span> + <span class="c3">70°</span> = 115° ✓</span>`, note: "Angle Addition Postulate: the parts add to the whole." },
      { math: `<span class="m c4">bisector reading = <span class="fr"><span>25° + 140°</span><span>2</span></span> = 82.5°</span>`, note: "The bisector is halfway between the side readings." },
      { math: `<span class="m">82.5° − 25° = 57.5°, &nbsp; 140° − 82.5° = 57.5°, &nbsp; 2 × 57.5° = 115° ✓</span>`, note: "Check: the two halves are congruent and add to the whole. 57.5° = 57°30′." }
    ],
    answer: `<span class="m">m∠<i>AOC</i> = 115°</span>, an obtuse angle, and <span class="m">45° + 70° = 115°</span> as the Angle Addition Postulate requires. The fence line should be set at the 82.5° reading, making two 57.5° angles.`
  },
  why: `<p>Angles describe direction and turning: the pitch of a roof, the heading of a ship, the bend in a pipe, the joint angle of a robot arm. Measuring them consistently, and knowing that adjacent angles add, is what lets you combine and split turns reliably.</p>
<p>In geometry the Protractor and Angle Addition Postulates are the angle versions of the Ruler and Segment Addition Postulates. Every theorem about angle pairs, parallel lines, triangles and polygons starts from them.</p>`,
  careers: [
    { role: "Surveyor", use: "Measures horizontal angles between stakes with a total station and checks that the parts of a turned angle add to the whole." },
    { role: "Carpenter", use: "Sets a miter saw to half the corner angle, such as 45° for a 90° corner, so two pieces meet cleanly." },
    { role: "Pilot", use: "Reads headings in degrees and computes the turn between a current heading and a new one." },
    { role: "Physical therapist", use: "Measures a joint's range of motion in degrees with a goniometer to track recovery." },
    { role: "Robotics engineer", use: "Programs joint angles of an arm, adding the angle of each link to find the gripper's direction." },
    { role: "Astronomer", use: "Gives the separation of objects in the sky in degrees, arcminutes and arcseconds." }
  ],
  life: [
    "Cutting a pizza into equal slices",
    "Reclining a seat to a comfortable angle",
    "Reading the angle between clock hands",
    "Setting the tilt of a solar panel or a ladder",
    "Turning a steering wheel or a door through part of a full turn"
  ],
  fields: [
    { name: "Navigation", use: "Bearings and headings are angles measured in degrees from north." },
    { name: "Astronomy", use: "Positions and separations on the sky are angles, recorded in degrees, minutes and seconds." },
    { name: "Mechanical engineering", use: "Gear teeth, cam profiles and linkages are designed from angle measures." },
    { name: "Physics", use: "Vectors are resolved into components using the angle they make with an axis." }
  ],
  prereqWhy: {
    "g-basics": "An angle is built from rays, which are parts of lines through named points, and the Protractor Postulate works within a plane."
  },
  unlocksWhy: {
    "g-constructions": "Copying an angle and constructing an angle bisector reproduce and split the measures defined here.",
    "g-angle-pairs": "Complementary, supplementary, linear-pair and vertical angles are defined by sums and positions of angle measures.",
    "g-proofs": "The Angle Addition Postulate and the definitions of congruent angles and angle bisector are reasons in two-column proofs.",
    "g-transformations": "Rotations are measured in degrees, and rigid motions preserve angle measure."
  },
  beyond: [
    { field: "Trigonometry", why: "Angles become inputs to sine, cosine and tangent, and are extended beyond 180° and measured in radians." },
    { field: "Precalculus", why: "Polar coordinates and the unit circle describe points by an angle of rotation." },
    { field: "Physics", why: "Projectile launch angles, inclined planes and rotational motion all start from angle measure." }
  ],
  mistakes: [
    { wrong: `Reading the wrong scale on a protractor and calling a 50° angle 130°.`, fix: `Use the scale that reads 0° on one side of the angle. An acute angle must read less than 90°, so check that the number matches what you see.` },
    { wrong: `Naming an angle ∠<i>OAC</i> when the vertex is <i>O</i>.`, fix: `The vertex letter goes in the middle: ∠<i>AOC</i> or ∠<i>COA</i>. A single letter ∠<i>O</i> is allowed only when just one angle has that vertex.` },
    { wrong: `Adding two angle measures that share a side without checking the position: "30° and 50°, so the whole is 80°."`, fix: `The Angle Addition Postulate needs the shared ray in the interior. If one angle lies inside the other, the third angle is the difference, 20°.` },
    { wrong: `Calling 360° − 115° = 245° the measure of ∠<i>AOC</i>.`, fix: `In this course an angle's measure is between 0° and 180°. The 245° opening is the reflex opening; the angle measures 115°.` }
  ],
  practice: [
    { q: `Classify angles measuring 90°, 134°, 180° and 7.5°. Two rays make a 215° opening on one side; what does the angle they form measure?`, a: `Right, obtuse, straight, acute. The angle is the smaller opening: <span class="m">360° − 215° = 145°</span>, which is obtuse.` },
    { q: `Ray <i>OB</i> is in the interior of ∠<i>AOC</i>. <span class="m">m∠<i>AOB</i> = (2<i>x</i> + 5)°</span>, <span class="m">m∠<i>BOC</i> = (4<i>x</i> − 11)°</span> and <span class="m">m∠<i>AOC</i> = 102°</span>. Find each part.`, a: `Angle Addition: <span class="m">6<i>x</i> − 6 = 102</span>, so <span class="m"><i>x</i> = 18</span>. Then <span class="m">m∠<i>AOB</i> = 41°</span> and <span class="m">m∠<i>BOC</i> = 61°</span>; check <span class="m">41° + 61° = 102°</span> ✓.` },
    { q: `Ray <i>OK</i> bisects ∠<i>JOL</i>, with <span class="m">m∠<i>JOK</i> = (5<i>x</i> − 8)°</span> and <span class="m">m∠<i>KOL</i> = (3<i>x</i> + 14)°</span>. Find <span class="m">m∠<i>JOL</i></span> and classify it.`, a: `A bisector makes congruent halves: <span class="m">5<i>x</i> − 8 = 3<i>x</i> + 14</span>, so <span class="m"><i>x</i> = 11</span> and each half is <span class="m">47°</span>. <span class="m">m∠<i>JOL</i> = 94°</span>, an obtuse angle.` },
    { q: `<span class="m">m∠<i>AOB</i> = 30°</span> and <span class="m">m∠<i>BOC</i> = 50°</span>. Find <span class="m">m∠<i>AOC</i></span>.`, a: `Not enough information. If <i>B</i> is in the interior of ∠<i>AOC</i>, then <span class="m">m∠<i>AOC</i> = 30° + 50° = 80°</span>. If <i>A</i> is in the interior of ∠<i>BOC</i>, then <span class="m">m∠<i>AOC</i> = 50° − 30° = 20°</span>. The figure must say which.` }
  ],
  origin: `The 360-degree circle is generally traced to Babylonian astronomy, which counted in base 60. Greek astronomers adopted it, and Ptolemy's <i>Almagest</i> (2nd century CE) used sexagesimal fractions of a degree; the names minute and second come from the medieval Latin <i>pars minuta prima</i> and <i>pars minuta secunda</i>.`
};
