window.ARITH = window.ARITH || {};

ARITH["mech-impulse"] = {
  title: "Momentum & Impulse",
  short: "Force times time changes momentum",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · linear momentum",
  hero: `<span class="m"><span class="c1"><b>J</b></span> = ∫ <span class="c2"><b>F</b></span> d<i>t</i> = Δ<b>p</b> &nbsp;&nbsp; <b>p</b> = <i>m</i><b>v</b></span>`,
  lede: `<b>Momentum</b> is mass times velocity. A force acting over a time interval changes it, and the change equals the <span class="c1">impulse</span>: the area under the <span class="c2">force–time curve</span>.`,
  plain: `<p>A bowling ball rolling slowly and a baseball flying fast can be equally hard to stop. What matters is mass and velocity together. Physicists call the product <span class="m"><i>m</i><b>v</b></span> the <b>momentum</b>. It is a vector, pointing the way the body moves, measured in kg·m/s.</p>
<p>To change a body's momentum you have to push on it for some time. A big push for a short time or a small push for a long time can give the same change. The push multiplied by its duration is the <b>impulse</b>, and it always equals the change in momentum. When the force varies, as it does in every real collision, the impulse is the area under the graph of force against time.</p>
<p>This is why you bend your knees when you land from a jump and why an egg survives a drop onto a pillow but not onto a tile floor. Stopping a given momentum needs a fixed impulse. Stretch the stopping <span class="c3">time</span> and the average and <span class="c4">peak force</span> fall in proportion.</p>`,
  formal: `<p>The <b>linear momentum</b> of a particle of mass <span class="m"><i>m</i></span> and velocity <span class="m"><b>v</b></span> is <span class="m"><b>p</b> = <i>m</i><b>v</b></span>. Newton's second law in its general form is <span class="m"><b>F</b><sub>net</sub> = d<b>p</b>/d<i>t</i></span>, which reduces to <span class="m"><i>m</i><b>a</b></span> when the mass is constant.</p>
<p>The <b>impulse</b> of a force over the interval from <span class="m"><i>t</i><sub>i</sub></span> to <span class="m"><i>t</i><sub>f</sub></span> is</p>
<div class="display"><span class="c1"><b>J</b></span> = ∫<sub><i>t</i><sub>i</sub></sub><sup><i>t</i><sub>f</sub></sup> <span class="c2"><b>F</b>(<i>t</i>)</span> d<i>t</i> &nbsp;&nbsp;<span class="dim">impulse–momentum theorem:</span>&nbsp; <span class="c1"><b>J</b></span> = Δ<b>p</b> = <i>m</i><b>v</b><sub>f</sub> − <i>m</i><b>v</b><sub>i</sub><br><b>F</b><sub>ave</sub> = <span class="fr"><span><b>J</b></span><span><span class="c3">Δ<i>t</i></span></span></span> &nbsp;&nbsp;<span class="dim">so for a constant force</span>&nbsp; <b>J</b> = <b>F</b>Δ<i>t</i></div>
<p>The theorem follows by integrating <span class="m">d<b>p</b>/d<i>t</i> = <b>F</b><sub>net</sub></span> over time, so <span class="m"><b>F</b></span> here means the net force. It holds component by component. The unit of impulse, N·s, equals the unit of momentum, kg·m/s. In a brief collision the contact force is usually so much larger than weight or friction that those forces may be ignored during the contact (the impulse approximation).</p>`,
  legend: [
    { c: "c2", sym: `<i>F</i>(<i>t</i>)`, name: "Force–time curve", desc: "The contact force during the collision, in newtons. It rises from zero, peaks, and falls back to zero." },
    { c: "c1", sym: `<b>J</b> = Δ<b>p</b>`, name: "Impulse", desc: "The area under the force–time curve, in N·s. It equals the change in momentum <i>m</i><b>v</b><sub>f</sub> − <i>m</i><b>v</b><sub>i</sub>." },
    { c: "c3", sym: `Δ<i>t</i>`, name: "Contact time", desc: "How long the force acts. For a fixed impulse, a longer contact time means a smaller average force." },
    { c: "c4", sym: `<i>F</i><sub>max</sub>`, name: "Peak force", desc: "The largest force during contact. It is what breaks eggs and bones, and it is always at least the average force <i>J</i>/Δ<i>t</i>." }
  ],
  steps: { title: "How to use the impulse–momentum theorem", items: [
    `Pick the body and a positive direction. Write the initial and final velocities with signs (a rebound reverses the sign).`,
    `Compute the change in momentum <span class="m">Δ<b>p</b> = <i>m</i><b>v</b><sub>f</sub> − <i>m</i><b>v</b><sub>i</sub></span>, component by component in two dimensions.`,
    `Set the <span class="c1">impulse</span> equal to it: <span class="m"><b>J</b> = Δ<b>p</b></span>. If you know <span class="m"><span class="c2"><i>F</i>(<i>t</i>)</span></span>, compute <span class="m">∫ <i>F</i> d<i>t</i></span> (the area) instead.`,
    `Divide by the <span class="c3">contact time</span> for the average force, <span class="m"><b>F</b><sub>ave</sub> = <b>J</b>/Δ<i>t</i></span>. The <span class="c4">peak force</span> is larger; for a triangular pulse it is twice the average.`,
    `Check units (N·s = kg·m/s), the direction of the force (along <span class="m">Δ<b>p</b></span>, not along <span class="m"><b>v</b></span>), and compare the force with the body's weight.`
  ] },
  example: {
    prompt: `A 0.145 kg baseball arrives at the plate at 40.0 m/s and leaves the bat at 50.0 m/s straight back toward the pitcher. The bat is in contact with the ball for 0.700 ms. Find the impulse on the ball, the average force of the bat, and the peak force if the force–time curve is a triangle.`,
    lines: [
      { math: `<span class="m"><i>v</i><sub>i</sub> = −40.0 m/s, &nbsp; <i>v</i><sub>f</sub> = +50.0 m/s</span>`, note: "Take +x toward the pitcher, so the incoming velocity is negative." },
      { math: `<span class="m">Δ<i>p</i> = <i>m</i>(<i>v</i><sub>f</sub> − <i>v</i><sub>i</sub>) = (0.145 kg)(50.0 − (−40.0)) m/s = 13.05 kg·m/s</span>`, note: "The velocity changes by 90.0 m/s, not 10.0 m/s, because the ball reverses." },
      { math: `<span class="m"><span class="c1"><i>J</i></span> = Δ<i>p</i> = <span class="c1">13.1 N·s</span></span>`, note: "Impulse–momentum theorem: the bat's impulse points toward the pitcher." },
      { math: `<span class="m"><i>F</i><sub>ave</sub> = <span class="fr"><span><i>J</i></span><span><span class="c3">Δ<i>t</i></span></span></span> = <span class="fr"><span>13.05 N·s</span><span>7.00 × 10<sup>−4</sup> s</span></span> = 1.86 × 10<sup>4</sup> N</span>`, note: "Convert 0.700 ms to seconds before dividing." },
      { math: `<span class="m"><span class="c4"><i>F</i><sub>max</sub></span> = 2<i>F</i><sub>ave</sub> = <span class="c4">3.73 × 10<sup>4</sup> N</span></span>`, note: "A triangle of base Δt and height F_max has area ½F_max·Δt, so F_max = 2J/Δt." },
      { math: `<span class="m"><i>F</i><sub>ave</sub>/<i>mg</i> = (1.86 × 10<sup>4</sup> N)/(1.42 N) ≈ 1.3 × 10<sup>4</sup></span>`, note: "Sanity check: the bat force is about 13 000 times the ball's weight, so ignoring gravity during contact is justified." }
    ],
    answer: `The impulse is <span class="m c1">13.1 N·s</span> toward the pitcher. The bat pushes with an average force of <span class="m">1.86 × 10<sup>4</sup> N</span> and a peak of about <span class="m c4">3.73 × 10<sup>4</sup> N</span>.`
  },
  why: `<p>Momentum is the quantity that forces change, and impulse is how much they change it. This view is often easier than <span class="m"><b>F</b> = <i>m</i><b>a</b></span> because in a collision you rarely know the force at each instant, but you can measure velocities before and after. Knowing <span class="m">Δ<b>p</b></span> and the contact time gives the average force at once.</p>
<p>Most safety engineering is impulse engineering. Airbags, crumple zones, helmet liners, running shoes and packaging foam all do the same thing: they cannot change the momentum that must be removed, so they spread the stopping over a longer time and keep the peak force below the level that breaks things. The same theorem, applied to gas leaving a nozzle, gives the thrust of a rocket.</p>`,
  careers: [
    { role: "Automotive safety engineer", use: "Designs crumple zones and airbags to lengthen the stopping time of an occupant so the average force from the fixed momentum change stays below injury limits." },
    { role: "Packaging engineer", use: "Chooses cushioning foam thickness from drop-test force–time curves so a product's peak deceleration stays below its fragility rating." },
    { role: "Sports equipment engineer", use: "Measures the impulse a bat, racket or club delivers during a contact lasting well under a millisecond to tune stiffness and sweet spots." },
    { role: "Biomechanist", use: "Integrates force-plate data over a jump's push-off to find the take-off momentum and so the jump velocity." },
    { role: "Rocket propulsion engineer", use: "Rates motors by total impulse in N·s, the area under the thrust curve, which sets the change in momentum the motor can give a vehicle." },
    { role: "Protective gear designer", use: "Tests helmet liners by dropping instrumented headforms and checking that the peak force stays under the standard's limit." }
  ],
  life: [
    "Bending your knees when you land from a jump",
    "Letting your hands move back when you catch a fast ball",
    "Seat belts and airbags spreading a crash stop over a longer time",
    "Following through on a golf or tennis swing to keep the force on the ball longer",
    "Wrapping fragile items in bubble wrap before shipping",
    "Landing on a gym mat instead of a hard floor"
  ],
  fields: [
    { name: "Automotive safety engineering", use: "Crash pulses (deceleration against time) are designed so the occupant's momentum is removed with the lowest peak force." },
    { name: "Sports science", use: "Force plates and high-speed video give impulses in sprint starts, jumps and ball strikes." },
    { name: "Aerospace propulsion", use: "Total impulse and specific impulse (impulse per unit weight of propellant) rank rocket motors." },
    { name: "Packaging and product design", use: "Drop tests and shock-absorbing materials are rated by the force–time pulses they produce." }
  ],
  prereqWhy: {
    "mech-newton-3": "During contact the two bodies push on each other with equal and opposite forces for the same time, so their impulses are equal and opposite, which is the step toward momentum conservation.",
    "mech-motion-integration": "Impulse is the time integral of force, read as the area under a curve, exactly as velocity change is the area under an acceleration–time graph."
  },
  unlocksWhy: {
    "mech-momentum-cons": "Adding the equal and opposite impulses that two bodies give each other shows that their total momentum cannot change when no external force acts."
  },
  mathWhy: {
    "a1-literal": `Rearranging <span class="m"><i>F</i><sub>ave</sub>Δ<i>t</i> = <i>m</i>(<i>v</i><sub>f</sub> − <i>v</i><sub>i</sub>)</span> to solve for whichever of the force, the time or a velocity is unknown.`,
    "calculus-1:Antiderivatives and the definite integral": `The impulse of a varying force is the definite integral <span class="m">∫ <i>F</i>(<i>t</i>) d<i>t</i></span>, the area under the force–time curve. This is a co-requisite: constant and average forces need only <span class="m"><i>F</i>Δ<i>t</i></span>, and the integral handles real collision pulses.`
  },
  beyond: [
    { field: "Dynamics", why: "Engineering dynamics solves impact and short-duration loading problems with the impulse–momentum principle rather than with accelerations." },
    { field: "Thermodynamics", why: "Gas pressure comes from the impulses of molecules bouncing off a container wall, which is how kinetic theory links pressure to molecular speed." },
    { field: "Aerospace Engineering", why: "Rocket thrust is the rate at which exhaust carries momentum away, and motors are compared by the impulse they deliver." },
    { field: "Classical Mechanics", why: "Momentum is the variable conjugate to position in Hamiltonian mechanics, and its conservation follows from translational symmetry." }
  ],
  mistakes: [
    { wrong: `A ball hits a wall at 20 m/s and rebounds at 20 m/s, "so <span class="m">Δ<i>v</i> = 0</span> and the impulse is zero."`, fix: `Velocity is a vector. With +x away from the wall, <span class="m">Δ<i>v</i> = 20 − (−20) = 40 m/s</span>, so the impulse is <span class="m">40<i>m</i></span>, twice what stopping the ball would take.` },
    { wrong: `Treating impulse as a force, or giving it in newtons.`, fix: `Impulse is force multiplied by time, in N·s = kg·m/s. Divide by <span class="m">Δ<i>t</i></span> to get an average force in N.` },
    { wrong: `A cushion "reduces the impulse" on a falling egg.`, fix: `The egg must lose the same momentum either way, so the impulse is the same. The cushion lengthens <span class="m">Δ<i>t</i></span>, which lowers the average and peak force.` },
    { wrong: `Forgetting to convert milliseconds: <span class="m">13.05/0.700 = 18.6 N</span>.`, fix: `Use SI: <span class="m">0.700 ms = 7.00 × 10<sup>−4</sup> s</span>, giving <span class="m">1.86 × 10<sup>4</sup> N</span>.` }
  ],
  practice: [
    { q: `Find the momentum of a 1.50 × 10<sup>3</sup> kg car moving at 25.0 m/s and of a 10.0 g bullet moving at 400 m/s.`, a: `Car: <span class="m">(1.50 × 10<sup>3</sup>)(25.0) = 3.75 × 10<sup>4</sup> kg·m/s</span>. Bullet: <span class="m">(0.0100)(400) = 4.00 kg·m/s</span>. Each points along its velocity.` },
    { q: `A 60.0 g egg hits the ground at 4.00 m/s and stops. Find the impulse, then the average force if it lands on a tile floor (<span class="m">Δ<i>t</i> = 2.00 ms</span>) and on a pillow (<span class="m">Δ<i>t</i> = 0.100 s</span>). Why does one egg survive?`, a: `<span class="m"><i>J</i> = <i>m</i>Δ<i>v</i> = (0.0600)(4.00) = 0.240 N·s</span> in both cases, upward. Floor: <span class="m">0.240/0.00200 = 120 N</span>. Pillow: <span class="m">0.240/0.100 = 2.40 N</span>. Same impulse, 50 times the time, one fiftieth of the force.` },
    { q: `A tennis ball of mass 0.0580 kg, momentarily at rest at the top of the toss, is struck by a racket whose force is <span class="m"><i>F</i>(<i>t</i>) = (1.20 × 10<sup>6</sup> N/s)<i>t</i> − (4.00 × 10<sup>8</sup> N/s²)<i>t</i><sup>2</sup></span> for <span class="m">0 ≤ <i>t</i> ≤ 3.00 ms</span>. Find the impulse, the peak force and the ball's speed.`, a: `<span class="m"><i>J</i> = [6.00 × 10<sup>5</sup><i>t</i><sup>2</sup> − 1.333 × 10<sup>8</sup><i>t</i><sup>3</sup>]<sub>0</sub><sup>0.003</sup> = 5.40 − 3.60 = 1.80 N·s</span>. The peak is at <span class="m"><i>t</i> = 1.50 ms</span>: <span class="m"><i>F</i><sub>max</sub> = 1800 − 900 = 900 N</span>. Speed <span class="m"><i>v</i> = <i>J</i>/<i>m</i> = 1.80/0.0580 = 31.0 m/s</span>.` },
    { q: `A 0.400 kg ball hits a wall at 20.0 m/s, travelling at 30.0° to the normal, and bounces off at the same speed and angle on the other side of the normal. Contact lasts 10.0 ms. Find the impulse and the average force on the ball.`, a: `The component along the wall is unchanged. The normal component reverses: <span class="m">Δ<i>p</i> = 2<i>mv</i> cos 30.0° = 2(0.400)(20.0)(0.866) = 13.9 N·s</span>, directed away from the wall along the normal. <span class="m"><i>F</i><sub>ave</sub> = 13.86/0.0100 = 1.39 × 10<sup>3</sup> N</span>, also along the normal. By the third law the wall feels the same force into it.` }
  ],
  origin: `René Descartes, in his <i>Principles of Philosophy</i> (1644), made "quantity of motion", size times speed, the conserved measure of motion but ignored direction. Newton's <i>Principia</i> (1687) defined the quantity of motion as mass times velocity and stated his second law as the change of motion being proportional to the impressed force, which is the impulse–momentum idea.`
};
