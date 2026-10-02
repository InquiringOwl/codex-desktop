window.ARITH = window.ARITH || {};

ARITH["a2-complex-ops"] = {
  title: "Complex Arithmetic & Conjugates",
  short: "Add, multiply and divide a + bi; the conjugate makes it real",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Complex numbers · arithmetic",
  hero: `<span class="m">(<span class="c1">3 + 2<i>i</i></span>)(<span class="c2">1 − 4<i>i</i></span>) = <span class="c3">11 − 10<i>i</i></span></span>`,
  lede: `Complex numbers add part by part and multiply like binomials, with <span class="m"><i>i</i><sup>2</sup> = −1</span>. To divide, multiply the top and bottom by the <span class="c4">conjugate</span> of the denominator, which turns the denominator into a real number.`,
  plain: `<p>Adding complex numbers is like adding like terms: real parts with real parts, imaginary parts with imaginary parts. <span class="m">(3 + 2<i>i</i>) + (1 + 4<i>i</i>) = 4 + 6<i>i</i></span>. In the complex plane this is the same as placing one arrow at the tip of the other.</p>
<p>Multiplying works like multiplying two binomials. You multiply every term by every term (FOIL), and wherever <span class="m"><i>i</i><sup>2</sup></span> appears you replace it by <span class="m">−1</span>. That moves the last product into the real part.</p>
<p>The <b>conjugate</b> of <span class="m"><i>a</i> + <i>bi</i></span> is <span class="m"><i>a</i> − <i>bi</i></span>: same real part, opposite imaginary part. In the plane it is the mirror image across the real axis. A number times its conjugate is always a real number, <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span>, and that is what makes division possible.</p>
<p>To divide, you want a real denominator. Multiply the top and the bottom by the conjugate of the bottom. The bottom becomes <span class="m"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span>, and you split the fraction into a real part and an imaginary part.</p>`,
  formal: `<p>For <span class="m"><span class="c1"><i>z</i> = <i>a</i> + <i>bi</i></span></span> and <span class="m"><span class="c2"><i>w</i> = <i>c</i> + <i>di</i></span></span> with <span class="m"><i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> ∈ ℝ</span>:</p>
<div class="display"><span class="c1"><i>z</i></span> ± <span class="c2"><i>w</i></span> = <span class="c3">(<i>a</i> ± <i>c</i>) + (<i>b</i> ± <i>d</i>)<i>i</i></span><br><span class="c1"><i>z</i></span><span class="c2"><i>w</i></span> = <i>ac</i> + <i>adi</i> + <i>bci</i> + <i>bdi</i><sup>2</sup> = <span class="c3">(<i>ac</i> − <i>bd</i>) + (<i>ad</i> + <i>bc</i>)<i>i</i></span><br><span class="c1"><i>z</i></span> · <span class="c4"><i>z̄</i></span> = (<i>a</i> + <i>bi</i>)(<i>a</i> − <i>bi</i>) = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = |<i>z</i>|<sup>2</sup><br><span class="fr"><span><span class="c1"><i>z</i></span></span><span><span class="c2"><i>w</i></span></span></span> = <span class="fr"><span>(<i>a</i> + <i>bi</i>)<span class="c4">(<i>c</i> − <i>di</i>)</span></span><span>(<i>c</i> + <i>di</i>)<span class="c4">(<i>c</i> − <i>di</i>)</span></span></span> = <span class="c3"><span class="fr"><span><i>ac</i> + <i>bd</i></span><span><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span> + <span class="fr"><span><i>bc</i> − <i>ad</i></span><span><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span><i>i</i></span>, &nbsp; <i>w</i> ≠ 0</div>
<p>The <b>complex conjugate</b> of <span class="m"><i>z</i> = <i>a</i> + <i>bi</i></span> is <span class="m"><span class="c4"><i>z̄</i> = <i>a</i> − <i>bi</i></span></span>. The <b>modulus</b> (absolute value) <span class="m">|<i>z</i>| = √<span class="ov"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span> is the distance from <span class="m">0</span> to <span class="m">(<i>a</i>, <i>b</i>)</span>. Addition is vector addition (the parallelogram rule), and moduli multiply: <span class="m">|<i>zw</i>| = |<i>z</i>| · |<i>w</i>|</span>. For the hero, <span class="m">|3 + 2<i>i</i>| · |1 − 4<i>i</i>| = √<span class="ov">13</span> · √<span class="ov">17</span> = √<span class="ov">221</span> = |11 − 10<i>i</i>|</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>z</i>`, name: "First number", desc: "z = a + bi, drawn as an arrow from 0 to (a, b)." },
    { c: "c2", sym: `<i>w</i>`, name: "Second number", desc: "w = c + di, the number added, multiplied or divided by." },
    { c: "c3", sym: `<i>z</i> ∘ <i>w</i>`, name: "Result", desc: "The sum, product or quotient, written in standard form." },
    { c: "c4", sym: `<i>w̄</i>`, name: "Conjugate", desc: "Same real part, opposite imaginary part: the mirror image across the real axis." }
  ],
  steps: {
    title: "How to compute with complex numbers",
    items: [
      `Write each number in standard form <span class="m"><i>a</i> + <i>bi</i></span>; rewrite <span class="m">√<span class="ov">−<i>b</i></span></span> as <span class="m"><i>i</i>√<span class="ov"><i>b</i></span></span> first.`,
      `To add or subtract, combine the real parts and the imaginary parts separately.`,
      `To multiply, use FOIL, replace <span class="m"><i>i</i><sup>2</sup></span> by <span class="m">−1</span>, and collect like terms.`,
      `To divide, multiply the numerator and the denominator by the <span class="c4">conjugate</span> of the denominator.`,
      `The denominator becomes <span class="m"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span>. Split into <span class="m"><span class="fr"><span><i>A</i></span><span><i>N</i></span></span> + <span class="fr"><span><i>B</i></span><span><i>N</i></span></span><i>i</i></span> and reduce each fraction.`,
      `Check a quotient by multiplying it by the denominator.`
    ]
  },
  example: {
    prompt: `Divide and write in standard form: <span class="m"><span class="fr"><span><span class="c1">7 + 4<i>i</i></span></span><span><span class="c2">2 − <i>i</i></span></span></span></span>.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><span class="c1">7 + 4<i>i</i></span></span><span><span class="c2">2 − <i>i</i></span></span></span> · <span class="c4"><span class="fr"><span>2 + <i>i</i></span><span>2 + <i>i</i></span></span></span></span>`, note: "The conjugate of 2 − i is 2 + i. Multiplying by (2 + i)/(2 + i) multiplies by 1." },
      { math: `<span class="m">(7 + 4<i>i</i>)(2 + <i>i</i>) = 14 + 7<i>i</i> + 8<i>i</i> + 4<i>i</i><sup>2</sup></span>`, note: "FOIL the numerator." },
      { math: `<span class="m">= 14 + 15<i>i</i> − 4 = 10 + 15<i>i</i></span>`, note: "Replace i² by −1, then collect the real terms." },
      { math: `<span class="m">(2 − <i>i</i>)(2 + <i>i</i>) = 4 − <i>i</i><sup>2</sup> = 4 + 1 = 5</span>`, note: "The denominator is c² + d² = 2² + 1², a real number." },
      { math: `<span class="m"><span class="fr"><span>10 + 15<i>i</i></span><span>5</span></span> = <span class="c3">2 + 3<i>i</i></span></span>`, note: "Divide each part by 5." },
      { math: `<span class="m">(<span class="c3">2 + 3<i>i</i></span>)(<span class="c2">2 − <i>i</i></span>) = 4 − 2<i>i</i> + 6<i>i</i> − 3<i>i</i><sup>2</sup> = <span class="c1">7 + 4<i>i</i></span></span>`, note: "Check: quotient times divisor gives back the dividend." }
    ],
    answer: `<span class="m c3">2 + 3<i>i</i></span>`
  },
  why: `<p>Every calculation with waves, rotations or AC circuits ends up adding, multiplying and dividing complex numbers. Adding two signals adds their complex amplitudes. Passing a signal through a circuit multiplies it by a complex number that scales and shifts it. Dividing voltage by current gives impedance.</p>
<p>The conjugate is the key tool. It turns a complex denominator into a real one, it gives the size of a complex number through <span class="m"><i>z z̄</i> = |<i>z</i>|<sup>2</sup></span>, and it explains why the non-real solutions of a quadratic come in pairs.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Divides a complex voltage by a complex current to get impedance, multiplying by the conjugate to put it in standard form." },
    { role: "Power systems engineer", use: "Computes complex power S = V·Ī, using the conjugate of the current, to separate real power from reactive power." },
    { role: "Communications engineer", use: "Multiplies a received signal by the conjugate of a reference signal to detect its phase." },
    { role: "Computer graphics programmer", use: "Rotates and scales 2D points by multiplying by a complex number, which needs no trigonometry per point." },
    { role: "Acoustics engineer", use: "Adds the complex amplitudes of sound waves to predict where they reinforce or cancel." }
  ],
  life: [
    "Phone and Wi-Fi radios multiply incoming signals by complex numbers millions of times per second",
    "Electricians' tools that report power factor are built on complex power calculations",
    "Photo-editing filters use fast Fourier transforms, which are complex multiplications",
    "A pair of dancers turning and moving apart can be pictured as one complex multiplication"
  ],
  fields: [
    { name: "Electrical engineering", use: "Ohm's law V = IZ with complex voltage, current and impedance." },
    { name: "Physics", use: "The probability of a quantum outcome is |ψ|² = ψψ̄, a number times its conjugate." },
    { name: "Computer science", use: "Fast Fourier transform algorithms are built from complex additions and multiplications." },
    { name: "Mathematics", use: "Conjugates prove that non-real roots of real polynomials come in pairs." }
  ],
  prereqWhy: {
    "a2-complex": "Every operation here starts from the standard form a + bi and uses i² = −1, both defined there.",
    "a1-poly-mult": "Multiplying (a + bi)(c + di) is FOIL on two binomials, and (c + di)(c − di) is the sum-and-difference product."
  },
  unlocksWhy: {
    "a2-quad-complex": "The solutions p ± qi of a quadratic with negative discriminant are a conjugate pair, and checking them by substitution needs complex multiplication."
  },
  beyond: [
    { field: "Precalculus", why: "In polar form, multiplying multiplies the moduli and adds the angles, which explains the rotation seen here." },
    { field: "Physics", why: "AC circuits and waves are analyzed with complex arithmetic of phasors." },
    { field: "Linear Algebra", why: "Complex vectors use the conjugate to define length and inner products." }
  ],
  mistakes: [
    { wrong: `<span class="m">(2 + 3<i>i</i>)<sup>2</sup> = 4 + 9<i>i</i><sup>2</sup> = −5</span>`, fix: `Square a binomial with FOIL: <span class="m">4 + 12<i>i</i> + 9<i>i</i><sup>2</sup> = −5 + 12<i>i</i></span>.` },
    { wrong: `The conjugate of <span class="m">3 − 2<i>i</i></span> is <span class="m">−3 + 2<i>i</i></span>.`, fix: `Only the imaginary part changes sign: the conjugate is <span class="m">3 + 2<i>i</i></span>.` },
    { wrong: `Multiplying only the denominator by its conjugate: <span class="m"><span class="fr"><span>7 + 4<i>i</i></span><span>2 − <i>i</i></span></span> = <span class="fr"><span>7 + 4<i>i</i></span><span>5</span></span></span>.`, fix: `Multiply the numerator by the same conjugate, so you multiply by 1: <span class="m"><span class="fr"><span>10 + 15<i>i</i></span><span>5</span></span> = 2 + 3<i>i</i></span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m">(5 − 3<i>i</i>) − (−2 + 4<i>i</i>)</span>.`, a: `<span class="m">(5 + 2) + (−3 − 4)<i>i</i> = 7 − 7<i>i</i></span>.` },
    { q: `Multiply <span class="m">(4 + <i>i</i>)(3 − 2<i>i</i>)</span>.`, a: `<span class="m">12 − 8<i>i</i> + 3<i>i</i> − 2<i>i</i><sup>2</sup> = 12 − 5<i>i</i> + 2 = 14 − 5<i>i</i></span>.` },
    { q: `For <span class="m"><i>z</i> = −3 + 4<i>i</i></span>, find <span class="m"><i>z̄</i></span>, <span class="m"><i>z z̄</i></span> and <span class="m">|<i>z</i>|</span>.`, a: `<span class="m"><i>z̄</i> = −3 − 4<i>i</i></span>; <span class="m"><i>z z̄</i> = (−3)<sup>2</sup> + 4<sup>2</sup> = 25</span>; <span class="m">|<i>z</i>| = √<span class="ov">25</span> = 5</span>.` },
    { q: `Divide <span class="m"><span class="fr"><span>1 + 5<i>i</i></span><span>3 + 2<i>i</i></span></span></span> and check your answer.`, a: `Multiply by <span class="m"><span class="fr"><span>3 − 2<i>i</i></span><span>3 − 2<i>i</i></span></span></span>: numerator <span class="m">3 − 2<i>i</i> + 15<i>i</i> − 10<i>i</i><sup>2</sup> = 13 + 13<i>i</i></span>, denominator <span class="m">9 + 4 = 13</span>, so the quotient is <span class="m">1 + <i>i</i></span>. Check: <span class="m">(1 + <i>i</i>)(3 + 2<i>i</i>) = 3 + 2<i>i</i> + 3<i>i</i> − 2 = 1 + 5<i>i</i></span>.` }
  ],
  origin: `Rafael Bombelli's <i>L'Algebra</i> (1572) gave the first rules for multiplying the new quantities, which he called "più di meno" and "meno di meno". William Rowan Hamilton, in 1837, defined a complex number as a pair of real numbers <span class="m">(<i>a</i>, <i>b</i>)</span> with the product <span class="m">(<i>a</i>, <i>b</i>)(<i>c</i>, <i>d</i>) = (<i>ac</i> − <i>bd</i>, <i>ad</i> + <i>bc</i>)</span>, the same rule FOIL gives with <span class="m"><i>i</i><sup>2</sup> = −1</span>.`
};
