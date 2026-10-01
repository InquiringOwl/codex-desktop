window.ARITH = window.ARITH || {};

ARITH["mech-orbits"] = {
  title: "Gravitational Potential Energy, Orbits & Escape Speed",
  short: "U = −GMm/r, circular orbits and the speed to leave for good",
  grade: "College PHYS 1xx · University Physics I",
  hours: 7,
  voice: "plain",
  eyebrow: "Mechanics · gravitation",
  hero: `<span class="m"><span class="c3"><i>U</i></span> = −<span class="fr"><span><i>GMm</i></span><span><i>r</i></span></span> &nbsp;&nbsp; <i>v</i><sub>orb</sub> = √<span style="text-decoration:overline"><span class="fr"><span><i>GM</i></span><span><i>r</i></span></span></span> &nbsp;&nbsp; <span class="c4"><i>v</i><sub>esc</sub></span> = √<span style="text-decoration:overline"><span class="fr"><span>2<i>GM</i></span><span><i>R</i></span></span></span></span>`,
  lede: `Far from the ground, gravitational potential energy is <span class="c3"><span class="m">−<i>GMm</i>/<i>r</i></span></span>, a well that is deepest at the <span class="c2">planet</span>. A body's total energy decides its <span class="c1">trajectory</span>: negative means bound in orbit, zero or positive means it <span class="c4">escapes</span>.`,
  plain: `<p>Near the ground we use <span class="m"><i>U</i> = <i>mgh</i></span>, but that assumes <span class="m"><i>g</i></span> is constant, and it is not once you rise by hundreds of kilometres. The exact potential energy for a mass <span class="m"><i>m</i></span> at distance <span class="m"><i>r</i></span> from a planet's centre is <span class="m"><i>U</i> = −<i>GMm</i>/<i>r</i></span>. It is negative because we choose zero to be infinitely far away, and everything closer is lower, down in a "gravity well".</p>
<p>Throw something upward and it trades kinetic energy for potential energy as it climbs out of the well. If its total energy <span class="m"><i>E</i> = <i>K</i> + <i>U</i></span> is negative, it cannot reach infinity: it falls back or stays in orbit. If <span class="m"><i>E</i></span> is zero or positive, it escapes. The launch speed that makes <span class="m"><i>E</i> = 0</span> exactly is the <b>escape speed</b>, 11.2 km/s from Earth's surface.</p>
<p>Fire a cannonball sideways from a high mountain, as Newton imagined. Slow, it falls to the ground. Faster, it lands farther away. At about 7.9 km/s (ignoring air) the ground curves away as fast as the ball falls, and it circles the Earth: an orbit. Faster still, the orbit stretches into an ellipse, and at the escape speed it never returns.</p>`,
  formal: `<p>The <b>gravitational potential energy</b> of masses <span class="m"><i>M</i></span> and <span class="m"><i>m</i></span> a distance <span class="m"><i>r</i></span> apart, with <span class="m"><i>U</i>(∞) = 0</span>, is minus the work gravity does bringing <span class="m"><i>m</i></span> in from infinity:</p>
<div class="display"><span class="c3"><i>U</i>(<i>r</i>)</span> = −∫<sub>∞</sub><sup><i>r</i></sup> <span class="dim">(</span>−<span class="fr"><span><i>GMm</i></span><span><i>r</i>′<sup>2</sup></span></span><span class="dim">)</span> d<i>r</i>′ = −<span class="fr"><span><i>GMm</i></span><span><i>r</i></span></span> &nbsp;&nbsp; Δ<i>U</i> = <i>GMm</i><span class="dim">(</span><span class="fr"><span>1</span><span><i>r</i><sub>1</sub></span></span> − <span class="fr"><span>1</span><span><i>r</i><sub>2</sub></span></span><span class="dim">)</span> ≈ <i>mgh</i> for <i>h</i> ≪ <i>R</i></div>
<p>With <span class="m"><i>E</i> = ½<i>mv</i><sup>2</sup> − <i>GMm</i>/<i>r</i></span> conserved, the orbit is a conic: <span class="m"><i>E</i> &lt; 0</span> bound (circle or ellipse), <span class="m"><i>E</i> = 0</span> parabola, <span class="m"><i>E</i> &gt; 0</span> hyperbola. Setting <span class="m"><i>E</i> = 0</span> at the surface gives the <b>escape speed</b>.</p>
<p>For a <b>circular orbit</b> of radius <span class="m"><i>r</i></span>, gravity supplies the centripetal force, <span class="m"><i>GMm</i>/<i>r</i><sup>2</sup> = <i>mv</i><sup>2</sup>/<i>r</i></span>:</p>
<div class="display"><i>v</i><sub>orb</sub> = √<span style="text-decoration:overline"><i>GM</i>/<i>r</i></span>, &nbsp; <i>T</i> = 2π√<span style="text-decoration:overline"><i>r</i><sup>3</sup>/<i>GM</i></span>, &nbsp; <i>K</i> = <span class="fr"><span><i>GMm</i></span><span>2<i>r</i></span></span>, &nbsp; <i>E</i> = −<span class="fr"><span><i>GMm</i></span><span>2<i>r</i></span></span> = −<i>K</i> = ½<i>U</i><br><span class="c4"><i>v</i><sub>esc</sub></span> = √<span style="text-decoration:overline">2<i>GM</i>/<i>R</i></span> = √2 <i>v</i><sub>orb</sub>(<i>R</i>) &nbsp;<span class="dim">(Earth: 1.12 × 10<sup>4</sup> m/s and 7.91 × 10<sup>3</sup> m/s)</span></div>
<p>All values ignore air resistance and Earth's rotation. For an elliptical orbit the same energy relation holds with <span class="m"><i>r</i></span> replaced by the semi-major axis: <span class="m"><i>E</i> = −<i>GMm</i>/(2<i>a</i>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>M</i>, <i>R</i>`, name: "Planet", desc: "Mass and radius of the central body. Only GM enters the orbital formulas (Earth: GM = 3.98 × 10¹⁴ m³/s²)." },
    { c: "c3", sym: `<i>U</i> = −<i>GMm</i>/<i>r</i>`, name: "Energy well", desc: "Gravitational potential energy, zero at infinity and negative everywhere else, deepest at the surface." },
    { c: "c1", sym: `<i>E</i> = <i>K</i> + <i>U</i>`, name: "Trajectory", desc: "The path set by the total energy and launch direction: a fall, a circle, an ellipse or an escape." },
    { c: "c4", sym: `<i>v</i><sub>esc</sub> = √(2<i>GM</i>/<i>R</i>)`, name: "Escape threshold", desc: "The launch speed at which E = 0. At or above it the body never comes back." }
  ],
  steps: { title: "How to solve an orbit or escape problem", items: [
    `Measure every distance from the planet's centre: <span class="m"><i>r</i> = <i>R</i> + <i>h</i></span>.`,
    `Write the total energy at a point where you know the speed: <span class="m"><i>E</i> = ½<i>mv</i><sup>2</sup> − <i>GMm</i>/<i>r</i></span>.`,
    `For a circular orbit, use <span class="m"><i>v</i> = √<span style="text-decoration:overline"><i>GM</i>/<i>r</i></span></span>, <span class="m"><i>T</i> = 2π<i>r</i>/<i>v</i></span> and <span class="m"><i>E</i> = −<i>GMm</i>/(2<i>r</i>)</span>.`,
    `For a speed elsewhere, conserve energy between the two points and solve for <span class="m"><i>v</i></span>.`,
    `Classify by the sign of <span class="m"><i>E</i></span>: negative is bound, zero or positive escapes. Compare the speed with <span class="m"><i>v</i><sub>esc</sub> = √<span style="text-decoration:overline">2<i>GM</i>/<i>r</i></span></span> at that radius.`,
    `Check: energies of orbits are negative, and higher circular orbits are slower but have more total energy.`
  ] },
  example: {
    prompt: `A 1.00 × 10<sup>3</sup> kg satellite is in a circular orbit 4.00 × 10<sup>2</sup> km above Earth's surface. Find its speed, period and total mechanical energy, and the minimum energy that must be added to send it out of Earth's gravity for good.`,
    lines: [
      { math: `<span class="m"><i>r</i> = 6.37 × 10<sup>6</sup> m + 4.00 × 10<sup>5</sup> m = 6.77 × 10<sup>6</sup> m, &nbsp; <i>GM</i> = 3.98 × 10<sup>14</sup> m³/s²</span>`, note: "Orbit radius from Earth's centre, and GM = (6.67 × 10⁻¹¹)(5.97 × 10²⁴)." },
      { math: `<span class="m"><i>v</i> = √<span style="text-decoration:overline"><i>GM</i>/<i>r</i></span> = √<span style="text-decoration:overline">(3.982 × 10<sup>14</sup>)/(6.77 × 10<sup>6</sup>)</span> = 7.67 × 10<sup>3</sup> m/s</span>`, note: "Gravity supplies the centripetal force." },
      { math: `<span class="m"><i>T</i> = 2π<i>r</i>/<i>v</i> = 2π(6.77 × 10<sup>6</sup> m)/(7669 m/s) = 5.55 × 10<sup>3</sup> s</span>`, note: "About 92.4 minutes per orbit." },
      { math: `<span class="m"><i>E</i> = −<span class="fr"><span><i>GMm</i></span><span>2<i>r</i></span></span> = −<span class="fr"><span>(3.982 × 10<sup>14</sup>)(1.00 × 10<sup>3</sup>)</span><span>2(6.77 × 10<sup>6</sup>)</span></span> = −2.94 × 10<sup>10</sup> J</span>`, note: "Negative: the satellite is bound. K = +2.94 × 10¹⁰ J and U = −5.88 × 10¹⁰ J." },
      { math: `<span class="m">Δ<i>E</i><sub>escape</sub> = 0 − (−2.94 × 10<sup>10</sup> J) = 2.94 × 10<sup>10</sup> J</span>`, note: "Escaping means raising the total energy to zero." },
      { math: `<span class="m"><i>v</i><sub>esc</sub>(<i>r</i>) = √2 <i>v</i> = 1.08 × 10<sup>4</sup> m/s &gt; 7.67 × 10<sup>3</sup> m/s ✓</span>`, note: "Sanity check: a bound orbit is slower than the local escape speed, and the period matches the ISS's roughly 90 minutes." }
    ],
    answer: `The satellite moves at <span class="m c1">7.67 km/s</span> with a period of <span class="m">5.55 × 10<sup>3</sup> s</span> (92.4 min) and total energy <span class="m c3">−2.94 × 10<sup>10</sup> J</span>; at least <span class="m c4">2.94 × 10<sup>10</sup> J</span> must be added for it to escape.`
  },
  why: `<p>Every satellite, space probe and crewed mission is planned with these formulas. The orbital speed sets how fast rockets must go, the period decides where communication and navigation satellites are placed, and the energy relation tells mission designers how much propellant a change of orbit costs. Escape speed explains why the Moon has almost no atmosphere (its 2.4 km/s escape speed is low enough that gas warmed by sunlight leaks away) while Earth keeps its air.</p>
<p>The idea of a potential-energy well with bound and unbound states returns throughout physics: electrons bound in atoms, planets bound to stars, and the definition of a black hole as a body whose escape speed exceeds the speed of light.</p>`,
  careers: [
    { role: "Mission design engineer", use: "Computes the velocity changes and propellant needed to move spacecraft between orbits from E = −GMm/2a." },
    { role: "Satellite operations engineer", use: "Tracks orbital decay from atmospheric drag and schedules reboosts to keep satellites at their planned altitude and period." },
    { role: "Launch vehicle engineer", use: "Designs rockets to reach the roughly 7.8 km/s orbital speed for low Earth orbit plus gravity and drag losses." },
    { role: "Planetary scientist", use: "Compares escape speeds with thermal speeds of gas molecules to explain which planets and moons keep atmospheres." },
    { role: "Space debris analyst", use: "Predicts collision risks by propagating the orbits of thousands of fragments with the same energy and orbit relations." },
    { role: "Astrophysicist", use: "Uses escape speed and orbital energy to estimate the masses of galaxies and to define the event horizons of black holes." }
  ],
  life: [
    "Knowing why the International Space Station circles Earth about every 90 minutes",
    "Understanding why satellite TV dishes point at a fixed spot in the sky",
    "Seeing why the Moon has no air but Earth does",
    "Following news of launches, orbit changes and space probes leaving Earth",
    "Realising that astronauts in orbit are falling around the Earth all the time"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Orbit design, launch trajectories and interplanetary transfers are energy calculations in the −GMm/r well." },
    { name: "Planetary science", use: "Escape speed and gravitational binding energy explain atmospheres, moons and the formation of planets." },
    { name: "Astrophysics", use: "Binding energies of star clusters and galaxies, and black-hole horizons, use gravitational potential energy." },
    { name: "Telecommunications", use: "Geostationary and low-orbit satellite constellations are placed at radii set by the orbital period formula." }
  ],
  prereqWhy: {
    "mech-gravitation": "The potential energy −GMm/r is the integral of the force F = GMm/r², and circular orbits use that force as the centripetal force.",
    "mech-energy-cons": "Escape speed, speeds at different altitudes and orbit classification all come from conserving E = K + U with the gravitational U."
  },
  unlocksWhy: {
    "mech-kepler": "Kepler's laws describe the bound (E < 0) elliptical orbits found here, and the circular-orbit period T = 2π√(r³/GM) is the third law for a circle."
  },
  mathWhy: {
    "a1-radicals": `Orbital speed <span class="m">√<span style="text-decoration:overline"><i>GM</i>/<i>r</i></span></span>, escape speed <span class="m">√<span style="text-decoration:overline">2<i>GM</i>/<i>R</i></span></span> and the period <span class="m">2π√<span style="text-decoration:overline"><i>r</i><sup>3</sup>/<i>GM</i></span></span> are found by solving energy or force equations for <span class="m"><i>v</i></span> and taking square roots, including the ratio <span class="m"><i>v</i><sub>esc</sub>/<i>v</i><sub>orb</sub> = √2</span>.`,
    "calculus-1:Antiderivatives and the definite integral": `Deriving <span class="m"><i>U</i> = −<i>GMm</i>/<i>r</i></span> means integrating the variable force <span class="m"><i>GMm</i>/<i>r</i><sup>2</sup></span> from infinity to <span class="m"><i>r</i></span> (an improper integral). This is a co-requisite: the formula can be used with algebra, and calculus explains where it comes from and why <span class="m"><i>mgh</i></span> is its small-height approximation.`
  },
  beyond: [
    { field: "Aerospace Engineering", why: "Orbital maneuvers, Hohmann transfers and launch windows are planned from orbital energy and the vis-viva relation derived here." },
    { field: "Astrophysics & Cosmology", why: "Gravitational binding energy governs star formation, galaxy clusters and whether the universe keeps expanding." },
    { field: "General Relativity", why: "The Schwarzschild radius 2GM/c² is where the Newtonian escape speed would equal the speed of light, the black-hole horizon." },
    { field: "Classical Mechanics", why: "The Kepler problem is solved with an effective potential that adds an angular-momentum barrier to −GMm/r." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>U</i> = <i>mgh</i></span> for a rise of hundreds or thousands of kilometres.`, fix: `<span class="m"><i>g</i></span> falls with height. Use <span class="m">Δ<i>U</i> = <i>GMm</i>(1/<i>r</i><sub>1</sub> − 1/<i>r</i><sub>2</sub>)</span>; <span class="m"><i>mgh</i></span> is only its small-<span class="m"><i>h</i></span> approximation.` },
    { wrong: `Thinking a negative potential energy is an error.`, fix: `The zero is chosen at infinity. Every bound state has <span class="m"><i>U</i> &lt; 0</span> and, for orbits, <span class="m"><i>E</i> &lt; 0</span>. Only differences in <span class="m"><i>U</i></span> are physical.` },
    { wrong: `Believing escape speed depends on the direction of launch or the mass of the object.`, fix: `<span class="m"><i>v</i><sub>esc</sub> = √<span style="text-decoration:overline">2<i>GM</i>/<i>R</i></span></span> contains neither. Any direction that does not hit the planet works (ignoring air), and <span class="m"><i>m</i></span> cancels.` },
    { wrong: `Assuming a satellite that gains energy moves faster.`, fix: `In a circular orbit <span class="m"><i>K</i> = −<i>E</i></span>. Adding energy raises the orbit and lowers the speed; drag removes energy and makes a satellite speed up as it sinks.` }
  ],
  practice: [
    { q: `Find the escape speed from the Moon's surface (<span class="m"><i>M</i> = 7.35 × 10<sup>22</sup> kg</span>, <span class="m"><i>R</i> = 1.74 × 10<sup>6</sup> m</span>).`, a: `<span class="m"><i>v</i><sub>esc</sub> = √<span style="text-decoration:overline">2(6.67 × 10<sup>−11</sup>)(7.35 × 10<sup>22</sup>)/(1.74 × 10<sup>6</sup>)</span> = 2.37 × 10<sup>3</sup> m/s</span>, about a fifth of Earth's.` },
    { q: `How much does the potential energy of a 1.00 kg mass increase when it is raised from Earth's surface to 4.00 × 10<sup>2</sup> km? How far off is <span class="m"><i>mgh</i></span>?`, a: `<span class="m">Δ<i>U</i> = <i>GMm</i>(1/<i>R</i> − 1/<i>r</i>) = (3.982 × 10<sup>14</sup>)(1/6.37 × 10<sup>6</sup> − 1/6.77 × 10<sup>6</sup>) = 3.69 × 10<sup>6</sup> J</span>. <span class="m"><i>mgh</i> = (1.00)(9.80)(4.00 × 10<sup>5</sup>) = 3.92 × 10<sup>6</sup> J</span>, about 6% too high because <span class="m"><i>g</i></span> weakens with height.` },
    { q: `A probe leaves Earth's surface at 15.0 km/s. Ignoring air, Earth's rotation and other bodies, how fast is it moving when it is very far from Earth?`, a: `<span class="m">½<i>v</i><sup>2</sup> − <i>GM</i>/<i>R</i> = ½<i>v</i><sub>∞</sub><sup>2</sup></span>, so <span class="m"><i>v</i><sub>∞</sub> = √<span style="text-decoration:overline"><i>v</i><sup>2</sup> − <i>v</i><sub>esc</sub><sup>2</sup></span> = √<span style="text-decoration:overline">(15.0 × 10<sup>3</sup>)<sup>2</sup> − (1.118 × 10<sup>4</sup>)<sup>2</sup></span> = 1.00 × 10<sup>4</sup> m/s</span>. <span class="m"><i>E</i> &gt; 0</span>, so it escapes on a hyperbola.` },
    { q: `A 500 kg satellite is moved from a circular orbit of radius 7.00 × 10<sup>6</sup> m to one of radius 7.50 × 10<sup>6</sup> m. How much energy must be added? Does its speed increase or decrease?`, a: `<span class="m">Δ<i>E</i> = ½<i>GMm</i>(1/<i>r</i><sub>1</sub> − 1/<i>r</i><sub>2</sub>) = ½(3.982 × 10<sup>14</sup>)(500)(1/7.00 × 10<sup>6</sup> − 1/7.50 × 10<sup>6</sup>) = 9.48 × 10<sup>8</sup> J</span>. The speed <b>decreases</b>, from <span class="m">√<span style="text-decoration:overline"><i>GM</i>/<i>r</i></span> = 7.54</span> km/s to 7.29 km/s: the added energy and more goes into potential energy.` }
  ],
  origin: `In <i>A Treatise of the System of the World</i> (written in the 1680s, published 1728), Newton pictured a cannon on a mountaintop firing ever faster until its ball circles the Earth without landing, the idea behind every artificial satellite. Sputnik 1 reached orbit on 4 October 1957.`
};
