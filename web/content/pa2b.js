window.ARITH = window.ARITH || {};

/* ------------------------------------------------------------------ */
ARITH["pa-both-sides"] = {
  title: "Equations with Variables on Both Sides",
  short: "Collect the x terms on one side, constants on the other",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Solving equations · collecting like terms across the equals sign",
  hero: `<span class="m"><span class="c2"><i>ax</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>cx</i></span> + <span class="c3"><i>d</i></span> &nbsp;⇒&nbsp; <span class="c5"><i>x</i></span> = <span class="fr"><span><span class="c3"><i>d</i></span> − <span class="c3"><i>b</i></span></span><span><span class="c2"><i>a</i></span> − <span class="c2"><i>c</i></span></span></span></span>`,
  lede: `When the unknown appears on both sides, move all the <span class="m c2"><i>x</i></span> terms to one side and all the <span class="m c3">constants</span> to the other. What is left is a two-step equation.`,
  plain: `<p>Suppose <span class="m">5<i>x</i> − 3 = 2<i>x</i> + 12</span>. There are <span class="m"><i>x</i></span>'s on both sides, so you cannot just undo one thing. The fix is to gather them. Subtract <span class="m">2<i>x</i></span> from both sides and the right side loses its <span class="m"><i>x</i></span> terms: <span class="m">3<i>x</i> − 3 = 12</span>. Now it is a two-step equation, and <span class="m"><i>x</i> = 5</span>.</p>
<p>Think of a balance scale with bags of marbles and loose marbles on each pan. Every bag holds the same number. Taking two bags off each pan keeps it level. Taking the same loose marbles off each pan keeps it level too. You keep doing that until one pan has only bags and the other has only marbles.</p>
<p>Sometimes the <span class="m"><i>x</i></span>'s cancel out completely. If you end with something false like <span class="m">6 = 5</span>, there is no number that works. If you end with something always true like <span class="m">−7 = −7</span>, every number works.</p>`,
  formal: `<p>A <b>linear equation in one variable</b> can always be rewritten as <span class="m"><span class="c2"><i>ax</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>cx</i></span> + <span class="c3"><i>d</i></span></span> by simplifying each side (distributing and combining like terms). Applying the Subtraction Property of Equality twice gives the equivalent equation</p>
<div class="display">(<span class="c2"><i>a</i></span> − <span class="c2"><i>c</i></span>)<i>x</i> = <span class="c3"><i>d</i></span> − <span class="c3"><i>b</i></span></div>
<p>There are three cases. If <span class="m"><i>a</i> ≠ <i>c</i></span>, the equation is <b>conditional</b> with exactly one solution, <span class="m"><i>x</i> = (<i>d</i> − <i>b</i>)/(<i>a</i> − <i>c</i>)</span>. If <span class="m"><i>a</i> = <i>c</i></span> and <span class="m"><i>b</i> = <i>d</i></span>, it is an <b>identity</b>: every real number is a solution, and the solution set is <span class="m">ℝ</span>. If <span class="m"><i>a</i> = <i>c</i></span> and <span class="m"><i>b</i> ≠ <i>d</i></span>, it is a <b>contradiction</b>: there is no solution, and the solution set is the empty set <span class="m">∅</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>ax</i>, <i>cx</i>`, name: "Variable terms", desc: "The x terms on each side. They are collected on one side, usually the side with the larger coefficient." },
    { c: "c3", sym: `<i>b</i>, <i>d</i>`, name: "Constants", desc: "The number terms on each side. They are collected on the other side." },
    { c: "c1", sym: `−<i>cx</i>, −<i>b</i>`, name: "Current operation", desc: "The term being subtracted (or added) on both sides at this step." },
    { c: "c5", sym: `<i>x</i>`, name: "Solution", desc: "The value that makes the two sides equal, or a note that there is no solution or that all reals work." }
  ] ,
  steps: { title: "How to solve an equation with x on both sides", items: [
    `Simplify each side: distribute to clear parentheses and combine like terms.`,
    `Collect the <span class="m c2"><i>x</i></span> terms on one side by adding or subtracting a variable term on both sides.`,
    `Collect the <span class="m c3">constants</span> on the other side by adding or subtracting a number on both sides.`,
    `Divide both sides by the coefficient of <span class="m"><i>x</i></span>.`,
    `If the <span class="m"><i>x</i></span> terms cancel, read the result: a true statement means all real numbers, a false one means no solution.`,
    `Check by substituting into the original equation. Both sides should give the same number.`
  ] },
  example: {
    prompt: `Gym A charges a $40 joining fee plus $25 per month. Gym B charges a $100 joining fee plus $15 per month. After how many months will the total cost be the same?`,
    lines: [
      { math: `<span class="m">Let <span class="c5"><i>m</i></span> = number of months</span>`, note: "Name the unknown." },
      { math: `<span class="m"><span class="c3">40</span> + <span class="c2">25<i>m</i></span> = <span class="c3">100</span> + <span class="c2">15<i>m</i></span></span>`, note: "Total cost of Gym A equals total cost of Gym B." },
      { math: `<span class="m"><span class="c3">40</span> + <span class="c2">10<i>m</i></span> = <span class="c3">100</span></span>`, note: "Subtract 15m from both sides to collect the variable terms on the left." },
      { math: `<span class="m"><span class="c2">10<i>m</i></span> = <span class="c3">60</span></span>`, note: "Subtract 40 from both sides to collect the constants on the right." },
      { math: `<span class="m"><span class="c5"><i>m</i></span> = 6</span>`, note: "Divide both sides by 10." },
      { math: `<span class="m">40 + 25(6) = 190, &nbsp;100 + 15(6) = 190 ✓</span>`, note: "Check: both gyms cost 190 dollars after 6 months." }
    ],
    answer: `The two gyms cost the same, $190, after <span class="m">6</span> months. After that, Gym B is cheaper.`
  },
  why: `<p>Comparing two options is one of the most common real uses of algebra. Two phone plans, two job offers, buying versus renting, two car loans: each option is "a fixed amount plus a rate", and setting them equal tells you the break-even point where one option starts to beat the other.</p>
<p>This is also the general linear equation. Once you can handle x on both sides, parentheses and the special cases of no solution and all reals, you can solve any linear equation in one variable. The same moves are used for systems of equations, where two lines cross at the point where their expressions are equal.</p>`,
  careers: [
    { role: "Financial advisor", use: "Compares a plan with a higher up-front charge and lower flat yearly fee against one with the reverse, to find the year their total costs are equal." },
    { role: "Small business owner", use: "Compares two supplier quotes of the form setup fee plus unit price to find the order size where they cost the same." },
    { role: "Energy auditor", use: "Computes the payback time where a more expensive efficient appliance and a cheaper one have equal total cost including running cost." },
    { role: "Logistics coordinator", use: "Sets two carriers' rate formulas equal to find the shipment weight where it pays to switch carriers." },
    { role: "Human resources specialist", use: "Compares salary-plus-commission offers to find the sales level where two pay plans give the same income." },
    { role: "Real estate agent", use: "Shows clients the number of years after which buying costs less than renting under stated assumptions." }
  ],
  life: [
    "Choosing between two phone or streaming plans with different fees and monthly rates",
    "Deciding whether a membership card pays for itself at a store",
    "Comparing a car rental with a daily rate against one with a per-mile charge",
    "Working out when two people saving at different rates will have the same amount",
    "Checking when an LED bulb has paid back its higher price in energy savings"
  ],
  fields: [
    { name: "Economics", use: "Break-even analysis sets cost equal to revenue, both linear in the quantity produced." },
    { name: "Physics", use: "Finding when two objects moving at constant speeds meet sets two position formulas equal." },
    { name: "Chemistry", use: "Mixture and dilution problems set the amount of solute before and after mixing equal, with the unknown volume on both sides." },
    { name: "Accounting", use: "Comparing depreciation or lease schedules sets two linear cost formulas equal." }
  ],
  prereqWhy: {
    "pa-two-step": "After the variable terms are collected on one side, the remaining equation is a two-step equation.",
    "pa-like-terms": "Each side must be simplified by distributing and combining like terms before the terms can be collected."
  },
  unlocksWhy: {
    "pa-word-problems": "Comparison problems such as two plans or two travellers produce equations with the unknown on both sides.",
    "a1-multi-step": "Multi-step equations add fractions, decimals and nested parentheses to this same collect-and-solve method."
  },
  beyond: [
    { field: "Algebra I", why: "Solving systems of linear equations by substitution reduces to one equation with the variable on both sides." },
    { field: "Linear Algebra", why: "The three outcomes here, one solution, none or infinitely many, are the same three outcomes for any linear system." },
    { field: "Economics", why: "Break-even and market-equilibrium problems set two linear expressions equal and solve." }
  ],
  mistakes: [
    { wrong: `Moving a term without changing its sign: from <span class="m">5<i>x</i> − 3 = 2<i>x</i> + 12</span> writing <span class="m">7<i>x</i> − 3 = 12</span>.`, fix: `"Moving" a term means subtracting it from both sides. Subtract <span class="m">2<i>x</i></span>: <span class="m">3<i>x</i> − 3 = 12</span>.` },
    { wrong: `Distributing to only the first term: writing <span class="m">4(<i>x</i> − 2)</span> as <span class="m">4<i>x</i> − 2</span>.`, fix: `Multiply every term inside: <span class="m">4(<i>x</i> − 2) = 4<i>x</i> − 8</span>.` },
    { wrong: `Reaching <span class="m">0 = 0</span> and writing <span class="m"><i>x</i> = 0</span>, or reaching <span class="m">6 = 5</span> and writing <span class="m"><i>x</i> = 1</span>.`, fix: `A true statement with no variable means every real number is a solution (an identity). A false one means there is no solution (a contradiction), and the solution set is <span class="m">∅</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">5<i>x</i> − 3 = 2<i>x</i> + 12</span>.`, a: `Subtract <span class="m">2<i>x</i></span>: <span class="m">3<i>x</i> − 3 = 12</span>. Add 3: <span class="m">3<i>x</i> = 15</span>, so <span class="m"><i>x</i> = 5</span>. Check: <span class="m">22 = 22</span>.` },
    { q: `Solve <span class="m">7 − 2(<i>x</i> − 3) = 3<i>x</i> − 2</span>.`, a: `Distribute: <span class="m">7 − 2<i>x</i> + 6 = 3<i>x</i> − 2</span>, so <span class="m">13 − 2<i>x</i> = 3<i>x</i> − 2</span>. Add <span class="m">2<i>x</i></span> and add 2: <span class="m">15 = 5<i>x</i></span>, so <span class="m"><i>x</i> = 3</span>. Check: <span class="m">7 − 0 = 7</span> and <span class="m">9 − 2 = 7</span>.` },
    { q: `Solve <span class="m">3(<i>x</i> + 2) = 3<i>x</i> + 5</span>.`, a: `<span class="m">3<i>x</i> + 6 = 3<i>x</i> + 5</span>. Subtract <span class="m">3<i>x</i></span>: <span class="m">6 = 5</span>, which is false. No solution; the solution set is <span class="m">∅</span>.` },
    { q: `Solve <span class="m">2(3<i>x</i> − 4) + 1 = 6<i>x</i> − 7</span>.`, a: `<span class="m">6<i>x</i> − 8 + 1 = 6<i>x</i> − 7</span>, so <span class="m">6<i>x</i> − 7 = 6<i>x</i> − 7</span>. Subtract <span class="m">6<i>x</i></span>: <span class="m">−7 = −7</span>, which is always true. It is an identity; every real number is a solution, and the solution set is <span class="m">ℝ</span>.` }
  ],
  origin: `The two basic moves are named in the title of al-Khwarizmi's book <i>al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala</i> (Baghdad, c. 820 CE). <i>Al-jabr</i> ("restoring") moved a subtracted term to the other side as an added term, and <i>al-muqābala</i> ("balancing") cancelled equal terms that appear on both sides. The word "algebra" comes from <i>al-jabr</i>.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-formulas"] = {
  title: "Formulas & Geometry Applications",
  short: "Perimeter, area and volume, solved forward and backward",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Applications · measurement formulas",
  hero: `<span class="m"><span class="c1"><i>P</i></span> = 2<span class="c2"><i>l</i></span> + 2<span class="c2"><i>w</i></span> &nbsp;&nbsp; <span class="c1"><i>A</i></span> = <span class="c2"><i>l</i></span><span class="c2"><i>w</i></span> &nbsp;&nbsp; <span class="c1"><i>V</i></span> = π<span class="c2"><i>r</i></span><sup>2</sup><span class="c2"><i>h</i></span></span>`,
  lede: `A formula is an equation that links a shape's <span class="m c2">dimensions</span> to a <span class="m c1">result</span> such as perimeter, area or volume. You can use it forward to compute the result, or backward to find a missing dimension.`,
  plain: `<p>A formula is a recipe written in letters. The area of a rectangle is length times width, so <span class="m"><i>A</i> = <i>lw</i></span>. Put in the numbers and you get the area. A room 12 ft by 10 ft has an area of 120 square feet.</p>
<p>A formula also works backward. If you know the area and one side, you can find the other side by solving an equation. If a 120 square foot rug is 12 ft long, then <span class="m">120 = 12<i>w</i></span>, so it is 10 ft wide.</p>
<p>Units tell you what kind of answer you have. Perimeter is a length, so it is in feet or metres. Area covers a flat surface, so it is in square units like ft². Volume fills space, so it is in cubic units like cm³. Checking the units is a quick way to catch a wrong formula.</p>`,
  formal: `<p>A <b>formula</b> is an equation relating two or more quantities. The standard measurement formulas are:</p>
<div class="display"><b>Rectangle:</b> <span class="c1"><i>P</i></span> = 2<span class="c2"><i>l</i></span> + 2<span class="c2"><i>w</i></span>, &nbsp;<span class="c1"><i>A</i></span> = <span class="c2"><i>l</i></span><span class="c2"><i>w</i></span><br><b>Triangle:</b> <span class="c1"><i>P</i></span> = <i>a</i> + <i>b</i> + <i>c</i>, &nbsp;<span class="c1"><i>A</i></span> = <span class="fr"><span>1</span><span>2</span></span><span class="c2"><i>b</i></span><span class="c2"><i>h</i></span><br><b>Circle:</b> <span class="c1"><i>C</i></span> = 2π<span class="c2"><i>r</i></span> = π<span class="c2"><i>d</i></span>, &nbsp;<span class="c1"><i>A</i></span> = π<span class="c2"><i>r</i></span><sup>2</sup><br><b>Rectangular solid:</b> <span class="c1"><i>V</i></span> = <span class="c2"><i>l</i></span><span class="c2"><i>w</i></span><span class="c2"><i>h</i></span>, &nbsp;<span class="c1"><i>S</i></span> = 2<i>lw</i> + 2<i>lh</i> + 2<i>wh</i><br><b>Cylinder:</b> <span class="c1"><i>V</i></span> = π<span class="c2"><i>r</i></span><sup>2</sup><span class="c2"><i>h</i></span>, &nbsp;<span class="c1"><i>S</i></span> = 2π<i>r</i><sup>2</sup> + 2π<i>rh</i></div>
<p>Here <span class="m"><i>h</i></span> in a triangle is the height perpendicular to the base <span class="m"><i>b</i></span>, and <span class="m"><i>d</i> = 2<i>r</i></span>. Perimeter and circumference are measured in <span class="m c3">linear units</span>, area and surface area in <span class="m c3">square units</span>, and volume in <span class="m c3">cubic units</span>. To find an unknown dimension, substitute the known values and solve the resulting equation. π is irrational; answers are given exactly in terms of π or rounded using a decimal approximation such as 3.14.</p>`,
  legend: [
    { c: "c2", sym: `<i>l</i>, <i>w</i>, <i>h</i>, <i>r</i>`, name: "Dimensions", desc: "The lengths that describe a shape: length, width, height, radius. They are measured in linear units." },
    { c: "c1", sym: `<i>P</i>, <i>A</i>, <i>V</i>`, name: "Computed result", desc: "The perimeter, area, surface area or volume the formula produces." },
    { c: "c3", sym: `ft, ft², ft³`, name: "Units", desc: "Linear units for length, square units for area and cubic units for volume." }
  ],
  steps: { title: "How to solve a geometry application", items: [
    `Read the problem and draw the figure. Label the known <span class="m c2">dimensions</span>.`,
    `Decide what is being asked: a perimeter, an area, a volume, or a missing dimension.`,
    `Write the matching formula and substitute the known values.`,
    `Solve the equation for the unknown. This is often a one- or two-step equation.`,
    `Attach the correct <span class="m c3">units</span> (linear, square or cubic) and check that the size of the answer is sensible.`
  ] },
  example: {
    prompt: `You have 64 ft of fencing to enclose a rectangular garden. You want the garden to be 20 ft long. How wide can it be, and what area will it have?`,
    lines: [
      { math: `<span class="m">Let <span class="c2"><i>w</i></span> = width in feet</span>`, note: "Name the unknown dimension." },
      { math: `<span class="m"><span class="c1">64</span> = 2(<span class="c2">20</span>) + 2<span class="c2"><i>w</i></span></span>`, note: "The fence is the perimeter, P = 2l + 2w." },
      { math: `<span class="m">64 = 40 + 2<span class="c2"><i>w</i></span> &nbsp;⇒&nbsp; 2<span class="c2"><i>w</i></span> = 24</span>`, note: "Multiply, then subtract 40 from both sides." },
      { math: `<span class="m"><span class="c2"><i>w</i></span> = 12 <span class="c3">ft</span></span>`, note: "Divide both sides by 2." },
      { math: `<span class="m">2(20) + 2(12) = 64 ✓</span>`, note: "Check the perimeter." },
      { math: `<span class="m"><span class="c1"><i>A</i></span> = 20 × 12 = 240 <span class="c3">ft²</span></span>`, note: "Area of the rectangle, in square feet." }
    ],
    answer: `The garden can be <span class="m">12</span> ft wide, and it will have an area of <span class="m">240</span> ft².`
  },
  why: `<p>Perimeter, area and volume come up whenever you buy or build something. Fencing and trim are sold by length, paint, flooring and fertiliser by area, and concrete, soil and water by volume. Using the wrong formula or the wrong kind of unit can mean buying far too much or too little.</p>
<p>Formulas are also the first place you meet equations with several letters. Solving one for a missing dimension prepares you for literal equations, where a formula is rearranged to isolate any chosen variable, which is routine in science and engineering.</p>`,
  careers: [
    { role: "Carpenter", use: "Computes the perimeter of a room for baseboard trim and the area of a floor for plywood subflooring." },
    { role: "Painter", use: "Finds the wall area of a room, subtracts windows and doors, and divides by a paint's coverage in square feet per gallon." },
    { role: "Landscaper", use: "Calculates the volume of mulch or topsoil in cubic yards from the area of a bed and the depth of the layer." },
    { role: "Concrete finisher", use: "Converts the length, width and thickness of a slab into cubic yards of concrete to order." },
    { role: "Aquarium technician", use: "Computes tank volume in cubic inches and converts to gallons (231 cubic inches per US gallon) to dose treatments." },
    { role: "Packaging engineer", use: "Uses surface area to estimate the cardboard needed for a box and volume to check what the box can hold." }
  ],
  life: [
    "Working out how much paint or wallpaper a room needs",
    "Buying enough fencing for a yard or garden",
    "Choosing a rug or table that fits a room",
    "Figuring out how much soil fills a raised garden bed",
    "Comparing pizza sizes by area instead of by diameter"
  ],
  fields: [
    { name: "Construction", use: "Material estimates for framing, drywall, roofing and concrete all start from perimeter, area and volume formulas." },
    { name: "Physics", use: "Density, pressure and flow rate are defined using areas and volumes of objects and pipes." },
    { name: "Chemistry", use: "Lab glassware and reaction vessels are sized by volume, and surface area affects reaction rates." },
    { name: "Agriculture", use: "Seed, fertiliser and irrigation rates are given per unit of field area." }
  ],
  prereqWhy: {
    "pa-two-step": "Finding a missing dimension from a formula like P = 2l + 2w means solving a two-step equation."
  },
  unlocksWhy: {
    "pa-pythagorean": "The Pythagorean Theorem is another geometry formula, used with areas of squares on the sides of a right triangle.",
    "a1-literal": "Literal equations rearrange these same formulas to isolate a chosen variable, such as w = (P − 2l)/2."
  },
  beyond: [
    { field: "Geometry", why: "Area and volume formulas for polygons, prisms, pyramids, cones and spheres are derived and proved there." },
    { field: "Calculus I", why: "Related-rates and optimisation problems start from these formulas, such as maximising the volume of an open box." },
    { field: "Physics", why: "Pressure, density and flow calculations all need correct areas and volumes with consistent units." }
  ],
  mistakes: [
    { wrong: `Using the diameter as the radius: for a circle 10 cm across, writing <span class="m"><i>A</i> = π(10)<sup>2</sup> = 100π</span>.`, fix: `The radius is half the diameter: <span class="m"><i>r</i> = 5</span>, so <span class="m"><i>A</i> = 25π ≈ 78.5</span> cm².` },
    { wrong: `Mixing up area and perimeter: a 6 ft by 4 ft rectangle "needs 24 ft of trim".`, fix: `Trim goes around the edge, so use perimeter: <span class="m">2(6) + 2(4) = 20</span> ft. The 24 is the area in ft².` },
    { wrong: `Giving an area in plain units, or mixing units: a 3 ft by 18 in board "has area 54".`, fix: `Convert first: 18 in = 1.5 ft, so the area is <span class="m">3 × 1.5 = 4.5</span> ft². Area always carries square units.` },
    { wrong: `Forgetting the <span class="m"><span class="fr"><span>1</span><span>2</span></span></span> in the triangle formula, or using a slanted side as the height.`, fix: `<span class="m"><i>A</i> = <span class="fr"><span>1</span><span>2</span></span><i>bh</i></span>, where <span class="m"><i>h</i></span> is measured at a right angle to the base.` }
  ],
  practice: [
    { q: `Find the area of a circle with radius 5 cm. Give the exact answer and a decimal to the nearest hundredth.`, a: `<span class="m"><i>A</i> = π(5)<sup>2</sup> = 25π ≈ 78.54</span> cm².` },
    { q: `A triangular sail has area 36 in² and base 9 in. What is its height?`, a: `<span class="m">36 = <span class="fr"><span>1</span><span>2</span></span>(9)<i>h</i> = 4.5<i>h</i></span>, so <span class="m"><i>h</i> = 8</span> in.` },
    { q: `A fish tank is 30 in long, 12 in wide and 16 in high. Find its volume, then its capacity in gallons (1 gal = 231 in³), to the nearest tenth.`, a: `<span class="m"><i>V</i> = 30 × 12 × 16 = 5760</span> in³. <span class="m">5760 ÷ 231 ≈ 24.9</span> gal.` },
    { q: `A cylindrical can must hold 500 cm³ and have radius 4 cm. How tall must it be, to the nearest tenth of a centimetre?`, a: `<span class="m">500 = π(4)<sup>2</sup><i>h</i> = 16π<i>h</i></span>, so <span class="m"><i>h</i> = <span class="fr"><span>500</span><span>16π</span></span> ≈ 9.9</span> cm (9.947…).` }
  ],
  origin: `Egyptian and Babylonian scribes used area and volume rules for fields and granaries by about 1800 BCE; the Rhind Papyrus (c. 1550 BCE) finds a circle's area by squaring 8/9 of its diameter. Archimedes (3rd century BCE) proved that a circle's area equals that of a right triangle with legs equal to its radius and circumference, and in <i>On the Sphere and Cylinder</i> he found the sphere's volume and surface area.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-solve-ineq"] = {
  title: "Solving Linear Inequalities",
  short: "Solve like an equation, flip for a negative",
  grade: "Grade 7 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Inequalities · solution sets and interval notation",
  hero: `<span class="m">−2<i>x</i> + 5 &lt; 11 &nbsp;⇒&nbsp; −2<i>x</i> &lt; 6 &nbsp;⇒&nbsp; <span class="c2"><i>x</i> <span class="c3">&gt;</span> <span class="c1">−3</span></span></span>`,
  lede: `A linear inequality is solved with the same steps as an equation, with one extra rule: multiplying or dividing both sides by a negative number <span class="m c3">reverses the inequality sign</span>. The answer is a whole <span class="m c2">set of numbers</span> on one side of a <span class="m c1">boundary</span>.`,
  plain: `<p>An equation like <span class="m">3<i>x</i> − 7 = 8</span> has one answer. An inequality like <span class="m">3<i>x</i> − 7 ≤ 8</span> has many: every number up to and including 5. You solve it the same way. Add 7 to both sides, then divide by 3, and you get <span class="m"><i>x</i> ≤ 5</span>.</p>
