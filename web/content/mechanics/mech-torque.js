window.ARITH = window.ARITH || {};

ARITH["mech-torque"] = {
  title: "Torque",
  short: "The turning effect of a force about an axis",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · rotation",
  hero: `<span class="m"><span class="c1"><b>τ</b></span> = <b>r</b> × <span class="c2"><b>F</b></span> &nbsp;&nbsp; <span class="c1">τ</span> = <i>rF</i> sin <span class="c4">θ</span> = <span class="c3"><i>r</i><sub>⊥</sub></span><span class="c2"><i>F</i></span></span>`,
  lede: `A <span class="c2">force</span> turns a body about an axis according to its <span class="c1">torque</span>: the force's size times its <span class="c3">lever arm</span>, the perpendicular distance from the axis to the force's line of action. The <span class="c4">angle</span> between the force and the position vector decides how much of the force counts.`,
  plain: `<p>A door is easy to open if you push the handle side, straight at the door. Push right next to the hinges and it barely moves. Push along the door toward the hinges and it does not turn at all, however hard you push. Three things matter: how hard you push, how far from the hinge, and in what direction.</p>
<p>Torque captures all three. Draw a line through the force in the direction it points, called its <b>line of action</b>. The <b>lever arm</b> is the shortest distance from the axis to that line. Torque is force times lever arm. Pushing straight at the door at the handle gives the biggest lever arm; pushing toward the hinge makes the line of action pass through the axis, so the lever arm and the torque are both zero.</p>
<p>Torque has a sense of rotation. In a flat picture we call counterclockwise positive and clockwise negative. The units are newton-metres. That is the same combination of units as a joule, but torque is not energy, so it is always written N·m.</p>`,
  formal: `<p>The <b>torque</b> of a force <span class="m"><b>F</b></span> applied at position <span class="m"><b>r</b></span> relative to an origin on the axis is the cross product</p>
<div class="display"><span class="c1"><b>τ</b></span> = <b>r</b> × <span class="c2"><b>F</b></span>, &nbsp;&nbsp; |<span class="c1"><b>τ</b></span>| = <i>rF</i> sin <span class="c4">θ</span> = <span class="c3"><i>r</i><sub>⊥</sub></span><i>F</i> = <i>rF</i><sub>⊥</sub> &nbsp;<span class="dim">(N·m)</span><br><span class="dim">in the xy-plane:</span>&nbsp; <span class="c1">τ<sub>z</sub></span> = <i>xF</i><sub>y</sub> − <i>yF</i><sub>x</sub> &nbsp;&nbsp; <span class="dim">net torque:</span>&nbsp; <b>τ</b><sub>net</sub> = Σ<sub><i>k</i></sub> <b>r</b><sub>k</sub> × <b>F</b><sub>k</sub></div>
<p>Here <span class="m"><span class="c4">θ</span></span> is the angle between <span class="m"><b>r</b></span> and <span class="m"><b>F</b></span> placed tail to tail, <span class="m"><span class="c3"><i>r</i><sub>⊥</sub></span> = <i>r</i> sin θ</span> is the <b>lever arm</b> (perpendicular distance from the axis to the line of action) and <span class="m"><i>F</i><sub>⊥</sub> = <i>F</i> sin θ</span> is the component of <b>F</b> perpendicular to <b>r</b>. The direction of <b>τ</b> is given by the right-hand rule: it points along the axis, out of the page (+z) for a counterclockwise turning effect and into the page for clockwise. A force whose line of action passes through the axis, or that is parallel to the axis, exerts no torque about that axis. Torque always depends on the choice of axis.</p>`,
  legend: [
    { c: "c2", sym: `<b>F</b>`, name: "Force", desc: "The applied force, in newtons, drawn at its point of application." },
    { c: "c3", sym: `<i>r</i><sub>⊥</sub>`, name: "Lever arm", desc: "The perpendicular distance from the axis to the force's line of action, r sin θ, in metres." },
    { c: "c1", sym: `<b>τ</b>`, name: "Torque", desc: "The turning effect, in N·m: positive counterclockwise (out of the page), negative clockwise (into the page)." },
    { c: "c4", sym: `θ`, name: "Angle", desc: "The angle between the position vector r and the force F, tail to tail. sin θ decides how much of the force turns the body." }
  ],
  steps: { title: "How to find a torque", items: [
    `Choose the axis (the pivot) and a positive sense of rotation, usually counterclockwise.`,
    `For each force, find the vector <span class="m"><b>r</b></span> from the axis to the point where the force acts.`,
    `Find the <span class="c4">angle θ</span> between <span class="m"><b>r</b></span> and <span class="m"><b>F</b></span>, or draw the line of action and measure the <span class="c3">lever arm</span> <span class="m"><i>r</i><sub>⊥</sub></span> directly.`,
    `Compute the magnitude <span class="m"><i>rF</i> sin θ = <i>r</i><sub>⊥</sub><i>F</i></span>, or use components: <span class="m">τ<sub>z</sub> = <i>xF</i><sub>y</sub> − <i>yF</i><sub>x</sub></span>.`,
    `Give it a sign by the right-hand rule: counterclockwise +, clockwise −. Add all the torques about the same axis for the net torque.`
  ] },
  example: {
    prompt: `A wheel's lug nuts must be tightened to 110 N·m. A mechanic grips a wrench 0.350 m from the nut and pulls at 70.0° to the handle. What force must she apply? What is the smallest force that would do it from the same grip?`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>r</i><sub>⊥</sub></span> = <i>r</i> sin <span class="c4">θ</span> = (0.350 m) sin 70.0° = <span class="c3">0.329 m</span></span>`, note: "Lever arm: perpendicular distance from the nut to the line of the pull." },
      { math: `<span class="m"><span class="c2"><i>F</i></span> = <span class="fr"><span><span class="c1">τ</span></span><span><i>r</i> sin θ</span></span> = <span class="fr"><span>110 N·m</span><span>0.329 m</span></span> = <span class="c2">334 N</span></span>`, note: "Solve τ = rF sin θ for the force." },
      { math: `<span class="m"><i>F</i><sub>min</sub> = <span class="fr"><span>110 N·m</span><span>0.350 m</span></span> = 314 N &nbsp;<span class="dim">(θ = 90°)</span></span>`, note: "sin θ is largest at 90°, so a perpendicular pull needs the least force." },
      { math: `<span class="m"><span class="c1"><b>τ</b></span> points into the wheel (clockwise as she faces it)</span>`, note: "A right-hand thread tightens clockwise; the right-hand rule puts τ along the axis, away from her." },
      { math: `<span class="m">334 N ÷ 9.80 m/s² ≈ 34 kg</span>`, note: "Sanity check: like hanging a 34 kg load on the wrench, a firm but possible pull. A longer wrench would need less." }
    ],
    answer: `She must pull with <span class="m c2">334 N</span>; pulling perpendicular to the handle would need only <span class="m">314 N</span>.`
  },
  why: `<p>Every time something turns, a torque is responsible: a wrench on a bolt, a foot on a pedal, a motor on a shaft, a muscle pulling on a bone around a joint. Torque explains why door handles sit far from the hinges, why long wrenches loosen stuck bolts, and why a crowbar lets a small force move a heavy load.</p>
<p>It is the rotational counterpart of force. Net torque sets angular acceleration (<span class="m">Στ = <i>I</i>α</span>), zero net torque is one of the two conditions for static equilibrium, and torque changes angular momentum. Engine output, fastener specifications and joint loads are all quoted in newton-metres.</p>`,
  careers: [
    { role: "Automotive technician", use: "Tightens wheel and cylinder-head bolts to specified torques with a calibrated torque wrench." },
    { role: "Mechanical engineer", use: "Sizes shafts, keys and couplings for the torque a motor or engine delivers." },
    { role: "Physical therapist", use: "Estimates the torque a muscle makes about a joint from its force and its moment arm to plan rehabilitation loads." },
    { role: "Structural engineer", use: "Computes the bending moments, torques of loads about points in a beam, that set the beam's size." },
    { role: "Robotics engineer", use: "Chooses joint motors from the torque needed to hold and move a payload at the end of an arm." },
    { role: "Aircraft mechanic", use: "Applies specified torques to fasteners so that joints hold without stripping threads." }
  ],
  life: [
    "Pushing a door near the handle, not near the hinges",
    "Using a longer wrench or a pipe extension to loosen a stuck bolt",
    "Standing on a bicycle pedal when it is horizontal, where it gives the most torque",
    "Opening a jar lid more easily with a wide rubber grip",
    "Using a screwdriver with a thick handle for a tight screw"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Gears, shafts, engines and motors are rated and designed by torque." },
    { name: "Civil and structural engineering", use: "Bending moments in beams and moments about supports are torques." },
    { name: "Biomechanics", use: "Joint torques from muscles and external loads explain movement and injury." },
    { name: "Robotics", use: "Actuator torque limits set what loads and speeds a robot can manage." }
  ],
  prereqWhy: {
    "mech-rot-kinematics": "Torque matters because it changes a body's rotation, described by the angle, angular velocity and angular acceleration defined there.",
    "mech-vector-products": "Torque is defined as the cross product r × F, so its magnitude rF sin θ and its right-hand-rule direction come straight from the cross product.",
    "mech-newton-2": "Torque is the rotational counterpart of force, and the rotational law Στ = Iα is derived by applying ΣF = ma to each particle."
  },
  unlocksWhy: {
    "mech-rot-dynamics": "Newton's second law for rotation, Στ = Iα, uses the net torque found here to predict angular acceleration.",
    "mech-equilibrium": "A body in static equilibrium needs zero net torque about every axis as well as zero net force."
  },
  mathWhy: {
    "g-trig-ratios": `The lever arm <span class="m"><i>r</i><sub>⊥</sub> = <i>r</i> sin θ</span> and the perpendicular component <span class="m"><i>F</i><sub>⊥</sub> = <i>F</i> sin θ</span> are the opposite sides of right triangles, as in the wrench pulled at 70.0°.`,
    "calculus-3:Vectors, dot and cross products": `Torque is <span class="m"><b>τ</b> = <b>r</b> × <b>F</b></span>; the determinant gives <span class="m">τ<sub>z</sub> = <i>xF</i><sub>y</sub> − <i>yF</i><sub>x</sub></span> and the right-hand rule gives its direction. Co-requisite: planar problems need only <span class="m"><i>rF</i> sin θ</span> and a sign convention.`
  },
  beyond: [
    { field: "Statics", why: "Every beam, truss and frame analysis sums moments (torques) about chosen points to find support reactions and internal forces." },
    { field: "Classical Mechanics", why: "Torque is the time derivative of angular momentum, dL/dt = τ, the basis of gyroscope precession and rigid-body motion." },
    { field: "Electricity & Magnetism", why: "A current loop or magnetic dipole in a field feels τ = μ × B, which is how electric motors and compass needles turn." },
    { field: "Mechanical Engineering", why: "Engine torque curves, gear ratios and shaft stresses all start from torque in N·m." }
  ],
  mistakes: [
    { wrong: `Using the full distance for every force: "<span class="m">τ = <i>rF</i> = (0.350)(334) = 117 N·m</span>" for a pull at 70.0°.`, fix: `Only the lever arm counts: <span class="m">τ = <i>rF</i> sin 70.0° = 110 N·m</span>.` },
    { wrong: `Measuring θ from the perpendicular to the handle, then still using sin θ.`, fix: `θ in <span class="m"><i>rF</i> sin θ</span> is the angle between <b>r</b> and <b>F</b>. If you measured from the perpendicular, the factor is cos of that angle.` },
    { wrong: `Writing a torque in joules because N·m = J.`, fix: `Torque is written N·m. It is a turning effect about an axis, not energy; the joule is kept for work and energy.` },
    { wrong: `Computing <span class="m"><b>F</b> × <b>r</b></span> and getting the opposite sign.`, fix: `The order is <span class="m"><b>r</b> × <b>F</b></span>. Reversing it flips the sign, since <span class="m"><b>F</b> × <b>r</b> = −<b>r</b> × <b>F</b></span>.` }
  ],
  practice: [
    { q: `You push perpendicular to a door with 40.0 N at 0.800 m from the hinges. What torque do you exert? What force would give the same torque at 0.200 m from the hinges?`, a: `<span class="m">τ = (0.800 m)(40.0 N) = 32.0 N·m</span>. At 0.200 m: <span class="m"><i>F</i> = 32.0/0.200 = 160 N</span>, four times as much.` },
    { q: `A 50.0 N force acts on a wrench 0.250 m from the bolt at 30.0° to the handle. Find the torque and the lever arm. What torque results if the same force is directed along the handle?`, a: `<span class="m">τ = (0.250)(50.0) sin 30.0° = 6.25 N·m</span>; lever arm <span class="m"><i>r</i><sub>⊥</sub> = 0.250 sin 30.0° = 0.125 m</span>. Along the handle <span class="m">θ = 0</span> (or 180°), so <span class="m">τ = 0</span>: the line of action passes through the bolt.` },
    { q: `A metre stick pivots at its centre. Forces act perpendicular to it: 10.0 N down at 0.400 m left of the pivot, 15.0 N down at 0.200 m right, and 8.00 N up at 0.300 m right. Find the net torque (counterclockwise positive).`, a: `Left, down: <span class="m">+(0.400)(10.0) = +4.00 N·m</span>. Right, down: <span class="m">−(0.200)(15.0) = −3.00 N·m</span>. Right, up: <span class="m">+(0.300)(8.00) = +2.40 N·m</span>. Net <span class="m">τ = +3.40 N·m</span>, counterclockwise.` },
    { q: `A force <span class="m"><b>F</b> = (30.0 î + 40.0 ĵ) N</span> acts at <span class="m"><b>r</b> = (0.500 î + 0.200 ĵ) m</span> from an axis along z. Find the torque vector and the angle between <b>r</b> and <b>F</b>.`, a: `<span class="m"><b>τ</b> = (<i>xF</i><sub>y</sub> − <i>yF</i><sub>x</sub>) k̂ = (0.500 · 40.0 − 0.200 · 30.0) k̂ = 14.0 k̂ N·m</span>. With <span class="m"><i>r</i> = 0.539 m</span> and <span class="m"><i>F</i> = 50.0 N</span>, <span class="m">sin θ = 14.0/(0.539 · 50.0) = 0.520</span>, so <span class="m">θ = 31.3°</span>.` }
  ],
  origin: `Archimedes stated the law of the lever, that weights balance at distances inversely proportional to their sizes, in <i>On the Equilibrium of Planes</i> (3rd century BCE). The word "torque", from the Latin <i>torquere</i>, to twist, was suggested by James Thomson and appeared in print in 1884; the cross-product form comes from the vector analysis of Gibbs and Heaviside in the 1880s.`
};
