window.ARITH = window.ARITH || {};

ARITH["pa-variables"] = {
  title: "Variables & Algebraic Expressions",
  short: "Letters that stand for numbers, built into expressions",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Algebra begins · variables, terms and coefficients",
  hero: `<span class="m"><span class="c3">3</span><span class="c2"><i>x</i></span> + <span class="c4">2</span></span>`,
  lede: `A <span class="m c2">variable</span> is a letter that stands for a number. An expression like <span class="m"><span class="c3">3</span><span class="c2"><i>x</i></span> + <span class="c4">2</span></span> is a recipe: once you know <span class="m c2"><i>x</i></span>, you know its <span class="m c1">value</span>.`,
  plain: `<p>Picture 3 cups and 2 loose counters on a table. Each cup holds the same number of counters, but you cannot see inside. Call that hidden number <span class="m c2"><i>x</i></span>. The total number of counters is "3 cups of <span class="m"><i>x</i></span>, plus 2", which we write <span class="m"><span class="c3">3</span><span class="c2"><i>x</i></span> + <span class="c4">2</span></span>.</p>
<p>The letter is a <b>variable</b> because its value can change. If each cup holds 5 counters, the total is <span class="m">3 × 5 + 2 = 17</span>. If each cup holds 10, the total is 32. The expression stays the same. Only the number inside the cups changes.</p>
<p>The pieces have names. <span class="m">3<i>x</i></span> and <span class="m">2</span> are <b>terms</b>, the parts joined by + or −. The 3 in front of <span class="m"><i>x</i></span> is the <b>coefficient</b>: it says how many <span class="m"><i>x</i></span>'s there are. The 2 on its own is the <b>constant</b>, because it never changes.</p>`,
  formal: `<p>A <b>variable</b> is a symbol, usually a letter, that represents a number from some set (in this course, a real number). A <b>constant</b> is a symbol whose value is fixed. An <b>algebraic expression</b> is a combination of variables, constants and operation symbols (+, −, ×, ÷, exponents, grouping symbols) that names a number once values are assigned to the variables. It contains no equals sign or inequality symbol.</p>
<div class="display"><span class="c3">4</span><span class="c2"><i>x</i></span><sup>2</sup> − <span class="c2"><i>x</i></span> + <span class="c4">7</span> &nbsp;<span class="dim">has terms 4<i>x</i><sup>2</sup>, −<i>x</i>, 7; coefficients 4, −1; constant term 7</span></div>
<p>The <b>terms</b> of an expression are the parts added together; a subtraction <span class="m"><i>a</i> − <i>b</i></span> is read as <span class="m"><i>a</i> + (−<i>b</i>)</span>, so the sign belongs to the term. The <b>coefficient</b> of a term is its numerical factor; <span class="m"><i>x</i></span> has coefficient 1 and <span class="m">−<i>x</i></span> has coefficient −1. Juxtaposition means multiplication: <span class="m">3<i>x</i> = 3 · <i>x</i></span> and <span class="m"><i>ab</i> = <i>a</i> · <i>b</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The unknown or changing number. In the lab it is the number of counters in each cup." },
    { c: "c3", sym: `3`, name: "Coefficient", desc: "The number multiplying the variable. It counts how many cups there are." },
    { c: "c4", sym: `2`, name: "Constant", desc: "A term with no variable. Its value never changes: the loose counters." },
    { c: "c1", sym: `3<i>x</i> + 2`, name: "Value of the expression", desc: "The single number the expression equals once x is known: the total count of counters." }
  ],
  steps: { title: "How to read an algebraic expression", items: [
    `Rewrite any subtraction as adding a negative, so <span class="m">5<i>y</i> − 8</span> becomes <span class="m">5<i>y</i> + (−8)</span>.`,
    `Split the expression at each + sign that is not inside parentheses. Each piece is a <b>term</b>.`,
    `For each term, the number in front is the <b>coefficient</b>. A bare <span class="m"><i>y</i></span> has coefficient 1; <span class="m">−<i>y</i></span> has coefficient −1.`,
    `A term with no variable is a <b>constant</b>.`,
    `Check that there is no = or &lt; sign. If there is, you have an equation or inequality, not an expression.`
  ] },
  example: {
    prompt: `A phone plan charges a one-time $40 activation fee plus $15 per month. Write an expression for the total cost after <span class="m"><i>m</i></span> months, name its parts, and find the cost for one year.`,
    lines: [
      { math: `<span class="m"><span class="c3">15</span><span class="c2"><i>m</i></span> + <span class="c4">40</span></span>`, note: "Each month adds 15 dollars, so m months add 15 × m. The fee is added once." },
      { math: `<span class="m">terms: 15<i>m</i>, 40</span>`, note: "The variable is m, the coefficient is 15 (dollars per month), and the constant is 40 (dollars)." },
      { math: `<span class="m"><i>m</i> = 12</span>`, note: "One year is 12 months." },
      { math: `<span class="m">15(12) + 40 = 180 + 40</span>`, note: "Replace m by 12. Multiply before adding." },
      { math: `<span class="m c1">220</span>`, note: "The value of the expression when m = 12." },
      { math: `<span class="m">40 + 12 × 15 = 220</span>`, note: "Check: the fee plus twelve monthly payments gives the same total." }
    ],
    answer: `The cost is <span class="m">15<i>m</i> + 40</span> dollars, which is <span class="m">$220</span> for one year.`
  },
  why: `<p>Variables let you write one rule that covers every case. A pay rate, a phone plan, a recipe or a tax rule is really an expression: plug in the hours, months, servings or income and the rule gives the answer. Spreadsheets work the same way, with a cell name playing the role of the variable.</p>
<p>Every later part of algebra is built from expressions. Equations set two expressions equal, functions are expressions with an input, and formulas in science are expressions with named quantities.</p>`,
  careers: [
    { role: "Accountant", use: "Builds spreadsheet formulas such as =B2*0.0765 where the cell reference acts as a variable for each employee's wages." },
    { role: "Electrician", use: "Quotes jobs with an expression like a flat call-out fee plus an hourly rate times the hours worked." },
    { role: "Software developer", use: "Stores changing values in named variables and writes expressions that compute new values from them." },
    { role: "Pharmacist", use: "Applies dose rules written as expressions in the patient's weight, such as 15 mg times weight in kilograms." },
    { role: "Sales representative", use: "Estimates pay from an expression such as base salary plus a commission rate times total sales." }
  ],
  life: [
    "Working out a monthly phone or streaming bill with a setup fee",
    "Reading a spreadsheet formula that uses cell names",
    "Estimating a taxi fare from a base charge plus a per-mile rate",
    "Scaling a recipe where each serving needs the same amounts"
  ],
  fields: [
    { name: "Computer science", use: "Programs are built from variables and expressions that the computer evaluates." },
    { name: "Physics", use: "Laws are written as expressions in named quantities, such as the distance vt travelled at speed v for time t." },
    { name: "Business", use: "Cost, revenue and profit are modelled as expressions in the number of units sold." }
  ],
  prereqWhy: {
    "order-ops": "An expression like 3x + 2 means multiply first and then add, so you must know the order of operations to read it correctly.",
    "properties": "Rewriting subtraction as adding a negative and treating 3x as 3 · x rely on the laws of arithmetic."
  },
  unlocksWhy: {
    "pa-translate": "Turning a phrase like \"5 more than twice a number\" into 2n + 5 needs a variable and an expression to write it with.",
    "pa-like-terms": "Combining like terms means recognising terms and coefficients inside an expression.",
    "pa-evaluate": "Evaluating an expression means replacing its variables with numbers and computing its value.",
    "pa-exponent-laws": "Exponent laws describe how powers of a variable, such as x² and x³, combine inside expressions."
  },
  beyond: [
    { field: "Algebra I", why: "Polynomials, rational expressions and radical expressions are all algebraic expressions with more structure." },
    { field: "Statistics", why: "Formulas such as the sample mean are expressions in variables that stand for data values." },
    { field: "Computer programming", why: "Variables and expressions are the basic building blocks of every program." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m">3<i>x</i></span> with <span class="m"><i>x</i> = 4</span> as 34.`, fix: `Juxtaposition means multiply: <span class="m">3<i>x</i> = 3 · 4 = 12</span>.` },
    { wrong: `Saying the coefficient of <span class="m"><i>x</i></span> in <span class="m">5 − <i>x</i></span> is 1.`, fix: `The term is <span class="m">−<i>x</i></span>, so the coefficient is <span class="m">−1</span>. The sign belongs to the term.` },
    { wrong: `Calling <span class="m">2<i>x</i> + 1 = 9</span> an expression.`, fix: `It has an equals sign, so it is an <b>equation</b>. The expressions are <span class="m">2<i>x</i> + 1</span> and <span class="m">9</span>.` }
  ],
  practice: [
    { q: `Find the value of <span class="m">5<i>n</i> + 3</span> when <span class="m"><i>n</i> = 4</span>.`, a: `<span class="m">5(4) + 3 = 20 + 3 = 23</span>.` },
    { q: `List the terms, the coefficients and the constant of <span class="m">4<i>x</i><sup>2</sup> − <i>x</i> + 7</span>.`, a: `Terms <span class="m">4<i>x</i><sup>2</sup></span>, <span class="m">−<i>x</i></span>, <span class="m">7</span>. Coefficients 4 and −1. Constant 7.` },
    { q: `Which are expressions and which are equations: (a) <span class="m">6<i>y</i> − 2</span> (b) <span class="m">6<i>y</i> − 2 = 10</span> (c) <span class="m"><i>ab</i> + <i>c</i></span>?`, a: `(a) and (c) are expressions. (b) is an equation because it contains an equals sign.` },
    { q: `A gym charges a $25 sign-up fee plus $30 per month. Write an expression for the cost of <span class="m"><i>m</i></span> months and find the cost of 8 months.`, a: `<span class="m">30<i>m</i> + 25</span>. For <span class="m"><i>m</i> = 8</span>: <span class="m">30(8) + 25 = 240 + 25 = $265</span>.` }
  ],
  origin: `François Viète, in <i>In artem analyticem isagoge</i> (1591), was the first to use letters systematically for both unknown and known quantities, with vowels for unknowns and consonants for knowns. René Descartes, in <i>La Géométrie</i> (1637), set the modern habit of using <i>x</i>, <i>y</i>, <i>z</i> for unknowns and <i>a</i>, <i>b</i>, <i>c</i> for known values.`
};
