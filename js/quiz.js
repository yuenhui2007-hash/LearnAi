// Quiz System
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let answers = [];
let score = 0;

function initQuiz() {
  const select = document.getElementById('subjectSelect');
  if (!select) return;
  
  Object.keys(quizData).forEach(subject => {
    const btn = document.createElement('button');
    btn.className = 'subject-btn';
    btn.textContent = subject.charAt(0).toUpperCase() + subject.slice(1).replace(/-/g, ' ');
    btn.onclick = () => selectSubject(subject, btn);
    select.appendChild(btn);
  });
}

function selectSubject(subject, btn) {
  currentSubject = subject;
  document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('startQuiz').disabled = false;
}

function startQuiz() {
  if (!currentSubject || !quizData[currentSubject]) return;
  currentQuestions = [...quizData[currentSubject]].sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  answers = [];
  score = 0;
  
  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-area').style.display = 'block';
  document.getElementById('quiz-results').style.display = 'none';
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  const container = document.getElementById('questionContainer');
  
  document.getElementById('quizProgress').style.width = ((currentQuestionIndex + 1) / currentQuestions.length * 100) + '%';
  document.getElementById('questionCounter').textContent = (currentQuestionIndex + 1) + ' / ' + currentQuestions.length;
  
  let html = '<div class="question-box"><h3>Q' + (currentQuestionIndex + 1) + ': ' + q.q + '</h3>';
  q.options.forEach((opt, i) => {
    const answered = answers[currentQuestionIndex];
    let cls = 'option';
    if (answered !== undefined) {
      cls += ' disabled';
      if (i === q.a) cls += ' correct';
      else if (i === answered && i !== q.a) cls += ' wrong';
    }
    html += '<button class="' + cls + '" onclick="selectAnswer(' + i + ')">' + opt + '</button>';
  });
  
  html += '<div class="explanation' + (answers[currentQuestionIndex] !== undefined ? ' show' : '') + '"><strong>Explanation:</strong> ' + q.explanation + '</div>';
  html += '</div>';
  container.innerHTML = html;
  
  document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
  document.getElementById('nextBtn').textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish' : 'Next →';
}

function selectAnswer(index) {
  if (answers[currentQuestionIndex] !== undefined) return;
  answers[currentQuestionIndex] = index;
  if (index === currentQuestions[currentQuestionIndex].a) score++;
  showQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function showResults() {
  document.getElementById('quiz-area').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'block';
  
  const percent = Math.round(score / currentQuestions.length * 100);
  document.getElementById('scorePercent').textContent = percent + '%';
  document.getElementById('scoreText').textContent = score + ' / ' + currentQuestions.length + ' correct';
  
  let reviewHTML = '<h3>Review</h3>';
  currentQuestions.forEach((q, i) => {
    const correct = answers[i] === q.a;
    reviewHTML += '<div class="review-item ' + (correct ? 'correct' : 'wrong') + '">';
    reviewHTML += '<p><strong>Q' + (i+1) + ':</strong> ' + q.q + '</p>';
    reviewHTML += '<p>Your answer: ' + (answers[i] !== undefined ? q.options[answers[i]] : 'Not answered') + '</p>';
    if (!correct) reviewHTML += '<p>Correct answer: ' + q.options[q.a] + '</p>';
    reviewHTML += '<p style="color:var(--gray);font-size:0.9rem;">' + q.explanation + '</p>';
    reviewHTML += '</div>';
  });
  document.getElementById('reviewContainer').innerHTML = reviewHTML;
  
  // Save to localStorage
  const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
  history.push({ subject: currentSubject, score: score, total: currentQuestions.length, date: new Date().toISOString() });
  localStorage.setItem('quizHistory', JSON.stringify(history));
}

function resetQuiz() {
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-setup').style.display = 'block';
  currentSubject = null;
  document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('startQuiz').disabled = true;
}

initQuiz();
