// Theme toggle for LearnAI — Dark/Light mode
(function() {
  const STORAGE_KEY = 'learnai-theme';
  const html = document.documentElement;

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleIcon(theme);
  }

  function toggleTheme() {
    const current = getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  function updateToggleIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function init() {
    const saved = getTheme();
    html.setAttribute('data-theme', saved);

    // Add toggle button if not present
    let btn = document.getElementById('themeToggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'themeToggle';
      btn.className = 'theme-toggle';
      btn.setAttribute('aria-label', 'Toggle dark mode');
      btn.style.cssText = 'background:none;border:none;cursor:pointer;font-size:1.2rem;padding:4px 8px;border-radius:8px;transition:background .2s;';
      btn.addEventListener('click', toggleTheme);

      const nav = document.querySelector('.nav-container');
      if (nav) {
        // Insert before hamburger on mobile, after nav links on desktop
        const toggle = document.getElementById('navToggle');
        if (toggle) {
          nav.insertBefore(btn, toggle);
        } else {
          nav.appendChild(btn);
        }
      }
    }
    updateToggleIcon(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
