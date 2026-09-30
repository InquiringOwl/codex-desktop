window.ARITH = window.ARITH || {};

ARITH["a1-sequences"] = {
  title: "Arithmetic & Geometric Sequences",
  short: "Add the same d or multiply by the same r each term",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Sequences and series · linear and exponential patterns",
  hero: `<span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span> &nbsp;&nbsp;|&nbsp;&nbsp; <span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> · <span class="c3"><i>r</i></span><sup><i>n</i>−1</sup></span>`,
  lede: `An <b>arithmetic sequence</b> adds the same common difference <span class="m c3"><i>d</i></span> each time. A <b>geometric sequence</b> multiplies by the same common ratio <span class="m c3"><i>r</i></span>. Each has a formula for the <span class="c1"><i>n</i>th term</span> and one for the sum of the first <span class="m"><i>n</i></span> terms.`,
  plain: `<p>A sequence is a list of numbers in order: first term, second term, and so on. Two kinds come up again and again. In <span class="m">7, 11, 15, 19, …</span> you add 4 each time, so it is arithmetic with <span class="m"><i>d</i> = 4</span>. In <span class="m">3, 6, 12, 24, …</span> you multiply by 2 each time, so it is geometric with <span class="m"><i>r</i> = 2</span>.</p>
<p>To jump straight to the 20th term, you do not need to list all twenty. The 20th term is the first term plus 19 steps. For an arithmetic sequence that is <span class="m"><i>a</i><sub>1</sub> + 19<i>d</i></span>. For a geometric sequence it is <span class="m"><i>a</i><sub>1</sub> · <i>r</i><sup>19</sup></span>. The exponent is <span class="m"><i>n</i> − 1</span>, not <span class="m"><i>n</i></span>, because the first term has had no steps yet.</p>
<p>Adding up terms is just as common: total savings after a year of deposits, total salary over ten years. An arithmetic sum is the number of terms times the average of the first and last. A geometric sum has its own formula. An arithmetic sequence is a linear function on the counting numbers, and a geometric sequence is an exponential function on them.</p>`,
  formal: `<p>A <b>sequence</b> is a function whose domain is the positive integers; its values <span class="m"><i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, …</span> are its <b>terms</b>. A <b>series</b> is a sum of terms, and <span class="m"><i>S</i><sub><i>n</i></sub></span> denotes the <b>partial sum</b> of the first <span class="m"><i>n</i></span> terms.</p>
<div class="display"><b>Arithmetic</b>: &nbsp;<i>a</i><sub><i>n</i></sub> − <i>a</i><sub><i>n</i>−1</sub> = <i>d</i>, &nbsp; <i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i>, &nbsp; <i>S</i><sub><i>n</i></sub> = <span class="fr"><span><i>n</i>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)</span><span>2</span></span><br><b>Geometric</b>: &nbsp;<span class="fr"><span><i>a</i><sub><i>n</i></sub></span><span><i>a</i><sub><i>n</i>−1</sub></span></span> = <i>r</i>, &nbsp; <i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub><i>r</i><sup><i>n</i>−1</sup>, &nbsp; <i>S</i><sub><i>n</i></sub> = <span class="fr"><span><i>a</i><sub>1</sub>(1 − <i>r</i><sup><i>n</i></sup>)</span><span>1 − <i>r</i></span></span> &nbsp;<span class="dim">(<i>r</i> ≠ 1)</span></div>
<p>If <span class="m">|<i>r</i>| &lt; 1</span>, the partial sums of a geometric series approach <span class="m"><i>S</i> = <span class="fr"><span><i>a</i><sub>1</sub></span><span>1 − <i>r</i></span></span></span>, the sum of the <b>infinite geometric series</b>; if <span class="m">|<i>r</i>| ≥ 1</span> the infinite series has no sum. A sequence that has neither a common difference nor a common ratio, such as <span class="m">1, 4, 9, 16, …</span>, is neither arithmetic nor geometric.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i><sub>1</sub>`, name: "First term", desc: "Where the sequence starts. Every formula here is built from it." },
    { c: "c3", sym: `<i>d</i> or <i>r</i>`, name: "Common difference or ratio", desc: "d is added to get each new term of an arithmetic sequence; r is the multiplier for a geometric one. Find d by subtracting consecutive terms and r by dividing them." },
    { c: "c1", sym: `<i>a</i><sub><i>n</i></sub>`, name: "The nth term", desc: "The term in position n, found from the explicit formula without listing the terms before it." },
    { c: "c4", sym: `<i>S</i><sub><i>n</i></sub>`, name: "Partial sum", desc: "The total of the first n terms." }
  ],
  steps: { title: "How to work with a sequence", items: [
    `Subtract consecutive terms. If the difference is constant, the sequence is arithmetic with that <span class="m c3"><i>d</i></span>.`,
    `Otherwise divide consecutive terms. If the quotient is constant, it is geometric with that <span class="m c3"><i>r</i></span>. If neither is constant, it is neither.`,
    `Write the explicit formula: <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i></span> or <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub><i>r</i><sup><i>n</i>−1</sup></span>.`,
    `Substitute the position <span class="m"><i>n</i></span> to find the <span class="c1"><i>n</i>th term</span>.`,
    `For a sum, use <span class="m"><i>S</i><sub><i>n</i></sub> = <i>n</i>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)/2</span> (arithmetic) or <span class="m"><i>S</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub>(1 − <i>r</i><sup><i>n</i></sup>)/(1 − <i>r</i>)</span> (geometric).`,
    `Check by listing the first few terms and comparing.`
  ] },
  example: {
    prompt: `Two job offers both start at $45,000 a year. Offer A adds a $1,800 raise each year. Offer B gives a 4% raise each year. Compare the salary in year 10 and the total earned over the 10 years.`,
    lines: [
      { math: `<span class="m">A: &nbsp;<span class="c1"><i>a</i><sub>10</sub></span> = <span class="c2">45000</span> + 9(<span class="c3">1800</span>) = 61200</span>`, note: "Arithmetic: first term 45,000, d = 1,800, and year 10 is 9 raises later." },
      { math: `<span class="m">B: &nbsp;<span class="c1"><i>a</i><sub>10</sub></span> = <span class="c2">45000</span>(<span class="c3">1.04</span>)<sup>9</sup> ≈ 64049.03</span>`, note: "Geometric: a 4% raise means r = 1.04." },
      { math: `<span class="m">A: &nbsp;<i>S</i><sub>10</sub> = <span class="fr"><span>10(45000 + 61200)</span><span>2</span></span> = 531000</span>`, note: "Arithmetic sum: number of years times the average salary." },
      { math: `<span class="m">B: &nbsp;<i>S</i><sub>10</sub> = <span class="fr"><span>45000(1 − 1.04<sup>10</sup>)</span><span>1 − 1.04</span></span> ≈ 540274.82</span>`, note: "Geometric sum formula with r = 1.04 and n = 10." },
      { math: `<span class="m">540274.82 − 531000 = 9274.82</span>`, note: "Difference in total pay over the 10 years." }
    ],
    answer: `In year 10, Offer A pays <span class="m">$61,200</span> and Offer B about <span class="m">$64,049</span>. Over 10 years Offer B earns about <span class="m">$9,275</span> more, and the gap keeps widening after that.`
  },
  why: `<p>Arithmetic sequences describe anything that changes by a fixed amount per step: a savings plan with equal deposits, seats in rows that grow by two, a taxi fare per mile. Geometric sequences describe fixed percent change per step: raises, depreciation, loan balances, bouncing balls, compound interest period by period. Comparing the two, as in the salary example, shows why percent growth wins in the long run.</p>
<p>The sum formulas are the start of series, a major theme in later math. Loan and annuity payment formulas are geometric series. Infinite geometric series explain why <span class="m">0.999… = 1</span> and lead to the power series of calculus.</p>`,
  careers: [
    { role: "Loan officer", use: "Computes mortgage and car-loan payments with the annuity formula, which is the sum of a geometric series of discounted payments." },
    { role: "Actuary", use: "Values pensions and annuities by summing geometric series of payments that grow or are discounted by a fixed rate." },
    { role: "Human resources analyst", use: "Projects total payroll cost over several years under flat raises versus percentage raises." },
    { role: "Construction estimator", use: "Counts materials in stadium seating or stacked pipes where each row has a fixed number more than the last, using the arithmetic sum." },
    { role: "Pharmacologist", use: "Models the drug level just after each repeated dose as a geometric series that settles to a steady-state amount." },
    { role: "Audio engineer", use: "Sets equal-tempered pitches as a geometric sequence in which each semitone multiplies the frequency by the twelfth root of 2." }
  ],
  life: [
    "Working out how much you will have saved after adding the same amount every week",
    "Comparing a flat yearly raise with a percentage raise",
    "Counting seats in a theatre where each row has two more seats than the one before",
    "Seeing how fast a chain message spreads if everyone forwards it to three people",
    "Planning a training schedule that adds 5 minutes to each run"
  ],
  fields: [
    { name: "Finance", use: "Annuities, amortised loans and savings plans are geometric series." },
    { name: "Computer science", use: "Loop costs and algorithm running times are analysed with arithmetic and geometric sums." },
    { name: "Physics", use: "Repeated rebounds, reflections and radioactive decay chains produce geometric sequences." },
    { name: "Music", use: "Frequencies of equal-tempered notes form a geometric sequence." }
  ],
  prereqWhy: {
    "a1-exp-functions": "A geometric sequence is an exponential function restricted to whole numbers, so its formula and growth behaviour come from there.",
    "pa-sequences": "The idea of a common difference and the arithmetic nth-term formula were introduced in pre-algebra and are extended here with sums and geometric sequences."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Sigma notation, recursive formulas and infinite geometric series are developed from these two sequence types." },
    { field: "Precalculus", why: "Mathematical induction is usually introduced by proving the arithmetic and geometric sum formulas." },
    { field: "Calculus II", why: "Convergence tests for infinite series start from the geometric series, and power series generalise it." },
    { field: "Finance", why: "Present value, loan amortisation and retirement planning formulas are all geometric series." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>n</i></span> steps instead of <span class="m"><i>n</i> − 1</span>: for <span class="m">7, 11, 15, …</span> writing <span class="m"><i>a</i><sub>20</sub> = 7 + 20(4) = 87</span>.`, fix: `The 20th term is 19 steps after the first: <span class="m"><i>a</i><sub>20</sub> = 7 + 19(4) = 83</span>.` },
    { wrong: `Finding the ratio by subtracting: for <span class="m">3, 6, 12, …</span> saying <span class="m"><i>r</i> = 3</span>.`, fix: `The common ratio is a quotient: <span class="m">6 ÷ 3 = 2</span>, so <span class="m"><i>r</i> = 2</span>.` },
    { wrong: `Calling <span class="m">1, 4, 9, 16, …</span> arithmetic because it grows steadily.`, fix: `The differences are 3, 5, 7, which are not constant, and the ratios are not constant either. It is neither arithmetic nor geometric.` }
  ],
  practice: [
    { q: `Find the 20th term of <span class="m">7, 11, 15, 19, …</span>`, a: `Arithmetic with <span class="m"><i>d</i> = 4</span>: <span class="m"><i>a</i><sub>20</sub> = 7 + 19 · 4 = 83</span>.` },
    { q: `Find the 8th term of <span class="m">3, 6, 12, 24, …</span>`, a: `Geometric with <span class="m"><i>r</i> = 2</span>: <span class="m"><i>a</i><sub>8</sub> = 3 · 2<sup>7</sup> = 3 · 128 = 384</span>.` },
    { q: `Find the sum of the first 50 terms of <span class="m">2, 5, 8, 11, …</span>`, a: `<span class="m"><i>d</i> = 3</span>, <span class="m"><i>a</i><sub>50</sub> = 2 + 49 · 3 = 149</span>, and <span class="m"><i>S</i><sub>50</sub> = <span class="fr"><span>50(2 + 149)</span><span>2</span></span> = 3775</span>.` },
    { q: `Find the sum of the first 8 terms of <span class="m">5 + 15 + 45 + …</span>`, a: `<span class="m"><i>r</i> = 3</span>: <span class="m"><i>S</i><sub>8</sub> = <span class="fr"><span>5(1 − 3<sup>8</sup>)</span><span>1 − 3</span></span> = <span class="fr"><span>5(−6560)</span><span>−2</span></span> = 16400</span>.` }
  ],
  origin: `Problem 79 of the Egyptian Rhind papyrus (about 1550 BCE) lists 7 houses, 49 cats, 343 mice, 2401 spelt plants and 16,807 hekats and adds them, a geometric series with ratio 7. Euclid's <i>Elements</i>, Book IX, Proposition 35, gives a rule equivalent to the geometric sum formula.`
};
