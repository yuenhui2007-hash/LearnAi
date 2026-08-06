// Zetrix AI Academy — Progress tracking, level unlocking & certificate
(function() {
  const STORAGE_KEY = 'zetrix_academy_progress';
  const API_BASE = window.location.origin.includes('localhost')
    ? 'http://localhost:10000/api'
    : (window.location.origin + '/api');

  function getAuthToken() {
    return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  }

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
    syncProgressToBackend(level, score);
    updateUI();
    checkCertificateEligibility();
  }

  // Sync progress to backend for certificate tracking
  async function syncProgressToBackend(level, score) {
    const token = getAuthToken();
    if (!token) return;
    try {
      await fetch(API_BASE + '/study/academy-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ level, score, completed: true })
      });
    } catch (e) {
      console.log('Progress sync failed (offline mode)', e);
    }
  }

  // Check if user is eligible for certificate
  async function checkCertificateEligibility() {
    const token = getAuthToken();
    if (!token) return;

    const p = getProgress();
    const levels = [1, 2, 3, 4, 5, 6];
    const completed = levels.filter(l => p[l] && p[l].completed);
    const scores = completed.map(l => p[l].score || 0);
    const avg = completed.length > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / completed.length)
      : 0;

    // Only check with backend if all 6 completed and avg >= 80
    if (completed.length === 6 && avg >= 80) {
      try {
        const res = await fetch(API_BASE + '/certificates/me', {
          headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await res.json();
        updateCertificateUI(data);
      } catch (e) {
        console.log('Certificate check failed', e);
      }
    }
  }

  function updateCertificateUI(certData) {
    const certSection = document.getElementById('certStatus');
    const certBtn = document.getElementById('certBtn');
    if (!certSection) return;

    if (certData.certificate) {
      certSection.innerHTML = `
        <div style="background:#dcfce7;padding:20px;border-radius:12px;margin:16px 0;">
          <div style="font-size:2rem;margin-bottom:8px;">🎉</div>
          <strong style="color:#166534;font-size:1.1rem;">Certificate Issued!</strong>
          <p style="color:#166534;margin:8px 0;font-size:0.9rem;">
            ID: ${certData.certificate.certId}<br>
            Score: ${certData.certificate.score}%<br>
            Sent to: ${certData.certificate.userEmail}
          </p>
        </div>
      `;
      if (certBtn) certBtn.style.display = 'none';
    } else if (certData.eligible) {
      certSection.innerHTML = `
        <div style="background:#dbeafe;padding:20px;border-radius:12px;margin:16px 0;">
          <div style="font-size:2rem;margin-bottom:8px;">🏆</div>
          <strong style="color:#1e40af;">You're eligible!</strong>
          <p style="color:#1e40af;margin:8px 0;font-size:0.9rem;">
            Average score: ${certData.averageScore}% — Click below to receive your certificate.
          </p>
        </div>
      `;
      if (certBtn) {
        certBtn.style.display = 'inline-flex';
        certBtn.textContent = '📧 Get My Certificate';
        certBtn.onclick = issueCertificate;
      }
    } else {
      const completed = certData.completedLevels || 0;
      const avg = certData.averageScore || 0;
      certSection.innerHTML = `
        <div style="background:#f1f5f9;padding:16px;border-radius:12px;margin:16px 0;">
          <p style="color:#64748b;font-size:0.9rem;">
            ${completed}/6 levels completed · ${avg}% average (need 80%+)
          </p>
          <div style="width:100%;height:8px;background:#e2e8f0;border-radius:50px;margin-top:8px;overflow:hidden;">
            <div style="width:${(completed/6)*100}%;height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6);border-radius:50px;"></div>
          </div>
        </div>
      `;
      if (certBtn) certBtn.style.display = 'none';
    }
  }

  async function issueCertificate() {
    const token = getAuthToken();
    if (!token) {
      alert('Please sign in to receive your certificate.');
      return;
    }

    const btn = document.getElementById('certBtn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }

    try {
      const res = await fetch(API_BASE + '/certificates/issue', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + token }
      });
      const data = await res.json();

      if (data.success) {
        alert('🎉 Congratulations! Your certificate has been emailed to you.\n\nCertificate ID: ' + data.certificate.certId);
        checkCertificateEligibility();
      } else {
        alert('Error: ' + (data.error || 'Could not issue certificate'));
      }
    } catch (e) {
      alert('Network error. Please try again.');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = '📧 Get My Certificate';
      }
    }
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

  window.Academy = {
    getProgress, saveProgress, isLevelUnlocked, markLevelCompleted,
    updateUI, initQuiz, issueCertificate, checkCertificateEligibility
  };

  document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    checkCertificateEligibility();
  });
})();
