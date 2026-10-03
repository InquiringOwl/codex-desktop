window.ARITH = window.ARITH || {};
ARITH["trig-sum-difference"] = {
  title: `Sum & Difference Formulas`,
  short: `cos(α − β) from two equal chords, and what follows`,
  grade: `Grade 11–12 · college Trigonometry`,
  hours: 6,
  voice: `plain`,
  eyebrow: `Identities · sum and difference`,
  hero: `<span class="m">cos(<span class="c5"><i>α</i> − <i>β</i></span>) = cos <span class="c1"><i>α</i></span> cos <span class="c2"><i>β</i></span> + sin <span class="c1"><i>α</i></span> sin <span class="c2"><i>β</i></span></span>`,
  lede: `The cosine of a difference is not the difference of the cosines. It is <span class="m">cos <i>α</i> cos <i>β</i> + sin <i>α</i> sin <i>β</i></span>, and from this one formula come the sine and tangent of any sum or difference, the cofunction identities, and exact values such as <span class="m">cos 15°</span>.`,
  plain: `<p>If you know the sine and cosine of two angles, you can find the sine and cosine of their sum and of their difference without a calculator. For example <span class="m">75° = 45° + 30°</span>, and the values at 45° and 30° are known exactly, so <span class="m">cos 75°</span> can be found exactly too.</p>
<p>The obvious guess is wrong. <span class="m">cos(60° + 60°) = cos 120° = −<span class="fr"><span>1</span><span>2</span></span></span>, but <span class="m">cos 60° + cos 60° = 1</span>. Cosine does not distribute over a sum. The true rule mixes both functions: <span class="m">cos(<i>α</i> − <i>β</i>) = cos <i>α</i> cos <i>β</i> + sin <i>α</i> sin <i>β</i></span>.</p>
<p>The proof uses the unit circle. The points at angles <span class="m"><span class="c1"><i>α</i></span></span> and <span class="m"><span class="c2"><i>β</i></span></span> are joined by a <b>chord</b>. Turn the whole picture back by <span class="m"><span class="c2"><i>β</i></span></span>: the same chord now joins the point at angle <span class="m"><span class="c5"><i>α</i> − <i>β</i></span></span> to the point <span class="m">(1, 0)</span>. A turn does not change lengths, and writing both lengths with the distance formula gives the formula.</p>
<p>Every other formula on this page follows from that one: replace <span class="m"><i>β</i></span> by <span class="m">−<i>β</i></span>, use the angle <span class="m">π/2 − <i>θ</i></span>, or divide sine by cosine.</p>`,
  formal: `<p>For all real numbers <span class="m"><i>α</i></span> and <span class="m"><i>β</i></span>:</p>
<div class="display">cos(<i>α</i> − <i>β</i>) = cos <i>α</i> cos <i>β</i> + sin <i>α</i> sin <i>β</i><br>cos(<i>α</i> + <i>β</i>) = cos <i>α</i> cos <i>β</i> − sin <i>α</i> sin <i>β</i><br>sin(<i>α</i> + <i>β</i>) = sin <i>α</i> cos <i>β</i> + cos <i>α</i> sin <i>β</i><br>sin(<i>α</i> − <i>β</i>) = sin <i>α</i> cos <i>β</i> − cos <i>α</i> sin <i>β</i><br>tan(<i>α</i> + <i>β</i>) = <span class="fr"><span>tan <i>α</i> + tan <i>β</i></span><span>1 − tan <i>α</i> tan <i>β</i></span></span> &nbsp;&nbsp; tan(<i>α</i> − <i>β</i>) = <span class="fr"><span>tan <i>α</i> − tan <i>β</i></span><span>1 + tan <i>α</i> tan <i>β</i></span></span></div>
<p>The tangent formulas hold wherever all the tangents in them are defined.</p>
<p><b>Proof of the difference formula.</b> Let <span class="m"><i>A</i> = (cos <i>α</i>, sin <i>α</i>)</span> and <span class="m"><i>B</i> = (cos <i>β</i>, sin <i>β</i>)</span>. Rotating the plane about the origin by <span class="m">−<i>β</i></span> moves <span class="m"><i>A</i></span> to <span class="m"><i>P</i> = (cos(<i>α</i> − <i>β</i>), sin(<i>α</i> − <i>β</i>))</span> and <span class="m"><i>B</i></span> to <span class="m"><i>Q</i> = (1, 0)</span>, and a rotation keeps lengths, so <span class="m"><span class="c4"><i>AB</i> = <i>PQ</i></span></span>. By the distance formula and <span class="m">cos<sup>2</sup> + sin<sup>2</sup> = 1</span> (used twice),</p>
<div class="display"><i>AB</i><sup>2</sup> = (cos <i>α</i> − cos <i>β</i>)<sup>2</sup> + (sin <i>α</i> − sin <i>β</i>)<sup>2</sup> = 2 − 2(cos <i>α</i> cos <i>β</i> + sin <i>α</i> sin <i>β</i>)<br><i>PQ</i><sup>2</sup> = (cos(<i>α</i> − <i>β</i>) − 1)<sup>2</sup> + sin<sup>2</sup>(<i>α</i> − <i>β</i>) = 2 − 2 cos(<i>α</i> − <i>β</i>)</div>
<p>Setting the two equal gives the formula. Replacing <span class="m"><i>β</i></span> by <span class="m">−<i>β</i></span> (cosine is even, sine is odd) gives <span class="m">cos(<i>α</i> + <i>β</i>)</span>. With <span class="m"><i>α</i> = π/2</span> it gives the <b>cofunction identity</b> <span class="m">cos(π/2 − <i>β</i>) = sin <i>β</i></span>, and putting <span class="m"><i>β</i> = π/2 − <i>θ</i></span> gives <span class="m">sin(π/2 − <i>θ</i>) = cos <i>θ</i></span>. Then <span class="m">sin(<i>α</i> + <i>β</i>) = cos((π/2 − <i>α</i>) − <i>β</i>)</span> expands to <span class="m">sin <i>α</i> cos <i>β</i> + cos <i>α</i> sin <i>β</i></span>. Dividing <span class="m">sin(<i>α</i> ± <i>β</i>)</span> by <span class="m">cos(<i>α</i> ± <i>β</i>)</span>, then top and bottom by <span class="m">cos <i>α</i> cos <i>β</i></span>, gives the tangent formulas.</p>
<p>Exact values: <span class="m">cos 15° = cos(45° − 30°) = <span class="fr"><span>√<span class="ov">6</span> + √<span class="ov">2</span></span><span>4</span></span></span>, <span class="m">sin 105° = sin(60° + 45°) = <span class="fr"><span>√<span class="ov">6</span> + √<span class="ov">2</span></span><span>4</span></span></span>, <span class="m">tan <span class="fr"><span>7π</span><span>12</span></span> = tan(<span class="fr"><span>π</span><span>3</span></span> + <span class="fr"><span>π</span><span>4</span></span>) = −2 − √<span class="ov">3</span></span>.</p>`,
  legend: [
    {
      c: `c1`,
      sym: `<i>α</i>`,
      name: `First angle`,
      desc: `Its terminal point on the unit circle is <span class="m">(cos <i>α</i>, sin <i>α</i>)</span>.`
    },
    {
      c: `c2`,
      sym: `<i>β</i>`,
      name: `Second angle`,
      desc: `Its terminal point is <span class="m">(cos <i>β</i>, sin <i>β</i>)</span>.`
    },
    {
      c: `c5`,
      sym: `<i>α</i> ± <i>β</i>`,
      name: `Sum or difference`,
      desc: `The angle whose sine, cosine or tangent you want.`
    },
    {
      c: `c4`,
      sym: `<i>AB</i>`,
      name: `Chord`,
      desc: `A segment joining two points of the unit circle. A rotation keeps its length.`
    }
  ],
  steps: {
    title: `How to find an exact value with a sum or difference formula`,
    items: [
      `Write the angle as a sum or difference of two special angles: <span class="m">75° = 45° + 30°</span>, <span class="m">15° = 45° − 30°</span>, <span class="m"><span class="fr"><span>7π</span><span>12</span></span> = <span class="fr"><span>π</span><span>3</span></span> + <span class="fr"><span>π</span><span>4</span></span></span>.`,
      `Choose the formula for that function and that sign. For cosine the sign in the middle is the opposite of the sign between the angles; for sine and the tangent numerator it is the same.`,
      `Replace each sine and cosine by its exact value from the unit circle.`,
      `Multiply: <span class="m"><span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span> · <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> = <span class="fr"><span>√<span class="ov">6</span></span><span>4</span></span></span>.`,
      `Combine over the common denominator, and rationalise if a radical is left in a denominator.`,
      `Check the sign and size: <span class="m">75°</span> is in QI and larger than <span class="m">45°</span>, so <span class="m">cos 75°</span> is positive and less than <span class="m">cos 45° ≈ 0.707</span>.`
    ]
  },
  example: {
    prompt: `Given <span class="m">sin <span class="c1"><i>α</i></span> = <span class="fr"><span>3</span><span>5</span></span></span> with <span class="m"><span class="c1"><i>α</i></span></span> in QII and <span class="m">cos <span class="c2"><i>β</i></span> = −<span class="fr"><span>5</span><span>13</span></span></span> with <span class="m"><span class="c2"><i>β</i></span></span> in QIII, find <span class="m">sin(<span class="c5"><i>α</i> + <i>β</i></span>)</span>, <span class="m">cos(<span class="c5"><i>α</i> + <i>β</i></span>)</span> and <span class="m">tan(<span class="c5"><i>α</i> + <i>β</i></span>)</span>, and the quadrant of <span class="m"><span class="c5"><i>α</i> + <i>β</i></span></span>.`,
    lines: [
      { math: `<span class="m">cos <span class="c1"><i>α</i></span> = −√<span class="ov">1 − <span class="fr"><span>9</span><span>25</span></span></span> = −<span class="fr"><span>4</span><span>5</span></span></span>`, note: `Pythagorean identity; cosine is negative in QII.` },
      { math: `<span class="m">sin <span class="c2"><i>β</i></span> = −√<span class="ov">1 − <span class="fr"><span>25</span><span>169</span></span></span> = −<span class="fr"><span>12</span><span>13</span></span></span>`, note: `Pythagorean identity; sine is negative in QIII.` },
      { math: `<span class="m">sin(<span class="c5"><i>α</i> + <i>β</i></span>) = (<span class="fr"><span>3</span><span>5</span></span>)(−<span class="fr"><span>5</span><span>13</span></span>) + (−<span class="fr"><span>4</span><span>5</span></span>)(−<span class="fr"><span>12</span><span>13</span></span>)</span>`, note: `sin α cos β + cos α sin β.` },
      { math: `<span class="m">= −<span class="fr"><span>15</span><span>65</span></span> + <span class="fr"><span>48</span><span>65</span></span> = <span class="c5"><span class="fr"><span>33</span><span>65</span></span></span></span>`, note: `Common denominator 65.` },
      { math: `<span class="m">cos(<span class="c5"><i>α</i> + <i>β</i></span>) = (−<span class="fr"><span>4</span><span>5</span></span>)(−<span class="fr"><span>5</span><span>13</span></span>) − (<span class="fr"><span>3</span><span>5</span></span>)(−<span class="fr"><span>12</span><span>13</span></span>) = <span class="fr"><span>20</span><span>65</span></span> + <span class="fr"><span>36</span><span>65</span></span> = <span class="c5"><span class="fr"><span>56</span><span>65</span></span></span></span>`, note: `cos α cos β − sin α sin β.` },
      { math: `<span class="m">tan(<span class="c5"><i>α</i> + <i>β</i></span>) = <span class="fr"><span><span class="fr"><span>33</span><span>65</span></span></span><span><span class="fr"><span>56</span><span>65</span></span></span></span> = <span class="c5"><span class="fr"><span>33</span><span>56</span></span></span></span>`, note: `Quotient identity.` },
      { math: `<span class="m">sin(<span class="c5"><i>α</i> + <i>β</i></span>) &gt; 0, cos(<span class="c5"><i>α</i> + <i>β</i></span>) &gt; 0 ⇒ QI</span>`, note: `Check: (33/65)² + (56/65)² = 1.` }
    ],
    answer: `<span class="m">sin(<span class="c5"><i>α</i> + <i>β</i></span>) = <span class="fr"><span>33</span><span>65</span></span>, cos(<span class="c5"><i>α</i> + <i>β</i></span>) = <span class="fr"><span>56</span><span>65</span></span>, tan(<span class="c5"><i>α</i> + <i>β</i></span>) = <span class="fr"><span>33</span><span>56</span></span></span>. Since <span class="m">90° &lt; <i>α</i> &lt; 180°</span> and <span class="m">180° &lt; <i>β</i> &lt; 270°</span>, the sum is between 270° and 450°; both values are positive, so <span class="m"><span class="c5"><i>α</i> + <i>β</i></span></span> is between 360° and 450°, coterminal with an angle in QI.`
  },
  why: `<p>The sum and difference formulas are the source of almost every later identity: the double-angle and half-angle formulas, the product-to-sum formulas, and the rule that multiplying complex numbers in polar form adds their arguments. They also show that <span class="m"><i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i></span> is a single sine wave with a phase shift.</p>
<p>In calculus the derivative of <span class="m">sin <i>x</i></span> is found by expanding <span class="m">sin(<i>x</i> + <i>h</i>)</span>. In physics and engineering, adding two waves of the same frequency and rotating coordinate axes both use these formulas.</p>`,
  careers: [
    { role: `Electrical engineer`, use: `Combines AC voltages of the same frequency but different phase into one sinusoid by expanding sin(ωt + φ) = sin ωt cos φ + cos ωt sin φ.` },
    { role: `Robotics engineer`, use: `Finds the tip of a two-link arm, whose second link points at angle θ₁ + θ₂, by expanding cos(θ₁ + θ₂) and sin(θ₁ + θ₂).` },
    { role: `Computer graphics programmer`, use: `Composes rotations: turning by α and then by β is a turn by α + β, and the rotation matrix entries are cos(α + β) and sin(α + β).` },
    { role: `Acoustics engineer`, use: `Analyses the phase difference between two microphones by writing a delayed wave sin(ω(t − τ)) with the difference formula.` },
    { role: `Surveyor`, use: `Combines a measured bearing with a turn angle and computes the north and east components of the new direction.` },
    { role: `Mathematics teacher`, use: `Proves the formulas from the unit circle and uses them to build exact values such as cos 15° and tan 75°.` }
  ],
  life: [
    `A dial turned by two angles in a row ends at their sum`,
    `Two speakers playing the same note slightly out of step`,
    `The tip of a desk lamp with two hinged arms`,
    `Exact values like cos 15° in a table of trigonometric values`,
    `A ramp built on a floor that is itself tilted`
  ],
  fields: [
    { name: `Physics`, use: `Adding waves of one frequency and rotating coordinate axes both use sin(α ± β) and cos(α ± β).` },
    { name: `Calculus`, use: `The derivatives of sine and cosine are proved with the sum formulas.` },
    { name: `Complex numbers`, use: `Multiplying cos α + i sin α by cos β + i sin β gives cos(α + β) + i sin(α + β).` },
    { name: `Computer graphics`, use: `A rotation by α followed by a rotation by β is one rotation by α + β.` }
  ],
  prereqWhy: { "trig-verify-ids": `The proof of each formula, and every use of them to verify an identity, is a chain of equalities worked on one side at a time.` },
  unlocksWhy: { "trig-double-half": `Putting β = α in the sum formulas gives sin 2α and cos 2α, and the half-angle formulas follow from cos 2α.`, "trig-sum-product": `Adding and subtracting the sum and difference formulas gives the product-to-sum formulas.`, "trig-complex-polar": `The sum formulas for sine and cosine are why multiplying complex numbers in polar form adds their arguments.` },
  beyond: [
    { field: `Calculus I`, why: `The derivative of sin x comes from sin(x + h) = sin x cos h + cos x sin h and two basic limits.` },
    { field: `Linear Algebra`, why: `The product of two rotation matrices is the rotation matrix for the sum of the angles.` },
    { field: `Physics (Waves)`, why: `Two waves of the same frequency add to one wave whose amplitude and phase come from the sum formulas.` },
    { field: `Precalculus`, why: `Complex numbers in polar form and De Moivre's theorem rest on the sum formulas.` }
  ],
  mistakes: [
    { wrong: `<span class="m">cos(<i>α</i> + <i>β</i>) = cos <i>α</i> + cos <i>β</i></span>, so <span class="m">cos 75° = cos 45° + cos 30° ≈ 1.57</span>.`, fix: `A cosine is never more than 1. Cosine does not distribute: <span class="m">cos 75° = cos 45° cos 30° − sin 45° sin 30°</span>, which is <span class="m"><span class="fr"><span>√<span class="ov">6</span> − √<span class="ov">2</span></span><span>4</span></span></span>, about 0.259.` },
    { wrong: `<span class="m">cos(<i>α</i> − <i>β</i>) = cos <i>α</i> cos <i>β</i> − sin <i>α</i> sin <i>β</i></span>.`, fix: `For cosine the signs are opposite: a difference of angles gives a plus. Check with <span class="m"><i>β</i> = <i>α</i></span>: <span class="m">cos 0 = cos<sup>2</sup> <i>α</i> + sin<sup>2</sup> <i>α</i> = 1</span>.` },
    { wrong: `<span class="m">sin <i>α</i> = <span class="fr"><span>3</span><span>5</span></span></span> with <span class="m"><i>α</i></span> in QII, so <span class="m">cos <i>α</i> = <span class="fr"><span>4</span><span>5</span></span></span>.`, fix: `The Pythagorean identity gives <span class="m">cos <i>α</i> = ±<span class="fr"><span>4</span><span>5</span></span></span>; the quadrant picks the sign. Cosine is negative in QII, so <span class="m">cos <i>α</i> = −<span class="fr"><span>4</span><span>5</span></span></span>.` },
    { wrong: `<span class="m">tan(<i>α</i> + <i>β</i>) = <span class="fr"><span>tan <i>α</i> + tan <i>β</i></span><span>1 + tan <i>α</i> tan <i>β</i></span></span></span>.`, fix: `The sign in the denominator is the opposite one: <span class="m">1 − tan <i>α</i> tan <i>β</i></span> for a sum, <span class="m">1 + tan <i>α</i> tan <i>β</i></span> for a difference.` }
  ],
  practice: [
    { q: `Find <span class="m">cos 75°</span> exactly.`, a: `<span class="m">cos(45° + 30°) = <span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span> · <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> − <span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span> · <span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>√<span class="ov">6</span> − √<span class="ov">2</span></span><span>4</span></span></span>` },
    { q: `Write <span class="m">sin 40° cos 10° − cos 40° sin 10°</span> as a single value.`, a: `<span class="m">sin(40° − 10°) = sin 30° = <span class="fr"><span>1</span><span>2</span></span></span>` },
    { q: `Find <span class="m">tan <span class="fr"><span>7π</span><span>12</span></span></span> exactly.`, a: `<span class="m">tan(<span class="fr"><span>π</span><span>3</span></span> + <span class="fr"><span>π</span><span>4</span></span>) = <span class="fr"><span>√<span class="ov">3</span> + 1</span><span>1 − √<span class="ov">3</span></span></span></span>. Multiply top and bottom by <span class="m">1 + √<span class="ov">3</span></span>: <span class="m"><span class="fr"><span>4 + 2√<span class="ov">3</span></span><span>−2</span></span> = −2 − √<span class="ov">3</span></span>.` },
    { q: `Verify <span class="m">cos(<i>α</i> + <i>β</i>) cos(<i>α</i> − <i>β</i>) = cos<sup>2</sup> <i>α</i> − sin<sup>2</sup> <i>β</i></span>.`, a: `The product is <span class="m">(cos <i>α</i> cos <i>β</i>)<sup>2</sup> − (sin <i>α</i> sin <i>β</i>)<sup>2</sup></span> (difference of squares) <span class="m">= cos<sup>2</sup> <i>α</i> (1 − sin<sup>2</sup> <i>β</i>) − (1 − cos<sup>2</sup> <i>α</i>) sin<sup>2</sup> <i>β</i> = cos<sup>2</sup> <i>α</i> − sin<sup>2</sup> <i>β</i></span>.` }
  ],
  origin: `Ptolemy's <i>Almagest</i> (about 150 CE) proved rules for the chord of the sum and of the difference of two arcs, using his theorem on quadrilaterals inscribed in a circle. In modern terms they are the sine sum and difference formulas, and he used them to compute his table of chords in steps of half a degree. Indian astronomers, among them Bhāskara II in the 12th century, stated the rule for the sine of a sum directly in terms of sines.`
};
