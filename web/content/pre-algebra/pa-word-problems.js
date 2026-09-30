window.ARITH = window.ARITH || {};

ARITH["pa-word-problems"] = {
  title: "Linear Equation Word Problems",
  short: "Read, name the unknown, translate, solve, check",
  grade: "Grades 7–8 · college Prealgebra (MATH 0xx)",
  hours: 8,
  voice: "mixed",
  eyebrow: "Applications · a problem-solving strategy",
  hero: `<span class="m">words → <span class="c1">equation</span> → <span class="c2"><i>x</i></span> → check</span>`,
  lede: `A word problem describes a situation in sentences. You name the <span class="m c2">unknown</span>, write the <span class="m c3">known quantities</span> in terms of it, turn the sentence into an <span class="m c1">equation</span>, solve, and check the answer against the story.`,
  plain: `<p>Most word problems are really a sentence that says two things are equal. "Adult tickets plus student tickets brought in $1,950." "The two trains together covered 285 miles." Your job is to find that sentence and rewrite it in symbols.</p>
<p>Start by deciding what you do not know and giving it a letter. Then write every other amount using that letter. If there are 300 tickets and <span class="m"><i>x</i></span> of them are adult tickets, then <span class="m">300 − <i>x</i></span> are student tickets. Now the story becomes an equation you already know how to solve.</p>
<p>The last step matters most. Put your answer back into the story, not just the equation. Does it answer the question that was asked? Does it make sense? You cannot sell 12.5 tickets or have a negative width.</p>`,
  formal: `<p>The standard <b>problem-solving strategy for word problems</b> has seven steps:</p>
<div class="display">1. <b>Read</b> the problem until you understand it. &nbsp;2. <b>Identify</b> what you are looking for.<br>3. <b>Name</b> it: choose a variable to represent it. &nbsp;4. <b>Translate</b> into an equation.<br>5. <b>Solve</b> the equation. &nbsp;6. <b>Check</b> the answer in the problem and make sure it makes sense.<br>7. <b>Answer</b> the question with a complete sentence.</div>
<p>Common types rest on a small number of relationships. <b>Consecutive integers</b> are <span class="m"><i>n</i>, <i>n</i> + 1, <i>n</i> + 2</span>; consecutive even or odd integers are <span class="m"><i>n</i>, <i>n</i> + 2, <i>n</i> + 4</span>. <b>Coin and ticket</b> problems use total value = number × value per item. <b>Uniform motion</b> uses distance = rate × time, <span class="m"><i>d</i> = <i>rt</i></span>. <b>Geometry</b> problems use a perimeter or area formula. A solution to the equation is a solution to the problem only if it satisfies the conditions of the situation (for example a whole number of people or a positive length).</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Unknown", desc: "The quantity the question asks for, named with a variable." },
    { c: "c3", sym: `300 − <i>x</i>, $8`, name: "Known quantities", desc: "The numbers given in the problem and other amounts written in terms of the unknown." },
    { c: "c1", sym: `=`, name: "Equation", desc: "The sentence of the problem that says two amounts are equal, written in symbols." }
  ],
  steps: { title: "How to solve a linear word problem", items: [
    `Read the whole problem. Underline what is being asked.`,
    `Name the <span class="m c2">unknown</span> with a variable and write what it stands for, with units.`,
    `Write the other <span class="m c3">quantities</span> in terms of that variable. A table or bar model helps.`,
    `Find the sentence that says two things are equal and translate it into an <span class="m c1">equation</span>.`,
    `Solve the equation.`,
    `Check the answer in the words of the problem and make sure it is sensible, then answer in a full sentence with units.`
  ] },
  example: {
    prompt: `A community theatre sold 300 tickets for a show. Adult tickets cost $8 and student tickets cost $5. Ticket sales totalled $1,950. How many of each kind were sold?`,
    lines: [
      { math: `<span class="m">Let <span class="c2"><i>a</i></span> = number of adult tickets</span>`, note: "Name the unknown." },
      { math: `<span class="m"><span class="c3">300</span> − <span class="c2"><i>a</i></span> = number of student tickets</span>`, note: "The two kinds add up to 300." },
      { math: `<span class="m c1"><span class="c3">8</span><span class="c2"><i>a</i></span> + <span class="c3">5</span>(<span class="c3">300</span> − <span class="c2"><i>a</i></span>) = <span class="c3">1950</span></span>`, note: "Value from adults plus value from students equals the total, using value = number × price." },
      { math: `<span class="m">8<i>a</i> + 1500 − 5<i>a</i> = 1950 &nbsp;⇒&nbsp; 3<i>a</i> + 1500 = 1950</span>`, note: "Distribute and combine like terms." },
      { math: `<span class="m">3<i>a</i> = 450 &nbsp;⇒&nbsp; <span class="c2"><i>a</i></span> = 150</span>`, note: "Subtract 1500, then divide by 3." },
      { math: `<span class="m">300 − 150 = 150</span>`, note: "Number of student tickets." },
      { math: `<span class="m">8(150) + 5(150) = 1200 + 750 = 1950 ✓</span>`, note: "Check against the story: 300 tickets and 1,950 dollars." }
    ],
    answer: `The theatre sold <span class="m">150</span> adult tickets and <span class="m">150</span> student tickets.`
  },
  why: `<p>Problems in real life do not arrive as equations. They arrive as a bill, a schedule, a recipe or a conversation. The skill of turning a situation into an equation is what makes algebra useful: once the equation is written, the solving is routine.</p>
<p>This translate-solve-check habit is the same one used in every later course. Systems of equations, optimisation in calculus and models in science all begin with naming the unknowns and writing down the relationships between them.</p>`,
  careers: [
    { role: "Restaurant manager", use: "Works out how many covers at a set price are needed to reach a nightly sales target after fixed costs." },
    { role: "Box office manager", use: "Reconciles ticket counts at different prices against the total cash taken, the same equation as a ticket problem." },
    { role: "Dispatcher", use: "Uses distance = rate × time to estimate when two vehicles travelling toward each other will meet." },
    { role: "Construction estimator", use: "Turns a client's written requirements, such as a length 3 ft more than twice the width, into dimensions and material quantities." },
    { role: "Bookkeeper", use: "Splits a lump payment into its parts, such as tax and pre-tax amount, by writing and solving a linear equation." },
    { role: "Pharmacy technician", use: "Finds the volume of stock solution needed to reach a target amount of drug from a written order." }
  ],
  life: [
    "Figuring out how many hours a job must take to earn a certain amount",
    "Splitting a shared bill when people ordered different amounts",
    "Planning when to leave so two people driving from different places arrive together",
    "Working out the price before tax from a receipt total",
    "Sizing a garden or room from a description of how its sides compare"
  ],
  fields: [
    { name: "Physics", use: "Uniform motion and simple force problems are set up by translating a description into d = rt or similar equations." },
    { name: "Chemistry", use: "Mixture and dilution problems translate amounts of solute into a linear equation." },
    { name: "Business", use: "Pricing, revenue and break-even questions are written as linear equations from a verbal description." },
    { name: "Nursing", use: "Dosage calculations translate a written order into an equation for the amount to give." }
  ],
  prereqWhy: {
    "pa-both-sides": "Many word problems, such as two plans or two travellers, give an equation with the unknown on both sides.",
    "pa-translate": "Turning phrases such as \"3 more than twice a number\" into expressions is the translate step of the strategy."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Mixture, interest and motion problems with two unknowns are modelled with systems of linear equations." },
    { field: "Calculus I", why: "Optimisation and related-rates problems begin by naming variables and writing equations from a verbal description." },
    { field: "Physics", why: "Every physics problem starts by translating a physical situation into equations among the known and unknown quantities." }
  ],
  mistakes: [
    { wrong: `Not saying what the variable means, then answering the wrong question: finding <span class="m"><i>a</i> = 150</span> adult tickets when the question asked for student tickets.`, fix: `Write "Let <span class="m"><i>a</i></span> = number of adult tickets" at the start, and reread the question before giving the answer.` },
    { wrong: `Writing consecutive odd integers as <span class="m"><i>n</i>, <i>n</i> + 1, <i>n</i> + 3</span>.`, fix: `Consecutive odd (or even) integers differ by 2: <span class="m"><i>n</i>, <i>n</i> + 2, <i>n</i> + 4</span>.` },
    { wrong: `Adding rates in a motion problem: two trains at 40 and 55 mph "are 95 miles apart after 3 hours".`, fix: `Use distance = rate × time for each: <span class="m">3(40) + 3(55) = 285</span> miles.` },
    { wrong: `Accepting an answer that does not fit the situation, such as 12.5 people or a width of −4 m.`, fix: `Check the answer in the story. If it is impossible, recheck the equation; if the equation is right, the problem has no valid solution.` }
  ],
  practice: [
    { q: `Twice a number increased by 7 is 31. Find the number.`, a: `<span class="m">2<i>n</i> + 7 = 31</span>, so <span class="m">2<i>n</i> = 24</span> and <span class="m"><i>n</i> = 12</span>. Check: <span class="m">24 + 7 = 31</span>.` },
    { q: `The sum of three consecutive odd integers is 81. Find them.`, a: `<span class="m"><i>n</i> + (<i>n</i> + 2) + (<i>n</i> + 4) = 81</span>, so <span class="m">3<i>n</i> + 6 = 81</span>, <span class="m"><i>n</i> = 25</span>. The integers are 25, 27 and 29.` },
    { q: `A rectangular patio has perimeter 54 m. Its length is 3 m more than twice its width. Find its dimensions.`, a: `Let <span class="m"><i>w</i></span> be the width; length <span class="m">2<i>w</i> + 3</span>. <span class="m">2(2<i>w</i> + 3) + 2<i>w</i> = 54</span>, so <span class="m">6<i>w</i> + 6 = 54</span> and <span class="m"><i>w</i> = 8</span>. The patio is 8 m by 19 m. Check: <span class="m">2(19) + 2(8) = 54</span>.` },
    { q: `Two trains leave the same station at the same time in opposite directions. One travels 15 mph faster than the other. After 3 hours they are 285 miles apart. Find their speeds.`, a: `<span class="m">3<i>r</i> + 3(<i>r</i> + 15) = 285</span>, so <span class="m">6<i>r</i> + 45 = 285</span> and <span class="m"><i>r</i> = 40</span>. The speeds are 40 mph and 55 mph. Check: <span class="m">120 + 165 = 285</span>.` }
  ],
  origin: `Word problems are among the oldest surviving mathematics: the Rhind Papyrus (c. 1550 BCE) poses problems about sharing bread and beer. Around 800 CE, Alcuin of York compiled <i>Propositiones ad Acuendos Juvenes</i> ("Problems to Sharpen the Young"), a Latin collection of puzzles that includes the famous river-crossing problem. The seven-step strategy used here follows the one taught in modern US college developmental algebra texts.`
};
