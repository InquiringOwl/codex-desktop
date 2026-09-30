window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["a1-exp-functions"] = {
  title: "Exponential Growth & Decay",
  short: "Multiply by the same factor b every step: y = a·bˣ",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Functions · constant percent change",
  hero: `<span class="m c1"><i>f</i>(<i>x</i>) = <span class="c2"><i>a</i></span> · <span class="c3"><i>b</i></span><sup><i>x</i></sup></span>`,
  lede: `An exponential function starts at <span class="m c2"><i>a</i></span> and is multiplied by the same <b>growth factor</b> <span class="m c3"><i>b</i></span> for every unit increase in <span class="m"><i>x</i></span>. If <span class="m c3"><i>b</i> &gt; 1</span> it grows; if <span class="m c3">0 &lt; <i>b</i> &lt; 1</span> it decays.`,
  plain: `<p>A linear function changes by the same <b>amount</b> each step: add $50 every month. An exponential function changes by the same <b>percent</b> each step: grow 5% every year, lose half every 6 hours. Repeated percent change means repeated multiplication, and repeated multiplication is an exponent.</p>
<p>In <span class="m"><i>y</i> = <span class="c2"><i>a</i></span> · <span class="c3"><i>b</i></span><sup><i>x</i></sup></span>, the number <span class="m c2"><i>a</i></span> is where you start, the value when <span class="m"><i>x</i> = 0</span>. The number <span class="m c3"><i>b</i></span> is what you multiply by each step. A 5% increase means multiplying by <span class="m">1.05</span>. A 15% decrease means you keep 85%, so you multiply by <span class="m">0.85</span>.</p>
<p>Early on, a linear function can look bigger. Given enough time, any exponential growth function passes any linear one, because its increases themselves keep growing. Decay works the other way: the curve drops quickly at first, then flattens out toward zero without ever reaching it.</p>`,
  formal: `<p>An <b>exponential function</b> has the form <span class="m"><i>f</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup></span> with <span class="m"><i>a</i> ≠ 0</span>, <span class="m"><i>b</i> &gt; 0</span> and <span class="m"><i>b</i> ≠ 1</span>. For <span class="m"><i>a</i> &gt; 0</span>:</p>
<div class="display">domain: (−∞, ∞) &nbsp;&nbsp; range: (0, ∞) &nbsp;&nbsp; <i>y</i>-intercept: (0, <i>a</i>)<br>horizontal asymptote: <i>y</i> = 0<br><i>b</i> &gt; 1: growth, <i>b</i> = 1 + <i>r</i> &nbsp;&nbsp; 0 &lt; <i>b</i> &lt; 1: decay, <i>b</i> = 1 − <i>r</i> &nbsp;<span class="dim">(<i>r</i> = rate as a decimal)</span></div>
<p>The key property is <span class="m"><i>f</i>(<i>x</i> + 1) = <i>b</i> · <i>f</i>(<i>x</i>)</span>: equal steps in <span class="m"><i>x</i></span> multiply the output by the same factor. If a quantity doubles every <span class="m"><i>T</i></span> units, <span class="m"><i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub> · 2<sup><i>t</i>/<i>T</i></sup></span>; if it has half-life <span class="m"><i>T</i></span>, <span class="m"><i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub> · (<span class="fr"><span>1</span><span>2</span></span>)<sup><i>t</i>/<i>T</i></sup></span>. Fractional exponents such as <span class="m">2<sup>2.5</sup></span> are defined by the rules for rational exponents, so <span class="m"><i>t</i></span> need not be a whole number.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Initial value", desc: "The output when x = 0, and the y-intercept of the graph. In money problems it is the starting amount." },
    { c: "c3", sym: `<i>b</i>`, name: "Growth or decay factor", desc: "The number the output is multiplied by for each unit step in x. b = 1 + r for growth and b = 1 − r for decay." },
    { c: "c1", sym: `<i>f</i>(<i>x</i>)`, name: "The curve", desc: "The output after x steps. It never touches the x-axis, which is the horizontal asymptote y = 0." },
    { c: "c4", sym: `<i>T</i>`, name: "Doubling time or half-life", desc: "The time it takes the quantity to double (growth) or halve (decay). It stays the same no matter where you start." }
  ],
  steps: { title: "How to build and use an exponential model", items: [
    `Find the starting amount <span class="m c2"><i>a</i></span>, the value at time 0.`,
    `Turn the percent rate into a factor: growth <span class="m c3"><i>b</i> = 1 + <i>r</i></span>, decay <span class="m c3"><i>b</i> = 1 − <i>r</i></span>, with <span class="m"><i>r</i></span> as a decimal.`,
    `If you are given a doubling time or half-life <span class="m"><i>T</i></span> instead, use base 2 or <span class="m">½</span> with exponent <span class="m"><i>t</i>/<i>T</i></span>.`,
    `Write <span class="m c1"><i>f</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup></span> and state what <span class="m"><i>x</i></span> measures and its units.`,
    `Evaluate by computing the power first, then multiplying by <span class="m c2"><i>a</i></span>. Order of operations matters: <span class="m"><i>a</i> · <i>b</i><sup><i>x</i></sup> ≠ (<i>ab</i>)<sup><i>x</i></sup></span>.`,
    `Sanity-check: a growth answer should exceed <span class="m c2"><i>a</i></span>, a decay answer should be between 0 and <span class="m c2"><i>a</i></span>.`
  ] },
  example: {
    prompt: `A car is bought for $24,000 and loses 15% of its value each year. Write a model for its value and find the value after 5 years.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i> = 24000</span>, &nbsp; <span class="c3"><i>b</i> = 1 − 0.15 = 0.85</span></span>`, note: "Start value 24,000. Losing 15% means keeping 85% each year." },
      { math: `<span class="m c1"><i>V</i>(<i>t</i>) = 24000 · 0.85<sup><i>t</i></sup></span>`, note: "t is years since purchase and V is value in dollars." },
      { math: `<span class="m"><i>V</i>(5) = 24000 · 0.85<sup>5</sup></span>`, note: "Substitute t = 5." },
      { math: `<span class="m">0.85<sup>5</sup> ≈ 0.443705</span>`, note: "Compute the power first." },
      { math: `<span class="m c1"><i>V</i>(5) ≈ 10648.93</span>`, note: "Multiply by 24,000." },
      { math: `<span class="m"><i>V</i>(4) ≈ 12528.15, &nbsp; <i>V</i>(5) ≈ 10648.93</span>`, note: "Check: the value falls below half the price, 12,000, between years 4 and 5." }
    ],
    answer: `After 5 years the car is worth about <span class="m">$10,648.93</span>, less than half its purchase price.`
  },
  why: `<p>Anything that changes by a steady percent follows this model: compound interest, inflation, population growth, the spread of an infection in its early stage, the loss of value of a car, the decay of a medicine in the bloodstream and of a radioactive isotope. Recognising a constant percent change, and knowing it is not a constant amount, is one of the most useful habits in quantitative thinking.</p>
<p>In later math, exponential functions lead directly to logarithms, which undo them and let you solve for the time. They are also the model behind continuous growth with base <span class="m"><i>e</i></span> in precalculus and calculus, and the geometric sequences in the next topic are the same idea restricted to whole-number steps.</p>`,
  careers: [
    { role: "Financial advisor", use: "Projects retirement balances with compound growth such as 10,000(1.07)ᵗ to show clients the effect of starting early." },
    { role: "Pharmacist", use: "Uses a drug's half-life to estimate how much remains in the body after a number of hours and when the next dose is due." },
    { role: "Epidemiologist", use: "Fits early outbreak case counts to an exponential model to estimate the doubling time of an infection." },
    { role: "Insurance adjuster", use: "Values vehicles and equipment with declining-balance depreciation, a fixed percent lost per year." },
    { role: "Radiation safety officer", use: "Calculates how long a radioactive source must be stored before its activity decays below a safe level." },
    { role: "Microbiologist", use: "Predicts bacterial counts in a culture from the generation time, the time for the population to double." }
  ],
  life: [
    "Seeing how a savings account or retirement fund grows with compound interest",
    "Estimating what a car or phone will be worth in a few years",
    "Understanding how credit card debt grows if only minimum payments are made",
    "Reading news about how fast an infection or a social media post is spreading",
    "Knowing how long caffeine or a medication stays in your system"
  ],
  fields: [
    { name: "Finance", use: "Compound interest, inflation and present value are all exponential functions of time." },
    { name: "Biology", use: "Unrestricted population growth and bacterial reproduction are modelled with doubling times." },
    { name: "Chemistry and nuclear physics", use: "Radioactive decay and first-order reactions follow exponential decay with a fixed half-life." },
    { name: "Pharmacology", use: "Drug elimination from the bloodstream is modelled with a half-life to plan dosing schedules." }
  ],
  prereqWhy: {
    "a1-functions": "An exponential model is a function, so you need function notation, domain and range to evaluate it and describe its graph.",
    "a1-rational-exp": "Half-life and doubling-time models use exponents such as t/T that are often fractions, which rational exponents define.",
    "percent-apps": "Compound interest and percent change are the everyday form of exponential growth, and turning a rate into the factor 1 + r comes from there."
  },
  unlocksWhy: {
    "a1-sequences": "A geometric sequence is an exponential function evaluated at whole numbers, with the common ratio playing the role of b."
  },
  beyond: [
    { field: "Algebra II", why: "Logarithms are introduced as the inverses of exponential functions to solve for the time in growth and decay problems." },
    { field: "Precalculus", why: "Continuous growth A = Pe^(rt) and the natural base e extend this model to change that happens every instant." },
    { field: "Calculus I", why: "The exponential function is the one whose rate of change is proportional to its value, which is the basis of differential equations for growth and decay." },
    { field: "Statistics", why: "Exponential distributions and log-transformed data both rely on understanding exponential curves." }
  ],
  mistakes: [
    { wrong: `Using the rate as the factor: writing a 15% decrease as <span class="m">24000 · 0.15<sup><i>t</i></sup></span>.`, fix: `The factor is what is <b>kept</b>: <span class="m">1 − 0.15 = 0.85</span>, so <span class="m">24000 · 0.85<sup><i>t</i></sup></span>. For a 15% increase use <span class="m">1.15</span>.` },
    { wrong: `Multiplying before taking the power: <span class="m">3 · 2<sup>4</sup> = 6<sup>4</sup> = 1296</span>.`, fix: `Exponents come first: <span class="m">3 · 2<sup>4</sup> = 3 · 16 = 48</span>.` },
    { wrong: `Treating a percent change as a constant amount: "grows 10% a year, so after 3 years it is up 30%".`, fix: `Percent changes compound: <span class="m">1.1<sup>3</sup> = 1.331</span>, an increase of 33.1%, not 30%.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 500(1.04)<sup><i>x</i></sup></span>, state the initial value, whether it is growth or decay, and the percent rate.`, a: `Initial value <span class="m">500</span>. Since <span class="m">1.04 &gt; 1</span> it is growth, at a rate of <span class="m">4%</span> per unit of <span class="m"><i>x</i></span>.` },
    { q: `Evaluate <span class="m"><i>f</i>(3)</span> for <span class="m"><i>f</i>(<i>x</i>) = 3 · 2<sup><i>x</i></sup></span>.`, a: `<span class="m"><i>f</i>(3) = 3 · 2<sup>3</sup> = 3 · 8 = 24</span>.` },
    { q: `An exponential function passes through <span class="m">(0, 5)</span> and <span class="m">(2, 45)</span>. Find <span class="m"><i>f</i>(<i>x</i>) = <i>a</i> · <i>b</i><sup><i>x</i></sup></span>.`, a: `From <span class="m">(0, 5)</span>, <span class="m"><i>a</i> = 5</span>. Then <span class="m">5<i>b</i><sup>2</sup> = 45</span>, so <span class="m"><i>b</i><sup>2</sup> = 9</span> and <span class="m"><i>b</i> = 3</span> (the base must be positive). <span class="m"><i>f</i>(<i>x</i>) = 5 · 3<sup><i>x</i></sup></span>.` },
    { q: `A patient takes 80 mg of a drug with a half-life of 4 hours. How much remains after 10 hours?`, a: `<span class="m"><i>A</i>(<i>t</i>) = 80(<span class="fr"><span>1</span><span>2</span></span>)<sup><i>t</i>/4</sup></span>, so <span class="m"><i>A</i>(10) = 80(<span class="fr"><span>1</span><span>2</span></span>)<sup>2.5</sup> = 80 · 2<sup>−2.5</sup> ≈ 80 · 0.17678 ≈ 14.14</span> mg.` }
  ],
  origin: `In <i>An Essay on the Principle of Population</i> (1798), Thomas Malthus argued that population, left unchecked, grows in a "geometrical ratio" while food supply grows only in an "arithmetical ratio", the contrast between exponential and linear growth. Ernest Rutherford introduced the idea of a radioactive half-life in the early 1900s.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-sys-elim"] = {
  title: "Solving Systems by Elimination",
  short: "Scale and add equations so one variable cancels",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Systems of equations · the addition method",
  hero: `<span class="m"><span class="c2">2<i>x</i> + 3<i>y</i> = 12</span> &nbsp;+&nbsp; <span class="c3">4<i>x</i> − 3<i>y</i> = 6</span> &nbsp;⇒&nbsp; 6<i>x</i> = 18 &nbsp;⇒&nbsp; <span class="c5">(3, 2)</span></span>`,
  lede: `If both sides of two true equations are added, the result is still true. Elimination chooses multipliers so that one variable's coefficients become opposites, and adding the equations makes that variable disappear.`,
  plain: `<p>Substitution works well when one equation already says <span class="m"><i>y</i> = …</span>. When both equations are in standard form, such as <span class="m">3<i>x</i> + 2<i>y</i> = 19</span>, solving for a variable brings in fractions. Elimination avoids that.</p>
<p>The idea is simple. Two equal things added to two equal things give equal totals. So you can add the left sides together and the right sides together. If one equation has <span class="m">+3<i>y</i></span> and the other has <span class="m">−3<i>y</i></span>, the <span class="m"><i>y</i></span> terms cancel and you are left with one equation in <span class="m"><i>x</i></span>.</p>
<p>Usually the coefficients do not match at first. You fix that by multiplying one or both equations by a number, which does not change their solutions. Once you know one variable, substitute it back into either original equation to find the other. If both variables cancel, you have a special case: a true statement like <span class="m">0 = 0</span> means infinitely many solutions, and a false one like <span class="m">0 = 7</span> means none.</p>`,
  formal: `<p>For a system of two linear equations in standard form</p>
<div class="display"><span class="c2"><i>a</i><sub>1</sub><i>x</i> + <i>b</i><sub>1</sub><i>y</i> = <i>c</i><sub>1</sub></span><br><span class="c3"><i>a</i><sub>2</sub><i>x</i> + <i>b</i><sub>2</sub><i>y</i> = <i>c</i><sub>2</sub></span></div>
<p>replacing an equation by a nonzero multiple of itself, or by its sum with a multiple of the other equation, produces an <b>equivalent system</b> with the same solution set. Choosing multipliers <span class="m"><i>m</i>, <i>n</i></span> with <span class="m"><i>mb</i><sub>1</sub> + <i>nb</i><sub>2</sub> = 0</span> eliminates <span class="m"><i>y</i></span>. The result is one of three cases:</p>
<div class="display">one equation <i>kx</i> = <i>d</i>, <i>k</i> ≠ 0: &nbsp;one solution <span class="dim">(consistent, independent)</span><br>0 = 0: &nbsp;infinitely many solutions <span class="dim">(consistent, dependent; same line)</span><br>0 = <i>d</i>, <i>d</i> ≠ 0: &nbsp;no solution, ∅ <span class="dim">(inconsistent; parallel lines)</span></div>`,
  legend: [
    { c: "c2", sym: `Eq. 1`, name: "First equation", desc: "The first equation of the system, possibly multiplied by a constant." },
    { c: "c3", sym: `Eq. 2`, name: "Second equation", desc: "The second equation, possibly multiplied by a constant so its coefficients line up with the first." },
    { c: "c1", sym: `±<i>ky</i>`, name: "Eliminated variable", desc: "The variable whose coefficients are made opposites, so it cancels when the equations are added." },
    { c: "c5", sym: `(<i>x</i>, <i>y</i>)`, name: "Solution", desc: "The ordered pair that satisfies both equations, found by solving and then back-substituting." }
  ],
  steps: { title: "How to solve a system by elimination", items: [
    `Write both equations in standard form <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span>, with like terms lined up. Clear any fractions or decimals.`,
    `Pick a variable to <span class="c1">eliminate</span>. Multiply one or both equations so its coefficients are opposites, such as <span class="m">6<i>x</i></span> and <span class="m">−6<i>x</i></span>. The least common multiple of the coefficients gives the smallest multipliers.`,
    `Add the equations. The chosen variable cancels.`,
    `Solve the resulting one-variable equation.`,
    `Substitute that value into either original equation to find the other variable.`,
    `Check the <span class="c5">ordered pair</span> in <b>both</b> original equations. If both variables cancelled, state "infinitely many solutions" or "no solution".`
  ] },
  example: {
    prompt: `At a café, 3 lattes and 2 muffins cost $19.00, and 2 lattes and 5 muffins cost $22.75. What does each item cost?`,
    lines: [
      { math: `<span class="m"><span class="c2">3<i>L</i> + 2<i>M</i> = 19</span>, &nbsp; <span class="c3">2<i>L</i> + 5<i>M</i> = 22.75</span></span>`, note: "Let L be the price of a latte and M the price of a muffin, in dollars." },
      { math: `<span class="m"><span class="c2">6<i>L</i> + 4<i>M</i> = 38</span>, &nbsp; <span class="c3">−6<i>L</i> − 15<i>M</i> = −68.25</span></span>`, note: "Multiply the first equation by 2 and the second by −3 so the L terms are opposites." },
      { math: `<span class="m">−11<i>M</i> = −30.25</span>`, note: "Add the equations. The L terms cancel." },
      { math: `<span class="m"><i>M</i> = 2.75</span>`, note: "Divide both sides by −11." },
      { math: `<span class="m">3<i>L</i> + 2(2.75) = 19 &nbsp;⇒&nbsp; 3<i>L</i> = 13.5 &nbsp;⇒&nbsp; <i>L</i> = 4.50</span>`, note: "Back-substitute into the first equation." },
      { math: `<span class="m">2(4.50) + 5(2.75) = 9 + 13.75 = 22.75 ✓</span>`, note: "Check in the second equation." }
    ],
    answer: `A latte costs <span class="m c5">$4.50</span> and a muffin costs <span class="m c5">$2.75</span>.`
  },
  why: `<p>Elimination is the most efficient hand method for systems written in standard form, which is how many real constraints arrive: two purchases with known totals, two mixtures with known amounts, two measurements taken under different conditions. It avoids fractions until the very end and it scales to larger systems.</p>
<p>It is also the seed of Gaussian elimination, the method computers use to solve systems with thousands of unknowns in engineering, economics and data science. The operations you use here, scaling an equation and adding a multiple of one equation to another, are exactly the row operations of linear algebra.</p>`,
  careers: [
    { role: "Structural engineer", use: "Solves force-balance equations at a joint, one for horizontal and one for vertical components, to find the tension in two members." },
    { role: "Electrician", use: "Applies Kirchhoff's laws to a two-loop circuit and eliminates one current to find the other." },
    { role: "Chemist", use: "Balances chemical equations by writing one linear equation per element and eliminating unknown coefficients." },
    { role: "Operations analyst", use: "Solves two production constraints, such as machine hours and labour hours, to find how many of each product use both fully." },
    { role: "Nutritionist", use: "Finds servings of two foods that together meet exact targets for protein and calories." },
    { role: "Data scientist", use: "Relies on elimination-based solvers to fit least-squares regression coefficients from the normal equations." }
  ],
  life: [
    "Working out individual prices from two receipts with the same items in different amounts",
    "Figuring out the entry fee and per-ride price at a fair from two ticket totals",
    "Finding how many coins of each type are in a jar from the count and the total value",
    "Comparing two plans that each combine a monthly fee and a per-use charge",
    "Splitting a shared bill when two people ordered different quantities of the same things"
  ],
  fields: [
    { name: "Linear Algebra", use: "Gaussian elimination on matrices is this method applied systematically to any number of equations." },
    { name: "Physics", use: "Statics and circuit problems produce simultaneous linear equations that are solved by elimination." },
    { name: "Chemistry", use: "Balancing reactions and finding concentrations in mixtures lead to linear systems." },
    { name: "Economics", use: "Market equilibrium from supply and demand equations is found by solving a system." }
  ],
  prereqWhy: {
    "a1-sys-sub": "You need to know what a solution to a system means and how to back-substitute a found value, both learned with substitution."
  },
  unlocksWhy: {
    "a1-sys-apps": "Word problems about mixtures, tickets, interest and motion usually give two equations in standard form, which elimination solves quickly."
  },
  beyond: [
    { field: "Linear Algebra", why: "Row reduction of a matrix is elimination written in compact form, and it answers existence and uniqueness questions for any linear system." },
    { field: "Algebra II", why: "Systems of three equations in three variables are solved by eliminating the same variable from two pairs of equations." },
    { field: "Numerical analysis", why: "Computer algorithms such as LU decomposition are organised versions of elimination." }
  ],
  mistakes: [
    { wrong: `Multiplying only the left side of an equation: turning <span class="m">3<i>L</i> + 2<i>M</i> = 19</span> into <span class="m">6<i>L</i> + 4<i>M</i> = 19</span>.`, fix: `Multiply every term, including the constant: <span class="m">6<i>L</i> + 4<i>M</i> = 38</span>.` },
    { wrong: `Adding when the coefficients are equal, not opposite: <span class="m">6<i>x</i> + 4<i>y</i> = 32</span> plus <span class="m">6<i>x</i> − 15<i>y</i> = 66</span> gives <span class="m">12<i>x</i> − 11<i>y</i> = 98</span>, and nothing cancels.`, fix: `Subtract the equations instead, or multiply one by a negative first so the coefficients are opposites.` },
    { wrong: `Reaching <span class="m">0 = 0</span> and reporting the solution as <span class="m">(0, 0)</span>.`, fix: `<span class="m">0 = 0</span> means the equations describe the same line, so there are infinitely many solutions. <span class="m">0 = 5</span> would mean no solution.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i> + <i>y</i> = 10</span>, <span class="m"><i>x</i> − <i>y</i> = 4</span>.`, a: `Add: <span class="m">2<i>x</i> = 14</span>, so <span class="m"><i>x</i> = 7</span>. Then <span class="m">7 + <i>y</i> = 10</span>, <span class="m"><i>y</i> = 3</span>. Solution <span class="m">(7, 3)</span>.` },
    { q: `Solve <span class="m">3<i>x</i> + 2<i>y</i> = 16</span>, <span class="m">5<i>x</i> − 4<i>y</i> = −10</span>.`, a: `Multiply the first by 2: <span class="m">6<i>x</i> + 4<i>y</i> = 32</span>. Add: <span class="m">11<i>x</i> = 22</span>, <span class="m"><i>x</i> = 2</span>. Then <span class="m">6 + 2<i>y</i> = 16</span>, <span class="m"><i>y</i> = 5</span>. Solution <span class="m">(2, 5)</span>. Check: <span class="m">10 − 20 = −10</span>.` },
    { q: `Solve <span class="m">2<i>x</i> − 3<i>y</i> = 5</span>, <span class="m">−4<i>x</i> + 6<i>y</i> = −10</span>.`, a: `Multiply the first by 2: <span class="m">4<i>x</i> − 6<i>y</i> = 10</span>. Add: <span class="m">0 = 0</span>. The equations are the same line, so there are infinitely many solutions: <span class="m">{(<i>x</i>, <i>y</i>) | 2<i>x</i> − 3<i>y</i> = 5}</span>.` },
    { q: `Solve <span class="m">3<i>x</i> + 4<i>y</i> = 10</span>, <span class="m">2<i>x</i> − 5<i>y</i> = 22</span>.`, a: `Multiply by 2 and by −3: <span class="m">6<i>x</i> + 8<i>y</i> = 20</span> and <span class="m">−6<i>x</i> + 15<i>y</i> = −66</span>. Add: <span class="m">23<i>y</i> = −46</span>, <span class="m"><i>y</i> = −2</span>. Then <span class="m">3<i>x</i> − 8 = 10</span>, <span class="m"><i>x</i> = 6</span>. Solution <span class="m">(6, −2)</span>. Check: <span class="m">12 + 10 = 22</span>.` }
  ],
  origin: `Chapter 8 of the Chinese <i>Nine Chapters on the Mathematical Art</i>, compiled by about the 1st century CE, solves systems of linear equations with counting rods laid out in columns, eliminating unknowns by repeatedly subtracting multiples of one column from another. Carl Friedrich Gauss used the same method in the early 1800s, which is why its general form is now called Gaussian elimination.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-factor-special"] = {
  title: "Special Factoring Patterns",
  short: "Squares and cubes: a² − b², (a ± b)², a³ ± b³",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Factoring · patterns worth recognising",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup>2</sup> − <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1">(<span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span>)(<span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span>)</span></span>`,
  lede: `A few polynomial shapes appear so often that their factorisations are worth knowing on sight: the difference of two squares, perfect square trinomials, and the sum or difference of two cubes.`,
  plain: `<p>You already know how to multiply <span class="m">(<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>)</span>: the middle terms cancel and you get <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>. Factoring runs that backward. When you see one perfect square minus another, such as <span class="m"><i>x</i><sup>2</sup> − 49</span>, you can write it straight away as <span class="m">(<i>x</i> + 7)(<i>x</i> − 7)</span>.</p>
<p>Picture a big square of side <span class="m c2"><i>a</i></span> with a small square of side <span class="m c3"><i>b</i></span> cut from one corner. The L-shaped piece left over has area <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>. Cut it in two and slide one piece around, and it becomes a rectangle <span class="m"><i>a</i> + <i>b</i></span> long and <span class="m"><i>a</i> − <i>b</i></span> wide.</p>
<p>A <b>perfect square trinomial</b> like <span class="m"><i>x</i><sup>2</sup> + 10<i>x</i> + 25</span> has a first and last term that are squares and a middle term that is twice their product. It factors as <span class="m">(<i>x</i> + 5)<sup>2</sup></span>. Cubes have their own pair of formulas. One pattern that does <b>not</b> factor over the real numbers is a sum of two squares, such as <span class="m"><i>x</i><sup>2</sup> + 9</span>.</p>`,
  formal: `<p>For all real <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>:</p>
<div class="display"><b>Difference of squares</b>: &nbsp;<i>a</i><sup>2</sup> − <i>b</i><sup>2</sup> = (<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>)<br><b>Perfect square trinomials</b>: &nbsp;<i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup> = (<i>a</i> + <i>b</i>)<sup>2</sup>, &nbsp; <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup> = (<i>a</i> − <i>b</i>)<sup>2</sup><br><b>Sum of cubes</b>: &nbsp;<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> = (<i>a</i> + <i>b</i>)(<i>a</i><sup>2</sup> − <i>ab</i> + <i>b</i><sup>2</sup>)<br><b>Difference of cubes</b>: &nbsp;<i>a</i><sup>3</sup> − <i>b</i><sup>3</sup> = (<i>a</i> − <i>b</i>)(<i>a</i><sup>2</sup> + <i>ab</i> + <i>b</i><sup>2</sup>)</div>
<p>The trinomial factors <span class="m"><i>a</i><sup>2</sup> ± <i>ab</i> + <i>b</i><sup>2</sup></span> in the cube formulas are <b>prime</b> over the integers, and a sum of squares such as <span class="m"><i>x</i><sup>2</sup> + 9</span> (with no common factor) is prime over the real numbers. A polynomial is <b>factored completely</b> when every factor other than a monomial is prime, so always remove a greatest common factor first and check each factor for another pattern.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First root term", desc: "The expression whose square (or cube) is the first term, such as 3x for 9x²." },
    { c: "c3", sym: `<i>b</i>`, name: "Second root term", desc: "The expression whose square (or cube) is the last term, such as 5 for 25." },
    { c: "c1", sym: `( )( )`, name: "Factored result", desc: "The product the pattern produces. Multiplying it back out must give the original polynomial." }
  ],
  steps: { title: "How to factor using the special patterns", items: [
    `Factor out the greatest common factor, if there is one.`,
    `Count the terms. Two terms: look for a difference of squares, or a sum or difference of cubes. Three terms: look for a perfect square trinomial.`,
    `Identify <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> by taking the square root (or cube root) of the first and last terms.`,
    `For a trinomial, confirm the middle term equals <span class="m">2<span class="c2"><i>a</i></span><span class="c3"><i>b</i></span></span>. If it does not, use trinomial factoring instead.`,
    `Write the <span class="c1">factored form</span> from the formula, taking care with the signs in the cube formulas.`,
    `Check each factor for further factoring (for example <span class="m"><i>x</i><sup>2</sup> − 4</span> inside <span class="m"><i>x</i><sup>4</sup> − 16</span>), then multiply back to verify.`
  ] },
  example: {
    prompt: `A square courtyard measures <span class="m"><i>x</i></span> metres on each side. A square planter 4 m on each side sits in one corner. Write the paved area in factored form, and find it when <span class="m"><i>x</i> = 14</span>.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>x</i></span><sup>2</sup> − <span class="c3">4</span><sup>2</sup> = <i>x</i><sup>2</sup> − 16</span>`, note: "Paved area is the whole square minus the planter square." },
      { math: `<span class="m"><span class="c2"><i>a</i> = <i>x</i></span>, &nbsp; <span class="c3"><i>b</i> = 4</span></span>`, note: "It is a difference of two squares." },
      { math: `<span class="m c1">(<i>x</i> + 4)(<i>x</i> − 4)</span>`, note: "Apply a² − b² = (a + b)(a − b)." },
      { math: `<span class="m">(14 + 4)(14 − 4) = 18 · 10 = 180</span>`, note: "Substitute x = 14. The factored form makes this easy mental arithmetic." },
      { math: `<span class="m">14<sup>2</sup> − 16 = 196 − 16 = 180 ✓</span>`, note: "Check with the unfactored form." }
    ],
    answer: `The paved area is <span class="m c1">(<i>x</i> + 4)(<i>x</i> − 4)</span> m², which is <span class="m">180 m²</span> when the courtyard is 14 m wide.`
  },
  why: `<p>These patterns save a great deal of work. Instead of searching for factor pairs, you read the factorisation straight off the shape of the polynomial. They also give quick mental arithmetic: <span class="m">47 × 53 = 50<sup>2</sup> − 3<sup>2</sup> = 2491</span>.</p>
<p>Later, the difference of squares is how you simplify rational expressions, rationalise denominators such as <span class="m">1/(√3 − 1)</span>, and solve equations like <span class="m"><i>x</i><sup>2</sup> = 49</span>. Perfect square trinomials are the whole idea behind completing the square, which leads to the quadratic formula and to the vertex form of a parabola.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes the cross-sectional area of a hollow pipe or tube as π(R² − r²) = π(R + r)(R − r) from outer and inner radii." },
    { role: "Machinist", use: "Uses the washer-area formula π(R² − r²) to find how much material a part with a drilled hole contains." },
    { role: "Physicist", use: "Factors expressions like c² − v² in special relativity when simplifying the Lorentz factor." },
    { role: "Software engineer", use: "Implements fast algorithms such as Fermat's factorisation method, which writes an odd number as a difference of two squares." },
    { role: "Mathematics teacher", use: "Uses the tile picture of a² − b² as a rectangle to explain why factoring works." }
  ],
  life: [
    "Multiplying numbers like 29 × 31 in your head as 30² − 1",
    "Working out the area of a frame or border around a square picture",
    "Estimating the area of a ring-shaped path around a circular garden",
    "Squaring numbers like 102 quickly as 100² + 2·100·2 + 2²"
  ],
  fields: [
    { name: "Precalculus", use: "Rationalising denominators and simplifying difference quotients rely on the difference of squares." },
    { name: "Engineering", use: "Areas and volumes of hollow shapes such as pipes, washers and tubes are differences of squares or cubes." },
    { name: "Number theory", use: "Fermat's method factors odd integers by writing them as a difference of two squares." },
    { name: "Physics", use: "Energy and relativity formulas are simplified by factoring differences of squares." }
  ],
  prereqWhy: {
    "a1-factor-tri": "Perfect square trinomials are trinomials, and recognising them requires the general factoring methods for ax² + bx + c."
  },
  unlocksWhy: {
    "a1-rational-simplify": "Simplifying a rational expression means factoring numerator and denominator, and differences of squares are among the most common factors that cancel."
  },
  beyond: [
    { field: "Algebra II", why: "Higher-degree polynomials such as x⁴ − 81 or x⁶ − 1 are factored completely by applying these patterns repeatedly." },
    { field: "Precalculus", why: "Multiplying by a conjugate to rationalise a denominator is the difference-of-squares pattern used in reverse." },
    { field: "Calculus I", why: "Limits such as (x² − 9)/(x − 3) as x approaches 3 are evaluated by factoring a difference of squares and cancelling." }
  ],
  mistakes: [
    { wrong: `Factoring a sum of squares: <span class="m"><i>x</i><sup>2</sup> + 9 = (<i>x</i> + 3)(<i>x</i> + 3)</span>.`, fix: `<span class="m">(<i>x</i> + 3)<sup>2</sup> = <i>x</i><sup>2</sup> + 6<i>x</i> + 9</span>. The sum of squares <span class="m"><i>x</i><sup>2</sup> + 9</span> is prime over the real numbers.` },
    { wrong: `Treating <span class="m">(<i>a</i> − <i>b</i>)<sup>2</sup></span> as <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>.`, fix: `<span class="m">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></span>. Only the product <span class="m">(<i>a</i> + <i>b</i>)(<i>a</i> − <i>b</i>)</span> gives <span class="m"><i>a</i><sup>2</sup> − <i>b</i><sup>2</sup></span>.` },
    { wrong: `Getting the cube signs wrong: <span class="m"><i>x</i><sup>3</sup> − 8 = (<i>x</i> − 2)(<i>x</i><sup>2</sup> − 2<i>x</i> + 4)</span>.`, fix: `For a difference of cubes the middle sign in the trinomial is positive: <span class="m">(<i>x</i> − 2)(<i>x</i><sup>2</sup> + 2<i>x</i> + 4)</span>. A memory aid is SOAP: Same, Opposite, Always Positive.` },
    { wrong: `Stopping too early: <span class="m"><i>x</i><sup>4</sup> − 16 = (<i>x</i><sup>2</sup> + 4)(<i>x</i><sup>2</sup> − 4)</span>.`, fix: `<span class="m"><i>x</i><sup>2</sup> − 4</span> is again a difference of squares: <span class="m">(<i>x</i><sup>2</sup> + 4)(<i>x</i> + 2)(<i>x</i> − 2)</span>.` }
  ],
  practice: [
    { q: `Factor <span class="m"><i>x</i><sup>2</sup> − 49</span>.`, a: `<span class="m"><i>x</i><sup>2</sup> − 7<sup>2</sup> = (<i>x</i> + 7)(<i>x</i> − 7)</span>.` },
    { q: `Factor <span class="m">9<i>x</i><sup>2</sup> − 30<i>x</i> + 25</span>.`, a: `<span class="m">9<i>x</i><sup>2</sup> = (3<i>x</i>)<sup>2</sup></span>, <span class="m">25 = 5<sup>2</sup></span>, and <span class="m">2(3<i>x</i>)(5) = 30<i>x</i></span>, so it is <span class="m">(3<i>x</i> − 5)<sup>2</sup></span>.` },
    { q: `Factor <span class="m">8<i>x</i><sup>3</sup> + 27</span>.`, a: `Sum of cubes with <span class="m"><i>a</i> = 2<i>x</i></span>, <span class="m"><i>b</i> = 3</span>: <span class="m">(2<i>x</i> + 3)(4<i>x</i><sup>2</sup> − 6<i>x</i> + 9)</span>.` },
    { q: `Factor completely <span class="m">2<i>x</i><sup>4</sup> − 32</span>.`, a: `GCF first: <span class="m">2(<i>x</i><sup>4</sup> − 16) = 2(<i>x</i><sup>2</sup> + 4)(<i>x</i><sup>2</sup> − 4) = 2(<i>x</i><sup>2</sup> + 4)(<i>x</i> + 2)(<i>x</i> − 2)</span>. The factor <span class="m"><i>x</i><sup>2</sup> + 4</span> is prime.` }
  ],
  origin: `Euclid's <i>Elements</i> (about 300 BCE) states these identities as facts about areas. Book II, Proposition 4 is the geometric form of <span class="m">(<i>a</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup></span>, and Proposition 5 is equivalent to the difference of squares.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-quad-factor"] = {
  title: "Solving Quadratics by Factoring",
  short: "If a product is zero, one of its factors is zero",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Quadratic equations · the zero-product property",
  hero: `<span class="m"><span class="c2">(<i>x</i> − <i>r</i>)</span><span class="c3">(<i>x</i> − <i>s</i>)</span> = 0 &nbsp;⇒&nbsp; <span class="c1"><i>x</i> = <i>r</i></span> &nbsp;or&nbsp; <span class="c1"><i>x</i> = <i>s</i></span></span>`,
  lede: `Put the quadratic equation in standard form with zero on one side, factor it, and set each factor equal to zero. Each factor gives one <span class="c1">root</span>.`,
  plain: `<p>If you multiply two numbers and get zero, at least one of them must be zero. No other way works. That fact, the <b>zero-product property</b>, is what makes factoring useful for solving equations.</p>
