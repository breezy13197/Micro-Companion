#!/usr/bin/env node
// Checks one companion's question bank, manifest and page against each other.
//
// Usage (from the project folder):   node .claude/skills/new-companion/scripts/check-companion.js mycoses
//
// Why this exists: a manifest that points at a checkpoint or concept that
// does not exist still loads without any error, but students can then never
// reach 100% (architecture doc, section 14.4). Those mismatches are easy to
// make and hard to see by eye, so this finds them in about a second.
//
// ERRORS   mean something is broken and must be fixed.
// WARNINGS are things a person should look at (for example a stem that uses
//          "NOT"), but may be fine.
//
// It only reads files. It never changes anything.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const topic = process.argv[2];
if (!topic) {
  console.error('Give the topic id, for example: node check-companion.js mycoses');
  process.exit(1);
}

const root = path.resolve(__dirname, '..', '..', '..', '..');
const bankFile = path.join(root, 'banks', topic + '.js');
const manifestFile = path.join(root, 'banks', topic + '.manifest.js');
const htmlFile = path.join(root, topic + '.html');

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// ---- Load the bank and manifest the way a browser would, without a browser.
const ctx = { window: {}, console: { log() {}, warn() {}, error() {} } };
vm.createContext(ctx);
for (const f of [bankFile, manifestFile]) {
  if (!fs.existsSync(f)) {
    console.error('Missing file: ' + path.relative(root, f));
    process.exit(1);
  }
  try {
    vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: path.basename(f) });
  } catch (e) {
    console.error('Could not read ' + path.basename(f) + ': ' + e.message);
    process.exit(1);
  }
}
const { TOPIC_ID, CHECKPOINTS, CARDS, POOL, MANIFEST } = ctx;

// ---- Basic shape
if (TOPIC_ID !== topic) err(`TOPIC_ID in the bank is "${TOPIC_ID}", expected "${topic}".`);
if (!CHECKPOINTS || typeof CHECKPOINTS !== 'object') err('The bank has no CHECKPOINTS object.');
if (!Array.isArray(CARDS)) err('The bank has no CARDS list.');
if (!Array.isArray(POOL)) err('The bank has no POOL list.');
if (!MANIFEST || !Array.isArray(MANIFEST.modules)) err('The manifest has no MANIFEST.modules list.');
if (errors.length) report();

if (MANIFEST.topic !== topic) err(`MANIFEST.topic is "${MANIFEST.topic}", expected "${topic}".`);
if (MANIFEST.file && MANIFEST.file !== topic + '.html') err(`MANIFEST.file is "${MANIFEST.file}", expected "${topic}.html".`);

// ---- Manifest structure (architecture doc sections 14.6 and 15.4)
const sectionKeys = new Set();
const quizValues = new Set();
const activityNames = [];
const usedChecks = new Set();
MANIFEST.modules.forEach((m) => {
  if (!Array.isArray(m.sections)) { err(`Module "${m.id}" has no sections list.`); return; }
  m.sections.forEach((s) => {
    if (sectionKeys.has(s.key)) err(`Section key "${s.key}" is used more than once.`);
    sectionKeys.add(s.key);
    (s.checks || []).forEach((c) => {
      if (!CHECKPOINTS[c]) err(`Section "${s.key}" lists checkpoint "${c}", which is not in CHECKPOINTS.`);
      if (usedChecks.has(c)) warn(`Checkpoint "${c}" is listed in more than one section.`);
      usedChecks.add(c);
    });
    if (s.quiz) quizValues.add(s.quiz);
    if (s.activity) {
      if (activityNames.includes(s.activity)) err(`Activity name "${s.activity}" is used more than once.`);
      if (/_(v|n|g)$/.test(s.activity)) err(`Activity name "${s.activity}" must not end in _v, _n or _g (doc section 9).`);
      activityNames.push(s.activity);
    }
  });
  if (/^m\d/.test(m.id)) {
    if (!m.sections.some((s) => s.key === m.id + 'home')) err(`Module "${m.id}" has no "${m.id}home" overview section.`);
    if (!m.sections.some((s) => s.quiz === m.id)) warn(`Module "${m.id}" has no end-of-module quiz.`);
  }
});
if (!sectionKeys.has('start') && !sectionKeys.has('welcome')) err('No Start page section (key "start").');
if (!sectionKeys.has('flashcards')) err('No section with key "flashcards".');
if (!quizValues.has('final')) warn('No final mastery exam (a section with quiz:"final").');
Object.keys(CHECKPOINTS).forEach((c) => {
  if (!usedChecks.has(c)) warn(`Checkpoint "${c}" is in the bank but no section lists it, so it never counts toward progress.`);
});

