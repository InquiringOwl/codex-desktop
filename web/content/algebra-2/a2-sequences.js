window.ARITH = window.ARITH || {};

ARITH["a2-sequences"] = {
  title: "Sequences & Sigma Notation",
  short: "Explicit and recursive rules, factorials, partial sums, Σ",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Sequences & series · rules and notation",
  hero: `<span class="m"><span class="sig"><span>4</span><span>Σ</span><span><span class="c2"><i>n</i></span>=1</span></span>(2<span class="c2"><i>n</i></span> + 1) = <span class="c1">3 + 5 + 7 + 9</span> = <span class="c3">24</span></span>`,
  lede: `A sequence is a list of numbers <span class="m c1"><i>a</i><sub><i>n</i></sub></span> numbered by <span class="m c2"><i>n</i></span> = 1, 2, 3, …, given by an explicit formula or by a recursive rule. Adding its first <span class="m c2"><i>n</i></span> terms gives the partial sum <span class="m c3"><i>S</i><sub><i>n</i></sub></span>, written compactly with the sigma sign <span class="m">Σ</span>.`,
  plain: `<p>A <b>sequence</b> is a list in a definite order: a first term, a second term, and so on. Write the term in position <span class="m c2"><i>n</i></span> as <span class="m c1"><i>a</i><sub><i>n</i></sub></span>. So a sequence is really a function whose inputs are the counting numbers 1, 2, 3, …, and its graph is a row of separate dots, not a curve.</p>
<p>There are two common ways to give the rule. An <b>explicit formula</b> gives <span class="m c1"><i>a</i><sub><i>n</i></sub></span> directly from <span class="m c2"><i>n</i></span>: with <span class="m"><i>a</i><sub><i>n</i></sub> = <i>n</i><sup>2</sup></span> the 20th term is 400, with no need for the first 19. A <b>recursive formula</b> gives the first term (or first few) and a rule for each term from the ones before. The Fibonacci sequence starts <span class="m"><i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> = 1</span> and adds the two previous terms: <span class="m">1, 1, 2, 3, 5, 8, 13, …</span></p>
<p>Many sequences use the <b>factorial</b> <span class="m"><i>n</i>! = <i>n</i> · (<i>n</i> − 1) ⋯ 2 · 1</span>, so <span class="m">5! = 120</span>. It grows faster than any power of a fixed number.</p>
<p>Adding the first <span class="m c2"><i>n</i></span> terms gives the <span class="c3">partial sum</span> <span class="m c3"><i>S</i><sub><i>n</i></sub></span>. Sigma notation writes such a sum in one line: <span class="m"><span class="sig"><span>5</span><span>Σ</span><span><i>k</i>=1</span></span><i>k</i><sup>2</sup></span> means "put <span class="m"><i>k</i> = 1, 2, 3, 4, 5</span> into <span class="m"><i>k</i><sup>2</sup></span> and add", which is <span class="m">1 + 4 + 9 + 16 + 25 = 55</span>.</p>`,
  formal: `<p>A <b>sequence</b> is a function <span class="m"><i>a</i></span> whose domain is the positive integers (sometimes starting at 0); its value at <span class="m c2"><i>n</i></span> is the <span class="m c2"><i>n</i></span>th term <span class="m c1"><i>a</i><sub><i>n</i></sub></span>. A <b>recursive formula</b> gives initial terms and a recurrence such as <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>n</i>−1</sub> + <i>a</i><sub><i>n</i>−2</sub></span>. The <b>factorial</b> is <span class="m">0! = 1</span> and <span class="m"><i>n</i>! = <i>n</i> · (<i>n</i> − 1)!</span>; for example <span class="m"><span class="fr"><span>8!</span><span>6!</span></span> = 8 · 7 = 56</span>.</p>
<div class="display"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ⋯ + <i>a</i><sub><i>n</i></sub> = <span class="sig"><span><i>n</i></span><span>Σ</span><span><i>i</i>=1</span></span><span class="c1"><i>a</i><sub><i>i</i></sub></span></div>
<p>In <span class="m"><span class="sig"><span><i>p</i></span><span>Σ</span><span><i>i</i>=<i>m</i></span></span><i>a</i><sub><i>i</i></sub></span> the letter <span class="m"><i>i</i></span> is the <b>index of summation</b>, <span class="m"><i>m</i></span> the lower limit and <span class="m"><i>p</i></span> the upper limit; there are <span class="m"><i>p</i> − <i>m</i> + 1</span> terms. Sums obey <span class="m">Σ<i>c a</i><sub><i>i</i></sub> = <i>c</i> Σ<i>a</i><sub><i>i</i></sub></span>, <span class="m">Σ(<i>a</i><sub><i>i</i></sub> ± <i>b</i><sub><i>i</i></sub>) = Σ<i>a</i><sub><i>i</i></sub> ± Σ<i>b</i><sub><i>i</i></sub></span> and <span class="m"><span class="sig"><span><i>n</i></span><span>Σ</span><span><i>i</i>=1</span></span><i>c</i> = <i>nc</i></span>. There is no such rule for products: <span class="m">Σ<i>a</i><sub><i>i</i></sub><i>b</i><sub><i>i</i></sub></span> is not <span class="m">(Σ<i>a</i><sub><i>i</i></sub>)(Σ<i>b</i><sub><i>i</i></sub>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>n</i>`, name: "Position (index)", desc: "The counting number 1, 2, 3, … that says which term. In a Σ it runs from the lower to the upper limit." },
    { c: "c1", sym: `<i>a</i><sub><i>n</i></sub>`, name: "Term", desc: "The value in position n, from an explicit formula or from the terms before it." },
    { c: "c3", sym: `<i>S</i><sub><i>n</i></sub>`, name: "Partial sum", desc: "The total of the first n terms, a₁ + a₂ + ⋯ + aₙ." }
  ],
  steps: { title: "How to work with a sequence and its sums", items: [
    `From an explicit formula, substitute <span class="m"><i>n</i> = 1, 2, 3, …</span> to list terms, or any single <span class="m"><i>n</i></span> to jump to one term.`,
    `From a recursive formula, start with the given term(s) and apply the rule one term at a time.`,
    `To find a general term, compare each term with its position: look for differences, ratios, squares, factorials and a sign that alternates, written <span class="m">(−1)<sup><i>n</i></sup></span> or <span class="m">(−1)<sup><i>n</i>+1</sup></span>. Test the formula on every given term.`,
    `To evaluate <span class="m"><span class="sig"><span><i>p</i></span><span>Σ</span><span><i>i</i>=<i>m</i></span></span><i>a</i><sub><i>i</i></sub></span>, count the terms (<span class="m"><i>p</i> − <i>m</i> + 1</span>), substitute each value of <span class="m"><i>i</i></span> and add.`,
    `For longer sums, split with the properties: pull out constant factors, separate sums and differences, and use <span class="m">Σ<i>c</i> = <i>nc</i></span>.`
  ] },
  example: {
    prompt: `Evaluate <span class="m"><span class="sig"><span>6</span><span>Σ</span><span><i>k</i>=1</span></span>(3<i>k</i> − 2)</span> by writing out the terms, then check it with the properties of sums.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>k</i></span> = 1, 2, 3, 4, 5, 6</span>`, note: "Upper minus lower plus one: 6 − 1 + 1 = 6 terms." },
      { math: `<span class="m"><span class="c1">1 + 4 + 7 + 10 + 13 + 16</span></span>`, note: "Substitute each k into 3k − 2: 3(1) − 2 = 1, 3(2) − 2 = 4, and so on." },
      { math: `<span class="m"><span class="c3"><i>S</i><sub>6</sub> = 51</span></span>`, note: "Running totals 1, 5, 12, 22, 35, 51 are the partial sums S₁ to S₆." },
      { math: `<span class="m"><span class="sig"><span>6</span><span>Σ</span><span><i>k</i>=1</span></span>(3<i>k</i> − 2) = 3<span class="sig"><span>6</span><span>Σ</span><span><i>k</i>=1</span></span><i>k</i> − <span class="sig"><span>6</span><span>Σ</span><span><i>k</i>=1</span></span>2</span>`, note: "Split the difference and pull out the constant factor 3." },
      { math: `<span class="m">= 3(1 + 2 + ⋯ + 6) − 6 · 2 = 3(21) − 12</span>`, note: "Adding the constant 2 six times gives 6 · 2." },
      { math: `<span class="m">= 63 − 12 = <span class="c3">51</span> ✓</span>`, note: "Both methods agree." }
    ],
    answer: `<span class="m"><span class="sig"><span>6</span><span>Σ</span><span><i>k</i>=1</span></span>(3<i>k</i> − 2) = <span class="c3">51</span></span>.`
  },
  why: `<p>Anything that happens in steps is a sequence: a loan balance month by month, a population year by year, the running time of an algorithm as its input doubles. A recursive rule says how one step leads to the next, which is often how a situation is first described. An explicit formula answers "what happens at step 100?" without computing the 99 steps before it.</p>
<p>Totals are sums of sequences, and Σ notation is the language for them. It appears in every later course: the mean and standard deviation in statistics, Riemann sums and series in calculus, the binomial theorem and the formulas for arithmetic and geometric series that come next.</p>`,
  careers: [
    { role: "Software engineer", use: "Writes recurrences such as T(n) = 2T(n/2) + n to estimate how an algorithm's running time grows with input size." },
    { role: "Actuary", use: "Values a pension or insurance policy as a sum of discounted payments written in sigma notation." },
    { role: "Loan officer", use: "Tracks a balance recursively: next balance = balance × (1 + monthly rate) − payment." },
    { role: "Population ecologist", use: "Models a species year to year with recursive rules such as the logistic map." },
    { role: "Signal processing engineer", use: "Designs digital filters where each output sample is computed recursively from earlier outputs and inputs." },
    { role: "Data analyst", use: "Computes running totals and cumulative sums, the partial sums of a data series." }
  ],
  life: [
    "Watching a savings balance grow month by month",
    "Keeping a running total of steps or spending over a week",
    "Spotting the pattern in a number puzzle and predicting the next term",
    "Counting the arrangements of books on a shelf with a factorial",
    "Seeing Fibonacci numbers in the spirals of a pine cone or sunflower"
  ],
  fields: [
    { name: "Computer science", use: "Recursive algorithms and their running times are described by recurrences and sums." },
    { name: "Statistics", use: "The mean, variance and least-squares formulas are all written with sigma notation." },
    { name: "Finance", use: "Loan balances and annuity values are recursive sequences and their partial sums." },
    { name: "Biology", use: "Discrete population models give next year's population from this year's." }
  ],
  prereqWhy: {
    "a1-sequences": "Arithmetic and geometric sequences are the first examples of explicit and recursive rules; this topic generalises them and adds their sums."
  },
  unlocksWhy: {
    "a2-arith-series": "An arithmetic series is the partial sum of an arithmetic sequence, written and evaluated with sigma notation.",
    "a2-geom-series": "A geometric series is a partial sum of a geometric sequence; its infinite version is the limit of those partial sums.",
    "a2-binomial": "The binomial theorem is written as a sigma sum, and its coefficients are built from factorials."
  },
  beyond: [
    { field: "Calculus I", why: "The definite integral is defined as a limit of Riemann sums written in sigma notation." },
    { field: "Calculus II", why: "Infinite series are limits of partial sums, and convergence tests compare sequences of terms." },
    { field: "Discrete Mathematics", why: "Recurrence relations and proofs by induction about sums build directly on recursive sequences and Σ notation." },
    { field: "Statistics", why: "Every summary statistic, from the mean to the correlation coefficient, is a sigma sum over the data." }
  ],
  mistakes: [
    { wrong: `Saying <span class="m"><span class="sig"><span>7</span><span>Σ</span><span><i>i</i>=3</span></span><i>a</i><sub><i>i</i></sub></span> has 7 terms.`, fix: `It runs from 3 to 7: <span class="m">7 − 3 + 1 = 5</span> terms, <span class="m"><i>a</i><sub>3</sub></span> through <span class="m"><i>a</i><sub>7</sub></span>.` },
    { wrong: `Using <span class="m"><i>a</i><sub><i>n</i></sub> = (−1)<sup><i>n</i></sup><i>n</i></span> for <span class="m">1, −2, 3, −4, …</span>`, fix: `That formula gives <span class="m">−1, 2, −3, 4</span>. When the first term is positive use <span class="m">(−1)<sup><i>n</i>+1</sup><i>n</i></span>. Always test <span class="m"><i>n</i> = 1</span>.` },
    { wrong: `<span class="m"><span class="sig"><span>2</span><span>Σ</span><span><i>i</i>=1</span></span><i>i</i> · <i>i</i> = (<span class="sig"><span>2</span><span>Σ</span><span><i>i</i>=1</span></span><i>i</i>)(<span class="sig"><span>2</span><span>Σ</span><span><i>i</i>=1</span></span><i>i</i>) = 3 · 3 = 9</span>.`, fix: `Sums split over addition, not multiplication. Write the terms: <span class="m">1 · 1 + 2 · 2 = 5</span>.` },
    { wrong: `<span class="m">(2<i>n</i>)! = 2 · <i>n</i>!</span>, so <span class="m">6! = 2 · 3! = 12</span>.`, fix: `<span class="m">(2<i>n</i>)!</span> multiplies every number up to <span class="m">2<i>n</i></span>: <span class="m">6! = 720</span>.` }
  ],
  practice: [
    { q: `Write the first five terms of <span class="m"><i>a</i><sub><i>n</i></sub> = (−1)<sup><i>n</i></sup>(<i>n</i> + 1)</span>.`, a: `<span class="m"><i>n</i> = 1</span>: <span class="m">(−1)(2) = −2</span>. The terms are <span class="m">−2, 3, −4, 5, −6</span>.` },
    { q: `A sequence has <span class="m"><i>a</i><sub>1</sub> = 4</span> and <span class="m"><i>a</i><sub><i>n</i></sub> = 2<i>a</i><sub><i>n</i>−1</sub> − 3</span>. Find its first five terms.`, a: `<span class="m"><i>a</i><sub>2</sub> = 2(4) − 3 = 5</span>, <span class="m"><i>a</i><sub>3</sub> = 2(5) − 3 = 7</span>, <span class="m"><i>a</i><sub>4</sub> = 11</span>, <span class="m"><i>a</i><sub>5</sub> = 19</span>. Terms: <span class="m">4, 5, 7, 11, 19</span>.` },
    { q: `Find a general term for <span class="m">−<span class="fr"><span>1</span><span>2</span></span>, <span class="fr"><span>1</span><span>4</span></span>, −<span class="fr"><span>1</span><span>8</span></span>, <span class="fr"><span>1</span><span>16</span></span>, …</span>`, a: `Denominators are <span class="m">2<sup><i>n</i></sup></span> and the signs start negative, so <span class="m"><i>a</i><sub><i>n</i></sub> = <span class="fr"><span>(−1)<sup><i>n</i></sup></span><span>2<sup><i>n</i></sup></span></span></span>. Check: <span class="m"><i>a</i><sub>1</sub> = −<span class="fr"><span>1</span><span>2</span></span></span>, <span class="m"><i>a</i><sub>4</sub> = <span class="fr"><span>1</span><span>16</span></span></span>.` },
    { q: `Write <span class="m">3 + 7 + 11 + ⋯ + 39</span> in sigma notation and find the sum.`, a: `The terms are <span class="m">4<i>k</i> − 1</span>, and <span class="m">4<i>k</i> − 1 = 39</span> gives <span class="m"><i>k</i> = 10</span>: <span class="m"><span class="sig"><span>10</span><span>Σ</span><span><i>k</i>=1</span></span>(4<i>k</i> − 1) = 4(1 + 2 + ⋯ + 10) − 10 = 4(55) − 10 = 210</span>.` }
  ],
  origin: `Leonardo of Pisa (Fibonacci) posed the rabbit problem that produces 1, 1, 2, 3, 5, 8, … in his Liber Abaci of 1202. Leonhard Euler introduced the capital sigma for sums in 1755, and Christian Kramp introduced the notation n! in 1808.`
};
