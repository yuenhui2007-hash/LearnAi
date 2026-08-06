#!/usr/bin/env node
// Bulk note enhancer — adds IGCSE/AS/A2 sections and expands content
const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.html') && !f.endsWith('-summary.html'));

console.log(`Found ${files.length} detailed note files to process`);

// Subject-specific enhancement content
const enhancements = {
  'physics': {
    igcseHeader: '<h3>Key Definitions</h3><ul><li><strong>Scalar:</strong> Quantity with magnitude only (e.g., mass, speed, distance)</li><li><strong>Vector:</strong> Quantity with magnitude and direction (e.g., force, velocity, displacement)</li><li><strong>Base units:</strong> kg, m, s, A, K, mol, cd</li></ul><h3>Essential Formulas</h3>',
    asHeader: '<h3>Derivations & Proofs</h3><p>Understanding where formulas come from is essential for A-Level:</p>',
    a2Header: '<h3>Advanced Applications</h3><p>A2 level requires deeper conceptual understanding and complex problem-solving:</p>'
  },
  'chemistry': {
    igcseHeader: '<h3>Key Definitions</h3><ul><li><strong>Atom:</strong> Smallest particle of an element</li><li><strong>Molecule:</strong> Two or more atoms chemically bonded</li><li><strong>Relative atomic mass (Aᵣ):</strong> Average mass of naturally occurring isotopes</li></ul><h3>Essential Concepts</h3>',
    asHeader: '<h3>Mechanisms & Pathways</h3><p>AS Chemistry requires understanding reaction mechanisms in detail:</p>',
    a2Header: '<h3>Synthesis & Analysis</h3><p>A2 level focuses on multi-step synthesis and analytical techniques:</p>'
  },
  'biology': {
    igcseHeader: '<h3>Key Terminology</h3><ul><li><strong>Cell:</strong> Basic unit of life</li><li><strong>Tissue:</strong> Group of similar cells performing a specific function</li><li><strong>Organ:</strong> Structure made of different tissues working together</li></ul><h3>Core Concepts</h3>',
    asHeader: '<h3>Detailed Mechanisms</h3><p>AS Biology requires understanding processes at the molecular level:</p>',
    a2Header: '<h3>Integration & Evaluation</h3><p>A2 level requires synthesising knowledge across topics:</p>'
  },
  'maths': {
    igcseHeader: '<h3>Key Formulas</h3>',
    asHeader: '<h3>Proofs & Derivations</h3><p>AS Mathematics requires understanding proofs:</p>',
    a2Header: '<h3>Complex Problem Solving</h3><p>A2 level combines multiple topics in single questions:</p>'
  },
  'economics': {
    igcseHeader: '<h3>Key Definitions</h3><ul><li><strong>Scarcity:</strong> Limited resources vs unlimited wants</li><li><strong>Opportunity cost:</strong> Next best alternative foregone</li></ul><h3>Core Concepts</h3>',
    asHeader: '<h3>Diagrams & Analysis</h3><p>AS Economics requires accurate diagram construction:</p>',
    a2Header: '<h3>Evaluation & Synthesis</h3><p>A2 level requires evaluating policies and theories:</p>'
  }
};

let enhanced = 0;
let skipped = 0;

files.forEach(file => {
  const filepath = path.join(notesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Check if already has clear section headers
  const hasIGCSE = content.includes('IGCSE Content') || content.includes('📘 IGCSE');
  const hasAS = content.includes('AS Level Content') || content.includes('📗 AS');
  const hasA2 = content.includes('A2 Level Content') || content.includes('📙 A2');

  // Skip if already well-structured
  if (hasIGCSE && hasAS && hasA2) {
    skipped++;
    return;
  }

  // Add section emojis if missing
  if (content.includes('IGCSE Content</h2>') && !content.includes('📘')) {
    content = content.replace('IGCSE Content</h2>', '📘 IGCSE Content</h2>');
  }
  if (content.includes('AS Level Content</h2>') && !content.includes('📗')) {
    content = content.replace('AS Level Content</h2>', '📗 AS Level Content</h2>');
  }
  if (content.includes('A2 Level Content</h2>') && !content.includes('📙')) {
    content = content.replace('A2 Level Content</h2>', '📙 A2 Level Content</h2>');
  }

  // Identify subject
  const subject = file.split('-')[0];
  const enh = enhancements[subject];

  if (enh) {
    // Enhance IGCSE section
    if (content.includes('📘 IGCSE Content</h2>')) {
      const sectionEnd = content.indexOf('</div>', content.indexOf('📘 IGCSE Content</h2>'));
      if (sectionEnd > 0) {
        const before = content.substring(0, sectionEnd);
        const after = content.substring(sectionEnd);
        if (!before.includes('Key Definitions') && !before.includes('Key Formulas')) {
          content = before + enh.igcseHeader + after;
        }
      }
    }

    // Enhance AS section
    if (content.includes('📗 AS Level Content</h2>')) {
      const sectionEnd = content.indexOf('</div>', content.indexOf('📗 AS Level Content</h2>'));
      if (sectionEnd > 0) {
        const before = content.substring(0, sectionEnd);
        const after = content.substring(sectionEnd);
        if (!before.includes('Derivations') && !before.includes('Mechanisms') && !before.includes('Proofs')) {
          content = before + enh.asHeader + after;
        }
      }
    }

    // Enhance A2 section
    if (content.includes('📙 A2 Level Content</h2>')) {
      const sectionEnd = content.indexOf('</div>', content.indexOf('📙 A2 Level Content</h2>'));
      if (sectionEnd > 0) {
        const before = content.substring(0, sectionEnd);
        const after = content.substring(sectionEnd);
        if (!before.includes('Advanced') && !before.includes('Synthesis')) {
          content = before + enh.a2Header + after;
        }
      }
    }
  }

  // Add exam tips section if missing
  if (!content.includes('Exam Tips') && !content.includes('exam-tip')) {
    const summaryIdx = content.indexOf('summary-box');
    if (summaryIdx > 0) {
      const insertIdx = content.lastIndexOf('</div>', summaryIdx);
      if (insertIdx > 0) {
        const tips = `<div class="notes-section"><h2>🎯 Exam Tips</h2><ul><li>Read the question carefully — identify command words (explain, evaluate, calculate)</li><li>Show all working in calculation questions</li><li>Use diagrams where appropriate — labelled diagrams earn marks</li><li>Plan essay answers before writing</li><li>Check units in all numerical answers</li><li>Leave time to review at the end</li></ul></div>`;
        content = content.slice(0, insertIdx + 6) + tips + content.slice(insertIdx + 6);
      }
    }
  }

  fs.writeFileSync(filepath, content);
  enhanced++;
});

console.log(`Enhanced: ${enhanced}, Skipped (already good): ${skipped}`);
