window.ARITH = window.ARITH || {};

ARITH["subtraction"] = {
  title: "Subtraction",
  short: "Take away, or find how far apart.",
  grade: "Grades K–3",
  hours: 6,
  voice: "young",
  eyebrow: "Operations · taking away and comparing",
  hero: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>d</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span></span>`,
  lede: `Subtraction finds what is left when you take some away, or how much bigger one number is than another. It undoes addition.`,
  plain: `<p>You have 9 stickers and give away 4. You have 5 left: <span class="m">9 − 4 = 5</span>. The number you start with is the <b>minuend</b>. The number you take away is the <b>subtrahend</b>. The answer is the <b>difference</b>.</p>
<p>Subtraction answers two kinds of questions. "How many are left?" and "How many more?" If Sam has 9 stickers and Ana has 4, Sam has <span class="m">9 − 4 = 5</span> more.</p>
<p>For big numbers, line up the places and start with the ones. Sometimes the top digit is too small, like 3 − 8. Then you <b>borrow</b>, also called <b>regrouping</b>: take one ten from the tens column and break it into ten ones. Now you have 13 − 8, which is 5.</p>
<p>You can always check. Add your answer to the number you took away. You should get the number you started with.</p>`,
  formal: `<p>For whole numbers with <span class="m"><i>a</i> ≥ <i>b</i></span>, the <b>difference</b> <span class="m"><i>a</i> − <i>b</i></span> is the unique whole number <span class="m"><i>d</i></span> such that <span class="m"><i>d</i> + <i>b</i> = <i>a</i></span>. Subtraction is thus the <b>inverse operation</b> of addition.</p>
<div class="display"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;&nbsp;<span class="dim">(minuend − subtrahend = difference)</span><br><i>a</i> − <i>b</i> ≠ <i>b</i> − <i>a</i> in general &nbsp;·&nbsp; (<i>a</i> − <i>b</i>) − <i>c</i> ≠ <i>a</i> − (<i>b</i> − <i>c</i>) in general</div>
<p>Subtraction is neither commutative nor associative. Within the whole numbers, <span class="m"><i>a</i> − <i>b</i></span> is undefined when <span class="m"><i>a</i> &lt; <i>b</i></span>; extending to the integers ℤ removes that restriction. In the column algorithm, when <span class="m"><i>a</i><sub><i>i</i></sub> &lt; <i>b</i><sub><i>i</i></sub></span>, one unit of place <span class="m"><i>i</i> + 1</span> is exchanged for ten units of place <span class="m"><i>i</i></span> (<b>regrouping</b>), which leaves the value of the minuend unchanged.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Minuend", desc: "The starting amount, the number you subtract from." },
    { c: "c3", sym: `<i>b</i>`, name: "Subtrahend", desc: "The amount being taken away." },
    { c: "c1", sym: `10`, name: "Borrow / regroup", desc: "One unit from the next place left traded for ten units in the current place when the top digit is too small." },
    { c: "c5", sym: `<i>d</i>`, name: "Difference", desc: "What is left, or how much larger the minuend is than the subtrahend." }
  ],
  steps: { title: "How to subtract with regrouping", items: [
    `Write the larger number (minuend) on top and line up the ones digits.`,
    `Start with the ones column. If the top digit is at least the bottom digit, subtract.`,
    `If the top digit is smaller, borrow: take 1 from the next place left (make that digit one less) and add 10 to the current top digit.`,
    `If the next place left is 0, keep moving left to a nonzero digit, borrow from it, and turn each 0 you passed into 9.`,
    `Subtract each column, moving left.`,
    `Check by adding the difference and the subtrahend. You should get the minuend.`
  ] },
  example: {
    prompt: `A bakery made 603 bagels. By noon it had sold 248. How many bagels are left?`,
    lines: [
      { math: `<span class="c2">603</span> − <span class="c3">248</span>`, note: "Line up the places. Ones: 3 is less than 8, so we need to borrow." },
      { math: `6 0 3 → 5 <span class="c1">10</span> 3 → 5 9 <span class="c1">13</span>`, note: "The tens digit is 0, so borrow from the hundreds: 6 hundreds becomes 5, the tens become 10, then one ten moves to the ones, leaving 9 tens and 13 ones." },
      { math: `13 − 8 = 5`, note: "Ones column." },
      { math: `9 − 4 = 5`, note: "Tens column." },
      { math: `5 − 2 = 3`, note: "Hundreds column." },
      { math: `<span class="c5">355</span> + <span class="c3">248</span> = <span class="c2">603</span>`, note: "Check by adding back. It matches the minuend." }
    ],
    answer: `The bakery has <span class="m c5">355</span> bagels left.`
  },
  why: `<p>Subtraction tells you what is left and how far apart two amounts are: the change from a purchase, the money left in a budget, the time until an appointment, how much one price beats another. Comparing any two measurements usually means subtracting them.</p>
<p>Subtraction is also the first operation that can break out of the whole numbers. Asking for <span class="m">3 − 5</span> leads to negative numbers. In algebra, solving equations means undoing operations, and subtraction undoes addition. In calculus, the derivative starts from a difference, <span class="m"><i>f</i>(<i>x</i> + <i>h</i>) − <i>f</i>(<i>x</i>)</span>.</p>`,
  careers: [
    { role: "Cashier", use: "Figures change due by subtracting the price from the amount paid, often by counting up." },
    { role: "Pharmacist", use: "Subtracts dispensed quantities from stock counts, especially for controlled substances that require exact records." },
    { role: "Accountant", use: "Computes net income as revenue minus expenses and finds variances between budgeted and actual amounts." },
    { role: "Pilot", use: "Subtracts fuel burned from fuel on board to track remaining fuel against required reserves." },
    { role: "Machinist", use: "Subtracts a measured dimension from the target dimension to find how much more material to remove." },
    { role: "Meteorologist", use: "Subtracts the overnight low from the daytime high to report the daily temperature range." }
  ],
  life: [
    "Checking your change after paying cash",
    "Finding how much is left in your budget this month",
    "Working out how many minutes until the bus leaves",
    "Comparing two prices to see how much you save",
    "Figuring out someone's age from their birth year"
  ],
  fields: [
    { name: "Accounting", use: "Profit, balances and variances are all found by subtracting." },
    { name: "Physics", use: "Change in position, velocity or temperature is a final value minus an initial value." },
    { name: "Statistics", use: "The range of a data set is the maximum minus the minimum, and deviations from the mean are differences." }
  ],
  prereqWhy: {
    "addition": "Subtraction is defined as the inverse of addition, and addition facts are what you use to find and check differences."
  },
  unlocksWhy: {
    "division": "Long division repeatedly subtracts multiples of the divisor to find each digit of the quotient and the remainder.",
    "integers": "Subtracting a larger number from a smaller one requires negative numbers, which is how the integers are introduced."
  },
  beyond: [
    { field: "Algebra I", why: "Solving equations uses subtraction to undo addition on both sides." },
    { field: "Calculus", why: "Derivatives are limits of differences divided by small intervals." },
    { field: "Linear algebra", why: "Vector subtraction gives displacement and the distance between points." }
  ],
  mistakes: [
    { wrong: `Subtracting the smaller digit from the larger in every column, so <span class="m">52 − 17 = 45</span>.`, fix: `In the ones, 2 is less than 7, so borrow: 12 − 7 = 5, and the tens become 4 − 1 = 3. The answer is <span class="m">35</span>.` },
    { wrong: `Borrowing across a zero in 603 − 248 without reducing the hundreds, giving 455.`, fix: `Borrowing across 0 changes the hundreds from 6 to 5 and the tens 0 to 9. The answer is <span class="m">355</span>.` },
    { wrong: `Assuming <span class="m">10 − 3</span> and <span class="m">3 − 10</span> are the same.`, fix: `Subtraction is not commutative. <span class="m">10 − 3 = 7</span>, while <span class="m">3 − 10 = −7</span>, a negative number.` }
  ],
  practice: [
    { q: `<span class="m">82 − 37</span>`, a: `Borrow: 12 − 7 = 5, then 7 − 3 = 4. <b>45</b>. Check: 45 + 37 = 82.` },
    { q: `<span class="m">700 − 264</span>`, a: `Borrow across two zeros: 700 becomes 6 hundreds, 9 tens, 10 ones. 10 − 4 = 6, 9 − 6 = 3, 6 − 2 = 4. <b>436</b>.` },
    { q: `<span class="m">5,003 − 1,847</span>`, a: `Regroup: 5,003 = 4 thousands, 9 hundreds, 9 tens, 13 ones. 13 − 7 = 6, 9 − 4 = 5, 9 − 8 = 1, 4 − 1 = 3. <b>3,156</b>. Check: 3,156 + 1,847 = 5,003.` },
    { q: `A club wants to raise $3,000. It has $1,762 so far. How much more does it need?`, a: `<span class="m">3,000 − 1,762 = </span><b>$1,238</b>. Check: 1,238 + 1,762 = 3,000.` }
  ],
  origin: `The minus sign − appeared in print alongside the plus sign in Johannes Widmann's 1489 commercial arithmetic. Widmann used them to mark surpluses and shortages in quantities of goods, not yet as general operation signs.`
};
