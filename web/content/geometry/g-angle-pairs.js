window.ARITH = window.ARITH || {};

ARITH["g-angle-pairs"] = {
  title: "Angle Pair Relationships",
  short: "Complementary, supplementary, linear pairs, vertical angles",
  grade: "Grade 10 · college-prep Geometry",
  hours: 3,
  voice: "plain",
  eyebrow: "Geometry · angle relationships",
  hero: `<span class="m"><span class="c2">m∠1</span> + <span class="c3">m∠2</span> = <span class="c1">180°</span> &nbsp;&nbsp;&nbsp; <span class="c2">∠1</span> ≅ <span class="c4">∠3</span></span>`,
  lede: `When two lines cross they make four angles. Neighbours always add to 180°, and opposite angles are always equal. Those two facts, plus the definitions of complementary and supplementary, solve most angle problems.`,
  plain: `<p>Two angles are <b>complementary</b> if their measures add to 90°, like the two parts of a square corner. They are <b>supplementary</b> if their measures add to 180°, like the two parts of a straight line. The angles do not have to touch: a 30° angle on one page and a 60° angle on another are still complementary.</p>
<p><b>Adjacent</b> angles share a vertex and a side and do not overlap. If the two outer sides of adjacent angles form a straight line, the angles are a <b>linear pair</b>, and a linear pair always adds to 180°.</p>
<p>Where two lines cross, the angles across from each other are <b>vertical angles</b>. They are always equal. The reason is short: each of them makes a linear pair with the same neighbouring angle, so each equals 180° minus that neighbour.</p>`,
  formal: `<p><b>Definitions.</b> Two angles are <b>complementary</b> if their measures sum to 90° and <b>supplementary</b> if they sum to 180°. <b>Adjacent angles</b> are two coplanar angles with a common vertex and a common side and no common interior points. A <b>linear pair</b> is a pair of adjacent angles whose noncommon sides are opposite rays. <b>Vertical angles</b> are two angles whose sides form two pairs of opposite rays.</p>
<div class="display">Linear Pair Postulate: if two angles form a linear pair, then they are supplementary.<br>Vertical Angles Theorem: vertical angles are congruent.<br>Congruent Supplements (Complements) Theorem: if two angles are supplementary (complementary) to the same angle or to congruent angles, then they are congruent.</div>
<p>Proof of the Vertical Angles Theorem. Given: lines intersect so that ∠1 and ∠3 are vertical angles and ∠2 is adjacent to both.</p>
<table class="proof"><tr><th>Statement</th><th>Reason</th></tr>
<tr><td>∠1 and ∠2 form a linear pair; ∠2 and ∠3 form a linear pair</td><td>Definition of linear pair</td></tr>
<tr><td>m∠1 + m∠2 = 180°, m∠2 + m∠3 = 180°</td><td>Linear Pair Postulate</td></tr>
<tr><td>m∠1 + m∠2 = m∠2 + m∠3</td><td>Substitution (both equal 180°)</td></tr>
<tr><td>m∠1 = m∠3</td><td>Subtraction Property of Equality</td></tr>
<tr><td>∠1 ≅ ∠3</td><td>Definition of congruent angles</td></tr></table>
<p>The converses are false: supplementary angles need not be adjacent, and congruent angles need not be vertical.</p>`,
  legend: [
    { c: "c2", sym: `∠1`, name: "Angle 1", desc: "The angle you start from, here one of the four angles where two lines cross." },
    { c: "c3", sym: `∠2`, name: "Angle 2", desc: "Its neighbour: adjacent to ∠1 and forming a linear pair (or a complementary pair) with it." },
    { c: "c1", sym: `180° or 90°`, name: "Sum", desc: "What the pair adds to: 180° for supplementary angles and linear pairs, 90° for complementary angles." },
    { c: "c4", sym: `∠3`, name: "Vertical partner", desc: "The angle across the vertex from ∠1. By the Vertical Angles Theorem it is congruent to ∠1." }
  ],
  steps: { title: "How to solve an angle-pair problem", items: [
    `Identify the relationship from the figure: vertical angles, a linear pair, or a pair marked complementary or supplementary.`,
    `Write the matching equation: vertical angles are equal; a linear pair or supplementary pair sums to 180°; a complementary pair sums to 90°.`,
    `Substitute the expressions and solve the linear equation for the variable.`,
    `Substitute the value back to get each angle measure, with the degree sign.`,
    `Check: every angle measure is positive and less than 180°, and the relationship holds with the numbers.`
  ] },
  example: {
    prompt: `Two straight beams of a scissor truss cross at point <i>O</i>. The angle between them at the top measures <span class="m">(3<i>x</i> + 10)°</span> and the angle at the bottom, across the crossing, measures <span class="m">(5<i>x</i> − 30)°</span>. Find all four angles at the crossing.`,
    lines: [
      { math: `<span class="m"><span class="c2">3<i>x</i> + 10</span> = <span class="c4">5<i>x</i> − 30</span></span>`, note: "The top and bottom angles are vertical angles, so they are congruent (Vertical Angles Theorem)." },
      { math: `<span class="m">40 = 2<i>x</i> &nbsp;→&nbsp; <i>x</i> = 20</span>`, note: "Subtract 3x from both sides, add 30, divide by 2." },
      { math: `<span class="m"><span class="c2">3(20) + 10 = 70°</span>, &nbsp; <span class="c4">5(20) − 30 = 70°</span></span>`, note: "Both vertical angles measure 70°." },
      { math: `<span class="m"><span class="c3">m∠2</span> = <span class="c1">180°</span> − 70° = 110°</span>`, note: "Each side angle forms a linear pair with the top angle (Linear Pair Postulate)." },
      { math: `<span class="m">70° + 110° + 70° + 110° = 360° ✓</span>`, note: "Check: the four angles around a point fill a full turn, and the two 110° angles are vertical, so equal." }
    ],
    answer: `The top and bottom angles each measure <span class="m">70°</span> and the two side angles each measure <span class="m">110°</span>.`
  },
  why: `<p>Wherever straight members cross, as in trusses, scissor lifts, road intersections and the crossed threads of a sight, the angle-pair facts let you find every angle from one measurement. Carpenters and fabricators use them to set the second cut once the first is known.</p>
<p>In the course, the Vertical Angles Theorem is the first real proof, and the linear-pair and congruent-supplements reasoning is used again in parallel lines, triangle angle sums and polygons.</p>`,
  careers: [
    { role: "Structural engineer", use: "Finds the angles between crossing truss members from one measured angle to design the gusset plates at the joint." },
    { role: "Carpenter", use: "Cuts the second piece of a joint at the supplement of the first angle so the pieces meet along a straight line." },
    { role: "Traffic engineer", use: "Uses the four angles at a skewed intersection, two pairs of vertical angles, to plan turning lanes and sight lines." },
    { role: "Optical engineer", use: "Uses complementary angles between a ray and a surface (90° minus the angle of incidence) when tracing light through mirrors and prisms." },
    { role: "Welder and fabricator", use: "Sets the bevel on crossing steel members using supplementary angles to the measured crossing." }
  ],
  life: [
    "Checking that scissors open symmetrically at the pivot",
    "Seeing that the opposite angles of an X-shaped sawhorse are equal",
    "Finding the angle a ramp makes with the ground from the angle it makes with a wall",
    "Reading the angles at a street crossing on a map",
    "Folding a sheet of paper so the two parts of a straight edge add to 180°"
  ],
  fields: [
    { name: "Structural engineering", use: "Joint geometry of trusses and bracing is solved with vertical angles and linear pairs." },
    { name: "Optics", use: "Angles of incidence and reflection are measured from the normal, so their complements with the surface appear constantly." },
    { name: "Surveying", use: "Angles turned at a station are checked by supplementary and full-turn sums." },
    { name: "Architecture", use: "Plan angles at crossing walls and beams are found from one measured angle." }
  ],
  prereqWhy: {
    "g-angles": "Every relationship here is a sum or equality of angle measures, built on the Protractor and Angle Addition Postulates.",
    "a1-multi-step": "Angle-pair problems become linear equations with variables on both sides, such as 3x + 10 = 5x − 30."
  },
  unlocksWhy: {
    "g-parallel": "Angles formed by a transversal are sorted into pairs, and linear pairs and vertical angles connect the eight angles to each other."
  },
  beyond: [
    { field: "Trigonometry", why: "Cofunction identities such as sin(90° − θ) = cos θ are statements about complementary angles." },
    { field: "Physics", why: "Reflection, refraction and inclined-plane problems switch between an angle and its complement with the surface or the normal." },
    { field: "Precalculus", why: "Reference angles and supplementary angles explain why sin(180° − θ) = sin θ." }
  ],
  mistakes: [
    { wrong: `Mixing the words: "complementary means they add to 180°."`, fix: `Complementary adds to <b>90°</b>, supplementary to <b>180°</b>. One way to remember it: c comes before s, and 90 before 180.` },
    { wrong: `Assuming two supplementary angles must form a linear pair.`, fix: `A linear pair is supplementary, but the converse is false. Two separate angles of 100° and 80° are supplementary without being adjacent.` },
    { wrong: `Calling any two congruent angles vertical angles.`, fix: `Vertical angles must have sides forming two pairs of opposite rays. Congruent angles in different places are just congruent.` },
    { wrong: `Stopping at <span class="m"><i>x</i> = 20</span>.`, fix: `The question asks for angles. Substitute back: <span class="m">3(20) + 10 = 70°</span>, then find the linear-pair partner <span class="m">110°</span>.` }
  ],
  practice: [
    { q: `Find the complement and the supplement of a 38° angle. Then do the same for a 112° angle.`, a: `38°: complement <span class="m">52°</span>, supplement <span class="m">142°</span>. 112°: no complement, since <span class="m">90° − 112°</span> is negative; supplement <span class="m">68°</span>.` },
    { q: `∠<i>A</i> and ∠<i>B</i> are complementary, with <span class="m">m∠<i>A</i> = (2<i>x</i> + 8)°</span> and <span class="m">m∠<i>B</i> = (4<i>x</i> − 2)°</span>. Find both measures.`, a: `<span class="m">6<i>x</i> + 6 = 90</span>, so <span class="m"><i>x</i> = 14</span>. <span class="m">m∠<i>A</i> = 36°</span> and <span class="m">m∠<i>B</i> = 54°</span>; check <span class="m">36° + 54° = 90°</span> ✓.` },
    { q: `∠1 and ∠2 form a linear pair, with <span class="m">m∠1 = (7<i>x</i> − 4)°</span> and <span class="m">m∠2 = (3<i>x</i> + 24)°</span>. Find both, and the measure of the angle vertical to ∠1.`, a: `Linear Pair Postulate: <span class="m">10<i>x</i> + 20 = 180</span>, so <span class="m"><i>x</i> = 16</span>. <span class="m">m∠1 = 108°</span>, <span class="m">m∠2 = 72°</span>. The vertical angle to ∠1 also measures <span class="m">108°</span> (Vertical Angles Theorem).` },
    { q: `The supplement of an angle is four times its complement. Find the angle.`, a: `Let the angle be <span class="m"><i>x</i>°</span> with <span class="m">0 &lt; <i>x</i> &lt; 90</span>. Then <span class="m">180 − <i>x</i> = 4(90 − <i>x</i>)</span>, so <span class="m">3<i>x</i> = 180</span> and <span class="m"><i>x</i> = 60</span>. Check: supplement <span class="m">120°</span> = 4 × complement <span class="m">30°</span> ✓.` }
  ],
  origin: `Proclus, writing in the 5th century CE and citing Eudemus, credits Thales of Miletus (6th century BCE) with discovering that vertical angles are equal. Euclid proved it as Proposition 15 of Book I of the <i>Elements</i> (about 300 BCE).`
};
