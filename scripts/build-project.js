const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const template = fs.readFileSync(path.join(ROOT, 'extracted', 'template.html'), 'utf8');
const assetsDir = path.join(ROOT, 'extracted', 'assets');

const ASSETS = {
  '722b0190-474c-460b-bbb3-0b1dd640dff6': ['images/logo.png', '.png'],
  '0ed6354c-74e4-47be-86a9-d64b6f500d57': ['images/hero.jpg', '.jpg'],
  '66bfe733-b6ee-46f1-aaef-488eebe7eae5': ['images/intro-snow.jpg', '.jpg'],
  'd8dd9708-7307-44f7-844e-fc9c7d6a6761': ['images/emblem.png', '.png'],
  '745d14c6-178d-4da9-aea6-4c75b8760233': ['images/svc-roadside.jpg', '.jpg'],
  'c200035d-6758-4472-bf4a-54fc8dc84b6e': ['images/svc-flatbed.jpg', '.jpg'],
  '34837e90-cb6a-47f6-b132-6fb4c5b56874': ['images/svc-night.jpg', '.jpg'],
  'f61ddda0-8f45-4b5e-bd64-b1bbce098b3a': ['images/legacy.jpg', '.jpg'],
  'cd04af3a-b029-4750-af38-16262408290e': ['images/cta-highway.jpg', '.jpg'],
  'd3504f96-887d-4fed-8188-011928e5e899': ['fonts/archivo-vietnamese.woff2', '.woff2'],
  '24ba37c7-a366-4589-b776-041eaecbb07e': ['fonts/archivo-latin-ext.woff2', '.woff2'],
  '622f991a-3582-438a-85cc-31c5ac5b510a': ['fonts/archivo-latin.woff2', '.woff2'],
};

function mkdir(p) { fs.mkdirSync(p, { recursive: true }); }

function copyPublicAssets() {
  for (const [uuid, [dest, ext]] of Object.entries(ASSETS)) {
    const src = path.join(assetsDir, uuid + ext);
    const out = path.join(ROOT, 'public', dest);
    mkdir(path.dirname(out));
    fs.copyFileSync(src, out);
  }
}

function extractCss() {
  const styles = [];
  const re = /<style>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = re.exec(template)) !== null) styles.push(m[1]);
  let css = styles.join('\n\n');
  for (const [uuid, [dest]] of Object.entries(ASSETS)) {
    css = css.split(`url("${uuid}")`).join(`url("/${dest}")`);
  }
  return css;
}

function extractBodyHtml() {
  const m = template.match(/<body>([\s\S]*)<\/body>/i);
  let body = m[1].replace(/<script[\s\S]*?<\/script>/gi, '').trim();
  for (const [uuid, [dest]] of Object.entries(ASSETS)) {
    if (dest.startsWith('images/')) body = body.split(`src="${uuid}"`).join(`src="/${dest}"`);
  }
  body = body.replace(/href="index\.html"/g, 'href="/"');
  body = body.replace(/href="index\.html#/g, 'href="/#');
  body = body.replace(/href="services\.html/g, 'href="/services');
  return body;
}

copyPublicAssets();
const css = extractCss();
const bodyHtml = extractBodyHtml();

mkdir(path.join(ROOT, 'app'));
mkdir(path.join(ROOT, 'generated'));
fs.writeFileSync(path.join(ROOT, 'app', 'globals.css'), css);
fs.writeFileSync(path.join(ROOT, 'generated', 'home-body.html'), bodyHtml);
console.log('CSS bytes:', css.length);
console.log('Body HTML bytes:', bodyHtml.length);
