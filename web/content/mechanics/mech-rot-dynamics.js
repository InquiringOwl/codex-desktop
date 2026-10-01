window.ARITH = window.ARITH || {};

ARITH["mech-rot-dynamics"] = {
  title: "Newton's Second Law for Rotation",
  short: "Net torque equals moment of inertia times α",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · rotation",
  hero: `<span class="m">Σ<span class="c3">τ</span> = <span class="c4"><i>I</i></span><span class="c1">α</span></span>`,
  lede: `About a fixed axis, the net torque on a rigid body equals its <span class="c4">moment of inertia</span> times its <span class="c1">angular acceleration</span>. With a rope over a massive pulley, the <span class="c3">tension</span> links this rotational law to the ordinary second law for the <span class="c2">hanging mass</span>.`,
  plain: `<p>Push harder on a merry-go-round and it speeds up faster. Load it with children near the rim and the same push does less. That is the second law again, in rotational form: the net turning effect, torque, divided by the rotational inertia, <span class="m"><i>I</i></span>, gives the angular acceleration.</p>
<p>The classic case is a bucket hanging from a rope wrapped around a heavy drum. If the drum weighed nothing, the bucket would simply fall freely. A real drum has to be spun up, so the rope must pull on it, and by the third law the rope pulls back up on the bucket. The bucket then falls with less than <span class="m"><i>g</i></span>, and the rope tension is less than the bucket's weight.</p>
<p>Such problems always come as a set of equations: the second law for the thing that moves in a line, the rotational law for the thing that turns, and a link between them, <span class="m"><i>a</i> = <i>R</i>α</span> when the rope does not slip. Solve them together.</p>`,
  formal: `<p>For each particle of a rigid body rotating about a fixed axis, the tangential second law <span class="m"><i>F</i><sub>j,t</sub> = <i>m</i><sub>j</sub><i>a</i><sub>j,t</sub> = <i>m</i><sub>j</sub><i>r</i><sub>j</sub>α</span> multiplied by <span class="m"><i>r</i><sub>j</sub></span> gives <span class="m">τ<sub>j</sub> = <i>m</i><sub>j</sub><i>r</i><sub>j</sub><sup>2</sup>α</span>. Internal torques cancel in pairs, so summing over the body gives</p>
<div class="display">Σ<span class="c3">τ</span> = <span class="c4"><i>I</i></span><span class="c1">α</span> &nbsp;<span class="dim">(external torques about the fixed axis; α in rad/s²)</span><br><span class="dim">work and power:</span>&nbsp; <i>W</i> = ∫<sub>θ<sub>A</sub></sub><sup>θ<sub>B</sub></sup> Στ dθ = ½<i>I</i>ω<sub>B</sub><sup>2</sup> − ½<i>I</i>ω<sub>A</sub><sup>2</sup>, &nbsp;&nbsp; <i>P</i> = τω<br><span class="dim">mass <i>m</i> on a rope over a pulley (<i>I</i>, <i>R</i>, no slip, frictionless axle):</span>&nbsp; <i>mg</i> − <span class="c3"><i>T</i></span> = <i>ma</i>, &nbsp; <span class="c3"><i>T</i></span><i>R</i> = <i>I</i><span class="c1">α</span>, &nbsp; <i>a</i> = <i>R</i><span class="c1">α</span> &nbsp;⇒&nbsp; <i>a</i> = <span class="fr"><span><i>mg</i></span><span><i>m</i> + <i>I</i>/<i>R</i><sup>2</sup></span></span></div>
<p>The law holds about a fixed axis, or about an axis through the centre of mass even when that axis accelerates. It is the rotational analogue of <span class="m">Σ<i>F</i> = <i>ma</i></span>: torque for force, <span class="m"><i>I</i></span> for <span class="m"><i>m</i></span>, α for <i>a</i>. The more general form is <span class="m">Σ<b>τ</b> = d<b>L</b>/d<i>t</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i>`, name: "Hanging mass", desc: "The body that moves in a straight line. Its own second law is mg − T = ma, taking down as positive." },
    { c: "c3", sym: `<i>T</i>`, name: "Tension", desc: "The rope force. It pulls up on the hanging mass and pulls the pulley's rim, giving the pulley a torque TR." },
    { c: "c1", sym: `α`, name: "Angular acceleration", desc: "The pulley's angular acceleration, in rad/s². With no slipping, the mass's acceleration is a = Rα." },
    { c: "c4", sym: `<i>I</i>`, name: "Pulley inertia", desc: "The pulley's moment of inertia about its axle, in kg·m². It enters the result as an extra effective mass I/R²." }
  ],
  steps: { title: "How to solve a rotational dynamics problem", items: [
    `Draw a separate free-body diagram for each body: forces on the hanging <span class="c2">mass</span>, and forces with their points of application on the <span class="c4">pulley</span> or rotating body.`,
    `Choose consistent positive directions: if the mass moving down is positive, the pulley turning the way that lowers it is positive.`,
    `Write <span class="m">Σ<i>F</i> = <i>ma</i></span> for each body in straight-line motion and <span class="m">Σ<span class="c3">τ</span> = <span class="c4"><i>I</i></span><span class="c1">α</span></span> for each rotating body about its axis.`,
    `Add the constraint that links them, <span class="m"><i>a</i> = <i>R</i>α</span> for a rope that does not slip.`,
    `Solve the system (eliminate <span class="c3"><i>T</i></span> and α to get <i>a</i>), then back-substitute for the rest.`,
    `Check limits: with <span class="m"><i>I</i> → 0</span> the answer should reduce to the massless-pulley result.`
  ] },
  example: {
    prompt: `A 2.00 kg bucket hangs from a rope wrapped around a windlass drum, a solid cylinder of mass 8.00 kg and radius 0.100 m on a frictionless axle. The bucket is released from rest. Find its acceleration, the rope tension, the drum's angular acceleration and the bucket's speed after it falls 3.00 m.`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>I</i></span> = ½<i>MR</i><sup>2</sup> = ½(8.00 kg)(0.100 m)<sup>2</sup> = <span class="c4">0.0400 kg·m²</span></span>`, note: "Solid cylinder about its axis; I/R² = 4.00 kg." },
      { math: `<span class="m"><i>mg</i> − <span class="c3"><i>T</i></span> = <i>ma</i>, &nbsp; <span class="c3"><i>T</i></span><i>R</i> = <i>I</i>(<i>a</i>/<i>R</i>) ⇒ <span class="c3"><i>T</i></span> = (<i>I</i>/<i>R</i><sup>2</sup>)<i>a</i></span>`, note: "Second law for the bucket (down +), rotational law for the drum, with α = a/R." },
      { math: `<span class="m"><i>a</i> = <span class="fr"><span><i>mg</i></span><span><i>m</i> + <i>I</i>/<i>R</i><sup>2</sup></span></span> = <span class="fr"><span>(2.00 kg)(9.80 m/s²)</span><span>2.00 kg + 4.00 kg</span></span> = 3.27 m/s²</span>`, note: "Add the two equations to eliminate T." },
      { math: `<span class="m"><span class="c3"><i>T</i></span> = (4.00 kg)(3.267 m/s²) = <span class="c3">13.1 N</span></span>`, note: "Less than the bucket's weight, mg = 19.6 N, as it must be while the bucket accelerates down." },
      { math: `<span class="m"><span class="c1">α</span> = <span class="fr"><span><i>a</i></span><span><i>R</i></span></span> = <span class="fr"><span>3.267 m/s²</span><span>0.100 m</span></span> = <span class="c1">32.7 rad/s²</span></span>`, note: "No-slip link between the rope and the drum's rim." },
      { math: `<span class="m"><i>v</i> = √(2<i>ah</i>) = √(2(3.267 m/s²)(3.00 m)) = 4.43 m/s</span>`, note: "Constant-acceleration kinematics from rest." },
      { math: `<span class="m"><i>mgh</i> = 58.8 J = ½<i>mv</i><sup>2</sup> + ½<i>I</i>ω<sup>2</sup> = 19.6 J + 39.2 J ✓</span>`, note: "Energy check: two-thirds of the energy ends up spinning the drum." }
    ],
    answer: `The bucket accelerates at <span class="m">3.27 m/s²</span> with rope tension <span class="m c3">13.1 N</span>; the drum's angular acceleration is <span class="m c1">32.7 rad/s²</span>, and the bucket reaches <span class="m">4.43 m/s</span> after falling 3.00 m.`
  },
  why: `<p>Every motor, engine, turbine and wheel is governed by <span class="m">Στ = <i>I</i>α</span>. It tells an engineer how long a motor takes to spin a load up to speed, how hard brakes must grip to stop a flywheel, and how much a heavy pulley slows an elevator or a crane hook. In the body, it links muscle torques at the joints to how fast limbs swing.</p>
<p>It also completes the analogy between linear and rotational motion, which the rest of rotation relies on: rolling objects need both laws at once, and angular momentum is the quantity whose rate of change is torque.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Uses τ = Iα with the load's moment of inertia to choose a motor that reaches operating speed in the required time." },
    { role: "Elevator engineer", use: "Includes the drive sheave's and motor's moments of inertia, as effective mass I/R², when sizing hoist motors and brakes." },
    { role: "Automotive engineer", use: "Accounts for the rotational inertia of wheels and drivetrain, which adds effective mass during acceleration and braking." },
    { role: "Robotics engineer", use: "Computes joint torques from each link's inertia and the desired angular acceleration to plan fast, accurate arm moves." },
    { role: "Biomechanist", use: "Calculates net joint torques from limb moments of inertia and measured angular accelerations in inverse dynamics." },
    { role: "Wind turbine engineer", use: "Sizes the rotor brake from the braking torque needed to stop the rotor's large moment of inertia within a set time." }
  ],
  life: [
    "Noticing that a heavy bicycle wheel takes longer to spin up than a light one",
    "Lowering a bucket into a well with a windlass",
    "Feeling a spinning exercise bike flywheel keep going after you stop pedalling",
    "Seeing a yo-yo fall much more slowly than a dropped ball",
    "Using a longer handle to spin a stiff crank faster"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Machine dynamics, motor sizing and braking all use Στ = Iα for rotating parts." },
    { name: "Robotics and control", use: "Manipulator dynamics are torque equations for each joint." },
    { name: "Biomechanics", use: "Inverse dynamics finds joint torques from segment inertias and measured motion." },
    { name: "Aerospace engineering", use: "Reaction wheels and thrusters change a spacecraft's rotation according to the rotational second law." }
  ],
  prereqWhy: {
    "mech-rot-inertia": "The moment of inertia is the rotational mass in Στ = Iα, and pulley problems need I for disks, hoops and other shapes.",
    "mech-torque": "The left side of Στ = Iα is the net torque, found by adding rF sin θ for every force about the axis with consistent signs."
  },
  unlocksWhy: {
    "mech-rolling": "Rolling down an incline is solved by writing ΣF = ma for the centre of mass and Στ = Iα about it, linked by a = Rα.",
    "mech-ang-momentum": "The rotational second law generalises to Στ = dL/dt, and with zero net torque it gives conservation of angular momentum."
  },
  mathWhy: {
    "a1-literal": `Rearranging <span class="m">Στ = <i>I</i>α</span> for α or <i>I</i>, and turning the pulley result into <span class="m"><i>a</i> = <i>mg</i>/(<i>m</i> + <i>I</i>/<i>R</i><sup>2</sup>)</span> before substituting numbers.`,
    "a1-sys-elim": `A pulley problem is a linear system: <span class="m"><i>mg</i> − <i>T</i> = <i>ma</i></span>, <span class="m"><i>TR</i> = <i>I</i>α</span> and <span class="m"><i>a</i> = <i>R</i>α</span>. Adding the equations eliminates <i>T</i>, just as in elimination; the Atwood machine adds a second tension and a fourth equation.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Euler's equations generalise Στ = Iα to three-dimensional rigid bodies with an inertia tensor, explaining tops and gyroscopes." },
    { field: "Dynamics", why: "Engineering dynamics solves linked translational and rotational equations for gears, cams, linkages and vehicles." },
    { field: "Electricity & Magnetism", why: "Electric motors are analysed by setting the magnetic torque on the rotor equal to Iα plus the load torque." },
    { field: "Computational Physics", why: "Rigid-body simulators integrate Στ = Iα alongside ΣF = ma at each time step." }
  ],
  mistakes: [
    { wrong: `Setting the rope tension equal to the hanging weight: "<span class="m"><i>T</i> = <i>mg</i> = 19.6 N</span>".`, fix: `If the mass accelerates down, <span class="m"><i>T</i> = <i>m</i>(<i>g</i> − <i>a</i>) &lt; <i>mg</i></span>. Here <span class="m"><i>T</i> = 13.1 N</span>.` },
    { wrong: `Using one tension on both sides of a massive pulley in an Atwood machine.`, fix: `A pulley with mass needs a net torque to accelerate, so <span class="m">(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)<i>R</i> = <i>I</i>α</span>. The tensions are equal only if <span class="m"><i>I</i> = 0</span>.` },
    { wrong: `Mixing sign conventions: taking the mass's downward motion as positive but the pulley's matching rotation as negative.`, fix: `Choose the positive rotation to match the positive linear direction, so that <span class="m"><i>a</i> = +<i>R</i>α</span>.` },
    { wrong: `Using the pulley's mass <i>M</i> in place of <span class="m"><i>I</i>/<i>R</i><sup>2</sup></span>.`, fix: `A solid-disk pulley adds only <span class="m"><i>I</i>/<i>R</i><sup>2</sup> = ½<i>M</i></span> of effective mass; a hoop adds <i>M</i>.` }
  ],
  practice: [
    { q: `A constant net torque of 2.50 N·m acts on a wheel with <span class="m"><i>I</i> = 0.500 kg·m²</span>, starting from rest. Find α and the angular velocity after 4.00 s.`, a: `<span class="m">α = τ/<i>I</i> = 2.50/0.500 = 5.00 rad/s²</span>; <span class="m">ω = α<i>t</i> = (5.00)(4.00) = 20.0 rad/s</span>.` },
    { q: `A solid disk (4.00 kg, radius 0.200 m) on an axle is pulled by a 10.0 N force tangent to its rim, while axle friction exerts an opposing torque of 0.400 N·m. Find its angular acceleration.`, a: `<span class="m"><i>I</i> = ½(4.00)(0.200)<sup>2</sup> = 0.0800 kg·m²</span>. Net <span class="m">τ = (0.200)(10.0) − 0.400 = 1.60 N·m</span>, so <span class="m">α = 1.60/0.0800 = 20.0 rad/s²</span>.` },
    { q: `An Atwood machine has masses of 3.00 kg and 5.00 kg on a rope over a uniform-disk pulley of mass 2.00 kg and radius 0.100 m. Find the acceleration and both tensions. What would the tensions be with a massless pulley?`, a: `<span class="m"><i>a</i> = (5.00 − 3.00)(9.80)/(3.00 + 5.00 + ½(2.00)) = 2.18 m/s²</span>. <span class="m"><i>T</i><sub>1</sub> = 3.00(9.80 + 2.178) = 35.9 N</span>, <span class="m"><i>T</i><sub>2</sub> = 5.00(9.80 − 2.178) = 38.1 N</span>; check <span class="m">(38.11 − 35.93)(0.100) = 0.218 N·m = <i>I</i>α</span>. Massless pulley: <span class="m"><i>a</i> = 2.45 m/s²</span> and both tensions equal <span class="m">36.8 N</span>.` },
    { q: `A motor applies a constant 15.0 N·m to a flywheel with <span class="m"><i>I</i> = 0.300 kg·m²</span>, starting from rest. Through what angle does it turn before reaching 50.0 rad/s? Find the work done and the motor's power at that moment.`, a: `<span class="m">α = 15.0/0.300 = 50.0 rad/s²</span>; <span class="m">θ = ω<sup>2</sup>/(2α) = 2500/100 = 25.0 rad</span>. <span class="m"><i>W</i> = τθ = 375 J = ½(0.300)(50.0)<sup>2</sup></span> ✓. <span class="m"><i>P</i> = τω = (15.0)(50.0) = 750 W</span>.` }
  ],
  origin: `Leonhard Euler extended Newton's laws to rigid bodies: <i>Theoria motus corporum solidorum seu rigidorum</i> (1765) introduced the moment of inertia into the equations of rotation, and in 1775 he stated the rotational law, that torque equals the rate of change of angular momentum, as a principle in its own right. George Atwood described his pulley machine for measuring accelerations in 1784.`
};
