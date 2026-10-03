window.ARITH = window.ARITH || {};
ARITH["trig-triangle-area"] = {
  title: "Area of a Triangle: SAS & Heron's Formula",
  short: "K = ½ab sin C and Heron's √(s(s − a)(s − b)(s − c))",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Trigonometry · oblique triangles",
  hero: `<span class="m"><span class="c5"><i>K</i></span> = ½<span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> sin <span class="c1"><i>C</i></span> &nbsp; &nbsp; <span class="c5"><i>K</i></span> = √<span class="ov"><i>s</i>(<i>s</i> − <i>a</i>)(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)</span></span>`,
  lede: `Half of base times height still gives the area of every triangle; trigonometry finds the height for you. With two sides and the angle between them, the area is <span class="m">½<i>ab</i> sin <i>C</i></span>. With three sides, Heron's formula gives it with no angle at all.`,
  plain: `<p>The area of a triangle is half the base times the height. The trouble in an oblique triangle is that the height is rarely given. If you know two sides and the angle between them, the height comes from sine: the side <span class="m"><i>b</i></span> leans at angle <span class="m"><i>C</i></span> over the base <span class="m"><i>a</i></span>, so it rises <span class="m"><i>b</i> sin <i>C</i></span> above it.</p>
<p>That gives <span class="m">½ · <i>a</i> · <i>b</i> sin <i>C</i></span>. With the two sides fixed, the area is largest when the angle between them is 90°, since sin 90° = 1. Opening the angle further makes the triangle flatter again, and at 180° it has no area at all.</p>
<p>If you know all three sides, you could find an angle with the law of cosines and then use the sine formula. Heron's formula does both steps at once. Add the sides and halve the total to get the <b>semiperimeter</b> <span class="m"><i>s</i></span>; subtract each side from <span class="m"><i>s</i></span>; multiply <span class="m"><i>s</i></span> by the three differences; take the square root.</p>
<p>This page writes the area as <span class="m"><i>K</i></span> so that it is not confused with the angle <span class="m"><i>A</i></span>.</p>`,
  formal: `<p><b>SAS area.</b> In triangle <span class="m"><i>ABC</i></span> with the usual labels, the area <span class="m c5"><i>K</i></span> is half the product of any two sides and the sine of the angle between them:</p>
<div class="display"><span class="c5"><i>K</i></span> = ½<span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> sin <span class="c1"><i>C</i></span> = ½<i>bc</i> sin <i>A</i> = ½<i>ac</i> sin <i>B</i></div>
<p><b>Proof.</b> Take side <span class="m c2"><i>a</i></span> = <span class="m"><i>CB</i></span> as the base and let <span class="m c4"><i>h</i></span> be the altitude from <span class="m"><i>A</i></span> to the line <span class="m"><i>CB</i></span>. If <span class="m c1"><i>C</i></span> is acute, the right triangle formed with side <span class="m c3"><i>b</i></span> gives <span class="m"><span class="c4"><i>h</i></span> = <span class="c3"><i>b</i></span> sin <span class="c1"><i>C</i></span></span>. If <span class="m c1"><i>C</i></span> is obtuse, the foot of the altitude lies on the extension of <span class="m"><i>BC</i></span> beyond <span class="m"><i>C</i></span>, and <span class="m"><span class="c4"><i>h</i></span> = <span class="c3"><i>b</i></span> sin(180° − <span class="c1"><i>C</i></span>) = <span class="c3"><i>b</i></span> sin <span class="c1"><i>C</i></span></span>; if <span class="m"><i>C</i> = 90°</span>, <span class="m"><i>h</i> = <i>b</i></span>. So <span class="m"><span class="c5"><i>K</i></span> = ½ · <span class="c2"><i>a</i></span> · <span class="c4"><i>h</i></span> = ½<span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> sin <span class="c1"><i>C</i></span></span>. For fixed <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> the area is greatest, <span class="m">½<i>ab</i></span>, at <span class="m"><i>C</i> = 90°</span>.</p>
<p><b>Heron's formula.</b> With semiperimeter <span class="m"><i>s</i> = (<i>a</i> + <i>b</i> + <i>c</i>)/2</span>,</p>
<div class="display"><span class="c5"><i>K</i></span> = √<span class="ov"><i>s</i>(<i>s</i> − <i>a</i>)(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)</span></div>
<p><b>Proof sketch.</b> Square the SAS formula and use <span class="m">sin<sup>2</sup> <i>C</i> = 1 − cos<sup>2</sup> <i>C</i></span> with <span class="m">2<i>ab</i> cos <i>C</i> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup></span> from the law of cosines: <span class="m">16<i>K</i><sup>2</sup> = 4<i>a</i><sup>2</sup><i>b</i><sup>2</sup> − (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>)<sup>2</sup></span>. A difference of squares, twice, factors this as <span class="m">(<i>a</i> + <i>b</i> + <i>c</i>)(−<i>a</i> + <i>b</i> + <i>c</i>)(<i>a</i> − <i>b</i> + <i>c</i>)(<i>a</i> + <i>b</i> − <i>c</i>) = 2<i>s</i> · 2(<i>s</i> − <i>a</i>) · 2(<i>s</i> − <i>b</i>) · 2(<i>s</i> − <i>c</i>)</span>. Divide by 16 and take the square root. The three differences are positive exactly when the sides satisfy the triangle inequality.</p>
<p><b>AAS or ASA.</b> Use the law of sines to find a second side, then the SAS formula; in one step, <span class="m"><i>K</i> = <i>c</i><sup>2</sup> sin <i>A</i> sin <i>B</i> / (2 sin <i>C</i>)</span>. Areas here are rounded to the nearest tenth of a square unit at the end, from unrounded intermediate values.</p>`,
  legend: [
    { c: "c1", sym: "<i>C</i>", name: "Included angle", desc: "The angle between the two known sides." },
    { c: "c2", sym: "<i>a</i>", name: "Side a (base)", desc: "One known side, used as the base." },
    { c: "c3", sym: "<i>b</i>", name: "Side b", desc: "The other known side; it leans over the base at angle C." },
    { c: "c4", sym: "<i>h</i>", name: "Height", desc: "The altitude to the base, h = b sin C." },
    { c: "c5", sym: "<i>K</i>", name: "Area", desc: "Half base times height: ½ab sin C, or Heron's formula from three sides." }
  ],
  steps: {
    title: "How to find the area of a triangle",
    items: [
      "Name what is given: two sides and the included angle (SAS), three sides (SSS), or two angles and a side (AAS/ASA).",
      "SAS: multiply the two sides by the sine of the angle between them and halve: <span class=\"m\"><i>K</i> = ½<i>ab</i> sin <i>C</i></span>.",
      "SSS: check the triangle inequality, compute <span class=\"m\"><i>s</i> = (<i>a</i> + <i>b</i> + <i>c</i>)/2</span> and the three differences <span class=\"m\"><i>s</i> − <i>a</i></span>, <span class=\"m\"><i>s</i> − <i>b</i></span>, <span class=\"m\"><i>s</i> − <i>c</i></span>.",
      "Multiply <span class=\"m\"><i>s</i>(<i>s</i> − <i>a</i>)(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)</span> and take the square root.",
      "AAS/ASA: find the third angle, then a second side with the law of sines, then use the SAS formula with the angle between the two sides.",
      "For a polygon, split it into triangles along diagonals and add their areas."
    ]
  },
  example: {
    prompt: `A triangular plot of land has sides 120 m, 150 m and 210 m. Find its area exactly and to the nearest tenth of a square metre, then check the answer with <span class="m">½<i>ab</i> sin <i>C</i></span>.`,
    lines: [
      { math: `<span class="m"><i>s</i> = (120 + 150 + 210)/2 = 240</span>`, note: "The semiperimeter. Each side is less than s, so the triangle inequality holds." },
      { math: `<span class="m"><i>s</i> − <i>a</i> = 120, &nbsp; <i>s</i> − <i>b</i> = 90, &nbsp; <i>s</i> − <i>c</i> = 30</span>`, note: "Subtract each side from s, with a = 120, b = 150, c = 210." },
      { math: `<span class="m"><span class="c5"><i>K</i></span> = √<span class="ov">240 · 120 · 90 · 30</span> = √<span class="ov">77 760 000</span></span>`, note: "Heron's formula." },
      { math: `<span class="m"><span class="c5"><i>K</i></span> = 3600√6 ≈ <span class="c5">8818.2</span> m<sup>2</sup></span>`, note: "77 760 000 = 3600² × 6." },
      { math: `<span class="m">cos <span class="c1"><i>C</i></span> = <span class="fr"><span>120<sup>2</sup> + 150<sup>2</sup> − 210<sup>2</sup></span><span>2 · 120 · 150</span></span> = −<span class="fr"><span>1</span><span>5</span></span></span>`, note: "Check by another route: the law of cosines gives the angle opposite the longest side. It is obtuse." },
      { math: `<span class="m">sin <span class="c1"><i>C</i></span> = <span class="fr"><span>2√6</span><span>5</span></span>, &nbsp; ½ · 120 · 150 · <span class="fr"><span>2√6</span><span>5</span></span> = 3600√6</span>`, note: "sin C = √(1 − 1/25), positive because 0° < C < 180°. Both routes agree." }
    ],
    answer: `The plot has area <span class="m c5">3600√6 ≈ 8818.2</span> m<sup>2</sup>.`
  },
  why: `<p>Areas of fields, sails, roof sections and mesh triangles are rarely given with a height. They come with lengths and angles that someone measured, and these two formulas turn those measurements into area directly. Heron's formula is especially useful because tape-measure lengths are easier to take accurately than angles.</p>
<p>The sine formula also shows how area depends on shape: two fixed sides enclose the most area at a right angle. The same expression, ½|u||v| sin θ, is half the magnitude of a cross product, which is how computer graphics and physics compute areas and torques.</p>`,
  careers: [
    { role: "Land surveyor", use: "Computes the acreage of an irregular parcel by splitting it into triangles and applying Heron's formula to measured sides." },
    { role: "Sailmaker", use: "Finds the area of a triangular sail from its luff, leech and foot lengths to price cloth and rate its power." },
    { role: "Roofer", use: "Estimates shingles for hip and gable sections, which are triangles given by edge lengths and pitch angles." },
    { role: "Game and graphics programmer", use: "Uses triangle areas from the cross product for lighting, collision and barycentric interpolation across mesh faces." },
    { role: "Real estate appraiser", use: "Checks the stated area of an odd-shaped lot from the lengths on the plat." },
    { role: "Civil engineer", use: "Computes cross-sectional areas of embankments and channels for earthwork volumes." }
  ],
  life: [
    "Finding the area of a triangular garden bed from three tape-measure lengths",
    "Working out how much fabric a triangular shade sail needs",
    "Measuring the area of an odd-shaped room by splitting it into triangles",
    "Two fixed boards hinged at one corner enclose the most area when the angle between them is a right angle",
    "Estimating paint for a gable end of a house"
  ],
  fields: [
    { name: "Surveying", use: "Areas of parcels from measured boundary lengths and diagonals." },
    { name: "Computer graphics", use: "Triangle areas from cross products for shading and hit tests." },
    { name: "Physics", use: "Torque and the magnitude of a cross product, |u||v| sin θ." },
    { name: "Engineering", use: "Cross-sections, trusses and finite-element meshes built from triangles." }
  ],
  prereqWhy: {
    "trig-law-cosines": "Heron's formula is proved by squaring the SAS area and replacing cos C with its law-of-cosines value; SSS areas can also go through the law of cosines.",
    "g-area-polygons": "Area as half base times height, and splitting a polygon into triangles, are the starting points for both formulas."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus III", why: "The area of a triangle in space is half the magnitude of the cross product, ½|u × v| = ½|u||v| sin θ." },
    { field: "Linear Algebra", why: "Signed area of a triangle with given vertices is half a 2 × 2 determinant." },
    { field: "Computer graphics", why: "Barycentric coordinates are ratios of triangle areas, used to interpolate colours and textures." },
    { field: "Navigation/Surveying", why: "Parcel areas from traverses and the shoelace formula, checked by triangulation." }
  ],
  mistakes: [
    { wrong: `Using an angle that is not between the two sides, as in <span class="m">½<i>ab</i> sin <i>A</i></span>`, fix: `The angle must be the one formed by the two sides you multiply: <span class="m">½<i>ab</i> sin <i>C</i></span>, <span class="m">½<i>bc</i> sin <i>A</i></span>, <span class="m">½<i>ac</i> sin <i>B</i></span>.` },
    { wrong: `Using the perimeter instead of the semiperimeter in Heron's formula`, fix: `<span class="m"><i>s</i></span> is half the perimeter. With the full perimeter the differences are wrong and the product is far too large.` },
    { wrong: `Getting a negative number under the root and taking the square root of its absolute value`, fix: `A negative or zero product means the sides fail the triangle inequality: no triangle exists.` },
    { wrong: `Rounding a side found by the law of sines before computing the area`, fix: `Keep the unrounded side in the calculator and round only the final area.` }
  ],
  practice: [
    { q: `Find the area of a triangle with <span class="m"><i>a</i> = 8</span>, <span class="m"><i>b</i> = 11</span> and <span class="m"><i>C</i> = 40°</span>, to the nearest tenth.`, a: `<span class="m"><i>K</i> = ½(8)(11) sin 40° = 44 sin 40° ≈ 28.3</span> square units.` },
    { q: `Find the exact area of a triangle with sides 5, 6 and 7, then round to the nearest tenth.`, a: `<span class="m"><i>s</i> = 9</span>; differences 4, 3, 2. <span class="m"><i>K</i> = √<span class="ov">9 · 4 · 3 · 2</span> = √216 = 6√6 ≈ 14.7</span>.` },
    { q: `In triangle <span class="m"><i>ABC</i></span>, <span class="m"><i>A</i> = 48°</span>, <span class="m"><i>B</i> = 57°</span> and <span class="m"><i>c</i> = 12</span>. Find the area to the nearest tenth.`, a: `<span class="m"><i>C</i> = 75°</span>. Law of sines: <span class="m"><i>a</i> = 12 sin 48°/sin 75° ≈ 9.23</span>. Then <span class="m"><i>K</i> = ½ · <i>a</i> · 12 · sin 57° ≈ 46.5</span> square units (with the unrounded <span class="m"><i>a</i></span>).` },
    { q: `A four-sided field <span class="m"><i>ABCD</i></span> has <span class="m"><i>AB</i> = 40</span> m, <span class="m"><i>BC</i> = 55</span> m, <span class="m"><i>CD</i> = 30</span> m, <span class="m"><i>DA</i> = 45</span> m, and the diagonal <span class="m"><i>AC</i> = 60</span> m splits it into two triangles. Find its area to the nearest tenth of a square metre.`, a: `Triangle <span class="m"><i>ABC</i></span>: <span class="m"><i>s</i> = 77.5</span>, <span class="m"><i>K</i><sub>1</sub> = √<span class="ov">77.5 · 37.5 · 22.5 · 17.5</span> ≈ 1069.7</span>. Triangle <span class="m"><i>ACD</i></span>: <span class="m"><i>s</i> = 67.5</span>, <span class="m"><i>K</i><sub>2</sub> = √<span class="ov">67.5 · 7.5 · 37.5 · 22.5</span> ≈ 653.6</span>. Total <span class="m">≈ 1723.3</span> m<sup>2</sup>.` }
  ],
  origin: `Heron of Alexandria proved the three-side formula in his Metrica (1st century CE), a handbook of measurement for surveyors and builders; some later writers, including al-Biruni, credited the formula to Archimedes, who lived about three centuries earlier.`
};