<p>A quadratic equation has an <span class="m"><i>x</i><sup>2</sup></span> term, such as <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> − 14 = 0</span>. You cannot undo the square and the <span class="m"><i>x</i></span> term at the same time with ordinary moves. But if you factor it into <span class="m">(<i>x</i> − 7)(<i>x</i> + 2) = 0</span>, the problem splits into two easy ones: <span class="m"><i>x</i> − 7 = 0</span> or <span class="m"><i>x</i> + 2 = 0</span>. So <span class="m"><i>x</i> = 7</span> or <span class="m"><i>x</i> = −2</span>.</p>
<p>The zero is essential. If the equation says a product equals 6, you learn nothing about the separate factors, because many pairs multiply to 6. Always move every term to one side first. On a graph, the solutions are the points where the parabola crosses the <span class="m"><i>x</i></span>-axis.</p>`,
  formal: `<p>A <b>quadratic equation</b> in one variable can be written in <b>standard form</b> <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with <span class="m"><i>a</i> ≠ 0</span>. Its solutions are also called its <b>roots</b>, and they are the <span class="m"><i>x</i></span>-intercepts of <span class="m"><i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span>.</p>
<div class="display"><b>Zero-product property</b>: for real numbers <i>p</i>, <i>q</i>, &nbsp;<i>pq</i> = 0 &nbsp;⇔&nbsp; <i>p</i> = 0 or <i>q</i> = 0.<br><i>a</i>(<i>x</i> − <i>r</i>)(<i>x</i> − <i>s</i>) = 0, <i>a</i> ≠ 0 &nbsp;⇒&nbsp; solution set {<i>r</i>, <i>s</i>}</div>
<p>If <span class="m"><i>r</i> = <i>s</i></span>, as in <span class="m">(<i>x</i> − 3)<sup>2</sup> = 0</span>, the equation has one solution, called a <b>double root</b> (the parabola touches the axis at its vertex). The property extends to any number of factors and so to higher-degree polynomial equations such as <span class="m"><i>x</i>(<i>x</i> − 1)(<i>x</i> + 4) = 0</span>. It applies only when one side is 0.</p>`,
  legend: [
    { c: "c2", sym: `(<i>x</i> − <i>r</i>)`, name: "First factor", desc: "One linear factor of the quadratic. Setting it equal to zero gives the root r." },
    { c: "c3", sym: `(<i>x</i> − <i>s</i>)`, name: "Second factor", desc: "The other linear factor. Setting it equal to zero gives the root s." },
    { c: "c1", sym: `<i>r</i>, <i>s</i>`, name: "Roots", desc: "The solutions of the equation, which are also the x-intercepts of the parabola." }
  ],
  steps: { title: "How to solve a quadratic equation by factoring", items: [
    `Write the equation in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> by moving every term to one side.`,
    `Factor out any greatest common factor, then factor the rest completely.`,
    `Set each factor containing the variable equal to zero (zero-product property).`,
    `Solve each resulting linear equation.`,
    `Check each <span class="c1">root</span> in the original equation. In a word problem, reject any root that makes no sense, such as a negative length.`
  ] },
  example: {
    prompt: `A rectangular garden is 3 ft longer than it is wide and has an area of 108 ft². Find its dimensions.`,
    lines: [
      { math: `<span class="m"><i>w</i>(<i>w</i> + 3) = 108</span>`, note: "Let w be the width. The length is w + 3, and length times width is the area." },
      { math: `<span class="m"><i>w</i><sup>2</sup> + 3<i>w</i> − 108 = 0</span>`, note: "Distribute and subtract 108 to get zero on one side." },
      { math: `<span class="m"><span class="c2">(<i>w</i> + 12)</span><span class="c3">(<i>w</i> − 9)</span> = 0</span>`, note: "Factor: 12 and −9 multiply to −108 and add to 3." },
      { math: `<span class="m"><i>w</i> + 12 = 0 &nbsp;or&nbsp; <i>w</i> − 9 = 0</span>`, note: "Zero-product property." },
      { math: `<span class="m"><span class="c1"><i>w</i> = −12</span> &nbsp;or&nbsp; <span class="c1"><i>w</i> = 9</span></span>`, note: "A width cannot be negative, so reject −12." },
      { math: `<span class="m">9 · 12 = 108 ✓</span>`, note: "Check: width 9 ft, length 12 ft." }
    ],
    answer: `The garden is <span class="m">9 ft</span> wide and <span class="m">12 ft</span> long.`
  },
  why: `<p>Areas, projectile heights, revenue and many geometric relationships produce equations with a squared unknown. When the quadratic factors nicely, factoring is the fastest way to solve it, and the factored form tells you at a glance where the graph crosses the axis.</p>
