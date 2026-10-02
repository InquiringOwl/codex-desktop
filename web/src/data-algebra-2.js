/* ============ Mathematics: Algebra II tree ============
   Spec: web/TREE-SPEC-ALGEBRA2.md (titles, archetypes, colour keys, writer batches). Pages: web/content/algebra-2/,
   labs: web/labs/a2-<batch>.js, checks: checks/algebra-2/.
   Every node is listed once below. `planned: true` = not written yet (shown dashed). A writer finishing a node deletes
   ", planned: true" from that node's line only (one-line edit, so parallel writers don't collide). */
(function(){
const DB = window.DB;
DB.fields["algebra-2"].status = "charted";
const T = DB.trees["algebra-2"] = {
  eras: [
    { name: "Functions", from: 0, to: 1 },
    { name: "Complex Numbers", from: 2, to: 4 },
    { name: "Polynomial Functions", from: 5, to: 7 },
    { name: "Rational & Radical Functions", from: 8, to: 10 },
    { name: "Exponential & Logarithmic Functions", from: 11, to: 15 },
    { name: "Sequences & Series", from: 16, to: 17 },
    { name: "Conic Sections", from: 18, to: 20 }
  ],
  nodes: [
    { id: "a2-func-ops", label: "Function Operations & Composition", col: 0, row: 0, icon: "f∘g", chips: ["f+g","f·g","f(g(x))"], pre: ["a1-functions","a1-poly-mult"] },
    { id: "a2-transformations", label: "Transformations of Functions", col: 0, row: 2, icon: "f(x−h)", chips: ["shift","stretch","reflect"], pre: ["a1-quad-graphs","a1-piecewise","g-transformations"] },
    { id: "a2-sys-three", label: "Linear Systems in Three Variables", col: 0, row: 5, icon: "x,y,z", chips: ["3 planes","elim"], pre: ["a1-sys-elim"] },
    { id: "a2-inverses", label: "Inverse Functions", col: 1, row: 0, icon: "f⁻¹", chips: ["one-to-one","y = x"], pre: ["a2-func-ops","a1-literal"] },
    { id: "a2-quad-vertex", label: "Quadratic Functions in Vertex Form", col: 1, row: 2, icon: "(x−h)²", chips: ["CTS","max/min"], pre: ["a2-transformations","a1-quad-sqrt"] },
    { id: "a2-quad-form-eq", label: "Equations in Quadratic Form", col: 1, row: 4, icon: "u = x²", chips: ["x⁴","u-sub"], pre: ["a1-quad-factor","a1-quad-formula"] },
    { id: "a2-complex", label: "Complex Numbers & the Imaginary Unit", col: 2, row: 4, icon: "i", chips: ["i² = −1","a + bi"], pre: ["a1-radical-ops"] },
    { id: "a2-complex-ops", label: "Complex Arithmetic & Conjugates", col: 3, row: 4, icon: "z·z̄", chips: ["×","÷","conj"], pre: ["a2-complex","a1-poly-mult"] },
    { id: "a2-quad-complex", label: "Quadratics with Complex Solutions", col: 4, row: 4, icon: "Δ<0", chips: ["b²−4ac","p ± qi"], pre: ["a2-complex-ops","a1-quad-formula"] },
    { id: "a2-poly-graphs", label: "Polynomial Functions & End Behavior", col: 5, row: 1, icon: "xⁿ", chips: ["degree","ends","turns"], pre: ["a2-transformations","a1-poly-mult"] },
    { id: "a2-synthetic", label: "Synthetic Division & the Remainder Theorem", col: 5, row: 3, icon: "⌐÷", chips: ["P(r) = R"], pre: ["a1-poly-div"] },
    { id: "a2-zeros-mult", label: "Zeros, Multiplicity & Graphing Polynomials", col: 6, row: 1, icon: "(x−r)ᵐ", chips: ["cross","touch"], pre: ["a2-poly-graphs","a1-quad-factor"] },
    { id: "a2-factor-theorem", label: "Factor Theorem & Rational Root Theorem", col: 6, row: 3, icon: "±p/q", chips: ["P(r) = 0","p/q"], pre: ["a2-synthetic","a1-factor-tri"] },
    { id: "a2-poly-ineq", label: "Polynomial Inequalities", col: 7, row: 1, icon: "P>0", chips: ["sign chart"], pre: ["a2-zeros-mult","a1-compound"] },
    { id: "a2-fta", label: "Fundamental Theorem of Algebra & Complex Zeros", col: 7, row: 4, icon: "n zeros", chips: ["conjugates","FTA"], pre: ["a2-factor-theorem","a2-quad-complex"] },
    { id: "a2-rational-func", label: "Rational Functions: Domain, Holes & Vertical Asymptotes", col: 8, row: 1, icon: "1/x", chips: ["hole","x = a"], pre: ["a1-rational-simplify","a2-transformations"] },
    { id: "a2-radical-func", label: "Radical Functions & Their Graphs", col: 8, row: 3, icon: "√x", chips: ["∛x","domain"], pre: ["a2-inverses","a2-transformations","a1-rational-exp"] },
    { id: "a2-variation", label: "Direct, Inverse & Joint Variation", col: 9, row: 0, icon: "y=k/x", chips: ["k","∝"], pre: ["a2-rational-func","a1-literal"] },
    { id: "a2-rational-asym", label: "Horizontal & Slant Asymptotes; Graphing Rational Functions", col: 9, row: 1, icon: "y = L", chips: ["HA","slant"], pre: ["a2-rational-func","a1-poly-div"] },
    { id: "a2-rational-ineq", label: "Rational Inequalities", col: 10, row: 1, icon: "P/Q≥0", chips: ["sign chart","x ≠ a"], pre: ["a2-rational-asym","a2-poly-ineq"] },
    { id: "a2-exp-func", label: "Exponential Functions & the Number e", col: 11, row: 3, icon: "eˣ", chips: ["bˣ","e","y = 0"], pre: ["a1-exp-functions","a2-transformations"] },
    { id: "a2-logs", label: "Logarithmic Functions", col: 12, row: 3, icon: "logₐ", chips: ["inverse","ln"], pre: ["a2-exp-func","a2-inverses"] },
    { id: "a2-log-props", label: "Properties of Logarithms", col: 13, row: 3, icon: "log ab", chips: ["product","power","base"], pre: ["a2-logs"] },
    { id: "a2-log-scales", label: "Logarithmic Scales", col: 13, row: 5, icon: "dB", chips: ["pH","dB","M"], pre: ["a2-logs"] },
    { id: "a2-exp-log-eq", label: "Exponential & Logarithmic Equations", col: 14, row: 3, icon: "bˣ = c", chips: ["take log","check"], pre: ["a2-log-props"] },
    { id: "a2-exp-models", label: "Exponential Growth, Decay & Compound Interest", col: 15, row: 3, icon: "Peʳᵗ", chips: ["half-life","APY"], pre: ["a2-exp-log-eq"] },
    { id: "a2-sequences", label: "Sequences & Sigma Notation", col: 16, row: 1, icon: "Σ", chips: ["aₙ","recursive"], pre: ["a1-sequences"] },
    { id: "a2-arith-series", label: "Arithmetic Series", col: 17, row: 0, icon: "Sₙ", chips: ["n(a₁+aₙ)/2"], pre: ["a2-sequences"] },
    { id: "a2-geom-series", label: "Geometric Series", col: 17, row: 1, icon: "a/(1−r)", chips: ["|r|<1","S∞"], pre: ["a2-sequences","a2-exp-func"] },
    { id: "a2-binomial", label: "The Binomial Theorem", col: 17, row: 2, icon: "(a+b)ⁿ", chips: ["Pascal","C(n,k)"], pre: ["a2-sequences","a1-poly-mult"] },
    { id: "a2-conic-sections", label: "Conic Sections & the General Equation", col: 18, row: 4, icon: "◎", chips: ["slices","Ax²+Cy²"], pre: ["g-circle-equations","a1-quad-sqrt"] },
    { id: "a2-parabolas", label: "Parabolas: Focus & Directrix", col: 19, row: 3, icon: "4p", chips: ["focus","directrix"], pre: ["a2-conic-sections","a2-quad-vertex"] },
    { id: "a2-ellipses", label: "Ellipses", col: 19, row: 5, icon: "⬭", chips: ["a, b, c","foci"], pre: ["a2-conic-sections"] },
    { id: "a2-nonlinear-sys", label: "Nonlinear Systems of Equations", col: 20, row: 3, icon: "∩", chips: ["line ∩ conic"], pre: ["a2-conic-sections","a1-sys-sub"] },
    { id: "a2-hyperbolas", label: "Hyperbolas", col: 20, row: 5, icon: ")(", chips: ["asymptotes","c² = a²+b²"], pre: ["a2-ellipses"] }
  ]
};
T.planned = T.nodes.filter(n => n.planned);
T.nodes = T.nodes.filter(n => !n.planned);
T.planned.forEach(n => { delete n.planned; });
})();