// ---- Question pool vs manifest
const poolModules = new Set(POOL.map((q) => q.m));
const poolAreas = new Set(POOL.map((q) => q.area));
quizValues.forEach((qv) => {
  if (qv !== 'final' && !poolModules.has(qv)) err(`A section has quiz:"${qv}", but no POOL question has m:"${qv}".`);
});
const areaSection = MANIFEST.areaSection || {};
Object.entries(areaSection).forEach(([area, key]) => {
  if (!poolAreas.has(area)) err(`areaSection names "${area}", but no POOL question uses that exact area (spelling and capitals must match).`);
  if (!sectionKeys.has(key)) err(`areaSection sends "${area}" to section "${key}", which does not exist.`);
});
poolAreas.forEach((a) => {
  if (!(a in areaSection)) err(`POOL area "${a}" has no entry in areaSection, so "revisit this" has nowhere to send students.`);
});

// ---- IDs (doc section 4)
const prefixes = new Set();
const seen = new Set();
POOL.forEach((q) => {
  if (!q.id) { err('A POOL question has no id.'); return; }
  if (seen.has(q.id)) err(`Question id "${q.id}" is used more than once.`);
  seen.add(q.id);
  const m = /^([A-Z0-9]+)-(\d{3,})$/.exec(q.id);
  if (!m) warn(`Question id "${q.id}" does not follow the <TOPIC>-### pattern. Never rename an existing id; use the pattern for new companions.`);
  else prefixes.add(m[1]);
});
if (prefixes.size > 1) warn(`Question ids use more than one prefix: ${[...prefixes].join(', ')}.`);
CARDS.forEach((c) => {
  if (!c.id) err('A flashcard has no id.');
  else if (seen.has(c.id)) err(`Id "${c.id}" is used more than once.`);
  else if (!/^[A-Z0-9]+-CARD-\d{2,}$/.test(c.id)) warn(`Flashcard id "${c.id}" does not follow the <TOPIC>-CARD-## pattern. Never rename an existing id; use the pattern for new companions.`);
  seen.add(c.id);
  if (!c.t || !c.d) err(`Flashcard "${c.id}" is missing its front (t) or back (d).`);
});

// ---- Question-writing rules (doc section 10 and docs/Question Writing Guidelines.docx)
const ABSOLUTE = /\b(always|never)\b/i;
const VAGUE = /\b(frequently|occasionally|usually|commonly)\b/i;
const NEGATIVE = /\b(NOT|EXCEPT|INCORRECT)\b/; // capitals only, as written in stems
const AOTA = /\b(all|none) of the above\b/i;
const answerSpots = [0, 0, 0, 0, 0];

function checkItem(label, stem, options, answer, why) {
  if (!Array.isArray(options)) { err(`${label}: no options list.`); return; }
  if (options.length < 3 || options.length > 5) err(`${label}: has ${options.length} choices; the guidelines allow 3 to 5.`);
  else if (options.length !== 4) warn(`${label}: has ${options.length} choices; this project's standard is 4 (doc section 10).`);
  if (typeof answer !== 'number' || answer < 0 || answer >= options.length) err(`${label}: answer number ${answer} does not point at a choice.`);
  else if (answer < answerSpots.length) answerSpots[answer]++;
  if (!why || !String(why).trim()) err(`${label}: no "why" explanation.`);
  if (new Set(options.map((o) => String(o).trim().toLowerCase())).size !== options.length) err(`${label}: two choices are identical.`);
  const text = [stem || ''].concat(options).join(' ');
  if (AOTA.test(text)) err(`${label}: uses "All/None of the above".`);
  if (stem && NEGATIVE.test(stem)) warn(`${label}: stem uses negative wording (NOT/EXCEPT/INCORRECT).`);
  if (ABSOLUTE.test(options.join(' '))) warn(`${label}: a choice uses an absolute word (always/never).`);
  if (VAGUE.test(text)) warn(`${label}: uses a vague word (frequently/usually/commonly/occasionally).`);
  const lens = options.map((o) => String(o).length);
  if (Math.max(...lens) > 3 * Math.min(...lens) && Math.max(...lens) - Math.min(...lens) > 60) {
    warn(`${label}: choices differ a lot in length, which can give away the answer.`);
  }
}
POOL.forEach((q) => {
  checkItem(q.id, q.stem, q.options, q.answer, q.why);
  if (!['concept', 'application', 'integration'].includes(q.level)) err(`${q.id}: level is "${q.level}"; use concept, application or integration.`);
  if (!q.area) err(`${q.id}: no area.`);
  if (!q.m) err(`${q.id}: no module (m).`);
});
Object.entries(CHECKPOINTS).forEach(([k, c]) => checkItem('Checkpoint ' + k, c.q || c.stem, c.options, c.answer, c.why));

