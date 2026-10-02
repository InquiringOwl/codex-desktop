window.ARITH = window.ARITH || {};
ARITH["mus-staff"] = {
  title: "The Staff, Clefs & Ledger Lines",
  short: "Treble, bass and C clefs; reading lines, spaces and ledgers",
  grade: "College MUS 1xx · fundamentals",
  hours: 4,
  voice: "plain",
  eyebrow: "Music Fundamentals · notation",
  hero: `<span class="m">𝄞 <span class="c2">E<sub>4</sub> G<sub>4</sub> B<sub>4</sub> D<sub>5</sub> F<sub>5</sub></span> &nbsp;·&nbsp; 𝄢 <span class="c2">G<sub>2</sub> B<sub>2</sub> D<sub>3</sub> F<sub>3</sub> A<sub>3</sub></span></span>`,
  lede: `The staff turns pitch into height on the page: five lines and four spaces, each standing for one letter name. A clef fixes which letter goes where. Learn the treble, bass, alto and tenor clefs, the grand staff, and the ledger lines that extend the staff above and below.`,
  plain: `<p>A <b>staff</b> (British <b>stave</b>) is five horizontal lines with four spaces between them. Lines and spaces are counted from the bottom up. Every line and every space is one letter of the musical alphabet, so moving from a line to the next space, or a space to the next line, is a step to the next letter. A note on a <span class="m c2">line</span> has the line through its middle; a note in a <span class="m c3">space</span> sits between two lines.</p>
<p>A <b>clef</b> at the start of the staff says which pitch one line stands for. The <b>treble clef</b> (G clef) curls around the second line, which is <span class="m">G<sub>4</sub></span>. The <b>bass clef</b> (F clef) puts its two dots around the fourth line, <span class="m">F<sub>3</sub></span>. A <b>C clef</b> centres on the line that is middle C: on the middle line it is the <b>alto clef</b> (viola), on the fourth line the <b>tenor clef</b> (cello, bassoon and trombone in their high range).</p>
<p>Pitches above or below the staff are written with <span class="m c4">ledger lines</span>, short lines that continue the spacing of the staff for a single note. <span class="m c5">Middle C</span> sits on one ledger line below the treble staff and on one ledger line above the bass staff. Treble and bass staves joined by a brace make the <b>grand staff</b> used for piano, harp and organ, and middle C lies on the ledger line between them.</p>
<p>Two habits make reading fast. Learn a few landmark notes in each clef (the clef's own line, middle C, the top and bottom lines) and read the rest by step from them. And read intervals by shape: line to next line, or space to next space, is a skip of a third.</p>`,
  formal: `<div class="display"><b>Staff position.</b> Number the positions 0 (bottom line), 1 (first space), 2 (second line), … 8 (top line). Even positions are lines, odd positions are spaces. Moving one position changes the letter by one step.<br>For a clef whose bottom line is pitch <i>b</i>, a pitch <i>p</i> lies at position <span class="m"><i>s</i> = <i>d</i>(<i>p</i>) − <i>d</i>(<i>b</i>)</span>, where <span class="m"><i>d</i>(<i>p</i>) = 7 · octave + letter index</span> (C = 0, D = 1, … B = 6).</div>
<p><b>Treble clef</b> (G clef, line 2 = G<sub>4</sub>): lines <span class="m">E<sub>4</sub> G<sub>4</sub> B<sub>4</sub> D<sub>5</sub> F<sub>5</sub></span>, spaces <span class="m">F<sub>4</sub> A<sub>4</sub> C<sub>5</sub> E<sub>5</sub></span>.<br>
<b>Bass clef</b> (F clef, line 4 = F<sub>3</sub>): lines <span class="m">G<sub>2</sub> B<sub>2</sub> D<sub>3</sub> F<sub>3</sub> A<sub>3</sub></span>, spaces <span class="m">A<sub>2</sub> C<sub>3</sub> E<sub>3</sub> G<sub>3</sub></span>.<br>
<b>Alto clef</b> (C clef, line 3 = C<sub>4</sub>): lines <span class="m">F<sub>3</sub> A<sub>3</sub> C<sub>4</sub> E<sub>4</sub> G<sub>4</sub></span>, spaces <span class="m">G<sub>3</sub> B<sub>3</sub> D<sub>4</sub> F<sub>4</sub></span>.<br>
<b>Tenor clef</b> (C clef, line 4 = C<sub>4</sub>): lines <span class="m">D<sub>3</sub> F<sub>3</sub> A<sub>3</sub> C<sub>4</sub> E<sub>4</sub></span>, spaces <span class="m">E<sub>3</sub> G<sub>3</sub> B<sub>3</sub> D<sub>4</sub></span>.</p>
<p><b>Ledger lines.</b> A note at position <span class="m"><i>s</i> ≤ −2</span> needs a ledger line at every even position from −2 down to <i>s</i>; a note at <span class="m"><i>s</i> ≥ 10</span> needs one at every even position from 10 up to <i>s</i>. Positions −1 and 9 hang just outside the staff with no ledger line.</p>
<p><b>Stems.</b> A single note below the middle line takes a stem up, on the right of the notehead; a note above the middle line takes a stem down, on the left. A note on the middle line usually takes a stem down. An accidental is written before the note, on the same line or space.</p>
<p><b>Octave signs.</b> <i>8va</i> above notes means "sound an octave higher than written"; <i>8vb</i> below means an octave lower. A treble clef with a small 8 below it (tenor voice, guitar) sounds an octave lower than written.</p>`,
  legend: [
    { c: "c1", sym: `●`, name: "Note", desc: "The notehead being read or placed." },
    { c: "c2", sym: `line`, name: "Line notes", desc: "Notes with a staff line through the middle (even positions)." },
    { c: "c3", sym: `space`, name: "Space notes", desc: "Notes between two lines (odd positions)." },
    { c: "c4", sym: `—`, name: "Ledger lines", desc: "Short extra lines for notes above or below the staff." },
    { c: "c5", sym: `C<sub>4</sub>`, name: "Middle C", desc: "One ledger line below the treble staff, one above the bass staff; the C-clef line." }
  ],
  steps: {
    title: "How to read a note on the staff",
    items: [
      `Look at the clef and recall its reference line: treble <span class="m">G<sub>4</sub></span> on line 2, bass <span class="m">F<sub>3</sub></span> on line 4, alto or tenor <span class="m c5">C<sub>4</sub></span> on line 3 or 4.`,
      `Decide whether the note is on a <span class="m c2">line</span> or in a <span class="m c3">space</span>, and count lines or spaces from the bottom.`,
      `Count steps (letters) from the nearest landmark: each line-to-space or space-to-line move is one letter.`,
      `Above or below the staff, count the <span class="m c4">ledger lines</span>: each ledger line and each space between them is one more letter.`,
      `Add any accidental written before the note and the octave number, remembering that the number changes at C.`
    ]
  },
  example: {
    prompt: `A cello part in tenor clef has a note on the top line. Name the pitch, then say where the same pitch is written in bass clef and in treble clef, with any ledger lines.`,
    lines: [
      { math: `<span class="m">tenor: line 4 = <span class="c5">C<sub>4</sub></span> (position 6)</span>`, note: "The C clef centres on the fourth line, so that line is middle C." },
      { math: `<span class="m">position 8 = 6 + 2 → C<sub>4</sub>, D<sub>4</sub>, <span class="c1">E<sub>4</sub></span></span>`, note: "The top line is two positions (two letters) above the fourth line." },
      { math: `<span class="m">bass: <i>s</i> = <i>d</i>(E<sub>4</sub>) − <i>d</i>(G<sub>2</sub>) = 30 − 18 = 12</span>`, note: "In bass clef the top line is A3 at position 8; E4 is four letters higher." },
      { math: `<span class="m">ledgers at <span class="c4">10, 12</span></span>`, note: "Two ledger lines above the bass staff: C4 on the first, E4 on the second." },
      { math: `<span class="m">treble: <i>s</i> = <i>d</i>(E<sub>4</sub>) − <i>d</i>(E<sub>4</sub>) = 0</span>`, note: "E4 is the bottom line of the treble staff, no ledger lines." },
      { math: `<span class="m">MIDI 64 in all three clefs</span>`, note: "Clefs change where a pitch is written, not the pitch itself." }
    ],
    answer: `The note is <span class="m">E<sub>4</sub></span>. In bass clef it sits on the second ledger line above the staff; in treble clef it is the bottom line. Tenor clef lets the cellist read it on the staff with no ledger lines.`
  },
  why: `<p>Reading the staff fluently is the first literacy skill of every music course: scales, intervals, chords and part-writing are all done on the staff. Fast reading comes from recognising positions, not from reciting mnemonics, so the goal is to see a line or space and know its letter in each clef.</p>
<p>The C clefs are not museum pieces. Violists read alto clef every day; cellists, bassoonists and trombonists switch to tenor clef for high passages; and score readers meet both in orchestral and choral scores. Clefs exist to keep each instrument's usual range on the staff with as few ledger lines as possible.</p>`,
  careers: [
    { role: "Orchestral violist", use: "Reads alto clef as a native clef and switches to treble clef for high passages." },
    { role: "Cellist or bassoonist", use: "Moves between bass, tenor and treble clef within a single part." },
    { role: "Music engraver", use: "Chooses clefs, octave signs and ledger lines so parts are easy to read, following standard engraving practice." },
    { role: "Conductor", use: "Reads full scores with treble, bass, alto and tenor clefs and transposing parts at the same time." },
    { role: "Piano teacher", use: "Teaches the grand staff and middle C's ledger line as the first reading skill." },
    { role: "Church organist", use: "Reads three staves at once: two for the hands and one in bass clef for the pedals." }
  ],
  life: [
    "Reading the melody line of a hymnal or songbook in treble clef",
    "Following a piano score where the right hand is on top and the left hand below",
    "Recognising that guitar music is written an octave higher than it sounds",
    "Picking out a part in a choir score with soprano, alto, tenor and bass lines",
    "Typing a melody into notation software and checking it lands on the right line"
  ],
  fields: [
    { name: "Music publishing", use: "Engravers set clefs, ledger lines and octave signs in printed and digital scores." },
    { name: "Performance", use: "Every instrumentalist and singer reads from one or more clefs daily." },
    { name: "Music education", use: "Note-reading in treble and bass clef is the core of beginning instruction." },
    { name: "Optical music recognition", use: "Software that scans printed music identifies staff lines, clefs and note positions to recover pitches." }
  ],
  prereqWhy: {
    "mus-pitch": "The staff writes the letter names, accidentals and octave numbers of scientific pitch notation; reading it assumes you know them and where middle C is."
  },
  unlocksWhy: {},
  mathWhy: {},
  beyond: [
    { field: "Orchestration", why: "Writing parts means choosing the clef and transposition that keep each instrument's range on the staff." },
    { field: "Aural Skills II", why: "Sight-singing in alto and tenor clefs builds fluency for score reading." },
    { field: "Species Counterpoint", why: "Exercises are traditionally written in C clefs, as in Fux's treatise." }
  ],
  mistakes: [
    { wrong: `Reading bass clef as if it were treble clef, so the bottom line is called E.`, fix: `In bass clef the bottom line is <span class="m">G<sub>2</sub></span>; the same position in treble is <span class="m">E<sub>4</sub></span>. At the same position the bass-clef letter is two letters higher than the treble-clef letter (E → G, F → A, G → B), in a lower octave.` },
    { wrong: `Counting a ledger line and the space next to it as the same note.`, fix: `Each ledger line and each space between ledger lines is a separate letter, exactly as on the staff.` },
    { wrong: `Putting middle C on the middle line of the treble staff.`, fix: `Middle C is one ledger line below the treble staff. The middle line of the treble staff is <span class="m">B<sub>4</sub></span>; the middle line of the alto staff is <span class="m">C<sub>4</sub></span>.` }
  ],
  practice: [
    { q: `Name the five lines, bottom to top, of (a) the treble staff and (b) the bass staff, with octave numbers.`,
      a: `(a) <span class="m">E<sub>4</sub> G<sub>4</sub> B<sub>4</sub> D<sub>5</sub> F<sub>5</sub></span>. (b) <span class="m">G<sub>2</sub> B<sub>2</sub> D<sub>3</sub> F<sub>3</sub> A<sub>3</sub></span>.` },
    { q: `Name each note: (a) treble clef, third space; (b) bass clef, second line; (c) alto clef, middle line; (d) bass clef, first ledger line above the staff; (e) tenor clef, bottom line.`,
      a: `(a) <span class="m">C<sub>5</sub></span>. (b) <span class="m">B<sub>2</sub></span>. (c) <span class="m">C<sub>4</sub></span>. (d) <span class="m">C<sub>4</sub></span>, middle C. (e) <span class="m">D<sub>3</sub></span>.` },
    { q: `How many ledger lines does each note need, and is the note on a ledger line or in a space? (a) <span class="m">A<sub>5</sub></span> in treble clef; (b) <span class="m">C<sub>6</sub></span> in treble clef; (c) <span class="m">E<sub>2</sub></span> in bass clef; (d) <span class="m">A<sub>3</sub></span> in treble clef.`,
      a: `(a) Position 10: one ledger line, note on it. (b) Position 12: two ledger lines, note on the second. (c) Position −2: one ledger line below the staff, note on it. (d) Position −4: two ledger lines below the staff (middle C's line and the next), note on the second.` },
    { q: `A viola passage in alto clef uses four notes: the bottom line, the third space, the top line and the space above the top line. Name them and say where each would sit in treble clef. Why do violists use alto clef?`,
      a: `Alto positions 0, 5, 8, 9 are <span class="m">F<sub>3</sub>, D<sub>4</sub>, G<sub>4</sub>, A<sub>4</sub></span>. In treble clef: <span class="m">F<sub>3</sub></span> is position −6, on the third ledger line below; <span class="m">D<sub>4</sub></span> is position −1, in the space just below the staff; <span class="m">G<sub>4</sub></span> is the second line; <span class="m">A<sub>4</sub></span> is the second space. The viola's low range (down to <span class="m">C<sub>3</sub></span>) would need many ledger lines in treble clef and sits too high for bass clef; alto clef centred on middle C keeps most of it on the staff.` }
  ],
  origin: `Guido of Arezzo, writing about 1025–1030, described a staff of lines spaced a third apart, with a letter at the start of a line to fix its pitch and coloured lines (red for F, yellow for C) to help singers. Our clef signs are stylised forms of those letters G, F and C. Guido also taught singers to sing hexachords with the syllables <i>ut re mi fa sol la</i>, the origin of solmization.`
};
