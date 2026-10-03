window.ARITH = window.ARITH || {};
ARITH["trig-polar-coords"] = {
  title: "Polar Coordinates",
  short: "Locate a point by its distance r and direction θ",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Polar coordinates · points and equations",
  hero: `<span class="m">(<span class="c4">2</span>, <span class="c1"><span class="fr"><span>5π</span><span>6</span></span></span>) &nbsp;↔&nbsp; (<span class="c2">−√<span class="ov">3</span></span>, <span class="c3">1</span>)</span>`,
  lede: `A polar pair <span class="m">(<span class="c4"><i>r</i></span>, <span class="c1"><i>θ</i></span>)</span> locates a point by its directed distance <span class="m c4"><i>r</i></span> from a fixed point, the pole, and the angle <span class="m c1"><i>θ</i></span> of its direction. The equations <span class="m"><span class="c2"><i>x</i></span> = <span class="c4"><i>r</i></span> cos <span class="c1"><i>θ</i></span></span> and <span class="m"><span class="c3"><i>y</i></span> = <span class="c4"><i>r</i></span> sin <span class="c1"><i>θ</i></span></span> translate between polar and rectangular coordinates.`,
  plain: `<p>Rectangular coordinates say how far to go east and then north. Polar coordinates say which way to face and how far to walk. A radar screen works this way: each echo has a range and a direction.</p>
<p>Start at the <b>pole</b> (the origin) facing along the <b>polar axis</b> (the positive x-axis). Turn through the angle <span class="m c1"><i>θ</i></span>, counterclockwise if it is positive. Then move <span class="m c4"><i>r</i></span> units in the direction you face. If <span class="m c4"><i>r</i></span> is negative, move <span class="m">|<i>r</i>|</span> units backwards instead, so the point lands on the opposite ray.</p>
<p>A point has many polar names. Turning one more full turn gives the same point, and so does facing the opposite way and walking backwards. So <span class="m">(2, <span class="fr"><span>π</span><span>3</span></span>)</span>, <span class="m">(2, <span class="fr"><span>7π</span><span>3</span></span>)</span> and <span class="m">(−2, <span class="fr"><span>4π</span><span>3</span></span>)</span> are all the same point.</p>
<p>Going back from <span class="m">(<i>x</i>, <i>y</i>)</span> to <span class="m">(<i>r</i>, <i>θ</i>)</span> needs care. The distance is <span class="m">√<span class="ov"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span></span>, but <span class="m">tan<sup>−1</sup>(<i>y</i>/<i>x</i>)</span> only returns angles between <span class="m">−π/2</span> and <span class="m">π/2</span>. For a point left of the y-axis you must add <span class="m">π</span>.</p>`,
  formal: `<p>The point with <b>polar coordinates</b> <span class="m">(<span class="c4"><i>r</i></span>, <span class="c1"><i>θ</i></span>)</span> is the point with rectangular coordinates</p>
<div class="display"><span class="c2"><i>x</i></span> = <span class="c4"><i>r</i></span> cos <span class="c1"><i>θ</i></span>, &nbsp; <span class="c3"><i>y</i></span> = <span class="c4"><i>r</i></span> sin <span class="c1"><i>θ</i></span>.</div>
<p>Here <span class="m c1"><i>θ</i></span> is in radians unless degrees are marked, and <span class="m c4"><i>r</i></span> may be any real number. For <span class="m"><i>r</i> &gt; 0</span> the point lies on the terminal side of <span class="m c1"><i>θ</i></span> at distance <span class="m"><i>r</i></span> from the pole; for <span class="m"><i>r</i> &lt; 0</span> it lies on the opposite ray, the terminal side of <span class="m"><i>θ</i> + π</span>, at distance <span class="m">|<i>r</i>|</span>. The pole is <span class="m">(0, <i>θ</i>)</span> for every <span class="m"><i>θ</i></span>. Every name of a point other than the pole is one of</p>
<div class="display">(<i>r</i>, <i>θ</i> + 2π<i>k</i>) &nbsp; and &nbsp; (−<i>r</i>, <i>θ</i> + π + 2π<i>k</i>), &nbsp; <i>k</i> an integer.</div>
<p><b>Rectangular to polar.</b> Take <span class="m"><span class="c4"><i>r</i></span> = √<span class="ov"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span></span> and choose <span class="m c1"><i>θ</i></span> in <span class="m">[0, 2π)</span> with <span class="m">tan <i>θ</i> = <i>y</i>/<i>x</i></span> <b>in the quadrant of the point</b>. With the reference angle <span class="m"><i>θ</i>′ = tan<sup>−1</sup>|<i>y</i>/<i>x</i>|</span>: QI <span class="m"><i>θ</i> = <i>θ</i>′</span>, QII <span class="m"><i>θ</i> = π − <i>θ</i>′</span>, QIII <span class="m"><i>θ</i> = π + <i>θ</i>′</span>, QIV <span class="m"><i>θ</i> = 2π − <i>θ</i>′</span>. If <span class="m"><i>x</i> = 0</span>, then <span class="m"><i>θ</i> = π/2</span> (<span class="m"><i>y</i> &gt; 0</span>) or <span class="m">3π/2</span> (<span class="m"><i>y</i> &lt; 0</span>).</p>
<p><b>Equations.</b> Replace <span class="m"><i>x</i>, <i>y</i></span> by <span class="m"><i>r</i> cos <i>θ</i>, <i>r</i> sin <i>θ</i></span>, or use <span class="m"><i>r</i><sup>2</sup> = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span>, <span class="m"><i>r</i> cos <i>θ</i> = <i>x</i></span>, <span class="m"><i>r</i> sin <i>θ</i> = <i>y</i></span>:</p>
<div class="display"><i>r</i> = 4 sin <i>θ</i> &nbsp;⇒&nbsp; <i>r</i><sup>2</sup> = 4<i>r</i> sin <i>θ</i> &nbsp;⇒&nbsp; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 4<i>y</i> &nbsp;⇒&nbsp; <span class="c5"><i>x</i><sup>2</sup> + (<i>y</i> − 2)<sup>2</sup> = 4</span><br><i>x</i> = 3 &nbsp;⇒&nbsp; <i>r</i> cos <i>θ</i> = 3 &nbsp;⇒&nbsp; <span class="c5"><i>r</i> = 3 sec <i>θ</i></span></div>
<p>Multiplying <span class="m"><i>r</i> = 4 sin <i>θ</i></span> by <span class="m"><i>r</i></span> adds no new point: the only possible extra point is the pole, and the curve already passes through it at <span class="m"><i>θ</i> = 0</span>. The first graph is the circle with centre <span class="m">(0, 2)</span> and radius 2; the second is a vertical line.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Polar angle", desc: "The direction, measured from the polar axis; counterclockwise is positive. Radians unless marked in degrees." },
    { c: "c4", sym: `<i>r</i>`, name: "Directed distance", desc: "How far from the pole along the direction θ. Negative r means the opposite ray." },
    { c: "c2", sym: `<i>x</i>`, name: "x-coordinate", desc: "x = r cos θ, the horizontal position." },
    { c: "c3", sym: `<i>y</i>`, name: "y-coordinate", desc: "y = r sin θ, the vertical position." },
    { c: "c5", sym: `=`, name: "Converted form", desc: "The answer of a conversion: the point or equation in the other system." }
  ],
  steps: {
    title: "How to convert a point from rectangular to polar coordinates",
    items: [
      `Find <span class="m"><span class="c4"><i>r</i></span> = √<span class="ov"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup></span></span>.`,
      `Find the quadrant from the signs of <span class="m c2"><i>x</i></span> and <span class="m c3"><i>y</i></span>. A point on an axis has <span class="m"><i>θ</i> = 0, π/2, π</span> or <span class="m">3π/2</span>.`,
      `Find the reference angle <span class="m"><i>θ</i>′ = tan<sup>−1</sup>|<i>y</i>/<i>x</i>|</span>, exactly when it is a special angle.`,
      `Place <span class="m c1"><i>θ</i></span> in the quadrant: <span class="m"><i>θ</i>′</span>, <span class="m">π − <i>θ</i>′</span>, <span class="m">π + <i>θ</i>′</span> or <span class="m">2π − <i>θ</i>′</span> for QI to QIV.`,
      `Check by converting back: <span class="m"><i>r</i> cos <i>θ</i></span> and <span class="m"><i>r</i> sin <i>θ</i></span> must give <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>.`,
      `For another name, add <span class="m">2π</span> to <span class="m"><i>θ</i></span>, or change the sign of <span class="m"><i>r</i></span> and add <span class="m">π</span>.`
    ]
  },
  example: {
    prompt: `Convert <span class="m">(<span class="c2">−1</span>, <span class="c3">−√<span class="ov">3</span></span>)</span> to polar coordinates with <span class="m"><i>r</i> &gt; 0</span> and <span class="m">0 ≤ <i>θ</i> &lt; 2π</span>. Then give a name with <span class="m"><i>r</i> &lt; 0</span>.`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>r</i></span> = √<span class="ov">(−1)<sup>2</sup> + (−√<span class="ov">3</span>)<sup>2</sup></span> = √<span class="ov">4</span> = <span class="c4">2</span></span>`, note: "The distance from the pole." },
      { math: `<span class="m">tan <i>θ</i> = <span class="fr"><span>−√<span class="ov">3</span></span><span>−1</span></span> = √<span class="ov">3</span></span>`, note: "Both coordinates are negative, so the point is in QIII." },
      { math: `<span class="m">tan<sup>−1</sup> √<span class="ov">3</span> = <span class="fr"><span>π</span><span>3</span></span></span>`, note: "This is a QI angle. (2, π/3) is the point (1, √3), the wrong point." },
      { math: `<span class="m"><span class="c1"><i>θ</i></span> = π + <span class="fr"><span>π</span><span>3</span></span> = <span class="c1"><span class="fr"><span>4π</span><span>3</span></span></span></span>`, note: "QIII: add π to the reference angle." },
      { math: `<span class="m">2 cos <span class="fr"><span>4π</span><span>3</span></span> = −1, &nbsp; 2 sin <span class="fr"><span>4π</span><span>3</span></span> = −√<span class="ov">3</span></span>`, note: "Converting back gives the original point." },
      { math: `<span class="m">(−2, <span class="fr"><span>4π</span><span>3</span></span> − π) = (−2, <span class="fr"><span>π</span><span>3</span></span>)</span>`, note: "Negative r: change the sign of r and turn θ by π." }
    ],
    answer: `<span class="m c5">(2, <span class="fr"><span>4π</span><span>3</span></span>)</span>, and also <span class="m c5">(−2, <span class="fr"><span>π</span><span>3</span></span>)</span>`
  },
  why: `<p>Polar coordinates fit anything that turns or spreads out from a centre: radar and sonar, rotating machinery, antenna patterns, orbits. Equations that are awkward in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> are often short in <span class="m"><i>r</i></span> and <span class="m"><i>θ</i></span>, such as <span class="m"><i>r</i> = 3</span> for a circle or <span class="m"><i>r</i> = <i>θ</i></span> for a spiral.</p>
<p>The same pair <span class="m">(<i>r</i>, <i>θ</i>)</span> also describes a complex number <span class="m"><i>a</i> + <i>bi</i></span>. Its length and angle are what make multiplying complex numbers and finding their roots simple.</p>`,
  careers: [
    { role: "Air traffic controller", use: "Reads each aircraft on the radar scope as a range and a bearing from the antenna, which is a polar position." },
    { role: "Robotics engineer", use: "Converts lidar returns, each a distance at a scan angle, into x and y positions to build a map of a room." },
    { role: "Antenna engineer", use: "Plots radiation patterns as signal strength r against direction θ on polar graph paper." },
    { role: "Surveyor", use: "Records a distance and a horizontal angle from a total station, then converts them to coordinates with x = r cos θ and y = r sin θ." },
    { role: "Sonar technician", use: "Locates underwater contacts by range and bearing and plots them on a polar display." },
    { role: "Game programmer", use: "Turns a joystick position into a direction and a speed, and draws radial effects such as explosions and circular menus." }
  ],
  life: [
    "A radar screen shows every echo by its range and direction",
    "A dartboard scores by ring and by sector, a distance and an angle",
    "Saying \"three kilometres north-east of town\" gives a polar position",
    "A rotating lawn sprinkler waters points by distance and direction",
    "The hands of a clock are lengths pointing at angles"
  ],
  fields: [
    { name: "Physics", use: "Circular motion and central forces such as gravity are described with r and θ." },
    { name: "Engineering", use: "Rotating parts, robot arms and antenna patterns use polar positions." },
    { name: "Navigation", use: "Range and bearing from a known point fix a ship or aircraft." },
    { name: "Astronomy", use: "Orbits are written as the distance from the Sun at each angle." }
  ],
  prereqWhy: {
    "trig-inverse": "Finding θ from a point uses tan⁻¹(y/x), whose principal value lies in (−π/2, π/2); a point left of the y-axis needs π added.",
    "trig-any-angle": "x = r cos θ and y = r sin θ are the definitions cos θ = x/r and sin θ = y/r solved for x and y, with the signs set by the quadrant."
  },
  unlocksWhy: {
    "trig-polar-graphs": "A polar graph is the set of points (r, θ) that satisfy an equation, plotted with these conversions and with negative r drawn on the opposite ray.",
    "trig-complex-polar": "The modulus and argument of a + bi are the polar coordinates r and θ of the point (a, b)."
  },
  beyond: [
    { field: "Precalculus", why: "Conic sections in polar form, r = ed/(1 ± e cos θ), and parametric equations build on these conversions." },
    { field: "Calculus II", why: "Area inside a polar curve is the integral of r²/2 with respect to θ, and arc length has a polar form too." },
    { field: "Calculus III", why: "Double integrals over discs are done in polar coordinates with dA = r dr dθ; cylindrical and spherical coordinates extend the idea to space." },
    { field: "Physics (Mechanics)", why: "Planetary orbits and circular motion are written with radial and angular components." }
  ],
  mistakes: [
    { wrong: `<span class="m">(−1, −√<span class="ov">3</span>)</span> has <span class="m"><i>θ</i> = tan<sup>−1</sup> <span class="fr"><span>−√<span class="ov">3</span></span><span>−1</span></span> = <span class="fr"><span>π</span><span>3</span></span></span>.`, fix: `<span class="m">tan<sup>−1</sup></span> only gives angles in <span class="m">(−π/2, π/2)</span>. The point is in QIII, so <span class="m"><i>θ</i> = π + π/3 = 4π/3</span>. Converting back catches the error: <span class="m">2 cos(π/3) = 1</span>, not <span class="m">−1</span>.` },
    { wrong: `<span class="m">(−2, <span class="fr"><span>π</span><span>3</span></span>)</span> is in QI because <span class="m">π/3</span> is a QI angle.`, fix: `A negative <span class="m"><i>r</i></span> puts the point on the opposite ray. <span class="m">(−2, π/3)</span> is the point <span class="m">(−1, −√<span class="ov">3</span>)</span> in QIII, the same as <span class="m">(2, 4π/3)</span>.` },
    { wrong: `Each point has exactly one pair of polar coordinates.`, fix: `Every point has infinitely many: <span class="m">(<i>r</i>, <i>θ</i> + 2π<i>k</i>)</span> and <span class="m">(−<i>r</i>, <i>θ</i> + π + 2π<i>k</i>)</span>. The pole is <span class="m">(0, <i>θ</i>)</span> for any <span class="m"><i>θ</i></span>. Uniqueness needs a rule such as <span class="m"><i>r</i> &gt; 0</span>, <span class="m">0 ≤ <i>θ</i> &lt; 2π</span>.` },
    { wrong: `From <span class="m"><i>r</i> = 4 sin <i>θ</i></span>: since <span class="m"><i>y</i> = <i>r</i> sin <i>θ</i></span>, the equation is <span class="m"><i>r</i> = 4<i>y</i></span>.`, fix: `<span class="m">sin <i>θ</i></span> is <span class="m"><i>y</i>/<i>r</i></span>, not <span class="m"><i>y</i></span>. Multiply both sides by <span class="m"><i>r</i></span> first: <span class="m"><i>r</i><sup>2</sup> = 4<i>r</i> sin <i>θ</i></span>, so <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 4<i>y</i></span>.` }
  ],
  practice: [
    { q: `Convert <span class="m">(4, <span class="fr"><span>2π</span><span>3</span></span>)</span> to rectangular coordinates.`, a: `<span class="m"><i>x</i> = 4 cos <span class="fr"><span>2π</span><span>3</span></span> = 4(−<span class="fr"><span>1</span><span>2</span></span>) = −2</span>, <span class="m"><i>y</i> = 4 sin <span class="fr"><span>2π</span><span>3</span></span> = 4 · <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> = 2√<span class="ov">3</span></span>. The point is <span class="m">(−2, 2√<span class="ov">3</span>)</span>.` },
    { q: `Find the rectangular coordinates of <span class="m">(−3, <span class="fr"><span>π</span><span>4</span></span>)</span> and a polar name with <span class="m"><i>r</i> &gt; 0</span> and <span class="m">0 ≤ <i>θ</i> &lt; 2π</span>.`, a: `<span class="m"><i>x</i> = −3 cos <span class="fr"><span>π</span><span>4</span></span> = −<span class="fr"><span>3√<span class="ov">2</span></span><span>2</span></span></span> and <span class="m"><i>y</i> = −<span class="fr"><span>3√<span class="ov">2</span></span><span>2</span></span></span>, a point in QIII. With positive <span class="m"><i>r</i></span>: <span class="m">(3, <span class="fr"><span>π</span><span>4</span></span> + π) = (3, <span class="fr"><span>5π</span><span>4</span></span>)</span>.` },
    { q: `Convert <span class="m">(−5, 12)</span> to polar coordinates with <span class="m"><i>r</i> &gt; 0</span> and <span class="m">0 ≤ <i>θ</i> &lt; 2π</span>. Give <span class="m"><i>θ</i></span> to three decimal places.`, a: `<span class="m"><i>r</i> = √<span class="ov">25 + 144</span> = 13</span>. The point is in QII. Reference angle <span class="m">tan<sup>−1</sup>(12/5) ≈ 1.176</span>, so <span class="m"><i>θ</i> = π − tan<sup>−1</sup>(12/5) ≈ 1.966</span> (about <span class="m">112.62°</span>). The point is <span class="m">(13, 1.966)</span>.` },
    { q: `Write <span class="m"><i>r</i> = 6 cos <i>θ</i></span> in rectangular form and describe its graph. Then write <span class="m"><i>y</i> = −2</span> in polar form.`, a: `<span class="m"><i>r</i><sup>2</sup> = 6<i>r</i> cos <i>θ</i></span> gives <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 6<i>x</i></span>, so <span class="m">(<i>x</i> − 3)<sup>2</sup> + <i>y</i><sup>2</sup> = 9</span>: the circle with centre <span class="m">(3, 0)</span> and radius 3. For the line, <span class="m"><i>r</i> sin <i>θ</i> = −2</span>, so <span class="m"><i>r</i> = −2 csc <i>θ</i></span>.` }
  ],
  origin: `Isaac Newton listed polar coordinates among several ways of locating a point in his <i>Method of Fluxions</i>, written about 1671 and published in 1736. Jacob Bernoulli used a distance from a fixed point and an angle to study curves in a paper of 1691 in <i>Acta Eruditorum</i>, and the system is often credited to him.`
};
