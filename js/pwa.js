/**
 * LearnAI PWA Registration + Mobile UX Enhancements
 */
(function() {
  'use strict';

  // ===== Register Service Worker =====
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js')
        .then(function(reg) { console.log('SW registered:', reg.scope); })
        .catch(function(err) { console.log('SW registration failed:', err); });
    });
  }

  // ===== Mobile Bottom Navigation =====
  function initMobileNav() {
    if (document.getElementById('mobile-bottom-nav')) return;
    if (window.innerWidth > 768) return;

    var isNotes = window.location.pathname.includes('/notes/');
    var prefix = isNotes ? '../' : './';

    var pages = [
      { icon: '🏠', label: 'Home', href: prefix + 'index.html' },
      { icon: '📚', label: 'Subjects', href: prefix + 'subjects.html' },
      { icon: '🤖', label: 'Tutor', href: prefix + 'tutor.html' },
      { icon: '📊', label: 'Progress', href: prefix + 'dashboard.html' },
      { icon: '⚙️', label: 'More', action: 'toggleMobileMenu' }
    ];

    var nav = document.createElement('nav');
    nav.id = 'mobile-bottom-nav';
    nav.className = 'mobile-bottom-nav';
    nav.innerHTML = pages.map(function(p) {
      if (p.action) {
        return '<button class="mobile-nav-item" onclick="window.toggleMobileMenu&&window.toggleMobileMenu()">' +
          '<span class="mobile-nav-icon">' + p.icon + '</span>' +
          '<span class="mobile-nav-label">' + p.label + '</span></button>';
      }
      var active = window.location.href.includes(p.href.replace(prefix, '')) ? ' active' : '';
      return '<a href="' + p.href + '" class="mobile-nav-item' + active + '">' +
        '<span class="mobile-nav-icon">' + p.icon + '</span>' +
        '<span class="mobile-nav-label">' + p.label + '</span></a>';
    }).join('');

    document.body.appendChild(nav);
    document.body.classList.add('has-mobile-nav');
  }

  // ===== Mobile Menu Overlay =====
  window.toggleMobileMenu = function() {
    var existing = document.getElementById('mobile-menu-overlay');
    if (existing) { existing.remove(); return; }

    var overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';
    overlay.className = 'mobile-menu-overlay';
    overlay.innerHTML =
      '<div class="mobile-menu-panel">' +
        '<div class="mobile-menu-header">' +
          '<span class="logo"><span class="logo-icon">🎓</span>LearnAI</span>' +
          '<button class="mobile-menu-close" onclick="window.toggleMobileMenu()">✕</button>' +
        '</div>' +
        '<div class="mobile-menu-links">' +
          '<a href="index.html">🏠 Home</a>' +
          '<a href="subjects.html">📚 Subjects</a>' +
          '<a href="tutor.html">🤖 AI Tutor</a>' +
          '<a href="academy.html">🎓 AI Academy</a>' +
          '<a href="dashboard.html">📊 My Progress</a>' +
          '<a href="planner.html">📅 Planner</a>' +
          '<a href="study-tools.html">📝 Study Tools</a>' +
          '<a href="exam-practice.html">📝 Exam Practice</a>' +
          '<hr>' +
          '<a href="login.html" id="mobileMenuAuth">🔑 Sign In</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    setTimeout(function() { overlay.classList.add('open'); }, 10);

    // Update auth link
    if (typeof Auth !== 'undefined' && Auth.getUser) {
      Auth.getUser().then(function(user) {
        var authLink = document.getElementById('mobileMenuAuth');
        if (authLink && user) {
          authLink.textContent = '👤 ' + (user.name || 'Account') + ' — Sign Out';
          authLink.href = '#';
          authLink.onclick = function() { Auth.logout(); return false; };
        }
      });
    }
  };

  // ===== Touch Feedback =====
  function addTouchFeedback() {
    document.querySelectorAll('a, button, .btn, .subject-card, .level-card, .dept-card').forEach(function(el) {
      el.addEventListener('touchstart', function() { this.classList.add('touch-active'); });
      el.addEventListener('touchend', function() { this.classList.remove('touch-active'); });
    });
  }

  // ===== Prevent Zoom on Input Focus (iOS) =====
  var metaViewport = document.querySelector('meta[name=viewport]');
  if (metaViewport && !metaViewport.content.includes('maximum-scale')) {
    metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';
  }

  // ===== Initialize =====
  function init() {
    initMobileNav();
    addTouchFeedback();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init on resize (switch between mobile/desktop)
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      var mobileNav = document.getElementById('mobile-bottom-nav');
      if (window.innerWidth > 768 && mobileNav) {
        mobileNav.remove();
        document.body.classList.remove('has-mobile-nav');
      } else if (window.innerWidth <= 768 && !mobileNav) {
        initMobileNav();
      }
    }, 250);
  });
})();
