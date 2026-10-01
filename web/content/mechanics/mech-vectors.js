window.ARITH = window.ARITH || {};

ARITH["mech-vectors"] = {
  title: "Scalars & Vectors: Graphical Addition",
  short: "Quantities with direction, added tip to tail",
  grade: "High school physics · college PHYS 1xx",
  hours: 4,
  voice: "plain",
  eyebrow: "Mechanics · vectors",
  hero: `<span class="m"><span class="c1"><b>R</b></span> = <span class="c2"><b>A</b></span> + <span class="c3"><b>B</b></span> &nbsp;&nbsp; <span class="c2"><b>A</b></span> − <span class="c3"><b>B</b></span> = <span class="c2"><b>A</b></span> + (<span class="c4">−<b>B</b></span>)</span>`,
  lede: `A <b>scalar</b> is a number with a unit. A <b>vector</b> also has a direction, so vectors add by placing them <span class="c1">tip to tail</span>, not by adding their sizes.`,
  plain: `<p>Some quantities are fully described by one number and a unit: a mass of 70 kg, a temperature of 20 °C, a time of 3.0 s. These are <b>scalars</b>. Others also need a direction. "Walk 500 m" does not tell you where you end up; "walk 500 m north" does. Quantities like this are <b>vectors</b>: displacement, velocity, acceleration and force are the main ones in mechanics.</p>
<p>We draw a vector as an arrow. Its length, to some scale, shows the <b>magnitude</b>, and the way it points shows the <b>direction</b>. In print, a vector is a bold letter such as <span class="m"><b>A</b></span>, and its magnitude is the plain italic letter <span class="m"><i>A</i></span>. You can slide an arrow around the page without changing it, as long as you keep its length and direction.</p>
<p>To add two vectors, put the tail of the second on the tip of the first. The <b>resultant</b> runs from the very first tail to the last tip. Walk 3 blocks east then 4 blocks north and you are 5 blocks from where you began, not 7. Order does not matter: going north first ends at the same point, which is why the two routes form a parallelogram.</p>
<p>To subtract, add the opposite: <span class="m"><b>A</b> − <b>B</b> = <b>A</b> + (−<b>B</b>)</span>, where <span class="m">−<b>B</b></span> has the same length as <span class="m"><b>B</b></span> but points the other way.</p>`,
  formal: `<p>A <b>scalar</b> is specified by a number and a unit. A <b>vector</b> <span class="m"><b>A</b></span> is specified by a <b>magnitude</b> <span class="m"><i>A</i> = |<b>A</b>| ≥ 0</span> (with unit) and a direction. Two vectors are <b>equal</b> if they have the same magnitude and direction, wherever they are drawn. They are <b>parallel</b> if they point the same way and <b>antiparallel</b> if they point opposite ways. For a scalar <span class="m"><i>α</i></span>, the vector <span class="m"><i>α</i><b>A</b></span> has magnitude <span class="m">|<i>α</i>|<i>A</i></span> and is parallel to <span class="m"><b>A</b></span> if <span class="m"><i>α</i> &gt; 0</span>, antiparallel if <span class="m"><i>α</i> &lt; 0</span>.</p>
<div class="display"><b>A</b> + <b>B</b> = <b>B</b> + <b>A</b> &nbsp;<span class="dim">(commutative)</span><br>(<b>A</b> + <b>B</b>) + <b>C</b> = <b>A</b> + (<b>B</b> + <b>C</b>) &nbsp;<span class="dim">(associative)</span><br><b>A</b> − <b>B</b> = <b>A</b> + (−1)<b>B</b><br>|<i>A</i> − <i>B</i>| ≤ |<b>A</b> + <b>B</b>| ≤ <i>A</i> + <i>B</i></div>
<p>The sum is found by the <b>tip-to-tail</b> method or, equivalently, as the diagonal of the <b>parallelogram</b> with sides <span class="m"><b>A</b></span> and <span class="m"><b>B</b></span> drawn from a common tail. The upper bound in the triangle inequality is reached when the vectors are parallel, the lower bound when they are antiparallel. When <span class="m"><b>A</b> ⊥ <b>B</b></span>, <span class="m">|<b>A</b> + <b>B</b>| = √<span style="text-decoration:overline"><i>A</i><sup>2</sup> + <i>B</i><sup>2</sup></span></span>.</p>`,
  legend: [
    { c: "c2", sym: `<b>A</b>`, name: "First vector", desc: "Drawn from the origin. Its tail is where the resultant starts." },
    { c: "c3", sym: `<b>B</b>`, name: "Second vector", desc: "Drawn with its tail on the tip of A for tip-to-tail addition." },
    { c: "c1", sym: `<b>R</b>`, name: "Resultant", desc: "The sum A + B, from the first tail to the last tip. Its length is at most A + B." },
    { c: "c4", sym: `−<b>B</b>`, name: "Opposite of B", desc: "Same magnitude as B, opposite direction. Adding it subtracts B." }
  ],
  steps: { title: "How to add vectors graphically", items: [
    `Choose a scale, such as 1 cm = 10 m, and a reference direction (east, or the +x axis).`,
    `Draw <span class="c2"><b>A</b></span> to scale from a starting point, with its direction measured by protractor.`,
    `Draw <span class="c3"><b>B</b></span> with its tail on the tip of <b>A</b>. For more vectors, keep going tip to tail.`,
    `Draw the <span class="c1">resultant</span> from the first tail to the last tip.`,
    `Measure its length and convert with the scale. Measure its angle from the reference direction.`,
    `To subtract <b>B</b>, reverse it to <span class="c4">−<b>B</b></span> and add. Check that the result lies between |A − B| and A + B.`
  ] },
  example: {
    prompt: `A rescue drone flies 120 m east, then 50.0 m north. Find its displacement from the launch point graphically, then state the displacement it needs to fly straight home.`,
    lines: [
      { math: `<span class="m">scale: 1 square = 10 m; &nbsp;<span class="c2"><b>A</b></span> = 12 squares east</span>`, note: "Draw the first leg to scale along the east direction." },
      { math: `<span class="m"><span class="c3"><b>B</b></span> = 5 squares north, tail on the tip of <b>A</b></span>`, note: "Tip-to-tail placement." },
      { math: `<span class="m"><span class="c1"><i>R</i></span> ≈ 13.0 squares = 130 m</span>`, note: "Measure the arrow from the launch point to the final tip." },
      { math: `<span class="m"><i>R</i> = √<span style="text-decoration:overline">(120 m)<sup>2</sup> + (50.0 m)<sup>2</sup></span> = 130 m</span>`, note: "Because the legs are perpendicular, the Pythagorean theorem confirms the drawing." },
      { math: `<span class="m"><i>θ</i> ≈ 22.6° north of east</span>`, note: "Protractor reading at the launch point, from east toward north (tan⁻¹(50.0/120) = 22.6°)." },
      { math: `<span class="m">−<span class="c1"><b>R</b></span>: 130 m at 22.6° south of west</span>`, note: "The trip home is the opposite vector: same length, reversed direction." },
      { math: `<span class="m">70 m ≤ 130 m ≤ 170 m ✓</span>`, note: "Sanity check: the resultant lies between the difference and the sum of the legs." }
    ],
    answer: `The drone's displacement is <span class="m">130 m</span> at <span class="m">22.6°</span> north of east. To return it must fly <span class="m">130 m</span> at <span class="m">22.6°</span> south of west.`
  },
  why: `<p>Most quantities that make things move have direction: displacement, velocity, acceleration, force, momentum. Adding them like ordinary numbers gives wrong answers whenever they are not lined up. A boat crossing a river, an aircraft in a crosswind and two ropes pulling a crate all need vector addition.</p>
<p>The graphical method builds the picture you keep for the rest of physics. The next topic makes it exact with components, but even then you sketch the tip-to-tail diagram first, because it shows at a glance roughly how long the answer should be and which way it points.</p>`,
  careers: [
    { role: "Pilot", use: "Adds the wind velocity to the aircraft's airspeed vector to find the ground track and the heading correction." },
    { role: "Ship's navigator", use: "Combines the vessel's velocity through the water with the current to plot the course made good." },
    { role: "Structural engineer", use: "Adds the forces meeting at a truss joint to check that they balance." },
    { role: "Surveyor", use: "Chains measured legs of a traverse tip to tail and checks that a closed loop returns to its start." },
    { role: "Physical therapist", use: "Considers the direction as well as the size of muscle and joint forces when analysing a movement." }
  ],
  life: [
    "Working out how far you are from home after walking several blocks in different directions",
    "Swimming across a river with a current",
    "Two people pulling a heavy box with ropes at an angle",
    "Aiming into a crosswind when throwing a ball",
    "Reading a hiking map with compass bearings"
  ],
  fields: [
    { name: "Navigation", use: "Courses, currents and winds are combined as vectors." },
    { name: "Engineering statics", use: "Forces on a structure are added as vectors to check equilibrium." },
    { name: "Meteorology", use: "Wind is a velocity vector field, and weather maps show it with arrows." },
    { name: "Computer graphics", use: "Positions, directions and motions of objects are stored and combined as vectors." }
  ],
  prereqWhy: {
    "mech-units": "A vector's magnitude is a measured quantity with SI units, and only vectors with the same units can be added."
  },
  unlocksWhy: {
    "mech-components": "Components turn the graphical method into exact arithmetic: add the x parts and the y parts separately.",
    "mech-displacement": "Displacement is the first vector of kinematics, the arrow from where an object started to where it ended."
  },
  mathWhy: {
    "pa-coordinate": `Scale drawings are made on a grid: placing <span class="m"><b>A</b></span> from the origin and <span class="m"><b>B</b></span> from its tip is plotting points in the coordinate plane.`,
    "pa-pythagorean": `When two vectors are perpendicular, the resultant is the hypotenuse: <span class="m"><i>R</i> = √<span style="text-decoration:overline"><i>A</i><sup>2</sup> + <i>B</i><sup>2</sup></span></span>, as in the 120 m and 50.0 m legs giving 130 m.`,
    "geometry:Points, lines, planes and angles": `Directions are angles measured from a reference line, and the parallelogram rule relies on parallel lines and opposite sides of equal length.`
  },
  beyond: [
    { field: "Electricity & Magnetism", why: "Electric and magnetic fields and forces are vectors that add by superposition from many charges." },
    { field: "Statics", why: "Equilibrium of a structure means the force vectors acting on each part sum to zero." },
    { field: "Classical Mechanics", why: "Every equation of motion is a vector equation, later written in general coordinates." },
    { field: "Aerospace Engineering", why: "Wind triangles, thrust vectoring and orbital manoeuvres are vector additions." }
  ],
  mistakes: [
    { wrong: `Adding magnitudes: 120 m east plus 50.0 m north is 170 m.`, fix: `Magnitudes add only for parallel vectors. Here <span class="m"><i>R</i> = √<span style="text-decoration:overline">120<sup>2</sup> + 50.0<sup>2</sup></span> m = 130 m</span>.` },
    { wrong: `Drawing both vectors from the same tail and joining their tips to get the sum.`, fix: `The line joining the tips is a difference (<span class="m"><b>A</b> − <b>B</b></span> or <span class="m"><b>B</b> − <b>A</b></span>). The sum is the diagonal from the common tail, or the tip-to-tail arrow.` },
    { wrong: `Giving a direction as "22.6°" with no reference.`, fix: `State what the angle is measured from and toward: "22.6° north of east", or "22.6° counterclockwise from the +x axis".` },
    { wrong: `Subtracting by reversing <b>A</b> instead of <b>B</b>.`, fix: `<span class="m"><b>A</b> − <b>B</b> = <b>A</b> + (−<b>B</b>)</span>. Reversing <b>A</b> gives <span class="m"><b>B</b> − <b>A</b></span>, which is the opposite vector.` }
  ],
  practice: [
    { q: `Sort into scalars and vectors: mass, velocity, temperature, force, speed, displacement, time, energy.`, a: `Scalars: mass, temperature, speed, time, energy. Vectors: velocity, force, displacement. Speed is the magnitude of velocity, so it is a scalar.` },
    { q: `Two forces of 5.0 N and 3.0 N act on a box. What are the largest and smallest possible magnitudes of their resultant?`, a: `Largest when parallel: <span class="m">5.0 N + 3.0 N = 8.0 N</span>. Smallest when antiparallel: <span class="m">5.0 N − 3.0 N = 2.0 N</span>. Any angle in between gives a resultant from 2.0 N to 8.0 N.` },
    { q: `<span class="m"><b>A</b></span> is 6.00 m north and <span class="m"><b>B</b></span> is 8.00 m east. Find <span class="m"><b>A</b> + <b>B</b></span> and <span class="m"><b>A</b> − <b>B</b></span>.`, a: `Both have magnitude <span class="m">√<span style="text-decoration:overline">6.00<sup>2</sup> + 8.00<sup>2</sup></span> m = 10.0 m</span>. <span class="m"><b>A</b> + <b>B</b></span> points 36.9° north of east. <span class="m"><b>A</b> − <b>B</b> = <b>A</b> + (−<b>B</b>)</span> is 6.00 m north plus 8.00 m west, so it points 36.9° north of west (tan⁻¹(6.00/8.00) = 36.9°).` },
    { q: `Can two vectors of different magnitude add to zero? Can three?`, a: `Two cannot: the smallest resultant is <span class="m">|<i>A</i> − <i>B</i>| &gt; 0</span>. Three can, if they form a closed triangle tip to tail, for example 3 m east, 4 m north and 5 m pointing 53.1° south of west. Two vectors of equal magnitude add to zero when they are antiparallel.` }
  ],
  origin: `Simon Stevin used the triangle of forces in 1586, and Newton stated the parallelogram rule for combining forces as Corollary I of the <i>Principia</i> (1687). William Rowan Hamilton coined the word "vector" in the 1840s, and Josiah Willard Gibbs and Oliver Heaviside built the vector algebra used in physics today in the 1880s.`
};
