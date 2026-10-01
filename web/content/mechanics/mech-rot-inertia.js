window.ARITH = window.ARITH || {};

ARITH["mech-rot-inertia"] = {
  title: "Moment of Inertia & Rotational Kinetic Energy",
  short: "How mass and its distance from the axis resist spin",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · rotation",
  hero: `<span class="m"><span class="c1"><i>I</i></span> = Σ <span class="c2"><i>m</i><sub>j</sub></span><i>r</i><sub>j</sub><sup>2</sup> &nbsp;&nbsp; <span class="c4"><i>K</i></span> = ½<span class="c1"><i>I</i></span>ω<sup>2</sup></span>`,
  lede: `The <span class="c1">moment of inertia</span> measures how hard a body is to spin about a given <span class="c3">axis</span>. It depends on the <span class="c2">mass</span> and, much more strongly, on how far that mass sits from the axis, and it sets the body's <span class="c4">rotational kinetic energy</span>.`,
  plain: `<p>A spinning wheel has kinetic energy even though, as a whole, it goes nowhere. Every bit of it is moving in a circle, and bits far from the axle move fastest. Add up ½mv² for all the bits, using <span class="m"><i>v</i> = <i>r</i>ω</span>, and the energy comes out as <span class="m">½<i>I</i>ω<sup>2</sup></span>. The number <span class="m"><i>I</i></span> collects the whole shape of the body into one quantity.</p>
<p>Each bit of mass contributes its mass times the <b>square</b> of its distance from the axis. So mass far out counts a lot. A hoop and a solid disc with the same mass and radius are not equal: all of the hoop's mass is at the rim, so its <span class="m"><i>I</i> = <i>MR</i><sup>2</sup></span> is twice the disc's <span class="m">½<i>MR</i><sup>2</sup></span>. Spun at the same rate, the hoop carries twice the energy.</p>
<p><span class="m"><i>I</i></span> belongs to a body <b>and an axis</b>. A rod is four times harder to spin about one end than about its middle, because more of its mass is far away. In rotation, <span class="m"><i>I</i></span> plays the part that mass plays in straight-line motion.</p>`,
  formal: `<p>The <b>moment of inertia</b> of a system of particles about a given axis, and of a continuous body, is</p>
<div class="display"><span class="c1"><i>I</i></span> = Σ<sub><i>j</i></sub> <span class="c2"><i>m</i><sub>j</sub></span><i>r</i><sub>j</sub><sup>2</sup> &nbsp;&nbsp; <span class="c1"><i>I</i></span> = ∫ <i>r</i><sup>2</sup> d<span class="c2"><i>m</i></span> &nbsp;<span class="dim">(kg·m², <i>r</i> = perpendicular distance from the axis)</span><br><span class="c4"><i>K</i></span> = Σ ½<i>m</i><sub>j</sub>(<i>r</i><sub>j</sub>ω)<sup>2</sup> = ½<span class="c1"><i>I</i></span>ω<sup>2</sup> &nbsp;<span class="dim">(ω in rad/s)</span><br><span class="dim">parallel-axis theorem:</span>&nbsp; <i>I</i><sub>parallel-axis</sub> = <i>I</i><sub>cm</sub> + <i>md</i><sup>2</sup></div>
<p>Common results (uniform bodies of mass <i>M</i>): thin hoop about its central axis <span class="m"><i>MR</i><sup>2</sup></span>; solid disk or cylinder about its central axis <span class="m">½<i>MR</i><sup>2</sup></span>; solid sphere about a diameter <span class="m">⅖<i>MR</i><sup>2</sup></span>; thin spherical shell <span class="m">⅔<i>MR</i><sup>2</sup></span>; thin rod of length <i>L</i> about its centre <span class="m"><span class="fr"><span>1</span><span>12</span></span><i>ML</i><sup>2</sup></span> and about one end <span class="m">⅓<i>ML</i><sup>2</sup></span>. For the rod about one end, <span class="m">d<i>m</i> = (<i>M</i>/<i>L</i>)d<i>x</i></span> gives <span class="m"><i>I</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>x</i><sup>2</sup>(<i>M</i>/<i>L</i>) d<i>x</i> = ⅓<i>ML</i><sup>2</sup></span>. In the parallel-axis theorem, <i>d</i> is the distance between the new axis and a parallel axis through the centre of mass; moments of inertia about the same axis add.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i><sub>j</sub>, d<i>m</i>`, name: "Mass distribution", desc: "Where the mass sits. Each piece contributes its mass times its distance from the axis squared." },
    { c: "c3", sym: `axis`, name: "Rotation axis", desc: "The line the body turns about. Change the axis and the moment of inertia changes." },
    { c: "c1", sym: `<i>I</i>`, name: "Moment of inertia", desc: "Rotational inertia in kg·m²: the rotational counterpart of mass. Mass far from the axis raises it most." },
    { c: "c4", sym: `<i>K</i> = ½<i>I</i>ω²`, name: "Rotational kinetic energy", desc: "The kinetic energy of all the particles of a spinning body, in joules, with ω in rad/s." }
  ],
  steps: { title: "How to find I and rotational kinetic energy", items: [
    `Identify the <span class="c3">axis</span>. Every distance you use is the perpendicular distance from that axis.`,
    `For separate point masses, add <span class="m"><i>m</i><sub>j</sub><i>r</i><sub>j</sub><sup>2</sup></span> for each one. A mass on the axis contributes nothing.`,
    `For a standard shape about its standard axis, use the table value (hoop, disk, sphere, rod). For a continuous body, write <span class="m">d<i>m</i></span> in terms of a coordinate and integrate <span class="m">∫ <i>r</i><sup>2</sup> d<i>m</i></span>.`,
    `For an axis parallel to one through the centre of mass, add <span class="m"><i>Md</i><sup>2</sup></span> to <span class="m"><i>I</i><sub>cm</sub></span>. For a composite body, add the parts' moments about the same axis.`,
    `Convert ω to rad/s and compute <span class="m"><span class="c4"><i>K</i></span> = ½<i>I</i>ω<sup>2</sup></span>. Check units: kg·m²·(rad/s)² = J.`
  ] },
  example: {
    prompt: `A flywheel energy-storage unit uses a solid steel cylinder of mass 100 kg and radius 0.300 m spinning at 6000 rpm about its axis. Find its moment of inertia and its rotational kinetic energy, in joules and in kilowatt-hours.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>I</i></span> = ½<i>MR</i><sup>2</sup> = ½(100 kg)(0.300 m)<sup>2</sup> = <span class="c1">4.50 kg·m²</span></span>`, note: "Solid cylinder about its central axis." },
      { math: `<span class="m">ω = 6000 × <span class="fr"><span>2π</span><span>60</span></span> rad/s = 628 rad/s</span>`, note: "Convert rpm to rad/s before using ½Iω²." },
      { math: `<span class="m"><span class="c4"><i>K</i></span> = ½<i>I</i>ω<sup>2</sup> = ½(4.50 kg·m²)(628.3 rad/s)<sup>2</sup> = <span class="c4">8.88 × 10<sup>5</sup> J</span></span>`, note: "Units: kg·m²/s² = J." },
      { math: `<span class="m"><span class="fr"><span>8.88 × 10<sup>5</sup> J</span><span>3.60 × 10<sup>6</sup> J/kWh</span></span> = 0.247 kWh</span>`, note: "1 kWh = 3.60 × 10⁶ J." },
      { math: `<span class="m"><i>v</i><sub>rim</sub> = <i>R</i>ω = (0.300 m)(628 rad/s) = 188 m/s</span>`, note: "The rim speed is high but below what a well-made steel rotor survives." },
      { math: `<span class="m">½(1500 kg)<i>v</i><sup>2</sup> = 8.88 × 10<sup>5</sup> J ⇒ <i>v</i> = 34.4 m/s</span>`, note: "Sanity check: the same energy as a 1500 kg car at about 124 km/h." }
    ],
    answer: `The flywheel has <span class="m c1"><i>I</i> = 4.50 kg·m²</span> and stores <span class="m c4">8.88 × 10<sup>5</sup> J</span>, about <span class="m">0.247 kWh</span>.`
  },
  why: `<p>Moment of inertia decides how a body responds to twisting, just as mass decides how it responds to pushing. It explains why a figure skater spins faster with arms pulled in, why a hollow ball rolls down a ramp more slowly than a solid one, why a baseball bat feels heavier held at the thin end, and why a flywheel with its mass at the rim stores more energy for its weight.</p>
<p>Engineers use it to size motors that must spin rotors up quickly, to design crankshafts and turbines, and to predict how a satellite tumbles. Together with ½Iω² it lets the conservation of energy handle anything that spins or rolls.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes rotor and flywheel moments of inertia to choose a motor that reaches operating speed in the required time." },
    { role: "Energy-storage engineer", use: "Sizes flywheel mass and radius from E = ½Iω² and the maximum safe rim speed of the rotor material." },
    { role: "Aerospace engineer", use: "Uses the spacecraft's moments of inertia about each axis to plan attitude manoeuvres and check spin stability." },
    { role: "Sports equipment designer", use: "Measures the swing weight of bats, clubs and rackets, which is the moment of inertia about a point near the grip." },
    { role: "Automotive engineer", use: "Reduces the moment of inertia of wheels, flywheels and crankshafts so the engine revs and the car accelerates more quickly." },
    { role: "Biomechanist", use: "Uses segment moments of inertia from anthropometric tables in models of limb and whole-body rotation." }
  ],
  life: [
    "Choking up on a bat or a broom to make it quicker to swing",
    "Watching a figure skater spin faster by pulling in the arms",
    "Noticing that a bicycle with lighter rims is easier to speed up",
    "Rolling a full can and an empty can down a slope and seeing which wins",
    "Feeling a fidget spinner keep turning because of its heavy outer weights"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Rotating machinery design, from gears to turbines, depends on each part's moment of inertia." },
    { name: "Aerospace engineering", use: "Attitude control and spin stabilisation use the spacecraft's inertia about its principal axes." },
    { name: "Civil engineering", use: "The area moment of inertia, the same ∫r² idea applied to a cross-section, sets the bending stiffness of beams." },
    { name: "Sports science", use: "Technique and equipment are analysed through the moments of inertia of bodies and implements." }
  ],
  prereqWhy: {
    "mech-rot-kinematics": "Rotational kinetic energy is written in terms of the angular velocity ω, and the derivation uses v = rω for each particle.",
    "mech-kinetic": "Rotational kinetic energy is just ½mv² summed over every particle of the spinning body, so it builds directly on kinetic energy."
  },
  unlocksWhy: {
    "mech-rot-dynamics": "The rotational second law Στ = Iα uses the moment of inertia in the place mass holds in ΣF = ma."
  },
  mathWhy: {
    "g-volume": `Finding a body's mass from its density and volume (<span class="m"><i>M</i> = ρπ<i>R</i><sup>2</sup><i>h</i></span> for a disk), and splitting a disk into thin rings of area <span class="m">2π<i>r</i> d<i>r</i></span> to build the integral for <i>I</i>.`,
    "calculus-1:Antiderivatives and the definite integral": `The definition <span class="m"><i>I</i> = ∫ <i>r</i><sup>2</sup> d<i>m</i></span> is a definite integral, as in <span class="m">∫<sub>0</sub><sup><i>L</i></sup> <i>x</i><sup>2</sup>(<i>M</i>/<i>L</i>) d<i>x</i> = ⅓<i>ML</i><sup>2</sup></span>. Co-requisite: the table values and sums over point masses need only algebra; the integral derives them.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "In three dimensions the moment of inertia becomes the inertia tensor, whose principal axes govern free precession and the tennis-racket instability." },
    { field: "Statics", why: "The area moment of inertia ∫y² dA of a beam's cross-section, built the same way, controls bending stress and deflection." },
    { field: "Mechanical Engineering", why: "Flywheels, crankshafts, gear trains and motor sizing all rest on moments of inertia and ½Iω²." },
    { field: "Quantum Mechanics", why: "The rotational energy levels of molecules are ħ²ℓ(ℓ+1)/2I, so spectra reveal molecular moments of inertia and bond lengths." }
  ],
  mistakes: [
    { wrong: `Using the diameter as <i>R</i> in <span class="m">½<i>MR</i><sup>2</sup></span> for a 0.600 m wide flywheel.`, fix: `<i>R</i> is the radius, 0.300 m. Using the diameter makes <i>I</i> four times too large.` },
    { wrong: `Using <span class="m"><span class="fr"><span>1</span><span>12</span></span><i>ML</i><sup>2</sup></span> for a rod swinging about one end.`, fix: `That value is for the centre. About an end, <span class="m"><i>I</i> = <span class="fr"><span>1</span><span>12</span></span><i>ML</i><sup>2</sup> + <i>M</i>(<i>L</i>/2)<sup>2</sup> = ⅓<i>ML</i><sup>2</sup></span>.` },
    { wrong: `Applying the parallel-axis theorem from an axis that does not pass through the centre of mass.`, fix: `<span class="m"><i>I</i> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup></span> starts from the centre-of-mass axis only. The centre-of-mass axis always has the smallest <i>I</i> of all parallel axes.` },
    { wrong: `Using ω in rpm in <span class="m">½<i>I</i>ω<sup>2</sup></span>, which gives an energy in no real unit.`, fix: `Convert to rad/s first. <span class="m">6000 rpm = 628 rad/s</span>.` }
  ],
  practice: [
    { q: `Three small masses sit on a light rod along the x-axis: 2.00 kg at <span class="m"><i>x</i> = 0</span>, 1.00 kg at 0.500 m and 3.00 kg at 1.00 m. Find the moment of inertia about a perpendicular axis through <span class="m"><i>x</i> = 0</span>, and about one through <span class="m"><i>x</i> = 0.500 m</span>.`, a: `About <span class="m"><i>x</i> = 0</span>: <span class="m">2.00(0)<sup>2</sup> + 1.00(0.500)<sup>2</sup> + 3.00(1.00)<sup>2</sup> = 3.25 kg·m²</span>. About 0.500 m: <span class="m">2.00(0.500)<sup>2</sup> + 0 + 3.00(0.500)<sup>2</sup> = 1.25 kg·m²</span>.` },
    { q: `A uniform rod is 1.20 m long with mass 0.600 kg. Find its moment of inertia about its centre and about one end, and check the second with the parallel-axis theorem.`, a: `<span class="m"><i>I</i><sub>cm</sub> = (1/12)(0.600)(1.20)<sup>2</sup> = 0.0720 kg·m²</span>; <span class="m"><i>I</i><sub>end</sub> = (1/3)(0.600)(1.20)<sup>2</sup> = 0.288 kg·m²</span>. Check: <span class="m">0.0720 + 0.600(0.600)<sup>2</sup> = 0.288 kg·m²</span> ✓.` },
    { q: `A thin hoop and a solid disk each have mass 2.00 kg and radius 0.250 m and spin about their central axes at 10.0 rad/s. Find each one's rotational kinetic energy and explain the difference.`, a: `Hoop <span class="m"><i>I</i> = 0.125 kg·m²</span>, <span class="m"><i>K</i> = ½(0.125)(10.0)<sup>2</sup> = 6.25 J</span>. Disk <span class="m"><i>I</i> = 0.0625 kg·m²</span>, <span class="m"><i>K</i> = 3.13 J</span>. The hoop's mass is all at the rim, where it moves fastest, so it has twice the <i>I</i> and twice the energy.` },
    { q: `A 2.00 m rod has linear density <span class="m">λ(<i>x</i>) = (3.00 kg/m²)<i>x</i></span>, where <i>x</i> is measured from one end. Find its mass and its moment of inertia about a perpendicular axis through <span class="m"><i>x</i> = 0</span>. Compare with a uniform rod of the same mass.`, a: `<span class="m"><i>M</i> = ∫<sub>0</sub><sup>2</sup> 3.00<i>x</i> d<i>x</i> = 6.00 kg</span>. <span class="m"><i>I</i> = ∫<sub>0</sub><sup>2</sup> <i>x</i><sup>2</sup>(3.00<i>x</i>) d<i>x</i> = 0.750<i>x</i><sup>4</sup>|<sub>0</sub><sup>2</sup> = 12.0 kg·m²</span>. A uniform 6.00 kg rod gives <span class="m">⅓(6.00)(2.00)<sup>2</sup> = 8.00 kg·m²</span>; the tapered rod is larger because its mass is concentrated far from the axis.` }
  ],
  origin: `Christiaan Huygens used the sum of each mass times its squared distance from the axis in his theory of the compound pendulum in <i>Horologium Oscillatorium</i> (1673). Leonhard Euler named the quantity the moment of inertia (<i>momentum inertiae</i>) in <i>Theoria motus corporum solidorum seu rigidorum</i> (1765).`
};
