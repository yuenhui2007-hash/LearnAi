// IELTS Interactive Test Engine
// Handles timer, scoring, progress tracking, and UI for all 4 skills

class IELTSTestEngine {
  constructor(config) {
    this.skill = config.skill; // listening, reading, writing, speaking
    this.testId = config.testId;
    this.data = config.data;
    this.timerEl = document.getElementById('testTimer');
    this.progressEl = document.getElementById('testProgress');
    this.container = document.getElementById('testContainer');
    this.resultsEl = document.getElementById('testResults');

    this.timeRemaining = 0;
    this.timerInterval = null;
    this.answers = {};
    this.currentSection = 0;
    this.currentQuestion = 0;
    this.startTime = null;
    this.testState = 'intro'; // intro, running, paused, completed
  }

  start() {
    this.testState = 'running';
    this.startTime = Date.now();
    this.timeRemaining = this.data.duration * 60;
    this.answers = {};
    this.currentSection = 0;
    this.currentQuestion = 0;

    document.getElementById('testIntro').style.display = 'none';
    document.getElementById('testArea').style.display = 'block';
    this.resultsEl.style.display = 'none';

    this.startTimer();
    this.renderCurrentQuestion();
    this.updateProgress();
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();
      if (this.timeRemaining <= 0) {
        this.submitTest();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timeRemaining / 60);
    const secs = this.timeRemaining % 60;
    const text = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    this.timerEl.textContent = text;

    if (this.timeRemaining <= 300) {
      this.timerEl.classList.add('warning');
    }
    if (this.timeRemaining <= 60) {
      this.timerEl.classList.add('danger');
    }
  }

  updateProgress() {
    const total = this.getTotalQuestions();
    const answered = Object.keys(this.answers).length;
    const pct = total > 0 ? (answered / total * 100) : 0;
    this.progressEl.style.width = pct + '%';
    this.progressEl.textContent = `${answered}/${total}`;
  }

  getTotalQuestions() {
    if (this.skill === 'listening') {
      return this.data.tests[0].audioScript.reduce((sum, s) => sum + s.questions.length, 0);
    }
    if (this.skill === 'reading') {
      return this.data.tests[0].passages.reduce((sum, p) => sum + p.questions.length, 0);
    }
    return 0;
  }

  renderCurrentQuestion() {
    if (this.skill === 'listening') {
      this.renderListeningQuestion();
    } else if (this.skill === 'reading') {
      this.renderReadingQuestion();
    } else if (this.skill === 'writing') {
      this.renderWritingTask();
    } else if (this.skill === 'speaking') {
      this.renderSpeakingPart();
    }
  }

  renderListeningQuestion() {
    const test = this.data.tests[0];
    const section = test.audioScript[this.currentSection];
    const question = section.questions[this.currentQuestion];

    let html = `<div class="test-section-header">
      <span class="section-badge">Section ${section.section}</span>
      <h3>${section.title}</h3>
    </div>`;

    // Show transcript as "audio script" (simulated)
    html += `<div class="audio-player-box">
      <div class="audio-visual">
        <div class="audio-wave"></div>
        <div class="audio-wave"></div>
        <div class="audio-wave"></div>
        <div class="audio-wave"></div>
        <div class="audio-wave"></div>
      </div>
      <p class="audio-note">Audio playing... Read the transcript below while listening.</p>
    </div>`;

    html += `<div class="transcript-box">
      <h4>Audio Transcript</h4>
      <div class="transcript-text">${section.transcript.replace(/\n/g, '<br>')}</div>
    </div>`;

    html += `<div class="question-card">
      <div class="question-number">Question ${this.getGlobalQuestionNumber()}</div>
      <div class="question-text">${question.q}</div>`;

    if (question.type === 'multiple') {
      html += `<div class="options-grid">`;
      question.options.forEach((opt, i) => {
        const selected = this.answers[this.getGlobalQuestionNumber() - 1] === i;
        html += `<button class="option-btn ${selected ? 'selected' : ''}" onclick="engine.selectOption(${i})">${String.fromCharCode(65 + i)}. ${opt}</button>`;
      });
      html += `</div>`;
    } else if (question.type === 'completion') {
      const saved = this.answers[this.getGlobalQuestionNumber() - 1] || '';
      html += `<input type="text" class="answer-input" id="answerInput" value="${saved}" placeholder="Type your answer..." onchange="engine.saveTextAnswer(this.value)">`;
    } else if (question.type === 'truefalse') {
      const saved = this.answers[this.getGlobalQuestionNumber() - 1];
      html += `<div class="options-grid">
        <button class="option-btn ${saved === true ? 'selected' : ''}" onclick="engine.selectTrueFalse(true)">True</button>
        <button class="option-btn ${saved === false ? 'selected' : ''}" onclick="engine.selectTrueFalse(false)">False</button>
      </div>`;
    }

    html += `<div class="question-marks">${question.marks} mark${question.marks > 1 ? 's' : ''}</div>`;
    html += `</div>`;

    html += this.renderNavigation();
    this.container.innerHTML = html;
  }

