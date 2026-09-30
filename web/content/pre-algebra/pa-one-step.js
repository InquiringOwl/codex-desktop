window.ARITH = window.ARITH || {};

ARITH["pa-one-step"] = {
  title: "One-Step Equations",
  short: "Undo one operation on both sides to isolate x",
  grade: "Grade 6 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Solving equations · properties of equality",
  hero: `<span class="m"><span class="c2"><i>x</i></span> + <span class="c3"><i>a</i></span> = <i>b</i> &nbsp;⇒&nbsp; <span class="c2"><i>x</i></span> = <i>b</i> <span class="c1">− <i>a</i></span></span>`,
  lede: `To solve an equation, get <span class="m c2"><i>x</i></span> alone. If one operation has been done to <span class="m c2"><i>x</i></span>, apply its <span class="m c1">inverse</span> to both sides and read off the <span class="m c5">solution</span>.`,
  plain: `<p>Picture a balance with <span class="m"><i>x</i> + 7</span> on one side and 12 on the other. You want <span class="m"><i>x</i></span> by itself. Take 7 away from the left pan. To keep the beam level, you must take 7 away from the right pan too. Now the left side is <span class="m"><i>x</i></span> and the right side is 5, so <span class="m"><i>x</i> = 5</span>.</p>
<p>The trick is to do the <b>opposite</b> of what was done to <span class="m"><i>x</i></span>. Addition and subtraction undo each other. Multiplication and division undo each other. If <span class="m"><i>x</i></span> was multiplied by 4, divide both sides by 4. If <span class="m"><i>x</i></span> was divided by 3, multiply both sides by 3.</p>
<p>The golden rule is: whatever you do to one side, do to the other. Then check by putting your answer back into the original equation.</p>`,
  formal: `<p>For real numbers <span class="m"><i>a</i>, <i>b</i>, <i>c</i></span>, the <b>properties of equality</b> state that if <span class="m"><i>a</i> = <i>b</i></span>, then</p>
<div class="display"><b>Addition</b>: <i>a</i> + <i>c</i> = <i>b</i> + <i>c</i> &nbsp;&nbsp; <b>Subtraction</b>: <i>a</i> − <i>c</i> = <i>b</i> − <i>c</i><br><b>Multiplication</b>: <i>ac</i> = <i>bc</i> &nbsp;&nbsp; <b>Division</b>: <span class="fr"><span><i>a</i></span><span><i>c</i></span></span> = <span class="fr"><span><i>b</i></span><span><i>c</i></span></span> &nbsp;<span class="dim">(<i>c</i> ≠ 0)</span></div>
<p>Each property, applied to both sides (with a nonzero multiplier or divisor), produces an <b>equivalent equation</b>: one with the same solution set. A <b>one-step equation</b> has the form <span class="m"><i>x</i> + <i>a</i> = <i>b</i></span>, <span class="m"><i>x</i> − <i>a</i> = <i>b</i></span>, <span class="m"><i>ax</i> = <i>b</i></span> or <span class="m"><i>x</i>/<i>a</i> = <i>b</i></span> (<span class="m"><i>a</i> ≠ 0</span>) and is solved by a single inverse operation. For <span class="m"><span class="fr"><span><i>p</i></span><span><i>q</i></span></span><i>x</i> = <i>b</i></span>, multiply both sides by the reciprocal <span class="m"><span class="fr"><span><i>q</i></span><span><i>p</i></span></span></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Variable", desc: "The unknown you want alone on one side." },
    { c: "c3", sym: `<i>a</i>`, name: "Constant or coefficient", desc: "The number that has been added to, subtracted from, multiplied by or divided into x." },
    { c: "c1", sym: `− <i>a</i>`, name: "Inverse operation", desc: "The opposite operation, applied to both sides to undo what was done to x." },
    { c: "c5", sym: `<i>x</i> = …`, name: "Solution", desc: "The value left when x is isolated. It makes the original equation true." }
  ],
  steps: { title: "How to solve a one-step equation", items: [
    `Identify the one operation being done to <span class="m c2"><i>x</i></span>.`,
    `Choose its <span class="c1">inverse</span>: subtract to undo adding, add to undo subtracting, divide to undo multiplying, multiply to undo dividing.`,
    `Apply the inverse to <b>both</b> sides of the equation.`,
    `Simplify to get <span class="m c5"><i>x</i> = number</span>. For a fractional coefficient, multiply by its reciprocal.`,
    `Check by substituting the solution into the original equation.`
  ] },
  example: {
    prompt: `A cookie recipe uses <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> cup of sugar per batch. You used exactly 4 cups of sugar. How many batches did you make?`,
    lines: [
      { math: `<span class="m">let <span class="c2"><i>b</i></span> = number of batches</span>`, note: "Name the unknown." },
      { math: `<span class="m"><span class="c3"><span class="fr"><span>2</span><span>3</span></span></span><span class="c2"><i>b</i></span> = 4</span>`, note: "Sugar per batch times batches equals total sugar." },
      { math: `<span class="m"><span class="c1"><span class="fr"><span>3</span><span>2</span></span> ·</span> <span class="fr"><span>2</span><span>3</span></span><i>b</i> = <span class="c1"><span class="fr"><span>3</span><span>2</span></span> ·</span> 4</span>`, note: "Multiply both sides by the reciprocal of 2/3." },
      { math: `<span class="m c5"><i>b</i> = 6</span>`, note: "3/2 × 4 = 12/2 = 6." },
      { math: `<span class="m"><span class="fr"><span>2</span><span>3</span></span>(6) = <span class="fr"><span>12</span><span>3</span></span> = 4 ✓</span>`, note: "Check: 6 batches use 4 cups." }
    ],
    answer: `You made <span class="m">6</span> batches.`
  },
  why: `<p>One-step equations answer everyday "how many" and "how much" questions: how many hours at $18 an hour make $270, what price before tax gives a given total, how many servings a bag of rice makes. Each is one inverse operation away from the answer.</p>
<p>More importantly, the rule "do the same thing to both sides" is the engine of all equation solving. Every longer equation is solved by a sequence of these single steps.</p>`,
  careers: [
    { role: "Nurse", use: "Solves 250x = 125 to find that x = 0.5 mL of a 250 mg/mL stock solution delivers a 125 mg dose." },
    { role: "Retail manager", use: "Finds the pre-tax price p from 1.08p = total when the sales tax rate is 8%." },
    { role: "Electrician", use: "Solves V = IR for the current I by dividing the voltage by the resistance." },
    { role: "Chef", use: "Divides total ingredient on hand by the amount per batch to find how many batches can be made." },
    { role: "Pilot", use: "Solves d = 450t for flight time t when cruising at 450 knots over a known distance." }
  ],
  life: [
    "Working out how many hours of work pay for a purchase",
    "Finding the original price when you know the price after tax",
    "Figuring out how many servings a package makes",
    "Splitting a bill evenly: 4x = total"
  ],
  fields: [
    { name: "Physics", use: "Many problems reduce to one-step equations such as F = ma solved for a." },
    { name: "Chemistry", use: "Concentration equations such as c = n/V are solved for the unknown amount or volume." },
    { name: "Accounting", use: "Unknown pre-tax or pre-discount amounts are found with a single division." }
  ],
  prereqWhy: {
    "pa-equations": "You need to know what a solution and an equivalent equation are, and how to check a solution by substitution.",
    "fraction-ops": "Equations with fractional coefficients are solved by multiplying by a reciprocal and simplifying fractions.",
    "decimal-ops": "Many real equations, such as prices with tax, have decimal coefficients that must be divided accurately."
  },
  unlocksWhy: {
    "pa-two-step": "A two-step equation is solved by applying two of these inverse operations in reverse order.",
    "pa-similar": "Finding a missing side of similar figures ends with a one-step equation such as 4x = 30."
  },
  beyond: [
    { field: "Algebra I", why: "Multi-step, literal and systems problems are all built from repeated one-step moves on both sides." },
    { field: "Chemistry", why: "Solving PV = nRT or c = n/V for one quantity is a one-step equation with letters." },
    { field: "Physics", why: "Kinematics and circuit formulas are routinely solved for one variable by a single inverse operation." }
  ],
  mistakes: [
    { wrong: `Solving <span class="m"><i>x</i> − 9 = −4</span> as <span class="m"><i>x</i> = −13</span>.`, fix: `Undo subtracting 9 by <b>adding</b> 9: <span class="m"><i>x</i> = −4 + 9 = 5</span>.` },
    { wrong: `Solving <span class="m">−3<i>x</i> = 12</span> by dividing by 3 to get <span class="m"><i>x</i> = 4</span>.`, fix: `The coefficient is −3, so divide by −3: <span class="m"><i>x</i> = −4</span>.` },
    { wrong: `Solving <span class="m"><span class="fr"><span>2</span><span>3</span></span><i>x</i> = 4</span> by multiplying both sides by <span class="m"><span class="fr"><span>2</span><span>3</span></span></span>.`, fix: `Multiply by the reciprocal <span class="m"><span class="fr"><span>3</span><span>2</span></span></span>: <span class="m"><i>x</i> = 6</span>.` },
    { wrong: `Reading <span class="m">−<i>x</i> = 8</span> as <span class="m"><i>x</i> = 8</span>.`, fix: `<span class="m">−<i>x</i></span> means <span class="m">−1 · <i>x</i></span>. Divide by −1: <span class="m"><i>x</i> = −8</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><i>x</i> − 9 = −4</span>.`, a: `Add 9 to both sides: <span class="m"><i>x</i> = 5</span>. Check: <span class="m">5 − 9 = −4</span>.` },
    { q: `Solve <span class="m">−6<i>y</i> = 42</span>.`, a: `Divide both sides by −6: <span class="m"><i>y</i> = −7</span>. Check: <span class="m">−6(−7) = 42</span>.` },
    { q: `Solve <span class="m">−<span class="fr"><span>3</span><span>5</span></span><i>w</i> = 12</span>.`, a: `Multiply by <span class="m">−<span class="fr"><span>5</span><span>3</span></span></span>: <span class="m"><i>w</i> = −20</span>. Check: <span class="m">−<span class="fr"><span>3</span><span>5</span></span>(−20) = 12</span>.` },
    { q: `With 8% sales tax, a jacket costs $45.36. Solve <span class="m">1.08<i>p</i> = 45.36</span> for the price before tax.`, a: `<span class="m"><i>p</i> = 45.36 ÷ 1.08 = 42</span>, so $42. Check: <span class="m">1.08 × 42 = 45.36</span>.` }
  ],
  origin: `The word <i>algebra</i> comes from <i>al-jabr</i>, "restoration", in the title of al-Khwarizmi's book (c. 820 CE). <i>Al-jabr</i> was the step of removing a subtracted quantity by adding it to both sides, and <i>al-muqabala</i>, "balancing", was cancelling equal quantities from both sides: the properties of equality used here.`
};
