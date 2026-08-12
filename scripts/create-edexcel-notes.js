const fs = require('fs');
const path = require('path');

// Extract edexcelSubjects from data.js manually
const dataContent = fs.readFileSync(path.join(__dirname, '..', 'js', 'data.js'), 'utf8');

// Find the edexcelSubjects object block
const startMatch = dataContent.match(/const edexcelSubjects = \{/);
if (!startMatch) {
  console.error('Could not find edexcelSubjects in data.js');
  process.exit(1);
}

const startIdx = startMatch.index + startMatch[0].length - 1;

// Find matching closing brace
let braceCount = 1;
let endIdx = startIdx + 1;
while (braceCount > 0 && endIdx < dataContent.length) {
  if (dataContent[endIdx] === '{') braceCount++;
  if (dataContent[endIdx] === '}') braceCount--;
  endIdx++;
}

const edexcelSubjectsStr = dataContent.substring(startIdx, endIdx);
let edexcelSubjects;
eval('edexcelSubjects = ' + edexcelSubjectsStr);

const notesDir = path.join(__dirname, '..', 'notes');

// Note template
function createNoteTemplate(subjectId, topicId, topicTitle, level, code, icon) {
  const levelUpper = level.toUpperCase();
  const levelBadge = level === 'ial' ? 'IAL' : level === 'igcse' ? 'IGCSE' : 'GCSE';
  const levelColor = level === 'ial' ? '#8b5cf6' : level === 'igcse' ? '#10b981' : '#f59e0b';
  const levelBg = level === 'ial' ? '#ede9fe' : level === 'igcse' ? '#dcfce7' : '#fef3c7';
  const levelTextColor = level === 'ial' ? '#5b21b6' : level === 'igcse' ? '#166534' : '#92400e';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="manifest" href="../manifest.json">
<meta name="theme-color" content="#6366f1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${topicTitle} — ${icon} ${subjectId.replace('edexcel-', '').replace(/^\w/, c => c.toUpperCase())} Notes | LearnAI</title>
<meta name="description" content="${topicTitle} notes for Edexcel ${code}. Detailed study notes and last-minute summary.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=4">
<link rel="stylesheet" href="../css/znotes-style.css?v=4">
<style>
.notes-page { padding: 120px 0 60px; background: var(--light); min-height: 100vh; }
.notes-container { max-width: 900px; margin: 0 auto; background: var(--white); padding: 48px; border-radius: var(--radius-xl); box-shadow: var(--shadow); }
.notes-header { margin-bottom: 40px; padding-bottom: 24px; border-bottom: 2px solid var(--gray-light); }
.notes-header h1 { font-size: 2rem; margin-bottom: 12px; }
.level-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.level-badge { padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
.badge-ial { background: ${levelBg}; color: ${levelTextColor}; }
.notes-section { margin-bottom: 40px; }
.notes-section h2 { font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--primary-light); }
.notes-section h3 { font-size: 1.1rem; color: var(--dark); margin: 24px 0 12px; }
.notes-section p { margin-bottom: 12px; line-height: 1.8; color: var(--dark-light); }
.notes-section ul { margin: 12px 0; padding-left: 24px; }
.notes-section ul li { margin-bottom: 8px; color: var(--dark-light); line-height: 1.7; }
.formula-box { background: var(--light); padding: 16px 20px; border-radius: var(--radius); border-left: 4px solid var(--primary); font-family: 'Courier New', monospace; margin: 16px 0; font-size: 0.95rem; }
.highlight-box { background: rgba(99,102,241,0.08); padding: 16px 20px; border-radius: var(--radius); margin: 16px 0; }
.highlight-box h4 { color: var(--primary); margin-bottom: 8px; font-size: 0.9rem; text-transform: uppercase; }
.summary-box { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 24px; border-radius: var(--radius-lg); margin: 32px 0; }
.summary-box h2 { color: #92400e; border-bottom-color: #f59e0b; }
.summary-box ul li { color: #78350f; }
.exam-tips { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 24px; border-radius: var(--radius-lg); margin: 32px 0; }
.exam-tips h2 { color: #1e40af; border-bottom-color: #3b82f6; }
.exam-tips ul li { color: #1e3a5f; }
.back-btn { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px; color: var(--primary); font-weight: 600; }
.coming-soon { text-align: center; padding: 80px 24px; }
.coming-soon-icon { font-size: 4rem; margin-bottom: 24px; }
.coming-soon h2 { font-size: 1.5rem; margin-bottom: 12px; color: var(--dark); }
.coming-soon p { color: var(--gray); max-width: 500px; margin: 0 auto 24px; }
@media (max-width: 768px) { .notes-container { padding: 24px; } }
</style>
</head>
<body>
<nav class="navbar" id="navbar">
<div class="container nav-container">
<a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a>
<button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
<ul class="nav-menu" id="navMenu">
<li><a href="../index.html" class="nav-link">Home</a></li>
<li><a href="../subjects.html" class="nav-link">Subjects</a></li>
<li><a href="../dashboard.html" class="nav-link">My Progress</a></li>
<li><a href="../planner.html" class="nav-link">Planner</a></li>
<li id="navAuth"><a href="../login.html" class="nav-link">Sign In</a></li>
</ul>
</div>
</nav>

<section class="notes-page">
<div class="container">
<a href="../subject.html?id=${subjectId}&level=${level}" class="back-btn">← Back to ${icon} ${subjectId.replace('edexcel-', '').replace(/^\w/, c => c.toUpperCase())} — ${levelUpper}</a>
<div class="notes-container">
<div class="notes-header">
<div class="level-badges">
<span class="level-badge badge-ial">${levelBadge}</span>
</div>
<h1>${topicTitle}</h1>
<p style="color:var(--gray)">${code}</p>
</div>

<div class="coming-soon">
<div class="coming-soon-icon">📝</div>
<h2>Notes Coming Soon</h2>
<p>We're building comprehensive ${topicTitle} notes for Edexcel ${levelUpper} (${code}). Check back soon for detailed explanations, formulas, and exam tips.</p>
<p style="margin-top:16px;font-size:0.85rem;color:#94a3b8;">In the meantime, try our <a href="../tutor.html" style="color:#6366f1;font-weight:600;">AI Tutor</a> for instant help with this topic.</p>
</div>

</div>
</div>
</section>

<script src="../js/theme.js?v=4"></script>
<script src="../js/auth.js?v=4"></script>
<script src="../js/mascot.js?v=4"></script>
<script src="../js/pwa.js?v=4"></script>
</body>
</html>`;
}

// Summary template
function createSummaryTemplate(subjectId, topicId, topicTitle, level, code, icon) {
  const levelUpper = level.toUpperCase();
  const levelBadge = level === 'ial' ? 'IAL' : level === 'igcse' ? 'IGCSE' : 'GCSE';
  const levelBg = level === 'ial' ? '#ede9fe' : level === 'igcse' ? '#dcfce7' : '#fef3c7';
  const levelTextColor = level === 'ial' ? '#5b21b6' : level === 'igcse' ? '#166534' : '#92400e';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="manifest" href="../manifest.json">
<meta name="theme-color" content="#6366f1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${topicTitle} — Last-Minute Summary | LearnAI</title>
<meta name="description" content="Quick summary of ${topicTitle} for Edexcel ${code}. Essential points for last-minute revision.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=4">
<link rel="stylesheet" href="../css/znotes-style.css?v=4">
<style>
.notes-page { padding: 120px 0 60px; background: var(--light); min-height: 100vh; }
.notes-container { max-width: 900px; margin: 0 auto; background: var(--white); padding: 48px; border-radius: var(--radius-xl); box-shadow: var(--shadow); }
.notes-header { margin-bottom: 40px; padding-bottom: 24px; border-bottom: 2px solid var(--gray-light); }
.notes-header h1 { font-size: 2rem; margin-bottom: 12px; }
.level-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
.level-badge { padding: 4px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
.badge-ial { background: ${levelBg}; color: ${levelTextColor}; }
.summary-box { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 24px; border-radius: var(--radius-lg); margin: 32px 0; }
.summary-box h2 { color: #92400e; border-bottom-color: #f59e0b; }
.summary-box ul li { color: #78350f; margin-bottom: 8px; line-height: 1.7; }
.back-btn { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px; color: var(--primary); font-weight: 600; }
.coming-soon { text-align: center; padding: 80px 24px; }
.coming-soon-icon { font-size: 4rem; margin-bottom: 24px; }
.coming-soon h2 { font-size: 1.5rem; margin-bottom: 12px; color: var(--dark); }
.coming-soon p { color: var(--gray); max-width: 500px; margin: 0 auto 24px; }
@media (max-width: 768px) { .notes-container { padding: 24px; } }
</style>
</head>
<body>
<nav class="navbar" id="navbar">
<div class="container nav-container">
<a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a>
<button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
<ul class="nav-menu" id="navMenu">
<li><a href="../index.html" class="nav-link">Home</a></li>
<li><a href="../subjects.html" class="nav-link">Subjects</a></li>
<li><a href="../dashboard.html" class="nav-link">My Progress</a></li>
<li><a href="../planner.html" class="nav-link">Planner</a></li>
<li id="navAuth"><a href="../login.html" class="nav-link">Sign In</a></li>
</ul>
</div>
</nav>

<section class="notes-page">
<div class="container">
<a href="../subject.html?id=${subjectId}&level=${level}" class="back-btn">← Back to ${icon} ${subjectId.replace('edexcel-', '').replace(/^\w/, c => c.toUpperCase())} — ${levelUpper}</a>
<div class="notes-container">
<div class="notes-header">
<div class="level-badges">
<span class="level-badge badge-ial">${levelBadge}</span>
<span class="level-badge" style="background:#fef3c7;color:#92400e;">Summary</span>
</div>
<h1>${topicTitle} — Last-Minute Summary</h1>
<p style="color:var(--gray)">${code}</p>
</div>

<div class="coming-soon">
<div class="coming-soon-icon">⚡</div>
<h2>Summary Coming Soon</h2>
<p>A concise summary of ${topicTitle} for Edexcel ${levelUpper} (${code}) is being prepared. Perfect for last-minute revision before your exam.</p>
</div>

</div>
</div>
</section>

<script src="../js/theme.js?v=4"></script>
<script src="../js/auth.js?v=4"></script>
<script src="../js/mascot.js?v=4"></script>
<script src="../js/pwa.js?v=4"></script>
</body>
</html>`;
}

let totalCreated = 0;

// Process each Edexcel subject
for (const [subjectId, subject] of Object.entries(edexcelSubjects)) {
  const icon = subject.icon;
  const codeParts = subject.code.split('·').map(s => s.trim());
  const ialCode = codeParts[0] || '';
  const igcseCode = codeParts[1] || '';
  const gcseCode = codeParts[2] || '';

  for (const topic of subject.topics) {
    // Create IAL note if applicable
    if (topic.edexcel_ial) {
      const fileName = `${subjectId}-${topic.id}-ial.html`;
      fs.writeFileSync(path.join(notesDir, fileName), createNoteTemplate(subjectId, topic.id, topic.title, 'ial', ialCode, icon));
      totalCreated++;

      const summaryFileName = `${subjectId}-${topic.id}-ial-summary.html`;
      fs.writeFileSync(path.join(notesDir, summaryFileName), createSummaryTemplate(subjectId, topic.id, topic.title, 'ial', ialCode, icon));
      totalCreated++;
    }

    // Create IGCSE note if applicable
    if (topic.edexcel_igcse) {
      const fileName = `${subjectId}-${topic.id}-igcse.html`;
      fs.writeFileSync(path.join(notesDir, fileName), createNoteTemplate(subjectId, topic.id, topic.title, 'igcse', igcseCode, icon));
      totalCreated++;

      const summaryFileName = `${subjectId}-${topic.id}-igcse-summary.html`;
      fs.writeFileSync(path.join(notesDir, summaryFileName), createSummaryTemplate(subjectId, topic.id, topic.title, 'igcse', igcseCode, icon));
      totalCreated++;
    }

    // Create GCSE note if applicable
    if (topic.edexcel_gcse) {
      const fileName = `${subjectId}-${topic.id}-gcse.html`;
      fs.writeFileSync(path.join(notesDir, fileName), createNoteTemplate(subjectId, topic.id, topic.title, 'gcse', gcseCode, icon));
      totalCreated++;

      const summaryFileName = `${subjectId}-${topic.id}-gcse-summary.html`;
      fs.writeFileSync(path.join(notesDir, summaryFileName), createSummaryTemplate(subjectId, topic.id, topic.title, 'gcse', gcseCode, icon));
      totalCreated++;
    }
  }
}

console.log(`Created ${totalCreated} Edexcel note files.`);
