window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["a1-poly-mult"] = {
  title: "Multiplying Polynomials & Special Products",
  short: "Distribute every term, then combine like terms",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Polynomials · products and patterns",
  hero: `<span class="m">(<span class="c2"><i>a</i> + <i>b</i></span>)(<span class="c3"><i>c</i> + <i>d</i></span>) = <span class="c1"><i>ac</i> + <i>ad</i> + <i>bc</i> + <i>bd</i></span></span>`,
  lede: `To multiply two polynomials, multiply every term of the first by every term of the second, then add the results and combine like terms. A few products come up so often that they have their own formulas.`,
  plain: `<p>Multiplying polynomials is the distributive property used over and over. A rectangle makes it concrete. If one side is <span class="m"><i>x</i> + 3</span> and the other is <span class="m"><i>x</i> + 5</span>, cut the rectangle into four pieces: <span class="m"><i>x</i> · <i>x</i></span>, <span class="m"><i>x</i> · 5</span>, <span class="m">3 · <i>x</i></span> and <span class="m">3 · 5</span>. The total area is <span class="m"><i>x</i><sup>2</sup> + 5<i>x</i> + 3<i>x</i> + 15 = <i>x</i><sup>2</sup> + 8<i>x</i> + 15</span>. Each piece is a <b>partial product</b>, and the last step adds the like terms.</p>
<p>For two binomials, the four partial products are often remembered as <b>FOIL</b>: First, Outer, Inner, Last. FOIL only works for binomial times binomial. For anything bigger, use the same idea with more boxes: a binomial times a trinomial gives 2 × 3 = 6 partial products.</p>
<p>Three products are worth memorising because they save time and show up again in factoring: the square of a sum, the square of a difference, and the product of conjugates. The most common error in all of algebra is writing <span class="m">(<i>x</i> + 5)<sup>2</sup> = <i>x</i><sup>2</sup> + 25</span>. The rectangle shows why that is wrong: the two middle pieces, <span class="m">5<i>x</i></span> each, are missing.</p>`,
  formal: `<p>For polynomials <span class="m"><i>P</i></span> and <span class="m"><i>Q</i></span>, the product <span class="m"><i>PQ</i></span> is the sum of all products of one term of <span class="m"><i>P</i></span> with one term of <span class="m"><i>Q</i></span>. Monomials multiply by the product rule for exponents, <span class="m"><i>ax</i><sup><i>m</i></sup> · <i>bx</i><sup><i>n</i></sup> = <i>ab</i> <i>x</i><sup><i>m</i>+<i>n</i></sup></span>. If <span class="m"><i>P</i></span> has <span class="m"><i>p</i></span> terms and <span class="m"><i>Q</i></span> has <span class="m"><i>q</i></span> terms, there are <span class="m"><i>pq</i></span> partial products before combining, and <span class="m">deg(<i>PQ</i>) = deg <i>P</i> + deg <i>Q</i></span> for nonzero polynomials.</p>
<div class="display"><b>Binomial squares:</b> (<i>a</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup> &nbsp;&nbsp; (<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup><br><b>Product of conjugates:</b> (<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>) = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></div>
<p>These identities hold for any expressions <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>, so <span class="m">(3<i>x</i> − 2<i>y</i>)<sup>2</sup> = 9<i>x</i><sup>2</sup> − 12<i>xy</i> + 4<i>y</i><sup>2</sup></span> with <span class="m"><i>a</i> = 3<i>x</i></span> and <span class="m"><i>b</i> = 2<i>y</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i> + <i>b</i>`, name: "First factor", desc: "The polynomial written along the top of the rectangle. Each of its terms labels one column." },
    { c: "c3", sym: `<i>c</i> + <i>d</i>`, name: "Second factor", desc: "The polynomial written down the side. Each of its terms labels one row." },
    { c: "c1", sym: `<i>ac</i>, <i>ad</i>, …`, name: "Partial products", desc: "One product for each box: a term from the top times a term from the side." },
    { c: "c5", sym: `<i>x</i><sup>2</sup> + 8<i>x</i> + 15`, name: "Combined product", desc: "The partial products added, with like terms (same variable and exponent) combined." }
  ],
  steps: { title: "How to multiply polynomials", items: [
    `Write each polynomial in standard form (descending powers). Include a sign with every term.`,
    `Multiply each term of the first polynomial by each term of the second. A grid with one row and column per term keeps track of them.`,
    `Multiply coefficients and add exponents of the same variable: <span class="m">4<i>x</i> · (−3<i>x</i><sup>2</sup>) = −12<i>x</i><sup>3</sup></span>.`,
    `Collect like terms and combine them. Diagonals of the grid usually hold the like terms.`,
    `If the product matches a pattern, you can skip the grid: <span class="m">(<i>a</i> ± <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> ± 2<i>ab</i> + <i>b</i><sup>2</sup></span> and <span class="m">(<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>) = <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>.`,
    `Check by substituting a small number such as <span class="m"><i>x</i> = 1</span> into both the original product and your answer.`
  ] },
  example: {
    prompt: `A rectangular garden bed is 12 ft by 8 ft. A gravel path of width <span class="m"><i>x</i></span> ft will surround it on all four sides. Write the total area covered by the bed and path as a polynomial, and find it for a 1.5 ft path.`,
    lines: [
      { math: `<span class="m">(<span class="c2">2<i>x</i> + 12</span>)(<span class="c3">2<i>x</i> + 8</span>)</span>`, note: "The path adds x on each side, so each dimension grows by 2x." },
      { math: `<span class="m c1">4<i>x</i><sup>2</sup> + 16<i>x</i> + 24<i>x</i> + 96</span>`, note: "Four partial products: 2x·2x, 2x·8, 12·2x and 12·8." },
      { math: `<span class="m c5">4<i>x</i><sup>2</sup> + 40<i>x</i> + 96</span>`, note: "Combine the like terms 16x and 24x." },
      { math: `<span class="m">4(1.5)<sup>2</sup> + 40(1.5) + 96 = 9 + 60 + 96 = 165</span>`, note: "Substitute x = 1.5." },
      { math: `<span class="m">(3 + 12)(3 + 8) = 15 × 11 = 165 ✓</span>`, note: "Check with the unmultiplied form: the outer rectangle is 15 ft by 11 ft." }
    ],
    answer: `The total area is <span class="m">4<i>x</i><sup>2</sup> + 40<i>x</i> + 96</span> square feet, which is 165 ft² for a 1.5 ft path. The path alone covers <span class="m">165 − 96 = 69</span> ft².`
  },
  why: `<p>Any time a length, price or rate is itself an expression, multiplying gives a polynomial. Area of an enlarged frame, revenue as (price) × (number sold) when both depend on a price change, and volume of a box cut from sheet metal all come out as products of polynomials.</p>
<p>Multiplying is also the reverse of factoring, which is how quadratic equations are solved. If you can see that <span class="m">(<i>x</i> + 4)(<i>x</i> − 4) = <i>x</i><sup>2</sup> − 16</span>, you can later look at <span class="m"><i>x</i><sup>2</sup> − 16</span> and recognise its factors at once.</p>`,
  careers: [
    { role: "Landscape architect", use: "Multiplies (length + 2w)(width + 2w) to find the area of a bed plus a border of width w when pricing materials." },
    { role: "Packaging engineer", use: "Writes the volume of an open box folded from a sheet with corners of side x cut out as x(L − 2x)(W − 2x)." },
    { role: "Pricing analyst", use: "Multiplies a price expression by a demand expression to get a revenue polynomial for different discount levels." },
    { role: "Actuary", use: "Expands products such as (1 + r)² and (1 + r)³ when comparing growth of reserves over several periods." },
    { role: "Geneticist", use: "Expands (p + q)² = p² + 2pq + q² to predict genotype frequencies under Hardy-Weinberg equilibrium." },
    { role: "Structural engineer", use: "Multiplies polynomial expressions for beam width and depth when computing section properties that depend on bh³." }
  ],
  life: [
    "Working out how much fabric a quilt needs once a border is added",
    "Estimating the area of a room after extending two walls by the same amount",
    "Doing mental arithmetic like 49 × 51 = 50² − 1² = 2,499",
    "Figuring revenue when raising a price by x dollars loses some customers",
    "Checking how much bigger a picture becomes when the mat is widened"
  ],
  fields: [
    { name: "Biology", use: "The Punnett square is a multiplication grid, and (p + q)² gives the Hardy-Weinberg genotype frequencies." },
    { name: "Physics", use: "Expanding (v₀ + at)² and similar products simplifies kinematics and energy equations." },
    { name: "Economics", use: "Revenue and profit functions are built by multiplying price and quantity expressions." },
    { name: "Computer science", use: "Multiplying polynomials is the core of fast algorithms for big-number multiplication and signal convolution." }
  ],
  prereqWhy: {
    "a1-poly-add": "The last step of every product is combining like terms, which is exactly adding polynomials."
  },
  unlocksWhy: {
    "a1-poly-div": "Division is checked by multiplying the quotient by the divisor and adding the remainder.",
    "a1-factor-gcf": "Factoring undoes multiplication, and every factoring answer is checked by multiplying back out.",
    "a1-radical-ops": "Products like (2 + √5)(3 − √5) and conjugate pairs are multiplied exactly like binomials."
  },
  beyond: [
    { field: "Algebra II", why: "Expanding products is needed for polynomial functions, the binomial theorem and complex-number arithmetic." },
    { field: "Calculus I", why: "Expressions such as (x + h)² − x² are expanded to compute derivatives from the definition." },
    { field: "Statistics", why: "Expanding (x − x̄)² is how the shortcut formula for variance is derived." },
    { field: "Discrete Mathematics", why: "Generating functions count arrangements by multiplying polynomials and reading coefficients." }
  ],
  mistakes: [
    { wrong: `<span class="m">(<i>x</i> + 5)<sup>2</sup> = <i>x</i><sup>2</sup> + 25</span>`, fix: `Squaring a sum needs the middle term: <span class="m">(<i>x</i> + 5)<sup>2</sup> = (<i>x</i> + 5)(<i>x</i> + 5) = <i>x</i><sup>2</sup> + 10<i>x</i> + 25</span>.` },
    { wrong: `<span class="m">2<i>x</i>(3<i>x</i> − 4) = 6<i>x</i> − 8<i>x</i></span>`, fix: `Add exponents when multiplying like bases: <span class="m">2<i>x</i> · 3<i>x</i> = 6<i>x</i><sup>2</sup></span>, so the product is <span class="m">6<i>x</i><sup>2</sup> − 8<i>x</i></span>.` },
    { wrong: `Using FOIL on <span class="m">(<i>x</i> + 2)(<i>x</i><sup>2</sup> − 3<i>x</i> + 5)</span> and getting only four terms.`, fix: `A binomial times a trinomial has six partial products. Distribute each term of <span class="m"><i>x</i> + 2</span> across all three terms.` },
    { wrong: `Dropping the sign of a negative term: <span class="m">(<i>x</i> − 3)(<i>x</i> + 7) = <i>x</i><sup>2</sup> + 7<i>x</i> + 3<i>x</i> + 21</span>.`, fix: `The term is <span class="m">−3</span>, so the partial products are <span class="m">−3<i>x</i></span> and <span class="m">−21</span>: the product is <span class="m"><i>x</i><sup>2</sup> + 4<i>x</i> − 21</span>.` }
  ],
  practice: [
    { q: `Multiply <span class="m">3<i>x</i><sup>2</sup>(2<i>x</i> − 5)</span>.`, a: `<span class="m">3<i>x</i><sup>2</sup> · 2<i>x</i> − 3<i>x</i><sup>2</sup> · 5 = 6<i>x</i><sup>3</sup> − 15<i>x</i><sup>2</sup></span>.` },
    { q: `Multiply <span class="m">(2<i>x</i> + 3)(<i>x</i> − 4)</span>.`, a: `F: <span class="m">2<i>x</i><sup>2</sup></span>, O: <span class="m">−8<i>x</i></span>, I: <span class="m">3<i>x</i></span>, L: <span class="m">−12</span>. Total <span class="m">2<i>x</i><sup>2</sup> − 5<i>x</i> − 12</span>.` },
    { q: `Use the special-product formulas: <span class="m">(3<i>x</i> − 2<i>y</i>)<sup>2</sup></span> and <span class="m">(5<i>a</i> + 4)(5<i>a</i> − 4)</span>.`, a: `<span class="m">(3<i>x</i>)<sup>2</sup> − 2(3<i>x</i>)(2<i>y</i>) + (2<i>y</i>)<sup>2</sup> = 9<i>x</i><sup>2</sup> − 12<i>xy</i> + 4<i>y</i><sup>2</sup></span>. Conjugates: <span class="m">(5<i>a</i>)<sup>2</sup> − 4<sup>2</sup> = 25<i>a</i><sup>2</sup> − 16</span>.` },
    { q: `Multiply <span class="m">(<i>x</i> + 2)(<i>x</i><sup>2</sup> − 3<i>x</i> + 5)</span>.`, a: `<span class="m"><i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 5<i>x</i> + 2<i>x</i><sup>2</sup> − 6<i>x</i> + 10 = <i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> − <i>x</i> + 10</span>. Check at <span class="m"><i>x</i> = 1</span>: <span class="m">3 × 3 = 9</span> and <span class="m">1 − 1 − 1 + 10 = 9</span> ✓.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-rational-exp"] = {
  title: "Rational Exponents",
  short: "Fraction exponents: the denominator is a root",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Exponents · roots written as powers",
  hero: `<span class="m"><i>a</i><sup><span class="c3"><i>m</i></span>/<span class="c4"><i>n</i></span></sup> = (<sup class="c4"><i>n</i></sup>√<i>a</i>)<sup class="c3"><i>m</i></sup> = <span class="c1"><sup><i>n</i></sup>√<span style="text-decoration:overline"><i>a</i><sup><i>m</i></sup></span></span></span>`,
  lede: `A fractional exponent combines a root and a power. The denominator says which root to take, and the numerator says which power to raise it to.`,
  plain: `<p>You already know that <span class="m">9<sup>2</sup> = 81</span> and <span class="m">√81 = 9</span>. What should <span class="m">9<sup>1/2</sup></span> mean? If the exponent rules are going to keep working, then <span class="m">9<sup>1/2</sup> · 9<sup>1/2</sup> = 9<sup>1/2 + 1/2</sup> = 9<sup>1</sup> = 9</span>. The number that times itself gives 9 is 3. So an exponent of <span class="m">1/2</span> means square root, <span class="m">1/3</span> means cube root, and <span class="m">1/<i>n</i></span> means <span class="m"><i>n</i></span>th root.</p>
<p>A top number other than 1 adds a power. <span class="m">8<sup>2/3</sup></span> means "cube root of 8, then square it": <span class="m">∛8 = 2</span> and <span class="m">2<sup>2</sup> = 4</span>. You can square first and take the root second, <span class="m">∛64 = 4</span>, but taking the root first keeps the numbers small.</p>
<p>A negative exponent still means reciprocal, so <span class="m">16<sup>−3/4</sup> = 1/16<sup>3/4</sup> = 1/8</span>. The payoff of writing roots as exponents is that all the exponent rules you know, add when multiplying, multiply when raising a power to a power, now work on roots too.</p>`,
  formal: `<p>Let <span class="m"><i>n</i> ≥ 2</span> be an integer. If <span class="m"><sup><i>n</i></sup>√<i>a</i></span> is a real number (always when <span class="m"><i>a</i> ≥ 0</span>, and also for <span class="m"><i>a</i> &lt; 0</span> when <span class="m"><i>n</i></span> is odd), define</p>
<div class="display"><i>a</i><sup>1/<i>n</i></sup> = <sup><i>n</i></sup>√<i>a</i><br><i>a</i><sup><i>m</i>/<i>n</i></sup> = (<sup><i>n</i></sup>√<i>a</i>)<sup><i>m</i></sup> = <sup><i>n</i></sup>√<span style="text-decoration:overline"><i>a</i><sup><i>m</i></sup></span> &nbsp;&nbsp;<span class="dim"><i>m</i>/<i>n</i> in lowest terms</span><br><i>a</i><sup>−<i>m</i>/<i>n</i></sup> = 1/<i>a</i><sup><i>m</i>/<i>n</i></sup> &nbsp;&nbsp;<span class="dim"><i>a</i> ≠ 0</span></div>
<p>For positive real bases <span class="m"><i>a</i>, <i>b</i></span> and rational exponents <span class="m"><i>r</i>, <i>s</i></span>, the laws of exponents hold: <span class="m"><i>a</i><sup><i>r</i></sup><i>a</i><sup><i>s</i></sup> = <i>a</i><sup><i>r</i>+<i>s</i></sup></span>, <span class="m"><i>a</i><sup><i>r</i></sup>/<i>a</i><sup><i>s</i></sup> = <i>a</i><sup><i>r</i>−<i>s</i></sup></span>, <span class="m">(<i>a</i><sup><i>r</i></sup>)<sup><i>s</i></sup> = <i>a</i><sup><i>rs</i></sup></span>, <span class="m">(<i>ab</i>)<sup><i>r</i></sup> = <i>a</i><sup><i>r</i></sup><i>b</i><sup><i>r</i></sup></span>. With negative bases they can fail, which is why <span class="m">(−16)<sup>1/4</sup></span> is not a real number while <span class="m">(−8)<sup>1/3</sup> = −2</span> is.</p>`,
  legend: [
    { c: "c4", sym: `<i>n</i>`, name: "Root (denominator)", desc: "The index of the root. Denominator 2 is a square root, 3 a cube root, and so on." },
    { c: "c3", sym: `<i>m</i>`, name: "Power (numerator)", desc: "The power the root is raised to. A negative sign on the exponent means take the reciprocal." },
    { c: "c1", sym: `<i>a</i><sup><i>m</i>/<i>n</i></sup>`, name: "Result", desc: "The value after taking the nth root of the base and raising it to the mth power." },
    { c: "c2", sym: `<i>a</i>`, name: "Base", desc: "The number being rooted and powered. For even n it must be 0 or positive to give a real answer." }
  ],
  steps: { title: "How to evaluate and simplify rational exponents", items: [
    `Read the exponent as a fraction <span class="m"><i>m</i>/<i>n</i></span> in lowest terms. If it is negative, first rewrite as a reciprocal: <span class="m"><i>a</i><sup>−<i>m</i>/<i>n</i></sup> = 1/<i>a</i><sup><i>m</i>/<i>n</i></sup></span>.`,
    `Take the <span class="m"><i>n</i></span>th root of the base. Check that it is real: an even root of a negative number is not.`,
    `Raise that root to the power <span class="m"><i>m</i></span>.`,
    `To simplify expressions, use the exponent laws with fractional exponents: add them when multiplying like bases, multiply them when raising a power to a power. Find a common denominator when adding fractions like <span class="m">1/2 + 1/3 = 5/6</span>.`,
    `To go back to radical form, the denominator becomes the index: <span class="m"><i>x</i><sup>5/6</sup> = <sup>6</sup>√<span style="text-decoration:overline"><i>x</i><sup>5</sup></span></span>.`
  ] },
  example: {
    prompt: `Veterinarians estimate an animal's basal energy need with Kleiber's rule, <span class="m"><i>B</i> = 70<i>M</i><sup>3/4</sup></span> kilocalories per day, where <span class="m"><i>M</i></span> is body mass in kilograms. Find <span class="m"><i>B</i></span> for an 81 kg animal and for a 16 kg dog.`,
    lines: [
      { math: `<span class="m">81<sup><span class="c3">3</span>/<span class="c4">4</span></sup> = (<sup class="c4">4</sup>√81)<sup class="c3">3</sup></span>`, note: "Denominator 4 means fourth root; numerator 3 means cube it." },
      { math: `<span class="m"><sup>4</sup>√81 = 3</span>`, note: "Because 3 × 3 × 3 × 3 = 81." },
      { math: `<span class="m">3<sup>3</sup> = <span class="c1">27</span></span>`, note: "Raise the root to the third power." },
      { math: `<span class="m"><i>B</i> = 70 × 27 = 1,890</span>`, note: "About 1,890 kcal per day for the 81 kg animal." },
      { math: `<span class="m">16<sup>3/4</sup> = (<sup>4</sup>√16)<sup>3</sup> = 2<sup>3</sup> = 8, &nbsp; <i>B</i> = 70 × 8 = 560</span>`, note: "The same steps for the 16 kg dog." },
      { math: `<span class="m"><span class="fr"><span>81</span><span>16</span></span> ≈ 5.1 &nbsp; but &nbsp; <span class="fr"><span>1,890</span><span>560</span></span> = 3.375</span>`, note: "The larger animal is about 5 times heavier but needs under 3.4 times the energy." }
    ],
    answer: `The 81 kg animal needs about <span class="m">1,890</span> kcal/day and the 16 kg dog about <span class="m">560</span> kcal/day. Because the exponent is less than 1, energy need grows more slowly than body mass.`
  },
  why: `<p>Many real laws have fractional exponents. Metabolic rate scales with mass to the 3/4 power, a planet's orbital period grows with distance to the 3/2 power, and the average annual growth rate over <span class="m"><i>n</i></span> years is found with a <span class="m">1/<i>n</i></span> power. Calculators and spreadsheets have no key for a fifth root, but they all accept <span class="m">^(1/5)</span>.</p>
<p>Writing roots as exponents turns radical problems into exponent problems, so one set of rules covers both. That view is essential for exponential functions, where the exponent can be any real number, and in calculus, where <span class="m">√<i>x</i></span> is differentiated as <span class="m"><i>x</i><sup>1/2</sup></span>.</p>`,
  careers: [
    { role: "Veterinarian", use: "Scales drug doses and energy requirements between species of different sizes using body weight to the 0.75 power." },
    { role: "Financial analyst", use: "Computes compound annual growth rate as (ending value ÷ starting value)^(1/n) − 1." },
    { role: "Astronomer", use: "Uses Kepler's third law, period proportional to distance^(3/2), to find orbital periods of planets and satellites." },
    { role: "Audio engineer", use: "Finds the frequency ratio of one equal-tempered semitone as 2^(1/12) when tuning or designing instruments." },
    { role: "Hydrologist", use: "Applies Manning's equation, where flow velocity depends on hydraulic radius to the 2/3 power and slope to the 1/2 power." },
    { role: "Pharmacologist", use: "Uses allometric scaling with fractional exponents to convert animal study doses to human-equivalent doses." }
  ],
  life: [
    "Working out the average yearly return on an investment that grew over several years",
    "Typing a cube or fifth root into a phone calculator as a power",
    "Understanding why a small dog eats more per kilogram than a large one",
    "Comparing paper sizes, where each A-size is the previous one scaled by 2^(−1/2)",
    "Reading a piano tuning chart where each note is 2^(1/12) times the one below"
  ],
  fields: [
    { name: "Biology", use: "Allometric laws such as Kleiber's law relate body mass to metabolism and lifespan with fractional exponents." },
    { name: "Physics", use: "Kepler's third law and many scaling laws in fluid flow involve exponents like 3/2 and 2/3." },
    { name: "Finance", use: "Annualised growth and interest rates are found by taking 1/n powers of total growth factors." },
    { name: "Music theory", use: "Equal temperament divides the octave with the ratio 2^(1/12)." }
  ],
  prereqWhy: {
    "a1-radicals": "Evaluating a^(m/n) means taking an nth root, and simplifying the result uses the radical rules you already know."
  },
  unlocksWhy: {
    "a1-exp-functions": "Exponential functions like y = a·bˣ need bˣ to make sense at fractional x, such as half-lives and growth over part of a year."
  },
  beyond: [
    { field: "Algebra II", why: "Radical functions, power functions and exponential equations are all handled with rational exponents." },
    { field: "Precalculus", why: "Power functions y = x^(p/q) and their inverses are graphed and analysed using rational exponents." },
    { field: "Calculus I", why: "The power rule d/dx xⁿ = nxⁿ⁻¹ is applied to roots by writing them as fractional powers." },
    { field: "Chemistry", why: "Rate laws can have fractional orders, such as rate = k[A]^(1/2)." }
  ],
  mistakes: [
    { wrong: `<span class="m">8<sup>2/3</sup> = 8 × <span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>16</span><span>3</span></span></span>`, fix: `The exponent is not a multiplier. <span class="m">8<sup>2/3</sup> = (∛8)<sup>2</sup> = 2<sup>2</sup> = 4</span>.` },
    { wrong: `<span class="m">9<sup>−1/2</sup> = −3</span>`, fix: `A negative exponent means reciprocal, not a negative answer: <span class="m">9<sup>−1/2</sup> = 1/√9 = <span class="fr"><span>1</span><span>3</span></span></span>.` },
    { wrong: `<span class="m">(<i>x</i><sup>2</sup> + 9)<sup>1/2</sup> = <i>x</i> + 3</span>`, fix: `Exponents distribute over products, not sums. <span class="m">(<i>x</i><sup>2</sup> + 9)<sup>1/2</sup></span> does not simplify; at <span class="m"><i>x</i> = 4</span> it is <span class="m">5</span>, not <span class="m">7</span>.` },
    { wrong: `<span class="m">(−16)<sup>1/4</sup> = −2</span>`, fix: `<span class="m">(−2)<sup>4</sup> = 16</span>, not <span class="m">−16</span>. No real number to the fourth power is negative, so <span class="m">(−16)<sup>1/4</sup></span> is not a real number. Odd roots are fine: <span class="m">(−8)<sup>1/3</sup> = −2</span>.` }
  ],
  practice: [
    { q: `Evaluate <span class="m">27<sup>2/3</sup></span>.`, a: `<span class="m">(∛27)<sup>2</sup> = 3<sup>2</sup> = 9</span>.` },
    { q: `Evaluate <span class="m">16<sup>−3/4</sup></span>.`, a: `<span class="m">1/16<sup>3/4</sup> = 1/(<sup>4</sup>√16)<sup>3</sup> = 1/2<sup>3</sup> = <span class="fr"><span>1</span><span>8</span></span></span>.` },
    { q: `Simplify <span class="m"><i>x</i><sup>1/2</sup> · <i>x</i><sup>1/3</sup></span> for <span class="m"><i>x</i> &gt; 0</span> and write the answer in radical form.`, a: `Add exponents: <span class="m"><span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>3</span></span> = <span class="fr"><span>5</span><span>6</span></span></span>, so <span class="m"><i>x</i><sup>5/6</sup> = <sup>6</sup>√<span style="text-decoration:overline"><i>x</i><sup>5</sup></span></span>.` },
    { q: `Simplify <span class="m">(32<i>x</i><sup>10</sup><i>y</i><sup>5</sup>)<sup>3/5</sup></span> for positive <span class="m"><i>x</i>, <i>y</i></span>. Then decide which of <span class="m">(−8)<sup>1/3</sup></span> and <span class="m">(−16)<sup>1/4</sup></span> is a real number.`, a: `<span class="m">32<sup>3/5</sup> = 2<sup>3</sup> = 8</span>, <span class="m">(<i>x</i><sup>10</sup>)<sup>3/5</sup> = <i>x</i><sup>6</sup></span>, <span class="m">(<i>y</i><sup>5</sup>)<sup>3/5</sup> = <i>y</i><sup>3</sup></span>, so the result is <span class="m">8<i>x</i><sup>6</sup><i>y</i><sup>3</sup></span>. <span class="m">(−8)<sup>1/3</sup> = −2</span> is real (odd root); <span class="m">(−16)<sup>1/4</sup></span> is not a real number (even root of a negative).` }
  ],
  origin: `Nicole Oresme worked with fractional powers in his <i>Algorismus proportionum</i> (about 1360), though without modern notation. John Wallis explained fractional and negative exponents in <i>Arithmetica Infinitorum</i> (1656), and Isaac Newton wrote exponents such as <span class="m"><i>a</i><sup>1/2</sup></span> in the modern way in his letters of 1676.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-par-perp"] = {
  title: "Parallel & Perpendicular Lines",
  short: "Equal slopes, or slopes whose product is −1",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Linear equations · comparing slopes",
  hero: `<span class="m"><span class="c3"><i>m</i><sub>∥</sub></span> = <span class="c2"><i>m</i></span> &nbsp;&nbsp;&nbsp; <span class="c1"><i>m</i><sub>⊥</sub></span> = −<span class="fr"><span>1</span><span class="c2"><i>m</i></span></span></span>`,
  lede: `Two lines are parallel when they have the same slope and never meet. They are perpendicular when they meet at a right angle, which happens exactly when their slopes are negative reciprocals.`,
  plain: `<p>Slope measures steepness and direction. Two different lines with the same slope rise at the same rate forever, so the gap between them never changes and they never cross. Those are <b>parallel lines</b>. The lines <span class="m"><i>y</i> = 2<i>x</i> + 1</span> and <span class="m"><i>y</i> = 2<i>x</i> − 4</span> are parallel: same slope 2, different y-intercepts.</p>
<p><b>Perpendicular lines</b> cross at a right angle. Turn a slope triangle a quarter turn and "rise 2, run 1" becomes "rise 1, run −2" (or "rise −1, run 2"). The new slope is <span class="m">−1/2</span>: flip the fraction and change its sign. That is the <b>negative reciprocal</b>. Check by multiplying: <span class="m">2 × (−1/2) = −1</span>.</p>
<p>Vertical and horizontal lines are the exception, because a vertical line has no slope. Any two vertical lines are parallel, any two horizontal lines are parallel, and every vertical line is perpendicular to every horizontal line.</p>`,
  formal: `<p>Let <span class="m"><i>ℓ</i><sub>1</sub></span> and <span class="m"><i>ℓ</i><sub>2</sub></span> be distinct non-vertical lines with slopes <span class="m"><i>m</i><sub>1</sub></span> and <span class="m"><i>m</i><sub>2</sub></span>.</p>
<div class="display"><i>ℓ</i><sub>1</sub> ∥ <i>ℓ</i><sub>2</sub> &nbsp;⟺&nbsp; <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub><br><i>ℓ</i><sub>1</sub> ⊥ <i>ℓ</i><sub>2</sub> &nbsp;⟺&nbsp; <i>m</i><sub>1</sub><i>m</i><sub>2</sub> = −1 &nbsp;&nbsp;<span class="dim">(equivalently <i>m</i><sub>2</sub> = −1/<i>m</i><sub>1</sub>, <i>m</i><sub>1</sub> ≠ 0)</span></div>
<p>Two vertical lines <span class="m"><i>x</i> = <i>h</i><sub>1</sub></span>, <span class="m"><i>x</i> = <i>h</i><sub>2</sub></span> with <span class="m"><i>h</i><sub>1</sub> ≠ <i>h</i><sub>2</sub></span> are parallel, and a vertical line is perpendicular to a horizontal line. For lines in standard form <span class="m"><i>A</i><sub>1</sub><i>x</i> + <i>B</i><sub>1</sub><i>y</i> = <i>C</i><sub>1</sub></span> and <span class="m"><i>A</i><sub>2</sub><i>x</i> + <i>B</i><sub>2</sub><i>y</i> = <i>C</i><sub>2</sub></span>, the lines are perpendicular exactly when <span class="m"><i>A</i><sub>1</sub><i>A</i><sub>2</sub> + <i>B</i><sub>1</sub><i>B</i><sub>2</sub> = 0</span>, which covers the vertical and horizontal cases too.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i>`, name: "Base line", desc: "The given line and its slope. Everything else is measured against it." },
    { c: "c3", sym: `<i>m</i><sub>∥</sub> = <i>m</i>`, name: "Parallel line", desc: "Same slope as the base line, through the chosen point. It never meets the base line." },
    { c: "c1", sym: `<i>m</i><sub>⊥</sub> = −1/<i>m</i>`, name: "Perpendicular line", desc: "Slope is the negative reciprocal of the base slope. It crosses the base line at a right angle." }
  ],
  steps: { title: "How to write a parallel or perpendicular line through a point", items: [
    `Find the slope <span class="m"><i>m</i></span> of the given line. If it is in standard form, solve for <span class="m"><i>y</i></span> or use <span class="m"><i>m</i> = −<i>A</i>/<i>B</i></span>.`,
    `For a parallel line, use the same slope <span class="m"><i>m</i></span>. For a perpendicular line, use <span class="m">−1/<i>m</i></span>: flip the fraction and change the sign.`,
    `If the given line is vertical or horizontal, skip the slope: parallel to <span class="m"><i>x</i> = <i>h</i></span> is another vertical line, perpendicular to it is a horizontal line <span class="m"><i>y</i> = <i>k</i></span>.`,
    `Substitute the new slope and the given point <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> into <span class="m"><i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)</span>.`,
    `Rewrite in the form asked for, and check that the point satisfies it and that the slopes multiply to −1 (perpendicular) or match (parallel).`
  ] },
  example: {
    prompt: `On a town planning grid measured in blocks, Main Street follows <span class="m"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> + 2</span>. A new service road must run parallel to Main Street, and a footpath must cross Main Street at a right angle. Both start at the library at <span class="m">(12, 3)</span>. Find both equations.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>m</i> = <span class="fr"><span>3</span><span>4</span></span></span></span>`, note: "Main Street's slope, read from slope-intercept form." },
      { math: `<span class="m c3"><i>y</i> − 3 = <span class="fr"><span>3</span><span>4</span></span>(<i>x</i> − 12)</span>`, note: "Service road: same slope, through (12, 3)." },
      { math: `<span class="m c3"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> − 6</span>`, note: "Distribute: (3/4)(−12) = −9, then add 3." },
      { math: `<span class="m c1"><i>m</i><sub>⊥</sub> = −<span class="fr"><span>4</span><span>3</span></span></span>`, note: "Negative reciprocal of 3/4 for the footpath." },
      { math: `<span class="m c1"><i>y</i> − 3 = −<span class="fr"><span>4</span><span>3</span></span>(<i>x</i> − 12) &nbsp;→&nbsp; <i>y</i> = −<span class="fr"><span>4</span><span>3</span></span><i>x</i> + 19</span>`, note: "(−4/3)(−12) = 16, then add 3." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> × (−<span class="fr"><span>4</span><span>3</span></span>) = −1 ✓ &nbsp;&nbsp; −<span class="fr"><span>4</span><span>3</span></span>(12) + 19 = 3 ✓</span>`, note: "The slopes multiply to −1 and the library lies on the footpath." }
    ],
    answer: `Service road: <span class="m"><i>y</i> = <span class="fr"><span>3</span><span>4</span></span><i>x</i> − 6</span> (standard form <span class="m">3<i>x</i> − 4<i>y</i> = 24</span>). Footpath: <span class="m"><i>y</i> = −<span class="fr"><span>4</span><span>3</span></span><i>x</i> + 19</span> (standard form <span class="m">4<i>x</i> + 3<i>y</i> = 57</span>).`
  },
  why: `<p>Right angles and parallel edges are everywhere in built things: walls, roads, shelves, circuit traces, the rows of a solar farm. When those objects are laid out on a coordinate grid, the slope tests are how you confirm that two edges really are parallel or square, and how you write the line for a new edge that must be.</p>
<p>The perpendicular slope also gives the shortest distance from a point to a line, which is the idea behind projection, least-squares fitting and the normal line in calculus.</p>`,
  careers: [
    { role: "Civil engineer", use: "Lays out a side road parallel to an existing highway alignment and a cross street perpendicular to it on a site plan." },
    { role: "Surveyor", use: "Checks on a coordinate plat that two property lines meet at a right angle by confirming their slopes multiply to −1." },
    { role: "Carpenter", use: "Uses the 3-4-5 rule to set a wall square to a foundation line before framing." },
    { role: "CAD drafter", use: "Constructs lines parallel and perpendicular to reference edges when drawing mechanical parts." },
    { role: "Game developer", use: "Computes the perpendicular (normal) direction of a wall to make a ball bounce off it correctly." },
    { role: "Printed circuit board designer", use: "Routes traces parallel to each other and at right angles to keep spacing consistent." }
  ],
  life: [
    "Hanging shelves level and parallel to each other",
    "Checking that a patio corner is square before pouring concrete",
    "Parking parallel to a curb or in a spot perpendicular to it",
    "Planning a garden with rows parallel to a fence",
    "Laying floor tiles so the grout lines stay at right angles"
  ],
  fields: [
    { name: "Geometry", use: "Proofs about rectangles, altitudes and perpendicular bisectors are done in coordinates with the slope tests." },
    { name: "Physics", use: "Force components are split along directions parallel and perpendicular to a surface or incline." },
    { name: "Computer graphics", use: "Surface normals, perpendicular to each face, control lighting and reflections." },
    { name: "Architecture", use: "Plans are drawn on orthogonal grids so walls are parallel or perpendicular by design." }
  ],
  prereqWhy: {
    "a1-line-forms": "You need to find a slope from any form of a line and write a new line from a point and a slope in point-slope form."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Geometry", why: "Coordinate proofs of properties like the diagonals of a rhombus being perpendicular rely on the slope tests." },
    { field: "Calculus I", why: "The normal line to a curve at a point has slope −1/f′(a), the negative reciprocal of the tangent slope." },
    { field: "Linear Algebra", why: "Perpendicularity generalises to orthogonal vectors, whose dot product is 0, the same test as A₁A₂ + B₁B₂ = 0." },
    { field: "Physics", why: "Resolving forces into parallel and perpendicular components is the standard way to analyse motion on a slope." }
  ],
  mistakes: [
    { wrong: `Perpendicular to slope <span class="m">3</span> is slope <span class="m">−3</span>.`, fix: `You need the reciprocal and the sign change: <span class="m">−<span class="fr"><span>1</span><span>3</span></span></span>. Check: <span class="m">3 × (−<span class="fr"><span>1</span><span>3</span></span>) = −1</span>.` },
    { wrong: `Reading the slope of <span class="m">2<i>x</i> + 3<i>y</i> = 6</span> as <span class="m">2</span>.`, fix: `Solve for <span class="m"><i>y</i></span> first: <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 2</span>, so the slope is <span class="m">−<span class="fr"><span>2</span><span>3</span></span></span> (that is, <span class="m">−<i>A</i>/<i>B</i></span>).` },
    { wrong: `Line perpendicular to <span class="m"><i>x</i> = 4</span> through <span class="m">(3, −1)</span>: "the slope is undefined, so there is no answer."`, fix: `A line perpendicular to a vertical line is horizontal. The answer is <span class="m"><i>y</i> = −1</span>.` },
    { wrong: `Calling <span class="m"><i>y</i> = 2<i>x</i> + 3</span> and <span class="m">4<i>x</i> − 2<i>y</i> = −6</span> parallel.`, fix: `The second line is <span class="m"><i>y</i> = 2<i>x</i> + 3</span>, the same line. Parallel lines must have the same slope and different y-intercepts.` }
  ],
  practice: [
    { q: `Give the slope of a line parallel to <span class="m"><i>y</i> = −5<i>x</i> + 1</span> and of a line perpendicular to it.`, a: `Parallel: <span class="m">−5</span>. Perpendicular: <span class="m"><span class="fr"><span>1</span><span>5</span></span></span>, since <span class="m">−5 × <span class="fr"><span>1</span><span>5</span></span> = −1</span>.` },
    { q: `Are <span class="m">2<i>x</i> + 3<i>y</i> = 6</span> and <span class="m">3<i>x</i> − 2<i>y</i> = 4</span> parallel, perpendicular or neither?`, a: `Slopes are <span class="m">−<span class="fr"><span>2</span><span>3</span></span></span> and <span class="m"><span class="fr"><span>3</span><span>2</span></span></span>. Their product is <span class="m">−1</span>, so the lines are perpendicular.` },
    { q: `Write the line through <span class="m">(−2, 5)</span> parallel to <span class="m">4<i>x</i> − 2<i>y</i> = 7</span> in slope-intercept form. Then write the line through <span class="m">(3, −1)</span> perpendicular to <span class="m"><i>x</i> = 4</span>.`, a: `<span class="m">4<i>x</i> − 2<i>y</i> = 7</span> has slope <span class="m">2</span>. <span class="m"><i>y</i> − 5 = 2(<i>x</i> + 2)</span>, so <span class="m"><i>y</i> = 2<i>x</i> + 9</span>. The line <span class="m"><i>x</i> = 4</span> is vertical, so the perpendicular is horizontal: <span class="m"><i>y</i> = −1</span>.` },
    { q: `Write the line through <span class="m">(−3, 4)</span> perpendicular to <span class="m">3<i>x</i> − 5<i>y</i> = 10</span>, in standard form.`, a: `Given slope <span class="m"><span class="fr"><span>3</span><span>5</span></span></span>, so the new slope is <span class="m">−<span class="fr"><span>5</span><span>3</span></span></span>. <span class="m"><i>y</i> − 4 = −<span class="fr"><span>5</span><span>3</span></span>(<i>x</i> + 3)</span> gives <span class="m"><i>y</i> = −<span class="fr"><span>5</span><span>3</span></span><i>x</i> − 1</span>. Multiply by 3: <span class="m">5<i>x</i> + 3<i>y</i> = −3</span>. Check: <span class="m">5(−3) + 3(4) = −3</span> ✓.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) defined parallel lines as straight lines in a plane that never meet however far they are extended. The slope tests came much later, after René Descartes and Pierre de Fermat developed coordinate geometry in the 1630s.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-sys-graph"] = {
  title: "Systems of Equations by Graphing",
  short: "Where two lines cross is the solution to both",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Systems · two lines, one point",
  hero: `<span class="m"><span class="c2"><i>y</i> = <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub></span> &nbsp;∩&nbsp; <span class="c3"><i>y</i> = <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub></span> = <span class="c1">(<i>x</i>, <i>y</i>)</span></span>`,
  lede: `A system of linear equations asks for the ordered pairs that satisfy every equation at once. On a graph, that is where the lines meet: one point, no point, or every point of a shared line.`,
  plain: `<p>Each linear equation in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> has infinitely many solutions, and they all lie on its line. When you have two equations, you want the pairs that work in <b>both</b>. Those are the points that lie on both lines, so you graph the two lines and look for where they cross.</p>
<p>There are only three possibilities. The lines cross once, giving exactly one solution. The lines are parallel and never cross, so there is no solution. Or the two equations describe the same line, and every point on it is a solution. You can tell which case you have before graphing: different slopes mean one solution; the same slope with different intercepts means none; the same slope and the same intercept means infinitely many.</p>
<p>Graphing is the clearest way to see what a system means, but it is only as accurate as your drawing. A crossing at <span class="m">(2.4, 3.7)</span> is hard to read off graph paper. That is why the algebraic methods, substitution and elimination, come next. Always check a graphed answer by substituting it into both equations.</p>`,
  formal: `<p>A <b>system of two linear equations in two variables</b> is a pair <span class="m"><i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub></span>, <span class="m"><i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> = <i>c</i><sub>2</sub></span>. A <b>solution</b> is an ordered pair that satisfies both equations, and the <b>solution set</b> is the intersection of the two lines.</p>
<div class="display">Different slopes → one solution &nbsp;<span class="dim">(consistent, independent)</span><br>Same slope, different intercepts → no solution, ∅ &nbsp;<span class="dim">(inconsistent)</span><br>Same line → infinitely many solutions &nbsp;<span class="dim">(consistent, dependent)</span></div>
<p>A system is <b>consistent</b> if it has at least one solution and <b>inconsistent</b> if it has none. Consistent equations are <b>dependent</b> if they describe the same line, so that the solution set is <span class="m">{(<i>x</i>, <i>y</i>) | <i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub>}</span>, and <b>independent</b> otherwise.</p>`,
  legend: [
    { c: "c2", sym: `<i>y</i> = <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub>`, name: "Line 1", desc: "Every point on this line satisfies the first equation." },
    { c: "c3", sym: `<i>y</i> = <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub>`, name: "Line 2", desc: "Every point on this line satisfies the second equation." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Intersection", desc: "The point on both lines, which is the solution of the system. It is missing when the lines are parallel." }
  ],
  steps: { title: "How to solve a system by graphing", items: [
    `Write each equation in slope-intercept form <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, or find its two intercepts if it is in standard form.`,
    `Compare slopes and intercepts to predict the case: one solution, none, or infinitely many.`,
    `Graph both lines carefully on the same axes, using a ruler and a scale that fits the numbers.`,
    `Read the coordinates of the intersection point.`,
    `Check by substituting the point into both original equations. If the lines are parallel, write "no solution" (∅); if they coincide, describe the solution set as the points of that line.`
  ] },
  example: {
    prompt: `Gym A charges a $100 joining fee plus $20 per month. Gym B has no joining fee and charges $45 per month. After how many months have both cost the same total, and what is that total?`,
    lines: [
      { math: `<span class="m c2"><i>y</i> = 20<i>x</i> + 100</span>`, note: "Gym A: total cost y after x months. Slope 20, y-intercept 100." },
      { math: `<span class="m c3"><i>y</i> = 45<i>x</i></span>`, note: "Gym B: slope 45, y-intercept 0." },
      { math: `<span class="m">20 ≠ 45</span>`, note: "Different slopes, so the lines cross exactly once." },
      { math: `<span class="m"><i>x</i> = 2: &nbsp;140 vs 90 &nbsp;&nbsp; <i>x</i> = 4: &nbsp;180 vs 180</span>`, note: "Plotting points from each line, they meet at x = 4." },
      { math: `<span class="m c1">(4, 180)</span>`, note: "Read the intersection from the graph." },
      { math: `<span class="m">20(4) + 100 = 180 ✓ &nbsp;&nbsp; 45(4) = 180 ✓</span>`, note: "The point satisfies both equations." }
    ],
    answer: `After <span class="m">4</span> months both gyms have cost <span class="m">$180</span>. Before that Gym B is cheaper; after that Gym A is cheaper.`
  },
  why: `<p>Many decisions come down to comparing two linear costs: two phone plans, leasing versus buying, a job with a higher base versus one with higher commission. The intersection is the break-even point, and the graph shows at a glance which option wins on each side of it.</p>
<p>Systems are also how you find a single answer when two conditions must hold at once, such as supply equal to demand, or a mixture that meets both a volume and a concentration target. The graph is the picture behind every algebraic method you will use later.</p>`,
  careers: [
    { role: "Small-business owner", use: "Graphs cost and revenue lines to find the break-even number of units where profit starts." },
    { role: "Economist", use: "Finds market equilibrium as the intersection of a linear supply curve and a linear demand curve." },
    { role: "Logistics planner", use: "Compares two carriers' rate lines (fixed fee plus per-mile charge) to see which is cheaper for a given distance." },
    { role: "Air traffic controller", use: "Uses projected straight-line tracks of two aircraft to see whether and where their paths cross." },
    { role: "Financial advisor", use: "Shows a client where two savings or loan plans reach the same total, using a graph of both." }
  ],
  life: [
    "Choosing between two phone or streaming plans with different fixed and monthly costs",
    "Deciding when buying a bike becomes cheaper than paying per ride",
    "Working out when a slower runner with a head start will be caught",
    "Comparing two job offers with different base pay and commission",
    "Seeing whether renting or buying a tool makes sense for a project"
  ],
  fields: [
    { name: "Economics", use: "Equilibrium price and quantity are the intersection of supply and demand." },
    { name: "Physics", use: "The time and place two objects meet is the intersection of their position-time graphs." },
    { name: "Business", use: "Break-even analysis intersects the cost and revenue lines." },
    { name: "Chemistry", use: "Two linear calibration or concentration relationships are compared by finding where they agree." }
  ],
  prereqWhy: {
    "a1-line-forms": "You need to turn each equation, often given in standard form, into a graphable line and read slopes and intercepts."
  },
  unlocksWhy: {
    "a1-sys-ineq": "A system of inequalities is graphed the same way, with shaded half-planes instead of single lines.",
    "a1-sys-sub": "Substitution finds the same intersection point exactly, and the graph tells you what kind of answer to expect."
  },
  beyond: [
    { field: "Linear Algebra", why: "A system Ax = b is studied through the geometry of intersecting lines, planes and hyperplanes." },
    { field: "Economics", why: "Equilibrium models in micro- and macroeconomics are systems of equations solved at an intersection." },
    { field: "Precalculus", why: "Solving f(x) = g(x) graphically for curves generalises the intersection idea to nonlinear functions." }
  ],
  mistakes: [
    { wrong: `Reading an intersection from a rough sketch as <span class="m">(2, 3)</span> and not checking it.`, fix: `Substitute into both equations. If either fails, the true point is nearby and needs an algebraic method or a more careful graph.` },
    { wrong: `Graphing <span class="m">2<i>x</i> + <i>y</i> = 6</span> with slope 2.`, fix: `Solve for <span class="m"><i>y</i></span>: <span class="m"><i>y</i> = −2<i>x</i> + 6</span>, so the slope is <span class="m">−2</span>. Or plot the intercepts <span class="m">(3, 0)</span> and <span class="m">(0, 6)</span>.` },
    { wrong: `For two equations of the same line, writing the answer as "infinitely many solutions: all real numbers".`, fix: `Not every pair works, only pairs on that line. Write the solution set as <span class="m">{(<i>x</i>, <i>y</i>) | <i>x</i> − 2<i>y</i> = 4}</span>, for example.` }
  ],
  practice: [
    { q: `Is <span class="m">(2, −1)</span> a solution of the system <span class="m"><i>x</i> + <i>y</i> = 1</span>, <span class="m">2<i>x</i> − <i>y</i> = 5</span>?`, a: `<span class="m">2 + (−1) = 1</span> ✓ and <span class="m">2(2) − (−1) = 5</span> ✓. Yes, it satisfies both.` },
    { q: `Solve by graphing: <span class="m"><i>y</i> = 2<i>x</i> − 3</span> and <span class="m"><i>y</i> = −<i>x</i> + 3</span>.`, a: `The first line starts at <span class="m">(0, −3)</span> and rises 2 per unit; the second starts at <span class="m">(0, 3)</span> and falls 1 per unit. They meet at <span class="m">(2, 1)</span>. Check: <span class="m">2(2) − 3 = 1</span> and <span class="m">−2 + 3 = 1</span> ✓.` },
    { q: `Classify the system <span class="m"><i>y</i> = 3<i>x</i> + 2</span>, <span class="m">6<i>x</i> − 2<i>y</i> = 8</span>.`, a: `The second equation is <span class="m"><i>y</i> = 3<i>x</i> − 4</span>. Same slope, different intercepts: parallel lines, no solution (∅). The system is inconsistent.` },
    { q: `Classify the system <span class="m">2<i>x</i> − 4<i>y</i> = 8</span>, <span class="m"><i>x</i> = 2<i>y</i> + 4</span>, and describe its solution set.`, a: `Both become <span class="m"><i>y</i> = <span class="fr"><span>1</span><span>2</span></span><i>x</i> − 2</span>. Same line: infinitely many solutions, consistent and dependent. Solution set <span class="m">{(<i>x</i>, <i>y</i>) | <i>x</i> − 2<i>y</i> = 4}</span>.` }
  ],
  origin: `Solving a system by graphing depends on coordinate geometry, which René Descartes and Pierre de Fermat developed independently in the 1630s. Systems of linear equations themselves are much older: the Chinese text <i>The Nine Chapters on the Mathematical Art</i>, compiled by about the first century CE, solves them with counting rods.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-linear-models"] = {
  title: "Linear Models & Line of Best Fit",
  short: "Fit a line to data, predict, and judge the fit",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Linear functions · modelling data",
  hero: `<span class="m"><span class="c1"><i>ŷ</i> = <i>mx</i> + <i>b</i></span> &nbsp;&nbsp;&nbsp; <span class="c4"><i>e</i> = <span class="c2"><i>y</i></span> − <i>ŷ</i></span></span>`,
  lede: `Real data never sit exactly on a line, but many sets of paired data follow a straight-line trend. A line of best fit summarises that trend, predicts new values, and its residuals show how far each point misses.`,
  plain: `<p>Plot paired data, such as temperature and drinks sold, as points on a <b>scatter plot</b>. If the points drift upward or downward in a roughly straight band, a line can describe the pattern. That line is a <b>linear model</b>: its slope is the average change in <span class="m"><i>y</i></span> for each one-unit increase in <span class="m"><i>x</i></span>, and its y-intercept is the predicted <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 0</span>.</p>
<p>Many lines could be drawn through a cloud of points. For each one, measure the vertical miss at every point: the <b>residual</b>, actual minus predicted. The <b>least-squares line</b> is the one line that makes the sum of the squared residuals as small as possible. Calculators and spreadsheets find it for you, and for small data sets you can compute it by hand.</p>
<p>The <b>correlation coefficient</b> <span class="m"><i>r</i></span> is a number between −1 and 1 that says how tightly the points hug a line. Values near 1 or −1 mean a strong linear pattern; values near 0 mean a weak one. Two cautions: a strong correlation does not prove that one variable causes the other, and predictions far outside the range of the data (extrapolation) are unreliable.</p>`,
  formal: `<p>Given data <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>), …, (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>)</span> with means <span class="m"><i>x̄</i></span> and <span class="m"><i>ȳ</i></span>, the <b>least-squares regression line</b> <span class="m"><i>ŷ</i> = <i>mx</i> + <i>b</i></span> minimises <span class="m">Σ(<i>y</i><sub><i>i</i></sub> − <i>ŷ</i><sub><i>i</i></sub>)<sup>2</sup></span>. Its coefficients are</p>
