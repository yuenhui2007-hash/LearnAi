(function(){
'use strict';
var protectedPages = ['dashboard.html','planner.html','study-tools.html','exam-practice.html','flashcards.html','mock-exam.html','ai-marker.html','quiz.html'];
var path = window.location.pathname;
var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
var user = (typeof window.Auth !== 'undefined' && Auth.getUser) ? Auth.getUser() : null;
if (!user && protectedPages.indexOf(page) !== -1) {
  window.location.replace('login.html?redirect=' + encodeURIComponent(window.location.href));
} else if (user && (page === 'login.html' || page === 'register.html')) {
  window.location.replace('dashboard.html');
}
})();
