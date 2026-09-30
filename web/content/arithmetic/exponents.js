window.ARITH = window.ARITH || {};

ARITH["exponents"] = {
  title: "Exponents & Powers",
  short: "Repeated multiplication written compactly",
  grade: "Grades 6–8",
  hours: 6,
  voice: "mixed",
  eyebrow: "Operations · powers",
  hero: `<span class="m"><span class="c2"><i>b</i></span><sup class="c3"><i>n</i></sup> = <span class="c2"><i>b</i></span> × <span class="c2"><i>b</i></span> × ⋯ × <span class="c2"><i>b</i></span></span>`,
  lede: `An exponent counts how many times the base is used as a factor. Powers grow very fast.`,
  plain: `<p>Writing 2 × 2 × 2 × 2 × 2 gets tiring. An <b>exponent</b> is shorthand: <span class="m">2<sup>5</sup></span> means five 2s multiplied together, which is 32. The 2 is the <b>base</b> and the small raised 5 is the exponent.</p>
<p>Powers grow quickly. Fold a sheet of paper in half and it is 2 layers thick. Fold again and it is 4. After 10 folds it would be <span class="m">2<sup>10</sup> = 1,024</span> layers.</p>
<p>A few rules save a lot of work. When you multiply powers of the same base you add the exponents, because you are just counting all the factors. <span class="m">2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup></span>. Any nonzero number to the power 0 is 1, and a negative exponent means "one over": <span class="m">2<sup>−3</sup> = 1/8</span>.</p>`,
  formal: `<p>For a real number <i>b</i> and a positive integer <i>n</i>, the <b>power</b> <span class="m"><i>b</i><sup><i>n</i></sup></span> is the product of <i>n</i> factors of <i>b</i>. For <span class="m"><i>b</i> ≠ 0</span> define <span class="m"><i>b</i><sup>0</sup> = 1</span> and <span class="m"><i>b</i><sup>−<i>n</i></sup> = 1/<i>b</i><sup><i>n</i></sup></span>. These definitions are the ones that keep the laws below true for all integer exponents. The expression <span class="m">0<sup>0</sup></span> is left undefined in basic arithmetic, although algebra and combinatorics texts often set <span class="m">0<sup>0</sup> = 1</span> by convention.</p>
<div class="display"><span class="m"><i>b</i><sup><i>m</i></sup> · <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>+<i>n</i></sup></span><br><span class="m"><i>b</i><sup><i>m</i></sup> ÷ <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>−<i>n</i></sup></span> <span class="dim">(b ≠ 0)</span><br><span class="m">(<i>b</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>b</i><sup><i>mn</i></sup></span><br><span class="m">(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup></span></div>
<p>Exponentiation is neither commutative nor associative: <span class="m">2<sup>3</sup> ≠ 3<sup>2</sup></span>, and a tower <span class="m"><i>a</i><sup><i>b</i><sup><i>c</i></sup></sup></span> is read top-down as <span class="m"><i>a</i><sup>(<i>b</i><sup><i>c</i></sup>)</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>b</i>`, name: "Base", desc: "The number being multiplied by itself." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "How many copies of the base are multiplied. Also called the power or index." },
    { c: "c1", sym: `<i>b</i><sup><i>n</i></sup>`, name: "Power", desc: "The value of the repeated product. In the lab it is the height of each growth bar." }
  ],
  steps: { title: "How to simplify an expression with exponents", items: [
    `Evaluate anything inside parentheses first, including a power of a product like <span class="m">(2 × 5)<sup>3</sup></span>.`,
    `Check what the exponent applies to. In <span class="m">−3<sup>2</sup></span> it applies to 3 only; in <span class="m">(−3)<sup>2</sup></span> it applies to −3.`,
    `Combine powers of the same base: add exponents when multiplying, subtract when dividing, multiply when raising a power to a power.`,
    `Rewrite any zero exponent as 1 and any negative exponent as a reciprocal.`,
    `Compute the final power by repeated multiplication.`
  ] },
  example: {
    prompt: `A lab culture starts with 50 bacteria, and the population doubles every 20 minutes. How many bacteria are there after 3 hours, assuming none die?`,
    lines: [
      { math: `<span class="m">180 ÷ 20 = <span class="c3">9</span></span>`, note: "3 hours is 180 minutes, which is 9 doubling periods." },
      { math: `<span class="m">50 × <span class="c2">2</span><sup class="c3">9</sup></span>`, note: "Each period multiplies by 2, so 9 periods multiply by 2 nine times." },
      { math: `<span class="m"><span class="c2">2</span><sup class="c3">9</sup> = <span class="c1">512</span></span>`, note: "2, 4, 8, 16, 32, 64, 128, 256, 512." },
      { math: `<span class="m">50 × 512 = 25,600</span>`, note: "Multiply the starting count by the growth factor." }
    ],
    answer: `After 3 hours there are <span class="m">25,600</span> bacteria.`
  },
  why: `<p>Exponents describe anything that grows or shrinks by the same factor each step: compound interest, population growth, radioactive decay, and computer memory sizes measured in powers of 2. They also give compact names to huge and tiny numbers, such as <span class="m">10<sup>9</sup></span> for a billion.</p>
<p>Square roots, scientific notation, polynomials, exponential functions and logarithms all rest on the exponent laws.</p>`,
  careers: [
    { role: "Financial advisor", use: "Projects savings with compound growth, where $P becomes P(1 + r)^t after t years at rate r." },
    { role: "Epidemiologist", use: "Models early outbreak growth as cases multiplying by a fixed factor each generation of infection." },
    { role: "Software engineer", use: "Sizes memory and address spaces in powers of 2, such as 2^32 addresses for a 32-bit system." },
    { role: "Sound engineer", use: "Uses the decibel scale, where every 10 dB increase is a factor of 10 in sound power." },
    { role: "Microbiologist", use: "Estimates cell counts from doubling times and dilution factors written as powers of 10." },
    { role: "Radiologic technologist", use: "Applies half-life decay, where the remaining activity is the initial amount times (1/2)^n after n half-lives." }
  ],
  life: [
    "Seeing how fast savings grow with compound interest",
    "Understanding storage sizes like 256 GB",
    "Reading area and volume units such as m² and cm³",
    "Following how a viral post spreads through shares",
    "Understanding why the Richter and decibel scales jump so quickly"
  ],
  fields: [
    { name: "Biology", use: "Cell division and population growth follow exponential patterns." },
    { name: "Computer science", use: "Binary representation and algorithm running times are measured in powers." },
    { name: "Physics", use: "Inverse-square laws and unit prefixes use exponents throughout." },
    { name: "Finance", use: "Compound interest and present-value formulas are built on powers." }
  ],
  prereqWhy: {
    "multiplication": "A power is defined as repeated multiplication, so fluent multiplication is required.",
    "properties": "The exponent laws follow from the associative and commutative laws of multiplication."
  },
  unlocksWhy: {
    "roots": "A square root undoes squaring, the power with exponent 2.",
    "sci-notation": "Scientific notation writes numbers as a coefficient times a power of 10.",
    "percent-apps": "Compound interest multiplies by (1 + r) once per period, which is a power."
  },
  beyond: [
    { field: "Algebra I", why: "Polynomials are sums of terms with whole-number exponents, and simplifying them uses the exponent laws." },
    { field: "Precalculus", why: "Exponential and logarithmic functions extend exponents to all real numbers." },
    { field: "Calculus", why: "The power rule for derivatives and many series are written in terms of powers." }
  ],
  mistakes: [
    { wrong: `<span class="m">2<sup>3</sup> = 6</span>`, fix: `The exponent counts factors, not a multiplier: <span class="m">2<sup>3</sup> = 2 × 2 × 2 = 8</span>.` },
    { wrong: `<span class="m">−3<sup>2</sup> = 9</span>`, fix: `The exponent applies only to 3: <span class="m">−3<sup>2</sup> = −9</span>. Write <span class="m">(−3)<sup>2</sup> = 9</span> to square −3.` },
    { wrong: `<span class="m">2<sup>3</sup> · 2<sup>4</sup> = 4<sup>7</sup></span>`, fix: `Keep the base and add exponents: <span class="m">2<sup>7</sup> = 128</span>.` },
    { wrong: `<span class="m">(3 + 4)<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup></span>`, fix: `Powers do not distribute over addition: <span class="m">7<sup>2</sup> = 49</span>, but <span class="m">9 + 16 = 25</span>.` }
  ],
  practice: [
    { q: `<span class="m">3<sup>4</sup></span>`, a: `<span class="m">81</span>. 3 × 3 × 3 × 3.` },
    { q: `<span class="m">2<sup>5</sup> × 2<sup>3</sup></span>`, a: `<span class="m">2<sup>8</sup> = 256</span>. Add exponents: 5 + 3 = 8.` },
    { q: `Compare <span class="m">(−2)<sup>4</sup></span> and <span class="m">−2<sup>4</sup></span>.`, a: `<span class="m">(−2)<sup>4</sup> = 16</span>, while <span class="m">−2<sup>4</sup> = −(2<sup>4</sup>) = −16</span>.` },
    { q: `<span class="m">(2<sup>3</sup>)<sup>2</sup> × 2<sup>−4</sup></span>`, a: `<span class="m">4</span>. (2³)² = 2⁶, then 2⁶ × 2⁻⁴ = 2² = 4.` }
  ],
  origin: `Archimedes, in <i>The Sand Reckoner</i> (3rd century BCE), worked with powers of a myriad (10,000) to name very large numbers. The raised-number notation such as <span class="m"><i>a</i><sup>3</sup></span> was popularized by René Descartes in <i>La Géométrie</i> (1637).`
};
