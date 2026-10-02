window.ARITH = window.ARITH || {};

ARITH["a2-factor-theorem"] = {
  title: "Factor Theorem & Rational Root Theorem",
  short: "List ±p/q, test with synthetic division, factor completely",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Polynomial functions · finding zeros",
  hero: `<span class="m"><span class="c1"><i>P</i></span>(<span class="c5">3</span>) = 0 &nbsp;⇒&nbsp; <span class="c1"><i>P</i>(<i>x</i>)</span> = (<i>x</i> − <span class="c5">3</span>)(<span class="c2">2<i>x</i><sup>2</sup> + 3<i>x</i> − 2</span>)</span>`,
  lede: `A number <span class="m c5"><i>r</i></span> is a zero of <span class="m c1"><i>P</i></span> exactly when <span class="m"><i>x</i> − <span class="c5"><i>r</i></span></span> is a factor. The Rational Root Theorem gives a short list of <span class="c4">candidates</span> <span class="m">±<i>p</i>/<i>q</i></span>; synthetic division tests them and leaves a smaller <span class="c2">quotient</span> to factor.`,
  plain: `<p>Synthetic division by <span class="m"><i>x</i> − <i>r</i></span> leaves a remainder equal to <span class="m"><i>P</i>(<i>r</i>)</span>. When that remainder is 0, the division comes out even, and <span class="m"><i>x</i> − <i>r</i></span> is a factor. That is the <b>Factor Theorem</b>: zeros and linear factors are the same information.</p>
<p>The hard part is guessing a zero to try. If the coefficients are integers, any rational zero <span class="m"><i>p</i>/<i>q</i></span> in lowest terms has <span class="m"><i>p</i></span> dividing the constant term and <span class="m"><i>q</i></span> dividing the leading coefficient. For <span class="m">2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 11<i>x</i> + 6</span> that leaves twelve <span class="c4">candidates</span>: <span class="m">±1, ±2, ±3, ±6, ±<span class="fr"><span>1</span><span>2</span></span>, ±<span class="fr"><span>3</span><span>2</span></span></span>. Nothing else can be a rational zero.</p>
<p>Test candidates with synthetic division until one gives remainder 0. Then work with the <span class="c2">quotient</span>, which is one degree lower. This is called <b>deflating</b> the polynomial. Once it is down to a quadratic, factor it or use the quadratic formula. Every <span class="c5">zero</span> you found gives one factor of the answer.</p>`,
  formal: `<p><b>Factor Theorem.</b> For a polynomial <span class="m"><i>P</i></span> and a number <span class="m"><i>r</i></span>, <span class="m"><i>x</i> − <i>r</i></span> is a factor of <span class="m"><i>P</i>(<i>x</i>)</span> if and only if <span class="m"><i>P</i>(<i>r</i>) = 0</span>. It follows from <span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> − <i>r</i>)<i>Q</i>(<i>x</i>) + <i>P</i>(<i>r</i>)</span>.</p>
<p><b>Rational Root Theorem.</b> Let <span class="m"><i>P</i>(<i>x</i>) = <i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup> + ⋯ + <i>a</i><sub>1</sub><i>x</i> + <i>a</i><sub>0</sub></span> have integer coefficients with <span class="m"><i>a</i><sub><i>n</i></sub> ≠ 0</span> and <span class="m"><i>a</i><sub>0</sub> ≠ 0</span>. If <span class="m"><i>p</i>/<i>q</i></span> in lowest terms is a zero of <span class="m"><i>P</i></span>, then <span class="m"><i>p</i></span> divides <span class="m"><i>a</i><sub>0</sub></span> and <span class="m"><i>q</i></span> divides <span class="m"><i>a</i><sub><i>n</i></sub></span>. The theorem only lists <span class="c4">candidates</span>; a polynomial can have no rational zeros at all, such as <span class="m"><i>x</i><sup>2</sup> − 2</span>, whose candidates <span class="m">±1, ±2</span> all fail.</p>
<p>Descartes' rule of signs can shorten the list. The number of positive real zeros equals the number of sign changes in the coefficients of <span class="m"><i>P</i>(<i>x</i>)</span>, or is less than it by an even number; <span class="m"><i>P</i>(−<i>x</i>)</span> does the same for negative zeros. For <span class="m">2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 11<i>x</i> + 6</span> the signs <span class="m">+ − − +</span> change twice and those of <span class="m"><i>P</i>(−<i>x</i>) = −2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> + 11<i>x</i> + 6</span> change once, so there are 2 or 0 positive zeros and exactly 1 negative zero.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>(<i>x</i>)`, name: "The polynomial", desc: "Integer coefficients, written in descending powers." },
    { c: "c4", sym: `±<i>p</i>/<i>q</i>`, name: "Candidates", desc: "p divides the constant term, q divides the leading coefficient. The only possible rational zeros." },
    { c: "c5", sym: `<i>r</i>`, name: "Zeros found", desc: "Candidates whose synthetic division leaves remainder 0. Each gives a factor x − r." },
    { c: "c2", sym: `<i>Q</i>(<i>x</i>)`, name: "Quotient", desc: "What is left after dividing out x − r: one degree lower, and it holds the remaining zeros." }
  ],
  steps: { title: "How to factor a polynomial completely", items: [
    `Factor out any common factor, and any power of <span class="m"><i>x</i></span> if the constant term is 0.`,
    `List the <span class="c4">candidates</span> <span class="m">±<i>p</i>/<i>q</i></span>: every factor <span class="m"><i>p</i></span> of the constant term over every factor <span class="m"><i>q</i></span> of the leading coefficient.`,
    `Test candidates with synthetic division, starting with small integers. A graph or Descartes' rule of signs can tell you where to look first.`,
    `When the remainder is 0, record the <span class="c5">zero</span> <span class="m"><i>r</i></span> and the factor <span class="m"><i>x</i> − <i>r</i></span>, and continue with the <span class="c2">quotient</span>. A zero can repeat, so test it again on the quotient.`,
    `When the quotient is quadratic, factor it or use the quadratic formula. Its zeros may be irrational or not real.`,
    `Write <span class="m"><i>P</i></span> as the leading coefficient times all the factors, and check by multiplying out or by one value of <span class="m"><i>x</i></span>.`
  ] },
  example: {
    prompt: `Factor <span class="m"><i>P</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 11<i>x</i> + 6</span> completely and list its zeros.`,
    lines: [
      { math: `<span class="m"><i>p</i> ∈ {1, 2, 3, 6}, &nbsp; <i>q</i> ∈ {1, 2} &nbsp;⇒&nbsp; <span class="c4">±1, ±2, ±3, ±6, ±<span class="fr"><span>1</span><span>2</span></span>, ±<span class="fr"><span>3</span><span>2</span></span></span></span>`, note: "p divides the constant 6, q divides the leading coefficient 2." },
      { math: `<span class="m"><i>P</i>(1) = 2 − 3 − 11 + 6 = −6 ≠ 0</span>`, note: "1 is not a zero, so x − 1 is not a factor." },
      { math: `<span class="m"><span class="c5">3</span> | 2 &nbsp; −3 &nbsp; −11 &nbsp; 6 &nbsp;→&nbsp; <span class="c2">2 &nbsp; 3 &nbsp; −2</span> | 0</span>`, note: "Synthetic division by x − 3 leaves remainder 0, so 3 is a zero." },
      { math: `<span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> − <span class="c5">3</span>)(<span class="c2">2<i>x</i><sup>2</sup> + 3<i>x</i> − 2</span>)</span>`, note: "By the Factor Theorem. The quotient is a quadratic." },
      { math: `<span class="m"><span class="c2">2<i>x</i><sup>2</sup> + 3<i>x</i> − 2</span> = (2<i>x</i> − 1)(<i>x</i> + 2)</span>`, note: "Factor the quadratic: (2x)(x) = 2x², (−1)(2) = −2, and 4x − x = 3x." },
      { math: `<span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> − 3)(2<i>x</i> − 1)(<i>x</i> + 2)</span>`, note: "Completely factored over the integers." },
      { math: `<span class="m">zeros <span class="c5">3, <span class="fr"><span>1</span><span>2</span></span>, −2</span></span>`, note: "All three are on the candidate list, as the theorem requires." }
    ],
    answer: `<span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> − 3)(2<i>x</i> − 1)(<i>x</i> + 2)</span>, with zeros <span class="m c5">3, <span class="fr"><span>1</span><span>2</span></span> and −2</span>.`
  },
  why: `<p>Quadratics have a formula. Cubics and quartics have formulas too, but they are long and almost never used by hand. For polynomials with integer coefficients the Rational Root Theorem turns an open search into a finite list, and the Factor Theorem turns each zero found into a factor that lowers the degree. Together they solve most polynomial equations met in courses and applications.</p>
<p>Finding zeros is how you sketch a polynomial, solve a polynomial inequality, size a box with a given volume or find where a cost model breaks even. The same "divide out a known root" idea is used by computer algebra systems to factor polynomials exactly.</p>`,
  careers: [
    { role: "Packaging engineer", use: "Solves cubic volume equations such as x(20 − 2x)(30 − 2x) = 1008 by testing rational candidates to find box dimensions." },
    { role: "Control systems engineer", use: "Finds the roots of a characteristic polynomial, dividing out known poles, to decide whether a system is stable." },
    { role: "Computer algebra developer", use: "Builds exact factoring routines that start by testing rational roots and deflating the polynomial." },
    { role: "Cryptographer", use: "Factors polynomials over the integers and finite fields when building and analysing error-correcting and encryption schemes." },
    { role: "Financial analyst", use: "Finds the internal rate of return as a root of a polynomial in 1 + r, often by testing values and deflating." },
    { role: "Mechanical engineer", use: "Solves the cubic characteristic equation of a stress tensor for the principal stresses." }
  ],
  life: [
    "Working out the size of a box cut from a sheet to hold a given volume",
    "Checking whether a guessed answer really solves a cubic equation",
    "Factoring a polynomial on a test without the cubic formula",
    "Understanding why some equations have only irrational or no real solutions",
    "Narrowing a search to a short list of possibilities before trying them"
  ],
  fields: [
    { name: "Engineering", use: "Stability and vibration problems reduce to the roots of characteristic polynomials." },
    { name: "Computer science", use: "Exact polynomial factoring in computer algebra systems begins with rational roots." },
    { name: "Economics", use: "Break-even points and internal rates of return are zeros of polynomial models." },
    { name: "Number theory", use: "The Rational Root Theorem proves numbers such as the square root of 2 and the cube root of 5 are irrational." }
  ],
  prereqWhy: {
    "a2-synthetic": "Every candidate is tested by synthetic division, and its bottom row is the quotient used to deflate the polynomial.",
    "a1-factor-tri": "The last step factors the quadratic quotient, often with a leading coefficient other than 1."
  },
  unlocksWhy: {
    "a2-fta": "Deflating by each zero found is how a degree-n polynomial is split into n linear factors over the complex numbers."
  },
  beyond: [
    { field: "Precalculus", why: "Zeros found this way are used to graph polynomial and rational functions and solve their inequalities." },
    { field: "Calculus I", why: "Critical points of a polynomial are zeros of its derivative, often found by testing rational candidates." },
    { field: "Linear Algebra", why: "Eigenvalues are zeros of the characteristic polynomial, found the same way for small integer matrices." }
  ],
  mistakes: [
    { wrong: `Listing only the integer candidates <span class="m">±1, ±2, ±3, ±6</span> for <span class="m">2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 11<i>x</i> + 6</span>.`, fix: `Divide every <span class="m"><i>p</i></span> by every <span class="m"><i>q</i></span>. With leading coefficient 2 the list also includes <span class="m">±<span class="fr"><span>1</span><span>2</span></span>, ±<span class="fr"><span>3</span><span>2</span></span></span>, and <span class="m"><span class="fr"><span>1</span><span>2</span></span></span> is a zero.` },
    { wrong: `Writing the factor for the zero <span class="m">−2</span> as <span class="m"><i>x</i> − 2</span>.`, fix: `The factor for zero <span class="m"><i>r</i></span> is <span class="m"><i>x</i> − <i>r</i></span>, so <span class="m"><i>r</i> = −2</span> gives <span class="m"><i>x</i> + 2</span>.` },
    { wrong: `Writing <span class="m">2<i>x</i><sup>3</sup> − 3<i>x</i><sup>2</sup> − 11<i>x</i> + 6 = (<i>x</i> − 3)(<i>x</i> − <span class="fr"><span>1</span><span>2</span></span>)(<i>x</i> + 2)</span> from its zeros.`, fix: `That product has leading coefficient 1, not 2. Keep the leading coefficient: <span class="m">2(<i>x</i> − 3)(<i>x</i> − <span class="fr"><span>1</span><span>2</span></span>)(<i>x</i> + 2) = (<i>x</i> − 3)(2<i>x</i> − 1)(<i>x</i> + 2)</span>.` },
    { wrong: `Testing the next candidates on the original polynomial after a zero is found.`, fix: `Continue with the quotient. It is simpler, it holds all the remaining zeros, and it shows a repeated zero when the same <span class="m"><i>r</i></span> works again.` }
  ],
  practice: [
    { q: `Is <span class="m"><i>x</i> + 2</span> a factor of <span class="m"><i>P</i>(<i>x</i>) = <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup> − 4</span>? If so, factor <span class="m"><i>P</i></span> completely.`, a: `<span class="m"><i>P</i>(−2) = −8 + 12 − 4 = 0</span>, so yes. Synthetic division with row <span class="m">1, 3, 0, −4</span> gives <span class="m"><i>x</i><sup>2</sup> + <i>x</i> − 2 = (<i>x</i> + 2)(<i>x</i> − 1)</span>. So <span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> + 2)<sup>2</sup>(<i>x</i> − 1)</span>.` },
    { q: `List the possible rational zeros of <span class="m"><i>P</i>(<i>x</i>) = 3<i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> − 7<i>x</i> + 2</span>, and show that 1 is a zero.`, a: `<span class="m"><i>p</i> ∈ {1, 2}</span>, <span class="m"><i>q</i> ∈ {1, 3}</span>: <span class="m">±1, ±2, ±<span class="fr"><span>1</span><span>3</span></span>, ±<span class="fr"><span>2</span><span>3</span></span></span>. <span class="m"><i>P</i>(1) = 3 + 2 − 7 + 2 = 0</span>.` },
    { q: `Factor <span class="m"><i>P</i>(<i>x</i>) = 2<i>x</i><sup>3</sup> + <i>x</i><sup>2</sup> − 7<i>x</i> − 6</span> completely.`, a: `Candidates <span class="m">±1, ±2, ±3, ±6, ±<span class="fr"><span>1</span><span>2</span></span>, ±<span class="fr"><span>3</span><span>2</span></span></span>. <span class="m"><i>P</i>(2) = 16 + 4 − 14 − 6 = 0</span>; division by <span class="m"><i>x</i> − 2</span> leaves <span class="m">2<i>x</i><sup>2</sup> + 5<i>x</i> + 3 = (2<i>x</i> + 3)(<i>x</i> + 1)</span>. So <span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> − 2)(<i>x</i> + 1)(2<i>x</i> + 3)</span>.` },
    { q: `Find all real zeros of <span class="m"><i>P</i>(<i>x</i>) = <i>x</i><sup>4</sup> + <i>x</i><sup>3</sup> − 7<i>x</i><sup>2</sup> − 5<i>x</i> + 10</span>.`, a: `Candidates <span class="m">±1, ±2, ±5, ±10</span>. <span class="m"><i>P</i>(1) = 0</span>: quotient <span class="m"><i>x</i><sup>3</sup> + 2<i>x</i><sup>2</sup> − 5<i>x</i> − 10</span>. That quotient is 0 at <span class="m">−2</span>: quotient <span class="m"><i>x</i><sup>2</sup> − 5</span>. So <span class="m"><i>P</i>(<i>x</i>) = (<i>x</i> − 1)(<i>x</i> + 2)(<i>x</i><sup>2</sup> − 5)</span>, zeros <span class="m">1, −2, √5, −√5</span>.` }
  ],
  origin: `René Descartes stated the Factor Theorem and the rule of signs in La Géométrie (1637), the appendix to his Discourse on Method, and showed how to search for whole-number roots among the divisors of the constant term. The full test for fractions p/q became a standard part of algebra textbooks in the following century.`
};
