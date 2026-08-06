// Zetrix AI Academy — Progress tracking & level unlocking
(function() {
  const STORAGE_KEY = 'zetrix_academy_progress';

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }

  function isLevelUnlocked(level) {
    if (level === 1) return true;
    const p = getProgress();
    return p[level - 1] && p[level - 1].completed;
  }

  function markLevelCompleted(level, score) {
    const p = getProgress();
    p[level] = { completed: true, score: score || 0, date: new Date().toISOString() };
    saveProgress(p);
    updateUI();
  }

  function updateUI() {
    const p = getProgress();
    const totalLevels = 6;
    const completed = Object.keys(p).filter(k => p[k].completed).length;
    const pct = Math.round((completed / totalLevels) * 100);

    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '%';

    // Update level cards
    document.querySelectorAll('.level-card').forEach(card => {
      const href = card.getAttribute('href');
      if (!href) return;
      const m = href.match(/level(\d)/);
      if (!m) return;
      const level = parseInt(m[1]);
      const locked = !isLevelUnlocked(level);
      const meta = card.querySelector('.level-meta');
      if (meta) {
        const lockSpan = meta.querySelector('.locked, .unlocked');
        if (lockSpan) {
          if (locked) {
            lockSpan.textContent = '🔒 Complete Level ' + (level - 1);
            lockSpan.className = 'locked';
            card.style.opacity = '0.6';
            card.style.pointerEvents = 'none';
          } else {
            lockSpan.textContent = p[level] && p[level].completed ? '✅ Completed' : '🔓 Unlocked';
            lockSpan.className = p[level] && p[level].completed ? 'unlocked' : 'locked';
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
          }
        }
      }
    });
  }

  function initQuiz(formId, answers, passScore, onPass) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      let score = 0;
      answers.forEach((ans, i) => {
        const selected = form.querySelector('input[name="q' + (i+1) + '"]:checked');
        if (selected && selected.value === ans) score++;
      });
      const pct = Math.round((score / answers.length) * 100);
      const result = document.getElementById(formId + '-result');
      if (result) {
        result.style.display = 'block';
        if (pct >= passScore) {
          result.innerHTML = '<div style="background:#dcfce7;padding:16px;border-radius:12px;color:#166534"><strong>Passed! ' + pct + '%</strong><br>You may proceed to the next level.</div>';
          if (onPass) onPass(pct);
        } else {
          result.innerHTML = '<div style="background:#fee2e2;padding:16px;border-radius:12px;color:#991b1b"><strong>Try again. ' + pct + '%</strong><br>You need ' + passScore + '% to pass. Review the material and retry.</div>';
        }
      }
    });
  }

  window.Academy = { getProgress, saveProgress, isLevelUnlocked, markLevelCompleted, updateUI, initQuiz };
  document.addEventListener('DOMContentLoaded', updateUI);
})();
