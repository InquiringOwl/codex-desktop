window.ARITH = window.ARITH || {};
ARITH["mus-sound"] = {
  title: "Sound: Frequency, Pitch & the Harmonic Series",
  short: "Hertz, octaves as 2 : 1 and the overtones f, 2f, 3f …",
  grade: "College MUS 1xx · fundamentals",
  hours: 4,
  voice: "plain",
  eyebrow: "Music Fundamentals · acoustics",
  hero: `<span class="m"><span class="c1"><i>f</i></span>, <span class="c4">2<i>f</i></span>, <span class="c4">3<i>f</i></span>, <span class="c4">4<i>f</i></span> … &nbsp; <span class="c2"><i>T</i> = 1/<i>f</i></span></span>`,
  lede: `A musical tone is a vibration that repeats. How often it repeats sets the pitch, how strongly it moves the air sets the loudness, and the mix of simultaneous frequencies in it, the harmonic series, sets its colour. Here are the numbers behind A4 = 440 Hz, the 2 : 1 octave and the overtones every instrument produces.`,
  plain: `<p>Sound is a pressure wave: a vibrating string, reed or vocal fold pushes the air, and regions of slightly higher and lower pressure travel outward at about 343 m/s (in air at 20 °C). A sound with a definite <b>pitch</b> comes from a vibration that repeats regularly. The time for one repetition is the <span class="m c2"><b>period</b> <i>T</i></span>, and the number of repetitions per second is the <span class="m c2"><b>frequency</b> <i>f</i></span>, measured in hertz (Hz). They are reciprocals: <span class="m"><i>f</i> = 1/<i>T</i></span>. The tuning A, <span class="m">A<sub>4</sub></span>, vibrates 440 times a second, so its period is about 2.27 ms.</p>
<p>Frequency is physical; pitch is what we hear. Higher frequency is heard as higher pitch, and equal <i>ratios</i> of frequency sound like equal steps. Doubling a frequency raises the pitch an <b>octave</b>: <span class="m">A<sub>3</sub> = 220 Hz</span>, <span class="m">A<sub>4</sub> = 440 Hz</span>, <span class="m">A<sub>5</sub> = 880 Hz</span>. In equal temperament each half step multiplies the frequency by <span class="m">2<sup>1/12</sup> ≈ 1.0595</span>. The <span class="m c3"><b>amplitude</b></span>, the size of the pressure swing, is heard mainly as loudness.</p>
<p>A real string does not vibrate in one shape only. It vibrates as a whole, in halves, in thirds and so on, all at once. Those modes have frequencies <span class="m"><span class="c1"><i>f</i></span>, <span class="c4">2<i>f</i>, 3<i>f</i>, 4<i>f</i></span> …</span>: the <b>harmonic series</b>. The lowest, the <span class="m c1"><b>fundamental</b></span>, gives the pitch we name. The others are <span class="m c4"><b>overtones</b></span>; we rarely hear them separately, but their relative strengths make a violin, a clarinet and a voice sound different on the same note. That quality is <b>timbre</b>. Added together they make one <span class="m c5">complex wave</span> that still repeats with the fundamental's period.</p>
<p>The harmonics above a fundamental spell out familiar intervals. On <span class="m">C<sub>2</sub></span> they are <span class="m">C<sub>2</sub> C<sub>3</sub> G<sub>3</sub> C<sub>4</sub> E<sub>4</sub> G<sub>4</sub> B♭<sub>4</sub> C<sub>5</sub></span>: octave, fifth, fourth, major third, minor third. Some are close to the piano's notes and some are not: harmonic 5 is about 14 cents flat of the equal-tempered third, and harmonic 7 is about 31 cents flat of the piano's B♭.</p>`,
  formal: `<div class="display"><b>Period and frequency.</b> <span class="m"><i>f</i> = 1/<i>T</i></span>, with <i>f</i> in Hz (s<sup>−1</sup>) and <i>T</i> in seconds.<br><b>Pure tone.</b> <span class="m"><i>p</i>(<i>t</i>) = <i>A</i> sin(2π<i>f t</i>)</span>, a sine wave of amplitude <i>A</i>.<br><b>Wavelength.</b> <span class="m">λ = <i>v</i>/<i>f</i></span>; in air at 20 °C, <span class="m"><i>v</i> ≈ 343 m/s</span>, so <span class="m">λ(440 Hz) ≈ 0.780 m</span>.</div>
<div class="display"><b>Equal temperament.</b> With MIDI number <i>m</i> (<span class="m">A<sub>4</sub> = 69</span>): <span class="m"><i>f</i>(<i>m</i>) = 440 · 2<sup>(<i>m</i> − 69)/12</sup> Hz</span>, so <span class="m">C<sub>4</sub> = 440 · 2<sup>−9/12</sup> ≈ 261.63 Hz</span>.<br><b>Cents.</b> The size of the interval between <i>f</i><sub>1</sub> and <i>f</i><sub>2</sub> is <span class="m">1200 log<sub>2</sub>(<i>f</i><sub>2</sub>/<i>f</i><sub>1</sub>)</span> cents: an equal-tempered half step is 100 cents, an octave 1200.</div>
<div class="display"><b>Harmonic series.</b> Harmonic (partial) <i>n</i> of a fundamental <i>f</i><sub>1</sub> has frequency <span class="m"><i>f</i><sub><i>n</i></sub> = <i>n f</i><sub>1</sub></span>; overtone <i>k</i> is harmonic <i>k</i> + 1. For a string of length <i>L</i> fixed at both ends, mode <i>n</i> has <i>n</i> half-wavelengths on the string: <span class="m"><i>L</i> = <i>n</i> λ<sub><i>n</i></sub>/2</span>, so <span class="m"><i>f</i><sub><i>n</i></sub> = <i>n v</i>/(2<i>L</i>)</span>, with <i>v</i> the wave speed on the string.<br>Successive harmonics form the ratios <span class="m">2 : 1</span> (octave), <span class="m">3 : 2</span> (perfect fifth, 701.96 cents), <span class="m">4 : 3</span> (perfect fourth, 498.04 cents), <span class="m">5 : 4</span> (major third, 386.31 cents), <span class="m">6 : 5</span> (minor third, 315.64 cents).</div>
<p><b>Loudness.</b> Sound intensity level is <span class="m">β = 10 log<sub>10</sub>(<i>I</i>/<i>I</i><sub>0</sub>)</span> dB with <span class="m"><i>I</i><sub>0</sub> = 10<sup>−12</sup> W/m<sup>2</sup></span>; doubling the intensity adds about 3 dB. Perceived loudness also depends on frequency.</p>`,
  legend: [
    { c: "c1", sym: `<i>f</i><sub>1</sub>`, name: "Fundamental", desc: "The lowest frequency of a tone; it gives the pitch we name." },
    { c: "c2", sym: `<i>f</i>, <i>T</i>`, name: "Frequency and period", desc: "Cycles per second and seconds per cycle, <span class=\"m\"><i>f</i> = 1/<i>T</i></span>." },
    { c: "c3", sym: `<i>A</i>`, name: "Amplitude", desc: "The size of the pressure swing, heard mainly as loudness." },
    { c: "c4", sym: `2<i>f</i>, 3<i>f</i> …`, name: "Overtones", desc: "Harmonics 2 and up, whole-number multiples of the fundamental." },
    { c: "c5", sym: `Σ`, name: "Summed wave", desc: "The complex wave made by adding the partials; it repeats with period <i>T</i>." }
  ],
  steps: {
    title: "How to analyse a tone's frequencies",
    items: [
      `Find the <span class="m c2">frequency</span> from the pitch (<span class="m">440 · 2<sup>(<i>m</i> − 69)/12</sup></span>) or from the period (<span class="m"><i>f</i> = 1/<i>T</i></span>).`,
      `List the harmonics as whole-number multiples: <span class="m"><span class="c1"><i>f</i></span>, <span class="c4">2<i>f</i>, 3<i>f</i></span> …</span>`,
      `Name each harmonic by its interval above the fundamental: 2 is an octave, 3 an octave and a fifth, 4 two octaves, 5 two octaves and a major third, 6 two octaves and a fifth, 7 just under two octaves and a minor seventh, 8 three octaves.`,
      `To compare a harmonic with the piano, find the nearest equal-tempered note and the difference in cents, <span class="m">1200 log<sub>2</sub>(<i>f</i>/<i>f</i><sub>ET</sub>)</span>.`,
      `If you need wavelength, divide the speed of sound by the frequency: <span class="m">λ = 343/<i>f</i></span> metres in air at 20 °C.`
    ]
  },
  example: {
    prompt: `A cello's open A string sounds <span class="m">A<sub>2</sub> = 110 Hz</span>. Find the period, the frequencies of harmonics 1 to 8, and the nearest equal-tempered note to each, with the deviation in cents where it is not zero.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>T</i> = 1/110 s ≈ 9.09 ms</span></span>`, note: "Period is the reciprocal of frequency." },
      { math: `<span class="m"><span class="c1">110</span>, <span class="c4">220, 330, 440, 550, 660, 770, 880</span> Hz</span>`, note: "Harmonic n has frequency n times 110 Hz." },
      { math: `<span class="m">1, 2, 4, 8 → A<sub>2</sub>, A<sub>3</sub>, A<sub>4</sub>, A<sub>5</sub></span>`, note: "Powers of 2 are octaves of the fundamental and match the piano exactly." },
      { math: `<span class="m">330 Hz vs E<sub>4</sub> = 329.63 Hz: +1.96 cents</span>`, note: "Harmonic 3 is a fifth above harmonic 2 (ratio 3:2 = 701.96 cents, against 700 for the piano's fifth). Harmonic 6 = 660 Hz is E5, also +1.96 cents." },
      { math: `<span class="m">550 Hz vs C♯<sub>5</sub> = 554.37 Hz: −13.69 cents</span>`, note: "Harmonic 5 is a pure major third (5:4) above harmonic 4, narrower than the equal-tempered third." },
      { math: `<span class="m">770 Hz vs G<sub>5</sub> = 783.99 Hz: −31.17 cents</span>`, note: "Harmonic 7 lies a third of a half step below the piano's G." }
    ],
    answer: `<span class="m"><i>T</i> ≈ 9.09 ms</span>. Harmonics: <span class="m">A<sub>2</sub> 110</span>, <span class="m">A<sub>3</sub> 220</span>, <span class="m">E<sub>4</sub> 330 (+2¢)</span>, <span class="m">A<sub>4</sub> 440</span>, <span class="m">C♯<sub>5</sub> 550 (−14¢)</span>, <span class="m">E<sub>5</sub> 660 (+2¢)</span>, <span class="m">G<sub>5</sub> 770 (−31¢)</span>, <span class="m">A<sub>5</sub> 880 Hz</span>.`
  },
  why: `<p>The harmonic series explains much of what later theory takes for granted. The octave, fifth and fourth sound stable because their frequency ratios are simple, and the ratios come straight from neighbouring harmonics. Timbre, the difference between instruments on the same note, is a difference in the strengths of the harmonics. Brass players and string players use harmonics directly: a bugle plays only harmonics of its tube, and a string harmonic is produced by touching a node.</p>
<p>The gap between the harmonic series and the piano's equal temperament is the starting point of tuning theory. Equal temperament makes all twelve keys usable by spreading small errors evenly, and singers and string players often bend thirds and sevenths toward the pure ratios.</p>`,
  careers: [
    { role: "Acoustician", use: "Measures frequencies, spectra and sound levels to design concert halls, practice rooms and quiet machinery." },
    { role: "Recording or mixing engineer", use: "Uses equalisers on frequency bands and reads spectrum analysers to shape the timbre of each track." },
    { role: "Piano technician", use: "Tunes octaves slightly wider than 2:1 to match the piano's inharmonic overtones, starting from A4 = 440 Hz." },
    { role: "Instrument maker", use: "Shapes strings, bores and soundboards so the instrument's partials and resonances give the desired tone." },
    { role: "Sound designer and synthesist", use: "Builds tones from sine partials in additive synthesis or filters harmonics out of rich waveforms." },
    { role: "Audiologist", use: "Tests hearing with pure tones from about 250 Hz to 8000 Hz at measured decibel levels." }
  ],
  life: [
    "Tuning a guitar with an app that shows the frequency and how many cents sharp or flat a string is",
    "Hearing the high harmonics of a string when a player lightly touches its midpoint",
    "Noticing that a flute and a violin playing the same note still sound different",
    "Turning up the bass or treble on a speaker, which boosts low or high frequency bands",
    "Hearing an orchestra tune to an oboe's A before a concert"
  ],
  fields: [
    { name: "Physics", use: "Standing waves on strings and in air columns follow the same harmonic series." },
    { name: "Audio engineering", use: "Equalisers, spectrum analysers and pitch correction all work in frequency." },
    { name: "Architectural acoustics", use: "Room dimensions set resonant frequencies, which designers control with shape and absorption." },
    { name: "Speech science", use: "The voice's fundamental and the harmonics boosted by the vocal tract identify vowels and speakers." }
  ],
  prereqWhy: {
    "mus-pitch": "Each key of the keyboard, named in scientific pitch notation with A4 as the reference, corresponds to one frequency; harmonics are named with those same pitch names."
  },
  unlocksWhy: {},
  mathWhy: {
    "ratios": "Intervals are frequency ratios: 2 : 1 is an octave, 3 : 2 a fifth, 5 : 4 a major third, and the ratio of neighbouring harmonics n + 1 : n gives each interval of the series.",
    "exponents": "Equal temperament multiplies frequency by 2 to the power 1/12 per half step, so a pitch m half steps from A4 has frequency 440 times 2 to the power (m − 69)/12.",
    "trig-sin-cos-graphs": "A pure tone is the graph of A sin(2πft): the amplitude A is the height of the curve and the period 1/f is the length of one cycle.",
    "waves:Simple harmonic motion": "A vibrating string or air column at a single frequency moves in simple harmonic motion, which is why a pure tone is a sine wave.",
    "waves:Superposition, interference and standing waves": "The modes of a string are standing waves with n half-wavelengths, and a musical tone is the superposition of those modes.",
    "waves:Sound: intensity, decibels and the Doppler effect": "Amplitude relates to intensity, and intensity level in decibels, 10 log10(I/I0), is the physical measure behind the loudness of a tone."
  },
  beyond: [
    { field: "Musical Acoustics", why: "Develops standing waves, spectra, Fourier analysis, loudness and tuning systems in full." },
    { field: "Music Perception & Cognition", why: "Studies how the ear turns frequency and spectrum into perceived pitch, timbre and consonance." },
    { field: "Orchestration", why: "Uses each instrument's spectrum and register to balance and blend timbres." }
  ],
  mistakes: [
    { wrong: `Thinking each octave adds a fixed number of hertz, so <span class="m">A<sub>5</sub> = 440 + 220 = 660 Hz</span>.`, fix: `Octaves multiply frequency by 2: <span class="m">A<sub>5</sub> = 880 Hz</span>. Pitch steps are ratios, not differences.` },
    { wrong: `Calling the first overtone harmonic 1.`, fix: `Harmonic 1 is the fundamental; overtone 1 is harmonic 2. Count partials from the fundamental to avoid the off-by-one.` },
    { wrong: `Assuming every harmonic matches a piano key exactly.`, fix: `Only octaves do. Harmonic 3 is about 2 cents sharp of the tempered fifth, harmonic 5 about 14 cents flat of the tempered third, harmonic 7 about 31 cents flat of the minor seventh.` },
    { wrong: `Treating loudness and pitch as the same thing ("a louder note is higher").`, fix: `Amplitude sets loudness and frequency sets pitch; you can change either while the other stays fixed.` }
  ],
  practice: [
    { q: `(a) Find the period of <span class="m">A<sub>4</sub> = 440 Hz</span> and its wavelength in air at 20 °C (343 m/s). (b) A wave repeats every 5 ms. What is its frequency?`,
      a: `(a) <span class="m"><i>T</i> = 1/440 s ≈ 2.27 ms</span>; <span class="m">λ = 343/440 ≈ 0.780 m</span>. (b) <span class="m"><i>f</i> = 1/0.005 s = 200 Hz</span>.` },
    { q: `Using <span class="m">A<sub>4</sub> = 440 Hz</span>: (a) find the frequencies of <span class="m">A<sub>0</sub></span> (the piano's lowest key) and <span class="m">A<sub>6</sub></span>; (b) find middle C, <span class="m">C<sub>4</sub></span>, in equal temperament.`,
      a: `(a) Four octaves down: <span class="m">440/2<sup>4</sup> = 27.5 Hz</span>. Two octaves up: <span class="m">440 · 2<sup>2</sup> = 1760 Hz</span>. (b) <span class="m">C<sub>4</sub></span> is 9 half steps below <span class="m">A<sub>4</sub></span>: <span class="m">440 · 2<sup>−9/12</sup> ≈ 261.63 Hz</span>.` },
    { q: `The fundamental is <span class="m">C<sub>2</sub> ≈ 65.41 Hz</span>. Name harmonics 1 to 8 and give their frequencies. Then give the ratio and the interval between each pair of neighbouring harmonics from 1–2 to 5–6.`,
      a: `<span class="m">C<sub>2</sub> 65.41, C<sub>3</sub> 130.81, G<sub>3</sub> 196.22, C<sub>4</sub> 261.63, E<sub>4</sub> 327.03, G<sub>4</sub> 392.44, B♭<sub>4</sub> 457.84, C<sub>5</sub> 523.25 Hz</span>. Neighbours: <span class="m">2 : 1</span> octave, <span class="m">3 : 2</span> perfect fifth, <span class="m">4 : 3</span> perfect fourth, <span class="m">5 : 4</span> major third, <span class="m">6 : 5</span> minor third.` },
    { q: `Compare harmonics 5 and 7 of <span class="m">C<sub>2</sub></span> with the piano's <span class="m">E<sub>4</sub> ≈ 329.63 Hz</span> and <span class="m">B♭<sub>4</sub> ≈ 466.16 Hz</span>: give the difference in hertz and in cents. Then explain the first result by comparing the ratio <span class="m">5 : 4</span> with the equal-tempered major third.`,
      a: `Harmonic 5: <span class="m">327.03 − 329.63 ≈ −2.60 Hz</span>, <span class="m">1200 log<sub>2</sub>(327.03/329.63) ≈ −13.69</span> cents. Harmonic 7: <span class="m">457.84 − 466.16 ≈ −8.32 Hz</span>, about <span class="m">−31.17</span> cents. Harmonic 5 is a pure major third above harmonic 4 (<span class="m">C<sub>4</sub></span>, which matches the piano), and <span class="m">1200 log<sub>2</sub>(5/4) ≈ 386.31</span> cents is 13.69 cents narrower than the tempered third of 400 cents.` }
  ],
  origin: `The Pythagorean tradition, from the sixth century BCE, linked the octave, fifth and fourth to the string-length ratios 2 : 1, 3 : 2 and 4 : 3 on a one-string instrument, the monochord. Marin Mersenne's <i>Harmonie universelle</i> (1636) stated how a string's frequency depends on its length, tension and mass. Around 1701 Joseph Sauveur named the science <i>acoustique</i>, described a string's harmonics and its nodes, and measured absolute frequency. The unit hertz honours Heinrich Hertz. A4 = 440 Hz was agreed as standard pitch at an international conference in London in 1939 and confirmed by the International Organization for Standardization as ISO 16 in 1975.`
};
