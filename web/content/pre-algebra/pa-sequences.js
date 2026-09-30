window.ARITH = window.ARITH || {};

ARITH["pa-sequences"] = {
  title: "Arithmetic Sequences",
  short: "Add the same amount each time: a linear pattern",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Functions · patterns with a common difference",
  hero: `<span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span></span>`,
  lede: `An arithmetic sequence starts at <span class="m c2"><i>a</i><sub>1</sub></span> and adds the same <span class="m c3">common difference <i>d</i></span> at each step. The formula jumps straight to any term <span class="m c1"><i>a</i><sub><i>n</i></sub></span>.`,
  plain: `<p>Look at 5, 8, 11, 14, 17. Each number is 3 more than the one before. A list like this, where you add the same amount every time, is an <b>arithmetic sequence</b>. The amount you add is the <b>common difference</b>. It can be negative, as in 20, 14, 8, 2, where you subtract 6 each time.</p>
<p>To find the 100th term, you do not need to write out 100 numbers. From the 1st term to the 100th term there are 99 steps, and each step adds <span class="m c3"><i>d</i></span>. So the 100th term is the first term plus 99 times <span class="m c3"><i>d</i></span>. That is what the formula says.</p>
<p>If you plot the terms as points (1st term, 2nd term, and so on), they line up on a straight line. That is because adding the same amount each step is exactly what a linear function does.</p>`,
  formal: `<p>A <b>sequence</b> is a function whose domain is the positive integers; its values <span class="m"><i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, …</span> are its <b>terms</b>. A sequence is <b>arithmetic</b> if the difference between consecutive terms is constant:</p>
<div class="display"><i>a</i><sub><i>n</i>+1</sub> − <i>a</i><sub><i>n</i></sub> = <span class="c3"><i>d</i></span> for all <i>n</i> ≥ 1 &nbsp;<span class="dim">(recursive: <i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>n</i>−1</sub> + <i>d</i>)</span><br><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span> = <span class="c3"><i>d</i></span><i>n</i> + (<span class="c2"><i>a</i><sub>1</sub></span> − <span class="c3"><i>d</i></span>) &nbsp;<span class="dim">(explicit)</span></div>
<p>The explicit form shows that an arithmetic sequence is a linear function of <span class="m"><i>n</i></span> restricted to <span class="m"><i>n</i> ∈ {1, 2, 3, …}</span>, with slope <span class="m"><i>d</i></span>. Its graph is a set of discrete points on a line, not the whole line. When <span class="m"><i>d</i> ≠ 0</span>, a number <span class="m"><i>t</i></span> is a term exactly when <span class="m">(<i>t</i> − <i>a</i><sub>1</sub>)/<i>d</i> + 1</span> is a positive integer.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i><sub>1</sub>`, name: "First term", desc: "The starting value of the sequence, at stage n = 1." },
    { c: "c3", sym: `<i>d</i>`, name: "Common difference", desc: "The fixed amount added at each step. A negative d makes the sequence decrease." },
    { c: "c1", sym: `<i>a</i><sub><i>n</i></sub>`, name: "nth term", desc: "The value at position n, found as the first term plus n − 1 steps of size d." },
    { c: "c4", sym: `<i>n</i>`, name: "Term number", desc: "The position in the list: 1, 2, 3, and so on. It must be a positive integer." }
  ],
  steps: { title: "How to write and use the nth-term formula", items: [
    `Check that the differences between consecutive terms are all the same. If not, the sequence is not arithmetic.`,
    `Identify the first term <span class="m c2"><i>a</i><sub>1</sub></span> and the common difference <span class="m c3"><i>d</i></span>.`,
    `Substitute into <span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span></span> and simplify.`,
    `To find a term, substitute its position <span class="m"><i>n</i></span>.`,
    `To find which position has a given value, set the formula equal to that value and solve for <span class="m"><i>n</i></span>. The value is a term only if <span class="m"><i>n</i></span> is a positive integer.`
  ] },
  example: {
    prompt: `A theatre's first row has 18 seats, and each row behind it has 2 more seats than the row in front. How many seats are in row 25, and which row has 50 seats?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i><sub>1</sub> = 18</span>, &nbsp;<span class="c3"><i>d</i> = 2</span></span>`, note: "The seat counts 18, 20, 22, and so on form an arithmetic sequence." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = 18 + (<i>n</i> − 1)(2) = 2<i>n</i> + 16</span>`, note: "Write and simplify the nth-term formula." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub>25</sub></span> = 2(25) + 16 = 66</span>`, note: "Row 25 is 24 steps after row 1." },
      { math: `<span class="m">2<i>n</i> + 16 = 50 &nbsp;⇒&nbsp; 2<i>n</i> = 34 &nbsp;⇒&nbsp; <i>n</i> = 17</span>`, note: "Set the formula equal to 50 and solve the two-step equation." },
      { math: `<span class="m">18 + 16(2) = 50 ✓</span>`, note: "Check: row 17 is 16 steps after row 1." }
    ],
    answer: `Row 25 has <span class="m">66</span> seats, and row <span class="m">17</span> has 50 seats.`
  },
  why: `<p>Anything that changes by a fixed amount per step is an arithmetic sequence: savings with a fixed weekly deposit, seats in rows, a pay scale with a fixed yearly raise, a book value that drops by the same depreciation each year. The formula lets you jump to any step and solve for when a target is reached.</p>
<p>Arithmetic sequences are a bridge between patterns and linear functions. The common difference is the slope, and the same ideas extend to geometric sequences, series and the discrete models used in finance and computer science.</p>`,
  careers: [
    { role: "Accountant", use: "Computes straight-line depreciation, where an asset's book value drops by the same amount each year." },
    { role: "Human resources analyst", use: "Models pay scales with a fixed annual step increase to project salaries in future years." },
    { role: "Stadium designer", use: "Lays out seating sections where each row holds a fixed number of seats more than the row in front." },
    { role: "Software developer", use: "Computes the memory address of an array element as a base address plus index times element size." },
    { role: "Project scheduler", use: "Plans recurring tasks on a fixed interval, such as inspections every 14 days, and finds the date of the nth one." }
  ],
  life: [
    "Planning a savings goal with the same deposit each week",
    "Counting seats in a theatre or stadium section",
    "Working out when a subscription with a fixed monthly charge reaches a total",
    "Following a training plan that adds the same distance each week",
    "Figuring out the dates of every other Tuesday"
  ],
  fields: [
    { name: "Finance", use: "Simple interest balances and straight-line depreciation are arithmetic sequences in time." },
    { name: "Computer science", use: "Loops that step a counter by a fixed stride generate arithmetic sequences of indices." },
    { name: "Physics", use: "Under constant acceleration, velocities sampled at equal time intervals form an arithmetic sequence." }
  ],
  prereqWhy: {
    "pa-functions": "A sequence is a function from term number n to term value, and the nth-term formula is its rule."
  },
  unlocksWhy: {
    "a1-sequences": "Algebra I compares arithmetic with geometric sequences and adds partial sums, starting from the nth-term formula here."
  },
  beyond: [
    { field: "Algebra II", why: "Arithmetic series and sigma notation build on the nth-term formula to add many terms quickly." },
    { field: "Precalculus", why: "Sequences, recursion and mathematical induction are studied in general, with arithmetic sequences as the first case." },
    { field: "Discrete mathematics", why: "Recurrence relations generalise the recursive rule a(n) = a(n − 1) + d." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + <i>nd</i></span>, which gives <span class="m"><i>a</i><sub>25</sub> = 18 + 50 = 68</span> seats.`, fix: `From term 1 to term <span class="m"><i>n</i></span> there are <span class="m"><i>n</i> − 1</span> steps: <span class="m"><i>a</i><sub>25</sub> = 18 + 24(2) = 66</span>.` },
    { wrong: `Taking <span class="m"><i>d</i></span> as positive in 20, 14, 8, 2.`, fix: `Compute a term minus the one before it: <span class="m">14 − 20 = −6</span>, so <span class="m"><i>d</i> = −6</span>.` },
    { wrong: `Calling 5, 10, 20, 40 arithmetic because it follows a pattern.`, fix: `The differences 5, 10, 20 are not constant. Each term is multiplied by 2, so it is a geometric sequence.` }
  ],
  practice: [
    { q: `Find the 10th term of 7, 11, 15, 19, ….`, a: `<span class="m"><i>d</i> = 4</span>, so <span class="m"><i>a</i><sub><i>n</i></sub> = 7 + 4(<i>n</i> − 1) = 4<i>n</i> + 3</span> and <span class="m"><i>a</i><sub>10</sub> = 43</span>.` },
    { q: `Write the nth-term formula for 20, 14, 8, 2, … and find <span class="m"><i>a</i><sub>12</sub></span>.`, a: `<span class="m"><i>d</i> = −6</span>, so <span class="m"><i>a</i><sub><i>n</i></sub> = 20 − 6(<i>n</i> − 1) = 26 − 6<i>n</i></span> and <span class="m"><i>a</i><sub>12</sub> = 26 − 72 = −46</span>.` },
    { q: `An arithmetic sequence has <span class="m"><i>a</i><sub>1</sub> = 3</span> and <span class="m"><i>a</i><sub>15</sub> = 59</span>. Find <span class="m"><i>d</i></span>.`, a: `<span class="m">59 = 3 + 14<i>d</i></span>, so <span class="m">14<i>d</i> = 56</span> and <span class="m"><i>d</i> = 4</span>.` },
    { q: `Is 100 a term of 3, 8, 13, 18, …?`, a: `<span class="m">3 + 5(<i>n</i> − 1) = 100</span> gives <span class="m">5<i>n</i> = 102</span>, so <span class="m"><i>n</i> = 20.4</span>. That is not a whole number, so 100 is not a term. (<span class="m"><i>a</i><sub>20</sub> = 98</span> and <span class="m"><i>a</i><sub>21</sub> = 103</span>.)` }
  ],
  origin: `Problem 64 of the Egyptian Rhind Mathematical Papyrus (c. 1550 BCE) asks for 10 hekat of barley to be shared among 10 people so that each share differs from the next by 1/8 hekat, which is an arithmetic sequence problem.`
};
