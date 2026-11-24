#!/usr/bin/env node
// Counts which kinds of hands-on activity every companion already uses.
//
// Usage (from the project folder):  node .claude/skills/new-companion/scripts/activity-inventory.js
//
// Why: AGENTS.md asks for a variety of activity types across modules AND
// across companions. This table shows what is already common (so a new
// companion can lean on the less-used kinds) before any activity is planned.
//
// It only reads files. It never changes anything.

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..', '..', '..');
const BUILDERS = {
  dnd: 'drag & drop',
  sort: 'sort into bins',
  order: 'put steps in order',
  fill: 'fill in the blank',
  explore: 'clickable diagram',
  stages: 'staged case',
  stepper: 'step-through animation',
  predict: 'predict first',
};

const pages = fs.readdirSync(root)
  .filter((f) => f.endsWith('.html') && fs.existsSync(path.join(root, 'banks', f.replace(/\.html$/, '.manifest.js'))))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const rows = pages.map((f) => {
  const html = fs.readFileSync(path.join(root, f), 'utf8');
  const counts = {};
  Object.keys(BUILDERS).forEach((b) => {
    counts[b] = (html.match(new RegExp(`Act\\.${b}\\(`, 'g')) || []).length;
  });
  // How many graded activities the manifest lists for this companion.
  const manifest = fs.readFileSync(path.join(root, 'banks', f.replace(/\.html$/, '.manifest.js')), 'utf8');
  counts.total = (manifest.match(/["']?activity["']?\s*:/g) || []).length;
  return { name: f.replace(/\.html$/, ''), counts };
});

const cols = Object.keys(BUILDERS).concat('total');
const pad = (s, n) => String(s).padEnd(n);
console.log('\nActivity builders used per companion (number of times each is called)\n');
console.log(pad('companion', 14) + cols.map((c) => pad(c, 9)).join(''));
rows.forEach((r) => console.log(pad(r.name, 14) + cols.map((c) => pad(r.counts[c] || '.', 9)).join('')));
const totals = {};
cols.forEach((c) => { totals[c] = rows.reduce((n, r) => n + r.counts[c], 0); });
console.log(pad('TOTAL', 14) + cols.map((c) => pad(totals[c], 9)).join(''));

console.log('\nWhat each builder is:');
Object.keys(BUILDERS).forEach((c) => console.log(`  ${pad(c, 9)}${BUILDERS[c]}`));
console.log(`  ${pad('total', 9)}graded activities listed in the companion's manifest`);
const least = Object.keys(BUILDERS).sort((a, b) => totals[a] - totals[b]).slice(0, 3);
console.log(`\nLeast used across the project: ${least.map((c) => `${c} (${BUILDERS[c]})`).join(', ')}.`);
console.log('Note: "gate" is not listed; it locks a step until a choice is made and is used inside other activities.');
console.log('Counts are calls in the page code; one activity can call more than one builder.\n');
