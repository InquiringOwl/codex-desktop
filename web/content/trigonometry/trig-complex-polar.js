window.ARITH = window.ARITH || {};
ARITH["trig-complex-polar"] = {
  title: "Complex Numbers in Polar Form",
  short: "z = r(cos θ + i sin θ): multiply lengths, add angles",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 5,
  voice: "plain",
  eyebrow: "Complex numbers · polar form",
  hero: `<span class="m"><span class="c1"><i>r</i><sub>1</sub> cis <i>θ</i><sub>1</sub></span> · <span class="c2"><i>r</i><sub>2</sub> cis <i>θ</i><sub>2</sub></span> = <span class="c5"><i>r</i><sub>1</sub><i>r</i><sub>2</sub> cis(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)</span></span>`,
  lede: `Any nonzero complex number can be written by its length and direction: <span class="m"><i>z</i> = <span class="c4"><i>r</i></span>(cos <span class="c3"><i>θ</i></span> + <i>i</i> sin <span class="c3"><i>θ</i></span>)</span>. In this form, multiplying two numbers multiplies their lengths and adds their angles.`,
  plain: `<p>A complex number <span class="m"><i>a</i> + <i>bi</i></span> is the point <span class="m">(<i>a</i>, <i>b</i>)</span> in the complex plane, so it also has polar coordinates: a length <span class="m c4"><i>r</i></span> and an angle <span class="m c3"><i>θ</i></span>. The length is called the <b>modulus</b> and the angle the <b>argument</b>.</p>
<p>Adding is easy in the form <span class="m"><i>a</i> + <i>bi</i></span>. Multiplying is easy in polar form. To multiply, multiply the lengths and add the angles. To divide, divide the lengths and subtract the angles.</p>
<p>So multiplying by a number of length 1 only rotates. Multiplying by <span class="m"><i>i</i></span>, which has length 1 and angle <span class="m">π/2</span>, turns every point a quarter turn counterclockwise.</p>`,
  formal: `<p>For <span class="m"><i>z</i> = <i>a</i> + <i>bi</i> ≠ 0</span>, the <b>modulus</b> is <span class="m"><span class="c4">|<i>z</i>| = <i>r</i></span> = √<span class="ov"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span> and an <b>argument</b> is any angle <span class="m c3"><i>θ</i></span> with <span class="m">cos <i>θ</i> = <i>a</i>/<i>r</i></span> and <span class="m">sin <i>θ</i> = <i>b</i>/<i>r</i></span>. Then</p>
<div class="display"><i>z</i> = <span class="c4"><i>r</i></span>(cos <span class="c3"><i>θ</i></span> + <i>i</i> sin <span class="c3"><i>θ</i></span>) = <span class="c4"><i>r</i></span> cis <span class="c3"><i>θ</i></span>, &nbsp; <i>a</i> = <i>r</i> cos <i>θ</i>, &nbsp; <i>b</i> = <i>r</i> sin <i>θ</i>.</div>
<p>This page chooses the argument in <span class="m">[0, 2π)</span>, the same range as for polar points. Some books use the principal argument <span class="m">Arg <i>z</i></span> in <span class="m">(−π, π]</span>; the two differ by <span class="m">2π</span> for points below the real axis. As with polar points, <span class="m">tan <i>θ</i> = <i>b</i>/<i>a</i></span> alone does not fix <span class="m"><i>θ</i></span>: add <span class="m">π</span> to <span class="m">tan<sup>−1</sup>(<i>b</i>/<i>a</i>)</span> when <span class="m"><i>a</i> &lt; 0</span>. The number 0 has modulus 0 and no defined argument.</p>
<p><b>Product rule.</b> For <span class="m"><span class="c1"><i>z</i><sub>1</sub> = <i>r</i><sub>1</sub> cis <i>θ</i><sub>1</sub></span></span> and <span class="m"><span class="c2"><i>z</i><sub>2</sub> = <i>r</i><sub>2</sub> cis <i>θ</i><sub>2</sub></span></span>, expand and use the sum formulas:</p>
<div class="display"><span class="c1"><i>z</i><sub>1</sub></span><span class="c2"><i>z</i><sub>2</sub></span> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>[(cos <i>θ</i><sub>1</sub> cos <i>θ</i><sub>2</sub> − sin <i>θ</i><sub>1</sub> sin <i>θ</i><sub>2</sub>) + <i>i</i>(sin <i>θ</i><sub>1</sub> cos <i>θ</i><sub>2</sub> + cos <i>θ</i><sub>1</sub> sin <i>θ</i><sub>2</sub>)]<br>&nbsp; &nbsp; &nbsp; = <span class="c5"><i>r</i><sub>1</sub><i>r</i><sub>2</sub>[cos(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>) + <i>i</i> sin(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)]</span></div>
<p>The <span class="m"><i>i</i><sup>2</sup> = −1</span> term gives the minus sign in the real part. <b>Quotient rule.</b> For <span class="m"><i>z</i><sub>2</sub> ≠ 0</span>,</p>
<div class="display"><span class="fr"><span><span class="c1"><i>z</i><sub>1</sub></span></span><span><span class="c2"><i>z</i><sub>2</sub></span></span></span> = <span class="c5"><span class="fr"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span> cis(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>)</span>,</div>
<p>because by the product rule <span class="m"><span class="fr"><span><i>r</i><sub>1</sub></span><span><i>r</i><sub>2</sub></span></span> cis(<i>θ</i><sub>1</sub> − <i>θ</i><sub>2</sub>) · <i>r</i><sub>2</sub> cis <i>θ</i><sub>2</sub> = <i>r</i><sub>1</sub> cis <i>θ</i><sub>1</sub></span>. In particular <span class="m">1/<i>z</i> = (1/<i>r</i>) cis(−<i>θ</i>)</span> and the conjugate is <span class="m"><i>z̄</i> = <i>r</i> cis(−<i>θ</i>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>z</i>`, name: "First number", desc: "z = r₁ cis θ₁, drawn as an arrow from 0." },
    { c: "c2", sym: `<i>w</i>`, name: "Second number", desc: "w = r₂ cis θ₂, the number z is multiplied or divided by." },
    { c: "c5", sym: `<i>zw</i>`, name: "Result", desc: "The product or quotient: lengths multiplied or divided, angles added or subtracted." },
    { c: "c4", sym: `<i>r</i>`, name: "Modulus", desc: "|z| = √(a² + b²), the distance from 0." },
    { c: "c3", sym: `<i>θ</i>`, name: "Argument", desc: "The angle from the positive real axis, chosen in [0, 2π) on this page." }
  ],
  steps: {
    title: "How to multiply or divide complex numbers in polar form",
    items: [
      `Write each number in polar form: <span class="m"><i>r</i> = √<span class="ov"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span>, and <span class="m"><i>θ</i></span> in the quadrant of <span class="m">(<i>a</i>, <i>b</i>)</span>.`,
      `Multiply the moduli for a product, or divide them for a quotient.`,
      `Add the arguments for a product, or subtract the second from the first for a quotient.`,
      `If the angle falls outside <span class="m">[0, 2π)</span>, add or subtract <span class="m">2π</span>.`,
      `To return to <span class="m"><i>a</i> + <i>bi</i></span>, evaluate <span class="m"><i>r</i> cos <i>θ</i></span> and <span class="m"><i>r</i> sin <i>θ</i></span>, exactly when <span class="m"><i>θ</i></span> is a special angle.`
    ]
  },
  example: {
    prompt: `Let <span class="m"><span class="c1"><i>z</i> = −1 + √<span class="ov">3</span><i>i</i></span></span> and <span class="m"><span class="c2"><i>w</i> = √<span class="ov">3</span> + <i>i</i></span></span>. Find <span class="m"><i>zw</i></span> and <span class="m"><i>z</i>/<i>w</i></span> in polar and rectangular form.`,
    lines: [
      { math: `<span class="m"><span class="c4">|<i>z</i>|</span> = √<span class="ov">1 + 3</span> = 2, &nbsp; <span class="c3"><i>θ</i><sub>1</sub></span> = π − <span class="fr"><span>π</span><span>3</span></span> = <span class="fr"><span>2π</span><span>3</span></span></span>`, note: "z is in QII and tan⁻¹ √3 = π/3 is its reference angle." },
      { math: `<span class="m"><span class="c4">|<i>w</i>|</span> = √<span class="ov">3 + 1</span> = 2, &nbsp; <span class="c3"><i>θ</i><sub>2</sub></span> = <span class="fr"><span>π</span><span>6</span></span></span>`, note: "w is in QI." },
      { math: `<span class="m"><i>zw</i> = 2 · 2 cis(<span class="fr"><span>2π</span><span>3</span></span> + <span class="fr"><span>π</span><span>6</span></span>) = 4 cis <span class="fr"><span>5π</span><span>6</span></span></span>`, note: "Multiply the moduli and add the arguments." },
      { math: `<span class="m"><span class="c5"><i>zw</i></span> = 4(−<span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> + <span class="fr"><span>1</span><span>2</span></span><i>i</i>) = <span class="c5">−2√<span class="ov">3</span> + 2<i>i</i></span></span>`, note: "cos(5π/6) = −√3/2 and sin(5π/6) = 1/2." },
      { math: `<span class="m"><span class="fr"><span><i>z</i></span><span><i>w</i></span></span> = <span class="fr"><span>2</span><span>2</span></span> cis(<span class="fr"><span>2π</span><span>3</span></span> − <span class="fr"><span>π</span><span>6</span></span>) = cis <span class="fr"><span>π</span><span>2</span></span> = <span class="c5"><i>i</i></span></span>`, note: "Divide the moduli and subtract the arguments." },
      { math: `<span class="m">(−1 + √<span class="ov">3</span><i>i</i>)(√<span class="ov">3</span> + <i>i</i>) = −√<span class="ov">3</span> − <i>i</i> + 3<i>i</i> + √<span class="ov">3</span><i>i</i><sup>2</sup> = −2√<span class="ov">3</span> + 2<i>i</i></span>`, note: "Check the product in rectangular form." }
    ],
    answer: `<span class="m c5"><i>zw</i> = 4 cis <span class="fr"><span>5π</span><span>6</span></span> = −2√<span class="ov">3</span> + 2<i>i</i></span> and <span class="m c5"><i>z</i>/<i>w</i> = cis <span class="fr"><span>π</span><span>2</span></span> = <i>i</i></span>`
  },
  why: `<p>Polar form turns multiplication into a rotation and a stretch. That is why electrical engineers write AC voltages and currents as phasors with a magnitude and a phase angle: multiplying by an impedance scales the amplitude and shifts the phase in one step.</p>
<p>The product rule is also the key to the next topic. Multiplying <span class="m"><i>z</i></span> by itself <span class="m"><i>n</i></span> times multiplies the angle by <span class="m"><i>n</i></span>, which gives De Moivre's theorem and every <span class="m"><i>n</i></span>th root of a complex number.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Writes AC voltages, currents and impedances as phasors in polar form, so V = IZ multiplies magnitudes and adds phase angles." },
    { role: "Signal processing engineer", use: "Reads each frequency component of a signal as a magnitude and a phase, the modulus and argument of a complex number." },
    { role: "Control systems engineer", use: "Uses the gain and phase of a transfer function at each frequency to judge whether a feedback loop is stable." },
    { role: "RF engineer", use: "Describes reflections on a transmission line by a complex reflection coefficient with a magnitude and an angle." },
    { role: "Audio engineer", use: "Adjusts the phase of signals from several microphones so that they add instead of cancelling." },
    { role: "Quantum computing researcher", use: "Works with probability amplitudes whose modulus sets a probability and whose argument is a phase." }
  ],
  life: [
    "Rotating a photo by 90° is multiplying every point by i",
    "Two turns in a row add their angles, as arguments do in a product",
    "A power meter reports the current's size and its phase angle",
    "Noise-cancelling headphones play sound with its phase shifted by π"
  ],
  fields: [
    { name: "Electrical engineering", use: "Phasors and impedances are complex numbers in polar form." },
    { name: "Physics", use: "Waves, optics and quantum mechanics describe amplitudes by a modulus and a phase." },
    { name: "Computer graphics", use: "A rotation by θ in the plane is multiplication by cis θ." },
    { name: "Signal processing", use: "Filters change the modulus and argument of each frequency component." }
  ],
  prereqWhy: {
    "trig-polar-coords": "The modulus and argument of a + bi are the polar coordinates (r, θ) of the point (a, b), found with the same quadrant fix.",
    "trig-sum-difference": "Expanding (cos θ₁ + i sin θ₁)(cos θ₂ + i sin θ₂) gives exactly the sum formulas for cos(θ₁ + θ₂) and sin(θ₁ + θ₂).",
    "a2-complex-ops": "Products and quotients in a + bi form, i² = −1 and conjugates are the rectangular arithmetic that polar form simplifies and is checked against."
  },
  unlocksWhy: {
    "trig-de-moivre": "Applying the product rule n times to z · z · … · z gives zⁿ = rⁿ cis nθ, and reversing it gives the nth roots."
  },
  beyond: [
    { field: "Calculus II", why: "Power series give Euler's formula e^(iθ) = cos θ + i sin θ, so r cis θ = re^(iθ) and the product rule is a law of exponents." },
    { field: "Differential Equations", why: "Complex roots a ± bi of a characteristic equation produce solutions e^(at) cos bt and e^(at) sin bt." },
    { field: "Physics (E&M)", why: "AC circuit analysis uses phasors, complex numbers in polar form." },
    { field: "Linear Algebra", why: "Rotation matrices act on the plane the way multiplication by cis θ does." }
  ],
  mistakes: [
    { wrong: `<span class="m">−1 + √<span class="ov">3</span><i>i</i></span> has argument <span class="m">tan<sup>−1</sup>(−√<span class="ov">3</span>) = −π/3</span>.`, fix: `The point <span class="m">(−1, √<span class="ov">3</span>)</span> is in QII, but <span class="m">−π/3</span> points into QIV. Add <span class="m">π</span>: the argument is <span class="m">2π/3</span>.` },
    { wrong: `<span class="m">2 cis <span class="fr"><span>π</span><span>3</span></span> · 3 cis <span class="fr"><span>π</span><span>6</span></span> = 5 cis <span class="fr"><span>π</span><span>18</span></span></span>`, fix: `Multiply the moduli and add the arguments: <span class="m">6 cis(π/3 + π/6) = 6 cis(π/2) = 6<i>i</i></span>.` },
    { wrong: `<span class="m">−2 cis <span class="fr"><span>π</span><span>3</span></span></span> is in polar form with modulus <span class="m">−2</span>.`, fix: `A modulus is never negative. <span class="m">−2 cis(π/3) = 2 cis(π/3 + π) = 2 cis(4π/3)</span>.` },
    { wrong: `<span class="m"><span class="fr"><span>4 cis(π/4)</span><span>2 cis(3π/4)</span></span> = 2 cis <span class="fr"><span>π</span><span>2</span></span></span>, subtracting the smaller angle from the larger.`, fix: `Subtract in order, first minus second: <span class="m">π/4 − 3π/4 = −π/2</span>, so the quotient is <span class="m">2 cis(3π/2) = −2<i>i</i></span>.` }
  ],
  practice: [
    { q: `Write <span class="m">3 − 3<i>i</i></span> in polar form with <span class="m">0 ≤ <i>θ</i> &lt; 2π</span>.`, a: `<span class="m"><i>r</i> = √<span class="ov">9 + 9</span> = 3√<span class="ov">2</span></span>. The point is in QIV with reference angle <span class="m">π/4</span>, so <span class="m"><i>θ</i> = 7π/4</span>: <span class="m">3√<span class="ov">2</span> cis <span class="fr"><span>7π</span><span>4</span></span></span>.` },
    { q: `Write <span class="m">6 cis <span class="fr"><span>4π</span><span>3</span></span></span> in the form <span class="m"><i>a</i> + <i>bi</i></span>.`, a: `<span class="m">6(cos <span class="fr"><span>4π</span><span>3</span></span> + <i>i</i> sin <span class="fr"><span>4π</span><span>3</span></span>) = 6(−<span class="fr"><span>1</span><span>2</span></span> − <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span><i>i</i>) = −3 − 3√<span class="ov">3</span><i>i</i></span>.` },
    { q: `Multiply <span class="m">2 cis <span class="fr"><span>3π</span><span>4</span></span> · 5 cis <span class="fr"><span>5π</span><span>12</span></span></span>. Give polar and rectangular form.`, a: `<span class="m">10 cis(<span class="fr"><span>9π</span><span>12</span></span> + <span class="fr"><span>5π</span><span>12</span></span>) = 10 cis <span class="fr"><span>7π</span><span>6</span></span> = 10(−<span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> − <span class="fr"><span>1</span><span>2</span></span><i>i</i>) = −5√<span class="ov">3</span> − 5<i>i</i></span>.` },
    { q: `Divide <span class="m"><span class="fr"><span>1 + <i>i</i></span><span>−√<span class="ov">3</span> + <i>i</i></span></span></span> in polar form, then write the result as <span class="m"><i>a</i> + <i>bi</i></span>.`, a: `<span class="m">1 + <i>i</i> = √<span class="ov">2</span> cis <span class="fr"><span>π</span><span>4</span></span></span> and <span class="m">−√<span class="ov">3</span> + <i>i</i> = 2 cis <span class="fr"><span>5π</span><span>6</span></span></span>. Quotient: <span class="m"><span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span> cis(<span class="fr"><span>π</span><span>4</span></span> − <span class="fr"><span>5π</span><span>6</span></span>) = <span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span> cis <span class="fr"><span>17π</span><span>12</span></span></span>. With <span class="m">cos <span class="fr"><span>17π</span><span>12</span></span> = −<span class="fr"><span>√<span class="ov">6</span> − √<span class="ov">2</span></span><span>4</span></span></span> and <span class="m">sin <span class="fr"><span>17π</span><span>12</span></span> = −<span class="fr"><span>√<span class="ov">6</span> + √<span class="ov">2</span></span><span>4</span></span></span>: <span class="m"><span class="fr"><span>1 − √<span class="ov">3</span></span><span>4</span></span> − <span class="fr"><span>1 + √<span class="ov">3</span></span><span>4</span></span><i>i</i></span>.` }
  ],
  origin: `Caspar Wessel, a Norwegian-Danish surveyor, presented the geometric picture of complex numbers to the Royal Danish Academy in 1797 (published 1799), including the rule that multiplication multiplies lengths and adds angles. Jean-Robert Argand published the same idea independently in 1806, and Carl Friedrich Gauss made the complex plane standard in 1831. Leonhard Euler had already connected cos θ + i sin θ with the exponential function in 1748.`
};
