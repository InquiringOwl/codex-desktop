window.ARITH = window.ARITH || {};

ARITH["mech-energy-diagrams"] = {
  title: "Potential Energy Diagrams & Equilibrium",
  short: "Read force, turning points and stability off U(x)",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · energy",
  hero: `<span class="m"><span class="c3"><i>F</i><sub>x</sub></span> = −<span class="fr"><span>d<span class="c2"><i>U</i></span></span><span>d<i>x</i></span></span> &nbsp;&nbsp; <i>K</i> = <span class="c1"><i>E</i></span> − <span class="c2"><i>U</i>(<i>x</i>)</span> ≥ 0</span>`,
  lede: `Graph the <span class="c2">potential energy</span> against position and draw the <span class="c1">total energy</span> as a horizontal line. The picture shows where the particle can go, where it turns around, which way the <span class="c3">force</span> pushes, and which <span class="c4">equilibria</span> are stable.`,
  plain: `<p>Picture a marble rolling without friction on a curved track. The track's height at each point is a graph of the marble's potential energy. The marble's total energy is fixed, so draw it as a flat line at some height. Wherever the track is below that line, the difference is kinetic energy and the marble moves. Where the track rises to meet the line, the marble slows to a stop and rolls back: a <b>turning point</b>. Where the track is above the line, the marble can never go.</p>
<p>The slope of the graph gives the force. On a downhill stretch the marble is pushed downhill, toward lower potential energy. Steeper means stronger. At the bottom of a valley and at the top of a hill the graph is flat, so the force is zero: these are <b>equilibrium</b> points.</p>
<p>They are not all alike. Nudge a marble at the bottom of a valley and it rolls back: <b>stable</b> equilibrium. Nudge one balanced on a hilltop and it rolls away: <b>unstable</b>. On a flat stretch it just stays where you put it: <b>neutral</b>. The same reading works for any one-dimensional conservative force, from springs to the forces that hold atoms together in a molecule.</p>`,
  formal: `<p>For a conservative force in one dimension with potential energy <span class="m c2"><i>U</i>(<i>x</i>)</span>, the force is minus the slope, and mechanical energy <span class="m c1"><i>E</i></span> = <span class="m"><i>K</i> + <i>U</i></span> is constant:</p>
<div class="display"><span class="c3"><i>F</i><sub>x</sub>(<i>x</i>)</span> = −<span class="fr"><span>d<span class="c2"><i>U</i></span></span><span>d<i>x</i></span></span> &nbsp;&nbsp;&nbsp; <i>v</i>(<i>x</i>) = ±√<span style="text-decoration:overline">(2/<i>m</i>)(<i>E</i> − <i>U</i>(<i>x</i>))</span><br><span class="dim">allowed region:</span> <span class="c2"><i>U</i>(<i>x</i>)</span> ≤ <span class="c1"><i>E</i></span> &nbsp;&nbsp; <span class="dim">turning points:</span> <span class="c2"><i>U</i>(<i>x</i>)</span> = <span class="c1"><i>E</i></span><br><span class="c4">equilibrium</span>: d<i>U</i>/d<i>x</i> = 0 &nbsp; <span class="dim">stable if</span> d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> &gt; 0, &nbsp;<span class="dim">unstable if</span> d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> &lt; 0</div>
<p>If <span class="m"><i>U</i></span> is constant over an interval, every point there is a <b>neutral</b> equilibrium. The force always points toward decreasing <span class="m"><i>U</i></span>, so at a local minimum it is a restoring force. Near a stable minimum <span class="m"><i>x</i><sub>0</sub></span>, <span class="m"><i>U</i> ≈ <i>U</i>(<i>x</i><sub>0</sub>) + ½<i>k</i>(<i>x</i> − <i>x</i><sub>0</sub>)<sup>2</sup></span> with <span class="m"><i>k</i> = <i>U</i>″(<i>x</i><sub>0</sub>)</span>, so small displacements oscillate like a mass on a spring. A particle whose allowed region is a finite interval is <b>bound</b>; one whose region extends to infinity is <b>unbound</b>.</p>`,
  legend: [
    { c: "c2", sym: `<i>U</i>(<i>x</i>)`, name: "Potential energy curve", desc: "Potential energy as a function of position, in joules. Its shape alone decides the force and the equilibria." },
    { c: "c1", sym: `<i>E</i>`, name: "Total mechanical energy", desc: "A horizontal line, constant for a conservative system. The gap E − U(x) above the curve is the kinetic energy." },
    { c: "c3", sym: `<i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i>`, name: "Force", desc: "Minus the slope of the curve. It points downhill on the graph and is zero where the curve is flat." },
    { c: "c4", sym: `d<i>U</i>/d<i>x</i> = 0`, name: "Equilibria", desc: "Points of zero force. A minimum of U is stable, a maximum is unstable, a flat stretch is neutral." }
  ],
  steps: { title: "How to read a potential energy diagram", items: [
    `Draw the <span class="c1">total energy</span> <span class="m"><i>E</i></span> as a horizontal line across the <span class="c2"><i>U</i>(<i>x</i>)</span> graph.`,
    `Mark the <b>turning points</b> where the line meets the curve (<span class="m"><i>U</i>(<i>x</i>) = <i>E</i></span>). The particle is confined to the region where the curve is below the line.`,
    `Read the kinetic energy at any <span class="m"><i>x</i></span> as the vertical gap <span class="m"><i>E</i> − <i>U</i>(<i>x</i>)</span>, and the speed from <span class="m"><i>v</i> = √(2<i>K</i>/<i>m</i>)</span>.`,
    `Read the <span class="c3">force</span> from the slope: <span class="m"><i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i></span>, pointing downhill on the graph.`,
    `Find the <span class="c4">equilibria</span> where <span class="m">d<i>U</i>/d<i>x</i> = 0</span>, and classify each with the sign of <span class="m">d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup></span>.`
  ] },
  example: {
    prompt: `An engineer models a 0.500 kg snap-through latch (a bistable spring mechanism) with the potential energy <span class="m"><i>U</i>(<i>x</i>) = (1.00 J/m<sup>4</sup>)<i>x</i><sup>4</sup> − (2.00 J/m<sup>2</sup>)<i>x</i><sup>2</sup></span>. Find the force, the equilibria and their stability. If the latch has total energy <span class="m"><i>E</i> = −0.750 J</span> and is in the right-hand well, find its turning points and its speed at <span class="m"><i>x</i> = 1.00 m</span>.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>F</i><sub>x</sub></span> = −<span class="fr"><span>d<i>U</i></span><span>d<i>x</i></span></span> = −4.00<i>x</i><sup>3</sup> + 4.00<i>x</i></span> (N, with x in m)`, note: "Differentiate term by term and change the sign." },
      { math: `<span class="m">4<i>x</i>(1 − <i>x</i><sup>2</sup>) = 0 &nbsp;⇒&nbsp; <span class="c4"><i>x</i> = 0, ±1.00 m</span></span>`, note: "Equilibria are where the force is zero." },
      { math: `<span class="m"><i>U</i>″ = 12.0<i>x</i><sup>2</sup> − 4.00: &nbsp; <i>U</i>″(0) = −4.00 &lt; 0, &nbsp; <i>U</i>″(±1.00) = +8.00 &gt; 0</span>`, note: "x = 0 is an unstable maximum (U = 0); x = ±1.00 m are stable minima (U = −1.00 J)." },
      { math: `<span class="m"><i>x</i><sup>4</sup> − 2<i>x</i><sup>2</sup> + 0.750 = 0 &nbsp;⇒&nbsp; <i>x</i><sup>2</sup> = 0.500 or 1.50</span>`, note: "Turning points: set U(x) = E; the equation is quadratic in x²." },
      { math: `<span class="m"><i>x</i> = 0.707 m and <i>x</i> = 1.22 m</span>`, note: "In the right-hand well the latch moves between these two points." },
      { math: `<span class="m"><i>K</i> = <span class="c1"><i>E</i></span> − <span class="c2"><i>U</i>(1.00)</span> = −0.750 − (−1.00) = 0.250 J, &nbsp; <i>v</i> = √(2(0.250)/0.500) = 1.00 m/s</span>`, note: "The speed is greatest at the bottom of the well." },
      { math: `<span class="m"><span class="c1"><i>E</i></span> = −0.750 J &lt; <i>U</i>(0) = 0</span>`, note: "Check: the energy is below the barrier at x = 0, so the latch cannot snap to the other well; at x = 0.707 m the force is +1.41 N, pushing it back into the well." }
    ],
    answer: `The force is <span class="m">4.00<i>x</i> − 4.00<i>x</i><sup>3</sup></span>. The latch has stable equilibria at <span class="m">±1.00 m</span> and an unstable one at <span class="m">0</span>. With <span class="m"><i>E</i> = −0.750 J</span> it oscillates between <span class="m">0.707 m</span> and <span class="m">1.22 m</span>, moving at <span class="m">1.00 m/s</span> as it passes <span class="m">1.00 m</span>.`
  },
  why: `<p>A potential energy diagram answers the qualitative questions about a system in one glance: is the motion bound or can it escape, where does it turn around, which states are stable? Often you can say all of this without ever solving the equation of motion, which for most real potentials has no simple solution.</p>
<p>The same diagrams run through the rest of physics. Chemists read bond lengths and dissociation energies from molecular potential curves. Engineers design bistable switches and snap-fit latches as double wells. Astronomers use an effective potential to see whether an orbit is bound. Quantum mechanics starts from the same <span class="m"><i>U</i>(<i>x</i>)</span> pictures, with energy levels drawn as horizontal lines.</p>`,
  careers: [
    { role: "Physical chemist", use: "Reads bond lengths, vibration frequencies and dissociation energies from molecular potential energy curves such as the Morse and Lennard-Jones potentials." },
    { role: "MEMS engineer", use: "Designs bistable microswitches and energy harvesters as double-well potentials and sets the barrier height that decides when they snap." },
    { role: "Materials scientist", use: "Uses interatomic potentials in simulations to predict lattice spacing, elastic stiffness and melting behaviour." },
    { role: "Structural engineer", use: "Checks buckling of columns and shells, where a stable equilibrium turns unstable as the load grows." },
    { role: "Orbital analyst", use: "Uses effective potential diagrams to find whether a spacecraft's orbit is bound and its closest and farthest distances." }
  ],
  life: [
    "A marble rolling back and forth in a bowl",
    "A light switch that snaps to on or off but never stays in the middle",
    "A pencil balanced on its tip falling over at the slightest nudge",
    "A skateboarder in a half-pipe turning around at the same height each side",
    "A ball resting on a flat table staying wherever it is placed"
  ],
  fields: [
    { name: "Chemistry", use: "Molecular potential energy curves give bond lengths, bond energies and reaction barriers." },
    { name: "Materials science", use: "Interatomic potentials predict crystal structure and mechanical properties." },
    { name: "Mechanical engineering", use: "Stability of mechanisms, snap-fits and buckling are analysed from energy landscapes." },
    { name: "Astronomy", use: "Effective potentials classify orbits as bound or unbound and give their turning radii." }
  ],
  prereqWhy: {
    "mech-energy-cons": "The horizontal total-energy line only makes sense because K + U stays constant, so the kinetic energy at each x is E − U(x)."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-quad-graphs": `The spring potential <span class="m"><i>U</i> = ½<i>kx</i><sup>2</sup></span> is an upward parabola: its vertex is the stable equilibrium, and the turning points are where the parabola meets the horizontal line <span class="m"><i>U</i> = <i>E</i></span>, at <span class="m"><i>x</i> = ±√(2<i>E</i>/<i>k</i>)</span>.`,
    "calculus-1:Curve sketching and the Mean Value Theorem": `Equilibria are critical points of <span class="m"><i>U</i>(<i>x</i>)</span>, and the second-derivative test classifies them as stable (minimum) or unstable (maximum). Graphs can be read by eye first, but finding equilibria of a formula needs this, so it is needed outright for the quantitative work.`
  },
  beyond: [
    { field: "Quantum Mechanics", why: "The Schrödinger equation is solved for a given U(x); wells, barriers and tunnelling are read from the same diagrams." },
    { field: "Classical Mechanics", why: "Effective potentials reduce orbital and central-force motion to one-dimensional energy diagrams, and small oscillations about minima give normal modes." },
    { field: "Condensed Matter Physics", why: "Interatomic potentials set lattice spacing and phonon frequencies, which come from the curvature at the minimum." },
    { field: "Astrophysics & Cosmology", why: "Whether stars, planets or gas are bound in a gravitational well is judged by comparing total energy with the effective potential." }
  ],
  mistakes: [
    { wrong: `Reading the force as the value of <span class="m"><i>U</i></span>: "U is large here, so the force is large."`, fix: `The force is minus the slope, <span class="m">−d<i>U</i>/d<i>x</i></span>. At the top of a tall peak <span class="m"><i>U</i></span> is large but the force is zero.` },
    { wrong: `Getting the force direction backward: pointing it uphill on the graph.`, fix: `The minus sign makes the force point toward lower <span class="m"><i>U</i></span>. Where <span class="m"><i>U</i></span> rises to the right, <span class="m"><i>F</i><sub>x</sub> &lt; 0</span>.` },
    { wrong: `Calling every point of zero force stable.`, fix: `Check the curvature. A minimum (<span class="m"><i>U</i>″ &gt; 0</span>) is stable, a maximum (<span class="m"><i>U</i>″ &lt; 0</span>) is unstable.` },
    { wrong: `Letting the particle enter a region where <span class="m"><i>U</i>(<i>x</i>) &gt; <i>E</i></span>.`, fix: `That would need negative kinetic energy. Classically the particle turns around where <span class="m"><i>U</i> = <i>E</i></span>.` }
  ],
  practice: [
    { q: `A block on a spring (<span class="m"><i>k</i> = 200 N/m</span>, <span class="m"><i>U</i> = ½<i>kx</i><sup>2</sup></span>) has total energy 4.00 J. Find its turning points and the force on it at <span class="m"><i>x</i> = 0.100 m</span>.`, a: `Turning points: <span class="m">½(200)<i>x</i><sup>2</sup> = 4.00</span>, so <span class="m"><i>x</i> = ±0.200 m</span>. Force: <span class="m"><i>F</i><sub>x</sub> = −d<i>U</i>/d<i>x</i> = −<i>kx</i> = −20.0 N</span>, back toward equilibrium.` },
    { q: `On a potential energy graph, the slope at <span class="m"><i>x</i> = 2.0 m</span> is <span class="m">d<i>U</i>/d<i>x</i> = +3.0 J/m</span>. <span class="m"><i>U</i></span> has a local maximum at <span class="m"><i>x</i> = 5.0 m</span> and a local minimum at <span class="m"><i>x</i> = 7.0 m</span>. Give the force at 2.0 m and classify the two equilibria.`, a: `<span class="m"><i>F</i><sub>x</sub> = −3.0 N</span>, pointing in the −x direction (downhill on the graph). At 5.0 m the force is zero and the equilibrium is unstable (maximum); at 7.0 m it is stable (minimum).` },
    { q: `A particle moves in <span class="m"><i>U</i>(<i>x</i>) = (3.00 J/m<sup>2</sup>)<i>x</i><sup>2</sup> − (1.00 J/m<sup>3</sup>)<i>x</i><sup>3</sup></span>. Find and classify the equilibria. How much kinetic energy must it have at <span class="m"><i>x</i> = 0</span> to escape toward large positive x?`, a: `<span class="m">d<i>U</i>/d<i>x</i> = 6.00<i>x</i> − 3.00<i>x</i><sup>2</sup> = 0</span> at <span class="m"><i>x</i> = 0</span> and <span class="m"><i>x</i> = 2.00 m</span>. <span class="m"><i>U</i>″ = 6.00 − 6.00<i>x</i></span>: +6.00 at 0 (stable), −6.00 at 2.00 m (unstable). Barrier <span class="m"><i>U</i>(2.00) = 12.0 − 8.00 = 4.00 J</span>, so it needs more than 4.00 J.` },
    { q: `Two argon atoms interact through the Lennard-Jones potential <span class="m"><i>U</i>(<i>r</i>) = 4ε[(σ/<i>r</i>)<sup>12</sup> − (σ/<i>r</i>)<sup>6</sup>]</span> with <span class="m">σ = 3.40 × 10<sup>−10</sup> m</span> and <span class="m">ε = 1.65 × 10<sup>−21</sup> J</span>. Find the equilibrium separation, show it is stable, and find the energy needed to separate the atoms from rest there.`, a: `<span class="m">d<i>U</i>/d<i>r</i> = 4ε(−12σ<sup>12</sup>/<i>r</i><sup>13</sup> + 6σ<sup>6</sup>/<i>r</i><sup>7</sup>) = 0</span> gives <span class="m"><i>r</i><sub>0</sub> = 2<sup>1/6</sup>σ = 3.82 × 10<sup>−10</sup> m</span>. There <span class="m"><i>U</i>(<i>r</i><sub>0</sub>) = −ε</span> and <span class="m"><i>U</i>″(<i>r</i><sub>0</sub>) = 72ε/<i>r</i><sub>0</sub><sup>2</sup> &gt; 0</span>, a stable minimum. Since <span class="m"><i>U</i> → 0</span> as <span class="m"><i>r</i> → ∞</span>, separating them takes <span class="m">ε = 1.65 × 10<sup>−21</sup> J</span>.` }
  ],
  origin: `Joseph-Louis Lagrange stated in his <i>Mécanique analytique</i> (1788) that a system is in stable equilibrium where its potential energy is a minimum; Peter Gustav Lejeune Dirichlet gave the rigorous proof in 1846. John Lennard-Jones introduced the family of intermolecular potentials that bears his name in 1924.`
};
