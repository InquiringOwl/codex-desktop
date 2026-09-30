window.ARITH = window.ARITH || {};

ARITH["units"] = {
  title: "Units & Dimensional Analysis",
  short: "Converting units by multiplying by one",
  grade: "Grades 6–8; central in high school chemistry and physics",
  hours: 7,
  voice: "plain",
  eyebrow: "Measurement · dimensional analysis",
  hero: `<span class="m">60 <span class="fr"><span>mi</span><span>h</span></span> × <span class="c2"><span class="fr"><span>5280 ft</span><span>1 mi</span></span></span> × <span class="c2"><span class="fr"><span>1 h</span><span>3600 s</span></span></span> = <span class="c1">88 <span class="fr"><span>ft</span><span>s</span></span></span></span>`,
  lede: `Each conversion factor equals 1, so multiplying by it changes the units without changing the quantity. Units cancel like factors in a fraction.`,
  plain: `<p>A measurement is a number <i>and</i> a unit. "60" means nothing until you say 60 miles per hour, or 60 kilograms. Changing units is a matter of rewriting the same amount in a different way.</p>
<p>The key idea is that a fraction like <span class="m">5280 ft / 1 mi</span> is equal to 1, because 5280 feet and 1 mile are the same length. Multiplying by 1 never changes a value. So you can multiply by as many of these <b>conversion factors</b> as you like, choosing each one so that the unit you want to get rid of is on the opposite side of the fraction bar. Then the units cancel, just like numbers do.</p>
<p>This method is called <b>dimensional analysis</b>. It is also a built-in error check. If the units at the end are not the ones you wanted, you set something up upside down.</p>`,
  formal: `<p>A physical quantity is a product <span class="m"><i>Q</i> = {<i>Q</i>} · [<i>Q</i>]</span> of a numerical value and a unit. A <b>conversion factor</b> is a ratio of two equal quantities expressed in different units, so its value is 1:</p>
<div class="display"><span class="c2"><span class="fr"><span>2.54 cm</span><span>1 in</span></span></span> = 1 &nbsp;&nbsp;⇒&nbsp;&nbsp; <i>Q</i> × <span class="c2"><span class="fr"><span>new unit</span><span>old unit</span></span></span> × ⋯ = <span class="c1"><i>Q</i> in new units</span><br><span class="dim">For area or volume, square or cube the factor: (<span class="fr"><span>0.3048 m</span><span>1 ft</span></span>)<sup>2</sup> = <span class="fr"><span>0.09290304 m<sup>2</sup></span><span>1 ft<sup>2</sup></span></span></span></div>
<p>Units obey the algebra of multiplication and division, so they cancel between numerator and denominator. A physically meaningful equation must be <b>dimensionally homogeneous</b>: every term has the same dimension (length, mass, time, and so on), and only like quantities are added. The International System of Units (SI) is built on seven base units, including the metre, kilogram and second. Some factors are exact by definition (1 in = 2.54 cm exactly), while others are rounded (1 kg ≈ 2.2046 lb).</p>`,
  legend: [
    { c: "c2", sym: `<span class="fr"><span>new</span><span>old</span></span>`, name: "Conversion factor", desc: "A ratio of equal amounts in two units. Its value is 1, so it changes only the units." },
    { c: "c1", sym: `<i>Q</i>`, name: "Result", desc: "The same quantity expressed in the target units after the unwanted units cancel." },
    { c: "c4", sym: `[ ]`, name: "Unit", desc: "The label attached to a number. Units multiply, divide and cancel like variables." }
  ],
  steps: { title: "How to convert with dimensional analysis", items: [
    `Write the given quantity with its units as a fraction, such as <span class="m">60 mi / 1 h</span>.`,
    `Write the units you want at the end.`,
    `Choose a conversion factor that puts the unwanted unit on the opposite side of the fraction bar.`,
    `Chain more factors until only the target units remain.`,
    `Cancel units, then multiply all numerators and divide by all denominators.`,
    `Check the final units and whether the size of the number makes sense.`
  ] },
  example: {
    prompt: `A child weighs 22 lb. A medication order is 15 mg per kg of body weight, and the liquid contains 160 mg per 5 mL. How many millilitres is one dose? (Use 1 kg = 2.2 lb.)`,
    lines: [
      { math: `<span class="m">22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span> = 10 kg</span>`, note: "Pounds cancel, leaving kilograms." },
      { math: `<span class="m">10 kg × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> = 150 mg</span>`, note: "The order is a rate: mg per kg. Kilograms cancel." },
      { math: `<span class="m">150 mg × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span> = <span class="fr"><span>750</span><span>160</span></span> mL</span>`, note: "Milligrams cancel, leaving millilitres." },
      { math: `<span class="m"><span class="fr"><span>750</span><span>160</span></span> = <span class="c1">4.6875 mL</span> ≈ 4.7 mL</span>`, note: "Round to a measurable amount." },
      { math: `<span class="m">22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span> × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span></span>`, note: "The whole chain in one line. Only mL survives." }
    ],
    answer: `One dose is about <span class="m">4.7</span> mL.`
  },
  why: `<p>Units errors are some of the costliest mistakes in the real world. In 1999 NASA lost the Mars Climate Orbiter because one team used pound-force seconds while another expected newton-seconds. The same kind of error in medicine can mean a tenfold overdose. Dimensional analysis catches these errors because the units themselves tell you whether the setup is right.</p>
<p>Chemistry and physics courses rely on it constantly for converting moles, energy, pressure and speed. It is also a quick way to check any formula: if the units on both sides do not match, the formula is wrong.</p>`,
  careers: [
    { role: "Nurse", use: "Converts mg/kg dosing orders into millilitres of liquid medication and sets IV pumps in mL/h." },
    { role: "Chemist", use: "Chains conversion factors from grams to moles to molecules using molar mass and Avogadro's number." },
    { role: "Aircraft mechanic", use: "Converts between metric and imperial torque and pressure units such as N·m and ft·lb, or kPa and psi." },
    { role: "Civil engineer", use: "Converts flow rates between cubic feet per second and gallons per minute when sizing pipes and culverts." },
    { role: "Chef", use: "Converts recipes between cups, millilitres, ounces and grams." },
    { role: "Pilot", use: "Converts fuel between gallons, pounds and litres and speeds between knots and km/h." }
  ],
  life: [
    "Converting a recipe from metric to cups and ounces",
    "Working out a speed limit in km/h when driving abroad",
    "Figuring out how many square feet of flooring a room needs",
    "Reading medicine labels in mL and mg",
    "Comparing gas prices per litre and per gallon"
  ],
  fields: [
    { name: "Chemistry", use: "Stoichiometry and gas-law problems are solved as chains of conversion factors." },
    { name: "Physics", use: "Checking that an equation's units balance is a standard test of any derivation." },
    { name: "Engineering", use: "Designs mix units from different standards, and consistent conversion is required for safety." },
    { name: "Pharmacology", use: "Dose calculations convert between body mass, concentration and volume." }
  ],
  prereqWhy: {
    "proportions": "Every conversion factor states a proportion between equal amounts, such as 1 mi : 5280 ft.",
    "decimal-ops": "Conversion factors like 2.54 cm per inch and 0.3048 m per foot mean multiplying and dividing decimals."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus", why: "Rates of change carry units, such as m/s for a derivative of position, and integrals multiply units, such as m/s × s = m." },
    { field: "Differential equations", why: "Nondimensionalisation simplifies models by dividing out characteristic units." },
    { field: "Mathematical modelling", why: "The Buckingham π theorem uses dimensional analysis to find the form of physical laws." }
  ],
  mistakes: [
    { wrong: `Setting a factor upside down: <span class="m">22 lb × <span class="fr"><span>2.2 lb</span><span>1 kg</span></span></span>, giving lb²/kg.`, fix: `Put the unit you want to cancel on the bottom: <span class="m">22 lb × <span class="fr"><span>1 kg</span><span>2.2 lb</span></span> = 10 kg</span>.` },
    { wrong: `Converting area with a length factor: 1 yd² = 3 ft².`, fix: `Square the factor: <span class="m">1 yd² × (3 ft / 1 yd)<sup>2</sup> = 9 ft²</span>.` },
    { wrong: `Dropping units in the middle of a calculation.`, fix: `Write units on every number so you can see them cancel. The final unit is your check.` }
  ],
  practice: [
    { q: `Convert 3.5 ft to inches.`, a: `<span class="m">3.5 ft × <span class="fr"><span>12 in</span><span>1 ft</span></span> = 42 in</span>` },
    { q: `Convert 2.5 L to millilitres.`, a: `<span class="m">2.5 L × <span class="fr"><span>1000 mL</span><span>1 L</span></span> = 2,500 mL</span>` },
    { q: `Convert 45 km/h to metres per second.`, a: `<span class="m">45 <span class="fr"><span>km</span><span>h</span></span> × <span class="fr"><span>1000 m</span><span>1 km</span></span> × <span class="fr"><span>1 h</span><span>3600 s</span></span> = <span class="fr"><span>45,000</span><span>3600</span></span> = 12.5 m/s</span>` },
    { q: `A room is 150 ft². What is its area in square metres? (1 ft = 0.3048 m exactly.)`, a: `<span class="m">150 ft² × (0.3048 m / 1 ft)<sup>2</sup> = 150 × 0.09290304 ≈ 13.9 m²</span>` }
  ],
  origin: `France introduced the metric system in the 1790s, basing the metre on the size of the Earth. In 1959 the United States and other English-speaking countries agreed to define the inch as exactly 2.54 cm, and in 1960 the metric system was formalised as the International System of Units (SI).`
};
