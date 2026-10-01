/* ============ Labs: Geometry H (solids, surface area, volume, similar solids) ============ */
(function(){
const L = window.LABS;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const RAD = Math.PI / 180;
const f2 = v => { const s = (Math.round(v * 100) / 100).toFixed(2); return s === "-0.00" ? "0.00" : s.replace("-", "−"); };
const f1 = v => { const s = (Math.round(v * 10) / 10).toFixed(1); return s === "-0.0" ? "0.0" : s.replace("-", "−"); };
const showEl = (el, on) => { const w = el.closest ? (el.closest(".ctl") || el) : el; w.style.display = on ? "" : "none"; };
// simplified radical n = a²·b
function sqf(n){ let a = 1, b = n; for (let f = 2; f * f <= b; f++) while (b % (f * f) === 0) { b /= f * f; a *= f; } return [a, b]; }

/* ---------- 3-D engine: meshes, unfolding into nets, projection ---------- */
const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]], add=(a,b)=>[a[0]+b[0],a[1]+b[1],a[2]+b[2]], scl=(a,s)=>[a[0]*s,a[1]*s,a[2]*s];
const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2], cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const len=a=>Math.hypot(a[0],a[1],a[2]), nrm=a=>{const l=len(a)||1; return scl(a,1/l);};
function rotA(p,o,u,th){ const v=sub(p,o), c=Math.cos(th), s=Math.sin(th), cr=cross(u,v), dd=dot(u,v)*(1-c); return [o[0]+v[0]*c+cr[0]*s+u[0]*dd, o[1]+v[1]*c+cr[1]*s+u[1]*dd, o[2]+v[2]*c+cr[2]*s+u[2]*dd]; }
function newell(pts){ const n=[0,0,0]; for(let i=0;i<pts.length;i++){const a=pts[i], b=pts[(i+1)%pts.length]; n[0]+=(a[1]-b[1])*(a[2]+b[2]); n[1]+=(a[2]-b[2])*(a[0]+b[0]); n[2]+=(a[0]-b[0])*(a[1]+b[1]);} return n; }
const ekey=(a,b)=>a<b?a+"-"+b:b+"-"+a;
const mean=pts=>scl(pts.reduce((s,p)=>add(s,p),[0,0,0]),1/pts.length);
function finish(m){
  m.unreal = m.unreal || new Set();
  const C0=mean(m.V); m.center=C0;
  m.faces.forEach(f=>{ const pts=f.v.map(i=>m.V[i]); let n=newell(pts); if(dot(n,sub(mean(pts),C0))<0){ f.v.reverse(); n=scl(n,-1);} f.n=nrm(n); f.area=len(n)/2; f.kids=[]; });
  const E=new Map(); m.faces.forEach((f,fi)=>f.v.forEach((a,j)=>{ const b=f.v[(j+1)%f.v.length], key=ekey(a,b); if(!E.has(key)) E.set(key,{a,b,f:[],real:!m.unreal.has(key)}); E.get(key).f.push(fi); }));
  m.E=[...E.values()];
  m.vf=m.V.map(()=>[]); m.faces.forEach((f,fi)=>f.v.forEach(i=>m.vf[i].push(fi)));
  m.faces.forEach((f,fi)=>{ if(f.parent==null||f.parent<0) return; const p=m.faces[f.parent]; const sh=f.v.filter(i=>p.v.includes(i)); if(sh.length!==2) throw new Error("bad hinge "+fi); const a=m.V[sh[0]], u=nrm(sub(m.V[sh[1]],a)); f.hinge={o:a,u,th:Math.atan2(dot(u,cross(f.n,p.n)),dot(f.n,p.n))}; p.kids.push(fi); });
  const depth=fi=>{ let dd=0, f=m.faces[fi]; while(f.parent!=null&&f.parent>=0){ dd++; f=m.faces[f.parent]; } return dd; };
  m.order=m.faces.map((f,i)=>i).filter(i=>m.faces[i].hinge).sort((x,y)=>depth(y)-depth(x));
  m.sub=m.faces.map((f,i)=>{ const out=[]; const rec=j=>{ out.push(j); m.faces[j].kids.forEach(rec); }; rec(i); return out; });
  m.R=Math.max(...m.V.map(p=>len(sub(p,C0))));
  if(m.order.length===m.faces.length-1){ const P=unfold(m,1), all=P.flat(); m.netC=mean(all); m.netR=Math.max(...all.map(p=>len(sub(p,m.netC)))); }
  return m;
}
function unfold(m,s){ const P=m.faces.map(f=>f.v.map(i=>m.V[i].slice())); if(s<=0) return P; m.order.forEach(fi=>{ const h=m.faces[fi].hinge, th=h.th*s; m.sub[fi].forEach(j=>{ P[j]=P[j].map(p=>rotA(p,h.o,h.u,th)); }); }); return P; }
function ngon(n,R,rot=0){ return Array.from({length:n},(_,i)=>[R*Math.cos(rot+2*Math.PI*i/n),R*Math.sin(rot+2*Math.PI*i/n)]); }
const rect=(a,b)=>[[-a/2,-b/2],[a/2,-b/2],[a/2,b/2],[-a/2,b/2]];
function loft(poly,rings,o={}){
  const V=[], idx=[], n=poly.length;
  rings.forEach(r=>{ if(r.s===0){ idx.push([V.length]); V.push([r.dx||0,r.dy||0,r.z]); } else { idx.push(poly.map(([x,y])=>{ V.push([x*r.s+(r.dx||0),y*r.s+(r.dy||0),r.z]); return V.length-1; })); } });
  const pt=i=>idx[i].length===1, at=(i,j)=>pt(i)?idx[i][0]:idx[i][((j%n)+n)%n];
  const faces=[], unreal=new Set(), last=rings.length-1;
  if(!pt(0)) faces.push({v:idx[0].slice(),kind:"base",parent:-1});
  const L0=faces.length;
  for(let i=0;i<last;i++) for(let j=0;j<n;j++){ const v=[at(i,j),at(i,j+1),at(i+1,j+1),at(i+1,j)].filter((x,q,arr)=>arr.indexOf(x)===q); faces.push({v,kind:"lat",ring:i,j}); if(o.smooth) unreal.add(ekey(at(i,j),at(i+1,j))); if(o.smoothRings&&i>0) unreal.add(ekey(at(i,j),at(i,j+1))); }
  if(!pt(last)) faces.push({v:idx[last].slice(),kind:"top"});
  if(o.net&&rings.length===2){ for(let j=0;j<n;j++){ const f=faces[L0+j]; f.parent=(o.net==="star"||j===0)?0:(j<=Math.floor((n-1)/2)?L0+j-1:L0+(j+1)%n); } const t=faces[faces.length-1]; if(t.kind==="top") t.parent=L0; }
  return finish({V,faces,unreal,curved:!!o.smooth,idx});
}
function octa(a){
  let V=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(p=>scl(p,a/Math.SQRT2));
  const bits=[0,1,3,2,6,7,5,4];
  const fv=b=>[(b&1)?0:1,(b&2)?2:3,(b&4)?4:5];
  const nr=nrm([-1,-1,-1]), tg=[0,0,-1], ax=nrm(cross(nr,tg)), an=Math.acos(dot(nr,tg));
  V=V.map(p=>rotA(p,[0,0,0],ax,an)); const mz=Math.min(...V.map(p=>p[2])); V=V.map(p=>[p[0],p[1],p[2]-mz]);
  const faces=bits.map((b,i)=>({v:fv(b),kind:"lat",parent:i-1})); faces[0].kind="base";
  return finish({V,faces});
}
const ekeyOf = ekey;
function viewer(cam){ const cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw), cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  return p => { const x = p[0] - cam.c[0], y = p[1] - cam.c[1], z = p[2] - cam.c[2], y1 = x * sy + y * cy; return [x * cy - y * sy, y1 * sp + z * cp, -y1 * cp + z * sp]; }; }
function screener(cam){ return v => { const f = cam.D / (cam.D - v[2]); return { x: cam.ox + cam.S * v[0] * f, y: cam.oy - cam.S * v[1] * f, z: v[2] }; }; }
function camera(){ return { yaw: -0.6, pitch: 0.42, c: [0, 0, 0], D: 10, S: 40, ox: 0, oy: 0, touched: -1e9 }; }
// fit camera to a sphere of radius R about centre ctr inside the box (x0, y0, w, h)
function fit(cam, ctr, R, x0, y0, w, h, Rv){ cam.c = ctr; cam.D = 6 * R; cam.S = Math.max(4, Math.min(w / (2.45 * R), h / (2.45 * (Rv || R)))); cam.ox = x0 + w / 2; cam.oy = y0 + h / 2; }
// drag to orbit; returns isDragging()
function orbit(c, cam, pick){
  let st = null; c.cv.style.touchAction = "none"; c.cv.style.cursor = "grab";
  c.cv.addEventListener("pointerdown", e => { if (pick && pick(c.xy(e))) return; st = { x: e.clientX, y: e.clientY, yaw: cam.yaw, pitch: cam.pitch }; try { c.cv.setPointerCapture(e.pointerId); } catch (_) {} c.cv.style.cursor = "grabbing"; e.preventDefault(); });
  c.cv.addEventListener("pointermove", e => { if (!st) return; cam.yaw = st.yaw - (e.clientX - st.x) * 0.011; cam.pitch = clamp(st.pitch + (e.clientY - st.y) * 0.009, 0.04, 1.52); cam.touched = performance.now(); });
  const up = () => { st = null; c.cv.style.cursor = "grab"; };
  c.cv.addEventListener("pointerup", up); c.cv.addEventListener("pointercancel", up);
  return () => !!st;
}
function sway(k, cam, dt, dragging, amp = 0.38){ if (cam.yb == null) { cam.yb = cam.yaw; cam.ph = 0; }
  if (dragging() || performance.now() - cam.touched < 3500) { cam.yb = cam.yaw - amp * Math.sin(cam.ph); return; }
  if (!k.reduce) cam.ph += dt * 0.45; cam.yaw = cam.yb + amp * Math.sin(cam.ph); }
