/* Writes a short plain-text list of what failed (no screenshots or
   recordings) to failures-summary.txt, so it is small enough to share. */
const fs = require('fs');
const strip = s => String(s || '').replace(/\u001b\[[0-9;]*m/g, '');

class SummaryReporter {
  constructor() { this.rows = []; this.counts = { passed: 0, failed: 0, skipped: 0, flaky: 0 }; }
  onTestEnd(test, result) {
    const outcome = test.outcome();
    if (outcome === 'expected') this.counts.passed++;
    else if (outcome === 'skipped') this.counts.skipped++;
    else if (outcome === 'flaky') this.counts.flaky++;
    else if (result.status !== 'passed' && result.retry === test.retries) {
      this.counts.failed++;
      const err = strip((result.error && (result.error.message || result.error.value)) || '')
        .split('\n').map(l => l.trim()).filter(Boolean).slice(0, 16).join('\n    ');
      this.rows.push('[' + test.parent.project().name + '] ' + test.titlePath().slice(2).join(' > ') + '\n    ' + err);
    }
  }
  onEnd() {
    const c = this.counts;
    const head = 'Passed: ' + c.passed + '   Failed: ' + c.failed + '   Skipped: ' + c.skipped + '   Flaky: ' + c.flaky + '\n\n';
    fs.writeFileSync('failures-summary.txt', head + (this.rows.join('\n\n') || 'No failures.') + '\n');
    console.log('\nShort summary saved to browser-tests/failures-summary.txt');
  }
}
module.exports = SummaryReporter;