<div class="display"><i>m</i> = <span class="fr"><span>Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)(<i>y</i><sub><i>i</i></sub> − <i>ȳ</i>)</span><span>Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)<sup>2</sup></span></span>, &nbsp;&nbsp; <i>b</i> = <i>ȳ</i> − <i>m</i><i>x̄</i><br><i>r</i> = <span class="fr"><span>Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)(<i>y</i><sub><i>i</i></sub> − <i>ȳ</i>)</span><span>√<span style="text-decoration:overline">Σ(<i>x</i><sub><i>i</i></sub> − <i>x̄</i>)<sup>2</sup> · Σ(<i>y</i><sub><i>i</i></sub> − <i>ȳ</i>)<sup>2</sup></span></span></span>, &nbsp;&nbsp; −1 ≤ <i>r</i> ≤ 1</div>
<p>The line always passes through <span class="m">(<i>x̄</i>, <i>ȳ</i>)</span>, its residuals <span class="m"><i>e</i><sub><i>i</i></sub> = <i>y</i><sub><i>i</i></sub> − <i>ŷ</i><sub><i>i</i></sub></span> sum to 0, and the slope has the same sign as <span class="m"><i>r</i></span>. Using the model inside the range of the observed <span class="m"><i>x</i></span>-values is <b>interpolation</b>; outside it is <b>extrapolation</b>.</p>`,
  legend: [
    { c: "c2", sym: `(<i>x</i><sub><i>i</i></sub>, <i>y</i><sub><i>i</i></sub>)`, name: "Data points", desc: "The observed pairs plotted on the scatter plot." },
    { c: "c1", sym: `<i>ŷ</i> = <i>mx</i> + <i>b</i>`, name: "Best-fit line", desc: "The least-squares line. The hat on y marks a predicted value, not an observed one." },
    { c: "c4", sym: `<i>e</i> = <i>y</i> − <i>ŷ</i>`, name: "Residual", desc: "Observed minus predicted, the vertical gap from a point to the line. Positive means the point lies above the line." },
    { c: "c3", sym: `<i>r</i>`, name: "Correlation", desc: "A number from −1 to 1 measuring how closely the points follow a straight line and in which direction." }
  ],
  steps: { title: "How to build and use a linear model", items: [
    `Make a scatter plot and decide whether a straight-line pattern is reasonable. A curved pattern needs a different model.`,
    `Find the means <span class="m"><i>x̄</i></span> and <span class="m"><i>ȳ</i></span>.`,
    `For each point, compute <span class="m"><i>x</i> − <i>x̄</i></span> and <span class="m"><i>y</i> − <i>ȳ</i></span>. Add up their products and the squares <span class="m">(<i>x</i> − <i>x̄</i>)<sup>2</sup></span>.`,
    `Divide to get the slope <span class="m"><i>m</i></span>, then <span class="m"><i>b</i> = <i>ȳ</i> − <i>m</i><i>x̄</i></span>. (A calculator's linear regression gives the same numbers plus <span class="m"><i>r</i></span>.)`,
    `Interpret the slope and intercept in the units of the problem.`,
    `Predict by substituting an <span class="m"><i>x</i></span>-value, preferably inside the data range, and judge the fit from <span class="m"><i>r</i></span> and the residuals.`
  ] },
  example: {
    prompt: `A café records the daily high temperature <span class="m"><i>x</i></span> (°F) and iced drinks sold <span class="m"><i>y</i></span> on five days: (60, 40), (65, 48), (70, 55), (75, 61), (80, 71). Find the least-squares line, predict sales on an 85°F day, and find the residual for the 75°F day.`,
    lines: [
      { math: `<span class="m"><i>x̄</i> = 70, &nbsp; <i>ȳ</i> = <span class="fr"><span>275</span><span>5</span></span> = 55</span>`, note: "Means of the temperatures and of the sales." },
      { math: `<span class="m"><i>x</i> − <i>x̄</i>: −10, −5, 0, 5, 10 &nbsp;&nbsp; <i>y</i> − <i>ȳ</i>: −15, −7, 0, 6, 16</span>`, note: "Deviations from the means for each day." },
      { math: `<span class="m">Σ(<i>x</i> − <i>x̄</i>)(<i>y</i> − <i>ȳ</i>) = 150 + 35 + 0 + 30 + 160 = 375, &nbsp; Σ(<i>x</i> − <i>x̄</i>)<sup>2</sup> = 250</span>`, note: "The two sums in the slope formula." },
      { math: `<span class="m"><i>m</i> = <span class="fr"><span>375</span><span>250</span></span> = 1.5, &nbsp; <i>b</i> = 55 − 1.5(70) = −50</span>`, note: "About 1.5 more drinks for each extra degree." },
      { math: `<span class="m c1"><i>ŷ</i> = 1.5<i>x</i> − 50</span>`, note: "The line of best fit. The intercept has no real meaning here, since 0°F is far outside the data." },
      { math: `<span class="m"><i>ŷ</i>(85) = 127.5 − 50 = 77.5</span>`, note: "Predict about 78 drinks at 85°F, a mild extrapolation." },
      { math: `<span class="m c4"><i>e</i> = 61 − (1.5 · 75 − 50) = 61 − 62.5 = −1.5</span>`, note: "The 75°F day sold 1.5 drinks fewer than the model predicts." }
    ],
    answer: `The model is <span class="m"><i>ŷ</i> = 1.5<i>x</i> − 50</span>, with <span class="m"><i>r</i> ≈ 0.997</span>, a very strong positive linear relationship. It predicts about 78 drinks at 85°F, and the 75°F day has residual <span class="m">−1.5</span>.`
  },
  why: `<p>Linear models are the first tool people reach for when they have data and want to predict: sales from advertising, fuel use from distance, a child's height from age, house price from floor area. The slope turns a messy table into one rate you can quote and act on.</p>
<p>Knowing how the line is chosen, and what residuals and <span class="m"><i>r</i></span> say, protects you from bad conclusions. It is the entry point to statistics, data science and machine learning, where the same least-squares idea is scaled up to many variables.</p>`,
  careers: [
    { role: "Data analyst", use: "Fits regression lines in a spreadsheet or Python to estimate how sales change with advertising spend." },
    { role: "Laboratory technician", use: "Builds a linear calibration curve of instrument reading against known concentrations and reads unknown samples from it." },
    { role: "Real estate appraiser", use: "Uses regression of sale price on square footage from comparable homes to support a valuation." },
    { role: "Sports analyst", use: "Models points scored against shots attempted or minutes played to compare player efficiency." },
    { role: "Environmental scientist", use: "Fits a trend line to yearly temperature or pollution measurements to estimate the rate of change." },
    { role: "Operations manager", use: "Regresses staffing hours on customer volume to forecast how many staff a busy day needs." }
  ],
  life: [
    "Estimating a monthly electricity bill from the average outdoor temperature",
    "Judging whether more study hours have been paying off in quiz scores",
    "Predicting when a savings balance growing steadily will reach a goal",
    "Reading a news chart with a trend line and asking whether the claim holds",
    "Tracking running pace against weekly distance to see training progress"
  ],
  fields: [
    { name: "Statistics", use: "Simple linear regression and correlation are core topics, with tests of whether the slope differs from 0." },
    { name: "Chemistry", use: "Beer's law calibration plots of absorbance against concentration are fitted with least squares." },
    { name: "Economics", use: "Econometrics estimates relationships such as demand against price with regression." },
    { name: "Machine learning", use: "Linear regression is the simplest supervised learning model, trained by minimising squared error." }
  ],
  prereqWhy: {
    "a1-line-forms": "Writing, interpreting and converting the model line uses slope, intercepts and point-slope form."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Statistics", why: "Regression inference, confidence intervals for the slope and multiple regression all build on the least-squares line." },
    { field: "Linear Algebra", why: "Least squares is solved in general by the normal equations AᵀAx = Aᵀb, a projection onto a subspace." },
    { field: "Calculus I", why: "The least-squares formulas come from setting derivatives of the squared-error sum to zero." },
    { field: "Economics", why: "Estimating elasticities and forecasting uses regression models fitted to real data." }
  ],
  mistakes: [
    { wrong: `Computing a residual as predicted minus observed.`, fix: `A residual is <span class="m"><i>e</i> = <i>y</i> − <i>ŷ</i></span>, observed minus predicted. A negative residual means the point is below the line.` },
    { wrong: `"<span class="m"><i>r</i> = 0.9</span> between ice cream sales and drownings, so ice cream causes drowning."`, fix: `Correlation is not causation. Both rise in hot weather; a third variable (temperature) drives both.` },
    { wrong: `Using <span class="m"><i>ŷ</i> = 1.5<i>x</i> − 50</span> to predict drink sales at 20°F and getting <span class="m">−20</span>.`, fix: `That is extrapolation far outside the data (60 to 80°F). The model is only trustworthy near the observed range.` },
    { wrong: `Concluding "no relationship" from <span class="m"><i>r</i> ≈ 0</span>.`, fix: `<span class="m"><i>r</i></span> only measures linear association. Data following a U-shaped curve can have <span class="m"><i>r</i> ≈ 0</span> and a very strong relationship.` }
  ],
  practice: [
    { q: `A model for a plant's height is <span class="m"><i>ŷ</i> = 2.5<i>x</i> + 10</span> cm after <span class="m"><i>x</i></span> weeks. Predict the height at 8 weeks and interpret the slope.`, a: `<span class="m">2.5(8) + 10 = 30</span> cm. The plant grows about 2.5 cm per week.` },
    { q: `A car's value is modelled by <span class="m"><i>ŷ</i> = −1,200<i>x</i> + 18,000</span> dollars at age <span class="m"><i>x</i></span> years. Interpret both numbers, and find the residual for a 5-year-old car that sold for $13,500.`, a: `It loses about $1,200 per year, and the model's value for a new car is $18,000. Predicted at 5 years: <span class="m">−6,000 + 18,000 = 12,000</span>. Residual <span class="m">13,500 − 12,000 = 1,500</span>: it sold for $1,500 more than predicted.` },
    { q: `A plumber charged $150 for a 2-hour job and $250 for a 6-hour job. Write a linear model for cost by hours and predict a 4.5-hour job.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>250 − 150</span><span>6 − 2</span></span> = 25</span>. <span class="m"><i>y</i> − 150 = 25(<i>x</i> − 2)</span>, so <span class="m"><i>y</i> = 25<i>x</i> + 100</span>: a $100 call-out fee plus $25 per hour. At 4.5 hours: <span class="m">$212.50</span>.` },
    { q: `Find the least-squares line and <span class="m"><i>r</i></span> for the points <span class="m">(1, 2), (2, 3), (3, 5), (4, 6)</span>.`, a: `<span class="m"><i>x̄</i> = 2.5</span>, <span class="m"><i>ȳ</i> = 4</span>. Products of deviations: <span class="m">3 + 0.5 + 0.5 + 3 = 7</span>; <span class="m">Σ(<i>x</i> − <i>x̄</i>)<sup>2</sup> = 5</span>; <span class="m">Σ(<i>y</i> − <i>ȳ</i>)<sup>2</sup> = 10</span>. <span class="m"><i>m</i> = 1.4</span>, <span class="m"><i>b</i> = 4 − 1.4(2.5) = 0.5</span>, so <span class="m"><i>ŷ</i> = 1.4<i>x</i> + 0.5</span>. <span class="m"><i>r</i> = 7/√50 ≈ 0.990</span>.` }
  ],
  origin: `Adrien-Marie Legendre published the method of least squares in 1805, and Carl Friedrich Gauss published his own account in 1809, saying he had used it since 1795. Francis Galton introduced the term "regression" in the 1880s while studying the heights of parents and children, and Karl Pearson developed the correlation coefficient <span class="m"><i>r</i></span> in the 1890s.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-poly-div"] = {
  title: "Dividing Polynomials",
  short: "Long division and synthetic division for polynomials",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomials · division algorithm",
  hero: `<span class="m"><span class="c2"><i>P</i>(<i>x</i>)</span> = <span class="c3"><i>D</i>(<i>x</i>)</span> · <span class="c1"><i>Q</i>(<i>x</i>)</span> + <span class="c4"><i>R</i>(<i>x</i>)</span></span>`,
  lede: `Dividing polynomials works like long division of whole numbers: divide the leading terms, multiply back, subtract, bring down, repeat. The result is a quotient and a remainder of lower degree than the divisor.`,
  plain: `<p>Dividing by a monomial is the easy case. Split the fraction and divide each term separately: <span class="m">(12<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup>) ÷ 4<i>x</i><sup>2</sup> = 3<i>x</i><sup>2</sup> − 2<i>x</i> + 1</span>. Every term of the top must be divided, not just the first.</p>
