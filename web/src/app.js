(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const h = (tag, attrs={}, html) => { const e = document.createElement(tag); for (const k in attrs) { if (k === "class") e.className = attrs[k]; else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); } if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const T = window.ARITH || {};
// Every charted field has its own tree in DB.trees. Topic ids are unique across fields,
// and a node's prerequisites may come from another field (e.g. Pre-Algebra ← Arithmetic).
const TREES = DB.trees;
const NODES = [];
Object.entries(TREES).forEach(([f, tr]) => tr.nodes.forEach(n => { n.field = f; NODES.push(n); }));
const NODE = Object.fromEntries(NODES.map(n => [n.id, n]));
const fieldNodes = f => (TREES[f] ? TREES[f].nodes : []);
const charted = f => !!TREES[f];
const fieldOf = id => (NODE[id] ? NODE[id].field : "arithmetic");
// unlocks
NODES.forEach(n => n.post = []);
NODES.forEach(n => { n.pre = n.pre.filter(p => { if (NODE[p]) return true; console.warn("Unknown prerequisite", p, "for", n.id); return false; }); n.pre.forEach(p => NODE[p].post.push(n.id)); });
// reading order: by column then row
const ORDERS = Object.fromEntries(Object.keys(TREES).map(f => [f, fieldNodes(f).slice().sort((a,b) => a.col - b.col || a.row - b.row).map(n => n.id)]));
const doneIn = f => fieldNodes(f).filter(n => mastered.has(n.id)).length;
// Subjects (Mathematics, Physics …): each field belongs to one; each subject has its own field map.
const SM = DB.subjectMaps;
const subjOf = f => (DB.fields[f] && DB.fields[f].subject) || "mathematics";
const subjFields = sub => Object.keys(DB.fields).filter(k => subjOf(k) === sub);
const subjTrees = sub => Object.keys(TREES).filter(k => subjOf(k) === sub);
// Math a node needs: a charted topic id, or "field:Topic name" for a field not yet charted.
const mathRef = m => { const i = m.indexOf(":"); if (i < 0) return NODE[m] ? { id: m } : null; const f = m.slice(0, i); return DB.fields[f] ? { field: f, name: m.slice(i + 1) } : null; };

/* ---------- persistence (per-viewer convenience) ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem("codex." + k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem("codex." + k, JSON.stringify(v)); } catch(e){} }
};
let mastered = new Set(store.get("mastered", []));
const saveMastered = () => store.set("mastered", [...mastered]);
function stateOf(id){
  if (mastered.has(id)) return "mastered";
  return NODE[id].pre.every(p => mastered.has(p)) ? "avail" : "locked";
}

/* ---------- app state + routing ---------- */
const S = { view: "menu", subject: "mathematics", field: "arithmetic", topic: null, openGroups: store.get("groups", ["Foundations","Core Sequence"]), pan: {} };
const app = $("#app");
const viewEl = $("#view");
let cleanup = [];
function clearView(){ cleanup.forEach(f => { try{ f(); }catch(e){} }); cleanup = []; viewEl.innerHTML = ""; }

function go(next, push = true){
  Object.assign(S, next);
  if (S.topic && NODE[S.topic]) S.field = fieldOf(S.topic);
  if (S.field !== "map" && DB.fields[S.field]) S.subject = subjOf(S.field);
  if (!SM[S.subject]) S.subject = "mathematics";
  render();
  const tok = S.topic ? S.topic : (S.view === "math" ? (S.field === "map" ? "field-map" + (S.subject !== "mathematics" ? "-" + S.subject : "") : "field-" + S.field) : S.view);
  if (push) { try { history.pushState({ ...next, view: S.view, subject: S.subject, field: S.field, topic: S.topic }, "", "#" + tok); } catch(e){} }
  store.set("last", { view: S.view, subject: S.subject, field: S.field, topic: S.topic });
}
window.addEventListener("popstate", e => { if (e.state) go(e.state, false); });
window.addEventListener("hashchange", () => { const s = fromHash(); if (s) go(s, false); });
function fromHash(){
  const t = (location.hash || "").slice(1);
  if (!t) return null;
  if (NODE[t]) return { view: "math", field: fieldOf(t), topic: t };
  if (t === "field-map" || t.startsWith("field-map-")) { const sub = t.slice(10) || "mathematics"; if (SM[sub]) return { view: "math", subject: sub, field: "map", topic: null }; }
  if (t.startsWith("field-")) { const f = t.slice(6); if (DB.fields[f]) return { view: "math", subject: subjOf(f), field: f, topic: null }; }
  if (t === "menu" || t === "dict") return { view: t, topic: null };
  return null;
}

/* ---------- top bar ---------- */
function crumbs(){
  const c = $("#crumbs"); c.innerHTML = "";
  const parts = [["Menu", () => go({ view: "menu", topic: null })]];
  if (S.view !== "menu") parts.push(["Dictionary", () => go({ view: "dict", topic: null })]);
  if (S.view === "math") {
    parts.push([SM[S.subject].name, () => go({ view: "math", subject: S.subject, field: "map", topic: null })]);
    if (S.field !== "map") parts.push([DB.fields[S.field].name, () => go({ view: "math", topic: null })]);
    if (S.topic) parts.push([T[S.topic] ? T[S.topic].title : S.topic, null]);
  }
  parts.forEach(([label, fn], i) => {
    if (i) c.appendChild(h("span", { class: "sep" + (i < parts.length - 2 ? " hide-s" : "") }, "›"));
    if (fn && i < parts.length - 1) c.appendChild(h("button", { type: "button", class: i < parts.length - 2 ? "hide-s" : "", onclick: fn }, esc(label)));
    else c.appendChild(h("span", { class: "here" }, esc(label)));
  });
  const sf = S.topic ? fieldOf(S.topic) : (S.view === "math" && charted(S.field) ? S.field : null);
  const pool = sf ? fieldNodes(sf) : NODES.filter(n => subjOf(n.field) === S.subject);
  const done = pool.filter(n => mastered.has(n.id)).length, tot = pool.length;
  $("#stat-t").textContent = `${sf ? DB.fields[sf].name : SM[S.subject].name} ${done}/${tot} mastered`;
  $("#stat-m").style.width = (tot ? done / tot * 100 : 0) + "%";
}

function render(){
  clearView(); crumbs();
  if (S.view === "menu") renderMenu();
  else if (S.view === "dict") renderDict();
  else renderWork();
  viewEl.focus({ preventScroll: true });
}

/* ---------- main menu ---------- */
function renderMenu(){
  const s = h("div", { class: "screen" });
  s.innerHTML = `<div class="screen-in">
    <div class="hello"><p class="eyebrow">Codex · knowledge console</p><h1>Choose a section</h1>
    <p>Codex maps each subject as a skill tree. Every node is a full dossier with an interactive model, the exact definitions, a worked example, and where the idea is used.</p></div>
    <div class="slots" id="slots"></div>
    <div class="verline" id="verline"></div></div>`;
  viewEl.appendChild(s);
  const slots = $("#slots", s);
  if (window.codexDesktop) {
    const vl = $("#verline", s);
    vl.innerHTML = `<span>Codex <span class="num">v${esc(DESK_VERSION || "")}</span></span><button type="button" class="btn-s" id="chk">Check for updates</button>`;
    $("#chk", s).onclick = () => window.codexDesktop.checkForUpdates();
  }
  const d = h("button", { type: "button", class: "slot big", onclick: () => go({ view: "dict", topic: null }) },
    `<span class="glyph">Ⅾ</span><span><h3>Dictionary</h3><p>Subjects broken into fields and topics, ordered as a path to mastery. Mathematics, Physics and English are open.</p></span><span class="tag">Online</span>`);
  slots.appendChild(d);
  for (let i = 2; i <= 4; i++) slots.appendChild(h("div", { class: "slot big locked", "aria-disabled": "true" },
    `<span class="glyph">·</span><span><h3>Slot 0${i}</h3><p>Reserved for a future section.</p></span><span class="tag">Empty</span>`));
}

/* ---------- dictionary ---------- */
function renderDict(){
  const s = h("div", { class: "screen" });
  s.innerHTML = `<div class="screen-in">
    <div class="hello"><p class="eyebrow">Dictionary</p><h1>Subjects</h1>
    <p>Pick a subject to open its navigator. Fields appear on the left and the selected field's skill tree on the right.</p></div>
    <div class="subj-groups" id="subj"></div></div>`;
  viewEl.appendChild(s);
  (DB.subjectGroups || [{ id: "all", name: "Subjects", line: "" }]).forEach(g => {
    const subs = DB.subjects.filter(x => (x.group || "all") === g.id);
    if (!subs.length) return;
    const sec = h("section", { class: "subj-group", "data-accent": g.accent || "", "aria-label": g.name });
    sec.innerHTML = `<div class="subj-gh"><h2>${esc(g.name)}</h2><span class="ln">${esc(g.line || "")}</span><span class="n">${subs.length}</span></div><div class="slots"></div>`;
    subs.forEach(sub => {
      const open = sub.status === "open";
      const el = h(open ? "button" : "div", open ? { type: "button", class: "slot", onclick: () => go({ view: "math", subject: sub.id, field: "map", topic: null }) } : { class: "slot locked", "aria-disabled": "true" },
        `<span class="glyph">${sub.glyph}</span><span><h3>${esc(sub.name)}</h3><p>${esc(sub.note)}</p></span><span class="tag">${open ? "Open" : "Locked"}</span>`);
      $(".slots", sec).appendChild(el);
    });
    $("#subj", s).appendChild(sec);
  });
}

/* ---------- workspace ---------- */
function renderWork(){
  const w = h("div", { class: "work", "data-accent": SM[S.subject].accent || "" });
  const nav = h("aside", { class: "nav", "aria-label": SM[S.subject].name + " navigator" });
  const main = h("section", { class: "main" });
  w.append(nav, main); viewEl.appendChild(w);
  buildNav(nav, w);
  if (S.topic) renderTopic(main);
  else if (S.field === "map") renderFieldMap(main);
  else if (charted(S.field)) renderFieldTree(main, S.field);
  else renderDossier(main);
}

function buildNav(nav, w){
  nav.innerHTML = `<div class="nav-top">
      <div class="nav-title"><span class="glyph">${SM[S.subject].glyph}</span><div><h2>${esc(SM[S.subject].name)}</h2><small>${subjFields(S.subject).length} fields · ${subjTrees(S.subject).length} charted</small></div></div>
      <label class="search"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><circle cx="6" cy="6" r="4.5" fill="none" stroke="#8B97AE" stroke-width="1.4"/><path d="M9.5 9.5 13 13" stroke="#8B97AE" stroke-width="1.4"/></svg>
      <input id="navq" type="text" placeholder="Search fields and topics" aria-label="Search fields and topics"></label>
    </div><div class="nav-list" id="navlist"></div>
    <div class="nav-foot">Gold nodes are ready to study. Green nodes are mastered. Mark a topic mastered from its page.</div>`;
  const list = $("#navlist", nav);
  const q = $("#navq", nav);
  function build(){
    const term = q.value.trim().toLowerCase();
    list.innerHTML = "";
    const mapItem = h("button", { type: "button", class: "item" + (S.field === "map" && !S.topic ? " sel" : ""), onclick: () => { w.classList.remove("navopen"); go({ view: "math", subject: S.subject, field: "map", topic: null }); } },
      `<span class="ic">⌗</span><span style="min-width:0"><span class="nm">Field map</span><span class="lv">${esc(SM[S.subject].mapLine)}</span></span><span class="st"></span>`);
    if (!term) list.appendChild(mapItem);
    SM[S.subject].groups.forEach(g => {
      const ids = g.ids.filter(id => {
        if (!term) return true;
        const f = DB.fields[id];
        if (f.name.toLowerCase().includes(term)) return true;
        if (charted(id)) return fieldNodes(id).some(n => (T[n.id]?.title || "").toLowerCase().includes(term));
        return f.topics.some(t => t.toLowerCase().includes(term));
      });
      if (!ids.length) return;
      const open = term || S.openGroups.includes(g.name) || ids.includes(S.field);
      const grp = h("div", { class: "grp" + (open ? " open" : "") });
      const head = h("button", { type: "button", class: "grp-h", "aria-expanded": String(!!open) }, `<span class="car"></span>${esc(g.name)}<span class="n">${ids.length}</span>`);
      head.onclick = () => {
        const on = !grp.classList.contains("open"); grp.classList.toggle("open", on); head.setAttribute("aria-expanded", String(on));
        S.openGroups = on ? [...new Set([...S.openGroups, g.name])] : S.openGroups.filter(x => x !== g.name); store.set("groups", S.openGroups);
      };
      const body = h("div", { class: "grp-b" });
      ids.forEach(id => {
        const f = DB.fields[id];
        const isCh = charted(id);
        const it = h("button", { type: "button", class: "item" + (isCh ? " charted" : "") + (S.field === id && !S.topic ? " sel" : ""), onclick: () => { w.classList.remove("navopen"); go({ view: "math", field: id, topic: null }); } },
          `<span class="ic">${f.icon}</span><span style="min-width:0"><span class="nm">${esc(f.name)}</span><span class="lv">${esc(f.level)}</span></span><span class="st">${isCh ? doneIn(id) + "/" + fieldNodes(id).length : "Planned"}</span>`);
        body.appendChild(it);
        if (isCh && (S.field === id || term)) {
          ORDERS[id].map(x => NODE[x]).forEach(n => {
            const t = T[n.id]; if (!t) return;
            if (term && !t.title.toLowerCase().includes(term)) return;
            const st = stateOf(n.id);
            const sub = h("button", { type: "button", class: "item sub" + (st === "mastered" ? " mastered" : "") + (S.topic === n.id ? " sel" : ""), onclick: () => { w.classList.remove("navopen"); go({ view: "math", field: id, topic: n.id }); } },
              `<span class="ic"${[...n.icon].length > 3 ? ' style="font-size:8px;letter-spacing:-.03em"' : [...n.icon].length > 2 ? ' style="font-size:9.5px"' : ""}>${n.icon}</span><span class="nm">${esc(t.title)}</span><span class="st">${st === "mastered" ? "✓" : ""}</span>`);
            body.appendChild(sub);
          });
        }
      });
      grp.append(head, body); list.appendChild(grp);
    });
    const sel = list.querySelector(".item.sel");
    if (sel && !term) requestAnimationFrame(() => { const r = sel.getBoundingClientRect(), lr = list.getBoundingClientRect(); if (r.top < lr.top || r.bottom > lr.bottom) sel.scrollIntoView({ block: "center" }); });
  }
  q.addEventListener("input", build);
  build();
}

/* ---------- generic pannable tree (Civ-style) ---------- */
const COLW = 364, ROWH = 92, PADX = 40, PADY = 58, NW = 312, NH = 70;
function buildTree(main, cfg){
  const { nodes, eras, key, stateFn, title, onOpen, infoFn } = cfg;
  const maxCol = Math.max(...nodes.map(n => n.col)), maxRow = Math.max(...nodes.map(n => n.row));
  const W = PADX * 2 + (maxCol + 1) * COLW - (COLW - NW), H = PADY + (maxRow + 1) * ROWH + 10;
  const vp = h("div", { class: "tree-vp", role: "region", "aria-label": title + " skill tree. Drag or scroll to pan." });
  const cv = h("div", { class: "tree-canvas" });
  cv.style.width = W + "px"; cv.style.height = H + "px";
  // eras
  const erasEl = h("div", { class: "eras" }); erasEl.style.width = W + "px";
  eras.forEach((e, i) => {
    const x0 = i === 0 ? 0 : PADX + e.from * COLW - (COLW - NW) / 2;
    const x1 = i === eras.length - 1 ? W : PADX + (e.to + 1) * COLW - (COLW - NW) / 2;
    const el = h("div", { class: "era" }, esc(e.name)); el.style.width = (x1 - x0) + "px"; erasEl.appendChild(el);
    const band = h("div", { class: "era-band" }); band.style.left = x0 + "px"; band.style.width = (x1 - x0) + "px"; cv.appendChild(band);
  });
  const pos = id => { const n = nodes.find(x => x.id === id); return { x: PADX + n.col * COLW, y: PADY + n.row * ROWH }; };
  // edges
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg"); svg.setAttribute("width", W); svg.setAttribute("height", H);
  const edges = [];
  nodes.forEach(n => n.pre.forEach(p => {
    const a = pos(p), b = pos(n.id);
    const x1 = a.x + NW, y1 = a.y + NH / 2, x2 = b.x + 22, y2 = b.y + NH / 2;
    const xm = x2 - 26;
    const r = Math.min(8, Math.abs(y2 - y1) / 2);
    let d;
    if (Math.abs(y2 - y1) < 1) d = `M${x1} ${y1}H${x2}`;
    else { const s = y2 > y1 ? 1 : -1; d = `M${x1} ${y1}H${xm - r}Q${xm} ${y1} ${xm} ${y1 + s*r}V${y2 - s*r}Q${xm} ${y2} ${xm + r} ${y2}H${x2}`; }
    const path = document.createElementNS(svgNS, "path"); path.setAttribute("d", d); path.setAttribute("class", "edge");
    svg.appendChild(path); edges.push({ from: p, to: n.id, el: path });
  }));
  cv.appendChild(svg);
  // nodes
  const els = {};
  nodes.forEach(n => {
    const p = pos(n.id), st = stateFn(n.id);
    const el = h("button", { type: "button", class: "node", "data-st": st, "data-id": n.id, "aria-label": n.label + " (" + ({mastered:"mastered",avail:"ready to study",locked:"prerequisites not yet mastered",planned:"planned"}[st]) + ")" },
      `<span class="box"><span class="ttl"><span>${esc(n.label)}</span><span class="hrs">${n.right || ""}</span></span><span class="chips">${(n.chips||[]).map(c => `<span class="chip">${c}</span>`).join("")}</span></span><span class="orb" style="font-size:${[...n.icon].length > 5 ? 12 : [...n.icon].length > 3 ? 14 : [...n.icon].length > 2 ? 17 : 20}px">${n.icon}</span>`);
    el.style.left = p.x + "px"; el.style.top = p.y + "px";
    els[n.id] = el; cv.appendChild(el);
  });
  edges.forEach(e => { if (stateFn(e.from) === "mastered" && stateFn(e.to) === "mastered") e.el.classList.add("done"); });
  vp.appendChild(cv); vp.appendChild(erasEl);
  const info = h("div", { class: "info-card win" }); info.innerHTML = `<div class="in"></div>`; vp.appendChild(info);
  // highlight ancestry
  function ancestors(id, acc = new Set()){ const n = nodes.find(x => x.id === id); n.pre.forEach(p => { if (!acc.has(p)) { acc.add(p); ancestors(p, acc); } }); return acc; }
  function hl(id){
    Object.values(els).forEach(e => e.classList.remove("hl"));
    edges.forEach(e => e.el.classList.remove("hl"));
    if (!id) { info.classList.remove("on"); return; }
    const anc = ancestors(id); anc.forEach(a => els[a].classList.add("hl"));
    edges.forEach(e => { if ((e.to === id || anc.has(e.to)) && (anc.has(e.from))) e.el.classList.add("hl"); });
    if (infoFn) { info.firstChild.innerHTML = infoFn(id, anc); info.classList.add("on"); }
  }
  // bottom bar
  const bar = h("div", { class: "tree-bar" });
  bar.innerHTML = `<button type="button" class="btn-s" data-d="-1" aria-label="Pan left">◀</button><div class="track" aria-hidden="true"><div class="thumb"></div></div><button type="button" class="btn-s" data-d="1" aria-label="Pan right">▶</button><span class="hint">Drag to pan · scroll · click a node to open</span>`;
  main.append(vp, bar);
  // pan logic
  let px = S.pan[key]?.x ?? 0, py = S.pan[key]?.y ?? 0, vw = 1, vh = 1;
  const track = $(".track", bar), thumb = $(".thumb", bar);
  function clamp(){ px = Math.min(0, Math.max(px, Math.min(0, vw - W))); if (H <= vh) py = Math.round((vh - H) / 2); else py = Math.min(0, Math.max(py, vh - H)); }
  function apply(){
    clamp(); cv.style.transform = `translate(${px}px,${py}px)`; erasEl.style.transform = `translateX(${px}px)`;
    const tw = track.clientWidth, frac = Math.min(1, vw / W);
    thumb.style.width = Math.max(24, tw * frac) + "px";
    const maxT = tw - thumb.offsetWidth; const t = W > vw ? (-px) / (W - vw) : 0;
    thumb.style.left = (maxT * t) + "px";
    S.pan[key] = { x: px, y: py };
  }
  const ro = new ResizeObserver(() => { vw = vp.clientWidth; vh = vp.clientHeight; apply(); });
  ro.observe(vp); cleanup.push(() => ro.disconnect());
  let drag = null, moved = false;
  vp.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, y: e.clientY, px, py, id: e.pointerId }; moved = false;
  });
  vp.addEventListener("pointermove", e => {
    if (!drag) {
      const n = e.target.closest(".node"); hl(n ? n.dataset.id : null); return;
    }
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!moved && Math.hypot(dx, dy) > 5) { moved = true; vp.classList.add("drag"); try { vp.setPointerCapture(drag.id); } catch(_){} hl(null); }
    if (moved) { px = drag.px + dx; py = drag.py + dy; apply(); }
  });
  const end = e => {
    if (!drag) return;
    const wasMoved = moved; drag = null; vp.classList.remove("drag");
    if (!wasMoved) { const n = e.target.closest && e.target.closest(".node"); if (n) onOpen(n.dataset.id); }
  };
  vp.addEventListener("pointerup", end);
  vp.addEventListener("pointercancel", () => { drag = null; vp.classList.remove("drag"); });
  vp.addEventListener("pointerleave", () => { if (!drag) hl(null); });
  vp.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.classList.contains("node")) { e.preventDefault(); onOpen(e.target.dataset.id); } });
  cv.querySelectorAll(".node").forEach(n => { n.addEventListener("click", e => e.preventDefault()); n.addEventListener("focus", () => { hl(n.dataset.id); const x = parseFloat(n.style.left); if (x + px < 0 || x + px + NW > vw) { px = -(x - vw / 2 + NW / 2); apply(); } }); n.addEventListener("blur", () => hl(null)); });
  vp.addEventListener("wheel", e => { e.preventDefault(); const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) || H <= vh) px -= d; else { px -= d; } apply(); }, { passive: false });
  bar.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { const target = px - (+b.dataset.d) * COLW * 2; animatePan(target); });
  function animatePan(target){ const start = px, t0 = performance.now(); const step = now => { const k = Math.min(1, (now - t0) / 350); const e = 1 - Math.pow(1 - k, 3); px = start + (target - start) * e; apply(); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }
  let tdrag = null;
  thumb.addEventListener("pointerdown", e => { e.stopPropagation(); tdrag = { x: e.clientX, left: thumb.offsetLeft }; thumb.setPointerCapture(e.pointerId); });
  thumb.addEventListener("pointermove", e => { if (!tdrag) return; const maxT = track.clientWidth - thumb.offsetWidth; const l = Math.max(0, Math.min(maxT, tdrag.left + e.clientX - tdrag.x)); px = -(l / (maxT || 1)) * (W - vw); apply(); });
  thumb.addEventListener("pointerup", () => tdrag = null);
  track.addEventListener("pointerdown", e => { if (e.target !== track) return; const r = track.getBoundingClientRect(); const t = (e.clientX - r.left) / r.width; animatePan(-(t * W - vw / 2)); });
  return { els, focus(id){ const p = pos(id); px = -(p.x - vw / 2 + NW / 2); py = -(p.y - vh / 2 + NH / 2); apply(); els[id].classList.add("sel"); } };
}

