(function(){
'use strict';
const AUTH_KEY = '***';
window.Auth = {
  register: function(email, password, name, phone) {
    var users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
    if (users.find(function(u){ return u.email === email; })) return { success: false, error: 'Account already exists.' };
    var user = { email: email, password: password, name: name || '', phone: phone || '', id: Date.now(), created: new Date().toISOString() };
    users.push(user); localStorage.setItem('learnai_users', JSON.stringify(users)); localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return { success: true, user: user };
  },
  login: function(email, password) {
    var users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
    var user = users.find(function(u){ return u.email === email && u.password === password; });
    if (!user) return { success: false, error: 'Invalid email or password.' };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user)); return { success: true, user: user };
  },
  logout: function() { localStorage.removeItem(AUTH_KEY); window.location.href = 'index.html'; },
  getUser: function() { var d = localStorage.getItem(AUTH_KEY); return d ? JSON.parse(d) : null; },
  updateNav: function() {
    var user = this.getUser();
    var el = document.getElementById('navAuth');
    if (el) el.innerHTML = user ? '<a href="#" class="nav-link" onclick="Auth.logout();return false;">Sign Out</a>' : '<a href="login.html" class="nav-link">Sign In / Sign Up</a>';
  }
};
document.addEventListener('DOMContentLoaded', function() { Auth.updateNav(); });
})();
