window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["pa-similar"] = {
  title: "Similar Figures & Scale Drawings",
  short: "Same shape, different size, one scale factor",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Proportional reasoning · shape and scale",
  hero: `<span class="m"><span class="fr"><span class="c3"><i>a</i>′</span><span class="c2"><i>a</i></span></span> = <span class="fr"><span class="c3"><i>b</i>′</span><span class="c2"><i>b</i></span></span> = <span class="fr"><span class="c3"><i>c</i>′</span><span class="c2"><i>c</i></span></span> = <span class="c4"><i>k</i></span></span>`,
  lede: `Two figures are similar when one is an exact enlargement or reduction of the other. Every length is multiplied by the same <span class="m c4">scale factor <i>k</i></span>, and the angles stay the same.`,
  plain: `<p>A photo and a bigger print of the same photo have the same shape. Nothing is stretched. If the print is 3 times as wide, it is also 3 times as tall. Shapes like that are called <b>similar</b>. The number you multiply every length by is the <b>scale factor</b>.</p>
<p>This lets you find lengths you cannot measure. If you know one pair of matching sides, you know the scale factor, and then you can find any other side. That is how you can work out the height of a tree from its shadow, or the size of a room from a floor plan.</p>
<p>A <b>scale drawing</b> is a similar copy of something real, like a map or a blueprint. Its scale, such as 1 inch to 8 feet, tells you how drawing lengths compare to real lengths. Be careful with area: if lengths are doubled, area is multiplied by 4, not 2.</p>`,
  formal: `<p>Two polygons are <b>similar</b>, written <span class="m">△<i>ABC</i> ∼ △<i>A</i>′<i>B</i>′<i>C</i>′</span>, when their corresponding angles are congruent and their corresponding sides are proportional:</p>
<div class="display">∠<i>A</i> ≅ ∠<i>A</i>′, ∠<i>B</i> ≅ ∠<i>B</i>′, ∠<i>C</i> ≅ ∠<i>C</i>′ &nbsp;and&nbsp; <span class="fr"><span class="c3"><i>A</i>′<i>B</i>′</span><span class="c2"><i>AB</i></span></span> = <span class="fr"><span class="c3"><i>B</i>′<i>C</i>′</span><span class="c2"><i>BC</i></span></span> = <span class="fr"><span class="c3"><i>C</i>′<i>A</i>′</span><span class="c2"><i>CA</i></span></span> = <span class="c4"><i>k</i></span></div>
<p>The constant <span class="m c4"><i>k</i> &gt; 0</span> is the <b>scale factor</b> from the original to the image; <span class="m"><i>k</i> &gt; 1</span> is an enlargement and <span class="m">0 &lt; <i>k</i> &lt; 1</span> a reduction. For triangles, two pairs of congruent angles are enough to guarantee similarity (<b>AA similarity</b>). Perimeters scale by <span class="m"><i>k</i></span>, areas by <span class="m"><i>k</i><sup>2</sup></span> and volumes of similar solids by <span class="m"><i>k</i><sup>3</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>, <i>b</i>, <i>c</i>`, name: "Original sides", desc: "The side lengths of the starting figure." },
    { c: "c3", sym: `<i>a</i>′, <i>b</i>′, <i>c</i>′`, name: "Image sides", desc: "The matching side lengths of the enlarged or reduced figure." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "Image length divided by original length. It is the same for every pair of matching sides." },
    { c: "c1", sym: `<i>x</i>`, name: "Unknown side", desc: "A missing length, found from a proportion with one known pair." }
  ],
  steps: { title: "How to find a missing length in similar figures", items: [
    `Match the corresponding parts. The equal angles tell you which sides go together.`,
    `Find the scale factor from one complete pair: <span class="m"><span class="c4"><i>k</i></span> = image ÷ original</span>.`,
    `Write a proportion with the unknown, keeping image over original on both sides.`,
    `Solve by cross-multiplying, or multiply the known side by <span class="m c4"><i>k</i></span>.`,
    `For a scale drawing, convert units so both ratios use the same units, and check that your answer is sensible in size.`
  ] },
  example: {
    prompt: `At the same time of day, a 1.8 m tall person casts a shadow 2.4 m long and a tree casts a shadow 14 m long. How tall is the tree?`,
    lines: [
      { math: `<span class="m">△person ∼ △tree</span>`, note: "The sun's rays hit both at the same angle and both stand upright, so the triangles are similar by AA." },
      { math: `<span class="m"><span class="fr"><span class="c1"><i>h</i></span><span class="c3">14</span></span> = <span class="fr"><span class="c2">1.8</span><span class="c2">2.4</span></span></span>`, note: "Height over shadow length is the same in both triangles." },
      { math: `<span class="m">2.4<span class="c1"><i>h</i></span> = 1.8 × 14 = 25.2</span>`, note: "Cross-multiply." },
      { math: `<span class="m"><span class="c1"><i>h</i></span> = 25.2 ÷ 2.4 = 10.5</span>`, note: "Divide both sides by 2.4." },
      { math: `<span class="m"><span class="c4"><i>k</i></span> = 14 ÷ 2.4 ≈ 5.83, &nbsp;1.8 × 5.83 ≈ 10.5</span>`, note: "Check with the scale factor: the tree's triangle is about 5.83 times the person's." }
    ],
    answer: `The tree is <span class="m">10.5</span> m tall.`
  },
  why: `<p>Scale is how people plan things too big or too small to handle directly. Maps, architectural plans, engineering drawings, model kits and enlarged microscope images are all similar figures. Reading them correctly means using one scale factor for lengths and knowing that area and volume scale faster.</p>
<p>Similar triangles are the foundation of trigonometry. The sine, cosine and tangent of an angle are fixed ratios because all right triangles with that angle are similar.</p>`,
  careers: [
    { role: "Architect", use: "Draws floor plans at a scale such as 1/4 inch to 1 foot and converts drawing measurements to real dimensions." },
    { role: "Surveyor", use: "Uses similar triangles in indirect measurement to find heights and distances that cannot be taped directly." },
    { role: "Cartographer", use: "Produces maps at a stated representative fraction such as 1:24,000 so map distances convert to ground distances." },
    { role: "Model maker", use: "Builds scale models, for example 1:87 HO-scale trains, dividing every real dimension by the same factor." },
    { role: "Forensic photographer", use: "Places a scale ruler in evidence photos so that real sizes can be measured from the enlarged image." },
    { role: "Graphic designer", use: "Enlarges logos and layouts by a fixed percentage so the proportions do not distort." }
  ],
  life: [
    "Reading distances from a map scale",
    "Enlarging a photo without stretching it",
    "Estimating the height of a tree or building from its shadow",
    "Checking whether furniture fits using a floor plan",
    "Understanding why a pizza twice as wide has four times the area"
  ],
  fields: [
    { name: "Architecture", use: "Plans, elevations and sections are scale drawings read with a single scale factor." },
    { name: "Geography", use: "Map scales relate map distance to ground distance." },
    { name: "Optics", use: "Magnification of lenses and projectors is a scale factor between similar images." },
    { name: "Biology", use: "Scaling laws explain why surface-area-to-volume ratios limit the size of cells and animals." }
  ],
  prereqWhy: {
    "pa-one-step": "After writing the proportion, finding the missing side is a one-step equation such as 2.4h = 25.2.",
    "proportions": "Corresponding sides of similar figures form equal ratios, and solving for a missing side is solving a proportion."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Geometry", why: "Triangle similarity theorems (AA, SAS, SSS) and proofs with proportional sides build directly on this topic." },
    { field: "Trigonometry", why: "The trigonometric ratios are defined from similar right triangles." },
    { field: "Physics", why: "Dimensional scaling explains how strength, heat loss and drag change when an object is enlarged." }
  ],
  mistakes: [
    { wrong: `Mismatching sides, such as putting the image's short side over the original's long side.`, fix: `Pair sides by the equal angles opposite them, and keep image over original in every ratio.` },
    { wrong: `Adding instead of multiplying: "each side is 3 cm longer, so the triangles are similar."`, fix: `Similarity multiplies lengths. A 3-4-5 triangle and a 6-7-8 triangle are not similar, because 6/3, 7/4 and 8/5 are not equal.` },
    { wrong: `Scaling area by <span class="m"><i>k</i></span>: "the room is drawn at half size, so its area is half."`, fix: `Area scales by <span class="m"><i>k</i><sup>2</sup></span>. At half size the drawn area is <span class="m">(<span class="fr"><span>1</span><span>2</span></span>)<sup>2</sup> = <span class="fr"><span>1</span><span>4</span></span></span> of the real area.` }
  ],
  practice: [
    { q: `A triangle with sides 3, 4 and 5 cm is similar to a triangle whose two shorter sides are 9 and 12 cm. Find the third side.`, a: `<span class="m"><i>k</i> = 9 ÷ 3 = 3</span>, so the third side is <span class="m">5 × 3 = 15</span> cm.` },
    { q: `A floor plan uses the scale 1 in : 8 ft. A room measures 2.5 in by 1.75 in on the plan. What are its real dimensions?`, a: `<span class="m">2.5 × 8 = 20</span> ft and <span class="m">1.75 × 8 = 14</span> ft, so the room is 20 ft by 14 ft.` },
    { q: `A 1:24 scale model car is 7.5 in long. How long is the real car, in feet?`, a: `<span class="m">7.5 × 24 = 180</span> in, and <span class="m">180 ÷ 12 = 15</span> ft.` },
    { q: `Two similar rectangles have scale factor <span class="m"><i>k</i> = 3</span>. The smaller has area 12 cm². What is the area of the larger?`, a: `Area scales by <span class="m"><i>k</i><sup>2</sup> = 9</span>, so the area is <span class="m">12 × 9 = 108</span> cm².` }
  ],
  origin: `According to later Greek writers such as Plutarch, Thales of Miletus (6th century BCE) found the height of an Egyptian pyramid by comparing its shadow with the shadow of a stick. Book VI of Euclid's <i>Elements</i> (c. 300 BCE) develops the theory of similar figures.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-proportional"] = {
  title: "Proportional Relationships (y = kx)",
  short: "A constant ratio, a line through the origin",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Functions · direct variation",
  hero: `<span class="m"><span class="c3"><i>y</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>x</i></span> &nbsp;&nbsp; <span class="c4"><i>k</i></span> = <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span></span>`,
  lede: `Two quantities are proportional when one is always the same multiple of the other. That multiple, <span class="m c4"><i>k</i></span>, is the unit rate, and the graph is a straight line through the origin.`,
  plain: `<p>If apples cost $2 per pound, then 3 pounds cost $6 and 10 pounds cost $20. The cost is always 2 times the weight. When one quantity is always the same number times another, the two are <b>proportional</b>. That number is the <b>constant of proportionality</b>, <span class="m c4"><i>k</i></span>.</p>
