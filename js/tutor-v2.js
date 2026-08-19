// Zetrix AI Academy Tutor v3
// Focused AI tutor for Zetrix AI Academy PKM content.
// Cloudflare Worker AI first, falls back to built-in knowledge base.

const API_URL = 'https://round-breeze-1dcc.m-14324261.workers.dev';

const SYSTEM_PROMPT = `You are the Zetrix AI Academy Tutor — an expert learning assistant for AI, Zetrix Avatar, Zetrix Claw, business automation, sales & marketing AI, personal productivity, AI for coding, and one-person companies.

Rules:
- Answer the question first, then expand with context
- Use adaptive teaching: simple analogies for beginners, technical depth for advanced
- Distinguish verified Zetrix facts from general knowledge
- Never invent Zetrix features, pricing, APIs, or settings
- Connect theory to practical application; encourage user independence
- Be encouraging, clear, and concise. Friendly and conversational.`;

// ===================== STATE =====================
let conversationHistory = [];
let currentSubject = 'all';
let currentDifficulty = localStorage.getItem('tutorDifficulty') || 'beginner';
let tutorMode = localStorage.getItem('tutorMode') || 'normal'; // normal | socratic | teachback
let lastTopic = '';

// ===================== DIFFICULTY LABELS =====================
const difficultyLabels = {
  beginner: { prefix: '', style: 'Use simple language, analogies, and everyday examples. Minimal jargon.' },
  intermediate: { prefix: '', style: 'Use correct terminology, architecture, and workflows.' },
  advanced: { prefix: '', style: 'Use technical terminology, trade-offs, implementation details, performance, scalability, security.' }
};

// ===================== XP & PROGRESS =====================
const XP = {
  key: 'zetrix_tutor_xp',
  get() { return JSON.parse(localStorage.getItem(this.key) || '{"xp":0,"level":1,"topics":[],"streak":0,"lastActive":null,"quizzesTaken":0,"quizzesPassed":0}'); },
  save(data) { localStorage.setItem(this.key, JSON.stringify(data)); },
  add(points, topic) {
    const d = this.get();
    d.xp += points;
    if (topic && !d.topics.includes(topic)) d.topics.push(topic);
    const today = new Date().toDateString();
    if (d.lastActive !== today) {
      d.lastActive = today;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      d.streak = (d.lastActive === yesterday || d.streak === 0) ? d.streak + 1 : 1;
    }
    d.level = Math.floor(Math.sqrt(d.xp / 100)) + 1;
    this.save(d);
    this.render();
  },
  recordQuiz(passed) {
    const d = this.get();
    d.quizzesTaken++;
    if (passed) d.quizzesPassed++;
    this.save(d);
    this.render();
  },
  render() {
    const bar = document.getElementById('xpBar');
    const text = document.getElementById('xpText');
    if (!bar) return;
    const d = this.get();
    const next = (Math.pow(d.level, 2) * 100);
    const prev = (Math.pow(d.level - 1, 2) * 100);
    const pct = Math.min(100, Math.round((d.xp - prev) / (next - prev) * 100));
    bar.style.width = pct + '%';
    if (text) text.textContent = `Lv.${d.level}  ${d.xp} XP  🔥${d.streak}`;
  }
};

// ===================== MEMORY =====================
const Memory = {
  key: 'zetrix_tutor_memory',
  get() { return JSON.parse(localStorage.getItem(this.key) || '{"topics":[],"recent":[]}'); },
  save(data) { localStorage.setItem(this.key, JSON.stringify(data)); },
  recordTopic(topic) {
    const d = this.get();
    if (!d.topics.includes(topic)) d.topics.unshift(topic);
    if (d.topics.length > 20) d.topics = d.topics.slice(0, 20);
    this.save(d);
  },
  recordInteraction(text, response) {
    const d = this.get();
    d.recent.push({ q: text, r: response, t: Date.now() });
    if (d.recent.length > 10) d.recent = d.recent.slice(-10);
    this.save(d);
  },
  getRecentTopics() {
    return this.get().topics.slice(0, 5);
  },
  getContext() {
    const rec = this.get().recent.slice(-3);
    return rec.map(m => `Previously discussed: "${m.q}"`).join('\n');
  }
};

