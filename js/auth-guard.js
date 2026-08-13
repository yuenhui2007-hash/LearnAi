(function(){
'use strict';
var protectedPages = ['dashboard.html','planner.html','study-tools.html','exam-practice.html','flashcards.html','mock-exam.html','ai-marker.html','quiz.html'];
var path = window.location.pathname;
var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
var isProtected = protectedPages.indexOf(page) !== -1;
var isAuthPage = page === 'login.html' || page === 'register.html';

var API_BASE = window.location.origin.includes('localhost')
  ? 'http://localhost:10000/api'
  : 'https://learnai-backend-n0df.onrender.com/api';

function getAuthHeaders() {
  var token = localStorage.getItem('auth_token');
  return token ? { 'Authorization': 'Bearer ' + token } : {};
}

// Hide pages until auth check completes (prevents flash/redirect loops)
if (isProtected || isAuthPage) {
  document.documentElement.style.visibility = 'hidden';
}

function checkAuth() {
  if (window.Auth && window.Auth.getUser) {
    window.Auth.getUser().then(function(user) {
      handleUser(user);
    }).catch(function() {
      handleUser(null);
    });
  } else {
    fetch(API_BASE + '/auth/me', { headers: getAuthHeaders(), credentials: 'include' })
      .then(function(res) {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then(function(data) {
        handleUser(data.user || null);
      })
      .catch(function() {
        handleUser(null);
      });
  }
}

function handleUser(user) {
  if (user) {
    localStorage.setItem('learnai_auth', JSON.stringify(user));
    if (isAuthPage) {
      var params = new URLSearchParams(window.location.search);
      window.location.replace(params.get('redirect') || 'dashboard.html');
    } else if (isProtected) {
      document.documentElement.style.visibility = '';
    }
  } else {
    localStorage.removeItem('learnai_auth');
    localStorage.removeItem('auth_token');
    if (isProtected) {
      window.location.replace('login.html?redirect=' + encodeURIComponent(window.location.href));
    } else if (isAuthPage) {
      document.documentElement.style.visibility = '';
    }
  }
}

checkAuth();
})();