<p>There is one trap. Start with <span class="m">2 &lt; 5</span>, which is true. Multiply both sides by −1 and you get −2 and −5. But −2 is bigger than −5, so the sign has to turn around: <span class="m">−2 &gt; −5</span>. Whenever you multiply or divide both sides by a negative number, flip the inequality sign.</p>
<p>You show the answer on a number line. The boundary point gets an open circle if it is not included (for <span class="m">&lt;</span> or <span class="m">&gt;</span>) and a filled dot if it is (for <span class="m">≤</span> or <span class="m">≥</span>). Then you shade the side where the numbers work.</p>`,
  formal: `<p>A <b>linear inequality</b> in one variable can be written as <span class="m"><i>ax</i> + <i>b</i> &lt; <i>c</i></span> (or with <span class="m">≤, &gt;, ≥</span>), <span class="m"><i>a</i> ≠ 0</span>. Its <b>solution set</b> is the set of all real numbers that make it true. Equivalent inequalities are produced by these properties, for real <span class="m"><i>A</i>, <i>B</i>, <i>k</i></span>:</p>
<div class="display"><b>Addition/Subtraction:</b> <i>A</i> &lt; <i>B</i> ⇔ <i>A</i> ± <i>k</i> &lt; <i>B</i> ± <i>k</i><br><b>Multiplication/Division, <i>k</i> &gt; 0:</b> <i>A</i> &lt; <i>B</i> ⇔ <i>kA</i> &lt; <i>kB</i> ⇔ <i>A</i>/<i>k</i> &lt; <i>B</i>/<i>k</i><br><b>Multiplication/Division, <i>k</i> &lt; 0:</b> <i>A</i> &lt; <i>B</i> ⇔ <i>kA</i> <span class="c3">&gt;</span> <i>kB</i> ⇔ <i>A</i>/<i>k</i> <span class="c3">&gt;</span> <i>B</i>/<i>k</i></div>
<p>The solution set is written in <b>set-builder notation</b>, such as <span class="m">{<i>x</i> | <i>x</i> &gt; −3}</span>, or in <b>interval notation</b>, such as <span class="m">(−3, ∞)</span>. A parenthesis marks an excluded endpoint and a bracket an included one; <span class="m">∞</span> and <span class="m">−∞</span> always take parentheses. If the variable cancels, the inequality is either true for every real number (solution set <span class="m">ℝ = (−∞, ∞)</span>) or for none (solution set <span class="m">∅</span>).</p>`,
  legend: [
    { c: "c1", sym: `−3`, name: "Boundary point", desc: "The number where the two sides are equal. It is an open circle for &lt; or &gt; and a closed dot for ≤ or ≥." },
    { c: "c2", sym: `<i>x</i> &gt; −3`, name: "Solution set", desc: "All the numbers that make the inequality true, shaded on the number line and written as an interval." },
    { c: "c3", sym: `&lt; → &gt;`, name: "Sign flip", desc: "The inequality reverses when both sides are multiplied or divided by a negative number." }
  ],
  steps: { title: "How to solve a linear inequality", items: [
    `Simplify each side: distribute and combine like terms.`,
    `Collect the variable terms on one side and the constants on the other, using addition and subtraction. The sign does not change.`,
    `Divide both sides by the coefficient of <span class="m"><i>x</i></span>. If that coefficient is negative, <span class="m c3">reverse the inequality sign</span>.`,
    `Graph the solution on a number line: open circle or closed dot at the <span class="m c1">boundary</span>, then shade the <span class="m c2">solution side</span>.`,
    `Write the answer in interval notation, and test one shaded number in the original inequality.`
  ] },
  example: {
    prompt: `A moving truck costs $30 plus $0.75 per mile. Your budget is at most $90. How many miles can you drive?`,
    lines: [
      { math: `<span class="m">Let <i>m</i> = miles driven</span>`, note: "Name the unknown." },
      { math: `<span class="m">30 + 0.75<i>m</i> ≤ 90</span>`, note: "The cost must be less than or equal to the budget." },
      { math: `<span class="m">0.75<i>m</i> ≤ 60</span>`, note: "Subtract 30 from both sides." },
      { math: `<span class="m"><i>m</i> ≤ <span class="c1">80</span></span>`, note: "Divide both sides by 0.75. It is positive, so the sign stays the same." },
      { math: `<span class="m">30 + 0.75(80) = 90, &nbsp;30 + 0.75(40) = 60 ≤ 90 ✓</span>`, note: "Check: the boundary gives exactly 90 dollars and a test value inside the set fits the budget." },
      { math: `<span class="m c2">[0, 80]</span>`, note: "Distance cannot be negative, so in context the answer runs from 0 to 80 miles." }
    ],
    answer: `You can drive up to <span class="m">80</span> miles.`
  },
  why: `<p>Real limits are usually inequalities, not equations. A budget says "at most", a speed limit says "no more than", a passing grade says "at least", and a safe dose says "no more than so many milligrams". Solving the inequality tells you the whole range of choices that stay within the limit.</p>
