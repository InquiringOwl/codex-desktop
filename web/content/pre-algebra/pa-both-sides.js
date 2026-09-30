window.ARITH = window.ARITH || {};

ARITH["pa-both-sides"] = {
  title: "Equations with Variables on Both Sides",
  short: "Collect the x terms on one side, constants on the other",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Solving equations · collecting like terms across the equals sign",
  hero: `<span class="m"><span class="c2"><i>ax</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>cx</i></span> + <span class="c3"><i>d</i></span> &nbsp;⇒&nbsp; <span class="c5"><i>x</i></span> = <span class="fr"><span><span class="c3"><i>d</i></span> − <span class="c3"><i>b</i></span></span><span><span class="c2"><i>a</i></span> − <span class="c2"><i>c</i></span></span></span></span>`,
  lede: `When the unknown appears on both sides, move all the <span class="m c2"><i>x</i></span> terms to one side and all the <span class="m c3">constants</span> to the other. What is left is a two-step equation.`,
  plain: `<p>Suppose <span class="m">5<i>x</i> − 3 = 2<i>x</i> + 12</span>. There are <span class="m"><i>x</i></span>'s on both sides, so you cannot just undo one thing. The fix is to gather them. Subtract <span class="m">2<i>x</i></span> from both sides and the right side loses its <span class="m"><i>x</i></span> terms: <span class="m">3<i>x</i> − 3 = 12</span>. Now it is a two-step equation, and <span class="m"><i>x</i> = 5</span>.</p>
<p>Think of a balance scale with bags of marbles and loose marbles on each pan. Every bag holds the same number. Taking two bags off each pan keeps it level. Taking the same loose marbles off each pan keeps it level too. You keep doing that until one pan has only bags and the other has only marbles.</p>
<p>Sometimes the <span class="m"><i>x</i></span>'s cancel out completely. If you end with something false like <span class="m">6 = 5</span>, there is no number that works. If you end with something always true like <span class="m">−7 = −7</span>, every number works.</p>`,
  formal: `<p>A <b>linear equation in one variable</b> can always be rewritten as <span class="m"><span class="c2"><i>ax</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>cx</i></span> + <span class="c3"><i>d</i></span></span> by simplifying each side (distributing and combining like terms). Applying the Subtraction Property of Equality twice gives the equivalent equation</p>
<div class="display">(<span class="c2"><i>a</i></span> − <span class="c2"><i>c</i></span>)<i>x</i> = <span class="c3"><i>d</i></span> − <span class="c3"><i>b</i></span></div>
<p>There are three cases. If <span class="m"><i>a</i> ≠ <i>c</i></span>, the equation is <b>conditional</b> with exactly one solution, <span class="m"><i>x</i> = (<i>d</i> − <i>b</i>)/(<i>a</i> − <i>c</i>)</span>. If <span class="m"><i>a</i> = <i>c</i></span> and <span class="m"><i>b</i> = <i>d</i></span>, it is an <b>identity</b>: every real number is a solution, and the solution set is <span class="m">ℝ</span>. If <span class="m"><i>a</i> = <i>c</i></span> and <span class="m"><i>b</i> ≠ <i>d</i></span>, it is a <b>contradiction</b>: there is no solution, and the solution set is the empty set <span class="m">∅</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>ax</i>, <i>cx</i>`, name: "Variable terms", desc: "The x terms on each side. They are collected on one side, usually the side with the larger coefficient." },
    { c: "c3", sym: `<i>b</i>, <i>d</i>`, name: "Constants", desc: "The number terms on each side. They are collected on the other side." },
    { c: "c1", sym: `−<i>cx</i>, −<i>b</i>`, name: "Current operation", desc: "The term being subtracted (or added) on both sides at this step." },
    { c: "c5", sym: `<i>x</i>`, name: "Solution", desc: "The value that makes the two sides equal, or a note that there is no solution or that all reals work." }
  ] ,
  steps: { title: "How to solve an equation with x on both sides", items: [
    `Simplify each side: distribute to clear parentheses and combine like terms.`,
    `Collect the <span class="m c2"><i>x</i></span> terms on one side by adding or subtracting a variable term on both sides.`,
    `Collect the <span class="m c3">constants</span> on the other side by adding or subtracting a number on both sides.`,
    `Divide both sides by the coefficient of <span class="m"><i>x</i></span>.`,
    `If the <span class="m"><i>x</i></span> terms cancel, read the result: a true statement means all real numbers, a false one means no solution.`,
    `Check by substituting into the original equation. Both sides should give the same number.`
  ] },
  example: {
    prompt: `Gym A charges a $40 joining fee plus $25 per month. Gym B charges a $100 joining fee plus $15 per month. After how many months will the total cost be the same?`,
    lines: [
      { math: `<span class="m">Let <span class="c5"><i>m</i></span> = number of months</span>`, note: "Name the unknown." },
      { math: `<span class="m"><span class="c3">40</span> + <span class="c2">25<i>m</i></span> = <span class="c3">100</span> + <span class="c2">15<i>m</i></span></span>`, note: "Total cost of Gym A equals total cost of Gym B." },
      { math: `<span class="m"><span class="c3">40</span> + <span class="c2">10<i>m</i></span> = <span class="c3">100</span></span>`, note: "Subtract 15m from both sides to collect the variable terms on the left." },
      { math: `<span class="m"><span class="c2">10<i>m</i></span> = <span class="c3">60</span></span>`, note: "Subtract 40 from both sides to collect the constants on the right." },
      { math: `<span class="m"><span class="c5"><i>m</i></span> = 6</span>`, note: "Divide both sides by 10." },
      { math: `<span class="m">40 + 25(6) = 190, &nbsp;100 + 15(6) = 190 ✓</span>`, note: "Check: both gyms cost 190 dollars after 6 months." }
    ],
    answer: `The two gyms cost the same, $190, after <span class="m">6</span> months. After that, Gym B is cheaper.`
  },
  why: `<p>Comparing two options is one of the most common real uses of algebra. Two phone plans, two job offers, buying versus renting, two car loans: each option is "a fixed amount plus a rate", and setting them equal tells you the break-even point where one option starts to beat the other.</p>
<p>This is also the general linear equation. Once you can handle x on both sides, parentheses and the special cases of no solution and all reals, you can solve any linear equation in one variable. The same moves are used for systems of equations, where two lines cross at the point where their expressions are equal.</p>`,
  careers: [
    { role: "Financial advisor", use: "Compares a plan with a higher up-front charge and lower flat yearly fee against one with the reverse, to find the year their total costs are equal." },
    { role: "Small business owner", use: "Compares two supplier quotes of the form setup fee plus unit price to find the order size where they cost the same." },
    { role: "Energy auditor", use: "Computes the payback time where a more expensive efficient appliance and a cheaper one have equal total cost including running cost." },
    { role: "Logistics coordinator", use: "Sets two carriers' rate formulas equal to find the shipment weight where it pays to switch carriers." },
    { role: "Human resources specialist", use: "Compares salary-plus-commission offers to find the sales level where two pay plans give the same income." },
    { role: "Real estate agent", use: "Shows clients the number of years after which buying costs less than renting under stated assumptions." }
  ],
  life: [
    "Choosing between two phone or streaming plans with different fees and monthly rates",
    "Deciding whether a membership card pays for itself at a store",
    "Comparing a car rental with a daily rate against one with a per-mile charge",
    "Working out when two people saving at different rates will have the same amount",
    "Checking when an LED bulb has paid back its higher price in energy savings"
  ],
  fields: [
    { name: "Economics", use: "Break-even analysis sets cost equal to revenue, both linear in the quantity produced." },
    { name: "Physics", use: "Finding when two objects moving at constant speeds meet sets two position formulas equal." },
    { name: "Chemistry", use: "Mixture and dilution problems set the amount of solute before and after mixing equal, with the unknown volume on both sides." },
    { name: "Accounting", use: "Comparing depreciation or lease schedules sets two linear cost formulas equal." }
  ],
  prereqWhy: {
    "pa-two-step": "After the variable terms are collected on one side, the remaining equation is a two-step equation.",
    "pa-like-terms": "Each side must be simplified by distributing and combining like terms before the terms can be collected."
  },
  unlocksWhy: {
    "pa-word-problems": "Comparison problems such as two plans or two travellers produce equations with the unknown on both sides.",
    "a1-multi-step": "Multi-step equations add fractions, decimals and nested parentheses to this same collect-and-solve method."
  },
  beyond: [
    { field: "Algebra I", why: "Solving systems of linear equations by substitution reduces to one equation with the variable on both sides." },
    { field: "Linear Algebra", why: "The three outcomes here, one solution, none or infinitely many, are the same three outcomes for any linear system." },
    { field: "Economics", why: "Break-even and market-equilibrium problems set two linear expressions equal and solve." }
  ],
  mistakes: [
    { wrong: `Moving a term without changing its sign: from <span class="m">5<i>x</i> − 3 = 2<i>x</i> + 12</span> writing <span class="m">7<i>x</i> − 3 = 12</span>.`, fix: `"Moving" a term means subtracting it from both sides. Subtract <span class="m">2<i>x</i></span>: <span class="m">3<i>x</i> − 3 = 12</span>.` },
    { wrong: `Distributing to only the first term: writing <span class="m">4(<i>x</i> − 2)</span> as <span class="m">4<i>x</i> − 2</span>.`, fix: `Multiply every term inside: <span class="m">4(<i>x</i> − 2) = 4<i>x</i> − 8</span>.` },
    { wrong: `Reaching <span class="m">0 = 0</span> and writing <span class="m"><i>x</i> = 0</span>, or reaching <span class="m">6 = 5</span> and writing <span class="m"><i>x</i> = 1</span>.`, fix: `A true statement with no variable means every real number is a solution (an identity). A false one means there is no solution (a contradiction), and the solution set is <span class="m">∅</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">5<i>x</i> − 3 = 2<i>x</i> + 12</span>.`, a: `Subtract <span class="m">2<i>x</i></span>: <span class="m">3<i>x</i> − 3 = 12</span>. Add 3: <span class="m">3<i>x</i> = 15</span>, so <span class="m"><i>x</i> = 5</span>. Check: <span class="m">22 = 22</span>.` },
    { q: `Solve <span class="m">7 − 2(<i>x</i> − 3) = 3<i>x</i> − 2</span>.`, a: `Distribute: <span class="m">7 − 2<i>x</i> + 6 = 3<i>x</i> − 2</span>, so <span class="m">13 − 2<i>x</i> = 3<i>x</i> − 2</span>. Add <span class="m">2<i>x</i></span> and add 2: <span class="m">15 = 5<i>x</i></span>, so <span class="m"><i>x</i> = 3</span>. Check: <span class="m">7 − 0 = 7</span> and <span class="m">9 − 2 = 7</span>.` },
    { q: `Solve <span class="m">3(<i>x</i> + 2) = 3<i>x</i> + 5</span>.`, a: `<span class="m">3<i>x</i> + 6 = 3<i>x</i> + 5</span>. Subtract <span class="m">3<i>x</i></span>: <span class="m">6 = 5</span>, which is false. No solution; the solution set is <span class="m">∅</span>.` },
    { q: `Solve <span class="m">2(3<i>x</i> − 4) + 1 = 6<i>x</i> − 7</span>.`, a: `<span class="m">6<i>x</i> − 8 + 1 = 6<i>x</i> − 7</span>, so <span class="m">6<i>x</i> − 7 = 6<i>x</i> − 7</span>. Subtract <span class="m">6<i>x</i></span>: <span class="m">−7 = −7</span>, which is always true. It is an identity; every real number is a solution, and the solution set is <span class="m">ℝ</span>.` }
  ],
  origin: `The two basic moves are named in the title of al-Khwarizmi's book <i>al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala</i> (Baghdad, c. 820 CE). <i>Al-jabr</i> ("restoring") moved a subtracted term to the other side as an added term, and <i>al-muqābala</i> ("balancing") cancelled equal terms that appear on both sides. The word "algebra" comes from <i>al-jabr</i>.`
};
