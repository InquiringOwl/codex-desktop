# Codex: working brief

Read this first in every session. Keep it short and current: update it in the same commit as any change it describes.

## What Codex is
A desktop knowledge console (Electron) that maps subjects as Civ V-style skill trees. Menu → Dictionary → a subject (Mathematics, Physics) → its Field map → a field's tree → topic pages (dossier + interactive lab).
- **Mathematics** charted: Arithmetic (30), Pre-Algebra (22), Algebra I (37), Geometry (38). Next, in order: Algebra II, Trigonometry, Precalculus, Calculus.
- **Physics** (calculus-based college sequence, 17 fields) charted: Mechanics (45, ≈ OpenStax *University Physics Vol. 1* ch. 1–11, 13; first node `mech-units`). Next: Waves & Fluids, Thermodynamics, Electricity & Magnetism. Each physics node lists the math it needs (`math`, informational, never locks) with `mathWhy` text, shown under Learning path → Mathematics you need; fields list `math` fields. Spec: `web/TREE-SPEC-PHYSICS.md`, brief `web/CONTENT-BRIEF-3.md`.
- **English** (Arts & Humanities, magenta accent, 20 fields): Grammar & Usage begun (first node `eng-parts-of-speech`; the other 20 nodes are `planned`, shown dashed). English pages add **story panels**: public-domain passages (pre-1931, verified against Gutenberg) as tagged tokens, with original SVG scenes from `web/art/`. Spec `web/TREE-SPEC-ENGLISH.md`, brief `web/CONTENT-BRIEF-ENGLISH.md`.
- **Music Theory** (Arts & Humanities, magenta accent, 16 fields; data in `web/src/data-music.js`): Music Fundamentals begun (5 of 23 nodes: `mus-pitch`, `mus-durations`, `mus-sound`, `mus-staff`, `mus-simple-meter`; the rest `planned`). Taught like math/physics: **no story panels**. Nodes list `math` and `physics` refs (informational, shown under Learning path, `mathWhy` text for both). Labs use `web/src/kit-music.js` (rules + staff/keyboard drawing + Web Audio synth). Spec `web/TREE-SPEC-MUSIC.md`, brief `web/WRITER-PACK-MUSIC.md`.
- Dictionary groups subjects as STEM, Arts & Humanities, Social Sciences (`DB.subjectGroups`, each subject's `group`).
- Standard: **college-level accuracy**, standard college order and terminology (Pre-Algebra ≈ OpenStax *Prealgebra 2e*, Algebra I ≈ OpenStax *Elementary Algebra 2e*, Geometry ≈ Jurgensen *Geometry* / Common Core HS-G, axiomatic order).
- Look: EVE Online-inspired. Palette amber `#F2B84B` (c1), cyan `#5CC8E0` (c2), pink `#F07CA0` (c3), violet `#B49BFF` (c4), green `#7BD88F` (c5); magenta `#D97AE6` is the Arts & Humanities accent (`data-accent="magenta"`), not a content colour. Fonts STIX Two Text, IBM Plex Sans/Mono, Saira Semi Condensed (bundled in `app/fonts`).

## Where things are
| Path | What |
| --- | --- |
| `web/src/data.js` | `DB.trees[field] = {eras, nodes}`, `DB.fields` (every subject's fields, `subject`, `status: "charted"`/`"planned"`), `DB.subjectMaps[subject] = {groups, eras, …}` (per-subject field map), `DB.subjects`, `DB.subjectGroups`, `DB.posTags`/`DB.parseStory` (English) |
| `web/src/data-<subject>.js` | A subject's map, fields and trees in its own file (loaded after `data.js`; keeps parallel sessions out of each other's way). `data-music.js` also opens the subject in `DB.subjects`. |
| `web/src/kit-<subject>.js` | Subject lab kits on top of `labkit.js`: DOM-free rules (tested) + drawing/sound helpers. `kit-music.js` = `MusicTheory` + `MusicKit.attach(k)`. |
| `tests/*.test.js` | Logic tests for lab rules (`node tools/labtest.js`) |
| `checks/_lib/` | Shared helpers for check files (`from music import *`), written independently of the kits |
| `web/art/*.js` | `DB.scenes[key]`: original inline-SVG story art for English pages |
| `web/content/<field>/<id>.js` | One topic dossier per file, `ARITH["id"] = {…}` (global stays `window.ARITH` for all fields) |
| `checks/<field>/<id>.py` | Saved sympy checks for that topic's formal claims, worked example and practice (first line: `# content:` stamp; English checks verify story quotes and tagging) |
| `web/labs/*.js`, `web/src/labs1-3.js` | Labs, `L["id"] = k => {…}` using `web/src/labkit.js` |
| `web/src/app.js`, `style.css` | Menus, trees, topic pages, routing (`#menu`, `#dict`, `#field-map`, `#field-map-physics`, `#field-<id>`, `#<topic-id>`) |
| `web/CONTENT-BRIEF.md` (+ `-2`, `-3` physics, `-4` geometry) | Dossier schema, markup and style rules. **Follow these for any content.** Geometry adds `.ov` (segment overline) and `table.proof` (two-column proofs) in `style.css`. |
| `web/LAB-BRIEF.md`, `web/TREE-SPEC.md`, `web/TREE-SPEC-PHYSICS.md` | Lab rules; per-topic prereqs, unlocks, lab idea and colour keys |
| `main.js`, `preload.js`, `updater-mac.js` | Electron shell, `codex://` scheme, update wiring (Mac self-updater; Win/Linux electron-updater; checks at launch + every 4 h) |
| `tools/` | `build-web.js`, `validate.js`, `mathcheck.py`, `labtest.js`, `smoke.js`, `layoutcheck.js`, `sheet.js`, `snap.js`, `excerpt.js`, `release.js`, `dump-content.js` (see Commands) |

Content rules that bite: `legend.desc`, `prereqWhy`, `unlocksWhy`, `eyebrow` and the main text fields are raw HTML; `careers`, `fields`, `beyond`, `life` are escaped text (no tags). Ids are unique across all fields; `pre` may point into another field. Legend colours must match the lab's colour keys.

## Commands
- `node tools/build-web.js`: builds `app/index.html` (desktop) and `dist-web/codex.html` (claude.ai artifact). Fails on any syntax error.
- `node tools/validate.js [--warnings]`: structure check of trees, fields, every dossier, HTML tag balance, lab coverage. Must be 0 errors. Warnings list missing cross-field `unlocksWhy` text.
- `python3 tools/mathcheck.py [ids]`: runs every saved math check (~3 s). Every topic needs a check file covering `example` and each `practice[i]` (physics uses `near()` for rounded values). If a page's formal/example/practice text changes, its check fails until the check is updated and re-stamped: `python3 tools/mathcheck.py --stamp <id>` (refused unless all its checks pass). Never change a check just to make a wrong page pass.
- `node tools/dump-content.js [ids]`: a topic's checkable parts as JSON.
- `node tools/smoke.js` (`ONLY=id,id` for a subset): headless Chromium visits every screen at desktop and phone width and fails on any JS error. ~2 min for all.
- `node tools/labtest.js [name]`: logic tests for lab rules in `tests/` (~1 s). Test every combination a lab can produce here, not by clicking in a browser.
- `node tools/layoutcheck.js <ids>`: text report, per topic, mode and width, of page overflow, clipped text, canvas labels outside the canvas / under the mode buttons / overlapping each other, desktop readout scrolling, console errors. Run until 0 issues **before** taking any screenshot. (It found the phone overflow of worked examples fixed by `.notes>*{min-width:0}`.)
- `node tools/sheet.js <ids>` (`CLICK=1`, `FULL=1`): ONE contact-sheet image per topic, every lab mode at desktop and phone width (`/tmp/codex-sheet/<id>.png`). Use this for the visual review instead of many `snap.js` shots.
- `node tools/excerpt.js <id> [fields]`: a short excerpt of a finished page (shape and voice) for writers, instead of reading a 30 KB file.
- `node tools/snap.js <hash…>` (`CLICK=1`, `W=400 H=860`): single screenshots (field maps, trees, one-off checks).
- `npm run check`: build + validate + mathcheck + labtest + smoke. **Run before every commit that touches `web/`.**
- The device shell can't download Playwright's Chromium. For smoke/snap, tar the repo (no node_modules/.git) into `.sync/` (git-ignored), stage it to the cloud container and run there (Chromium preinstalled), then bring changed files back. Build, validate and mathcheck run fine on the device.
- Don't run `git status` (or other git commands) from the device shell: it can leave `.git/index.lock`, which that shell can't delete.
- Two sessions working on the same folder at once diverged once (Physics was released from one while Geometry was built in another). Before starting a field, check GitHub for newer commits (`curl -s https://api.github.com/repos/InquiringOwl/codex-desktop/commits?per_page=3`) and work on one field per session.
- One-time setup on a new machine: `npm install && npx playwright install chromium && python3 -m pip install --user sympy`. Playwright is a dev dependency, not bundled into the app.

## Release (auto-update reaches every installed copy)
`npm run release -- patch "Short note"` (or `minor`, `major`, exact `X.Y.Z`). It refuses if GitHub has newer commits, runs `npm run check`, bumps the version, commits everything, pushes, tags and pushes the tag. Devon runs it in Terminal (the device shell has no GitHub credentials). Then confirm the build via the GitHub API.
The Release workflow runs the Check workflow first; if it fails, nothing is published. Builds take ~3 min. Repo: public `InquiringOwl/codex-desktop`.

## Adding a field (the efficient process, first used for Music Theory)
1. Tree spec: ids, prereqs (incl. cross-field), math/physics refs, lab idea + colour keys, and **writer batches** of 2–3 related nodes.
2. **Subject kit first** (`web/src/kit-<subject>.js`): the shared plumbing every lab would rebuild (notation, drawing, scoring, sound), with its rules DOM-free and covered by `tests/<subject>.test.js`. Labs then write only what is unique to their topic (target 10–15 KB per lab).
3. **One condensed writer pack** (`web/WRITER-PACK-<SUBJECT>.md`, ~8 KB): schema, markup, kit API, check helpers, finish steps. Writers read the pack + spec and use `excerpt.js`, not the four briefs and two 30 KB model pages.
4. Writers: ≤2–4 parallel agents, each owning a batch (pages + one lab file + checks). Finish order per batch: validate → mathcheck → labtest → **layoutcheck to 0** → one `sheet.js` image per node.
5. Mechanical work (quote verification, check files, re-running checks) can go to a cheaper model (`model: "sonnet"` or `"haiku"` on the Agent tool); lab design, content and the final review stay on the strongest model.
6. Final review: read the dumped formal/example/practice/origin text once, look at each node's contact sheet once, `npm run check`, then release.

## Working efficiently (for Claude)
- The Mac folder `~/Documents/codex-desktop` is the source of truth. Edit in place with device_bash; don't stage files into the cloud just to read or edit them.
- Use `validate.js` and `smoke.js` to confirm that nothing broke; don't re-read big content files for that. Spend review effort on math accuracy and visuals.
- Read only the topic file you're changing (`web/content/<field>/<id>.js`). Labs are still grouped: `grep -n 'L\["id"\]' web/labs/*.js web/src/labs*.js`.
- The cloud container can't reach api.github.com. Check CI status from device_bash: `curl -s https://api.github.com/repos/InquiringOwl/codex-desktop/actions/runs?per_page=3`.

## Known leftovers
- Music: `unlocksWhy` for unlocks that are still `planned` is rejected by `validate.js`; add that text when the planned node is written (mus-simple-meter's two sentences are kept in `web/TREE-SPEC-MUSIC.md`). mus-staff Read/Quiz staves could be larger; mus-1/mus-2 have local helpers (harmonic naming, ties, single-value check) that could move into `kit-music.js` with tests.
- Geometry labs: angle labels in very small SSS∼ triangles can touch a side; ⌢ (arc) renders small in STIX; long heroes wrap on phones (g-trig-ratios).
- Mechanics labs: kepler "perihelion" label touches the ellipse; rot-dynamics stage has empty space below the pulley; some circular-motion labels cross the dashed line.
- Some point labels crossed by lines (a1-par-perp, a1-line-forms); a1-poly-mult readout scrolls on desktop; some readouts reveal answers before the stepper reaches them.
- Arithmetic topics lack `unlocksWhy` text for their Pre-Algebra/Algebra I unlocks (`validate.js --warnings`).
