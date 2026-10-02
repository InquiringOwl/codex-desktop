window.ARITH = window.ARITH || {};
ARITH["mus-durations"] = {
  title: "Note Values & Rests",
  short: "Whole, half, quarter, eighth: each value halves the last",
  grade: "College MUS 1xx · fundamentals",
  hours: 3,
  voice: "plain",
  eyebrow: "Music Fundamentals · rhythm",
  hero: `<span class="m"><span class="c1">♩</span><span class="c2">.</span> = <span class="c1"><span class="fr"><span>1</span><span>4</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>8</span></span></span> = <span class="c5"><span class="fr"><span>3</span><span>8</span></span></span></span>`,
  lede: `Written rhythm measures every duration against the whole note. Each simpler value is exactly half of the one before it, a dot adds half of the value it follows, and a tie joins two values into one sound. With those three rules every duration on the page is a fraction you can add exactly.`,
  plain: `<p>A note's <b>value</b> is its length relative to the other notes, not a length in seconds. The <b>whole note</b> is the reference. A <b>half note</b> lasts half as long, a <b>quarter note</b> half of that, then the <b>eighth note</b> and the <b>sixteenth note</b>. So one whole note equals two halves, four quarters, eight eighths or sixteen sixteenths. British usage names the same values semibreve, minim, crotchet, quaver and semiquaver; this page uses the American names.</p>
<p>The shape tells you the value. A whole note is an open notehead with no stem. A half note is open with a stem. A quarter note is filled with a stem. Each flag on the stem halves the value again: one flag for an eighth, two for a sixteenth, three for a thirty-second. When several flagged notes stand together, the flags are usually replaced by <b>beams</b> that group them by beat.</p>
<p>A <b>dot</b> after a notehead adds half of that note's value: a dotted half note lasts <span class="m"><span class="c1"><span class="fr"><span>1</span><span>2</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>4</span></span></span> = <span class="fr"><span>3</span><span>4</span></span></span>. A second dot adds half of what the first dot added. A <b>tie</b> is a curved line joining two notes of the same pitch; the second note is not played again, its value is simply added to the first. Ties make lengths no single note can show, such as a quarter tied to a sixteenth.</p>
<p>Every note value has a matching <b>rest</b>, a sign for silence of the same length. Rests can be dotted like notes. They are never tied; two rests in a row already add up.</p>`,
  formal: `<div class="display"><b>Note values.</b> Measured in whole notes: whole = 1, half = <span class="fr"><span>1</span><span>2</span></span>, quarter = <span class="fr"><span>1</span><span>4</span></span>, eighth = <span class="fr"><span>1</span><span>8</span></span>, sixteenth = <span class="fr"><span>1</span><span>16</span></span>, thirty-second = <span class="fr"><span>1</span><span>32</span></span>. In general the value with <i>k</i> flags lasts <span class="fr"><span>1</span><span>2<sup><i>k</i>+2</sup></span></span>, and each value is to the next as 2 : 1.</div>
<div class="display"><b>Dots.</b> A note of value <i>v</i> with <i>n</i> dots lasts<br><i>v</i> + <span class="fr"><span><i>v</i></span><span>2</span></span> + <span class="fr"><span><i>v</i></span><span>4</span></span> + … + <span class="fr"><span><i>v</i></span><span>2<sup><i>n</i></sup></span></span> = <i>v</i> · <span class="fr"><span>2<sup><i>n</i>+1</sup> − 1</span><span>2<sup><i>n</i></sup></span></span>.<br>One dot multiplies by <span class="fr"><span>3</span><span>2</span></span>, two dots by <span class="fr"><span>7</span><span>4</span></span>, three by <span class="fr"><span>15</span><span>8</span></span>.</div>
<div class="display"><b>Tie.</b> Two or more notes of the same pitch joined by ties sound as one note whose duration is the sum of their values.<br><b>Rest.</b> A silence whose duration equals the value of the matching note, dots included.</div>
<p>The <b>breve</b> (double whole note, 2) exists but is rare outside early music and some 2/1 and 4/2 passages. A whole rest hangs below the fourth line of the staff; a half rest sits on the middle line. The whole rest also marks a full measure of silence in any meter.</p>`,
  legend: [
    { c: "c1", sym: `<span class="m">♩</span>`, name: "Value being built", desc: "The base note before any dot or tie, as a fraction of a whole note." },
    { c: "c2", sym: `<span class="m">♩.</span>`, name: "Dot addition", desc: "Each dot adds half of the previous addition: <span class=\"m\"><span class=\"fr\"><span>1</span><span>8</span></span></span>, then <span class=\"m\"><span class=\"fr\"><span>1</span><span>16</span></span></span> after a quarter." },
    { c: "c3", sym: `<span class="m">⌒</span>`, name: "Tie", desc: "Joins notes of one pitch into a single sound; the values add." },
    { c: "c4", sym: `<span class="m">𝄽</span>`, name: "Rest", desc: "Silence with the same value as the matching note." },
    { c: "c5", sym: `<span class="m">Σ</span>`, name: "Total", desc: "The exact sum, in whole notes." }
  ],
  steps: {
    title: "How to find the duration of a written value",
    items: [
      `Read the notehead and stem: open without stem is a whole (1), open with stem a half (<span class="m"><span class="fr"><span>1</span><span>2</span></span></span>), filled with stem a quarter (<span class="m"><span class="fr"><span>1</span><span>4</span></span></span>).`,
      `Halve once for every flag or beam: one gives an eighth, two a sixteenth, three a thirty-second.`,
      `For each dot, add half of the last amount added: <span class="m"><span class="c1"><span class="fr"><span>1</span><span>4</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>8</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>16</span></span></span> = <span class="fr"><span>7</span><span>16</span></span></span> for a double-dotted quarter.`,
      `For tied notes, add the values of every note in the tie chain. Only the first is struck.`,
      `To compare or total several values, put them over a common denominator, usually 16 or 32, and add.`,
      `To count in beats, divide the total by the beat value: <span class="m"><span class="fr"><span>3</span><span>4</span></span> ÷ <span class="fr"><span>1</span><span>4</span></span> = 3</span> quarter-note beats.`
    ]
  },
  example: {
    prompt: `A passage reads: a dotted half note tied to an eighth note, then a double-dotted quarter note, then a sixteenth rest. Find the length of each event and the total, in whole notes and in quarter notes.`,
    lines: [
      { math: `<span class="m"><span class="c1"><span class="fr"><span>1</span><span>2</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>4</span></span></span> = <span class="fr"><span>3</span><span>4</span></span></span>`, note: "Dotted half: the dot adds half of 1/2." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> + <span class="c3"><span class="fr"><span>1</span><span>8</span></span></span> = <span class="fr"><span>6</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>7</span><span>8</span></span></span>`, note: "The tie adds the eighth to the same sound; it is not struck again." },
      { math: `<span class="m"><span class="c1"><span class="fr"><span>1</span><span>4</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>8</span></span></span> + <span class="c2"><span class="fr"><span>1</span><span>16</span></span></span> = <span class="fr"><span>7</span><span>16</span></span></span>`, note: "Double-dotted quarter: the second dot adds half of what the first added." },
      { math: `<span class="m"><span class="c4"><span class="fr"><span>1</span><span>16</span></span></span></span>`, note: "The sixteenth rest is silence of one sixteenth." },
      { math: `<span class="m"><span class="fr"><span>14</span><span>16</span></span> + <span class="fr"><span>7</span><span>16</span></span> + <span class="fr"><span>1</span><span>16</span></span> = <span class="fr"><span>22</span><span>16</span></span> = <span class="c5"><span class="fr"><span>11</span><span>8</span></span></span></span>`, note: "Common denominator 16, then add." },
      { math: `<span class="m"><span class="fr"><span>11</span><span>8</span></span> ÷ <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>11</span><span>2</span></span> = 5½</span>`, note: "Divide by the quarter note to count in quarters." }
    ],
    answer: `The tied note lasts <span class="m"><span class="fr"><span>7</span><span>8</span></span></span>, the double-dotted quarter <span class="m"><span class="fr"><span>7</span><span>16</span></span></span> and the rest <span class="m"><span class="fr"><span>1</span><span>16</span></span></span>: a total of <span class="m c5"><span class="fr"><span>11</span><span>8</span></span></span> of a whole note, or five and a half quarter notes.`
  },
  why: `<p>Rhythm is half of what a score tells a performer, and it is written entirely in these relative values. Reading them quickly is the basis of sight-reading, of rhythmic dictation in aural skills, and of every later topic in meter: a time signature only says how many of which value make a measure. The arithmetic is exact fraction work with powers of two, which is why counting errors in rhythm are always findable.</p>
<p>The same values run music software. A MIDI file or a digital audio workstation stores durations as whole numbers of ticks per quarter note, and its grid and quantise settings are labelled 1/4, 1/8, 1/16. Notation programs check that each measure adds up using exactly the sums on this page.</p>`,
  careers: [
    { role: "Music engraver or copyist", use: "Sets parts in notation software, choosing dots, ties and rests that show the beat clearly to players." },
    { role: "Session musician", use: "Sight-reads parts at the first rehearsal, which depends on reading note values and rests at a glance." },
    { role: "Music teacher", use: "Teaches beginning band and choir students to count values and rests before they learn pieces." },
    { role: "Music producer", use: "Sets the grid and quantise value in a workstation to sixteenth or eighth notes to tighten recorded parts." },
    { role: "Music software developer", use: "Converts note values to MIDI ticks, for example 480 ticks per quarter note, and back again." },
    { role: "Film music editor", use: "Converts note values at a given tempo into seconds to line cues up with picture." }
  ],
  life: [
    "Counting rests in a school band part so you come in on time",
    "Setting a drum machine or app grid to sixteenth notes",
    "Reading a hymnal or a lead sheet that uses dotted rhythms",
    "Holding a tied note across a page turn in a choir piece",
    "Setting a delay pedal or plug-in to a dotted-eighth echo"
  ],
  fields: [
    { name: "Music publishing", use: "Engraving standards decide how values, dots, ties and rests are laid out in printed parts." },
    { name: "Audio production", use: "Workstation grids, quantising and delay times are all set in note values." },
    { name: "Music technology", use: "MIDI and notation file formats store every duration as an exact number of ticks." },
    { name: "Music education", use: "Counting systems such as 1 e and a are built on the halving of note values." }
  ],
  prereqWhy: {},
  unlocksWhy: {
    "mus-simple-meter": "A time signature names a beat value and a number of beats, so filling a measure means adding the note values from this page until they reach the measure length."
  },
  mathWhy: {
    "fractions": "Every note value is a unit fraction of the whole note with a power of two in the denominator, and dotted values are fractions such as <span class=\"m\"><span class=\"fr\"><span>3</span><span>8</span></span></span> and <span class=\"m\"><span class=\"fr\"><span>7</span><span>16</span></span></span>.",
    "fraction-ops": "Totalling a rhythm is adding fractions over a common denominator, and counting it in beats is dividing by the beat value."
  },
  beyond: [
    { field: "Aural Skills I", why: "Rhythmic dictation asks you to hear durations and write them with the right values, dots and ties." },
    { field: "Post-Tonal Theory", why: "Twentieth-century rhythm uses additive values, irregular groups and long tie chains that are read with the same sums." },
    { field: "Mathematical Music Theory", why: "Rhythms are studied as patterns of onsets on a grid of equal values, such as necklaces and Euclidean rhythms." },
    { field: "Composition", why: "Notation and score preparation depend on choosing the clearest combination of values, dots and ties." }
  ],
  mistakes: [
    { wrong: "Reading a dotted quarter as a quarter plus a quarter, <span class=\"m\"><span class=\"fr\"><span>1</span><span>2</span></span></span>.", fix: "A dot adds half the value it follows: <span class=\"m\"><span class=\"fr\"><span>1</span><span>4</span></span> + <span class=\"fr\"><span>1</span><span>8</span></span> = <span class=\"fr\"><span>3</span><span>8</span></span></span>." },
    { wrong: "Making the second dot of a double-dotted half worth another <span class=\"m\"><span class=\"fr\"><span>1</span><span>4</span></span></span>.", fix: "Each dot adds half of the previous addition: <span class=\"m\"><span class=\"fr\"><span>1</span><span>2</span></span> + <span class=\"fr\"><span>1</span><span>4</span></span> + <span class=\"fr\"><span>1</span><span>8</span></span> = <span class=\"fr\"><span>7</span><span>8</span></span></span>." },
    { wrong: "Playing both notes of a tie, or treating a curve between two different pitches as a tie.", fix: "A tie joins notes of the same pitch and the second is not struck. A curve over different pitches is a slur, which shows phrasing, not duration." },
    { wrong: "Confusing the whole rest and the half rest.", fix: "The whole rest hangs down from the fourth line; the half rest sits on the middle line like a hat." }
  ],
  practice: [
    { q: `Give each as a fraction of a whole note: (a) a dotted half note, (b) a dotted eighth note, (c) a double-dotted half note, (d) a sixteenth rest.`,
      a: `(a) <span class="m"><span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>3</span><span>4</span></span></span>. (b) <span class="m"><span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>1</span><span>16</span></span> = <span class="fr"><span>3</span><span>16</span></span></span>. (c) <span class="m"><span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>7</span><span>8</span></span></span>. (d) <span class="m"><span class="fr"><span>1</span><span>16</span></span></span>, the same as a sixteenth note.` },
    { q: `How many (a) sixteenth notes equal a dotted quarter, (b) eighth notes equal a double-dotted half, (c) thirty-second notes equal a dotted eighth?`,
      a: `(a) <span class="m"><span class="fr"><span>3</span><span>8</span></span> ÷ <span class="fr"><span>1</span><span>16</span></span> = 6</span>. (b) <span class="m"><span class="fr"><span>7</span><span>8</span></span> ÷ <span class="fr"><span>1</span><span>8</span></span> = 7</span>. (c) <span class="m"><span class="fr"><span>3</span><span>16</span></span> ÷ <span class="fr"><span>1</span><span>32</span></span> = 6</span>.` },
    { q: `Write each tied pair or chain as a single note if possible: (a) a quarter tied to an eighth, (b) a half tied to a quarter tied to an eighth, (c) a quarter tied to a sixteenth.`,
      a: `(a) <span class="m"><span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>3</span><span>8</span></span></span>, a dotted quarter. (b) <span class="m"><span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>7</span><span>8</span></span></span>, a double-dotted half. (c) <span class="m"><span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>16</span></span> = <span class="fr"><span>5</span><span>16</span></span></span>. No single value, dotted or not, equals five sixteenths, so the tie is needed.` },
    { q: `A rhythm reads: half note, dotted quarter, eighth, quarter rest, two sixteenths, eighth. (a) What is its total length in whole notes and in quarter notes? (b) What single note value would bring the total to exactly two whole notes?`,
      a: `(a) <span class="m"><span class="fr"><span>8</span><span>16</span></span> + <span class="fr"><span>6</span><span>16</span></span> + <span class="fr"><span>2</span><span>16</span></span> + <span class="fr"><span>4</span><span>16</span></span> + <span class="fr"><span>2</span><span>16</span></span> + <span class="fr"><span>2</span><span>16</span></span> = <span class="fr"><span>24</span><span>16</span></span> = <span class="fr"><span>3</span><span>2</span></span></span> of a whole note, which is <span class="m"><span class="fr"><span>3</span><span>2</span></span> ÷ <span class="fr"><span>1</span><span>4</span></span> = 6</span> quarter notes. (b) <span class="m">2 − <span class="fr"><span>3</span><span>2</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, a half note.` }
  ],
  origin: `<p>Fixed relations between note shapes come from medieval <b>mensural notation</b>. Franco of Cologne's treatise <i>Ars cantus mensurabilis</i> (about 1280) set out the long, breve and semibreve and the rules for how many of one equal the next, which in his system was often three rather than two. Fourteenth-century theory added smaller values, including the minim, and allowed division by two as well as by three.</p>
<p>Around the middle of the fifteenth century scribes began to write the longer values with hollow noteheads, the so-called white notation, which is why whole and half notes are still open today. As division by two became the norm, the semibreve became the modern whole note and the minim the half note; the British names keep the old terms.</p>`
};
