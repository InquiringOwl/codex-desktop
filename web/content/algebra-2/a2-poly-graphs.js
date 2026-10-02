window.ARITH = window.ARITH || {};

ARITH["a2-poly-graphs"] = {
  title: "Polynomial Functions & End Behavior",
  short: "Degree and leading coefficient decide where the ends go",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomial functions · degree, end behavior and turning points",
  hero: `<span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span> = <span class="c3">−2<i>x</i><sup>3</sup></span> + 5<i>x</i> + 1: &nbsp;<span class="c4"><i>x</i> → −∞, <i>f</i>(<i>x</i>) → ∞; &nbsp;<i>x</i> → ∞, <i>f</i>(<i>x</i>) → −∞</span></span>`,
  lede: `Far from the origin a polynomial behaves like its <span class="c3">leading term</span>. The degree and the sign of the leading coefficient tell you where both <span class="c4">ends</span> of the <span class="c1">graph</span> go, and the degree limits how many <span class="c2">turning points</span> and zeros it can have.`,
  plain: `<p>A polynomial function is a sum of terms like <span class="m">5<i>x</i><sup>3</sup></span>, <span class="m">−<i>x</i></span> and <span class="m">7</span>: whole-number powers of <span class="m"><i>x</i></span> times numbers. The highest power is the <b>degree</b>, and the term that carries it is the <span class="c3">leading term</span>. Its number is the <b>leading coefficient</b>.</p>
<p>For large <span class="m"><i>x</i></span> the leading term is much bigger than all the others. At <span class="m"><i>x</i> = 100</span>, <span class="m"><i>x</i><sup>3</sup> − 12<i>x</i></span> is <span class="m">998,800</span>, which is <span class="m">99.88%</span> of <span class="m"><i>x</i><sup>3</sup></span> alone. So the ends of the graph go where the ends of the leading term go. An even power sends both ends the same way, like a parabola. An odd power sends them opposite ways, like <span class="m"><i>y</i> = <i>x</i><sup>3</sup></span>. A negative leading coefficient flips both.</p>
<p>In the middle the lower terms make the graph wiggle. Each place where it changes from rising to falling, or the other way, is a <span class="c2">turning point</span>. A polynomial of degree <span class="m"><i>n</i></span> has at most <span class="m"><i>n</i> − 1</span> of them and crosses or touches the <span class="m"><i>x</i></span>-axis at most <span class="m"><i>n</i></span> times.</p>`,
  formal: `<p>A <b>polynomial function</b> of degree <span class="m"><i>n</i></span> is <span class="m"><i>f</i>(<i>x</i>) = <span class="c3"><i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup></span> + <i>a</i><sub><i>n</i>−1</sub><i>x</i><sup><i>n</i>−1</sup> + ⋯ + <i>a</i><sub>1</sub><i>x</i> + <i>a</i><sub>0</sub></span>, where <span class="m"><i>n</i></span> is a nonnegative integer, the coefficients are real and <span class="m"><i>a</i><sub><i>n</i></sub> ≠ 0</span>. Its graph is smooth and continuous. A <b>power function</b> is <span class="m"><i>f</i>(<i>x</i>) = <i>kx</i><sup><i>n</i></sup></span>.</p>
<p><b>Leading coefficient test.</b> The <span class="c4">end behavior</span> of <span class="m"><i>f</i></span> is that of <span class="c3"><span class="m"><i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup></span></span>:</p>
<div class="display"><i>n</i> even, <i>a</i><sub><i>n</i></sub> &gt; 0: &nbsp;<i>x</i> → ±∞, <i>f</i>(<i>x</i>) → ∞ &nbsp; &nbsp; <i>n</i> even, <i>a</i><sub><i>n</i></sub> &lt; 0: &nbsp;<i>x</i> → ±∞, <i>f</i>(<i>x</i>) → −∞<br><i>n</i> odd, <i>a</i><sub><i>n</i></sub> &gt; 0: &nbsp;<i>x</i> → −∞, <i>f</i>(<i>x</i>) → −∞; <i>x</i> → ∞, <i>f</i>(<i>x</i>) → ∞<br><i>n</i> odd, <i>a</i><sub><i>n</i></sub> &lt; 0: &nbsp;<i>x</i> → −∞, <i>f</i>(<i>x</i>) → ∞; <i>x</i> → ∞, <i>f</i>(<i>x</i>) → −∞</div>
<p>A polynomial of degree <span class="m"><i>n</i> ≥ 1</span> has at most <span class="m"><i>n</i></span> real zeros and at most <span class="m"><i>n</i> − 1</span> <span class="c2">turning points</span>. It is an <b>even function</b>, <span class="m"><i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>)</span>, with a graph symmetric about the <span class="m"><i>y</i></span>-axis, when every power of <span class="m"><i>x</i></span> is even, as in <span class="m"><i>x</i><sup>4</sup> − 3<i>x</i><sup>2</sup> + 1</span>. It is an <b>odd function</b>, <span class="m"><i>f</i>(−<i>x</i>) = −<i>f</i>(<i>x</i>)</span>, symmetric about the origin, when every power is odd, as in <span class="m"><i>x</i><sup>3</sup> − 4<i>x</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>f</i>(<i>x</i>)`, name: "The polynomial", desc: "Its graph is one smooth, unbroken curve with no corners or gaps." },
    { c: "c3", sym: `<i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup>`, name: "Leading term", desc: "The term with the highest power. It decides the end behavior." },
    { c: "c4", sym: `↗ ↘`, name: "End behavior", desc: "Where f(x) goes as x → −∞ and as x → ∞, written with arrows." },
    { c: "c2", sym: `≤ <i>n</i> − 1`, name: "Turning points", desc: "Where the graph changes from rising to falling or back. At most n − 1 of them." }
  ],
  steps: { title: "How to describe a polynomial's graph", items: [
    `Find the <span class="c3">leading term</span>. In factored form, multiply the leading term of each factor, raised to its power.`,
    `Read off the degree <span class="m"><i>n</i></span> and the leading coefficient <span class="m"><i>a</i><sub><i>n</i></sub></span>.`,
    `Use the leading coefficient test: even <span class="m"><i>n</i></span> means both <span class="c4">ends</span> go the same way, odd <span class="m"><i>n</i></span> opposite ways; <span class="m"><i>a</i><sub><i>n</i></sub> &lt; 0</span> flips the picture.`,
    `State the bounds: at most <span class="m"><i>n</i></span> real zeros and at most <span class="m"><i>n</i> − 1</span> <span class="c2">turning points</span>.`,
    `Check for symmetry: only even powers gives an even function, only odd powers an odd function. A constant term counts as an even power.`,
    `Find the <span class="m"><i>y</i></span>-intercept <span class="m"><i>f</i>(0)</span> and any zeros you can, then sketch.`
  ] },
  example: {
    prompt: `For <span class="m"><i>f</i>(<i>x</i>) = −3<i>x</i><sup>2</sup>(<i>x</i> − 1)(<i>x</i> + 4)</span>, find the degree, the leading coefficient and the end behavior, state the bounds on zeros and turning points, and say whether <span class="m"><i>f</i></span> is even, odd or neither.`,
    lines: [
      { math: `<span class="m"><span class="c3">−3<i>x</i><sup>2</sup> · <i>x</i> · <i>x</i> = −3<i>x</i><sup>4</sup></span></span>`, note: "Multiply the leading term of every factor to get the leading term." },
      { math: `<span class="m"><i>f</i>(<i>x</i>) = <span class="c3">−3<i>x</i><sup>4</sup></span> − 9<i>x</i><sup>3</sup> + 12<i>x</i><sup>2</sup></span>`, note: "Expanding confirms it: degree 4, leading coefficient −3." },
      { math: `<span class="m c4"><i>x</i> → −∞, <i>f</i>(<i>x</i>) → −∞; &nbsp;<i>x</i> → ∞, <i>f</i>(<i>x</i>) → −∞</span>`, note: "Even degree and a negative leading coefficient: both ends fall." },
      { math: `<span class="m">at most 4 real zeros, at most <span class="c2">3</span> turning points</span>`, note: "Degree n = 4 gives n zeros and n − 1 turning points at most." },
      { math: `<span class="m"><i>f</i>(<i>x</i>) = 0 ⇒ <i>x</i> = 0, 1, −4</span>`, note: "Set each factor to zero. The factor x² gives the zero 0 twice." },
      { math: `<span class="m"><i>f</i>(−<i>x</i>) = −3<i>x</i><sup>4</sup> + 9<i>x</i><sup>3</sup> + 12<i>x</i><sup>2</sup></span>`, note: "This is neither f(x) nor −f(x), because the powers are mixed." },
      { math: `<span class="m"><span class="c2">turning points</span> near <i>x</i> ≈ −2.93, 0, 0.68</span>`, note: "A graph shows all three, the most a degree-4 polynomial can have." }
    ],
    answer: `Degree 4, leading coefficient −3, both ends fall (<span class="m"><i>x</i> → ±∞, <i>f</i>(<i>x</i>) → −∞</span>), at most 4 real zeros and 3 turning points, and <span class="m"><i>f</i></span> is neither even nor odd.`
  },
  why: `<p>Before you plot a single point, the degree and the leading coefficient already tell you the overall shape of a polynomial graph. That is the first check on any sketch, any calculator window and any model: a cubic cost model that rises forever, a quartic that falls at both ends, a quadratic profit curve that comes back down.</p>
<p>The same idea, that the biggest term wins for large inputs, is how scientists and programmers compare growth. An algorithm whose running time is <span class="m">3<i>n</i><sup>2</sup> + 500<i>n</i></span> is a quadratic algorithm, because for large <span class="m"><i>n</i></span> the <span class="m"><i>n</i><sup>2</sup></span> term is all that matters.</p>`,
  careers: [
    { role: "Software engineer", use: "Compares algorithms by the leading term of their operation counts, such as 3n² + 500n growing like n²." },
    { role: "Data scientist", use: "Checks the end behavior of a polynomial regression before trusting it outside the range of the data." },
    { role: "Civil engineer", use: "Models beam deflection with fourth-degree polynomials and reads where the curve turns." },
    { role: "Economist", use: "Fits cubic cost functions and uses the leading coefficient to check that costs keep rising for large output." },
    { role: "Animation programmer", use: "Builds smooth motion from cubic polynomial segments and controls where each one turns." },
    { role: "Roller coaster designer", use: "Shapes track profiles from polynomial pieces and counts the hills and dips each degree allows." }
  ],
  life: [
    "Telling whether a trend line will keep rising or eventually fall",
    "Choosing a sensible calculator window for a graph",
    "Seeing why a cubic growth model can overshoot over time",
    "Spotting symmetric shapes such as a bowl or an S-curve in data",
    "Judging which term of a cost formula matters most for big orders"
  ],
  fields: [
    { name: "Computer science", use: "Big-O notation keeps only the leading term of a running-time polynomial." },
    { name: "Physics", use: "Potential energy curves are approximated by polynomials whose turning points are equilibria." },
    { name: "Statistics", use: "Polynomial regression fits data with a chosen degree and its end behavior limits extrapolation." },
    { name: "Engineering", use: "Cubic splines join polynomial pieces into smooth curves for roads, tracks and car bodies." }
  ],
  prereqWhy: {
    "a2-transformations": "Every power function xⁿ is a parent graph, and stretching or reflecting it with a explains how the leading coefficient changes the ends.",
    "a1-poly-mult": "Finding the leading term of a factored polynomial, or expanding it to standard form, is polynomial multiplication."
  },
  unlocksWhy: {
    "a2-zeros-mult": "Sketching from factors starts from the end behavior, then fills in the middle with the zeros and how the graph meets the axis at each."
  },
  beyond: [
    { field: "Calculus I", why: "Turning points are found exactly where the derivative is zero, and limits at infinity make end behavior precise." },
    { field: "Precalculus", why: "End behavior of polynomials is the first step in finding the horizontal and slant asymptotes of rational functions." },
    { field: "Computer science", why: "Growth rates of algorithms are compared by the degree of their leading terms." }
  ],
  mistakes: [
    { wrong: `Reading the first written term as the leading term: in <span class="m"><i>f</i>(<i>x</i>) = 3 + 2<i>x</i> − <i>x</i><sup>4</sup></span>, saying the leading coefficient is 3.`, fix: `The leading term has the highest power, here <span class="m">−<i>x</i><sup>4</sup></span>. The leading coefficient is <span class="m">−1</span>, so both ends fall.` },
    { wrong: `Thinking a degree-<span class="m"><i>n</i></span> polynomial always has <span class="m"><i>n</i> − 1</span> turning points.`, fix: `That is only the maximum. <span class="m"><i>x</i><sup>3</sup></span> has degree 3 and no turning points; <span class="m"><i>x</i><sup>3</sup> − 3<i>x</i></span> has two.` },
    { wrong: `Calling <span class="m"><i>x</i><sup>2</sup> + <i>x</i></span> an even function because its degree is even.`, fix: `Even and odd functions are about symmetry. <span class="m"><i>f</i>(−<i>x</i>) = <i>x</i><sup>2</sup> − <i>x</i></span>, which is neither <span class="m"><i>f</i>(<i>x</i>)</span> nor <span class="m">−<i>f</i>(<i>x</i>)</span>, so the function is neither.` },
    { wrong: `Taking the leading term of <span class="m">(2<i>x</i> − 1)<sup>2</sup>(<i>x</i> + 3)</span> as <span class="m">2<i>x</i> · <i>x</i> = 2<i>x</i><sup>2</sup></span>.`, fix: `The square applies to the leading term too: <span class="m">(2<i>x</i>)<sup>2</sup> · <i>x</i> = 4<i>x</i><sup>3</sup></span>, degree 3.` }
  ],
  practice: [
    { q: `Describe the end behavior of <span class="m"><i>f</i>(<i>x</i>) = −5<i>x</i><sup>3</sup> + 2<i>x</i> − 7</span>.`, a: `Leading term <span class="m">−5<i>x</i><sup>3</sup></span>: odd degree, negative coefficient. As <span class="m"><i>x</i> → −∞</span>, <span class="m"><i>f</i>(<i>x</i>) → ∞</span>; as <span class="m"><i>x</i> → ∞</span>, <span class="m"><i>f</i>(<i>x</i>) → −∞</span>.` },
    { q: `Find the degree, leading coefficient and end behavior of <span class="m"><i>f</i>(<i>x</i>) = (2<i>x</i> − 1)<sup>2</sup>(<i>x</i> + 3)(<i>x</i> − 4)</span>.`, a: `Leading term <span class="m">(2<i>x</i>)<sup>2</sup> · <i>x</i> · <i>x</i> = 4<i>x</i><sup>4</sup></span>, so degree 4 and leading coefficient 4. Even degree, positive coefficient: as <span class="m"><i>x</i> → ±∞</span>, <span class="m"><i>f</i>(<i>x</i>) → ∞</span>. Expanded, <span class="m"><i>f</i>(<i>x</i>) = 4<i>x</i><sup>4</sup> − 8<i>x</i><sup>3</sup> − 43<i>x</i><sup>2</sup> + 47<i>x</i> − 12</span>.` },
    { q: `Is each function even, odd or neither? <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i><sup>4</sup> − <i>x</i><sup>2</sup> + 3</span>, &nbsp;<span class="m"><i>g</i>(<i>x</i>) = <i>x</i><sup>5</sup> − 3<i>x</i><sup>3</sup> + <i>x</i></span>, &nbsp;<span class="m"><i>h</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 1</span>.`, a: `<span class="m"><i>f</i>(−<i>x</i>) = <i>f</i>(<i>x</i>)</span>: even. <span class="m"><i>g</i>(−<i>x</i>) = −<i>x</i><sup>5</sup> + 3<i>x</i><sup>3</sup> − <i>x</i> = −<i>g</i>(<i>x</i>)</span>: odd. <span class="m"><i>h</i>(−<i>x</i>) = −<i>x</i><sup>3</sup> + 1</span>, which is neither <span class="m"><i>h</i>(<i>x</i>)</span> nor <span class="m">−<i>h</i>(<i>x</i>) = −<i>x</i><sup>3</sup> − 1</span>: neither.` },
    { q: `The graph of a polynomial rises to the left, falls to the right and has 4 turning points. What is the least possible degree, and what is the sign of the leading coefficient? Give an example.`, a: `Ends going opposite ways means the degree is odd, and falling on the right means the leading coefficient is negative. Four turning points need <span class="m"><i>n</i> − 1 ≥ 4</span>, so the least odd degree is <span class="m">5</span>. Example: <span class="m"><i>f</i>(<i>x</i>) = −<i>x</i>(<i>x</i><sup>2</sup> − 1)(<i>x</i><sup>2</sup> − 4) = −<i>x</i><sup>5</sup> + 5<i>x</i><sup>3</sup> − 4<i>x</i></span>, which has exactly 4 turning points.` }
  ],
  origin: `Polynomial equations go back to Babylonian tablets, but polynomial functions as curves came with the coordinate geometry of René Descartes and Pierre de Fermat in the 1630s. Isaac Newton classified cubic curves in 1704, and the leading-term argument for end behavior became standard once limits were made precise in the 1800s.`
};
