const fs = require('fs');
const path = require('path');

const { subjects } = require('./js/data.js');

const notesDir = path.join(__dirname, 'notes');

const createdFiles = [];
const missingFiles = [];

// For each subject, find shared topics and create level-specific copies
Object.keys(subjects).forEach(subjectId => {
    const subject = subjects[subjectId];
    subject.topics.forEach(topic => {
        if (topic.alevel && topic.igcse) {
            const baseName = `${subjectId}-${topic.id}`;
            const origPath = path.join(notesDir, `${baseName}.html`);

            if (!fs.existsSync(origPath)) {
                missingFiles.push(baseName);
                return;
            }

            let content = fs.readFileSync(origPath, 'utf-8');

            // Extract title from content for replacement
            const titleMatch = content.match(/<title>([^<]+)<\/title>/);
            const origTitle = titleMatch ? titleMatch[1] : `${topic.title} — ${subject.name} Notes | LearnAI`;

            // --- A-Level version ---
            let aContent = content;
            // Update title
            const aTitle = origTitle.replace(/ — [^|]+ \| LearnAI/, ` — A-Level | LearnAI`)
                .replace(/ — ${subject.name} Notes \| LearnAI/, ` — A-Level | LearnAI`);
            aContent = aContent.replace(/<title>[^<]+<\/title>/, `<title>${aTitle}</title>`);

            // Replace level-badges div with A-Level only badge
            const badgeReplacementA = `<div class="level-badges">\n    <span class="level-badge badge-as">AS Level</span>\n  </div>`;
            aContent = aContent.replace(
                /<div class="level-badges">[\s\S]*?<\/div>/,
                badgeReplacementA
            );

            const aPath = path.join(notesDir, `${baseName}-a.html`);
            fs.writeFileSync(aPath, aContent);
            createdFiles.push(`${baseName}-a.html`);

            // --- IGCSE version ---
            let igcseContent = content;
            const igcseTitle = origTitle.replace(/ — [^|]+ \| LearnAI/, ` — IGCSE | LearnAI`)
                .replace(/ — ${subject.name} Notes \| LearnAI/, ` — IGCSE | LearnAI`);
            igcseContent = igcseContent.replace(/<title>[^<]+<\/title>/, `<title>${igcseTitle}</title>`);

            const badgeReplacementI = `<div class="level-badges">\n    <span class="level-badge badge-igcse">IGCSE</span>\n  </div>`;
            igcseContent = igcseContent.replace(
                /<div class="level-badges">[\s\S]*?<\/div>/,
                badgeReplacementI
            );

            const igcsePath = path.join(notesDir, `${baseName}-igcse.html`);
            fs.writeFileSync(igcsePath, igcseContent);
            createdFiles.push(`${baseName}-igcse.html`);
        }
    });
});

console.log('=== Created files ===');
console.log(`Total: ${createdFiles.length}`);
if (missingFiles.length > 0) {
    console.log('\n=== Missing original files ===');
    missingFiles.forEach(f => console.log(f));
}
