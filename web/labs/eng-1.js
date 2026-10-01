/* ============ Labs: English · Grammar & Usage ============ */
(function(){
const L = window.LABS;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* The Parts of Speech: tag the story passages, see one word take many jobs, and a quiz. */
L["eng-parts-of-speech"] = k => {
  const P = DB.posTags, ST = ((window.ARITH || {})["eng-parts-of-speech"] || {}).stories || [];
  const GROUPS = [["all", "All eight classes"], ["c1", "Nouns & pronouns"], ["c2", "Verbs"], ["c3", "Adjectives & articles"], ["c4", "Adverbs"], ["c5", "Prepositions, conjunctions, interjections"]];
  const QUIZ = ["n", "pr", "v", "aj", "av", "p", "cj", "ij"];             // the traditional eight (an article counts as an adjective)
  const JOBS = {
    fast: [["She runs <b>fast</b>.", "av", "It modifies the verb runs (how does she run?)."], ["a <b>fast</b> train", "aj", "It modifies the noun train, and it compares: a faster train."], ["They broke their <b>fast</b> at sunset.", "n", "It follows the possessive their and goes plural: fasts."], ["Many patients <b>fast</b> before surgery.", "v", "It is the predicate and changes tense: they fasted."]],
    down: [["Alice fell <b>down</b>.", "av", "Nothing follows it: an adverb of direction."], ["Alice fell <b>down</b> the hole.", "p", "It takes the noun phrase the hole as its object."], ["a pillow stuffed with <b>down</b>", "n", "Soft feathers: the object of the preposition with."], ["The dockers <b>down</b> tools at noon.", "v", "It is the predicate and changes tense: they downed tools."]],
    that: [["<b>That</b> lamp is broken.", "aj", "It points to the noun lamp: a demonstrative adjective (a determiner)."], ["I know <b>that</b>.", "pr", "It stands alone for a whole noun phrase: a demonstrative pronoun."], ["I know <b>that</b> you tried.", "cj", "It introduces the clause you tried: a subordinating conjunction."], ["the lamp <b>that</b> broke", "pr", "It refers back to lamp and is the subject of broke: a relative pronoun."]],
    round: [["a <b>round</b> table", "aj", "It modifies the noun table, and it compares: rounder."], ["We won the first <b>round</b>.", "n", "It follows the first and goes plural: rounds."], ["The ship <b>rounds</b> the cape.", "v", "It is the predicate and changes tense: rounded."], ["They sat <b>round</b> the fire.", "p", "It takes the object the fire (American English prefers around)."], ["Come <b>round</b> tomorrow.", "av", "Nothing follows it: an adverb meaning “over, to my place”."]]
  };
  const dom = k.dom(); dom.classList.add("pos-wrap");
  let mode = "read", story = 0, group = "all", sel = null, word = "fast", job = 0, q = null, score = { right: 0, tries: 0 };
  const parsed = ST.map(s => DB.parseStory(s.tokens));
  const tagName = t => t === "ar" ? "Article (adjective)" : P[t].name;
  const src = s => `${esc(s.author)} · <i>${esc(s.book)}</i> (${s.year})`;
  const passage = (i, cls) => { let html = "<p>"; parsed[i].forEach((x, j) => {
    if (x.br) { html += "</p><p>"; return; }
    let w = esc(x.w); if (x.it) w = `<i>${w}</i>`;
    if (x.tag) w = cls(x, j, w);
    html += (x.glue ? "" : " ") + w; }); return html + "</p>"; };

  function controls(){
    k.ctl.innerHTML = "";
    if (mode === "read") {
      k.select("Passage", ST.map((s, i) => [i, s.book]), story, v => { story = +v; sel = null; draw(); });
      k.select("Colour", GROUPS, group, v => { group = v; draw(); });
      k.button("Clear selection", () => { sel = null; draw(); }, "btn ghost");
    } else if (mode === "jobs") {
      k.select("Word", Object.keys(JOBS).map(w => [w, w]), word, v => { word = v; job = 0; draw(); });
      k.button("Next sentence", () => { job = (job + 1) % JOBS[word].length; draw(); }, "btn ghost");
    } else {
      k.button("Next word", () => { pick(); draw(); });
      k.button("Reset score", () => { score = { right: 0, tries: 0 }; draw(); }, "btn ghost");
    }
  }
  function pick(){
    const pool = []; parsed.forEach((p, i) => p.forEach((x, j) => { if (x.tag) pool.push([i, j]); }));
    let c; do { c = pool[Math.floor(Math.random() * pool.length)]; } while (q && pool.length > 1 && c[0] === q.i && c[1] === q.j);
    q = { i: c[0], j: c[1], answer: null };
  }

  function draw(){
    if (mode === "read") {
      const s = ST[story];
      dom.innerHTML = `<div class="pos-src">${src(s)} · ${esc(s.where)}</div><div class="pos-text">${passage(story, (x, j, w) => {
        const c = P[x.tag].c, on = group === "all" || group === c;
        return `<button type="button" class="pos-w ${on ? c + " on" : ""}${sel === j ? " sel " + c : ""}" data-j="${j}" aria-label="${esc(x.w)}">${w}</button>`; })}</div>`;
      dom.querySelectorAll(".pos-w").forEach(b => b.onclick = () => { sel = +b.dataset.j; draw(); });
      const counts = {}; parsed[story].forEach(x => { if (x.tag) counts[x.tag] = (counts[x.tag] || 0) + 1; });
      const x = sel != null ? parsed[story][sel] : null;
      const note = x ? (s.notes || {})[x.key] : null;
      k.setRO(x ? `<div><h2>Selected word</h2><div class="ro-big" style="margin-top:8px"><span class="${P[x.tag].c}">${esc(x.w)}</span></div></div>
        <div class="ro-rows"><div class="row"><span class="v ${P[x.tag].c}">${esc(tagName(x.tag))}</span><span class="lbl">${esc(P[x.tag].test)}</span></div></div>
        <div class="landmark${note ? " hit" : ""}"><div class="big">${note ? "In this sentence" : "Why this class"}</div><div class="note">${esc(note || "Its form and its position in this sentence are those of a " + tagName(x.tag).toLowerCase() + ".")}</div></div>
        <p class="narr">An amber box means this word has a note for this sentence: it changes class or needs a closer look.</p>`
      : `<div><h2>Words by class</h2><div class="ro-big" style="margin-top:8px"><span class="num">${parsed[story].filter(x => x.tag).length}</span> words</div></div>
        <div class="ro-rows">${Object.keys(P).filter(t => counts[t]).map(t => `<div class="row"><span class="${P[t].c}">${esc(tagName(t))}</span> <span class="v ${P[t].c}">${counts[t]}</span></div>`).join("")}</div>
        <div class="landmark"><div class="big">Click any word</div><div class="note">The readout names its part of speech, the test that proves it, and any note on how it works in this sentence.</div></div>
        <p class="narr">Use Colour to pick out one class at a time. Which class does this writer lean on?</p>`);
    } else if (mode === "jobs") {
      const list = JOBS[word], cur = list[job];
      dom.innerHTML = `<div class="pos-src">One word, many jobs: <i>${esc(word)}</i></div><div class="pos-jobs">${list.map(([s, t], i) =>
        `<div class="pos-job${i === job ? " sel" : ""}" data-i="${i}" role="button" tabindex="0"><span class="s ${i === job ? P[t].c : ""}">${s.replace(/<b>/, `<b class="${P[t].c}">`)}</span><span class="t ${P[t].c}">${esc(P[t].name)}</span></div>`).join("")}</div>`;
      dom.querySelectorAll(".pos-job").forEach(el => { el.onclick = () => { job = +el.dataset.i; draw(); }; el.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.onclick(); } }; });
      const classes = [...new Set(list.map(r => r[1]))].length;
      k.setRO(`<div><h2>${esc(word)} in sentence ${job + 1}</h2><div class="ro-big" style="margin-top:8px"><span class="${P[cur[1]].c}">${esc(P[cur[1]].name)}</span></div></div>
        <div class="ro-rows"><div class="row"><span class="lbl" style="font-size:14px;color:var(--muted)">${esc(cur[2])}</span></div><div class="row"><span>Classes for this one spelling</span> <span class="v c1">${classes}</span></div></div>
        <div class="landmark hit"><div class="big">Same spelling, different job</div><div class="note">English changes a word's class with no change of form (conversion). The class belongs to the use, not to the word.</div></div>
        <p class="narr">Pick another word, or step through the sentences.</p>`);
    } else {
      if (!q) pick();
      const s = ST[q.i], x = parsed[q.i][q.j], truth = x.tag === "ar" ? "aj" : x.tag;
      dom.innerHTML = `<div class="pos-src">${src(s)}</div><div class="pos-text">${passage(q.i, (y, j, w) => j === q.j ? `<span class="pos-w sel ${q.answer ? P[x.tag].c : ""}" style="box-shadow:0 0 0 1px var(--amber)">${w}</span>` : w)}</div>
        <div class="pos-quiz">${QUIZ.map(t => `<button type="button" data-t="${t}" class="${q.answer ? (t === truth ? "right" : t === q.answer ? "wrong" : "") : ""}">${esc(P[t].name)}</button>`).join("")}</div>`;
      dom.querySelectorAll(".pos-quiz button").forEach(b => b.onclick = () => { if (q.answer) return; q.answer = b.dataset.t; score.tries++; if (q.answer === truth) score.right++; draw(); });
      const note = (s.notes || {})[x.key];
      k.setRO(`<div><h2>Score</h2><div class="ro-big" style="margin-top:8px"><span class="num c5">${score.right}</span> / <span class="num">${score.tries}</span></div></div>
        <div class="ro-rows"><div class="row"><span>Word</span> <span class="v c1">${esc(x.w)}</span><span class="lbl">Boxed in the passage. What part of speech is it here?</span></div></div>
        ${q.answer ? `<div class="landmark hit"><div class="big">${q.answer === truth ? "Right" : "Not quite"}: <span class="${P[x.tag].c}">${esc(tagName(x.tag))}</span></div><div class="note">${esc(note || P[x.tag].test)}</div></div>`
          : `<div class="landmark"><div class="big">Choose a class</div><div class="note">Use the tests: find the verb first, then try the form and slot tests on this word.</div></div>`}
        <p class="narr">${q.answer ? "Press Next word for another." : "Articles count as adjectives in the traditional eight."}</p>`);
    }
  }
  const md = k.modes([["read", "Tag a passage"], ["jobs", "One word, many jobs"], ["quiz", "Quiz"]], mode, m => { mode = m; controls(); draw(); });
  dom.parentNode.insertBefore(md, dom);
  controls(); draw();
};
})();
