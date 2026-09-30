window.ARITH = window.ARITH || {};

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