<p>You can spot a proportional relationship three ways. In a table, dividing <span class="m c3"><i>y</i></span> by <span class="m c2"><i>x</i></span> gives the same number every time. In an equation, it looks like <span class="m"><i>y</i> = <i>kx</i></span> with nothing added. On a graph, the points lie on a straight line that goes through <span class="m">(0, 0)</span>.</p>
<p>That last part matters. A taxi that charges $3 just to get in, plus $2 per mile, is not proportional. Zero miles still costs $3, so the line does not pass through the origin, and the ratio of cost to miles keeps changing.</p>`,
  formal: `<p>A variable <span class="m c3"><i>y</i></span> <b>varies directly</b> with <span class="m c2"><i>x</i></span> (is <b>directly proportional</b> to <span class="m c2"><i>x</i></span>) if there is a nonzero constant <span class="m c4"><i>k</i></span> such that</p>
<div class="display"><span class="c3"><i>y</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>x</i></span> &nbsp;&nbsp;for all <i>x</i> in the domain, &nbsp;equivalently&nbsp; <span class="fr"><span class="c3"><i>y</i></span><span class="c2"><i>x</i></span></span> = <span class="c4"><i>k</i></span> &nbsp;for every <i>x</i> ≠ 0</div>
<p><span class="m c4"><i>k</i></span> is the <b>constant of proportionality</b> (the unit rate, in units of <span class="m"><i>y</i></span> per unit of <span class="m"><i>x</i></span>). The graph of <span class="m"><i>y</i> = <i>kx</i></span> is a line through the origin with slope <span class="m"><i>k</i></span>, and the point <span class="m">(1, <i>k</i>)</span> lies on it. A linear function <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> with <span class="m"><i>b</i> ≠ 0</span> is not proportional.</p>`,
  legend: [
    { c: "c4", sym: `<i>k</i>`, name: "Constant of proportionality", desc: "The fixed ratio y/x, also the unit rate: how much y there is for each 1 unit of x." },
    { c: "c2", sym: `<i>x</i>`, name: "Input quantity", desc: "The independent quantity, such as weight bought or hours worked." },
    { c: "c3", sym: `<i>y</i>`, name: "Output quantity", desc: "The quantity that depends on x, such as cost or pay." },
    { c: "c1", sym: `(<i>x</i>, <i>y</i>)`, name: "Highlighted point", desc: "One pair from the table, plotted on the line. The point (1, k) shows the unit rate." }
  ],
  steps: { title: "How to test and use a proportional relationship", items: [
    `Divide each <span class="m c3"><i>y</i></span> by its <span class="m c2"><i>x</i></span>. If every ratio is the same, the relationship is proportional.`,
    `Call that common ratio <span class="m c4"><i>k</i></span> and write <span class="m"><span class="c3"><i>y</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>x</i></span></span>.`,
    `On a graph, check that the points lie on a straight line through <span class="m">(0, 0)</span>.`,
    `To predict, substitute the new <span class="m c2"><i>x</i></span> and multiply by <span class="m c4"><i>k</i></span>.`,
    `To go backward, divide the known <span class="m c3"><i>y</i></span> by <span class="m c4"><i>k</i></span>.`
  ] },
  example: {
    prompt: `At a deli, 0.75 lb of sliced turkey costs $8.25 and 1.2 lb costs $13.20. Is the price proportional to weight? If so, what do 2.5 lb cost?`,
    lines: [
      { math: `<span class="m">8.25 ÷ 0.75 = <span class="c4">11</span></span>`, note: "Price per pound for the first purchase." },
      { math: `<span class="m">13.20 ÷ 1.2 = <span class="c4">11</span></span>`, note: "Same ratio, so the relationship is proportional." },
      { math: `<span class="m"><span class="c3"><i>y</i></span> = <span class="c4">11</span><span class="c2"><i>x</i></span></span>`, note: "Cost in dollars equals 11 times weight in pounds, so k = 11 dollars per pound." },
      { math: `<span class="m"><span class="c3"><i>y</i></span> = 11(<span class="c2">2.5</span>) = 27.50</span>`, note: "Substitute x = 2.5." },
      { math: `<span class="m c1">(2.5, 27.50)</span>`, note: "Check: 27.50 divided by 2.5 is 11, the same unit rate." }
    ],
    answer: `Yes, the price is proportional at <span class="m">$11</span> per pound, so 2.5 lb cost <span class="m">$27.50</span>.`
  },
  why: `<p>Unit prices, hourly pay with no base amount, fuel use at a steady speed, currency exchange and recipe scaling are all proportional relationships. Recognising them lets you predict any value from a single rate. Recognising when something is not proportional, like a fare with a fixed fee, keeps you from making bad predictions.</p>