function renderFieldTree(main, f){
  const F = DB.fields[f], TR = TREES[f], FN = fieldNodes(f);
  const head = h("div", { class: "tree-head" });
  const done = doneIn(f);
  const hrs = FN.reduce((s, n) => s + (T[n.id]?.hours || 0), 0);
  head.innerHTML = `<button type="button" class="btn-s navtoggle" id="navtoggle2">☰ Fields</button><div><h2>${esc(F.name)}</h2><div class="sub">${FN.length} topic${FN.length === 1 ? "" : "s"}${TR.planned && TR.planned.length ? ` written, ${TR.planned.length} planned` : ""} · about ${hrs} study hours · ${done} mastered</div></div>
   <div class="legend-chips"><span><i class="lg-m"></i>Mastered</span><span><i class="lg-a"></i>Ready</span><span><i class="lg-l"></i>Locked</span>${TR.planned && TR.planned.length ? '<span><i class="lg-p"></i>Planned</span>' : ""}<span><i class="lg-s"></i>Last opened</span></div>`;
  main.appendChild(head);
  $("#navtoggle2", head).onclick = () => main.parentElement.classList.toggle("navopen");
  const inTree = new Set(FN.map(n => n.id));
  // Planned nodes (TR.planned) show the rest of a partly written tree, dashed and not openable.
  const PL = TR.planned || [], PLAN = Object.fromEntries(PL.map(n => [n.id, n]));
  const nodes = FN.map(n => ({ ...n, pre: n.pre.filter(p => inTree.has(p)), ext: n.pre.filter(p => !inTree.has(p)), label: T[n.id]?.title || n.id, right: T[n.id] ? T[n.id].hours + " h" : "" }))
    .concat(PL.map(n => ({ ...n, pre: n.pre.filter(p => inTree.has(p) || PLAN[p]), ext: n.pre.filter(p => !inTree.has(p) && !PLAN[p]), right: "Planned" })));
  const tree = buildTree(main, {
    nodes, eras: TR.eras, key: "tree-" + f, title: F.name, stateFn: id => PLAN[id] ? "planned" : stateOf(id),
    onOpen: id => { if (!PLAN[id]) go({ view: "math", field: f, topic: id }); },
    infoFn: (id, anc) => {
      if (PLAN[id]) { const lb = p => esc(PLAN[p] ? PLAN[p].label : (T[p]?.title || p));
        return `<div><span class="pill l">Planned</span></div><h4>${esc(PLAN[id].label)}</h4><p>This topic's page is not written yet. It is shown so you can see the whole path.</p><div class="req">${PLAN[id].pre.length ? "Requires: " + PLAN[id].pre.map(lb).join(", ") : ""}</div>`; }
      const t = T[id], st = stateOf(id), nd = NODE[id];
      const pill = st === "mastered" ? `<span class="pill m">Mastered</span>` : st === "avail" ? `<span class="pill a">Ready to study</span>` : `<span class="pill l">Locked</span>`;
      const nm = p => esc(T[p]?.title || p) + (NODE[p].field !== f ? ` <span style="color:var(--faint)">(${esc(DB.fields[NODE[p].field].name)})</span>` : "");
      const need = nd.pre.filter(p => !mastered.has(p)).map(nm);
      return `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${pill}<span class="pill l">${esc(t?.grade || "")}</span></div><h4>${esc(t?.title || id)}</h4><p>${esc(t?.short || "")}</p>
        <div class="req">${nd.pre.length ? "Requires: " + nd.pre.map(nm).join(", ") : "Starting point, no prerequisites"}${need.length && st !== "mastered" ? "<br>Still to master: " + need.join(", ") : ""}<br>Path length: ${anc.size} topic${anc.size === 1 ? "" : "s"} before this one in this tree</div>`;
    }
  });
  const last = store.get("lastTopic." + f, f === "arithmetic" ? store.get("lastTopic", null) : null);
  if (last && inTree.has(last) && !S.pan["tree-" + f]) requestAnimationFrame(() => tree.focus(last));
  else if (last && inTree.has(last)) tree.els[last].classList.add("sel");
}