function spin(k, cam, dt, dragging, on = true){ if (on && !k.reduce && !dragging() && performance.now() - cam.touched > 3500) cam.yaw += dt * 0.32; }
function fillGroups(g, list){ const G = new Map(); list.forEach(([col, pts]) => { if (!G.has(col)) G.set(col, []); G.get(col).push(pts); });
  G.forEach((polys, col) => { g.beginPath(); polys.forEach(pts => { pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); }); g.fillStyle = col; g.fill(); }); }
function pathPts(g, pts){ g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); }
// draw a mesh (folded with hidden edges dashed, or partly unfolded with s > 0)
function drawMesh(k, c, m, cam, o = {}){
  const { C, alpha } = k, g = c.g, d = c.d, s = o.s || 0;
  const P = unfold(m, s), vw = viewer(cam), sc = screener(cam);
  const FV = P.map(pts => pts.map(vw));
  const facing = FV.map(pts => { const n = newell(pts), ce = mean(pts); return dot(n, [-ce[0], -ce[1], cam.D - ce[2]]) > 0; });
  const SP = FV.map(pts => pts.map(sc));
  const fill = (fi, a) => o.fill ? o.fill(m.faces[fi], fi, a) : alpha(C.violet, a);
  const ecol = o.edge || C.cyan, ew = o.ew || 1.8;
  const out = { SP, FV, P, facing, vw, sc, cen: fi => sc(vw(mean(P[fi]))) };
  if (s > 0.001) {
    fillGroups(g, SP.map((sp, fi) => [fill(fi, o.netA || .34), sp]));
    SP.forEach((sp, fi) => { const f = m.faces[fi];
      sp.forEach((p, j) => { const q = sp[(j + 1) % sp.length]; if (!m.unreal.has(ekey(f.v[j], f.v[(j + 1) % f.v.length]))) d.line(p.x, p.y, q.x, q.y, ecol, ew); });
    });
    if (o.verts) SP.forEach(sp => sp.forEach(p => d.circle(p.x, p.y, 3.2, C.amber)));
    return out;
  }
  const VS = m.V.map(p => sc(vw(p)));
  fillGroups(g, SP.map((sp, fi) => facing[fi] ? null : [fill(fi, o.backA ?? .10), sp]).filter(Boolean));
  m.E.forEach(e => { e._fr = e.f.some(fi => facing[fi]); e._sil = e.f.length === 2 && facing[e.f[0]] !== facing[e.f[1]];
    if (e.real && !e._fr && o.hidden !== false) { const a = VS[e.a], b = VS[e.b]; d.line(a.x, a.y, b.x, b.y, alpha(ecol, .45), 1.2, [4, 4]); } });
  if (o.mid) o.mid(out);
  fillGroups(g, SP.map((sp, fi) => facing[fi] ? [fill(fi, o.frontA ?? .22), sp] : null).filter(Boolean));
  m.E.forEach(e => { if ((e.real || e._sil) && e._fr) { const a = VS[e.a], b = VS[e.b]; d.line(a.x, a.y, b.x, b.y, ecol, ew); } });
  if (o.verts) m.V.forEach((p, i) => { const v = m.vf[i].some(fi => facing[fi]); if (v) { d.circle(VS[i].x, VS[i].y, 6.5, C.ink); d.circle(VS[i].x, VS[i].y, 4.8, C.amber); } else d.circle(VS[i].x, VS[i].y, 3.2, alpha(C.amber, .5)); });
  if (o.top) o.top(out);
  return out;
}
// cross-section of a convex mesh by the plane n·p = t (n unit)
function section(m, n, t){
  const pts = [], push = (p, src) => { if (!pts.some(q => len(sub(q.p, p)) < 1e-7)) pts.push({ p, src }); };
  m.V.forEach((p, i) => { if (Math.abs(dot(n, p) - t) < 1e-9) push(p, { v: i }); });
  m.E.forEach(e => { const A = m.V[e.a], B = m.V[e.b], da = dot(n, A) - t, db = dot(n, B) - t; if (da * db < 0) { const u = da / (da - db); push(add(A, scl(sub(B, A), u)), { e }); } });
  if (pts.length >= 3) { const ce = mean(pts.map(q => q.p)), e1 = nrm(sub(pts[0].p, ce)), e2 = cross(n, e1), an = q => Math.atan2(dot(sub(q.p, ce), e2), dot(sub(q.p, ce), e1)); pts.sort((a, b) => an(a) - an(b)); }
  return { pts: pts.map(q => q.p), src: pts.map(q => q.src) };
}
function polyName(pts){
  const m = pts.length; if (m < 3) return m === 0 ? "nothing" : m === 1 ? "a single point" : "a segment";
  const S = pts.map((p, i) => len(sub(pts[(i + 1) % m], p))), sc_ = Math.max(...S), eq = (a, b) => Math.abs(a - b) < 1e-6 * sc_;
  const dir = i => nrm(sub(pts[(i + 1) % m], pts[i]));
  const allEq = S.every(v => eq(v, S[0]));
  const right = i => Math.abs(dot(dir(i), dir((i + m - 1) % m))) < 1e-6;
  if (m === 3) { const nEq = [eq(S[0], S[1]), eq(S[1], S[2]), eq(S[2], S[0])].filter(Boolean).length; const r = [0, 1, 2].some(right);
    return allEq ? "equilateral triangle" : nEq ? (r ? "isosceles right triangle" : "isosceles triangle") : r ? "right triangle" : "scalene triangle"; }
  if (m === 4) { const par = i => len(cross(dir(i), dir(i + 2))) < 1e-6; const pp = (par(0) ? 1 : 0) + (par(1) ? 1 : 0); const rt = [0, 1, 2, 3].every(right);
    return allEq && rt ? "square" : rt ? "rectangle" : allEq ? "rhombus" : pp === 2 ? "parallelogram" : pp === 1 ? "trapezoid" : "quadrilateral"; }
  const nm = { 5: "pentagon", 6: "hexagon" }[m] || m + "-gon";
  const angEq = pts.every((p, i) => Math.abs(dot(dir(i), dir((i + m - 1) % m)) - dot(dir(0), dir(m - 1))) < 1e-6);
  return (allEq && angEq ? "regular " : "") + nm;
}
const polyArea = pts => len(newell(pts)) / 2;

