window.ARITH = window.ARITH || {};

ARITH["decimals"] = {
  title: "Decimals",
  short: "Place value extended to the right of the point",
  grade: "Grades 4–5",
  hours: 6,
  voice: "mixed",
  eyebrow: "Place value · decimal fractions",
  hero: `<span class="m"><span class="c1">0.47</span> = <span class="fr"><span class="c2">4</span><span>10</span></span> + <span class="fr"><span class="c3">7</span><span>100</span></span> = <span class="fr"><span>47</span><span>100</span></span></span>`,
  lede: `Each place to the right of the decimal point is worth one tenth of the place to its left. A decimal is a fraction with a power of 10 underneath.`,
  plain: `<p>Place value keeps going past the ones. Each step to the left is worth ten times more, so each step to the right is worth ten times less. After the ones place, the decimal point marks the start of the <b>tenths</b>, then the <b>hundredths</b>, then the <b>thousandths</b>.</p>
<p>Money is a good picture. In $3.47, the 3 is three whole dollars, the 4 is four dimes (tenths of a dollar), and the 7 is seven pennies (hundredths). You read it as "three and forty-seven hundredths".</p>
<p>To compare decimals, line up the decimal points and compare place by place from the left. Writing zeros at the end does not change a decimal: 0.5 and 0.50 are the same amount. This makes it easy to see that 0.5 is larger than 0.45, even though 45 looks bigger than 5.</p>
<p>Some fractions turn into decimals that stop, like 3/8 = 0.375. Others repeat forever, like 1/3 = 0.333….</p>`,
  formal: `<p>A <b>decimal numeral</b> <span class="m"><i>d</i><sub><i>k</i></sub>⋯<i>d</i><sub>1</sub><i>d</i><sub>0</sub>.<i>d</i><sub>−1</sub><i>d</i><sub>−2</sub>⋯</span> with digits <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, …, 9}</span> denotes</p>
<div class="display"><span class="m">∑ <i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup> = ⋯ + <i>d</i><sub>0</sub> + <span class="c2"><i>d</i><sub>−1</sub></span>·10<sup>−1</sup> + <span class="c3"><i>d</i><sub>−2</sub></span>·10<sup>−2</sup> + ⋯</span></div>
<p>A terminating decimal with <i>n</i> digits after the point equals a fraction with denominator <span class="m">10<sup><i>n</i></sup></span>. A fraction in lowest terms has a terminating decimal expansion if and only if its denominator has no prime factors other than 2 and 5. Every other rational number has an eventually repeating expansion, and every eventually repeating decimal is rational.</p>`,
  legend: [
    { c: "c2", sym: `<i>d</i><sub>−1</sub>`, name: "Tenths digit", desc: "First digit after the point. Each unit is one column of the 10×10 grid." },
    { c: "c3", sym: `<i>d</i><sub>−2</sub>`, name: "Hundredths digit", desc: "Second digit after the point. Each unit is one small square of the grid." },
    { c: "c1", sym: `<i>x</i>`, name: "Value", desc: "The number the decimal represents, shaded on the grid." },
    { c: "c4", sym: `10<sup>−<i>n</i></sup>`, name: "Place value", desc: "The worth of the nth place after the point: 0.1, 0.01, 0.001, …" }
  ],
  steps: { title: "How to compare and order decimals", items: [
    `Write the numbers in a column with the decimal points lined up.`,
    `Pad with zeros on the right so every number has the same number of decimal places.`,
    `Compare the whole-number parts first.`,
    `If they tie, compare tenths, then hundredths, and so on, until a digit differs.`,
    `The number with the larger digit in the first differing place is larger.`
  ] },
  example: {
    prompt: `A mechanic has three bolts with diameters 0.4 in, 0.38 in and 0.375 in. The hole is labelled 3/8 in. Which bolt matches exactly, and what is the order from smallest to largest?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>3</span><span>8</span></span> = 3 ÷ 8 = <span class="c1">0.375</span></span>`, note: "Convert the fraction by dividing numerator by denominator." },
      { math: `<span class="m">0.400,  0.380,  0.375</span>`, note: "Pad with zeros so all have three decimal places." },
      { math: `<span class="m">0.<span class="c2">4</span>00 vs 0.<span class="c2">3</span>80 vs 0.<span class="c2">3</span>75</span>`, note: "Tenths: 4 beats 3, so 0.4 is largest." },
      { math: `<span class="m">0.3<span class="c3">8</span>0 vs 0.3<span class="c3">7</span>5</span>`, note: "Tenths tie. Hundredths: 8 beats 7, so 0.38 > 0.375." }
    ],
    answer: `The 0.375 in bolt matches the 3/8 in hole. Order: <span class="m">0.375 &lt; 0.38 &lt; 0.4</span>.`
  },
  why: `<p>Decimals are how most measurements and all money are written: prices, fuel, lab results, sports times and nutrition labels. Calculators, spreadsheets and digital meters all show decimals.</p>
<p>Percents, scientific notation, and the real number line build directly on decimals. Seeing a decimal as a sum of tenths, hundredths and so on also prepares you for infinite series in calculus.</p>`,
  careers: [
    { role: "Pharmacist", use: "Reads and checks doses such as 0.25 mg against 2.5 mg, where a misplaced decimal point is a tenfold error." },
    { role: "Machinist", use: "Measures parts with calipers to thousandths of an inch, such as 0.375 in." },
    { role: "Bank teller", use: "Counts and records cash amounts to the hundredth of a dollar." },
    { role: "Lab technician", use: "Records measurements such as 2.45 mL and reports them to the correct number of decimal places." },
    { role: "Sports timer", use: "Ranks race results recorded to hundredths of a second." }
  ],
  life: [
    "Comparing prices per unit at the grocery store",
    "Reading a digital thermometer or scale",
    "Checking a receipt or bank statement",
    "Reading fuel prices and litres pumped",
    "Understanding race and lap times"
  ],
  fields: [
    { name: "Chemistry", use: "Measurements and concentrations are recorded as decimals with significant figures." },
    { name: "Finance", use: "Money, interest rates and exchange rates are decimal quantities." },
    { name: "Engineering", use: "Tolerances are specified in decimal units such as ±0.005 in." },
    { name: "Computer science", use: "Converting between decimal and binary fractions explains floating-point rounding." }
  ],
  prereqWhy: {
    "place-value": "Decimals extend the base-ten place-value chart to the right of the ones place.",
    "fractions": "A decimal is a fraction with denominator 10, 100, 1000 and so on, and converting between them needs fraction sense."
  },
  unlocksWhy: {
    "decimal-ops": "Adding, subtracting, multiplying and dividing decimals depends on lining up and tracking place value.",
    "percents": "A percent is a number of hundredths, so 0.35 = 35%.",
    "sci-notation": "The coefficient in scientific notation is a decimal between 1 and 10.",
    "real-numbers": "Every real number has a decimal expansion, and repeating versus non-repeating decimals separate rationals from irrationals."
  },
  beyond: [
    { field: "Statistics", why: "Data summaries, probabilities and p-values are reported as decimals." },
    { field: "Calculus", why: "Limits and infinite series are first understood through decimal approximations like 0.999… = 1." },
    { field: "Numerical analysis", why: "Rounding error and floating-point representation are studied on decimal and binary expansions." }
  ],
  mistakes: [
    { wrong: `"0.45 is larger than 0.5 because 45 &gt; 5"`, fix: `Pad to equal length: 0.45 vs 0.50. Fifty hundredths is more than forty-five hundredths.` },
    { wrong: `Reading 0.07 as "seven tenths"`, fix: `The 7 is in the hundredths place: "seven hundredths". Seven tenths is 0.7.` },
    { wrong: `<span class="m"><span class="fr"><span>1</span><span>3</span></span> = 0.3</span>`, fix: `0.3 is 3/10. One third is <span class="m">0.333…</span> with the 3 repeating forever.` }
  ],
  practice: [
    { q: `Write 3.07 in words and as a fraction.`, a: `Three and seven hundredths, <span class="m"><span class="fr"><span>307</span><span>100</span></span></span>.` },
    { q: `Order from least to greatest: 0.6, 0.06, 0.66, 0.606.`, a: `0.06 &lt; 0.6 &lt; 0.606 &lt; 0.66. Padded: 0.060, 0.600, 0.606, 0.660.` },
    { q: `Write <span class="m"><span class="fr"><span>7</span><span>20</span></span></span> as a decimal.`, a: `0.35. Multiply top and bottom by 5: 35/100.` },
    { q: `Write <span class="m"><span class="fr"><span>5</span><span>12</span></span></span> as a decimal. Does it terminate?`, a: `0.41666…, with the 6 repeating. It does not terminate because 12 = 2² × 3 has the prime factor 3.` }
  ],
  origin: `Decimal fractions were used by the Persian mathematician Jamshid al-Kashi in <i>The Key to Arithmetic</i> (1427). Simon Stevin's booklet <i>De Thiende</i> (1585) promoted them for everyday use in Europe.`
};