function renderFieldMap(main){
  const head = h("div", { class: "tree-head" });
  const sm = SM[S.subject];
  head.innerHTML = `<button type="button" class="btn-s navtoggle" id="navtoggle2">☰ Fields</button><div><h2>${esc(sm.name)} field map</h2><div class="sub">${esc(sm.mapSub)}</div></div>
    <div class="legend-chips"><span><i class="lg-a"></i>Charted</span><span><i class="lg-l"></i>Planned</span></div>`;
  main.appendChild(head);
  $("#navtoggle2", head).onclick = () => main.parentElement.classList.toggle("navopen");
  const nodes = subjFields(S.subject).map(id => [id, DB.fields[id]]).map(([id, f]) => ({ id, col: f.col, row: f.row, pre: f.pre, icon: f.icon, label: f.name, right: "", chips: [f.level.split("·")[0].trim()] }));
  buildTree(main, {
    nodes, eras: sm.eras, key: "map-" + S.subject, title: sm.name + " field map",
    stateFn: id => charted(id) ? "avail" : "planned",
    onOpen: id => go({ view: "math", field: id, topic: null }),
    infoFn: id => { const f = DB.fields[id]; return `<div>${charted(id) ? '<span class="pill a">Charted</span>' : '<span class="pill l">Planned</span>'}</div><h4>${esc(f.name)}</h4><p>${esc(f.blurb)}</p><div class="req">${esc(f.level)}${f.pre.length ? "<br>Requires: " + f.pre.map(p => esc(DB.fields[p].name)).join(", ") : S.subject !== "mathematics" ? `<br>Starting field, no ${esc(sm.name)} prerequisites` : ""}${f.math && f.math.length ? "<br>Mathematics: " + f.math.map(p => esc(DB.fields[p].name)).join(", ") : ""}${f.physics && f.physics.length ? "<br>Physics: " + f.physics.map(p => esc(DB.fields[p].name)).join(", ") : ""}</div>`; }
  });
}

