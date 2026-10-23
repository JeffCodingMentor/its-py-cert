// Verify published data directly; private authoring sources are not required.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const values = {};
for (const [file, key] of [
  ['questions.js', 'ITS_QUESTION_SOURCE'],
  ['questions-en.js', 'ITS_QUESTION_SOURCE_EN'],
  ['explanations.js', 'ITS_EXPLANATIONS'],
]) {
  const output = fs.readFileSync(path.join(root, 'assets', file), 'utf8');
  assert.ok(!/[^\x00-\x7f]/.test(output), `${file} contains unencoded Unicode`);
  assert.ok(!output.includes('sourceMappingURL'), `${file} exposes a source map`);
  assert.ok(!output.includes('eval(') && !output.includes('new Function'), 'Decoder must not evaluate text');
  const context = { window: {}, atob, TextDecoder };
  vm.createContext(context);
  vm.runInContext(output, context, { timeout: 5000 });
  values[key] = context.window[key];
  assert.ok(values[key], `${file} did not restore its expected data`);
  const version = createHash('sha256').update(output).digest('hex').slice(0, 12);
  assert.ok(html.includes(`src="./assets/${file}?v=${version}"`), `Stale script URL: ${file}`);
}
assert.equal(typeof values.ITS_QUESTION_SOURCE, 'string');
assert.equal(typeof values.ITS_QUESTION_SOURCE_EN, 'string');
assert.ok(values.ITS_QUESTION_SOURCE.length > 1000);
assert.ok(values.ITS_QUESTION_SOURCE_EN.length > 1000);
assert.ok(!values.ITS_QUESTION_SOURCE.includes(String.fromCharCode(0xfffd)));
assert.ok(!values.ITS_QUESTION_SOURCE_EN.includes(String.fromCharCode(0xfffd)));
assert.equal(Object.keys(values.ITS_EXPLANATIONS).length, 82);
assert.equal(typeof values.ITS_EXPLANATIONS['9']['zh-Hant'], 'string');
assert.equal(typeof values.ITS_EXPLANATIONS['9'].en, 'string');
console.log('PASS: encoded-only data files, safe decoders, Unicode restoration, and current cache versions.');
