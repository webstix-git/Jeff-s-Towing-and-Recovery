const fs = require('fs');
const path = require('path');

const body = fs.readFileSync(path.join(__dirname, '..', 'generated', 'home-body.html'), 'utf8');

function convert(html) {
  let jsx = html.replace(/<!--[\s\S]*?-->/g, '');
  jsx = jsx.replace(/\bclass=/g, 'className=');
  jsx = jsx.replace(/\bstroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/\bstroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/\bfill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/\bclip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/\bxml:space=/g, 'xmlSpace=');
  jsx = jsx.replace(/style="([^"]*)"/g, (_, s) => {
    const obj = s.split(';').filter(Boolean).map((pair) => {
      const idx = pair.indexOf(':');
      const k = pair.slice(0, idx).trim();
      const v = pair.slice(idx + 1).trim();
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${camel}: "${v}"`;
    }).join(', ');
    return `style={{ ${obj} }}`;
  });
  jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/&amp;/g, '&');
  return jsx;
}

const converted = convert(body);
fs.writeFileSync(path.join(__dirname, '..', 'generated', 'home-body.jsx'), converted);
console.log('Wrote home-body.jsx', converted.length, 'chars');
