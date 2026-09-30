window.ARITH = window.ARITH || {};

ARITH["percent-apps"] = {
  title: "Percent Change, Tax & Interest",
  short: "Discounts, tax, growth and interest",
  grade: "Grades 7–8; revisited in personal finance",
  hours: 8,
  voice: "plain",
  eyebrow: "Applied percents · growth and interest",
  hero: `<span class="m"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>)<sup><i>t</i></sup></span>`,
  lede: `Compound interest multiplies by the same factor <span class="m">1 + <span class="c4"><i>r</i></span></span> each period. Simple interest adds the same amount each period instead.`,
  plain: `<p>Most real uses of percents are about change. A price goes up 15%, a jacket is 30% off, sales tax adds 8%, a savings account earns 5% a year. The trick that ties them together is the <b>multiplier</b>. A 15% increase means multiply by 1.15. A 30% discount means multiply by 0.70. Adding 8% tax means multiply by 1.08.</p>
<p><b>Percent change</b> compares the change to where you started: new minus old, divided by old. Always divide by the old value.</p>
<p>Interest is the price of borrowing money. With <b>simple interest</b>, you earn the same amount every year, based only on the original deposit. With <b>compound interest</b>, each year's interest is added to the balance, and next year you earn interest on that too. Over short times the difference is small. Over decades it is huge, which is why compound growth matters so much for savings and debt.</p>`,
  formal: `<p>For an original value <span class="m"><i>V</i><sub>0</sub> ≠ 0</span> and a new value <span class="m"><i>V</i><sub>1</sub></span>, the <b>percent change</b> is <span class="m">100 · (<i>V</i><sub>1</sub> − <i>V</i><sub>0</sub>)/<i>V</i><sub>0</sub></span>. A change by rate <span class="m"><i>r</i></span> (as a decimal) multiplies by <span class="m">1 + <i>r</i></span>, so a price with tax rate <span class="m"><i>s</i></span> totals <span class="m"><i>x</i>(1 + <i>s</i>)</span> and a discount <span class="m"><i>d</i></span> leaves <span class="m"><i>x</i>(1 − <i>d</i>)</span>.</p>
<div class="display">Simple interest: &nbsp;<span class="c2"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span><i>t</i>)</span> &nbsp;<span class="dim">(<i>I</i> = <i>Prt</i>)</span><br>Compound interest: &nbsp;<span class="c3"><i>A</i> = <span class="c1"><i>P</i></span>(1 + <span class="c4"><i>r</i></span>/<i>n</i>)<sup><i>nt</i></sup></span><br><span class="dim">Continuous compounding: <i>A</i> = <i>P</i>e<sup><i>rt</i></sup></span></div>
<p>Here <span class="m c1"><i>P</i></span> is the principal, <span class="m c4"><i>r</i></span> the annual rate as a decimal, <span class="m"><i>t</i></span> the time in years and <span class="m"><i>n</i></span> the number of compounding periods per year. Simple interest grows linearly in <span class="m"><i>t</i></span>. Compound interest grows exponentially. Successive percent changes multiply: an increase of <span class="m"><i>r</i><sub>1</sub></span> then <span class="m"><i>r</i><sub>2</sub></span> gives the factor <span class="m">(1 + <i>r</i><sub>1</sub>)(1 + <i>r</i><sub>2</sub>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>`, name: "Principal", desc: "The starting amount deposited or borrowed." },
    { c: "c4", sym: `<i>r</i>`, name: "Rate", desc: "The annual interest rate or percent change, written as a decimal (5% = 0.05)." },
    { c: "c2", sym: `<i>P</i>(1 + <i>rt</i>)`, name: "Simple interest balance", desc: "Grows by the same amount P·r each year. A straight line on the chart." },
    { c: "c3", sym: `<i>P</i>(1 + <i>r</i>)<sup><i>t</i></sup>`, name: "Compound balance", desc: "Grows by the same factor each year. A curve that bends upward." },
    { c: "c5", sym: `<i>t</i>`, name: "Time", desc: "Number of years. With n periods per year the exponent becomes nt." }
  ],
  steps: { title: "How to handle percent change and interest", items: [
    `Convert the percent to a decimal rate <span class="m c4"><i>r</i></span>.`,
    `For an increase (tax, markup, growth), multiply by <span class="m">1 + <i>r</i></span>. For a decrease (discount, depreciation), multiply by <span class="m">1 − <i>r</i></span>.`,
    `For percent change, compute <span class="m">(new − old) ÷ old</span> and convert to a percent.`,
    `For simple interest, compute <span class="m"><i>I</i> = <span class="c1"><i>P</i></span><span class="c4"><i>r</i></span><i>t</i></span> and add it to the principal.`,
    `For compound interest, divide the annual rate by the periods per year <span class="m"><i>n</i></span>, raise <span class="m">1 + <i>r</i>/<i>n</i></span> to the power <span class="m"><i>nt</i></span>, and multiply by <span class="m c1"><i>P</i></span>.`,
    `Round money to the cent only at the end.`
  ] },
  example: {
    prompt: `You deposit $2,000 at 5% annual interest for 3 years. How much do you have with simple interest? With interest compounded once a year?`,
    lines: [
      { math: `<span class="m"><i>I</i> = <span class="c1">2,000</span> × <span class="c4">0.05</span> × 3 = 300</span>`, note: "Simple interest earns $100 each year for 3 years." },
      { math: `<span class="m c2">2,000 + 300 = 2,300</span>`, note: "Simple interest balance." },
      { math: `<span class="m"><span class="c1">2,000</span> × (1 + <span class="c4">0.05</span>)<sup>3</sup></span>`, note: "Compound annually: multiply by 1.05 once per year." },
      { math: `<span class="m">1.05<sup>3</sup> = 1.157625</span>`, note: "1.05 × 1.05 × 1.05." },
      { math: `<span class="m c3">2,000 × 1.157625 = 2,315.25</span>`, note: "Compound balance." },
      { math: `<span class="m">2,315.25 − 2,300 = 15.25</span>`, note: "Extra earned from interest on interest." }
    ],
    answer: `Simple interest gives <span class="m">$2,300.00</span>. Annual compounding gives <span class="m">$2,315.25</span>, which is $15.25 more.`
  },
  why: `<p>These are the percent calculations that cost or earn you money: sale prices, sales tax, raises, inflation, credit card balances, car loans, mortgages and retirement savings. A credit card at 24% a year compounds against you. A retirement account at 7% a year compounds for you, and over 30 years it multiplies the principal by more than 7.</p>
<p>Compound interest is the everyday face of exponential growth. The same formula models population growth, radioactive decay and the spread of disease, and it is how the constant e was first discovered.</p>`,
  careers: [
    { role: "Loan officer", use: "Explains how the interest rate and compounding on a mortgage or car loan determine the total repaid." },
    { role: "Financial planner", use: "Projects retirement balances with compound growth at assumed annual returns." },
    { role: "Retail buyer", use: "Sets prices with percent markups over cost and plans percent-off promotions that keep a target margin." },
    { role: "Tax preparer", use: "Applies percentage tax rates to income brackets and calculates sales and use tax." },
    { role: "Actuary", use: "Discounts future payments to present value using compound interest when pricing insurance and pensions." },
    { role: "Economist", use: "Measures inflation as the percent change in the Consumer Price Index from one year to the next." }
  ],
  life: [
    "Working out the sale price of an item that is 30% off",
    "Adding sales tax to a purchase",
    "Comparing savings accounts by their annual percentage yield",
    "Understanding how a credit card balance grows if unpaid",
    "Calculating the percent raise in a new job offer",
    "Seeing how inflation changes prices over time"
  ],
  fields: [
    { name: "Finance", use: "Present value, annuities and loan amortisation are all built on the compound interest formula." },
    { name: "Economics", use: "Growth rates of GDP, prices and wages are percent changes." },
    { name: "Biology", use: "Population growth with a constant rate follows the compound growth model." },
    { name: "Accounting", use: "Depreciation, tax and markups are percent-of-value calculations." }
  ],
  prereqWhy: {
    "percents": "Every application here starts from finding a percent of an amount and converting percents to decimals.",
    "exponents": "Compound interest repeats the same multiplication each period, which is written as a power."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Exponential growth and decay functions, and solving for time with logarithms, extend the compound interest formula." },
    { field: "Precalculus", why: "The limit of (1 + 1/n)ⁿ as n grows defines e and continuous compounding." },
    { field: "Financial mathematics", why: "Annuities, amortisation and bond pricing are sums of compound interest terms." }
  ],
  mistakes: [
    { wrong: `A price drops 20% and then rises 20%, so it is back to where it started.`, fix: `The factors multiply: <span class="m">0.80 × 1.20 = 0.96</span>. The price ends 4% lower.` },
    { wrong: `Dividing by the new value: from $40 to $46 is <span class="m">6 ÷ 46 ≈ 13%</span>.`, fix: `Percent change divides by the original: <span class="m">6 ÷ 40 = 0.15 = 15%</span>.` },
    { wrong: `Using the annual rate every month: 6% compounded monthly as <span class="m">(1.06)<sup>12<i>t</i></sup></span>.`, fix: `Divide the rate by the periods: <span class="m">(1 + 0.06/12)<sup>12<i>t</i></sup> = 1.005<sup>12<i>t</i></sup></span>.` },
    { wrong: `Confusing percent with percentage points: a rate rising from 4% to 5% "rose 1%".`, fix: `It rose 1 percentage point, which is a <span class="m">25%</span> increase in the rate.` }
  ],
  practice: [
    { q: `A price rises from $40 to $46. What is the percent change?`, a: `<span class="m">(46 − 40) ÷ 40 = 0.15</span>, a 15% increase.` },
    { q: `An item costs $68 and sales tax is 7.5%. What is the total?`, a: `<span class="m">68 × 1.075 = 73.10</span>, so $73.10.` },
    { q: `$1,200 earns 4% simple interest per year for 5 years. Find the interest and the final balance.`, a: `<span class="m"><i>I</i> = 1,200 × 0.04 × 5 = 240</span>. Balance <span class="m">$1,440</span>.` },
    { q: `$5,000 is invested at 6% annual interest, compounded monthly, for 2 years. What is the balance?`, a: `<span class="m">5,000 × (1 + 0.06/12)<sup>24</sup> = 5,000 × 1.005<sup>24</sup> ≈ 5,635.80</span>, so about $5,635.80.` }
  ],
  origin: `Clay tablets from ancient Mesopotamia, around 2000 to 1700 BCE, include problems about loans with interest. In 1683 Jacob Bernoulli, studying interest compounded more and more often, found the limit now called e ≈ 2.718.`
};
