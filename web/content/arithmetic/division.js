window.ARITH = window.ARITH || {};

ARITH["division"] = {
  title: "Division",
  short: "Share equally, or count how many fit.",
  grade: "Grades 3–5",
  hours: 12,
  voice: "young",
  eyebrow: "Operations · equal sharing and the division algorithm",
  hero: `<span class="m"><span class="c2"><i>a</i></span> = <span class="c3"><i>b</i></span> · <span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp; 0 ≤ <span class="c4"><i>r</i></span> &lt; <span class="c3"><i>b</i></span></span>`,
  lede: `Dividing a by b finds how many whole groups of b fit into a (the quotient q) and what is left over (the remainder r), which is always smaller than b.`,
  plain: `<p>You have 12 cookies and 3 friends. If everyone gets the same amount, each friend gets 4: <span class="m">12 ÷ 3 = 4</span>. That is division. The number being split up is the <b>dividend</b>. The number you divide by is the <b>divisor</b>. The answer is the <b>quotient</b>.</p>
<p>Division answers two kinds of questions. "If I share 12 among 3, how many does each get?" And "How many groups of 3 can I make from 12?" Both give 4.</p>
<p>Sometimes things don't split evenly. Share 14 cookies among 3 friends: each gets 4, and 2 are left over. The 2 is the <b>remainder</b>. The remainder is always smaller than the divisor. If it weren't, you could give everyone one more.</p>
<p>Division undoes multiplication. Since <span class="m">3 × 4 = 12</span>, you know <span class="m">12 ÷ 3 = 4</span>.</p>`,
  formal: `<p><b>Division algorithm.</b> For any integers <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> with <span class="m"><i>b</i> &gt; 0</span>, there exist unique integers <span class="m c1"><i>q</i></span> (the <b>quotient</b>) and <span class="m c4"><i>r</i></span> (the <b>remainder</b>) such that</p>
<div class="display"><span class="c2"><i>a</i></span> = <span class="c3"><i>b</i></span><span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp;&nbsp; 0 ≤ <span class="c4"><i>r</i></span> &lt; <span class="c3"><i>b</i></span><br><span class="dim">dividend = divisor × quotient + remainder</span></div>
<p>When <span class="m"><i>r</i> = 0</span>, <span class="m"><i>b</i></span> <b>divides</b> <span class="m"><i>a</i></span>, written <span class="m"><i>b</i> | <i>a</i></span>, and <span class="m"><i>a</i> ÷ <i>b</i> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <i>q</i></span> is the unique number with <span class="m"><i>b</i> × <i>q</i> = <i>a</i></span>. <b>Division by zero is undefined</b>: <span class="m"><i>a</i> ÷ 0</span> would need a number <span class="m"><i>q</i></span> with <span class="m">0 × <i>q</i> = <i>a</i></span>, which is impossible for <span class="m"><i>a</i> ≠ 0</span> and not unique for <span class="m"><i>a</i> = 0</span>. Division is neither commutative nor associative.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Dividend", desc: "The amount being divided up." },
    { c: "c3", sym: `<i>b</i>`, name: "Divisor", desc: "The size of each group, or the number of equal shares. It cannot be 0." },
    { c: "c1", sym: `<i>q</i>`, name: "Quotient", desc: "How many whole groups fit, or how much each share gets." },
    { c: "c4", sym: `<i>r</i>`, name: "Remainder", desc: "What is left after taking out as many whole groups as possible. It is at least 0 and less than the divisor." }
  ],
  steps: { title: "How to do long division", items: [
    `Write the dividend under the division bracket and the divisor to its left.`,
    `Divide: take the fewest leading digits of the dividend that are at least the divisor, and find the largest digit whose product with the divisor fits. Write it above.`,
    `Multiply that digit by the divisor and write the product underneath.`,
    `Subtract. The result must be less than the divisor; if not, your digit was too small.`,
    `Bring down the next digit of the dividend and repeat divide, multiply, subtract.`,
    `When no digits are left, the number on top is the quotient and the last difference is the remainder.`,
    `Check: divisor × quotient + remainder should equal the dividend.`
  ] },
  example: {
    prompt: `A farm collects 347 eggs and packs them in cartons of 12. How many full cartons can it fill, and how many eggs are left over?`,
    lines: [
      { math: `<span class="c2">347</span> ÷ <span class="c3">12</span>`, note: "12 does not fit into 3, so start with the first two digits, 34." },
      { math: `34 ÷ 12 → <span class="c1">2</span>, &nbsp;2 × 12 = 24, &nbsp;34 − 24 = 10`, note: "12 fits into 34 twice. Write 2 above the 4." },
      { math: `bring down 7 → 107`, note: "Put the next digit beside the 10." },
      { math: `107 ÷ 12 → <span class="c1">8</span>, &nbsp;8 × 12 = 96, &nbsp;107 − 96 = <span class="c4">11</span>`, note: "12 fits into 107 eight times (9 × 12 = 108 is too big)." },
      { math: `<span class="c1"><i>q</i> = 28</span>, &nbsp;<span class="c4"><i>r</i> = 11</span>`, note: "No digits left. 11 is less than 12, so it is a valid remainder." },
      { math: `<span class="c3">12</span> × <span class="c1">28</span> + <span class="c4">11</span> = 336 + 11 = <span class="c2">347</span>`, note: "Check with the division algorithm." }
    ],
    answer: `The farm fills <span class="m c1">28</span> full cartons with <span class="m c4">11</span> eggs left over.`
  },
  why: `<p>Division splits things fairly and finds rates. You use it to split a bill among friends, find a price per ounce, work out miles per gallon, or figure out how many buses a group needs. The remainder often matters as much as the quotient: 11 leftover eggs, or one more bus for the last few riders.</p>
<p>Division opens the door to fractions, decimals, ratios and percents, which are all ways of writing a quotient. The division algorithm <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> is the starting point of number theory, clock arithmetic and the Euclidean algorithm, and long division of polynomials in algebra follows the same steps.</p>`,
  careers: [
    { role: "Nurse", use: "Divides the dose ordered by the concentration on hand, such as 250 mg ordered from a 125 mg per 5 mL liquid, to find the volume to give." },
    { role: "Event planner", use: "Divides the guest count by table size and rounds up to find how many tables to rent." },
    { role: "Truck driver", use: "Divides miles driven by gallons used to track fuel economy and plan fuel stops." },
    { role: "Grocery store manager", use: "Divides package price by weight to set the unit price shown on shelf labels." },
    { role: "Software developer", use: "Uses integer division and the remainder (modulo) operator to split data into pages or batches." },
    { role: "Pharmacist", use: "Divides the total quantity dispensed by the daily dose to find how many days a prescription will last." }
  ],
  life: [
    "Splitting a restaurant bill evenly among friends",
    "Finding the price per ounce to compare two package sizes",
    "Working out how many cars or buses a group needs",
    "Figuring monthly payments from a yearly cost",
    "Sharing snacks or supplies equally"
  ],
  fields: [
    { name: "Number theory", use: "The division algorithm is the basis for divisibility, primes, greatest common divisors and modular arithmetic." },
    { name: "Computer science", use: "Integer division and the modulo operation are used in hashing, indexing and cryptography." },
    { name: "Chemistry", use: "Concentration is amount of substance divided by volume, and molar mass calculations divide mass by moles." },
    { name: "Economics", use: "Per-capita figures and unit costs are found by dividing totals." }
  ],
  prereqWhy: {
    "multiplication": "Each step of long division asks which multiple of the divisor fits, so multiplication facts must be quick and reliable.",
    "subtraction": "Long division subtracts each multiple of the divisor from part of the dividend to find what remains."
  },
  unlocksWhy: {
    "order-ops": "Order of operations treats multiplication and division as one level, done left to right, so you must be able to divide within expressions.",
    "factors": "A factor of n is a number that divides n with remainder 0, so testing factors is testing divisions.",
    "modular": "Clock arithmetic works entirely with the remainder r from the division algorithm.",
    "fractions": "A fraction a/b is the quotient a ÷ b, and simplifying fractions uses exact division.",
    "averages": "The mean is a total divided by the number of values."
  },
  beyond: [
    { field: "Number theory", why: "The division algorithm leads to the Euclidean algorithm, congruences and the Fundamental Theorem of Arithmetic." },
    { field: "Algebra I and II", why: "Polynomial long division and synthetic division follow the same divide, multiply, subtract, bring down pattern." },
    { field: "Abstract algebra", why: "Rings with a division algorithm, called Euclidean domains, generalize this property of the integers." }
  ],
  mistakes: [
    { wrong: `Leaving a remainder larger than the divisor, like <span class="m">347 ÷ 12 = 27</span> R 23.`, fix: `If the remainder is 12 or more, another 12 fits. Increase the quotient: <span class="m">28</span> R <span class="m">11</span>.` },
    { wrong: `Skipping a zero in the quotient: <span class="m">1,236 ÷ 12 = 13</span>.`, fix: `After 12 ÷ 12 = 1, bring down 3. 12 does not fit into 3, so write 0 above it before bringing down 6. The answer is <span class="m">103</span>.` },
    { wrong: `Saying <span class="m">5 ÷ 0 = 0</span> or <span class="m">5 ÷ 0 = 5</span>.`, fix: `Division by zero is undefined. No number times 0 gives 5.` },
    { wrong: `Rounding down when every item needs a place: 500 people, vans of 12, so 41 vans.`, fix: `41 vans hold 492 people and leave 8 behind. Context says round the quotient up: 42 vans.` }
  ],
  practice: [
    { q: `<span class="m">56 ÷ 7</span>`, a: `<span class="m">7 × 8 = 56</span>, so <b>8</b>.` },
    { q: `<span class="m">97 ÷ 4</span>. Give the quotient and remainder.`, a: `<span class="m">4 × 24 = 96</span>, <span class="m">97 − 96 = 1</span>. <b>24 R 1</b>. Check: 4 × 24 + 1 = 97.` },
    { q: `<span class="m">1,008 ÷ 12</span>`, a: `100 ÷ 12 → 8, 8 × 12 = 96, 100 − 96 = 4; bring down 8 → 48; 48 ÷ 12 = 4. <b>84</b>. Check: 12 × 84 = 1,008.` },
    { q: `500 people are going on a trip. Each van holds 12 people. How many vans are needed?`, a: `<span class="m">500 = 12 × 41 + 8</span>. 41 vans leave 8 people, so <b>42 vans</b> are needed.` }
  ],
  origin: `Book VII of Euclid's <i>Elements</i> (about 300 BCE) uses repeated subtraction of the smaller number from the larger, the idea behind the division algorithm. The ÷ symbol (obelus) was first used for division by Johann Rahn in his <i>Teutsche Algebra</i> (1659).`
};
