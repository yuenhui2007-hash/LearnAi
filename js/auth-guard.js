/* LearnAI Auth Guard - Redirect to login if not authenticated */
(function(){
  'use strict';
  var AUTH_KEY = 'learnai_auth_user';
  var user = localStorage.getItem(AUTH_KEY);
  if (!user) {
    window.location.replace('login.html?redirect=' + encodeURIComponent(window.location.pathname.split('/').pop()));
  }
})();
