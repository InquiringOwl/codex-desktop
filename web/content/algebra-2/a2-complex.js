window.ARITH = window.ARITH || {};

ARITH["a2-complex"] = {
  title: "Complex Numbers & the Imaginary Unit",
  short: "i² = −1 gives every square root a home: a + bi",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Complex numbers · the imaginary unit",
  hero: `<span class="m"><span class="c3"><i>i</i></span><sup>2</sup> = −1 &nbsp;·&nbsp; √<span class="ov">−9</span> = 3<span class="c3"><i>i</i></span> &nbsp;·&nbsp; <i>z</i> = <span class="c1">3</span> + <span class="c2">2</span><span class="c3"><i>i</i></span></span>`,
  lede: `No real number squares to a negative. Mathematicians add one new number, the <span class="c3">imaginary unit</span> <span class="m"><span class="c3"><i>i</i></span></span> with <span class="m"><span class="c3"><i>i</i></span><sup>2</sup> = −1</span>, and get the complex numbers <span class="m"><span class="c1"><i>a</i></span> + <span class="c2"><i>b</i></span><span class="c3"><i>i</i></span></span>, where every square root exists.`,
  plain: `<p>On the real number line, every square is zero or positive, so an equation like <span class="m"><i>x</i><sup>2</sup> = −9</span> has no real solution. Instead of stopping there, we invent a number whose square is <span class="m">−1</span> and call it <span class="m"><span class="c3"><i>i</i></span></span>. Then <span class="m">(3<span class="c3"><i>i</i></span>)<sup>2</sup> = 9<span class="c3"><i>i</i></span><sup>2</sup> = −9</span>, so <span class="m">√<span class="ov">−9</span> = 3<span class="c3"><i>i</i></span></span>.</p>
<p>A <b>complex number</b> has two parts: a real part and an imaginary part, written <span class="m"><span class="c1"><i>a</i></span> + <span class="c2"><i>b</i></span><span class="c3"><i>i</i></span></span>. You can picture it as the point <span class="m">(<span class="c1"><i>a</i></span>, <span class="c2"><i>b</i></span>)</span> in a plane: the real part goes left and right, the imaginary part goes up and down. The ordinary real numbers are the points on the horizontal axis.</p>
<p>Powers of <span class="m"><span class="c3"><i>i</i></span></span> repeat. <span class="m"><span class="c3"><i>i</i></span><sup>1</sup> = <span class="c3"><i>i</i></span></span>, <span class="m"><span class="c3"><i>i</i></span><sup>2</sup> = −1</span>, <span class="m"><span class="c3"><i>i</i></span><sup>3</sup> = −<span class="c3"><i>i</i></span></span>, <span class="m"><span class="c3"><i>i</i></span><sup>4</sup> = 1</span>, and then the cycle starts again. In the plane, each multiplication by <span class="m"><span class="c3"><i>i</i></span></span> is a quarter turn counterclockwise.</p>
<p>One habit prevents most errors: as soon as you see the square root of a negative number, rewrite it with <span class="m"><span class="c3"><i>i</i></span></span> before doing anything else.</p>`,
  formal: `<p>The <b>imaginary unit</b> <span class="m"><span class="c3"><i>i</i></span></span> satisfies <span class="m"><span class="c3"><i>i</i></span><sup>2</sup> = −1</span>. For a real number <span class="m"><i>b</i> &gt; 0</span>, the <b>principal square root</b> of <span class="m">−<i>b</i></span> is <span class="m">√<span class="ov">−<i>b</i></span> = <span class="c3"><i>i</i></span>√<span class="ov"><i>b</i></span></span>. A <b>complex number</b> in <b>standard form</b> is <span class="m"><i>z</i> = <span class="c1"><i>a</i></span> + <span class="c2"><i>b</i></span><span class="c3"><i>i</i></span></span> with <span class="m"><i>a</i>, <i>b</i> ∈ ℝ</span>; <span class="m">Re(<i>z</i>) = <span class="c1"><i>a</i></span></span> is its <b>real part</b> and <span class="m">Im(<i>z</i>) = <span class="c2"><i>b</i></span></span> its <b>imaginary part</b>. If <span class="m"><i>b</i> = 0</span>, <span class="m"><i>z</i></span> is real; if <span class="m"><i>a</i> = 0</span> and <span class="m"><i>b</i> ≠ 0</span>, <span class="m"><i>z</i></span> is <b>pure imaginary</b>. The number systems nest: <span class="m">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ</span>.</p>
<div class="display"><span class="c1"><i>a</i></span> + <span class="c2"><i>b</i></span><span class="c3"><i>i</i></span> = <span class="c1"><i>c</i></span> + <span class="c2"><i>d</i></span><span class="c3"><i>i</i></span> &nbsp;⇔&nbsp; <span class="c1"><i>a</i> = <i>c</i></span> and <span class="c2"><i>b</i> = <i>d</i></span><br><span class="c3"><i>i</i></span><sup><i>n</i></sup> = <span class="c3"><i>i</i></span><sup><i>r</i></sup>, &nbsp; <i>r</i> = remainder of <i>n</i> ÷ 4: &nbsp; <span class="c3"><i>i</i></span><sup>0</sup> = 1, <span class="c3"><i>i</i></span><sup>1</sup> = <span class="c3"><i>i</i></span>, <span class="c3"><i>i</i></span><sup>2</sup> = −1, <span class="c3"><i>i</i></span><sup>3</sup> = −<span class="c3"><i>i</i></span></div>
<p>The <b>complex plane</b> plots <span class="m"><span class="c1"><i>a</i></span> + <span class="c2"><i>b</i></span><span class="c3"><i>i</i></span></span> at <span class="m">(<span class="c1"><i>a</i></span>, <span class="c2"><i>b</i></span>)</span>, with a horizontal real axis and a vertical imaginary axis. The product rule <span class="m">√<span class="ov"><i>a</i></span> · √<span class="ov"><i>b</i></span> = √<span class="ov"><i>ab</i></span></span> holds when <span class="m"><i>a</i>, <i>b</i> ≥ 0</span> but fails when both are negative: <span class="m">√<span class="ov">−4</span> · √<span class="ov">−9</span> = 2<span class="c3"><i>i</i></span> · 3<span class="c3"><i>i</i></span> = 6<span class="c3"><i>i</i></span><sup>2</sup> = −6</span>, while <span class="m">√<span class="ov">(−4)(−9)</span> = √<span class="ov">36</span> = 6</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "Real part", desc: "Re(z): the horizontal coordinate, a real number." },
    { c: "c2", sym: `<i>b</i>`, name: "Imaginary part", desc: "Im(z): the vertical coordinate. It is the real number b, without the i." },
    { c: "c3", sym: `<i>i</i>`, name: "Imaginary unit", desc: "The number with i² = −1; multiplying by i turns a point a quarter turn." }
  ],
  steps: {
    title: "How to simplify with i",
    items: [
      `Rewrite every square root of a negative first: <span class="m">√<span class="ov">−<i>b</i></span> = <span class="c3"><i>i</i></span>√<span class="ov"><i>b</i></span></span> for <span class="m"><i>b</i> &gt; 0</span>.`,
      `Simplify the radical: take out square factors, <span class="m">√<span class="ov">72</span> = 6√<span class="ov">2</span></span>.`,
      `Replace <span class="m"><span class="c3"><i>i</i></span><sup>2</sup></span> by <span class="m">−1</span> wherever it appears.`,
      `For a higher power <span class="m"><span class="c3"><i>i</i></span><sup><i>n</i></sup></span>, divide <span class="m"><i>n</i></span> by 4 and keep the remainder <span class="m"><i>r</i></span>: <span class="m"><span class="c3"><i>i</i></span><sup><i>n</i></sup> = <span class="c3"><i>i</i></span><sup><i>r</i></sup></span>.`,
      `Collect the real terms and the imaginary terms and write <span class="m"><span class="c1"><i>a</i></span> + <span class="c2"><i>b</i></span><span class="c3"><i>i</i></span></span>.`
    ]
  },
  example: {
    prompt: `Write <span class="m"><span class="fr"><span>−6 + √<span class="ov">−72</span></span><span>3</span></span></span> in standard form and give its real and imaginary parts.`,
    lines: [
      { math: `<span class="m">√<span class="ov">−72</span> = <span class="c3"><i>i</i></span>√<span class="ov">72</span></span>`, note: "Rewrite the square root of a negative with i before anything else." },
      { math: `<span class="m">√<span class="ov">72</span> = √<span class="ov">36 · 2</span> = 6√<span class="ov">2</span> &nbsp;⇒&nbsp; √<span class="ov">−72</span> = 6√<span class="ov">2</span> <span class="c3"><i>i</i></span></span>`, note: "36 is the largest square factor of 72." },
      { math: `<span class="m"><span class="fr"><span>−6 + 6√<span class="ov">2</span> <span class="c3"><i>i</i></span></span><span>3</span></span> = <span class="fr"><span>−6</span><span>3</span></span> + <span class="fr"><span>6√<span class="ov">2</span></span><span>3</span></span> <span class="c3"><i>i</i></span></span>`, note: "Divide both the real term and the imaginary term by 3." },
      { math: `<span class="m">= <span class="c1">−2</span> + <span class="c2">2√<span class="ov">2</span></span> <span class="c3"><i>i</i></span></span>`, note: "Standard form a + bi." },
      { math: `<span class="m">Re = <span class="c1">−2</span>, &nbsp; Im = <span class="c2">2√<span class="ov">2</span></span> ≈ 2.83</span>`, note: "The imaginary part is the real number 2√2; the i is not part of it." },
      { math: `<span class="m">point (<span class="c1">−2</span>, <span class="c2">2√<span class="ov">2</span></span>)</span>`, note: "In the complex plane: 2 units left of the origin and about 2.83 units up." }
    ],
    answer: `<span class="m"><span class="c1">−2</span> + <span class="c2">2√<span class="ov">2</span></span> <span class="c3"><i>i</i></span></span>, with real part <span class="m c1">−2</span> and imaginary part <span class="m c2">2√<span class="ov">2</span></span>.`
  },
  why: `<p>Complex numbers began as a trick for solving equations, and they turned out to describe anything that oscillates or rotates. A point that turns in a circle, an alternating current, a sound wave and a quantum state are all written as <span class="m"><i>a</i> + <i>bi</i></span>, because multiplying by <span class="m"><i>i</i></span> is a rotation. Engineers use them every day to analyze circuits and signals.</p>
<p>In this course they finish a job that started with the quadratic formula. With <span class="m"><i>i</i></span>, every quadratic equation has solutions, and later every polynomial of degree <span class="m"><i>n</i></span> has exactly <span class="m"><i>n</i></span> of them.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Writes the impedance of a circuit as Z = R + jX (engineers write j for i) to combine resistors, capacitors and inductors in AC circuits." },
    { role: "Control systems engineer", use: "Plots the complex poles of a system in the complex plane; poles with negative real part mean the system settles instead of shaking apart." },
    { role: "Audio signal processing engineer", use: "Reads each frequency of a Fourier transform as a complex number whose size is loudness and whose angle is phase." },
    { role: "RF and antenna engineer", use: "Uses complex reflection coefficients on a Smith chart to match an antenna to its transmitter." },
    { role: "Quantum computing researcher", use: "Describes qubit states with complex amplitudes whose squared sizes give measurement probabilities." },
    { role: "Aerospace engineer", use: "Models airflow around a wing with complex functions such as the Joukowski map." }
  ],
  life: [
    "The power grid that runs at 50 or 60 hertz is designed with complex-number phasors",
    "Noise-cancelling headphones compute the phase of incoming sound, a complex-number calculation",
    "The Mandelbrot set posters and fractal art come from repeating z² + c on complex numbers",
    "Wi-Fi and 5G encode bits as points in a complex plane (QAM constellations)",
    "MRI scanners reconstruct images from complex-valued measurements"
  ],
  fields: [
    { name: "Electrical engineering", use: "AC circuit analysis with phasors and complex impedance." },
    { name: "Physics", use: "Wave functions in quantum mechanics are complex-valued." },
    { name: "Signal processing", use: "Fourier transforms turn signals into complex frequency components." },
    { name: "Mathematics", use: "Every polynomial factors completely over the complex numbers." }
  ],
  prereqWhy: {
    "a1-radical-ops": "Writing √−b = i√b ends with simplifying √b, and the product rule for radicals is exactly the rule that breaks when both radicands are negative."
  },
  unlocksWhy: {
    "a2-complex-ops": "Adding, multiplying and dividing complex numbers works on the standard form a + bi and uses i² = −1 at every step."
  },
  beyond: [
    { field: "Precalculus", why: "Complex numbers in trigonometric form make powers and roots easy through De Moivre's theorem." },
    { field: "Physics", why: "Oscillations, waves and AC circuits are described with complex exponentials." },
    { field: "Linear Algebra", why: "Rotation matrices have complex eigenvalues, and many results need complex numbers." }
  ],
  mistakes: [
    { wrong: `<span class="m">√<span class="ov">−4</span> · √<span class="ov">−9</span> = √<span class="ov">36</span> = 6</span>`, fix: `Rewrite each root with <span class="m"><i>i</i></span> first: <span class="m">2<i>i</i> · 3<i>i</i> = 6<i>i</i><sup>2</sup> = −6</span>. The product rule for radicals needs nonnegative radicands.` },
    { wrong: `The imaginary part of <span class="m">3 + 5<i>i</i></span> is <span class="m">5<i>i</i></span>.`, fix: `The imaginary part is the real number <span class="m">5</span>. The point is <span class="m">(3, 5)</span>.` },
    { wrong: `<span class="m">√<span class="ov">−8</span> = −√<span class="ov">8</span> = −2√<span class="ov">2</span></span>`, fix: `The negative sign becomes <span class="m"><i>i</i></span>, not a minus outside: <span class="m">√<span class="ov">−8</span> = <i>i</i>√<span class="ov">8</span> = 2√<span class="ov">2</span> <i>i</i></span>.` }
  ],
  practice: [
    { q: `Write <span class="m">√<span class="ov">−81</span></span> and <span class="m">√<span class="ov">−20</span></span> in terms of <span class="m"><i>i</i></span>.`, a: `<span class="m">√<span class="ov">−81</span> = <i>i</i>√<span class="ov">81</span> = 9<i>i</i></span>; <span class="m">√<span class="ov">−20</span> = <i>i</i>√<span class="ov">4 · 5</span> = 2√<span class="ov">5</span> <i>i</i></span>.` },
    { q: `Simplify <span class="m"><i>i</i><sup>35</sup></span> and <span class="m"><i>i</i><sup>100</sup></span>.`, a: `<span class="m">35 = 4 · 8 + 3</span>, so <span class="m"><i>i</i><sup>35</sup> = <i>i</i><sup>3</sup> = −<i>i</i></span>. <span class="m">100 = 4 · 25</span>, remainder 0, so <span class="m"><i>i</i><sup>100</sup> = 1</span>.` },
    { q: `Compute <span class="m">√<span class="ov">−3</span> · √<span class="ov">−12</span></span>.`, a: `<span class="m"><i>i</i>√<span class="ov">3</span> · <i>i</i>√<span class="ov">12</span> = <i>i</i><sup>2</sup>√<span class="ov">36</span> = −6</span>.` },
    { q: `Find the real numbers <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> with <span class="m">(<i>x</i> + 2<i>y</i>) + (2<i>x</i> − <i>y</i>)<i>i</i> = 7 + 4<i>i</i></span>.`, a: `Equal complex numbers have equal parts: <span class="m"><i>x</i> + 2<i>y</i> = 7</span> and <span class="m">2<i>x</i> − <i>y</i> = 4</span>. Then <span class="m"><i>y</i> = 2<i>x</i> − 4</span>, <span class="m"><i>x</i> + 4<i>x</i> − 8 = 7</span>, so <span class="m"><i>x</i> = 3</span>, <span class="m"><i>y</i> = 2</span>.` }
  ],
  origin: `Gerolamo Cardano's <i>Ars Magna</i> (1545) split 10 into two parts with product 40 and got <span class="m">5 ± √<span class="ov">−15</span></span>, calling the result as subtle as it is useless. Rafael Bombelli's <i>L'Algebra</i> (1572) gave the first rules for calculating with such numbers. René Descartes called them "imaginary" in 1637, Leonhard Euler introduced the symbol <span class="m"><i>i</i></span> in 1777, and Caspar Wessel (1799), Jean-Robert Argand (1806) and Carl Friedrich Gauss pictured them as points in a plane.`
};
