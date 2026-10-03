window.ARITH = window.ARITH || {};
ARITH["trig-de-moivre"] = {
  title: "De Moivre's Theorem & Complex Roots",
  short: "Powers turn and stretch; n roots space evenly on a circle",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Complex numbers · powers and roots",
  hero: `<span class="m">[<span class="c1"><i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>)</span>]<sup><i>n</i></sup> = <span class="c5"><i>r</i><sup><i>n</i></sup>(cos <i>nθ</i> + <i>i</i> sin <i>nθ</i>)</span></span>`,
  lede: `To raise a complex number in polar form to the power <span class="m"><i>n</i></span>, raise its modulus to the power <span class="m"><i>n</i></span> and multiply its argument by <span class="m"><i>n</i></span>. Run backwards, the same rule gives all <span class="m"><i>n</i></span> of its <span class="m"><i>n</i></span>th roots, spaced evenly around a circle.`,
  plain: `<p>Multiplying two complex numbers multiplies their lengths and adds their angles. Multiplying a number by itself again and again therefore multiplies its length by itself and adds its angle again and again. The powers <span class="m"><i>z</i>, <i>z</i><sup>2</sup>, <i>z</i><sup>3</sup>, …</span> turn by the same angle each time and grow or shrink by the same factor, so they lie on a spiral.</p>
<p>Roots run this backwards. A cube root of <span class="m">8<i>i</i></span> must have length 2, since <span class="m">2<sup>3</sup> = 8</span>, and an angle that tripled points the same way as <span class="m">8<i>i</i></span>. Angles that differ by a full turn point the same way, so there are three such angles, a third of a turn apart.</p>
<p>Every nonzero complex number has exactly <span class="m"><i>n</i></span> different <span class="m"><i>n</i></span>th roots. They sit at the corners of a regular polygon centred at 0. Even the number 1 has <span class="m"><i>n</i></span> of them, the <b>roots of unity</b>, and they always add up to 0.</p>`,
  formal: `<p><b>De Moivre's theorem.</b> If <span class="m"><span class="c1"><i>z</i> = <i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>)</span></span> and <span class="m"><i>n</i></span> is a positive integer, then</p>
<div class="display"><span class="c1"><i>z</i></span><sup><i>n</i></sup> = <span class="c5"><i>r</i><sup><i>n</i></sup>(cos <i>nθ</i> + <i>i</i> sin <i>nθ</i>)</span>.</div>
<p><i>Proof by induction.</i> For <span class="m"><i>n</i> = 1</span> both sides are <span class="m"><i>z</i></span>. If <span class="m"><i>z</i><sup><i>k</i></sup> = <i>r</i><sup><i>k</i></sup> cis <i>kθ</i></span>, the product rule gives <span class="m"><i>z</i><sup><i>k</i>+1</sup> = <i>z</i><sup><i>k</i></sup> · <i>z</i> = <i>r</i><sup><i>k</i></sup> · <i>r</i> cis(<i>kθ</i> + <i>θ</i>) = <i>r</i><sup><i>k</i>+1</sup> cis (<i>k</i> + 1)<i>θ</i></span>. For <span class="m"><i>z</i> ≠ 0</span> the quotient rule gives <span class="m"><i>z</i><sup>−<i>n</i></sup> = 1/<i>z</i><sup><i>n</i></sup> = <i>r</i><sup>−<i>n</i></sup> cis(−<i>nθ</i>)</span>, so the theorem holds for every integer <span class="m"><i>n</i></span> (with <span class="m"><i>z</i><sup>0</sup> = 1</span>).</p>
<p><b>The <i>n</i>th roots.</b> Let <span class="m"><i>c</i> = <i>r</i> cis <i>θ</i></span> with <span class="m"><i>r</i> &gt; 0</span> and <span class="m"><i>n</i> ≥ 1</span>. A number <span class="m"><i>w</i> = <i>s</i> cis <i>φ</i></span> solves <span class="m"><i>w</i><sup><i>n</i></sup> = <i>c</i></span> exactly when <span class="m"><i>s</i><sup><i>n</i></sup> = <i>r</i></span> and <span class="m"><i>nφ</i> = <i>θ</i> + 2π<i>k</i></span> for an integer <span class="m"><i>k</i></span>. So the solutions are</p>
<div class="display"><span class="c3"><i>w</i><sub><i>k</i></sub></span> = <span class="c4"><i>r</i><sup>1/<i>n</i></sup></span>[cos <span class="fr"><span><i>θ</i> + 2π<i>k</i></span><span><i>n</i></span></span> + <i>i</i> sin <span class="fr"><span><i>θ</i> + 2π<i>k</i></span><span><i>n</i></span></span>], &nbsp; <i>k</i> = 0, 1, …, <i>n</i> − 1,</div>
<p>where <span class="m"><i>r</i><sup>1/<i>n</i></sup></span> is the positive real root. These <span class="m"><i>n</i></span> numbers are different, and <span class="m"><i>k</i> = <i>n</i></span> gives <span class="m"><i>w</i><sub>0</sub></span> again. They lie on the circle of radius <span class="m c4"><i>r</i><sup>1/<i>n</i></sup></span>, <span class="m">2π/<i>n</i></span> apart; for <span class="m"><i>n</i> ≥ 3</span> they are the vertices of a regular <span class="m"><i>n</i></span>-gon.</p>
<p><b>Roots of unity.</b> The solutions of <span class="m"><i>z</i><sup><i>n</i></sup> = 1</span> are <span class="m">1, <i>ω</i>, <i>ω</i><sup>2</sup>, …, <i>ω</i><sup><i>n</i>−1</sup></span> with <span class="m"><i>ω</i> = cis(2π/<i>n</i>)</span>. For <span class="m"><i>n</i> ≥ 2</span>, <span class="m"><i>ω</i> ≠ 1</span>, and the geometric sum gives</p>
<div class="display">1 + <i>ω</i> + <i>ω</i><sup>2</sup> + … + <i>ω</i><sup><i>n</i>−1</sup> = <span class="fr"><span><i>ω</i><sup><i>n</i></sup> − 1</span><span><i>ω</i> − 1</span></span> = <span class="c5">0</span>.</div>`,
  legend: [
    { c: "c1", sym: `<i>z</i>`, name: "Base number", desc: "z = r cis θ, the number raised to a power or whose roots are taken." },
    { c: "c5", sym: `<i>z</i><sup><i>n</i></sup>`, name: "Powers", desc: "zⁿ = rⁿ cis nθ: the length is raised to the power n, the angle multiplied by n." },
    { c: "c3", sym: `<i>w</i><sub><i>k</i></sub>`, name: "Roots", desc: "The n solutions of wⁿ = c, with arguments (θ + 2πk)/n." },
    { c: "c4", sym: `<i>r</i><sup>1/<i>n</i></sup>`, name: "Circle", desc: "All nth roots lie on the circle of radius r^(1/n) about 0." }
  ],
  steps: {
    title: "How to find the nth roots of a complex number",
    items: [
      `Write the number in polar form: <span class="m"><i>c</i> = <i>r</i> cis <i>θ</i></span>.`,
      `Find the modulus of every root: the positive real root <span class="m c4"><i>r</i><sup>1/<i>n</i></sup></span>.`,
      `Write the arguments <span class="m">(<i>θ</i> + 2π<i>k</i>)/<i>n</i> = <i>θ</i>/<i>n</i> + 2π<i>k</i>/<i>n</i></span> for <span class="m"><i>k</i> = 0, 1, …, <i>n</i> − 1</span>.`,
      `Start at <span class="m"><i>θ</i>/<i>n</i></span> and keep adding <span class="m">2π/<i>n</i></span>; stop after <span class="m"><i>n</i></span> roots.`,
      `Convert to <span class="m"><i>a</i> + <i>bi</i></span> where the angles are special, and check one root by raising it to the power <span class="m"><i>n</i></span>.`
    ]
  },
  example: {
    prompt: `Solve <span class="m"><i>z</i><sup>3</sup> = 8<i>i</i></span>. Give the roots in polar and rectangular form.`,
    lines: [
      { math: `<span class="m">8<i>i</i> = 8 cis <span class="fr"><span>π</span><span>2</span></span></span>`, note: "8i lies on the positive imaginary axis at distance 8." },
      { math: `<span class="m"><span class="c4"><i>r</i><sup>1/3</sup></span> = <sup>3</sup>√<span class="ov">8</span> = <span class="c4">2</span></span>`, note: "Every cube root has modulus 2." },
      { math: `<span class="m"><i>φ</i><sub><i>k</i></sub> = <span class="fr"><span>π/2 + 2π<i>k</i></span><span>3</span></span> = <span class="fr"><span>π</span><span>6</span></span> + <span class="fr"><span>2π<i>k</i></span><span>3</span></span>, &nbsp; <i>k</i> = 0, 1, 2</span>`, note: "Three arguments, 2π/3 apart." },
      { math: `<span class="m"><span class="c3"><i>w</i><sub>0</sub></span> = 2 cis <span class="fr"><span>π</span><span>6</span></span> = 2(<span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> + <span class="fr"><span>1</span><span>2</span></span><i>i</i>) = √<span class="ov">3</span> + <i>i</i></span>`, note: "k = 0" },
      { math: `<span class="m"><span class="c3"><i>w</i><sub>1</sub></span> = 2 cis <span class="fr"><span>5π</span><span>6</span></span> = −√<span class="ov">3</span> + <i>i</i></span>`, note: "k = 1" },
      { math: `<span class="m"><span class="c3"><i>w</i><sub>2</sub></span> = 2 cis <span class="fr"><span>3π</span><span>2</span></span> = −2<i>i</i></span>`, note: "k = 2; k = 3 would give w₀ again." },
      { math: `<span class="m">(−2<i>i</i>)<sup>3</sup> = −8<i>i</i><sup>3</sup> = −8(−<i>i</i>) = 8<i>i</i></span>`, note: "Check one root directly." }
    ],
    answer: `<span class="m c3">√<span class="ov">3</span> + <i>i</i>, &nbsp; −√<span class="ov">3</span> + <i>i</i>, &nbsp; −2<i>i</i></span>, the corners of an equilateral triangle on the circle of radius 2`
  },
  why: `<p>De Moivre's theorem turns a power such as <span class="m">(1 + <i>i</i>)<sup>8</sup></span>, which would take seven multiplications in rectangular form, into one line. It also gives formulas for <span class="m">cos <i>nθ</i></span> and <span class="m">sin <i>nθ</i></span>: expand <span class="m">(cos <i>θ</i> + <i>i</i> sin <i>θ</i>)<sup><i>n</i></sup></span> by the binomial theorem and compare real and imaginary parts.</p>
<p>The root formula shows that a polynomial such as <span class="m"><i>z</i><sup><i>n</i></sup> − <i>c</i></span> has exactly <span class="m"><i>n</i></span> complex roots, as the fundamental theorem of algebra promises. Roots of unity are the basis of the fast Fourier transform, which processes audio, images and radio signals, and of three-phase electric power.</p>`,
  careers: [
    { role: "Signal processing engineer", use: "Uses the fast Fourier transform, which evaluates a signal at the nth roots of unity, to filter audio and radio data." },
    { role: "Power systems engineer", use: "Works with three-phase power, whose voltages are 120° apart like the cube roots of unity, so balanced currents add to zero." },
    { role: "Electrical engineer", use: "Raises phasors to powers and finds their roots when analysing filters and oscillators." },
    { role: "Control systems engineer", use: "Places the poles of a system on circles and rays in the complex plane, often at equally spaced angles as in a Butterworth filter." },
    { role: "Computer graphics programmer", use: "Draws regular polygons and star shapes from points spaced 2π/n apart on a circle." },
    { role: "Cryptographer", use: "Uses number-theoretic transforms, built like the Fourier transform from roots of unity, to multiply very large numbers quickly." }
  ],
  life: [
    "Three-phase power lines carry currents 120° apart that add to zero",
    "The corners of a regular hexagon are the sixth roots of unity, scaled",
    "The twelve hour marks on a clock face are evenly spaced like the twelfth roots of unity",
    "Music and video files are compressed with the fast Fourier transform"
  ],
  fields: [
    { name: "Electrical engineering", use: "Phasor powers, three-phase systems and filter design." },
    { name: "Signal processing", use: "The discrete Fourier transform is built on the nth roots of unity." },
    { name: "Abstract algebra", use: "The nth roots of unity form a cyclic group under multiplication." },
    { name: "Physics", use: "Equally spaced phases describe waves from evenly spaced sources." }
  ],
  prereqWhy: {
    "trig-complex-polar": "De Moivre's theorem is the product rule applied n times, and the roots come from matching moduli and arguments in polar form."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus II", why: "With Euler's formula, (re^(iθ))ⁿ = rⁿe^(inθ) and De Moivre's theorem becomes a law of exponents." },
    { field: "Abstract algebra", why: "Roots of unity generate cyclic groups and cyclotomic fields, central in Galois theory." },
    { field: "Computer science", why: "The fast Fourier transform multiplies polynomials quickly by evaluating them at roots of unity." },
    { field: "Differential Equations", why: "The roots of characteristic polynomials such as r⁴ + 1 = 0 are found as complex nth roots." }
  ],
  mistakes: [
    { wrong: `<span class="m">(1 + <i>i</i>)<sup>8</sup> = 1<sup>8</sup> + <i>i</i><sup>8</sup> = 2</span>`, fix: `Powers do not distribute over sums. In polar form <span class="m">(√<span class="ov">2</span> cis π/4)<sup>8</sup> = 16 cis 2π = 16</span>.` },
    { wrong: `<span class="m"><i>z</i><sup>3</sup> = 8</span> has the one solution <span class="m"><i>z</i> = 2</span>.`, fix: `2 is the only real cube root. There are three complex cube roots: <span class="m">2</span>, <span class="m">−1 + √<span class="ov">3</span><i>i</i></span> and <span class="m">−1 − √<span class="ov">3</span><i>i</i></span>, at arguments <span class="m">0, 2π/3, 4π/3</span>.` },
    { wrong: `The fourth roots of <span class="m">16 cis π</span> are <span class="m">16 cis(π/4)</span>, … with modulus 16.`, fix: `The modulus of each root is <span class="m">16<sup>1/4</sup> = 2</span>, not 16. Only <span class="m"><i>r</i><sup>1/<i>n</i></sup></span> raised to the power <span class="m"><i>n</i></span> gives back <span class="m"><i>r</i></span>.` },
    { wrong: `The arguments of the cube roots of <span class="m">8<i>i</i></span> are <span class="m">π/6, π/6 + 2π, π/6 + 4π</span>.`, fix: `Divide the whole of <span class="m"><i>θ</i> + 2π<i>k</i></span> by <span class="m"><i>n</i></span>: the step between roots is <span class="m">2π/3</span>, giving <span class="m">π/6, 5π/6, 3π/2</span>. Adding <span class="m">2π</span> to an argument gives the same root again.` }
  ],
  practice: [
    { q: `Find <span class="m">(1 + <i>i</i>)<sup>8</sup></span>.`, a: `<span class="m">1 + <i>i</i> = √<span class="ov">2</span> cis <span class="fr"><span>π</span><span>4</span></span></span>, so <span class="m">(1 + <i>i</i>)<sup>8</sup> = (√<span class="ov">2</span>)<sup>8</sup> cis 2π = 16(1 + 0<i>i</i>) = 16</span>.` },
    { q: `Find <span class="m">(√<span class="ov">3</span> − <i>i</i>)<sup>5</sup></span> in the form <span class="m"><i>a</i> + <i>bi</i></span>.`, a: `<span class="m">√<span class="ov">3</span> − <i>i</i> = 2 cis <span class="fr"><span>11π</span><span>6</span></span></span>. Then <span class="m">2<sup>5</sup> cis <span class="fr"><span>55π</span><span>6</span></span> = 32 cis <span class="fr"><span>7π</span><span>6</span></span></span> (subtract <span class="m">8π</span>), which is <span class="m">32(−<span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span> − <span class="fr"><span>1</span><span>2</span></span><i>i</i>) = −16√<span class="ov">3</span> − 16<i>i</i></span>.` },
    { q: `Find the four fourth roots of <span class="m">−16</span>.`, a: `<span class="m">−16 = 16 cis π</span>; modulus <span class="m">16<sup>1/4</sup> = 2</span>; arguments <span class="m">(π + 2π<i>k</i>)/4 = π/4, 3π/4, 5π/4, 7π/4</span>. The roots are <span class="m">√<span class="ov">2</span> + √<span class="ov">2</span><i>i</i>, −√<span class="ov">2</span> + √<span class="ov">2</span><i>i</i>, −√<span class="ov">2</span> − √<span class="ov">2</span><i>i</i>, √<span class="ov">2</span> − √<span class="ov">2</span><i>i</i></span>.` },
    { q: `Find the sixth roots of unity in the form <span class="m"><i>a</i> + <i>bi</i></span> and show that their sum is 0.`, a: `<span class="m">cis(2π<i>k</i>/6)</span> for <span class="m"><i>k</i> = 0, …, 5</span>: <span class="m">1, <span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span><i>i</i>, −<span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span><i>i</i>, −1, −<span class="fr"><span>1</span><span>2</span></span> − <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span><i>i</i>, <span class="fr"><span>1</span><span>2</span></span> − <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span><i>i</i></span>. Each root <span class="m">cis(2π<i>k</i>/6)</span> is cancelled by its opposite <span class="m">cis(2π<i>k</i>/6 + π)</span>, so the sum is 0.` }
  ],
  origin: `Abraham de Moivre, a French-born mathematician who worked in London, used the relation in papers of 1707 and 1722 to express cos nθ and to solve equations, without writing the formula in its modern form. Leonhard Euler stated it in its present form in his <i>Introductio in analysin infinitorum</i> of 1748, where it follows from his formula e<sup>iθ</sup> = cos θ + i sin θ.`
};
