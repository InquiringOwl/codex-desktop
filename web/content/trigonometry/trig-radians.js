window.ARITH = window.ARITH || {};
ARITH["trig-radians"] = {
  title: "Radian Measure, Arc Length & Sector Area",
  short: "Radians, π rad = 180°, arc length and sector area",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Angles · radian measure",
  hero: `<span class="m"><span class="c3"><i>s</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>θ</i></span> &nbsp;&nbsp; <span class="c5"><i>A</i></span> = ½<span class="c4"><i>r</i></span><sup>2</sup><span class="c1"><i>θ</i></span> &nbsp;&nbsp; π rad = 180°</span>`,
  lede: `A radian measures an angle by the arc it cuts off, counted in radii. One radian is the central angle whose arc is exactly one radius long, and a full turn is <span class="m">2π</span> radians.`,
  plain: `<p>Take a piece of string as long as the radius of a circle and lay it along the circle. The angle at the centre that it spans is one radian, a little more than 57°. The size of the circle does not matter: a bigger circle has a longer radius and a longer arc, in the same proportion.</p>
<p>How many radius-lengths fit around the whole circle? The circumference is <span class="m">2π<i>r</i></span>, so exactly <span class="m">2π ≈ 6.28</span> of them. That makes a full turn <span class="m">2π</span> radians and a half turn <span class="m">π</span> radians, so <span class="m">π</span> radians equals 180°.</p>
<p>Measuring angles in radii pays off at once. If the angle is <span class="m"><i>θ</i></span> radians, the arc is <span class="m"><i>θ</i></span> radii long, so its length is <span class="m"><i>rθ</i></span>. The pie slice it cuts off is the fraction <span class="m"><i>θ</i>/(2π)</span> of the whole disk, which gives the area <span class="m">½<i>r</i><sup>2</sup><i>θ</i></span>. Neither formula needs a 360 or a 180.</p>`,
  formal: `<p>A central angle <span class="m c1"><i>θ</i></span> of a circle of radius <span class="m c4"><i>r</i></span> that intercepts an arc of length <span class="m c3"><i>s</i></span> has <b>radian measure</b> <span class="m"><span class="c1"><i>θ</i></span> = <span class="fr"><span class="c3"><i>s</i></span><span class="c4"><i>r</i></span></span></span>. Because <span class="m c3"><i>s</i></span> and <span class="m c4"><i>r</i></span> are both lengths, the radian is a ratio with no physical unit; an angle written with no unit is in radians. The full circle has <span class="m"><i>s</i> = 2π<i>r</i></span>, so</p>
<div class="display">360° = 2π rad, &nbsp; 180° = π rad<br>1° = <span class="fr"><span>π</span><span>180</span></span> rad ≈ 0.017453 rad &nbsp;&nbsp; 1 rad = <span class="fr"><span>180°</span><span>π</span></span> ≈ 57.2958°</div>
<p>To convert degrees to radians multiply by <span class="m">π/180°</span>; to convert radians to degrees multiply by <span class="m">180°/π</span>. Multiples of 30° and 45° become exact multiples of π: <span class="m">30° = π/6</span>, <span class="m">45° = π/4</span>, <span class="m">60° = π/3</span>, <span class="m">90° = π/2</span>, <span class="m">135° = 3π/4</span>, <span class="m">270° = 3π/2</span>.</p>
<p>For <span class="m c1"><i>θ</i></span> in radians, the arc and the <b>sector</b> are the fraction <span class="m"><i>θ</i>/(2π)</span> of the circumference and of the disk:</p>
<div class="display"><span class="c3"><i>s</i></span> = <span class="fr"><span><i>θ</i></span><span>2π</span></span> · 2π<i>r</i> = <span class="c4"><i>r</i></span><span class="c1"><i>θ</i></span> &nbsp;&nbsp;&nbsp; <span class="c5"><i>A</i></span> = <span class="fr"><span><i>θ</i></span><span>2π</span></span> · π<i>r</i><sup>2</sup> = ½<span class="c4"><i>r</i></span><sup>2</sup><span class="c1"><i>θ</i></span> = ½<span class="c4"><i>r</i></span><span class="c3"><i>s</i></span></div>
<p>With <span class="m"><i>θ</i></span> in degrees the same facts read <span class="m"><i>s</i> = π<i>rθ</i>/180</span> and <span class="m"><i>A</i> = π<i>r</i><sup>2</sup><i>θ</i>/360</span>. The radian is the unit that makes the constant equal to 1, which is why <span class="m"><i>s</i> = <i>rθ</i></span> and <span class="m"><i>A</i> = ½<i>r</i><sup>2</sup><i>θ</i></span> are wrong if <span class="m"><i>θ</i></span> is in degrees.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Central angle", desc: "The angle at the centre, in radians: arc length divided by radius." },
    { c: "c3", sym: `<i>s</i>`, name: "Arc length", desc: "The length of the arc the angle cuts off, s = rθ." },
    { c: "c4", sym: `<i>r</i>`, name: "Radius", desc: "The unit the radian counts in: θ radians means an arc θ radii long." },
    { c: "c5", sym: `<i>A</i>`, name: "Sector area", desc: "The area of the slice between the two radii, A = ½r²θ." }
  ],
  steps: {
    title: "How to convert angles and find arc length and sector area",
    items: [
      `Degrees to radians: multiply by <span class="m">π/180</span> and reduce the fraction, keeping π: <span class="m">135° · π/180 = 3π/4</span>.`,
      `Radians to degrees: multiply by <span class="m">180/π</span>; the π cancels when the angle is a multiple of π.`,
      `For an arc or sector, write the angle in radians first.`,
      `Arc length: <span class="m"><span class="c3"><i>s</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>θ</i></span></span>. The arc has the same unit as the radius.`,
      `Sector area: <span class="m"><span class="c5"><i>A</i></span> = ½<span class="c4"><i>r</i></span><sup>2</sup><span class="c1"><i>θ</i></span></span>, in square units. If you know <span class="m"><i>s</i></span>, <span class="m"><i>A</i> = ½<i>rs</i></span> is a check.`,
      `Give the exact answer with π, then round only if the problem asks for a decimal.`
    ]
  },
  example: {
    prompt: `A lawn sprinkler sprays water <span class="m c4">12 m</span> and turns back and forth through <span class="m c1">135°</span>. Find the length of the outer edge of the watered region and the area watered, exactly and to the nearest tenth.`,
    lines: [
      { math: `<span class="m"><span class="c1">135°</span> · <span class="fr"><span>π</span><span>180°</span></span> = <span class="fr"><span>135π</span><span>180</span></span> = <span class="c1"><span class="fr"><span>3π</span><span>4</span></span></span></span>`, note: "The formulas need the angle in radians. 135/180 reduces to 3/4." },
      { math: `<span class="m"><span class="c3"><i>s</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>θ</i></span> = <span class="c4">12</span> · <span class="c1"><span class="fr"><span>3π</span><span>4</span></span></span> = <span class="c3">9π</span> m</span>`, note: "The outer edge is an arc of the circle of radius 12 m." },
      { math: `<span class="m"><span class="c3">9π</span> ≈ 28.274… ≈ 28.3 m</span>`, note: "Round only at the end." },
      { math: `<span class="m"><span class="c5"><i>A</i></span> = ½<span class="c4"><i>r</i></span><sup>2</sup><span class="c1"><i>θ</i></span> = ½ · <span class="c4">144</span> · <span class="c1"><span class="fr"><span>3π</span><span>4</span></span></span> = <span class="c5">54π</span> m<sup>2</sup></span>`, note: "The watered region is a sector: 135° is 3/8 of a full turn." },
      { math: `<span class="m"><span class="c5">54π</span> ≈ 169.646… ≈ 169.6 m<sup>2</sup></span>`, note: "Square metres, because the radius was squared." },
      { math: `<span class="m">½<span class="c4"><i>r</i></span><span class="c3"><i>s</i></span> = ½ · 12 · 9π = 54π &nbsp;✓</span>`, note: "The area also equals half the radius times the arc length." }
    ],
    answer: `Arc <span class="m c3">9π ≈ 28.3 m</span>; area <span class="m c5">54π ≈ 169.6 m<sup>2</sup></span>.`
  },
  why: `<p>Radians are the natural unit for angles because they tie an angle directly to a length. Once an angle is a number of radii, arc length is a product, angular speed turns into linear speed by multiplying by the radius, and the unit circle can measure angles by distance along it. Every formula in later trigonometry and in calculus that involves a turning angle assumes radians.</p>
<p>Degrees remain the everyday unit for maps, construction and triangles, so you will move between the two constantly. The conversion is a single factor, π/180, and a few exact pairs such as 30° = π/6 and 90° = π/2 cover most problems.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes how far a belt or a cable travels around a pulley from the angle of wrap in radians, s = rθ." },
    { role: "Civil engineer", use: "Lays out circular road and rail curves, finding curve length from the radius and the central angle." },
    { role: "Game developer", use: "Passes angles in radians to sine, cosine and rotation functions in graphics libraries, which expect radians." },
    { role: "Landscape architect", use: "Sizes irrigation zones as circular sectors from a sprinkler's radius and arc of rotation." },
    { role: "Geodesist", use: "Finds distances along Earth's surface between points on the same meridian from their difference in latitude." },
    { role: "Optical engineer", use: "Measures small angles in milliradians, where a milliradian subtends 1 m at a distance of 1 km." }
  ],
  life: [
    "A pizza cut into 8 equal slices: each slice is a sector with a central angle of π/4",
    "A windshield wiper sweeping a sector of the glass",
    "The distance along Earth's surface between two cities due north of each other",
    "A calculator's RAD and DEG modes giving different answers for sin 30",
    "Rifle scopes and rangefinders marked in milliradians"
  ],
  fields: [
    { name: "Calculus", use: "Derivative and series formulas for sine and cosine hold only with angles in radians." },
    { name: "Physics", use: "Angular displacement, angular velocity and torque problems use radians." },
    { name: "Engineering", use: "Arc length and sector area size curves, pulleys, gears and cams." },
    { name: "Computer graphics", use: "Rotation functions in code take angles in radians." }
  ],
  prereqWhy: {
    "trig-angles": "Radians measure the same rotations in standard position, including negative angles and angles past one full turn.",
    "g-circle-measure": "Circumference 2πr and area πr² are where 2π radians in a full turn and the sector formula A = ½r²θ come from."
  },
  unlocksWhy: {
    "trig-angular-speed": "Angular speed is measured in radians per unit time, and v = rω is the arc length formula s = rθ divided by time.",
    "trig-unit-circle": "On a circle of radius 1 an angle of t radians cuts off an arc of length t, so the unit circle can measure angles by distance."
  },
  beyond: [
    { field: "Calculus I", why: "The derivative of sin x is cos x only when x is in radians; in degrees an extra factor π/180 appears." },
    { field: "Physics (Mechanics)", why: "Rotational motion uses radians for angular displacement, speed and acceleration." },
    { field: "Navigation/Surveying", why: "Distances along a great circle of Earth are radius times the central angle in radians." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>r</i> = 5</span>, <span class="m"><i>θ</i> = 60°</span>, so <span class="m"><i>s</i> = 5 · 60 = 300</span>.`, fix: `Convert first: <span class="m">60° = π/3</span>, so <span class="m"><i>s</i> = 5π/3 ≈ 5.24</span>.` },
    { wrong: `<span class="m">90° = 90 · <span class="fr"><span>180</span><span>π</span></span></span>`, fix: `To go from degrees to radians multiply by <span class="m">π/180</span> so the degrees cancel: <span class="m">90° · π/180° = π/2</span>.` },
    { wrong: `<span class="m">π = 180</span>`, fix: `π is the number 3.14159…; the true statement is <span class="m">π rad = 180°</span>.` },
    { wrong: `Sector area <span class="m"><i>A</i> = <i>r</i><sup>2</sup><i>θ</i></span>.`, fix: `The whole disk is <span class="m">π<i>r</i><sup>2</sup></span> for <span class="m">2π</span> radians, so <span class="m"><i>A</i> = ½<i>r</i><sup>2</sup><i>θ</i></span>.` }
  ],
  practice: [
    { q: `Convert to radians, exactly: <span class="m">210°</span>, <span class="m">−45°</span>, <span class="m">330°</span>, <span class="m">20°</span>.`,
      a: `Multiply by <span class="m">π/180</span>: <span class="m">210π/180 = 7π/6</span>, <span class="m">−45π/180 = −π/4</span>, <span class="m">330π/180 = 11π/6</span>, <span class="m">20π/180 = π/9</span>.` },
    { q: `Convert to degrees: <span class="m">5π/3</span>, <span class="m">−3π/4</span>, and <span class="m">2.5</span> radians (nearest tenth of a degree).`,
      a: `<span class="m">(5π/3)(180/π) = 300°</span>, <span class="m">(−3π/4)(180/π) = −135°</span>, <span class="m">2.5 · 180/π ≈ 143.2°</span>.` },
    { q: `In a circle of radius <span class="m">8 cm</span> a central angle cuts off an arc of <span class="m">10 cm</span>. Find the angle in radians and in degrees (nearest tenth), and the area of the sector.`,
      a: `<span class="m"><i>θ</i> = <i>s</i>/<i>r</i> = 10/8 = 1.25</span> rad <span class="m">≈ 71.6°</span>. <span class="m"><i>A</i> = ½<i>rs</i> = ½ · 8 · 10 = 40 cm<sup>2</sup></span>.` },
    { q: `A sector of a circle of radius <span class="m">6 cm</span> has area <span class="m">15π cm<sup>2</sup></span>. Find its central angle in radians, its arc length, and its perimeter to the nearest tenth.`,
      a: `<span class="m">15π = ½ · 36 · <i>θ</i></span>, so <span class="m"><i>θ</i> = 30π/36 = 5π/6</span>. <span class="m"><i>s</i> = 6 · 5π/6 = 5π cm</span>. The perimeter is two radii plus the arc: <span class="m">12 + 5π ≈ 27.7 cm</span>.` }
  ],
  origin: `Roger Cotes, in his <i>Logometria</i> (1714), recognised the angle whose arc equals the radius as the natural measure of angle, and Leonhard Euler's work later in the 18th century used angles measured as arc length on a circle of radius 1 throughout. The name came much later: the word "radian" first appeared in print in 1873, in examination questions set by James Thomson, the brother of Lord Kelvin, at Queen's College, Belfast.`
};
