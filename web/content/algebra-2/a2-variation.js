window.ARITH = window.ARITH || {};

ARITH["a2-variation"] = {
  title: "Direct, Inverse & Joint Variation",
  short: "y = kx, y = k/x, y = kxz: find k once, then predict",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Rational functions · variation and proportion",
  hero: `<span class="m"><span class="c3"><i>y</i></span> = <span class="fr"><span><span class="c1"><i>k</i></span></span><span><span class="c2"><i>x</i></span></span></span>: &nbsp;<span class="c2"><i>x</i> × 2</span> &nbsp;⇒&nbsp; <span class="c3"><i>y</i> × <span class="fr"><span>1</span><span>2</span></span></span></span>`,
  lede: `Many laws of science say one quantity is a fixed multiple of a product or quotient of others. The fixed number is the <span class="c1">constant of variation <i>k</i></span>. One pair of measured values gives <span class="c1"><i>k</i></span>, and then the equation predicts every other value.`,
  plain: `<p>If you buy apples at a fixed price per kilogram, the cost doubles when the weight doubles. The cost <b>varies directly</b> with the weight: <span class="m"><span class="c3"><i>y</i></span> = <span class="c1"><i>k</i></span><span class="c2"><i>x</i></span></span>, and <span class="c1"><i>k</i></span> is the price per kilogram.</p>
<p>If you drive a fixed distance, the time halves when the speed doubles. The time <b>varies inversely</b> with the speed: <span class="m"><span class="c3"><i>y</i></span> = <span class="c1"><i>k</i></span>/<span class="c2"><i>x</i></span></span>, and <span class="c1"><i>k</i></span> is the distance. Here the product <span class="m"><span class="c2"><i>x</i></span><span class="c3"><i>y</i></span></span> stays the same.</p>
<p>Some laws use a power. The light from a lamp spreads over a sphere whose area grows with the square of the distance, so the brightness varies inversely with the square of the distance: twice as far gives a quarter of the light. Other laws use several inputs at once. The area of a rectangle varies jointly with its length and width.</p>
<p>The method is always the same. Write the equation with an unknown <span class="c1"><i>k</i></span>, put in one known set of values to find <span class="c1"><i>k</i></span>, and then use the equation with that <span class="c1"><i>k</i></span>.</p>`,
  formal: `<p>Let <span class="c1"><i>k</i> ≠ 0</span> be a constant, the <b>constant of variation</b> (or constant of proportionality).</p>
<div class="display"><span class="c3"><i>y</i></span> = <span class="c1"><i>k</i></span><span class="c2"><i>x</i></span><sup><i>n</i></sup> &nbsp;&nbsp; <span class="c3"><i>y</i></span> varies directly as the <i>n</i>th power of <span class="c2"><i>x</i></span><br><span class="c3"><i>y</i></span> = <span class="fr"><span><span class="c1"><i>k</i></span></span><span><span class="c2"><i>x</i></span><sup><i>n</i></sup></span></span> &nbsp;&nbsp; <span class="c3"><i>y</i></span> varies inversely as the <i>n</i>th power of <span class="c2"><i>x</i></span><br><span class="c3"><i>y</i></span> = <span class="c1"><i>k</i></span><span class="c2"><i>x</i></span><i>z</i> &nbsp;&nbsp; <span class="c3"><i>y</i></span> varies jointly as <span class="c2"><i>x</i></span> and <i>z</i></div>
<p>With <span class="m"><i>n</i> = 1</span> these are <b>direct variation</b> <span class="m"><i>y</i> = <i>kx</i></span>, a line through the origin with slope <span class="c1"><i>k</i></span>, and <b>inverse variation</b> <span class="m"><i>y</i> = <i>k</i>/<i>x</i></span>, a transformed reciprocal function with <span class="m"><i>xy</i> = <i>k</i></span>. <b>Combined variation</b> mixes the types, as in <span class="m"><i>y</i> = <i>kx</i>/<i>z</i><sup>2</sup></span>. Multiplying <span class="c2"><i>x</i></span> by a factor <span class="m"><i>c</i></span> multiplies <span class="m"><i>kx</i><sup><i>n</i></sup></span> by <span class="m"><i>c</i><sup><i>n</i></sup></span> and <span class="m"><i>k</i>/<i>x</i><sup><i>n</i></sup></span> by <span class="m">1/<i>c</i><sup><i>n</i></sup></span>, whatever <span class="c1"><i>k</i></span> is. So doubling <span class="c2"><i>x</i></span> multiplies <span class="c3"><i>y</i></span> by 2, <span class="fr"><span>1</span><span>2</span></span>, 4 or <span class="fr"><span>1</span><span>4</span></span> for <span class="m"><i>kx</i>, <i>k</i>/<i>x</i>, <i>kx</i><sup>2</sup>, <i>k</i>/<i>x</i><sup>2</sup></span>.</p>
<p>Standard examples: <b>Hooke's law</b> <span class="m"><i>F</i> = <i>kd</i></span> (spring force and stretch), <b>Boyle's law</b> <span class="m"><i>PV</i> = <i>k</i></span> (gas at constant temperature), <b>Newton's law of gravitation</b> <span class="m"><i>F</i> = <i>G</i><i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>d</i><sup>2</sup></span> (joint and inverse-square), and the inverse-square law of <b>illumination</b> <span class="m"><i>I</i> = <i>k</i>/<i>d</i><sup>2</sup></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>k</i>`, name: "Constant of variation", desc: "The fixed number in the law. Found once from one set of known values." },
    { c: "c2", sym: `<i>x</i>`, name: "Input quantity", desc: "The quantity that changes: weight, distance, volume, speed." },
    { c: "c3", sym: `<i>y</i>`, name: "Output quantity", desc: "The quantity that varies with x: directly (y = kx), inversely (y = k/x), or as a power." }
  ],
  steps: {
    title: "How to solve a variation problem",
    items: [
      `Translate the words into an equation with an unknown <span class="c1"><i>k</i></span>: "directly" multiplies, "inversely" divides, "jointly" multiplies several quantities, "the square of" adds a power.`,
      `Substitute the given set of values and solve for <span class="c1"><i>k</i></span>.`,
      `Rewrite the equation with the value of <span class="c1"><i>k</i></span>, with units if the problem has them.`,
      `Substitute the new input values and compute the output.`,
      `Check with the scaling rule: if <span class="c2"><i>x</i></span> was multiplied by <span class="m"><i>c</i></span>, the output should change by <span class="m"><i>c</i><sup><i>n</i></sup></span> or <span class="m">1/<i>c</i><sup><i>n</i></sup></span>.`
    ]
  },
  example: {
    prompt: `The illumination <span class="m"><span class="c3"><i>I</i></span></span> from a lamp varies inversely as the square of the distance <span class="m"><span class="c2"><i>d</i></span></span> from the lamp. At 2 m the illumination is 72 lux. Find the illumination at 3 m and at 6 m.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>I</i></span> = <span class="fr"><span><span class="c1"><i>k</i></span></span><span><span class="c2"><i>d</i></span><sup>2</sup></span></span></span>`, note: "Inversely as the square: divide k by d²." },
      { math: `<span class="m">72 = <span class="fr"><span><span class="c1"><i>k</i></span></span><span>2<sup>2</sup></span></span> &nbsp;⇒&nbsp; <span class="c1"><i>k</i></span> = 72 · 4 = <span class="c1">288</span></span>`, note: "Substitute the known pair d = 2, I = 72 and solve for k (units lux·m²)." },
      { math: `<span class="m"><span class="c3"><i>I</i></span> = <span class="fr"><span><span class="c1">288</span></span><span><span class="c2"><i>d</i></span><sup>2</sup></span></span></span>`, note: "The law for this lamp." },
      { math: `<span class="m"><span class="c3"><i>I</i>(3)</span> = <span class="fr"><span>288</span><span>9</span></span> = <span class="c3">32</span></span>`, note: "At 3 m: 32 lux." },
      { math: `<span class="m"><span class="c3"><i>I</i>(6)</span> = <span class="fr"><span>288</span><span>36</span></span> = <span class="c3">8</span></span>`, note: "At 6 m: 8 lux." },
      { math: `<span class="m">32 × <span class="fr"><span>1</span><span>2<sup>2</sup></span></span> = 8</span>`, note: "Check: going from 3 m to 6 m doubles d, so I is multiplied by 1/4." }
    ],
    answer: `<span class="m"><span class="c1"><i>k</i> = 288</span></span>; the illumination is <span class="m c3">32 lux</span> at 3 m and <span class="m c3">8 lux</span> at 6 m.`
  },
  why: `<p>Variation is how science states its simplest laws. Spring stretch, gas pressure, gravitational pull, light intensity, sound loudness, electrical resistance of a wire: each is a constant times a product of powers. Once you recognise the type, one measurement fixes the constant and the law predicts the rest.</p>
<p>The scaling rule is just as useful without any constant. Engineers and scientists ask "what happens if we double this?" all the time: double the distance from a speaker and the sound intensity drops to a quarter; double the radius of a pipe and its cross-section area quadruples.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Uses Hooke's law F = kd to choose springs, finding k from one load test." },
    { role: "Lighting designer", use: "Applies the inverse-square law I = k/d² to place fixtures so a stage or office gets the target illumination." },
    { role: "Respiratory therapist", use: "Relies on Boyle's law PV = k to understand how lung volume changes drive air pressure and flow." },
    { role: "Scuba instructor", use: "Teaches that air volume in the lungs halves when the water pressure doubles, so divers must never hold their breath while ascending." },
    { role: "Audio engineer", use: "Uses the inverse-square drop in sound intensity with distance when placing speakers and microphones." },
    { role: "Satellite engineer", use: "Computes gravitational force with F = Gm₁m₂/d², a joint and inverse-square variation, when planning orbits." }
  ],
  life: [
    "The cost of fuel varies directly with the amount you buy at a fixed price",
    "The time for a fixed trip varies inversely with your average speed",
    "Moving twice as far from a reading lamp gives a quarter of the light",
    "Sharing a pizza among more people gives each person proportionally less"
  ],
  fields: [
    { name: "Physics", use: "Hooke's law, Newton's law of gravitation, Coulomb's law and the inverse-square law of light are variation equations." },
    { name: "Chemistry", use: "Boyle's, Charles's and the combined gas laws are inverse, direct and combined variation." },
    { name: "Engineering", use: "Scaling rules predict how strength, weight and stress change when a design is made larger." },
    { name: "Economics", use: "Constant-price cost models and fixed-budget trade-offs are direct and inverse variation." }
  ],
  prereqWhy: {
    "a2-rational-func": "Inverse variation y = k/x and the inverse-square law y = k/x² are reciprocal functions, with a vertical asymptote at x = 0.",
    "a1-literal": "Finding k means solving a formula such as I = k/d² for one letter, the same skill as solving literal equations."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Physics", why: "Gravitation, electrostatics, radiation and gas laws are all stated as direct, inverse or joint variation." },
    { field: "Chemistry", why: "The ideal gas law PV = nRT combines direct and inverse variation among four quantities." },
    { field: "Calculus I", why: "Power functions kxⁿ and their rates of change; relative change formulas generalise the doubling rule." }
  ],
  mistakes: [
    { wrong: `Treating inverse variation as subtraction: "y varies inversely as x" written as <span class="m"><i>y</i> = <i>k</i> − <i>x</i></span>.`, fix: `Inversely means divided by: <span class="m"><i>y</i> = <i>k</i>/<i>x</i></span>, so the product <span class="m"><i>xy</i> = <i>k</i></span> is constant.` },
    { wrong: `Forgetting the power: for "inversely as the square of <i>d</i>" writing <span class="m"><i>I</i> = <i>k</i>/<i>d</i></span>, which gives <span class="m"><i>k</i> = 144</span> and <span class="m"><i>I</i>(6) = 24</span> lux.`, fix: `Use <span class="m"><i>I</i> = <i>k</i>/<i>d</i><sup>2</sup></span>: <span class="m"><i>k</i> = 288</span> and <span class="m"><i>I</i>(6) = 8</span> lux.` },
    { wrong: `Using the new values to find <i>k</i>, or never finding <i>k</i> and guessing the answer by proportion.`, fix: `Find <span class="m"><i>k</i></span> from the given complete set of values first. Only then substitute the new inputs.` }
  ],
  practice: [
    { q: `<span class="m"><i>y</i></span> varies directly as <span class="m"><i>x</i></span>, and <span class="m"><i>y</i> = 12</span> when <span class="m"><i>x</i> = 4</span>. Find <span class="m"><i>y</i></span> when <span class="m"><i>x</i> = 10</span>.`, a: `<span class="m">12 = <i>k</i> · 4</span>, so <span class="m"><i>k</i> = 3</span> and <span class="m"><i>y</i> = 3 · 10 = 30</span>.` },
    { q: `At constant temperature a gas occupies 6 L at a pressure of 2 atm. By Boyle's law the volume varies inversely as the pressure. Find the volume at 3 atm.`, a: `<span class="m"><i>V</i> = <i>k</i>/<i>P</i></span>: <span class="m"><i>k</i> = 6 · 2 = 12</span>, so <span class="m"><i>V</i> = 12/3 = 4</span> L.` },
    { q: `<span class="m"><i>z</i></span> varies jointly as <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span>, and <span class="m"><i>z</i> = 36</span> when <span class="m"><i>x</i> = 3</span> and <span class="m"><i>y</i> = 4</span>. Find <span class="m"><i>z</i></span> when <span class="m"><i>x</i> = 5</span> and <span class="m"><i>y</i> = 2</span>.`, a: `<span class="m"><i>z</i> = <i>kxy</i></span>: <span class="m">36 = <i>k</i> · 12</span>, <span class="m"><i>k</i> = 3</span>, so <span class="m"><i>z</i> = 3 · 5 · 2 = 30</span>.` },
    { q: `The gravitational force between two bodies varies jointly as their masses and inversely as the square of the distance between them. If one mass is tripled and the distance is doubled, by what factor does the force change?`, a: `<span class="m"><i>F</i> = <i>km</i><sub>1</sub><i>m</i><sub>2</sub>/<i>d</i><sup>2</sup></span>. The new force is <span class="m"><i>k</i>(3<i>m</i><sub>1</sub>)<i>m</i><sub>2</sub>/(2<i>d</i>)<sup>2</sup> = <span class="fr"><span>3</span><span>4</span></span> · <i>F</i></span>: it is multiplied by <span class="m"><span class="fr"><span>3</span><span>4</span></span></span>.` }
  ],
  origin: `<p>Robert Boyle published the pressure-volume relation in 1662 from experiments with a J-shaped tube of mercury; Richard Towneley and Henry Power had found it too, and Edme Mariotte found it independently in the 1670s. Robert Hooke hid his spring law in an anagram in 1676 and revealed it in 1678: "ut tensio, sic vis" (as the extension, so the force). Newton's inverse-square law of gravitation appeared in the <i>Principia</i> in 1687. Variation language itself, "varies directly", "varies inversely", goes back to the theory of ratio and proportion in Euclid's <i>Elements</i>, Book V.</p>`
};