<p>The zero-product property is one of the most used facts in algebra. It is how you solve higher-degree polynomial equations, find the zeros of functions, and later find where a derivative equals zero in calculus. It also explains why you must never divide both sides by a variable: that throws away the root where the variable is zero.</p>`,
  careers: [
    { role: "Landscape architect", use: "Sets up area equations like w(w + 3) = 108 to find plot or patio dimensions that give a required area." },
    { role: "Civil engineer", use: "Finds where a parabolic road profile or arch meets a reference level by solving a factored quadratic." },
    { role: "Financial analyst", use: "Finds break-even prices where a quadratic profit function equals zero." },
    { role: "Physics teacher", use: "Factors −16t² + v₀t = 0 as −16t(t − v₀/16) to find when a launched ball returns to the ground." },
    { role: "Game developer", use: "Solves quadratic equations to find when a moving object collides with a surface in a physics engine." }
  ],
  life: [
    "Finding the size of a square rug or tablecloth that has a given area",
    "Working out how wide a border can be around a garden with a fixed amount of mulch",
    "Figuring out when a thrown ball lands",
    "Choosing the dimensions of a box or frame that must have a set area"
  ],
  fields: [
    { name: "Physics", use: "Projectile motion equations are quadratic in time, and their zeros are launch and landing times." },
    { name: "Geometry", use: "Area and Pythagorean-theorem problems often reduce to factorable quadratic equations." },
    { name: "Economics", use: "Break-even points of quadratic revenue and profit models are the zeros of those functions." },
    { name: "Calculus", use: "Critical points are found by factoring a derivative and setting each factor equal to zero." }
  ],
  prereqWhy: {
    "a1-factor-tri": "The method only works once you can factor a trinomial ax² + bx + c into two binomials."
  },
  unlocksWhy: {
    "a1-quad-sqrt": "Many quadratics do not factor over the integers, and the square root property and completing the square solve those."
  },
  beyond: [
    { field: "Algebra II", why: "Polynomial equations of degree three and higher are solved by factoring and applying the zero-product property to every factor." },
    { field: "Precalculus", why: "Zeros of polynomial and rational functions, and sign charts for polynomial inequalities, come from factored forms." },
    { field: "Calculus I", why: "Setting a factored derivative equal to zero is how maximum and minimum points are found." }
  ],
  mistakes: [
    { wrong: `Using the property when the product is not zero: from <span class="m">(<i>x</i> − 2)(<i>x</i> − 3) = 6</span> writing <span class="m"><i>x</i> − 2 = 6</span> or <span class="m"><i>x</i> − 3 = 6</span>.`, fix: `Expand and move the 6 first: <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> = 0</span>, so <span class="m"><i>x</i>(<i>x</i> − 5) = 0</span> and <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = 5</span>.` },
    { wrong: `Dividing both sides by <span class="m"><i>x</i></span>: from <span class="m">3<i>x</i><sup>2</sup> = 12<i>x</i></span> getting only <span class="m"><i>x</i> = 4</span>.`, fix: `Move terms and factor: <span class="m">3<i>x</i><sup>2</sup> − 12<i>x</i> = 3<i>x</i>(<i>x</i> − 4) = 0</span>, so <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = 4</span>.` },
    { wrong: `Sign errors on the roots: from <span class="m">(<i>x</i> + 12)(<i>x</i> − 9) = 0</span> writing <span class="m"><i>x</i> = 12</span> or <span class="m"><i>x</i> = −9</span>.`, fix: `Solve each factor: <span class="m"><i>x</i> + 12 = 0</span> gives <span class="m"><i>x</i> = −12</span>, and <span class="m"><i>x</i> − 9 = 0</span> gives <span class="m"><i>x</i> = 9</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">(<i>x</i> − 4)(<i>x</i> + 7) = 0</span>.`, a: `<span class="m"><i>x</i> − 4 = 0</span> or <span class="m"><i>x</i> + 7 = 0</span>, so <span class="m"><i>x</i> = 4</span> or <span class="m"><i>x</i> = −7</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> − 5<i>x</i> − 14 = 0</span>.`, a: `<span class="m">(<i>x</i> − 7)(<i>x</i> + 2) = 0</span>, so <span class="m"><i>x</i> = 7</span> or <span class="m"><i>x</i> = −2</span>. Check: <span class="m">49 − 35 − 14 = 0</span>.` },
    { q: `Solve <span class="m">3<i>x</i><sup>2</sup> = 12<i>x</i></span>.`, a: `<span class="m">3<i>x</i><sup>2</sup> − 12<i>x</i> = 0</span>, <span class="m">3<i>x</i>(<i>x</i> − 4) = 0</span>, so <span class="m"><i>x</i> = 0</span> or <span class="m"><i>x</i> = 4</span>.` },
    { q: `Solve <span class="m">6<i>x</i><sup>2</sup> + <i>x</i> − 15 = 0</span>.`, a: `<span class="m">(2<i>x</i> − 3)(3<i>x</i> + 5) = 0</span>, so <span class="m"><i>x</i> = <span class="fr"><span>3</span><span>2</span></span></span> or <span class="m"><i>x</i> = −<span class="fr"><span>5</span><span>3</span></span></span>. Check: <span class="m">(2<i>x</i> − 3)(3<i>x</i> + 5) = 6<i>x</i><sup>2</sup> + 10<i>x</i> − 9<i>x</i> − 15</span>.` }
  ],
  origin: `Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631 after his death, formed polynomial equations by multiplying simple factors such as <span class="m">(<i>a</i> − <i>b</i>)</span> and <span class="m">(<i>a</i> − <i>c</i>)</span>, which shows how the factors of an equation are tied to its roots.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-sequences"] = {
  title: "Arithmetic & Geometric Sequences",
  short: "Add the same d or multiply by the same r each term",
  grade: "Grade 9 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Sequences and series · linear and exponential patterns",
  hero: `<span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span> &nbsp;&nbsp;|&nbsp;&nbsp; <span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> · <span class="c3"><i>r</i></span><sup><i>n</i>−1</sup></span>`,
  lede: `An <b>arithmetic sequence</b> adds the same common difference <span class="m c3"><i>d</i></span> each time. A <b>geometric sequence</b> multiplies by the same common ratio <span class="m c3"><i>r</i></span>. Each has a formula for the <span class="c1"><i>n</i>th term</span> and one for the sum of the first <span class="m"><i>n</i></span> terms.`,
  plain: `<p>A sequence is a list of numbers in order: first term, second term, and so on. Two kinds come up again and again. In <span class="m">7, 11, 15, 19, …</span> you add 4 each time, so it is arithmetic with <span class="m"><i>d</i> = 4</span>. In <span class="m">3, 6, 12, 24, …</span> you multiply by 2 each time, so it is geometric with <span class="m"><i>r</i> = 2</span>.</p>
<p>To jump straight to the 20th term, you do not need to list all twenty. The 20th term is the first term plus 19 steps. For an arithmetic sequence that is <span class="m"><i>a</i><sub>1</sub> + 19<i>d</i></span>. For a geometric sequence it is <span class="m"><i>a</i><sub>1</sub> · <i>r</i><sup>19</sup></span>. The exponent is <span class="m"><i>n</i> − 1</span>, not <span class="m"><i>n</i></span>, because the first term has had no steps yet.</p>
<p>Adding up terms is just as common: total savings after a year of deposits, total salary over ten years. An arithmetic sum is the number of terms times the average of the first and last. A geometric sum has its own formula. An arithmetic sequence is a linear function on the counting numbers, and a geometric sequence is an exponential function on them.</p>`,
  formal: `<p>A <b>sequence</b> is a function whose domain is the positive integers; its values <span class="m"><i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, …</span> are its <b>terms</b>. A <b>series</b> is a sum of terms, and <span class="m"><i>S</i><sub><i>n</i></sub></span> denotes the <b>partial sum</b> of the first <span class="m"><i>n</i></span> terms.</p>
