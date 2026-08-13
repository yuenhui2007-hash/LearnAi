#!/usr/bin/env node
// Fix ZNotes content structure — move out of exam-tips div
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

let fixed = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Check if content has the bad structure: worked-example inside exam-tips div
  if (!content.includes('worked-example') || !content.includes('exam-tips')) {
    return;
  }

  // Check if worked-example is inside exam-tips div
  const workedIdx = content.indexOf('class="worked-example"');
  const examTipsIdx = content.indexOf('class="exam-tips"');
  const examTipsClose = content.indexOf('</div>', examTipsIdx);

  if (workedIdx > examTipsIdx && workedIdx < examTipsClose) {
    // Bad structure — worked-example is nested inside exam-tips
    // Extract the ZNotes content
    const znotesStart = content.indexOf('<div class="worked-example">', examTipsIdx);
    const znotesEnd = content.indexOf('<h2>Exam Tips</h2>', znotesStart);

    if (znotesStart > 0 && znotesEnd > 0) {
      const znotesContent = content.substring(znotesStart, znotesEnd);

      // Remove ZNotes content from inside exam-tips
      content = content.substring(0, znotesStart) + content.substring(znotesEnd);

      // Insert ZNotes content BEFORE the exam-tips div
      const examTipsDivIdx = content.indexOf('<div class="exam-tips">');
      if (examTipsDivIdx > 0) {
        content = content.substring(0, examTipsDivIdx) + znotesContent + '\n' + content.substring(examTipsDivIdx);
        fs.writeFileSync(filepath, content);
        fixed++;
      }
    }
  }
});

console.log(`Fixed structure in ${fixed} files`);
