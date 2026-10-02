window.ARITH = window.ARITH || {};
ARITH["mus-pitch"] = {
  title: "Pitch, Notes & the Keyboard",
  short: "Letter names, half and whole steps, enharmonic spellings",
  grade: "College MUS 1xx · fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Music Fundamentals · pitch",
  hero: `<span class="m"><span class="c1">C♯<sub>4</sub></span> = <span class="c2">D♭<sub>4</sub></span></span>`,
  lede: `Western music names its pitches with seven letters, A to G, and a keyboard lays them out as a repeating pattern of seven white keys and five black keys. Learn to find any key by name, to move by half steps and whole steps, and to spell the same key more than one way.`,
  plain: `<p>A <b>pitch</b> is a sound heard as high or low. A <b>note</b> is the written symbol for a pitch, though musicians often use the two words loosely. The <b>musical alphabet</b> has seven letters, A B C D E F G, and then repeats. On a keyboard the white keys carry these letter names. The black keys sit in groups of two and three, and every C is the white key just left of a group of two black keys.</p>
<p>The smallest distance on the keyboard, from any key to the very next key above or below it, white or black, is a <b>half step</b> (in British usage a <b>semitone</b>). Two half steps make a <b>whole step</b> (a <b>whole tone</b>). Most adjacent white keys are a whole step apart, with a black key between them. Two pairs have no black key between them: <span class="m"><span class="c3">E–F</span></span> and <span class="m"><span class="c3">B–C</span></span> are half steps.</p>
<p>A <b>sharp</b> (♯) raises a letter by a half step, a <b>flat</b> (♭) lowers it by a half step, and a <b>natural</b> (♮) cancels either. A <b>double sharp</b> (𝄪) and <b>double flat</b> (𝄫) move a letter two half steps. So one black key has two everyday names: <span class="m"><span class="c1">C♯</span> = <span class="c2">D♭</span></span>. Names that sound the same but are spelled differently are <b>enharmonic</b>. White keys have enharmonic names too: <span class="m">E♯ = F</span>, <span class="m">C♭ = B</span>.</p>
<p>Twelve half steps make an <b>octave</b>, and the pattern of keys repeats. Pitches an octave apart sound so alike that they share a letter name and belong to the same <b>pitch class</b>. <b>Scientific pitch notation</b> adds an octave number: <span class="m"><span class="c5">C<sub>4</sub></span></span> is <b>middle C</b>, and the number goes up by one at every C. So the B just below middle C is <span class="m">B<sub>3</sub></span>, and the A above middle C, <span class="m">A<sub>4</sub></span>, is the tuning A of 440 Hz.</p>`,
  formal: `<div class="display"><b>Half step.</b> The distance between two adjacent keys of the keyboard (adjacent pitches of the twelve-note equal-tempered system). A <b>whole step</b> is two half steps.<br>A <b>diatonic half step</b> uses two adjacent letters (<span class="m">E–F</span>, <span class="m">C♯–D</span>). A <b>chromatic half step</b> keeps the letter and changes the accidental (<span class="m">F–F♯</span>, <span class="m">B♭–B</span>).</div>
<p><b>Accidentals.</b> ♯ = +1, ♭ = −1, 𝄪 = +2, 𝄫 = −2 half steps from the natural letter; ♮ restores the natural letter.</p>
<p><b>Enharmonic equivalence.</b> Two spellings are enharmonic when they name the same key: <span class="m">F♯<sub>4</sub> = G♭<sub>4</sub></span>, <span class="m">B♯<sub>3</sub> = C<sub>4</sub></span>. Each key has at most three spellings using accidentals from 𝄫 to 𝄪.</p>
<p><b>Scientific pitch notation.</b> Letter, accidental, octave number; octave numbers change between B and C, and the number belongs to the letter, so <span class="m">C♭<sub>4</sub></span> sounds the same as <span class="m">B<sub>3</sub></span>. Middle C is <span class="m">C<sub>4</sub></span>; the 88-key piano runs from <span class="m">A<sub>0</sub></span> to <span class="m">C<sub>8</sub></span>.</p>
<div class="display"><b>Key numbers.</b> With C = 0, D = 2, E = 4, F = 5, G = 7, A = 9, B = 11 for the natural letter and <i>a</i> for the accidental, the MIDI number of a pitch in octave <i>o</i> is<br><span class="m"><i>m</i> = 12(<i>o</i> + 1) + <i>n</i><sub>letter</sub> + <i>a</i></span>, so <span class="m">C<sub>4</sub> = 60</span> and <span class="m">A<sub>4</sub> = 69</span>.<br><b>Pitch class.</b> <span class="m"><i>m</i> mod 12</span>, written 0–11 with C = 0. Two pitches belong to the same pitch class exactly when they are a whole number of octaves apart or enharmonic.</div>`,
  legend: [
    { c: "c1", sym: `C♯<sub>4</sub>`, name: "Selected note", desc: "The key you are naming, in scientific pitch notation." },
    { c: "c2", sym: `D♭<sub>4</sub>`, name: "Enharmonic spelling", desc: "Another name for the same key." },
    { c: "c3", sym: `H`, name: "Half step", desc: "One key to the very next key; E–F and B–C are the white-key half steps." },
    { c: "c4", sym: `W`, name: "Whole step", desc: "Two half steps, with one key skipped between." },
    { c: "c5", sym: `C<sub>3</sub> C<sub>4</sub> C<sub>5</sub>`, name: "Same pitch class", desc: "Keys an octave apart, sharing a letter name; middle C is C<sub>4</sub>." }
  ],
  steps: {
    title: "How to find and name any key",
    items: [
      `Find C: the white key just left of each group of two black keys. The C nearest the middle of the piano is <span class="m"><span class="c5">C<sub>4</sub></span></span>.`,
      `Count up the white keys with the alphabet, C D E F G A B, then C again with the octave number one higher.`,
      `For a black key, name it from the white key below with ♯ or from the white key above with ♭. Both names are correct; the musical context (key, scale, interval) decides which one is written.`,
      `To move by steps, count keys, not letters: a <span class="m c3">half step</span> is the next key, a <span class="m c4">whole step</span> skips one. Remember that E–F and B–C have no black key between them.`,
      `When an accidental pushes a letter across B–C, keep the octave number of the letter: <span class="m">B♯<sub>3</sub></span> is the same key as <span class="m">C<sub>4</sub></span>.`
    ]
  },
  example: {
    prompt: `Start on <span class="m">B♭<sub>3</sub></span> and move up a half step, then a whole step, then another whole step. Name each key you land on (give both spellings of a black key), with its MIDI number and pitch class. How many half steps did you travel in all?`,
    lines: [
      { math: `<span class="m"><span class="c1">B♭<sub>3</sub></span> = 12(3 + 1) + 11 − 1 = 58</span>`, note: "A black key, also spelled A♯3. Pitch class 58 mod 12 = 10." },
      { math: `<span class="m">58 + <span class="c3">1</span> = 59 → B<sub>3</sub></span>`, note: "A half step up is the white key B3, pitch class 11. It can also be spelled C♭4." },
      { math: `<span class="m">59 + <span class="c4">2</span> = 61 → <span class="c1">C♯<sub>4</sub></span> = <span class="c2">D♭<sub>4</sub></span></span>`, note: "The whole step crosses B–C, so the octave number changes from 3 to 4. Pitch class 1." },
      { math: `<span class="m">61 + <span class="c4">2</span> = 63 → <span class="c1">D♯<sub>4</sub></span> = <span class="c2">E♭<sub>4</sub></span></span>`, note: "Another black key, pitch class 3." },
      { math: `<span class="m"><span class="c3">1</span> + <span class="c4">2</span> + <span class="c4">2</span> = 5 = 63 − 58</span>`, note: "The total distance is the difference of the MIDI numbers." }
    ],
    answer: `<span class="m">B♭<sub>3</sub> (58) → B<sub>3</sub> (59) → C♯<sub>4</sub>/D♭<sub>4</sub> (61) → D♯<sub>4</sub>/E♭<sub>4</sub> (63)</span>, pitch classes 10, 11, 1, 3; five half steps in all.`
  },
  why: `<p>Every later skill in theory assumes you can find a pitch instantly and count half steps without thinking. Scales are patterns of whole and half steps, intervals are named by letters and measured in half steps, and chords are stacks of intervals. Enharmonic spelling matters because the same key is written differently in different keys: <span class="m">F♯</span> belongs to D major and <span class="m">G♭</span> to E♭ minor.</p>
<p>Scientific pitch notation and MIDI numbers are how musicians, engineers and software agree on an exact pitch. A DAW piano roll, a tuner app and an orchestral range chart all use them.</p>`,
  careers: [
    { role: "Piano teacher", use: "Teaches key geography, octave names and half and whole steps in the first lessons and builds every scale on them." },
    { role: "Piano technician", use: "Tunes and regulates all 88 keys from A0 to C8, setting each octave from a reference A4 = 440 Hz." },
    { role: "Music producer", use: "Edits notes on a DAW piano roll, where each row is a MIDI note number and C4 or C3 marks middle C depending on the software." },
    { role: "Audio software developer", use: "Converts between MIDI note numbers, note names and frequencies in synthesizers, tuners and notation programs." },
    { role: "Music copyist and engraver", use: "Chooses between enharmonic spellings such as F sharp and G flat so a part reads correctly in its key." },
    { role: "Choral conductor", use: "Gives starting pitches by name and octave and checks voice ranges against scientific pitch notation." }
  ],
  life: [
    "Finding middle C on any piano by the group of two black keys",
    "Reading the note names a guitar or chromatic tuner app shows",
    "Setting a ringtone or game sound in a music app by choosing notes on a piano roll",
    "Following sheet music that writes the same key as C sharp in one piece and D flat in another",
    "Hearing that a man and a child singing the same song are an octave apart"
  ],
  fields: [
    { name: "Music production", use: "Piano-roll editors label rows with note names and MIDI numbers from 0 to 127." },
    { name: "Audio engineering", use: "Synthesizers and samplers map key numbers to frequencies and samples." },
    { name: "Music education", use: "Keyboard skills classes start with half steps, whole steps and enharmonic spelling." },
    { name: "Acoustics", use: "Pitch names map to measured frequencies, starting from A4 = 440 Hz." }
  ],
  prereqWhy: {},
  unlocksWhy: {
    "mus-sound": "The frequency of each key, the 2 : 1 ratio of the octave and the names of the harmonics all start from the scientific pitch names and half steps learned here.",
    "mus-staff": "The staff places these letter names on lines and spaces; reading it means turning a position into a letter, an accidental and an octave number."
  },
  mathWhy: {
    "modular": "Pitch class is arithmetic modulo 12: twelve half steps bring you back to the same letter, so the pitch class of a key is its MIDI number mod 12, and moving up 7 half steps twelve times returns to where you started."
  },
  beyond: [
    { field: "Post-Tonal Theory", why: "Pitch classes become the integers 0 to 11, and transposition is addition mod 12." },
    { field: "Aural Skills I", why: "Singing and hearing half and whole steps is the first ear-training skill." },
    { field: "Mathematical Music Theory", why: "The twelve pitch classes form the cyclic group Z12, the starting point for transformational theory." },
    { field: "Theory I: Diatonic Harmony", why: "Correct enharmonic spelling of chord tones is required in every part-writing exercise." }
  ],
  mistakes: [
    { wrong: `Saying every pair of adjacent white keys is a whole step.`, fix: `<span class="m">E–F</span> and <span class="m">B–C</span> have no black key between them, so they are half steps.` },
    { wrong: `Naming the key a half step below <span class="m">C<sub>4</sub></span> as <span class="m">B<sub>4</sub></span>.`, fix: `Octave numbers change at C, so it is <span class="m">B<sub>3</sub></span>. Spelled with a C, it is <span class="m">C♭<sub>4</sub></span>: the octave number goes with the letter.` },
    { wrong: `Thinking a sharp means "the black key to the right".`, fix: `A sharp means one half step higher. <span class="m">E♯</span> and <span class="m">B♯</span> are white keys (F and C).` },
    { wrong: `Counting a whole step by letters, so that <span class="m">E</span> to <span class="m">F♯</span> looks like a half step.`, fix: `Count keys: E–F is one half step and F–F♯ another, so <span class="m">E–F♯</span> is a whole step.` }
  ],
  practice: [
    { q: `(a) Which two pairs of adjacent white keys are a half step apart? (b) How many half steps are in an octave? (c) How many white keys and how many black keys are in one octave of the keyboard?`,
      a: `(a) <span class="m">E–F</span> and <span class="m">B–C</span>. (b) 12. (c) 7 white keys and 5 black keys, 12 keys in all.` },
    { q: `Give two other spellings (using ♯, ♭, 𝄪 or 𝄫) for each key: (a) <span class="m">F♯</span>, (b) <span class="m">E</span>, (c) <span class="m">C</span>, (d) <span class="m">A♭</span>.`,
      a: `(a) <span class="m">G♭</span> and <span class="m">E𝄪</span>. (b) <span class="m">F♭</span> and <span class="m">D𝄪</span>. (c) <span class="m">B♯</span> and <span class="m">D𝄫</span>. (d) <span class="m">G♯</span> only; <span class="m">A♭</span> is a black key, which has just two spellings within 𝄫 to 𝄪 (no letter is three half steps away).` },
    { q: `In scientific pitch notation: (a) name the key a half step below <span class="m">C<sub>4</sub></span> in two ways; (b) name the key a whole step above <span class="m">B<sub>4</sub></span> in two ways; (c) which key has MIDI number 70?`,
      a: `(a) <span class="m">B<sub>3</sub></span> or <span class="m">C♭<sub>4</sub></span> (MIDI 59). (b) <span class="m">C♯<sub>5</sub></span> or <span class="m">D♭<sub>5</sub></span> (MIDI 71 + 2 = 73). (c) <span class="m">70 = 12(4 + 1) + 10</span>, so <span class="m">A♯<sub>4</sub> = B♭<sub>4</sub></span>.` },
    { q: `A melody starts on <span class="m">A<sub>3</sub></span> and three times moves up 7 half steps. (a) Name the last key and its pitch class. (b) If the 7-half-step move were repeated 12 times in all, which pitch class would you reach, and why?`,
      a: `(a) <span class="m">A<sub>3</sub> = 57</span>, and <span class="m">57 + 3 · 7 = 78</span>. <span class="m">78 = 12(5 + 1) + 6</span>, so the key is <span class="m">F♯<sub>5</sub> = G♭<sub>5</sub></span>, pitch class <span class="m">78 mod 12 = 6</span>. (b) <span class="m">12 · 7 = 84 ≡ 0 (mod 12)</span>, so you return to pitch class 9, A, seven octaves higher. Along the way the moves visit all twelve pitch classes, because 7 and 12 have no common factor.` }
  ],
  origin: `Letter names for pitches come from medieval Latin music treatises, which used the letters A to G for the notes of the scale. German usage still differs: German <i>B</i> is English B♭, and English B♮ is German <i>H</i>, which is why J. S. Bach could spell his name as the notes B♭–A–C–B. The MIDI 1.0 specification of 1983 gave every key a number from 0 to 127, with middle C as 60. Another octave system, Helmholtz notation, writes middle C as c′.`
};