<div class="display"><b>Arithmetic</b>: &nbsp;<i>a</i><sub><i>n</i></sub> − <i>a</i><sub><i>n</i>−1</sub> = <i>d</i>, &nbsp; <i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i>, &nbsp; <i>S</i><sub><i>n</i></sub> = <span class="fr"><span><i>n</i>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)</span><span>2</span></span><br><b>Geometric</b>: &nbsp;<span class="fr"><span><i>a</i><sub><i>n</i></sub></span><span><i>a</i><sub><i>n</i>−1</sub></span></span> = <i>r</i>, &nbsp; <i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub><i>r</i><sup><i>n</i>−1</sup>, &nbsp; <i>S</i><sub><i>n</i></sub> = <span class="fr"><span><i>a</i><sub>1</sub>(1 − <i>r</i><sup><i>n</i></sup>)</span><span>1 − <i>r</i></span></span> &nbsp;<span class="dim">(<i>r</i> ≠ 1)</span></div>
<p>If <span class="m">|<i>r</i>| &lt; 1</span>, the partial sums of a geometric series approach <span class="m"><i>S</i> = <span class="fr"><span><i>a</i><sub>1</sub></span><span>1 − <i>r</i></span></span></span>, the sum of the <b>infinite geometric series</b>; if <span class="m">|<i>r</i>| ≥ 1</span> the infinite series has no sum. A sequence that has neither a common difference nor a common ratio, such as <span class="m">1, 4, 9, 16, …</span>, is neither arithmetic nor geometric.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i><sub>1</sub>`, name: "First term", desc: "Where the sequence starts. Every formula here is built from it." },
    { c: "c3", sym: `<i>d</i> or <i>r</i>`, name: "Common difference or ratio", desc: "d is added to get each new term of an arithmetic sequence; r is the multiplier for a geometric one. Find d by subtracting consecutive terms and r by dividing them." },
    { c: "c1", sym: `<i>a</i><sub><i>n</i></sub>`, name: "The nth term", desc: "The term in position n, found from the explicit formula without listing the terms before it." },
    { c: "c4", sym: `<i>S</i><sub><i>n</i></sub>`, name: "Partial sum", desc: "The total of the first n terms." }
  ],
  steps: { title: "How to work with a sequence", items: [
    `Subtract consecutive terms. If the difference is constant, the sequence is arithmetic with that <span class="m c3"><i>d</i></span>.`,
    `Otherwise divide consecutive terms. If the quotient is constant, it is geometric with that <span class="m c3"><i>r</i></span>. If neither is constant, it is neither.`,
    `Write the explicit formula: <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i></span> or <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub><i>r</i><sup><i>n</i>−1</sup></span>.`,
    `Substitute the position <span class="m"><i>n</i></span> to find the <span class="c1"><i>n</i>th term</span>.`,
    `For a sum, use <span class="m"><i>S</i><sub><i>n</i></sub> = <i>n</i>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)/2</span> (arithmetic) or <span class="m"><i>S</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub>(1 − <i>r</i><sup><i>n</i></sup>)/(1 − <i>r</i>)</span> (geometric).`,
    `Check by listing the first few terms and comparing.`
  ] },
  example: {
    prompt: `Two job offers both start at $45,000 a year. Offer A adds a $1,800 raise each year. Offer B gives a 4% raise each year. Compare the salary in year 10 and the total earned over the 10 years.`,
    lines: [
      { math: `<span class="m">A: &nbsp;<span class="c1"><i>a</i><sub>10</sub></span> = <span class="c2">45000</span> + 9(<span class="c3">1800</span>) = 61200</span>`, note: "Arithmetic: first term 45,000, d = 1,800, and year 10 is 9 raises later." },
      { math: `<span class="m">B: &nbsp;<span class="c1"><i>a</i><sub>10</sub></span> = <span class="c2">45000</span>(<span class="c3">1.04</span>)<sup>9</sup> ≈ 64049.03</span>`, note: "Geometric: a 4% raise means r = 1.04." },
      { math: `<span class="m">A: &nbsp;<i>S</i><sub>10</sub> = <span class="fr"><span>10(45000 + 61200)</span><span>2</span></span> = 531000</span>`, note: "Arithmetic sum: number of years times the average salary." },
      { math: `<span class="m">B: &nbsp;<i>S</i><sub>10</sub> = <span class="fr"><span>45000(1 − 1.04<sup>10</sup>)</span><span>1 − 1.04</span></span> ≈ 540274.82</span>`, note: "Geometric sum formula with r = 1.04 and n = 10." },
      { math: `<span class="m">540274.82 − 531000 = 9274.82</span>`, note: "Difference in total pay over the 10 years." }
    ],
    answer: `In year 10, Offer A pays <span class="m">$61,200</span> and Offer B about <span class="m">$64,049</span>. Over 10 years Offer B earns about <span class="m">$9,275</span> more, and the gap keeps widening after that.`
  },
  why: `<p>Arithmetic sequences describe anything that changes by a fixed amount per step: a savings plan with equal deposits, seats in rows that grow by two, a taxi fare per mile. Geometric sequences describe fixed percent change per step: raises, depreciation, loan balances, bouncing balls, compound interest period by period. Comparing the two, as in the salary example, shows why percent growth wins in the long run.</p>