/* ===================== g-solids ===================== */
L["g-solids"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const SQ3 = Math.sqrt(3);
  const B = {
    cube: () => loft(rect(2, 2), [{ z: 0, s: 1 }, { z: 2, s: 1 }], { net: "star" }),
    box: () => loft(rect(3, 2), [{ z: 0, s: 1 }, { z: 1.5, s: 1 }], { net: "star" }),
    tri: () => loft(ngon(3, 2 / SQ3, Math.PI / 2), [{ z: 0, s: 1 }, { z: 2.4, s: 1 }], { net: "star" }),
    pyr: () => loft(rect(2, 2), [{ z: 0, s: 1 }, { z: 2, s: 0 }], { net: "star" }),
    tet: () => loft(ngon(3, 2.4 / SQ3, Math.PI / 2), [{ z: 0, s: 1 }, { z: 2.4 * Math.sqrt(2 / 3), s: 0 }], { net: "star" }),
    oct: () => octa(2),
    cyl: () => loft(ngon(48, 1), [{ z: 0, s: 1 }, { z: 2, s: 1 }], { smooth: true, net: "chain" }),
    cone: () => loft(ngon(48, 1), [{ z: 0, s: 1 }, { z: 2, s: 0 }], { smooth: true, net: "chain" })
  };
  const NAME = { cube: "Cube", box: "Rectangular prism", tri: "Triangular prism", pyr: "Square pyramid", tet: "Regular tetrahedron", oct: "Regular octahedron", cyl: "Cylinder", cone: "Cone" };
  const FACES = { cube: "6 congruent squares", box: "6 rectangles in 3 congruent pairs", tri: "2 triangular bases, 3 rectangles", pyr: "1 square base, 4 triangles", tet: "4 equilateral triangles", oct: "8 equilateral triangles", cyl: "2 circular bases, 1 curved surface", cone: "1 circular base, 1 curved surface" };
  let kind = "cube", m = B.cube(), net = false, s = 0, tilt = 0, pos = 50, showCut = true;
  const cam = camera();
  const sel = k.select("Solid", Object.keys(NAME).map(x => [x, NAME[x]]), kind, v => { kind = v; m = B[v](); s = net ? 1 : 0; syncBtn(); });
  const sPos = k.slider(`<span class="c3">Slice</span>`, 0, 100, 1, pos, v => pos = v, v => v + "%");
  const sTilt = k.slider(`<span class="c3">Tilt</span>`, 0, 90, 0.5, tilt, v => tilt = v, v => f1(v) + "°");
  const bTilt = k.button("Diagonal tilt", () => { tilt = kind === "cone" ? Math.atan(2) / RAD : Math.atan(Math.SQRT2) / RAD; sTilt.set(tilt); sTilt.el.parentNode.querySelector(".val").textContent = f1(tilt) + "°"; if (kind !== "cone") { pos = 50; sPos.set(50); } }, "btn ghost");
  const cCut = k.check("Show slice", showCut, v => showCut = v);
  const bNet = k.button("Unfold", () => { net = !net; bNet.textContent = net ? "Fold" : "Unfold"; if (k.reduce) s = net ? 1 : 0; });
  function syncBtn(){ bTilt.textContent = kind === "cone" ? "Tilt = side slope" : "Diagonal tilt"; }
  k.hint("Drag to rotate");
  const dragging = orbit(c, cam);
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    s = net ? Math.min(1, s + dt / 1.6) : Math.max(0, s - dt / 1.6); const se = ease(s);
    spin(k, cam, dt, dragging);
    const pitch0 = cam.pitch; cam.pitch = lerp(pitch0, 1.22, se);
    const ctr = m.netC ? [lerp(m.center[0], m.netC[0], se), lerp(m.center[1], m.netC[1], se), lerp(m.center[2], m.netC[2], se)] : m.center;
    fit(cam, ctr, m.netC ? lerp(m.R, m.netR, se) : m.R, 8, 10, w - 16, h - 36);
    const nvec = [Math.sin(tilt * RAD) * Math.SQRT1_2, Math.sin(tilt * RAD) * Math.SQRT1_2, Math.cos(tilt * RAD)];
    const pr = m.V.map(p => dot(nvec, p)), tmin = Math.min(...pr), tmax = Math.max(...pr);
    const t = lerp(tmin, tmax, pos / 100);
    const sec = section(m, nvec, t), folded = se < 0.001, cut = showCut && folded;
    drawMesh(k, c, m, cam, { s: se, verts: !m.curved, fill: (f, fi, a) => alpha(C.violet, a),
      mid: cut ? o => {
        const c0 = add(m.center, scl(nvec, t - dot(nvec, m.center))), e1 = nrm(cross(nvec, Math.abs(nvec[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0])), e2 = cross(nvec, e1), H = 1.3 * m.R;
        const q = [[1, 1], [-1, 1], [-1, -1], [1, -1]].map(([a, b]) => o.sc(o.vw(add(c0, add(scl(e1, a * H), scl(e2, b * H))))));
        pathPts(g, q); g.fillStyle = alpha(C.pink, .07); g.fill(); g.strokeStyle = alpha(C.pink, .35); g.lineWidth = 1; g.stroke();
        if (sec.pts.length >= 3) { const sp = sec.pts.map(p => o.sc(o.vw(p))); pathPts(g, sp); g.fillStyle = alpha(C.pink, .55); g.fill(); g.strokeStyle = C.pink; g.lineWidth = 2.4; g.stroke(); }
        else sec.pts.forEach(p => { const z = o.sc(o.vw(p)); d.circle(z.x, z.y, 4, C.pink); });
      } : null });
    cam.pitch = pitch0;
    // ---- readout
    let big, rows = "", lm;
    if (!m.curved) {
      const V = m.V.length, E = m.E.length, Fc = m.faces.length;
      big = M(`<span class="c1">${V}</span> − <span class="c2">${E}</span> + <span class="c4">${Fc}</span> = <span class="c5">2</span>`);
      rows += `<div class="row">${M(`<span class="c1"><i>V</i> = ${V}</span>, <span class="c2"><i>E</i> = ${E}</span>, <span class="c4"><i>F</i> = ${Fc}</span>`)}<span class="lbl">${FACES[kind]}</span></div>`;
    } else {
      big = `<span class="c4">curved surface</span>`;
      rows += `<div class="row">${M(kind === "cyl" ? "<i>r</i> = 1, <i>h</i> = 2" : "<i>r</i> = 1, <i>h</i> = 2")}<span class="lbl">${FACES[kind]}: not a polyhedron, so V − E + F does not apply</span></div>`;
    }
    let secName = "", secA = null;
    const thr = sec.pts.length >= 3;
    if (!m.curved) { secName = polyName(sec.pts); if (thr) secA = polyArea(sec.pts); }
    else {
      const ring0 = new Set(m.idx[0]), ringT = new Set(m.idx[m.idx.length - 1]);
      const hitsBase = sec.src.some(q => q.e && ((ring0.has(q.e.a) && ring0.has(q.e.b)) || (ringT.has(q.e.a) && ringT.has(q.e.b) && m.idx[m.idx.length - 1].length > 1)));
      const alphaC = Math.atan(2) / RAD;
      if (!thr) secName = sec.pts.length ? "a single point" : "nothing";
      else if (tilt < 1e-6) { const rr = kind === "cyl" ? 1 : 1 - t / 2; secName = "circle"; secA = Math.PI * rr * rr; }
      else if (kind === "cyl") secName = tilt > 89.99 ? "rectangle" : hitsBase ? "part of an ellipse, closed by a straight cut across the base" : "ellipse";
      else { const apexOn = Math.abs(t - dot(nvec, [0, 0, 2])) < 1e-6;
        if (apexOn) secName = tilt > alphaC + 1e-6 ? "isosceles triangle" : "a single point";
        else if (Math.abs(tilt - alphaC) < 0.05) secName = "parabola, closed by a chord of the base";
        else if (tilt > alphaC) secName = "one branch of a hyperbola, closed by a chord of the base";
        else secName = hitsBase ? "part of an ellipse, closed by a chord of the base" : "ellipse"; }
    }
    if (folded && showCut) rows += `<div class="row"><span class="m c3">cross-section</span><span class="lbl">${secName}${secA != null ? `, area ${kind === "cyl" && tilt < 1e-6 ? "π ≈ " : "≈ "}${f2(secA)}` : ""} (tilt ${f1(tilt)}°)</span></div>`;
    if (!folded) {
      if (!m.curved) { const V = m.V.length, E = m.E.length, Fc = m.faces.length;
        lm = `<div class="landmark${se >= 1 ? " hit" : ""}"><div class="big">net: ${Fc} faces, ${Fc - 1} folds, ${E - Fc + 1} cut edges</div><div class="note">To unfold, ${Fc - 1} edges stay as folds and the other ${E - Fc + 1} are cut. Euler's formula says ${E - Fc + 1} = V − 1 = ${V - 1}: the cuts always join all ${V} vertices without a loop.</div></div>`; }
      else lm = kind === "cyl" ? `<div class="landmark${se >= 1 ? " hit" : ""}"><div class="big">rectangle 2πr by h, plus two circles</div><div class="note">The curved side unrolls into a rectangle 2π ≈ 6.28 long, the circumference of the base, and 2 high.</div></div>`
        : `<div class="landmark${se >= 1 ? " hit" : ""}"><div class="big">sector of radius ℓ = √5 ≈ 2.24, plus a circle</div><div class="note">The curved side unrolls into a sector whose arc is the base circumference 2π. Its central angle is 360° · r/ℓ = 360°/√5 ≈ ${f1(360 / Math.sqrt(5))}°.</div></div>`;
    } else if (!showCut) lm = `<div class="landmark"><div class="big">${NAME[kind]}</div><div class="note">Dashed edges are hidden behind the solid. Turn on the slice or unfold the net.</div></div>`;
    else if (!thr) lm = `<div class="landmark hit"><div class="big">the plane only touches the solid</div><div class="note">At this position the plane meets the solid in ${secName}, not a region. Move the slice inward.</div></div>`;
    else if (/hexagon/.test(secName)) lm = `<div class="landmark hit"><div class="big">a ${secName} from a ${NAME[kind].toLowerCase()}</div><div class="note">Each side of a cross-section lies in a different face. ${kind === "cube" ? "Perpendicular to a space diagonal through the centre, the plane cuts the midpoints of six edges and the hexagon is regular." : "Six faces are crossed, so the section has six sides."}</div></div>`;
    else if (/parabola|hyperbola|ellipse/.test(secName) || (m.curved && secName === "circle")) lm = `<div class="landmark${/parabola|hyperbola/.test(secName) ? " hit" : ""}"><div class="big">${secName.split(",")[0]}</div><div class="note">${kind === "cone" ? `The conic sections: a cut flatter than the cone's side (tilt below ${f1(Math.atan(2) / RAD)}°) gives an ellipse, parallel to the side a parabola, steeper a hyperbola.` : "A cut through a cylinder at a slant stretches the circle into an ellipse."}</div></div>`;
    else lm = `<div class="landmark"><div class="big">${secName}</div><div class="note">${tilt < 1e-6 ? (/pyramid|tetra/i.test(NAME[kind]) ? "A slice parallel to the base of a pyramid is similar to the base, smaller toward the apex." : "A slice parallel to a base of a prism is congruent to the base.") : "Tilting the plane changes how many faces it crosses, and so the number of sides."}</div></div>`;
    k.setRO(`<div><h2>${NAME[kind]}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${big}</div></div><div class="ro-rows">${rows}</div>${lm}
      <p class="narr">${m.curved ? "Try tilt 0°, then the side-slope button, then steeper." : "Try the diagonal tilt on the cube and slide from one corner to the other: triangle, hexagon, triangle."}</p>`);
  });
};

