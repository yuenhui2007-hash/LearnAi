/**
 * LearnAI Auth — localStorage only, no server, no payment
 */
(function() {
    'use strict';
    const AUTH_KEY = '***';

    window.Auth = {
        register: function(email, password, name, phone) {
            const users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
            if (users.find(u => u.email === email)) return { success: false, error: 'Account already exists.' };
            const user = { email, password, name: name || '', phone: phone || '', id: Date.now(), created: new Date().toISOString() };
            users.push(user);
            localStorage.setItem('learnai_users', JSON.stringify(users));
            localStorage.setItem(AUTH_KEY, JSON.stringify(user));
            return { success: true, user };
        },
        login: function(email, password) {
            const users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) return { success: false, error: 'Invalid email or password.' };
            localStorage.setItem(AUTH_KEY, JSON.stringify(user));
            return { success: true, user };
        },
        logout: function() { localStorage.removeItem(AUTH_KEY); window.location.href = 'index.html'; },
        getUser: function() { const d = localStorage.getItem(AUTH_KEY); return d ? JSON.parse(d) : null; },
        updateNav: function() {
            const user = this.getUser();
            const el = document.getElementById('navAuth');
            if (el) el.innerHTML = user
                ? `<a href="dashboard.html" class="nav-link">My Progress</a><a href="#" class="nav-link" onclick="Auth.logout();return false;">Sign Out</a>`
                : `<a href="login.html" class="nav-link">Sign In</a>`;
        }
    };
    document.addEventListener('DOMContentLoaded', function() { Auth.updateNav(); });
})();
