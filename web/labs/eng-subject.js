/* ============ Labs: English · Subject & Predicate ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* Sentences. Each word is "word/role": s subject, S simple subject (head), m modifier inside the subject
   (stripped to find the head), p predicate, V simple predicate (verb and auxiliaries), x outside the split
   (expletive there). `t` is the sentence as written; `n` its statement order when the subject is displaced.
   In `tag`, {braces} mark the pronoun or phrase that picks out the subject. */
const ITEMS = [
  { id: "tom", kind: "Statement", t: "Tom/S appeared/V on/p the/p sidewalk/p with/p a/p bucket/p of/p whitewash/p and/p a/p long-handled/p brush./p",
    src: "Mark Twain, The Adventures of Tom Sawyer (1876), ch. II", ask: "Who appeared on the sidewalk?",
    strip: "Tom is a single proper noun, so the simple subject and the complete subject are the same word.",
    tag: "Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush, didn’t {he}?", tagKind: "Tag question" },
  { id: "captain", kind: "Long subject", t: "The/s captain/S of/m the/m whaler/m with/m the/m ivory/m leg/m stood/V on/p the/p quarter-deck./p",
    src: "Example sentence", ask: "Who stood on the quarter-deck?", objs: { whaler: "of", leg: "with" },
    strip: "Of the whaler and with the ivory leg are prepositional phrases that describe captain. Whaler and leg are objects of prepositions, so neither can be the subject.",
    tag: "The captain of the whaler with the ivory leg stood on the quarter-deck, didn’t {he}?", tagKind: "Tag question" },
  { id: "one", kind: "Subject with of-phrase", t: "One/S of/m the/m boats/m has/V drifted/V out/p to/p sea./p",
    src: "Example sentence", ask: "What has drifted out to sea?", objs: { boats: "of" },
    strip: "One is the head, a pronoun. Boats is the object of of. The singular verb has drifted agrees with One, not with boats.",
    tag: "One of the boats has drifted out to sea, hasn’t {it}?", tagKind: "Tag question" },
  { id: "idiot", kind: "Subject with a relative clause", t: "Every/s idiot/S who/m goes/m about/m with/m ‘Merry/m Christmas’/m on/m his/m lips/m should/V be/V boiled/V with/p his/p own/p pudding./p",
    src: "Adapted from Charles Dickens, A Christmas Carol (1843), Stave One", ask: "Who should be boiled with his own pudding?", objs: { lips: "on" }, trap: "goes",
    strip: "The relative clause who goes about with ‘Merry Christmas’ on his lips describes idiot. Its verb, goes, belongs to that clause, not to the sentence. (Dickens put a comma after lips, a nineteenth-century habit; modern handbooks never separate a subject from its verb with one comma.)",
    tag: "Every idiot who goes about … should be boiled with his own pudding, shouldn’t {he}?", tagKind: "Tag question" },
  { id: "taking", kind: "Gerund-phrase subject", t: "Taking/S a/m walk/m was/V out/p of/p the/p question./p",
    src: "After Charlotte Brontë, Jane Eyre (1847), ch. I", ask: "What was out of the question?",
    strip: "The subject is a gerund phrase. Its head is the gerund taking; a walk is the gerund’s own object. Handbooks name the gerund (or the whole phrase) as the simple subject.",
    tag: "Taking a walk was out of the question, wasn’t {it}?", tagKind: "Tag question" },
  { id: "tomhuck", kind: "Compound subject", t: "Tom/S and/s Huck/S crept/V through/p the/p graveyard./p",
    src: "Example sentence", ask: "Who crept through the graveyard?",
    strip: "Two simple subjects joined by and: a compound subject. Both share the one verb, crept.",
    tag: "Tom and Huck crept through the graveyard, didn’t {they}?", tagKind: "Tag question" },
  { id: "dipped", kind: "Compound predicate", t: "Tom/S dipped/V his/p brush/p and/p passed/V it/p along/p the/p topmost/p plank./p",
    src: "Adapted from Mark Twain, The Adventures of Tom Sawyer, ch. II", ask: "Who dipped his brush and passed it along?",
    strip: "One subject with two verbs, dipped and passed: a compound predicate. Because and joins two verbs, not two clauses, no comma goes before it.",
    tag: "Tom dipped his brush and passed it along the topmost plank, didn’t {he}?", tagKind: "Tag question" },
  { id: "ishmael", kind: "Imperative", t: "Call/V me/p Ishmael./p", imp: true,
    src: "Herman Melville, Moby-Dick (1851), ch. 1", ask: "Who is to call him Ishmael? The person spoken to: (you).",
    strip: "No subject is written. The subject of a command is understood you.",
    tag: "Call me Ishmael, will {you}?", tagKind: "Tag question" },
  { id: "fall", kind: "Yes/no question", t: "Would/V the/s fall/S never/p come/V to/p an/p end?/p", n: "The/s fall/S would/V never/p come/V to/p an/p end./p",
    src: "Lewis Carroll, Alice’s Adventures in Wonderland (1865), ch. I", ask: "What would never come to an end?",
    strip: "Fall is the head noun; the is its article. Never is an adverb in the predicate, not part of the verb phrase would come.",
    tag: "The fall would never come to an end, would {it}?", tagKind: "Tag question" },
  { id: "who", kind: "Question: wh-word as subject", t: "Who/S has/V taken/V Netherfield/p Park?/p",
    src: "After Jane Austen, Pride and Prejudice (1813), ch. 1", ask: "Who has taken Netherfield Park?",
    strip: "Who is an interrogative pronoun standing as the subject. When the question word is the subject, there is no inversion and no do: the order is already subject–verb.",
    tag: "{Mr. Bingley} has taken Netherfield Park.", tagKind: "Answer test" },
  { id: "scrooge", kind: "Question: wh-word as object", t: "What/p did/V Scrooge/S say?/p", n: "Scrooge/S said/V what?/p",
    src: "Example sentence (A Christmas Carol)", ask: "Who said it?",
    strip: "What is the object of say, moved to the front. Did is do-support: the question needs an auxiliary to put before the subject. In statement order (an echo question) do disappears and said carries the tense.",
    tag: "{Scrooge} said ‘Humbug!’", tagKind: "Answer test" },
  { id: "there", kind: "There-sentence", t: "There/x are/V three/s boats/S in/p the/p harbor./p", n: "Three/s boats/S are/V in/p the/p harbor./p",
    src: "Example sentence", ask: "What are in the harbor?",
    strip: "Boats is the head. There is an expletive: it fills the slot before the verb, but the verb agrees with boats (there are, not there is).",
    tag: "There are three boats in the harbor, aren’t {there}?", tagKind: "Tag question", tagNote: "The tag repeats there, not they. Modern grammars take this as evidence that there is the syntactic subject and three boats the displaced subject." },
  { id: "whale", kind: "Here-inversion", t: "Here/p comes/V the/s whale!/S", n: "The/s whale/S comes/V here!/p",
    src: "Example sentence", ask: "What comes here?",
    strip: "Whale is the head noun. After here and there used as place adverbs, a noun subject follows the verb; a pronoun does not (here it comes).",
    tag: "The whale comes here, doesn’t {it}?", tagKind: "Tag question" },
  { id: "alice", kind: "Literary inversion", t: "Down/p the/p rabbit-hole/p went/V Alice./S", n: "Alice/S went/V down/p the/p rabbit-hole./p",
    src: "After Lewis Carroll, Alice’s Adventures in Wonderland, ch. I (“down went Alice after it”)", ask: "Who went down the rabbit-hole?",
    strip: "Alice is the whole subject. Writers front a phrase of place or direction and put the verb before the subject for vividness: locative inversion.",
    tag: "Alice went down the rabbit-hole, didn’t {she}?", tagKind: "Tag question" }
];
const SUBJ = r => r === "s" || r === "S" || r === "m";
const PRED = r => r === "p" || r === "V";
const parse = code => code.trim().split(/\s+/).map(x => { const i = x.lastIndexOf("/"); return { w: x.slice(0, i), r: x.slice(i + 1) }; });
// The one gap (0 … n) that divides subject from predicate, or -1 if the subject is not a block at the front.
function gapOf(ws){
  const rs = ws.map(x => SUBJ(x.r) ? "s" : PRED(x.r) ? "p" : "x").join("");
  if (!rs.includes("s")) return rs.startsWith("p") ? 0 : -1;
  return /^s+p+$/.test(rs) ? rs.lastIndexOf("s") + 1 : -1;
}
const strip = w => w.replace(/[.,!?;:]+$/, "");
const words = (ws, f) => ws.filter(f).map(x => strip(x.w)).join(" ");
// The verb phrase, with … where an adverb or the subject interrupts it.
function verbPhrase(ws){
  let out = "", last = -2;
  ws.forEach((x, i) => { if (x.r === "V") { out += (out ? (i === last + 1 ? " " : " … ") : "") + strip(x.w); last = i; } });
  return out;
}

