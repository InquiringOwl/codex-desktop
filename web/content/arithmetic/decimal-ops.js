window.ARITH = window.ARITH || {};

ARITH["decimal-ops"] = {
  title: "Operations with Decimals",
  short: "Add, subtract, multiply and divide decimals",
  grade: "Grades 5–6",
  hours: 8,
  voice: "mixed",
  eyebrow: "Base ten · decimal arithmetic",
  hero: `<span class="m"><span class="c2">0.3</span> × <span class="c3">0.4</span> = <span class="c1">0.12</span></span>`,
  lede: `Three tenths of four tenths is twelve hundredths. The decimal places of the factors add up in the product.`,
  plain: `<p>Decimals are just base-ten numbers that keep going to the right of the ones place. So adding and subtracting them works like whole numbers, as long as you line up the decimal points. Tenths go under tenths, hundredths under hundredths.</p>
<p>Multiplying is where people get surprised. Take <span class="m">0.3 × 0.4</span>. Picture a square cut into a 10 by 10 grid. Shade 3 columns and 4 rows. The overlap is 12 little squares out of 100, so the answer is 0.12. Tenths times tenths gives hundredths. That is why you count the decimal places in both numbers and put that many in the answer.</p>
<p>To divide by a decimal, slide the decimal point in both numbers the same number of places until the divisor is a whole number. The answer does not change, because you multiplied both by the same power of ten.</p>`,
  formal: `<p>A terminating decimal with <span class="m"><i>j</i></span> digits after the point is the fraction <span class="m"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> for some integer <span class="m"><i>m</i></span>. The operations follow from fraction arithmetic:</p>
<div class="display"><span class="c2"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> × <span class="c3"><span class="fr"><span><i>n</i></span><span>10<sup><i>k</i></sup></span></span></span> = <span class="c1"><span class="fr"><span><i>mn</i></span><span>10<sup><i>j</i>+<i>k</i></sup></span></span></span><br><i>x</i> ÷ <i>y</i> = (<i>x</i> · 10<sup><i>k</i></sup>) ÷ (<i>y</i> · 10<sup><i>k</i></sup>) &nbsp;<span class="dim">(<i>y</i> ≠ 0)</span></div>
<p>For addition and subtraction, write both numbers over the common denominator <span class="m">10<sup>max(<i>j</i>,<i>k</i>)</sup></span>, which is what aligning decimal points does. A quotient of terminating decimals may be a repeating decimal, for example <span class="m">1 ÷ 0.3 = 3.333…</span></p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "First factor", desc: "Shown as shaded columns on the hundredths grid." },
    { c: "c3", sym: `<i>y</i>`, name: "Second factor", desc: "Shown as shaded rows on the grid." },
    { c: "c1", sym: `<i>xy</i>`, name: "Product", desc: "The overlap of the rows and columns. Its decimal places equal the sum of the factors' decimal places." },
    { c: "c4", sym: `10<sup><i>k</i></sup>`, name: "Power of ten", desc: "Multiplying by 10 moves every digit one place left. Used to clear the decimal from a divisor." }
  ],
  steps: { title: "How to compute with decimals", items: [
    `<b>Add or subtract:</b> line up the decimal points. Fill empty places with zeros.`,
    `Compute as with whole numbers and bring the decimal point straight down.`,
    `<b>Multiply:</b> ignore the points and multiply the digits as whole numbers.`,
    `Count the total decimal places in both factors and place the point that many places from the right.`,
    `<b>Divide:</b> move the point in the divisor right until it is a whole number. Move the dividend's point the same number of places.`,
    `Divide as usual, putting the quotient's point directly above the dividend's point.`,
    `Estimate with rounded numbers to check the size of the answer.`
  ] },
  example: {
    prompt: `Cheese costs $6.40 per pound. You buy 2.75 pounds and pay with a $20 bill. What is the cost, and what is your change?`,
    lines: [
      { math: `<span class="m">275 × 640 = 176,000</span>`, note: "Multiply the digits as whole numbers." },
      { math: `<span class="m">2 + 2 = 4</span> decimal places`, note: "2.75 has two decimal places and 6.40 has two." },
      { math: `<span class="m"><span class="c2">2.75</span> × <span class="c3">6.40</span> = <span class="c1">17.6000</span> = 17.60</span>`, note: "Place the point four places from the right." },
      { math: `<span class="m">3 × 6 = 18</span>`, note: "Estimate: about 3 lb at about $6 is about $18, so $17.60 is reasonable." },
      { math: `<span class="m">20.00 − 17.60 = 2.40</span>`, note: "Line up the points to subtract." }
    ],
    answer: `The cheese costs <span class="m">$17.60</span> and your change is <span class="m">$2.40</span>.`
  },
  why: `<p>Money, measurements and data are almost always decimals. Every receipt, fuel pump, bank statement and lab reading needs decimal arithmetic, and one misplaced point is a factor-of-ten error.</p>
<p>Calculators and spreadsheets do the digits for you, but you still need to know where the point should go to catch mistakes. Decimal fluency also underlies percents, scientific notation, statistics and the metric system.</p>`,
  careers: [
    { role: "Bank teller", use: "Adds and subtracts deposits and withdrawals to the cent and balances the cash drawer at the end of a shift." },
    { role: "Machinist", use: "Adds and subtracts dimensions measured to thousandths of an inch, like 1.250 in − 0.375 in, when setting cuts." },
    { role: "Pharmacist", use: "Multiplies decimal doses such as 0.25 mg per tablet by the number of tablets, where a misplaced point is a tenfold error." },
    { role: "Payroll clerk", use: "Multiplies hours such as 37.5 by hourly rates such as $22.80 to compute gross pay." },
    { role: "Lab technician", use: "Divides measured masses and volumes read off digital instruments to get concentrations." },
    { role: "Construction estimator", use: "Multiplies areas in square feet by decimal unit costs to price materials." }
  ],
  life: [
    "Totalling a grocery receipt and checking your change",
    "Working out the cost of 12.6 gallons of gas at $3.49 a gallon",
    "Splitting a restaurant bill evenly among friends",
    "Following a metric recipe or medicine label in millilitres",
    "Checking a paycheck's hours times rate"
  ],
  fields: [
    { name: "Accounting", use: "All ledger arithmetic is decimal arithmetic to two places." },
    { name: "Chemistry", use: "Measurements from balances and burettes are decimals combined in calculations." },
    { name: "Computer science", use: "Floating-point numbers are binary analogues of decimals, and understanding decimal rounding helps explain their errors." }
  ],
  prereqWhy: {
    "decimals": "You need to read decimal place values and know that 0.1 is one tenth before you can compute with them.",
    "multiplication": "Decimal multiplication is whole-number multiplication followed by placing the point."
  },
  unlocksWhy: {
    "averages": "Means are usually decimals, and computing them means adding decimal data and dividing.",
    "units": "Metric and other conversions multiply and divide by decimal conversion factors such as 2.54 cm per inch."
  },
  beyond: [
    { field: "Statistics", why: "Means, standard deviations and regression coefficients are computed and reported as decimals." },
    { field: "Numerical analysis", why: "Rounding and truncation in decimal computation are the starting point for studying computer error." }
  ],
  mistakes: [
    { wrong: `Lining up the right-hand digits: <span class="m">4.7 + 12.35</span> computed as <span class="m">0.47 + 12.35 = 12.82</span>.`, fix: `Line up the decimal points: <span class="m">4.70 + 12.35 = 17.05</span>.` },
    { wrong: `<span class="m">0.3 × 0.4 = 1.2</span>.`, fix: `The factors have one decimal place each, so the product has two: <span class="m">0.12</span>. A positive number less than 1 times another positive number less than 1 is less than both.` },
    { wrong: `Moving the point in the divisor but not the dividend: <span class="m">7.56 ÷ 0.36</span> treated as <span class="m">7.56 ÷ 36</span>.`, fix: `Move both points two places: <span class="m">756 ÷ 36 = 21</span>.` }
  ],
  practice: [
    { q: `<span class="m">4.7 + 12.35</span>`, a: `<span class="m">4.70 + 12.35 = 17.05</span>` },
    { q: `<span class="m">10 − 3.46</span>`, a: `<span class="m">10.00 − 3.46 = 6.54</span>` },
    { q: `<span class="m">0.06 × 2.5</span>`, a: `<span class="m">6 × 25 = 150</span>, with 2 + 1 = 3 decimal places: <span class="m">0.150 = 0.15</span>` },
    { q: `<span class="m">7.56 ÷ 0.36</span>`, a: `Multiply both by 100: <span class="m">756 ÷ 36 = 21</span>` }
  ],
  origin: `The Persian astronomer Jamshid al-Kashi used decimal fractions systematically in <i>The Key to Arithmetic</i> (1427). In Europe, Simon Stevin's pamphlet <i>De Thiende</i> (1585) argued for decimals in everyday measurement and trade.`
};
