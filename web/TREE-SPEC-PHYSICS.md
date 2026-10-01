# Physics: field map and Mechanics tree spec

Physics is the second Dictionary subject. Standard: **calculus-based college physics** (physics and engineering majors).
Mechanics ≈ OpenStax *University Physics Volume 1*, ch. 1–11 and 13 (Physics I). Ids are unique across all subjects (Mechanics ids start `mech-`).

## Two kinds of prerequisite
- **prerequisites**: physics topics. They drive the tree edges and the Ready / Locked state.
- **math**: the mathematics a student needs to handle that topic's variables, equations and frameworks. **Informational only**, never locks a node. Each entry is either
  - a charted math topic id (e.g. `a1-literal`), shown with its mastered/ready state and linked, or
  - `field:Topic name` for a math field not yet charted, where the topic name is copied exactly from that field's `topics` list in `data.js` (e.g. `trigonometry:Right-triangle ratios (SOH-CAH-TOA)`). Shown as "planned" and linked to the field page.
  The dossier explains each in `mathWhy` (key = the exact entry string). Calculus entries are co-requisites in most colleges; say so in `mathWhy` when the topic can be done with algebra first and calculus sharpens it.

## Mechanics tree (45 topics)

### Measurement & Vectors
- **mech-units** — Units, the SI & Unit Conversion (first node of Physics)
  - prerequisites: none · math: units, sci-notation, a1-exponents
  - unlocks: mech-dimensions, mech-vectors
  - lab + colours: conversion chain: pick a quantity (speed, density, area) and chain conversion factors that cancel units; SI prefix ladder from pico to giga; starting quantity cyan c2, conversion factor pink c3, cancelled units violet c4, result amber c1.
- **mech-dimensions** — Dimensional Analysis & Estimation
  - prerequisites: mech-units · math: pa-exponent-laws, a1-literal, proportions
  - unlocks: mech-sigfigs
  - lab + colours: dimension balancer: candidate formulas for a pendulum period or fall time, exponents of [L], [M], [T] shown as bars on each side; consistent formula green c5; L cyan c2, M pink c3, T violet c4, verdict amber c1. Second mode: order-of-magnitude (Fermi) estimate builder.
- **mech-vectors** — Scalars & Vectors: Graphical Addition
  - prerequisites: mech-units · math: pa-coordinate, pa-pythagorean, g-angles
  - unlocks: mech-components, mech-displacement
  - lab + colours: drag two arrow tips; tip-to-tail sum and parallelogram; subtraction as adding −B; A cyan c2, B pink c3, resultant amber c1, −B violet c4.
- **mech-sigfigs** — Significant Figures, Precision & Uncertainty
  - prerequisites: mech-dimensions · math: rounding, sci-notation
  - unlocks: (none in charted trees)
  - lab + colours: ruler/caliper reading with uncertainty band; arithmetic with measured values applies the sig-fig rules for × ÷ and + −; measured value cyan c2, uncertainty pink c3, digits kept amber c1, digits dropped violet c4.
- **mech-components** — Vector Components & Unit Vectors
  - prerequisites: mech-vectors · math: pa-pythagorean, trigonometry:Right-triangle ratios (SOH-CAH-TOA), trigonometry:Inverse trigonometric functions, trigonometry:Vectors in the plane
  - unlocks: mech-vector-products, mech-2d-motion, mech-forces
  - lab + colours: draggable vector with its x and y components and the angle; magnitude/direction ↔ component readout in î ĵ form; adding two vectors by components; vector amber c1, x-component cyan c2, y-component pink c3, angle violet c4.
- **mech-vector-products** — Dot & Cross Products
  - prerequisites: mech-components · math: trigonometry:Right-triangle ratios (SOH-CAH-TOA), precalculus:Matrices and determinants, calculus-3:Vectors, dot and cross products
  - unlocks: mech-work, mech-torque
  - lab + colours: two draggable vectors with angle θ; dot product as projection (shaded), cross product as parallelogram area with right-hand-rule ⊙/⊗ indicator; A cyan c2, B pink c3, projection/area amber c1, angle violet c4.

### Kinematics
- **mech-displacement** — Position, Displacement & Distance
  - prerequisites: mech-vectors · math: integers, pa-coordinate, a1-functions
  - unlocks: mech-velocity
  - lab + colours: a walker on a number line with a trip made of legs; displacement vs total distance; position-time trace; position cyan c2, displacement amber c1, distance pink c3.