  renderReadingQuestion() {
    const test = this.data.tests[0];
    const passage = test.passages[this.currentSection];
    const question = passage.questions[this.currentQuestion];

    let html = `<div class="reading-layout">
      <div class="reading-passage">
        <div class="passage-header">
          <h3>${passage.title}</h3>
          <span class="word-count">~${passage.text.split(' ').length} words</span>
        </div>
        <div class="passage-text">${passage.text.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="reading-questions">
        <div class="question-card">
          <div class="question-number">Question ${this.getGlobalQuestionNumber()}</div>
          <div class="question-text">${question.q}</div>`;

    if (question.type === 'multiple') {
      html += `<div class="options-grid">`;
      question.options.forEach((opt, i) => {
        const selected = this.answers[this.getGlobalQuestionNumber() - 1] === i;
        html += `<button class="option-btn ${selected ? 'selected' : ''}" onclick="engine.selectOption(${i})">${String.fromCharCode(65 + i)}. ${opt}</button>`;
      });
      html += `</div>`;
    } else if (question.type === 'completion') {
      const saved = this.answers[this.getGlobalQuestionNumber() - 1] || '';
      html += `<input type="text" class="answer-input" id="answerInput" value="${saved}" placeholder="Type your answer..." onchange="engine.saveTextAnswer(this.value)">`;
    } else if (question.type === 'truefalse') {
      const saved = this.answers[this.getGlobalQuestionNumber() - 1];
      html += `<div class="options-grid">
        <button class="option-btn ${saved === true ? 'selected' : ''}" onclick="engine.selectTrueFalse(true)">True</button>
        <button class="option-btn ${saved === false ? 'selected' : ''}" onclick="engine.selectTrueFalse(false)">False</button>
      </div>`;
    }

    html += `<div class="question-marks">${question.marks} mark${question.marks > 1 ? 's' : ''}</div>`;
    html += `</div>`;
    html += this.renderNavigation();
    html += `</div></div>`;

    this.container.innerHTML = html;
  }

  renderWritingTask() {
    const test = this.data.tests.find(t => t.id === this.testId) || this.data.tests[0];

    let html = `<div class="writing-layout">
      <div class="writing-tasks-sidebar">
        <div class="task-card ${this.currentSection === 0 ? 'active' : ''}" onclick="engine.switchWritingTask(0)">
          <div class="task-label">Task 1</div>
          <div class="task-type">${test.task1.type.replace('_', ' ')}</div>
          <div class="task-min">Min 150 words</div>
        </div>
        <div class="task-card ${this.currentSection === 1 ? 'active' : ''}" onclick="engine.switchWritingTask(1)">
          <div class="task-label">Task 2</div>
          <div class="task-type">Essay</div>
          <div class="task-min">Min 250 words</div>
        </div>
      </div>
      <div class="writing-area">`;

    if (this.currentSection === 0) {
      html += `<div class="task-prompt">
        <h3>Task 1: ${test.task1.title}</h3>
        <div class="prompt-type-badge">${test.task1.type.replace('_', ' ')}</div>
        <div class="prompt-text">${test.task1.description.replace(/\n/g, '<br>')}</div>
        <div class="prompt-instructions">${test.task1.instructions}</div>
      </div>`;
    } else {
      html += `<div class="task-prompt">
        <h3>Task 2: ${test.task2.title}</h3>
        <div class="prompt-type-badge">${test.task2.type.replace('_', ' ')}</div>
        <div class="prompt-text">${test.task2.prompt.replace(/\n/g, '<br>')}</div>
        <div class="prompt-instructions">${test.task2.instructions}</div>
      </div>`;
    }

    const saved = this.answers[this.currentSection] || '';
    html += `<div class="writing-input-area">
      <textarea class="writing-textarea" id="writingInput" placeholder="Start writing here..." oninput="engine.updateWordCount(); engine.saveWritingAnswer(this.value)">${saved}</textarea>
      <div class="writing-stats">
        <span id="wordCount">0 words</span>
        <span class="target-words">Target: ${this.currentSection === 0 ? '150+' : '250+'} words</span>
      </div>
    </div>`;

    html += `</div></div>`;
    html += this.renderNavigation();
    this.container.innerHTML = html;
    this.updateWordCount();
  }

