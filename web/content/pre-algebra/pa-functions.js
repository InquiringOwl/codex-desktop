window.ARITH = window.ARITH || {};

ARITH["pa-functions"] = {
  title: "Introduction to Functions",
  short: "Each input gets exactly one output",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Functions · input, rule, output",
  hero: `<span class="m"><span class="c2"><i>x</i></span> &nbsp;→&nbsp; <span class="c1">[ 2<i>x</i> + 1 ]</span> &nbsp;→&nbsp; <span class="c3"><i>y</i></span></span>`,
  lede: `A function is a rule that gives each <span class="m c2">input</span> exactly one <span class="m c3">output</span>. Put a number in, apply the <span class="m c1">rule</span>, and one answer comes out.`,
  plain: `<p>Think of a vending machine. You press B4 and you get one particular snack. Press B4 again and you get the same snack. If pressing B4 sometimes gave chips and sometimes gave a candy bar, the machine would be broken. A <b>function</b> is a rule that behaves like a working machine: one input, one predictable output.</p>
<p>Two different buttons can give the same snack; that is fine. The only thing a function cannot do is give two different outputs for the same input. So <span class="m">{(1, 5), (2, 5)}</span> is a function, but <span class="m">{(4, 2), (4, −2)}</span> is not, because the input 4 has two outputs.</p>
<p>On a graph there is a quick test. Imagine sliding a vertical line across the picture. If it ever touches the graph in two places, some input has two outputs, and the graph is not a function. This is the <b>vertical line test</b>.</p>`,
  formal: `<p>A <b>function</b> is a relation in which each element of the domain corresponds to <b>exactly one</b> element of the range. The input variable is the <b>independent variable</b> and the output variable is the <b>dependent variable</b>, since its value depends on the input.</p>
<div class="display">function: for each <span class="c2"><i>x</i></span> in the domain there is exactly one <span class="c3"><i>y</i></span> with (<span class="c2"><i>x</i></span>, <span class="c3"><i>y</i></span>) in the relation<br><span class="dim">{(1, 5), (2, 5), (3, 7)} is a function; &nbsp;{(4, 2), (4, −2), (9, 3)} is not</span></div>
<p><b>Vertical line test</b>: a graph in the coordinate plane is the graph of a function of <span class="m"><i>x</i></span> if and only if no vertical line intersects it in more than one point. An equation such as <span class="m"><i>y</i> = 2<i>x</i> + 1</span> defines <span class="m"><i>y</i></span> as a function of <span class="m"><i>x</i></span>; the equation <span class="m"><i>y</i><sup>2</sup> = <i>x</i></span> does not, since <span class="m"><i>x</i> = 4</span> gives <span class="m"><i>y</i> = 2</span> and <span class="m"><i>y</i> = −2</span>. In function notation the output for input <span class="m"><i>x</i></span> is written <span class="m"><i>f</i>(<i>x</i>)</span>, read "<i>f</i> of <i>x</i>".</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Input", desc: "The independent variable: the value fed into the rule. The set of allowed inputs is the domain." },
    { c: "c1", sym: `2<i>x</i> + 1`, name: "Rule", desc: "What the function does to the input. It must give only one result for each input." },
    { c: "c3", sym: `<i>y</i>`, name: "Output", desc: "The dependent variable: the single value the rule produces. All outputs together form the range." }
  ],
  steps: { title: "How to decide whether a relation is a function", items: [
    `From a list or table: look for any input that appears more than once. If it has two different outputs, it is not a function.`,
    `From a mapping diagram: if any <span class="c2">input</span> has two or more arrows leaving it, it is not a function.`,
    `From a graph: apply the vertical line test. Two intersection points on one vertical line means not a function.`,
    `From an equation: solve for <span class="m"><i>y</i></span> if you can, and see whether one <span class="m"><i>x</i></span> can give two <span class="m"><i>y</i></span>-values (a ± or an even power of <span class="m"><i>y</i></span> is a warning sign).`,
    `Remember that repeated <span class="c3">outputs</span> are allowed. Only repeated inputs with different outputs break the rule.`
  ] },
  example: {
    prompt: `A café worker earns $18 an hour. Is weekly pay a function of hours worked? Make a table for 0, 10, 20 and 40 hours, and find the pay for a 32.5-hour week.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>P</i></span> = <span class="c1">18</span><span class="c2"><i>h</i></span></span>`, note: "Input h is hours, output P is pay in dollars, and the rule is multiply by 18." },
      { math: `<span class="m">(0, 0), (10, 180), (20, 360), (40, 720)</span>`, note: "Evaluate the rule at each input." },
      { math: `<span class="m">one <span class="c3"><i>P</i></span> for each <span class="c2"><i>h</i></span></span>`, note: "The same hours always give the same pay, so P is a function of h." },
      { math: `<span class="m"><span class="c3"><i>P</i></span> = 18(<span class="c2">32.5</span>) = <span class="c3">585</span></span>`, note: "Evaluate at h = 32.5." },
      { math: `<span class="m">18 × 32 + 18 × 0.5 = 576 + 9 = 585</span>`, note: "Check: 32 full hours plus half an hour." }
    ],
    answer: `Yes, pay is a function of hours, <span class="m"><i>P</i> = 18<i>h</i></span>. A 32.5-hour week pays <span class="m">$585</span>.`
  },
  why: `<p>Functions describe dependence: your pay depends on hours worked, a shipping cost depends on weight, the distance a car travels depends on time. Saying "y is a function of x" means that once you know x, y is completely determined, which is what makes prediction possible.</p>
<p>Functions are the central object of algebra, precalculus and calculus. Graphs, formulas, spreadsheets and computer programs are all ways of representing functions.</p>`,
  careers: [
    { role: "Actuary", use: "Models insurance cost as a function of age and risk factors to set premiums." },
    { role: "Software developer", use: "Writes functions in code that return one output for each set of inputs." },
    { role: "Economist", use: "Studies demand as a function of price to predict how sales respond to price changes." },
    { role: "HVAC technician", use: "Reads performance charts that give output capacity as a function of outdoor temperature." },
    { role: "Shipping clerk", use: "Looks up postage as a function of package weight from a rate table." }
  ],
  life: [
    "Using a price list where each item has one price",
    "Reading a tax table that gives one tax amount for each income",
    "Predicting a phone bill from the number of gigabytes used",
    "Converting temperatures, where each °C value has one °F value"
  ],
  fields: [
    { name: "Physics", use: "Position, velocity and energy are treated as functions of time." },
    { name: "Computer science", use: "Functions and procedures map inputs to outputs, and pure functions always return the same output for the same input." },
    { name: "Economics", use: "Cost, revenue and demand functions relate quantities to prices." }
  ],
  prereqWhy: {
    "pa-relations": "A function is a special kind of relation, so you need ordered pairs, tables, mappings, graphs, domain and range first."
  },
  unlocksWhy: {
    "pa-proportional": "A proportional relationship y = kx is a function whose rule multiplies every input by the same constant.",
    "pa-sequences": "An arithmetic sequence is a function whose inputs are the term numbers 1, 2, 3, ….",
    "a1-functions": "Function notation f(x), domain and range build directly on the definition and vertical line test introduced here."
  },
  beyond: [
    { field: "Algebra I", why: "Linear, quadratic and exponential functions and their graphs are the main models of the course." },
    { field: "Precalculus", why: "Composition, inverses, and polynomial, rational and trigonometric functions all extend this definition." },
    { field: "Calculus I", why: "Derivatives and integrals are operations performed on functions." },
    { field: "Statistics", why: "Regression finds a function that predicts one variable from another." }
  ],
  mistakes: [
    { wrong: `Saying <span class="m">{(1, 3), (2, 3), (5, 3)}</span> is not a function because 3 repeats.`, fix: `Repeated outputs are allowed. Each input has one output, so it is a function.` },
    { wrong: `Using a horizontal line to test a graph.`, fix: `Use a <b>vertical</b> line. A vertical line picks one input, and it must meet the graph at most once.` },
    { wrong: `Deciding that a circle such as <span class="m"><i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 25</span> is a function.`, fix: `The vertical line <span class="m"><i>x</i> = 3</span> meets it at <span class="m">(3, 4)</span> and <span class="m">(3, −4)</span>, so it is not a function of <span class="m"><i>x</i></span>.` }
  ],
  practice: [
    { q: `Is <span class="m">{(1, 3), (2, 5), (3, 5)}</span> a function?`, a: `Yes. Each input 1, 2, 3 has exactly one output; the repeated output 5 is allowed.` },
    { q: `Is <span class="m">{(4, 2), (4, −2), (9, 3)}</span> a function?`, a: `No. The input 4 is paired with two outputs, 2 and −2.` },
    { q: `Does <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> define <span class="m"><i>y</i></span> as a function of <span class="m"><i>x</i></span>? Does <span class="m"><i>y</i><sup>2</sup> = <i>x</i></span>?`, a: `<span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> is a function: each <span class="m"><i>x</i></span> has one square. <span class="m"><i>y</i><sup>2</sup> = <i>x</i></span> is not: <span class="m"><i>x</i> = 4</span> gives <span class="m"><i>y</i> = 2</span> or <span class="m"><i>y</i> = −2</span>.` },
    { q: `A function has rule <span class="m"><i>y</i> = 3<i>x</i> − 4</span>. Find the outputs for the inputs −2, 0 and 5, write the ordered pairs, and say which of these inputs gives the output 11.`, a: `<span class="m">3(−2) − 4 = −10</span>, <span class="m">3(0) − 4 = −4</span>, <span class="m">3(5) − 4 = 11</span>. Pairs <span class="m">(−2, −10), (0, −4), (5, 11)</span>. The input 5 gives 11.` }
  ],
  origin: `Gottfried Wilhelm Leibniz used the word "function" in the 1670s to 1690s for quantities related to a curve. Leonhard Euler introduced the notation <i>f</i>(<i>x</i>) in 1734, and Peter Gustav Lejeune Dirichlet in 1837 described a function as any rule that assigns to each <i>x</i> a single <i>y</i>, the idea used today.`
};
