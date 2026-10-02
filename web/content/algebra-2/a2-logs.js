window.ARITH = window.ARITH || {};

ARITH["a2-logs"] = {
  title: "Logarithmic Functions",
  short: "A logarithm is an exponent: log_b x = y means bʸ = x",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · logarithms",
  hero: `<span class="m">log<sub class="c1">2</sub> <span class="c3">8</span> = <span class="c2">3</span> &nbsp;⇔&nbsp; <span class="c1">2</span><sup class="c2">3</sup> = <span class="c3">8</span></span>`,
  lede: `A <b>logarithm</b> answers one question: what exponent do you put on the <span class="c1">base</span> to get the <span class="c3">argument</span>? The function <span class="m"><span class="c2"><i>y</i></span> = log<sub class="c1"><i>b</i></sub> <span class="c3"><i>x</i></span></span> is the inverse of <span class="m"><span class="c1"><i>b</i></span><sup><i>x</i></sup></span>, so its graph is the exponential curve reflected in the line <span class="c4"><i>y</i> = <i>x</i></span>.`,
  plain: `<p>You know <span class="m"><span class="c1">2</span><sup class="c2">3</sup> = <span class="c3">8</span></span>. Asked the other way round, "2 to what power is 8?", the answer is 3, and that answer is the logarithm: <span class="m">log<sub class="c1">2</sub> <span class="c3">8</span> = <span class="c2">3</span></span>. Read it as "log base 2 of 8 is 3". Both sentences say the same thing; one is in exponential form, the other in logarithmic form.</p>
<p>So <span class="m">log<sub>10</sub> 1000 = 3</span>, <span class="m">log<sub>3</sub> (1/9) = −2</span> because <span class="m">3<sup>−2</sup> = 1/9</span>, and <span class="m">log<sub>4</sub> 8 = 3/2</span> because <span class="m">4<sup>3/2</sup> = 8</span>. Two bases have their own names: the <b>common logarithm</b> <span class="m">log <i>x</i></span> uses base 10, and the <b>natural logarithm</b> <span class="m">ln <i>x</i></span> uses base <span class="m"><i>e</i></span>.</p>
<p>A positive base raised to any power is positive, so you can only take the logarithm of a positive number. <span class="m">log 0</span> and <span class="m">log(−5)</span> do not exist. Turning <span class="m"><i>y</i> = <i>b</i><sup><i>x</i></sup></span> around swaps inputs and outputs, so the graph of <span class="m"><i>y</i> = log<sub><i>b</i></sub> <i>x</i></span> is the graph of <span class="m"><i>b</i><sup><i>x</i></sup></span> flipped across <span class="c4"><i>y</i> = <i>x</i></span>: it passes through <span class="m">(1, 0)</span> and <span class="m">(<i>b</i>, 1)</span> and drops toward the y-axis without touching it.</p>`,
  formal: `<p>For <span class="m"><span class="c1"><i>b</i></span> > 0</span>, <span class="m"><i>b</i> ≠ 1</span> and <span class="m"><span class="c3"><i>x</i></span> > 0</span>, the <b>logarithm with base <i>b</i></b> is defined by</p>
<div class="display"><span class="c2"><i>y</i></span> = log<sub class="c1"><i>b</i></sub> <span class="c3"><i>x</i></span> &nbsp;⇔&nbsp; <span class="c1"><i>b</i></span><sup class="c2"><i>y</i></sup> = <span class="c3"><i>x</i></span><br>log <i>x</i> = log<sub>10</sub> <i>x</i>, &nbsp; ln <i>x</i> = log<sub><i>e</i></sub> <i>x</i></div>
<p>The <b>logarithmic function</b> <span class="m"><i>f</i>(<i>x</i>) = log<sub><i>b</i></sub> <i>x</i></span> is the inverse of <span class="m"><i>g</i>(<i>x</i>) = <i>b</i><sup><i>x</i></sup></span>. Its domain is <span class="m">(0, ∞)</span>, its range is <span class="m">(−∞, ∞)</span>, its x-intercept is <span class="m">(1, 0)</span>, and the y-axis <span class="m"><i>x</i> = 0</span> is a vertical asymptote. It is increasing if <span class="m"><i>b</i> > 1</span> and decreasing if <span class="m">0 < <i>b</i> < 1</span>. The inverse relationship gives <span class="m">log<sub><i>b</i></sub> 1 = 0</span>, <span class="m">log<sub><i>b</i></sub> <i>b</i> = 1</span>, <span class="m">log<sub><i>b</i></sub> <i>b</i><sup><i>x</i></sup> = <i>x</i></span> for every real <span class="m"><i>x</i></span>, and <span class="m"><i>b</i><sup>log<sub><i>b</i></sub> <i>x</i></sup> = <i>x</i></span> for <span class="m"><i>x</i> > 0</span>. For <span class="m"><i>f</i>(<i>x</i>) = <i>a</i> log<sub><i>b</i></sub>(<i>x</i> − <i>h</i>) + <i>k</i></span> the domain is <span class="m">(<i>h</i>, ∞)</span> and the asymptote is <span class="m"><i>x</i> = <i>h</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>b</i>`, name: "Base", desc: "The number being raised to a power. It stays the base in both forms: b > 0, b ≠ 1." },
    { c: "c2", sym: `<i>y</i>`, name: "Exponent = the logarithm", desc: "The output of log_b x. In exponential form it is the exponent." },
    { c: "c3", sym: `<i>x</i>`, name: "Argument", desc: "The input of the logarithm and the result of bʸ. It must be positive." },
    { c: "c4", sym: `<i>y</i> = <i>x</i>`, name: "Mirror line", desc: "log_b x and bˣ are inverses, so their graphs are reflections in this line." }
  ],
  steps: {
    title: "How to evaluate log_b x exactly",
    items: [
      `Call the unknown <span class="m"><span class="c2"><i>y</i></span></span>: <span class="m">log<sub class="c1"><i>b</i></sub> <span class="c3"><i>x</i></span> = <span class="c2"><i>y</i></span></span>.`,
      `Rewrite in exponential form: <span class="m"><span class="c1"><i>b</i></span><sup class="c2"><i>y</i></sup> = <span class="c3"><i>x</i></span></span>.`,
      `Write the base and the argument as powers of one common number, such as 2, 3, 5, 10 or <span class="m"><i>e</i></span>.`,
      `Set the exponents equal (exponential functions are one-to-one) and solve for <span class="m"><i>y</i></span>.`,
      `Check by raising the base to your answer.`
    ]
  },
  example: {
    prompt: `Graph <span class="m"><i>f</i>(<i>x</i>) = log<sub class="c1">2</sub>(<i>x</i> + 4) − 1</span>. Give the domain, range, asymptote and intercepts, and find <span class="m"><i>f</i><sup>−1</sup></span>.`,
    lines: [
      { math: `<span class="m"><i>x</i> + 4 > 0 &nbsp;⇒&nbsp; <i>x</i> > −4</span>`, note: "The argument must be positive. Domain (−4, ∞); the vertical asymptote is x = −4." },
      { math: `<span class="m">(<span class="fr"><span>1</span><span>2</span></span>, −1), (1, 0), (2, 1), (4, 2) &nbsp;→&nbsp; (−<span class="fr"><span>7</span><span>2</span></span>, −2), (−3, −1), (−2, 0), (0, 1)</span>`, note: "Points of log₂ x, each moved left 4 and down 1: (x, y) → (x − 4, y − 1)." },
      { math: `<span class="m">log<sub>2</sub>(<i>x</i> + 4) = 1 &nbsp;⇔&nbsp; <i>x</i> + 4 = 2<sup>1</sup> &nbsp;⇒&nbsp; <i>x</i> = −2</span>`, note: "x-intercept: set f(x) = 0 and convert to exponential form." },
      { math: `<span class="m"><i>f</i>(0) = log<sub>2</sub> 4 − 1 = 2 − 1 = 1</span>`, note: "y-intercept (0, 1)." },
      { math: `<span class="m"><i>x</i> = log<sub>2</sub>(<i>y</i> + 4) − 1 &nbsp;⇔&nbsp; <i>y</i> + 4 = 2<sup><i>x</i> + 1</sup></span>`, note: "Swap x and y, isolate the log, then convert to exponential form." },
      { math: `<span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = 2<sup><i>x</i> + 1</sup> − 4</span>`, note: "Its asymptote y = −4 is the reflection of x = −4 in y = x." }
    ],
    answer: `Domain <span class="m">(−4, ∞)</span>, range <span class="m">(−∞, ∞)</span>, asymptote <span class="m"><i>x</i> = −4</span>, x-intercept <span class="m">(−2, 0)</span>, y-intercept <span class="m">(0, 1)</span>; <span class="m"><i>f</i><sup>−1</sup>(<i>x</i>) = 2<sup><i>x</i> + 1</sup> − 4</span>.`
  },
  why: `<p>Logarithms undo exponentials, so every exponential question that asks "when?" or "how many times?" is answered by a logarithm. How many years until an investment doubles, how many halvings until a sample is safe, how many times a list can be cut in half: each is an unknown exponent.</p>
<p>Logarithms also compress huge ranges into small ones. A sound a million times more intense is only 60 decibels louder, and the pH scale squeezes hydrogen-ion concentrations from 1 to 0.00000000000001 into the numbers 0 to 14. Reading such scales, and the graphs that use them, starts with knowing that a logarithm is an exponent.</p>`,
  careers: [
    { role: "Seismologist", use: "Reports earthquake size on a magnitude scale built from base-10 logarithms of wave amplitude and energy." },
    { role: "Analytical chemist", use: "Computes pH = −log[H⁺] from measured hydrogen-ion concentrations." },
    { role: "Audio engineer", use: "Sets levels in decibels, 10 log of an intensity ratio, when mixing and mastering." },
    { role: "Software engineer", use: "Estimates that binary search on a million items needs about log₂ 1 000 000 ≈ 20 steps." },
    { role: "Astronomer", use: "Uses the logarithmic magnitude scale to compare the brightness of stars." },
    { role: "Data scientist", use: "Applies log transforms to skewed data such as incomes so models can fit them." }
  ],
  life: [
    "Comparing earthquake magnitudes in the news",
    "Reading the pH on a pool test kit or a shampoo label",
    "Setting a volume level measured in decibels",
    "Working out how many years until savings double",
    "Counting how many rounds a single-elimination tournament needs"
  ],
  fields: [
    { name: "Chemistry", use: "pH and reaction-rate equations are written with common and natural logarithms." },
    { name: "Computer science", use: "The running time of binary search and balanced trees grows like log₂ n." },
    { name: "Physics", use: "Decibels and the time constants of decay processes come from logarithms." },
    { name: "Earth science", use: "Earthquake magnitude scales are logarithmic." }
  ],
  prereqWhy: {
    "a2-exp-func": "A logarithm is defined through bʸ = x, so its graph, domain and range come straight from those of the exponential function.",
    "a2-inverses": "log_b x is the inverse of bˣ: swapping x and y, reflecting in y = x and trading domain for range are inverse-function ideas."
  },
  unlocksWhy: {
    "a2-log-props": "The product, quotient and power rules for logarithms are the laws of exponents rewritten in logarithmic form.",
    "a2-log-scales": "pH, decibels and earthquake magnitudes are common logarithms, so reading them needs the definition and the base-10 values."
  },
  beyond: [
    { field: "Calculus I", why: "The natural logarithm has derivative 1/x and is how calculus differentiates exponentials with any base." },
    { field: "Computer science", why: "Algorithm analysis measures divide-and-conquer methods in powers of log₂ n." },
    { field: "Statistics", why: "Log transforms and log-likelihoods turn products of probabilities into sums." },
    { field: "Chemistry", why: "The Nernst equation and pH calculations rely on logarithms." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m">log<sub>2</sub> 8</span> as <span class="m">8/2 = 4</span> or as <span class="m">2<sup>8</sup></span>.`, fix: `A logarithm is an exponent: <span class="m">log<sub>2</sub> 8</span> is the power of 2 that gives 8, so <span class="m">log<sub>2</sub> 8 = 3</span>.` },
    { wrong: `Giving the domain of <span class="m"><i>f</i>(<i>x</i>) = log(<i>x</i> − 3)</span> as <span class="m"><i>x</i> > −3</span> or as all real numbers.`, fix: `The argument must be positive: <span class="m"><i>x</i> − 3 > 0</span>, so the domain is <span class="m">(3, ∞)</span>.` },
    { wrong: `Writing <span class="m">ln 100 = 2</span>.`, fix: `<span class="m">ln</span> has base <span class="m"><i>e</i></span>, not 10. <span class="m">log 100 = 2</span>, but <span class="m">ln 100 ≈ 4.605</span>.` },
    { wrong: `Evaluating <span class="m">log(−100) = −2</span>.`, fix: `No power of 10 is negative, so <span class="m">log(−100)</span> is undefined. Only <span class="m">log 0.01 = −2</span>.` }
  ],
  practice: [
    { q: `Write <span class="m">5<sup>3</sup> = 125</span> in logarithmic form and <span class="m">log<sub>4</sub> (1/16) = −2</span> in exponential form.`, a: `<span class="m">log<sub>5</sub> 125 = 3</span> and <span class="m">4<sup>−2</sup> = 1/16</span>.` },
    { q: `Find the exact values of <span class="m">log<sub>3</sub> 81</span>, <span class="m">log 0.01</span>, <span class="m">ln <i>e</i><sup>−3</sup></span> and <span class="m">log<sub>8</sub> 4</span>.`, a: `<span class="m">3<sup>4</sup> = 81</span> gives 4; <span class="m">10<sup>−2</sup> = 0.01</span> gives −2; <span class="m">ln <i>e</i><sup>−3</sup> = −3</span>; <span class="m">8<sup><i>y</i></sup> = 4</span> means <span class="m">2<sup>3<i>y</i></sup> = 2<sup>2</sup></span>, so <span class="m"><i>y</i> = 2/3</span>.` },
    { q: `Solve <span class="m">log<sub>5</sub>(2<i>x</i> + 1) = 2</span> and <span class="m">log<sub><i>x</i></sub> 49 = 2</span>.`, a: `<span class="m">2<i>x</i> + 1 = 5<sup>2</sup> = 25</span>, so <span class="m"><i>x</i> = 12</span> (the argument 25 is positive). <span class="m"><i>x</i><sup>2</sup> = 49</span> gives <span class="m"><i>x</i> = ±7</span>, but a base must be positive, so <span class="m"><i>x</i> = 7</span>.` },
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = −log<sub>3</sub>(<i>x</i> − 2) + 1</span>, give the domain, range, asymptote and x-intercept, and say whether <span class="m"><i>f</i></span> increases or decreases.`, a: `Domain <span class="m">(2, ∞)</span>, range <span class="m">(−∞, ∞)</span>, asymptote <span class="m"><i>x</i> = 2</span>. <span class="m"><i>f</i>(<i>x</i>) = 0</span> gives <span class="m">log<sub>3</sub>(<i>x</i> − 2) = 1</span>, <span class="m"><i>x</i> = 5</span>. The minus sign reflects the increasing curve <span class="m">log<sub>3</sub></span>, so <span class="m"><i>f</i></span> decreases.` }
  ],
  origin: `<p>John Napier published the first table of logarithms in 1614, in Mirifici logarithmorum canonis descriptio, to turn the multiplications of astronomy and navigation into additions; Joost Bürgi built a similar table independently. Henry Briggs, after visiting Napier, proposed base 10 and published common logarithms of the numbers 1 to 1000 in 1617 and a much larger table in Arithmetica logarithmica in 1624. Leonhard Euler, in his Introductio of 1748, was the first to define the logarithm as the inverse of an exponential function, the definition used today.</p>`
};
