window.ARITH = window.ARITH || {};

ARITH["mech-energy-cons"] = {
  title: "Conservation of Energy",
  short: "K + U stays constant; friction turns it into heat",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · potential energy and conservation of energy",
  hero: `<span class="m"><span class="c1"><i>K</i><sub>A</sub></span> + <span class="c2"><i>U</i><sub>A</sub></span> = <span class="c1"><i>K</i><sub>B</sub></span> + <span class="c2"><i>U</i><sub>B</sub></span> + <span class="c3">Δ<i>E</i><sub>th</sub></span></span>`,
  lede: `Energy is never created or destroyed. When only gravity and springs do work, <span class="c1">kinetic</span> plus <span class="c2">potential</span> energy stays constant. Friction moves some of it into <span class="c3">thermal energy</span>, but the <span class="c4">total</span> is still the same.`,
  plain: `<p>Watch a skateboarder in a half-pipe. At the top of the ramp she is slow and high; at the bottom she is fast and low; then she climbs and slows again. Energy is shifting back and forth between <b>kinetic energy</b> (speed) and <b>potential energy</b> (height). If nothing rubbed or dragged, the total would stay exactly the same, and she would rise back to the height she started from, every time.</p>
<p>That fact is a shortcut. To find her speed at the bottom you do not need the shape of the ramp, the time, or the acceleration. Set the energy at the top equal to the energy at the bottom and solve: <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>gh</i></span></span> for a drop of height <span class="m"><i>h</i></span> from rest, whatever her mass and however the ramp curves.</p>
<p>In real life, wheels and air rub. Each pass she rises a little less high. The "lost" mechanical energy has not disappeared: it has become <b>thermal energy</b>, slightly warmer wheels, bearings and air. Count that too and the total energy is conserved exactly. This is one of the most reliable laws in all of physics.</p>`,
  formal: `<p>The <b>mechanical energy</b> of a system is <span class="m"><i>E</i> = <span class="c1"><i>K</i></span> + <span class="c2"><i>U</i></span></span>. Combining the work–energy theorem with <span class="m"><i>W</i><sub>cons</sub> = −Δ<i>U</i></span> gives</p>
<div class="display"><i>W</i><sub>nc</sub> = Δ<span class="c1"><i>K</i></span> + Δ<span class="c2"><i>U</i></span> = Δ<i>E</i><br><span class="dim">only conservative forces do work (W<sub>nc</sub> = 0):</span>&nbsp; <span class="c1"><i>K</i><sub>A</sub></span> + <span class="c2"><i>U</i><sub>A</sub></span> = <span class="c1"><i>K</i><sub>B</sub></span> + <span class="c2"><i>U</i><sub>B</sub></span> &nbsp;&nbsp; <span class="dim">e.g.</span> ½<i>mv</i><sub>A</sub><sup>2</sup> + <i>mgy</i><sub>A</sub> + ½<i>kx</i><sub>A</sub><sup>2</sup> = ½<i>mv</i><sub>B</sub><sup>2</sup> + <i>mgy</i><sub>B</sub> + ½<i>kx</i><sub>B</sub><sup>2</sup></div>
<p>Kinetic friction on a body sliding a path length <span class="m"><i>d</i></span> converts mechanical energy into internal energy, <span class="m"><span class="c3">Δ<i>E</i><sub>th</sub></span> = <i>f</i><sub>k</sub><i>d</i></span>. For an isolated system, <b>conservation of energy</b> holds in general:</p>
<div class="display">Δ<span class="c1"><i>K</i></span> + Δ<span class="c2"><i>U</i></span> + <span class="c3">Δ<i>E</i><sub>th</sub></span> + Δ<i>E</i><sub>other</sub> = 0 &nbsp;&nbsp;⇔&nbsp;&nbsp; <span class="c4"><i>E</i><sub>total</sub></span> = constant</div>
<p>For a particle moving along a fixed frictionless track under gravity, the speed at height <span class="m"><i>y</i></span> is <span class="m"><i>v</i> = √<span style="text-decoration:overline"><i>v</i><sub>A</sub><sup>2</sup> + 2<i>g</i>(<i>y</i><sub>A</sub> − <i>y</i>)</span></span>, independent of mass and of the track's shape; heights with <span class="m"><i>y</i> &gt; <i>y</i><sub>A</sub> + <i>v</i><sub>A</sub><sup>2</sup>/(2<i>g</i>)</span> are unreachable.</p>`,
  legend: [
    { c: "c1", sym: `<i>K</i> = ½<i>mv</i><sup>2</sup>`, name: "Kinetic energy", desc: "Energy of motion. It is largest where the body is lowest (or the spring most relaxed)." },
    { c: "c2", sym: `<i>U</i>`, name: "Potential energy", desc: "Stored energy of position: <span class=\"m\"><i>mgy</i></span> for gravity, <span class=\"m\">½<i>kx</i><sup>2</sup></span> for a spring. It trades back and forth with <i>K</i>." },
    { c: "c3", sym: `Δ<i>E</i><sub>th</sub>`, name: "Thermal energy", desc: "Energy moved into the random motion of atoms by friction or drag, <span class=\"m\"><i>f</i><sub>k</sub><i>d</i></span> for sliding. It only grows." },
    { c: "c4", sym: `<i>E</i><sub>total</sub>`, name: "Total energy", desc: "K + U + thermal energy of the isolated system. It never changes." }
  ],
  steps: { title: "How to solve a problem with energy conservation", items: [
    `Choose the system (body + Earth, + spring) and two states A and B: where you know everything, and where you want the unknown.`,
    `Choose the reference level <span class="m"><i>y</i> = 0</span> and the spring's relaxed length for <span class="m"><i>U</i> = 0</span>.`,
    `Write <span class="m c1"><i>K</i></span> and <span class="m c2"><i>U</i></span> at each state. Decide if any nonconservative force does work; if friction acts, find <span class="m c3"><i>f</i><sub>k</sub><i>d</i></span>.`,
    `Set <span class="m"><i>K</i><sub>A</sub> + <i>U</i><sub>A</sub> = <i>K</i><sub>B</sub> + <i>U</i><sub>B</sub> + Δ<i>E</i><sub>th</sub></span> and solve. Combine with Newton's second law (for example at the top of a loop) when a force condition is also given.`,
    `Check: the speed should not depend on mass when only gravity acts, and the body cannot rise above its starting total energy.`
  ] },
  example: {
    prompt: `A 60.0 kg skateboarder starts from rest at the top of a ramp 4.00 m above the bottom of a half-pipe. (a) Ignoring friction, how fast is she moving at the bottom, and at the top of a 1.50 m hump further along? (b) Her measured speed at the bottom is actually 8.00 m/s. How much energy became thermal energy?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>U</i><sub>A</sub></span> = <i>mgy</i><sub>A</sub> = (60.0 kg)(9.80 m/s²)(4.00 m) = <span class="c2">2.35 × 10<sup>3</sup> J</span>, &nbsp; <span class="c1"><i>K</i><sub>A</sub></span> = 0</span>`, note: "Take y = 0 at the bottom. All the energy starts as potential energy." },
      { math: `<span class="m"><i>mgy</i><sub>A</sub> = ½<i>mv</i><sub>B</sub><sup>2</sup> &nbsp;⇒&nbsp; <i>v</i><sub>B</sub> = √<span style="text-decoration:overline">2<i>gy</i><sub>A</sub></span> = √<span style="text-decoration:overline">2(9.80 m/s²)(4.00 m)</span> = 8.85 m/s</span>`, note: "(a) At the bottom U = 0, so all 2352 J is kinetic. The mass cancels." },
      { math: `<span class="m"><i>v</i><sub>C</sub> = √<span style="text-decoration:overline">2<i>g</i>(<i>y</i><sub>A</sub> − <i>y</i><sub>C</sub>)</span> = √<span style="text-decoration:overline">2(9.80 m/s²)(2.50 m)</span> = 7.00 m/s</span>`, note: "(a) At the hump she has dropped only 2.50 m net." },
      { math: `<span class="m"><span class="c1"><i>K</i><sub>B</sub></span> = ½(60.0 kg)(8.00 m/s)<sup>2</sup> = <span class="c1">1.92 × 10<sup>3</sup> J</span></span>`, note: "(b) Her actual kinetic energy at the bottom." },
      { math: `<span class="m"><span class="c3">Δ<i>E</i><sub>th</sub></span> = <i>U</i><sub>A</sub> − <i>K</i><sub>B</sub> = 2352 J − 1920 J = <span class="c3">432 J</span></span>`, note: "(b) Energy conservation with friction: the missing mechanical energy went into heat." },
      { math: `<span class="m"><span class="fr"><span>432 J</span><span>2352 J</span></span> = 18.4 %</span>`, note: "Sanity check: a modest fraction lost, and the measured speed is below the frictionless 8.85 m/s, as it must be." }
    ],
    answer: `(a) <span class="m">8.85 m/s</span> at the bottom and <span class="m">7.00 m/s</span> on the hump. (b) <span class="m c3">432 J</span> of mechanical energy became thermal energy.`
  },
  why: `<p>Conservation of energy is the most useful single principle in mechanics. It answers "how fast" and "how high" questions in one line, for tracks and paths of any shape, where following the forces would need calculus at every point. Roller coasters, pendulums, ski jumps, springs, dams and orbits are all designed this way.</p>
<p>It is also one of the deepest laws of physics. Every energy transformation, from a power plant to a living cell, obeys it, and the gap between mechanical energy in and useful energy out is exactly the energy lost to heat. Noether's theorem later showed it is a consequence of the laws of physics being the same at all times.</p>`,
  careers: [
    { role: "Roller-coaster engineer", use: "Sets hill heights and loop radii from K + U with friction losses, so trains clear every element at safe speeds." },
    { role: "Hydroelectric engineer", use: "Converts the potential energy of water falling through a height into the kinetic energy driving turbines, and accounts for losses." },
    { role: "Automotive engineer", use: "Designs regenerative braking to capture kinetic energy in a battery instead of turning it into brake heat." },
    { role: "Ski-jump and sports-venue designer", use: "Uses v = √(2gh) with friction and drag corrections to set take-off speeds." },
    { role: "Mechanical engineer", use: "Designs spring-driven mechanisms and shock absorbers by balancing spring energy, kinetic energy and dissipated heat." },
    { role: "Seismologist", use: "Estimates the energy released by an earthquake from the elastic strain energy stored in rock and the energy carried by waves." }
  ],
  life: [
    "Pumping on a swing, then coasting as it rises and falls",
    "Coasting a bike down one hill and partway up the next",
    "Seeing brakes get hot after a long downhill drive",
    "Watching a bouncing ball rise a little less each bounce",
    "Riding a roller coaster whose first hill is the tallest"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Energy balances with losses size every machine, brake and energy-storage device." },
    { name: "Civil engineering", use: "Dams, pumped storage and energy-absorbing barriers are designed from energy conservation." },
    { name: "Chemistry and biology", use: "Energy conservation, including heat, underlies thermochemistry and metabolism." },
    { name: "Sports science", use: "Jumps, vaults, dives and cycling are analysed as exchanges between kinetic and potential energy." }
  ],
  prereqWhy: {
    "mech-potential": "Conservation of mechanical energy is the work–energy theorem with each conservative force's work replaced by −ΔU, so the potential energies mgy and ½kx² are needed."
  },
  unlocksWhy: {
    "mech-energy-diagrams": "A potential-energy diagram is energy conservation drawn as a graph: the total-energy line against U(x) shows where K = E − U is positive and where the turning points lie.",
    "mech-rolling": "Rolling problems use K + U conservation with kinetic energy split into translation ½mv² and rotation ½Iω².",
    "mech-orbits": "Orbital speeds, escape speed and bound versus unbound orbits come from conserving K − GMm/r."
  },
  mathWhy: {
    "a1-radicals": `Solving <span class="m">½<i>mv</i><sup>2</sup> = <i>mg</i>Δ<i>y</i></span> gives <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>g</i>Δ<i>y</i></span></span>, and a spring launch gives <span class="m"><i>v</i> = <i>x</i>√<span style="text-decoration:overline"><i>k</i>/<i>m</i></span></span>; simplifying and evaluating square roots is used in almost every problem.`,
    "a1-sys-sub": `Loop and circular-track problems give two equations, Newton's law at the top (<span class="m"><i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i></span>) and energy conservation; substituting <span class="m"><i>v</i><sup>2</sup> = <i>gR</i></span> from the first into the second gives the minimum height <span class="m"><i>h</i> = 2.5<i>R</i></span>.`
  },
  beyond: [
    { field: "Thermodynamics", why: "The first law, ΔE_int = Q − W, is energy conservation with heat included, and friction losses are its simplest example." },
    { field: "Classical Mechanics", why: "The Hamiltonian is the conserved total energy, and Noether's theorem ties its conservation to time symmetry." },
    { field: "Astrophysics & Cosmology", why: "Escape speeds, orbital energies and the virial theorem for star clusters are energy-conservation arguments." },
    { field: "Mechanical Engineering", why: "Energy balances with efficiencies are the first design check for engines, brakes, pumps and energy storage." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>gh</i></span></span> when friction does work.`, fix: `With friction, include <span class="m">Δ<i>E</i><sub>th</sub> = <i>f</i><sub>k</sub><i>d</i></span>: <span class="m"><i>mgh</i> = ½<i>mv</i><sup>2</sup> + <i>f</i><sub>k</sub><i>d</i></span>, which gives a lower speed.` },
    { wrong: `Measuring <span class="m"><i>y</i></span> from different reference levels at A and B.`, fix: `Pick one level for <span class="m"><i>y</i> = 0</span> and use it for both states. Any level works if it is used consistently.` },
    { wrong: `Adding energies as vectors, or giving kinetic energy a direction.`, fix: `Energies are scalars. Only the speed enters <span class="m"><i>K</i></span>, so the direction of motion at A or B does not matter.` },
    { wrong: `Saying friction destroys energy.`, fix: `Friction converts mechanical energy into thermal energy. Mechanical energy decreases; total energy is conserved.` }
  ],
  practice: [
    { q: `A ball is dropped from rest 20.0 m above the ground. Ignoring air resistance, how fast is it moving just before it lands? Would a ball of twice the mass land faster?`, a: `<span class="m"><i>mgh</i> = ½<i>mv</i><sup>2</sup></span>, so <span class="m"><i>v</i> = √(2(9.80)(20.0)) = 19.8 m/s</span>. The mass cancels, so a heavier ball lands at the same 19.8 m/s.` },
    { q: `A spring launcher (<span class="m"><i>k</i> = 800 N/m</span>) is compressed 0.0500 m and fires a 0.0200 kg ball. Find its launch speed if fired horizontally, and how high it rises above its compressed starting position if fired straight up (no air resistance).`, a: `<span class="m">½<i>kx</i><sup>2</sup> = ½(800)(0.0500)<sup>2</sup> = 1.00 J</span>. Horizontal: <span class="m"><i>v</i> = √(2(1.00)/0.0200) = 10.0 m/s</span>. Vertical: <span class="m"><i>h</i> = 1.00/((0.0200)(9.80)) = 5.10 m</span>.` },
    { q: `A 1.50 kg block slides from rest down a frictionless curved ramp 1.80 m high, then across a level floor with <span class="m"><i>μ</i><sub>k</sub> = 0.250</span>. Find its speed at the bottom of the ramp and how far it slides on the floor.`, a: `<span class="m"><i>v</i> = √(2(9.80)(1.80)) = 5.94 m/s</span>. On the floor all the energy becomes thermal: <span class="m"><i>mgh</i> = <i>μ</i><sub>k</sub><i>mgd</i></span>, so <span class="m"><i>d</i> = <i>h</i>/<i>μ</i><sub>k</sub> = 1.80/0.250 = 7.20 m</span>, independent of mass.` },
    { q: `A roller-coaster car (treat as a particle, no friction) starts from rest and must go around a vertical loop of radius 10.0 m without losing contact. What is the minimum starting height above the bottom of the loop, and how fast is it moving at the bottom?`, a: `At the top the normal force can be 0, so <span class="m"><i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>R</i></span>, <span class="m"><i>v</i><sub>top</sub><sup>2</sup> = <i>gR</i></span>. Energy: <span class="m"><i>mgh</i> = <i>mg</i>(2<i>R</i>) + ½<i>m</i>(<i>gR</i>)</span>, so <span class="m"><i>h</i> = 2.5<i>R</i> = 25.0 m</span>. At the bottom <span class="m"><i>v</i> = √(2(9.80)(25.0)) = 22.1 m/s</span>.` }
  ],
  origin: `Julius Robert Mayer (1842) and James Prescott Joule (1843–1850, measuring the mechanical equivalent of heat) showed that mechanical work and heat are interchangeable. Hermann von Helmholtz stated the general principle of conservation of energy in <i>Über die Erhaltung der Kraft</i> (1847).`
};
