window.ARITH = window.ARITH || {};

ARITH["pa-evaluate"] = {
  title: "Evaluating Expressions",
  short: "Substitute numbers for variables, then compute",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Algebraic expressions · substitution",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup>2</sup> − 3<span class="c2"><i>x</i></span> &nbsp;at&nbsp; <span class="c2"><i>x</i></span> = <span class="c3">−2</span>: &nbsp;(<span class="c3">−2</span>)<sup>2</sup> − 3(<span class="c3">−2</span>) = <span class="c5">10</span></span>`,
  lede: `To evaluate an expression, replace each <span class="m c2">variable</span> with its <span class="m c3">value</span>, in parentheses, and follow the order of operations to a single <span class="m c5">result</span>.`,
  plain: `<p>An expression is like a machine with empty slots. <span class="m"><i>x</i><sup>2</sup> − 3<i>x</i></span> has two slots marked <span class="m"><i>x</i></span>. When someone tells you <span class="m"><i>x</i> = −2</span>, you drop −2 into every slot and work out the answer. That is called <b>evaluating</b> the expression.</p>
<p>Always put the number in parentheses when you substitute, especially if it is negative. <span class="m">(−2)<sup>2</sup></span> means <span class="m">(−2) × (−2) = 4</span>. Without the parentheses you might write <span class="m">−2<sup>2</sup></span>, which means <span class="m">−(2 × 2) = −4</span>. That one slip changes the answer.</p>
<p>After substituting, the variables are gone and you have an ordinary arithmetic problem. Do it in the usual order: grouping symbols, exponents, multiplication and division left to right, then addition and subtraction left to right.</p>`,
  formal: `<p>To <b>evaluate</b> an algebraic expression at given values of its variables, <b>substitute</b> each value for every occurrence of its variable, then simplify the resulting numerical expression using the order of operations. The result is the <b>value of the expression</b> at those values.</p>
<div class="display"><i>E</i>(<span class="c2"><i>x</i></span>) = <span class="c2"><i>x</i></span><sup>2</sup> − 3<span class="c2"><i>x</i></span>, &nbsp; <span class="c2"><i>x</i></span> = <span class="c3">−2</span><br>(<span class="c3">−2</span>)<sup>2</sup> − 3(<span class="c3">−2</span>) = 4 − (−6) = 4 + 6 = <span class="c5">10</span></div>
<p>Note that <span class="m">−<i>a</i><sup><i>n</i></sup> = −(<i>a</i><sup><i>n</i></sup>)</span>, because exponentiation takes precedence over negation; so <span class="m">−<i>x</i><sup>2</sup></span> at <span class="m"><i>x</i> = −3</span> is <span class="m">−(−3)<sup>2</sup> = −9</span>. An expression may be <b>undefined</b> at some values, for example <span class="m"><span class="fr"><span>5</span><span><i>x</i> − 1</span></span></span> at <span class="m"><i>x</i> = 1</span>, since division by zero is undefined.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The slot to be filled. Every occurrence gets the same value." },
    { c: "c3", sym: `−2`, name: "Substituted value", desc: "The number put in place of the variable, always inside parentheses." },
    { c: "c1", sym: `×, −`, name: "Current operation", desc: "The next operation to carry out, chosen by the order of operations." },
    { c: "c5", sym: `10`, name: "Result", desc: "The single number the expression equals at that value." }
  ],
  steps: { title: "How to evaluate an expression", items: [
    `Write the expression again with empty parentheses in place of each variable.`,
    `Fill each pair of parentheses with the given <span class="m c3">value</span>.`,
    `Work inside grouping symbols first, including a numerator or denominator treated as a group.`,
    `Evaluate powers, remembering that <span class="m">(−3)<sup>2</sup> = 9</span> but <span class="m">−3<sup>2</sup> = −9</span>.`,
    `Multiply and divide from left to right, then add and subtract from left to right.`,
    `Check that the answer is reasonable, for example by estimating.`
  ] },
  example: {
    prompt: `A weather site gives a winter morning temperature of −15 °C. The conversion formula is <span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span><i>C</i> + 32</span>. What is the temperature in degrees Fahrenheit?`,
    lines: [
      { math: `<span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span>(<span class="c3">−15</span>) + 32</span>`, note: "Substitute C = −15 in parentheses." },
      { math: `<span class="m"><span class="fr"><span>9</span><span>5</span></span>(−15) = 9 × (−3) = −27</span>`, note: "Multiply first: −15 ÷ 5 = −3, then 9 × (−3)." },
      { math: `<span class="m">−27 + 32 = <span class="c5">5</span></span>`, note: "Then add." },
      { math: `<span class="m"><i>C</i> = <span class="fr"><span>5</span><span>9</span></span>(5 − 32) = <span class="fr"><span>5</span><span>9</span></span>(−27) = −15</span>`, note: "Check with the reverse formula C = 5/9 (F − 32): it returns −15." }
    ],
    answer: `−15 °C is <span class="m">5</span> °F.`
  },
  why: `<p>Formulas are only useful when you can plug numbers into them. Converting temperatures, working out a loan payment, finding a medication dose, estimating a stopping distance or checking a spreadsheet all come down to evaluating an expression correctly.</p>
<p>Evaluation is also how you check work in algebra. You test whether a number solves an equation by substituting it, and you build tables and graphs of functions by evaluating at many inputs.</p>`,
  careers: [
    { role: "Nurse", use: "Evaluates dose formulas such as dose = weight in kg × mg per kg to prepare a prescribed amount." },
    { role: "Electrician", use: "Substitutes measured values into P = VI or V = IR to find power or voltage in a circuit." },
    { role: "Meteorologist", use: "Evaluates wind-chill and heat-index formulas at measured temperatures and wind speeds." },
    { role: "Loan officer", use: "Plugs principal, rate and term into a payment formula to quote a monthly payment." },
    { role: "Civil engineer", use: "Evaluates load and stress formulas at design values to check that a beam is strong enough." }
  ],
  life: [
    "Converting a recipe's oven temperature between °C and °F",
    "Working out a taxi fare from a posted rate formula",
    "Finding the area of a room to buy flooring",
    "Checking a spreadsheet total by recomputing one row by hand"
  ],
  fields: [
    { name: "Physics", use: "Every calculation with a law such as d = vt or KE = ½mv² is an evaluation." },
    { name: "Chemistry", use: "Gas-law and concentration formulas are evaluated at measured values." },
    { name: "Finance", use: "Interest and payment formulas are evaluated to price loans and investments." }
  ],
  prereqWhy: {
    "pa-variables": "You need to know what a variable and an expression are before you can replace one with a number.",
    "integers": "Substituted values are often negative, so you need the sign rules for adding, multiplying and squaring integers."
  },
  unlocksWhy: {
    "pa-equations": "Checking whether a number is a solution means evaluating both sides of the equation at that number.",
    "pa-relations": "Tables of ordered pairs for a rule are made by evaluating the rule at each input."
  },
  beyond: [
    { field: "Algebra I", why: "Function notation f(3) is evaluation, and it is used to build tables, graphs and models." },
    { field: "Calculus I", why: "Limits, derivatives and definite integrals all end with evaluating an expression at specific values." },
    { field: "Statistics", why: "Test statistics and confidence intervals are found by evaluating formulas at sample values." }
  ],
  mistakes: [
    { wrong: `Evaluating <span class="m"><i>x</i><sup>2</sup></span> at <span class="m"><i>x</i> = −3</span> as <span class="m">−3<sup>2</sup> = −9</span>.`, fix: `Use parentheses: <span class="m">(−3)<sup>2</sup> = 9</span>.` },
    { wrong: `Evaluating <span class="m">−<i>x</i><sup>2</sup></span> at <span class="m"><i>x</i> = −3</span> as 9.`, fix: `The square comes first, then the negation: <span class="m">−(−3)<sup>2</sup> = −9</span>.` },
    { wrong: `Evaluating <span class="m">4 + 2<i>x</i></span> at <span class="m"><i>x</i> = 5</span> as <span class="m">6 × 5 = 30</span>.`, fix: `Multiply before adding: <span class="m">4 + 2(5) = 4 + 10 = 14</span>.` }
  ],
  practice: [
    { q: `Evaluate <span class="m">4<i>a</i> + 7</span> when <span class="m"><i>a</i> = 3</span>.`, a: `<span class="m">4(3) + 7 = 12 + 7 = 19</span>.` },
    { q: `Evaluate <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> + 6</span> when <span class="m"><i>x</i> = −1</span>.`, a: `<span class="m">(−1)<sup>2</sup> − 5(−1) + 6 = 1 + 5 + 6 = 12</span>.` },
    { q: `Evaluate <span class="m"><span class="fr"><span>2<i>x</i> − <i>y</i></span><span><i>x</i> + <i>y</i></span></span></span> when <span class="m"><i>x</i> = 4</span> and <span class="m"><i>y</i> = −2</span>.`, a: `Numerator <span class="m">2(4) − (−2) = 10</span>, denominator <span class="m">4 + (−2) = 2</span>, so the value is <span class="m">10 ÷ 2 = 5</span>.` },
    { q: `Evaluate <span class="m">−<i>x</i><sup>2</sup> + 3<i>xy</i></span> when <span class="m"><i>x</i> = −3</span> and <span class="m"><i>y</i> = 2</span>.`, a: `<span class="m">−(−3)<sup>2</sup> + 3(−3)(2) = −9 + (−18) = −27</span>.` }
  ]
};
