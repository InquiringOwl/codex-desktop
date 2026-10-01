window.ARITH = window.ARITH || {};

ARITH["mech-velocity"] = {
  title: "Average & Instantaneous Velocity",
  short: "Rate of change of position: slope of x(t)",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in one dimension",
  hero: `<span class="m"><span class="c3"><i>v̄</i> = <span class="fr"><span>Δ<i>x</i></span><span><span class="c4">Δ<i>t</i></span></span></span></span> &nbsp;&nbsp; <span class="c1"><i>v</i>(<i>t</i>) = <span class="fr"><span>d<i>x</i></span><span>d<i>t</i></span></span></span></span>`,
  lede: `<span class="c3">Average velocity</span> is displacement divided by elapsed time: the slope of a secant line on the position graph. <span class="c1">Instantaneous velocity</span> is the limit as the time interval shrinks to zero: the slope of the tangent line, the derivative of <span class="m c2"><i>x</i>(<i>t</i>)</span>.`,
  plain: `<p>Velocity says how fast position is changing and in which direction. Over a stretch of time the simplest measure is the <b>average velocity</b>: how far you ended up (the displacement) divided by how long it took. Drive 120 km east in 2.0 h and your average velocity is 60 km/h east, even if you stopped for coffee on the way.</p>
<p>A speedometer shows something different: how fast you are going right now. That is the <b>instantaneous velocity</b>. You can get it from average velocities by shrinking the time interval. Measure the displacement in the next second, then the next tenth of a second, then the next hundredth. The averages settle on one number, and that limit is the velocity at that instant.</p>
<p>On a graph of position against time, an average velocity is the slope of the straight line joining two points of the curve. As the two points slide together, that line turns into the tangent line, and its slope is the instantaneous velocity. <b>Speed</b> is the size of the velocity, with no direction; average speed uses total distance, not displacement.</p>`,
  formal: `<p>For a particle with position <span class="m"><i>x</i>(<i>t</i>)</span>, the <b>average velocity</b> over <span class="m">[<i>t</i><sub>0</sub>, <i>t</i><sub>f</sub>]</span> and the <b>instantaneous velocity</b> at time <span class="m"><i>t</i></span> are</p>
<div class="display"><i>v̄</i> = <span class="fr"><span>Δ<i>x</i></span><span>Δ<i>t</i></span></span> = <span class="fr"><span><i>x</i><sub>f</sub> − <i>x</i><sub>0</sub></span><span><i>t</i><sub>f</sub> − <i>t</i><sub>0</sub></span></span> &nbsp;&nbsp;&nbsp; <i>v</i>(<i>t</i>) = <span class="dim">lim</span><sub>Δ<i>t</i>→0</sub> <span class="fr"><span><i>x</i>(<i>t</i> + Δ<i>t</i>) − <i>x</i>(<i>t</i>)</span><span>Δ<i>t</i></span></span> = <span class="fr"><span>d<i>x</i></span><span>d<i>t</i></span></span> &nbsp; <span class="dim">(SI unit: m/s)</span></div>
<p>Geometrically, <span class="m"><i>v̄</i></span> is the slope of the secant through <span class="m">(<i>t</i><sub>0</sub>, <i>x</i><sub>0</sub>)</span> and <span class="m">(<i>t</i><sub>f</sub>, <i>x</i><sub>f</sub>)</span>, and <span class="m"><i>v</i>(<i>t</i>)</span> is the slope of the tangent at <span class="m"><i>t</i></span>. The sign of <span class="m"><i>v</i></span> gives the direction of motion; <span class="m"><i>v</i> = 0</span> where the tangent is horizontal, which is where a reversing object turns around. <b>Instantaneous speed</b> is <span class="m">|<i>v</i>(<i>t</i>)|</span>. <b>Average speed</b> is total distance divided by elapsed time, which is at least <span class="m">|<i>v̄</i>|</span>. For motion at constant velocity <span class="m"><i>x</i>(<i>t</i>)</span> is linear and <span class="m"><i>v</i> = <i>v̄</i></span> on every interval.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>(<i>t</i>)`, name: "Position curve", desc: "Position plotted against time. Its steepness at each point is the velocity there." },
    { c: "c3", sym: `<i>v̄</i>`, name: "Average velocity", desc: "Displacement over elapsed time, Δx/Δt: the slope of the secant joining two points of the curve." },
    { c: "c1", sym: `<i>v</i>(<i>t</i>)`, name: "Instantaneous velocity", desc: "The limit of the average velocity as Δt → 0: the slope of the tangent line, dx/dt." },
    { c: "c4", sym: `Δ<i>t</i>`, name: "Time interval", desc: "The elapsed time between the two points. Shrinking it turns the secant into the tangent." }
  ],
  steps: { title: "How to find average and instantaneous velocity", items: [
    `Fix an axis and positive direction, and get the positions: from data, a graph, or a function <span class="m c2"><i>x</i>(<i>t</i>)</span>.`,
    `<span class="c3">Average velocity</span>: compute the displacement <span class="m"><i>x</i><sub>f</sub> − <i>x</i><sub>0</sub></span> and divide by <span class="m c4">Δ<i>t</i></span>. Keep the sign and units.`,
    `<span class="c1">Instantaneous velocity</span> from a function: differentiate, <span class="m"><i>v</i>(<i>t</i>) = d<i>x</i>/d<i>t</i></span>, then substitute the time.`,
    `From a graph: draw the tangent at the time of interest and find its slope, rise over run in m/s.`,
    `For speed, take the absolute value of <span class="m"><i>v</i></span>. For average speed, divide total distance (not displacement) by elapsed time.`,
    `Check: the sign should match the direction of motion, and average velocities over shorter and shorter intervals should approach your <span class="m"><i>v</i>(<i>t</i>)</span>.`
  ] },
  example: {
    prompt: `A car pulls away from a traffic light along a straight road. For the first 10 s its position is <span class="m"><i>x</i>(<i>t</i>) = 1.80<i>t</i><sup>2</sup></span> (m, <i>t</i> in s). Find its average velocity between <span class="m"><i>t</i> = 2.00 s</span> and <span class="m">4.00 s</span>, and its instantaneous velocity at <span class="m"><i>t</i> = 4.00 s</span>.`,
    lines: [
      { math: `<span class="m"><i>x</i>(2.00) = 1.80(4.00) = 7.20 m, &nbsp; <i>x</i>(4.00) = 1.80(16.0) = 28.8 m</span>`, note: "Positions at the two times." },
      { math: `<span class="m"><span class="c3"><i>v̄</i></span> = <span class="fr"><span>28.8 m − 7.20 m</span><span>4.00 s − 2.00 s</span></span> = <span class="fr"><span>21.6 m</span><span>2.00 s</span></span> = <span class="c3">10.8 m/s</span></span>`, note: "Displacement over elapsed time: the slope of the secant." },
      { math: `<span class="m"><i>v</i>(<i>t</i>) = <span class="fr"><span>d</span><span>d<i>t</i></span></span>(1.80<i>t</i><sup>2</sup>) = 3.60<i>t</i> m/s</span>`, note: "Differentiate the position function (power rule)." },
      { math: `<span class="m"><span class="c1"><i>v</i>(4.00)</span> = 3.60(4.00) = <span class="c1">14.4 m/s</span></span>`, note: "The slope of the tangent at t = 4.00 s." },
      { math: `<span class="m"><span class="fr"><span><i>x</i>(4.00) − <i>x</i>(3.90)</span><span>0.100 s</span></span> = <span class="fr"><span>28.8 − 27.378</span><span>0.100</span></span> ≈ 14.2 m/s</span>`, note: "Shrinking the interval: the average over the last 0.1 s is already close to 14.4 m/s." },
      { math: `<span class="m">14.4 m/s ≈ 51.8 km/h</span>`, note: "Sanity check: a reasonable speed 4 s after a green light, and larger than the earlier average because the car is speeding up." }
    ],
    answer: `The average velocity from 2.00 s to 4.00 s is <span class="m c3">10.8 m/s</span>; the instantaneous velocity at 4.00 s is <span class="m c1">14.4 m/s</span>, both in the positive direction.`
  },
  why: `<p>Velocity is the bridge between where something is and how it will move next. Newton's laws, momentum and kinetic energy are all written in terms of instantaneous velocity, and the formula <span class="m"><i>v</i> = d<i>x</i>/d<i>t</i></span> is often the first derivative a physics student meets with a physical meaning.</p>
<p>The difference between average and instantaneous values matters in practice. Average-speed cameras catch drivers over a stretch of road, while radar measures the speed at one moment. GPS receivers, fitness trackers and flight recorders compute velocity from positions sampled a fraction of a second apart, which is the limit definition done with small but finite Δt.</p>`,
  careers: [
    { role: "Traffic engineer", use: "Uses average speeds between detector loops to set signal timing and detect congestion on a highway." },
    { role: "Police accident reconstructionist", use: "Estimates a vehicle's instantaneous speed at impact from skid marks and dashcam frames taken a known time apart." },
    { role: "Air traffic controller", use: "Reads each aircraft's ground speed and track, derived from successive radar positions, to keep safe separation." },
    { role: "Biomechanist", use: "Computes joint and limb velocities from high-speed motion-capture positions by finite differences." },
    { role: "GNSS software engineer", use: "Estimates a receiver's velocity from the change in computed position between fixes and from Doppler shift." },
    { role: "Sports analyst", use: "Splits a 100 m race into 10 m segments and compares each sprinter's average velocity per segment." }
  ],
  life: [
    "Reading a speedometer (instantaneous speed) versus working out a trip's average speed",
    "Understanding why average-speed cameras catch drivers who slow down only at the camera",
    "Estimating arrival time from distance remaining and average speed",
    "Reading a running app's current pace against its overall average pace",
    "Seeing that a round trip has zero average velocity but not zero average speed"
  ],
  fields: [
    { name: "Physics", use: "Momentum, kinetic energy and the equations of motion are all expressed through instantaneous velocity." },
    { name: "Mechanical engineering", use: "Machine design uses velocity analysis of linkages and cams to size motors and avoid impacts." },
    { name: "Transportation engineering", use: "Traffic flow models relate vehicle speeds, densities and flow rates on roads." },
    { name: "Data science", use: "Numerical differentiation of sampled position data is a standard signal-processing task." }
  ],
  prereqWhy: {
    "mech-displacement": "Average velocity is displacement divided by elapsed time, so its sign and size come straight from Δx."
  },
  unlocksWhy: {
    "mech-acceleration": "Acceleration is the rate of change of velocity, defined from v(t) exactly as velocity was defined from x(t)."
  },
  mathWhy: {
    "pa-slope": `Average velocity is rise over run on a position–time graph, <span class="m">Δ<i>x</i>/Δ<i>t</i></span>, with units of m/s. A positive slope means motion in the positive direction.`,
    "a1-slope-forms": `The secant through two points of <span class="m"><i>x</i>(<i>t</i>)</span> and the tangent at one point are lines written in point-slope form, <span class="m"><i>x</i> − <i>x</i><sub>1</sub> = <i>v</i>(<i>t</i> − <i>t</i><sub>1</sub>)</span>, and constant-velocity motion is <span class="m"><i>x</i> = <i>x</i><sub>0</sub> + <i>vt</i></span>.`,
    "calculus-1:Definition of the derivative": `Instantaneous velocity is defined as <span class="m">lim<sub>Δ<i>t</i>→0</sub> Δ<i>x</i>/Δ<i>t</i> = d<i>x</i>/d<i>t</i></span>. Co-requisite: the limit idea can be learned here with shrinking intervals, and a calculus course makes it rigorous and supplies the rules for differentiating.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Lagrangian and Hamiltonian mechanics treat position and velocity (or momentum) as the basic variables of a system's state." },
    { field: "Computational Physics", why: "Numerical integrators update positions from velocities in small time steps, the limit definition run backward." },
    { field: "Waves & Fluids", why: "Wave speed, particle velocity in a medium and flow velocity fields all extend the idea of dx/dt." },
    { field: "Dynamics", why: "Engineering dynamics computes velocities of points on moving machines and vehicles as derivatives of their positions." }
  ],
  mistakes: [
    { wrong: `Averaging the speeds: "30 km/h out and 60 km/h back gives an average of 45 km/h".`, fix: `Average speed is total distance over total time. For equal distances the slower leg takes longer, so the answer is 40 km/h, and the average velocity of the round trip is zero.` },
    { wrong: `Using distance for average velocity: <span class="m"><i>v̄</i> = 16.0 km / 40.0 min</span> for a trip that doubled back.`, fix: `Average velocity uses displacement, <span class="m">Δ<i>x</i>/Δ<i>t</i></span>. Distance over time is average speed.` },
    { wrong: `Reading the velocity from the height of an <span class="m"><i>x</i>(<i>t</i>)</span> graph: "the object is at 8 m, so its velocity is 8 m/s".`, fix: `Velocity is the slope of the position graph, not its value. At the highest point of <span class="m"><i>x</i>(<i>t</i>)</span> the velocity is zero.` },
    { wrong: `Plugging the time into <span class="m"><i>x</i>(<i>t</i>)</span> and dividing by <span class="m"><i>t</i></span> to get the instantaneous velocity.`, fix: `<span class="m"><i>x</i>(<i>t</i>)/<i>t</i></span> is an average from time zero (and only if <span class="m"><i>x</i>(0) = 0</span>). The instantaneous velocity is the derivative <span class="m">d<i>x</i>/d<i>t</i></span>.` }
  ],
  practice: [
    { q: `A cyclist rides 12.0 km east in 30.0 min, then 4.0 km west in 10.0 min along the same straight road. Find her average velocity and average speed for the whole ride.`, a: `Displacement <span class="m">12.0 − 4.0 = 8.0 km</span> east in <span class="m">40.0 min = 0.667 h</span>: <span class="m"><i>v̄</i> = 12.0 km/h</span> east (3.33 m/s). Distance <span class="m">16.0 km</span>: average speed <span class="m">24.0 km/h</span> (6.67 m/s).` },
    { q: `A cart's position is <span class="m"><i>x</i>(<i>t</i>) = 2.0 + 6.0<i>t</i> − 1.5<i>t</i><sup>2</sup></span> (m, <i>t</i> in s). When is it momentarily at rest, and where is it then?`, a: `<span class="m"><i>v</i> = 6.0 − 3.0<i>t</i> = 0</span> at <span class="m"><i>t</i> = 2.0 s</span>, where <span class="m"><i>x</i> = 2.0 + 12 − 6.0 = 8.0 m</span>. This is the farthest point in the positive direction before it turns back.` },
    { q: `A particle moves along the <span class="m"><i>x</i></span>-axis with <span class="m"><i>x</i>(<i>t</i>) = 4.0 + 2.0<i>t</i> − <i>t</i><sup>3</sup></span> (m, <i>t</i> in s). Find its velocity and speed at <span class="m"><i>t</i> = 2.0 s</span>.`, a: `<span class="m"><i>v</i>(<i>t</i>) = 2.0 − 3<i>t</i><sup>2</sup></span>, so <span class="m"><i>v</i>(2.0) = 2.0 − 12 = −10 m/s</span>: moving in the negative direction at a speed of <span class="m">10 m/s</span>.` },
    { q: `For <span class="m"><i>x</i>(<i>t</i>) = 5.0<i>t</i><sup>2</sup></span> (m), write the average velocity over <span class="m">[1.0 s, 1.0 s + Δ<i>t</i>]</span> as a function of <span class="m">Δ<i>t</i></span>, and take the limit as <span class="m">Δ<i>t</i> → 0</span>.`, a: `<span class="m"><i>v̄</i> = [5.0(1.0 + Δ<i>t</i>)<sup>2</sup> − 5.0]/Δ<i>t</i> = (10Δ<i>t</i> + 5.0Δ<i>t</i><sup>2</sup>)/Δ<i>t</i> = 10 + 5.0Δ<i>t</i></span> m/s. As <span class="m">Δ<i>t</i> → 0</span>, <span class="m"><i>v̄</i> → 10 m/s</span>, which equals <span class="m">d<i>x</i>/d<i>t</i> = 10<i>t</i></span> at <span class="m"><i>t</i> = 1.0 s</span>.` }
  ],
  origin: `Galileo defined uniform motion and studied speeds that change with time in <i>Two New Sciences</i> (1638). Newton developed instantaneous rates of change as "fluxions" in 1665–1666, and Leibniz published the differential calculus, with the differentials d<i>x</i> and d<i>y</i>, in 1684.`
};
