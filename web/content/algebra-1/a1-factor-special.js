window.ARITH = window.ARITH || {};

ARITH["a1-factor-special"] = {
  title: "Special Factoring Patterns",
  short: "Squares and cubes: a² − b², (a ± b)², a³ ± b³",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Factoring · patterns worth recognising",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup>2</sup> − <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1">(<span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span>)(<span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span>)</span></span>`,
  lede: `A few polynomial shapes appear so often that their factorisations are worth knowing on sight: the difference of two squares, perfect square trinomials, and the sum or difference of two cubes.`,
  plain: `<p>You already know how to multiply <span class="m">(<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>)</span>: the middle terms cancel and you get <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>. Factoring runs that backward. When you see one perfect square minus another, such as <span class="m"><i>x</i><sup>2</sup> − 49</span>, you can write it straight away as <span class="m">(<i>x</i> + 7)(<i>x</i> − 7)</span>.</p>
<p>Picture a big square of side <span class="m c2"><i>a</i></span> with a small square of side <span class="m c3"><i>b</i></span> cut from one corner. The L-shaped piece left over has area <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>. Cut it in two and slide one piece around, and it becomes a rectangle <span class="m"><i>a</i> + <i>b</i></span> long and <span class="m"><i>a</i> − <i>b</i></span> wide.</p>
<p>A <b>perfect square trinomial</b> like <span class="m"><i>x</i><sup>2</sup> + 10<i>x</i> + 25</span> has a first and last term that are squares and a middle term that is twice their product. It factors as <span class="m">(<i>x</i> + 5)<sup>2</sup></span>. Cubes have their own pair of formulas. One pattern that does <b>not</b> factor over the real numbers is a sum of two squares, such as <span class="m"><i>x</i><sup>2</sup> + 9</span>.</p>`,
  formal: `<p>For all real <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>:</p>
<div class="display"><b>Difference of squares</b>: &nbsp;<i>a</i><sup>2</sup> − <i>b</i><sup>2</sup> = (<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>)<br><b>Perfect square trinomials</b>: &nbsp;<i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup> = (<i>a</i> + <i>b</i>)<sup>2</sup>, &nbsp; <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup> = (<i>a</i> − <i>b</i>)<sup>2</sup><br><b>Sum of cubes</b>: &nbsp;<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> = (<i>a</i> + <i>b</i>)(<i>a</i><sup>2</sup> − <i>ab</i> + <i>b</i><sup>2</sup>)<br><b>Difference of cubes</b>: &nbsp;<i>a</i><sup>3</sup> − <i>b</i><sup>3</sup> = (<i>a</i> − <i>b</i>)(<i>a</i><sup>2</sup> + <i>ab</i> + <i>b</i><sup>2</sup>)</div>
<p>The trinomial factors <span class="m"><i>a</i><sup>2</sup> ± <i>ab</i> + <i>b</i><sup>2</sup></span> in the cube formulas are <b>prime</b> over the integers, and a sum of squares such as <span class="m"><i>x</i><sup>2</sup> + 9</span> (with no common factor) is prime over the real numbers. A polynomial is <b>factored completely</b> when every factor other than a monomial is prime, so always remove a greatest common factor first and check each factor for another pattern.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First root term", desc: "The expression whose square (or cube) is the first term, such as 3x for 9x²." },
    { c: "c3", sym: `<i>b</i>`, name: "Second root term", desc: "The expression whose square (or cube) is the last term, such as 5 for 25." },
    { c: "c1", sym: `( )( )`, name: "Factored result", desc: "The product the pattern produces. Multiplying it back out must give the original polynomial." }
  ],
  steps: { title: "How to factor using the special patterns", items: [
    `Factor out the greatest common factor, if there is one.`,
    `Count the terms. Two terms: look for a difference of squares, or a sum or difference of cubes. Three terms: look for a perfect square trinomial.`,
    `Identify <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> by taking the square root (or cube root) of the first and last terms.`,
    `For a trinomial, confirm the middle term equals <span class="m">2<span class="c2"><i>a</i></span><span class="c3"><i>b</i></span></span>. If it does not, use trinomial factoring instead.`,
    `Write the <span class="c1">factored form</span> from the formula, taking care with the signs in the cube formulas.`,
    `Check each factor for further factoring (for example <span class="m"><i>x</i><sup>2</sup> − 4</span> inside <span class="m"><i>x</i><sup>4</sup> − 16</span>), then multiply back to verify.`
  ] },
  example: {
    prompt: `A square courtyard measures <span class="m"><i>x</i></span> metres on each side. A square planter 4 m on each side sits in one corner. Write the paved area in factored form, and find it when <span class="m"><i>x</i> = 14</span>.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>x</i></span><sup>2</sup> − <span class="c3">4</span><sup>2</sup> = <i>x</i><sup>2</sup> − 16</span>`, note: "Paved area is the whole square minus the planter square." },
      { math: `<span class="m"><span class="c2"><i>a</i> = <i>x</i></span>, &nbsp; <span class="c3"><i>b</i> = 4</span></span>`, note: "It is a difference of two squares." },
      { math: `<span class="m c1">(<i>x</i> + 4)(<i>x</i> − 4)</span>`, note: "Apply a² − b² = (a + b)(a − b)." },
      { math: `<span class="m">(14 + 4)(14 − 4) = 18 · 10 = 180</span>`, note: "Substitute x = 14. The factored form makes this easy mental arithmetic." },
      { math: `<span class="m">14<sup>2</sup> − 16 = 196 − 16 = 180 ✓</span>`, note: "Check with the unfactored form." }
    ],
    answer: `The paved area is <span class="m c1">(<i>x</i> + 4)(<i>x</i> − 4)</span> m², which is <span class="m">180 m²</span> when the courtyard is 14 m wide.`
  },
  why: `<p>These patterns save a great deal of work. Instead of searching for factor pairs, you read the factorisation straight off the shape of the polynomial. They also give quick mental arithmetic: <span class="m">47 × 53 = 50<sup>2</sup> − 3<sup>2</sup> = 2491</span>.</p>
<p>Later, the difference of squares is how you simplify rational expressions, rationalise denominators such as <span class="m">1/(√3 − 1)</span>, and solve equations like <span class="m"><i>x</i><sup>2</sup> = 49</span>. Perfect square trinomials are the whole idea behind completing the square, which leads to the quadratic formula and to the vertex form of a parabola.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes the cross-sectional area of a hollow pipe or tube as π(R² − r²) = π(R + r)(R − r) from outer and inner radii." },
    { role: "Machinist", use: "Uses the washer-area formula π(R² − r²) to find how much material a part with a drilled hole contains." },
    { role: "Physicist", use: "Factors expressions like c² − v² in special relativity when simplifying the Lorentz factor." },
    { role: "Software engineer", use: "Implements fast algorithms such as Fermat's factorisation method, which writes an odd number as a difference of two squares." },
    { role: "Mathematics teacher", use: "Uses the tile picture of a² − b² as a rectangle to explain why factoring works." }
  ],
  life: [
    "Multiplying numbers like 29 × 31 in your head as 30² − 1",
    "Working out the area of a frame or border around a square picture",
    "Estimating the area of a ring-shaped path around a circular garden",
    "Squaring numbers like 102 quickly as 100² + 2·100·2 + 2²"
  ],
  fields: [
    { name: "Precalculus", use: "Rationalising denominators and simplifying difference quotients rely on the difference of squares." },
    { name: "Engineering", use: "Areas and volumes of hollow shapes such as pipes, washers and tubes are differences of squares or cubes." },
    { name: "Number theory", use: "Fermat's method factors odd integers by writing them as a difference of two squares." },
    { name: "Physics", use: "Energy and relativity formulas are simplified by factoring differences of squares." }
  ],
  prereqWhy: {
    "a1-factor-tri": "Perfect square trinomials are trinomials, and recognising them requires the general factoring methods for ax² + bx + c."
  },
  unlocksWhy: {
    "a1-rational-simplify": "Simplifying a rational expression means factoring numerator and denominator, and differences of squares are among the most common factors that cancel."
  },
  beyond: [
    { field: "Algebra II", why: "Higher-degree polynomials such as x⁴ − 81 or x⁶ − 1 are factored completely by applying these patterns repeatedly." },
    { field: "Precalculus", why: "Multiplying by a conjugate to rationalise a denominator is the difference-of-squares pattern used in reverse." },
    { field: "Calculus I", why: "Limits such as (x² − 9)/(x − 3) as x approaches 3 are evaluated by factoring a difference of squares and cancelling." }
  ],
  mistakes: [
    { wrong: `Factoring a sum of squares: <span class="m"><i>x</i><sup>2</sup> + 9 = (<i>x</i> + 3)(<i>x</i> + 3)</span>.`, fix: `<span class="m">(<i>x</i> + 3)<sup>2</sup> = <i>x</i><sup>2</sup> + 6<i>x</i> + 9</span>. The sum of squares <span class="m"><i>x</i><sup>2</sup> + 9</span> is prime over the real numbers.` },
    { wrong: `Treating <span class="m">(<i>a</i> − <i>b</i>)<sup>2</sup></span> as <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>.`, fix: `<span class="m">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></span>. Only the product <span class="m">(<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>)</span> gives <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>.` },
    { wrong: `Getting the cube signs wrong: <span class="m"><i>x</i><sup>3</sup> − 8 = (<i>x</i> − 2)(<i>x</i><sup>2</sup> − 2<i>x</i> + 4)</span>.`, fix: `For a difference of cubes the middle sign in the trinomial is positive: <span class="m">(<i>x</i> − 2)(<i>x</i><sup>2</sup> + 2<i>x</i> + 4)</span>. A memory aid is SOAP: Same, Opposite, Always Positive.` },
    { wrong: `Stopping too early: <span class="m"><i>x</i><sup>4</sup> − 16 = (<i>x</i><sup>2</sup> + 4)(<i>x</i><sup>2</sup> − 4)</span>.`, fix: `<span class="m"><i>x</i><sup>2</sup> − 4</span> is again a difference of squares: <span class="m">(<i>x</i><sup>2</sup> + 4)(<i>x</i> + 2)(<i>x</i> − 2)</span>.` }
  ],
  practice: [
    { q: `Factor <span class="m"><i>x</i><sup>2</sup> − 49</span>.`, a: `<span class="m"><i>x</i><sup>2</sup> − 7<sup>2</sup> = (<i>x</i> + 7)(<i>x</i> − 7)</span>.` },
    { q: `Factor <span class="m">9<i>x</i><sup>2</sup> − 30<i>x</i> + 25</span>.`, a: `<span class="m">9<i>x</i><sup>2</sup> = (3<i>x</i>)<sup>2</sup></span>, <span class="m">25 = 5<sup>2</sup></span>, and <span class="m">2(3<i>x</i>)(5) = 30<i>x</i></span>, so it is <span class="m">(3<i>x</i> − 5)<sup>2</sup></span>.` },
    { q: `Factor <span class="m">8<i>x</i><sup>3</sup> + 27</span>.`, a: `Sum of cubes with <span class="m"><i>a</i> = 2<i>x</i></span>, <span class="m"><i>b</i> = 3</span>: <span class="m">(2<i>x</i> + 3)(4<i>x</i><sup>2</sup> − 6<i>x</i> + 9)</span>.` },
    { q: `Factor completely <span class="m">2<i>x</i><sup>4</sup> − 32</span>.`, a: `GCF first: <span class="m">2(<i>x</i><sup>4</sup> − 16) = 2(<i>x</i><sup>2</sup> + 4)(<i>x</i><sup>2</sup> − 4) = 2(<i>x</i><sup>2</sup> + 4)(<i>x</i> + 2)(<i>x</i> − 2)</span>. The factor <span class="m"><i>x</i><sup>2</sup> + 4</span> is prime.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) states these identities as facts about areas. Book II, Proposition 4 is the geometric form of <span class="m">(<i>a</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup></span>, and Proposition 5 is equivalent to the difference of squares.`
};