<p>Inequalities are also the language of later math. Domains of functions, tolerances in engineering, constraints in optimisation and error bounds in calculus are all written as inequalities and intervals.</p>`,
  careers: [
    { role: "Nurse", use: "Checks that a total daily dose stays at or below a maximum, such as 4,000 mg of acetaminophen for an adult, when planning dose times." },
    { role: "Structural engineer", use: "Verifies that the load on a beam is at most its rated capacity divided by a safety factor." },
    { role: "Operations manager", use: "Finds the minimum number of units that must be sold for revenue to be at least total cost." },
    { role: "Truck driver", use: "Keeps gross vehicle weight at or below 80,000 lb on US Interstates by limiting cargo weight." },
    { role: "Pharmacist", use: "Confirms that a compounded concentration falls within an allowed range before dispensing." },
    { role: "Quality control inspector", use: "Accepts a part only if its measurement lies within a tolerance such as 25.00 ± 0.05 mm." }
  ],
  life: [
    "Working out how many items you can buy and stay under a budget",
    "Finding the score you need on a final exam to pass a course",
    "Staying within a phone plan's data limit",
    "Planning how many miles you can drive on the fuel you have",
    "Checking that a suitcase stays under an airline's weight limit"
  ],
  fields: [
    { name: "Economics", use: "Budget constraints and break-even conditions are written as linear inequalities." },
    { name: "Engineering", use: "Design constraints and tolerances state that a quantity must stay above or below a limit." },
    { name: "Operations research", use: "Linear programming optimises a cost subject to a system of linear inequality constraints." },
    { name: "Pharmacology", use: "A therapeutic window is the range of drug concentrations above the effective level and below the toxic level." }
  ],
  prereqWhy: {
    "pa-inequalities": "You need to read inequality symbols, graph a boundary with an open or closed circle, and shade a solution set.",
    "pa-two-step": "Solving ax + b &lt; c uses the same two inverse steps as ax + b = c."
  },
  unlocksWhy: {
    "a1-compound": "Compound inequalities join two linear inequalities with AND or OR, and each part is solved this way."
  },
  beyond: [
    { field: "Algebra I", why: "Systems of linear inequalities, graphed as half-planes, extend one-variable solution sets to two variables." },
    { field: "Precalculus", why: "Polynomial and rational inequalities are solved with sign charts built on the same boundary-and-test idea." },
    { field: "Calculus I", why: "Limits, continuity and error bounds are defined with inequalities such as |x − a| < δ." },
    { field: "Operations research", why: "Linear programming finds the best point in a region defined by many linear inequalities." }
  ],
  mistakes: [
    { wrong: `Forgetting to flip: from <span class="m">−2<i>x</i> &lt; 6</span> writing <span class="m"><i>x</i> &lt; −3</span>.`, fix: `Dividing by −2 reverses the sign: <span class="m"><i>x</i> &gt; −3</span>. Test <span class="m"><i>x</i> = 0</span>: <span class="m">0 &lt; 6</span> is true, and 0 is greater than −3.` },
    { wrong: `Flipping when the constant is negative: from <span class="m">3<i>x</i> &gt; −12</span> writing <span class="m"><i>x</i> &lt; −4</span>.`, fix: `Only the sign of the number you divide by matters. Dividing by 3 (positive) keeps the sign: <span class="m"><i>x</i> &gt; −4</span>.` },
    { wrong: `Writing <span class="m"><i>x</i> ≤ 5</span> as <span class="m">(−∞, 5)</span> or <span class="m">[−∞, 5]</span>.`, fix: `The endpoint 5 is included, so use a bracket, and infinity always gets a parenthesis: <span class="m">(−∞, 5]</span>.` }
  ],
  practice: [
    { q: `Solve <span class="m">3<i>x</i> − 7 ≤ 8</span>. Write the answer in interval notation.`, a: `<span class="m">3<i>x</i> ≤ 15</span>, so <span class="m"><i>x</i> ≤ 5</span>. Interval: <span class="m">(−∞, 5]</span>.` },
    { q: `Solve <span class="m">5 − 2<i>x</i> ≥ 11</span>.`, a: `<span class="m">−2<i>x</i> ≥ 6</span>. Divide by −2 and flip: <span class="m"><i>x</i> ≤ −3</span>. Interval: <span class="m">(−∞, −3]</span>. Test <span class="m"><i>x</i> = −4</span>: <span class="m">5 + 8 = 13 ≥ 11</span>.` },
    { q: `Solve <span class="m">2(3 − <i>x</i>) ≥ 4<i>x</i> + 18</span>.`, a: `<span class="m">6 − 2<i>x</i> ≥ 4<i>x</i> + 18</span>. Subtract <span class="m">4<i>x</i></span> and 6: <span class="m">−6<i>x</i> ≥ 12</span>. Divide by −6 and flip: <span class="m"><i>x</i> ≤ −2</span>, so <span class="m">(−∞, −2]</span>.` },
    { q: `Solve <span class="m">3(<i>x</i> + 2) &gt; 3<i>x</i> + 8</span>.`, a: `<span class="m">3<i>x</i> + 6 &gt; 3<i>x</i> + 8</span>. Subtract <span class="m">3<i>x</i></span>: <span class="m">6 &gt; 8</span>, which is false. No real number works; the solution set is <span class="m">∅</span>.` }
  ],
  origin: `The symbols &lt; and &gt; first appeared in print in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631, ten years after his death. The symbols for "less than or equal to" and "greater than or equal to" are usually credited to the French mathematician Pierre Bouguer, who used them in 1734.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-slope"] = {
  title: "Slope as Rate of Change",
  short: "Rise over run: how fast y changes as x changes",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Linear relationships · steepness and rate",
  hero: `<span class="m"><span class="c1"><i>m</i></span> = <span class="fr"><span class="c3">rise</span><span class="c2">run</span></span> = <span class="fr"><span class="c3"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span class="c2"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></span>`,
  lede: `The <span class="m c1">slope</span> of a line is the vertical change, the <span class="m c3">rise</span>, divided by the horizontal change, the <span class="m c2">run</span>. In a real situation it is a rate: how much one quantity changes for each unit of the other.`,
  plain: `<p>Slope measures steepness. Pick two points on a line. Count how far you go up or down between them, the <b>rise</b>. Count how far you go across, the <b>run</b>. Slope is rise divided by run. A line that goes up 6 while going across 3 has slope <span class="m">6 ÷ 3 = 2</span>.</p>
<p>Going left to right, a line that goes uphill has a positive slope. A line that goes downhill has a negative slope. A flat, horizontal line has slope 0, because there is no rise. A vertical line has no slope at all: the run is 0, and you cannot divide by 0, so its slope is <b>undefined</b>.</p>
<p>In real life, slope is a rate. If a car's distance goes from 90 miles to 240 miles while time goes from 1.5 hours to 4 hours, the slope is <span class="m">150 ÷ 2.5 = 60</span> miles per hour. The units of slope are "units of y per unit of x".</p>`,
  formal: `<p>The <b>slope</b> of the line through two points <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span> with <span class="m"><i>x</i><sub>1</sub> ≠ <i>x</i><sub>2</sub></span> is</p>
<div class="display"><span class="c1"><i>m</i></span> = <span class="fr"><span class="c3">Δ<i>y</i></span><span class="c2">Δ<i>x</i></span></span> = <span class="fr"><span class="c3"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span class="c2"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span></span></div>
<p>The value does not depend on which two points of the line are chosen, or on their order, as long as both differences are taken in the same order. <span class="m"><i>m</i> &gt; 0</span>: the line rises from left to right; <span class="m"><i>m</i> &lt; 0</span>: it falls; <span class="m"><i>m</i> = 0</span>: it is horizontal. If <span class="m"><i>x</i><sub>1</sub> = <i>x</i><sub>2</sub></span> the line is vertical and its slope is <b>undefined</b>. When <span class="m"><i>y</i></span> depends on <span class="m"><i>x</i></span>, the slope is the constant <b>rate of change</b> of <span class="m"><i>y</i></span> with respect to <span class="m"><i>x</i></span>, in units of <span class="m"><i>y</i></span> per unit of <span class="m"><i>x</i></span>. For a proportional relationship <span class="m"><i>y</i> = <i>kx</i></span>, the slope is <span class="m"><i>k</i></span>.</p>`,
  legend: [
    { c: "c3", sym: `Δ<i>y</i>`, name: "Rise", desc: "The vertical change y₂ − y₁ between the two points. Negative when the second point is lower." },
    { c: "c2", sym: `Δ<i>x</i>`, name: "Run", desc: "The horizontal change x₂ − x₁ between the two points. It cannot be zero." },
    { c: "c1", sym: `<i>m</i>`, name: "Slope", desc: "Rise divided by run: the steepness of the line and the rate of change of y per unit of x." }
  ],
  steps: { title: "How to find slope from two points", items: [
    `Label the points <span class="m">(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</span> and <span class="m">(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>)</span>.`,
    `Find the <span class="m c3">rise</span>: <span class="m"><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span>.`,
    `Find the <span class="m c2">run</span>: <span class="m"><i>x</i><sub>2</sub> − <i>x</i><sub>1</sub></span>, subtracting in the same order.`,
    `Divide: <span class="m"><span class="c1"><i>m</i></span> = rise ÷ run</span>, and simplify the fraction. If the run is 0, the slope is undefined.`,
    `In an application, attach units (for example litres per minute) and say what the sign means: increasing or decreasing.`
  ] },
  example: {
    prompt: `A water tank is draining at a steady rate. Two minutes after the valve opens it holds 340 L. Seven minutes after, it holds 215 L. Find the rate of change of the volume.`,
    lines: [
      { math: `<span class="m">(2, 340) and (7, 215)</span>`, note: "Write the readings as (time in minutes, volume in litres)." },
      { math: `<span class="m"><span class="c3">rise</span> = 215 − 340 = <span class="c3">−125</span> L</span>`, note: "Change in volume, second reading minus first." },
      { math: `<span class="m"><span class="c2">run</span> = 7 − 2 = <span class="c2">5</span> min</span>`, note: "Change in time, in the same order." },
      { math: `<span class="m"><span class="c1"><i>m</i></span> = <span class="fr"><span class="c3">−125</span><span class="c2">5</span></span> = <span class="c1">−25</span> L/min</span>`, note: "Divide rise by run. The negative sign means the volume is decreasing." },
      { math: `<span class="m">340 + (−25)(5) = 215 ✓</span>`, note: "Check: five minutes at minus 25 litres per minute takes 340 down to 215." }
    ],
    answer: `The volume changes at <span class="m">−25</span> L/min: the tank loses 25 litres every minute.`
  },
  why: `<p>Slope is how people describe change: dollars per hour, kilometres per litre, degrees per day, people per year. Any time a quantity changes at a steady rate, its graph is a line and its slope is that rate. Reading a slope off a graph or a table lets you compare rates and make predictions.</p>
<p>Slope is also the central idea of calculus. The derivative is the slope of a curve at a single point, found by taking the slope between two points that get closer and closer together.</p>`,
  careers: [
    { role: "Civil engineer", use: "Designs road grades as slopes, where a 6% grade means a rise of 6 ft for every 100 ft of horizontal run." },
    { role: "Accessibility consultant", use: "Checks that wheelchair ramps meet the ADA maximum running slope of 1:12, one inch of rise per 12 inches of run." },
    { role: "Roofer", use: "Measures roof pitch as rise per 12 inches of run, such as a 6/12 pitch, to choose materials and safety equipment." },
    { role: "Financial analyst", use: "Reports the rate of change of revenue or costs per quarter from the slope between two data points." },
    { role: "Hydrologist", use: "Computes a river's gradient in metres of drop per kilometre to estimate flow speed and erosion." },
    { role: "Physical therapist", use: "Tracks a patient's range-of-motion gains in degrees per week to judge progress." }
  ],
  life: [
    "Reading a road sign that warns of a 7% downhill grade",
    "Working out your average speed on a trip from two odometer readings",
    "Comparing how fast two savings accounts are growing",
    "Judging how steep a hiking trail is from a map's elevation profile",
    "Seeing how quickly a phone battery drains per hour"
  ],
  fields: [
    { name: "Physics", use: "Velocity is the slope of a position-time graph and acceleration is the slope of a velocity-time graph." },
    { name: "Economics", use: "Marginal cost and the slope of supply and demand lines measure how one quantity responds to another." },
    { name: "Geography", use: "Terrain slope and stream gradient are computed from elevation change over horizontal distance." },
    { name: "Chemistry", use: "Reaction rate is the slope of a concentration-time graph." }
  ],
  prereqWhy: {
    "pa-proportional": "The constant k in y = kx is a slope, and slope generalises it to any line, including lines that miss the origin."
  },
  unlocksWhy: {
    "pa-linear-graphs": "Graphing y = mx + b starts at the intercept and uses the slope's rise and run to find more points.",
    "a1-slope-forms": "Slope-intercept and point-slope forms are built around the slope m computed here."
  },
  beyond: [
    { field: "Algebra I", why: "Parallel lines have equal slopes and perpendicular lines have slopes whose product is −1." },
    { field: "Calculus I", why: "The derivative is the limit of slopes between two points as they move together." },
    { field: "Statistics", why: "The slope of a regression line estimates how much the response variable changes per unit of the explanatory variable." },
    { field: "Physics", why: "Velocity, acceleration and many other rates are read as slopes of graphs." }
  ],
  mistakes: [
    { wrong: `Putting run over rise: slope of the line through <span class="m">(1, 2)</span> and <span class="m">(4, 11)</span> as <span class="m"><span class="fr"><span>3</span><span>9</span></span></span>.`, fix: `Vertical change goes on top: <span class="m"><i>m</i> = <span class="fr"><span>11 − 2</span><span>4 − 1</span></span> = <span class="fr"><span>9</span><span>3</span></span> = 3</span>.` },
    { wrong: `Subtracting in different orders: <span class="m"><span class="fr"><span><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub></span><span><i>x</i><sub>1</sub> − <i>x</i><sub>2</sub></span></span></span>, which gives the wrong sign.`, fix: `Start both differences from the same point. Either order works if it is the same on top and bottom.` },
    { wrong: `Saying a vertical line has slope 0.`, fix: `A horizontal line has slope 0 (no rise). A vertical line has run 0, so its slope is undefined.` }
  ],
  practice: [
    { q: `Find the slope of the line through <span class="m">(1, 2)</span> and <span class="m">(4, 11)</span>.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>11 − 2</span><span>4 − 1</span></span> = <span class="fr"><span>9</span><span>3</span></span> = 3</span>.` },
    { q: `Find the slope of the line through <span class="m">(−2, 5)</span> and <span class="m">(3, −5)</span>.`, a: `<span class="m"><i>m</i> = <span class="fr"><span>−5 − 5</span><span>3 − (−2)</span></span> = <span class="fr"><span>−10</span><span>5</span></span> = −2</span>. The line falls from left to right.` },
    { q: `Find the slope of the line through <span class="m">(3, −1)</span> and <span class="m">(3, 4)</span>, and of the line through <span class="m">(−4, 6)</span> and <span class="m">(2, 6)</span>.`, a: `First: run <span class="m">= 3 − 3 = 0</span>, so the slope is undefined (a vertical line, <span class="m"><i>x</i> = 3</span>). Second: rise <span class="m">= 6 − 6 = 0</span>, so <span class="m"><i>m</i> = 0</span> (a horizontal line, <span class="m"><i>y</i> = 6</span>).` },
    { q: `An ADA-compliant ramp can have a slope of at most <span class="m"><span class="fr"><span>1</span><span>12</span></span></span>. A doorway is 30 in above the ground. What is the shortest horizontal run the ramp can have, in feet?`, a: `<span class="m"><span class="fr"><span>30</span><span><i>r</i></span></span> ≤ <span class="fr"><span>1</span><span>12</span></span></span> requires <span class="m"><i>r</i> ≥ 30 × 12 = 360</span> in, which is <span class="m">360 ÷ 12 = 30</span> ft.` }
  ],
  origin: `Builders have described steepness as rise over run for millennia; the Rhind Papyrus (c. 1550 BCE) gives the slope of pyramid faces as a <i>seked</i>, the horizontal run in palms for a rise of one cubit. The coordinate formula became possible after Descartes and Fermat introduced coordinate geometry in the 1630s. Why the letter <i>m</i> is used for slope is not known.`
};

