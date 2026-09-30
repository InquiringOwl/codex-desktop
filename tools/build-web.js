// Builds the Codex page from web/src + web/content.
//   app/index.html          desktop app page (fonts bundled, works offline)
//   dist-web/codex.html     page body for the claude.ai artifact (fonts from Google Fonts)
// Run: node tools/build-web.js
const fs = require('fs');
const path = require('path');
const R = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(R, p), 'utf8');

const css = read('web/src/style.css');
const js = ['web/src/data.js', 'web/content/part1.js', 'web/content/part2.js', 'web/content/part3.js',
  'web/src/labkit.js', 'web/src/labs1.js', 'web/src/labs2.js', 'web/src/labs3.js', 'web/src/app.js'].map(read).join('\n');
if (/<\/script/i.test(js)) throw new Error('A script contains </script>, which would break the page.');

const body = `<div id="app">
  <header class="topbar">
    <button type="button" class="brand" id="brand" aria-label="Codex main menu"><span class="brand-mark">∑</span><span class="brand-name">Codex</span></button>
    <nav class="crumbs" id="crumbs" aria-label="Breadcrumb"></nav>
    <div class="topstat"><span id="stat-t"></span><span class="meter" aria-hidden="true"><i id="stat-m"></i></span></div>
  </header>
  <main class="view" id="view" tabindex="-1"></main>
  <div class="upd" id="upd" role="status" hidden></div>
</div>
<script>
${js}
</script>
`;

const desktop = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'self' codex:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' codex:; img-src 'self' data: codex:">
<title>Codex</title>
<link rel="stylesheet" href="fonts/fonts.css">
<style>
${css}
</style>
</head><body>
${body}
</body></html>
`;

const web = `<title>Codex Math Dictionary</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&family=Saira+Semi+Condensed:wght@400;500;600&display=swap">
<style>
${css}
</style>
${body}`;

fs.writeFileSync(path.join(R, 'app/index.html'), desktop);
fs.mkdirSync(path.join(R, 'dist-web'), { recursive: true });
fs.writeFileSync(path.join(R, 'dist-web/codex.html'), web);
console.log('app/index.html', desktop.length, 'bytes; dist-web/codex.html', web.length, 'bytes');
