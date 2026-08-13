// IELTS AI Teaching Feedback System
// Provides personalized study plans, skill breakdowns, progress tracking, and targeted recommendations

const IELTSFeedback = {
  // Generate a personalized study plan based on test performance
  generateStudyPlan(skill, testId, score, issues, strengths, answers, questions) {
    const plan = {
      headline: '',
      bandTarget: this.suggestTargetBand(score.band),
      focusAreas: [],
      weeklyPlan: [],
      resources: [],
      estimatedWeeks: 4
    };

    // Determine headline based on score
    if (score.band >= 7.5) {
      plan.headline = 'Strong performance. Fine-tune for excellence.';
    } else if (score.band >= 6.0) {
      plan.headline = 'Solid foundation. Targeted practice will push you higher.';
    } else if (score.band >= 5.0) {
      plan.headline = 'Good start. Focus on fundamentals to build confidence.';
    } else {
      plan.headline = 'Build the basics first. Consistent practice is key.';
    }

    // Identify focus areas from issues
    const issueTypes = issues.map(i => i.type);
    const uniqueIssues = [...new Set(issueTypes)];

    if (skill === 'writing') {
      if (uniqueIssues.includes('word_count')) plan.focusAreas.push({area: 'Task Response / Achievement', action: 'Practice writing under timed conditions. Use expansion techniques: add examples, consequences, and comparisons.'});
      if (uniqueIssues.includes('task_achievement') || uniqueIssues.includes('task_response')) plan.focusAreas.push({area: 'Task Achievement', action: 'Always include an overview in Task 1. In Task 2, explicitly state your position and address all parts of the question.'});
      if (uniqueIssues.includes('coherence')) plan.focusAreas.push({area: 'Coherence & Cohesion', action: 'Study linking words (however, furthermore, consequently). Practice paragraphing: one main idea per paragraph.'});
      if (uniqueIssues.includes('vocabulary')) plan.focusAreas.push({area: 'Lexical Resource', action: 'Build topic vocabulary lists. Learn collocations (e.g., "significant increase", "dramatic decline"). Avoid repeating the same words.'});
      if (uniqueIssues.includes('sentence_variety') || uniqueIssues.includes('grammar')) plan.focusAreas.push({area: 'Grammatical Range', action: 'Practice complex sentences: relative clauses, conditionals, participle clauses. Mix short and long sentences.'});
      if (uniqueIssues.includes('spelling')) plan.focusAreas.push({area: 'Accuracy', action: 'Proofread every essay. Create a personal spelling error list and review it weekly.'});
      if (plan.focusAreas.length === 0) plan.focusAreas.push({area: 'Refinement', action: 'Focus on nuance: academic tone, precise vocabulary, and sophisticated grammar structures.'});
    }

    if (skill === 'speaking') {
      if (uniqueIssues.includes('length')) plan.focusAreas.push({area: 'Fluency & Coherence', action: 'Use the PEEP structure (Point, Explanation, Example, Personal) to extend answers. Practice with a timer.'});
      if (uniqueIssues.includes('fluency')) plan.focusAreas.push({area: 'Fluency', action: 'Record yourself speaking. Identify pause points. Practice paraphrasing to avoid hesitation.'});
      if (uniqueIssues.includes('coherence')) plan.focusAreas.push({area: 'Organisation', action: 'Use discourse markers: "First of all", "Another point is", "That said", "To sum up".'});
      if (uniqueIssues.includes('vocabulary')) plan.focusAreas.push({area: 'Lexical Resource', action: 'Learn topic-specific vocabulary. Practice using idioms and collocations naturally.'});
      if (uniqueIssues.includes('grammar')) plan.focusAreas.push({area: 'Grammar', action: 'Practice complex structures in speech: "If I had..., I would...", "Having said that...", "Not only... but also..."'});
      if (plan.focusAreas.length === 0) plan.focusAreas.push({area: 'Refinement', action: 'Work on pronunciation features: word stress, intonation, and connected speech.'});
    }

    if (skill === 'listening' || skill === 'reading') {
      const accuracy = score.raw / score.total;
      if (accuracy < 0.5) {
        plan.focusAreas.push({area: 'Fundamental Skills', action: 'Build vocabulary first. Read/listen extensively. Focus on understanding main ideas before details.'});
      } else if (accuracy < 0.7) {
        plan.focusAreas.push({area: 'Question Strategy', action: 'Learn question-type strategies. Practice identifying keywords and paraphrasing.'});
      } else {
        plan.focusAreas.push({area: 'Speed & Precision', action: 'Practice under timed conditions. Work on avoiding common traps (distractors, word-for-word matching).'})  ;
      }
      // Add specific weak question types
      const wrongByType = this.analyzeWrongByType(answers, questions);
      Object.entries(wrongByType).forEach(([type, count]) => {
        if (count > 2) {
          const advice = {
            completion: 'Practice predicting answers from context. Watch for word limits.',
            multiple: 'Eliminate obviously wrong options first. Look for paraphrases, not exact word matches.',
            truefalse: 'Watch for qualifiers: "all", "never", "always" are often false. "Some", "may", "can" are often true.'
          }[type] || 'Review this question type strategy.';
          plan.focusAreas.push({area: `${type.charAt(0).toUpperCase() + type.slice(1)} Questions`, action: advice});
        }
      });
    }

    // Weekly plan
    plan.weeklyPlan = this.buildWeeklyPlan(skill, plan.focusAreas, score.band);

    // Resources
    plan.resources = this.suggestResources(skill, plan.focusAreas, testId);

    return plan;
  },

  suggestTargetBand(currentBand) {
    if (currentBand >= 8.0) return 9.0;
    if (currentBand >= 6.5) return Math.min(9, currentBand + 1.0);
    if (currentBand >= 5.0) return Math.min(9, currentBand + 1.5);
    return Math.min(9, currentBand + 2.0);
  },

  buildWeeklyPlan(skill, focusAreas, band) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const plan = [];

    if (skill === 'writing') {
      plan.push({day: 'Monday', task: 'Task 1 practice (20 min) + review Band 9 model', time: '45 min'});
      plan.push({day: 'Tuesday', task: 'Task 2 planning practice (outline 3 essays)', time: '40 min'});
      plan.push({day: 'Wednesday', task: 'Full Task 2 essay (40 min) + self-mark', time: '60 min'});
      plan.push({day: 'Thursday', task: 'Vocabulary building: topic collocations', time: '30 min'});
      plan.push({day: 'Friday', task: 'Grammar focus: complex sentences practice', time: '40 min'});
      plan.push({day: 'Saturday', task: 'Full writing test (Task 1 + Task 2, 60 min)', time: '75 min'});
      plan.push({day: 'Sunday', task: 'Review mistakes + read model answers', time: '30 min'});
    } else if (skill === 'speaking') {
      plan.push({day: 'Monday', task: 'Part 1 practice (record 5 topics)', time: '30 min'});
      plan.push({day: 'Tuesday', task: 'Part 2 cue card practice (2 cards, timed)', time: '30 min'});
      plan.push({day: 'Wednesday', task: 'Part 3 discussion practice (3 topics)', time: '30 min'});
      plan.push({day: 'Thursday', task: 'Listen to model answers + shadow speak', time: '30 min'});
      plan.push({day: 'Friday', task: 'Full speaking mock test', time: '20 min'});
      plan.push({day: 'Saturday', task: 'Vocabulary: topic-specific word lists', time: '30 min'});
      plan.push({day: 'Sunday', task: 'Review recordings + note improvements', time: '20 min'});
    } else if (skill === 'listening') {
      plan.push({day: 'Monday', task: 'Section 1 practice (easy, build confidence)', time: '30 min'});
      plan.push({day: 'Tuesday', task: 'Section 2 practice (multiple choice focus)', time: '30 min'});
      plan.push({day: 'Wednesday', task: 'Section 3 practice (academic discussion)', time: '30 min'});
      plan.push({day: 'Thursday', task: 'Section 4 practice (lecture, note-taking)', time: '30 min'});
      plan.push({day: 'Friday', task: 'Full listening test (all 4 sections)', time: '40 min'});
      plan.push({day: 'Saturday', task: 'Review transcripts + learn from mistakes', time: '30 min'});
      plan.push({day: 'Sunday', task: 'Vocabulary: academic and topic words', time: '20 min'});
    } else if (skill === 'reading') {
      plan.push({day: 'Monday', task: 'Skimming practice (3 passages, time limit)', time: '30 min'});
      plan.push({day: 'Tuesday', task: 'True/False/Not Given focus', time: '30 min'});
      plan.push({day: 'Wednesday', task: 'Matching headings practice', time: '30 min'});
      plan.push({day: 'Thursday', task: 'Completion/Summary practice', time: '30 min'});
      plan.push({day: 'Friday', task: 'Full reading test (3 passages, 60 min)', time: '65 min'});
      plan.push({day: 'Saturday', task: 'Review wrong answers + learn vocabulary', time: '30 min'});
      plan.push({day: 'Sunday', task: 'Academic article reading (BBC, National Geographic)', time: '30 min'});
    }

    return plan;
  },

  suggestResources(skill, focusAreas, testId) {
    const resources = [];
    resources.push({type: 'guide', title: `Band 9 ${skill.charAt(0).toUpperCase() + skill.slice(1)} Guide`, url: `ielts-${skill}-band9.html`, desc: 'Model answers with examiner annotations'});
    
    if (skill === 'writing') {
      resources.push({type: 'practice', title: 'Writing Practice Tests', url: 'ielts-test-writing.html', desc: '4 full tests with instant feedback'});
      resources.push({type: 'tool', title: 'Academic Word List', url: '#', desc: '570 essential academic words for IELTS'});
    } else if (skill === 'speaking') {
      resources.push({type: 'practice', title: 'Speaking Practice Tests', url: 'ielts-test-speaking.html', desc: '6 tests with model responses'});
      resources.push({type: 'tool', title: 'PEEP Structure Guide', url: 'ielts-speaking-band9.html', desc: 'Point, Explanation, Example, Personal'});
    } else if (skill === 'listening') {
      resources.push({type: 'practice', title: 'Listening Practice Tests', url: 'ielts-test-listening.html', desc: '4 tests with transcripts'});
      resources.push({type: 'tool', title: 'Signpost Words List', url: 'ielts-listening-band9.html', desc: 'Learn to follow academic discussions'});
    } else if (skill === 'reading') {
      resources.push({type: 'practice', title: 'Reading Practice Tests', url: 'ielts-test-reading.html', desc: '3 tests with detailed explanations'});
      resources.push({type: 'tool', title: 'Skimming & Scanning Guide', url: 'ielts-reading-band9.html', desc: 'Time-saving strategies'});
    }
    return resources;
  },

  analyzeWrongByType(answers, questions) {
    const counts = {};
    questions.forEach((q, i) => {
      const userAns = answers[i];
      let isCorrect = false;
      if (q.type === 'multiple') isCorrect = userAns === q.a;
      else if (q.type === 'truefalse') isCorrect = userAns === q.a;
      else if (q.type === 'completion') {
        const normUser = String(userAns || '').toLowerCase().trim();
        const normAns = String(q.answer).toLowerCase().trim();
        isCorrect = normUser === normAns || normAns.split('/').some(a => normUser === a.trim());
      }
      if (!isCorrect) {
        counts[q.type] = (counts[q.type] || 0) + 1;
      }
    });
    return counts;
  },

  // Generate explanation for a specific wrong answer
  generateExplanation(q, userAns, skill) {
    if (userAns === undefined || userAns === null || userAns === '') {
      return {
        whyWrong: 'You did not answer this question.',
        tip: 'Never leave a blank. If unsure, make your best guess — there is no penalty for wrong answers in IELTS.'
      };
    }

    let whyWrong = '';
    let tip = '';

    if (q.type === 'multiple') {
      const correctOption = q.options[q.a];
      const userOption = q.options[userAns];
      whyWrong = `You selected "${userOption}". The correct answer is "${correctOption}".`;
      tip = `The passage states or implies that ${correctOption}. "${userOption}" is a distractor — it may use similar words but contradicts the passage or refers to a different detail.`;
    } else if (q.type === 'truefalse') {
      const correct = q.a ? 'True' : 'False';
      const user = userAns ? 'True' : 'False';
      whyWrong = `You answered ${user}. The correct answer is ${correct}.`;
      if (q.a) {
        tip = 'The information in the question is explicitly supported by the passage. Look for paraphrases of the same idea.';
      } else {
        tip = 'The passage either contradicts this statement or provides no information about it (Not Given). Check carefully for qualifiers like "all", "never", "always".';
      }
    } else if (q.type === 'completion') {
      whyWrong = `You wrote "${userAns}". The correct answer is "${q.answer}".`;
      tip = 'Completion answers must match the exact word(s) from the passage. Check spelling, singular/plural, and word form (noun vs verb). Listen/read for the keyword before the gap.';
    }

    return { whyWrong, tip };
  },

  // Build skill breakdown for visualization
  buildSkillBreakdown(skill, issues, strengths, score) {
    const breakdown = [];
    
    if (skill === 'writing') {
      const criteria = ['Task Achievement', 'Coherence & Cohesion', 'Lexical Resource', 'Grammatical Range'];
      const issueMap = {
        'task_achievement': 0, 'task_response': 0, 'word_count': 0,
        'coherence': 1,
        'vocabulary': 2, 'spelling': 2,
        'sentence_variety': 3, 'grammar': 3
      };
      criteria.forEach((c, i) => {
        const relevantIssues = issues.filter(iss => issueMap[iss.type] === i);
        const relevantStrengths = strengths.filter(s => 
          (i === 0 && (s.includes('overview') || s.includes('position') || s.includes('count'))) ||
          (i === 1 && s.includes('link')) ||
          (i === 2 && s.includes('vocab')) ||
          (i === 3 && s.includes('sentence'))
        );
        let subscore = score.band;
        if (relevantIssues.length > 0) subscore -= relevantIssues.filter(i => i.severity === 'high').length * 0.75 + relevantIssues.filter(i => i.severity === 'medium').length * 0.5;
        if (relevantStrengths.length > 0) subscore += relevantStrengths.length * 0.1;
        breakdown.push({criterion: c, score: Math.max(2.5, Math.min(9, Math.round(subscore * 2) / 2)), issues: relevantIssues.length, strengths: relevantStrengths.length});
      });
    } else if (skill === 'speaking') {
      const criteria = ['Fluency & Coherence', 'Lexical Resource', 'Grammatical Range', 'Pronunciation'];
      const issueMap = {
        'fluency': 0, 'length': 0, 'coherence': 0,
        'vocabulary': 1,
        'grammar': 2
      };
      criteria.forEach((c, i) => {
        const relevantIssues = issues.filter(iss => issueMap[iss.type] === i);
        const relevantStrengths = strengths.filter(s =>
          (i === 0 && (s.includes('marker') || s.includes('fluency'))) ||
          (i === 1 && s.includes('vocab')) ||
          (i === 2 && s.includes('complex')) ||
          (i === 3 && s.includes('pronunciation'))
        );
        let subscore = score.band;
        if (relevantIssues.length > 0) subscore -= relevantIssues.filter(i => i.severity === 'high').length * 0.75 + relevantIssues.filter(i => i.severity === 'medium').length * 0.5;
        if (relevantStrengths.length > 0) subscore += relevantStrengths.length * 0.1;
        breakdown.push({criterion: c, score: Math.max(2.5, Math.min(9, Math.round(subscore * 2) / 2)), issues: relevantIssues.length, strengths: relevantStrengths.length});
      });
    } else {
      // Listening/Reading
      const accuracy = score.raw / score.total;
      breakdown.push({criterion: 'Overall Comprehension', score: Math.min(9, Math.round(accuracy * 9 * 2) / 2), issues: 0, strengths: 0});
      breakdown.push({criterion: 'Detail Identification', score: Math.min(9, Math.round(accuracy * 9 * 2) / 2), issues: 0, strengths: 0});
      breakdown.push({criterion: 'Time Management', score: score.band, issues: 0, strengths: 0});
    }

    return breakdown;
  },

  // Get progress history from localStorage
  getProgressHistory(skill) {
    const results = JSON.parse(localStorage.getItem('ieltsResults') || '[]');
    return results.filter(r => r.skill === skill).map(r => ({
      date: new Date(r.date).toLocaleDateString(),
      testId: r.testId,
      band: r.band || 0
    }));
  },

  // Render study plan HTML
  renderStudyPlan(plan) {
    let html = `<div class="study-plan-card">`;
    html += `<div class="study-plan-header">`;
    html += `<h3>📚 Your Personal Study Plan</h3>`;
    html += `<p class="study-plan-headline">${plan.headline}</p>`;
    html += `<div class="study-target">Target Band: <strong>${plan.bandTarget.toFixed(1)}</strong></div>`;
    html += `</div>`;

    // Focus areas
    html += `<div class="study-focus">`;
    html += `<h4>Focus Areas</h4>`;
    plan.focusAreas.forEach(fa => {
      html += `<div class="focus-item">`;
      html += `<div class="focus-area">${fa.area}</div>`;
      html += `<div class="focus-action">${fa.action}</div>`;
      html += `</div>`;
    });
    html += `</div>`;

    // Weekly plan
    html += `<div class="study-weekly">`;
    html += `<h4>Recommended Weekly Schedule</h4>`;
    html += `<div class="weekly-grid">`;
    plan.weeklyPlan.forEach(day => {
      html += `<div class="day-card">`;
      html += `<div class="day-name">${day.day}</div>`;
      html += `<div class="day-task">${day.task}</div>`;
      html += `<div class="day-time">${day.time}</div>`;
      html += `</div>`;
    });
    html += `</div></div>`;

    // Resources
    html += `<div class="study-resources">`;
    html += `<h4>Recommended Resources</h4>`;
    html += `<div class="resource-grid">`;
    plan.resources.forEach(res => {
      html += `<a href="${res.url}" class="resource-card">`;
      html += `<div class="resource-type">${res.type}</div>`;
      html += `<div class="resource-title">${res.title}</div>`;
      html += `<div class="resource-desc">${res.desc}</div>`;
      html += `</a>`;
    });
    html += `</div></div>`;

    html += `</div>`;
    return html;
  },

  // Render skill breakdown HTML
  renderSkillBreakdown(breakdown) {
    let html = `<div class="skill-breakdown-card">`;
    html += `<h3>📊 Skill Breakdown</h3>`;
    html += `<div class="breakdown-bars">`;
    breakdown.forEach(b => {
      const pct = (b.score / 9 * 100).toFixed(0);
      const color = b.score >= 7 ? '#10b981' : b.score >= 5.5 ? '#f59e0b' : '#ef4444';
      html += `<div class="breakdown-item">`;
      html += `<div class="breakdown-label">${b.criterion}</div>`;
      html += `<div class="breakdown-bar-wrap">`;
      html += `<div class="breakdown-bar" style="width:${pct}%;background:${color}"></div>`;
      html += `</div>`;
      html += `<div class="breakdown-score" style="color:${color}">Band ${b.score.toFixed(1)}</div>`;
      html += `</div>`;
    });
    html += `</div></div>`;
    return html;
  },

  // Render progress chart HTML
  renderProgressChart(history) {
    if (history.length < 2) return '';
    let html = `<div class="progress-chart-card">`;
    html += `<h3>📈 Your Progress</h3>`;
    html += `<div class="progress-chart">`;
    const maxBand = Math.max(...history.map(h => h.band), 9);
    history.forEach((h, i) => {
      const height = (h.band / maxBand * 100).toFixed(0);
      const color = h.band >= 7 ? '#10b981' : h.band >= 5.5 ? '#f59e0b' : '#ef4444';
      html += `<div class="progress-bar-item">`;
      html += `<div class="progress-bar-col" style="height:${height}%;background:${color}"></div>`;
      html += `<div class="progress-bar-label">${h.date}</div>`;
      html += `<div class="progress-bar-band">${h.band.toFixed(1)}</div>`;
      html += `</div>`;
    });
    html += `</div></div>`;
    return html;
  }
};