/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
ARITH["pa-pythagorean"] = {
  title: "The Pythagorean Theorem",
  short: "In a right triangle, a² + b² = c²",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 5,
  voice: "mixed",
  eyebrow: "Geometry · right triangles and square roots",
  hero: `<span class="m"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup></span>`,
  lede: `In every right triangle, the square on the <span class="m c1">hypotenuse</span> has the same area as the squares on the two legs, <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span>, put together.`,
  plain: `<p>A right triangle has one square corner. The two sides that make the corner are the <b>legs</b>. The long side across from the corner is the <b>hypotenuse</b>. It is always the longest side.</p>
<p>Draw a square on each side. For a triangle with legs 3 and 4, the squares on the legs have areas 9 and 16. The square on the hypotenuse has area 25, which is exactly <span class="m">9 + 16</span>. So the hypotenuse is <span class="m">√25 = 5</span>. This works for every right triangle, not just this one.</p>
<p>That gives you a way to find a missing side. If you know both legs, add their squares and take the square root. If you know the hypotenuse and one leg, subtract the squares first. It also works as a test: if the squares of the two shorter sides add up to the square of the longest side, the corner is square.</p>`,
  formal: `<p><b>Pythagorean Theorem.</b> In any right triangle with legs of length <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> and hypotenuse of length <span class="m c1"><i>c</i></span>,</p>
<div class="display"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup>, &nbsp;so&nbsp; <span class="c1"><i>c</i></span> = √<span style="text-decoration:overline"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span> &nbsp;and&nbsp; <span class="c2"><i>a</i></span> = √<span style="text-decoration:overline"><i>c</i><sup>2</sup> − <i>b</i><sup>2</sup></span></div>
<p>Only the principal (nonnegative) square root is used, because lengths are positive. <b>Converse:</b> if the side lengths of a triangle satisfy <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>, the angle opposite <span class="m"><i>c</i></span> is a right angle. More generally, with <span class="m"><i>c</i></span> the longest side, <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> &gt; <i>c</i><sup>2</sup></span> means the triangle is acute and <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> &lt; <i>c</i><sup>2</sup></span> means it is obtuse. Positive integers with <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>, such as 3, 4, 5 and 5, 12, 13, are called <b>Pythagorean triples</b>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First leg", desc: "One of the two sides that form the right angle." },
    { c: "c3", sym: `<i>b</i>`, name: "Second leg", desc: "The other side that forms the right angle." },
    { c: "c1", sym: `<i>c</i>`, name: "Hypotenuse", desc: "The side opposite the right angle. It is always the longest side." }
  ],
  steps: { title: "How to find a missing side of a right triangle", items: [
    `Sketch the triangle and mark the right angle. The side opposite it is the <span class="m c1">hypotenuse <i>c</i></span>.`,
    `Substitute the two known lengths into <span class="m"><span class="c2"><i>a</i></span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1"><i>c</i></span><sup>2</sup></span>.`,
    `Square the known lengths and solve for the unknown square: add if you want <span class="m"><i>c</i><sup>2</sup></span>, subtract if you want a leg.`,
    `Take the principal square root. Leave it exact or round as the problem asks.`,
    `Check that the hypotenuse is the longest side and that the units are correct.`
  ] },
  example: {
    prompt: `A 20 ft extension ladder leans against a wall. Following the safety rule of 1 ft out for every 4 ft of ladder, its foot is 5 ft from the wall. How high up the wall does it reach?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i></span> = 5, &nbsp;<span class="c1"><i>c</i></span> = 20, &nbsp;<span class="c3"><i>b</i></span> = height</span>`, note: "The ladder is the hypotenuse. The ground distance and the height are the legs." },
      { math: `<span class="m"><span class="c2">5</span><sup>2</sup> + <span class="c3"><i>b</i></span><sup>2</sup> = <span class="c1">20</span><sup>2</sup></span>`, note: "Substitute into the theorem." },
      { math: `<span class="m">25 + <i>b</i><sup>2</sup> = 400</span>`, note: "Square the known lengths." },
      { math: `<span class="m"><i>b</i><sup>2</sup> = 375</span>`, note: "Subtract 25 from both sides." },
      { math: `<span class="m"><span class="c3"><i>b</i></span> = √375 ≈ 19.4</span>`, note: "Take the principal square root. Exactly, it is 5√15 = 19.36 to two decimal places." },
      { math: `<span class="m">19.36<sup>2</sup> + 5<sup>2</sup> ≈ 374.8 + 25 ≈ 400 ✓</span>`, note: "Check: the squares of the legs add up to 20 squared." }
    ],
    answer: `The ladder reaches about <span class="m">19.4</span> ft up the wall.`
  },
  why: `<p>The theorem turns two measurements into a third you could not easily measure: the length of a diagonal, the height reached by a ladder, the straight-line distance across a field. Builders use it to make square corners, and screens and phones are sold by their diagonal length.</p>
<p>It is also the root of distance in mathematics. The distance formula on a coordinate plane, the length of a vector, the identity sin²θ + cos²θ = 1 and the equation of a circle all come straight from <span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span>.</p>`,
  careers: [
    { role: "Carpenter", use: "Squares a foundation or deck frame with the 3-4-5 method, measuring 3 ft and 4 ft along two sides and adjusting until the diagonal is 5 ft." },
    { role: "Electrician", use: "Finds the length of conduit or cable run diagonally across a wall or ceiling from its horizontal and vertical distances." },
    { role: "Surveyor", use: "Computes straight-line distances between points from their north-south and east-west coordinate differences." },
    { role: "Firefighter", use: "Estimates how far up a building a ladder will reach given its length and the distance of its base from the wall." },
    { role: "Video game developer", use: "Computes the distance between two objects on screen as the square root of the sum of squared coordinate differences for collision checks." },
    { role: "Pilot", use: "Combines a plane's airspeed with a perpendicular crosswind to find ground speed as the hypotenuse of a right triangle." }
  ],
  life: [
    "Checking whether a TV with a given diagonal fits a wall space",
    "Making sure a garden bed or shelf has square corners",
    "Working out how far you save by cutting across a park diagonally",
    "Finding the length of a ramp or a set of stair stringers",
    "Deciding whether a long item fits diagonally in a car or box"
  ],
  fields: [
    { name: "Construction", use: "Framing, roofing and stair layout depend on right-triangle calculations of diagonal lengths." },
    { name: "Physics", use: "The magnitude of a vector is found from its perpendicular components with the Pythagorean Theorem." },
    { name: "Navigation", use: "Straight-line distances and resultant velocities combine perpendicular displacements or speeds." },
    { name: "Computer graphics", use: "Distances between pixels and 3D points use the Pythagorean distance formula." }
  ],
  prereqWhy: {
    "pa-formulas": "The theorem is a formula relating areas of squares on the sides, and finding a missing side is solving for one variable.",
    "roots": "After finding c² or a², you take the principal square root to get the length."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Geometry", why: "The distance formula, special right triangles and the equation of a circle are consequences of the theorem." },
    { field: "Trigonometry", why: "The identity sin²θ + cos²θ = 1 is the Pythagorean Theorem on a unit circle." },
    { field: "Linear Algebra", why: "The length of a vector in any number of dimensions is the square root of the sum of the squares of its components." },
    { field: "Physics", why: "Resultant forces, velocities and displacements are found from perpendicular components." }
  ],
  mistakes: [
    { wrong: `Adding the sides instead of the squares: legs 3 and 4 give "hypotenuse 7".`, fix: `Square first, add, then take the root: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = √25 = 5</span>.` },
    { wrong: `Taking <span class="m">√<span style="text-decoration:overline"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span> as <span class="m"><i>a</i> + <i>b</i></span>.`, fix: `A square root does not split over addition: <span class="m">√<span style="text-decoration:overline">9 + 16</span> = 5</span>, while <span class="m">√9 + √16 = 7</span>.` },
    { wrong: `Adding when a leg is missing: hypotenuse 13 and leg 5 gives <span class="m">√<span style="text-decoration:overline">169 + 25</span></span>.`, fix: `The hypotenuse squared is the total, so subtract: <span class="m">√<span style="text-decoration:overline">169 − 25</span> = √144 = 12</span>.` },
    { wrong: `Using the theorem on a triangle with no right angle.`, fix: `<span class="m"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span> holds only for right triangles, with <span class="m"><i>c</i></span> the side opposite the right angle.` }
  ],
  practice: [
    { q: `A right triangle has legs 9 cm and 12 cm. Find the hypotenuse.`, a: `<span class="m"><i>c</i> = √<span style="text-decoration:overline">81 + 144</span> = √225 = 15</span> cm.` },
    { q: `A right triangle has hypotenuse 13 m and one leg 5 m. Find the other leg.`, a: `<span class="m"><i>b</i> = √<span style="text-decoration:overline">169 − 25</span> = √144 = 12</span> m.` },
    { q: `Is a triangle with sides 8, 15 and 17 a right triangle? What about 6, 7 and 9?`, a: `<span class="m">8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289 = 17<sup>2</sup></span>, so yes. <span class="m">6<sup>2</sup> + 7<sup>2</sup> = 36 + 49 = 85 ≠ 81 = 9<sup>2</sup></span>, so no; since <span class="m">85 &gt; 81</span>, it is acute.` },
    { q: `A soccer field is 100 m long and 64 m wide. How far is it from one corner to the opposite corner, to the nearest tenth of a metre?`, a: `<span class="m"><i>d</i> = √<span style="text-decoration:overline">100<sup>2</sup> + 64<sup>2</sup></span> = √<span style="text-decoration:overline">10000 + 4096</span> = √14096 ≈ 118.7</span> m.` }
  ],
  origin: `The relationship was known long before Pythagoras (6th century BCE): the Old Babylonian tablet Plimpton 322 (c. 1800 BCE) lists values generated from Pythagorean triples, and the tablet YBC 7289 shows the diagonal of a square as √2 times its side. The earliest surviving proof is Proposition 47 of Book I of Euclid's <i>Elements</i> (c. 300 BCE), and the Chinese text <i>Zhoubi Suanjing</i> discusses the 3-4-5 case under the name <i>gougu</i>.`
};

