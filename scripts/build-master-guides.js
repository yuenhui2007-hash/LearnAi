const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

function readFile(base) {
  const fp = path.join(notesDir, base);
  if (fs.existsSync(fp)) return fs.readFileSync(fp, 'utf8');
  return '';
}

function extractContent(html) {
  // Extract content between notes-header and </section>
  const start = html.indexOf('<div class="notes-section">');
  const end = html.lastIndexOf('</section>');
  if (start === -1 || end === -1) return '';
  return html.substring(start, end);
}

function stripTags(html) {
  return html
    .replace(/<script[^>]*>.*?<\/script>/gs, '')
    .replace(/<style[^>]*>.*?<\/style>/gs, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildMasterGuide(subject, title, topics, color) {
  const sections = topics.map(t => {
    const html = readFile(t.file);
    if (!html) return '';
    const content = extractContent(html);
    if (!content) return '';
    // Convert to simple HTML
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
<p style="color:var(--gray)">Complete revision coverage — All topics</p>
</div>
<div class="toc">
<h2>📑 Quick Navigation</h2>
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

// Define subjects and their topics
const subjects = [
  {
    id: 'biology',
    title: '🧬 A-Level Biology Master Revision Guide',
    color: '#16a34a',
    filename: 'alevel-biology-master-revision.html',
    topics: [
      { id: 'b1', name: 'B1: Cell Structure', file: 'biology-b1.html' },
      { id: 'b2', name: 'B2: Biological Molecules', file: 'biology-b2.html' },
      { id: 'b3', name: 'B3: Enzymes', file: 'biology-b3.html' },
      { id: 'b4', name: 'B4: Cell Membranes', file: 'biology-b4.html' },
      { id: 'b5', name: 'B5: Cell Division', file: 'biology-b5.html' },
      { id: 'b6', name: 'B6: Genetic Engineering', file: 'biology-b6.html' },
      { id: 'b7', name: 'B7: Transport', file: 'biology-b7.html' },
      { id: 'b8', name: 'B8: Gas Exchange', file: 'biology-b8.html' },
      { id: 'b9', name: 'B9: Infectious Disease', file: 'biology-b9.html' },
      { id: 'b10', name: 'B10: Immunity', file: 'biology-b10.html' },
      { id: 'b11', name: 'B11: Photosynthesis', file: 'biology-b11.html' },
      { id: 'b12', name: 'B12: Respiration', file: 'biology-b12.html' },
      { id: 'b13', name: 'B13: Energy & Ecosystems', file: 'biology-b13.html' },
      { id: 'b14', name: 'B14: Nervous Coordination', file: 'biology-b14.html' },
      { id: 'b15', name: 'B15: Homeostasis', file: 'biology-b15.html' },
    ]
  },
  {
    id: 'chemistry',
    title: '⚗️ A-Level Chemistry Master Revision Guide',
    color: '#2563eb',
    filename: 'alevel-chemistry-master-revision.html',
    topics: [
      { id: 'c1', name: 'C1: Atomic Structure', file: 'chemistry-c1.html' },
      { id: 'c2', name: 'C2: Chemical Bonding', file: 'chemistry-c2.html' },
      { id: 'c3', name: 'C3: States of Matter', file: 'chemistry-c3.html' },
      { id: 'c4', name: 'C4: Chemical Energetics', file: 'chemistry-c4.html' },
      { id: 'c5', name: 'C5: Electrochemistry', file: 'chemistry-c5.html' },
      { id: 'c6', name: 'C6: Equilibria', file: 'chemistry-c6.html' },
      { id: 'c7', name: 'C7: Reaction Kinetics', file: 'chemistry-c7.html' },
      { id: 'c8', name: 'C8: Inorganic Chemistry', file: 'chemistry-c8.html' },
      { id: 'c9', name: 'C9: Group 2 & 17', file: 'chemistry-c9.html' },
      { id: 'c10', name: 'C10: Transition Metals', file: 'chemistry-c10.html' },
      { id: 'c11', name: 'C11: Organic Chemistry', file: 'chemistry-c11.html' },
      { id: 'c12', name: 'C12: Hydrocarbons', file: 'chemistry-c12.html' },
      { id: 'c13', name: 'C13: Carbonyl Compounds', file: 'chemistry-c13.html' },
      { id: 'c14', name: 'C14: Carboxylic Acids', file: 'chemistry-c14.html' },
    ]
  },
  {
    id: 'physics',
    title: '⚛️ A-Level Physics Master Revision Guide',
    color: '#9333ea',
    filename: 'alevel-physics-master-revision.html',
    topics: [
      { id: 'p1', name: 'P1: Physical Quantities', file: 'physics-p1.html' },
      { id: 'p2', name: 'P2: Kinematics', file: 'physics-p2.html' },
      { id: 'p3', name: 'P3: Dynamics', file: 'physics-p3.html' },
      { id: 'p4', name: 'P4: Forces', file: 'physics-p4.html' },
      { id: 'p5', name: 'P5: Work, Energy, Power', file: 'physics-p5.html' },
      { id: 'p6', name: 'P6: Solids & Fluids', file: 'physics-p6.html' },
      { id: 'p7', name: 'P7: Temperature', file: 'physics-p7.html' },
      { id: 'p8', name: 'P8: Ideal Gases', file: 'physics-p8.html' },
      { id: 'p9', name: 'P9: Thermodynamics', file: 'physics-p9.html' },
      { id: 'p10', name: 'P10: Oscillations', file: 'physics-p10.html' },
      { id: 'p11', name: 'P11: Waves', file: 'physics-p11.html' },
      { id: 'p12', name: 'P12: Electric Fields', file: 'physics-p12.html' },
      { id: 'p13', name: 'P13: Capacitance', file: 'physics-p13.html' },
      { id: 'p14', name: 'P14: Current Electricity', file: 'physics-p14.html' },
    ]
  },
  {
    id: 'maths',
    title: '📐 A-Level Mathematics Master Revision Guide',
    color: '#dc2626',
    filename: 'alevel-maths-master-revision.html',
    topics: [
      { id: 'm1', name: 'M1: Quadratics', file: 'maths-m1.html' },
      { id: 'm2', name: 'M2: Functions', file: 'maths-m2.html' },
      { id: 'm3', name: 'M3: Coordinate Geometry', file: 'maths-m3.html' },
      { id: 'm4', name: 'M4: Circular Measure', file: 'maths-m4.html' },
      { id: 'm5', name: 'M5: Trigonometry', file: 'maths-m5.html' },
      { id: 'm6', name: 'M6: Series', file: 'maths-m6.html' },
      { id: 'm7', name: 'M7: Differentiation', file: 'maths-m7.html' },
      { id: 'm8', name: 'M8: Integration', file: 'maths-m8.html' },
      { id: 'm9', name: 'M9: Vectors', file: 'maths-m9.html' },
      { id: 'm10', name: 'M10: Probability', file: 'maths-m10.html' },
      { id: 'm11', name: 'M11: Distributions', file: 'maths-m11.html' },
      { id: 'm12', name: 'M12: Hypothesis Testing', file: 'maths-m12.html' },
      { id: 'm13', name: 'M13: Kinematics', file: 'maths-m13.html' },
    ]
  },
  {
    id: 'economics',
    title: '📊 A-Level Economics Master Revision Guide',
    color: '#ca8a04',
    filename: 'alevel-economics-master-revision.html',
    topics: [
      { id: 'e1', name: 'E1: Basic Economic Ideas', file: 'economics-e1.html' },
      { id: 'e2', name: 'E2: Price System', file: 'economics-e2.html' },
      { id: 'e3', name: 'E3: Government Intervention', file: 'economics-e3.html' },
      { id: 'e4', name: 'E4: International Trade', file: 'economics-e4.html' },
      { id: 'e5', name: 'E5: National Income', file: 'economics-e5.html' },
      { id: 'e6', name: 'E6: Money & Inflation', file: 'economics-e6.html' },
      { id: 'e7', name: 'E7: Balance of Payments', file: 'economics-e7.html' },
      { id: 'e8', name: 'E8: Economic Development', file: 'economics-e8.html' },
      { id: 'e9', name: 'E9: Employment', file: 'economics-e9.html' },
      { id: 'e10', name: 'E10: Fiscal Policy', file: 'economics-e10.html' },
      { id: 'e11', name: 'E11: Supply-Side Policy', file: 'economics-e11.html' },
    ]
  },
];

const subjects2 = [
  {
    id: 'business',
    title: '💼 A-Level Business Master Revision Guide',
    color: '#059669',
    filename: 'alevel-business-master-revision.html',
    topics: [
      { id: 'bu1', name: 'BU1: Business & Environment', file: 'business-bu1.html' },
      { id: 'bu2', name: 'BU2: Human Resource Management', file: 'business-bu2.html' },
      { id: 'bu3', name: 'BU3: Marketing', file: 'business-bu3.html' },
      { id: 'bu4', name: 'BU4: Operations Management', file: 'business-bu4.html' },
      { id: 'bu5', name: 'BU5: Finance & Accounting', file: 'business-bu5.html' },
      { id: 'bu6', name: 'BU6: Strategic Management', file: 'business-bu6.html' },
      { id: 'bu7', name: 'BU7: Business Economics', file: 'business-bu7.html' },
      { id: 'bu8', name: 'BU8: Business Structure', file: 'business-bu8.html' },
      { id: 'bu9', name: 'BU9: External Influences', file: 'business-bu9.html' },
      { id: 'bu10', name: 'BU10: International Business', file: 'business-bu10.html' },
    ]
  },
  {
    id: 'psychology',
    title: '🧠 A-Level Psychology Master Revision Guide',
    color: '#9333ea',
    filename: 'alevel-psychology-master-revision.html',
    topics: [
      { id: 'ps1', name: 'PS1: Cognitive Psychology', file: 'psychology-ps1.html' },
      { id: 'ps2', name: 'PS2: Social Psychology', file: 'psychology-ps2.html' },
      { id: 'ps3', name: 'PS3: Developmental Psychology', file: 'psychology-ps3.html' },
      { id: 'ps4', name: 'PS4: Biological Psychology', file: 'psychology-ps4.html' },
      { id: 'ps5', name: 'PS5: Abnormal Psychology', file: 'psychology-ps5.html' },
      { id: 'ps6', name: 'PS6: Research Methods', file: 'psychology-ps6.html' },
      { id: 'ps7', name: 'PS7: Approaches', file: 'psychology-ps7.html' },
      { id: 'ps8', name: 'PS8: Issues & Debates', file: 'psychology-ps8.html' },
      { id: 'ps9', name: 'PS9: Schizophrenia', file: 'psychology-ps9.html' },
    ]
  },
  {
    id: 'english',
    title: '📖 A-Level English Master Revision Guide',
    color: '#dc2626',
    filename: 'alevel-english-master-revision.html',
    topics: [
      { id: 'en1', name: 'EN1: Poetry', file: 'english-en1.html' },
      { id: 'en2', name: 'EN2: Prose', file: 'english-en2.html' },
      { id: 'en3', name: 'EN3: Drama', file: 'english-en3.html' },
      { id: 'en4', name: 'EN4: Shakespeare', file: 'english-en4.html' },
      { id: 'en5', name: 'EN5: Literary Criticism', file: 'english-en5.html' },
      { id: 'en6', name: 'EN6: Creative Writing', file: 'english-en6.html' },
      { id: 'en7', name: 'EN7: Language Analysis', file: 'english-en7.html' },
      { id: 'en8', name: 'EN8: Comparative Study', file: 'english-en8.html' },
    ]
  },
  {
    id: 'geography',
    title: '🌍 A-Level Geography Master Revision Guide',
    color: '#0891b2',
    filename: 'alevel-geography-master-revision.html',
    topics: [
      { id: 'g1', name: 'G1: Hydrology', file: 'geography-g1.html' },
      { id: 'g2', name: 'G2: Atmosphere', file: 'geography-g2.html' },
      { id: 'g3', name: 'G3: Rocks', file: 'geography-g3.html' },
      { id: 'g4', name: 'G4: Population', file: 'geography-g4.html' },
      { id: 'g5', name: 'G5: Migration', file: 'geography-g5.html' },
      { id: 'g6', name: 'G6: Settlement', file: 'geography-g6.html' },
      { id: 'g7', name: 'G7: Tropical Environments', file: 'geography-g7.html' },
      { id: 'g8', name: 'G8: Coastal Environments', file: 'geography-g8.html' },
      { id: 'g9', name: 'G9: Hazardous Environments', file: 'geography-g9.html' },
      { id: 'g10', name: 'G10: Global Interdependence', file: 'geography-g10.html' },
    ]
  },
  {
    id: 'accounting',
    title: '📒 A-Level Accounting Master Revision Guide',
    color: '#059669',
    filename: 'alevel-accounting-master-revision.html',
    topics: [
      { id: 'ac1', name: 'AC1: Financial Accounting', file: 'accounting-ac1.html' },
      { id: 'ac2', name: 'AC2: Cost & Management', file: 'accounting-ac2.html' },
      { id: 'ac3', name: 'AC3: Ratio Analysis', file: 'accounting-ac3.html' },
      { id: 'ac4', name: 'AC4: Partnerships', file: 'accounting-ac4.html' },
      { id: 'ac5', name: 'AC5: Limited Companies', file: 'accounting-ac5.html' },
      { id: 'ac6', name: 'AC6: Inventory & Depreciation', file: 'accounting-ac6.html' },
      { id: 'ac7', name: 'AC7: Manufacturing', file: 'accounting-ac7.html' },
      { id: 'ac8', name: 'AC8: Budgeting', file: 'accounting-ac8.html' },
      { id: 'ac9', name: 'AC9: Investment Appraisal', file: 'accounting-ac9.html' },
      { id: 'ac10', name: 'AC10: Cash Flow', file: 'accounting-ac10.html' },
      { id: 'ac11', name: 'AC11: Source Documents', file: 'accounting-ac11.html' },
      { id: 'ac12', name: 'AC12: Correction of Errors', file: 'accounting-ac12.html' },
      { id: 'ac13', name: 'AC13: Incomplete Records', file: 'accounting-ac13.html' },
    ]
  },
  {
    id: 'additional-maths',
    title: '🧮 Additional Mathematics Master Revision Guide',
    color: '#7c3aed',
    filename: 'alevel-additional-maths-master-revision.html',
    topics: [
      { id: 'am1', name: 'AM1: Algebra', file: 'additional-maths-am1.html' },
      { id: 'am2', name: 'AM2: Logarithms', file: 'additional-maths-am2.html' },
      { id: 'am3', name: 'AM3: Trigonometry', file: 'additional-maths-am3.html' },
      { id: 'am4', name: 'AM4: Calculus', file: 'additional-maths-am4.html' },
      { id: 'am5', name: 'AM5: Coordinate Geometry', file: 'additional-maths-am5.html' },
      { id: 'am6', name: 'AM6: Vectors', file: 'additional-maths-am6.html' },
      { id: 'am7', name: 'AM7: Matrices', file: 'additional-maths-am7.html' },
      { id: 'am8', name: 'AM8: Numerical Methods', file: 'additional-maths-am8.html' },
      { id: 'am9', name: 'AM9: Probability', file: 'additional-maths-am9.html' },
      { id: 'am10', name: 'AM10: Statistics', file: 'additional-maths-am10.html' },
      { id: 'am11', name: 'AM11: Kinematics', file: 'additional-maths-am11.html' },
      { id: 'am12', name: 'AM12: Forces', file: 'additional-maths-am12.html' },
      { id: 'am13', name: 'AM13: Projectiles', file: 'additional-maths-am13.html' },
      { id: 'am14', name: 'AM14: Work & Energy', file: 'additional-maths-am14.html' },
      { id: 'am15', name: 'AM15: Momentum', file: 'additional-maths-am15.html' },
    ]
  },
  {
    id: 'ict',
    title: '💻 A-Level ICT Master Revision Guide',
    color: '#0891b2',
    filename: 'alevel-ict-master-revision.html',
    topics: [
      { id: 'i1', name: 'I1: Data & Information', file: 'ict-i1.html' },
      { id: 'i2', name: 'I2: Hardware & Software', file: 'ict-i2.html' },
      { id: 'i3', name: 'I3: Networks', file: 'ict-i3.html' },
      { id: 'i4', name: 'I4: Databases', file: 'ict-i4.html' },
      { id: 'i5', name: 'I5: Spreadsheets', file: 'ict-i5.html' },
      { id: 'i6', name: 'I6: Web Design', file: 'ict-i6.html' },
      { id: 'i7', name: 'I7: Systems Analysis', file: 'ict-i7.html' },
      { id: 'i8', name: 'I8: Security', file: 'ict-i8.html' },
      { id: 'i9', name: 'I9: Impact of ICT', file: 'ict-i9.html' },
      { id: 'i10', name: 'I10: Emerging Technologies', file: 'ict-i10.html' },
    ]
  },
];

let built = 0;
for (const subject of [...subjects, ...subjects2]) {
  const page = buildMasterGuide(subject.id, subject.title, subject.topics, subject.color);
  if (page) {
    fs.writeFileSync(path.join(notesDir, subject.filename), page);
    console.log(`✅ Built: ${subject.filename} (${subject.topics.length} topics)`);
    built++;
  } else {
    console.log(`❌ Skipped: ${subject.filename} (no content found)`);
  }
}

console.log(`\nBuilt ${built} master revision guides`);
