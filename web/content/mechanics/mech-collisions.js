window.ARITH = window.ARITH || {};

ARITH["mech-collisions"] = {
  title: "Collisions: Elastic & Inelastic",
  short: "Momentum always survives a collision; kinetic energy may not",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · linear momentum",
  hero: `<span class="m"><span class="c1">Σ<b>p</b></span><sub>before</sub> = <span class="c1">Σ<b>p</b></span><sub>after</sub> &nbsp;&nbsp; <i>e</i> = <span class="fr"><span><i>v</i>′<sub>B</sub> − <i>v</i>′<sub>A</sub></span><span><i>v</i><sub>A</sub> − <i>v</i><sub>B</sub></span></span></span>`,
  lede: `In every collision of an isolated system the <span class="c1">total momentum</span> is conserved. What varies is how much <span class="c4">kinetic energy is lost</span> to heat, sound and deformation, from none (elastic) to the most allowed (perfectly inelastic).`,
  plain: `<p>When two bodies collide, the forces between them are huge but brief, and they are internal to the pair. So the total momentum just before the collision equals the total just after. That one fact holds for billiard balls, car crashes and atoms alike.</p>
<p>Kinetic energy is a different story. When a car bumper crumples or a clay ball squashes, some of the kinetic energy becomes heat, sound and permanent deformation. Collisions are sorted by how much survives. In an <b>elastic</b> collision all of it does: think of hard steel balls or gas molecules. In an <b>inelastic</b> collision some is lost. In a <b>perfectly inelastic</b> collision the bodies stick together and move off as one, which loses the most kinetic energy that momentum conservation allows.</p>
<p>A single number, the <b>coefficient of restitution</b> <span class="m"><i>e</i></span>, measures bounciness: how fast the bodies separate compared with how fast they approached. <span class="m"><i>e</i> = 1</span> is elastic, <span class="m"><i>e</i> = 0</span> means they stick, and real collisions fall in between.</p>`,
  formal: `<p>For two bodies A and B in an isolated system, momentum is conserved in every collision; in two dimensions each component is conserved separately:</p>
<div class="display"><span class="c2"><i>m</i><sub>A</sub><b>v</b><sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><b>v</b><sub>B</sub></span> = <span class="c2"><i>m</i><sub>A</sub><b>v</b>′<sub>A</sub></span> + <span class="c3"><i>m</i><sub>B</sub><b>v</b>′<sub>B</sub></span><br><span class="dim">elastic:</span>&nbsp; also ½<i>m</i><sub>A</sub><i>v</i><sub>A</sub><sup>2</sup> + ½<i>m</i><sub>B</sub><i>v</i><sub>B</sub><sup>2</sup> = ½<i>m</i><sub>A</sub><i>v</i>′<sub>A</sub><sup>2</sup> + ½<i>m</i><sub>B</sub><i>v</i>′<sub>B</sub><sup>2</sup><br><span class="dim">perfectly inelastic:</span>&nbsp; <b>v</b>′ = <span class="fr"><span><i>m</i><sub>A</sub><b>v</b><sub>A</sub> + <i>m</i><sub>B</sub><b>v</b><sub>B</sub></span><span><i>m</i><sub>A</sub> + <i>m</i><sub>B</sub></span></span></div>
<p>In one dimension, with B initially at rest, the elastic solution is <span class="m"><i>v</i>′<sub>A</sub> = <span class="fr"><span><i>m</i><sub>A</sub> − <i>m</i><sub>B</sub></span><span><i>m</i><sub>A</sub> + <i>m</i><sub>B</sub></span></span><i>v</i><sub>A</sub></span>, <span class="m"><i>v</i>′<sub>B</sub> = <span class="fr"><span>2<i>m</i><sub>A</sub></span><span><i>m</i><sub>A</sub> + <i>m</i><sub>B</sub></span></span><i>v</i><sub>A</sub></span>. For a head-on collision with <b>coefficient of restitution</b> <span class="m"><i>e</i> = (<i>v</i>′<sub>B</sub> − <i>v</i>′<sub>A</sub>)/(<i>v</i><sub>A</sub> − <i>v</i><sub>B</sub>)</span>, <span class="m">0 ≤ <i>e</i> ≤ 1</span>, the <span class="c4">kinetic energy lost</span> is</p>
<div class="display"><span class="c4">Δ<i>K</i><sub>lost</sub></span> = ½ <span class="fr"><span><i>m</i><sub>A</sub><i>m</i><sub>B</sub></span><span><i>m</i><sub>A</sub> + <i>m</i><sub>B</sub></span></span> (1 − <i>e</i><sup>2</sup>)(<i>v</i><sub>A</sub> − <i>v</i><sub>B</sub>)<sup>2</sup></div>
<p>so <span class="m"><i>e</i> = 1</span> loses nothing and <span class="m"><i>e</i> = 0</span> (sticking) loses the maximum. The kinetic energy of the centre-of-mass motion, <span class="m"><i>P</i><sup>2</sup>/2<i>M</i></span>, can never be lost.</p>`,
  legend: [
    { c: "c2", sym: `<i>m</i><sub>A</sub>, <b>v</b><sub>A</sub>`, name: "Body A", desc: "The incoming body: its mass and its velocity before (unprimed) and after (primed) the collision." },
    { c: "c3", sym: `<i>m</i><sub>B</sub>, <b>v</b><sub>B</sub>`, name: "Body B", desc: "The second body, often the target at rest. Its velocity after the collision is usually an unknown." },
    { c: "c1", sym: `Σ<b>p</b>`, name: "Total momentum", desc: "The vector sum of both momenta, in kg·m/s. It is the same before and after every collision of an isolated pair." },
    { c: "c4", sym: `Δ<i>K</i><sub>lost</sub>`, name: "Kinetic energy lost", desc: "Kinetic energy turned into heat, sound and deformation, in joules. Zero for elastic collisions, largest when the bodies stick." }
  ],
  steps: { title: "How to solve a collision", items: [
    `Choose axes and write each initial velocity with its sign (or components in two dimensions).`,
    `Write conservation of <span class="c1">momentum</span>: total before equals total after, one equation per component.`,
    `Classify the collision. If the bodies stick, there is one final velocity and momentum alone solves it.`,
    `If it is elastic, add kinetic-energy conservation, or the equivalent linear condition <span class="m"><i>v</i><sub>A</sub> − <i>v</i><sub>B</sub> = −(<i>v</i>′<sub>A</sub> − <i>v</i>′<sub>B</sub>)</span>, and solve the pair of equations.`,
    `If you need the <span class="c4">energy lost</span>, compute the total kinetic energy before and after and subtract.`,
    `Check: momentum balances, kinetic energy did not increase, and the bodies do not pass through each other (<span class="m"><i>v</i>′<sub>B</sub> ≥ <i>v</i>′<sub>A</sub></span> for A approaching B from behind).`
  ] },
  example: {
    prompt: `At an icy intersection a 1.20 × 10<sup>3</sup> kg car travelling east at 18.0 m/s collides with a 2.00 × 10<sup>3</sup> kg SUV travelling north at 12.0 m/s. The vehicles lock together. Find the velocity of the wreck just after impact and the kinetic energy lost.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>P</i><sub>x</sub></span> = <span class="c2">(1200 kg)(18.0 m/s)</span> = 2.16 × 10<sup>4</sup> kg·m/s, &nbsp; <span class="c1"><i>P</i><sub>y</sub></span> = <span class="c3">(2000 kg)(12.0 m/s)</span> = 2.40 × 10<sup>4</sup> kg·m/s</span>`, note: "East is +x, north is +y. Each vehicle supplies one component." },
      { math: `<span class="m"><i>v</i>′ = <span class="fr"><span>√(2.16<sup>2</sup> + 2.40<sup>2</sup>) × 10<sup>4</sup> kg·m/s</span><span>3.20 × 10<sup>3</sup> kg</span></span> = 10.1 m/s</span>`, note: "Perfectly inelastic: the combined mass moves with the total momentum." },
      { math: `<span class="m">θ = tan<sup>−1</sup><span class="fr"><span>2.40</span><span>2.16</span></span> = 48.0°</span> north of east`, note: "Direction of the total momentum vector." },
      { math: `<span class="m"><i>K</i> = ½(1200)(18.0)<sup>2</sup> + ½(2000)(12.0)<sup>2</sup> = 1.944 × 10<sup>5</sup> + 1.440 × 10<sup>5</sup> = 3.38 × 10<sup>5</sup> J</span>`, note: "Kinetic energy before; energy is a scalar, so just add." },
      { math: `<span class="m"><i>K</i>′ = ½(3200)(10.09)<sup>2</sup> = 1.63 × 10<sup>5</sup> J</span>`, note: "Kinetic energy after, with the unrounded speed." },
      { math: `<span class="m"><span class="c4">Δ<i>K</i><sub>lost</sub></span> = 3.384 × 10<sup>5</sup> − 1.629 × 10<sup>5</sup> = <span class="c4">1.76 × 10<sup>5</sup> J</span> &nbsp;(51.9 %)</span>`, note: "Check: the loss is positive and less than the total, and the angle lies between the two initial directions." }
    ],
    answer: `The wreck slides off at <span class="m">10.1 m/s</span>, <span class="m">48.0°</span> north of east, and <span class="m c4">1.76 × 10<sup>5</sup> J</span> (about 52 %) of the kinetic energy goes into crushing metal, heat and sound.`
  },
  why: `<p>Collisions are where momentum conservation earns its keep. Investigators reconstruct car crashes from skid marks and final positions, particle physicists discover new particles from the debris of collisions, and engineers design bumpers, helmets and pile drivers by deciding how much kinetic energy a collision should absorb. The two limiting cases, elastic and perfectly inelastic, bracket every real collision.</p>
<p>Elastic collisions also explain some surprising effects: a moving ball stopping dead when it hits an identical one, a light ball bouncing back from a heavy one, and spacecraft gaining speed by swinging past a planet, which is an elastic "collision" through gravity.</p>`,
  careers: [
    { role: "Accident reconstructionist", use: "Uses two-dimensional momentum conservation with post-crash directions and speeds to find pre-impact vehicle speeds for court cases." },
    { role: "Nuclear engineer", use: "Chooses moderators such as water or graphite because elastic collisions with light nuclei remove the most kinetic energy from fast neutrons." },
    { role: "Particle physicist", use: "Reconstructs the products of high-energy collisions from momentum and energy conservation to identify new particles." },
    { role: "Sports equipment engineer", use: "Tests balls and bats for coefficient of restitution, which governing bodies cap (for example on golf drivers) to limit ball speed." },
    { role: "Mission designer", use: "Plans gravity-assist flybys, which act as elastic collisions with a planet and change a spacecraft's speed without fuel." },
    { role: "Vehicle crashworthiness engineer", use: "Designs crumple zones to absorb as much of the lost kinetic energy as possible outside the passenger cabin." }
  ],
  life: [
    "Playing pool, where a head-on shot can stop the cue ball dead",
    "Noticing that a basketball bounces lower each time it hits the floor",
    "A Newton's cradle passing motion through a row of steel balls",
    "Bumper cars bouncing apart while a car crash crumples metal",
    "Catching a ball: ball and hands move together, a perfectly inelastic collision"
  ],
  fields: [
    { name: "Forensic engineering", use: "Traffic accident reconstruction uses inelastic two-dimensional collision analysis." },
    { name: "Nuclear engineering", use: "Neutron moderation in reactors is a sequence of elastic collisions with light nuclei." },
    { name: "Particle physics", use: "Scattering experiments measure how momentum and energy are shared among collision products." },
    { name: "Sports engineering", use: "Coefficients of restitution of balls, bats and playing surfaces are measured and regulated." }
  ],
  prereqWhy: {
    "mech-momentum-cons": "The first equation of every collision problem is conservation of total momentum for the isolated pair.",
    "mech-kinetic": "Classifying a collision as elastic or inelastic means comparing total kinetic energy ½mv² before and after."
  },
  unlocksWhy: {},
  mathWhy: {
    "a1-sys-elim": `An elastic collision gives two equations in the two final velocities; using momentum with the linear relative-velocity condition <span class="m"><i>v</i><sub>A</sub> − <i>v</i><sub>B</sub> = <i>v</i>′<sub>B</sub> − <i>v</i>′<sub>A</sub></span>, adding or subtracting eliminates one unknown.`,
    "a1-quad-formula": `Substituting the momentum equation into kinetic-energy conservation gives a quadratic in <span class="m"><i>v</i>′<sub>A</sub></span>. Its two roots are the initial velocity (no collision) and the real outcome, and seeing why is a check on the algebra.`,
    "trig-vectors": `Glancing collisions need momentum in <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> components, then the final velocity's magnitude <span class="m">√(<i>v</i><sub>x</sub><sup>2</sup> + <i>v</i><sub>y</sub><sup>2</sup>)</span> and direction <span class="m">tan<sup>−1</sup>(<i>v</i><sub>y</sub>/<i>v</i><sub>x</sub>)</span>.`
  },
  beyond: [
    { field: "Nuclear & Particle Physics", why: "Scattering and decay kinematics, including relativistic collisions in accelerators, are built on momentum and energy conservation." },
    { field: "Thermal & Statistical Physics", why: "The ideal-gas model assumes elastic molecular collisions, which share energy among molecules and lead to the Maxwell speed distribution." },
    { field: "Dynamics", why: "Engineering impact problems use the coefficient of restitution with momentum conservation along the line of impact." },
    { field: "Astrophysics & Cosmology", why: "Gravity assists and stellar encounters are treated as elastic collisions in the frame of the heavier body." }
  ],
  mistakes: [
    { wrong: `Assuming kinetic energy is conserved in every collision.`, fix: `Only elastic collisions conserve kinetic energy. Momentum is conserved in all of them; use energy only if the problem says elastic or gives <span class="m"><i>e</i> = 1</span>.` },
    { wrong: `Dropping signs in one dimension: after an elastic collision of a light cart with a heavy one, reporting the light cart's velocity as +2.00 m/s.`, fix: `The light cart bounces back: <span class="m"><i>v</i>′<sub>A</sub> = (<i>m</i><sub>A</sub> − <i>m</i><sub>B</sub>)<i>v</i><sub>A</sub>/(<i>m</i><sub>A</sub> + <i>m</i><sub>B</sub>)</span> is negative when <span class="m"><i>m</i><sub>A</sub> &lt; <i>m</i><sub>B</sub></span>.` },
    { wrong: `Adding magnitudes of perpendicular momenta in a 2-D crash: <span class="m">21 600 + 24 000 = 45 600 kg·m/s</span>.`, fix: `Momentum is a vector. Conserve each component, then combine: <span class="m">√(21 600² + 24 000²) = 32 300 kg·m/s</span>.` },
    { wrong: `In a ballistic pendulum, using energy conservation across the collision itself.`, fix: `The bullet embedding is perfectly inelastic: use momentum for the collision, and energy only for the swing afterward.` }
  ],
  practice: [
    { q: `A 2.00 kg cart moving at 3.00 m/s hits a stationary 1.00 kg cart and they couple together. Find their common velocity and the kinetic energy lost.`, a: `<span class="m"><i>v</i>′ = (2.00)(3.00)/3.00 = 2.00 m/s</span>. <span class="m"><i>K</i> = ½(2.00)(3.00)<sup>2</sup> = 9.00 J</span>, <span class="m"><i>K</i>′ = ½(3.00)(2.00)<sup>2</sup> = 6.00 J</span>, so 3.00 J (one third) is lost.` },
    { q: `A 0.500 kg glider moving at 4.00 m/s collides elastically head-on with a 1.50 kg glider at rest on an air track. Find both final velocities and check energy.`, a: `<span class="m"><i>v</i>′<sub>A</sub> = (0.500 − 1.50)(4.00)/2.00 = −2.00 m/s</span> (it bounces back); <span class="m"><i>v</i>′<sub>B</sub> = 2(0.500)(4.00)/2.00 = 2.00 m/s</span>. Momentum: <span class="m">2.00 = −1.00 + 3.00</span>. Energy: <span class="m">4.00 J = 1.00 J + 3.00 J</span>.` },
    { q: `A ball dropped from 2.00 m onto a hard floor rebounds to 1.28 m. Find the coefficient of restitution and the fraction of kinetic energy lost in the bounce. What would an elastic ball do?`, a: `The floor stays at rest, so <span class="m"><i>e</i> = <i>v</i>′/<i>v</i> = √(2<i>gh</i>′)/√(2<i>gh</i>) = √(1.28/2.00) = 0.800</span>. Fraction lost <span class="m">1 − <i>e</i><sup>2</sup> = 0.360</span>, or 36.0 %. With <span class="m"><i>e</i> = 1</span> it would return to 2.00 m every time.` },
    { q: `A 10.0 g bullet is fired into a 2.00 kg wooden block hanging from strings (a ballistic pendulum). The block with the embedded bullet swings up 8.00 cm. Find the bullet's speed and the fraction of its kinetic energy that survives the collision.`, a: `Swing (energy): <span class="m"><i>V</i> = √(2(9.80)(0.0800)) = 1.25 m/s</span>. Collision (momentum): <span class="m"><i>v</i> = (2.01/0.0100)(1.252) = 252 m/s</span>. Kept: <span class="m"><i>K</i>′/<i>K</i> = <i>m</i>/(<i>m</i> + <i>M</i>) = 0.0100/2.01 = 0.498 %</span>; over 99 % is lost.` }
  ],
  origin: `Christiaan Huygens, John Wallis and Christopher Wren each sent the Royal Society rules for colliding bodies in 1668–1669; Huygens showed that in elastic impacts the sum of mass times speed squared is also conserved. Newton reported his own pendulum collision experiments in the <i>Principia</i> (1687), where he found that the relative speed after impact is a fixed fraction of that before, the idea behind the coefficient of restitution. Benjamin Robins invented the ballistic pendulum in 1742.`
};