function renderDossier(main){
  const f = DB.fields[S.field];
  const id = S.field;
  const next = Object.entries(DB.fields).filter(([k, v]) => v.pre.includes(id)).map(([k]) => k);
  const d = h("div", { class: "dossier" });
  d.innerHTML = `<div class="dossier-in">
    <div><button type="button" class="btn-s navtoggle" id="navtoggle2" style="margin-bottom:12px">☰ Fields</button><p class="eyebrow">${esc(f.level)}</p><h1>${esc(f.name)}</h1><p class="lede">${esc(f.blurb)}</p>
      <div class="meta"><span class="pill l">Skill tree not yet charted</span>${subjTrees(subjOf(id)).length ? `<span class="pill a">${subjTrees(subjOf(id)).map(k => esc(DB.fields[k].name)).join(", ")} charted</span>` : ""}</div></div>
    <div class="dgrid">
      <div class="win"><div class="win-h"><span class="dot"></span>Core topics</div><div class="in"><ol>${f.topics.map(t => `<li>${esc(t)}</li>`).join("")}</ol></div></div>
      <div style="display:grid;gap:16px;align-content:start">
        <div class="win"><div class="win-h"><span class="dot"></span>Study first</div><div class="in"><div class="linkrow">${f.pre.length ? f.pre.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("") : '<span class="empty">None</span>'}</div></div></div>
        ${f.math && f.math.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Mathematics needed</div><div class="in"><div class="linkrow">${f.math.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("")}</div></div></div>` : ""}
        ${f.physics && f.physics.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Physics needed</div><div class="in"><div class="linkrow">${f.physics.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("")}</div></div></div>` : ""}
        <div class="win"><div class="win-h"><span class="dot"></span>Leads to</div><div class="in"><div class="linkrow">${next.length ? next.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("") : '<span class="empty">Capstone field in this map</span>'}</div></div></div>
        <div class="win"><div class="win-h"><span class="dot"></span>Status</div><div class="in"><p style="margin:0;color:var(--muted);font-size:14px">The topic tree for ${esc(f.name)} will be built with the same dossier format as the charted fields. The list on the left is the planned node set.</p></div></div>
      </div>
    </div></div>`;
  main.appendChild(d);
  d.querySelectorAll("[data-f]").forEach(b => b.onclick = () => go({ view: "math", field: b.dataset.f, topic: null }));
  $("#navtoggle2", d).onclick = () => main.parentElement.classList.toggle("navopen");
}

