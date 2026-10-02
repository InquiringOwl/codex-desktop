window.ARITH = window.ARITH || {};

ARITH["a1-sys-sub"] = {
  title: "Solving Systems by Substitution",
  short: "Solve one equation for a variable and plug it in",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Systems · exact solutions by substitution",
  hero: `<span class="m"><span class="c2"><i>y</i> = <i>f</i>(<i>x</i>)</span> &nbsp;→&nbsp; <span class="c3"><i>ax</i> + <i>b</i>(<span class="c1"><i>f</i>(<i>x</i>)</span>) = <i>c</i></span> &nbsp;→&nbsp; <span class="c5">(<i>x</i>, <i>y</i>)</span></span>`,
  lede: `Substitution solves one equation for one variable, replaces that variable in the other equation, and leaves a single equation in one unknown. The answer is exact, with no reading off a graph.`,
  plain: `<p>If one equation already tells you what <span class="m"><i>y</i></span> is in terms of <span class="m"><i>x</i></span>, say <span class="m"><i>y</i> = 3<i>x</i></span>, then anywhere you see <span class="m"><i>y</i></span> in the other equation you can write <span class="m">3<i>x</i></span> instead. The other equation now has only <span class="m"><i>x</i></span> in it, and you already know how to solve that. Once you have <span class="m"><i>x</i></span>, put it back into either equation to get <span class="m"><i>y</i></span>.</p>
<p>If neither equation is solved for a variable, pick the easiest one to isolate, usually a variable with coefficient 1 or −1. Put the expression you substitute in parentheses so any number in front multiplies all of it.</p>
<p>Sometimes the variable disappears completely. If you are left with a false statement such as <span class="m">−2 = 6</span>, the lines are parallel and there is no solution. If you are left with a true statement such as <span class="m">8 = 8</span>, the equations describe the same line and there are infinitely many solutions. These match the three cases you saw when graphing.</p>`,
  formal: `<p><b>Substitution method.</b> Given a system in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>, solve one equation for one variable, say <span class="m"><i>y</i> = <i>g</i>(<i>x</i>)</span>. Replacing <span class="m"><i>y</i></span> by <span class="m"><i>g</i>(<i>x</i>)</span> in the other equation gives an equation in <span class="m"><i>x</i></span> alone whose solutions are exactly the <span class="m"><i>x</i></span>-coordinates of the system's solutions. Each such <span class="m"><i>x</i></span> gives the solution <span class="m">(<i>x</i>, <i>g</i>(<i>x</i>))</span>.</p>
<div class="display">Unique value of <i>x</i> → one solution &nbsp;<span class="dim">(independent)</span><br>False statement, e.g. −2 = 6 → no solution, ∅ &nbsp;<span class="dim">(inconsistent)</span><br>Identity, e.g. 8 = 8 → infinitely many: {(<i>x</i>, <i>y</i>) | <i>y</i> = <i>g</i>(<i>x</i>)} &nbsp;<span class="dim">(dependent)</span></div>
<p>The method works for any system in which one variable can be isolated, including nonlinear systems such as a line and a parabola, which is why it generalises further than graphing.</p>`,
  legend: [
    { c: "c2", sym: `<i>y</i> = <i>g</i>(<i>x</i>)`, name: "Equation 1", desc: "The equation solved for one variable. Its right side is the expression you substitute." },
    { c: "c3", sym: `<i>ax</i> + <i>by</i> = <i>c</i>`, name: "Equation 2", desc: "The equation that receives the substitution and becomes an equation in one variable." },
    { c: "c1", sym: `<i>g</i>(<i>x</i>)`, name: "Substituted expression", desc: "Placed in parentheses wherever y appeared in equation 2." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>)`, name: "Solution", desc: "The ordered pair found by solving for x and back-substituting for y. It is the lines' intersection." }
  ],
  steps: { title: "How to solve a system by substitution", items: [
    `Solve one of the equations for one variable. Choose a variable with coefficient 1 or −1 if you can, to avoid fractions.`,
    `Substitute that expression, in parentheses, for the variable in the <b>other</b> equation.`,
    `Solve the resulting one-variable equation. If the variable vanishes, a false statement means no solution and a true statement means infinitely many.`,
    `Back-substitute the value into the isolated equation from step 1 to find the other variable.`,
    `Write the solution as an ordered pair and check it in <b>both</b> original equations.`
  ] },
  example: {
    prompt: `A community theatre sold 200 tickets for $1,925. Adult tickets cost $12 and child tickets cost $7. How many of each were sold?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i> + <i>c</i> = 200</span>, &nbsp; <span class="c3">12<i>a</i> + 7<i>c</i> = 1,925</span></span>`, note: "a adult tickets, c child tickets: a count equation and a money equation." },
      { math: `<span class="m c1"><i>a</i> = 200 − <i>c</i></span>`, note: "Solve the count equation for a." },
      { math: `<span class="m">12(<span class="c1">200 − <i>c</i></span>) + 7<i>c</i> = 1,925</span>`, note: "Substitute into the money equation, in parentheses." },
      { math: `<span class="m">2,400 − 12<i>c</i> + 7<i>c</i> = 1,925 &nbsp;→&nbsp; −5<i>c</i> = −475 &nbsp;→&nbsp; <i>c</i> = 95</span>`, note: "Distribute, combine like terms, divide by −5." },
      { math: `<span class="m"><i>a</i> = 200 − 95 = 105</span>`, note: "Back-substitute." },
      { math: `<span class="m c5">105 + 95 = 200 ✓, &nbsp; 12(105) + 7(95) = 1,260 + 665 = 1,925 ✓</span>`, note: "Check in both original equations." }
    ],
    answer: `The theatre sold <span class="m">105</span> adult tickets and <span class="m">95</span> child tickets.`
  },
  why: `<p>Word problems with two unknowns, such as two ticket prices, two investment rates or two ingredients, naturally give two equations. Substitution turns them into one equation you already know how to solve and gives an exact answer, even when the intersection is at an awkward point like <span class="m">(<span class="fr"><span>17</span><span>7</span></span>, −<span class="fr"><span>3</span><span>7</span></span>)</span>.</p>
<p>Substitution also works when one equation is not linear, for example finding where a thrown ball's path meets a sloped hillside. In later courses it becomes a general strategy: replace a complicated piece with a simpler variable, solve, and substitute back.</p>`,
  careers: [
    { role: "Event planner", use: "Solves a count equation and a revenue equation together to find how many of each ticket type were sold." },
    { role: "Pharmacist", use: "Solves a two-equation system to find how much of two stock solutions to mix to hit a target volume and strength." },
    { role: "Accountant", use: "Splits a total investment between two accounts from the total amount and the total interest earned." },
    { role: "Chemical engineer", use: "Solves material-balance equations by substitution to find unknown flow rates in a process stream." },
    { role: "Economist", use: "Substitutes a demand equation into a supply equation to find equilibrium price and quantity." }
  ],
  life: [
    "Working out how many of two items were bought from the total count and total price",
    "Splitting a restaurant bill when two dishes' prices are unknown but combinations are known",
    "Finding two numbers from their sum and difference",
    "Deciding how to split savings between two accounts to earn a target interest",
    "Figuring out the price of coffee and a muffin from two different orders"
  ],
  fields: [
    { name: "Chemistry", use: "Mixture and dilution problems give two equations in two unknown volumes." },
    { name: "Economics", use: "Equilibrium is found by substituting one market equation into the other." },
    { name: "Physics", use: "Kinematics problems are solved by substituting a time expression from one equation into another." },
    { name: "Engineering", use: "Circuit analysis with Kirchhoff's laws often solves for one current and substitutes it into the other loop equation." }
  ],
  prereqWhy: {
    "a1-sys-graph": "The graph shows what a solution is, and the three cases (one, none, infinitely many) match what substitution produces.",
    "a1-literal": "The first step, solving an equation such as 2x + y = 7 for y, is rearranging a literal equation."
  },
  unlocksWhy: {
    "a2-nonlinear-sys": "Substitution is the same method used on a line and a conic, replacing one variable in <span class=\"m\"><i>x</i><sup>2</sup></span> and <span class=\"m\"><i>y</i><sup>2</sup></span> equations.",
    "a1-sys-elim": "Elimination is the other standard method, and it still finishes by back-substituting the first value found."
  },
  beyond: [
    { field: "Algebra II", why: "Nonlinear systems, such as a line and a circle, are solved by substitution." },
    { field: "Linear Algebra", why: "Back-substitution is the last stage of Gaussian elimination for solving any linear system." },
    { field: "Calculus I", why: "u-substitution follows the same idea: replace an expression with a new variable, solve, then substitute back." },
    { field: "Economics", why: "Equilibrium in multi-market models is found by substituting one equation into the others." }
  ],
  mistakes: [
    { wrong: `Substituting <span class="m"><i>y</i> = 7 − 2<i>x</i></span> without parentheses: <span class="m">3<i>x</i> − 2 · 7 − 2<i>x</i> = 0</span>.`, fix: `Use parentheses so the coefficient multiplies the whole expression: <span class="m">3<i>x</i> − 2(7 − 2<i>x</i>) = 0</span>, which gives <span class="m">7<i>x</i> = 14</span>.` },
    { wrong: `Substituting back into the same equation you solved, getting <span class="m">7 = 7</span> and concluding "infinitely many solutions".`, fix: `Substitute into the <b>other</b> equation. Putting an equation into itself always gives an identity and tells you nothing.` },
    { wrong: `Stopping after finding <span class="m"><i>x</i> = 2</span>.`, fix: `A solution of a system is an ordered pair. Back-substitute to find <span class="m"><i>y</i></span> and give <span class="m">(<i>x</i>, <i>y</i>)</span>.` },
    { wrong: `Reading the result <span class="m">8 = 8</span> for <span class="m"><i>x</i> − 3<i>y</i> = 4</span>, <span class="m">2<i>x</i> − 6<i>y</i> = 8</span> as <span class="m"><i>x</i> = 8</span>.`, fix: `The variable vanished and the statement is true, so the equations are the same line: infinitely many solutions, <span class="m">{(<i>x</i>, <i>y</i>) | <i>x</i> − 3<i>y</i> = 4}</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>y</i> = 3<i>x</i></span>, <span class="m"><i>x</i> + <i>y</i> = 20</span>.`, a: `<span class="m"><i>x</i> + 3<i>x</i> = 20</span>, so <span class="m"><i>x</i> = 5</span> and <span class="m"><i>y</i> = 15</span>. Solution <span class="m">(5, 15)</span>.` },
    { q: `Solve <span class="m">2<i>x</i> + <i>y</i> = 7</span>, <span class="m">3<i>x</i> − 2<i>y</i> = 0</span>.`, a: `<span class="m"><i>y</i> = 7 − 2<i>x</i></span>. Then <span class="m">3<i>x</i> − 2(7 − 2<i>x</i>) = 0</span>, <span class="m">7<i>x</i> = 14</span>, <span class="m"><i>x</i> = 2</span>, <span class="m"><i>y</i> = 3</span>. Check: <span class="m">4 + 3 = 7</span>, <span class="m">6 − 6 = 0</span> ✓. Solution <span class="m">(2, 3)</span>.` },
    { q: `Solve <span class="m"><i>y</i> = 2<i>x</i> + 1</span>, <span class="m">4<i>x</i> − 2<i>y</i> = 6</span>.`, a: `<span class="m">4<i>x</i> − 2(2<i>x</i> + 1) = 6</span> gives <span class="m">−2 = 6</span>, a false statement. No solution (∅): the lines are parallel.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span>2</span></span> + <span class="fr"><span><i>y</i></span><span>3</span></span> = 4</span>, <span class="m"><i>x</i> − <i>y</i> = 3</span>.`, a: `<span class="m"><i>x</i> = <i>y</i> + 3</span>. Substitute and multiply by 6: <span class="m">3(<i>y</i> + 3) + 2<i>y</i> = 24</span>, <span class="m">5<i>y</i> = 15</span>, <span class="m"><i>y</i> = 3</span>, <span class="m"><i>x</i> = 6</span>. Check: <span class="m">3 + 1 = 4</span> ✓, <span class="m">6 − 3 = 3</span> ✓. Solution <span class="m">(6, 3)</span>.` }
  ]
};
