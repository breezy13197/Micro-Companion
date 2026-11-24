#!/usr/bin/env node
// Syntax check that runs automatically after Claude edits a file.
//
// What it does: when Claude saves a .js file, or an .html page with code
// written inside it, this reads the code and checks it is valid JavaScript.
// It does not run the code; it only checks the grammar, like a spell-checker.
//
// Why: a single missing bracket or comma can blank out an entire companion
// page for students. This catches it within seconds of the edit, instead of
// in GitHub's browser tests or (worse) after students open the page.
//
// If it finds a problem, it tells Claude exactly where, so Claude fixes it
// straight away. If everything is fine, it stays silent.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

let input = '';
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
  let filePath;
  try {
    filePath = JSON.parse(input).tool_input.file_path;
  } catch (e) {
    process.exit(0); // Not something we can check; stay out of the way.
  }
  if (!filePath) process.exit(0);

  const ext = path.extname(filePath).toLowerCase();
  if (ext !== '.js' && ext !== '.html') process.exit(0);

  let source;
  try {
    source = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    process.exit(0); // File was deleted or moved; nothing to check.
  }

  const name = path.basename(filePath);
  const problems = [];

  // Compiles the code without running it. Throws on a grammar mistake.
  function check(code, lineOffset, label) {
    try {
      new vm.Script(code, { filename: name, lineOffset: lineOffset });
    } catch (err) {
      if (!(err instanceof SyntaxError)) return;
      // The first line of the stack names "file:line" where it went wrong.
      const where = (err.stack || '').split('\n')[0];
      problems.push(`${label}: ${err.message}\n  at ${where}`);
    }
  }

  if (ext === '.js') {
    check(source, 0, name);
  } else {
    // Find each <script> ... </script> block that has code written inside
    // it (not ones that just load another file with src="...").
    const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
    let m;
    while ((m = re.exec(source)) !== null) {
      const attrs = m[1];
      const code = m[2];
      if (/\bsrc\s*=/i.test(attrs)) continue;
      // Skip blocks that hold data rather than ordinary JavaScript.
      const type = (attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i) || [])[1];
      if (type && !/^(text|application)\/(java|ecma)script$/i.test(type)) continue;
      if (!code.trim()) continue;
      // Line number where this block's code starts, so errors point to the
      // right line of the .html file.
      const codeStart = m.index + m[0].indexOf('>') + 1;
      const startLine = source.slice(0, codeStart).split('\n').length - 1;
      check(code, startLine, `${name} (script starting on line ${startLine + 1})`);
    }
  }

  if (problems.length) {
    // Exit code 2 sends this message back to Claude so it fixes the mistake.
    process.stderr.write(
      'Syntax check failed. The page will not work until this is fixed:\n\n' +
      problems.join('\n\n') + '\n'
    );
    process.exit(2);
  }
  process.exit(0);
});
