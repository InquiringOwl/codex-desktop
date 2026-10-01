window.ARITH = window.ARITH || {};

ARITH["mech-equilibrium"] = {
  title: "Static Equilibrium",
  short: "Zero net force and zero net torque",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · static equilibrium",
  hero: `<span class="m">Σ<b>F</b> = 0 &nbsp;&nbsp; <span class="c1">Σ<b>τ</b> = 0</span></span>`,
  lede: `A rigid body stays at rest only if the forces on it cancel and the torques about any <span class="c4">pivot</span> cancel. For a plank on two supports, these two conditions fix both <span class="c2">support forces</span> from the <span class="c3">loads</span> and their positions.`,
  plain: `<p>A bridge, a shelf, a ladder against a wall and a person standing still are all in <b>static equilibrium</b>: nothing speeds up, nothing starts to turn. Zero net force alone is not enough. Push a ruler's two ends in opposite directions with equal forces and it spins even though the forces cancel. So a body at rest needs two things: the forces cancel, and the turning effects cancel.</p>
<p>The torque condition is what makes equilibrium problems solvable. You may take torques about <b>any</b> point you like, because if the body is not turning about one point it is not turning about any. The trick is to pick a point where an unknown force acts. That force then has zero lever arm and drops out, leaving one equation with one unknown.</p>
<p>The same equations predict when things tip. As a painter walks toward the overhanging end of a plank, the support at the far end carries less and less. When its force reaches zero, the plank is about to pivot on the other support. One step farther and no support force can balance the torques.</p>`,
  formal: `<p>A rigid body is in <b>equilibrium</b> when its linear and angular accelerations are both zero; in <b>static equilibrium</b> it is also at rest. The conditions are</p>
<div class="display">Σ<sub><i>k</i></sub> <b>F</b><sub>k</sub> = 0 &nbsp;&nbsp; <span class="c1">Σ<sub><i>k</i></sub> <b>τ</b><sub>k</sub> = 0</span> &nbsp;<span class="dim">(about any point)</span><br><span class="dim">forces in the xy-plane:</span>&nbsp; Σ<i>F</i><sub>x</sub> = 0, &nbsp; Σ<i>F</i><sub>y</sub> = 0, &nbsp; <span class="c1">Στ<sub>z</sub> = 0</span></div>
<p>The weight of an extended body acts at its <b>centre of gravity</b>, which coincides with its centre of mass in a uniform gravitational field. If the net force is zero, the net torque is the same about every point, since <span class="m">Σ(<b>r</b><sub>k</sub> − <b>r</b><sub>0</sub>) × <b>F</b><sub>k</sub> = Σ<b>r</b><sub>k</sub> × <b>F</b><sub>k</sub> − <b>r</b><sub>0</sub> × Σ<b>F</b><sub>k</sub></span>; so the <span class="c4">pivot</span> may be chosen freely. A planar problem gives three independent equations, so at most three unknowns can be found. A support that can only push (a roller or a plank resting on a post) requires <span class="m"><i>N</i> ≥ 0</span>; the body tips when a calculated support force would have to be negative.</p>`,
  legend: [
    { c: "c3", sym: `<i>m</i><i>g</i>`, name: "Loads", desc: "The weights and other applied forces, including the body's own weight at its centre of gravity." },
    { c: "c2", sym: `<i>N</i><sub>A</sub>, <i>N</i><sub>B</sub>`, name: "Support forces", desc: "The unknown forces from supports, hinges or cables. A simple support can only push, so N ≥ 0." },
    { c: "c4", sym: `pivot`, name: "Pivot for torques", desc: "The point you take torques about. Any point works; one where an unknown force acts removes that unknown." },
    { c: "c1", sym: `Στ = 0`, name: "Torque balance", desc: "Counterclockwise torques equal clockwise torques about the chosen pivot." }
  ],
  steps: { title: "How to solve a static equilibrium problem", items: [
    `Draw a free-body diagram of the body with every force at its point of application, including its own weight at the centre of gravity.`,
    `Choose axes and write <span class="m">Σ<i>F</i><sub>x</sub> = 0</span> and <span class="m">Σ<i>F</i><sub>y</sub> = 0</span>, resolving any angled force (cables, struts) into components.`,
    `Choose a <span class="c4">pivot</span> where an unknown force acts and write <span class="m"><span class="c1">Στ = 0</span></span> about it, counterclockwise positive, using each force's lever arm.`,
    `Solve the equations; with a well-chosen pivot the torque equation often gives one unknown directly.`,
    `Check with a torque equation about a different point, and check that every support force that can only push came out positive. A negative value means the body tips.`
  ] },
  example: {
    prompt: `A uniform 5.00 m scaffold plank of mass 30.0 kg rests on supports A at its left end and B, 4.00 m from A, so 1.00 m overhangs. A 70.0 kg painter stands 3.00 m from A. Find the support forces. How far past B can the painter walk before the plank tips?`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>w</i><sub>p</sub></span> = (30.0)(9.80) = 294 N at 2.50 m; &nbsp; <span class="c3"><i>w</i></span> = (70.0)(9.80) = 686 N at 3.00 m</span>`, note: "The plank's weight acts at its centre, 2.50 m from A." },
      { math: `<span class="m"><span class="c1">Στ<sub>A</sub></span> = <span class="c2"><i>N</i><sub>B</sub></span>(4.00) − 294(2.50) − 686(3.00) = 0</span>`, note: "Take torques about A, so N_A has no lever arm; counterclockwise positive." },
      { math: `<span class="m"><span class="c2"><i>N</i><sub>B</sub></span> = <span class="fr"><span>735 + 2058</span><span>4.00</span></span> N = <span class="c2">698 N</span></span>`, note: "Solve the torque equation." },
      { math: `<span class="m"><span class="c2"><i>N</i><sub>A</sub></span> = 294 + 686 − 698 = <span class="c2">282 N</span></span>`, note: "From ΣF_y = 0: the supports share the total weight of 980 N." },
      { math: `<span class="m"><span class="c1">Στ<sub>B</sub></span>: −<i>N</i><sub>A</sub>(4.00) + 294(1.50) + 686(1.00) = −1127 + 441 + 686 = 0 ✓</span>`, note: "Check about B: the same answers balance torques about another point." },
      { math: `<span class="m"><i>N</i><sub>A</sub> = 0: &nbsp;686(<i>x</i> − 4.00) = 294(1.50) ⇒ <i>x</i> = 4.64 m</span>`, note: "Tipping about B starts when A carries nothing: the painter's torque about B equals the plank's." },
      { math: `<span class="m">4.64 m &lt; 5.00 m</span>`, note: "Sanity check: the tipping point lies on the plank, so walking to the very end would tip it." }
    ],
    answer: `The supports push up with <span class="m c2"><i>N</i><sub>A</sub> = 282 N</span> and <span class="m c2"><i>N</i><sub>B</sub> = 698 N</span>. The painter can go <span class="m">0.643 m</span> past B (to 4.64 m from A) before the plank tips.`
  },
  why: `<p>Everything built to stand still is designed with these two equations: bridges, building frames, cranes, shelves, ladders, dams and the bones and muscles of a person holding a pose. Engineers use them to find the forces in each support and member, then size those parts so they do not fail. They also tell you where the danger of tipping lies, from a loaded crane to a bookcase.</p>
<p>Statics is the first course of every civil and mechanical engineering degree, and it is this topic applied with care. In medicine and sports science, the same equations reveal how much larger the muscle and joint forces are than the loads we carry.</p>`,
  careers: [
    { role: "Structural engineer", use: "Computes support reactions of beams and frames from ΣF = 0 and ΣM = 0 before sizing members." },
    { role: "Crane operator", use: "Uses load charts, built from torque balance about the tipping axis, to keep the load moment below the counterweight's." },
    { role: "Civil engineer", use: "Checks retaining walls and dams against overturning by comparing the torques of soil or water pressure and the wall's weight." },
    { role: "Physical therapist", use: "Estimates muscle and joint forces from torque balance about a joint, such as the elbow when a weight is held in the hand." },
    { role: "Stage rigger", use: "Calculates the load on each hanging point of a truss from the positions of lights and speakers." },
    { role: "Aircraft loadmaster", use: "Places cargo so that the torques about the wing's reference point keep the centre of gravity within limits." }
  ],
  life: [
    "Balancing a seesaw with a heavier child sitting closer to the middle",
    "Loading heavy books on the lower shelves so a bookcase does not tip",
    "Carrying a long board with a friend and noticing who takes more weight",
    "Knowing why a ladder's feet need friction on a smooth floor",
    "Keeping a wheelbarrow's load near the wheel to lift it easily"
  ],
  fields: [
    { name: "Civil engineering", use: "Reactions, member forces and overturning checks for every structure start from static equilibrium." },
    { name: "Mechanical engineering", use: "Machine frames, brackets and linkages at rest are analysed with the equilibrium equations." },
    { name: "Architecture", use: "Cantilevers, balconies and load paths are designed so every element is in equilibrium." },
    { name: "Biomechanics and orthopaedics", use: "Muscle and joint forces are estimated from torque balance about joints." }
  ],
  prereqWhy: {
    "mech-torque": "The second equilibrium condition is zero net torque, so each force's torque rF sin θ about the pivot must be found with its sign.",
    "mech-center-mass": "The weight of an extended body acts at its centre of mass, which fixes where the body's own weight enters the torque equation."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-sys-elim": `The force and torque equations form a linear system in the unknown support forces, such as <span class="m"><i>N</i><sub>A</sub> + <i>N</i><sub>B</sub> = 980</span> and <span class="m">4.00<i>N</i><sub>B</sub> = 2793</span>. A well-chosen pivot is elimination done in advance.`,
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `Angled cables and struts are resolved into components, <span class="m"><i>T</i> cos θ</span> and <span class="m"><i>T</i> sin θ</span>, and their lever arms are <span class="m"><i>L</i> sin θ</span>, as for a beam held by a cable at 30.0°.`
  },
  beyond: [
    { field: "Statics", why: "The whole engineering course applies ΣF = 0 and ΣM = 0 to trusses, frames, machines, friction and distributed loads." },
    { field: "Civil Engineering", why: "Support reactions and internal bending moments of beams, found from equilibrium, set the size of every structural member." },
    { field: "Mechanical Engineering", why: "Strength of materials starts from equilibrium of a cut section to find the internal stresses in a part." },
    { field: "Classical Mechanics", why: "Equilibrium becomes the principle of virtual work and the study of stable and unstable equilibria of rigid bodies." }
  ],
  mistakes: [
    { wrong: `Leaving out the plank's own weight and using only the painter's.`, fix: `A body's weight acts at its centre of gravity and must be in both equations: here 294 N at 2.50 m.` },
    { wrong: `Taking torques about a pivot but still writing a torque for the force that acts at that pivot.`, fix: `A force through the pivot has zero lever arm and zero torque about it. That is why you choose a pivot where an unknown force acts.` },
    { wrong: `Using the full distance along the beam for an angled cable: "<span class="m">τ = <i>TL</i></span>".`, fix: `Only the perpendicular part counts: <span class="m">τ = <i>TL</i> sin θ</span>, with θ the angle between the beam and the cable.` },
    { wrong: `Assuming a hinge force points along the beam.`, fix: `A hinge can push in any direction. Give it two unknown components, <span class="m"><i>H</i><sub>x</sub></span> and <span class="m"><i>H</i><sub>y</sub></span>, and let the equations decide.` }
  ],
  practice: [
    { q: `A 30.0 kg child sits 1.60 m from the pivot of a light seesaw. Where must a 40.0 kg child sit to balance it, and what force does the pivot exert?`, a: `<span class="m">(30.0)(9.80)(1.60) = (40.0)(9.80)<i>d</i></span>, so <span class="m"><i>d</i> = 1.20 m</span> on the other side. Pivot force <span class="m">(70.0)(9.80) = 686 N</span> up.` },
    { q: `A uniform 6.00 m beam of mass 50.0 kg is supported at both ends. A 100 kg crate sits 1.50 m from the left end. Find the two support forces.`, a: `Torques about the left end: <span class="m">6.00<i>N</i><sub>R</sub> = 490(3.00) + 980(1.50) = 2940</span>, so <span class="m"><i>N</i><sub>R</sub> = 490 N</span>. Then <span class="m"><i>N</i><sub>L</sub> = 490 + 980 − 490 = 980 N</span>.` },
    { q: `A uniform 4.00 m plank of mass 15.0 kg rests on two supports, each 1.00 m from an end. How far beyond the right support can a 60.0 kg person stand before the plank tips? What is the left support force at that moment?`, a: `Tipping is about the right support, with <span class="m"><i>N</i><sub>left</sub> = 0</span>. The plank's weight, 147 N at 1.00 m on the other side of that support, balances the person's 588 N: <span class="m">588<i>d</i> = 147(1.00)</span>, so <span class="m"><i>d</i> = 0.250 m</span>. The left support then carries zero force.` },
    { q: `A uniform horizontal beam 3.00 m long, mass 20.0 kg, is hinged to a wall and held by a cable from its far end to the wall at 30.0° above the beam. A 50.0 kg load hangs from the far end. Find the cable tension and the hinge force.`, a: `Torques about the hinge: <span class="m"><i>T</i> sin 30.0°(3.00) = 196(1.50) + 490(3.00) = 1764</span>, so <span class="m"><i>T</i> = 1.18 × 10<sup>3</sup> N</span>. Hinge: <span class="m"><i>H</i><sub>x</sub> = <i>T</i> cos 30.0° = 1.02 × 10<sup>3</sup> N</span> away from the wall, <span class="m"><i>H</i><sub>y</sub> = 196 + 490 − 588 = 98.0 N</span> up; <span class="m">|<b>H</b>| = 1.02 × 10<sup>3</sup> N</span>.` }
  ],
  origin: `Archimedes proved the law of the lever, the first torque balance, in <i>On the Equilibrium of Planes</i> (3rd century BCE). Simon Stevin's <i>De Beghinselen der Weeghconst</i> (1586) extended statics to inclined planes, with his famous "wreath of spheres" argument, and to the composition of forces.`
};