  renderSpeakingPart() {
    const test = this.data.tests.find(t => t.id === this.testId) || this.data.tests[0];

    let html = `<div class="speaking-layout">
      <div class="speaking-parts-sidebar">
        <div class="part-card ${this.currentSection === 0 ? 'active' : ''}" onclick="engine.switchSpeakingPart(0)">
          <div class="part-label">Part 1</div>
          <div class="part-duration">4-5 min</div>
          <div class="part-desc">Introduction</div>
        </div>
        <div class="part-card ${this.currentSection === 1 ? 'active' : ''}" onclick="engine.switchSpeakingPart(1)">
          <div class="part-label">Part 2</div>
          <div class="part-duration">3-4 min</div>
          <div class="part-desc">Long Turn</div>
        </div>
        <div class="part-card ${this.currentSection === 2 ? 'active' : ''}" onclick="engine.switchSpeakingPart(2)">
          <div class="part-label">Part 3</div>
          <div class="part-duration">4-5 min</div>
          <div class="part-desc">Discussion</div>
        </div>
      </div>
      <div class="speaking-area">`;

    if (this.currentSection === 0) {
      const part1 = test.part1;
      html += `<div class="speaking-part-content">
        <h3>${part1.title}</h3>
        <div class="part-duration-badge">${part1.duration}</div>
        <div class="speaking-topics">`;
      part1.topics.forEach((topic, ti) => {
        html += `<div class="topic-card">
          <h4>${topic.topic}</h4>
          <ul>`;
        topic.questions.forEach(q => {
          html += `<li>${q}</li>`;
        });
        html += `</ul></div>`;
      });
      html += `</div>`;
    } else if (this.currentSection === 1) {
      const part2 = test.part2;
      html += `<div class="speaking-part-content">
        <h3>${part2.title}</h3>
        <div class="part-duration-badge">${part2.duration}</div>
        <div class="cue-card">
          <div class="cue-card-header">Task Card</div>
          <div class="cue-card-topic">${part2.card.topic}</div>
          <div class="cue-card-prompts">
            <p>You should say:</p>
            <ul>`;
      part2.card.prompts.forEach(p => {
        html += `<li>${p}</li>`;
      });
      html += `</ul></div>
          <div class="prep-timer">
            <div class="prep-label">Preparation Time</div>
            <div class="prep-countdown" id="prepTimer">1:00</div>
            <button class="btn-primary" onclick="engine.startPrepTimer()">Start 1-Minute Prep</button>
          </div>
          <div class="speak-timer">
            <div class="speak-label">Speaking Time (target: 1-2 minutes)</div>
            <div class="speak-countdown" id="speakTimer">2:00</div>
            <button class="btn-primary" onclick="engine.startSpeakTimer()">Start Speaking Timer</button>
          </div>
        </div>
        <div class="follow-up">
          <h4>Follow-up Questions</h4>
          <ul>`;
      part2.card.followUp.forEach(q => {
        html += `<li>${q}</li>`;
      });
      html += `</ul></div>`;
    } else {
      const part3 = test.part3;
      html += `<div class="speaking-part-content">
        <h3>${part3.title}</h3>
        <div class="part-duration-badge">${part3.duration}</div>
        <div class="discussion-questions">
          <h4>Discussion Questions</h4>
          <ol>`;
      part3.questions.forEach(q => {
        html += `<li>${q}</li>`;
      });
      html += `</ol></div></div>`;
    }

    html += `</div></div>`;
    html += this.renderNavigation();
    this.container.innerHTML = html;
  }

