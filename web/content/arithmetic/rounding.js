window.ARITH = window.ARITH || {};

ARITH["rounding"] = {
  title: "Rounding & Estimation",
  short: "Swap a number for a nearby easy one.",
  grade: "Grades 3–4",
  hours: 3,
  voice: "young",
  eyebrow: "Number sense · approximation",
  hero: `<span class="m"><span class="c1">4,372</span> ≈ <span class="c3">4,400</span></span>`,
  lede: `To round, find the two landmark numbers on either side and pick the closer one. An estimate made from rounded numbers tells you roughly what answer to expect.`,
  plain: `<p>Sometimes you don't need an exact number. "About 4,400 people came to the game" is easier to say and remember than "4,372 people came." Rounding swaps a number for a nearby number that is easier to work with.</p>
<p>Picture 4,372 on a number line between two landmarks: 4,300 and 4,400. Halfway between them is 4,350. Our number, 4,372, is past the halfway mark, so it is closer to 4,400. We round up to 4,400.</p>
<p>What if a number lands exactly on the halfway mark, like 4,350? Schools use a simple rule: round up. So 4,350 rounds to 4,400.</p>
<p><b>Estimating</b> means rounding first and then doing the math with the easy numbers. It lets you check whether an exact answer is reasonable.</p>`,
  formal: `<p>To round a whole number <span class="m c1"><i>x</i></span> to the nearest multiple of <span class="m"><i>u</i></span> (where <span class="m"><i>u</i></span> = 10, 100, 1000, …), let <span class="m c2"><i>L</i></span> be the greatest multiple of <i>u</i> with <span class="m"><i>L</i> ≤ <i>x</i></span> and <span class="m c3"><i>U</i> = <i>L</i> + <i>u</i></span>. The <b>halfway point</b> is <span class="m c4"><i>L</i> + <i>u</i>/2</span>.</p>
<div class="display">round(<span class="c1"><i>x</i></span>) = <span class="c2"><i>L</i></span> &nbsp;if <span class="c1"><i>x</i></span> &lt; <span class="c4"><i>L</i> + <i>u</i>/2</span><br>round(<span class="c1"><i>x</i></span>) = <span class="c3"><i>U</i></span> &nbsp;if <span class="c1"><i>x</i></span> ≥ <span class="c4"><i>L</i> + <i>u</i>/2</span> <span class="dim">(round half up)</span></div>
<p>The digit one place to the right of the rounding place decides the result: 0–4 rounds down, 5–9 rounds up. Other tie-breaking rules exist. <b>Round half to even</b> (banker's rounding) sends ties to the even neighbour, so 4,350 → 4,400 but 4,250 → 4,200; it is the default in IEEE 754 floating-point arithmetic because it avoids an upward bias. The <b>rounding error</b> <span class="m">|round(<i>x</i>) − <i>x</i>|</span> is at most <span class="m"><i>u</i>/2</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>`, name: "The number", desc: "The exact value you want to round." },
    { c: "c2", sym: `<i>L</i>`, name: "Lower landmark", desc: "The nearest multiple of 10, 100, 1000 and so on at or below x." },
    { c: "c3", sym: `<i>U</i>`, name: "Upper landmark", desc: "The next multiple above the lower landmark." },
    { c: "c4", sym: `<i>L</i> + <i>u</i>/2`, name: "Halfway mark", desc: "The point exactly between the two landmarks. At or past it, round up; before it, round down." }
  ],
  steps: { title: "How to round a whole number", items: [
    `Find the place you are rounding to and underline that digit.`,
    `Look at the digit just to its right. This is the deciding digit.`,
    `If the deciding digit is 0, 1, 2, 3 or 4, keep the underlined digit the same.`,
    `If it is 5, 6, 7, 8 or 9, add 1 to the underlined digit. If that makes 10, write 0 and carry 1 to the next place left.`,
    `Change every digit to the right of the underlined place to 0.`
  ] },
  example: {
    prompt: `A school has three fundraisers. They raised $387, $214 and $529. The principal wants a quick estimate to the nearest hundred dollars, then the exact total.`,
    lines: [
      { math: `<span class="c1">387</span> → <span class="c3">400</span>`, note: "Tens digit is 8, so round up." },
      { math: `<span class="c1">214</span> → <span class="c2">200</span>`, note: "Tens digit is 1, so round down." },
      { math: `<span class="c1">529</span> → <span class="c2">500</span>`, note: "Tens digit is 2, so round down." },
      { math: `400 + 200 + 500 = 1,100`, note: "Add the easy numbers to get the estimate." },
      { math: `387 + 214 + 529 = 1,130`, note: "The exact total." },
      { math: `1,130 − 1,100 = 30`, note: "The estimate is close, which tells us the exact answer is reasonable." }
    ],
    answer: `The estimate is about <span class="m">$1,100</span>; the exact total is <span class="m">$1,130</span>.`
  },
  why: `<p>People estimate all the time: whether the cash in your wallet covers a grocery cart, how long a drive will take, roughly how much paint a room needs. Rounding makes mental math fast, and an estimate catches big errors, such as a misplaced digit, before they cost you.</p>
<p>In science and engineering, every measurement has limited precision, and results are rounded to match. Later topics such as significant figures, scientific notation and error bounds in calculus all build on the idea that a rounded number stands for a range of true values.</p>`,
  careers: [
    { role: "Construction estimator", use: "Rounds material quantities and costs to prepare fast bids before detailed takeoffs are done." },
    { role: "Journalist", use: "Rounds large figures like budgets and crowd sizes so readers can grasp them, while keeping the rounding honest." },
    { role: "Pharmacist", use: "Applies specific rounding rules when converting calculated doses to amounts that can actually be measured or dispensed." },
    { role: "Software engineer", use: "Chooses rounding modes, such as round half to even, in financial code so totals don't drift over millions of transactions." },
    { role: "Restaurant server", use: "Estimates a 20% tip quickly by rounding the bill to a nearby easy number." }
  ],
  life: [
    "Keeping a running estimate of the grocery total while shopping",
    "Estimating travel time from distance and speed",
    "Checking whether a calculator answer looks about right",
    "Rounding a price like $19.99 to $20 when budgeting",
    "Guessing how many people will come to a party to plan food"
  ],
  fields: [
    { name: "Chemistry and physics", use: "Measured values are rounded to the correct number of significant figures." },
    { name: "Numerical computing", use: "Computers store most real numbers rounded, and analysts track how rounding error grows in a calculation." },
    { name: "Economics", use: "Official statistics are reported in rounded units, such as millions of dollars or tenths of a percent." }
  ],
  prereqWhy: {
    "place-value": "You must know which digit is in the tens, hundreds or thousands place to know where to round and which digit decides.",
    "number-line": "Rounding asks which of two landmarks on the number line a number is closer to."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Numerical analysis", why: "Studies how rounding errors arise and spread in computer calculations." },
    { field: "Statistics", why: "Reported results are rounded, and rounding decisions affect accuracy and fairness in summaries." },
    { field: "Calculus", why: "Approximations and error bounds, such as in linearization and Taylor polynomials, generalize estimation." }
  ],
  mistakes: [
    { wrong: `Rounding 4,351 to the nearest hundred by looking at the ones digit and getting 4,300.`, fix: `Look only at the digit right after the hundreds place, the tens digit 5. It is 5 or more, so round up: <span class="m">4,400</span>.` },
    { wrong: `Rounding 2,961 to the nearest hundred and writing <span class="m">2,1000</span>.`, fix: `The hundreds digit 9 becomes 10, so write 0 there and carry 1 to the thousands: <span class="m">3,000</span>.` },
    { wrong: `Rounding in steps: 347 → 350 → 400.`, fix: `Round once, from the original number. 347 to the nearest hundred looks at the tens digit 4, so it rounds to <span class="m">300</span>.` }
  ],
  practice: [
    { q: `Round 67 to the nearest ten.`, a: `The ones digit is 7, so round up: <b>70</b>.` },
    { q: `Round 4,351 to the nearest hundred.`, a: `The tens digit is 5, so round up: <b>4,400</b>.` },
    { q: `Round 2,450 to the nearest hundred using round half up. What does round half to even give?`, a: `2,450 is exactly halfway. Round half up gives <b>2,500</b>. Round half to even gives <b>2,400</b>, because 4 is even.` },
    { q: `Estimate 612 + 287 + 405 by rounding each to the nearest hundred. Then find the exact sum.`, a: `<span class="m">600 + 300 + 400 = </span><b>1,300</b>. The exact sum is <b>1,304</b>.` }
  ],
  origin: `The IEEE 754 standard for floating-point arithmetic, first published in 1985, made round-to-nearest with ties going to the even neighbour the default rounding mode in computers.`
};
