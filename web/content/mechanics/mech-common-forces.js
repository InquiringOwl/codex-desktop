window.ARITH = window.ARITH || {};

ARITH["mech-common-forces"] = {
  title: "Normal, Tension & Spring Forces",
  short: "Support, rope and spring forces in free-body diagrams",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · Newton's laws",
  hero: `<span class="m"><span class="c4"><i>N</i></span> = <i>m</i>(<i>g</i> + <i>a</i>) &nbsp;&nbsp; <span class="c2"><i>T</i></span> &nbsp;&nbsp; <span class="c3"><i>F</i><sub>s</sub></span> = −<i>kx</i></span>`,
  lede: `Surfaces push back with a <span class="c4">normal force</span>, ropes pull with a <span class="c2">tension</span>, springs push or pull with a <span class="c3">force proportional to their stretch</span>. None of them has a fixed size: each one takes whatever value the second law requires.`,
  plain: `<p>A book on a table does not fall through it because the table pushes up. That push is the <b>normal force</b> (normal means perpendicular): the surface is squeezed a tiny amount and pushes back at right angles to itself. On a level table with nothing else going on, it just balances the weight. Press down on the book and the table pushes harder. Ride an elevator that speeds up going up and the floor pushes you harder than your weight, which is why you feel heavier and why a scale under you reads more.</p>
<p>A rope or cable can only pull, along its own length. That pull is the <b>tension</b>. For a light rope, the tension is the same all along it, and a smooth pulley just changes its direction. When a lamp hangs from two ropes at angles, the vertical parts of the two tensions must add up to the lamp's weight, so shallow ropes carry far more tension than the weight itself.</p>
<p>A spring pushes or pulls back toward its relaxed length, and the force grows in proportion to how far you stretch or squeeze it. That is <b>Hooke's law</b>, <span class="m"><i>F</i> = −<i>kx</i></span>. The spring constant <span class="m"><i>k</i></span> says how stiff it is; the minus sign says the force points back toward equilibrium.</p>`,
  formal: `<p><b>Normal force.</b> A contact force <span class="m c4"><b>N</b></span> perpendicular to the surface, pointing away from it. It is a constraint force: its magnitude is whatever makes the perpendicular acceleration match the motion, found from <span class="m">Σ<i>F</i><sub>⊥</sub> = <i>ma</i><sub>⊥</sub></span>. It cannot be negative; <span class="m"><i>N</i> = 0</span> means contact is lost.</p>
<div class="display">level floor, vertical acceleration <i>a</i> (up +): &nbsp; <span class="c4"><i>N</i></span> − <i>mg</i> = <i>ma</i> &nbsp;⇒&nbsp; <span class="c4"><i>N</i></span> = <i>m</i>(<i>g</i> + <i>a</i>)<br>incline at angle θ, no acceleration perpendicular to it: &nbsp; <span class="c4"><i>N</i></span> = <i>mg</i> cos θ</div>
<p><b>Tension.</b> The pulling force <span class="m c2"><b>T</b></span> exerted by a rope, cable or string, directed along it away from the body. For a massless, unstretchable string, the tension is the same at every point, and an ideal (massless, frictionless) pulley changes its direction without changing its magnitude. A mass hanging at rest from strings at angles <span class="m">θ<sub>1</sub>, θ<sub>2</sub></span> above the horizontal satisfies</p>
<div class="display"><span class="c2"><i>T</i><sub>1</sub></span> cos θ<sub>1</sub> = <span class="c2"><i>T</i><sub>2</sub></span> cos θ<sub>2</sub>, &nbsp;&nbsp; <span class="c2"><i>T</i><sub>1</sub></span> sin θ<sub>1</sub> + <span class="c2"><i>T</i><sub>2</sub></span> sin θ<sub>2</sub> = <span class="c1"><i>mg</i></span></div>
<p><b>Hooke's law.</b> An ideal spring displaced by <span class="m"><i>x</i></span> from its relaxed length exerts <span class="m"><span class="c3"><i>F</i><sub>s</sub></span> = −<i>kx</i></span>, a <b>restoring force</b>, with spring constant <span class="m"><i>k</i></span> in N/m. The graph of force against extension is a straight line of slope <span class="m">−<i>k</i></span>; real springs follow it only below their elastic limit.</p>`,
  legend: [
    { c: "c4", sym: `<i>N</i>`, name: "Normal force", desc: "The push of a surface, perpendicular to it. Its size adjusts to the situation; it equals mg only in the simplest case." },
    { c: "c2", sym: `<i>T</i>`, name: "Tension", desc: "The pull of a rope or cable along its length. Same throughout an ideal rope, redirected by an ideal pulley." },
    { c: "c3", sym: `<i>F</i><sub>s</sub> = −<i>kx</i>`, name: "Spring force", desc: "Proportional to the stretch or compression x and directed back toward the relaxed length. k is the stiffness in N/m." },
    { c: "c1", sym: `<i>mg</i>`, name: "Weight / result", desc: "The weight being supported, or the quantity the lab solves for (a scale reading, a tension, an extension)." }
  ],
  steps: { title: "How to find normal, tension and spring forces", items: [
    `Isolate one body and draw every force on it: <span class="c1">weight</span> down, <span class="c4">normal</span> perpendicular out of each contact surface, <span class="c2">tension</span> along each rope away from the body, <span class="c3">spring force</span> toward the spring's relaxed length.`,
    `Choose axes: along and perpendicular to a surface, or horizontal and vertical for hanging objects.`,
    `Resolve angled forces with sine and cosine and write <span class="m">Σ<i>F</i><sub>x</sub> = <i>ma</i><sub>x</sub></span>, <span class="m">Σ<i>F</i><sub>y</sub> = <i>ma</i><sub>y</sub></span> (zero for bodies at rest).`,
    `For a spring, use <span class="m">|<i>F</i>| = <i>k</i>|<i>x</i>|</span> for the size and the diagram for the direction.`,
    `Solve the equations. Check that <span class="m"><i>N</i> ≥ 0</span> and <span class="m"><i>T</i> ≥ 0</span>; a negative value means the contact is lost or the rope has gone slack.`
  ] },
  example: {
    prompt: `A 70.0 kg passenger stands on a bathroom scale in an elevator that is accelerating upward at 2.00 m/s². What does the scale read, in newtons and in the "kilograms" a scale calibrated for Earth would display?`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>N</i></span> − <i>mg</i> = <i>ma</i></span>`, note: "Forces on the passenger: normal force from the scale up, weight down. Take up as positive." },
      { math: `<span class="m"><span class="c4"><i>N</i></span> = <i>m</i>(<i>g</i> + <i>a</i>) = (70.0 kg)(9.80 + 2.00) m/s²</span>`, note: "Solve for the normal force." },
      { math: `<span class="m"><span class="c1"><i>N</i> = 826 N</span></span>`, note: "The scale reads the force the passenger presses on it, which by the third law equals N." },
      { math: `<span class="m"><span class="fr"><span>826 N</span><span>9.80 m/s²</span></span> = 84.3 kg</span>`, note: "A scale calibrated as N/g would display this apparent mass." },
      { math: `<span class="m"><i>a</i> = 0: <i>N</i> = 686 N; &nbsp; <i>a</i> = −<i>g</i>: <i>N</i> = 0</span>`, note: "Limiting cases: at constant velocity the reading is the true weight; in free fall it drops to zero." }
    ],
    answer: `The scale reads <span class="m c1">826 N</span>, displayed as about 84.3 kg, 140 N more than the passenger's true weight of 686 N.`
  },
  why: `<p>Almost every mechanics problem contains at least one of these forces. Floors, ramps and road surfaces supply normal forces; cables, ropes, belts and chains supply tensions; springs, rubber, tendons and even the bonds in solids behave like Hooke's-law springs for small deformations. Knowing how each one points, and that its size must be solved for, is what makes free-body diagrams work.</p>
<p>These forces also set limits. Friction is proportional to the normal force, so anything that changes <span class="m"><i>N</i></span> changes grip. Cables are rated by the tension they can take, and the angle of the rigging can multiply that tension several times.</p>`,
  careers: [
    { role: "Rigger", use: "Calculates sling tensions from the sling angle, since a 30° sling angle doubles the tension compared with a vertical lift." },
    { role: "Elevator engineer", use: "Sizes cables and motors from the tension m(g + a) at maximum load and acceleration." },
    { role: "Structural engineer", use: "Finds cable forces in suspension and cable-stayed bridges from the equilibrium of each joint." },
    { role: "Mechanical engineer", use: "Chooses spring constants for valves, suspensions and switches using F = kx at the required deflection." },
    { role: "Physical therapist", use: "Uses resistance bands and spring scales whose force grows with stretch to set exercise loads." },
    { role: "Materials scientist", use: "Measures stiffness from the linear part of a force–extension curve before the elastic limit." }
  ],
  life: [
    "Feeling heavier when an elevator starts going up and lighter when it starts going down",
    "Hanging a picture with a wire, where a flatter wire is under more tension",
    "Weighing produce on a spring scale in a supermarket",
    "Pressing down on a bathroom scale and watching the reading rise",
    "Car suspension springs compressing when passengers get in"
  ],
  fields: [
    { name: "Civil engineering", use: "Support reactions, cable forces and member tensions are found from equilibrium of normal and tension forces." },
    { name: "Mechanical engineering", use: "Springs, belts, cables and bearing contacts are modelled with Hooke's law, tension and normal forces." },
    { name: "Materials science", use: "Hooke's law is the small-strain limit of stress and strain, which defines Young's modulus." },
    { name: "Biomechanics", use: "Tendons and ligaments are modelled as springs; joint contact forces are normal forces." }
  ],
  prereqWhy: {
    "mech-newton-2": "Normal force and tension have no formula of their own; their values come from writing ΣF = ma for the body, as in N = m(g + a).",
    "mech-newton-3": "Every contact force has a partner: the scale pushes up on you as you push down on it, and a rope pulls equally on the bodies at both ends."
  },
  unlocksWhy: {
    "mech-friction": "Kinetic and maximum static friction are proportional to the normal force, so N must be found first.",
    "mech-centripetal": "The inward force in circular motion is often supplied by a tension, a normal force or a component of one, such as the normal force on a banked curve.",
    "mech-potential": "The spring force F = −kx is the standard conservative force; integrating it gives the elastic potential energy ½kx²."
  },
  mathWhy: {
    "pa-proportional": `Hooke's law <span class="m">|<i>F</i>| = <i>k</i>|<i>x</i>|</span> is a proportional relationship with constant <span class="m"><i>k</i></span>: double the stretch, double the force.`,
    "a1-slope-forms": `The spring constant is the slope of the force–extension graph; reading <span class="m"><i>k</i> = Δ<i>F</i>/Δ<i>x</i></span> from measured points is a slope calculation.`,
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `Resolving a tension at angle θ into <span class="m"><i>T</i> cos θ</span> and <span class="m"><i>T</i> sin θ</span>, and getting <span class="m"><i>N</i> = <i>mg</i> cos θ</span> on an incline, both use the right-triangle ratios.`
  },
  beyond: [
    { field: "Waves & Fluids", why: "The simple harmonic oscillator is a mass on a Hooke's-law spring, and wave speed on a string depends on its tension." },
    { field: "Statics", why: "Trusses, cables and supports are solved by balancing tensions and normal (reaction) forces at every joint." },
    { field: "Condensed Matter Physics", why: "Atoms in a crystal are modelled as masses joined by springs, giving phonons and elastic constants." },
    { field: "Civil Engineering", why: "Cable structures, suspension bridges and rigging design depend on tension resolved along each member." }
  ],
  mistakes: [
    { wrong: `Writing <span class="m"><i>N</i> = <i>mg</i></span> every time.`, fix: `<span class="m"><i>N</i> = <i>mg</i></span> only when the surface is level, nothing else pushes perpendicular to it and there is no perpendicular acceleration. Otherwise solve <span class="m">Σ<i>F</i><sub>⊥</sub> = <i>ma</i><sub>⊥</sub></span>, e.g. <span class="m"><i>N</i> = <i>m</i>(<i>g</i> + <i>a</i>)</span> in an elevator.` },
    { wrong: `Drawing tension pushing on a body, or pointing it along the direction of motion.`, fix: `A rope can only pull, along its own length, away from the body it is attached to.` },
    { wrong: `Assuming each of two ropes holding a weight carries half the weight.`, fix: `Only the vertical components share the weight. At 30° above horizontal each rope of a symmetric pair carries <span class="m"><i>T</i> = <i>mg</i>/(2 sin 30°) = <i>mg</i></span>, the full weight.` },
    { wrong: `Using the spring's total length for <span class="m"><i>x</i></span> in <span class="m"><i>F</i> = <i>kx</i></span>.`, fix: `<span class="m"><i>x</i></span> is the change from the relaxed length. A 10.0 cm spring stretched to 13.0 cm has <span class="m"><i>x</i> = 3.0 cm</span>.` }
  ],
  practice: [
    { q: `A 0.500 kg mass hung from a vertical spring stretches it by 4.90 cm at rest. Find the spring constant, and the stretch when a 1.20 kg mass hangs instead.`, a: `At rest <span class="m"><i>kx</i> = <i>mg</i></span>: <span class="m"><i>k</i> = (0.500)(9.80)/0.0490 = 100 N/m</span>. Then <span class="m"><i>x</i> = (1.20)(9.80)/100 = 0.118 m = 11.8 cm</span>.` },
    { q: `A 1.50 kg book lies on a level table while you press straight down on it with 10.0 N. What is the normal force on the book?`, a: `<span class="m"><i>N</i> − <i>mg</i> − 10.0 = 0</span>, so <span class="m"><i>N</i> = 14.7 + 10.0 = 24.7 N</span>, more than the book's weight.` },
    { q: `A 20.0 kg sign hangs at rest from two ropes, each at 30.0° above the horizontal, symmetric about the sign. Find the tension in each rope. What happens to the tension as the ropes approach horizontal?`, a: `<span class="m">2<i>T</i> sin 30.0° = <i>mg</i></span>, so <span class="m"><i>T</i> = 196/(2 × 0.500) = 196 N</span>, each rope as much as the whole weight. As θ → 0, <span class="m"><i>T</i> = <i>mg</i>/(2 sin θ) → ∞</span>: ropes can never be pulled perfectly straight.` },
    { q: `A 15.0 kg lamp hangs from two cords: one at 30.0° and one at 60.0° above the horizontal. Find both tensions.`, a: `<span class="m"><i>T</i><sub>1</sub> cos 30.0° = <i>T</i><sub>2</sub> cos 60.0°</span> and <span class="m"><i>T</i><sub>1</sub> sin 30.0° + <i>T</i><sub>2</sub> sin 60.0° = 147 N</span>. Solving: <span class="m"><i>T</i><sub>1</sub> = 73.5 N</span> (30° cord), <span class="m"><i>T</i><sub>2</sub> = 127 N</span> (60° cord). The steeper cord carries more.` }
  ],
  origin: `Robert Hooke published his law in 1678 in <i>De Potentia Restitutiva</i> as the Latin phrase "ut tensio, sic vis" ("as the extension, so the force"), having first released it as an anagram in 1676.`
};