/* ------------------------------------------------------------------ */
ARITH["pa-linear-graphs"] = {
  title: "Graphing Linear Equations",
  short: "Every solution of y = mx + b is a point on one line",
  grade: "Grade 8 · college Prealgebra (MATH 0xx)",
  hours: 6,
  voice: "mixed",
  eyebrow: "Linear relationships · equations as lines",
  hero: `<span class="m c1"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>`,
  lede: `The solutions of a linear equation in two variables fill a straight <span class="m c1">line</span>. In <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span>, <span class="m c3"><i>m</i></span> is the slope and <span class="m c2"><i>b</i></span> is where the line crosses the <span class="m"><i>y</i></span>-axis.`,
  plain: `<p>An equation like <span class="m"><i>y</i> = 2<i>x</i> − 1</span> has lots of solutions. Each one is a pair of numbers. If <span class="m"><i>x</i> = 2</span>, then <span class="m"><i>y</i> = 3</span>, so <span class="m">(2, 3)</span> is a solution. Plot a few of these pairs and they line up perfectly. Draw the line through them and you have the graph of the equation. Every point on the line is a solution, and every solution is on the line.</p>
<p>The form <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> tells you how to draw it fast. The number <span class="m"><i>b</i></span> is the starting height, where the line crosses the <span class="m"><i>y</i></span>-axis. The number <span class="m"><i>m</i></span> is the slope: from any point, go across 1 and up <span class="m"><i>m</i></span>.</p>
<p>Two points are special. The <b><i>y</i>-intercept</b> is where the line crosses the <span class="m"><i>y</i></span>-axis, so <span class="m"><i>x</i> = 0</span> there. The <b><i>x</i>-intercept</b> is where it crosses the <span class="m"><i>x</i></span>-axis, so <span class="m"><i>y</i> = 0</span> there. In a real problem these often mean "the starting amount" and "when it runs out".</p>`,
  formal: `<p>A <b>linear equation in two variables</b> can be written in <b>standard form</b> <span class="m"><i>Ax</i> + <i>By</i> = <i>C</i></span>, where <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span> are not both zero. An ordered pair <span class="m">(<i>x</i>, <i>y</i>)</span> is a <b>solution</b> if it makes the equation true, and the graph of the equation, the set of all its solutions, is a straight line. When <span class="m"><i>B</i> ≠ 0</span> the equation can be solved for <span class="m"><i>y</i></span>:</p>
<div class="display"><b>Slope-intercept form:</b> <span class="c1"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>, &nbsp;slope <span class="c3"><i>m</i></span>, &nbsp;<i>y</i>-intercept (0, <span class="c2"><i>b</i></span>)<br><b><i>x</i>-intercept:</b> set <i>y</i> = 0 and solve, giving (<span class="c4"><i>a</i></span>, 0); for <i>m</i> ≠ 0, <span class="c4"><i>a</i></span> = −<i>b</i>/<i>m</i><br><b>Horizontal line:</b> <i>y</i> = <i>b</i> (slope 0) &nbsp;&nbsp; <b>Vertical line:</b> <i>x</i> = <i>a</i> (slope undefined)</div>
<p>A line can be graphed by <b>plotting points</b> from a table of values (at least three, the third as a check), by <b>intercepts</b>, or by starting at <span class="m">(0, <i>b</i>)</span> and using the <b>slope</b> as rise over run. A vertical line <span class="m"><i>x</i> = <i>a</i></span> is not of the form <span class="m"><i>y</i> = <i>mx</i> + <i>b</i></span> and is not the graph of a function.</p>`,
  legend: [
    { c: "c3", sym: `<i>m</i>`, name: "Slope", desc: "Rise over run. From any point on the line, moving 1 unit right changes y by m." },
    { c: "c2", sym: `<i>b</i>`, name: "y-intercept", desc: "The value of y when x = 0, so the line crosses the y-axis at (0, b)." },
    { c: "c1", sym: `<i>y</i> = <i>mx</i> + <i>b</i>`, name: "The line", desc: "The set of all solutions (x, y) of the equation." },
    { c: "c4", sym: `(<i>a</i>, 0)`, name: "x-intercept", desc: "Where the line crosses the x-axis, found by setting y = 0." }
  ] ,
  steps: { title: "How to graph a linear equation", items: [
    `If needed, solve the equation for <span class="m"><i>y</i></span> to get <span class="m"><i>y</i> = <span class="c3"><i>m</i></span><i>x</i> + <span class="c2"><i>b</i></span></span>.`,
    `Plot the <span class="m c2"><i>y</i>-intercept</span> <span class="m">(0, <i>b</i>)</span>.`,
    `Use the <span class="m c3">slope</span> as rise over run to plot a second point, and a third as a check.`,
    `Or find both intercepts: set <span class="m"><i>x</i> = 0</span> to get the <span class="m"><i>y</i></span>-intercept and <span class="m"><i>y</i> = 0</span> to get the <span class="m c4"><i>x</i>-intercept</span>.`,
    `Draw the <span class="m c1">line</span> through the points, extend it across the grid, and check one point in the original equation.`
  ] },
  example: {
    prompt: `A candle is 30 cm tall and burns down 2.5 cm per hour. Its height after <span class="m"><i>t</i></span> hours is <span class="m"><i>h</i> = −2.5<i>t</i> + 30</span>. Graph the relationship and find when the candle burns out.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>m</i> = −2.5</span>, &nbsp;<span class="c2"><i>b</i> = 30</span></span>`, note: "Read the slope and intercept: the height drops 2.5 cm each hour from a start of 30 cm." },
      { math: `<span class="m"><span class="c2">(0, 30)</span></span>`, note: "The vertical intercept: the height at time 0." },
      { math: `<span class="m"><i>t</i> = 4: &nbsp;<i>h</i> = −2.5(4) + 30 = 20, &nbsp;point (4, 20)</span>`, note: "A second point from the table of values." },
      { math: `<span class="m">0 = −2.5<i>t</i> + 30 &nbsp;⇒&nbsp; 2.5<i>t</i> = 30 &nbsp;⇒&nbsp; <i>t</i> = 12</span>`, note: "Set the height to 0 to find the horizontal intercept." },
      { math: `<span class="m"><span class="c4">(12, 0)</span></span>`, note: "The horizontal intercept: the candle is gone after 12 hours." },
      { math: `<span class="m">−2.5(12) + 30 = 0 ✓</span>`, note: "Check the intercept in the equation, then draw the line segment from (0, 30) to (12, 0)." }
    ],
    answer: `The graph is a line segment from <span class="m">(0, 30)</span> to <span class="m">(12, 0)</span>. The candle burns out after <span class="m">12</span> hours.`
  },
  why: `<p>A graph shows the whole relationship at a glance. You can see where a quantity starts, how fast it changes, when it reaches a target and when it runs out. Budgets, fuel, loan balances and phone plans all show up as lines, and comparing two lines on the same axes shows which option is better and when.</p>
<p>Graphing is also the bridge between algebra and geometry. It leads straight into functions, systems of equations (where lines cross), linear regression in statistics and, eventually, the tangent lines of calculus.</p>`,
  careers: [
    { role: "Data analyst", use: "Plots a linear trend line through data and reads its slope and intercept to report growth per month and the starting level." },
    { role: "Accountant", use: "Graphs straight-line depreciation of an asset, where the vertical intercept is the purchase cost and the slope is the yearly loss in value." },
    { role: "Medical laboratory scientist", use: "Builds a linear calibration curve from standards and reads unknown sample concentrations from the line." },
    { role: "Utility rate analyst", use: "Graphs bills as a fixed customer charge plus a price per kilowatt-hour to compare rate plans." },
    { role: "Operations manager", use: "Graphs cost and revenue lines to find the break-even quantity where they cross." },
    { role: "Physics teacher", use: "Uses position-time graphs from motion sensors, reading velocity as slope and starting position as intercept." }
  ],
  life: [
    "Reading how a loan or savings balance changes over time",
    "Comparing two phone or subscription plans on one graph",
    "Estimating when your car will need fuel from a steady rate of use",
    "Tracking a steady weight-loss or training goal on a chart",
    "Converting temperatures with a Celsius-Fahrenheit line"
  ],
  fields: [
    { name: "Physics", use: "Constant-velocity motion is graphed as a line with slope equal to velocity." },
    { name: "Chemistry", use: "Beer's law gives a linear graph of absorbance against concentration used to identify unknowns." },
    { name: "Economics", use: "Linear supply, demand, cost and revenue models are analysed by graphing and finding intercepts and intersections." },
    { name: "Statistics", use: "Scatter plots are summarised with a fitted line whose slope and intercept are interpreted in context." }
  ],
  prereqWhy: {
    "pa-slope": "The slope m tells you how far to rise for each run when drawing the line from its intercept.",
    "pa-two-step": "Finding an intercept or rewriting 3x + 4y = 12 as y = −(3/4)x + 3 means solving a two-step equation."
  },
  unlocksWhy: {
    "a1-functions": "A non-vertical line is the graph of a linear function f(x) = mx + b, the first family studied with function notation, domain and range."
  },
  beyond: [
    { field: "Algebra I", why: "Systems of linear equations are solved graphically by finding where two lines intersect." },
    { field: "Statistics", why: "Linear regression fits y = mx + b to data and interprets the slope and intercept." },
    { field: "Calculus I", why: "The tangent line at a point is a linear graph that approximates a curve near that point." },
    { field: "Economics", why: "Supply-and-demand and cost-revenue analysis rely on graphs of linear equations." }
  ],
  mistakes: [
    { wrong: `Plotting the <span class="m"><i>y</i></span>-intercept on the <span class="m"><i>x</i></span>-axis: graphing <span class="m"><i>y</i> = 2<i>x</i> + 3</span> through <span class="m">(3, 0)</span>.`, fix: `The <span class="m"><i>y</i></span>-intercept has <span class="m"><i>x</i> = 0</span>: plot <span class="m">(0, 3)</span>.` },
    { wrong: `Reading the slope of <span class="m">3<i>x</i> + 4<i>y</i> = 12</span> as 3.`, fix: `Solve for <span class="m"><i>y</i></span> first: <span class="m"><i>y</i> = −<span class="fr"><span>3</span><span>4</span></span><i>x</i> + 3</span>, so <span class="m"><i>m</i> = −<span class="fr"><span>3</span><span>4</span></span></span>.` },
    { wrong: `Mixing up <span class="m"><i>x</i> = 4</span> and <span class="m"><i>y</i> = 4</span>, or graphing <span class="m"><i>x</i> = 4</span> as a single point.`, fix: `<span class="m"><i>x</i> = 4</span> is the vertical line of all points with <span class="m"><i>x</i></span>-coordinate 4. <span class="m"><i>y</i> = 4</span> is a horizontal line.` },
    { wrong: `Using a negative slope as "up": for <span class="m"><i>m</i> = −<span class="fr"><span>2</span><span>3</span></span></span>, going up 2 and right 3.`, fix: `A negative slope means down 2 and right 3 (or up 2 and left 3).` }
  ],
  practice: [
    { q: `Make a table for <span class="m"><i>y</i> = 2<i>x</i> − 1</span> using <span class="m"><i>x</i> = −1, 0, 2</span>.`, a: `<span class="m">(−1, −3)</span>, <span class="m">(0, −1)</span>, <span class="m">(2, 3)</span>. The three points lie on one line with slope 2.` },
    { q: `Find the intercepts of <span class="m">3<i>x</i> + 4<i>y</i> = 12</span>.`, a: `<span class="m"><i>y</i> = 0</span>: <span class="m">3<i>x</i> = 12</span>, so the <span class="m"><i>x</i></span>-intercept is <span class="m">(4, 0)</span>. <span class="m"><i>x</i> = 0</span>: <span class="m">4<i>y</i> = 12</span>, so the <span class="m"><i>y</i></span>-intercept is <span class="m">(0, 3)</span>.` },
    { q: `Graph <span class="m"><i>y</i> = −<span class="fr"><span>2</span><span>3</span></span><i>x</i> + 4</span> using the slope and <span class="m"><i>y</i></span>-intercept. Name two more points and the <span class="m"><i>x</i></span>-intercept.`, a: `Start at <span class="m">(0, 4)</span>. Down 2, right 3 gives <span class="m">(3, 2)</span>, then <span class="m">(6, 0)</span>. The <span class="m"><i>x</i></span>-intercept is <span class="m">(6, 0)</span>: <span class="m">−<span class="fr"><span>2</span><span>3</span></span>(6) + 4 = 0</span>.` },
    { q: `Write <span class="m">4<i>x</i> − 2<i>y</i> = 8</span> in slope-intercept form. Give the slope and both intercepts. Then describe the graph of <span class="m">2<i>y</i> − 6 = 0</span>.`, a: `<span class="m">−2<i>y</i> = −4<i>x</i> + 8</span>, so <span class="m"><i>y</i> = 2<i>x</i> − 4</span>: slope 2, <span class="m"><i>y</i></span>-intercept <span class="m">(0, −4)</span>, <span class="m"><i>x</i></span>-intercept <span class="m">(2, 0)</span>. <span class="m">2<i>y</i> − 6 = 0</span> means <span class="m"><i>y</i> = 3</span>, a horizontal line with slope 0.` }
  ],
  origin: `Pierre de Fermat and René Descartes developed coordinate geometry independently in the 1630s. Fermat's <i>Ad locos planos et solidos isagoge</i>, circulated in manuscript around 1636, shows that an equation of the first degree in two unknowns describes a straight line, and Descartes published his method in <i>La Géométrie</i> (1637).`
};