<p>Dividing by a binomial such as <span class="m"><i>x</i> + 2</span> uses <b>polynomial long division</b>, the same routine you learned for numbers. Ask "what times <span class="m"><i>x</i></span> gives the leading term?" Write that in the quotient, multiply it by the whole divisor, subtract, and bring down the next term. Keep going until what is left has a lower degree than the divisor. What is left is the <b>remainder</b>.</p>
<p>Two habits prevent most errors. Write the dividend in descending order and put in a <span class="m">0</span> placeholder for any missing power, such as <span class="m"><i>x</i><sup>3</sup> + 0<i>x</i><sup>2</sup> + 0<i>x</i> − 27</span>. And subtract the whole product, which means changing the sign of every term. When the divisor has the form <span class="m"><i>x</i> − <i>a</i></span>, a shortcut called <b>synthetic division</b> does the same work using only the coefficients.</p>`,
  formal: `<p><b>Division algorithm for polynomials.</b> If <span class="m"><i>P</i>(<i>x</i>)</span> and <span class="m"><i>D</i>(<i>x</i>)</span> are polynomials with <span class="m"><i>D</i>(<i>x</i>) ≠ 0</span>, there are unique polynomials <span class="m"><i>Q</i>(<i>x</i>)</span> (quotient) and <span class="m"><i>R</i>(<i>x</i>)</span> (remainder) such that</p>
