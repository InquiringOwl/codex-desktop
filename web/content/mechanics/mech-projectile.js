window.ARITH = window.ARITH || {};

ARITH["mech-projectile"] = {
  title: "Projectile Motion",
  short: "Constant horizontal velocity plus free fall",
  grade: "College PHYS 1xx · University Physics I",
  hours: 7,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in two dimensions",
  hero: `<span class="m"><span class="c2" style="white-space:nowrap"><i>x</i> = <i>v</i><sub>0</sub>cos θ<sub>0</sub> <i>t</i></span> &nbsp;&nbsp; <span class="c3" style="white-space:nowrap"><i>y</i> = <i>v</i><sub>0</sub>sin θ<sub>0</sub> <i>t</i> − ½<i>gt</i><sup>2</sup></span></span>`,
  lede: `Once a projectile leaves the launcher, gravity is the only force that matters (air resistance ignored). The horizontal motion keeps a constant velocity, the vertical motion is free fall, and together they trace a <span class="c1">parabola</span>.`,
  plain: `<p>A <b>projectile</b> is anything thrown, kicked, shot or dropped that then moves under gravity alone: a ball, a jet of water, a package released from a plane. Ignoring air resistance, nothing pushes it sideways, so its <span class="c2">horizontal velocity never changes</span>. Vertically, it behaves exactly like a ball thrown straight up: it slows by 9.80 m/s every second on the way up, stops rising at the top, and speeds up on the way down.</p>
<p>The trick is to split the launch velocity into a horizontal part <span class="m c2"><i>v</i><sub>0</sub>cos θ<sub>0</sub></span> and a vertical part <span class="m c3"><i>v</i><sub>0</sub>sin θ<sub>0</sub></span> and treat them as two separate problems that share one clock. The vertical problem decides how long the flight lasts. The horizontal problem then says how far the projectile travels in that time.</p>
<p>At the <span class="c4">top of the path</span> the vertical velocity is zero but the horizontal velocity is not, so the projectile is still moving. On level ground the <span class="c4">range</span> is greatest at 45°, and angles that add to 90°, such as 30° and 60°, land at the same spot.</p>`,
  formal: `<p>Take <span class="m"><i>x</i></span> horizontal, <span class="m"><i>y</i></span> vertically up, launch at the origin with speed <span class="m"><i>v</i><sub>0</sub></span> at angle <span class="m">θ<sub>0</sub></span> above the horizontal. With no air resistance, <span class="m"><i>a<sub>x</sub></i> = 0</span> and <span class="m"><i>a<sub>y</sub></i> = −<i>g</i></span>, <span class="m"><i>g</i> = 9.80 m/s²</span>:</p>
<div class="display"><span class="c2"><i>x</i> = <i>v</i><sub>0<i>x</i></sub><i>t</i>, &nbsp; <i>v<sub>x</sub></i> = <i>v</i><sub>0<i>x</i></sub> = <i>v</i><sub>0</sub>cos θ<sub>0</sub></span><br><span class="c3"><i>y</i> = <i>v</i><sub>0<i>y</i></sub><i>t</i> − ½<i>gt</i><sup>2</sup>, &nbsp; <i>v<sub>y</sub></i> = <i>v</i><sub>0<i>y</i></sub> − <i>gt</i>, &nbsp; <i>v</i><sub>0<i>y</i></sub> = <i>v</i><sub>0</sub>sin θ<sub>0</sub></span><br><span class="c1">trajectory: &nbsp;<i>y</i> = (tan θ<sub>0</sub>)<i>x</i> − <span class="fr"><span><i>g</i></span><span>2<i>v</i><sub>0</sub><sup>2</sup>cos<sup>2</sup>θ<sub>0</sub></span></span><i>x</i><sup>2</sup></span></div>
<p>Returning to the launch height (level ground), the time of flight, maximum height and range are</p>
<div class="display"><i>T</i><sub>tof</sub> = <span class="fr"><span>2<i>v</i><sub>0</sub>sin θ<sub>0</sub></span><span><i>g</i></span></span>, &nbsp;&nbsp; <span class="c4"><i>h</i> = <span class="fr"><span><i>v</i><sub>0</sub><sup>2</sup>sin<sup>2</sup>θ<sub>0</sub></span><span>2<i>g</i></span></span></span>, &nbsp;&nbsp; <span class="c4"><i>R</i> = <span class="fr"><span><i>v</i><sub>0</sub><sup>2</sup>sin 2θ<sub>0</sub></span><span><i>g</i></span></span></span></div>
<p>so <span class="m"><i>R</i></span> is maximal at θ<sub>0</sub> = 45° and <span class="m"><i>R</i>(θ<sub>0</sub>) = <i>R</i>(90° − θ<sub>0</sub>)</span>. If the landing point is at height <span class="m"><i>y</i><sub>f</sub></span> ≠ 0, solve the quadratic <span class="m"><i>y</i><sub>f</sub> = <i>v</i><sub>0<i>y</i></sub><i>t</i> − ½<i>gt</i><sup>2</sup></span> for the positive root; these range formulas do not apply.</p>`,
  legend: [
    { c: "c2", sym: `<i>v</i><sub>0</sub>cos θ<sub>0</sub>`, name: "Horizontal component", desc: "Constant for the whole flight, because no horizontal force acts. Sets how far the projectile goes per second." },
    { c: "c3", sym: `<i>v</i><sub>0</sub>sin θ<sub>0</sub> − <i>gt</i>`, name: "Vertical component", desc: "Changes by −9.80 m/s every second: positive on the way up, zero at the top, negative on the way down." },
    { c: "c1", sym: `<i>y</i>(<i>x</i>)`, name: "Trajectory", desc: "A downward-opening parabola in the <span class=\"m\"><i>xy</i></span>-plane." },
    { c: "c4", sym: `<i>h</i>, <i>R</i>`, name: "Apex and range", desc: "Maximum height, where <span class=\"m\"><i>v<sub>y</sub></i> = 0</span>, and horizontal distance to the landing point." }
  ],
  steps: { title: "How to solve a projectile problem", items: [
    `Set up axes: origin at the launch point, <span class="m"><i>x</i></span> horizontal, <span class="m"><i>y</i></span> up, so <span class="m"><i>a<sub>y</sub></i> = −9.80 m/s²</span>.`,
    `Resolve the launch velocity: <span class="m c2"><i>v</i><sub>0<i>x</i></sub> = <i>v</i><sub>0</sub>cos θ<sub>0</sub></span>, <span class="m c3"><i>v</i><sub>0<i>y</i></sub> = <i>v</i><sub>0</sub>sin θ<sub>0</sub></span>.`,
    `Solve the vertical motion first for the time asked about: <span class="m"><i>v<sub>y</sub></i> = 0</span> for the apex, or <span class="m"><i>y</i> = <i>y</i><sub>f</sub></span> for the landing (a quadratic; keep the positive root).`,
    `Use that time in the horizontal equation <span class="m"><i>x</i> = <i>v</i><sub>0<i>x</i></sub><i>t</i></span>.`,
    `If the final velocity is asked for, combine <span class="m"><i>v<sub>x</sub></i></span> and <span class="m"><i>v<sub>y</sub></i></span> with the Pythagorean theorem and an inverse tangent.`,
    `Check: level-ground answers should match <span class="m"><i>R</i> = <i>v</i><sub>0</sub><sup>2</sup>sin 2θ<sub>0</sub>/<i>g</i></span>; impact speed should satisfy <span class="m"><i>v</i><sup>2</sup> = <i>v</i><sub>0</sub><sup>2</sup> − 2<i>g</i>Δ<i>y</i></span>.`
  ] },
  example: {
    prompt: `A shot-putter releases the shot 2.10 m above the ground at 13.0 m/s, 40.0° above the horizontal. Ignoring air resistance, how long is it in the air and how far away does it land? How high does it rise?`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>v</i><sub>0<i>x</i></sub> = 13.0 cos 40.0° = 9.96 m/s</span>, &nbsp; <span class="c3"><i>v</i><sub>0<i>y</i></sub> = 13.0 sin 40.0° = 8.36 m/s</span></span>`, note: "Resolve the launch velocity. Origin at the ground below the release point, so y₀ = 2.10 m." },
      { math: `<span class="m">0 = 2.10 + 8.36<i>t</i> − 4.90<i>t</i><sup>2</sup></span>`, note: "The shot lands when y = 0: a quadratic in t." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>8.36 + √(8.36<sup>2</sup> + 4(4.90)(2.10))</span><span>2(4.90)</span></span> = <span class="fr"><span>8.36 + 10.5</span><span>9.80</span></span> = 1.93 s</span>`, note: "Quadratic formula; the other root is negative and is rejected." },
      { math: `<span class="m"><span class="c4"><i>R</i></span> = <i>v</i><sub>0<i>x</i></sub><i>t</i> = (9.96 m/s)(1.93 s) = <span class="c4">19.2 m</span></span>`, note: "The horizontal velocity is constant, so distance is velocity times time (unrounded values carried)." },
      { math: `<span class="m"><i>y</i><sub>max</sub> = 2.10 m + <span class="fr"><span>(8.36 m/s)<sup>2</sup></span><span>2(9.80 m/s²)</span></span> = 2.10 + 3.56 = <span class="c4">5.66 m</span></span>`, note: "At the apex v_y = 0, reached at t = 8.36/9.80 = 0.853 s." },
      { math: `<span class="m"><i>v<sub>y</sub></i> = 8.36 − 9.80(1.93) = −10.5 m/s, &nbsp; |<b>v</b>| = √(9.96<sup>2</sup> + 10.5<sup>2</sup>) = 14.5 m/s</span>`, note: "Check with energy: √(13.0² + 2(9.80)(2.10)) = 14.5 m/s. Landing faster than launch makes sense, since it falls 2.10 m below release." }
    ],
    answer: `The shot is in the air for <span class="m">1.93 s</span>, lands <span class="m c4">19.2 m</span> away, and peaks at <span class="m c4">5.66 m</span> above the ground.`
  },
  why: `<p>Every thrown, kicked or launched object follows this model until air resistance matters: balls in sport, water from a hose or fountain, debris from an explosion, a package dropped from an aircraft. Forensic investigators run it backwards from where something landed. Engineers use it as the first estimate before adding drag.</p>
<p>It is also the cleanest demonstration that perpendicular components of motion are independent. A ball dropped and a ball fired horizontally from the same height hit the ground together, because the horizontal motion has no effect on the vertical one. That idea, splitting a vector problem into independent scalar problems, runs through all of physics.</p>`,
  careers: [
    { role: "Forensic engineer", use: "Reconstructs vehicle crashes by working back from how far a car or debris travelled after leaving an embankment to its launch speed." },
    { role: "Sports analyst", use: "Relates release speed, angle and height to distance for shot put, javelin and long-jump performance." },
    { role: "Firefighter", use: "Aims hose streams at the right angle to reach a window at a given height and distance." },
    { role: "Fountain and irrigation designer", use: "Sets nozzle angles and pressures so water jets land on target areas." },
    { role: "Aerial firefighting and airdrop planner", use: "Computes the release point ahead of a target from the aircraft's speed and altitude." },
    { role: "Special-effects and stunt coordinator", use: "Calculates ramp angle and speed for a vehicle jump to land on a specific ramp." }
  ],
  life: [
    "Judging how hard to throw a ball to a friend at a given distance",
    "Aiming a garden hose to reach the far side of a flower bed",
    "Understanding why a basketball shot needs more arc from farther away",
    "Seeing why a ball rolling off a table lands farther out when it rolls faster, but lands at the same time",
    "Knowing why 45° is a good angle for a long throw on flat ground"
  ],
  fields: [
    { name: "Sports science", use: "Optimises release angle, speed and height in throwing and jumping events." },
    { name: "Forensic science", use: "Reconstructs trajectories of vehicles, bodies and projectiles from landing positions." },
    { name: "Ballistics", use: "The drag-free parabola is the baseline model before air resistance and spin are added." },
    { name: "Civil and environmental engineering", use: "Designs spillways, jets and sprinklers whose water follows projectile paths." }
  ],
  prereqWhy: {
    "mech-2d-motion": "A projectile is two-dimensional motion with constant acceleration a = −g ĵ, solved axis by axis on a shared clock.",
    "mech-free-fall": "The vertical part of every projectile problem is a free-fall problem with g = 9.80 m/s², including the apex and the landing-time quadratic."
  },
  unlocksWhy: {},
  mathWhy: {
    "trigonometry:Right-triangle ratios (SOH-CAH-TOA)": `The launch velocity is resolved into <span class="m"><i>v</i><sub>0</sub>cos θ<sub>0</sub></span> and <span class="m"><i>v</i><sub>0</sub>sin θ<sub>0</sub></span>, and the impact angle is <span class="m">tan<sup>−1</sup>(|<i>v<sub>y</sub></i>|/<i>v<sub>x</sub></i>)</span>.`,
    "trigonometry:Trigonometric identities": `The range formula uses <span class="m">2 sin θ cos θ = sin 2θ</span>, and <span class="m">sin 2θ = sin(180° − 2θ)</span> explains why complementary angles give equal ranges.`,
    "a1-quad-graphs": `Height is a quadratic in <span class="m"><i>t</i></span> and the path is a parabola <span class="m"><i>y</i>(<i>x</i>)</span>; the vertex gives the maximum height and the positive root the landing time.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Projectiles with linear or quadratic drag are standard problems solved with differential equations, with the parabola as the zero-drag limit." },
    { field: "Computational Physics", why: "Numerical trajectory integration with drag, wind and spin is checked against the exact projectile solution." },
    { field: "Aerospace Engineering", why: "Ballistic phases of rocket and re-entry trajectories start from the same component equations under gravity." },
    { field: "Electricity & Magnetism", why: "A charged particle in a uniform electric field follows a parabola, exactly like a projectile, as in a cathode-ray tube." }
  ],
  mistakes: [
    { wrong: `"At the top of its path the projectile's velocity is zero."`, fix: `Only <span class="m"><i>v<sub>y</sub></i></span> is zero at the apex. The horizontal component <span class="m"><i>v</i><sub>0</sub>cos θ<sub>0</sub></span> is still there, and the acceleration is still <span class="m">9.80 m/s²</span> downward.` },
    { wrong: `Using <span class="m"><i>R</i> = <i>v</i><sub>0</sub><sup>2</sup>sin 2θ<sub>0</sub>/<i>g</i></span> when the launch and landing heights differ.`, fix: `The range formula assumes the projectile lands at its launch height. Otherwise solve the vertical quadratic for the flight time, then use <span class="m"><i>x</i> = <i>v</i><sub>0<i>x</i></sub><i>t</i></span>.` },
    { wrong: `Putting the horizontal speed into the vertical equation, or giving the horizontal motion an acceleration of 9.80 m/s².`, fix: `Keep the components apart: <span class="m"><i>a<sub>x</sub></i> = 0</span>, <span class="m"><i>a<sub>y</sub></i> = −9.80 m/s²</span>. Horizontal velocity is constant.` },
    { wrong: `Calculator in radian mode: <span class="m">sin 40 = 0.745</span>.`, fix: `Angles given in degrees need degree mode: <span class="m">sin 40.0° = 0.643</span>.` }
  ],
  practice: [
    { q: `A ball is kicked from level ground at 20.0 m/s, 30.0° above the horizontal. Find its time of flight, maximum height and range.`, a: `<span class="m"><i>T</i> = 2(20.0)(sin 30.0°)/9.80 = 2.04</span> s; <span class="m"><i>h</i> = (20.0 sin 30.0°)<sup>2</sup>/(2 · 9.80) = 5.10</span> m; <span class="m"><i>R</i> = (20.0)<sup>2</sup>sin 60.0°/9.80 = 35.3</span> m.` },
    { q: `A ball rolls off a table 1.25 m high at 3.00 m/s. How long is it in the air, how far from the table does it land, and how fast is it moving at impact?`, a: `<span class="m"><i>v</i><sub>0<i>y</i></sub> = 0</span>, so <span class="m">1.25 = 4.90<i>t</i><sup>2</sup></span> and <span class="m"><i>t</i> = 0.505</span> s. <span class="m"><i>x</i> = 3.00(0.505) = 1.52</span> m. <span class="m"><i>v<sub>y</sub></i> = −9.80(0.505) = −4.95</span> m/s, so <span class="m"><i>v</i> = √(3.00<sup>2</sup> + 4.95<sup>2</sup>) = 5.79</span> m/s at 58.8° below the horizontal.` },
    { q: `On level ground a ball launched at 15.0 m/s and 25.0° lands 17.6 m away. What other launch angle at the same speed gives the same range, and which of the two flights lasts longer?`, a: `65.0°, since <span class="m">sin(2 · 65.0°) = sin 130° = sin 50.0°</span>. The 65.0° flight lasts longer: <span class="m"><i>T</i> = 2(15.0)sin 65.0°/9.80 = 2.77</span> s versus <span class="m">2(15.0)sin 25.0°/9.80 = 1.29</span> s, because its vertical launch component is larger.` },
    { q: `A fire hose at ground level sprays water at 25.0 m/s, 50.0° above the horizontal, toward a building 40.0 m away. At what height does the water hit the wall, and is it still rising?`, a: `<span class="m"><i>v</i><sub>0<i>x</i></sub> = 16.1</span> m/s, so <span class="m"><i>t</i> = 40.0/16.07 = 2.49</span> s. <span class="m"><i>y</i> = 19.15(2.49) − 4.90(2.49)<sup>2</sup> = 17.3</span> m. <span class="m"><i>v<sub>y</sub></i> = 19.15 − 9.80(2.49) = −5.24</span> m/s, so the water is already falling when it hits.` }
  ],
  origin: `Niccolò Tartaglia's <i>Nova Scientia</i> (1537) claimed that a gun elevated at 45° gives the greatest range. Galileo proved in <i>Two New Sciences</i> (1638) that a projectile's path is a parabola, by combining uniform horizontal motion with uniformly accelerated fall, and showed that elevations equally above and below 45° give equal ranges.`
};
