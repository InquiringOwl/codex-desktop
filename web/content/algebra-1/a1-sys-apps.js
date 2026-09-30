window.ARITH = window.ARITH || {};

ARITH["a1-sys-apps"] = {
  title: "Applications of Systems",
  short: "Two unknowns, two facts: set up and solve",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Systems of equations · modelling with two unknowns",
  hero: `<span class="m"><span class="c2"><i>x</i></span> + <span class="c3"><i>y</i></span> = total &nbsp;&nbsp; <i>p</i><span class="c2"><i>x</i></span> + <i>q</i><span class="c3"><i>y</i></span> = value &nbsp;⇒&nbsp; <span class="c1">(<i>x</i>, <i>y</i>)</span></span>`,
  lede: `Many practical problems involve two unknown quantities and give two separate facts about them. Each fact becomes one equation, and the <span class="c1">solution</span> of the system answers the problem.`,
  plain: `<p>Word problems with two unknowns are easier with two variables than with one. Name each unknown with its own letter and write down what it stands for, with units. Then look for two separate pieces of information. Usually one is about <b>how many</b> (the pieces add up to a total) and the other is about <b>how much</b> (each piece has a price, a strength or a rate).</p>
<p>A few types show up again and again. <b>Ticket and coin problems</b>: a count equation and a value equation. <b>Mixture problems</b>: an amount equation and an amount-of-ingredient equation, where a 20% solution contributes <span class="m">0.20<i>x</i></span> of the ingredient. <b>Motion with a current or wind</b>: speed downstream is boat plus current, upstream is boat minus current. <b>Break-even</b>: set cost equal to revenue.</p>
<p>Once the system is written, solve it by substitution or elimination. Then answer the question in words and check the numbers against the original story, not only against your equations.</p>`,
  formal: `<p>A <b>mathematical model</b> of a two-unknown problem is a system of two linear equations whose solution set corresponds to the possible answers. Standard templates:</p>
<div class="display"><b>Count and value</b>: &nbsp;<i>x</i> + <i>y</i> = <i>N</i>, &nbsp; <i>px</i> + <i>qy</i> = <i>V</i><br><b>Mixture</b>: &nbsp;<i>x</i> + <i>y</i> = <i>T</i>, &nbsp; <i>r</i><sub>1</sub><i>x</i> + <i>r</i><sub>2</sub><i>y</i> = <i>r</i><sub>mix</sub><i>T</i><br><b>Uniform motion with current</b>: &nbsp;(<i>b</i> + <i>c</i>)<i>t</i><sub>1</sub> = <i>d</i><sub>1</sub>, &nbsp; (<i>b</i> − <i>c</i>)<i>t</i><sub>2</sub> = <i>d</i><sub>2</sub><br><b>Break-even</b>: &nbsp;<i>C</i>(<i>x</i>) = <i>F</i> + <i>vx</i>, &nbsp; <i>R</i>(<i>x</i>) = <i>px</i>, &nbsp; <i>C</i>(<i>x</i>) = <i>R</i>(<i>x</i>)</div>
<p>The system's solution must also satisfy the problem's implicit constraints, such as nonnegative amounts or whole-number counts. A system with no solution means the stated conditions are contradictory; one with infinitely many means the two facts are not independent and do not determine the answer.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "First unknown", desc: "The first quantity you are asked to find, such as litres of the weaker solution or number of adult tickets." },
    { c: "c3", sym: `<i>y</i>`, name: "Second unknown", desc: "The second quantity, such as litres of the stronger solution or number of student tickets." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Solution", desc: "The pair that satisfies both facts at once. On the graph it is where the two lines cross." }
  ],
  steps: { title: "How to solve a word problem with a system", items: [
    `Read the problem and identify the two unknowns. Assign <span class="m c2"><i>x</i></span> and <span class="m c3"><i>y</i></span> and write what each means, with units.`,
    `Translate the first fact into an equation, often a count or total amount.`,
    `Translate the second fact into an equation, often a value, ingredient amount, distance or cost.`,
    `Solve the system by substitution or elimination.`,
    `Check the <span class="c1">solution</span> against the words of the problem, and that it makes sense (no negative litres, whole numbers of tickets).`,
    `Answer the question in a complete sentence with units.`
  ] },
  example: {
    prompt: `A lab technician needs 60 L of a 30% acid solution. She has a 20% solution and a 50% solution. How many litres of each should she mix?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>x</i></span> = L of 20%, &nbsp; <span class="c3"><i>y</i></span> = L of 50%</span>`, note: "Name the two unknowns." },
      { math: `<span class="m"><span class="c2"><i>x</i></span> + <span class="c3"><i>y</i></span> = 60</span>`, note: "Total volume." },
      { math: `<span class="m">0.20<span class="c2"><i>x</i></span> + 0.50<span class="c3"><i>y</i></span> = 0.30(60) = 18</span>`, note: "Litres of pure acid: each part contributes its percent of its volume." },
      { math: `<span class="m">0.20<i>x</i> + 0.50(60 − <i>x</i>) = 18</span>`, note: "Substitute y = 60 − x from the first equation." },
      { math: `<span class="m">30 − 0.30<i>x</i> = 18 &nbsp;⇒&nbsp; <span class="c1"><i>x</i> = 40</span>, &nbsp; <span class="c1"><i>y</i> = 20</span></span>`, note: "Solve, then back-substitute." },
      { math: `<span class="m">0.20(40) + 0.50(20) = 8 + 10 = 18 ✓</span>`, note: "Check: 18 L of acid in 60 L is 30%." }
    ],
    answer: `Mix <span class="m c1">40 L</span> of the 20% solution with <span class="m c1">20 L</span> of the 50% solution.`
  },
  why: `<p>Real decisions often involve two quantities tied together by two constraints: how many of two products to make, how to split money between two accounts, how much of two ingredients to blend. Setting up the system is the valuable skill. Once it is written down, solving is routine.</p>
<p>This is also the first taste of mathematical modelling, the process at the centre of applied science: choose variables, translate relationships into equations, solve, and interpret. With more unknowns and inequalities, the same approach becomes linear programming, which airlines, factories and shipping companies use to plan operations.</p>`,
  careers: [
    { role: "Pharmacist", use: "Mixes two stock concentrations of a solution or cream to prepare a prescribed strength using an amount equation and a concentration equation." },
    { role: "Box office manager", use: "Works out how many adult and child tickets were sold from the total count and the total revenue." },
    { role: "Small business owner", use: "Finds the break-even sales volume by setting the cost equation equal to the revenue equation." },
    { role: "Financial planner", use: "Splits a client's investment between two accounts with different interest rates to reach a target annual income." },
    { role: "Pilot", use: "Uses ground speeds with and against the wind on two legs of a route to solve for the aircraft's airspeed and the wind speed." },
    { role: "Food scientist", use: "Blends two ingredients with different fat or sugar percentages to hit a target nutritional content." }
  ],
  life: [
    "Figuring out how many of each coin are in a jar from the count and the total",
    "Deciding how to split savings between two accounts to earn a target amount of interest",
    "Mixing two strengths of plant fertiliser or cleaning solution to get the one you need",
    "Working out your paddling speed and the river current from two timed trips",
    "Seeing how many items a side business must sell to cover its costs"
  ],
  fields: [
    { name: "Chemistry", use: "Mixture and dilution problems with two solutions are two-variable linear systems." },
    { name: "Business", use: "Break-even analysis and cost-volume-profit models set cost and revenue equations equal." },
    { name: "Physics", use: "Relative-motion problems with a current or wind give two equations in two speeds." },
    { name: "Operations research", use: "Linear programming extends systems of equations to optimise resources under constraints." }
  ],
  prereqWhy: {
    "a1-sys-elim": "Word-problem systems usually come out in standard form, and elimination (along with substitution) is the tool used to solve them."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Linear Algebra", why: "Models with many unknowns are written as matrix equations Ax = b and solved systematically." },
    { field: "Economics", why: "Supply and demand equilibrium and input-output models are systems of equations built from economic facts." },
    { field: "Operations research", why: "Linear programming finds the best solution within a system of linear constraints." },
    { field: "Chemistry", why: "Stoichiometry and solution preparation routinely require setting up and solving linear systems." }
  ],
  mistakes: [
    { wrong: `Adding percentages in a mixture: "20% and 50% make 70%" or "the average is 35%".`, fix: `Track the amount of pure ingredient: <span class="m">0.20<i>x</i> + 0.50<i>y</i></span> litres of acid. The mix strength depends on how much of each is used.` },
    { wrong: `Using the same speed both ways in a current problem.`, fix: `With the current the speed is <span class="m"><i>b</i> + <i>c</i></span>; against it the speed is <span class="m"><i>b</i> − <i>c</i></span>. Use distance = rate × time for each leg.` },
    { wrong: `Stopping after finding <span class="m"><i>x</i></span>, or not saying what the numbers mean.`, fix: `Find both unknowns, check them in the original story, and answer in a sentence with units.` }
  ],
  practice: [
    { q: `Two numbers add to 52 and differ by 14. Find them.`, a: `<span class="m"><i>x</i> + <i>y</i> = 52</span>, <span class="m"><i>x</i> − <i>y</i> = 14</span>. Add: <span class="m">2<i>x</i> = 66</span>, <span class="m"><i>x</i> = 33</span>, <span class="m"><i>y</i> = 19</span>.` },
    { q: `A theatre sold 500 tickets for $4,850. Adult tickets cost $12 and student tickets $7. How many of each were sold?`, a: `<span class="m"><i>a</i> + <i>s</i> = 500</span>, <span class="m">12<i>a</i> + 7<i>s</i> = 4850</span>. Substitute <span class="m"><i>s</i> = 500 − <i>a</i></span>: <span class="m">5<i>a</i> + 3500 = 4850</span>, <span class="m"><i>a</i> = 270</span>, <span class="m"><i>s</i> = 230</span>. Check: <span class="m">3240 + 1610 = 4850</span>.` },
    { q: `A boat travels 36 miles downstream in 2 hours and returns upstream in 3 hours. Find the boat's speed in still water and the speed of the current.`, a: `<span class="m"><i>b</i> + <i>c</i> = 36/2 = 18</span>, <span class="m"><i>b</i> − <i>c</i> = 36/3 = 12</span>. Add: <span class="m">2<i>b</i> = 30</span>, so <span class="m"><i>b</i> = 15</span> mph and <span class="m"><i>c</i> = 3</span> mph.` },
    { q: `A bakery has fixed monthly costs of $2,400 and spends $6 to make each cake, which sells for $14. How many cakes must it sell to break even, and what is the revenue then?`, a: `<span class="m"><i>C</i> = 2400 + 6<i>x</i></span>, <span class="m"><i>R</i> = 14<i>x</i></span>. Set equal: <span class="m">8<i>x</i> = 2400</span>, <span class="m"><i>x</i> = 300</span> cakes. Revenue <span class="m">14 · 300 = $4,200</span>, equal to cost <span class="m">2400 + 1800</span>.` }
  ]
};