  renderNavigation() {
    const total = this.getNavTotal();
    const current = this.getGlobalQuestionNumber();

    let html = `<div class="test-nav">`;

    if (this.skill === 'writing' || this.skill === 'speaking') {
      html += `<button class="nav-btn ${this.currentSection === 0 ? 'disabled' : ''}" onclick="engine.prevSection()" ${this.currentSection === 0 ? 'disabled' : ''}>Previous Task</button>`;
      html += `<span class="nav-info">Task ${this.currentSection + 1} of ${this.skill === 'writing' ? 2 : 3}</span>`;
      html += `<button class="nav-btn ${this.currentSection === (this.skill === 'writing' ? 1 : 2) ? 'disabled' : ''}" onclick="engine.nextSection()" ${this.currentSection === (this.skill === 'writing' ? 1 : 2) ? 'disabled' : ''}>Next Task</button>`;
    } else {
      html += `<button class="nav-btn ${current === 1 ? 'disabled' : ''}" onclick="engine.prevQuestion()" ${current === 1 ? 'disabled' : ''}>Previous</button>`;
      html += `<span class="nav-info">${current} / ${total}</span>`;
      html += `<button class="nav-btn ${current === total ? 'disabled' : ''}" onclick="engine.nextQuestion()" ${current === total ? 'disabled' : ''}>Next</button>`;
    }

    html += `<button class="nav-btn submit-btn" onclick="engine.confirmSubmit()">Submit Test</button>`;
    html += `</div>`;

    // Question navigator dots
    if (this.skill === 'listening' || this.skill === 'reading') {
      html += `<div class="question-nav-dots">`;
      for (let i = 0; i < total; i++) {
        const answered = this.answers[i] !== undefined;
        const isCurrent = i === (current - 1);
        html += `<button class="q-dot ${answered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" onclick="engine.jumpToQuestion(${i})">${i + 1}</button>`;
      }
      html += `</div>`;
    }

    return html;
  }

  getNavTotal() {
    if (this.skill === 'listening') {
      return this.data.tests[0].audioScript.reduce((sum, s) => sum + s.questions.length, 0);
    }
    if (this.skill === 'reading') {
      return this.data.tests[0].passages.reduce((sum, p) => sum + p.questions.length, 0);
    }
    return 0;
  }

  getGlobalQuestionNumber() {
    if (this.skill === 'listening') {
      let count = 0;
      for (let i = 0; i < this.currentSection; i++) {
        count += this.data.tests[0].audioScript[i].questions.length;
      }
      return count + this.currentQuestion + 1;
    }
    if (this.skill === 'reading') {
      let count = 0;
      for (let i = 0; i < this.currentSection; i++) {
        count += this.data.tests[0].passages[i].questions.length;
      }
      return count + this.currentQuestion + 1;
    }
    return 0;
  }

  selectOption(index) {
    this.answers[this.getGlobalQuestionNumber() - 1] = index;
    this.updateProgress();
    this.renderCurrentQuestion();
  }

  selectTrueFalse(val) {
    this.answers[this.getGlobalQuestionNumber() - 1] = val;
    this.updateProgress();
    this.renderCurrentQuestion();
  }

  saveTextAnswer(val) {
    this.answers[this.getGlobalQuestionNumber() - 1] = val.trim();
    this.updateProgress();
  }

  saveWritingAnswer(val) {
    this.answers[this.currentSection] = val;
  }

  updateWordCount() {
    const textarea = document.getElementById('writingInput');
    if (!textarea) return;
    const text = textarea.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const el = document.getElementById('wordCount');
    if (el) el.textContent = words + ' word' + (words !== 1 ? 's' : '');
  }

  switchWritingTask(index) {
    this.currentSection = index;
    this.renderWritingTask();
  }

  switchSpeakingPart(index) {
    this.currentSection = index;
    this.renderSpeakingPart();
  }

  startPrepTimer() {
    let sec = 60;
    const el = document.getElementById('prepTimer');
    if (!el) return;
    const interval = setInterval(() => {
      sec--;
      el.textContent = `0:${sec.toString().padStart(2, '0')}`;
      if (sec <= 0) {
        clearInterval(interval);
        el.textContent = 'Time up!';
        el.classList.add('done');
      }
    }, 1000);
  }

  startSpeakTimer() {
    let sec = 120;
    const el = document.getElementById('speakTimer');
    if (!el) return;
    const interval = setInterval(() => {
      sec--;
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
      if (sec <= 0) {
        clearInterval(interval);
        el.textContent = 'Time up!';
        el.classList.add('done');
      }
    }, 1000);
  }

  nextQuestion() {
    const test = this.data.tests[0];
    let currentList = this.skill === 'listening' ? test.audioScript : test.passages;

    this.currentQuestion++;
    if (this.currentQuestion >= currentList[this.currentSection].questions.length) {
      this.currentQuestion = 0;
      this.currentSection++;
      if (this.currentSection >= currentList.length) {
        this.currentSection = currentList.length - 1;
        this.currentQuestion = currentList[this.currentSection].questions.length - 1;
        return;
      }
    }
    this.renderCurrentQuestion();
  }

