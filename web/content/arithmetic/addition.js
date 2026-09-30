window.ARITH = window.ARITH || {};

ARITH["addition"] = {
  title: "Addition",
  short: "Put groups together and count the total.",
  grade: "Grades K–3",
  hours: 6,
  voice: "young",
  eyebrow: "Operations · combining quantities",
  hero: `<span class="m"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span></span>`,
  lede: `Addition joins two amounts into one total, called the sum. Column addition does it one place at a time, carrying whenever a place reaches ten.`,
  plain: `<p>You have 3 apples. A friend gives you 4 more. Now you have 7. That is addition: <span class="m">3 + 4 = 7</span>. The numbers you add are called <b>addends</b>. The answer is the <b>sum</b>.</p>
<p>For big numbers, stack them so the places line up: ones under ones, tens under tens. Add the ones first. If the ones make 10 or more, you have a full ten. Write down the leftover ones and <b>carry</b> the ten to the tens column as a little 1. Then add the tens, and so on.</p>
<p>Order doesn't matter. <span class="m">3 + 4</span> and <span class="m">4 + 3</span> both make 7. Adding 0 changes nothing: <span class="m">8 + 0 = 8</span>.</p>`,
  formal: `<p><b>Addition</b> on the whole numbers can be defined from the successor function: <span class="m"><i>a</i> + 0 = <i>a</i></span> and <span class="m"><i>a</i> + <i>S</i>(<i>b</i>) = <i>S</i>(<i>a</i> + <i>b</i>)</span>. Equivalently, if disjoint sets <i>A</i> and <i>B</i> have <span class="m">|<i>A</i>| = <i>a</i></span> and <span class="m">|<i>B</i>| = <i>b</i></span>, then <span class="m">|<i>A</i> ∪ <i>B</i>| = <i>a</i> + <i>b</i></span>.</p>
<div class="display"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span> &nbsp;&nbsp;<span class="dim">(addend + addend = sum)</span><br><i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; (<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; <i>a</i> + 0 = <i>a</i></div>
<p>The column algorithm adds digits in each place <span class="m"><i>i</i></span>: if <span class="m"><i>a</i><sub><i>i</i></sub> + <i>b</i><sub><i>i</i></sub> + <i>c</i><sub><i>i</i></sub> ≥ 10</span> (where <span class="m"><i>c</i><sub><i>i</i></sub></span> is the incoming <b>carry</b>), write the sum minus 10 and pass a carry of 1 to place <span class="m"><i>i</i> + 1</span>. This works because <span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First addend", desc: "One of the amounts being added." },
    { c: "c3", sym: `<i>b</i>`, name: "Second addend", desc: "The other amount being added." },
    { c: "c1", sym: `1`, name: "Carry", desc: "When a column adds to 10 or more, ten of that place are traded for 1 in the next place left." },
    { c: "c5", sym: `<i>s</i>`, name: "Sum", desc: "The total you get when the addends are combined." }
  ],
  steps: { title: "How to add with columns", items: [
    `Write the numbers one above the other with the ones digits lined up on the right.`,
    `Add the ones column.`,
    `If the column total is 10 or more, write the ones digit of that total and carry the 1 to the top of the next column left.`,
    `Add the next column, including any carry. Repeat the carry rule.`,
    `Keep going left. If the last column makes 10 or more, write the whole total.`,
    `Check: estimate by rounding, or add the numbers in the other order.`
  ] },
  example: {
    prompt: `On a road trip you drive 478 miles on Saturday and 356 miles on Sunday. How many miles did you drive in all?`,
    lines: [
      { math: `<span class="c2">478</span> + <span class="c3">356</span>`, note: "Line up the ones, tens and hundreds." },
      { math: `8 + 6 = 14 → write 4, carry <span class="c1">1</span>`, note: "Ones: 14 is one ten and four ones." },
      { math: `<span class="c1">1</span> + 7 + 5 = 13 → write 3, carry <span class="c1">1</span>`, note: "Tens: 13 tens is one hundred and three tens." },
      { math: `<span class="c1">1</span> + 4 + 3 = 8 → write 8`, note: "Hundreds: no carry needed." },
      { math: `<span class="c5">834</span>`, note: "Read the digits from the hundreds down." },
      { math: `500 + 400 = 900 &nbsp;<span class="dim">(estimate)</span>`, note: "Rounding each addend gives about 900, so 834 is reasonable." }
    ],
    answer: `You drove <span class="m c5">834</span> miles.`
  },
  why: `<p>Adding is the most used operation in daily life. Totaling a bill, adding up hours worked, combining ingredients and tracking a budget are all addition. Doing it reliably, by hand or in your head, keeps you from depending on a device for every small total.</p>
<p>Addition is also the base of the rest of arithmetic. Multiplication is repeated addition, subtraction undoes addition, and the carrying rule is the first algorithm most people learn. In algebra you combine like terms by adding, and in calculus an integral is a limit of sums.</p>`,
  careers: [
    { role: "Cashier", use: "Totals purchases and counts back change, often mentally when a register goes down." },
    { role: "Bookkeeper", use: "Adds up daily receipts and expenses and checks that column totals match across accounts." },
    { role: "Payroll specialist", use: "Adds regular hours, overtime hours and paid leave to find each employee's total paid hours." },
    { role: "Nurse", use: "Totals a patient's fluid intake from IV fluids, oral drinks and medications over a shift." },
    { role: "Carpenter", use: "Adds lengths of boards and trim pieces to find how much lumber a job needs." },
    { role: "Logistics coordinator", use: "Adds package weights to confirm a shipment stays under a truck's load limit." }
  ],
  life: [
    "Totaling the cost of groceries before checkout",
    "Adding up hours worked in a week",
    "Keeping score in a game",
    "Planning a budget from several monthly bills",
    "Finding total travel time across several legs of a trip"
  ],
  fields: [
    { name: "Accounting", use: "Every financial statement is built from sums of transactions." },
    { name: "Computer science", use: "Processors add binary numbers with a carry chain that works just like column addition." },
    { name: "Statistics", use: "Totals and sums are the first step in computing averages and other summaries." },
    { name: "Physics", use: "Combined masses, total distances and net forces along a line are found by adding." }
  ],
  prereqWhy: {
    "place-value": "Column addition lines up digits by place, and carrying is trading ten ones for one ten, ten tens for one hundred, and so on."
  },
  unlocksWhy: {
    "subtraction": "Subtraction is the inverse of addition, and every subtraction can be checked by adding the answer back.",
    "multiplication": "Multiplication starts as repeated addition of equal groups, and multi-digit multiplication ends by adding partial products."
  },
  beyond: [
    { field: "Algebra I", why: "Combining like terms and adding polynomials follow the same place-by-place pattern as column addition." },
    { field: "Calculus", why: "Series and integrals are built from sums of many terms." },
    { field: "Abstract algebra", why: "Groups and rings are defined by generalizing the properties of addition." }
  ],
  mistakes: [
    { wrong: `Lining up numbers on the left: adding 356 and 42 as if the 4 sat under the 3.`, fix: `Always line up the ones on the right. The 4 in 42 is 4 tens and goes under the 5.` },
    { wrong: `Writing 14 in the ones column instead of carrying: 478 + 356 becomes "71214".`, fix: `Each column holds one digit. Write the 4 and carry the 1 ten to the next column.` },
    { wrong: `Forgetting to add the carried 1, giving <span class="m">478 + 356 = 724</span>.`, fix: `Write the carry at the top of the next column and include it in that column's total.` }
  ],
  practice: [
    { q: `<span class="m">36 + 47</span>`, a: `Ones: 6 + 7 = 13, write 3, carry 1. Tens: 1 + 3 + 4 = 8. <b>83</b>.` },
    { q: `<span class="m">509 + 287</span>`, a: `Ones: 16, write 6, carry 1. Tens: 1 + 0 + 8 = 9. Hundreds: 5 + 2 = 7. <b>796</b>.` },
    { q: `<span class="m">2,748 + 1,396</span>`, a: `Ones 14 (carry 1), tens 1 + 4 + 9 = 14 (carry 1), hundreds 1 + 7 + 3 = 11 (carry 1), thousands 1 + 2 + 1 = 4. <b>4,144</b>.` },
    { q: `A food bank collects 1,875 cans in week one, 2,409 in week two and 638 in week three. How many cans in total?`, a: `<span class="m">1,875 + 2,409 = 4,284</span>; <span class="m">4,284 + 638 = </span><b>4,922</b> cans.` }
  ],
  origin: `The plus sign + and minus sign − first appeared in print in Johannes Widmann's arithmetic book for merchants, published in Leipzig in 1489.`
};
