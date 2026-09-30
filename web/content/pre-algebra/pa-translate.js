window.ARITH = window.ARITH || {};

ARITH["pa-translate"] = {
  title: "Translating Words into Algebra",
  short: "Turning verbal phrases into expressions and equations",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Algebraic language · phrases to symbols",
  hero: `<span class="m">"<span class="c3">5</span> <span class="c1">less than</span> a <span class="c2">number</span>" &nbsp;→&nbsp; <span class="c2"><i>n</i></span> − <span class="c3">5</span></span>`,
  lede: `Word problems are written in English. Algebra is written in symbols. Translating means matching each <span class="m c1">key phrase</span> to an operation and each unknown to a <span class="m c2">variable</span>.`,
  plain: `<p>Algebra is a short language. "The sum of a number and 8" becomes <span class="m"><i>n</i> + 8</span>. "Three times a number" becomes <span class="m">3<i>n</i></span>. Once a sentence is in symbols, you can work with it using the rules you already know.</p>
<p>Most phrases have a keyword that tells you the operation. "Sum", "more than" and "increased by" mean add. "Difference", "less than" and "decreased by" mean subtract. "Product", "times" and "twice" mean multiply. "Quotient" and "divided by" mean divide. The word "is" usually becomes an equals sign.</p>
<p>Watch the order. "5 less than a number" means start with the number and take away 5, so it is <span class="m"><i>n</i> − 5</span>, not <span class="m">5 − <i>n</i></span>. Test it with a real number: 5 less than 12 is 7, and <span class="m">12 − 5 = 7</span>.</p>`,
  formal: `<p>A <b>verbal expression</b> describes a quantity; it translates to an <b>algebraic expression</b>. A verbal sentence that states two quantities are equal (signalled by <i>is</i>, <i>equals</i>, <i>gives</i>, <i>results in</i>) translates to an <b>equation</b>. For numbers <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>:</p>
<div class="display">the sum of <i>a</i> and <i>b</i>: <i>a</i> + <i>b</i> &nbsp;&nbsp; the difference of <i>a</i> and <i>b</i>: <i>a</i> − <i>b</i><br><i>a</i> more than <i>b</i>: <i>b</i> + <i>a</i> &nbsp;&nbsp; <i>a</i> less than <i>b</i>: <i>b</i> − <i>a</i> <span class="dim">(order reverses)</span><br>the product of <i>a</i> and <i>b</i>: <i>ab</i> &nbsp;&nbsp; the quotient of <i>a</i> and <i>b</i>: <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> <span class="dim">(<i>b</i> ≠ 0)</span></div>
<p>Grouping words such as "the sum of … and …" or "the difference of … and …" create a single quantity, which must be put in parentheses when another operation acts on it: "twice the sum of <span class="m"><i>x</i></span> and 3" is <span class="m">2(<i>x</i> + 3)</span>, while "twice <span class="m"><i>x</i></span>, plus 3" is <span class="m">2<i>x</i> + 3</span>.</p>`,
  legend: [
    { c: "c1", sym: `less than`, name: "Key phrase", desc: "The word or phrase that names the operation, such as sum, product, less than or is." },
    { c: "c2", sym: `<i>n</i>`, name: "Variable", desc: "The letter chosen to stand for the unknown number. Say what it means, with units, before you write anything." },
    { c: "c3", sym: `5`, name: "Numbers", desc: "The known quantities stated in the words." }
  ],
  steps: { title: "How to translate a phrase or sentence", items: [
    `Read the whole phrase. Decide what the unknown is and name it with a variable, for example "let <span class="m c2"><i>h</i></span> = hours worked".`,
    `Underline each <span class="c1">key phrase</span> and write its operation above it.`,
    `Watch for order-reversing phrases: "<i>a</i> less than <i>b</i>" is <span class="m"><i>b</i> − <i>a</i></span> and "subtracted from" works the same way.`,
    `Put parentheses around any "sum of", "difference of" or "quantity" that another operation acts on.`,
    `If the sentence contains "is" or "equals", put the = there and translate each side.`,
    `Test your expression with an easy number to see if it matches the words.`
  ] },
  example: {
    prompt: `A plumber charges a $65 service fee plus $90 for each hour of work. Translate "the bill is 65 dollars plus 90 dollars times the number of hours" into an expression for <span class="m"><i>h</i></span> hours, then find the bill for a 2.5-hour job.`,
    lines: [
      { math: `<span class="m">let <span class="c2"><i>h</i></span> = hours worked</span>`, note: "Name the unknown and its units." },
      { math: `<span class="m"><span class="c3">90</span> · <span class="c2"><i>h</i></span></span>`, note: "\"90 dollars times the number of hours\" is a product." },
      { math: `<span class="m"><span class="c3">65</span> + <span class="c3">90</span><span class="c2"><i>h</i></span></span>`, note: "\"plus\" joins the fee to the hourly charge." },
      { math: `<span class="m">65 + 90(2.5) = 65 + 225</span>`, note: "Replace h by 2.5 and multiply first." },
      { math: `<span class="m">290</span>`, note: "The bill in dollars." },
      { math: `<span class="m">2 × 90 + 0.5 × 90 + 65 = 180 + 45 + 65 = 290</span>`, note: "Check: two full hours, half an hour, and the fee." }
    ],
    answer: `The bill is <span class="m">65 + 90<i>h</i></span> dollars, and a 2.5-hour job costs <span class="m">$290</span>.`
  },
  why: `<p>Real problems arrive in words: a contract, a price list, a rule at work. Before any algebra can help, the words have to become symbols. Most errors in word problems happen at this step, usually by reversing the order of a subtraction or leaving out parentheses.</p>
<p>Translation is also the skill behind writing formulas in spreadsheets and code, where a business rule stated in a sentence must become an exact expression.</p>`,
  careers: [
    { role: "Paralegal", use: "Turns contract terms such as a late fee of 5% of the balance plus $25 into a calculation of the amount owed." },
    { role: "Payroll clerk", use: "Converts overtime rules like time-and-a-half for hours over 40 into a pay formula." },
    { role: "Programmer", use: "Translates written requirements into exact expressions in code, including the right order of operations." },
    { role: "Insurance agent", use: "Writes premium quotes from rules stated in words, such as a base rate plus a charge per driver." },
    { role: "Construction estimator", use: "Turns job specifications into material formulas, such as twice the length plus twice the width for trim." }
  ],
  life: [
    "Turning a taxi or delivery price list into a quick cost calculation",
    "Writing a spreadsheet formula for a budget rule",
    "Checking a store offer such as 3 dollars off twice the regular price",
    "Setting up a savings plan from a starting amount plus a monthly deposit"
  ],
  fields: [
    { name: "Business", use: "Pricing rules, commissions and fees are stated in words and must be written as formulas." },
    { name: "Computer science", use: "Specifications in plain language are translated into precise expressions and conditions." },
    { name: "Physics", use: "Problem statements are translated into equations relating the given and unknown quantities." }
  ],
  prereqWhy: {
    "pa-variables": "A translation needs a variable for the unknown and the vocabulary of terms, coefficients and expressions."
  },
  unlocksWhy: {
    "pa-word-problems": "Solving a word problem starts by translating the story into an equation in one variable."
  },
  beyond: [
    { field: "Algebra I", why: "Systems, mixture, motion and rate problems all begin by translating sentences into equations." },
    { field: "Calculus I", why: "Optimisation and related-rates problems require turning a described situation into a function or equation." },
    { field: "Economics", why: "Verbal assumptions about cost, demand and supply are turned into equations that can be analysed." }
  ],
  mistakes: [
    { wrong: `Writing "7 less than a number" as <span class="m">7 − <i>x</i></span>.`, fix: `"Less than" reverses order: <span class="m"><i>x</i> − 7</span>. Test with 10: 7 less than 10 is 3, and <span class="m">10 − 7 = 3</span>.` },
    { wrong: `Writing "twice the sum of a number and 4" as <span class="m">2<i>x</i> + 4</span>.`, fix: `The sum is one quantity, so use parentheses: <span class="m">2(<i>x</i> + 4)</span>.` },
    { wrong: `Writing "the quotient of 12 and a number" as <span class="m"><span class="fr"><span><i>x</i></span><span>12</span></span></span>.`, fix: `The first number named is the dividend: <span class="m"><span class="fr"><span>12</span><span><i>x</i></span></span></span>.` }
  ],
  practice: [
    { q: `Translate: "the sum of a number and 8".`, a: `<span class="m"><i>x</i> + 8</span>.` },
    { q: `Translate: "7 less than three times a number".`, a: `Three times a number is <span class="m">3<i>x</i></span>; take 7 away from it: <span class="m">3<i>x</i> − 7</span>.` },
    { q: `Translate: "the product of 4 and the difference of a number and 2".`, a: `The difference is one quantity: <span class="m">4(<i>x</i> − 2)</span>.` },
    { q: `Translate into an equation: "Twice a number, decreased by 5, is 17." Then check whether 11 is a solution.`, a: `<span class="m">2<i>x</i> − 5 = 17</span>. With <span class="m"><i>x</i> = 11</span>: <span class="m">2(11) − 5 = 22 − 5 = 17</span>, so yes, 11 is the solution.` }
  ],
  origin: `Early algebra was written entirely in words. Muhammad ibn Musa al-Khwarizmi's <i>al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala</i> (c. 820 CE), the book that gave algebra its name, states and solves every problem in sentences with no symbols at all. Symbolic notation replaced this "rhetorical" algebra gradually between the 15th and 17th centuries.`
};
