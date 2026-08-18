const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

// ===================== IB NOTES =====================
// Replace the entire "External Resources" section in IB notes with free-only links
const ibExternalOld = `<div class="notes-section">
<h2>External Resources</h2>
<div class="external-resources">
<button class="ext-toggle" onclick="this.classList.toggle('active');this.nextElementSibling.classList.toggle('open')">🔗 External Resources</button>
<div class="ext-content">
<ul>
<li><a href="https://www.revisionvillage.com/" target="_blank" rel="noopener">Revision Village</a> — IB-specific video tutorials & question bank</li>
<li><a href="https://ibdocuments.com/" target="_blank" rel="noopener">IB Documents</a> — Past papers, mark schemes & syllabi</li>
<li><a href="https://ib.academy/" target="_blank" rel="noopener">IB Academy</a> — Study guides and free resources</li>`;

const ibExternalNew = `<div class="notes-section">
<h2>External Resources</h2>
<div class="external-resources">
<button class="ext-toggle" onclick="this.classList.toggle('active');this.nextElementSibling.classList.toggle('open')">🔗 Free Past Papers & Resources</button>
<div class="ext-content">
<ul>
<li><a href="https://ibdocuments.com/" target="_blank" rel="noopener">IB Documents</a> — Free past papers, mark schemes & syllabi</li>
<li><a href="https://pastpapers.co/ib/" target="_blank" rel="noopener">PastPapers.co (IB)</a> — Free IB past papers by subject</li>
<li><a href="https://papers.xtremepape.rs/" target="_blank" rel="noopener">XtremePapers</a> — Free past papers & mark schemes</li>
<li><a href="https://freeexampapers.com/" target="_blank" rel="noopener">Free Exam Papers</a> — Free IB past papers</li>`;

// Also handle master-revision files which may have multiple resource sections
const ibRevisionVillageLink = `<li><a href="https://www.revisionvillage.com/" target="_blank" rel="noopener">Revision Village</a> — IB-specific video tutorials & question bank</li>`;
const ibRevisionVillageReplacement = `<li><a href="https://ibdocuments.com/" target="_blank" rel="noopener">IB Documents</a> — Free past papers, mark schemes & syllabi</li>
<li><a href="https://pastpapers.co/ib/" target="_blank" rel="noopener">PastPapers.co (IB)</a> — Free IB past papers by subject</li>`;

// ===================== EDEXCEL SUMMARIES =====================
// Add free past paper links to Edexcel summary files that just say "Practise past paper questions"
const edexcelTipOld = `<li>Practise past paper questions on this topic</li>`;
const edexcelTipNew = `<li><a href="https://pastpapers.co/edexcel/" target="_blank" rel="noopener">Practise free past paper questions</a> on this topic (PastPapers.co)</li>`;

// ===================== PROCESS =====================
let ibCount = 0;
let edexcelCount = 0;

// Process IB files
const ibFiles = fs.readdirSync(notesDir).filter(f => f.startsWith('ib-') && f.endsWith('.html'));
for (const file of ibFiles) {
  const filePath = path.join(notesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace full external resources block (template-generated notes)
  if (content.includes(ibExternalOld)) {
    content = content.split(ibExternalOld).join(ibExternalNew);
    modified = true;
  }

  // Replace standalone Revision Village link (master-revision and other notes)
  if (content.includes(ibRevisionVillageLink)) {
    content = content.split(ibRevisionVillageLink).join(ibRevisionVillageReplacement);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    ibCount++;
  }
}

// Process Edexcel summary files
const edexcelFiles = fs.readdirSync(notesDir).filter(f => f.startsWith('edexcel-') && f.endsWith('.html'));
for (const file of edexcelFiles) {
  const filePath = path.join(notesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (content.includes(edexcelTipOld)) {
    content = content.split(edexcelTipOld).join(edexcelTipNew);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    edexcelCount++;
  }
}

console.log(`Updated ${ibCount} IB files with free past paper resources.`);
console.log(`Updated ${edexcelCount} Edexcel files with free past paper links.`);
