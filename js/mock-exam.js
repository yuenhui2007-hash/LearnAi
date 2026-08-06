// Mock Exam System
const examQuestions = {
  physics: [
    {q:"Define scalar and vector quantities. Give two examples of each. [4 marks]",marks:4},
    {q:"A car accelerates uniformly from rest to 20 m/s in 5 seconds. Calculate: (a) the acceleration [2 marks] (b) the distance travelled [2 marks]",marks:4},
    {q:"Explain the difference between precision and accuracy in measurements. [3 marks]",marks:3},
    {q:"A ball is thrown vertically upwards at 15 m/s. Calculate the maximum height reached. (g = 9.81 m/s²) [3 marks]",marks:3},
    {q:"Describe an experiment to determine the acceleration due to gravity using a simple pendulum. [6 marks]",marks:6}
  ],
  chemistry: [
    {q:"Describe the structure of an atom, including the relative charges and masses of subatomic particles. [5 marks]",marks:5},
    {q:"Explain the difference between ionic and covalent bonding. [4 marks]",marks:4},
    {q:"Calculate the relative atomic mass of chlorine given isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). [3 marks]",marks:3},
    {q:"Describe and explain the trends in first ionisation energy across Period 3. [6 marks]",marks:6},
    {q:"Write balanced equations for the reaction between sodium and water. [2 marks]",marks:2}
  ],
  biology: [
    {q:"Compare the structure of prokaryotic and eukaryotic cells. [6 marks]",marks:6},
    {q:"Describe the process of mitosis and explain its importance. [5 marks]",marks:5},
    {q:"Explain how enzymes work, including the lock and key hypothesis. [4 marks]",marks:4},
    {q:"Describe an experiment to investigate the effect of temperature on enzyme activity. [5 marks]",marks:5},
    {q:"Explain the structure and function of the cell membrane. [4 marks]",marks:4}
  ],
  maths: [
    {q:"Solve the equation x² - 5x + 6 = 0. [3 marks]",marks:3},
    {q:"Find the equation of the line passing through points (2, 3) and (4, 7). [3 marks]",marks:3},
    {q:"Differentiate y = 3x⁴ + 2x² - 5x + 1. [3 marks]",marks:3},
    {q:"Evaluate ∫(4x³ + 3x²) dx. [3 marks]",marks:3},
    {q:"Prove that sin²θ + cos²θ = 1 using a right-angled triangle. [3 marks]",marks:3}
  ],
  economics: [
    {q:"Explain the factors that can cause a shift in the demand curve. [6 marks]",marks:6},
    {q:"Distinguish between price elasticity of demand and income elasticity of demand. [4 marks]",marks:4},
    {q:"Explain why public goods are under-provided in a free market. [5 marks]",marks:5},
    {q:"Evaluate the effectiveness of indirect taxes in correcting negative externalities. [10 marks]",marks:10},
    {q:"Explain the causes of unemployment and evaluate government policies to reduce it. [10 marks]",marks:10}
  ],
  geography: [
    {q:"Explain the theory of plate tectonics and describe the three types of plate boundary. [8 marks]",marks:8},
    {q:"Describe the formation of a waterfall and explain how it retreats over time. [5 marks]",marks:5},
    {q:"Explain the factors that affect the climate of a place. [6 marks]",marks:6},
    {q:"Evaluate the effectiveness of hard and soft engineering approaches to coastal management. [10 marks]",marks:10},
    {q:"Explain the causes and consequences of rapid urbanisation in LEDCs. [10 marks]",marks:10}
  ],
  history: [
    {q:"To what extent was Germany responsible for the outbreak of World War I in 1914? [15 marks]",marks:15},
    {q:"Explain the main causes of the Cold War between 1945 and 1949. [10 marks]",marks:10},
    {q:"Evaluate the impact of the Civil Rights Movement in the USA between 1955 and 1968. [15 marks]",marks:15},
    {q:"Why did the Holocaust happen? [10 marks]",marks:10},
    {q:"Assess the reasons for the fall of the Berlin Wall in 1989. [10 marks]",marks:10}
  ],
  ict: [
    {q:"Explain the fetch-decode-execute cycle. [4 marks]",marks:4},
    {q:"Describe the differences between RAM and ROM. [3 marks]",marks:3},
    {q:"Explain how data is represented in binary and convert denary 157 to 8-bit binary. [4 marks]",marks:4},
    {q:"Describe three security threats to computer systems and explain how they can be prevented. [6 marks]",marks:6},
    {q:"Explain the advantages and disadvantages of cloud computing. [5 marks]",marks:5}
  ],
  'additional-maths': [
    {q:"Factorise completely: x³ - 3x² - 4x + 12. [3 marks]",marks:3},
    {q:"Solve the inequality 2x² - 5x - 3 > 0. [4 marks]",marks:4},
    {q:"Find the sum of the first 20 terms of the arithmetic progression: 3, 7, 11, 15, ... [3 marks]",marks:3},
    {q:"Prove that log(ab) = log a + log b. [3 marks]",marks:3},
    {q:"Solve the equation 2sin x = 1 for 0° ≤ x ≤ 360°. [4 marks]",marks:4}
  ],
  business: [
    {q:"Explain the benefits of market segmentation for a business. [5 marks]",marks:5},
    {q:"Calculate break-even point given: fixed costs = $10,000, variable cost per unit = $5, selling price = $15. [3 marks]",marks:3},
    {q:"Evaluate the advantages and disadvantages of franchising for the franchisee. [6 marks]",marks:6},
    {q:"Explain how a business might improve its cash flow. [5 marks]",marks:5},
    {q:"Analyse the impact of globalisation on businesses. [10 marks]",marks:10}
  ],
  accounting: [
    {q:"Explain the purpose of a trial balance and describe what happens if it does not balance. [4 marks]",marks:4},
    {q:"Prepare journal entries for: (a) Purchase of goods on credit $500 (b) Payment of rent $200 [4 marks]",marks:4},
    {q:"Calculate gross profit and net profit given: Revenue = $50,000, Cost of sales = $30,000, Expenses = $12,000. [3 marks]",marks:3},
    {q:"Explain the difference between capital expenditure and revenue expenditure. [4 marks]",marks:4},
    {q:"Evaluate the usefulness of ratio analysis to stakeholders. [6 marks]",marks:6}
  ],
  english: [
    {q:"Analyse how the writer creates tension in the given extract. [10 marks]",marks:10},
    {q:"Compare how two poets present the theme of love in their poems. [15 marks]",marks:15},
    {q:"Write a persuasive article arguing for or against school uniform. [20 marks]",marks:20},
    {q:"Analyse the character of [named character] and their importance to the play. [15 marks]",marks:15},
    {q:"Write a descriptive piece about a place that is significant to you. [20 marks]",marks:20}
  ],
  chinese: [
    {q:"分析这首诗的主题和写作手法。[10分]",marks:10},
    {q:"比较两位作家在作品中所表现的思想感情。[15分]",marks:15},
    {q:"写一篇文章讨论网络对青少年学习的影响。[20分]",marks:20},
    {q:"翻译以下文言文段落并解释重点词语。[10分]",marks:10},
    {q:"描述你最喜欢的一个中国传统节日。[15分]",marks:15}
  ],
  psychology: [
    {q:"Outline and evaluate the working memory model. [12 marks]",marks:12},
    {q:"Describe and evaluate Milgram's research into obedience. [12 marks]",marks:12},
    {q:"Discuss the cognitive approach to explaining depression. [16 marks]",marks:16},
    {q:"Explain the process of classical conditioning using Pavlov's research. [8 marks]",marks:8},
    {q:"Evaluate the use of case studies in psychological research. [8 marks]",marks:8}
  ]
};