L["eng-subject-predicate"] = k => {
  const dom = k.dom(); dom.classList.add("sbj-wrap");
  if (!document.getElementById("css-eng-subject")) {
    const st = document.createElement("style"); st.id = "css-eng-subject";
    st.textContent = `.stage .dom.sbj-wrap{padding:58px 18px 18px;display:grid;gap:14px;align-content:start}
.sbj-wrap .sbj-src{font:500 11px/1.35 var(--ui);letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.sbj-wrap .sbj-src i{font:italic 13px/1.3 var(--math);letter-spacing:0;text-transform:none;color:var(--muted)}
.sbj-wrap .sbj-sent{font:400 clamp(20px,2.5vw,29px)/2.15 var(--math);color:var(--text);overflow-wrap:anywhere}
.sbj-wrap .sbj-sent.sm{font-size:clamp(17px,2vw,22px);line-height:1.9;color:var(--muted)}
.sbj-wrap .sbj-w{display:inline;padding:0 .12em 2px;border-bottom:3px solid transparent;transition:color .2s,border-color .2s,opacity .2s}
.sbj-wrap .sbj-w.c1{color:var(--amber);border-bottom-color:rgba(242,184,75,.55)} .sbj-wrap .sbj-w.c2{color:var(--cyan);border-bottom-color:rgba(92,200,224,.45)}
.sbj-wrap .sbj-w.c5{color:var(--green);border-bottom-color:rgba(123,216,143,.55)}
.sbj-wrap .sbj-w.hd3{color:var(--pink);font-weight:600;border-bottom-color:var(--pink)} .sbj-wrap .sbj-w.hd4{color:var(--violet);font-weight:600;border-bottom-color:var(--violet)}
.sbj-wrap .sbj-w.st{opacity:.42;text-decoration:line-through;text-decoration-thickness:1px}
.sbj-wrap .sbj-w.x{color:var(--faint);font-style:italic}
.sbj-wrap .sbj-you{display:inline-block;font:600 .62em/1 var(--ui);letter-spacing:.06em;color:var(--ink);background:var(--green);border-radius:3px;padding:4px 6px;margin:0 .2em;vertical-align:.25em}
.sbj-wrap .sbj-gap{display:inline-block;width:.62em;min-width:15px;height:1.25em;margin:0 1px;padding:0;vertical-align:-.25em;border:0;border-radius:3px;background:transparent;cursor:pointer;position:relative}
.sbj-wrap .sbj-gap::after{content:"";position:absolute;left:50%;top:12%;bottom:12%;border-left:1px dotted var(--line-2);transform:translateX(-50%)}
.sbj-wrap .sbj-gap:hover{background:rgba(242,184,75,.16)} .sbj-wrap .sbj-gap:hover::after{border-left:2px solid var(--amber)}
.sbj-wrap .sbj-gap:focus-visible{outline:2px solid var(--cyan)}
.sbj-wrap .sbj-gap.bad{background:rgba(255,107,94,.18)} .sbj-wrap .sbj-gap.bad::after{border-left:2px solid var(--red)}
.sbj-wrap .sbj-bar{display:inline-block;width:3px;height:1.15em;background:var(--amber);margin:0 .28em;vertical-align:-.2em;border-radius:1px;box-shadow:0 0 8px rgba(242,184,75,.6)}
.sbj-wrap .sbj-keys{display:flex;flex-wrap:wrap;gap:6px}
.sbj-wrap .sbj-keys span{font:600 10.5px/1 var(--ui);letter-spacing:.14em;text-transform:uppercase;padding:4px 7px;border:1px solid currentColor;border-radius:2px}
.sbj-wrap .sbj-msg{font:400 15px/1.5 var(--sans);color:var(--muted);border-left:2px solid var(--line-2);padding:2px 0 2px 10px}
.sbj-wrap .sbj-msg.bad{border-left-color:var(--red)} .sbj-wrap .sbj-msg.ok{border-left-color:var(--amber)}
.sbj-wrap .sbj-msg i{font-family:var(--math);font-size:16.5px;color:var(--text)}
.sbj-wrap ol.sbj-steps{margin:0;padding-left:1.4em;font:400 14px/1.45 var(--sans);color:var(--faint);display:grid;gap:3px}
.sbj-wrap ol.sbj-steps li.on{color:var(--text)} .sbj-wrap ol.sbj-steps li.done{color:var(--muted)}
.sbj-wrap .sbj-tag{font:italic 400 clamp(17px,2vw,21px)/1.5 var(--math);color:var(--text)} .sbj-wrap .sbj-tag b{color:var(--pink);font-weight:600}`;
    document.head.appendChild(st);
  }

  let mode = "split", idx = 0, statement = false, solved = false, simple = false, bad = null, msg = null, tries = 0;
  let score = { first: 0, done: 0 }, counted = new Set();
  let stepper = null;
  const it = () => ITEMS[idx];
  const cur = () => parse(statement && it().n ? it().n : it().t);
  const orig = () => parse(it().t);
  const displaced = () => !!it().n;

  // One word as HTML. view: "plain" | "split" (complete parts) | "simple" (heads too) | "verb" | "strip"
  function wordHTML(x, view, isOrig){
    let cls = "sbj-w";
    const subjCol = isOrig && displaced() ? "c5" : "c1";
    if (x.r === "x" && view !== "plain") cls += " x";
    else if (view === "verb") { if (x.r === "V") cls += " hd4"; }
    else if (view === "split" || view === "simple" || view === "strip") {
      if (SUBJ(x.r)) cls += " " + (view !== "split" && x.r === "S" ? "hd3" : subjCol);
      else if (PRED(x.r)) cls += " " + (view !== "split" && x.r === "V" ? "hd4" : "c2");
      if (view === "strip" && x.r === "m") cls += " st";
    }
    return `<span class="${cls}">${esc(x.w)}</span>`;
  }
  const you = () => `<span class="sbj-you" title="understood subject">(you)</span>`;
  function sentHTML(ws, view, opts = {}){
    const parts = [];
    ws.forEach((x, i) => {
      if (opts.gaps) parts.push(`<button type="button" class="sbj-gap${bad === i ? " bad" : ""}" data-g="${i}" aria-label="split before ${esc(strip(x.w))}"></button>`);
      else if (i === 0 && opts.you) parts.push(you() + (opts.bar === 0 ? `<span class="sbj-bar"></span>` : " "));
      else if (opts.bar && opts.bar === i) parts.push(`<span class="sbj-bar"></span>`);
      else if (i > 0) parts.push(" ");
      parts.push(wordHTML(x, view, opts.orig));
    });
    return `<div class="sbj-sent${opts.sm ? " sm" : ""}">${parts.join("")}</div>`;
  }
  const keys = (list) => `<div class="sbj-keys">${list.map(([c, t]) => `<span class="${c}">${t}</span>`).join("")}</div>`;
  const tagHTML = s => esc(s).replace(/\{([^}]+)\}/, "<b>$1</b>");

  /* ---------- feedback for a wrong gap ---------- */
  function feedback(g){
    const I = it(), ws = cur(), right = gapOf(ws);
    if (right < 0) {
      const v = ws.find(x => x.r === "V");
      if (I.id === "there") return `<i>There</i> fills the place before the verb, but it is not what the sentence is about, and the subject comes after <i>${esc(strip(v.w))}</i>. No single gap separates subject from predicate in this order. Press <b>Statement order</b>.`;
      if (/question/i.test(I.kind)) return `In a question the auxiliary <i>${esc(strip(ws[0].r === "V" ? ws[0].w : v.w))}</i> moves in front of the subject, so the predicate is split in two around it. No single gap works. Press <b>Statement order</b> to put the subject back before the verb.`;
      return `Here the verb comes before its subject, so no single gap separates them. Press <b>Statement order</b> and split the plain statement.`;
    }
    if (I.imp) return g === 0 ? "" : `<i>${esc(strip(ws[0].w))}</i> is the verb: this sentence gives an order. Who is to do it? The person spoken to, who is never named. Click the slot <b>before the first word</b>: the subject is not written.`;
    if (g === 0) return `Only a command leaves its subject unwritten, and this sentence is a statement or a question. Find the verb, then ask who or what does it.`;
    if (g < right) {
      const prev = strip(ws[g - 1].w), between = ws.slice(g, right).map(x => strip(x.w)).join(" ");
      if (I.trap && ws.slice(0, g).some(x => strip(x.w) === I.trap) && g < right) return `<i>${esc(I.trap)}</i> is a verb, but it belongs to the describing clause inside the subject. The verb of the sentence is <i>${esc(verbPhrase(ws))}</i>. The words <i>${esc(between)}</i> are still part of the subject.`;
      if (I.objs && I.objs[prev]) return `Too early. <i>${esc(prev)}</i> is the object of the preposition <i>${esc(I.objs[prev])}</i>, not the subject, and <i>${esc(between)}</i> still describes the subject. Look for the verb.`;
      return `Too early. ${/\s/.test(between) ? "The words" : "The word"} <i>${esc(between)}</i> ${/\s/.test(between) ? "are" : "is"} still part of the subject. Find the verb: the subject ends just before it.`;
    }
    const between = ws.slice(right, g).map(x => strip(x.w)).join(" "), v = ws.slice(right, g).find(x => x.r === "V");
    return v ? `Too late. <i>${esc(strip(v.w))}</i> is ${ws.filter(x => x.r === "V").length > 1 && ws[right].r === "V" ? "part of the verb" : "the verb"}, so the predicate starts at <i>${esc(strip(ws[right].w))}</i>. ${/\s/.test(between) ? "The words" : "The word"} <i>${esc(between)}</i> ${/\s/.test(between) ? "belong" : "belongs"} to the predicate.` : `Too late. ${/\s/.test(between) ? "The words" : "The word"} <i>${esc(between)}</i> ${/\s/.test(between) ? "belong" : "belongs"} to the predicate.`;
  }

  function controls(){
    k.ctl.innerHTML = "";
    k.select("Sentence", ITEMS.map((x, i) => { const s = `${i + 1}. ${esc(parse(x.t).map(w => w.w).join(" "))}`; return [i, s.length > 36 ? s.slice(0, 35).replace(/\s+\S*$/, "") + " …" : s]; }), idx, v => { idx = +v; reset(); controls(); draw(); });
    if (mode === "split") {
      k.button("Statement order", () => { if (!it().n) { msg = { cls: "", h: it().imp ? "A command is already in statement order. Its subject is simply not written." : "This sentence is already in statement order: subject first, then the verb." }; } else { statement = !statement; bad = null; msg = null; } draw(); }, "btn ghost");
      k.button(simple ? "Hide simple parts" : "Simple subject & verb", () => { if (!solved) { msg = { cls: "", h: "Find the split first. Then this shows the simple subject and the simple predicate." }; } else simple = !simple; controls(); draw(); }, "btn ghost");
      k.button("Reveal", () => { if (!solved) { if (it().n) statement = true; solved = true; bad = null; msg = { cls: "ok", h: "Revealed. Try the next sentence without help." }; mark(false); } draw(); }, "btn ghost");
      k.button("Next sentence", () => { idx = (idx + 1) % ITEMS.length; reset(); controls(); draw(); });
    } else {
      stepper = k.stepper(() => 5, () => draw(), { ms: 1600 });
    }
  }
  function reset(){ statement = false; solved = false; simple = false; bad = null; msg = null; tries = 0; if (stepper) stepper.k = 0; }
  function mark(ok){ if (counted.has(idx)) return; counted.add(idx); score.done++; if (ok) score.first++; }

  function bindGaps(){
    dom.querySelectorAll(".sbj-gap").forEach(b => b.onclick = () => {
      const g = +b.dataset.g, right = gapOf(cur());
      tries++;
      if (g === right) { solved = true; bad = null; msg = null; mark(tries === 1); }
      else { bad = g; msg = { cls: "bad", h: feedback(g) }; }
      draw();
    });
  }

  /* ---------- mode 1: split ---------- */
  function drawSplit(){
    const I = it(), ws = cur(), g = gapOf(ws), view = simple ? "simple" : "split";
    let html = `<div class="sbj-src">${esc(I.src)}${statement && I.n ? " · statement order" : ""}</div>`;
    if (!solved) html += sentHTML(ws, "plain", { gaps: true });
    else {
      html += sentHTML(ws, view, { bar: g, you: !!I.imp });
      if (I.n && statement) html += `<div class="sbj-src">As written</div>` + sentHTML(orig(), view, { orig: true, sm: true });
      html += keys([[I.imp || I.n ? "c5" : "c1", I.imp ? "Understood subject" : I.n ? "Displaced subject" : "Complete subject"], ["c2", "Complete predicate"], ...(simple ? [["c3", "Simple subject"], ["c4", "Simple predicate"]] : [])]);
    }
    if (msg) html += `<div class="sbj-msg ${msg.cls}">${msg.h}</div>`;
    dom.innerHTML = html; bindGaps();

    const W = solved ? ws : null;
    const cs = W ? (I.imp ? "(you)" : words(W, x => SUBJ(x.r))) : "", cp = W ? words(W, x => PRED(x.r)) : "";
    const ss = W ? (I.imp ? "you (understood)" : words(W, x => x.r === "S").replace(" ", " and ")) : "", sv = W ? verbPhrase(W) : "";
    const sc = `<div class="row"><span>Score (first try)</span> <span class="v c5">${score.first} / ${score.done}</span></div>`;
    if (!solved) {
      k.setRO(`<div><h2>Split the sentence</h2><div class="ro-big" style="margin-top:8px"><span class="num" style="font-size:.7em">${tries ? tries + (tries === 1 ? " try" : " tries") : "Click a gap"}</span></div></div>
        <div class="ro-rows">${sc}<div class="row"><span class="lbl" style="font-size:13.5px;color:var(--muted)">Click the gap where the <span class="c1">subject</span> ends and the <span class="c2">predicate</span> begins. If no subject is written, click the slot before the first word.</span></div></div>
        <div class="landmark"><div class="big">Find the verb first</div><div class="note">The verb is the word that changes for tense. Ask who or what does it: the answer is the subject. If the subject is not in front of the verb, press Statement order.</div></div>
        <p class="narr">Questions, commands and sentences with <i>there</i> or <i>here</i> need a closer look.</p>`);
      return;
    }
    const tagNote = I.tagNote ? " " + I.tagNote : "";
    k.setRO(`<div><h2>${esc(I.kind)}</h2><div class="ro-big" style="margin-top:8px"><span class="c1" style="font-size:.72em">${esc(cs)}</span> <span class="dim">|</span> <span class="c2" style="font-size:.72em">${esc(cp.split(" ").length > 6 ? cp.split(" ").slice(0, 5).join(" ") + " …" : cp)}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Complete subject</span> <span class="v ${I.imp || I.n ? "c5" : "c1"}" style="font-size:15px">${esc(cs)}</span></div>
        <div class="row"><span>Complete predicate</span> <span class="v c2" style="font-size:15px">${esc(cp)}</span></div>
        ${simple ? `<div class="row"><span>Simple subject</span> <span class="v c3" style="font-size:15px">${esc(ss)}</span></div><div class="row"><span>Simple predicate</span> <span class="v c4" style="font-size:15px">${esc(sv)}</span>${I.n ? `<span class="lbl">as written: ${esc(verbPhrase(orig()))}</span>` : ""}</div>` : ""}
        ${sc}
      </div>
      <div class="landmark hit"><div class="big">${esc(I.tagKind)}: <span style="font-size:.85em">${tagHTML(I.tag)}</span></div><div class="note">${esc(simple ? I.strip : I.n ? "The subject is " + (statement ? "back in front of the verb. In the sentence as written it is displaced (green)." : "displaced in the sentence as written.") : I.imp ? "A command speaks to the listener; its subject you is understood." : "The pronoun in the test stands for the whole complete subject.")}${esc(tagNote)}</div></div>
      <p class="narr">${simple ? "Press Next sentence, or try the Subject finder for the step-by-step tests." : "Press Simple subject &amp; verb to strip the subject to its head and the predicate to its verb."}</p>`);
  }

  /* ---------- mode 2: subject finder (stepper) ---------- */
  const STEPS = ["Find the verb", "Put it in statement order", "Ask who or what + verb", "Strip the modifiers", "Check with a pronoun"];
  function drawFind(){
    const I = it(), s = stepper ? stepper.k : 0, O = orig(), N = I.n ? parse(I.n) : O;
    let html = `<div class="sbj-src">Subject finder · ${esc(I.src)}</div>`;
    const viewO = s === 0 ? "plain" : s === 1 ? "verb" : s === 2 ? (I.n ? "verb" : "verb") : s === 3 ? "split" : "strip";
    if (s < 2 || !I.n) html += sentHTML(O, viewO, { orig: true, you: I.imp && s >= 2, bar: s >= 3 && !I.n ? gapOf(O) : null });
    else {
      html += sentHTML(N, s === 2 ? "verb" : s === 3 ? "split" : "strip", { bar: s >= 3 ? gapOf(N) : null });
      html += `<div class="sbj-src">As written</div>` + sentHTML(O, s >= 3 ? "split" : "verb", { orig: true, sm: true });
    }
    if (s >= 5) html += `<div class="sbj-tag">${tagHTML(I.tag)}</div>`;
    html += `<ol class="sbj-steps">${STEPS.map((t, i) => `<li class="${i + 1 === s ? "on" : i + 1 < s ? "done" : ""}">${t}</li>`).join("")}</ol>`;
    dom.innerHTML = html;

    const vp = verbPhrase(N), vo = verbPhrase(O);
    const cs = I.imp ? "(you)" : words(N, x => SUBJ(x.r)), ss = I.imp ? "you (understood)" : words(N, x => x.r === "S").replace(" ", " and ");
    let h, note, hit = false;
    if (s === 0) { h = "Press Step"; note = "Five tests, in order, find the subject of any sentence, even one that hides it."; }
    else if (s === 1) { h = `Verb: <span class="c4">${esc(vo)}</span>`; note = (I.trap ? `Not ${I.trap}: that verb belongs to a clause inside the subject. ` : "") + (vo.includes("…") ? "The verb phrase is interrupted: the auxiliary and the main verb are split apart. " : "") + "The verb is the part that changes for tense; auxiliaries count as part of it, adverbs such as never do not."; }
    else if (s === 2) {
      hit = !!I.n || !!I.imp;
      h = I.n ? "Statement order" : I.imp ? "A command" : "Already a statement";
      note = I.n ? `${I.kind}: the subject is not in front of the verb. Rearranged as a plain statement, it is.${I.id === "scrooge" ? " Do-support drops out, and said carries the tense." : ""}` : I.imp ? "Commands have no written subject. Supply the understood subject, you." : I.id === "who" ? "The question word is itself the subject, so the question keeps statement order: no inversion, no do." : "The subject already comes before the verb.";
    }
    else if (s === 3) { h = `<span class="c1">${esc(cs)}</span>`; note = `${I.ask} The answer is the complete subject; everything else is the complete predicate.`; }
    else if (s === 4) { h = `Simple subject: <span class="c3">${esc(ss)}</span>`; note = I.strip; hit = !!(I.objs || I.trap); }
    else { h = esc(I.tagKind); note = `The pronoun or answer in the test stands for the whole complete subject.${I.tagNote ? " " + I.tagNote : ""}`; hit = true; }
    k.setRO(`<div><h2>Step ${s} of 5</h2><div class="ro-big" style="margin-top:8px"><span style="font-size:.7em">${s ? esc(STEPS[s - 1]) : "Subject finder"}</span></div></div>
      <div class="ro-rows">
        <div class="row"><span>Simple predicate</span> <span class="v c4" style="font-size:15px">${s >= 1 ? esc(vo) : "?"}</span></div>
        <div class="row"><span>Complete subject</span> <span class="v ${I.n || I.imp ? "c5" : "c1"}" style="font-size:15px">${s >= 3 ? esc(cs) : "?"}</span></div>
        <div class="row"><span>Simple subject</span> <span class="v c3" style="font-size:15px">${s >= 4 ? esc(ss) : "?"}</span></div>
      </div>
      <div class="landmark${hit ? " hit" : ""}"><div class="big">${h}</div><div class="note">${esc(note)}</div></div>
      <p class="narr">${s >= 5 ? "Choose another sentence, or Reset." : "Press Step, or Play to run all five tests."}</p>`);
  }

  function draw(){ if (mode === "split") drawSplit(); else drawFind(); }
  const md = k.modes([["split", "Sentence splitter"], ["find", "Subject finder"]], mode, m => { mode = m; stepper = null; reset(); controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
};
})();
