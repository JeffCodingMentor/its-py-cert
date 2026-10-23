// Encode the private local data sources for the static website. No packages required.
// This makes direct source reading harder; it is not encryption or access control.
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const check = args.includes('--check');
const sourceIndex = args.indexOf('--source-dir');
if (sourceIndex >= 0 && (!args[sourceIndex + 1] || args[sourceIndex + 1].startsWith('--'))) {
  throw new Error('--source-dir requires a directory path');
}
const sourceDir = sourceIndex >= 0
  ? path.resolve(args[sourceIndex + 1])
  : path.resolve(root, '..', 'docs', 'website-source');
const specs = [
  ['questions.js', 'ITS_QUESTION_SOURCE', 'string'],
  ['questions-en.js', 'ITS_QUESTION_SOURCE_EN', 'string'],
  ['explanations.js', 'ITS_EXPLANATIONS', 'object'],
];
const hash = (value) => createHash('sha256').update(value).digest();
const jobs = [];
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

for (const [file, globalName, type] of specs) {
  const sourcePath = path.join(sourceDir, file);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Local source not found: ${sourcePath}. Use --source-dir for another location.`);
  }
  // These are trusted authoring files, evaluated only during the local build.
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(sourcePath, 'utf8'), context, { filename: sourcePath, timeout: 5000 });
  const value = context.window[globalName];
  if (typeof value !== type || value === null || (type === 'string' && !value.length)) {
    throw new Error(`Invalid source value in ${file}`);
  }
  if (type === 'object' && Object.keys(value).length !== 82) {
    throw new Error('Expected 82 bilingual explanations');
  }
  const plain = Buffer.from(JSON.stringify(value), 'utf8');
  const key = hash(Buffer.concat([Buffer.from(file), plain]));
  const encoded = Buffer.from(plain.map((byte, index) =>
    byte ^ key[index % key.length] ^ ((index * 17 + 31) & 255)));
  const output = '// Generated encoded data; edit local authoring sources, then run scripts/build-data.cjs.\n' +
    '(()=>{let a=atob("' + encoded.toString('base64') + '"),b=atob("' + key.toString('base64') +
    '"),c=Uint8Array.from(a,(d,e)=>d.charCodeAt(0)^b.charCodeAt(e%b.length)^((e*17+31)&255));window[atob("' +
    Buffer.from(globalName).toString('base64') + '")]=JSON.parse(new TextDecoder().decode(c))})();\n';
  // Verify the exact published loader, including Unicode, before writing any files.
  const decoded = { window: {}, atob, TextDecoder };
  vm.createContext(decoded);
  vm.runInContext(output, decoded, { timeout: 5000 });
  if (JSON.stringify(decoded.window[globalName]) !== plain.toString('utf8')) {
    throw new Error(`Encoded round trip failed: ${file}`);
  }
  const escaped = file.replaceAll('.', '\\.');
  const pattern = new RegExp('src="\\./assets/' + escaped + '(?:\\?[^\\"]*)?"', 'g');
  if ([...html.matchAll(pattern)].length !== 1) throw new Error(`Expected one script reference: ${file}`);
  const version = hash(output).toString('hex').slice(0, 12);
  html = html.replace(pattern, `src="./assets/${file}?v=${version}"`);
  jobs.push([path.join(root, 'assets', file), output]);
}
jobs.push([path.join(root, 'index.html'), html]);

for (const [file, output] of jobs) {
  if (check) {
    if (fs.readFileSync(file, 'utf8') !== output) {
      throw new Error(`Encoded output is out of date: ${path.relative(root, file)}. Run node scripts/build-data.cjs`);
    }
  } else {
    fs.writeFileSync(file, output, 'utf8');
  }
}
console.log(check
  ? 'PASS: all encoded outputs match local sources and content-versioned script URLs.'
  : 'Built three encoded data files; exact round trips passed and script URLs were refreshed.');
