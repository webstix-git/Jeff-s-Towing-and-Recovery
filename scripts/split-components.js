const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const jsx = fs.readFileSync(path.join(ROOT, 'generated', 'home-body.jsx'), 'utf8');

const headerEnd = jsx.indexOf('</header>') + '</header>'.length;
const drawerMarker = jsx.indexOf('<div className="drawer"');
const drawerEnd = jsx.indexOf('</div>', jsx.lastIndexOf('</nav>', jsx.indexOf('</div>', drawerMarker + 200))) + '</div>'.length;
// drawer closes after d-phone link - find the drawer div's closing
let depth = 0;
let drawerClose = drawerMarker;
for (let i = drawerMarker; i < jsx.length; i++) {
  if (jsx.slice(i, i + 4) === '<div') depth++;
  if (jsx.slice(i, i + 6) === '</div>') {
    depth--;
    if (depth === 0) { drawerClose = i + 6; break; }
  }
}

const footerMarker = jsx.indexOf('<footer className="site-footer"');
const fabMarker = jsx.indexOf('<a className="fab-call"');

const header = jsx.slice(0, headerEnd).trim();
const drawer = jsx.slice(headerEnd, drawerClose).trim();
const main = jsx.slice(drawerClose, footerMarker).trim();
const footer = jsx.slice(footerMarker, fabMarker).trim();
const floating = jsx.slice(fabMarker).trim();

function toLinks(content) {
  return content
    .replace(/<a (className="[^"]*" )?href="(\/[^"#]*?)"/g, (m, cls, href) => {
      if (href.startsWith('tel:')) return m;
      const classPart = cls || '';
      return `<Link ${classPart}href="${href}"`;
    })
    .replace(/<\/a>(?=[\s\S]*?<\/Link>)/g, '</Link>')
    .replace(/<a href="(\/[^"#]*?)"/g, '<Link href="$1"')
    .replace(/(<Link[^>]*>[\s\S]*?)<\/a>/g, '$1</Link>');
}

function fixLinksSimple(content) {
  let out = content;
  const linkRe = /<a ((?:className="[^"]*" )?)href="(\/(?:services)?[^"]*)"/g;
  out = out.replace(linkRe, '<Link $1href="$2"');
  out = out.replace(/<a href="(\/(?:services)?[^"]*)"/g, '<Link href="$1"');
  // Close Link tags for internal routes only - replace </a> after Link opens
  const parts = out.split(/(<\/?(?:Link|a)[^>]*>)/);
  let inLink = false;
  return parts.map((part) => {
    if (part.startsWith('<Link')) { inLink = true; return part; }
    if (part === '</a>' && inLink) { inLink = false; return '</Link>'; }
    if (part.startsWith('<a ')) return part;
    if (part === '</a>') return part;
    return part;
  }).join('');
}

function wrap(name, content, client, extraImports = []) {
  const imports = [
    'import Link from "next/link";',
    ...extraImports,
  ];
  if (client) imports.unshift('"use client";');
  return `${imports.join('\n')}\n\nexport default function ${name}() {\n  return (\n    <>\n${content.split('\n').map((l) => '      ' + l).join('\n')}\n    </>\n  );\n}\n`;
}

const outDir = path.join(ROOT, 'components', 'layout');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join(ROOT, 'components', 'home'), { recursive: true });

const headerBlock = fixLinksSimple(header + '\n' + drawer);
fs.writeFileSync(path.join(outDir, 'SiteHeader.tsx'), wrap('SiteHeader', headerBlock, false));
fs.writeFileSync(path.join(outDir, 'SiteFooter.tsx'), wrap('SiteFooter', fixLinksSimple(footer), false));
fs.writeFileSync(path.join(outDir, 'FloatingActions.tsx'), wrap('FloatingActions', floating, false));
fs.writeFileSync(path.join(ROOT, 'components', 'home', 'HomeContent.tsx'), wrap('HomeContent', fixLinksSimple(main), false));

console.log('Split complete:', { header: header.length, drawer: drawer.length, main: main.length, footer: footer.length, floating: floating.length });
