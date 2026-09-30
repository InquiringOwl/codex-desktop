/* ============ Tree + field data ============ */
window.DB = window.DB || {};

/* Skill trees, one per charted field. col = tier column, row = lane.
   pre may name topics in another field (drawn in that field; listed on the topic page). */
DB.trees = {};
DB.trees["arithmetic"] = {
  eras: [
    { name: "Number Sense", from: 0, to: 2 },
    { name: "The Four Operations", from: 3, to: 4 },
    { name: "Structure of Number", from: 5, to: 6 },
    { name: "Parts of a Whole", from: 7, to: 8 },
    { name: "Applied Arithmetic", from: 9, to: 10 }
  ],
  nodes: [
    { id: "counting",      col: 0,  row: 3, icon: "ℕ",   chips: ["1","2","3"], pre: [] },
    { id: "place-value",   col: 1,  row: 2, icon: "10²", chips: ["10","100","1000"], pre: ["counting"] },
    { id: "number-line",   col: 1,  row: 4, icon: "<",   chips: ["<","=",">"], pre: ["counting"] },
    { id: "addition",      col: 2,  row: 2, icon: "+",   chips: ["+","Σ"], pre: ["place-value"] },
    { id: "rounding",      col: 2,  row: 4, icon: "≈",   chips: ["≈","½"], pre: ["place-value","number-line"] },
    { id: "multiplication",col: 3,  row: 1, icon: "×",   chips: ["×","▦"], pre: ["addition"] },
    { id: "subtraction",   col: 3,  row: 3, icon: "−",   chips: ["−","↺"], pre: ["addition"] },
    { id: "properties",    col: 4,  row: 0, icon: "⇄",   chips: ["ab=ba","a(b+c)"], pre: ["multiplication"] },
    { id: "division",      col: 4,  row: 2, icon: "÷",   chips: ["÷","r"], pre: ["multiplication","subtraction"] },
    { id: "integers",      col: 4,  row: 4, icon: "±",   chips: ["−3","|x|"], pre: ["subtraction","number-line"] },
    { id: "exponents",     col: 5,  row: 0, icon: "xⁿ",  chips: ["2³","b⁰"], pre: ["multiplication","properties"] },
    { id: "order-ops",     col: 5,  row: 1, icon: "( )", chips: ["( )","×÷","+−"], pre: ["division","properties"] },
    { id: "factors",       col: 5,  row: 3, icon: "∣",   chips: ["3∣12","×k"], pre: ["division"] },
    { id: "modular",       col: 5,  row: 5, icon: "≡",   chips: ["mod","≡"], pre: ["division","integers"] },
    { id: "roots",         col: 6,  row: 0, icon: "√",   chips: ["√","n²"], pre: ["exponents"] },
    { id: "fractions",     col: 6,  row: 2, icon: "½",   chips: ["½","=","²⁄₄"], pre: ["division","factors"] },
    { id: "primes",        col: 6,  row: 4, icon: "p",   chips: ["2","3","5","7"], pre: ["factors"] },
    { id: "decimals",      col: 7,  row: 1, icon: "0.1", chips: ["0.1","0.01"], pre: ["place-value","fractions"] },
    { id: "mixed-numbers", col: 7,  row: 2, icon: "1½",  chips: ["1½","⁷⁄₄"], pre: ["fractions"] },
    { id: "ratios",        col: 7,  row: 3, icon: "∶",   chips: ["a∶b","/h"], pre: ["fractions"] },
    { id: "gcf-lcm",       col: 7,  row: 5, icon: "gcd", chips: ["gcd","lcm"], pre: ["primes"] },
    { id: "sci-notation",  col: 8,  row: 0, icon: "10ⁿ", chips: ["×10ⁿ","e"], pre: ["exponents","decimals"] },
    { id: "percents",      col: 8,  row: 1, icon: "%",   chips: ["%","/100"], pre: ["decimals"] },
    { id: "decimal-ops",   col: 8,  row: 2, icon: ".×",  chips: ["+.","×."], pre: ["decimals","multiplication"] },
    { id: "fraction-ops",  col: 8,  row: 4, icon: "⅔",   chips: ["+","×","÷"], pre: ["fractions","gcf-lcm"] },
    { id: "percent-apps",  col: 9,  row: 1, icon: "$",   chips: ["Prt","(1+r)ᵗ"], pre: ["percents","exponents"] },
    { id: "averages",      col: 9,  row: 2, icon: "x̄",   chips: ["x̄","med","mode"], pre: ["division","decimal-ops"] },
    { id: "proportions",   col: 9,  row: 4, icon: "∷",   chips: ["a/b=c/x"], pre: ["ratios","fraction-ops"] },
    { id: "real-numbers",  col: 9,  row: 6, icon: "ℝ",   chips: ["ℚ","√2","π"], pre: ["integers","fraction-ops","roots","decimals"] },
    { id: "units",         col: 10, row: 3, icon: "m/s", chips: ["km/h","×1"], pre: ["proportions","decimal-ops"] }
  ]
};

