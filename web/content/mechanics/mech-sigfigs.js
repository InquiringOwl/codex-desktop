window.ARITH = window.ARITH || {};

ARITH["mech-sigfigs"] = {
  title: "Significant Figures, Precision & Uncertainty",
  short: "How many digits a measurement or result has earned",
  grade: "College PHYS 1xx · University Physics I",
  hours: 3,
  voice: "plain",
  eyebrow: "Mechanics · measurement",
  hero: `<span class="m"><i>L</i> = <span class="c2">21.6</span> ± <span class="c3">0.1</span> cm &nbsp;&nbsp; <span class="c1">602.</span><span class="c4">64</span> → <span class="c1">603</span> cm<sup>2</sup></span>`,
  lede: `No measurement is exact. Its <span class="c3">uncertainty</span> limits how many digits mean anything, and a calculated result may not claim more precision than the data it came from.`,
  plain: `<p>Measure a sheet of paper with a ruler marked in millimetres and you might write 21.6 cm. You cannot honestly write 21.5900 cm, because the ruler cannot tell those last digits apart. The digits you can vouch for, plus one estimated digit, are the <b>significant figures</b>. The <b>uncertainty</b>, written with ±, says how far off the value could reasonably be: 21.6 ± 0.1 cm means somewhere from 21.5 to 21.7 cm.</p>
<p>Two words get mixed up. <b>Precision</b> is how finely and how repeatably you can measure: a caliper is more precise than a ruler. <b>Accuracy</b> is how close you are to the true value. A bathroom scale that always reads 2 kg heavy is precise but not accurate.</p>
<p>A calculator happily prints 602.64 for 21.6 × 27.9. Those last digits are noise. Two short rules decide what to keep. When you <b>multiply or divide</b>, keep as many significant figures as the least precise factor has. When you <b>add or subtract</b>, keep as many decimal places as the number with the fewest decimal places. Keep every digit during the calculation and round once at the end.</p>`,
  formal: `<p>A measured value is reported as <span class="m"><i>A</i> ± <i>δA</i></span>, where <span class="m"><i>δA</i> &gt; 0</span> is its <b>uncertainty</b>. The <b>percent uncertainty</b> is</p>
<div class="display">percent uncertainty = <span class="fr"><span><i>δA</i></span><span><i>A</i></span></span> × 100%</div>
<p><b>Significant figures</b> are the reliably known digits plus the first uncertain digit. Nonzero digits are significant; zeros between them are significant; leading zeros are not (0.00420 has three); trailing zeros are significant when there is a decimal point (4.200 has four) and ambiguous otherwise (5030), which scientific notation resolves (<span class="m">5.03 × 10<sup>3</sup></span> or <span class="m">5.030 × 10<sup>3</sup></span>). Exact numbers, such as counted objects, defined conversions and the 2 in <span class="m">2π<i>r</i></span>, have unlimited significant figures.</p>
<p><b>Rules for results.</b> For products and quotients, the result has the same number of significant figures as the factor with the fewest. For sums and differences, the result has the same number of decimal places as the term with the fewest. Uncertainties propagate in the same spirit: for sums and differences the absolute uncertainties add, and for products and quotients the percent uncertainties add. This worst-case rule is an upper bound; for independent random errors, combining in quadrature gives a smaller estimate.</p>`,
  legend: [
    { c: "c2", sym: `<i>A</i>`, name: "Measured value", desc: "The best reading from the instrument, for example 21.6 cm." },
    { c: "c3", sym: `± <i>δA</i>`, name: "Uncertainty", desc: "How far the true value could reasonably lie from the reading. Often about half the smallest division of the scale." },
    { c: "c1", sym: `602.`, name: "Digits kept", desc: "The digits of a result that the data justify, set by the significant-figure or decimal-place rule." },
    { c: "c4", sym: `64`, name: "Digits dropped", desc: "Calculator digits beyond the precision of the data. They are removed by rounding at the end." }
  ],
  steps: { title: "How to report a calculated result", items: [
    `Write each <span class="c2">measured value</span> with its units, and note its significant figures and decimal places.`,
    `Do the whole calculation with every digit the calculator gives. Do not round intermediate steps.`,
    `For × and ÷, find the smallest number of significant figures among the factors. For + and −, find the fewest decimal places among the terms.`,
    `Round the final answer: <span class="c1">keep</span> those digits and <span class="c4">drop</span> the rest, rounding up if the first dropped digit is 5 or more.`,
    `If uncertainties are known, estimate the result's <span class="c3">uncertainty</span>: add absolute uncertainties for sums, add percent uncertainties for products.`,
    `Use scientific notation if trailing zeros would be ambiguous.`
  ] },
  example: {
    prompt: `A US letter sheet is measured with a millimetre ruler as <span class="m">21.6 ± 0.1 cm</span> by <span class="m">27.9 ± 0.1 cm</span>. Find its area and perimeter with correct significant figures, and estimate the uncertainty in the area.`,
    lines: [
      { math: `<span class="m"><i>A</i> = (21.6 cm)(27.9 cm) = <span class="c1">602.</span><span class="c4">64</span> cm<sup>2</sup> → <span class="c1">603 cm<sup>2</sup></span></span>`, note: "Both lengths have 3 significant figures, so the product keeps 3." },
      { math: `<span class="m"><i>P</i> = 2(21.6 cm + 27.9 cm) = 99.0 cm</span>`, note: "The sum keeps one decimal place, like the data. The 2 is exact." },
      { math: `<span class="m"><span class="fr"><span>0.1</span><span>21.6</span></span> = 0.46%, &nbsp; <span class="fr"><span>0.1</span><span>27.9</span></span> = 0.36%</span>`, note: "Percent uncertainty of each length." },
      { math: `<span class="m"><i>δA</i>/<i>A</i> ≈ 0.46% + 0.36% = 0.82%</span>`, note: "For a product, percent uncertainties add." },
      { math: `<span class="m"><i>δA</i> ≈ 0.0082 × 603 cm<sup>2</sup> ≈ 5 cm<sup>2</sup></span>`, note: "Round the uncertainty to one significant figure." },
      { math: `<span class="m"><i>A</i> = 603 ± 5 cm<sup>2</sup></span>`, note: "Check: the last kept digit (the 3 in 603) is the uncertain one, as it should be. The true sheet is 21.59 cm × 27.94 cm = 603.2 cm², inside the range." }
    ],
    answer: `Area <span class="m">603 ± 5 cm<sup>2</sup></span>, perimeter <span class="m">99.0 cm</span>. The calculator's 602.64 claims precision the ruler never had.`
  },
  why: `<p>Every number that comes from a measurement carries an uncertainty, and every engineering decision depends on it. A bolt hole machined to 10.00 ± 0.02 mm and a bolt of 9.99 ± 0.02 mm might not fit. A drug dose, a bridge load or a lab result reported with too many digits suggests confidence nobody has; one with too few throws away real information.</p>
<p>Significant figures are the quick, everyday form of this bookkeeping. The same ideas grow into the error analysis of every lab course and into the statistics used to decide whether a new measurement agrees with theory.</p>`,
  careers: [
    { role: "Machinist", use: "Reads micrometers to 0.01 mm and checks every part against a drawing tolerance such as ±0.05 mm." },
    { role: "Clinical laboratory scientist", use: "Reports blood test results with the precision the analyser supports and flags values whose uncertainty crosses a reference limit." },
    { role: "Quality engineer", use: "Measures parts from a production run and decides from their spread whether the process stays within tolerance." },
    { role: "Surveyor", use: "Combines many angle and distance measurements and states the uncertainty of each property corner." },
    { role: "Pharmacist", use: "Weighs compounding ingredients on a balance whose readability sets the smallest mass that can be measured to the required accuracy." }
  ],
  life: [
    "Reading a kitchen scale that shows grams but not tenths of a gram",
    "Deciding whether a 0.1 °C change on a fever thermometer means anything",
    "Measuring a window for blinds to the nearest millimetre, not the nearest centimetre",
    "Not trusting a fuel-economy figure quoted to five digits",
    "Understanding the plus-or-minus margin in an opinion poll"
  ],
  fields: [
    { name: "Experimental science", use: "Every published measurement states its uncertainty so others can test it against theory." },
    { name: "Manufacturing", use: "Tolerances and gauge precision decide whether parts fit together." },
    { name: "Chemistry", use: "Titration and mass data are reported with significant figures set by burettes and balances." },
    { name: "Medicine", use: "Lab reference ranges and dosing depend on the precision of the measurement." }
  ],
  prereqWhy: {
    "mech-dimensions": "Estimation already asked how many digits an answer deserves; significant figures answer that question for measured data and computed results."
  },
  unlocksWhy: {},
  mathWhy: {
    "rounding": `Every result is rounded to the digits it has earned, for example <span class="m">602.64 → 603</span> and <span class="m">16.076 → 16.1</span>, rounding up when the first dropped digit is 5 or more.`,
    "sci-notation": `Scientific notation shows significant figures unambiguously: <span class="m">5.03 × 10<sup>3</sup></span> has three and <span class="m">5.030 × 10<sup>3</sup></span> has four, where "5030" leaves it unclear.`
  },
  beyond: [
    { field: "Computational Physics", why: "Floating-point numbers carry about 16 significant digits, and round-off and truncation errors must be tracked just like measurement uncertainty." },
    { field: "Mechanical Engineering", why: "Tolerances, fits and gauge selection all rest on stating and combining uncertainties correctly." },
    { field: "Modern Physics", why: "Tests of theory, such as measurements of fundamental constants, hinge on uncertainties quoted to many significant figures." }
  ],
  mistakes: [
    { wrong: `Copying every calculator digit: <span class="m">125.4 m ÷ 11.2 s = 11.196428 m/s</span>.`, fix: `11.2 s has three significant figures, so the quotient keeps three: <span class="m">11.2 m/s</span>.` },
    { wrong: `Using the significant-figure rule for a sum: <span class="m">12.52 m + 3.1 m + 0.456 m = 16.08 m</span> because 12.52 has four figures.`, fix: `For sums use decimal places. 3.1 m has one decimal place, so the sum is <span class="m">16.1 m</span>.` },
    { wrong: `Counting leading zeros: saying 0.00420 has six significant figures.`, fix: `Leading zeros only locate the decimal point. <span class="m">0.00420 = 4.20 × 10<sup>−3</sup></span> has three.` },
    { wrong: `Rounding each intermediate step, so errors pile up.`, fix: `Carry all digits through the calculation and round once at the end.` }
  ],
  practice: [
    { q: `How many significant figures are in 0.00420 m, 6.020 × 10<sup>3</sup> kg and 5030 s?`, a: `0.00420 m has 3 (leading zeros do not count, the trailing zero after the decimal point does). <span class="m">6.020 × 10<sup>3</sup></span> kg has 4. 5030 s is ambiguous: at least 3, and 4 only if the final zero was measured. Write <span class="m">5.03 × 10<sup>3</sup></span> or <span class="m">5.030 × 10<sup>3</sup></span> s to say which.` },
    { q: `Add 12.52 m + 3.1 m + 0.456 m.`, a: `The raw sum is 16.076 m. The least precise term, 3.1 m, has one decimal place, so the answer is <span class="m">16.1 m</span>.` },
    { q: `A cyclist covers 125.4 m in 11.2 s. What is her average speed?`, a: `<span class="m">125.4 m ÷ 11.2 s = 11.196… m/s</span>. The time has three significant figures, so <span class="m"><i>v</i> = 11.2 m/s</span>.` },
    { q: `A card of length <span class="m">5.00 ± 0.05 cm</span> blocks a light gate for <span class="m">0.250 ± 0.005 s</span>. Find the card's speed and its uncertainty.`, a: `<span class="m"><i>v</i> = 0.0500 m ÷ 0.250 s = 0.200 m/s</span>. Percent uncertainties: <span class="m">0.05/5.00 = 1%</span> and <span class="m">0.005/0.250 = 2%</span>, which add to 3%. So <span class="m"><i>δv</i> = 0.03 × 0.200 = 0.006 m/s</span> and <span class="m"><i>v</i> = 0.200 ± 0.006 m/s</span>.` }
  ],
  origin: `Adrien-Marie Legendre published the method of least squares for combining imperfect measurements in 1805, and Carl Friedrich Gauss linked it to the normal distribution of errors in 1809. Their work founded the theory of errors behind modern uncertainty analysis.`
};