<p>The equation <span class="m"><i>y</i> = <i>kx</i></span> is the simplest linear function. Its constant <span class="m"><i>k</i></span> becomes the slope of a line, and direct variation appears throughout science as a first model of how one quantity depends on another.</p>`,
  careers: [
    { role: "Pharmacist", use: "Checks weight-based dosing, where the dose is directly proportional to body mass at a fixed number of mg per kg." },
    { role: "Payroll specialist", use: "Computes pay for hourly workers as hours times the hourly rate, a proportional relationship." },
    { role: "Construction estimator", use: "Prices materials such as concrete at a cost per cubic yard, so cost is proportional to volume." },
    { role: "Lab technician", use: "Builds calibration lines where absorbance is proportional to concentration, as in the Beer-Lambert law." },
    { role: "Currency exchange teller", use: "Converts amounts at a quoted exchange rate, which is a constant of proportionality between two currencies." },
    { role: "Chef", use: "Scales a recipe so every ingredient stays in the same proportion to the number of servings." }
  ],
  life: [
    "Comparing unit prices at the grocery store",
    "Working out pay for extra hours at an hourly rate",
    "Converting money when travelling",
    "Scaling a recipe up or down",
    "Estimating fuel for a trip at a steady miles-per-gallon rate"
  ],
  fields: [
    { name: "Physics", use: "Hooke's law F = kx and Ohm's law V = IR at a fixed resistance are direct variations." },
    { name: "Chemistry", use: "The Beer-Lambert law makes absorbance directly proportional to concentration for a given substance and path length." },
    { name: "Economics", use: "Linear pricing with no fixed fee makes revenue proportional to quantity sold." }
  ],
  prereqWhy: {
    "pa-functions": "A proportional relationship is a function y = kx, so you need to read inputs, outputs and their graphs.",
    "proportions": "Any two points of a proportional relationship form a proportion, and solving for missing values uses cross-multiplication."
  },
  unlocksWhy: {
    "pa-slope": "The constant k is the first example of a slope: the rate of change of y with respect to x."
  },
  beyond: [
    { field: "Algebra I", why: "Direct variation is the special case b = 0 of y = mx + b, and inverse variation y = k/x is studied next to it." },
    { field: "Physics", why: "Many laws are first stated as direct proportions, and the constant of proportionality has physical meaning." },
    { field: "Statistics", why: "Regression through the origin fits the model y = kx to data." }
  ],
  mistakes: [
    { wrong: `Calling any straight-line graph proportional.`, fix: `The line must pass through <span class="m">(0, 0)</span>. The graph of <span class="m"><i>y</i> = 2<i>x</i> + 3</span> is a line but not proportional.` },
    { wrong: `Checking only that <span class="m"><i>y</i></span> increases when <span class="m"><i>x</i></span> does.`, fix: `Check that <span class="m"><i>y</i>/<i>x</i></span> is the same for every pair. Increasing is not enough.` },
    { wrong: `Finding <span class="m"><i>k</i></span> as <span class="m"><i>x</i>/<i>y</i></span>.`, fix: `In <span class="m"><i>y</i> = <i>kx</i></span>, <span class="m"><i>k</i> = <i>y</i>/<i>x</i></span>: output over input.` }
  ],
  practice: [
    { q: `A table has <span class="m"><i>x</i> = 2, 5, 8</span> and <span class="m"><i>y</i> = 6, 15, 24</span>. Is it proportional? Write the equation.`, a: `<span class="m">6/2 = 15/5 = 24/8 = 3</span>, so yes: <span class="m"><i>y</i> = 3<i>x</i></span>.` },
    { q: `Is the relationship with points <span class="m">(1, 4), (2, 7), (3, 10)</span> proportional?`, a: `No. The ratios are <span class="m">4, 3.5, 3.<span style="text-decoration:overline">3</span></span>, which differ. The rule is <span class="m"><i>y</i> = 3<i>x</i> + 1</span>, which does not pass through the origin.` },
    { q: `<span class="m"><i>y</i></span> varies directly with <span class="m"><i>x</i></span>, and <span class="m"><i>y</i> = 12</span> when <span class="m"><i>x</i> = 16</span>. Find <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 28</span>.`, a: `<span class="m"><i>k</i> = 12/16 = 0.75</span>, so <span class="m"><i>y</i> = 0.75(28) = 21</span>.` },
    { q: `A printer prints 540 pages in 12 minutes at a steady rate. Write an equation for pages <span class="m"><i>p</i></span> in <span class="m"><i>t</i></span> minutes and find how long 1,125 pages take.`, a: `<span class="m"><i>k</i> = 540/12 = 45</span>, so <span class="m"><i>p</i> = 45<i>t</i></span>. Then <span class="m">1,125 = 45<i>t</i></span> gives <span class="m"><i>t</i> = 25</span> minutes.` }
  ]
};

/* ------------------------------------------------------------------ */
ARITH["pa-sequences"] = {
  title: "Arithmetic Sequences",
  short: "Add the same amount each time: a linear pattern",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 4,
  voice: "mixed",
  eyebrow: "Functions · patterns with a common difference",
  hero: `<span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span></span>`,
  lede: `An arithmetic sequence starts at <span class="m c2"><i>a</i><sub>1</sub></span> and adds the same <span class="m c3">common difference <i>d</i></span> at each step. The formula jumps straight to any term <span class="m c1"><i>a</i><sub><i>n</i></sub></span>.`,
  plain: `<p>Look at 5, 8, 11, 14, 17. Each number is 3 more than the one before. A list like this, where you add the same amount every time, is an <b>arithmetic sequence</b>. The amount you add is the <b>common difference</b>. It can be negative, as in 20, 14, 8, 2, where you subtract 6 each time.</p>