const FR = (t, b) => `<span class="fr"><span>${t}</span><span>${b}</span></span>`;
const radT = (co, b) => b === 1 ? String(co) : (co === 1 ? "" : co) + "√" + b;
const topBelow = (el, extra = 10) => (el ? el.offsetTop + el.offsetHeight + extra : 12);
function label(g, F, s, x, y, color, ink, size = 12){ g.save(); g.font = `600 ${size}px ${F.mono}`; g.textAlign = "center"; g.textBaseline = "middle"; g.lineJoin = "round"; g.lineWidth = 4; g.strokeStyle = ink; g.strokeText(s, x, y); g.fillStyle = color; g.fillText(s, x, y); g.restore(); }

/* ===================== g-surface-area ===================== */
L["g-surface-area"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const DEF = { prism: [5, 3, 4], cyl: [3, 0, 6], pyr: [6, 0, 4], cone: [3, 0, 4], sph: [3, 0, 0] };
  const NAME = { prism: "Right rectangular prism", cyl: "Right cylinder", pyr: "Regular square pyramid", cone: "Right cone", sph: "Sphere" };
  let kind = "pyr", [A, Bv, H] = DEF.pyr, net = false, s = 0, m = null;
  const cam = camera(); cam.pitch = 0.5;
  const sel = k.select("Solid", Object.keys(NAME).map(x => [x, NAME[x]]), kind, v => { kind = v; [A, Bv, H] = DEF[v]; sa.set(A); sb.set(Bv || 1); sh.set(H || 1); build(); sync(); });
  const sa = k.slider("<i>a</i>", 1, 10, 1, A, v => { A = v; build(); });
  const sb = k.slider("<i>w</i>", 1, 10, 1, 3, v => { Bv = v; build(); });
  const sh = k.slider(`<span class="c3"><i>h</i></span>`, 1, 10, 1, H, v => { H = v; build(); });
  const bNet = k.button("Unfold", () => { net = !net; bNet.textContent = net ? "Fold" : "Unfold"; if (k.reduce) s = net ? 1 : 0; });
  k.hint("Drag to rotate");
  const lab = (sl, html) => { sl.el.parentNode.querySelector("label").innerHTML = html; };
  function sync(){
    lab(sa, kind === "prism" ? "<i>ℓ</i>" : kind === "pyr" ? "<i>s</i>" : "<i>r</i>");
    lab(sb, "<i>w</i>"); lab(sh, "<i>h</i>");
    showEl(sb.el, kind === "prism"); showEl(sh.el, kind !== "sph"); bNet.style.display = kind === "sph" ? "none" : "";
  }
  function build(){
    if (kind === "prism") m = loft(rect(A, Bv), [{ z: 0, s: 1 }, { z: H, s: 1 }], { net: "star" });
    else if (kind === "pyr") m = loft(rect(A, A), [{ z: 0, s: 1 }, { z: H, s: 0 }], { net: "star" });
    else if (kind === "cyl") m = loft(ngon(48, A), [{ z: 0, s: 1 }, { z: H, s: 1 }], { smooth: true, net: "chain" });
    else if (kind === "cone") m = loft(ngon(48, A), [{ z: 0, s: 1 }, { z: H, s: 0 }], { smooth: true, net: "chain" });
    else m = loft(ngon(48, A), [{ z: 0, s: 1 }, { z: 2 * A, s: 1 }], { smooth: true });
  }
  build(); sync();
  const dragging = orbit(c, cam);
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    const sph = kind === "sph";
    s = net && !sph ? Math.min(1, s + dt / 1.6) : Math.max(0, s - dt / 1.6); const se = sph ? 0 : ease(s);
    spin(k, cam, dt, dragging);
    const pitch0 = cam.pitch; cam.pitch = lerp(pitch0, 1.25, se);
    const ctr = m.netC ? m.center.map((v, i) => lerp(v, m.netC[i], se)) : m.center;
    fit(cam, ctr, m.netC ? lerp(m.R, m.netR, se) : m.R, 8, 10, w - 16, h - 34);
    // exact values
    let Lh, Bh, Th, Ld, Bd, Td, slant = null, rows = "", lmBig, lmNote;
    const pi = Math.PI, mono = `600 13px ${F.mono}`;
    if (kind === "prism") { const p = 2 * (A + Bv); Ld = p * H; Bd = A * Bv; Td = Ld + 2 * Bd; Lh = `${p} · ${H} = ${Ld}`; Bh = `${A} · ${Bv} = ${Bd}`; Th = `${Ld} + 2 · ${Bd} = ${Td}`;
      lmBig = M(`<span class="c1"><i>T</i></span> = <span class="c2"><i>ph</i></span> + 2<span class="c3"><i>B</i></span>`); lmNote = `The four side rectangles form one long strip ${p} long (the perimeter) and ${H} high; the two ${A} by ${Bv} bases fold onto its ends.`; }
    else if (kind === "cyl") { Ld = 2 * pi * A * H; Bd = pi * A * A; Td = Ld + 2 * Bd; Lh = `2π · ${A} · ${H} = ${2 * A * H}π ≈ ${f1(Ld)}`; Bh = `π · ${A}<sup>2</sup> = ${A * A}π ≈ ${f1(Bd)}`; Th = `${2 * A * H + 2 * A * A}π ≈ ${f1(Td)}`;
      lmBig = M(`<span class="c2">2π<i>r</i> × <i>h</i></span>`); lmNote = `The curved side unrolls into a rectangle whose length is the circumference 2π · ${A} ≈ ${f1(2 * pi * A)} and whose height is ${H}.`; }
    else if (kind === "pyr") { const n = 4 * H * H + A * A, [a, b] = sqf(n); slant = Math.sqrt(n) / 2;
      const lH = a % 2 === 0 ? radT(a / 2, b) : b === 1 ? FR(a, 2) : FR(radT(a, b), 2);
      Ld = 2 * A * slant; Bd = A * A; Td = Ld + Bd;
      Lh = `½ · ${4 * A} · <span class="c4"><i>ℓ</i></span> = ${radT(A * a, b)}${b > 1 ? ` ≈ ${f1(Ld)}` : ""}`; Bh = `${A}<sup>2</sup> = ${Bd}`; Th = b === 1 ? `${Bd} + ${A * a} = ${Td}` : `${Bd} + ${radT(A * a, b)} ≈ ${f1(Td)}`;
      rows += `<div class="row">${M(`<span class="c4"><i>ℓ</i></span> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">${H}<sup>2</sup> + ${f1(A / 2).replace(".0", "")}<sup>2</sup></span> = <span class="c4">${lH}</span>`)}<span class="lbl">slant height: height and apothem ${f1(A / 2).replace(".0", "")} are the legs${b > 1 || a % 2 ? ` (≈ ${f2(slant)})` : ""}</span></div>`;
      lmBig = M(`<span class="c4"><i>ℓ</i></span><sup>2</sup> = <span class="c3"><i>h</i></span><sup>2</sup> + <i>a</i><sup>2</sup>`); lmNote = `Each side triangle has base ${A} and height ℓ, not h. The slant height is the hypotenuse of the right triangle inside the pyramid (dashed).`; }
    else if (kind === "cone") { const n = A * A + H * H, [a, b] = sqf(n); slant = Math.sqrt(n);
      Ld = pi * A * slant; Bd = pi * A * A; Td = Ld + Bd;
      Lh = `π · ${A} · <span class="c4"><i>ℓ</i></span> = ${radT(A * a, b)}π ≈ ${f1(Ld)}`; Bh = `π · ${A}<sup>2</sup> = ${A * A}π ≈ ${f1(Bd)}`; Th = b === 1 ? `${A * A + A * a}π ≈ ${f1(Td)}` : `${A * A}π + ${radT(A * a, b)}π ≈ ${f1(Td)}`;
      rows += `<div class="row">${M(`<span class="c4"><i>ℓ</i></span> = √<span style="display:inline-block;border-top:.07em solid;line-height:1.15;padding:0 .04em">${H}<sup>2</sup> + ${A}<sup>2</sup></span> = <span class="c4">${radT(a, b)}</span>`)}<span class="lbl">slant height${b > 1 ? ` ≈ ${f2(slant)}` : ""}</span></div>`;
      lmBig = M(`sector angle = 360° · <span class="fr"><span><i>r</i></span><span><i>ℓ</i></span></span> ≈ ${f1(360 * A / slant)}°`); lmNote = `The side unrolls into a sector of radius ℓ whose arc is the base circumference 2π · ${A}. Its area is ½ · ℓ · 2πr = πrℓ.`; }
    else { Td = 4 * pi * A * A; Th = `4π · ${A}<sup>2</sup> = ${4 * A * A}π ≈ ${f1(Td)}`;
      lmBig = M(`4π<i>r</i><sup>2</sup> = <span class="c2">2π<i>r</i> · 2<i>r</i></span>`); lmNote = `Archimedes: the sphere's area equals the lateral area of the cylinder that just encloses it (radius ${A}, height ${2 * A}). It is also four times the area of a great circle, π · ${A}<sup>2</sup>.`; }
    // per-face labels (net)
    const faceTxt = f => {
      if (kind === "prism") { if (f.kind !== "lat") return String(A * Bv); const e = f.v.map(i => m.V[i]); const wd = Math.max(...e.map(p => p[0])) - Math.min(...e.map(p => p[0])); return String((wd > 1e-6 ? A : Bv) * H); }
      if (kind === "pyr") { if (f.kind !== "lat") return String(A * A); return f1(A * slant / 2).replace(".0", ""); }
      return null;
    };
    const fillF = (f, fi, a) => f.kind === "lat" ? alpha(C.cyan, a * 1.1) : alpha(C.pink, a * 1.5);
    const o = drawMesh(k, c, m, cam, { s: se, fill: sph ? (f, fi, a) => alpha(C.cyan, a * .45) : fillF, edge: alpha(C.text, .7), ew: 1.5, frontA: sph ? .1 : .24,
      mid: sph ? oo => {
        const ce = oo.sc(oo.vw([0, 0, A])), rp = cam.S * A * cam.D / (cam.D - oo.vw([0, 0, A])[2]);
        const gr = g.createRadialGradient(ce.x - rp * .35, ce.y - rp * .4, rp * .1, ce.x, ce.y, rp); gr.addColorStop(0, alpha(C.amber, .55)); gr.addColorStop(1, alpha(C.amber, .12));
        d.circle(ce.x, ce.y, rp, gr, C.amber, 2);
        const eq = ngon(64, A).map(([x, y]) => oo.sc(oo.vw([x, y, A]))); pathPts(g, eq); g.strokeStyle = alpha(C.amber, .7); g.lineWidth = 1.2; g.setLineDash([4, 4]); g.stroke(); g.setLineDash([]);
      } : null,
      top: (kind === "pyr" || kind === "cone") ? oo => {
        // slant height on the lateral face nearest the viewer
        const apex = [0, 0, H]; let best = null, bz = -1e9;
        const cand = kind === "pyr" ? [[A / 2, 0], [0, A / 2], [-A / 2, 0], [0, -A / 2]] : ngon(24, A);
        cand.forEach(([x, y]) => { const z = oo.vw([x, y, 0])[2]; if (z > bz) { bz = z; best = [x, y, 0]; } });
        const P0 = oo.sc(oo.vw(apex)), P1 = oo.sc(oo.vw(best)), P2 = oo.sc(oo.vw([0, 0, 0]));
        d.line(P0.x, P0.y, P2.x, P2.y, alpha(C.pink, .9), 1.6, [5, 4]); d.line(P2.x, P2.y, P1.x, P1.y, alpha(C.text, .7), 1.4, [5, 4]);
        d.line(P0.x, P0.y, P1.x, P1.y, C.violet, 3);
        label(g, F, "ℓ", (P0.x + P1.x) / 2 + 10, (P0.y + P1.y) / 2, C.violet, C.ink, 14); label(g, F, "h", (P0.x + P2.x) / 2 - 10, (P0.y + P2.y) / 2, C.pink, C.ink, 13);
        label(g, F, kind === "pyr" ? "a" : "r", (P1.x + P2.x) / 2, (P1.y + P2.y) / 2 + 10, C.text, C.ink, 13);
      } : null });
    cam.pitch = pitch0;
    if (se > 0.6) { g.save(); g.globalAlpha = (se - 0.6) / 0.4;
      if (kind === "cyl" || kind === "cone") { const lat = m.faces.map((f, i) => i).filter(i => m.faces[i].kind === "lat");
        const pts = lat.map(i => mean(o.P[i])), cL = o.sc(o.vw(mean(pts)));
        label(g, F, `${kind === "cyl" ? 2 * A * H : radT(A * sqf(A * A + H * H)[0], sqf(A * A + H * H)[1])}π`, cL.x, cL.y, C.text, C.ink, 13);
        m.faces.forEach((f, i) => { if (f.kind !== "lat") { const q = o.cen(i); label(g, F, `${A * A}π`, q.x, q.y, C.text, C.ink, 13); } }); }
      else m.faces.forEach((f, i) => { const t = faceTxt(f); if (t) { const q = o.cen(i); label(g, F, t, q.x, q.y, C.text, C.ink, 13); } });
      g.restore(); }
    if (!sph) rows += `<div class="row">${M(`<span class="c2"><i>L</i></span> = ${Lh}`)}<span class="lbl">lateral area${kind === "pyr" ? " (½pℓ)" : kind === "cone" ? " (πrℓ)" : kind === "cyl" ? " (2πrh)" : " (ph)"}</span></div>
      <div class="row">${M(`<span class="c3"><i>B</i></span> = ${Bh}`)}<span class="lbl">${kind === "prism" || kind === "cyl" ? "each of 2 bases" : "one base"}</span></div>`;
    k.setRO(`<div><h2>${NAME[kind]}</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`<span class="c1"><i>${sph ? "S" : "T"}</i> = ${Th}</span>`)}</div></div>
      <div class="ro-rows">${rows}</div><div class="landmark${se >= 1 || sph ? " hit" : ""}"><div class="big">${lmBig}</div><div class="note">${lmNote}</div></div>
      <p class="narr">${sph ? "A sphere has no net: it cannot be flattened without stretching." : "Unfold the net: each piece is labelled with its area, in square units."}</p>`);
  });
};