- **mech-velocity** — Average & Instantaneous Velocity
  - prerequisites: mech-displacement · math: pa-slope, a1-slope-forms, calculus-1:Definition of the derivative
  - unlocks: mech-acceleration
  - lab + colours: x(t) curve; secant between two times shrinks to a tangent as Δt → 0; average velocity pink c3, instantaneous (tangent) amber c1, curve cyan c2, Δt violet c4.
- **mech-acceleration** — Acceleration
  - prerequisites: mech-velocity · math: pa-slope, calculus-1:Differentiation rules (power, product, quotient, chain)
  - unlocks: mech-const-accel, mech-motion-integration, mech-forces
  - lab + colours: stacked x(t), v(t), a(t) graphs linked by a time cursor; speeding up vs slowing down (sign of v·a); position cyan c2, velocity pink c3, acceleration amber c1.
- **mech-const-accel** — Motion with Constant Acceleration
  - prerequisites: mech-acceleration · math: a1-literal, a1-quad-formula, a1-sys-sub
  - unlocks: mech-free-fall, mech-2d-motion
  - lab + colours: car on a track with x₀, v₀, a sliders; the four kinematic equations with the knowns/unknowns highlighted; v(t) graph area = displacement; initial values cyan c2, acceleration pink c3, result amber c1, area violet c4.
- **mech-motion-integration** — Finding Velocity & Position by Integration
  - prerequisites: mech-acceleration · math: calculus-1:Antiderivatives and the definite integral, calculus-2:Fundamental Theorem of Calculus
  - unlocks: mech-drag, mech-impulse
  - lab + colours: pick a(t) (constant, linear, sinusoidal); v(t) built as accumulated area under a(t) and x(t) as area under v(t), Riemann strips refining; a(t) amber c1, v(t) pink c3, x(t) cyan c2, accumulated area violet c4.
- **mech-free-fall** — Free Fall
  - prerequisites: mech-const-accel · math: a1-quad-apps, a1-quad-formula
  - unlocks: mech-projectile
  - lab + colours: ball thrown up from a height with v₀ slider; strobe positions, y(t) and v(t); apex and landing time from the quadratic; g = 9.80 m/s²; ball amber c1, y(t) cyan c2, v(t) pink c3, apex violet c4.
- **mech-2d-motion** — Motion in Two & Three Dimensions
  - prerequisites: mech-const-accel, mech-components · math: pa-coordinate, trigonometry:Vectors in the plane, precalculus:Parametric equations
  - unlocks: mech-projectile, mech-circular, mech-relative
  - lab + colours: particle on a curved path r(t); position, velocity (tangent) and acceleration vectors at a time cursor, with components; position cyan c2, velocity pink c3, acceleration amber c1, path violet c4.
- **mech-projectile** — Projectile Motion
  - prerequisites: mech-2d-motion, mech-free-fall · math: trigonometry:Right-triangle ratios (SOH-CAH-TOA), trigonometry:Trigonometric identities, a1-quad-graphs
  - unlocks: (none in charted trees)
  - lab + colours: launcher with v₀, θ and launch height; trajectory, time of flight, max height and range; complementary angles on level ground; horizontal component cyan c2, vertical pink c3, trajectory amber c1, apex/range violet c4.
- **mech-circular** — Uniform & Nonuniform Circular Motion
  - prerequisites: mech-2d-motion · math: trigonometry:Radian and degree measure, trigonometry:The unit circle, calculus-1:Derivatives of trig, exponential and log functions
  - unlocks: mech-centripetal, mech-rot-kinematics
  - lab + colours: object on a circle with r and speed sliders; velocity tangent, centripetal acceleration inward, optional tangential acceleration; period and frequency; velocity pink c3, centripetal acceleration amber c1, tangential violet c4, radius cyan c2.
- **mech-relative** — Relative Motion
  - prerequisites: mech-2d-motion · math: pa-pythagorean, trigonometry:Law of Sines and Law of Cosines
  - unlocks: (none in charted trees)
  - lab + colours: boat crossing a river (or plane in wind): v(boat rel water) + v(water rel ground) = v(boat rel ground); heading slider; drift and crossing time; boat-rel-water cyan c2, current pink c3, ground velocity amber c1.

### Newton's Laws
- **mech-forces** — Forces & Free-Body Diagrams
  - prerequisites: mech-components, mech-acceleration · math: trigonometry:Vectors in the plane, pa-pythagorean
  - unlocks: mech-newton-1
  - lab + colours: build a free-body diagram for presets (book on table, hanging lamp, box pulled at an angle); forces as arrows from a dot, net force computed; applied/tension cyan c2, weight pink c3, normal violet c4, net force amber c1.
