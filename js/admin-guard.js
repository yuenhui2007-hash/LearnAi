/* LearnAI Admin Guard - Only admin role can access */
(function(){
  'use strict';
  var AUTH_KEY = '***';
  var userData = localStorage.getItem(AUTH_KEY);
  if (!userData) {
    window.location.replace('login.html?redirect=' + encodeURIComponent(window.location.pathname.split('/').pop()));
    return;
  }
  try {
    var user = JSON.parse(userData);
    if (user.role !== 'admin') {
      alert('Access denied. Admin only.');
      window.location.replace('dashboard.html');
    }
  } catch(e) {
    window.location.replace('login.html');
  }
})();
