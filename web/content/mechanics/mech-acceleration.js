window.ARITH = window.ARITH || {};

ARITH["mech-acceleration"] = {
  title: "Acceleration",
  short: "Rate of change of velocity, in m/s²",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in one dimension",
  hero: `<span class="m"><span class="c1"><i>a</i></span> = <span class="fr"><span>d<span class="c3"><i>v</i></span></span><span>d<i>t</i></span></span> = <span class="fr"><span>d<sup>2</sup><span class="c2"><i>x</i></span></span><span>d<i>t</i><sup>2</sup></span></span></span>`,
  lede: `<span class="c1">Acceleration</span> is the rate at which <span class="c3">velocity</span> changes: the slope of the velocity graph, and the second derivative of <span class="c2">position</span>. An object speeds up when velocity and acceleration have the same sign and slows down when their signs are opposite.`,
  plain: `<p>Velocity tells you how position is changing. <b>Acceleration</b> tells you how velocity is changing. A car that goes from 0 to 27 m/s in 5.0 s gains about 5 m/s of velocity every second, so its average acceleration is about 5 m/s per second, written <span class="m">5 m/s<sup>2</sup></span>.</p>
<p>Acceleration has a direction, and in one dimension that direction is its sign. The sign alone does not say whether you are speeding up. What matters is how it compares with the sign of the velocity. Moving forward and accelerating forward: faster. Moving forward and accelerating backward: slower, which is what braking does. Moving backward (negative velocity) with a negative acceleration: faster in the backward direction.</p>
<p>Zero velocity does not mean zero acceleration. A ball thrown straight up has zero velocity for an instant at the top, but gravity is still changing its velocity at 9.80 m/s every second. That is why it comes back down.</p>`,
  formal: `<p>For a particle with velocity <span class="m"><i>v</i>(<i>t</i>)</span>, the <b>average acceleration</b> over an interval and the <b>instantaneous acceleration</b> are</p>
<div class="display"><i>ā</i> = <span class="fr"><span>Δ<i>v</i></span><span>Δ<i>t</i></span></span> = <span class="fr"><span><i>v</i><sub>f</sub> − <i>v</i><sub>0</sub></span><span><i>t</i><sub>f</sub> − <i>t</i><sub>0</sub></span></span> &nbsp;&nbsp;&nbsp; <i>a</i>(<i>t</i>) = <span class="dim">lim</span><sub>Δ<i>t</i>→0</sub> <span class="fr"><span>Δ<i>v</i></span><span>Δ<i>t</i></span></span> = <span class="fr"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class="fr"><span>d<sup>2</sup><i>x</i></span><span>d<i>t</i><sup>2</sup></span></span> &nbsp; <span class="dim">(SI unit: m/s²)</span></div>
<p><span class="m"><i>ā</i></span> is the slope of the secant on a <span class="m"><i>v</i>(<i>t</i>)</span> graph and <span class="m"><i>a</i>(<i>t</i>)</span> the slope of its tangent. The speed <span class="m">|<i>v</i>|</span> increases when <span class="m"><i>v</i></span> and <span class="m"><i>a</i></span> have the same sign (<span class="m"><i>va</i> &gt; 0</span>) and decreases when they have opposite signs (<span class="m"><i>va</i> &lt; 0</span>); the term "deceleration" means only the second case, not negative acceleration. On an <span class="m"><i>x</i>(<i>t</i>)</span> graph the sign of <span class="m"><i>a</i></span> is the concavity: concave up where <span class="m"><i>a</i> &gt; 0</span>. Accelerations are often compared with <span class="m"><i>g</i> = 9.80 m/s<sup>2</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>(<i>t</i>)`, name: "Position", desc: "Where the object is. Its graph bends upward where the acceleration is positive and downward where it is negative." },
    { c: "c3", sym: `<i>v</i>(<i>t</i>)`, name: "Velocity", desc: "The slope of x(t). Its sign is the direction of motion." },
    { c: "c1", sym: `<i>a</i>(<i>t</i>)`, name: "Acceleration", desc: "The slope of v(t): how many m/s of velocity are gained per second. Compare its sign with v's to tell speeding up from slowing down." }
  ],
  steps: { title: "How to find and interpret acceleration", items: [
    `Fix the positive direction and write the velocities with signs.`,
    `<span class="c1">Average acceleration</span>: <span class="m"><i>ā</i> = (<i>v</i><sub>f</sub> − <i>v</i><sub>0</sub>)/Δ<i>t</i></span>, in m/s².`,
    `<span class="c1">Instantaneous acceleration</span> from a function: differentiate <span class="m c3"><i>v</i>(<i>t</i>)</span>, or differentiate <span class="m c2"><i>x</i>(<i>t</i>)</span> twice.`,
    `From a graph: <span class="m"><i>a</i></span> is the slope of the tangent to <span class="m"><i>v</i>(<i>t</i>)</span>.`,
    `Compare signs: same sign of <span class="m"><i>v</i></span> and <span class="m"><i>a</i></span> means speeding up; opposite signs mean slowing down.`,
    `Sanity check: compare the size with <span class="m"><i>g</i> = 9.80 m/s<sup>2</sup></span>. Cars reach a few m/s²; more than a few <span class="m"><i>g</i></span> is violent.`
  ] },
  example: {
    prompt: `During a test run on a straight track, a motorbike's velocity is <span class="m"><i>v</i>(<i>t</i>) = 12.0<i>t</i> − 1.50<i>t</i><sup>2</sup></span> (m/s, <i>t</i> in s) for <span class="m">0 ≤ <i>t</i> ≤ 8.00 s</span>. Find its acceleration at <span class="m"><i>t</i> = 2.00 s</span> and <span class="m">6.00 s</span>, say whether it is speeding up or slowing down at each, and find its average acceleration over the whole run.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>a</i>(<i>t</i>)</span> = <span class="fr"><span>d<i>v</i></span><span>d<i>t</i></span></span> = 12.0 − 3.00<i>t</i> &nbsp;m/s<sup>2</sup></span>`, note: "Differentiate the velocity (power rule)." },
      { math: `<span class="m"><span class="c3"><i>v</i>(2.00)</span> = 24.0 − 6.00 = 18.0 m/s, &nbsp; <span class="c1"><i>a</i>(2.00)</span> = 12.0 − 6.00 = +6.00 m/s<sup>2</sup></span>`, note: "Same signs: speeding up." },
      { math: `<span class="m"><span class="c3"><i>v</i>(6.00)</span> = 72.0 − 54.0 = 18.0 m/s, &nbsp; <span class="c1"><i>a</i>(6.00)</span> = 12.0 − 18.0 = −6.00 m/s<sup>2</sup></span>`, note: "Same speed as at 2.00 s, but opposite signs: slowing down while still moving forward." },
      { math: `<span class="m"><i>a</i> = 0 &nbsp;at&nbsp; <i>t</i> = 4.00 s, &nbsp; <i>v</i>(4.00) = 48.0 − 24.0 = 24.0 m/s</span>`, note: "Where the acceleration changes sign, the velocity is at its maximum." },
      { math: `<span class="m"><i>v</i>(8.00) = 96.0 − 96.0 = 0, &nbsp; <i>ā</i> = <span class="fr"><span>0 − 0</span><span>8.00 s</span></span> = 0</span>`, note: "The bike starts and ends at rest, so the average acceleration is zero." },
      { math: `<span class="m">6.00 m/s<sup>2</sup> ≈ 0.61<i>g</i>, &nbsp; 24.0 m/s ≈ 86 km/h</span>`, note: "Sanity check: strong but realistic for a motorbike." }
    ],
    answer: `<span class="m c1"><i>a</i>(2.00) = +6.00 m/s²</span> (speeding up) and <span class="m c1"><i>a</i>(6.00) = −6.00 m/s²</span> (slowing down); the average acceleration over the full 8.00 s is <span class="m">0</span> even though the bike accelerated the whole time.`
  },
  why: `<p>Acceleration is the quantity that forces control. Newton's second law says the net force on an object equals its mass times its acceleration, so every question about how a push, a pull or gravity changes motion goes through acceleration.</p>
<p>It is also what people feel. Passengers notice acceleration, not speed: a smooth flight at 250 m/s is comfortable, while a car's hard braking at 8 m/s² throws you against the belt. Engineers limit acceleration in elevators, trains and roller coasters for comfort and safety, and crash investigators measure it in multiples of <span class="m"><i>g</i></span>.</p>`,
  careers: [
    { role: "Automotive engineer", use: "Measures 0–100 km/h times and braking decelerations to rate a vehicle's performance and brake systems." },
    { role: "Elevator engineer", use: "Sets motor profiles so the car's acceleration and its rate of change stay within passenger comfort limits of roughly 1 to 1.5 m/s²." },
    { role: "Crash safety engineer", use: "Reads accelerometer traces from crash-test dummies and compares peak accelerations in g with injury criteria." },
    { role: "Aerospace engineer", use: "Designs launch trajectories so astronauts and payloads never exceed the rated g-load." },
    { role: "Smartphone sensor engineer", use: "Calibrates the MEMS accelerometer that detects screen rotation, steps and falls." },
    { role: "Roller coaster designer", use: "Shapes the track so vertical and lateral accelerations stay within safety standards." }
  ],
  life: [
    "Feeling pushed back into the seat when a car speeds up and forward when it brakes",
    "Reading 0–60 mph times in a car review",
    "Noticing the lurch when an elevator starts and stops",
    "Understanding why a phone knows which way is down",
    "Seeing that a ball at the top of its flight still has an acceleration"
  ],
  fields: [
    { name: "Physics", use: "Newton's second law links acceleration to net force, making it central to all of dynamics." },
    { name: "Mechanical engineering", use: "Vibration analysis, vehicle dynamics and machine design all work with accelerations and the forces they need." },
    { name: "Aerospace engineering", use: "Load factors and flight envelopes are stated as accelerations in multiples of g." },
    { name: "Seismology", use: "Earthquake ground motion is recorded and rated by peak ground acceleration." }
  ],
  prereqWhy: {
    "mech-velocity": "Acceleration is defined from velocity exactly as velocity is defined from position: a = dv/dt."
  },
  unlocksWhy: {
    "mech-const-accel": "When a is constant, integrating a = dv/dt gives the kinematic equations used for braking cars, runways and falling objects.",
    "mech-motion-integration": "When a varies with time, velocity and position are found by integrating a(t), reversing the derivatives on this page.",
    "mech-forces": "Forces are defined by the accelerations they produce, so a free-body diagram's net force is read against the acceleration."
  },
  mathWhy: {
    "pa-slope": `Average acceleration is the slope of a velocity–time graph, <span class="m">Δ<i>v</i>/Δ<i>t</i></span>, with units (m/s)/s = m/s². A falling velocity line has a negative slope.`,
    "calculus-1:Differentiation rules (power, product, quotient, chain)": `Finding <span class="m"><i>a</i>(<i>t</i>)</span> from <span class="m"><i>v</i>(<i>t</i>) = 12.0<i>t</i> − 1.50<i>t</i><sup>2</sup></span> or from a position function takes the power rule (and the chain rule for functions like <span class="m">sin ω<i>t</i></span>). Co-requisite: average acceleration needs only algebra; the rules are needed for instantaneous values.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Equations of motion are second-order differential equations in which the acceleration is set by the forces." },
    { field: "Waves & Fluids", why: "In simple harmonic motion the acceleration is proportional to minus the displacement, which produces oscillation." },
    { field: "General Relativity", why: "The equivalence principle states that gravity is locally indistinguishable from acceleration of the reference frame." },
    { field: "Dynamics", why: "Engineering dynamics computes accelerations of machine parts and vehicles to find the forces the structure must carry." }
  ],
  mistakes: [
    { wrong: `"Negative acceleration means slowing down."`, fix: `Slowing down means <span class="m"><i>v</i></span> and <span class="m"><i>a</i></span> have opposite signs. A car moving in the negative direction with <span class="m"><i>a</i> &lt; 0</span> is speeding up.` },
    { wrong: `"At the top of its flight the ball's acceleration is zero because it has stopped."`, fix: `Only the velocity is zero there. The acceleration is <span class="m">9.80 m/s<sup>2</sup></span> downward the whole time, which is why the velocity changes sign.` },
    { wrong: `Writing the units as m/s or as m/s·s.`, fix: `Acceleration is (m/s) per s, which is <span class="m">m/s<sup>2</sup></span>: metres per second, every second.` },
    { wrong: `Assuming zero average acceleration means the object never accelerated.`, fix: `<span class="m"><i>ā</i></span> depends only on the end velocities. The motorbike above starts and ends at rest, so <span class="m"><i>ā</i> = 0</span>, yet it accelerates at up to <span class="m">12.0 m/s<sup>2</sup></span>.` }
  ],
  practice: [
    { q: `A car goes from rest to 26.8 m/s (60 mi/h) in 5.60 s. Find its average acceleration and express it as a multiple of <span class="m"><i>g</i></span>.`, a: `<span class="m"><i>ā</i> = 26.8 m/s ÷ 5.60 s = 4.79 m/s<sup>2</sup></span>, and <span class="m">4.79/9.80 = 0.488<i>g</i></span>.` },
    { q: `An object has velocity <span class="m"><i>v</i> = −8.0 m/s</span> and constant acceleration <span class="m"><i>a</i> = +3.0 m/s<sup>2</sup></span>. Is it speeding up or slowing down? When does it stop?`, a: `Opposite signs, so it is <b>slowing down</b>. <span class="m"><i>v</i> = −8.0 + 3.0<i>t</i> = 0</span> at <span class="m"><i>t</i> = 2.7 s</span>; after that it speeds up in the positive direction.` },
    { q: `A fighter jet lands on a carrier at 70.0 m/s and is stopped by the arresting wire in 2.00 s. Find its average acceleration and compare it with <span class="m"><i>g</i></span>.`, a: `Taking the landing direction as positive: <span class="m"><i>ā</i> = (0 − 70.0 m/s)/2.00 s = −35.0 m/s<sup>2</sup></span>, about <span class="m">35.0/9.80 = 3.57<i>g</i></span> opposite to the motion.` },
    { q: `A particle's position is <span class="m"><i>x</i>(<i>t</i>) = 2.0<i>t</i><sup>3</sup> − 9.0<i>t</i><sup>2</sup> + 12<i>t</i></span> (m, <i>t</i> in s). Find <span class="m"><i>v</i>(<i>t</i>)</span> and <span class="m"><i>a</i>(<i>t</i>)</span>. At <span class="m"><i>t</i> = 0.50 s</span>, is it speeding up or slowing down?`, a: `<span class="m"><i>v</i> = 6.0<i>t</i><sup>2</sup> − 18<i>t</i> + 12</span>, <span class="m"><i>a</i> = 12<i>t</i> − 18</span>. At 0.50 s: <span class="m"><i>v</i> = 1.5 − 9.0 + 12 = 4.5 m/s</span>, <span class="m"><i>a</i> = 6.0 − 18 = −12 m/s<sup>2</sup></span>. Opposite signs: <b>slowing down</b> (it stops at <span class="m"><i>t</i> = 1.0 s</span>).` }
  ],
  origin: `Galileo defined uniformly accelerated motion as motion in which equal increments of speed are gained in equal times, and tested it with balls rolling down inclined planes, in <i>Two New Sciences</i> (1638).`
};
