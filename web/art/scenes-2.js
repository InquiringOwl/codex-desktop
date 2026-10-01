/* ============ Story art, part 2 ============ */
(function(){
const S = DB.scenes = DB.scenes || {};
const svg = body => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* The Great Gatsby: a bay at night, a lit mansion on one shore, a small green light at the end of a far dock. */
S["green-light"] = svg(`
<defs><linearGradient id="gl-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050914"/><stop offset=".7" stop-color="#14223d"/><stop offset="1" stop-color="#26385a"/></linearGradient>
<linearGradient id="gl-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1a2e"/><stop offset="1" stop-color="#03070f"/></linearGradient>
<radialGradient id="gl-g" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9dffb4" stop-opacity=".9"/><stop offset=".3" stop-color="#3fe08a" stop-opacity=".45"/><stop offset="1" stop-color="#3fe08a" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#gl-sky)"/>
<g fill="#dfe8ff">${[[30,18],[80,40],[132,12],[170,52],[230,24],[262,60],[318,14],[350,44],[410,22],[455,58],[60,70],[200,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="${(x*7%10)/10+0.5}" opacity=".7"/>`).join("")}</g>
<rect y="118" width="480" height="62" fill="url(#gl-water)"/>
<path d="M0 118 L0 96 Q30 92 60 98 L150 104 Q170 112 190 118Z" fill="#070c16"/>
<g fill="#0b1220"><rect x="38" y="62" width="88" height="40"/><path d="M34 64 L82 40 L130 64Z"/><rect x="58" y="44" width="10" height="16"/><rect x="104" y="48" width="8" height="12"/></g>
<g fill="#ffd98a">${[46,60,74,88,102,116].map(x=>`<rect x="${x}" y="70" width="6" height="9" opacity=".9"/><rect x="${x}" y="86" width="6" height="9" opacity=".75"/>`).join("")}</g>
<g fill="#ffd98a" opacity=".25">${[46,60,74,88,102,116].map((x,i)=>`<rect x="${x}" y="${122+i%2*4}" width="6" height="${16+i%3*6}"/>`).join("")}</g>
<path d="M300 118 Q360 106 420 108 Q460 110 480 106 V118Z" fill="#070c16"/>
<rect x="352" y="113" width="44" height="3" fill="#0f1828"/><rect x="394" y="104" width="2.5" height="12" fill="#1a2436"/>
<circle cx="395" cy="103" r="14" fill="url(#gl-g)"/><circle cx="395" cy="103" r="2.2" fill="#c9ffd6"/>
<path d="M395 120 v26" stroke="#3fe08a" stroke-width="3" opacity=".35"/><path d="M395 120 v44" stroke="#3fe08a" stroke-width="1" opacity=".25"/>
<g stroke="#2c4366" stroke-width="1" opacity=".6" fill="none"><path d="M200 132 h60 M240 144 h80 M150 156 h50 M300 162 h70"/></g>
<path d="M150 117 L188 117" stroke="#0f1828" stroke-width="3"/><path d="M168 117 v-14" stroke="#0f1828" stroke-width="2"/>
<g fill="#06090f"><path d="M174 103 q-3 -10 2 -12 q5 2 2 12z"/><rect x="172" y="103" width="6" height="14"/></g>`);

/* A Christmas Carol: a cold counting-house on Christmas Eve, one candle, fog and snow at the window. */
S["counting-house"] = svg(`
<defs><linearGradient id="ch-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#171a22"/><stop offset="1" stop-color="#0c0d12"/></linearGradient>
<linearGradient id="ch-fog" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a6a80"/><stop offset="1" stop-color="#2a3344"/></linearGradient>
<radialGradient id="ch-candle" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd27a" stop-opacity=".55"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#ch-wall)"/>
<rect x="300" y="18" width="130" height="96" fill="url(#ch-fog)"/>
<g fill="#3a4658"><rect x="300" y="78" width="26" height="36"/><rect x="330" y="64" width="22" height="50"/><rect x="390" y="72" width="30" height="42"/><path d="M356 114 V58 l12 -10 12 10 V114z"/></g>
<g fill="#ffe7b0" opacity=".5"><rect x="336" y="74" width="4" height="5"/><rect x="398" y="82" width="4" height="5"/><rect x="408" y="92" width="4" height="5"/></g>
<g fill="#eef3fa">${Array.from({length:28},(_,i)=>`<circle cx="${302 + (i*47)%126}" cy="${22 + (i*31)%88}" r="${1 + (i%3)*0.5}" opacity=".8"/>`).join("")}</g>
<g stroke="#2b2f3a" stroke-width="5" fill="none"><rect x="300" y="18" width="130" height="96"/><line x1="365" y1="18" x2="365" y2="114"/><line x1="300" y1="66" x2="430" y2="66"/></g>
<rect x="296" y="114" width="138" height="6" fill="#2b2f3a"/>
<path d="M40 120 L250 120 L262 132 L28 132Z" fill="#3b2617"/><rect x="40" y="132" width="10" height="48" fill="#24170e"/><rect x="232" y="132" width="10" height="48" fill="#24170e"/>
<path d="M90 116 L150 110 L208 116 L150 120Z" fill="#e8dcc0"/><path d="M150 110 V120" stroke="#9a8a6a"/><g stroke="#8a7a5a" stroke-width=".8"><path d="M100 115 L144 111 M102 117 L144 114 M158 112 L200 115 M158 114 L198 117"/></g>
<rect x="216" y="100" width="8" height="18" fill="#efe4c8"/><path d="M220 100 q-3 -6 0 -11 q3 5 0 11z" fill="#ffcb5a"/><circle cx="220" cy="96" r="60" fill="url(#ch-candle)"/>
<rect x="60" y="106" width="14" height="10" fill="#1d1f26"/><path d="M67 106 L80 84" stroke="#d9d2bf" stroke-width="1.5"/>
<g fill="#0a0b0f"><path d="M118 70 q2 -18 18 -18 q16 0 16 18 l4 40 h-42z"/><path d="M128 54 q8 -10 18 0" stroke="#0a0b0f" stroke-width="2"/></g>
<g fill="#0a0b0f"><path d="M262 120 q0 -26 14 -30 q14 4 14 30 l2 60 h-32z"/><rect x="258" y="86" width="36" height="6" rx="2"/></g>`);

/* Narrative of the Life of Frederick Douglass: a tidewater road in Talbot County at first light, a milestone toward Easton. */
S["tidewater"] = svg(`
<defs><linearGradient id="tw-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3a5c"/><stop offset=".55" stop-color="#b98a8a"/><stop offset="1" stop-color="#f2c48a"/></linearGradient>
<linearGradient id="tw-land" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3c4a34"/><stop offset="1" stop-color="#18200f"/></linearGradient>
<linearGradient id="tw-river" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8b884" stop-opacity=".2"/><stop offset=".5" stop-color="#f6d7a4" stop-opacity=".8"/><stop offset="1" stop-color="#e8b884" stop-opacity=".2"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#tw-sky)"/>
<circle cx="330" cy="98" r="16" fill="#ffe3a8"/><circle cx="330" cy="98" r="40" fill="#ffe3a8" opacity=".18"/>
<path d="M0 104 Q120 92 240 100 T480 98 V180 H0Z" fill="#3a4b3e"/>
<path d="M180 108 Q300 100 480 106 L480 116 Q320 110 196 116Z" fill="url(#tw-river)"/>
<g fill="#1f2a1c"><ellipse cx="40" cy="96" rx="26" ry="18"/><ellipse cx="70" cy="92" rx="20" ry="22"/><rect x="58" y="100" width="4" height="14"/>
<ellipse cx="420" cy="96" rx="22" ry="14"/><ellipse cx="452" cy="92" rx="18" ry="18"/>
<path d="M120 104 l8 -30 8 30z"/><path d="M134 104 l7 -24 7 24z"/></g>
<path d="M0 124 Q200 112 480 122 V180 H0Z" fill="url(#tw-land)"/>
<path d="M150 180 Q210 150 250 128 Q262 122 290 120 Q270 130 262 140 Q236 160 230 180Z" fill="#7a6a4a" opacity=".85"/>
<g stroke="#2a331f" stroke-width="1" opacity=".6"><path d="M20 150 l6 -10 M40 158 l4 -12 M330 150 l5 -10 M380 160 l6 -12 M430 150 l4 -10"/></g>
<g><rect x="306" y="128" width="18" height="30" rx="7" fill="#b8b0a0"/><rect x="306" y="150" width="18" height="10" fill="#8e8676"/>
<text x="315" y="139" font-family="IBM Plex Mono, monospace" font-size="5.5" text-anchor="middle" fill="#3a352c">EASTON</text>
<text x="315" y="148" font-family="IBM Plex Mono, monospace" font-size="8" text-anchor="middle" fill="#3a352c">12</text></g>
<g fill="#1a1a14" opacity=".7"><path d="M60 64 q6 -4 12 0 q-6 -2 -12 0z"/><path d="M80 56 q5 -3 10 0 q-5 -2 -10 0z"/></g>`);
})();