<p>To find the 100th term, you do not need to write out 100 numbers. From the 1st term to the 100th term there are 99 steps, and each step adds <span class="m c3"><i>d</i></span>. So the 100th term is the first term plus 99 times <span class="m c3"><i>d</i></span>. That is what the formula says.</p>
<p>If you plot the terms as points (1st term, 2nd term, and so on), they line up on a straight line. That is because adding the same amount each step is exactly what a linear function does.</p>`,
  formal: `<p>A <b>sequence</b> is a function whose domain is the positive integers; its values <span class="m"><i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>a</i><sub>3</sub>, …</span> are its <b>terms</b>. A sequence is <b>arithmetic</b> if the difference between consecutive terms is constant:</p>
<div class="display"><i>a</i><sub><i>n</i>+1</sub> − <i>a</i><sub><i>n</i></sub> = <span class="c3"><i>d</i></span> for all <i>n</i> ≥ 1 &nbsp;<span class="dim">(recursive: <i>a</i><sub><i>n</i></sub> = <i>a</i><sub><i>n</i>−1</sub> + <i>d</i>)</span><br><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span> = <span class="c3"><i>d</i></span><i>n</i> + (<span class="c2"><i>a</i><sub>1</sub></span> − <span class="c3"><i>d</i></span>) &nbsp;<span class="dim">(explicit)</span></div>
<p>The explicit form shows that an arithmetic sequence is a linear function of <span class="m"><i>n</i></span> restricted to <span class="m"><i>n</i> ∈ {1, 2, 3, …}</span>, with slope <span class="m"><i>d</i></span>. Its graph is a set of discrete points on a line, not the whole line. When <span class="m"><i>d</i> ≠ 0</span>, a number <span class="m"><i>t</i></span> is a term exactly when <span class="m">(<i>t</i> − <i>a</i><sub>1</sub>)/<i>d</i> + 1</span> is a positive integer.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i><sub>1</sub>`, name: "First term", desc: "The starting value of the sequence, at stage n = 1." },
    { c: "c3", sym: `<i>d</i>`, name: "Common difference", desc: "The fixed amount added at each step. A negative d makes the sequence decrease." },
    { c: "c1", sym: `<i>a</i><sub><i>n</i></sub>`, name: "nth term", desc: "The value at position n, found as the first term plus n − 1 steps of size d." },
    { c: "c4", sym: `<i>n</i>`, name: "Term number", desc: "The position in the list: 1, 2, 3, and so on. It must be a positive integer." }
  ],
  steps: { title: "How to write and use the nth-term formula", items: [
    `Check that the differences between consecutive terms are all the same. If not, the sequence is not arithmetic.`,
    `Identify the first term <span class="m c2"><i>a</i><sub>1</sub></span> and the common difference <span class="m c3"><i>d</i></span>.`,
    `Substitute into <span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = <span class="c2"><i>a</i><sub>1</sub></span> + (<i>n</i> − 1)<span class="c3"><i>d</i></span></span> and simplify.`,
    `To find a term, substitute its position <span class="m"><i>n</i></span>.`,
    `To find which position has a given value, set the formula equal to that value and solve for <span class="m"><i>n</i></span>. The value is a term only if <span class="m"><i>n</i></span> is a positive integer.`
  ] },
  example: {
    prompt: `A theatre's first row has 18 seats, and each row behind it has 2 more seats than the row in front. How many seats are in row 25, and which row has 50 seats?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i><sub>1</sub> = 18</span>, &nbsp;<span class="c3"><i>d</i> = 2</span></span>`, note: "The seat counts 18, 20, 22, and so on form an arithmetic sequence." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub><i>n</i></sub></span> = 18 + (<i>n</i> − 1)(2) = 2<i>n</i> + 16</span>`, note: "Write and simplify the nth-term formula." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub>25</sub></span> = 2(25) + 16 = 66</span>`, note: "Row 25 is 24 steps after row 1." },
      { math: `<span class="m">2<i>n</i> + 16 = 50 &nbsp;⇒&nbsp; 2<i>n</i> = 34 &nbsp;⇒&nbsp; <i>n</i> = 17</span>`, note: "Set the formula equal to 50 and solve the two-step equation." },
      { math: `<span class="m">18 + 16(2) = 50 ✓</span>`, note: "Check: row 17 is 16 steps after row 1." }
    ],
    answer: `Row 25 has <span class="m">66</span> seats, and row <span class="m">17</span> has 50 seats.`
  },
  why: `<p>Anything that changes by a fixed amount per step is an arithmetic sequence: savings with a fixed weekly deposit, seats in rows, a pay scale with a fixed yearly raise, a book value that drops by the same depreciation each year. The formula lets you jump to any step and solve for when a target is reached.</p>
<p>Arithmetic sequences are a bridge between patterns and linear functions. The common difference is the slope, and the same ideas extend to geometric sequences, series and the discrete models used in finance and computer science.</p>`,
  careers: [
    { role: "Accountant", use: "Computes straight-line depreciation, where an asset's book value drops by the same amount each year." },
    { role: "Human resources analyst", use: "Models pay scales with a fixed annual step increase to project salaries in future years." },
    { role: "Stadium designer", use: "Lays out seating sections where each row holds a fixed number of seats more than the row in front." },
    { role: "Software developer", use: "Computes the memory address of an array element as a base address plus index times element size." },
    { role: "Project scheduler", use: "Plans recurring tasks on a fixed interval, such as inspections every 14 days, and finds the date of the nth one." }
  ],
  life: [
    "Planning a savings goal with the same deposit each week",
    "Counting seats in a theatre or stadium section",
    "Working out when a subscription with a fixed monthly charge reaches a total",
    "Following a training plan that adds the same distance each week",
    "Figuring out the dates of every other Tuesday"
  ],
  fields: [
    { name: "Finance", use: "Simple interest balances and straight-line depreciation are arithmetic sequences in time." },
    { name: "Computer science", use: "Loops that step a counter by a fixed stride generate arithmetic sequences of indices." },
    { name: "Physics", use: "Under constant acceleration, velocities sampled at equal time intervals form an arithmetic sequence." }
  ],
  prereqWhy: {
    "pa-functions": "A sequence is a function from term number n to term value, and the nth-term formula is its rule."
  },
  unlocksWhy: {
    "a1-sequences": "Algebra I compares arithmetic with geometric sequences and adds partial sums, starting from the nth-term formula here."
  },
  beyond: [
    { field: "Algebra II", why: "Arithmetic series and sigma notation build on the nth-term formula to add many terms quickly." },
    { field: "Precalculus", why: "Sequences, recursion and mathematical induction are studied in general, with arithmetic sequences as the first case." },
    { field: "Discrete mathematics", why: "Recurrence relations generalise the recursive rule a(n) = a(n − 1) + d." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + <i>nd</i></span>, which gives <span class="m"><i>a</i><sub>25</sub> = 18 + 50 = 68</span> seats.`, fix: `From term 1 to term <span class="m"><i>n</i></span> there are <span class="m"><i>n</i> − 1</span> steps: <span class="m"><i>a</i><sub>25</sub> = 18 + 24(2) = 66</span>.` },
    { wrong: `Taking <span class="m"><i>d</i></span> as positive in 20, 14, 8, 2.`, fix: `Compute a term minus the one before it: <span class="m">14 − 20 = −6</span>, so <span class="m"><i>d</i> = −6</span>.` },
    { wrong: `Calling 5, 10, 20, 40 arithmetic because it follows a pattern.`, fix: `The differences 5, 10, 20 are not constant. Each term is multiplied by 2, so it is a geometric sequence.` }
  ],
  practice: [
    { q: `Find the 10th term of 7, 11, 15, 19, ….`, a: `<span class="m"><i>d</i> = 4</span>, so <span class="m"><i>a</i><sub><i>n</i></sub> = 7 + 4(<i>n</i> − 1) = 4<i>n</i> + 3</span> and <span class="m"><i>a</i><sub>10</sub> = 43</span>.` },
    { q: `Write the nth-term formula for 20, 14, 8, 2, … and find <span class="m"><i>a</i><sub>12</sub></span>.`, a: `<span class="m"><i>d</i> = −6</span>, so <span class="m"><i>a</i><sub><i>n</i></sub> = 20 − 6(<i>n</i> − 1) = 26 − 6<i>n</i></span> and <span class="m"><i>a</i><sub>12</sub> = 26 − 72 = −46</span>.` },
    { q: `An arithmetic sequence has <span class="m"><i>a</i><sub>1</sub> = 3</span> and <span class="m"><i>a</i><sub>15</sub> = 59</span>. Find <span class="m"><i>d</i></span>.`, a: `<span class="m">59 = 3 + 14<i>d</i></span>, so <span class="m">14<i>d</i> = 56</span> and <span class="m"><i>d</i> = 4</span>.` },
    { q: `Is 100 a term of 3, 8, 13, 18, …?`, a: `<span class="m">3 + 5(<i>n</i> − 1) = 100</span> gives <span class="m">5<i>n</i> = 102</span>, so <span class="m"><i>n</i> = 20.4</span>. That is not a whole number, so 100 is not a term. (<span class="m"><i>a</i><sub>20</sub> = 98</span> and <span class="m"><i>a</i><sub>21</sub> = 103</span>.)` }
  ],
  origin: `Problem 64 of the Egyptian Rhind Mathematical Papyrus (c. 1550 BCE) asks for 10 hekat of barley to be shared among 10 people so that each share differs from the next by 1/8 hekat, which is an arithmetic sequence problem.`
};
