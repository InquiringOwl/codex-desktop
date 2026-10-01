window.ARITH = window.ARITH || {};

ARITH["pa-pythagorean"] = {
  title: "The Pythagorean Theorem",
  short: "In a right triangle, a² + b² = c²",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Geometry · right triangles and square roots",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup></span>`,
  lede: `In every right triangle, the square on the <span class="m c1">hypotenuse</span> has the same area as the squares on the two legs, <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span>, put together.`,
  plain: `<p>A right triangle has one square corner. The two sides that make the corner are the <b>legs</b>. The long side across from the corner is the <b>hypotenuse</b>. It is always the longest side.</p>
<p>Draw a square on each side. For a triangle with legs 3 and 4, the squares on the legs have areas 9 and 16. The square on the hypotenuse has area 25, which is exactly <span class="m">9 + 16</span>. So the hypotenuse is <span class="m">√25 = 5</span>. This works for every right triangle, not just this one.</p>
<p>That gives you a way to find a missing side. If you know both legs, add their squares and take the square root. If you know the hypotenuse and one leg, subtract the squares first. It also works as a test: if the squares of the two shorter sides add up to the square of the longest side, the corner is square.</p>`,
  formal: `<p><b>Pythagorean Theorem.</b> In any right triangle with legs of length <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> and hypotenuse of length <span class="m c1"><i>c</i></span>,</p>
<div class="display"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup>, &nbsp;so&nbsp; <span class="c1"><i>c</i></span> = √<span style="text-decoration:overline"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> &nbsp;and&nbsp; <span class="c2"><i>a</i></span> = √<span style="text-decoration:overline"><i>c</i><sup>2</sup> − <i>b</i><sup>2</sup></span></div>
<p>Only the principal (nonnegative) square root is used, because lengths are positive. <b>Converse:</b> if the side lengths of a triangle satisfy <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>, the angle opposite <span class="m"><i>c</i></span> is a right angle. More generally, with <span class="m"><i>c</i></span> the longest side, <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> &gt; <i>c</i><sup>2</sup></span> means the triangle is acute and <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> &lt; <i>c</i><sup>2</sup></span> means it is obtuse. Positive integers with <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>, such as 3, 4, 5 and 5, 12, 13, are called <b>Pythagorean triples</b>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First leg", desc: "One of the two sides that form the right angle." },
    { c: "c3", sym: `<i>b</i>`, name: "Second leg", desc: "The other side that forms the right angle." },
    { c: "c1", sym: `<i>c</i>`, name: "Hypotenuse", desc: "The side opposite the right angle. It is always the longest side." }
  ],
  steps: { title: "How to find a missing side of a right triangle", items: [
    `Sketch the triangle and mark the right angle. The side opposite it is the <span class="m c1">hypotenuse <i>c</i></span>.`,
    `Substitute the two known lengths into <span class="m"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup></span>.`,
    `Square the known lengths and solve for the unknown square: add if you want <span class="m"><i>c</i><sup>2</sup></span>, subtract if you want a leg.`,
    `Take the principal square root. Leave it exact or round as the problem asks.`,
    `Check that the hypotenuse is the longest side and that the units are correct.`
  ] },
  example: {
    prompt: `A 20 ft extension ladder leans against a wall. Following the safety rule of 1 ft out for every 4 ft of ladder, its foot is 5 ft from the wall. How high up the wall does it reach?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i></span> = 5, &nbsp;<span class="c1"><i>c</i></span> = 20, &nbsp;<span class="c3"><i>b</i></span> = height</span>`, note: "The ladder is the hypotenuse. The ground distance and the height are the legs." },
      { math: `<span class="m"><span class="c2">5</span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1">20</span><sup>2</sup></span>`, note: "Substitute into the theorem." },
      { math: `<span class="m">25 + <i>b</i><sup>2</sup> = 400</span>`, note: "Square the known lengths." },
      { math: `<span class="m"><i>b</i><sup>2</sup> = 375</span>`, note: "Subtract 25 from both sides." },
      { math: `<span class="m"><span class="c3"><i>b</i></span> = √375 ≈ 19.4</span>`, note: "Take the principal square root. Exactly, it is 5√15 = 19.36 to two decimal places." },
      { math: `<span class="m">19.36<sup>2</sup> + 5<sup>2</sup> ≈ 374.8 + 25 ≈ 400 ✓</span>`, note: "Check: the squares of the legs add up to 20 squared." }
    ],
    answer: `The ladder reaches about <span class="m">19.4</span> ft up the wall.`
  },
  why: `<p>The theorem turns two measurements into a third you could not easily measure: the length of a diagonal, the height reached by a ladder, the straight-line distance across a field. Builders use it to make square corners, and screens and phones are sold by their diagonal length.</p>
<p>It is also the root of distance in mathematics. The distance formula on a coordinate plane, the length of a vector, the identity sin²θ + cos²θ = 1 and the equation of a circle all come straight from <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>.</p>`,
  careers: [
    { role: "Carpenter", use: "Squares a foundation or deck frame with the 3-4-5 method, measuring 3 ft and 4 ft along two sides and adjusting until the diagonal is 5 ft." },
    { role: "Electrician", use: "Finds the length of conduit or cable run diagonally across a wall or ceiling from its horizontal and vertical distances." },
    { role: "Surveyor", use: "Computes straight-line distances between points from their north-south and east-west coordinate differences." },
    { role: "Firefighter", use: "Estimates how far up a building a ladder will reach given its length and the distance of its base from the wall." },
    { role: "Video game developer", use: "Computes the distance between two objects on screen as the square root of the sum of squared coordinate differences for collision checks." },
    { role: "Pilot", use: "Combines a plane's airspeed with a perpendicular crosswind to find ground speed as the hypotenuse of a right triangle." }
  ],
  life: [
    "Checking whether a TV with a given diagonal fits a wall space",
    "Making sure a garden bed or shelf has square corners",
    "Working out how far you save by cutting across a park diagonally",
    "Finding the length of a ramp or a set of stair stringers",
    "Deciding whether a long item fits diagonally in a car or box"
  ],
  fields: [
    { name: "Construction", use: "Framing, roofing and stair layout depend on right-triangle calculations of diagonal lengths." },
    { name: "Physics", use: "The magnitude of a vector is found from its perpendicular components with the Pythagorean Theorem." },
    { name: "Navigation", use: "Straight-line distances and resultant velocities combine perpendicular displacements or speeds." },
    { name: "Computer graphics", use: "Distances between pixels and 3D points use the Pythagorean distance formula." }
  ],
  prereqWhy: {
    "pa-formulas": "The theorem is a formula relating areas of squares on the sides, and finding a missing side is solving for one variable.",
    "roots": "After finding c² or a², you take the principal square root to get the length."
  },
  unlocksWhy: {
    "g-segments": "The distance formula is the Pythagorean Theorem applied to the horizontal and vertical legs Δx and Δy.",
    "g-pythagorean": "Geometry proves the theorem and its converse, then uses c² compared with a² + b² to classify triangles as acute, right or obtuse."
  },
  beyond: [
    { field: "Geometry", why: "The distance formula, special right triangles and the equation of a circle are consequences of the theorem." },
    { field: "Trigonometry", why: "The identity sin²θ + cos²θ = 1 is the Pythagorean Theorem on a unit circle." },
    { field: "Linear Algebra", why: "The length of a vector in any number of dimensions is the square root of the sum of the squares of its components." },
    { field: "Physics", why: "Resultant forces, velocities and displacements are found from perpendicular components." }
  ],
  mistakes: [
    { wrong: `Adding the sides instead of the squares: legs 3 and 4 give "hypotenuse 7".`, fix: `Square first, add, then take the root: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = √25 = 5</span>.` },
    { wrong: `Taking <span class="m">√<span style="text-decoration:overline"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span> as <span class="m"><i>a</i> + <i>b</i></span>.`, fix: `A square root does not split over addition: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = 5</span>, while <span class="m">√9 + √16 = 7</span>.` },
    { wrong: `Adding when a leg is missing: hypotenuse 13 and leg 5 gives <span class="m">√<span style="text-decoration:overline">169 + 25</span></span>.`, fix: `The hypotenuse squared is the total, so subtract: <span class="m">√<span style="text-decoration:overline">169 − 25</span> = √144 = 12</span>.` },
    { wrong: `Using the theorem on a triangle with no right angle.`, fix: `<span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span> holds only for right triangles, with <span class="m"><i>c</i></span> the side opposite the right angle.` }
  ],
  practice: [
    { q: `A right triangle has legs 9 cm and 12 cm. Find the hypotenuse.`, a: `<span class="m"><i>c</i> = √<span style="text-decoration:overline">81 + 144</span> = √225 = 15</span> cm.` },
    { q: `A right triangle has hypotenuse 13 m and one leg 5 m. Find the other leg.`, a: `<span class="m"><i>b</i> = √<span style="text-decoration:overline">169 − 25</span> = √144 = 12</span> m.` },
    { q: `Is a triangle with sides 8, 15 and 17 a right triangle? What about 6, 7 and 9?`, a: `<span class="m">8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289 = 17<sup>2</sup></span>, so yes. <span class="m">6<sup>2</sup> + 7<sup>2</sup> = 36 + 49 = 85 ≠ 81 = 9<sup>2</sup></span>, so no; since <span class="m">85 &gt; 81</span>, it is acute.` },
    { q: `A soccer field is 100 m long and 64 m wide. How far is it from one corner to the opposite corner, to the nearest tenth of a metre?`, a: `<span class="m"><i>d</i> = √<span style="text-decoration:overline">100<sup>2</sup> + 64<sup>2</sup></span> = √<span style="text-decoration:overline">10000 + 4096</span> = √14096 ≈ 118.7</span> m.` }
  ],
  origin: `The relationship was known long before Pythagoras (6th century BCE): the Old Babylonian tablet Plimpton 322 (c. 1800 BCE) lists values generated from Pythagorean triples, and the tablet YBC 7289 shows the diagonal of a square as √2 times its side. The earliest surviving proof is Proposition 47 of Book I of Euclid's <i>Elements</i> (c. 300 BCE), and the Chinese text <i>Zhoubi Suanjing</i> discusses the 3-4-5 case under the name <i>gougu</i>.`
};
