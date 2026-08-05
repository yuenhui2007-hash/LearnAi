/**
 * LearnAI Auth System
 * Simple localStorage-based auth for demo purposes.
 */
(function() {
    'use strict';

    const AUTH_KEY = 'learnai_user';
    const SUBSCRIPTION_KEY = 'learnai_subscription';

    window.Auth = {
        register: function(email, password, plan) {
            const users = JSON.parse(localStorage.getItem('learnai_users') || '[]');
            if (users.find(u => u.email === email)) {
                return { success: false, error: 'Account already exists. Please sign in.' };
            }
            const user = { email, password, id: Date.now(), created: new Date().toISOString() };
            users.push(user);
            localStorage.setItem('learnai_users', JSON.stringify(users));
            localStorage.setItem(AUTH_KEY, JSON.stringify(user));
            localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify({
                plan: plan || 'none',
                active: plan ? true : false,
                expiry: plan === 'annual' ? Date.now() + 365*24*60*60*1000 : Date.now() + 30*24*60*60*1000
            }));
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
            window.location.href = 'index.html';
        },

        getUser: function() {
            const data = localStorage.getItem(AUTH_KEY);
            return data ? JSON.parse(data) : null;
        },

        isSubscribed: function() {
            const sub = localStorage.getItem(SUBSCRIPTION_KEY);
            if (!sub) return false;
            const s = JSON.parse(sub);
            return s.active && s.expiry > Date.now();
        },

        requireAuth: function() {
            if (!this.getUser()) {
                window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname.split('/').pop());
                return false;
            }
            return true;
        },

        requireSubscription: function() {
            if (!this.requireAuth()) return false;
            if (!this.isSubscribed()) {
                window.location.href = 'pricing.html?reason=subscribe';
                return false;
            }
            return true;
        },

        updateNav: function() {
            const user = this.getUser();
            const navAuth = document.getElementById('navAuth');
            if (navAuth) {
                if (user) {
                    navAuth.innerHTML = `<a href="dashboard.html" class="nav-link">Dashboard</a><a href="#" class="nav-link" onclick="Auth.logout();return false;">Sign Out</a>`;
                } else {
                    navAuth.innerHTML = `<a href="login.html" class="nav-link btn btn-primary">Sign In</a>`;
                }
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        Auth.updateNav();
    });
})();
