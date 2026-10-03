window.ARITH = window.ARITH || {};
ARITH["trig-any-angle"] = {
  title: "Trigonometric Functions of Any Angle",
  short: "Six functions from a point (x, y) and its distance r",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "The circular functions · any angle",
  hero: `<span class="m">sin <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c3"><i>y</i></span><span class="c4"><i>r</i></span></span> &nbsp; cos <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c2"><i>x</i></span><span class="c4"><i>r</i></span></span> &nbsp; tan <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span> &nbsp; <span class="c4"><i>r</i></span> = √<span class="ov"><span class="c2"><i>x</i></span><sup>2</sup> + <span class="c3"><i>y</i></span><sup>2</sup></span></span>`,
  lede: `Pick any point <span class="m">(<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>)</span> on the terminal side of an angle <span class="m c1"><i>θ</i></span>. Its distance <span class="m c4"><i>r</i></span> from the origin and its two coordinates give all six trigonometric functions, with the right signs, for any angle at all.`,
  plain: `<p>A right triangle only holds angles between 0° and 90°. To handle 150°, 300° or −45°, put the angle in standard position: vertex at the origin, initial side along the positive <span class="m"><i>x</i></span>-axis. Then pick any point on the terminal side other than the origin.</p>
<p>That point has an <span class="m c2"><i>x</i></span>-coordinate, a <span class="m c3"><i>y</i></span>-coordinate and a distance <span class="m c4"><i>r</i></span> from the origin. Sine is <span class="m"><span class="c3"><i>y</i></span>/<span class="c4"><i>r</i></span></span>, cosine is <span class="m"><span class="c2"><i>x</i></span>/<span class="c4"><i>r</i></span></span>, and tangent is <span class="m"><span class="c3"><i>y</i></span>/<span class="c2"><i>x</i></span></span>. Their reciprocals are cosecant, secant and cotangent. In the first quadrant these are exactly the SOH-CAH-TOA ratios. Elsewhere a coordinate can be negative, so a value can be negative too.</p>
<p>The distance <span class="m c4"><i>r</i></span> is always positive. So the sign of each function depends only on the signs of <span class="m c2"><i>x</i></span> and <span class="m c3"><i>y</i></span>, which depend only on the quadrant. The size of each value depends only on the <b>reference angle</b>: the acute angle between the terminal side and the <span class="m"><i>x</i></span>-axis. To evaluate a function at any angle, find the value at the reference angle and attach the sign of the quadrant.</p>
<p>When the terminal side lies on an axis, one coordinate is 0. Any function with that coordinate in its denominator is undefined there. For example <span class="m">tan 90°</span> would need division by <span class="m c2"><i>x</i> = 0</span>.</p>`,
  formal: `<p>Let <span class="m c1"><i>θ</i></span> be an angle in standard position and <span class="m">(<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>)</span> any point other than the origin on its terminal side, with <span class="m"><span class="c4"><i>r</i></span> = √<span class="ov"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span> &gt; 0</span>. Then</p>
<div class="display">sin <i>θ</i> = <span class="fr"><span class="c3"><i>y</i></span><span class="c4"><i>r</i></span></span> &nbsp; cos <i>θ</i> = <span class="fr"><span class="c2"><i>x</i></span><span class="c4"><i>r</i></span></span> &nbsp; tan <i>θ</i> = <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span> <span class="dim">(<i>x</i> ≠ 0)</span><br>csc <i>θ</i> = <span class="fr"><span class="c4"><i>r</i></span><span class="c3"><i>y</i></span></span> <span class="dim">(<i>y</i> ≠ 0)</span> &nbsp; sec <i>θ</i> = <span class="fr"><span class="c4"><i>r</i></span><span class="c2"><i>x</i></span></span> <span class="dim">(<i>x</i> ≠ 0)</span> &nbsp; cot <i>θ</i> = <span class="fr"><span class="c2"><i>x</i></span><span class="c3"><i>y</i></span></span> <span class="dim">(<i>y</i> ≠ 0)</span></div>
<p>The values do not depend on which point is chosen: another point on the same terminal side is <span class="m">(<i>kx</i>, <i>ky</i>)</span> with <span class="m"><i>k</i> &gt; 0</span>, its distance is <span class="m"><i>kr</i></span>, and every ratio is unchanged. With <span class="m"><i>r</i> = 1</span> these are the unit-circle definitions. Since <span class="m">|<i>x</i>| ≤ <i>r</i></span> and <span class="m">|<i>y</i>| ≤ <i>r</i></span>, sine and cosine lie in <span class="m">[−1, 1]</span>. <b>Undefined values:</b> tan and sec when <span class="m"><i>x</i> = 0</span> (<span class="m"><i>θ</i> = 90° + 180°<i>k</i></span>), cot and csc when <span class="m"><i>y</i> = 0</span> (<span class="m"><i>θ</i> = 180°<i>k</i></span>).</p>
<p><b>Signs by quadrant</b> (often remembered as ASTC): in QI all six are positive; in QII only sin and csc; in QIII only tan and cot; in QIV only cos and sec.</p>
<p>The <b>reference angle</b> <span class="m c1"><i>θ</i>′</span> of a non-quadrantal angle is the positive acute angle between its terminal side and the <span class="m"><i>x</i></span>-axis. For <span class="m"><i>θ</i></span> in <span class="m">[0°, 360°)</span>: QI <span class="m"><i>θ</i>′ = <i>θ</i></span>; QII <span class="m"><i>θ</i>′ = 180° − <i>θ</i></span> (<span class="m">π − <i>θ</i></span>); QIII <span class="m"><i>θ</i>′ = <i>θ</i> − 180°</span> (<span class="m"><i>θ</i> − π</span>); QIV <span class="m"><i>θ</i>′ = 360° − <i>θ</i></span> (<span class="m">2π − <i>θ</i></span>). Other angles are first replaced by a coterminal angle in that range. For each of the six functions, <span class="m"><i>f</i>(<i>θ</i>) = ±<i>f</i>(<i>θ</i>′)</span>, with the sign of <span class="m"><i>f</i></span> in the quadrant of <span class="m"><i>θ</i></span>. For example <span class="m">cos 210° = −cos 30° = −√3/2</span> and <span class="m">tan(5π/3) = −tan(π/3) = −√3</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Angle", desc: "The angle in standard position, measured counterclockwise from the positive x-axis (clockwise if negative)." },
    { c: "c1", sym: `<i>θ</i>′`, name: "Reference angle", desc: "The acute angle between the terminal side and the x-axis; dashed in the lab. It fixes the size of each value." },
    { c: "c2", sym: `<i>x</i>`, name: "x-coordinate", desc: "Horizontal coordinate of the chosen point. Its sign sets the sign of cos, sec and, with y, tan and cot." },
    { c: "c3", sym: `<i>y</i>`, name: "y-coordinate", desc: "Vertical coordinate of the chosen point. Its sign sets the sign of sin and csc." },
    { c: "c4", sym: `<i>r</i>`, name: "Distance r", desc: "Distance from the origin to the point, √(x² + y²). Always positive." }
  ],
  steps: {
    title: "How to evaluate a trigonometric function of any angle exactly",
    items: [
      `Replace the angle by a coterminal angle in <span class="m">[0°, 360°)</span> or <span class="m">[0, 2π)</span> by adding or subtracting full turns.`,
      `If the terminal side lies on an axis, read the point <span class="m">(±1, 0)</span> or <span class="m">(0, ±1)</span> and use the definitions; a zero denominator means undefined.`,
      `Otherwise name the quadrant and find the reference angle <span class="m c1"><i>θ</i>′</span>, always measured to the <span class="m"><i>x</i></span>-axis.`,
      `Find the value of the function at <span class="m c1"><i>θ</i>′</span> from the special triangles (30°, 45°, 60°) or the unit circle.`,
      `Attach the sign the function has in that quadrant (ASTC).`
    ]
  },
  example: {
    prompt: `Given <span class="m">tan <i>θ</i> = −2</span> and <span class="m">sin <i>θ</i> &gt; 0</span>, find the other five trigonometric functions of <span class="m c1"><i>θ</i></span> exactly.`,
    lines: [
      { math: `<span class="m">tan <i>θ</i> &lt; 0, &nbsp;sin <i>θ</i> &gt; 0 ⇒ <i>θ</i> in QII</span>`, note: "Tangent is negative in QII and QIV; sine is positive in QI and QII. Only QII has both." },
      { math: `<span class="m">tan <i>θ</i> = <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span> = <span class="fr"><span class="c3">2</span><span class="c2">−1</span></span> ⇒ (<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>) = (<span class="c2">−1</span>, <span class="c3">2</span>)</span>`, note: "In QII x is negative and y is positive, so write −2 as 2 over −1 and use the point (−1, 2)." },
      { math: `<span class="m"><span class="c4"><i>r</i></span> = √<span class="ov">(−1)<sup>2</sup> + 2<sup>2</sup></span> = <span class="c4">√5</span></span>`, note: "The distance from the origin is always positive." },
      { math: `<span class="m">sin <i>θ</i> = <span class="fr"><span class="c3">2</span><span class="c4">√5</span></span> = <span class="fr"><span>2√5</span><span>5</span></span>, &nbsp; csc <i>θ</i> = <span class="fr"><span class="c4">√5</span><span class="c3">2</span></span></span>`, note: "sin is y/r; rationalise by multiplying top and bottom by √5. csc is its reciprocal r/y." },
      { math: `<span class="m">cos <i>θ</i> = <span class="fr"><span class="c2">−1</span><span class="c4">√5</span></span> = −<span class="fr"><span>√5</span><span>5</span></span>, &nbsp; sec <i>θ</i> = <span class="fr"><span class="c4">√5</span><span class="c2">−1</span></span> = −√5</span>`, note: "cos is x/r and sec is r/x; both are negative in QII." },
      { math: `<span class="m">cot <i>θ</i> = <span class="fr"><span class="c2"><i>x</i></span><span class="c3"><i>y</i></span></span> = <span class="fr"><span class="c2">−1</span><span class="c3">2</span></span> = −<span class="fr"><span>1</span><span>2</span></span></span>`, note: "cot is the reciprocal of tan: 1/(−2) = −1/2." }
    ],
    answer: `<span class="m c5">sin <i>θ</i> = 2√5/5</span>, <span class="m c5">cos <i>θ</i> = −√5/5</span>, <span class="m c5">csc <i>θ</i> = √5/2</span>, <span class="m c5">sec <i>θ</i> = −√5</span>, <span class="m c5">cot <i>θ</i> = −1/2</span>`
  },
  why: `<p>Angles in the real world are not all acute. A robot arm turns 135°, a wheel turns through 500°, a satellite's position is measured all the way around its orbit. Defining the six functions from a point and its distance gives each of them a value, with a sign, at every angle where the denominator is not zero.</p>
<p>The reference-angle method means you never need a separate table for large angles: the values at 30°, 45° and 60°, plus the quadrant signs, give every multiple of 30° and 45° exactly. The same idea, a size from the reference angle and a sign from the quadrant, runs through vectors, polar coordinates and the Law of Sines and Law of Cosines for obtuse triangles.</p>`,
  careers: [
    { role: "Robotics engineer", use: "Converts joint angles anywhere from 0° to 360° into x and y positions of a robot arm with r cos θ and r sin θ, signs included." },
    { role: "Surveyor", use: "Turns a measured distance and an azimuth in any quadrant into north and east coordinate offsets for a property boundary." },
    { role: "Game developer", use: "Moves sprites and aims cameras at any heading by computing the cosine and sine of angles past 90°, where the signs flip." },
    { role: "Electrical engineer", use: "Reads the sign of the cosine and sine of a phase angle to tell whether a circuit's current leads or lags its voltage." },
    { role: "Navigator", use: "Resolves a ship's course at any bearing into east-west and north-south components, with negative values for west and south." },
    { role: "Structural engineer", use: "Resolves forces acting at obtuse angles into horizontal and vertical components, where a negative cosine means the force points backward." }
  ],
  life: [
    "A clock hand past the three, where its horizontal position turns negative",
    "The position of a seat on a Ferris wheel below the axle",
    "A steering angle to the left versus to the right",
    "Walking directions given as a distance and a compass heading",
    "The height of a bicycle pedal as it goes around"
  ],
  fields: [
    { name: "Physics", use: "Components of forces, velocities and fields at any angle are r cos θ and r sin θ with signs." },
    { name: "Computer graphics", use: "Rotations by any angle use cos θ and sin θ, positive or negative, in every frame." },
    { name: "Navigation and surveying", use: "Courses and bearings in all four quadrants become signed coordinate offsets." },
    { name: "Astronomy", use: "Positions on an orbit or on the sky are found from angles measured all the way around a circle." }
  ],
  prereqWhy: {
    "trig-unit-circle": "Dividing x, y and r by r moves the point to the unit circle, so these definitions agree with cos t and sin t there.",
    "trig-six-ratios": "In the first quadrant x, y and r are the adjacent side, opposite side and hypotenuse, and the values at 30°, 45° and 60° are the reference values used here."
  },
  unlocksWhy: {
    "trig-fundamental-ids": "Because x² + y² = r² for every point, the identities like sin²θ + cos²θ = 1 hold for every angle, not just acute ones.",
    "trig-law-sines": "Obtuse triangles need the sine of an angle between 90° and 180°, which is positive and equal to the sine of its reference angle.",
    "trig-vectors": "A vector of length r at direction θ has components r cos θ and r sin θ, with the signs of its quadrant.",
    "trig-polar-coords": "The polar point (r, θ) is the point at distance r on the terminal side of θ, so x = r cos θ and y = r sin θ."
  },
  beyond: [
    { field: "Precalculus", why: "Graphs and inverses of the trigonometric functions rely on their signs and values in every quadrant." },
    { field: "Physics (Mechanics)", why: "Resolving forces and velocities at any angle into signed components uses these definitions directly." },
    { field: "Calculus I", why: "Limits and derivatives of sine and cosine are computed for all real inputs, not only acute angles." },
    { field: "Computer graphics", why: "Rotation matrices use cos θ and sin θ for any angle of turn." }
  ],
  mistakes: [
    { wrong: `Reference angle of <span class="m">120°</span> taken as <span class="m">30°</span>, measured to the <span class="m"><i>y</i></span>-axis.`, fix: `The reference angle is always measured to the <span class="m"><i>x</i></span>-axis: <span class="m">180° − 120° = 60°</span>.` },
    { wrong: `<span class="m">cos 150° = <span class="fr"><span>√3</span><span>2</span></span></span>`, fix: `The size comes from the reference angle 30°, but 150° is in QII where <span class="m"><i>x</i> &lt; 0</span>. So <span class="m">cos 150° = −√3/2</span>.` },
    { wrong: `For the point <span class="m">(−3, −4)</span>, <span class="m"><i>r</i> = −5</span>.`, fix: `<span class="m"><i>r</i> = √<span class="ov">9 + 16</span> = 5</span>. A distance is never negative; only <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> carry signs.` },
    { wrong: `<span class="m">tan 90° = 0</span>`, fix: `At 90° the point is <span class="m">(0, 1)</span>, so <span class="m">tan 90° = 1/0</span> is undefined. It is <span class="m">cot 90° = 0/1</span> that equals 0.` }
  ],
  practice: [
    { q: `The terminal side of <span class="m"><i>θ</i></span> passes through <span class="m">(−8, 15)</span>. Find <span class="m"><i>r</i></span> and all six trigonometric functions of <span class="m"><i>θ</i></span>.`,
      a: `<span class="m"><i>r</i> = √<span class="ov">64 + 225</span> = 17</span>. <span class="m">sin <i>θ</i> = 15/17</span>, <span class="m">cos <i>θ</i> = −8/17</span>, <span class="m">tan <i>θ</i> = −15/8</span>, <span class="m">csc <i>θ</i> = 17/15</span>, <span class="m">sec <i>θ</i> = −17/8</span>, <span class="m">cot <i>θ</i> = −8/15</span>.` },
    { q: `Find each exact value with a reference angle: <span class="m">sin 300°</span>, <span class="m">cos(5π/4)</span>, <span class="m">tan(−π/6)</span>, <span class="m">sec 495°</span>.`,
      a: `300° is in QIV with <span class="m"><i>θ</i>′ = 60°</span>: <span class="m">sin 300° = −√3/2</span>. 5π/4 is in QIII with <span class="m"><i>θ</i>′ = π/4</span>: <span class="m">cos(5π/4) = −√2/2</span>. <span class="m">−π/6</span> is coterminal with <span class="m">11π/6</span> in QIV: <span class="m">tan(−π/6) = −√3/3</span>. <span class="m">495° − 360° = 135°</span> in QII with <span class="m"><i>θ</i>′ = 45°</span>: <span class="m">sec 495° = −√2</span>.` },
    { q: `Which of <span class="m">sec 90°</span>, <span class="m">tan 270°</span>, <span class="m">cot 180°</span>, <span class="m">csc 270°</span> are undefined? Give the value of the others.`,
      a: `At 90° and 270° the point is <span class="m">(0, ±1)</span>, so <span class="m">sec 90°</span> and <span class="m">tan 270°</span> divide by <span class="m"><i>x</i> = 0</span>: undefined. At 180° the point is <span class="m">(−1, 0)</span>, so <span class="m">cot 180° = −1/0</span> is undefined. <span class="m">csc 270° = 1/(−1) = −1</span>.` },
    { q: `Given <span class="m">cos <i>θ</i> = 2/3</span> and <span class="m">tan <i>θ</i> &lt; 0</span>, find the other five functions exactly.`,
      a: `cos is positive and tan negative only in QIV. Take <span class="m"><i>x</i> = 2</span>, <span class="m"><i>r</i> = 3</span>, so <span class="m"><i>y</i> = −√<span class="ov">9 − 4</span> = −√5</span>. <span class="m">sin <i>θ</i> = −√5/3</span>, <span class="m">tan <i>θ</i> = −√5/2</span>, <span class="m">csc <i>θ</i> = −3√5/5</span>, <span class="m">sec <i>θ</i> = 3/2</span>, <span class="m">cot <i>θ</i> = −2√5/5</span>.` }
  ],
  origin: `Georg Joachim Rheticus's <i>Canon doctrinae triangulorum</i> (1551) was the first table of all six functions, still defined from right triangles. Treating them as signed numbers for angles of any size came with coordinate methods in the 17th and 18th centuries. Leonhard Euler's <i>Introductio in analysin infinitorum</i> (1748) worked with sines and cosines of arcs of any size on a circle of radius 1, with their signs, and made that convention standard.`
};
