window.ARITH = window.ARITH || {};

ARITH["a1-radicals"] = {
  title: "Simplifying Square Roots & Radicals",
  short: "Pull out the largest perfect-square factor",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Radicals · simplified radical form",
  hero: `<span class="m">√<span style="text-decoration:overline">72</span> = √<span style="text-decoration:overline"><span class="c1">36</span> · <span class="c3">2</span></span> = <span class="c2">6√2</span></span>`,
  lede: `A square root is simplified when no perfect-square factor is left under the radical sign. Split off the largest perfect square, take its root, and leave the rest inside.`,
  plain: `<p>The <b>principal square root</b> <span class="m">√<i>a</i></span> is the nonnegative number whose square is <span class="m"><i>a</i></span>. So <span class="m">√49 = 7</span>, even though <span class="m">(−7)<sup>2</sup></span> is also 49. Most square roots, like <span class="m">√72</span>, are irrational, so you cannot write them exactly as decimals. You can still write them in a cleaner exact form.</p>
<p>The trick is that a square root of a product is the product of the square roots. Since <span class="m">72 = 36 × 2</span> and 36 is a perfect square, <span class="m">√72 = √36 × √2 = 6√2</span>. The number under the sign, called the <b>radicand</b>, is now as small as it can be.</p>
<p>Use the <b>largest</b> perfect-square factor, or you will have to simplify again. Variables work the same way: <span class="m"><i>x</i><sup>4</sup> = (<i>x</i><sup>2</sup>)<sup>2</sup></span> is a perfect square, so <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>4</sup></span> = <i>x</i><sup>2</sup></span>. The one catch is that <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span></span> is <span class="m">|<i>x</i>|</span>, not <span class="m"><i>x</i></span>, because a principal root cannot be negative.</p>`,
  formal: `<p>For <span class="m"><i>a</i> ≥ 0</span>, the <b>principal square root</b> <span class="m">√<i>a</i></span> is the unique <span class="m"><i>r</i> ≥ 0</span> with <span class="m"><i>r</i><sup>2</sup> = <i>a</i></span>; in the real numbers, <span class="m">√<i>a</i></span> is undefined for <span class="m"><i>a</i> &lt; 0</span>. For every real <span class="m"><i>x</i></span>, <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span> = |<i>x</i>|</span>. The simplifying rules are:</p>
<div class="display"><b>Product property:</b> √<span style="text-decoration:overline"><i>ab</i></span> = √<i>a</i> · √<i>b</i> &nbsp;<span class="dim">(<i>a</i>, <i>b</i> ≥ 0)</span><br><b>Quotient property:</b> √<span style="text-decoration:overline"><i>a</i>/<i>b</i></span> = √<i>a</i> / √<i>b</i> &nbsp;<span class="dim">(<i>a</i> ≥ 0, <i>b</i> &gt; 0)</span></div>
<p>A square root is in <b>simplified radical form</b> when the radicand has no perfect-square factor other than 1, contains no fraction, and no radical appears in a denominator. The same ideas apply to cube roots, where <span class="m">∛<span style="text-decoration:overline"><i>a</i><sup>3</sup></span> = <i>a</i></span> for every real <span class="m"><i>a</i></span> and <span class="m">∛<span style="text-decoration:overline">54</span> = ∛<span style="text-decoration:overline">27 · 2</span> = 3∛2</span>. Note that <span class="m">√<span style="text-decoration:overline"><i>a</i> + <i>b</i></span> ≠ √<i>a</i> + √<i>b</i></span> in general.</p>`,
  legend: [
    { c: "c1", sym: `36`, name: "Perfect-square factor", desc: "The largest factor of the radicand that is a perfect square. Its root comes out of the radical." },
    { c: "c3", sym: `2`, name: "Leftover radicand", desc: "What remains under the radical. It has no perfect-square factor other than 1." },
    { c: "c2", sym: `6√2`, name: "Simplified result", desc: "The root of the perfect square times the root of the leftover radicand, equal in value to the original." }
  ],
  steps: { title: "How to simplify a square root", items: [
    `Factor the radicand, looking for the <span class="c1">largest perfect-square factor</span>: 4, 9, 16, 25, 36, 49, 64, 81, 100, and even powers of variables.`,
    `If it is hard to spot, write the prime factorization and pair up equal factors. Each pair comes out as one factor.`,
    `Use the product property to split the root: <span class="m">√<span style="text-decoration:overline"><i>a</i><sup>2</sup><i>b</i></span> = <i>a</i>√<i>b</i></span> for <span class="m"><i>a</i> ≥ 0</span>.`,
    `For a fraction, use the quotient property and simplify top and bottom separately.`,
    `If a variable could be negative and an even power becomes an odd power outside, write it with absolute value bars.`,
    `Check that the <span class="c3">leftover radicand</span> has no perfect-square factor left, and check by squaring the <span class="c2">result</span>.`
  ] },
  example: {
    prompt: `A rectangular garden is 6 m wide and 12 m long. A straight path runs corner to corner. Find its exact length in simplified radical form and as a decimal.`,
    lines: [
      { math: `<span class="m"><i>d</i><sup>2</sup> = 6<sup>2</sup> + 12<sup>2</sup> = 36 + 144 = 180</span>`, note: "The diagonal is the hypotenuse of a right triangle with legs 6 and 12." },
      { math: `<span class="m"><i>d</i> = √180</span>`, note: "Length is positive, so take the principal root." },
      { math: `<span class="m">√<span style="text-decoration:overline"><span class="c1">36</span> · <span class="c3">5</span></span> = √36 · √5</span>`, note: "36 is the largest perfect square that divides 180." },
      { math: `<span class="m"><i>d</i> = <span class="c2">6√5</span></span>`, note: "√36 = 6, and 5 has no perfect-square factor." },
      { math: `<span class="m">6√5 ≈ 6 × 2.2361 ≈ 13.42</span>`, note: "Decimal approximation." },
      { math: `<span class="m">(6√5)<sup>2</sup> = 36 × 5 = 180 ✓</span>`, note: "Check by squaring." }
    ],
    answer: `The path is exactly <span class="m">6√5</span> m, about <span class="m">13.42</span> m long.`
  },
  why: `<p>Square roots come up whenever you undo a square: lengths from the Pythagorean theorem, the side of a square from its area, a standard deviation from a variance, a speed from kinetic energy. Simplified radical form keeps the answer exact, which matters when it is used again in a later step, and it makes like radicals easy to recognise.</p>
<p>The product and quotient properties are the basis for adding, multiplying and rationalizing radicals, for solving quadratics with the square root property and the quadratic formula, and for rewriting roots as rational exponents.</p>`,
  careers: [
    { role: "Carpenter", use: "Computes rafter and diagonal brace lengths as square roots, such as a 12 by 16 ft rectangle having a √400 = 20 ft diagonal." },
    { role: "Electrical engineer", use: "Uses the fact that an AC sine wave's RMS voltage is its peak voltage divided by √2." },
    { role: "Statistician", use: "Takes square roots of variances to get standard deviations, and divides by √n to get a standard error." },
    { role: "Architect", use: "Keeps diagonal and hypotenuse lengths in exact radical form, such as 45-45-90 triangles with hypotenuse s√2." },
    { role: "Physicist", use: "Solves for speed from kinetic energy, v = √(2E/m), and simplifies the radical before substituting values." }
  ],
  life: [
    "Finding the diagonal of a TV screen or a room",
    "Checking whether a ladder is long enough to reach a window",
    "Finding the side length of a square patio from its area",
    "Working out a straight-line distance on a city grid",
    "Understanding why A-series paper sheets have a length-to-width ratio of √2"
  ],
  fields: [
    { name: "Geometry", use: "Distances, diagonals and special right triangles give answers in radical form such as s√2 and s√3/2." },
    { name: "Physics", use: "Pendulum periods, orbital speeds and RMS values involve square roots of expressions." },
    { name: "Statistics", use: "Standard deviation and standard error are square roots." }
  ],
  prereqWhy: {
    "a1-exponents": "Recognising perfect squares among variable factors relies on exponent rules such as x⁶ = (x³)².",
    "roots": "You need to know perfect squares and what a square root means before simplifying one."
  },
  unlocksWhy: {
    "a1-rational-exp": "Radicals are rewritten as fractional powers, √x = x^(1/2), and simplified with exponent rules.",
    "a1-radical-ops": "Adding, multiplying and rationalizing radicals all start by writing each radical in simplified form.",
    "a1-quad-sqrt": "Solving x² = k gives ±√k, and the answer is written in simplified radical form.",
    "g-segments": "Distances between grid points are square roots, written in simplified form such as √45 = 3√5.",
    "g-special-right": "The side ratios 1 : 1 : √2 and 1 : √3 : 2 are simplified radicals, and answers are rationalized and simplified the same way."
  },
  beyond: [
    { field: "Algebra II", why: "Complex numbers start from √−1 = i, and radical equations and functions extend these rules." },
    { field: "Precalculus", why: "Exact trigonometric values such as sin 60° = √3/2 are written in simplified radical form." },
    { field: "Statistics", why: "Standard deviations and standard errors are square roots." },
    { field: "Physics", why: "Many formulas, such as the period of a pendulum T = 2π√(L/g), contain square roots." }
  ],
  mistakes: [
    { wrong: `Splitting a sum: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = √9 + √16 = 7</span>.`, fix: `The product property does not apply to sums. Add first: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = √25 = 5</span>.` },
    { wrong: `Using a factor that is not the largest: <span class="m">√72 = √4 · √18 = 2√18</span>, and stopping.`, fix: `18 still has the factor 9. Use 36 directly: <span class="m">√72 = 6√2</span>. (Continuing also works: <span class="m">2√18 = 2 · 3√2 = 6√2</span>.)` },
    { wrong: `Writing <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span> = <i>x</i></span> for every real <span class="m"><i>x</i></span>.`, fix: `If <span class="m"><i>x</i> = −3</span>, <span class="m">√<span style="text-decoration:overline">(−3)<sup>2</sup></span> = √9 = 3</span>, not −3. In general <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span> = |<i>x</i>|</span>; it equals <span class="m"><i>x</i></span> only when <span class="m"><i>x</i> ≥ 0</span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m">√48</span>.`, a: `<span class="m">48 = 16 × 3</span>, so <span class="m">√48 = 4√3</span>.` },
    { q: `Simplify <span class="m">√<span style="text-decoration:overline"><span class="fr"><span>18</span><span>49</span></span></span></span>.`, a: `<span class="m"><span class="fr"><span>√18</span><span>√49</span></span> = <span class="fr"><span>3√2</span><span>7</span></span></span>, since <span class="m">18 = 9 × 2</span>.` },
    { q: `Simplify <span class="m">√<span style="text-decoration:overline">50<i>x</i><sup>3</sup><i>y</i><sup>4</sup></span></span>, assuming <span class="m"><i>x</i> ≥ 0</span>.`, a: `<span class="m">50<i>x</i><sup>3</sup><i>y</i><sup>4</sup> = (25<i>x</i><sup>2</sup><i>y</i><sup>4</sup>)(2<i>x</i>)</span>, so the root is <span class="m">5<i>xy</i><sup>2</sup>√<span style="text-decoration:overline">2<i>x</i></span></span>. No bars are needed on <span class="m"><i>y</i><sup>2</sup></span> because it is never negative.` },
    { q: `Simplify <span class="m">√<span style="text-decoration:overline">12<i>a</i><sup>2</sup></span></span> where <span class="m"><i>a</i></span> can be any real number.`, a: `<span class="m">√4 · √<span style="text-decoration:overline"><i>a</i><sup>2</sup></span> · √3 = 2|<i>a</i>|√3</span>. The absolute value is needed: for <span class="m"><i>a</i> = −1</span> the root is <span class="m">√12 = 2√3</span>, which is positive.` }
  ],
  origin: `The radical sign √ first appeared in print in Christoph Rudolff's German algebra book <i>Die Coss</i> (1525). René Descartes added the bar over the radicand, the vinculum, in <i>La Géométrie</i> (1637), which is why the symbol now extends over the whole expression.`
};
