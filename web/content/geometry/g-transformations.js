window.ARITH = window.ARITH || {};

ARITH["g-transformations"] = {
  title: "Rigid Motions: Translations, Reflections & Rotations",
  short: "Slides, flips and turns that keep every distance",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · transformations",
  hero: `<span class="m"><span class="c2"><i>P</i></span> ↦ <span class="c3"><i>P</i>′</span> &nbsp;&nbsp; <span class="c3"><i>P</i>′<i>Q</i>′</span> = <span class="c2"><i>PQ</i></span></span>`,
  lede: `A rigid motion moves every point of the plane so that the distance between any two points stays the same. Translations, reflections and rotations are the three basic kinds, and each one carries a figure to an exact copy of itself.`,
  plain: `<p>Pick up a cardboard triangle, slide it, flip it over or spin it, and put it down again. Its sides and angles have not changed. Geometry describes those moves as <b>rigid motions</b>: rules that send every point <span class="m"><i>P</i></span> to an image point <span class="m"><i>P</i>′</span> (read "P prime") without stretching anything.</p>
<p>A <b>translation</b> slides everything the same distance in the same direction, given by a vector such as <span class="m">⟨3, −2⟩</span>: 3 right and 2 down. A <b>reflection</b> flips the plane over a mirror line, so each point lands the same distance away on the other side. A <b>rotation</b> turns the plane about a fixed centre by a given angle. Counterclockwise is the positive direction.</p>
<p>On a coordinate grid each of these is a short rule for the coordinates. Reflecting in the x-axis keeps <span class="m"><i>x</i></span> and changes the sign of <span class="m"><i>y</i></span>. A quarter turn about the origin sends <span class="m">(<i>x</i>, <i>y</i>)</span> to <span class="m">(−<i>y</i>, <i>x</i>)</span>. You can always check your work with the distance formula: every side of the image must equal the matching side of the original.</p>`,
  formal: `<p>A <b>transformation</b> of the plane is a one-to-one correspondence from the plane onto itself. A transformation <span class="m"><i>T</i></span> is an <b>isometry</b> (a <b>rigid motion</b>) if <span class="m"><i>T</i>(<i>P</i>)<i>T</i>(<i>Q</i>) = <i>PQ</i></span> for all points <span class="m"><i>P</i></span>, <span class="m"><i>Q</i></span>.</p>
<div class="display"><b>Translation</b> by <span class="c1">⟨<i>a</i>, <i>b</i>⟩</span>: &nbsp;(<i>x</i>, <i>y</i>) ↦ (<i>x</i> + <i>a</i>, <i>y</i> + <i>b</i>)<br><b>Reflection</b> in line <span class="c4"><i>ℓ</i></span>: &nbsp;<i>P</i> ∈ <i>ℓ</i> is fixed; otherwise <i>ℓ</i> is the perpendicular bisector of <span class="ov"><i>PP</i>′</span><br><span class="dim">x-axis (<i>x</i>, −<i>y</i>) · y-axis (−<i>x</i>, <i>y</i>) · <i>y</i> = <i>x</i>: (<i>y</i>, <i>x</i>) · <i>y</i> = −<i>x</i>: (−<i>y</i>, −<i>x</i>)</span><br><b>Rotation</b> about <span class="c4"><i>O</i></span> by <i>θ</i>: &nbsp;<i>O</i> is fixed; otherwise <i>OP</i>′ = <i>OP</i> and ray <i>OP</i> turns through <i>θ</i> to ray <i>OP</i>′, counterclockwise for <i>θ</i> &gt; 0 (for 0° &lt; <i>θ</i> ≤ 180°, m∠<i>POP</i>′ = <i>θ</i>)<br><span class="dim">about the origin: 90° (−<i>y</i>, <i>x</i>) · 180° (−<i>x</i>, −<i>y</i>) · 270° (<i>y</i>, −<i>x</i>)</span></div>
<p>Every isometry maps lines to lines, segments to congruent segments and angles to congruent angles, and it preserves collinearity and betweenness. Translations and rotations preserve orientation (the order <span class="m"><i>A</i> → <i>B</i> → <i>C</i></span> stays counterclockwise); a reflection reverses it.</p>`,
  legend: [
    { c: "c2", sym: `△<i>ABC</i>`, name: "Preimage", desc: "The original figure, before the motion." },
    { c: "c3", sym: `△<i>A</i>′<i>B</i>′<i>C</i>′`, name: "Image", desc: "Where each vertex lands. The prime marks match each image point to its original." },
    { c: "c1", sym: `⟨<i>a</i>, <i>b</i>⟩`, name: "Rule or vector", desc: "The coordinate rule of the motion. For a translation it is the vector: <i>a</i> horizontal, <i>b</i> vertical." },
    { c: "c4", sym: `<i>ℓ</i>, <i>O</i>`, name: "Mirror line or centre", desc: "The fixed line of a reflection, or the fixed centre point of a rotation." }
  ],
  steps: { title: "How to map a figure by a rigid motion", items: [
    `Identify the motion and its data: the vector of a translation, the mirror line of a reflection, or the centre, angle and direction of a rotation.`,
    `Write the coordinate rule, for example <span class="m">(<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, <i>x</i>)</span> for a 90° counterclockwise rotation about the origin.`,
    `Apply the rule to each vertex and name the images with primes: <span class="m"><i>A</i> ↦ <i>A</i>′</span>, <span class="m"><i>B</i> ↦ <i>B</i>′</span>, <span class="m"><i>C</i> ↦ <i>C</i>′</span>.`,
    `Join the image vertices in the same order as the original.`,
    `Check one or two sides with the distance formula (<span class="m"><i>A</i>′<i>B</i>′ = <i>AB</i></span>). For a reflection, check that the mirror is the perpendicular bisector of <span class="ov"><i>AA</i>′</span>; for a rotation, check that <span class="m"><i>OA</i>′ = <i>OA</i></span>.`
  ] },
  example: {
    prompt: `A landscape architect draws a plaza on a grid in metres, with a fountain at the origin <span class="m"><i>O</i></span>. A triangular planter has corners <span class="m"><i>A</i>(1, 1)</span>, <span class="m"><i>B</i>(5, 1)</span> and <span class="m"><i>C</i>(1, 4)</span>. A copy is to be placed by rotating the planter 90° counterclockwise about the fountain. Find the new corners and confirm the copy is the same size and shape.`,
    lines: [
      { math: `<span class="m c1"><i>R</i><sub><i>O</i>, 90°</sub>: (<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, <i>x</i>)</span>`, note: "Coordinate rule for a 90° counterclockwise rotation about the origin." },
      { math: `<span class="m"><span class="c2"><i>A</i>(1, 1)</span> ↦ <span class="c3"><i>A</i>′(−1, 1)</span>, &nbsp;<span class="c2"><i>B</i>(5, 1)</span> ↦ <span class="c3"><i>B</i>′(−1, 5)</span>, &nbsp;<span class="c2"><i>C</i>(1, 4)</span> ↦ <span class="c3"><i>C</i>′(−4, 1)</span></span>`, note: "Swap the coordinates and change the sign of the new first coordinate." },
      { math: `<span class="m"><i>AB</i> = 4, &nbsp;<i>A</i>′<i>B</i>′ = √<span style="text-decoration:overline">0² + 4²</span> = 4</span>`, note: "Distance formula: the side along the x-axis direction is now vertical, same length." },
      { math: `<span class="m"><i>BC</i> = √<span style="text-decoration:overline">4² + 3²</span> = 5, &nbsp;<i>B</i>′<i>C</i>′ = √<span style="text-decoration:overline">(−3)² + (−4)²</span> = 5</span>`, note: "The longest side keeps its length of 5 m." },
      { math: `<span class="m"><i>CA</i> = 3, &nbsp;<i>C</i>′<i>A</i>′ = 3</span>`, note: "All three pairs of sides match, so the copy is congruent to the original." },
      { math: `<span class="m"><i>OA</i> = <i>OA</i>′ = √2, &nbsp;(1)(−1) + (1)(1) = 0</span>`, note: "Check the rotation itself: A and A′ are the same distance from O, and OA ⊥ OA′, so ∠AOA′ = 90°." }
    ],
    answer: `The copy has corners <span class="m"><i>A</i>′(−1, 1)</span>, <span class="m"><i>B</i>′(−1, 5)</span>, <span class="m"><i>C</i>′(−4, 1)</span>. Its sides are 4 m, 5 m and 3 m, exactly like the original.`
  },
  why: `<p>Rigid motions are how geometry defines "same size and same shape": two figures are congruent when a sequence of translations, reflections and rotations carries one exactly onto the other. That single idea underlies every congruence proof that follows, and it is the version of congruence used in the Common Core standards.</p>
<p>Outside class the same rules move things on screens and machines. Every frame of a video game or animation translates and rotates objects with these coordinate rules, a robot arm's position is a rotation followed by a translation, and a CNC machine can mirror or rotate a programmed part path instead of reprogramming it.</p>`,
  careers: [
    { role: "Game developer", use: "Moves and turns characters each frame by applying translation and rotation transforms to every vertex of a model." },
    { role: "CNC programmer", use: "Uses work offsets to translate the coordinate origin and mirror-image or coordinate-rotation commands to cut a reflected or turned copy of a part." },
    { role: "Robotics engineer", use: "Describes the pose of a gripper as a rotation plus a translation from the robot's base frame." },
    { role: "Textile designer", use: "Builds repeating fabric prints by translating and reflecting a single motif across the fabric width." },
    { role: "GIS analyst", use: "Rotates and translates a local survey grid so its points line up with a regional map coordinate system." },
    { role: "Animator", use: "Keys an object's position and rotation in software, which applies the rigid motion between keyframes." }
  ],
  life: [
    "Sliding and turning furniture on a floor-plan app before moving it",
    "Flipping a photo horizontally in an editing app",
    "Turning a phone sideways and watching the screen rotate",
    "Reading writing reflected in a mirror",
    "Laying patio stones in a repeating pattern"
  ],
  fields: [
    { name: "Computer graphics", use: "Objects are positioned with transformation matrices for translation, rotation and reflection." },
    { name: "Robotics", use: "Rigid-body transforms track how each joint and link of a robot moves." },
    { name: "Chemistry", use: "A molecule's symmetry operations are reflections and rotations that leave it looking unchanged." },
    { name: "Physics", use: "Changing to a moved or rotated frame of reference is a rigid motion of the coordinates." }
  ],
  prereqWhy: {
    "g-segments": "The distance formula is how you confirm that a motion keeps every length, and the midpoint locates the mirror line between a point and its reflection.",
    "g-angles": "A rotation is specified by an angle measure and a direction, and rigid motions are defined to keep angle measures unchanged.",
    "pa-coordinate": "Every coordinate rule works by changing signs and swapping x and y, so you need to plot points and read quadrants fluently."
  },
  unlocksWhy: {
    "g-symmetry": "Composing two reflections produces a translation or a rotation, and a figure's symmetries are the rigid motions that map it onto itself.",
    "g-congruence": "Two figures are congruent exactly when a sequence of rigid motions maps one onto the other, which is what SSS, SAS and ASA guarantee.",
    "g-dilations": "A dilation is the next transformation: like a rigid motion it keeps angles, but it multiplies every length by the scale factor."
  },
  beyond: [
    { field: "Linear Algebra", why: "Rotations and reflections about the origin are 2 × 2 orthogonal matrices; rotations have determinant 1 and reflections determinant −1." },
    { field: "Precalculus", why: "Shifting and reflecting graphs, such as y = f(x − h) + k and y = −f(x), are translations and reflections of the plane." },
    { field: "Abstract Algebra", why: "The isometries of the plane form a group under composition, a standard first example of a transformation group." },
    { field: "Physics", why: "Translations and rotations of the coordinate frame describe the same motion from different observers." }
  ],
  mistakes: [
    { wrong: `Rotating <span class="m">(4, 1)</span> by 90° about the origin to <span class="m">(1, −4)</span>.`, fix: `Positive angles are counterclockwise. The rule is <span class="m">(<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, <i>x</i>)</span>, so the image is <span class="m">(−1, 4)</span>. The point <span class="m">(1, −4)</span> is the 90° <i>clockwise</i> image (rule <span class="m">(<i>y</i>, −<i>x</i>)</span>).` },
    { wrong: `Reflecting in <span class="m"><i>y</i> = <i>x</i></span> by changing both signs: <span class="m">(2, 5) ↦ (−2, −5)</span>.`, fix: `Changing both signs is the 180° rotation about the origin. Reflection in <span class="m"><i>y</i> = <i>x</i></span> swaps the coordinates: <span class="m">(2, 5) ↦ (5, 2)</span>.` },
    { wrong: `Assuming every point moves under a reflection.`, fix: `Points on the mirror line are fixed: they are their own images. Likewise the centre of a rotation does not move.` },
    { wrong: `Calling <span class="m">(<i>x</i>, <i>y</i>) ↦ (<i>x</i>, 2<i>y</i>)</span> a rigid motion because the figure "keeps its shape".`, fix: `It doubles every vertical distance, so lengths change. Test any two points with the distance formula before calling a rule rigid.` }
  ],
  practice: [
    { q: `Translate the triangle with vertices <span class="m"><i>A</i>(−1, 2)</span>, <span class="m"><i>B</i>(3, 2)</span>, <span class="m"><i>C</i>(0, −1)</span> by the vector <span class="m">⟨4, −3⟩</span>.`, a: `Add 4 to each <span class="m"><i>x</i></span> and subtract 3 from each <span class="m"><i>y</i></span>: <span class="m"><i>A</i>′(3, −1)</span>, <span class="m"><i>B</i>′(7, −1)</span>, <span class="m"><i>C</i>′(4, −4)</span>.` },
    { q: `Reflect <span class="m"><i>P</i>(2, 5)</span> in the x-axis, the y-axis, the line <span class="m"><i>y</i> = <i>x</i></span> and the line <span class="m"><i>y</i> = −<i>x</i></span>.`, a: `x-axis: <span class="m">(2, −5)</span>. y-axis: <span class="m">(−2, 5)</span>. <span class="m"><i>y</i> = <i>x</i></span>: <span class="m">(5, 2)</span>. <span class="m"><i>y</i> = −<i>x</i></span>: <span class="m">(−5, −2)</span>.` },
    { q: `Triangle <span class="m"><i>A</i>(0, 0)</span>, <span class="m"><i>B</i>(3, 0)</span>, <span class="m"><i>C</i>(0, 4)</span> is mapped by (a) <span class="m">(<i>x</i>, <i>y</i>) ↦ (−<i>y</i>, <i>x</i>)</span> and (b) <span class="m">(<i>x</i>, <i>y</i>) ↦ (<i>x</i>, 2<i>y</i>)</span>. Which rule is a rigid motion?`, a: `(a) gives <span class="m"><i>A</i>′(0, 0)</span>, <span class="m"><i>B</i>′(0, 3)</span>, <span class="m"><i>C</i>′(−4, 0)</span> with sides 3, 4, 5, the same as the original: it is the 90° rotation about the origin. (b) gives <span class="m"><i>C</i>′(0, 8)</span>, so <span class="m"><i>A</i>′<i>C</i>′ = 8 ≠ 4 = <i>AC</i></span>. Rule (b) is not rigid.` },
    { q: `A reflection maps <span class="m"><i>A</i>(1, 3)</span> to <span class="m"><i>A</i>′(5, −1)</span>. Find an equation of the mirror line.`, a: `The mirror is the perpendicular bisector of <span class="ov"><i>AA</i>′</span>. Midpoint <span class="m">(3, 1)</span>; slope of <span class="ov"><i>AA</i>′</span> is <span class="m">−4/4 = −1</span>, so the mirror has slope <span class="m">1</span>: <span class="m"><i>y</i> − 1 = <i>x</i> − 3</span>, that is <span class="m"><i>y</i> = <i>x</i> − 2</span>. Check: <span class="m"><i>A</i></span> and <span class="m"><i>A</i>′</span> are both <span class="m">2√2</span> from the midpoint.` }
  ],
  origin: `Euclid's proof of SAS (<i>Elements</i> I.4, about 300 BCE) works by "superposition", placing one triangle on the other, which is an informal rigid motion. In 1872 Felix Klein's Erlangen Program proposed studying each geometry through the group of transformations that leave its properties unchanged, the point of view behind defining congruence by rigid motions.`
};
