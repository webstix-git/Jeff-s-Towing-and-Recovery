const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const templatePath = path.join(ROOT, 'extracted', 'template.html');
const assetsDir = path.join(ROOT, 'extracted', 'assets');

const ASSET_MAP = {
  '722b0190-474c-460b-bbb3-0b1dd640dff6': 'images/logo.png',
  '0ed6354c-74e4-47be-86a9-d64b6f500d57': 'images/hero.jpg',
  '66bfe733-b6ee-46f1-aaef-488eebe7eae5': 'images/intro-snow.jpg',
  'd8dd9708-7307-44f7-844e-fc9c7d6a6761': 'images/emblem.png',
  '745d14c6-178d-4da9-aea6-4c75b8760233': 'images/svc-roadside.jpg',
  'c200035d-6758-4472-bf4a-54fc8dc84b6e': 'images/svc-flatbed.jpg',
  '34837e90-cb6a-47f6-b132-6fb4c5b56874': 'images/svc-night.jpg',
  'f61ddda0-8f45-4b5e-bd64-b1bbce098b3a': 'images/legacy.jpg',
  'cd04af3a-b029-4750-af38-16262408290e': 'images/cta-highway.jpg',
  'd3504f96-887d-4fed-8188-011928e5e899': 'fonts/archivo-vietnamese.woff2',
  '24ba37c7-a366-4589-b776-041eaecbb07e': 'fonts/archivo-latin-ext.woff2',
  '622f991a-3582-438a-85cc-31c5ac5b510a': 'fonts/archivo-latin.woff2',
};

const EXT_BY_UUID = {
  '722b0190-474c-460b-bbb3-0b1dd640dff6': '.png',
  '0ed6354c-74e4-47be-86a9-d64b6f500d57': '.jpg',
  '66bfe733-b6ee-46f1-aaef-488eebe7eae5': '.jpg',
  'd8dd9708-7307-44f7-844e-fc9c7d6a6761': '.png',
  '745d14c6-178d-4da9-aea6-4c75b8760233': '.jpg',
  'c200035d-6758-4472-bf4a-54fc8dc84b6e': '.jpg',
  '34837e90-cb6a-47f6-b132-6fb4c5b56874': '.jpg',
  'f61ddda0-8f45-4b5e-bd64-b1bbce098b3a': '.jpg',
  'cd04af3a-b029-4750-af38-16262408290e': '.jpg',
  'd3504f96-887d-4fed-8188-011928e5e899': '.woff2',
  '24ba37c7-a366-4589-b776-041eaecbb07e': '.woff2',
  '622f991a-3582-438a-85cc-31c5ac5b510a': '.woff2',
};

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyAssets() {
  const publicDir = path.join(ROOT, 'public');
  for (const [uuid, dest] of Object.entries(ASSET_MAP)) {
    const src = path.join(assetsDir, uuid + (EXT_BY_UUID[uuid] || ''));
    const out = path.join(publicDir, dest);
    ensureDir(path.dirname(out));
    if (fs.existsSync(src)) fs.copyFileSync(src, out);
  }
}

function extractStyles(html) {
  const styles = [];
  const re = /<style>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = re.exec(html)) !== null) styles.push(m[1]);
  let css = styles.join('\n\n');
  for (const [uuid, dest] of Object.entries(ASSET_MAP)) {
    if (dest.startsWith('fonts/')) {
      css = css.split(`url("${uuid}")`).join(`url("/${dest}")`);
      css = css.split(`url('${uuid}')`).join(`url('/${dest}')`);
    }
  }
  return css;
}

function extractBody(html) {
  const m = html.match(/<body>([\s\S]*)<\/body>/i);
  if (!m) throw new Error('No body found');
  let body = m[1];
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  return body.trim();
}

