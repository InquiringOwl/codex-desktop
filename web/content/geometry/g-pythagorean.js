window.ARITH = window.ARITH || {};

ARITH["g-pythagorean"] = {
  title: "The Pythagorean Theorem & Its Converse",
  short: "a² + b² = c², and only right triangles satisfy it",
  grade: "Grade 10 · college-prep Geometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Geometry · right triangles",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup> &nbsp;⇔&nbsp; m∠<i>C</i> = 90°</span>`,
  lede: `In a right triangle the square on the hypotenuse equals the sum of the squares on the legs. The converse is just as useful: three sides that satisfy the equation always make a right angle, and comparing c² with a² + b² sorts every triangle into acute, right or obtuse.`,
  plain: `<p>The theorem itself you have met: in a right triangle with legs <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> and hypotenuse <span class="m c1"><i>c</i></span>, <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>. In geometry we prove it. One proof cuts a big square into four copies of the triangle plus one tilted square of area <span class="m"><i>c</i><sup>2</sup></span>, then rearranges the same four copies to leave two squares of areas <span class="m"><i>a</i><sup>2</sup></span> and <span class="m"><i>b</i><sup>2</sup></span>. Another drops the altitude to the hypotenuse and uses the three similar triangles it creates.</p>
<p>The <b>converse</b> runs the other way. If three side lengths satisfy <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>, the angle opposite <span class="m"><i>c</i></span> is a right angle. Builders use this every day: measure 3 ft along one wall, 4 ft along the other, and if the diagonal is exactly 5 ft, the corner is square.</p>
<p>If the numbers do not balance, the angle is not right, and the direction tells you which way it is off. When <span class="m"><i>c</i><sup>2</sup></span> is too big, the angle opposite <span class="m"><i>c</i></span> has opened past 90° (obtuse). When <span class="m"><i>c</i><sup>2</sup></span> is too small, every angle is less than 90° (acute).</p>`,
  formal: `<div class="display"><b>Pythagorean Theorem.</b> In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the legs: <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>.<br><b>Converse.</b> If the side lengths of a triangle satisfy <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, the triangle is a right triangle with its right angle opposite the side of length <i>c</i>.<br><b>Pythagorean Inequalities.</b> If <i>c</i> is the longest side of a triangle: <i>c</i><sup>2</sup> &lt; <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> ⇒ acute; &nbsp;<i>c</i><sup>2</sup> &gt; <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> ⇒ obtuse.</div>
<p><b>Proof by similar triangles.</b> With the right angle at <span class="m"><i>C</i></span>, the altitude <span class="m"><span class="ov"><i>CD</i></span></span> divides the hypotenuse into <span class="m"><i>p</i> = <i>DB</i></span> and <span class="m"><i>q</i> = <i>AD</i></span>. Each small triangle is similar to <span class="m">△<i>ACB</i></span> by AA, so <span class="m"><i>c</i>/<i>a</i> = <i>a</i>/<i>p</i></span> and <span class="m"><i>c</i>/<i>b</i> = <i>b</i>/<i>q</i></span>. Then <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>cp</i> + <i>cq</i> = <i>c</i>(<i>p</i> + <i>q</i>) = <i>c</i><sup>2</sup></span>. <b>Proof of the converse.</b> Build a right triangle with legs <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>; by the theorem its hypotenuse is <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> = <i>c</i></span>, so it is congruent to the given triangle by SSS, and corresponding angles are congruent. The inequalities are proved the same way, comparing the given triangle with that right triangle by the Converse of the Hinge Theorem (SSS Inequality). Before classifying, check that the lengths form a triangle at all: <span class="m"><i>a</i> + <i>b</i> &gt; <i>c</i></span>. A <b>Pythagorean triple</b> is a set of positive integers with <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>; for integers <span class="m"><i>m</i> &gt; <i>n</i> &gt; 0</span>, the numbers <span class="m"><i>m</i><sup>2</sup> − <i>n</i><sup>2</sup>, 2<i>mn</i>, <i>m</i><sup>2</sup> + <i>n</i><sup>2</sup></span> always form one (Euclid's formula).</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First leg", desc: "One side of the right angle, <span class=\"m\"><i>a</i> = <i>BC</i></span>." },
    { c: "c3", sym: `<i>b</i>`, name: "Second leg", desc: "The other side of the right angle, <span class=\"m\"><i>b</i> = <i>AC</i></span>." },
    { c: "c1", sym: `<i>c</i>`, name: "Hypotenuse", desc: "The side opposite the right angle, always the longest side. In the converse, <i>c</i> is the longest of the three given lengths." },
    { c: "c4", sym: `<i>h</i> = <i>CD</i>`, name: "Altitude", desc: "The perpendicular from the right angle to the hypotenuse. It creates the two similar triangles used in the proof." }
  ],
  steps: { title: "How to use the theorem and its converse", items: [
    `To find a side of a right triangle, identify the hypotenuse (opposite the right angle) and substitute into <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>.`,
    `Solve for the unknown square, take the principal square root, and simplify the radical before rounding.`,
    `To classify a triangle from its sides, first check the Triangle Inequality: the two shorter sides must add to more than the longest.`,
    `Let <span class="m"><i>c</i></span> be the longest side and compare <span class="m"><i>c</i><sup>2</sup></span> with <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>: equal means right, less means acute, greater means obtuse.`,
    `For a right angle in the field, scale a known triple such as 3-4-5 and check the diagonal.`
  ] },
  example: {
    prompt: `A builder frames a rectangular deck 12 ft by 16 ft. (a) What should the diagonal measure if the corners are right angles? (b) She measures a diagonal of 20 ft 3 in. Is the corner between the two sides acute, right or obtuse?`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>d</i></span><sup>2</sup> = <span class="c2">12</span><sup>2</sup> + <span class="c3">16</span><sup>2</sup></span>`, note: "Pythagorean Theorem in the right triangle formed by two sides of the deck and a diagonal." },
      { math: `<span class="m"><span class="c1"><i>d</i></span><sup>2</sup> = 144 + 256 = 400, &nbsp; <span class="c1"><i>d</i> = 20</span> ft</span>`, note: "Principal square root of 400." },
      { math: `<span class="m">12 + 16 &gt; 20.25</span>`, note: "The measured lengths 12, 16 and 20 ft 3 in = 20.25 ft do form a triangle (Triangle Inequality)." },
      { math: `<span class="m">20.25<sup>2</sup> = 410.0625</span>`, note: "Square the longest side." },
      { math: `<span class="m">410.0625 &gt; 400 = 12<sup>2</sup> + 16<sup>2</sup></span>`, note: "Pythagorean Inequalities: c² > a² + b², so the angle opposite the diagonal is obtuse." },
      { math: `<span class="m">12 : 16 : 20 = 3 : 4 : 5 ✓</span>`, note: "Check: the target is the 3-4-5 triple scaled by 4, so 20 ft is the right-angle diagonal." }
    ],
    answer: `(a) The diagonal should be 20 ft. (b) At 20 ft 3 in, the corner is obtuse, so the frame is out of square and that corner must be closed up until the diagonal reads 20 ft.`
  },
  why: `<p>This is probably the most used theorem in all of mathematics. It turns coordinates into distances (the Distance Formula), gives the equation of a circle, the slant heights of cones and pyramids, the length of a vector, and the size of a screen from its width and height. The converse is the oldest practical test for a right angle, and the inequalities let you read the shape of a triangle from its sides alone.</p>
<p>The theorem also links algebra and geometry deeply. In neutral geometry (Euclid's axioms with the Parallel Postulate left out) the theorem is equivalent to the Parallel Postulate: each can be proved from the other. In hyperbolic geometry, where the Parallel Postulate fails, and on a sphere, a² + b² = c² is false for right triangles. It generalises to the Law of Cosines, <span class="m"><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i></span>, whose last term is exactly the correction the Pythagorean Inequalities detect.</p>`,
  careers: [
    { role: "Carpenter", use: "Squares up foundations, decks and wall frames by checking a 3-4-5 or 6-8-10 diagonal." },
    { role: "Electrician", use: "Computes the length of conduit run diagonally across a wall or ceiling from its horizontal and vertical offsets." },
    { role: "Surveyor", use: "Converts slope distances and elevation changes into horizontal distances with right triangles." },
    { role: "Navigator", use: "Finds the straight-line distance and the resulting speed from north–south and east–west components." },
    { role: "Firefighter", use: "Places a ladder so that its length, the wall height and the base distance satisfy the theorem for a safe angle." },
    { role: "Game developer", use: "Computes distances between objects for collision checks, often comparing squared distances to skip the square root." }
  ],
  life: [
    "Checking that a picture frame or a bookshelf is square by measuring both diagonals",
    "Working out a TV's width and height from its advertised diagonal size",
    "Finding how far up a wall a ladder will reach",
    "Cutting across a rectangular park instead of walking around it",
    "Sizing a diagonal brace for a gate"
  ],
  fields: [
    { name: "Construction", use: "The 3-4-5 rule lays out right angles for foundations and framing." },
    { name: "Physics", use: "Perpendicular components of forces and velocities combine by the theorem." },
    { name: "Computer graphics", use: "Vector lengths, normalisation and distance tests all use sums of squares." },
    { name: "Navigation", use: "Distances and resultant speeds from perpendicular components." }
  ],
  prereqWhy: {
    "g-similar-triangles": "The proof uses the two triangles cut off by the altitude to the hypotenuse, each similar to the whole triangle by AA.",
    "pa-pythagorean": "The statement of the theorem and the routine of solving for a missing side come from the earlier course; here they are proved and extended."
  },
  unlocksWhy: {
    "g-chords-tangents": "The distance from the centre to a chord, the half-chord and the radius form a right triangle, and a tangent segment from an external point is a leg of another.",
    "g-special-right": "The side ratios 1 : 1 : √2 and 1 : √3 : 2 of the 45°-45°-90° and 30°-60°-90° triangles are found with the Pythagorean Theorem.",
    "g-surface-area": "The slant height of a regular pyramid or a cone is the hypotenuse of a right triangle formed with the height and an apothem or radius.",
    "trig-law-cosines": "The Law of Cosines is the Pythagorean Theorem plus a correction term, and it reduces to <span class=\"m\"><i>a</i>² + <i>b</i>² = <i>c</i>²</span> when the angle is 90°."
  },
  beyond: [
    { field: "Trigonometry", why: "The identity sin²θ + cos²θ = 1 and the Law of Cosines are the Pythagorean Theorem in other forms." },
    { field: "Precalculus", why: "The distance formula, the equation of a circle and the magnitude of a vector are all built on it." },
    { field: "Linear Algebra", why: "The length of a vector in n dimensions is the square root of the sum of the squares of its components, and orthogonal vectors satisfy |u + v|² = |u|² + |v|²." },
    { field: "Number Theory", why: "Pythagorean triples are the integer solutions of a² + b² = c², all generated by Euclid's formula." }
  ],
  mistakes: [
    { wrong: `In a right triangle with sides 6 and 10, writing <span class="m"><i>c</i><sup>2</sup> = 6<sup>2</sup> + 10<sup>2</sup></span> when 10 is the hypotenuse.`, fix: `The hypotenuse is opposite the right angle and is always longest. Here <span class="m">6<sup>2</sup> + <i>b</i><sup>2</sup> = 10<sup>2</sup></span>, so <span class="m"><i>b</i> = 8</span>.` },
    { wrong: `Simplifying <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span> to <span class="m"><i>a</i> + <i>b</i></span>.`, fix: `A square root does not split over a sum: <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">3<sup>2</sup> + 4<sup>2</sup></span> = 5</span>, not 7.` },
    { wrong: `Classifying 2, 3, 6 as obtuse because <span class="m">36 &gt; 4 + 9</span>.`, fix: `First check the Triangle Inequality. <span class="m">2 + 3 &lt; 6</span>, so no triangle has these sides.` },
    { wrong: `Comparing the square of a side that is not the longest.`, fix: `The Pythagorean Inequalities use the longest side as <span class="m"><i>c</i></span>; any other choice gives a wrong classification.` }
  ],
  practice: [
    { q: `Find the missing side of each right triangle, exactly and to the nearest tenth where needed. (a) Legs 9 and 12. (b) Hypotenuse 13, one leg 5. (c) Legs 5 and 7.`, a: `(a) <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">81 + 144</span> = √225 = 15</span>. (b) <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">169 − 25</span> = √144 = 12</span>. (c) <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">25 + 49</span> = √74 ≈ 8.6</span>.` },
    { q: `Classify the triangle with the given sides as acute, right or obtuse, or say it is not a triangle. (a) 7, 24, 25. (b) 6, 7, 9. (c) 5, 8, 11. (d) 2, 3, 6.`, a: `(a) <span class="m">49 + 576 = 625 = 25<sup>2</sup></span>: right. (b) <span class="m">81 &lt; 36 + 49 = 85</span>: acute. (c) <span class="m">5 + 8 &gt; 11</span> and <span class="m">121 &gt; 25 + 64 = 89</span>: obtuse. (d) <span class="m">2 + 3 &lt; 6</span>: not a triangle.` },
    { q: `A "55-inch" television has a 55 in diagonal and a 16 : 9 width-to-height ratio. Find its width and height to the nearest tenth of an inch.`, a: `Let the sides be <span class="m">16<i>t</i></span> and <span class="m">9<i>t</i></span>. Then <span class="m">(16<i>t</i>)<sup>2</sup> + (9<i>t</i>)<sup>2</sup> = 55<sup>2</sup></span>, so <span class="m">337<i>t</i><sup>2</sup> = 3025</span> and <span class="m"><i>t</i> = 55/√337 ≈ 2.996</span>. Width <span class="m">≈ 47.9</span> in, height <span class="m">≈ 27.0</span> in.` },
    { q: `A shipping box measures 3 ft by 4 ft by 12 ft. Will a straight 13.5 ft pole fit inside it, corner to opposite corner?`, a: `The diagonal of the 3 by 4 base is <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">9 + 16</span> = 5</span> ft. That diagonal and the 12 ft edge are perpendicular, so the space diagonal is <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">25 + 144</span> = 13</span> ft. The 13.5 ft pole does not fit; the longest straight object is 13 ft.` }
  ],
  origin: `The relation was used in Babylonia more than a thousand years before Euclid, but the classic proof is Proposition I.47 of Euclid's <i>Elements</i> (about 300 BCE), and the very next proposition, I.48, proves the converse. Proposition VI.31 extends the theorem to any similar figures drawn on the three sides. Among hundreds of later proofs is one by James A. Garfield, published in 1876, five years before he became US president, which uses a trapezoid made of three right triangles.`
};
