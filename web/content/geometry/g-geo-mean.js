window.ARITH = window.ARITH || {};

ARITH["g-geo-mean"] = {
  title: "Geometric Mean & Altitudes of Right Triangles",
  short: "The altitude to the hypotenuse is the geometric mean",
  grade: "Grade 10 · college-prep Geometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Geometry · right triangles",
  hero: `<span class="m"><span class="c1"><i>h</i></span><sup>2</sup> = <span class="c2"><i>p</i></span><span class="c3"><i>q</i></span>, &nbsp; <span class="c4"><i>a</i></span><sup>2</sup> = <span class="c2"><i>p</i></span><i>c</i>, &nbsp; <span class="c4"><i>b</i></span><sup>2</sup> = <span class="c3"><i>q</i></span><i>c</i></span>`,
  lede: `The altitude from the right angle to the hypotenuse cuts a right triangle into two smaller triangles, and all three are similar. Their proportions make the altitude the geometric mean of the two pieces of the hypotenuse, and each leg the geometric mean of the hypotenuse and the piece next to it.`,
  plain: `<p>The <b>geometric mean</b> of two positive numbers is the number that sits between them by multiplying instead of adding. The arithmetic mean of 4 and 9 is 6.5, halfway by steps of adding. Their geometric mean is 6, because 4 × 1.5 = 6 and 6 × 1.5 = 9: the same multiplier takes you from 4 to 6 and from 6 to 9. In symbols, <span class="m"><i>x</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>ab</i></span></span>.</p>
<p>Take a right triangle and drop a line from the right angle straight down to the hypotenuse. This <b>altitude</b> splits the triangle into two smaller right triangles. Each small triangle shares one acute angle with the big one, so by AA all three triangles are similar, just turned and scaled.</p>
<p>Comparing their sides gives three short rules. If the altitude <span class="m c1"><i>h</i></span> cuts the hypotenuse <span class="m"><i>c</i></span> into pieces <span class="m c2"><i>p</i></span> and <span class="m c3"><i>q</i></span>, then <span class="m"><i>h</i><sup>2</sup> = <i>pq</i></span>. Each leg squared equals the whole hypotenuse times the piece next to that leg. Add the two leg rules and you get the Pythagorean Theorem.</p>`,
  formal: `<p>For positive numbers <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>, the <b>geometric mean</b> is the positive number <span class="m"><i>x</i></span> with <span class="m"><i>a</i>/<i>x</i> = <i>x</i>/<i>b</i></span>, that is <span class="m"><i>x</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>ab</i></span></span>. Let <span class="m">△<i>ABC</i></span> have its right angle at <span class="m"><i>C</i></span>, legs <span class="m"><i>a</i> = <i>BC</i></span> and <span class="m"><i>b</i> = <i>AC</i></span>, hypotenuse <span class="m"><i>c</i> = <i>AB</i></span>, and altitude <span class="m"><span class="ov"><i>CD</i></span></span> of length <span class="m"><i>h</i></span>, with <span class="m"><i>p</i> = <i>DB</i></span> and <span class="m"><i>q</i> = <i>AD</i></span>.</p>
<div class="display"><b>Right Triangle Altitude Theorem.</b> The altitude to the hypotenuse of a right triangle forms two triangles that are similar to the original triangle and to each other: △<i>ACB</i> ∼ △<i>ADC</i> ∼ △<i>CDB</i>.<br><b>Corollary 1 (altitude).</b> <span class="fr"><span><i>q</i></span><span><i>h</i></span></span> = <span class="fr"><span><i>h</i></span><span><i>p</i></span></span>, so <i>h</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>pq</i></span><br><b>Corollary 2 (legs).</b> <span class="fr"><span><i>c</i></span><span><i>a</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>p</i></span></span> and <span class="fr"><span><i>c</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>b</i></span><span><i>q</i></span></span>, so <i>a</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>pc</i></span>, <i>b</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>qc</i></span></div>
<p>Proof of the similarity: <span class="m">△<i>ADC</i></span> and <span class="m">△<i>ACB</i></span> are right triangles sharing <span class="m">∠<i>A</i></span>, so they are similar by AA; likewise <span class="m">△<i>CDB</i> ∼ △<i>ACB</i></span> through <span class="m">∠<i>B</i></span>; transitivity gives the third pair. Adding the corollaries, <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = (<i>p</i> + <i>q</i>)<i>c</i> = <i>c</i><sup>2</sup></span>. Comparing areas also gives <span class="m"><i>h</i> = <i>ab</i>/<i>c</i></span>. Because <span class="m"><i>C</i></span> lies on the circle with diameter <span class="m"><span class="ov"><i>AB</i></span></span>, <span class="m"><i>h</i></span> is at most the radius: <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em"><i>pq</i></span> ≤ (<i>p</i> + <i>q</i>)/2</span>, the inequality of arithmetic and geometric means, with equality only when <span class="m"><i>p</i> = <i>q</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>p</i> = <i>DB</i>`, name: "Segment p", desc: "The piece of the hypotenuse next to leg <i>a</i>, from the foot of the altitude to <i>B</i>." },
    { c: "c3", sym: `<i>q</i> = <i>AD</i>`, name: "Segment q", desc: "The piece of the hypotenuse next to leg <i>b</i>, from <i>A</i> to the foot of the altitude. <span class=\"m\"><i>p</i> + <i>q</i> = <i>c</i></span>." },
    { c: "c1", sym: `<i>h</i> = <i>CD</i>`, name: "Altitude", desc: "The perpendicular from the right angle to the hypotenuse, the geometric mean of <i>p</i> and <i>q</i>." },
    { c: "c4", sym: `<i>a</i>, <i>b</i>`, name: "Legs", desc: "Each leg is the geometric mean of the hypotenuse and the adjacent segment: <span class=\"m\"><i>a</i><sup>2</sup> = <i>pc</i></span>, <span class=\"m\"><i>b</i><sup>2</sup> = <i>qc</i></span>." }
  ],
  steps: { title: "How to solve a right triangle with its altitude", items: [
    `Label the right angle <span class="m"><i>C</i></span>, the foot of the altitude <span class="m"><i>D</i></span>, and the pieces <span class="m"><i>p</i></span> and <span class="m"><i>q</i></span> of the hypotenuse, each named for the leg it touches.`,
    `If the unknown is the altitude, use <span class="m"><i>h</i><sup>2</sup> = <i>pq</i></span>.`,
    `If the unknown is a leg or the piece next to it, use <span class="m"><i>a</i><sup>2</sup> = <i>pc</i></span> or <span class="m"><i>b</i><sup>2</sup> = <i>qc</i></span>, with the whole hypotenuse <span class="m"><i>c</i> = <i>p</i> + <i>q</i></span>.`,
    `Solve, keeping square roots exact and simplified, then give decimals.`,
    `Check with the Pythagorean Theorem or with <span class="m"><i>h</i> = <i>ab</i>/<i>c</i></span>.`
  ] },
  example: {
    prompt: `A forester estimates a tree's height with a carpenter's square held at eye level, 1.6 m above level ground, 6.0 m from the trunk. She tilts it until one arm sights the top of the tree and the other arm sights the base. Her eye <span class="m"><i>E</i></span> is the right angle of △<i>TEB</i>, where <span class="m"><i>T</i></span> is the top and <span class="m"><i>B</i></span> the base of the trunk, and the level line from her eye to the trunk at <span class="m"><i>D</i></span> is the altitude to the hypotenuse <span class="m"><span class="ov"><i>TB</i></span></span>. How tall is the tree?`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>h</i> = <i>ED</i> = 6.0</span>, &nbsp; <span class="c3"><i>q</i> = <i>DB</i> = 1.6</span></span>`, note: "The level sight line meets the vertical trunk at a right angle, so ED is the altitude; DB is her eye height." },
      { math: `<span class="m"><span class="c1"><i>h</i></span><sup>2</sup> = <span class="c2"><i>p</i></span><span class="c3"><i>q</i></span></span>`, note: "Geometric mean (altitude) corollary of the Right Triangle Altitude Theorem." },
      { math: `<span class="m">6.0<sup>2</sup> = <span class="c2"><i>p</i></span> · 1.6</span>`, note: "Substitute the measurements." },
      { math: `<span class="m c2"><i>p</i> = 36 ÷ 1.6 = 22.5 m</span>`, note: "p = TD, the part of the tree above eye level." },
      { math: `<span class="m"><i>TB</i> = 22.5 + 1.6 = 24.1 m</span>`, note: "Segment Addition Postulate: the tree is p + q." },
      { math: `<span class="m">542.25 + 38.56 = 580.81 = 24.1<sup>2</sup> ✓</span>`, note: "Check with the Pythagorean Theorem: ET² = 6.0² + 22.5² = 542.25 and EB² = 6.0² + 1.6² = 38.56 add to TB²." }
    ],
    answer: `The tree is about <span class="m">24.1</span> m tall.`
  },
  why: `<p>The geometric mean is the right average for anything that grows by multiplying: average growth rates, average returns over several years, the middle of a range of frequencies or brightness levels. Geometry gives it a picture. The altitude in a right triangle, or a half-chord perpendicular to a diameter, has exactly that length, which is how Euclid constructed a "mean proportional" with compass and straightedge.</p>
<p>The three similar triangles are also one of the cleanest proofs of the Pythagorean Theorem, and they appear again in trigonometry, in the geometry of circles (the half-chord rule is a special case of intersecting chords), and in the comparison of arithmetic and geometric means used throughout algebra and analysis.</p>`,
  careers: [
    { role: "Forester", use: "Estimates tree heights from eye height and distance with a right-angle sighting tool, using h² = pq." },
    { role: "Financial analyst", use: "Reports average annual returns as a geometric mean, the nth root of the product of the yearly growth factors." },
    { role: "Audio engineer", use: "Finds the centre frequency of a band-pass filter as the geometric mean of its lower and upper cutoff frequencies." },
    { role: "Statistician", use: "Uses the geometric mean to summarise ratio data such as price indexes and bacterial counts that vary over orders of magnitude." },
    { role: "Machinist", use: "Computes the depth of a cut across a cylinder from the chord width, using the half-chord as a geometric mean of the diameter's two pieces." },
    { role: "Photographer", use: "Recognises that f-stops form a geometric sequence, so each stop is the geometric mean of its neighbours." }
  ],
  life: [
    "Averaging investment growth over several years correctly",
    "Estimating the height of a tree or a building with a square or a folded sheet of paper",
    "Finding how deep a round pipe or log is cut by a flat saw cut of known width",
    "Choosing a middle size between two sizes that differ by a factor, such as two screen sizes",
    "Finding the note halfway between two pitches: in equal temperament its frequency is the geometric mean of theirs"
  ],
  fields: [
    { name: "Finance", use: "Compound annual growth rate is a geometric mean of growth factors." },
    { name: "Signal processing", use: "Centre frequencies of filters and octave bands are geometric means." },
    { name: "Statistics", use: "The geometric mean and log transforms summarise skewed, multiplicative data." },
    { name: "Surveying and forestry", use: "Right-angle sighting instruments apply the altitude relations directly." }
  ],
  prereqWhy: {
    "g-similar-triangles": "The altitude splits the right triangle into two triangles similar to it by AA, and every relation here is a proportion between those similar triangles."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Geometric sequences have each term equal to the geometric mean of its neighbours, and the AM–GM inequality bounds products by sums." },
    { field: "Trigonometry", why: "In the altitude figure the segments are p = a cos B and q = b cos A, linking the geometric-mean relations to the trigonometric ratios." },
    { field: "Statistics", why: "The geometric mean is the standard average for growth rates and log-normally distributed data." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>a</i><sup>2</sup> = <i>pq</i></span> or <span class="m"><i>a</i><sup>2</sup> = <i>qc</i></span> for a leg.`, fix: `A leg pairs with the whole hypotenuse and the piece <i>next to that leg</i>: <span class="m"><i>a</i><sup>2</sup> = <i>pc</i></span>. Only the altitude uses the two pieces, <span class="m"><i>h</i><sup>2</sup> = <i>pq</i></span>.` },
    { wrong: `Taking <span class="m"><i>c</i></span> to be one piece of the hypotenuse.`, fix: `<span class="m"><i>c</i> = <i>p</i> + <i>q</i></span> is the whole hypotenuse. Add the pieces before using <span class="m"><i>a</i><sup>2</sup> = <i>pc</i></span>.` },
    { wrong: `Confusing the geometric mean with the arithmetic mean: "the geometric mean of 4 and 16 is 10".`, fix: `The geometric mean multiplies: <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">4 · 16</span> = 8</span>. The arithmetic mean, 10, is never smaller.` }
  ],
  practice: [
    { q: `Find the geometric mean of (a) 4 and 9, (b) 5 and 15, as an exact value and to the nearest tenth.`, a: `(a) <span class="m">√36 = 6</span>. (b) <span class="m">√75 = 5√3 ≈ 8.7</span>.` },
    { q: `The altitude to the hypotenuse of a right triangle divides the hypotenuse into segments of length 4 and 16. Find the altitude and both legs.`, a: `<span class="m"><i>c</i> = 20</span>. Altitude <span class="m"><i>h</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">4 · 16</span> = 8</span>. Legs <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">4 · 20</span> = 4√5 ≈ 8.9</span> and <span class="m">√<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">16 · 20</span> = 8√5 ≈ 17.9</span>. Check: <span class="m">80 + 320 = 400 = 20<sup>2</sup></span>.` },
    { q: `A right triangle has a leg of length 6 and hypotenuse 10. Find the two segments into which the altitude divides the hypotenuse, and the altitude.`, a: `The segment next to the leg 6: <span class="m">6<sup>2</sup> = 10<i>p</i></span>, so <span class="m"><i>p</i> = 3.6</span>, and <span class="m"><i>q</i> = 6.4</span>. Altitude <span class="m"><i>h</i> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">3.6 · 6.4</span> = √23.04 = 4.8</span>. Check: the other leg is 8 and <span class="m"><i>ab</i>/<i>c</i> = 48/10 = 4.8</span>.` },
    { q: `The altitude to the hypotenuse of a right triangle is 12 and the hypotenuse is 25. Find the two segments of the hypotenuse. Is there a right triangle with hypotenuse 20 and altitude 12 to it?`, a: `<span class="m"><i>p</i> + <i>q</i> = 25</span> and <span class="m"><i>pq</i> = 144</span>, so <span class="m"><i>p</i></span> and <span class="m"><i>q</i></span> are the roots of <span class="m"><i>t</i><sup>2</sup> − 25<i>t</i> + 144 = 0</span>: 9 and 16 (legs 15 and 20). With hypotenuse 20, <span class="m"><i>t</i><sup>2</sup> − 20<i>t</i> + 144 = 0</span> has discriminant <span class="m">400 − 576 &lt; 0</span>: no such triangle. The altitude can be at most half the hypotenuse, here 10.` }
  ],
  origin: `Proposition VI.8 of Euclid's <i>Elements</i> (about 300 BCE) proves that the perpendicular from the right angle to the base makes triangles similar to the whole and to each other, and a porism adds that it is a mean proportional between the segments of the base. Proposition VI.13 uses this in a semicircle to construct the mean proportional of two given lengths.`
};
