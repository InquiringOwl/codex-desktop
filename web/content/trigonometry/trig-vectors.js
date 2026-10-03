window.ARITH = window.ARITH || {};
ARITH["trig-vectors"] = {
  title: "Vectors: Magnitude, Direction & Components",
  short: "Component form ⟨a, b⟩, magnitude, direction angle, i and j",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Trigonometry · vectors",
  hero: `<span class="m"><span class="c4">‖<b>v</b>‖</span> = √<span class="ov"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup></span> &nbsp;&nbsp; <b>v</b> = ⟨<span class="c4">‖<b>v</b>‖</span> cos <span class="c1"><i>θ</i></span>, <span class="c4">‖<b>v</b>‖</span> sin <span class="c1"><i>θ</i></span>⟩</span>`,
  lede: `A vector is a quantity with a size and a direction, drawn as an arrow. Trigonometry turns the arrow into two numbers, its horizontal and vertical components, and turns the components back into a length and an angle.`,
  plain: `<p>Some quantities need only a size: a temperature, a mass, a distance. These are <b>scalars</b>. Others need a direction as well. "30 newtons" is not enough to describe a push; you also need to know which way it acts. A wind of 40 km/h from the west is a different wind from 40 km/h from the north. Quantities like these are <b>vectors</b>.</p>
<p>We draw a vector as an arrow. The length of the arrow is its size, called the <b>magnitude</b>, and the arrow points in its direction. Where the arrow is drawn does not matter: two arrows with the same length and the same direction are the same vector.</p>
<p>To compute with arrows, slide the arrow so it starts at the origin and read where it ends. If it ends at (<i>a</i>, <i>b</i>), the vector is ⟨<i>a</i>, <i>b</i>⟩: go <i>a</i> across and <i>b</i> up. The Pythagorean Theorem gives the length, and the inverse tangent gives the angle, once you check which quadrant the arrow points into.</p>
<p>Adding vectors means following one arrow and then the other. Multiplying by a number stretches the arrow, and a negative number turns it around.</p>`,
  formal: `<p>A <b>vector</b> is a directed line segment <span class="m"><i>PQ</i></span> from an <b>initial point</b> <span class="m"><i>P</i></span> to a <b>terminal point</b> <span class="m"><i>Q</i></span>; vectors with the same magnitude and direction are <b>equal</b>. For <span class="m"><i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m"><i>Q</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span> the <b>component form</b> and <b>magnitude</b> are</p>
<div class="display"><b>v</b> = ⟨<span class="c2"><i>a</i></span>, <span class="c3"><i>b</i></span>⟩ = ⟨<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>, <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>⟩ = <span class="c2"><i>a</i></span><b>i</b> + <span class="c3"><i>b</i></span><b>j</b>, &nbsp; <b>i</b> = ⟨1, 0⟩, <b>j</b> = ⟨0, 1⟩<br><span class="c4">‖<b>v</b>‖</span> = √<span class="ov"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup></span></div>
<p>The <b>direction angle</b> <span class="m"><span class="c1"><i>θ</i></span></span> is measured counterclockwise from the positive x-axis, <span class="m">0° ≤ <i>θ</i> &lt; 360°</span>. Then <span class="m"><span class="c2"><i>a</i></span> = ‖<b>v</b>‖ cos <i>θ</i></span>, <span class="m"><span class="c3"><i>b</i></span> = ‖<b>v</b>‖ sin <i>θ</i></span> and <span class="m">tan <i>θ</i> = <i>b</i>/<i>a</i></span>. Because <span class="m">tan<sup>−1</sup></span> only returns angles in <span class="m">(−90°, 90°)</span>, fix the quadrant:</p>
<div class="display"><i>a</i> &gt; 0, <i>b</i> ≥ 0: <i>θ</i> = tan<sup>−1</sup>(<i>b</i>/<i>a</i>) &nbsp; · &nbsp; <i>a</i> &lt; 0: <i>θ</i> = tan<sup>−1</sup>(<i>b</i>/<i>a</i>) + 180° &nbsp; · &nbsp; <i>a</i> &gt; 0, <i>b</i> &lt; 0: <i>θ</i> = tan<sup>−1</sup>(<i>b</i>/<i>a</i>) + 360°<br><i>a</i> = 0: <i>θ</i> = 90° if <i>b</i> &gt; 0, 270° if <i>b</i> &lt; 0</div>
<p>Operations work component by component: <span class="m"><b>u</b> + <b>v</b> = ⟨<i>u</i><sub>1</sub> + <i>v</i><sub>1</sub>, <i>u</i><sub>2</sub> + <i>v</i><sub>2</sub>⟩</span>, <span class="m"><i>k</i><b>v</b> = ⟨<i>ka</i>, <i>kb</i>⟩</span> with <span class="m">‖<i>k</i><b>v</b>‖ = |<i>k</i>| ‖<b>v</b>‖</span>, and <span class="m"><b>u</b> − <b>v</b> = <b>u</b> + (−1)<b>v</b></span>. The <b>zero vector</b> is <span class="m"><b>0</b> = ⟨0, 0⟩</span>. For <span class="m"><b>v</b> ≠ <b>0</b></span> the <b>unit vector</b> in its direction is <span class="m"><b>v</b>/‖<b>v</b>‖ = ⟨cos <i>θ</i>, sin <i>θ</i>⟩</span>, of magnitude 1.</p>`,
  legend: [
    { c: "c1", sym: `<b>u</b>, <i>θ</i>`, name: "First vector, direction angle", desc: "The first vector of a sum. With a single vector, amber marks its direction angle from the positive x-axis." },
    { c: "c2", sym: `<b>v</b>, <i>a</i>`, name: "Vector and horizontal component", desc: "The vector being studied, and its horizontal component a = ‖v‖ cos θ (dashed)." },
    { c: "c3", sym: `<i>b</i>`, name: "Vertical component", desc: "The vertical component b = ‖v‖ sin θ (dashed)." },
    { c: "c4", sym: `‖<b>v</b>‖`, name: "Magnitude", desc: "The length of the arrow, √(a² + b²). It is never negative." },
    { c: "c5", sym: `<b>u</b> + <b>v</b>`, name: "Resultant", desc: "The sum of two vectors: follow u, then v." }
  ],
  steps: {
    title: "How to find a vector's components, magnitude and direction",
    items: [
      `From points: subtract initial from terminal, <span class="m"><b>v</b> = ⟨<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>, <i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>⟩</span>. From a magnitude and angle: <span class="m"><b>v</b> = ⟨‖<b>v</b>‖ cos <i>θ</i>, ‖<b>v</b>‖ sin <i>θ</i>⟩</span>.`,
      `Magnitude: <span class="m">‖<b>v</b>‖ = √<span class="ov"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span>. Simplify the radical if an exact answer is wanted.`,
      `Sketch the arrow and name the quadrant from the signs of <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>.`,
      `Compute <span class="m">tan<sup>−1</sup>(<i>b</i>/<i>a</i>)</span>, then fix the quadrant: add 180° when <span class="m"><i>a</i> &lt; 0</span>, add 360° when the result is negative and <span class="m"><i>a</i> &gt; 0</span>.`,
      `Unit vector: divide each component by the magnitude. Check that its magnitude is 1.`,
      `To add, subtract or scale, work on the components, then find the magnitude and direction of the result if they are asked for.`
    ]
  },
  example: {
    prompt: `The vector <span class="m"><b>v</b></span> has initial point <span class="m"><i>P</i>(4, 1)</span> and terminal point <span class="m"><i>Q</i>(−2, −7)</span>. Write <span class="m"><b>v</b></span> in component form and in terms of <span class="m"><b>i</b></span> and <span class="m"><b>j</b></span>, then find its magnitude, its direction angle to the nearest tenth of a degree, and the unit vector in its direction.`,
    lines: [
      { math: `<span class="m"><b>v</b> = ⟨−2 − 4, −7 − 1⟩ = ⟨<span class="c2">−6</span>, <span class="c3">−8</span>⟩ = <span class="c2">−6</span><b>i</b> <span class="c3">− 8</span><b>j</b></span>`, note: "Terminal minus initial, x with x and y with y." },
      { math: `<span class="m"><span class="c4">‖<b>v</b>‖</span> = √<span class="ov">(−6)<sup>2</sup> + (−8)<sup>2</sup></span> = √<span class="ov">100</span> = <span class="c4">10</span></span>`, note: "The Pythagorean Theorem on the two components." },
      { math: `<span class="m">tan<sup>−1</sup>(−8/−6) = tan<sup>−1</sup>(4/3) ≈ 53.13°</span>`, note: "This is the calculator's answer. It points into Quadrant I, but v does not." },
      { math: `<span class="m"><i>a</i> &lt; 0, <i>b</i> &lt; 0 ⇒ Quadrant III</span>`, note: "Both components are negative, so the arrow points down and to the left." },
      { math: `<span class="m"><span class="c1"><i>θ</i></span> ≈ 53.13° + 180° = 233.13° ≈ 233.1°</span>`, note: "Adding 180 degrees turns the calculator's angle around into Quadrant III." },
      { math: `<span class="m"><b>v</b>/‖<b>v</b>‖ = ⟨−6/10, −8/10⟩ = ⟨−3/5, −4/5⟩</span>`, note: "Check: (3/5)² + (4/5)² = 9/25 + 16/25 = 1." }
    ],
    answer: `<span class="m"><b>v</b> = ⟨−6, −8⟩ = −6<b>i</b> − 8<b>j</b></span>, <span class="m">‖<b>v</b>‖ = <span class="c5">10</span></span>, <span class="m"><i>θ</i> ≈ <span class="c5">233.1°</span></span>, unit vector <span class="m">⟨−3/5, −4/5⟩</span>.`
  },
  why: `<p>Forces, velocities, displacements, electric fields and the motion of anything in a game or animation are all vectors. Every one of them is handled the same way: break it into components, add or scale the components, then rebuild a magnitude and a direction. The quadrant check in the last step is where most errors happen, which is why it gets a step of its own.</p>
<p>The page that follows uses this to solve force and navigation problems, and the dot product then measures the angle between two vectors.</p>`,
  careers: [
    { role: "Structural engineer", use: "Resolves loads on beams and cables into horizontal and vertical components to check that a structure balances." },
    { role: "Pilot", use: "Combines the aircraft's air velocity with the wind vector to get the true track over the ground." },
    { role: "Game developer", use: "Stores positions and velocities as component pairs and normalises direction vectors for movement and aiming." },
    { role: "Surveyor", use: "Converts measured distances and bearings into north and east components to close a traverse." },
    { role: "Robotics engineer", use: "Plans a robot arm's motion by adding displacement vectors for each joint." },
    { role: "Meteorologist", use: "Splits wind into east-west and north-south components to average it and draw wind maps." }
  ],
  life: [
    "Walking 3 blocks east and 4 blocks north leaves you 5 blocks from where you started, in a direction you can name",
    "A swimmer crossing a river ends up downstream because the current adds a second velocity",
    "Pulling a wagon by its handle, only part of the pull moves the wagon forward",
    "A map app's arrow shows your speed and heading together as one vector",
    "Two people pushing a stalled car at slightly different angles add their forces"
  ],
  fields: [
    { name: "Physics", use: "Displacement, velocity, acceleration and force are vectors added by components." },
    { name: "Computer graphics", use: "Positions, directions and normals are vectors; unit vectors set lighting and movement." },
    { name: "Navigation", use: "Courses and winds are combined as vectors and converted to bearings." },
    { name: "Engineering", use: "Statics problems resolve every load into components before balancing them." }
  ],
  prereqWhy: {
    "trig-inverse": "The direction angle comes from tan⁻¹(b/a), and knowing that its range is only (−90°, 90°) is why the quadrant must be fixed by hand.",
    "trig-any-angle": "The components ‖v‖cos θ and ‖v‖sin θ are the point (x, y) on the terminal side at distance r = ‖v‖, with signs set by the quadrant."
  },
  unlocksWhy: {
    "trig-vector-apps": "Resultant forces, equilibrium and wind problems are sums of vectors, done by components or by the law of cosines.",
    "trig-dot-product": "The dot product multiplies two vectors in component form and measures the angle between them."
  },
  beyond: [
    { field: "Physics (Mechanics)", why: "Every force diagram and motion problem in mechanics adds vectors by components." },
    { field: "Calculus III", why: "Vectors move into three dimensions with a k component, and vector-valued functions describe curves and motion in space." },
    { field: "Linear Algebra", why: "Vectors become lists of n numbers, and adding and scaling them are the two operations the whole subject is built on." },
    { field: "Computer graphics", why: "Moving, scaling and lighting objects are all vector operations on screen coordinates." }
  ],
  mistakes: [
    { wrong: `<span class="m"><b>v</b> = ⟨−4, 3⟩</span> has <span class="m"><i>θ</i> = tan<sup>−1</sup>(3/−4) ≈ −36.9°</span>`, fix: `That angle points into Quadrant IV, but <span class="m">⟨−4, 3⟩</span> points into Quadrant II. When <span class="m"><i>a</i> &lt; 0</span>, add 180°: <span class="m"><i>θ</i> ≈ 143.1°</span>.` },
    { wrong: `The vector from <span class="m"><i>P</i>(1, 5)</span> to <span class="m"><i>Q</i>(4, 2)</span> is <span class="m">⟨1 − 4, 5 − 2⟩ = ⟨−3, 3⟩</span>`, fix: `Subtract initial from terminal: <span class="m">⟨4 − 1, 2 − 5⟩ = ⟨3, −3⟩</span>. The order sets the direction of the arrow.` },
    { wrong: `<span class="m">‖⟨3, −4⟩‖ = 3 − 4 = −1</span> or <span class="m">‖<b>u</b> + <b>v</b>‖ = ‖<b>u</b>‖ + ‖<b>v</b>‖</span>`, fix: `Magnitude is <span class="m">√<span class="ov"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span>, here 5, and is never negative. Magnitudes add only when the vectors point the same way; in general <span class="m">‖<b>u</b> + <b>v</b>‖ ≤ ‖<b>u</b>‖ + ‖<b>v</b>‖</span>.` },
    { wrong: `<span class="m">−2⟨3, −1⟩ = ⟨−6, −1⟩</span>`, fix: `The scalar multiplies every component: <span class="m">⟨−6, 2⟩</span>. The result is twice as long and points the opposite way.` }
  ],
  practice: [
    { q: `Write the vector from <span class="m"><i>P</i>(1, 2)</span> to <span class="m"><i>Q</i>(4, 6)</span> in component form and find its magnitude.`, a: `<span class="m">⟨4 − 1, 6 − 2⟩ = ⟨3, 4⟩</span>, <span class="m">‖<b>v</b>‖ = √<span class="ov">9 + 16</span> = 5</span>.` },
    { q: `For <span class="m"><b>u</b> = ⟨3, −2⟩</span> and <span class="m"><b>v</b> = ⟨−1, 5⟩</span>, find <span class="m">2<b>u</b> − 3<b>v</b></span> in terms of <span class="m"><b>i</b></span> and <span class="m"><b>j</b></span>, and find <span class="m">‖<b>u</b> + <b>v</b>‖</span>.`, a: `<span class="m">2<b>u</b> − 3<b>v</b> = ⟨6, −4⟩ − ⟨−3, 15⟩ = ⟨9, −19⟩ = 9<b>i</b> − 19<b>j</b></span>. <span class="m"><b>u</b> + <b>v</b> = ⟨2, 3⟩</span>, so <span class="m">‖<b>u</b> + <b>v</b>‖ = √13</span>.` },
    { q: `A vector has magnitude 20 and direction angle 210°. Find its components exactly and to two decimal places.`, a: `<span class="m">⟨20 cos 210°, 20 sin 210°⟩ = ⟨20(−√3/2), 20(−1/2)⟩ = ⟨−10√3, −10⟩ ≈ ⟨−17.32, −10⟩</span>.` },
    { q: `Let <span class="m"><b>v</b> = −4<b>i</b> + 3<b>j</b></span>. Find its direction angle to the nearest tenth of a degree, the unit vector in its direction, and the vector of magnitude 15 in the same direction.`, a: `<span class="m">tan<sup>−1</sup>(3/−4) ≈ −36.87°</span>; <span class="m"><i>a</i> &lt; 0</span>, so <span class="m"><i>θ</i> ≈ 143.1°</span>. <span class="m">‖<b>v</b>‖ = 5</span>, unit vector <span class="m">⟨−4/5, 3/5⟩</span>, and <span class="m">15⟨−4/5, 3/5⟩ = ⟨−12, 9⟩</span>.` }
  ],
  origin: `Simon Stevin's statics of 1586 showed how a weight on an inclined plane is held by forces along and across the slope, an early triangle of forces, and Newton stated the parallelogram rule for combining forces in the Principia (1687). The word "vector" comes from William Rowan Hamilton, who used it in the 1840s for the part of a quaternion that has a direction. In the 1880s J. Willard Gibbs and Oliver Heaviside, working independently, separated that part out into the vector algebra used today.`
};
