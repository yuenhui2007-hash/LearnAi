/**
 * Course Engine — Interactive Segmented Learning
 * Handles segments, quizzes, flashcards, progress tracking
 */
(function() {
  'use strict';

  window.CourseEngine = {
    courseId: '',
    totalSegments: 0,
    currentSegment: 0,
    storageKey: '',

    init(courseId, segments) {
      this.courseId = courseId;
      this.segments = segments;
      this.totalSegments = segments.length;
      this.storageKey = `course_${courseId}_progress`;
      this.loadProgress();
      this.renderSidebar();
      this.renderSegment(this.currentSegment);
      this.updateOverallProgress();
    },

    loadProgress() {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        this.currentSegment = data.currentSegment || 0;
        this.segmentStates = data.segmentStates || this.makeEmptyStates();
      } else {
        this.segmentStates = this.makeEmptyStates();
      }
    },

    makeEmptyStates() {
      return this.segments.map((s, i) => ({
        unlocked: i === 0,
        completed: false,
        quizPassed: false,
        quizBestScore: 0,
        flashcardsSeen: false
      }));
    },

    saveProgress() {
      localStorage.setItem(this.storageKey, JSON.stringify({
        currentSegment: this.currentSegment,
        segmentStates: this.segmentStates
      }));
      this.updateOverallProgress();
      this.renderSidebar();
    },

    updateOverallProgress() {
      const completed = this.segmentStates.filter(s => s.completed).length;
      const pct = Math.round((completed / this.totalSegments) * 100);
      const bar = document.getElementById('overall-progress');
      if (bar) bar.style.width = pct + '%';
      const text = document.getElementById('overall-progress-text');
      if (text) text.textContent = `${completed}/${this.totalSegments} segments`;
      if (pct === 100) {
        localStorage.setItem(`course_${this.courseId}_completed`, 'true');
      }
    },

    renderSidebar() {
      const nav = document.getElementById('segment-nav');
      if (!nav) return;
      nav.innerHTML = '';
      this.segments.forEach((seg, i) => {
        const state = this.segmentStates[i];
        const div = document.createElement('div');
        div.className = 'nav-item';
        if (i === this.currentSegment) div.classList.add('active');
        if (state.completed) div.classList.add('completed');
        if (!state.unlocked) div.classList.add('locked');
        div.innerHTML = `
          <span class="nav-num">${state.completed ? '✓' : i + 1}</span>
          <span class="nav-title">${seg.title}</span>
          ${!state.unlocked ? '<span class="nav-lock">🔒</span>' : ''}
        `;
        if (state.unlocked) {
          div.onclick = () => { this.currentSegment = i; this.renderSegment(i); this.renderSidebar(); };
        }
        nav.appendChild(div);
      });
    },

    renderSegment(idx) {
      const container = document.getElementById('segment-content');
      if (!container) return;
      const seg = this.segments[idx];
      const state = this.segmentStates[idx];

      let html = `<div class="segment-header"><span class="seg-num">Segment ${idx+1} of ${this.totalSegments}</span><h2>${seg.title}</h2></div>`;
      html += `<div class="segment-body">${seg.content}</div>`;

      if (seg.flashcards && seg.flashcards.length > 0) {
        html += '<div class="flashcard-section"><h4>🃏 Flashcards</h4>';
        seg.flashcards.forEach((fc, i) => {
          html += `
            <div class="flashcard" id="fc-${i}">
              <div class="flashcard-front" onclick="CourseEngine.flipCard(${i})">
                <p>${fc.q}</p>
                <small>Click to reveal</small>
              </div>
              <div class="flashcard-back" style="display:none">
                <p>${fc.a}</p>
              </div>
            </div>`;
        });
        html += '</div>';
      }

      if (seg.quiz && seg.quiz.length > 0) {
        if (state.quizPassed) {
          html += `<div class="quiz-section passed">
            <h4>✅ Quiz Passed (${state.quizBestScore}/${seg.quiz.length})</h4>
            <p>You can proceed to the next segment.</p>
          </div>`;
        } else {
          html += '<div class="quiz-section"><h4>📝 Quiz</h4><p>Score at least 70% to unlock the next segment.</p>';
          seg.quiz.forEach((q, i) => {
            html += `<div class="quiz-q" id="qq-${i}"><p><strong>Q${i+1}:</strong> ${q.q}</p>`;
            q.options.forEach((opt, j) => {
              html += `<label class="quiz-opt"><input type="radio" name="q${i}" value="${j}"> ${opt}</label>`;
            });
            html += '</div>';
          });
          html += `<button class="btn btn-primary" onclick="CourseEngine.submitQuiz(${idx})">Submit Quiz</button>`;
          html += '<div id="quiz-result" style="margin-top:16px;font-weight:600;"></div>';
          html += '</div>';
        }
      }

      if (!seg.quiz && seg.interaction) {
        if (state.completed) {
          html += `<div class="interaction-completed"><h4>✅ Completed</h4><p>${seg.interaction.completedText || 'You can proceed to the next segment.'}</p></div>`;
        } else {
          html += `<div class="interaction-section"><h4>✏️ ${seg.interaction.title || 'Activity'}</h4>`;
          html += `<p>${seg.interaction.instruction}</p>`;
          if (seg.interaction.type === 'textarea') {
            html += `<textarea id="interaction-input" rows="4" style="width:100%;padding:12px;border-radius:8px;border:1px solid #e2e8f0;margin-top:8px;" placeholder="${seg.interaction.placeholder || 'Type your answer here...'}"></textarea>`;
          } else if (seg.interaction.type === 'checkbox') {
            seg.interaction.options.forEach((opt, j) => {
              html += `<label style="display:block;margin:8px 0;"><input type="checkbox" value="${j}"> ${opt}</label>`;
            });
          }
          html += `<button class="btn btn-primary" style="margin-top:12px;" onclick="CourseEngine.submitInteraction(${idx})">Submit</button>`;
          html += '<div id="interaction-result" style="margin-top:12px;"></div>';
          html += '</div>';
        }
      }

      if (!seg.quiz && !seg.interaction) {
        if (!state.completed) {
          html += `<div class="interaction-section" style="margin-top:24px;padding:20px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;"><h4>✅ Mark Complete</h4><p>Read through this segment, then click below to mark it complete and unlock the next segment.</p><button class="btn btn-primary" style="margin-top:12px;" onclick="CourseEngine.markSegmentComplete(${idx})">I've read this segment — Mark Complete</button></div>`;
        }
      }

      html += '<div class="segment-nav-buttons">';
      if (idx > 0) {
        html += `<button class="btn btn-outline" onclick="CourseEngine.goTo(${idx-1})">← Previous</button>`;
      } else {
        html += '<span></span>';
      }
      if (state.completed) {
        if (idx < this.totalSegments - 1) {
          html += `<button class="btn btn-primary" onclick="CourseEngine.goTo(${idx+1})">Next →</button>`;
        } else {
          html += '<a href="academy.html" class="btn btn-primary">Finish Course →</a>';
        }
      } else {
        if (idx < this.totalSegments - 1) {
          html += `<button class="btn btn-outline" disabled style="opacity:0.5">🔒 Complete this segment to continue</button>`;
        } else {
          html += `<button class="btn btn-outline" disabled style="opacity:0.5">🔒 Complete this segment to finish</button>`;
        }
      }
      html += '</div>';

      container.innerHTML = html;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    flipCard(i) {
      const fc = document.getElementById(`fc-${i}`);
      const front = fc.querySelector('.flashcard-front');
      const back = fc.querySelector('.flashcard-back');
      if (back.style.display === 'none') {
        front.style.display = 'none';
        back.style.display = 'block';
      } else {
        front.style.display = 'block';
        back.style.display = 'none';
      }
    },

    submitQuiz(segIdx) {
      const seg = this.segments[segIdx];
      let score = 0;
      seg.quiz.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const qDiv = document.getElementById(`qq-${i}`);
        if (selected && parseInt(selected.value) === q.correct) {
          score++;
          qDiv.style.background = '#d1fae5';
        } else {
          qDiv.style.background = '#fee2e2';
        }
      });

      const pct = (score / seg.quiz.length) * 100;
      const resultDiv = document.getElementById('quiz-result');
      const passThreshold = seg.passThreshold || 70;

      if (pct >= passThreshold) {
        resultDiv.innerHTML = `<span style="color:#065f46">✅ Passed! ${score}/${seg.quiz.length} (${Math.round(pct)}%)</span>`;
        this.segmentStates[segIdx].quizPassed = true;
        this.segmentStates[segIdx].completed = true;
        this.segmentStates[segIdx].quizBestScore = Math.max(this.segmentStates[segIdx].quizBestScore, score);
        if (segIdx < this.totalSegments - 1) {
          this.segmentStates[segIdx + 1].unlocked = true;
        }
        this.saveProgress();
        setTimeout(() => this.renderSegment(segIdx), 1200);
      } else {
        resultDiv.innerHTML = `<span style="color:#991b1b">❌ Failed. ${score}/${seg.quiz.length} (${Math.round(pct)}%). Need ${passThreshold}% to pass. Try again!</span>`;
        this.segmentStates[segIdx].quizBestScore = Math.max(this.segmentStates[segIdx].quizBestScore, score);
        this.saveProgress();
      }
    },

    submitInteraction(segIdx) {
      const seg = this.segments[segIdx];
      const input = document.getElementById('interaction-input');
      const resultDiv = document.getElementById('interaction-result');
      let valid = true;

      if (seg.interaction.type === 'textarea') {
        if (!input || input.value.trim().length < (seg.interaction.minLength || 10)) {
          valid = false;
          resultDiv.innerHTML = `<span style="color:#92400e">Please write at least ${seg.interaction.minLength || 10} characters.</span>`;
        }
      } else if (seg.interaction.type === 'checkbox') {
        const checked = document.querySelectorAll('.interaction-section input[type="checkbox"]:checked');
        if (checked.length === 0) {
          valid = false;
          resultDiv.innerHTML = '<span style="color:#92400e">Please select at least one option.</span>';
        }
      }

      if (valid) {
        resultDiv.innerHTML = '<span style="color:#065f46">✅ Completed! You can proceed.</span>';
        this.segmentStates[segIdx].completed = true;
        if (segIdx < this.totalSegments - 1) {
          this.segmentStates[segIdx + 1].unlocked = true;
        }
        this.saveProgress();
        setTimeout(() => this.renderSegment(segIdx), 1200);
      }
    },

    markSegmentComplete(segIdx) {
      this.segmentStates[segIdx].completed = true;
      if (segIdx < this.totalSegments - 1) {
        this.segmentStates[segIdx + 1].unlocked = true;
      }
      this.saveProgress();
      this.renderSegment(segIdx);
    },

    goTo(idx) {
      this.currentSegment = idx;
      this.renderSegment(idx);
      this.renderSidebar();
    }
  };
})();
