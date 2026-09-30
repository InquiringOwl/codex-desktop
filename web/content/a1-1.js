window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["a1-multi-step"] = {
  title: "Multi-Step Linear Equations",
  short: "Clear fractions, distribute, collect, solve",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 7,
  voice: "plain",
  eyebrow: "Solving equations · the general linear strategy",
  hero: `<span class="m"><span class="fr"><span><span class="c2"><i>x</i></span></span><span>3</span></span> + <span class="fr"><span><span class="c2"><i>x</i></span></span><span>4</span></span> = 7 &nbsp;⇒&nbsp; 4<span class="c2"><i>x</i></span> + 3<span class="c2"><i>x</i></span> = 84 &nbsp;⇒&nbsp; <span class="c5"><i>x</i> = 12</span></span>`,
  lede: `A multi-step equation needs several moves before the variable stands alone. The order is always the same: clear fractions, remove parentheses, collect like terms, then isolate <span class="m c2"><i>x</i></span>.`,
  plain: `<p>Real equations rarely arrive in the tidy form <span class="m"><i>ax</i> + <i>b</i> = <i>c</i></span>. They come with fractions, decimals, parentheses and the variable on both sides. Solving one is a cleanup job. Each step makes the equation simpler without changing its solution, until you are left with <span class="m"><i>x</i> = </span> a number.</p>
<p>Fractions are the messiest part, so deal with them first. Multiply every term on both sides by the <b>least common denominator</b> (LCD). In <span class="m"><i>x</i>/3 + <i>x</i>/4 = 7</span>, the LCD is 12, and multiplying through gives <span class="m">4<i>x</i> + 3<i>x</i> = 84</span>. No fractions are left. Decimals work the same way: multiply by 10, 100 or 1000.</p>
<p>Sometimes the variable disappears while you are simplifying. If what is left is always true, such as <span class="m">−7 = −7</span>, every real number works. If what is left is false, such as <span class="m">2 = 5</span>, no number works. Both results are real answers, and you should say which one you got.</p>`,
  formal: `<p>A <b>linear equation in one variable</b> can be written <span class="m"><i>ax</i> + <i>b</i> = 0</span> with <span class="m"><i>a</i>, <i>b</i> ∈ ℝ</span>. The addition and multiplication properties of equality (multiplying by a nonzero number) produce <b>equivalent equations</b>, which have the same <b>solution set</b>. After simplifying, exactly one of three cases occurs:</p>
<div class="display"><i>a</i> ≠ 0: &nbsp;one solution, solution set {−<i>b</i>/<i>a</i>} &nbsp;<span class="dim">(conditional equation)</span><br><i>a</i> = 0, <i>b</i> = 0: &nbsp;0 = 0, solution set ℝ &nbsp;<span class="dim">(identity)</span><br><i>a</i> = 0, <i>b</i> ≠ 0: &nbsp;false statement, solution set ∅ &nbsp;<span class="dim">(contradiction)</span></div>
<p>For example, <span class="m">5(<i>x</i> − 2) + 3 = 5<i>x</i> − 7</span> simplifies to <span class="m">−7 = −7</span>, an identity, while <span class="m">2(3<i>x</i> + 1) = 6<i>x</i> + 5</span> simplifies to <span class="m">2 = 5</span>, a contradiction. Multiplying both sides by the LCD of all denominators is allowed because the LCD is a nonzero constant.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "The variable", desc: "The unknown quantity. Its terms are gathered on one side of the equation." },
    { c: "c4", sym: `LCD`, name: "Least common denominator", desc: "The smallest number every denominator divides into. Multiplying every term by it clears the fractions." },
    { c: "c1", sym: `×, ±, ÷`, name: "Current operation", desc: "The move being applied to both sides at this step: multiply by the LCD, distribute, add or subtract a term, or divide." },
    { c: "c5", sym: `<i>x</i> = …`, name: "Solution", desc: "The value that makes the equation true, or the solution set ℝ or ∅ in the special cases." }
  ],
  steps: { title: "How to solve a multi-step linear equation", items: [
    `Clear fractions by multiplying <b>every</b> term on both sides by the <span class="c4">LCD</span>. Clear decimals by multiplying by a power of 10.`,
    `Use the distributive property to remove parentheses. Watch the sign when a negative is distributed.`,
    `Combine like terms on each side.`,
    `Collect the <span class="m c2"><i>x</i></span> terms on one side and the constants on the other, using addition or subtraction.`,
    `Divide both sides by the coefficient of <span class="m c2"><i>x</i></span>. If the variable terms cancel, decide whether the result is an identity (ℝ) or a contradiction (∅).`,
    `Check by substituting into the original equation, not the simplified one.`
  ] },
  example: {
    prompt: `You spend one third of your monthly take-home pay on rent and one quarter on food. After both, $500 is left. What is your monthly take-home pay?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><span class="c2"><i>x</i></span></span><span>3</span></span> + <span class="fr"><span><span class="c2"><i>x</i></span></span><span>4</span></span> + 500 = <span class="c2"><i>x</i></span></span>`, note: "Let x be the monthly pay. Rent plus food plus what is left equals all of it." },
      { math: `<span class="m"><span class="c4">12</span> · <span class="fr"><span><i>x</i></span><span>3</span></span> + <span class="c4">12</span> · <span class="fr"><span><i>x</i></span><span>4</span></span> + <span class="c4">12</span> · 500 = <span class="c4">12</span><i>x</i></span>`, note: "Multiply every term by the LCD, 12." },
      { math: `<span class="m">4<i>x</i> + 3<i>x</i> + 6000 = 12<i>x</i></span>`, note: "The fractions are gone." },
      { math: `<span class="m">7<i>x</i> + 6000 = 12<i>x</i></span>`, note: "Combine like terms on the left." },
      { math: `<span class="m">6000 = 5<i>x</i></span>`, note: "Subtract 7x from both sides." },
      { math: `<span class="m"><span class="c5"><i>x</i> = 1200</span></span>`, note: "Divide both sides by 5." },
      { math: `<span class="m">400 + 300 + 500 = 1200 ✓</span>`, note: "Check: rent 400, food 300, and 500 left." }
    ],
    answer: `Your monthly take-home pay is <span class="m">$1,200</span>.`
  },
  why: `<p>Budgets, pricing, mixtures and break-even questions all lead to linear equations that are not in simple form. Being able to clear fractions and parentheses and collect terms reliably means you can solve any of them, not just the neat textbook ones.</p>
<p>This is also the workhorse step inside nearly everything later in algebra. Solving formulas for a variable, absolute value and radical equations, systems of equations and rational equations all reduce to a multi-step linear equation at some point, and the identity and contradiction cases reappear as systems with infinitely many or no solutions.</p>`,
  careers: [
    { role: "Accountant", use: "Solves for a pre-tax amount when a total includes percentages of that amount, such as a price plus 8.25% tax plus a flat fee." },
    { role: "Pharmacist", use: "Solves mixture equations such as 0.10x + 0.40(50 − x) = 0.25(50) to find how much of each stock solution to combine." },
    { role: "Construction estimator", use: "Finds the square footage at which two contractors' bids, each a fixed fee plus a rate per square foot, cost the same." },
    { role: "Payroll specialist", use: "Works backward from net pay to gross pay when several deductions are fractions or percentages of the gross." },
    { role: "Small business owner", use: "Finds the break-even number of units by setting fixed costs plus cost per unit equal to price times units." },
    { role: "Chemist", use: "Solves dilution and concentration balances that have the unknown volume on both sides of the equation." }
  ],
  life: [
    "Working out your pay before deductions from what lands in your account",
    "Comparing two phone plans to see at what usage they cost the same",
    "Splitting a bill where some people pay a fraction and one pays a fixed amount",
    "Finding the original price of an item after a discount and tax",
    "Figuring out how much of a stronger cleaning solution to mix with water"
  ],
  fields: [
    { name: "Chemistry", use: "Mixture and dilution problems are linear equations with decimals and the unknown on both sides." },
    { name: "Economics", use: "Break-even and market-equilibrium points in linear models are found by solving one equation in one unknown." },
    { name: "Physics", use: "Rearranging motion and circuit equations for one quantity requires distributing and collecting terms." },
    { name: "Nursing", use: "Dosage and IV-rate calculations are solved as linear equations with fractions and decimals." }
  ],
  prereqWhy: {
    "pa-both-sides": "After fractions and parentheses are cleared, what remains is an equation with the variable on both sides, solved by collecting terms."
  },
  unlocksWhy: {
    "a1-literal": "Solving a formula for one letter uses the same sequence of steps with letters in place of numbers.",
    "a1-compound": "Each part of a compound inequality is solved with the same steps, with the extra rule for multiplying by a negative.",
    "a1-abs-eq": "An absolute value equation splits into two linear equations, each solved as a multi-step equation.",
    "a1-radical-eq": "After squaring both sides, many radical equations reduce to a linear equation that is solved this way."
  },
  beyond: [
    { field: "Algebra II", why: "Rational and logarithmic equations are turned into linear or quadratic equations and then solved with these steps." },
    { field: "Linear Algebra", why: "Systems of linear equations are solved by the same operations applied to many equations at once, and the one, none or infinitely many cases carry over." },
    { field: "Chemistry", why: "Solution concentration and stoichiometry problems are routinely set up and solved as linear equations." }
  ],
  mistakes: [
    { wrong: `Multiplying only the fraction terms by the LCD: from <span class="m"><span class="fr"><span><i>x</i></span><span>3</span></span> + <span class="fr"><span><i>x</i></span><span>4</span></span> + 500 = <i>x</i></span> writing <span class="m">4<i>x</i> + 3<i>x</i> + 500 = <i>x</i></span>.`, fix: `Every term on both sides gets multiplied: <span class="m">4<i>x</i> + 3<i>x</i> + 6000 = 12<i>x</i></span>.` },
    { wrong: `Distributing a negative to only the first term: <span class="m">5 − 2(<i>x</i> − 3) = 5 − 2<i>x</i> − 6</span>.`, fix: `The −2 multiplies both terms: <span class="m">5 − 2<i>x</i> + 6 = 11 − 2<i>x</i></span>.` },
    { wrong: `Reaching <span class="m">−7 = −7</span> and writing "<span class="m"><i>x</i> = −7</span>" or "<span class="m"><i>x</i> = 0</span>".`, fix: `A true statement with no variable means every real number is a solution. The solution set is <span class="m">ℝ</span>. A false statement such as <span class="m">2 = 5</span> means the solution set is <span class="m">∅</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">3(<i>x</i> − 4) + 2 = 2<i>x</i> + 5</span>.`, a: `<span class="m">3<i>x</i> − 12 + 2 = 2<i>x</i> + 5</span>, so <span class="m">3<i>x</i> − 10 = 2<i>x</i> + 5</span> and <span class="m"><i>x</i> = 15</span>. Check: <span class="m">3(11) + 2 = 35 = 2(15) + 5</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span>2</span></span> + <span class="fr"><span><i>x</i></span><span>3</span></span> = 10</span>.`, a: `Multiply by the LCD 6: <span class="m">3<i>x</i> + 2<i>x</i> = 60</span>, so <span class="m">5<i>x</i> = 60</span> and <span class="m"><i>x</i> = 12</span>. Check: <span class="m">6 + 4 = 10</span>.` },
    { q: `Solve <span class="m">5(<i>x</i> − 2) + 3 = 5<i>x</i> − 7</span>.`, a: `<span class="m">5<i>x</i> − 10 + 3 = 5<i>x</i> − 7</span> gives <span class="m">5<i>x</i> − 7 = 5<i>x</i> − 7</span>, so <span class="m">−7 = −7</span>. This is an identity: the solution set is <span class="m">ℝ</span>, all real numbers.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i> + 1</span><span>4</span></span> − <span class="fr"><span><i>x</i> − 2</span><span>6</span></span> = 1</span>.`, a: `Multiply by the LCD 12: <span class="m">3(<i>x</i> + 1) − 2(<i>x</i> − 2) = 12</span>, so <span class="m">3<i>x</i> + 3 − 2<i>x</i> + 4 = 12</span>, <span class="m"><i>x</i> + 7 = 12</span>, <span class="m"><i>x</i> = 5</span>. Check: <span class="m"><span class="fr"><span>6</span><span>4</span></span> − <span class="fr"><span>3</span><span>6</span></span> = 1.5 − 0.5 = 1</span>.` }
  ],
  origin: `The word "algebra" comes from <i>al-jabr</i> in the title of al-Khwarizmi's book written in Baghdad around 820 CE. <i>Al-jabr</i> ("restoring") meant moving a subtracted term to the other side, and <i>al-muqabala</i> ("balancing") meant cancelling equal terms from both sides, the two moves used in every multi-step equation.`
};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["a1-exponents"] = {
  title: "Integer Exponents & Scientific Notation",
  short: "Zero and negative exponents; computing in powers of ten",
  grade: "Grade 8 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Exponents · the integer powers",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup class="c3">0</sup> = <span class="c1">1</span>, &nbsp; <span class="c2"><i>a</i></span><sup class="c3">−<i>n</i></sup> = <span class="c1"><span class="fr"><span>1</span><span><i>a</i><sup><i>n</i></sup></span></span></span></span>`,
  lede: `A negative exponent means a reciprocal, and a zero exponent gives 1. With those two definitions, every exponent rule works for all integer exponents.`,
  plain: `<p>Count down the powers of 2: <span class="m">2<sup>3</sup> = 8</span>, <span class="m">2<sup>2</sup> = 4</span>, <span class="m">2<sup>1</sup> = 2</span>. Each step down divides by 2. Keep going and the pattern forces <span class="m">2<sup>0</sup> = 1</span>, <span class="m">2<sup>−1</sup> = <span class="fr"><span>1</span><span>2</span></span></span>, <span class="m">2<sup>−2</sup> = <span class="fr"><span>1</span><span>4</span></span></span>. A negative exponent does not make the number negative. It moves the power to the denominator.</p>
<p>These definitions are chosen so the rules you already know keep working. For example, <span class="m"><i>x</i><sup>5</sup> ÷ <i>x</i><sup>5</sup></span> must be 1, and subtracting exponents gives <span class="m"><i>x</i><sup>0</sup></span>. So <span class="m"><i>x</i><sup>0</sup> = 1</span>. To simplify an expression, apply the rules and then write the answer with positive exponents only.</p>
<p><b>Scientific notation</b> uses this to write very large and very small numbers compactly: a number from 1 up to (but not including) 10, times a power of ten. A red blood cell is about <span class="m">7 × 10<sup>−6</sup></span> m across. To multiply or divide in scientific notation, work on the front numbers and the powers of ten separately.</p>`,
  formal: `<p>For a real number <span class="m"><i>a</i> ≠ 0</span> and a positive integer <span class="m"><i>n</i></span>, define <span class="m"><i>a</i><sup>0</sup> = 1</span> and <span class="m"><i>a</i><sup>−<i>n</i></sup> = 1/<i>a</i><sup><i>n</i></sup></span>. (The expression <span class="m">0<sup>0</sup></span> is left undefined in elementary algebra.) Then for nonzero <span class="m"><i>a</i>, <i>b</i></span> and all integers <span class="m"><i>m</i>, <i>n</i></span>:</p>
<div class="display"><i>a</i><sup><i>m</i></sup><i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i>+<i>n</i></sup> &nbsp;&nbsp; <span class="fr"><span><i>a</i><sup><i>m</i></sup></span><span><i>a</i><sup><i>n</i></sup></span></span> = <i>a</i><sup><i>m</i>−<i>n</i></sup> &nbsp;&nbsp; (<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup><br>(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup> &nbsp;&nbsp; <span class="dim">(</span><span class="fr"><span><i>a</i></span><span><i>b</i></span></span><span class="dim">)</span><sup><i>n</i></sup> = <span class="fr"><span><i>a</i><sup><i>n</i></sup></span><span><i>b</i><sup><i>n</i></sup></span></span> &nbsp;&nbsp; <span class="dim">(</span><span class="fr"><span><i>a</i></span><span><i>b</i></span></span><span class="dim">)</span><sup>−<i>n</i></sup> = <span class="dim">(</span><span class="fr"><span><i>b</i></span><span><i>a</i></span></span><span class="dim">)</span><sup><i>n</i></sup></div>
<p>A number is in <b>scientific notation</b> when written <span class="m"><i>c</i> × 10<sup><i>n</i></sup></span> with <span class="m">1 ≤ |<i>c</i>| &lt; 10</span> and <span class="m"><i>n</i> ∈ ℤ</span>. The exponent <span class="m"><i>n</i></span> counts how many places the decimal point moves: right for positive <span class="m"><i>n</i></span>, left for negative <span class="m"><i>n</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Base", desc: "The nonzero number being repeatedly multiplied. In scientific notation the base is 10." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "Any integer. Positive means repeated multiplication, zero gives 1, negative means the reciprocal of the positive power." },
    { c: "c1", sym: `<i>a</i><sup><i>n</i></sup>`, name: "Result", desc: "The value of the power, or the simplified expression written with positive exponents." }
  ],
  steps: { title: "How to simplify with integer exponents", items: [
    `Apply the power rules first: raise every factor inside parentheses to the outside exponent, multiplying exponents.`,
    `Combine powers of the same <span class="c2">base</span>: add <span class="c3">exponents</span> when multiplying, subtract when dividing.`,
    `Simplify numerical coefficients as ordinary fractions.`,
    `Rewrite any negative exponent as a positive one by moving that factor across the fraction bar: <span class="m"><i>x</i><sup>−3</sup> = 1/<i>x</i><sup>3</sup></span>.`,
    `For scientific notation, multiply or divide the coefficients, then apply the exponent rules to the powers of ten.`,
    `Adjust the result so the coefficient is at least 1 and less than 10, changing the exponent to compensate.`
  ] },
  example: {
    prompt: `The average distance from the Sun to Earth is about <span class="m">1.496 × 10<sup>11</sup></span> m, and light travels about <span class="m">3.00 × 10<sup>8</sup></span> m per second. How long does sunlight take to reach Earth?`,
    lines: [
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>1.496 × 10<sup>11</sup></span><span>3.00 × 10<sup>8</sup></span></span></span>`, note: "Time equals distance divided by speed." },
      { math: `<span class="m">= <span class="fr"><span>1.496</span><span>3.00</span></span> × 10<sup>11 − 8</sup></span>`, note: "Divide the coefficients and the powers of ten separately." },
      { math: `<span class="m">≈ 0.4987 × 10<sup>3</sup></span>`, note: "1.496 ÷ 3.00 ≈ 0.4987, and subtracting exponents gives 10³." },
      { math: `<span class="m">≈ 4.99 × 10<sup>2</sup></span> s`, note: "Move the decimal one place right and lower the exponent by 1 so the coefficient is between 1 and 10." },
      { math: `<span class="m">499 ÷ 60 ≈ 8.3</span> min`, note: "Convert seconds to minutes." }
    ],
    answer: `Sunlight takes about <span class="m">4.99 × 10<sup>2</sup></span> seconds, a little over 8 minutes, to reach Earth.`
  },
  why: `<p>Science and engineering constantly deal with sizes from atoms to galaxies. Scientific notation and negative exponents let you write and compute with those numbers without long strings of zeros, and they show the order of magnitude at a glance. Calculators display <span class="m">4.99E2</span> for exactly this reason.</p>
<p>In algebra, negative exponents turn division into multiplication, which makes rational expressions and formulas easier to handle. The same rules are extended to fractional exponents for roots and to real exponents for exponential growth and decay.</p>`,
  careers: [
    { role: "Chemist", use: "Computes with Avogadro's number, 6.022 × 10²³ per mole, and with concentrations such as 3.2 × 10⁻⁵ mol/L." },
    { role: "Electrical engineer", use: "Works with capacitances in microfarads (10⁻⁶ F) and frequencies in gigahertz (10⁹ Hz) using exponent rules." },
    { role: "Astronomer", use: "Divides distances in metres by the speed of light in scientific notation to get light-travel times." },
    { role: "Microbiologist", use: "Tracks serial dilutions such as 10⁻⁶ and multiplies back by the dilution factor to estimate bacteria per millilitre." },
    { role: "Pharmacist", use: "Converts between milligrams, micrograms and nanograms, which differ by factors of 10³." },
    { role: "Data engineer", use: "Estimates storage in powers of ten or two, such as 10¹² bytes in a terabyte." }
  ],
  life: [
    "Reading a calculator result like 3.2E−4",
    "Comparing file sizes in kilobytes, megabytes and gigabytes",
    "Understanding the national debt or a country's population written in powers of ten",
    "Reading a medicine label in micrograms",
    "Converting between millimetres, metres and kilometres"
  ],
  fields: [
    { name: "Physics", use: "Physical constants and measurements span dozens of orders of magnitude and are written in scientific notation." },
    { name: "Chemistry", use: "Molar quantities, pH and equilibrium constants use powers of ten with negative exponents." },
    { name: "Biology", use: "Cell sizes, cell counts and dilution series are recorded in scientific notation." },
    { name: "Computer science", use: "Memory sizes, floating-point numbers and algorithm running times use powers and exponent rules." }
  ],
  prereqWhy: {
    "pa-exponent-laws": "The product, quotient and power rules for variables are the rules extended here to zero and negative exponents.",
    "sci-notation": "Writing numbers as a coefficient times a power of ten is the starting point for calculating with them using exponent rules."
  },
  unlocksWhy: {
    "a1-poly-add": "Polynomials are sums of terms whose variables have whole-number exponents, and like terms are identified by matching exponents.",
    "a1-radicals": "Simplifying square roots relies on writing factors as powers, such as x⁴ = (x²)²."
  },
  beyond: [
    { field: "Algebra II", why: "Rational exponents, exponential functions and logarithms all extend the integer exponent rules." },
    { field: "Calculus I", why: "The power rule for derivatives is applied after rewriting expressions like 1/x³ as x⁻³." },
    { field: "Chemistry", why: "Concentrations, reaction rates and pH calculations depend on fluency with negative powers of ten." },
    { field: "Physics", why: "Unit prefixes and physical constants require multiplying and dividing in scientific notation." }
  ],
  mistakes: [
    { wrong: `Treating a negative exponent as a negative number: <span class="m">5<sup>−2</sup> = −25</span>.`, fix: `A negative exponent means the reciprocal: <span class="m">5<sup>−2</sup> = <span class="fr"><span>1</span><span>25</span></span></span>.` },
    { wrong: `Moving the coefficient with the variable: <span class="m">3<i>x</i><sup>−2</sup> = <span class="fr"><span>1</span><span>3<i>x</i><sup>2</sup></span></span></span>.`, fix: `The exponent belongs only to <span class="m"><i>x</i></span>: <span class="m">3<i>x</i><sup>−2</sup> = <span class="fr"><span>3</span><span><i>x</i><sup>2</sup></span></span></span>. Only <span class="m">(3<i>x</i>)<sup>−2</sup> = <span class="fr"><span>1</span><span>9<i>x</i><sup>2</sup></span></span></span>.` },
    { wrong: `Leaving a result like <span class="m">27 × 10<sup>5</sup></span> or <span class="m">0.4987 × 10<sup>3</sup></span> as scientific notation.`, fix: `The coefficient must be at least 1 and less than 10: <span class="m">27 × 10<sup>5</sup> = 2.7 × 10<sup>6</sup></span> and <span class="m">0.4987 × 10<sup>3</sup> = 4.987 × 10<sup>2</sup></span>.` }
  ],
  practice: [
    { q: `Evaluate <span class="m">5<sup>−2</sup></span> and <span class="m">(−7)<sup>0</sup></span>.`, a: `<span class="m">5<sup>−2</sup> = <span class="fr"><span>1</span><span>25</span></span></span> and <span class="m">(−7)<sup>0</sup> = 1</span>.` },
    { q: `Simplify <span class="m">(2<i>x</i><sup>3</sup><i>y</i><sup>−2</sup>)<sup>−2</sup></span> using positive exponents.`, a: `<span class="m">2<sup>−2</sup><i>x</i><sup>−6</sup><i>y</i><sup>4</sup> = <span class="fr"><span><i>y</i><sup>4</sup></span><span>4<i>x</i><sup>6</sup></span></span></span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>3<i>x</i><sup>−2</sup><i>y</i></span><span>12<i>x</i><sup>3</sup><i>y</i><sup>−4</sup></span></span></span>.`, a: `<span class="m"><span class="fr"><span>3</span><span>12</span></span> · <i>x</i><sup>−2−3</sup> · <i>y</i><sup>1−(−4)</sup> = <span class="fr"><span>1</span><span>4</span></span><i>x</i><sup>−5</sup><i>y</i><sup>5</sup> = <span class="fr"><span><i>y</i><sup>5</sup></span><span>4<i>x</i><sup>5</sup></span></span></span>.` },
    { q: `Compute <span class="m">(6.0 × 10<sup>−4</sup>)(4.5 × 10<sup>9</sup>)</span> in scientific notation.`, a: `<span class="m">6.0 × 4.5 = 27</span> and <span class="m">10<sup>−4</sup> · 10<sup>9</sup> = 10<sup>5</sup></span>, so <span class="m">27 × 10<sup>5</sup> = 2.7 × 10<sup>6</sup></span>.` }
  ],
  origin: `René Descartes's <i>La Géométrie</i> (1637) popularised writing powers as raised numbers such as <span class="m"><i>x</i><sup>3</sup></span>. John Wallis explained negative and fractional exponents in <i>Arithmetica Infinitorum</i> (1656), and Isaac Newton used them freely in his letters of 1676.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-literal"] = {
  title: "Literal Equations & Formulas",
  short: "Solve a formula for any one of its letters",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Solving equations · formulas with several variables",
  hero: `<span class="m"><span class="c2"><i>A</i></span> = <span class="fr"><span>1</span><span>2</span></span><span class="c2"><i>b</i></span><span class="c1"><i>h</i></span> &nbsp;⇒&nbsp; <span class="c1"><i>h</i></span> = <span class="fr"><span>2<span class="c2"><i>A</i></span></span><span class="c2"><i>b</i></span></span></span>`,
  lede: `A literal equation has more than one letter. Solving it for one letter means isolating that letter, using the same inverse operations as with numbers.`,
  plain: `<p>A formula like <span class="m"><i>d</i> = <i>rt</i></span> (distance equals rate times time) is written to find <span class="m"><i>d</i></span>. But you often know the distance and the speed and want the time. Instead of plugging in numbers and solving each time, you can rearrange the formula once: <span class="m"><i>t</i> = <i>d</i>/<i>r</i></span>.</p>
<p>The method is the same as for any equation. Pick the <b>target variable</b>. Treat every other letter as if it were a known number. Then undo what is being done to the target, in reverse order, doing the same thing to both sides.</p>
<p>The one new situation is when the target appears in two terms. Then you gather those terms on one side and factor the target out, as in <span class="m"><i>A</i> = <i>P</i> + <i>Prt</i> = <i>P</i>(1 + <i>rt</i>)</span>. After that, one division finishes the job.</p>`,
  formal: `<p>A <b>literal equation</b> is an equation in two or more variables. To <b>solve for</b> a variable means to produce an equivalent equation with that variable alone on one side and an expression not containing it on the other. The properties of equality apply unchanged, with one condition: division is valid only by an expression that is nonzero.</p>
<div class="display"><i>ax</i> + <i>b</i> = <i>c</i> &nbsp;⇔&nbsp; <i>x</i> = <span class="fr"><span><i>c</i> − <i>b</i></span><span><i>a</i></span></span> &nbsp;<span class="dim">(<i>a</i> ≠ 0)</span><br><i>A</i> = <i>P</i> + <i>Prt</i> &nbsp;⇔&nbsp; <i>A</i> = <i>P</i>(1 + <i>rt</i>) &nbsp;⇔&nbsp; <i>P</i> = <span class="fr"><span><i>A</i></span><span>1 + <i>rt</i></span></span> &nbsp;<span class="dim">(1 + <i>rt</i> ≠ 0)</span></div>
<p>Solving <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span> for <span class="m"><i>y</i></span> gives <span class="m"><i>y</i> = −(<i>A</i>/<i>B</i>)<i>x</i> + <i>C</i>/<i>B</i></span> for <span class="m"><i>B</i> ≠ 0</span>, which is how a line in standard form is converted to slope-intercept form.</p>`,
  legend: [
    { c: "c1", sym: `<i>h</i>`, name: "Target variable", desc: "The letter you are solving for. It ends up alone on one side." },
    { c: "c2", sym: `<i>A</i>, <i>b</i>`, name: "Other variables", desc: "Every other letter in the formula. Treat each as a known, nonzero number while you rearrange." },
    { c: "c3", sym: `×, ÷, ±`, name: "Operation", desc: "The inverse operation applied to both sides at the current step." }
  ],
  steps: { title: "How to solve a formula for one variable", items: [
    `Circle the <span class="c1">target variable</span>. Treat every <span class="c2">other letter</span> as a constant.`,
    `Clear fractions by multiplying both sides by the denominators, and remove parentheses that contain the target.`,
    `Move every term that does not contain the target to the other side by adding or subtracting.`,
    `If the target is in more than one term, factor it out.`,
    `Divide both sides by the target's coefficient, noting that this expression must not be zero.`,
    `Check by substituting simple numbers into the original and rearranged formulas.`
  ] },
  example: {
    prompt: `A European recipe says to bake at 180 °C. Your oven is marked in Fahrenheit. Solve <span class="m"><i>C</i> = <span class="fr"><span>5</span><span>9</span></span>(<i>F</i> − 32)</span> for <span class="m"><i>F</i></span>, then convert.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>C</i></span> = <span class="fr"><span>5</span><span>9</span></span>(<span class="c1"><i>F</i></span> − 32)</span>`, note: "The target is F." },
      { math: `<span class="m"><span class="fr"><span>9</span><span>5</span></span><span class="c2"><i>C</i></span> = <span class="c1"><i>F</i></span> − 32</span>`, note: "Multiply both sides by 9/5, the reciprocal of 5/9." },
      { math: `<span class="m"><span class="c1"><i>F</i></span> = <span class="fr"><span>9</span><span>5</span></span><span class="c2"><i>C</i></span> + 32</span>`, note: "Add 32 to both sides." },
      { math: `<span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span>(180) + 32 = 324 + 32 = 356</span>`, note: "Substitute C = 180." },
      { math: `<span class="m"><span class="fr"><span>5</span><span>9</span></span>(356 − 32) = <span class="fr"><span>5</span><span>9</span></span>(324) = 180 ✓</span>`, note: "Check in the original formula." }
    ],
    answer: `<span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span><i>C</i> + 32</span>, so 180 °C is <span class="m">356</span> °F. Set the oven to about 350–360 °F.`
  },
  why: `<p>Every trade and science has its working formulas, and the one you need is often the same formula solved for a different letter. Rearranging it yourself means you only have to remember one version, and it lets spreadsheets and programs compute the quantity you actually want.</p>
<p>Solving for one variable in terms of others is also the first step of the substitution method for systems of equations, and it is how you turn a standard-form line into slope-intercept form. Later courses solve formulas involving powers, roots and logarithms the same way.</p>`,
  careers: [
    { role: "Electrician", use: "Rearranges Ohm's law V = IR to I = V/R or R = V/I depending on which quantity is measured." },
    { role: "Nurse", use: "Solves the IV flow-rate formula (volume × drop factor) ÷ time for time to find how long an infusion will run." },
    { role: "Loan officer", use: "Solves I = Prt for r to state the annual simple interest rate implied by a loan's total interest." },
    { role: "Pilot", use: "Rearranges d = rt to compute flight time from distance and ground speed, or ground speed from distance and time." },
    { role: "Civil engineer", use: "Solves area and volume formulas for a missing dimension, such as the depth of a trench needed for a given volume." },
    { role: "Chemist", use: "Solves the ideal gas law PV = nRT for whichever variable is unknown in an experiment." }
  ],
  life: [
    "Converting an oven temperature between Celsius and Fahrenheit",
    "Working out how long a trip will take from distance and average speed",
    "Finding the width of a garden bed from its perimeter and length",
    "Figuring out the interest rate on a simple loan from the interest paid",
    "Finding how tall a triangular sign must be to have a given area"
  ],
  fields: [
    { name: "Physics", use: "Kinematic and force equations are rearranged for the unknown quantity before numbers are substituted." },
    { name: "Chemistry", use: "Gas laws and concentration formulas are solved for pressure, volume, moles or temperature as needed." },
    { name: "Finance", use: "Interest and payment formulas are solved for rate, time or principal." },
    { name: "Engineering", use: "Design formulas are rearranged to size a part so it meets a required strength or capacity." }
  ],
  prereqWhy: {
    "a1-multi-step": "Rearranging a formula uses the same sequence of steps as a multi-step equation, with letters in place of numbers.",
    "pa-formulas": "You need to know common formulas and what each letter stands for before you rearrange them."
  },
  unlocksWhy: {
    "a1-sys-sub": "Substitution starts by solving one equation of the system for one variable in terms of the other."
  },
  beyond: [
    { field: "Physics", why: "Nearly every problem requires solving a formula such as v² = u² + 2as or F = ma for one quantity." },
    { field: "Algebra II", why: "Solving formulas for variables inside powers, roots and logarithms extends the same method." },
    { field: "Calculus I", why: "Implicit differentiation and related-rates problems require solving an equation for one quantity in terms of others." },
    { field: "Chemistry", why: "Gas laws, dilution formulas and rate laws are solved for different variables in different problems." }
  ],
  mistakes: [
    { wrong: `Dividing only part of a side: from <span class="m"><i>P</i> = 2<i>l</i> + 2<i>w</i></span> writing <span class="m"><i>w</i> = <i>P</i> − 2<i>l</i>/2</span>.`, fix: `Subtract first, then divide the whole side: <span class="m"><i>w</i> = <span class="fr"><span><i>P</i> − 2<i>l</i></span><span>2</span></span></span>.` },
    { wrong: `Leaving the target on both sides: from <span class="m"><i>A</i> = <i>P</i> + <i>Prt</i></span> writing <span class="m"><i>P</i> = <i>A</i> − <i>Prt</i></span>.`, fix: `Factor the target out first: <span class="m"><i>A</i> = <i>P</i>(1 + <i>rt</i>)</span>, so <span class="m"><i>P</i> = <span class="fr"><span><i>A</i></span><span>1 + <i>rt</i></span></span></span>.` },
    { wrong: `Solving <span class="m"><i>C</i> = <span class="fr"><span>5</span><span>9</span></span>(<i>F</i> − 32)</span> by adding 32 first: <span class="m"><i>C</i> + 32 = <span class="fr"><span>5</span><span>9</span></span><i>F</i></span>.`, fix: `The subtraction is inside the parentheses, so it is done first and undone last. Multiply by <span class="m"><span class="fr"><span>9</span><span>5</span></span></span> first, then add 32.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>d</i> = <i>rt</i></span> for <span class="m"><i>t</i></span>.`, a: `Divide both sides by <span class="m"><i>r</i></span>: <span class="m"><i>t</i> = <span class="fr"><span><i>d</i></span><span><i>r</i></span></span></span>, for <span class="m"><i>r</i> ≠ 0</span>.` },
    { q: `Solve <span class="m"><i>P</i> = 2<i>l</i> + 2<i>w</i></span> for <span class="m"><i>w</i></span>.`, a: `<span class="m"><i>P</i> − 2<i>l</i> = 2<i>w</i></span>, so <span class="m"><i>w</i> = <span class="fr"><span><i>P</i> − 2<i>l</i></span><span>2</span></span></span>, which also equals <span class="m"><span class="fr"><span><i>P</i></span><span>2</span></span> − <i>l</i></span>.` },
    { q: `Solve <span class="m">3<i>x</i> + 4<i>y</i> = 12</span> for <span class="m"><i>y</i></span>.`, a: `<span class="m">4<i>y</i> = 12 − 3<i>x</i></span>, so <span class="m"><i>y</i> = 3 − <span class="fr"><span>3</span><span>4</span></span><i>x</i></span>, or <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>4</span></span><i>x</i> + 3</span>.` },
    { q: `Solve <span class="m"><i>A</i> = <i>P</i> + <i>Prt</i></span> for <span class="m"><i>P</i></span>. Then find the principal that grows to $5,900 at 6% simple interest in 3 years.`, a: `<span class="m"><i>A</i> = <i>P</i>(1 + <i>rt</i>)</span>, so <span class="m"><i>P</i> = <span class="fr"><span><i>A</i></span><span>1 + <i>rt</i></span></span></span>. Then <span class="m"><i>P</i> = 5900 ÷ (1 + 0.06 × 3) = 5900 ÷ 1.18 = $5,000</span>.` }
  ],
  origin: `François Viète's <i>In artem analyticem isagoge</i> (1591) was the first work to use letters systematically for known quantities as well as unknowns, writing vowels for unknowns and consonants for knowns. That made it possible to state and rearrange general formulas instead of solving one numerical case at a time.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-compound"] = {
  title: "Compound Inequalities & Interval Notation",
  short: "AND means overlap, OR means either, in interval notation",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Inequalities · intersections and unions",
  hero: `<span class="m"><span class="c2">−1 ≤ 2<i>x</i> + 3</span> <span class="c3">&lt; 9</span> &nbsp;⇔&nbsp; <span class="c1"><i>x</i> ∈ [−2, 3)</span></span>`,
  lede: `A compound inequality joins two inequalities with AND or OR. AND keeps only the numbers that satisfy both; OR keeps the numbers that satisfy at least one.`,
  plain: `<p>Many real limits come in pairs. A parcel must weigh more than 0 and at most 30 kg. A thermostat keeps a room between 68 and 72 °F. Each of these is really two inequalities at once, joined by AND. The numbers that work are the ones in the overlap, usually a stretch between two endpoints.</p>
<p>Other conditions are joined by OR. A discount might apply if you are under 12 or 65 or older. Here a number works if it satisfies either condition, so the solution is two separate pieces of the number line.</p>
<p><b>Interval notation</b> is a short way to write these sets. A square bracket means the endpoint is included, a parenthesis means it is not, and <span class="m">∞</span> always gets a parenthesis because it is not a number you can reach. So "at least −2 and less than 3" is <span class="m">[−2, 3)</span>. The symbol <span class="m">∪</span> ("union") joins pieces for OR.</p>`,
  formal: `<p>For inequalities with solution sets <span class="m"><i>S</i><sub>1</sub></span> and <span class="m"><i>S</i><sub>2</sub></span>, the <b>conjunction</b> "<span class="m"><i>P</i></span> and <span class="m"><i>Q</i></span>" has solution set <span class="m"><i>S</i><sub>1</sub> ∩ <i>S</i><sub>2</sub></span> (the <b>intersection</b>), and the <b>disjunction</b> "<span class="m"><i>P</i></span> or <span class="m"><i>Q</i></span>" has solution set <span class="m"><i>S</i><sub>1</sub> ∪ <i>S</i><sub>2</sub></span> (the <b>union</b>). The double inequality <span class="m"><i>a</i> &lt; <i>x</i> &lt; <i>b</i></span> means <span class="m"><i>a</i> &lt; <i>x</i></span> and <span class="m"><i>x</i> &lt; <i>b</i></span>.</p>
<div class="display">[<i>a</i>, <i>b</i>] = {<i>x</i> | <i>a</i> ≤ <i>x</i> ≤ <i>b</i>} &nbsp;&nbsp; (<i>a</i>, <i>b</i>) = {<i>x</i> | <i>a</i> &lt; <i>x</i> &lt; <i>b</i>}<br>[<i>a</i>, <i>b</i>) = {<i>x</i> | <i>a</i> ≤ <i>x</i> &lt; <i>b</i>} &nbsp;&nbsp; (−∞, <i>b</i>] = {<i>x</i> | <i>x</i> ≤ <i>b</i>} &nbsp;&nbsp; (<i>a</i>, ∞) = {<i>x</i> | <i>x</i> &gt; <i>a</i>}</div>
<p>A double inequality is solved by applying each operation to all three parts. Multiplying or dividing by a negative number reverses both inequality signs. An intersection can be empty, as in <span class="m"><i>x</i> &gt; 3</span> and <span class="m"><i>x</i> &lt; 2</span>, whose solution set is <span class="m">∅</span>; a union can be all of <span class="m">ℝ</span>, as in <span class="m"><i>x</i> &lt; 5</span> or <span class="m"><i>x</i> &gt; 1</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>S</i><sub>1</sub>`, name: "First inequality", desc: "The solution set of the first condition, shaded on the top number line." },
    { c: "c3", sym: `<i>S</i><sub>2</sub>`, name: "Second inequality", desc: "The solution set of the second condition, shaded on the middle number line." },
    { c: "c1", sym: `∩, ∪`, name: "Result", desc: "The overlap for AND, or everything shaded on either line for OR, written in interval notation." }
  ],
  steps: { title: "How to solve a compound inequality", items: [
    `Decide whether the conditions are joined by AND (both must hold) or OR (at least one must hold).`,
    `For a double inequality <span class="m"><i>a</i> &lt; <i>expression</i> &lt; <i>b</i></span>, do the same operation to all three parts until <span class="m"><i>x</i></span> is alone in the middle.`,
    `For two separate inequalities, solve each one on its own.`,
    `Whenever you multiply or divide by a negative number, reverse every inequality sign involved.`,
    `Graph <span class="c2">each solution set</span> on a number line, with a closed dot for ≤ or ≥ and an open dot for &lt; or &gt;.`,
    `Take the overlap for AND or the combined shading for OR, and write the <span class="c1">result</span> in interval notation. Check one number from the result in the original.`
  ] },
  example: {
    prompt: `Your test scores so far are 72, 85 and 79. A B in the course needs a four-test average of at least 80 and below 90. The final test is scored out of 100. What final scores give you a B?`,
    lines: [
      { math: `<span class="m">80 ≤ <span class="fr"><span>72 + 85 + 79 + <i>x</i></span><span>4</span></span> &lt; 90</span>`, note: "Let x be the final score. The average must be at least 80 and less than 90." },
      { math: `<span class="m">320 ≤ 236 + <i>x</i> &lt; 360</span>`, note: "Multiply all three parts by 4 and add the known scores." },
      { math: `<span class="m"><span class="c2">84 ≤ <i>x</i></span> <span class="c3">&lt; 124</span></span>`, note: "Subtract 236 from all three parts." },
      { math: `<span class="m">0 ≤ <i>x</i> ≤ 100</span>`, note: "A score must also be between 0 and 100." },
      { math: `<span class="m c1">[84, 124) ∩ [0, 100] = [84, 100]</span>`, note: "Both conditions must hold, so intersect the sets." },
      { math: `<span class="m">(236 + 84) ÷ 4 = 80 ✓</span>`, note: "Check the lowest score: it gives an average of exactly 80." }
    ],
    answer: `You need a final score in <span class="m">[84, 100]</span>, that is, at least 84.`
  },
  why: `<p>Specifications, safe ranges and eligibility rules are compound inequalities. Normal lab values, speed limits with minimums, tolerance bands in manufacturing, tax brackets and age-based pricing all describe a set of acceptable numbers that is an interval or a union of intervals.</p>
<p>Interval notation is the standard way to write domains, ranges and solution sets from here through calculus. The AND/OR logic of intersections and unions is also exactly the logic used in probability, databases and programming conditions.</p>`,
  careers: [
    { role: "Quality control technician", use: "Accepts parts only when a measurement lies inside a tolerance band such as 9.95 ≤ d ≤ 10.05 mm." },
    { role: "Nurse", use: "Flags lab values that fall outside a reference range, for example a fasting blood glucose outside 70 to 99 mg/dL." },
    { role: "Software developer", use: "Writes conditions with && and || that are compound inequalities, such as accepting an age only if it is at least 0 and under 130." },
    { role: "HVAC technician", use: "Sets a thermostat's comfort band and alarm thresholds as an interval of allowed temperatures." },
    { role: "Insurance underwriter", use: "Applies rate tables whose categories are intervals of age or risk score." },
    { role: "Pharmacist", use: "Checks that a drug's blood level lies within its therapeutic window, above the effective level and below the toxic level." }
  ],
  life: [
    "Working out what score you need on a final to land in a grade range",
    "Checking whether a suitcase is within an airline's weight limit",
    "Setting an oven or thermostat to stay within a temperature band",
    "Deciding who qualifies for a child or senior ticket price",
    "Reading the normal range printed next to a lab result"
  ],
  fields: [
    { name: "Engineering", use: "Tolerances and safe operating ranges are stated as intervals." },
    { name: "Medicine", use: "Reference ranges for tests and therapeutic windows for drugs are intervals of acceptable values." },
    { name: "Computer science", use: "Boolean conditions combining comparisons with AND and OR describe intersections and unions." },
    { name: "Statistics", use: "Confidence intervals are written in interval notation, such as (48.2, 53.8)." }
  ],
  prereqWhy: {
    "a1-multi-step": "Each part of a compound inequality is simplified with the same distribute-and-collect steps used for equations.",
    "pa-solve-ineq": "You need to solve a single linear inequality, including reversing the sign for a negative multiplier, before combining two."
  },
  unlocksWhy: {
    "a1-abs-ineq": "An absolute value inequality becomes a compound inequality: |x| &lt; k becomes an AND, and |x| &gt; k becomes an OR.",
    "a1-sys-ineq": "A system of inequalities in two variables is the two-dimensional version of AND, the region where both hold."
  },
  beyond: [
    { field: "Precalculus", why: "Domains, ranges and the solutions of polynomial and rational inequalities are written as unions of intervals." },
    { field: "Calculus I", why: "Intervals of increase, decrease and concavity, and the epsilon-delta definition of a limit, are stated with compound inequalities." },
    { field: "Statistics", why: "Confidence intervals and probabilities like P(a < X < b) are built on interval notation." }
  ],
  mistakes: [
    { wrong: `Flipping only one sign: from <span class="m">−7 &lt; 3 − 2<i>x</i> ≤ 5</span> writing <span class="m">5 &gt; <i>x</i> ≤ −1</span>.`, fix: `Dividing all three parts by −2 reverses both signs: <span class="m">5 &gt; <i>x</i> ≥ −1</span>, which is <span class="m">−1 ≤ <i>x</i> &lt; 5</span>, or <span class="m">[−1, 5)</span>.` },
    { wrong: `Writing an OR solution as a double inequality: "<span class="m"><i>x</i> &lt; −1</span> or <span class="m"><i>x</i> ≥ 4</span>" as <span class="m">4 ≤ <i>x</i> &lt; −1</span>.`, fix: `A double inequality means AND and must read in order from smaller to larger. Write the OR solution as <span class="m">(−∞, −1) ∪ [4, ∞)</span>.` },
    { wrong: `Putting a bracket on infinity: <span class="m">[3, ∞]</span>.`, fix: `Infinity is not a number that is included, so it always takes a parenthesis: <span class="m">[3, ∞)</span>.` }
  ],
  practice: [
    { q: `Write "<span class="m"><i>x</i> &gt; −2</span> and <span class="m"><i>x</i> ≤ 5</span>" in interval notation.`, a: `The overlap is <span class="m">−2 &lt; <i>x</i> ≤ 5</span>, which is <span class="m">(−2, 5]</span>.` },
    { q: `Solve <span class="m">2<i>x</i> + 1 &lt; −1</span> or <span class="m">3<i>x</i> ≥ 12</span>.`, a: `<span class="m"><i>x</i> &lt; −1</span> or <span class="m"><i>x</i> ≥ 4</span>, so the solution set is <span class="m">(−∞, −1) ∪ [4, ∞)</span>.` },
    { q: `Solve <span class="m">−7 &lt; 3 − 2<i>x</i> ≤ 5</span>.`, a: `Subtract 3: <span class="m">−10 &lt; −2<i>x</i> ≤ 2</span>. Divide by −2 and reverse both signs: <span class="m">5 &gt; <i>x</i> ≥ −1</span>. The solution set is <span class="m">[−1, 5)</span>.` },
    { q: `Solve <span class="m">2<i>x</i> + 1 &gt; 7</span> and <span class="m">3<i>x</i> − 4 &lt; 2</span>.`, a: `The first gives <span class="m"><i>x</i> &gt; 3</span> and the second gives <span class="m"><i>x</i> &lt; 2</span>. No number is both greater than 3 and less than 2, so the solution set is <span class="m">∅</span>.` }
  ],
  origin: `The symbols &lt; and &gt; first appeared in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published after his death in 1631. The symbols ≤ and ≥ were introduced by the French mathematician Pierre Bouguer in 1734.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-abs-eq"] = {
  title: "Absolute Value Equations",
  short: "Distance from a centre gives two answers, one, or none",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Solving equations · absolute value as distance",
  hero: `<span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| = <span class="c3"><i>k</i></span> &nbsp;⇒&nbsp; <span class="c1"><i>x</i> = <i>h</i> ± <i>k</i></span></span>`,
  lede: `The absolute value <span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>|</span> is the distance between <span class="m"><i>x</i></span> and <span class="m c4"><i>h</i></span>. Asking for that distance to equal <span class="m c3"><i>k</i></span> gives the two points <span class="m c3"><i>k</i></span> units either side of the centre.`,
  plain: `<p>The absolute value of a number is its distance from zero, so it is never negative. Both 5 and −5 are 5 units from zero, which is why <span class="m">|<i>x</i>| = 5</span> has two solutions: <span class="m"><i>x</i> = 5</span> and <span class="m"><i>x</i> = −5</span>.</p>
<p>More generally, <span class="m">|<i>x</i> − 3| = 5</span> asks which numbers are 5 units away from 3. Walk 5 to the right and you reach 8. Walk 5 to the left and you reach −2. So the equation splits into two ordinary equations, <span class="m"><i>x</i> − 3 = 5</span> and <span class="m"><i>x</i> − 3 = −5</span>.</p>
<p>Before you split, get the absolute value alone on one side. Then look at the other side. If it is positive, you get two solutions. If it is zero, there is just one. If it is negative, there are none, because a distance cannot be negative.</p>`,
  formal: `<p>The <b>absolute value</b> of a real number is <span class="m">|<i>a</i>| = <i>a</i></span> if <span class="m"><i>a</i> ≥ 0</span> and <span class="m">|<i>a</i>| = −<i>a</i></span> if <span class="m"><i>a</i> &lt; 0</span>. Geometrically, <span class="m">|<i>a</i> − <i>b</i>|</span> is the distance between <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> on the number line. For an expression <span class="m"><i>u</i></span> and a real number <span class="m"><i>k</i></span>:</p>
<div class="display"><i>k</i> &gt; 0: &nbsp;|<i>u</i>| = <i>k</i> &nbsp;⇔&nbsp; <i>u</i> = <i>k</i> or <i>u</i> = −<i>k</i><br><i>k</i> = 0: &nbsp;|<i>u</i>| = 0 &nbsp;⇔&nbsp; <i>u</i> = 0<br><i>k</i> &lt; 0: &nbsp;|<i>u</i>| = <i>k</i> has no solution, solution set ∅</div>
<p>An equation with an absolute value on each side satisfies <span class="m">|<i>u</i>| = |<i>v</i>| ⇔ <i>u</i> = <i>v</i> or <i>u</i> = −<i>v</i></span>.</p>`,
  legend: [
    { c: "c4", sym: `<i>h</i>`, name: "Centre", desc: "The point the distance is measured from. For |ax + b| = c it is x = −b/a." },
    { c: "c3", sym: `<i>k</i>`, name: "Distance", desc: "The required distance from the centre. It must be zero or positive for a solution to exist." },
    { c: "c1", sym: `<i>h</i> ± <i>k</i>`, name: "Solutions", desc: "The points exactly k units to the left and right of the centre, one point if k = 0, none if k &lt; 0." }
  ],
  steps: { title: "How to solve an absolute value equation", items: [
    `Isolate the absolute value: get <span class="m">|<i>u</i>|</span> alone on one side by adding, subtracting, multiplying or dividing.`,
    `Look at the other side <span class="m c3"><i>k</i></span>. If <span class="m"><i>k</i> &lt; 0</span>, stop: there is no solution.`,
    `If <span class="m"><i>k</i> = 0</span>, solve the single equation <span class="m"><i>u</i> = 0</span>.`,
    `If <span class="m"><i>k</i> &gt; 0</span>, write two equations, <span class="m"><i>u</i> = <i>k</i></span> and <span class="m"><i>u</i> = −<i>k</i></span>, and solve each.`,
    `Check each solution in the original equation, and write the solution set.`
  ] },
  example: {
    prompt: `A bolt is specified at 25.00 mm long with a tolerance of 0.04 mm either way. Find the shortest and longest acceptable lengths by solving <span class="m">|<i>L</i> − 25.00| = 0.04</span>.`,
    lines: [
      { math: `<span class="m">|<i>L</i> − <span class="c4">25.00</span>| = <span class="c3">0.04</span></span>`, note: "The distance between L and the target 25.00 equals the tolerance." },
      { math: `<span class="m"><i>L</i> − 25.00 = 0.04 &nbsp; or &nbsp; <i>L</i> − 25.00 = −0.04</span>`, note: "The right side is positive, so split into two equations." },
      { math: `<span class="m"><span class="c1"><i>L</i> = 25.04</span> &nbsp; or &nbsp; <span class="c1"><i>L</i> = 24.96</span></span>`, note: "Add 25.00 to both sides of each." },
      { math: `<span class="m">|25.04 − 25.00| = 0.04 ✓, &nbsp; |24.96 − 25.00| = |−0.04| = 0.04 ✓</span>`, note: "Check both in the original equation." }
    ],
    answer: `The acceptable lengths run from <span class="m">24.96</span> mm to <span class="m">25.04</span> mm, the two solutions of the equation.`
  },
  why: `<p>Absolute value measures size without direction: how far off, how much error, how big a change. Equations like <span class="m">|<i>L</i> − 25| = 0.04</span> find the boundary values of a tolerance, and the same idea gives the edges of a margin of error or the times when a quantity is a given distance from a target.</p>
<p>Solving them trains you to split one condition into cases, a habit used constantly in later math. Absolute value inequalities, piecewise functions, distance formulas and the formal definition of a limit all build on it.</p>`,
  careers: [
    { role: "Machinist", use: "Uses |measured − nominal| = tolerance to find the upper and lower limits a part can be cut to." },
    { role: "Pollster", use: "Finds the ends of a reported range by solving |p − 52| = 3 for a result of 52% with a 3-point margin of error." },
    { role: "Surveyor", use: "Locates both points on a line that lie a given distance from a known marker." },
    { role: "Pharmacist", use: "Determines the extreme acceptable weights of a compounded capsule from its target weight and allowed deviation." },
    { role: "Control engineer", use: "Finds when a system's output is exactly a set error band away from its setpoint." },
    { role: "Air traffic controller", use: "Identifies the two altitudes a set vertical separation above and below another aircraft." }
  ],
  life: [
    "Working out the two temperatures a thermostat allows around its setting",
    "Finding which exits are exactly 10 miles from your current mile marker",
    "Understanding the range behind a poll result with a margin of error",
    "Checking the heaviest and lightest a package can be to meet a stated weight",
    "Finding the two dates that are a week from a deadline"
  ],
  fields: [
    { name: "Engineering", use: "Tolerance limits are found by solving absolute value equations around a nominal dimension." },
    { name: "Statistics", use: "The ends of a margin-of-error interval solve |x − estimate| = margin." },
    { name: "Physics", use: "Absolute value gives the magnitude of a displacement or velocity regardless of direction." }
  ],
  prereqWhy: {
    "a1-multi-step": "Isolating the absolute value and then solving each of the two resulting linear equations uses multi-step equation skills."
  },
  unlocksWhy: {
    "a1-abs-ineq": "The solutions of |u| = k are the boundary points that separate the solutions of |u| &lt; k from those of |u| &gt; k.",
    "a1-piecewise": "The absolute value function is defined piecewise, and solving |u| = k is the same as solving on each piece."
  },
  beyond: [
    { field: "Precalculus", why: "Transformations of y = |x| and equations mixing absolute value with other functions use the same case split." },
    { field: "Calculus I", why: "The epsilon-delta definition of a limit is stated with absolute values measuring distance." },
    { field: "Statistics", why: "Absolute deviations from the mean or median measure spread and define error bands." }
  ],
  mistakes: [
    { wrong: `Splitting before isolating: from <span class="m">2|3<i>x</i> − 1| + 4 = 18</span> writing <span class="m">2(3<i>x</i> − 1) + 4 = ±18</span>.`, fix: `Isolate first: <span class="m">2|3<i>x</i> − 1| = 14</span>, so <span class="m">|3<i>x</i> − 1| = 7</span>. Then split: <span class="m">3<i>x</i> − 1 = 7</span> or <span class="m">3<i>x</i> − 1 = −7</span>.` },
    { wrong: `Solving <span class="m">|<i>x</i> − 4| = −7</span> as <span class="m"><i>x</i> − 4 = 7</span> or <span class="m"><i>x</i> − 4 = −7</span>.`, fix: `An absolute value is never negative, so <span class="m">|<i>x</i> − 4| = −7</span> has no solution. Its solution set is <span class="m">∅</span>.` },
    { wrong: `Writing only one equation, <span class="m"><i>u</i> = <i>k</i></span>, and losing the second solution.`, fix: `For <span class="m"><i>k</i> &gt; 0</span> there are two points at distance <span class="m"><i>k</i></span>, so always write both <span class="m"><i>u</i> = <i>k</i></span> and <span class="m"><i>u</i> = −<i>k</i></span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">|<i>x</i> + 3| = 5</span>.`, a: `<span class="m"><i>x</i> + 3 = 5</span> or <span class="m"><i>x</i> + 3 = −5</span>, so <span class="m"><i>x</i> = 2</span> or <span class="m"><i>x</i> = −8</span>. Solution set <span class="m">{−8, 2}</span>.` },
    { q: `Solve <span class="m">2|3<i>x</i> − 1| + 4 = 18</span>.`, a: `<span class="m">|3<i>x</i> − 1| = 7</span>. Then <span class="m">3<i>x</i> − 1 = 7</span> gives <span class="m"><i>x</i> = <span class="fr"><span>8</span><span>3</span></span></span>, and <span class="m">3<i>x</i> − 1 = −7</span> gives <span class="m"><i>x</i> = −2</span>. Solution set <span class="m">{−2, <span class="fr"><span>8</span><span>3</span></span>}</span>.` },
    { q: `Solve <span class="m">|<i>x</i> − 4| + 9 = 2</span>.`, a: `Isolating gives <span class="m">|<i>x</i> − 4| = −7</span>. An absolute value cannot be negative, so there is no solution: <span class="m">∅</span>.` },
    { q: `Solve <span class="m">|2<i>x</i> − 1| = |<i>x</i> + 5|</span>.`, a: `Either <span class="m">2<i>x</i> − 1 = <i>x</i> + 5</span>, giving <span class="m"><i>x</i> = 6</span>, or <span class="m">2<i>x</i> − 1 = −(<i>x</i> + 5)</span>, giving <span class="m">3<i>x</i> = −4</span> and <span class="m"><i>x</i> = −<span class="fr"><span>4</span><span>3</span></span></span>. Check: <span class="m">|11| = |11|</span> and <span class="m">|−<span class="fr"><span>11</span><span>3</span></span>| = |<span class="fr"><span>11</span><span>3</span></span>|</span>.` }
  ],
  origin: `The vertical-bar notation <span class="m">|<i>x</i>|</span> was introduced by the German mathematician Karl Weierstrass in 1841.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-slope-forms"] = {
  title: "Slope & Slope-Intercept Form",
  short: "y = mx + b: steepness m, starting value b",
  grade: "Grade 8–9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Linear functions · the equation of a line",
  hero: `<span class="m c1"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>, &nbsp; <span class="m"><span class="c3"><i>m</i></span> = <span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></span>`,
  lede: `Every non-vertical line can be written <span class="m"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>. The slope <span class="m c3"><i>m</i></span> is the rate of change, and <span class="m c2"><i>b</i></span> is where the line crosses the <span class="m"><i>y</i></span>-axis.`,
  plain: `<p>A line has two features that pin it down: how steep it is and where it starts. The <b>slope</b> <span class="m"><i>m</i></span> is the steepness, the change in <span class="m"><i>y</i></span> for each step of 1 in <span class="m"><i>x</i></span>. You find it from any two points as rise over run. The <b>y-intercept</b> <span class="m"><i>b</i></span> is the value of <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 0</span>, the point <span class="m">(0, <i>b</i>)</span> where the line crosses the vertical axis.</p>
<p>Put them together and you get <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, the <b>slope-intercept form</b>. A gym charges a $40 joining fee and $25 a month: after <span class="m"><i>x</i></span> months you have paid <span class="m"><i>y</i> = 25<i>x</i> + 40</span>. The 25 is the rate and the 40 is the starting amount.</p>
<p>The sign of the slope tells you the direction. Positive slope rises from left to right, negative slope falls, and zero slope is a flat horizontal line. A vertical line has no slope at all (its run is zero), so it cannot be written in this form. Its equation is <span class="m"><i>x</i> = </span> a constant.</p>`,
  formal: `<p>The <b>slope</b> of the line through <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span> with <span class="m"><i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub></span> is</p>
<div class="display"><span class="c3"><i>m</i></span> = <span class="fr"><span>Δ<i>y</i></span><span>Δ<i>x</i></span></span> = <span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></div>
<p>and it is the same for every pair of distinct points on the line. A non-vertical line with slope <span class="m"><i>m</i></span> and <b>y-intercept</b> <span class="m">(0, <i>b</i>)</span> has equation <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, so it is the graph of the <b>linear function</b> <span class="m"><i>f</i>(<i>x</i>) = <i>mx</i> + <i>b</i></span>. Horizontal lines have <span class="m"><i>m</i> = 0</span> and equation <span class="m"><i>y</i> = <i>b</i></span>. Vertical lines <span class="m"><i>x</i> = <i>a</i></span> have <b>undefined</b> slope and are not graphs of functions.</p>`,
  legend: [
    { c: "c3", sym: `<i>m</i>`, name: "Slope", desc: "Rise over run: the change in y for each increase of 1 in x. Positive rises, negative falls, zero is flat." },
    { c: "c2", sym: `<i>b</i>`, name: "y-intercept", desc: "The value of y when x = 0, where the line crosses the y-axis at (0, b)." },
    { c: "c1", sym: `<i>y</i> = <i>mx</i> + <i>b</i>`, name: "The line", desc: "Every point (x, y) on it satisfies the equation, and every solution of the equation lies on it." }
  ],
  steps: { title: "How to find and use y = mx + b", items: [
    `From two points, compute <span class="m c3"><i>m</i></span> <span class="m">= (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)</span>, subtracting in the same order on top and bottom.`,
    `Substitute <span class="m c3"><i>m</i></span> and either point into <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> and solve for <span class="m c2"><i>b</i></span>.`,
    `Write the equation with the numbers for <span class="m"><i>m</i></span> and <span class="m"><i>b</i></span> in place.`,
    `To graph, plot <span class="m">(0, <i>b</i>)</span>, then move by the rise and run of the slope to a second point, and draw the line.`,
    `If an equation is in another form, solve it for <span class="m"><i>y</i></span> to read off <span class="m"><i>m</i></span> and <span class="m"><i>b</i></span>.`,
    `Check that both original points satisfy your equation.`
  ] },
  example: {
    prompt: `A tomato seedling is 11 cm tall on day 4 and 20 cm tall on day 10, growing at a steady rate. Write its height <span class="m"><i>h</i></span> as a function of day <span class="m"><i>d</i></span>, and predict its height on day 16.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>m</i></span> = <span class="fr"><span>20 − 11</span><span>10 − 4</span></span> = <span class="fr"><span>9</span><span>6</span></span> = 1.5</span>`, note: "The slope is the growth rate: 1.5 cm per day." },
      { math: `<span class="m">11 = 1.5(4) + <span class="c2"><i>b</i></span></span>`, note: "Substitute the point (4, 11) into h = md + b." },
      { math: `<span class="m"><span class="c2"><i>b</i></span> = 11 − 6 = 5</span>`, note: "The seedling was 5 cm tall at day 0." },
      { math: `<span class="m c1"><i>h</i> = 1.5<i>d</i> + 5</span>`, note: "Slope-intercept form." },
      { math: `<span class="m">1.5(10) + 5 = 20 ✓</span>`, note: "Check with the other point, (10, 20)." },
      { math: `<span class="m"><i>h</i>(16) = 1.5(16) + 5 = 29</span>`, note: "Predict day 16." }
    ],
    answer: `<span class="m"><i>h</i> = 1.5<i>d</i> + 5</span>, and the model predicts a height of <span class="m">29</span> cm on day 16.`
  },
  why: `<p>Any quantity that changes at a constant rate follows a line: a bill with a fixed fee and a per-unit charge, a car's distance at a steady speed, a salary with a flat raise each year. Slope-intercept form lets you read the rate and the starting value straight from the equation and make predictions from two measurements.</p>
<p>Slope is the idea that calculus generalises. The derivative of a function is the slope of its tangent line, and linear approximation replaces a curve by <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> near a point.</p>`,
  careers: [
    { role: "Civil engineer", use: "Designs road grades and wheelchair ramps by slope, such as the ADA maximum ramp slope of 1:12." },
    { role: "Economist", use: "Interprets the slope of a linear cost function as the marginal cost of one more unit." },
    { role: "Roofer", use: "Describes roof pitch as rise over run, such as 6 inches of rise per 12 inches of run." },
    { role: "Lab technician", use: "Fits a straight calibration line of instrument reading against known concentration and uses its slope and intercept to convert readings." },
    { role: "Sales manager", use: "Models revenue as a linear function of units sold to forecast from recent data." },
    { role: "Hydrologist", use: "Estimates a stream's rate of rise from two gauge readings and projects when it will reach flood stage." }
  ],
  life: [
    "Comparing phone or gym plans with a fixed fee plus a monthly charge",
    "Predicting when you will reach a savings goal with steady deposits",
    "Reading the steepness of a hiking trail or a road sign warning of a 6% grade",
    "Estimating a taxi fare from the base fare and the per-mile rate",
    "Tracking steady weight change in a pet or a growing plant"
  ],
  fields: [
    { name: "Physics", use: "On a position–time graph the slope is velocity, and on a velocity–time graph it is acceleration." },
    { name: "Economics", use: "Linear supply, demand and cost curves are described by their slopes and intercepts." },
    { name: "Chemistry", use: "Calibration curves and Beer–Lambert law plots are straight lines read by slope." },
    { name: "Geography", use: "Gradients of terrain are rise over run, read from contour maps." }
  ],
  prereqWhy: {
    "a1-functions": "Writing a line as f(x) = mx + b and reading its intercept as f(0) uses function notation.",
    "pa-slope": "Slope as rise over run and as a rate of change is the m in slope-intercept form."
  },
  unlocksWhy: {
    "a1-line-forms": "Point-slope and standard form are other ways of writing the same line, converted to and from y = mx + b."
  },
  beyond: [
    { field: "Calculus I", why: "The derivative is the slope of the tangent line, and tangent lines are written using slope-intercept or point-slope form." },
    { field: "Statistics", why: "Regression lines are written ŷ = a + bx, with the slope interpreted as the predicted change in y per unit of x." },
    { field: "Physics", why: "Slopes of motion graphs give velocity and acceleration." },
    { field: "Economics", why: "Marginal cost and marginal revenue are slopes of cost and revenue functions." }
  ],
  mistakes: [
    { wrong: `Subtracting in opposite orders: <span class="m"><i>m</i> = (20 − 11)/(4 − 10)</span>.`, fix: `Use the same point first on top and bottom: <span class="m">(20 − 11)/(10 − 4) = 1.5</span>.` },
    { wrong: `Reading <span class="m"><i>m</i> = 3</span> and <span class="m"><i>b</i> = 2</span> from <span class="m">3<i>x</i> + 2<i>y</i> = 8</span>.`, fix: `Solve for <span class="m"><i>y</i></span> first: <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>2</span></span><i>x</i> + 4</span>, so <span class="m"><i>m</i> = −<span class="fr"><span>3</span><span>2</span></span></span> and <span class="m"><i>b</i> = 4</span>.` },
    { wrong: `Saying a vertical line has slope 0.`, fix: `A horizontal line has slope 0. A vertical line has run 0, so its slope is undefined, and its equation is <span class="m"><i>x</i> = <i>a</i></span>.` }
  ],
  practice: [
    { q: `Find the slope of the line through <span class="m">(2, −1)</span> and <span class="m">(6, 7)</span>.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>7 − (−1)</span><span>6 − 2</span></span> = <span class="fr"><span>8</span><span>4</span></span> = 2</span>.` },
    { q: `Find the slope and y-intercept of <span class="m">3<i>x</i> + 2<i>y</i> = 8</span>.`, a: `<span class="m">2<i>y</i> = −3<i>x</i> + 8</span>, so <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>2</span></span><i>x</i> + 4</span>. Slope <span class="m">−<span class="fr"><span>3</span><span>2</span></span></span>, y-intercept <span class="m">(0, 4)</span>.` },
    { q: `Write the equation of the line through <span class="m">(−3, 4)</span> and <span class="m">(3, 0)</span> in slope-intercept form.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>0 − 4</span><span>3 − (−3)</span></span> = −<span class="fr"><span>2</span><span>3</span></span></span>. Then <span class="m">0 = −<span class="fr"><span>2</span><span>3</span></span>(3) + <i>b</i></span>, so <span class="m"><i>b</i> = 2</span>: <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 2</span>.` },
    { q: `Find the equation of the line through <span class="m">(4, −2)</span> and <span class="m">(4, 5)</span>. Can it be written in slope-intercept form?`, a: `The run is <span class="m">4 − 4 = 0</span>, so the slope is undefined. The line is vertical with equation <span class="m"><i>x</i> = 4</span>. It cannot be written as <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>.` }
  ],
  origin: `Pierre de Fermat and René Descartes independently developed coordinate geometry in the 1630s, and Fermat showed that every first-degree equation in two unknowns graphs as a straight line. Why the letter <span class="m"><i>m</i></span> is used for slope is not known for certain.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-poly-add"] = {
  title: "Polynomials: Adding & Subtracting",
  short: "Combine like terms, degree by degree",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Polynomials · vocabulary and addition",
  hero: `<span class="m">(3<span class="c4"><i>x</i><sup>2</sup></span> − 2<span class="c2"><i>x</i></span> + <span class="c1">5</span>) + (<span class="c4"><i>x</i><sup>2</sup></span> + 4<span class="c2"><i>x</i></span> − <span class="c1">7</span>) = 4<span class="c4"><i>x</i><sup>2</sup></span> + 2<span class="c2"><i>x</i></span> − <span class="c1">2</span></span>`,
  lede: `A polynomial is a sum of terms like <span class="m">3<i>x</i><sup>2</sup></span>. To add or subtract polynomials, combine the terms that have the same variable part.`,
  plain: `<p>A <b>polynomial</b> is an expression built from terms such as <span class="m">4<i>x</i><sup>3</sup></span>, <span class="m">−2<i>x</i></span> and <span class="m">7</span>, each a number times a variable raised to a whole-number power. Names depend on the number of terms: a <b>monomial</b> has one, a <b>binomial</b> two, a <b>trinomial</b> three.</p>
<p><b>Like terms</b> have exactly the same variable part: <span class="m">3<i>x</i><sup>2</sup></span> and <span class="m">−5<i>x</i><sup>2</sup></span> are like terms, but <span class="m">3<i>x</i><sup>2</sup></span> and <span class="m">3<i>x</i></span> are not. You add like terms by adding their coefficients, the same way 3 apples plus 5 apples is 8 apples. Unlike terms stay separate.</p>
<p>Subtracting a polynomial means subtracting every one of its terms. The safe way is to change the minus sign in front of the parentheses into adding the opposite: flip the sign of each term inside, then add as usual.</p>`,
  formal: `<p>A <b>polynomial in <span class="m"><i>x</i></span></b> is an expression <span class="m"><i>a</i><sub><i>n</i></sub><i>x</i><sup><i>n</i></sup> + <i>a</i><sub><i>n</i>−1</sub><i>x</i><sup><i>n</i>−1</sup> + ⋯ + <i>a</i><sub>1</sub><i>x</i> + <i>a</i><sub>0</sub></span> with real coefficients and whole-number exponents. The <b>degree of a term</b> is the sum of the exponents of its variables; the <b>degree of the polynomial</b> is the highest term degree. Written in <b>standard form</b> (descending degree), the first coefficient is the <b>leading coefficient</b>. A nonzero constant has degree 0.</p>
<div class="display"><i>P</i> + <i>Q</i>: add the coefficients of like terms<br><i>P</i> − <i>Q</i> = <i>P</i> + (−<i>Q</i>): change the sign of every term of <i>Q</i>, then add</div>
<p>Combining like terms is the distributive property in reverse, <span class="m"><i>ax</i><sup><i>k</i></sup> + <i>bx</i><sup><i>k</i></sup> = (<i>a</i> + <i>b</i>)<i>x</i><sup><i>k</i></sup></span>. Polynomials are closed under addition and subtraction: the result is always a polynomial, of degree at most the larger of the two degrees.</p>`,
  legend: [
    { c: "c4", sym: `<i>x</i><sup>2</sup>`, name: "Squared terms", desc: "Degree-2 terms. They combine only with other x² terms." },
    { c: "c2", sym: `<i>x</i>`, name: "Linear terms", desc: "Degree-1 terms, combined only with other x terms." },
    { c: "c1", sym: `1`, name: "Constants", desc: "Degree-0 terms, plain numbers, combined with each other." },
    { c: "c3", sym: `−`, name: "Negative terms", desc: "Terms with negative coefficients. A positive and a negative tile of the same kind cancel as a zero pair." }
  ],
  steps: { title: "How to add or subtract polynomials", items: [
    `For subtraction, distribute the minus sign: change the sign of <b>every</b> term in the polynomial being subtracted.`,
    `Remove the parentheses.`,
    `Group like terms: <span class="c4"><i>x</i><sup>2</sup></span> with <span class="c4"><i>x</i><sup>2</sup></span>, <span class="c2"><i>x</i></span> with <span class="c2"><i>x</i></span>, <span class="c1">constants</span> with constants.`,
    `Add the coefficients within each group. Exponents do not change.`,
    `Write the answer in standard form, highest degree first, and drop any term whose coefficient is 0.`
  ] },
  example: {
    prompt: `A bakery's weekly revenue from selling <span class="m"><i>x</i></span> dozen specialty loaves is <span class="m"><i>R</i>(<i>x</i>) = −0.5<i>x</i><sup>2</sup> + 40<i>x</i></span> dollars, and its cost is <span class="m"><i>C</i>(<i>x</i>) = 0.2<i>x</i><sup>2</sup> + 6<i>x</i> + 150</span> dollars. Find the profit polynomial and the profit on 20 dozen.`,
    lines: [
      { math: `<span class="m"><i>P</i>(<i>x</i>) = (−0.5<i>x</i><sup>2</sup> + 40<i>x</i>) − (0.2<i>x</i><sup>2</sup> + 6<i>x</i> + 150)</span>`, note: "Profit is revenue minus cost." },
      { math: `<span class="m">= −0.5<i>x</i><sup>2</sup> + 40<i>x</i> − 0.2<i>x</i><sup>2</sup> − 6<i>x</i> − 150</span>`, note: "Change the sign of every cost term." },
      { math: `<span class="m">= (−0.5 − 0.2)<span class="c4"><i>x</i><sup>2</sup></span> + (40 − 6)<span class="c2"><i>x</i></span> − <span class="c1">150</span></span>`, note: "Group like terms." },
      { math: `<span class="m"><i>P</i>(<i>x</i>) = −0.7<i>x</i><sup>2</sup> + 34<i>x</i> − 150</span>`, note: "Combine coefficients." },
      { math: `<span class="m"><i>P</i>(20) = −0.7(400) + 34(20) − 150 = −280 + 680 − 150 = 250</span>`, note: "Evaluate at x = 20." },
      { math: `<span class="m"><i>R</i>(20) − <i>C</i>(20) = 600 − 350 = 250 ✓</span>`, note: "Check by computing revenue and cost separately." }
    ],
    answer: `The profit is <span class="m"><i>P</i>(<i>x</i>) = −0.7<i>x</i><sup>2</sup> + 34<i>x</i> − 150</span>, which is <span class="m">$250</span> for 20 dozen.`
  },
  why: `<p>Polynomials are the simplest formulas that can curve, and they are used everywhere to model cost, revenue, area, volume and motion. Combining them lets you build a profit formula from revenue and cost, or a total area from pieces, before you ever plug in a number.</p>
<p>Adding and subtracting polynomials is the first operation on them, and the vocabulary of terms, coefficients and degree is used in every later topic: multiplying, factoring, dividing, graphing and solving polynomial equations.</p>`,
  careers: [
    { role: "Financial analyst", use: "Subtracts a cost polynomial from a revenue polynomial to get a profit function before finding its maximum." },
    { role: "Actuary", use: "Combines polynomial approximations of separate risk components into a single expression for total expected cost." },
    { role: "Civil engineer", use: "Adds polynomial load or deflection expressions from separate forces acting on a beam." },
    { role: "Computer graphics programmer", use: "Adds polynomial curve segments and their coordinate components when blending shapes and animation paths." },
    { role: "Architect", use: "Writes total floor area as a sum of polynomial areas of rooms whose dimensions depend on one variable." }
  ],
  life: [
    "Writing a total cost that includes a fixed fee plus several variable charges",
    "Finding the area of an L-shaped room as the sum of two rectangles",
    "Working out profit from a side business as income minus expenses",
    "Combining the perimeters of several garden beds with a shared dimension",
    "Keeping a running total of expressions in a spreadsheet"
  ],
  fields: [
    { name: "Economics", use: "Profit, cost and revenue functions are polynomials combined by addition and subtraction." },
    { name: "Physics", use: "Displacements and energies from separate sources are added as polynomial expressions in time." },
    { name: "Computer science", use: "Polynomial arithmetic underlies error-correcting codes and checksums such as CRCs." }
  ],
  prereqWhy: {
    "a1-exponents": "Like terms are identified by matching variables and exponents, and the degree of a term is read from its exponents."
  },
  unlocksWhy: {
    "a1-poly-mult": "Multiplying polynomials produces many terms, and the last step is always combining like terms."
  },
  beyond: [
    { field: "Algebra II", why: "Polynomial functions, their end behaviour and their roots are studied using degree and leading coefficient." },
    { field: "Calculus I", why: "Derivatives and integrals of polynomials are taken term by term, and results are combined like this." },
    { field: "Linear Algebra", why: "Polynomials of degree at most n form a vector space, where adding polynomials is vector addition of their coefficient lists." }
  ],
  mistakes: [
    { wrong: `Changing only the first sign when subtracting: <span class="m">(5<i>y</i><sup>3</sup> − 2<i>y</i> + 8) − (3<i>y</i><sup>3</sup> − 2<i>y</i> − 1) = 2<i>y</i><sup>3</sup> − 4<i>y</i> + 7</span>.`, fix: `Change every sign: <span class="m">5<i>y</i><sup>3</sup> − 2<i>y</i> + 8 − 3<i>y</i><sup>3</sup> + 2<i>y</i> + 1 = 2<i>y</i><sup>3</sup> + 9</span>.` },
    { wrong: `Adding exponents when combining: <span class="m">3<i>x</i><sup>2</sup> + 4<i>x</i><sup>2</sup> = 7<i>x</i><sup>4</sup></span>.`, fix: `Only the coefficients add: <span class="m">3<i>x</i><sup>2</sup> + 4<i>x</i><sup>2</sup> = 7<i>x</i><sup>2</sup></span>. Exponents add when you multiply powers.` },
    { wrong: `Combining unlike terms: <span class="m">4<i>x</i><sup>2</sup> + 3<i>x</i> = 7<i>x</i><sup>3</sup></span>.`, fix: `<span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>x</i></span> terms are not alike, so <span class="m">4<i>x</i><sup>2</sup> + 3<i>x</i></span> is already simplified.` }
  ],
  practice: [
    { q: `Write <span class="m">5<i>x</i><sup>3</sup> − <i>x</i><sup>7</sup> + 2</span> in standard form and give its degree and leading coefficient.`, a: `<span class="m">−<i>x</i><sup>7</sup> + 5<i>x</i><sup>3</sup> + 2</span>. Degree 7, leading coefficient −1. It is a trinomial.` },
    { q: `Add <span class="m">(4<i>x</i><sup>2</sup> − 3<i>x</i> + 1) + (−2<i>x</i><sup>2</sup> + 5<i>x</i> − 6)</span>.`, a: `<span class="m">(4 − 2)<i>x</i><sup>2</sup> + (−3 + 5)<i>x</i> + (1 − 6) = 2<i>x</i><sup>2</sup> + 2<i>x</i> − 5</span>.` },
    { q: `Subtract <span class="m">(5<i>y</i><sup>3</sup> − 2<i>y</i> + 8) − (3<i>y</i><sup>3</sup> + <i>y</i><sup>2</sup> − 2<i>y</i> − 1)</span>.`, a: `<span class="m">5<i>y</i><sup>3</sup> − 2<i>y</i> + 8 − 3<i>y</i><sup>3</sup> − <i>y</i><sup>2</sup> + 2<i>y</i> + 1 = 2<i>y</i><sup>3</sup> − <i>y</i><sup>2</sup> + 9</span>.` },
    { q: `Subtract <span class="m">3<i>a</i><sup>2</sup> − 4<i>ab</i> + <i>b</i><sup>2</sup></span> from <span class="m">7<i>a</i><sup>2</sup> + <i>ab</i> − 2<i>b</i><sup>2</sup></span>.`, a: `"Subtract A from B" means B − A: <span class="m">(7<i>a</i><sup>2</sup> + <i>ab</i> − 2<i>b</i><sup>2</sup>) − (3<i>a</i><sup>2</sup> − 4<i>ab</i> + <i>b</i><sup>2</sup>) = 4<i>a</i><sup>2</sup> + 5<i>ab</i> − 3<i>b</i><sup>2</sup></span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-radicals"] = {
  title: "Simplifying Square Roots & Radicals",
  short: "Pull out the largest perfect-square factor",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Radicals · simplified radical form",
  hero: `<span class="m">√<span style="text-decoration:overline">72</span> = √<span style="text-decoration:overline"><span class="c1">36</span> · <span class="c3">2</span></span> = <span class="c2">6√2</span></span>`,
  lede: `A square root is simplified when no perfect-square factor is left under the radical sign. Split off the largest perfect square, take its root, and leave the rest inside.`,
  plain: `<p>The <b>principal square root</b> <span class="m">√<i>a</i></span> is the nonnegative number whose square is <span class="m"><i>a</i></span>. So <span class="m">√49 = 7</span>, even though <span class="m">(−7)<sup>2</sup></span> is also 49. Most square roots, like <span class="m">√72</span>, are irrational, so you cannot write them exactly as decimals. You can still write them in a cleaner exact form.</p>
<p>The trick is that a square root of a product is the product of the square roots. Since <span class="m">72 = 36 × 2</span> and 36 is a perfect square, <span class="m">√72 = √36 × √2 = 6√2</span>. The number under the sign, called the <b>radicand</b>, is now as small as it can be.</p>
<p>Use the <b>largest</b> perfect-square factor, or you will have to simplify again. Variables work the same way: <span class="m"><i>x</i><sup>4</sup> = (<i>x</i><sup>2</sup>)<sup>2</sup></span> is a perfect square, so <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>4</sup></span> = <i>x</i><sup>2</sup></span>. The one catch is that <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span></span> is <span class="m">|<i>x</i>|</span>, not <span class="m"><i>x</i></span>, because a principal root cannot be negative.</p>`,
  formal: `<p>For <span class="m"><i>a</i> ≥ 0</span>, the <b>principal square root</b> <span class="m">√<i>a</i></span> is the unique <span class="m"><i>r</i> ≥ 0</span> with <span class="m"><i>r</i><sup>2</sup> = <i>a</i></span>; in the real numbers, <span class="m">√<i>a</i></span> is undefined for <span class="m"><i>a</i> &lt; 0</span>. For every real <span class="m"><i>x</i></span>, <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span> = |<i>x</i>|</span>. The simplifying rules are:</p>
<div class="display"><b>Product property:</b> √<span style="text-decoration:overline"><i>ab</i></span> = √<i>a</i> · √<i>b</i> &nbsp;<span class="dim">(<i>a</i>, <i>b</i> ≥ 0)</span><br><b>Quotient property:</b> √<span style="text-decoration:overline"><i>a</i>/<i>b</i></span> = √<i>a</i> / √<i>b</i> &nbsp;<span class="dim">(<i>a</i> ≥ 0, <i>b</i> &gt; 0)</span></div>
<p>A square root is in <b>simplified radical form</b> when the radicand has no perfect-square factor other than 1, contains no fraction, and no radical appears in a denominator. The same ideas apply to cube roots, where <span class="m">∛<span style="text-decoration:overline"><i>a</i><sup>3</sup></span> = <i>a</i></span> for every real <span class="m"><i>a</i></span> and <span class="m">∛<span style="text-decoration:overline">54</span> = ∛<span style="text-decoration:overline">27 · 2</span> = 3∛2</span>. Note that <span class="m">√<span style="text-decoration:overline"><i>a</i> + <i>b</i></span> ≠ √<i>a</i> + √<i>b</i></span> in general.</p>`,
  legend: [
    { c: "c1", sym: `36`, name: "Perfect-square factor", desc: "The largest factor of the radicand that is a perfect square. Its root comes out of the radical." },
    { c: "c3", sym: `2`, name: "Leftover radicand", desc: "What remains under the radical. It has no perfect-square factor other than 1." },
    { c: "c2", sym: `6√2`, name: "Simplified result", desc: "The root of the perfect square times the root of the leftover radicand, equal in value to the original." }
  ],
  steps: { title: "How to simplify a square root", items: [
    `Factor the radicand, looking for the <span class="c1">largest perfect-square factor</span>: 4, 9, 16, 25, 36, 49, 64, 81, 100, and even powers of variables.`,
    `If it is hard to spot, write the prime factorization and pair up equal factors. Each pair comes out as one factor.`,
    `Use the product property to split the root: <span class="m">√<span style="text-decoration:overline"><i>a</i><sup>2</sup><i>b</i></span> = <i>a</i>√<i>b</i></span> for <span class="m"><i>a</i> ≥ 0</span>.`,
    `For a fraction, use the quotient property and simplify top and bottom separately.`,
    `If a variable could be negative and an even power becomes an odd power outside, write it with absolute value bars.`,
    `Check that the <span class="c3">leftover radicand</span> has no perfect-square factor left, and check by squaring the <span class="c2">result</span>.`
  ] },
  example: {
    prompt: `A rectangular garden is 6 m wide and 12 m long. A straight path runs corner to corner. Find its exact length in simplified radical form and as a decimal.`,
    lines: [
      { math: `<span class="m"><i>d</i><sup>2</sup> = 6<sup>2</sup> + 12<sup>2</sup> = 36 + 144 = 180</span>`, note: "The diagonal is the hypotenuse of a right triangle with legs 6 and 12." },
      { math: `<span class="m"><i>d</i> = √180</span>`, note: "Length is positive, so take the principal root." },
      { math: `<span class="m">√<span style="text-decoration:overline"><span class="c1">36</span> · <span class="c3">5</span></span> = √36 · √5</span>`, note: "36 is the largest perfect square that divides 180." },
      { math: `<span class="m"><i>d</i> = <span class="c2">6√5</span></span>`, note: "√36 = 6, and 5 has no perfect-square factor." },
      { math: `<span class="m">6√5 ≈ 6 × 2.2361 ≈ 13.42</span>`, note: "Decimal approximation." },
      { math: `<span class="m">(6√5)<sup>2</sup> = 36 × 5 = 180 ✓</span>`, note: "Check by squaring." }
    ],
    answer: `The path is exactly <span class="m">6√5</span> m, about <span class="m">13.42</span> m long.`
  },
  why: `<p>Square roots come up whenever you undo a square: lengths from the Pythagorean theorem, the side of a square from its area, a standard deviation from a variance, a speed from kinetic energy. Simplified radical form keeps the answer exact, which matters when it is used again in a later step, and it makes like radicals easy to recognise.</p>
<p>The product and quotient properties are the basis for adding, multiplying and rationalizing radicals, for solving quadratics with the square root property and the quadratic formula, and for rewriting roots as rational exponents.</p>`,
  careers: [
    { role: "Carpenter", use: "Computes rafter and diagonal brace lengths as square roots, such as a 12 by 16 ft rectangle having a √400 = 20 ft diagonal." },
    { role: "Electrical engineer", use: "Uses the fact that an AC sine wave's RMS voltage is its peak voltage divided by √2." },
    { role: "Statistician", use: "Takes square roots of variances to get standard deviations, and divides by √n to get a standard error." },
    { role: "Architect", use: "Keeps diagonal and hypotenuse lengths in exact radical form, such as 45-45-90 triangles with hypotenuse s√2." },
    { role: "Physicist", use: "Solves for speed from kinetic energy, v = √(2E/m), and simplifies the radical before substituting values." }
  ],
  life: [
    "Finding the diagonal of a TV screen or a room",
    "Checking whether a ladder is long enough to reach a window",
    "Finding the side length of a square patio from its area",
    "Working out a straight-line distance on a city grid",
    "Understanding why A-series paper sheets have a length-to-width ratio of √2"
  ],
  fields: [
    { name: "Geometry", use: "Distances, diagonals and special right triangles give answers in radical form such as s√2 and s√3/2." },
    { name: "Physics", use: "Pendulum periods, orbital speeds and RMS values involve square roots of expressions." },
    { name: "Statistics", use: "Standard deviation and standard error are square roots." }
  ],
  prereqWhy: {
    "a1-exponents": "Recognising perfect squares among variable factors relies on exponent rules such as x⁶ = (x³)².",
    "roots": "You need to know perfect squares and what a square root means before simplifying one."
  },
  unlocksWhy: {
    "a1-rational-exp": "Radicals are rewritten as fractional powers, √x = x^(1/2), and simplified with exponent rules.",
    "a1-radical-ops": "Adding, multiplying and rationalizing radicals all start by writing each radical in simplified form.",
    "a1-quad-sqrt": "Solving x² = k gives ±√k, and the answer is written in simplified radical form."
  },
  beyond: [
    { field: "Algebra II", why: "Complex numbers start from √−1 = i, and radical equations and functions extend these rules." },
    { field: "Precalculus", why: "Exact trigonometric values such as sin 60° = √3/2 are written in simplified radical form." },
    { field: "Statistics", why: "Standard deviations and standard errors are square roots." },
    { field: "Physics", why: "Many formulas, such as the period of a pendulum T = 2π√(L/g), contain square roots." }
  ],
  mistakes: [
    { wrong: `Splitting a sum: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = √9 + √16 = 7</span>.`, fix: `The product property does not apply to sums. Add first: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = √25 = 5</span>.` },
    { wrong: `Using a factor that is not the largest: <span class="m">√72 = √4 · √18 = 2√18</span>, and stopping.`, fix: `18 still has the factor 9. Use 36 directly: <span class="m">√72 = 6√2</span>. (Continuing also works: <span class="m">2√18 = 2 · 3√2 = 6√2</span>.)` },
    { wrong: `Writing <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span> = <i>x</i></span> for every real <span class="m"><i>x</i></span>.`, fix: `If <span class="m"><i>x</i> = −3</span>, <span class="m">√<span style="text-decoration:overline">(−3)<sup>2</sup></span> = √9 = 3</span>, not −3. In general <span class="m">√<span style="text-decoration:overline"><i>x</i><sup>2</sup></span> = |<i>x</i>|</span>; it equals <span class="m"><i>x</i></span> only when <span class="m"><i>x</i> ≥ 0</span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m">√48</span>.`, a: `<span class="m">48 = 16 × 3</span>, so <span class="m">√48 = 4√3</span>.` },
    { q: `Simplify <span class="m">√<span style="text-decoration:overline"><span class="fr"><span>18</span><span>49</span></span></span></span>.`, a: `<span class="m"><span class="fr"><span>√18</span><span>√49</span></span> = <span class="fr"><span>3√2</span><span>7</span></span></span>, since <span class="m">18 = 9 × 2</span>.` },
    { q: `Simplify <span class="m">√<span style="text-decoration:overline">50<i>x</i><sup>3</sup><i>y</i><sup>4</sup></span></span>, assuming <span class="m"><i>x</i> ≥ 0</span>.`, a: `<span class="m">50<i>x</i><sup>3</sup><i>y</i><sup>4</sup> = (25<i>x</i><sup>2</sup><i>y</i><sup>4</sup>)(2<i>x</i>)</span>, so the root is <span class="m">5<i>xy</i><sup>2</sup>√<span style="text-decoration:overline">2<i>x</i></span></span>. No bars are needed on <span class="m"><i>y</i><sup>2</sup></span> because it is never negative.` },
    { q: `Simplify <span class="m">√<span style="text-decoration:overline">12<i>a</i><sup>2</sup></span></span> where <span class="m"><i>a</i></span> can be any real number.`, a: `<span class="m">√4 · √<span style="text-decoration:overline"><i>a</i><sup>2</sup></span> · √3 = 2|<i>a</i>|√3</span>. The absolute value is needed: for <span class="m"><i>a</i> = −1</span> the root is <span class="m">√12 = 2√3</span>, which is positive.` }
  ],
  origin: `The radical sign √ first appeared in print in Christoph Rudolff's German algebra book <i>Die Coss</i> (1525). René Descartes added the bar over the radicand, the vinculum, in <i>La Géométrie</i> (1637), which is why the symbol now extends over the whole expression.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-abs-ineq"] = {
  title: "Absolute Value Inequalities",
  short: "Less than means between; greater than means outside",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Inequalities · distance from a centre",
  hero: `<span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| &lt; <span class="c3"><i>k</i></span> &nbsp;⇔&nbsp; <span class="c1"><i>h</i> − <i>k</i> &lt; <i>x</i> &lt; <i>h</i> + <i>k</i></span></span>`,
  lede: `<span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| &lt; <span class="c3"><i>k</i></span></span> says <span class="m"><i>x</i></span> is within <span class="m c3"><i>k</i></span> of the centre, an interval between two points. <span class="m">|<i>x</i> − <span class="c4"><i>h</i></span>| &gt; <span class="c3"><i>k</i></span></span> says it is farther than <span class="m c3"><i>k</i></span> away, the two rays outside.`,
  plain: `<p>Think of absolute value as distance. <span class="m">|<i>x</i> − 10| &lt; 3</span> asks for the numbers less than 3 units from 10. Those are the numbers between 7 and 13. So a "less than" absolute value inequality becomes a single double inequality, <span class="m">7 &lt; <i>x</i> &lt; 13</span>. This is an AND situation.</p>
<p><span class="m">|<i>x</i> − 10| &gt; 3</span> asks for the numbers more than 3 units from 10. Those lie to the left of 7 or to the right of 13, two separate pieces. A "greater than" absolute value inequality becomes an OR: <span class="m"><i>x</i> &lt; 7</span> or <span class="m"><i>x</i> &gt; 13</span>.</p>
<p>A short way to remember it: "less thAND" and "greatOR". As with equations, first get the absolute value alone. If the number on the other side is negative, think about distance: a distance is never less than a negative number, and always greater than one.</p>`,
  formal: `<p>For an expression <span class="m"><i>u</i></span> and a real number <span class="m"><i>k</i> &gt; 0</span>:</p>
<div class="display">|<i>u</i>| &lt; <i>k</i> &nbsp;⇔&nbsp; −<i>k</i> &lt; <i>u</i> &lt; <i>k</i> &nbsp;<span class="dim">(and similarly with ≤)</span><br>|<i>u</i>| &gt; <i>k</i> &nbsp;⇔&nbsp; <i>u</i> &lt; −<i>k</i> &nbsp;or&nbsp; <i>u</i> &gt; <i>k</i> &nbsp;<span class="dim">(and similarly with ≥)</span></div>
<p>In particular <span class="m">|<i>x</i> − <i>h</i>| &lt; <i>k</i></span> has solution set <span class="m">(<i>h</i> − <i>k</i>, <i>h</i> + <i>k</i>)</span>, an interval of <b>radius</b> <span class="m"><i>k</i></span> about the <b>centre</b> <span class="m"><i>h</i></span>, and <span class="m">|<i>x</i> − <i>h</i>| &gt; <i>k</i></span> has solution set <span class="m">(−∞, <i>h</i> − <i>k</i>) ∪ (<i>h</i> + <i>k</i>, ∞)</span>. For <span class="m"><i>k</i> &lt; 0</span>, <span class="m">|<i>u</i>| &lt; <i>k</i></span> has solution set <span class="m">∅</span> and <span class="m">|<i>u</i>| &gt; <i>k</i></span> holds for every <span class="m"><i>x</i></span> in the domain of <span class="m"><i>u</i></span>. For <span class="m"><i>k</i> = 0</span>, <span class="m">|<i>u</i>| &lt; 0</span> has no solution and <span class="m">|<i>u</i>| &gt; 0</span> holds wherever <span class="m"><i>u</i> ≠ 0</span>.</p>`,
  legend: [
    { c: "c4", sym: `<i>h</i>`, name: "Centre", desc: "The target value that distances are measured from." },
    { c: "c3", sym: `<i>k</i>`, name: "Radius", desc: "The allowed or forbidden distance from the centre, also called the tolerance." },
    { c: "c1", sym: `(<i>h</i> − <i>k</i>, <i>h</i> + <i>k</i>)`, name: "Solution set", desc: "The interval between h − k and h + k for 'less than', or the two rays outside it for 'greater than'." }
  ],
  steps: { title: "How to solve an absolute value inequality", items: [
    `Isolate the absolute value on one side. If you multiply or divide by a negative, reverse the inequality.`,
    `Look at the other side. If it is negative or zero, decide the answer by distance reasoning: ∅, all reals, or all reals except one point.`,
    `For <span class="m">|<i>u</i>| &lt; <i>k</i></span> or <span class="m">≤</span>, write the AND form <span class="m">−<i>k</i> &lt; <i>u</i> &lt; <i>k</i></span> and solve all three parts together.`,
    `For <span class="m">|<i>u</i>| &gt; <i>k</i></span> or <span class="m">≥</span>, write the OR form <span class="m"><i>u</i> &lt; −<i>k</i></span> or <span class="m"><i>u</i> &gt; <i>k</i></span> and solve each part.`,
    `Graph the result and write it in interval notation, using brackets for ≤ and ≥.`,
    `Test one number inside and one outside the <span class="c1">solution set</span> in the original inequality.`
  ] },
  example: {
    prompt: `A machine fills bottles labelled 500 mL. A bottle passes inspection if its volume is within 1.5% of the label. Write and solve an absolute value inequality for the acceptable volumes.`,
    lines: [
      { math: `<span class="m">0.015 × 500 = 7.5</span>`, note: "The tolerance is 1.5% of 500 mL, which is 7.5 mL." },
      { math: `<span class="m">|<i>v</i> − <span class="c4">500</span>| ≤ <span class="c3">7.5</span></span>`, note: "The volume v must be at most 7.5 mL from 500 mL." },
      { math: `<span class="m">−7.5 ≤ <i>v</i> − 500 ≤ 7.5</span>`, note: "A 'less than or equal' absolute value becomes a double inequality." },
      { math: `<span class="m c1">492.5 ≤ <i>v</i> ≤ 507.5</span>`, note: "Add 500 to all three parts." },
      { math: `<span class="m">|495 − 500| = 5 ≤ 7.5 ✓, &nbsp; |510 − 500| = 10 &gt; 7.5 ✗</span>`, note: "A 495 mL bottle passes; a 510 mL bottle fails." }
    ],
    answer: `Acceptable volumes are <span class="m">[492.5, 507.5]</span> mL.`
  },
  why: `<p>Whenever something must be close to a target, the condition is an absolute value inequality: a part within tolerance, a measurement within its margin of error, a temperature within a few degrees of a setpoint. The "greater than" version describes what is out of range, such as readings that should trigger an alarm.</p>
<p>These inequalities are also how mathematicians say "close to" precisely. The definitions of limits and continuity in calculus are written as <span class="m">|<i>x</i> − <i>a</i>| &lt; <i>δ</i></span> and <span class="m">|<i>f</i>(<i>x</i>) − <i>L</i>| &lt; <i>ε</i></span>.</p>`,
  careers: [
    { role: "Quality control inspector", use: "Accepts a part only if |measured − nominal| ≤ tolerance, and rejects it otherwise." },
    { role: "Pollster", use: "Reports that the true proportion p satisfies |p − p̂| ≤ margin of error, an interval around the sample estimate." },
    { role: "Process engineer", use: "Sets alarm limits so a sensor triggers when |reading − setpoint| exceeds a threshold." },
    { role: "Clinical lab scientist", use: "Checks that a control sample's result lies within an allowed distance of its known value before running patient samples." },
    { role: "Machinist", use: "Converts a drawing's ±0.002 in tolerance into the interval of acceptable dimensions." }
  ],
  life: [
    "Knowing a room thermostat keeps the temperature within 2 degrees of its setting",
    "Reading a poll result with a margin of error as a range",
    "Checking whether a bag of produce is within the stated weight tolerance",
    "Setting a budget that allows spending within $50 of a target",
    "Deciding whether a guess in a game is close enough to count"
  ],
  fields: [
    { name: "Engineering", use: "Tolerance specifications are absolute value inequalities around nominal dimensions." },
    { name: "Statistics", use: "Confidence intervals have the form |parameter − estimate| ≤ margin of error." },
    { name: "Computer science", use: "Floating-point comparisons test |a − b| < ε instead of exact equality." }
  ],
  prereqWhy: {
    "a1-abs-eq": "The solutions of |u| = k are the boundary points of the inequality, and the idea of absolute value as distance carries over.",
    "a1-compound": "The inequality is rewritten as an AND or an OR compound inequality and the answer is written in interval notation."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "The epsilon-delta definition of a limit uses |x − a| < δ and |f(x) − L| < ε." },
    { field: "Statistics", why: "Confidence intervals and tolerance intervals are stated as absolute value inequalities." },
    { field: "Numerical Analysis", why: "Error bounds such as |approximation − true value| < tolerance decide when an algorithm has converged." }
  ],
  mistakes: [
    { wrong: `Writing a "greater than" as a double inequality: <span class="m">|<i>x</i> − 3| ≥ 2</span> as <span class="m">−2 ≥ <i>x</i> − 3 ≥ 2</span>.`, fix: `"Greater than" means outside, so use OR: <span class="m"><i>x</i> − 3 ≤ −2</span> or <span class="m"><i>x</i> − 3 ≥ 2</span>, giving <span class="m">(−∞, 1] ∪ [5, ∞)</span>.` },
    { wrong: `Forgetting to isolate: from <span class="m">|2<i>x</i> + 1| − 3 &lt; 6</span> writing <span class="m">−6 &lt; 2<i>x</i> + 1 − 3 &lt; 6</span>.`, fix: `Add 3 first: <span class="m">|2<i>x</i> + 1| &lt; 9</span>, then <span class="m">−9 &lt; 2<i>x</i> + 1 &lt; 9</span>.` },
    { wrong: `Answering <span class="m">|<i>x</i> + 2| ≥ −1</span> with ∅ because the right side is negative.`, fix: `An absolute value is always at least 0, which is greater than −1, so every real number works: the solution set is <span class="m">ℝ</span>. It is <span class="m">|<i>x</i> + 2| &lt; −1</span> that has no solution.` }
  ],
  practice: [
    { q: `Solve <span class="m">|<i>x</i>| &lt; 4</span>.`, a: `<span class="m">−4 &lt; <i>x</i> &lt; 4</span>, so the solution set is <span class="m">(−4, 4)</span>.` },
    { q: `Solve <span class="m">|<i>x</i> − 3| ≥ 2</span>.`, a: `<span class="m"><i>x</i> − 3 ≤ −2</span> or <span class="m"><i>x</i> − 3 ≥ 2</span>, so <span class="m"><i>x</i> ≤ 1</span> or <span class="m"><i>x</i> ≥ 5</span>: <span class="m">(−∞, 1] ∪ [5, ∞)</span>.` },
    { q: `Solve <span class="m">|2<i>x</i> + 1| − 3 &lt; 6</span>.`, a: `<span class="m">|2<i>x</i> + 1| &lt; 9</span>, so <span class="m">−9 &lt; 2<i>x</i> + 1 &lt; 9</span>, <span class="m">−10 &lt; 2<i>x</i> &lt; 8</span>, <span class="m">−5 &lt; <i>x</i> &lt; 4</span>. Solution set <span class="m">(−5, 4)</span>.` },
    { q: `Solve (a) <span class="m">|<i>x</i> + 2| &lt; −1</span> and (b) <span class="m">|<i>x</i> + 2| ≥ −1</span>.`, a: `(a) A distance cannot be less than a negative number: <span class="m">∅</span>. (b) A distance is always at least 0, so it is always at least −1: <span class="m">ℝ</span>, or <span class="m">(−∞, ∞)</span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-piecewise"] = {
  title: "Piecewise & Absolute Value Functions",
  short: "Different rules on different parts of the domain",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · defined in pieces",
  hero: `<span class="m">|<i>x</i>| = <span class="c2"><i>x</i></span> &nbsp;if <i>x</i> ≥ 0, &nbsp;&nbsp; <span class="c3">−<i>x</i></span> &nbsp;if <i>x</i> &lt; 0</span>`,
  lede: `A piecewise function uses a different formula on each part of its domain. The absolute value function is the simplest example: it leaves nonnegative inputs alone and flips negative ones.`,
  plain: `<p>Many real rules change partway through. Electricity might cost 12 cents per kilowatt-hour for the first 500 and 15 cents after that. Shipping might be a flat price up to 1 kg and more above it. A single formula cannot describe these, so we use a <b>piecewise function</b>: a list of formulas, each with the inputs it applies to.</p>
<p>To evaluate one, first find which piece the input belongs to, then use only that piece's formula. On a graph, each piece is drawn only over its own interval. A closed dot marks an endpoint that is included; an open dot marks one that is not. Each input must belong to exactly one piece, or the rule would not be a function.</p>
<p>The <b>absolute value function</b> <span class="m"><i>f</i>(<i>x</i>) = |<i>x</i>|</span> is piecewise: <span class="m"><i>x</i></span> for <span class="m"><i>x</i> ≥ 0</span> and <span class="m">−<i>x</i></span> for <span class="m"><i>x</i> &lt; 0</span>. Its graph is a V with its corner, the <b>vertex</b>, at the origin. Shifting it gives <span class="m"><i>y</i> = |<i>x</i> − <i>h</i>| + <i>k</i></span>, a V with its vertex at <span class="m">(<i>h</i>, <i>k</i>)</span>.</p>`,
  formal: `<p>A <b>piecewise-defined function</b> is given by formulas <span class="m"><i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, …</span> on pairwise disjoint sets <span class="m"><i>D</i><sub>1</sub>, <i>D</i><sub>2</sub>, …</span> whose union is the domain:</p>
<div class="display"><i>f</i>(<i>x</i>) = <span class="c2"><i>f</i><sub>1</sub>(<i>x</i>)</span> &nbsp;if <i>x</i> ∈ <i>D</i><sub>1</sub><br><span style="visibility:hidden"><i>f</i>(<i>x</i>) = </span><span class="c3"><i>f</i><sub>2</sub>(<i>x</i>)</span> &nbsp;if <i>x</i> ∈ <i>D</i><sub>2</sub><br><span style="visibility:hidden"><i>f</i>(<i>x</i>) = </span><span class="c4"><i>f</i><sub>3</sub>(<i>x</i>)</span> &nbsp;if <i>x</i> ∈ <i>D</i><sub>3</sub></div>
<p>The <b>absolute value function</b> <span class="m"><i>f</i>(<i>x</i>) = |<i>x</i>|</span> has domain <span class="m">ℝ</span>, range <span class="m">[0, ∞)</span> and vertex <span class="m">(0, 0)</span>. The function <span class="m"><i>g</i>(<i>x</i>) = <i>a</i>|<i>x</i> − <i>h</i>| + <i>k</i></span> has vertex <span class="m">(<i>h</i>, <i>k</i>)</span>, axis of symmetry <span class="m"><i>x</i> = <i>h</i></span>, opens up if <span class="m"><i>a</i> &gt; 0</span> and down if <span class="m"><i>a</i> &lt; 0</span>. A <b>step function</b> is piecewise constant, such as the ceiling function <span class="m">⌈<i>x</i>⌉</span>, the least integer greater than or equal to <span class="m"><i>x</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>f</i><sub>1</sub>`, name: "First piece", desc: "The formula used on the first part of the domain, drawn only over that interval." },
    { c: "c3", sym: `<i>f</i><sub>2</sub>`, name: "Second piece", desc: "The formula used on the next part of the domain." },
    { c: "c4", sym: `<i>f</i><sub>3</sub>`, name: "Third piece", desc: "A further formula, if the function has more than two pieces." },
    { c: "c1", sym: `<i>f</i>(<i>a</i>)`, name: "Evaluation", desc: "The output at x = a, computed with the one piece whose interval contains a." }
  ],
  steps: { title: "How to evaluate and graph a piecewise function", items: [
    `Read each piece's condition and note which endpoints are included (≤, ≥) and which are not (&lt;, &gt;).`,
    `To evaluate <span class="m"><i>f</i>(<i>a</i>)</span>, find the one condition that <span class="m"><i>a</i></span> satisfies and substitute into that piece only.`,
    `To graph, draw each piece as if it were a whole function, then keep only the part over its own interval.`,
    `Mark endpoints: closed dot if included, open dot if excluded. Check that no vertical line meets the graph twice.`,
    `For <span class="m"><i>y</i> = <i>a</i>|<i>x</i> − <i>h</i>| + <i>k</i></span>, plot the vertex <span class="m">(<i>h</i>, <i>k</i>)</span>, then draw the two sides with slopes <span class="m"><i>a</i></span> and <span class="m">−<i>a</i></span>.`,
    `Read the domain and range from the finished graph.`
  ] },
  example: {
    prompt: `A utility charges $0.12 per kWh for the first 500 kWh used in a month and $0.15 per kWh for every kWh above 500. Write the monthly cost <span class="m"><i>C</i>(<i>k</i>)</span> as a piecewise function and find the cost of using 740 kWh.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>C</i>(<i>k</i>) = 0.12<i>k</i></span> &nbsp; for 0 ≤ <i>k</i> ≤ 500</span>`, note: "Up to 500 kWh, every unit is charged at the lower rate." },
      { math: `<span class="m">0.12(500) = 60</span>`, note: "The first 500 kWh cost $60 in total." },
      { math: `<span class="m"><span class="c3"><i>C</i>(<i>k</i>) = 60 + 0.15(<i>k</i> − 500)</span> &nbsp; for <i>k</i> &gt; 500</span>`, note: "Above 500, pay $60 plus $0.15 for each kWh past 500." },
      { math: `<span class="m">740 &gt; 500</span>`, note: "740 kWh falls in the second piece." },
      { math: `<span class="m c1"><i>C</i>(740) = 60 + 0.15(240) = 60 + 36 = 96</span>`, note: "Substitute into the second piece only." },
      { math: `<span class="m">0.12(500) = 60 = 60 + 0.15(0)</span>`, note: "Check: both pieces agree at k = 500, so the graph has no jump." }
    ],
    answer: `The cost is <span class="m">$96</span> for 740 kWh.`
  },
  why: `<p>Real pricing and policy rules are often piecewise: tiered utility rates, tax brackets, shipping by weight, overtime pay after 40 hours, parking charged per started hour. Writing them as piecewise functions makes the rules exact and lets you compute any case, graph the whole rule and spot jumps.</p>
<p>The absolute value function is the standard example of a graph with a sharp corner, and step functions are the standard example of jumps. Both are important in calculus when studying continuity and derivatives, and piecewise definitions appear throughout programming as if/else rules.</p>`,
  careers: [
    { role: "Tax preparer", use: "Applies progressive tax brackets, where each slice of taxable income is taxed at its own rate, a piecewise linear function." },
    { role: "Payroll specialist", use: "Computes weekly pay with time-and-a-half for hours above 40, which is a two-piece function of hours worked." },
    { role: "Logistics analyst", use: "Uses carrier rate tables that are step functions of package weight and distance zone." },
    { role: "Software developer", use: "Implements business rules as if/else branches, each branch one piece of a piecewise function." },
    { role: "Utility rate analyst", use: "Designs tiered electricity and water pricing with different rates for successive blocks of usage." },
    { role: "Actuary", use: "Models insurance payouts with deductibles and caps, which pay nothing below one level and a fixed maximum above another." }
  ],
  life: [
    "Working out an electricity or water bill with tiered rates",
    "Calculating pay when overtime kicks in after 40 hours",
    "Figuring out the parking fee when every started hour is charged",
    "Understanding how moving into a higher tax bracket affects only the extra income",
    "Comparing shipping prices by weight class"
  ],
  fields: [
    { name: "Economics", use: "Tax schedules, tariffs and tiered pricing are piecewise functions of income or quantity." },
    { name: "Computer science", use: "Conditional logic defines functions in cases, and activation functions such as ReLU, max(0, x), are piecewise." },
    { name: "Physics", use: "Motion with different phases, such as acceleration then constant speed, is described piecewise." },
    { name: "Engineering", use: "Signals and control inputs that switch on at a certain time are step or piecewise functions." }
  ],
  prereqWhy: {
    "a1-functions": "You need function notation and domains, because a piecewise function assigns a formula to each part of the domain.",
    "a1-abs-eq": "The absolute value function's two pieces come from the definition of |x| used to solve absolute value equations."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Precalculus", why: "Transformations of |x|, step functions and piecewise definitions of functions are studied in detail." },
    { field: "Calculus I", why: "Piecewise functions are the main examples for one-sided limits, continuity and points where a derivative does not exist." },
    { field: "Economics", why: "Progressive taxes and tiered prices are analysed as piecewise linear functions with changing marginal rates." },
    { field: "Computer Science", why: "Piecewise linear functions such as ReLU are the building blocks of neural networks." }
  ],
  mistakes: [
    { wrong: `Using every piece at once: evaluating <span class="m"><i>C</i>(740)</span> as <span class="m">0.12(740) + 0.15(740)</span>.`, fix: `Use only the piece whose condition contains the input. Since <span class="m">740 &gt; 500</span>, <span class="m"><i>C</i>(740) = 60 + 0.15(240) = 96</span>.` },
    { wrong: `Including a boundary point in two pieces, such as <span class="m"><i>x</i> ≤ 2</span> and <span class="m"><i>x</i> ≥ 2</span> with different values at 2.`, fix: `A function has one output per input. Each boundary point belongs to exactly one piece, shown by one closed dot and one open dot, unless both pieces give the same value there.` },
    { wrong: `Graphing <span class="m"><i>y</i> = |<i>x</i> + 1| − 3</span> with its vertex at <span class="m">(1, −3)</span>.`, fix: `<span class="m">|<i>x</i> + 1| = |<i>x</i> − (−1)|</span>, so <span class="m"><i>h</i> = −1</span> and the vertex is <span class="m">(−1, −3)</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> + 1</span> if <span class="m"><i>x</i> &lt; 0</span> and <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> if <span class="m"><i>x</i> ≥ 0</span>, find <span class="m"><i>f</i>(−3)</span>, <span class="m"><i>f</i>(0)</span> and <span class="m"><i>f</i>(4)</span>.`, a: `<span class="m"><i>f</i>(−3) = 2(−3) + 1 = −5</span>; <span class="m"><i>f</i>(0) = 0<sup>2</sup> = 0</span>; <span class="m"><i>f</i>(4) = 16</span>.` },
    { q: `Write <span class="m"><i>g</i>(<i>x</i>) = |<i>x</i> − 2|</span> as a piecewise function.`, a: `<span class="m"><i>g</i>(<i>x</i>) = <i>x</i> − 2</span> if <span class="m"><i>x</i> ≥ 2</span>, and <span class="m"><i>g</i>(<i>x</i>) = −(<i>x</i> − 2) = 2 − <i>x</i></span> if <span class="m"><i>x</i> &lt; 2</span>.` },
    { q: `For <span class="m"><i>h</i>(<i>x</i>) = |<i>x</i> + 1| − 3</span>, give the vertex, the intercepts and the range.`, a: `Vertex <span class="m">(−1, −3)</span>. y-intercept: <span class="m"><i>h</i>(0) = 1 − 3 = −2</span>. x-intercepts: <span class="m">|<i>x</i> + 1| = 3</span>, so <span class="m"><i>x</i> = 2</span> or <span class="m"><i>x</i> = −4</span>. Range <span class="m">[−3, ∞)</span>.` },
    { q: `A garage charges $4 for the first hour or part of an hour and $2 for each additional hour or part of an hour. What do 3.5 hours cost, and what do exactly 3 hours cost?`, a: `3.5 hours counts as 4 started hours: <span class="m">4 + 2(3) = $10</span>. Exactly 3 hours counts as 3: <span class="m">4 + 2(2) = $8</span>. This is a step function, <span class="m"><i>C</i>(<i>t</i>) = 4 + 2(⌈<i>t</i>⌉ − 1)</span> for <span class="m"><i>t</i> &gt; 0</span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-line-forms"] = {
  title: "Point-Slope & Standard Form",
  short: "Write a line as y − y₁ = m(x − x₁) or Ax + By = C",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Linear equations · forms of a line",
  hero: `<span class="m c1"><i>y</i> − <span class="c2"><i>y</i><sub>1</sub></span> = <i>m</i>(<i>x</i> − <span class="c2"><i>x</i><sub>1</sub></span>)</span> &nbsp;&nbsp; <span class="m c1"><i>Ax</i> + <i>By</i> = <i>C</i></span>`,
  lede: `Point-slope form writes a line straight from one point and the slope. Standard form writes it with integer coefficients and both variables on one side. Both describe the same line as <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>.`,
  plain: `<p>Often you do not know where a line crosses the <span class="m"><i>y</i></span>-axis. You know one point on it and its slope, or two points. <b>Point-slope form</b> lets you write the equation at once: if the line has slope <span class="m"><i>m</i></span> and passes through <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span>, its equation is <span class="m"><i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)</span>. It is just the slope formula with the denominator multiplied across.</p>
<p><b>Standard form</b> <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span> puts both variables on the left and a constant on the right, with whole-number coefficients and <span class="m"><i>A</i></span> not negative. It is handy for finding intercepts (set <span class="m"><i>x</i> = 0</span>, then <span class="m"><i>y</i> = 0</span>) and for problems like "adult tickets cost $12, child tickets $8, total $960", which give <span class="m">12<i>a</i> + 8<i>c</i> = 960</span> directly.</p>
<p>All three forms describe the same line, and you move between them with ordinary algebra. Standard form can also describe vertical lines, like <span class="m"><i>x</i> = −2</span>, which have no slope and so have no point-slope or slope-intercept form.</p>`,
  formal: `<p>For a line of slope <span class="m"><i>m</i></span> through <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span>, every other point <span class="m">(<i>x</i>, <i>y</i>)</span> on it satisfies <span class="m">(<i>y</i> − <i>y</i><sub>1</sub>)/(<i>x</i> − <i>x</i><sub>1</sub>) = <i>m</i></span>, which gives:</p>
<div class="display"><b>Point-slope form:</b> <i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)<br><b>Slope-intercept form:</b> <i>y</i> = <i>mx</i> + <i>b</i><br><b>Standard form:</b> <i>Ax</i> + <i>By</i> = <i>C</i>, &nbsp;<span class="dim"><i>A</i>, <i>B</i>, <i>C</i> integers, <i>A</i> ≥ 0, <i>A</i> and <i>B</i> not both 0</span></div>
<p>If <span class="m"><i>B</i> ≠ 0</span>, the standard-form line has slope <span class="m">−<i>A</i>/<i>B</i></span> and y-intercept <span class="m">(0, <i>C</i>/<i>B</i>)</span>; if <span class="m"><i>A</i> ≠ 0</span>, its x-intercept is <span class="m">(<i>C</i>/<i>A</i>, 0)</span>. If <span class="m"><i>B</i> = 0</span> the line is vertical, <span class="m"><i>x</i> = <i>C</i>/<i>A</i></span>. Many texts also ask that <span class="m"><i>A</i>, <i>B</i>, <i>C</i></span> have no common factor greater than 1.</p>`,
  legend: [
    { c: "c2", sym: `(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)`, name: "Point 1", desc: "A known point on the line. It fills the x₁ and y₁ slots in point-slope form." },
    { c: "c3", sym: `(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)`, name: "Point 2", desc: "A second known point, used with point 1 to compute the slope." },
    { c: "c1", sym: `<i>Ax</i> + <i>By</i> = <i>C</i>`, name: "The line", desc: "The same line shown in slope-intercept, point-slope and standard form at once." }
  ],
  steps: { title: "How to write a line in point-slope and standard form", items: [
    `If you have two points, find the slope <span class="m"><i>m</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)</span>. If the run is 0, the line is vertical: <span class="m"><i>x</i> = <i>x</i><sub>1</sub></span>.`,
    `Substitute <span class="m"><i>m</i></span> and one point into <span class="m"><i>y</i> − <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> − <i>x</i><sub>1</sub>)</span>. Watch the signs when a coordinate is negative.`,
    `For slope-intercept form, distribute <span class="m"><i>m</i></span> and solve for <span class="m"><i>y</i></span>.`,
    `For standard form, move the <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> terms to the left and the constant to the right.`,
    `Multiply through by the LCD to clear fractions and decimals, and by −1 if needed so that <span class="m"><i>A</i> ≥ 0</span>.`,
    `Check that both points satisfy the final equation.`
  ] },
  example: {
    prompt: `A one-day van rental costs $87 if you drive 120 miles and $107 if you drive 200 miles, with cost a linear function of miles. Write the cost equation in point-slope, slope-intercept and standard form.`,
    lines: [
      { math: `<span class="m"><i>m</i> = <span class="fr"><span><span class="c3">107</span> − <span class="c2">87</span></span><span><span class="c3">200</span> − <span class="c2">120</span></span></span> = <span class="fr"><span>20</span><span>80</span></span> = 0.25</span>`, note: "The slope is the charge per mile: $0.25." },
      { math: `<span class="m"><i>y</i> − <span class="c2">87</span> = 0.25(<i>x</i> − <span class="c2">120</span>)</span>`, note: "Point-slope form using the point (120, 87)." },
      { math: `<span class="m"><i>y</i> = 0.25<i>x</i> − 30 + 87 = 0.25<i>x</i> + 57</span>`, note: "Distribute and add 87: a $57 daily fee plus $0.25 per mile." },
      { math: `<span class="m">4<i>y</i> = <i>x</i> + 228</span>`, note: "Multiply by 4 to clear the decimal." },
      { math: `<span class="m c1"><i>x</i> − 4<i>y</i> = −228</span>`, note: "Standard form: variables on the left, A = 1 is positive." },
      { math: `<span class="m">200 − 4(107) = 200 − 428 = −228 ✓</span>`, note: "Check with the other point, (200, 107)." }
    ],
    answer: `Point-slope <span class="m"><i>y</i> − 87 = 0.25(<i>x</i> − 120)</span>, slope-intercept <span class="m"><i>y</i> = 0.25<i>x</i> + 57</span>, standard <span class="m"><i>x</i> − 4<i>y</i> = −228</span>.`
  },
  why: `<p>Data rarely hand you the y-intercept. You usually have two measurements, and point-slope form turns them into an equation in one step. Standard form matches how many constraints are stated, such as a total budget split between two items, and makes intercepts easy to read.</p>
