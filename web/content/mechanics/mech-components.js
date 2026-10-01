window.ARITH = window.ARITH || {};

ARITH["mech-components"] = {
  title: "Vector Components & Unit Vectors",
  short: "Split vectors into x and y parts, add them exactly",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · vectors",
  hero: `<span class="m"><span class="c1"><b>A</b></span> = <span class="c2"><i>A</i><sub>x</sub></span> î + <span class="c3"><i>A</i><sub>y</sub></span> ĵ &nbsp;&nbsp; <span class="c2"><i>A</i><sub>x</sub> = <i>A</i> cos <span class="c4"><i>θ</i></span></span>, &nbsp;<span class="c3"><i>A</i><sub>y</sub> = <i>A</i> sin <span class="c4"><i>θ</i></span></span></span>`,
  lede: `Any vector in a plane is the sum of an <span class="c2">x part</span> and a <span class="c3">y part</span>. Working with those two numbers turns vector addition into ordinary arithmetic.`,
  plain: `<p>Drawing arrows to scale is slow and only as accurate as your ruler. The fix is to describe each vector by how far it reaches along x and how far along y. Those two signed numbers are its <b>components</b>. A walk of 5 m at 53° north of east is the same as 3 m east plus 4 m north, so its components are 3 m and 4 m.</p>
<p>To go from magnitude and direction to components, use the right triangle the vector makes with the axes. If <span class="m"><i>θ</i></span> is measured counterclockwise from the +x axis, the x component is <span class="m"><i>A</i> cos <i>θ</i></span> and the y component is <span class="m"><i>A</i> sin <i>θ</i></span>. The signs take care of themselves: a vector pointing left has a negative x component.</p>
<p>To go back, use the Pythagorean theorem for the magnitude and the inverse tangent for the angle. The calculator's tan⁻¹ only returns angles between −90° and +90°, so when the x component is negative you must add 180°.</p>
<p>The <b>unit vectors</b> î and ĵ are arrows of length 1 (no units) pointing along +x and +y. Writing <span class="m"><b>A</b> = 3 î + 4 ĵ</span> m says "3 m along x plus 4 m along y". To add vectors, add their x components and their y components separately. A third unit vector k̂ along +z handles three dimensions.</p>`,
  formal: `<p>In a right-handed Cartesian system with unit vectors <span class="m">î, ĵ, k̂</span>, every vector has a unique <b>component form</b></p>
<div class="display"><b>A</b> = <i>A</i><sub>x</sub> î + <i>A</i><sub>y</sub> ĵ + <i>A</i><sub>z</sub> k̂, &nbsp;&nbsp; <i>A</i> = √<span style="text-decoration:overline"><i>A</i><sub>x</sub><sup>2</sup> + <i>A</i><sub>y</sub><sup>2</sup> + <i>A</i><sub>z</sub><sup>2</sup></span><br>in the plane: &nbsp;<i>A</i><sub>x</sub> = <i>A</i> cos <i>θ</i><sub>A</sub>, &nbsp;<i>A</i><sub>y</sub> = <i>A</i> sin <i>θ</i><sub>A</sub>, &nbsp;tan <i>θ</i><sub>A</sub> = <i>A</i><sub>y</sub>/<i>A</i><sub>x</sub></div>
<p>Here <span class="m"><i>θ</i><sub>A</sub></span> is the <b>direction angle</b>, measured counterclockwise from the +x axis. The components are scalars with units and signs; the <b>vector components</b> are <span class="m"><i>A</i><sub>x</sub>î</span> and <span class="m"><i>A</i><sub>y</sub>ĵ</span>. Since <span class="m">tan<sup>−1</sup></span> has range <span class="m">(−90°, 90°)</span>, the angle is <span class="m">tan<sup>−1</sup>(<i>A</i><sub>y</sub>/<i>A</i><sub>x</sub>)</span> if <span class="m"><i>A</i><sub>x</sub> &gt; 0</span> and that value plus 180° if <span class="m"><i>A</i><sub>x</sub> &lt; 0</span>; if <span class="m"><i>A</i><sub>x</sub> = 0</span> it is 90° or 270°.</p>
<p>Vector operations act component by component: <span class="m"><b>A</b> + <b>B</b> = (<i>A</i><sub>x</sub> + <i>B</i><sub>x</sub>)î + (<i>A</i><sub>y</sub> + <i>B</i><sub>y</sub>)ĵ + (<i>A</i><sub>z</sub> + <i>B</i><sub>z</sub>)k̂</span> and <span class="m"><i>α</i><b>A</b> = <i>αA</i><sub>x</sub>î + <i>αA</i><sub>y</sub>ĵ + <i>αA</i><sub>z</sub>k̂</span>. The <b>unit vector</b> in the direction of a nonzero <span class="m"><b>A</b></span> is <span class="m"><b>Â</b> = <b>A</b>/<i>A</i></span>, which is dimensionless with magnitude 1.</p>`,
  legend: [
    { c: "c1", sym: `<b>A</b>`, name: "Vector", desc: "The arrow itself, with magnitude A and a direction." },
    { c: "c2", sym: `<i>A</i><sub>x</sub>`, name: "x-component", desc: "How far the vector reaches along x: A cos θ. Negative if it points left." },
    { c: "c3", sym: `<i>A</i><sub>y</sub>`, name: "y-component", desc: "How far the vector reaches along y: A sin θ. Negative if it points down." },
    { c: "c4", sym: `<i>θ</i>`, name: "Direction angle", desc: "Measured counterclockwise from the +x axis, from 0° up to 360°." }
  ],
  steps: { title: "How to add vectors by components", items: [
    `Draw a sketch with axes. For each vector find its <span class="c4">direction angle</span> <span class="m"><i>θ</i></span> counterclockwise from +x (convert "30° west of north" to 120°).`,
    `Resolve each vector: <span class="m c2"><i>A</i><sub>x</sub> = <i>A</i> cos <i>θ</i></span>, <span class="m c3"><i>A</i><sub>y</sub> = <i>A</i> sin <i>θ</i></span>. Check the signs against the sketch.`,
    `Add all the x components to get <span class="m"><i>R</i><sub>x</sub></span> and all the y components to get <span class="m"><i>R</i><sub>y</sub></span>.`,
    `Magnitude: <span class="m"><i>R</i> = √<span style="text-decoration:overline"><i>R</i><sub>x</sub><sup>2</sup> + <i>R</i><sub>y</sub><sup>2</sup></span></span>.`,
    `Direction: <span class="m"><i>θ</i><sub>R</sub> = tan<sup>−1</sup>(<i>R</i><sub>y</sub>/<i>R</i><sub>x</sub>)</span>, adding 180° if <span class="m"><i>R</i><sub>x</sub> &lt; 0</span>.`,
    `Write the answer both ways, as <span class="m"><i>R</i><sub>x</sub>î + <i>R</i><sub>y</sub>ĵ</span> and as a magnitude with a direction, and check it against the sketch.`
  ] },
  example: {
    prompt: `A hiker walks 250 m at 35.0° north of east, then 180 m at 30.0° west of north. Find her total displacement.`,
    lines: [
      { math: `<span class="m"><i>θ</i><sub>A</sub> = 35.0°, &nbsp;<i>θ</i><sub>B</sub> = 90.0° + 30.0° = 120.0°</span>`, note: "Direction angles counterclockwise from east (+x)." },
      { math: `<span class="m"><b>A</b> = (250 cos 35.0°)î + (250 sin 35.0°)ĵ = 204.8î + 143.4ĵ m</span>`, note: "Both components positive: first quadrant." },
      { math: `<span class="m"><b>B</b> = (180 cos 120°)î + (180 sin 120°)ĵ = −90.0î + 155.9ĵ m</span>`, note: "The negative x component means the second leg heads partly west." },
      { math: `<span class="m"><b>R</b> = (204.8 − 90.0)î + (143.4 + 155.9)ĵ = 114.8î + 299.3ĵ m</span>`, note: "Add x with x and y with y." },
      { math: `<span class="m"><i>R</i> = √<span style="text-decoration:overline">114.8<sup>2</sup> + 299.3<sup>2</sup></span> m = 321 m</span>`, note: "Pythagorean theorem." },
      { math: `<span class="m"><i>θ</i><sub>R</sub> = tan<sup>−1</sup>(299.3/114.8) = 69.0°</span>`, note: "R_x > 0, so no 180° correction is needed." },
      { math: `<span class="m">70 m ≤ 321 m ≤ 430 m ✓</span>`, note: "Sanity check: the result lies between the difference and the sum of the two legs, and points between the two leg directions." }
    ],
    answer: `<span class="m"><b>R</b> = 115î + 299ĵ m</span>, a displacement of <span class="m">321 m</span> at <span class="m">69.0°</span> counterclockwise from east (21.0° east of north).`
  },
  why: `<p>Components are how physics actually computes with vectors. Newton's second law <span class="m">Σ<b>F</b> = <i>m</i><b>a</b></span> is solved as two or three separate equations, one per axis. Projectile motion becomes simple once you see that the horizontal and vertical components of the motion are independent.</p>
<p>The same idea runs every navigation, graphics and engineering program: a vector is stored as a list of components, and adding, scaling and rotating vectors becomes arithmetic on those numbers. Unit vector notation also makes the dot and cross products straightforward to compute.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Resolves the forces on a bracket into horizontal and vertical components to size the bolts that hold it." },
    { role: "Game developer", use: "Stores positions and velocities as x, y, z components and updates them every frame." },
    { role: "Pilot", use: "Splits the wind into headwind and crosswind components along the runway to check landing limits." },
    { role: "Civil engineer", use: "Finds the horizontal thrust and vertical load that an angled cable or strut puts on its supports." },
    { role: "Robotics engineer", use: "Converts a target position into component displacements for each axis of a robot arm." },
    { role: "Sports biomechanist", use: "Splits a jumper's take-off velocity into horizontal and vertical components to explain distance and height." }
  ],
  life: [
    "Working out the crosswind part of a wind blowing at an angle across a road",
    "Pushing a lawnmower whose handle is angled: only part of the push moves it forward",
    "Reading a GPS position as east and north coordinates",
    "Following directions such as 3 blocks east and 4 blocks north",
    "Pulling a sled with a rope angled upward"
  ],
  fields: [
    { name: "Engineering statics", use: "Equilibrium is solved by setting the sums of x and y force components to zero." },
    { name: "Navigation and surveying", use: "Positions and courses are handled as east and north components." },
    { name: "Computer graphics", use: "Every vertex, normal and motion is stored and transformed as components." },
    { name: "Electrical engineering", use: "Alternating currents are represented as phasors with real and imaginary components." }
  ],
  prereqWhy: {
    "mech-vectors": "Components rebuild the tip-to-tail picture exactly: every vector is the sum of an x vector and a y vector."
  },
  unlocksWhy: {
    "mech-vector-products": "Dot and cross products are computed from components, as in A·B = AxBx + AyBy + AzBz.",
    "mech-2d-motion": "Motion in a plane is handled by treating the x and y components of position, velocity and acceleration separately.",
    "mech-forces": "Free-body diagrams are solved by resolving every force into components along chosen axes."
  },
  mathWhy: {
    "pa-pythagorean": `The magnitude from components is a hypotenuse: <span class="m"><i>A</i> = √<span style="text-decoration:overline"><i>A</i><sub>x</sub><sup>2</sup> + <i>A</i><sub>y</sub><sup>2</sup></span></span>, extended to three components in space.`,
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `Resolving a vector uses the adjacent and opposite sides of its right triangle: <span class="m"><i>A</i><sub>x</sub> = <i>A</i> cos <i>θ</i></span>, <span class="m"><i>A</i><sub>y</sub> = <i>A</i> sin <i>θ</i></span>.`,
    "trigonometry:Inverse trigonometric functions": `The direction comes from <span class="m">tan<sup>−1</sup>(<i>A</i><sub>y</sub>/<i>A</i><sub>x</sub>)</span>, and you must know its range (−90°, 90°) to add 180° when <span class="m"><i>A</i><sub>x</sub> &lt; 0</span>.`,
    "trigonometry:Vectors in the plane": `This topic is the physics version of vectors in the plane: component form, magnitude, direction angle, unit vectors and componentwise addition.`
  },
  beyond: [
    { field: "Electricity & Magnetism", why: "Fields from several charges are added by components, and flux and circulation integrals use unit-vector notation throughout." },
    { field: "Classical Mechanics", why: "Equations of motion are written in components, then in polar, cylindrical and spherical unit vectors." },
    { field: "Statics", why: "Every equilibrium problem is solved by summing force components along each axis." },
    { field: "Computational Physics", why: "Simulations store every vector as an array of components and update them numerically." }
  ],
  mistakes: [
    { wrong: `Using the angle from the wrong axis: for 30.0° west of north, writing <span class="m"><i>B</i><sub>x</sub> = 180 cos 30.0°</span>.`, fix: `Convert to the angle from +x first (120°), or reason from the sketch: <span class="m"><i>B</i><sub>x</sub> = −180 sin 30.0° = −90.0 m</span>.` },
    { wrong: `Trusting the calculator for <span class="m"><b>A</b> = −3.00î + 4.00ĵ</span>: <span class="m">tan<sup>−1</sup>(4.00/−3.00) = −53.1°</span>.`, fix: `The x component is negative, so add 180°: <span class="m"><i>θ</i> = 126.9°</span>, in the second quadrant as the sketch shows.` },
    { wrong: `Adding magnitudes instead of components: <span class="m">250 m + 180 m = 430 m</span>.`, fix: `Add components, then find the magnitude: <span class="m"><i>R</i> = 321 m</span>.` },
    { wrong: `Calculator in radian mode while angles are in degrees: <span class="m">cos 35 = −0.904</span>.`, fix: `Check the mode. In degree mode <span class="m">cos 35° = 0.819</span>.` }
  ],
  practice: [
    { q: `A 20.0 N force acts at 30.0° above the +x axis. Find its components and write it in unit-vector form.`, a: `<span class="m"><i>F</i><sub>x</sub> = 20.0 cos 30.0° = 17.3 N</span>, <span class="m"><i>F</i><sub>y</sub> = 20.0 sin 30.0° = 10.0 N</span>, so <span class="m"><b>F</b> = 17.3î + 10.0ĵ N</span>.` },
    { q: `Find the magnitude and direction of <span class="m"><b>A</b> = −3.00î + 4.00ĵ</span> m.`, a: `<span class="m"><i>A</i> = √<span style="text-decoration:overline">(−3.00)<sup>2</sup> + 4.00<sup>2</sup></span> = 5.00 m</span>. The calculator gives <span class="m">tan<sup>−1</sup>(4.00/−3.00) = −53.1°</span>, but <span class="m"><i>A</i><sub>x</sub> &lt; 0</span>, so <span class="m"><i>θ</i> = −53.1° + 180° = 126.9°</span> from +x.` },
    { q: `Find the unit vector in the direction of <span class="m"><b>F</b> = 6.00î − 8.00ĵ</span> N.`, a: `<span class="m"><i>F</i> = √<span style="text-decoration:overline">6.00<sup>2</sup> + 8.00<sup>2</sup></span> = 10.0 N</span>, so <span class="m"><b>F̂</b> = <b>F</b>/<i>F</i> = 0.600î − 0.800ĵ</span>, with no units. Check: <span class="m">0.600<sup>2</sup> + 0.800<sup>2</sup> = 1</span>.` },
    { q: `A drone's displacement is <span class="m"><b>D</b> = 2.00î − 3.00ĵ + 6.00k̂</span> m. Find its magnitude and the unit vector along it.`, a: `<span class="m"><i>D</i> = √<span style="text-decoration:overline">4.00 + 9.00 + 36.0</span> m = 7.00 m</span>, and <span class="m"><b>D̂</b> = (2î − 3ĵ + 6k̂)/7 = 0.286î − 0.429ĵ + 0.857k̂</span>.` }
  ],
  origin: `René Descartes introduced coordinate geometry in <i>La Géométrie</i> (1637). The letters i, j, k come from William Rowan Hamilton's quaternions (1843), and Josiah Willard Gibbs adopted them in the 1880s as the unit vectors along the three axes, the notation physics still uses.`
};