<p>The sum formulas are the start of series, a major theme in later math. Loan and annuity payment formulas are geometric series. Infinite geometric series explain why <span class="m">0.999… = 1</span> and lead to the power series of calculus.</p>`,
  careers: [
    { role: "Loan officer", use: "Computes mortgage and car-loan payments with the annuity formula, which is the sum of a geometric series of discounted payments." },
    { role: "Actuary", use: "Values pensions and annuities by summing geometric series of payments that grow or are discounted by a fixed rate." },
    { role: "Human resources analyst", use: "Projects total payroll cost over several years under flat raises versus percentage raises." },
    { role: "Construction estimator", use: "Counts materials in stadium seating or stacked pipes where each row has a fixed number more than the last, using the arithmetic sum." },
    { role: "Pharmacologist", use: "Models the drug level just after each repeated dose as a geometric series that settles to a steady-state amount." },
    { role: "Audio engineer", use: "Sets equal-tempered pitches as a geometric sequence in which each semitone multiplies the frequency by the twelfth root of 2." }
  ],
  life: [
    "Working out how much you will have saved after adding the same amount every week",
    "Comparing a flat yearly raise with a percentage raise",
    "Counting seats in a theatre where each row has two more seats than the one before",
    "Seeing how fast a chain message spreads if everyone forwards it to three people",
    "Planning a training schedule that adds 5 minutes to each run"
  ],
  fields: [
    { name: "Finance", use: "Annuities, amortised loans and savings plans are geometric series." },
    { name: "Computer science", use: "Loop costs and algorithm running times are analysed with arithmetic and geometric sums." },
    { name: "Physics", use: "Repeated rebounds, reflections and radioactive decay chains produce geometric sequences." },
    { name: "Music", use: "Frequencies of equal-tempered notes form a geometric sequence." }
  ],
  prereqWhy: {
    "a1-exp-functions": "A geometric sequence is an exponential function restricted to whole numbers, so its formula and growth behaviour come from there.",
    "pa-sequences": "The idea of a common difference and the arithmetic nth-term formula were introduced in pre-algebra and are extended here with sums and geometric sequences."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra II", why: "Sigma notation, recursive formulas and infinite geometric series are developed from these two sequence types." },
    { field: "Precalculus", why: "Mathematical induction is usually introduced by proving the arithmetic and geometric sum formulas." },
    { field: "Calculus II", why: "Convergence tests for infinite series start from the geometric series, and power series generalise it." },
    { field: "Finance", why: "Present value, loan amortisation and retirement planning formulas are all geometric series." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>n</i></span> steps instead of <span class="m"><i>n</i> − 1</span>: for <span class="m">7, 11, 15, …</span> writing <span class="m"><i>a</i><sub>20</sub> = 7 + 20(4) = 87</span>.`, fix: `The 20th term is 19 steps after the first: <span class="m"><i>a</i><sub>20</sub> = 7 + 19(4) = 83</span>.` },
    { wrong: `Finding the ratio by subtracting: for <span class="m">3, 6, 12, …</span> saying <span class="m"><i>r</i> = 3</span>.`, fix: `The common ratio is a quotient: <span class="m">6 ÷ 3 = 2</span>, so <span class="m"><i>r</i> = 2</span>.` },
    { wrong: `Calling <span class="m">1, 4, 9, 16, …</span> arithmetic because it grows steadily.`, fix: `The differences are 3, 5, 7, which are not constant, and the ratios are not constant either. It is neither arithmetic nor geometric.` }
  ],
  practice: [
    { q: `Find the 20th term of <span class="m">7, 11, 15, 19, …</span>`, a: `Arithmetic with <span class="m"><i>d</i> = 4</span>: <span class="m"><i>a</i><sub>20</sub> = 7 + 19 · 4 = 83</span>.` },
    { q: `Find the 8th term of <span class="m">3, 6, 12, 24, …</span>`, a: `Geometric with <span class="m"><i>r</i> = 2</span>: <span class="m"><i>a</i><sub>8</sub> = 3 · 2<sup>7</sup> = 3 · 128 = 384</span>.` },
    { q: `Find the sum of the first 50 terms of <span class="m">2, 5, 8, 11, …</span>`, a: `<span class="m"><i>d</i> = 3</span>, <span class="m"><i>a</i><sub>50</sub> = 2 + 49 · 3 = 149</span>, and <span class="m"><i>S</i><sub>50</sub> = <span class="fr"><span>50(2 + 149)</span><span>2</span></span> = 3775</span>.` },
    { q: `Find the sum of the first 8 terms of <span class="m">5 + 15 + 45 + …</span>`, a: `<span class="m"><i>r</i> = 3</span>: <span class="m"><i>S</i><sub>8</sub> = <span class="fr"><span>5(1 − 3<sup>8</sup>)</span><span>1 − 3</span></span> = <span class="fr"><span>5(−6560)</span><span>−2</span></span> = 16400</span>.` }
  ],
  origin: `Problem 79 of the Egyptian Rhind papyrus (about 1550 BCE) lists 7 houses, 49 cats, 343 mice, 2401 spelt plants and 16,807 hekats and adds them, a geometric series with ratio 7. Euclid's <i>Elements</i>, Book IX, Proposition 35, gives a rule equivalent to the geometric sum formula.`
};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["a1-rational-simplify"] = {
  title: "Rational Expressions: Simplify, Multiply & Divide",
  short: "Factor, note excluded values, cancel common factors",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational expressions · algebraic fractions",
  hero: `<span class="m"><span class="fr"><span><span class="c2">(<i>x</i> − 3)</span><span class="c1">(<i>x</i> + 3)</span></span><span>(<i>x</i> − 2)<span class="c1">(<i>x</i> + 3)</span></span></span> = <span class="fr"><span><span class="c2"><i>x</i> − 3</span></span><span><i>x</i> − 2</span></span>, &nbsp;<span class="c3"><i>x</i> ≠ −3, 2</span></span>`,
  lede: `A rational expression is a fraction of polynomials. To simplify it, factor top and bottom, record the <span class="c3">excluded values</span> that make the denominator zero, and cancel <span class="c1">common factors</span>.`,
  plain: `<p>A rational expression works like a fraction with polynomials in it, such as <span class="m">(<i>x</i><sup>2</sup> − 9)/(<i>x</i><sup>2</sup> + <i>x</i> − 6)</span>. The rules you know for fractions still hold. You simplify <span class="m">12/18</span> by writing it as <span class="m">(2 · 6)/(3 · 6)</span> and cancelling the 6. You simplify a rational expression the same way, except that the factors are binomials like <span class="m">(<i>x</i> + 3)</span>.</p>
<p>There is one new thing to watch. Division by zero is undefined, so any value of <span class="m"><i>x</i></span> that makes the original denominator zero is not allowed. These are the <b>excluded values</b>. Find them before you cancel, because once a factor is cancelled you can no longer see it. On a graph, a cancelled factor leaves a hole.</p>
<p>You can only cancel <b>factors</b>, pieces that are multiplied. In <span class="m">(<i>x</i> + 3)/(<i>x</i> + 5)</span> nothing cancels, because the 3 and 5 are added, not multiplied. Multiplying and dividing follow fraction rules: multiply across, and to divide, multiply by the reciprocal. Factor everything first so the cancelling is easy.</p>`,
  formal: `<p>A <b>rational expression</b> is a quotient <span class="m"><i>P</i>/<i>Q</i></span> of polynomials with <span class="m"><i>Q</i> ≠ 0</span>. Its domain is all real numbers except the <b>excluded values</b>, the zeros of <span class="m"><i>Q</i></span>. It is in <b>simplest form</b> when numerator and denominator have no common factor other than ±1.</p>
<div class="display"><b>Equivalent fractions</b>: &nbsp;<span class="fr"><span><i>ac</i></span><span><i>bc</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span>, &nbsp; <i>b</i> ≠ 0, <i>c</i> ≠ 0<br><b>Multiplication</b>: &nbsp;<span class="fr"><span><i>a</i></span><span><i>b</i></span></span> · <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ac</i></span><span><i>bd</i></span></span> &nbsp;&nbsp; <b>Division</b>: &nbsp;<span class="fr"><span><i>a</i></span><span><i>b</i></span></span> ÷ <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> · <span class="fr"><span><i>d</i></span><span><i>c</i></span></span>, &nbsp; <i>c</i> ≠ 0<br><b>Opposites</b>: &nbsp;<span class="fr"><span><i>a</i> − <i>b</i></span><span><i>b</i> − <i>a</i></span></span> = −1, &nbsp; <i>a</i> ≠ <i>b</i></div>
<p>The simplified expression equals the original only on the original domain, so the excluded values are stated with the answer. In division, the excluded values also include the zeros of the divisor's numerator <span class="m"><i>c</i></span>, since dividing by a rational expression equal to zero is undefined.</p>`,
  legend: [
    { c: "c2", sym: `<i>P</i>(<i>x</i>)`, name: "Numerator", desc: "The polynomial on top, written in factored form before simplifying." },
    { c: "c1", sym: `(<i>x</i> − <i>a</i>)`, name: "Common factor", desc: "A factor that appears in both the numerator and the denominator. It divides out to 1." },
    { c: "c3", sym: `<i>x</i> ≠ …`, name: "Excluded values", desc: "Values that make the original denominator zero. They stay excluded after simplifying and show as holes or asymptotes on the graph." }
  ],
  steps: { title: "How to simplify, multiply or divide rational expressions", items: [
    `For division, first rewrite as multiplication by the reciprocal of the divisor.`,
    `Factor every numerator and denominator completely: GCF, trinomials, special patterns.`,
    `List the <span class="c3">excluded values</span>: every value that makes any original denominator zero (and, for division, the divisor's numerator zero).`,
    `Cancel <span class="c1">common factors</span> between any numerator and any denominator. Watch for opposites such as <span class="m">(<i>x</i> − 2)</span> and <span class="m">(2 − <i>x</i>)</span>, which give −1.`,
    `Multiply the remaining factors. It is usually best to leave the answer factored.`,
    `State the result together with its excluded values.`
  ] },
  example: {
    prompt: `Heat loss from a tank depends on its surface-area-to-volume ratio. For a closed cylinder of radius <span class="m"><i>r</i></span> and height <span class="m"><i>h</i></span>, simplify <span class="m"><span class="fr"><span>2π<i>r</i><sup>2</sup> + 2π<i>rh</i></span><span>π<i>r</i><sup>2</sup><i>h</i></span></span></span> and evaluate it for <span class="m"><i>r</i> = 2</span> m, <span class="m"><i>h</i> = 5</span> m.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><span class="c2">2π<i>r</i>(<i>r</i> + <i>h</i>)</span></span><span>π<i>r</i> · <i>rh</i></span></span></span>`, note: "Factor 2πr out of the numerator and write the denominator as πr times rh." },
      { math: `<span class="m"><span class="c3"><i>r</i> ≠ 0, &nbsp;<i>h</i> ≠ 0</span></span>`, note: "Excluded values: the denominator is zero if r or h is zero." },
      { math: `<span class="m"><span class="fr"><span>2<span class="c1">π<i>r</i></span>(<i>r</i> + <i>h</i>)</span><span><span class="c1">π<i>r</i></span> · <i>rh</i></span></span> = <span class="fr"><span>2(<i>r</i> + <i>h</i>)</span><span><i>rh</i></span></span></span>`, note: "Cancel the common factor πr." },
      { math: `<span class="m"><span class="fr"><span>2(2 + 5)</span><span>2 · 5</span></span> = <span class="fr"><span>14</span><span>10</span></span> = 1.4</span>`, note: "Substitute r = 2 and h = 5. The units are square metres per cubic metre, that is, per metre." },
      { math: `<span class="m"><span class="fr"><span>8π + 20π</span><span>20π</span></span> = <span class="fr"><span>28π</span><span>20π</span></span> = 1.4 ✓</span>`, note: "Check with the original expression." }
    ],
    answer: `The ratio simplifies to <span class="m"><span class="fr"><span>2(<i>r</i> + <i>h</i>)</span><span><i>rh</i></span></span></span> for <span class="m"><i>r</i>, <i>h</i> ≠ 0</span>, which is <span class="m">1.4</span> per metre for this tank.`
  },
  why: `<p>Rates, averages and ratios of changing quantities are rational expressions: average cost per item as production grows, time for a trip as speed changes, concentration as a solution is diluted. Simplifying them reveals how the quantity really behaves, as in the example, where the ratio shows that bigger tanks lose heat more slowly relative to their volume.</p>
<p>Every later topic with algebraic fractions depends on this: adding rational expressions, solving rational equations, graphing rational functions with holes and asymptotes, and evaluating limits in calculus by factoring and cancelling. The habit of stating excluded values is the habit of respecting a function's domain.</p>`,
  careers: [
    { role: "Chemical engineer", use: "Simplifies surface-area-to-volume and concentration ratios when sizing reactors and tanks." },
    { role: "Cost accountant", use: "Writes average cost per unit as a rational expression in the number of units produced and simplifies it to compare production levels." },
    { role: "Electrical engineer", use: "Simplifies transfer functions, which are ratios of polynomials, to analyse filters and control circuits." },
    { role: "Biologist", use: "Uses the surface-area-to-volume ratio 3/r of a spherical cell to explain limits on cell size." },
    { role: "Optometrist", use: "Works with lens formulas that combine focal lengths as rational expressions." }
  ],
  life: [
    "Comparing the cost per person of a group rental as the group size changes",
    "Understanding why a big pot of soup cools more slowly than a small cup",
    "Working out how travel time changes if you drive faster",
    "Scaling a recipe where every quantity is divided by the same number of servings"
  ],
  fields: [
    { name: "Engineering", use: "Transfer functions in control and signal processing are rational expressions that are factored and simplified." },
    { name: "Biology", use: "Surface-area-to-volume ratios explain heat loss, cell size and gas exchange." },
    { name: "Economics", use: "Average cost and average revenue are rational functions of output." },
    { name: "Physics", use: "Formulas for resistors in parallel, lenses and gravitational fields contain algebraic fractions to simplify." }
  ],
  prereqWhy: {
    "a1-factor-special": "Simplifying depends on factoring numerators and denominators completely, and differences of squares and perfect squares are the most common patterns there.",
    "fraction-ops": "Multiplying, dividing and reducing rational expressions use exactly the same rules as numerical fractions."
  },
  unlocksWhy: {
    "a1-rational-add": "Adding and subtracting rational expressions requires factoring denominators, building a common denominator and simplifying the result, all learned here."
  },
  beyond: [
    { field: "Precalculus", why: "Graphs of rational functions have holes where common factors cancel and vertical asymptotes at the remaining excluded values." },
    { field: "Calculus I", why: "Limits of the form 0/0 are evaluated by factoring and cancelling a common factor." },
    { field: "Calculus II", why: "Partial fraction decomposition of rational expressions is a key integration technique." },
    { field: "Electrical engineering", why: "Circuit transfer functions are rational expressions whose factored form shows the system's poles and zeros." }
  ],
  mistakes: [
    { wrong: `Cancelling terms instead of factors: <span class="m"><span class="fr"><span><i>x</i> + 3</span><span><i>x</i> + 5</span></span> = <span class="fr"><span>3</span><span>5</span></span></span>.`, fix: `Only common factors cancel. <span class="m">(<i>x</i> + 3)/(<i>x</i> + 5)</span> is already in simplest form.` },
    { wrong: `Dropping excluded values that cancel: <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 9</span><span><i>x</i> + 3</span></span> = <i>x</i> − 3</span> for all <span class="m"><i>x</i></span>.`, fix: `The original denominator is zero at <span class="m"><i>x</i> = −3</span>, so the result is <span class="m"><i>x</i> − 3</span> with <span class="m"><i>x</i> ≠ −3</span>.` },
    { wrong: `Missing opposite factors: leaving <span class="m"><span class="fr"><span><i>x</i> − 2</span><span>2 − <i>x</i></span></span></span> unsimplified, or calling it 1.`, fix: `<span class="m">2 − <i>x</i> = −(<i>x</i> − 2)</span>, so the quotient is <span class="m">−1</span> for <span class="m"><i>x</i> ≠ 2</span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m"><span class="fr"><span>5<i>x</i> + 15</span><span><i>x</i><sup>2</sup> − 9</span></span></span>.`, a: `<span class="m"><span class="fr"><span>5(<i>x</i> + 3)</span><span>(<i>x</i> + 3)(<i>x</i> − 3)</span></span> = <span class="fr"><span>5</span><span><i>x</i> − 3</span></span></span>, <span class="m"><i>x</i> ≠ −3, 3</span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 5<i>x</i> + 6</span><span>4 − <i>x</i><sup>2</sup></span></span></span>.`, a: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)(<i>x</i> − 3)</span><span>(2 − <i>x</i>)(2 + <i>x</i>)</span></span> = <span class="fr"><span>−(<i>x</i> − 3)</span><span><i>x</i> + 2</span></span> = <span class="fr"><span>3 − <i>x</i></span><span><i>x</i> + 2</span></span></span>, <span class="m"><i>x</i> ≠ −2, 2</span>.` },
    { q: `Multiply <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 4</span><span><i>x</i><sup>2</sup> + 5<i>x</i> + 6</span></span> · <span class="fr"><span><i>x</i> + 3</span><span><i>x</i> − 2</span></span></span>.`, a: `<span class="m"><span class="fr"><span>(<i>x</i> + 2)(<i>x</i> − 2)(<i>x</i> + 3)</span><span>(<i>x</i> + 2)(<i>x</i> + 3)(<i>x</i> − 2)</span></span> = 1</span>, for <span class="m"><i>x</i> ≠ −3, −2, 2</span>.` },
    { q: `Divide <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 25</span><span>2<i>x</i> + 6</span></span> ÷ <span class="fr"><span><i>x</i> − 5</span><span><i>x</i><sup>2</sup> + 6<i>x</i> + 9</span></span></span>.`, a: `<span class="m"><span class="fr"><span>(<i>x</i> + 5)(<i>x</i> − 5)</span><span>2(<i>x</i> + 3)</span></span> · <span class="fr"><span>(<i>x</i> + 3)<sup>2</sup></span><span><i>x</i> − 5</span></span> = <span class="fr"><span>(<i>x</i> + 5)(<i>x</i> + 3)</span><span>2</span></span></span>, for <span class="m"><i>x</i> ≠ −3, 5</span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-quad-sqrt"] = {
  title: "Square Root Property & Completing the Square",
  short: "Make a perfect square, then take ± square roots",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Quadratic equations · solving without factoring",
  hero: `<span class="m"><span class="c2"><i>x</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><span class="c2"><i>x</i></span> + <span class="c1">(<span class="fr"><span><i>b</i></span><span>2</span></span>)<sup>2</sup></span> = (<span class="c2"><i>x</i></span> + <span class="fr"><span><span class="c3"><i>b</i></span></span><span>2</span></span>)<sup>2</sup></span>`,
  lede: `If <span class="m"><i>x</i><sup>2</sup> = <i>k</i></span>, then <span class="m"><i>x</i> = ±√<i>k</i></span>. Completing the square turns any quadratic into that form by adding the missing <span class="c1">corner</span> <span class="m">(<i>b</i>/2)<sup>2</sup></span>.`,
  plain: `<p>Some quadratics are easy without factoring. If <span class="m"><i>x</i><sup>2</sup> = 81</span>, then <span class="m"><i>x</i></span> is 9 or −9, because both square to 81. That is the <b>square root property</b>. The same works for a squared group: if <span class="m">(<i>x</i> − 3)<sup>2</sup> = 20</span>, then <span class="m"><i>x</i> − 3 = ±√20</span>. Remember the ± every time.</p>
<p>Completing the square is a way to force any quadratic into that shape. Picture <span class="m"><i>x</i><sup>2</sup> + <i>bx</i></span> as tiles: an <span class="m"><i>x</i></span>-by-<span class="m"><i>x</i></span> square and a strip <span class="m"><i>b</i></span> wide. Cut the strip in half and put one half on each side of the square. You almost have a bigger square. Only a small corner is missing, and its area is <span class="m">(<i>b</i>/2)<sup>2</sup></span>. Add that corner to both sides of the equation, and the left side becomes a perfect square.</p>
<p>If you end up with a squared quantity equal to a negative number, there is no real solution, because no real number squared is negative. When the <span class="m"><i>x</i><sup>2</sup></span> term has a coefficient other than 1, divide by it first.</p>`,
  formal: `<p><b>Square root property</b>: for a real number <span class="m"><i>k</i></span>,</p>
<div class="display"><i>X</i><sup>2</sup> = <i>k</i>, <i>k</i> &gt; 0 &nbsp;⇒&nbsp; <i>X</i> = √<i>k</i> or <i>X</i> = −√<i>k</i> <span class="dim">(written <i>X</i> = ±√<i>k</i>)</span><br><i>X</i><sup>2</sup> = 0 &nbsp;⇒&nbsp; <i>X</i> = 0 &nbsp;&nbsp; <i>X</i><sup>2</sup> = <i>k</i>, <i>k</i> &lt; 0 &nbsp;⇒&nbsp; no real solution</div>
<p><b>Completing the square</b>: since <span class="m">(<i>x</i> + <i>b</i>/2)<sup>2</sup> = <i>x</i><sup>2</sup> + <i>bx</i> + (<i>b</i>/2)<sup>2</sup></span>, adding <span class="m">(<i>b</i>/2)<sup>2</sup></span> to <span class="m"><i>x</i><sup>2</sup> + <i>bx</i></span> produces a perfect square trinomial. To solve <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with <span class="m"><i>a</i> ≠ 0</span>: divide by <span class="m"><i>a</i></span>, move the constant, add <span class="m">(<i>b</i>/(2<i>a</i>))<sup>2</sup></span> to both sides, and apply the square root property. The principal square root <span class="m">√<i>k</i></span> is the nonnegative root, so the ± is needed to obtain both solutions.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "The variable", desc: "The side of the big square in the tile picture, and the unknown in the equation." },
    { c: "c3", sym: `<i>b</i>`, name: "Linear coefficient", desc: "The coefficient of x once the leading coefficient is 1. It is split into two strips of width b/2." },
    { c: "c1", sym: `(<i>b</i>/2)<sup>2</sup>`, name: "Missing corner", desc: "The number added to both sides to complete the square." },
    { c: "c4", sym: `±√<i>k</i>`, name: "Both square roots", desc: "The positive and negative roots from the square root property. If k is negative there is no real solution." }
  ],
  steps: { title: "How to solve by completing the square", items: [
    `If the coefficient of <span class="m"><i>x</i><sup>2</sup></span> is not 1, divide every term by it.`,
    `Move the constant term to the right side, leaving <span class="m"><i>x</i><sup>2</sup> + <span class="c3"><i>b</i></span><i>x</i></span> on the left.`,
    `Take half of <span class="m c3"><i>b</i></span>, square it, and add <span class="m c1">(<i>b</i>/2)<sup>2</sup></span> to <b>both</b> sides.`,
    `Write the left side as <span class="m">(<i>x</i> + <i>b</i>/2)<sup>2</sup></span> and simplify the right side.`,
    `Apply the square root property: <span class="m"><i>x</i> + <i>b</i>/2 = ±√<i>k</i></span>. If <span class="m"><i>k</i> &lt; 0</span>, there is no real solution.`,
    `Solve for <span class="m"><i>x</i></span>, simplify the radical, and check.`
  ] },
  example: {
    prompt: `A rectangular garden bed is to be 4 m longer than it is wide and have an area of 50 m². How wide should it be, to the nearest centimetre?`,
    lines: [
      { math: `<span class="m"><i>w</i>(<i>w</i> + 4) = 50 &nbsp;⇒&nbsp; <i>w</i><sup>2</sup> + <span class="c3">4</span><i>w</i> = 50</span>`, note: "Let w be the width in metres. The trinomial w² + 4w − 50 does not factor over the integers." },
      { math: `<span class="m"><i>w</i><sup>2</sup> + 4<i>w</i> + <span class="c1">4</span> = 50 + <span class="c1">4</span></span>`, note: "Half of 4 is 2, and 2² = 4. Add it to both sides." },
      { math: `<span class="m">(<i>w</i> + 2)<sup>2</sup> = 54</span>`, note: "The left side is now a perfect square." },
      { math: `<span class="m"><i>w</i> + 2 = ±√54 = ±3√6</span>`, note: "Square root property; √54 = √9 · √6." },
      { math: `<span class="m"><i>w</i> = −2 + 3√6 ≈ 5.35</span>`, note: "Reject −2 − 3√6, which is negative." },
      { math: `<span class="m">5.348 × 9.348 ≈ 50.0 ✓</span>`, note: "Check: width about 5.35 m, length about 9.35 m." }
    ],
    answer: `The bed should be <span class="m">−2 + 3√6 ≈ 5.35</span> m wide and about <span class="m">9.35</span> m long.`
  },
  why: `<p>Most quadratic equations from real measurements do not factor over the integers. The square root property handles the common case of a squared quantity equal to a number, such as distance fallen <span class="m"><i>d</i> = 16<i>t</i><sup>2</sup></span> or area <span class="m"><i>A</i> = <i>s</i><sup>2</sup></span>. Completing the square handles everything else, and it always works.</p>
<p>Completing the square is also a tool in its own right. Applied to the general equation it produces the quadratic formula. Applied to a function it gives vertex form, which shows the maximum or minimum. Later it is used to find the centre and radius of a circle from its equation, and to evaluate integrals in calculus.</p>`,
  careers: [
    { role: "Physicist", use: "Solves d = ½gt² for time with the square root property to find how long an object takes to fall a given distance." },
    { role: "Civil engineer", use: "Completes the square in road and bridge profile equations to locate the highest or lowest point of a parabolic curve." },
    { role: "Surveyor", use: "Finds the side of a square plot from its area, s = √A, when laying out lots." },
    { role: "Statistician", use: "Completes the square in the exponent of the normal distribution when deriving results about means." },
    { role: "Computer graphics programmer", use: "Rewrites circle and sphere equations by completing the square to find centres and radii for collision tests." }
  ],
  life: [
    "Finding the side length of a square room from its floor area",
    "Working out how long a dropped object takes to hit the ground",
    "Sizing a garden or rug with a set area and a fixed length-to-width difference",
    "Estimating the size of a square TV screen from its area"
  ],
  fields: [
    { name: "Physics", use: "Free-fall and energy equations are solved for time or speed with the square root property." },
    { name: "Analytic geometry", use: "Circle, ellipse and parabola equations are put in standard form by completing the square." },
    { name: "Statistics", use: "Completing the square appears in deriving properties of the normal distribution and in least squares." },
    { name: "Engineering", use: "Optimisation of quadratic cost or energy functions uses vertex form found by completing the square." }
  ],
  prereqWhy: {
    "a1-quad-factor": "You need standard form, the idea of roots and perfect square trinomials from factoring before you can build one on purpose.",
    "a1-radicals": "Solutions come out as square roots, which must be simplified, such as √54 = 3√6."
  },
  unlocksWhy: {
    "a1-quad-formula": "The quadratic formula is completing the square carried out once on the general equation ax² + bx + c = 0."
  },
  beyond: [
    { field: "Algebra II", why: "Completing the square gives vertex form of parabolas and is used to solve quadratics with complex solutions." },
    { field: "Precalculus", why: "Conic sections such as circles and ellipses are identified and graphed by completing the square in x and y." },
    { field: "Calculus II", why: "Integrals like ∫ 1/(x² + 4x + 13) dx are evaluated by completing the square first." },
    { field: "Statistics", why: "Derivations involving the normal distribution complete the square in the exponent." }
  ],
  mistakes: [
    { wrong: `Forgetting the negative root: from <span class="m"><i>x</i><sup>2</sup> = 81</span> writing only <span class="m"><i>x</i> = 9</span>.`, fix: `Both <span class="m">9<sup>2</sup></span> and <span class="m">(−9)<sup>2</sup></span> are 81, so <span class="m"><i>x</i> = ±9</span>.` },
    { wrong: `Adding <span class="m">(<i>b</i>/2)<sup>2</sup></span> to only one side: <span class="m"><i>w</i><sup>2</sup> + 4<i>w</i> + 4 = 50</span>.`, fix: `Add it to both sides to keep the equation balanced: <span class="m"><i>w</i><sup>2</sup> + 4<i>w</i> + 4 = 54</span>.` },
    { wrong: `Completing the square with a leading coefficient that is not 1: for <span class="m">2<i>x</i><sup>2</sup> − 12<i>x</i> + 7 = 0</span> adding <span class="m">(−12/2)<sup>2</sup> = 36</span>.`, fix: `Divide by 2 first: <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> + <span class="fr"><span>7</span><span>2</span></span> = 0</span>, then add <span class="m">(−3)<sup>2</sup> = 9</span>.` },
    { wrong: `Taking the square root term by term: <span class="m">√(<i>x</i><sup>2</sup> + 9) = <i>x</i> + 3</span>.`, fix: `A square root does not split over addition. Only a perfect square like <span class="m">(<i>x</i> + 3)<sup>2</sup></span> has square root <span class="m">|<i>x</i> + 3|</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> = 81</span>.`, a: `<span class="m"><i>x</i> = ±√81 = ±9</span>.` },
    { q: `Solve <span class="m">(<i>x</i> − 3)<sup>2</sup> = 20</span>.`, a: `<span class="m"><i>x</i> − 3 = ±√20 = ±2√5</span>, so <span class="m"><i>x</i> = 3 ± 2√5</span>.` },
    { q: `Solve <span class="m"><i>x</i><sup>2</sup> + 16 = 0</span>.`, a: `<span class="m"><i>x</i><sup>2</sup> = −16</span>. No real number squared is negative, so there is <b>no real solution</b>.` },
    { q: `Solve <span class="m">2<i>x</i><sup>2</sup> − 12<i>x</i> + 7 = 0</span> by completing the square.`, a: `Divide by 2: <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> = −<span class="fr"><span>7</span><span>2</span></span></span>. Add 9: <span class="m">(<i>x</i> − 3)<sup>2</sup> = <span class="fr"><span>11</span><span>2</span></span></span>. So <span class="m"><i>x</i> = 3 ± √(11/2) = 3 ± <span class="fr"><span>√22</span><span>2</span></span></span>.` }
  ],
  origin: `In his book on <i>al-jabr</i> (about 820 CE), Muhammad ibn Musa al-Khwarizmi solved <span class="m"><i>x</i><sup>2</sup> + 10<i>x</i> = 39</span> by drawing a square with rectangles on its sides and literally completing the square with the missing corner, getting <span class="m"><i>x</i> = 3</span>. Babylonian scribes used an equivalent procedure on clay tablets around 1800 BCE.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-rational-add"] = {
  title: "Adding & Subtracting Rational Expressions",
  short: "Build the LCD from factored denominators, then combine",
  grade: "Grade 10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational expressions · common denominators",
  hero: `<span class="m"><span class="fr"><span>3</span><span><span class="c2"><i>x</i> − 2</span></span></span> + <span class="fr"><span>5</span><span><span class="c3"><i>x</i> + 2</span></span></span> = <span class="fr"><span>3(<i>x</i> + 2) + 5(<i>x</i> − 2)</span><span><span class="c4">(<i>x</i> − 2)(<i>x</i> + 2)</span></span></span> = <span class="c1"><span class="fr"><span>8<i>x</i> − 4</span><span>(<i>x</i> − 2)(<i>x</i> + 2)</span></span></span></span>`,
  lede: `Rational expressions are added exactly like numerical fractions: rewrite each over the <span class="c4">least common denominator</span>, combine the numerators, and simplify the <span class="c1">result</span>.`,
  plain: `<p>To add <span class="m">1/4 + 1/6</span> you do not add the tops and bottoms. You rewrite both as twelfths, <span class="m">3/12 + 2/12</span>, then add the numerators to get <span class="m">5/12</span>. The 12 is the least common denominator: the smallest number both 4 and 6 divide into.</p>
<p>Rational expressions work the same way, with factors in place of numbers. First factor every denominator. The LCD uses each different factor the greatest number of times it appears in any one denominator. For <span class="m">1/(<i>x</i> − 2)</span> and <span class="m">1/(<i>x</i><sup>2</sup> − 4)</span>, the second denominator is <span class="m">(<i>x</i> − 2)(<i>x</i> + 2)</span>, so the LCD is just <span class="m">(<i>x</i> − 2)(<i>x</i> + 2)</span>, not the product of both denominators.</p>
<p>Multiply each numerator by whatever its denominator is missing. Then combine the numerators over the LCD. With subtraction, put the second numerator in parentheses so the minus sign reaches every term. Finally, factor the numerator and see whether anything cancels with the denominator.</p>`,
  formal: `<p>For polynomials <span class="m"><i>P</i>, <i>Q</i>, <i>R</i></span> with <span class="m"><i>R</i> ≠ 0</span>, expressions with a <b>common denominator</b> combine as</p>
<div class="display"><span class="fr"><span><i>P</i></span><span><i>R</i></span></span> + <span class="fr"><span><i>Q</i></span><span><i>R</i></span></span> = <span class="fr"><span><i>P</i> + <i>Q</i></span><span><i>R</i></span></span> &nbsp;&nbsp; <span class="fr"><span><i>P</i></span><span><i>R</i></span></span> − <span class="fr"><span><i>Q</i></span><span><i>R</i></span></span> = <span class="fr"><span><i>P</i> − <i>Q</i></span><span><i>R</i></span></span><br><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> + <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ad</i> + <i>bc</i></span><span><i>bd</i></span></span> &nbsp;<span class="dim">(always valid; <i>bd</i> is a common denominator, not always the least)</span></div>
<p>The <b>least common denominator</b> (LCD) is the product of every distinct prime factor of the denominators, each raised to the highest power with which it appears. Each expression is converted to an equivalent one with the LCD by multiplying numerator and denominator by the missing factors. The excluded values of the sum are the zeros of all original denominators. A <b>complex rational expression</b>, one with fractions in its numerator or denominator, is simplified by multiplying its numerator and denominator by the LCD of all the inner fractions.</p>`,
  legend: [
    { c: "c2", sym: `<i>D</i><sub>1</sub>`, name: "First denominator", desc: "The factored denominator of the first expression." },
    { c: "c3", sym: `<i>D</i><sub>2</sub>`, name: "Second denominator", desc: "The factored denominator of the second expression." },
    { c: "c4", sym: `LCD`, name: "Least common denominator", desc: "Every distinct factor of the denominators, each to its highest power. Both expressions are rewritten over it." },
    { c: "c1", sym: `<i>N</i>/LCD`, name: "Result", desc: "The combined numerator over the LCD, simplified by cancelling any common factor." }
  ],
  steps: { title: "How to add or subtract rational expressions", items: [
    `Factor every <span class="c2">denominator</span> completely and note the excluded values.`,
    `Build the <span class="c4">LCD</span>: list each different factor, using the highest power that appears in any one denominator.`,
    `Rewrite each expression over the LCD by multiplying its numerator and denominator by the factors it is missing.`,
    `Add or subtract the numerators, keeping the LCD. For subtraction, put the second numerator in parentheses and distribute the minus sign.`,
    `Simplify the numerator by distributing and combining like terms.`,
    `Factor the numerator and cancel any factor it shares with the denominator. State the <span class="c1">result</span> with its excluded values.`
  ] },
  example: {
    prompt: `You drive 60 miles to a town at an average speed of <span class="m"><i>r</i></span> mph and return 10 mph faster. Write the total driving time as a single rational expression, and find it when <span class="m"><i>r</i> = 50</span>.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>60</span><span><span class="c2"><i>r</i></span></span></span> + <span class="fr"><span>60</span><span><span class="c3"><i>r</i> + 10</span></span></span></span>`, note: "Time is distance divided by speed for each leg." },
      { math: `<span class="m">LCD = <span class="c4"><i>r</i>(<i>r</i> + 10)</span></span>`, note: "The two denominators share no factor, so the LCD is their product." },
      { math: `<span class="m"><span class="fr"><span>60(<i>r</i> + 10)</span><span><i>r</i>(<i>r</i> + 10)</span></span> + <span class="fr"><span>60<i>r</i></span><span><i>r</i>(<i>r</i> + 10)</span></span></span>`, note: "Multiply each fraction by its missing factor." },
      { math: `<span class="m c1"><span class="fr"><span>120<i>r</i> + 600</span><span><i>r</i>(<i>r</i> + 10)</span></span> = <span class="fr"><span>120(<i>r</i> + 5)</span><span><i>r</i>(<i>r</i> + 10)</span></span></span>`, note: "Add the numerators and factor. No factor cancels." },
      { math: `<span class="m"><span class="fr"><span>120(55)</span><span>50(60)</span></span> = <span class="fr"><span>6600</span><span>3000</span></span> = 2.2</span>`, note: "Substitute r = 50." },
      { math: `<span class="m"><span class="fr"><span>60</span><span>50</span></span> + <span class="fr"><span>60</span><span>60</span></span> = 1.2 + 1 = 2.2 ✓</span>`, note: "Check with the original two-leg form." }
    ],
    answer: `The total time is <span class="m c1"><span class="fr"><span>120(<i>r</i> + 5)</span><span><i>r</i>(<i>r</i> + 10)</span></span></span> hours, which is <span class="m">2.2</span> hours (2 hours 12 minutes) when <span class="m"><i>r</i> = 50</span>.`
  },
  why: `<p>Whenever two rates, times or shares are combined, fractions with variables in the denominator are added: total time for trips at different speeds, combined work rates, total resistance of resistors in parallel, the combined focal length of two lenses. Writing the total as one expression makes it easy to evaluate and to set equal to a target.</p>
<p>This is the step that makes rational equations solvable, and it is used constantly later: combining terms in precalculus, simplifying difference quotients, and in calculus when adding fractions before taking limits or reversing the process with partial fractions.</p>`,
  careers: [
    { role: "Electrician", use: "Combines resistances in parallel with 1/R = 1/R₁ + 1/R₂, adding fractions to find the total resistance." },
    { role: "Optician", use: "Adds lens powers, the reciprocals of focal lengths, to find the effective power of two lenses together." },
    { role: "Logistics planner", use: "Adds travel times d/r for route segments at different speeds to estimate total delivery time." },
    { role: "Project manager", use: "Adds individual work rates such as 1/a + 1/b jobs per hour to estimate how fast a team finishes a task." },
    { role: "Pharmacist", use: "Combines rates of drug infusion and elimination written as fractions of a dose per hour." }
  ],
  life: [
    "Working out the total time for a round trip at two different speeds",
    "Estimating how long two people take to paint a room together",
    "Adding recipe amounts written as fractions of different sizes",
    "Figuring out the average speed for a whole trip, which is not the average of the two speeds"
  ],
  fields: [
    { name: "Physics", use: "Parallel resistors, springs in series and thin-lens combinations add reciprocals." },
    { name: "Chemistry", use: "Combined rate laws and dilution formulas involve sums of fractional expressions." },
    { name: "Engineering", use: "Transfer functions of connected systems are combined by adding and multiplying rational expressions." },
    { name: "Calculus", use: "Difference quotients and partial fractions require combining and splitting rational expressions." }
  ],
  prereqWhy: {
    "a1-rational-simplify": "Finding an LCD requires factoring denominators, and the final answer must be simplified by cancelling common factors, both learned there."
  },
  unlocksWhy: {
    "a1-rational-eq": "Rational equations are solved by multiplying through by the LCD, the same common denominator built here."
  },
  beyond: [
    { field: "Algebra II", why: "Complex rational expressions and rational functions are simplified by combining fractions over an LCD." },
    { field: "Calculus I", why: "Limits of difference quotients such as (1/(x + h) − 1/x)/h start by subtracting rational expressions." },
    { field: "Calculus II", why: "Partial fraction decomposition reverses this process to integrate rational functions." },
    { field: "Physics", why: "Circuit and optics formulas add reciprocals, and rearranging them requires combining rational expressions." }
  ],
  mistakes: [
    { wrong: `Adding numerators and denominators: <span class="m"><span class="fr"><span>3</span><span><i>x</i></span></span> + <span class="fr"><span>5</span><span><i>y</i></span></span> = <span class="fr"><span>8</span><span><i>x</i> + <i>y</i></span></span></span>.`, fix: `Use a common denominator: <span class="m"><span class="fr"><span>3<i>y</i> + 5<i>x</i></span><span><i>xy</i></span></span></span>.` },
    { wrong: `Not distributing the minus sign: <span class="m"><span class="fr"><span>2(<i>x</i> − 1) − <i>x</i> + 3</span><span>(<i>x</i> + 3)(<i>x</i> − 1)</span></span></span> for <span class="m"><span class="fr"><span>2</span><span><i>x</i> + 3</span></span> − <span class="fr"><span>1</span><span><i>x</i> − 1</span></span></span>.`, fix: `The whole second numerator is subtracted: <span class="m">2(<i>x</i> − 1) − (<i>x</i> + 3) = <i>x</i> − 5</span>.` },
    { wrong: `Using the product of the denominators when they share a factor, then forgetting to simplify.`, fix: `Factor first. For <span class="m"><i>x</i><sup>2</sup> − 9</span> and <span class="m"><i>x</i> − 3</span> the LCD is <span class="m">(<i>x</i> + 3)(<i>x</i> − 3)</span>, not <span class="m">(<i>x</i><sup>2</sup> − 9)(<i>x</i> − 3)</span>.` }
  ],
  practice: [
    { q: `Add <span class="m"><span class="fr"><span>5</span><span>2<i>x</i></span></span> + <span class="fr"><span>1</span><span>3<i>x</i></span></span></span>.`, a: `LCD <span class="m">6<i>x</i></span>: <span class="m"><span class="fr"><span>15</span><span>6<i>x</i></span></span> + <span class="fr"><span>2</span><span>6<i>x</i></span></span> = <span class="fr"><span>17</span><span>6<i>x</i></span></span></span>, <span class="m"><i>x</i> ≠ 0</span>.` },
    { q: `Subtract <span class="m"><span class="fr"><span><i>x</i></span><span><i>x</i> − 3</span></span> − <span class="fr"><span>3</span><span><i>x</i> − 3</span></span></span>.`, a: `Same denominator: <span class="m"><span class="fr"><span><i>x</i> − 3</span><span><i>x</i> − 3</span></span> = 1</span>, for <span class="m"><i>x</i> ≠ 3</span>.` },
    { q: `Subtract <span class="m"><span class="fr"><span>2</span><span><i>x</i> + 3</span></span> − <span class="fr"><span>1</span><span><i>x</i> − 1</span></span></span>.`, a: `LCD <span class="m">(<i>x</i> + 3)(<i>x</i> − 1)</span>: <span class="m"><span class="fr"><span>2(<i>x</i> − 1) − (<i>x</i> + 3)</span><span>(<i>x</i> + 3)(<i>x</i> − 1)</span></span> = <span class="fr"><span><i>x</i> − 5</span><span>(<i>x</i> + 3)(<i>x</i> − 1)</span></span></span>, <span class="m"><i>x</i> ≠ −3, 1</span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span>6</span><span><i>x</i><sup>2</sup> − 9</span></span> − <span class="fr"><span>1</span><span><i>x</i> − 3</span></span></span>.`, a: `LCD <span class="m">(<i>x</i> + 3)(<i>x</i> − 3)</span>: <span class="m"><span class="fr"><span>6 − (<i>x</i> + 3)</span><span>(<i>x</i> + 3)(<i>x</i> − 3)</span></span> = <span class="fr"><span>3 − <i>x</i></span><span>(<i>x</i> + 3)(<i>x</i> − 3)</span></span> = <span class="fr"><span>−1</span><span><i>x</i> + 3</span></span></span>, <span class="m"><i>x</i> ≠ −3, 3</span>.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["a1-quad-formula"] = {
  title: "The Quadratic Formula & Discriminant",
  short: "Solve any ax² + bx + c = 0; b² − 4ac counts the roots",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Quadratic equations · the general solution",
  hero: `<span class="m"><span class="c1"><i>x</i></span> = <span class="fr"><span>−<span class="c2"><i>b</i></span> ± √<span style="text-decoration:overline"><span class="c4"><i>b</i><sup>2</sup> − 4<i>ac</i></span></span></span><span>2<span class="c2"><i>a</i></span></span></span></span>`,
  lede: `The quadratic formula solves every quadratic equation <span class="m"><span class="c2"><i>a</i></span><i>x</i><sup>2</sup> + <span class="c2"><i>b</i></span><i>x</i> + <span class="c2"><i>c</i></span> = 0</span>. The <span class="c4">discriminant</span> <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span> tells you in advance how many real <span class="c1">roots</span> there are.`,
  plain: `<p>Factoring is quick when it works, and completing the square always works but takes several steps. The quadratic formula is completing the square done once and for all on the general equation. You read off <span class="m"><i>a</i></span>, <span class="m"><i>b</i></span> and <span class="m"><i>c</i></span>, substitute, and simplify. It works for every quadratic, including ones with messy decimals.</p>
<p>The part under the square root, <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span>, is called the <b>discriminant</b>. If it is positive, the ± gives two different real solutions, and the parabola crosses the <span class="m"><i>x</i></span>-axis twice. If it is zero, the ± adds and subtracts nothing, so there is one solution, and the parabola just touches the axis. If it is negative, there is no real square root, so there are no real solutions, and the parabola misses the axis.</p>
<p>Before you start, make sure the equation is in standard form with 0 on one side, and pay attention to signs. If <span class="m"><i>b</i> = −4</span>, then <span class="m">−<i>b</i> = 4</span> and <span class="m"><i>b</i><sup>2</sup> = 16</span>.</p>`,
  formal: `<p><b>Quadratic formula</b>: for <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span> with real coefficients and <span class="m"><i>a</i> ≠ 0</span>,</p>
<div class="display"><i>x</i> = <span class="fr"><span>−<i>b</i> ± √<span style="text-decoration:overline"><i>b</i><sup>2</sup> − 4<i>ac</i></span></span><span>2<i>a</i></span></span><br><span class="dim">derivation:</span> <i>x</i><sup>2</sup> + <span class="fr"><span><i>b</i></span><span><i>a</i></span></span><i>x</i> + <span class="fr"><span><i>b</i><sup>2</sup></span><span>4<i>a</i><sup>2</sup></span></span> = <span class="fr"><span><i>b</i><sup>2</sup></span><span>4<i>a</i><sup>2</sup></span></span> − <span class="fr"><span><i>c</i></span><span><i>a</i></span></span> &nbsp;⇒&nbsp; (<i>x</i> + <span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>)<sup>2</sup> = <span class="fr"><span><i>b</i><sup>2</sup> − 4<i>ac</i></span><span>4<i>a</i><sup>2</sup></span></span></div>
<p>The <b>discriminant</b> <span class="m"><i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i></span> determines the nature of the solutions: <span class="m"><i>D</i> &gt; 0</span> gives two distinct real solutions (rational if <span class="m"><i>D</i></span> is a perfect square and the coefficients are integers, irrational otherwise); <span class="m"><i>D</i> = 0</span> gives one real solution <span class="m">−<i>b</i>/(2<i>a</i>)</span>, a double root; <span class="m"><i>D</i> &lt; 0</span> gives no real solutions (two complex solutions, studied in Algebra II).</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>, <i>b</i>, <i>c</i>`, name: "Coefficients", desc: "The numbers in standard form ax² + bx + c = 0, including their signs. The coefficient a cannot be 0." },
    { c: "c4", sym: `<i>b</i><sup>2</sup> − 4<i>ac</i>`, name: "Discriminant", desc: "Positive: two real roots. Zero: one double root. Negative: no real roots." },
    { c: "c1", sym: `<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>`, name: "Roots", desc: "The solutions given by the + and − choices. They are the x-intercepts of the parabola y = ax² + bx + c." }
  ],
  steps: { title: "How to use the quadratic formula", items: [
    `Write the equation in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span>. Clear fractions or decimals if that makes the numbers easier.`,
    `Identify <span class="m c2"><i>a</i></span>, <span class="m c2"><i>b</i></span> and <span class="m c2"><i>c</i></span>, with their signs.`,
    `Compute the <span class="c4">discriminant</span> <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span>. If it is negative, stop: there is no real solution.`,
    `Substitute into <span class="m"><i>x</i> = (−<i>b</i> ± √<i>D</i>)/(2<i>a</i>)</span>, using parentheses around negative values.`,
    `Simplify the square root, then divide out any common factor of all terms in the numerator and the denominator.`,
    `Write both <span class="c1">roots</span>, and a decimal approximation if the problem needs one. Check in the original equation.`
  ] },
  example: {
    prompt: `An 8 in by 10 in photo gets a frame of uniform width. The framed picture must cover a total area of 140 in². How wide should the frame be, to the nearest hundredth of an inch?`,
    lines: [
      { math: `<span class="m">(8 + 2<i>x</i>)(10 + 2<i>x</i>) = 140</span>`, note: "Let x be the frame width. It adds 2x to each dimension." },
      { math: `<span class="m">4<i>x</i><sup>2</sup> + 36<i>x</i> − 60 = 0 &nbsp;⇒&nbsp; <i>x</i><sup>2</sup> + 9<i>x</i> − 15 = 0</span>`, note: "Expand, subtract 140, and divide by 4." },
      { math: `<span class="m"><span class="c2"><i>a</i> = 1, <i>b</i> = 9, <i>c</i> = −15</span>; &nbsp; <span class="c4"><i>D</i> = 81 + 60 = 141</span></span>`, note: "The discriminant is positive and not a perfect square: two irrational roots." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>−9 ± √141</span><span>2</span></span></span>`, note: "Substitute into the formula." },
      { math: `<span class="m"><span class="c1"><i>x</i> ≈ 1.44</span> &nbsp;or&nbsp; <i>x</i> ≈ −10.44</span>`, note: "√141 ≈ 11.874. A width cannot be negative, so reject the second root." },
      { math: `<span class="m">(8 + 2.874)(10 + 2.874) ≈ 10.874 × 12.874 ≈ 140.0 ✓</span>`, note: "Check the area with x ≈ 1.437." }
    ],
    answer: `The frame should be <span class="m"><span class="fr"><span>−9 + √141</span><span>2</span></span> ≈ 1.44</span> inches wide.`
  },
  why: `<p>Quadratic equations from measurement, physics and finance rarely factor. The quadratic formula solves all of them with one procedure, which is why it is built into calculators, spreadsheets and engineering software. The discriminant answers a practical yes-or-no question before any solving: will the ball reach that height, can a fence of this length enclose that area, does the design have a solution at all?</p>
<p>A negative discriminant is also where the complex numbers of Algebra II begin. The formula itself, derived by completing the square, is a model of how a general method is built from a specific technique.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Solves quadratic equations for stopping distance or time in motion problems with constant acceleration." },
    { role: "Electrical engineer", use: "Uses the discriminant of the characteristic equation of an RLC circuit to tell whether it is overdamped, critically damped or underdamped." },
    { role: "Financial analyst", use: "Solves quadratic equations for a two-period interest rate, such as P(1 + r)² = A with extra cash flows." },
    { role: "Ballistics analyst", use: "Applies the quadratic formula to the height equation to find when a projectile reaches a target height." },
    { role: "Game developer", use: "Tests whether a ray hits a sphere by checking the sign of the discriminant of the intersection equation." },
    { role: "Architect", use: "Solves for dimensions that give a required floor area when one side depends on the other." }
  ],
  life: [
    "Working out how wide a border or frame can be for a given total area",
    "Finding when a thrown ball will be at a certain height",
    "Checking whether a fixed length of fencing can enclose a given area",
    "Estimating the speed at which a car's stopping distance reaches a limit"
  ],
  fields: [
    { name: "Physics", use: "Kinematics equations with acceleration are quadratic in time and solved with the formula." },
    { name: "Engineering", use: "Characteristic equations of second-order systems are solved and classified by the discriminant." },
    { name: "Computer graphics", use: "Ray-sphere intersection and collision detection use the discriminant to test for hits." },
    { name: "Economics", use: "Break-even and optimal output in quadratic cost and revenue models come from the formula." }
  ],
  prereqWhy: {
    "a1-quad-sqrt": "The formula is derived by completing the square on ax² + bx + c = 0, and it relies on the square root property with ±."
  },
  unlocksWhy: {
    "a1-quad-graphs": "The formula gives the x-intercepts of a parabola, and the discriminant says whether there are two, one or none."
  },
  beyond: [
    { field: "Algebra II", why: "Negative discriminants lead to complex solutions a ± bi, and the formula solves equations in quadratic form such as x⁴ − 5x² + 4 = 0." },
    { field: "Precalculus", why: "Polynomial and rational inequalities, and intersections of conic sections, are solved with the formula." },
    { field: "Differential Equations", why: "The characteristic equation of a second-order linear equation is a quadratic whose discriminant decides the form of the solution." },
    { field: "Physics", why: "Time of flight and collision problems with constant acceleration are solved with the quadratic formula." }
  ],
  mistakes: [
    { wrong: `Using the equation before it is in standard form: for <span class="m">3<i>x</i><sup>2</sup> = 2<i>x</i> + 7</span> taking <span class="m"><i>b</i> = 2</span>, <span class="m"><i>c</i> = 7</span>.`, fix: `Move everything to one side first: <span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> − 7 = 0</span>, so <span class="m"><i>a</i> = 3</span>, <span class="m"><i>b</i> = −2</span>, <span class="m"><i>c</i> = −7</span>.` },
    { wrong: `Squaring a negative <span class="m"><i>b</i></span> without parentheses: for <span class="m"><i>b</i> = −4</span> writing <span class="m"><i>b</i><sup>2</sup> = −16</span>.`, fix: `<span class="m"><i>b</i><sup>2</sup> = (−4)<sup>2</sup> = 16</span>. The discriminant is always computed with <span class="m"><i>b</i></span> in parentheses.` },
    { wrong: `Dividing only part of the numerator by <span class="m">2<i>a</i></span>: <span class="m"><i>x</i> = −<i>b</i> ± √<i>D</i>/(2<i>a</i>)</span>.`, fix: `The fraction bar covers the whole numerator: <span class="m">(−<i>b</i> ± √<i>D</i>)/(2<i>a</i>)</span>. When reducing, divide every term in the numerator by the common factor.` }
  ],
  practice: [
    { q: `Use the quadratic formula to solve <span class="m"><i>x</i><sup>2</sup> + 5<i>x</i> + 6 = 0</span>.`, a: `<span class="m"><i>D</i> = 25 − 24 = 1</span>, so <span class="m"><i>x</i> = <span class="fr"><span>−5 ± 1</span><span>2</span></span></span>: <span class="m"><i>x</i> = −2</span> or <span class="m"><i>x</i> = −3</span>.` },
    { q: `Solve <span class="m">2<i>x</i><sup>2</sup> − 4<i>x</i> − 3 = 0</span>.`, a: `<span class="m"><i>D</i> = 16 + 24 = 40</span>, <span class="m"><i>x</i> = <span class="fr"><span>4 ± √40</span><span>4</span></span> = <span class="fr"><span>4 ± 2√10</span><span>4</span></span> = <span class="fr"><span>2 ± √10</span><span>2</span></span></span>, about <span class="m">2.58</span> and <span class="m">−0.58</span>.` },
    { q: `Use the discriminant to find the number of real solutions of (a) <span class="m"><i>x</i><sup>2</sup> + 2<i>x</i> + 5 = 0</span>, (b) <span class="m">9<i>x</i><sup>2</sup> − 12<i>x</i> + 4 = 0</span>, (c) <span class="m">2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0</span>.`, a: `(a) <span class="m">4 − 20 = −16 &lt; 0</span>: no real solution. (b) <span class="m">144 − 144 = 0</span>: one real solution, <span class="m"><i>x</i> = <span class="fr"><span>2</span><span>3</span></span></span>. (c) <span class="m">9 + 8 = 17 &gt; 0</span>: two irrational solutions.` },
    { q: `Solve <span class="m">3<i>x</i><sup>2</sup> = 2<i>x</i> + 7</span>.`, a: `<span class="m">3<i>x</i><sup>2</sup> − 2<i>x</i> − 7 = 0</span>, <span class="m"><i>D</i> = 4 + 84 = 88</span>, <span class="m"><i>x</i> = <span class="fr"><span>2 ± √88</span><span>6</span></span> = <span class="fr"><span>2 ± 2√22</span><span>6</span></span> = <span class="fr"><span>1 ± √22</span><span>3</span></span></span>, about <span class="m">1.90</span> and <span class="m">−1.23</span>.` }
  ],
  origin: `The Indian mathematician Brahmagupta, in his <i>Brāhmasphuṭasiddhānta</i> of 628 CE, stated in words a rule equivalent to the quadratic formula for one root of <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> = <i>c</i></span>.`
};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["a1-quad-graphs"] = {
  title: "Graphing Quadratic Functions",
  short: "Parabolas: vertex, axis of symmetry and intercepts",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Functions · parabolas",
  hero: `<span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + <span class="c1"><i>k</i></span> &nbsp;&nbsp; vertex <span class="c1">(<i>h</i>, <i>k</i>)</span>, &nbsp;axis <span class="c4"><i>x</i> = <i>h</i></span></span>`,
  lede: `The graph of a quadratic function is a parabola. It is symmetric about the <span class="c4">axis of symmetry</span>, turns at the <span class="c1">vertex</span>, opens up when <span class="m"><i>a</i> &gt; 0</span> and down when <span class="m"><i>a</i> &lt; 0</span>, and crosses the axes at its <span class="c2">intercepts</span>.`,
  plain: `<p>The simplest quadratic function is <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span>. Its graph is a U shape called a parabola, with its lowest point at the origin. Every other quadratic graph is this same shape, stretched or squashed, possibly flipped upside down, and slid to a new position.</p>
