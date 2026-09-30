window.ARITH = window.ARITH || {};

ARITH["pa-exponent-laws"] = {
  title: "Exponent Laws with Variables",
  short: "Product, quotient, power, zero and negative exponents",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Exponents · rules for powers of a variable",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup class="c3"><i>m</i></sup> · <span class="c2"><i>x</i></span><sup class="c4"><i>n</i></sup> = <span class="c1"><i>x</i><sup><i>m</i> + <i>n</i></sup></span></span>`,
  lede: `Every exponent law comes from one idea: <span class="m"><span class="c2"><i>x</i></span><sup class="c3"><i>n</i></sup></span> means <span class="m c3"><i>n</i></span> factors of <span class="m c2"><i>x</i></span>. Count the factors and the rules follow.`,
  plain: `<p><span class="m"><i>x</i><sup>3</sup></span> is short for <span class="m"><i>x</i> · <i>x</i> · <i>x</i></span>, three copies of <span class="m"><i>x</i></span> multiplied together. So <span class="m"><i>x</i><sup>3</sup> · <i>x</i><sup>4</sup></span> is three copies times four copies, which is seven copies: <span class="m"><i>x</i><sup>7</sup></span>. When you multiply powers of the same base, you <b>add</b> the exponents.</p>
<p>Dividing works the other way. In <span class="m"><i>x</i><sup>5</sup> ÷ <i>x</i><sup>2</sup></span>, two of the five <span class="m"><i>x</i></span>'s on top cancel with the two on the bottom, leaving <span class="m"><i>x</i><sup>3</sup></span>. You <b>subtract</b> the exponents. And <span class="m">(<i>x</i><sup>2</sup>)<sup>3</sup></span> is three groups of two <span class="m"><i>x</i></span>'s, so you <b>multiply</b>: <span class="m"><i>x</i><sup>6</sup></span>.</p>
<p>What about <span class="m"><i>x</i><sup>0</sup></span>? Since <span class="m"><i>x</i><sup>3</sup> ÷ <i>x</i><sup>3</sup> = 1</span> and the subtraction rule gives <span class="m"><i>x</i><sup>0</sup></span>, we define <span class="m"><i>x</i><sup>0</sup> = 1</span>. In the same way <span class="m"><i>x</i><sup>2</sup> ÷ <i>x</i><sup>5</sup> = <i>x</i><sup>−3</sup></span> must mean <span class="m">1/<i>x</i><sup>3</sup></span>. A negative exponent means "one over".</p>`,
  formal: `<p>For real numbers <span class="m"><i>a</i>, <i>b</i></span> (nonzero wherever they appear in a denominator or with a zero or negative exponent) and integers <span class="m"><i>m</i>, <i>n</i></span>:</p>
<div class="display">Product: <i>a</i><sup><i>m</i></sup> · <i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i> + <i>n</i></sup> &nbsp;&nbsp; Quotient: <span class="fr"><span><i>a</i><sup><i>m</i></sup></span><span><i>a</i><sup><i>n</i></sup></span></span> = <i>a</i><sup><i>m</i> − <i>n</i></sup><br>Power: (<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup> &nbsp;&nbsp; Product to a power: (<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup> &nbsp;&nbsp; Quotient to a power: (<i>a</i>/<i>b</i>)<sup><i>n</i></sup> =<span class="fr"><span><i>a</i><sup><i>n</i></sup></span><span><i>b</i><sup><i>n</i></sup></span></span><br>Zero exponent: <i>a</i><sup>0</sup> = 1 &nbsp;&nbsp; Negative exponent: <i>a</i><sup>−<i>n</i></sup> = <span class="fr"><span>1</span><span><i>a</i><sup><i>n</i></sup></span></span></div>
<p>The zero and negative exponent definitions are chosen so that the product and quotient rules hold for all integer exponents. The expression <span class="m">0<sup>0</sup></span> is left undefined in this course. The laws apply to products and quotients only: in general <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup> ≠ <i>a</i><sup><i>n</i></sup> + <i>b</i><sup><i>n</i></sup></span>, and <span class="m"><i>a</i><sup><i>m</i></sup> + <i>a</i><sup><i>n</i></sup></span> cannot be combined unless <span class="m"><i>m</i> = <i>n</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Base", desc: "The factor being repeated. The laws only combine powers of the same base." },
    { c: "c3", sym: `<i>m</i>`, name: "First exponent", desc: "How many factors of the base the first power contains." },
    { c: "c4", sym: `<i>n</i>`, name: "Second exponent", desc: "How many factors the second power contains, or how many times a power is raised again." },
    { c: "c1", sym: `<i>x</i><sup><i>m</i>+<i>n</i></sup>`, name: "Result", desc: "The single power left after the factors are combined or cancelled." }
  ],
  steps: { title: "How to simplify an expression with exponents", items: [
    `Apply any power outside parentheses to every factor inside, multiplying exponents: <span class="m">(2<i>x</i><sup>3</sup>)<sup>2</sup> = 4<i>x</i><sup>6</sup></span>.`,
    `Multiply the numerical coefficients together, then deal with each variable separately.`,
    `For each base, add exponents of factors being multiplied and subtract exponents in a quotient (top minus bottom).`,
    `Replace any factor with exponent 0 by 1.`,
    `Rewrite negative exponents as positive ones by moving that factor across the fraction bar: <span class="m"><i>y</i><sup>−4</sup> = 1/<i>y</i><sup>4</sup></span>.`,
    `Check a simple case with a number, such as <span class="m"><i>x</i> = 2</span>.`
  ] },
  example: {
    prompt: `A storage cube has edge length <span class="m">2<i>x</i></span> metres. A warehouse cube has edge <span class="m">6<i>x</i></span> metres. Find each volume, how many times larger the warehouse is, and the small cube's volume when <span class="m"><i>x</i> = 1.5</span>.`,
    lines: [
      { math: `<span class="m">(2<span class="c2"><i>x</i></span>)<sup class="c3">3</sup> = 2<sup>3</sup><span class="c2"><i>x</i></span><sup>3</sup> = <span class="c1">8<i>x</i><sup>3</sup></span></span>`, note: "Volume of a cube is edge cubed. The power applies to both factors." },
      { math: `<span class="m">(6<span class="c2"><i>x</i></span>)<sup class="c3">3</sup> = <span class="c1">216<i>x</i><sup>3</sup></span></span>`, note: "6³ = 216." },
      { math: `<span class="m"><span class="fr"><span>216<i>x</i><sup>3</sup></span><span>8<i>x</i><sup>3</sup></span></span> = 27<i>x</i><sup>3 − 3</sup> = 27<i>x</i><sup>0</sup> = 27</span>`, note: "Quotient rule: subtract exponents, and x⁰ = 1." },
      { math: `<span class="m">8(1.5)<sup>3</sup> = 8(3.375) = 27</span>`, note: "Evaluate the small cube's volume at x = 1.5." },
      { math: `<span class="m">2(1.5) = 3, &nbsp;3<sup>3</sup> = 27</span>`, note: "Check: the edge is 3 m, and a 3 m cube holds 27 m³." }
    ],
    answer: `The volumes are <span class="m">8<i>x</i><sup>3</sup></span> m³ and <span class="m">216<i>x</i><sup>3</sup></span> m³. The warehouse cube holds 27 times as much, and the small cube holds <span class="m">27</span> m³ when <span class="m"><i>x</i> = 1.5</span>.`
  },
  why: `<p>Exponent laws are how scientists and engineers handle very large and very small numbers. Multiplying <span class="m">3 × 10<sup>8</sup></span> by <span class="m">2 × 10<sup>−3</sup></span> is quick when you add the exponents. They also explain scaling: tripling the edge of a box multiplies its volume by <span class="m">3<sup>3</sup> = 27</span>.</p>
<p>In algebra, multiplying polynomials, simplifying rational expressions and working with exponential growth all use these rules constantly.</p>`,
  careers: [
    { role: "Chemist", use: "Multiplies and divides quantities in scientific notation, such as moles times 6.022 × 10²³ particles per mole, by adding and subtracting powers of ten." },
    { role: "Software engineer", use: "Works with powers of two, knowing that 2¹⁰ × 2¹⁰ = 2²⁰ bytes is one mebibyte." },
    { role: "Audio engineer", use: "Uses powers of ten in decibel calculations, where each 10 dB step is a factor of 10¹ in power." },
    { role: "Structural engineer", use: "Uses the moment of inertia bh³/12, knowing that doubling a beam's depth multiplies its stiffness by 2³ = 8." },
    { role: "Astronomer", use: "Divides distances such as 9.46 × 10¹⁵ m by 3 × 10⁸ m/s by subtracting exponents to get travel times." }
  ],
  life: [
    "Understanding why a 12-inch pizza has more than twice the area of an 8-inch one",
    "Comparing storage sizes in kilobytes, megabytes and gigabytes",
    "Reading very large or small numbers written in scientific notation",
    "Seeing how fast repeated doubling grows"
  ],
  fields: [
    { name: "Physics", use: "Units such as m/s² and inverse-square laws are handled with exponent rules." },
    { name: "Computer science", use: "Memory sizes and algorithm running times are expressed as powers." },
    { name: "Biology", use: "Bacterial growth by repeated doubling is modelled with powers of 2." }
  ],
  prereqWhy: {
    "pa-variables": "The laws are stated for a variable base, so you need to read expressions such as 3x²y.",
    "exponents": "The rules come from the meaning of a power as repeated multiplication of the base."
  },
  unlocksWhy: {
    "a1-exponents": "Integer exponents and scientific notation in Algebra I apply these laws to longer expressions and to powers of ten."
  },
  beyond: [
    { field: "Algebra II", why: "Rational exponents and logarithms extend the same laws to fractional and unknown exponents." },
    { field: "Calculus I", why: "The power rule for derivatives works on terms written as xⁿ, often after rewriting 1/x² as x⁻²." },
    { field: "Chemistry", why: "Scientific-notation calculations with Avogadro's number and concentrations rely on exponent laws." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>x</i><sup>3</sup> · <i>x</i><sup>4</sup> = <i>x</i><sup>12</sup></span>`, fix: `Multiplying powers adds exponents: <span class="m"><i>x</i><sup>7</sup></span>. Multiply exponents only for a power of a power.` },
    { wrong: `<span class="m">(3<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup></span>`, fix: `The power applies to every factor: <span class="m">(3<i>x</i>)<sup>2</sup> = 9<i>x</i><sup>2</sup></span>.` },
    { wrong: `<span class="m">5<sup>0</sup> = 0</span>`, fix: `Any nonzero base to the 0 power is 1: <span class="m">5<sup>0</sup> = 1</span>.` },
    { wrong: `<span class="m">2<i>x</i><sup>−3</sup> = <span class="fr"><span>1</span><span>2<i>x</i><sup>3</sup></span></span></span>`, fix: `The exponent belongs only to <span class="m"><i>x</i></span>: <span class="m">2<i>x</i><sup>−3</sup> = <span class="fr"><span>2</span><span><i>x</i><sup>3</sup></span></span></span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m"><i>x</i><sup>4</sup> · <i>x</i><sup>7</sup></span>.`, a: `<span class="m"><i>x</i><sup>4 + 7</sup> = <i>x</i><sup>11</sup></span>.` },
    { q: `Simplify <span class="m">(<i>y</i><sup>3</sup>)<sup>5</sup></span>.`, a: `<span class="m"><i>y</i><sup>3 · 5</sup> = <i>y</i><sup>15</sup></span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>12<i>a</i><sup>7</sup><i>b</i><sup>3</sup></span><span>4<i>a</i><sup>2</sup><i>b</i><sup>3</sup></span></span></span>.`, a: `<span class="m">3<i>a</i><sup>7 − 2</sup><i>b</i><sup>3 − 3</sup> = 3<i>a</i><sup>5</sup><i>b</i><sup>0</sup> = 3<i>a</i><sup>5</sup></span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>(2<i>x</i><sup>3</sup><i>y</i><sup>−2</sup>)<sup>2</sup></span><span>8<i>x</i><sup>4</sup><i>y</i><sup>−7</sup></span></span></span> and write it with positive exponents.`, a: `Numerator <span class="m">4<i>x</i><sup>6</sup><i>y</i><sup>−4</sup></span>. Divide: <span class="m"><span class="fr"><span>4</span><span>8</span></span><i>x</i><sup>6 − 4</sup><i>y</i><sup>−4 − (−7)</sup> = <span class="fr"><span><i>x</i><sup>2</sup><i>y</i><sup>3</sup></span><span>2</span></span></span>.` }
  ],
  origin: `The raised-number notation such as <i>x</i><sup>3</sup> was popularised by René Descartes in <i>La Géométrie</i> (1637), although he usually still wrote <i>xx</i> for <i>x</i><sup>2</sup>. John Wallis discussed negative and fractional exponents in <i>Arithmetica Infinitorum</i> (1656), and Isaac Newton used them in their modern written form in letters of 1676.`
};