// Each concept area needs at least 2 questions so the targeted (adaptive)
// review round can offer a second attempt (doc section 8, "The targeted round").
const perArea = {};
POOL.forEach((q) => { perArea[q.area] = (perArea[q.area] || 0) + 1; });
Object.entries(perArea).forEach(([a, n]) => {
  if (n < 2) warn(`Area "${a}" has only ${n} question; the adaptive review needs at least 2 to re-test it.`);
});

// Final exam needs enough questions of each level (default mix 8/10/7, doc section 10).
const levels = { concept: 0, application: 0, integration: 0 };
POOL.forEach((q) => { if (q.level in levels) levels[q.level]++; });
[['concept', 8], ['application', 10], ['integration', 7]].forEach(([l, n]) => {
  if (levels[l] < n) warn(`Only ${levels[l]} "${l}" questions; the default final exam asks for ${n}.`);
});

// ---- The page itself
if (!fs.existsSync(htmlFile)) {
  warn(`${topic}.html does not exist yet, so the page checks were skipped.`);
} else {
  const html = fs.readFileSync(htmlFile, 'utf8');
  sectionKeys.forEach((k) => {
    if (!new RegExp(`data-key=["']${k}["']`).test(html)) err(`The page has no <section data-key="${k}"> for manifest section "${k}".`);
  });
  // The engine only draws a checkpoint's answer buttons where the page has a
  // matching data-check="<id>" element, so a missing one makes its section
  // impossible to finish (shared/engine.js, the [data-check] loop).
  usedChecks.forEach((c) => {
    if (!new RegExp(`data-check=["']${c}["']`).test(html)) err(`Checkpoint "${c}" is required by the manifest, but ${topic}.html has no data-check="${c}" element, so students can never answer it.`);
  });
  activityNames.forEach((a) => {
    if (!html.includes(a)) err(`Activity "${a}" is in the manifest but never mentioned in ${topic}.html.`);
  });
  ['banks/' + topic + '.js', 'banks/' + topic + '.manifest.js'].forEach((src) => {
    if (!html.includes(`src="${src}"`)) err(`${topic}.html does not load ${src}.`);
  });
  if (!/initWelcome\s*\(/.test(html)) err(`${topic}.html never calls initWelcome() (doc section 15.3).`);
}

// ---- The hub (doc section 14.5)
const hub = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (!hub.includes(`HUB.capture('${topic}')`)) err(`index.html does not load this companion (add its bank, manifest and HUB.capture('${topic}') lines).`);
if (!new RegExp(`\\b${topic}\\s*:\\s*\\{\\s*title`).test(hub)) err(`index.html has no HUB.META entry for "${topic}".`);

// ---- American spelling (AGENTS.md)
const BRITISH = /\b(colou?rs?\b(?<=colours?)|behaviour|favour|centre|haem\w*|anaem\w*|oesophag\w*|foet\w*|faec\w*|leukaem\w*|paediatric\w*|oedema|organis(e|ed|es|ing|ation)|recognis\w*|analys(e|ed|es|ing)|labelled|modelled|travelled|programme|grey|tumour|fibre|litre|metre|defence|licence)\b/gi;
const allText = [bankFile, manifestFile, htmlFile].filter(fs.existsSync).map((f) => fs.readFileSync(f, 'utf8')).join('\n');
// Organism names keep their Latin spelling (Haemophilus, Enterococcus faecalis).
const LATIN = /^(haemophil|haemagog|haemonch|haemaphysal|faecal|faecium|faecis)/;
const brits = new Set((allText.match(BRITISH) || []).map((w) => w.toLowerCase()).filter((w) => !LATIN.test(w)));
if (brits.size) warn(`British spellings found (use American English): ${[...brits].join(', ')}.`);

report();

function report() {
  const total = answerSpots.reduce((a, b) => a + b, 0);
  console.log(`\nCompanion check: ${topic}`);
  if (POOL && CARDS && CHECKPOINTS) {
    console.log(`  ${POOL.length} quiz questions, ${Object.keys(CHECKPOINTS).length} checkpoints, ${CARDS.length} flashcards, ${activityNames.length} activities`);
  }
  if (total) {
    console.log('  Correct-answer position in the bank: ' + ['A', 'B', 'C', 'D'].map((L, i) => `${L} ${answerSpots[i]}`).join(', ') +
      ' (the page shuffles choices for students, so this only matters for exports)');
  }
  if (errors.length) {
    console.log(`\nERRORS (${errors.length}) - these must be fixed:`);
    errors.forEach((e) => console.log('  - ' + e));
  }
  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}) - have a person look at these:`);
    warnings.forEach((w) => console.log('  - ' + w));
  }
  if (!errors.length && !warnings.length) console.log('\nEverything matches.');
  process.exit(errors.length ? 1 : 0);
}