/* ---------- story panels (English topics) ---------- */
// A story: { title, book, author, year, kind, where, scene, focus: [tags], tokens, notes, note, tags? }.
// Focus words are coloured by their tag: parts of speech (DB.posTags) unless the story defines its own
// `tags` (subject/predicate, clause types, comma rules …). The art comes from DB.scenes.
function storyPassage(st){
  const P = st.tags || DB.posTags, focus = new Set(st.focus || []);
  let html = "<p>";
  DB.parseStory(st.tokens).forEach(x => {
    if (x.br) { html += "</p><p>"; return; }
    let w = esc(x.w); if (x.it) w = `<i>${w}</i>`;
    if (x.tag && focus.has(x.tag)) { const note = (st.notes || {})[x.key]; w = `<span class="sw ${P[x.tag].c}" title="${esc(P[x.tag].name + (note ? ": " + note : ""))}">${w}</span>`; }
    html += (x.glue ? "" : " ") + w;
  });
  return html + "</p>";
}
function storyPanel(st){
  const P = st.tags || DB.posTags, art = (DB.scenes || {})[st.scene] || "";
  const keys = [...new Set((st.focus || []).map(f => P[f].c + "|" + P[f].name))].map(k => { const [c, n] = k.split("|"); return `<span class="sk ${c}">${esc(n)}</span>`; }).join("");
  return `<article class="story">
    <header class="story-h"><h3>${esc(st.title)}</h3></header>
    <div class="story-art">${art}</div>
    <div class="story-txt">${storyPassage(st)}
      <div class="story-cite">${esc(st.author)} · <i>${esc(st.book)}</i> (${st.year}) · ${esc(st.where)}</div>
      <div class="story-note"><div class="story-keys">${keys}</div>${st.note}</div>
    </div>
  </article>`;
}

