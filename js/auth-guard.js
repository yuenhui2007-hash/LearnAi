(function(){
'use strict';
var protectedPages = ['dashboard.html','planner.html','study-tools.html','exam-practice.html','flashcards.html','mock-exam.html','ai-marker.html','quiz.html'];
var path = window.location.pathname;
var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
var isProtected = protectedPages.indexOf(page) !== -1;
var isAuthPage = page === 'login.html' || page === 'register.html';

// Hide protected pages until auth check completes (prevents flash)
if (isProtected) {
  document.documentElement.style.visibility = 'hidden';
}

// Always verify auth with server (handles cookie-based OAuth login)
fetch('/api/auth/me', { credentials: 'include' })
  .then(function(res) {
    if (!res.ok) throw new Error('Not authenticated');
    return res.json();
  })
  .then(function(data) {
    if (data.user) {
      localStorage.setItem('learnai_auth', JSON.stringify(data.user));
      if (isAuthPage) {
        var params = new URLSearchParams(window.location.search);
        window.location.replace(params.get('redirect') || 'dashboard.html');
      } else if (isProtected) {
        document.documentElement.style.visibility = '';
      }
    } else {
      throw new Error('No user');
    }
  })
  .catch(function() {
    localStorage.removeItem('learnai_auth');
    if (isProtected) {
      window.location.replace('login.html?redirect=' + encodeURIComponent(window.location.href));
    }
  });
})();