DB.trees["pre-algebra"] = {
  eras: [
    { name: "The Language of Algebra", from: 0, to: 1 },
    { name: "Solving Equations", from: 2, to: 4 },
    { name: "Models, Formulas & Graphs", from: 5, to: 6 }
  ],
  nodes: [
    { id: "pa-variables",     col: 0, row: 2, icon: "x",     chips: ["x","3n","a+b"], pre: ["order-ops","properties"] },
    { id: "pa-coordinate",    col: 0, row: 6, icon: "(x,y)", chips: ["I","II","III","IV"], pre: ["integers","number-line"] },
    { id: "pa-translate",     col: 1, row: 0, icon: "“x”", chips: ["sum","less than"], pre: ["pa-variables"] },
    { id: "pa-like-terms",    col: 1, row: 1, icon: "3x+2x", chips: ["5x","a(b+c)"], pre: ["pa-variables","properties"] },
    { id: "pa-evaluate",      col: 1, row: 2, icon: "x=4", chips: ["x→4","f"], pre: ["pa-variables","integers"] },
    { id: "pa-exponent-laws", col: 1, row: 4, icon: "xⁿ", chips: ["x²x³","x⁻¹"], pre: ["pa-variables","exponents"] },
    { id: "pa-equations",     col: 2, row: 2, icon: "=",   chips: ["=","✓"], pre: ["pa-evaluate"] },
    { id: "pa-relations",     col: 2, row: 6, icon: "↦", chips: ["x","y","table"], pre: ["pa-coordinate","pa-evaluate"] },
    { id: "pa-one-step",      col: 3, row: 2, icon: "x+a", chips: ["−a","÷a"], pre: ["pa-equations","fraction-ops","decimal-ops"] },
    { id: "pa-inequalities",  col: 3, row: 4, icon: "<",   chips: ["<","≤","○●"], pre: ["pa-equations","number-line"] },
    { id: "pa-functions",     col: 3, row: 6, icon: "f(x)", chips: ["f(x)","1 out"], pre: ["pa-relations"] },
    { id: "pa-two-step",      col: 4, row: 2, icon: "ax+b", chips: ["−b","÷a"], pre: ["pa-one-step"] },
    { id: "pa-similar",       col: 4, row: 3, icon: "△∼", chips: ["∼","k"], pre: ["pa-one-step","proportions"] },
    { id: "pa-proportional",  col: 4, row: 6, icon: "y=kx", chips: ["k","(0,0)"], pre: ["pa-functions","proportions"] },
    { id: "pa-sequences",     col: 4, row: 7, icon: "+d",  chips: ["a₁","d"], pre: ["pa-functions"] },
    { id: "pa-both-sides",    col: 5, row: 1, icon: "x=x", chips: ["ax+b=cx+d"], pre: ["pa-two-step","pa-like-terms"] },
    { id: "pa-formulas",      col: 5, row: 3, icon: "A=lw", chips: ["P","A","V"], pre: ["pa-two-step"] },
    { id: "pa-solve-ineq",    col: 5, row: 4, icon: "≤", chips: ["flip","−x"], pre: ["pa-inequalities","pa-two-step"] },
    { id: "pa-slope",         col: 5, row: 6, icon: "m",   chips: ["rise","run"], pre: ["pa-proportional"] },
    { id: "pa-word-problems", col: 6, row: 0, icon: "?",   chips: ["let x","check"], pre: ["pa-both-sides","pa-translate"] },
    { id: "pa-pythagorean",   col: 6, row: 3, icon: "a²+b²", chips: ["c²","√"], pre: ["pa-formulas","roots"] },
    { id: "pa-linear-graphs", col: 6, row: 6, icon: "y=mx+b", chips: ["m","b"], pre: ["pa-slope","pa-two-step"] }
  ]
};

