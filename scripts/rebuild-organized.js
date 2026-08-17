const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '..', 'notes');

// Organized content database with tables, examples, and proper structure
const ORGANIZED = {
  'maths-m1': {
    name: 'Quadratics',
    sections: [
      {
        title: 'Solving Quadratic Equations',
        content: `<p>A quadratic equation has the form <strong>ax² + bx + c = 0</strong> where a ≠ 0.</p>

<h4>Method 1: Factorising</h4>
<p>Express as two brackets: <strong>ax² + bx + c = (px + q)(rx + s)</strong></p>
<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Solve:</strong> x² + 5x + 6 = 0</p>
<p><strong>Step 1:</strong> Find two numbers that multiply to +6 and add to +5 → +2 and +3</p>
<p><strong>Step 2:</strong> Write factors: (x + 2)(x + 3) = 0</p>
<p><strong>Step 3:</strong> x + 2 = 0 or x + 3 = 0</p>
<p><strong>Answer:</strong> x = −2 or x = −3</p>
</div>

<h4>Method 2: Quadratic Formula</h4>
<div class="formula-box">x = <span class="fraction"><span class="top">−b ± √(b² − 4ac)</span><span class="bottom">2a</span></span></div>
<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Solve:</strong> 2x² − 7x + 3 = 0</p>
<p>a = 2, b = −7, c = 3</p>
<p>x = <span class="fraction"><span class="top">−(−7) ± √((−7)² − 4(2)(3))</span><span class="bottom">2(2)</span></span> = <span class="fraction"><span class="top">7 ± √(49 − 24)</span><span class="bottom">4</span></span> = <span class="fraction"><span class="top">7 ± 5</span><span class="bottom">4</span></span></p>
<p>x = 3 or x = ½</p>
</div>

<h4>Method 3: Completing the Square</h4>
<p>Rewrite in the form <strong>a(x + h)² + k</strong></p>
<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Express in completed square form:</strong> x² + 6x + 5</p>
<p><strong>Step 1:</strong> Take half the x-coefficient: 6 ÷ 2 = 3</p>
<p><strong>Step 2:</strong> Write (x + 3)² = x² + 6x + 9</p>
<p><strong>Step 3:</strong> x² + 6x + 5 = (x + 3)² − 9 + 5 = <strong>(x + 3)² − 4</strong></p>
</div>`
      },
      {
        title: 'The Discriminant',
        content: `<p>The discriminant determines the nature of the roots.</p>
<div class="formula-box">Δ = b² − 4ac</div>
<table class="data-table">
<tr><th>Value of Δ</th><th>Nature of Roots</th><th>Graph</th></tr>
<tr><td>Δ > 0</td><td>Two distinct real roots</td><td>Crosses x-axis twice</td></tr>
<tr><td>Δ = 0</td><td>One repeated real root</td><td>Touches x-axis at vertex</td></tr>
<tr><td>Δ < 0</td><td>No real roots</td><td>Does not cross x-axis</td></tr>
<tr><td>Δ = perfect square</td><td>Rational roots</td><td>—</td></tr>
</table>
<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Find the discriminant and state the nature of roots:</strong> 3x² + 2x + 5 = 0</p>
<p>Δ = (2)² − 4(3)(5) = 4 − 60 = <strong>−56</strong></p>
<p>Since Δ < 0: <strong>No real roots</strong></p>
</div>`
      },
      {
        title: 'Quadratic Graphs',
        content: `<p>The graph of y = ax² + bx + c is a <strong>parabola</strong>.</p>

<h4>Key Features</h4>
<table class="data-table">
<tr><th>Feature</th><th>How to Find</th></tr>
<tr><td>Shape</td><td>a > 0: ∪ (minimum); a < 0: ∩ (maximum)</td></tr>
<tr><td>Vertex</td><td>x = −b/2a, then substitute to find y</td></tr>
<tr><td>Axis of symmetry</td><td>x = −b/2a</td></tr>
<tr><td>y-intercept</td><td>Set x = 0 → y = c</td></tr>
<tr><td>x-intercepts (roots)</td><td>Solve ax² + bx + c = 0</td></tr>
</table>

<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Sketch:</strong> y = x² − 4x + 3</p>
<p><strong>Shape:</strong> a = 1 > 0, so minimum point (∪)</p>
<p><strong>Vertex:</strong> x = −(−4)/(2×1) = 2, y = (2)² − 4(2) + 3 = −1 → <strong>(2, −1)</strong></p>
<p><strong>Roots:</strong> x² − 4x + 3 = (x−1)(x−3) = 0 → x = 1 or x = 3</p>
<p><strong>y-intercept:</strong> (0, 3)</p>
</div>`
      },
      {
        title: 'Quadratic Inequalities',
        content: `<p>Solve by finding critical values first, then testing intervals.</p>

<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Solve:</strong> x² − 5x + 6 > 0</p>
<p><strong>Step 1:</strong> Find roots: x² − 5x + 6 = (x−2)(x−3) = 0 → x = 2 or x = 3</p>
<p><strong>Step 2:</strong> Sketch parabola (∪ shape, crosses at 2 and 3)</p>
<p><strong>Step 3:</strong> We want where y > 0 (above x-axis)</p>
<p><strong>Answer:</strong> x < 2 or x > 3</p>
</div>

<div class="key-point">
<strong>Important:</strong> If you multiply or divide an inequality by a negative number, reverse the inequality sign. It's safer to rearrange so the x² coefficient is positive.
</div>`
      }
    ],
    summary: ['Quadratic formula: x = (−b ± √(b² − 4ac))/2a', 'Discriminant Δ = b² − 4ac determines number of roots', 'Vertex at x = −b/2a', 'Complete square: x² + bx + c = (x + b/2)² − (b/2)² + c', 'For inequalities: find roots, sketch, determine regions'],
    tips: ['Always state the formula before substituting values', 'Check if factorising is possible first — it saves time', 'For sketching, always label vertex, roots, and y-intercept', 'If Δ < 0, state "no real roots" rather than "no solutions"']
  },
  'maths-m2': {
    name: 'Functions',
    sections: [
      {
        title: 'Function Notation & Definitions',
        content: `<p>A <strong>function</strong> maps each element of the domain to exactly one element of the range.</p>
<table class="data-table">
<tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Domain</td><td>All possible input values (x)</td><td>f(x) = √x, domain: x ≥ 0</td></tr>
<tr><td>Range</td><td>All possible output values (y)</td><td>f(x) = x², range: f(x) ≥ 0</td></tr>
<tr><td>Codomain</td><td>Set containing the range</td><td>Usually all real numbers</td></tr>
</table>

<h4>Types of Functions</h4>
<table class="data-table">
<tr><th>Type</th><th>Definition</th><th>Example</th></tr>
<tr><td>One-one (injective)</td><td>Different inputs → different outputs</td><td>f(x) = 2x + 1</td></tr>
<tr><td>Many-one</td><td>Different inputs → same output</td><td>f(x) = x²</td></tr>
<tr><td>Onto (surjective)</td><td>Range = Codomain</td><td>f: ℝ→ℝ, f(x) = x³</td></tr>
</table>`
      },
      {
        title: 'Composite Functions',
        content: `<p>A <strong>composite function</strong> applies one function after another.</p>
<div class="formula-box">fg(x) = f(g(x))</div>
<p><strong>Read right to left:</strong> apply g first, then f.</p>

<div class="example-box">
<h5>Worked Example</h5>
<p>Given f(x) = 2x + 1 and g(x) = x², find:</p>
<p><strong>a) fg(x):</strong> f(g(x)) = f(x²) = 2(x²) + 1 = <strong>2x² + 1</strong></p>
<p><strong>b) gf(x):</strong> g(f(x)) = g(2x + 1) = (2x + 1)² = <strong>4x² + 4x + 1</strong></p>
<p><strong>Note:</strong> fg(x) ≠ gf(x)</p>
</div>

<div class="key-point">
<strong>Domain of fg(x):</strong> x must be in domain of g, AND g(x) must be in domain of f.
</div>`
      },
      {
        title: 'Inverse Functions',
        content: `<p>Only <strong>one-one functions</strong> have inverses. A function must pass the <strong>horizontal line test</strong>.</p>

<h4>Finding the Inverse</h4>
<ol>
<li>Write <strong>y = f(x)</strong></li>
<li>Rearrange to make x the subject</li>
<li>Swap x and y</li>
<li>Replace y with f⁻¹(x)</li>
</ol>

<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Find f⁻¹(x)</strong> given f(x) = (2x + 3)/(x − 1)</p>
<p><strong>Step 1:</strong> y = (2x + 3)/(x − 1)</p>
<p><strong>Step 2:</strong> y(x − 1) = 2x + 3 → yx − y = 2x + 3 → yx − 2x = y + 3 → x(y − 2) = y + 3</p>
<p><strong>Step 3:</strong> x = (y + 3)/(y − 2)</p>
<p><strong>Step 4:</strong> f⁻¹(x) = <strong>(x + 3)/(x − 2)</strong></p>
</div>

<table class="data-table">
<tr><th>Property</th><th>Relationship</th></tr>
<tr><td>Domain of f⁻¹</td><td>= Range of f</td></tr>
<tr><td>Range of f⁻¹</td><td>= Domain of f</td></tr>
<tr><td>Graph of f⁻¹</td><td>Reflection of f in line y = x</td></tr>
<tr><td>f(f⁻¹(x))</td><td>= x</td></tr>
</table>`
      },
      {
        title: 'Modulus Function',
        content: `<div class="formula-box">|x| = x if x ≥ 0<br>|x| = −x if x < 0</div>

<h4>Graphs</h4>
<table class="data-table">
<tr><th>Transformation</th><th>Effect on Graph</th></tr>
<tr><td>y = |f(x)|</td><td>Reflect negative parts above x-axis</td></tr>
<tr><td>y = f(|x|)</td><td>Reflect right side to left (symmetric about y-axis)</td></tr>
</table>

<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Solve:</strong> |2x − 3| = 5</p>
<p><strong>Case 1:</strong> 2x − 3 = 5 → 2x = 8 → x = 4</p>
<p><strong>Case 2:</strong> 2x − 3 = −5 → 2x = −2 → x = −1</p>
<p><strong>Answer:</strong> x = 4 or x = −1</p>
</div>

<div class="example-box">
<h5>Worked Example</h5>
<p><strong>Solve:</strong> |x − 2| < 3</p>
<p>−3 < x − 2 < 3</p>
<p>−1 < x < 5</p>
</div>`
      }
    ],
    summary: ['fg(x) = f(g(x)) — apply g first, then f', 'Inverse: write y = f(x), rearrange for x, swap x and y', 'Domain of f⁻¹ = Range of f; Range of f⁻¹ = Domain of f', '|x| = x for x ≥ 0; |x| = −x for x < 0', 'Only one-one functions have inverses'],
    tips: ['Always check if a function is one-one before finding its inverse', 'For composite functions, work from the inside out', 'When solving |f(x)| = a, always consider ±a', 'Draw the line y = x to check inverse reflections']
  },
  'maths-m3': {
    name: 'Coordinate Geometry',
    sections: [
      {
        title: 'Distance and Midpoint',
        content: `<div class="formula-box">Distance: d = √((x₂ − x₁)² + (y₂ − y₁)²)<br>Midpoint: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</div>

<div class="example-box">
<h5>Worked Example</h5>
<p>Find distance and midpoint of A(2, 3) and B(8, 11)</p>
<p><strong>Distance:</strong> d = √((8−2)² + (11−3)²) = √(36 + 64) = √100 = <strong>10</strong></p>
<p><strong>Midpoint:</strong> M = ((2+8)/2, (3+11)/2) = <strong>(5, 7)</strong></p>
</div>`
      },
      {
        title: 'Gradient',
        content: `<div class="formula-box">m = (y₂ − y₁)/(x₂ − x₁)</div>
<table class="data-table">
<tr><th>Gradient</th><th>Description</th></tr>
<tr><td>m > 0</td><td>Line slopes upward (left to right)</td></tr>
<tr><td>m < 0</td><td>Line slopes downward (left to right)</td></tr>
<tr><td>m = 0</td><td>Horizontal line</td></tr>
<tr><td>Undefined</td><td>Vertical line</td></tr>
</table>`
      },
      {
        title: 'Equations of Lines',
        content: `<table class="data-table">
<tr><th>Form</th><th>Equation</th><th>Use When</th></tr>
<tr><td>Gradient-intercept</td><td>y = mx + c</td><td>You know gradient and y-intercept</td></tr>
<tr><td>Point-slope</td><td>y − y₁ = m(x − x₁)</td><td>You know gradient and one point</td></tr>
<tr><td>General</td><td>ax + by + c = 0</td><td>Standard form required</td></tr>
</table>

<div class="example-box">
<h5>Worked Example</h5>
<p>Find equation of line through (3, 4) with gradient 2</p>
<p>y − 4 = 2(x − 3)</p>
<p>y − 4 = 2x − 6</p>
<p>y = 2x − 2 or <strong>2x − y − 2 = 0</strong></p>
</div>`
      },
      {
        title: 'Parallel and Perpendicular',
        content: `<table class="data-table">
<tr><th>Relationship</th><th>Condition</th></tr>
<tr><td>Parallel lines</td><td>m₁ = m₂ (same gradient)</td></tr>
<tr><td>Perpendicular lines</td><td>m₁ × m₂ = −1 or m₂ = −1/m₁</td></tr>
</table>

<div class="example-box">
<h5>Worked Example</h5>
<p>Line L₁ has gradient 3. Find gradient of line perpendicular to L₁.</p>
<p>m₂ = −1/3</p>
</div>`
      }
    ],
    summary: ['Distance: d = √((x₂ − x₁)² + (y₂ − y₁)²)', 'Gradient: m = (y₂ − y₁)/(x₂ − x₁)', 'Parallel: m₁ = m₂', 'Perpendicular: m₁ × m₂ = −1', 'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)'],
    tips: ['Always draw a sketch to verify your answer', 'For perpendicular gradients, flip and change sign', 'General form ax + by + c = 0 can be rearranged to y = mx + c', 'Show all working when finding equations']
  }
};