<p>Being able to move between forms is what you need for the next topics. Systems of equations are often solved from standard form, parallel and perpendicular lines are written in point-slope form, and in calculus the tangent line at a point is written <span class="m"><i>y</i> − <i>f</i>(<i>a</i>) = <i>f</i> ′(<i>a</i>)(<i>x</i> − <i>a</i>)</span>.</p>`,
  careers: [
    { role: "Operations analyst", use: "Writes a linear cost model from two observed cost-and-volume data points using point-slope form." },
    { role: "Event manager", use: "States a ticket budget as a standard-form constraint such as 12a + 8c = 960 and reads off the extreme cases from the intercepts." },
    { role: "Surveyor", use: "Writes the equation of a property boundary through two surveyed corner points." },
    { role: "Dietitian", use: "Uses a standard-form constraint such as 4p + 9f = 600 for calories from protein and fat grams in a meal plan." },
    { role: "Mechanical engineer", use: "Writes the tangent-line (linear) approximation of a sensor's response near an operating point in point-slope form." }
  ],
  life: [
    "Working out a rental or taxi pricing rule from two receipts",
    "Splitting a fixed budget between two kinds of items",
    "Estimating when a steadily filling tank will be full from two readings",
    "Planning how many hours at two different jobs reach an earnings target",
    "Converting a map route between two points into a straight-line equation"
  ],
  fields: [
    { name: "Economics", use: "Budget lines are written in standard form, p₁x + p₂y = I, with intercepts showing the most of each good you can buy." },
    { name: "Physics", use: "Linear relationships found from two measurements are written in point-slope form." },
    { name: "Operations research", use: "Linear programming constraints are written as standard-form equations and inequalities." },
    { name: "Computer graphics", use: "Lines and edges are stored in the form Ax + By = C to test which side of an edge a pixel is on." }
  ],
  prereqWhy: {
    "a1-slope-forms": "You need to compute slope and use slope-intercept form, the form the others are converted to and from."
  },
  unlocksWhy: {
    "a1-par-perp": "Lines parallel or perpendicular to a given line through a given point are written in point-slope form.",
    "a1-sys-graph": "Systems are often given in standard form and converted to slope-intercept form to graph.",
    "a1-linear-models": "A model line through two data points is written with point-slope form before being simplified."
  },
  beyond: [
    { field: "Calculus I", why: "The tangent line at x = a is written in point-slope form with slope f′(a)." },
    { field: "Linear Algebra", why: "Standard form Ax + By = C is one row of a linear system, and its coefficients become matrix entries." },
    { field: "Economics", why: "Budget constraints and isocost lines are standard-form linear equations." }
  ],
  mistakes: [
    { wrong: `Sign slips with a negative coordinate: through <span class="m">(−1, 6)</span> writing <span class="m"><i>y</i> − 6 = −2(<i>x</i> − 1)</span>.`, fix: `Subtract the coordinate itself: <span class="m"><i>x</i> − (−1) = <i>x</i> + 1</span>, so <span class="m"><i>y</i> − 6 = −2(<i>x</i> + 1)</span>.` },
    { wrong: `Leaving standard form with fractions or a negative <span class="m"><i>A</i></span>: <span class="m"><span class="fr"><span>2</span><span>3</span></span><i>x</i> + <i>y</i> = 5</span> or <span class="m">−2<i>x</i> − 3<i>y</i> = −15</span>.`, fix: `Multiply by the LCD, and by −1 if needed: <span class="m">2<i>x</i> + 3<i>y</i> = 15</span>.` },
    { wrong: `Trying to write a vertical line through <span class="m">(−2, 7)</span> and <span class="m">(−2, −1)</span> in point-slope form with <span class="m"><i>m</i> = 0</span>.`, fix: `The run is 0, so the slope is undefined, not 0. The equation is <span class="m"><i>x</i> = −2</span>, which is standard form with <span class="m"><i>A</i> = 1</span>, <span class="m"><i>B</i> = 0</span>, <span class="m"><i>C</i> = −2</span>.` }
  ],
  practice: [
    { q: `Write the line with slope 4 through <span class="m">(3, −2)</span> in point-slope and slope-intercept form.`, a: `<span class="m"><i>y</i> + 2 = 4(<i>x</i> − 3)</span>. Then <span class="m"><i>y</i> = 4<i>x</i> − 12 − 2 = 4<i>x</i> − 14</span>.` },
    { q: `Write <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 5</span> in standard form.`, a: `Multiply by 3: <span class="m">3<i>y</i> = −2<i>x</i> + 15</span>, so <span class="m">2<i>x</i> + 3<i>y</i> = 15</span>.` },
    { q: `Find the line through <span class="m">(−1, 6)</span> and <span class="m">(3, −2)</span> in all three forms.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>−2 − 6</span><span>3 − (−1)</span></span> = −2</span>. Point-slope: <span class="m"><i>y</i> − 6 = −2(<i>x</i> + 1)</span>. Slope-intercept: <span class="m"><i>y</i> = −2<i>x</i> + 4</span>. Standard: <span class="m">2<i>x</i> + <i>y</i> = 4</span>.` },
    { q: `Find the intercepts and slope of <span class="m">3<i>x</i> − 4<i>y</i> = 12</span>, and write the line through <span class="m">(−2, 7)</span> and <span class="m">(−2, −1)</span>.`, a: `x-intercept: <span class="m">3<i>x</i> = 12</span>, so <span class="m">(4, 0)</span>. y-intercept: <span class="m">−4<i>y</i> = 12</span>, so <span class="m">(0, −3)</span>. Slope <span class="m">−<i>A</i>/<i>B</i> = <span class="fr"><span>3</span><span>4</span></span></span>. The second line is vertical (run 0): <span class="m"><i>x</i> = −2</span>.` }
  ]
};
