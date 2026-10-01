window.ARITH = window.ARITH || {};

ARITH["mech-free-fall"] = {
  title: "Free Fall",
  short: "Vertical motion with a = −g = −9.80 m/s²",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in one dimension",
  hero: `<span class="m"><span class="c2"><i>y</i></span> = <i>y</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> − <span class="fr"><span>1</span><span>2</span></span><i>gt</i><sup>2</sup> &nbsp;&nbsp; <span class="c3"><i>v</i></span> = <i>v</i><sub>0</sub> − <i>gt</i></span>`,
  lede: `An object moving only under gravity, near Earth's surface and without significant air resistance, is in <b>free fall</b>. It has a constant downward acceleration <span class="m"><i>g</i> = 9.80 m/s<sup>2</sup></span> whether it is rising, at the <span class="c4">top</span>, or falling.`,
  plain: `<p>Drop a stone and it falls faster and faster. Throw it up and it slows, stops for an instant, and falls back. Both motions are the same physics: as long as air resistance is small, gravity changes the velocity by 9.80 m/s downward every second. That number, <span class="m"><i>g</i></span>, is the same for a stone and a bowling ball, which is Galileo's famous point: in the absence of air, heavy and light objects fall together.</p>
<p>Take up as positive. Then the acceleration is <span class="m">−<i>g</i></span> all the time, and the constant-acceleration equations become the free-fall equations. A ball thrown up at 15 m/s loses 9.80 m/s each second, so it reaches the top after about 1.5 s. On the way down it passes its launch height at the same speed it was thrown with, now pointing down.</p>
<p>The key moments come from simple equations. The <b>apex</b> is where the velocity is zero. The <b>landing time</b> is where the height equals the ground level, which is a quadratic equation in <span class="m"><i>t</i></span>. One root is the landing; the other is a time before the throw and is discarded.</p>`,
  formal: `<p>Near Earth's surface, neglecting air resistance, every freely falling body has acceleration <span class="m"><b>a</b> = −<i>g</i> ĵ</span>, with <span class="m"><i>g</i> = 9.80 m/s<sup>2</sup></span> (it varies from about 9.78 to 9.83 m/s² with latitude and altitude). With the <span class="m"><i>y</i></span>-axis vertical and up positive, the kinematic equations with <span class="m"><i>a</i> = −<i>g</i></span> are</p>
<div class="display"><i>v</i> = <i>v</i><sub>0</sub> − <i>gt</i> &nbsp;&nbsp;&nbsp; <i>y</i> = <i>y</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> − <span class="fr"><span>1</span><span>2</span></span><i>gt</i><sup>2</sup> &nbsp;&nbsp;&nbsp; <i>v</i><sup>2</sup> = <i>v</i><sub>0</sub><sup>2</sup> − 2<i>g</i>(<i>y</i> − <i>y</i><sub>0</sub>)<br>apex: <i>t</i><sub>top</sub> = <span class="fr"><span><i>v</i><sub>0</sub></span><span><i>g</i></span></span>, &nbsp; <i>y</i><sub>max</sub> − <i>y</i><sub>0</sub> = <span class="fr"><span><i>v</i><sub>0</sub><sup>2</sup></span><span>2<i>g</i></span></span> &nbsp; <span class="dim">(<i>v</i><sub>0</sub> &gt; 0)</span></div>
<p>The time to reach height <span class="m"><i>y</i></span> solves <span class="m">½<i>gt</i><sup>2</sup> − <i>v</i><sub>0</sub><i>t</i> + (<i>y</i> − <i>y</i><sub>0</sub>) = 0</span>; two positive roots mean the height is passed going up and coming down, and a negative discriminant means it is never reached. By symmetry of the parabola, an object returns to its launch height after <span class="m">2<i>v</i><sub>0</sub>/<i>g</i></span> with velocity <span class="m">−<i>v</i><sub>0</sub></span>. The motion is independent of mass. Air resistance makes real objects fall more slowly and eventually reach a terminal speed.</p>`,
  legend: [
    { c: "c1", sym: `●`, name: "The ball", desc: "The falling object, shown at equal time steps (strobe images). Wider gaps mean higher speed." },
    { c: "c2", sym: `<i>y</i>(<i>t</i>)`, name: "Height", desc: "Position on the vertical axis, up positive. A downward-opening parabola in time." },
    { c: "c3", sym: `<i>v</i>(<i>t</i>)`, name: "Velocity", desc: "A straight line with slope −g = −9.80 m/s². Positive while rising, zero at the top, negative while falling." },
    { c: "c4", sym: `<i>t</i><sub>top</sub>, <i>y</i><sub>max</sub>`, name: "Apex", desc: "The highest point, reached when v = 0 at t = v₀/g. The acceleration there is still −g." }
  ],
  steps: { title: "How to solve a free-fall problem", items: [
    `Choose up as positive and put the origin somewhere convenient (the ground or the launch point). Then <span class="m"><i>a</i> = −<i>g</i> = −9.80 m/s<sup>2</sup></span>.`,
    `Write <span class="m"><i>y</i><sub>0</sub></span>, <span class="m"><i>v</i><sub>0</sub></span> (negative if thrown downward, zero if dropped) and the target <span class="m"><i>y</i></span> or <span class="m"><i>v</i></span>.`,
    `<span class="c4">Apex</span>: set <span class="m"><i>v</i> = 0</span> to get <span class="m"><i>t</i><sub>top</sub> = <i>v</i><sub>0</sub>/<i>g</i></span> and <span class="m"><i>y</i><sub>max</sub> = <i>y</i><sub>0</sub> + <i>v</i><sub>0</sub><sup>2</sup>/(2<i>g</i>)</span>.`,
    `Time to reach a height: solve the quadratic <span class="m c2"><i>y</i>(<i>t</i>) = <i>y</i></span> with the quadratic formula; keep roots with <span class="m"><i>t</i> ≥ 0</span>.`,
    `Speed at a height: use <span class="m"><i>v</i><sup>2</sup> = <i>v</i><sub>0</sub><sup>2</sup> − 2<i>g</i>(<i>y</i> − <i>y</i><sub>0</sub>)</span> and choose the sign from the direction of motion.`,
    `Check: the landing velocity should be negative, and its size should agree between two different equations.`
  ] },
  example: {
    prompt: `A student on the edge of a flat roof throws a ball straight up at 15.0 m/s. The launch point is 20.0 m above the ground, and the ball just misses the roof edge on the way down. Find the maximum height above the ground, the time to reach the ground, and the velocity at impact.`,
    lines: [
      { math: `<span class="m"><i>y</i><sub>0</sub> = 20.0 m, &nbsp; <i>v</i><sub>0</sub> = +15.0 m/s, &nbsp; <i>a</i> = −9.80 m/s<sup>2</sup></span>`, note: "Origin at the ground, up positive." },
      { math: `<span class="m"><span class="c4"><i>t</i><sub>top</sub></span> = <span class="fr"><span>15.0 m/s</span><span>9.80 m/s<sup>2</sup></span></span> = 1.53 s, &nbsp; <span class="c4"><i>y</i><sub>max</sub></span> = 20.0 m + <span class="fr"><span>(15.0 m/s)<sup>2</sup></span><span>2(9.80 m/s<sup>2</sup>)</span></span> = <span class="c4">31.5 m</span></span>`, note: "At the apex v = 0; the ball rises 11.5 m above the roof." },
      { math: `<span class="m">0 = 20.0 + 15.0<i>t</i> − 4.90<i>t</i><sup>2</sup> &nbsp;⇒&nbsp; 4.90<i>t</i><sup>2</sup> − 15.0<i>t</i> − 20.0 = 0</span>`, note: "Landing: the height is zero." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>15.0 + √(225 + 392)</span><span>9.80</span></span> = <span class="fr"><span>15.0 + 24.8</span><span>9.80</span></span> = <span class="c2">4.07 s</span></span>`, note: "Quadratic formula; the other root, −1.00 s, is before the throw." },
      { math: `<span class="m"><span class="c3"><i>v</i></span> = 15.0 − 9.80(4.065) = <span class="c3">−24.8 m/s</span></span>`, note: "Impact velocity from v = v₀ − gt: 24.8 m/s downward." },
      { math: `<span class="m">√(15.0<sup>2</sup> + 2(9.80)(20.0)) = √617 = 24.8 m/s ✓</span>`, note: "Check with v² = v₀² − 2g(y − y₀), which does not use the time." }
    ],
    answer: `The ball rises to <span class="m c4">31.5 m</span> above the ground (after 1.53 s), lands after <span class="m c2">4.07 s</span>, and hits the ground at <span class="m c3">24.8 m/s downward</span>.`
  },
  why: `<p>Free fall is the cleanest real example of constant acceleration and the first place where a physics model can be checked against a stopwatch. It is also the vertical half of every projectile: a thrown ball, a jump, water from a fountain or a package dropped from a plane.</p>
<p>The fact that all objects fall with the same acceleration turned out to be deep. It means gravitational mass and inertial mass are equal, which Newton checked with pendulums and Einstein made the starting point of general relativity. In engineering, drop heights set impact speeds for helmets, packaging and fall-protection gear.</p>`,
  careers: [
    { role: "Fall-protection engineer", use: "Uses v² = 2gh to find the impact speed from a given fall height when rating harnesses, nets and guardrails." },
    { role: "Packaging engineer", use: "Designs cushioning for the impact speed of standard drop-test heights." },
    { role: "Physical therapist", use: "Estimates a patient's jump height from flight time with h = g t²/8 using a jump mat." },
    { role: "Metrologist", use: "Measures local g to parts per billion with absolute gravimeters that track a mass in free fall in a vacuum." },
    { role: "Stunt coordinator", use: "Computes fall times and landing speeds from platform heights to choose airbag and catcher sizes." },
    { role: "Geologist", use: "Estimates cliff or well depths from the time for a dropped rock to hit bottom, correcting for sound travel time." }
  ],
  life: [
    "Estimating the depth of a well by timing a dropped stone",
    "Measuring your reaction time by catching a falling ruler",
    "Knowing how fast you hit the water when jumping off a diving board",
    "Understanding why a coin and a feather fall together only in a vacuum",
    "Seeing why a ball thrown up comes back at the speed you threw it"
  ],
  fields: [
    { name: "Physics", use: "Free fall is the standard test case for constant acceleration and for the universality of gravity." },
    { name: "Geodesy", use: "Absolute gravimeters time free-falling masses to map small variations of g across Earth." },
    { name: "Sports science", use: "Jump height, hang time and diving trajectories are analysed with the free-fall equations." },
    { name: "Safety engineering", use: "Drop heights and impact speeds from v² = 2gh set standards for helmets, packaging and fall protection." }
  ],
  prereqWhy: {
    "mech-const-accel": "Free fall is constant-acceleration motion with a = −g, so it uses the same four equations along the vertical axis."
  },
  unlocksWhy: {
    "mech-projectile": "A projectile's vertical motion is free fall, run alongside constant-velocity horizontal motion."
  },
  mathWhy: {
    "a1-quad-apps": `The height <span class="m"><i>y</i>(<i>t</i>) = <i>y</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> − 4.90<i>t</i><sup>2</sup></span> is a downward parabola; the apex is its vertex at <span class="m"><i>t</i> = −<i>b</i>/(2<i>a</i>) = <i>v</i><sub>0</sub>/<i>g</i></span>, and landing is its positive zero.`,
    "a1-quad-formula": `Landing times and times to pass a given height come from <span class="m">4.90<i>t</i><sup>2</sup> − <i>v</i><sub>0</sub><i>t</i> + (<i>y</i> − <i>y</i><sub>0</sub>) = 0</span>, which rarely factors. The discriminant tells you whether the height is reached at all.`
  },
  beyond: [
    { field: "General Relativity", why: "The equality of free-fall accelerations for all bodies is the equivalence principle, the foundation of Einstein's theory of gravity." },
    { field: "Classical Mechanics", why: "Uniform gravity is the standard first potential for Lagrangian mechanics and for motion with air resistance." },
    { field: "Astrophysics & Cosmology", why: "Free fall generalises to orbits: a satellite is an object in free fall that keeps missing the Earth." },
    { field: "Aerospace Engineering", why: "Drop tests, parabolic flights and microgravity experiments are designed from free-fall kinematics." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>a</i> = +9.80 m/s<sup>2</sup></span> with up positive.`, fix: `With up positive, gravity's acceleration is <span class="m">−9.80 m/s<sup>2</sup></span> on the way up and on the way down. Mixing the conventions gives a ball that never returns.` },
    { wrong: `"At the top the acceleration is zero."`, fix: `At the top <span class="m"><i>v</i> = 0</span>, but <span class="m"><i>a</i> = −9.80 m/s<sup>2</sup></span>. If it were zero the ball would hang in the air.` },
    { wrong: `Thinking heavier objects fall faster.`, fix: `Without air resistance every object has the same acceleration <span class="m"><i>g</i></span>. Differences you see come from air drag, which matters more for light, broad objects.` },
    { wrong: `Taking the wrong root, or adding the apex time and the fall time from the apex incorrectly.`, fix: `Solve <span class="m"><i>y</i>(<i>t</i>) = 0</span> once for the whole flight and keep the positive root. If you split at the apex, fall from <span class="m"><i>y</i><sub>max</sub></span> starting with <span class="m"><i>v</i> = 0</span>.` }
  ],
  practice: [
    { q: `A stone is dropped from rest from a bridge 45.0 m above a river. How long does it fall, and how fast is it moving when it hits the water?`, a: `<span class="m"><i>t</i> = √(2<i>h</i>/<i>g</i>) = √(90.0/9.80) = 3.03 s</span>; <span class="m"><i>v</i> = <i>gt</i> = 29.7 m/s</span> downward (check: <span class="m">√(2 · 9.80 · 45.0) = 29.7</span>).` },
    { q: `A ball is thrown straight up at 12.0 m/s. What are its velocity and acceleration at the highest point? How long until it returns to the launch height, and how fast is it moving then?`, a: `At the top <span class="m"><i>v</i> = 0</span> and <span class="m"><i>a</i> = 9.80 m/s<sup>2</sup></span> downward. It returns after <span class="m">2<i>v</i><sub>0</sub>/<i>g</i> = 24.0/9.80 = 2.45 s</span>, moving at <span class="m">12.0 m/s</span> downward.` },
    { q: `In a reaction-time test a friend drops a ruler and you catch it after it has fallen 18.0 cm. What is your reaction time?`, a: `<span class="m"><i>t</i> = √(2<i>d</i>/<i>g</i>) = √(2 × 0.180/9.80) = √0.0367 = 0.192 s</span>.` },
    { q: `A ball is thrown straight up from the ground at 10.0 m/s. Does it reach a ledge 6.00 m high? When is it 4.00 m above the ground?`, a: `Maximum height <span class="m">(10.0)<sup>2</sup>/(2 × 9.80) = 5.10 m</span>, so it <b>never reaches</b> 6.00 m: <span class="m">4.90<i>t</i><sup>2</sup> − 10.0<i>t</i> + 6.00 = 0</span> has discriminant <span class="m">100 − 117.6 &lt; 0</span>. For 4.00 m: <span class="m">4.90<i>t</i><sup>2</sup> − 10.0<i>t</i> + 4.00 = 0</span> gives <span class="m"><i>t</i> = (10.0 ± √21.6)/9.80</span>, so <span class="m">0.546 s</span> on the way up and <span class="m">1.49 s</span> on the way down.` }
  ],
  origin: `Aristotle taught that heavier bodies fall faster. Galileo showed, with inclined-plane experiments described in <i>Two New Sciences</i> (1638), that falling bodies accelerate uniformly and that the distance fallen grows as the square of the time. In 1971 Apollo 15 astronaut David Scott dropped a hammer and a feather on the Moon, and they landed together.`
};
