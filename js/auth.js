(function(){
'use strict';

const API_BASE = window.location.origin.includes('localhost')
  ? 'http://localhost:10000/api'
  : window.location.origin + '/api';

window.Auth = {
  register: async function(email, password, name, phone) {
    try {
      const res = await fetch(API_BASE + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password, name, phone })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Registration failed' };
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  },

  login: async function(email, password) {
    try {
      const res = await fetch(API_BASE + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Invalid email or password.' };
      return { success: true, user: data.user };
    } catch (err) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  },

  logout: async function() {
    try {
      await fetch(API_BASE + '/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (err) {}
    localStorage.removeItem('learnai_auth');
    localStorage.removeItem('auth_token');
    window.location.href = 'index.html';
  },

  getUser: async function() {
    try {
      const res = await fetch(API_BASE + '/auth/me', {
        method: 'GET',
        credentials: 'include'
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.user || null;
    } catch (err) {
      return null;
    }
  },

  updateNav: async function() {
    const user = await this.getUser();
    var el = document.getElementById('navAuth');
    if (el) {
      el.innerHTML = user
        ? '<a href="#" class="nav-link" onclick="Auth.logout();return false;">' + (user.name || 'Account') + ' — Sign Out</a>'
        : '<a href="login.html" class="nav-link">Sign In / Sign Up</a>';
    }
  }
};

document.addEventListener('DOMContentLoaded', function() { Auth.updateNav(); });
})();
