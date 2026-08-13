// Subject Test Feedback System
const SubjectFeedback = {
  generatePlan(subject, testId, percentage, earned, total, questions, answers) {
    const plan = {
      headline: '',
      targetGrade: this.suggestTarget(percentage),
      focusAreas: [],
      weeklyPlan: [],
      resources: []
    };

    if (percentage >= 80) plan.headline = 'Excellent. Fine-tune for A*.';
    else if (percentage >= 70) plan.headline = 'Strong. Push for A/A* with targeted revision.';
    else if (percentage >= 60) plan.headline = 'Good base. Focus on weak topics to reach B/A.';
    else if (percentage >= 50) plan.headline = 'Passing. Build fundamentals systematically.';
    else plan.headline = 'Foundation needed. Start with core concepts.';

    // Analyze wrong answers by topic
    const weakTopics = [];
    questions.forEach((q, i) => {
      const userAns = answers[i];
      let gotIt = false;
      if (q.type === 'mcq') gotIt = userAns === q.answer;
      else if (q.type === 'short') {
        const norm = String(userAns || '').toLowerCase().trim();
        const correct = Array.isArray(q.answer) ? q.answer : [q.answer];
        gotIt = correct.some(a => norm === a.toLowerCase().trim());
      }
      if (!gotIt) weakTopics.push(q.topic || 'General');
    });

    const topicCounts = {};
    weakTopics.forEach(t => topicCounts[t] = (topicCounts[t] || 0) + 1);
    const sorted = Object.entries(topicCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
    sorted.forEach(([topic, count]) => {
      plan.focusAreas.push({area: topic, action: `Review ${topic.toLowerCase()} notes and practice ${count} similar questions.`});
    });

    if (plan.focusAreas.length === 0) {
      plan.focusAreas.push({area: 'Exam Technique', action: 'Practice past papers under timed conditions.'});
    }

    // Weekly plan
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    plan.weeklyPlan = [
      {day:'Monday', task:`Topic review: ${plan.focusAreas[0]?.area || 'Core concepts'}`, time:'45 min'},
      {day:'Tuesday', task:'Practice MCQs (timed)', time:'30 min'},
      {day:'Wednesday', task:'Short answer practice', time:'30 min'},
      {day:'Thursday', task:`Topic review: ${plan.focusAreas[1]?.area || 'Application'}`, time:'45 min'},
      {day:'Friday', task:'Essay / structured question', time:'40 min'},
      {day:'Saturday', task:'Full mock test', time:'60 min'},
      {day:'Sunday', task:'Review mistakes + notes', time:'30 min'}
    ];

    plan.resources = [
      {type:'notes', title:`${subject.charAt(0).toUpperCase()+subject.slice(1)} Notes`, url:`subjects.html`, desc:'Comprehensive topic notes'},
      {type:'practice', title:'Past Papers', url:`exam-practice.html`, desc:'Timed practice with AI marking'},
      {type:'flashcards', title:'Flashcards', url:`study-tools.html`, desc:'Quick revision cards'}
    ];

    return plan;
  },

  suggestTarget(pct) {
    if (pct >= 85) return 'A*';
    if (pct >= 75) return 'A';
    if (pct >= 65) return 'B';
    if (pct >= 55) return 'C';
    return 'Pass';
  },

  renderPlan(plan) {
    let html = `<div class="study-plan-card">`;
    html += `<div class="study-plan-header"><h3>📚 Your Study Plan</h3><p>${plan.headline}</p><div class="study-target">Target: <strong>${plan.targetGrade}</strong></div></div>`;
    html += `<div class="study-focus"><h4>Focus Areas</h4>`;
    plan.focusAreas.forEach(fa => {
      html += `<div class="focus-item"><div class="focus-area">${fa.area}</div><div class="focus-action">${fa.action}</div></div>`;
    });
    html += `</div>`;
    html += `<div class="study-weekly"><h4>Weekly Schedule</h4><div class="weekly-grid">`;
    plan.weeklyPlan.forEach(d => {
      html += `<div class="day-card"><div class="day-name">${d.day}</div><div class="day-task">${d.task}</div><div class="day-time">${d.time}</div></div>`;
    });
    html += `</div></div>`;
    html += `<div class="study-resources"><h4>Resources</h4><div class="resource-grid">`;
    plan.resources.forEach(r => {
      html += `<a href="${r.url}" class="resource-card"><div class="resource-type">${r.type}</div><div class="resource-title">${r.title}</div><div class="resource-desc">${r.desc}</div></a>`;
    });
    html += `</div></div></div>`;
    return html;
  }
};
