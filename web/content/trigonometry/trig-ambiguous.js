window.ARITH = window.ARITH || {};
ARITH["trig-ambiguous"] = {
  title: "The Ambiguous Case (SSA)",
  short: "Two sides and an opposite angle: 0, 1 or 2 triangles",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Trigonometry · oblique triangles",
  hero: `<span class="m"><span class="c4"><i>h</i></span> = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span>: &nbsp; <span class="c3"><i>a</i></span> &lt; <span class="c4"><i>h</i></span> none · <span class="c3"><i>a</i></span> = <span class="c4"><i>h</i></span> one right · <span class="c4"><i>h</i></span> &lt; <span class="c3"><i>a</i></span> &lt; <span class="c2"><i>b</i></span> <span class="c5">two</span> · <span class="c3"><i>a</i></span> ≥ <span class="c2"><i>b</i></span> one</span>`,
  lede: `When you know two sides and the angle opposite one of them (<b>SSA</b>), the parts may fit no triangle, one triangle or two different triangles. Comparing the side opposite the angle with the height <span class="m"><span class="c4"><i>h</i></span> = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span></span> tells you which.`,
  plain: `<p>Draw the given angle <span class="m"><span class="c1"><i>A</i></span></span> with its two rays. Along one ray, measure side <span class="m"><span class="c2"><i>b</i></span></span> to reach vertex <span class="m"><i>C</i></span>. Side <span class="m"><span class="c3"><i>a</i></span></span> must now reach from <span class="m"><i>C</i></span> to the other ray, where vertex <span class="m"><i>B</i></span> will sit. Picture <span class="m"><span class="c3"><i>a</i></span></span> as the arm of a compass with its point at <span class="m"><i>C</i></span>, swinging an arc.</p>
<p>The shortest distance from <span class="m"><i>C</i></span> to the other ray is the height <span class="m"><span class="c4"><i>h</i></span></span>. If <span class="m"><span class="c3"><i>a</i></span></span> is shorter than <span class="m"><span class="c4"><i>h</i></span></span>, the arc misses the ray: no triangle. If it equals <span class="m"><span class="c4"><i>h</i></span></span>, the arc just touches: one right triangle. If it is longer than <span class="m"><span class="c4"><i>h</i></span></span> but shorter than <span class="m"><span class="c2"><i>b</i></span></span>, the arc cuts the ray twice, both times on the correct side of <span class="m"><span class="c1"><i>A</i></span></span>: two triangles. If it is at least <span class="m"><span class="c2"><i>b</i></span></span>, the second cut falls behind <span class="m"><span class="c1"><i>A</i></span></span>, so only one triangle remains.</p>
<p>The law of sines shows the same thing in numbers. It gives a value of <span class="m">sin <i>B</i></span>, and a sine value between 0 and 1 belongs to two angles, an acute one and its supplement. Each one must be tested.</p>`,
  formal: `<p>Given <span class="m"><span class="c1"><i>A</i></span></span>, the opposite side <span class="m"><span class="c3"><i>a</i></span></span> and a second side <span class="m"><span class="c2"><i>b</i></span></span>, the law of sines gives</p>
<div class="display">sin <i>B</i> = <span class="fr"><span><span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span></span><span><span class="c3"><i>a</i></span></span></span> = <span class="fr"><span><span class="c4"><i>h</i></span></span><span><span class="c3"><i>a</i></span></span></span>, &nbsp;&nbsp; <span class="c5"><i>B</i><sub>1</sub></span> = sin<sup>−1</sup>(<span class="c4"><i>h</i></span>/<span class="c3"><i>a</i></span>), &nbsp; <span class="c5"><i>B</i><sub>2</sub></span> = 180° − <span class="c5"><i>B</i><sub>1</sub></span></div>
<p><b><span class="c1"><i>A</i></span> acute.</b> With the height <span class="m"><span class="c4"><i>h</i></span> = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span></span>:</p>
<div class="display"><span class="c3"><i>a</i></span> &lt; <span class="c4"><i>h</i></span>: &nbsp;sin <i>B</i> &gt; 1, no triangle<br><span class="c3"><i>a</i></span> = <span class="c4"><i>h</i></span>: &nbsp;sin <i>B</i> = 1, <i>B</i> = 90°, one right triangle<br><span class="c4"><i>h</i></span> &lt; <span class="c3"><i>a</i></span> &lt; <span class="c2"><i>b</i></span>: &nbsp;two triangles, with <span class="c5"><i>B</i><sub>1</sub></span> acute and <span class="c5"><i>B</i><sub>2</sub></span> obtuse<br><span class="c3"><i>a</i></span> ≥ <span class="c2"><i>b</i></span>: &nbsp;one triangle (<span class="c1"><i>A</i></span> + <span class="c5"><i>B</i><sub>2</sub></span> ≥ 180°, so <span class="c5"><i>B</i><sub>2</sub></span> fails)</div>
<p><b><span class="c1"><i>A</i></span> obtuse or right.</b> The other two angles must be acute, so <span class="m"><span class="c3"><i>a</i></span></span> must be the longest side: <span class="m"><span class="c3"><i>a</i></span> ≤ <span class="c2"><i>b</i></span></span> gives no triangle and <span class="m"><span class="c3"><i>a</i></span> &gt; <span class="c2"><i>b</i></span></span> gives exactly one, with <span class="m"><i>B</i> = <span class="c5"><i>B</i><sub>1</sub></span></span>.</p>
<p>In every case the test is the same: keep an angle <span class="m"><i>B</i></span> only if <span class="m"><span class="c1"><i>A</i></span> + <i>B</i> &lt; 180°</span>. Each triangle is then finished with <span class="m"><i>C</i> = 180° − <span class="c1"><i>A</i></span> − <i>B</i></span> and <span class="m"><i>c</i> = <span class="c3"><i>a</i></span> sin <i>C</i>/sin <span class="c1"><i>A</i></span></span>. Keep full calculator values until the end; here angles are rounded to the nearest tenth of a degree and sides to the nearest tenth.</p>`,
  legend: [
    { c: "c1", sym: `<i>A</i>`, name: "Given angle", desc: "The angle you know, opposite side a." },
    { c: "c2", sym: `<i>b</i>`, name: "Adjacent side", desc: "The given side that runs along one ray of A, from A to C." },
    { c: "c3", sym: `<i>a</i>`, name: "Swinging side", desc: "The given side opposite A. It swings from C like a compass arm." },
    { c: "c4", sym: `<i>h</i>`, name: "Height", desc: "h = b sin A, the shortest distance from C to the other ray of A." },
    { c: "c5", sym: `<i>B</i><sub>1</sub>, <i>B</i><sub>2</sub>`, name: "Solutions", desc: "The angle B of each triangle that fits, and the parts found from it." }
  ],
  steps: {
    title: "How to solve an SSA triangle",
    items: [
      `Label the parts: <span class="m"><span class="c1"><i>A</i></span></span> is the given angle, <span class="m"><span class="c3"><i>a</i></span></span> the side opposite it, <span class="m"><span class="c2"><i>b</i></span></span> the other given side.`,
      `If <span class="m"><span class="c1"><i>A</i></span></span> is obtuse or right: one triangle when <span class="m"><span class="c3"><i>a</i></span> &gt; <span class="c2"><i>b</i></span></span>, none when <span class="m"><span class="c3"><i>a</i></span> ≤ <span class="c2"><i>b</i></span></span>.`,
      `If <span class="m"><span class="c1"><i>A</i></span></span> is acute, find <span class="m"><span class="c4"><i>h</i></span> = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span></span> and compare: <span class="m"><span class="c3"><i>a</i></span> &lt; <span class="c4"><i>h</i></span></span> none, <span class="m"><span class="c3"><i>a</i></span> = <span class="c4"><i>h</i></span></span> one right triangle, <span class="m"><span class="c4"><i>h</i></span> &lt; <span class="c3"><i>a</i></span> &lt; <span class="c2"><i>b</i></span></span> two, <span class="m"><span class="c3"><i>a</i></span> ≥ <span class="c2"><i>b</i></span></span> one.`,
      `Find <span class="m">sin <i>B</i> = <span class="c2"><i>b</i></span> sin <span class="c1"><i>A</i></span>/<span class="c3"><i>a</i></span></span> and <span class="m"><span class="c5"><i>B</i><sub>1</sub></span> = sin<sup>−1</sup>(sin <i>B</i>)</span>.`,
      `Test <span class="m"><span class="c5"><i>B</i><sub>2</sub></span> = 180° − <span class="c5"><i>B</i><sub>1</sub></span></span>: keep it only if <span class="m"><span class="c1"><i>A</i></span> + <span class="c5"><i>B</i><sub>2</sub></span> &lt; 180°</span>.`,
      `For each triangle kept, find <span class="m"><i>C</i> = 180° − <span class="c1"><i>A</i></span> − <i>B</i></span> and <span class="m"><i>c</i> = <span class="c3"><i>a</i></span> sin <i>C</i>/sin <span class="c1"><i>A</i></span></span>.`
    ]
  },
  example: {
    prompt: `Solve triangle <span class="m"><i>ABC</i></span> with <span class="m"><span class="c1"><i>A</i> = 40°</span></span>, <span class="m"><span class="c3"><i>a</i> = 7</span></span> and <span class="m"><span class="c2"><i>b</i> = 10</span></span>. Round angles to the nearest tenth of a degree and sides to the nearest tenth.`,
    lines: [
      { math: `<span class="m"><span class="c4"><i>h</i></span> = 10 sin 40° ≈ 6.43</span>`, note: "A is acute, so compare a with the height from C." },
      { math: `<span class="m">6.43 &lt; 7 &lt; 10 &nbsp;⇒&nbsp; <span class="c4"><i>h</i></span> &lt; <span class="c3"><i>a</i></span> &lt; <span class="c2"><i>b</i></span></span>`, note: "Side a is longer than the height but shorter than b: expect two triangles." },
      { math: `<span class="m">sin <i>B</i> = 10 sin 40°/7 ≈ 0.9183 &nbsp;⇒&nbsp; <span class="c5"><i>B</i><sub>1</sub> ≈ 66.7°</span></span>`, note: "Law of sines, then the inverse sine gives the acute angle." },
      { math: `<span class="m"><span class="c5"><i>B</i><sub>2</sub></span> ≈ 180° − 66.7° = <span class="c5">113.3°</span>, &nbsp;40° + 113.3° &lt; 180°</span>`, note: "The supplement has the same sine and leaves room for a third angle, so it is kept." },
      { math: `<span class="m"><i>C</i><sub>1</sub> ≈ 73.3°, &nbsp;<i>c</i><sub>1</sub> = 7 sin 73.3°/sin 40° ≈ 10.4</span>`, note: "Triangle 1: angle sum, then the law of sines with the known pair a/sin A." },
      { math: `<span class="m"><i>C</i><sub>2</sub> ≈ 26.7°, &nbsp;<i>c</i><sub>2</sub> = 7 sin 26.7°/sin 40° ≈ 4.9</span>`, note: "Triangle 2 in the same way. Unrounded angles were used in each sine." }
    ],
    answer: `Two triangles: <span class="m"><span class="c5"><i>B</i> ≈ 66.7°</span>, <i>C</i> ≈ 73.3°, <i>c</i> ≈ 10.4</span> and <span class="m"><span class="c5"><i>B</i> ≈ 113.3°</span>, <i>C</i> ≈ 26.7°, <i>c</i> ≈ 4.9</span>.`
  },
  why: `<p>SSA is the case where the given parts do not settle the shape on their own. It comes up whenever one length and one direction are known from one place and a second length from another, as when a ship knows the distance to two landmarks but the angle at only one, or a robot arm knows its two link lengths and must reach a point. The two answers are real: both triangles exist, and the extra information that picks one has to come from somewhere else. Recognising the case before you calculate keeps you from reporting one answer when there are two, or a triangle that cannot exist.</p>`,
  careers: [
    { role: "Land surveyor", use: "Checks whether a boundary given by a bearing and two distances fixes one corner or two possible corners before staking it." },
    { role: "Marine navigator", use: "Knows a bearing to a lighthouse and a radar range to a buoy, and must decide which of two possible positions the ship is in." },
    { role: "Robotics engineer", use: "Solves a two-link arm for a target point and gets elbow-up and elbow-down solutions, the two SSA triangles." },
    { role: "Mechanical engineer", use: "Designs a linkage whose links can assemble in two ways, and checks which configuration the mechanism will take." },
    { role: "Game physics programmer", use: "Intersects a circle with a ray to find whether a moving object hits a sphere zero, one or two times." }
  ],
  life: [
    "A dog on a leash tied to a post can reach a straight fence at two points, at one point, or not at all, depending on the leash",
    "A ladder of fixed length, its top held at one point on a wall, can rest on a sloping driveway at two different places",
    "A sprinkler with a fixed reach wets a straight path between two points, the two places its spray just reaches",
    "On a hiking map, the distance to one landmark and the direction to another can leave two possible positions"
  ],
  fields: [
    { name: "Surveying and navigation", use: "Position fixes from a range and a bearing often give two candidate points, the two SSA triangles." },
    { name: "Robotics", use: "Inverse kinematics of a two-link arm has two solutions, elbow up and elbow down." },
    { name: "Computer graphics", use: "Ray-circle and ray-sphere intersection tests have 0, 1 or 2 hits, the same count as SSA." },
    { name: "Mechanical engineering", use: "Linkages such as the slider-crank have two assembly configurations for the same link lengths." }
  ],
  prereqWhy: {
    "trig-law-sines": "The law of sines gives sin B = b sin A/a, and since sin(180° − B) = sin B, the same value can belong to two angles that must each be tested."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Navigation/Surveying", why: "Resection and range-bearing fixes must resolve the two-point ambiguity with an extra observation." },
    { field: "Engineering", why: "Inverse kinematics of robot arms and the analysis of four-bar linkages meet the same two-solution geometry." },
    { field: "Computer graphics", why: "Ray tracing intersects rays with circles and spheres, where the discriminant decides 0, 1 or 2 hits." }
  ],
  mistakes: [
    { wrong: `Stopping at <span class="m"><i>B</i> = sin<sup>−1</sup>(<i>b</i> sin <i>A</i>/<i>a</i>)</span> and reporting one triangle.`, fix: `The inverse sine gives only the acute angle. Always test <span class="m">180° − <i>B</i></span> as well: with <span class="m"><i>A</i> = 40°</span>, <span class="m"><i>a</i> = 7</span>, <span class="m"><i>b</i> = 10</span> it gives a second triangle with <span class="m"><i>B</i> ≈ 113.3°</span>.` },
    { wrong: `Keeping <span class="m">180° − <i>B</i></span> without testing it: <span class="m"><i>A</i> = 35°</span>, <span class="m"><i>a</i> = 12</span>, <span class="m"><i>b</i> = 9</span> gives <span class="m"><i>B</i> ≈ 25.5°</span> and "also <span class="m">154.5°</span>".`, fix: `<span class="m">35° + 154.5° &gt; 180°</span>, so there is no room for <span class="m"><i>C</i></span>. Here <span class="m"><i>a</i> ≥ <i>b</i></span>, and there is only one triangle.` },
    { wrong: `Deciding from <span class="m"><i>a</i> &lt; <i>b</i></span> alone that there are two triangles.`, fix: `Side <span class="m"><i>a</i></span> must also be longer than <span class="m"><i>h</i> = <i>b</i> sin <i>A</i></span>. With <span class="m"><i>A</i> = 50°</span>, <span class="m"><i>a</i> = 5</span>, <span class="m"><i>b</i> = 8</span>, <span class="m"><i>h</i> ≈ 6.13 &gt; 5</span>: no triangle.` }
  ],
  practice: [
    { q: `How many triangles have <span class="m"><i>A</i> = 30°</span>, <span class="m"><i>a</i> = 4</span>, <span class="m"><i>b</i> = 8</span>? Solve.`, a: `<span class="m"><i>h</i> = 8 sin 30° = 4 = <i>a</i></span>: one right triangle. <span class="m"><i>B</i> = 90°</span>, <span class="m"><i>C</i> = 60°</span>, <span class="m"><i>c</i> = 8 cos 30° = 4√3 ≈ 6.9</span>.` },
    { q: `How many triangles have <span class="m"><i>A</i> = 50°</span>, <span class="m"><i>a</i> = 5</span>, <span class="m"><i>b</i> = 8</span>?`, a: `<span class="m"><i>h</i> = 8 sin 50° ≈ 6.13 &gt; 5</span>, so none. The law of sines agrees: <span class="m">sin <i>B</i> = 8 sin 50°/5 ≈ 1.226 &gt; 1</span>.` },
    { q: `Solve the triangle with <span class="m"><i>A</i> = 110°</span>, <span class="m"><i>a</i> = 15</span>, <span class="m"><i>b</i> = 10</span>.`, a: `<span class="m"><i>A</i></span> is obtuse and <span class="m"><i>a</i> &gt; <i>b</i></span>: one triangle. <span class="m">sin <i>B</i> = 10 sin 110°/15 ≈ 0.6265</span>, <span class="m"><i>B</i> ≈ 38.8°</span>, <span class="m"><i>C</i> ≈ 31.2°</span>, <span class="m"><i>c</i> = 15 sin 31.2°/sin 110° ≈ 8.3</span>.` },
    { q: `Solve every triangle with <span class="m"><i>A</i> = 30°</span>, <span class="m"><i>a</i> = 6</span>, <span class="m"><i>b</i> = 10</span>.`, a: `<span class="m"><i>h</i> = 10 sin 30° = 5 &lt; 6 &lt; 10</span>: two triangles. <span class="m">sin <i>B</i> = 5/6</span>. Triangle 1: <span class="m"><i>B</i> ≈ 56.4°</span>, <span class="m"><i>C</i> ≈ 93.6°</span>, <span class="m"><i>c</i> ≈ 12.0</span>. Triangle 2: <span class="m"><i>B</i> ≈ 123.6°</span>, <span class="m"><i>C</i> ≈ 26.4°</span>, <span class="m"><i>c</i> ≈ 5.3</span>.` }
  ]
};
