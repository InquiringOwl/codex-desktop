window.ARITH = window.ARITH || {};

ARITH["a1-quad-factor"] = {
  title: "Solving Quadratics by Factoring",
  short: "If a product is zero, one of its factors is zero",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Quadratic equations · the zero-product property",
  hero: `<span class="m"><span class="c2">(<i>x</i> − <i>r</i>)</span><span class="c3">(<i>x</i> − <i>s</i>)</span> = 0 &nbsp;⇒&nbsp; <span class="c1"><i>x</i> = <i>r</i></span> &nbsp;or&nbsp; <span class="c1"><i>x</i> = <i>s</i></span></span>`,
  lede: `Put the quadratic equation in standard form with zero on one side, factor it, and set each factor equal to zero. Each factor gives one <span class="c1">root</span>.`,
  plain: `<p>If you multiply two numbers and get zero, at least one of them must be zero. No other way works. That fact, the <b>zero-product property</b>, is what makes factoring useful for solving equations.</p>
<p>A quadratic equation has an <span class="m"><i>x</i><sup>2</sup></span> term, such as <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> − 14 = 0</span>. You cannot undo the square and the <span class="m"><i>x</i></span> term at the same time with ordinary moves. But if you factor it into <span class="m">(<i>x</i> − 7)(<i>x</i> + 2) = 0</span>, the problem splits into two easy ones: <span class="m"><i>x</i> − 7 = 0</span> or <span class="m"><i>x</i> + 2 = 0</span>. So <span class="m"><i>x</i> = 7</span> or <span class="m"><i>x</i> = −2</span>.</p>
<p>The zero is essential. If the equation says a product equals 6, you learn nothing about the separate factors, because many pairs multiply to 6. Always move every term to one side first. On a graph, the solutions are the points where the parabola crosses the <span class="m"><i>x</i></span>-axis.</p>`,
  formal: `<p>A <b>quadratic equation</b> in one variable can be written in <b>standard form</b> <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with <span class="m"><i>a</i> ≠ 0</span>. Its solutions are also called its <b>roots</b>, and they are the <span class="m"><i>x</i></span>-intercepts of <span class="m"><i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span>.</p>
<div class="display"><b>Zero-product property</b>: for real numbers <i>p</i>, <i>q</i>, &nbsp;<i>pq</i> = 0 &nbsp;⇔&nbsp; <i>p</i> = 0 or <i>q</i> = 0.<br><i>a</i>(<i>x</i> − <i>r</i>)(<i>x</i> − <i>s</i>) = 0, <i>a</i> ≠ 0 &nbsp;⇒&nbsp; solution set {<i>r</i>, <i>s</i>}</div>
<p>If <span class="m"><i>r</i> = <i>s</i></span>, as in <span class="m">(<i>x</i> − 3)<sup>2</sup> = 0</span>, the equation has one solution, called a <b>double root</b> (the parabola touches the axis at its vertex). The property extends to any number of factors and so to higher-degree polynomial equations such as <span class="m"><i>x</i>(<i>x</i> − 1)(<i>x</i> + 4) = 0</span>. It applies only when one side is 0.</p>`,
  legend: [
    { c: "c2", sym: `(<i>x</i> − <i>r</i>)`, name: "First factor", desc: "One linear factor of the quadratic. Setting it equal to zero gives the root r." },
    { c: "c3", sym: `(<i>x</i> − <i>s</i>)`, name: "Second factor", desc: "The other linear factor. Setting it equal to zero gives the root s." },
    { c: "c1", sym: `<i>r</i>, <i>s</i>`, name: "Roots", desc: "The solutions of the equation, which are also the x-intercepts of the parabola." }
  ],
  steps: { title: "How to solve a quadratic equation by factoring", items: [
    `Write the equation in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> by moving every term to one side.`,
    `Factor out any greatest common factor, then factor the rest completely.`,
    `Set each factor containing the variable equal to zero (zero-product property).`,
    `Solve each resulting linear equation.`,
    `Check each <span class="c1">root</span> in the original equation. In a word problem, reject any root that makes no sense, such as a negative length.`
  ] },
  example: {
    prompt: `A rectangular garden is 3 ft longer than it is wide and has an area of 108 ft². Find its dimensions.`,
    lines: [
      { math: `<span class="m"><i>w</i>(<i>w</i> + 3) = 108</span>`, note: "Let w be the width. The length is w + 3, and length times width is the area." },
      { math: `<span class="m"><i>w</i><sup>2</sup> + 3<i>w</i> − 108 = 0</span>`, note: "Distribute and subtract 108 to get zero on one side." },
      { math: `<span class="m"><span class="c2">(<i>w</i> + 12)</span><span class="c3">(<i>w</i> − 9)</span> = 0</span>`, note: "Factor: 12 and −9 multiply to −108 and add to 3." },
      { math: `<span class="m"><i>w</i> + 12 = 0 &nbsp;or&nbsp; <i>w</i> − 9 = 0</span>`, note: "Zero-product property." },
      { math: `<span class="m"><span class="c1"><i>w</i> = −12</span> &nbsp;or&nbsp; <span class="c1"><i>w</i> = 9</span></span>`, note: "A width cannot be negative, so reject −12." },
      { math: `<span class="m">9 · 12 = 108 ✓</span>`, note: "Check: width 9 ft, length 12 ft." }
    ],
    answer: `The garden is <span class="m">9 ft</span> wide and <span class="m">12 ft</span> long.`
  },
  why: `<p>Areas, projectile heights, revenue and many geometric relationships produce equations with a squared unknown. When the quadratic factors nicely, factoring is the fastest way to solve it, and the factored form tells you at a glance where the graph crosses the axis.</p>
<p>The zero-product property is one of the most used facts in algebra. It is how you solve higher-degree polynomial equations, find the zeros of functions, and later find where a derivative equals zero in calculus. It also explains why you must never divide both sides by a variable: that throws away the root where the variable is zero.</p>`,
  careers: [
    { role: "Landscape architect", use: "Sets up area equations like w(w + 3) = 108 to find plot or patio dimensions that give a required area." },
    { role: "Civil engineer", use: "Finds where a parabolic road profile or arch meets a reference level by solving a factored quadratic." },
    { role: "Financial analyst", use: "Finds break-even prices where a quadratic profit function equals zero." },
    { role: "Physics teacher", use: "Factors −16t² + v₀t = 0 as −16t(t − v₀/16) to find when a launched ball returns to the ground." },
    { role: "Game developer", use: "Solves quadratic equations to find when a moving object collides with a surface in a physics engine." }
  ],
  life: [
    "Finding the size of a square rug or tablecloth that has a given area",
    "Working out how wide a border can be around a garden with a fixed amount of mulch",
    "Figuring out when a thrown ball lands",
    "Choosing the dimensions of a box or frame that must have a set area"
  ],
  fields: [
    { name: "Physics", use: "Projectile motion equations are quadratic in time, and their zeros are launch and landing times." },
    { name: "Geometry", use: "Area and Pythagorean-theorem problems often reduce to factorable quadratic equations." },
    { name: "Economics", use: "Break-even points of quadratic revenue and profit models are the zeros of those functions." },
    { name: "Calculus", use: "Critical points are found by factoring a derivative and setting each factor equal to zero." }
  ],
  prereqWhy: {
    "a1-factor-tri": "The method only works once you can factor a trinomial ax² + bx + c into two binomials."
  },
  unlocksWhy: {
    "a2-quad-form-eq": "After the substitution, the quadratic in <i>u</i> is usually solved by factoring a trinomial.",
    "a2-zeros-mult": "Reading the zeros and their multiplicities needs the polynomial in factored form, and factoring quadratics and common factors gets it there.",
    "a1-quad-sqrt": "Many quadratics do not factor over the integers, and the square root property and completing the square solve those."
  },
  beyond: [
    { field: "Algebra II", why: "Polynomial equations of degree three and higher are solved by factoring and applying the zero-product property to every factor." },
    { field: "Precalculus", why: "Zeros of polynomial and rational functions, and sign charts for polynomial inequalities, come from factored forms." },
    { field: "Calculus I", why: "Setting a factored derivative equal to zero is how maximum and minimum points are found." }
  ],
  mistakes: [
    { wrong: `Using the property when the product is not zero: from <span class="m">(<i>x</i> − 2)(<i>x</i> − 3) = 6</span> writing <span class="m"><i>x</i> − 2 = 6</span> or <span class="m"><i>x</i> − 3 = 6</span>.`, fix: `Expand and move the 6 first: <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> = 0</span>, so <span class="m"><i>x</i>(<i>x</i> − 5) = 0</span> and <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = 5</span>.` },
    { wrong: `Dividing both sides by <span class="m"><i>x</i></span>: from <span class="m">3<i>x</i><sup>2</sup> = 12<i>x</i></span> getting only <span class="m"><i>x</i> = 4</span>.`, fix: `Move terms and factor: <span class="m">3<i>x</i><sup>2</sup> − 12<i>x</i> = 3<i>x</i>(<i>x</i> − 4) = 0</span>, so <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = 4</span>.` },
    { wrong: `Sign errors on the roots: from <span class="m">(<i>x</i> + 12)(<i>x</i> − 9) = 0</span> writing <span class="m"><i>x</i> = 12</span> or <span class="m"><i>x</i> = −9</span>.`, fix: `Solve each factor: <span class="m"><i>x</i> + 12 = 0</span> gives <span class="m"><i>x</i> = −12</span>, and <span class="m"><i>x</i> − 9 = 0</span> gives <span class="m"><i>x</i> = 9</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">(<i>x</i> − 4)(<i>x</i> + 7) = 0</span>.`, a: `<span class="m"><i>x</i> − 4 = 0</span> or <span class="m"><i>x</i> + 7 = 0</span>, so <span class="m"><i>x</i> = 4</span> or <span class="m"><i>x</i> = −7</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> − 14 = 0</span>.`, a: `<span class="m">(<i>x</i> − 7)(<i>x</i> + 2) = 0</span>, so <span class="m"><i>x</i> = 7</span> or <span class="m"><i>x</i> = −2</span>. Check: <span class="m">49 − 35 − 14 = 0</span>.` },
    { q: `Solve <span class="m">3<i>x</i><sup>2</sup> = 12<i>x</i></span>.`, a: `<span class="m">3<i>x</i><sup>2</sup> − 12<i>x</i> = 0</span>, <span class="m">3<i>x</i>(<i>x</i> − 4) = 0</span>, so <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = 4</span>.` },
    { q: `Solve <span class="m">6<i>x</i><sup>2</sup> + <i>x</i> − 15 = 0</span>.`, a: `<span class="m">(2<i>x</i> − 3)(3<i>x</i> + 5) = 0</span>, so <span class="m"><i>x</i> = <span class="fr"><span>3</span><span>2</span></span></span> or <span class="m"><i>x</i> = −<span class="fr"><span>5</span><span>3</span></span></span>. Check: <span class="m">(2<i>x</i> − 3)(3<i>x</i> + 5) = 6<i>x</i><sup>2</sup> + 10<i>x</i> − 9<i>x</i> − 15</span>.` }
  ],
  origin: `Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631 after his death, formed polynomial equations by multiplying simple factors such as <span class="m">(<i>a</i> − <i>b</i>)</span> and <span class="m">(<i>a</i> − <i>c</i>)</span>, which shows how the factors of an equation are tied to its roots.`
};
