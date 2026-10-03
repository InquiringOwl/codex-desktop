window.ARITH = window.ARITH || {};
ARITH["trig-dot-product"] = {
  title: "The Dot Product & Projections",
  short: "u · v, the angle between vectors, projection and work",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Trigonometry · vectors",
  hero: `<span class="m"><span class="c1"><b>u</b></span> · <span class="c2"><b>v</b></span> = <i>u</i><sub>1</sub><i>v</i><sub>1</sub> + <i>u</i><sub>2</sub><i>v</i><sub>2</sub> = ‖<span class="c1"><b>u</b></span>‖ ‖<span class="c2"><b>v</b></span>‖ cos <span class="c4"><i>θ</i></span></span>`,
  lede: `The dot product multiplies two vectors and gives a number. That number measures how much the vectors point the same way, which gives the angle between them, the shadow of one on the other, and the work a force does.`,
  plain: `<p>Multiply the x-components of two vectors, multiply the y-components, and add. The result is a single number called the <b>dot product</b>. It is not a vector.</p>
<p>The number has a meaning. It is large and positive when the vectors point roughly the same way, zero when they meet at a right angle, and negative when they point more apart than a right angle. In fact it equals the product of the two lengths times the cosine of the angle between them, so dividing by the lengths gives that cosine and then the angle.</p>
<p>Shine a light straight down onto <b>v</b>'s line and look at the shadow <b>u</b> casts on it. That shadow is the <b>projection</b> of <b>u</b> onto <b>v</b>. The dot product tells you how long it is. What is left over, from the shadow's tip to <b>u</b>'s tip, is perpendicular to <b>v</b>. So every vector splits into a part along <b>v</b> and a part at right angles to it.</p>
<p>Pulling a sled by a rope at an angle, only the part of the pull along the ground moves the sled forward. The work done is that part times the distance, which is exactly a dot product.</p>`,
  formal: `<p>For <span class="m"><b>u</b> = ⟨<i>u</i><sub>1</sub>, <i>u</i><sub>2</sub>⟩</span> and <span class="m"><b>v</b> = ⟨<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>⟩</span>, the <b>dot product</b> is <span class="m"><b>u</b> · <b>v</b> = <i>u</i><sub>1</sub><i>v</i><sub>1</sub> + <i>u</i><sub>2</sub><i>v</i><sub>2</sub></span>. It satisfies <span class="m"><b>u</b> · <b>v</b> = <b>v</b> · <b>u</b></span>, <span class="m"><b>u</b> · (<b>v</b> + <b>w</b>) = <b>u</b> · <b>v</b> + <b>u</b> · <b>w</b></span>, <span class="m">(<i>c</i><b>u</b>) · <b>v</b> = <i>c</i>(<b>u</b> · <b>v</b>)</span>, <span class="m"><b>0</b> · <b>v</b> = 0</span> and <span class="m"><b>v</b> · <b>v</b> = ‖<b>v</b>‖<sup>2</sup></span>.</p>
<p>If <span class="m"><span class="c4"><i>θ</i></span></span> (0° ≤ <i>θ</i> ≤ 180°) is the angle between nonzero <span class="m"><b>u</b></span> and <span class="m"><b>v</b></span>, the law of cosines in the triangle with sides <span class="m"><b>u</b>, <b>v</b>, <b>u</b> − <b>v</b></span> gives <span class="m">‖<b>u</b> − <b>v</b>‖<sup>2</sup> = ‖<b>u</b>‖<sup>2</sup> + ‖<b>v</b>‖<sup>2</sup> − 2‖<b>u</b>‖‖<b>v</b>‖ cos <i>θ</i></span>, while expanding in components gives <span class="m">‖<b>u</b> − <b>v</b>‖<sup>2</sup> = ‖<b>u</b>‖<sup>2</sup> + ‖<b>v</b>‖<sup>2</sup> − 2(<i>u</i><sub>1</sub><i>v</i><sub>1</sub> + <i>u</i><sub>2</sub><i>v</i><sub>2</sub>)</span>. Comparing,</p>
<div class="display"><span class="c1"><b>u</b></span> · <span class="c2"><b>v</b></span> = ‖<b>u</b>‖ ‖<b>v</b>‖ cos <span class="c4"><i>θ</i></span>, &nbsp; cos <span class="c4"><i>θ</i></span> = <span class="fr"><span><b>u</b> · <b>v</b></span><span>‖<b>u</b>‖ ‖<b>v</b>‖</span></span><br>comp<sub><b>v</b></sub> <b>u</b> = <span class="fr"><span><b>u</b> · <b>v</b></span><span>‖<b>v</b>‖</span></span>, &nbsp; <span class="c5">proj<sub><b>v</b></sub> <b>u</b></span> = <span class="fr"><span><b>u</b> · <b>v</b></span><span>‖<b>v</b>‖<sup>2</sup></span></span> <b>v</b>, &nbsp; <b>u</b> = <span class="c5"><b>w</b><sub>1</sub></span> + <span class="c3"><b>w</b><sub>2</sub></span></div>
<p>Vectors are <b>orthogonal</b> when <span class="m"><b>u</b> · <b>v</b> = 0</span>; for nonzero vectors the angle is acute when <span class="m"><b>u</b> · <b>v</b> &gt; 0</span> and obtuse when <span class="m"><b>u</b> · <b>v</b> &lt; 0</span>. The <b>scalar projection</b> comp<sub><b>v</b></sub> <b>u</b> is a signed length; the <b>vector projection</b> <span class="m"><b>w</b><sub>1</sub> = proj<sub><b>v</b></sub> <b>u</b></span> is parallel to <b>v</b> and <span class="m"><b>w</b><sub>2</sub> = <b>u</b> − <b>w</b><sub>1</sub></span> is orthogonal to <b>v</b>. A constant force <b>F</b> moving an object along the displacement <b>d</b> does <b>work</b> <span class="m"><i>W</i> = <b>F</b> · <b>d</b> = ‖<b>F</b>‖ ‖<b>d</b>‖ cos <i>θ</i></span>, in joules (N·m) or foot-pounds (ft·lb).</p>`,
  legend: [
    { c: "c1", sym: `<b>u</b>`, name: "First vector", desc: "The vector being projected, or the force F in a work problem." },
    { c: "c2", sym: `<b>v</b>`, name: "Second vector", desc: "The vector projected onto, or the displacement d." },
    { c: "c4", sym: `<i>θ</i>`, name: "Angle between", desc: "From 0° to 180°; acute, right or obtuse as u · v is positive, zero or negative." },
    { c: "c5", sym: `proj<sub><b>v</b></sub> <b>u</b>`, name: "Projection", desc: "The part of u along v: u's shadow on v's line." },
    { c: "c3", sym: `<b>w</b><sub>2</sub>`, name: "Orthogonal part", desc: "u minus its projection, at right angles to v." }
  ],
  steps: {
    title: "How to find the angle and the projection",
    items: [
      `Compute <span class="m"><b>u</b> · <b>v</b> = <i>u</i><sub>1</sub><i>v</i><sub>1</sub> + <i>u</i><sub>2</sub><i>v</i><sub>2</sub></span>. Its sign already tells you acute (+), right (0) or obtuse (−).`,
      `Find <span class="m">‖<b>u</b>‖</span> and <span class="m">‖<b>v</b>‖</span>, then <span class="m">cos <i>θ</i> = <b>u</b> · <b>v</b> / (‖<b>u</b>‖ ‖<b>v</b>‖)</span> and <span class="m"><i>θ</i> = cos<sup>−1</sup>(…)</span>. No quadrant fix is needed: cos<sup>−1</sup> returns 0° to 180°.`,
      `For the projection onto <span class="m"><b>v</b></span>, compute the scalar <span class="m"><b>u</b> · <b>v</b> / ‖<b>v</b>‖<sup>2</sup></span> (use <span class="m"><b>v</b> · <b>v</b></span>, so no square root is needed) and multiply it by <span class="m"><b>v</b></span>.`,
      `Subtract to get the orthogonal part: <span class="m"><b>w</b><sub>2</sub> = <b>u</b> − proj<sub><b>v</b></sub> <b>u</b></span>.`,
      `Check: <span class="m"><b>w</b><sub>2</sub> · <b>v</b> = 0</span> and <span class="m"><b>w</b><sub>1</sub> + <b>w</b><sub>2</sub> = <b>u</b></span>.`,
      `For work, use <span class="m"><b>F</b> · <b>d</b></span> in components, or <span class="m">‖<b>F</b>‖ ‖<b>d</b>‖ cos <i>θ</i></span> when you know the angle between force and motion.`
    ]
  },
  example: {
    prompt: `Let <span class="m"><b>u</b> = ⟨4, 3⟩</span> and <span class="m"><b>v</b> = ⟨1, 2⟩</span>. Find <span class="m"><b>u</b> · <b>v</b></span>, the angle between the vectors to the nearest hundredth of a degree, and write <span class="m"><b>u</b></span> as the sum of a vector parallel to <span class="m"><b>v</b></span> and a vector orthogonal to <span class="m"><b>v</b></span>.`,
    lines: [
      { math: `<span class="m"><span class="c1"><b>u</b></span> · <span class="c2"><b>v</b></span> = 4(1) + 3(2) = 10</span>`, note: "Positive, so the angle is acute." },
      { math: `<span class="m">‖<b>u</b>‖ = 5, &nbsp; ‖<b>v</b>‖ = √5</span>`, note: "Magnitudes from the Pythagorean Theorem." },
      { math: `<span class="m">cos <span class="c4"><i>θ</i></span> = 10/(5√5) = 2/√5 ⇒ <span class="c4"><i>θ</i></span> = cos<sup>−1</sup>(2/√5) ≈ 26.57°</span>`, note: "The inverse cosine gives the angle directly, between 0 and 180 degrees." },
      { math: `<span class="m"><span class="c5"><b>w</b><sub>1</sub></span> = (10/5)⟨1, 2⟩ = ⟨2, 4⟩</span>`, note: "v · v = 5, so the projection is 2v." },
      { math: `<span class="m"><span class="c3"><b>w</b><sub>2</sub></span> = ⟨4, 3⟩ − ⟨2, 4⟩ = ⟨2, −1⟩</span>`, note: "The part of u left over." },
      { math: `<span class="m"><b>w</b><sub>2</sub> · <b>v</b> = 2(1) + (−1)(2) = 0</span>`, note: "Check: the leftover part is orthogonal to v." }
    ],
    answer: `<span class="m"><b>u</b> · <b>v</b> = <span class="c5">10</span></span>, <span class="m"><i>θ</i> ≈ <span class="c5">26.57°</span></span>, and <span class="m">⟨4, 3⟩ = <span class="c5">⟨2, 4⟩</span> + <span class="c3">⟨2, −1⟩</span></span>.`
  },
  why: `<p>The dot product is the one tool that connects the algebra of components with the geometry of angles. It tests for right angles in one multiplication, finds the angle between any two directions, and splits a vector into useful parts, such as a weight along and across a ramp.</p>
<p>In physics it defines work and power; in computer graphics it decides how brightly a surface is lit; in statistics and machine learning it measures how similar two lists of numbers are.</p>`,
  careers: [
    { role: "Game and graphics programmer", use: "Uses the dot product of a surface normal and the light direction to shade every pixel, and to test whether an enemy is in front of the player." },
    { role: "Mechanical engineer", use: "Computes the work done by forces and the component of a load along a member." },
    { role: "Physicist", use: "Finds work, power and flux, all defined by dot products of vectors." },
    { role: "Data scientist", use: "Measures how similar two documents or users are with the cosine of the angle between their vectors." },
    { role: "Surveyor", use: "Checks that two measured lines are perpendicular by testing whether their direction vectors have dot product zero." },
    { role: "Robotics engineer", use: "Projects a desired motion onto the directions a joint can move to plan the arm's path." }
  ],
  life: [
    "Pulling a suitcase by a tilted handle, only the forward part of the pull moves it",
    "A solar panel collects the most light when it faces the sun, where the cosine is 1",
    "A shadow at noon is shorter than in the evening because the projection shrinks",
    "Pushing a stuck door at its edge and straight on works better than pushing at a slant",
    "Music apps compare your listening with others' using the angle between long lists of numbers"
  ],
  fields: [
    { name: "Physics", use: "Work W = F · d, power, and the components of forces along a surface." },
    { name: "Computer graphics", use: "Lighting, back-face culling and reflections all use dot products." },
    { name: "Statistics and machine learning", use: "Correlation and cosine similarity are dot products of centred or normalised data." },
    { name: "Engineering", use: "Resolving loads along members and finding the angle between structural elements." }
  ],
  prereqWhy: {
    "trig-vectors": "The dot product is computed from component form and magnitudes, and projections are scalar multiples of a vector.",
    "trig-law-cosines": "Applying the law of cosines to the triangle with sides u, v and u − v is what proves u · v = ‖u‖‖v‖ cos θ."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus III", why: "The dot product extends to three dimensions and defines directional derivatives, line integrals of work and flux." },
    { field: "Linear Algebra", why: "Dot products in n dimensions give lengths, angles, orthogonal projections and least-squares solutions." },
    { field: "Physics (Mechanics)", why: "Work, kinetic energy and power are built on F · d and F · v." },
    { field: "Computer graphics", why: "Every lighting model compares surface normals with light and view directions by dot products." }
  ],
  mistakes: [
    { wrong: `<span class="m">⟨2, 3⟩ · ⟨4, −1⟩ = ⟨8, −3⟩</span>`, fix: `The dot product is a number, not a vector: <span class="m">8 + (−3) = 5</span>.` },
    { wrong: `<span class="m">proj<sub><b>v</b></sub> <b>u</b> = (<b>u</b> · <b>v</b> / ‖<b>v</b>‖) <b>v</b></span>`, fix: `Divide by <span class="m">‖<b>v</b>‖<sup>2</sup></span>. Dividing once by <span class="m">‖<b>v</b>‖</span> gives the scalar projection, a length; the vector projection needs a second division so that <span class="m"><b>v</b></span> becomes a unit vector.` },
    { wrong: `<span class="m">proj<sub><b>v</b></sub> <b>u</b></span> and <span class="m">proj<sub><b>u</b></sub> <b>v</b></span> are the same vector.`, fix: `One lies along <span class="m"><b>v</b></span>, the other along <span class="m"><b>u</b></span>. In the example, <span class="m">proj<sub><b>v</b></sub> <b>u</b> = ⟨2, 4⟩</span> but <span class="m">proj<sub><b>u</b></sub> <b>v</b> = (10/25)⟨4, 3⟩ = ⟨8/5, 6/5⟩</span>.` },
    { wrong: `Work = force × distance, even when the force pulls at an angle.`, fix: `Only the component along the motion does work: <span class="m"><i>W</i> = ‖<b>F</b>‖ ‖<b>d</b>‖ cos <i>θ</i></span>. A force perpendicular to the motion does no work.` }
  ],
  practice: [
    { q: `Find <span class="m">⟨−2, 5⟩ · ⟨3, 4⟩</span>, and decide whether <span class="m">2<b>i</b> − <b>j</b></span> and <span class="m"><b>i</b> + 2<b>j</b></span> are orthogonal.`, a: `<span class="m">−6 + 20 = 14</span>. <span class="m">(2)(1) + (−1)(2) = 0</span>, so yes, they are orthogonal.` },
    { q: `Find the angle between <span class="m"><b>u</b> = ⟨−3, 1⟩</span> and <span class="m"><b>v</b> = ⟨2, 4⟩</span> to the nearest hundredth of a degree.`, a: `<span class="m"><b>u</b> · <b>v</b> = −6 + 4 = −2</span>, <span class="m">‖<b>u</b>‖ = √10</span>, <span class="m">‖<b>v</b>‖ = 2√5</span>, so <span class="m">cos <i>θ</i> = −2/√200 = −√2/10</span> and <span class="m"><i>θ</i> ≈ 98.13°</span>, an obtuse angle.` },
    { q: `Find <span class="m"><i>k</i></span> so that <span class="m">⟨<i>k</i>, 3⟩</span> is orthogonal to <span class="m">⟨2, −6⟩</span>. Then find <span class="m">proj<sub><b>v</b></sub> <b>u</b></span> for <span class="m"><b>u</b> = ⟨5, 0⟩</span>, <span class="m"><b>v</b> = ⟨3, 4⟩</span>.`, a: `<span class="m">2<i>k</i> − 18 = 0</span>, so <span class="m"><i>k</i> = 9</span>. <span class="m"><b>u</b> · <b>v</b> = 15</span>, <span class="m">‖<b>v</b>‖<sup>2</sup> = 25</span>, so <span class="m">proj<sub><b>v</b></sub> <b>u</b> = (15/25)⟨3, 4⟩ = ⟨9/5, 12/5⟩</span>.` },
    { q: `A sled is pulled 25 m across level snow by a rope with a tension of 60 N at 35° above the horizontal. How much work is done? Also find the work done by the force <span class="m"><b>F</b> = 3<b>i</b> + 4<b>j</b></span> (pounds) moving an object from <span class="m">(1, 0)</span> to <span class="m">(7, 2)</span> (feet).`, a: `<span class="m"><i>W</i> = 60 · 25 · cos 35° ≈ 1228.7 J</span>. For the second, <span class="m"><b>d</b> = ⟨6, 2⟩</span>, so <span class="m"><i>W</i> = 3(6) + 4(2) = 26 ft·lb</span>.` }
  ],
  origin: `William Rowan Hamilton's quaternions (1843) multiplied two directed quantities and produced a product with a scalar part equal to minus what we now call the dot product. In the 1880s J. Willard Gibbs, in his privately printed Elements of Vector Analysis, and Oliver Heaviside separated that scalar part out as the "direct" or "scalar" product, and Gibbs introduced the dot notation u · v.`
};
