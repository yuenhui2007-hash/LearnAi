const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html'));

let updated = 0;

// Pattern to match back button links that go to subject.html
const backBtnPattern = /<a href="\.\.\/subject\.html\?id=[^"]*" class="back-btn">← Back to [^<]*<\/a>/g;

// Replacement: use history.back() to go back to the previous page
const replacement = '<a href="javascript:history.back()" class="back-btn">← Back</a>';

for (const file of files) {
  const filePath = path.join(notesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (backBtnPattern.test(content)) {
    content = content.replace(backBtnPattern, replacement);
    fs.writeFileSync(filePath, content);
    updated++;
  }
}

console.log(`Updated ${updated} note files with dynamic back button.`);
