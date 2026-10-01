window.ARITH = window.ARITH || {};

ARITH["g-trig-ratios"] = {
  title: "Right-Triangle Trigonometry",
  short: "Sine, cosine and tangent of an acute angle",
  grade: "Grade 10 · college-prep Geometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Geometry · right-triangle trigonometry",
  hero: `<span class="m">sin <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c3">opp</span><span class="c4">hyp</span></span> &nbsp; cos <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c2">adj</span><span class="c4">hyp</span></span> &nbsp; tan <span class="c1"><i>θ</i></span> = <span class="fr"><span class="c3">opp</span><span class="c2">adj</span></span></span>`,
  lede: `In a right triangle, the ratio of two sides depends only on the acute angle, not on how big the triangle is. Those ratios have names, sine, cosine and tangent, and they turn one angle and one side into every other side.`,
  plain: `<p>Draw a right triangle with a 35° angle, then a bigger one with the same 35° angle. The two are similar, so each side of the big one is the same multiple of the matching side of the small one. That means a ratio such as "side across from the 35° angle ÷ longest side" comes out the same in both. It is a property of 35°, not of the triangle.</p>
<p>Stand at the angle <span class="m c1"><i>θ</i></span> and name the sides from there. The <b>hypotenuse</b> is the longest side, across from the right angle. The <b>opposite</b> leg is across from <span class="m c1"><i>θ</i></span>. The <b>adjacent</b> leg touches <span class="m c1"><i>θ</i></span> and is not the hypotenuse. Then <b>sine</b> is opposite over hypotenuse, <b>cosine</b> is adjacent over hypotenuse, and <b>tangent</b> is opposite over adjacent. The memory aid is SOH-CAH-TOA.</p>
<p>If you know an angle and a side, a calculator gives the ratio and one multiplication or division gives the missing side. If you know two sides, the <b>inverse</b> keys (sin⁻¹, cos⁻¹, tan⁻¹) run the other way and give the angle.</p>`,
  formal: `<p>Let <span class="m c1"><i>θ</i></span> be an acute angle of right △<i>ABC</i> with right angle at <i>C</i>. Any two right triangles with an acute angle of measure <span class="m"><i>θ</i></span> are similar by AA, so the following ratios depend only on <span class="m"><i>θ</i></span> (0° &lt; <i>θ</i> &lt; 90°):</p>
<div class="display">sin <i>θ</i> = <span class="fr"><span class="c3">opposite</span><span class="c4">hypotenuse</span></span> &nbsp;&nbsp; cos <i>θ</i> = <span class="fr"><span class="c2">adjacent</span><span class="c4">hypotenuse</span></span> &nbsp;&nbsp; tan <i>θ</i> = <span class="fr"><span class="c3">opposite</span><span class="c2">adjacent</span></span><br><span class="dim">so</span> &nbsp;tan <i>θ</i> = <span class="fr"><span>sin <i>θ</i></span><span>cos <i>θ</i></span></span>, &nbsp; sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = 1, &nbsp; sin <i>θ</i> = cos(90° − <i>θ</i>)</div>
<p>The identity <span class="m">sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = 1</span> is the Pythagorean Theorem divided by <span class="m">(hyp)<sup>2</sup></span>; the cofunction identity holds because the leg opposite one acute angle is adjacent to the other, and the acute angles are complementary. For acute angles, <span class="m">0 &lt; sin <i>θ</i> &lt; 1</span>, <span class="m">0 &lt; cos <i>θ</i> &lt; 1</span> and <span class="m">tan <i>θ</i> &gt; 0</span>. The inverse ratios undo them: for <span class="m">0 &lt; <i>r</i> &lt; 1</span>, <span class="m">sin<sup>−1</sup> <i>r</i></span> is the acute angle whose sine is <span class="m"><i>r</i></span>, and similarly for <span class="m">cos<sup>−1</sup></span>, and <span class="m">tan<sup>−1</sup> <i>r</i></span> for any <span class="m"><i>r</i> &gt; 0</span>. The special right triangles give exact values: <span class="m">sin 30° = cos 60° = 1/2</span>, <span class="m">sin 45° = cos 45° = √2/2</span>, <span class="m">sin 60° = cos 30° = √3/2</span>, <span class="m">tan 30° = √3/3</span>, <span class="m">tan 45° = 1</span>, <span class="m">tan 60° = √3</span>.</p>
<p>An <b>angle of elevation</b> is measured upward from the horizontal to a line of sight; an <b>angle of depression</b> is measured downward from the horizontal. The angle of depression from <i>P</i> to <i>Q</i> equals the angle of elevation from <i>Q</i> to <i>P</i> (Alternate Interior Angles Theorem, since the two horizontals are parallel).</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Reference angle", desc: "The acute angle you stand at. Opposite and adjacent are named from it, and they swap if you move to the other acute angle." },
    { c: "c3", sym: `opp`, name: "Opposite leg", desc: "The leg across the triangle from θ." },
    { c: "c2", sym: `adj`, name: "Adjacent leg", desc: "The leg that forms θ together with the hypotenuse." },
    { c: "c4", sym: `hyp`, name: "Hypotenuse", desc: "The side across from the right angle, always the longest, so sine and cosine are less than 1." }
  ],
  steps: { title: "How to solve a right triangle with trigonometry", items: [
    `Sketch the right triangle and mark the known angle <span class="m c1"><i>θ</i></span>, the known side and the side or angle you want. For elevation and depression, draw the horizontal first.`,
    `Label the three sides <span class="c3">opposite</span>, <span class="c2">adjacent</span> and <span class="c4">hypotenuse</span> as seen from <span class="m c1"><i>θ</i></span>.`,
    `Pick the ratio that uses the two sides involved (SOH-CAH-TOA) and write the equation, for example <span class="m">tan 38.5° = <i>h</i>/120</span>.`,
    `Solve: multiply if the unknown is on top, divide if it is underneath. For an unknown angle, apply the inverse ratio, as in <span class="m"><i>θ</i> = tan<sup>−1</sup>(1/12)</span>.`,
    `Use degree mode, round only at the end, and check that the hypotenuse is the longest side and the angles add to 180°.`
  ] },
  example: {
    prompt: `A surveyor sets up a transit 120 ft from the base of a building on level ground. The instrument is 5 ft above the ground, and the angle of elevation to the top edge of the roof is 38.5°. How tall is the building, to the nearest tenth of a foot?`,
    lines: [
      { math: `<span class="m"><span class="c2">adj</span> = 120, &nbsp;<span class="c3">opp</span> = <i>h</i></span>`, note: "The horizontal line of sight from the instrument meets the building's wall at a right angle. The 120 ft is adjacent to the 38.5° angle; the height above the instrument, h, is opposite it." },
      { math: `<span class="m">tan <span class="c1">38.5°</span> = <span class="fr"><span class="c3"><i>h</i></span><span class="c2">120</span></span></span>`, note: "Tangent relates the opposite and adjacent legs, the two sides involved." },
      { math: `<span class="m"><span class="c3"><i>h</i></span> = 120 tan 38.5°</span>`, note: "Multiply both sides by 120." },
      { math: `<span class="m"><span class="c3"><i>h</i></span> ≈ 120(0.79544) ≈ 95.45</span>`, note: "Calculator in degree mode; keep the digits until the end." },
      { math: `<span class="m">95.45 + 5 ≈ 100.5 ft</span>`, note: "Add the instrument height to get the height above the ground." },
      { math: `<span class="m">tan<sup>−1</sup>(95.45/120) ≈ 38.5°</span>`, note: "Check with the inverse tangent: the computed height gives back the measured angle." }
    ],
    answer: `The building is about <span class="m">100.5</span> ft tall.`
  },
  why: `<p>Trigonometry measures what you cannot reach. With a measured distance and an angle you can find the height of a cliff, the width of a river or the distance to a ship, which is how surveyors, navigators and astronomers worked for two thousand years. The same ratios set the angle of a wheelchair ramp, the pitch of a roof and the glide path of a landing aircraft.</p>
<p>In later math, sine and cosine are extended from acute angles in triangles to every angle on the unit circle, and then to functions that describe waves, rotation, alternating current and sound. Everything there rests on the fact proved here: for a fixed angle, the side ratios never change.</p>`,
  careers: [
    { role: "Surveyor", use: "Computes heights and elevation differences from a measured horizontal distance and the vertical angle read on a total station." },
    { role: "Pilot", use: "Flies a standard 3° glide slope, which descends about 6,076 × tan 3° ≈ 318 ft for each nautical mile." },
    { role: "Forester", use: "Estimates tree heights with a clinometer from a measured distance and the angle of elevation to the treetop." },
    { role: "Roofer", use: "Converts a roof pitch such as 6 in 12 into an angle, tan⁻¹(6/12) ≈ 26.6°, to set saw cuts and choose materials." },
    { role: "Civil engineer", use: "Designs ramps and road grades, where a 1:12 ramp rises at tan⁻¹(1/12) ≈ 4.8°." },
    { role: "Navigator", use: "Finds the distance to a lighthouse of known height from the angle of elevation of its light." }
  ],
  life: [
    "Measuring the height of a tree or building with a phone clinometer app",
    "Setting a ladder at about 75° using the 4-to-1 rule",
    "Checking whether a ramp is too steep for a wheelchair or a hand truck",
    "Working out how far away a hill is from its known height and the angle you look up",
    "Finding the angle to tilt a solar panel or a satellite dish"
  ],
  fields: [
    { name: "Surveying", use: "Triangulation and trigonometric levelling compute positions and heights from angles and one measured distance." },
    { name: "Physics", use: "Forces, velocities and fields are split into components with F cos θ and F sin θ." },
    { name: "Astronomy", use: "Parallax angles give distances to nearby stars from the known size of Earth's orbit." },
    { name: "Architecture", use: "Roof pitches, stair angles and sun angles for shading are all set with tangent ratios." },
    { name: "Navigation", use: "Distances off a coast are worked out from the angles to known landmarks." }
  ],
  prereqWhy: {
    "g-special-right": "The 45°-45°-90° and 30°-60°-90° triangles give the exact sine, cosine and tangent of 30°, 45° and 60°.",
    "g-similar-triangles": "AA similarity proves that all right triangles with the same acute angle have the same side ratios, which is what makes sin θ, cos θ and tan θ well defined."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Trigonometry", why: "Sine and cosine are extended from acute angles to every angle on the unit circle, with radians, graphs and identities." },
    { field: "Precalculus", why: "Polar coordinates, vectors and the Laws of Sines and Cosines all start from right-triangle ratios." },
    { field: "Physics", why: "Inclined planes, projectile motion and forces at an angle are resolved into components with sine and cosine." },
    { field: "Calculus I", why: "The derivatives of sine and cosine, and every integral solved by trigonometric substitution, build on these ratios." }
  ],
  mistakes: [
    { wrong: `The calculator gives <span class="m">sin 30 = −0.988</span>.`, fix: `The calculator is in radian mode. Switch to degrees: <span class="m">sin 30° = 0.5</span>.` },
    { wrong: `Naming sides from the right angle, or keeping the same "opposite" after switching to the other acute angle.`, fix: `Opposite and adjacent are always named from the angle you are using. The leg opposite ∠<i>A</i> is adjacent to ∠<i>B</i>.` },
    { wrong: `Treating <span class="m">sin<sup>−1</sup> <i>x</i></span> as <span class="m">1/sin <i>x</i></span>.`, fix: `<span class="m">sin<sup>−1</sup></span> is the inverse ratio: it takes a ratio and returns an angle. <span class="m">sin<sup>−1</sup>(0.5) = 30°</span>, while <span class="m">1/sin 30° = 2</span>.` },
    { wrong: `Measuring an angle of depression from the vertical wall of a lighthouse.`, fix: `Elevation and depression are measured from the horizontal. The angle of depression from the top equals the angle of elevation from the boat.` }
  ],
  practice: [
    { q: `Right △<i>ABC</i> has <span class="m">m∠<i>C</i> = 90°</span>, <span class="m"><i>BC</i> = 5</span>, <span class="m"><i>AC</i> = 12</span> and <span class="m"><i>AB</i> = 13</span>. Find <span class="m">sin <i>A</i></span>, <span class="m">cos <i>A</i></span>, <span class="m">tan <i>A</i></span> and <span class="m">cos <i>B</i></span>.`, a: `From ∠<i>A</i>: opposite 5, adjacent 12, hypotenuse 13. <span class="m">sin <i>A</i> = 5/13</span>, <span class="m">cos <i>A</i> = 12/13</span>, <span class="m">tan <i>A</i> = 5/12</span>. From ∠<i>B</i> the leg 5 is adjacent, so <span class="m">cos <i>B</i> = 5/13 = sin <i>A</i></span>.` },
    { q: `A right triangle has hypotenuse 20 and an acute angle of 35°. Find both legs to the nearest tenth.`, a: `Opposite: <span class="m">20 sin 35° ≈ 11.5</span>. Adjacent: <span class="m">20 cos 35° ≈ 16.4</span>. Check: <span class="m">11.47<sup>2</sup> + 16.38<sup>2</sup> ≈ 400 = 20<sup>2</sup></span>.` },
    { q: `An accessible ramp may rise at most 1 in for every 12 in of horizontal run. What is the steepest allowed angle with the ground, to the nearest tenth of a degree?`, a: `<span class="m">tan <i>θ</i> = 1/12</span>, so <span class="m"><i>θ</i> = tan<sup>−1</sup>(1/12) ≈ 4.8°</span>.` },
    { q: `(a) From the top of a lighthouse 150 ft above the water, the angle of depression to a boat is 12°. How far is the boat from the base of the lighthouse? (b) A classmate's answer to another problem says <span class="m">sin <i>θ</i> = 13/12</span>. Why must it be wrong?`, a: `(a) The angle of elevation from the boat is also 12° (alternate interior angles). <span class="m">tan 12° = 150/<i>d</i></span>, so <span class="m"><i>d</i> = 150/tan 12° ≈ 705.7</span> ft. (b) Sine is opposite ÷ hypotenuse, and the hypotenuse is the longest side, so <span class="m">0 &lt; sin <i>θ</i> &lt; 1</span> for every acute angle. No angle has sine 13/12.` }
  ],
  origin: `Hipparchus of Nicaea (2nd century BCE) is credited with the first table of chords, and Ptolemy's <i>Almagest</i> (about 150 CE) gives a chord table in half-degree steps. Indian astronomers, as in Aryabhata's work of 499 CE, tabulated half-chords instead, which are the sine; the word "sine" comes from the Latin <i>sinus</i>, chosen by medieval translators of Arabic texts.`
};
