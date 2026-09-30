window.ARITH = window.ARITH || {};

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
