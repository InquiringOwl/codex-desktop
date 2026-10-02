window.ARITH = window.ARITH || {};
ARITH["mus-simple-meter"] = {
  title: "Beat, Meter & Simple Time Signatures",
  short: "Beats grouped in twos, threes and fours, each split in two",
  grade: "College MUS 1xx · fundamentals",
  hours: 4,
  voice: "plain",
  eyebrow: "Music Fundamentals · meter",
  hero: `<span class="m"><span class="ts"><span>3</span><span>4</span></span> &nbsp; <span class="c2">1</span> <span class="c1">2</span> <span class="c1">3</span> <span class="c3">|</span> &nbsp; 3 × <span class="c1"><span class="fr"><span>1</span><span>4</span></span></span> = <span class="c5"><span class="fr"><span>3</span><span>4</span></span></span></span>`,
  lede: `Most music has a steady pulse, and the pulses fall into a repeating pattern of strong and weak. That pattern is the meter. In simple meter each beat divides into two equal parts, and the time signature names how many beats fill a measure and which note value gets the beat.`,
  plain: `<p>The <b>beat</b> is the steady pulse you tap your foot to. Beats are rarely all equal in weight: some feel strong and others weak, and the pattern repeats. <b>Meter</b> is that repeating grouping. Grouped in twos (strong, weak) it is <b>duple</b>; in threes (strong, weak, weak) <b>triple</b>; in fours (strong, weak, medium, weak) <b>quadruple</b>. Each group is written as one <b>measure</b> (or bar), closed off by a <b>bar line</b>. The first beat of a measure is the <b>downbeat</b>.</p>
<p>Each beat can also be split. When the beat divides into two equal parts, the meter is <b>simple</b>; when it divides into three, it is compound, the subject of the next topic. Counting simple meter out loud shows both levels: "1 and 2 and" for the divisions, "1 e and a" when the divisions split again.</p>
<p>A <b>time signature</b> at the start of a piece states the meter. In simple meter the top number is the number of beats in a measure and the bottom number names the beat unit: 2 for a half note, 4 for a quarter, 8 for an eighth. So <span class="ts"><span>3</span><span>4</span></span> means three quarter-note beats per measure, simple triple. Two signs replace numbers: <b>C</b> (common time) means <span class="ts"><span>4</span><span>4</span></span>, and C with a vertical stroke, <b>cut time</b> or <i>alla breve</i>, means <span class="ts"><span>2</span><span>2</span></span>.</p>
<p>A time signature is not a fraction. <span class="ts"><span>2</span><span>2</span></span> and <span class="ts"><span>4</span><span>4</span></span> both hold notes worth one whole note per measure, yet one has two half-note beats and the other four quarter-note beats, and they are felt, conducted and beamed differently. Beaming, the way eighths and sixteenths are joined, is written so that the beats stay visible.</p>`,
  formal: `<div class="display"><b>Simple meter.</b> A meter whose beat is an undotted note value that divides into two equal parts.<br><b>Time signature</b> <span class="ts"><span><i>b</i></span><span><i>u</i></span></span> (simple): <i>b</i> = beats per measure (2, 3 or 4), <i>u</i> = beat unit, the note value <span class="fr"><span>1</span><span><i>u</i></span></span>.<br>Measure length = <i>b</i> × <span class="fr"><span>1</span><span><i>u</i></span></span> whole notes.</div>
<div class="display"><b>Simple duple</b>: <span class="ts"><span>2</span><span>2</span></span> <span class="ts"><span>2</span><span>4</span></span> <span class="ts"><span>2</span><span>8</span></span> &nbsp; <b>Simple triple</b>: <span class="ts"><span>3</span><span>2</span></span> <span class="ts"><span>3</span><span>4</span></span> <span class="ts"><span>3</span><span>8</span></span> &nbsp; <b>Simple quadruple</b>: <span class="ts"><span>4</span><span>2</span></span> <span class="ts"><span>4</span><span>4</span></span> <span class="ts"><span>4</span><span>8</span></span></div>
<p>Accent patterns: duple strong–weak; triple strong–weak–weak; quadruple strong–weak–medium–weak, with a secondary accent on beat 3. A note that would cross a bar line is split and tied, because every measure must add up to exactly its length.</p>
<p>Notation conventions: beam notes within a beat, and in <span class="ts"><span>4</span><span>4</span></span> do not beam or write a single rest across the middle of the measure (beats 2 to 3), so that beat 3 stays visible. A <b>pickup</b> or <b>anacrusis</b> is an incomplete first measure; the final measure is then usually shortened so the two together make one full measure.</p>`,
  legend: [
    { c: "c1", sym: `<span class="m">♩</span>`, name: "Beat", desc: "The pulse; its note value is the beat unit named by the bottom number." },
    { c: "c2", sym: `<span class="m">1</span>`, name: "Strong beat", desc: "The downbeat, beat 1 of every measure." },
    { c: "c3", sym: `<span class="m">|</span>`, name: "Bar line, measure", desc: "Marks off one group of beats; each measure has length <i>b</i> × beat." },
    { c: "c4", sym: `<span class="m">♫</span>`, name: "Beat division", desc: "Each simple beat splits into two equal parts, counted with \"and\"." },
    { c: "c5", sym: `<span class="m">✓</span>`, name: "Full measure", desc: "Values that add to exactly the measure length." }
  ],
  steps: {
    title: "How to read a simple time signature and check a measure",
    items: [
      `Read the bottom number as a note value: 2 is a half note, 4 a quarter, 8 an eighth. That is the beat.`,
      `Read the top number as the number of beats: 2 is duple, 3 triple, 4 quadruple.`,
      `Find the measure length: beats × beat value, for example <span class="m">3 × <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>3</span><span>4</span></span></span> of a whole note in <span class="ts"><span>3</span><span>4</span></span>.`,
      `Add the values in each measure. The sum must equal the measure length exactly; if a note runs past the bar line, split it and tie the parts.`,
      `Beam and choose rests so that each beat starts visibly, and count aloud with "1 and 2 and" to check.`
    ]
  },
  example: {
    prompt: `Write these values in <span class="ts"><span>3</span><span>4</span></span>, adding bar lines and tying any note that crosses one: dotted quarter, eighth, half, half, quarter, dotted half, half.`,
    lines: [
      { math: `<span class="m"><span class="ts"><span>3</span><span>4</span></span>: 3 × <span class="c1"><span class="fr"><span>1</span><span>4</span></span></span> = <span class="c3"><span class="fr"><span>3</span><span>4</span></span></span></span>`, note: "Simple triple, quarter-note beat; each measure holds 3/4 of a whole note." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>1</span><span>2</span></span>, &nbsp; <span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>2</span></span> = 1 &gt; <span class="fr"><span>3</span><span>4</span></span></span>`, note: "The first half note runs past the first bar line." },
      { math: `<span class="m"><span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>1</span><span>4</span></span> <span class="c3">⌒</span> <span class="fr"><span>1</span><span>4</span></span></span>`, note: "Split it: a quarter ends measure 1, tied to a quarter that starts measure 2." },
      { math: `<span class="m">m. 1: <span class="fr"><span>3</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>1</span><span>4</span></span> = <span class="c5"><span class="fr"><span>3</span><span>4</span></span></span>; &nbsp; m. 2: <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>2</span></span> = <span class="c5"><span class="fr"><span>3</span><span>4</span></span></span></span>`, note: "Both measures are full." },
      { math: `<span class="m">m. 3: <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>3</span><span>4</span></span> = 1 &gt; <span class="fr"><span>3</span><span>4</span></span>, &nbsp; <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>1</span><span>2</span></span> <span class="c3">⌒</span> <span class="fr"><span>1</span><span>4</span></span></span>`, note: "The dotted half crosses the next bar line, so it becomes a half tied to a quarter." },
      { math: `<span class="m">m. 3: <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>2</span></span> = <span class="c5"><span class="fr"><span>3</span><span>4</span></span></span>; &nbsp; m. 4: <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>1</span><span>2</span></span> = <span class="c5"><span class="fr"><span>3</span><span>4</span></span></span></span>`, note: "Measures 3 and 4 are full." },
      { math: `<span class="m">4 × <span class="fr"><span>3</span><span>4</span></span> = 3 = <span class="fr"><span>3</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>2</span></span> + <span class="fr"><span>1</span><span>4</span></span> + <span class="fr"><span>3</span><span>4</span></span> + <span class="fr"><span>1</span><span>2</span></span></span>`, note: "Check: four measures hold exactly the total of the original values." }
    ],
    answer: `Four full measures: | dotted quarter, eighth, quarter ⌒ | quarter, half | quarter, half ⌒ | quarter, half |. The half note and the dotted half are each split at a bar line and tied, and every measure adds to <span class="m c5"><span class="fr"><span>3</span><span>4</span></span></span>.`
  },
  why: `<p>Meter is how performers stay together and how listeners know where they are. Conductors beat two, three or four patterns from the time signature, dancers count the bar, and band members count rests in measures. In writing music, a correctly barred rhythm with beams that show the beat can be read at sight; the same durations barred or beamed badly cannot.</p>
<p>Checking that a measure is full is exact fraction addition, the same sum notation software performs on every bar. The distinction between a time signature and a fraction is the first step toward compound meter, where <span class="ts"><span>6</span><span>8</span></span> and <span class="ts"><span>3</span><span>4</span></span> hold the same total but group it differently.</p>`,
  careers: [
    { role: "Orchestra or choir conductor", use: "Chooses a two, three or four beat pattern from the time signature and shows every downbeat to the ensemble." },
    { role: "Session drummer", use: "Plays to a click track and reads charts counted in bars of 4/4, 3/4 or cut time." },
    { role: "Dance accompanist", use: "Plays for ballet class in the meter the teacher counts, switching between triple waltzes and duple marches." },
    { role: "Music engraver", use: "Bars and beams rhythms so the beats of each measure are visible, following publishing conventions." },
    { role: "Film composer", use: "Sets tempo and meter in a sequencer so bar lines and hit points line up with the edit." },
    { role: "DJ", use: "Mixes tracks by aligning downbeats and phrases of four-beat bars." }
  ],
  life: [
    "Counting \"1, 2, 3\" to a waltz and \"1, 2, 3, 4\" to most pop songs",
    "Clapping on beats 2 and 4 at a concert",
    "Counting measures of rest before a band entrance",
    "Marching in step to a duple march",
    "Setting a metronome app to 3/4 or 4/4 with an accent on beat 1"
  ],
  fields: [
    { name: "Conducting", use: "Standard beat patterns for duple, triple and quadruple meter come straight from the time signature." },
    { name: "Dance", use: "Choreography is counted in beats and bars of the music's meter." },
    { name: "Audio production", use: "Workstations lay out time in bars and beats from the session's time signature." },
    { name: "Music publishing", use: "Barring and beaming rules make printed parts readable at sight." }
  ],
  prereqWhy: {
    "mus-durations": "Every measure is checked by adding note values, dots and ties as exact fractions of a whole note, and split notes are rejoined with ties."
  },
  unlocksWhy: {},
  mathWhy: {
    "fraction-ops": "A measure's length is the product beats × beat value, and checking a measure is adding its values over a common denominator and comparing the sum with that length."
  },
  beyond: [
    { field: "Aural Skills I", why: "Rhythm reading and rhythmic dictation in simple meter are the first skills of the aural sequence." },
    { field: "Post-Tonal Theory", why: "Music after 1900 changes meter from bar to bar and uses metric modulation, which builds on the beat and division learned here." },
    { field: "Music Perception & Cognition", why: "Studies of beat perception and entrainment ask how listeners find the pulse and the strong beats." },
    { field: "Form & Analysis", why: "Phrases and hypermeter are counted in groups of measures, usually two and four bars at a time." }
  ],
  mistakes: [
    { wrong: "Treating <span class=\"ts\"><span>2</span><span>2</span></span> and <span class=\"ts\"><span>4</span><span>4</span></span> as the same because both reduce to 1.", fix: "A time signature is not a fraction. Both measures last one whole note, but cut time has two half-note beats and common time four quarter-note beats." },
    { wrong: "Reading the 8 in <span class=\"ts\"><span>3</span><span>8</span></span> as eight beats.", fix: "The bottom number names the beat unit. <span class=\"ts\"><span>3</span><span>8</span></span> is three eighth-note beats per measure, simple triple." },
    { wrong: "In <span class=\"ts\"><span>4</span><span>4</span></span>, beaming beats 2 and 3 together or writing a half rest that starts on beat 2.", fix: "Keep the middle of the measure visible: beam beats 1–2 and 3–4 separately and write two quarter rests on beats 2 and 3." },
    { wrong: "Letting a note run past the bar line so a measure holds more than its length.", fix: "Split the note at the bar line and tie the two parts; each measure must add up exactly." }
  ],
  practice: [
    { q: `For each signature give the beat unit, the beats per measure, the classification and the measure length in whole notes: (a) <span class="ts"><span>2</span><span>4</span></span>, (b) <span class="ts"><span>3</span><span>8</span></span>, (c) <span class="ts"><span>4</span><span>2</span></span>, (d) cut time.`,
      a: `(a) Quarter, 2, simple duple, <span class="m">2 × <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>. (b) Eighth, 3, simple triple, <span class="m"><span class="fr"><span>3</span><span>8</span></span></span>. (c) Half, 4, simple quadruple, <span class="m">4 × <span class="fr"><span>1</span><span>2</span></span> = 2</span>. (d) Cut time is <span class="ts"><span>2</span><span>2</span></span>: half, 2, simple duple, <span class="m">2 × <span class="fr"><span>1</span><span>2</span></span> = 1</span>.` },
    { q: `In <span class="ts"><span>4</span><span>4</span></span>, is each measure full, short or over? (a) half, dotted quarter, eighth. (b) quarter, dotted quarter, eighth, eighth. (c) dotted half, dotted quarter.`,
      a: `The measure length is 1. (a) <span class="m"><span class="fr"><span>4</span><span>8</span></span> + <span class="fr"><span>3</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> = 1</span>: full. (b) <span class="m"><span class="fr"><span>2</span><span>8</span></span> + <span class="fr"><span>3</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>7</span><span>8</span></span></span>: short by an eighth. (c) <span class="m"><span class="fr"><span>6</span><span>8</span></span> + <span class="fr"><span>3</span><span>8</span></span> = <span class="fr"><span>9</span><span>8</span></span></span>: over by an eighth.` },
    { q: `A measure of <span class="ts"><span>2</span><span>2</span></span> and a measure of <span class="ts"><span>4</span><span>4</span></span> each hold eight eighth notes. Compare the two meters: beats, accents, and how the eighths are beamed.`,
      a: `Both measures last <span class="m">2 × <span class="fr"><span>1</span><span>2</span></span> = 4 × <span class="fr"><span>1</span><span>4</span></span> = 1</span> whole note. In <span class="ts"><span>4</span><span>4</span></span> there are four quarter-note beats (strong, weak, medium, weak); each beat holds two eighths, so the eighths are beamed in twos, or in fours over beats 1–2 and 3–4. In <span class="ts"><span>2</span><span>2</span></span> there are two half-note beats (strong, weak); each beat holds <span class="m"><span class="fr"><span>1</span><span>2</span></span> ÷ <span class="fr"><span>1</span><span>8</span></span> = 4</span> eighths, so they are beamed in two groups of four.` },
    { q: `A melody in <span class="ts"><span>2</span><span>4</span></span> begins with a one-eighth pickup, then continues: dotted quarter, quarter, eighth, quarter, dotted quarter. Bar it, tying where needed, and give the length of the last measure.`,
      a: `Measure length <span class="m"><span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>4</span><span>8</span></span></span>. Pickup: eighth. m. 1: dotted quarter <span class="m">(<span class="fr"><span>3</span><span>8</span></span>)</span> then the quarter crosses the bar line after one eighth, so eighth ⌒ eighth: <span class="m"><span class="fr"><span>3</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>. m. 2: eighth (tied), eighth, quarter <span class="m">= <span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>2</span><span>8</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>. Last measure: dotted quarter, <span class="m"><span class="fr"><span>3</span><span>8</span></span></span>. Pickup and last measure together make <span class="m"><span class="fr"><span>1</span><span>8</span></span> + <span class="fr"><span>3</span><span>8</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, one full measure.` }
  ],
  origin: `<p>The signs C and cut C come from fourteenth- and fifteenth-century mensural notation. There a full circle marked <i>tempus perfectum</i>, a breve divided into three semibreves, and a half circle marked <i>tempus imperfectum</i>, a division into two. A vertical stroke through the sign called for diminution, a faster count, which survives as cut time or <i>alla breve</i>. The C of common time was not originally a letter.</p>
<p>Bar lines appeared first in keyboard and lute music and in scores, and were in general use to mark regular measures by the seventeenth century. Johann Nepomuk Maelzel patented the metronome in 1815, and Beethoven was among the first composers to give metronome marks for the beat.</p>`
};
