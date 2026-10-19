// Run with Node.js; no packages or browser required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
for (const file of ['questions.js', 'questions-en.js', 'explanations.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'assets', file), 'utf8'), context);
}
// Exercise the production parser and grouping functions without starting the UI.
const app = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8');
vm.runInContext(app.slice(0, app.indexOf('  const byId')) +
  '\nwindow.parse = parseQuestions; window.groups = extractChoiceGroups; })();', context);
const chinese = context.window.parse(context.window.ITS_QUESTION_SOURCE);
const english = context.window.parse(context.window.ITS_QUESTION_SOURCE_EN);
assert.equal(chinese.length, 82);
assert.equal(english.length, 82);
assert.equal(new Set(english.map((q) => String(q.number))).size, 82);
const source = fs.readFileSync(path.join(root, 'ITS_Python_題庫詳解.md'), 'utf8');
const sections = source.split(/^## Q\d{2}\s*$/m).slice(1);
assert.equal(sections.length, 82);
assert.equal(Object.keys(context.window.ITS_EXPLANATIONS).length, 82);
chinese.forEach((question, index) => {
  const translated = english[index];
  assert.equal(translated.number, question.number);
  assert.equal(JSON.stringify(translated.answer), JSON.stringify(question.answer), `Answer: ${question.number}`);
  assert.equal(JSON.stringify(context.window.groups(translated)),
    JSON.stringify(context.window.groups(question)), `Choices: ${question.number}`);
  assert.ok(translated.body && translated.topic);
  assert.ok(!/[\u4e00-\u9fff]/u.test(translated.body + translated.topic), `Untranslated text: ${question.number}`);
  const explanation = context.window.ITS_EXPLANATIONS[String(question.number)];
  assert.ok(explanation, `Missing explanation: ${question.number}`);
  assert.equal(explanation['zh-Hant'], sections[index].match(/^- 中文：(.+)$/m)[1]);
  assert.equal(explanation.en, sections[index].match(/^- English: (.+)$/m)[1]);
});
console.log('PASS: all 82 bilingual questions have matching IDs, answers, choice groups, and source explanations.');
