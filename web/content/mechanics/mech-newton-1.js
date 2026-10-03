window.ARITH = window.ARITH || {};

ARITH["mech-newton-1"] = {
  title: "Newton's First Law & Inertia",
  short: "Zero net force means constant velocity",
  grade: "College PHYS 1xx · University Physics I",
  hours: 4,
  voice: "plain",
  eyebrow: "Mechanics · Newton's laws",
  hero: `<span class="m"><span class="c1">Σ<b>F</b> = 0</span> &nbsp;⇔&nbsp; <span class="c3"><b>v</b> = constant</span></span>`,
  lede: `A body keeps its state of motion, at rest or moving in a straight line at constant speed, unless a nonzero <span class="c1">net external force</span> acts on it. That resistance to changes in motion is <b>inertia</b>.`,
  plain: `<p>Slide a hockey <span class="c2">puck</span> across a floor and it soon stops. Slide it across ice and it goes much farther. On perfectly smooth ice it would never slow down. What stops it on the floor is not a lack of push; it is <span class="c4">friction</span>, a force acting against the motion. Remove every force and a moving object just keeps going, in a straight line, at the same speed.</p>
<p>That is Newton's first law. Motion does not need a force to keep it going; only a <b>change</b> in motion (speeding up, slowing down or turning) needs a force. An object at rest and an object gliding at constant <span class="c3">velocity</span> are in the same situation as far as physics is concerned: the forces on each add to zero. Both are said to be in <b>equilibrium</b>.</p>
<p><b>Inertia</b> is the name for this tendency to keep moving as before, and <b>mass</b> measures how much of it an object has. A loaded shopping trolley is harder to start and harder to stop than an empty one. When a bus brakes suddenly, nothing throws you forward: your body simply carries on at the old speed while the bus slows beneath you.</p>`,
  formal: `<p><b>Newton's first law</b> (<i>Principia</i>, 1687): a body at rest remains at rest, and a body in motion remains in motion at constant velocity, unless acted on by a net external force.</p>
<div class="display"><span class="c1">Σ<b>F</b> = 0</span> &nbsp;⇔&nbsp; <b>a</b> = 0 &nbsp;⇔&nbsp; <span class="c3"><b>v</b> = constant</span><br>equilibrium: &nbsp;Σ<i>F<sub>x</sub></i> = 0, &nbsp; Σ<i>F<sub>y</sub></i> = 0, &nbsp; Σ<i>F<sub>z</sub></i> = 0</div>
<p>The law holds in an <b>inertial reference frame</b>, a frame that is not accelerating; in fact the first law is what defines one. A frame moving at constant velocity relative to an inertial frame is also inertial. The surface of the Earth is inertial to a good approximation for most laboratory problems. In an accelerating frame, such as a braking bus, objects appear to accelerate with no net force, so the law fails there.</p>
<p><b>Inertia</b> is the tendency of a body to maintain its velocity; its quantitative measure is the body's <b>mass</b> <span class="m"><i>m</i></span> (in kg). A body with <span class="m">Σ<b>F</b> = 0</span> is in <b>static equilibrium</b> if <span class="m"><b>v</b> = 0</span> and in <b>dynamic equilibrium</b> if <span class="m"><b>v</b></span> is a nonzero constant.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i>`, name: "The body", desc: "The object whose motion you track. Its mass measures its inertia, its resistance to changes in velocity." },
    { c: "c3", sym: `<b>v</b>`, name: "Velocity", desc: "Stays exactly constant, in size and direction, whenever the net force is zero." },
    { c: "c1", sym: `Σ<b>F</b>`, name: "Net force", desc: "The vector sum of all external forces. Zero means equilibrium; nonzero means the velocity changes." },
    { c: "c5", sym: `<b>F</b><sub>push</sub>`, name: "Applied push", desc: "A push you can hold on in the model. Set equal to friction, it keeps the puck moving at constant velocity with forces present." },
    { c: "c4", sym: `<b>f</b>`, name: "Friction", desc: "The force along a surface that opposes sliding. It is why everyday objects seem to need a push to keep moving." }
  ],
  steps: { title: "How to use the first law (equilibrium problems)", items: [
    `Decide whether the body is in equilibrium: at rest or moving at constant velocity (constant speed <i>and</i> direction).`,
    `Draw a free-body diagram with every external force on the body.`,
    `Choose axes that line up with as many forces as possible, and resolve the others into components.`,
    `Write <span class="m">Σ<i>F<sub>x</sub></i> = 0</span> and <span class="m">Σ<i>F<sub>y</sub></i> = 0</span>.`,
    `Solve the equations for the unknown forces (two unknowns need both equations).`,
    `Check: the unknown forces should come out positive in the directions drawn, and the forces should visibly balance on the diagram.`
  ] },
  example: {
    prompt: `A 200 N sign hangs at rest from two cables. Cable 1 pulls up and to the left at 30.0° above the horizontal; cable 2 pulls up and to the right at 45.0° above the horizontal. Find the tension in each cable.`,
    lines: [
      { math: `<span class="m c1">Σ<b>F</b> = <b>T</b><sub>1</sub> + <b>T</b><sub>2</sub> + <b>w</b> = 0</span>`, note: "The sign is at rest, so by the first law the forces on it sum to zero." },
      { math: `<span class="m"><i>x</i>: &nbsp;−<i>T</i><sub>1</sub> cos 30.0° + <i>T</i><sub>2</sub> cos 45.0° = 0</span>`, note: "Horizontal components cancel." },
      { math: `<span class="m"><i>y</i>: &nbsp;<i>T</i><sub>1</sub> sin 30.0° + <i>T</i><sub>2</sub> sin 45.0° − 200 N = 0</span>`, note: "Vertical components hold up the weight." },
      { math: `<span class="m"><i>T</i><sub>1</sub> = <span class="fr"><span>(200 N) cos 45.0°</span><span>sin(30.0° + 45.0°)</span></span> = 146 N</span>`, note: "Substitute T₂ = T₁ cos 30.0°/cos 45.0° from the x equation into the y equation and simplify with sin(A + B)." },
      { math: `<span class="m"><i>T</i><sub>2</sub> = <span class="fr"><span>(200 N) cos 30.0°</span><span>sin 75.0°</span></span> = 179 N</span>`, note: "The steeper cable carries more of the load." },
      { math: `<span class="m">146 sin 30.0° + 179 sin 45.0° = 73.2 + 126.8 = 200 N ✓</span>`, note: "Check the vertical balance with unrounded values: 73.2 + 126.8 = 200." }
    ],
    answer: `The tensions are <span class="m"><i>T</i><sub>1</sub> = 146 N</span> in the 30.0° cable and <span class="m"><i>T</i><sub>2</sub> = 179 N</span> in the 45.0° cable. Their sum exceeds the 200 N weight because part of each tension pulls sideways against the other cable.`
  },
  why: `<p>The first law overturned a belief that had stood since Aristotle: that moving things naturally come to rest and a force is needed to keep them going. Once you see that friction and drag are forces, the puzzle disappears, and the real question becomes what changes motion. That shift is what made a science of dynamics possible.</p>
<p>Practically, the first law is the rule for equilibrium. Bridges, buildings, cranes, hanging signs and a car cruising at steady speed all have zero net force, and engineers find unknown support forces and tensions by setting the force sums to zero. Seat belts, headrests and airbags exist because of inertia: in a crash the car stops and the occupants do not, unless a force acts on them.</p>`,
  careers: [
    { role: "Structural engineer", use: "Finds cable tensions and support reactions by setting the sum of forces on a structure to zero." },
    { role: "Automotive safety engineer", use: "Designs seat belts and airbags to supply the force that stops an occupant who keeps moving when the car stops." },
    { role: "Rigger and crane operator", use: "Checks that a suspended load is in equilibrium and computes sling tensions from the load's weight and sling angles." },
    { role: "Aerospace engineer", use: "Sets thrust equal to drag and lift equal to weight for steady level flight at constant velocity." },
    { role: "Spacecraft mission planner", use: "Plans coast phases in which a probe travels at constant velocity with engines off, apart from gravity." },
    { role: "Accident reconstructionist", use: "Uses the inertia of unrestrained objects and occupants to infer vehicle speeds and directions at impact." }
  ],
  life: [
    "Lurching forward when a bus brakes, or backward when it pulls away",
    "Pulling a tablecloth quickly out from under dishes",
    "Tightening a hammer head by banging the handle on a hard surface",
    "Wearing a seat belt so your body stops with the car",
    "Noticing that a loaded trolley is harder to start and to stop than an empty one"
  ],
  fields: [
    { name: "Structural and civil engineering", use: "Statics is the first law applied to every beam, cable and joint." },
    { name: "Vehicle and occupant safety", use: "Restraint systems are designed around the inertia of passengers in a collision." },
    { name: "Aerospace engineering", use: "Steady flight and coasting spacecraft are equilibrium or zero-net-force problems." },
    { name: "History and philosophy of science", use: "The move from Aristotelian to Newtonian motion is a central case study in how science changes." }
  ],
  prereqWhy: {
    "mech-forces": "The first law is about the net force, which is found by drawing a free-body diagram and adding all the forces as vectors."
  },
  unlocksWhy: {
    "mech-newton-2": "The second law answers the question the first law leaves open: how a nonzero net force changes the velocity, a = ΣF/m.",
    "mech-newton-3": "Equilibrium analysis needs the forces between bodies, and the third law says those come in equal and opposite pairs acting on different bodies."
  },
  mathWhy: {
    "trig-vectors": `Equilibrium means the force vectors add to zero; each force is resolved as <span class="m"><i>T</i> cos θ î + <i>T</i> sin θ ĵ</span> and the <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> sums are set to zero separately.`
  },
  beyond: [
    { field: "Statics", why: "All of statics applies the first law's condition ΣF = 0, together with zero net torque, to structures and machines." },
    { field: "Classical Mechanics", why: "Inertial frames are the starting point of Newtonian and Lagrangian mechanics, and fictitious forces appear only in non-inertial frames." },
    { field: "General Relativity", why: "Einstein's equivalence principle reinterprets free fall as inertial motion, so freely falling frames are the local inertial frames." },
    { field: "Modern Physics", why: "Special relativity is built on the postulate that the laws of physics are the same in every inertial frame." }
  ],
  mistakes: [
    { wrong: `"A moving object needs a force to keep it moving."`, fix: `Constant velocity needs zero net force. Everyday objects slow down because friction and drag act on them, not because a driving force runs out.` },
    { wrong: `"No net force means the object is at rest."`, fix: `Zero net force means zero acceleration: the object is at rest <i>or</i> moving at constant velocity. A car cruising at a steady 100 km/h in a straight line has zero net force.` },
    { wrong: `"When the bus brakes, a force throws passengers forward."`, fix: `In the ground frame no forward force acts. The passengers keep their velocity while the bus slows. The bus is a non-inertial frame, where the first law does not apply.` },
    { wrong: `Treating inertia as a force that keeps things moving.`, fix: `Inertia is a property, measured by mass, not a force. It never appears as an arrow on a free-body diagram.` }
  ],
  practice: [
    { q: `A hockey puck slides on frictionless ice at 5.00 m/s. What net force is needed to keep it moving, and how far does it travel in the next 10.0 s?`, a: `None: with <span class="m">Σ<b>F</b> = 0</span> its velocity stays 5.00 m/s. Distance <span class="m">= 5.00 × 10.0 = 50.0</span> m in a straight line.` },
    { q: `A 70.0 kg skydiver falls at a constant terminal speed. What is the air drag on her?`, a: `Constant velocity means <span class="m">Σ<b>F</b> = 0</span>, so drag equals weight: <span class="m"><i>F</i><sub>D</sub> = <i>mg</i> = 70.0 × 9.80 = 686</span> N, directed upward.` },
    { q: `Two forces act on a ring: 10.0 N east and 10.0 N north. What single third force keeps the ring in equilibrium?`, a: `<span class="m"><b>F</b><sub>3</sub> = −(<b>F</b><sub>1</sub> + <b>F</b><sub>2</sub>) = (−10.0 î − 10.0 ĵ)</span> N: magnitude <span class="m">√200 = 14.1</span> N, directed toward the southwest (45.0° south of west).` },
    { q: `A worker pushes a 30.0 kg crate across a level floor at constant velocity. She pushes with 150 N directed 20.0° below the horizontal. Find the friction force and the normal force on the crate.`, a: `Constant velocity, so <span class="m">Σ<i>F<sub>x</sub></i> = 0</span>: <span class="m"><i>f</i> = 150 cos 20.0° = 141</span> N opposite the motion. <span class="m">Σ<i>F<sub>y</sub></i> = 0</span>: <span class="m"><i>N</i> = <i>mg</i> + 150 sin 20.0° = 294 + 51.3 = 345</span> N, more than the weight because she pushes partly downward.` }
  ],
  origin: `Galileo argued from rolling balls on inclined planes that a body on a level frictionless surface would move forever, and René Descartes stated straight-line inertia in <i>Principles of Philosophy</i> (1644). Isaac Newton made it the first law of motion in the <i>Principia</i> (1687).`
};