DB.trees["algebra-1"] = {
  eras: [
    { name: "Equations, Inequalities & Functions", from: 0, to: 2 },
    { name: "Lines, Systems & Polynomials", from: 3, to: 5 },
    { name: "Quadratics & Rational Expressions", from: 6, to: 9 }
  ],
  nodes: [
    { id: "a1-multi-step",       col: 0, row: 1, icon: "⋯x", chips: ["LCD","∅","ℝ"], pre: ["pa-both-sides"] },
    { id: "a1-functions",        col: 0, row: 3, icon: "f(x)", chips: ["dom","ran"], pre: ["pa-functions","pa-linear-graphs"] },
    { id: "a1-exponents",        col: 0, row: 6, icon: "x⁻ⁿ", chips: ["x⁰","x⁻¹"], pre: ["pa-exponent-laws","sci-notation"] },
    { id: "a1-literal",          col: 1, row: 0, icon: "d=rt", chips: ["solve for"], pre: ["a1-multi-step","pa-formulas"] },
    { id: "a1-compound",         col: 1, row: 1, icon: "[a,b)", chips: ["and","or","∪"], pre: ["a1-multi-step","pa-solve-ineq"] },
    { id: "a1-abs-eq",           col: 1, row: 2, icon: "|x|", chips: ["±"], pre: ["a1-multi-step"] },
    { id: "a1-slope-forms",      col: 1, row: 3, icon: "mx+b", chips: ["m","b"], pre: ["a1-functions","pa-slope"] },
    { id: "a1-poly-add",         col: 1, row: 6, icon: "P+Q", chips: ["deg","like"], pre: ["a1-exponents"] },
    { id: "a1-radicals",         col: 1, row: 8, icon: "√", chips: ["√12","2√3"], pre: ["a1-exponents","roots"] },
    { id: "a1-abs-ineq",         col: 2, row: 1, icon: "|x|<a", chips: ["and","or"], pre: ["a1-abs-eq","a1-compound"] },
    { id: "a1-piecewise",        col: 2, row: 2, icon: "{",    chips: ["pieces","|x|"], pre: ["a1-functions","a1-abs-eq"] },
    { id: "a1-line-forms",       col: 2, row: 3, icon: "Ax+By", chips: ["y−y₁","std"], pre: ["a1-slope-forms"] },
    { id: "a1-poly-mult",        col: 2, row: 6, icon: "PQ",   chips: ["FOIL","(a+b)²"], pre: ["a1-poly-add"] },
    { id: "a1-rational-exp",     col: 2, row: 9, icon: "x^½", chips: ["ⁿ√","m/n"], pre: ["a1-radicals"] },
    { id: "a1-par-perp",         col: 3, row: 2, icon: "∥⊥", chips: ["m₁=m₂","−1/m"], pre: ["a1-line-forms"] },
    { id: "a1-sys-graph",        col: 3, row: 3, icon: "╳", chips: ["1","0","∞"], pre: ["a1-line-forms"] },
    { id: "a1-linear-models",    col: 3, row: 4, icon: "∴", chips: ["fit","r"], pre: ["a1-line-forms"] },
    { id: "a1-poly-div",         col: 3, row: 5, icon: "P÷Q", chips: ["long ÷","R"], pre: ["a1-poly-mult"] },
    { id: "a1-factor-gcf",       col: 3, row: 6, icon: "GCF", chips: ["gcf","group"], pre: ["a1-poly-mult"] },
    { id: "a1-radical-ops",      col: 3, row: 8, icon: "√±√", chips: ["conj","rat."], pre: ["a1-radicals","a1-poly-mult"] },
    { id: "a1-sys-ineq",         col: 4, row: 1, icon: "◩", chips: ["shade","∩"], pre: ["a1-sys-graph","a1-compound"] },
    { id: "a1-sys-sub",          col: 4, row: 3, icon: "y=…", chips: ["sub"], pre: ["a1-sys-graph","a1-literal"] },
    { id: "a1-factor-tri",       col: 4, row: 6, icon: "x²+bx", chips: ["ac","(x+p)(x+q)"], pre: ["a1-factor-gcf"] },
    { id: "a1-radical-eq",       col: 4, row: 8, icon: "√x=a", chips: ["square","check"], pre: ["a1-radical-ops","a1-multi-step"] },
    { id: "a1-exp-functions",    col: 4, row: 9, icon: "bˣ", chips: ["growth","decay"], pre: ["a1-functions","a1-rational-exp","percent-apps"] },
    { id: "a1-sys-elim",         col: 5, row: 3, icon: "±eq", chips: ["elim"], pre: ["a1-sys-sub"] },
    { id: "a1-factor-special",   col: 5, row: 6, icon: "a²−b²", chips: ["(a±b)²","a³±b³"], pre: ["a1-factor-tri"] },
    { id: "a1-quad-factor",      col: 5, row: 7, icon: "ab=0", chips: ["zero prod."], pre: ["a1-factor-tri"] },
    { id: "a1-sequences",        col: 5, row: 9, icon: "×r", chips: ["aₙ","r"], pre: ["a1-exp-functions","pa-sequences"] },
    { id: "a1-sys-apps",         col: 6, row: 3, icon: "2×2", chips: ["mix","rate"], pre: ["a1-sys-elim"] },
    { id: "a1-rational-simplify",col: 6, row: 5, icon: "P/Q", chips: ["×","÷","x≠"], pre: ["a1-factor-special","fraction-ops"] },
    { id: "a1-quad-sqrt",        col: 6, row: 7, icon: "(x+h)²", chips: ["±√","CTS"], pre: ["a1-quad-factor","a1-radicals"] },
    { id: "a1-rational-add",     col: 7, row: 5, icon: "P/Q+R/S", chips: ["LCD"], pre: ["a1-rational-simplify"] },
    { id: "a1-quad-formula",     col: 7, row: 7, icon: "±√Δ", chips: ["b²−4ac"], pre: ["a1-quad-sqrt"] },
    { id: "a1-rational-eq",      col: 8, row: 5, icon: "=P/Q", chips: ["work","extraneous"], pre: ["a1-rational-add"] },
    { id: "a1-quad-graphs",      col: 8, row: 7, icon: "∪", chips: ["vertex","axis"], pre: ["a1-quad-formula","a1-functions"] },
    { id: "a1-quad-apps",        col: 9, row: 7, icon: "h(t)", chips: ["max","area"], pre: ["a1-quad-graphs"] }
  ]
};

