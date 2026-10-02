window.ARITH = window.ARITH || {};

ARITH["a2-synthetic"] = {
  title: "Synthetic Division & the Remainder Theorem",
  short: "Divide by x − r with coefficients only; the remainder is P(r)",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Polynomial functions · synthetic division",
  hero: `<span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> + <span class="c1">2</span>)(<span class="c5">2<i>x</i><sup>2</sup> − <i>x</i> − 2</span>) + <span class="c3">11</span> &nbsp;⇒&nbsp; <i>P</i>(<span class="c1">−2</span>) = <span class="c3">11</span></span>`,
  lede: `Synthetic division divides a polynomial by <span class="m"><i>x</i> − <span class="c1"><i>r</i></span></span> using only its coefficients: bring down, multiply by <span class="m c1"><i>r</i></span>, add, repeat. The last number is the <span class="c3">remainder</span>, and the Remainder Theorem says it equals <span class="m"><i>P</i>(<span class="c1"><i>r</i></span>)</span>.`,
  plain: `<p>Long division by <span class="m"><i>x</i> − <i>r</i></span> repeats one move: the next quotient term times <span class="m"><i>x</i> − <i>r</i></span>, subtracted from what is left. The powers of <span class="m"><i>x</i></span> only keep the columns lined up. If you write the coefficients in columns, the powers can go.</p>
<p>That is <b>synthetic division</b>. Write <span class="m c1"><i>r</i></span> in a box and the coefficients of the dividend in a row, with a <span class="m">0</span> for every missing power. Bring the first coefficient down. Multiply it by <span class="m c1"><i>r</i></span>, write the product in the <span class="c2">carried row</span> under the next coefficient, and add. Repeat to the end. The bottom row holds the <span class="c5">quotient</span> coefficients, one degree lower than the dividend, followed by the <span class="c3">remainder</span>.</p>
<p>The sign is the one thing to watch. Long division subtracts <span class="m">−<i>r</i></span> times each quotient coefficient. Synthetic division adds <span class="m"><i>r</i></span> times it instead, which is the same thing. So for <span class="m"><i>x</i> + 2</span> you use <span class="m c1"><i>r</i> = −2</span>.</p>
<p>The bottom row also does something else. Bring down, multiply by <span class="m c1"><i>r</i></span>, add: that is exactly how you evaluate <span class="m"><i>P</i>(<i>r</i>)</span> from the inside out. So the remainder is the value of the polynomial at <span class="m c1"><i>r</i></span>, found with fewer multiplications than substituting.</p>`,
  formal: `<p><b>Division algorithm by a linear factor.</b> For any polynomial <span class="m"><i>P</i></span> of degree <span class="m"><i>n</i> ≥ 1</span> and any number <span class="m c1"><i>r</i></span> there is a unique polynomial <span class="m c5"><i>Q</i></span> of degree <span class="m"><i>n</i> − 1</span> and a constant <span class="m c3"><i>R</i></span> with</p>
<div class="display"><i>P</i>(<i>x</i>) = (<i>x</i> − <span class="c1"><i>r</i></span>) <span class="c5"><i>Q</i>(<i>x</i>)</span> + <span class="c3"><i>R</i></span>.</div>
<p><b>Remainder Theorem.</b> Substituting <span class="m"><i>x</i> = <span class="c1"><i>r</i></span></span> makes the first term zero, so <span class="m"><span class="c3"><i>R</i></span> = <i>P</i>(<span class="c1"><i>r</i></span>)</span>. For <span class="m"><i>P</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 4<i>x</i> + 7</span> and <span class="m"><span class="c1"><i>r</i></span> = −2</span>: the bottom row is <span class="m"><span class="c5">2, −1, −2</span> | <span class="c3">11</span></span>, and directly <span class="m"><i>P</i>(−2) = −16 + 12 + 8 + 7 = 11</span>.</p>
<p>If <span class="m"><i>P</i>(<i>x</i>) = <i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup> + ⋯ + <i>a</i><sub>0</sub></span>, the bottom row is <span class="m"><i>b</i><sub><i>n</i>−1</sub> = <i>a</i><sub><i>n</i></sub></span> and <span class="m"><i>b</i><sub><i>k</i>−1</sub> = <i>a</i><sub><i>k</i></sub> + <span class="c1"><i>r</i></span><i>b</i><sub><i>k</i></sub></span>, ending with <span class="m c3"><i>R</i> = <i>a</i><sub>0</sub> + <i>r b</i><sub>0</sub></span>. This is <b>Horner's method</b>: <span class="m"><i>P</i>(<i>r</i>) = (⋯((<i>a</i><sub><i>n</i></sub><i>r</i> + <i>a</i><sub><i>n</i>−1</sub>)<i>r</i> + <i>a</i><sub><i>n</i>−2</sub>)<i>r</i> + ⋯)<i>r</i> + <i>a</i><sub>0</sub></span>, which needs only <span class="m"><i>n</i></span> multiplications. To divide by <span class="m"><i>ax</i> − <i>b</i></span>, use <span class="m"><span class="c1"><i>r</i></span> = <i>b</i>/<i>a</i></span> and then divide the quotient by <span class="m"><i>a</i></span>; the remainder stays the same.</p>`,
  legend: [
    { c: "c1", sym: `<i>r</i>`, name: "Divisor number", desc: "The number in the box. The divisor x − r uses r; x + 2 uses −2." },
    { c: "c2", sym: `× <i>r</i>`, name: "Carried row", desc: "Each bottom entry times r, written under the next coefficient and added to it." },
    { c: "c5", sym: `<i>Q</i>(<i>x</i>)`, name: "Quotient", desc: "All bottom entries but the last, read as coefficients one degree lower than P." },
    { c: "c3", sym: `<i>R</i> = <i>P</i>(<i>r</i>)`, name: "Remainder", desc: "The last bottom entry. By the Remainder Theorem it is the value of P at r." }
  ],
  steps: { title: "How to divide P(x) by x − r synthetically", items: [
    `Write the divisor as <span class="m"><i>x</i> − <i>r</i></span> and put <span class="m c1"><i>r</i></span> in the box. For <span class="m"><i>x</i> + 3</span>, <span class="m"><i>r</i> = −3</span>; for <span class="m">2<i>x</i> − 1</span>, use <span class="m"><i>r</i> = <span class="fr"><span>1</span><span>2</span></span></span>.`,
    `List the coefficients of <span class="m"><i>P</i></span> in descending powers, with <span class="m">0</span> for every missing power.`,
    `Bring the first coefficient straight down.`,
    `Multiply the last bottom entry by <span class="m c1"><i>r</i></span>, write it in the <span class="c2">carried row</span> under the next coefficient, and add the column. Repeat to the last column.`,
    `Read the answer: the last entry is the <span class="c3">remainder</span> <span class="m"><i>R</i> = <i>P</i>(<i>r</i>)</span>; the others are the <span class="c5">quotient</span>, starting one degree below <span class="m"><i>P</i></span>.`,
    `If the divisor was <span class="m"><i>ax</i> − <i>b</i></span>, divide the quotient coefficients by <span class="m"><i>a</i></span>. Check with <span class="m"><i>P</i>(<i>x</i>) = (divisor)(quotient) + <i>R</i></span>.`
  ] },
  example: {
    prompt: `Divide <span class="m"><i>P</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 3<i>x</i><sup>3</sup> + 5<i>x</i> − 6</span> by <span class="m"><i>x</i> − 2</span>, and use the result to state <span class="m"><i>P</i>(2)</span>.`,
    lines: [
      { math: `<span class="m"><span class="c1">2</span> | 1 &nbsp; −3 &nbsp; 0 &nbsp; 5 &nbsp; −6</span>`, note: "r = 2. The x² term is missing, so its coefficient 0 holds its column." },
      { math: `<span class="m">bring down 1; &nbsp; <span class="c2">1 · 2 = 2</span>, &nbsp; −3 + 2 = −1</span>`, note: "The first coefficient comes straight down, then multiply by r and add." },
      { math: `<span class="m"><span class="c2">−1 · 2 = −2</span>, &nbsp; 0 + (−2) = −2</span>`, note: "The placeholder column gets a value of its own." },
      { math: `<span class="m"><span class="c2">−2 · 2 = −4</span>, &nbsp; 5 + (−4) = 1</span>`, note: "Same move: multiply the newest bottom entry by 2, add to the next coefficient." },
      { math: `<span class="m"><span class="c2">1 · 2 = 2</span>, &nbsp; −6 + 2 = <span class="c3">−4</span></span>`, note: "The last column is the remainder." },
      { math: `<span class="m">bottom row <span class="c5">1, −1, −2, 1</span> | <span class="c3">−4</span> &nbsp;⇒&nbsp; <span class="c5"><i>Q</i>(<i>x</i>) = <i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> − 2<i>x</i> + 1</span></span>`, note: "Dividing a degree-4 polynomial by a linear one leaves degree 3." },
      { math: `<span class="m"><i>P</i>(2) = 16 − 24 + 10 − 6 = <span class="c3">−4</span> ✓</span>`, note: "Direct substitution agrees with the remainder, as the Remainder Theorem promises." }
    ],
    answer: `<span class="m"><i>x</i><sup>4</sup> − 3<i>x</i><sup>3</sup> + 5<i>x</i> − 6 = (<i>x</i> − 2)(<span class="c5"><i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> − 2<i>x</i> + 1</span>) <span class="c3">− 4</span></span>, so <span class="m"><i>P</i>(2) = <span class="c3">−4</span></span>.`
  },
  why: `<p>Dividing by <span class="m"><i>x</i> − <i>r</i></span> is the move behind factoring a cubic or quartic, finding the rest of the zeros once one is known, and sketching a polynomial from its factors. Synthetic division does it in a few lines of arithmetic with no powers to copy, so it is the standard tool for the next topics.</p>
<p>The Remainder Theorem turns division into evaluation and back. Computers use the same bring-down, multiply, add loop (Horner's method) to evaluate polynomials: it is faster than computing each power and adds less rounding error, which is why calculators and graphics code use it.</p>`,
  careers: [
    { role: "Numerical analyst", use: "Evaluates polynomial approximations with Horner's method because it needs the fewest multiplications and limits rounding error." },
    { role: "Math library developer", use: "Writes the routines behind sin, exp and log as polynomial approximations evaluated by the bring-down, multiply, add loop." },
    { role: "Embedded firmware engineer", use: "Converts raw sensor readings with calibration polynomials evaluated in Horner form on small microcontrollers." },
    { role: "Computer graphics programmer", use: "Evaluates the polynomials of Bezier curves and easing functions many times per frame with nested multiplication." },
    { role: "Control systems engineer", use: "Divides a characteristic polynomial by s − r once a pole r is known, leaving a lower-degree factor to analyse." },
    { role: "Mathematics teacher", use: "Uses synthetic division to check candidate zeros quickly before students factor higher-degree polynomials." }
  ],
  life: [
    "Checking a value of a polynomial formula without a calculator",
    "Finding the remaining dimension of a box when its volume expression and one side are known",
    "Seeing why a calculator returns polynomial values so quickly",
    "Testing whether a number is a zero of a polynomial in one short row of arithmetic",
    "Doing long division of whole numbers as division of polynomials in base 10"
  ],
  fields: [
    { name: "Numerical analysis", use: "Horner's method is the standard, stable way to evaluate a polynomial and its derivative." },
    { name: "Computer science", use: "Hash functions and checksums evaluate polynomials at a chosen point with the same nested loop." },
    { name: "Engineering", use: "Transfer-function polynomials are divided by known factors to simplify a system model." },
    { name: "Algebra II", use: "Synthetic division is the test used by the Factor and Rational Root Theorems to find zeros." }
  ],
  prereqWhy: {
    "a1-poly-div": "Synthetic division is long division by x − r with the powers of x left out, so the long-division steps explain every column."
  },
  unlocksWhy: {
    "a2-factor-theorem": "A remainder of 0 means P(r) = 0, so x − r is a factor; synthetic division is how each candidate zero is tested and the polynomial deflated."
  },
  beyond: [
    { field: "Precalculus", why: "Dividing out known zeros and evaluating polynomials quickly are used to graph polynomial and rational functions." },
    { field: "Calculus I", why: "Synthetic division by x − r twice gives P(r) and P′(r), the value and slope used in Newton's method." },
    { field: "Computer science", why: "Horner's rule is the textbook example of an algorithm that reduces the number of operations from about n²/2 to n." }
  ],
  mistakes: [
    { wrong: `Using <span class="m">2</span> in the box for the divisor <span class="m"><i>x</i> + 2</span>.`, fix: `Write <span class="m"><i>x</i> + 2 = <i>x</i> − (−2)</span>, so <span class="m"><i>r</i> = −2</span>. A quick check: the remainder must equal <span class="m"><i>P</i>(−2)</span>.` },
    { wrong: `Dividing <span class="m"><i>x</i><sup>4</sup> − 3<i>x</i><sup>3</sup> + 5<i>x</i> − 6</span> using the row <span class="m">1, −3, 5, −6</span>.`, fix: `The <span class="m"><i>x</i><sup>2</sup></span> term is missing. Use <span class="m">1, −3, 0, 5, −6</span>, or every later column shifts and the quotient is wrong.` },
    { wrong: `Dividing by <span class="m">2<i>x</i> − 1</span> with <span class="m"><i>r</i> = <span class="fr"><span>1</span><span>2</span></span></span> and reporting the bottom row as the quotient.`, fix: `That row is the quotient for <span class="m"><i>x</i> − <span class="fr"><span>1</span><span>2</span></span></span>. Since <span class="m">2<i>x</i> − 1 = 2(<i>x</i> − <span class="fr"><span>1</span><span>2</span></span>)</span>, divide its coefficients by 2. The remainder does not change.` },
    { wrong: `Reading the bottom row <span class="m">1, −1, −2, 1</span> of a quartic as <span class="m"><i>x</i><sup>4</sup> − <i>x</i><sup>3</sup> − 2<i>x</i><sup>2</sup> + <i>x</i></span>.`, fix: `The quotient is one degree lower than the dividend: <span class="m"><i>x</i><sup>3</sup> − <i>x</i><sup>2</sup> − 2<i>x</i> + 1</span>.` }
  ],
  practice: [
    { q: `Use synthetic division: <span class="m">(<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> − 5<i>x</i> + 1) ÷ (<i>x</i> − 1)</span>.`, a: `<span class="m"><i>r</i> = 1</span>, row <span class="m">1, 2, −5, 1</span>: bring down 1; <span class="m">2 + 1 = 3</span>; <span class="m">−5 + 3 = −2</span>; <span class="m">1 + (−2) = −1</span>. Quotient <span class="m"><i>x</i><sup>2</sup> + 3<i>x</i> − 2</span>, remainder <span class="m">−1</span>.` },
    { q: `Divide <span class="m"><i>x</i><sup>4</sup> − 16</span> by <span class="m"><i>x</i> + 2</span>.`, a: `<span class="m"><i>r</i> = −2</span>, row <span class="m">1, 0, 0, 0, −16</span>: bottom row <span class="m">1, −2, 4, −8</span> | <span class="m">0</span>. Quotient <span class="m"><i>x</i><sup>3</sup> − 2<i>x</i><sup>2</sup> + 4<i>x</i> − 8</span>, remainder 0.` },
    { q: `Use the Remainder Theorem to find <span class="m"><i>P</i>(−3)</span> for <span class="m"><i>P</i>(<i>x</i>) = 2<i>x</i><sup>4</sup> + 5<i>x</i><sup>3</sup> − 2<i>x</i> + 1</span>.`, a: `Divide by <span class="m"><i>x</i> + 3</span> with row <span class="m">2, 5, 0, −2, 1</span>: bottom row <span class="m">2, −1, 3, −11</span> | <span class="m">34</span>. So <span class="m"><i>P</i>(−3) = 34</span>. Check: <span class="m">162 − 135 + 6 + 1 = 34</span>.` },
    { q: `Divide <span class="m">(2<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup> − 5<i>x</i> + 5) ÷ (2<i>x</i> − 1)</span>.`, a: `Use <span class="m"><i>r</i> = <span class="fr"><span>1</span><span>2</span></span></span>: bottom row <span class="m">2, 2, −4</span> | <span class="m">3</span>, so <span class="m"><i>P</i> = (<i>x</i> − <span class="fr"><span>1</span><span>2</span></span>)(2<i>x</i><sup>2</sup> + 2<i>x</i> − 4) + 3 = (2<i>x</i> − 1)(<i>x</i><sup>2</sup> + <i>x</i> − 2) + 3</span>. Quotient <span class="m"><i>x</i><sup>2</sup> + <i>x</i> − 2</span>, remainder 3.` }
  ],
  origin: `The Chinese mathematician Qin Jiushao used the same nested multiply-and-add scheme to solve polynomial equations numerically in 1247. Paolo Ruffini described synthetic division (Ruffini's rule) in 1804, and William George Horner published his method for evaluating and solving polynomials in 1819.`
};
