window.ARITH = window.ARITH || {};

ARITH["g-symmetry"] = {
  title: "Compositions of Transformations & Symmetry",
  short: "Two flips make a slide or a turn",
  grade: "Grade 10 · college-prep Geometry",
  hours: 4,
  voice: "plain",
  eyebrow: "Geometry · transformations",
  hero: `<span class="m"><span class="c3"><i>r</i><sub><i>m</i></sub></span> ∘ <span class="c2"><i>r</i><sub><i>ℓ</i></sub></span> = <span class="c1"><i>R</i><sub><i>O</i>, 2<i>θ</i></sub></span></span>`,
  lede: `Doing one rigid motion after another is a composition. Two reflections always combine into a single translation or rotation, and the motions that carry a figure onto itself are its symmetries.`,
  plain: `<p>Reflect a shape in one mirror, then reflect the result in a second mirror. The flips cancel each other's mirror-image effect, so the final copy faces the same way as the original. If the mirrors are parallel, the copy has simply slid over, by twice the gap between the mirrors. If the mirrors cross, the copy has turned about the crossing point, by twice the angle between the mirrors. Two mirrors set at a right angle give a half turn.</p>
<p>Order matters. Reflecting in the second mirror first sends the copy the opposite way. A <b>glide reflection</b> is a slide along a line followed by a flip in that same line, like footprints in the sand: left, right, left, right.</p>
<p>A figure has a <b>symmetry</b> when some motion lands it exactly on itself. A capital A has a vertical line of symmetry. A pinwheel has rotational symmetry: some turn less than a full turn puts it back on top of itself. A regular hexagon has six lines of symmetry and looks the same after every sixth of a turn.</p>`,
  formal: `<p>The <b>composition</b> <span class="m"><i>g</i> ∘ <i>f</i></span> maps <span class="m"><i>P</i></span> to <span class="m"><i>g</i>(<i>f</i>(<i>P</i>))</span>: apply <span class="m"><i>f</i></span> first. A composition of isometries is an isometry. Write <span class="m"><i>r</i><sub><i>ℓ</i></sub></span> for the reflection in line <span class="m"><i>ℓ</i></span>.</p>
<div class="display"><b>Reflections in Parallel Lines Theorem.</b> If <span class="c2"><i>ℓ</i></span> ∥ <span class="c3"><i>m</i></span> at distance <i>d</i>, then <span class="c3"><i>r</i><sub><i>m</i></sub></span> ∘ <span class="c2"><i>r</i><sub><i>ℓ</i></sub></span> is the <span class="c1">translation by 2<i>d</i></span>, perpendicular to the lines, from <i>ℓ</i> toward <i>m</i>.<br><b>Reflections in Intersecting Lines Theorem.</b> If <span class="c2"><i>ℓ</i></span> and <span class="c3"><i>m</i></span> meet at <i>O</i> and the angle from <i>ℓ</i> to <i>m</i> (counterclockwise) is <i>θ</i>, then <span class="c3"><i>r</i><sub><i>m</i></sub></span> ∘ <span class="c2"><i>r</i><sub><i>ℓ</i></sub></span> is the <span class="c1">rotation about <i>O</i> by 2<i>θ</i></span>.<br><b>Glide reflection:</b> a translation by a nonzero vector parallel to <i>ℓ</i>, then <i>r</i><sub><i>ℓ</i></sub> <span class="dim">(the two commute)</span>.</div>
<p>Every isometry of the plane is the identity, a translation, a rotation, a reflection or a glide reflection, and every isometry is a composition of at most three reflections. A figure <span class="m"><i>F</i></span> has <b>line symmetry</b> in <span class="m"><i>ℓ</i></span> if <span class="m"><i>r</i><sub><i>ℓ</i></sub>(<i>F</i>) = <i>F</i></span>, and <b>rotational symmetry of order <i>n</i></b> if the smallest positive rotation mapping <span class="m"><i>F</i></span> onto itself is <span class="m">360°/<i>n</i></span> with <span class="m"><i>n</i> ≥ 2</span>. Order 2 (a 180° turn) is <b>point symmetry</b>. A regular <span class="m"><i>n</i></span>-gon has exactly <span class="m"><i>n</i></span> lines of symmetry and rotational symmetry of order <span class="m"><i>n</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>ℓ</i>`, name: "First mirror", desc: "The line of the reflection applied first, <i>r</i><sub><i>ℓ</i></sub>." },
    { c: "c3", sym: `<i>m</i>`, name: "Second mirror", desc: "The line of the reflection applied second, <i>r</i><sub><i>m</i></sub>." },
    { c: "c1", sym: `<i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub>`, name: "Resulting motion", desc: "The single motion equal to the composition: a translation by 2<i>d</i> or a rotation by 2<i>θ</i>." },
    { c: "c4", sym: `<i>F</i>`, name: "Figure", desc: "The flag or polygon being moved, or the figure whose symmetries are counted." }
  ],
  steps: { title: "How to identify a composition of two reflections", items: [
    `Read the order: in <span class="m"><i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub></span> the reflection in <span class="m"><i>ℓ</i></span> happens first.`,
    `Decide whether the mirrors are parallel or intersecting.`,
    `Parallel at distance <span class="m"><i>d</i></span>: the result is a translation of length <span class="m">2<i>d</i></span>, perpendicular to the mirrors, in the direction from the first mirror toward the second.`,
    `Intersecting at <span class="m"><i>O</i></span>: measure the angle <span class="m"><i>θ</i></span> from the first mirror to the second. The result is the rotation about <span class="m"><i>O</i></span> by <span class="m">2<i>θ</i></span>, in that same direction.`,
    `Check with one point: reflect it twice by coordinates and compare with the single motion.`
  ] },
  example: {
    prompt: `A designer makes a kaleidoscope tile from two mirrors that meet at the origin <span class="m"><i>O</i></span>: mirror <span class="m"><i>ℓ</i></span> along the x-axis and mirror <span class="m"><i>m</i></span> along <span class="m"><i>y</i> = <i>x</i></span>. A bead sits at <span class="m"><i>P</i>(3, 1)</span>. Find the image of the bead after reflecting in <span class="m"><i>ℓ</i></span> and then in <span class="m"><i>m</i></span>, name the single motion that does the same job, and describe the symmetry of the finished pattern.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>r</i><sub><i>ℓ</i></sub></span>: <i>P</i>(3, 1) ↦ <i>P</i>′(3, −1)</span>`, note: "Reflection in the x-axis: (x, y) ↦ (x, −y)." },
      { math: `<span class="m"><span class="c3"><i>r</i><sub><i>m</i></sub></span>: <i>P</i>′(3, −1) ↦ <i>P</i>″(−1, 3)</span>`, note: "Reflection in y = x swaps the coordinates." },
      { math: `<span class="m"><i>θ</i> = 45° &nbsp;⇒&nbsp; <span class="c1"><i>R</i><sub><i>O</i>, 90°</sub></span>: (3, 1) ↦ (−1, 3) ✓</span>`, note: "Reflections in Intersecting Lines Theorem: the angle from ℓ to m is 45°, so the composition is a 90° rotation about O, rule (x, y) ↦ (−y, x)." },
      { math: `<span class="m"><i>OP</i> = <i>OP</i>″ = √10, &nbsp;(3)(−1) + (1)(3) = 0</span>`, note: "Check: the bead stays √10 from O and OP ⊥ OP″, so the turn really is 90°." },
      { math: `<span class="m">360° ÷ 45° = 8 wedges</span>`, note: "The two mirrors and their images split the tile into 8 congruent wedges, each holding one copy of the bead." },
      { math: `<span class="m">4 lines of symmetry, &nbsp;order 360° ÷ 90° = 4</span>`, note: "The mirror lines lie at 0°, 45°, 90° and 135°; the smallest turn that maps the pattern to itself is 90°." }
    ],
    answer: `The bead lands at <span class="m"><i>P</i>″(−1, 3)</span>, the same place a 90° counterclockwise rotation about <span class="m"><i>O</i></span> sends it. The finished pattern has 4 lines of symmetry and rotational symmetry of order 4.`
  },
  why: `<p>Compositions explain why a short list of motions is enough: any rigid motion of the plane can be built from at most three reflections, and two reflections are always a translation or a rotation. That is how you prove two figures congruent with as few steps as possible, and why kaleidoscopes, mirror rooms and repeating patterns look the way they do.</p>
<p>Symmetry is also a working tool. Chemists classify molecules by their symmetry operations to predict which vibrations show up in an infrared spectrum, crystallographers use the symmetry groups of crystals to solve structures from X-ray data, and designers build repeating prints from one motif and a few motions.</p>`,
  careers: [
    { role: "Textile designer", use: "Builds straight, half-drop and mirror repeats of a single motif so a fabric print tiles seamlessly." },
    { role: "Chemist", use: "Assigns a molecule's point group from its symmetry elements to predict which vibrations are infrared or Raman active." },
    { role: "Crystallographer", use: "Uses a crystal's space group, built from rotations, reflections, glides and translations, to solve its structure from diffraction data." },
    { role: "Logo designer", use: "Tests a mark for line and rotational symmetry so it reads the same when mirrored on signage or turned on a badge." },
    { role: "Architect", use: "Arranges facade and floor-plan elements with mirror symmetry about a central axis or rotational symmetry about a central court." },
    { role: "Tile installer", use: "Lays patterned tiles by turning or flipping each piece so the pattern continues across joints." }
  ],
  life: [
    "Looking into two mirrors set at an angle and counting the copies",
    "Cutting a six-pointed paper snowflake from a folded sheet",
    "Noticing that footprints in sand form a glide reflection",
    "Choosing a wallpaper or fabric whose pattern repeats",
    "Recognising a hubcap or a flower by its rotational symmetry"
  ],
  fields: [
    { name: "Chemistry", use: "Molecular point groups, such as C₂ᵥ for water, organise spectroscopy and bonding." },
    { name: "Crystallography", use: "There are 17 wallpaper groups of plane patterns and 230 space groups of crystals." },
    { name: "Physics", use: "Symmetry under translations and rotations corresponds to conservation of momentum and angular momentum (Noether's theorem)." },
    { name: "Art and design", use: "Islamic tilework and Escher's tessellations are built from translations, rotations, reflections and glides." }
  ],
  prereqWhy: {
    "g-transformations": "You compose translations, reflections and rotations, so you need each one's definition and coordinate rule."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Abstract Algebra", why: "The symmetries of a figure form a group under composition; the regular n-gon gives the dihedral group of order 2n." },
    { field: "Linear Algebra", why: "The product of two reflection matrices is a rotation matrix, the matrix form of the intersecting-mirrors theorem." },
    { field: "Chemistry", why: "Group theory of molecular symmetry predicts spectra and which orbitals can combine." },
    { field: "Physics", why: "Symmetries of a physical system lead to conserved quantities and selection rules." }
  ],
  mistakes: [
    { wrong: `Mirrors 5 units apart move a figure 5 units.`, fix: `The composition of reflections in parallel lines translates by twice the distance: 10 units, perpendicular to the mirrors.` },
    { wrong: `Assuming <span class="m"><i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub> = <i>r</i><sub><i>ℓ</i></sub> ∘ <i>r</i><sub><i>m</i></sub></span>.`, fix: `Reversing the order reverses the motion: the translation goes the other way, or the rotation turns by <span class="m">2<i>θ</i></span> clockwise instead of counterclockwise.` },
    { wrong: `Counting the diagonals of a non-square rectangle as lines of symmetry.`, fix: `Folding along a diagonal does not match the sides. A non-square rectangle has exactly 2 lines of symmetry (through the midpoints of opposite sides) and rotational symmetry of order 2.` },
    { wrong: `Calling any slide-then-flip a glide reflection.`, fix: `In a glide reflection the translation vector is parallel to the mirror line. Otherwise the composition is a different glide reflection in another line, or a reflection.` }
  ],
  practice: [
    { q: `How many lines of symmetry does a regular hexagon have, and what is the order of its rotational symmetry? Does a regular pentagon have point symmetry?`, a: `Hexagon: 6 lines (3 through opposite vertices, 3 through midpoints of opposite sides) and order 6, smallest turn <span class="m">360° ÷ 6 = 60°</span>. Pentagon: order 5 with smallest turn 72°; 180° is not a multiple of 72°, so it has no point symmetry.` },
    { q: `Reflect <span class="m"><i>P</i>(2, 5)</span> in the line <span class="m"><i>x</i> = 1</span> and then in <span class="m"><i>x</i> = 6</span>. What single motion is this? What happens if the order is reversed?`, a: `<span class="m">(2, 5) ↦ (0, 5) ↦ (12, 5)</span>: a translation by <span class="m">⟨10, 0⟩</span>, twice the distance 5 between the lines. Reversed: <span class="m">(2, 5) ↦ (10, 5) ↦ (−8, 5)</span>, a translation by <span class="m">⟨−10, 0⟩</span>.` },
    { q: `Lines <span class="m"><i>ℓ</i></span> and <span class="m"><i>m</i></span> meet at <span class="m"><i>O</i></span>, and the angle from <span class="m"><i>ℓ</i></span> to <span class="m"><i>m</i></span> measured counterclockwise is 35°. Describe <span class="m"><i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub></span> and <span class="m"><i>r</i><sub><i>ℓ</i></sub> ∘ <i>r</i><sub><i>m</i></sub></span>.`, a: `<span class="m"><i>r</i><sub><i>m</i></sub> ∘ <i>r</i><sub><i>ℓ</i></sub></span> is the rotation about <span class="m"><i>O</i></span> by <span class="m">2 × 35° = 70°</span> counterclockwise. <span class="m"><i>r</i><sub><i>ℓ</i></sub> ∘ <i>r</i><sub><i>m</i></sub></span> is the rotation about <span class="m"><i>O</i></span> by 70° clockwise (equivalently 290° counterclockwise).` },
    { q: `A glide reflection in the x-axis maps <span class="m"><i>A</i>(1, 2)</span> to <span class="m"><i>A</i>′(5, −2)</span>. Find its translation vector and the image of <span class="m"><i>B</i>(−3, 4)</span>. What single motion is the glide reflection applied twice?`, a: `The vector must be parallel to the x-axis: <span class="m">(1, 2) ↦ (5, 2) ↦ (5, −2)</span> gives <span class="m">⟨4, 0⟩</span>. <span class="m"><i>B</i> ↦ (1, 4) ↦ (1, −4)</span>. Applied twice, the two flips cancel and the slides add: the translation <span class="m">⟨8, 0⟩</span> (for example <span class="m"><i>A</i> ↦ (9, 2)</span>).` }
  ],
  origin: `The 17 symmetry types of repeating plane patterns, the wallpaper groups, were classified by the Russian crystallographer Evgraf Fedorov in 1891 and found again by George Pólya in 1924. M. C. Escher used Pólya's paper as a guide for his periodic drawings.`
};
