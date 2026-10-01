window.ARITH = window.ARITH || {};

ARITH["mech-units"] = {
  title: "Units, the SI & Unit Conversion",
  short: "What physics measures and how to change its units",
  grade: "High school physics · college PHYS 1xx",
  hours: 4,
  voice: "plain",
  eyebrow: "Mechanics · measurement",
  hero: `<span class="m"><span class="c2">90.0 km/h</span> × <span class="c3"><span class="fr"><span>1000 m</span><span>1 km</span></span></span> × <span class="c3"><span class="fr"><span>1 h</span><span>3600 s</span></span></span> = <span class="c1">25.0 m/s</span></span>`,
  lede: `Physics is a science of measurement. Every measured quantity is a number times a unit, and changing the unit means multiplying by conversion factors that each equal one.`,
  plain: `<p>Physics tries to describe how matter, energy, space and time behave, and it does that with numbers. A length, a mass, a time, a speed: each is found by comparing something with an agreed standard. "The track is 400 m long" means the track is 400 times as long as one metre. The number alone means nothing. "400" could be metres, feet or laps. So in physics a quantity is always a <b>number times a unit</b>, and the unit travels with the number through every line of a calculation.</p>
<p>Scientists worldwide use the <b>SI</b> (the International System of Units). It has seven <b>base units</b>, and every other unit is built from them. Mechanics needs only three: the <b>metre</b> (m) for length, the <b>kilogram</b> (kg) for mass and the <b>second</b> (s) for time. A speed is in m/s, a force in newtons, where 1 N = 1 kg·m/s². The other four base units (ampere, kelvin, mole, candela) arrive with electricity, heat, chemistry and light.</p>
<p>Very large and very small quantities get a <b>prefix</b> that stands for a power of ten: kilo (k) means 10³, milli (m) means 10⁻³, micro (μ) means 10⁻⁶, and so on. So 3.5 km is 3.5 × 10³ m, and 250 ms is 0.250 s.</p>
<p>To change units, multiply by a <b>conversion factor</b>: a fraction such as 1000 m / 1 km whose top and bottom are the same amount. It equals 1, so it changes the unit but not the quantity. Arrange each factor so the unit you want to get rid of appears once on top and once on the bottom. Then it cancels like a common factor, and you can chain as many factors as you need.</p>`,
  formal: `<p>A <b>physical quantity</b> is expressed as a numerical value times a <b>unit</b>: <span class="m"><i>Q</i> = {<i>Q</i>}·[<i>Q</i>]</span>. The <b>International System of Units</b> (SI) defines seven <b>base units</b>. Since 20 May 2019 each is defined by fixing the exact numerical value of a constant of nature:</p>
<div class="display">second (s), time: &nbsp;Δ<i>ν</i><sub>Cs</sub> = 9 192 631 770 Hz<br>metre (m), length: &nbsp;<i>c</i> = 299 792 458 m/s<br>kilogram (kg), mass: &nbsp;<i>h</i> = 6.626 070 15 × 10<sup>−34</sup> J·s<br>ampere (A), electric current: &nbsp;<i>e</i> = 1.602 176 634 × 10<sup>−19</sup> C<br>kelvin (K), temperature: &nbsp;<i>k</i><sub>B</sub> = 1.380 649 × 10<sup>−23</sup> J/K<br>mole (mol), amount of substance: &nbsp;<i>N</i><sub>A</sub> = 6.022 140 76 × 10<sup>23</sup> mol<sup>−1</sup><br>candela (cd), luminous intensity: &nbsp;<i>K</i><sub>cd</sub> = 683 lm/W</div>
<p>Every other SI unit is a <b>derived unit</b>, a product of powers of base units: <span class="m">1 N = 1 kg·m/s<sup>2</sup></span>, <span class="m">1 J = 1 N·m = 1 kg·m<sup>2</sup>/s<sup>2</sup></span>, <span class="m">1 W = 1 J/s</span>. A <b>metric prefix</b> multiplies a unit by a power of ten: pico (p) 10<sup>−12</sup>, nano (n) 10<sup>−9</sup>, micro (μ) 10<sup>−6</sup>, milli (m) 10<sup>−3</sup>, centi (c) 10<sup>−2</sup>, kilo (k) 10<sup>3</sup>, mega (M) 10<sup>6</sup>, giga (G) 10<sup>9</sup>, tera (T) 10<sup>12</sup>.</p>
<p>A <b>conversion factor</b> is a ratio of two equal quantities in different units, so it equals 1: <span class="m"><span class="fr"><span>1609.344 m</span><span>1 mi</span></span> = 1</span>. Multiplying by it changes the unit and leaves the quantity unchanged. Units cancel algebraically, and a factor raised to a power converts squared or cubed units: <span class="m">1 m<sup>3</sup> = 1 m<sup>3</sup> × (100 cm / 1 m)<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>Q</i><sub>0</sub>`, name: "Starting quantity", desc: "The value you were given, with its original units, for example 90.0 km/h." },
    { c: "c3", sym: `<span class="fr"><span>1000 m</span><span>1 km</span></span>`, name: "Conversion factor", desc: "A ratio of two equal amounts, so it equals exactly 1. Write it so the unwanted unit sits opposite where it already is." },
    { c: "c4", sym: `<s>km</s>`, name: "Cancelled unit", desc: "A unit that appears once in a numerator and once in a denominator. It divides out, exactly like a common factor." },
    { c: "c1", sym: `<i>Q</i>`, name: "Result", desc: "The same physical quantity expressed in the units you wanted, for example 25.0 m/s." }
  ],
  steps: { title: "How to convert units with a chain of factors", items: [
    `Write the <span class="c2">starting quantity</span> with its units, as a fraction if it has a denominator (km/h becomes km over h).`,
    `Write the target units. List the known equalities that link the two, such as 1 km = 1000 m and 1 h = 3600 s.`,
    `Multiply by a <span class="c3">conversion factor</span> for each unit that must change. Put the unwanted unit in the denominator if it is on top, and on top if it is in the denominator.`,
    `For squared or cubed units, raise the whole factor to that power: <span class="m">(100 cm / 1 m)<sup>3</sup></span>.`,
    `Strike out the <span class="c4">cancelled units</span>. Only the target units should remain. If they do not, a factor is upside down.`,
    `Multiply the numbers on top, divide by the numbers underneath, and round the <span class="c1">result</span> to the correct number of significant figures only at the end.`
  ] },
  example: {
    prompt: `In 2009 Usain Bolt ran 100 m in 9.58 s, still the world record. Find his average speed in metres per second and in kilometres per hour.`,
    lines: [
      { math: `<span class="m"><i>v</i> = <span class="fr"><span>100 m</span><span>9.58 s</span></span> = 10.438 m/s</span>`, note: "Average speed is distance divided by time. Keep an extra digit until the end." },
      { math: `<span class="m"><span class="c2">10.438 m/s</span> × <span class="c3"><span class="fr"><span>1 km</span><span>1000 m</span></span></span> × <span class="c3"><span class="fr"><span>3600 s</span><span>1 h</span></span></span></span>`, note: "Metres is on top, so 1000 m goes underneath. Seconds is underneath, so 3600 s goes on top." },
      { math: `<span class="m"><span class="fr"><span>10.438 <span class="c4"><s>m</s></span> × 1 km × 3600 <span class="c4"><s>s</s></span></span><span><span class="c4"><s>s</s></span> × 1000 <span class="c4"><s>m</s></span> × 1 h</span></span></span>`, note: "Metres and seconds each appear once on top and once below, so they cancel. km/h is left." },
      { math: `<span class="m"><span class="c1"><i>v</i> = 37.6 km/h</span></span>`, note: "10.438 × 3.6 = 37.578, rounded to three significant figures." },
      { math: `<span class="m">37.6 km/h ÷ 3.6 = 10.4 m/s ✓</span>`, note: "Check: 1 m/s = 3.6 km/h, so dividing takes us back." },
      { math: `<span class="m">10 m/s ≈ 36 km/h</span>`, note: "Sanity check: a fast car in town goes 50 km/h, a top cyclist about 40 km/h, so a world-class sprinter near 37 km/h is believable." }
    ],
    answer: `His average speed was <span class="m">10.4 m/s</span>, which is <span class="m">37.6 km/h</span>.`
  },
  why: `<p>A number with the wrong unit is a wrong number, and the mistakes are expensive. In 1999 NASA lost the Mars Climate Orbiter because one team's software reported thruster impulse in pound-force seconds while the navigation software expected newton-seconds. In 1983 an Air Canada Boeing 767 ran out of fuel in flight because the fuel load had been worked out in pounds where kilograms were needed. Careful unit conversion is the everyday habit that prevents this.</p>
<p>Units are also a free error check. If you carry them through every line, a formula that gives metres when you wanted seconds has told you it is wrong before you look at the numbers. The next topic turns that idea into dimensional analysis, and every later topic in mechanics, from forces in newtons to energy in joules, is built from the metre, the kilogram and the second.</p>`,
  careers: [
    { role: "Pharmacist", use: "Converts a dose ordered in mg per kg of body weight into millilitres of a liquid labelled in mg/mL." },
    { role: "Airline pilot", use: "Converts fuel quantity between litres, kilograms and pounds, because the fuel gauge, the load sheet and the refuelling truck may use different units." },
    { role: "Metrologist", use: "Calibrates balances, gauge blocks and clocks against standards traceable to the SI definitions at a national lab such as NIST." },
    { role: "Spacecraft navigation engineer", use: "Checks that thrust, impulse and trajectory data exchanged between teams and software use one agreed set of SI units." },
    { role: "Civil engineer", use: "Converts loads, lengths and flow rates between US customary units on older drawings and SI units in design codes." },
    { role: "ICU nurse", use: "Converts an infusion ordered in micrograms per kilogram per minute into a pump rate in mL/h." }
  ],
  life: [
    "Reading a speed limit in km/h when driving abroad",
    "Following a recipe written in grams with measuring cups",
    "Comparing fuel economy in miles per gallon with litres per 100 km",
    "Working out a child's medicine dose from a label in mg per 5 mL",
    "Checking whether a 2 TB drive holds 500 GB of photos",
    "Converting a room's size in square feet to square metres"
  ],
  fields: [
    { name: "Chemistry", use: "Converts between grams, moles and litres in every stoichiometry and concentration problem." },
    { name: "Medicine and pharmacology", use: "Dose calculations chain body mass, concentration and time conversions." },
    { name: "Engineering", use: "Design calculations must use one consistent unit system, and international projects mix SI and US customary units." },
    { name: "Astronomy", use: "Moves between metres, astronomical units, light-years and parsecs across more than 20 powers of ten." }
  ],
  prereqWhy: {},
  unlocksWhy: {
    "mech-dimensions": "Dimensional analysis looks past the particular unit to the dimension behind it (length, mass, time) and checks equations the same way cancelling units checks a conversion.",
    "mech-vectors": "A vector quantity is a magnitude with a unit plus a direction, so a displacement such as 5.00 km north builds directly on units."
  },
  mathWhy: {
    "units": `The whole method is the arithmetic of <b>dimensional analysis</b>: multiply by fractions equal to 1 and cancel units in the numerator against units in the denominator, as in <span class="m">(90.0 km/h)(1000 m/1 km)(1 h/3600 s)</span>.`,
    "sci-notation": `Prefixes are powers of ten in disguise. Writing 350 μm as <span class="m">3.50 × 10<sup>−4</sup> m</span> or a light-year as <span class="m">9.46 × 10<sup>15</sup> m</span> needs fluent scientific notation.`,
    "a1-exponents": `Exponent rules convert prefixed and cubed units: <span class="m">(10<sup>2</sup> cm)<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup></span>, and <span class="m">10<sup>3</sup> × 10<sup>−6</sup> = 10<sup>−3</sup></span>, and they read derived units such as <span class="m">kg·m<sup>2</sup>·s<sup>−2</sup></span>.`
  },
  beyond: [
    { field: "Thermodynamics", why: "Adds the kelvin and the mole as base units, and absolute temperature in kelvin, not Celsius, must be used in the gas laws." },
    { field: "Electricity & Magnetism", why: "Every electrical unit is derived from the ampere and the mechanical units, for example 1 V = 1 kg·m²/(A·s³)." },
    { field: "Astrophysics & Cosmology", why: "Converts among metres, AU, light-years, parsecs and megaparsecs across the range from planets to the observable universe." },
    { field: "Mechanical Engineering", why: "Stress, pressure and energy are routinely converted between SI (Pa, J) and US customary (psi, ft·lb, Btu) units." }
  ],
  mistakes: [
    { wrong: `Using a factor upside down: <span class="m">65.0 mi/h × (1 mi / 1609.344 m)</span>, which leaves mi²/(m·h).`, fix: `Put the unit you want to remove on the opposite side: <span class="m">65.0 mi/h × (1609.344 m / 1 mi) × (1 h / 3600 s) = 29.1 m/s</span>. If the units do not cancel, a factor is flipped.` },
    { wrong: `Converting area or volume with the linear factor: <span class="m">1 m<sup>3</sup> = 100 cm<sup>3</sup></span>.`, fix: `Cube the whole factor: <span class="m">1 m<sup>3</sup> × (100 cm / 1 m)<sup>3</sup> = 1 000 000 cm<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup></span>.` },
    { wrong: `Mixing up prefix symbols by case: reading 5 Mm as 5 millimetres, or writing Km for kilometres.`, fix: `Case matters. m is milli (10<sup>−3</sup>), M is mega (10<sup>6</sup>), and kilo is always lowercase k.` },
    { wrong: `Rounding in the middle of a chain, then rounding again at the end.`, fix: `Keep at least one extra digit through the chain and round once, at the final answer.` }
  ],
  practice: [
    { q: `Write 47 000 m and 0.000 002 5 s using scientific notation and a suitable SI prefix.`, a: `<span class="m">47 000 m = 4.7 × 10<sup>4</sup> m = 47 km</span>, and <span class="m">0.000 002 5 s = 2.5 × 10<sup>−6</sup> s = 2.5 μs</span>.` },
    { q: `A US highway speed limit is 65.0 mi/h. Express it in m/s, using 1 mi = 1609.344 m exactly.`, a: `<span class="m">65.0 mi/h × (1609.344 m / 1 mi) × (1 h / 3600 s) = 29.06 m/s ≈ 29.1 m/s</span>.` },
    { q: `Seawater has a density of 1.03 g/cm<sup>3</sup>. Express this in the SI unit kg/m<sup>3</sup>.`, a: `<span class="m">1.03 g/cm<sup>3</sup> × (1 kg / 1000 g) × (100 cm / 1 m)<sup>3</sup> = 1.03 × 10<sup>−3</sup> × 10<sup>6</sup> kg/m<sup>3</sup> = 1.03 × 10<sup>3</sup> kg/m<sup>3</sup></span>. The cube on the length factor is essential.` },
    { q: `A light-year is the distance light travels in one Julian year (365.25 days) at <span class="m"><i>c</i> = 2.998 × 10<sup>8</sup> m/s</span>. Express 1 light-year in metres. Is a light-year a length or a time?`, a: `<span class="m">1 yr × (365.25 d / 1 yr) × (24 h / 1 d) × (3600 s / 1 h) = 3.156 × 10<sup>7</sup> s</span>, and <span class="m">(2.998 × 10<sup>8</sup> m/s)(3.156 × 10<sup>7</sup> s) = 9.46 × 10<sup>15</sup> m</span>. The seconds cancel, so a light-year is a length.` }
  ],
  origin: `The metric system was created in revolutionary France in the 1790s, with the metre first defined as one ten-millionth of the distance from the North Pole to the equator. The Metre Convention of 1875 set up the International Bureau of Weights and Measures, the 11th General Conference on Weights and Measures named the International System of Units (SI) in 1960, and since 2019 all seven base units are defined by fixed constants of nature.`
};
