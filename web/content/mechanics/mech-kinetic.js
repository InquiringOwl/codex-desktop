window.ARITH = window.ARITH || {};

ARITH["mech-kinetic"] = {
  title: "Kinetic Energy & the Work–Energy Theorem",
  short: "Net work equals the change in ½mv²",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · work and kinetic energy",
  hero: `<span class="m"><span class="c4"><i>K</i></span> = ½<i>m</i><i>v</i><sup>2</sup> &nbsp;&nbsp; <span class="c1"><i>W</i><sub>net</sub></span> = Δ<span class="c4"><i>K</i></span></span>`,
  lede: `<span class="c4">Kinetic energy</span> is the energy a body has because it moves. The work–energy theorem says the <span class="c1">net work</span> done by all forces on a body equals the change in its kinetic energy.`,
  plain: `<p>A moving object carries energy just by moving. A thrown baseball can break a window; a car at highway speed can crush a guardrail. That energy of motion is the <b>kinetic energy</b>, <span class="m"><i>K</i> = ½<i>mv</i><sup>2</sup></span>. It grows with the mass, and with the <i>square</i> of the speed: double the speed and the kinetic energy is four times as large. That is why a crash at 100 km/h is so much worse than one at 50 km/h.</p>
<p>Kinetic energy is never negative and does not depend on direction. A ball moving left at 10 m/s has the same kinetic energy as one moving right at 10 m/s.</p>
<p>The <b>work–energy theorem</b> connects it to forces. Add up the work done by every force on the body. That total, the net work, is exactly how much the kinetic energy changes. Positive net work speeds the body up; negative net work slows it down; zero net work leaves the speed unchanged, even if forces act (think of a ball on a string going around in a circle at steady speed). You get the final speed without ever finding the acceleration or the time.</p>`,
  formal: `<p>The <b>kinetic energy</b> of a particle of mass <span class="m"><i>m</i></span> moving with speed <span class="m"><i>v</i></span> is</p>
<div class="display"><span class="c4"><i>K</i></span> = ½<i>m</i><i>v</i><sup>2</sup> = <span class="fr"><span><i>p</i><sup>2</sup></span><span>2<i>m</i></span></span> &nbsp;&nbsp;<span class="dim">(joules; K ≥ 0; p = mv)</span></div>
<p><b>Work–energy theorem.</b> The net work done on a particle between points A and B equals its change in kinetic energy:</p>
<div class="display"><span class="c1"><i>W</i><sub>net</sub></span> = Σ<sub><i>i</i></sub> <i>W</i><sub><i>i</i></sub> = ∫<sub>A</sub><sup>B</sup> <b>F</b><sub>net</sub> · d<b>r</b> = <span class="c4"><i>K</i><sub>B</sub></span> − <span class="c4"><i>K</i><sub>A</sub></span> = Δ<span class="c4"><i>K</i></span></div>
<p>Proof in one dimension: with <span class="m"><i>F</i><sub>net</sub> = <i>m</i> d<i>v</i>/d<i>t</i></span> and <span class="m">d<i>x</i> = <i>v</i> d<i>t</i></span>, <span class="m">∫ <i>F</i><sub>net</sub> d<i>x</i> = ∫ <i>m</i> <span class="fr"><span>d<i>v</i></span><span>d<i>t</i></span></span> <i>v</i> d<i>t</i> = ∫<sub><i>v</i><sub>A</sub></sub><sup><i>v</i><sub>B</sub></sup> <i>m</i><i>v</i> d<i>v</i> = ½<i>m</i><i>v</i><sub>B</sub><sup>2</sup> − ½<i>m</i><i>v</i><sub>A</sub><sup>2</sup></span>. The theorem holds for any forces, constant or not, conservative or not, and it applies to a particle or to a rigid body treated as a particle (no internal energy changes). Kinetic energy depends on the reference frame, because speed does.</p>`,
  legend: [
    { c: "c2", sym: `<i>W</i><sub>1</sub>`, name: "Work by a driving force", desc: "Work done by a force with a component along the motion, such as a pull. Positive: it feeds energy into the motion." },
    { c: "c3", sym: `<i>W</i><sub>2</sub>`, name: "Work by a resisting force", desc: "Work done by a force opposing the motion, such as kinetic friction. Negative: it takes energy out." },
    { c: "c1", sym: `<i>W</i><sub>net</sub>`, name: "Net work", desc: "The sum of the works of all the forces, in joules. It equals the change in kinetic energy." },
    { c: "c4", sym: `<i>K</i> = ½<i>mv</i><sup>2</sup>`, name: "Kinetic energy", desc: "Energy of motion, in joules. Always ≥ 0, and proportional to the square of the speed." }
  ],
  steps: { title: "How to use the work–energy theorem", items: [
    `Choose the body and the two positions A and B. Write the initial and final kinetic energies <span class="m c4">½<i>mv</i><sup>2</sup></span> (one may be the unknown).`,
    `Draw the free-body diagram and list every force.`,
    `Find the work done by each force over the path, with its sign: <span class="m c2">+</span> if it helps the motion, <span class="m c3">−</span> if it opposes it, 0 if perpendicular.`,
    `Add them to get <span class="m c1"><i>W</i><sub>net</sub></span> and set <span class="m"><i>W</i><sub>net</sub> = <i>K</i><sub>B</sub> − <i>K</i><sub>A</sub></span>.`,
    `Solve for the unknown (speed, distance or force), taking the positive root for a speed, and check the limiting cases and units.`
  ] },
  example: {
    prompt: `A 1.20 × 10<sup>3</sup> kg car travelling at 25.0 m/s locks its brakes and skids to a stop on a level road. The coefficient of kinetic friction between the tyres and the road is 0.700. How long is the skid mark?`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>K</i><sub>i</sub></span> = ½(1.20 × 10<sup>3</sup> kg)(25.0 m/s)<sup>2</sup> = <span class="c4">3.75 × 10<sup>5</sup> J</span>, &nbsp; <span class="c4"><i>K</i><sub>f</sub></span> = 0</span>`, note: "Kinetic energies before and after the skid." },
      { math: `<span class="m"><span class="c1"><i>W</i><sub>net</sub></span> = Δ<i>K</i> = 0 − 3.75 × 10<sup>5</sup> J = <span class="c1">−3.75 × 10<sup>5</sup> J</span></span>`, note: "Work–energy theorem: the net work must remove all the kinetic energy." },
      { math: `<span class="m"><span class="c3"><i>W</i><sub>f</sub></span> = −<i>μ</i><sub>k</sub><i>mg</i><i>d</i> = −(0.700)(1.20 × 10<sup>3</sup> kg)(9.80 m/s²)<i>d</i> = −(8.23 × 10<sup>3</sup> N)<i>d</i></span>`, note: "Only friction does work: weight and normal force are perpendicular to the motion." },
      { math: `<span class="m"><i>d</i> = <span class="fr"><span>3.75 × 10<sup>5</sup> J</span><span>8.232 × 10<sup>3</sup> N</span></span> = 45.6 m</span>`, note: "Set the friction work equal to the net work and solve for d." },
      { math: `<span class="m"><i>d</i> = <span class="fr"><span><i>v</i><sub>i</sub><sup>2</sup></span><span>2<i>μ</i><sub>k</sub><i>g</i></span></span> = <span class="fr"><span>(25.0 m/s)<sup>2</sup></span><span>2(0.700)(9.80 m/s²)</span></span> = 45.6 m</span>`, note: "Symbolically the mass cancels: a truck and a car with the same μk and speed skid the same distance." },
      { math: `<span class="m"><i>v</i><sub>i</sub> × 2 ⇒ <i>d</i> × 4 = 182 m</span>`, note: "Sanity check: skid length grows with the square of speed, which is why investigators can estimate speed from skid marks." }
    ],
    answer: `The skid mark is <span class="m">45.6 m</span> long. Friction does <span class="m c1">−3.75 × 10<sup>5</sup> J</span> of work, removing all the car's kinetic energy.`
  },
  why: `<p>The work–energy theorem is the first of the energy methods that make mechanics practical. When you care about speeds and distances but not about time, it replaces a chain of second-law and kinematics steps with one equation, and it works just as well for forces that vary along the path, where constant-acceleration formulas fail.</p>
<p>The <span class="m"><i>v</i><sup>2</sup></span> in kinetic energy drives real design: stopping distances, crash energy, the damage a meteoroid or a bullet does, and the energy a wind turbine can take from moving air all scale with the square of speed.</p>`,
  careers: [
    { role: "Accident reconstructionist", use: "Estimates a vehicle's pre-crash speed from skid length with v = √(2μk g d)." },
    { role: "Highway engineer", use: "Sets stopping-sight distances and runaway-truck ramp lengths from the kinetic energy that braking or gravel must remove." },
    { role: "Ballistics expert", use: "Compares bullets by muzzle kinetic energy ½mv² and estimates penetration depth from the work done by the target." },
    { role: "Wind-energy engineer", use: "Uses the kinetic energy of the air passing the rotor each second to estimate how much power a turbine can extract." },
    { role: "Sports equipment engineer", use: "Measures the kinetic energy a helmet or pad must absorb and designs foams that do that work over a longer distance." },
    { role: "Planetary scientist", use: "Estimates crater sizes from an impactor's kinetic energy, which at tens of km/s dwarfs chemical explosives." }
  ],
  life: [
    "Leaving a much larger gap to the car ahead at highway speed than in town",
    "Feeling how much harder a fast pitch stings the glove than a slow one",
    "Slowing from 50 to 30 km/h in a school zone, which cuts a car's kinetic energy to about a third",
    "Braking earlier on a wet road, where lower friction means a longer stop",
    "Noticing that a bike coasts to a stop sooner on grass than on pavement"
  ],
  fields: [
    { name: "Mechanical engineering", use: "Brakes, flywheels and impact protection are designed from kinetic energy and the work that absorbs it." },
    { name: "Forensic science", use: "Crash reconstruction relates skid marks and crush damage to speeds through the work–energy theorem." },
    { name: "Sports science", use: "Kinetic energy of balls, bats and bodies sets performance and injury risk." },
    { name: "Astronomy and planetary science", use: "Impact energies of meteoroids and asteroids come from ½mv²." }
  ],
  prereqWhy: {
    "mech-work": "The theorem equates kinetic-energy change to net work, so you must compute the work done by each force, with signs and angles, first."
  },
  unlocksWhy: {
    "mech-potential": "Potential energy is defined so that the work done by a conservative force equals minus the change in U, which turns the work–energy theorem into K + U bookkeeping.",
    "mech-collisions": "Elastic collisions conserve total kinetic energy and inelastic ones lose some, so ½mv² for each body sets up and classifies every collision.",
    "mech-rot-inertia": "Rotational kinetic energy ½Iω² is the sum of ½mv² over every particle of a spinning body, which is how the moment of inertia is defined."
  },
  mathWhy: {
    "a1-radicals": `Solving <span class="m">½<i>mv</i><sup>2</sup> = <i>K</i></span> for the speed gives <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>K</i>/<i>m</i></span></span>, and stopping-distance problems give <span class="m"><i>v</i> = √<span style="text-decoration:overline">2<i>μ</i><sub>k</sub><i>g</i><i>d</i></span></span>; simplifying and estimating square roots is used throughout.`,
    "a1-literal": `Rearranging <span class="m">−<i>μ</i><sub>k</sub><i>mgd</i> = −½<i>mv</i><sup>2</sup></span> for <span class="m"><i>d</i></span>, <span class="m"><i>v</i></span> or <span class="m"><i>μ</i><sub>k</sub></span>, and cancelling the mass, is literal-equation solving.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Kinetic energy is the T in the Lagrangian L = T − U, from which all the equations of motion follow." },
    { field: "Thermal & Statistical Physics", why: "Temperature measures the average translational kinetic energy of molecules, ⟨½mv²⟩ = (3/2)kT for an ideal gas." },
    { field: "Modern Physics", why: "Relativistic kinetic energy (γ − 1)mc² reduces to ½mv² at low speed, and the difference matters in particle accelerators." },
    { field: "Mechanical Engineering", why: "Energy methods for brakes, flywheels and crash structures start from the work–energy theorem." }
  ],
  mistakes: [
    { wrong: `Treating kinetic energy as a vector, or giving it a negative sign for motion to the left.`, fix: `<span class="m"><i>K</i> = ½<i>mv</i><sup>2</sup></span> uses the speed squared. It is a scalar and never negative.` },
    { wrong: `Using only the applied force's work instead of the net work.`, fix: `The theorem needs the work of <i>every</i> force: <span class="m">Δ<i>K</i> = <i>W</i><sub>applied</sub> + <i>W</i><sub>friction</sub> + <i>W</i><sub>grav</sub> + …</span>` },
    { wrong: `Thinking doubling the speed doubles the kinetic energy.`, fix: `<span class="m"><i>K</i> ∝ <i>v</i><sup>2</sup></span>: doubling the speed multiplies it by 4, and the braking distance with it.` },
    { wrong: `Writing <span class="m">Δ<i>K</i> = ½<i>m</i>(<i>v</i><sub>f</sub> − <i>v</i><sub>i</sub>)<sup>2</sup></span>.`, fix: `Square each speed separately: <span class="m">Δ<i>K</i> = ½<i>m</i><i>v</i><sub>f</sub><sup>2</sup> − ½<i>m</i><i>v</i><sub>i</sub><sup>2</sup></span>.` }
  ],
  practice: [
    { q: `Find the kinetic energy of a 0.145 kg baseball thrown at 40.0 m/s. What is it if the speed doubles? Can a ball's kinetic energy ever be negative?`, a: `<span class="m"><i>K</i> = ½(0.145)(40.0)<sup>2</sup> = 116 J</span>. At 80.0 m/s it is <span class="m">4 × 116 = 464 J</span>. No: <span class="m"><i>m</i> &gt; 0</span> and <span class="m"><i>v</i><sup>2</sup> ≥ 0</span>, so <span class="m"><i>K</i> ≥ 0</span> always.` },
    { q: `A 2.00 kg block moving at 3.00 m/s is acted on by a constant net force of 10.0 N along its motion for 4.00 m. Find its final speed.`, a: `<span class="m"><i>W</i><sub>net</sub> = (10.0)(4.00) = 40.0 J</span>; <span class="m"><i>K</i><sub>i</sub> = ½(2.00)(3.00)<sup>2</sup> = 9.00 J</span>; <span class="m"><i>K</i><sub>f</sub> = 49.0 J</span>, so <span class="m"><i>v</i><sub>f</sub> = √(2(49.0)/2.00) = 7.00 m/s</span>.` },
    { q: `A 10.0 g bullet moving at 400 m/s embeds itself 5.00 cm into a fixed wooden block. What average force does the wood exert on the bullet?`, a: `<span class="m"><i>K</i><sub>i</sub> = ½(0.0100)(400)<sup>2</sup> = 800 J</span>, <span class="m"><i>K</i><sub>f</sub> = 0</span>. <span class="m">−<i>F</i>(0.0500 m) = −800 J</span>, so <span class="m"><i>F</i> = 1.60 × 10<sup>4</sup> N</span>, opposite the bullet's motion.` },
    { q: `A 2.00 kg object starts at rest at <span class="m"><i>x</i> = 0</span> and is pushed by a net force <span class="m"><i>F</i><sub>x</sub>(<i>x</i>) = 12.0 N − (3.00 N/m)<i>x</i></span>. Find its speed at <span class="m"><i>x</i> = 4.00 m</span>. Where between 0 and 4.00 m is it moving fastest?`, a: `<span class="m"><i>W</i> = ∫<sub>0</sub><sup>4</sup> (12.0 − 3.00<i>x</i>) d<i>x</i> = 48.0 − 24.0 = 24.0 J = <i>K</i><sub>f</sub></span>, so <span class="m"><i>v</i> = √(2(24.0)/2.00) = 4.90 m/s</span>. The force is positive for <span class="m"><i>x</i> &lt; 4.00 m</span>, so it speeds up the whole way: fastest at <span class="m"><i>x</i> = 4.00 m</span>, where the force reaches zero.` }
  ],
  origin: `Gottfried Leibniz argued in 1686 that the true measure of a moving body's "living force" (<i>vis viva</i>) is <span class="m"><i>mv</i><sup>2</sup></span>, not Descartes' <span class="m"><i>mv</i></span>, and Émilie du Châtelet defended the idea in her <i>Institutions de physique</i> (1740). Gaspard-Gustave de Coriolis introduced the factor ½ and linked it to work in 1829. William Thomson (Lord Kelvin) is credited with the term "kinetic energy" around 1850.`
};