<p>Vertex form <span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> shows all of that directly. The number <span class="m"><i>h</i></span> slides the graph right, <span class="m"><i>k</i></span> slides it up, and the turning point, the <b>vertex</b>, lands at <span class="m">(<i>h</i>, <i>k</i>)</span>. Watch the sign: <span class="m">(<i>x</i> − 3)<sup>2</sup></span> moves the graph 3 to the right, and <span class="m">(<i>x</i> + 3)<sup>2</sup></span> moves it 3 to the left. The number <span class="m"><i>a</i></span> controls direction and width: positive opens up, negative opens down, and a bigger size means a narrower parabola.</p>
<p>A quadratic in standard form <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> hides the vertex, but one formula finds it: the axis of symmetry is <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>. Plug that <span class="m"><i>x</i></span> in to get the <span class="m"><i>y</i></span>-value of the vertex. The <span class="m"><i>y</i></span>-intercept is just <span class="m"><i>c</i></span>, and the <span class="m"><i>x</i></span>-intercepts are the solutions of <span class="m"><i>f</i>(<i>x</i>) = 0</span>.</p>`,
  formal: `<p>A <b>quadratic function</b> is <span class="m"><i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> with <span class="m"><i>a</i> ≠ 0</span> (<b>standard form</b>), or equivalently <span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> (<b>vertex form</b>). Its graph is a <b>parabola</b>.</p>