// ===================== MERGED KNOWLEDGE =====================
const baseKnowledge = {
  greetings: {
    patterns: ['hello','hi','hey','greetings','sup','yo','good morning','good afternoon','good evening','how are you','what\'s up'],
    response: `<h4>👋 Welcome to Zetrix AI Academy</h4>
<p>I am your AI Academy Tutor. Ask me about:</p>
<ul>
  <li>AI concepts (neural networks, LLMs, RAG, fine-tuning, agents)</li>
  <li>Zetrix Avatar and Zetrix Claw</li>
  <li>Business automation & AI workflows</li>
  <li>Sales & marketing with AI</li>
  <li>Personal productivity & prompt engineering</li>
  <li>AI for coding & debugging</li>
  <li>Building one-person companies</li>
</ul>
<p><strong>Tip:</strong> Say <strong>"quiz me"</strong> for practice questions, <strong>"simpler"</strong> for easier explanations, or <strong>"harder"</strong> for advanced depth.</p>`,
    related: ['what is ai','what is rag','quiz me','ai avatar']
  },
  fallback: {
    patterns: [],
    response: `<h4>Zetrix AI Academy</h4>
<p>I don't have a specific entry for that yet. Try asking about:</p>
<ul>
  <li>AI concepts: neural networks, transformers, LLMs, RAG, fine-tuning</li>
  <li>Zetrix products: Avatar, Claw</li>
  <li>Applications: automation, sales, coding, productivity</li>
</ul>
<p>Say <strong>"quiz me"</strong> for practice questions!</p>`,
    related: ['what is ai','what is rag','ai avatar','quiz me']
  }
};

const mergedKnowledgeBase = typeof zetrixKnowledgeBase !== 'undefined'
  ? { ...baseKnowledge, ...zetrixKnowledgeBase }
  : baseKnowledge;

// ===================== INIT =====================
let chatArea, userInput, sendBtn;

function initTutor() {
  chatArea = document.getElementById('chatArea');
  userInput = document.getElementById('userInput');
  sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', handleSend);
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });

  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubject = btn.dataset.subject;
      updateSuggestions();
    });
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => { userInput.value = chip.textContent; handleSend(); });
  });

  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDifficulty = btn.dataset.difficulty;
      localStorage.setItem('tutorDifficulty', currentDifficulty);
    });
  });

  // Restore difficulty UI
  const diffBtn = document.querySelector(`.difficulty-btn[data-difficulty="${currentDifficulty}"]`);
  if (diffBtn) { document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active')); diffBtn.classList.add('active'); }

  XP.render();
  Avatar.init();
}

function updateSuggestions() {
  const suggestions = document.getElementById('suggestions');
  const map = {
    all: ['What is RAG?','What is an AI avatar?','Explain neural networks','What is fine-tuning?','Quiz me on AI','Business automation'],
    ai: ['What is RAG?','Explain transformers','What are AI agents?','What is fine-tuning?','Quiz me on AI'],
    avatar: ['What is an AI avatar?','Voice agents','Digital humans','Avatar knowledge vs memory','Avatar tools'],
    business: ['Business automation','AI for sales','AI for marketing','One-person company','Prompt engineering'],
    coding: ['AI coding assistants','Debugging with AI','Code review','API integration','Quiz me on AI']
  };
  const items = map[currentSubject] || map.all;
  suggestions.innerHTML = items.map(s => `<span class="chip">${s}</span>`).join('');
  suggestions.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => { userInput.value = chip.textContent; handleSend(); });
  });
}

// ===================== SEND / RESPONSE =====================
async function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;
  userInput.value = '';

  addMessage(text, 'user');
  conversationHistory.push({ role: 'user', text });

  showTyping();

  // Mode commands
  const lower = text.toLowerCase();
  if (lower === 'socratic mode' || lower === 'socratic') {
    tutorMode = 'socratic';
    localStorage.setItem('tutorMode', tutorMode);
    hideTyping();
    addMessage(`<h4>Socratic Mode On</h4><p>I'll guide you with questions instead of giving direct answers. What would you like to explore?</p>`, 'bot');
    return;
  }
  if (lower === 'normal mode' || lower === 'normal') {
    tutorMode = 'normal';
    localStorage.setItem('tutorMode', tutorMode);
    hideTyping();
    addMessage(`<h4>Normal Mode On</h4><p>Back to direct answers. Ask away!</p>`, 'bot');
    return;
  }
  if (lower === 'teach back' || lower === 'teachback' || lower === 'explain back') {
    tutorMode = 'teachback';
    localStorage.setItem('tutorMode', tutorMode);
    hideTyping();
    addMessage(`<h4>Teach-Back Mode On</h4><p>Explain the last topic in your own words, and I'll give you feedback.</p>`, 'bot');
    return;
  }

  if (API_URL) {
    try {
      const messages = [{ role: 'system', content: buildSystemPrompt() }];
      const recent = conversationHistory.slice(-6);
      recent.forEach(m => {
        messages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text.replace(/<[^>]+>/g, '') });
      });

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });
      const data = await res.json();
      hideTyping();

      if (data.reply) {
        const formatted = formatAIReply(data.reply);
        const withRelated = appendRelated(formatted, lastTopic);
        addMessage(withRelated, 'bot');
        conversationHistory.push({ role: 'bot', text: withRelated });
        Memory.recordInteraction(text, withRelated);
        XP.add(10, lastTopic);
        if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
        return;
      }
    } catch (err) {
      console.log('AI API failed, falling back to local:', err);
    }
  }

  // Fallback to local knowledge base
  const thinkTime = 400 + Math.random() * 400;
  setTimeout(() => {
    hideTyping();
    const response = getLocalResponse(text);
    const withRelated = appendRelated(response, lastTopic);
    addMessage(withRelated, 'bot');
    conversationHistory.push({ role: 'bot', text: withRelated });
    Memory.recordInteraction(text, withRelated);
    XP.add(10, lastTopic);
    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
  }, thinkTime);
}

