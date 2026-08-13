// AI Marker — client-side instant marking
function markAnswer() {
  const subject = document.getElementById('markerSubject').value;
  const question = document.getElementById('markerQuestion').value.trim();
  const answer = document.getElementById('markerAnswer').value.trim();
  const totalMarks = parseInt(document.getElementById('markerMarks').value) || 10;

  if (!subject || !question || !answer) {
    alert('Please fill in all fields');
    return;
  }

  const btn = document.getElementById('markBtn');
  btn.disabled = true;
  btn.textContent = 'Marking...';

  // Simulate processing delay for realism
  setTimeout(() => {
    const result = generateMark(subject, question, answer, totalMarks);
    displayResult(result, totalMarks);
    btn.disabled = false;
    btn.textContent = 'Mark My Answer';
  }, 1200);
}

function generateMark(subject, question, answer, totalMarks) {
  const wordCount = answer.split(/\s+/).length;
  const hasStructure = /(firstly|secondly|thirdly|moreover|however|therefore|in conclusion|to sum up|on the other hand|for example|such as|because|since|as a result)/i.test(answer);
  const hasExamples = /(for example|such as|e\.g\.|like|including|namely|specifically|in the case of|for instance)/i.test(answer);
  const hasEvaluation = /(however|although|on the other hand|despite|nevertheless|in contrast|whereas|while|but|yet|evaluat|assess|to what extent|advantages|disadvantages|benefits|drawbacks|limitations|strengths|weaknesses)/i.test(answer);
  const hasConclusion = /(in conclusion|to conclude|overall|therefore|thus|in summary|to sum up|finally)/i.test(answer);
  const hasDefinitions = /(is defined as|refers to|means|can be described as|is a|is the)/i.test(answer);

  let score = 0;
  let feedback = [];
  let improvements = [];

  // Length check
  if (wordCount < totalMarks * 5) {
    improvements.push('Your answer is quite short. Aim for at least ' + (totalMarks * 5) + ' words for a ' + totalMarks + '-mark question.');
  } else if (wordCount > totalMarks * 15) {
    feedback.push('Good detailed response with sufficient length.');
  } else {
    feedback.push('Adequate length for the marks available.');
    score += 1;
  }

  // Structure check
  if (hasStructure) {
    feedback.push('Well-structured with clear progression and linking words.');
    score += 2;
  } else {
    improvements.push('Add structure using words like "Firstly", "However", "Therefore" to improve flow.');
  }

  // Examples check
  if (hasExamples) {
    feedback.push('Good use of specific examples to support points.');
    score += 2;
  } else {
    improvements.push('Include specific named examples to strengthen your arguments and earn application marks.');
  }

  // Evaluation check (important for higher marks)
  if (hasEvaluation) {
    feedback.push('Good evaluative content — showing both sides of arguments.');
    score += 2;
  } else if (totalMarks >= 6) {
    improvements.push('For higher marks, include evaluation: consider counter-arguments, limitations, or different perspectives.');
  }

  // Conclusion check
  if (hasConclusion) {
    feedback.push('Clear conclusion that summarises key points.');
    score += 1;
  } else if (totalMarks >= 6) {
    improvements.push('Add a brief conclusion to summarise your main argument.');
  }

  // Definitions check
  if (hasDefinitions) {
    feedback.push('Key terms are defined, showing good understanding.');
    score += 1;
  } else {
    improvements.push('Define key terms at the start to demonstrate knowledge.');
  }

  // Subject-specific checks
  if (subject === 'maths' || subject === 'additional-maths') {
    const hasWorking = /(=|÷|×|\+|−|steps|therefore|thus|hence|substitute|rearrange|factorise|expand|differentiate|integrate|solve)/i.test(answer);
    if (hasWorking) {
      feedback.push('Good mathematical working shown.');
      score += 1;
    } else {
      improvements.push('Show all working — method marks are awarded even if final answer is wrong.');
    }
  }

  if (subject === 'history') {
    const hasDates = /\b(19|18|20)\d{2}\b/.test(answer);
    if (hasDates) {
      feedback.push('Specific dates included — excellent for evidence marks.');
      score += 1;
    } else {
      improvements.push('Include specific dates and names to strengthen historical evidence.');
    }
  }

  if (subject === 'geography') {
    const hasCaseStudy = /(case study|for example|such as|in|the|of|where|when|led to|resulted in|caused|affected)/i.test(answer) && answer.length > 200;
    if (hasCaseStudy) {
      feedback.push('Case study material detected — good application.');
      score += 1;
    } else {
      improvements.push('Include named case studies with specific data for top marks.');
    }
  }

  // Cap score
  const maxScore = Math.min(score, totalMarks);
  const percentage = Math.round((maxScore / totalMarks) * 100);

  let band, bandClass;
  if (percentage >= 80) { band = 'A'; bandClass = 'band-a'; }
  else if (percentage >= 65) { band = 'B'; bandClass = 'band-b'; }
  else if (percentage >= 50) { band = 'C'; bandClass = 'band-c'; }
  else { band = 'D'; bandClass = 'band-d'; }

  return {
    score: maxScore,
    total: totalMarks,
    percentage,
    band,
    bandClass,
    feedback,
    improvements,
    wordCount
  };
}

function displayResult(result, totalMarks) {
  let html = '<div class="mark-result">';
  html += '<div class="band-badge ' + result.bandClass + '">Band ' + result.band + ' — ' + result.score + '/' + result.total + ' (' + result.percentage + '%)</div>';
  html += '<p style="color:var(--gray);margin-bottom:16px;">Word count: ' + result.wordCount + '</p>';

  if (result.feedback.length > 0) {
    html += '<div class="mark-section"><h4>✅ Strengths</h4><ul>';
    result.feedback.forEach(f => html += '<li>' + f + '</li>');
    html += '</ul></div>';
  }

  if (result.improvements.length > 0) {
    html += '<div class="mark-section" style="border-left-color:#f59e0b;"><h4>📝 Areas for Improvement</h4><ul>';
    result.improvements.forEach(i => html += '<li>' + i + '</li>');
    html += '</ul></div>';
  }

  html += '<div class="mark-section" style="border-left-color:var(--accent);"><h4>💡 Marking Criteria Tips</h4>';
  html += '<p>For ' + totalMarks + '-mark questions, examiners typically look for:</p><ul>';
  html += '<li><strong>Knowledge (AO1):</strong> Accurate definitions and concepts</li>';
  html += '<li><strong>Application (AO2):</strong> Examples, case studies, context</li>';
  html += '<li><strong>Analysis (AO3):</strong> Explanation of causes, consequences, processes</li>';
  if (totalMarks >= 6) {
    html += '<li><strong>Evaluation (AO4):</strong> Balanced arguments, judgement, different perspectives</li>';
  }
  html += '</ul></div>';

  html += '</div>';
  document.getElementById('markerResult').innerHTML = html;
}
