const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

function readFile(base) {
  const fp = path.join(notesDir, base);
  if (fs.existsSync(fp)) return fs.readFileSync(fp, 'utf8');
  return '';
}

function extractContent(html) {
  const start = html.indexOf('<div class="notes-section">');
  const end = html.lastIndexOf('</section>');
  if (start === -1 || end === -1) return '';
  return html.substring(start, end);
}

function buildMasterGuide(title, topics, color, filename) {
  const sections = topics.map(t => {
    const html = readFile(t.file);
    if (!html) return '';
    const content = extractContent(html);
    if (!content) return '';
    return `<div class="topic-section" id="${t.id}">
<h2>${t.name}</h2>
${content}
</div>`;
  }).filter(Boolean);

  if (sections.length === 0) return null;

  const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — LearnAI</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=4">
<style>
.notes-page { padding: 120px 0 60px; background: var(--light); min-height: 100vh; }
.notes-container { max-width: 900px; margin: 0 auto; background: var(--white); padding: 48px; border-radius: var(--radius-xl); box-shadow: var(--shadow); }
.notes-header { margin-bottom: 40px; padding-bottom: 24px; border-bottom: 2px solid var(--gray-light); }
.notes-header h1 { font-size: 2rem; margin-bottom: 12px; }
.toc { background: var(--light); padding: 24px; border-radius: var(--radius-lg); margin-bottom: 40px; }
.toc h2 { font-size: 1.2rem; margin-bottom: 16px; }
.toc ul { columns: 2; }
.toc li { margin-bottom: 8px; }
.topic-section { margin-bottom: 60px; padding-bottom: 40px; border-bottom: 2px solid var(--gray-light); }
.topic-section h2 { font-size: 1.5rem; color: var(--primary-dark); margin-bottom: 20px; padding-bottom: 10px; border-bottom: 3px solid ${color}; }
.topic-section h3 { font-size: 1.15rem; color: var(--dark); margin: 28px 0 12px; }
.topic-section p, .topic-section li { line-height: 1.8; color: var(--dark-light); margin-bottom: 10px; }
.topic-section ul { margin: 12px 0; padding-left: 24px; }
.formula-box { background: var(--light); padding: 16px 20px; border-radius: var(--radius); border-left: 4px solid ${color}; font-family: 'Courier New', monospace; margin: 16px 0; }
.summary-box { background: linear-gradient(135deg, #fef9c3 0%, #fde047 100%); padding: 24px; border-radius: var(--radius-lg); margin-top: 32px; }
.key-point { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 16px 20px; border-radius: var(--radius); margin: 16px 0; border-left: 4px solid ${color}; }
.exam-tip { background: linear-gradient(135deg, #fef9c3 0%, #fde047 100%); padding: 16px 20px; border-radius: var(--radius); margin: 16px 0; border-left: 4px solid #ca8a04; }
</style>
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>
<section class="notes-page"><div class="container">
<div class="notes-container">
<div class="notes-header">
<h1>${title}</h1>
<p style="color:var(--gray)">Syllabus-specific revision — No mixed content</p>
</div>
<div class="toc">
<h2>📑 Topics</h2>
<ul>
${topics.map(t => `<li><a href="#${t.id}">${t.name}</a></li>`).join('\n')}
</ul>
</div>
${sections.join('\n')}
</div>
</div>
</section>
<script src="../js/theme.js?v=4"></script>
</body>
</html>`;

  return page;
}

// ===== CAIE A-LEVEL =====
const caieALevel = [
  {
    subject: 'biology',
    title: '🧬 CAIE A-Level Biology (9700)',
    color: '#16a34a',
    topics: [
      { id: 'b1', name: 'Cell Structure', file: 'biology-b1-a.html' },
      { id: 'b2', name: 'Biological Molecules', file: 'biology-b2-a.html' },
      { id: 'b3', name: 'Enzymes', file: 'biology-b3-a.html' },
      { id: 'b4', name: 'Cell Membranes', file: 'biology-b4-a.html' },
      { id: 'b5', name: 'Cell Division', file: 'biology-b5-a.html' },
      { id: 'b6', name: 'Genetic Engineering', file: 'biology-b6-a.html' },
      { id: 'b7', name: 'Transport', file: 'biology-b7-a.html' },
      { id: 'b8', name: 'Gas Exchange', file: 'biology-b8-a.html' },
      { id: 'b9', name: 'Infectious Disease', file: 'biology-b9-a.html' },
      { id: 'b10', name: 'Immunity', file: 'biology-b10-a.html' },
      { id: 'b11', name: 'Photosynthesis', file: 'biology-b11-a.html' },
      { id: 'b12', name: 'Respiration', file: 'biology-b12-a.html' },
      { id: 'b13', name: 'Energy & Ecosystems', file: 'biology-b13-a.html' },
      { id: 'b14', name: 'Nervous Coordination', file: 'biology-b14-a.html' },
      { id: 'b15', name: 'Homeostasis', file: 'biology-b15-a.html' },
    ]
  },
  {
    subject: 'chemistry',
    title: '⚗️ CAIE A-Level Chemistry (9701)',
    color: '#2563eb',
    topics: [
      { id: 'c1', name: 'Atomic Structure', file: 'chemistry-c1-a.html' },
      { id: 'c2', name: 'Chemical Bonding', file: 'chemistry-c2-a.html' },
      { id: 'c3', name: 'States of Matter', file: 'chemistry-c3-a.html' },
      { id: 'c4', name: 'Chemical Energetics', file: 'chemistry-c4-a.html' },
      { id: 'c5', name: 'Electrochemistry', file: 'chemistry-c5-a.html' },
      { id: 'c6', name: 'Equilibria', file: 'chemistry-c6-a.html' },
      { id: 'c7', name: 'Reaction Kinetics', file: 'chemistry-c7-a.html' },
      { id: 'c8', name: 'Inorganic Chemistry', file: 'chemistry-c8-a.html' },
      { id: 'c9', name: 'Group 2 & 17', file: 'chemistry-c9-a.html' },
      { id: 'c10', name: 'Transition Metals', file: 'chemistry-c10-a.html' },
      { id: 'c11', name: 'Organic Chemistry', file: 'chemistry-c11-a.html' },
      { id: 'c12', name: 'Hydrocarbons', file: 'chemistry-c12-a.html' },
      { id: 'c13', name: 'Carbonyl Compounds', file: 'chemistry-c13-a.html' },
      { id: 'c14', name: 'Carboxylic Acids', file: 'chemistry-c14-a.html' },
    ]
  },
  {
    subject: 'physics',
    title: '⚛️ CAIE A-Level Physics (9702)',
    color: '#9333ea',
    topics: [
      { id: 'p1', name: 'Physical Quantities', file: 'physics-p1-a.html' },
      { id: 'p2', name: 'Kinematics', file: 'physics-p2-a.html' },
      { id: 'p3', name: 'Dynamics', file: 'physics-p3-a.html' },
      { id: 'p4', name: 'Forces', file: 'physics-p4-a.html' },
      { id: 'p5', name: 'Work, Energy, Power', file: 'physics-p5-a.html' },
      { id: 'p6', name: 'Solids & Fluids', file: 'physics-p6-a.html' },
      { id: 'p7', name: 'Temperature', file: 'physics-p7-a.html' },
      { id: 'p8', name: 'Ideal Gases', file: 'physics-p8-a.html' },
      { id: 'p9', name: 'Thermodynamics', file: 'physics-p9-a.html' },
      { id: 'p10', name: 'Oscillations', file: 'physics-p10-a.html' },
      { id: 'p11', name: 'Waves', file: 'physics-p11-a.html' },
      { id: 'p12', name: 'Electric Fields', file: 'physics-p12-a.html' },
      { id: 'p13', name: 'Capacitance', file: 'physics-p13-a.html' },
      { id: 'p14', name: 'Current Electricity', file: 'physics-p14-a.html' },
    ]
  },
  {
    subject: 'maths',
    title: '📐 CAIE A-Level Mathematics (9709)',
    color: '#dc2626',
    topics: [
      { id: 'm1', name: 'Quadratics', file: 'maths-m1-a.html' },
      { id: 'm2', name: 'Functions', file: 'maths-m2-a.html' },
      { id: 'm3', name: 'Coordinate Geometry', file: 'maths-m3-a.html' },
      { id: 'm4', name: 'Circular Measure', file: 'maths-m4-a.html' },
      { id: 'm5', name: 'Trigonometry', file: 'maths-m5-a.html' },
      { id: 'm6', name: 'Series', file: 'maths-m6-a.html' },
      { id: 'm7', name: 'Differentiation', file: 'maths-m7-a.html' },
      { id: 'm8', name: 'Integration', file: 'maths-m8-a.html' },
      { id: 'm9', name: 'Vectors', file: 'maths-m9-a.html' },
      { id: 'm10', name: 'Probability', file: 'maths-m10-a.html' },
      { id: 'm11', name: 'Distributions', file: 'maths-m11-a.html' },
      { id: 'm12', name: 'Hypothesis Testing', file: 'maths-m12-a.html' },
      { id: 'm13', name: 'Kinematics', file: 'maths-m13-a.html' },
    ]
  },
  {
    subject: 'economics',
    title: '📊 CAIE A-Level Economics (9708)',
    color: '#ca8a04',
    topics: [
      { id: 'e1', name: 'Basic Economic Ideas', file: 'economics-e1-a.html' },
      { id: 'e2', name: 'Price System', file: 'economics-e2-a.html' },
      { id: 'e3', name: 'Government Intervention', file: 'economics-e3-a.html' },
      { id: 'e4', name: 'International Trade', file: 'economics-e4-a.html' },
      { id: 'e5', name: 'National Income', file: 'economics-e5-a.html' },
      { id: 'e6', name: 'Money & Inflation', file: 'economics-e6-a.html' },
      { id: 'e7', name: 'Balance of Payments', file: 'economics-e7-a.html' },
      { id: 'e8', name: 'Economic Development', file: 'economics-e8-a.html' },
      { id: 'e9', name: 'Employment', file: 'economics-e9-a.html' },
      { id: 'e10', name: 'Fiscal Policy', file: 'economics-e10-a.html' },
      { id: 'e11', name: 'Supply-Side Policy', file: 'economics-e11-a.html' },
    ]
  },
  {
    subject: 'business',
    title: '💼 CAIE A-Level Business (9609)',
    color: '#059669',
    topics: [
      { id: 'bu1', name: 'Business & Environment', file: 'business-bu1-a.html' },
      { id: 'bu2', name: 'Human Resource Management', file: 'business-bu2-a.html' },
      { id: 'bu3', name: 'Marketing', file: 'business-bu3-a.html' },
      { id: 'bu4', name: 'Operations Management', file: 'business-bu4-a.html' },
      { id: 'bu5', name: 'Finance & Accounting', file: 'business-bu5-a.html' },
      { id: 'bu6', name: 'Strategic Management', file: 'business-bu6-a.html' },
      { id: 'bu7', name: 'Business Economics', file: 'business-bu7-a.html' },
      { id: 'bu8', name: 'Business Structure', file: 'business-bu8-a.html' },
      { id: 'bu9', name: 'External Influences', file: 'business-bu9-a.html' },
      { id: 'bu10', name: 'International Business', file: 'business-bu10-a.html' },
    ]
  },
  {
    subject: 'psychology',
    title: '🧠 CAIE A-Level Psychology (9990)',
    color: '#9333ea',
    topics: [
      { id: 'ps1', name: 'Cognitive Psychology', file: 'psychology-ps1-a.html' },
      { id: 'ps2', name: 'Social Psychology', file: 'psychology-ps2-a.html' },
      { id: 'ps3', name: 'Developmental Psychology', file: 'psychology-ps3-a.html' },
      { id: 'ps4', name: 'Biological Psychology', file: 'psychology-ps4-a.html' },
      { id: 'ps5', name: 'Abnormal Psychology', file: 'psychology-ps5-a.html' },
      { id: 'ps6', name: 'Research Methods', file: 'psychology-ps6-a.html' },
      { id: 'ps7', name: 'Approaches', file: 'psychology-ps7-a.html' },
      { id: 'ps8', name: 'Issues & Debates', file: 'psychology-ps8-a.html' },
      { id: 'ps9', name: 'Schizophrenia', file: 'psychology-ps9-a.html' },
    ]
  },
  {
    subject: 'english',
    title: '📖 CAIE A-Level English (9093)',
    color: '#dc2626',
    topics: [
      { id: 'en1', name: 'Poetry', file: 'english-en1-a.html' },
      { id: 'en2', name: 'Prose', file: 'english-en2-a.html' },
      { id: 'en3', name: 'Drama', file: 'english-en3-a.html' },
      { id: 'en4', name: 'Shakespeare', file: 'english-en4-a.html' },
      { id: 'en5', name: 'Literary Criticism', file: 'english-en5-a.html' },
      { id: 'en6', name: 'Creative Writing', file: 'english-en6-a.html' },
      { id: 'en7', name: 'Language Analysis', file: 'english-en7-a.html' },
      { id: 'en8', name: 'Comparative Study', file: 'english-en8-a.html' },
    ]
  },
  {
    subject: 'geography',
    title: '🌍 CAIE A-Level Geography (9696)',
    color: '#0891b2',
    topics: [
      { id: 'g1', name: 'Hydrology', file: 'geography-g1-a.html' },
      { id: 'g2', name: 'Atmosphere', file: 'geography-g2-a.html' },
      { id: 'g3', name: 'Rocks', file: 'geography-g3-a.html' },
      { id: 'g4', name: 'Population', file: 'geography-g4-a.html' },
      { id: 'g5', name: 'Migration', file: 'geography-g5-a.html' },
      { id: 'g6', name: 'Settlement', file: 'geography-g6-a.html' },
      { id: 'g7', name: 'Tropical Environments', file: 'geography-g7-a.html' },
      { id: 'g8', name: 'Coastal Environments', file: 'geography-g8-a.html' },
      { id: 'g9', name: 'Hazardous Environments', file: 'geography-g9-a.html' },
      { id: 'g10', name: 'Global Interdependence', file: 'geography-g10-a.html' },
    ]
  },
  {
    subject: 'accounting',
    title: '📒 CAIE A-Level Accounting (9706)',
    color: '#059669',
    topics: [
      { id: 'ac1', name: 'Financial Accounting', file: 'accounting-ac1-a.html' },
      { id: 'ac2', name: 'Cost & Management', file: 'accounting-ac2-a.html' },
      { id: 'ac3', name: 'Ratio Analysis', file: 'accounting-ac3-a.html' },
      { id: 'ac4', name: 'Partnerships', file: 'accounting-ac4-a.html' },
      { id: 'ac5', name: 'Limited Companies', file: 'accounting-ac5-a.html' },
      { id: 'ac6', name: 'Inventory & Depreciation', file: 'accounting-ac6-a.html' },
      { id: 'ac7', name: 'Manufacturing', file: 'accounting-ac7-a.html' },
      { id: 'ac8', name: 'Budgeting', file: 'accounting-ac8-a.html' },
      { id: 'ac9', name: 'Investment Appraisal', file: 'accounting-ac9-a.html' },
      { id: 'ac10', name: 'Cash Flow', file: 'accounting-ac10-a.html' },
      { id: 'ac11', name: 'Source Documents', file: 'accounting-ac11-a.html' },
      { id: 'ac12', name: 'Correction of Errors', file: 'accounting-ac12-a.html' },
      { id: 'ac13', name: 'Incomplete Records', file: 'accounting-ac13-a.html' },
    ]
  },
  {
    subject: 'history',
    title: '📜 CAIE A-Level History (9389)',
    color: '#92400e',
    topics: [
      { id: 'h1', name: 'H1: Origins of WWI', file: 'history-h1-a.html' },
      { id: 'h2', name: 'H2: The Holocaust', file: 'history-h2-a.html' },
      { id: 'h3', name: 'H3: Cold War in Europe', file: 'history-h3-a.html' },
      { id: 'h4', name: 'H4: Cold War in Asia', file: 'history-h4-a.html' },
      { id: 'h5', name: 'H5: Civil Rights USA', file: 'history-h5-a.html' },
      { id: 'h6', name: 'H6: International History', file: 'history-h6-a.html' },
      { id: 'h7', name: 'H7: French Revolution', file: 'history-h7-a.html' },
      { id: 'h8', name: 'H8: Hitler\'s Germany', file: 'history-h8-a.html' },
      { id: 'h9', name: 'H9: Stalin\'s Russia', file: 'history-h9-a.html' },
      { id: 'h10', name: 'H10: Britain 1918-1951', file: 'history-h10-a.html' },
      { id: 'h11', name: 'H11: US Civil War', file: 'history-h11-a.html' },
      { id: 'h12', name: 'H12: International Relations', file: 'history-h12-a.html' },
    ]
  },
];

// ===== CAIE IGCSE =====
const caieIGCSE = [
  {
    subject: 'biology',
    title: '🧬 CAIE IGCSE Biology (0610)',
    color: '#16a34a',
    topics: [
      { id: 'b1', name: 'Cell Structure', file: 'biology-b1-igcse.html' },
      { id: 'b2', name: 'Biological Molecules', file: 'biology-b2-igcse.html' },
      { id: 'b3', name: 'Enzymes', file: 'biology-b3-igcse.html' },
      { id: 'b4', name: 'Cell Membranes', file: 'biology-b4-igcse.html' },
      { id: 'b5', name: 'Cell Division', file: 'biology-b5-igcse.html' },
      { id: 'b6', name: 'Genetic Engineering', file: 'biology-b6-igcse.html' },
      { id: 'b7', name: 'Transport', file: 'biology-b7-igcse.html' },
      { id: 'b8', name: 'Gas Exchange', file: 'biology-b8-igcse.html' },
      { id: 'b9', name: 'Infectious Disease', file: 'biology-b9-igcse.html' },
      { id: 'b10', name: 'Immunity', file: 'biology-b10-igcse.html' },
      { id: 'b11', name: 'Photosynthesis', file: 'biology-b11-igcse.html' },
      { id: 'b12', name: 'Respiration', file: 'biology-b12-igcse.html' },
      { id: 'b14', name: 'Nervous Coordination', file: 'biology-b14-igcse.html' },
      { id: 'b15', name: 'Homeostasis', file: 'biology-b15-igcse.html' },
    ]
  },
  {
    subject: 'chemistry',
    title: '⚗️ CAIE IGCSE Chemistry (0620)',
    color: '#2563eb',
    topics: [
      { id: 'c1', name: 'Atomic Structure', file: 'chemistry-c1-igcse.html' },
      { id: 'c2', name: 'Chemical Bonding', file: 'chemistry-c2-igcse.html' },
      { id: 'c3', name: 'States of Matter', file: 'chemistry-c3-igcse.html' },
      { id: 'c4', name: 'Chemical Energetics', file: 'chemistry-c4-igcse.html' },
      { id: 'c5', name: 'Electrochemistry', file: 'chemistry-c5-igcse.html' },
      { id: 'c6', name: 'Equilibria', file: 'chemistry-c6-igcse.html' },
      { id: 'c7', name: 'Reaction Kinetics', file: 'chemistry-c7-igcse.html' },
      { id: 'c8', name: 'Inorganic Chemistry', file: 'chemistry-c8-igcse.html' },
      { id: 'c9', name: 'Group 2 & 17', file: 'chemistry-c9-igcse.html' },
      { id: 'c10', name: 'Transition Metals', file: 'chemistry-c10-igcse.html' },
      { id: 'c14', name: 'Carboxylic Acids', file: 'chemistry-c14-igcse.html' },
    ]
  },
  {
    subject: 'physics',
    title: '⚛️ CAIE IGCSE Physics (0625)',
    color: '#9333ea',
    topics: [
      { id: 'p1', name: 'Physical Quantities', file: 'physics-p1-igcse.html' },
      { id: 'p2', name: 'Kinematics', file: 'physics-p2-igcse.html' },
      { id: 'p3', name: 'Dynamics', file: 'physics-p3-igcse.html' },
      { id: 'p4', name: 'Forces', file: 'physics-p4-igcse.html' },
      { id: 'p5', name: 'Work, Energy, Power', file: 'physics-p5-igcse.html' },
      { id: 'p6', name: 'Solids & Fluids', file: 'physics-p6-igcse.html' },
      { id: 'p7', name: 'Temperature', file: 'physics-p7-igcse.html' },
      { id: 'p8', name: 'Ideal Gases', file: 'physics-p8-igcse.html' },
      { id: 'p14', name: 'Current Electricity', file: 'physics-p14-igcse.html' },
    ]
  },
  {
    subject: 'maths',
    title: '📐 CAIE IGCSE Mathematics (0580)',
    color: '#dc2626',
    topics: [
      { id: 'm1', name: 'Quadratics', file: 'maths-m1-igcse.html' },
      { id: 'm2', name: 'Functions', file: 'maths-m2-igcse.html' },
      { id: 'm3', name: 'Coordinate Geometry', file: 'maths-m3-igcse.html' },
      { id: 'm4', name: 'Circular Measure', file: 'maths-m4-igcse.html' },
      { id: 'm5', name: 'Trigonometry', file: 'maths-m5-igcse.html' },
      { id: 'm6', name: 'Series', file: 'maths-m6-igcse.html' },
      { id: 'm7', name: 'Differentiation', file: 'maths-m7-igcse.html' },
      { id: 'm8', name: 'Integration', file: 'maths-m8-igcse.html' },
      { id: 'm9', name: 'Vectors', file: 'maths-m9-igcse.html' },
      { id: 'm10', name: 'Probability', file: 'maths-m10-igcse.html' },
      { id: 'm11', name: 'Distributions', file: 'maths-m11-igcse.html' },
      { id: 'm12', name: 'Hypothesis Testing', file: 'maths-m12-igcse.html' },
    ]
  },
  {
    subject: 'economics',
    title: '📊 CAIE IGCSE Economics (0455)',
    color: '#ca8a04',
    topics: [
      { id: 'e1', name: 'Basic Economic Ideas', file: 'economics-e1-igcse.html' },
      { id: 'e2', name: 'Price System', file: 'economics-e2-igcse.html' },
      { id: 'e3', name: 'Government Intervention', file: 'economics-e3-igcse.html' },
      { id: 'e4', name: 'International Trade', file: 'economics-e4-igcse.html' },
      { id: 'e5', name: 'National Income', file: 'economics-e5-igcse.html' },
      { id: 'e6', name: 'Money & Inflation', file: 'economics-e6-igcse.html' },
      { id: 'e7', name: 'Balance of Payments', file: 'economics-e7-igcse.html' },
      { id: 'e8', name: 'Economic Development', file: 'economics-e8-igcse.html' },
      { id: 'e9', name: 'Employment', file: 'economics-e9-igcse.html' },
      { id: 'e10', name: 'Fiscal Policy', file: 'economics-e10-igcse.html' },
    ]
  },
  {
    subject: 'business',
    title: '💼 CAIE IGCSE Business (0450)',
    color: '#059669',
    topics: [
      { id: 'bu1', name: 'Business & Environment', file: 'business-bu1-igcse.html' },
      { id: 'bu2', name: 'Human Resource Management', file: 'business-bu2-igcse.html' },
      { id: 'bu3', name: 'Marketing', file: 'business-bu3-igcse.html' },
      { id: 'bu4', name: 'Operations Management', file: 'business-bu4-igcse.html' },
      { id: 'bu5', name: 'Finance & Accounting', file: 'business-bu5-igcse.html' },
      { id: 'bu6', name: 'Strategic Management', file: 'business-bu6-igcse.html' },
      { id: 'bu7', name: 'Business Economics', file: 'business-bu7-igcse.html' },
      { id: 'bu8', name: 'Business Structure', file: 'business-bu8-igcse.html' },
      { id: 'bu9', name: 'External Influences', file: 'business-bu9-igcse.html' },
      { id: 'bu10', name: 'International Business', file: 'business-bu10-igcse.html' },
    ]
  },
  {
    subject: 'english',
    title: '📖 CAIE IGCSE English (0500)',
    color: '#dc2626',
    topics: [
      { id: 'en1', name: 'Reading', file: 'english-en1-igcse.html' },
      { id: 'en2', name: 'Writing', file: 'english-en2-igcse.html' },
      { id: 'en3', name: 'Directed Writing', file: 'english-en3-igcse.html' },
      { id: 'en4', name: 'Composition', file: 'english-en4-igcse.html' },
      { id: 'en5', name: 'Literature', file: 'english-en5-igcse.html' },
      { id: 'en6', name: 'Poetry', file: 'english-en6-igcse.html' },
      { id: 'en7', name: 'Prose', file: 'english-en7-igcse.html' },
      { id: 'en8', name: 'Drama', file: 'english-en8-igcse.html' },
    ]
  },
  {
    subject: 'geography',
    title: '🌍 CAIE IGCSE Geography (0460)',
    color: '#0891b2',
    topics: [
      { id: 'g1', name: 'Hydrology', file: 'geography-g1-igcse.html' },
      { id: 'g2', name: 'Atmosphere', file: 'geography-g2-igcse.html' },
      { id: 'g3', name: 'Rocks', file: 'geography-g3-igcse.html' },
      { id: 'g4', name: 'Population', file: 'geography-g4-igcse.html' },
      { id: 'g5', name: 'Migration', file: 'geography-g5-igcse.html' },
      { id: 'g6', name: 'Settlement', file: 'geography-g6-igcse.html' },
      { id: 'g7', name: 'Tropical Environments', file: 'geography-g7-igcse.html' },
      { id: 'g8', name: 'Coastal Environments', file: 'geography-g8-igcse.html' },
    ]
  },
  {
    subject: 'history',
    title: '📜 CAIE IGCSE History (0470)',
    color: '#92400e',
    topics: [
      { id: 'h1', name: 'H1: Origins of WWI', file: 'history-h1-igcse.html' },
      { id: 'h2', name: 'H2: The Holocaust', file: 'history-h2-igcse.html' },
      { id: 'h3', name: 'H3: Cold War in Europe', file: 'history-h3-igcse.html' },
      { id: 'h4', name: 'H4: Cold War in Asia', file: 'history-h4-igcse.html' },
      { id: 'h5', name: 'H5: Civil Rights USA', file: 'history-h5-igcse.html' },
      { id: 'h6', name: 'H6: International History', file: 'history-h6-igcse.html' },
      { id: 'h7', name: 'H7: French Revolution', file: 'history-h7-igcse.html' },
      { id: 'h8', name: 'H8: Hitler\'s Germany', file: 'history-h8-igcse.html' },
      { id: 'h9', name: 'H9: Stalin\'s Russia', file: 'history-h9-igcse.html' },
      { id: 'h10', name: 'H10: Britain 1918-1951', file: 'history-h10-igcse.html' },
      { id: 'h11', name: 'H11: US Civil War', file: 'history-h11-igcse.html' },
      { id: 'h12', name: 'H12: International Relations', file: 'history-h12-igcse.html' },
    ]
  },
  {
    subject: 'additional-maths',
    title: '🧮 CAIE IGCSE Additional Mathematics (0606)',
    color: '#7c3aed',
    topics: [
      { id: 'am1', name: 'Algebra', file: 'additional-maths-am1-igcse.html' },
      { id: 'am2', name: 'Logarithms', file: 'additional-maths-am2-igcse.html' },
      { id: 'am3', name: 'Trigonometry', file: 'additional-maths-am3-igcse.html' },
      { id: 'am4', name: 'Calculus', file: 'additional-maths-am4-igcse.html' },
      { id: 'am5', name: 'Coordinate Geometry', file: 'additional-maths-am5-igcse.html' },
      { id: 'am6', name: 'Vectors', file: 'additional-maths-am6-igcse.html' },
      { id: 'am7', name: 'Matrices', file: 'additional-maths-am7-igcse.html' },
      { id: 'am8', name: 'Numerical Methods', file: 'additional-maths-am8-igcse.html' },
      { id: 'am9', name: 'Probability', file: 'additional-maths-am9-igcse.html' },
      { id: 'am10', name: 'Statistics', file: 'additional-maths-am10-igcse.html' },
      { id: 'am11', name: 'Kinematics', file: 'additional-maths-am11-igcse.html' },
      { id: 'am12', name: 'Forces', file: 'additional-maths-am12-igcse.html' },
      { id: 'am13', name: 'Projectiles', file: 'additional-maths-am13-igcse.html' },
      { id: 'am14', name: 'Work & Energy', file: 'additional-maths-am14-igcse.html' },
      { id: 'am15', name: 'Momentum', file: 'additional-maths-am15-igcse.html' },
    ]
  },
  {
    subject: 'ict',
    title: '💻 CAIE IGCSE ICT (0417)',
    color: '#0891b2',
    topics: [
      { id: 'i1', name: 'Data & Information', file: 'ict-i1-igcse.html' },
      { id: 'i2', name: 'Hardware & Software', file: 'ict-i2-igcse.html' },
      { id: 'i3', name: 'Networks', file: 'ict-i3-igcse.html' },
      { id: 'i4', name: 'Databases', file: 'ict-i4-igcse.html' },
      { id: 'i5', name: 'Spreadsheets', file: 'ict-i5-igcse.html' },
      { id: 'i6', name: 'Web Design', file: 'ict-i6-igcse.html' },
      { id: 'i7', name: 'Systems Analysis', file: 'ict-i7-igcse.html' },
      { id: 'i8', name: 'Security', file: 'ict-i8-igcse.html' },
      { id: 'i9', name: 'Impact of ICT', file: 'ict-i9-igcse.html' },
      { id: 'i10', name: 'Emerging Technologies', file: 'ict-i10-igcse.html' },
    ]
  },
];

// ===== EDEXCEL GCSE =====
const edexcelGCSE = [
  {
    subject: 'biology',
    title: '🧬 Edexcel GCSE Biology',
    color: '#16a34a',
    topics: [
      { id: 'eb1', name: 'EB1: Cell Biology', file: 'edexcel-biology-eb1-gcse.html' },
      { id: 'eb2', name: 'EB2: Genetics', file: 'edexcel-biology-eb2-gcse.html' },
      { id: 'eb3', name: 'EB3: Transport', file: 'edexcel-biology-eb3-gcse.html' },
      { id: 'eb4', name: 'EB4: Ecosystems', file: 'edexcel-biology-eb4-gcse.html' },
      { id: 'eb5', name: 'EB5: Microorganisms', file: 'edexcel-biology-eb5-gcse.html' },
      { id: 'eb6', name: 'EB6: Nervous System', file: 'edexcel-biology-eb6-gcse.html' },
      { id: 'eb7', name: 'EB7: Inheritance', file: 'edexcel-biology-eb7-gcse.html' },
      { id: 'eb8', name: 'EB8: Human Body', file: 'edexcel-biology-eb8-gcse.html' },
    ]
  },
  {
    subject: 'chemistry',
    title: '⚗️ Edexcel GCSE Chemistry',
    color: '#2563eb',
    topics: [
      { id: 'ec1', name: 'EC1: Atomic Structure', file: 'edexcel-chemistry-ec1-gcse.html' },
      { id: 'ec2', name: 'EC2: Bonding', file: 'edexcel-chemistry-ec2-gcse.html' },
      { id: 'ec3', name: 'EC3: Energetics', file: 'edexcel-chemistry-ec3-gcse.html' },
      { id: 'ec4', name: 'EC4: Rates', file: 'edexcel-chemistry-ec4-gcse.html' },
      { id: 'ec5', name: 'EC5: Organic', file: 'edexcel-chemistry-ec5-gcse.html' },
      { id: 'ec6', name: 'EC6: Analysis', file: 'edexcel-chemistry-ec6-gcse.html' },
      { id: 'ec7', name: 'EC7: Acids', file: 'edexcel-chemistry-ec7-gcse.html' },
      { id: 'ec8', name: 'EC8: Electrolysis', file: 'edexcel-chemistry-ec8-gcse.html' },
    ]
  },
  {
    subject: 'physics',
    title: '⚛️ Edexcel GCSE Physics',
    color: '#9333ea',
    topics: [
      { id: 'ep1', name: 'EP1: Forces & Motion', file: 'edexcel-physics-ep1-gcse.html' },
      { id: 'ep2', name: 'EP2: Waves & Light', file: 'edexcel-physics-ep2-gcse.html' },
      { id: 'ep3', name: 'EP3: Energy', file: 'edexcel-physics-ep3-gcse.html' },
      { id: 'ep4', name: 'EP4: Electricity', file: 'edexcel-physics-ep4-gcse.html' },
      { id: 'ep5', name: 'EP5: Magnetism', file: 'edexcel-physics-ep5-gcse.html' },
      { id: 'ep6', name: 'EP6: Matter', file: 'edexcel-physics-ep6-gcse.html' },
      { id: 'ep7', name: 'EP7: Electromagnetism', file: 'edexcel-physics-ep7-gcse.html' },
      { id: 'ep8', name: 'EP8: Radioactivity', file: 'edexcel-physics-ep8-gcse.html' },
    ]
  },
  {
    subject: 'maths',
    title: '📐 Edexcel GCSE Mathematics',
    color: '#dc2626',
    topics: [
      { id: 'em1', name: 'EM1: Number', file: 'edexcel-maths-em1-gcse.html' },
      { id: 'em2', name: 'EM2: Algebra', file: 'edexcel-maths-em2-gcse.html' },
      { id: 'em3', name: 'EM3: Geometry', file: 'edexcel-maths-em3-gcse.html' },
      { id: 'em4', name: 'EM4: Statistics', file: 'edexcel-maths-em4-gcse.html' },
      { id: 'em6', name: 'EM6: Probability', file: 'edexcel-maths-em6-gcse.html' },
      { id: 'em7', name: 'EM7: Advanced Algebra', file: 'edexcel-maths-em7-gcse.html' },
    ]
  },
  {
    subject: 'computer-science',
    title: '💻 Edexcel GCSE Computer Science',
    color: '#0891b2',
    topics: [
      { id: 'ecs1', name: 'ECS1: Algorithms', file: 'edexcel-computer-science-ecs1-gcse.html' },
      { id: 'ecs2', name: 'ECS2: Data Structures', file: 'edexcel-computer-science-ecs2-gcse.html' },
      { id: 'ecs3', name: 'ECS3: Hardware', file: 'edexcel-computer-science-ecs3-gcse.html' },
      { id: 'ecs4', name: 'ECS4: Networks', file: 'edexcel-computer-science-ecs4-gcse.html' },
      { id: 'ecs5', name: 'ECS5: Databases', file: 'edexcel-computer-science-ecs5-gcse.html' },
      { id: 'ecs6', name: 'ECS6: Boolean Logic', file: 'edexcel-computer-science-ecs6-gcse.html' },
    ]
  },
  {
    subject: 'history',
    title: '📜 Edexcel GCSE History',
    color: '#92400e',
    topics: [
      { id: 'eh1', name: 'EH1: Russian Revolution', file: 'edexcel-history-eh1-gcse.html' },
      { id: 'eh2', name: 'EH2: Mao\'s China', file: 'edexcel-history-eh2-gcse.html' },
      { id: 'eh3', name: 'EH3: Cold War', file: 'edexcel-history-eh3-gcse.html' },
      { id: 'eh4', name: 'EH4: British Empire', file: 'edexcel-history-eh4-gcse.html' },
      { id: 'eh5', name: 'EH5: Civil Rights', file: 'edexcel-history-eh5-gcse.html' },
      { id: 'eh6', name: 'EH6: Nazi Germany', file: 'edexcel-history-eh6-gcse.html' },
    ]
  },
];

// ===== EDEXCEL IAL =====
const edexcelIAL = [
  {
    subject: 'biology',
    title: '🧬 Edexcel IAL Biology',
    color: '#16a34a',
    topics: [
      { id: 'eb1', name: 'EB1: Cell Biology', file: 'edexcel-biology-eb1-ial.html' },
      { id: 'eb2', name: 'EB2: Genetics', file: 'edexcel-biology-eb2-ial.html' },
      { id: 'eb3', name: 'EB3: Transport', file: 'edexcel-biology-eb3-ial.html' },
      { id: 'eb4', name: 'EB4: Ecosystems', file: 'edexcel-biology-eb4-ial.html' },
      { id: 'eb5', name: 'EB5: Microorganisms', file: 'edexcel-biology-eb5-ial.html' },
      { id: 'eb6', name: 'EB6: Nervous System', file: 'edexcel-biology-eb6-ial.html' },
      { id: 'eb7', name: 'EB7: Inheritance', file: 'edexcel-biology-eb7-ial.html' },
      { id: 'eb8', name: 'EB8: Human Body', file: 'edexcel-biology-eb8-ial.html' },
    ]
  },
  {
    subject: 'chemistry',
    title: '⚗️ Edexcel IAL Chemistry',
    color: '#2563eb',
    topics: [
      { id: 'ec1', name: 'EC1: Atomic Structure', file: 'edexcel-chemistry-ec1-ial.html' },
      { id: 'ec2', name: 'EC2: Bonding', file: 'edexcel-chemistry-ec2-ial.html' },
      { id: 'ec3', name: 'EC3: Energetics', file: 'edexcel-chemistry-ec3-ial.html' },
      { id: 'ec4', name: 'EC4: Rates', file: 'edexcel-chemistry-ec4-ial.html' },
      { id: 'ec5', name: 'EC5: Organic', file: 'edexcel-chemistry-ec5-ial.html' },
      { id: 'ec6', name: 'EC6: Analysis', file: 'edexcel-chemistry-ec6-ial.html' },
      { id: 'ec7', name: 'EC7: Acids', file: 'edexcel-chemistry-ec7-ial.html' },
      { id: 'ec8', name: 'EC8: Electrolysis', file: 'edexcel-chemistry-ec8-ial.html' },
    ]
  },
  {
    subject: 'physics',
    title: '⚛️ Edexcel IAL Physics',
    color: '#9333ea',
    topics: [
      { id: 'ep1', name: 'EP1: Forces & Motion', file: 'edexcel-physics-ep1-ial.html' },
      { id: 'ep2', name: 'EP2: Waves & Light', file: 'edexcel-physics-ep2-ial.html' },
      { id: 'ep3', name: 'EP3: Energy', file: 'edexcel-physics-ep3-ial.html' },
      { id: 'ep4', name: 'EP4: Electricity', file: 'edexcel-physics-ep4-ial.html' },
      { id: 'ep5', name: 'EP5: Magnetism', file: 'edexcel-physics-ep5-ial.html' },
      { id: 'ep6', name: 'EP6: Matter', file: 'edexcel-physics-ep6-ial.html' },
      { id: 'ep7', name: 'EP7: Electromagnetism', file: 'edexcel-physics-ep7-ial.html' },
      { id: 'ep8', name: 'EP8: Radioactivity', file: 'edexcel-physics-ep8-ial.html' },
    ]
  },
  {
    subject: 'maths',
    title: '📐 Edexcel IAL Mathematics',
    color: '#dc2626',
    topics: [
      { id: 'em1', name: 'EM1: Pure Maths 1', file: 'edexcel-maths-em1-ial.html' },
      { id: 'em2', name: 'EM2: Pure Maths 2', file: 'edexcel-maths-em2-ial.html' },
      { id: 'em3', name: 'EM3: Pure Maths 3', file: 'edexcel-maths-em3-ial.html' },
      { id: 'em4', name: 'EM4: Pure Maths 4', file: 'edexcel-maths-em4-ial.html' },
      { id: 'em5', name: 'EM5: Mechanics', file: 'edexcel-maths-em5-ial.html' },
      { id: 'em6', name: 'EM6: Statistics', file: 'edexcel-maths-em6-ial.html' },
      { id: 'em7', name: 'EM7: Further Pure', file: 'edexcel-maths-em7-ial.html' },
      { id: 'em8', name: 'EM8: Further Mechanics', file: 'edexcel-maths-em8-ial.html' },
    ]
  },
  {
    subject: 'computer-science',
    title: '💻 Edexcel IAL Computer Science',
    color: '#0891b2',
    topics: [
      { id: 'ecs1', name: 'ECS1: Algorithms', file: 'edexcel-computer-science-ecs1-ial.html' },
      { id: 'ecs2', name: 'ECS2: Data Structures', file: 'edexcel-computer-science-ecs2-ial.html' },
      { id: 'ecs3', name: 'ECS3: Hardware', file: 'edexcel-computer-science-ecs3-ial.html' },
      { id: 'ecs4', name: 'ECS4: Networks', file: 'edexcel-computer-science-ecs4-ial.html' },
      { id: 'ecs5', name: 'ECS5: Databases', file: 'edexcel-computer-science-ecs5-ial.html' },
      { id: 'ecs6', name: 'ECS6: Boolean Logic', file: 'edexcel-computer-science-ecs6-ial.html' },
      { id: 'ecs7', name: 'ECS7: Software Engineering', file: 'edexcel-computer-science-ecs7-ial.html' },
    ]
  },
  {
    subject: 'history',
    title: '📜 Edexcel IAL History',
    color: '#92400e',
    topics: [
      { id: 'eh1', name: 'EH1: Russian Revolution', file: 'edexcel-history-eh1-ial.html' },
      { id: 'eh2', name: 'EH2: Mao\'s China', file: 'edexcel-history-eh2-ial.html' },
      { id: 'eh3', name: 'EH3: Cold War', file: 'edexcel-history-eh3-ial.html' },
      { id: 'eh4', name: 'EH4: British Empire', file: 'edexcel-history-eh4-ial.html' },
      { id: 'eh5', name: 'EH5: Civil Rights', file: 'edexcel-history-eh5-ial.html' },
      { id: 'eh6', name: 'EH6: Nazi Germany', file: 'edexcel-history-eh6-ial.html' },
    ]
  },
];

// ===== IB =====
const ibSubjects = [
  {
    subject: 'biology',
    title: '🧬 IB Biology (HL/SL)',
    color: '#16a34a',
    topics: [
      { id: 'ibb1', name: 'IBB1: Cell Biology', file: 'ib-biology-ibb1.html' },
      { id: 'ibb2', name: 'IBB2: Molecular Biology', file: 'ib-biology-ibb2.html' },
      { id: 'ibb3', name: 'IBB3: Genetics', file: 'ib-biology-ibb3.html' },
      { id: 'ibb4', name: 'IBB4: Ecology', file: 'ib-biology-ibb4.html' },
      { id: 'ibb5', name: 'IBB5: Evolution', file: 'ib-biology-ibb5.html' },
      { id: 'ibb6', name: 'IBB6: Human Physiology', file: 'ib-biology-ibb6.html' },
    ]
  },
  {
    subject: 'chemistry',
    title: '⚗️ IB Chemistry (HL/SL)',
    color: '#2563eb',
    topics: [
      { id: 'ibc1', name: 'IBC1: Stoichiometry', file: 'ib-chemistry-ibc1.html' },
      { id: 'ibc2', name: 'IBC2: Atomic Structure', file: 'ib-chemistry-ibc2.html' },
      { id: 'ibc3', name: 'IBC3: Periodicity', file: 'ib-chemistry-ibc3.html' },
      { id: 'ibc4', name: 'IBC4: Chemical Bonding', file: 'ib-chemistry-ibc4.html' },
      { id: 'ibc5', name: 'IBC5: Energetics', file: 'ib-chemistry-ibc5.html' },
      { id: 'ibc6', name: 'IBC6: Kinetics', file: 'ib-chemistry-ibc6.html' },
      { id: 'ibc7', name: 'IBC7: Equilibrium', file: 'ib-chemistry-ibc7.html' },
      { id: 'ibc8', name: 'IBC8: Acids & Bases', file: 'ib-chemistry-ibc8.html' },
      { id: 'ibc9', name: 'IBC9: Redox', file: 'ib-chemistry-ibc9.html' },
      { id: 'ibc10', name: 'IBC10: Organic', file: 'ib-chemistry-ibc10.html' },
      { id: 'ibc11', name: 'IBC11: Measurement', file: 'ib-chemistry-ibc11.html' },
    ]
  },
  {
    subject: 'physics',
    title: '⚛️ IB Physics (HL/SL)',
    color: '#9333ea',
    topics: [
      { id: 'ibp1', name: 'IBP1: Measurements', file: 'ib-physics-ibp1.html' },
      { id: 'ibp2', name: 'IBP2: Mechanics', file: 'ib-physics-ibp2.html' },
      { id: 'ibp3', name: 'IBP3: Thermal', file: 'ib-physics-ibp3.html' },
      { id: 'ibp4', name: 'IBP4: Waves', file: 'ib-physics-ibp4.html' },
      { id: 'ibp5', name: 'IBP5: Electricity', file: 'ib-physics-ibp5.html' },
      { id: 'ibp6', name: 'IBP6: Circular Motion', file: 'ib-physics-ibp6.html' },
      { id: 'ibp7', name: 'IBP7: Atomic Physics', file: 'ib-physics-ibp7.html' },
      { id: 'ibp8', name: 'IBP8: Energy Production', file: 'ib-physics-ibp8.html' },
    ]
  },
  {
    subject: 'maths-aa',
    title: '📐 IB Mathematics AA (HL/SL)',
    color: '#dc2626',
    topics: [
      { id: 'ibmaa1', name: 'IBMAA1: Number & Algebra', file: 'ib-maths-aa-ibmaa1.html' },
      { id: 'ibmaa2', name: 'IBMAA2: Functions', file: 'ib-maths-aa-ibmaa2.html' },
      { id: 'ibmaa3', name: 'IBMAA3: Geometry', file: 'ib-maths-aa-ibmaa3.html' },
      { id: 'ibmaa4', name: 'IBMAA4: Statistics', file: 'ib-maths-aa-ibmaa4.html' },
      { id: 'ibmaa5', name: 'IBMAA5: Calculus', file: 'ib-maths-aa-ibmaa5.html' },
    ]
  },
  {
    subject: 'maths-ai',
    title: '📐 IB Mathematics AI (HL/SL)',
    color: '#dc2626',
    topics: [
      { id: 'ibmai1', name: 'IBMAI1: Number & Algebra', file: 'ib-maths-ai-ibmai1.html' },
      { id: 'ibmai2', name: 'IBMAI2: Functions', file: 'ib-maths-ai-ibmai2.html' },
      { id: 'ibmai3', name: 'IBMAI3: Geometry', file: 'ib-maths-ai-ibmai3.html' },
      { id: 'ibmai4', name: 'IBMAI4: Statistics', file: 'ib-maths-ai-ibmai4.html' },
      { id: 'ibmai5', name: 'IBMAI5: Calculus', file: 'ib-maths-ai-ibmai5.html' },
      { id: 'ibmai6', name: 'IBMAI6: Modelling', file: 'ib-maths-ai-ibmai6.html' },
    ]
  },
  {
    subject: 'economics',
    title: '📊 IB Economics (HL/SL)',
    color: '#ca8a04',
    topics: [
      { id: 'ibe1', name: 'IBE1: Microeconomics', file: 'ib-economics-ibe1.html' },
      { id: 'ibe2', name: 'IBE2: Macroeconomics', file: 'ib-economics-ibe2.html' },
      { id: 'ibe3', name: 'IBE3: International', file: 'ib-economics-ibe3.html' },
      { id: 'ibe4', name: 'IBE4: Development', file: 'ib-economics-ibe4.html' },
    ]
  },
  {
    subject: 'history',
    title: '📜 IB History (HL/SL)',
    color: '#92400e',
    topics: [
      { id: 'ibh1', name: 'IBH1: Causes of War', file: 'ib-history-ibh1.html' },
      { id: 'ibh2', name: 'IBH2: Authoritarian States', file: 'ib-history-ibh2.html' },
      { id: 'ibh3', name: 'IBH3: Cold War', file: 'ib-history-ibh3.html' },
      { id: 'ibh4', name: 'IBH4: Rights & Protest', file: 'ib-history-ibh4.html' },
    ]
  },
  {
    subject: 'geography',
    title: '🌍 IB Geography (HL/SL)',
    color: '#0891b2',
    topics: [
      { id: 'ibg1', name: 'IBG1: Population', file: 'ib-geography-ibg1.html' },
      { id: 'ibg2', name: 'IBG2: Climate Change', file: 'ib-geography-ibg2.html' },
      { id: 'ibg3', name: 'IBG3: Globalisation', file: 'ib-geography-ibg3.html' },
      { id: 'ibg4', name: 'IBG4: Resources', file: 'ib-geography-ibg4.html' },
      { id: 'ibg5', name: 'IBG5: Urban Environments', file: 'ib-geography-ibg5.html' },
    ]
  },
  {
    subject: 'english',
    title: '📖 IB English (HL/SL)',
    color: '#dc2626',
    topics: [
      { id: 'iben1', name: 'IBEN1: Language & Literature', file: 'ib-english-iben1.html' },
      { id: 'iben2', name: 'IBEN2: Textual Analysis', file: 'ib-english-iben2.html' },
      { id: 'iben3', name: 'IBEN3: Comparative Essay', file: 'ib-english-iben3.html' },
    ]
  },
  {
    subject: 'psychology',
    title: '🧠 IB Psychology (HL/SL)',
    color: '#9333ea',
    topics: [
      { id: 'ibps1', name: 'IBPS1: Biological', file: 'ib-psychology-ibps1.html' },
      { id: 'ibps2', name: 'IBPS2: Cognitive', file: 'ib-psychology-ibps2.html' },
      { id: 'ibps3', name: 'IBPS3: Sociocultural', file: 'ib-psychology-ibps3.html' },
      { id: 'ibps4', name: 'IBPS4: Abnormal', file: 'ib-psychology-ibps4.html' },
      { id: 'ibps5', name: 'IBPS5: Research Methods', file: 'ib-psychology-ibps5.html' },
    ]
  },
];

let built = 0;
const allSyllabi = [
  ...caieALevel.map(s => ({ ...s, filename: `caie-alevel-${s.subject}-master-revision.html` })),
  ...caieIGCSE.map(s => ({ ...s, filename: `caie-igcse-${s.subject}-master-revision.html` })),
  ...edexcelGCSE.map(s => ({ ...s, filename: `edexcel-gcse-${s.subject}-master-revision.html` })),
  ...edexcelIAL.map(s => ({ ...s, filename: `edexcel-ial-${s.subject}-master-revision.html` })),
  ...ibSubjects.map(s => ({ ...s, filename: `ib-${s.subject}-master-revision.html` })),
];

for (const subject of allSyllabi) {
  const page = buildMasterGuide(subject.title, subject.topics, subject.color, subject.filename);
  if (page) {
    fs.writeFileSync(path.join(notesDir, subject.filename), page);
    console.log(`✅ ${subject.filename} (${subject.topics.length} topics)`);
    built++;
  } else {
    console.log(`❌ ${subject.filename} (no content)`);
  }
}

console.log(`\nBuilt ${built} syllabus-specific master guides`);