function buildSystemPrompt() {
  const diff = difficultyLabels[currentDifficulty];
  let prompt = SYSTEM_PROMPT + '\n\nCurrent difficulty: ' + currentDifficulty + '. ' + diff.style;
  if (tutorMode === 'socratic') prompt += '\n\nYou are in SOCRATIC MODE. Teach through leading questions. Do not give the answer directly. Guide the learner to discover it.';
  if (tutorMode === 'teachback') prompt += '\n\nYou are in TEACH-BACK MODE. Ask the learner to explain the concept in their own words, then give constructive feedback.';
  const ctx = Memory.getContext();
  if (ctx) prompt += '\n\nConversation context:\n' + ctx;
  return prompt;
}

function formatAIReply(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```(.*?)```/gs, '<div class="formula-block"><code>$1</code></div>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

function appendRelated(html, topic) {
  // Find related topics from the matched knowledge entry
  let related = [];
  for (const [key, data] of Object.entries(mergedKnowledgeBase)) {
    if (!data.patterns) continue;
    for (const p of data.patterns) {
      if (topic.toLowerCase().includes(p)) { related = data.related || []; break; }
    }
    if (related.length) break;
  }
  if (!related.length) return html;
  const chips = related.map(r => `<span class="chip" onclick="document.getElementById('userInput').value='${r.replace(/'/g, "\\'")}';document.getElementById('sendBtn').click();">${r}</span>`).join(' ');
  return html + `<p style="margin-top:12px;font-size:0.85rem;color:var(--gray);"><strong>Related:</strong> ${chips}</p>`;
}

// ===================== LOCAL RESPONSE =====================
function getLocalResponse(text) {
  const lower = text.toLowerCase();

  // Simpler / Harder commands
  if (lower.includes('simpler') || lower.includes('easier') || lower.includes('make it simple')) {
    currentDifficulty = 'beginner';
    localStorage.setItem('tutorDifficulty', currentDifficulty);
    return `<h4>Switching to Beginner Mode</h4><p>I'll use simpler language and analogies. Ask your question again!</p>`;
  }
  if (lower.includes('harder') || lower.includes('advanced') || lower.includes('more technical')) {
    currentDifficulty = 'advanced';
    localStorage.setItem('tutorDifficulty', currentDifficulty);
    return `<h4>Switching to Advanced Mode</h4><p>I'll use technical terminology, trade-offs, and implementation details. Ask your question again!</p>`;
  }

  // Math calculator
  const mathResult = tryCalculate(text);
  if (mathResult !== null) {
    return `<h4>Calculation</h4><div class="formula-block">${text} = <strong>${mathResult}</strong></div>`;
  }

  // General knowledge
  const generalAnswer = tryGeneralKnowledge(text);
  if (generalAnswer !== null) return generalAnswer;

  // Greetings
  if (mergedKnowledgeBase.greetings && mergedKnowledgeBase.greetings.patterns.some(p => lower.includes(p))) {
    return mergedKnowledgeBase.greetings.response;
  }

  // Quiz mode
  if (lower.includes('practice') || lower.includes('quiz') || lower.includes('question') || lower.includes('test me')) {
    return generateZetrixQuiz();
  }

  // Teach-back check
  if (tutorMode === 'teachback' && conversationHistory.length > 2) {
    return `<h4>Teach-Back Check</h4><p>Before we continue, explain <strong>${lastTopic || 'the last concept'}</strong> in your own words. Don't worry about getting it perfect — I'll help correct any misunderstandings.</p>`;
  }

  // Socratic mode
  if (tutorMode === 'socratic') {
    const socraticQuestions = [
      "What do you think happens when an AI needs information that wasn't in its training data?",
      "If you were designing an AI avatar, what would be the most important feature?",
      "How might a business use AI to save time on repetitive tasks?",
      "What do you think makes one AI model better than another?",
      "If an AI makes a mistake, who is responsible — the AI, the developer, or the user?"
    ];
    const q = socraticQuestions[Math.floor(Math.random() * socraticQuestions.length)];
    return `<h4>Socratic Question</h4><p>${q}</p><p><em>Take a guess — there are no wrong answers here.</em></p>`;
  }

  // Pattern matching against merged knowledge base
  let bestMatch = null;
  let bestScore = 0;

  for (const [key, data] of Object.entries(mergedKnowledgeBase)) {
    if (!data.patterns || !data.patterns.length) continue;
    let score = 0;
    for (const pattern of data.patterns) {
      if (lower.includes(pattern)) score += pattern.length;
    }
    if (currentSubject !== 'all' && key.startsWith(currentSubject)) score *= 1.5;
    if (score > bestScore) { bestScore = score; bestMatch = data; lastTopic = key; }
  }

  if (bestMatch && bestScore > 0) {
    Memory.recordTopic(lastTopic);
    return bestMatch.response;
  }

  return mergedKnowledgeBase.fallback ? mergedKnowledgeBase.fallback.response : "I'm not sure about that. Try asking about AI concepts, Zetrix products, or say 'quiz me'!";
}

// ===================== QUIZ =====================
function generateZetrixQuiz() {
  const bank = mergedKnowledgeBase['quiz-request']?.quizBank;
  if (!bank || !bank.length) return 'Quiz bank not loaded yet.';

  const q = bank[Math.floor(Math.random() * bank.length)];
  const opts = q.options.map((opt, i) =>
    `<button class="quiz-opt" onclick="checkQuiz(this,${i},${q.a},'${q.explain.replace(/'/g, "\\'")}')">${String.fromCharCode(65+i)}. ${opt}</button>`
  ).join('<br>');

  return `<h4>Zetrix AI Academy — Practice Question</h4>
<p><strong>${q.q}</strong></p>
<div class="quiz-options">${opts}</div>
<div class="quiz-feedback" id="qf" style="display:none;margin-top:12px;padding:12px;border-radius:8px;"></div>`;
}

function checkQuiz(btn, selected, correct, explain) {
  const feedback = document.getElementById('qf');
  const passed = selected === correct;
  feedback.style.display = 'block';
  feedback.style.background = passed ? '#dcfce7' : '#fee2e2';
  feedback.innerHTML = `<strong>${passed ? 'Correct!' : 'Not quite.'}</strong> ${String.fromCharCode(65+correct)} — ${explain}`;
  XP.recordQuiz(passed);
  XP.add(passed ? 25 : 5, 'quiz');
}

// ===================== MATH CALCULATOR =====================
function tryCalculate(text) {
  let expr = text.replace(/what is|what's|calculate|compute|solve|find|value of/gi, '').replace(/\?/g, '').trim();
  if (!/^[-+*/^().\d\s]+$/.test(expr)) return null;
  if (!/\d/.test(expr)) return null;
  try {
    expr = expr.replace(/\^/g, '**');
    const result = new Function('return (' + expr + ')')();
    if (Number.isFinite(result)) return Number.isInteger(result) ? String(result) : String(parseFloat(result.toFixed(6)));
  } catch (e) {}
  return null;
}

// ===================== GENERAL KNOWLEDGE =====================
function tryGeneralKnowledge(text) {
  const lower = text.toLowerCase().replace(/[?!.]/g, '').trim();
  const knowledge = {
    '1+2':'1 + 2 = <strong>3</strong>','2+2':'2 + 2 = <strong>4</strong>','3+3':'3 + 3 = <strong>6</strong>','4+4':'4 + 4 = <strong>8</strong>',
    '5+5':'5 + 5 = <strong>10</strong>','10+10':'10 + 10 = <strong>20</strong>','pi':'π ≈ <strong>3.14159...</strong>',
    'square root of 16':'√16 = <strong>4</strong>','square root of 25':'√25 = <strong>5</strong>','square root of 64':'√64 = <strong>8</strong>',
    'what time is it':`It is <strong>${new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})}</strong> (UTC).`,
    'what day is it':`Today is <strong>${new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</strong>.`,
    'capital of france':'Paris','capital of japan':'Tokyo','capital of usa':'Washington, D.C.','capital of uk':'London',
    'capital of china':'Beijing','capital of india':'New Delhi',
    'who invented the telephone':'Alexander Graham Bell, 1876','who invented the light bulb':'Thomas Edison, 1879',
    'who wrote romeo and juliet':'William Shakespeare, c. 1594–1596','who painted the mona lisa':'Leonardo da Vinci, 1503–1519',
    'how many continents':'7','how many planets':'8','largest planet':'Jupiter','smallest planet':'Mercury',
    'speed of light':'≈ 3.00 × 10⁸ m/s','boiling point of water':'100°C (212°F) at 1 atm','freezing point of water':'0°C (32°F) at 1 atm'
  };
  if (knowledge[lower]) return `<h4>Answer</h4><p>${knowledge[lower]}</p>`;
  for (const [k,v] of Object.entries(knowledge)) if (lower.includes(k)) return `<h4>Answer</h4><p>${v}</p>`;
  return null;
}

// ===================== AVATAR TTS =====================
const Avatar = {
  synth: window.speechSynthesis,
  voice: null,
  enabled: true,
  animInterval: null,
  init() {
    this.loadVoice();
    if (this.synth.onvoiceschanged !== undefined) this.synth.onvoiceschanged = () => this.loadVoice();
    this.createDOM();
  },
  loadVoice() {
    const voices = this.synth.getVoices();
    this.voice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) || voices.find(v => v.lang.startsWith('en')) || voices[0];
  },
  createDOM() {
    const wrap = document.createElement('div');
    wrap.id = 'avatarWrap';
    wrap.innerHTML = `
      <div id="avBubble" style="display:none;position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:10px;background:#1e293b;color:#fff;padding:8px 14px;border-radius:10px;font-size:0.8rem;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,0.3);">
        <span id="avText">Hello!</span>
        <div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #1e293b;"></div>
      </div>
      <div id="avFace" style="width:64px;height:64px;background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;box-shadow:0 6px 20px rgba(99,102,241,0.4);cursor:pointer;transition:transform 0.2s;position:relative;">🤖
        <div id="avMouth" style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);width:16px;height:6px;background:#1e293b;border-radius:0 0 16px 16px;transition:height 0.1s;"></div>
      </div>
      <button id="avMute" style="position:absolute;top:-2px;right:-2px;width:22px;height:22px;border-radius:50%;background:#fff;border:none;box-shadow:0 1px 4px rgba(0,0,0,0.2);cursor:pointer;font-size:0.65rem;display:flex;align-items:center;justify-content:center;">🔊</button>`;
    wrap.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;align-items:center;gap:6px;';
    document.body.appendChild(wrap);
    document.getElementById('avMute').addEventListener('click', (e) => { e.stopPropagation(); this.toggle(); });
    document.getElementById('avFace').addEventListener('click', () => { this.speak("I'm your Zetrix AI Academy Tutor! Ask me anything."); });
  },
  toggle() { this.enabled = !this.enabled; document.getElementById('avMute').textContent = this.enabled ? '🔊' : '🔇'; if (!this.enabled) this.synth.cancel(); },
  speak(text) {
    if (!this.enabled || !this.synth) return;
    this.synth.cancel();
    const plain = text.replace(/<[^>]+>/g, '').replace(/\$\$.*?\$\$/g, '').replace(/\\\(|\\\)/g, '').substring(0, 280);
    if (!plain.trim()) return;
    const utter = new SpeechSynthesisUtterance(plain);
    utter.voice = this.voice; utter.rate = 1.15; utter.pitch = 1.05;
    utter.onstart = () => this.startAnim(); utter.onend = () => this.stopAnim(); utter.onerror = () => this.stopAnim();
    this.synth.speak(utter);
    const bubble = document.getElementById('avBubble');
    document.getElementById('avText').textContent = plain.substring(0, 55) + (plain.length > 55 ? '...' : '');
    bubble.style.display = 'block'; setTimeout(() => { bubble.style.display = 'none'; }, 3500);
  },
  startAnim() {
    const mouth = document.getElementById('avMouth');
    const face = document.getElementById('avFace');
    face.style.transform = 'scale(1.08)';
    let frame = 0;
    this.animInterval = setInterval(() => { frame = (frame + 1) % 4; mouth.style.height = ([6, 14, 10, 14])[frame] + 'px'; }, 140);
  },
  stopAnim() {
    clearInterval(this.animInterval);
    document.getElementById('avMouth').style.height = '6px';
    document.getElementById('avFace').style.transform = 'scale(1)';
  }
};

// ===================== UI HELPERS =====================
function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = `message message-${sender}`;
  div.innerHTML = text;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
  if (sender === 'bot') Avatar.speak(text);
}

function showTyping() {
  const div = document.createElement('div');
  div.className = 'typing';
  div.id = 'typingIndicator';
  div.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

document.addEventListener('DOMContentLoaded', initTutor);
