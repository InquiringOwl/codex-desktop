window.ARITH = window.ARITH || {};

ARITH["pa-proportional"] = {
  title: "Proportional Relationships (y = kx)",
  short: "A constant ratio, a line through the origin",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Functions · direct variation",
  hero: `<span class="m"><span class="c3"><i>y</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>x</i></span> &nbsp;&nbsp; <span class="c4"><i>k</i></span> = <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span></span>`,
  lede: `Two quantities are proportional when one is always the same multiple of the other. That multiple, <span class="m c4"><i>k</i></span>, is the unit rate, and the graph is a straight line through the origin.`,
  plain: `<p>If apples cost $2 per pound, then 3 pounds cost $6 and 10 pounds cost $20. The cost is always 2 times the weight. When one quantity is always the same number times another, the two are <b>proportional</b>. That number is the <b>constant of proportionality</b>, <span class="m c4"><i>k</i></span>.</p>
<p>You can spot a proportional relationship three ways. In a table, dividing <span class="m c3"><i>y</i></span> by <span class="m c2"><i>x</i></span> gives the same number every time. In an equation, it looks like <span class="m"><i>y</i> = <i>kx</i></span> with nothing added. On a graph, the points lie on a straight line that goes through <span class="m">(0, 0)</span>.</p>
<p>That last part matters. A taxi that charges $3 just to get in, plus $2 per mile, is not proportional. Zero miles still costs $3, so the line does not pass through the origin, and the ratio of cost to miles keeps changing.</p>`,
  formal: `<p>A variable <span class="m c3"><i>y</i></span> <b>varies directly</b> with <span class="m c2"><i>x</i></span> (is <b>directly proportional</b> to <span class="m c2"><i>x</i></span>) if there is a nonzero constant <span class="m c4"><i>k</i></span> such that</p>
<div class="display"><span class="c3"><i>y</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>x</i></span> &nbsp;&nbsp;for all <i>x</i> in the domain, &nbsp;equivalently&nbsp; <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span> = <span class="c4"><i>k</i></span> &nbsp;for every <i>x</i> ≠ 0</div>
<p><span class="m c4"><i>k</i></span> is the <b>constant of proportionality</b> (the unit rate, in units of <span class="m"><i>y</i></span> per unit of <span class="m"><i>x</i></span>). The graph of <span class="m"><i>y</i> = <i>kx</i></span> is a line through the origin with slope <span class="m"><i>k</i></span>, and the point <span class="m">(1, <i>k</i>)</span> lies on it. A linear function <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> with <span class="m"><i>b</i> ≠ 0</span> is not proportional.</p>`,
  legend: [
    { c: "c4", sym: `<i>k</i>`, name: "Constant of proportionality", desc: "The fixed ratio y/x, also the unit rate: how much y there is for each 1 unit of x." },
    { c: "c2", sym: `<i>x</i>`, name: "Input quantity", desc: "The independent quantity, such as weight bought or hours worked." },
    { c: "c3", sym: `<i>y</i>`, name: "Output quantity", desc: "The quantity that depends on x, such as cost or pay." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Highlighted point", desc: "One pair from the table, plotted on the line. The point (1, k) shows the unit rate." }
  ],
  steps: { title: "How to test and use a proportional relationship", items: [
    `Divide each <span class="m c3"><i>y</i></span> by its <span class="m c2"><i>x</i></span>. If every ratio is the same, the relationship is proportional.`,
    `Call that common ratio <span class="m c4"><i>k</i></span> and write <span class="m"><span class="c3"><i>y</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>x</i></span></span>.`,
    `On a graph, check that the points lie on a straight line through <span class="m">(0, 0)</span>.`,
    `To predict, substitute the new <span class="m c2"><i>x</i></span> and multiply by <span class="m c4"><i>k</i></span>.`,
    `To go backward, divide the known <span class="m c3"><i>y</i></span> by <span class="m c4"><i>k</i></span>.`
  ] },
  example: {
    prompt: `At a deli, 0.75 lb of sliced turkey costs $8.25 and 1.2 lb costs $13.20. Is the price proportional to weight? If so, what do 2.5 lb cost?`,
    lines: [
      { math: `<span class="m">8.25 ÷ 0.75 = <span class="c4">11</span></span>`, note: "Price per pound for the first purchase." },
      { math: `<span class="m">13.20 ÷ 1.2 = <span class="c4">11</span></span>`, note: "Same ratio, so the relationship is proportional." },
      { math: `<span class="m"><span class="c3"><i>y</i></span> = <span class="c4">11</span><span class="c2"><i>x</i></span></span>`, note: "Cost in dollars equals 11 times weight in pounds, so k = 11 dollars per pound." },
      { math: `<span class="m"><span class="c3"><i>y</i></span> = 11(<span class="c2">2.5</span>) = 27.50</span>`, note: "Substitute x = 2.5." },
      { math: `<span class="m c1">(2.5, 27.50)</span>`, note: "Check: 27.50 divided by 2.5 is 11, the same unit rate." }
    ],
    answer: `Yes, the price is proportional at <span class="m">$11</span> per pound, so 2.5 lb cost <span class="m">$27.50</span>.`
  },
  why: `<p>Unit prices, hourly pay with no base amount, fuel use at a steady speed, currency exchange and recipe scaling are all proportional relationships. Recognising them lets you predict any value from a single rate. Recognising when something is not proportional, like a fare with a fixed fee, keeps you from making bad predictions.</p>
<p>The equation <span class="m"><i>y</i> = <i>kx</i></span> is the simplest linear function. Its constant <span class="m"><i>k</i></span> becomes the slope of a line, and direct variation appears throughout science as a first model of how one quantity depends on another.</p>`,
  careers: [
    { role: "Pharmacist", use: "Checks weight-based dosing, where the dose is directly proportional to body mass at a fixed number of mg per kg." },
    { role: "Payroll specialist", use: "Computes pay for hourly workers as hours times the hourly rate, a proportional relationship." },
    { role: "Construction estimator", use: "Prices materials such as concrete at a cost per cubic yard, so cost is proportional to volume." },
    { role: "Lab technician", use: "Builds calibration lines where absorbance is proportional to concentration, as in the Beer-Lambert law." },
    { role: "Currency exchange teller", use: "Converts amounts at a quoted exchange rate, which is a constant of proportionality between two currencies." },
    { role: "Chef", use: "Scales a recipe so every ingredient stays in the same proportion to the number of servings." }
  ],
  life: [
    "Comparing unit prices at the grocery store",
    "Working out pay for extra hours at an hourly rate",
    "Converting money when travelling",
    "Scaling a recipe up or down",
    "Estimating fuel for a trip at a steady miles-per-gallon rate"
  ],
  fields: [
    { name: "Physics", use: "Hooke's law F = kx and Ohm's law V = IR at a fixed resistance are direct variations." },
    { name: "Chemistry", use: "The Beer-Lambert law makes absorbance directly proportional to concentration for a given substance and path length." },
    { name: "Economics", use: "Linear pricing with no fixed fee makes revenue proportional to quantity sold." }
  ],
  prereqWhy: {
    "pa-functions": "A proportional relationship is a function y = kx, so you need to read inputs, outputs and their graphs.",
    "proportions": "Any two points of a proportional relationship form a proportion, and solving for missing values uses cross-multiplication."
  },
  unlocksWhy: {
    "pa-slope": "The constant k is the first example of a slope: the rate of change of y with respect to x."
  },
  beyond: [
    { field: "Algebra I", why: "Direct variation is the special case b = 0 of y = mx + b, and inverse variation y = k/x is studied next to it." },
    { field: "Physics", why: "Many laws are first stated as direct proportions, and the constant of proportionality has physical meaning." },
    { field: "Statistics", why: "Regression through the origin fits the model y = kx to data." }
  ],
  mistakes: [
    { wrong: `Calling any straight-line graph proportional.`, fix: `The line must pass through <span class="m">(0, 0)</span>. The graph of <span class="m"><i>y</i> = 2<i>x</i> + 3</span> is a line but not proportional.` },
    { wrong: `Checking only that <span class="m"><i>y</i></span> increases when <span class="m"><i>x</i></span> does.`, fix: `Check that <span class="m"><i>y</i>/<i>x</i></span> is the same for every pair. Increasing is not enough.` },
    { wrong: `Finding <span class="m"><i>k</i></span> as <span class="m"><i>x</i>/<i>y</i></span>.`, fix: `In <span class="m"><i>y</i> = <i>kx</i></span>, <span class="m"><i>k</i> = <i>y</i>/<i>x</i></span>: output over input.` }
  ],
  practice: [
    { q: `A table has <span class="m"><i>x</i> = 2, 5, 8</span> and <span class="m"><i>y</i> = 6, 15, 24</span>. Is it proportional? Write the equation.`, a: `<span class="m">6/2 = 15/5 = 24/8 = 3</span>, so yes: <span class="m"><i>y</i> = 3<i>x</i></span>.` },
    { q: `Is the relationship with points <span class="m">(1, 4), (2, 7), (3, 10)</span> proportional?`, a: `No. The ratios are <span class="m">4, 3.5, 3.<span style="text-decoration:overline">3</span></span>, which differ. The rule is <span class="m"><i>y</i> = 3<i>x</i> + 1</span>, which does not pass through the origin.` },
    { q: `<span class="m"><i>y</i></span> varies directly with <span class="m"><i>x</i></span>, and <span class="m"><i>y</i> = 12</span> when <span class="m"><i>x</i> = 16</span>. Find <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 28</span>.`, a: `<span class="m"><i>k</i> = 12/16 = 0.75</span>, so <span class="m"><i>y</i> = 0.75(28) = 21</span>.` },
    { q: `A printer prints 540 pages in 12 minutes at a steady rate. Write an equation for pages <span class="m"><i>p</i></span> in <span class="m"><i>t</i></span> minutes and find how long 1,125 pages take.`, a: `<span class="m"><i>k</i> = 540/12 = 45</span>, so <span class="m"><i>p</i> = 45<i>t</i></span>. Then <span class="m">1,125 = 45<i>t</i></span> gives <span class="m"><i>t</i> = 25</span> minutes.` }
  ]
};
