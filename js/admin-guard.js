/* LearnAI Admin Guard - Only specific admin account can access */
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
    // Only allow specific admin email and password
    if (user.email !== 'yuenhui2007@gmail.com' || user.password !== 'Joshua') {
      alert('Access denied. Admin only.');
      window.location.replace('dashboard.html');
    }
  } catch(e) {
    window.location.replace('login.html');
  }
})();
