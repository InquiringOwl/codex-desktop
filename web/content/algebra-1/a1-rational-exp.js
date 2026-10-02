window.ARITH = window.ARITH || {};

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
    "a2-radical-func": "A radical function <span class=\"m\"><sup><i>n</i></sup>√<i>x</i></span> is the same as <span class=\"m\"><i>x</i><sup>1/<i>n</i></sup></span>, so rational exponents set up its graph and domain.",
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
