window.ARITH = window.ARITH || {};
ARITH["trig-angles"] = {
  title: "Angles in Standard Position",
  short: "Angles as rotations: quadrants, DMS and coterminal angles",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Angles · standard position",
  hero: `<span class="m"><span class="c1">420°</span> = 60° + <span class="c4">1 · 360°</span> &nbsp; <span class="c1">−300°</span> = 60° − <span class="c4">1 · 360°</span></span>`,
  lede: `In trigonometry an angle is a rotation. A ray starts on the positive <span class="m"><i>x</i></span>-axis and turns about the origin: counterclockwise for a positive angle, clockwise for a negative one, and as many full turns as you like.`,
  plain: `<p>In geometry an angle is two rays from one point, and its measure is between 0° and 180°. Trigonometry adds motion. Pin a ray at the origin, lay it along the positive <span class="m"><i>x</i></span>-axis, and turn it. Where it starts is the <span class="c2">initial side</span>. Where it stops is the <span class="c3">terminal side</span>. How far it turned is the <span class="c1">angle</span>.</p>
<p>Turning counterclockwise counts as positive and turning clockwise counts as negative. A full turn is 360°, and nothing stops the ray from going further. An angle of 420° is one full turn and then 60° more, so it stops exactly where 60° stops. Angles that stop in the same place are called coterminal.</p>
<p>The terminal side lands in one of the four quadrants, or on an axis. An angle such as 90° or −180° whose terminal side lies on an axis is called quadrantal. It is in no quadrant.</p>
<p>Degrees can be split the way hours are. One degree is 60 minutes, written 60′, and one minute is 60 seconds, written 60″. Surveyors and navigators write 35° 25′ 30″; a calculator writes the same angle as 35.425°.</p>`,
  formal: `<p>An angle is in <b>standard position</b> when its vertex is at the origin and its <span class="c2"><b>initial side</b></span> lies along the positive <span class="m"><i>x</i></span>-axis. The <span class="c3"><b>terminal side</b></span> is the ray where the rotation ends. A counterclockwise rotation gives a <b>positive angle</b> and a clockwise rotation a <b>negative angle</b>. One full revolution is 360°, and an angle may be any real number of degrees.</p>
<p>The angle lies in the quadrant that contains its terminal side. For <span class="m">0° ≤ <span class="c1"><i>θ</i></span> &lt; 360°</span>:</p>
<div class="display">QI: 0° &lt; <span class="c1"><i>θ</i></span> &lt; 90° &nbsp;&nbsp; QII: 90° &lt; <span class="c1"><i>θ</i></span> &lt; 180° &nbsp;&nbsp; QIII: 180° &lt; <span class="c1"><i>θ</i></span> &lt; 270° &nbsp;&nbsp; QIV: 270° &lt; <span class="c1"><i>θ</i></span> &lt; 360°<br><span class="dim">quadrantal:</span> &nbsp;<span class="c1"><i>θ</i></span> = 0°, 90°, 180°, 270° <span class="dim">(and every angle coterminal with one of them)</span></div>
<p>Two angles in standard position are <b>coterminal</b> when they have the same terminal side. They differ by a whole number of revolutions:</p>
<div class="display"><span class="dim">the angles coterminal with</span> <span class="c1"><i>θ</i></span> <span class="dim">are</span> &nbsp;<span class="c1"><i>θ</i></span> + <span class="c4">360°<i>k</i></span>, &nbsp; <i>k</i> = 0, ±1, ±2, …</div>
<p>In <b>degrees, minutes, seconds</b> (DMS), <span class="m">1° = 60′</span> and <span class="m">1′ = 60″</span>, so <span class="m">1° = 3600″</span> and</p>
<div class="display"><i>d</i>° <i>m</i>′ <i>s</i>″ = <i>d</i> + <span class="fr"><span><i>m</i></span><span>60</span></span> + <span class="fr"><span><i>s</i></span><span>3600</span></span> <span class="dim">degrees</span> &nbsp;&nbsp; <span class="dim">e.g.</span> 35° 25′ 30″ = 35 + <span class="fr"><span>25</span><span>60</span></span> + <span class="fr"><span>30</span><span>3600</span></span> = 35.425°</div>
<p>Two positive angles are <b>complementary</b> when their measures add to 90° and <b>supplementary</b> when they add to 180°. In DMS, borrow 1° = 60′ when subtracting: the complement of 52° 17′ is 89° 60′ − 52° 17′ = 37° 43′.</p>`,
  legend: [
    { c: "c1", sym: `<i>θ</i>`, name: "Angle", desc: "The amount of rotation from the initial side to the terminal side; positive counterclockwise, negative clockwise." },
    { c: "c2", sym: `initial side`, name: "Initial side", desc: "Where the rotation starts: the positive x-axis for an angle in standard position." },
    { c: "c3", sym: `terminal side`, name: "Terminal side", desc: "Where the rotation stops. Its quadrant is the angle's quadrant; on an axis the angle is quadrantal." },
    { c: "c4", sym: `360°<i>k</i>`, name: "Full revolutions", desc: "Adding or subtracting whole turns of 360° gives coterminal angles with the same terminal side." }
  ],
  steps: {
    title: "How to place an angle and find its coterminal angle in [0°, 360°)",
    items: [
      `Put the vertex at the origin and the <span class="c2">initial side</span> on the positive <span class="m"><i>x</i></span>-axis.`,
      `Turn counterclockwise for a positive <span class="m c1"><i>θ</i></span> and clockwise for a negative one. Every 360° is one full revolution.`,
      `Add or subtract <span class="m c4">360°</span> until the angle is in <span class="m">[0°, 360°)</span>. Counting the turns gives <span class="m"><i>k</i></span> in <span class="m"><i>θ</i> + 360°<i>k</i></span>.`,
      `Read the quadrant from that angle. A multiple of 90° is quadrantal and lies on an axis.`,
      `To write decimal degrees in DMS, multiply the decimal part by 60 to get minutes, then the decimal part of the minutes by 60 to get seconds.`,
      `To write DMS as decimal degrees, compute <span class="m"><i>d</i> + <i>m</i>/60 + <i>s</i>/3600</span>.`
    ]
  },
  example: {
    prompt: `Find the angle in <span class="m">[0°, 360°)</span> that is coterminal with <span class="m c1"><i>θ</i> = −1030.75°</span>. Write it in degrees and minutes, name its quadrant, and give one positive and one negative angle coterminal with <span class="m c1"><i>θ</i></span>.`,
    lines: [
      { math: `<span class="m">−1030.75° ÷ 360° ≈ −2.86</span>`, note: "The angle is negative, so the ray turns clockwise, a little less than three full turns." },
      { math: `<span class="m"><span class="c1">−1030.75°</span> + <span class="c4">3 · 360°</span> = −1030.75° + 1080° = <span class="c5">49.25°</span></span>`, note: "Adding three revolutions is the first time the result lands in [0°, 360°), so k = 3." },
      { math: `<span class="m">0° &lt; 49.25° &lt; 90°</span>`, note: "The terminal side is in Quadrant I." },
      { math: `<span class="m">0.25° × 60 = 15′ &nbsp;⇒&nbsp; 49.25° = 49° 15′</span>`, note: "Only the decimal part is converted. 15 is a whole number of minutes, so there are no seconds." },
      { math: `<span class="m">49.25° + <span class="c4">360°</span> = 409.25°, &nbsp; 49.25° − <span class="c4">360°</span> = −310.75°</span>`, note: "Any angle 49.25° + 360°k has the same terminal side." }
    ],
    answer: `<span class="m c5">49.25° = 49° 15′</span>, in Quadrant I; for example <span class="m">409.25°</span> and <span class="m">−310.75°</span> are also coterminal with <span class="m">−1030.75°</span>.`
  },
  why: `<p>Rotation is what trigonometry is about. A wheel, a crank, a satellite and an alternating current all turn through angles that keep growing past 360°, and many of them turn both ways. Treating an angle as a signed rotation from a fixed starting ray lets one number describe both how far and which way something has turned.</p>
<p>Coterminal angles are the reason trigonometric functions repeat. Two angles 360° apart put the ray in the same place, so every quantity read from the ray is the same. DMS notation is still the standard on maps, in surveying records and in astronomy, so moving between DMS and decimal degrees is a skill people use every day.</p>`,
  careers: [
    { role: "Land surveyor", use: "Records bearings and turned angles in degrees, minutes and seconds and converts them to decimal degrees for coordinate calculations." },
    { role: "Robotics engineer", use: "Tracks joint angles of a robot arm as signed rotations that can pass 360°, and reduces them to coterminal angles for control." },
    { role: "Airline pilot", use: "Reads headings and turns as angles measured from a reference direction, turning left or right by a given number of degrees." },
    { role: "GIS analyst", use: "Converts latitude and longitude between DMS and decimal degrees when importing survey and GPS data." },
    { role: "Astronomer", use: "Gives positions of stars in degrees, arcminutes and arcseconds, and measures how far a body has turned in its orbit." },
    { role: "Machinist", use: "Sets a rotary table or indexing head to angles such as 22° 30′ to cut evenly spaced features." }
  ],
  life: [
    "GPS coordinates written as 40° 44′ 54″ N or as 40.7484°",
    "A skateboard trick called a 540 is one and a half full turns",
    "A steering wheel that turns more than one full revolution from lock to lock",
    "A clock hand passing the 12 again after each full turn",
    "Turning a screw or a jar lid clockwise to tighten it"
  ],
  fields: [
    { name: "Surveying", use: "Angles are measured and recorded in degrees, minutes and seconds." },
    { name: "Navigation", use: "Latitude, longitude and headings use degrees and their sexagesimal parts." },
    { name: "Mechanical engineering", use: "Shafts, gears and cranks rotate through signed angles that grow past 360°." },
    { name: "Astronomy", use: "Arcminutes and arcseconds measure tiny angles between objects in the sky." }
  ],
  prereqWhy: {
    "g-angle-pairs": "Complementary and supplementary angles, recapped here in DMS, come from the angle pairs studied there.",
    "pa-coordinate": "Standard position is defined on the coordinate plane: the vertex at the origin, the initial side on the positive x-axis, and the four numbered quadrants."
  },
  unlocksWhy: {
    "trig-radians": "Radian measure gives the same rotations a second unit, with one full revolution equal to 2π instead of 360°."
  },
  beyond: [
    { field: "Precalculus", why: "Polar coordinates name a point by a distance and an angle in standard position, and coterminal angles give the same point many names." },
    { field: "Physics (Mechanics)", why: "Angular displacement is a signed rotation that can exceed one revolution, exactly as here." },
    { field: "Navigation/Surveying", why: "Bearings, latitude and longitude are recorded in degrees, minutes and seconds." }
  ],
  mistakes: [
    { wrong: `<span class="m">−60°</span> and <span class="m">60°</span> are coterminal because only the direction differs.`, fix: `<span class="m">−60°</span> turns clockwise and stops in Quadrant IV; it is coterminal with <span class="m">−60° + 360° = 300°</span>, not with <span class="m">60°</span>.` },
    { wrong: `<span class="m">25.5° = 25° 50′</span>`, fix: `The decimal part is a fraction of a degree: <span class="m">0.5 × 60′ = 30′</span>, so <span class="m">25.5° = 25° 30′</span>.` },
    { wrong: `<span class="m">90°</span> is in Quadrant I.`, fix: `Its terminal side lies on the positive <span class="m"><i>y</i></span>-axis. It is a quadrantal angle and is in no quadrant.` },
    { wrong: `<span class="m">1000° − 360° = 640°</span> is the coterminal angle in <span class="m">[0°, 360°)</span>.`, fix: `Keep subtracting until the angle is in range: <span class="m">1000° − 2 · 360° = 280°</span>.` }
  ],
  practice: [
    { q: `Name the quadrant of each angle, or the axis its terminal side lies on: <span class="m">200°</span>, <span class="m">−45°</span>, <span class="m">270°</span>, <span class="m">765°</span>.`,
      a: `<span class="m">200°</span>: Quadrant III. <span class="m">−45° + 360° = 315°</span>: Quadrant IV. <span class="m">270°</span>: quadrantal, on the negative <span class="m"><i>y</i></span>-axis. <span class="m">765° − 2 · 360° = 45°</span>: Quadrant I.` },
    { q: `Write <span class="m">72° 18′ 45″</span> in decimal degrees, and write <span class="m">118.62°</span> in DMS.`,
      a: `<span class="m">72 + 18/60 + 45/3600 = 72 + 0.3 + 0.0125 = 72.3125°</span>. <span class="m">0.62 × 60 = 37.2′</span>, and <span class="m">0.2 × 60 = 12″</span>, so <span class="m">118.62° = 118° 37′ 12″</span>.` },
    { q: `Find the complement and the supplement of <span class="m">34° 51′ 20″</span>.`,
      a: `Write <span class="m">90° = 89° 59′ 60″</span>: the complement is <span class="m">89° 59′ 60″ − 34° 51′ 20″ = 55° 8′ 40″</span>. The supplement is <span class="m">179° 59′ 60″ − 34° 51′ 20″ = 145° 8′ 40″</span>.` },
    { q: `Find every angle coterminal with <span class="m">−135°</span> between <span class="m">−720°</span> and <span class="m">720°</span>. Which one is in <span class="m">[0°, 360°)</span>, and in which quadrant is it?`,
      a: `<span class="m">−135° + 360°<i>k</i></span> for <span class="m"><i>k</i> = −1, 0, 1, 2</span>: <span class="m">−495°, −135°, 225°, 585°</span> (<span class="m"><i>k</i> = −2</span> gives −855° and <span class="m"><i>k</i> = 3</span> gives 945°, both outside). The one in <span class="m">[0°, 360°)</span> is <span class="m">225°</span>, in Quadrant III.` }
  ],
  origin: `The 360-part circle goes back to Babylonian astronomers, who counted in base 60 and divided the zodiac into 12 signs of 30 parts each. Greek astronomers took over the division; Hipparchus (2nd century BCE) used it for the whole circle, and Ptolemy's <i>Almagest</i> (about 150 CE) split each degree into 60 parts and each of those into 60 again. Medieval Latin translations called these <i>partes minutae primae</i> and <i>partes minutae secundae</i>, "first small parts" and "second small parts", which became our minutes and seconds.`
};
