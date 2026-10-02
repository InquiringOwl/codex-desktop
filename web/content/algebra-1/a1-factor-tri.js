window.ARITH = window.ARITH || {};

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
    "a2-factor-theorem": "After synthetic division finds a rational root, the leftover quadratic quotient is factored as a trinomial, often with a leading coefficient other than 1.",
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
