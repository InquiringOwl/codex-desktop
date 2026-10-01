window.ARITH = window.ARITH || {};

ARITH["mech-const-accel"] = {
  title: "Motion with Constant Acceleration",
  short: "The four kinematic equations and how to choose one",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in one dimension",
  hero: `<span class="m"><span class="c1"><i>x</i></span> = <span class="c2"><i>x</i><sub>0</sub></span> + <span class="c2"><i>v</i><sub>0</sub></span><i>t</i> + <span class="fr"><span>1</span><span>2</span></span><span class="c3"><i>a</i></span><i>t</i><sup>2</sup> &nbsp;&nbsp; <span class="c1"><i>v</i></span><sup>2</sup> = <span class="c2"><i>v</i><sub>0</sub></span><sup>2</sup> + 2<span class="c3"><i>a</i></span>(<i>x</i> − <i>x</i><sub>0</sub>)</span>`,
  lede: `When the <span class="c3">acceleration</span> is constant, four equations connect the <span class="c2">initial position and velocity</span>, the elapsed time and the <span class="c1">final position and velocity</span>. Each equation leaves out one quantity, so you choose the one that skips what you neither know nor need.`,
  plain: `<p>Many real motions have an acceleration that is close enough to constant: a car braking hard, a plane speeding up on a runway, a ball in free fall. For these, you do not need calculus each time. The velocity changes by the same amount every second, so <span class="m"><i>v</i> = <i>v</i><sub>0</sub> + <i>at</i></span>. Because the velocity rises in a straight line, the average velocity is simply halfway between the start and end values.</p>
<p>Displacement is average velocity times time. Put those two facts together and you get the other equations: one for position at a given time, and one that links speed and distance with no time in it at all. That last one is the go-to for stopping distances: how far does a car travel while braking from a given speed?</p>
<p>On a velocity–time graph, constant acceleration is a straight line, and the displacement is the area under that line: a rectangle for the starting speed plus a triangle for the speed gained.</p>`,
  formal: `<p>For motion along a line with constant acceleration <span class="m"><i>a</i></span>, starting at <span class="m"><i>t</i> = 0</span> with position <span class="m"><i>x</i><sub>0</sub></span> and velocity <span class="m"><i>v</i><sub>0</sub></span>, integrating <span class="m">d<i>v</i>/d<i>t</i> = <i>a</i></span> and <span class="m">d<i>x</i>/d<i>t</i> = <i>v</i></span> gives</p>
<div class="display"><i>v</i> = <i>v</i><sub>0</sub> + <i>at</i> &nbsp; <span class="dim">(no <i>x</i>)</span><br><i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> + <span class="fr"><span>1</span><span>2</span></span><i>at</i><sup>2</sup> &nbsp; <span class="dim">(no <i>v</i>)</span><br><i>v</i><sup>2</sup> = <i>v</i><sub>0</sub><sup>2</sup> + 2<i>a</i>(<i>x</i> − <i>x</i><sub>0</sub>) &nbsp; <span class="dim">(no <i>t</i>)</span><br><i>x</i> = <i>x</i><sub>0</sub> + <i>v̄t</i>, &nbsp; <i>v̄</i> = <span class="fr"><span><i>v</i><sub>0</sub> + <i>v</i></span><span>2</span></span> &nbsp; <span class="dim">(no <i>a</i>)</span></div>
<p>The third follows from the first two by eliminating <span class="m"><i>t</i></span>. The formula <span class="m"><i>v̄</i> = (<i>v</i><sub>0</sub> + <i>v</i>)/2</span> holds only for constant acceleration. The displacement <span class="m"><i>x</i> − <i>x</i><sub>0</sub></span> equals the signed area under the <span class="m"><i>v</i>(<i>t</i>)</span> line from <span class="m">0</span> to <span class="m"><i>t</i></span>. Solving the position equation for <span class="m"><i>t</i></span> is a quadratic problem; roots with <span class="m"><i>t</i> &lt; 0</span> lie outside the motion described, and a negative discriminant means the position is never reached. With <span class="m"><i>a</i> = 0</span> the equations reduce to constant velocity, <span class="m"><i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i><sub>0</sub>, <i>v</i><sub>0</sub>`, name: "Initial values", desc: "Position and velocity at t = 0. Their signs follow the chosen positive direction." },
    { c: "c3", sym: `<i>a</i>`, name: "Acceleration", desc: "Constant throughout the interval. Negative when it points in the negative direction, whatever the velocity is doing." },
    { c: "c1", sym: `<i>x</i>, <i>v</i>`, name: "Result", desc: "The position and velocity at time t, found from whichever equation contains the unknown and skips the quantity you do not have." },
    { c: "c4", sym: `∫ <i>v</i> d<i>t</i>`, name: "Area under v(t)", desc: "The displacement, shown as the area between the velocity line and the time axis. Area below the axis counts as negative." }
  ],
  steps: { title: "How to solve a constant-acceleration problem", items: [
    `Sketch the motion. Choose the origin and positive direction, and check that the acceleration really is constant over the interval (split the problem if it changes).`,
    `List the five quantities <span class="m"><span class="c2"><i>x</i> − <i>x</i><sub>0</sub>, <i>v</i><sub>0</sub></span>, <span class="c1"><i>v</i></span>, <span class="c3"><i>a</i></span>, <i>t</i></span> with signs and units. Mark the unknown you want and the one you neither know nor need.`,
    `Pick the equation that leaves out that unneeded quantity.`,
    `Solve it for the unknown symbolically first, then substitute numbers with units.`,
    `If the equation is quadratic in <span class="m"><i>t</i></span>, use the quadratic formula and keep only physically meaningful roots.`,
    `Check signs, units and size, for example against the area under the <span class="m"><i>v</i>(<i>t</i>)</span> graph or another equation.`
  ] },
  example: {
    prompt: `A driver moving at 26.0 m/s (about 94 km/h) sees a hazard. After a reaction time of 0.500 s she brakes, and the car slows at a constant 7.00 m/s² on dry pavement. How far does the car travel from the moment she sees the hazard until it stops, and how long does braking take?`,
    lines: [
      { math: `<span class="m"><i>x</i><sub>1</sub> = <span class="c2"><i>v</i><sub>0</sub></span><i>t</i><sub>r</sub> = (26.0 m/s)(0.500 s) = 13.0 m</span>`, note: "During the reaction time the car still moves at constant velocity (a = 0)." },
      { math: `<span class="m"><span class="c2"><i>v</i><sub>0</sub> = +26.0 m/s</span>, &nbsp; <span class="c1"><i>v</i> = 0</span>, &nbsp; <span class="c3"><i>a</i> = −7.00 m/s<sup>2</sup></span>, &nbsp; <i>x</i> − <i>x</i><sub>0</sub> = ?</span>`, note: "Braking phase. Time is not given and not needed, so use the equation without t." },
      { math: `<span class="m"><i>x</i> − <i>x</i><sub>0</sub> = <span class="fr"><span><i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup></span><span>2<i>a</i></span></span> = <span class="fr"><span>0 − (26.0 m/s)<sup>2</sup></span><span>2(−7.00 m/s<sup>2</sup>)</span></span> = 48.3 m</span>`, note: "Solve v² = v₀² + 2a(x − x₀) for the displacement." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span><i>v</i> − <i>v</i><sub>0</sub></span><span><i>a</i></span></span> = <span class="fr"><span>0 − 26.0 m/s</span><span>−7.00 m/s<sup>2</sup></span></span> = 3.71 s</span>`, note: "Braking time from v = v₀ + at." },
      { math: `<span class="m"><i>v̄t</i> = (13.0 m/s)(3.714 s) = 48.3 m ✓</span>`, note: "Check with the no-a equation: the average velocity while braking is (26.0 + 0)/2." },
      { math: `<span class="m"><span class="c1"><i>x</i><sub>total</sub></span> = 13.0 m + 48.3 m = <span class="c1">61.3 m</span></span>`, note: "Sanity check: positive (in the direction of travel), in metres, and about 14 car lengths, a realistic stopping distance at highway speed." }
    ],
    answer: `The car travels <span class="m c1">61.3 m</span> in all: 13.0 m before the brakes act and 48.3 m while braking, which takes <span class="m">3.71 s</span>.`
  },
  why: `<p>These four equations handle a surprising share of real motion: braking and stopping distances, runway lengths, sprint starts, elevators, rail vehicles, and any object falling without much air resistance. Because the braking distance grows with <span class="m"><i>v</i><sub>0</sub><sup>2</sup></span>, doubling your speed quadruples it, which is the physics behind speed limits near schools.</p>
<p>They are also the model for solving any physics problem: list the knowns with signs and units, choose the relation that connects them to the unknown, solve symbolically, and check. The same equations reappear for projectiles, for rotation with constant angular acceleration, and for charged particles in uniform electric fields.</p>`,
  careers: [
    { role: "Highway engineer", use: "Computes stopping sight distance from design speed, reaction time and braking deceleration to set curve and crest lengths." },
    { role: "Airport planner", use: "Uses takeoff speed and average acceleration to check that a runway is long enough for a given aircraft." },
    { role: "Accident reconstructionist", use: "Works back from skid-mark length and road friction to the vehicle's speed when braking began." },
    { role: "Railway signalling engineer", use: "Spaces signals using train braking distances computed from speed and service deceleration." },
    { role: "Sprint coach", use: "Estimates an athlete's acceleration over the first 10–20 m from split times to target start technique." },
    { role: "Rollercoaster engineer", use: "Sizes launch sections from the target exit speed and the allowed acceleration of the linear motors." }
  ],
  life: [
    "Understanding why following distance should grow with speed",
    "Seeing why doubling your speed makes the braking distance four times longer",
    "Judging whether you can stop before a yellow light turns red",
    "Estimating how long a plane needs on the runway before takeoff",
    "Working out when a faster car will catch up with one that started ahead"
  ],
  fields: [
    { name: "Physics", use: "Constant-acceleration kinematics underlies free fall, projectile motion and uniform-field motion of charges." },
    { name: "Civil engineering", use: "Road and rail design use stopping and acceleration distances for sight lines, lane lengths and signal spacing." },
    { name: "Aerospace engineering", use: "Runway performance and launch phases are first estimated with constant-acceleration models." },
    { name: "Forensic science", use: "Traffic accident analysis reconstructs speeds from stopping distances and braking decelerations." }
  ],
  prereqWhy: {
    "mech-acceleration": "The four equations come from holding a = dv/dt constant, and reading them needs the sign rules for speeding up and slowing down."
  },
  unlocksWhy: {
    "mech-free-fall": "Free fall is constant-acceleration motion with a = −g = −9.80 m/s², so the same four equations apply in the vertical direction.",
    "mech-2d-motion": "In two dimensions the equations are applied separately to the x- and y-components of position, velocity and acceleration."
  },
  mathWhy: {
    "a1-literal": `Each kinematic equation is solved for whichever letter is unknown before substituting, as in <span class="m"><i>x</i> − <i>x</i><sub>0</sub> = (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/(2<i>a</i>)</span> or <span class="m"><i>t</i> = (<i>v</i> − <i>v</i><sub>0</sub>)/<i>a</i></span>.`,
    "a1-quad-formula": `Finding when an object reaches a given position means solving <span class="m"><span class="fr"><span>1</span><span>2</span></span><i>at</i><sup>2</sup> + <i>v</i><sub>0</sub><i>t</i> + (<i>x</i><sub>0</sub> − <i>x</i>) = 0</span> for <span class="m"><i>t</i></span>, choosing the physically meaningful root and reading a negative discriminant as "never gets there".`,
    "a1-sys-sub": `Chase and meeting problems set two position equations equal, and the no-<span class="m"><i>t</i></span> equation comes from substituting <span class="m"><i>t</i> = (<i>v</i> − <i>v</i><sub>0</sub>)/<i>a</i></span> into the position equation.`
  },
  beyond: [
    { field: "Electricity & Magnetism", why: "A charge in a uniform electric field has constant acceleration qE/m, so these equations give its path in accelerators and cathode-ray tubes." },
    { field: "Classical Mechanics", why: "Solving the equation of motion for a constant force is the simplest exact solution and the check for more general methods." },
    { field: "Civil Engineering", why: "Stopping sight distance and acceleration lane lengths in highway design come from v² = v₀² + 2a(x − x₀)." },
    { field: "Aerospace Engineering", why: "Takeoff and landing distances and simple launch profiles are first sized with constant-acceleration kinematics." }
  ],
  mistakes: [
    { wrong: `Using <span class="m"><i>a</i> = +7.00 m/s<sup>2</sup></span> for a car braking in the positive direction.`, fix: `The acceleration points against the motion, so with forward positive, <span class="m"><i>a</i> = −7.00 m/s<sup>2</sup></span>. A positive value would give a negative braking distance.` },
    { wrong: `Applying the equations across a change in acceleration, such as through the reaction time and the braking together.`, fix: `The equations need one constant <span class="m"><i>a</i></span>. Split the motion at every change and use the end values of one stage as the start values of the next.` },
    { wrong: `Using <span class="m"><i>v̄</i> = (<i>v</i><sub>0</sub> + <i>v</i>)/2</span> when the acceleration varies.`, fix: `That average holds only for constant acceleration. Otherwise use <span class="m"><i>v̄</i> = Δ<i>x</i>/Δ<i>t</i></span> or integrate.` },
    { wrong: `Keeping both roots of the quadratic for the time, or reporting a negative time.`, fix: `The equations describe the motion only for <span class="m"><i>t</i> ≥ 0</span> (and within the stage). Reject roots outside that range and say why.` }
  ],
  practice: [
    { q: `A car speeds up uniformly from 10.0 m/s to 25.0 m/s in 6.00 s. Find its acceleration and the distance it covers.`, a: `<span class="m"><i>a</i> = (25.0 − 10.0)/6.00 = 2.50 m/s<sup>2</sup></span>. Distance <span class="m"><i>v̄t</i> = (17.5 m/s)(6.00 s) = 105 m</span>.` },
    { q: `A jetliner starts from rest and accelerates uniformly at 2.40 m/s² until it reaches its takeoff speed of 70.0 m/s. What is the minimum runway length, and how long does the takeoff roll last?`, a: `<span class="m"><i>x</i> − <i>x</i><sub>0</sub> = <i>v</i><sup>2</sup>/(2<i>a</i>) = 4900/4.80 = 1.02 × 10<sup>3</sup> m</span> (1.02 km). Time <span class="m"><i>t</i> = 70.0/2.40 = 29.2 s</span>.` },
    { q: `A cyclist passes <span class="m"><i>x</i> = 0</span> at 4.00 m/s and accelerates at 0.500 m/s². When does she reach <span class="m"><i>x</i> = 60.0 m</span>?`, a: `<span class="m">60.0 = 4.00<i>t</i> + 0.250<i>t</i><sup>2</sup></span>, so <span class="m"><i>t</i><sup>2</sup> + 16.0<i>t</i> − 240 = 0</span> and <span class="m"><i>t</i> = (−16.0 + √1216)/2 = 9.44 s</span>. The other root, <span class="m">−25.4 s</span>, is before the timing starts and is rejected.` },
    { q: `A speeder passes a parked police car at a constant 30.0 m/s. At that instant the police car starts from rest with a constant acceleration of 3.00 m/s². When and where does it catch the speeder, and how fast is it going then?`, a: `Set the positions equal: <span class="m">1.50<i>t</i><sup>2</sup> = 30.0<i>t</i></span>, so <span class="m"><i>t</i> = 20.0 s</span> (the root <span class="m"><i>t</i> = 0</span> is the start). Position <span class="m">30.0 × 20.0 = 600 m</span>. Police speed <span class="m">3.00 × 20.0 = 60.0 m/s</span>, exactly twice the speeder's: from rest, equal distances in equal times need an average of 30.0 m/s.` }
  ],
  origin: `The mean speed theorem, that uniformly accelerated motion covers the same distance as motion at the average of the initial and final speeds, was stated by the Merton College calculators in Oxford in the 1330s and proved geometrically by Nicole Oresme around 1350. Galileo applied it to falling bodies in <i>Two New Sciences</i> (1638).`
};
