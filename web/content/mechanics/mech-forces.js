window.ARITH = window.ARITH || {};

ARITH["mech-forces"] = {
  title: "Forces & Free-Body Diagrams",
  short: "Forces are vectors; the net force is their sum",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · Newton's laws",
  hero: `<span class="m"><span class="c1"><b>F</b><sub>net</sub></span> = Σ<b>F</b> = <span class="c2"><b>T</b></span> + <span class="c3"><b>w</b></span> + <span class="c4"><b>N</b></span> + ⋯</span>`,
  lede: `A force is a push or pull that one object exerts on another. Forces are vectors, so they add tip to tail, and what matters for motion is their vector sum, the <span class="c1">net force</span>.`,
  plain: `<p>Every force has a <b>source</b>: something that does the pushing or pulling. A rope pulls with a <span class="c2">tension</span> along its length. The Earth pulls every object downward with its <span class="c3">weight</span>. A surface pushes back on whatever presses on it with a <span class="c4">normal force</span>, perpendicular to the surface ("normal" means perpendicular). Friction and air drag push along a surface or against the motion.</p>
<p>A force has a size and a direction, so it is a vector. Two people pulling a sled with 100 N each do not always give 200 N: if they pull at right angles the sled feels about 141 N, and if they pull in opposite directions it feels nothing. The <b>net force</b> is the vector sum of all the forces on the object.</p>
<p>A <b>free-body diagram</b> is the tool for finding it. Draw the object as a dot, then draw an arrow for each force acting <i>on</i> that object, starting at the dot, pointing the way the force acts. Leave out forces the object exerts on other things. Then add the arrows by components.</p>`,
  formal: `<p>A <b>force</b> <span class="m"><b>F</b></span> is a vector quantity measured in newtons, <span class="m">1 N = 1 kg·m/s²</span>. Forces are <b>contact forces</b> (normal, tension, friction, drag, spring) or <b>field forces</b> acting at a distance (gravitational, electric, magnetic). The <b>net external force</b> on a body is the vector sum of every force exerted on it by other bodies:</p>
<div class="display"><span class="c1"><b>F</b><sub>net</sub> = Σ<b>F</b> = <b>F</b><sub>1</sub> + <b>F</b><sub>2</sub> + ⋯</span>, &nbsp;&nbsp; <i>F</i><sub>net,<i>x</i></sub> = Σ<i>F<sub>x</sub></i>, &nbsp; <i>F</i><sub>net,<i>y</i></sub> = Σ<i>F<sub>y</sub></i><br>|<b>F</b><sub>net</sub>| = √((Σ<i>F<sub>x</sub></i>)<sup>2</sup> + (Σ<i>F<sub>y</sub></i>)<sup>2</sup>), &nbsp;&nbsp; θ = tan<sup>−1</sup>(Σ<i>F<sub>y</sub></i> / Σ<i>F<sub>x</sub></i>)</div>
<p>Near Earth's surface the gravitational force on a body of mass <span class="m"><i>m</i></span> is its <span class="c3">weight</span> <span class="m c3"><b>w</b> = <i>m</i><b>g</b></span>, magnitude <span class="m"><i>mg</i></span> with <span class="m"><i>g</i> = 9.80 m/s²</span>, directed down. The <span class="c4">normal force</span> <span class="m c4"><b>N</b></span> is perpendicular to the contact surface and pushes away from it; its size is whatever the situation requires. <span class="c2">Tension</span> <span class="m c2"><b>T</b></span> acts along a taut rope, away from the body. A <b>free-body diagram</b> shows only the external forces on one isolated body, each drawn from a single point.</p>`,
  legend: [
    { c: "c2", sym: `<b>T</b>, <b>F</b><sub>app</sub>`, name: "Tension / applied force", desc: "A pull along a rope or cable, or a push or pull applied by a person or machine." },
    { c: "c3", sym: `<b>w</b> = <i>m</i><b>g</b>`, name: "Weight", desc: "Earth's gravitational pull, always straight down, magnitude <span class=\"m\"><i>mg</i></span>." },
    { c: "c4", sym: `<b>N</b>`, name: "Normal force", desc: "The push of a surface on an object, perpendicular to the surface and away from it." },
    { c: "c1", sym: `<b>F</b><sub>net</sub>`, name: "Net force", desc: "The vector sum of all external forces on the body. Zero when the forces balance." }
  ],
  steps: { title: "How to draw a free-body diagram and find the net force", items: [
    `Pick one object and imagine it isolated. Represent it by a dot.`,
    `Draw its <span class="c3">weight</span> first: <span class="m"><i>mg</i></span> straight down.`,
    `Go around the object: at every point where something touches it, add the contact force (<span class="c4">normal</span> perpendicular to the surface, <span class="c2">tension</span> along each rope, friction along the surface).`,
    `Check each arrow has a source: an object that exerts it. Delete any "force of motion" or force the object exerts on something else.`,
    `Choose axes (often along and perpendicular to a surface), resolve each force into components, and sum them: <span class="m">Σ<i>F<sub>x</sub></i></span>, <span class="m">Σ<i>F<sub>y</sub></i></span>.`,
    `Combine into <span class="m c1"><b>F</b><sub>net</sub></span> with the Pythagorean theorem and an inverse tangent.`
  ] },
  example: {
    prompt: `Two tugboats pull a ship with horizontal cables. Tug 1 pulls with <span class="m">4.00 × 10<sup>4</sup></span> N at 20.0° north of east; tug 2 pulls with <span class="m">3.00 × 10<sup>4</sup></span> N at 35.0° south of east. Find the net force of the two tugs on the ship.`,
    lines: [
      { math: `<span class="m c2"><b>T</b><sub>1</sub> = (4.00 × 10<sup>4</sup>)(cos 20.0° î + sin 20.0° ĵ) = (3.759 î + 1.368 ĵ) × 10<sup>4</sup> N</span>`, note: "x east, y north. Resolve each tension into components." },
      { math: `<span class="m c2"><b>T</b><sub>2</sub> = (3.00 × 10<sup>4</sup>)(cos 35.0° î − sin 35.0° ĵ) = (2.457 î − 1.721 ĵ) × 10<sup>4</sup> N</span>`, note: "South of east, so the y-component is negative." },
      { math: `<span class="m">Σ<i>F<sub>x</sub></i> = 6.216 × 10<sup>4</sup> N, &nbsp; Σ<i>F<sub>y</sub></i> = −0.353 × 10<sup>4</sup> N</span>`, note: "Add like components." },
      { math: `<span class="m"><span class="c1">|<b>F</b><sub>net</sub>|</span> = √(6.216<sup>2</sup> + 0.353<sup>2</sup>) × 10<sup>4</sup> = <span class="c1">6.23 × 10<sup>4</sup> N</span></span>`, note: "Magnitude of the net force." },
      { math: `<span class="m">θ = tan<sup>−1</sup>(−0.353/6.216) = −3.25°</span>`, note: "Direction: 3.25° south of east." },
      { math: `<span class="m">6.23 × 10<sup>4</sup> &lt; 4.00 × 10<sup>4</sup> + 3.00 × 10<sup>4</sup> ✓</span>`, note: "Check: the net force is less than the sum of the magnitudes because the tugs pull at an angle, and it points between them, closer to the stronger tug's line." }
    ],
    answer: `The tugs exert a net force of <span class="m c1">6.23 × 10<sup>4</sup> N</span> directed <span class="m">3.25°</span> south of east.`
  },
  why: `<p>Every question about why something moves, stays put or breaks starts with the forces on it. Engineers size cables, beams and bolts from the forces they must carry. Doctors and physiotherapists reason about the forces on joints and bones. A free-body diagram is the standard first step in all of these, because it forces you to list every interaction and nothing else.</p>
<p>Newton's laws are statements about the net force, so this topic is the entry point to dynamics. Newton's first law says what happens when the net force is zero; the second says how a nonzero net force changes the velocity; the third pairs up the forces two bodies exert on each other.</p>`,
  careers: [
    { role: "Structural engineer", use: "Draws free-body diagrams of beams, joints and cables to find the forces each member must carry." },
    { role: "Physical therapist", use: "Reasons about muscle, joint-reaction and gravitational forces on a limb when designing exercises and braces." },
    { role: "Crane operator and rigger", use: "Computes sling tensions for a load lifted with cables at an angle, which grow as the angle to the horizontal shrinks." },
    { role: "Mechanical engineer", use: "Sums the forces on machine parts to check that bearings, brackets and fasteners are not overloaded." },
    { role: "Biomechanics researcher", use: "Combines force-plate measurements with body weight to find the net force on an athlete during a jump or landing." },
    { role: "Naval architect", use: "Adds tug, mooring-line and wind forces as vectors when planning how to hold or turn a ship in harbour." }
  ],
  life: [
    "Hanging a picture with two wires and seeing why a shallow angle strains them more",
    "Pulling a suitcase by a slanted handle",
    "Two people carrying a heavy box and sharing its weight",
    "Tying down a load on a roof rack with straps at an angle",
    "Understanding why a sagging washing line pulls hard on its posts"
  ],
  fields: [
    { name: "Civil and structural engineering", use: "Statics of trusses, beams and cables starts with free-body diagrams and vector sums of forces." },
    { name: "Biomechanics and kinesiology", use: "Forces in muscles, tendons and joints are found from free-body diagrams of body segments." },
    { name: "Mechanical engineering", use: "Machine design balances the forces on every component." },
    { name: "Naval and aerospace engineering", use: "Thrust, lift, drag, buoyancy and weight are combined as vectors to predict motion." }
  ],
  prereqWhy: {
    "mech-components": "Every force is resolved into x and y components, summed, and recombined into the magnitude and direction of the net force.",
    "mech-acceleration": "A force matters because it changes velocity; knowing acceleration as the rate of change of velocity is what the net force will be tied to in Newton's laws."
  },
  unlocksWhy: {
    "mech-newton-1": "Newton's first law is a statement about a zero net force, found by summing the forces on a free-body diagram."
  },
  mathWhy: {
    "trig-vectors": `Each force is a vector given by magnitude and direction; writing it as <span class="m"><i>F</i> cos θ î + <i>F</i> sin θ ĵ</span> and adding components gives the net force.`,
    "pa-pythagorean": `The net force's magnitude is <span class="m">√((Σ<i>F<sub>x</sub></i>)<sup>2</sup> + (Σ<i>F<sub>y</sub></i>)<sup>2</sup>)</span>, as for two forces at right angles, <span class="m">√(100<sup>2</sup> + 100<sup>2</sup>) = 141</span> N.`
  },
  beyond: [
    { field: "Statics", why: "Every statics problem is a free-body diagram with the net force and net torque set to zero." },
    { field: "Electricity & Magnetism", why: "Electric and magnetic forces on charges are added as vectors exactly like mechanical forces, starting with Coulomb's law for several charges." },
    { field: "Classical Mechanics", why: "Free-body reasoning extends to systems of particles and constrained motion, where normal and tension forces become constraint forces." },
    { field: "Mechanical Engineering", why: "Machine and structural design begins with free-body diagrams of each part to find the loads it carries." }
  ],
  mistakes: [
    { wrong: `Drawing a "force of motion" or "force of the throw" on a ball after it leaves the hand.`, fix: `Every force needs a source in contact (or a field). After release only gravity (and air drag) act. Motion does not need a force to continue.` },
    { wrong: `Assuming the normal force always equals <span class="m"><i>mg</i></span>.`, fix: `The normal force is whatever the situation requires. If a rope pulls up at an angle, <span class="m"><i>N</i> = <i>mg</i> − <i>F</i> sin θ</span>; on an incline, <span class="m"><i>N</i> = <i>mg</i> cos θ</span>.` },
    { wrong: `Adding force magnitudes: <span class="m">4.00 × 10<sup>4</sup> + 3.00 × 10<sup>4</sup> = 7.00 × 10<sup>4</sup></span> N for two tugs.`, fix: `Forces add as vectors. Resolve into components and add those; the magnitudes add only when the forces point the same way.` },
    { wrong: `Mixing mass and weight: "the box weighs 20 kg, so the weight is 20".`, fix: `Mass is in kilograms; weight is a force in newtons: <span class="m"><i>w</i> = <i>mg</i> = 20.0 × 9.80 = 196</span> N.` }
  ],
  practice: [
    { q: `A 1.50 kg book rests on a level table. Draw its free-body diagram and give the size of each force. What is the net force?`, a: `Weight <span class="m"><i>w</i> = <i>mg</i> = 1.50 × 9.80 = 14.7</span> N down; normal force 14.7 N up from the table. Net force <span class="m">0</span>. (These two forces act on the same body, so they are not a Newton's-third-law pair.)` },
    { q: `Three forces act on an object: <span class="m"><b>F</b><sub>1</sub> = (3.00 î + 4.00 ĵ)</span> N, <span class="m"><b>F</b><sub>2</sub> = (−5.00 î + 2.00 ĵ)</span> N, <span class="m"><b>F</b><sub>3</sub> = (1.00 î − 9.00 ĵ)</span> N. Find the net force, its magnitude and direction.`, a: `<span class="m"><b>F</b><sub>net</sub> = (−1.00 î − 3.00 ĵ)</span> N. Magnitude <span class="m">√(1.00 + 9.00) = 3.16</span> N. Both components are negative (third quadrant): <span class="m">tan<sup>−1</sup>(3.00/1.00) = 71.6°</span> below the −x axis, i.e. 252° counterclockwise from +x.` },
    { q: `A 20.0 kg box sits on a smooth floor and is pulled by a rope with 80.0 N at 25.0° above the horizontal. The box stays on the floor. Find the normal force and the net force.`, a: `Vertical forces balance: <span class="m"><i>N</i> + 80.0 sin 25.0° − 196 = 0</span>, so <span class="m"><i>N</i> = 196 − 33.8 = 162</span> N, less than the weight. Net force <span class="m">= 80.0 cos 25.0° = 72.5</span> N, horizontal in the direction of the pull.` },
    { q: `A ball is thrown upward and is at the top of its path. Ignoring air resistance, what forces act on it, and what is the net force? A 0.200 kg ball, for concreteness.`, a: `Only its weight, <span class="m">0.200 × 9.80 = 1.96</span> N downward. There is no upward "force of the throw" after release, and at the top the net force is still 1.96 N down, even though the velocity is momentarily horizontal or zero.` }
  ],
  origin: `Simon Stevin analysed forces on an inclined plane with his "wreath of spheres" argument in <i>De Beghinselen der Weeghconst</i> (1586), an early use of force components. Isaac Newton's <i>Principia</i> (1687) defined impressed force and stated, as a corollary of his laws, that forces combine by the parallelogram rule. The SI unit was named the newton in 1948.`
};