<div class="display">axis of symmetry: <i>x</i> = <i>h</i> = −<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span> &nbsp;&nbsp; vertex: (<i>h</i>, <i>k</i>) = (−<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>, <i>f</i>(−<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>))<br>domain: (−∞, ∞) &nbsp;&nbsp; range: [<i>k</i>, ∞) if <i>a</i> &gt; 0 <span class="dim">(minimum <i>k</i>)</span>, &nbsp;(−∞, <i>k</i>] if <i>a</i> &lt; 0 <span class="dim">(maximum <i>k</i>)</span><br><i>y</i>-intercept: (0, <i>c</i>) &nbsp;&nbsp; <i>x</i>-intercepts: real solutions of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</div>
<p>The number of <span class="m"><i>x</i></span>-intercepts is 2, 1 or 0 according as the discriminant <span class="m"><i>b</i><sup>2</sup> − 4<i>ac</i></span> is positive, zero or negative. The graph of <span class="m"><i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> is the graph of <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> stretched vertically by <span class="m">|<i>a</i>|</span>, reflected in the <span class="m"><i>x</i></span>-axis if <span class="m"><i>a</i> &lt; 0</span>, and translated <span class="m"><i>h</i></span> units horizontally and <span class="m"><i>k</i></span> units vertically. Standard form is converted to vertex form by completing the square.</p>`,
  legend: [
    { c: "c1", sym: `(<i>h</i>, <i>k</i>)`, name: "Vertex", desc: "The turning point: the minimum if the parabola opens up, the maximum if it opens down." },
    { c: "c4", sym: `<i>x</i> = <i>h</i>`, name: "Axis of symmetry", desc: "The vertical line through the vertex. The two halves of the parabola are mirror images across it. In standard form h = −b/(2a)." },
    { c: "c2", sym: `(0, <i>c</i>), (<i>x</i><sub>1</sub>, 0)`, name: "Intercepts", desc: "Where the graph crosses the axes. The y-intercept is c; the x-intercepts are the real roots, if any." },
    { c: "c3", sym: `<i>a</i>`, name: "Leading coefficient", desc: "Its sign sets the direction (up if positive, down if negative) and its size sets the width." }
  ],
  steps: { title: "How to graph a quadratic function", items: [
    `Determine the direction: opens up if <span class="m"><i>a</i> &gt; 0</span>, down if <span class="m"><i>a</i> &lt; 0</span>.`,
    `Find the <span class="c4">axis of symmetry</span>: <span class="m"><i>x</i> = <i>h</i></span> from vertex form, or <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span> from standard form.`,
    `Find the <span class="c1">vertex</span> by evaluating the function at that <span class="m"><i>x</i></span>-value.`,
    `Find the <span class="c2"><i>y</i>-intercept</span> <span class="m">(0, <i>f</i>(0))</span> and reflect it across the axis of symmetry to get a second point.`,
    `Find the <span class="c2"><i>x</i>-intercepts</span> by solving <span class="m"><i>f</i>(<i>x</i>) = 0</span> (factoring or the quadratic formula). If the discriminant is negative, there are none.`,
    `Plot the points, draw a smooth U-shaped curve through them, and state the domain and range.`
  ] },
  example: {
    prompt: `The water from a fountain jet follows <span class="m"><i>h</i>(<i>x</i>) = −0.5<i>x</i><sup>2</sup> + 4<i>x</i> + 1</span>, where <span class="m"><i>x</i></span> is the horizontal distance from the nozzle and <span class="m"><i>h</i></span> is the height, both in metres. Find the highest point of the arc and where the water lands.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>a</i> = −0.5</span>, &nbsp;<i>b</i> = 4, &nbsp;<i>c</i> = 1</span>`, note: "a is negative, so the parabola opens down and the vertex is a maximum." },
      { math: `<span class="m"><span class="c4"><i>x</i> = −<span class="fr"><span>4</span><span>2(−0.5)</span></span> = 4</span></span>`, note: "Axis of symmetry from x = −b/(2a)." },
      { math: `<span class="m"><i>h</i>(4) = −0.5(16) + 16 + 1 = <span class="c1">9</span></span>`, note: "The vertex is (4, 9)." },
      { math: `<span class="m"><span class="c2">(0, 1)</span></span>`, note: "y-intercept: the nozzle is 1 m above the ground." },
      { math: `<span class="m">−0.5<i>x</i><sup>2</sup> + 4<i>x</i> + 1 = 0 &nbsp;⇒&nbsp; <i>x</i><sup>2</sup> − 8<i>x</i> − 2 = 0</span>`, note: "The water lands where h = 0. Multiply by −2 to simplify." },
      { math: `<span class="m"><i>x</i> = <span class="fr"><span>8 ± √72</span><span>2</span></span> = 4 ± 3√2, &nbsp; <span class="c2"><i>x</i> ≈ 8.24</span></span>`, note: "Quadratic formula; the negative root 4 − 3√2 is behind the nozzle and is rejected." }
    ],
    answer: `The water reaches a maximum height of <span class="m c1">9 m</span> at 4 m from the nozzle and lands about <span class="m c2">8.24 m</span> away.`
  },
  why: `<p>Quadratic functions model anything with a single peak or a single low point: the path of a thrown object, the shape of a satellite dish or a bridge cable, revenue as price rises, the cost per unit as production grows. The vertex answers the most common question, "what is the best or worst value and where does it occur?", and the intercepts answer "when does it start or stop?".</p>
