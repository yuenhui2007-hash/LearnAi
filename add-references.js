#!/usr/bin/env node
// Add external references section to all detailed notes
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

const referencesMap = {
  physics: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.physicsandmathstutor.com/physics-revision/a-level/" target="_blank" rel="noopener">Physics & Maths Tutor</a> — Past papers & revision notes</li>
<li><a href="https://www.savemyexams.co.uk/notes/physics/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions & mark schemes</li>
<li><a href="https://znotes.org/cie-a-level-physics-9702/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/physics/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes & explanations</li>
<li><a href="https://simplestudy.ie/subject/physics" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  chemistry: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.chemguide.co.uk/" target="_blank" rel="noopener">Chemguide</a> — Detailed A-Level chemistry explanations</li>
<li><a href="https://www.savemyexams.co.uk/notes/chemistry/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions & mark schemes</li>
<li><a href="https://znotes.org/cie-a-level-chemistry-9701/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/chemistry/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/chemistry" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  biology: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.biologyguide.app/" target="_blank" rel="noopener">Biology Guide</a> — A-Level biology notes</li>
<li><a href="https://www.savemyexams.co.uk/notes/biology/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions & mark schemes</li>
<li><a href="https://znotes.org/cie-a-level-biology-9700/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/biology/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/biology" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  maths: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.physicsandmathstutor.com/maths-revision/a-level/" target="_blank" rel="noopener">Physics & Maths Tutor</a> — Past papers & solutions</li>
<li><a href="https://www.savemyexams.co.uk/notes/maths/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions & mark schemes</li>
<li><a href="https://znotes.org/cie-a-level-maths-9709/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/maths/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/maths" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  'additional-maths': `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.physicsandmathstutor.com/maths-revision/a-level/" target="_blank" rel="noopener">Physics & Maths Tutor</a> — Past papers & solutions</li>
<li><a href="https://www.savemyexams.co.uk/notes/maths/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-igcse-additional-maths-0606/" target="_blank" rel="noopener">ZNotes</a> — Condensed notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/maths/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
</ul>
</div>`,
  economics: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.tutor2u.net/economics/reference" target="_blank" rel="noopener">Tutor2u</a> — Economics reference & quizzes</li>
<li><a href="https://www.savemyexams.co.uk/notes/economics/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-a-level-economics-9708/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/economics/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/economics" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  business: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.tutor2u.net/business/reference" target="_blank" rel="noopener">Tutor2u</a> — Business reference & case studies</li>
<li><a href="https://www.savemyexams.co.uk/notes/business/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-a-level-business-9609/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/business/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
</ul>
</div>`,
  accounting: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.accountingcoach.com/" target="_blank" rel="noopener">Accounting Coach</a> — Free accounting lessons</li>
<li><a href="https://www.savemyexams.co.uk/notes/accounting/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-a-level-accounting-9706/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
</ul>
</div>`,
  english: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.bl.uk/romantics-and-victorians" target="_blank" rel="noopener">British Library</a> — Romantic & Victorian texts</li>
<li><a href="https://www.sparknotes.com/" target="_blank" rel="noopener">SparkNotes</a> — Literature guides & analysis</li>
<li><a href="https://www.savemyexams.co.uk/notes/english/" target="_blank" rel="noopener">SaveMyExams</a> — Essay techniques</li>
<li><a href="https://www.tutorchase.com/revision-notes/english/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
</ul>
</div>`,
  chinese: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.chinese-forums.com/" target="_blank" rel="noopener">Chinese Forums</a> — Language learning community</li>
<li><a href="https://www.savemyexams.co.uk/notes/chinese/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-a-level-chinese-9715/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
</ul>
</div>`,
  psychology: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.simplypsychology.org/" target="_blank" rel="noopener">Simply Psychology</a> — Psychology explanations & studies</li>
<li><a href="https://www.savemyexams.co.uk/notes/psychology/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-a-level-psychology-9990/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/psychology/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
</ul>
</div>`,
  history: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.johndclare.net/" target="_blank" rel="noopener">John D Clare</a> — Modern World History notes</li>
<li><a href="https://www.savemyexams.co.uk/notes/history/" target="_blank" rel="noopener">SaveMyExams</a> — Essay guidance</li>
<li><a href="https://znotes.org/cie-a-level-history-9389/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/history/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/history" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  geometry: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.physicsandmathstutor.com/maths-revision/gcse/" target="_blank" rel="noopener">Physics & Maths Tutor</a> — GCSE maths resources</li>
<li><a href="https://www.savemyexams.co.uk/notes/maths/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-igcse-maths-0580/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/maths/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/maths" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`,
  ict: `<div class="external-resources">
<h4>🔗 External Resources</h4>
<ul>
<li><a href="https://www.teach-ict.com/" target="_blank" rel="noopener">Teach-ICT</a> — Computing & ICT lessons</li>
<li><a href="https://www.savemyexams.co.uk/notes/computer-science/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions</li>
<li><a href="https://znotes.org/cie-igcse-ict-0417/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/computer-science/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/computer-science" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
</ul>
</div>`
};

let added = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  if (content.includes('external-resources')) return; // Already has it
  
  const subject = file.split('-')[0];
  const refs = referencesMap[subject];
  if (!refs) return;
  
  // Insert before closing </div></div></section> or before </body>
  const bodyClose = content.indexOf('</body>');
  if (bodyClose > 0) {
    // Find the notes-container closing div
    const containerClose = content.lastIndexOf('</div>', bodyClose);
    if (containerClose > 0) {
      content = content.slice(0, containerClose) + refs + '\n' + content.slice(containerClose);
      fs.writeFileSync(filepath, content);
      added++;
    }
  }
});

console.log(`Added external references to ${added} files`);
