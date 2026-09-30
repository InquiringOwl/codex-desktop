window.ARITH = window.ARITH || {};

ARITH["pa-like-terms"] = {
  title: "Like Terms & the Distributive Property",
  short: "Simplify expressions by distributing and combining",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Simplifying expressions · like terms and distribution",
  hero: `<span class="m">3(2<span class="c2"><i>x</i></span> + <span class="c1">4</span>) = 6<span class="c2"><i>x</i></span> + <span class="c1">12</span></span>`,
  lede: `The distributive property opens parentheses. Combining like terms collects <span class="m c2"><i>x</i></span>'s with <span class="m c2"><i>x</i></span>'s and <span class="m c1">numbers</span> with numbers. Together they put any linear expression in its simplest form.`,
  plain: `<p>Suppose a drawer holds 5 pencils and 3 erasers, and you add 2 more pencils. You now have 7 pencils and 3 erasers. You can add pencils to pencils, but you cannot turn pencils and erasers into one pile of "10 pencilerasers". Algebra works the same way: <span class="m">5<i>x</i> + 2<i>x</i> = 7<i>x</i></span>, but <span class="m">7<i>x</i> + 3</span> cannot be squeezed any further.</p>
<p>Terms that have exactly the same variable part are <b>like terms</b>. <span class="m">5<i>x</i></span> and <span class="m">−2<i>x</i></span> are like terms. <span class="m">5<i>x</i></span> and <span class="m">5<i>x</i><sup>2</sup></span> are not, because <span class="m"><i>x</i></span> and <span class="m"><i>x</i><sup>2</sup></span> are different kinds of thing, just as a length and an area are.</p>
<p>The <b>distributive property</b> gets rid of parentheses. <span class="m">3(2<i>x</i> + 4)</span> means three copies of <span class="m">2<i>x</i> + 4</span>. Three copies give 6 <span class="m"><i>x</i></span>'s and 12 ones, so <span class="m">3(2<i>x</i> + 4) = 6<i>x</i> + 12</span>. The number outside multiplies every term inside.</p>`,
  formal: `<p><b>Like terms</b> are terms whose variable factors are identical, including exponents (constants are like terms of each other). The <b>distributive property</b> holds for all real numbers <span class="m"><i>a</i>, <i>b</i>, <i>c</i></span>:</p>
<div class="display"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i> &nbsp;&nbsp; <i>a</i>(<i>b</i> − <i>c</i>) = <i>ab</i> − <i>ac</i> &nbsp;&nbsp; −(<i>b</i> − <i>c</i>) = −<i>b</i> + <i>c</i><br><span class="c2"><i>bx</i></span> + <span class="c2"><i>cx</i></span> = (<i>b</i> + <i>c</i>)<span class="c2"><i>x</i></span> <span class="dim">(combining like terms is the distributive property read right to left)</span></div>
<p>To <b>combine like terms</b>, add their coefficients and keep the variable part unchanged. An expression is <b>simplified</b> when it has no grouping symbols that can be removed and no two like terms; by convention, terms are written in descending order of degree with the constant last.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "x-tiles (variable terms)", desc: "Long tiles worth x each. Only x-terms combine with x-terms." },
    { c: "c1", sym: `1`, name: "Unit tiles (constants)", desc: "Small square tiles worth 1 each. Constants combine with constants." },
    { c: "c3", sym: `−<i>x</i>, −1`, name: "Negative tiles", desc: "Tiles worth −x or −1. A positive and a negative tile of the same kind cancel to zero." }
  ],
  steps: { title: "How to simplify a linear expression", items: [
    `Distribute any factor in front of parentheses to every term inside. A minus sign in front means multiply every term by −1.`,
    `Rewrite subtractions as adding negatives so every term carries its own sign.`,
    `Group like terms: all the <span class="m c2"><i>x</i></span>-terms together, all the <span class="m c1">constants</span> together.`,
    `Add the coefficients of each group. Keep the variable part the same.`,
    `Write the result with the variable term first and the constant last.`,
    `Check by substituting a value such as <span class="m"><i>x</i> = 2</span> into the original and the simplified form. They must agree.`
  ] },
  example: {
    prompt: `A rectangular garden is <span class="m"><i>x</i></span> metres long and 3 metres shorter than that in width. Write and simplify an expression for its perimeter, then find the perimeter when <span class="m"><i>x</i> = 10</span>.`,
    lines: [
      { math: `<span class="m">width = <span class="c2"><i>x</i></span> <span class="c3">− 3</span></span>`, note: "3 metres shorter than the length." },
      { math: `<span class="m">2<span class="c2"><i>x</i></span> + 2(<span class="c2"><i>x</i></span> <span class="c3">− 3</span>)</span>`, note: "Perimeter is two lengths plus two widths." },
      { math: `<span class="m">2<span class="c2"><i>x</i></span> + 2<span class="c2"><i>x</i></span> <span class="c3">− 6</span></span>`, note: "Distribute the 2 to both terms in the parentheses." },
      { math: `<span class="m">4<span class="c2"><i>x</i></span> <span class="c3">− 6</span></span>`, note: "Combine like terms: 2x + 2x = 4x." },
      { math: `<span class="m">4(10) − 6 = 34</span>`, note: "Substitute x = 10." },
      { math: `<span class="m">10 + 7 + 10 + 7 = 34</span>`, note: "Check: a 10 m by 7 m rectangle has perimeter 34 m." }
    ],
    answer: `The perimeter is <span class="m">4<i>x</i> − 6</span> metres, which is <span class="m">34</span> m when <span class="m"><i>x</i> = 10</span>.`
  },
  why: `<p>Simplifying makes an expression shorter and easier to use. A long cost formula with repeated pieces, such as several items at the same unit price, collapses into one clean expression. Mental math tricks like <span class="m">6 × 98 = 6(100 − 2) = 588</span> are the distributive property in action.</p>
<p>Almost every equation you solve later needs this step first. Before you can isolate <span class="m"><i>x</i></span>, you distribute and collect like terms so that each side has at most one <span class="m"><i>x</i></span>-term and one constant.</p>`,
  careers: [
    { role: "Carpenter", use: "Simplifies trim or framing totals such as 2(l + w) plus extra pieces into one expression before cutting stock." },
    { role: "Retail buyer", use: "Combines costs of several orders at the same unit price into one expression to compare suppliers." },
    { role: "Software engineer", use: "Refactors code by factoring out repeated terms, which is the distributive property applied to expressions." },
    { role: "Cashier", use: "Multiplies mentally with the distributive property, such as 4 × $2.99 = 4 × $3 − 4 × $0.01 = $11.96." },
    { role: "Engineer", use: "Simplifies load or cost expressions by collecting like terms before plugging in design values." }
  ],
  life: [
    "Multiplying 7 × 49 in your head as 7 × 50 − 7",
    "Totalling a shopping list with several items at the same price",
    "Working out the perimeter of a room for baseboard trim",
    "Splitting a group bill where everyone had the same meal plus a shared dish"
  ],
  fields: [
    { name: "Physics", use: "Expressions for forces or energies are simplified by collecting like terms before solving." },
    { name: "Accounting", use: "Totals built from repeated line items are simplified by grouping like costs." },
    { name: "Computer science", use: "Compilers simplify arithmetic expressions using the distributive and combining rules." }
  ],
  prereqWhy: {
    "pa-variables": "You must be able to identify terms, coefficients and constants before deciding which terms are alike.",
    "properties": "Combining like terms and removing parentheses are direct uses of the distributive, commutative and associative properties."
  },
  unlocksWhy: {
    "pa-both-sides": "Equations such as 3(x − 2) + x = 2x + 8 must be distributed and have like terms combined before the variable can be isolated."
  },
  beyond: [
    { field: "Algebra I", why: "Adding, subtracting and multiplying polynomials are like-term combination and repeated distribution." },
    { field: "Algebra II", why: "Simplifying rational and complex-number expressions relies on the same two moves." },
    { field: "Linear Algebra", why: "Linear combinations of vectors are combined by adding coefficients of like components." }
  ],
  mistakes: [
    { wrong: `<span class="m">3<i>x</i> + 2 = 5<i>x</i></span>`, fix: `<span class="m">3<i>x</i></span> and 2 are not like terms, so <span class="m">3<i>x</i> + 2</span> is already simplified.` },
    { wrong: `<span class="m">2(<i>x</i> + 4) = 2<i>x</i> + 4</span>`, fix: `The 2 multiplies every term inside: <span class="m">2(<i>x</i> + 4) = 2<i>x</i> + 8</span>.` },
    { wrong: `<span class="m">−(<i>x</i> − 3) = −<i>x</i> − 3</span>`, fix: `The minus sign is −1 times every term: <span class="m">−(<i>x</i> − 3) = −<i>x</i> + 3</span>.` },
    { wrong: `<span class="m">4<i>x</i><sup>2</sup> + 3<i>x</i> = 7<i>x</i><sup>3</sup></span>`, fix: `<span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>x</i></span> terms are unlike. The expression cannot be combined.` }
  ],
  practice: [
    { q: `Simplify <span class="m">7<i>y</i> + 3 − 2<i>y</i> + 8</span>.`, a: `<span class="m">(7 − 2)<i>y</i> + (3 + 8) = 5<i>y</i> + 11</span>.` },
    { q: `Simplify <span class="m">4(3<i>a</i> − 5)</span>.`, a: `<span class="m">12<i>a</i> − 20</span>.` },
    { q: `Simplify <span class="m">−2(<i>x</i> − 6) + 5<i>x</i></span>.`, a: `<span class="m">−2<i>x</i> + 12 + 5<i>x</i> = 3<i>x</i> + 12</span>.` },
    { q: `Simplify <span class="m">3(2<i>x</i><sup>2</sup> − <i>x</i> + 4) − (<i>x</i><sup>2</sup> − 5<i>x</i>) − 7</span>.`, a: `<span class="m">6<i>x</i><sup>2</sup> − 3<i>x</i> + 12 − <i>x</i><sup>2</sup> + 5<i>x</i> − 7 = 5<i>x</i><sup>2</sup> + 2<i>x</i> + 5</span>.` }
  ],
  origin: `The distributive law was used in geometric form long before symbols: Book II of Euclid's <i>Elements</i> (c. 300 BCE) proves it with rectangles, showing that a rectangle split into parts has the same area as the sum of the parts. The name "distributive" was introduced by François-Joseph Servois in 1814.`
};