/* ---------- topic page ---------- */
// Placeholder used only if a node has no content yet (keeps the app usable while a tree is being written).
function stubTopic(id){
  return { title: id, short: "", grade: "", hours: 0, voice: "plain", eyebrow: "Content coming soon", hero: esc(id), lede: "This topic's dossier has not been written yet.",
    plain: "", formal: "", legend: [], steps: { title: "Steps", items: [] }, example: { prompt: "", lines: [], answer: "" }, why: "", careers: [], life: [], fields: [],
    prereqWhy: {}, unlocksWhy: {}, beyond: [], mistakes: [], practice: [], origin: "" };
}
function renderTopic(main){
  const id = S.topic, n = NODE[id], f = n.field, FNAME = DB.fields[f].name;
  const t = T[id] || stubTopic(id);
  store.set("lastTopic." + f, id);
  const st = stateOf(id);
  const ORDER = ORDERS[f], idx = ORDER.indexOf(id), prev = ORDER[idx - 1], next = ORDER[idx + 1];
  const pg = h("div", { class: "topic" });
  const voiceTxt = { young: "Written for young learners, with the formal version alongside", mixed: "Plain explanation with the formal version alongside", plain: "Stated plainly, adult level" }[t.voice] || "";
  const link = pid => { const s = stateOf(pid), tp = T[pid] || { title: pid, short: "" }, other = NODE[pid].field !== f ? ` <span style="font-weight:400;color:var(--faint)">· ${esc(DB.fields[NODE[pid].field].name)}</span>` : ""; return `<button type="button" class="plink" data-t="${pid}" data-st="${s}"><span class="o"${[...NODE[pid].icon].length > 3 ? ' style="font-size:10px;letter-spacing:-.02em"' : ""}>${NODE[pid].icon}</span><span><b>${esc(tp.title)}${other}</b><span>${t.prereqWhy?.[pid] || t.unlocksWhy?.[pid] || esc(tp.short)}</span></span></button>`; };
  const mathLink = m => { const r = mathRef(m); if (!r) return "";
    const why = (t.mathWhy && t.mathWhy[m]) || "";
    if (r.id) { const tp = T[r.id] || { title: r.id, short: "" }; return `<button type="button" class="plink" data-t="${r.id}" data-st="${stateOf(r.id)}"><span class="o">${NODE[r.id].icon}</span><span><b>${esc(tp.title)} <span style="font-weight:400;color:var(--faint)">· ${esc(DB.fields[NODE[r.id].field].name)}</span></b><span>${why || esc(tp.short)}</span></span></button>`; }
    const F2 = DB.fields[r.field]; return `<button type="button" class="plink" data-f="${r.field}" data-st="planned"><span class="o">${F2.icon}</span><span><b>${esc(r.name)} <span style="font-weight:400;color:var(--faint)">· ${esc(F2.name)}${charted(r.field) ? "" : " (planned)"}</span></b><span>${why}</span></span></button>`; };
  const mathList = (n.math || []).map(mathLink).filter(Boolean), physList = (n.physics || []).map(mathLink).filter(Boolean);
  pg.innerHTML = `
  <div class="topic-bar">
    <button type="button" class="btn-s navtoggle" id="navtoggle2">☰</button>
    <button type="button" class="btn-s" id="back">◀ ${esc(FNAME)} tree</button>
    <span class="sp"></span>
    ${st === "mastered" ? '<span class="pill m">Mastered</span>' : st === "avail" ? '<span class="pill a">Ready to study</span>' : '<span class="pill l">Prerequisites open</span>'}
    <button type="button" class="btn ${st === "mastered" ? "ghost" : "good"}" id="mast">${st === "mastered" ? "Unmark mastered" : "Mark as mastered"}</button>
  </div>
  <div class="wrap">
    <header class="intro">
      <div><p class="eyebrow">${t.eyebrow}</p><h1>${t.hero}</h1>
        <div class="meta"><span class="pill l">${esc(t.grade)}</span><span class="pill l">About ${t.hours} h to master</span><span class="pill l">${esc(voiceTxt)}</span></div></div>
      <p class="lede">${t.lede}</p>
    </header>
    <section class="lab" aria-label="Interactive model">
      <div class="stage" id="stage"></div>
      <aside class="readout" id="readout" aria-live="off"></aside>
      <div class="controls" id="controls"></div>
    </section>
    <section class="notes">
      <div><h2>Reading the model</h2><div class="legend">${t.legend.map(k => `<div class="key" style="--c:var(--${{c1:"amber",c2:"cyan",c3:"pink",c4:"violet",c5:"green"}[k.c]})"><h3><span class="m">${k.sym}</span>${esc(k.name)}</h3><p>${k.desc}</p></div>`).join("")}</div></div>
      <div class="two">
        <div><h2>In plain words</h2><span class="voice">${t.voice === "young" ? "For a ten-year-old" : "Plain language"}</span>${t.plain}</div>
        <div><h2>Formal statement</h2><span class="voice f">College level</span>${t.formal}</div>
      </div>
      ${(t.stories || []).length ? `<div><h2>In the stories</h2><p>Passages from well-known books, with the words this topic is about picked out in colour. Every passage is quoted exactly from a public-domain edition.</p><div class="stories">${t.stories.map(storyPanel).join("")}</div></div>` : ""}
      <div><h2>${esc(t.steps.title)}</h2><ol class="steps">${t.steps.items.map(s => `<li><div>${s}</div></li>`).join("")}</ol></div>
      <div><h2>Worked example</h2><div class="ex"><div class="prompt"><p class="eyebrow">Problem</p>${t.example.prompt}</div>
        <div class="tbl"><table>${t.example.lines.map(l => `<tr><td>${l.math}</td><td>${esc(l.note)}</td></tr>`).join("")}</table></div>
        <div class="ans"><b>Answer.</b> ${t.example.answer}</div></div></div>
      <div><h2>Why it matters</h2>${t.why}
        <h3 style="margin-top:18px">Careers that use it</h3><div class="careers">${t.careers.map(c => `<div class="career"><h4>${esc(c.role)}</h4><p>${esc(c.use)}</p></div>`).join("")}</div>
        <div class="two" style="margin-top:22px"><div><h3>Everyday tasks</h3><ul class="lifelist">${t.life.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div><h3>Subjects that rely on it</h3><div class="fieldrow">${t.fields.map(f => `<div><b>${esc(f.name)}.</b> ${esc(f.use)}</div>`).join("")}</div></div></div>
      </div>
      <div><h2>Learning path</h2><div class="path">
        ${mathList.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Mathematics you need</div><div class="in">${mathList.join("")}</div></div>` : ""}
        ${physList.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Physics you need</div><div class="in">${physList.join("")}</div></div>` : ""}
        <div class="win"><div class="win-h"><span class="dot"></span>Master these first</div><div class="in">${n.pre.length ? n.pre.map(link).join("") : '<span class="empty">This is the starting point of the tree. Nothing is required first.</span>'}</div></div>
        <div class="win"><div class="win-h"><span class="dot"></span>This unlocks</div><div class="in">${n.post.length ? n.post.map(link).join("") : '<span class="empty">No later charted topic depends on this directly. It feeds the fields below.</span>'}</div></div>
        <div class="win"><div class="win-h"><span class="dot"></span>Vital in later fields</div><div class="in">${t.beyond.map(b => `<div class="plink" style="cursor:default"><span class="o">→</span><span><b>${esc(b.field)}</b><span>${esc(b.why)}</span></span></div>`).join("")}</div></div>
      </div></div>
      <div><h2>Common mistakes</h2><div class="mist">${t.mistakes.map(m => `<div><div class="w">${m.wrong}</div><div class="f">${m.fix}</div></div>`).join("")}</div></div>
      <div><h2>Practice</h2><div class="prac">${t.practice.map((p, i) => `<div class="pq"><div class="q"><span class="n">${String(i+1).padStart(2,"0")}</span>${p.q}</div><button type="button" class="btn-s" data-ans="${i}">Show answer</button><div class="a" hidden>${p.a}</div></div>`).join("")}</div></div>
      ${t.origin ? `<div><h2>Origin</h2><p class="origin">${t.origin}</p></div>` : ""}
      <div class="pager">${prev ? `<button type="button" class="btn ghost" data-t="${prev}">◀ ${esc((T[prev] || { title: prev }).title)}</button>` : "<span></span>"}${next ? `<button type="button" class="btn ghost" data-t="${next}">${esc((T[next] || { title: next }).title)} ▶</button>` : ""}</div>
    </section>
  </div>`;
  main.appendChild(pg);
  pg.scrollTop = 0;
  $("#back", pg).onclick = () => go({ view: "math", field: f, topic: null });
  $("#navtoggle2", pg).onclick = () => main.parentElement.classList.toggle("navopen");
  $("#mast", pg).onclick = () => { if (mastered.has(id)) mastered.delete(id); else mastered.add(id); saveMastered(); const y = pg.scrollTop; render(); const np = $(".topic"); if (np) np.scrollTop = y; };
  pg.querySelectorAll("[data-t]").forEach(b => b.onclick = () => go({ view: "math", field: fieldOf(b.dataset.t), topic: b.dataset.t }));
  pg.querySelectorAll(".plink[data-f]").forEach(b => b.onclick = () => go({ view: "math", field: b.dataset.f, topic: null }));
  pg.querySelectorAll("[data-ans]").forEach(b => b.onclick = () => { const a = b.nextElementSibling; a.hidden = !a.hidden; b.textContent = a.hidden ? "Show answer" : "Hide answer"; });
  // lab
  const lab = window.LABS && window.LABS[id];
  const stage = $("#stage", pg), ro = $("#readout", pg), ctl = $("#controls", pg);
  if (lab) { try { const d = lab(LabKit.make(stage, ro, ctl)); if (d) cleanup.push(d); } catch(err) { console.error(err); stage.innerHTML = `<div class="fallback">The model for this topic could not start.</div>`; } }
  else stage.innerHTML = `<div class="fallback">Model coming soon.</div>`;
  cleanup.push(() => LabKit.stopAll());
}

