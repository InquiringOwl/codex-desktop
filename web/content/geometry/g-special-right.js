window.ARITH = window.ARITH || {};

ARITH["g-special-right"] = {
  title: "Special Right Triangles",
  short: "45°-45°-90° and 30°-60°-90° side ratios, exactly",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · right triangles",
  hero: `<span class="m"><span class="c2"><i>x</i></span> : <span class="c2"><i>x</i></span> : <span class="c1"><i>x</i>√2</span> &nbsp;&nbsp;·&nbsp;&nbsp; <span class="c2"><i>x</i></span> : <span class="c3"><i>x</i>√3</span> : <span class="c1">2<i>x</i></span></span>`,
  lede: `Two right triangles come up so often that their side ratios are worth knowing by heart. The 45°-45°-90° triangle is half a square; the 30°-60°-90° triangle is half an equilateral triangle. One known side gives the other two as exact radicals.`,
  plain: `<p>Cut a square along a diagonal and you get two copies of a right triangle with two equal legs and two 45° angles. If each leg is 1, the Pythagorean Theorem says the diagonal is √2. Make the square bigger and every length grows by the same factor, so the sides of any such triangle are always in the ratio <span class="m">1 : 1 : √2</span>.</p>
<p>Now take an equilateral triangle with sides of 2 and drop a line from the top straight down to the base. It lands at the middle of the base and splits the triangle into two right triangles with angles 30°, 60° and 90°. The side opposite the 30° angle is half the base, 1. The hypotenuse is a full side, 2. The remaining side comes from the Pythagorean Theorem: <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">4 − 1</span> = √3</span>. So the sides are in the ratio <span class="m">1 : √3 : 2</span>.</p>
<p>The smallest side is always across from the smallest angle. In the 30°-60°-90° triangle the short leg faces 30°, the long leg faces 60°, and the hypotenuse faces the right angle.</p>`,
  formal: `<p><b>45°-45°-90° Triangle Theorem.</b> In a 45°-45°-90° triangle, the legs are congruent and the hypotenuse is √2 times as long as a leg: with leg <span class="m c2"><i>x</i></span>, the hypotenuse is <span class="m c1"><i>x</i>√2</span>.</p>
<p><b>30°-60°-90° Triangle Theorem.</b> In a 30°-60°-90° triangle, the hypotenuse is twice as long as the shorter leg, and the longer leg is √3 times as long as the shorter leg: with shorter leg <span class="m c2"><i>x</i></span> (opposite the 30° angle), the longer leg is <span class="m c3"><i>x</i>√3</span> and the hypotenuse is <span class="m c1">2<i>x</i></span>.</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr><tr><td>△<i>ABC</i> is equilateral with side 2<i>x</i>; <span class="ov"><i>AD</i></span> ⊥ <span class="ov"><i>BC</i></span>, <i>D</i> on <span class="ov"><i>BC</i></span></td><td>Given</td></tr><tr><td>m∠<i>B</i> = 60°</td><td>Each angle of an equilateral triangle measures 60°</td></tr><tr><td><i>BD</i> = <i>x</i>, m∠<i>BAD</i> = 30°</td><td>In an isosceles triangle the altitude to the base bisects the base and the vertex angle</td></tr><tr><td><i>AD</i><sup>2</sup> + <i>x</i><sup>2</sup> = (2<i>x</i>)<sup>2</sup></td><td>Pythagorean Theorem in right △<i>ABD</i></td></tr><tr><td><i>AD</i> = <i>x</i>√3</td><td>Solve: <i>AD</i><sup>2</sup> = 3<i>x</i><sup>2</sup>, take the positive root</td></tr></table>
<p>The 45°-45°-90° case is the same argument on half of a square: <span class="m"><i>c</i><sup>2</sup> = <i>x</i><sup>2</sup> + <i>x</i><sup>2</sup> = 2<i>x</i><sup>2</sup></span>, so <span class="m"><i>c</i> = <i>x</i>√2</span>. Both results hold in the other direction too: a triangle whose sides are in the ratio <span class="m">1 : 1 : √2</span> or <span class="m">1 : √3 : 2</span> is similar (SSS∼) to the model triangle, so its angles are 45°, 45°, 90° or 30°, 60°, 90°.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Short leg", desc: "The leg opposite the 30° angle, or either leg of a 45°-45°-90° triangle. Every other side is a multiple of it." },
    { c: "c3", sym: `<i>x</i>√3`, name: "Long leg", desc: "The leg opposite the 60° angle in a 30°-60°-90° triangle. It is the altitude of the equilateral triangle." },
    { c: "c1", sym: `<i>x</i>√2 or 2<i>x</i>`, name: "Hypotenuse", desc: "The side opposite the right angle, always the longest: √2 times a leg, or twice the short leg." },
    { c: "c4", sym: `□ / △`, name: "Parent shape", desc: "The square cut by a diagonal, or the equilateral triangle cut by an altitude, that each special triangle is half of." }
  ],
  steps: { title: "How to solve a special right triangle", items: [
    `Identify the type from its angles (two 45° angles, or 30° and 60°) or from a parent shape: a square's diagonal or an equilateral triangle's altitude.`,
    `Label the sides with the ratio, putting <span class="m c2"><i>x</i></span> on the short leg: <span class="m"><i>x</i>, <i>x</i>, <i>x</i>√2</span> or <span class="m"><i>x</i>, <i>x</i>√3, 2<i>x</i></span>. In the 30°-60°-90° triangle, the short leg is opposite 30°.`,
    `Set the known side equal to its label and solve for <span class="m"><i>x</i></span>. If you divide by √2 or √3, rationalize: <span class="m">10/√2 = 5√2</span>.`,
    `Multiply out to get the other two sides as simplified radicals, then give decimals if asked.`,
    `Check: the hypotenuse is the longest side, and <span class="m">(leg)<sup>2</sup> + (leg)<sup>2</sup> = (hypotenuse)<sup>2</sup></span>.`
  ] },
  example: {
    prompt: `A hex nut is a regular hexagon measuring 19 mm across the flats (the size of the wrench that fits it). Find the length of each side of the hexagon and the distance across the corners, exactly and to the nearest 0.1 mm.`,
    lines: [
      { math: `<span class="m">hexagon = six equilateral △</span>`, note: "Joining the centre to the six vertices makes six congruent isosceles triangles with 360° ÷ 6 = 60° at the centre, so their base angles are also 60° and each is equilateral with side s." },
      { math: `<span class="m"><span class="c3"><i>a</i></span> = 19 ÷ 2 = 9.5</span>`, note: "The apothem a (centre to the middle of a flat) is half the across-flats distance. It is the altitude of one equilateral triangle." },
      { math: `<span class="m"><span class="c3">9.5</span> = <span class="c2"><span class="fr"><span><i>s</i></span><span>2</span></span></span>·√3</span>`, note: "30°-60°-90° Triangle Theorem: the altitude splits the equilateral triangle into two 30°-60°-90° triangles with short leg s/2, long leg a and hypotenuse s." },
      { math: `<span class="m"><span class="c2"><span class="fr"><span><i>s</i></span><span>2</span></span></span> = <span class="fr"><span>19√3</span><span>6</span></span></span>`, note: "Divide by √3 and rationalize: 9.5/√3 = 19/(2√3) = 19√3/6." },
      { math: `<span class="m"><span class="c1"><i>s</i></span> = <span class="fr"><span>19√3</span><span>3</span></span> ≈ 11.0 mm</span>`, note: "The side is the hypotenuse of the small triangle, twice the short leg: 19√3/3 ≈ 10.97 mm." },
      { math: `<span class="m">2<i>s</i> = <span class="fr"><span>38√3</span><span>3</span></span> ≈ 21.9 mm</span>`, note: "Across the corners passes through the centre and spans two radii, each equal to s." },
      { math: `<span class="m"><span class="fr"><span>361</span><span>12</span></span> + <span class="fr"><span>361</span><span>4</span></span> = <span class="fr"><span>361</span><span>3</span></span> = <i>s</i><sup>2</sup></span>`, note: "Check with the Pythagorean Theorem: (s/2)² + a² = (19√3/6)² + 9.5² = 361/12 + 361/4, and s² = (19√3/3)² = 1083/9 = 361/3." }
    ],
    answer: `Each side is <span class="m">19√3/3 ≈ 11.0</span> mm and the nut measures <span class="m">38√3/3 ≈ 21.9</span> mm across the corners.`
  },
  why: `<p>These two triangles turn many geometry problems into exact arithmetic. A square's diagonal, an equilateral triangle's height, the apothem of a regular hexagon, a 45° brace and a 30° roof line can all be found with one multiplication, and the answers stay exact (5√3, not 8.660254…).</p>
<p>They are also where trigonometry starts. The sine, cosine and tangent of 30°, 45° and 60° are read straight off these triangles, and those exact values come back on the unit circle, in vector components in physics and in calculus problems that expect answers like √3/2.</p>`,
  careers: [
    { role: "Electrician", use: "Bends conduit offsets with the standard multipliers: with two 45° bends the distance between bends is about 1.414 times the offset depth, and with 30° bends it is exactly 2 times." },
    { role: "Machinist", use: "Converts hex bar stock between across-flats and across-corners sizes, which differ by the factor 2/√3 ≈ 1.155." },
    { role: "Carpenter", use: "Cuts a 45° corner brace whose legs run 24 in along each board, so the brace is 24√2 ≈ 33.9 in long." },
    { role: "Drafter", use: "Lays out isometric drawings with 30°-60° set squares, where the axes run at 30° to the horizontal." },
    { role: "Tile setter", use: "Plans a diagonal layout, where a 12 in square tile spans 12√2 ≈ 17 in corner to corner across the floor." },
    { role: "Metal fabricator", use: "Sizes triangular gusset plates as 45°-45°-90° triangles so the hypotenuse edge length follows from the leg." }
  ],
  life: [
    "Finding the diagonal of a square table or room",
    "Working out the height of an equilateral triangle on a quilt or a sign",
    "Choosing a wrench size from the corner-to-corner width of a bolt head",
    "Cutting a square sandwich or tile corner to corner",
    "Estimating the height a 45° ramp or brace reaches"
  ],
  fields: [
    { name: "Trigonometry", use: "Exact values of sine, cosine and tangent at 30°, 45° and 60° come from these two triangles." },
    { name: "Physics", use: "Forces and velocities at 30°, 45° and 60° split into components with factors 1/2, √2/2 and √3/2." },
    { name: "Crystallography", use: "In a cubic crystal lattice the face diagonal and body diagonal of the unit cell are √2 and √3 times its edge." },
    { name: "Engineering drawing", use: "Isometric projection and standard drafting triangles are built on 30°, 45° and 60° angles." }
  ],
  prereqWhy: {
    "g-pythagorean": "Both side ratios are proved by applying the Pythagorean Theorem to half a square and half an equilateral triangle.",
    "g-isosceles": "The altitude of an isosceles triangle bisects the base and the vertex angle, which is what splits an equilateral triangle into two 30°-60°-90° triangles.",
    "a1-radicals": "Answers are written as simplified radicals, which needs √12 = 2√3 and rationalizing denominators such as 6/√3 = 2√3."
  },
  unlocksWhy: {
    "g-circle-measure": "The apothem of a regular hexagon, square or equilateral triangle comes from a special right triangle, which gives exact polygon areas ½aP.",
    "g-trig-ratios": "The exact values sin 30° = 1/2, cos 45° = √2/2 and tan 60° = √3 are side ratios of these two triangles.",
    "trig-six-ratios": "The side patterns of the 30°-60°-90° and 45°-45°-90° triangles give the exact values of all six ratios at 30°, 45° and 60°.",
    "trig-unit-circle": "These two triangles with hypotenuse 1 give the coordinates of the unit-circle points at <span class=\"m\">π/6</span>, <span class=\"m\">π/4</span> and <span class=\"m\">π/3</span>."
  },
  beyond: [
    { field: "Trigonometry", why: "The reference triangles on the unit circle are these two triangles, which give every exact value at multiples of 30° and 45°." },
    { field: "Precalculus", why: "Polar coordinates and complex numbers at angles like 60° use the √3/2 and 1/2 components from the 30°-60°-90° triangle." },
    { field: "Physics", why: "Inclined planes and projectiles launched at 30°, 45° or 60° are solved exactly with these ratios." },
    { field: "Calculus I", why: "Limits, derivatives and integrals of trigonometric functions at standard angles expect exact answers like √3/2." }
  ],
  mistakes: [
    { wrong: `Putting √3 on the hypotenuse of a 30°-60°-90° triangle: sides <span class="m"><i>x</i>, 2<i>x</i>, <i>x</i>√3</span> with <span class="m"><i>x</i>√3</span> as the longest.`, fix: `<span class="m">√3 ≈ 1.73 &lt; 2</span>, so <span class="m">2<i>x</i></span> is the hypotenuse. The long leg is <span class="m"><i>x</i>√3</span>, opposite the 60° angle.` },
    { wrong: `A 45°-45°-90° triangle with hypotenuse 10 has legs <span class="m">10√2</span>.`, fix: `The legs are shorter than the hypotenuse. Solve <span class="m"><i>x</i>√2 = 10</span>: <span class="m"><i>x</i> = 10/√2 = 5√2 ≈ 7.1</span>.` },
    { wrong: `Putting <span class="m"><i>x</i></span> on the leg next to the 30° angle.`, fix: `The short leg is <i>opposite</i> the 30° angle. The leg next to 30° is opposite 60°, so it is the long leg <span class="m"><i>x</i>√3</span>.` },
    { wrong: `Using the ratios for any right triangle, such as legs 6 and 10.`, fix: `The ratios hold only for these angles. Legs 6 and 10 have ratio 5/3 ≈ 1.67, not √3, so the triangle is not 30°-60°-90°.` }
  ],
  practice: [
    { q: `(a) A 45°-45°-90° triangle has legs of 7. Find the hypotenuse. (b) Another has hypotenuse 10. Find each leg.`, a: `(a) <span class="m">7√2 ≈ 9.9</span>. (b) <span class="m"><i>x</i>√2 = 10</span>, so <span class="m"><i>x</i> = 10/√2 = 5√2 ≈ 7.1</span>.` },
    { q: `A 30°-60°-90° triangle has hypotenuse 18. Find both legs.`, a: `Short leg <span class="m">18 ÷ 2 = 9</span>; long leg <span class="m">9√3 ≈ 15.6</span>.` },
    { q: `The longer leg of a 30°-60°-90° triangle is 12. Find the shorter leg and the hypotenuse.`, a: `<span class="m"><i>x</i>√3 = 12</span>, so <span class="m"><i>x</i> = 12/√3 = 4√3 ≈ 6.9</span>; hypotenuse <span class="m">2<i>x</i> = 8√3 ≈ 13.9</span>.` },
    { q: `(a) A right triangle has legs 6 and 6√3. Find the hypotenuse and both acute angles. (b) Is a right triangle with legs 6 and 10 a 30°-60°-90° triangle?`, a: `(a) Hypotenuse <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">36 + 108</span> = √144 = 12</span>. The sides are <span class="m">6 : 6√3 : 12 = 1 : √3 : 2</span>, so the angles are 30° (opposite 6) and 60° (opposite 6√3). (b) No. Its hypotenuse is <span class="m">√136 = 2√34</span>, and <span class="m">10/6 = 5/3 ≠ √3</span>, so the sides are not in the ratio <span class="m">1 : √3 : 2</span>.` }
  ],
  origin: `In the <i>Timaeus</i> (about 360 BCE) Plato builds the faces of four of the five regular solids (all but the dodecahedron) from exactly these two right triangles: the isosceles right triangle and the half of an equilateral triangle, which he calls the most beautiful of the scalene right triangles.`
};
