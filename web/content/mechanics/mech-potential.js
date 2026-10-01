window.ARITH = window.ARITH || {};

ARITH["mech-potential"] = {
  title: "Potential Energy & Conservative Forces",
  short: "Stored energy of position: mgh and ½kx²",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · potential energy and conservation of energy",
  hero: `<span class="m">Δ<i>U</i> = −<span class="c1"><i>W</i><sub>cons</sub></span> &nbsp;&nbsp; <span class="c2"><i>U</i><sub>g</sub> = <i>mgy</i></span> &nbsp;&nbsp; <span class="c3"><i>U</i><sub>s</sub> = ½<i>kx</i><sup>2</sup></span></span>`,
  lede: `A <b>conservative force</b>, like gravity or an ideal spring, does work that depends only on where a body starts and ends, never on the <span class="c4">path</span>. That lets us store its work as a <b>potential energy</b> of position: <span class="c2">gravitational</span> <span class="m"><i>mgy</i></span> and <span class="c3">elastic</span> <span class="m">½<i>kx</i><sup>2</sup></span>.`,
  plain: `<p>Lift a book onto a shelf. You do work on it, and that energy does not vanish: let the book fall and gravity gives it all back as speed. While the book sits on the shelf, the energy is stored in its position. That stored energy is <b>potential energy</b>. Near Earth's surface it is <span class="m"><i>mgy</i></span>: mass times <span class="m"><i>g</i></span> times height.</p>
<p>Gravity has a special property. Carry the book to the shelf by any route you like, straight up or around the room, and gravity does the same work on it, because only the change in height matters. Forces with this property are called <b>conservative</b>. An ideal spring is another one: its stored energy is <span class="m">½<i>kx</i><sup>2</sup></span>, where <span class="m"><i>x</i></span> is how far it is stretched or squeezed from its relaxed length.</p>
<p>Friction is different. Drag a box across the floor by a long winding route and friction does more negative work than on the straight route. That energy goes into heat and cannot be stored and handed back, so there is no "friction potential energy". Only the change in potential energy has physical meaning. You can choose where <span class="m"><i>U</i> = 0</span>, such as the floor, the table top or the ground outside, and every answer about changes stays the same.</p>`,
  formal: `<p>A force is <b>conservative</b> if the work it does on a particle moving between two points is the same for every path, equivalently if its work around any closed path is zero, <span class="m">∮ <b>F</b> · d<b>r</b> = 0</span>. For such a force the <b>potential energy difference</b> is defined as minus its work:</p>
<div class="display">Δ<i>U</i><sub>AB</sub> = <i>U</i>(<b>r</b><sub>B</sub>) − <i>U</i>(<b>r</b><sub>A</sub>) = −<span class="c1"><i>W</i><sub>AB</sub></span> = −∫<sub>A</sub><sup>B</sup> <b>F</b><sub>cons</sub> · d<b>r</b><br><span class="dim">one dimension:</span>&nbsp; <i>F</i><sub>x</sub> = −<span class="fr"><span>d<i>U</i></span><span>d<i>x</i></span></span></div>
<p>Two standard results (choosing <span class="m"><i>U</i> = 0</span> at <span class="m"><i>y</i> = 0</span> and at the spring's relaxed length):</p>
<div class="display"><span class="dim">gravity near Earth,</span> <b>F</b> = −<i>mg</i>ĵ: &nbsp; <span class="c2"><i>U</i><sub>g</sub>(<i>y</i>) = <i>mgy</i></span> &nbsp;&nbsp; <span class="dim">ideal spring,</span> <i>F</i><sub>x</sub> = −<i>kx</i>: &nbsp; <span class="c3"><i>U</i><sub>s</sub>(<i>x</i>) = ½<i>kx</i><sup>2</sup></span></div>
<p>The zero of potential energy is arbitrary; only differences are physical. Forces whose work depends on the path, such as kinetic friction and air drag, are <b>nonconservative</b> and have no potential energy. Potential energy belongs to a system (Earth + book, spring + block), not to one body alone.</p>`,
  legend: [
    { c: "c2", sym: `<i>U</i><sub>g</sub> = <i>mgy</i>`, name: "Gravitational potential energy", desc: "Energy of height near Earth's surface, in joules, measured from a chosen reference level <span class=\"m\"><i>y</i> = 0</span>." },
    { c: "c3", sym: `<i>U</i><sub>s</sub> = ½<i>kx</i><sup>2</sup>`, name: "Elastic potential energy", desc: "Energy stored in a spring stretched or compressed by <span class=\"m\"><i>x</i></span> from its relaxed length. Never negative." },
    { c: "c4", sym: `path`, name: "Path", desc: "The route taken between two points. A conservative force's work ignores it; friction's work depends on its length." },
    { c: "c1", sym: `<i>W</i><sub>cons</sub>`, name: "Work by the conservative force", desc: "Work done by gravity or the spring. It equals <span class=\"m\">−Δ<i>U</i></span>: positive when the potential energy drops." }
  ],
  steps: { title: "How to use potential energy", items: [
    `Identify the forces and decide which are conservative (gravity, ideal springs) and which are not (friction, drag, pushes).`,
    `Choose a reference: <span class="m"><i>y</i> = 0</span> for gravity (any convenient level) and the relaxed length for a spring.`,
    `Write the potential energies at the start and end: <span class="m c2"><i>mgy</i></span>, <span class="m c3">½<i>kx</i><sup>2</sup></span>.`,
    `The work done by each conservative force is <span class="m"><i>W</i> = −Δ<i>U</i> = <i>U</i><sub>A</sub> − <i>U</i><sub>B</sub></span>, whatever the path. Compute nonconservative work separately along the actual path.`,
    `Given <span class="m"><i>U</i>(<i>x</i>)</span>, get the force by differentiating, <span class="m"><i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i></span>; given the force, get <span class="m"><i>U</i></span> by integrating.`
  ] },
  example: {
    prompt: `A 70.0 kg hiker climbs from a trailhead at 1.50 × 10<sup>3</sup> m elevation to a summit at 2.35 × 10<sup>3</sup> m. One trail is 6.00 km long and switchbacks; another is a steep 3.50 km scramble. Find the change in gravitational potential energy and the work gravity does on her for each trail.`,
    lines: [
      { math: `<span class="m">Δ<i>y</i> = 2.35 × 10<sup>3</sup> m − 1.50 × 10<sup>3</sup> m = 850 m</span>`, note: "Only the change in height enters; take U = 0 at the trailhead." },
      { math: `<span class="m">Δ<span class="c2"><i>U</i><sub>g</sub></span> = <i>mg</i>Δ<i>y</i> = (70.0 kg)(9.80 m/s²)(850 m) = <span class="c2">5.83 × 10<sup>5</sup> J</span></span>`, note: "The potential energy of the hiker–Earth system increases." },
      { math: `<span class="m"><span class="c1"><i>W</i><sub>grav</sub></span> = −Δ<i>U</i><sub>g</sub> = <span class="c1">−5.83 × 10<sup>5</sup> J</span></span>`, note: "Gravity points down while she gains height, so its work is negative." },
      { math: `<span class="m"><span class="c4">6.00 km</span> or <span class="c4">3.50 km</span>: &nbsp; <i>W</i><sub>grav</sub> = −5.83 × 10<sup>5</sup> J</span>`, note: "Gravity is conservative: path length does not matter, only the end points." },
      { math: `<span class="m"><span class="fr"><span>5.83 × 10<sup>5</sup> J</span><span>4184 J/kcal</span></span> = 139 kcal</span>`, note: "Sanity check: a modest snack's worth of energy; her body actually burns several times this because muscles are only about 20–25 % efficient." }
    ],
    answer: `On either trail her potential energy rises by <span class="m c2">5.83 × 10<sup>5</sup> J</span> and gravity does <span class="m c1">−5.83 × 10<sup>5</sup> J</span> of work on her. The path does not matter.`
  },
  why: `<p>Potential energy turns forces into bookkeeping. Once you know that gravity's work is <span class="m">−Δ(<i>mgy</i>)</span> and a spring's is <span class="m">−Δ(½<i>kx</i><sup>2</sup>)</span>, you never need to integrate them again: just compare the start and end. That is the step that leads straight to conservation of mechanical energy.</p>
<p>The idea reaches far past mechanics. Hydroelectric dams, pumped storage and counterweights store gravitational potential energy; springs, bows and trampolines store elastic energy; chemical and nuclear energy are potential energies of electric and nuclear forces. The relation <span class="m"><i>F</i> = −d<i>U</i>/d<i>x</i></span> lets physicists describe a force entirely by an energy curve, from molecules to planets.</p>`,
  careers: [
    { role: "Hydroelectric engineer", use: "Estimates a dam's stored energy and power from the mass of water and its height drop, mgh." },
    { role: "Grid energy-storage engineer", use: "Sizes pumped-storage reservoirs by the gravitational potential energy they can hold between upper and lower lakes." },
    { role: "Mechanical engineer", use: "Chooses spring constants so a spring stores a required ½kx² in valves, clutches and shock absorbers." },
    { role: "Roller-coaster designer", use: "Sets the height of the first hill so its potential energy covers every later hill plus friction losses." },
    { role: "Computational chemist", use: "Models molecules with potential-energy functions and gets interatomic forces from F = −dU/dx." },
    { role: "Pole-vault and trampoline coach", use: "Uses the conversion between elastic energy in the pole or bed and height gained to coach technique." }
  ],
  life: [
    "Lifting a suitcase into an overhead bin and feeling the energy come back if it falls",
    "Winding a spring toy or pulling back a slingshot",
    "Choosing a switchback trail that is longer but less steep, for the same total climb",
    "Letting a bicycle coast down a hill it took effort to climb",
    "Noticing that a stretched rubber band stores more energy the further it is stretched"
  ],
  fields: [
    { name: "Civil engineering", use: "Dams, counterweights and pumped storage are designed from gravitational potential energy." },
    { name: "Chemistry", use: "Bond energies and reaction pathways are described by potential-energy surfaces." },
    { name: "Mechanical engineering", use: "Springs and elastic elements are specified by the energy ½kx² they must store and release." },
    { name: "Earth science", use: "Landslide and avalanche hazards depend on the potential energy of mass on a slope." }
  ],
  prereqWhy: {
    "mech-kinetic": "Potential energy is defined through work, and it earns its keep in the work–energy theorem, where the work of conservative forces is replaced by −ΔU.",
    "mech-common-forces": "The two standard potential energies come from the two standard position-dependent forces met there: weight mg and the spring force F = −kx."
  },
  unlocksWhy: {
    "mech-energy-cons": "With potential energy defined, the work–energy theorem becomes K + U = constant when only conservative forces do work, the principle of conservation of mechanical energy."
  },
  mathWhy: {
    "calculus-1:Antiderivatives and the definite integral": `Potential energy is minus the integral of the force, <span class="m"><i>U</i>(<i>x</i>) = −∫ <i>F</i><sub>x</sub> d<i>x</i></span>; for a spring <span class="m">−∫<sub>0</sub><sup><i>x</i></sup>(−<i>kx</i>′) d<i>x</i>′ = ½<i>kx</i><sup>2</sup></span>. Co-requisite: <span class="m"><i>mgy</i></span> and <span class="m">½<i>kx</i><sup>2</sup></span> can be used as formulas first.`,
    "calculus-1:Differentiation rules (power, product, quotient, chain)": `The force is <span class="m"><i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i></span>; for <span class="m"><i>U</i> = 3.00<i>x</i><sup>2</sup> − 2.00<i>x</i><sup>3</sup></span> the power rule gives <span class="m"><i>F</i> = −6.00<i>x</i> + 6.00<i>x</i><sup>2</sup></span>. Needed outright whenever the potential is given as a function.`
  },
  beyond: [
    { field: "Electricity & Magnetism", why: "Electric potential energy and voltage are built exactly the same way, with E = −∇V playing the role of F = −dU/dx." },
    { field: "Classical Mechanics", why: "The potential U enters the Lagrangian L = K − U and the Hamiltonian, and conservative forces are gradients F = −∇U." },
    { field: "Quantum Mechanics", why: "The Schrödinger equation is written with the potential energy U(x), not the force, so every quantum problem starts from a potential." },
    { field: "Astrophysics & Cosmology", why: "Gravitational potential energy −GMm/r governs orbits, escape and the binding of stars and galaxies." }
  ],
  mistakes: [
    { wrong: `Thinking a potential energy value has meaning on its own: "the book has 29.4 J of potential energy."`, fix: `Only differences matter. The book has 29.4 J more than on the floor; with the zero at the shelf its U is 0 and on the floor it is −29.4 J.` },
    { wrong: `Using the length of the ramp or trail in <span class="m"><i>mgh</i></span>.`, fix: `<span class="m"><i>h</i></span> is the vertical change in height. Path length only matters for nonconservative forces like friction.` },
    { wrong: `Giving the spring energy a sign that depends on stretch versus compression.`, fix: `<span class="m">½<i>kx</i><sup>2</sup></span> is the same for <span class="m">+<i>x</i></span> and <span class="m">−<i>x</i></span>; it is never negative when the zero is at the relaxed length.` },
    { wrong: `Forgetting the minus sign: <span class="m"><i>F</i> = +d<i>U</i>/d<i>x</i></span>.`, fix: `<span class="m"><i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i></span>: the force points downhill on the <span class="m"><i>U</i></span> curve, toward lower potential energy.` }
  ],
  practice: [
    { q: `A 2.00 kg book is lifted from the floor to a shelf 1.50 m higher. Find <span class="m">Δ<i>U</i><sub>g</sub></span>. If you put <span class="m"><i>U</i> = 0</span> at the shelf instead of the floor, what is the book's <span class="m"><i>U</i></span> on the floor, and does <span class="m">Δ<i>U</i></span> change?`, a: `<span class="m">Δ<i>U</i> = (2.00)(9.80)(1.50) = 29.4 J</span>. With the zero at the shelf, <span class="m"><i>U</i><sub>floor</sub> = −29.4 J</span> and <span class="m"><i>U</i><sub>shelf</sub> = 0</span>, so <span class="m">Δ<i>U</i></span> is still <span class="m">+29.4 J</span>.` },
    { q: `A spring with <span class="m"><i>k</i> = 250 N/m</span> is compressed 0.120 m. How much elastic potential energy does it store? How much if it is compressed twice as far?`, a: `<span class="m"><i>U</i> = ½(250)(0.120)<sup>2</sup> = 1.80 J</span>. At 0.240 m: <span class="m">½(250)(0.240)<sup>2</sup> = 7.20 J</span>, four times as much.` },
    { q: `A particle's potential energy is <span class="m"><i>U</i>(<i>x</i>) = 3.00<i>x</i><sup>2</sup> − 2.00<i>x</i><sup>3</sup></span> (U in J, x in m). Find the force on it at <span class="m"><i>x</i> = 2.00 m</span>.`, a: `<span class="m"><i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i> = −6.00<i>x</i> + 6.00<i>x</i><sup>2</sup></span>. At 2.00 m: <span class="m">−12.0 + 24.0 = 12.0 N</span>, in the +x direction.` },
    { q: `A 5.00 kg box is dragged across a level floor from A to B, 5.00 m apart, with <span class="m"><i>μ</i><sub>k</sub> = 0.300</span>. Compare the work done by friction and by gravity along the straight path and along an L-shaped path (3.00 m then 4.00 m). What does this show?`, a: `Friction: <span class="m"><i>f</i> = (0.300)(5.00)(9.80) = 14.7 N</span>. Straight: <span class="m">−(14.7)(5.00) = −73.5 J</span>; L-path: <span class="m">−(14.7)(7.00) = −103 J</span>. Gravity does 0 on both (no height change). Friction's work depends on the path, so friction is nonconservative and has no potential energy.` }
  ],
  origin: `William Rankine introduced the term "potential energy" in 1853, alongside "actual" (kinetic) energy. The idea of a potential function whose derivatives give the force goes back to Lagrange's work on gravitation (1773) and was named the "potential" by George Green in 1828.`
};
