window.ARITH = window.ARITH || {};

ARITH["mech-ang-momentum"] = {
  title: "Angular Momentum & Its Conservation",
  short: "L = r × p, L = Iω, and why spinning skaters speed up",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · rotation",
  hero: `<span class="m"><span class="c1"><b>L</b></span> = <b>r</b> × <b>p</b> &nbsp;&nbsp; <span class="c1"><i>L</i></span> = <span class="c2"><i>I</i></span><span class="c3">ω</span> &nbsp;&nbsp; <span class="fr"><span>d<span class="c1"><b>L</b></span></span><span>d<i>t</i></span></span> = Σ<b>τ</b></span>`,
  lede: `<span class="c1">Angular momentum</span> is the rotational counterpart of linear momentum. Only an external torque can change it, so a spinning body that pulls its mass inward (smaller <span class="c2"><i>I</i></span>) must spin faster (larger <span class="c3">ω</span>).`,
  plain: `<p>A skater spinning with arms out pulls them in and suddenly whirls much faster. Nobody pushed her. What stayed the same is her <b>angular momentum</b>, the amount of rotation she carries: moment of inertia times spin rate, <span class="m"><i>L</i> = <i>I</i>ω</span>. Pulling her arms in cuts <span class="m"><i>I</i></span>, so <span class="m">ω</span> has to rise by the same factor.</p>
<p>The ice cannot twist her, because friction on skates is tiny and gravity and the normal force act along her spin axis. With no outside torque, <span class="m"><i>L</i></span> cannot change. This is the rotational version of momentum conservation, and it is just as strict.</p>
<p>Her kinetic energy does change. It goes up, because her arm muscles do work pulling the arms inward against their tendency to fly outward. So a spin speeds up with energy supplied from inside, while angular momentum stays fixed.</p>
<p>Even a single particle moving in a straight line has angular momentum about a point off its path: its momentum times the perpendicular distance from the point to the line, <span class="m"><i>L</i> = <i>r</i><sub>⊥</sub><i>p</i></span>. Planets, comets and electrons in atoms are all described this way.</p>`,
  formal: `<p>The <b>angular momentum</b> of a particle about an origin O is the cross product of its position and linear momentum; for a system it is the vector sum over particles:</p>
<div class="display"><span class="c1"><b>l</b></span> = <b>r</b> × <b>p</b> = <i>m</i><b>r</b> × <b>v</b>, &nbsp; <i>l</i> = <i>rp</i> sin φ = <i>r</i><sub>⊥</sub><i>p</i> &nbsp;&nbsp; <span class="c1"><b>L</b></span> = Σ<b>l</b><sub><i>i</i></sub><br><span class="fr"><span>d<b>l</b></span><span>d<i>t</i></span></span> = <b>r</b> × <b>F</b> = <b>τ</b> &nbsp;&nbsp; <span class="fr"><span>d<b>L</b></span><span>d<i>t</i></span></span> = Σ<b>τ</b><sub>ext</sub></div>
<p>The SI unit is kg·m²/s. For a rigid body rotating about a fixed symmetry axis, <span class="m"><span class="c1"><b>L</b></span> = <span class="c2"><i>I</i></span><span class="c3"><b>ω</b></span></span>, directed along the axis by the right-hand rule, and the equation above becomes <span class="m">Στ = <i>I</i>α</span> when <span class="m"><i>I</i></span> is constant.</p>
<p><b>Conservation of angular momentum.</b> If the net external torque on a system is zero, its total angular momentum is constant:</p>
<div class="display">Σ<b>τ</b><sub>ext</sub> = 0 &nbsp;⇒&nbsp; <b>L</b><sub>i</sub> = <b>L</b><sub>f</sub>, &nbsp; <span class="c2"><i>I</i><sub>i</sub></span><span class="c3">ω<sub>i</sub></span> = <span class="c2"><i>I</i><sub>f</sub></span><span class="c3">ω<sub>f</sub></span> &nbsp;&nbsp; <span class="c4"><i>K</i></span> = ½<i>I</i>ω<sup>2</sup> = <span class="fr"><span><i>L</i><sup>2</sup></span><span>2<i>I</i></span></span></div>
<p>Internal forces cancel in torque pairs when they act along the line joining the particles, so they cannot change <span class="m"><b>L</b></span>. At fixed <span class="m"><i>L</i></span>, reducing <span class="m"><i>I</i></span> raises the rotational kinetic energy; the difference is work done by internal forces.</p>`,
  legend: [
    { c: "c2", sym: `<i>I</i>`, name: "Moment of inertia", desc: "How the mass is spread about the axis, in kg·m². Pulling mass inward makes it smaller." },
    { c: "c3", sym: `ω`, name: "Angular velocity", desc: "Spin rate in rad/s. With L fixed it is inversely proportional to I." },
    { c: "c1", sym: `<b>L</b> = <i>I</i><b>ω</b>`, name: "Angular momentum", desc: "Rotational momentum in kg·m²/s, r × p for a particle. Constant when the net external torque is zero." },
    { c: "c4", sym: `<i>K</i> = <i>L</i><sup>2</sup>/2<i>I</i>`, name: "Rotational KE", desc: "Energy of the spin in joules. It is not conserved when I changes; internal forces do work." }
  ],
  steps: { title: "How to use conservation of angular momentum", items: [
    `Choose the system and an axis (or origin). Check that the net external torque about it is zero, or small during a brief event.`,
    `Write the initial angular momentum: <span class="m"><i>I</i>ω</span> for each rotating body, <span class="m"><i>r</i><sub>⊥</sub><i>mv</i></span> for each particle, with a sign for the sense of rotation.`,
    `Write the final angular momentum the same way, with any new moment of inertia (for example <span class="m"><i>I</i> + <i>mr</i><sup>2</sup></span> when a mass lands on a turntable).`,
    `Set <span class="m"><i>L</i><sub>i</sub> = <i>L</i><sub>f</sub></span> and solve for the unknown, usually <span class="m">ω<sub>f</sub></span>.`,
    `Compare kinetic energies <span class="m"><i>L</i><sup>2</sup>/(2<i>I</i>)</span> before and after to see whether work was done or energy was lost.`,
    `Check units (kg·m²/s) and that rev/s or rpm were converted consistently; the ratio <span class="m">ω<sub>f</sub>/ω<sub>i</sub> = <i>I</i><sub>i</sub>/<i>I</i><sub>f</sub></span> works in any units.`
  ] },
  example: {
    prompt: `A figure skater spins at 1.50 rev/s with her arms out, where her moment of inertia is 3.60 kg·m². She pulls her arms in, reducing it to 1.20 kg·m². Find her final spin rate, her angular momentum, and the change in her kinetic energy. Ignore friction from the ice.`,
    lines: [
      { math: `<span class="m"><span class="c3">ω<sub>i</sub></span> = 1.50 rev/s × 2π rad/rev = 9.42 rad/s</span>`, note: "Convert to rad/s for energies." },
      { math: `<span class="m"><span class="c1"><i>L</i></span> = <span class="c2"><i>I</i><sub>i</sub></span><span class="c3">ω<sub>i</sub></span> = (3.60 kg·m²)(9.425 rad/s) = <span class="c1">33.9 kg·m²/s</span></span>`, note: "No external torque about the vertical axis, so this stays constant." },
      { math: `<span class="m"><span class="c3">ω<sub>f</sub></span> = <span class="fr"><span><span class="c2"><i>I</i><sub>i</sub></span></span><span><span class="c2"><i>I</i><sub>f</sub></span></span></span><span class="c3">ω<sub>i</sub></span> = <span class="fr"><span>3.60</span><span>1.20</span></span>(1.50 rev/s) = <span class="c3">4.50 rev/s</span></span>`, note: "Three times smaller I gives three times the spin rate (28.3 rad/s)." },
      { math: `<span class="m"><span class="c4"><i>K</i><sub>i</sub></span> = ½(3.60)(9.425)<sup>2</sup> = 160 J</span>`, note: "Rotational kinetic energy with arms out." },
      { math: `<span class="m"><span class="c4"><i>K</i><sub>f</sub></span> = ½(1.20)(28.27)<sup>2</sup> = 480 J</span>`, note: "K = L²/2I, so it triples when I drops to a third." },
      { math: `<span class="m">Δ<i>K</i> = 480 J − 160 J = 320 J</span>`, note: "Work done by her arm muscles pulling the arms in." },
      { math: `<span class="m">(1.20)(28.27) = 33.9 kg·m²/s ✓</span>`, note: "Check: the final angular momentum equals the initial." }
    ],
    answer: `She spins at <span class="m c3">4.50 rev/s</span> (28.3 rad/s) with the same angular momentum <span class="m c1">33.9 kg·m²/s</span>; her kinetic energy rises from 160 J to 480 J, a gain of 320 J supplied by her muscles.`
  },
  why: `<p>Angular momentum conservation is one of the few exact laws of physics, and it explains a remarkable range of things: why a spinning top or a gyroscope keeps its axis, why a diver tucks to somersault faster, why a cat can turn in mid-air, why the collapsing core of a massive star becomes a pulsar spinning many times a second, and why planets sweep equal areas in equal times. Helicopters need tail rotors and spacecraft use reaction wheels because the total angular momentum of a system cannot change without an outside torque.</p>
<p>The vector form <span class="m"><b>L</b> = <b>r</b> × <b>p</b></span> carries into orbital mechanics, where it fixes the plane of every orbit, and into quantum mechanics, where angular momentum is quantized and sets the structure of atoms.</p>`,
  careers: [
    { role: "Spacecraft attitude engineer", use: "Sizes reaction wheels and control-moment gyroscopes that turn a satellite by exchanging angular momentum between the wheels and the spacecraft body." },
    { role: "Helicopter engineer", use: "Designs the tail rotor (or counter-rotating main rotors) to supply the torque that stops the fuselage spinning opposite to the main rotor." },
    { role: "Biomechanist", use: "Measures how divers, gymnasts and skaters change their moment of inertia in the air to control spin rate with fixed angular momentum." },
    { role: "Astrophysicist", use: "Uses angular momentum conservation to predict the spin rates of collapsing stars, pulsars and accretion disks." },
    { role: "Mechanical engineer", use: "Analyses clutches and couplings that join rotating shafts, where angular momentum is conserved and kinetic energy is lost as heat." },
    { role: "Navigation systems engineer", use: "Works with gyroscopes whose spin axis holds its direction because changing L needs an external torque." }
  ],
  life: [
    "Spinning faster on an office chair by pulling your legs and arms in",
    "Riding a bicycle, whose spinning wheels resist tipping",
    "Watching a diver tuck to turn somersaults quickly and stretch out to slow down",
    "Seeing a thrown football or frisbee keep its orientation in flight",
    "Noticing that a spinning top stays upright while it spins fast"
  ],
  fields: [
    { name: "Aerospace engineering", use: "Satellite attitude control, spin stabilisation and gyroscopic instruments are built on L = Iω and dL/dt = τ." },
    { name: "Astronomy", use: "Orbits, stellar collapse, galaxy rotation and accretion disks all conserve angular momentum." },
    { name: "Sports biomechanics", use: "Twisting and somersaulting skills are analysed as changes of I at fixed L." },
    { name: "Chemistry", use: "Rotational spectroscopy of molecules measures quantized angular momentum to find bond lengths." }
  ],
  prereqWhy: {
    "mech-rot-dynamics": "The law dL/dt = Στ generalises τ = Iα, and L = Iω uses the moment of inertia and angular velocity from rotational dynamics.",
    "mech-momentum-cons": "Angular momentum conservation is built the same way as linear momentum conservation: internal interactions cancel, so only external torques change the total."
  },
  unlocksWhy: {
    "mech-kepler": "Kepler's second law, equal areas in equal times, is conservation of a planet's angular momentum about the Sun: dA/dt = L/(2m) is constant under a central force."
  },
  mathWhy: {
    "a1-literal": `Solving <span class="m"><i>I</i><sub>i</sub>ω<sub>i</sub> = <i>I</i><sub>f</sub>ω<sub>f</sub></span> for <span class="m">ω<sub>f</sub></span> or <span class="m"><i>I</i><sub>f</sub></span>, and rearranging <span class="m"><i>K</i> = <i>L</i><sup>2</sup>/(2<i>I</i>)</span> or <span class="m"><i>L</i> = <i>r</i><sub>⊥</sub><i>mv</i></span> for one letter.`,
    "calculus-3:Vectors, dot and cross products": `The particle definition <span class="m"><b>l</b> = <b>r</b> × <b>p</b></span> and the torque <span class="m"><b>τ</b> = <b>r</b> × <b>F</b></span> are cross products computed with a determinant and the right-hand rule. This is a co-requisite: fixed-axis problems with <span class="m"><i>L</i> = <i>I</i>ω</span> need only algebra, and the vector form sharpens them.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Rigid-body motion, precession of tops and gyroscopes, and the Euler equations all follow from dL/dt = τ with a tensor moment of inertia." },
    { field: "Quantum Mechanics", why: "Angular momentum is quantized in units of ħ; orbital and spin angular momentum set atomic energy levels and the periodic table." },
    { field: "Astrophysics & Cosmology", why: "Conservation of angular momentum explains accretion disks, pulsar spin rates and the flattening of galaxies and planetary systems." },
    { field: "Aerospace Engineering", why: "Spacecraft attitude control with reaction wheels and spin stabilisation is an exchange of angular momentum inside the vehicle." }
  ],
  mistakes: [
    { wrong: `Assuming kinetic energy is conserved when a skater pulls in her arms.`, fix: `Only <span class="m"><i>L</i></span> is conserved. <span class="m"><i>K</i> = <i>L</i><sup>2</sup>/(2<i>I</i>)</span> rises as <span class="m"><i>I</i></span> falls; the extra energy comes from work done by her muscles.` },
    { wrong: `Saying a particle moving in a straight line has no angular momentum because it is not rotating.`, fix: `About any origin off its line, <span class="m"><i>l</i> = <i>r</i><sub>⊥</sub><i>mv</i> ≠ 0</span>. It is constant if no torque acts, but not zero.` },
    { wrong: `Mixing rev/s and rad/s when computing <span class="m"><i>K</i> = ½<i>I</i>ω<sup>2</sup></span>.`, fix: `Ratios like <span class="m">ω<sub>f</sub>/ω<sub>i</sub></span> work in any unit, but energies need ω in rad/s: multiply rev/s by 2π.` },
    { wrong: `Forgetting that <span class="m"><b>L</b></span> is a vector with a sign or direction.`, fix: `Use the right-hand rule. Two wheels spinning in opposite senses have angular momenta that subtract.` }
  ],
  practice: [
    { q: `A 2.00 kg ball moves at 3.00 m/s in the +x direction along the line <span class="m"><i>y</i> = 4.00 m</span>. Find its angular momentum about the origin. Does it change as the ball moves?`, a: `<span class="m"><b>l</b> = <b>r</b> × <b>p</b> = (<i>x</i> î + 4.00 ĵ) × (6.00 î) = −24.0 k̂ kg·m²/s</span>, magnitude <span class="m"><i>r</i><sub>⊥</sub><i>p</i> = (4.00)(6.00)</span>. It is the same for every <span class="m"><i>x</i></span>: no force, no torque, constant <span class="m"><b>l</b></span>.` },
    { q: `A playground merry-go-round (a uniform disk, 200 kg, radius 2.00 m) turns at 1.20 rad/s. A 60.0 kg child steps straight onto its rim. Find the new angular velocity and the kinetic energy lost.`, a: `<span class="m"><i>I</i><sub>i</sub> = ½(200)(2.00)<sup>2</sup> = 400 kg·m²</span>, <span class="m"><i>I</i><sub>f</sub> = 400 + 60.0(2.00)<sup>2</sup> = 640 kg·m²</span>. <span class="m">ω<sub>f</sub> = 400(1.20)/640 = 0.750 rad/s</span>. <span class="m"><i>K</i></span> falls from 288 J to 180 J: 108 J lost.` },
    { q: `A star of radius 7.00 × 10<sup>5</sup> km rotating once every 30.0 days collapses to a neutron star of radius 10.0 km. Treating both as uniform spheres with no loss of mass or angular momentum, find the new rotation period.`, a: `<span class="m"><i>I</i> ∝ <i>R</i><sup>2</sup></span>, so <span class="m"><i>T</i><sub>f</sub> = <i>T</i><sub>i</sub>(<i>R</i><sub>f</sub>/<i>R</i><sub>i</sub>)<sup>2</sup> = (2.592 × 10<sup>6</sup> s)(10.0/7.00 × 10<sup>5</sup>)<sup>2</sup> = 5.29 × 10<sup>−4</sup> s</span>, about 1900 turns per second. This is an idealised upper estimate; real collapsing stars shed mass and angular momentum.` },
    { q: `A 0.200 kg ball is thrown horizontally from the origin at 5.00 m/s in the +x direction and falls freely (<span class="m"><i>y</i></span> up). Find its angular momentum about the origin and the torque of gravity about the origin at <span class="m"><i>t</i> = 1.50 s</span>, and show that <span class="m">d<b>l</b>/d<i>t</i> = <b>τ</b></span>.`, a: `<span class="m"><b>r</b> = (<i>v</i><sub>0</sub><i>t</i>, −½<i>gt</i><sup>2</sup>)</span>, <span class="m"><b>p</b> = <i>m</i>(<i>v</i><sub>0</sub>, −<i>gt</i>)</span>, so <span class="m"><i>l</i><sub>z</sub> = <i>xp</i><sub>y</sub> − <i>yp</i><sub>x</sub> = −½<i>mgv</i><sub>0</sub><i>t</i><sup>2</sup> = −11.0 kg·m²/s</span>. <span class="m"><i>τ</i><sub>z</sub> = <i>x</i>(−<i>mg</i>) = −<i>mgv</i><sub>0</sub><i>t</i> = −14.7 N·m</span>, and <span class="m">d<i>l</i><sub>z</sub>/d<i>t</i> = −<i>mgv</i><sub>0</sub><i>t</i></span> matches. Both point along −k̂.` }
  ],
  origin: `Kepler's second law (1609), equal areas in equal times, was in effect the first statement of angular momentum conservation, for planets. Newton proved in the <i>Principia</i> (1687) that any body pulled toward a fixed centre sweeps out equal areas in equal times, and in the 1740s Leonhard Euler and Daniel Bernoulli extended the principle to general mechanical systems.`
};
