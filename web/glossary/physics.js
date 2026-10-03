/* Glossary: Physics. Spec: web/GLOSSARY-SPEC.md. */
DB.addGlossary("physics", [
  { w: "work", field: "mechanics", node: "mech-work", pos: "n", ipa: "/wɝk/", register: "technical",
    senses: ["Energy transferred to or from an object by a force acting along a displacement: for a constant force, <i>W</i> = <i>Fd</i> cos θ. SI unit the joule (J)."] },
  { w: "power", field: "mechanics", node: "mech-power", pos: "n", ipa: "/ˈpaʊɚ/", register: "technical",
    senses: ["The rate at which work is done or energy is transferred: <i>P</i> = d<i>W</i>/d<i>t</i>. SI unit the watt (1 W = 1 J/s)."] },
  { w: "mass", field: "mechanics", node: "mech-newton-2", pos: "n", ipa: "/mæs/", register: "technical",
    senses: ["The measure of an object’s inertia, its resistance to a change in velocity; SI unit the kilogram (kg). Not the same as weight, which is the gravitational force on the object."] },
  { w: "period", field: "mechanics", node: "mech-circular", pos: "n", ipa: "/ˈpɪriəd/", register: "technical",
    senses: ["The time for one complete cycle of a repeating motion, such as one revolution or one oscillation: <i>T</i> = 1/<i>f</i>."], forms: ["periods"] },
  { w: "frequency", field: "waves", pos: "n", ipa: "/ˈfrikwənsi/", syl: "fre·quen·cy", register: "technical",
    senses: ["The number of cycles per unit time, <i>f</i> = 1/<i>T</i>; SI unit the hertz (1 Hz = 1 cycle per second)."],
    origin: "Latin <i>frequentia</i> ‘crowd, frequent occurrence’, from <i>frequens</i> ‘crowded, often’", forms: ["frequencies"] },
  { w: "string", field: "waves", pos: "n", ipa: "/strɪŋ/", register: "technical",
    senses: ["A taut, flexible cord used as the model medium for waves. On a string fixed at both ends, the standing waves have frequencies <i>f<sub>n</sub></i> = <i>nv</i>/(2<i>L</i>), <i>n</i> = 1, 2, 3, …"], forms: ["strings"] },
  { w: "beat", field: "waves", pos: "n", ipa: "/bit/", register: "technical",
    senses: ["The regular rise and fall in loudness heard when two sound waves of slightly different frequencies combine; the beat frequency is |<i>f</i>₁ − <i>f</i>₂|."], forms: ["beats"] }
]);
