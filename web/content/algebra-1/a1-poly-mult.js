window.ARITH = window.ARITH || {};

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
    "a2-func-ops": "Products such as <span class=\"m\">(<i>f</i><i>g</i>)(<i>x</i>)</span> and compositions such as <span class=\"m\">(<i>x</i> + 1)<sup>2</sup></span> are expanded by multiplying polynomials.",
    "a2-complex-ops": "Multiplying <span class=\"m\">(<i>a</i> + <i>b</i>i)(<i>c</i> + <i>d</i>i)</span> is FOIL on two binomials, and a conjugate pair multiplies like a sum and difference.",
    "a2-poly-graphs": "Finding the leading term of a factored polynomial, or expanding it to standard form, is polynomial multiplication.",
    "a2-binomial": "Expanding <span class=\"m\">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup></span> is repeated polynomial multiplication, and the binomial theorem predicts the result.",
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
