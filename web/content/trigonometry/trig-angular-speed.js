window.ARITH = window.ARITH || {};
ARITH["trig-angular-speed"] = {
  title: "Linear & Angular Speed",
  short: "How fast a point turns and how fast it travels",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "The circular functions · circular motion",
  hero: `<span class="m"><span class="c5"><i>v</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>ω</i></span> &nbsp;&nbsp; 60 rpm = <span class="c1">2π rad/s</span></span>`,
  lede: `A point on a turning wheel has two speeds. Its <b>angular speed</b> <span class="m c1"><i>ω</i></span> says how fast the angle grows. Its <b>linear speed</b> <span class="m c5"><i>v</i></span> says how fast the point travels along the circle, and the two are tied by <span class="m"><span class="c5"><i>v</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>ω</i></span></span>.`,
  plain: `<p>Paint a dot near the hub of a merry-go-round and another on its rim. Every turn, both dots sweep the same angle in the same time, so they have the same <b>angular speed</b>. The rim dot, though, travels a much bigger circle in that time, so it moves faster through the air. That is its <b>linear speed</b>.</p>
<p>Angular speed is angle per unit of time: radians per second, radians per minute, or revolutions per minute (rpm). Linear speed is distance per unit of time: metres per second, miles per hour.</p>
<p>Radians make the link short. An angle of <span class="m c1"><i>θ</i></span> radians cuts off an arc <span class="m"><i>s</i> = <span class="c4"><i>r</i></span><span class="c1"><i>θ</i></span></span>. Divide both sides by the time and you get <span class="m"><span class="c5"><i>v</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>ω</i></span></span>. Twice the radius at the same turning rate means twice the speed.</p>
<p>Belts, chains and meshing gears share one linear speed where they touch. A small pulley driven by a belt must therefore spin faster than the big pulley driving it. Wheels fixed to one axle share one angular speed instead.</p>`,
  formal: `<p>A point moves on a circle of radius <span class="m c4"><i>r</i></span> through a central angle <span class="m c1"><i>θ</i></span> (in radians) and an arc length <span class="m"><i>s</i></span> in time <span class="m"><i>t</i></span>. Its <b>angular speed</b> and <b>linear speed</b> are</p>
<div class="display"><span class="c1"><i>ω</i></span> = <span class="fr"><span><i>θ</i></span><span><i>t</i></span></span> &nbsp;&nbsp;&nbsp; <span class="c5"><i>v</i></span> = <span class="fr"><span><i>s</i></span><span><i>t</i></span></span> = <span class="fr"><span><span class="c4"><i>r</i></span><i>θ</i></span><span><i>t</i></span></span> = <span class="c4"><i>r</i></span><span class="c1"><i>ω</i></span></div>
<p>The formula <span class="m"><i>v</i> = <i>rω</i></span> needs <span class="m"><i>ω</i></span> in radians per unit time; the radian has no unit, so <span class="m"><i>v</i></span> comes out in units of length per unit time. One revolution is <span class="m">2π</span> radians, so <span class="m"><i>n</i></span> rpm is</p>
<div class="display"><i>n</i> rpm = 2π<i>n</i> rad/min = <span class="fr"><span>π<i>n</i></span><span>30</span></span> rad/s</div>
<p>Two pulleys joined by a belt (or two gears in mesh) have equal linear speeds at the rim: <span class="m"><i>r</i><sub>1</sub><i>ω</i><sub>1</sub> = <i>r</i><sub>2</sub><i>ω</i><sub>2</sub></span>, so <span class="m"><i>ω</i><sub>2</sub> = <i>ω</i><sub>1</sub> · <i>r</i><sub>1</sub>/<i>r</i><sub>2</sub></span>. Two wheels on one axle have equal angular speeds. Taking one rotation of the Earth as 24 hours, <span class="m"><i>ω</i> = 2π/24 = π/12</span> rad/h; at the equator, with <span class="m"><i>r</i> ≈ 3960</span> mi, <span class="m"><i>v</i> ≈ 3960 · π/12 = 330π ≈ 1037</span> mi/h.</p>`,
  legend: [
    { c: "c1", sym: `<i>ω</i>`, name: "Angular speed", desc: "Angle swept per unit of time, in radians per second or minute (or revolutions per minute)." },
    { c: "c5", sym: `<i>v</i>`, name: "Linear speed", desc: "Distance travelled along the circle per unit of time." },
    { c: "c4", sym: `<i>r</i>`, name: "Radius", desc: "Distance from the centre to the moving point." },
    { c: "c2", sym: `●`, name: "Rim point, wheel 1", desc: "A marked point on the driving wheel in the lab." },
    { c: "c3", sym: `●`, name: "Rim point, wheel 2", desc: "A marked point on the driven wheel in the lab." }
  ],
  steps: {
    title: "How to find a linear speed from a turning rate",
    items: [
      `Write the angular speed in radians per unit time: multiply revolutions by <span class="m">2π</span>, and degrees by <span class="m">π/180</span>.`,
      `Change the time unit if the answer needs a different one (divide rad/min by 60 to get rad/s).`,
      `Multiply by the radius: <span class="m"><span class="c5"><i>v</i></span> = <span class="c4"><i>r</i></span><span class="c1"><i>ω</i></span></span>. Keep the result exact, a multiple of π.`,
      `Across a belt, chain or gear contact, set the linear speeds equal; on one axle, set the angular speeds equal.`,
      `Change length units last, then round once and say how you rounded.`
    ]
  },
  example: {
    prompt: `A bicycle's pedal sprocket has radius 10 cm, its rear sprocket has radius 4 cm and its rear wheel has radius 33 cm. The rider pedals at 60 rpm. How fast does the bicycle move?`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>ω</i><sub>pedal</sub></span> = 60 · 2π rad/min = 120π rad/min = <span class="c1">2π rad/s</span></span>`, note: "One revolution is 2π radians and one minute is 60 seconds." },
      { math: `<span class="m"><span class="c5"><i>v</i><sub>chain</sub></span> = <span class="c4">10</span> · 2π = <span class="c5">20π cm/s</span></span>`, note: "The chain moves with the rim of the pedal sprocket." },
      { math: `<span class="m"><span class="c1"><i>ω</i><sub>rear</sub></span> = <span class="fr"><span>20π</span><span>4</span></span> = <span class="c1">5π rad/s</span></span>`, note: "The chain has the same linear speed at the small sprocket, so that sprocket turns faster." },
      { math: `<span class="m"><span class="c5"><i>v</i><sub>bike</sub></span> = <span class="c4">33</span> · 5π = <span class="c5">165π cm/s</span></span>`, note: "The rear sprocket and the wheel share one axle, so they share the angular speed." },
      { math: `<span class="m">165π cm/s ≈ 518.4 cm/s ≈ 5.18 m/s</span>`, note: "Rounded at the end only." },
      { math: `<span class="m">5.1836 m/s × 3.6 ≈ 18.7 km/h</span>`, note: "1 m/s = 3.6 km/h." }
    ],
    answer: `<span class="m"><span class="c5"><i>v</i> = 165π cm/s ≈ 5.18 m/s ≈ 18.7 km/h</span></span>`
  },
  why: `<p>Anything that spins has to be designed with both speeds in mind. A drill bit's rpm sets how fast its edge cuts; a hard-drive platter's rpm sets how fast data passes the read head; a car's wheel rpm and tyre size set the number on the speedometer. Gear and belt ratios trade angular speed for turning force, which is how a bicycle lets you climb a hill. Later, <span class="m"><i>ω</i></span> becomes the number that sets the period of every sinusoidal model of motion.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Sizes pulleys, gears and belts so a motor's rpm gives the shaft speed and surface speed a machine needs." },
    { role: "Machinist", use: "Sets spindle rpm on a lathe or mill from the cutting speed the tool maker specifies and the diameter of the part." },
    { role: "Automotive engineer", use: "Relates engine rpm, gear ratios and tyre radius to road speed when choosing a transmission." },
    { role: "Bicycle mechanic", use: "Works out gear ratios and the distance travelled per pedal stroke for a rider's chainring and cassette." },
    { role: "Wind turbine technician", use: "Checks blade-tip speed, which is radius times angular speed, against safe limits." },
    { role: "Satellite operations engineer", use: "Uses angular speed in orbit to predict when a satellite passes over a ground station." }
  ],
  life: [
    "Choosing a lower gear on a bike to pedal faster with less force",
    "The outside horse on a carousel moves faster than the inside one",
    "A record player at 33⅓ or 45 rpm",
    "A car speedometer that reads wrong after fitting larger tyres",
    "A washing machine spin cycle quoted in rpm"
  ],
  fields: [
    { name: "Physics", use: "Uniform circular motion uses ω and v = rω, and centripetal acceleration v²/r = rω²." },
    { name: "Mechanical engineering", use: "Gear trains and belt drives are designed from equal rim speeds at each contact." },
    { name: "Astronomy", use: "The rotation and orbital speeds of planets are angular speeds turned into linear speeds by the radius." },
    { name: "Computer engineering", use: "Disk drives and optical drives relate rotation rate to how fast data passes the head." }
  ],
  prereqWhy: {
    "trig-radians": "v = rω comes from the arc length s = rθ, which holds only when θ is in radians."
  },
  unlocksWhy: {
    "trig-modeling": "A Ferris wheel or a spring turns at an angular speed ω, and ω becomes the B in y = A sin(B(t − C)) + D."
  },
  beyond: [
    { field: "Physics (Mechanics)", why: "Rotational kinematics, centripetal acceleration and angular momentum all start from ω and v = rω." },
    { field: "Engineering", why: "Gear ratios, belt drives and motor selection rest on equal rim speeds and equal axle speeds." },
    { field: "Calculus I", why: "Angular speed becomes the derivative dθ/dt, and related-rates problems use v = r dθ/dt." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>v</i> = <i>rω</i></span> with <span class="m"><i>ω</i></span> in degrees per second`, fix: `The formula comes from <span class="m"><i>s</i> = <i>rθ</i></span>, which needs radians. Turn degrees or revolutions into radians first.` },
    { wrong: `<span class="m">30 rpm = 30 rad/min</span>`, fix: `One revolution is <span class="m">2π</span> radians, so <span class="m">30 rpm = 60π rad/min = π rad/s</span>.` },
    { wrong: `Two pulleys on one belt turn at the same rpm.`, fix: `The belt gives them the same <b>linear</b> speed. The smaller pulley turns faster: <span class="m"><i>ω</i><sub>2</sub> = <i>ω</i><sub>1</sub><i>r</i><sub>1</sub>/<i>r</i><sub>2</sub></span>.` }
  ],
  practice: [
    { q: `A point on a wheel of radius 0.5 m turns through 12 radians in 4 s. Find its angular speed and its linear speed.`, a: `<span class="m"><i>ω</i> = 12/4 = 3</span> rad/s and <span class="m"><i>v</i> = 0.5 · 3 = 1.5</span> m/s.` },
    { q: `A record turns at 45 rpm. Find its angular speed in rad/s, and the linear speed of a point 15 cm from the centre (to the nearest tenth).`, a: `<span class="m">45 · 2π = 90π</span> rad/min, so <span class="m"><i>ω</i> = 90π/60 = 3π/2</span> rad/s. <span class="m"><i>v</i> = 15 · 3π/2 = 45π/2 ≈ 70.7</span> cm/s.` },
    { q: `A pulley of radius 6 cm turns at 300 rpm and drives a pulley of radius 15 cm by a belt. Find the belt's speed and the angular speed of the larger pulley in rad/s and in rpm.`, a: `<span class="m"><i>ω</i><sub>1</sub> = 300 · 2π/60 = 10π</span> rad/s, so the belt moves at <span class="m">6 · 10π = 60π ≈ 188.5</span> cm/s. Then <span class="m"><i>ω</i><sub>2</sub> = 60π/15 = 4π</span> rad/s <span class="m">= 4π · 60/(2π) = 120</span> rpm.` },
    { q: `A car's tyres have radius 14 in. At 60 mi/h, how many revolutions per minute do the tyres make (to the nearest tenth)? Use 1 mi = 63,360 in.`, a: `<span class="m">60 mi/h = 60 · 63360/60 = 63360</span> in/min. <span class="m"><i>ω</i> = <i>v</i>/<i>r</i> = 63360/14</span> rad/min, and dividing by <span class="m">2π</span> gives <span class="m">63360/(28π) = 15840/(7π) ≈ 720.3</span> rpm.` }
  ]
};
