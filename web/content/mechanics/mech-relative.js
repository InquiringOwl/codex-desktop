window.ARITH = window.ARITH || {};

ARITH["mech-relative"] = {
  title: "Relative Motion",
  short: "Velocities add as vectors between frames",
  grade: "College PHYS 1xx · University Physics I",
  hours: 5,
  voice: "plain",
  eyebrow: "Mechanics · kinematics and reference frames",
  hero: `<span class="m"><span class="c1"><b>v</b><sub>PG</sub></span> = <span class="c2"><b>v</b><sub>PW</sub></span> + <span class="c3"><b>v</b><sub>WG</sub></span></span>`,
  lede: `A velocity is always measured relative to something. To change reference frames, add the velocity of the frame itself: the boat's velocity over the ground is its velocity through the water plus the water's velocity over the ground.`,
  plain: `<p>Walk forward at 1 m/s down the aisle of a train moving at 30 m/s. To a passenger you are moving at 1 m/s. To someone standing beside the track you are moving at 31 m/s. Neither is wrong. Every velocity is measured <b>relative to</b> a reference frame, and different frames give different answers.</p>
<p>The rule for switching frames is vector addition. A boat that heads straight across a river is pushed downstream by the current, so over the ground it moves diagonally. Its <span class="c1">ground velocity</span> is the arrow for its <span class="c2">velocity through the water</span> plus the arrow for the <span class="c3">water's velocity</span>, placed tip to tail.</p>
<p>The subscripts make the bookkeeping mechanical. <span class="m"><b>v</b><sub>PW</sub></span> means "P relative to W". In a sum, the inner letters match and cancel like a chain: P relative to W, plus W relative to G, gives P relative to G. Swapping the letters reverses the vector: <span class="m"><b>v</b><sub>WG</sub> = −<b>v</b><sub>GW</sub></span>.</p>`,
  formal: `<p>Let frame S′ move relative to frame S. For a particle P, the positions satisfy <span class="m"><b>r</b><sub>PS</sub> = <b>r</b><sub>PS′</sub> + <b>r</b><sub>S′S</sub></span>. Differentiating with respect to time (the same absolute time in both frames, valid for speeds much less than the speed of light):</p>
<div class="display"><span class="c1"><b>v</b><sub>PS</sub></span> = <span class="c2"><b>v</b><sub>PS′</sub></span> + <span class="c3"><b>v</b><sub>S′S</sub></span>, &nbsp;&nbsp; <b>a</b><sub>PS</sub> = <b>a</b><sub>PS′</sub> + <b>a</b><sub>S′S</sub><br><b>v</b><sub>AB</sub> = −<b>v</b><sub>BA</sub>, &nbsp;&nbsp; <b>v</b><sub>AC</sub> = <b>v</b><sub>AB</sub> + <b>v</b><sub>BC</sub></div>
<p>This is the <b>Galilean velocity transformation</b>. If S′ moves at constant velocity relative to S, then <span class="m"><b>a</b><sub>S′S</sub> = 0</span> and <span class="m"><b>a</b><sub>PS</sub> = <b>a</b><sub>PS′</sub></span>: every inertial observer measures the same acceleration. For a river crossing with the boat's velocity relative to the water at angle φ upstream from straight across, the crossing time is <span class="m"><i>t</i> = <i>w</i>/(<i>v</i><sub>BW</sub> cos φ)</span>, independent of the current.</p>`,
  legend: [
    { c: "c2", sym: `<b>v</b><sub>PW</sub>`, name: "Relative to the medium", desc: "The object's velocity through the water or air: boat speed and heading, or an aircraft's airspeed and heading." },
    { c: "c3", sym: `<b>v</b><sub>WG</sub>`, name: "Velocity of the medium", desc: "The current or wind, measured relative to the ground." },
    { c: "c1", sym: `<b>v</b><sub>PG</sub>`, name: "Relative to the ground", desc: "The vector sum: the actual track and ground speed an observer on shore would measure." }
  ],
  steps: { title: "How to solve a relative-velocity problem", items: [
    `Name the objects and frames with letters (P plane, A air, G ground) and write every given velocity with two subscripts.`,
    `Write the chain equation so the inner subscripts match: <span class="m"><span class="c1"><b>v</b><sub>PG</sub></span> = <span class="c2"><b>v</b><sub>PA</sub></span> + <span class="c3"><b>v</b><sub>AG</sub></span></span>. Flip any vector you need with <span class="m"><b>v</b><sub>AB</sub> = −<b>v</b><sub>BA</sub></span>.`,
    `Draw the vector triangle tip to tail and mark the known sides and angles.`,
    `Solve by components (right-angle cases) or with the Law of Sines and Law of Cosines (general triangles).`,
    `For crossings, time comes from the component across the river or route only: <span class="m"><i>t</i> = <i>w</i>/<i>v</i><sub>⟂</sub></span>. Drift is the along-stream ground velocity times that time.`,
    `Check a limiting case: with no wind or current, the ground velocity should equal the velocity relative to the medium.`
  ] },
  example: {
    prompt: `A small plane has an airspeed of 250 km/h. A steady wind blows toward the east at 60.0 km/h. The pilot must fly due north to a town 500 km away. In what direction should she head, what is her ground speed, and how long does the trip take?`,
    lines: [
      { math: `<span class="m"><span class="c1"><b>v</b><sub>PG</sub></span> = <span class="c2"><b>v</b><sub>PA</sub></span> + <span class="c3"><b>v</b><sub>AG</sub></span></span>`, note: "P plane, A air, G ground. The ground velocity must point due north." },
      { math: `<span class="m">east: &nbsp;0 = −250 sin φ + 60.0</span>`, note: "Head φ west of north so the plane's westward airspeed component cancels the wind." },
      { math: `<span class="m">sin φ = <span class="fr"><span>60.0</span><span>250</span></span> = 0.240 &nbsp;⇒&nbsp; φ = 13.9° west of north</span>`, note: "Inverse sine of the ratio." },
      { math: `<span class="m"><span class="c1"><i>v</i><sub>PG</sub></span> = 250 cos φ = √(250<sup>2</sup> − 60.0<sup>2</sup>) = <span class="c1">243 km/h</span></span>`, note: "North component; the vector triangle has a right angle, with the airspeed as hypotenuse." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>500 km</span><span>242.7 km/h</span></span> = 2.06 h</span>`, note: "About 2 h 4 min." },
      { math: `<span class="m">60.0 → 0: &nbsp; φ → 0°, &nbsp; <i>v</i><sub>PG</sub> → 250 km/h ✓</span>`, note: "Limiting case: with no wind she heads north and the ground speed equals the airspeed. With wind, a crosswind always lowers the ground speed." }
    ],
    answer: `Head <span class="m">13.9°</span> west of north. The ground speed is <span class="m c1">243 km/h</span> due north, and the trip takes <span class="m">2.06 h</span>.`
  },
  why: `<p>Nothing is measured from an absolute standstill. Pilots plan headings that correct for wind, ship navigators correct for currents, and radar gives the velocity of one aircraft relative to another, which is what decides whether they will collide. A weather radar measures rain relative to the ground, and a rider on a bicycle feels the wind relative to the bicycle.</p>
<p>The principle behind it, that the laws of motion are the same for every observer moving at constant velocity, is one of the foundations of physics. It is why you can pour a drink normally on a smoothly cruising airliner. Einstein's special relativity keeps the principle but replaces simple velocity addition with a rule that never exceeds the speed of light.</p>`,
  careers: [
    { role: "Airline pilot", use: "Computes the wind-correction heading and ground speed from airspeed and forecast winds aloft before every leg." },
    { role: "Ship's navigator", use: "Corrects a vessel's heading for tidal currents so its course made good reaches the intended waypoint." },
    { role: "Air traffic controller", use: "Judges conflicts from the relative velocity of two aircraft, which sets the closest point of approach." },
    { role: "Meteorologist", use: "Converts Doppler radar velocities relative to the radar into wind fields over the ground." },
    { role: "Drone survey operator", use: "Adjusts heading and flight time for wind so survey lines stay straight over the ground." },
    { role: "Rowing and sailing coach", use: "Plans river and tidal crossings using boat speed through the water and the current's velocity." }
  ],
  life: [
    "Walking on an airport moving walkway and noticing how much faster you go",
    "Swimming across a river and landing downstream of where you aimed",
    "Seeing raindrops leave slanted streaks on a moving car's side window",
    "Feeling a headwind grow when you cycle faster on a calm day",
    "Judging when two cars on a motorway will draw level"
  ],
  fields: [
    { name: "Aviation and navigation", use: "Wind triangles give headings, ground speeds and fuel times." },
    { name: "Oceanography", use: "Drifter and ship tracks are separated into motion relative to the water and the current itself." },
    { name: "Meteorology", use: "Radar and aircraft measure winds relative to moving platforms, then convert to ground frames." },
    { name: "Astronomy", use: "Observed stellar and planetary velocities are corrected for Earth's orbital motion to a solar-system frame." }
  ],
  prereqWhy: {
    "mech-2d-motion": "Relative velocity equations add and subtract velocity vectors in two dimensions, component by component."
  },
  unlocksWhy: {},
  mathWhy: {
    "pa-pythagorean": `When the vectors are perpendicular, such as a boat heading straight across a current, the ground speed is <span class="m">√(<i>v</i><sub>BW</sub><sup>2</sup> + <i>v</i><sub>WG</sub><sup>2</sup>)</span>.`,
    "trig-law-cosines": `A general wind or current triangle has no right angle; the Law of Cosines gives the ground speed and the Law of Sines gives the drift or correction angle.`
  },
  beyond: [
    { field: "Modern Physics", why: "Special relativity replaces the Galilean velocity addition v = u + v′ with a rule that keeps the speed of light the same in every inertial frame." },
    { field: "Classical Mechanics", why: "Rotating reference frames add centrifugal and Coriolis terms to the acceleration transformation, which explain weather patterns and pendulum precession." },
    { field: "Nuclear & Particle Physics", why: "Collision energies and decay products are transformed between the lab frame and the centre-of-mass frame." },
    { field: "Aerospace Engineering", why: "Flight dynamics separates airspeed, the aircraft relative to the air mass, from ground speed and wind in every guidance calculation." }
  ],
  mistakes: [
    { wrong: `Adding speeds as numbers in a crosswind: <span class="m">250 + 60.0 = 310</span> km/h.`, fix: `Velocities add as vectors. Perpendicular ones combine with the Pythagorean theorem; only parallel velocities add or subtract directly.` },
    { wrong: `Mixing up subscripts, e.g. writing <span class="m"><b>v</b><sub>PG</sub> = <b>v</b><sub>PA</sub> + <b>v</b><sub>GA</sub></span>.`, fix: `The inner subscripts must match: <span class="m"><b>v</b><sub>PA</sub> + <b>v</b><sub>AG</sub></span>. If you know <span class="m"><b>v</b><sub>GA</sub></span>, use <span class="m"><b>v</b><sub>AG</sub> = −<b>v</b><sub>GA</sub></span>.` },
    { wrong: `Dividing the river width by the ground speed to get the crossing time.`, fix: `Only the component of velocity straight across moves the boat toward the other bank: <span class="m"><i>t</i> = <i>w</i>/(<i>v</i><sub>BW</sub> cos φ)</span>. The current changes where you land, not when.` },
    { wrong: `Confusing heading with track: "she points north, so she flies north".`, fix: `Heading is the direction of <span class="m"><b>v</b><sub>PA</sub></span>; track is the direction of <span class="m"><b>v</b><sub>PG</sub></span>. They differ whenever there is a crosswind.` }
  ],
  practice: [
    { q: `An airport walkway moves at 1.50 m/s. A traveller walks at 1.00 m/s relative to the walkway. Find her velocity relative to the floor when she walks with the walkway, and when she walks against it.`, a: `With it: <span class="m">1.00 + 1.50 = 2.50</span> m/s forward. Against it: <span class="m">−1.00 + 1.50 = +0.500</span> m/s, so she still moves in the walkway's direction at 0.500 m/s, backwards from the way she faces.` },
    { q: `A river is 120 m wide and flows at 1.20 m/s. A boat moves at 3.00 m/s relative to the water and points straight across. How long does it take to cross, how far downstream does it land, and what is its speed relative to the ground?`, a: `<span class="m"><i>t</i> = 120/3.00 = 40.0</span> s. Drift <span class="m">= 1.20 × 40.0 = 48.0</span> m downstream. Ground speed <span class="m">√(3.00<sup>2</sup> + 1.20<sup>2</sup>) = 3.23</span> m/s, at <span class="m">tan<sup>−1</sup>(1.20/3.00) = 21.8°</span> downstream from straight across.` },
    { q: `Rain falls straight down at 8.00 m/s relative to the ground. A car drives at 20.0 m/s. What are the speed of the rain relative to the car and the angle of the streaks on a side window, measured from the vertical?`, a: `<span class="m"><b>v</b><sub>RC</sub> = <b>v</b><sub>RG</sub> + <b>v</b><sub>GC</sub> = <b>v</b><sub>RG</sub> − <b>v</b><sub>CG</sub></span>: 8.00 m/s down and 20.0 m/s backward. Speed <span class="m">√(8.00<sup>2</sup> + 20.0<sup>2</sup>) = 21.5</span> m/s; angle <span class="m">tan<sup>−1</sup>(20.0/8.00) = 68.2°</span> from the vertical, slanting toward the back of the car.` },
    { q: `A plane with airspeed 200 km/h heads due north. The wind blows at 50.0 km/h toward 30.0° east of north. Find the ground speed and the track direction.`, a: `The angle between the vectors in the triangle is <span class="m">180° − 30.0° = 150°</span>. Law of Cosines: <span class="m"><i>v</i><sup>2</sup> = 200<sup>2</sup> + 50.0<sup>2</sup> − 2(200)(50.0)cos 150°</span>, so <span class="m"><i>v</i> = 245</span> km/h. Law of Sines: <span class="m">sin α = 50.0 sin 150°/244.6</span>, <span class="m">α = 5.87°</span> east of north.` }
  ],
  origin: `Galileo argued in his <i>Dialogue Concerning the Two Chief World Systems</i> (1632) that no experiment below decks in a smoothly sailing ship could reveal the ship's motion. That principle, now called Galilean relativity, underlies the velocity-addition rule; Einstein's special relativity (1905) kept the principle and corrected the addition rule for speeds near that of light.`
};
