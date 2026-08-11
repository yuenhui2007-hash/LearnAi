(function() {
  'use strict';

  function injectNav() {
    var isNotes = window.location.pathname.includes('/notes/');
    var prefix = isNotes ? '../' : './';

    var navHTML =
      '<div class="container nav-container">' +
        '<a href="' + prefix + 'index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>' +
        '<ul class="nav-menu" id="navMenu">' +
          '<li><a href="' + prefix + 'index.html" class="nav-link">Home</a></li>' +
          '<li class="nav-dropdown">' +
            '<a href="' + prefix + 'subjects.html" class="nav-link nav-dropdown-toggle">Subjects</a>' +
            '<div class="nav-dropdown-menu">' +
              '<a href="' + prefix + 'subjects.html?board=caie" class="nav-link">CAIE</a>' +
              '<a href="' + prefix + 'subjects.html?board=edexcel" class="nav-link">Edexcel</a>' +
              '<a href="' + prefix + 'subjects.html?board=ib" class="nav-link">IB</a>' +
            '</div>' +
          '</li>' +
          '<li><a href="' + prefix + 'tutor.html" class="nav-link">AI Tutor</a></li>' +
          '<li><a href="' + prefix + 'academy.html" class="nav-link">AI Academy</a></li>' +
          '<li><a href="' + prefix + 'dashboard.html" class="nav-link">My Progress</a></li>' +
          '<li id="navAuth"><a href="' + prefix + 'login.html" class="nav-link">Sign In / Sign Up</a></li>' +
        '</ul>' +
      '</div>';

    var navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.innerHTML = navHTML;
    } else {
      navbar = document.createElement('nav');
      navbar.className = 'navbar';
      navbar.id = 'navbar';
      navbar.innerHTML = navHTML;
      document.body.insertBefore(navbar, document.body.firstChild);
    }

    // Re-attach mobile toggle
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
      });
    }

    // Update auth state if Auth module is loaded
    if (typeof window.Auth !== 'undefined' && window.Auth.updateNav) {
      window.Auth.updateNav();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }
})();
