window.ARITH = window.ARITH || {};

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
    "a1-radical-eq": "After squaring both sides, many radical equations reduce to a linear equation that is solved this way.",
    "g-angle-pairs": "Angle relationships such as vertical or supplementary angles become linear equations like (3x + 10) + (5x − 30) = 180."
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
