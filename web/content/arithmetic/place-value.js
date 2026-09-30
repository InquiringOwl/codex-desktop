window.ARITH = window.ARITH || {};

ARITH["place-value"] = {
  title: "Place Value & Base Ten",
  short: "A digit's value depends on where it sits.",
  grade: "Grades 1–4",
  hours: 4,
  voice: "young",
  eyebrow: "Number sense · base-ten notation",
  hero: `<span class="m">4,306 = <span class="c4">4 × 1000</span> + <span class="c3">3 × 100</span> + <span class="c2">0 × 10</span> + <span class="c1">6 × 1</span></span>`,
  lede: `Ten ones make a ten, ten tens make a hundred, and ten hundreds make a thousand. Each place is worth ten times the place to its right.`,
  plain: `<p>We only have ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. So how do we write a number like four thousand three hundred six? We use places. The same digit means different amounts in different spots.</p>
<p>In 4,306, the 6 is in the <b>ones</b> place, so it means 6. The 0 is in the <b>tens</b> place, so there are no tens. The 3 is in the <b>hundreds</b> place, so it means 300. The 4 is in the <b>thousands</b> place, so it means 4,000.</p>
<p>Think of blocks. A small cube is one. Ten cubes in a stick make a ten. Ten sticks in a flat make a hundred. Ten flats in a big cube make a thousand. Whenever you get ten of something, you trade them for one of the next bigger size.</p>
<p>Zero matters here. Without it, 4,306 and 436 would look the same. The zero holds the empty tens place open.</p>`,
  formal: `<p>In <b>base ten</b> (decimal) positional notation, a string of digits <span class="m"><i>d</i><sub><i>k</i></sub> … <i>d</i><sub>2</sub><i>d</i><sub>1</sub><i>d</i><sub>0</sub></span>, each <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, 1, …, 9}</span>, names the number</p>
<div class="display"><i>d</i><sub><i>k</i></sub>·10<sup><i>k</i></sup> + ⋯ + <span class="c3"><i>d</i><sub>2</sub>·10<sup>2</sup></span> + <span class="c2"><i>d</i><sub>1</sub>·10<sup>1</sup></span> + <span class="c1"><i>d</i><sub>0</sub>·10<sup>0</sup></span></div>
<p>The <b>face value</b> of a digit is the digit itself. Its <b>place value</b> is the digit times the power of ten for its position. Every positive whole number has exactly one such representation with a nonzero leading digit, so the notation is unambiguous. Writing a number as this sum is called <b>expanded form</b>.</p>`,
  legend: [
    { c: "c4", sym: `1000`, name: "Thousands", desc: "Each digit here counts groups of one thousand. One thousand is ten hundreds." },
    { c: "c3", sym: `100`, name: "Hundreds", desc: "Each digit here counts groups of one hundred. One hundred is ten tens." },
    { c: "c2", sym: `10`, name: "Tens", desc: "Each digit here counts groups of ten. One ten is ten ones." },
    { c: "c1", sym: `1`, name: "Ones", desc: "The rightmost digit of a whole number counts single units." }
  ],
  steps: { title: "How to find what each digit is worth", items: [
    `Start at the rightmost digit. That is the ones place.`,
    `Move one place left for each step up: ones, tens, hundreds, thousands. Each place is worth 10 times the one to its right.`,
    `Multiply each digit by its place: for example, a 3 in the hundreds place is worth <span class="m">3 × 100 = 300</span>.`,
    `Add all the place values to write the number in expanded form.`,
    `To read the number aloud, say the thousands part, then the hundreds, then the tens and ones. Skip any place that holds a 0.`
  ] },
  example: {
    prompt: `You are writing a check for a used car that costs $4,306. The check needs the amount in words. What do you write?`,
    lines: [
      { math: `<span class="c4">4</span> <span class="c3">3</span> <span class="c2">0</span> <span class="c1">6</span>`, note: "Label the places from the right: ones, tens, hundreds, thousands." },
      { math: `<span class="c4">4 × 1000</span> = 4,000`, note: "The 4 is in the thousands place." },
      { math: `<span class="c3">3 × 100</span> = 300`, note: "The 3 is in the hundreds place." },
      { math: `<span class="c2">0 × 10</span> = 0,&nbsp; <span class="c1">6 × 1</span> = 6`, note: "There are no tens, and 6 ones." },
      { math: `4,000 + 300 + 0 + 6 = 4,306`, note: "Expanded form adds back to the original number, so the reading is right." }
    ],
    answer: `Write "Four thousand three hundred six and 00/100 dollars." There is no "tens" word because the tens digit is 0.`
  },
  why: `<p>Place value lets ten symbols name any whole number, however large. Prices, populations, distances and bank balances are all written this way. Reading a digit in the wrong place is a tenfold error, and people make costly mistakes with money and medicine by misplacing a digit.</p>
<p>Every written method for adding, subtracting, multiplying and dividing works place by place. Later, decimals extend the same system to the right of the ones place, and scientific notation and binary numbers in computing use the same positional idea with other bases or powers.</p>`,
  careers: [
    { role: "Nurse", use: "Reads medication orders where 0.5 mg and 5 mg differ by one place, and knows a misplaced digit is a tenfold dosing error." },
    { role: "Accountant", use: "Lines up figures by place in ledgers and spreadsheets so columns of dollars can be totaled and audited." },
    { role: "Software developer", use: "Converts between base ten, binary (base two) and hexadecimal (base sixteen), which all use place value." },
    { role: "Bank teller", use: "Writes and verifies check amounts in both digits and words, which requires reading each place correctly." },
    { role: "Machinist", use: "Reads measurements to the thousandth of an inch, where each place to the right is one tenth the size of the last." }
  ],
  life: [
    "Reading prices, paychecks and bills correctly",
    "Writing the amount on a check in words",
    "Reading addresses, phone numbers and odometer readings",
    "Counting cash in hundreds, tens and ones",
    "Comparing house prices or car prices"
  ],
  fields: [
    { name: "Computer science", use: "Binary and hexadecimal are place-value systems in base 2 and base 16." },
    { name: "Accounting and finance", use: "Column alignment by place value is the basis of every ledger and financial statement." },
    { name: "Physics and chemistry", use: "Measurements and significant figures depend on knowing the place value of each digit." }
  ],
  prereqWhy: {
    "counting": "Place value is a way of recording counts, so you need to count reliably to 10 and beyond before grouping by tens."
  },
  unlocksWhy: {
    "rounding": "Rounding to the nearest ten, hundred or thousand means looking at the digit one place to the right of the rounding place.",
    "addition": "Column addition adds ones to ones, tens to tens and so on, and carrying is trading ten of one place for one of the next.",
    "decimals": "Decimals extend place value to the right of the ones place with tenths, hundredths and thousandths."
  },
  beyond: [
    { field: "Number theory", why: "Divisibility tests, such as the rule for 9 using digit sums, come from the base-ten expansion of a number." },
    { field: "Algebra I", why: "Polynomials in x look like expanded form with 10 replaced by x, and long division of polynomials copies long division of numbers." },
    { field: "Discrete math and computing", why: "Number bases, binary arithmetic and data representation all use positional notation." }
  ],
  mistakes: [
    { wrong: `Writing "four thousand six" as <span class="m">46</span> or <span class="m">4,0006</span>.`, fix: `Each place needs exactly one digit. Four thousand six is <span class="m">4,006</span>: 4 thousands, 0 hundreds, 0 tens, 6 ones.` },
    { wrong: `Saying the 7 in 3,782 is worth 7.`, fix: `The 7 is in the hundreds place, so it is worth <span class="m">7 × 100 = 700</span>.` },
    { wrong: `Thinking 4,560 has only 6 tens because the tens digit is 6.`, fix: `The tens digit is 6, but the total number of tens is 456, since <span class="m">4,560 = 456 × 10</span>.` }
  ],
  practice: [
    { q: `What is the value of the 7 in 3,782?`, a: `It is in the hundreds place: <span class="m">7 × 100 = </span><b>700</b>.` },
    { q: `Write 5,049 in expanded form.`, a: `<span class="m">5,000 + 0 + 40 + 9</span>, or <b>5 × 1000 + 4 × 10 + 9 × 1</b>.` },
    { q: `What number is 3 thousands, 14 hundreds, 2 tens and 5 ones?`, a: `14 hundreds is 1,400. <span class="m">3,000 + 1,400 + 20 + 5 = </span><b>4,425</b>.` },
    { q: `How many tens are in 4,560 altogether?`, a: `<span class="m">4,560 ÷ 10 = 456</span>, so <b>456 tens</b>.` }
  ],
  origin: `The Babylonians used a positional system in base 60 about 4,000 years ago. The base-ten place-value system with a digit for zero developed in India; Brahmagupta treated zero as a number in 628 CE. It reached the Islamic world through al-Khwarizmi's work around 825 CE and was spread in Europe by Fibonacci's <i>Liber Abaci</i> in 1202.`
};