<p>Graphing a parabola also brings together everything about quadratics: factoring and the quadratic formula give the <span class="m"><i>x</i></span>-intercepts, completing the square gives vertex form, and the discriminant tells you how many intercepts to expect. The ideas of shifting, stretching and reflecting a parent graph apply to every function family in precalculus.</p>`,
  careers: [
    { role: "Civil engineer", use: "Designs parabolic vertical curves on roads so drivers pass smoothly over hills, using the vertex to set the high point." },
    { role: "Antenna engineer", use: "Shapes satellite dishes as parabolas so incoming signals reflect to the receiver at the focus." },
    { role: "Sports analyst", use: "Fits quadratic functions to tracked ball flight data to estimate peak height and landing distance." },
    { role: "Marketing analyst", use: "Graphs revenue as a quadratic function of price to find the vertex, the price that maximises revenue." },
    { role: "Architect", use: "Uses parabolic arches in bridges and roofs, choosing the vertex height and the width at the base." },
    { role: "Fountain and lighting designer", use: "Aims water jets and stage effects using the parabolic path of the stream to control where it lands." }
  ],
  life: [
    "Predicting how high and how far a thrown ball will go",
    "Recognising the curved shape of a satellite dish or car headlight reflector",
    "Seeing why raising a price too far can lower total sales income",
    "Aiming a garden hose to reach a particular spot"
  ],
  fields: [
    { name: "Physics", use: "Projectile paths under gravity are parabolas, and height versus time is a quadratic function." },
    { name: "Engineering", use: "Parabolic reflectors, arches and road curves are designed from quadratic functions." },
    { name: "Economics", use: "Quadratic revenue and profit models are maximised at the vertex." },
    { name: "Statistics", use: "Quadratic regression fits a parabola to data that rise and then fall." }
  ],
  prereqWhy: {
    "a1-quad-formula": "The x-intercepts of a parabola are found with the quadratic formula, and the discriminant tells how many there are.",
    "a1-functions": "A parabola is the graph of a function, so evaluating f(x) and stating the domain and range are needed to describe it."
  },
  unlocksWhy: {
    "a1-quad-apps": "Maximum height, maximum area and maximum revenue problems are answered by finding the vertex of a parabola."
  },
  beyond: [
    { field: "Algebra II", why: "Transformations of the parent graph y = x² extend to every function family, and quadratic inequalities are solved from the graph." },
    { field: "Precalculus", why: "The parabola is one of the conic sections, defined by a focus and directrix." },
    { field: "Calculus I", why: "The vertex is the first example of an extreme value, which calculus finds for any function by setting the derivative to zero." },
    { field: "Physics", why: "Motion graphs with constant acceleration are parabolas, and their vertices mark where the velocity is zero." }
  ],
  mistakes: [
    { wrong: `Reading the vertex of <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 3)<sup>2</sup> − 5</span> as <span class="m">(−3, −5)</span>.`, fix: `In <span class="m"><i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span>, <span class="m"><i>h</i> = 3</span>. The vertex is <span class="m">(3, −5)</span>. For <span class="m">(<i>x</i> + 3)<sup>2</sup></span>, <span class="m"><i>h</i> = −3</span>.` },
    { wrong: `Using <span class="m"><i>x</i> = <i>b</i>/(2<i>a</i>)</span> for the axis of symmetry.`, fix: `The formula has a negative sign: <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>. For <span class="m"><i>x</i><sup>2</sup> − 6<i>x</i> + 5</span> that is <span class="m"><i>x</i> = 3</span>, not <span class="m">−3</span>.` },
    { wrong: `Giving the range as <span class="m">(−∞, ∞)</span> like a line.`, fix: `A parabola has a highest or lowest point. If <span class="m"><i>a</i> &gt; 0</span> the range is <span class="m">[<i>k</i>, ∞)</span>; if <span class="m"><i>a</i> &lt; 0</span> it is <span class="m">(−∞, <i>k</i>]</span>.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 3)<sup>2</sup> − 5</span>, give the vertex, axis of symmetry, direction and range.`, a: `Vertex <span class="m">(3, −5)</span>, axis <span class="m"><i>x</i> = 3</span>, opens up since <span class="m"><i>a</i> = 2 &gt; 0</span>, range <span class="m">[−5, ∞)</span>.` },
    { q: `Find the vertex and all intercepts of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 6<i>x</i> + 5</span>.`, a: `Axis <span class="m"><i>x</i> = 6/2 = 3</span>, <span class="m"><i>f</i>(3) = 9 − 18 + 5 = −4</span>, vertex <span class="m">(3, −4)</span>. <span class="m"><i>y</i></span>-intercept <span class="m">(0, 5)</span>. <span class="m">(<i>x</i> − 1)(<i>x</i> − 5) = 0</span> gives <span class="m"><i>x</i></span>-intercepts <span class="m">(1, 0)</span> and <span class="m">(5, 0)</span>.` },
    { q: `Write <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4<i>x</i> + 7</span> in vertex form and find its <span class="m"><i>x</i></span>-intercepts.`, a: `<span class="m"><i>x</i><sup>2</sup> + 4<i>x</i> + 4 + 3 = (<i>x</i> + 2)<sup>2</sup> + 3</span>, vertex <span class="m">(−2, 3)</span>. It opens up from a minimum of 3, and the discriminant is <span class="m">16 − 28 = −12 &lt; 0</span>, so there are <b>no <span class="m"><i>x</i></span>-intercepts</b>.` },
    { q: `Find the quadratic function with vertex <span class="m">(1, −8)</span> whose graph passes through <span class="m">(3, 0)</span>. Give it in standard form.`, a: `<span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − 1)<sup>2</sup> − 8</span>. Then <span class="m">0 = <i>a</i>(2)<sup>2</sup> − 8</span>, so <span class="m"><i>a</i> = 2</span>. <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 1)<sup>2</sup> − 8 = 2<i>x</i><sup>2</sup> − 4<i>x</i> − 6</span>.` }
  ],
  origin: `Apollonius of Perga named the parabola in his <i>Conics</i> (about 200 BCE), studying it as a slice of a cone. In <i>Two New Sciences</i> (1638), Galileo Galilei showed that a projectile, ignoring air resistance, follows a parabolic path.`
};

/* ------------------------------------------------------------------ */
ARITH["a1-quad-apps"] = {
  title: "Applications of Quadratics",
  short: "Projectiles, maximum area and maximum revenue",
  grade: "Grade 10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Quadratic functions · modelling and optimisation",
  hero: `<span class="m"><span class="c2"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub></span> &nbsp;&nbsp; <span class="c1"><i>t</i><sub>max</sub> = <span class="fr"><span><i>v</i><sub>0</sub></span><span>32</span></span></span></span>`,
  lede: `Quadratic models answer two kinds of question: when does a quantity reach a given value (solve the equation, often for the <span class="c3">ground hits</span>), and what is its largest or smallest value (find the <span class="c1">vertex</span>).`,
  plain: `<p>Throw a ball straight up and it slows, stops for an instant at the top, then falls back faster and faster. Its height over time follows a parabola. In feet, <span class="m"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub></span>, where <span class="m"><i>v</i><sub>0</sub></span> is the launch speed upward and <span class="m"><i>h</i><sub>0</sub></span> the starting height. In metres the <span class="m">−16</span> becomes <span class="m">−4.9</span>. Both numbers are half the acceleration due to gravity.</p>
<p>Two questions come up. "When does it hit the ground?" means solve <span class="m"><i>h</i>(<i>t</i>) = 0</span> and keep the positive time. "How high does it go?" means find the vertex: its time is <span class="m">−<i>b</i>/(2<i>a</i>)</span>, and its height is the function at that time. If you ask whether it ever reaches some height and the discriminant is negative, the answer is no.</p>
<p>The same vertex idea solves <b>optimisation</b> problems. With a fixed length of fence, a rectangle's area is a quadratic function of its width, and the vertex gives the largest area. When raising a price loses customers, revenue is price times quantity, a quadratic, and the vertex gives the best price.</p>`,
  formal: `<p><b>Vertical motion</b> under constant gravitational acceleration, ignoring air resistance:</p>
<div class="display"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub> &nbsp;<span class="dim">(feet, <i>g</i> ≈ 32 ft/s²)</span> &nbsp;&nbsp; <i>h</i>(<i>t</i>) = −4.9<i>t</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + <i>h</i><sub>0</sub> &nbsp;<span class="dim">(metres, <i>g</i> ≈ 9.8 m/s²)</span><br>maximum at <i>t</i> = −<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span> = <span class="fr"><span><i>v</i><sub>0</sub></span><span><i>g</i></span></span>; &nbsp; ground hit where <i>h</i>(<i>t</i>) = 0, <i>t</i> &gt; 0</div>
<p>More generally, a quadratic function <span class="m"><i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> attains its <b>maximum</b> (if <span class="m"><i>a</i> &lt; 0</span>) or <b>minimum</b> (if <span class="m"><i>a</i> &gt; 0</span>) value <span class="m"><i>f</i>(−<i>b</i>/(2<i>a</i>))</span> at <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>. The equation <span class="m"><i>f</i>(<i>x</i>) = <i>k</i></span> has real solutions exactly when the discriminant of <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + (<i>c</i> − <i>k</i>)</span> is nonnegative. In every application the domain is restricted to values that make physical sense, such as <span class="m"><i>t</i> ≥ 0</span> and positive lengths.</p>`,
  legend: [
    { c: "c2", sym: `<i>h</i>(<i>t</i>)`, name: "The curve", desc: "The quadratic model, such as height versus time or area versus width." },
    { c: "c1", sym: `(<i>t</i><sub>max</sub>, <i>h</i><sub>max</sub>)`, name: "Maximum", desc: "The vertex of the parabola: the greatest height, area or revenue, and where it occurs." },
    { c: "c3", sym: `<i>h</i>(<i>t</i>) = 0`, name: "Ground hits", desc: "The times when the height is zero. The positive one is when the object lands." },
    { c: "c4", sym: `<i>v</i><sub>0</sub>, <i>h</i><sub>0</sub>`, name: "Initial conditions", desc: "Launch speed (positive upward) and starting height. They are the b and c of the quadratic." }
  ],
  steps: { title: "How to solve a quadratic application", items: [
    `Define the variable with units and write the quadratic model: from a formula (projectiles) or by building it (area = length × width, revenue = price × quantity).`,
    `Decide what is asked. A time, length or price at which the quantity equals some value: solve an equation. A largest or smallest value: find the <span class="c1">vertex</span>.`,
    `For an equation, move everything to one side and solve by factoring or the quadratic formula. Check the discriminant first if you only need to know whether a solution exists.`,
    `For an optimum, compute <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>, then evaluate the function there.`,
    `Discard solutions outside the sensible domain, such as negative times or lengths.`,
    `Answer in a sentence with units, and check that the numbers are reasonable.`
  ] },
  example: {
    prompt: `A ball is thrown upward at 48 ft/s from the edge of a cliff 64 ft above the ground. Find its maximum height and when it hits the ground.`,
    lines: [
      { math: `<span class="m c2"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + 48<i>t</i> + 64</span>`, note: "Height in feet after t seconds, with v₀ = 48 and h₀ = 64." },
      { math: `<span class="m"><i>t</i> = −<span class="fr"><span>48</span><span>2(−16)</span></span> = 1.5</span>`, note: "Time of the vertex, from t = −b/(2a)." },
      { math: `<span class="m"><i>h</i>(1.5) = −16(2.25) + 72 + 64 = <span class="c1">100</span></span>`, note: "Maximum height, 1.5 s after the throw." },
      { math: `<span class="m">−16<i>t</i><sup>2</sup> + 48<i>t</i> + 64 = 0 &nbsp;⇒&nbsp; <i>t</i><sup>2</sup> − 3<i>t</i> − 4 = 0</span>`, note: "It hits the ground when h = 0. Divide by −16." },
      { math: `<span class="m">(<i>t</i> − 4)(<i>t</i> + 1) = 0 &nbsp;⇒&nbsp; <span class="c3"><i>t</i> = 4</span></span>`, note: "Reject t = −1, which is before the throw." },
      { math: `<span class="m">−16(16) + 48(4) + 64 = −256 + 192 + 64 = 0 ✓</span>`, note: "Check the landing time." }
    ],
    answer: `The ball reaches a maximum height of <span class="m c1">100 ft</span> after 1.5 s and hits the ground after <span class="m c3">4 s</span>.`
  },
  why: `<p>Many practical questions are about the best possible value: the largest pen from a fixed roll of fence, the ticket price that brings in the most money, the angle and speed that send a ball highest. When the quantity is a quadratic function, the vertex answers these questions exactly, with no guessing.</p>
<p>This is the first real optimisation problem most students meet. Calculus generalises it to any function by finding where the rate of change is zero, and physics builds on the projectile model to handle motion in two dimensions and with air resistance.</p>`,
  careers: [
    { role: "Sports scientist", use: "Models the height of a jumper's centre of mass as −4.9t² + v₀t + h₀ to estimate take-off speed from hang time." },
    { role: "Pricing analyst", use: "Fits revenue as a quadratic function of price and uses the vertex to recommend the price that maximises revenue." },
    { role: "Farmer", use: "Finds the pen dimensions that give the largest area for a fixed length of fencing along a barn or river." },
    { role: "Forensic investigator", use: "Uses projectile equations to work backward from where an object landed to its launch speed or height." },
    { role: "Civil engineer", use: "Computes the maximum height or sag of a parabolic arch or cable from its quadratic model." },
    { role: "Fireworks technician", use: "Sets shell launch speeds so the burst happens near the vertex of the trajectory, at a planned altitude." }
  ],
  life: [
    "Working out how long a ball or a dropped object stays in the air",
    "Getting the biggest garden or dog run from a fixed amount of fencing",
    "Seeing why a small price increase can raise income but a large one lowers it",
    "Judging how high a basketball shot or a kicked ball will go"
  ],
  fields: [
    { name: "Physics", use: "Vertical and projectile motion under gravity are modelled by quadratic functions of time." },
    { name: "Economics", use: "Revenue and profit that rise and then fall with price or output are maximised at the vertex." },
    { name: "Agriculture and land management", use: "Maximum-area enclosures with fixed perimeter are classic quadratic optimisation problems." },
    { name: "Engineering", use: "Beam deflection, arch design and trajectory planning use quadratic models and their extreme values." }
  ],
  prereqWhy: {
    "a1-quad-graphs": "Every application relies on finding the vertex for a maximum or minimum and the intercepts for start and end times, which come from graphing quadratics."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "Optimisation problems are solved for any function by setting the derivative equal to zero, which for a quadratic gives the vertex." },
    { field: "Physics", why: "Kinematics with constant acceleration, including two-dimensional projectile motion, is built on these quadratic models." },
    { field: "Economics", why: "Profit maximisation and consumer-demand models often use quadratic functions of price or quantity." },
    { field: "Operations research", why: "Quadratic programming optimises quadratic cost functions subject to constraints." }
  ],
  mistakes: [
    { wrong: `Giving the time of the maximum as the maximum height: "the maximum is 1.5".`, fix: `The vertex has two coordinates. <span class="m"><i>t</i> = 1.5</span> s is when; <span class="m"><i>h</i>(1.5) = 100</span> ft is how high.` },
    { wrong: `Using <span class="m">−16</span> with metres or <span class="m">−4.9</span> with feet.`, fix: `Match the units: <span class="m">−16<i>t</i><sup>2</sup></span> for feet, <span class="m">−4.9<i>t</i><sup>2</sup></span> for metres.` },
    { wrong: `Keeping both roots: "the ball lands at <span class="m"><i>t</i> = 4</span> or <span class="m"><i>t</i> = −1</span>".`, fix: `Time after the throw is nonnegative, so reject <span class="m"><i>t</i> = −1</span>. Always check the domain of the situation.` },
    { wrong: `For a fence along a barn, using a perimeter of four sides: <span class="m">2<i>x</i> + 2<i>y</i> = 120</span>.`, fix: `Only three sides are fenced: <span class="m">2<i>x</i> + <i>y</i> = 120</span>, so the area is <span class="m"><i>x</i>(120 − 2<i>x</i>)</span>.` }
  ],
  practice: [
    { q: `A rock is dropped from a bridge 144 ft above the water. How long until it hits the water?`, a: `<span class="m"><i>h</i>(<i>t</i>) = −16<i>t</i><sup>2</sup> + 144 = 0</span>, so <span class="m"><i>t</i><sup>2</sup> = 9</span> and <span class="m"><i>t</i> = 3</span> s (reject <span class="m">−3</span>).` },
    { q: `A farmer has 120 ft of fence to enclose a rectangular pen against a barn wall, fencing only the other three sides. What dimensions give the largest area?`, a: `Let <span class="m"><i>x</i></span> be each side perpendicular to the barn: <span class="m"><i>A</i> = <i>x</i>(120 − 2<i>x</i>) = −2<i>x</i><sup>2</sup> + 120<i>x</i></span>. Vertex <span class="m"><i>x</i> = −120/(2(−2)) = 30</span>. The pen is <span class="m">30</span> ft by <span class="m">60</span> ft, area <span class="m">1800</span> ft².` },
    { q: `A ball is kicked straight up from the ground at 14.7 m/s, so <span class="m"><i>h</i>(<i>t</i>) = −4.9<i>t</i><sup>2</sup> + 14.7<i>t</i></span>. Find its maximum height. Does it ever reach 12 m?`, a: `Vertex <span class="m"><i>t</i> = 14.7/9.8 = 1.5</span> s, <span class="m"><i>h</i>(1.5) = −11.025 + 22.05 = 11.025</span> m. For 12 m: <span class="m">−4.9<i>t</i><sup>2</sup> + 14.7<i>t</i> − 12 = 0</span> has discriminant <span class="m">216.09 − 235.2 = −19.11 &lt; 0</span>, so it <b>never reaches</b> 12 m.` },
    { q: `A club sells <span class="m">800 − 20<i>p</i></span> T-shirts when the price is <span class="m"><i>p</i></span> dollars. What price maximises revenue, and what is the maximum revenue?`, a: `<span class="m"><i>R</i>(<i>p</i>) = <i>p</i>(800 − 20<i>p</i>) = −20<i>p</i><sup>2</sup> + 800<i>p</i></span>. Vertex <span class="m"><i>p</i> = −800/(2(−20)) = 20</span>. Revenue <span class="m"><i>R</i>(20) = 20 · 400 = $8,000</span>.` }
  ],
  origin: `Galileo Galilei's <i>Two New Sciences</i> (1638) showed that a body falling from rest covers distances proportional to the square of the elapsed time, and that a projectile's path is a parabola, the result behind every model on this page.`
};
