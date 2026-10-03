/* ============ Mathematics: Trigonometry tree ============
   Spec: web/TREE-SPEC-TRIGONOMETRY.md (scope, archetypes, colour keys, writer batches and waves). Pages: web/content/trigonometry/,
   labs: web/labs/trig-<batch>.js, checks: checks/trigonometry/.
   Every node is listed once below. `planned: true` = not written yet (shown dashed). A writer finishing a node deletes
   ", planned: true" from that node's line only (one-line edit, so parallel writers don't collide). */
(function(){
const DB = window.DB;
DB.fields["trigonometry"].status = "charted";
const T = DB.trees["trigonometry"] = {
  eras: [
    { name: "Angles & Right Triangles", from: 0, to: 1 },
    { name: "The Circular Functions", from: 2, to: 4 },
    { name: "Graphs & Inverses", from: 5, to: 7 },
    { name: "Identities", from: 8, to: 10 },
    { name: "Trigonometric Equations", from: 11, to: 12 },
    { name: "Oblique Triangles", from: 13, to: 15 },
    { name: "Vectors", from: 16, to: 17 },
    { name: "Polar Coordinates & Complex Numbers", from: 18, to: 20 }
  ],
  nodes: [
    { id: "trig-angles", label: "Angles in Standard Position", col: 0, row: 1, icon: "∠θ", chips: ["DMS","coterminal","quadrantal"], pre: ["g-angle-pairs","pa-coordinate"] },
    { id: "trig-six-ratios", label: "The Six Trigonometric Ratios & Special Angles", col: 0, row: 4, icon: "csc", chips: ["sec","cot","cofunction"], pre: ["g-trig-ratios","g-special-right"] },
    { id: "trig-radians", label: "Radian Measure, Arc Length & Sector Area", col: 1, row: 1, icon: "rad", chips: ["s = rθ","½r²θ"], pre: ["trig-angles","g-circle-measure"] },
    { id: "trig-angular-speed", label: "Linear & Angular Speed", col: 2, row: 0, icon: "ω", chips: ["v = rω","rpm"], pre: ["trig-radians"] },
    { id: "trig-unit-circle", label: "The Unit Circle", col: 2, row: 2, icon: "(x,y)", chips: ["cos t","sin t","π/6"], pre: ["trig-radians","g-trig-ratios","g-special-right","g-circle-equations"] },
    { id: "trig-any-angle", label: "Trigonometric Functions of Any Angle", col: 3, row: 2, icon: "θ′", chips: ["x, y, r","reference","ASTC"], pre: ["trig-unit-circle","trig-six-ratios"] },
    { id: "trig-fundamental-ids", label: "Fundamental Identities", col: 4, row: 3, icon: "s²+c²", chips: ["reciprocal","even/odd","period"], pre: ["trig-any-angle"] },
    { id: "trig-sin-cos-graphs", label: "Graphs of Sine & Cosine", col: 5, row: 1, icon: "∿", chips: ["period 2π","unwrap"], pre: ["trig-unit-circle"] },
    { id: "trig-sinusoids", label: "Amplitude, Period, Phase Shift & Midline", col: 6, row: 0, icon: "A sin", chips: ["A","B","C","D"], pre: ["trig-sin-cos-graphs","a2-transformations"] },
    { id: "trig-other-graphs", label: "Graphs of Tangent, Cotangent, Secant & Cosecant", col: 6, row: 2, icon: "tan", chips: ["asymptotes","period π"], pre: ["trig-sin-cos-graphs","trig-fundamental-ids","a2-rational-func"] },
    { id: "trig-modeling", label: "Sinusoidal Models & Harmonic Motion", col: 7, row: 0, icon: "y(t)", chips: ["fit","SHM","damped"], pre: ["trig-sinusoids","trig-angular-speed","a2-exp-func"] },
    { id: "trig-inverse", label: "Inverse Trigonometric Functions", col: 7, row: 2, icon: "sin⁻¹", chips: ["restricted","compositions"], pre: ["trig-other-graphs","a2-inverses"] },
    { id: "trig-verify-ids", label: "Verifying Trigonometric Identities", col: 8, row: 3, icon: "≡", chips: ["one side","strategies"], pre: ["trig-fundamental-ids","a1-rational-add"] },
    { id: "trig-sum-difference", label: "Sum & Difference Formulas", col: 9, row: 3, icon: "α±β", chips: ["cos(α−β)","tan(α+β)"], pre: ["trig-verify-ids"] },
    { id: "trig-double-half", label: "Double-Angle, Half-Angle & Power-Reducing Formulas", col: 10, row: 2, icon: "2θ", chips: ["θ/2","power-reduce"], pre: ["trig-sum-difference"] },
    { id: "trig-sum-product", label: "Product-to-Sum & Sum-to-Product Formulas", col: 10, row: 4, icon: "Σ↔Π", chips: ["beats"], pre: ["trig-sum-difference"] },
    { id: "trig-equations", label: "Solving Trigonometric Equations", col: 11, row: 2, icon: "sin x = k", chips: ["[0, 2π)","+2πn","quadratic"], pre: ["trig-inverse","trig-fundamental-ids","a1-quad-factor"] },
    { id: "trig-equations-multi", label: "Equations with Multiple Angles & Identities", col: 12, row: 2, icon: "sin 2x", chips: ["kx","identities"], pre: ["trig-equations","trig-double-half"] },
    { id: "trig-law-sines", label: "The Law of Sines", col: 13, row: 5, icon: "a/sin A", chips: ["AAS","ASA","bearing"], pre: ["trig-any-angle","g-triangle-angles"] },
    { id: "trig-ambiguous", label: "The Ambiguous Case (SSA)", col: 14, row: 4, icon: "SSA", chips: ["0, 1, 2"], pre: ["trig-law-sines"] },
    { id: "trig-law-cosines", label: "The Law of Cosines", col: 14, row: 6, icon: "c²", chips: ["SAS","SSS"], pre: ["trig-law-sines","g-pythagorean"] },
    { id: "trig-triangle-area", label: "Area of a Triangle: SAS & Heron's Formula", col: 15, row: 6, icon: "½ab sin C", chips: ["SAS","Heron"], pre: ["trig-law-cosines","g-area-polygons"] },
    { id: "trig-vectors", label: "Vectors: Magnitude, Direction & Components", col: 16, row: 4, icon: "→v", chips: ["‖v‖","θ","⟨a, b⟩"], pre: ["trig-inverse","trig-any-angle"] },
    { id: "trig-vector-apps", label: "Applications of Vectors", col: 17, row: 3, icon: "ΣF", chips: ["resultant","navigation"], pre: ["trig-vectors","trig-law-cosines"] },
    { id: "trig-dot-product", label: "The Dot Product & Projections", col: 17, row: 5, icon: "u·v", chips: ["angle","proj","work"], pre: ["trig-vectors","trig-law-cosines"] },
    { id: "trig-polar-coords", label: "Polar Coordinates", col: 18, row: 2, icon: "(r,θ)", chips: ["convert","equations"], pre: ["trig-inverse","trig-any-angle"] },
    { id: "trig-polar-graphs", label: "Graphs of Polar Equations", col: 19, row: 1, icon: "✿", chips: ["rose","limaçon","symmetry"], pre: ["trig-polar-coords","trig-sinusoids"] },
    { id: "trig-complex-polar", label: "Complex Numbers in Polar Form", col: 19, row: 3, icon: "r cis θ", chips: ["×","÷","modulus"], pre: ["trig-polar-coords","trig-sum-difference","a2-complex-ops"] },
    { id: "trig-de-moivre", label: "De Moivre's Theorem & Complex Roots", col: 20, row: 3, icon: "zⁿ", chips: ["powers","n roots"], pre: ["trig-complex-polar"] }
  ]
};
T.planned = T.nodes.filter(n => n.planned);
T.nodes = T.nodes.filter(n => !n.planned);
T.planned.forEach(n => { delete n.planned; });
})();