/* ---------- desktop shell (only inside the Codex app) ---------- */
let DESK_VERSION = "";
if (window.codexDesktop) {
  const D = window.codexDesktop;
  document.documentElement.classList.add("desktop", "os-" + D.platform);
  D.version().then(v => { DESK_VERSION = v; const el = document.querySelector("#verline .num"); if (el) el.textContent = "v" + v; });
  const bar = $("#upd");
  let hideT = null;
  D.onUpdate(s => {
    clearTimeout(hideT);
    const v = s.version ? esc(s.version) : "";
    let html = "", keep = true;
    if (s.status === "downloading") html = `<span class="dot"></span>Downloading Codex ${v}… <span class="num">${s.percent || 0}%</span>`;
    else if (s.status === "ready") html = `<span class="dot"></span>Codex ${v} is ready.<button type="button" class="btn good" id="upd-go">Install &amp; Relaunch</button><button type="button" class="btn-s" id="upd-x">Later</button>`;
    else if (s.status === "installing") html = `<span class="dot"></span>Installing Codex ${v}…`;
    else if (s.status === "installed") { html = `<span class="dot"></span>Updated to Codex ${v}.`; keep = false; }
    else if (s.status === "blocked") html = `<span class="dot"></span>macOS blocked the update. Codex ${v} is in your Downloads folder: drag it into Applications and replace the old copy.<button type="button" class="btn-s" id="upd-rev">Show in Finder</button><button type="button" class="btn-s" id="upd-x">Dismiss</button>`;
    else if (s.status === "error" && s.message) html = `<span class="dot err"></span>Update problem: ${esc(s.message)}<button type="button" class="btn-s" id="upd-x">Dismiss</button>`;
    bar.hidden = !html; bar.innerHTML = html;
    const go = $("#upd-go"); if (go) go.onclick = () => { go.disabled = true; D.installUpdate(); };
    const x = $("#upd-x"); if (x) x.onclick = () => { bar.hidden = true; };
    const rv = $("#upd-rev"); if (rv) rv.onclick = () => D.revealUpdate();
    if (!keep) hideT = setTimeout(() => bar.hidden = true, 6000);
  });
}

/* ---------- boot ---------- */
$("#brand").onclick = () => go({ view: "menu", topic: null });
// Codex always opens on the main menu (a link with #topic still opens that page directly).
const initial = fromHash() || { view: "menu" };
Object.assign(S, initial);
if (S.view === "math" && S.field !== "map" && !DB.fields[S.field]) S.field = "arithmetic";
if (S.field !== "map" && DB.fields[S.field]) S.subject = subjOf(S.field);
if (!SM[S.subject]) S.subject = "mathematics";
if (S.topic && !NODE[S.topic]) S.topic = null;
try { history.replaceState({ view: S.view, field: S.field, topic: S.topic }, ""); } catch(e){}
render();
})();
