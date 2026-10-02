window.ARITH = window.ARITH || {};

ARITH["a1-exp-functions"] = {
  title: "Exponential Growth & Decay",
  short: "Multiply by the same factor b every step: y = a·bˣ",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Functions · constant percent change",
  hero: `<span class="m c1"><i>f</i>(<i>x</i>) = <span class="c2"><i>a</i></span> · <span class="c3"><i>b</i></span><sup><i>x</i></sup></span>`,
  lede: `An exponential function starts at <span class="m c2"><i>a</i></span> and is multiplied by the same <b>growth factor</b> <span class="m c3"><i>b</i></span> for every unit increase in <span class="m"><i>x</i></span>. If <span class="m c3"><i>b</i> &gt; 1</span> it grows; if <span class="m c3">0 &lt; <i>b</i> &lt; 1</span> it decays.`,
  plain: `<p>A linear function changes by the same <b>amount</b> each step: add $50 every month. An exponential function changes by the same <b>percent</b> each step: grow 5% every year, lose half every 6 hours. Repeated percent change means repeated multiplication, and repeated multiplication is an exponent.</p>
<p>In <span class="m"><i>y</i> = <span class="c2"><i>a</i></span> · <span class="c3"><i>b</i></span><sup><i>x</i></sup></span>, the number <span class="m c2"><i>a</i></span> is where you start, the value when <span class="m"><i>x</i> = 0</span>. The number <span class="m c3"><i>b</i></span> is what you multiply by each step. A 5% increase means multiplying by <span class="m">1.05</span>. A 15% decrease means you keep 85%, so you multiply by <span class="m">0.85</span>.</p>
<p>Early on, a linear function can look bigger. Given enough time, any exponential growth function passes any linear one, because its increases themselves keep growing. Decay works the other way: the curve drops quickly at first, then flattens out toward zero without ever reaching it.</p>`,
  formal: `<p>An <b>exponential function</b> has the form <span class="m"><i>f</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup></span> with <span class="m"><i>a</i> ≠ 0</span>, <span class="m"><i>b</i> &gt; 0</span> and <span class="m"><i>b</i> ≠ 1</span>. For <span class="m"><i>a</i> &gt; 0</span>:</p>
<div class="display">domain: (−∞, ∞) &nbsp;&nbsp; range: (0, ∞) &nbsp;&nbsp; <i>y</i>-intercept: (0, <i>a</i>)<br>horizontal asymptote: <i>y</i> = 0<br><i>b</i> &gt; 1: growth, <i>b</i> = 1 + <i>r</i> &nbsp;&nbsp; 0 &lt; <i>b</i> &lt; 1: decay, <i>b</i> = 1 − <i>r</i> &nbsp;<span class="dim">(<i>r</i> = rate as a decimal)</span></div>
<p>The key property is <span class="m"><i>f</i>(<i>x</i> + 1) = <i>b</i> · <i>f</i>(<i>x</i>)</span>: equal steps in <span class="m"><i>x</i></span> multiply the output by the same factor. If a quantity doubles every <span class="m"><i>T</i></span> units, <span class="m"><i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub> · 2<sup><i>t</i>/<i>T</i></sup></span>; if it has half-life <span class="m"><i>T</i></span>, <span class="m"><i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub> · (<span class="fr"><span>1</span><span>2</span></span>)<sup><i>t</i>/<i>T</i></sup></span>. Fractional exponents such as <span class="m">2<sup>2.5</sup></span> are defined by the rules for rational exponents, so <span class="m"><i>t</i></span> need not be a whole number.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Initial value", desc: "The output when x = 0, and the y-intercept of the graph. In money problems it is the starting amount." },
    { c: "c3", sym: `<i>b</i>`, name: "Growth or decay factor", desc: "The number the output is multiplied by for each unit step in x. b = 1 + r for growth and b = 1 − r for decay." },
    { c: "c1", sym: `<i>f</i>(<i>x</i>)`, name: "The curve", desc: "The output after x steps. It never touches the x-axis, which is the horizontal asymptote y = 0." },
    { c: "c4", sym: `<i>T</i>`, name: "Doubling time or half-life", desc: "The time it takes the quantity to double (growth) or halve (decay). It stays the same no matter where you start." }
  ],
  steps: { title: "How to build and use an exponential model", items: [
    `Find the starting amount <span class="m c2"><i>a</i></span>, the value at time 0.`,
    `Turn the percent rate into a factor: growth <span class="m c3"><i>b</i> = 1 + <i>r</i></span>, decay <span class="m c3"><i>b</i> = 1 − <i>r</i></span>, with <span class="m"><i>r</i></span> as a decimal.`,
    `If you are given a doubling time or half-life <span class="m"><i>T</i></span> instead, use base 2 or <span class="m">½</span> with exponent <span class="m"><i>t</i>/<i>T</i></span>.`,
    `Write <span class="m c1"><i>f</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup></span> and state what <span class="m"><i>x</i></span> measures and its units.`,
    `Evaluate by computing the power first, then multiplying by <span class="m c2"><i>a</i></span>. Order of operations matters: <span class="m"><i>a</i> · <i>b</i><sup><i>x</i></sup> ≠ (<i>ab</i>)<sup><i>x</i></sup></span>.`,
    `Sanity-check: a growth answer should exceed <span class="m c2"><i>a</i></span>, a decay answer should be between 0 and <span class="m c2"><i>a</i></span>.`
  ] },
  example: {
    prompt: `A car is bought for $24,000 and loses 15% of its value each year. Write a model for its value and find the value after 5 years.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i> = 24000</span>, &nbsp; <span class="c3"><i>b</i> = 1 − 0.15 = 0.85</span></span>`, note: "Start value 24,000. Losing 15% means keeping 85% each year." },
      { math: `<span class="m c1"><i>V</i>(<i>t</i>) = 24000 · 0.85<sup><i>t</i></sup></span>`, note: "t is years since purchase and V is value in dollars." },
      { math: `<span class="m"><i>V</i>(5) = 24000 · 0.85<sup>5</sup></span>`, note: "Substitute t = 5." },
      { math: `<span class="m">0.85<sup>5</sup> ≈ 0.443705</span>`, note: "Compute the power first." },
      { math: `<span class="m c1"><i>V</i>(5) ≈ 10648.93</span>`, note: "Multiply by 24,000." },
      { math: `<span class="m"><i>V</i>(4) ≈ 12528.15, &nbsp; <i>V</i>(5) ≈ 10648.93</span>`, note: "Check: the value falls below half the price, 12,000, between years 4 and 5." }
    ],
    answer: `After 5 years the car is worth about <span class="m">$10,648.93</span>, less than half its purchase price.`
  },
  why: `<p>Anything that changes by a steady percent follows this model: compound interest, inflation, population growth, the spread of an infection in its early stage, the loss of value of a car, the decay of a medicine in the bloodstream and of a radioactive isotope. Recognising a constant percent change, and knowing it is not a constant amount, is one of the most useful habits in quantitative thinking.</p>
<p>In later math, exponential functions lead directly to logarithms, which undo them and let you solve for the time. They are also the model behind continuous growth with base <span class="m"><i>e</i></span> in precalculus and calculus, and the geometric sequences in the next topic are the same idea restricted to whole-number steps.</p>`,
  careers: [
    { role: "Financial advisor", use: "Projects retirement balances with compound growth such as 10,000(1.07)ᵗ to show clients the effect of starting early." },
    { role: "Pharmacist", use: "Uses a drug's half-life to estimate how much remains in the body after a number of hours and when the next dose is due." },
    { role: "Epidemiologist", use: "Fits early outbreak case counts to an exponential model to estimate the doubling time of an infection." },
    { role: "Insurance adjuster", use: "Values vehicles and equipment with declining-balance depreciation, a fixed percent lost per year." },
    { role: "Radiation safety officer", use: "Calculates how long a radioactive source must be stored before its activity decays below a safe level." },
    { role: "Microbiologist", use: "Predicts bacterial counts in a culture from the generation time, the time for the population to double." }
  ],
  life: [
    "Seeing how a savings account or retirement fund grows with compound interest",
    "Estimating what a car or phone will be worth in a few years",
    "Understanding how credit card debt grows if only minimum payments are made",
    "Reading news about how fast an infection or a social media post is spreading",
    "Knowing how long caffeine or a medication stays in your system"
  ],
  fields: [
    { name: "Finance", use: "Compound interest, inflation and present value are all exponential functions of time." },
    { name: "Biology", use: "Unrestricted population growth and bacterial reproduction are modelled with doubling times." },
    { name: "Chemistry and nuclear physics", use: "Radioactive decay and first-order reactions follow exponential decay with a fixed half-life." },
    { name: "Pharmacology", use: "Drug elimination from the bloodstream is modelled with a half-life to plan dosing schedules." }
  ],
  prereqWhy: {
    "a1-functions": "An exponential model is a function, so you need function notation, domain and range to evaluate it and describe its graph.",
    "a1-rational-exp": "Half-life and doubling-time models use exponents such as t/T that are often fractions, which rational exponents define.",
    "percent-apps": "Compound interest and percent change are the everyday form of exponential growth, and turning a rate into the factor 1 + r comes from there."
  },
  unlocksWhy: {
    "a2-exp-func": "Algebra II starts from <span class=\"m\"><i>y</i> = <i>a</i><i>b</i><sup><i>x</i></sup></span>, with its initial value and growth or decay factor, then adds shifts and the base <span class=\"m\"><i>e</i></span>.",
    "a1-sequences": "A geometric sequence is an exponential function evaluated at whole numbers, with the common ratio playing the role of b."
  },
  beyond: [
    { field: "Algebra II", why: "Logarithms are introduced as the inverses of exponential functions to solve for the time in growth and decay problems." },
    { field: "Precalculus", why: "Continuous growth A = Pe^(rt) and the natural base e extend this model to change that happens every instant." },
    { field: "Calculus I", why: "The exponential function is the one whose rate of change is proportional to its value, which is the basis of differential equations for growth and decay." },
    { field: "Statistics", why: "Exponential distributions and log-transformed data both rely on understanding exponential curves." }
  ],
  mistakes: [
    { wrong: `Using the rate as the factor: writing a 15% decrease as <span class="m">24000 · 0.15<sup><i>t</i></sup></span>.`, fix: `The factor is what is <b>kept</b>: <span class="m">1 − 0.15 = 0.85</span>, so <span class="m">24000 · 0.85<sup><i>t</i></sup></span>. For a 15% increase use <span class="m">1.15</span>.` },
    { wrong: `Multiplying before taking the power: <span class="m">3 · 2<sup>4</sup> = 6<sup>4</sup> = 1296</span>.`, fix: `Exponents come first: <span class="m">3 · 2<sup>4</sup> = 3 · 16 = 48</span>.` },
    { wrong: `Treating a percent change as a constant amount: "grows 10% a year, so after 3 years it is up 30%".`, fix: `Percent changes compound: <span class="m">1.1<sup>3</sup> = 1.331</span>, an increase of 33.1%, not 30%.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 500(1.04)<sup><i>x</i></sup></span>, state the initial value, whether it is growth or decay, and the percent rate.`, a: `Initial value <span class="m">500</span>. Since <span class="m">1.04 &gt; 1</span> it is growth, at a rate of <span class="m">4%</span> per unit of <span class="m"><i>x</i></span>.` },
    { q: `Evaluate <span class="m"><i>f</i>(3)</span> for <span class="m"><i>f</i>(<i>x</i>) = 3 · 2<sup><i>x</i></sup></span>.`, a: `<span class="m"><i>f</i>(3) = 3 · 2<sup>3</sup> = 3 · 8 = 24</span>.` },
    { q: `An exponential function passes through <span class="m">(0, 5)</span> and <span class="m">(2, 45)</span>. Find <span class="m"><i>f</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup></span>.`, a: `From <span class="m">(0, 5)</span>, <span class="m"><i>a</i> = 5</span>. Then <span class="m">5<i>b</i><sup>2</sup> = 45</span>, so <span class="m"><i>b</i><sup>2</sup> = 9</span> and <span class="m"><i>b</i> = 3</span> (the base must be positive). <span class="m"><i>f</i>(<i>x</i>) = 5 · 3<sup><i>x</i></sup></span>.` },
    { q: `A patient takes 80 mg of a drug with a half-life of 4 hours. How much remains after 10 hours?`, a: `<span class="m"><i>A</i>(<i>t</i>) = 80(<span class="fr"><span>1</span><span>2</span></span>)<sup><i>t</i>/4</sup></span>, so <span class="m"><i>A</i>(10) = 80(<span class="fr"><span>1</span><span>2</span></span>)<sup>2.5</sup> = 80 · 2<sup>−2.5</sup> ≈ 80 · 0.17678 ≈ 14.14</span> mg.` }
  ],
  origin: `In <i>An Essay on the Principle of Population</i> (1798), Thomas Malthus argued that population, left unchecked, grows in a "geometrical ratio" while food supply grows only in an "arithmetical ratio", the contrast between exponential and linear growth. Ernest Rutherford introduced the idea of a radioactive half-life in the early 1900s.`
};
