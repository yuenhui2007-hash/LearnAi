const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

let updated = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  if (!content.includes('external-resources')) return;
  if (content.includes('ext-toggle')) return; // Already updated
  
  // Replace with collapsible version
  content = content.replace(
    /<div class="external-resources">\s*<h4>🔗 External Resources<\/h4>\s*<ul>([\s\S]*?)<\/ul>\s*<\/div>/,
    `<div class="external-resources">
<button class="ext-toggle" onclick="this.classList.toggle('active');this.nextElementSibling.classList.toggle('open')">🔗 External Resources</button>
<div class="ext-content">
<ul>$1</ul>
</div>
</div>`
  );
  
  fs.writeFileSync(filepath, content);
  updated++;
});

console.log(`Updated ${updated} files to collapsible external resources`);