- **mech-newton-1** — Newton's First Law & Inertia
  - prerequisites: mech-forces · math: trigonometry:Vectors in the plane
  - unlocks: mech-newton-2, mech-newton-3
  - lab + colours: puck on a surface with adjustable friction down to zero; push then release; constant velocity when net force is zero; equilibrium check ΣF = 0; puck cyan c2, velocity pink c3, net force amber c1, friction violet c4.
- **mech-newton-2** — Newton's Second Law, Mass & Weight
  - prerequisites: mech-newton-1 · math: a1-literal, pa-proportional
  - unlocks: mech-common-forces, mech-work, mech-torque
  - lab + colours: cart with mass and applied-force sliders; a = F_net/m live; a vs F and a vs 1/m graphs; weight w = mg on Earth/Moon/Mars; force cyan c2, mass pink c3, acceleration amber c1, weight violet c4.
- **mech-newton-3** — Newton's Third Law
  - prerequisites: mech-newton-1 · math: a1-sys-elim
  - unlocks: mech-common-forces, mech-impulse, mech-gravitation
  - lab + colours: two skaters pushing apart / truck–car contact; action–reaction pair on separate bodies, equal magnitudes, different accelerations; force on A cyan c2, force on B pink c3, accelerations amber c1.
- **mech-common-forces** — Normal, Tension & Spring Forces
  - prerequisites: mech-newton-2, mech-newton-3 · math: pa-proportional, a1-slope-forms, trigonometry:Right-triangle ratios (SOH-CAH-TOA)
  - unlocks: mech-friction, mech-centripetal, mech-potential
  - lab + colours: modes: elevator scale (apparent weight with acceleration), hanging mass from two ropes at angles (tensions), spring stretch F = −kx with force–extension graph; normal violet c4, tension cyan c2, spring force pink c3, weight/result amber c1.
- **mech-friction** — Friction
  - prerequisites: mech-common-forces · math: a1-compound, trigonometry:Right-triangle ratios (SOH-CAH-TOA)
  - unlocks: mech-newton-apps, mech-drag
  - lab + colours: pull a block with increasing force; static friction rises to μsN then drops to kinetic μkN; friction vs applied force graph; material presets; applied cyan c2, static friction violet c4, kinetic friction pink c3, threshold amber c1.
- **mech-centripetal** — Centripetal Force & Circular Dynamics
  - prerequisites: mech-common-forces, mech-circular · math: trigonometry:Right-triangle ratios (SOH-CAH-TOA), a1-radicals
  - unlocks: mech-gravitation
  - lab + colours: car on a flat or banked curve with radius, speed, bank angle and μs; which force supplies the centripetal force; max safe speed; ideal banking speed; normal violet c4, friction pink c3, net inward force amber c1, velocity cyan c2.
- **mech-newton-apps** — Inclines & Connected Objects
  - prerequisites: mech-friction · math: a1-sys-elim, trigonometry:Right-triangle ratios (SOH-CAH-TOA)
  - unlocks: (none in charted trees)
  - lab + colours: block on an incline (angle, μ) and an Atwood / incline-plus-hanging-mass system; weight resolved into parallel and perpendicular parts; system acceleration and tension; parallel component cyan c2, perpendicular pink c3, tension violet c4, acceleration amber c1.
- **mech-drag** — Drag Force & Terminal Speed
  - prerequisites: mech-friction, mech-motion-integration · math: a1-exp-functions, calculus-1:Limits and continuity, diff-eq:First-order equations: separable, linear, exact
  - unlocks: (none in charted trees)
  - lab + colours: falling object with linear (bv) or quadratic (½CρAv²) drag; v(t) approaching terminal speed, compared with no-drag line; skydiver/raindrop presets; weight pink c3, drag cyan c2, terminal speed amber c1, no-drag reference violet c4.

### Energy & Momentum
- **mech-work** — Work
  - prerequisites: mech-newton-2, mech-vector-products · math: trigonometry:Right-triangle ratios (SOH-CAH-TOA), calculus-1:Antiderivatives and the definite integral, calculus-2:Area, volume, arc length, work
  - unlocks: mech-kinetic, mech-power
  - lab + colours: push a crate with a force at angle θ over a displacement (W = Fd cos θ, signs for θ > 90°); second mode: variable force F(x) (spring) with work as area under the curve; force cyan c2, displacement pink c3, work/area amber c1, angle violet c4.