<div class="display"><i>P</i>(<i>x</i>) = <i>D</i>(<i>x</i>) <i>Q</i>(<i>x</i>) + <i>R</i>(<i>x</i>), &nbsp;&nbsp;<span class="dim"><i>R</i> = 0 or deg <i>R</i> &lt; deg <i>D</i></span><br><span class="fr"><span><i>P</i>(<i>x</i>)</span><span><i>D</i>(<i>x</i>)</span></span> = <i>Q</i>(<i>x</i>) + <span class="fr"><span><i>R</i>(<i>x</i>)</span><span><i>D</i>(<i>x</i>)</span></span></div>
<p>When <span class="m"><i>D</i>(<i>x</i>) = <i>x</i> − <i>a</i></span>, the remainder is a constant and equals <span class="m"><i>P</i>(<i>a</i>)</span> (the <b>remainder theorem</b>). So <span class="m"><i>x</i> − <i>a</i></span> is a factor of <span class="m"><i>P</i></span> exactly when <span class="m"><i>P</i>(<i>a</i>) = 0</span>. <b>Synthetic division</b> by <span class="m"><i>x</i> − <i>a</i></span> lists the coefficients of <span class="m"><i>P</i></span>, brings down the first, and repeatedly multiplies by <span class="m"><i>a</i></span> and adds.</p>`,
  legend: [
    { c: "c2", sym: `<i>P</i>(<i>x</i>)`, name: "Dividend", desc: "The polynomial being divided, written in descending powers with 0 for any missing terms." },
    { c: "c3", sym: `<i>D</i>(<i>x</i>)`, name: "Divisor", desc: "The polynomial you divide by. For synthetic division it must have the form x − a." },
    { c: "c1", sym: `<i>Q</i>(<i>x</i>)`, name: "Quotient", desc: "Built one term at a time by dividing leading terms." },
    { c: "c4", sym: `<i>R</i>(<i>x</i>)`, name: "Remainder", desc: "What is left when its degree is less than the divisor's. A remainder of 0 means the divisor is a factor." }
  ],
  steps: { title: "How to divide a polynomial by a binomial", items: [
    `Write the dividend and divisor in descending powers. Insert <span class="m">0</span> coefficients for missing powers.`,
    `Divide the leading term of the dividend by the leading term of the divisor. Write the result as the first term of the quotient.`,
    `Multiply that term by the entire divisor and write the product under the matching terms.`,
    `Subtract: change the sign of every term of the product and add. Bring down the next term.`,
    `Repeat with the new leading term until the remainder has lower degree than the divisor.`,
    `Write the answer as quotient + remainder/divisor, and check that divisor × quotient + remainder gives the dividend.`
  ] },
  example: {
    prompt: `A shipping crate is designed so that its volume is <span class="m"><i>V</i> = 2<i>x</i><sup>3</sup> + 9<i>x</i><sup>2</sup> + 7<i>x</i> − 6</span> cubic feet and its height is <span class="m"><i>x</i> + 2</span> feet. Find an expression for the area of its base, and check it for <span class="m"><i>x</i> = 3</span>.`,
    lines: [
      { math: `<span class="m">(<span class="c2">2<i>x</i><sup>3</sup> + 9<i>x</i><sup>2</sup> + 7<i>x</i> − 6</span>) ÷ (<span class="c3"><i>x</i> + 2</span>)</span>`, note: "Base area = volume ÷ height." },
      { math: `<span class="m"><span class="c1">2<i>x</i><sup>2</sup></span>(<i>x</i> + 2) = 2<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup> → remainder so far 5<i>x</i><sup>2</sup> + 7<i>x</i></span>`, note: "2x³ ÷ x = 2x². Multiply, subtract, bring down 7x." },
      { math: `<span class="m"><span class="c1">5<i>x</i></span>(<i>x</i> + 2) = 5<i>x</i><sup>2</sup> + 10<i>x</i> → −3<i>x</i> − 6</span>`, note: "5x² ÷ x = 5x. Subtract, bring down −6." },
      { math: `<span class="m"><span class="c1">−3</span>(<i>x</i> + 2) = −3<i>x</i> − 6 → <span class="c4">0</span></span>`, note: "−3x ÷ x = −3. The remainder is 0, so x + 2 divides evenly." },
      { math: `<span class="m c1"><i>Q</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> + 5<i>x</i> − 3</span>`, note: "The base area in square feet." },
      { math: `<span class="m"><i>x</i> = 3: &nbsp; <i>V</i> = 54 + 81 + 21 − 6 = 150, &nbsp; 5 × (18 + 15 − 3) = 5 × 30 = 150 ✓</span>`, note: "Height 5 ft times base 30 ft² matches the volume." }
    ],
    answer: `The base area is <span class="m">2<i>x</i><sup>2</sup> + 5<i>x</i> − 3</span> square feet, which factors as <span class="m">(2<i>x</i> − 1)(<i>x</i> + 3)</span>, so the base is <span class="m">2<i>x</i> − 1</span> ft by <span class="m"><i>x</i> + 3</span> ft.`
  },
  why: `<p>Division undoes multiplication. If you know a total, such as an area, a volume or a cost, and one of its factors, dividing gives the other factor. It is also how you break a polynomial into simpler pieces: once you know one factor, division hands you the rest.</p>
