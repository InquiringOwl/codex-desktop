window.ARITH = window.ARITH || {};

ARITH["proportions"] = {
  title: "Proportions",
  short: "Two equal ratios, one missing value",
  grade: "Grades 6–7",
  hours: 6,
  voice: "mixed",
  eyebrow: "Multiplicative reasoning · equal ratios",
  hero: `<span class="m"><span class="fr"><span class="c2"><i>a</i></span><span class="c2"><i>b</i></span></span> = <span class="fr"><span class="c2"><i>c</i></span><span class="c1"><i>x</i></span></span> &nbsp;⇒&nbsp; <span class="c1"><i>x</i></span> = <span class="fr"><span><i>bc</i></span><span><i>a</i></span></span></span>`,
  lede: `A proportion says two ratios are equal. If three of the four numbers are known, the fourth is determined.`,
  plain: `<p>Suppose your car used 9 gallons to drive 252 miles. How much gas will a 420-mile trip take? If the car burns gas at a steady rate, the ratio of gallons to miles stays the same. So you set up two equal ratios, one you know and one with a blank, and fill in the blank.</p>
<p>That equation, <span class="m">9/252 = <i>x</i>/420</span>, is a <b>proportion</b>. The quick way to solve it is <b>cross-multiplication</b>: multiply diagonally across the equals sign and you get <span class="m">252<i>x</i> = 9 × 420</span>. Then divide.</p>
<p>The important check is whether the situation really is proportional. Twice the distance means twice the gas, so yes. But twice the workers usually means half the time, not twice the time. That is a different kind of relationship.</p>`,
  formal: `<p>A <b>proportion</b> is an equation <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>. The <b>cross-product property</b> states</p>
<div class="display"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(multiply both sides by <i>bd</i>)</span></div>
<p>Two quantities <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> are <b>directly proportional</b> if <span class="m"><i>y</i> = <i>kx</i></span> for a constant <span class="m"><i>k</i> ≠ 0</span>, the <b>constant of proportionality</b>. Then <span class="m"><i>y</i>/<i>x</i></span> is the same for every pair, so any two pairs form a proportion. They are <b>inversely proportional</b> if <span class="m"><i>xy</i> = <i>k</i></span>, which does not give a proportion of this form.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i> : <i>b</i>`, name: "Known pair", desc: "A matched pair of values you already know, such as 9 gallons for 252 miles." },
    { c: "c2", sym: `<i>c</i>`, name: "Known value of the new pair", desc: "The value you have for the new situation, such as 420 miles." },
    { c: "c1", sym: `<i>x</i>`, name: "Unknown", desc: "The missing value that keeps the two ratios equal." },
    { c: "c4", sym: `<i>k</i>`, name: "Constant of proportionality", desc: "The fixed ratio y/x. On the double number line it is how far one line stretches relative to the other." }
  ],
  steps: { title: "How to solve a proportion", items: [
    `Check that the situation is proportional: doubling one quantity should double the other.`,
    `Write the known ratio with units, such as <span class="m">gallons/miles</span>.`,
    `Write the second ratio in the same order, with <span class="m c1"><i>x</i></span> for the unknown.`,
    `Cross-multiply to get <span class="m"><i>ad</i> = <i>bc</i></span>.`,
    `Divide to isolate <span class="m c1"><i>x</i></span>.`,
    `Check by comparing the unit rates or plugging back in.`
  ] },
  example: {
    prompt: `Your car used 9 gallons of gas to drive 252 miles. At the same rate, how many gallons will a 420-mile trip use?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">9</span><span class="c2">252</span></span> = <span class="fr"><span class="c1"><i>x</i></span><span class="c2">420</span></span></span>`, note: "Gallons over miles on both sides." },
      { math: `<span class="m">252<span class="c1"><i>x</i></span> = 9 × 420</span>`, note: "Cross-multiply." },
      { math: `<span class="m">252<span class="c1"><i>x</i></span> = 3,780</span>`, note: "Multiply out the right side." },
      { math: `<span class="m"><span class="c1"><i>x</i></span> = 3,780 ÷ 252 = 15</span>`, note: "Divide both sides by 252." },
      { math: `<span class="m">252 ÷ 9 = 28 = 420 ÷ 15</span>`, note: "Check: both trips get 28 miles per gallon." }
    ],
    answer: `The trip will use <span class="m">15</span> gallons of gas.`
  },
  why: `<p>Proportions are the everyday tool for scaling. Map distances, recipe adjustments, currency exchange, dosing by weight, and estimating a whole population from a sample all rely on setting two ratios equal.</p>
<p>Direct proportion <span class="m"><i>y</i> = <i>kx</i></span> is the simplest linear function and the first model of how one quantity depends on another. Similar triangles, which are the foundation of trigonometry, are proportions about lengths.</p>`,
  careers: [
    { role: "Nurse", use: "Uses proportions to find a liquid dose, such as 250 mg is to 5 mL as 400 mg is to x mL, giving 8 mL." },
    { role: "Wildlife biologist", use: "Estimates population size by capture-recapture, setting marked animals in a sample equal in ratio to marked animals in the whole population." },
    { role: "Architect", use: "Converts scale-drawing measurements to real dimensions with a fixed ratio such as 1/4 in : 1 ft." },
    { role: "Pharmacist", use: "Scales compounding formulas proportionally to make a different total quantity." },
    { role: "Travel agent", use: "Converts prices between currencies using the proportion set by the exchange rate." },
    { role: "Graphic designer", use: "Resizes images while keeping the width-to-height ratio fixed so they do not distort." }
  ],
  life: [
    "Figuring out how much gas a longer trip will need",
    "Converting prices while travelling abroad",
    "Scaling a recipe from 4 servings to 10",
    "Resizing a photo without stretching it",
    "Estimating distances from a map scale"
  ],
  fields: [
    { name: "Chemistry", use: "Stoichiometry uses proportions from balanced equations to scale reactant and product amounts." },
    { name: "Ecology", use: "Mark-recapture and quadrat sampling estimate totals by proportion." },
    { name: "Physics", use: "Many laws, such as Hooke's law F = kx, are direct proportions." }
  ],
  prereqWhy: {
    "ratios": "A proportion is a statement that two ratios are equal, so you need to read and write ratios first.",
    "fraction-ops": "Cross-multiplying and simplifying the result are fraction operations."
  },
  unlocksWhy: {
    "units": "Each conversion factor is a proportion between equal amounts in two units, and dimensional analysis chains them together.",
    "g-dilations": "A dilation multiplies every distance from the centre by the same scale factor k, so image and preimage lengths form one proportion."
  },
  beyond: [
    { field: "Algebra I", why: "Direct variation y = kx is a linear function through the origin with slope k." },
    { field: "Geometry", why: "Similar figures have proportional sides, which is used to find unknown lengths." },
    { field: "Trigonometry", why: "Trigonometric ratios are constant because right triangles with the same angles are similar." }
  ],
  mistakes: [
    { wrong: `Mixing the order: <span class="m"><span class="fr"><span>9</span><span>252</span></span> = <span class="fr"><span>420</span><span><i>x</i></span></span></span>, with gallons over miles on one side and miles over gallons on the other.`, fix: `Keep the same units in the same positions on both sides: <span class="m"><span class="fr"><span>9</span><span>252</span></span> = <span class="fr"><span><i>x</i></span><span>420</span></span></span>.` },
    { wrong: `Using a proportion for an inverse relationship: "3 painters take 6 hours, so 6 painters take 12 hours."`, fix: `More painters means less time. Here the work is 3 × 6 = 18 painter-hours, so 6 painters take <span class="m">18 ÷ 6 = 3</span> hours.` },
    { wrong: `Cross-adding or multiplying straight across instead of diagonally.`, fix: `Multiply each numerator by the opposite denominator: <span class="m"><i>ad</i> = <i>bc</i></span>.` }
  ],
  practice: [
    { q: `Solve <span class="m"><span class="fr"><span>3</span><span>5</span></span> = <span class="fr"><span><i>x</i></span><span>40</span></span></span>.`, a: `<span class="m">5<i>x</i> = 120</span>, so <span class="m"><i>x</i> = 24</span>.` },
    { q: `Solve <span class="m"><span class="fr"><span>7</span><span><i>x</i></span></span> = <span class="fr"><span>21</span><span>12</span></span></span>.`, a: `<span class="m">21<i>x</i> = 84</span>, so <span class="m"><i>x</i> = 4</span>.` },
    { q: `4 notebooks cost $10. At the same price each, what do 14 notebooks cost?`, a: `<span class="m"><span class="fr"><span>10</span><span>4</span></span> = <span class="fr"><span><i>x</i></span><span>14</span></span></span>, so <span class="m">4<i>x</i> = 140</span> and <span class="m"><i>x</i> = $35</span>.` },
    { q: `A map's scale is 1 cm : 2.5 km. Two towns are 18.4 km apart. How far apart are they on the map?`, a: `<span class="m"><span class="fr"><span>1</span><span>2.5</span></span> = <span class="fr"><span><i>x</i></span><span>18.4</span></span></span>, so <span class="m"><i>x</i> = 18.4 ÷ 2.5 = 7.36</span> cm.` }
  ],
  origin: `Euclid's <i>Elements</i> (c. 300 BCE) sets out a theory of proportion attributed to Eudoxus. Solving for a missing fourth term was taught as the "rule of three", which appears in the <i>Aryabhatiya</i> of the Indian mathematician Aryabhata (499 CE) and was a staple of European merchant arithmetic for centuries.`
};
