window.ARITH = window.ARITH || {};

ARITH["a1-rational-eq"] = {
  title: "Rational Equations & Applications",
  short: "Multiply by the LCD, solve, then reject extraneous roots",
  grade: "Grade 10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational expressions · equations, work and motion",
  hero: `<span class="m"><span class="fr"><span>1</span><span>6</span></span> + <span class="fr"><span>1</span><span><i>t</i></span></span> = <span class="fr"><span>1</span><span>4</span></span> &nbsp;<span class="c4">× 12<i>t</i></span>&nbsp; ⇒ &nbsp;2<i>t</i> + 12 = 3<i>t</i> &nbsp;⇒&nbsp; <span class="c5"><i>t</i> = 12</span></span>`,
  lede: `A rational equation has a variable in a denominator. Multiply every term by the <span class="c4">LCD</span> to clear the fractions, solve, and then check each answer. Any value that makes an original denominator zero is an <span class="c3">extraneous solution</span> and must be rejected.`,
  plain: `<p>An equation like <span class="m">5/<i>x</i> + 1/3 = 2</span> has the unknown in a denominator. The fractions are what make it hard, so get rid of them. Multiply every term on both sides by the least common denominator, here <span class="m">3<i>x</i></span>. You get <span class="m">15 + <i>x</i> = 6<i>x</i></span>, which is an ordinary equation.</p>
<p>There is a catch. Multiplying by an expression with <span class="m"><i>x</i></span> in it can create answers that do not work in the original. If an answer makes any original denominator zero, it is <b>extraneous</b>: the original equation is undefined there. So before you solve, write down the excluded values. After you solve, cross off any answer on that list. If every answer is crossed off, the equation has no solution.</p>
<p>Two classic applications use these equations. In <b>work problems</b>, a person who finishes a job in <span class="m"><i>t</i></span> hours does <span class="m">1/<i>t</i></span> of the job each hour, and rates add when people work together. In <b>motion problems</b>, time equals distance divided by rate, and two trips that take the same time give an equation with the rates in the denominators.</p>`,
  formal: `<p>A <b>rational equation</b> is an equation containing at least one rational expression with a variable in the denominator. Its domain excludes every zero of every denominator. Multiplying both sides by the LCD, a nonzero polynomial on the domain, produces a polynomial equation whose solution set contains the original solution set but may contain more.</p>
<div class="display">solution set = {solutions of the cleared equation} − {excluded values}<br><b>Work</b>: &nbsp;<span class="fr"><span>1</span><span><i>t</i><sub>1</sub></span></span> + <span class="fr"><span>1</span><span><i>t</i><sub>2</sub></span></span> = <span class="fr"><span>1</span><span><i>t</i></span></span> &nbsp;<span class="dim">(rates in jobs per unit time add)</span><br><b>Uniform motion</b>: &nbsp;<i>t</i> = <span class="fr"><span><i>d</i></span><span><i>r</i></span></span></div>
<p>A value that solves the cleared equation but is excluded from the original domain is an <b>extraneous solution</b>. A <b>proportion</b> <span class="m"><i>a</i>/<i>b</i> = <i>c</i>/<i>d</i></span> may be solved by cross-multiplying, <span class="m"><i>ad</i> = <i>bc</i></span>, which is the special case of multiplying by <span class="m"><i>bd</i></span>; the same check applies.</p>`,
  legend: [
    { c: "c4", sym: `× LCD`, name: "Least common denominator", desc: "The expression every term is multiplied by to clear the fractions." },
    { c: "c5", sym: `<i>x</i> = …`, name: "Valid solution", desc: "A solution of the cleared equation that does not make any original denominator zero." },
    { c: "c3", sym: `<i>x</i> = …`, name: "Extraneous solution", desc: "A value produced by the algebra that makes an original denominator zero. It is rejected." }
  ],
  steps: { title: "How to solve a rational equation", items: [
    `Factor every denominator and list the excluded values.`,
    `Find the <span class="c4">LCD</span> of all the denominators.`,
    `Multiply <b>every term</b> on both sides by the LCD and simplify, so no fractions remain.`,
    `Solve the resulting linear or quadratic equation.`,
    `Compare each answer with the excluded values. Reject any <span class="c3">extraneous solution</span>.`,
    `Check each <span class="c5">remaining solution</span> in the original equation. If none remain, the solution set is <span class="m">∅</span>.`
  ] },
  example: {
    prompt: `Printer A can print a batch of reports in 6 hours. Working together, printers A and B take 4 hours. How long would printer B take on its own?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>1</span><span>6</span></span> + <span class="fr"><span>1</span><span><i>t</i></span></span> = <span class="fr"><span>1</span><span>4</span></span>, &nbsp; <span class="c3"><i>t</i> ≠ 0</span></span>`, note: "Let t be B's time in hours. Rates are fractions of the job per hour, and they add." },
      { math: `<span class="m">LCD = <span class="c4">12<i>t</i></span></span>`, note: "The smallest expression divisible by 6, t and 4." },
      { math: `<span class="m"><span class="c4">12<i>t</i></span> · <span class="fr"><span>1</span><span>6</span></span> + <span class="c4">12<i>t</i></span> · <span class="fr"><span>1</span><span><i>t</i></span></span> = <span class="c4">12<i>t</i></span> · <span class="fr"><span>1</span><span>4</span></span></span>`, note: "Multiply every term by the LCD." },
      { math: `<span class="m">2<i>t</i> + 12 = 3<i>t</i></span>`, note: "The fractions are gone." },
      { math: `<span class="m c5"><i>t</i> = 12</span>`, note: "Subtract 2t from both sides. 12 is not excluded." },
      { math: `<span class="m"><span class="fr"><span>1</span><span>6</span></span> + <span class="fr"><span>1</span><span>12</span></span> = <span class="fr"><span>2</span><span>12</span></span> + <span class="fr"><span>1</span><span>12</span></span> = <span class="fr"><span>3</span><span>12</span></span> = <span class="fr"><span>1</span><span>4</span></span> ✓</span>`, note: "Check in the original equation." }
    ],
    answer: `Printer B alone would take <span class="m c5">12 hours</span>.`
  },
  why: `<p>Rates, averages and shared work are all fractions with the unknown in the denominator. How long two crews take together, how fast a plane flies given the wind, what average speed gets you there on time, what resistor to add to reach a target resistance: each is a rational equation.</p>
<p>The extraneous-solution check is a habit that matters everywhere later. Whenever you multiply by something that could be zero, square both sides, or take logarithms, the algebra can create answers that are not real solutions. Checking against the original domain is the cure.</p>`,
  careers: [
    { role: "Construction project manager", use: "Solves 1/a + 1/b = 1/t to estimate how long two crews will take to finish a job together." },
    { role: "Pilot", use: "Solves equations such as d₁/(s + w) = d₂/(s − w), for two legs flown in equal times with and against the wind, to find the wind speed." },
    { role: "Electrical engineer", use: "Solves 1/R = 1/R₁ + 1/R₂ for the resistor needed to reach a target parallel resistance." },
    { role: "Water treatment operator", use: "Calculates how long it takes to fill or drain a tank when inlet and outlet pipes run at different rates." },
    { role: "Pharmacist", use: "Solves concentration equations such as amount/(volume + x) = target to find how much diluent to add." },
    { role: "Photographer", use: "Uses the thin-lens equation 1/f = 1/dₒ + 1/dᵢ to find the subject distance for a given lens and sensor distance." }
  ],
  life: [
    "Estimating how long two people take to clean the house together",
    "Working out how long to fill a pool with a hose while a drain is partly open",
    "Finding the speed you need on the way back to average a target speed for a round trip",
    "Figuring out how much water to add to juice concentrate to reach a certain strength"
  ],
  fields: [
    { name: "Physics", use: "Lens, mirror and parallel-circuit equations are rational equations solved for one quantity." },
    { name: "Chemistry", use: "Dilution and concentration problems give equations with the unknown volume in a denominator." },
    { name: "Engineering", use: "Flow rates through pipes and pumps working together combine as reciprocals." },
    { name: "Economics", use: "Average cost equations set a rational expression equal to a target price." }
  ],
  prereqWhy: {
    "a1-rational-add": "Solving begins with finding the LCD of all the denominators, the same construction used to add rational expressions."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Rational functions, their asymptotes and rational inequalities build on solving rational equations and tracking the domain." },
    { field: "Precalculus", why: "Finding intercepts and intersections of rational functions requires solving rational equations." },
    { field: "Physics", why: "Optics, circuit and relative-motion problems are routinely set up and solved as rational equations." },
    { field: "Chemistry", why: "Equilibrium and dilution calculations lead to rational equations in an unknown concentration or volume." }
  ],
  mistakes: [
    { wrong: `Keeping an answer that makes a denominator zero: from <span class="m"><span class="fr"><span><i>x</i></span><span><i>x</i> − 2</span></span> + 1 = <span class="fr"><span>2</span><span><i>x</i> − 2</span></span></span> reporting <span class="m"><i>x</i> = 2</span>.`, fix: `<span class="m"><i>x</i> = 2</span> is excluded, so it is extraneous. The equation has no solution: <span class="m">∅</span>.` },
    { wrong: `Multiplying only the fractions by the LCD and leaving whole-number terms alone.`, fix: `Every term on both sides is multiplied. In <span class="m"><span class="fr"><span>5</span><span><i>x</i></span></span> + <span class="fr"><span>1</span><span>3</span></span> = 2</span>, the 2 becomes <span class="m">6<i>x</i></span>.` },
    { wrong: `Adding the times in a work problem: "6 hours and 12 hours make 18 hours together".`, fix: `Add the <b>rates</b>: <span class="m"><span class="fr"><span>1</span><span>6</span></span> + <span class="fr"><span>1</span><span>12</span></span> = <span class="fr"><span>1</span><span>4</span></span></span> of the job per hour, so together they take 4 hours, less than either alone.` }
  ],
  practice: [
    { q: `Solve <span class="m"><span class="fr"><span>5</span><span><i>x</i></span></span> + <span class="fr"><span>1</span><span>3</span></span> = 2</span>.`, a: `LCD <span class="m">3<i>x</i></span>, <span class="m"><i>x</i> ≠ 0</span>: <span class="m">15 + <i>x</i> = 6<i>x</i></span>, <span class="m"><i>x</i> = 3</span>. Check: <span class="m"><span class="fr"><span>5</span><span>3</span></span> + <span class="fr"><span>1</span><span>3</span></span> = 2</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i> + 1</span><span>4</span></span> = <span class="fr"><span>6</span><span><i>x</i> − 1</span></span></span>.`, a: `<span class="m"><i>x</i> ≠ 1</span>. Cross-multiply: <span class="m">(<i>x</i> + 1)(<i>x</i> − 1) = 24</span>, <span class="m"><i>x</i><sup>2</sup> = 25</span>, <span class="m"><i>x</i> = ±5</span>. Both check: <span class="m"><span class="fr"><span>6</span><span>4</span></span> = <span class="fr"><span>6</span><span>4</span></span></span> and <span class="m"><span class="fr"><span>−4</span><span>4</span></span> = <span class="fr"><span>6</span><span>−6</span></span> = −1</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span><i>x</i> − 2</span></span> + 1 = <span class="fr"><span>2</span><span><i>x</i> − 2</span></span></span>.`, a: `<span class="m"><i>x</i> ≠ 2</span>. Multiply by <span class="m"><i>x</i> − 2</span>: <span class="m"><i>x</i> + <i>x</i> − 2 = 2</span>, <span class="m"><i>x</i> = 2</span>. That value is excluded, so it is extraneous. <b>No solution</b>, <span class="m">∅</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span><i>x</i> − 2</span></span> = <span class="fr"><span>4</span><span><i>x</i><sup>2</sup> − 2<i>x</i></span></span></span>.`, a: `<span class="m"><i>x</i><sup>2</sup> − 2<i>x</i> = <i>x</i>(<i>x</i> − 2)</span>, so <span class="m"><i>x</i> ≠ 0, 2</span>. Multiply by <span class="m"><i>x</i>(<i>x</i> − 2)</span>: <span class="m"><i>x</i><sup>2</sup> = 4</span>, <span class="m"><i>x</i> = ±2</span>. Reject <span class="m"><i>x</i> = 2</span> (extraneous). Solution <span class="m"><i>x</i> = −2</span>. Check: <span class="m"><span class="fr"><span>−2</span><span>−4</span></span> = <span class="fr"><span>1</span><span>2</span></span></span> and <span class="m"><span class="fr"><span>4</span><span>8</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>.` }
  ]
};