- **mech-impulse** — Momentum & Impulse
  - prerequisites: mech-newton-3, mech-motion-integration · math: a1-literal, calculus-1:Antiderivatives and the definite integral
  - unlocks: mech-momentum-cons
  - lab + colours: force–time curve of a collision (egg on pillow vs floor); impulse as area; same Δp with longer Δt gives smaller peak force; force curve cyan c2, impulse area amber c1, Δt pink c3, peak force violet c4.
- **mech-kinetic** — Kinetic Energy & the Work–Energy Theorem
  - prerequisites: mech-work · math: a1-radicals, a1-literal
  - unlocks: mech-potential, mech-collisions, mech-rot-inertia
  - lab + colours: several forces act on a sled over a distance; bar chart of work by each force, net work = ΔK; K = ½mv² vs speed curve; individual works cyan c2 / pink c3, net work amber c1, kinetic energy violet c4.
- **mech-power** — Power
  - prerequisites: mech-work · math: a1-literal, calculus-1:Definition of the derivative
  - unlocks: (none in charted trees)
  - lab + colours: lift a load up stairs or by motor; P = W/t and P = F·v; W, kW and horsepower; work cyan c2, time pink c3, power amber c1.
- **mech-momentum-cons** — Conservation of Linear Momentum
  - prerequisites: mech-impulse · math: a1-sys-sub, trigonometry:Vectors in the plane
  - unlocks: mech-collisions, mech-center-mass, mech-ang-momentum
  - lab + colours: two carts on a track (masses, velocities, spring release or stick); total momentum bar stays constant; system boundary shown; cart A cyan c2, cart B pink c3, total momentum amber c1.
- **mech-potential** — Potential Energy & Conservative Forces
  - prerequisites: mech-kinetic, mech-common-forces · math: calculus-1:Antiderivatives and the definite integral, calculus-1:Differentiation rules (power, product, quotient, chain)
  - unlocks: mech-energy-cons
  - lab + colours: gravity and spring potential energy; path-independence demo (two paths, same work by gravity; friction path differs); U = mgh and U = ½kx² curves; gravitational U cyan c2, spring U pink c3, path violet c4, work amber c1.
- **mech-collisions** — Collisions: Elastic & Inelastic
  - prerequisites: mech-momentum-cons, mech-kinetic · math: a1-sys-elim, a1-quad-formula, trigonometry:Vectors in the plane
  - unlocks: (none in charted trees)
  - lab + colours: 1-D collision with coefficient-of-restitution slider (elastic → perfectly inelastic); before/after momentum and KE bars; 2-D glancing mode with momentum vectors; body A cyan c2, body B pink c3, momentum amber c1, kinetic energy lost violet c4.
- **mech-center-mass** — Center of Mass
  - prerequisites: mech-momentum-cons · math: averages, calculus-2:Area, volume, arc length, work
  - unlocks: mech-equilibrium
  - lab + colours: point masses on a plane (drag positions, masses) with the centre of mass marked; second mode: a thrown wrench whose centre of mass follows a parabola; masses cyan c2, position vectors pink c3, centre of mass amber c1.
- **mech-energy-cons** — Conservation of Energy
  - prerequisites: mech-potential · math: a1-radicals, a1-sys-sub
  - unlocks: mech-energy-diagrams, mech-rolling, mech-orbits
  - lab + colours: roller-coaster / skate-park track with friction toggle; energy bar chart K, U, thermal at the cursor position; speed at any point from energy; kinetic amber c1, potential cyan c2, thermal pink c3, total violet c4.
- **mech-energy-diagrams** — Potential Energy Diagrams & Equilibrium
  - prerequisites: mech-energy-cons · math: a1-quad-graphs, calculus-1:Curve sketching and the Mean Value Theorem
  - unlocks: (none in charted trees)
  - lab + colours: U(x) curve (presets: spring, double well, molecular-type); total-energy line sets turning points; F = −dU/dx arrow; stable/unstable equilibria marked; U(x) cyan c2, total energy amber c1, force pink c3, equilibria violet c4.

### Rotation
- **mech-rot-kinematics** — Rotational Variables & Kinematics
  - prerequisites: mech-circular · math: trigonometry:Radian and degree measure, calculus-1:Definition of the derivative
  - unlocks: mech-rot-inertia, mech-torque
  - lab + colours: spinning wheel with ω₀ and α sliders; θ, ω, α and a point's tangential speed v = rω; angle cyan c2, angular velocity pink c3, angular acceleration amber c1, tangential speed violet c4.
