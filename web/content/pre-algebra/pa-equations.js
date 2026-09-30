window.ARITH = window.ARITH || {};

ARITH["pa-equations"] = {
  title: "Equations & Their Solutions",
  short: "What an equation says and how to test a solution",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 3,
  voice: "mixed",
  eyebrow: "Equations · solutions and solution sets",
  hero: `<span class="m"><span class="c3">2<span class="c2"><i>x</i></span> + 3</span> = <span class="c4">11</span> &nbsp;⇔&nbsp; <span class="c2"><i>x</i></span> = <span class="c1">4</span></span>`,
  lede: `An equation claims two expressions have the same value. A <span class="m c1">solution</span> is a value of the variable that makes the claim true, and the balance levels only there.`,
  plain: `<p>Think of a balance scale. On the left pan you put 2 bags with the same unknown number of marbles in each, plus 3 loose marbles. On the right pan you put 11 marbles. The scale says <span class="m">2<i>x</i> + 3 = 11</span>. If each bag holds 4 marbles, both sides weigh 11 and the beam is level. Any other number tips it.</p>
<p>An <b>equation</b> is a sentence with an equals sign. It can be true or false depending on the value of the variable. A number that makes it true is a <b>solution</b>. To test a number, substitute it on both sides and see if the two sides match.</p>
<p>Some equations have no solution, such as <span class="m"><i>x</i> + 1 = <i>x</i> + 2</span>: nothing is one more than itself and also two more. Others, like <span class="m"><i>x</i> + <i>x</i> = 2<i>x</i></span>, are true for every number. Most equations in this course have exactly one solution.</p>`,
  formal: `<p>An <b>equation</b> is a statement that two expressions are equal, <span class="m"><i>A</i> = <i>B</i></span>. A <b>solution</b> of an equation in one variable is a number that, when substituted for the variable, produces a true statement. The <b>solution set</b> is the set of all solutions. Two equations are <b>equivalent</b> if they have the same solution set.</p>
<div class="display"><b>conditional equation</b>: true for some values, false for others &nbsp; <span class="dim">2<i>x</i> + 3 = 11, solution set {4}</span><br><b>identity</b>: true for every real number &nbsp; <span class="dim"><i>x</i> + <i>x</i> = 2<i>x</i>, solution set ℝ</span><br><b>contradiction</b>: true for no value &nbsp; <span class="dim"><i>x</i> + 1 = <i>x</i> + 2, solution set ∅</span></div>
<p>An expression names a number and cannot be "solved"; it can only be simplified or evaluated. An equation makes a claim, which can be tested and solved. Solving uses properties of equality (adding or subtracting the same number on both sides, or multiplying or dividing both sides by the same nonzero number) that produce equivalent equations.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The unknown. On the balance, the number of marbles in each bag." },
    { c: "c3", sym: `2<i>x</i> + 3`, name: "Left side", desc: "The expression on the left pan. Its value changes as x changes." },
    { c: "c4", sym: `11`, name: "Right side", desc: "The expression on the right pan. Here it is a fixed number." },
    { c: "c1", sym: `=`, name: "Balanced state", desc: "Both sides have the same value. This happens only at a solution." }
  ],
  steps: { title: "How to check whether a number is a solution", items: [
    `Copy the equation, leaving parentheses where the variable appears.`,
    `Substitute the number into <b>every</b> occurrence of the variable on both sides.`,
    `Evaluate the left side on its own, using the order of operations.`,
    `Evaluate the right side on its own.`,
    `If the two values are equal, the number is a solution. If not, it is not.`
  ] },
  example: {
    prompt: `A moving company charges $120 plus $85 per hour. Your bill was $417.50, so the number of hours <span class="m"><i>h</i></span> satisfies <span class="m">120 + 85<i>h</i> = 417.50</span>. The crew says they worked 3 hours; the invoice says 3.5. Which is right?`,
    lines: [
      { math: `<span class="m"><span class="c3">120 + 85(3)</span> = 120 + 255 = 375</span>`, note: "Test h = 3 on the left side." },
      { math: `<span class="m">375 ≠ <span class="c4">417.50</span></span>`, note: "The sides differ, so 3 is not a solution." },
      { math: `<span class="m"><span class="c3">120 + 85(3.5)</span> = 120 + 297.50 = 417.50</span>`, note: "Test h = 3.5." },
      { math: `<span class="m">417.50 = <span class="c4">417.50</span> <span class="c1">✓</span></span>`, note: "The sides match, so 3.5 is a solution." },
      { math: `<span class="m">85 × 0.5 = 42.50 = 417.50 − 375</span>`, note: "Check: the extra half hour accounts for the extra $42.50." }
    ],
    answer: `<span class="m"><i>h</i> = 3.5</span> is the solution, so the invoice is correct: the crew worked 3.5 hours.`
  },
  why: `<p>Equations are how we write down a condition that must be met: a budget that must balance, a dose that must reach a target, a load a beam must carry. Checking a proposed answer by substitution is a quick, reliable way to catch mistakes on a bill, in a spreadsheet or in your own algebra.</p>
<p>The idea of a solution set, and the three cases of one solution, no solution and every number, carries through all of algebra, from linear equations to systems and quadratics.</p>`,
  careers: [
    { role: "Bookkeeper", use: "Checks that an invoice total satisfies the equation fee + rate × hours = amount billed before paying it." },
    { role: "Pharmacy technician", use: "Verifies that a prepared quantity satisfies the prescribed concentration equation before dispensing." },
    { role: "Quality-control inspector", use: "Tests whether measured values satisfy a specification equation within tolerance." },
    { role: "Software tester", use: "Writes test cases that substitute inputs and check that computed outputs equal the expected values." },
    { role: "Mathematics tutor", use: "Teaches students to verify every solution by substituting it back into the original equation." }
  ],
  life: [
    "Checking a bill by plugging the hours or items back into the rate",
    "Verifying that a budget balances: income equals spending plus savings",
    "Testing a guess in a puzzle such as a sudoku sum",
    "Confirming a recipe conversion gives the original amount when reversed"
  ],
  fields: [
    { name: "Physics", use: "Laws of motion and conservation are equations that measured quantities must satisfy." },
    { name: "Chemistry", use: "Balanced chemical equations state that atoms on both sides must be equal in number." },
    { name: "Economics", use: "Equilibrium is found where the supply equation and demand equation give the same value." }
  ],
  prereqWhy: {
    "pa-evaluate": "Testing a possible solution means evaluating both sides of the equation at that value."
  },
  unlocksWhy: {
    "pa-one-step": "Solving one-step equations uses the properties of equality that turn an equation into an equivalent one with the same solution set.",
    "pa-inequalities": "Inequalities extend the idea of a solution set from a single value to a whole range of values."
  },
  beyond: [
    { field: "Algebra I", why: "Linear, quadratic, radical and rational equations are all solved and checked using solution sets, including extraneous solutions." },
    { field: "Linear Algebra", why: "Systems of equations may have one, none or infinitely many solutions, the same three cases seen here." },
    { field: "Physics", why: "Problems are solved by writing equations that relate unknown and known quantities." }
  ],
  mistakes: [
    { wrong: `Trying to "solve" the expression <span class="m">3<i>x</i> + 5</span>.`, fix: `An expression has no equals sign and makes no claim. You can simplify or evaluate it. Only an equation can be solved.` },
    { wrong: `Substituting into one side only and deciding it "works".`, fix: `Evaluate both sides separately and compare them.` },
    { wrong: `Saying <span class="m"><i>x</i> + 1 = <i>x</i> + 2</span> has solution 0.`, fix: `Substituting 0 gives <span class="m">1 = 2</span>, false. No number works, so the solution set is ∅.` }
  ],
  practice: [
    { q: `Is <span class="m"><i>x</i> = 5</span> a solution of <span class="m">3<i>x</i> − 4 = 11</span>?`, a: `<span class="m">3(5) − 4 = 15 − 4 = 11</span>. Yes.` },
    { q: `Is <span class="m"><i>y</i> = −2</span> a solution of <span class="m"><i>y</i><sup>2</sup> + <i>y</i> = 6</span>?`, a: `<span class="m">(−2)<sup>2</sup> + (−2) = 4 − 2 = 2 ≠ 6</span>. No.` },
    { q: `Which numbers in <span class="m">{−3, 0, 2}</span> are solutions of <span class="m"><i>x</i><sup>2</sup> + <i>x</i> − 6 = 0</span>?`, a: `<span class="m">−3</span>: <span class="m">9 − 3 − 6 = 0</span>, yes. <span class="m">0</span>: <span class="m">−6 ≠ 0</span>, no. <span class="m">2</span>: <span class="m">4 + 2 − 6 = 0</span>, yes. The solutions are −3 and 2.` },
    { q: `Classify each equation as an identity or a contradiction and give its solution set: (a) <span class="m">3(<i>x</i> + 2) = 3<i>x</i> + 6</span> (b) <span class="m">2(<i>x</i> + 1) = 2<i>x</i> + 5</span>.`, a: `(a) Both sides equal <span class="m">3<i>x</i> + 6</span> for every <span class="m"><i>x</i></span>: identity, solution set ℝ. (b) The left side is <span class="m">2<i>x</i> + 2</span>, which is never <span class="m">2<i>x</i> + 5</span> since <span class="m">2 ≠ 5</span>: contradiction, solution set ∅.` }
  ],
  origin: `The equals sign was introduced by the Welsh mathematician Robert Recorde in <i>The Whetstone of Witte</i> (1557). He chose two parallel lines of the same length "bicause noe .2. thynges, can be moare equalle".`
};
