// Subject AI Marker — client-side instant marking for essay/structured questions
const SubjectAIMarker = {
  // Generic marking rubric applicable across subjects
  markEssay(question, answer, totalMarks, subject) {
    const wordCount = answer.trim().split(/\s+/).filter(w => w).length;
    const issues = [];
    const feedback = [];
    const improvements = [];
    let score = 0;

    // 1. Length heuristic
    const expectedWords = totalMarks * 8;
    if (wordCount < expectedWords * 0.3) {
      issues.push({ severity: 'high', message: 'Answer too short', suggestion: `Aim for ~${expectedWords} words for a ${totalMarks}-mark question.` });
    } else if (wordCount < expectedWords * 0.6) {
      issues.push({ severity: 'medium', message: 'Answer could be more detailed', suggestion: 'Expand with more examples and explanation.' });
    } else {
      feedback.push(`Good length: ${wordCount} words.`);
      score += Math.min(totalMarks * 0.15, 2);
    }

    // 2. Structure
    const hasStructure = /(firstly|secondly|thirdly|moreover|however|therefore|in conclusion|to sum up|on the other hand|furthermore|additionally)/i.test(answer);
    if (hasStructure) {
      feedback.push('Well-structured with clear progression.');
      score += Math.min(totalMarks * 0.1, 1);
    } else {
      issues.push({ severity: 'medium', message: 'Lacks clear structure', suggestion: 'Use linking words: Firstly, However, Therefore, In conclusion.' });
    }

    // 3. Examples / Evidence
    const hasExamples = /(for example|such as|e\.g\.|like|including|in the case of|for instance|specifically|namely)/i.test(answer);
    if (hasExamples) {
      feedback.push('Good use of examples and evidence.');
      score += Math.min(totalMarks * 0.15, 2);
    } else {
      issues.push({ severity: 'medium', message: 'No specific examples', suggestion: 'Include named examples, case studies, or data to support points.' });
    }

    // 4. Evaluation / Analysis (for higher marks)
    const hasEvaluation = /(however|although|on the other hand|despite|nevertheless|in contrast|whereas|while|but|yet|evaluat|assess|to what extent|advantages|disadvantages|benefits|drawbacks|limitations|strengths|weaknesses|critically)/i.test(answer);
    if (hasEvaluation && totalMarks >= 4) {
      feedback.push('Evaluative content present — showing critical thinking.');
      score += Math.min(totalMarks * 0.15, 2);
    } else if (totalMarks >= 6) {
      issues.push({ severity: 'medium', message: 'Limited evaluation', suggestion: 'For higher marks, consider counter-arguments and limitations.' });
    }

    // 5. Conclusion
    const hasConclusion = /(in conclusion|to conclude|overall|therefore|thus|in summary|to sum up|finally)/i.test(answer);
    if (hasConclusion && totalMarks >= 4) {
      feedback.push('Clear conclusion summarising key points.');
      score += Math.min(totalMarks * 0.1, 1);
    } else if (totalMarks >= 6) {
      issues.push({ severity: 'low', message: 'No clear conclusion', suggestion: 'Add a brief conclusion to tie your argument together.' });
    }

    // 6. Definitions
    const hasDefinitions = /(is defined as|refers to|means|can be described as|is a|is the|can be defined as)/i.test(answer);
    if (hasDefinitions) {
      feedback.push('Key terms are defined.');
      score += Math.min(totalMarks * 0.1, 1);
    } else {
      issues.push({ severity: 'low', message: 'Key terms not defined', suggestion: 'Define key terms at the start to show understanding.' });
    }

    // 7. Subject-specific checks
    if (subject === 'maths' || subject === 'additional-maths') {
      const hasWorking = /(=|÷|×|\+|−|steps|therefore|thus|hence|substitute|rearrange|factorise|expand|differentiate|integrate|solve|let x|where|since|because)/i.test(answer);
      if (hasWorking) {
        feedback.push('Mathematical working shown.');
        score += 1;
      } else {
        issues.push({ severity: 'high', message: 'No working shown', suggestion: 'Show all steps — method marks are awarded even if the final answer is wrong.' });
      }
      // Check for numbers/formulas
      const hasNumbers = /\d/.test(answer);
      if (hasNumbers) {
        feedback.push('Numerical values used.');
        score += 0.5;
      }
    }

    if (subject === 'history') {
      const hasDates = /\b(19|18|20)\d{2}\b/.test(answer);
      if (hasDates) {
        feedback.push('Specific dates included.');
        score += 1;
      } else {
        issues.push({ severity: 'low', message: 'No dates mentioned', suggestion: 'Include specific dates to strengthen historical accuracy.' });
      }
      const hasNames = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/.test(answer);
      if (hasNames) {
        feedback.push('Named individuals referenced.');
        score += 0.5;
      }
    }

    if (subject === 'geography') {
      const hasCaseStudy = /(case study|in [A-Z][a-z]+|example of|such as [A-Z]|Bangladesh|Haiti|Japan|China|India|Brazil|Nigeria|USA|UK)/i.test(answer);
      if (hasCaseStudy) {
        feedback.push('Case study / named location included.');
        score += 1;
      } else {
        issues.push({ severity: 'medium', message: 'No case study', suggestion: 'Include a named case study to earn application marks.' });
      }
    }

    if (subject === 'chemistry' || subject === 'physics' || subject === 'biology') {
      const hasEquation = /(\b[A-Z][a-z]?\d*|→|⇌|=/).test(answer);
      if (hasEquation) {
        feedback.push('Equations / formulas used.');
        score += 0.5;
      }
    }

    if (subject === 'economics' || subject === 'business') {
      const hasDiagram = /(diagram|graph|shift|demand|supply|price|quantity|elastic|inelastic|revenue|cost|profit|PED|YED|XED)/i.test(answer);
      if (hasDiagram) {
        feedback.push('Economic / business concepts applied.');
        score += 0.5;
      }
    }

    // Clamp score
    score = Math.max(0, Math.min(totalMarks, Math.round(score)));

    // Build improvements from issues
    issues.forEach(issue => {
      improvements.push(`${issue.severity.toUpperCase()}: ${issue.message} → ${issue.suggestion}`);
    });

    return { score, feedback, improvements, wordCount };
  }
};