/* ===================== g-volume ===================== */
L["g-volume"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  let mode = "cav", base = "sq", lean = 60, wavy = false, sy = 40, sy2 = 50, cache = null;
  const cam = camera(); cam.yaw = -0.35; cam.pitch = 0.38;
  const modesEl = k.modes([["cav", "Cavalieri"], ["third", "One third"], ["sph", "Sphere"]], mode, v => { mode = v; sync(); });
  const sBase = k.select(`<span class="c2">Base</span>`, [["sq", "Square"], ["ci", "Circle"]], base, v => { base = v; cache = null; st.reset(); });
  const sLean = k.slider("Lean", 0, 100, 1, lean, v => { lean = v; cache = null; }, v => v + "%");
  const cW = k.check("Wavy", wavy, v => { wavy = v; cache = null; });
  const sY = k.slider(`<span class="c4">Slice <i>y</i></span>`, 0, 100, 1, sy, v => sy = v, v => v + "%");
  const sY2 = k.slider(`<span class="c4">Slice <i>y</i></span>`, 0, 100, 1, sy2, v => sy2 = v, v => f2(v / 100) + "r");
  let pourA = 1;
  const st = k.stepper(() => 3, kk => { pourA = kk > 0 && !k.reduce ? 0 : 1; }, { ms: 1900 });
  const stBtns = [...k.ctl.querySelectorAll("button")].slice(-3);
  k.hint("Drag to rotate");
  function sync(){ showEl(sBase.el, mode !== "sph"); showEl(sLean.el, mode === "cav"); showEl(cW, mode === "cav"); showEl(sY.el, mode === "cav"); showEl(sY2.el, mode === "sph"); stBtns.forEach(b => b.style.display = mode === "third" ? "" : "none"); }
  sync();
  const dragging = orbit(c, cam);
  const polyFor = () => base === "sq" ? rect(2, 2) : ngon(36, 1);
  const HH = 3, N = 12;
  function slabs(){
    if (cache) return cache;
    const pl = polyFor(), sm = base !== "sq", out = [];
    for (const side of [-1, 1]) for (let i = 0; i < N; i++) {
      const z0 = HH * i / N, z1 = HH * (i + 1) / N, zc = (z0 + z1) / 2;
      const off = side < 0 ? 0 : (wavy ? 0.9 * Math.sin(zc / HH * 2 * Math.PI) : 1.4 * zc / HH) * lean / 100;
      const x = side * 1.9 + off;
      out.push({ side, i, z0, z1, m: loft(pl, [{ z: z0, s: 1, dx: x }, { z: z1, s: 1, dx: x }], { smooth: sm }) });
    }
    return (cache = out);
  }
  k.loop(dt => {
    c.begin(); const { w, h } = c; const top = topBelow(modesEl);
    sway(k, cam, dt, dragging);
    const bbx = (mm, f) => { const xs = mm.V.map(p => screener(cam)(viewer(cam)(p)).x); return f(...xs); };
    const box = [8, top, w - 16, h - top - 28];
    if (mode === "cav") {
      fit(cam, [0, 0, HH / 2], 4.1, ...box, 2.3);
      const S = slabs(), yv = HH * sy / 100;
      const vw = viewer(cam);
      const order = [-1, 1].sort((a, b) => vw([a * 1.9, 0, HH / 2])[2] - vw([b * 1.9, 0, HH / 2])[2]);
      order.forEach(side => S.filter(q => q.side === side).forEach(q => {
        const hot = yv >= q.z0 && yv < q.z1 || (sy === 100 && q.i === N - 1);
        drawMesh(k, c, q.m, cam, { hidden: false, edge: hot ? C.violet : alpha(C.amber, .75), ew: hot ? 2 : 1.1, fill: (f, fi, a) => hot ? alpha(C.violet, a * 3) : alpha(C.amber, a * 1.2) });
        if (q.i === 0) { const pts = q.m.faces[0].v.map(i => screener(cam)(vw(q.m.V[i]))); pathPts(g, pts); g.strokeStyle = C.cyan; g.lineWidth = 2.5; g.stroke(); }
      }));
      // height marker beside the left stack
      const sc = screener(cam), xl = Math.min(...S.filter(q => q.side < 0).map(q => bbx(q.m, Math.min))) - 14, q0 = sc(vw([-1.9, 0, 0])), q1 = sc(vw([-1.9, 0, HH]));
      d.line(xl, q0.y, xl, q1.y, C.pink, 2); d.line(xl - 5, q0.y, xl + 5, q0.y, C.pink, 2); d.line(xl - 5, q1.y, xl + 5, q1.y, C.pink, 2);
      label(g, F, "h = 3", xl - 22, (q0.y + q1.y) / 2, C.pink, C.ink, 12);
      const Bh = base === "sq" ? "2 · 2 = 4" : "π · 1<sup>2</sup> = π", Vh = base === "sq" ? "4 · 3 = 12" : "π · 3 = 3π ≈ 9.42";
      k.setRO(`<div><h2>Cavalieri's Principle</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<span class="c1"><i>V</i></span> = <span class="c2"><i>B</i></span><span class="c3"><i>h</i></span> = <span class="c1">${Vh}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<span class="c2"><i>B</i></span> = ${Bh}`)}<span class="lbl">every slice of both stacks has this area</span></div>
        <div class="row">${M(`<span class="c3"><i>h</i></span> = 3`)}<span class="lbl">measured straight up, the same for both</span></div>
        <div class="row">${M(`<span class="c4"><i>A</i>(${f2(yv)})</span> = ${base === "sq" ? "4" : "π"}`)}<span class="lbl">the violet slice at height y, left and right</span></div></div>
        <div class="landmark${lean ? " hit" : ""}"><div class="big">${lean ? "same slices, same volume" : "a right " + (base === "sq" ? "prism" : "cylinder")}</div><div class="note">${lean ? `Pushing the ${base === "sq" ? "cards" : "coins"} ${wavy ? "into a wave" : "into a slant"} moves each slice sideways without changing its area, so the volume stays Bh. For an oblique solid, h is the perpendicular height, not the slanted side.` : "Drag Lean to shear the right-hand stack. Its volume will not change."}</div></div>
        <p class="narr">Move the slice: at every height the two cross-sections are congruent.</p>`);
      return;
    }
    if (mode === "third") {
      if (pourA < 1) pourA = Math.min(1, pourA + dt / 1.2);
      fit(cam, [0, 0, HH / 2], 3.6, ...box, 2.3);
      const pl = polyFor(), sm = base !== "sq", kk = st.k;
      const poured = kk === 0 ? 0 : kk - 1 + pourA;
      const fPyr = kk === 0 ? 1 : pourA < 1 ? 1 - pourA : kk < 3 ? 1 : 0;
      const pyr = loft(pl, [{ z: 0, s: 1, dx: -1.8 }, { z: HH, s: 0, dx: -1.8 }], { smooth: sm });
      const pri = loft(pl, [{ z: 0, s: 1, dx: 1.8 }, { z: HH, s: 1, dx: 1.8 }], { smooth: sm });
      const yl = HH * (1 - Math.cbrt(Math.max(0, 1 - fPyr)));
      const liqP = fPyr > 0.001 ? loft(pl, [{ z: 0, s: 1, dx: -1.8 }, { z: yl, s: 1 - yl / HH, dx: -1.8 }].map(r => r.s < 1e-4 ? { z: r.z, s: 0, dx: -1.8 } : r), { smooth: sm }) : null;
      const zl = HH * poured / 3;
      const liqR = poured > 0.001 ? loft(pl, [{ z: 0, s: 1, dx: 1.8 }, { z: zl, s: 1, dx: 1.8 }], { smooth: sm }) : null;
      const vw = viewer(cam), sc = screener(cam);
      const liq = lm => lm && drawMesh(k, c, lm, cam, { hidden: false, edge: alpha(C.amber, .9), ew: 1.2, fill: (f, fi, a) => alpha(C.amber, a * 2.6) });
      const order = [[pyr, liqP], [pri, liqR]].sort((a, b) => vw(a[0].center)[2] - vw(b[0].center)[2]);
      order.forEach(([cont, lq]) => {
        drawMesh(k, c, cont, cam, { edge: alpha(C.text, .75), ew: 1.4, frontA: .06, backA: .04, fill: (f, fi, a) => alpha(C.text, a), mid: () => liq(lq) });
        const bpts = cont.faces[0].v.map(i => sc(vw(cont.V[i]))); pathPts(g, bpts); g.strokeStyle = C.cyan; g.lineWidth = 2.5; g.stroke();
      });
      if (pourA < 1 && kk > 0) { const a = sc(vw([-1.8, 0, HH + 0.1])), b = sc(vw([1.8, 0, HH + 0.05])); g.save(); g.strokeStyle = alpha(C.amber, .9); g.lineWidth = 3; g.beginPath(); g.moveTo(a.x, a.y); g.quadraticCurveTo((a.x + b.x) / 2, Math.min(a.y, b.y) - 50, b.x, b.y); g.stroke(); g.restore(); }
      const xr = bbx(pri, Math.max) + 14, p0 = sc(vw([1.8, 0, 0])), p1 = sc(vw([1.8, 0, HH])); d.line(xr, p0.y, xr, p1.y, C.pink, 2); d.line(xr - 5, p0.y, xr + 5, p0.y, C.pink, 2); d.line(xr - 5, p1.y, xr + 5, p1.y, C.pink, 2); label(g, F, "h", xr + 11, (p0.y + p1.y) / 2, C.pink, C.ink, 13);
      const done = kk === 3 && pourA >= 1;
      const Bh = base === "sq" ? "4" : "π", Vp = base === "sq" ? "12" : "3π", Vy = base === "sq" ? "4" : "π";
      const nm = base === "sq" ? ["pyramid", "prism"] : ["cone", "cylinder"];
      k.setRO(`<div><h2>${nm[0]} into ${nm[1]}</h2><div class="ro-big" style="margin-top:8px;font-size:24px">${M(`<span class="c1"><i>V</i></span><sub>${nm[0]}</sub> = <span class="fr"><span>1</span><span>3</span></span><span class="c2"><i>B</i></span><span class="c3"><i>h</i></span> = <span class="c1">${Vy}</span>`)}</div></div>
        <div class="ro-rows"><div class="row">${M(`<span class="c2"><i>B</i></span> = ${Bh}, &nbsp;<span class="c3"><i>h</i></span> = 3`)}<span class="lbl">same base and height for both solids</span></div>
        <div class="row">${M(`<span class="c1"><i>V</i></span><sub>${nm[1]}</sub> = <i>Bh</i> = ${Vp}`)}<span class="lbl">the ${nm[1]}'s capacity</span></div>
        <div class="row">${M(`${Math.min(3, Math.floor(poured + 1e-9))} of 3`)}<span class="lbl">pours so far; level ${f2(zl)} of 3</span></div></div>
        <div class="landmark${done ? " hit" : ""}"><div class="big">${done ? `3 ${nm[0]}s = 1 ${nm[1]}` : "press Play or Step to pour"}</div><div class="note">${done ? `Three full ${nm[0]}s exactly fill the ${nm[1]} with the same base and height, so a ${nm[0]} holds one third of Bh.` : `Each pour empties one ${nm[0]} of liquid into the ${nm[1]} and raises its level by exactly one third of the height.`}</div></div>
        <p class="narr">Switch the base to compare a cone with a cylinder.</p>`);
      return;
    }
    // sphere mode: hemisphere vs cylinder minus cone, radius 1.2
    const r = 1.25, xs = 1.75, yv = r * sy2 / 100;
    fit(cam, [0, 0, r / 2], 3.2, ...box, 1.45);
    const rings = []; for (let i = 0; i <= 14; i++) { const z = r * Math.sin(i / 14 * Math.PI / 2), sR = Math.cos(i / 14 * Math.PI / 2); rings.push({ z, s: i === 14 ? 0 : sR, dx: -xs }); }
    const hemi = loft(ngon(40, r), rings, { smooth: true, smoothRings: true });
    const cyl = loft(ngon(40, r), [{ z: 0, s: 1, dx: xs }, { z: r, s: 1, dx: xs }], { smooth: true });
    const cone = loft(ngon(40, r), [{ z: 0, s: 0, dx: xs }, { z: r, s: 1, dx: xs }], { smooth: true });
    const vw = viewer(cam), sc = screener(cam);
    const ring = (cx, rad, z) => ngon(64, Math.max(rad, 1e-4)).map(([x, y]) => sc(vw([x + cx, y, z])));
    const discL = () => { const pts = ring(-xs, Math.sqrt(Math.max(0, r * r - yv * yv)), yv); pathPts(g, pts); g.fillStyle = alpha(C.violet, .7); g.fill(); g.strokeStyle = C.violet; g.lineWidth = 2; g.stroke(); };
    const annR = () => { const o = ring(xs, r, yv), i = ring(xs, yv, yv).reverse(); g.beginPath(); o.forEach((p, j) => j ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); i.forEach((p, j) => j ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.closePath(); g.fillStyle = alpha(C.violet, .7); g.fill("evenodd"); g.strokeStyle = C.violet; g.lineWidth = 2; g.stroke(); };
    const items = [[hemi, () => drawMesh(k, c, hemi, cam, { edge: alpha(C.amber, .9), ew: 1.4, backA: .06, frontA: .16, fill: (f, fi, a) => alpha(C.amber, a), mid: discL })],
      [cyl, () => drawMesh(k, c, cyl, cam, { edge: alpha(C.amber, .9), ew: 1.4, backA: .05, frontA: .12, fill: (f, fi, a) => alpha(C.amber, a), mid: () => { drawMesh(k, c, cone, cam, { edge: alpha(C.text, .55), ew: 1.1, hidden: false, backA: .05, frontA: .08, fill: (f, fi, a) => alpha(C.text, a) }); annR(); } })]];
    items.sort((a, b) => vw(a[0].center)[2] - vw(b[0].center)[2]).forEach(q => q[1]());
    const xl = Math.min(...hemi.V.map(p => sc(vw(p)).x)) - 12, p0 = sc(vw([-xs, 0, 0])), p1 = sc(vw([-xs, 0, yv])); d.line(xl, p0.y, xl, p1.y, C.pink, 2); d.line(xl - 5, p0.y, xl + 5, p0.y, C.pink, 2); d.line(xl - 5, p1.y, xl + 5, p1.y, C.pink, 2); if (yv > 0.15) label(g, F, "y", xl - 11, (p0.y + p1.y) / 2, C.pink, C.ink, 13);
    const y2 = (sy2 / 100) ** 2, A = 1 - y2;
    k.setRO(`<div><h2>Hemisphere vs cylinder minus cone</h2><div class="ro-big" style="margin-top:8px;font-size:22px">${M(`<span class="c4">π(<i>r</i><sup>2</sup> − <i>y</i><sup>2</sup>)</span> = <span class="c4">π<i>r</i><sup>2</sup> − π<i>y</i><sup>2</sup></span>`)}</div></div>
      <div class="ro-rows"><div class="row">${M(`<i>y</i> = ${f2(sy2 / 100)}<i>r</i>`)}<span class="lbl">height of the slice above the bases</span></div>
      <div class="row">${M(`<span class="c4">π(1 − ${f2(y2)})<i>r</i><sup>2</sup> = ${f2(A)}π<i>r</i><sup>2</sup></span>`)}<span class="lbl">hemisphere disc of radius √(r² − y²) = annulus between radius y and r</span></div>
      <div class="row">${M(`π<i>r</i><sup>3</sup> − <span class="fr"><span>1</span><span>3</span></span>π<i>r</i><sup>3</sup> = <span class="c1"><span class="fr"><span>2</span><span>3</span></span>π<i>r</i><sup>3</sup></span>`)}<span class="lbl">cylinder minus cone, so also the hemisphere</span></div></div>
      <div class="landmark hit"><div class="big">${M(`<span class="c1"><i>V</i></span><sub>sphere</sub> = 2 · <span class="fr"><span>2</span><span>3</span></span>π<i>r</i><sup>3</sup> = <span class="c1"><span class="fr"><span>4</span><span>3</span></span>π<i>r</i><sup>3</sup></span>`)}</div><div class="note">At every height the violet disc and the violet ring have equal areas, so by Cavalieri's Principle the hemisphere and the hollowed cylinder have equal volumes.${sy2 === 0 ? " At y = 0 the cone has no width: both slices are the full πr²." : sy2 === 100 ? " At y = r both slices shrink to nothing." : ""}</div></div>
      <p class="narr">Slide y from 0 to r and watch the two slice areas stay equal.</p>`);
  });
};

/* ===================== g-similar-solids ===================== */
L["g-similar-solids"] = k => {
  const { C, F, M, alpha } = k; const c = k.canvas(); const d = c.d, g = c.g;
  const SH = {
    blk: { name: "L-block of unit cubes", vox: [[0,0,0],[1,0,0],[2,0,0],[0,1,0],[0,0,1]] },
    ani: { name: "Animal", vox: [[0,0,0],[3,0,0],[0,0,1],[1,0,1],[2,0,1],[3,0,1],[3,0,2],[4,0,2]] },
    beam: { name: "Beam", vox: [[0,0,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0]] }
  };
  const KS = [[1, 2], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]];
  let shp = "blk", ki = 2, Sc = null, scene = null;
  const cam = camera(); cam.pitch = 0.55; cam.yaw = -0.7;
  k.select("Solid", Object.keys(SH).map(x => [x, SH[x].name]), shp, v => { shp = v; scene = null; });
  const sk = k.slider(`<span class="c1"><i>k</i></span>`, 0, KS.length - 1, 1, ki, v => { ki = v; scene = null; }, v => KS[v][1] === 1 ? String(KS[v][0]) : "½");
  k.hint("Drag to rotate");
  const DIRS = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
  const QUAD = { "1,0,0": [[1,0,0],[1,1,0],[1,1,1],[1,0,1]], "-1,0,0": [[0,0,0],[0,0,1],[0,1,1],[0,1,0]], "0,1,0": [[0,1,0],[0,1,1],[1,1,1],[1,1,0]], "0,-1,0": [[0,0,0],[1,0,0],[1,0,1],[0,0,1]], "0,0,1": [[0,0,1],[1,0,1],[1,1,1],[0,1,1]], "0,0,-1": [[0,0,0],[0,1,0],[1,1,0],[1,0,0]] };
  // unit cells of a voxel solid scaled by n cells per original voxel, cell size u, placed at offset ox
  function cells(vox, n, u, ox){
    const set = new Set(), list = [];
    vox.forEach(([x, y, z]) => { for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) for (let l = 0; l < n; l++) { const a = x * n + i, b = y * n + j, cc = z * n + l; set.add(a + "," + b + "," + cc); list.push([a, b, cc]); } });
    const out = [];
    list.forEach(([a, b, cc]) => { const faces = DIRS.filter(([p, q, r]) => !set.has((a + p) + "," + (b + q) + "," + (cc + r))); if (faces.length) out.push({ o: [ox + a * u, b * u, cc * u], u, faces }); });
    return { cells: out, ext: out.reduce((s, q) => s + q.faces.length, 0) };
  }
  function build(){
    const vox = SH[shp].vox, [kn, kd] = KS[ki], kk = kn / kd;
    const W0 = Math.max(...vox.map(v => v[0])) + 1;
    const orig = cells(vox, 1, 1, 0);
    const n = kd === 1 ? kn : 1, u = kd === 1 ? 1 : kk;
    const gap = 1.5, img = cells(vox, n, u, W0 + gap);
    const all = orig.cells.map(q => ({ ...q, orig: true })).concat(img.cells.map(q => ({ ...q, orig: false })));
    const pts = all.map(q => add(q.o, [q.u / 2, q.u / 2, q.u / 2]));
    const lo = [0, 1, 2].map(i => Math.min(...all.map(q => q.o[i]))), hi = [0, 1, 2].map(i => Math.max(...all.map(q => q.o[i] + q.u)));
    const ctr = lo.map((v, i) => (v + hi[i]) / 2), R = len(sub(hi, lo)) / 2;
    const H0 = Math.max(...vox.map(v => v[2])) + 1;
    scene = { all, ctr, R, S0: orig.ext, V0: vox.length, H0, kn, kd, kk };
    void pts;
  }
  const dragging = orbit(c, cam);
  const rq = (n, dd) => { const gg = k.gcd(n, dd); n /= gg; dd /= gg; return dd === 1 ? String(n) : FR(n, dd); };
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    if (!scene) build();
    sway(k, cam, dt, dragging);
    const wide = w > h * 1.15;
    const b3 = wide ? [8, 10, w * 0.6 - 12, h - 34] : [8, 10, w - 16, h * 0.6 - 16];
    const bc = wide ? [w * 0.6 + 8, 24, w * 0.4 - 22, h - 70] : [16, h * 0.6 + 6, w - 40, h * 0.4 - 58];
    cam.D = 1e6; const S_target = Math.min(b3[2], b3[3]) / (2.2 * scene.R);
    Sc = Sc == null ? S_target : lerp(Sc, S_target, Math.min(1, dt * 6));
    cam.c = scene.ctr; cam.S = Sc; cam.ox = b3[0] + b3[2] / 2; cam.oy = b3[1] + b3[3] / 2;
    const vw = viewer(cam), sc = screener(cam);
    const viewDep = dir => vw(add(cam.c, dir))[2];
    const facingDirs = DIRS.map(dv => viewDep(dv) > 1e-9);
    const shade = { "0,0,1": 1, "1,0,0": .72, "-1,0,0": .72, "0,1,0": .55, "0,-1,0": .55, "0,0,-1": .4 };
    const list = scene.all.map(q => ({ q, z: vw(add(q.o, [q.u / 2, q.u / 2, q.u / 2]))[2] })).sort((a, b) => a.z - b.z);
    const lw = Math.max(0.6, Math.min(1.2, Sc / 30));
    list.forEach(({ q }) => q.faces.forEach(dv => { const di = DIRS.indexOf(dv); if (!facingDirs[di]) return; const key = dv.join(",");
      const pts = QUAD[key].map(p => sc(vw(add(q.o, scl(p, q.u))))); pathPts(g, pts); g.fillStyle = C.ink; g.fill();
      g.fillStyle = q.orig ? alpha(C.cyan, .25 + .45 * shade[key]) : alpha(C.violet, .3 + .6 * shade[key]); g.fill(); g.strokeStyle = alpha(C.ink, .85); g.lineWidth = lw; g.stroke(); }));
    // labels under each solid
    const { kk, kn, kd, S0, V0, H0 } = scene;
    // chart
    const P = k.plot(c, { xmin: 0, xmax: 5.4, ymin: 0, ymax: 130, pad: { l: bc[0] + 24, r: w - bc[0] - bc[2], t: bc[1], b: h - bc[1] - bc[3] }, xstep: 1, ystep: 25, xlabel: "k" });
    P.grid(); P.axes();
    P.fn(x => x, C.cyan, 2.2, 0, 5.4); P.fn(x => x * x, C.pink, 2.2, 0, Math.min(5.4, Math.sqrt(130))); P.fn(x => x * x * x, C.violet, 2.2, 0, Math.cbrt(130));
    P.line(kk, 0, kk, 130, alpha(C.amber, .8), 1.5, [5, 4]);
    [[kk, C.cyan], [kk * kk, C.pink], [kk ** 3, C.violet]].forEach(([y, col]) => P.point(kk, Math.min(y, 130), col, 4.5));
    d.text("k", P.X(4.3), P.Y(4.3) - 8, { font: `italic 600 14px ${F.math}`, color: C.cyan, align: "right" });
    d.text("k²", P.X(Math.sqrt(125)) + 4, P.Y(125) + 4, { font: `italic 600 14px ${F.math}`, color: C.pink, align: "left", base: "top" });
    d.text("k³", P.X(Math.cbrt(125)) - 6, P.Y(125) + 4, { font: `italic 600 14px ${F.math}`, color: C.violet, align: "right", base: "top" });
    const kH = kd === 1 ? String(kn) : "½";
    const Hs = rq(H0 * kn, kd), Ss = rq(S0 * kn * kn, kd * kd), Vs = rq(V0 * kn ** 3, kd ** 3);
    const kq = (p) => kd === 1 ? String(kn ** p) : FR(1, kd ** p);
    let lm;
    if (shp === "blk") lm = kk === 1 ? `<div class="landmark"><div class="big">k = 1: a congruent copy</div><div class="note">Choose another k. The cyan solid is the original, the violet one the image, drawn to the same scale.</div></div>`
      : `<div class="landmark hit"><div class="big">${M(`<span class="c2">×${kq(1)}</span>, <span class="c3">×${kq(2)}</span>, <span class="c4">×${kq(3)}</span>`)}</div><div class="note">${kd === 1 ? `Every unit cube became a ${kn} × ${kn} × ${kn} block of ${kn ** 3} cubes, and every unit square of surface became ${kn * kn} squares.` : "Each cube shrank to half its edge: its faces have a quarter of the area and it holds an eighth of the volume."}</div></div>`;
    else lm = `<div class="landmark${kk > 1 ? " hit" : ""}"><div class="big">${M(`stress ∝ <span class="fr"><span><span class="c4"><i>k</i><sup>3</sup></span></span><span><span class="c3"><i>k</i><sup>2</sup></span></span></span> = <span class="c1">${kd === 1 ? kn : "½"}</span>`)}</div><div class="note">${shp === "ani" ? `Weight grows with volume (×${kq(3)}) but leg strength with the area of the bone's cross-section (×${kq(2)}). Each square unit of bone carries ${kd === 1 ? kn : "half"} times the load, so a giant needs thicker legs.` : `A beam's own weight grows ×${kq(3)}, its cross-section only ×${kq(2)}, so the stress from its own weight grows ×${kd === 1 ? kn : "½"}. Long spans need deeper sections.`}</div></div>`;
    k.setRO(`<div><h2>${SH[shp].name} scaled by k</h2><div class="ro-big" style="margin-top:8px;font-size:26px">${M(`<span class="c1"><i>k</i> = ${kH}</span>`)}</div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="c2">${H0} × ${kH === "½" ? FR(1, 2) : kH} = ${Hs}</span>`)}<span class="lbl">height, a length (×k)</span></div>
      <div class="row">${M(`<span class="c3">${S0} × ${kq(2)} = ${Ss}</span>`)}<span class="lbl">surface area in square units (×k²)</span></div>
      <div class="row">${M(`<span class="c4">${V0} × ${kq(3)} = ${Vs}</span>`)}<span class="lbl">volume in unit cubes (×k³)</span></div></div>${lm}
      <p class="narr">Cyan: the original. Violet: the image. Slide k and compare how fast the three curves rise.</p>`);
  });
};

})();
