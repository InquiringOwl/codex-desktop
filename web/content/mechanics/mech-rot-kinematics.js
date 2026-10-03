window.ARITH = window.ARITH || {};

ARITH["mech-rot-kinematics"] = {
  title: "Rotational Variables & Kinematics",
  short: "Angle, angular velocity and angular acceleration",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · rotation",
  hero: `<span class="m"><span class="c3">ω</span> = <span class="fr"><span>d<span class="c2">θ</span></span><span>d<i>t</i></span></span> &nbsp;&nbsp; <span class="c1">α</span> = <span class="fr"><span>d<span class="c3">ω</span></span><span>d<i>t</i></span></span> &nbsp;&nbsp; <span class="c4"><i>v</i><sub>t</sub></span> = <i>r</i><span class="c3">ω</span></span>`,
  lede: `A turning wheel is described by one <span class="c2">angle</span>, its rate of change, the <span class="c3">angular velocity</span>, and that rate's rate of change, the <span class="c1">angular acceleration</span>. Every point on the wheel shares these three, while its <span class="c4">tangential speed</span> grows with its distance from the axis.`,
  plain: `<p>When a wheel turns, every point on it goes around the axle together. A spot near the hub and a spot on the rim both finish one turn at the same moment, even though the rim spot travels much farther. So the natural way to describe the wheel is by how far it has turned, not how far any one point has moved. That turning amount is the <b>angle</b> <span class="m">θ</span>, measured in radians.</p>
<p>How fast the angle changes is the <b>angular velocity</b> <span class="m">ω</span>, in radians per second. How fast ω itself changes is the <b>angular acceleration</b> <span class="m">α</span>. These play exactly the roles that position, velocity and acceleration play for motion along a line, and when α is constant the same four kinematics equations work with the letters swapped: <span class="m"><i>x</i> → θ</span>, <span class="m"><i>v</i> → ω</span>, <span class="m"><i>a</i> → α</span>.</p>
<p>To get back to an actual point on the wheel, multiply by its distance <span class="m"><i>r</i></span> from the axis. It moves along an arc <span class="m"><i>s</i> = <i>r</i>θ</span> at speed <span class="m"><i>v</i> = <i>r</i>ω</span>. This only works in radians, because a radian is defined as the angle whose arc equals the radius. On a spinning disc the rim is fast and the centre is still, yet ω is the same everywhere.</p>`,
  formal: `<p>For a rigid body rotating about a fixed axis, the <b>angular position</b> <span class="m">θ</span> of a reference line is measured in radians, with counterclockwise positive: <span class="m">θ = <i>s</i>/<i>r</i></span>, so one revolution is <span class="m">2π rad</span>. The <b>angular velocity</b> and <b>angular acceleration</b> are</p>
<div class="display"><span class="c3">ω</span> = lim<sub>Δ<i>t</i>→0</sub> <span class="fr"><span>Δ<span class="c2">θ</span></span><span>Δ<i>t</i></span></span> = <span class="fr"><span>d<span class="c2">θ</span></span><span>d<i>t</i></span></span> &nbsp;<span class="dim">(rad/s)</span>, &nbsp;&nbsp; <span class="c1">α</span> = <span class="fr"><span>d<span class="c3">ω</span></span><span>d<i>t</i></span></span> = <span class="fr"><span>d<sup>2</sup><span class="c2">θ</span></span><span>d<i>t</i><sup>2</sup></span></span> &nbsp;<span class="dim">(rad/s²)</span><br><span class="dim">constant α:</span>&nbsp; ω = ω<sub>0</sub> + α<i>t</i>, &nbsp; θ = θ<sub>0</sub> + ω<sub>0</sub><i>t</i> + ½α<i>t</i><sup>2</sup>, &nbsp; ω<sup>2</sup> = ω<sub>0</sub><sup>2</sup> + 2α(θ − θ<sub>0</sub>), &nbsp; θ − θ<sub>0</sub> = ½(ω<sub>0</sub> + ω)<i>t</i><br><span class="dim">a point at radius <i>r</i>:</span>&nbsp; <i>s</i> = <i>r</i>θ, &nbsp; <span class="c4"><i>v</i><sub>t</sub></span> = <i>r</i>ω, &nbsp; <i>a</i><sub>t</sub> = <i>r</i>α, &nbsp; <i>a</i><sub>c</sub> = <span class="fr"><span><i>v</i><sub>t</sub><sup>2</sup></span><span><i>r</i></span></span> = <i>r</i>ω<sup>2</sup></div>
<p>As vectors, <span class="m"><b>ω</b></span> and <span class="m"><b>α</b></span> lie along the rotation axis, with the direction of <b>ω</b> given by the right-hand rule (curl the fingers with the rotation, the thumb points along <b>ω</b>). When ω and α have the same sign the rotation speeds up; opposite signs mean it slows down. The total acceleration of a point is <span class="m"><b>a</b> = <b>a</b><sub>t</sub> + <b>a</b><sub>c</sub></span>, with magnitude <span class="m">√(<i>a</i><sub>t</sub><sup>2</sup> + <i>a</i><sub>c</sub><sup>2</sup>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `θ`, name: "Angular position", desc: "The angle turned from a reference line, in radians, counterclockwise positive. One revolution is 2π rad." },
    { c: "c3", sym: `ω`, name: "Angular velocity", desc: "The rate of change of θ, in rad/s. Every point of a rigid body has the same ω." },
    { c: "c1", sym: `α`, name: "Angular acceleration", desc: "The rate of change of ω, in rad/s². Same sign as ω means speeding up; opposite sign means slowing down." },
    { c: "c4", sym: `<i>v</i><sub>t</sub> = <i>r</i>ω`, name: "Tangential speed", desc: "The speed of a point at distance r from the axis, directed along the tangent. It is zero on the axis and largest at the rim." }
  ],
  steps: { title: "How to solve a rotational kinematics problem", items: [
    `Pick the positive sense of rotation (usually counterclockwise) and convert every angle to radians and every rate to rad/s: <span class="m">1 rev = 2π rad</span>, <span class="m">1 rpm = 2π/60 rad/s</span>.`,
    `List the knowns and the unknown among <span class="m">θ, ω<sub>0</sub>, ω, α, <i>t</i></span>, with signs.`,
    `If <span class="c1">α</span> is constant, choose the kinematics equation that contains the unknown and none of the missing quantities, exactly as for linear motion.`,
    `If ω or θ is given as a function of time, differentiate (or integrate) instead: <span class="m">ω = dθ/d<i>t</i></span>, <span class="m">α = dω/d<i>t</i></span>.`,
    `For a particular point, multiply by its radius: <span class="m"><i>s</i> = <i>r</i>θ</span>, <span class="m"><span class="c4"><i>v</i><sub>t</sub></span> = <i>r</i>ω</span>, <span class="m"><i>a</i><sub>t</sub> = <i>r</i>α</span>, <span class="m"><i>a</i><sub>c</sub> = <i>r</i>ω<sup>2</sup></span>.`,
    `Check the signs and convert back to revolutions or rpm if the question asks.`
  ] },
  example: {
    prompt: `A computer hard-disk platter spins up from rest to 7200 rpm in 4.00 s with constant angular acceleration. Find the angular acceleration, the number of revolutions it makes while spinning up, and the tangential speed at full speed of a point 4.50 cm from the axis.`,
    lines: [
      { math: `<span class="m"><span class="c3">ω</span> = 7200 <span class="fr"><span>rev</span><span>min</span></span> × <span class="fr"><span>2π rad</span><span>1 rev</span></span> × <span class="fr"><span>1 min</span><span>60 s</span></span> = <span class="c3">754 rad/s</span></span>`, note: "Convert the final rate to rad/s first; ω₀ = 0." },
      { math: `<span class="m"><span class="c1">α</span> = <span class="fr"><span>ω − ω<sub>0</sub></span><span><i>t</i></span></span> = <span class="fr"><span>754 rad/s</span><span>4.00 s</span></span> = <span class="c1">188 rad/s²</span></span>`, note: "From ω = ω₀ + αt." },
      { math: `<span class="m"><span class="c2">θ</span> = ½(ω<sub>0</sub> + ω)<i>t</i> = ½(0 + 754 rad/s)(4.00 s) = <span class="c2">1.51 × 10<sup>3</sup> rad</span></span>`, note: "Average angular velocity times time; this equation needs no α." },
      { math: `<span class="m"><span class="fr"><span>1508 rad</span><span>2π rad/rev</span></span> = 240 rev</span>`, note: "Convert the angle to revolutions." },
      { math: `<span class="m"><span class="c4"><i>v</i><sub>t</sub></span> = <i>r</i>ω = (0.0450 m)(754 rad/s) = <span class="c4">33.9 m/s</span></span>`, note: "The radian drops out: rad is a ratio of lengths, so m·rad/s is m/s." },
      { math: `<span class="m">7200 rpm = 120 rev/s; &nbsp;average 60 rev/s × 4.00 s = 240 rev ✓</span>`, note: "Sanity check in revolutions: a uniform spin-up averages half the final rate." }
    ],
    answer: `The platter's angular acceleration is <span class="m c1">188 rad/s²</span>, it turns <span class="m c2">240 revolutions</span> while spinning up, and the point 4.50 cm out moves at <span class="m c4">33.9 m/s</span> at full speed.`
  },
  why: `<p>Anything that turns, from a car engine and a turbine to a hard disk, a centrifuge or the Earth, is described with θ, ω and α. Engine speeds in rpm, gear ratios, the spin rate of a satellite and the angular speed of a joint in a gait lab are all these same quantities. Because they obey the same equations as linear kinematics, everything learned about straight-line motion carries straight over.</p>
<p>These variables are the language of the rest of rotation. Torque produces angular acceleration, rotational kinetic energy is ½Iω², angular momentum is Iω, and rolling ties <span class="m"><i>v</i> = <i>R</i>ω</span>. All of them assume ω in radians per second.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Converts motor and shaft speeds between rpm and rad/s and uses v = rω to find belt speeds and gear-tooth surface speeds." },
    { role: "Automotive technician", use: "Relates engine rpm, gear ratio and tyre radius to road speed when diagnosing speedometer and transmission faults." },
    { role: "Wind turbine engineer", use: "Sets rotor ω so that the blade-tip speed rω stays within noise and structural limits." },
    { role: "Biomechanist", use: "Measures the angular velocity and angular acceleration of joints from motion-capture angles to study pitching and running." },
    { role: "Satellite attitude engineer", use: "Plans how fast reaction wheels must spin up and down to turn a spacecraft through a given angle." },
    { role: "Laboratory technician", use: "Converts centrifuge rpm and rotor radius into the centripetal acceleration rω², quoted as multiples of g." }
  ],
  life: [
    "Reading an engine tachometer in rpm while driving",
    "Understanding why the outside of a merry-go-round feels faster than the middle",
    "Setting a washing machine spin speed or a drill speed",
    "Seeing a bike's rear wheel turn faster than the pedals in a high gear",
    "Knowing why a record's outer grooves pass the needle faster than the inner ones"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Shafts, gears, pulleys and engines are specified by angular speeds and accelerations." },
    { name: "Robotics", use: "Joint angles, joint rates and their limits define how a robot arm moves." },
    { name: "Astronomy", use: "Planetary rotation, pulsar spin rates and spin-down use angular velocity and angular acceleration." },
    { name: "Biomechanics", use: "Joint kinematics describes limb motion by angles and angular velocities." }
  ],
  prereqWhy: {
    "mech-circular": "Circular motion introduced the angle, period and the speed of a point on a circle; rotational kinematics turns these into θ, ω and α for a whole rigid body."
  },
  unlocksWhy: {
    "mech-rot-inertia": "Rotational kinetic energy ½Iω² needs the angular velocity in rad/s, and I is found by adding up ½mv² with v = rω for every particle.",
    "mech-torque": "Torque is what changes a body's angular velocity, so its effect is measured by the angular acceleration α defined here."
  },
  mathWhy: {
    "trig-radians": `Every rotational formula assumes radians: <span class="m"><i>s</i> = <i>r</i>θ</span> and <span class="m"><i>v</i> = <i>r</i>ω</span> hold only because a radian is arc length over radius. Converting rpm and degrees with <span class="m">2π rad = 360° = 1 rev</span> comes up in almost every problem.`,
    "calculus-1:Definition of the derivative": `<span class="m">ω = dθ/d<i>t</i></span> and <span class="m">α = dω/d<i>t</i></span> are derivatives, used directly when θ(t) is given as a formula. Co-requisite: the constant-α equations work with algebra alone, and the derivative covers the general case.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Rigid-body dynamics uses the angular velocity vector ω in three dimensions, Euler angles and the rotating-frame formula v = ω × r." },
    { field: "Mechanical Engineering", why: "Gear trains, cams and linkages are designed by relating the angular velocities and accelerations of connected parts." },
    { field: "Waves & Fluids", why: "Angular frequency ω = 2πf, measured in rad/s, carries straight over to oscillations and waves." },
    { field: "Electricity & Magnetism", why: "Generators and motors produce alternating voltages whose angular frequency is the coil's ω." }
  ],
  mistakes: [
    { wrong: `Using rpm directly in <span class="m"><i>v</i> = <i>r</i>ω</span>: "<span class="m">(0.0450 m)(7200) = 324 m/s</span>".`, fix: `Convert first: <span class="m">7200 rpm = 7200 × 2π/60 = 754 rad/s</span>, so <span class="m"><i>v</i> = 33.9 m/s</span>.` },
    { wrong: `Using degrees in <span class="m"><i>s</i> = <i>r</i>θ</span>: a 90° turn of a 2.0 m radius gives "<span class="m"><i>s</i> = 180 m</span>".`, fix: `<span class="m">90° = π/2 rad</span>, so <span class="m"><i>s</i> = (2.0 m)(1.57) = 3.1 m</span>. Arc-length formulas need radians.` },
    { wrong: `Thinking points farther from the axis have a larger angular velocity.`, fix: `All points of a rigid body share the same ω and α. Only the linear quantities <span class="m"><i>v</i> = <i>r</i>ω</span>, <span class="m"><i>a</i><sub>t</sub> = <i>r</i>α</span> and <span class="m"><i>a</i><sub>c</sub> = <i>r</i>ω<sup>2</sup></span> grow with <i>r</i>.` },
    { wrong: `Giving a slowing wheel a positive α because "it is still turning counterclockwise".`, fix: `Slowing down means α opposes ω. A wheel turning at +12.0 rad/s and slowing has α &lt; 0.` }
  ],
  practice: [
    { q: `A vinyl record turns at <span class="m">33⅓ rpm</span>. Find its angular velocity in rad/s and the speed of a groove 15.0 cm from the centre.`, a: `<span class="m">ω = (100/3)(2π/60) = 3.49 rad/s</span>; <span class="m"><i>v</i> = <i>r</i>ω = (0.150 m)(3.49 rad/s) = 0.524 m/s</span>.` },
    { q: `A grinding wheel turning at 12.0 rad/s slows at a constant 2.00 rad/s² until it stops. How long does it take, and how many revolutions does it make?`, a: `<span class="m"><i>t</i> = (0 − 12.0)/(−2.00) = 6.00 s</span>. <span class="m">θ = (0 − 12.0<sup>2</sup>)/(2(−2.00)) = 36.0 rad = 5.73 rev</span>.` },
    { q: `Two children ride a merry-go-round turning at 0.500 rev/s, one 1.00 m and the other 2.00 m from the axis. Compare their angular velocities, speeds and centripetal accelerations.`, a: `Same ω for both: <span class="m">ω = 2π(0.500) = 3.14 rad/s</span>. Speeds <span class="m"><i>r</i>ω = 3.14</span> and <span class="m">6.28 m/s</span>; centripetal accelerations <span class="m"><i>r</i>ω<sup>2</sup> = 9.87</span> and <span class="m">19.7 m/s²</span>. Doubling r doubles both, at the same ω.` },
    { q: `A flywheel's angle is <span class="m">θ(<i>t</i>) = 2.00<i>t</i><sup>3</sup> − 6.00<i>t</i></span> (θ in rad, t in s). When is it momentarily at rest? Find ω and α at <span class="m"><i>t</i> = 2.00 s</span>, and the centripetal acceleration then of a point 0.500 m from the axis.`, a: `<span class="m">ω = dθ/d<i>t</i> = 6.00<i>t</i><sup>2</sup> − 6.00 = 0</span> at <span class="m"><i>t</i> = 1.00 s</span>. <span class="m">α = dω/d<i>t</i> = 12.0<i>t</i></span>. At 2.00 s: <span class="m">ω = 18.0 rad/s</span>, <span class="m">α = 24.0 rad/s²</span>, <span class="m"><i>a</i><sub>c</sub> = (0.500)(18.0)<sup>2</sup> = 162 m/s²</span>.` }
  ],
  origin: `Leonhard Euler set out the kinematics of rigid bodies, including a single angular velocity shared by every point, in <i>Theoria motus corporum solidorum seu rigidorum</i> (1765). The radian as the natural angle measure goes back to Roger Cotes (1714); the name "radian" first appeared in print in 1873, in examination questions set by James Thomson at Queen's College, Belfast.`
};
