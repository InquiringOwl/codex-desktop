window.ARITH = window.ARITH || {};

ARITH["mech-gravitation"] = {
  title: "Newton's Law of Universal Gravitation",
  short: "Every mass attracts every other: F = Gm₁m₂/r²",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · gravitation",
  hero: `<span class="m"><span class="c1"><i>F</i></span> = <i>G</i> <span class="fr"><span><span class="c2"><i>m</i><sub>1</sub></span><span class="c3"><i>m</i><sub>2</sub></span></span><span><span class="c4"><i>r</i></span><sup>2</sup></span></span> &nbsp;&nbsp; <i>g</i> = <span class="fr"><span><i>GM</i></span><span><i>R</i><sup>2</sup></span></span></span>`,
  lede: `Any two masses <span class="c2"><i>m</i><sub>1</sub></span> and <span class="c3"><i>m</i><sub>2</sub></span> pull on each other with a <span class="c1">force</span> proportional to both masses and inversely proportional to the square of the <span class="c4">distance</span> between their centres. The same law holds an apple to the Earth and the Moon in orbit.`,
  plain: `<p>Newton's great step was to say that the force pulling an apple down and the force keeping the Moon in orbit are the same force. Every piece of matter attracts every other piece. The pull grows with each mass: double either one and the force doubles. It weakens with distance, and fast: at twice the distance it is a quarter as strong, at ten times the distance a hundredth. That is the <b>inverse-square law</b>.</p>
<p>The constant in front, <span class="m"><i>G</i> = 6.67 × 10<sup>−11</sup> N·m²/kg²</span>, is tiny. Two people standing a metre apart attract each other with less than a millionth of a newton, far too little to notice. Gravity only becomes large when at least one mass is enormous, like a planet or a star.</p>
<p>For a planet the distance is measured from its centre. So at the surface, <span class="m"><i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup></span> gives the familiar 9.8 m/s² for Earth. Go up 400 km to the International Space Station and <span class="m"><i>g</i></span> is still about 89% of that. Astronauts float because they are falling freely around the Earth, not because gravity has switched off.</p>`,
  formal: `<p><b>Newton's law of universal gravitation.</b> Every particle of mass <span class="m"><i>m</i><sub>1</sub></span> attracts every other particle of mass <span class="m"><i>m</i><sub>2</sub></span> with a force along the line joining them:</p>
<div class="display"><span class="c1"><b>F</b><sub>12</sub></span> = −<i>G</i> <span class="fr"><span><span class="c2"><i>m</i><sub>1</sub></span><span class="c3"><i>m</i><sub>2</sub></span></span><span><span class="c4"><i>r</i></span><sup>2</sup></span></span> <b>r̂</b><sub>12</sub>, &nbsp;&nbsp; <i>G</i> = 6.67 × 10<sup>−11</sup> N·m²/kg²</div>
<p>Here <span class="m"><b>F</b><sub>12</sub></span> is the force on body 2 due to body 1 and <span class="m"><b>r̂</b><sub>12</sub></span> is the unit vector from 1 toward 2, so the minus sign makes the force attractive. By the third law <span class="m"><b>F</b><sub>21</sub> = −<b>F</b><sub>12</sub></span>. Forces from several bodies add as vectors (superposition).</p>
<p><b>Shell theorem.</b> A spherically symmetric body attracts an outside mass as if all its mass were at its centre, so <span class="m"><i>r</i></span> is measured centre to centre. The acceleration due to gravity at distance <span class="m"><i>r</i> ≥ <i>R</i></span> from the centre of a planet of mass <span class="m"><i>M</i></span> and radius <span class="m"><i>R</i></span> is</p>
<div class="display"><i>g</i>(<i>r</i>) = <span class="fr"><span><i>GM</i></span><span><i>r</i><sup>2</sup></span></span> = <i>g</i><sub>0</sub>(<i>R</i>/<i>r</i>)<sup>2</sup>, &nbsp; <i>g</i><sub>0</sub> = <span class="fr"><span><i>GM</i></span><span><i>R</i><sup>2</sup></span></span> <span class="dim">(Earth: <i>M</i> = 5.97 × 10<sup>24</sup> kg, <i>R</i> = 6.37 × 10<sup>6</sup> m, <i>g</i><sub>0</sub> = 9.81 m/s²)</span></div>
<p>Measured values of <span class="m"><i>g</i></span> at the surface range from about 9.78 m/s² at the equator to 9.83 m/s² at the poles, because Earth's rotation makes part of the pull supply the centripetal acceleration and because Earth is not a perfect sphere; problems use 9.80 m/s².</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i><sub>1</sub>`, name: "First mass", desc: "Mass of one body in kilograms. For a sphere, treat it as concentrated at the centre." },
    { c: "c3", sym: `<i>m</i><sub>2</sub>`, name: "Second mass", desc: "Mass of the other body. It feels a force equal and opposite to the one on the first." },
    { c: "c1", sym: `<i>F</i>`, name: "Gravitational force", desc: "Attractive force in newtons, along the line of centres. Proportional to each mass." },
    { c: "c4", sym: `<i>r</i>`, name: "Centre-to-centre distance", desc: "Distance between the centres in metres. The force falls as 1/r²: double r, quarter F." }
  ],
  steps: { title: "How to compute a gravitational force or field", items: [
    `Identify the two masses and write them in kilograms, in scientific notation.`,
    `Find the <span class="c4">centre-to-centre distance</span> <span class="m"><i>r</i></span> in metres. Above a planet, <span class="m"><i>r</i> = <i>R</i> + <i>h</i></span>, not the altitude <span class="m"><i>h</i></span>.`,
    `Compute <span class="m"><i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup></span>, handling the powers of ten separately from the coefficients.`,
    `For several bodies, find each force with its direction and add them as vectors.`,
    `For <span class="m"><i>g</i></span> at a distance, use <span class="m"><i>g</i> = <i>GM</i>/<i>r</i><sup>2</sup></span> or the ratio <span class="m"><i>g</i><sub>0</sub>(<i>R</i>/<i>r</i>)<sup>2</sup></span>.`,
    `Check: units of N (or m/s²), and scaling: doubling <span class="m"><i>r</i></span> must quarter the answer.`
  ] },
  example: {
    prompt: `A 75.0 kg astronaut is aboard the International Space Station, 4.00 × 10<sup>2</sup> km above Earth's surface. Find the gravitational force Earth exerts on her there and compare it with the force at the surface.`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>r</i></span> = <i>R</i> + <i>h</i> = 6.37 × 10<sup>6</sup> m + 4.00 × 10<sup>5</sup> m = <span class="c4">6.77 × 10<sup>6</sup> m</span></span>`, note: "Distance from Earth's centre, not the altitude." },
      { math: `<span class="m"><span class="c1"><i>F</i></span> = <span class="fr"><span>(6.67 × 10<sup>−11</sup>)(5.97 × 10<sup>24</sup>)(75.0)</span><span>(6.77 × 10<sup>6</sup>)<sup>2</sup></span></span> N = <span class="c1">652 N</span></span>`, note: "Newton's law with G in N·m²/kg², masses in kg and r in m." },
      { math: `<span class="m"><i>F</i><sub>surface</sub> = <span class="fr"><span><i>GMm</i></span><span><i>R</i><sup>2</sup></span></span> = <span class="fr"><span>(6.67 × 10<sup>−11</sup>)(5.97 × 10<sup>24</sup>)(75.0)</span><span>(6.37 × 10<sup>6</sup>)<sup>2</sup></span></span> N = 736 N</span>`, note: "Same law at r = R." },
      { math: `<span class="m"><span class="fr"><span><i>F</i></span><span><i>F</i><sub>surface</sub></span></span> = <span class="fr"><span><i>R</i><sup>2</sup></span><span><i>r</i><sup>2</sup></span></span> = <span class="fr"><span>(6.37)<sup>2</sup></span><span>(6.77)<sup>2</sup></span></span> = 0.885</span>`, note: "The inverse-square ratio: the masses and G cancel." },
      { math: `<span class="m"><i>g</i> = <i>F</i>/<i>m</i> = 652 N / 75.0 kg = 8.69 m/s²</span>`, note: "The local acceleration due to gravity at the station." },
      { math: `<span class="m">400 km ≪ 6370 km ⇒ small drop ✓</span>`, note: "Sanity check: the station is only 6% farther from the centre, so gravity is only about 12% weaker." }
    ],
    answer: `Earth pulls on her with <span class="m c1">652 N</span> at the station, <span class="m">88.5%</span> of the 736 N at the surface. She is weightless because she and the station fall freely together, not because gravity is absent.`
  },
  why: `<p>Universal gravitation was the first physical law shown to apply both on Earth and in the heavens. It predicts the orbits of planets, moons and satellites, the tides, the masses of the Sun and planets, and the trajectories that took spacecraft to the Moon and beyond. Engineers use it to plan satellite orbits and to correct for the variation of <span class="m"><i>g</i></span> with altitude.</p>
<p>It is also the model for every inverse-square force. Coulomb's law of electric force has exactly the same form, so the ideas here (superposition, the shell theorem, fields) return in electricity and magnetism. Newton's law is the weak-field limit of Einstein's general relativity.</p>`,
  careers: [
    { role: "Orbital mechanics engineer", use: "Computes the gravitational acceleration GM/r² on spacecraft at every point of a trajectory to plan launches, transfers and station-keeping." },
    { role: "Geophysicist", use: "Maps tiny variations in g with gravimeters to find ore bodies, oil-bearing rock and underground cavities." },
    { role: "Astronomer", use: "Finds the masses of stars, planets and black holes from the gravitational pull that keeps their companions in orbit." },
    { role: "Geodesist", use: "Models Earth's gravity field from satellite data to define sea level and heights for surveying and GPS." },
    { role: "Metrologist", use: "Measures G with torsion balances and atom interferometers, one of the least precisely known fundamental constants." },
    { role: "Oceanographer", use: "Predicts tides from the difference in the Moon's and Sun's gravitational pull across Earth's diameter." }
  ],
  life: [
    "Understanding why astronauts float even though gravity at the station is almost as strong as on the ground",
    "Knowing why you weigh less on the Moon and more on Jupiter",
    "Seeing why the Moon, not the much more massive Sun, dominates the tides",
    "Realising that you attract the Earth exactly as hard as it attracts you",
    "Noticing that satellites farther out orbit more slowly"
  ],
  fields: [
    { name: "Astronomy and astrophysics", use: "Orbits, binary stars, galaxy dynamics and dark-matter evidence all rest on the law of gravitation." },
    { name: "Aerospace engineering", use: "Launch, orbit and interplanetary trajectory design use F = GMm/r² for every body involved." },
    { name: "Geophysics", use: "Gravity surveys and satellite gravimetry reveal density differences inside the Earth." },
    { name: "Oceanography", use: "Tidal forces are differences of gravitational attraction across Earth's diameter." }
  ],
  prereqWhy: {
    "mech-newton-3": "The gravitational forces on the two masses are a third-law pair: equal in size and opposite in direction, whatever the masses.",
    "mech-centripetal": "Newton's Moon test compares the Moon's centripetal acceleration v²/r with g scaled by (R/r)², showing that gravity supplies the centripetal force of orbits."
  },
  unlocksWhy: {
    "mech-orbits": "Gravitational potential energy −GMm/r, orbital speed √(GM/r) and escape speed all follow from integrating and applying F = GMm/r²."
  },
  mathWhy: {
    "sci-notation": `Every gravitational calculation multiplies and divides numbers like <span class="m">6.67 × 10<sup>−11</sup></span>, <span class="m">5.97 × 10<sup>24</sup></span> and <span class="m">(6.77 × 10<sup>6</sup>)<sup>2</sup></span>; the coefficients and the powers of ten are handled separately.`,
    "a1-radicals": `Solving <span class="m"><i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup></span> for the distance needs <span class="m"><i>r</i> = √<span style="text-decoration:overline"><i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>F</i></span></span>, and the altitude where <span class="m"><i>g</i></span> halves is <span class="m"><i>R</i>(√2 − 1)</span>.`,
    "a1-rational-exp": `The inverse-square law is a power function <span class="m"><i>F</i> ∝ <i>r</i><sup>−2</sup></span>; ratios such as <span class="m"><i>g</i>/<i>g</i><sub>0</sub> = (<i>R</i>/<i>r</i>)<sup>2</sup></span> and <span class="m"><i>r</i> ∝ <i>g</i><sup>−1/2</sup></span> use the laws of integer and rational exponents.`
  },
  beyond: [
    { field: "Astrophysics & Cosmology", why: "Stellar structure, galaxy rotation curves and the expansion of the universe start from gravitational attraction between masses." },
    { field: "General Relativity", why: "Einstein's theory reduces to Newton's inverse-square law for weak fields and slow speeds, and corrects it near massive bodies." },
    { field: "Electricity & Magnetism", why: "Coulomb's law has the same inverse-square form, so superposition, fields and the shell theorem (Gauss's law) carry over directly." },
    { field: "Aerospace Engineering", why: "Orbit determination and mission design integrate the gravitational forces of Earth, Moon and Sun on a spacecraft." }
  ],
  mistakes: [
    { wrong: `Using the altitude <span class="m"><i>h</i></span> for <span class="m"><i>r</i></span>: "at 400 km, <span class="m"><i>r</i> = 4.00 × 10<sup>5</sup> m</span>".`, fix: `Distances are centre to centre: <span class="m"><i>r</i> = <i>R</i> + <i>h</i> = 6.77 × 10<sup>6</sup> m</span>.` },
    { wrong: `Dividing by <span class="m"><i>r</i></span> instead of <span class="m"><i>r</i><sup>2</sup></span>, or forgetting to square the power of ten.`, fix: `<span class="m">(6.77 × 10<sup>6</sup>)<sup>2</sup> = 4.58 × 10<sup>13</sup></span>. Square the coefficient and double the exponent.` },
    { wrong: `Thinking the larger mass pulls harder: "Earth pulls the apple more than the apple pulls Earth".`, fix: `The two forces are a third-law pair, equal in size. Earth's acceleration is tiny only because its mass is huge.` },
    { wrong: `Saying there is no gravity in orbit.`, fix: `At 400 km, <span class="m"><i>g</i> ≈ 8.7 m/s²</span>. Orbiting astronauts are in free fall, which is why they feel weightless.` }
  ],
  practice: [
    { q: `Two 70.0 kg people stand 1.00 m apart. Treating them as point masses, find the gravitational force between them and compare it with the weight of one of them.`, a: `<span class="m"><i>F</i> = (6.67 × 10<sup>−11</sup>)(70.0)(70.0)/(1.00)<sup>2</sup> = 3.27 × 10<sup>−7</sup> N</span>. Weight <span class="m">(70.0)(9.80) = 686 N</span>, about <span class="m">2 × 10<sup>9</sup></span> times larger.` },
    { q: `Find the gravitational force between Earth and the Moon (<span class="m"><i>M</i><sub>Moon</sub> = 7.35 × 10<sup>22</sup> kg</span>, centre distance 3.84 × 10<sup>8</sup> m). What would it be if the distance doubled?`, a: `<span class="m"><i>F</i> = (6.67 × 10<sup>−11</sup>)(5.97 × 10<sup>24</sup>)(7.35 × 10<sup>22</sup>)/(3.84 × 10<sup>8</sup>)<sup>2</sup> = 1.98 × 10<sup>20</sup> N</span>. Doubling <span class="m"><i>r</i></span> divides it by 4: <span class="m">4.96 × 10<sup>19</sup> N</span>.` },
    { q: `At what altitude above Earth's surface is <span class="m"><i>g</i></span> half its surface value?`, a: `<span class="m">(<i>R</i>/<i>r</i>)<sup>2</sup> = ½</span> gives <span class="m"><i>r</i> = √2 <i>R</i></span>, so <span class="m"><i>h</i> = (√2 − 1)<i>R</i> = 0.414(6.37 × 10<sup>6</sup> m) = 2.64 × 10<sup>6</sup> m</span>, about 2640 km.` },
    { q: `A spacecraft travels from Earth toward the Moon. At what distance from Earth's centre do the two gravitational pulls on it cancel? (Use the data above.)`, a: `<span class="m"><i>GM</i><sub>E</sub>/<i>x</i><sup>2</sup> = <i>GM</i><sub>Moon</sub>/(<i>d</i> − <i>x</i>)<sup>2</sup></span>, so <span class="m">(<i>d</i> − <i>x</i>)/<i>x</i> = √(<i>M</i><sub>Moon</sub>/<i>M</i><sub>E</sub>) = 0.111</span> and <span class="m"><i>x</i> = <i>d</i>/1.111 = 3.46 × 10<sup>8</sup> m</span>, 90% of the way to the Moon. The spacecraft's mass cancels.` }
  ],
  origin: `Newton published the law in the <i>Principia</i> (1687), supporting it with the "Moon test": the Moon, about 60 Earth radii away, falls toward Earth with about 1/3600 of the acceleration of an apple. Henry Cavendish's torsion-balance experiment (1798) measured the tiny attraction between lead spheres to find the density of the Earth; his result is equivalent to a value of <span class="m"><i>G</i></span>, and so gives the mass of the Earth.`
};