let examTimer = null;
let timeRemaining = 0;
let currentExam = [];

function initMockExam() {
  const select = document.getElementById('mockSubject');
  if (!select) return;
  Object.keys(examQuestions).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
    select.appendChild(opt);
  });
}

function startMockExam() {
  const subject = document.getElementById('mockSubject').value;
  const duration = parseInt(document.getElementById('mockDuration').value);
  const count = parseInt(document.getElementById('mockCount').value);
  
  if (!subject || !examQuestions[subject]) return;
  
  currentExam = [...examQuestions[subject]].sort(() => Math.random() - 0.5).slice(0, count);
  timeRemaining = duration * 60;
  
  document.getElementById('mock-setup').style.display = 'none';
  document.getElementById('mock-exam-area').style.display = 'block';
  document.getElementById('mock-results').style.display = 'none';
  document.getElementById('examTimer').style.display = 'block';
  
  document.getElementById('examTitle').textContent = subject.charAt(0).toUpperCase() + subject.slice(1).replace(/-/g, ' ') + ' Mock Exam';
  document.getElementById('examInfo').textContent = duration + ' minutes · ' + count + ' questions';
  
  const totalMarks = currentExam.reduce((a, b) => a + b.marks, 0);
  document.getElementById('totalMarks').textContent = totalMarks;
  
  let html = '';
  currentExam.forEach((q, i) => {
    html += '<div class="question-block">';
    html += '<h4>Question ' + (i+1) + '</h4>';
    html += '<div class="marks">[' + q.marks + ' marks]</div>';
    html += '<p>' + q.q + '</p>';
    html += '<textarea id="answer-' + i + '" placeholder="Type your answer here..."></textarea>';
    html += '</div>';
  });
  document.getElementById('questionsContainer').innerHTML = html;
  
  startTimer();
}

function startTimer() {
  updateTimerDisplay();
  examTimer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(examTimer);
      submitMockExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  const el = document.getElementById('examTimer');
  el.textContent = mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
  if (timeRemaining < 300) el.classList.add('warning');
}

function submitMockExam() {
  clearInterval(examTimer);
  document.getElementById('examTimer').style.display = 'none';
  document.getElementById('mock-exam-area').style.display = 'none';
  document.getElementById('mock-results').style.display = 'block';
  
  const answers = [];
  let html = '<h3>Your Answers</h3>';
  currentExam.forEach((q, i) => {
    const ans = document.getElementById('answer-' + i).value;
    answers.push({ question: q.q, answer: ans, marks: q.marks });
    html += '<div style="margin-bottom:16px;padding:16px;background:var(--light);border-radius:var(--radius);">';
    html += '<p><strong>Q' + (i+1) + ' (' + q.marks + ' marks):</strong> ' + q.q + '</p>';
    html += '<p style="margin-top:8px;"><strong>Your answer:</strong></p>';
    html += '<p style="background:white;padding:12px;border-radius:var(--radius);border:1px solid var(--gray-light);">' + (ans || '<em>No answer</em>') + '</p>';
    html += '</div>';
  });
  document.getElementById('savedAnswers').innerHTML = html;
  
  localStorage.setItem('lastMockExam', JSON.stringify({ subject: document.getElementById('mockSubject').value, answers, date: new Date().toISOString() }));
}

function resetMockExam() {
  document.getElementById('mock-results').style.display = 'none';
  document.getElementById('mock-setup').style.display = 'block';
  clearInterval(examTimer);
}

initMockExam();
