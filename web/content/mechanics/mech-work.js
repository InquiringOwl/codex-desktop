window.ARITH = window.ARITH || {};

ARITH["mech-work"] = {
  title: "Work",
  short: "Force along a displacement transfers energy",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · work and kinetic energy",
  hero: `<span class="m"><span class="c1"><i>W</i></span> = <span class="c2"><b>F</b></span> · <span class="c3"><b>d</b></span> = <span class="c2"><i>F</i></span><span class="c3"><i>d</i></span> cos <span class="c4">θ</span> &nbsp;&nbsp; <span class="c1"><i>W</i></span> = ∫ <span class="c2"><b>F</b></span> · d<b>r</b></span>`,
  lede: `A force does <span class="c1">work</span> on a body when the body moves and the force has a component along that <span class="c3">displacement</span>. Work is a scalar in joules: positive when the force helps the motion, negative when it opposes it, zero when it acts at <span class="c4">90°</span> to it.`,
  plain: `<p>In physics, "work" has a narrow meaning. Holding a heavy box still for an hour is tiring, but it does no work on the box, because the box does not move. Work needs two things together: a force, and a displacement with some part along that force. Lift the box 1 m and you do work on it. Carry it across a level room at steady speed and your upward force does none, because it is perpendicular to the motion.</p>
<p>Only the part of the force along the motion counts. Pull a sled with a rope at an angle and part of your pull lifts the sled a little while the rest drags it forward. The work is the forward part of the force times the distance, <span class="m"><i>F</i> cos θ × <i>d</i></span>.</p>
<p>Work can be negative. Friction on a sliding sled points backward while the sled moves forward, so friction does negative work: it takes energy out of the motion. The unit is the <b>joule</b>, one newton pushing through one metre. When the force changes along the way, like a spring that pulls harder the more you stretch it, the work is the area under the force-versus-position graph.</p>`,
  formal: `<p>The <b>work</b> done by a force <span class="m"><span class="c2"><b>F</b></span></span> on a particle that moves along a path from A to B is the line integral</p>
<div class="display"><span class="c1"><i>W</i><sub>AB</sub></span> = ∫<sub>A</sub><sup>B</sup> <span class="c2"><b>F</b></span> · d<b>r</b> &nbsp;&nbsp;<span class="dim">(1 J = 1 N·m = 1 kg·m²/s²)</span><br><span class="dim">constant force, straight displacement:</span>&nbsp; <span class="c1"><i>W</i></span> = <span class="c2"><b>F</b></span> · <span class="c3"><b>d</b></span> = <span class="c2"><i>F</i></span><span class="c3"><i>d</i></span> cos <span class="c4">θ</span> = <i>F</i><sub>x</sub><i>d</i><sub>x</sub> + <i>F</i><sub>y</sub><i>d</i><sub>y</sub> + <i>F</i><sub>z</sub><i>d</i><sub>z</sub><br><span class="dim">one-dimensional variable force:</span>&nbsp; <span class="c1"><i>W</i></span> = ∫<sub><i>x</i><sub>1</sub></sub><sup><i>x</i><sub>2</sub></sup> <i>F</i><sub>x</sub>(<i>x</i>) d<i>x</i> &nbsp;<span class="dim">(signed area under the F<sub>x</sub>–x curve)</span></div>
<p>Work is positive for <span class="m">0 ≤ θ &lt; 90°</span>, zero for <span class="m">θ = 90°</span> and negative for <span class="m">90° &lt; θ ≤ 180°</span>. Examples: gravity near Earth does <span class="m"><i>W</i><sub>grav</sub> = −<i>mg</i>(<i>y</i><sub>B</sub> − <i>y</i><sub>A</sub>)</span> on any path; kinetic friction on a level floor does <span class="m">−<i>μ</i><sub>k</sub><i>N</i> × (path length)</span>; a spring (<span class="m"><i>F</i><sub>x</sub> = −<i>kx</i></span>) does <span class="m"><i>W</i><sub>spring</sub> = −½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)</span>. A normal force on a fixed surface does no work. The <b>net work</b> is the sum of the works done by all the forces, which equals the work done by the net force.</p>`,
  legend: [
    { c: "c2", sym: `<b>F</b>`, name: "Force", desc: "The force whose work you are computing, in newtons. Name it: work is always done <i>by</i> a particular force <i>on</i> a particular body." },
    { c: "c3", sym: `<b>d</b>`, name: "Displacement", desc: "The displacement of the point where the force acts, in metres. For a variable path, the small steps <span class=\"m\">d<b>r</b></span>." },
    { c: "c4", sym: `θ`, name: "Angle between them", desc: "The angle between the force and the displacement. cos θ picks out the component of the force along the motion." },
    { c: "c1", sym: `<i>W</i>`, name: "Work", desc: "Energy transferred by the force, in joules. A scalar that can be positive, negative or zero. For a variable force it is the area under the F–x graph." }
  ],
  steps: { title: "How to compute the work done by a force", items: [
    `Name the force and the body, and find the displacement <span class="m c3"><b>d</b></span> of the point where the force acts.`,
    `For a constant force, find the angle <span class="m c4">θ</span> between <span class="m c2"><b>F</b></span> and <span class="m c3"><b>d</b></span> (tail to tail), then <span class="m"><i>W</i> = <i>Fd</i> cos θ</span>. With components, use <span class="m"><i>F</i><sub>x</sub><i>d</i><sub>x</sub> + <i>F</i><sub>y</sub><i>d</i><sub>y</sub></span>.`,
    `For a force that varies with position, integrate <span class="m">∫ <i>F</i><sub>x</sub> d<i>x</i></span> between the end points, or find the area under the graph (areas below the axis count as negative).`,
    `Give the sign meaning: positive means the force fed energy into the motion, negative means it took energy out.`,
    `For the net work, add the works of all the forces (or use the net force). Forces perpendicular to the motion contribute zero.`
  ] },
  example: {
    prompt: `A child pulls a 40.0 kg loaded sled 15.0 m across level snow with a rope held at 30.0° above the horizontal. The rope tension is 120 N and the coefficient of kinetic friction is 0.200. Find the work done by each force and the net work.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>W</i><sub>T</sub></span> = <span class="c2"><i>T</i></span><span class="c3"><i>d</i></span> cos <span class="c4">30.0°</span> = (120 N)(15.0 m)(0.866) = <span class="c1">1.56 × 10<sup>3</sup> J</span></span>`, note: "Only the horizontal part of the tension, 103.9 N, acts along the motion." },
      { math: `<span class="m"><i>N</i> = <i>mg</i> − <i>T</i> sin 30.0° = 392 N − 60.0 N = 332 N</span>`, note: "Vertical balance: the rope lifts a little, so the normal force is less than the weight." },
      { math: `<span class="m"><i>W</i><sub>f</sub> = −<i>μ</i><sub>k</sub><i>N</i><i>d</i> = −(0.200)(332 N)(15.0 m) = −996 J</span>`, note: "Friction (66.4 N) points backward, θ = 180°, cos θ = −1." },
      { math: `<span class="m"><i>W</i><sub>grav</sub> = <i>W</i><sub>N</sub> = 0</span>`, note: "Weight and normal force are perpendicular to the horizontal displacement." },
      { math: `<span class="m"><i>W</i><sub>net</sub> = 1559 J − 996 J + 0 + 0 = <span class="c1">563 J</span></span>`, note: "Add the works of all four forces as signed scalars." },
      { math: `<span class="m"><i>F</i><sub>net,x</sub><i>d</i> = (103.9 N − 66.4 N)(15.0 m) = 563 J</span>`, note: "Check: the net force times the displacement gives the same net work, and it is positive, so the sled speeds up." }
    ],
    answer: `The tension does <span class="m c1">+1.56 × 10<sup>3</sup> J</span>, friction <span class="m">−996 J</span>, gravity and the normal force <span class="m">0</span>, for a net work of <span class="m c1">563 J</span> on the sled.`
  },
  why: `<p>Work is how energy moves between a body and whatever pushes on it. It is the bridge from forces to energy: the work–energy theorem says the net work equals the change in kinetic energy, and the work done by gravity or a spring defines potential energy. With those two ideas many problems that would need the second law at every instant reduce to a single line of bookkeeping.</p>
<p>Engineers use it constantly. The energy a motor must deliver, the fuel a truck burns against friction and drag, the energy stored in a compressed spring or a stretched bungee cord, the energy a crumple zone must absorb in a crash: each is a work calculation, often an area under a measured force–displacement curve.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Integrates measured force–displacement curves from presses, springs and actuators to find the energy each stroke delivers." },
    { role: "Materials test engineer", use: "Reads toughness as the area under a stress–strain curve, the work per unit volume needed to break a sample." },
    { role: "Automotive safety engineer", use: "Designs crumple zones so the crush force times the crush distance absorbs a car's kinetic energy in a crash." },
    { role: "Biomechanist", use: "Computes the work a knee or hip does in a stride from joint force and displacement measured in a gait lab." },
    { role: "Elevator and crane engineer", use: "Finds the work to raise a load, mgh plus friction losses, to size the motor and the energy per trip." },
    { role: "Archery and bow designer", use: "Measures the draw-force curve of a bow and uses the area under it as the energy stored for the arrow." }
  ],
  life: [
    "Pulling a wagon or suitcase with the handle at an angle",
    "Feeling a stiff spring or exercise band get harder to stretch as it lengthens",
    "Carrying groceries across a flat parking lot compared with up stairs",
    "Pushing a stalled car along a road",
    "Reading food energy in joules or kilojoules on a label"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Machine design balances the work input by motors against useful output and losses." },
    { name: "Materials science", use: "Energy absorbed in deformation, toughness and fracture are work integrals." },
    { name: "Biomechanics and exercise science", use: "Mechanical work done by muscles and joints is measured to study performance and efficiency." },
    { name: "Thermodynamics", use: "Work done by a gas, ∫P dV, is the same idea applied to pressure and volume." }
  ],
  prereqWhy: {
    "mech-newton-2": "You need to find the forces on a body (weight, normal force, friction, tension) from free-body diagrams and the second law before you can compute the work each one does.",
    "mech-vector-products": "Work is the dot product F · d = Fd cos θ, so finding angles between vectors and computing dot products in components are used directly."
  },
  unlocksWhy: {
    "mech-kinetic": "The work–energy theorem states that the net work done on a body equals its change in kinetic energy, W_net = ΔK.",
    "mech-power": "Power is the rate at which work is done, P = dW/dt, which for a constant force becomes P = F · v."
  },
  mathWhy: {
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `The component of the force along the displacement is <span class="m"><i>F</i> cos θ</span>, and a rope at an angle lifts with <span class="m"><i>F</i> sin θ</span>, which changes the normal force and the friction.`,
    "calculus-1:Antiderivatives and the definite integral": `For a force that varies with position, <span class="m"><i>W</i> = ∫<sub><i>x</i><sub>1</sub></sub><sup><i>x</i><sub>2</sub></sup> <i>F</i>(<i>x</i>) d<i>x</i></span>, for example <span class="m">∫ <i>kx</i> d<i>x</i> = ½<i>kx</i><sup>2</sup></span> for a spring. Co-requisite: constant forces need only algebra, and graphs can be handled by areas first.`,
    "calculus-2:Area, volume, arc length, work": `Calculus II develops work as a definite integral (springs, pumping liquid, lifting a cable) and the area interpretation used for force–displacement graphs. Co-requisite: it deepens the same integral used here.`
  },
  beyond: [
    { field: "Thermodynamics", why: "Work done by and on gases, W = ∫P dV, is the first law's energy transfer by force, alongside heat." },
    { field: "Electricity & Magnetism", why: "Electric potential is the work per unit charge done by the field, a line integral of E · dl." },
    { field: "Classical Mechanics", why: "Virtual work and the line integral of force are the starting points of the Lagrangian formulation." },
    { field: "Mechanical Engineering", why: "Energy methods for machines, springs and structures (Castigliano, strain energy) are work calculations." }
  ],
  mistakes: [
    { wrong: `Using the whole force: "the rope pulls with 120 N over 15.0 m, so <span class="m"><i>W</i> = 1800 J</span>."`, fix: `Only the component along the motion does work: <span class="m">(120 N)(15.0 m) cos 30.0° = 1.56 × 10<sup>3</sup> J</span>.` },
    { wrong: `Giving friction positive work, or leaving out the sign.`, fix: `Friction on a sliding body points opposite the displacement, <span class="m">θ = 180°</span>, so its work is negative. The sign says energy is being removed from the motion.` },
    { wrong: `Saying you do work holding a weight still, or carrying it across a level floor at constant speed.`, fix: `No displacement means no work. On a level walk your upward force is perpendicular to the motion, <span class="m">cos 90° = 0</span>. (Your muscles use chemical energy, but they do no work on the load.)` },
    { wrong: `Using <span class="m"><i>W</i> = <i>kx</i> · <i>x</i> = <i>kx</i><sup>2</sup></span> for a spring.`, fix: `The spring force grows from 0 to <span class="m"><i>kx</i></span>, so the work is the triangle area <span class="m">½<i>kx</i><sup>2</sup></span>, found by integrating.` }
  ],
  practice: [
    { q: `You lift a 5.00 kg bag of groceries 1.20 m at constant speed, then carry it 10.0 m across a level floor at constant speed. How much work does your hand do on the bag in each part?`, a: `Lifting: your force equals <span class="m"><i>mg</i></span> and points along the motion, <span class="m"><i>W</i> = (5.00)(9.80)(1.20) = 58.8 J</span>. Carrying: your force is vertical and the motion horizontal, so <span class="m"><i>W</i> = 0</span>.` },
    { q: `A force <span class="m"><b>F</b> = (3.00 î − 4.00 ĵ) N</span> acts on a particle that moves through <span class="m"><b>d</b> = (5.00 î + 2.00 ĵ) m</span>. Find the work and the angle between <span class="m"><b>F</b></span> and <span class="m"><b>d</b></span>.`, a: `<span class="m"><i>W</i> = (3.00)(5.00) + (−4.00)(2.00) = 7.00 J</span>. <span class="m">|<b>F</b>| = 5.00 N</span>, <span class="m">|<b>d</b>| = √29 = 5.39 m</span>, so <span class="m">cos θ = 7.00/26.9 = 0.260</span>, <span class="m">θ = 74.9°</span>.` },
    { q: `A spring with <span class="m"><i>k</i> = 400 N/m</span> starts relaxed. How much work must you do to stretch it by 0.100 m? How much more to stretch it from 0.100 m to 0.200 m?`, a: `<span class="m"><i>W</i><sub>1</sub> = ½(400)(0.100)<sup>2</sup> = 2.00 J</span>. <span class="m"><i>W</i><sub>2</sub> = ½(400)(0.200<sup>2</sup> − 0.100<sup>2</sup>) = 6.00 J</span>, three times as much for the same extra stretch, because the force keeps growing.` },
    { q: `A force along the x-axis is <span class="m"><i>F</i><sub>x</sub>(<i>x</i>) = (2.00 N/m)<i>x</i> + (3.00 N/m²)<i>x</i><sup>2</sup></span>. Find the work it does as a particle moves from <span class="m"><i>x</i> = 1.00 m</span> to <span class="m"><i>x</i> = 3.00 m</span>.`, a: `<span class="m"><i>W</i> = ∫<sub>1</sub><sup>3</sup> (2<i>x</i> + 3<i>x</i><sup>2</sup>) d<i>x</i> = [<i>x</i><sup>2</sup> + <i>x</i><sup>3</sup>]<sub>1</sub><sup>3</sup> = (9 + 27) − (1 + 1) = 34.0 J</span>.` }
  ],
  origin: `Gaspard-Gustave de Coriolis gave the product of force and distance the name <i>travail</i> (work) in <i>Du calcul de l'effet des machines</i> (1829), in the same work where he fixed the factor ½ in kinetic energy. The unit is named after James Prescott Joule, whose experiments in the 1840s linked mechanical work to heat.`
};
