window.ARITH = window.ARITH || {};

ARITH["mech-newton-apps"] = {
  title: "Inclines & Connected Objects",
  short: "Ramps, pulleys and bodies joined by ropes",
  grade: "College PHYS 1xx · University Physics I",
  hours: 7,
  voice: "plain",
  eyebrow: "Mechanics · applications of Newton's laws",
  hero: `<span class="m"><span class="c1"><i>a</i></span> = <i>g</i>(<span class="c2">sin θ</span> − <i>μ</i><sub>k</sub> <span class="c3">cos θ</span>)</span>`,
  lede: `On a ramp, split the weight into a part <span class="c2">along the slope</span> and a part <span class="c3">into the slope</span>. For bodies joined by a rope, write the second law for each body; the shared <span class="c4">tension</span> drops out when you add the equations and leaves the common <span class="c1">acceleration</span>.`,
  plain: `<p>A block on a ramp is pulled straight down by gravity, but it can only move along the ramp. So tilt your axes to match the ramp. The weight then has two parts: <span class="m"><i>mg</i> sin θ</span> pulling the block down the slope and <span class="m"><i>mg</i> cos θ</span> pressing it into the slope. The second part is balanced by the normal force, so <span class="m"><i>N</i> = <i>mg</i> cos θ</span> and friction is <span class="m"><i>μ</i><i>mg</i> cos θ</span>. The first part, minus friction, accelerates the block. At θ = 0 nothing happens; at 90° the block falls freely.</p>
<p>When two bodies are tied together by a light rope that does not stretch, they move together: same speed, same size of acceleration. The rope pulls on each of them with the same tension. Write <span class="m">Σ<i>F</i> = <i>ma</i></span> for each body separately, with the tension appearing in both. You get two equations with two unknowns, the acceleration and the tension, and adding them makes the tension disappear.</p>
<p>A neat shortcut: for the whole rope-connected system, the acceleration is the net outside force along the rope's path divided by the total mass. For an <b>Atwood machine</b> (two masses over a pulley) that is <span class="m">(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>g</i></span> over <span class="m"><i>m</i><sub>1</sub> + <i>m</i><sub>2</sub></span>. Then go back to one body to find the tension.</p>`,
  formal: `<p><b>Incline.</b> For a block on a plane inclined at θ, take <span class="m"><i>x</i></span> down the slope and <span class="m"><i>y</i></span> perpendicular to it. The weight has components <span class="m"><span class="c2"><i>mg</i> sin θ</span></span> along <span class="m">+<i>x</i></span> and <span class="m"><span class="c3"><i>mg</i> cos θ</span></span> along <span class="m">−<i>y</i></span>.</p>
<div class="display">Σ<i>F</i><sub>y</sub> = <i>N</i> − <span class="c3"><i>mg</i> cos θ</span> = 0 &nbsp;⇒&nbsp; <i>N</i> = <i>mg</i> cos θ<br>sliding down: &nbsp; <span class="c1"><i>a</i></span> = <i>g</i>(sin θ − <i>μ</i><sub>k</sub> cos θ); &nbsp;&nbsp; at rest if tan θ ≤ <i>μ</i><sub>s</sub></div>
<p><b>Connected objects.</b> Bodies joined by a massless, inextensible string over ideal pulleys share the magnitude of acceleration <span class="m"><i>a</i></span> and feel the same tension <span class="m c4"><i>T</i></span>. Writing the second law for each body along its own direction of motion gives a linear system in <span class="m"><i>a</i></span> and <span class="m"><i>T</i></span>. For the Atwood machine (<span class="m"><i>m</i><sub>2</sub> &gt; <i>m</i><sub>1</sub></span>, frictionless pulley):</p>
<div class="display"><i>m</i><sub>2</sub><i>g</i> − <span class="c4"><i>T</i></span> = <i>m</i><sub>2</sub><i>a</i>, &nbsp; <span class="c4"><i>T</i></span> − <i>m</i><sub>1</sub><i>g</i> = <i>m</i><sub>1</sub><i>a</i> &nbsp;⇒&nbsp; <span class="c1"><i>a</i></span> = <span class="fr"><span>(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>g</i></span><span><i>m</i><sub>1</sub> + <i>m</i><sub>2</sub></span></span>, &nbsp; <span class="c4"><i>T</i></span> = <span class="fr"><span>2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i></span><span><i>m</i><sub>1</sub> + <i>m</i><sub>2</sub></span></span></div>
<p>For a block <span class="m"><i>m</i><sub>1</sub></span> on an incline tied over a pulley to a hanging mass <span class="m"><i>m</i><sub>2</sub></span>, with <span class="m"><i>m</i><sub>2</sub></span> descending: <span class="m"><i>a</i> = <i>g</i>(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub> sin θ − <i>μ</i><sub>k</sub><i>m</i><sub>1</sub> cos θ)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)</span>, valid when first tested against static friction.</p>`,
  legend: [
    { c: "c2", sym: `<i>mg</i> sin θ`, name: "Parallel component", desc: "The part of the weight along the slope. It drives the block down the ramp and grows with the angle." },
    { c: "c3", sym: `<i>mg</i> cos θ`, name: "Perpendicular component", desc: "The part of the weight pressing into the slope. The normal force balances it, and friction is proportional to it." },
    { c: "c4", sym: `<i>T</i>`, name: "Tension", desc: "The pull of the connecting rope, equal on both bodies for a light rope over an ideal pulley. Always less than the hanging weight while that mass accelerates down." },
    { c: "c1", sym: `<i>a</i>`, name: "Acceleration", desc: "The common acceleration of the connected system, the same magnitude for every body on the rope." }
  ],
  steps: { title: "How to solve incline and pulley problems", items: [
    `Draw a separate free-body diagram for each body. On a ramp, tilt the axes so <span class="m"><i>x</i></span> runs along the slope.`,
    `Resolve the weight on a ramp into <span class="c2"><span class="m"><i>mg</i> sin θ</span></span> along and <span class="c3"><span class="m"><i>mg</i> cos θ</span></span> into the slope; the normal force balances the second.`,
    `Pick a positive direction of motion for the whole system (for example, the hanging mass going down) and use it consistently for every body.`,
    `Test static friction first if the system starts at rest: compare the net driving force with the maximum static friction.`,
    `Write <span class="m">Σ<i>F</i> = <i>ma</i></span> for each body with the same <span class="m c1"><i>a</i></span> and <span class="m c4"><i>T</i></span>. Add the equations to eliminate <span class="m"><i>T</i></span>, solve for <span class="m"><i>a</i></span>, then substitute back for <span class="m"><i>T</i></span>.`,
    `Check limits: θ = 0 and θ = 90°, equal masses, or one mass going to zero should give sensible results.`
  ] },
  example: {
    prompt: `A 5.00 kg block on a 30.0° ramp is tied by a light rope over a frictionless pulley at the top to a 4.00 kg mass hanging freely. For block and ramp, <span class="m"><i>μ</i><sub>s</sub> = 0.300</span> and <span class="m"><i>μ</i><sub>k</sub> = 0.200</span>. The system is released from rest. Find the acceleration and the tension.`,
    lines: [
      { math: `<span class="m"><i>m</i><sub>2</sub><i>g</i> = 39.2 N, &nbsp; <span class="c2"><i>m</i><sub>1</sub><i>g</i> sin 30.0°</span> = 24.5 N, &nbsp; <span class="c3"><i>m</i><sub>1</sub><i>g</i> cos 30.0°</span> = 42.4 N</span>`, note: "The hanging weight beats the parallel component, so the hanging mass tends to go down and the block up the ramp." },
      { math: `<span class="m">39.2 − 24.5 = 14.7 N &gt; <i>μ</i><sub>s</sub>(42.4 N) = 12.7 N</span>`, note: "Static test: the net driving force exceeds the maximum static friction, so the system moves." },
      { math: `<span class="m"><i>f</i><sub>k</sub> = (0.200)(42.4 N) = 8.49 N</span>`, note: "Kinetic friction on the block, pointing down the ramp (opposite its motion)." },
      { math: `<span class="m"><i>m</i><sub>2</sub><i>g</i> − <span class="c4"><i>T</i></span> = <i>m</i><sub>2</sub><i>a</i>, &nbsp; <span class="c4"><i>T</i></span> − <i>m</i><sub>1</sub><i>g</i> sin θ − <i>f</i><sub>k</sub> = <i>m</i><sub>1</sub><i>a</i></span>`, note: "Second law for the hanging mass (down +) and the block (up the ramp +)." },
      { math: `<span class="m"><span class="c1"><i>a</i></span> = <span class="fr"><span>39.2 − 24.5 − 8.49</span><span>9.00</span></span> = <span class="c1">0.690 m/s²</span></span>`, note: "Adding the equations eliminates T; divide by the total mass 9.00 kg." },
      { math: `<span class="m"><span class="c4"><i>T</i></span> = <i>m</i><sub>2</sub>(<i>g</i> − <i>a</i>) = (4.00)(9.80 − 0.690) = <span class="c4">36.4 N</span></span>`, note: "Back-substitute. Check: T is less than the hanging weight 39.2 N, as it must be while that mass accelerates down." }
    ],
    answer: `The system accelerates at <span class="m c1">0.690 m/s²</span> (the hanging mass down, the block up the ramp) with a rope tension of <span class="m c4">36.4 N</span>.`
  },
  why: `<p>Inclines and pulleys are the workhorse problems of mechanics because they force every skill at once: free-body diagrams for several bodies, tilted axes, components, normal force, friction and a system of equations. Once you can do them, most everyday machines (conveyor ramps, elevators with counterweights, cable cars, tow trucks, cranes) follow the same pattern.</p>
<p>They also show the power of choosing the system. Treating the rope-connected bodies as one system gives the acceleration in one line; treating them separately gives the internal tension. Both views appear again with momentum, energy and rotation.</p>`,
  careers: [
    { role: "Elevator engineer", use: "Balances car and counterweight like an Atwood machine so the motor only supplies the difference in weights." },
    { role: "Materials-handling engineer", use: "Sets conveyor and chute angles using mg sin θ against friction so parcels slide without jamming or speeding." },
    { role: "Crane and rigging engineer", use: "Computes cable tensions while loads are accelerated, which exceed the static weight." },
    { role: "Ski-lift and cable-car engineer", use: "Sizes haul ropes and drives for passengers on steep slopes from the parallel components of their weight." },
    { role: "Truck and rail engineer", use: "Checks whether a vehicle can start or hold on a grade by comparing mg sin θ with available traction." },
    { role: "Physics teacher", use: "Uses Atwood machines to measure g with slow, easily timed accelerations." }
  ],
  life: [
    "Pushing a wheelchair or a loaded trolley up a ramp",
    "Parking on a steep hill and relying on the brakes to hold",
    "Sledding and noticing steeper slopes give faster rides",
    "Using a pulley to hoist something while a counterweight helps",
    "Towing a trailer, where the hitch force depends on both masses"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Hoists, conveyors, counterweights and cable drives are modelled as connected-body systems." },
    { name: "Civil engineering", use: "Ramp and road grades, and forces on retaining walls, use weight resolved along and into slopes." },
    { name: "Geology", use: "Landslide and rockfall hazard analysis compares mg sin θ with friction on the slip surface." },
    { name: "Physics education and metrology", use: "Atwood machines and air-track inclines are classic setups for measuring g." }
  ],
  prereqWhy: {
    "mech-friction": "Inclines and connected-body problems include static and kinetic friction terms μN, and the static-friction test decides whether the system moves at all."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-sys-elim": `Each body gives one equation in the shared unknowns <span class="m"><i>a</i></span> and <span class="m"><i>T</i></span>; adding <span class="m"><i>m</i><sub>2</sub><i>g</i> − <i>T</i> = <i>m</i><sub>2</sub><i>a</i></span> and <span class="m"><i>T</i> − <i>m</i><sub>1</sub><i>g</i> = <i>m</i><sub>1</sub><i>a</i></span> eliminates <span class="m"><i>T</i></span>.`,
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `The weight on a ramp resolves into <span class="m"><i>mg</i> sin θ</span> along the slope and <span class="m"><i>mg</i> cos θ</span> into it; the angle between the weight and the perpendicular to the ramp equals the ramp angle θ.`
  },
  beyond: [
    { field: "Dynamics", why: "Multi-body systems with ropes, pulleys and constraints generalise these equations to machines and mechanisms." },
    { field: "Classical Mechanics", why: "The Atwood machine and the sliding block are standard first examples of Lagrangian mechanics with constraints." },
    { field: "Mechanical Engineering", why: "Hoists, elevators, conveyors and winches are designed from the tension and acceleration of connected bodies." },
    { field: "Statics", why: "Holding a load on a slope or with a counterweight is the a = 0 case of these same equations." }
  ],
  mistakes: [
    { wrong: `Swapping sine and cosine: using <span class="m"><i>mg</i> cos θ</span> as the part along the slope.`, fix: `Check a limit: at θ = 0 (flat) nothing pulls along the slope, so the along-slope part must be <span class="m"><i>mg</i> sin θ</span>, which is 0 at θ = 0.` },
    { wrong: `Setting the tension equal to the hanging weight: <span class="m"><i>T</i> = <i>m</i><sub>2</sub><i>g</i></span>.`, fix: `Only if nothing accelerates. While <span class="m"><i>m</i><sub>2</sub></span> accelerates down, <span class="m"><i>T</i> = <i>m</i><sub>2</sub>(<i>g</i> − <i>a</i>) &lt; <i>m</i><sub>2</sub><i>g</i></span>.` },
    { wrong: `Mixing sign conventions between bodies, e.g. down positive for both the hanging mass and the block.`, fix: `Choose one direction of motion for the whole system and make each body's positive direction follow the rope.` },
    { wrong: `Using kinetic friction without checking whether the system starts to move.`, fix: `From rest, first compare the net driving force with <span class="m"><i>μ</i><sub>s</sub><i>N</i></span>. If it is smaller, <span class="m"><i>a</i> = 0</span>.` }
  ],
  practice: [
    { q: `A crate slides down a frictionless ramp inclined at 20.0°. Find its acceleration. What happens in the limits θ = 0 and θ = 90°?`, a: `<span class="m"><i>a</i> = <i>g</i> sin θ = (9.80)(sin 20.0°) = 3.35 m/s²</span> down the slope, for any mass. At θ = 0 it is 0 (level floor); at θ = 90° it is <span class="m"><i>g</i></span> (free fall).` },
    { q: `An Atwood machine holds 3.00 kg and 5.00 kg masses over a light, frictionless pulley. Find the acceleration and the tension.`, a: `<span class="m"><i>a</i> = (5.00 − 3.00)(9.80)/8.00 = 2.45 m/s²</span>. <span class="m"><i>T</i> = 2(3.00)(5.00)(9.80)/8.00 = 36.8 N</span>, between the two weights 29.4 N and 49.0 N.` },
    { q: `A block slides down a 35.0° ramp with <span class="m"><i>μ</i><sub>k</sub> = 0.250</span>. Find its acceleration and the time to slide 4.00 m from rest.`, a: `<span class="m"><i>a</i> = 9.80(sin 35.0° − 0.250 cos 35.0°) = 9.80(0.574 − 0.205) = 3.61 m/s²</span>. <span class="m"><i>t</i> = √(2<i>d</i>/<i>a</i>) = √(8.00/3.61) = 1.49 s</span>.` },
    { q: `A 6.00 kg block on a level table (<span class="m"><i>μ</i><sub>k</sub> = 0.100</span>) is tied over a pulley at the edge to a 2.00 kg hanging mass. The system is moving. Find the acceleration and the tension.`, a: `Hanging: <span class="m">19.6 − <i>T</i> = 2.00<i>a</i></span>. Block: <span class="m"><i>T</i> − (0.100)(58.8) = 6.00<i>a</i></span>. Adding: <span class="m">19.6 − 5.88 = 8.00<i>a</i></span>, so <span class="m"><i>a</i> = 1.72 m/s²</span> and <span class="m"><i>T</i> = 2.00(9.80 − 1.715) = 16.2 N</span>.` }
  ],
  origin: `George Atwood described his machine in 1784 in <i>A Treatise on the Rectilinear Motion and Rotation of Bodies</i>, using it to verify the laws of uniformly accelerated motion with slow, measurable accelerations. Simon Stevin had already analysed the equilibrium of weights on inclined planes in 1586.`
};
