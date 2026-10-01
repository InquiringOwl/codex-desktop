window.ARITH = window.ARITH || {};

ARITH["mech-motion-integration"] = {
  title: "Finding Velocity & Position by Integration",
  short: "Area under a(t) gives Δv; area under v(t) gives Δx",
  grade: "College PHYS 1xx · University Physics I",
  hours: 6,
  voice: "plain",
  eyebrow: "Mechanics · kinematics with calculus",
  hero: `<span class="m"><span class="c3"><i>v</i>(<i>t</i>)</span> = <i>v</i><sub>0</sub> + <span class="c4">∫<sub>0</sub><sup><i>t</i></sup></span> <span class="c1"><i>a</i></span> d<i>t</i>′ &nbsp;&nbsp; <span class="c2"><i>x</i>(<i>t</i>)</span> = <i>x</i><sub>0</sub> + <span class="c4">∫<sub>0</sub><sup><i>t</i></sup></span> <span class="c3"><i>v</i></span> d<i>t</i>′</span>`,
  lede: `Differentiation takes you from position to velocity to acceleration. Integration runs the chain backward: the <span class="c4">accumulated area</span> under <span class="c1"><i>a</i>(<i>t</i>)</span> is the change in <span class="c3">velocity</span>, and the area under <span class="c3"><i>v</i>(<i>t</i>)</span> is the change in <span class="c2">position</span>.`,
  plain: `<p>Often you know the acceleration, because a sensor measures it or a force sets it, and you want the velocity and position. If the acceleration is constant, the kinematic equations do the job. When it changes with time, you add up its effect in small pieces.</p>
<p>Chop time into short strips. In each strip the velocity changes by about (acceleration) × (strip width), which is the area of a thin rectangle under the <span class="m"><i>a</i>(<i>t</i>)</span> graph. Adding the strips gives the total change in velocity. Make the strips thinner and the sum becomes exact: it is the <b>integral</b>, the area under the curve. Area below the time axis counts as negative, because a negative acceleration reduces the velocity.</p>
<p>Do it a second time, with velocity instead of acceleration, and you get the change in position. The only extra information you need is where the object started and how fast it was going: <span class="m"><i>x</i><sub>0</sub></span> and <span class="m"><i>v</i><sub>0</sub></span>. Inertial navigation systems in aircraft and phones do exactly this with measured accelerations.</p>`,
  formal: `<p>Since <span class="m"><i>a</i> = d<i>v</i>/d<i>t</i></span> and <span class="m"><i>v</i> = d<i>x</i>/d<i>t</i></span>, the Fundamental Theorem of Calculus gives, for initial conditions <span class="m"><i>v</i>(0) = <i>v</i><sub>0</sub></span> and <span class="m"><i>x</i>(0) = <i>x</i><sub>0</sub></span>,</p>
<div class="display"><i>v</i>(<i>t</i>) = <i>v</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> <i>a</i>(<i>t</i>′) d<i>t</i>′ &nbsp;&nbsp;&nbsp; <i>x</i>(<i>t</i>) = <i>x</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> <i>v</i>(<i>t</i>′) d<i>t</i>′<br><span class="dim">equivalently</span> &nbsp; <i>v</i>(<i>t</i>) = ∫ <i>a</i>(<i>t</i>) d<i>t</i> + <i>C</i><sub>1</sub>, &nbsp; <i>x</i>(<i>t</i>) = ∫ <i>v</i>(<i>t</i>) d<i>t</i> + <i>C</i><sub>2</sub></div>
<p>The definite integral is the limit of Riemann sums, <span class="m">Δ<i>v</i> = lim Σ <i>a</i>(<i>t</i><sub><i>i</i></sub>) Δ<i>t</i></span>: the signed area between the graph and the time axis. The constants of integration <span class="m"><i>C</i><sub>1</sub></span>, <span class="m"><i>C</i><sub>2</sub></span> are fixed by the initial conditions. For constant <span class="m"><i>a</i></span> these integrals give <span class="m"><i>v</i> = <i>v</i><sub>0</sub> + <i>at</i></span> and <span class="m"><i>x</i> = <i>x</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> + ½<i>at</i><sup>2</sup></span>. The distance traveled is <span class="m">∫ |<i>v</i>| d<i>t</i></span>, which differs from the displacement when <span class="m"><i>v</i></span> changes sign.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>(<i>t</i>)`, name: "Acceleration", desc: "The given rate of change of velocity. Its graph is the one whose area you accumulate first." },
    { c: "c3", sym: `<i>v</i>(<i>t</i>)`, name: "Velocity", desc: "v₀ plus the accumulated area under a(t). Its own area gives the displacement." },
    { c: "c2", sym: `<i>x</i>(<i>t</i>)`, name: "Position", desc: "x₀ plus the accumulated area under v(t)." },
    { c: "c4", sym: `∫<sub>0</sub><sup><i>t</i></sup> … d<i>t</i>′`, name: "Accumulated area", desc: "The signed area from 0 to t, built from thin strips. Area below the axis counts as negative." }
  ],
  steps: { title: "How to find v(t) and x(t) from a(t)", items: [
    `Write <span class="m c1"><i>a</i>(<i>t</i>)</span> with units and note the initial conditions <span class="m"><i>v</i><sub>0</sub></span> and <span class="m"><i>x</i><sub>0</sub></span>.`,
    `Integrate: <span class="m c3"><i>v</i>(<i>t</i>) = ∫ <i>a</i> d<i>t</i> + <i>C</i><sub>1</sub></span>. Set <span class="m"><i>t</i> = 0</span> to find <span class="m"><i>C</i><sub>1</sub></span> from <span class="m"><i>v</i><sub>0</sub></span>.`,
    `Integrate again: <span class="m c2"><i>x</i>(<i>t</i>) = ∫ <i>v</i> d<i>t</i> + <i>C</i><sub>2</sub></span>, with <span class="m"><i>C</i><sub>2</sub></span> from <span class="m"><i>x</i><sub>0</sub></span>.`,
    `For a graph instead of a formula, add up <span class="c4">signed areas</span> of rectangles, triangles and trapezoids.`,
    `Evaluate at the time you need. For a stopping time, solve <span class="m"><i>v</i>(<i>t</i>) = 0</span>.`,
    `Check by differentiating your answer back to <span class="m"><i>a</i>(<i>t</i>)</span> and by setting <span class="m"><i>t</i> = 0</span> to recover the initial values.`
  ] },
  example: {
    prompt: `In a launch test an electric car starts from rest at <span class="m"><i>x</i> = 0</span>. Its acceleration fades as the motor reaches its power limit: <span class="m"><i>a</i>(<i>t</i>) = 6.00 − 1.50<i>t</i></span> (m/s², <i>t</i> in s) for <span class="m">0 ≤ <i>t</i> ≤ 4.00 s</span>. Find its velocity and position at <span class="m"><i>t</i> = 4.00 s</span>.`,
    lines: [
      { math: `<span class="m"><span class="c3"><i>v</i>(<i>t</i>)</span> = ∫ (6.00 − 1.50<i>t</i>) d<i>t</i> = 6.00<i>t</i> − 0.750<i>t</i><sup>2</sup> + <i>C</i><sub>1</sub></span>`, note: "Antiderivative of the acceleration." },
      { math: `<span class="m"><i>v</i>(0) = 0 &nbsp;⇒&nbsp; <i>C</i><sub>1</sub> = 0, &nbsp; <span class="c3"><i>v</i>(4.00)</span> = 24.0 − 12.0 = <span class="c3">12.0 m/s</span></span>`, note: "The car starts from rest." },
      { math: `<span class="m"><span class="c2"><i>x</i>(<i>t</i>)</span> = ∫ (6.00<i>t</i> − 0.750<i>t</i><sup>2</sup>) d<i>t</i> = 3.00<i>t</i><sup>2</sup> − 0.250<i>t</i><sup>3</sup> + <i>C</i><sub>2</sub></span>`, note: "Integrate the velocity." },
      { math: `<span class="m"><i>x</i>(0) = 0 &nbsp;⇒&nbsp; <i>C</i><sub>2</sub> = 0, &nbsp; <span class="c2"><i>x</i>(4.00)</span> = 48.0 − 16.0 = <span class="c2">32.0 m</span></span>`, note: "The car starts at the origin." },
      { math: `<span class="m"><span class="c4">∫<sub>0</sub><sup>4.00</sup></span> <i>a</i> d<i>t</i> = ½(4.00 s)(6.00 m/s<sup>2</sup>) = 12.0 m/s ✓</span>`, note: "Check: the a(t) graph is a triangle, and its area is the velocity gained." },
      { math: `<span class="m">12.0 m/s &lt; (6.00 m/s<sup>2</sup>)(4.00 s) = 24.0 m/s</span>`, note: "Sanity check: less than if the initial acceleration had lasted, as it should be." }
    ],
    answer: `At <span class="m"><i>t</i> = 4.00 s</span> the car moves at <span class="m c3">12.0 m/s</span> and has traveled <span class="m c2">32.0 m</span>; its acceleration has just fallen to zero.`
  },
  why: `<p>Nature usually hands us accelerations, not positions. Newton's second law gives acceleration from force, and accelerometers measure it directly. Integration is how you get from there to where an object will be: rocket trajectories, a phone's step counter, a car's airbag logic and a drone's flight controller all accumulate acceleration into velocity and position.</p>
<p>This topic also shows why initial conditions matter. The same acceleration history gives different motions for different starting velocities and positions, and every differential equation in physics needs its initial or boundary conditions for the same reason.</p>`,
  careers: [
    { role: "Inertial navigation engineer", use: "Integrates accelerometer and gyroscope readings twice to track an aircraft's or submarine's position without GPS, and corrects the drift that integration builds up." },
    { role: "Rocket trajectory analyst", use: "Integrates the time-varying thrust acceleration of a launch vehicle, whose mass falls as fuel burns, to predict velocity and altitude." },
    { role: "Earthquake engineer", use: "Integrates recorded ground acceleration to get ground velocity and displacement histories for building design." },
    { role: "Wearable device engineer", use: "Turns accelerometer data into step length, speed and distance estimates in fitness trackers." },
    { role: "Automotive safety engineer", use: "Integrates crash-sensor acceleration in real time to decide within milliseconds whether to fire an airbag." },
    { role: "Game physics programmer", use: "Updates velocities and positions of simulated objects each frame by numerically integrating their accelerations." }
  ],
  life: [
    "Seeing how a phone counts steps and distance from its motion sensor",
    "Understanding why a car that stops accelerating keeps moving at its current speed",
    "Reading the area under a speed–time graph as distance traveled",
    "Understanding why GPS-free navigation drifts over time",
    "Estimating how far an elevator moves from how its acceleration changes"
  ],
  fields: [
    { name: "Physics", use: "Equations of motion are solved by integrating accelerations determined by forces." },
    { name: "Aerospace engineering", use: "Guidance systems and trajectory simulations integrate measured and computed accelerations." },
    { name: "Geophysics", use: "Seismic records of acceleration are integrated to recover ground velocity and displacement." },
    { name: "Computer science", use: "Physics engines and robotics simulators integrate motion numerically at every time step." }
  ],
  prereqWhy: {
    "mech-acceleration": "You need a = dv/dt and v = dx/dt, and the graphs linking x, v and a, before running the chain backward."
  },
  unlocksWhy: {
    "mech-drag": "With drag the acceleration depends on velocity, and integrating it gives the approach to terminal speed.",
    "mech-impulse": "Impulse is the integral of force over time, the same area-under-a-curve idea applied to F(t) to get the change in momentum."
  },
  mathWhy: {
    "calculus-1:Antiderivatives and the definite integral": `Finding <span class="m"><i>v</i>(<i>t</i>)</span> from <span class="m"><i>a</i>(<i>t</i>) = 6.00 − 1.50<i>t</i></span> is an antiderivative plus a constant, and the change in velocity is a definite integral read as signed area. Needed outright: graphical areas can be done first, but formulas for <span class="m"><i>a</i>(<i>t</i>)</span> need integration.`,
    "calculus-2:Fundamental Theorem of Calculus": `The theorem is why <span class="m"><i>v</i>(<i>t</i>) − <i>v</i><sub>0</sub> = ∫<sub>0</sub><sup><i>t</i></sup> <i>a</i> d<i>t</i>′</span>: integrating a derivative recovers the change in the original function. Co-requisite: the physics can be used with the area interpretation while the theorem is studied in calculus.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Equations of motion are integrated, analytically or numerically, from given forces and initial conditions." },
    { field: "Computational Physics", why: "Euler, Verlet and Runge–Kutta methods are refined versions of the strip sums used here." },
    { field: "Electricity & Magnetism", why: "Charge from current, q = ∫ I dt, and potential from field use the same accumulation idea." },
    { field: "Aerospace Engineering", why: "Inertial navigation and trajectory prediction integrate acceleration twice, with careful control of accumulated error." }
  ],
  mistakes: [
    { wrong: `Dropping the constant of integration: "<span class="m"><i>v</i>(<i>t</i>) = −0.250<i>t</i><sup>2</sup></span>" for a boat that started at 4.00 m/s.`, fix: `Add <span class="m"><i>C</i></span> and fix it with the initial condition: <span class="m"><i>v</i>(<i>t</i>) = 4.00 − 0.250<i>t</i><sup>2</sup></span>.` },
    { wrong: `Using <span class="m"><i>v</i> = <i>v</i><sub>0</sub> + <i>at</i></span> with a changing acceleration, for example with <span class="m"><i>a</i></span> taken at the final time.`, fix: `The constant-acceleration equations need constant <span class="m"><i>a</i></span>. For <span class="m"><i>a</i>(<i>t</i>)</span>, integrate.` },
    { wrong: `Counting area below the time axis as positive.`, fix: `A negative acceleration lowers the velocity, so area below the axis subtracts. Signed area gives the change; add absolute areas only when you want total distance from <span class="m"><i>v</i>(<i>t</i>)</span>.` },
    { wrong: `Integrating with respect to the wrong variable, such as treating <span class="m"><i>a</i>(<i>t</i>)</span> as <span class="m"><i>a</i>(<i>x</i>)</span>.`, fix: `<span class="m">∫ <i>a</i> d<i>t</i></span> gives velocity. If the acceleration is given as a function of position or velocity, use the chain rule, <span class="m"><i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i></span>, or separate variables.` }
  ],
  practice: [
    { q: `A cart has constant acceleration <span class="m">2.00 m/s<sup>2</sup></span>, with <span class="m"><i>v</i><sub>0</sub> = 3.00 m/s</span> and <span class="m"><i>x</i><sub>0</sub> = 0</span>. Integrate to find <span class="m"><i>v</i>(<i>t</i>)</span> and <span class="m"><i>x</i>(<i>t</i>)</span>, then evaluate at <span class="m">4.00 s</span>.`, a: `<span class="m"><i>v</i> = 3.00 + 2.00<i>t</i></span>, <span class="m"><i>x</i> = 3.00<i>t</i> + 1.00<i>t</i><sup>2</sup></span>: the constant-acceleration equations. At 4.00 s: <span class="m"><i>v</i> = 11.0 m/s</span>, <span class="m"><i>x</i> = 12.0 + 16.0 = 28.0 m</span>.` },
    { q: `An object starts from rest. Its acceleration is 4.0 m/s² for 0–3.0 s, zero for 3.0–5.0 s, and −2.0 m/s² for 5.0–7.0 s. Find its velocity at 7.0 s using areas.`, a: `Signed areas: <span class="m">(4.0)(3.0) + 0 + (−2.0)(2.0) = 12 − 4.0 = 8.0</span>, so <span class="m"><i>v</i>(7.0) = 8.0 m/s</span>.` },
    { q: `A motorboat cuts its engine at 4.00 m/s, and water resistance gives <span class="m"><i>a</i>(<i>t</i>) = −0.500<i>t</i></span> (m/s², <i>t</i> in s). When does it stop, and how far does it glide?`, a: `<span class="m"><i>v</i> = 4.00 − 0.250<i>t</i><sup>2</sup> = 0</span> at <span class="m"><i>t</i> = 4.00 s</span>. <span class="m"><i>x</i> = 4.00<i>t</i> − <i>t</i><sup>3</sup>/12.0</span>, so <span class="m"><i>x</i>(4.00) = 16.0 − 5.33 = 10.7 m</span>.` },
    { q: `A particle starts from rest at <span class="m"><i>x</i> = 0</span> with <span class="m"><i>a</i>(<i>t</i>) = 3.0 cos(2.0<i>t</i>)</span> (m/s², <i>t</i> in s, angle in radians). Find <span class="m"><i>v</i>(<i>t</i>)</span>, <span class="m"><i>x</i>(<i>t</i>)</span>, and its greatest distance from the origin.`, a: `<span class="m"><i>v</i> = 1.5 sin(2.0<i>t</i>)</span> m/s (<span class="m"><i>C</i><sub>1</sub> = 0</span>). <span class="m"><i>x</i> = 0.75(1 − cos 2.0<i>t</i>)</span> m (<span class="m"><i>C</i><sub>2</sub> = 0.75</span> so that <span class="m"><i>x</i>(0) = 0</span>). The particle oscillates between 0 and <span class="m">1.5 m</span>, first reaching 1.5 m at <span class="m"><i>t</i> = π/2.0 ≈ 1.6 s</span>; it never goes to negative <span class="m"><i>x</i></span>.` }
  ],
  origin: `Newton and Leibniz independently recognised in the 1660s and 1670s that finding areas undoes finding rates of change, the Fundamental Theorem of Calculus. Leibniz introduced the integral sign ∫, an elongated S for "summa", in his notes in 1675.`
};
