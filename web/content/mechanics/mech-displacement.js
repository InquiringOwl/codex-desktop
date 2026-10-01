window.ARITH = window.ARITH || {};

ARITH["mech-displacement"] = {
  title: "Position, Displacement & Distance",
  short: "Where you are, how far you ended up, how far you went",
  grade: "High school physics · college PHYS 1xx",
  hours: 3,
  voice: "plain",
  eyebrow: "Mechanics · kinematics in one dimension",
  hero: `<span class="m"><span class="c1">Δ<i>x</i></span> = <span class="c2"><i>x</i><sub>f</sub></span> − <span class="c2"><i>x</i><sub>0</sub></span></span>`,
  lede: `<span class="c2">Position</span> says where an object is relative to a chosen origin. <span class="c1">Displacement</span> is the change in position, with a sign for direction. <span class="c3">Distance traveled</span> is the total length of the path, and it is never negative.`,
  plain: `<p>To describe motion you first need a way to say where something is. Pick a reference point, the <b>origin</b>, lay a number line through it, and choose which way counts as positive. The object's <b>position</b> <span class="m"><i>x</i></span> is its coordinate on that line: <span class="m"><i>x</i> = −3 m</span> means 3 metres on the negative side of the origin.</p>
<p><b>Displacement</b> is how far the object ended up from where it started, and in which direction: final position minus initial position. Walk 5 m forward and 2 m back and your displacement is <span class="m">+3 m</span>. Only the start and the finish matter; the route in between does not.</p>
<p><b>Distance traveled</b> counts every metre of the route, whichever way you were going. The same walk covers <span class="m">5 + 2 = 7 m</span>. So distance can be much larger than the size of the displacement: a runner who finishes one lap of a 400 m track has run 400 m and has a displacement of zero.</p>`,
  formal: `<p>In one dimension, <b>position</b> <span class="m"><i>x</i></span> is the coordinate of the object along a chosen axis, measured from an origin in a chosen reference frame. As the object moves, position is a function of time, <span class="m"><i>x</i>(<i>t</i>)</span>. The <b>displacement</b> over an interval is the change in position:</p>
<div class="display">Δ<i>x</i> = <i>x</i><sub>f</sub> − <i>x</i><sub>0</sub> &nbsp;&nbsp; <span class="dim">(SI unit: m)</span><br>Δ<i>x</i><sub>total</sub> = Σ Δ<i>x</i><sub><i>i</i></sub> &nbsp;&nbsp;&nbsp; <i>x</i><sub>total</sub> = Σ |Δ<i>x</i><sub><i>i</i></sub>| &nbsp; <span class="dim">(legs with no reversal inside)</span><br>|Δ<i>x</i>| ≤ <i>x</i><sub>total</sub></div>
<p>Displacement is a vector; in one dimension its direction is carried by its sign. Displacements add: the total displacement is the sum of the displacements of the legs. <b>Distance traveled</b> <span class="m"><i>x</i><sub>total</sub></span> is a scalar, the total path length, found by summing the magnitudes of the legs, splitting any leg where the motion reverses. In two or three dimensions the same definition reads <span class="m">Δ<b>r</b> = <b>r</b><sub>f</sub> − <b>r</b><sub>0</sub></span>. Moving the origin changes every position but leaves every displacement unchanged.</p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "Position", desc: "The coordinate of the object on the axis, measured from the origin. Its sign says which side of the origin it is on." },
    { c: "c1", sym: `Δ<i>x</i>`, name: "Displacement", desc: "Final position minus initial position. Positive means the object ended up on the positive side of where it started." },
    { c: "c3", sym: `<i>x</i><sub>total</sub>`, name: "Distance traveled", desc: "The total length of the path. Every leg adds its size, whatever its direction, so it never decreases." }
  ],
  steps: { title: "How to find displacement and distance", items: [
    `Choose an origin and a positive direction, and write them down. Every sign in the problem depends on this choice.`,
    `Write the <span class="c2">initial position</span> <span class="m"><i>x</i><sub>0</sub></span> and the <span class="c2">final position</span> <span class="m"><i>x</i><sub>f</sub></span> with signs and units.`,
    `<span class="c1">Displacement</span>: compute <span class="m">Δ<i>x</i> = <i>x</i><sub>f</sub> − <i>x</i><sub>0</sub></span>. State the direction from the sign.`,
    `<span class="c3">Distance</span>: split the trip wherever the motion reverses, find each leg's length as an absolute value, and add.`,
    `Check: the distance is at least <span class="m">|Δ<i>x</i>|</span>, and equals it only if the object never turned around.`
  ] },
  example: {
    prompt: `A commuter train runs on a straight east–west track. Take the station as the origin and east as positive. The train starts 2.0 km east of the station, travels east to a stop 7.5 km east of the station, then reverses and runs west to a yard 1.5 km west of the station. Find its displacement and the distance it traveled.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>x</i><sub>0</sub> = +2.0 km</span>, &nbsp; <i>x</i><sub>1</sub> = +7.5 km, &nbsp; <span class="c2"><i>x</i><sub>f</sub> = −1.5 km</span></span>`, note: "Positions with signs: east of the station is positive, west is negative." },
      { math: `<span class="m"><span class="c1">Δ<i>x</i></span> = <i>x</i><sub>f</sub> − <i>x</i><sub>0</sub> = −1.5 km − 2.0 km = <span class="c1">−3.5 km</span></span>`, note: "Displacement depends only on the start and the finish." },
      { math: `<span class="m">Δ<i>x</i><sub>1</sub> = 7.5 − 2.0 = +5.5 km, &nbsp; Δ<i>x</i><sub>2</sub> = −1.5 − 7.5 = −9.0 km</span>`, note: "Split the trip at the reversal into two legs." },
      { math: `<span class="m">Δ<i>x</i><sub>1</sub> + Δ<i>x</i><sub>2</sub> = +5.5 − 9.0 = −3.5 km ✓</span>`, note: "The leg displacements add up to the total displacement." },
      { math: `<span class="m"><span class="c3"><i>x</i><sub>total</sub></span> = |+5.5| + |−9.0| = <span class="c3">14.5 km</span></span>`, note: "Distance adds the size of every leg." },
      { math: `<span class="m">14.5 km ≥ |−3.5 km| ✓</span>`, note: "Sanity check: distance is larger because the train turned around." }
    ],
    answer: `The train's displacement is <span class="m c1">3.5 km west</span> (<span class="m">Δ<i>x</i> = −3.5 km</span>), and it traveled a distance of <span class="m c3">14.5 km</span>.`
  },
  why: `<p>Every question in mechanics about where something goes starts here. Velocity is displacement per unit time, acceleration is change in velocity per unit time, and work is force times displacement. Getting the sign of a displacement wrong turns a braking car into a speeding one and a lifted box into a lowered one.</p>
<p>The split between displacement and distance matters in practice. A delivery van's fuel use and wear depend on distance traveled, while how far it ended from the depot is its displacement. Navigation, GPS tracking and robot control all keep both numbers.</p>`,
  careers: [
    { role: "Railway dispatcher", use: "Tracks each train's position along a line as a signed distance from a reference milepost to keep trains safely separated." },
    { role: "Surveyor", use: "Records positions relative to a benchmark and computes displacements between stations when laying out roads and property lines." },
    { role: "Robotics engineer", use: "Programs a robot arm's joint positions and uses encoder readings to compute displacement and total travel for wear limits." },
    { role: "Fleet manager", use: "Uses odometer distance for maintenance schedules and GPS displacement from the depot to plan routes." },
    { role: "Geophysicist", use: "Measures the displacement of GPS stations across a fault to find how far the ground slipped in an earthquake." },
    { role: "Sports scientist", use: "Separates a player's total distance covered in a match from net displacement to measure workload." }
  ],
  life: [
    "Reading a car's odometer (distance) versus how far you are from home (displacement)",
    "Walking laps on a track: lots of distance, zero displacement after each lap",
    "Giving directions such as 3 blocks north of the station",
    "Tracking floors in an elevator ride that goes up and then down",
    "Checking a fitness tracker's step distance after a walk that ended at your front door"
  ],
  fields: [
    { name: "Physics", use: "Kinematics, work, momentum and every equation of motion are written in terms of position and displacement." },
    { name: "Civil engineering", use: "Structural monitoring measures the displacement of bridges and buildings under load from a fixed reference." },
    { name: "Geodesy and navigation", use: "Positions are coordinates in a reference frame, and displacements between them give headings and ranges." },
    { name: "Robotics", use: "Controllers compare the commanded and measured positions of each axis and correct the displacement error." }
  ],
  prereqWhy: {
    "mech-vectors": "Displacement is the first physical vector: it has a size and a direction, and successive displacements add tip to tail."
  },
  unlocksWhy: {
    "mech-velocity": "Velocity is displacement divided by the time taken, so its sign and value come directly from Δx."
  },
  mathWhy: {
    "integers": `Positions on either side of the origin are signed numbers, and <span class="m">Δ<i>x</i> = <i>x</i><sub>f</sub> − <i>x</i><sub>0</sub></span> often subtracts a negative, as in <span class="m">−1.5 − 2.0 = −3.5</span>. Absolute value gives the length of each leg for the distance.`,
    "pa-coordinate": `Position is a coordinate on an axis with a chosen origin and positive direction, and a position–time graph plots <span class="m">(<i>t</i>, <i>x</i>)</span> pairs on a coordinate plane.`,
    "a1-functions": `Motion is described by a position function <span class="m"><i>x</i>(<i>t</i>)</span>. Evaluating it at two times, such as <span class="m"><i>x</i>(5) − <i>x</i>(0)</span>, gives the displacement over that interval.`
  },
  beyond: [
    { field: "Classical Mechanics", why: "Generalised coordinates and virtual displacements are built on the idea of position in a chosen reference frame." },
    { field: "Electricity & Magnetism", why: "The work done by an electric field and the potential difference are integrals over displacement, with sign fixed by direction." },
    { field: "Waves & Fluids", why: "A wave is described by the displacement of each particle of the medium from its equilibrium position." },
    { field: "Dynamics", why: "Engineering dynamics tracks position, displacement and path length of machine parts and vehicles in chosen coordinate frames." }
  ],
  mistakes: [
    { wrong: `Reporting distance as the displacement: "the train's displacement is 14.5 km".`, fix: `Displacement uses only the endpoints: <span class="m">Δ<i>x</i> = <i>x</i><sub>f</sub> − <i>x</i><sub>0</sub> = −3.5 km</span>. The route length is the distance.` },
    { wrong: `Subtracting in the wrong order: <span class="m">Δ<i>x</i> = <i>x</i><sub>0</sub> − <i>x</i><sub>f</sub></span>.`, fix: `Always final minus initial. The reversed order flips the sign and the direction of the answer.` },
    { wrong: `Dropping the sign: "the displacement is 3.5 km".`, fix: `In one dimension the sign is the direction. Write <span class="m">−3.5 km</span> or "3.5 km west", never a bare size.` },
    { wrong: `Finding distance as <span class="m">|<i>x</i>(<i>t</i><sub>f</sub>) − <i>x</i>(<i>t</i><sub>0</sub>)|</span> for motion that reverses.`, fix: `Find where the object turns around, split the interval there, and add the sizes of the pieces.` }
  ],
  practice: [
    { q: `A car moves along a straight road from <span class="m"><i>x</i> = 12 m</span> to <span class="m"><i>x</i> = −5 m</span>. What is its displacement?`, a: `<span class="m">Δ<i>x</i> = −5 m − 12 m = −17 m</span>: 17 m in the negative direction.` },
    { q: `A dog on a straight beach runs 40 m east, then 25 m west, then 10 m east. Find its displacement and the distance it ran.`, a: `Displacement <span class="m">+40 − 25 + 10 = +25 m</span> (25 m east). Distance <span class="m">40 + 25 + 10 = 75 m</span>.` },
    { q: `A runner completes exactly two laps of a 400 m track and stops at the start line. What are her displacement and distance? Can displacement ever be larger in size than distance?`, a: `Displacement <span class="m">0 m</span>, distance <span class="m">800 m</span>. No: <span class="m">|Δ<i>x</i>| ≤ <i>x</i><sub>total</sub></span> always, with equality only for motion in one direction without turning back.` },
    { q: `A particle moves along the <span class="m"><i>x</i></span>-axis with <span class="m"><i>x</i>(<i>t</i>) = 2.0<i>t</i><sup>2</sup> − 8.0<i>t</i> + 5.0</span> (m, <i>t</i> in s). Find its displacement and distance traveled from <span class="m"><i>t</i> = 0</span> to <span class="m"><i>t</i> = 5.0 s</span>.`, a: `<span class="m"><i>x</i>(0) = 5.0 m</span>, <span class="m"><i>x</i>(5.0) = 50 − 40 + 5.0 = 15 m</span>, so <span class="m">Δ<i>x</i> = +10 m</span>. The particle turns around at the vertex <span class="m"><i>t</i> = 2.0 s</span>, where <span class="m"><i>x</i> = 8.0 − 16 + 5.0 = −3.0 m</span>. Distance <span class="m">|−3.0 − 5.0| + |15 − (−3.0)| = 8.0 + 18 = 26 m</span>.` }
  ],
  origin: `Describing a position by a signed number measured from an origin rests on the coordinate method René Descartes published in <i>La Géométrie</i> (1637). Newton's <i>Principia</i> (1687) built mechanics on positions measured in a fixed frame of reference.`
};
