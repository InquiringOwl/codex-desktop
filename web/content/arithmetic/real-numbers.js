window.ARITH = window.ARITH || {};

ARITH["real-numbers"] = {
  title: "The Real Number System",
  short: "Naturals, integers, rationals, irrationals, reals",
  grade: "Grade 8; formalised in college",
  hours: 6,
  voice: "plain",
  eyebrow: "Number systems · the real line",
  hero: `<span class="m"><span class="c1">ℕ</span> ⊂ 𝕎 ⊂ <span class="c2">ℤ</span> ⊂ <span class="c3">ℚ</span> ⊂ ℝ</span>`,
  lede: `Each number system contains the one before it. The real numbers fill every point on the number line, including <span class="m c4">irrational</span> numbers like √2 and π that no fraction can equal.`,
  plain: `<p>Numbers came in layers, each added to solve a problem the last one could not. The counting numbers 1, 2, 3, … are the <b>natural numbers</b>. Add 0 and you get the <b>whole numbers</b>. Add the negatives and you get the <b>integers</b>, so that subtraction always works. Add fractions and you get the <b>rational numbers</b>, so that division by anything except zero always works.</p>
<p>You might think fractions fill the whole number line. They do not. A square with sides of 1 has a diagonal of length √2, and no fraction equals √2 exactly. Numbers like this are <b>irrational</b>. Their decimals go on forever with no repeating pattern. π is another one.</p>
<p>Put the rationals and irrationals together and you have the <b>real numbers</b>: every point on the number line. The real numbers are what you use for measuring anything that can vary smoothly, like length, time or temperature.</p>`,
  formal: `<div class="display"><span class="c1">ℕ</span> = {1, 2, 3, …} &nbsp; 𝕎 = {0, 1, 2, …} &nbsp; <span class="c2">ℤ</span> = {…, −2, −1, 0, 1, 2, …}<br><span class="c3">ℚ</span> = { <span class="fr"><span><i>p</i></span><span><i>q</i></span></span> : <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0 } &nbsp;&nbsp; <span class="c4">irrationals</span> = ℝ ∖ ℚ</div>
<p>A real number is rational if and only if its decimal expansion terminates or eventually repeats. √2 is irrational: if <span class="m">√2 = <i>p</i>/<i>q</i></span> in lowest terms, then <span class="m"><i>p</i><sup>2</sup> = 2<i>q</i><sup>2</sup></span>, so <span class="m"><i>p</i></span> is even, which forces <span class="m"><i>q</i></span> to be even too, a contradiction. More generally, <span class="m">√<i>n</i></span> for a positive integer <span class="m"><i>n</i></span> is rational only when <span class="m"><i>n</i></span> is a perfect square.</p>
<p>ℝ is a <b>complete ordered field</b>: it obeys the field axioms and an order, and every nonempty set of reals that is bounded above has a least upper bound. ℚ fails completeness. Both ℚ and the irrationals are <b>dense</b> in ℝ, but ℚ is countable while ℝ is uncountable (Cantor, 1874). (Some texts include 0 in ℕ; this page uses ℕ = {1, 2, 3, …}.)</p>`,
  legend: [
    { c: "c1", sym: `ℕ`, name: "Natural numbers", desc: "The counting numbers 1, 2, 3, …. Adding 0 gives the whole numbers 𝕎." },
    { c: "c2", sym: `ℤ`, name: "Integers", desc: "Whole numbers and their negatives. Closed under subtraction." },
    { c: "c3", sym: `ℚ`, name: "Rational numbers", desc: "Quotients p/q of integers with q ≠ 0. Their decimals terminate or repeat." },
    { c: "c4", sym: `ℝ ∖ ℚ`, name: "Irrational numbers", desc: "Real numbers that are not rational, such as √2, π and e. Their decimals never terminate or repeat." }
  ],
  steps: { title: "How to classify a real number", items: [
    `Simplify first. For example, <span class="m">√49 = 7</span> and <span class="m">12/4 = 3</span>.`,
    `If it is a positive whole number, it is natural, whole, integer, rational and real.`,
    `If it is 0 or a negative whole number, it is an integer (and whole if 0), rational and real.`,
    `If it can be written as a fraction of integers, or its decimal terminates or repeats, it is rational.`,
    `If it is the square root of a positive integer that is not a perfect square, or a known constant like π, it is irrational.`,
    `Every number on this list is real. Name every set it belongs to, not just the smallest.`
  ] },
  example: {
    prompt: `You want a square garden with an area of exactly 50 m². Is the side length a rational number? About how long is each side, and how much fencing goes around it?`,
    lines: [
      { math: `<span class="m"><i>s</i><sup>2</sup> = 50</span>`, note: "Area of a square is side squared." },
      { math: `<span class="m"><i>s</i> = √50 = 5√2</span>`, note: "50 = 25 × 2, and √25 = 5." },
      { math: `<span class="m">7<sup>2</sup> = 49 &lt; 50 &lt; 64 = 8<sup>2</sup></span>`, note: "50 is not a perfect square, so √50 is irrational. It lies between 7 and 8." },
      { math: `<span class="m">7.07<sup>2</sup> = 49.9849, &nbsp;7.08<sup>2</sup> = 50.1264</span>`, note: "So √50 is between 7.07 and 7.08, closer to 7.07." },
      { math: `<span class="m c4"><i>s</i> ≈ 7.071</span>`, note: "A calculator gives 7.0710678…, which never repeats." },
      { math: `<span class="m">4<i>s</i> = 20√2 ≈ 28.28</span>`, note: "Perimeter for the fence." }
    ],
    answer: `The side is <span class="m">√50 = 5√2</span> m, an irrational number about <span class="m">7.07</span> m. You need about <span class="m">28.3</span> m of fencing.`
  },
  why: `<p>Knowing which kind of number you have tells you what you can do with it. Counts of people are natural numbers. Temperatures can be negative. Money is rational, to the cent. Lengths like the diagonal of a square or the circumference of a circle are often irrational, so any decimal you write is an approximation, and you need to decide how precise it must be.</p>
<p>The real numbers are the setting for algebra, geometry and calculus. Graphs, limits, continuity and derivatives all depend on ℝ having no gaps.</p>`,
  careers: [
    { role: "Software engineer", use: "Chooses integer types for counts and floating-point types for measurements, knowing floats only approximate most real numbers." },
    { role: "Carpenter", use: "Cuts diagonal braces whose lengths, like 12√2 in, are irrational and must be rounded to the nearest sixteenth." },
    { role: "Surveyor", use: "Works with distances computed from square roots that are irrational and rounded to a stated precision." },
    { role: "Machinist", use: "Uses π, an irrational number, to compute circumferences and cutting speeds, rounding to the tolerance required." },
    { role: "Mathematics teacher", use: "Teaches students to classify numbers and to explain why √2 cannot be a fraction." }
  ],
  life: [
    "Rounding π or √2 on a calculator to a sensible number of places",
    "Knowing a count of people must be a whole number",
    "Understanding why a temperature can be negative but a length cannot",
    "Measuring the diagonal of a TV or a room"
  ],
  fields: [
    { name: "Computer science", use: "Integer, rational and floating-point data types mirror the number sets and their limits." },
    { name: "Physics", use: "Physical quantities are modelled as real numbers so that calculus can be applied." },
    { name: "Engineering", use: "Tolerances decide how many digits of an irrational value are needed." }
  ],
  prereqWhy: {
    "integers": "The integers ℤ are one layer of the system, and you need negatives to see how ℤ extends the whole numbers.",
    "fraction-ops": "The rationals ℚ are exactly the fractions, and their closure under the four operations defines their place in the system.",
    "roots": "Square roots of non-perfect squares, like √2, are the first irrational numbers most people meet.",
    "decimals": "Classifying numbers by whether their decimals terminate, repeat or do neither depends on reading decimal expansions."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Solutions of equations are stated as real numbers, and the domain of a function is a subset of ℝ." },
    { field: "Calculus", why: "Limits and continuity rely on the completeness of ℝ." },
    { field: "Real analysis", why: "The course constructs ℝ rigorously and proves its completeness, density and uncountability." },
    { field: "Number theory", why: "Irrationality proofs and rational approximation of irrationals are central topics." }
  ],
  mistakes: [
    { wrong: `Calling <span class="m">√49</span> irrational because it has a root sign.`, fix: `Simplify first: <span class="m">√49 = 7</span>, a natural number.` },
    { wrong: `Treating 3.14 or 22/7 as equal to π.`, fix: `Both are rational approximations. π is irrational: <span class="m">22/7 = 3.142857…</span> while <span class="m">π = 3.141592…</span>.` },
    { wrong: `Thinking a long decimal like 0.142857142857… is irrational.`, fix: `It repeats, so it is rational. In fact it equals <span class="m"><span class="fr"><span>1</span><span>7</span></span></span>.` },
    { wrong: `Naming only one set: "−12 is an integer."`, fix: `It belongs to every set containing ℤ: −12 is an integer, a rational number and a real number.` }
  ],
  practice: [
    { q: `Name every set that <span class="m">−12</span> belongs to.`, a: `Integers ℤ, rationals ℚ and reals ℝ. It is not natural or whole.` },
    { q: `Write <span class="m">0.<span style="text-decoration:overline">36</span> = 0.3636…</span> as a fraction in lowest terms.`, a: `Let <span class="m"><i>x</i> = 0.3636…</span>. Then <span class="m">100<i>x</i> − <i>x</i> = 36</span>, so <span class="m"><i>x</i> = 36/99 = 4/11</span>.` },
    { q: `Is <span class="m">√45</span> rational? Between which two integers does it lie?`, a: `45 is not a perfect square, so <span class="m">√45 = 3√5</span> is irrational. Since <span class="m">36 &lt; 45 &lt; 49</span>, it lies between 6 and 7 (≈ 6.708).` },
    { q: `Write <span class="m">2.1<span style="text-decoration:overline">45</span> = 2.14545…</span> as a fraction in lowest terms.`, a: `<span class="m">1000<i>x</i> = 2145.45…</span> and <span class="m">10<i>x</i> = 21.45…</span>, so <span class="m">990<i>x</i> = 2124</span> and <span class="m"><i>x</i> = 2124/990 = 118/55</span>.` }
  ],
  origin: `Greek mathematicians of the Pythagorean school discovered, around the 5th century BCE, that the diagonal of a square has no common measure with its side, which in modern terms shows √2 is irrational. Rigorous constructions of the real numbers came in 1872 from Richard Dedekind and Georg Cantor.`
};