function htmlToJsx(html) {
  let jsx = html;
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  for (const [uuid, dest] of Object.entries(ASSET_MAP)) {
    if (dest.startsWith('images/')) {
      jsx = jsx.split(`src="${uuid}"`).join(`src="/${dest}"`);
    }
  }
  jsx = jsx.replace(/\bclass=/g, 'className=');
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');
  jsx = jsx.replace(/\bautoplay\b/g, 'autoPlay');
  jsx = jsx.replace(/\breadonly\b/g, 'readOnly');
  jsx = jsx.replace(/\btabindex=/gi, 'tabIndex=');
  jsx = jsx.replace(/\bstroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/\bstroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/\bfill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/\bclip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/\bclip-path=/g, 'clipPath=');
  jsx = jsx.replace(/\baria-label=/g, 'aria-label=');
  jsx = jsx.replace(/\baria-hidden=/g, 'aria-hidden=');
  jsx = jsx.replace(/\baria-haspopup=/g, 'aria-haspopup=');
  jsx = jsx.replace(/\baria-expanded=/g, 'aria-expanded=');
  jsx = jsx.replace(/\bdata-screen-label=/g, 'data-screen-label=');
  jsx = jsx.replace(/\bdata-carousel\b/g, 'data-carousel');
  jsx = jsx.replace(/\bdata-prev\b/g, 'data-prev');
  jsx = jsx.replace(/\bdata-next\b/g, 'data-next');
  jsx = jsx.replace(/\bdata-faq\b/g, 'data-faq');
  jsx = jsx.replace(/href="index\.html([^"]*)"/g, 'href="/$1"');
  jsx = jsx.replace(/href="index\.html"/g, 'href="/"');
  jsx = jsx.replace(/href="services\.html/g, 'href="/services');
  jsx = jsx.replace(/href="\/#"/g, 'href="/#"');
  jsx = jsx.replace(/style="([^"]*)"/g, (_, s) => {
    const obj = s.split(';').filter(Boolean).map((pair) => {
      const [k, v] = pair.split(':').map((x) => x.trim());
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${camel}: '${v}'`;
    }).join(', ');
    return `style={{ ${obj} }}`;
  });
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/&amp;/g, '&');
  jsx = jsx.replace(/&nbsp;/g, '\u00A0');
  return jsx;
}

function splitHomeBody(bodyJsx) {
  const headerEnd = bodyJsx.indexOf('</header>') + '</header>'.length;
  const drawerEnd = bodyJsx.indexOf('</div>', bodyJsx.indexOf('className="drawer"')) + '</div>'.length;
  const footerStart = bodyJsx.indexOf('<!-- ============ FOOTER ============ -->');
  const fabStart = bodyJsx.indexOf('<!-- Floating actions -->');

  const header = bodyJsx.slice(0, headerEnd);
  const drawer = bodyJsx.slice(headerEnd, drawerEnd);
  const main = bodyJsx.slice(drawerEnd, footerStart).trim();
  const footerAndFab = bodyJsx.slice(footerStart).trim();

  const footerEnd = footerAndFab.indexOf('</footer>') + '</footer>'.length;
  const footer = footerAndFab.slice(0, footerEnd);
  const floating = footerAndFab.slice(footerEnd).trim();

  return { header, drawer, main, footer, floating };
}

function wrapComponent(name, imports, jsx, client = false) {
  const lines = [];
  if (client) lines.push('"use client";', '');
  lines.push(...imports, '');
  lines.push(`export default function ${name}() {`);
  lines.push('  return (');
  lines.push(jsx.split('\n').map((l) => '    ' + l).join('\n'));
  lines.push('  );');
  lines.push('}');
  lines.push('');
  return lines.join('\n');
}

function run() {
  const html = fs.readFileSync(templatePath, 'utf8');
  const css = extractStyles(html);
  const body = extractBody(html);
  const bodyJsx = htmlToJsx(body);
  const parts = splitHomeBody(bodyJsx);

  copyAssets();

  ensureDir(path.join(ROOT, 'app'));
  ensureDir(path.join(ROOT, 'components', 'layout'));
  ensureDir(path.join(ROOT, 'components', 'home'));
  ensureDir(path.join(ROOT, 'components', 'interactions'));

  fs.writeFileSync(path.join(ROOT, 'app', 'globals.css'), css);
  fs.writeFileSync(path.join(ROOT, 'app', 'home.css'), '/* Home-specific styles are in globals.css */\n');

  const headerContent = wrapComponent('SiteHeader', [
    "import Link from 'next/link';",
    "import Image from 'next/image';",
  ], parts.header
    .replace(/<a className="brand" href="\/"/g, '<Link className="brand" href="/"')
    .replace(/<a href="\/" className="active"/g, '<Link href="/" className="active"')
    .replace(/<a href="\/services"/g, '<Link href="/services"')
    .replace(/<\/a>/g, (match, offset, str) => {
      const before = str.slice(Math.max(0, offset - 80), offset);
      if (before.includes('<Link')) return '</Link>';
      return match;
    })
    .replace(/<img src="\/images\/logo\.png" alt="([^"]*)" \/>/g,
      '<Image src="/images/logo.png" alt="$1" width={200} height={64} priority className="brand-logo" />')
  );

  fs.writeFileSync(path.join(ROOT, 'components', 'layout', 'SiteHeader.tsx'), headerContent);

  console.log('Migration extraction complete.');
  console.log('Body length:', bodyJsx.length);
  console.log('Parts:', Object.fromEntries(Object.entries(parts).map(([k, v]) => [k, v.length])));
}

run();