  prevQuestion() {
    const test = this.data.tests[0];
    let currentList = this.skill === 'listening' ? test.audioScript : test.passages;

    this.currentQuestion--;
    if (this.currentQuestion < 0) {
      this.currentSection--;
      if (this.currentSection < 0) {
        this.currentSection = 0;
        this.currentQuestion = 0;
        return;
      }
      this.currentQuestion = currentList[this.currentSection].questions.length - 1;
    }
    this.renderCurrentQuestion();
  }

  nextSection() {
    if (this.skill === 'writing' && this.currentSection < 1) {
      this.currentSection++;
      this.renderWritingTask();
    } else if (this.skill === 'speaking' && this.currentSection < 2) {
      this.currentSection++;
      this.renderSpeakingPart();
    }
  }

  prevSection() {
    if (this.skill === 'writing' && this.currentSection > 0) {
      this.currentSection--;
      this.renderWritingTask();
    } else if (this.skill === 'speaking' && this.currentSection > 0) {
      this.currentSection--;
      this.renderSpeakingPart();
    }
  }

  jumpToQuestion(index) {
    const test = this.data.tests[0];
    let currentList = this.skill === 'listening' ? test.audioScript : test.passages;

    let count = 0;
    for (let s = 0; s < currentList.length; s++) {
      const sectionCount = currentList[s].questions.length;
      if (index < count + sectionCount) {
        this.currentSection = s;
        this.currentQuestion = index - count;
        this.renderCurrentQuestion();
        return;
      }
      count += sectionCount;
    }
  }

  confirmSubmit() {
    if (confirm('Are you sure you want to submit your test? You cannot change answers after submission.')) {
      this.submitTest();
    }
  }

  submitTest() {
    clearInterval(this.timerInterval);
    this.testState = 'completed';

    document.getElementById('testArea').style.display = 'none';
    this.resultsEl.style.display = 'block';

    if (this.skill === 'listening' || this.skill === 'reading') {
      this.showAutoScoredResults();
    } else {
      this.showManualReviewResults();
    }

    // Save to localStorage
    this.saveResult();
  }

  showAutoScoredResults() {
    const test = this.data.tests[0];
    const questions = this.skill === 'listening'
      ? test.audioScript.flatMap(s => s.questions)
      : test.passages.flatMap(p => p.questions);

    let correct = 0;
    let reviewHTML = '<div class="results-summary">';

    questions.forEach((q, i) => {
      const userAns = this.answers[i];
      let isCorrect = false;

      if (q.type === 'multiple') {
        isCorrect = userAns === q.a;
      } else if (q.type === 'truefalse') {
        isCorrect = userAns === q.a;
      } else if (q.type === 'completion') {
        const normalizedUser = String(userAns || '').toLowerCase().trim();
        const normalizedAnswer = String(q.answer).toLowerCase().trim();
        isCorrect = normalizedUser === normalizedAnswer || normalizedAnswer.split('/').some(a => normalizedUser === a.trim());
      }

      if (isCorrect) correct += q.marks;

      reviewHTML += `<div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
        <div class="result-q">Q${i + 1}: ${q.q}</div>
        <div class="result-answer">Your answer: ${userAns !== undefined ? (typeof userAns === 'boolean' ? (userAns ? 'True' : 'False') : userAns) : '<em>Not answered</em>'}</div>
        ${!isCorrect ? `<div class="result-correct">Correct answer: ${q.type === 'multiple' ? q.options[q.a] : q.answer}</div>` : ''}
        <div class="result-status">${isCorrect ? 'Correct' : 'Incorrect'}</div>
      </div>`;
    });

    reviewHTML += '</div>';

    const totalMarks = questions.reduce((a, b) => a + b.marks, 0);
    const score = calculateBandScore(this.skill, correct, totalMarks);

    let html = `<div class="score-card">
      <div class="score-band">Band ${score.band.toFixed(1)}</div>
      <div class="score-details">${correct}/${totalMarks} correct (${score.raw}/40 raw score)</div>
      <div class="score-bar"><div class="score-fill" style="width:${(correct/totalMarks*100)}%"></div></div>
    </div>`;

    html += reviewHTML;
    html += `<button class="btn-primary" onclick="location.reload()">Retake Test</button>
             <a href="ielts-practice.html" class="btn-secondary">Back to IELTS Practice</a>`;

    this.resultsEl.innerHTML = html;
  }

