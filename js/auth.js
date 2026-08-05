/**
 * LearnAI — Simple localStorage user tracking (no auth required)
 */
(function() {
    'use strict';
    const AUTH_KEY = '***';

    window.Auth = {
        register: function(email, password) {
            const users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
            if (users.find(u => u.email === email)) {
                return { success: false, error: 'Account already exists.' };
            }
            const user = { email, password, id: Date.now(), created: new Date().toISOString() };
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

        logout: function() {
            localStorage.removeItem(AUTH_KEY);
            window.location.reload();
        },

        getUser: function() {
            const data = localStorage.getItem(AUTH_KEY);
            return data ? JSON.parse(data) : null;
        },

        updateNav: function() {
            const user = this.getUser();
            const navAuth = document.getElementById('navAuth');
            if (navAuth) {
                navAuth.innerHTML = user
                    ? `<a href="dashboard.html" class="nav-link">My Progress</a>`
                    : `<a href="dashboard.html" class="nav-link">My Progress</a>`;
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        Auth.updateNav();
    });
})();
