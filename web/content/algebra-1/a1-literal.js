window.ARITH = window.ARITH || {};

ARITH["a1-literal"] = {
  title: "Literal Equations & Formulas",
  short: "Solve a formula for any one of its letters",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Solving equations · formulas with several variables",
  hero: `<span class="m"><span class="c2"><i>A</i></span> = <span class="fr"><span>1</span><span>2</span></span><span class="c2"><i>b</i></span><span class="c1"><i>h</i></span> &nbsp;⇒&nbsp; <span class="c1"><i>h</i></span> = <span class="fr"><span>2<span class="c2"><i>A</i></span></span><span class="c2"><i>b</i></span></span></span>`,
  lede: `A literal equation has more than one letter. Solving it for one letter means isolating that letter, using the same inverse operations as with numbers.`,
  plain: `<p>A formula like <span class="m"><i>d</i> = <i>rt</i></span> (distance equals rate times time) is written to find <span class="m"><i>d</i></span>. But you often know the distance and the speed and want the time. Instead of plugging in numbers and solving each time, you can rearrange the formula once: <span class="m"><i>t</i> = <i>d</i>/<i>r</i></span>.</p>
<p>The method is the same as for any equation. Pick the <b>target variable</b>. Treat every other letter as if it were a known number. Then undo what is being done to the target, in reverse order, doing the same thing to both sides.</p>
<p>The one new situation is when the target appears in two terms. Then you gather those terms on one side and factor the target out, as in <span class="m"><i>A</i> = <i>P</i> + <i>Prt</i> = <i>P</i>(1 + <i>rt</i>)</span>. After that, one division finishes the job.</p>`,
  formal: `<p>A <b>literal equation</b> is an equation in two or more variables. To <b>solve for</b> a variable means to produce an equivalent equation with that variable alone on one side and an expression not containing it on the other. The properties of equality apply unchanged, with one condition: division is valid only by an expression that is nonzero.</p>
<div class="display"><i>ax</i> + <i>b</i> = <i>c</i> &nbsp;⇔&nbsp; <i>x</i> = <span class="fr"><span><i>c</i> − <i>b</i></span><span><i>a</i></span></span> &nbsp;<span class="dim">(<i>a</i> ≠ 0)</span><br><i>A</i> = <i>P</i> + <i>Prt</i> &nbsp;⇔&nbsp; <i>A</i> = <i>P</i>(1 + <i>rt</i>) &nbsp;⇔&nbsp; <i>P</i> = <span class="fr"><span><i>A</i></span><span>1 + <i>rt</i></span></span> &nbsp;<span class="dim">(1 + <i>rt</i> ≠ 0)</span></div>
<p>Solving <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span> for <span class="m"><i>y</i></span> gives <span class="m"><i>y</i> = −(<i>A</i>/<i>B</i>)<i>x</i> + <i>C</i>/<i>B</i></span> for <span class="m"><i>B</i> ≠ 0</span>, which is how a line in standard form is converted to slope-intercept form.</p>`,
  legend: [
    { c: "c1", sym: `<i>h</i>`, name: "Target variable", desc: "The letter you are solving for. It ends up alone on one side." },
    { c: "c2", sym: `<i>A</i>, <i>b</i>`, name: "Other variables", desc: "Every other letter in the formula. Treat each as a known, nonzero number while you rearrange." },
    { c: "c3", sym: `×, ÷, ±`, name: "Operation", desc: "The inverse operation applied to both sides at the current step." }
  ],
  steps: { title: "How to solve a formula for one variable", items: [
    `Circle the <span class="c1">target variable</span>. Treat every <span class="c2">other letter</span> as a constant.`,
    `Clear fractions by multiplying both sides by the denominators, and remove parentheses that contain the target.`,
    `Move every term that does not contain the target to the other side by adding or subtracting.`,
    `If the target is in more than one term, factor it out.`,
    `Divide both sides by the target's coefficient, noting that this expression must not be zero.`,
    `Check by substituting simple numbers into the original and rearranged formulas.`
  ] },
  example: {
    prompt: `A European recipe says to bake at 180 °C. Your oven is marked in Fahrenheit. Solve <span class="m"><i>C</i> = <span class="fr"><span>5</span><span>9</span></span>(<i>F</i> − 32)</span> for <span class="m"><i>F</i></span>, then convert.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>C</i></span> = <span class="fr"><span>5</span><span>9</span></span>(<span class="c1"><i>F</i></span> − 32)</span>`, note: "The target is F." },
      { math: `<span class="m"><span class="fr"><span>9</span><span>5</span></span><span class="c2"><i>C</i></span> = <span class="c1"><i>F</i></span> − 32</span>`, note: "Multiply both sides by 9/5, the reciprocal of 5/9." },
      { math: `<span class="m"><span class="c1"><i>F</i></span> = <span class="fr"><span>9</span><span>5</span></span><span class="c2"><i>C</i></span> + 32</span>`, note: "Add 32 to both sides." },
      { math: `<span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span>(180) + 32 = 324 + 32 = 356</span>`, note: "Substitute C = 180." },
      { math: `<span class="m"><span class="fr"><span>5</span><span>9</span></span>(356 − 32) = <span class="fr"><span>5</span><span>9</span></span>(324) = 180 ✓</span>`, note: "Check in the original formula." }
    ],
    answer: `<span class="m"><i>F</i> = <span class="fr"><span>9</span><span>5</span></span><i>C</i> + 32</span>, so 180 °C is <span class="m">356</span> °F. Set the oven to about 350–360 °F.`
  },
  why: `<p>Every trade and science has its working formulas, and the one you need is often the same formula solved for a different letter. Rearranging it yourself means you only have to remember one version, and it lets spreadsheets and programs compute the quantity you actually want.</p>
<p>Solving for one variable in terms of others is also the first step of the substitution method for systems of equations, and it is how you turn a standard-form line into slope-intercept form. Later courses solve formulas involving powers, roots and logarithms the same way.</p>`,
  careers: [
    { role: "Electrician", use: "Rearranges Ohm's law V = IR to I = V/R or R = V/I depending on which quantity is measured." },
    { role: "Nurse", use: "Solves the IV flow-rate formula (volume × drop factor) ÷ time for time to find how long an infusion will run." },
    { role: "Loan officer", use: "Solves I = Prt for r to state the annual simple interest rate implied by a loan's total interest." },
    { role: "Pilot", use: "Rearranges d = rt to compute flight time from distance and ground speed, or ground speed from distance and time." },
    { role: "Civil engineer", use: "Solves area and volume formulas for a missing dimension, such as the depth of a trench needed for a given volume." },
    { role: "Chemist", use: "Solves the ideal gas law PV = nRT for whichever variable is unknown in an experiment." }
  ],
  life: [
    "Converting an oven temperature between Celsius and Fahrenheit",
    "Working out how long a trip will take from distance and average speed",
    "Finding the width of a garden bed from its perimeter and length",
    "Figuring out the interest rate on a simple loan from the interest paid",
    "Finding how tall a triangular sign must be to have a given area"
  ],
  fields: [
    { name: "Physics", use: "Kinematic and force equations are rearranged for the unknown quantity before numbers are substituted." },
    { name: "Chemistry", use: "Gas laws and concentration formulas are solved for pressure, volume, moles or temperature as needed." },
    { name: "Finance", use: "Interest and payment formulas are solved for rate, time or principal." },
    { name: "Engineering", use: "Design formulas are rearranged to size a part so it meets a required strength or capacity." }
  ],
  prereqWhy: {
    "a1-multi-step": "Rearranging a formula uses the same sequence of steps as a multi-step equation, with letters in place of numbers.",
    "pa-formulas": "You need to know common formulas and what each letter stands for before you rearrange them."
  },
  unlocksWhy: {
    "a1-sys-sub": "Substitution starts by solving one equation of the system for one variable in terms of the other."
  },
  beyond: [
    { field: "Physics", why: "Nearly every problem requires solving a formula such as v² = u² + 2as or F = ma for one quantity." },
    { field: "Algebra II", why: "Solving formulas for variables inside powers, roots and logarithms extends the same method." },
    { field: "Calculus I", why: "Implicit differentiation and related-rates problems require solving an equation for one quantity in terms of others." },
    { field: "Chemistry", why: "Gas laws, dilution formulas and rate laws are solved for different variables in different problems." }
  ],
  mistakes: [
    { wrong: `Dividing only part of a side: from <span class="m"><i>P</i> = 2<i>l</i> + 2<i>w</i></span> writing <span class="m"><i>w</i> = <i>P</i> − 2<i>l</i>/2</span>.`, fix: `Subtract first, then divide the whole side: <span class="m"><i>w</i> = <span class="fr"><span><i>P</i> − 2<i>l</i></span><span>2</span></span></span>.` },
    { wrong: `Leaving the target on both sides: from <span class="m"><i>A</i> = <i>P</i> + <i>Prt</i></span> writing <span class="m"><i>P</i> = <i>A</i> − <i>Prt</i></span>.`, fix: `Factor the target out first: <span class="m"><i>A</i> = <i>P</i>(1 + <i>rt</i>)</span>, so <span class="m"><i>P</i> = <span class="fr"><span><i>A</i></span><span>1 + <i>rt</i></span></span></span>.` },
    { wrong: `Solving <span class="m"><i>C</i> = <span class="fr"><span>5</span><span>9</span></span>(<i>F</i> − 32)</span> by adding 32 first: <span class="m"><i>C</i> + 32 = <span class="fr"><span>5</span><span>9</span></span><i>F</i></span>.`, fix: `The subtraction is inside the parentheses, so it is done first and undone last. Multiply by <span class="m"><span class="fr"><span>9</span><span>5</span></span></span> first, then add 32.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>d</i> = <i>rt</i></span> for <span class="m"><i>t</i></span>.`, a: `Divide both sides by <span class="m"><i>r</i></span>: <span class="m"><i>t</i> = <span class="fr"><span><i>d</i></span><span><i>r</i></span></span></span>, for <span class="m"><i>r</i> ≠ 0</span>.` },
    { q: `Solve <span class="m"><i>P</i> = 2<i>l</i> + 2<i>w</i></span> for <span class="m"><i>w</i></span>.`, a: `<span class="m"><i>P</i> − 2<i>l</i> = 2<i>w</i></span>, so <span class="m"><i>w</i> = <span class="fr"><span><i>P</i> − 2<i>l</i></span><span>2</span></span></span>, which also equals <span class="m"><span class="fr"><span><i>P</i></span><span>2</span></span> − <i>l</i></span>.` },
    { q: `Solve <span class="m">3<i>x</i> + 4<i>y</i> = 12</span> for <span class="m"><i>y</i></span>.`, a: `<span class="m">4<i>y</i> = 12 − 3<i>x</i></span>, so <span class="m"><i>y</i> = 3 − <span class="fr"><span>3</span><span>4</span></span><i>x</i></span>, or <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>4</span></span><i>x</i> + 3</span>.` },
    { q: `Solve <span class="m"><i>A</i> = <i>P</i> + <i>Prt</i></span> for <span class="m"><i>P</i></span>. Then find the principal that grows to $5,900 at 6% simple interest in 3 years.`, a: `<span class="m"><i>A</i> = <i>P</i>(1 + <i>rt</i>)</span>, so <span class="m"><i>P</i> = <span class="fr"><span><i>A</i></span><span>1 + <i>rt</i></span></span></span>. Then <span class="m"><i>P</i> = 5900 ÷ (1 + 0.06 × 3) = 5900 ÷ 1.18 = $5,000</span>.` }
  ],
  origin: `François Viète's <i>In artem analyticem isagoge</i> (1591) was the first work to use letters systematically for known quantities as well as unknowns, writing vowels for unknowns and consonants for knowns. That made it possible to state and rearrange general formulas instead of solving one numerical case at a time.`
};
