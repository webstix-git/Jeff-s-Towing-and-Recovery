const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('option-1-html.html', 'utf8');

function extractScript(type) {
  const re = new RegExp(`<script type="${type.replace(/\//g, '\\/')}">([\\s\\S]*?)<\\/script>`);
  const m = html.match(re);
  return m ? m[1] : null;
}

const templateRaw = extractScript('__bundler/template');
const manifestRaw = extractScript('__bundler/manifest');
const extRaw = extractScript('__bundler/ext_resources');

fs.mkdirSync('extracted', { recursive: true });

if (templateRaw) {
  const template = JSON.parse(templateRaw);
  fs.writeFileSync('extracted/template.html', template);
  console.log('template.html written, length:', template.length);
}

if (manifestRaw) {
  const manifest = JSON.parse(manifestRaw);
  fs.writeFileSync('extracted/manifest.json', JSON.stringify(Object.keys(manifest).map(k => ({
    uuid: k,
    mime: manifest[k].mime,
    compressed: manifest[k].compressed,
    dataLen: manifest[k].data?.length
  })), null, 2));
  
  fs.mkdirSync('extracted/assets', { recursive: true });
  for (const [uuid, entry] of Object.entries(manifest)) {
    const binaryStr = Buffer.from(entry.data, 'base64');
    let finalBytes = binaryStr;
    if (entry.compressed) {
      const zlib = require('zlib');
      finalBytes = zlib.gunzipSync(binaryStr);
    }
    const ext = {
      'image/png': '.png',
      'image/jpeg': '.jpg',
      'image/webp': '.webp',
      'image/svg+xml': '.svg',
      'font/woff2': '.woff2',
      'font/woff': '.woff',
      'application/javascript': '.js',
      'text/css': '.css',
    }[entry.mime] || '.bin';
    fs.writeFileSync(`extracted/assets/${uuid}${ext}`, finalBytes);
  }
  console.log('assets extracted:', Object.keys(manifest).length);
}

if (extRaw) {
  const ext = JSON.parse(extRaw);
  fs.writeFileSync('extracted/ext_resources.json', JSON.stringify(ext, null, 2));
  console.log('ext_resources:', ext.length);
}
