window.ARITH = window.ARITH || {};

ARITH["pa-two-step"] = {
  title: "Two-Step Equations",
  short: "Undo the constant, then undo the coefficient",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Solving equations · inverse operations in reverse order",
  hero: `<span class="m"><span class="c3"><i>a</i></span><span class="c5"><i>x</i></span> + <span class="c4"><i>b</i></span> = <span class="c2"><i>c</i></span> &nbsp;⇒&nbsp; <span class="c5"><i>x</i></span> = <span class="fr"><span><span class="c2"><i>c</i></span> − <span class="c4"><i>b</i></span></span><span class="c3"><i>a</i></span></span></span>`,
  lede: `A two-step equation does two things to <span class="m c5"><i>x</i></span>. To solve it, undo them in the opposite order: first the added constant, then the multiplier.`,
  plain: `<p>Think about how <span class="m">3<i>x</i> + 7</span> is built. You start with a number <span class="m"><i>x</i></span>, multiply it by 3, then add 7. It is like putting on socks and then shoes. To get back to bare feet, you take the shoes off first, then the socks.</p>
<p>So to solve <span class="m">3<i>x</i> + 7 = 22</span>, you first undo the "add 7" by subtracting 7 from both sides. That leaves <span class="m">3<i>x</i> = 15</span>. Then you undo the "times 3" by dividing both sides by 3, and you get <span class="m"><i>x</i> = 5</span>.</p>
<p>The rule that keeps this fair is balance. Whatever you do to one side of the equation, you do to the other side. Then the two sides stay equal, and the number you end with is the solution. You can always check it by putting it back into the original equation.</p>`,
  formal: `<p>A <b>two-step linear equation</b> in one variable has the form <span class="m"><span class="c3"><i>a</i></span><i>x</i> + <span class="c4"><i>b</i></span> = <span class="c2"><i>c</i></span></span> with <span class="m"><span class="c3"><i>a</i></span> ≠ 0</span>. It is solved with two properties of equality, each of which produces an <b>equivalent equation</b> (one with the same solution set):</p>
<div class="display"><b>Subtraction (Addition) Property:</b> if <i>A</i> = <i>B</i>, then <i>A</i> − <i>k</i> = <i>B</i> − <i>k</i><br><b>Division (Multiplication) Property:</b> if <i>A</i> = <i>B</i> and <i>k</i> ≠ 0, then <i>A</i>/<i>k</i> = <i>B</i>/<i>k</i><br><span class="c3"><i>a</i></span><i>x</i> + <span class="c4"><i>b</i></span> = <span class="c2"><i>c</i></span> &nbsp;⇔&nbsp; <span class="c3"><i>a</i></span><i>x</i> = <span class="c2"><i>c</i></span> − <span class="c4"><i>b</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>x</i></span> = <span class="fr"><span><span class="c2"><i>c</i></span> − <span class="c4"><i>b</i></span></span><span class="c3"><i>a</i></span></span></div>
<p>Because <span class="m"><span class="c3"><i>a</i></span> ≠ 0</span>, the equation has exactly one solution, and the solution set is <span class="m">{(<i>c</i> − <i>b</i>)/<i>a</i>}</span>. When the coefficient is a fraction <span class="m"><i>p</i>/<i>q</i></span>, dividing by it is the same as multiplying by its reciprocal <span class="m"><i>q</i>/<i>p</i></span>.</p>`,
  legend: [
    { c: "c3", sym: `<i>a</i>`, name: "Coefficient", desc: "The number multiplying x. It is undone last, by dividing both sides by a." },
    { c: "c4", sym: `<i>b</i>`, name: "Constant term", desc: "The number added to or subtracted from ax. It is undone first." },
    { c: "c2", sym: `<i>c</i>`, name: "Right side", desc: "The value the left side must equal. It changes as you apply each step to both sides." },
    { c: "c5", sym: `<i>x</i>`, name: "Solution", desc: "The one value of x that makes both sides equal." },
    { c: "c1", sym: `±, ÷`, name: "Current operation", desc: "The inverse operation being applied to both sides at this step." }
  ],
  steps: { title: "How to solve ax + b = c", items: [
    `Simplify each side if needed, so the equation looks like <span class="m"><span class="c3"><i>a</i></span><i>x</i> + <span class="c4"><i>b</i></span> = <span class="c2"><i>c</i></span></span>.`,
    `Undo the constant: subtract <span class="m c4"><i>b</i></span> from both sides (or add it back if it was subtracted).`,
    `Undo the coefficient: divide both sides by <span class="m c3"><i>a</i></span>, or multiply by its reciprocal if <span class="m c3"><i>a</i></span> is a fraction.`,
    `Watch signs. If <span class="m c3"><i>a</i></span> is negative, divide by the negative number.`,
    `Check: substitute the value into the original equation and confirm both sides match.`
  ] },
  example: {
    prompt: `A plumber charges a $65 service fee plus $48 per hour of labour. Your bill is $257. How many hours did the plumber work?`,
    lines: [
      { math: `<span class="m">Let <span class="c5"><i>h</i></span> = hours worked</span>`, note: "Name the unknown." },
      { math: `<span class="m"><span class="c3">48</span><span class="c5"><i>h</i></span> + <span class="c4">65</span> = <span class="c2">257</span></span>`, note: "Hourly charge times hours, plus the fixed fee, equals the bill." },
      { math: `<span class="m"><span class="c3">48</span><span class="c5"><i>h</i></span> = 257 − 65 = 192</span>`, note: "Subtract the 65 dollar fee from both sides." },
      { math: `<span class="m"><span class="c5"><i>h</i></span> = 192 ÷ 48 = 4</span>`, note: "Divide both sides by 48." },
      { math: `<span class="m">48(4) + 65 = 192 + 65 = 257 ✓</span>`, note: "Check in the original equation." }
    ],
    answer: `The plumber worked <span class="m">4</span> hours.`
  },
  why: `<p>Many real prices and measurements follow the pattern "a fixed amount plus a rate times a quantity": a taxi fare, a phone bill, a contractor's quote, a temperature conversion. Whenever you know the total and want the quantity, you are solving a two-step equation.</p>
<p>The idea of undoing operations in reverse order is the core of all equation solving. Multi-step equations, inequalities, formulas and even exponential and logarithmic equations later on are solved by the same reasoning, just with more steps.</p>`,
  careers: [
    { role: "Electrician", use: "Works out how many hours of labour fit a quoted price by subtracting the fixed call-out fee and dividing by the hourly rate." },
    { role: "Nurse", use: "Finds how long an IV bag has left by subtracting the volume already infused from the total and dividing by the rate in mL per hour." },
    { role: "Sales representative", use: "Computes how many units must be sold to reach a pay target when pay is a base salary plus a commission per unit." },
    { role: "Event planner", use: "Finds the number of guests a budget allows when a venue charges a room fee plus a per-person catering price." },
    { role: "Meteorologist", use: "Converts between Fahrenheit and Celsius with F = 1.8C + 32, subtracting 32 and dividing by 1.8 to go back." },
    { role: "Fleet manager", use: "Estimates the number of miles a rental can be driven within a budget of a daily rate plus a per-mile charge." }
  ],
  life: [
    "Figuring out how many hours a repair took from the total on the bill",
    "Working out how many rides a transit card covers after the card fee",
    "Finding how many months it takes to save for something after an initial deposit",
    "Checking a taxi or rideshare fare against the distance",
    "Converting an oven temperature from Fahrenheit to Celsius"
  ],
  fields: [
    { name: "Physics", use: "Kinematics formulas such as v = u + at are two-step equations when solved for time or acceleration." },
    { name: "Chemistry", use: "Temperature conversions such as F = 1.8C + 32 are solved backward with two inverse operations." },
    { name: "Business", use: "Cost models of a fixed cost plus a variable cost per unit are solved for the number of units." },
    { name: "Computer science", use: "Solving for an index in an address formula such as base + stride × i uses the same two inverse steps." }
  ],
  prereqWhy: {
    "pa-one-step": "Each of the two steps is a one-step equation, solved with a single inverse operation applied to both sides."
  },
  unlocksWhy: {
    "pa-both-sides": "After you collect the x terms on one side, what remains is a two-step equation.",
    "pa-formulas": "Finding a missing dimension from a formula like P = 2l + 2w is a two-step equation.",
    "pa-solve-ineq": "Linear inequalities are solved with the same two inverse steps, plus the rule for multiplying or dividing by a negative.",
    "pa-linear-graphs": "Finding intercepts and solving for y in an equation like 2x + 3y = 6 uses two-step solving."
  },
  beyond: [
    { field: "Algebra I", why: "Every multi-step, literal and absolute value equation is reduced to a two-step equation at its last stage." },
    { field: "Algebra II", why: "Exponential and logarithmic equations are solved by isolating the power, which starts with the same undo-in-reverse steps." },
    { field: "Physics", why: "Solving motion and force equations for one quantity is routine two-step rearranging." }
  ],
  mistakes: [
    { wrong: `Dividing only one term: from <span class="m">3<i>x</i> + 7 = 22</span> writing <span class="m"><i>x</i> + 7 = <span class="fr"><span>22</span><span>3</span></span></span>.`, fix: `Subtract the constant first: <span class="m">3<i>x</i> = 15</span>, then divide: <span class="m"><i>x</i> = 5</span>. If you do divide first, divide every term: <span class="m"><i>x</i> + <span class="fr"><span>7</span><span>3</span></span> = <span class="fr"><span>22</span><span>3</span></span></span>.` },
    { wrong: `Losing the negative sign: from <span class="m">−4<i>x</i> = −24</span> writing <span class="m"><i>x</i> = −6</span>.`, fix: `Divide by −4, a negative number: <span class="m"><i>x</i> = −24 ÷ (−4) = 6</span>.` },
    { wrong: `In <span class="m"><span class="fr"><span><i>x</i> − 3</span><span>4</span></span> = −2</span>, adding 3 first to get <span class="m"><span class="fr"><span><i>x</i></span><span>4</span></span> = 1</span>.`, fix: `Here the subtraction happens before the division, so undo the division first: <span class="m"><i>x</i> − 3 = −8</span>, then <span class="m"><i>x</i> = −5</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">3<i>x</i> + 7 = 22</span>.`, a: `<span class="m">3<i>x</i> = 15</span>, so <span class="m"><i>x</i> = 5</span>. Check: <span class="m">15 + 7 = 22</span>.` },
    { q: `Solve <span class="m">−4<i>x</i> + 9 = −15</span>.`, a: `<span class="m">−4<i>x</i> = −24</span>, so <span class="m"><i>x</i> = 6</span>. Check: <span class="m">−24 + 9 = −15</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span><i>x</i></span><span>5</span></span> − 3 = 4</span>.`, a: `<span class="m"><span class="fr"><span><i>x</i></span><span>5</span></span> = 7</span>, so <span class="m"><i>x</i> = 35</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span>2</span><span>3</span></span><i>x</i> + 1 = −7</span>.`, a: `<span class="m"><span class="fr"><span>2</span><span>3</span></span><i>x</i> = −8</span>. Multiply by <span class="m"><span class="fr"><span>3</span><span>2</span></span></span>: <span class="m"><i>x</i> = −12</span>. Check: <span class="m"><span class="fr"><span>2</span><span>3</span></span>(−12) + 1 = −8 + 1 = −7</span>.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (c. 1550 BCE) contains "aha" problems such as Problem 24, "a quantity and its seventh added together become 19", solved by the method of false position. The balancing approach of doing the same thing to both sides was set out systematically by al-Khwarizmi in Baghdad around 820 CE.`
};
