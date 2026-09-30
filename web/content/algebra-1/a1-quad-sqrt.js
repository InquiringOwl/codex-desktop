window.ARITH = window.ARITH || {};

ARITH["a1-quad-sqrt"] = {
  title: "Square Root Property & Completing the Square",
  short: "Make a perfect square, then take ± square roots",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Quadratic equations · solving without factoring",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><span class="c2"><i>x</i></span> + <span class="c1">(<span class="fr"><span><i>b</i></span><span>2</span></span>)<sup>2</sup></span> = (<span class="c2"><i>x</i></span> + <span class="fr"><span><span class="c3"><i>b</i></span></span><span>2</span></span>)<sup>2</sup></span>`,
  lede: `If <span class="m"><i>x</i><sup>2</sup> = <i>k</i></span>, then <span class="m"><i>x</i> = ±√<i>k</i></span>. Completing the square turns any quadratic into that form by adding the missing <span class="c1">corner</span> <span class="m">(<i>b</i>/2)<sup>2</sup></span>.`,
  plain: `<p>Some quadratics are easy without factoring. If <span class="m"><i>x</i><sup>2</sup> = 81</span>, then <span class="m"><i>x</i></span> is 9 or −9, because both square to 81. That is the <b>square root property</b>. The same works for a squared group: if <span class="m">(<i>x</i> − 3)<sup>2</sup> = 20</span>, then <span class="m"><i>x</i> − 3 = ±√20</span>. Remember the ± every time.</p>
<p>Completing the square is a way to force any quadratic into that shape. Picture <span class="m"><i>x</i><sup>2</sup> + <i>bx</i></span> as tiles: an <span class="m"><i>x</i></span>-by-<span class="m"><i>x</i></span> square and a strip <span class="m"><i>b</i></span> wide. Cut the strip in half and put one half on each side of the square. You almost have a bigger square. Only a small corner is missing, and its area is <span class="m">(<i>b</i>/2)<sup>2</sup></span>. Add that corner to both sides of the equation, and the left side becomes a perfect square.</p>
<p>If you end up with a squared quantity equal to a negative number, there is no real solution, because no real number squared is negative. When the <span class="m"><i>x</i><sup>2</sup></span> term has a coefficient other than 1, divide by it first.</p>`,
  formal: `<p><b>Square root property</b>: for a real number <span class="m"><i>k</i></span>,</p>
<div class="display"><i>X</i><sup>2</sup> = <i>k</i>, <i>k</i> &gt; 0 &nbsp;⇒&nbsp; <i>X</i> = √<i>k</i> or <i>X</i> = −√<i>k</i> <span class="dim">(written <i>X</i> = ±√<i>k</i>)</span><br><i>X</i><sup>2</sup> = 0 &nbsp;⇒&nbsp; <i>X</i> = 0 &nbsp;&nbsp; <i>X</i><sup>2</sup> = <i>k</i>, <i>k</i> &lt; 0 &nbsp;⇒&nbsp; no real solution</div>
<p><b>Completing the square</b>: since <span class="m">(<i>x</i> + <i>b</i>/2)<sup>2</sup> = <i>x</i><sup>2</sup> + <i>bx</i> + (<i>b</i>/2)<sup>2</sup></span>, adding <span class="m">(<i>b</i>/2)<sup>2</sup></span> to <span class="m"><i>x</i><sup>2</sup> + <i>bx</i></span> produces a perfect square trinomial. To solve <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with <span class="m"><i>a</i> ≠ 0</span>: divide by <span class="m"><i>a</i></span>, move the constant, add <span class="m">(<i>b</i>/(2<i>a</i>))<sup>2</sup></span> to both sides, and apply the square root property. The principal square root <span class="m">√<i>k</i></span> is the nonnegative root, so the ± is needed to obtain both solutions.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "The variable", desc: "The side of the big square in the tile picture, and the unknown in the equation." },
    { c: "c3", sym: `<i>b</i>`, name: "Linear coefficient", desc: "The coefficient of x once the leading coefficient is 1. It is split into two strips of width b/2." },
    { c: "c1", sym: `(<i>b</i>/2)<sup>2</sup>`, name: "Missing corner", desc: "The number added to both sides to complete the square." },
    { c: "c4", sym: `±√<i>k</i>`, name: "Both square roots", desc: "The positive and negative roots from the square root property. If k is negative there is no real solution." }
  ],
  steps: { title: "How to solve by completing the square", items: [
    `If the coefficient of <span class="m"><i>x</i><sup>2</sup></span> is not 1, divide every term by it.`,
    `Move the constant term to the right side, leaving <span class="m"><i>x</i><sup>2</sup> + <span class="c3"><i>b</i></span><i>x</i></span> on the left.`,
    `Take half of <span class="m c3"><i>b</i></span>, square it, and add <span class="m c1">(<i>b</i>/2)<sup>2</sup></span> to <b>both</b> sides.`,
    `Write the left side as <span class="m">(<i>x</i> + <i>b</i>/2)<sup>2</sup></span> and simplify the right side.`,
    `Apply the square root property: <span class="m"><i>x</i> + <i>b</i>/2 = ±√<i>k</i></span>. If <span class="m"><i>k</i> &lt; 0</span>, there is no real solution.`,
    `Solve for <span class="m"><i>x</i></span>, simplify the radical, and check.`
  ] },
  example: {
    prompt: `A rectangular garden bed is to be 4 m longer than it is wide and have an area of 50 m². How wide should it be, to the nearest centimetre?`,
    lines: [
      { math: `<span class="m"><i>w</i>(<i>w</i> + 4) = 50 &nbsp;⇒&nbsp; <i>w</i><sup>2</sup> + <span class="c3">4</span><i>w</i> = 50</span>`, note: "Let w be the width in metres. The trinomial w² + 4w − 50 does not factor over the integers." },
      { math: `<span class="m"><i>w</i><sup>2</sup> + 4<i>w</i> + <span class="c1">4</span> = 50 + <span class="c1">4</span></span>`, note: "Half of 4 is 2, and 2² = 4. Add it to both sides." },
      { math: `<span class="m">(<i>w</i> + 2)<sup>2</sup> = 54</span>`, note: "The left side is now a perfect square." },
      { math: `<span class="m"><i>w</i> + 2 = ±√54 = ±3√6</span>`, note: "Square root property; √54 = √9 · √6." },
      { math: `<span class="m"><i>w</i> = −2 + 3√6 ≈ 5.35</span>`, note: "Reject −2 − 3√6, which is negative." },
      { math: `<span class="m">5.348 × 9.348 ≈ 50.0 ✓</span>`, note: "Check: width about 5.35 m, length about 9.35 m." }
    ],
    answer: `The bed should be <span class="m">−2 + 3√6 ≈ 5.35</span> m wide and about <span class="m">9.35</span> m long.`
  },
  why: `<p>Most quadratic equations from real measurements do not factor over the integers. The square root property handles the common case of a squared quantity equal to a number, such as distance fallen <span class="m"><i>d</i> = 16<i>t</i><sup>2</sup></span> or area <span class="m"><i>A</i> = <i>s</i><sup>2</sup></span>. Completing the square handles everything else, and it always works.</p>
<p>Completing the square is also a tool in its own right. Applied to the general equation it produces the quadratic formula. Applied to a function it gives vertex form, which shows the maximum or minimum. Later it is used to find the centre and radius of a circle from its equation, and to evaluate integrals in calculus.</p>`,
  careers: [
    { role: "Physicist", use: "Solves d = ½gt² for time with the square root property to find how long an object takes to fall a given distance." },
    { role: "Civil engineer", use: "Completes the square in road and bridge profile equations to locate the highest or lowest point of a parabolic curve." },
    { role: "Surveyor", use: "Finds the side of a square plot from its area, s = √A, when laying out lots." },
    { role: "Statistician", use: "Completes the square in the exponent of the normal distribution when deriving results about means." },
    { role: "Computer graphics programmer", use: "Rewrites circle and sphere equations by completing the square to find centres and radii for collision tests." }
  ],
  life: [
    "Finding the side length of a square room from its floor area",
    "Working out how long a dropped object takes to hit the ground",
    "Sizing a garden or rug with a set area and a fixed length-to-width difference",
    "Estimating the size of a square TV screen from its area"
  ],
  fields: [
    { name: "Physics", use: "Free-fall and energy equations are solved for time or speed with the square root property." },
    { name: "Analytic geometry", use: "Circle, ellipse and parabola equations are put in standard form by completing the square." },
    { name: "Statistics", use: "Completing the square appears in deriving properties of the normal distribution and in least squares." },
    { name: "Engineering", use: "Optimisation of quadratic cost or energy functions uses vertex form found by completing the square." }
  ],
  prereqWhy: {
    "a1-quad-factor": "You need standard form, the idea of roots and perfect square trinomials from factoring before you can build one on purpose.",
    "a1-radicals": "Solutions come out as square roots, which must be simplified, such as √54 = 3√6."
  },
  unlocksWhy: {
    "a1-quad-formula": "The quadratic formula is completing the square carried out once on the general equation ax² + bx + c = 0."
  },
  beyond: [
    { field: "Algebra II", why: "Completing the square gives vertex form of parabolas and is used to solve quadratics with complex solutions." },
    { field: "Precalculus", why: "Conic sections such as circles and ellipses are identified and graphed by completing the square in x and y." },
    { field: "Calculus II", why: "Integrals like ∫ 1/(x² + 4x + 13) dx are evaluated by completing the square first." },
    { field: "Statistics", why: "Derivations involving the normal distribution complete the square in the exponent." }
  ],
  mistakes: [
    { wrong: `Forgetting the negative root: from <span class="m"><i>x</i><sup>2</sup> = 81</span> writing only <span class="m"><i>x</i> = 9</span>.`, fix: `Both <span class="m">9<sup>2</sup></span> and <span class="m">(−9)<sup>2</sup></span> are 81, so <span class="m"><i>x</i> = ±9</span>.` },
    { wrong: `Adding <span class="m">(<i>b</i>/2)<sup>2</sup></span> to only one side: <span class="m"><i>w</i><sup>2</sup> + 4<i>w</i> + 4 = 50</span>.`, fix: `Add it to both sides to keep the equation balanced: <span class="m"><i>w</i><sup>2</sup> + 4<i>w</i> + 4 = 54</span>.` },
    { wrong: `Completing the square with a leading coefficient that is not 1: for <span class="m">2<i>x</i><sup>2</sup> − 12<i>x</i> + 7 = 0</span> adding <span class="m">(−12/2)<sup>2</sup> = 36</span>.`, fix: `Divide by 2 first: <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> + <span class="fr"><span>7</span><span>2</span></span> = 0</span>, then add <span class="m">(−3)<sup>2</sup> = 9</span>.` },
    { wrong: `Taking the square root term by term: <span class="m">√(<i>x</i><sup>2</sup> + 9) = <i>x</i> + 3</span>.`, fix: `A square root does not split over addition. Only a perfect square like <span class="m">(<i>x</i> + 3)<sup>2</sup></span> has square root <span class="m">|<i>x</i> + 3|</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> = 81</span>.`, a: `<span class="m"><i>x</i> = ±√81 = ±9</span>.` },
    { q: `Solve <span class="m">(<i>x</i> − 3)<sup>2</sup> = 20</span>.`, a: `<span class="m"><i>x</i> − 3 = ±√20 = ±2√5</span>, so <span class="m"><i>x</i> = 3 ± 2√5</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> + 16 = 0</span>.`, a: `<span class="m"><i>x</i><sup>2</sup> = −16</span>. No real number squared is negative, so there is <b>no real solution</b>.` },
    { q: `Solve <span class="m">2<i>x</i><sup>2</sup> − 12<i>x</i> + 7 = 0</span> by completing the square.`, a: `Divide by 2: <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> = −<span class="fr"><span>7</span><span>2</span></span></span>. Add 9: <span class="m">(<i>x</i> − 3)<sup>2</sup> = <span class="fr"><span>11</span><span>2</span></span></span>. So <span class="m"><i>x</i> = 3 ± √(11/2) = 3 ± <span class="fr"><span>√22</span><span>2</span></span></span>.` }
  ],
  origin: `In his book on <i>al-jabr</i> (about 820 CE), Muhammad ibn Musa al-Khwarizmi solved <span class="m"><i>x</i><sup>2</sup> + 10<i>x</i> = 39</span> by drawing a square with rectangles on its sides and literally completing the square with the missing corner, getting <span class="m"><i>x</i> = 3</span>. Babylonian scribes used an equivalent procedure on clay tablets around 1800 BCE.`
};
