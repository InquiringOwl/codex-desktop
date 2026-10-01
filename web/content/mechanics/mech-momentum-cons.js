window.ARITH = window.ARITH || {};

ARITH["mech-momentum-cons"] = {
  title: "Conservation of Linear Momentum",
  short: "No external force, no change in total momentum",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · linear momentum",
  hero: `<span class="m"><span class="c2"><i>m</i><sub>A</sub><b>v</b><sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><b>v</b><sub>B</sub></span> = <span class="c2"><i>m</i><sub>A</sub><b>v</b>′<sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><b>v</b>′<sub>B</sub></span></span>`,
  lede: `When the only forces that matter act between the parts of a system, the parts trade momentum but the <span class="c1">total momentum</span> of the system stays exactly the same.`,
  plain: `<p>Two skaters stand still on smooth ice and push each other apart. Nothing outside them pushes either one, yet both end up moving, in opposite directions. The lighter skater moves faster. The push each feels is equal and opposite, and it lasts the same time for both, so each gains the same amount of momentum in opposite directions. Add them up and the total is still zero, just as before the push.</p>
<p>That is <b>conservation of momentum</b>. Draw a boundary around the bodies you care about, the <b>system</b>. Forces between bodies inside the boundary are <b>internal</b>; they come in third-law pairs and cancel in the total. Only <b>external</b> forces from outside the boundary can change the total momentum. If those add to zero, the total momentum before any event equals the total after it, however violent the event.</p>
<p>Momentum is a vector, so the rule holds separately for each direction. It also holds when external forces exist but are tiny compared with the internal ones during a brief event, such as a collision or an explosion lasting milliseconds.</p>`,
  formal: `<p>For a system of particles with total momentum <span class="m"><span class="c1"><b>P</b></span> = Σ<i>m</i><sub>j</sub><b>v</b><sub>j</sub></span>, summing Newton's second law over the particles makes the internal forces cancel in pairs (third law), leaving</p>
<div class="display"><span class="fr"><span>d<span class="c1"><b>P</b></span></span><span>d<i>t</i></span></span> = <b>F</b><sub>ext</sub> &nbsp;&nbsp;⇒&nbsp;&nbsp; <b>F</b><sub>ext</sub> = 0 &nbsp;⇒&nbsp; <span class="c1"><b>P</b></span> = constant<br><span class="dim">two bodies:</span>&nbsp; <span class="c2"><i>m</i><sub>A</sub><b>v</b><sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><b>v</b><sub>B</sub></span> = <span class="c2"><i>m</i><sub>A</sub><b>v</b>′<sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><b>v</b>′<sub>B</sub></span></div>
<p>The law applies to a <b>closed</b> system (its total mass does not change) that is also <b>isolated</b> (the net external force on it is zero). It holds component by component: if only <span class="m"><i>F</i><sub>ext,<i>x</i></sub> = 0</span>, then <span class="m"><i>P</i><sub>x</sub></span> alone is conserved. Internal forces can change the system's kinetic energy (a spring releasing, an explosion, an inelastic collision) but never its total momentum.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i><sub>A</sub><b>v</b><sub>A</sub>`, name: "Body A's momentum", desc: "Mass times velocity of the first body, a vector in kg·m/s. Its sign in one dimension shows its direction." },
    { c: "c3", sym: `<i>m</i><sub>B</sub><b>v</b><sub>B</sub>`, name: "Body B's momentum", desc: "The second body's momentum. Whatever A gains, B loses, because their mutual forces are equal and opposite." },
    { c: "c1", sym: `<b>P</b>`, name: "Total momentum", desc: "The vector sum of every body's momentum inside the system boundary. It stays constant when the net external force is zero." }
  ],
  steps: { title: "How to apply conservation of momentum", items: [
    `Choose the system: include every body that pushes on the others during the event, so those forces are internal.`,
    `Check the external forces. Their sum must be zero (or negligible during a brief event) in each direction you use.`,
    `Pick axes and signs. Write the <span class="c1">total momentum</span> before the event, component by component.`,
    `Write the total after the event with the unknown velocities, and set each component equal to its value before.`,
    `Solve. If there are two unknowns, add a second relation (a relative speed, a known final velocity, or energy for an elastic collision) and solve the system.`,
    `Check: substitute back so the totals match, and confirm the lighter body gets the larger speed change.`
  ] },
  example: {
    prompt: `An 85.0 kg astronaut (with suit) is drifting at rest 10.0 m from her spacecraft in deep space. Her tether has come loose. She throws a 1.50 kg tool bag directly away from the spacecraft at 8.00 m/s. How fast does she move toward the spacecraft, and how long does she take to reach it?`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>P</i><sub>before</sub></span> = 0</span>`, note: "System: astronaut plus bag, both at rest. No external force acts in deep space." },
      { math: `<span class="m">0 = <span class="c2">(85.0 kg)<i>v</i><sub>A</sub></span> + <span class="c3">(1.50 kg)(+8.00 m/s)</span></span>`, note: "Take + away from the spacecraft, the direction of the throw." },
      { math: `<span class="m"><i>v</i><sub>A</sub> = −<span class="fr"><span>12.0 kg·m/s</span><span>85.0 kg</span></span> = −0.141 m/s</span>`, note: "Negative: she recoils toward the spacecraft." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>10.0 m</span><span>0.141 m/s</span></span> = 70.8 s</span>`, note: "Nothing slows her, so she drifts at constant velocity." },
      { math: `<span class="m"><span class="fr"><span>8.00</span><span>0.141</span></span> ≈ 56.7 = <span class="fr"><span>85.0</span><span>1.50</span></span></span>`, note: "Check: from rest, the speeds are in the inverse ratio of the masses, as they must be." }
    ],
    answer: `She moves toward the spacecraft at <span class="m">0.141 m/s</span> and reaches it after about <span class="m">70.8 s</span>. The bag carries <span class="m">+12.0 kg·m/s</span> and she carries <span class="m">−12.0 kg·m/s</span>, so the total stays zero.`
  },
  why: `<p>Conservation of momentum lets you predict the outcome of an interaction without knowing anything about the forces inside it. Collisions, explosions, recoil and rocket propulsion all involve huge, brief, complicated forces, yet the velocities afterward follow from a single vector equation. That is why it is the first tool for any collision problem.</p>
<p>It is also one of the deepest laws in physics. It holds for colliding galaxies and for subatomic particles, where Newton's laws in their simple form fail. In 1930 the apparent failure of energy conservation in beta decay led Wolfgang Pauli to predict an unseen particle, the neutrino, rather than give up the conservation laws. Later recoil measurements showed the same particle carries off the missing momentum, and it was detected directly in 1956.</p>`,
  careers: [
    { role: "Spacecraft engineer", use: "Plans thruster burns and docking manoeuvres using the momentum carried away by expelled propellant." },
    { role: "Accident reconstructionist", use: "Works backward from the post-crash velocities of vehicles to their speeds before impact using conservation of momentum." },
    { role: "Firearms engineer", use: "Predicts rifle recoil from the momentum of the bullet and propellant gases and designs stocks and muzzle brakes to manage it." },
    { role: "Particle physicist", use: "Reconstructs unseen particles in detector events from the momentum missing in the vector sum of the detected tracks." },
    { role: "Rail yard engineer", use: "Sets coupling speeds for freight cars, whose combined velocity after coupling follows from momentum conservation." }
  ],
  life: [
    "Stepping off a small boat and watching it drift away from the dock",
    "Feeling a garden hose or fire hose push back as water leaves the nozzle",
    "A rifle or even a water pistol kicking back when fired",
    "Two people on skates or a skateboard pushing apart",
    "A balloon zooming off when you let the air out"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Rocket propulsion and attitude control rest on momentum conservation between vehicle and exhaust." },
    { name: "Forensic engineering", use: "Vehicle crash reconstruction uses momentum balances in two dimensions." },
    { name: "Particle physics", use: "Momentum conservation identifies decay products and missing particles in collider data." },
    { name: "Astronomy", use: "Binary star and exoplanet masses come from the fact that the bodies' momenta about their common centre of mass cancel." }
  ],
  prereqWhy: {
    "mech-impulse": "During an interaction each body receives an impulse equal to its momentum change, and the two impulses are equal and opposite, which is why the total cannot change."
  },
  unlocksWhy: {
    "mech-collisions": "Every collision, elastic or not, is solved by first writing total momentum before equals total momentum after.",
    "mech-center-mass": "The total momentum of a system equals its total mass times the velocity of its centre of mass, so conserved momentum means the centre of mass moves at constant velocity.",
    "mech-ang-momentum": "Angular momentum and its conservation are built the same way, with torques in place of forces and r × p in place of p."
  },
  mathWhy: {
    "a1-sys-sub": `Problems with two unknown velocities, such as a person walking on a raft at a given speed relative to it, give two linear equations (momentum and the relative-speed condition) solved by substituting one into the other.`,
    "trigonometry:Vectors in the plane": `In two dimensions the momentum equation is a vector equation. Each momentum is resolved into <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> components, each component is conserved separately, and the unknown vector is rebuilt from its components with magnitude and angle.`
  },
  beyond: [
    { field: "Aerospace Engineering", why: "The Tsiolkovsky rocket equation is momentum conservation applied to a vehicle continuously expelling mass." },
    { field: "Nuclear & Particle Physics", why: "Decay and scattering kinematics use momentum conservation (in its relativistic form) to identify particles and measure their masses." },
    { field: "Classical Mechanics", why: "Noether's theorem shows momentum conservation follows from the laws of physics being the same everywhere in space." },
    { field: "Waves & Fluids", why: "The thrust of a jet and the force of a fluid on a pipe bend come from momentum balances on a control volume." }
  ],
  mistakes: [
    { wrong: `Applying conservation to one body alone: "the ball's momentum is conserved as it falls."`, fix: `Gravity is an external force on the ball, so its momentum grows. Only the system ball + Earth has constant momentum.` },
    { wrong: `Adding speeds without signs, so recoil comes out in the same direction as the throw.`, fix: `Choose a positive direction and give every velocity a sign. In one dimension the momenta must be able to cancel.` },
    { wrong: `Assuming kinetic energy is also conserved because momentum is.`, fix: `Internal forces can create or destroy kinetic energy (springs, explosions, crumpling). Momentum is conserved in every such event; kinetic energy only in elastic ones.` },
    { wrong: `Adding magnitudes of 2-D momenta: "the pieces carry 12 + 10 = 22 kg·m/s."`, fix: `Add as vectors, by components. Perpendicular momenta of 12 and 10 kg·m/s add to <span class="m">√(12² + 10²) = 15.6 kg·m/s</span>.` }
  ],
  practice: [
    { q: `A 50.0 kg skater and a 70.0 kg skater stand at rest on smooth ice and push apart. The lighter skater moves off at 1.40 m/s. Find the velocity of the heavier skater.`, a: `<span class="m">0 = (50.0)(1.40) + (70.0)<i>v</i></span>, so <span class="m"><i>v</i> = −1.00 m/s</span>: 1.00 m/s in the opposite direction.` },
    { q: `Is the momentum of a falling 1.00 kg ball conserved? If you choose ball plus Earth (<span class="m">5.97 × 10<sup>24</sup> kg</span>) as the system, how fast is Earth moving toward the ball when the ball, released from rest, reaches 10.0 m/s?`, a: `The ball alone: no, gravity is an external force on it. Ball + Earth: yes, gravity is internal. <span class="m"><i>v</i><sub>E</sub> = (1.00)(10.0)/(5.97 × 10<sup>24</sup>) = 1.68 × 10<sup>−24</sup> m/s</span> upward, far too small to notice.` },
    { q: `A 60.0 kg person stands at rest on a 120 kg raft on still water (ignore water drag). She walks along the raft at 1.50 m/s relative to the raft. Find her velocity and the raft's velocity relative to the water.`, a: `Momentum: <span class="m">60.0<i>v</i><sub>p</sub> + 120<i>v</i><sub>r</sub> = 0</span>. Relative speed: <span class="m"><i>v</i><sub>p</sub> − <i>v</i><sub>r</sub> = 1.50</span>. Substitute <span class="m"><i>v</i><sub>r</sub> = −0.500<i>v</i><sub>p</sub></span>: <span class="m">1.50<i>v</i><sub>p</sub> = 1.50</span>, so <span class="m"><i>v</i><sub>p</sub> = 1.00 m/s</span> and <span class="m"><i>v</i><sub>r</sub> = −0.500 m/s</span>.` },
    { q: `A 3.00 kg object at rest explodes into three pieces. A 1.00 kg piece flies east at 12.0 m/s and a 0.500 kg piece flies north at 20.0 m/s. Find the velocity of the third piece.`, a: `Its mass is 1.50 kg and its momentum must cancel the others: <span class="m"><b>p</b><sub>3</sub> = (−12.0 î − 10.0 ĵ) kg·m/s</span>. Magnitude <span class="m">√(12.0² + 10.0²) = 15.6 kg·m/s</span>, so <span class="m"><i>v</i><sub>3</sub> = 15.62/1.50 = 10.4 m/s</span> at <span class="m">tan<sup>−1</sup>(10.0/12.0) = 39.8°</span> south of west.` }
  ],
  origin: `Descartes (1644) proposed that the total "quantity of motion" in the world is conserved, but used speed without direction. John Wallis, Christopher Wren and Christiaan Huygens, reporting to the Royal Society in 1668–1669, showed from collision experiments that the conserved quantity is mass times velocity with sign. Newton derived the law from his three laws as Corollary III of the <i>Principia</i> (1687).`
};
