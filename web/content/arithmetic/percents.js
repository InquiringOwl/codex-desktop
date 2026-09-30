window.ARITH = window.ARITH || {};

ARITH["percents"] = {
  title: "Percents",
  short: "Parts per hundred",
  grade: "Grades 6–7",
  hours: 6,
  voice: "mixed",
  eyebrow: "Rational numbers · per hundred",
  hero: `<span class="m"><span class="c2">part</span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> × <span class="c3">whole</span></span>`,
  lede: `A percent is a ratio out of 100. The same equation answers all three percent questions: find the part, the percent, or the whole.`,
  plain: `<p>"Percent" means "out of a hundred". If 35% of a grid of 100 squares is shaded, 35 squares are shaded. So 35% is the fraction 35/100, which is also the decimal 0.35.</p>
<p>Percents are handy because they put everything on the same scale. Getting 42 out of 48 on one test and 70 out of 80 on another is hard to compare. Turn both into percents, 87.5% and 87.5%, and you see they are equal.</p>
<p>Every percent problem has three pieces: the percent, the part, and the whole. If you know any two, you can find the third with one equation. Just remember that the whole is the thing you are taking a percent <i>of</i>.</p>`,
  formal: `<p>For a real number <span class="m"><i>p</i></span>, <span class="m"><i>p</i>%</span> denotes <span class="m"><span class="fr"><span><i>p</i></span><span>100</span></span> = <i>p</i> × 0.01</span>. The <b>percent equation</b> relates a part <span class="m c2"><i>A</i></span>, a whole <span class="m c3"><i>B</i></span> (<span class="m"><i>B</i> ≠ 0</span>) and a percent <span class="m c1"><i>p</i></span>:</p>
<div class="display"><span class="c2"><i>A</i></span> = <span class="fr"><span class="c1"><i>p</i></span><span>100</span></span> · <span class="c3"><i>B</i></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c1"><i>p</i></span> = 100 · <span class="fr"><span class="c2"><i>A</i></span><span class="c3"><i>B</i></span></span> &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c3"><i>B</i></span> = <span class="fr"><span>100<span class="c2"><i>A</i></span></span><span class="c1"><i>p</i></span></span> <span class="dim">(<i>p</i> ≠ 0)</span></div>
<p>Percents greater than 100 and less than 1 are valid: 250% = 2.5 and 0.4% = 0.004. Conversions: decimal to percent multiplies by 100; percent to decimal divides by 100.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Percent", desc: "How many out of every 100. On the grid, the number of shaded squares." },
    { c: "c2", sym: `<i>A</i>`, name: "Part", desc: "The amount that is p percent of the whole." },
    { c: "c3", sym: `<i>B</i>`, name: "Whole", desc: "The base amount the percent is taken of. It counts as 100%." }
  ],
  steps: { title: "How to solve a percent problem", items: [
    `Identify the whole (the amount after "of"), the part, and the percent. One of them is unknown.`,
    `Write the percent as a decimal by dividing by 100.`,
    `To find the part, multiply: <span class="m"><span class="c2">part</span> = <span class="c1">decimal</span> × <span class="c3">whole</span></span>.`,
    `To find the percent, divide part by whole, then multiply by 100.`,
    `To find the whole, divide the part by the decimal.`,
    `Check that the answer is sensible: a part smaller than the whole means a percent under 100.`
  ] },
  example: {
    prompt: `In a survey, 312 of 480 residents said they want a new park. What percent is that? If the same rate holds across the town's 2,000 residents, about how many want the park?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">312</span><span class="c3">480</span></span> = 0.65</span>`, note: "Divide part by whole." },
      { math: `<span class="m">0.65 × 100 = <span class="c1">65</span>%</span>`, note: "Convert the decimal to a percent." },
      { math: `<span class="m"><span class="c1">0.65</span> × <span class="c3">2,000</span> = <span class="c2">1,300</span></span>`, note: "Apply the percent to the new whole." },
      { math: `<span class="m">0.65 × 480 = 312</span>`, note: "Check with the original numbers." }
    ],
    answer: `<span class="m">65%</span> of those surveyed want the park, which suggests about <span class="m">1,300</span> of the town's 2,000 residents.`
  },
  why: `<p>Percents are the everyday language of comparison: test scores, sale prices, tax rates, battery levels, polling results, nutrition labels and interest rates. Understanding which number is the whole keeps you from being misled by a headline.</p>
<p>Percents lead straight into percent change, interest and growth rates, and into probability and statistics, where results are routinely reported as percentages.</p>`,
  careers: [
    { role: "Registered dietitian", use: "Reads % Daily Value on nutrition labels and computes the percent of calories from fat, carbohydrate and protein." },
    { role: "Pollster", use: "Reports survey results as percentages of respondents and states margins of error in percentage points." },
    { role: "Real estate agent", use: "Calculates a commission as a percent of the sale price, such as 2.5% of $340,000 = $8,500." },
    { role: "Teacher", use: "Converts raw scores to percentages to assign grades." },
    { role: "Quality control inspector", use: "Tracks the percent of units that fail inspection in each production batch." },
    { role: "Server", use: "Estimates tips as 15% to 20% of a bill and splits tip pools." }
  ],
  life: [
    "Working out a 20% tip on a restaurant bill",
    "Reading your phone's battery percentage",
    "Converting a test score to a percent",
    "Using % Daily Value on food labels",
    "Understanding a 30% chance of rain"
  ],
  fields: [
    { name: "Statistics", use: "Relative frequencies, confidence levels and many survey results are reported as percents." },
    { name: "Nutrition science", use: "Diets and labels describe nutrient intake as percents of daily targets." },
    { name: "Business", use: "Profit margins, market share and commissions are percents." }
  ],
  prereqWhy: {
    "decimals": "Converting a percent to a decimal, such as 35% = 0.35, is the key step in every calculation."
  },
  unlocksWhy: {
    "percent-apps": "Discounts, tax, percent change and interest all apply the percent equation, often repeatedly."
  },
  beyond: [
    { field: "Statistics", why: "Percentiles, relative frequency tables and confidence intervals are all expressed in percents." },
    { field: "Probability", why: "Probabilities are often stated as percents, and converting between forms is routine." }
  ],
  mistakes: [
    { wrong: `Using the wrong whole: "18 is what percent of 72?" answered as <span class="m">72 ÷ 18 = 4 = 400%</span>.`, fix: `The whole follows "of". <span class="m">18 ÷ 72 = 0.25 = 25%</span>.` },
    { wrong: `Writing 5% as 0.5.`, fix: `Divide by 100: <span class="m">5% = 0.05</span>. And <span class="m">0.5 = 50%</span>.` },
    { wrong: `Thinking a percent over 100 is impossible.`, fix: `It just means more than the whole. If sales went from 40 to 100 units, the new amount is <span class="m">250%</span> of the old.` }
  ],
  practice: [
    { q: `What is 20% of 45?`, a: `<span class="m">0.20 × 45 = 9</span>` },
    { q: `Write <span class="m"><span class="fr"><span>3</span><span>8</span></span></span> as a percent.`, a: `<span class="m">3 ÷ 8 = 0.375 = 37.5%</span>` },
    { q: `18 is what percent of 72?`, a: `<span class="m">18 ÷ 72 = 0.25 = 25%</span>` },
    { q: `30 is 12% of what number?`, a: `<span class="m">30 ÷ 0.12 = 250</span>. Check: <span class="m">0.12 × 250 = 30</span>.` }
  ],
  origin: `The word comes from the Latin <i>per centum</i>, "by the hundred". The % sign grew out of abbreviations of the Italian "per cento" in merchants' manuscripts of the 1400s.`
};
