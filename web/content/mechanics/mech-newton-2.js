window.ARITH = window.ARITH || {};

ARITH["mech-newton-2"] = {
  title: "Newton's Second Law, Mass & Weight",
  short: "Net force equals mass times acceleration",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · Newton's laws",
  hero: `<span class="m"><span class="c2">Σ<b>F</b></span> = <span class="c3"><i>m</i></span><span class="c1"><b>a</b></span> &nbsp;&nbsp; <span class="c4"><i>w</i></span> = <span class="c3"><i>m</i></span><i>g</i></span>`,
  lede: `The <span class="c2">net force</span> on a body sets its <span class="c1">acceleration</span>: same direction, and a size equal to the net force divided by the <span class="c3">mass</span>. Weight is the one force every body near Earth feels, <span class="m"><i>mg</i></span> straight down.`,
  plain: `<p>Push an empty shopping cart and it takes off. Push a full one just as hard and it barely picks up speed. The second law puts numbers on this. The acceleration you get is the total push divided by how much stuff you are pushing: <span class="m"><i>a</i> = <i>F</i><sub>net</sub>/<i>m</i></span>. Double the force and the acceleration doubles. Double the mass and it halves.</p>
<p>"Total push" matters. If you push a cart forward with 30 N and friction pulls back with 10 N, only the 20 N difference accelerates it. You always add up every force as vectors first, then divide by the mass. The acceleration points the same way as that total, which is not always the way the object is moving: a car braking to a stop moves forward while its acceleration points backward.</p>
<p><b>Mass</b> and <b>weight</b> are different things. Mass, in kilograms, measures how hard a body is to accelerate. It is the same on Earth, the Moon or in orbit. Weight, in newtons, is the gravitational force on that mass, <span class="m"><i>w</i> = <i>mg</i></span>. An astronaut of 70 kg weighs about 686 N on Earth and about 113 N on the Moon, but is exactly as hard to shove sideways in both places.</p>`,
  formal: `<p><b>Newton's second law.</b> In an inertial frame, the acceleration of a body of constant mass <span class="m"><i>m</i></span> is proportional to the net external force on it and in the same direction:</p>
<div class="display"><span class="c2"><b>F</b><sub>net</sub> = Σ<b>F</b></span> = <span class="c3"><i>m</i></span><span class="c1"><b>a</b></span> = <span class="c3"><i>m</i></span> <span class="fr"><span>d<sup>2</sup><b>r</b></span><span>d<i>t</i><sup>2</sup></span></span> &nbsp;&nbsp;<span class="dim">component form:</span>&nbsp; Σ<i>F</i><sub>x</sub> = <i>ma</i><sub>x</sub>, &nbsp;Σ<i>F</i><sub>y</sub> = <i>ma</i><sub>y</sub>, &nbsp;Σ<i>F</i><sub>z</sub> = <i>ma</i><sub>z</sub><br><span class="dim">general form:</span>&nbsp; <b>F</b><sub>net</sub> = <span class="fr"><span>d<b>p</b></span><span>d<i>t</i></span></span>, &nbsp;<b>p</b> = <i>m</i><b>v</b></div>
<p>The SI unit of force is the <b>newton</b>, <span class="m">1 N = 1 kg·m/s²</span>. Only external forces enter the sum; internal forces between parts of the system cancel in pairs by the third law. The first law is the special case <span class="m">Σ<b>F</b> = 0 ⇔ <b>a</b> = 0</span>.</p>
<p>The <b>weight</b> of a body is the gravitational force on it, <span class="m"><span class="c4"><b>w</b></span> = <i>m</i><b>g</b></span>, directed toward the centre of the planet, with <span class="m"><i>g</i> = 9.80 m/s²</span> near Earth's surface (1.62 m/s² on the Moon, 3.71 m/s² on Mars). In free fall weight is the only force, so <span class="m"><b>a</b> = <b>g</b></span> for every mass.</p>`,
  legend: [
    { c: "c2", sym: `Σ<b>F</b>`, name: "Net force", desc: "The vector sum of every external force on the body, in newtons. This is what the second law uses, never one force alone." },
    { c: "c3", sym: `<i>m</i>`, name: "Mass", desc: "Inertia in kilograms: how strongly the body resists a change in velocity. It does not depend on location." },
    { c: "c1", sym: `<b>a</b>`, name: "Acceleration", desc: "Rate of change of velocity, in m/s². It always points along the net force." },
    { c: "c4", sym: `<i>w</i> = <i>mg</i>`, name: "Weight", desc: "The gravitational force on the mass, in newtons, pointing down. It changes with g from planet to planet." }
  ],
  steps: { title: "How to apply the second law", items: [
    `Choose the body (the system) and an inertial coordinate system. Put one axis along the expected acceleration if you know it.`,
    `Draw a free-body diagram: every external force on that body, including the <span class="c4">weight</span> <span class="m"><i>mg</i></span>.`,
    `Resolve each force into components and write <span class="m">Σ<i>F</i><sub>x</sub> = <i>ma</i><sub>x</sub></span> and <span class="m">Σ<i>F</i><sub>y</sub> = <i>ma</i><sub>y</sub></span>, with signs from your axes.`,
    `Solve for the unknown: often <span class="m"><i>a</i> = Σ<i>F</i>/<i>m</i></span>, or a force once the acceleration is known from kinematics.`,
    `Check units (N = kg·m/s²), the sign of the answer, and whether its size is sensible compared with <span class="m"><i>g</i></span>.`
  ] },
  example: {
    prompt: `A 1.50 × 10<sup>3</sup> kg car speeds up uniformly from rest to 27.0 m/s in 9.00 s on a level road. Air drag and rolling resistance together oppose the motion with 450 N. What forward force does the road exert on the drive wheels?`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>a</i></span> = <span class="fr"><span>Δ<i>v</i></span><span>Δ<i>t</i></span></span> = <span class="fr"><span>27.0 m/s</span><span>9.00 s</span></span> = <span class="c1">3.00 m/s²</span></span>`, note: "Kinematics gives the acceleration first; take +x forward." },
      { math: `<span class="m"><span class="c2">Σ<i>F</i><sub>x</sub></span> = <span class="c3"><i>m</i></span><span class="c1"><i>a</i></span> = (1.50 × 10<sup>3</sup> kg)(3.00 m/s²) = <span class="c2">4.50 × 10<sup>3</sup> N</span></span>`, note: "The net horizontal force needed for that acceleration." },
      { math: `<span class="m"><i>F</i><sub>drive</sub> − 450 N = 4.50 × 10<sup>3</sup> N</span>`, note: "Net force is the forward push minus the resistive forces." },
      { math: `<span class="m"><i>F</i><sub>drive</sub> = 4.95 × 10<sup>3</sup> N</span>`, note: "Solve for the forward force from the road (static friction on the tyres)." },
      { math: `<span class="m"><span class="c4"><i>w</i></span> = <i>mg</i> = (1.50 × 10<sup>3</sup> kg)(9.80 m/s²) = 1.47 × 10<sup>4</sup> N = <i>N</i></span>`, note: "Vertically a_y = 0, so the road's normal force balances the weight." },
      { math: `<span class="m"><i>a</i>/<i>g</i> = 3.00/9.80 ≈ 0.31</span>`, note: "Sanity check: about 0.3 g, typical of brisk acceleration in an ordinary car." }
    ],
    answer: `The road must push the car forward with <span class="m c2">4.95 × 10<sup>3</sup> N</span>, of which 4.50 × 10³ N accelerates the car and 450 N cancels the resistance.`
  },
  why: `<p>The second law turns forces into motion. Given the forces you can predict the acceleration, then use kinematics to predict where the body will be. Run it backward and a measured motion tells you the forces, which is how crash tests, accelerometers and force plates work. Nearly every problem in the rest of mechanics starts with <span class="m">Σ<b>F</b> = <i>m</i><b>a</b></span> written for a well-chosen body.</p>
<p>It is also where mass and weight part ways. A bridge must carry the weight of its load, a force in newtons, while the force needed to change a vehicle's velocity depends on its mass in kilograms; a spacecraft that is weightless in orbit still needs large forces to change its velocity.</p>`,
  careers: [
    { role: "Automotive engineer", use: "Uses F = ma with vehicle mass and target 0–100 km/h times to size motor torque and check tyre grip limits." },
    { role: "Aerospace engineer", use: "Computes a rocket's acceleration from thrust minus weight and drag, divided by a mass that falls as propellant burns." },
    { role: "Biomechanist", use: "Reads ground-reaction forces from a force plate and divides the net force by body mass to get a sprinter's acceleration." },
    { role: "Elevator engineer", use: "Sets cable and motor ratings from m(g + a) for the maximum load at the design acceleration." },
    { role: "Crash-test engineer", use: "Converts accelerometer readings from a crash dummy into forces on the body with F = ma." },
    { role: "Structural engineer", use: "Converts masses in kilograms into weight loads in newtons with w = mg before checking beams and columns." }
  ],
  life: [
    "Feeling how much harder a loaded trolley is to start than an empty one",
    "Reading a bathroom scale, which shows mass but actually measures a force",
    "Knowing why a heavy truck needs a longer distance to stop than a car at the same speed and braking force",
    "Understanding why astronauts are weightless in orbit yet still have their full mass",
    "Pushing a stalled car: a little force on a big mass gives only a slow start"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Machine design, vehicle dynamics and vibration analysis all start from ΣF = ma for each part." },
    { name: "Aerospace engineering", use: "Flight dynamics and rocket trajectories are Newton's second law integrated in time." },
    { name: "Biomechanics and kinesiology", use: "Joint and muscle forces are inferred from measured accelerations of body segments." },
    { name: "Civil engineering", use: "Dead loads are masses times g; earthquake loads are masses times ground acceleration." }
  ],
  prereqWhy: {
    "mech-newton-1": "The first law defines inertial frames and says zero net force means zero acceleration; the second law extends this to say exactly what acceleration a nonzero net force produces."
  },
  unlocksWhy: {
    "mech-common-forces": "Normal force, tension and spring forces are found by writing ΣF = ma for a body, for example N = m(g + a) in an accelerating elevator.",
    "mech-work": "The work–energy theorem comes from integrating ΣF = ma along the path, so net work equals the change in kinetic energy.",
    "mech-torque": "Torque and the rotational law τ = Iα are the rotational counterparts of force and ΣF = ma, and are derived from the second law applied to each particle."
  },
  mathWhy: {
    "a1-literal": `Rearranging <span class="m"><i>F</i> = <i>ma</i></span> into <span class="m"><i>a</i> = <i>F</i>/<i>m</i></span> or <span class="m"><i>m</i> = <i>F</i>/<i>a</i></span>, and solving <span class="m"><i>F</i><sub>drive</sub> − <i>f</i> = <i>ma</i></span> for one unknown force.`,
    "pa-proportional": `For a fixed mass, <span class="m"><i>a</i> = (1/<i>m</i>)<i>F</i></span> is a proportional relationship through the origin with constant 1/<i>m</i>; weight <span class="m"><i>w</i> = <i>mg</i></span> is proportional to mass with constant <i>g</i>.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Lagrangian and Hamiltonian mechanics reproduce F = ma and turn it into differential equations for oscillators, orbits and rigid bodies." },
    { field: "Electricity & Magnetism", why: "The motion of charges in fields is found from ma = qE + qv × B, the second law with electric and magnetic forces." },
    { field: "Computational Physics", why: "Molecular dynamics and game physics engines step a = F/m forward in time for millions of particles." },
    { field: "Aerospace Engineering", why: "Rocket and aircraft performance come from the second law with thrust, drag, lift and a changing mass." }
  ],
  mistakes: [
    { wrong: `Using one force in place of the net force: "the engine pushes with 4950 N, so <span class="m"><i>a</i> = 4950/1500 = 3.30 m/s²</span>."`, fix: `Add every force first: <span class="m"><i>a</i> = (4950 − 450)/1500 = 3.00 m/s²</span>. The second law uses <span class="m">Σ<b>F</b></span>.` },
    { wrong: `Giving weight in kilograms: "the crate weighs 20 kg."`, fix: `20 kg is the mass. The weight is <span class="m"><i>mg</i> = (20 kg)(9.80 m/s²) = 196 N</span>. Mass is in kg, force is in N.` },
    { wrong: `Assuming the acceleration points the way the object moves.`, fix: `It points along the net force. A car braking while moving forward has a backward acceleration and a backward net force.` },
    { wrong: `Thinking heavier objects fall faster because their weight is bigger.`, fix: `Weight and mass grow together: <span class="m"><i>a</i> = <i>mg</i>/<i>m</i> = <i>g</i></span> for every mass when drag is negligible.` }
  ],
  practice: [
    { q: `What are the mass and the weight of a 65.0 kg student on Earth and on the Moon (<span class="m"><i>g</i><sub>Moon</sub> = 1.62 m/s²</span>)?`, a: `Mass is 65.0 kg in both places. Weight on Earth <span class="m">(65.0)(9.80) = 637 N</span>; on the Moon <span class="m">(65.0)(1.62) = 105 N</span>.` },
    { q: `A net force of 24.0 N acts on a 3.00 kg cart. Find its acceleration. What is the acceleration if the same net force acts on a 6.00 kg cart?`, a: `<span class="m"><i>a</i> = 24.0/3.00 = 8.00 m/s²</span>. Doubling the mass halves it: <span class="m">24.0/6.00 = 4.00 m/s²</span>, in the direction of the net force.` },
    { q: `Two horizontal forces act on a 4.00 kg box on a frictionless floor: 10.0 N east and 6.00 N north. Find the magnitude and direction of its acceleration.`, a: `<span class="m"><i>F</i><sub>net</sub> = √(10.0² + 6.00²) = 11.7 N</span>, so <span class="m"><i>a</i> = 11.66/4.00 = 2.92 m/s²</span> at <span class="m">tan<sup>−1</sup>(6.00/10.0) = 31.0°</span> north of east, along the net force.` },
    { q: `A 2.00 kg particle moves along the x-axis with <span class="m"><i>x</i>(<i>t</i>) = 3.00<i>t</i><sup>3</sup> − 4.00<i>t</i></span> (x in m, t in s). Find the net force on it at <span class="m"><i>t</i> = 2.00 s</span>.`, a: `<span class="m"><i>v</i> = d<i>x</i>/d<i>t</i> = 9.00<i>t</i><sup>2</sup> − 4.00</span>, <span class="m"><i>a</i> = d<i>v</i>/d<i>t</i> = 18.0<i>t</i> = 36.0 m/s²</span> at 2.00 s. <span class="m"><i>F</i><sub>net</sub> = <i>ma</i> = (2.00)(36.0) = 72.0 N</span> in the +x direction.` }
  ],
  origin: `Newton stated the law in the <i>Principia</i> (1687) as "the change of motion is proportional to the motive force impressed", in words usually read today as the momentum form <span class="m"><b>F</b> = d<b>p</b>/d<i>t</i></span>. Leonhard Euler wrote it as differential equations in coordinates, the form used today, around 1750.`
};
