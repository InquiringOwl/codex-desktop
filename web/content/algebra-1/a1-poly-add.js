window.ARITH = window.ARITH || {};

ARITH["a1-poly-add"] = {
  title: "Polynomials: Adding & Subtracting",
  short: "Combine like terms, degree by degree",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Polynomials · vocabulary and addition",
  hero: `<span class="m">(3<span class="c4"><i>x</i><sup>2</sup></span> − 2<span class="c2"><i>x</i></span> + <span class="c1">5</span>) + (<span class="c4"><i>x</i><sup>2</sup></span> + 4<span class="c2"><i>x</i></span> − <span class="c1">7</span>) = 4<span class="c4"><i>x</i><sup>2</sup></span> + 2<span class="c2"><i>x</i></span> − <span class="c1">2</span></span>`,
  lede: `A polynomial is a sum of terms like <span class="m">3<i>x</i><sup>2</sup></span>. To add or subtract polynomials, combine the terms that have the same variable part.`,
  plain: `<p>A <b>polynomial</b> is an expression built from terms such as <span class="m">4<i>x</i><sup>3</sup></span>, <span class="m">−2<i>x</i></span> and <span class="m">7</span>, each a number times a variable raised to a whole-number power. Names depend on the number of terms: a <b>monomial</b> has one, a <b>binomial</b> two, a <b>trinomial</b> three.</p>
<p><b>Like terms</b> have exactly the same variable part: <span class="m">3<i>x</i><sup>2</sup></span> and <span class="m">−5<i>x</i><sup>2</sup></span> are like terms, but <span class="m">3<i>x</i><sup>2</sup></span> and <span class="m">3<i>x</i></span> are not. You add like terms by adding their coefficients, the same way 3 apples plus 5 apples is 8 apples. Unlike terms stay separate.</p>
<p>Subtracting a polynomial means subtracting every one of its terms. The safe way is to change the minus sign in front of the parentheses into adding the opposite: flip the sign of each term inside, then add as usual.</p>`,
  formal: `<p>A <b>polynomial in <span class="m"><i>x</i></span></b> is an expression <span class="m"><i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup> + <i>a</i><sub><i>n</i>−1</sub><i>x</i><sup><i>n</i>−1</sup> + ⋯ + <i>a</i><sub>1</sub><i>x</i> + <i>a</i><sub>0</sub></span> with real coefficients and whole-number exponents. The <b>degree of a term</b> is the sum of the exponents of its variables; the <b>degree of the polynomial</b> is the highest term degree. Written in <b>standard form</b> (descending degree), the first coefficient is the <b>leading coefficient</b>. A nonzero constant has degree 0.</p>
<div class="display"><i>P</i> + <i>Q</i>: add the coefficients of like terms<br><i>P</i> − <i>Q</i> = <i>P</i> + (−<i>Q</i>): change the sign of every term of <i>Q</i>, then add</div>
<p>Combining like terms is the distributive property in reverse, <span class="m"><i>ax</i><sup><i>k</i></sup> + <i>bx</i><sup><i>k</i></sup> = (<i>a</i> + <i>b</i>)<i>x</i><sup><i>k</i></sup></span>. Polynomials are closed under addition and subtraction: the result is always a polynomial, of degree at most the larger of the two degrees.</p>`,
  legend: [
    { c: "c4", sym: `<i>x</i><sup>2</sup>`, name: "Squared terms", desc: "Degree-2 terms. They combine only with other x² terms." },
    { c: "c2", sym: `<i>x</i>`, name: "Linear terms", desc: "Degree-1 terms, combined only with other x terms." },
    { c: "c1", sym: `1`, name: "Constants", desc: "Degree-0 terms, plain numbers, combined with each other." },
    { c: "c3", sym: `−`, name: "Negative terms", desc: "Terms with negative coefficients. A positive and a negative tile of the same kind cancel as a zero pair." }
  ],
  steps: { title: "How to add or subtract polynomials", items: [
    `For subtraction, distribute the minus sign: change the sign of <b>every</b> term in the polynomial being subtracted.`,
    `Remove the parentheses.`,
    `Group like terms: <span class="c4"><i>x</i><sup>2</sup></span> with <span class="c4"><i>x</i><sup>2</sup></span>, <span class="c2"><i>x</i></span> with <span class="c2"><i>x</i></span>, <span class="c1">constants</span> with constants.`,
    `Add the coefficients within each group. Exponents do not change.`,
    `Write the answer in standard form, highest degree first, and drop any term whose coefficient is 0.`
  ] },
  example: {
    prompt: `A bakery's weekly revenue from selling <span class="m"><i>x</i></span> dozen specialty loaves is <span class="m"><i>R</i>(<i>x</i>) = −0.5<i>x</i><sup>2</sup> + 40<i>x</i></span> dollars, and its cost is <span class="m"><i>C</i>(<i>x</i>) = 0.2<i>x</i><sup>2</sup> + 6<i>x</i> + 150</span> dollars. Find the profit polynomial and the profit on 20 dozen.`,
    lines: [
      { math: `<span class="m"><i>P</i>(<i>x</i>) = (−0.5<i>x</i><sup>2</sup> + 40<i>x</i>) − (0.2<i>x</i><sup>2</sup> + 6<i>x</i> + 150)</span>`, note: "Profit is revenue minus cost." },
      { math: `<span class="m">= −0.5<i>x</i><sup>2</sup> + 40<i>x</i> − 0.2<i>x</i><sup>2</sup> − 6<i>x</i> − 150</span>`, note: "Change the sign of every cost term." },
      { math: `<span class="m">= (−0.5 − 0.2)<span class="c4"><i>x</i><sup>2</sup></span> + (40 − 6)<span class="c2"><i>x</i></span> − <span class="c1">150</span></span>`, note: "Group like terms." },
      { math: `<span class="m"><i>P</i>(<i>x</i>) = −0.7<i>x</i><sup>2</sup> + 34<i>x</i> − 150</span>`, note: "Combine coefficients." },
      { math: `<span class="m"><i>P</i>(20) = −0.7(400) + 34(20) − 150 = −280 + 680 − 150 = 250</span>`, note: "Evaluate at x = 20." },
      { math: `<span class="m"><i>R</i>(20) − <i>C</i>(20) = 600 − 350 = 250 ✓</span>`, note: "Check by computing revenue and cost separately." }
    ],
    answer: `The profit is <span class="m"><i>P</i>(<i>x</i>) = −0.7<i>x</i><sup>2</sup> + 34<i>x</i> − 150</span>, which is <span class="m">$250</span> for 20 dozen.`
  },
  why: `<p>Polynomials are the simplest formulas that can curve, and they are used everywhere to model cost, revenue, area, volume and motion. Combining them lets you build a profit formula from revenue and cost, or a total area from pieces, before you ever plug in a number.</p>
<p>Adding and subtracting polynomials is the first operation on them, and the vocabulary of terms, coefficients and degree is used in every later topic: multiplying, factoring, dividing, graphing and solving polynomial equations.</p>`,
  careers: [
    { role: "Financial analyst", use: "Subtracts a cost polynomial from a revenue polynomial to get a profit function before finding its maximum." },
    { role: "Actuary", use: "Combines polynomial approximations of separate risk components into a single expression for total expected cost." },
    { role: "Civil engineer", use: "Adds polynomial load or deflection expressions from separate forces acting on a beam." },
    { role: "Computer graphics programmer", use: "Adds polynomial curve segments and their coordinate components when blending shapes and animation paths." },
    { role: "Architect", use: "Writes total floor area as a sum of polynomial areas of rooms whose dimensions depend on one variable." }
  ],
  life: [
    "Writing a total cost that includes a fixed fee plus several variable charges",
    "Finding the area of an L-shaped room as the sum of two rectangles",
    "Working out profit from a side business as income minus expenses",
    "Combining the perimeters of several garden beds with a shared dimension",
    "Keeping a running total of expressions in a spreadsheet"
  ],
  fields: [
    { name: "Economics", use: "Profit, cost and revenue functions are polynomials combined by addition and subtraction." },
    { name: "Physics", use: "Displacements and energies from separate sources are added as polynomial expressions in time." },
    { name: "Computer science", use: "Polynomial arithmetic underlies error-correcting codes and checksums such as CRCs." }
  ],
  prereqWhy: {
    "a1-exponents": "Like terms are identified by matching variables and exponents, and the degree of a term is read from its exponents."
  },
  unlocksWhy: {
    "a1-poly-mult": "Multiplying polynomials produces many terms, and the last step is always combining like terms."
  },
  beyond: [
    { field: "Algebra II", why: "Polynomial functions, their end behaviour and their roots are studied using degree and leading coefficient." },
    { field: "Calculus I", why: "Derivatives and integrals of polynomials are taken term by term, and results are combined like this." },
    { field: "Linear Algebra", why: "Polynomials of degree at most n form a vector space, where adding polynomials is vector addition of their coefficient lists." }
  ],
  mistakes: [
    { wrong: `Changing only the first sign when subtracting: <span class="m">(5<i>y</i><sup>3</sup> − 2<i>y</i> + 8) − (3<i>y</i><sup>3</sup> − 2<i>y</i> − 1) = 2<i>y</i><sup>3</sup> − 4<i>y</i> + 7</span>.`, fix: `Change every sign: <span class="m">5<i>y</i><sup>3</sup> − 2<i>y</i> + 8 − 3<i>y</i><sup>3</sup> + 2<i>y</i> + 1 = 2<i>y</i><sup>3</sup> + 9</span>.` },
    { wrong: `Adding exponents when combining: <span class="m">3<i>x</i><sup>2</sup> + 4<i>x</i><sup>2</sup> = 7<i>x</i><sup>4</sup></span>.`, fix: `Only the coefficients add: <span class="m">3<i>x</i><sup>2</sup> + 4<i>x</i><sup>2</sup> = 7<i>x</i><sup>2</sup></span>. Exponents add when you multiply powers.` },
    { wrong: `Combining unlike terms: <span class="m">4<i>x</i><sup>2</sup> + 3<i>x</i> = 7<i>x</i><sup>3</sup></span>.`, fix: `<span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>x</i></span> terms are not alike, so <span class="m">4<i>x</i><sup>2</sup> + 3<i>x</i></span> is already simplified.` }
  ],
  practice: [
    { q: `Write <span class="m">5<i>x</i><sup>3</sup> − <i>x</i><sup>7</sup> + 2</span> in standard form and give its degree and leading coefficient.`, a: `<span class="m">−<i>x</i><sup>7</sup> + 5<i>x</i><sup>3</sup> + 2</span>. Degree 7, leading coefficient −1. It is a trinomial.` },
    { q: `Add <span class="m">(4<i>x</i><sup>2</sup> − 3<i>x</i> + 1) + (−2<i>x</i><sup>2</sup> + 5<i>x</i> − 6)</span>.`, a: `<span class="m">(4 − 2)<i>x</i><sup>2</sup> + (−3 + 5)<i>x</i> + (1 − 6) = 2<i>x</i><sup>2</sup> + 2<i>x</i> − 5</span>.` },
    { q: `Subtract <span class="m">(5<i>y</i><sup>3</sup> − 2<i>y</i> + 8) − (3<i>y</i><sup>3</sup> + <i>y</i><sup>2</sup> − 2<i>y</i> − 1)</span>.`, a: `<span class="m">5<i>y</i><sup>3</sup> − 2<i>y</i> + 8 − 3<i>y</i><sup>3</sup> − <i>y</i><sup>2</sup> + 2<i>y</i> + 1 = 2<i>y</i><sup>3</sup> − <i>y</i><sup>2</sup> + 9</span>.` },
    { q: `Subtract <span class="m">3<i>a</i><sup>2</sup> − 4<i>ab</i> + <i>b</i><sup>2</sup></span> from <span class="m">7<i>a</i><sup>2</sup> + <i>ab</i> − 2<i>b</i><sup>2</sup></span>.`, a: `"Subtract A from B" means B − A: <span class="m">(7<i>a</i><sup>2</sup> + <i>ab</i> − 2<i>b</i><sup>2</sup>) − (3<i>a</i><sup>2</sup> − 4<i>ab</i> + <i>b</i><sup>2</sup>) = 4<i>a</i><sup>2</sup> + 5<i>ab</i> − 3<i>b</i><sup>2</sup></span>.` }
  ]
};