/* Fields of mathematics (sidebar + field map).
   status: "charted" (tree built) or "planned". */
DB.fieldGroups = [
  { name: "Foundations", ids: ["arithmetic","pre-algebra"] },
  { name: "Core Sequence", ids: ["algebra-1","geometry","algebra-2","trigonometry","precalculus"] },
  { name: "Calculus", ids: ["calculus-1","calculus-2","calculus-3","diff-eq"] },
  { name: "Data & Chance", ids: ["statistics","probability"] },
  { name: "Upper Division", ids: ["linear-algebra","discrete","number-theory","abstract-algebra","real-analysis","complex-analysis","topology","numerical-analysis"] }
];

DB.fields = {
  "arithmetic": { name: "Arithmetic", icon: "+", level: "Grades K–6 · college developmental math", col: 0, row: 3, pre: [], status: "charted",
    blurb: "The numbers themselves and the four operations on them: whole numbers, integers, fractions, decimals, percents, ratios and powers. Every later field assumes these are automatic.",
    topics: [] },
  "pre-algebra": { name: "Pre-Algebra", icon: "x", level: "Grades 6–8 · college MATH 0xx", col: 1, row: 3, pre: ["arithmetic"], status: "charted",
    blurb: "The bridge from numbers to symbols. Variables stand in for unknown numbers, and the laws of arithmetic become rules for rewriting expressions.",
    topics: ["Variables and algebraic expressions","Evaluating and simplifying expressions","Combining like terms","One- and two-step linear equations","Linear inequalities on a number line","Integer exponents and exponent laws","Coordinate plane and plotting points","Introduction to functions and tables","Perimeter, area and volume formulas","The Pythagorean theorem"] },
  "algebra-1": { name: "Algebra I", icon: "y=mx+b", level: "Grade 9 · college elementary algebra", col: 2, row: 3, pre: ["pre-algebra"], status: "charted",
    blurb: "Linear relationships, systems of equations, polynomials and a first look at quadratics. This is where modelling a situation with an equation becomes routine.",
    topics: ["Multi-step linear equations and literal equations","Slope, intercepts and forms of a line","Graphing linear functions","Systems of linear equations (substitution, elimination)","Linear inequalities and systems of inequalities","Polynomial operations","Factoring (GCF, trinomials, difference of squares)","Quadratic equations: factoring, square roots, quadratic formula","Radicals and rational exponents","Function notation, domain and range"] },
  "geometry": { name: "Geometry", icon: "△", level: "Grade 10 · Euclidean geometry", col: 3, row: 2, pre: ["algebra-1"], status: "planned",
    blurb: "Shape, size and position, built from axioms with deductive proof. Congruence, similarity, circles and measurement.",
    topics: ["Points, lines, planes and angles","Deductive reasoning and two-column proofs","Parallel lines and transversals","Triangle congruence (SSS, SAS, ASA, AAS, HL)","Similarity and scale factor","Right triangles and special right triangles","Circles: arcs, chords, tangents, inscribed angles","Area and volume of plane and solid figures","Coordinate geometry and transformations","Constructions with compass and straightedge"] },
  "algebra-2": { name: "Algebra II", icon: "f(x)", level: "Grade 11 · college intermediate algebra", col: 4, row: 3, pre: ["algebra-1","geometry"], status: "planned",
    blurb: "A wider family of functions: quadratics in depth, polynomials, rational, radical, exponential and logarithmic functions, plus complex numbers and sequences.",
    topics: ["Quadratic functions and completing the square","Complex numbers","Polynomial division, Remainder and Factor Theorems","Rational expressions and equations","Radical equations","Exponential functions and growth/decay","Logarithms and their laws","Sequences and series (arithmetic, geometric)","Systems in three variables and matrices intro","Conic sections"] },
  "trigonometry": { name: "Trigonometry", icon: "sin", level: "Grade 11–12 · college trigonometry", col: 5, row: 2, pre: ["geometry","algebra-2"], status: "planned",
    blurb: "Angles and the ratios of triangle sides, extended to periodic functions on the unit circle. The language of waves, rotation and navigation.",
    topics: ["Radian and degree measure","Right-triangle ratios (SOH-CAH-TOA)","The unit circle","Graphs of sine, cosine and tangent","Inverse trigonometric functions","Trigonometric identities","Solving trigonometric equations","Law of Sines and Law of Cosines","Polar coordinates","Vectors in the plane"] },
  "precalculus": { name: "Precalculus", icon: "→", level: "Grade 12 · college precalculus", col: 6, row: 3, pre: ["algebra-2","trigonometry"], status: "planned",
    blurb: "A unified study of functions as objects: transformations, composition, inverses and limits of behaviour. Prepares the exact toolkit calculus uses.",
    topics: ["Functions: composition and inverses","Transformations of graphs","Polynomial and rational function behaviour","Exponential and logarithmic modelling","Trigonometric functions as functions","Parametric equations","Sequences, series and sigma notation","Introduction to limits","Complex numbers in polar form (De Moivre)","Matrices and determinants"] },
  "calculus-1": { name: "Calculus I", icon: "d/dx", level: "College MATH 1xx · AP Calculus AB", col: 7, row: 3, pre: ["precalculus"], status: "planned",
    blurb: "Rates of change. Limits make the idea of an instantaneous rate exact, and the derivative becomes a tool for motion, optimisation and approximation.",
    topics: ["Limits and continuity","Definition of the derivative","Differentiation rules (power, product, quotient, chain)","Derivatives of trig, exponential and log functions","Implicit differentiation","Related rates","Curve sketching and the Mean Value Theorem","Optimisation","Linear approximation and L'Hôpital's rule","Antiderivatives and the definite integral"] },
  "calculus-2": { name: "Calculus II", icon: "∫", level: "College MATH 1xx · AP Calculus BC", col: 8, row: 3, pre: ["calculus-1"], status: "planned",
    blurb: "Accumulation. Integration techniques, applications to area, volume and work, and infinite series that represent functions as polynomials.",
    topics: ["Fundamental Theorem of Calculus","Substitution and integration by parts","Trigonometric integrals and substitution","Partial fractions","Improper integrals","Area, volume, arc length, work","Sequences and convergence","Series tests","Power series and Taylor series","Parametric and polar calculus"] },
  "calculus-3": { name: "Calculus III", icon: "∇", level: "College MATH 2xx · multivariable", col: 9, row: 2, pre: ["calculus-2"], status: "planned",
    blurb: "Calculus in two and three dimensions: vectors, partial derivatives, multiple integrals and the theorems of Green, Stokes and Gauss.",
    topics: ["Vectors, dot and cross products","Lines, planes and surfaces","Vector-valued functions and motion","Partial derivatives and gradient","Lagrange multipliers","Double and triple integrals","Change of variables and Jacobians","Line integrals and conservative fields","Green's theorem","Stokes' and divergence theorems"] },
  "diff-eq": { name: "Differential Equations", icon: "y′", level: "College MATH 2xx", col: 10, row: 3, pre: ["calculus-2","linear-algebra"], status: "planned",
    blurb: "Equations whose unknown is a function, defined by how it changes. The main language of physics, engineering, biology and economics models.",
    topics: ["First-order equations: separable, linear, exact","Existence and uniqueness","Modelling: growth, cooling, mixing","Second-order linear equations","Undetermined coefficients and variation of parameters","Mechanical vibrations and resonance","Laplace transforms","Systems of first-order equations","Phase plane and stability","Series solutions"] },
  "statistics": { name: "Statistics", icon: "σ", level: "College STAT 1xx · AP Statistics", col: 5, row: 5, pre: ["algebra-2"], status: "planned",
    blurb: "Learning from data. Describing distributions, designing studies, and using probability to measure how far conclusions can be trusted.",
    topics: ["Types of data and sampling","Descriptive statistics and graphs","Measures of centre and spread","Normal distribution and z-scores","Correlation and linear regression","Experimental design","Sampling distributions and the Central Limit Theorem","Confidence intervals","Hypothesis testing (z, t, χ²)","ANOVA and nonparametric tests"] },
  "probability": { name: "Probability", icon: "P", level: "College MATH 3xx (calculus-based)", col: 9, row: 5, pre: ["calculus-2","discrete"], status: "planned",
    blurb: "The mathematics of uncertainty: sample spaces, random variables and distributions, with limit theorems that explain why averages stabilise.",
    topics: ["Axioms of probability and counting","Conditional probability and Bayes' theorem","Independence","Discrete random variables (binomial, Poisson, geometric)","Continuous random variables (uniform, exponential, normal)","Expectation and variance","Joint distributions and covariance","Moment generating functions","Law of Large Numbers","Central Limit Theorem"] },
  "linear-algebra": { name: "Linear Algebra", icon: "[A]", level: "College MATH 2xx", col: 9, row: 4, pre: ["calculus-2"], status: "planned",
    blurb: "Vectors, matrices and linear transformations. The working mathematics of computer graphics, machine learning, data science and quantum physics.",
    topics: ["Systems of equations and row reduction","Matrix algebra and inverses","Determinants","Vector spaces and subspaces","Linear independence, basis and dimension","Linear transformations","Eigenvalues and eigenvectors","Diagonalisation","Orthogonality and least squares","Singular value decomposition"] },
  "discrete": { name: "Discrete Mathematics", icon: "{ }", level: "College MATH/CS 2xx", col: 5, row: 6, pre: ["algebra-2"], status: "planned",
    blurb: "The mathematics of separate, countable things, and the first course in writing proofs. Core to computer science.",
    topics: ["Propositional and predicate logic","Proof techniques: direct, contrapositive, contradiction","Mathematical induction","Sets, relations and functions","Counting: permutations and combinations","Pigeonhole principle","Recurrence relations","Graph theory basics","Trees","Elementary number theory and modular arithmetic"] },
  "number-theory": { name: "Number Theory", icon: "≡", level: "College MATH 3xx", col: 6, row: 6, pre: ["discrete"], status: "planned",
    blurb: "The properties of the integers: divisibility, primes and congruences, and the mathematics behind modern encryption.",
    topics: ["Divisibility and the Euclidean algorithm","Fundamental Theorem of Arithmetic","Linear Diophantine equations","Congruences","Fermat's little theorem and Euler's theorem","Chinese Remainder Theorem","Primitive roots","Quadratic residues and reciprocity","Arithmetic functions","RSA cryptography"] },
  "abstract-algebra": { name: "Abstract Algebra", icon: "G", level: "College MATH 4xx", col: 10, row: 5, pre: ["linear-algebra","number-theory"], status: "planned",
    blurb: "Structures defined by their operations: groups, rings and fields. Explains why the laws of arithmetic work and where else they hold.",
    topics: ["Groups and subgroups","Cyclic and permutation groups","Lagrange's theorem","Homomorphisms and isomorphisms","Quotient groups","Rings and ideals","Integral domains and fields","Polynomial rings","Field extensions","Galois theory introduction"] },
  "real-analysis": { name: "Real Analysis", icon: "ε", level: "College MATH 4xx", col: 10, row: 1, pre: ["calculus-3","discrete"], status: "planned",
    blurb: "The rigorous foundation of calculus. Completeness of the real numbers, limits with epsilon and delta, and proofs of the theorems calculus uses.",
    topics: ["Construction and completeness of ℝ","Sequences and Cauchy sequences","Series and convergence","Topology of the real line","Limits and continuity (ε–δ)","Uniform continuity","Differentiation theorems","Riemann integration","Sequences and series of functions","Uniform convergence"] },
  "complex-analysis": { name: "Complex Analysis", icon: "ℂ", level: "College MATH 4xx", col: 11, row: 2, pre: ["calculus-3","real-analysis"], status: "planned",
    blurb: "Calculus with complex numbers. Differentiable complex functions are unusually rigid, which yields powerful tools for integrals and physics.",
    topics: ["Complex numbers and the complex plane","Analytic functions and Cauchy–Riemann equations","Elementary complex functions","Contour integrals","Cauchy's theorem and integral formula","Taylor and Laurent series","Singularities and residues","Residue theorem and real integrals","Conformal mapping","Harmonic functions"] },
  "topology": { name: "Topology", icon: "∘", level: "College MATH 4xx", col: 11, row: 0, pre: ["real-analysis"], status: "planned",
    blurb: "The study of properties preserved under continuous stretching. Generalises the ideas of nearness, continuity and connectedness.",
    topics: ["Topological spaces and open sets","Bases and subspaces","Continuous functions and homeomorphisms","Product and quotient spaces","Connectedness","Compactness","Metric spaces","Separation axioms","Fundamental group","Classification of surfaces"] },
  "numerical-analysis": { name: "Numerical Analysis", icon: "≈", level: "College MATH 4xx", col: 11, row: 4, pre: ["linear-algebra","diff-eq"], status: "planned",
    blurb: "Algorithms that compute answers to continuous problems on real computers, and the analysis of how accurate and stable they are.",
    topics: ["Floating-point arithmetic and error","Root finding (bisection, Newton's method)","Interpolation and polynomial approximation","Numerical differentiation","Numerical integration (quadrature)","Direct methods for linear systems","Iterative methods","Eigenvalue algorithms","Numerical ODE solvers","Stability and convergence"] }
};

DB.fieldEras = [
  { name: "Foundations", from: 0, to: 1 },
  { name: "Core Sequence", from: 2, to: 6 },
  { name: "Calculus & Beyond", from: 7, to: 9 },
  { name: "Upper Division", from: 10, to: 11 }
];

/* Other Dictionary subjects (future) */
DB.subjects = [
  { id: "mathematics", name: "Mathematics", glyph: "∑", status: "open", note: "21 fields · Arithmetic, Pre-Algebra and Algebra I charted" },
  { id: "physics", name: "Physics", glyph: "⚛", status: "locked", note: "Not yet charted" },
  { id: "chemistry", name: "Chemistry", glyph: "⌬", status: "locked", note: "Not yet charted" },
  { id: "biology", name: "Biology", glyph: "❦", status: "locked", note: "Not yet charted" },
  { id: "computer-science", name: "Computer Science", glyph: "λ", status: "locked", note: "Not yet charted" },
  { id: "economics", name: "Economics", glyph: "¤", status: "locked", note: "Not yet charted" }
];
