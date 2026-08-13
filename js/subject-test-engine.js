// Generic Subject Test Engine
// Handles MCQ, Short Answer, and Essay questions for all subjects

class SubjectTestEngine {
  constructor(config) {
    this.subject = config.subject;
    this.testId = config.testId;
    this.test = config.test;
    this.container = document.getElementById('testContainer');
    this.timerEl = document.getElementById('testTimer');
    this.progressEl = document.getElementById('testProgress');
    this.resultsEl = document.getElementById('testResults');

    this.currentQuestion = 0;
    this.answers = {};
    this.timeRemaining = this.test.duration * 60;
    this.timerInterval = null;
    this.startTime = null;
  }

  start() {
    document.getElementById('testIntro').style.display = 'none';
    document.getElementById('testArea').style.display = 'block';
    this.resultsEl.style.display = 'none';
    this.startTime = Date.now();
    this.startTimer();
    this.renderQuestion();
    this.updateProgress();
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();
      if (this.timeRemaining <= 0) this.submitTest();
    }, 1000);
  }

  updateTimerDisplay() {
    const m = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
    const s = (this.timeRemaining % 60).toString().padStart(2, '0');
    this.timerEl.textContent = `${m}:${s}`;
    if (this.timeRemaining < 300) this.timerEl.classList.add('warning');
    if (this.timeRemaining < 60) this.timerEl.classList.add('danger');
  }

  renderQuestion() {
    const q = this.test.questions[this.currentQuestion];
    const isLast = this.currentQuestion === this.test.questions.length - 1;

    let html = `<div class="subject-q-card">`;
    html += `<div class="q-header"><span class="q-num">Q${this.currentQuestion + 1}</span><span class="q-marks">${q.marks} mark${q.marks > 1 ? 's' : ''}</span></div>`;
    html += `<div class="q-text">${q.question}</div>`;

    if (q.type === 'mcq') {
      html += `<div class="q-options">`;
      q.options.forEach((opt, i) => {
        const selected = this.answers[this.currentQuestion] === i ? 'selected' : '';
        html += `<div class="q-option ${selected}" onclick="engine.selectOption(${i})">${String.fromCharCode(65 + i)}. ${opt}</div>`;
      });
      html += `</div>`;
    } else if (q.type === 'short') {
      const val = this.answers[this.currentQuestion] || '';
      html += `<input type="text" class="q-input" id="qInput" value="${val}" placeholder="Your answer..." onchange="engine.saveTextAnswer(this.value)">`;
    } else if (q.type === 'essay') {
      const val = this.answers[this.currentQuestion] || '';
      html += `<textarea class="q-textarea" id="qTextarea" placeholder="Write your answer here..." onchange="engine.saveTextAnswer(this.value)">${val}</textarea>`;
      html += `<div class="word-count" id="wordCount">${val ? val.split(/\s+/).length : 0} words</div>`;
    }

    html += `<div class="q-nav">`;
    if (this.currentQuestion > 0) html += `<button class="btn-nav" onclick="engine.prevQuestion()">Previous</button>`;
    html += `<div class="q-nav-spacer"></div>`;
    if (!isLast) html += `<button class="btn-nav btn-next" onclick="engine.nextQuestion()">Next</button>`;
    else html += `<button class="btn-nav btn-submit" onclick="engine.confirmSubmit()">Submit Test</button>`;
    html += `</div></div>`;

    this.container.innerHTML = html;

    // Re-attach input listener for word count
    const ta = document.getElementById('qTextarea');
    if (ta) {
      ta.addEventListener('input', () => {
        document.getElementById('wordCount').textContent = ta.value.split(/\s+/).filter(w => w).length + ' words';
        this.saveTextAnswer(ta.value);
      });
    }
  }

  selectOption(index) {
    this.answers[this.currentQuestion] = index;
    this.renderQuestion();
  }

  saveTextAnswer(value) {
    this.answers[this.currentQuestion] = value;
  }

  nextQuestion() {
    if (this.currentQuestion < this.test.questions.length - 1) {
      this.currentQuestion++;
      this.renderQuestion();
      this.updateProgress();
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuestion();
      this.updateProgress();
    }
  }

  updateProgress() {
    const pct = ((this.currentQuestion + 1) / this.test.questions.length * 100).toFixed(0);
    this.progressEl.innerHTML = `${this.currentQuestion + 1}/${this.test.questions.length}`;
    this.progressEl.style.width = pct + '%';
  }

  confirmSubmit() {
    if (confirm('Submit your test? You cannot change answers after submission.')) {
      this.submitTest();
    }
  }

  submitTest() {
    clearInterval(this.timerInterval);
    document.getElementById('testArea').style.display = 'none';
    this.resultsEl.style.display = 'block';
    this.showResults();
    this.saveResult();
  }

  showResults() {
    let totalMarks = 0;
    let earnedMarks = 0;
    let reviewHTML = '<div class="results-summary">';

    this.test.questions.forEach((q, i) => {
      totalMarks += q.marks;
      const userAns = this.answers[i];
      let isCorrect = false;
      let marksEarned = 0;

      if (q.type === 'mcq') {
        isCorrect = userAns === q.answer;
        marksEarned = isCorrect ? q.marks : 0;
      } else if (q.type === 'short') {
        const normUser = String(userAns || '').toLowerCase().trim();
        const correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
        isCorrect = correctAnswers.some(a => normUser === a.toLowerCase().trim());
        marksEarned = isCorrect ? q.marks : 0;
      } else if (q.type === 'essay') {
        // Essay marked by AI
        const aiResult = SubjectAIMarker.markEssay(q.question, userAns || '', q.marks, this.subject);
        marksEarned = aiResult.score;
        isCorrect = marksEarned >= q.marks * 0.5;
      }

      earnedMarks += marksEarned;

      reviewHTML += `<div class="result-item ${marksEarned === q.marks ? 'correct' : marksEarned > 0 ? 'partial' : 'incorrect'}">`;
      reviewHTML += `<div class="result-q">Q${i + 1}: ${q.question}</div>`;
      reviewHTML += `<div class="result-marks">${marksEarned}/${q.marks} marks</div>`;

      if (q.type === 'mcq') {
        reviewHTML += `<div class="result-answer">Your answer: ${userAns !== undefined ? q.options[userAns] : '<em>Not answered</em>'}</div>`;
        if (!isCorrect) reviewHTML += `<div class="result-correct">Correct answer: ${q.options[q.answer]}</div>`;
      } else if (q.type === 'short') {
        reviewHTML += `<div class="result-answer">Your answer: ${userAns || '<em>Not answered</em>'}</div>`;
        if (!isCorrect) reviewHTML += `<div class="result-correct">Correct answer: ${Array.isArray(q.answer) ? q.answer.join(' or ') : q.answer}</div>`;
      } else if (q.type === 'essay') {
        const aiResult = SubjectAIMarker.markEssay(q.question, userAns || '', q.marks, this.subject);
        reviewHTML += `<div class="result-answer">Your answer: ${(userAns || '<em>Not answered</em>').substring(0, 200)}${(userAns || '').length > 200 ? '...' : ''}</div>`;
        reviewHTML += `<div class="ai-feedback">`;
        reviewHTML += `<div class="ai-score">AI Score: ${aiResult.score}/${q.marks}</div>`;
        aiResult.feedback.forEach(f => reviewHTML += `<div class="ai-fb-item good">${f}</div>`);
        aiResult.improvements.forEach(im => reviewHTML += `<div class="ai-fb-item">${im}</div>`);
        reviewHTML += `</div>`;
      }

      if (!isCorrect && q.explanation) {
        reviewHTML += `<div class="result-explanation"><strong>Explanation:</strong> ${q.explanation}</div>`;
      }
      reviewHTML += `</div>`;
    });

    reviewHTML += '</div>';

    const percentage = (earnedMarks / totalMarks * 100).toFixed(1);
    const grade = percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : percentage >= 50 ? 'D' : 'E';
    const gradeColor = percentage >= 80 ? '#10b981' : percentage >= 60 ? '#f59e0b' : '#ef4444';

    let html = `<div class="score-card">`;
    html += `<div class="score-band" style="color:${gradeColor}">Grade ${grade}</div>`;
    html += `<div class="score-details">${earnedMarks}/${totalMarks} marks (${percentage}%)</div>`;
    html += `<div class="score-bar"><div class="score-fill" style="width:${percentage}%;background:${gradeColor}"></div></div>`;
    html += `</div>`;

    // Study plan
    if (typeof SubjectFeedback !== 'undefined') {
      const plan = SubjectFeedback.generatePlan(this.subject, this.testId, percentage, earnedMarks, totalMarks, this.test.questions, this.answers);
      html += SubjectFeedback.renderPlan(plan);
    }

    html += reviewHTML;
    html += `<button class="btn-primary" onclick="location.reload()">Retake Test</button>`;
    html += `<a href="subject-tests.html?subject=${this.subject}" class="btn-secondary">More ${this.subject.charAt(0).toUpperCase() + this.subject.slice(1)} Tests</a>`;
    html += `<a href="subjects.html" class="btn-secondary">All Subjects</a>`;

    this.resultsEl.innerHTML = html;
  }

  saveResult() {
    const results = JSON.parse(localStorage.getItem('subjectResults') || '[]');
    results.push({
      subject: this.subject,
      testId: this.testId,
      date: new Date().toISOString(),
      answers: this.answers,
      timeSpent: this.test.duration * 60 - this.timeRemaining
    });
    localStorage.setItem('subjectResults', JSON.stringify(results.slice(-100)));
  }
}

let engine = null;

function initSubjectTest(subject, testId) {
  const subjectTests = subjectTestData[subject];
  if (!subjectTests) {
    alert('Subject not found: ' + subject);
    return;
  }
  const test = subjectTests.tests.find(t => t.id === testId) || subjectTests.tests[0];
  engine = new SubjectTestEngine({ subject, testId, test });

  document.getElementById('testIntro').style.display = 'block';
  document.getElementById('testArea').style.display = 'none';
  document.getElementById('testResults').style.display = 'none';
  document.getElementById('introTitle').textContent = subjectTests.name + ' — ' + test.title;
  document.getElementById('introDuration').textContent = test.duration + ' minutes';
  document.getElementById('introQuestions').textContent = test.questions.length + ' questions';
}
