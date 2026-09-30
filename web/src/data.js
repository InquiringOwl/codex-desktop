/* ============ Tree + field data ============ */
window.DB = window.DB || {};

/* Arithmetic skill tree. col = tier column, row = lane. */
DB.arith = {
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
  "pre-algebra": { name: "Pre-Algebra", icon: "x", level: "Grades 6–8 · college MATH 0xx", col: 1, row: 3, pre: ["arithmetic"], status: "planned",
    blurb: "The bridge from numbers to symbols. Variables stand in for unknown numbers, and the laws of arithmetic become rules for rewriting expressions.",
    topics: ["Variables and algebraic expressions","Evaluating and simplifying expressions","Combining like terms","One- and two-step linear equations","Linear inequalities on a number line","Integer exponents and exponent laws","Coordinate plane and plotting points","Introduction to functions and tables","Perimeter, area and volume formulas","The Pythagorean theorem"] },
  "algebra-1": { name: "Algebra I", icon: "y=mx+b", level: "Grade 9 · college elementary algebra", col: 2, row: 3, pre: ["pre-algebra"], status: "planned",
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
  { id: "mathematics", name: "Mathematics", glyph: "∑", status: "open", note: "20 fields · Arithmetic tree charted" },
  { id: "physics", name: "Physics", glyph: "⚛", status: "locked", note: "Not yet charted" },
  { id: "chemistry", name: "Chemistry", glyph: "⌬", status: "locked", note: "Not yet charted" },
  { id: "biology", name: "Biology", glyph: "❦", status: "locked", note: "Not yet charted" },
  { id: "computer-science", name: "Computer Science", glyph: "λ", status: "locked", note: "Not yet charted" },
  { id: "economics", name: "Economics", glyph: "¤", status: "locked", note: "Not yet charted" }
];