  showManualReviewResults() {
    const test = this.data.tests.find(t => t.id === this.testId) || this.data.tests[0];

    let html = `<div class="score-card manual-review">
      <div class="score-band">Self-Review Required</div>
      <div class="score-details">Your answers have been saved. Use the IELTS band descriptors to assess your work.</div>
    </div>`;

    if (this.skill === 'writing') {
      html += `<div class="writing-review">
        <h3>Task 1: ${test.task1.title}</h3>
        <div class="submitted-answer">${(this.answers[0] || '<em>No answer submitted</em>').replace(/\n/g, '<br>')}</div>
        <div class="word-count-display">Word count: ${this.answers[0] ? this.answers[0].trim().split(/\s+/).length : 0} words (min: 150)</div>
        <h3>Task 2: ${test.task2.title}</h3>
        <div class="submitted-answer">${(this.answers[1] || '<em>No answer submitted</em>').replace(/\n/g, '<br>')}</div>
        <div class="word-count-display">Word count: ${this.answers[1] ? this.answers[1].trim().split(/\s+/).length : 0} words (min: 250)</div>
      </div>`;

      html += `<div class="band-descriptors">
        <h4>IELTS Writing Band Descriptors</h4>
        <div class="descriptor">
          <strong>Task Achievement/Response:</strong> Did you address all parts? Is your position clear? Are ideas supported?
        </div>
        <div class="descriptor">
          <strong>Coherence & Cohesion:</strong> Is there logical organisation? Are paragraphs well-linked?
        </div>
        <div class="descriptor">
          <strong>Lexical Resource:</strong> Is vocabulary varied and accurate? Any repetition or errors?
        </div>
        <div class="descriptor">
          <strong>Grammatical Range & Accuracy:</strong> Are there complex sentences? How frequent are errors?
        </div>
      </div>`;
    } else if (this.skill === 'speaking') {
      html += `<div class="speaking-review">
        <h3>Speaking Test: ${test.title}</h3>
        <p>Practice your responses by recording yourself. Use the prompts below for self-assessment.</p>
        <div class="band-descriptors">
          <h4>IELTS Speaking Band Descriptors</h4>
          <div class="descriptor">
            <strong>Fluency & Coherence:</strong> Do you speak at length without hesitation? Are your ideas organised?
          </div>
          <div class="descriptor">
            <strong>Lexical Resource:</strong> Is your vocabulary wide and precise? Do you use idiomatic language?
          </div>
          <div class="descriptor">
            <strong>Grammatical Range & Accuracy:</strong> Do you use a mix of simple and complex structures?
          </div>
          <div class="descriptor">
            <strong>Pronunciation:</strong> Is your speech clear? Is intonation natural?
          </div>
        </div>
      </div>`;
    }

    html += `<button class="btn-primary" onclick="location.reload()">Retake Test</button>
             <a href="ielts-practice.html" class="btn-secondary">Back to IELTS Practice</a>`;

    this.resultsEl.innerHTML = html;
  }

  saveResult() {
    const results = JSON.parse(localStorage.getItem('ieltsResults') || '[]');
    results.push({
      skill: this.skill,
      testId: this.testId,
      date: new Date().toISOString(),
      answers: this.answers,
      timeSpent: this.data.duration * 60 - this.timeRemaining
    });
    localStorage.setItem('ieltsResults', JSON.stringify(results.slice(-50)));
  }
}

// Global engine instance
let engine = null;

function initIELTSTest(skill, testId) {
  const data = ieltsData[skill];
  engine = new IELTSTestEngine({ skill, testId, data });

  document.getElementById('testIntro').style.display = 'block';
  document.getElementById('testArea').style.display = 'none';
  document.getElementById('testResults').style.display = 'none';

  // Populate intro
  document.getElementById('introTitle').textContent = data.title + ' Test';
  document.getElementById('introDuration').textContent = data.duration + ' minutes';
  document.getElementById('introSections').textContent = skill === 'listening' ? data.sections + ' sections'
    : skill === 'reading' ? data.passages + ' passages'
    : skill === 'writing' ? data.tasks + ' tasks'
    : data.parts + ' parts';
  document.getElementById('introInstructions').textContent = data.instructions;
}
