window.ARITH = window.ARITH || {};

ARITH["mech-newton-3"] = {
  title: "Newton's Third Law",
  short: "Forces come in equal and opposite pairs",
  grade: "College PHYS 1xx · University Physics I",
  hours: 4,
  voice: "plain",
  eyebrow: "Mechanics · Newton's laws",
  hero: `<span class="m"><span class="c2"><b>F</b><sub>AB</sub></span> = −<span class="c3"><b>F</b><sub>BA</sub></span></span>`,
  lede: `When body B pushes on body A, A pushes back on B with a force of the same size in the opposite direction. The two forces act on <b>different</b> bodies, so they never cancel each other, and each body gets its own <span class="c1">acceleration</span>.`,
  plain: `<p>You cannot touch without being touched. Press a wall with your hand and the wall presses your hand just as hard. Two skaters on ice push off each other: both move, in opposite directions, even if only one of them "did the pushing". A force is always an interaction between two bodies, and the third law says the two halves of that interaction are equal in size and opposite in direction.</p>
<p>The key detail is <b>who feels which force</b>. The push on the light skater acts on the light skater; the push on the heavy skater acts on the heavy skater. Since they act on different bodies, they are never added together in the same free-body diagram, so they cannot cancel. Each skater's acceleration comes from the force on that skater alone, divided by that skater's mass: the lighter one accelerates more.</p>
<p>This is also how anything gets moving. You walk because your foot pushes the ground backward and the ground pushes you forward. A rocket pushes exhaust gas backward and the gas pushes the rocket forward. A swimmer pushes water back and the water pushes the swimmer ahead.</p>`,
  formal: `<p><b>Newton's third law.</b> If body B exerts a force <span class="m c2"><b>F</b><sub>AB</sub></span> on body A, then A simultaneously exerts a force <span class="m c3"><b>F</b><sub>BA</sub></span> on B, with</p>
<div class="display"><span class="c2"><b>F</b><sub>AB</sub></span> = −<span class="c3"><b>F</b><sub>BA</sub></span> &nbsp;&nbsp;<span class="dim">(subscript: force <i>on</i> the first body <i>by</i> the second)</span><br><span class="c1"><i>a</i><sub>A</sub></span> = <span class="fr"><span><i>F</i></span><span><i>m</i><sub>A</sub></span></span>, &nbsp; <span class="c1"><i>a</i><sub>B</sub></span> = <span class="fr"><span><i>F</i></span><span><i>m</i><sub>B</sub></span></span> &nbsp;<span class="dim">when the pair is the only horizontal force on each body</span></div>
<p>The two members of a <b>third-law pair</b> are of the same type (both contact, both gravitational…), act at the same time, and act on different bodies. They are not the same as two forces that balance on one body: a book's weight and the table's normal force both act on the book and are not a third-law pair; the partner of the book's weight is the book's gravitational pull on Earth.</p>
<p>For a system of bodies, internal forces cancel in pairs, so only external forces change the total momentum: <span class="m">Σ<b>F</b><sub>ext</sub> = d<b>P</b>/d<i>t</i></span>. This is the root of momentum conservation.</p>`,
  legend: [
    { c: "c2", sym: `<b>F</b><sub>AB</sub>`, name: "Force on A", desc: "The force that B exerts on A. It goes in A's free-body diagram only." },
    { c: "c3", sym: `<b>F</b><sub>BA</sub>`, name: "Force on B", desc: "The force that A exerts on B: same magnitude as the force on A, opposite direction, acting on B." },
    { c: "c1", sym: `<i>a</i><sub>A</sub>, <i>a</i><sub>B</sub>`, name: "Accelerations", desc: "Each body's own acceleration, its net force over its own mass. Equal forces on unequal masses give unequal accelerations." }
  ],
  steps: { title: "How to use the third law", items: [
    `Name each interaction as "force on X by Y". Every such force has a partner "force on Y by X".`,
    `Draw a separate free-body diagram for each body. Put the <span class="c2">force on A</span> only on A and the <span class="c3">force on B</span> only on B.`,
    `Give the pair the same magnitude symbol (for example <span class="m"><i>P</i></span>) with opposite directions.`,
    `Write <span class="m">Σ<b>F</b> = <i>m</i><b>a</b></span> for each body. With a shared unknown force you get a system of equations; add them to eliminate it.`,
    `Solve for the <span class="c1">accelerations</span> and the interaction force, then check that the lighter body has the larger acceleration.`
  ] },
  example: {
    prompt: `Two skaters stand at rest on smooth ice: Ana (50.0 kg) and Ben (80.0 kg). They push palms together with a force of 120 N for 0.800 s. Ignoring friction, find each skater's acceleration and speed when they separate.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>F</i><sub>Ana, Ben</sub></span> = <span class="c3"><i>F</i><sub>Ben, Ana</sub></span> = 120 N</span>`, note: "Third law: Ana feels 120 N backward, Ben feels 120 N forward, whoever does the pushing." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub>Ana</sub></span> = <span class="fr"><span>120 N</span><span>50.0 kg</span></span> = <span class="c1">2.40 m/s²</span></span>`, note: "Each body uses only the force acting on it." },
      { math: `<span class="m"><span class="c1"><i>a</i><sub>Ben</sub></span> = <span class="fr"><span>120 N</span><span>80.0 kg</span></span> = <span class="c1">1.50 m/s²</span></span>`, note: "Same force, larger mass, smaller acceleration, opposite direction." },
      { math: `<span class="m"><i>v</i><sub>Ana</sub> = (2.40 m/s²)(0.800 s) = 1.92 m/s, &nbsp;<i>v</i><sub>Ben</sub> = (1.50 m/s²)(0.800 s) = 1.20 m/s</span>`, note: "From rest, v = at, in opposite directions." },
      { math: `<span class="m">(50.0 kg)(1.92 m/s) = 96.0 kg·m/s = (80.0 kg)(1.20 m/s)</span>`, note: "Sanity check: equal and opposite momenta, so the total stays zero as it started." }
    ],
    answer: `Ana accelerates at <span class="m c1">2.40 m/s²</span> and leaves at 1.92 m/s; Ben accelerates at <span class="m c1">1.50 m/s²</span> the other way and leaves at 1.20 m/s.`
  },
  why: `<p>The third law explains how anything starts to move. A car, a runner, a boat and a rocket all push something backward and are pushed forward by it. It also decides which forces belong in a free-body diagram: every force on your chosen body has a partner acting on something else, and that partner stays out of your equations.</p>
<p>Applied to a whole system, the law makes all internal forces cancel. That is why the total momentum of an isolated system is conserved, one of the most useful results in physics, from car crashes to particle collisions.</p>`,
  careers: [
    { role: "Rocket propulsion engineer", use: "Designs engines around the fact that the force pushing exhaust backward equals the thrust pushing the vehicle forward." },
    { role: "Automotive safety engineer", use: "Uses equal collision forces on a truck and a car to show why the lighter car's occupants get much larger accelerations." },
    { role: "Sports biomechanist", use: "Measures the ground's push on a sprinter's foot with force plates, the partner of the push the foot gives the ground." },
    { role: "Naval architect", use: "Sizes propellers from the thrust the water exerts on the blades as they push water backward." },
    { role: "Robotics engineer", use: "Accounts for the reaction force and torque on a robot's base when its arm accelerates a heavy payload." },
    { role: "Firefighter", use: "Braces against the backward reaction force of a high-pressure hose, which can exceed several hundred newtons." }
  ],
  life: [
    "Walking and running by pushing backward on the ground",
    "Feeling a gun, fire hose or garden hose kick back",
    "Stepping off a small boat and watching it drift away from the dock",
    "Swimming by pushing water backward with your hands and feet",
    "Balloon rockets and water rockets"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Jet and rocket thrust are third-law reaction forces on the expelled gas." },
    { name: "Mechanical engineering", use: "Bearing, joint and fastener loads come in action–reaction pairs between connected parts." },
    { name: "Biomechanics", use: "Ground-reaction forces measured under the feet reveal the forces muscles produce." },
    { name: "Marine engineering", use: "Propellers and paddles produce thrust by pushing water backward." }
  ],
  prereqWhy: {
    "mech-newton-1": "The first law's idea of force as an interaction that changes motion, and of free-body diagrams in an inertial frame, is needed to see that forces come in pairs acting on different bodies."
  },
  unlocksWhy: {
    "mech-common-forces": "Normal force and tension are contact forces with third-law partners, such as the scale pushing up on you while you push down on the scale.",
    "mech-impulse": "Equal and opposite forces over the same contact time give equal and opposite impulses, the basis of momentum conservation.",
    "mech-gravitation": "Newton's law of gravitation is a third-law pair: Earth pulls the Moon exactly as hard as the Moon pulls Earth."
  },
  mathWhy: {
    "a1-sys-elim": `Connected bodies give one equation per body sharing the unknown contact force, such as <span class="m"><i>F</i> − <i>P</i> = <i>m</i><sub>A</sub><i>a</i></span> and <span class="m"><i>P</i> = <i>m</i><sub>B</sub><i>a</i></span>; adding them eliminates <span class="m"><i>P</i></span> and gives <span class="m"><i>a</i></span>.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Cancellation of internal forces in pairs is what lets a many-particle system be treated through its centre of mass and total momentum." },
    { field: "Electricity & Magnetism", why: "Coulomb forces obey the third law, while magnetic forces between moving charges show where it fails unless field momentum is included." },
    { field: "Aerospace Engineering", why: "Every propulsion system, from propellers to ion thrusters, produces thrust as a reaction force on expelled mass." },
    { field: "Statics", why: "Joint and support forces in trusses and frames are handled as equal and opposite pairs on connected members." }
  ],
  mistakes: [
    { wrong: `"The forces are equal and opposite, so they cancel and nothing can move."`, fix: `The pair acts on <b>different</b> bodies. Only forces on the same body are added, so each body can accelerate.` },
    { wrong: `Calling a book's weight and the table's normal force a third-law pair.`, fix: `Both act on the book. The partner of the weight is the book's pull on Earth; the partner of the normal force is the book's push down on the table.` },
    { wrong: `"In a truck–car crash, the truck hits the car harder."`, fix: `The forces on truck and car are equal in magnitude at every instant. The car's larger acceleration comes from its smaller mass.` },
    { wrong: `Putting both members of the pair in one free-body diagram.`, fix: `Each diagram shows only the forces <i>on</i> that body. Its partners appear in the other bodies' diagrams.` }
  ],
  practice: [
    { q: `A 0.200 kg apple falls from a tree. What force does the apple exert on Earth, and what acceleration does that give Earth (<span class="m"><i>M</i> = 5.97 × 10<sup>24</sup> kg</span>)?`, a: `The apple's weight is <span class="m">(0.200)(9.80) = 1.96 N</span> down, so it pulls Earth up with <span class="m">1.96 N</span>. Earth's acceleration is <span class="m">1.96/(5.97 × 10<sup>24</sup>) = 3.28 × 10<sup>−25</sup> m/s²</span>, far too small to notice.` },
    { q: `A 3.00 × 10<sup>3</sup> kg truck hits a 1.00 × 10<sup>3</sup> kg car. At one instant the car feels a force of 2.40 × 10<sup>4</sup> N. Find the force on the truck and both accelerations at that instant.`, a: `The truck feels <span class="m">2.40 × 10<sup>4</sup> N</span> in the opposite direction. <span class="m"><i>a</i><sub>car</sub> = 2.40 × 10<sup>4</sup>/1.00 × 10<sup>3</sup> = 24.0 m/s²</span>; <span class="m"><i>a</i><sub>truck</sub> = 2.40 × 10<sup>4</sup>/3.00 × 10<sup>3</sup> = 8.00 m/s²</span>.` },
    { q: `On a frictionless floor, a 36.0 N horizontal push acts on block A (4.00 kg), which pushes block B (2.00 kg) in front of it. Find the acceleration and the contact force between the blocks.`, a: `A: <span class="m">36.0 − <i>P</i> = 4.00<i>a</i></span>; B: <span class="m"><i>P</i> = 2.00<i>a</i></span>. Adding: <span class="m">36.0 = 6.00<i>a</i></span>, so <span class="m"><i>a</i> = 6.00 m/s²</span> and <span class="m"><i>P</i> = 12.0 N</span> (A pushes B forward with 12.0 N; B pushes A back with 12.0 N).` },
    { q: `An 80.0 kg astronaut floating in space pulls on a rope tied to a 400 kg capsule with a steady 40.0 N for 2.00 s. Both start at rest. Find each one's speed at the end and how much closer together they have moved.`, a: `<span class="m"><i>a</i><sub>astro</sub> = 40.0/80.0 = 0.500 m/s²</span>, <span class="m"><i>a</i><sub>cap</sub> = 40.0/400 = 0.100 m/s²</span>. Speeds <span class="m">1.00 m/s</span> and <span class="m">0.200 m/s</span>, toward each other. Gap closed: <span class="m">½(0.500 + 0.100)(2.00)<sup>2</sup> = 1.20 m</span>.` }
  ],
  origin: `Newton stated the third law in the <i>Principia</i> (1687): "To every action there is always opposed an equal reaction." He supported it with experiments on colliding pendulum bobs, earlier studied by Wren, Wallis and Huygens.`
};