// Template for organized notes
function buildPage(title, syllabus, subjectData) {
  const sections = subjectData.sections.map((s, i) => `
<div class="topic-block" id="section-${i+1}">
<div class="topic-header">
<span class="topic-number">${i+1}</span>
<h3>${s.title}</h3>
</div>
<div class="topic-content">
${s.content}
</div>
</div>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — ${syllabus} | LearnAI</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
<style>
.notes-page { padding: 120px 0 60px; background: #f8fafc; min-height: 100vh; }
.notes-container { max-width: 900px; margin: 0 auto; background: white; padding: 48px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.notes-header { margin-bottom: 40px; padding-bottom: 24px; border-bottom: 3px solid #e2e8f0; }
.notes-header h1 { font-size: 2.2rem; margin-bottom: 8px; color: #1e293b; }
.syllabus-tag { display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 16px; }

/* Table of Contents */
.toc { background: #f1f5f9; padding: 24px 28px; border-radius: 12px; margin-bottom: 40px; border-left: 4px solid #3b82f6; }
.toc h2 { font-size: 1.1rem; color: #1e40af; margin-bottom: 12px; }
.toc ol { margin: 0; padding-left: 20px; }
.toc li { margin-bottom: 6px; color: #475569; }
.toc a { color: #3b82f6; text-decoration: none; }
.toc a:hover { text-decoration: underline; }

/* Topic Blocks */
.topic-block { margin-bottom: 48px; padding-bottom: 32px; border-bottom: 2px solid #e2e8f0; }
.topic-block:last-child { border-bottom: none; }
.topic-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.topic-number { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #3b82f6; color: white; font-weight: 700; font-size: 1.1rem; border-radius: 10px; flex-shrink: 0; }
.topic-header h3 { font-size: 1.4rem; color: #1e293b; margin: 0; }
.topic-content { padding-left: 56px; }
.topic-content h4 { font-size: 1.1rem; color: #334155; margin: 24px 0 12px; padding-bottom: 6px; border-bottom: 1px solid #cbd5e1; }
.topic-content h5 { font-size: 0.95rem; color: #475569; margin: 16px 0 8px; font-weight: 600; }
.topic-content p { line-height: 1.8; color: #475569; margin-bottom: 12px; }
.topic-content ul { margin: 12px 0; padding-left: 24px; }
.topic-content ul li { margin-bottom: 8px; color: #475569; line-height: 1.7; }
.topic-content ol { margin: 12px 0; padding-left: 24px; }
.topic-content ol li { margin-bottom: 8px; color: #475569; line-height: 1.7; }

/* Formula Box */
.formula-box { background: #eff6ff; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #3b82f6; font-family: 'Courier New', monospace; margin: 20px 0; font-size: 1rem; line-height: 1.6; color: #1e40af; }

/* Example Box */
.example-box { background: #f0fdf4; padding: 20px 24px; border-radius: 10px; border-left: 4px solid #22c55e; margin: 20px 0; }
.example-box h5 { color: #15803d; margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; }
.example-box p { margin-bottom: 8px; color: #166534; }

/* Key Point */
.key-point { background: #fef9c3; padding: 16px 20px; border-radius: 10px; border-left: 4px solid #eab308; margin: 20px 0; color: #854d0e; font-weight: 500; }

/* Data Table */
.data-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.95rem; }
.data-table th { background: #f1f5f9; padding: 12px 16px; text-align: left; font-weight: 600; color: #334155; border: 1px solid #e2e8f0; }
.data-table td { padding: 12px 16px; color: #475569; border: 1px solid #e2e8f0; }
.data-table tr:nth-child(even) { background: #f8fafc; }

/* Summary Box */
.summary-box { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }
.summary-box h2 { color: #92400e; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #f59e0b; }
.summary-box ul { margin: 0; padding-left: 20px; }
.summary-box li { color: #78350f; margin-bottom: 8px; line-height: 1.6; }

/* Exam Tips */
.exam-tips { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 28px; border-radius: 12px; margin: 40px 0; }
.exam-tips h2 { color: #1e40af; font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #3b82f6; }
.exam-tips ul { margin: 0; padding-left: 20px; }
.exam-tips li { color: #1e3a8a; margin-bottom: 8px; line-height: 1.6; }

/* Fraction */
.fraction { display: inline-block; text-align: center; vertical-align: middle; margin: 0 4px; }
.fraction .top { display: block; border-bottom: 1px solid; padding: 0 4px; }
.fraction .bottom { display: block; padding: 0 4px; }

@media (max-width: 768px) {
  .notes-container { padding: 24px; }
  .topic-content { padding-left: 0; }
  .topic-header { flex-direction: column; align-items: flex-start; }
}
</style>
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>

<section class="notes-page"><div class="container">
<div class="notes-container">
<div class="notes-header">
<span class="syllabus-tag">${syllabus}</span>
<h1>${title}</h1>
<p style="color:#64748b;margin-top:8px;">Comprehensive study notes with worked examples</p>
</div>

<div class="toc">
<h2>📑 Contents</h2>
<ol>
${subjectData.sections.map((s, i) => `<li><a href="#section-${i+1}">${s.title}</a></li>`).join('\n')}
</ol>
</div>

${sections}

<div class="summary-box">
<h2>📝 Quick Summary</h2>
<ul>
${subjectData.summary.map(s => `<li>${s}</li>`).join('\n')}
</ul>
</div>

<div class="exam-tips">
<h2>💡 Exam Tips</h2>
<ul>
${subjectData.tips.map(t => `<li>${t}</li>`).join('\n')}
</ul>
</div>
</div>
</div></section>

<script src="../js/theme.js?v=5"></script>
</body>
</html>`;
}

// Rebuild files
let rebuilt = 0;
for (const [key, data] of Object.entries(ORGANIZED)) {
  const variants = [
    `${key}.html`,
    `${key}-a.html`,
    `${key}-igcse.html`
  ];

  const syllabusMap = {
    [`${key}.html`]: 'A-Level',
    [`${key}-a.html`]: 'A-Level',
    [`${key}-igcse.html`]: 'IGCSE'
  };

  for (const file of variants) {
    const filepath = path.join(notesDir, file);
    if (!fs.existsSync(filepath)) continue;
    const page = buildPage(data.name, syllabusMap[file] || 'A-Level', data);
    fs.writeFileSync(filepath, page);
    console.log(`✅ Rebuilt: ${file}`);
    rebuilt++;
  }
}

console.log(`\nRebuilt ${rebuilt} files with organized structure`);