- **mech-rot-inertia** — Moment of Inertia & Rotational Kinetic Energy
  - prerequisites: mech-rot-kinematics, mech-kinetic · math: g-volume, calculus-1:Antiderivatives and the definite integral
  - unlocks: mech-rot-dynamics
  - lab + colours: shapes (hoop, disk, sphere, rod about centre/end) with I formulas; beads sliding along a rod change I; parallel-axis theorem; mass distribution cyan c2, axis pink c3, I amber c1, rotational KE violet c4.
- **mech-torque** — Torque
  - prerequisites: mech-rot-kinematics, mech-vector-products, mech-newton-2 · math: trigonometry:Right-triangle ratios (SOH-CAH-TOA), calculus-3:Vectors, dot and cross products
  - unlocks: mech-rot-dynamics, mech-equilibrium
  - lab + colours: wrench on a bolt with force magnitude, angle and grip distance; τ = rF sin θ, lever arm shown; sign/direction by right-hand rule; force cyan c2, lever arm pink c3, torque amber c1, angle violet c4.
- **mech-rot-dynamics** — Newton's Second Law for Rotation
  - prerequisites: mech-rot-inertia, mech-torque · math: a1-literal, a1-sys-elim
  - unlocks: mech-rolling, mech-ang-momentum
  - lab + colours: pulley with a hanging mass (massive pulley); coupled linear and angular equations; α = τ/I; hanging mass cyan c2, tension pink c3, angular acceleration amber c1, pulley inertia violet c4.
- **mech-equilibrium** — Static Equilibrium
  - prerequisites: mech-torque, mech-center-mass · math: a1-sys-elim, trigonometry:Right-triangle ratios (SOH-CAH-TOA)
  - unlocks: (none in charted trees)
  - lab + colours: plank on two supports (or seesaw) with movable loads; support forces from ΣF = 0 and Στ = 0 about a chosen pivot; tipping point; loads pink c3, support forces cyan c2, pivot violet c4, torque balance amber c1.
- **mech-rolling** — Rolling Motion
  - prerequisites: mech-rot-dynamics, mech-energy-cons · math: a1-radicals, a1-sys-sub
  - unlocks: (none in charted trees)
  - lab + colours: race of hoop, disk and sphere down an incline; v_cm = Rω; energy split translational vs rotational decides the winner; translational KE cyan c2, rotational KE pink c3, speed amber c1.
- **mech-ang-momentum** — Angular Momentum & Its Conservation
  - prerequisites: mech-rot-dynamics, mech-momentum-cons · math: a1-literal, calculus-3:Vectors, dot and cross products
  - unlocks: mech-kepler
  - lab + colours: spinning skater pulls arms in (I decreases, ω increases, L constant, KE increases); L = r × p for a particle; moment of inertia cyan c2, angular velocity pink c3, angular momentum amber c1, KE violet c4.

### Gravitation
- **mech-gravitation** — Newton's Law of Universal Gravitation
  - prerequisites: mech-newton-3, mech-centripetal · math: sci-notation, a1-radicals, a1-rational-exp
  - unlocks: mech-orbits
  - lab + colours: two masses with separation slider; F = Gm₁m₂/r² inverse-square curve; g at altitude for Earth; masses cyan c2 / pink c3, force amber c1, distance violet c4.
- **mech-orbits** — Gravitational Potential Energy, Orbits & Escape Speed
  - prerequisites: mech-gravitation, mech-energy-cons · math: a1-radicals, calculus-1:Antiderivatives and the definite integral
  - unlocks: mech-kepler
  - lab + colours: launch from a planet's surface with a speed slider; sub-orbital, circular, elliptical and escape trajectories; U = −GMm/r well with total energy line; planet cyan c2, trajectory amber c1, energy well pink c3, escape threshold violet c4.
- **mech-kepler** — Kepler's Laws
  - prerequisites: mech-orbits, mech-ang-momentum · math: a1-rational-exp, algebra-2:Conic sections
  - unlocks: (none in charted trees)
  - lab + colours: elliptical orbit with eccentricity slider; equal areas swept in equal times (shaded sectors); T² ∝ a³ plot with the planets; orbit cyan c2, swept areas amber c1, foci pink c3, semi-major axis violet c4.