<p>In later courses, polynomial division finds all the roots of a cubic or quartic once one root is known, rewrites rational functions to reveal their slant asymptotes, and underlies partial fractions in calculus. The same algorithm, run on binary polynomials, is how cyclic redundancy checks detect errors in network data.</p>`,
  careers: [
    { role: "Network engineer", use: "Relies on cyclic redundancy checks, where a data block is divided by a generator polynomial and the remainder detects transmission errors." },
    { role: "Control systems engineer", use: "Divides polynomials in transfer functions to simplify them and study a system's long-run behaviour." },
    { role: "Cryptographer", use: "Performs polynomial division over finite fields in algorithms such as AES and Reed-Solomon codes." },
    { role: "Structural engineer", use: "Divides a polynomial load or volume expression by a known dimension to get the remaining dimension in a design formula." },
    { role: "Mathematics teacher", use: "Uses synthetic division and the remainder theorem to test candidate roots when teaching polynomial factoring." }
  ],
  life: [
    "Finding the missing side of a rectangle when its area and one side are known expressions",
    "Checking a factoring answer by dividing it back out",
    "Splitting a total cost formula by a number of units to get cost per unit",
    "Understanding how a file checksum catches corrupted downloads",
    "Doing long division of numbers faster by seeing it as polynomial division in base 10"
  ],
  fields: [
    { name: "Computer science", use: "Error-detecting codes such as CRC-32 are polynomial division with coefficients 0 and 1." },
    { name: "Engineering", use: "Transfer functions are ratios of polynomials, simplified by division and factoring." },
    { name: "Coding theory", use: "Reed-Solomon codes on QR codes and storage devices encode and decode by dividing polynomials." },
    { name: "Algebra II", use: "Synthetic division and the remainder and factor theorems are used to find all zeros of a polynomial." }
  ],
  prereqWhy: {
    "a1-poly-mult": "Each step multiplies a quotient term by the whole divisor, and the answer is checked by multiplying back out."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "The remainder and factor theorems use division to find zeros and factor higher-degree polynomials." },
    { field: "Precalculus", why: "Dividing numerator by denominator gives the slant asymptote of a rational function." },
    { field: "Calculus II", why: "Improper rational integrands are divided first, then split by partial fractions." },
    { field: "Abstract Algebra", why: "The division algorithm in polynomial rings leads to greatest common divisors and field extensions." }
  ],
  mistakes: [
    { wrong: `<span class="m"><span class="fr"><span>6<i>x</i><sup>2</sup> + 3<i>x</i></span><span>3<i>x</i></span></span> = 2<i>x</i> + 3<i>x</i></span>, or cancelling to get <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> + 5</span><span><i>x</i></span></span> = <i>x</i> + 5</span>.`, fix: `Divide every term by the divisor: <span class="m">2<i>x</i> + 1</span>, and <span class="m"><i>x</i> + <span class="fr"><span>5</span><span><i>x</i></span></span></span>. You can only cancel common factors, not terms.` },
    { wrong: `Dividing <span class="m"><i>x</i><sup>3</sup> − 27</span> by <span class="m"><i>x</i> − 3</span> without placeholders, so the columns misalign.`, fix: `Write <span class="m"><i>x</i><sup>3</sup> + 0<i>x</i><sup>2</sup> + 0<i>x</i> − 27</span>. The quotient is <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> + 9</span>, remainder 0.` },
    { wrong: `Subtracting only the first term of the product: <span class="m">(5<i>x</i><sup>2</sup> + 7<i>x</i>) − (5<i>x</i><sup>2</sup> + 10<i>x</i>) = 17<i>x</i></span>.`, fix: `Change the sign of every term in the product: <span class="m">5<i>x</i><sup>2</sup> + 7<i>x</i> − 5<i>x</i><sup>2</sup> − 10<i>x</i> = −3<i>x</i></span>.` },
    { wrong: `Using <span class="m">−2</span> in synthetic division for the divisor <span class="m"><i>x</i> − 2</span>.`, fix: `For <span class="m"><i>x</i> − <i>a</i></span> use <span class="m"><i>a</i></span>. The divisor <span class="m"><i>x</i> − 2</span> uses 2; <span class="m"><i>x</i> + 2 = <i>x</i> − (−2)</span> uses −2.` }
  ],
  practice: [
    { q: `Divide <span class="m">(12<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> + 4<i>x</i><sup>2</sup>) ÷ 4<i>x</i><sup>2</sup></span>.`, a: `Divide each term: <span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> + 1</span>.` },
    { q: `Divide <span class="m">(<i>x</i><sup>2</sup> + 7<i>x</i> + 10) ÷ (<i>x</i> + 2)</span>.`, a: `<span class="m"><i>x</i>(<i>x</i> + 2) = <i>x</i><sup>2</sup> + 2<i>x</i></span>, leaving <span class="m">5<i>x</i> + 10 = 5(<i>x</i> + 2)</span>. Quotient <span class="m"><i>x</i> + 5</span>, remainder 0.` },
    { q: `Use synthetic division: <span class="m">(2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 4<i>x</i> − 5) ÷ (<i>x</i> − 2)</span>.`, a: `Use 2 with coefficients 2, −3, 4, −5: bring down 2; <span class="m">2·2 − 3 = 1</span>; <span class="m">1·2 + 4 = 6</span>; <span class="m">6·2 − 5 = 7</span>. Quotient <span class="m">2<i>x</i><sup>2</sup> + <i>x</i> + 6</span>, remainder 7: <span class="m">2<i>x</i><sup>2</sup> + <i>x</i> + 6 + <span class="fr"><span>7</span><span><i>x</i> − 2</span></span></span>. Check: <span class="m"><i>P</i>(2) = 16 − 12 + 8 − 5 = 7</span> ✓.` },
    { q: `Divide <span class="m">(4<i>x</i><sup>3</sup> − 7<i>x</i> + 5) ÷ (2<i>x</i> + 3)</span>.`, a: `Write <span class="m">4<i>x</i><sup>3</sup> + 0<i>x</i><sup>2</sup> − 7<i>x</i> + 5</span>. <span class="m">2<i>x</i><sup>2</sup>(2<i>x</i> + 3) = 4<i>x</i><sup>3</sup> + 6<i>x</i><sup>2</sup></span>, leaving <span class="m">−6<i>x</i><sup>2</sup> − 7<i>x</i></span>; <span class="m">−3<i>x</i>(2<i>x</i> + 3) = −6<i>x</i><sup>2</sup> − 9<i>x</i></span>, leaving <span class="m">2<i>x</i> + 5</span>; <span class="m">1(2<i>x</i> + 3)</span> leaves 2. Answer <span class="m">2<i>x</i><sup>2</sup> − 3<i>x</i> + 1 + <span class="fr"><span>2</span><span>2<i>x</i> + 3</span></span></span>.` }
  ],
  origin: `Paolo Ruffini described the shortcut now called synthetic division (Ruffini's rule) in the early 1800s, and William George Horner published a closely related method for evaluating polynomials in 1819.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-factor-gcf"] = {
  title: "Factoring: GCF & Grouping",
  short: "Pull out the greatest common factor; group in pairs",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Factoring · undoing the distributive property",
  hero: `<span class="m"><span class="c1"><i>a</i></span><i>b</i> + <span class="c1"><i>a</i></span><i>c</i> = <span class="c1"><i>a</i></span>(<span class="c2"><i>b</i> + <i>c</i></span>)</span>`,
  lede: `Factoring writes a polynomial as a product. The first step is always to take out the greatest common factor. For four terms, factoring by grouping takes out a common factor from each pair and then a common binomial.`,
  plain: `<p>Multiplying uses the distributive property to go from <span class="m">3<i>x</i>(2<i>x</i> + 5)</span> to <span class="m">6<i>x</i><sup>2</sup> + 15<i>x</i></span>. <b>Factoring</b> runs it backwards. You look at the terms, ask what they all have in common, and pull that out in front of parentheses. The biggest thing they share is the <b>greatest common factor</b> (GCF).</p>
<p>To find the GCF of monomials, take the GCF of the numbers and, for each variable that appears in every term, the smallest power of it. For <span class="m">12<i>x</i><sup>3</sup> − 18<i>x</i><sup>2</sup></span> that is <span class="m">6<i>x</i><sup>2</sup></span>, and what is left inside is <span class="m">2<i>x</i> − 3</span>. Always check by multiplying back out.</p>
<p>With four terms there may be no factor shared by all of them, but the terms may pair up. In <span class="m"><i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> + 2<i>x</i> + 6</span>, the first pair shares <span class="m"><i>x</i><sup>2</sup></span> and the second shares 2: <span class="m"><i>x</i><sup>2</sup>(<i>x</i> + 3) + 2(<i>x</i> + 3)</span>. Now both pieces share the binomial <span class="m">(<i>x</i> + 3)</span>, and pulling that out gives <span class="m">(<i>x</i> + 3)(<i>x</i><sup>2</sup> + 2)</span>. That is <b>factoring by grouping</b>.</p>`,
  formal: `<p>The <b>greatest common factor</b> of a set of monomials is the product of the GCF of their coefficients and each variable common to all of them, raised to the smallest exponent with which it appears. <b>Factoring out the GCF</b> is the distributive property read right to left: <span class="m"><i>ab</i> + <i>ac</i> = <i>a</i>(<i>b</i> + <i>c</i>)</span>. When the leading coefficient is negative, it is conventional to factor out the negative of the GCF.</p>
<div class="display"><b>Factoring by grouping:</b><br><i>ac</i> + <i>ad</i> + <i>bc</i> + <i>bd</i> = <i>a</i>(<i>c</i> + <i>d</i>) + <i>b</i>(<i>c</i> + <i>d</i>) = (<i>a</i> + <i>b</i>)(<i>c</i> + <i>d</i>)</div>
<p>A polynomial is <b>factored completely</b> when it is written as a product of prime polynomials (polynomials with integer coefficients that cannot be factored further, apart from constants). Grouping may require rearranging the terms so that each pair has a common factor that leaves the same binomial.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>`, name: "GCF", desc: "The greatest common factor: the largest monomial (or binomial) that divides every term." },
    { c: "c2", sym: `<i>b</i> + <i>c</i>`, name: "Remaining factor", desc: "What is left after dividing each term by the GCF. It has the same number of terms as the original." },
    { c: "c3", sym: `(<i>ac</i> + <i>ad</i>) + (<i>bc</i> + <i>bd</i>)`, name: "Groups", desc: "In grouping, the four terms split into two pairs, each factored on its own before the common binomial is pulled out." }
  ],
  steps: { title: "How to factor out a GCF and factor by grouping", items: [
    `Find the GCF of all the terms: the GCF of the coefficients times each shared variable to its lowest power.`,
    `Divide each term by the GCF and write the GCF in front of parentheses holding the quotients. A term equal to the GCF leaves 1, not 0.`,
    `If four terms remain, split them into two pairs and factor the GCF out of each pair. If the third term is negative, factor out a negative so both parentheses match.`,
    `If the two parentheses are identical, factor out that common binomial. If not, try rearranging the middle terms.`,
    `Check by multiplying the factors back out.`
  ] },
  example: {
    prompt: `A patio plan is made of four rectangular sections with areas <span class="m">6<i>x</i><sup>2</sup></span>, <span class="m">9<i>x</i></span>, <span class="m">4<i>x</i></span> and <span class="m">6</span> square feet, which together form one large rectangle. Find expressions for its length and width, and check with <span class="m"><i>x</i> = 2</span>.`,
    lines: [
      { math: `<span class="m">6<i>x</i><sup>2</sup> + 9<i>x</i> + 4<i>x</i> + 6</span>`, note: "The total area. The four terms share no common factor other than 1." },
      { math: `<span class="m c3">(6<i>x</i><sup>2</sup> + 9<i>x</i>) + (4<i>x</i> + 6)</span>`, note: "Group the terms in pairs." },
      { math: `<span class="m"><span class="c1">3<i>x</i></span>(<span class="c2">2<i>x</i> + 3</span>) + <span class="c1">2</span>(<span class="c2">2<i>x</i> + 3</span>)</span>`, note: "The GCF of the first pair is 3x; of the second, 2." },
      { math: `<span class="m">(<span class="c2">2<i>x</i> + 3</span>)(3<i>x</i> + 2)</span>`, note: "Factor out the common binomial 2x + 3." },
      { math: `<span class="m">6<i>x</i><sup>2</sup> + 4<i>x</i> + 9<i>x</i> + 6 = 6<i>x</i><sup>2</sup> + 13<i>x</i> + 6 ✓</span>`, note: "Multiply back out to check the factoring." },
      { math: `<span class="m"><i>x</i> = 2: &nbsp; 24 + 18 + 8 + 6 = 56, &nbsp; 7 × 8 = 56 ✓</span>`, note: "The numbers agree for a sample value." }
    ],
    answer: `The patio is <span class="m">(2<i>x</i> + 3)</span> ft by <span class="m">(3<i>x</i> + 2)</span> ft. For <span class="m"><i>x</i> = 2</span> that is 7 ft by 8 ft, 56 ft².`
  },
  why: `<p>Factoring turns a sum into a product, and products are easier to work with: you can see what makes them zero, cancel common factors in fractions, and read off dimensions. Taking out the GCF is the first step in every factoring problem, and forgetting it makes the later steps harder.</p>
<p>Grouping is more than a trick for four-term polynomials. It is the engine of the ac method for factoring trinomials in the next topic, and it appears whenever expressions share a repeated binomial, such as <span class="m"><i>P</i>(1 + <i>r</i>) + <i>rP</i>(1 + <i>r</i>)</span> in finance.</p>`,
  careers: [
    { role: "Actuary", use: "Factors a common growth factor such as (1 + r) out of a sum of cash flows to simplify present-value formulas." },
    { role: "Electrical engineer", use: "Factors common terms out of circuit equations, such as I(R₁ + R₂) for resistors in series, to solve for current." },
    { role: "Software engineer", use: "Applies the same factoring idea to rewrite ab + ac as a(b + c), saving a multiplication in performance-critical code." },
    { role: "Physics teacher", use: "Factors expressions like mgh + ½mv² as m(gh + ½v²) to show that mass cancels in energy problems." },
    { role: "Accountant", use: "Factors a common tax or discount rate out of several line items to compute the total adjustment once." }
  ],
  life: [
    "Working out 7 × 23 + 7 × 17 quickly as 7 × 40 = 280",
    "Figuring the total cost of several items that all get the same discount",
    "Finding the dimensions of a rectangular layout from its total area",
    "Splitting a group bill where everyone pays the same tip rate",
    "Simplifying a recipe scaling where every ingredient is multiplied by the same factor"
  ],
  fields: [
    { name: "Physics", use: "Factoring out shared quantities, such as mass in energy equations, shows which variables cancel." },
    { name: "Finance", use: "Present- and future-value sums are simplified by factoring out a common rate or growth factor." },
    { name: "Computer science", use: "Compilers apply the distributive law in reverse to reduce the number of multiplications in code." },
    { name: "Chemistry", use: "Rate expressions and equilibrium formulas are simplified by factoring out shared concentrations." }
  ],
  prereqWhy: {
    "a1-poly-mult": "Factoring is multiplication in reverse, and every factored answer is checked by multiplying it back out."
  },
  unlocksWhy: {
    "a1-factor-tri": "The ac method splits the middle term of a trinomial into two terms and then factors by grouping, after taking out any GCF."
  },
  beyond: [
    { field: "Algebra II", why: "Higher-degree polynomials are often factored by grouping before their zeros can be found." },
    { field: "Precalculus", why: "Rational functions are simplified and their holes found by factoring out common factors." },
    { field: "Calculus I", why: "Derivatives from the product and chain rules are simplified by factoring out a common power or function." },
    { field: "Finance", why: "Annuity and loan formulas come from factoring a common term out of a geometric sum." }
  ],
  mistakes: [
    { wrong: `<span class="m">15<i>a</i><sup>2</sup><i>b</i> − 10<i>ab</i><sup>2</sup> + 5<i>ab</i> = 5<i>ab</i>(3<i>a</i> − 2<i>b</i>)</span>`, fix: `The last term divided by the GCF is 1, not 0: <span class="m">5<i>ab</i>(3<i>a</i> − 2<i>b</i> + 1)</span>. The number of terms inside must match the original.` },
    { wrong: `<span class="m">12<i>x</i><sup>3</sup> − 18<i>x</i><sup>2</sup> = 2<i>x</i>(6<i>x</i><sup>2</sup> − 9<i>x</i>)</span>`, fix: `That is a factor but not the greatest. The GCF is <span class="m">6<i>x</i><sup>2</sup></span>: <span class="m">6<i>x</i><sup>2</sup>(2<i>x</i> − 3)</span>.` },
    { wrong: `Grouping <span class="m"><i>x</i><sup>3</sup> − 4<i>x</i><sup>2</sup> − 3<i>x</i> + 12</span> as <span class="m"><i>x</i><sup>2</sup>(<i>x</i> − 4) + 3(−<i>x</i> + 4)</span> and stopping.`, fix: `Factor <span class="m">−3</span> from the second pair so the binomials match: <span class="m"><i>x</i><sup>2</sup>(<i>x</i> − 4) − 3(<i>x</i> − 4) = (<i>x</i> − 4)(<i>x</i><sup>2</sup> − 3)</span>.` },
    { wrong: `Giving <span class="m"><i>x</i><sup>2</sup>(<i>x</i> + 3) + 2(<i>x</i> + 3)</span> as the final answer.`, fix: `That is still a sum. Factor out the common binomial to get a product: <span class="m">(<i>x</i> + 3)(<i>x</i><sup>2</sup> + 2)</span>.` }
  ],
  practice: [
    { q: `Factor <span class="m">12<i>x</i><sup>3</sup> − 18<i>x</i><sup>2</sup></span>.`, a: `GCF <span class="m">6<i>x</i><sup>2</sup></span>: <span class="m">6<i>x</i><sup>2</sup>(2<i>x</i> − 3)</span>.` },
    { q: `Factor <span class="m">15<i>a</i><sup>2</sup><i>b</i> − 10<i>ab</i><sup>2</sup> + 5<i>ab</i></span>.`, a: `GCF <span class="m">5<i>ab</i></span>: <span class="m">5<i>ab</i>(3<i>a</i> − 2<i>b</i> + 1)</span>.` },
    { q: `Factor <span class="m">4<i>x</i>(<i>x</i> − 3) + 7(<i>x</i> − 3)</span>.`, a: `The common factor is the binomial <span class="m"><i>x</i> − 3</span>: <span class="m">(<i>x</i> − 3)(4<i>x</i> + 7)</span>.` },
    { q: `Factor completely: <span class="m">6<i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 30<i>x</i> − 15</span>.`, a: `GCF 3 first: <span class="m">3(2<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup> − 10<i>x</i> − 5)</span>. Group: <span class="m">3[<i>x</i><sup>2</sup>(2<i>x</i> + 1) − 5(2<i>x</i> + 1)] = 3(2<i>x</i> + 1)(<i>x</i><sup>2</sup> − 5)</span>. <span class="m"><i>x</i><sup>2</sup> − 5</span> is prime over the integers.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-radical-ops"] = {
  title: "Operations with Radicals",
  short: "Add like radicals, multiply, and rationalize",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Radicals · adding, multiplying, rationalizing",
  hero: `<span class="m"><span class="c2">3</span>√<span class="c4">2</span> + <span class="c2">4</span>√<span class="c4">2</span> = <span class="c1">7√2</span> &nbsp;&nbsp;&nbsp; √<span class="c4"><i>a</i></span> · √<span class="c4"><i>b</i></span> = <span class="c1">√<span style="text-decoration:overline"><i>ab</i></span></span></span>`,
  lede: `Radicals with the same index and radicand combine like like terms. Radicals multiply by multiplying radicands. A radical in a denominator is removed by multiplying by a well-chosen form of 1.`,
  plain: `<p>Think of <span class="m">√2</span> as a unit, like <span class="m"><i>x</i></span>. Then <span class="m">3√2 + 4√2 = 7√2</span>, just as <span class="m">3<i>x</i> + 4<i>x</i> = 7<i>x</i></span>. These are <b>like radicals</b>: same index, same radicand. Unlike radicals such as <span class="m">√2 + √3</span> cannot be combined, and <span class="m">√2 + √3</span> is not <span class="m">√5</span>. Always simplify first: <span class="m">√12 + √27 = 2√3 + 3√3 = 5√3</span> only becomes addable after simplifying.</p>
<p>Multiplication is more forgiving. <span class="m">√6 · √15 = √90</span>, and <span class="m">√90 = 3√10</span>. With more than one term, multiply radicals the way you multiply polynomials, using FOIL or the special products. A radical times itself loses the root: <span class="m">√5 · √5 = 5</span>.</p>
<p>By convention, a simplified answer has no radical in the denominator. To <b>rationalize</b> <span class="m">3/√2</span>, multiply top and bottom by <span class="m">√2</span> to get <span class="m">3√2/2</span>. If the denominator is a sum like <span class="m">3 − √5</span>, multiply by its <b>conjugate</b> <span class="m">3 + √5</span>. The product <span class="m">(3 − √5)(3 + √5) = 9 − 5 = 4</span> has no radical, because the middle terms cancel.</p>`,
  formal: `<p>For real numbers <span class="m"><i>a</i>, <i>b</i> ≥ 0</span>:</p>
<div class="display"><b>Product rule:</b> √<i>a</i> · √<i>b</i> = √<span style="text-decoration:overline"><i>ab</i></span> &nbsp;&nbsp; <b>Quotient rule:</b> √<i>a</i> / √<i>b</i> = √<span style="text-decoration:overline"><i>a</i>/<i>b</i></span> &nbsp;<span class="dim">(<i>b</i> &gt; 0)</span><br><b>Like radicals:</b> <i>p</i>√<i>a</i> + <i>q</i>√<i>a</i> = (<i>p</i> + <i>q</i>)√<i>a</i><br><b>Conjugates:</b> (<i>p</i> + √<i>a</i>)(<i>p</i> − √<i>a</i>) = <i>p</i><sup>2</sup> − <i>a</i></div>
<p>The same rules hold for <span class="m"><i>n</i></span>th roots with a common index, <span class="m"><sup><i>n</i></sup>√<i>a</i> · <sup><i>n</i></sup>√<i>b</i> = <sup><i>n</i></sup>√<span style="text-decoration:overline"><i>ab</i></span></span>. A radical expression is in <b>simplified form</b> when no radicand has a perfect-square factor other than 1 (for square roots), no radicand contains a fraction, and no denominator contains a radical. There is no sum rule: <span class="m">√<span style="text-decoration:overline"><i>a</i> + <i>b</i></span> ≠ √<i>a</i> + √<i>b</i></span> in general.</p>`,
  legend: [
    { c: "c4", sym: `√<i>a</i>`, name: "Radicand", desc: "The number under the root sign. Only radicals with the same radicand (and index) can be added." },
    { c: "c2", sym: `<i>p</i>`, name: "Coefficient", desc: "The number in front of the radical. Like radicals are added by adding coefficients." },
    { c: "c1", sym: `(<i>p</i> + <i>q</i>)√<i>a</i>`, name: "Result", desc: "The simplified sum, product or rationalized quotient." }
  ],
  steps: { title: "How to add, multiply and rationalize radicals", items: [
    `Simplify every radical first by removing perfect-square factors: <span class="m">√50 = 5√2</span>.`,
    `To add or subtract, combine coefficients of like radicals only. Leave unlike radicals as separate terms.`,
    `To multiply, multiply coefficients with coefficients and radicands with radicands, then simplify. For sums, distribute every term (FOIL).`,
    `To rationalize a single-term denominator <span class="m">√<i>b</i></span>, multiply numerator and denominator by <span class="m">√<i>b</i></span>.`,
    `To rationalize a two-term denominator <span class="m"><i>p</i> + √<i>b</i></span>, multiply numerator and denominator by the conjugate <span class="m"><i>p</i> − √<i>b</i></span>.`,
    `Simplify the result and reduce any common factor of all numerator terms and the denominator.`
  ] },
  example: {
    prompt: `A right-triangle garden bed has sides <span class="m">√18</span> m, <span class="m">√32</span> m and <span class="m">√50</span> m. How much edging is needed to go around it, and what is its area?`,
    lines: [
      { math: `<span class="m">(√18)<sup>2</sup> + (√32)<sup>2</sup> = 18 + 32 = 50 = (√50)<sup>2</sup></span>`, note: "The Pythagorean theorem confirms the right angle, with √50 the hypotenuse." },
      { math: `<span class="m">√18 = <span class="c2">3</span>√<span class="c4">2</span>, &nbsp; √32 = <span class="c2">4</span>√<span class="c4">2</span>, &nbsp; √50 = <span class="c2">5</span>√<span class="c4">2</span></span>`, note: "Simplify each: 18 = 9·2, 32 = 16·2, 50 = 25·2." },
      { math: `<span class="m"><i>P</i> = 3√2 + 4√2 + 5√2 = <span class="c1">12√2</span></span>`, note: "All three are like radicals, so add the coefficients." },
      { math: `<span class="m">12√2 ≈ 12 × 1.4142 ≈ 16.97</span>`, note: "Convert to a decimal only at the end, for buying." },
      { math: `<span class="m"><i>A</i> = <span class="fr"><span>1</span><span>2</span></span> · 3√2 · 4√2 = <span class="fr"><span>1</span><span>2</span></span> · 12 · 2 = <span class="c1">12</span></span>`, note: "The legs are base and height; √2 · √2 = 2." }
    ],
    answer: `The edging is <span class="m">12√2 ≈ 16.97</span> m, so buy 17 m. The area is exactly <span class="m">12</span> m².`
  },
  why: `<p>Exact radical answers appear whenever the Pythagorean theorem or a square root enters a problem: diagonals, distances, the sides of special triangles, electrical quantities like RMS voltage. Keeping them exact until the end avoids rounding errors that pile up across several steps.</p>
<p>The conjugate trick you learn here reappears many times: rationalizing in precalculus, dividing complex numbers <span class="m">(<i>a</i> + <i>bi</i>)/(<i>c</i> + <i>di</i>)</span> in Algebra II, and evaluating limits in calculus.</p>`,
  careers: [
    { role: "Electrician", use: "Works with RMS voltage, the peak voltage divided by √2, and the √3 factor in three-phase power calculations." },
    { role: "Carpenter", use: "Computes rafter and brace lengths exactly, such as a 45° brace on an 8 ft side being 8√2 ≈ 11.31 ft." },
    { role: "Structural engineer", use: "Keeps member lengths and forces in exact radical form in truss calculations before rounding at the end." },
    { role: "Machinist", use: "Uses √2 and √3 to find diagonal distances across square and hexagonal stock when setting up cuts." },
    { role: "Physicist", use: "Rationalizes and simplifies radical expressions when normalising quantum states, such as 1/√2 coefficients." }
  ],
  life: [
    "Finding the diagonal of a square tile or a TV screen exactly",
    "Estimating how much trim goes around a triangular garden bed",
    "Understanding why an A4 sheet folded in half keeps the same shape (the ratio √2)",
    "Checking that a picture frame corner is square with a diagonal measurement",
    "Comparing distances on a grid map that involve square roots"
  ],
  fields: [
    { name: "Geometry", use: "Special right triangles give side ratios 1 : 1 : √2 and 1 : √3 : 2, combined with radical arithmetic." },
    { name: "Electrical engineering", use: "RMS values and three-phase power involve √2 and √3 multiplied and divided through formulas." },
    { name: "Physics", use: "Quantum mechanics normalises states with factors like 1/√2 and simplifies radical expressions constantly." },
    { name: "Trigonometry", use: "Exact values such as sin 45° = √2/2 are rationalized forms of 1/√2." }
  ],
  prereqWhy: {
    "a1-radicals": "Radicals must be simplified before you can tell whether they are like radicals and before a final answer is in simplest form.",
    "a1-poly-mult": "Products of radical sums use FOIL and the special products, especially the conjugate pattern (a + b)(a − b) = a² − b²."
  },
  unlocksWhy: {
    "a1-radical-eq": "Solving radical equations requires isolating a radical, squaring binomials that contain radicals, and checking answers by radical arithmetic."
  },
  beyond: [
    { field: "Algebra II", why: "Dividing complex numbers uses the same conjugate idea as rationalizing denominators." },
    { field: "Precalculus", why: "Exact trigonometric values and the quadratic formula give answers such as (1 + √5)/2 that must be simplified." },
    { field: "Calculus I", why: "Limits like (√(x + 4) − 2)/x are evaluated by multiplying by the conjugate." },
    { field: "Physics", why: "Vector magnitudes and wave amplitudes are exact radicals combined and simplified in derivations." }
  ],
  mistakes: [
    { wrong: `<span class="m">√2 + √3 = √5</span>`, fix: `There is no sum rule for roots. <span class="m">√2 + √3 ≈ 3.15</span> while <span class="m">√5 ≈ 2.24</span>. Unlike radicals stay as separate terms.` },
    { wrong: `<span class="m">(√3 + √5)<sup>2</sup> = 3 + 5 = 8</span>`, fix: `Square the binomial: <span class="m">3 + 2√15 + 5 = 8 + 2√15</span>.` },
    { wrong: `Rationalizing <span class="m"><span class="fr"><span>6</span><span>3 − √5</span></span></span> by multiplying by <span class="m">√5/√5</span>.`, fix: `That leaves a radical in the denominator. Multiply by the conjugate <span class="m">(3 + √5)/(3 + √5)</span> so the denominator becomes <span class="m">9 − 5 = 4</span>.` },
    { wrong: `Adding <span class="m">√12 + √27</span> as "unlike, cannot combine".`, fix: `Simplify first: <span class="m">2√3 + 3√3 = 5√3</span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m">5√3 + 2√3 − √3</span>.`, a: `Like radicals: <span class="m">(5 + 2 − 1)√3 = 6√3</span>.` },
    { q: `Simplify <span class="m">√12 + √75 − √27</span>.`, a: `<span class="m">2√3 + 5√3 − 3√3 = 4√3</span>.` },
    { q: `Multiply <span class="m">(2 + √5)(3 − √5)</span>, and <span class="m">√6 · √15</span>.`, a: `FOIL: <span class="m">6 − 2√5 + 3√5 − 5 = 1 + √5</span>. And <span class="m">√90 = √(9 · 10) = 3√10</span>.` },
    { q: `Rationalize the denominator: <span class="m"><span class="fr"><span>6</span><span>3 − √5</span></span></span>.`, a: `Multiply by <span class="m"><span class="fr"><span>3 + √5</span><span>3 + √5</span></span></span>: <span class="m"><span class="fr"><span>6(3 + √5)</span><span>9 − 5</span></span> = <span class="fr"><span>18 + 6√5</span><span>4</span></span> = <span class="fr"><span>9 + 3√5</span><span>2</span></span></span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-sys-ineq"] = {
  title: "Systems of Linear Inequalities",
  short: "Shade each half-plane; the overlap is the answer",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Systems · regions in the plane",
  hero: `<span class="m"><span class="c2"><i>y</i> ≤ <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub></span> &nbsp;and&nbsp; <span class="c3"><i>y</i> &gt; <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub></span> &nbsp;→&nbsp; <span class="c1">overlap</span></span>`,
  lede: `A linear inequality in two variables is true on a whole half-plane. A system of them is true where all the half-planes overlap, a region called the feasible region.`,
  plain: `<p>An equation like <span class="m"><i>y</i> = 2<i>x</i> + 1</span> is a line. The inequality <span class="m"><i>y</i> &gt; 2<i>x</i> + 1</span> is everything on one side of that line, a <b>half-plane</b>. You draw the <b>boundary line</b> first, solid if points on it count (≤ or ≥) and dashed if they do not (&lt; or &gt;). Then you pick a <b>test point</b> not on the line, often <span class="m">(0, 0)</span>. If it makes the inequality true, shade its side; if false, shade the other side.</p>
<p>With two or more inequalities, do this for each one on the same axes. The solutions of the system are the points that satisfy every inequality, so they lie in the region where all the shadings overlap. Any point there works, and a point outside fails at least one condition.</p>
<p>In real problems the region often describes every choice that fits your limits: hours you can work, items you can afford, mixes that meet two requirements. Quantities like hours or items cannot be negative, so <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> are usually part of the system. If two boundaries are parallel and the shadings point away from each other, the region is empty and the system has no solution.</p>`,
  formal: `<p>A <b>linear inequality in two variables</b> has the form <span class="m"><i>Ax</i> + <i>By</i> &lt; <i>C</i></span> (or with ≤, &gt;, ≥), with <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span> not both 0. Its solution set is a <b>half-plane</b> bounded by the line <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span>. The half-plane is <b>open</b> (boundary excluded, drawn dashed) for &lt; and &gt;, and <b>closed</b> (boundary included, drawn solid) for ≤ and ≥.</p>
<div class="display">Solution set of the system = <i>H</i><sub>1</sub> ∩ <i>H</i><sub>2</sub> ∩ ⋯ ∩ <i>H</i><sub><i>k</i></sub><br><span class="dim">each <i>H</i><sub><i>i</i></sub> the half-plane of one inequality</span></div>
<p>The intersection, called the <b>feasible region</b> in applications, may be bounded (a polygon), unbounded, or empty (∅). Points where two boundary lines meet and that satisfy every inequality are the <b>vertices</b> or corner points of the region. For a strict inequality, solving for <span class="m"><i>y</i></span> gives <span class="m"><i>y</i> &gt; <i>mx</i> + <i>b</i></span> (above the line) or <span class="m"><i>y</i> &lt; <i>mx</i> + <i>b</i></span> (below); remember that dividing by a negative <span class="m"><i>B</i></span> reverses the inequality.</p>`,
  legend: [
    { c: "c2", sym: `<i>y</i> ≤ <i>m</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub>`, name: "Inequality 1", desc: "Its half-plane. A solid boundary means points on the line are included." },
    { c: "c3", sym: `<i>y</i> &gt; <i>m</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub>`, name: "Inequality 2", desc: "Its half-plane. A dashed boundary means points on the line are excluded." },
    { c: "c1", sym: `<i>H</i><sub>1</sub> ∩ <i>H</i><sub>2</sub>`, name: "Overlap region", desc: "Points that satisfy both inequalities: the solution set of the system." }
  ],
  steps: { title: "How to graph a system of linear inequalities", items: [
    `For each inequality, graph its boundary line by replacing the inequality sign with =. Use a solid line for ≤ or ≥ and a dashed line for &lt; or &gt;.`,
    `Choose a test point not on the line, such as <span class="m">(0, 0)</span>. Substitute it: if the inequality is true, shade the side containing the test point; if false, shade the other side.`,
    `Repeat for every inequality on the same axes, including <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> if the context requires them.`,
    `The solution set is the region where all shadings overlap. If there is no overlap, the system has no solution.`,
    `Find corner points by solving pairs of boundary equations, and check a point inside the region in every inequality.`
  ] },
  example: {
    prompt: `A student works <span class="m"><i>x</i></span> hours a week at a café for $12/hour and <span class="m"><i>y</i></span> hours tutoring for $20/hour. They want to earn at least $240 a week but can work at most 15 hours in total. Describe every possible schedule and check whether 5 café hours and 10 tutoring hours works.`,
    lines: [
      { math: `<span class="m"><span class="c2">12<i>x</i> + 20<i>y</i> ≥ 240</span>, &nbsp; <span class="c3"><i>x</i> + <i>y</i> ≤ 15</span>, &nbsp; <i>x</i> ≥ 0, &nbsp; <i>y</i> ≥ 0</span>`, note: "Earnings goal, time limit, and no negative hours." },
      { math: `<span class="m c2">12<i>x</i> + 20<i>y</i> = 240: &nbsp; (20, 0), (0, 12)</span>`, note: "Solid boundary through its intercepts. Test (0, 0): 0 ≥ 240 is false, so shade away from the origin." },
      { math: `<span class="m c3"><i>x</i> + <i>y</i> = 15: &nbsp; (15, 0), (0, 15)</span>`, note: "Solid boundary. Test (0, 0): 0 ≤ 15 is true, so shade toward the origin." },
      { math: `<span class="m">12<i>x</i> + 20(15 − <i>x</i>) = 240 → −8<i>x</i> = −60 → <i>x</i> = 7.5</span>`, note: "The boundaries cross at (7.5, 7.5)." },
      { math: `<span class="m c1">vertices (0, 12), (0, 15), (7.5, 7.5)</span>`, note: "The feasible region is the triangle with these corners, edges included." },
      { math: `<span class="m">12(5) + 20(10) = 260 ≥ 240 ✓, &nbsp; 5 + 10 = 15 ≤ 15 ✓</span>`, note: "The schedule (5, 10) meets both conditions." }
    ],
    answer: `Every schedule in the triangle with corners <span class="m">(0, 12)</span>, <span class="m">(0, 15)</span> and <span class="m">(7.5, 7.5)</span> works, including its edges. The schedule of 5 café hours and 10 tutoring hours works; 10 and 5 does not, since it earns only $220.`
  },
  why: `<p>Most real decisions have several limits at once: a budget, a time cap, minimum amounts of nutrients, a weight limit. A system of inequalities turns those limits into one picture of every option that satisfies all of them. You can then choose the best point in that region, for example the cheapest diet or the most profitable production mix.</p>
<p>Choosing the best point of such a region is <b>linear programming</b>, used across logistics, manufacturing and finance. The key fact that a best choice, when one exists, can always be found at a corner point starts with the graphs you draw here.</p>`,
  careers: [
    { role: "Operations research analyst", use: "Models production limits as a system of linear inequalities and finds the most profitable feasible plan." },
    { role: "Dietitian", use: "Plans meals whose protein, calorie and sodium amounts must each stay above or below set limits." },
    { role: "Supply chain manager", use: "Sets warehouse capacity and demand constraints as inequalities to decide how much to ship from each site." },
    { role: "Farm manager", use: "Chooses acres of two crops subject to limits on land, water and labour hours." },
    { role: "Financial planner", use: "Allocates money between two investments with a minimum return and a maximum risk exposure." }
  ],
  life: [
    "Planning weekly hours at two jobs to earn enough without working too much",
    "Buying two kinds of snacks for a party within a budget and a minimum count",
    "Packing a suitcase under a weight limit with at least a certain number of outfits",
    "Balancing study and exercise time with minimums for each and a daily total",
    "Choosing a phone plan's minutes and data so the bill stays under a cap"
  ],
  fields: [
    { name: "Operations research", use: "Linear programming optimises an objective over the feasible region of a system of inequalities." },
    { name: "Economics", use: "Budget sets and production possibility regions are described by systems of inequalities." },
    { name: "Nutrition science", use: "Diet problems require several nutrient inequalities to hold at once." },
    { name: "Computer graphics", use: "A pixel is inside a triangle exactly when it satisfies three edge inequalities." }
  ],
  prereqWhy: {
    "a1-sys-graph": "You graph two boundary lines on the same axes and find where they cross, exactly as for a system of equations.",
    "a1-compound": "An AND compound inequality is an intersection of solution sets, and a system of inequalities is the same idea in two dimensions."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Linear Algebra", why: "Feasible regions in many variables are convex polytopes described by Ax ≤ b." },
    { field: "Operations Research", why: "The simplex method searches the corner points of the feasible region for the optimal solution." },
    { field: "Economics", why: "Consumer choice and production planning are constrained optimisation over regions defined by inequalities." },
    { field: "Calculus III", why: "Regions of integration in the plane are described by systems of inequalities in x and y." }
  ],
  mistakes: [
    { wrong: `Drawing <span class="m"><i>y</i> &gt; 2<i>x</i> − 1</span> with a solid boundary.`, fix: `Strict inequalities (&lt;, &gt;) exclude the boundary, so draw it dashed. Use solid lines only for ≤ and ≥.` },
    { wrong: `For <span class="m">−2<i>y</i> &gt; 4<i>x</i> − 6</span>, shading above <span class="m"><i>y</i> = −2<i>x</i> + 3</span>.`, fix: `Dividing by <span class="m">−2</span> reverses the sign: <span class="m"><i>y</i> &lt; −2<i>x</i> + 3</span>, so shade below. A test point catches this: <span class="m">(0, 0)</span> gives <span class="m">0 &gt; −6</span>, true, and the origin is below the line.` },
    { wrong: `Using a test point that lies on the boundary, such as <span class="m">(0, 0)</span> for <span class="m"><i>y</i> ≤ 3<i>x</i></span>.`, fix: `A point on the line cannot tell you which side to shade. Choose one clearly off it, such as <span class="m">(1, 0)</span>: <span class="m">0 ≤ 3</span> is true, so shade the side containing <span class="m">(1, 0)</span>.` },
    { wrong: `Leaving out <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>y</i> ≥ 0</span> in a word problem about hours or items.`, fix: `Negative hours make no sense. Include the non-negativity constraints so the region stays in the first quadrant.` }
  ],
  practice: [
    { q: `Is <span class="m">(1, 3)</span> a solution of the system <span class="m"><i>y</i> &gt; 2<i>x</i></span>, <span class="m"><i>x</i> + <i>y</i> ≤ 5</span>?`, a: `<span class="m">3 &gt; 2</span> ✓ and <span class="m">1 + 3 = 4 ≤ 5</span> ✓. Yes.` },
    { q: `Graph <span class="m"><i>y</i> ≤ −<i>x</i> + 4</span> and <span class="m"><i>y</i> &gt; <i>x</i> − 2</span>. Where do the boundaries meet, and is the origin in the solution set?`, a: `Solid line <span class="m"><i>y</i> = −<i>x</i> + 4</span>, shade below; dashed line <span class="m"><i>y</i> = <i>x</i> − 2</span>, shade above. They meet where <span class="m">−<i>x</i> + 4 = <i>x</i> − 2</span>, at <span class="m">(3, 1)</span>. Origin: <span class="m">0 ≤ 4</span> ✓, <span class="m">0 &gt; −2</span> ✓, so yes. The region is the wedge to the left of <span class="m">(3, 1)</span>.` },
    { q: `Solve the system <span class="m"><i>y</i> &gt; 2<i>x</i> + 3</span>, <span class="m"><i>y</i> &lt; 2<i>x</i> − 1</span>.`, a: `Both boundaries have slope 2, so they are parallel. The first region lies above the upper line, the second below the lower line; they never overlap. No solution: ∅.` },
    { q: `A bakery makes <span class="m"><i>x</i></span> muffins and <span class="m"><i>y</i></span> loaves a day. The oven holds at most 60 items, at least 10 must be loaves, and profit ($1.50 per muffin, $4 per loaf) must be at least $120. Write the system and test <span class="m">(30, 20)</span> and <span class="m">(40, 15)</span>.`, a: `<span class="m"><i>x</i> + <i>y</i> ≤ 60</span>, <span class="m"><i>y</i> ≥ 10</span>, <span class="m">1.5<i>x</i> + 4<i>y</i> ≥ 120</span>, <span class="m"><i>x</i> ≥ 0</span>. <span class="m">(30, 20)</span>: 50 ≤ 60, 20 ≥ 10, 45 + 80 = 125 ≥ 120, all true. <span class="m">(40, 15)</span>: 55 ≤ 60, 15 ≥ 10, 60 + 60 = 120 ≥ 120, true, on the profit boundary. Both are feasible.` }
  ],
  origin: `Leonid Kantorovich developed linear programming in 1939 to plan production in Soviet industry, and George Dantzig invented the simplex method for solving such problems in 1947. Both rest on finding the best point of a region cut out by linear inequalities.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-sys-sub"] = {
  title: "Solving Systems by Substitution",
  short: "Solve one equation for a variable and plug it in",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Systems · exact solutions by substitution",
  hero: `<span class="m"><span class="c2"><i>y</i> = <i>f</i>(<i>x</i>)</span> &nbsp;→&nbsp; <span class="c3"><i>ax</i> + <i>b</i>(<span class="c1"><i>f</i>(<i>x</i>)</span>) = <i>c</i></span> &nbsp;→&nbsp; <span class="c5">(<i>x</i>, <i>y</i>)</span></span>`,
  lede: `Substitution solves one equation for one variable, replaces that variable in the other equation, and leaves a single equation in one unknown. The answer is exact, with no reading off a graph.`,
  plain: `<p>If one equation already tells you what <span class="m"><i>y</i></span> is in terms of <span class="m"><i>x</i></span>, say <span class="m"><i>y</i> = 3<i>x</i></span>, then anywhere you see <span class="m"><i>y</i></span> in the other equation you can write <span class="m">3<i>x</i></span> instead. The other equation now has only <span class="m"><i>x</i></span> in it, and you already know how to solve that. Once you have <span class="m"><i>x</i></span>, put it back into either equation to get <span class="m"><i>y</i></span>.</p>
<p>If neither equation is solved for a variable, pick the easiest one to isolate, usually a variable with coefficient 1 or −1. Put the expression you substitute in parentheses so any number in front multiplies all of it.</p>
<p>Sometimes the variable disappears completely. If you are left with a false statement such as <span class="m">−2 = 6</span>, the lines are parallel and there is no solution. If you are left with a true statement such as <span class="m">8 = 8</span>, the equations describe the same line and there are infinitely many solutions. These match the three cases you saw when graphing.</p>`,
  formal: `<p><b>Substitution method.</b> Given a system in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>, solve one equation for one variable, say <span class="m"><i>y</i> = <i>g</i>(<i>x</i>)</span>. Replacing <span class="m"><i>y</i></span> by <span class="m"><i>g</i>(<i>x</i>)</span> in the other equation gives an equation in <span class="m"><i>x</i></span> alone whose solutions are exactly the <span class="m"><i>x</i></span>-coordinates of the system's solutions. Each such <span class="m"><i>x</i></span> gives the solution <span class="m">(<i>x</i>, <i>g</i>(<i>x</i>))</span>.</p>
<div class="display">Unique value of <i>x</i> → one solution &nbsp;<span class="dim">(independent)</span><br>False statement, e.g. −2 = 6 → no solution, ∅ &nbsp;<span class="dim">(inconsistent)</span><br>Identity, e.g. 8 = 8 → infinitely many: {(<i>x</i>, <i>y</i>) | <i>y</i> = <i>g</i>(<i>x</i>)} &nbsp;<span class="dim">(dependent)</span></div>
<p>The method works for any system in which one variable can be isolated, including nonlinear systems such as a line and a parabola, which is why it generalises further than graphing.</p>`,
  legend: [
    { c: "c2", sym: `<i>y</i> = <i>g</i>(<i>x</i>)`, name: "Equation 1", desc: "The equation solved for one variable. Its right side is the expression you substitute." },
    { c: "c3", sym: `<i>ax</i> + <i>by</i> = <i>c</i>`, name: "Equation 2", desc: "The equation that receives the substitution and becomes an equation in one variable." },
    { c: "c1", sym: `<i>g</i>(<i>x</i>)`, name: "Substituted expression", desc: "Placed in parentheses wherever y appeared in equation 2." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>)`, name: "Solution", desc: "The ordered pair found by solving for x and back-substituting for y. It is the lines' intersection." }
  ],
  steps: { title: "How to solve a system by substitution", items: [
    `Solve one of the equations for one variable. Choose a variable with coefficient 1 or −1 if you can, to avoid fractions.`,
    `Substitute that expression, in parentheses, for the variable in the <b>other</b> equation.`,
    `Solve the resulting one-variable equation. If the variable vanishes, a false statement means no solution and a true statement means infinitely many.`,
    `Back-substitute the value into the isolated equation from step 1 to find the other variable.`,
    `Write the solution as an ordered pair and check it in <b>both</b> original equations.`
  ] },
  example: {
    prompt: `A community theatre sold 200 tickets for $1,925. Adult tickets cost $12 and child tickets cost $7. How many of each were sold?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i> + <i>c</i> = 200</span>, &nbsp; <span class="c3">12<i>a</i> + 7<i>c</i> = 1,925</span></span>`, note: "a adult tickets, c child tickets: a count equation and a money equation." },
      { math: `<span class="m c1"><i>a</i> = 200 − <i>c</i></span>`, note: "Solve the count equation for a." },
      { math: `<span class="m">12(<span class="c1">200 − <i>c</i></span>) + 7<i>c</i> = 1,925</span>`, note: "Substitute into the money equation, in parentheses." },
      { math: `<span class="m">2,400 − 12<i>c</i> + 7<i>c</i> = 1,925 &nbsp;→&nbsp; −5<i>c</i> = −475 &nbsp;→&nbsp; <i>c</i> = 95</span>`, note: "Distribute, combine like terms, divide by −5." },
      { math: `<span class="m"><i>a</i> = 200 − 95 = 105</span>`, note: "Back-substitute." },
      { math: `<span class="m c5">105 + 95 = 200 ✓, &nbsp; 12(105) + 7(95) = 1,260 + 665 = 1,925 ✓</span>`, note: "Check in both original equations." }
    ],
    answer: `The theatre sold <span class="m">105</span> adult tickets and <span class="m">95</span> child tickets.`
  },
  why: `<p>Word problems with two unknowns, such as two ticket prices, two investment rates or two ingredients, naturally give two equations. Substitution turns them into one equation you already know how to solve and gives an exact answer, even when the intersection is at an awkward point like <span class="m">(<span class="fr"><span>17</span><span>7</span></span>, −<span class="fr"><span>3</span><span>7</span></span>)</span>.</p>
<p>Substitution also works when one equation is not linear, for example finding where a thrown ball's path meets a sloped hillside. In later courses it becomes a general strategy: replace a complicated piece with a simpler variable, solve, and substitute back.</p>`,
  careers: [
    { role: "Event planner", use: "Solves a count equation and a revenue equation together to find how many of each ticket type were sold." },
    { role: "Pharmacist", use: "Solves a two-equation system to find how much of two stock solutions to mix to hit a target volume and strength." },
    { role: "Accountant", use: "Splits a total investment between two accounts from the total amount and the total interest earned." },
    { role: "Chemical engineer", use: "Solves material-balance equations by substitution to find unknown flow rates in a process stream." },
    { role: "Economist", use: "Substitutes a demand equation into a supply equation to find equilibrium price and quantity." }
  ],
  life: [
    "Working out how many of two items were bought from the total count and total price",
    "Splitting a restaurant bill when two dishes' prices are unknown but combinations are known",
    "Finding two numbers from their sum and difference",
    "Deciding how to split savings between two accounts to earn a target interest",
    "Figuring out the price of coffee and a muffin from two different orders"
  ],
  fields: [
    { name: "Chemistry", use: "Mixture and dilution problems give two equations in two unknown volumes." },
    { name: "Economics", use: "Equilibrium is found by substituting one market equation into the other." },
    { name: "Physics", use: "Kinematics problems are solved by substituting a time expression from one equation into another." },
    { name: "Engineering", use: "Circuit analysis with Kirchhoff's laws often solves for one current and substitutes it into the other loop equation." }
  ],
  prereqWhy: {
    "a1-sys-graph": "The graph shows what a solution is, and the three cases (one, none, infinitely many) match what substitution produces.",
    "a1-literal": "The first step, solving an equation such as 2x + y = 7 for y, is rearranging a literal equation."
  },
  unlocksWhy: {
    "a1-sys-elim": "Elimination is the other standard method, and it still finishes by back-substituting the first value found."
  },
  beyond: [
    { field: "Algebra II", why: "Nonlinear systems, such as a line and a circle, are solved by substitution." },
    { field: "Linear Algebra", why: "Back-substitution is the last stage of Gaussian elimination for solving any linear system." },
    { field: "Calculus I", why: "u-substitution follows the same idea: replace an expression with a new variable, solve, then substitute back." },
    { field: "Economics", why: "Equilibrium in multi-market models is found by substituting one equation into the others." }
  ],
  mistakes: [
    { wrong: `Substituting <span class="m"><i>y</i> = 7 − 2<i>x</i></span> without parentheses: <span class="m">3<i>x</i> − 2 · 7 − 2<i>x</i> = 0</span>.`, fix: `Use parentheses so the coefficient multiplies the whole expression: <span class="m">3<i>x</i> − 2(7 − 2<i>x</i>) = 0</span>, which gives <span class="m">7<i>x</i> = 14</span>.` },
    { wrong: `Substituting back into the same equation you solved, getting <span class="m">7 = 7</span> and concluding "infinitely many solutions".`, fix: `Substitute into the <b>other</b> equation. Putting an equation into itself always gives an identity and tells you nothing.` },
    { wrong: `Stopping after finding <span class="m"><i>x</i> = 2</span>.`, fix: `A solution of a system is an ordered pair. Back-substitute to find <span class="m"><i>y</i></span> and give <span class="m">(<i>x</i>, <i>y</i>)</span>.` },
    { wrong: `Reading the result <span class="m">8 = 8</span> for <span class="m"><i>x</i> − 3<i>y</i> = 4</span>, <span class="m">2<i>x</i> − 6<i>y</i> = 8</span> as <span class="m"><i>x</i> = 8</span>.`, fix: `The variable vanished and the statement is true, so the equations are the same line: infinitely many solutions, <span class="m">{(<i>x</i>, <i>y</i>) | <i>x</i> − 3<i>y</i> = 4}</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>y</i> = 3<i>x</i></span>, <span class="m"><i>x</i> + <i>y</i> = 20</span>.`, a: `<span class="m"><i>x</i> + 3<i>x</i> = 20</span>, so <span class="m"><i>x</i> = 5</span> and <span class="m"><i>y</i> = 15</span>. Solution <span class="m">(5, 15)</span>.` },
    { q: `Solve <span class="m">2<i>x</i> + <i>y</i> = 7</span>, <span class="m">3<i>x</i> − 2<i>y</i> = 0</span>.`, a: `<span class="m"><i>y</i> = 7 − 2<i>x</i></span>. Then <span class="m">3<i>x</i> − 2(7 − 2<i>x</i>) = 0</span>, <span class="m">7<i>x</i> = 14</span>, <span class="m"><i>x</i> = 2</span>, <span class="m"><i>y</i> = 3</span>. Check: <span class="m">4 + 3 = 7</span>, <span class="m">6 − 6 = 0</span> ✓. Solution <span class="m">(2, 3)</span>.` },
    { q: `Solve <span class="m"><i>y</i> = 2<i>x</i> + 1</span>, <span class="m">4<i>x</i> − 2<i>y</i> = 6</span>.`, a: `<span class="m">4<i>x</i> − 2(2<i>x</i> + 1) = 6</span> gives <span class="m">−2 = 6</span>, a false statement. No solution (∅): the lines are parallel.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span>2</span></span> + <span class="fr"><span><i>y</i></span><span>3</span></span> = 4</span>, <span class="m"><i>x</i> − <i>y</i> = 3</span>.`, a: `<span class="m"><i>x</i> = <i>y</i> + 3</span>. Substitute and multiply by 6: <span class="m">3(<i>y</i> + 3) + 2<i>y</i> = 24</span>, <span class="m">5<i>y</i> = 15</span>, <span class="m"><i>y</i> = 3</span>, <span class="m"><i>x</i> = 6</span>. Check: <span class="m">3 + 1 = 4</span> ✓, <span class="m">6 − 3 = 3</span> ✓. Solution <span class="m">(6, 3)</span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-factor-tri"] = {
  title: "Factoring Trinomials",
  short: "Find two numbers that multiply to ac and add to b",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Factoring · ax² + bx + c",
  hero: `<span class="m"><i>ax</i><sup>2</sup> + <span class="c3"><i>b</i></span><i>x</i> + <i>c</i> &nbsp;:&nbsp; <span class="c1"><i>p</i> · <i>q</i></span> = <span class="c2"><i>ac</i></span>, &nbsp; <span class="c1"><i>p</i> + <i>q</i></span> = <span class="c3"><i>b</i></span></span>`,
  lede: `A trinomial factors into two binomials when you can find two integers whose product is ac and whose sum is b. Those two numbers split the middle term so the trinomial can be factored by grouping.`,
  plain: `<p>Multiply <span class="m">(<i>x</i> + 3)(<i>x</i> + 5)</span> and you get <span class="m"><i>x</i><sup>2</sup> + 8<i>x</i> + 15</span>. The 8 is <span class="m">3 + 5</span> and the 15 is <span class="m">3 × 5</span>. So to factor <span class="m"><i>x</i><sup>2</sup> + <i>bx</i> + <i>c</i></span>, look for two numbers that <b>multiply to <i>c</i></b> and <b>add to <i>b</i></b>. For <span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 24</span>, the pair is <span class="m">−6</span> and <span class="m">4</span>, so it factors as <span class="m">(<i>x</i> − 6)(<i>x</i> + 4)</span>.</p>
<p>When the leading coefficient <span class="m"><i>a</i></span> is not 1, use the <b>ac method</b>. Multiply <span class="m"><i>a</i></span> by <span class="m"><i>c</i></span>, find two numbers with that product and sum <span class="m"><i>b</i></span>, and use them to split the middle term into two terms. Now there are four terms, and you factor by grouping. It always works if the trinomial factors at all, so there is no guessing.</p>
<p>Signs help you search. If <span class="m"><i>ac</i></span> is positive, both numbers have the same sign as <span class="m"><i>b</i></span>. If <span class="m"><i>ac</i></span> is negative, the numbers have opposite signs, and the larger one in size takes the sign of <span class="m"><i>b</i></span>. If no pair works, the trinomial is <b>prime</b>. And before anything else, take out any common factor.</p>`,
  formal: `<p>Let <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> have integer coefficients with no common factor other than 1. It factors as <span class="m">(<i>rx</i> + <i>s</i>)(<i>tx</i> + <i>u</i>)</span> with integers <span class="m"><i>r</i>, <i>s</i>, <i>t</i>, <i>u</i></span> exactly when there are integers <span class="m"><i>p</i>, <i>q</i></span> with</p>
<div class="display"><i>pq</i> = <i>ac</i> &nbsp;and&nbsp; <i>p</i> + <i>q</i> = <i>b</i><br><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = <i>ax</i><sup>2</sup> + <i>px</i> + <i>qx</i> + <i>c</i> &nbsp;<span class="dim">→ factor by grouping</span><br><span class="dim">Special case a = 1:</span> <i>x</i><sup>2</sup> + <i>bx</i> + <i>c</i> = (<i>x</i> + <i>p</i>)(<i>x</i> + <i>q</i>), &nbsp; <i>pq</i> = <i>c</i>, <i>p</i> + <i>q</i> = <i>b</i></div>
<p>Equivalently, the trinomial factors over the integers exactly when its discriminant <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span> is a perfect square. A polynomial that cannot be written as a product of lower-degree polynomials with integer coefficients is <b>prime</b> (irreducible over the integers), for example <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> + 5</span>.</p>`,
  legend: [
    { c: "c3", sym: `<i>b</i>`, name: "Middle coefficient", desc: "The target sum. The two numbers you find must add to b." },
    { c: "c2", sym: `<i>ac</i>`, name: "Product target", desc: "The leading coefficient times the constant (just c when a = 1). The two numbers must multiply to this." },
    { c: "c1", sym: `<i>p</i>, <i>q</i>`, name: "Winning pair", desc: "The factor pair of ac whose sum is b. It splits bx into px + qx for grouping." }
  ],
  steps: { title: "How to factor ax² + bx + c by the ac method", items: [
    `Factor out the GCF of all three terms, including −1 if the leading coefficient is negative.`,
    `Compute <span class="m"><i>ac</i></span>. List factor pairs of <span class="m"><i>ac</i></span>, using the sign rules to decide which signs to try.`,
    `Pick the pair <span class="m"><i>p</i>, <i>q</i></span> whose sum is <span class="m"><i>b</i></span>. If none exists, the trinomial is prime.`,
    `Rewrite the middle term: <span class="m"><i>bx</i> = <i>px</i> + <i>qx</i></span>.`,
    `Factor the four terms by grouping and pull out the common binomial.`,
    `Check by multiplying the binomials back out (FOIL), and include any GCF from step 1.`
  ] },
  example: {
    prompt: `A landscape design calls for a rectangular plot of area <span class="m">6<i>x</i><sup>2</sup> + 17<i>x</i> + 12</span> square metres, where <span class="m"><i>x</i></span> is an adjustable measurement in metres. Find expressions for the length and width, and check them for <span class="m"><i>x</i> = 2</span>.`,
    lines: [
      { math: `<span class="m"><i>a</i> = 6, &nbsp; <span class="c3"><i>b</i> = 17</span>, &nbsp; <i>c</i> = 12, &nbsp; <span class="c2"><i>ac</i> = 72</span></span>`, note: "No common factor, so go straight to ac." },
      { math: `<span class="m">1·72, 2·36, 3·24, 4·18, 6·12, <span class="c1">8·9</span></span>`, note: "ac and b are positive, so both numbers are positive. Only 8 + 9 = 17." },
      { math: `<span class="m">6<i>x</i><sup>2</sup> + <span class="c1">8<i>x</i> + 9<i>x</i></span> + 12</span>`, note: "Split the middle term 17x into 8x + 9x." },
      { math: `<span class="m">2<i>x</i>(3<i>x</i> + 4) + 3(3<i>x</i> + 4)</span>`, note: "Group: the GCF of the first pair is 2x, of the second 3." },
      { math: `<span class="m">(3<i>x</i> + 4)(2<i>x</i> + 3)</span>`, note: "Factor out the common binomial." },
      { math: `<span class="m"><i>x</i> = 2: &nbsp; 24 + 34 + 12 = 70, &nbsp; 10 × 7 = 70 ✓</span>`, note: "The factored and original forms agree." }
    ],
    answer: `The plot is <span class="m">(3<i>x</i> + 4)</span> m by <span class="m">(2<i>x</i> + 3)</span> m. For <span class="m"><i>x</i> = 2</span> it is 10 m by 7 m, 70 m².`
  },
  why: `<p>Quadratic expressions describe areas, projectile heights, profit that rises and then falls, and stopping distances. Factoring them into two linear pieces shows the dimensions of an area, and in the next topics it shows exactly when a quantity equals zero: when the ball lands, or where profit breaks even.</p>
<p>Factoring trinomials is also the gateway to simplifying rational expressions, where you cancel common factors, and to recognising the special patterns like perfect-square trinomials. It is one of the most used skills in all of algebra.</p>`,
  careers: [
    { role: "Physics teacher", use: "Factors height equations such as h = −16t² + 16t + 32 = −16(t − 2)(t + 1) to show when a projectile lands." },
    { role: "Civil engineer", use: "Factors quadratic expressions for area and cross-sections when sizing channels or plots to a required area." },
    { role: "Financial analyst", use: "Factors a quadratic profit function to find the break-even production levels." },
    { role: "Computer programmer", use: "Implements symbolic algebra and graphing tools that factor polynomials to find their roots." },
    { role: "Architect", use: "Factors an area expression to find room dimensions that meet a required floor area with a fixed ratio." }
  ],
  life: [
    "Working out the dimensions of a rectangle from its area formula",
    "Seeing when a thrown ball will land from its height formula",
    "Checking a homework answer quickly by multiplying the factors back",
    "Finding a border width that gives a picture frame a set area",
    "Doing mental arithmetic like 23 × 17 by spotting (20 + 3)(20 − 3)"
  ],
  fields: [
    { name: "Physics", use: "Projectile height and many energy equations are quadratics solved by factoring." },
    { name: "Economics", use: "Quadratic cost and revenue models are factored to find break-even points." },
    { name: "Engineering", use: "Characteristic equations of simple mechanical and electrical systems are quadratics whose factors give the system's behaviour." },
    { name: "Computer science", use: "Computer algebra systems factor polynomials as a core operation." }
  ],
  prereqWhy: {
    "a1-factor-gcf": "The ac method ends by factoring four terms by grouping, and every problem starts by taking out the GCF."
  },
  unlocksWhy: {
    "a1-factor-special": "Perfect-square trinomials and differences of squares are trinomials (or binomials) with a recognisable factor pattern.",
    "a1-quad-factor": "A quadratic equation is solved by factoring the trinomial and setting each factor equal to zero."
  },
  beyond: [
    { field: "Algebra II", why: "Factoring quadratics is used to find zeros of polynomials, solve quadratic inequalities and simplify rational functions." },
    { field: "Precalculus", why: "Factored form reveals the x-intercepts and sign changes used to graph polynomial and rational functions." },
    { field: "Calculus I", why: "Limits of rational functions and critical points of cubic functions are found by factoring quadratics." },
    { field: "Differential Equations", why: "Linear equations with constant coefficients are solved by factoring the characteristic quadratic r² + br + c." }
  ],
  mistakes: [
    { wrong: `Factoring <span class="m">6<i>x</i><sup>2</sup> − 7<i>x</i> − 3</span> by finding numbers with product <span class="m">−3</span> and sum <span class="m">−7</span>.`, fix: `When <span class="m"><i>a</i> ≠ 1</span>, the product must be <span class="m"><i>ac</i> = −18</span>. The pair is <span class="m">−9</span> and <span class="m">2</span>, giving <span class="m">(2<i>x</i> − 3)(3<i>x</i> + 1)</span>.` },
    { wrong: `<span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 24 = (<i>x</i> + 6)(<i>x</i> − 4)</span>`, fix: `That product has middle term <span class="m">+2<i>x</i></span>. The larger number must take the sign of <span class="m"><i>b</i></span>: <span class="m">(<i>x</i> − 6)(<i>x</i> + 4)</span>. Always FOIL to check.` },
    { wrong: `<span class="m">4<i>x</i><sup>3</sup> − 10<i>x</i><sup>2</sup> − 6<i>x</i> = (2<i>x</i><sup>2</sup> + <i>x</i>)(2<i>x</i> − 6)</span> and stopping.`, fix: `Take out the GCF first: <span class="m">2<i>x</i>(2<i>x</i><sup>2</sup> − 5<i>x</i> − 3) = 2<i>x</i>(2<i>x</i> + 1)(<i>x</i> − 3)</span>. The first attempt still hides common factors.` },
    { wrong: `Declaring <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> + 5</span> "impossible" and forcing an answer like <span class="m">(<i>x</i> + 1)(<i>x</i> + 5)</span>.`, fix: `The only integer pairs with product 5 are 1, 5 and −1, −5, with sums 6 and −6. None sums to 3, so the trinomial is prime.` }
  ],
  practice: [
    { q: `Factor <span class="m"><i>x</i><sup>2</sup> + 9<i>x</i> + 20</span>.`, a: `Product 20, sum 9: 4 and 5. <span class="m">(<i>x</i> + 4)(<i>x</i> + 5)</span>.` },
    { q: `Factor <span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> − 24</span>.`, a: `Product −24, sum −2: −6 and 4. <span class="m">(<i>x</i> − 6)(<i>x</i> + 4)</span>.` },
    { q: `Factor <span class="m">6<i>x</i><sup>2</sup> − 7<i>x</i> − 3</span>.`, a: `<span class="m"><i>ac</i> = −18</span>, sum −7: −9 and 2. <span class="m">6<i>x</i><sup>2</sup> − 9<i>x</i> + 2<i>x</i> − 3 = 3<i>x</i>(2<i>x</i> − 3) + 1(2<i>x</i> − 3) = (2<i>x</i> − 3)(3<i>x</i> + 1)</span>.` },
    { q: `Factor completely <span class="m">4<i>x</i><sup>3</sup> − 10<i>x</i><sup>2</sup> − 6<i>x</i></span>, and decide whether <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> + 5</span> factors.`, a: `GCF <span class="m">2<i>x</i></span>: <span class="m">2<i>x</i>(2<i>x</i><sup>2</sup> − 5<i>x</i> − 3)</span>. <span class="m"><i>ac</i> = −6</span>, sum −5: −6 and 1. <span class="m">2<i>x</i><sup>2</sup> − 6<i>x</i> + <i>x</i> − 3 = (<i>x</i> − 3)(2<i>x</i> + 1)</span>, so the answer is <span class="m">2<i>x</i>(2<i>x</i> + 1)(<i>x</i> − 3)</span>. The second is prime: no integer pair has product 5 and sum 3 (its discriminant <span class="m">9 − 20 = −11</span> is not a perfect square).` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-radical-eq"] = {
  title: "Radical Equations",
  short: "Isolate the radical, square both sides, check",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Equations · the variable under a root",
  hero: `<span class="m">√<span class="c2"><i>A</i></span> = <span class="c3"><i>B</i></span> &nbsp;⟹&nbsp; <span class="c2"><i>A</i></span> = <span class="c3"><i>B</i></span><sup>2</sup> &nbsp;&nbsp;<span class="dim">then check</span></span>`,
  lede: `A radical equation has the variable inside a root. You isolate the radical, raise both sides to the power that undoes it, solve, and then check every answer, because squaring can create solutions that do not work.`,
  plain: `<p>To undo a square root, square it: <span class="m">(√<i>x</i>)<sup>2</sup> = <i>x</i></span>. So to solve <span class="m">√<span style="text-decoration:overline"><i>x</i> + 3</span> = 5</span>, square both sides to get <span class="m"><i>x</i> + 3 = 25</span>, and <span class="m"><i>x</i> = 22</span>. First, though, the radical has to be alone on one side. In <span class="m">√<span style="text-decoration:overline">2<i>x</i> − 1</span> + 4 = 7</span>, subtract 4 before squaring.</p>
<p>Squaring has a catch. It turns a false statement like <span class="m">−3 = 3</span> into a true one, <span class="m">9 = 9</span>. So squaring can add answers that do not satisfy the original equation. These are called <b>extraneous solutions</b>. The only protection is to substitute every answer back into the <b>original</b> equation and throw out any that fail.</p>
<p>Remember that <span class="m">√</span> means the principal (non-negative) square root. An equation like <span class="m">√<i>x</i> = −3</span> has no solution at all, because a square root is never negative. If you square it anyway you get <span class="m"><i>x</i> = 9</span>, and the check <span class="m">√9 = 3 ≠ −3</span> reveals it as extraneous.</p>`,
  formal: `<p>A <b>radical equation</b> is an equation in which the variable appears in a radicand. It is solved with the <b>power property</b>: if <span class="m"><i>a</i> = <i>b</i></span>, then <span class="m"><i>a</i><sup><i>n</i></sup> = <i>b</i><sup><i>n</i></sup></span>. The converse fails for even <span class="m"><i>n</i></span>, since <span class="m"><i>a</i><sup>2</sup> = <i>b</i><sup>2</sup></span> only gives <span class="m"><i>a</i> = ±<i>b</i></span>. So the solution set of the squared equation contains every solution of the original, and possibly more.</p>
<div class="display">√<span style="text-decoration:overline"><i>A</i></span> = <i>B</i> &nbsp;⟺&nbsp; <i>A</i> = <i>B</i><sup>2</sup> &nbsp;and&nbsp; <i>B</i> ≥ 0<br><sup>3</sup>√<span style="text-decoration:overline"><i>A</i></span> = <i>B</i> &nbsp;⟺&nbsp; <i>A</i> = <i>B</i><sup>3</sup> &nbsp;<span class="dim">(odd index: no extraneous roots)</span></div>
<p>A solution of the transformed equation that does not satisfy the original is an <b>extraneous solution</b> and is excluded from the solution set. When an equation contains two radicals that cannot both be isolated, square, simplify, isolate the remaining radical and square again.</p>`,
  legend: [
    { c: "c2", sym: `√<span style="text-decoration:overline"><i>x</i> + <i>a</i></span>`, name: "Left side", desc: "The isolated radical. Its graph starts at x = −a and only takes values ≥ 0." },
    { c: "c3", sym: `<i>x</i> + <i>b</i>`, name: "Right side", desc: "The other side of the equation. Where its graph meets the radical's graph is a true solution." },
    { c: "c5", sym: `<i>x</i> = <i>r</i>`, name: "Valid solution", desc: "An answer that checks in the original equation. A root of the squared equation that fails the check is extraneous, shown in red in the model." }
  ],
  steps: { title: "How to solve a radical equation", items: [
    `Isolate the radical on one side of the equation.`,
    `Raise both sides to the index of the root: square for a square root, cube for a cube root. Square the whole other side, as a binomial if it has two terms.`,
    `Solve the resulting equation. It may be linear or quadratic; a quadratic is set equal to 0 and factored.`,
    `If a radical remains, isolate it and repeat.`,
    `Check every answer in the <b>original</b> equation. Discard any that fail (extraneous solutions). If none work, the equation has no solution.`
  ] },
  example: {
    prompt: `Accident investigators estimate a car's speed from its skid marks with <span class="m"><i>S</i> = √<span style="text-decoration:overline">30<i>df</i></span></span>, where <span class="m"><i>S</i></span> is speed in mph, <span class="m"><i>d</i></span> the skid length in feet and <span class="m"><i>f</i></span> the road's drag factor. On a road with <span class="m"><i>f</i> = 0.75</span>, how long a skid does 45 mph produce? A driver who left 120 ft of skid marks says they were doing 45. Is that believable?`,
    lines: [
      { math: `<span class="m"><span class="c3">45</span> = √<span style="text-decoration:overline" class="c2">30 · <i>d</i> · 0.75</span> = √<span style="text-decoration:overline" class="c2">22.5<i>d</i></span></span>`, note: "Substitute S = 45 and f = 0.75. The radical is already isolated." },
      { math: `<span class="m">45<sup>2</sup> = 22.5<i>d</i> &nbsp;→&nbsp; 2,025 = 22.5<i>d</i></span>`, note: "Square both sides." },
      { math: `<span class="m c5"><i>d</i> = 90</span>`, note: "Divide by 22.5." },
      { math: `<span class="m">√<span style="text-decoration:overline">22.5 · 90</span> = √2,025 = 45 ✓</span>`, note: "Check in the original formula." },
      { math: `<span class="m"><i>S</i> = √<span style="text-decoration:overline">22.5 · 120</span> = √2,700 = 30√3 ≈ 52</span>`, note: "Now evaluate the formula for the measured 120 ft skid." }
    ],
    answer: `At 45 mph the car would skid about <span class="m">90</span> ft. A 120 ft skid corresponds to about <span class="m">52</span> mph, so the driver's claim of 45 mph is not believable.`
  },
  why: `<p>Square roots appear in formulas for speed from skid marks, the period of a pendulum, the distance to the horizon, and the side of a square from its area. Whenever you know the output of such a formula and want the input, you are solving a radical equation.</p>
<p>The habit of checking for extraneous solutions matters well beyond this topic. Squaring, multiplying by an expression containing the variable, and taking logarithms can all add or lose solutions, and a careful solver always checks answers in the original equation.</p>`,
  careers: [
    { role: "Accident reconstruction specialist", use: "Solves S = √(30df) for speed or skid distance to test drivers' statements against physical evidence." },
    { role: "Physicist", use: "Solves the pendulum formula T = 2π√(L/g) for the length L that gives a required period." },
    { role: "Electrical engineer", use: "Solves formulas like f = 1/(2π√(LC)) for the capacitance that tunes a circuit to a target frequency." },
    { role: "Ship's navigator", use: "Uses the horizon-distance formula, about 1.17√h nautical miles for height h in feet, to find the height needed to sight a light." },
    { role: "Structural engineer", use: "Solves for a column length or load in buckling and deflection formulas that contain square roots." }
  ],
  life: [
    "Working out how high you must stand to see a certain distance to the horizon",
    "Finding the side of a square garden from the area you want",
    "Estimating how long a playground swing's chain is from how long one swing takes",
    "Understanding how police estimate speed after a crash",
    "Checking whether a number you found by squaring really solves the problem"
  ],
  fields: [
    { name: "Physics", use: "Pendulum periods, escape velocity and wave speeds are square-root formulas solved for their inputs." },
    { name: "Forensic science", use: "Skid-mark speed estimates rest on solving S = √(30df) for either unknown." },
    { name: "Electrical engineering", use: "Resonant frequency formulas contain √(LC) and are solved for component values." },
    { name: "Geometry", use: "Distances from the Pythagorean theorem lead to equations with the unknown under a root." }
  ],
  prereqWhy: {
    "a1-radical-ops": "Squaring a side such as 3 + √x, and checking answers that involve radicals, uses radical multiplication and simplification.",
    "a1-multi-step": "After squaring, what remains is usually a multi-step linear equation to solve."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Equations with rational exponents and with two radicals are solved by the same raise-and-check method." },
    { field: "Precalculus", why: "Finding domains and inverses of radical functions requires solving radical equations and inequalities." },
    { field: "Physics", why: "Solving kinematics and energy formulas for a variable under a square root is routine." },
    { field: "Calculus I", why: "Optimisation problems with distance functions often lead to equations with radicals that must be checked for extraneous roots." }
  ],
  mistakes: [
    { wrong: `Squaring before isolating: <span class="m">√<i>x</i> + 2 = 5</span> becomes <span class="m"><i>x</i> + 4 = 25</span>.`, fix: `Isolate first: <span class="m">√<i>x</i> = 3</span>, then <span class="m"><i>x</i> = 9</span>. Note that <span class="m">(√<i>x</i> + 2)<sup>2</sup> = <i>x</i> + 4√<i>x</i> + 4</span>, not <span class="m"><i>x</i> + 4</span>.` },
    { wrong: `Squaring the right side of <span class="m">√<span style="text-decoration:overline"><i>x</i> + 7</span> = <i>x</i> + 1</span> as <span class="m"><i>x</i><sup>2</sup> + 1</span>.`, fix: `Square the binomial: <span class="m">(<i>x</i> + 1)<sup>2</sup> = <i>x</i><sup>2</sup> + 2<i>x</i> + 1</span>.` },
    { wrong: `Keeping both roots of the squared equation without checking.`, fix: `Substitute each into the original. For <span class="m">√<span style="text-decoration:overline"><i>x</i> + 7</span> = <i>x</i> + 1</span>, <span class="m"><i>x</i> = −3</span> gives <span class="m">2 = −2</span>, so it is extraneous.` },
    { wrong: `Solving <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> + 8 = 5</span> and reporting <span class="m"><i>x</i> = 12</span>.`, fix: `Isolating gives <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> = −3</span>. A principal square root is never negative, so there is no solution. The check <span class="m">√9 + 8 = 11 ≠ 5</span> confirms it.` }
  ],
  practice: [
    { q: `Solve <span class="m">√<span style="text-decoration:overline"><i>x</i> + 3</span> = 5</span>.`, a: `Square: <span class="m"><i>x</i> + 3 = 25</span>, <span class="m"><i>x</i> = 22</span>. Check: <span class="m">√25 = 5</span> ✓.` },
    { q: `Solve <span class="m">√<span style="text-decoration:overline">2<i>x</i> − 1</span> + 4 = 7</span>.`, a: `Isolate: <span class="m">√<span style="text-decoration:overline">2<i>x</i> − 1</span> = 3</span>. Square: <span class="m">2<i>x</i> − 1 = 9</span>, <span class="m"><i>x</i> = 5</span>. Check: <span class="m">√9 + 4 = 7</span> ✓.` },
    { q: `Solve <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> + 8 = 5</span>.`, a: `Isolate: <span class="m">√<span style="text-decoration:overline"><i>x</i> − 3</span> = −3</span>. A principal square root cannot be negative, so there is no solution (∅). Squaring would give <span class="m"><i>x</i> = 12</span>, which fails the check.` },
    { q: `Solve <span class="m">√<span style="text-decoration:overline"><i>x</i> + 7</span> = <i>x</i> + 1</span>.`, a: `Square: <span class="m"><i>x</i> + 7 = <i>x</i><sup>2</sup> + 2<i>x</i> + 1</span>, so <span class="m"><i>x</i><sup>2</sup> + <i>x</i> − 6 = 0</span>, <span class="m">(<i>x</i> + 3)(<i>x</i> − 2) = 0</span>, <span class="m"><i>x</i> = −3</span> or <span class="m"><i>x</i> = 2</span>. Check <span class="m">2</span>: <span class="m">√9 = 3 = 2 + 1</span> ✓. Check <span class="m">−3</span>: <span class="m">√4 = 2</span> but <span class="m">−3 + 1 = −2</span>, extraneous. Solution set <span class="m">{2}</span>.` }
  ]
};
