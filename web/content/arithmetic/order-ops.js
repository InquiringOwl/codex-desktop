window.ARITH = window.ARITH || {};

ARITH["order-ops"] = {
  title: "Order of Operations",
  short: "One expression, one correct value.",
  grade: "Grades 5–6",
  hours: 4,
  voice: "mixed",
  eyebrow: "Structure · reading expressions correctly",
  hero: `<span class="m">3 + <span class="c1">4 × 2</span> = <span class="c5">11</span></span>`,
  lede: `When an expression mixes operations, everyone must agree on which to do first. The convention: grouping, then exponents, then multiplication and division left to right, then addition and subtraction left to right.`,
  plain: `<p>What is <span class="m">3 + 4 × 2</span>? If you go left to right, you get 14. If you multiply first, you get 11. Both can't be right, so mathematicians agreed on a rule. Multiply first. The answer is 11.</p>
<p>The full order is: first anything in <b>parentheses</b> or other grouping. Then <b>exponents</b> (powers, which you will meet soon). Then <b>multiplication and division</b>, working left to right. Last, <b>addition and subtraction</b>, left to right.</p>
<p>Many people remember this as PEMDAS or BODMAS. Be careful with the letters. M and D are one step, done in the order they appear. So are A and S. <span class="m">12 ÷ 3 × 2</span> is 8, because you divide first when division comes first.</p>
<p>If you want a different order, add parentheses. <span class="m">(3 + 4) × 2 = 14</span>.</p>`,
  formal: `<p>The standard <b>precedence</b> convention evaluates an expression in levels, from highest to lowest:</p>
<div class="display">1. Grouping symbols: ( ), [ ], { }, fraction bars, radicals, absolute value<br>2. Exponents (evaluated right to left: 2<sup>3<sup>2</sup></sup> = 2<sup>9</sup>)<br>3. Multiplication and division, left to right<br>4. Addition and subtraction, left to right</div>
<p>Within a level, operations are <b>left-associative</b>: <span class="m"><i>a</i> − <i>b</i> + <i>c</i> = (<i>a</i> − <i>b</i>) + <i>c</i></span> and <span class="m"><i>a</i> ÷ <i>b</i> × <i>c</i> = (<i>a</i> ÷ <i>b</i>) × <i>c</i></span>. This is an agreed notational convention. It lets every well-formed expression have one value. A fraction bar groups its whole numerator and whole denominator: <span class="m"><span class="fr"><span>6 + 4</span><span>2</span></span> = 5</span>. Implied multiplication such as <span class="m">2(3 + 1)</span> or <span class="m">2<i>x</i></span> is sometimes given higher precedence in textbooks, so ambiguous forms like <span class="m">6 ÷ 2(1 + 2)</span> should be rewritten with explicit parentheses.</p>`,
  legend: [
    { c: "c1", sym: `4 × 2`, name: "Next operation", desc: "The operation with the highest precedence, or the leftmost one at that level. It is done next." },
    { c: "c5", sym: `11`, name: "Result", desc: "The value that replaces the operation just done, until one number remains." },
    { c: "c1", sym: `( )`, name: "Grouping", desc: "Parentheses and other grouping symbols override the usual order. Work inside them first." }
  ],
  steps: { title: "How to evaluate an expression", items: [
    `Find the innermost grouping symbols and evaluate what is inside them first, using these same steps.`,
    `Evaluate any exponents.`,
    `Scan left to right and do each multiplication or division as you meet it.`,
    `Scan left to right again and do each addition or subtraction as you meet it.`,
    `After each operation, rewrite the whole expression with the result in place. This avoids skipping or doubling a step.`
  ] },
  example: {
    prompt: `Two adults go to a museum at $12 each, with 3 children at $7 each. They have a $5-off coupon for the whole group. Write one expression for the cost and evaluate it.`,
    lines: [
      { math: `2 × 12 + 3 × 7 − 5`, note: "Each product is a group of tickets. The coupon comes off the total." },
      { math: `<span class="c1">2 × 12</span> + 3 × 7 − 5`, note: "Multiplication comes before addition and subtraction. Start at the left." },
      { math: `24 + <span class="c1">3 × 7</span> − 5`, note: "Next multiplication." },
      { math: `<span class="c1">24 + 21</span> − 5`, note: "No multiplication left. Add and subtract left to right." },
      { math: `<span class="c1">45 − 5</span>`, note: "Last operation." },
      { math: `<span class="c5">40</span>`, note: "One number remains." }
    ],
    answer: `The visit costs <span class="m c5">$40</span>. Going strictly left to right would give a wrong total of $184.`
  },
  why: `<p>Written math has to mean the same thing to everyone who reads it. A formula for a price, a dose or a load is useless if two people evaluate it differently. The order of operations is that shared agreement, and it is built into calculators, spreadsheets and programming languages.</p>
<p>Algebra depends on it. An expression like <span class="m">3<i>x</i><sup>2</sup> + 2<i>x</i> − 5</span> is only meaningful because everyone knows the square applies to <i>x</i> alone and the multiplications happen before the additions. Every formula in science, finance and engineering is written with this convention.</p>`,
  careers: [
    { role: "Software developer", use: "Writes expressions knowing each language's operator precedence, and adds parentheses so the code computes what is intended." },
    { role: "Financial analyst", use: "Builds spreadsheet formulas such as =B2*(1+C2)-D2 where misplaced parentheses would change every result." },
    { role: "Nurse", use: "Evaluates dosage formulas with several steps, such as (desired ÷ on hand) × volume, in the correct order." },
    { role: "Electrical engineer", use: "Evaluates circuit formulas like the parallel resistance 1/(1/R₁ + 1/R₂), where the grouping determines the answer." },
    { role: "Estimator", use: "Writes cost formulas combining quantities, unit prices and a markup percentage that must be applied at the right step." }
  ],
  life: [
    "Totaling a bill with several items at different prices and a coupon",
    "Typing a multi-step calculation into a phone calculator correctly",
    "Writing formulas in a spreadsheet for a household budget",
    "Following a recipe conversion that multiplies and then adds",
    "Checking a store's sale price math, such as a discount applied before tax"
  ],
  fields: [
    { name: "Computer programming", use: "Every language defines operator precedence and associativity, and parsers enforce them." },
    { name: "Algebra and all later math", use: "Formulas and equations are written assuming the standard order." },
    { name: "Physics and engineering", use: "Formulas like v = v₀ + at are read with multiplication before addition." }
  ],
  prereqWhy: {
    "division": "Division shares a precedence level with multiplication and is done left to right, so it must be fluent inside expressions.",
    "properties": "The laws of arithmetic show why grouping matters for subtraction and division and when regrouping is allowed."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Evaluating and simplifying expressions with variables requires the standard order at every step." },
    { field: "Computer science", why: "Parsing expressions into trees, as compilers and calculators do, encodes the precedence rules." },
    { field: "Calculus", why: "Reading formulas such as derivatives of composite functions depends on knowing what each operation applies to." }
  ],
  mistakes: [
    { wrong: `Treating PEMDAS as six steps and multiplying before dividing: <span class="m">12 ÷ 3 × 2 = 12 ÷ 6 = 2</span>.`, fix: `Multiplication and division share one level and go left to right: <span class="m">12 ÷ 3 × 2 = 4 × 2 = 8</span>.` },
    { wrong: `Adding before subtracting: <span class="m">10 − 3 + 2 = 10 − 5 = 5</span>.`, fix: `Addition and subtraction share one level, left to right: <span class="m">10 − 3 + 2 = 7 + 2 = 9</span>.` },
    { wrong: `Going strictly left to right: <span class="m">3 + 4 × 2 = 7 × 2 = 14</span>.`, fix: `Multiplication comes before addition: <span class="m">3 + 8 = 11</span>.` }
  ],
  practice: [
    { q: `<span class="m">8 + 2 × 5</span>`, a: `<span class="m">8 + 10 = </span><b>18</b>.` },
    { q: `<span class="m">(8 + 2) × 5</span>`, a: `<span class="m">10 × 5 = </span><b>50</b>.` },
    { q: `<span class="m">20 − 12 ÷ 4 × 2</span>`, a: `<span class="m">12 ÷ 4 = 3</span>, <span class="m">3 × 2 = 6</span>, <span class="m">20 − 6 = </span><b>14</b>.` },
    { q: `<span class="m">48 ÷ (2 + 6) × 3 − 5</span>`, a: `Parentheses: 8. Then <span class="m">48 ÷ 8 = 6</span>, <span class="m">6 × 3 = 18</span>, <span class="m">18 − 5 = </span><b>13</b>.` }
  ],
  origin: `The rule that multiplication comes before addition grew up with symbolic algebra in the 1500s and 1600s, where writing <span class="m"><i>ax</i> + <i>b</i></span> to mean <span class="m">(<i>ax</i>) + <i>b</i></span> was already standard. Mnemonics such as PEMDAS and BODMAS are much later school conventions.`
};
