window.ARITH = window.ARITH || {};

ARITH["a1-functions"] = {
  title: "Function Notation, Domain & Range",
  short: "f(x) names the output; domain and range are the allowed sets",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Functions · notation and the sets they live on",
  hero: `<span class="m"><i>f</i> : <span class="c2">domain</span> → <span class="c3">range</span>, &nbsp; <span class="c2"><i>a</i></span> ↦ <span class="c1"><i>f</i>(<i>a</i>)</span></span>`,
  lede: `Function notation <span class="m"><i>f</i>(<i>x</i>)</span> names the output for input <span class="m"><i>x</i></span>. The <span class="c2">domain</span> is the set of allowed inputs, and the <span class="c3">range</span> is the set of outputs that actually occur.`,
  plain: `<p>A function is a rule that gives exactly one output for each input. Function notation is a compact way to write that rule and to ask questions about it. If <span class="m"><i>f</i>(<i>x</i>) = 3<i>x</i> + 5</span>, then <span class="m"><i>f</i>(2)</span> means "the output when the input is 2", which is <span class="m">3(2) + 5 = 11</span>. The parentheses do not mean multiplication. <span class="m"><i>f</i>(2)</span> is read "f of 2".</p>
<p>The <b>domain</b> is every input you are allowed to use. Sometimes the formula itself rules some inputs out. You cannot divide by zero, and you cannot take the square root of a negative number in the real numbers. Sometimes the situation rules them out. A tank cannot drain for negative minutes.</p>
<p>The <b>range</b> is every output the function actually produces. On a graph, the domain is the shadow the graph casts on the <span class="m"><i>x</i></span>-axis, and the range is its shadow on the <span class="m"><i>y</i></span>-axis.</p>`,
  formal: `<p>A <b>function</b> <span class="m"><i>f</i></span> from a set <span class="m"><i>D</i></span> to a set <span class="m"><i>Y</i></span> assigns to each <span class="m"><i>x</i> ∈ <i>D</i></span> exactly one value <span class="m"><i>f</i>(<i>x</i>) ∈ <i>Y</i></span>. The set <span class="m"><i>D</i></span> is the <b>domain</b>, and the <b>range</b> is</p>
<div class="display">range(<i>f</i>) = {<i>f</i>(<i>x</i>) | <i>x</i> ∈ <i>D</i>}</div>
<p>When a function is given only by a formula, its <b>implied domain</b> is the set of all real numbers for which the formula is defined: exclude values that make a denominator zero and values that make an even-root radicand negative. For <span class="m"><i>f</i>(<i>x</i>) = 1/(<i>x</i> − 4)</span> the domain is <span class="m">(−∞, 4) ∪ (4, ∞)</span>; for <span class="m"><i>g</i>(<i>x</i>) = √<span style="text-decoration:overline"><i>x</i> + 3</span></span> it is <span class="m">[−3, ∞)</span>. A graph in the plane is the graph of a function exactly when it passes the <b>vertical line test</b>.</p>`,
  legend: [
    { c: "c2", sym: `<i>D</i>`, name: "Domain", desc: "The set of allowed inputs, shown as the graph's projection onto the x-axis." },
    { c: "c3", sym: `range`, name: "Range", desc: "The set of outputs the function actually takes, shown as the graph's projection onto the y-axis." },
    { c: "c1", sym: `<i>f</i>(<i>a</i>)`, name: "Function value", desc: "The output for the input a. On the graph it is the height of the point above x = a." }
  ],
  steps: { title: "How to work with function notation", items: [
    `To evaluate <span class="m"><i>f</i>(<i>a</i>)</span>, replace every <span class="m"><i>x</i></span> in the formula with <span class="m"><i>a</i></span> in parentheses, then simplify.`,
    `To solve <span class="m"><i>f</i>(<i>x</i>) = <i>k</i></span>, set the formula equal to <span class="m"><i>k</i></span> and solve for <span class="m"><i>x</i></span>. This finds the input that gives a known output.`,
    `To find a formula's implied <span class="c2">domain</span>, start with ℝ and remove inputs that make a denominator zero or an even-root radicand negative.`,
    `If the function models a situation, also restrict the domain to inputs that make sense there.`,
    `To find the <span class="c3">range</span>, find the lowest and highest outputs over the domain, from the graph or by evaluating at the endpoints for a linear function.`,
    `Write domain and range in interval notation, using brackets for included endpoints and parentheses for excluded ones.`
  ] },
  example: {
    prompt: `A 60-litre tank drains at a steady 4 litres per minute. The volume after <span class="m"><i>t</i></span> minutes is <span class="m"><i>V</i>(<i>t</i>) = 60 − 4<i>t</i></span>. Find <span class="m"><i>V</i>(6)</span>, find when 20 litres remain, and give the domain and range of the model.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>V</i>(6)</span> = 60 − 4(6) = 36</span>`, note: "Evaluate: after 6 minutes, 36 litres remain." },
      { math: `<span class="m">60 − 4<i>t</i> = 20</span>`, note: "Set the output equal to 20 to find the input." },
      { math: `<span class="m">−4<i>t</i> = −40 &nbsp;⇒&nbsp; <i>t</i> = 10</span>`, note: "20 litres remain after 10 minutes." },
      { math: `<span class="m">60 − 4<i>t</i> = 0 &nbsp;⇒&nbsp; <i>t</i> = 15</span>`, note: "The tank is empty at 15 minutes, so the model stops there." },
      { math: `<span class="m">domain <span class="c2">[0, 15]</span>, &nbsp;range <span class="c3">[0, 60]</span></span>`, note: "Time runs from 0 to 15 minutes; volume goes from 60 down to 0." }
    ],
    answer: `<span class="m"><i>V</i>(6) = 36</span> litres, 20 litres remain at <span class="m"><i>t</i> = 10</span> minutes, the domain is <span class="m">[0, 15]</span> and the range is <span class="m">[0, 60]</span>.`
  },
  why: `<p>Function notation lets you say precisely which input you mean and keeps several related quantities straight: <span class="m"><i>C</i>(<i>n</i>)</span> for cost, <span class="m"><i>R</i>(<i>n</i>)</span> for revenue, <span class="m"><i>P</i>(<i>n</i>) = <i>R</i>(<i>n</i>) − <i>C</i>(<i>n</i>)</span> for profit. Spreadsheets, programming languages and calculators all use the same idea of a named rule applied to an input.</p>
<p>Domain and range stop you from using a model where it does not apply, such as a negative time or a price below zero. Every function studied later (linear, quadratic, exponential, rational, radical, trigonometric) is described by its formula, its domain and its range.</p>`,
  careers: [
    { role: "Software developer", use: "Writes functions that take inputs and return one output, and validates inputs so the code never divides by zero or takes the square root of a negative." },
    { role: "Actuary", use: "Uses functions such as a mortality function q(x) giving the probability of death at age x, defined only on realistic ages." },
    { role: "Financial analyst", use: "Models revenue and cost as functions of units sold and restricts the domain to production levels the business can actually reach." },
    { role: "Pharmacologist", use: "Describes drug concentration as a function C(t) of time since the dose, valid only for t ≥ 0." },
    { role: "Data analyst", use: "Defines spreadsheet formulas as functions of cells and checks the range of outputs for impossible values." },
    { role: "Mechanical engineer", use: "Specifies a part's operating range as the domain of a stress or temperature function beyond which the model is not valid." }
  ],
  life: [
    "Reading a shipping chart that gives one price for each weight",
    "Knowing a phone bill formula only applies for whole minutes from 0 upward",
    "Using a spreadsheet formula that computes a total from a cell",
    "Looking up the output of a conversion function, such as Celsius to Fahrenheit",
    "Recognising when a calculator returns an error because an input is outside the domain"
  ],
  fields: [
    { name: "Computer science", use: "Functions with typed inputs and outputs, and checks on allowed input values, are the basic unit of programs." },
    { name: "Physics", use: "Position, velocity and energy are written as functions of time, such as x(t), each valid over a stated interval." },
    { name: "Economics", use: "Demand, cost and revenue are functions of price or quantity with domains limited to nonnegative values." },
    { name: "Biology", use: "Population and growth models are functions of time whose range is limited by carrying capacity." }
  ],
  prereqWhy: {
    "pa-functions": "You need the idea of a rule with exactly one output per input before naming that rule f and describing its input and output sets.",
    "pa-linear-graphs": "Reading domain and range from a graph, and evaluating f(a) as a height on the graph, starts with graphing lines."
  },
  unlocksWhy: {
    "a1-slope-forms": "A linear function f(x) = mx + b is the slope-intercept form written in function notation.",
    "a1-piecewise": "A piecewise function uses different formulas on different parts of the domain.",
    "a1-exp-functions": "Exponential models are written f(x) = a·bˣ, with domain ℝ and range determined by a and b.",
    "a1-quad-graphs": "The range of a quadratic function is read from its vertex, which is a domain and range question."
  },
  beyond: [
    { field: "Precalculus", why: "Composition, inverse functions and transformations are all built on function notation and on tracking domain and range." },
    { field: "Calculus I", why: "Limits, derivatives and integrals are operations on functions, and a derivative can only exist where the function is defined." },
    { field: "Statistics", why: "Probability distributions and density functions are functions whose domain is the set of possible outcomes." },
    { field: "Computer Science", why: "Function signatures, input validation and mapping over data all use the function concept directly." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m"><i>f</i>(2)</span> as <span class="m"><i>f</i> × 2</span>.`, fix: `<span class="m"><i>f</i>(2)</span> is the output of the function <span class="m"><i>f</i></span> at input 2. Substitute 2 for <span class="m"><i>x</i></span> in the formula.` },
    { wrong: `Substituting a negative without parentheses: for <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span>, writing <span class="m"><i>f</i>(−3) = −3<sup>2</sup> = −9</span>.`, fix: `Put the input in parentheses: <span class="m"><i>f</i>(−3) = (−3)<sup>2</sup> = 9</span>.` },
    { wrong: `Giving the domain of <span class="m"><i>g</i>(<i>x</i>) = √<span style="text-decoration:overline"><i>x</i> + 3</span></span> as <span class="m">(−3, ∞)</span> or as all real numbers.`, fix: `The radicand must be nonnegative: <span class="m"><i>x</i> + 3 ≥ 0</span>, so the domain is <span class="m">[−3, ∞)</span>. The endpoint is included because <span class="m">√0 = 0</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> − 3<i>x</i> + 1</span>, find <span class="m"><i>f</i>(−2)</span>.`, a: `<span class="m">2(−2)<sup>2</sup> − 3(−2) + 1 = 8 + 6 + 1 = 15</span>.` },
    { q: `Find the domain of <span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span>1</span><span><i>x</i> − 4</span></span></span>.`, a: `The denominator is zero at <span class="m"><i>x</i> = 4</span>, so the domain is <span class="m">(−∞, 4) ∪ (4, ∞)</span>, or <span class="m">{<i>x</i> | <i>x</i> ≠ 4}</span>.` },
    { q: `Find the domain and range of <span class="m"><i>g</i>(<i>x</i>) = √<span style="text-decoration:overline"><i>x</i> + 3</span></span>.`, a: `Need <span class="m"><i>x</i> + 3 ≥ 0</span>, so the domain is <span class="m">[−3, ∞)</span>. A principal square root is never negative and takes every value from 0 up, so the range is <span class="m">[0, ∞)</span>.` },
    { q: `The function <span class="m"><i>h</i>(<i>x</i>) = 5 − 2<i>x</i></span> has domain <span class="m">[−1, 4]</span>. Find its range, and solve <span class="m"><i>h</i>(<i>x</i>) = 0</span>.`, a: `<span class="m"><i>h</i>(−1) = 7</span> and <span class="m"><i>h</i>(4) = −3</span>, and a linear function takes every value between, so the range is <span class="m">[−3, 7]</span>. <span class="m">5 − 2<i>x</i> = 0</span> gives <span class="m"><i>x</i> = 2.5</span>, which is in the domain.` }
  ],
  origin: `Gottfried Leibniz used the word "function" in the 1670s and 1690s for quantities related to a curve. Leonhard Euler introduced the notation <span class="m"><i>f</i>(<i>x</i>)</span> in 1734, and in 1837 Peter Gustav Lejeune Dirichlet gave the modern idea of a function as any rule assigning one output to each input.`
};
